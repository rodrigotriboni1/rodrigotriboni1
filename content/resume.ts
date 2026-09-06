import type { Localized } from "@/lib/i18n";

export const profile = {
  name: "Rodrigo Mialichi Triboni",
  role: {
    pt: "Product Manager & Engenheiro",
    en: "Product Manager & Engineer",
  } as Localized,
  tagline: {
    pt: "Product Manager com base técnica em automação e integração de sistemas, unindo visão de produto e execução de engenharia.",
    en: "Product Manager with a technical foundation in automation and systems integration, blending product vision with engineering execution.",
  } as Localized,
  location: {
    pt: "Uberlândia, MG — Brasil",
    en: "Uberlândia, MG — Brazil",
  } as Localized,
  email: "rodrigotriboni@gmail.com",
  github: "https://github.com/rodrigotriboni1",
  githubHandle: "github.com/rodrigotriboni1",
  linkedin: "https://www.linkedin.com/in/rodrigotriboni1/",
  linkedinHandle: "linkedin.com/in/rodrigotriboni1",
  cvPath: {
    pt: "/cv/Rodrigo_Triboni_CV.pdf",
    en: "/cv/Rodrigo_Triboni_CV_EN.pdf",
  } as Localized,
};

export const about = {
  title: { pt: "Sobre", en: "About" } as Localized,
  text: {
    pt: "Estudante de Engenharia de Controle e Automação na UFU, com experiência prática em automação de processos, integração de APIs e desenvolvimento de produtos digitais. Atualmente atuo como Associate Product Manager na AgRisk, unindo visão técnica e foco no usuário para priorizar roadmap, conduzir discovery e apoiar decisões orientadas a dados. Busco aprofundar minha atuação em Product Management na área de tecnologia.",
    en: "Control and Automation Engineering student at UFU, with hands-on experience in process automation, API integration, and digital product development. I currently work as an Associate Product Manager at AgRisk, combining technical insight with a user-first mindset to prioritize roadmaps, run discovery, and support data-driven decisions. I'm looking to keep growing my career in Product Management within tech.",
  } as Localized,
};

export interface ExperienceEntry {
  role: Localized;
  org: string;
  orgType: string;
  date: Localized;
  note?: Localized;
  bullets: Localized<string[]>;
}

export const experience: ExperienceEntry[] = [
  {
    role: { pt: "Associate Product Manager", en: "Associate Product Manager" },
    org: "AgRisk",
    orgType: "Software",
    date: { pt: "02/2026 – Atual", en: "02/2026 – Present" },
    bullets: {
      pt: [
        "Colaboro na definição e priorização do roadmap de produto em Jira e Notion, traduzindo necessidades de negócio e feedback de usuários em requisitos funcionais.",
        "Conduzo discovery de produto — entrevistas com usuários, análise de dados e mapeamento de processos — para identificar oportunidades de melhoria.",
        "Escrevo user stories e critérios de aceite em Jira, junto às equipes de engenharia e design.",
        "Acompanho métricas de produto ao longo do roadmap para embasar priorizações e decisões orientadas a dados.",
        "Atuo como ponte entre as áreas de negócio, operações e tecnologia.",
      ],
      en: [
        "Collaborate on defining and prioritizing the product roadmap in Jira and Notion, translating business needs and user feedback into functional requirements.",
        "Run product discovery — user interviews, data analysis, and process mapping — to identify improvement opportunities.",
        "Write user stories and acceptance criteria in Jira, together with engineering and design teams.",
        "Track product metrics across the roadmap to inform prioritization and data-driven decisions.",
        "Act as a bridge between business, operations, and technology.",
      ],
    },
  },
  {
    role: {
      pt: "Estagiário de Processos e CRM",
      en: "Process & CRM Intern",
    },
    org: "AgRisk",
    orgType: "Software",
    date: { pt: "08/2025 – 02/2026", en: "08/2025 – 02/2026" },
    note: {
      pt: "Promovido internamente para Associate Product Manager",
      en: "Internally promoted to Associate Product Manager",
    },
    bullets: {
      pt: [
        "Implementei e automatizei esteiras de processos no HubSpot CRM, com foco no mapeamento de processos empresariais.",
        "Integrei APIs REST e testei endpoints com Insomnia e Postman, apoiando a confiabilidade das integrações do produto.",
      ],
      en: [
        "Implemented and automated process workflows in HubSpot CRM, focused on mapping business processes.",
        "Integrated REST APIs and tested endpoints with Insomnia and Postman, supporting integration reliability.",
      ],
    },
  },
  {
    role: { pt: "Estagiário de Desenvolvimento", en: "Development Intern" },
    org: "Nougenic",
    orgType: "Software",
    date: { pt: "09/2022 – 09/2023", en: "09/2022 – 09/2023" },
    bullets: {
      pt: [
        "Desenvolvi interfaces móveis centradas no usuário com Android Studio, Firebase e TensorFlow, com foco em automação de processos.",
        "Responsável pelos projetos Plantai e Avocai, atuando na manipulação de dados e na entrega de soluções de ponta a ponta.",
      ],
      en: [
        "Built user-centered mobile interfaces with Android Studio, Firebase, and TensorFlow, focused on process automation.",
        "Responsible for the Plantai and Avocai projects, handling data processing and end-to-end delivery.",
      ],
    },
  },
];

export const featuredProject = {
  tag: {
    pt: "TCC — Engenharia de Controle e Automação (UFU)",
    en: "Undergraduate Thesis — Control & Automation Engineering (UFU)",
  } as Localized,
  name: {
    pt: "Redes Bayesianas e Utilidade Esperada para Next Best Action",
    en: "Bayesian Networks and Expected Utility for Next Best Action",
  } as Localized,
  desc: {
    pt: "Trabalho de conclusão de curso que combina uma rede bayesiana para estimar risco com uma camada de utilidade esperada, para escolher a melhor ação em sistemas automatizados de decisão. Estudo de caso com o dataset público German Credit Data (UCI).",
    en: "Undergraduate thesis combining a Bayesian network for risk estimation with an expected-utility layer to choose the best action in automated decision systems. Case study using the public German Credit Data (UCI) dataset.",
  } as Localized,
  stack: ["Python", "pgmpy", "scikit-learn", "Streamlit"],
};

export interface OtherProject {
  name: string;
  desc: Localized;
  tags: string[];
  url: string;
}

export const otherProjects: OtherProject[] = [
  {
    name: "sealedenv",
    desc: {
      pt: "Segredos criptografados para processos Node — decripta valores enc:/enc-file: do process.env com uma linha, zero mudança de código. AES-256-GCM + OS Keychain.",
      en: "Encrypted secrets for Node processes — decrypts enc:/enc-file: values from process.env with one line, zero code changes. AES-256-GCM + OS keychain.",
    },
    tags: ["TypeScript", "Node.js", "Security"],
    url: "https://github.com/rodrigotriboni1/sealedenv",
  },
  {
    name: "agent-studio",
    desc: {
      pt: "Builder multi-tenant e MCP-native para agentes, RAG e workflows, com camada de governança sobre LangGraph, LlamaIndex e LiteLLM.",
      en: "Multi-tenant, MCP-native builder for agents, RAG, and workflows — governance layer on top of LangGraph, LlamaIndex, and LiteLLM.",
    },
    tags: ["Python", "TypeScript", "LangGraph", "MCP"],
    url: "https://github.com/rodrigotriboni1/agent-studio",
  },
  {
    name: "llm-bridge",
    desc: {
      pt: "Gateway multi-provedor de LLMs (GPT, Claude, Kimi, DeepSeek) com failover automático, construído sobre LiteLLM.",
      en: "Multi-provider LLM gateway (GPT, Claude, Kimi, DeepSeek) with automatic failover, built on LiteLLM.",
    },
    tags: ["Python", "LiteLLM"],
    url: "https://github.com/rodrigotriboni1/llm-bridge",
  },
  {
    name: "estufa_esp8266",
    desc: {
      pt: "Projeto pessoal de automação com ESP8266, aplicado ao monitoramento de uma estufa.",
      en: "Personal automation project using an ESP8266, applied to greenhouse monitoring.",
    },
    tags: ["C++"],
    url: "https://github.com/rodrigotriboni1/estufa_esp8266",
  },
  {
    name: "sistema_realimentado",
    desc: {
      pt: "Sistema de controle realimentado, com uma versão web complementar (sistema_realimentado_web).",
      en: "Feedback control system, with a companion web version (sistema_realimentado_web).",
    },
    tags: ["Python", "PHP"],
    url: "https://github.com/rodrigotriboni1/sistema_realimentado",
  },
  {
    name: "EININD10_filtro_digital_FIR",
    desc: {
      pt: "Implementação de um filtro digital FIR aplicado à instrumentação industrial.",
      en: "Implementation of a digital FIR filter applied to industrial instrumentation.",
    },
    tags: ["Python", "Jupyter"],
    url: "https://github.com/rodrigotriboni1/EININD10_filtro_digital_FIR",
  },
];

export interface SkillGroup {
  key: string;
  title: Localized;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    key: "product",
    title: { pt: "product", en: "product" },
    items: [
      "roadmap_&_priorização",
      "product_discovery",
      "user_stories_&_acceptance_criteria",
      "data_driven_decisions",
      "Jira",
      "Notion",
    ],
  },
  {
    key: "automation",
    title: { pt: "automação_&_integração", en: "automation_&_integration" },
    items: ["REST_APIs", "Insomnia", "Postman", "HubSpot_CRM", "process_automation"],
  },
  {
    key: "control",
    title: { pt: "controle_&_eletrônica", en: "control_&_electronics" },
    items: ["Codesys_V3", "control_systems", "PCB_design"],
  },
  {
    key: "dev",
    title: { pt: "dev_&_dados", en: "dev_&_data" },
    items: [
      "Python",
      "pgmpy",
      "scikit-learn",
      "Streamlit",
      "Android_Studio",
      "Firebase",
      "TensorFlow",
      "C / C++ / C# / Java",
    ],
  },
  {
    key: "cloud",
    title: { pt: "cloud_&_analytics", en: "cloud_&_analytics" },
    items: ["AWS_Academy_Cloud", "data_analytics"],
  },
  {
    key: "languages",
    title: { pt: "idiomas", en: "languages" },
    items: ["portuguese: native", "english: advanced"],
  },
];

export interface LeadershipEntry {
  role: Localized;
  org: string;
  date: Localized;
  desc?: Localized;
}

export const leadership: LeadershipEntry[] = [
  {
    role: { pt: "Gerente da Recuperação", en: "Recovery Manager" },
    org: "EPTA — Equipe de Propulsão e Tecnologia Aeroespacial",
    date: { pt: "01/2025 – 01/2026", en: "01/2025 – 01/2026" },
    desc: {
      pt: "Liderei a equipe de recuperação no desenvolvimento dos sistemas de descida segura e reutilização de foguetes experimentais, cuidando da gestão do projeto, testes e integração das soluções. Esse trabalho nos levou ao 1º lugar na categoria 500m (propelente sólido) na Latin America Space Challenge (LASC) 2025, entre 104 equipes de 10 países.",
      en: "Led the recovery team in developing safe-descent and reusability systems for experimental rockets, handling project management, testing, and solution integration. This work led to 1st place in the 500m solid-propellant category at the Latin America Space Challenge (LASC) 2025, competing against 104 teams from 10 countries.",
    },
  },
  {
    role: { pt: "Membro da Recuperação", en: "Recovery Team Member" },
    org: "EPTA — Equipe de Propulsão e Tecnologia Aeroespacial",
    date: { pt: "10/2023 – 01/2025", en: "10/2023 – 01/2025" },
    desc: {
      pt: "Colaborei no desenvolvimento e aprimoramento dos mecanismos de descida, participando de testes e otimizações para garantir segurança e eficiência nos lançamentos.",
      en: "Collaborated on developing and improving descent mechanisms, participating in tests and optimizations to ensure launch safety and efficiency.",
    },
  },
  {
    role: { pt: "Área de Controle e Automação", en: "Control & Automation Area" },
    org: "AIChE — American Institute of Chemical Engineers",
    date: { pt: "09/2023 – 06/2025", en: "09/2023 – 06/2025" },
    desc: {
      pt: "Responsável pela parte elétrica de um veículo movido por reação química (Chem-E-Car), incluindo controle e automação.",
      en: "Responsible for the electrical system of a chemically-powered vehicle (Chem-E-Car), including control and automation.",
    },
  },
  {
    role: { pt: "Diretor de Projetos", en: "Projects Director" },
    org: "Diretório Acadêmico da Fac. de Eng. Elétrica — UFU",
    date: { pt: "04/2024 – 05/2025", en: "04/2024 – 05/2025" },
    desc: {
      pt: "Coordenei os projetos do Diretório Acadêmico da Faculdade de Engenharia Elétrica da UFU.",
      en: "Coordinated projects for the Electrical Engineering Student Board at UFU.",
    },
  },
  {
    role: { pt: "Diretor de Marketing", en: "Marketing Director" },
    org: "Diretório Acadêmico da Fac. de Eng. Elétrica — UFU",
    date: { pt: "04/2023 – 04/2024", en: "04/2023 – 04/2024" },
    desc: {
      pt: "Responsável pela comunicação e divulgação das atividades do Diretório Acadêmico da Faculdade de Engenharia Elétrica da UFU.",
      en: "Responsible for communications and promotion of the Electrical Engineering Student Board's activities at UFU.",
    },
  },
  {
    role: {
      pt: "Ministrante — Manufatura e Design de PCIs",
      en: "Instructor — PCB Manufacturing & Design",
    },
    org: "UFU",
    date: { pt: "09/2024", en: "09/2024" },
    desc: {
      pt: "Ministrei workshop sobre manufatura e design de placas de circuito impresso (PCI) para estudantes de graduação da UFU.",
      en: "Taught a workshop on PCB (printed circuit board) manufacturing and design for undergraduate students at UFU.",
    },
  },
];

export const education = {
  degree: {
    pt: "Engenharia de Controle e Automação — Graduação em andamento, integral",
    en: "Control and Automation Engineering — In progress, full-time",
  } as Localized,
  school: "Universidade Federal de Uberlândia (MG)",
  date: {
    pt: "07/2021 – 12/2026 (previsto)",
    en: "07/2021 – 12/2026 (expected)",
  } as Localized,
  courses: [
    {
      pt: "Treinamento de Programação — Codesys V3",
      en: "Programming Training — Codesys V3",
    },
    {
      pt: "Curso Completo Android Material Design",
      en: "Complete Android Material Design Course",
    },
    { pt: "Inglês — Avançado", en: "English — Advanced" },
    {
      pt: "Data Analytics aplicado a negócios",
      en: "Data Analytics for Business",
    },
    {
      pt: "AWS Academy Graduate — AWS Academy Cloud",
      en: "AWS Academy Graduate — AWS Academy Cloud",
    },
  ] as Localized[],
};

export const contact = {
  title: { pt: "Contato", en: "Contact" } as Localized,
  sub: {
    pt: "Aberto a conversas sobre oportunidades em Product Management e tecnologia.",
    en: "Open to conversations about opportunities in Product Management and technology.",
  } as Localized,
};
