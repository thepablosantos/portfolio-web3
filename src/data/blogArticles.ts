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
    },
    {
      id: 9,
      title: lang === 'pt' ? 'Certificate Transparency e Internet Archive: Ferramentas Essenciais para Hacking Ético' : 'Certificate Transparency and Internet Archive: Essential Tools for Ethical Hacking',
      excerpt: lang === 'pt'
        ? 'Aprenda como usar Certificate Transparency e Internet Archive para descobrir ativos esquecidos, detectar exposições e mapear superfícies de ataque de forma ética.'
        : 'Learn how to use Certificate Transparency and Internet Archive to discover forgotten assets, detect exposures, and map attack surfaces ethically.',
      content: lang === 'pt'
        ? `# Certificate Transparency e Internet Archive: Ferramentas Essenciais para Hacking Ético

Olá, rede! 🫡

Hoje vou compartilhar duas ferramentas poderosas que todo hacker ético e profissional de segurança deveria conhecer: **Certificate Transparency (CT)** e **Internet Archive**. Quando usadas juntas, elas se tornam uma combinação letal para descobrir ativos esquecidos, detectar exposições e mapear superfícies de ataque.

## Por que isso importa?

Imagine descobrir um subdomínio que sua equipe esqueceu, ou um certificado sendo emitido para um domínio que você nem sabia que existia. Esses são cenários reais que acontecem constantemente em organizações, e é exatamente aí que essas ferramentas brilham.

## Certificate Transparency: Seu Radar de Certificados

O Certificate Transparency é um sistema público de auditoria que registra todos os certificados SSL/TLS emitidos por Certificate Authorities (CAs). Basicamente, toda vez que alguém emite um certificado para um domínio, esse certificado é logado em logs públicos que qualquer um pode consultar.

### Por que monitorar CT é útil?

**Descoberta de ativos (subdomínios):** Novos certificados frequentemente incluem FQDNs e subdomínios que não aparecem em DNS públicos ou que foram esquecidos pela equipe. Isso é ouro para inventário de ataque e defesa.

**Detecção de certificados mal emitidos:** Encontrar certificados que não deveriam existir para sua organização pode indicar erro de CA, phishing ou atividade maliciosa. Já vi casos de certificados sendo emitidos para subdomínios que ninguém da empresa conhecia!

**Mudanças em tempo real:** Com feeds em tempo real, você pode reagir rapidamente a emissões novas, reduzindo a janela de exposição drasticamente.

## Ferramentas que você precisa conhecer

### Certstream (CaliDog) — O Firehose em Tempo Real

O Certstream agrega e transmite certificados à medida que são logados, em formato de stream. Ideal para quem quer um feed contínuo e reações imediatas. Se você precisa detectar algo rapidamente, essa é sua ferramenta.

![Certstream mostrando logs de Certificate Transparency em tempo real](/certstream-realtime.png)

Como você pode ver na imagem acima, o Certstream mostra uma lista de certificados sendo emitidos em tempo real, com detalhes completos incluindo domínios, subdomínios e informações da CA que emitiu o certificado. Essa visualização em tempo real é perfeita para detectar anomalias rapidamente.

🔗 **Link:** [certstream.calidog.io](https://certstream.calidog.io)

### crt.sh — A Pesquisa e Histórico

O crt.sh indexa certificados logados e é excelente para investigações ad-hoc. Jogue um domínio e obtenha registros históricos e subdomínios vinculados aos certificados. Muito usado para recon e auditoria histórica. É tipo o Google dos certificados SSL.

![Resultado de busca no crt.sh mostrando certificados para uol.com.br](/crt-sh-search.png)

A imagem mostra como o crt.sh apresenta uma tabela completa com todos os certificados historicamente emitidos para um domínio, incluindo subdomínios, datas de emissão, expiração e a CA que emitiu. É incrível quantos subdomínios você pode descobrir assim!

🔗 **Link:** [crt.sh](https://crt.sh)

### Meta / Facebook CT Tools — Busca + Alertas

A Meta oferece uma interface de busca para CT e permite subscriptions/alertas para notificá-lo quando novos certificados para um domínio são detectados. Muito útil para monitoramento contínuo de assets que você possui.

🔗 **Link:** [developers.facebook.com/tools/ct](https://developers.facebook.com/tools/ct)

## Internet Archive: O Histórico que Ninguém Lembra

O Internet Archive (archive.org) é muito mais do que um museu de páginas antigas. Para quem trabalha com segurança, esse histórico pode revelar subdomínios esquecidos, endpoints antigos, parâmetros expostos, e até pistas de deploys e mudanças de infraestrutura que não aparecem em scans atuais.

![Página inicial do Internet Archive e Wayback Machine](/internet-archive-homepage.png)

### Por que o Archive.org é relevante?

**Histórico de URLs e conteúdo:** Páginas removidas ou alteradas podem conter endpoints, caminhos ou comentários que dão pistas sobre serviços e arquivos antigos. Já encontrei arquivos \`.env\` que foram removidos mas ficaram no histórico.

**Descoberta de ativos "escondidos":** Subdomínios e caminhos que deixaram rastros em snapshots podem não mais existir no DNS, mas permanecem úteis para casar evidências ou encontrar superfícies esquecidas.

**Contexto temporal:** Ver quando algo foi publicado/alterado ajuda a correlacionar eventos (deploys, releases, incidentes). É tipo ter uma máquina do tempo para sua investigação.

### A API CDX: Extraindo o Histórico Completo

O Internet Archive oferece a API CDX (índice de cópias), que permite consultar o histórico de URLs de forma programática. Uma query típica seria:

\`\`\`
http://web.archive.org/cdx/search/cdx?url=*.dominioinvestigado.com/*&output=txt&fl=original&collapse=urlkey
\`\`\`

O que isso faz:
- \`url=*.dominioinvestigado.com/*\` → busca todas as entradas do domínio (inclui subdomínios e paths)
- \`output=txt\` → retorna em texto simples (fácil de processar)
- \`fl=original\` → retorna apenas a URL original arquivada
- \`collapse=urlkey\` → remove duplicatas por chave de URL

**Mas atenção:** Essa query retorna URLs completas com paths, parâmetros, query strings — tudo misturado. Se você quer apenas os domínios e subdomínios para fazer um inventário limpo, precisa filtrar isso.

![Lista de URLs brutas extraídas da API CDX do Internet Archive](/archive-cdx-output.png)

Como você pode ver na imagem acima, a saída da API CDX é uma lista massiva de URLs completas com paths, parâmetros, query strings e até caracteres codificados. É muita informação para processar manualmente!

### urltodomain.com: Filtrando e Normalizando URLs

Aqui que entra a mágica! O **urltodomain.com** é uma ferramenta essencial que extrai e normaliza domínios a partir de listas de URLs.

**Como funciona o workflow completo:**

1. **Extraia URLs com a API CDX:** Você pega todas as URLs arquivadas do domínio alvo
2. **Cole no urltodomain.com:** A ferramenta processa sua lista de URLs
3. **Obtenha domínios limpos:** Ela retorna apenas os domínios e subdomínios, removendo paths, parâmetros, query strings, fragmentos — tudo que não é útil para inventário de ativos

![Resultado do urltodomain.com mostrando lista limpa de domínios normalizados](/urltodomain-result.png)

Olha a diferença! Depois de processar no urltodomain.com, você tem uma lista limpa e organizada apenas com os domínios e subdomínios. Muito mais fácil de trabalhar!

**Por que isso é importante?**

Sem essa normalização, você fica com uma lista gigante de URLs como:
\`\`\`
https://subdominio.exemplo.com/admin/login.php?id=123
https://subdominio.exemplo.com/api/v1/users?page=2
https://outro.exemplo.com/path/complexo/arquivo.js
\`\`\`

Com o urltodomain.com, você simplifica para:
\`\`\`
subdominio.exemplo.com
outro.exemplo.com
\`\`\`

Isso facilita:
- Agregação e remoção de duplicatas
- Comparação com inventário DNS atual
- Criação de lista limpa para triagem
- Correlação com outras fontes (CT logs, DNS, etc.)

🔗 **Link:** [urltodomain.com](https://urltodomain.com)

### Complemento: arquivo.pt e Outros Arquivos Nacionais

Existem outros repositórios como o arquivo.pt (arquivo nacional português) que podem ter snapshots diferentes do Internet Archive. Em investigações, consultar múltiplos web archives aumenta a cobertura e reduz falsos negativos.

🔗 **Links:**
- [web.archive.org](https://web.archive.org)
- [arquivo.pt](https://arquivo.pt)

## Como Usar na Prática (Abordagem Ética)

**⚠️ Importante:** Sempre trabalhe dentro de um framework ético e legal. Não execute testes intrusivos sem autorização.

### Fluxo Prático Completo de Investigação

**1. Inventário Inicial (Recon Autorizado)**
- Pesquise seu domínio corporativo em crt.sh para compilar uma lista de certificados e nomes (subdomínios) historicamente emitidos
- Isso dá um mapa inicial de superfície

**2. Extração do Histórico com API CDX**
- Use a API CDX do Internet Archive para obter todas as URLs arquivadas do domínio alvo
- Salve o resultado como um arquivo de texto
- Exemplo de comando:
  \`\`\`bash
  curl "http://web.archive.org/cdx/search/cdx?url=*.seudominio.com/*&output=txt&fl=original&collapse=urlkey" > urls_arquivadas.txt
  \`\`\`

**3. Normalização com urltodomain.com**
- Cole sua lista de URLs no urltodomain.com (ou use a API se disponível)
- A ferramenta vai extrair apenas os domínios e subdomínios
- Exporte a lista limpa de domínios

**4. Feed em Tempo Real (Certstream)**
- Consuma o stream do Certstream filtrando eventos que contenham seu domínio
- Use para alertas operacionais de novas emissões

**5. Correlação e Triagem**
Compare os domínios/subdomínios extraídos com:
- Base de subdomínios do DNS atual (quando autorizado)
- Logs de Certificate Transparency (crt.sh)
- Feed em tempo real (Certstream)
- Snapshots do Internet Archive

**6. Triagem Manual**
Quando um novo certificado ou URL antiga é detectada, valide:
- É um certificado/URL legítimo esperado?
- Pertence a um sistema autorizado?
- Contém domínios/subdomínios inesperados que exigem investigação?
- Aparece em conjunto com certificados ou menções a serviços sensíveis?

**7. Ação Responsável**
Se encontrar algo suspeito:
- Abra um canal de comunicação (CSIRT, equipe de segurança)
- Execute Responsible Disclosure se aplicável
- Documente tudo para sua equipe

## Casos de Uso Práticos (Defensivos)

✅ Descobrir serviços esquecidos rodando em subdomínios que não aparecem em inventários

✅ Detectar certificados emitidos por terceiros que podem permitir phishing ou interceptação

✅ Encontrar endpoints de API antigos que aceitam requests com parâmetros perigosos

✅ Auditar exposições de dados em páginas antigas (ex.: arquivos .env acidentalmente publicados)

✅ Correlacionar emissão de certificado com deploys — útil para monitorar mudanças na infraestrutura

✅ Mapear histórico completo de subdomínios que já existiram mas foram removidos do DNS

## Automação: O que é Seguro/Aceitável

✅ **Automatize:** Coleta via API CDX, normalização com urltodomain, alerta (webhook para SIEM), ticket automático para o time de segurança

❌ **NÃO automatize:** Testes intrusivos (scans, brute force) sem autorização

Automatize apenas a coleta, normalização, triagem e notificação. Deixe qualquer investigação ativa para processos autorizados.

## Limitações e Falsos Positivos

⚠️ **Nem todo certificado significa um ativo ativo:** Muitas entradas são de CAs, subdomínios temporários ou certificados emitidos por serviços de terceiros

⚠️ **Cobertura variável:** O Internet Archive não indexa tudo — alguns domínios são menos representados

⚠️ **Logs CT podem demorar:** A propagação para certas ferramentas varia conforme o log/CA

⚠️ **Falsos positivos:** A presença de uma URL no Archive não implica que o serviço esteja ativo hoje. Use como ponto de partida, não como prova de exploração

⚠️ **Normalização pode perder contexto:** Ao usar urltodomain, você perde informações sobre paths específicos que podem ser úteis. Considere manter uma versão completa e uma normalizada

## Checklist Rápido

- [ ] Registrar domínios críticos em serviços de monitoramento (Meta CT, Cloudflare, etc.)
- [ ] Consumir Certstream para detecção em tempo real
- [ ] Rodar pesquisas regulares no crt.sh para auditoria histórica
- [ ] Extrair lista de URLs do CDX para seus domínios
- [ ] **Normalizar URLs com urltodomain.com para obter apenas domínios/subdomínios**
- [ ] Correlacionar com CT logs e inventário DNS atual
- [ ] Priorizar ativos não inventariados para triagem manual
- [ ] Ter um playbook de triagem e Responsible Disclosure
- [ ] Integrar alertas ao seu SIEM/issue tracker

## Conclusão

Certificate Transparency e Internet Archive são fontes públicas e poderosas para quem cuida da segurança. Quando usadas juntas — e com a ajuda do urltodomain.com para normalização — elas permitem descobrir superfícies esquecidas, detectar potenciais emissões maliciosas e mapear histórico de ativos de forma proativa.

O workflow completo (CDX → urltodomain → correlação com CT) é uma técnica essencial no arsenal de todo profissional de segurança que leva a sério o mapeamento de superfície de ataque e a defesa proativa.

Ferramentas como crt.sh, Certstream, Meta CT tools, a API CDX do Internet Archive e urltodomain.com tornam esse monitoramento prático e escalável. Use com responsabilidade: monitore, trie e responda dentro de um framework ético e legal.

---

## Referências

- [Certstream / CaliDog](https://certstream.calidog.io) — Feed em tempo real
- [crt.sh](https://crt.sh) — Pesquisa e histórico de certificados
- [Meta CT Tools](https://developers.facebook.com/tools/ct) — Certificate Transparency tools & subscriptions
- [Internet Archive / Wayback Machine](https://web.archive.org) — Web archive histórico
- [arquivo.pt](https://arquivo.pt) — Arquivo nacional português
- [urltodomain.com](https://urltodomain.com) — Ferramenta para extrair/normalizar domínios de URLs`
        : `# Certificate Transparency and Internet Archive: Essential Tools for Ethical Hacking

Hello, network! 🫡

Today I'm sharing two powerful tools that every ethical hacker and security professional should know: **Certificate Transparency (CT)** and **Internet Archive**. When used together, they become a lethal combination for discovering forgotten assets, detecting exposures, and mapping attack surfaces.

## Why does this matter?

Imagine discovering a subdomain that your team forgot, or a certificate being issued for a domain you didn't even know existed. These are real scenarios that constantly happen in organizations, and that's exactly where these tools shine.

## Certificate Transparency: Your Certificate Radar

Certificate Transparency is a public audit system that records all SSL/TLS certificates issued by Certificate Authorities (CAs). Basically, whenever someone issues a certificate for a domain, that certificate is logged in public logs that anyone can query.

### Why monitor CT?

**Asset discovery (subdomains):** New certificates frequently include FQDNs and subdomains that don't appear in public DNS or were forgotten by the team. This is gold for attack/defense inventory.

**Detection of maliciously issued certificates:** Finding certificates that shouldn't exist for your organization can indicate CA error, phishing, or malicious activity. I've seen cases of certificates being issued for subdomains that no one in the company knew about!

**Real-time changes:** With real-time feeds, you can react quickly to new issuances, drastically reducing the exposure window.

## Tools you need to know

### Certstream (CaliDog) — The Real-Time Firehose

Certstream aggregates and streams certificates as they are logged, in stream format. Ideal for those who want a continuous feed and immediate reactions. If you need to detect something quickly, this is your tool.

![Certstream showing Certificate Transparency logs in real-time](/certstream-realtime.png)

As you can see in the image above, Certstream shows a list of certificates being issued in real-time, with complete details including domains, subdomains, and information from the CA that issued the certificate. This real-time visualization is perfect for quickly detecting anomalies.

🔗 **Link:** [certstream.calidog.io](https://certstream.calidog.io)

### crt.sh — The Search and History

crt.sh indexes logged certificates and is excellent for ad-hoc investigations. Throw in a domain and get historical records and subdomains linked to certificates. Very used for recon and historical auditing. It's like the Google of SSL certificates.

![crt.sh search results showing certificates for uol.com.br](/crt-sh-search.png)

The image shows how crt.sh presents a complete table with all certificates historically issued for a domain, including subdomains, issue dates, expiration, and the CA that issued it. It's amazing how many subdomains you can discover this way!

🔗 **Link:** [crt.sh](https://crt.sh)

### Meta / Facebook CT Tools — Search + Alerts

Meta offers a CT search interface and allows subscriptions/alerts to notify you when new certificates for a domain are detected. Very useful for continuous monitoring of assets you own.

🔗 **Link:** [developers.facebook.com/tools/ct](https://developers.facebook.com/tools/ct)

## Internet Archive: The History Nobody Remembers

The Internet Archive (archive.org) is much more than a museum of old pages. For those working with security, this history can reveal forgotten subdomains, old endpoints, exposed parameters, and even clues about deploys and infrastructure changes that don't appear in current scans.

![Internet Archive and Wayback Machine homepage](/internet-archive-homepage.png)

### Why is Archive.org relevant?

**URL and content history:** Removed or altered pages can contain endpoints, paths, or comments that give clues about old services and files. I've found \`.env\` files that were removed but remained in the history.

**Discovery of "hidden" assets:** Subdomains and paths that left traces in snapshots may no longer exist in DNS, but remain useful for matching evidence or finding forgotten surfaces.

**Temporal context:** Seeing when something was published/altered helps correlate events (deploys, releases, incidents). It's like having a time machine for your investigation.

### The CDX API: Extracting Complete History

The Internet Archive offers the CDX API (copy index), which allows querying URL history programmatically. A typical query would be:

\`\`\`
http://web.archive.org/cdx/search/cdx?url=*.targetdomain.com/*&output=txt&fl=original&collapse=urlkey
\`\`\`

What this does:
- \`url=*.targetdomain.com/*\` → searches all entries for the domain (includes subdomains and paths)
- \`output=txt\` → returns in plain text (easy to process)
- \`fl=original\` → returns only the original archived URL
- \`collapse=urlkey\` → removes duplicates by URL key

**But beware:** This query returns complete URLs with paths, parameters, query strings — everything mixed. If you want only domains and subdomains for a clean inventory, you need to filter this.

![Raw URL list extracted from Internet Archive CDX API](/archive-cdx-output.png)

As you can see in the image above, the CDX API output is a massive list of complete URLs with paths, parameters, query strings, and even encoded characters. It's a lot of information to process manually!

### urltodomain.com: Filtering and Normalizing URLs

This is where the magic happens! **urltodomain.com** is an essential tool that extracts and normalizes domains from URL lists.

**How the complete workflow works:**

1. **Extract URLs with CDX API:** You get all archived URLs for the target domain
2. **Paste into urltodomain.com:** The tool processes your URL list
3. **Get clean domains:** It returns only domains and subdomains, removing paths, parameters, query strings, fragments — everything that's not useful for asset inventory

![urltodomain.com result showing clean list of normalized domains](/urltodomain-result.png)

Look at the difference! After processing in urltodomain.com, you have a clean, organized list with just domains and subdomains. Much easier to work with!

**Why is this important?**

Without this normalization, you're left with a huge list of URLs like:
\`\`\`
https://subdomain.example.com/admin/login.php?id=123
https://subdomain.example.com/api/v1/users?page=2
https://other.example.com/complex/path/file.js
\`\`\`

With urltodomain.com, you simplify to:
\`\`\`
subdomain.example.com
other.example.com
\`\`\`

This facilitates:
- Aggregation and duplicate removal
- Comparison with current DNS inventory
- Creating a clean list for triage
- Correlation with other sources (CT logs, DNS, etc.)

🔗 **Link:** [urltodomain.com](https://urltodomain.com)

### Complement: arquivo.pt and Other National Archives

There are other repositories like arquivo.pt (Portuguese national archive) that may have different snapshots than the Internet Archive. In investigations, querying multiple web archives increases coverage and reduces false negatives.

🔗 **Links:**
- [web.archive.org](https://web.archive.org)
- [arquivo.pt](https://arquivo.pt)

## How to Use in Practice (Ethical Approach)

**⚠️ Important:** Always work within an ethical and legal framework. Do not execute intrusive tests without authorization.

### Complete Practical Investigation Workflow

**1. Initial Inventory (Authorized Recon)**
- Search your corporate domain in crt.sh to compile a list of certificates and names (subdomains) historically issued
- This gives an initial surface map

**2. History Extraction with CDX API**
- Use the Internet Archive CDX API to get all archived URLs for the target domain
- Save the result as a text file
- Example command:
  \`\`\`bash
  curl "http://web.archive.org/cdx/search/cdx?url=*.yourdomain.com/*&output=txt&fl=original&collapse=urlkey" > archived_urls.txt
  \`\`\`

**3. Normalization with urltodomain.com**
- Paste your URL list into urltodomain.com (or use the API if available)
- The tool will extract only domains and subdomains
- Export the clean domain list

**4. Real-Time Feed (Certstream)**
- Consume the Certstream feed filtering events that contain your domain
- Use for operational alerts on new issuances

**5. Correlation and Triage**
Compare extracted domains/subdomains with:
- Current DNS subdomain base (when authorized)
- Certificate Transparency logs (crt.sh)
- Real-time feed (Certstream)
- Internet Archive snapshots

**6. Manual Triage**
When a new certificate or old URL is detected, validate:
- Is it a legitimate expected certificate/URL?
- Does it belong to an authorized system?
- Does it contain unexpected domains/subdomains that require investigation?
- Does it appear together with certificates or mentions of sensitive services?

**7. Responsible Action**
If you find something suspicious:
- Open a communication channel (CSIRT, security team)
- Execute Responsible Disclosure if applicable
- Document everything for your team

## Practical Use Cases (Defensive)

✅ Discover forgotten services running on subdomains that don't appear in inventories

✅ Detect certificates issued by third parties that may allow phishing or interception

✅ Find old API endpoints that accept requests with dangerous parameters

✅ Audit data exposures on old pages (e.g., accidentally published .env files)

✅ Correlate certificate issuance with deploys — useful for monitoring infrastructure changes

✅ Map complete history of subdomains that existed but were removed from DNS

## Automation: What's Safe/Acceptable

✅ **Automate:** Collection via CDX API, normalization with urltodomain, alerts (webhook to SIEM), automatic ticket for security team

❌ **DON'T automate:** Intrusive tests (scans, brute force) without authorization

Automate only collection, normalization, triage, and notification. Leave any active investigation to authorized processes.

## Limitations and False Positives

⚠️ **Not every certificate means an active asset:** Many entries are from CAs, temporary subdomains, or certificates issued by third-party services

⚠️ **Variable coverage:** The Internet Archive doesn't index everything — some domains are less represented

⚠️ **CT logs may be delayed:** Propagation to certain tools varies by log/CA

⚠️ **False positives:** The presence of a URL in the Archive doesn't imply the service is active today. Use as a starting point, not as proof of exploitation

⚠️ **Normalization may lose context:** When using urltodomain, you lose information about specific paths that may be useful. Consider keeping both a complete version and a normalized one

## Quick Checklist

- [ ] Register critical domains in monitoring services (Meta CT, Cloudflare, etc.)
- [ ] Consume Certstream for real-time detection
- [ ] Run regular searches on crt.sh for historical auditing
- [ ] Extract URL list from CDX for your domains
- [ ] **Normalize URLs with urltodomain.com to get only domains/subdomains**
- [ ] Correlate with CT logs and current DNS inventory
- [ ] Prioritize uninventoried assets for manual triage
- [ ] Have a triage and Responsible Disclosure playbook
- [ ] Integrate alerts into your SIEM/issue tracker

## Conclusion

Certificate Transparency and Internet Archive are public and powerful sources for those who care about security. When used together and with the help of urltodomain.com for normalization, they allow discovering forgotten surfaces, detecting potential malicious issuances, and mapping asset history proactively.

The complete workflow (CDX → urltodomain → correlation with CT) is an essential technique in the arsenal of every security professional who takes attack surface mapping and proactive defense seriously.

Tools like crt.sh, Certstream, Meta CT tools, the Internet Archive CDX API, and urltodomain.com make this monitoring practical and scalable. Use responsibly: monitor, triage, and respond within an ethical and legal framework.

---

## References

- [Certstream / CaliDog](https://certstream.calidog.io) — Real-time feed
- [crt.sh](https://crt.sh) — Certificate search and history
- [Meta CT Tools](https://developers.facebook.com/tools/ct) — Certificate Transparency tools & subscriptions
- [Internet Archive / Wayback Machine](https://web.archive.org) — Historical web archive
- [arquivo.pt](https://arquivo.pt) — Portuguese national archive
- [urltodomain.com](https://urltodomain.com) — Tool to extract/normalize domains from URLs`,
      category: 'hacking',
      date: '2025-11-09',
      author: 'Pablo Sodré',
      images: ['/certstream-realtime.png', '/crt-sh-search.png', '/internet-archive-homepage.png', '/archive-cdx-output.png', '/urltodomain-result.png']
    },
    {
      id: 10,
      title: lang === 'pt' ? 'VirusTotal: Descobrindo Subdomínios e Mapeando Superfícies de Ataque' : 'VirusTotal: Discovering Subdomains and Mapping Attack Surfaces',
      excerpt: lang === 'pt'
        ? 'Aprenda como usar o VirusTotal para descobrir subdomínios, analisar arquivos, verificar URLs e mapear superfícies de ataque de forma ética.'
        : 'Learn how to use VirusTotal to discover subdomínios, analyze files, verify URLs, and map attack surfaces ethically.',
      content: lang === 'pt'
        ? `# VirusTotal: Descobrindo Subdomínios e Mapeando Superfícies de Ataque

Olá, rede! 🫡

Continuando nossa série sobre ferramentas essenciais para hacking ético, hoje vou falar sobre o **VirusTotal**. Se você trabalha com segurança, provavelmente já conhece essa plataforma, mas talvez não saiba todo o potencial que ela tem para descobrir subdomínios e mapear superfícies de ataque.

## O que é o VirusTotal?

O VirusTotal é uma plataforma gratuita que agrega múltiplos motores de antivírus e ferramentas de análise de segurança. Basicamente, você pode enviar arquivos, URLs, IPs e domínios para análise, e a plataforma retorna resultados de dezenas de scanners diferentes.

Mas aqui está o ponto que muitos não sabem: o VirusTotal também funciona como uma **base de dados massiva** de informações de segurança. Tudo que já foi analisado fica indexado e pesquisável. E é aí que a mágica acontece para quem faz recon e hacking ético.

## Por que o VirusTotal é útil para hacking ético?

**Descoberta de subdomínios:** O VirusTotal indexa milhões de análises de URLs e domínios. Quando alguém analisa uma URL de um subdomínio, essa informação fica disponível para pesquisa. Você pode descobrir subdomínios que não aparecem em DNS público ou que foram esquecidos.

**Histórico de análises:** Cada domínio, IP ou URL analisado mantém um histórico completo de quando foi analisado, por quem, e quais foram os resultados. Isso permite correlacionar eventos e entender padrões.

**Inteligência sobre ameaças:** Você pode ver quais arquivos, URLs ou IPs foram marcados como maliciosos, quando, e por quais motores. Isso é ouro para entender a superfície de ataque de uma organização.

**Passive DNS:** O VirusTotal mantém dados de Passive DNS, mostrando quais domínios resolveram para quais IPs ao longo do tempo. Isso é extremamente útil para mapear infraestrutura.

## Como Descobrir Subdomínios no VirusTotal

### Método 1: Busca por Domínio

A forma mais direta é buscar pelo domínio principal:

1. Acesse [virustotal.com](https://www.virustotal.com)
2. Vá na aba "Search"
3. Digite o domínio (ex: \`exemplo.com\`)
4. Selecione "Domain" no tipo de busca

O VirusTotal vai retornar:
- Todos os subdomínios que já foram analisados
- URLs relacionadas ao domínio
- IPs associados
- Arquivos relacionados
- Histórico de análises

### Método 2: Busca por IP

Se você conhece um IP da infraestrutura:

1. Busque pelo IP no VirusTotal
2. Veja todos os domínios que já resolveram para aquele IP
3. Isso pode revelar subdomínios e serviços relacionados

### Método 3: Busca por Hash de Certificado

Quando um certificado SSL/TLS é analisado, o VirusTotal indexa o hash do certificado. Você pode:

1. Buscar por hash de certificado
2. Ver todos os domínios que usam aquele certificado
3. Descobrir subdomínios que compartilham o mesmo certificado

### Método 4: API do VirusTotal

Para automação e buscas mais avançadas, o VirusTotal oferece uma API gratuita (com limites de rate):

\`\`\`bash
# Exemplo de busca por domínio via API
curl -X GET "https://www.virustotal.com/api/v3/domains/exemplo.com/subdomains" \\
  -H "x-apikey: YOUR_API_KEY"
\`\`\`

A API permite:
- Buscar subdomínios de um domínio
- Obter histórico de resoluções DNS
- Ver relacionamentos entre domínios, IPs e URLs
- Analisar arquivos e URLs programaticamente

## Outras Funcionalidades Úteis

### Análise de Arquivos

Você pode enviar arquivos suspeitos para análise e obter resultados de múltiplos antivírus. Mas além disso, o VirusTotal mostra:

- **Comportamento do arquivo:** O que o arquivo faz quando executado (sandbox)
- **Relacionamentos:** Quais URLs, IPs e domínios o arquivo se conecta
- **Metadados:** Informações sobre o arquivo que podem revelar pistas

### Análise de URLs

Ao analisar uma URL, você descobre:

- **Redirecionamentos:** Para onde a URL redireciona
- **Histórico:** Quando foi analisada anteriormente
- **Relacionamentos:** Quais arquivos foram baixados dessa URL
- **Reputação:** Se a URL foi marcada como maliciosa

### Passive DNS

O Passive DNS do VirusTotal é uma das funcionalidades mais poderosas:

- Veja o histórico completo de resoluções DNS de um domínio
- Descubra quais IPs um domínio já resolveu
- Veja quais domínios já resolveram para um IP específico
- Identifique padrões e mudanças na infraestrutura

## Casos de Uso Práticos (Éticos)

✅ **Descobrir subdomínios esquecidos** que não aparecem em DNS público mas foram analisados no passado

✅ **Mapear infraestrutura** correlacionando IPs, domínios e certificados

✅ **Identificar serviços relacionados** através de certificados compartilhados

✅ **Auditar histórico de exposições** vendo quando URLs ou arquivos foram marcados como suspeitos

✅ **Correlacionar eventos** entendendo quando e como ativos foram analisados

✅ **Validar descobertas** de outras ferramentas (CT logs, Internet Archive) cruzando dados

## Workflow Prático de Investigação

**1. Busca Inicial**
- Busque o domínio principal no VirusTotal
- Anote todos os subdomínios encontrados
- Veja os IPs associados

**2. Expansão por IP**
- Para cada IP interessante, busque no VirusTotal
- Veja quais outros domínios resolveram para aquele IP
- Identifique padrões de infraestrutura

**3. Análise de Certificados**
- Se encontrar certificados, busque pelo hash
- Veja todos os domínios que usam o mesmo certificado
- Descubra subdomínios relacionados

**4. Correlação com Outras Fontes**
- Compare com resultados de crt.sh (Certificate Transparency)
- Correlacione com dados do Internet Archive
- Valide descobertas cruzando múltiplas fontes

**5. Triagem e Validação**
- Priorize subdomínios que não aparecem em inventários
- Valide se os serviços ainda estão ativos
- Documente descobertas para sua equipe

## Limitações e Considerações

⚠️ **Cobertura dependente de análises:** O VirusTotal só mostra subdomínios que já foram analisados por alguém. Se um subdomínio nunca foi enviado para análise, ele não aparecerá.

⚠️ **Rate limits na API:** A API gratuita tem limites de requisições. Para uso intensivo, considere a API premium.

⚠️ **Dados podem estar desatualizados:** As informações são baseadas em análises passadas. Um subdomínio que aparece pode não estar mais ativo.

⚠️ **Falsos positivos:** Nem tudo que aparece no VirusTotal é relevante. Faça triagem manual.

⚠️ **Privacidade:** Lembre-se que ao analisar URLs ou arquivos, você está contribuindo para a base de dados pública. Use com responsabilidade.

## API do VirusTotal: Automação Ética

A API permite automatizar buscas e análises, mas sempre dentro de limites éticos:

✅ **Automatize:** Buscas por subdomínios, validação de descobertas, coleta de dados passivos

❌ **NÃO automatize:** Envio massivo de arquivos, análise de sistemas sem autorização, scraping agressivo

**Exemplo de uso ético da API:**

\`\`\`python
import requests

# Buscar subdomínios de um domínio
def buscar_subdominios(dominio, api_key):
    url = f"https://www.virustotal.com/api/v3/domains/{dominio}/subdomains"
    headers = {"x-apikey": api_key}
    response = requests.get(url, headers=headers)
    return response.json()

# Uso responsável: apenas para domínios que você tem autorização
subdominios = buscar_subdominios("seudominio.com", "sua_api_key")
\`\`\`

## Integração com Outras Ferramentas

O VirusTotal se complementa perfeitamente com outras ferramentas que já discutimos:

**VirusTotal + Certificate Transparency:**
- Use crt.sh para encontrar certificados
- Busque os hashes no VirusTotal para ver todos os domínios relacionados

**VirusTotal + Internet Archive:**
- Encontre URLs antigas no Archive
- Valide se essas URLs foram analisadas no VirusTotal
- Veja histórico de reputação

**VirusTotal + Passive DNS:**
- Use o Passive DNS do VirusTotal para mapear infraestrutura
- Correlacione com dados de outras fontes
- Crie um mapa completo de ativos

## Checklist Rápido

- [ ] Buscar domínio principal no VirusTotal
- [ ] Anotar todos os subdomínios descobertos
- [ ] Buscar IPs associados para expansão
- [ ] Analisar certificados e buscar por hash
- [ ] Usar Passive DNS para mapear histórico
- [ ] Correlacionar com outras fontes (CT, Archive)
- [ ] Validar descobertas manualmente
- [ ] Documentar para inventário de ativos
- [ ] Integrar com workflow de triagem

## Conclusão

O VirusTotal é muito mais que uma plataforma de análise de malware. Quando usado estrategicamente, ele se torna uma ferramenta poderosa para descobrir subdomínios, mapear infraestrutura e entender superfícies de ataque.

A combinação de análise de arquivos, URLs, Passive DNS e histórico de análises cria uma fonte rica de inteligência para profissionais de segurança. Quando integrado com outras ferramentas como Certificate Transparency e Internet Archive, o potencial de descoberta aumenta exponencialmente.

Use com responsabilidade, respeite os limites da API, e sempre trabalhe dentro de um framework ético e legal. O VirusTotal é uma ferramenta poderosa — aprenda a usá-la bem e ela vai se tornar parte essencial do seu arsenal de recon.

---

## Referências

- [VirusTotal](https://www.virustotal.com) — Plataforma principal
- [VirusTotal API Documentation](https://developers.virustotal.com/reference) — Documentação da API
- [VirusTotal Intelligence](https://www.virustotal.com/gui/intelligence-overview) — Recursos avançados (premium)`
        : `# VirusTotal: Discovering Subdomains and Mapping Attack Surfaces

Hello, network! 🫡

Continuing our series on essential tools for ethical hacking, today I'm talking about **VirusTotal**. If you work with security, you probably already know this platform, but you might not know all the potential it has for discovering subdomains and mapping attack surfaces.

## What is VirusTotal?

VirusTotal is a free platform that aggregates multiple antivirus engines and security analysis tools. Basically, you can submit files, URLs, IPs, and domains for analysis, and the platform returns results from dozens of different scanners.

But here's the point many don't know: VirusTotal also works as a **massive security information database**. Everything that has been analyzed is indexed and searchable. And that's where the magic happens for those doing recon and ethical hacking.

## Why is VirusTotal useful for ethical hacking?

**Subdomain discovery:** VirusTotal indexes millions of URL and domain analyses. When someone analyzes a URL from a subdomain, that information becomes available for search. You can discover subdomains that don't appear in public DNS or were forgotten.

**Analysis history:** Each domain, IP, or URL analyzed maintains a complete history of when it was analyzed, by whom, and what the results were. This allows correlating events and understanding patterns.

**Threat intelligence:** You can see which files, URLs, or IPs were marked as malicious, when, and by which engines. This is gold for understanding an organization's attack surface.

**Passive DNS:** VirusTotal maintains Passive DNS data, showing which domains resolved to which IPs over time. This is extremely useful for mapping infrastructure.

## How to Discover Subdomains on VirusTotal

### Method 1: Domain Search

The most direct way is to search by the main domain:

1. Access [virustotal.com](https://www.virustotal.com)
2. Go to the "Search" tab
3. Type the domain (e.g., \`example.com\`)
4. Select "Domain" as the search type

VirusTotal will return:
- All subdomains that have already been analyzed
- Related URLs to the domain
- Associated IPs
- Related files
- Analysis history

### Method 2: IP Search

If you know an IP from the infrastructure:

1. Search for the IP on VirusTotal
2. See all domains that have resolved to that IP
3. This can reveal subdomains and related services

### Method 3: Certificate Hash Search

When an SSL/TLS certificate is analyzed, VirusTotal indexes the certificate hash. You can:

1. Search by certificate hash
2. See all domains that use that certificate
3. Discover subdomains that share the same certificate

### Method 4: VirusTotal API

For automation and more advanced searches, VirusTotal offers a free API (with rate limits):

\`\`\`bash
# Example of domain search via API
curl -X GET "https://www.virustotal.com/api/v3/domains/example.com/subdomains" \\
  -H "x-apikey: YOUR_API_KEY"
\`\`\`

The API allows:
- Searching subdomains of a domain
- Getting DNS resolution history
- Seeing relationships between domains, IPs, and URLs
- Analyzing files and URLs programmatically

## Other Useful Features

### File Analysis

You can submit suspicious files for analysis and get results from multiple antiviruses. But beyond that, VirusTotal shows:

- **File behavior:** What the file does when executed (sandbox)
- **Relationships:** Which URLs, IPs, and domains the file connects to
- **Metadata:** Information about the file that can reveal clues

### URL Analysis

When analyzing a URL, you discover:

- **Redirects:** Where the URL redirects to
- **History:** When it was previously analyzed
- **Relationships:** Which files were downloaded from that URL
- **Reputation:** If the URL was marked as malicious

### Passive DNS

VirusTotal's Passive DNS is one of the most powerful features:

- See the complete DNS resolution history of a domain
- Discover which IPs a domain has resolved to
- See which domains have resolved to a specific IP
- Identify patterns and infrastructure changes

## Practical Use Cases (Ethical)

✅ **Discover forgotten subdomains** that don't appear in public DNS but were analyzed in the past

✅ **Map infrastructure** by correlating IPs, domains, and certificates

✅ **Identify related services** through shared certificates

✅ **Audit exposure history** by seeing when URLs or files were marked as suspicious

✅ **Correlate events** by understanding when and how assets were analyzed

✅ **Validate discoveries** from other tools (CT logs, Internet Archive) by cross-referencing data

## Practical Investigation Workflow

**1. Initial Search**
- Search the main domain on VirusTotal
- Note all subdomains found
- See associated IPs

**2. IP Expansion**
- For each interesting IP, search on VirusTotal
- See which other domains resolved to that IP
- Identify infrastructure patterns

**3. Certificate Analysis**
- If you find certificates, search by hash
- See all domains that use the same certificate
- Discover related subdomains

**4. Correlation with Other Sources**
- Compare with crt.sh results (Certificate Transparency)
- Correlate with Internet Archive data
- Validate discoveries by cross-referencing multiple sources

**5. Triage and Validation**
- Prioritize subdomains that don't appear in inventories
- Validate if services are still active
- Document discoveries for your team

## Limitations and Considerations

⚠️ **Coverage dependent on analyses:** VirusTotal only shows subdomains that have already been analyzed by someone. If a subdomain was never submitted for analysis, it won't appear.

⚠️ **API rate limits:** The free API has request limits. For intensive use, consider the premium API.

⚠️ **Data may be outdated:** Information is based on past analyses. A subdomain that appears may no longer be active.

⚠️ **False positives:** Not everything that appears on VirusTotal is relevant. Do manual triage.

⚠️ **Privacy:** Remember that by analyzing URLs or files, you're contributing to the public database. Use responsibly.

## VirusTotal API: Ethical Automation

The API allows automating searches and analyses, but always within ethical limits:

✅ **Automate:** Subdomain searches, discovery validation, passive data collection

❌ **DON'T automate:** Mass file submission, analysis of systems without authorization, aggressive scraping

**Example of ethical API usage:**

\`\`\`python
import requests

# Search subdomains of a domain
def search_subdomains(domain, api_key):
    url = f"https://www.virustotal.com/api/v3/domains/{domain}/subdomains"
    headers = {"x-apikey": api_key}
    response = requests.get(url, headers=headers)
    return response.json()

# Responsible use: only for domains you have authorization
subdomains = search_subdomains("yourdomain.com", "your_api_key")
\`\`\`

## Integration with Other Tools

VirusTotal complements perfectly with other tools we've already discussed:

**VirusTotal + Certificate Transparency:**
- Use crt.sh to find certificates
- Search the hashes on VirusTotal to see all related domains

**VirusTotal + Internet Archive:**
- Find old URLs in the Archive
- Validate if those URLs were analyzed on VirusTotal
- See reputation history

**VirusTotal + Passive DNS:**
- Use VirusTotal's Passive DNS to map infrastructure
- Correlate with data from other sources
- Create a complete asset map

## Quick Checklist

- [ ] Search main domain on VirusTotal
- [ ] Note all discovered subdomains
- [ ] Search associated IPs for expansion
- [ ] Analyze certificates and search by hash
- [ ] Use Passive DNS to map history
- [ ] Correlate with other sources (CT, Archive)
- [ ] Validate discoveries manually
- [ ] Document for asset inventory
- [ ] Integrate with triage workflow

## Conclusion

VirusTotal is much more than a malware analysis platform. When used strategically, it becomes a powerful tool for discovering subdomains, mapping infrastructure, and understanding attack surfaces.

The combination of file analysis, URLs, Passive DNS, and analysis history creates a rich source of intelligence for security professionals. When integrated with other tools like Certificate Transparency and Internet Archive, the discovery potential increases exponentially.

Use responsibly, respect API limits, and always work within an ethical and legal framework. VirusTotal is a powerful tool — learn to use it well and it will become an essential part of your recon arsenal.

---

## References

- [VirusTotal](https://www.virustotal.com) — Main platform
- [VirusTotal API Documentation](https://developers.virustotal.com/reference) — API documentation
- [VirusTotal Intelligence](https://www.virustotal.com/gui/intelligence-overview) — Advanced features (premium)`,
      category: 'hacking',
      date: '2025-11-10',
      author: 'Pablo Sodré',
      images: []
    },
    {
      id: 11,
      title: lang === 'pt' ? 'API REST: Módulo de Vídeos com Repository Pattern' : 'REST API: Videos Module with Repository Pattern',
      excerpt: lang === 'pt'
        ? 'Expandindo a API REST com um módulo de vídeos, utilizando o padrão Repository, UUIDs e connection pooling para performance e organização.'
        : 'Expanding the REST API with a videos module, using the Repository pattern, UUIDs, and connection pooling for performance and organization.',
      content: lang === 'pt'
        ? `# API REST: Módulo de Vídeos com Repository Pattern

Olá, rede! 🫡 

Continuando a evolução da nossa API REST!

No post anterior, mostrei a implementação de segurança com bcrypt, JWT e organização de rotas. Agora, expandi a aplicação criando o módulo de vídeos, seguindo os mesmos padrões de arquitetura e boas práticas!

## VideoRepository: Padrão Repository Pattern

Implementei o \`VideoRepository\` seguindo o mesmo padrão arquitetural usado no \`UserRepository\`, mantendo a consistência do código e facilitando a manutenção. O repositório fica responsável por todas as operações de banco de dados relacionadas a vídeos, mantendo a separação de responsabilidades.

![Código do VideoRepository com método create](/videorepository-create-code.png)

Como você pode ver na imagem acima, o \`VideoRepository\` implementa o método \`create\` que recebe os dados do vídeo, gera um UUID único para o \`video_id\`, e insere os dados no banco usando connection pooling. O código está organizado, tipado com TypeScript e seguindo as mesmas práticas do módulo de usuários.

## Nova Rota: Criação de Vídeos

Criei a rota \`/videos/create-video\` com método POST. A rota foi organizada em \`videos.routes.ts\`, seguindo a mesma estrutura das rotas de usuário. O \`server.ts\` agora importa e configura as rotas de vídeos também, mantendo tudo organizado e escalável!

## Geração Automática de UUID

Cada vídeo recebe automaticamente um \`video_id\` único gerado com UUID v4. Isso garante identificadores únicos e seguros para cada registro, sem depender de auto-incremento do banco.

## Connection Pooling para Performance

Utilizei o mesmo connection pooling do MySQL que já estava configurado. Isso garante que as conexões sejam gerenciadas de forma eficiente, reutilizando conexões existentes em vez de criar novas a cada requisição.

## Validação e Testes

Testei toda a implementação com Postman, enviando requisições POST com os dados do vídeo (user_id, title, description) e validando a persistência diretamente no MySQL Workbench. Os dados estão sendo inseridos corretamente no banco, com o UUID sendo gerado automaticamente e todas as informações persistidas!

![MySQL Workbench e Postman mostrando criação e validação de vídeo](/mysql-postman-video-creation.png)

A imagem mostra perfeitamente o workflow completo: no Postman (direita), envio uma requisição POST para \`/videos/create-video\` com os dados do vídeo, e recebo uma resposta de sucesso (200 OK). No MySQL Workbench (esquerda), posso verificar que o vídeo foi criado corretamente na tabela \`videos\`, com o \`video_id\` UUID gerado automaticamente (\`fa4d0d78-0f6a-4224-a00c-1a2e4f1202b3\`), o \`user_id\` associado, e os campos \`title\` e \`description\` persistidos.

Código organizado, fácil de manter e escalar. Cada novo módulo segue o mesmo padrão, facilitando muito o desenvolvimento! Seguimos por aqui até o final desse projeto.`
        : `# REST API: Videos Module with Repository Pattern

Hello, network! 🫡 

Continuing the evolution of our REST API!

In the previous post, I showed the implementation of security with bcrypt, JWT, and route organization. Now, I've expanded the application by creating the videos module, following the same architectural patterns and best practices!

## VideoRepository: Repository Pattern

I implemented the \`VideoRepository\` following the same architectural pattern used in the \`UserRepository\`, maintaining code consistency and facilitating maintenance. The repository is responsible for all database operations related to videos, maintaining separation of responsibilities.

![VideoRepository code with create method](/videorepository-create-code.png)

As you can see in the image above, the \`VideoRepository\` implements the \`create\` method that receives video data, generates a unique UUID for the \`video_id\`, and inserts the data into the database using connection pooling. The code is organized, typed with TypeScript, and following the same practices as the user module.

## New Route: Video Creation

I created the \`/videos/create-video\` route with a POST method. The route was organized in \`videos.routes.ts\`, following the same structure as the user routes. The \`server.ts\` now imports and configures the video routes as well, keeping everything organized and scalable!

## Automatic UUID Generation

Each video automatically receives a unique \`video_id\` generated with UUID v4. This ensures unique and secure identifiers for each record, without relying on database auto-increment.

## Connection Pooling for Performance

I used the same MySQL connection pooling that was already configured. This ensures that connections are managed efficiently, reusing existing connections instead of creating new ones for each request.

## Validation and Testing

I tested the entire implementation with Postman, sending POST requests with video data (user_id, title, description) and validating persistence directly in MySQL Workbench. The data is being correctly inserted into the database, with the UUID being automatically generated and all information persisted!

![MySQL Workbench and Postman showing video creation and validation](/mysql-postman-video-creation.png)

The image perfectly shows the complete workflow: in Postman (right), I send a POST request to \`/videos/create-video\` with video data, and receive a success response (200 OK). In MySQL Workbench (left), I can verify that the video was correctly created in the \`videos\` table, with the automatically generated UUID \`video_id\` (\`fa4d0d78-0f6a-4224-a00c-1a2e4f1202b3\`), the associated \`user_id\`, and the \`title\` and \`description\` fields persisted.

Organized code, easy to maintain and scale. Each new module follows the same pattern, greatly facilitating development! We continue here until the end of this project.`,
      category: 'code',
      date: '2025-11-11',
      author: 'Pablo Sodré',
      images: ['/videorepository-create-code.png', '/mysql-postman-video-creation.png']
    },
    {
      id: 12,
      title: lang === 'pt' ? 'API REST: Busca de Vídeos e Novas Funcionalidades' : 'REST API: Video Search and New Features',
      excerpt: lang === 'pt'
        ? 'Expandindo o módulo de vídeos com busca por usuário e busca flexível por título, mantendo os padrões de arquitetura e performance.'
        : 'Expanding the videos module with user-based search and flexible title search, maintaining architecture patterns and performance.',
      content: lang === 'pt'
        ? `# API REST: Busca de Vídeos e Novas Funcionalidades

Olá, rede! 🫡

Continuando a evolução da nossa API REST!

No post anterior, mostrei como implementei o módulo de vídeos usando o Repository Pattern. Agora, expandi as funcionalidades com novas operações de consulta e busca!

## Nova Funcionalidade: Buscar Vídeos por Usuário

Implementei o método \`getVideos\` no \`VideoRepository\`, que permite buscar todos os vídeos de um usuário específico através do \`user_id\`. Essa funcionalidade é essencial para exibir o conteúdo de cada usuário de forma organizada.

![Código do VideoRepository com métodos de busca](/videorepository-search-methods.png)

Como você pode ver na imagem acima, o método \`getVideos\` utiliza connection pooling para obter uma conexão do banco, executa uma query SQL para buscar todos os vídeos associados a um \`user_id\` específico, e retorna os resultados em formato JSON. A conexão é liberada corretamente após o uso, mantendo a eficiência do pool.

## Sistema de Busca com Query Parameters

Criei o método \`searchVideos\` que implementa uma busca flexível usando query parameters. A rota \`/videos/search?search=termo\` permite pesquisar vídeos por título usando o operador \`LIKE\` do SQL.

![Código das rotas de vídeo](/videos-routes-code.png)

A implementação é flexível: podemos trocar \`title\` por \`description\` na query SQL para buscar por descrição também! O método extrai o parâmetro \`search\` de \`request.query\` e usa uma busca parcial com \`LIKE\`, permitindo encontrar vídeos mesmo com correspondências parciais no título.

## Connection Pooling e Performance

Mantive o uso do connection pooling do MySQL em todas as operações. Cada método libera a conexão corretamente depois do uso, garantindo que o pool seja gerenciado de forma eficiente e que não haja vazamento de conexões.

## Organização e Padrões

Todas as novas rotas foram organizadas no \`videos.routes.ts\`, seguindo a mesma estrutura das rotas existentes. O código mantém a separação de responsabilidades, com o repositório cuidando das operações de banco e as rotas tratando apenas das requisições!

![Postman mostrando busca de vídeos](/postman-video-search.png)

A imagem acima mostra o teste completo da funcionalidade de busca no Postman. A requisição GET para \`/videos/search?search=node\` retorna com sucesso (200 OK) em 125ms, trazendo os vídeos que correspondem ao termo de busca. O JSON de resposta contém a mensagem de sucesso e um array com os vídeos encontrados, incluindo \`video_id\`, \`user_id\`, \`title\` e \`description\`.

## Validação e Testes

Testei todas as implementações com Postman, validando:

- ✅ Busca de vídeos por \`user_id\` específico
- ✅ Busca por título com query parameters
- ✅ Retorno correto dos dados em formato JSON
- ✅ Tratamento de erros adequado

A API está próxima de ficar completa! Cada nova feature segue os mesmos padrões, com organização, facilitando a manutenção e evolução do projeto.

Em breve, pretendo publicar o projeto completo com documentação e código aberto! 🚀`
        : `# REST API: Video Search and New Features

Hello, network! 🫡

Continuing the evolution of our REST API!

In the previous post, I showed how I implemented the videos module using the Repository Pattern. Now, I've expanded the functionality with new query and search operations!

## New Feature: Search Videos by User

I implemented the \`getVideos\` method in \`VideoRepository\`, which allows searching for all videos from a specific user through the \`user_id\`. This functionality is essential for displaying each user's content in an organized way.

![VideoRepository code with search methods](/videorepository-search-methods.png)

As you can see in the image above, the \`getVideos\` method uses connection pooling to get a database connection, executes a SQL query to fetch all videos associated with a specific \`user_id\`, and returns the results in JSON format. The connection is properly released after use, maintaining pool efficiency.

## Search System with Query Parameters

I created the \`searchVideos\` method that implements flexible search using query parameters. The route \`/videos/search?search=term\` allows searching videos by title using SQL's \`LIKE\` operator.

![Video routes code](/videos-routes-code.png)

The implementation is flexible: we can swap \`title\` for \`description\` in the SQL query to search by description as well! The method extracts the \`search\` parameter from \`request.query\` and uses a partial search with \`LIKE\`, allowing finding videos even with partial matches in the title.

## Connection Pooling and Performance

I maintained the use of MySQL connection pooling in all operations. Each method properly releases the connection after use, ensuring the pool is managed efficiently and there are no connection leaks.

## Organization and Patterns

All new routes were organized in \`videos.routes.ts\`, following the same structure as existing routes. The code maintains separation of responsibilities, with the repository handling database operations and routes handling only requests!

![Postman showing video search](/postman-video-search.png)

The image above shows the complete test of the search functionality in Postman. The GET request to \`/videos/search?search=node\` returns successfully (200 OK) in 125ms, bringing videos that match the search term. The response JSON contains the success message and an array with the found videos, including \`video_id\`, \`user_id\`, \`title\`, and \`description\`.

## Validation and Testing

I tested all implementations with Postman, validating:

- ✅ Search videos by specific \`user_id\`
- ✅ Search by title with query parameters
- ✅ Correct data return in JSON format
- ✅ Adequate error handling

The API is close to being complete! Each new feature follows the same patterns, with organization, facilitating maintenance and project evolution.

Soon, I plan to publish the complete project with documentation and open source code! 🚀`,
      category: 'code',
      date: '2025-11-12',
      author: 'Pablo Sodré',
      images: ['/videorepository-search-methods.png', '/videos-routes-code.png', '/postman-video-search.png']
    },
    {
      id: 13,
      title: lang === 'pt' ? 'Shodan, ZoomEye e Censys: Mapeando Superfície de Ataque de Forma Defensiva' : 'Shodan, ZoomEye and Censys: Mapping Attack Surface Defensively',
      excerpt: lang === 'pt'
        ? 'Aprenda a usar Shodan, ZoomEye e Censys para mapear superfície de ataque, manter inventário de ativos e detectar configurações inseguras de forma ética e responsável.'
        : 'Learn how to use Shodan, ZoomEye, and Censys to map attack surfaces, maintain asset inventory, and detect insecure configurations ethically and responsibly.',
      content: lang === 'pt'
        ? `# Shodan, ZoomEye e Censys: Mapeando Superfície de Ataque de Forma Defensiva

Olá, rede! 👋

Hoje quero falar sobre três ferramentas poderosas que uso de forma defensiva e responsável para mapear superfície de ataque e manter inventário de ativos: **Shodan**, **ZoomEye** e **Censys**. Também mostrarei alguns "atalhos" de busca (como o prefixo \`site:\`) que ajudam a encontrar domínios e serviços relacionados, sempre com foco em governança, monitoramento e triagem. 🚨🔎

⚠️ **Antes de qualquer coisa:** essas ferramentas podem ser usadas para pesquisa de segurança, mas também podem ser mal utilizadas. Nunca execute testes invasivos ou exploração sem autorização explícita do dono do ativo. Aqui o foco é inventário, detecção e defesa.

## O que são essas ferramentas?

### Shodan

O **Shodan** é um motor de busca para dispositivos conectados à internet (IoT, servidores, câmeras, bancos, etc.). Ele lista banners de serviços, portas abertas e metadados de dispositivos expostos publicamente na internet.

![Interface do Shodan mostrando resultados de busca](/shodan-search-results.png)

O Shodan é extremamente útil para descobrir serviços que estão expostos publicamente, mas que talvez não deveriam estar. Ele permite filtrar por hostname, organização, porta, serviço, localização geográfica e muito mais.

### ZoomEye

O **ZoomEye** é similar ao Shodan, com ênfase em varredura de serviços e identificação de aplicações web. Ele fornece resultados detalhados por aplicação e versão, sendo útil para identificar versões antigas de servidores web ou serviços públicos que precisam de atualização.

![Interface do ZoomEye mostrando resultados de aplicações](/zoomeye-app-results.png)

ZoomEye é particularmente eficaz para identificar tecnologias específicas, versões de software e configurações de serviços web expostos.

### Censys

O **Censys** foca em dados de certificação TLS/SSL, serviços e topologia da internet, com bons dados históricos e metadados de certificados. É excelente para descobrir subdomínios através de certificados SSL/TLS.

![Interface do Censys mostrando certificados e domínios](/censys-certificates.png)

Pesquisar por certificados que contenham seu domínio ajuda a descobrir subdomínios ou serviços TLS não documentados. Isso é valioso para achar domínios esquecidos que possuem certificados válidos.

## Para que usar: casos defensivos

### Inventory de ativos expostos

Descobrir serviços públicos que pertencem à sua organização (ou clientes) para reduzi-los ou proteger melhor. Muitas vezes, equipes não têm visibilidade completa de todos os serviços expostos publicamente.

### Detecção de configuração insegura

Identificar serviços com banners antigos, TLS fraco ou servidores deixados em ambiente de teste. Esses são alvos fáceis para atacantes e devem ser priorizados para correção.

### Monitoramento contínuo

Configurar alertas quando novos serviços aparecem na internet com seu domínio ou ASN. Isso permite detectar rapidamente se algo novo foi exposto acidentalmente.

### Resposta a incidentes

Entender rapidamente quais serviços públicos estão associados a um domínio/IP comprometido. Isso é crucial durante uma investigação de incidente de segurança.

### Auditoria e compliance

Gerar evidências de exposição para relatórios e correção. Ter documentação clara sobre o que está exposto ajuda em auditorias e processos de compliance.

## Buscas úteis e seguras

### 1. Shodan: consultas seguras para inventário

Exemplo conceitual (não intrusivo): filtrar por hostname ou organização para ver serviços visíveis:

\`\`\`
hostname:"dominio.com"
org:"Empresa X"
\`\`\`

Também dá para buscar por porta ou serviço para mapear o que está exposto publicamente (ex.: HTTP, SSH, RDP). Use para gerar uma lista de ativos e cross-check com seu inventário.

O Shodan também suporta o prefixo \`site:\` para buscar por domínio específico:

\`\`\`
site:dominio.com
site:sub.dominio.com
\`\`\`

### 2. Censys: buscar por certificados e domínios

Pesquisar por certificados que contenham seu domínio ajuda a descobrir subdomínios ou serviços TLS não documentados:

- Buscar por certificados com \`*.dominio.com\` na interface para mapear subdomínios que usam HTTPS.

Isso é valioso para achar domínios esquecidos que possuem certificados válidos.

O Censys também permite usar o prefixo \`site:\` para buscar diretamente por domínio:

\`\`\`
site:dominio.com
\`\`\`

### 3. ZoomEye: panorama de aplicações

ZoomEye fornece resultados por aplicação/versão; útil para identificar versões antigas de servidores web ou serviços públicos que precisam de atualização.

Assim como as outras ferramentas, o ZoomEye também suporta o prefixo \`site:\` para buscar por domínio:

\`\`\`
site:dominio.com
\`\`\`

## Workflow defensivo prático

Seguindo um workflow estruturado, você pode usar essas ferramentas de forma eficiente e responsável:

### 1. Inventário inicial

Rodar consultas usando \`site:dominio.com\` e outros filtros nas três plataformas (Shodan, ZoomEye, Censys) para compilar subdomínios e IPs. Documente tudo em uma planilha ou ferramenta de gestão de ativos.

### 2. Correlacionar

Cruzar resultados com CMDB/asset inventory / DNS interno. Identifique discrepâncias: serviços que aparecem nas buscas mas não estão no inventário oficial.

### 3. Priorizar

Identificar serviços expostos que não deveriam existir (painéis administrativos, bancos de dados, servidores de desenvolvimento). Classifique por criticidade e risco.

### 4. Notificar time responsável

Abrir ticket com contexto (quem é responsável, qual evidência foi encontrada, qual o risco). Inclua screenshots e links para as buscas realizadas.

### 5. Monitorar

Cadastrar consultas recorrentes e alertas (quando algo novo aparecer). Configure notificações automáticas nas plataformas quando possível.

### 6. Remediação e validação

Corrigir o problema e revalidar presença pública. Após a correção, execute novamente as buscas para confirmar que o serviço não está mais exposto.

## Conclusão

Shodan, ZoomEye e Censys são ferramentas poderosas para mapear superfície de ataque e manter inventário de ativos. Quando usadas de forma defensiva e responsável, elas são essenciais para equipes de segurança que querem ter visibilidade completa de sua infraestrutura exposta.

O segredo está em usar essas ferramentas como parte de um processo estruturado de governança e monitoramento, sempre com foco em proteção e não em exploração. Combine-as com outras técnicas (como Certificate Transparency e Internet Archive) para ter uma visão completa da superfície de ataque.

Lembre-se: segurança é sobre proteção, não sobre exploração. Use essas ferramentas para defender, não para atacar. 🛡️`
        : `# Shodan, ZoomEye and Censys: Mapping Attack Surface Defensively

Hello, network! 👋

Today I want to talk about three powerful tools I use defensively and responsibly to map attack surfaces and maintain asset inventory: **Shodan**, **ZoomEye**, and **Censys**. I'll also show some search "shortcuts" (like the \`site:\` prefix) that help find related domains and services, always focusing on governance, monitoring, and triage. 🚨🔎

⚠️ **Before anything:** these tools can be used for security research, but they can also be misused. Never execute invasive tests or exploitation without explicit authorization from the asset owner. Here the focus is inventory, detection, and defense.

## What are these tools?

### Shodan

**Shodan** is a search engine for internet-connected devices (IoT, servers, cameras, banks, etc.). It lists service banners, open ports, and metadata from devices exposed publicly on the internet.

![Shodan interface showing search results](/shodan-search-results.png)

Shodan is extremely useful for discovering services that are publicly exposed but perhaps shouldn't be. It allows filtering by hostname, organization, port, service, geographic location, and much more.

### ZoomEye

**ZoomEye** is similar to Shodan, with emphasis on service scanning and web application identification. It provides detailed results by application and version, useful for identifying old versions of web servers or public services that need updating.

![ZoomEye interface showing application results](/zoomeye-app-results.png)

ZoomEye is particularly effective for identifying specific technologies, software versions, and configurations of exposed web services.

### Censys

**Censys** focuses on TLS/SSL certification data, services, and internet topology, with good historical data and certificate metadata. It's excellent for discovering subdomains through SSL/TLS certificates.

![Censys interface showing certificates and domains](/censys-certificates.png)

Searching for certificates containing your domain helps discover subdomains or undocumented TLS services. This is valuable for finding forgotten domains that have valid certificates.

## What to use them for: defensive cases

### Exposed asset inventory

Discover public services that belong to your organization (or clients) to reduce or better protect them. Often, teams don't have complete visibility of all publicly exposed services.

### Insecure configuration detection

Identify services with old banners, weak TLS, or servers left in test environments. These are easy targets for attackers and should be prioritized for correction.

### Continuous monitoring

Set up alerts when new services appear on the internet with your domain or ASN. This allows quickly detecting if something new was accidentally exposed.

### Incident response

Quickly understand which public services are associated with a compromised domain/IP. This is crucial during a security incident investigation.

### Audit and compliance

Generate exposure evidence for reports and correction. Having clear documentation about what's exposed helps in audits and compliance processes.

## Useful and safe searches

### 1. Shodan: safe queries for inventory

Conceptual example (non-intrusive): filter by hostname or organization to see visible services:

\`\`\`
hostname:"domain.com"
org:"Company X"
\`\`\`

You can also search by port or service to map what's publicly exposed (e.g., HTTP, SSH, RDP). Use to generate an asset list and cross-check with your inventory.

Shodan also supports the \`site:\` prefix to search for specific domains:

\`\`\`
site:domain.com
site:sub.domain.com
\`\`\`

### 2. Censys: search for certificates and domains

Searching for certificates containing your domain helps discover subdomains or undocumented TLS services:

- Search for certificates with \`*.domain.com\` in the interface to map subdomains using HTTPS.

This is valuable for finding forgotten domains that have valid certificates.

Censys also allows using the \`site:\` prefix to search directly by domain:

\`\`\`
site:domain.com
\`\`\`

### 3. ZoomEye: application overview

ZoomEye provides results by application/version; useful for identifying old versions of web servers or public services that need updating.

Like the other tools, ZoomEye also supports the \`site:\` prefix to search by domain:

\`\`\`
site:domain.com
\`\`\`

## Practical defensive workflow

Following a structured workflow, you can use these tools efficiently and responsibly:

### 1. Initial inventory

Run queries using \`site:domain.com\` and other filters on the three platforms (Shodan, ZoomEye, Censys) to compile subdomains and IPs. Document everything in a spreadsheet or asset management tool.

### 2. Correlate

Cross-reference results with CMDB/asset inventory / internal DNS. Identify discrepancies: services that appear in searches but aren't in the official inventory.

### 3. Prioritize

Identify exposed services that shouldn't exist (administrative panels, databases, development servers). Classify by criticality and risk.

### 4. Notify responsible team

Open a ticket with context (who is responsible, what evidence was found, what the risk is). Include screenshots and links to the searches performed.

### 5. Monitor

Register recurring queries and alerts (when something new appears). Configure automatic notifications on platforms when possible.

### 6. Remediation and validation

Fix the problem and revalidate public presence. After correction, run searches again to confirm the service is no longer exposed.

## Conclusion

Shodan, ZoomEye, and Censys are powerful tools for mapping attack surfaces and maintaining asset inventory. When used defensively and responsibly, they are essential for security teams that want complete visibility of their exposed infrastructure.

The secret is to use these tools as part of a structured governance and monitoring process, always focusing on protection and not exploitation. Combine them with other techniques (like Certificate Transparency and Internet Archive) to have a complete view of the attack surface.

Remember: security is about protection, not exploitation. Use these tools to defend, not to attack. 🛡️`,
      category: 'hacking',
      date: '2025-11-13',
      author: 'Pablo Sodré',
      images: ['/shodan-search-results.png', '/zoomeye-app-results.png', '/censys-certificates.png']
    },
    {
      id: 14,
      title: lang === 'pt' ? 'API REST: Autenticação JWT e Segurança com Variáveis de Ambiente' : 'REST API: JWT Authentication and Security with Environment Variables',
      excerpt: lang === 'pt'
        ? 'Implementação de autenticação JWT, proteção de rotas com middleware e segurança com variáveis de ambiente em uma API REST em produção.'
        : 'Implementation of JWT authentication, route protection with middleware, and security with environment variables in a production REST API.',
      content: lang === 'pt'
        ? `# API REST: Autenticação JWT e Segurança com Variáveis de Ambiente

Olá, rede! 🫡

Continuando a evolução da nossa API REST!

No post anterior, mostrei como implementei funcionalidades de busca e consulta de vídeos. Agora, adicionei segurança e boas práticas essenciais para uma API em produção!

## Nova Funcionalidade: Sistema de Autenticação JWT

Implementei um middleware de autenticação usando JSON Web Tokens (JWT). O middleware \`login\` verifica o token enviado no header \`Authorization\` de cada requisição protegida. Quando o usuário faz login através da rota \`/user/sign-in\`, recebe um token JWT válido por 1 hora, que deve ser enviado nas requisições subsequentes.

![Postman mostrando login com JWT retornando token](/postman-jwt-login.png)

## Proteção de Rotas com Middleware

Apliquei o middleware de autenticação nas rotas de vídeos que requerem autenticação. As rotas \`/videos/create-video\` e \`/videos/get-videos\` agora estão protegidas, agora apenas usuários autenticados podem criar ou listar vídeos. A implementação é flexível: você pode facilmente adicionar ou remover proteção em qualquer rota!

## Segurança com Variáveis de Ambiente

Migrei todas as configurações sensíveis para variáveis de ambiente usando o pacote \`dotenv\`. Agora, credenciais do banco de dados (usuário, senha, host, porta), nome do banco e a chave secreta do JWT estão armazenadas no arquivo \`.env\`, que não é versionado no Git. Isso garante que informações sensíveis não sejam expostas no código!

![Configuração do pool MySQL com variáveis de ambiente](/mysql-dotenv-config.png)

A configuração do pool de conexão MySQL agora utiliza variáveis de ambiente:

\`\`\`typescript
const pool = mysql.createPool({
  "user": process.env.USER_DATABASE,
  "password": process.env.PASSWORD_DATABASE,
  "database": process.env.DATABASE,
  "host": process.env.HOST_DATABASE,
  "port": parseInt(process.env.PORT_DATABASE as string)
})
\`\`\`

## Organização e Padrões

O middleware foi organizado na pasta \`middleware/\`, seguindo a estrutura do projeto. A verificação do token é feita de forma centralizada, facilitando manutenção e reutilização. O código mantém a separação de responsabilidades, com o middleware cuidando da autenticação e as rotas focadas na lógica de negócio!

## Validação e Testes

Testei todas as implementações com Postman, validando:
- Geração de token JWT no login
- Proteção de rotas com middleware
- Rejeição de requisições sem token ou com token inválido
- Carregamento correto das variáveis de ambiente
- Funcionamento adequado de todas as rotas protegidas

![Postman mostrando criação de usuário](/postman-user-signup.png)

Cada nova feature segue os mesmos padrões de segurança e organização, facilitando a manutenção e evolução do projeto.

Em breve, pretendo publicar o projeto completo com documentação e código aberto! 🚀`
        : `# REST API: JWT Authentication and Security with Environment Variables

Hello, network! 🫡

Continuing the evolution of our REST API!

In the previous post, I showed how I implemented video search and query features. Now, I've added security and essential best practices for a production API!

## New Feature: JWT Authentication System

I implemented an authentication middleware using JSON Web Tokens (JWT). The \`login\` middleware verifies the token sent in the \`Authorization\` header of each protected request. When a user logs in through the \`/user/sign-in\` route, they receive a JWT token valid for 1 hour, which must be sent in subsequent requests.

![Postman showing login with JWT returning token](/postman-jwt-login.png)

## Route Protection with Middleware

I applied the authentication middleware to video routes that require authentication. The routes \`/videos/create-video\` and \`/videos/get-videos\` are now protected, so only authenticated users can create or list videos. The implementation is flexible: you can easily add or remove protection on any route!

## Security with Environment Variables

I migrated all sensitive configurations to environment variables using the \`dotenv\` package. Now, database credentials (user, password, host, port), database name, and the JWT secret key are stored in the \`.env\` file, which is not versioned in Git. This ensures that sensitive information is not exposed in the code!

![MySQL pool configuration with environment variables](/mysql-dotenv-config.png)

The MySQL connection pool configuration now uses environment variables:

\`\`\`typescript
const pool = mysql.createPool({
  "user": process.env.USER_DATABASE,
  "password": process.env.PASSWORD_DATABASE,
  "database": process.env.DATABASE,
  "host": process.env.HOST_DATABASE,
  "port": parseInt(process.env.PORT_DATABASE as string)
})
\`\`\`

## Organization and Standards

The middleware was organized in the \`middleware/\` folder, following the project structure. Token verification is done centrally, facilitating maintenance and reuse. The code maintains separation of concerns, with the middleware handling authentication and routes focused on business logic!

## Validation and Testing

I tested all implementations with Postman, validating:
- JWT token generation on login
- Route protection with middleware
- Rejection of requests without token or with invalid token
- Correct loading of environment variables
- Proper functioning of all protected routes

![Postman showing user creation](/postman-user-signup.png)

Each new feature follows the same security and organization standards, facilitating maintenance and project evolution.

Soon, I plan to publish the complete project with documentation and open source code! 🚀`,
      category: 'code',
      date: '2025-11-14',
      author: 'Pablo Sodré',
      images: ['/postman-jwt-login.png', '/mysql-dotenv-config.png', '/postman-user-signup.png']
    }
  ];
};
