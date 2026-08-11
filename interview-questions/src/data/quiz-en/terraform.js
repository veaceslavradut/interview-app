// Английский перевод банка квиза: terraform. Порядок вариантов и опций — как в RU.
export const terraform = {
  'what-is-terraform': [
    {
      question: 'What is Infrastructure as Code (IaC)?',
      options: [
        'An approach where infrastructure is described and managed by code rather than manually via a UI',
        'Writing an application’s business logic',
        'Storing code in the cloud',
        'Automatic scaling of containers',
      ],
    },
    {
      question: 'Which approach does Terraform use?',
      options: [
        'Declarative — you describe the desired state, Terraform computes the actions',
        'Imperative — you list the exact execution steps',
        'Only manual configuration via the console',
        'Only configuring existing machines over SSH',
      ],
    },
  ],
  'terraform-vs-others': [
    {
      question: 'What is the main difference between Terraform and Ansible?',
      options: [
        'Terraform provisions infrastructure (declaratively, with state); Ansible configures existing machines',
        'Ansible creates infrastructure, and Terraform only configures the OS',
        'They are the same tool',
        'Terraform works only over SSH',
      ],
    },
    {
      question: 'How does Terraform differ from AWS CloudFormation?',
      options: [
        'Terraform is cloud-agnostic (AWS, GCP, Azure…), while CloudFormation is AWS-only',
        'CloudFormation works with any cloud, and Terraform only with AWS',
        'Both work only with Kubernetes',
        'Terraform doesn’t store state, and CloudFormation does',
      ],
    },
  ],
  'terraform-providers-resources': [
    {
      question: 'What is a provider in Terraform?',
      options: [
        'A plugin for talking to a specific platform’s API (aws, google, azurerm…)',
        'A single infrastructure object',
        'The state file',
        'The command that applies changes',
      ],
    },
    {
      question: 'What does a resource describe?',
      options: [
        'A single infrastructure object Terraform manages (EC2, S3 bucket, VPC)',
        'A cloud plugin',
        'A configuration variable',
        'Remote state storage',
      ],
    },
  ],
  'terraform-state': [
    {
      question: 'What is the state file for in Terraform?',
      options: [
        'It stores the mapping of resources from the code to real objects in the cloud',
        'It stores the application’s source code',
        'It contains execution logs',
        'It caches Docker images',
      ],
    },
    {
      question: 'Why can’t the state file be stored in git and edited by hand?',
      options: [
        'It contains sensitive data and is critical — for edits there are terraform state / import',
        'It is too big for git',
        'Git doesn’t support JSON',
        'It doesn’t need to be stored at all',
      ],
    },
  ],
  'terraform-remote-state': [
    {
      question: 'Why can’t you store state locally in production?',
      options: [
        'No shared access or locking, risk of losing the file, leaking secrets',
        'Local state is faster and that is dangerous',
        'Terraform technically forbids it',
        'Local state takes too much space',
      ],
    },
    {
      question: 'Which combination is popular for remote state in AWS?',
      options: [
        'S3 (state storage) + DynamoDB (locking)',
        'EC2 + Lambda',
        'RDS + ElastiCache',
        'CloudFront + Route53',
      ],
    },
  ],
  'terraform-state-locking': [
    {
      question: 'What is state locking for?',
      options: [
        'To stop two applies from changing the state at once and corrupting it',
        'To encrypt the state file',
        'To speed up terraform plan',
        'To limit access to the cloud',
      ],
    },
    {
      question: 'What happens if two people run apply at the same time without locking?',
      options: [
        'Concurrent writes corrupt the state and desync it from reality',
        'The second apply just cancels with no consequences',
        'Terraform merges the changes automatically',
        'Nothing — apply is always safe',
      ],
    },
  ],
  'terraform-commands': [
    {
      question: 'What does terraform plan do?',
      options: [
        'Shows what will be created/changed/destroyed without changing anything (a dry run)',
        'Applies changes to the infrastructure',
        'Deletes all infrastructure',
        'Downloads providers',
      ],
    },
    {
      question: 'What does terraform destroy do?',
      options: [
        'Deletes all infrastructure managed by this configuration',
        'Updates state from the real state',
        'Formats the configuration',
        'Initializes the backend',
      ],
    },
  ],
};
