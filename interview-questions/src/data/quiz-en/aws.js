// Английский перевод банка квиза: aws. Порядок вариантов и опций — как в RU.
export const aws = {
  'what-is-ec2': [
    {
      question: 'What is Amazon EC2?',
      options: [
        'A service of virtual servers (instances) in the AWS cloud with configurable CPU, memory, and storage',
        'Object storage for files',
        'A managed relational database',
        'An email-sending service',
      ],
    },
    {
      question: 'What does an EC2 instance type (e.g. t3.medium) define?',
      options: [
        'A combination of compute resources: vCPU, memory, network',
        'The region where the server runs',
        'The instance’s operating system',
        'The number of users who can connect',
      ],
    },
  ],
  'ec2-autoscaling': [
    {
      question: 'What does an Auto Scaling Group do in AWS?',
      options: [
        'Automatically adds/removes EC2 instances by load metrics, maintaining a set number of healthy instances',
        'Automatically increases the instance’s disk size',
        'Speeds up the instance’s CPU under load',
        'Reserves instances at a reduced price',
      ],
    },
    {
      question: 'What happens if an instance in an Auto Scaling Group fails a health check?',
      options: [
        'The group terminates the unhealthy instance and launches a new one to replace it',
        'The group disables the health check for that instance',
        'The instance keeps running marked as degraded',
        'The whole group is stopped',
      ],
    },
  ],
  'what-is-elb': [
    {
      question: 'What is an Elastic Load Balancer (ELB) for?',
      options: [
        'It distributes incoming traffic across several targets (instances, containers) and checks their health',
        'It balances load across disks within one server',
        'It caches static content at the network edge',
        'It manages a domain’s DNS records',
      ],
    },
    {
      question: 'How does an Application Load Balancer (ALB) differ from a Network Load Balancer (NLB)?',
      options: [
        'ALB works at layer 7 (HTTP: routing by paths/headers); NLB at layer 4 (TCP/UDP, maximum performance)',
        'NLB works with HTTP, ALB only with TCP',
        'ALB is available in one region only, NLB globally',
        'No difference — it’s the same thing under different names',
      ],
    },
  ],
  'what-is-ecs': [
    {
      question: 'What is Amazon ECS?',
      options: [
        'AWS’s managed container-orchestration service: tasks, services, and clusters',
        'A virtual-machine service',
        'A Docker-image registry',
        'A serverless-functions service',
      ],
    },
    {
      question: 'What does a task definition describe in ECS?',
      options: [
        'A “recipe” for running containers: image, CPU/memory, ports, environment variables',
        'A schedule for automatic backups',
        'The cluster’s firewall rules',
        'A list of users with access to the cluster',
      ],
    },
  ],
  'ecs-vs-eks-fargate': [
    {
      question: 'How does EKS differ from ECS?',
      options: [
        'EKS is managed Kubernetes (standard API, portability); ECS is AWS’s own, simpler orchestrator',
        'ECS is Kubernetes, and EKS is AWS’s proprietary development',
        'EKS runs only on-premises',
        'ECS cannot run Docker containers',
      ],
    },
    {
      question: 'What is AWS Fargate?',
      options: [
        'A serverless container-launch engine: no need to manage EC2 instances, you pay for task resources',
        'A separate orchestrator, a competitor to ECS and EKS',
        'A container-image storage service',
        'A tool for migrating VMs to the cloud',
      ],
    },
  ],
  'what-is-s3': [
    {
      question: 'What is Amazon S3?',
      options: [
        'Object storage: data is stored as objects with keys inside buckets, accessed over HTTP(S)',
        'Block storage to attach to EC2 as a disk',
        'A relational database',
        'An NFS file system',
      ],
    },
    {
      question: 'How is data organised in S3?',
      options: [
        'Objects with unique keys inside buckets; “folders” are just key prefixes',
        'Tables with rows and columns',
        'A hierarchical file system with real directories',
        'Message queues with a TTL',
      ],
    },
  ],
  's3-security': [
    {
      question: 'Which mechanisms protect data in S3?',
      options: [
        'Bucket policies and IAM policies, Block Public Access, server-side encryption',
        'Only a password on the bucket',
        'Only the operating system’s firewall',
        'S3 does not support access control',
      ],
    },
    {
      question: 'What does the S3 Block Public Access feature do?',
      options: [
        'Centrally forbids public access to buckets and objects, overriding mistaken policies',
        'Blocks access to the bucket for everyone, including the owner',
        'Encrypts objects on upload',
        'Limits download speed',
      ],
    },
  ],
  'what-is-vpc': [
    {
      question: 'What is Amazon VPC?',
      options: [
        'A logically isolated virtual network in the AWS cloud with its own subnets, route tables, and gateways',
        'A virtual private server',
        'A VPN client for employees',
        'A video-conferencing service',
      ],
    },
    {
      question: 'How does a public VPC subnet differ from a private one?',
      options: [
        'A public one has a route to an Internet Gateway; a private one has no direct internet access (usually via NAT)',
        'A public subnet is visible to all AWS accounts',
        'A private subnet cannot contain EC2 instances',
        'The difference is only in the name',
      ],
    },
  ],
  'security-group-vs-nacl': [
    {
      question: 'How does a Security Group differ from a Network ACL?',
      options: [
        'A Security Group is stateful, at the instance level, allow-rules only; a NACL is stateless, at the subnet level, allow and deny',
        'A NACL is stateful, a Security Group stateless',
        'A Security Group works at the subnet level, a NACL at the instance level',
        'They are two names for the same mechanism',
      ],
    },
    {
      question: 'What does it mean that a Security Group is stateful?',
      options: [
        'Return traffic for an allowed connection is let through automatically, without a separate rule',
        'The group’s rules cannot be changed after creation',
        'The group keeps a log of all connections',
        'The group applies to only one instance',
      ],
    },
  ],
  'cloud-service-models': [
    {
      question: 'What is the difference between IaaS and PaaS?',
      options: [
        'IaaS gives raw infrastructure (you manage the OS and runtime); in PaaS the provider manages OS/runtime, you only the code',
        'PaaS gives more control than IaaS',
        'IaaS is a ready-made application in the browser',
        'No difference',
      ],
    },
    {
      question: 'Which model does a ready-made application like Gmail belong to?',
      options: ['SaaS (Software as a Service)', 'IaaS', 'PaaS', 'FaaS'],
    },
  ],
  'iam': [
    {
      question: 'How does an IAM Role differ from an IAM User?',
      options: [
        'A role has no permanent keys — temporary tokens are issued; services and instances “assume” it',
        'A role has a permanent password, and a user does not',
        'A role cannot be assigned to an EC2 instance',
        'No difference',
      ],
    },
    {
      question: 'Which principle underlies granting permissions in IAM?',
      options: [
        'Least privilege — the minimum necessary permissions',
        'Maximum permissions by default',
        'All users get administrator rights',
        'Permissions are granted randomly',
      ],
    },
    {
      question: 'What is an IAM Policy?',
      options: [
        'A JSON document with permissions (Effect, Action, Resource, Condition)',
        'A temporary access token',
        'A second authentication factor',
        'A group of users',
      ],
    },
  ],
  'kms': [
    {
      question: 'What does AWS KMS do?',
      options: [
        'It manages encryption keys and performs crypto operations; keys never leave the service in plaintext',
        'It stores the application’s logs',
        'It balances load across instances',
        'It serves static files',
      ],
    },
    {
      question: 'What is envelope encryption in KMS?',
      options: [
        'A KMS key encrypts a data key, which in turn encrypts the large data',
        'Data is encrypted twice with one key',
        'Only file names are encrypted',
        'Data is transmitted without encryption',
      ],
    },
  ],
  'lambda-serverless': [
    {
      question: 'How is AWS Lambda billed?',
      options: [
        'By the number of invocations and execution time — only for actual work',
        'For a permanently allocated instance per hour',
        'A fixed monthly subscription regardless of load',
        'By the volume of stored data',
      ],
    },
    {
      question: 'What is a cold start in Lambda?',
      options: [
        'The delay on a function’s first run (especially noticeable for the JVM)',
        'A complete failure of the function',
        'Automatic scaling to zero',
        'An out-of-memory error',
      ],
    },
    {
      question: 'When does Lambda suit better than a permanent service (EC2/ECS)?',
      options: [
        'Event-driven irregular load, short independent tasks',
        'Steadily high constant load',
        'Long processes over 15 minutes',
        'Strict minimum-latency requirements',
      ],
    },
  ],
  'aws-storage-types': [
    {
      question: 'What type of storage is Amazon S3?',
      options: [
        'Object storage (file-objects in buckets, accessed via API/URL)',
        'A block disk for a single instance',
        'A relational database',
        'A file system mounted as a disk',
      ],
    },
    {
      question: 'What is EBS?',
      options: [
        'Block storage — a virtual disk attached to a single EC2 instance',
        'Object storage accessed over HTTP',
        'Archive storage with hours of latency',
        'A managed relational DB',
      ],
    },
    {
      question: 'What is S3 Glacier used for?',
      options: [
        'Cheap archival storage of rarely read data with access latency',
        'A disk for an EC2 operating system',
        'Storing application sessions with low latency',
        'A cache for hot data',
      ],
    },
  ],
  'aws-rds': [
    {
      question: 'What does RDS take care of?',
      options: [
        'Installation, patching, backups, replication, and monitoring of a relational DB',
        'Writing SQL queries for the developer',
        'Automatic schema design',
        'Storing objects and files',
      ],
    },
    {
      question: 'What does Multi-AZ give in RDS?',
      options: [
        'A synchronous replica in another AZ for fault tolerance and automatic failover',
        'Faster reads via a cache',
        'Data encryption',
        'Reduced storage cost',
      ],
    },
  ],
  'dynamodb-vs-rds': [
    {
      question: 'When is DynamoDB preferable to RDS?',
      options: [
        'Huge scale, key-based access with known patterns, low latency',
        'Many relationships between tables and complex JOINs',
        'Strict ACID transactions for finance',
        'Arbitrary ad-hoc queries on the fly',
      ],
    },
    {
      question: 'What limitation does DynamoDB have?',
      options: [
        'No full JOINs or complex ad-hoc queries — keys are designed in advance',
        'It does not scale horizontally',
        'It does not support high write load',
        'It requires manual sharding',
      ],
    },
  ],
  'subnets-igw-nat': [
    {
      question: 'What determines whether a subnet is public?',
      options: [
        'A route to an Internet Gateway (IGW) in its route table',
        'The size of the CIDR block',
        'The number of instances in it',
        'The subnet’s name',
      ],
    },
    {
      question: 'What is a NAT Gateway for?',
      options: [
        'To give private resources outbound internet access while forbidding inbound',
        'To provide inbound access from the internet to the DB',
        'To encrypt traffic between subnets',
        'To balance load across AZs',
      ],
    },
    {
      question: 'What does a CIDR notation like 10.0.0.0/16 specify?',
      options: [
        'The network’s IP-address range (here 65,536 addresses)',
        'The number of available instances',
        'The region identifier',
        'The network encryption type',
      ],
    },
  ],
};
