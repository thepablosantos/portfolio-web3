import { Github, Linkedin, Mail, MapPin, Phone, Menu, X, Sun, Moon, MessageCircle, Send, User, Download, BookOpen, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { getBlogArticles } from './data/blogArticles';
import { getGalleryImages } from './data/galleryImages';

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
  const [blogFilter, setBlogFilter] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<{ id: number; title: string; content: string; images?: string[]; category?: string; date?: string; author?: string; excerpt?: string } | null>(null);
  const [articlesToShow, setArticlesToShow] = useState(6);
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string | string[]; title: string; description: string; tag: string } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [linkCopied, setLinkCopied] = useState(false);

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
        blog: 'Blog',
        gallery: 'Gallery',
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
        redes: 'Redes',
        web3: 'Web3',
        hacking: 'Hacking',
        code: 'Code',
        data: 'Data',
        viewOnGitHub: 'View on GitHub'
      },
      blog: {
        title: 'Blog',
        all: 'All',
        redes: 'Redes',
        web3: 'Web3',
        hacking: 'Hacking',
        code: 'Code',
        data: 'Data',
        readMore: 'Read More',
        showMore: 'Show More',
        close: 'Close',
        share: 'Share',
        copyLink: 'Copy link',
        linkCopied: 'Link copied!'
      },
      gallery: {
        title: 'Technology Gallery',
        description: 'A collection of technology-related photos and moments from my journey in development.'
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
        blog: 'Blog',
        gallery: 'Galeria',
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
        redes: 'Redes',
        web3: 'Web3',
        hacking: 'Hacking',
        code: 'Code',
        data: 'Data',
        viewOnGitHub: 'Ver no GitHub'
      },
      blog: {
        title: 'Blog',
        all: 'Todos',
        redes: 'Redes',
        web3: 'Web3',
        hacking: 'Hacking',
        code: 'Code',
        data: 'Data',
        readMore: 'Ler Mais',
        showMore: 'Ver Mais',
        close: 'Fechar',
        share: 'Compartilhar',
        copyLink: 'Copiar link',
        linkCopied: 'Link copiado!'
      },
      gallery: {
        title: 'Galeria de Tecnologia',
        description: 'Uma coleção de fotos e momentos relacionados à tecnologia da minha jornada em desenvolvimento.'
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
      description: language === 'pt' 
        ? 'Explorador de blockchain desenvolvido com React e TypeScript para a rede MultiversX, permitindo que usuários pesquisem e visualizem dados da blockchain.'
        : 'Blockchain explorer developed with React and TypeScript for the MultiversX network, enabling users to search and visualize blockchain data.',
      tech: ['TypeScript', 'React', 'Blockchain'],
      category: 'web3',
      subcategory: 'DApps',
      github: 'https://github.com/thepablosantos/multiversx-block-explorer'
    },
    {
      name: 'Ethereum Network Interactions (Web3.js)',
      description: language === 'pt'
        ? 'Kit de ferramentas abrangente para interagir com a blockchain Ethereum, incluindo gerenciamento de contas, tratamento de transações e interações com smart contracts.'
        : 'Comprehensive toolkit to interact with Ethereum blockchain, including account management, transaction handling, and smart contract interactions.',
      tech: ['JavaScript', 'Web3.js', 'Ethereum'],
      category: 'web3',
      subcategory: 'DApps',
      github: 'https://github.com/thepablosantos/eth-network-interactions'
    },
    {
      name: 'Ethereum Network Interactions (Ethers.js)',
      description: language === 'pt'
        ? 'Implementação alternativa usando a biblioteca Ethers.js para interações com blockchain Ethereum, demonstrando versatilidade com diferentes bibliotecas Web3.'
        : 'Alternative implementation using Ethers.js library for Ethereum blockchain interactions, showcasing versatility with different Web3 libraries.',
      tech: ['JavaScript', 'Ethers.js', 'Ethereum'],
      category: 'web3',
      subcategory: 'DApps',
      github: 'https://github.com/thepablosantos/ethers-network-interactions'
    },
    {
      name: 'Ethereum Wallet Manager',
      description: language === 'pt'
        ? 'Sistema seguro de gerenciamento de carteiras para gerar carteiras Ethereum, criptografar chaves privadas e lidar com descriptografia de keystore.'
        : 'Secure wallet management system for generating Ethereum wallets, encrypting private keys, and handling keystore decryption.',
      tech: ['JavaScript', 'Cryptography', 'Security'],
      category: 'web3',
      subcategory: 'DApps',
      github: 'https://github.com/thepablosantos/ethereum-wallet-manager'
    },
    {
      name: 'Simple Storage (Solidity)',
      description: language === 'pt'
        ? 'Projeto de smart contract Solidity fundamental construído com Hardhat, demonstrando práticas de desenvolvimento blockchain e testes.'
        : 'Foundational Solidity smart contract project built with Hardhat, demonstrating core blockchain development practices and testing.',
      tech: ['Solidity', 'Hardhat', 'Smart Contracts'],
      category: 'web3',
      subcategory: 'Smart Contracts',
      github: 'https://github.com/thepablosantos/simple-storage-solidity'
    },
    {
      name: 'Star Wars Characters Explorer',
      description: language === 'pt'
        ? 'Este projeto é uma aplicação web interativa desenvolvida para explorar e exibir informações sobre os personagens do universo Star Wars.'
        : 'This project is an interactive web application developed to explore and display information about Star Wars universe characters.',
      tech: ['React', 'TypeScript', 'API'],
      category: 'code',
      subcategory: 'Code',
      github: 'https://github.com/thepablosantos/Starwars'
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Count projects by category
  const projectCounts = {
    all: projects.length,
    'redes': projects.filter(p => p.category === 'redes').length,
    'web3': projects.filter(p => p.category === 'web3').length,
    'hacking': projects.filter(p => p.category === 'hacking').length,
    'code': projects.filter(p => p.category === 'code').length,
    'data': projects.filter(p => p.category === 'data').length
  };

  // Blog articles structure
  const blogArticles = getBlogArticles(language);

  // Gallery images structure
  const galleryImages = getGalleryImages(language);

  // Filter blog articles based on active filter
  const filteredBlogArticles = blogFilter === 'all' 
    ? [...blogArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : blogFilter === 'data'
    ? [...blogArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : blogArticles.filter(article => article.category === blogFilter).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Count blog articles by category
  const blogCounts = {
    all: blogArticles.length,
    'redes': blogArticles.filter(a => a.category === 'redes').length,
    'web3': blogArticles.filter(a => a.category === 'web3').length,
    'hacking': blogArticles.filter(a => a.category === 'hacking').length,
    'code': blogArticles.filter(a => a.category === 'code').length,
    'data': blogArticles.length
  };

  // Get articles to display (paginated)
  const displayedArticles = filteredBlogArticles.slice(0, articlesToShow);
  const hasMoreArticles = filteredBlogArticles.length > articlesToShow;

  // Reset articles to show when filter changes
  useEffect(() => {
    setArticlesToShow(6);
  }, [blogFilter]);

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

  // Handle ESC key to close modal and prevent body scroll when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedArticle) {
          setSelectedArticle(null);
        }
        if (selectedImage) {
          setSelectedImage(null);
        }
      }
      // Arrow key navigation for gallery images
      if (selectedImage && Array.isArray(selectedImage.src) && selectedImage.src.length > 1) {
        if (e.key === 'ArrowLeft') {
          setCurrentImageIndex((prev) => (prev === 0 ? selectedImage.src.length - 1 : prev - 1));
        } else if (e.key === 'ArrowRight') {
          setCurrentImageIndex((prev) => (prev === selectedImage.src.length - 1 ? 0 : prev + 1));
        }
      }
    };

    if (selectedArticle || selectedImage) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedArticle, selectedImage]);

  // Update selected article and image when language changes
  useEffect(() => {
    if (selectedArticle) {
      // Find the article with the same ID in the current language
      const articleId = selectedArticle.id;
      const updatedArticle = blogArticles.find(a => a.id === articleId);
      if (updatedArticle) {
        setSelectedArticle(updatedArticle);
      }
    }
    if (selectedImage) {
      // Find the image with the same ID in the current language
      const imageId = selectedImage.id;
      const updatedImage = galleryImages.find(img => img.id === imageId);
      if (updatedImage) {
        setSelectedImage(updatedImage);
        setCurrentImageIndex(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  // Reset image index when selecting a new image
  useEffect(() => {
    if (selectedImage) {
      setCurrentImageIndex(0);
    }
  }, [selectedImage]);

  // Handle URL hash to open article on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#blog-article-')) {
      const articleId = parseInt(hash.replace('#blog-article-', ''));
      const article = blogArticles.find(a => a.id === articleId);
      if (article) {
        setSelectedArticle(article);
        // Scroll to blog section
        setTimeout(() => {
          const blogSection = document.getElementById('blog');
          if (blogSection) {
            blogSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update URL hash and meta tags when article is selected
  useEffect(() => {
    if (selectedArticle) {
      window.history.pushState(null, '', `#blog-article-${selectedArticle.id}`);
      
      // Update meta tags for social sharing
      const url = `${window.location.origin}${window.location.pathname}#blog-article-${selectedArticle.id}`;
      const title = selectedArticle.title;
      const description = selectedArticle.excerpt || '';
      
      // Update or create meta tags
      const updateMetaTag = (property: string, content: string) => {
        let meta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      // Open Graph tags
      updateMetaTag('og:title', title);
      updateMetaTag('og:description', description);
      updateMetaTag('og:url', url);
      updateMetaTag('og:type', 'article');
      
      // Twitter Card tags
      updateMetaTag('twitter:card', 'summary_large_image');
      updateMetaTag('twitter:title', title);
      updateMetaTag('twitter:description', description);
      
      // Update page title
      document.title = `${title} | Pablo Sodré`;
    } else {
      // Remove hash when article is closed
      if (window.location.hash.startsWith('#blog-article-')) {
        window.history.pushState(null, '', window.location.pathname);
      }
      
      // Reset meta tags
      document.title = 'Pablo Sodré | Developer Portfolio';
      const defaultDescription = language === 'pt' 
        ? 'Desenvolvedor Web3 & Especialista em Blockchain'
        : 'Web3 Developer & Blockchain Specialist';
      
      const updateMetaTag = (property: string, content: string) => {
        const meta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
        if (meta) {
          meta.setAttribute('content', content);
        }
      };

      updateMetaTag('og:title', 'Pablo Sodré | Developer Portfolio');
      updateMetaTag('og:description', defaultDescription);
      updateMetaTag('og:url', window.location.origin + window.location.pathname);
      updateMetaTag('og:type', 'website');
    }
  }, [selectedArticle, language]);

  // Functions for sharing
  const copyArticleLink = async () => {
    if (!selectedArticle) return;
    const url = `${window.location.origin}${window.location.pathname}#blog-article-${selectedArticle.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
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
               href="https://drive.google.com/file/d/1yNYpUTe9n7rhhQ0HxXkU06P2F3T7mQUT/view?usp=sharing" // coloque o caminho real do seu PDF aqui
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
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                activeFilter === 'all' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.projects.all} ({projectCounts.all})
            </button>
            <button 
              onClick={() => setActiveFilter('redes')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                activeFilter === 'redes' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.projects.redes} ({projectCounts.redes})
            </button>
            <button 
              onClick={() => setActiveFilter('web3')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                activeFilter === 'web3' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.projects.web3} ({projectCounts.web3})
            </button>
            <button 
              onClick={() => setActiveFilter('hacking')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                activeFilter === 'hacking' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.projects.hacking} ({projectCounts.hacking})
            </button>
            <button 
              onClick={() => setActiveFilter('code')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                activeFilter === 'code' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.projects.code} ({projectCounts.code})
            </button>
            <button 
              onClick={() => setActiveFilter('data')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                activeFilter === 'data' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.projects.data}
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.name}
                className={`border rounded-lg p-6 transition-all group flex flex-col ${isDarkMode ? 'border-gray-800 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'}`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors mb-2">
                    {project.name}
                  </h3>
                  {project.subcategory && (
                    <span className={`inline-block px-3 py-1 rounded text-xs font-semibold mb-3 ${
                      project.subcategory === 'Smart Contracts' ? 'bg-purple-500/20 text-purple-400' :
                      project.subcategory === 'DeFi' ? 'bg-green-500/20 text-green-400' :
                      project.subcategory === 'Code' ? 'bg-cyan-500/20 text-cyan-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.subcategory}
                    </span>
                  )}
                </div>

                <p className={`mb-4 leading-relaxed flex-grow min-h-[60px] ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`px-3 py-1 ${getSkillColor(tech)} text-white rounded text-sm`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-semibold border mt-auto ${
                    isDarkMode 
                      ? 'bg-gray-800/20 border-gray-700 hover:bg-gray-800/40 text-white' 
                      : 'bg-gray-50/50 border-gray-300 hover:bg-gray-100 text-gray-900'
                  }`}
                >
                  <Github size={18} />
                  {t.projects.viewOnGitHub}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={`py-20 px-6 ${isDarkMode ? 'bg-[#0f0f12]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">{t.blog.title}</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setBlogFilter('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                blogFilter === 'all' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.blog.all} ({blogCounts.all})
            </button>
            <button 
              onClick={() => setBlogFilter('redes')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                blogFilter === 'redes' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.blog.redes} ({blogCounts.redes})
            </button>
            <button 
              onClick={() => setBlogFilter('web3')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                blogFilter === 'web3' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.blog.web3} ({blogCounts.web3})
            </button>
            <button 
              onClick={() => setBlogFilter('hacking')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                blogFilter === 'hacking' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.blog.hacking} ({blogCounts.hacking})
            </button>
            <button 
              onClick={() => setBlogFilter('code')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                blogFilter === 'code' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.blog.code} ({blogCounts.code})
            </button>
            <button 
              onClick={() => setBlogFilter('data')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                blogFilter === 'data' 
                  ? (isDarkMode ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-500 text-white border-blue-500')
                  : (isDarkMode ? 'bg-gray-800/20 border-gray-700 text-white hover:bg-gray-800/40' : 'bg-gray-50/50 border-gray-300 text-gray-900 hover:bg-gray-100')
              }`}
            >
              {t.blog.data}
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {displayedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className={`border rounded-lg p-6 transition-all group cursor-pointer ${isDarkMode ? 'border-gray-800 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen size={20} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>

                <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {new Date(article.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className={`px-3 py-1 rounded text-sm font-semibold ${
                    article.category === 'web3' ? 'bg-blue-500/20 text-blue-400' :
                    article.category === 'hacking' ? 'bg-red-500/20 text-red-400' :
                    article.category === 'redes' ? 'bg-green-500/20 text-green-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {article.category === 'web3' ? t.blog.web3 :
                     article.category === 'hacking' ? t.blog.hacking :
                     article.category === 'redes' ? t.blog.redes :
                     t.blog.code}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {hasMoreArticles && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setArticlesToShow(prev => prev + 6)}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  isDarkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {t.blog.showMore}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Blog Article Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          {/* Backdrop */}
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/80' : 'bg-black/50'} backdrop-blur-sm`}></div>
          
          {/* Modal Content */}
          <div 
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg ${isDarkMode ? 'bg-[#0f0f12]' : 'bg-white'} border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className="flex items-center gap-3">
                <BookOpen size={24} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>
              </div>
              <div className="flex items-center gap-2">
                {/* Copy Link Button */}
                <button
                  onClick={copyArticleLink}
                  className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
                  title={t.blog.copyLink}
                >
                  {linkCopied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6">
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedArticle.author}
                </span>
                <span className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedArticle.date ? new Date(selectedArticle.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                </span>
                <span className={`px-3 py-1 rounded text-xs font-semibold ${
                  selectedArticle.category === 'web3' ? 'bg-blue-500/20 text-blue-400' :
                  selectedArticle.category === 'hacking' ? 'bg-red-500/20 text-red-400' :
                  selectedArticle.category === 'redes' ? 'bg-green-500/20 text-green-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {selectedArticle.category === 'web3' ? t.blog.web3 :
                   selectedArticle.category === 'hacking' ? t.blog.hacking :
                   selectedArticle.category === 'redes' ? t.blog.redes :
                   t.blog.code}
                </span>
              </div>
              
              <div className={`max-w-none ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="leading-relaxed">
                  {(() => {
                    let imageIndex = 0;
                    return selectedArticle.content.split('\n').map((line: string, index: number) => {
                      // Images (markdown format)
                      const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
                      if (imageMatch) {
                        const imageUrl = selectedArticle.images && selectedArticle.images[imageIndex] 
                          ? selectedArticle.images[imageIndex++] 
                          : imageMatch[2];
                        return (
                          <div key={index} className="my-6">
                            <img 
                              src={imageUrl} 
                              alt={imageMatch[1] || 'Article image'} 
                              className="w-full rounded-lg border border-gray-700"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          </div>
                        );
                      }
                      // Headers
                      if (line.startsWith('# ')) {
                        return <h1 key={index} className={`text-3xl font-bold mb-4 mt-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{line.substring(2)}</h1>;
                      } else if (line.startsWith('## ')) {
                        return <h2 key={index} className={`text-2xl font-bold mb-3 mt-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{line.substring(3)}</h2>;
                      } else if (line.startsWith('### ')) {
                        return <h3 key={index} className={`text-xl font-bold mb-2 mt-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{line.substring(4)}</h3>;
                      } 
                      // Lists
                      else if (line.startsWith('- ')) {
                        return <div key={index} className={`mb-2 ml-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>• {line.substring(2)}</div>;
                      } else if (line.match(/^\d+\.\s/)) {
                        return <div key={index} className={`mb-2 ml-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{line}</div>;
                      } 
                      // Code blocks
                      else if (line.startsWith('```')) {
                        return null;
                      } 
                      // Bold text
                      else if (line.includes('**')) {
                        const parts = line.split('**');
                        return (
                          <p key={index} className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
                          </p>
                        );
                      }
                      // Horizontal rule
                      else if (line.trim() === '⸻' || line.trim() === '---') {
                        return <hr key={index} className={`my-6 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`} />;
                      }
                      // Empty lines
                      else if (line.trim() === '') {
                        return <br key={index} />;
                      } 
                      // Regular paragraphs
                      else {
                        return <p key={index} className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{line}</p>;
                      }
                    });
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Section */}
      <section id="gallery" className={`py-20 px-6 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.gallery.title}</h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.gallery.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`group cursor-pointer rounded-lg overflow-hidden border transition-all ${
                  isDarkMode 
                    ? 'border-gray-800 hover:border-gray-600' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={Array.isArray(image.src) ? image.src[0] : image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {Array.isArray(image.src) && image.src.length > 1 && (
                    <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${isDarkMode ? 'bg-black/60 text-white' : 'bg-white/80 text-gray-900'}`}>
                      {image.src.length} {language === 'pt' ? 'imagens' : 'images'}
                    </div>
                  )}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    image.tag === 'web3' ? 'bg-blue-500/80 text-white' :
                    image.tag === 'hacking' ? 'bg-red-500/80 text-white' :
                    image.tag === 'code' ? 'bg-purple-500/80 text-white' :
                    image.tag === 'redes' ? 'bg-green-500/80 text-white' :
                    'bg-gray-500/80 text-white'
                  }`}>
                    {image.tag === 'web3' ? t.blog.web3 :
                     image.tag === 'hacking' ? t.blog.hacking :
                     image.tag === 'code' ? t.blog.code :
                     image.tag === 'redes' ? t.blog.redes :
                     image.tag}
                  </div>
                </div>
                <div className={`p-4 ${isDarkMode ? 'bg-[#0f0f12]' : 'bg-white'}`}>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {image.title}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg ${isDarkMode ? 'bg-[#0f0f12]' : 'bg-white'} border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className={`absolute top-4 right-4 z-10 p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
            >
              <X size={24} />
            </button>
            
            <div className="relative">
              {Array.isArray(selectedImage.src) && selectedImage.src.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === 0 ? selectedImage.src.length - 1 : prev - 1));
                    }}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-colors ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700 text-white' : 'bg-white/80 hover:bg-gray-100 text-gray-900'}`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === selectedImage.src.length - 1 ? 0 : prev + 1));
                    }}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-colors ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700 text-white' : 'bg-white/80 hover:bg-gray-100 text-gray-900'}`}
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} px-4 py-2 rounded-full`}>
                    {selectedImage.src.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? (isDarkMode ? 'bg-white' : 'bg-gray-900')
                            : (isDarkMode ? 'bg-gray-600' : 'bg-gray-400')
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
              <img 
                src={Array.isArray(selectedImage.src) ? selectedImage.src[currentImageIndex] : selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            
            <div className={`p-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded text-xs font-semibold ${
                  selectedImage.tag === 'web3' ? 'bg-blue-500/20 text-blue-400' :
                  selectedImage.tag === 'hacking' ? 'bg-red-500/20 text-red-400' :
                  selectedImage.tag === 'code' ? 'bg-purple-500/20 text-purple-400' :
                  selectedImage.tag === 'redes' ? 'bg-green-500/20 text-green-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {selectedImage.tag === 'web3' ? t.blog.web3 :
                   selectedImage.tag === 'hacking' ? t.blog.hacking :
                   selectedImage.tag === 'code' ? t.blog.code :
                   selectedImage.tag === 'redes' ? t.blog.redes :
                   selectedImage.tag}
                </span>
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {selectedImage.title}
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

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
