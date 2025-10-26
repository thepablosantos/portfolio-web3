import { Github, Linkedin, Mail, MapPin, Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  const skills = {
    languages: ['Solidity', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'NoSQL'],
    frameworks: ['Hardhat', 'Foundry', 'ethers.js', 'web3.js', 'React', 'Docker'],
    blockchain: ['Smart Contracts', 'DApp Development', 'Smart Contract Security', 'DeFi', 'Layer 2 Solutions']
  };

  const translations = {
    en: {
      hero: {
        title: 'Web3 Developer & Blockchain Specialist',
        description: 'Specialized in blockchain technologies with solid experience in smart contract development and security. Building secure, efficient, and scalable decentralized applications.',
        contact: 'Contact Me'
      },
      menu: {
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
      },
      about: {
        title: 'About Me',
        description: 'Web3 Developer specialized in blockchain technologies, with proven hands-on experience in the decentralized finance (DeFi) market. Skilled in designing and implementing decentralized solutions using Solidity, JavaScript, and the Ethereum ecosystem. Always seeking new challenges with a strong interest in building secure, efficient, and scalable DApps. Additional experience in data analysis and database management, highly focused on continuous learning and creative problem-solving.'
      },
      skills: {
        title: 'Technical Skills',
        languages: 'Languages',
        frameworks: 'Frameworks & Tools',
        blockchain: 'Blockchain'
      },
      experience: {
        title: 'Work Experience',
        role: 'Full Stack Developer',
        company: 'SMART TOKEN - Florianópolis, Brazil',
        items: [
          'Contributed to strategic insights through detailed analysis of complex datasets',
          'Prepared comprehensive reports on key metrics, trends, and actionable recommendations',
          'Managed data analysis projects, ensuring deadlines and alignment with organizational objectives',
          'Designed dashboards and visualizations using Power BI and Metabase to improve data comprehension',
          'Utilized SQL and Python for data manipulation and analysis',
          'Smart contract creation and Solidity development applied to DeFi solutions'
        ]
      },
      projects: {
        title: 'Featured Projects'
      },
      certifications: {
        title: 'Certifications'
      },
      education: {
        title: 'Education & Languages',
        educationTitle: 'Education',
        university: 'Estacio University',
        degree: 'Bachelor\'s Degree in Systems Analysis and Development',
        location: 'Brazil',
        languagesTitle: 'Languages',
        portuguese: 'Portuguese',
        english: 'English',
        spanish: 'Spanish',
        italian: 'Italian',
        native: 'Native',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        basic: 'Basic'
      },
      contact: {
        title: 'Get In Touch',
        description: 'I\'m currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!'
      },
      footer: {
        built: 'Built with React & Tailwind CSS'
      }
    },
    pt: {
      hero: {
        title: 'Desenvolvedor Web3 & Especialista em Blockchain',
        description: 'Especializado em tecnologias blockchain com experiência sólida em desenvolvimento e segurança de smart contracts. Construindo aplicações descentralizadas seguras, eficientes e escaláveis.',
        contact: 'Entre em Contato'
      },
      menu: {
        about: 'Sobre',
        projects: 'Projetos',
        contact: 'Contato'
      },
      about: {
        title: 'Sobre Mim',
        description: 'Desenvolvedor Web3 especializado em tecnologias blockchain, com experiência prática comprovada no mercado de finanças descentralizadas (DeFi). Habilidoso em projetar e implementar soluções descentralizadas usando Solidity, JavaScript e o ecossistema Ethereum. Sempre buscando novos desafios com forte interesse em construir DApps seguras, eficientes e escaláveis. Experiência adicional em análise de dados e gerenciamento de banco de dados, altamente focado em aprendizado contínuo e resolução criativa de problemas.'
      },
      skills: {
        title: 'Habilidades Técnicas',
        languages: 'Linguagens',
        frameworks: 'Frameworks & Ferramentas',
        blockchain: 'Blockchain'
      },
      experience: {
        title: 'Experiência Profissional',
        role: 'Desenvolvedor Full Stack',
        company: 'SMART TOKEN - Florianópolis, Brasil',
        items: [
          'Contribuí com insights estratégicos através de análise detalhada de conjuntos de dados complexos',
          'Preparei relatórios abrangentes sobre métricas-chave, tendências e recomendações acionáveis',
          'Gerenciei projetos de análise de dados, garantindo prazos e alinhamento com objetivos organizacionais',
          'Projetei dashboards e visualizações usando Power BI e Metabase para melhorar a compreensão de dados',
          'Utilizei SQL e Python para manipulação e análise de dados',
          'Criação de smart contracts e desenvolvimento em Solidity aplicado a soluções DeFi'
        ]
      },
      projects: {
        title: 'Projetos em Destaque'
      },
      certifications: {
        title: 'Certificações'
      },
      education: {
        title: 'Educação & Idiomas',
        educationTitle: 'Educação',
        university: 'Universidade Estácio',
        degree: 'Bacharelado em Análise e Desenvolvimento de Sistemas',
        location: 'Brasil',
        languagesTitle: 'Idiomas',
        portuguese: 'Português',
        english: 'Inglês',
        spanish: 'Espanhol',
        italian: 'Italiano',
        native: 'Nativo',
        advanced: 'Avançado',
        intermediate: 'Intermediário',
        basic: 'Básico'
      },
      contact: {
        title: 'Entre em Contato',
        description: 'Estou aberto a novas oportunidades. Se você tem uma pergunta ou só quer dizer oi, sinta-se à vontade para entrar em contato!'
      },
      footer: {
        built: 'Construído com React & Tailwind CSS'
      }
    }
  };

  const t = translations[language];

  const projects = [
    {
      name: 'MultiversX Block Explorer',
      description: 'Blockchain explorer developed with React and TypeScript for the MultiversX network, enabling users to search and visualize blockchain data.',
      tech: ['TypeScript', 'React', 'Blockchain'],
      github: 'https://github.com/thepablosantos/multiversx-block-explorer'
    },
    {
      name: 'Ethereum Network Interactions (Web3.js)',
      description: 'Comprehensive toolkit to interact with Ethereum blockchain, including account management, transaction handling, and smart contract interactions.',
      tech: ['JavaScript', 'Web3.js', 'Ethereum'],
      github: 'https://github.com/thepablosantos/eth-network-interactions'
    },
    {
      name: 'Ethereum Network Interactions (Ethers.js)',
      description: 'Alternative implementation using Ethers.js library for Ethereum blockchain interactions, showcasing versatility with different Web3 libraries.',
      tech: ['JavaScript', 'Ethers.js', 'Ethereum'],
      github: 'https://github.com/thepablosantos/ethers-network-interactions'
    },
    {
      name: 'Ethereum Wallet Manager',
      description: 'Secure wallet management system for generating Ethereum wallets, encrypting private keys, and handling keystore decryption.',
      tech: ['JavaScript', 'Cryptography', 'Security'],
      github: 'https://github.com/thepablosantos/ethereum-wallet-manager'
    },
    {
      name: 'Simple Storage (Solidity)',
      description: 'Foundational Solidity smart contract project built with Hardhat, demonstrating core blockchain development practices and testing.',
      tech: ['Solidity', 'Hardhat', 'Smart Contracts'],
      github: 'https://github.com/thepablosantos/simple-storage-solidity'
    }
  ];

  const certifications = [
    { name: 'Fundamentos da Web3', org: 'NearX', date: 'set de 2024' },
    { name: 'HTML - CSS - JavaScript 101', org: 'NearX', date: 'set de 2024' },
    { name: 'Vulnerabilidade em Smart Contracts', org: 'NearX', date: 'fev de 2024' },
    { name: 'Blockchain Advanced', org: 'FIAP', date: 'jul de 2023' },
    { name: 'APACHE KAFKA e Databricks: Streaming e Processamento', org: 'Udemy', date: 'mai de 2023' },
    { name: 'Big Data Fundamentos 3.0', org: 'Data Science Academy', date: 'mai de 2023' },
    { name: 'METABASE: Vá do ZERO ao Avançado!', org: 'Udemy', date: 'mai de 2023' },
    { name: 'Microsoft Power BI Para Business Intelligence e Data Science', org: 'Data Science Academy', date: 'mai de 2023' },
    { name: 'Desenvolvimento de Aplicações Descentralizadas', org: 'Data Science Academy', date: 'abr de 2023' },
    { name: 'Engenheiro Blockchain', org: 'Data Science Academy', date: 'abr de 2023' },
    { name: 'Inteligência Artificial Aplicada a Finanças', org: 'Data Science Academy', date: 'abr de 2023' },
    { name: 'Notion 2023 - Do Básico à Produtividade', org: 'Udemy', date: 'abr de 2023' },
    { name: 'Fundamentos de Inteligência Artificial', org: 'Data Science Academy', date: 'mar de 2023' },
    { name: 'Programação para Blockchain', org: 'Data Science Academy', date: 'mar de 2023' },
    { name: 'Soft Skills - Desenvolvendo Suas Habilidades Comportamentais', org: 'Data Science Academy', date: 'mar de 2023' },
    { name: 'Blockchain Fundamentos', org: 'Data Science Academy', date: 'jan de 2023' },
    { name: 'Exame de Qualificação Técnica para Agente Autônomo de Investimento', org: 'ANCORD', date: 'nov de 2022' },
    { name: 'Introdução à Ciência de Dados 3.0', org: 'Data Science Academy', date: '2022' },
  ];

  const skillColors: { [key: string]: string } = {
    'Solidity': 'bg-purple-500',
    'JavaScript': 'bg-yellow-500',
    'TypeScript': 'bg-blue-500',
    'Python': 'bg-green-500',
    'SQL': 'bg-orange-500',
    'NoSQL': 'bg-red-500',
    'Hardhat': 'bg-yellow-600',
    'Foundry': 'bg-gray-400',
    'ethers.js': 'bg-blue-400',
    'web3.js': 'bg-orange-400',
    'React': 'bg-cyan-500',
    'Docker': 'bg-blue-600',
    'Smart Contracts': 'bg-purple-600',
    'DApp Development': 'bg-indigo-500',
    'Smart Contract Security': 'bg-red-600',
    'DeFi': 'bg-green-600',
    'Layer 2 Solutions': 'bg-teal-500',
    'Blockchain': 'bg-indigo-600',
    'Ethereum': 'bg-indigo-400',
    'Cryptography': 'bg-purple-400',
    'Security': 'bg-red-500'
  };

  const getSkillColor = (skill: string): string => {
    return skillColors[skill] || 'bg-gray-500';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <a href="#hero" className="text-xl font-bold">Pablo Sodré</a>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-6 justify-center flex-1">
      {Object.entries(t.menu).map(([key, label]) => (
        <button
          key={key}
          onClick={() => scrollToSection(key)}
          className={`hover:${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}
        >
          {label}
        </button>
      ))}
    </div>

    {/* Right Controls (Language + Theme + Mobile Menu) */}
    <div className="flex items-center gap-2">
      <button onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')} className={`px-3 py-1 rounded border ${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} transition-colors`}>
        {language === 'en' ? 'PT' : 'EN'}
      </button>
      <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded border ${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} transition-colors`}>
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden mt-2 pb-4 space-y-2 px-6">
        {Object.entries(t.menu).map(([key, label]) => (
          <button key={key} onClick={() => scrollToSection(key)} className="block w-full text-left py-2">
            {label}
          </button>
        ))}
      </div>
    )}
  </div>
</nav>
      
{/* Hero Section */}
<section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
  <div className="max-w-4xl mx-auto text-center">
    <div className="mb-8">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQGrqYLJh2hAwQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678591067293?e=1762992000&v=beta&t=HcPwk1b3FCOGa0nzQOpGcUdGOFK8f-eg7UwKndwRF5o" 
          alt="Pablo Sodré" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Pablo Sodré
          </h1>

          <p className={`text-xl md:text-2xl mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.hero.title}
          </p>

          <p className={`text-lg mb-8 max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.hero.description}
          </p>

          <div className={`flex flex-wrap items-center justify-center gap-4 text-sm mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Brazil | Based in Italy</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+353 0857655940</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:pablosantos.dev@proton.me"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              {t.hero.contact}
            </a>
            <a
              href="http://github.com/thepablosantos"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 border rounded-lg transition-colors flex items-center gap-2 ${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'}`}
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="http://linkedin.com/in/pablo-sodre"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 border rounded-lg transition-colors flex items-center gap-2 ${isDarkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'}`}
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-6 ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.about.title}</h2>
          <p className={`text-lg leading-relaxed text-center max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.about.description}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.skills.title}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`border rounded-lg p-6 transition-colors ${isDarkMode ? 'border-gray-800 hover:border-blue-500' : 'border-gray-300 hover:border-blue-400'}`}>
              <h3 className="text-xl font-bold mb-4 text-blue-400">{t.skills.languages}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className={`px-3 py-1 ${getSkillColor(skill)} text-white rounded text-sm`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`border rounded-lg p-6 transition-colors ${isDarkMode ? 'border-gray-800 hover:border-cyan-500' : 'border-gray-300 hover:border-cyan-400'}`}>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{t.skills.frameworks}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className={`px-3 py-1 ${getSkillColor(skill)} text-white rounded text-sm`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`border rounded-lg p-6 transition-colors ${isDarkMode ? 'border-gray-800 hover:border-green-500' : 'border-gray-300 hover:border-green-400'}`}>
              <h3 className="text-xl font-bold mb-4 text-green-400">{t.skills.blockchain}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.blockchain.map((skill) => (
                  <span key={skill} className={`px-3 py-1 ${getSkillColor(skill)} text-white rounded text-sm`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className={`py-20 px-6 ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.experience.title}</h2>

          <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
            <div className="mb-12 relative">
              <div className="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="flex flex-wrap items-start justify-between mb-2">
                <h3 className="text-2xl font-bold">{t.experience.role}</h3>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Jun 2023 - Aug 2024</span>
              </div>
              <p className="text-blue-400 mb-4">{t.experience.company}</p>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.experience.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.projects.title}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className={`border rounded-lg p-6 transition-all group ${isDarkMode ? 'border-gray-800 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    <Github size={20} />
                  </a>
                </div>

                <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`px-3 py-1 ${getSkillColor(tech)} text-white rounded text-sm`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 px-6 ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.certifications.title}</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 transition-colors ${isDarkMode ? 'border-gray-800 hover:border-blue-500' : 'border-gray-300 hover:border-blue-400'}`}
              >
                <p className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{cert.name}</p>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{cert.org} • {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Languages Section */}
      <section id="education" className={`py-20 px-6 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.education.title}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`border rounded-lg p-6 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'}`}>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{t.education.educationTitle}</h3>
              <div>
                <p className="font-semibold text-lg">{t.education.university}</p>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{t.education.degree}</p>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{t.education.location}</p>
              </div>
            </div>

            <div className={`border rounded-lg p-6 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'}`}>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">{t.education.languagesTitle}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{t.education.portuguese}</span>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{t.education.native}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.education.english}</span>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{t.education.advanced}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.education.spanish}</span>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{t.education.intermediate}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.education.italian}</span>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{t.education.basic}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t.contact.title}</h2>
          <p className={`text-lg mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.contact.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a
              href="mailto:pablosantos.dev@proton.me"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              <Mail size={20} />
              <span>pablosantos.dev@proton.me</span>
            </a>
            <a
              href="http://github.com/thepablosantos"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              <Github size={20} />
              <span>thepablosantos</span>
            </a>
            <a
              href="http://linkedin.com/in/pablo-sodre"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              <Linkedin size={20} />
              <span>pablo-sodre</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 text-center ${isDarkMode ? 'bg-black border-t border-gray-800 text-gray-400' : 'bg-white border-t border-gray-200 text-gray-600'}`}>
        <p>{t.footer.built}</p>
        <p className="mt-2">Pablo Sodré - 2024</p>
      </footer>
    </div>
  );
}

export default App;
