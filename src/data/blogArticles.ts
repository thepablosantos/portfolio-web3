export type BlogArticle = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  images?: string[];
};

export const getBlogArticles = (lang: 'pt' | 'en'): BlogArticle[] => {
  return [
    {
      id: 1,
      title: lang === 'pt' ? 'TypeScript: Interfaces, Types e Operador ?' : 'TypeScript: Interfaces, Types and the ? Operator',
      excerpt: lang === 'pt' 
        ? 'Explore conceitos fundamentais do TypeScript: interfaces, types e o operador ? para tornar atributos opcionais.' 
        : 'Explore fundamental TypeScript concepts: interfaces, types and the ? operator to make attributes optional.',
      content: lang === 'pt' 
        ? `# TypeScript: Interfaces, Types e Operador ?

Olá, rede! 🫡

Hoje vim compartilhar um pouco sobre TypeScript, fugindo um pouco dos posts sobre web3 que costumo trazer. 😄

No código abaixo, podemos ver o uso de interfaces, types e do operador **?**, que torna um atributo opcional — ele não precisa obrigatoriamente estar presente no código.

![Exemplo de código TypeScript com interfaces e types](../assets/typescript-example.png)

## Interfaces em TypeScript

Em TypeScript, usamos **interfaces** para definir a estrutura que um objeto deve seguir. Isso ajuda a garantir que os dados tenham sempre o formato esperado.

No exemplo acima, temos duas interfaces:

### interface ocupacao
- **trabalho**: string (obrigatório)
- **local?**: string (opcional - graças ao operador **?**)

### interface pessoa
- **nome**: string (obrigatório)
- **idade**: number (obrigatório)
- **cidade**: string (obrigatório)

## Types e Intersection Types

O **type** permite combinar tipos, unir interfaces e deixar o código mais organizado e reutilizável.

No exemplo, usamos o operador **&** (intersection) para criar um novo tipo \`dados\` que combina as propriedades de \`ocupacao\` e \`pessoa\`:

\`\`\`typescript
type dados = ocupacao & pessoa;
\`\`\`

Isso significa que um objeto do tipo \`dados\` deve conter todas as propriedades de ambas as interfaces.

## O Operador ?

O operador **?** serve justamente para deixar campos opcionais. No exemplo, o campo \`local\` na interface \`ocupacao\` é opcional:

\`\`\`typescript
local?: string;
\`\`\`

Isso significa que você pode criar um objeto sem essa propriedade, e o TypeScript não vai reclamar.

## Benefícios

- **Type Safety**: Erros são detectados em tempo de compilação
- **Melhor Autocomplete**: IDEs fornecem sugestões inteligentes
- **Documentação**: Código auto-documentado através dos tipos
- **Refatoração Segura**: Mudanças são mais seguras com tipos explícitos

## Conclusão

TypeScript é uma ferramenta poderosa que torna o desenvolvimento JavaScript mais robusto e produtivo. Interfaces, types e o operador **?** são conceitos fundamentais que todo desenvolvedor deve dominar.`
        : `# TypeScript: Interfaces, Types and the ? Operator

Hello, network! 🫡

Today I'm sharing a bit about TypeScript, stepping away from the usual web3 posts. 😄

In the code below, we can see the use of interfaces, types, and the **?** operator, which makes an attribute optional — it doesn't need to be present in the code.

![TypeScript code example with interfaces and types](../assets/typescript-example.png)

## Interfaces in TypeScript

In TypeScript, we use **interfaces** to define the structure that an object must follow. This helps ensure data always has the expected format.

In the example above, we have two interfaces:

### interface ocupacao
- **trabalho**: string (required)
- **local?**: string (optional - thanks to the **?** operator)

### interface pessoa
- **nome**: string (required)
- **idade**: number (required)
- **cidade**: string (required)

## Types and Intersection Types

**Type** allows combining types, merging interfaces and making code more organized and reusable.

In the example, we use the **&** (intersection) operator to create a new type \`dados\` that combines properties from \`ocupacao\` and \`pessoa\`:

\`\`\`typescript
type dados = ocupacao & pessoa;
\`\`\`

This means an object of type \`dados\` must contain all properties from both interfaces.

## The ? Operator

The **?** operator is used to make fields optional. In the example, the \`local\` field in the \`ocupacao\` interface is optional:

\`\`\`typescript
local?: string;
\`\`\`

This means you can create an object without this property, and TypeScript won't complain.

## Benefits

- **Type Safety**: Errors are detected at compile time
- **Better Autocomplete**: IDEs provide intelligent suggestions
- **Documentation**: Self-documenting code through types
- **Safe Refactoring**: Changes are safer with explicit types

## Conclusion

TypeScript is a powerful tool that makes JavaScript development more robust and productive. Interfaces, types, and the **?** operator are fundamental concepts every developer should master.`,
      category: 'code',
      date: '2025-11-04',
      author: 'Pablo Sodré',
      images: ['https://via.placeholder.com/800x400?text=TypeScript+Code+Example']
    },
    {
      id: 2,
      title: lang === 'pt' ? 'Modifiers em Solidity: Segurança e Reutilização de Código' : 'Modifiers in Solidity: Security and Code Reusability',
      excerpt: lang === 'pt' 
        ? 'Entenda como usar modifiers em Solidity para criar verificações reutilizáveis e proteger seus smart contracts.' 
        : 'Learn how to use modifiers in Solidity to create reusable checks and protect your smart contracts.',
      content: lang === 'pt' 
        ? `# Modifiers em Solidity: Segurança e Reutilização de Código

Olá, rede! 🫡

Em continuação das aulas da NearX sobre Solidity, hoje quero compartilhar com vocês o uso dos **modifiers**, ajudando a entender melhor o uso em Solidity.

## O que é um Modifier?

Um **modifier** é um recurso do Solidity que permite reutilizar verificações ou pré-condições em diferentes funções, para não precisar repetir o mesmo **require** toda hora. São bons para aplicar:

- Regras de acesso
- Validações de valor
- Proteções de segurança
- Outras funções

![Exemplo de modifiers em Solidity](../assets/modifiers-example-1.png)

No primeiro exemplo, temos três exemplos simples:

### 1. ownerOnly

Garante que apenas o dono (owner) pode executar certas funções do contrato.

\`\`\`solidity
modifier ownerOnly() {
    require(msg.sender == owner, "Apenas o dono do contrato pode executar");
    _;
}
\`\`\`

### 2. minValue

Verifica se o valor enviado (msg.value) é maior ou igual ao mínimo exigido.

![Exemplo de minValue e noReentrancy](../assets/modifiers-example-2.png)

\`\`\`solidity
modifier minValue(uint256 _valor) {
    require(msg.value >= _valor, "Valor enviado e insuficiente");
    _;
}
\`\`\`

### 3. noReentrancy

Para implementar um reentrancy guard, uma forma simples e eficiente de proteger contra ataques de reentrância, travando a execução até que a função termine.

\`\`\`solidity
modifier noReentrancy() {
    require(!locked, "Sem reentrancia.");
    locked = true;
    _;
    locked = false;
}
\`\`\`

## O Símbolo _;

O símbolo **_;** indica onde o corpo da função será executado. Por exemplo:

- Tudo **antes** do símbolo é executado **antes** da função
- Tudo **depois** do símbolo é executado **depois** da função

Essa é a lógica básica dessa função, simples porém muito útil na criação de smart contracts.

## Exemplo Prático

\`\`\`solidity
function comprar() public payable minValue(1 ether) {
    // lógica de compra
}
\`\`\`

Neste exemplo, a função \`comprar()\` só será executada se o valor enviado for pelo menos 1 ether.

## Conclusão

Modifiers são essenciais para criar smart contracts seguros e organizados. Eles permitem reutilizar lógica comum e garantir que certas condições sejam sempre verificadas antes da execução das funções.`
        : `# Modifiers in Solidity: Security and Code Reusability

Hello, network! 🫡

Continuing the NearX lessons on Solidity, today I want to share with you the use of **modifiers**, helping to better understand their use in Solidity.

## What is a Modifier?

A **modifier** is a Solidity feature that allows reusing checks or preconditions in different functions, so you don't need to repeat the same **require** all the time. They're good for applying:

- Access rules
- Value validations
- Security protections
- Other functions

![Example of modifiers in Solidity](../assets/modifiers-example-1.png)

In the first example, we have three simple examples:

### 1. ownerOnly

Ensures that only the owner can execute certain contract functions.

\`\`\`solidity
modifier ownerOnly() {
    require(msg.sender == owner, "Only the contract owner can execute");
    _;
}
\`\`\`

### 2. minValue

Checks if the sent value (msg.value) is greater than or equal to the required minimum.

![Example of minValue and noReentrancy](../assets/modifiers-example-2.png)

\`\`\`solidity
modifier minValue(uint256 _valor) {
    require(msg.value >= _valor, "Sent value is insufficient");
    _;
}
\`\`\`

### 3. noReentrancy

To implement a reentrancy guard, a simple and efficient way to protect against reentrancy attacks, locking execution until the function completes.

\`\`\`solidity
modifier noReentrancy() {
    require(!locked, "No reentrancy.");
    locked = true;
    _;
    locked = false;
}
\`\`\`

## The _ Symbol

The **_;** symbol indicates where the function body will be executed. For example:

- Everything **before** the symbol executes **before** the function
- Everything **after** the symbol executes **after** the function

This is the basic logic of this function, simple yet very useful in creating smart contracts.

## Practical Example

\`\`\`solidity
function comprar() public payable minValue(1 ether) {
    // purchase logic
}
\`\`\`

In this example, the \`comprar()\` function will only execute if the sent value is at least 1 ether.

## Conclusion

Modifiers are essential for creating secure and organized smart contracts. They allow reusing common logic and ensuring certain conditions are always checked before function execution.`,
      category: 'web3',
      date: '2025-11-03',
      author: 'Pablo Sodré',
      images: ['https://via.placeholder.com/800x400?text=Modifiers+Example+1', 'https://via.placeholder.com/800x400?text=Modifiers+Example+2']
    },
    {
      id: 3,
      title: lang === 'pt' ? 'Events em Solidity: Registrando Ações na Blockchain' : 'Events in Solidity: Recording Actions on the Blockchain',
      excerpt: lang === 'pt' 
        ? 'Aprenda como usar events em Solidity para registrar informações na blockchain sem armazenar no contrato.' 
        : 'Learn how to use events in Solidity to record information on the blockchain without storing it in the contract.',
      content: lang === 'pt' 
        ? `# Events em Solidity: Registrando Ações na Blockchain

Olá, rede! 🫡

Hoje vim apresentar um pequeno contrato para entendermos melhor como funcionam os \`events\` em Solidity.

## O que é um Event?

Basicamente o **event** serve para registrar informações importantes na blockchain, sem precisar armazenar no contrato. É uma forma eficiente de emitir logs que são facilmente lidos por interfaces como dApps ou scripts.

![Exemplo de contrato com events](../assets/events-example.png)

## Na Prática

Events são úteis para:

- **Registrar ações** (transferências, votos, mensagens...)
- **Notificar o front-end** que algo aconteceu
- **Criar histórico de eventos** on-chain

## Exemplo de Contrato

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RegistroDeMensagem {
    event NovaMensagem(address remetente, string mensagem, uint256 timestamp);
    
    function registrarMensagem(string memory _mensagem) public {
        emit NovaMensagem(msg.sender, _mensagem, block.timestamp);
    }
}
\`\`\`

## Como Funciona?

O contrato acima, cada vez que alguém chama \`registrarMensagem\`, o contrato emite o evento \`NovaMensagem\` com as informações definidas:

- **O endereço de quem enviou** (msg.sender)
- **A mensagem**
- **O timestamp do bloco**

Esses dados ficam gravados nos logs da transação, visíveis até no Etherscan.

## Benefícios dos Events

1. **Economia de Gas**: Muito mais barato que armazenar dados no storage
2. **Histórico Permanente**: Eventos são indexados e permanecem na blockchain
3. **Integração com Front-end**: Fácil de escutar e reagir em dApps
4. **Transparência**: Todas as ações importantes ficam registradas

## Conclusão

Events são uma ferramenta fundamental em Solidity para criar contratos transparentes e eficientes. Eles permitem registrar informações importantes sem o custo de armazenamento, tornando-os ideais para auditoria e interação com interfaces externas.`
        : `# Events in Solidity: Recording Actions on the Blockchain

Hello, network! 🫡

Today I'm presenting a small contract to better understand how \`events\` work in Solidity.

## What is an Event?

Basically, an **event** serves to record important information on the blockchain without needing to store it in the contract. It's an efficient way to emit logs that are easily read by interfaces like dApps or scripts.

![Example contract with events](../assets/events-example.png)

## In Practice

Events are useful for:

- **Recording actions** (transfers, votes, messages...)
- **Notifying the front-end** that something happened
- **Creating on-chain event history**

## Contract Example

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RegistroDeMensagem {
    event NovaMensagem(address remetente, string mensagem, uint256 timestamp);
    
    function registrarMensagem(string memory _mensagem) public {
        emit NovaMensagem(msg.sender, _mensagem, block.timestamp);
    }
}
\`\`\`

## How It Works?

In the contract above, every time someone calls \`registrarMensagem\`, the contract emits the \`NovaMensagem\` event with the defined information:

- **The sender's address** (msg.sender)
- **The message**
- **The block timestamp**

This data is recorded in the transaction logs, visible even on Etherscan.

## Benefits of Events

1. **Gas Savings**: Much cheaper than storing data in storage
2. **Permanent History**: Events are indexed and remain on the blockchain
3. **Front-end Integration**: Easy to listen and react in dApps
4. **Transparency**: All important actions are recorded

## Conclusion

Events are a fundamental tool in Solidity for creating transparent and efficient contracts. They allow recording important information without storage costs, making them ideal for auditing and interaction with external interfaces.`,
      category: 'web3',
      date: '2025-11-02',
      author: 'Pablo Sodré',
      images: ['https://via.placeholder.com/800x400?text=Events+Example']
    },
    {
      id: 4,
      title: lang === 'pt' ? 'Redes de Computadores: Hub, Switch, Roteador e Broadcast' : 'Computer Networks: Hub, Switch, Router and Broadcast',
      excerpt: lang === 'pt' 
        ? 'Explore de forma prática o que são hubs, switches, roteadores e o conceito de broadcast em redes de computadores.' 
        : 'Explore in a practical way what hubs, switches, routers and the broadcast concept are in computer networks.',
      content: lang === 'pt' 
        ? `# Redes de Computadores: Hub, Switch, Roteador e Broadcast

Olá, rede! 🫡

Neste artigo, vamos explorar de forma prática o que são hubs, switches, roteadores e o conceito de broadcast, explicando como cada um influencia o tráfego e a eficiência de uma rede.

## 🌐 O que é uma Rede de Computadores

Uma rede é um conjunto de dispositivos (como computadores, servidores e impressoras) conectados entre si para compartilhar dados e recursos.

Ela pode ser local (LAN), metropolitana (MAN) ou ampla (WAN), dependendo da distância entre os dispositivos e da infraestrutura usada.

Para que essa comunicação aconteça, existem **protocolos** — conjuntos de regras que determinam como os dados são enviados, recebidos e interpretados.

💡 O mais conhecido é o **TCP/IP**, base da internet, que define como pacotes de dados são endereçados e transmitidos.

⸻

## ⚙️ Hub — o mais simples (e menos inteligente)

O hub é o dispositivo de rede mais básico. Ele replica o sinal recebido para todas as portas conectadas, sem distinguir quem deve receber a informação.

### Características

🔹 **Vantagem**: simples e barato  
🔹 **Desvantagem**: ineficiente — todos os dispositivos recebem todos os dados (muito broadcast)

🧠 Em outras palavras, o hub é como gritar em uma sala: todos ouvem, mas só um precisava da mensagem.

⸻

## 🔀 Switch — o intermediário inteligente

O switch é uma evolução do hub. Ele consegue identificar os dispositivos conectados através dos endereços MAC e enviar os pacotes apenas para o destino correto.

### Características

🔹 **Vantagem**: reduz o tráfego desnecessário  
🔹 **Desvantagem**: opera apenas na camada 2 (enlace) — não entende IPs nem faz roteamento

💡 O switch torna a comunicação dentro da rede local (LAN) muito mais eficiente.

⸻

## 🌍 Roteador — o cérebro da comunicação entre redes

O roteador (router) é responsável por conectar redes diferentes, como sua rede doméstica à internet. Ele opera na camada 3 (rede) do modelo OSI e decide o melhor caminho para enviar cada pacote.

### Características

🔹 **Vantagem**: roteia dados entre diferentes redes  
🔹 **Desvantagem**: configuração mais complexa

🧭 O roteador é como um carteiro que escolhe o melhor caminho para entregar a correspondência.

⸻

## 📡 Broadcast — quando todos ouvem a mensagem

O broadcast acontece quando um pacote é enviado para todos os dispositivos de uma rede.

Embora útil em certas situações (como descoberta de dispositivos), o uso excessivo gera tráfego desnecessário e pode congestionar a rede.

⚠️ Por isso, switches e roteadores modernos limitam ou segmentam o broadcast em domínios menores.

## Comparação Rápida

| Dispositivo | Camada OSI | Inteligência | Uso Ideal |
|------------|------------|--------------|-----------|
| **Hub** | Camada 1 (Física) | Nenhuma | Redes muito pequenas |
| **Switch** | Camada 2 (Enlace) | Média | Redes locais (LAN) |
| **Roteador** | Camada 3 (Rede) | Alta | Conexão entre redes |

## Conclusão

Entender a diferença entre hub, switch e roteador é fundamental para projetar e administrar redes eficientes. Cada dispositivo tem seu papel específico, e escolher o correto pode fazer toda a diferença na performance e segurança da sua rede.`
        : `# Computer Networks: Hub, Switch, Router and Broadcast

Hello, network! 🫡

In this article, we'll explore in a practical way what hubs, switches, routers and the broadcast concept are, explaining how each influences traffic and network efficiency.

## 🌐 What is a Computer Network

A network is a set of devices (such as computers, servers and printers) connected to each other to share data and resources.

It can be local (LAN), metropolitan (MAN) or wide (WAN), depending on the distance between devices and the infrastructure used.

For this communication to happen, there are **protocols** — sets of rules that determine how data is sent, received and interpreted.

💡 The best known is **TCP/IP**, the foundation of the internet, which defines how data packets are addressed and transmitted.

⸻

## ⚙️ Hub — the simplest (and least intelligent)

The hub is the most basic network device. It replicates the received signal to all connected ports, without distinguishing who should receive the information.

### Characteristics

🔹 **Advantage**: simple and cheap  
🔹 **Disadvantage**: inefficient — all devices receive all data (too much broadcast)

🧠 In other words, the hub is like shouting in a room: everyone hears, but only one needed the message.

⸻

## 🔀 Switch — the intelligent intermediary

The switch is an evolution of the hub. It can identify connected devices through MAC addresses and send packets only to the correct destination.

### Characteristics

🔹 **Advantage**: reduces unnecessary traffic  
🔹 **Disadvantage**: operates only at layer 2 (data link) — doesn't understand IPs or route

💡 The switch makes communication within the local network (LAN) much more efficient.

⸻

## 🌍 Router — the brain of communication between networks

The router is responsible for connecting different networks, such as your home network to the internet. It operates at layer 3 (network) of the OSI model and decides the best path to send each packet.

### Characteristics

🔹 **Advantage**: routes data between different networks  
🔹 **Disadvantage**: more complex configuration

🧭 The router is like a mail carrier who chooses the best path to deliver the mail.

⸻

## 📡 Broadcast — when everyone hears the message

Broadcast happens when a packet is sent to all devices on a network.

Although useful in certain situations (such as device discovery), excessive use generates unnecessary traffic and can congest the network.

⚠️ That's why modern switches and routers limit or segment broadcast into smaller domains.

## Quick Comparison

| Device | OSI Layer | Intelligence | Ideal Use |
|--------|-----------|--------------|-----------|
| **Hub** | Layer 1 (Physical) | None | Very small networks |
| **Switch** | Layer 2 (Data Link) | Medium | Local networks (LAN) |
| **Router** | Layer 3 (Network) | High | Connection between networks |

## Conclusion

Understanding the difference between hub, switch and router is fundamental for designing and managing efficient networks. Each device has its specific role, and choosing the correct one can make all the difference in your network's performance and security.`,
      category: 'redes',
      date: '2025-11-01',
      author: 'Pablo Sodré'
    },
    {
      id: 5,
      title: lang === 'pt' ? 'Do Domínio ao IP: Entendendo DNS, IPv4 e IPv6' : 'From Domain to IP: Understanding DNS, IPv4 and IPv6',
      excerpt: lang === 'pt' 
        ? 'Como a internet transforma um nome de domínio em um endereço IP. Entenda o papel do DNS e as diferenças entre IPv4 e IPv6 — os protocolos que tornam a comunicação online possível.' 
        : 'How the internet transforms a domain name into an IP address. Understand the role of DNS and the differences between IPv4 and IPv6 — the protocols that make online communication possible.',
      content: lang === 'pt' 
        ? `# Do Domínio ao IP: Entendendo DNS, IPv4 e IPv6

Quando digitamos um site como pablosodre.dev no navegador, parece algo simples. Mas por trás desse gesto existe uma estrutura complexa que envolve tradução de nomes, endereçamento e comunicação entre redes.

Neste artigo, vamos explorar como o DNS (Domain Name System) transforma domínios em endereços IP, e como os protocolos IPv4 e IPv6 permitem que bilhões de dispositivos se conectem entre si.

## O que é o DNS

O DNS (Domain Name System) é o sistema que traduz nomes de domínio legíveis por humanos (como google.com ou pablosodre.dev) em endereços IP, que são os identificadores reais usados pelos computadores para se comunicarem na internet.

Pense no DNS como uma "agenda telefônica" da internet. Você procura o nome, e ele te retorna o número (IP).

## Como o DNS funciona

1. Você digita um endereço no navegador, por exemplo: https://pablosantos.xyz
2. O navegador consulta o resolvedor DNS (geralmente configurado pelo provedor de internet ou pelo sistema).
3. O DNS busca o IP correspondente — algo como 192.0.2.45.
4. O navegador usa esse IP para conectar-se diretamente ao servidor e carregar o site.

O DNS não entrega o conteúdo do site, apenas informa onde ele está.

## IPv4 — O clássico da internet

O IPv4 (Internet Protocol version 4) é o protocolo de endereçamento mais usado desde os anos 1980.

Cada dispositivo conectado à rede recebe um endereço de 32 bits, normalmente representado por quatro números separados por pontos.

**Exemplo:**

\`\`\`
192.168.0.15
\`\`\`

### Características principais

- Usa endereços de 32 bits → ~4,3 bilhões de endereços possíveis.
- Divide o endereço em quatro blocos (octetos).
- Permite broadcasts, ou seja, envio de pacotes para todos os dispositivos da rede.
- É simples, rápido e amplamente compatível, mas tem limitação de endereços (a internet já "quase esgotou" o IPv4).

## IPv6 — O futuro da comunicação digital

O IPv6 (Internet Protocol version 6) surgiu para resolver as limitações do IPv4.

Ele usa endereços de 128 bits, oferecendo uma quantidade quase infinita de endereços únicos.

**Exemplo:**

\`\`\`
2001:0db8:85a3:0000:0000:8a2e:0370:7334
\`\`\`

### Principais vantagens do IPv6

| Característica | IPv4 | IPv6 |
|----------------|------|------|
| Tamanho do endereço | 32 bits | 128 bits |
| Total de endereços | ~4,3 bilhões | ~340 undecilhões |
| Formato | Decimal (0–255) | Hexadecimal |
| Broadcast | Suportado | Substituído por Multicast |
| Segurança (IPSec) | Opcional | Integrada |
| Configuração | Manual/DHCP | Automática |
| Desempenho | Simples e compatível | Otimizado e escalável |

### Por que o IPv6 é importante

- Garante que cada dispositivo no planeta possa ter seu próprio endereço IP único.
- Melhora a segurança e a eficiência das conexões.
- É fundamental para o crescimento da IoT (Internet das Coisas) e da Web3, onde milhões de nós e dispositivos precisam se comunicar simultaneamente.

## DNS + IP: Como tudo se conecta

Quando você acessa um site:

1. O DNS traduz o nome (pablosodre.dev) para um IP.
2. Esse IP pode ser IPv4 ou IPv6, dependendo da configuração do servidor e da sua rede.
3. O navegador então se conecta ao endereço IP e solicita os arquivos do site (HTML, CSS, etc.).

Em termos simples: o DNS é o "tradutor" e o IP é o "endereço real" de onde a informação está hospedada.`
        : `# From Domain to IP: Understanding DNS, IPv4 and IPv6

When we type a site like pablosodre.dev in the browser, it seems simple. But behind this gesture lies a complex structure involving name translation, addressing and communication between networks.

In this article, we'll explore how DNS (Domain Name System) transforms domains into IP addresses, and how IPv4 and IPv6 protocols allow billions of devices to connect to each other.

## What is DNS

DNS (Domain Name System) is the system that translates human-readable domain names (like google.com or pablosodre.dev) into IP addresses, which are the real identifiers used by computers to communicate on the internet.

Think of DNS as the internet's "phone book". You look up the name, and it returns the number (IP).

## How DNS Works

1. You type an address in the browser, for example: https://pablosantos.xyz
2. The browser queries the DNS resolver (usually configured by the internet provider or system).
3. DNS looks up the corresponding IP — something like 192.0.2.45.
4. The browser uses that IP to connect directly to the server and load the site.

DNS doesn't deliver the site's content, it only tells where it is.

## IPv4 — The internet classic

IPv4 (Internet Protocol version 4) is the most widely used addressing protocol since the 1980s.

Each device connected to the network receives a 32-bit address, typically represented by four numbers separated by dots.

**Example:**

\`\`\`
192.168.0.15
\`\`\`

### Main Characteristics

- Uses 32-bit addresses → ~4.3 billion possible addresses.
- Divides the address into four blocks (octets).
- Allows broadcasts, i.e., sending packets to all devices on the network.
- It's simple, fast and widely compatible, but has address limitations (the internet has "almost exhausted" IPv4).

## IPv6 — The future of digital communication

IPv6 (Internet Protocol version 6) emerged to solve IPv4's limitations.

It uses 128-bit addresses, offering an almost infinite number of unique addresses.

**Example:**

\`\`\`
2001:0db8:85a3:0000:0000:8a2e:0370:7334
\`\`\`

### Main IPv6 Advantages

| Characteristic | IPv4 | IPv6 |
|----------------|------|------|
| Address size | 32 bits | 128 bits |
| Total addresses | ~4.3 billion | ~340 undecillion |
| Format | Decimal (0–255) | Hexadecimal |
| Broadcast | Supported | Replaced by Multicast |
| Security (IPSec) | Optional | Built-in |
| Configuration | Manual/DHCP | Automatic |
| Performance | Simple and compatible | Optimized and scalable |

### Why IPv6 is Important

- Ensures that every device on the planet can have its own unique IP address.
- Improves security and connection efficiency.
- It's fundamental for the growth of IoT (Internet of Things) and Web3, where millions of nodes and devices need to communicate simultaneously.

## DNS + IP: How Everything Connects

When you access a site:

1. DNS translates the name (pablosodre.dev) to an IP.
2. This IP can be IPv4 or IPv6, depending on the server and network configuration.
3. The browser then connects to the IP address and requests the site files (HTML, CSS, etc.).

In simple terms: DNS is the "translator" and IP is the "real address" where the information is hosted.`,
      category: 'redes',
      date: '2025-10-31',
      author: 'Pablo Sodré'
    },
    {
      id: 6,
      title: lang === 'pt' ? 'Criando uma API REST com Express.js' : 'Creating a REST API with Express.js',
      excerpt: lang === 'pt'
        ? 'Aprenda a criar uma API REST simples usando Node.js e Express.js, entendendo a comunicação entre cliente e servidor através de requisições HTTP.'
        : 'Learn how to create a simple REST API using Node.js and Express.js, understanding the communication between client and server through HTTP requests.',
      content: lang === 'pt'
        ? `# Criando uma API REST com Express.js

Olá, rede! 🫡

Neste post, vim mostrar a criação de uma API REST com Express.js.

Na imagem abaixo, criei um exemplo simples usando Node.js e Express. O código é extremamente direto e fácil de compreender, ótimo para quem quer entender como funciona a comunicação entre cliente e servidor.

![Postman - Requisição POST](/postman.png)

Como mostra a imagem, estou usando o Postman, onde envio uma requisição (request) POST com alguns dados JSON (sobre mim). Em seguida, o servidor responde (response) com uma mensagem de sucesso.

![Código do Servidor Express.js](/server.png)

O Express serve para facilitar o processo de criação de rotas, tratar requisições e estruturar uma API RESTful, seguindo os princípios do protocolo HTTP.

## Métodos HTTP Principais

- **GET** → Buscar dados
- **POST** → Enviar dados
- **PUT/PATCH** → Atualizar dados
- **DELETE** → Remover dados

## Por que isso é importante?

Essa estrutura é a base de praticamente qualquer aplicação moderna, seja um site, app mobile ou até um dApp que se conecta à blockchain via APIs.

O Express.js simplifica muito o trabalho de criar endpoints, processar dados e retornar respostas, tornando o desenvolvimento de APIs mais rápido e organizado.`
        : `# Creating a REST API with Express.js

Hello, network! 🫡

In this post, I'll show you how to create a REST API with Express.js.

In the image below, I created a simple example using Node.js and Express. The code is extremely straightforward and easy to understand, great for anyone who wants to understand how client-server communication works.

![Postman - POST Request](/postman.png)

As shown in the image, I'm using Postman, where I send a POST request with some JSON data (about me). Then, the server responds with a success message.

![Express.js Server Code](/server.png)

Express serves to facilitate the process of creating routes, handling requests, and structuring a RESTful API, following the principles of the HTTP protocol.

## Main HTTP Methods

- **GET** → Fetch data
- **POST** → Send data
- **PUT/PATCH** → Update data
- **DELETE** → Remove data

## Why is this important?

This structure is the foundation of practically any modern application, whether it's a website, mobile app, or even a dApp that connects to the blockchain via APIs.

Express.js greatly simplifies the work of creating endpoints, processing data, and returning responses, making API development faster and more organized.`,
      category: 'code',
      date: '2025-11-06',
      author: 'Pablo Sodré',
      images: ['/postman.png', '/server.png']
    },
    {
      id: 7,
      title: lang === 'pt' ? 'Evoluindo nossa API REST: TypeScript e Banco de Dados' : 'Evolving our REST API: TypeScript and Database',
      excerpt: lang === 'pt'
        ? 'Continuando o desenvolvimento da API REST: migração para TypeScript, integração com MariaDB/MySQL e estrutura de banco de dados com relacionamentos.'
        : 'Continuing REST API development: migration to TypeScript, integration with MariaDB/MySQL, and database structure with relationships.',
      content: lang === 'pt'
        ? `# Evoluindo nossa API REST: TypeScript e Banco de Dados

Olá, rede! 🫡

Evoluindo nossa API REST!

No primeiro post, mostrei como criar uma API básica com Express.js que recebia dados via POST e retornava uma resposta simples. Agora, dando passos importantes para tornar isso uma aplicação real e funcional!

## Migração para TypeScript

Primeira grande mudança: migramos de JavaScript para TypeScript. Por quê? TypeScript oferece tipagem estática, detecção de erros antes mesmo de executar o código, código mais seguro e fácil de manter. Uma boa para projetos que vão crescer!

![Código TypeScript do Servidor](/typescript-server.png)

## Integração com Banco de Dados

Agora nossa API não apenas recebe dados, mas os persiste! Conectei ao MariaDB/MySQL usando Connection Pool, que gerencia múltiplas conexões. Usei Prepared Statements (os famosos \`?\` no SQL) para prevenir SQL Injection e ter mais segurança.

![MySQL Workbench e Postman](/mysql-postman.png)

## Estrutura do Banco de Dados

No MySQL Workbench, criei o schema completo:

- **Tabela \`users\`** com user_id (UUID), name, email e password
- **Tabela \`videos\`** que se relaciona com users através de uma Foreign Key
- **Relacionamento 1:N**: um usuário pode ter múltiplos vídeos, conectando \`videos.users_user_id\` → \`users.user_id\`

![Diagrama ERD - Relacionamento entre Tabelas](/erd-diagram.png)

## Endpoint Funcional com Persistência

O POST \`/user\` agora faz muito mais:

- Recebe os dados JSON (name, email, password)
- Gera um UUID único para cada novo usuário
- Insere os dados no banco MariaDB
- Retorna status 200 com \`{"success": true}\` quando tudo corre bem

## Mudanças Feitas

**Antes:** JavaScript puro, dados apenas em memória, resposta simples.

**Agora:** TypeScript com tipos, persistência em banco de dados, estrutura preparada para relacionamentos entre entidades, dados que permanecem mesmo após reiniciar o servidor.

As imagens mostram: o código TypeScript, a execução bem-sucedida no Postman com verificação no MySQL Workbench, e o diagrama ERD mostrando o relacionamento entre as tabelas.

Essa estrutura é fundamental para qualquer aplicação moderna que precisa armazenar e relacionar dados.

Seguirei postando por aqui a continuação desse projeto até concluir! 💪`
        : `# Evolving our REST API: TypeScript and Database

Hello, network! 🫡

Evolving our REST API!

In the first post, I showed how to create a basic API with Express.js that received data via POST and returned a simple response. Now, taking important steps to make this a real and functional application!

## Migration to TypeScript

First major change: we migrated from JavaScript to TypeScript. Why? TypeScript offers static typing, error detection before even running the code, safer and easier-to-maintain code. Great for projects that will grow!

![TypeScript Server Code](/typescript-server.png)

## Database Integration

Now our API doesn't just receive data, it persists it! I connected to MariaDB/MySQL using Connection Pool, which manages multiple connections. I used Prepared Statements (the famous \`?\` in SQL) to prevent SQL Injection and have more security.

![MySQL Workbench and Postman](/mysql-postman.png)

## Database Structure

In MySQL Workbench, I created the complete schema:

- **\`users\` table** with user_id (UUID), name, email, and password
- **\`videos\` table** that relates to users through a Foreign Key
- **1:N Relationship**: one user can have multiple videos, connecting \`videos.users_user_id\` → \`users.user_id\`

![ERD Diagram - Relationship between Tables](/erd-diagram.png)

## Functional Endpoint with Persistence

The POST \`/user\` now does much more:

- Receives JSON data (name, email, password)
- Generates a unique UUID for each new user
- Inserts data into MariaDB
- Returns status 200 with \`{"success": true}\` when everything goes well

## Changes Made

**Before:** Pure JavaScript, data only in memory, simple response.

**Now:** TypeScript with types, database persistence, structure prepared for relationships between entities, data that persists even after restarting the server.

The images show: the TypeScript code, successful execution in Postman with verification in MySQL Workbench, and the ERD diagram showing the relationship between tables.

This structure is fundamental for any modern application that needs to store and relate data.

I'll keep posting the continuation of this project here until completion! 💪`,
      category: 'code',
      date: '2025-11-07',
      author: 'Pablo Sodré',
      images: ['/typescript-server.png', '/mysql-postman.png', '/erd-diagram.png']
    },
    {
      id: 8,
      title: lang === 'pt' ? 'API REST: Segurança, Autenticação e Organização' : 'REST API: Security, Authentication and Organization',
      excerpt: lang === 'pt'
        ? 'Continuando a evolução da API REST: segregação de rotas, criptografia de senhas com bcrypt, integridade de dados e autenticação com JWT.'
        : 'Continuing REST API evolution: route segregation, password encryption with bcrypt, data integrity and JWT authentication.',
      content: lang === 'pt'
        ? `# API REST: Segurança, Autenticação e Organização

Olá, rede! 🫡 

Continuando a evolução da nossa API REST!

No post anterior, mostrei a integração com banco de dados e a estrutura básica. Agora, implementei funcionalidades essenciais de segurança e organização que toda aplicação real precisa ter!

## Segregação de Rotas

Primeira mudança importante: organizei o código criando uma pasta \`routes\` e separando as rotas de usuário em \`user.routes.ts\`. Isso deixa o código muito mais limpo, escalável e fácil de manter. O \`server.ts\` agora apenas configura o Express e importa as rotas, deixei as responsabilidades bem definidas!

![Código do user.routes.ts com segregação de rotas](/user-routes-code.png)

## Segurança: Criptografia de Senhas

Implementei o bcrypt para hash de senhas. Agora, quando um usuário se cadastra, a senha nunca é armazenada em texto, ela é criptografada com 10 salt rounds antes de ir para o banco. Mesmo que alguém acesse o banco, as senhas estão protegidas.

![MySQL Workbench mostrando senhas hasheadas](/mysql-users-hashed.png)

## Integridade de Dados: Email Único

Adicionei constraint UNIQUE no campo email no MySQL. Agora não é possível cadastrar dois usuários com o mesmo email, o banco rejeita automaticamente tentativas de duplicação. Validação direto no banco de dados, garantindo consistência!

## Autenticação com JWT

Implementei o sistema de login completo:
- Endpoint \`/user/sign-up\`: cadastra novo usuário com senha criptografada
- Endpoint \`/user/sign-in\`: valida credenciais, compara senha com hash usando bcrypt.compare, e retorna um token JWT válido por 1 hora

O token JWT contém o ID e email do usuário, que permite autenticação em requisições futuras sem precisar enviar credenciais toda vez.

![Postman - Requisição POST de cadastro bem-sucedida](/postman-users-hashed.png)

Essas implementações são fundamentais para qualquer aplicação que lida com dados sensíveis e precisa garantir segurança e organização no código!`
        : `# REST API: Security, Authentication and Organization

Hello, network! 🫡 

Continuing the evolution of our REST API!

In the previous post, I showed the database integration and basic structure. Now, I've implemented essential security and organization features that every real application needs!

## Route Segregation

First important change: I organized the code by creating a \`routes\` folder and separating user routes into \`user.routes.ts\`. This makes the code much cleaner, scalable and easier to maintain. The \`server.ts\` now only configures Express and imports routes, keeping responsibilities well defined!

![user.routes.ts code with route segregation](/user-routes-code.png)

## Security: Password Encryption

I implemented bcrypt for password hashing. Now, when a user registers, the password is never stored in plain text, it's encrypted with 10 salt rounds before going to the database. Even if someone accesses the database, passwords are protected.

![MySQL Workbench showing hashed passwords](/mysql-users-hashed.png)

## Data Integrity: Unique Email

I added a UNIQUE constraint on the email field in MySQL. Now it's not possible to register two users with the same email, the database automatically rejects duplication attempts. Validation directly in the database, ensuring consistency!

## JWT Authentication

I implemented the complete login system:
- Endpoint \`/user/sign-up\`: registers new user with encrypted password
- Endpoint \`/user/sign-in\`: validates credentials, compares password with hash using bcrypt.compare, and returns a JWT token valid for 1 hour

The JWT token contains the user's ID and email, which allows authentication in future requests without needing to send credentials every time.

![Postman - Successful POST registration request](/postman-users-hashed.png)

These implementations are fundamental for any application that deals with sensitive data and needs to ensure security and code organization!`,
      category: 'code',
      date: '2025-11-08',
      author: 'Pablo Sodré',
      images: ['/user-routes-code.png', '/mysql-users-hashed.png', '/postman-users-hashed.png']
    }
  ];
};
