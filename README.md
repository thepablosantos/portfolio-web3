# 🚀 Pablo Sodré - Portfolio Web3

Um portfólio moderno e responsivo desenvolvido para mostrar projetos e habilidades em desenvolvimento Web3 e blockchain.

## ✨ Características

- **🎨 Design Moderno**: Interface limpa e minimalista com tema escuro/claro
- **🌍 Multilíngue**: Suporte completo para Português e Inglês
- **📱 Responsivo**: Otimizado para todos os dispositivos
- **⚡ Performance**: Desenvolvido com Vite e React para máxima velocidade
- **🎯 Foco Web3**: Especializado em tecnologias blockchain e DeFi

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca principal para interface
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool moderno e rápido
- **Lucide React** - Ícones modernos e consistentes

### Funcionalidades
- **EmailJS** - Envio de emails sem backend
- **React Hooks** - Gerenciamento de estado
- **Responsive Design** - Mobile-first approach

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/thepablosantos/portfolio-web3.git
cd portfolio-web3
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Build para Produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
portfolio-web3/
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── .bolt/
│   └── config.js        # Configuração do Bolt
├── package.json         # Dependências e scripts
├── tailwind.config.cjs  # Configuração do Tailwind
├── postcss.config.cjs   # Configuração do PostCSS
├── tsconfig.json        # Configuração do TypeScript
└── vite.config.ts       # Configuração do Vite
```

## 🎯 Seções do Portfólio

### 1. **Hero Section**
- Apresentação pessoal
- Título e descrição profissional
- Botão "Download CV"
- Avatar com borda destacada

### 2. **Sobre Mim**
- Descrição profissional focada em Web3
- Texto personalizado e envolvente

### 3. **Minha Jornada**
- Trajetória profissional detalhada
- Marcos importantes na carreira
- Experiências em startups Web3

### 4. **Habilidades Técnicas**
- **Smart Contracts**: Desenvolvimento com Solidity e Foundry
- **Soluções DeFi**: Aplicações descentralizadas financeiras
- **Experiência Profissional**: Atuação em startups
- **Desenvolvimento Web3**: DApps com Next.js, Viem, Wagmi

### 5. **Projetos em Destaque**
- Filtros por categoria (Todos, Smart Contracts, DeFi, DApps)
- Cards de projetos com descrições
- Links para repositórios GitHub

### 6. **Entre em Contato**
- Formulário funcional com EmailJS
- Informações de contato
- Links para redes sociais
- Validação e feedback de envio

### 7. **Footer**
- Informações do desenvolvedor
- Links de navegação rápida
- Tags de tecnologias
- Copyright e atribuições

## 🌐 Configuração de Email

O portfólio utiliza EmailJS para envio de emails. Para configurar:

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta e configure um serviço de email
3. Crie um template de email
4. Atualize as credenciais no arquivo `App.tsx`:
   - `serviceId`
   - `templateId`
   - `publicKey`

## 🎨 Personalização

### Cores e Tema
- Tema escuro como padrão
- Toggle para alternar entre claro/escuro
- Cores personalizadas para cada seção

### Conteúdo
- Textos facilmente editáveis nas traduções
- Projetos adicionáveis no array `projects`
- Links de redes sociais configuráveis

### Estilos
- Tailwind CSS para estilização
- Classes utilitárias para responsividade
- Animações e transições suaves

## 📱 Responsividade

- **Mobile**: Layout otimizado para telas pequenas
- **Tablet**: Grid adaptativo para telas médias
- **Desktop**: Layout completo com múltiplas colunas

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature
3. Fazer commit das mudanças
4. Fazer push para a branch
5. Abrir um Pull Request

## 📞 Contato

- **Email**: contactmepablosantos@gmail.com
- **LinkedIn**: [linkedin.com/in/pablosodre](https://linkedin.com/in/pablosodre)
- **GitHub**: [github.com/thepablosantos](https://github.com/thepablosantos)

## 🙏 Agradecimentos

- [Vite](https://vitejs.dev/) - Build tool incrível
- [React](https://reactjs.org/) - Biblioteca de interface
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Lucide](https://lucide.dev/) - Ícones modernos
- [EmailJS](https://www.emailjs.com/) - Serviço de email

---

*Desenvolvedor Web3 focado em Solidity, DApps e soluções Web3 inovadoras.*
