// Английский перевод банка квиза: docker. Порядок вариантов и опций — как в RU.
export const docker = {
  'docker-vs-vm': [
    {
      question: 'How does a container differ from a virtual machine?',
      options: [
        'Containers share one OS kernel and are isolated by namespaces/cgroups; a VM carries a full guest OS',
        'A container carries a full guest OS, and a VM does not',
        'A VM is lighter and starts in seconds',
        'No difference',
      ],
    },
    {
      question: 'What is an image in Docker?',
      options: [
        'An immutable template (filesystem layers + metadata) for creating containers',
        'A running instance of an application',
        'A virtual machine with a guest OS',
        'A network-configuration file',
      ],
    },
  ],
  'dockerfile': [
    {
      question: 'What does the FROM instruction do in a Dockerfile?',
      options: [
        'Sets the base image the build starts from',
        'Copies files into the image',
        'Runs a container',
        'Publishes a port outward',
      ],
    },
    {
      question: 'At what stage is the RUN instruction executed?',
      options: [
        'At image-build time (creates a new layer)',
        'On every container start',
        'Only on docker push',
        'When the container stops',
      ],
    },
  ],
  'entrypoint-vs-cmd': [
    {
      question: 'How does ENTRYPOINT differ from CMD?',
      options: [
        'ENTRYPOINT is the main executable (docker run arguments are appended); CMD is easy to override',
        'CMD cannot be overridden, and ENTRYPOINT can',
        'They are the same',
        'ENTRYPOINT runs at build time',
      ],
    },
    {
      question: 'Why is the exec form (JSON array) preferred for ENTRYPOINT?',
      options: [
        'The process runs as PID 1 and correctly receives signals (SIGTERM)',
        'It has shorter syntax',
        'It works only in Alpine',
        'It automatically reduces the image size',
      ],
    },
  ],
  'image-layers-cache': [
    {
      question: 'What happens to the build cache if one layer changes?',
      options: [
        'All subsequent layers are rebuilt (the cache is invalidated down the chain)',
        'Only that layer is rebuilt',
        'The cache is not used at all',
        'Only the previous layers are rebuilt',
      ],
    },
    {
      question: 'Why are dependencies copied and downloaded BEFORE copying the sources?',
      options: [
        'So the dependency layer is cached and not re-downloaded on every code change',
        'To reduce the final image size',
        'It is a Dockerfile syntax requirement',
        'So the container runs as root',
      ],
    },
  ],
  'multistage-image-size': [
    {
      question: 'What does a multi-stage build give?',
      options: [
        'The app is built in a heavy stage, and only the artifact is copied into the final image without build tools',
        'Running several containers with one command',
        'Automatic image versioning',
        'Encryption of the image layers',
      ],
    },
    {
      question: 'How do you reduce a Docker image’s size?',
      options: [
        'A light base image (jre/slim/alpine), multi-stage, .dockerignore, cleaning the cache in the same layer',
        'Add more RUN layers',
        'Use the latest tag',
        'Run the process as root',
      ],
    },
  ],
  'docker-volumes': [
    {
      question: 'What are volumes for in Docker?',
      options: [
        'Storing data outside the container’s lifecycle (persistence)',
        'Speeding up the image build',
        'Limiting the container’s resources',
        'Linking containers over the network',
      ],
    },
    {
      question: 'What happens to data in a container’s filesystem when it is removed?',
      options: [
        'It is lost — the container’s FS is ephemeral (hence volumes)',
        'It is automatically saved to the registry',
        'It moves to another container',
        'It stays forever',
      ],
    },
  ],
  'docker-networks': [
    {
      question: 'How do containers in one user-defined bridge network find each other?',
      options: [
        'By container name via Docker’s built-in DNS',
        'Only by numeric IP address',
        'Through a shared volume',
        'Through the image registry',
      ],
    },
    {
      question: 'What does the -p 8080:8080 flag do in docker run?',
      options: [
        'Publishes the container port to a host port (host:container)',
        'Limits the container’s memory',
        'Creates a volume for data',
        'Sets the container name',
      ],
    },
  ],
  'docker-registry-versioning': [
    {
      question: 'What is a Docker registry?',
      options: [
        'A store of images that you push to and pull from',
        'A description file of a multi-container application',
        'A resource-limiting tool',
        'A network driver',
      ],
    },
    {
      question: 'Why is the latest tag not recommended in production?',
      options: [
        'It is mutable — no reproducibility; two deploys can bring up different versions',
        'It takes more space',
        'It cannot be pushed to a private registry',
        'It always points to the oldest image',
      ],
    },
  ],
  'docker-compose': [
    {
      question: 'What is docker-compose for?',
      options: [
        'Describing and running a multi-container application with one file and command',
        'Building one image from a Dockerfile',
        'Orchestrating containers across many hosts in production',
        'Scanning images for vulnerabilities',
      ],
    },
    {
      question: 'What does depends_on guarantee in docker-compose?',
      options: [
        'The startup order of services (but it doesn’t wait for their readiness — health checks are needed)',
        'Full readiness of the dependent service before start',
        'A shared volume between services',
        'Resource limiting',
      ],
    },
  ],
  'docker-resource-limits': [
    {
      question: 'Through which kernel mechanism are a container’s CPU and memory limited?',
      options: ['cgroups', 'namespaces', 'iptables', 'systemd'],
    },
    {
      question: 'How do you set the JVM heap size in a container the modern way?',
      options: [
        '-XX:MaxRAMPercentage, so the heap depends on the container limit',
        'A hard -Xmx of the host’s entire memory',
        'Set nothing — the JVM always sees the container limit itself',
        'Disable the garbage collector',
      ],
    },
  ],
  'container-security': [
    {
      question: 'How do you correctly pass secrets into a container?',
      options: [
        'Via Docker/K8s secrets or managers (Vault) — don’t bake them into the image',
        'Put them in ENV in the Dockerfile',
        'Commit them to git together with the image',
        'Write them directly into a RUN layer',
      ],
    },
    {
      question: 'Why shouldn’t you run the process in a container as root?',
      options: [
        'On a container escape an attacker could gain more privileges on the host',
        'Root processes run slower',
        'Docker forbids root by default',
        'It increases the image size',
      ],
    },
  ],
  'docker-daemon': [
    {
      question: 'What does the Docker Daemon (dockerd) do?',
      options: [
        'It does all the work: builds images, creates and runs containers, manages networks and volumes',
        'It only sends the user’s commands via the REST API',
        'It stores images as a registry',
        'It is the client docker command',
      ],
    },
    {
      question: 'Why is access to docker.sock dangerous?',
      options: [
        'The daemon runs as root — access to the socket is effectively root on the host',
        'Images leak through it',
        'It slows down builds',
        'It publishes all ports outward',
      ],
    },
  ],
  'spring-boot-docker': [
    {
      question: 'Which approach is recommended for a Spring Boot application’s Dockerfile?',
      options: [
        'A multi-stage build with dependency caching and running as an unprivileged user',
        'A single layer with the JDK and sources in the final image',
        'Copying the whole project as the first layer before dependencies',
        'Running as root with the latest tag',
      ],
    },
    {
      question: 'How do you pass Spring Boot configuration in a container?',
      options: [
        'Via environment variables (SPRING_DATASOURCE_URL, etc.), and secrets from a secrets store',
        'Bake application.properties with passwords into the image',
        'Only via command-line arguments in CMD',
        'Store it in a volume together with the sources',
      ],
    },
  ],
};
