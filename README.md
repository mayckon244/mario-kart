# 🏎 Mario Kart Simulator

Simulador de corrida inspirado em Mario Kart desenvolvido com Node.js, focado em lógica de programação, sistema de turnos e mecânicas de batalha via terminal.

---

## 📌 Sobre o Projeto

O **Mario Kart Simulator** é um projeto desenvolvido para simular corridas entre personagens inspirados no universo Mario Kart utilizando apenas JavaScript no ambiente Node.js.

O objetivo principal do projeto é praticar:

- lógica de programação,
- manipulação de objetos,
- modularização,
- regras de jogo,
- geração de eventos aleatórios,
- estruturação de aplicações Node.js.

Toda a experiência acontece diretamente no terminal, priorizando a implementação da lógica do jogo em vez de interface gráfica.

---

## 🚀 Tecnologias Utilizadas

### Backend
- Node.js
- JavaScript ES6+

### Ferramentas
- Git
- GitHub

---

## 🎮 Como o Jogo Funciona

Cada personagem possui atributos próprios:

- 🏁 Velocidade
- 🎯 Manobrabilidade
- 💥 Poder

Durante cada rodada:

1. Um tipo de desafio é sorteado
2. Os jogadores disputam utilizando seus atributos
3. O vencedor ganha pontos
4. Eventos especiais podem alterar o resultado
5. Ao final das rodadas, o campeão é definido

---

## 📂 Estrutura do Projeto

```bash
mario-kart/
│
├── src/
│   ├── index.js
│   ├── players/
│   ├── services/
│   ├── utils/
│   └── game/
│
├── package.json
└── README.md
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/mayckon244/mario-kart.git
```

Acesse a pasta do projeto:

```bash
cd mario-kart
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o Projeto

Execute o comando abaixo no terminal:

```bash
node src/index.js
```

---

## 📸 Preview

### Exemplo de execução:

```bash
🏁 Corrida iniciada!

Mario 🎲 rolou 6
Bowser 🎲 rolou 4

Mario venceu a rodada!

----------------------------

🏆 Resultado Final:

Mario: 5 pontos
Bowser: 3 pontos

🥇 Mario é o grande vencedor!
```

---

## 🔥 Funcionalidades

- Sistema de corrida por turnos
- Personagens com atributos diferentes
- Eventos aleatórios
- Sistema de pontuação
- Simulação automática de partidas
- Estrutura modular em JavaScript

---

## 🛠 Melhorias Futuras

- Interface gráfica
- Multiplayer local
- Sistema de ranking
- Salvamento de partidas
- Novos personagens
- Sistema de itens estilo Mario Kart
- Inteligência artificial para bots

---

## 📚 Aprendizados

Este projeto foi importante para aprofundar conhecimentos em:

- JavaScript moderno
- Node.js
- Estruturação de projetos
- Lógica de programação
- Modularização
- Manipulação de objetos
- Organização de código

---

## 📈 Possíveis Evoluções Técnicas

Futuramente o projeto pode evoluir para:

- API REST para gerenciamento de partidas
- Banco de dados para ranking
- Frontend em React
- WebSocket para partidas em tempo real
- Dockerização da aplicação
- Deploy online

---

## 👨‍💻 Autor

### Mayckon

GitHub:
https://github.com/mayckon244

---

## ⭐ Contribuição

Sinta-se livre para abrir issues, sugerir melhorias ou criar forks do projeto.

---

## 📄 Licença

Este projeto está sob a licença MIT.
