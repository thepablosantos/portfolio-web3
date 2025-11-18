export type GalleryImage = {
  id: number;
  src: string | string[];
  title: string;
  description: string;
  tag: string;
};

export const getGalleryImages = (lang: 'pt' | 'en'): GalleryImage[] => {
  return [
    {
      id: 1,
      src: '/gallery/ledger-flex-purchase.jpg',
      title: lang === 'pt' ? 'Ledger Flex: Nova Aquisição' : 'Ledger Flex: New Purchase',
      description: lang === 'pt'
        ? 'Momento da compra da minha Ledger Flex, uma hardware wallet para armazenar minhas criptomoedas com segurança máxima.'
        : 'The moment I purchased my Ledger Flex, a hardware wallet to store my cryptocurrencies with maximum security.',
      tag: 'web3'
    },
    {
      id: 2,
      src: '/gallery/ledger-daily.jpg',
      title: lang === 'pt' ? 'Crypto no Dia a Dia' : 'Crypto in Daily Life',
      description: lang === 'pt'
        ? 'Um momento do dia a dia usando minha Ledger para transações de criptomoedas, trocando USDT por SOL.'
        : 'A moment from daily life using my Ledger for cryptocurrency transactions, swapping USDT to SOL.',
      tag: 'web3'
    },
    {
      id: 3,
      src: '/gallery/proxmark3.jpeg',
      title: lang === 'pt' ? 'Proxmark 3: RFID Testing' : 'Proxmark 3: RFID Testing',
      description: lang === 'pt'
        ? 'Ferramenta poderosa para testes de segurança RFID, análise de frequências e pesquisa em sistemas de acesso.'
        : 'Powerful tool for RFID security testing, frequency analysis, and access system research.',
      tag: 'hacking'
    },
    {
      id: 4,
      src: '/gallery/flipper-zero.jpeg',
      title: lang === 'pt' ? 'Flipper Zero: Multi-tool' : 'Flipper Zero: Multi-tool',
      description: lang === 'pt'
        ? 'Flipper Zero, uma ferramenta versátil para testes de segurança, análise de protocolos e pesquisa em hardware.'
        : 'Flipper Zero, a versatile tool for security testing, protocol analysis, and hardware research.',
      tag: 'hacking'
    },
    {
      id: 5,
      src: '/gallery/ledger-recovery-key.jpg',
      title: lang === 'pt' ? 'Ledger Recovery Key' : 'Ledger Recovery Key',
      description: lang === 'pt'
        ? 'A chave de recuperação da minha Ledger, essencial para garantir acesso seguro às minhas criptomoedas em caso de perda do dispositivo.'
        : 'My Ledger recovery key, essential to ensure secure access to my cryptocurrencies in case of device loss.',
      tag: 'web3'
    },
    {
      id: 6,
      src: '/gallery/ireland-trip.jpg',
      title: lang === 'pt' ? 'Viagem ao Interior da Irlanda' : 'Trip to the Irish Countryside',
      description: lang === 'pt'
        ? 'Uma viagem para o interior da Irlanda com minha Ledger Flex, conectando tecnologia e natureza.'
        : 'A trip to the Irish countryside with my Ledger Flex, connecting technology and nature.',
      tag: 'web3'
    },
    {
      id: 7,
      src: ['/gallery/Solana-seeker.jpeg', '/gallery/Solana-seeker2.jpeg', '/gallery/Solana-seeker3.jpeg'],
      title: lang === 'pt' ? 'Solana Seeker' : 'Solana Seeker',
      description: lang === 'pt'
        ? 'Projeto Solana Seeker - uma aplicação para explorar e buscar informações sobre o ecossistema Solana.'
        : 'Solana Seeker project - an application to explore and search for information about the Solana ecosystem.',
      tag: 'web3'
    },
    {
      id: 8,
      src: '/gallery/defi.jpeg',
      title: lang === 'pt' ? 'DeFi' : 'DeFi',
      description: lang === 'pt'
        ? 'Explorando o mundo das finanças descentralizadas (DeFi) e suas possibilidades.'
        : 'Exploring the world of decentralized finance (DeFi) and its possibilities.',
      tag: 'web3'
    },
    {
      id: 9,
      src: '/gallery/trezor-keep-metal.jpeg',
      title: lang === 'pt' ? 'Trezor e KeepKey: Hardware Wallets' : 'Trezor and KeepKey: Hardware Wallets',
      description: lang === 'pt'
        ? 'Hardware wallets para armazenamento seguro de criptomoedas, garantindo máxima proteção dos ativos digitais.'
        : 'Hardware wallets for secure cryptocurrency storage, ensuring maximum protection of digital assets.',
      tag: 'web3'
    }
  ];
};
