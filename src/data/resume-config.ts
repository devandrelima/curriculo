import type { ResumeConfig } from './types'

/**
 * Currículo de André de Lima Alves.
 * Conteúdo em PT-BR e EN, sem métricas inventadas.
 * Fonte principal de edição de dados do portfólio.
 */
export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'André de Lima Alves',
    photoBackEmoji: 'AA',
    title: {
      pt: 'AI Builder · Sistemas, Dados e Automações',
      en: 'AI Builder · Software, Data & Automation',
    },
    subtitle: {
      pt: 'Ciência da Computação na UFERSA · projetos open source com agentes de IA',
      en: 'Computer Science at UFERSA · open-source projects with AI agents',
    },
    location: 'Mossoró, RN · Brasil',
  },
  seo: {
    title: 'André de Lima Alves | AI Builder, Sistemas e Dados',
    description: 'Currículo interativo de André de Lima Alves. Ciência da Computação na UFERSA; experiência em Data & AI, sistemas, automações, Claude Code e Codex. Projetos CaixaFuturo e Planejamento de Sistemas 2.0.',
  },
  languages: {
    default: 'pt',
    available: ['pt', 'en'],
    labels: { pt: 'PT', en: 'EN' },
  },
  contact: [
    { type: 'email', label: 'andre.alves@alunos.ufersa.edu.br' },
    { type: 'phone', label: '(84) 99429-1682' },
    { type: 'github', label: 'github.com/devandrelima', href: 'https://github.com/devandrelima' },
    { type: 'linkedin', label: 'linkedin.com/in/andre-lima-developer', href: 'https://www.linkedin.com/in/andre-lima-developer/' },
    { type: 'location', label: 'Mossoró · Rio Grande do Norte' },
  ],
  skills: [
    {
      title: { pt: 'IA aplicada ao desenvolvimento', en: 'AI-assisted engineering' },
      type: 'badges',
      items: [
        { name: 'Claude Code', color: '#C1785B' },
        { name: 'Codex', color: '#0B6F66' },
        { name: 'ChatGPT', color: '#0D9276' },
        { name: 'Engenharia de prompts', color: '#59708E' },
      ],
    },
    {
      title: { pt: 'Desenvolvimento', en: 'Software engineering' },
      type: 'badges',
      items: [
        { name: 'Python' }, { name: 'TypeScript' }, { name: 'React' },
        { name: 'SQL' }, { name: 'Docker' }, { name: 'GitHub Actions' },
      ],
    },
    {
      title: { pt: 'Dados e cloud', en: 'Data & cloud' },
      type: 'badges',
      items: [
        { name: 'Pandas' }, { name: 'NumPy' }, { name: 'PostgreSQL' },
        { name: 'Apache Spark', color: '#E25A1C' }, { name: 'AWS' },
      ],
    },
    {
      title: { pt: 'Métodos de trabalho', en: 'Delivery methods' },
      type: 'text',
      items: [{
        name: {
          pt: 'Prompts-mapa e tasks, memória seletiva, integração por API, automações, testes unitários e E2E, CI/CD, revisão humana por sprint.',
          en: 'Prompt maps and tasks, selective context, API integrations, automation, unit/E2E tests, CI/CD and human review per sprint.',
        },
      }],
    },
  ],
  experiences: [
    {
      id: 'gimeer-conectar',
      company: { pt: 'Gimeer · Conectar+', en: 'Gimeer · Conectar+' },
      role: { pt: 'Desenvolvimento de sistemas e automações', en: 'Systems development and automation' },
      type: { pt: 'Freelancer', en: 'Freelancer' },
      period: { pt: 'Atual', en: 'Present' },
      description: {
        pt: 'Atuo como freelancer para Gimeer e Conectar+, desenvolvendo sistemas web/mobile, dashboards, integrações por API e fluxos de chatbots e WhatsApp.',
        en: 'I work as a freelancer for Gimeer and Conectar+, building web/mobile systems, dashboards, API integrations and chatbot/WhatsApp flows.',
      },
      techs: ['APIs REST', 'Git', 'Automação', 'Dashboards'],
      isHighlighted: true,
      details: {
        context: {
          pt: 'Prestação de serviços freelance para duas empresas, com organização de demandas, evolução de produtos digitais e validação de entregas.',
          en: 'Freelance services for two companies, covering requirements, digital product delivery and validation.',
        },
        tasks: {
          pt: [
            'Organização de requisitos, fluxos e documentação técnica para novas funcionalidades.',
            'Construção e ajuste de telas, dashboards e integrações entre serviços.',
            'Uso de Claude Code e Codex no desenvolvimento assistido por IA, com revisão de código e testes.',
          ],
          en: [
            'Organized requirements, workflows and technical documentation for new features.',
            'Built and improved interfaces, dashboards and service integrations.',
            'Used Claude Code and Codex for AI-assisted development, reviewing code and tests.',
          ],
        },
        env: {
          pt: 'Sistemas web/mobile · APIs · GitHub · agentes de IA · testes',
          en: 'Web/mobile systems · APIs · GitHub · AI coding agents · testing',
        },
      },
    },
    {
      id: 'compass',
      company: { pt: 'Compass UOL', en: 'Compass UOL' },
      role: { pt: 'Estagiário em Data & AI', en: 'Data & AI Intern' },
      type: { pt: 'Estágio', en: 'Internship' },
      period: { pt: 'Jul–dez/2025', en: 'Jul–Dec 2025' },
      description: {
        pt: 'Atuação em tratamento de dados, rotinas ETL e análises com Python e SQL, com atividades envolvendo Apache Spark e serviços AWS.',
        en: 'Worked on data processing, ETL and analytics with Python and SQL, including Apache Spark and AWS services.',
      },
      techs: ['Python', 'SQL', 'Pandas', 'NumPy', 'AWS', 'Apache Spark'],
      details: {
        context: {
          pt: 'Experiência prática de estágio na área de engenharia e análise de dados.',
          en: 'Hands-on internship experience in data engineering and analytics.',
        },
        tasks: {
          pt: [
            'Tratamento e transformação de dados com Python, Pandas e NumPy.',
            'Construção e manutenção de rotinas ETL, consultas SQL e atividades com Spark.',
            'Apoio a dashboards, modelagem de dados e uso de AWS Glue, Athena, Lambda e QuickSight.',
          ],
          en: [
            'Processed and transformed data with Python, Pandas and NumPy.',
            'Worked on ETL pipelines, SQL queries and Apache Spark tasks.',
            'Supported dashboards, data modeling and AWS Glue, Athena, Lambda and QuickSight usage.',
          ],
        },
        env: {
          pt: 'Python · SQL · Spark · AWS Glue / Athena / Lambda / QuickSight',
          en: 'Python · SQL · Spark · AWS Glue / Athena / Lambda / QuickSight',
        },
      },
    },
  ],
  projects: [
    {
      id: 'caixafuturo',
      title: { pt: 'CaixaFuturo', en: 'CaixaFuturo' },
      description: {
        pt: 'Aplicação financeira open source construída em seis sprints com agentes de IA: importação CSV, previsão e projeção de caixa, conciliação de recebíveis, backtesting e simulação de decisões. Motor sem API de IA no uso final; testes e CI documentados.',
        en: 'Open-source financial application delivered across six agent-assisted sprints: CSV imports, cash forecasting, receivables reconciliation, backtesting and decision simulations. No paid AI API required at runtime; tests and CI documented.',
      },
      techs: ['React', 'TypeScript', 'Docker', 'Vitest', 'Playwright'],
      github: 'https://github.com/devandrelima/caixafuturo',
    },
    {
      id: 'planejamento',
      title: { pt: 'Planejamento de Sistemas 2.0', en: 'System Planning 2.0' },
      description: {
        pt: 'Skill open source de planejamento para agentes: projeto → sprint → prompt-mapa → task. Inclui contexto seletivo, CLI Python, validação estrutural, dependências, paralelismo controlado e gates humanos. Utilizada para planejar o CaixaFuturo.',
        en: 'Open-source planning skill for coding agents: project → sprint → prompt map → task. Selective context, Python CLI, structural validation, dependencies, controlled parallelism and human approval gates. Applied to CaixaFuturo.',
      },
      techs: ['Python', 'GitHub Actions', 'Prompt Engineering'],
      github: 'https://github.com/devandrelima/planejamento-de-sistemas',
    },
    {
      id: 'petsus-etl',
      title: { pt: 'ETL & Dashboard PET-Saúde', en: 'PET-Saúde ETL & Dashboard' },
      description: {
        pt: 'Projeto acadêmico de organização e visualização de dados com fluxo ETL, banco PostgreSQL e dashboard Streamlit.',
        en: 'Academic data processing and visualization project using an ETL pipeline, PostgreSQL and a Streamlit dashboard.',
      },
      techs: ['Python', 'PostgreSQL', 'Streamlit'],
      github: 'https://github.com/devandrelima/etl_dashboard_petsus',
    },
    {
      id: 'api-determinantes',
      title: { pt: 'API de Determinantes Sociais', en: 'Social Determinants API' },
      description: {
        pt: 'API acadêmica para dados sobre determinantes sociais, desenvolvida com Java e Spring Boot.',
        en: 'Academic API for social determinants data, built with Java and Spring Boot.',
      },
      techs: ['Java', 'Spring Boot', 'REST'],
      github: 'https://github.com/devandrelima/api-determinantes-sociais',
    },
    {
      id: 'bem-aqui',
      title: { pt: 'Bem Aqui · em desenvolvimento', en: 'Bem Aqui · in progress' },
      description: {
        pt: 'Projeto privado de vitrines digitais para pequenos negócios e automação de divulgação de produtos. Código não público.',
        en: 'Private project for small-business storefronts and product promotion automation. Source code is not public.',
      },
      techs: ['APIs REST', 'Automação'],
    },
  ],
  education: [{
    school: {
      pt: 'Universidade Federal Rural do Semi-Árido (UFERSA)',
      en: 'Federal Rural University of the Semi-Arid (UFERSA)',
    },
    degree: {
      pt: 'Bacharelado em Ciência da Computação',
      en: 'B.Sc. in Computer Science',
    },
    specialty: {
      pt: 'Mossoró, RN · conclusão prevista: agosto de 2027',
      en: 'Mossoró, Brazil · expected graduation: August 2027',
    },
    period: '2023–2027 (previsão)',
  }],
  theme: {
    preset: 'ocean',
    defaultMode: 'light',
    colors: {
      primary: '#175F75',
      primaryLight: '#7CB5BE',
      primaryDark: '#8BC8D1',
      primaryLightDark: '#BAE1E8',
      sidebarLight: '#EDF4F5',
      sidebarLightEnd: '#E4EDEF',
      bg: '#F6F9F9',
      bgCard: '#FFFFFF',
      text: '#182832',
      textSecondary: '#546D78',
    },
  },
  labels: {
    sections: {
      contact: { pt: 'CONTATO', en: 'CONTACT' },
      skills: { pt: 'COMPETÊNCIAS', en: 'SKILLS' },
      experience: { pt: 'EXPERIÊNCIA PROFISSIONAL', en: 'PROFESSIONAL EXPERIENCE' },
      education: { pt: 'FORMAÇÃO', en: 'EDUCATION' },
      projects: { pt: 'PROJETOS E PORTFÓLIO', en: 'PROJECTS & PORTFOLIO' },
    },
    experience: {
      mainTasks: { pt: 'Atividades:', en: 'Responsibilities:' },
      moreTasks: { pt: 'ver detalhes', en: 'more details' },
      techEnv: { pt: 'Ferramentas e ambiente:', en: 'Tools & stack:' },
      technologies: { pt: 'Tecnologias', en: 'Technologies' },
    },
    actions: {
      clickHint: {
        pt: 'Clique em cada experiência para ver mais detalhes. Use “Salvar em PDF” para imprimir.',
        en: 'Select an experience to expand the details. Use “Save as PDF” to print.',
      },
      switchTheme: { pt: 'Alternar tema claro/escuro', en: 'Toggle light/dark mode' },
      downloadPdf: { pt: 'Salvar em PDF', en: 'Save as PDF' },
    },
  },
}
