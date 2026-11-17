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
      pt: 'AI Builder · Automações e Produtos com IA',
      en: 'AI Builder · Automation & AI Products',
    },
    subtitle: {
      pt: 'Transformo problemas em ferramentas com agentes de IA, automações e dados.',
      en: 'I turn problems into tools using AI agents, automation and data.',
    },
    location: 'Mossoró, RN · Brasil',
  },
  seo: {
    title: 'André de Lima Alves | AI Builder · Automação e Dados',
    description: 'Currículo para o estágio GenAI do iFood: projetos com agentes de IA, automações, dashboards, dados e desenvolvimento colaborativo.',
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
      title: { pt: 'IA aplicada', en: 'Applied AI' },
      type: 'badges',
      items: [
        { name: 'Claude Code' }, { name: 'Codex' },
        { name: 'ChatGPT' }, { name: 'Prompt engineering' },
      ],
    },
    {
      title: { pt: 'Desenvolvimento', en: 'Development' },
      type: 'badges',
      items: [
        { name: 'Python' }, { name: 'TypeScript' }, { name: 'React' },
        { name: 'Java' }, { name: 'SQL' }, { name: 'APIs REST' },
      ],
    },
    {
      title: { pt: 'Dados e cloud', en: 'Data & cloud' },
      type: 'badges',
      items: [
        { name: 'AWS' }, { name: 'PostgreSQL' }, { name: 'Docker' },
        { name: 'Apache Spark' }, { name: 'Hostinger' }, { name: 'Contabo' },
      ],
    },
    {
      title: { pt: 'Entrega de soluções', en: 'Solution delivery' },
      type: 'text',
      items: [{
        name: {
          pt: 'Agentes de IA, automação de fluxos, dashboards, testes e CI/CD.',
          en: 'AI agents, workflow automation, dashboards, testing and CI/CD.',
        },
      }],
    },
  ],
  experiences: [
    {
      id: 'gimeer-conectar',
      company: { pt: 'Gimeer · Conectar+', en: 'Gimeer · Conectar+' },
      role: { pt: 'Sistemas e automações', en: 'Systems & automation' },
      type: { pt: 'Freelancer', en: 'Freelancer' },
      period: { pt: 'Atual', en: 'Present' },
      description: {
        pt: 'Desenvolvo sistemas, dashboards e integrações por API, com apoio de agentes de IA.',
        en: 'I build systems, dashboards and API integrations with AI coding agents.',
      },
      techs: ['APIs REST', 'Automação', 'Claude Code'],
      isHighlighted: true,
      details: {
        context: {
          pt: 'Prestação de serviços para duas empresas, com entregas práticas.',
          en: 'Independent services for two companies, focused on practical deliveries.',
        },
        tasks: {
          pt: [
            'Desenvolvimento de interfaces e integração de fluxos digitais.',
            'Uso de IA para acelerar implementação, revisão e testes.',
          ],
          en: [
            'Development of interfaces and digital workflow integrations.',
            'Use of AI to accelerate implementation, review and testing.',
          ],
        },
        env: { pt: 'Web · APIs · automação', en: 'Web · APIs · automation' },
      },
    },
    {
      id: 'pet-sus-digital',
      company: { pt: 'PET-Saúde SUS Digital', en: 'PET-Saúde SUS Digital' },
      role: { pt: 'Bolsista acadêmico', en: 'Academic scholarship recipient' },
      type: { pt: 'Bolsa acadêmica', en: 'Academic scholarship' },
      period: { pt: 'Atual', en: 'Present' },
      description: {
        pt: 'Atuo com organização e visualização de dados aplicados à saúde pública.',
        en: 'I work with organization and visualization of public health data.',
      },
      techs: ['Dados', 'Dashboards'],
      details: {
        context: {
          pt: 'Atividades acadêmicas na interseção entre tecnologia, dados e SUS.',
          en: 'Academic activities connecting technology, data and public healthcare.',
        },
        tasks: {
          pt: ['Organização de informações e apoio à visualização de indicadores de saúde.'],
          en: ['Organizing information and supporting the visualization of health indicators.'],
        },
        env: { pt: 'Dados de saúde · análise', en: 'Health data · analytics' },
      },
    },
    {
      id: 'compass',
      company: { pt: 'Compass UOL', en: 'Compass UOL' },
      role: { pt: 'Estagiário em Data & AI', en: 'Data & AI Intern' },
      type: { pt: 'Estágio', en: 'Internship' },
      period: { pt: 'Jul–dez/2025', en: 'Jul–Dec 2025' },
      description: {
        pt: 'Trabalhei com ETL, SQL, PySpark e análise de dados na AWS.',
        en: 'Worked on ETL, SQL, PySpark and data analytics on AWS.',
      },
      techs: ['Python', 'SQL', 'AWS'],
      details: {
        context: {
          pt: 'Trilha prática com oito sprints e entregas registradas no GitHub.',
          en: 'Hands-on eight-sprint program with deliverables documented on GitHub.',
        },
        tasks: {
          pt: ['Modelagem de dados, processamento com Spark e dashboards no QuickSight.'],
          en: ['Data modeling, Spark processing and QuickSight dashboards.'],
        },
        env: { pt: 'AWS · Athena · QuickSight', en: 'AWS · Athena · QuickSight' },
      },
    },
  ],
  projects: [
    {
      id: 'caixafuturo',
      title: { pt: 'CaixaFuturo', en: 'CaixaFuturo' },
      description: {
        pt: 'App de previsão de caixa criado com agentes de IA: importação CSV, simulações, testes e deploy.',
        en: 'Cash forecasting app built with AI agents: CSV import, simulations, testing and deployment.',
      },
      techs: ['React', 'TypeScript', 'Playwright'],
      github: 'https://github.com/devandrelima/caixafuturo',
    },
    {
      id: 'planejamento',
      title: { pt: 'Planejamento de Sistemas 2.0', en: 'System Planning 2.0' },
      description: {
        pt: 'Skill que transforma requisitos em tarefas para agentes de IA, com contexto seletivo, validação e CI.',
        en: 'Skill that turns requirements into AI-agent tasks, with selective context, validation and CI.',
      },
      techs: ['Agentes de IA', 'Python', 'GitHub Actions'],
      github: 'https://github.com/devandrelima/planejamento-de-sistemas',
    },
    {
      id: 'arboviroses-front',
      title: { pt: 'Arboviroses — projeto em equipe', en: 'Arboviruses — team project' },
      description: {
        pt: 'Dashboards de saúde desenvolvidos em equipe. Contribuí com integrações e exportação de dados por pull requests.',
        en: 'Public-health dashboards built collaboratively. Contributed integrations and data export through pull requests.',
      },
      techs: ['React', 'TypeScript', 'Git'],
      github: 'https://github.com/devandrelima/ArbovirosesFront',
    },
    {
      id: 'compass-uol-sprints',
      title: { pt: 'Compass UOL — portfólio Data & AI', en: 'Compass UOL — Data & AI portfolio' },
      description: {
        pt: 'Oito sprints documentadas com SQL, ETL, Spark, AWS e dashboards.',
        en: 'Eight documented sprints covering SQL, ETL, Spark, AWS and dashboards.',
      },
      techs: ['Python', 'SQL', 'AWS'],
      github: 'https://github.com/devandrelima/repositorio-compass-uol',
    },
  ],
  education: [{
    school: {
      pt: 'Universidade Federal Rural do Semi-Árido (UFERSA)',
      en: 'Federal Rural University of the Semi-Arid (UFERSA)',
    },
    degree: {
      pt: 'Ciência da Computação · Bacharelado',
      en: 'Computer Science · B.Sc.',
    },
    specialty: {
      pt: 'Conclusão prevista: ago/2027',
      en: 'Expected graduation: Aug 2027',
    },
    period: '2023–2027',
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
        pt: 'Experiências e projetos com links para as entregas. Baixe em PDF.',
        en: 'Explore experience and project links. Download as PDF.',
      },
      switchTheme: { pt: 'Alternar tema claro/escuro', en: 'Toggle light/dark mode' },
      downloadPdf: { pt: 'Salvar em PDF', en: 'Save as PDF' },
    },
  },
}
