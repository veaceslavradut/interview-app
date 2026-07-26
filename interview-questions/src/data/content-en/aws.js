// Английские переводы: aws
export const aws = {
    title: 'AWS',
    description: 'EC2, ELB, ECS, S3, VPC',
    questions: {
      'what-is-ec2': {
        question: 'What is Amazon EC2? What instance types and pricing models exist?',
        answer: `**Amazon EC2 (Elastic Compute Cloud)** is a virtual server (instance) service in the AWS cloud: you rent compute capacity with full control over the OS, networking, and storage.

**Key concepts:**

- **AMI (Amazon Machine Image)** — an image with an OS and pre-installed software from which an instance is launched;
- **Instance Type** — a CPU/RAM/network configuration (e.g., \`t3.medium\`, \`m5.large\`);
- **EBS (Elastic Block Store)** — network-attached disks that survive instance stops; **Instance Store** — local ephemeral disks;
- **Security Group** — the instance's virtual firewall;
- **Key Pair** — SSH keys for access.

**Instance type families:**

- **General Purpose (t, m)** — balanced: web servers, microservices;
- **Compute Optimized (c)** — CPU-intensive workloads: batch, encoding;
- **Memory Optimized (r, x)** — databases, caches, in-memory analytics;
- **Storage Optimized (i, d)** — high disk I/O;
- **Accelerated Computing (p, g)** — GPU: ML, graphics.

**Pricing models:**

- **On-Demand** — hourly/per-second billing with no commitment: unpredictable workloads;
- **Reserved Instances / Savings Plans** — up to 72% discount for a 1–3 year commitment: steady workloads;
- **Spot Instances** — up to 90% discount for unused capacity, but AWS can reclaim the instance with a 2-minute notice: fault-tolerant batch jobs;
- **Dedicated Hosts** — dedicated physical hardware: licensing/compliance requirements.`,
      },
      'ec2-autoscaling': {
        question: 'How does Auto Scaling work in EC2?',
        answer: `**Auto Scaling Group (ASG)** — a mechanism for automatically managing the number of EC2 instances: it maintains the desired number of healthy instances and scales it based on load.

**Main parameters:**

- **Min / Max / Desired capacity** — the minimum, maximum, and desired number of instances;
- **Launch Template** — the launch blueprint: AMI, instance type, security groups, user data;
- **Health checks** — EC2 status and/or ELB checks; an unhealthy instance is replaced automatically.

**Scaling policies:**

- **Target Tracking** — maintaining a target metric (e.g., CPU 60%) — the recommended option;
- **Step Scaling** — adding/removing instances in steps based on CloudWatch alarm thresholds;
- **Scheduled Scaling** — on a schedule (e.g., more instances during business hours);
- **Predictive Scaling** — ML-based load forecasting.

**Benefits:**

- fault tolerance: failed instances are replaced, distribution across Availability Zones;
- cost savings: you pay only for the capacity you need;
- ELB integration: new instances are automatically registered with the load balancer.

Best practices: stateless applications (state in a DB/cache/S3), graceful shutdown via lifecycle hooks, warm-up via warm pools, combining On-Demand + Spot in one ASG (mixed instances policy).`,
      },
      'what-is-elb': {
        question: 'What is Elastic Load Balancing? What load balancer types does AWS offer?',
        answer: `**Elastic Load Balancing (ELB)** — a managed load balancing service: it distributes incoming traffic across multiple targets (EC2, containers, IP addresses, Lambda) in one or more Availability Zones.

**Load balancer types:**

- **Application Load Balancer (ALB)** — layer 7 (HTTP/HTTPS):
  - routing by path (\`/api/*\`), host, headers, query parameters;
  - support for WebSocket, HTTP/2, gRPC;
  - targets: EC2, ECS containers, Lambda, IP;
  - the default choice for web applications and microservices;
- **Network Load Balancer (NLB)** — layer 4 (TCP/UDP/TLS):
  - millions of requests per second, ultra-low latency;
  - static IP / Elastic IP per AZ;
  - client IP preservation;
  - the choice for high-load TCP services;
- **Gateway Load Balancer (GWLB)** — layer 3: deploying network virtual appliances (firewalls, IDS/IPS);
- **Classic Load Balancer (CLB)** — legacy, not used for new projects.

**Key mechanisms:**

- **Target Group** — a group of targets with health check settings;
- **Health Checks** — traffic goes only to healthy targets;
- **Cross-Zone Load Balancing** — even distribution across AZs;
- **Sticky Sessions** — pinning a client to a target via a cookie (for stateful applications);
- TLS termination with certificates from **ACM**.`,
      },
      'what-is-ecs': {
        question: 'What is Amazon ECS? Main components.',
        answer: `**Amazon ECS (Elastic Container Service)** — AWS's managed container orchestrator: running, scaling, and managing Docker containers without installing your own orchestrator.

**Main components:**

- **Cluster** — a logical group of compute resources;
- **Task Definition** — the launch "recipe" (similar to docker-compose): images, CPU/memory, ports, environment variables, volumes, IAM role;
- **Task** — a running instance of a Task Definition (one or more containers);
- **Service** — maintains the desired number of tasks, integrates with ELB, performs rolling deployments and auto scaling;
- **Container Agent** — an agent on EC2 instances communicating with the control plane.

**Launch types (where containers run):**

- **Fargate** — serverless: AWS manages the servers, you pay for the task's CPU/memory; simpler to operate;
- **EC2** — containers on your own EC2 instances: more control, cheaper at high density, GPUs available;
- **ECS Anywhere** — running on your own servers (on-premises).

**Integrations:**

- **ECR (Elastic Container Registry)** — Docker image registry;
- **ALB** — load balancing with dynamic port mapping;
- **CloudWatch** — logs and metrics;
- **IAM Task Role** — separate access permissions for each task;
- **Service Auto Scaling** — scaling the number of tasks based on metrics.`,
      },
      'ecs-vs-eks-fargate': {
        question: 'ECS vs EKS: which one to choose? What is Fargate?',
        answer: `**ECS vs EKS:**

- **ECS** — AWS's proprietary orchestrator:
  - simpler: fewer concepts, native AWS integration (IAM, ALB, CloudWatch);
  - the control plane itself is free;
  - vendor lock-in: works only in AWS;
  - the choice for teams fully invested in AWS without Kubernetes expertise;
- **EKS (Elastic Kubernetes Service)** — managed Kubernetes:
  - standard K8s API: portability, a huge ecosystem (Helm, ArgoCD, Istio);
  - control plane fee (~$73/month per cluster);
  - higher entry barrier and operational complexity;
  - the choice for a multi-cloud strategy, complex scenarios, teams with K8s expertise.

**Fargate** — a serverless container execution engine that works with both ECS and EKS:

- no EC2 instances to manage: patching, scaling, capacity are AWS's responsibility;
- billing per vCPU and memory requested by the task, per second;
- isolation: each task runs in its own micro-VM;
- limitations: no GPU (in ECS), more expensive than EC2 at consistently high utilization, no DaemonSet-like scenarios.

**Rule of thumb:**

- small team, everything in AWS, just need to run containers → **ECS + Fargate**;
- need the Kubernetes stack and portability → **EKS**;
- high steady load, cost optimization → **ECS/EKS on EC2** (+ Spot).`,
      },
      'what-is-s3': {
        question: 'What is Amazon S3? Storage classes and the consistency model.',
        answer: `**Amazon S3 (Simple Storage Service)** — object storage with virtually unlimited capacity: files (objects) are stored in **buckets** and accessed via an HTTP API.

**Key characteristics:**

- an **object** = data + metadata + key (a unique name within the bucket); up to 5 TB in size;
- flat structure: "folders" are just key prefixes;
- bucket names are globally unique;
- **11 nines** durability (99.999999999%) — data is replicated across at least 3 AZs;
- **strong read-after-write consistency** — since 2020, reads immediately after a write/overwrite/delete return the latest data.

**Storage classes:**

- **S3 Standard** — frequent access, the default;
- **S3 Intelligent-Tiering** — automatic movement between tiers based on access patterns;
- **S3 Standard-IA / One Zone-IA** — infrequent access: cheaper storage, paid retrieval;
- **S3 Glacier Instant / Flexible Retrieval / Deep Archive** — archival: from milliseconds to 12+ hours for retrieval, the lowest storage cost.

**Features:**

- **Versioning** — keeping all versions of an object, protection against accidental deletion;
- **Lifecycle Policies** — automatic transition to cheaper classes and age-based deletion;
- **Replication (CRR/SRR)** — replication to another region/bucket;
- **Presigned URLs** — temporary links to private objects;
- static website hosting, event notifications (S3 → Lambda/SQS/SNS).

Typical use cases: static assets and media, backups, data lakes, build artifacts, logs.`,
      },
      's3-security': {
        question: 'How is data secured in S3?',
        answer: `**Access control:**

- a bucket is **private** by default — only the owner has access;
- **IAM Policies** — user/role permissions for S3 actions (identity-based);
- **Bucket Policies** — a JSON policy on the bucket itself (resource-based): cross-account access, IP restrictions, requiring HTTPS;
- **Block Public Access** — a "kill switch" overriding any public settings (recommended to keep enabled);
- **ACLs** — a legacy mechanism, AWS recommends disabling them (Object Ownership: Bucket owner enforced);
- **Presigned URLs** — temporary access to an object without exposing credentials.

**Encryption:**

- **at rest** (enabled by default):
  - **SSE-S3** — keys managed by S3 (AES-256);
  - **SSE-KMS** — keys in AWS KMS: auditing via CloudTrail, key access control;
  - **SSE-C** — customer-provided keys;
- **in transit** — TLS; a policy can deny non-HTTPS requests (\`aws:SecureTransport\`).

**Data protection:**

- **Versioning** — recovery from accidental overwrite/deletion;
- **MFA Delete** — deleting versions only with MFA;
- **Object Lock (WORM)** — preventing deletion/modification for a set period (compliance);
- **Replication** — geographic redundancy.

**Audit and monitoring:** CloudTrail (API calls), S3 Server Access Logs, Access Analyzer (finding unintentionally public buckets), Macie (sensitive data discovery).`,
      },
      'what-is-vpc': {
        question: 'What is a VPC? What components make up networking in AWS?',
        answer: `**VPC (Virtual Private Cloud)** — a logically isolated virtual network in AWS where your resources run. You fully control addressing, subnets, routing, and access.

**Main components:**

- **CIDR block** — the VPC's IP address range (e.g., \`10.0.0.0/16\`);
- **Subnet** — a subnetwork within a single Availability Zone:
  - **public** — has a route to an Internet Gateway (web servers, ALB);
  - **private** — no direct access from the internet (databases, backends);
- **Route Table** — routing rules, attached to subnets;
- **Internet Gateway (IGW)** — the VPC's exit to the internet;
- **NAT Gateway** — outbound internet for private subnets (inbound traffic is blocked); placed in a public subnet;
- **Elastic IP** — a static public IP.

**Connectivity:**

- **VPC Peering** — a private connection between two VPCs (not transitive);
- **Transit Gateway** — a hub for connecting many VPCs and on-premises networks;
- **VPC Endpoints** — private access to AWS services without going to the internet:
  - **Gateway Endpoint** — for S3 and DynamoDB (free);
  - **Interface Endpoint (PrivateLink)** — an ENI with a private IP for other services;
- **Site-to-Site VPN / Direct Connect** — connecting a corporate network.

**Typical architecture**: a VPC across 2–3 AZs; in each AZ — a public subnet (ALB, NAT) and private subnets (applications, databases); inter-tier access restricted with security groups.`,
      },
      'security-group-vs-nacl': {
        question: 'What is the difference between a Security Group and a Network ACL?',
        answer: `Both mechanisms are virtual firewalls in a VPC, but they operate at different levels.

**Security Group (SG):**

- applied at the **ENI/instance** level;
- **stateful** — return traffic is allowed automatically;
- **allow** rules only (you cannot explicitly deny);
- all rules are evaluated together;
- a rule's source can reference another SG (e.g., "the database accepts traffic only from the application's SG") — the foundation of microsegmentation;
- by default: all inbound denied, all outbound allowed.

**Network ACL (NACL):**

- applied at the **subnet** level — to all resources within it;
- **stateless** — return traffic must be allowed explicitly (including ephemeral ports 1024–65535);
- both **allow and deny** rules;
- rules are evaluated **in numeric order** until the first match;
- by default (default NACL): all traffic allowed;
- use cases: explicitly blocking IPs/ranges, an extra layer of subnet protection.

**In practice:**

- the primary tool is **Security Groups**: flexible, stateful, can reference each other;
- NACLs — an additional "coarse" layer (defense in depth) and for deny rules;
- traffic passes through **both** levels: the NACL at the subnet boundary, then the SG at the instance.`,
      },
      'cloud-service-models': {
        question: 'What is AWS and what is the difference between IaaS, PaaS, and SaaS?',
        answer: `**AWS (Amazon Web Services)** is a cloud platform providing compute, storage, networking, databases, and other services on a **pay-as-you-go** model, without buying your own hardware.

The three cloud service models differ in **what the provider manages vs. what you do**:

- **IaaS (Infrastructure as a Service)** — the provider gives "raw" infrastructure (virtual machines, network, disks), and you manage the OS, runtime, and application. Maximum control and flexibility. Example: **EC2**, EBS, VPC.
- **PaaS (Platform as a Service)** — the provider manages the OS and runtime, and you deploy only code and data. Less routine, faster development. Example: **Elastic Beanstalk**, RDS, App Runner.
- **SaaS (Software as a Service)** — a ready turnkey application that you just use in a browser. Example: Gmail, Office 365, Salesforce (in AWS — e.g., WorkMail).

Analogy: IaaS — rent land and build the house yourself; PaaS — rent the house; SaaS — stay in a hotel. The higher the level, the less management but also the less control. Separately there is **serverless (FaaS)** — e.g., Lambda, where you don't even manage servers.`,
      },
      iam: {
        question: 'What is IAM? What is the difference between users, roles, policies, and MFA?',
        answer: `**IAM (Identity and Access Management)** is the service for managing access to AWS resources: **who** (authentication) and **what they can do** (authorization). The core principle is **least privilege** (the minimum necessary permissions).

Key entities:

- **User** — a persistent identity for a person or application with long-term credentials (password, access keys). Users can be organized into **groups** with permissions assigned to the group.
- **Role** — an identity with **temporary** permissions that can be "assumed." A role has **no permanent keys** — temporary tokens are issued (STS). Roles are the preferred approach: they are assumed by EC2 instances, Lambda, services, and federated users. Safer than handing out long-term keys.
- **Policy** — a JSON document describing **permissions** (Effect Allow/Deny, Action, Resource, Condition). Attached to a user, group, or role.
- **MFA (Multi-Factor Authentication)** — an extra factor (a one-time code from a phone/device) on top of the password. Mandatory for privileged accounts (root, admins).

Rule: give applications and services **roles**, not hardcoded keys; give people users with MFA; grant permissions via policies following least privilege.`,
      },
      kms: {
        question: 'What is AWS KMS and where is it used?',
        answer: `**KMS (Key Management Service)** is a managed service for creating and managing **encryption keys** and performing cryptographic operations. It stores **master keys (CMK / KMS keys)** that never leave the service in plaintext, and controls access to them via IAM policies and audit logs (CloudTrail).

It's typically used with **envelope encryption**: the KMS key encrypts not the data itself but a generated **data key**, which in turn encrypts the large data. This encrypts large volumes quickly and securely, while the storage holds the encrypted data key.

Where it is used:

- **encryption at rest** in other services: S3 (SSE-KMS), EBS volumes, RDS, DynamoDB, snapshots — out-of-the-box integration;
- encrypting secrets in **Secrets Manager** / SSM Parameter Store;
- application-level encryption via the SDK;
- key control and **rotation**, access segregation, and full usage auditing.

Pros: keys are under control and auditing, not stored in code; automatic rotation can be enabled. For the highest level of hardware isolation there is **CloudHSM**.`,
      },
      'lambda-serverless': {
        question: 'What are AWS Lambda and serverless? When should you use it instead of a server?',
        answer: `**Serverless** is a model where you write code and the provider **manages the servers**, scaling, and availability. Servers exist, but you don't think about them and you pay **only for actual execution**, not for idle instances.

**AWS Lambda (FaaS — Function as a Service)** is a service for running functions **in response to events** without managing infrastructure. A function is triggered by an event (HTTP via API Gateway, an S3/DynamoDB/Kafka event, a schedule, an SQS queue), runs, and finishes. You pay for the number of invocations and the run time (per ms).

Characteristics:

- **auto-scaling** from zero to thousands of concurrent executions;
- **stateless** — state is kept externally (a database, S3);
- **limits**: a maximum execution time (15 minutes), memory/size limits, **cold start** — a delay on the first run (especially noticeable for the JVM).

When to choose Lambda over an always-on service (EC2/ECS): event-driven and irregular load, short and independent tasks (processing uploads, webhooks, ETL, cron), you want to pay only for usage and avoid managing servers. When **not** to: long-running processes, steadily high constant load (containers are cheaper), strict latency requirements (cold start), heavy state.`,
      },
      'aws-storage-types': {
        question: 'How do S3, EBS, and Glacier differ? When do you use each?',
        answer: `Three services — three different types of storage:

- **S3 (Simple Storage Service)** — **object** storage: files ("objects") in buckets, accessed via an HTTP API/URL. Practically unlimited, extremely durable (11 nines of durability), not tied to a specific instance. For: files, backups, static websites, data lakes, media. It is not a file system and can't be mounted as a disk.
- **EBS (Elastic Block Store)** — **block** storage: a virtual disk **attached to a single EC2 instance** (like an HDD/SSD). Data survives instance restarts, supports snapshots. For: OS root volumes, databases on EC2, anything needing a low-latency disk. Tied to one AZ.
- **Glacier (S3 Glacier)** — **archival** storage: very cheap, but with **retrieval latency** (from minutes to hours depending on the retrieval class). For: long-term archives, compliance, rarely read data.

In short: **S3** — objects and files (shared access, scale); **EBS** — a disk for a single instance (low latency); **Glacier** — a cheap cold archive. S3 has classes (Standard, IA, Intelligent-Tiering, Glacier) with automatic data movement via lifecycle policies.`,
      },
      'aws-rds': {
        question: 'What is RDS and how do you connect Spring Boot to it?',
        answer: `**RDS (Relational Database Service)** is a managed relational database service (PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, and also Amazon Aurora). AWS handles the routine: installation, patching, backups, replication, recovery, monitoring — you're responsible only for the schema and queries (a PaaS model for databases).

Capabilities:

- **automatic backups** and point-in-time recovery, snapshots;
- **Multi-AZ** — a synchronous replica in another AZ for fault tolerance and automatic failover;
- **read replicas** — replicas for scaling reads;
- encryption via KMS, access through Security Groups in a VPC.

**Connecting Spring Boot** — like to an ordinary database; RDS gives a standard endpoint (host:port):

\`\`\`properties
spring.datasource.url=jdbc:postgresql://mydb.abc123.eu-west-1.rds.amazonaws.com:5432/app
spring.datasource.username=appuser
spring.datasource.password=\${DB_PASSWORD}
\`\`\`

Practices: don't store the password in code — take it from **Secrets Manager** / environment variables (or use IAM authentication to RDS); keep RDS in a **private subnet**, with access only from the application's SG; tune the connection pool (HikariCP) to the instance's limits.`,
      },
      'dynamodb-vs-rds': {
        question: 'When do you use DynamoDB versus RDS?',
        answer: `**RDS** is a managed **relational** database (SQL): tables with a schema, relationships, JOINs, ACID transactions, complex queries. **DynamoDB** is a managed **NoSQL** key-value / document database: schemaless, horizontally scalable, with predictable low latency at any scale, priced by requests/capacity.

**Choose RDS when:**

- the data is **relational**, with many relationships, and you need JOINs and complex ad-hoc queries;
- strict **ACID transactions** matter (finance);
- the schema is stable, volumes are moderate, and you want familiar SQL.

**Choose DynamoDB when:**

- you need **huge scale** and steadily low latency (single-digit ms) as it grows;
- access is **by key** with known query patterns (model "from the queries");
- a flexible/changing schema, high write load, a serverless stack;
- you don't want to manage sharding and capacity manually (there's an on-demand mode).

DynamoDB's limitations — no full JOINs or complex ad-hoc queries; you must design keys and indexes (GSI/LSI) for access in advance. Rule: a relational model and complex queries → **RDS**; predictable key-based access at hyperscale → **DynamoDB**. They are often combined in one system.`,
      },
      'subnets-igw-nat': {
        question: 'How do public/private subnets, the Internet Gateway, and NAT work? What is CIDR?',
        answer: `**CIDR (Classless Inter-Domain Routing)** defines a network's IP address range via a mask: for example, a VPC \`10.0.0.0/16\` (65,536 addresses), and a subnet \`10.0.1.0/24\` (256 addresses). The number after the \`/\` is how many bits are fixed for the network: the larger it is, the fewer addresses.

**Subnets** are segments of a VPC within one AZ. Whether a subnet is public is determined by its **route table**:

- **Public subnet** — its route table has a route to an **Internet Gateway (IGW)**. The IGW is a VPC component giving bidirectional internet access. Here you place things that must be reachable from outside: a load balancer, bastion, public web servers (which have a public IP).
- **Private subnet** — has no route to an IGW and isn't directly reachable from the internet. Here you place applications and **databases** (safer).

A **NAT Gateway** solves this: private resources need **outbound** internet access (download updates, call an external API), but inbound must be blocked. The NAT is placed in a **public** subnet; private resources reach out through a route to the NAT, but connections cannot be initiated to them from outside.

Typical layout: LB and NAT in public subnets; application servers and databases in private ones; traffic filtered by Security Groups and NACLs.`,
      },
    },
  };
