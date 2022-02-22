// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Kubernetes',
    competency: 5,
    category: ['Container Orchestration', 'Kubernetes'],
  },
  {
    title: 'Helm',
    competency: 4,
    category: ['Container Orchestration', 'Kubernetes'],
  },
  {
    title: 'Mesos - DC/OS',
    competency: 4,
    category: ['Container Orchestration'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Container Orchestration'],
  },
  {
    title: 'AWS',
    competency: 4,
    category: ['Cloud Infrestructure'],
  },
  {
    title: 'GCP',
    competency: 3,
    category: ['Cloud Infrestructure'],
  },
  {
    title: 'Terraform',
    competency: 4,
    category: ['Cloud Infrestructure', 'IaC'],
  },
  {
    title: 'Github Actions',
    competency: 3,
    category: ['CI/CD'],
  },
  {
    title: 'ArgoCD',
    competency: 4,
    category: ['CI/CD'],
  },
  {
    title: 'Jenkins',
    competency: 2,
    category: ['CI/CD'],
  },
  {
    title: 'Prometheus',
    competency: 5,
    category: ['Observability', 'Monitoring'],
  },
  {
    title: 'Thanos',
    competency: 2,
    category: ['Observability', 'Monitoring'],
  },
  {
    title: 'Alertmanager',
    competency: 5,
    category: ['Observability', 'Monitoring'],
  },
  {
    title: 'Grafana',
    competency: 3,
    category: ['Observability', 'Monitoring'],
  },
  {
    title: 'Fluent Bit',
    competency: 3,
    category: ['Observability', 'Logging'],
  },
  {
    title: 'Fluent Fluentd',
    competency: 2,
    category: ['Observability', 'Logging'],
  },
  {
    title: 'Elasticsearch',
    competency: 3,
    category: ['NoSQL', 'DBA', 'Observability', 'Logging'],
  },
  {
    title: 'Loki',
    competency: 3,
    category: ['Observability', 'Logging'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['NoSQL', 'DBA'],
  },
  {
    title: 'FinOps',
    competency: 1,
    category: ['Cloud Computing'],
  },
  {
    title: 'Zookeeper',
    competency: 1,
    category: ['Key-Value Store', 'DBA'],
  },
  {
    title: 'Etcd',
    competency: 1,
    category: ['Key-Value Store', 'DBA'],
  },
  {
    title: 'Vault',
    competency: 2,
    category: ['PKI'],
  },
  {
    title: 'TLS',
    competency: 2,
    category: ['PKI'],
  },
  {
    title: 'Dependable IT Systems',
    competency: 3,
    category: ['Research'],
  },
  {
    title: 'Golang',
    competency: 1,
    category: ['Programming Languages'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Programming Languages'],
  },
  {
    title: 'YAML',
    competency: 3,
    category: ['Programming Languages', 'Data Serialization'],
  },
  {
    title: 'JSON',
    competency: 3,
    category: ['Programming Languages', 'Data Serialization'],
  },
  {
    title: 'HCL',
    competency: 3,
    category: ['Configuration Languages', 'Cloud Infrestructure', 'IaC'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
