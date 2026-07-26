// Английские переводы: terraform
export const terraform = {
    title: 'Terraform',
    description: 'Infrastructure as Code: state, providers, remote backend, locking',
    questions: {
      'what-is-terraform': {
        question: 'What is Terraform and Infrastructure as Code (IaC)?',
        answer: `**Infrastructure as Code (IaC)** is an approach where infrastructure (servers, networks, databases, load balancers) is **described as code** and managed through it, rather than created manually by clicking in a UI. Benefits: versioning in git, reproducibility, change review, automation, and eliminating hand-built "snowflake" servers.

**Terraform** (HashiCorp) is a popular IaC tool for provisioning infrastructure in clouds and services. Characteristics:

- **declarative** — you describe the **desired state** (what should exist), and Terraform figures out which actions are needed to get there (unlike imperative "run these steps");
- **cloud-agnostic** — one tool and language (**HCL**, HashiCorp Configuration Language) for many providers (AWS, GCP, Azure, Kubernetes, etc.) via provider plugins;
- **plan before apply** — \`terraform plan\` shows exactly what will change before \`apply\`;
- **state tracking** via a **state file** — Terraform remembers what it has created and brings the real infrastructure in line with the code.

The workflow: write \`.tf\` configuration → \`init\` (download providers) → \`plan\` (review changes) → \`apply\` (apply them).`,
      },
      'terraform-vs-others': {
        question: 'How does Terraform differ from Ansible and CloudFormation?',
        answer: `All three are about infrastructure automation, but with different focuses:

**Terraform vs Ansible** — this is **provisioning vs configuration management**:

- **Terraform** — **declarative**, for **creating and managing infrastructure** (spin up a VM, network, DB). It keeps state, knows the current state of resources, and can delete/change them.
- **Ansible** — primarily **configuration management**: **configuring existing** machines (install packages, lay out configs, deploy), imperative/procedural, usually **stateless** (agentless, over SSH). They are often **combined**: Terraform creates the servers, Ansible configures them.

**Terraform vs CloudFormation:**

- **CloudFormation** — an IaC service **for AWS only** (native, managed by AWS itself, which stores the state for you).
- **Terraform** — **cloud-agnostic**: one tool and language (HCL) for AWS, GCP, Azure, Kubernetes, and hundreds of providers; you manage the state yourself (a remote backend). Advantageous in multi-cloud and when a single ecosystem of modules is needed.

In short: **Terraform** — declarative infrastructure creation in any cloud; **Ansible** — configuring machines; **CloudFormation** — like Terraform but locked to AWS.`,
      },
      'terraform-providers-resources': {
        question: 'What are a provider and a resource in Terraform?',
        answer: `A **provider** is a plugin through which Terraform talks to a specific platform (its API). For example, the \`aws\`, \`google\`, \`azurerm\`, \`kubernetes\` providers. A provider is configured (region, credentials) and downloaded on \`terraform init\`. Providers are exactly what makes Terraform cloud-agnostic — one language, working with any platform that has a provider.

\`\`\`hcl
provider "aws" {
  region = "eu-west-1"
}
\`\`\`

A **resource** describes **a single infrastructure object** that Terraform manages: an EC2 instance, an S3 bucket, a VPC, a DNS record. A resource has a type (\`aws_instance\`), a local name, and arguments:

\`\`\`hcl
resource "aws_instance" "web" {
  ami           = "ami-123456"
  instance_type = "t3.micro"
}
\`\`\`

Terraform builds a **dependency graph** of resources (from references like \`aws_instance.web.id\`) and creates them in the correct order. There are also **data sources** (\`data\`) — read-only access to existing objects, **variables**/**outputs** — parameterization and value output, and **modules** — reusable sets of resources.`,
      },
      'terraform-state': {
        question: 'What is the state file and what is inside terraform.tfstate?',
        answer: `The **state file (\`terraform.tfstate\`)** is a JSON file where Terraform keeps its **map of correspondence** between the resources in your code and the **real objects** in the cloud. It's Terraform's memory of what it has created.

What's inside: the list of managed resources, their **real identifiers** (e.g., an EC2 instance id), current attribute values, metadata and dependencies, a version, and sometimes **sensitive data** (passwords, keys that ended up in attributes).

Why it's needed:

- **code ↔ reality mapping** — from a resource's name in code, Terraform knows which specific cloud object corresponds to it;
- **plan computation** — it compares the *desired* (code) with the *current* (state) and *real* (refresh) state to determine what to create/change/delete;
- **performance** — it caches attributes to avoid querying the API for every resource;
- it stores dependencies for the correct order of operations.

An important consequence: state is a **critical and sensitive** artifact. It must not be edited by hand (there are \`terraform state\` commands and \`import\` for changes), and because of the secrets inside it must be stored **securely** (an encrypted remote backend), not in git.`,
      },
      'terraform-remote-state': {
        question: 'Why can\'t you store state locally in production? How does remote state work?',
        answer: `By default state lives **locally** in \`terraform.tfstate\`. For team/production work this is bad:

- **no shared access** — everyone has their own copy of state, one person's changes aren't visible to others, and the state diverges;
- **risk of loss** — a file on a laptop can be deleted/lost, and without state Terraform "forgets" about the created infrastructure;
- **secrets** — state contains sensitive data, and a local file leaks easily (and shouldn't go into git);
- **no locking** — simultaneous \`apply\` by different people will corrupt the state.

**Remote state (a remote backend)** solves this — state is stored in a shared remote store:

- **a single source of truth** — everyone works with one state;
- **reliability and encryption** — a store with versioning and encryption (e.g., S3 with versions);
- **locking** — prevents simultaneous changes (see state locking);
- **access separation** — permissions to the backend via IAM.

It's configured with a \`backend\` block. A popular option is **AWS S3 (state storage) + DynamoDB (locking)**; also Terraform Cloud, GCS, Azure Blob, Consul. When switching to a remote backend, Terraform offers to **migrate** the existing state into it.`,
      },
      'terraform-state-locking': {
        question: 'What is state locking and why is it needed?',
        answer: `**State locking** is a mechanism that prevents **two operations from simultaneously** modifying the same state. Before \`apply\` (and other changing commands) Terraform **acquires a lock**, and releases it on completion.

Why: if two people (or two CI jobs) run \`apply\` at the same time, they'll write to one state in parallel — leading to **state corruption** and desynchronization with the real infrastructure (duplicate resources, "lost" objects, conflicting changes). The lock serializes such operations: the second \`apply\` **waits** for release or fails with a lock message.

How it's implemented — depends on the backend:

- **S3 + DynamoDB** — state lives in **S3**, and the lock is a "lock" record in a **DynamoDB** table (its strong consistency guarantees that only one can acquire the lock); this is the classic combination for AWS;
- Terraform Cloud, Consul, and others have built-in locking.

The local backend provides no locking between machines — another reason not to use it in a team. If a process crashed and left a "stuck" lock, it can be removed with \`terraform force-unlock\` (carefully, after making sure no one is working).`,
      },
      'terraform-commands': {
        question: 'What do the plan, apply, destroy, and refresh commands do?',
        answer: `The main commands of the Terraform workflow:

- **\`terraform init\`** — initialization: downloads providers and modules, configures the backend. Run first and after changing providers/backend.
- **\`terraform plan\`** — a **dry run**: compares the desired state (code) with the current (state) and real state, and shows what will be **created / changed / destroyed**, without changing anything. A key step for review before applying.
- **\`terraform apply\`** — **applies** the changes, bringing the infrastructure in line with the code (by default it first shows the plan and asks for confirmation). Updates the state.
- **\`terraform destroy\`** — **destroys all** infrastructure managed by this configuration (essentially an apply toward a "nothing" target state). Used carefully, often for temporary/test environments.
- **\`terraform refresh\`** (now \`apply -refresh-only\`) — synchronizes the **state** with the **real** state in the cloud (updates attributes if something was changed manually outside Terraform), without touching the infrastructure itself. By default refresh is implicitly performed within \`plan\`/\`apply\` too.

The typical flow: \`init\` → \`plan\` (review the diff) → \`apply\` (apply it). \`fmt\` and \`validate\` help format and check the configuration.`,
      },
    },
  };
