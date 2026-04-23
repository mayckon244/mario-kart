const players = [
  {
    NOME: "Frodo",
    AGILIDADE: 4,
    MAGIA: 5,
    FORCA: 2,
    PONTOS: 0,
  },
  {
    NOME: "Legolas",
    AGILIDADE: 5,
    MAGIA: 4,
    FORCA: 3,
    PONTOS: 0,
  },
  {
    NOME: "Gimli",
    AGILIDADE: 2,
    MAGIA: 1,
    FORCA: 5,
    PONTOS: 0,
  },
  {
    NOME: "Aragorn",
    AGILIDADE: 4,
    MAGIA: 2,
    FORCA: 5,
    PONTOS: 0,
  },
  {
    NOME: "Gandalf",
    AGILIDADE: 3,
    MAGIA: 6,
    FORCA: 4,
    PONTOS: 0,
  },
  {
    NOME: "Sauron",
    AGILIDADE: 2,
    MAGIA: 6,
    FORCA: 6,
    PONTOS: 0,
  },
];

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function getRandomEnvironment() {
  const places = [
    "🌿 O Condado",
    "🌲 Floresta das Trevas",
    "⛰️ Minas de Moria",
    "🏰 Minas Tirith",
    "🌋 Mordor",
    "🗼 Isengard",
    "🌊 Valfenda",
  ];
  return places[Math.floor(Math.random() * places.length)];
}

function getRandomChallenge() {
  const challenges = ["CORRIDA", "FEITICO", "BATALHA"];
  return challenges[Math.floor(Math.random() * challenges.length)];
}

function playRound(player1, player2, challenge) {
  const dice1 = rollDice();
  const dice2 = rollDice();

  let total1 = 0;
  let total2 = 0;

  if (challenge === "CORRIDA") {
    total1 = dice1 + player1.AGILIDADE;
    total2 = dice2 + player2.AGILIDADE;
  }

  if (challenge === "FEITICO") {
    total1 = dice1 + player1.MAGIA;
    total2 = dice2 + player2.MAGIA;
  }

  if (challenge === "BATALHA") {
    total1 = dice1 + player1.FORCA;
    total2 = dice2 + player2.FORCA;
  }

  console.log(`🎬 Cenário: ${getRandomEnvironment()}`);
  console.log(`🎯 Desafio: ${challenge}`);
  console.log(`${player1.NOME} 🎲 ${dice1} = ${total1}`);
  console.log(`${player2.NOME} 🎲 ${dice2} = ${total2}`);

  if (total1 > total2) {
    if (challenge === "BATALHA") {
      player2.PONTOS = Math.max(0, player2.PONTOS - 1);
      console.log(`⚔️ ${player1.NOME} venceu a batalha!`);
    } else {
      player1.PONTOS++;
      console.log(`✅ ${player1.NOME} venceu o desafio!`);
    }
  }

  if (total2 > total1) {
    if (challenge === "BATALHA") {
      player1.PONTOS = Math.max(0, player1.PONTOS - 1);
      console.log(`⚔️ ${player2.NOME} venceu a batalha!`);
    } else {
      player2.PONTOS++;
      console.log(`✅ ${player2.NOME} venceu o desafio!`);
    }
  }

  if (total1 === total2) {
    console.log("⚖️ Empate!");
  }

  console.log("");
}

function startJourney(player1, player2) {
  console.log(`🧙 Jornada entre ${player1.NOME} e ${player2.NOME}\n`);

  for (let round = 1; round <= 5; round++) {
    console.log(`=== 🌍 Etapa ${round} ===`);
    const challenge = getRandomChallenge();
    playRound(player1, player2, challenge);

    console.log(`📊 Pontuação`);
    console.log(`${player1.NOME}: ${player1.PONTOS}`);
    console.log(`${player2.NOME}: ${player2.PONTOS}\n`);
  }

  console.log("🏆 RESULTADO FINAL");

  if (player1.PONTOS > player2.PONTOS) {
    console.log(`👑 ${player1.NOME} venceu a jornada da Terra-média!`);
  } else if (player2.PONTOS > player1.PONTOS) {
    console.log(`👑 ${player2.NOME} venceu a jornada da Terra-média!`);
  } else {
    console.log("🤝 A jornada terminou empatada!");
  }
}

// Exemplo: Gandalf vs Sauron
startJourney(players[4], players[5]);
