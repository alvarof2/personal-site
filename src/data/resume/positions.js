const positions = [
  {
    company: 'cLabs - Independent Contractor',
    position: 'DevOps Engineer',
    link: 'https://clabs.co/',
    daterange: 'August 2022 - Present',
    points: [
      'Manage and administer the cLabs cloud infrastructure (Azure and GCP).',
      'Migrate the cLabs owned infrastructure (Azure and Azure AD) to Mento spin off.',
      'Install and manage the cLabs deployments based on Kubernetes (GKE and AKS).',
      'Integrate cLabs deployments with the Akeyless.io Secrets Management Platform.',
      'Develop and maintain a GitOps CI/CD approach for cLabs deployments using both push-based (Terraform, GitHub Actions) and pull-based (ArgoCD) GitOps.',
      'Deploy and configure the monitoring and logging stack based on Prometheus, Promtail, Loki and Grafana Cloud with a GitOps approach (Terraform and GitHub Actions).',
      'Automate the Helm charts lifecycle at cLabs (development, testing and publishing through GitHub Actions and GCP Artifact Registry).',
    ],
  },
  {
    company: 'Keyko - Independent Contractor',
    position: 'Platform Engineer',
    link: 'https://keyko.io/',
    daterange: 'February 2022 - August 2022',
    points: [
      'Operate and maintain the Keyko.io CELO blockchain validator as well as set up the monitoring stack based on Grafana Cloud.',
      'Install and manage the Keyko.io deployments based on Kubernetes (GKE).',
      'Establish a GitOps approach for Keyko deployments using ArgoCD.',
      'Plan and automatize the Helm charts lifecycle at Keyko.io (development, testing and publishing through GitHub Actions and GCP Artifact Registry).',
      'Manage and administer the cloud infrastructure (AWS, GCP) and the Google Workspace for Keyko.io.',
      'Configure and administer the CI/CD technologies at Keyko.io (Github Actions and DockerHub).',
      'Deploy, configure and maintain the monitoring stack based on Prometheus, Alertmanager and Grafana in Kubernetes.',
    ],
  },
  {
    company: 'Empathy',
    position: 'Platform Engineer',
    link: 'https://empathy.co/',
    daterange: 'September 2020 - February 2022',
    points: [
      'Install, manage and operate the Empathy.co platform based on Kubernetes (EKS and GKE) with Helm as a package manager.',
      'Manage the cloud infrastructure (AWS, GCP) through Terraform and Atlantis.',
      'Manage and configure several CI/CD technologies such as Github Actions, ArgoCD and Jenkins.',
      'Deploy, rightsize and configure the monitoring stack (Prometheus, Alertmanager, Grafana) and the logging stack (Fluent Bit, Fluentd, Elasticsearch/Loki) in Kubernetes.',
      'Work in FinOps trying to analyze, optimize and bring visibility and accountability to the cloud costs at Empathy.co.',
    ],
  },
  {
    company: 'StratioBD',
    position: 'DevOps and Software Engineer',
    link: 'https://www.stratio.com/home',
    daterange: 'March 2018 - September 2020',
    points: [
      'Developing the core backend of Stratio Data Centric product (DC/OS based PaaS).',
      'By means of tools like Ansible and Docker, this position entails automating the deployment and operation of clusters of different technologies such as DC/OS (Mesos), Etcd, Vault, Zookeeper or Consul; as well as other system-monitoring related software like Prometheus and Grafana.',
      'Additionally, my occupation requires developing shell/python scripts and go programs; plus an understanding of GNU/Linux main distributions (CentOS, RHEL, Ubuntu).',
    ],
  },
  {
    company: 'StratioBD',
    position: 'Support Technician',
    link: 'https://www.stratio.com/home',
    daterange: 'May 2017 - March 2018',
    points: [
      'Support and integration of Big Data technologies in PaaS based on DC/OS (Mesos).',
      'System and operations support, cluster (infrastructure and resources) management and monitoring.',
      'Automation of software provisioning and deployment, as well as configuration management through Ansible and shell scripting.',
      '24x7 Support.',
      'Ticket troubleshooting and WA deploying.',
    ],
  },
  {
    company: 'NTNU',
    position: 'Ph.D. Candidate',
    link: 'https://www.ntnu.edu/',
    daterange: 'June 2012 - March 2017',
    points: [
      'My position at the Department of Telematics (ITEM) consists of both research activities (75% - under the supervision of Associate Professor Norvald Stol) and teaching duties (25%).',
      'As for my research activities, my dissertation is focused on cost-effective dependability of optical networks.',
      'Teaching duties involved assistance to courses mainly related to networking (architectures, performance and dependability).',
    ],
  },
];

export default positions;
