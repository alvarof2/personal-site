(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{166:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),r=n(5),o=n(21),c=function(e){var t=e.data;return Object(a.jsxs)("article",{className:"degree-container",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h4",{className:"degree",children:Object(a.jsx)("a",{href:t.title,children:t.degree})}),Object(a.jsxs)("p",{className:"school",children:[Object(a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]}),Object(a.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e[1],children:e[0]})},e[0])}))})]})},s=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"education",children:[Object(a.jsx)("div",{className:"link-to",id:"education"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(a.jsx)(c,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,d=function(e){var t=e.data;return Object(a.jsxs)("article",{className:"jobs-container",children:[Object(a.jsxs)("header",{children:[Object(a.jsxs)("h4",{children:[Object(a.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(a.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(a.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(a.jsx)("li",{children:e},e)}))})]})},u=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"experience",children:[Object(a.jsx)("div",{className:"link-to",id:"experience"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(a.jsx)(d,{data:e},e.company)}))]})};u.defaultProps={data:[]};var b=u;function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return g(this,n)}}var j=n(57),O=n(55),v=function(e){var t=e.handleClick,n=e.active,i=e.label;return Object(a.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},k=function(e){var t=e.data,n=e.categories,i=t.category,r=t.competency,o=t.title,c={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(O.a)(Object(O.a)({},c),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return Object(a.jsxs)("div",{className:"skillbar clearfix",children:[Object(a.jsx)("div",{className:"skillbar-title",style:c,children:Object(a.jsx)("span",{children:o})}),Object(a.jsx)("div",{className:"skillbar-bar",style:s}),Object(a.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};k.defaultProps={categories:[]};var x=k,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(o,e);var t,n,i,r=y(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return Object(O.a)(Object(O.a)({},n),{},Object(j.a)({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(O.a)(Object(O.a)({},e),{},Object(j.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(a.jsx)(x,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(a.jsx)(v,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"skills",children:[Object(a.jsx)("div",{className:"link-to",id:"skills"}),Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h3",{children:"Skills"}),Object(a.jsx)("p",{children:"This section is a ragbag of skills, programming languages, technologies, etc. Here is a *mostly* honest overview of my skills."})]}),Object(a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&p(t.prototype,n),i&&p(t,i),o}(i.Component);w.defaultProps={skills:[],categories:[]};var C=w,A=function(e){var t=e.data;return Object(a.jsx)("article",{className:"certifications-container",children:Object(a.jsxs)("header",{children:[Object(a.jsxs)("h4",{children:[Object(a.jsx)("a",{href:t.link,children:t.title})," - ",t.company]}),Object(a.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]})})},S=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"certifications",children:[Object(a.jsx)("div",{className:"link-to",id:"certifications"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Certifications"})}),t.map((function(e){return Object(a.jsx)(A,{data:e},e.title)}))]})};S.defaultProps={data:[]};var N=S,D=function(e){var t=e.data;return Object(a.jsx)("article",{className:"conference-container",children:Object(a.jsxs)("header",{children:[Object(a.jsxs)("h4",{children:[Object(a.jsx)("a",{href:t.link,children:t.conference})," - ",Object(a.jsx)("a",{href:t.talklink,children:t.title})]}),Object(a.jsx)("p",{className:"authors",children:t.authors.map((function(e,t,n){return t===n.length-1?Object(a.jsxs)(a.Fragment,{children:[" and ",Object(a.jsx)("a",{href:e[1],children:e[0]}),"."]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("a",{href:e[1],children:e[0]}),", "]})}))}),Object(a.jsxs)("p",{className:"daterange",children:[" ",t.date]})]})})},P=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"conferences",children:[Object(a.jsx)("div",{className:"link-to",id:"conferences"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Conferences"})}),t.map((function(e){return Object(a.jsx)(D,{data:e},e.title)}))]})};P.defaultProps={data:[]};var E=P,L=function(e){var t=e.data;return Object(a.jsx)("article",{className:"publication-container",children:Object(a.jsxs)("header",{children:[Object(a.jsx)("h4",{className:"publication",children:t.publication}),Object(a.jsxs)("p",{className:"school",children:[Object(a.jsx)("a",{href:t.link,children:t.conference}),", ",t.year]})]})})},z=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"publications",children:[Object(a.jsx)("div",{className:"link-to",id:"publications"}),Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h3",{children:"Selected Publications"}),Object(a.jsxs)("p",{children:["Some publications resulting from my research work. A full list of my publications can be found at my ",Object(a.jsx)("a",{href:"https://www.linkedin.com/in/fernandezfalvaro",children:"LinkedIn"})," or",Object(a.jsx)("a",{href:"https://orcid.org/0000-0001-8719-831X",children:" ORCID"})," profiles."]})]}),t.map((function(e){return Object(a.jsx)(L,{data:e},e.publication)}))]})};z.defaultProps={data:[]};var M=z,F=[{publication:"\xc1. Fern\xe1ndez and N. Stol, Economic, dissatisfaction and reputation risks of hardware and software failures in PONs",year:"2016",link:"https://ieeexplore.ieee.org/document/7731162",conference:"IEEE/ACM Transactions on Networking"},{publication:"\xc1. Fern\xe1ndez and N. Stol, CAPEX and OPEX simulation study of cost-efficient protection mechanisms in passive optical networks",year:"2015",link:"https://www.sciencedirect.com/science/article/abs/pii/S1573427715000028",conference:"Optical Switching and Networking"},{publication:"\xc1. Fern\xe1ndez and N. Stol, Managing software failures and capacity assignment to control interval availability in PONs",year:"2016",link:"https://ieeexplore.ieee.org/document/7608274",conference:"8th International Workshop on Resilient Networks Design and Modeling"}],G=[{title:"Microsoft Certified: Azure Fundamentals",daterange:"February 2023 - NA",link:"https://www.credly.com/badges/7e7f8b88-5ba5-45d2-8adc-9a7d3a6c3cf3/public_url",company:"Microsoft"},{title:"PCA: Prometheus Certified Associate",daterange:"December 2022 - December 2025",link:"https://www.credly.com/badges/3896aa96-681a-43af-b561-45f49cb16a40/public_url",company:"The Linux Foundation"},{title:"CKS: Certified Kubernetes Security Specialist",daterange:"September 2022 - September 2024",link:"https://www.credly.com/badges/f1e58d40-ed92-440f-91ca-3f538c800387/public_url",company:"The Linux Foundation"},{title:"CKA: Certified Kubernetes Administrator",daterange:"April 2022 - April 2025",link:"https://www.credly.com/badges/95840aae-4a36-4ed4-bf88-d2305706ce8c/public_url",company:"The Linux Foundation"},{title:"MongoDB Certified DBA Associate (C100DBA)",daterange:"February 2022 - NA",link:"https://university.mongodb.com/certification/certificate/299591948",company:"MongoDB, Inc"},{title:"Elasticsearch Certified Engineer",daterange:"November 2021 - November 2023",link:"https://certified.elastic.co/ec0ea7b5-138c-4a63-bea3-d983dee149b3#gs.qfae1s",company:"Elastic"},{title:"AWS Certified Solutions Architect - Associate",daterange:"July 2021 - July 2024",link:"https://www.credly.com/badges/b7bf2ea0-9f1b-4b1d-9c91-a6b43e752778/public_url",company:"Amazon Web Services Training and Certification"},{title:"Google Cloud Associate Cloud Engineer",daterange:"June 2021 - June 2023",link:"https://www.credential.net/fb20a350-1d43-4715-bf2c-4da1cd89202b?key=b6a26cd1cf3a189048ede421d0bf653a7ef86e6a16ecba37bc3c2029aa000d88",company:"Google Cloud"},{title:"AWS Certified Cloud Practitioner",daterange:"April 2021 - July 2024",link:"https://www.credly.com/badges/679f6624-6ea3-43b9-b497-7a711a9a90aa/public_url",company:"Amazon Web Services Training and Certification"},{title:"CKAD: Certified Kubernetes Application Developer",daterange:"March 2021 - March 2024",link:"https://www.credly.com/badges/f50385c4-56d4-4a57-81bb-3e54779d782c/public_url",company:"The Linux Foundation"},{title:"Hashicorp Certified: Terraform Associate",daterange:"February 2021 - October 2023",link:"https://www.credly.com/badges/7891b2ed-8b26-40d0-94b4-58840bf75d75/public_url",company:"Hashicorp"}],T=[{conference:"WTF is SRE",title:"Cloud FinOps & Sustainability on Kubernetes",date:"April 2022",link:"https://www.cloud-native-sre.wtf/",talklink:"https://www.youtube.com/watch?v=VXj1tomrJjY&list=PLTXrNQgC6vMQrFF2i0iue4XL5XbWaPsen&index=2",authors:[["Ramiro \xc1lvarez Fern\xe1ndez","https://ramiroalvfer.dev/"],["C\xe9sar Gonz\xe1lez Gonz\xe1lez","https://linkedin.com/in/cesar-gonzalez-93201230"],["\xc1lvaro Fern\xe1ndez Fern\xe1ndez","https://www.fernandezfalvaro.com/"]]},{conference:"Cloud Native Rejekts",title:"Cloud FinOps & Sustainability on Kubernetes",date:"May 2022",link:"https://cloud-native.rejekts.io/",talklink:"https://youtu.be/S07OdFshwDk?t=18272",authors:[["Ramiro \xc1lvarez Fern\xe1ndez","https://ramiroalvfer.dev/"],["C\xe9sar Gonz\xe1lez Gonz\xe1lez","https://linkedin.com/in/cesar-gonzalez-93201230"],["\xc1lvaro Fern\xe1ndez Fern\xe1ndez","https://www.fernandezfalvaro.com/"]]}],K=[{school:"Norwegian University of Science and Technology (NTNU)",degree:"Ph.D. in Telematics",link:"https://www.ntnu.edu/",title:"https://drive.google.com/file/d/1x_a1i2tnd0HJD-_voKh_YVL_5XzSVUR8/view?usp=sharing",year:2017,points:[["Thesis abstract","https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/2434357"],["Defence presentation","https://db.item.ntnu.no/graduated/175"]]},{school:"University of Valladolid",degree:"M.Sc. Telecommunications Engineering - Extraordinary End-of-Degree Award",link:"https://universityofvalladolid.uva.es/",title:"https://drive.google.com/file/d/1h6FZ0ETpCrbRW58iVp9U4G4BFHTFuLby/view?usp=sharing",year:2012,points:[]}],I=[{company:"cLabs",position:"DevOps Engineer",link:"https://clabs.co/",daterange:"February 2023 - Present",points:["Manage and administer the cLabs cloud infrastructure (Azure and GCP).","Migrate the cLabs owned infrastructure (Azure and Azure AD) to Mento spin off.","Install and manage the cLabs deployments based on Kubernetes (GKE and AKS).","Integrate cLabs deployments with the Akeyless.io Secrets Management Platform.","Develop and maintain a GitOps CI/CD approach for cLabs deployments using both push-based (Terraform, GitHub Actions) and pull-based (ArgoCD) GitOps.","Deploy and configure the monitoring and logging stack based on Prometheus, Promtail, Loki and Grafana Cloud with a GitOps approach (Terraform and GitHub Actions).","Automate the Helm charts lifecycle at cLabs (development, testing and publishing through GitHub Actions and GCP Artifact Registry)."]},{company:"cLabs - Independent Contractor",position:"DevOps Engineer",link:"https://clabs.co/",daterange:"August 2022 - January 2023",points:["As independent contractor at cLabs, my duties were very similar to those described above as full-time employee."]},{company:"Keyko - Independent Contractor",position:"Platform Engineer",link:"https://keyko.io/",daterange:"February 2022 - August 2022",points:["Operate and maintain the Keyko.io CELO blockchain validator as well as set up the monitoring stack based on Grafana Cloud.","Install and manage the Keyko.io deployments based on Kubernetes (GKE).","Establish a GitOps approach for Keyko deployments using ArgoCD.","Plan and automatize the Helm charts lifecycle at Keyko.io (development, testing and publishing through GitHub Actions and GCP Artifact Registry).","Manage and administer the cloud infrastructure (AWS, GCP) and the Google Workspace for Keyko.io.","Configure and administer the CI/CD technologies at Keyko.io (Github Actions and DockerHub).","Deploy, configure and maintain the monitoring stack based on Prometheus, Alertmanager and Grafana in Kubernetes."]},{company:"Empathy",position:"Platform Engineer",link:"https://empathy.co/",daterange:"September 2020 - February 2022",points:["Install, manage and operate the Empathy.co platform based on Kubernetes (EKS and GKE) with Helm as a package manager.","Manage the cloud infrastructure (AWS, GCP) through Terraform and Atlantis.","Manage and configure several CI/CD technologies such as Github Actions, ArgoCD and Jenkins.","Deploy, rightsize and configure the monitoring stack (Prometheus, Alertmanager, Grafana) and the logging stack (Fluent Bit, Fluentd, Elasticsearch/Loki) in Kubernetes.","Work in FinOps trying to analyze, optimize and bring visibility and accountability to the cloud costs at Empathy.co."]},{company:"StratioBD",position:"DevOps and Software Engineer",link:"https://www.stratio.com/home",daterange:"March 2018 - September 2020",points:["Developing the core backend of Stratio Data Centric product (DC/OS based PaaS).","By means of tools like Ansible and Docker, this position entails automating the deployment and operation of clusters of different technologies such as DC/OS (Mesos), Etcd, Vault, Zookeeper or Consul; as well as other system-monitoring related software like Prometheus and Grafana.","Additionally, my occupation requires developing shell/python scripts and go programs; plus an understanding of GNU/Linux main distributions (CentOS, RHEL, Ubuntu)."]},{company:"StratioBD",position:"Support Technician",link:"https://www.stratio.com/home",daterange:"May 2017 - March 2018",points:["Support and integration of Big Data technologies in PaaS based on DC/OS (Mesos).","System and operations support, cluster (infrastructure and resources) management and monitoring.","Automation of software provisioning and deployment, as well as configuration management through Ansible and shell scripting.","24x7 Support.","Ticket troubleshooting and WA deploying."]},{company:"NTNU",position:"Ph.D. Candidate",link:"https://www.ntnu.edu/",daterange:"June 2012 - March 2017",points:["My position at the Department of Telematics (ITEM) consists of both research activities (75% - under the supervision of Associate Professor Norvald Stol) and teaching duties (25%).","As for my research activities, my dissertation is focused on cost-effective dependability of optical networks.","Teaching duties involved assistance to courses mainly related to networking (architectures, performance and dependability)."]}],R=n(17);var _=n(23);var B,H=[{title:"Kubernetes",competency:5,category:["Container Orchestration","Kubernetes"]},{title:"Helm",competency:4,category:["Container Orchestration","Kubernetes"]},{title:"Mesos - DC/OS",competency:4,category:["Container Orchestration"]},{title:"Docker",competency:5,category:["Container Orchestration"]},{title:"AWS",competency:4,category:["Cloud Infrestructure"]},{title:"GCP",competency:3,category:["Cloud Infrestructure"]},{title:"Terraform",competency:4,category:["Cloud Infrestructure","IaC"]},{title:"Github Actions",competency:3,category:["CI/CD"]},{title:"ArgoCD",competency:4,category:["CI/CD"]},{title:"Jenkins",competency:1,category:["CI/CD"]},{title:"Prometheus",competency:5,category:["Observability","Monitoring"]},{title:"Thanos",competency:2,category:["Observability","Monitoring"]},{title:"Alertmanager",competency:5,category:["Observability","Monitoring"]},{title:"Grafana",competency:3,category:["Observability","Monitoring"]},{title:"Fluent Bit",competency:3,category:["Observability","Logging"]},{title:"Fluentd",competency:2,category:["Observability","Logging"]},{title:"Elasticsearch",competency:3,category:["NoSQL","DBA","Observability","Logging"]},{title:"Loki",competency:3,category:["Observability","Logging"]},{title:"MongoDB",competency:2,category:["NoSQL","DBA"]},{title:"FinOps",competency:1,category:["Cloud Computing"]},{title:"Zookeeper",competency:1,category:["Key-Value Store","DBA"]},{title:"Etcd",competency:1,category:["Key-Value Store","DBA"]},{title:"Vault",competency:2,category:["PKI"]},{title:"TLS",competency:2,category:["PKI"]},{title:"Dependable IT Systems",competency:3,category:["Research"]},{title:"Golang",competency:1,category:["Programming Languages"]},{title:"Python",competency:2,category:["Programming Languages"]},{title:"YAML",competency:3,category:["Programming Languages","Data Serialization"]},{title:"JSON",competency:3,category:["Programming Languages","Data Serialization"]},{title:"HCL",competency:3,category:["Configuration Languages","Cloud Infrestructure","IaC"]},{title:"Ansible",competency:3,category:["Configuration Languages","Configuration Management","IaC"]}].map((function(e){return Object(O.a)(Object(O.a)({},e),{},{category:e.category.sort()})})),W=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],J=(B=new Set(H.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(R.a)(e)}(B)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(B)||Object(_.a)(B)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:W[t]}})),V=["Education","Experience","Certifications","Conferences","Publications","Skills"];t.default=function(){return Object(a.jsx)(o.a,{title:"Resume",description:"\xc1lvaro Fern\xe1ndez's Resume.",children:Object(a.jsxs)("article",{className:"post",id:"resume",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h2",{"data-testid":"heading",children:Object(a.jsx)(r.b,{to:"resume",children:"Resume"})}),Object(a.jsx)("div",{className:"link-container",children:V.map((function(e){return Object(a.jsx)("h4",{children:Object(a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(a.jsxs)("p",{children:[" My resume is also available in ",Object(a.jsx)("a",{href:"https://drive.google.com/file/d/1vDWywivNAtajELQeShtgPjLdbgiTM6DM/view?usp=share_link",children:"pdf format"})," with source code ",Object(a.jsx)("a",{href:"https://github.com/alvarof2/latex-cv",children:"here"}),"."]}),Object(a.jsx)(l,{data:K}),Object(a.jsx)(b,{data:I}),Object(a.jsx)(N,{data:G}),Object(a.jsx)(E,{data:T}),Object(a.jsx)(M,{data:F}),Object(a.jsx)(C,{skills:H,categories:J})]})})}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(57);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},57:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=5.97d1e132.chunk.js.map