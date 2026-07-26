// Английские переводы: docker
export const docker = {
    title: 'Docker',
    description: 'Containerization: images, Dockerfile, networks, volumes, docker-compose',
    questions: {
      'docker-vs-vm': {
        question: 'What is Docker and how does a container differ from a virtual machine?',
        answer: `**Docker** is a **containerization** platform: packaging an application with all its dependencies into an isolated, portable container that runs the same everywhere ("works on my machine" stops being a problem).

The difference between a container and a **virtual machine** is the level of isolation:

- a **VM** virtualizes **hardware**: each VM carries a **full guest OS** on top of a hypervisor. Heavy (gigabytes), starts in minutes, strong isolation.
- a **container** virtualizes the **OS**: all containers on a host share **one kernel** and are isolated by Linux kernel features (**namespaces** — process/network/file isolation, **cgroups** — resource limits). Lightweight (megabytes), starts in seconds, but with weaker isolation than a VM.

Bottom line: containers are **process-level isolation** with a shared kernel, so they can be packed densely on a host and scaled quickly. VMs are needed when you require a different OS or stricter isolation. They are often combined: containers run inside a VM.

Key Docker concepts: an **image** — an immutable template (file-system layers + metadata), a **container** — a running instance of an image.`,
      },
      dockerfile: {
        question: 'What is a Dockerfile and what instructions does it consist of?',
        answer: `A **Dockerfile** is a text file with instructions from which \`docker build\` assembles an image. Each instruction describes a build step.

Main instructions:

- **\`FROM\`** — the base image the build starts from (\`FROM eclipse-temurin:21-jre\`);
- **\`WORKDIR\`** — the working directory inside the image;
- **\`COPY\` / \`ADD\`** — copying files from the build context into the image (\`ADD\` can also unpack archives and fetch URLs — but \`COPY\` is usually preferred);
- **\`RUN\`** — run a command at **build** time (install packages, build the project) — creates a new layer;
- **\`ENV\`** — environment variables;
- **\`EXPOSE\`** — document a port (doesn't publish it by itself);
- **\`ENTRYPOINT\` / \`CMD\`** — what to run when the **container starts**.

Example:

\`\`\`dockerfile
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

Each instruction creates a **layer** — this affects caching (see the separate question), so the order of instructions matters for build speed.`,
      },
      'entrypoint-vs-cmd': {
        question: 'What is the difference between ENTRYPOINT and CMD?',
        answer: `Both define what runs when the container starts, but they play different roles:

- **\`CMD\`** — sets the **default** command/arguments, which are easy to **override** by passing arguments to \`docker run\`. If you run \`docker run image ls -la\`, CMD is completely replaced by \`ls -la\`.
- **\`ENTRYPOINT\`** — sets the container's **main executable**, which is **not** overridden by \`docker run\` arguments (arguments are **appended** to it). Makes the container behave like an "executable program."

They are often **combined**: \`ENTRYPOINT\` is the program, \`CMD\` is the default arguments the user can replace:

\`\`\`dockerfile
ENTRYPOINT ["java", "-jar", "app.jar"]
CMD ["--spring.profiles.active=prod"]
\`\`\`

Then \`docker run image\` starts with the prod profile, and \`docker run image --spring.profiles.active=dev\` replaces just the argument, keeping \`java -jar app.jar\`.

It's important to use the **exec form** (\`["java", "-jar", ...]\`, a JSON array), not the shell form (\`java -jar ...\`): the exec form runs the process as PID 1 directly, so it properly receives signals (\`SIGTERM\` on stop) — otherwise the container won't shut down gracefully.`,
      },
      'image-layers-cache': {
        question: 'How are image layers structured and how does the build cache work in Docker?',
        answer: `A Docker image consists of **layers** — each \`FROM\`/\`RUN\`/\`COPY\`/\`ADD\` instruction creates a new immutable layer on top of the previous one. Layers are reused across images (a shared base layer is stored once) and cached.

**Build cache:** during \`docker build\`, for each instruction Docker checks whether a ready layer for it already exists, and if the instruction and its inputs haven't changed — it **takes the layer from the cache** instead of re-running it. But once one layer "misses" the cache, **all subsequent** ones are rebuilt (the cache is invalidated down the chain).

Hence the main optimization technique — **order instructions from rarely changing to frequently changing**. The classic for Java/Maven: first copy dependencies and download them, then the sources:

\`\`\`dockerfile
COPY pom.xml .
RUN mvn dependency:go-offline      # the dependency layer is cached
COPY src ./src
RUN mvn package                    # rebuilt only when the code changes
\`\`\`

If \`COPY . .\` came first, any code change would invalidate the dependency-download cache, and the build would download them again every time. The right order speeds up builds many times over.`,
      },
      'multistage-image-size': {
        question: 'What is a multi-stage build and how do you reduce a Docker image size?',
        answer: `A **multi-stage build** — one Dockerfile with several \`FROM\` stages: in the first (heavy, with JDK/Maven) the application is **built**, and into the final (lightweight, with just a JRE) **only the result** is copied — the ready artifact. Build tools don't end up in the final image.

\`\`\`dockerfile
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn -q package

FROM eclipse-temurin:21-jre       # final image — without Maven/JDK
WORKDIR /app
COPY --from=build /app/target/app.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

Other ways to shrink the image:

- a **lightweight base image** — \`-jre\` instead of \`-jdk\`, the \`slim\`/\`alpine\` variants (Alpine on musl is compact but sometimes incompatible; for the JVM there are jlink images);
- **combine \`RUN\`** commands and clean package caches in the same layer (\`apt-get ... && rm -rf /var/lib/apt/lists/*\`);
- **\`.dockerignore\`** — don't pull unnecessary things into the build context (\`.git\`, \`target\`, node_modules);
- fewer layers, only the needed dependencies.

A small image = faster pull/deploy, a smaller attack surface, registry savings.`,
      },
      'docker-volumes': {
        question: 'What are volumes in Docker and why are they needed?',
        answer: `A container's file system is **ephemeral**: when the container is removed, all changes in it are lost. **Volumes** solve **persistence** — storing data outside the container's lifecycle.

Main mount types:

- **Named volume** — managed by Docker (\`docker volume create\`, stored in Docker's area). The preferred way for database data and uploads — it survives container recreation and is easy to back up and move.
- **Bind mount** — mounts a **specific host folder** into the container. Handy for development (mount the sources to change code without a rebuild), but tied to the host's structure.
- **tmpfs** — in RAM, not persisted to disk (for secrets/temporary data).

Why they're needed:

- **persist state** — database data, user files, logs shouldn't vanish with the container;
- **share data** between a container and the host or between containers;
- **separate data from code** — the container can be updated (a new image) while the data in the volume remains.

Rule: make containers **stateless** and move all state to volumes or external services. In \`docker run\` a volume is attached via \`-v myvol:/var/lib/postgresql/data\`.`,
      },
      'docker-networks': {
        question: 'How does networking work in Docker? How do you link several containers?',
        answer: `Docker creates isolated networks for containers. The main **network drivers**:

- **bridge** (default) — a virtual network on the host; containers get internal IPs and talk to each other, reaching outside via port publishing;
- **host** — the container uses the host's network directly (no isolation, no port publishing);
- **none** — no network;
- **overlay** — a network spanning several hosts (for Swarm/orchestration clusters).

**Linking containers:** in a **user-defined bridge network** Docker enables a built-in **DNS**: containers see each other **by name** (or network alias). Just put them in the same network:

\`\`\`bash
docker network create app-net
docker run -d --name db --network app-net postgres
docker run -d --name api --network app-net myapi   # reaches the DB at host "db"
\`\`\`

Then the application connects to the DB at \`db:5432\` rather than by IP. In **docker-compose** this works automatically — all services of one compose file join a shared network and are addressed by service names. (The legacy \`--link\` flag is no longer needed for this.)

**Publishing ports** to the outside — \`-p 8080:8080\` (host:container). Two containers can listen on the same internal port, but you cannot publish the same port to the **host** twice.`,
      },
      'docker-registry-versioning': {
        question: 'What is a Docker registry? How do you version images (latest, semver, git hash)?',
        answer: `A **Docker registry** is a store for images. The \`docker push\` client uploads images there, \`docker pull\` downloads them. **Docker Hub** is the default public registry; **private registries** (AWS ECR, GitHub Container Registry, GitLab, Harbor, Nexus) keep a company's images private, with access control and vulnerability scanning.

An image is addressed as \`registry/repository:tag\`, e.g., \`ghcr.io/team/app:1.4.2\`.

**Tagging (versioning) strategies:**

- **\`latest\`** — the "latest" tag. Convenient, but **dangerous in prod**: it's mutable (one image today, another tomorrow), with no reproducibility — two "latest" deploys can bring up different versions. Avoided for prod.
- **Semver (\`1.4.2\`)** — semantic release versions; clear, readable, supports rolling back to a specific version. Good for public/release images.
- **Git commit hash (\`app:9f3a1c\`)** — a tag by the commit hash: **unambiguously** ties the image to the source code, ideal for CI/CD and traceability (from an image in prod you can tell which commit built it).

In practice you often **combine** them: push an image under several tags at once — semver + git-hash (+ \`latest\` for convenience), and deploy to prod by an **immutable** tag (hash or a specific version) so the deploy is reproducible.`,
      },
      'docker-compose': {
        question: 'What is docker-compose and why is it needed?',
        answer: `**Docker Compose** is a tool for describing and running **multi-container** applications with a single file \`docker-compose.yml\` (or \`compose.yaml\`). Instead of a dozen manual \`docker run\` commands, the whole system (application + database + cache + queue) is described declaratively and brought up with \`docker compose up\`.

\`\`\`yaml
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: secret
    volumes: [ "dbdata:/var/lib/postgresql/data" ]
  api:
    build: .
    ports: [ "8080:8080" ]
    depends_on: [ db ]
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/postgres
volumes:
  dbdata:
\`\`\`

What it provides:

- one command brings the whole stack up/down (\`up\`/\`down\`);
- a shared **network** — services see each other by name (\`api\` → \`db\`);
- images, ports, volumes, variables, and dependencies declared declaratively.

\`depends_on\` sets the **startup order** (but doesn't wait for a service to be ready — health checks are needed for that). Different environments (dev/prod) are set via multiple compose files (\`-f\`), override files, and environment variables / \`.env\`.

Use cases: **local development** and tests (quickly spin up dependencies), simple single-server deploys. For production orchestration across several hosts, use **Kubernetes**.`,
      },
      'docker-resource-limits': {
        question: 'How do you limit a container\'s resources (CPU, RAM) and why does it matter for the JVM?',
        answer: `By default a container can take up **all** the host's resources. Limits are set via **cgroups**:

- **memory:** \`docker run -m 512m\` (\`--memory\`); on exceeding it, the process is killed by the OOM killer;
- **CPU:** \`--cpus="1.5"\` (a fraction of cores), \`--cpu-shares\` (relative weight under contention).

In Kubernetes these are **requests/limits** in the pod manifest.

Why: to prevent one container from "eating" the whole host and taking down its neighbors, ensure predictability and scheduling, and protect against leaks.

**Why this is critical for the JVM:** historically the JVM looked at the resources of the **whole host** rather than the container, and, for example, set the heap size and the number of GC/pool threads based on the host's memory/cores — in a container with a 512 MB limit this led to \`OutOfMemoryError\` and the container being killed by the OOM killer. Modern JDKs (11+) are **container-aware** — they respect cgroup limits. Practices:

- set the heap fraction via **\`-XX:MaxRAMPercentage=75\`** (instead of a hard \`-Xmx\`) so the heap scales with the container limit;
- leave headroom for non-heap memory (Metaspace, thread stacks, direct buffers), since the container limit counts **all** the process's memory, not just the heap;
- verify the JVM sees the correct number of CPUs (\`-XX:ActiveProcessorCount\` if needed).`,
      },
      'container-security': {
        question: 'How do you secure containers (secrets, vulnerabilities, rootless)?',
        answer: `The main aspects of container security:

**Secrets (passwords, tokens, keys):**

- do **not** bake them into the image (in \`ENV\`/layers — they're visible in the image history) and don't commit them;
- pass them via **Docker/Kubernetes secrets**, managers (Vault, AWS Secrets Manager), runtime environment variables;
- use \`.dockerignore\` so \`.env\`/keys don't reach the build context; for build-time secrets use \`--secret\` (BuildKit), which doesn't leave them in layers.

**Vulnerabilities:**

- **scan images** (Trivy, Grype, Docker Scout, registry scanners) — base images and dependencies contain known CVEs;
- use **minimal** and fresh base images (slim/alpine/distroless — a smaller attack surface), rebuild/update regularly;
- pin versions, don't rely on \`latest\`.

**Privileges (least privilege):**

- **don't run the process as root** inside the container — set an unprivileged user (\`USER appuser\`);
- **rootless containers** — running the daemon/containers without root on the host (rootless Docker, Podman): even on a container escape the attacker doesn't get host root;
- don't grant \`--privileged\`, drop unneeded Linux capabilities, use a read-only file system where possible, don't mount docker.sock without need.

General principle: a minimal image, an unprivileged user, secrets outside, regular scanning and updates.`,
      },
      'docker-daemon': {
        question: 'What is the Docker Daemon and how is Docker\'s architecture structured?',
        answer: `Docker is built on a **client-server** model:

- **Docker CLI (client)** — the \`docker\` command you type. It only **sends requests** via a REST API.
- **Docker Daemon (\`dockerd\`)** — a background service (server) that **does all the work**: builds images, creates and runs containers, manages networks, volumes, images. It listens on a Unix socket (\`/var/run/docker.sock\`) or over TCP.
- **Registry** — the image store the daemon pulls from/pushes to.

When you run \`docker run\`, the CLI sends a request to the daemon, which creates the container. Under the hood \`dockerd\` relies on lower-level components: **containerd** (container lifecycle management) and **runc** (the actual container launch via the kernel's namespaces/cgroups).

Practical implications:

- the daemon runs with **root** privileges — access to \`docker.sock\` is effectively root on the host, so it must not be handed out/mounted into containers carelessly;
- the CLI and daemon can be on **different machines** (managing a remote Docker over TCP/TLS);
- an alternative to the daemon model is **Podman** (daemonless, rootless), compatible with the Docker CLI.`,
      },
      'spring-boot-docker': {
        question: 'How do you properly package a Spring Boot application into Docker?',
        answer: `A basic working Dockerfile for Spring Boot is **multi-stage** (build separate from runtime) with dependency caching:

\`\`\`dockerfile
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn -q dependency:go-offline      # dependency cache
COPY src ./src
RUN mvn -q clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
RUN useradd -r appuser                # unprivileged user
USER appuser
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

Good practices:

- **the JVM in a container** — instead of a hard \`-Xmx\`, use \`-XX:MaxRAMPercentage=75\` so the heap depends on the container limit (JDK 11+ is container-aware); leave headroom for non-heap;
- **configuration via the environment** — Spring reads \`SPRING_DATASOURCE_URL\` etc. from variables, and secrets come from a secrets store, not the image;
- **not root**, a minimal base image (\`-jre\`/distroless), \`.dockerignore\` (don't pull \`target\`, \`.git\`);
- a **health check** on \`/actuator/health\` for the orchestrator;
- the exec form of \`ENTRYPOINT\`, so the application receives \`SIGTERM\` and shuts down gracefully.

An alternative to a hand-written Dockerfile is the Spring Boot plugins: \`./mvnw spring-boot:build-image\` (Cloud Native Buildpacks) builds an optimized layered image without a Dockerfile; or layered jars for better layer caching.`,
      },
    },
  };
