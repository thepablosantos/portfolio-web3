import { Github, Linkedin, Mail, MapPin, Phone, Menu, X, Sun, Moon, MessageCircle, Send, User, Download } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// 🔹 Inicializa o EmailJS
emailjs.init('Jx9YsR5Yg9_7kHKhO');

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const translations = {
    en: {
      hero: {
        title: 'Web3 Developer & Blockchain Specialist',
        description: 'Specialized in blockchain technologies with solid experience in smart contract development and security. Building secure, efficient, and scalable decentralized applications.',
        contact: 'Download CV'
      },
      menu: {
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
      },
      about: {
        title: 'About Me',
        description: 'I am a Web3 developer specialized in blockchain technologies, with practical experience in smart contract development, decentralized applications (DApps), and secure and scalable solutions. My focus is on uniting innovation and technical excellence, creating applications that connect the decentralized world to intuitive and high-performance user experiences.'
      },
      skills: {
        title: 'Technical Skills',
        smartContracts: 'Smart Contracts',
        smartContractsDesc: 'Smart contract development with Solidity and Foundry, ensuring security and efficiency.',
        defiSolutions: 'DeFi Solutions',
        defiSolutionsDesc: 'Creation of decentralized applications focused on finance, exploring tokens, staking and yield automation.',
        professionalExperience: 'Professional Experience',
        professionalExperienceDesc: 'Practical work in technology and blockchain startups, combining development, analysis and innovation.',
        web3Development: 'Web3 Development',
        web3DevelopmentDesc: 'DApp development with Next.js, Viem, Wagmi and complete blockchain integration.'
      },
      experience: {
        title: 'My Journey',
        description: 'My journey in the blockchain universe began in 2021, when I worked at a Web3 startup, participating in ERC-721 (NFT) projects and improving my skills in Solidity and the Hardhat framework.',
        description2: 'During this period, I also earned the Ancord certification, which allowed me to better understand the traditional financial market and explore ways to integrate its principles into the decentralized environment.',
        description3: 'In 2022, I joined a technology startup, where I worked as a Full Stack Developer and Data Analyst, collaborating on smart contract development and data analysis applied to Web3 solutions.',
        description4: 'In 2024, I moved to Europe to improve my English and expand my international reach. I continued studying blockchain technologies, participating in Web3 communities like NearX and hackathons, consolidating my practical experience in the sector.'
      },
      projects: {
        title: 'Featured Projects',
        all: 'All',
        smartContracts: 'Smart Contracts',
        defi: 'DeFi',
        dapps: 'DApps'
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
        native: 'Native',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
      },
      contact: {
        title: 'Get In Touch',
        description: 'I\'m always open to discuss new projects, creative opportunities or simply exchange ideas about blockchain and development.',
        letsTalk: 'Let\'s Talk',
        letsTalkDesc: 'Whether for a blockchain project, DApp development or smart contract consulting, I\'m here to help turn your ideas into reality.',
        sendMessage: 'Send a Message',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        sendButton: 'Send Message',
        socialNetworks: 'Social Networks'
      },
      footer: {
        name: 'Pablo Sodré',
        description: 'Blockchain Developer focused on Solidity, DApps and innovative Web3 solutions.',
        quickLinks: 'Quick Links',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
        technologies: 'Technologies',
        copyright: '© 2025 Pablo Sodré. All rights reserved.',
        madeWith: 'Made with ❤️ using Next.js'
      }
    },
    pt: {
      hero: {
        title: 'Desenvolvedor Web3 & Especialista em Blockchain',
        description: 'Especializado em tecnologias blockchain com experiência sólida em desenvolvimento e segurança de smart contracts. Construindo aplicações descentralizadas seguras, eficientes e escaláveis.',
        contact: 'Baixar CV'
      },
      menu: {
        about: 'Sobre',
        projects: 'Projetos',
        contact: 'Contato'
      },
      about: {
        title: 'Sobre Mim',
        description: 'Sou um desenvolvedor Web3 especializado em tecnologias blockchain, com experiência prática no desenvolvimento de contratos inteligentes, aplicações descentralizadas (DApps) e soluções seguras e escaláveis. Tenho como foco unir inovação e excelência técnica, criando aplicações que conectam o mundo descentralizado a experiências de usuário intuitivas e de alto desempenho.'
      },
      skills: {
        title: 'Habilidades Técnicas',
        smartContracts: 'Smart Contracts',
        smartContractsDesc: 'Desenvolvimento de contratos inteligentes com Solidity e Foundry, garantindo segurança e eficiência.',
        defiSolutions: 'Soluções DeFi',
        defiSolutionsDesc: 'Criação de aplicações descentralizadas voltadas para finanças, explorando tokens, staking e automação de yield.',
        professionalExperience: 'Experiência Profissional',
        professionalExperienceDesc: 'Atuação prática em startups de tecnologia e blockchain, unindo desenvolvimento, análise e inovação.',
        web3Development: 'Desenvolvimento Web3',
        web3DevelopmentDesc: 'Desenvolvimento de DApps com Next.js, Viem, Wagmi e integração completa com blockchain.'
      },
      experience: {
        title: 'Minha Jornada',
        description: 'Minha trajetória no universo blockchain começou em 2021, quando atuei em uma startup de Web3, participando de projetos ERC-721 (NFTs) e aprimorando minhas habilidades em Solidity e no framework Hardhat.',
        description2: 'Nesse período, conquistei também a certificação Ancord, que me permitiu compreender melhor o mercado financeiro tradicional e explorar formas de integrar seus princípios ao ambiente descentralizado.',
        description3: 'Em 2022, ingressei em uma startup de tecnologia, onde atuei como Full Stack Developer e Analista de Dados, colaborando no desenvolvimento de contratos inteligentes e na análise de dados aplicados a soluções Web3.',
        description4: 'Já em 2024, me mudei para a Europa para aperfeiçoar meu inglês e expandir minha atuação internacional. Continuei estudando tecnologias blockchain, participando de comunidades Web3 como a NearX e de hackathons, consolidando minha experiência prática no setor.'
      },
      projects: {
        title: 'Meus Projetos',
        all: 'Todos',
        smartContracts: 'Smart Contracts',
        defi: 'DeFi',
        dapps: 'DApps'
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
        native: 'Nativo',
        advanced: 'Avançado',
        intermediate: 'Intermediário',
      },
      contact: {
        title: 'Entre em Contato',
        description: 'Estou sempre aberto para discutir novos projetos, oportunidades criativas ou simplesmente trocar ideias sobre blockchain e desenvolvimento.',
        letsTalk: 'Vamos Conversar',
        letsTalkDesc: 'Seja para um projeto blockchain, desenvolvimento de DApp ou consultoria em smart contracts, estou aqui para ajudar a transformar suas ideias em realidade.',
        sendMessage: 'Enviar Mensagem',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        sendButton: 'Enviar Mensagem',
        socialNetworks: 'Redes Sociais'
      },
      footer: {
        name: 'Pablo Sodré',
        description: 'Desenvolvedor Blockchain focado em Solidity, DApps e soluções Web3 inovadoras.',
        quickLinks: 'Quick Links',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        contact: 'Contato',
        technologies: 'Tecnologias',
        copyright: '© 2025 Pablo Sodré. Todos os direitos reservados.',
        madeWith: 'Feito com ❤️ usando Next.js'
      }
    }
  };

  const t = translations[language];

  const projects = [
    {
      name: 'MultiversX Block Explorer',
      description: 'Blockchain explorer developed with React and TypeScript for the MultiversX network, enabling users to search and visualize blockchain data.',
      tech: ['TypeScript', 'React', 'Blockchain'],
      category: 'dapps',
      github: 'https://github.com/thepablosantos/multiversx-block-explorer'
    },
    {
      name: 'Ethereum Network Interactions (Web3.js)',
      description: 'Comprehensive toolkit to interact with Ethereum blockchain, including account management, transaction handling, and smart contract interactions.',
      tech: ['JavaScript', 'Web3.js', 'Ethereum'],
      category: 'dapps',
      github: 'https://github.com/thepablosantos/eth-network-interactions'
    },
    {
      name: 'Ethereum Network Interactions (Ethers.js)',
      description: 'Alternative implementation using Ethers.js library for Ethereum blockchain interactions, showcasing versatility with different Web3 libraries.',
      tech: ['JavaScript', 'Ethers.js', 'Ethereum'],
      category: 'dapps',
      github: 'https://github.com/thepablosantos/ethers-network-interactions'
    },
    {
      name: 'Ethereum Wallet Manager',
      description: 'Secure wallet management system for generating Ethereum wallets, encrypting private keys, and handling keystore decryption.',
      tech: ['JavaScript', 'Cryptography', 'Security'],
      category: 'dapps',
      github: 'https://github.com/thepablosantos/ethereum-wallet-manager'
    },
    {
      name: 'Simple Storage (Solidity)',
      description: 'Foundational Solidity smart contract project built with Hardhat, demonstrating core blockchain development practices and testing.',
      tech: ['Solidity', 'Hardhat', 'Smart Contracts'],
      category: 'smart-contracts',
      github: 'https://github.com/thepablosantos/simple-storage-solidity'
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Count projects by category
  const projectCounts = {
    all: projects.length,
    'smart-contracts': projects.filter(p => p.category === 'smart-contracts').length,
    'defi': projects.filter(p => p.category === 'defi').length,
    'dapps': projects.filter(p => p.category === 'dapps').length
  };

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configurações do EmailJS
      const serviceId = 'portfolio_service';
      const templateId = 'template_btjhlaa';
      const publicKey = 'Jx9YsR5Yg9_7kHKhO';

      // Parâmetros do template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'contactmepablosantos@gmail.com'
      };

      // Enviar email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Mostrar mensagem de sucesso
      alert(language === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!');
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert(language === 'pt' ? 'Erro ao enviar mensagem. Tente novamente.' : 'Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
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
      <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQGrqYLJh2hAwQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678591067293?e=1762992000&v=beta&t=HcPwk1b3FCOGa0nzQOpGcUdGOFK8f-eg7UwKndwRF5o" 
          alt="Pablo Sodré" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
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
            {/* 🔹 Download CV */}
            <a
               href="/PabloSodre_CV.pdf" // coloque o caminho real do seu PDF aqui
              download
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2"
              >
              <Download size={18} />
              Download CV
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

      {/* About & Skills Section */}
      <section id="about" className={`py-20 px-6 ${isDarkMode ? 'bg-[#0f0f12]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          {/* About Me - Centralized */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">{t.about.title}</h2>
            <p className={`text-lg leading-relaxed max-w-4xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.about.description}
          </p>
        </div>

          {/* Two Column Layout: My Journey + Skills Cards */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - My Journey */}
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.experience.title}</h3>
              <div className="space-y-5">
                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.experience.description}
                </p>
                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.experience.description2}
                </p>
                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.experience.description3}
                </p>
                <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.experience.description4}
                </p>
              </div>
            </div>

            {/* Right Column - Skills Cards */}
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className={`border rounded-lg p-5 transition-colors ${isDarkMode ? 'border-gray-800 hover:border-blue-500' : 'border-gray-300 hover:border-blue-400'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-7 h-7 bg-blue-500 rounded flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">SC</span>
                    </div>
                    <h4 className="text-lg font-bold text-blue-400">{t.skills.smartContracts}</h4>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.skills.smartContractsDesc}
                  </p>
                </div>

                <div className={`border rounded-lg p-5 transition-colors ${isDarkMode ? 'border-gray-800 hover:border-green-500' : 'border-gray-300 hover:border-green-400'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-7 h-7 bg-green-500 rounded flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">DF</span>
                    </div>
                    <h4 className="text-lg font-bold text-green-400">{t.skills.defiSolutions}</h4>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.skills.defiSolutionsDesc}
                  </p>
                </div>

                <div className={`border rounded-lg p-5 transition-colors ${isDarkMode ? 'border-gray-800 hover:border-purple-500' : 'border-gray-300 hover:border-purple-400'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-7 h-7 bg-purple-500 rounded flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">PE</span>
                    </div>
                    <h4 className="text-lg font-bold text-purple-400">{t.skills.professionalExperience}</h4>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.skills.professionalExperienceDesc}
                  </p>
                </div>

                <div className={`border rounded-lg p-5 transition-colors ${isDarkMode ? 'border-gray-800 hover:border-cyan-500' : 'border-gray-300 hover:border-cyan-400'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-7 h-7 bg-cyan-500 rounded flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">W3</span>
                    </div>
                    <h4 className="text-lg font-bold text-cyan-400">{t.skills.web3Development}</h4>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.skills.web3DevelopmentDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.projects.title}</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === 'all' 
                  ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
                  : (isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300')
              }`}
            >
              {t.projects.all} {projectCounts.all}
            </button>
            <button 
              onClick={() => setActiveFilter('smart-contracts')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === 'smart-contracts' 
                  ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
                  : (isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300')
              }`}
            >
              {t.projects.smartContracts} {projectCounts['smart-contracts']}
            </button>
            <button 
              onClick={() => setActiveFilter('defi')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === 'defi' 
                  ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
                  : (isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300')
              }`}
            >
              {t.projects.defi} {projectCounts.defi}
            </button>
            <button 
              onClick={() => setActiveFilter('dapps')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === 'dapps' 
                  ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
                  : (isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300')
              }`}
            >
              {t.projects.dapps} {projectCounts.dapps}
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
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


      {/* Education & Languages Section */}
      <section id="education" className={`py-20 px-6 ${isDarkMode ? 'bg-[#0f0f12]' : 'bg-white'}`}>
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
                {/* Italian language was removed because it's not in the type */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.contact.description}
          </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Let's Talk */}
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.letsTalk}</h3>
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.contact.letsTalkDesc}
              </p>

              {/* Contact Information */}
              <div className={`rounded-lg p-6 mb-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                      <Mail size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a 
                        href="mailto:contactmepablosantos@gmail.com"
                        className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                      >
                        contactmepablosantos@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-green-500/20' : 'bg-green-100'}`}>
                      <MessageCircle size={20} className="text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a 
                        href="https://wa.me/353857655940"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'} transition-colors`}
                      >
                        +353 (85) 765-5940
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Networks */}
              <div>
                <h4 className="text-xl font-bold mb-4">{t.contact.socialNetworks}</h4>
                <div className="flex gap-4">
            <a
              href="http://github.com/thepablosantos"
              target="_blank"
              rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'}`}
            >
                    <Github size={24} />
            </a>
            <a
              href="http://linkedin.com/in/pablo-sodre"
              target="_blank"
              rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'}`}
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Send Message */}
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.sendMessage}</h3>
              
              <form onSubmit={handleSubmit} className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {t.contact.name} *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <User size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder={language === 'pt' ? 'Seu nome completo' : 'Your full name'}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                            : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {t.contact.email} *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <Mail size={18} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                            : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      {t.contact.message} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder={language === 'pt' ? 'Descreva seu projeto ou pergunta...' : 'Describe your project or question...'}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                          : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    />
                    
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      isSubmitting
                        ? 'bg-gray-500 cursor-not-allowed text-white'
                        : isDarkMode 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        {language === 'pt' ? 'Enviando...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {t.contact.sendButton}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 ${isDarkMode ? 'bg-[#0f0f12]' : 'bg-white border-t border-gray-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Developer Info */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-white mr-2">&lt;/&gt;</span>
                <h3 className="text-xl font-bold text-white">{t.footer.name}</h3>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/thepablosantos" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/pablosodre" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">{t.footer.quickLinks}</h4>
              <div className="space-y-2">
                <a href="#about" className={`block ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  {t.footer.about}
                </a>
                <a href="#skills" className={`block ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  {t.footer.skills}
                </a>
                <a href="#projects" className={`block ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  {t.footer.projects}
                </a>
                <a href="#contact" className={`block ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  {t.footer.contact}
                </a>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">{t.footer.technologies}</h4>
              <div className="flex flex-wrap gap-2">
                {['Solidity', 'Foundry', 'Next.js', 'React', 'Flutter', 'Wagmi', 'Viem', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className={`px-3 py-1 rounded-full text-xs ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} mb-6`}></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.footer.copyright}
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.footer.madeWith}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
