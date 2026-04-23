# 🧙‍♂️ Jornada na Terra-média

Um mini jogo em JavaScript inspirado no universo de fantasia, onde personagens competem em desafios aleatórios como corrida, magia e batalha ⚔️

## 📜 Descrição

Este projeto simula uma jornada entre dois personagens da Terra-média. A cada rodada, um desafio aleatório é escolhido e os jogadores competem utilizando seus atributos:

* **Agilidade** 🏃 → usada em desafios de corrida
* **Magia** ✨ → usada em desafios de feitiço
* **Força** 💪 → usada em batalhas

O resultado é influenciado por um dado 🎲 e pelos atributos de cada personagem.

---

## 🎮 Personagens

Os personagens disponíveis no jogo são:

* Frodo
* Legolas
* Gimli
* Aragorn
* Gandalf
* Sauron

Cada personagem possui atributos únicos:

```
{
  NOME: "Gandalf",
  AGILIDADE: 3,
  MAGIA: 6,
  FORCA: 4,
  PONTOS: 0
}
```

---

## ⚙️ Como funciona

1. O jogo escolhe um desafio aleatório:

   * CORRIDA
   * FEITICO
   * BATALHA

2. Cada jogador rola um dado (1 a 6)

3. O valor do dado é somado ao atributo correspondente

4. O jogador com maior valor:

   * Ganha **1 ponto** em desafios normais
   * Remove **1 ponto do adversário** em batalhas (mínimo 0)

5. O jogo acontece em **5 rodadas**

6. Quem tiver mais pontos no final vence 🏆

---

## 🗺️ Cenários

Cada rodada ocorre em um cenário aleatório:

* 🌿 O Condado
* 🌲 Floresta das Trevas
* ⛰️ Minas de Moria
* 🏰 Minas Tirith
* 🌋 Mordor
* 🗼 Isengard
* 🌊 Valfenda

---

## ▶️ Como executar

1. Certifique-se de ter o Node.js instalado
2. Salve o código em um arquivo, por exemplo: `game.js`
3. Execute no terminal:

```
node game.js
```

---

## 🔄 Exemplo de execução

```
🧙 Jornada entre Gandalf e Sauron

=== 🌍 Etapa 1 ===
🎬 Cenário: 🌋 Mordor
🎯 Desafio: BATALHA
Gandalf 🎲 4 = 8
Sauron 🎲 5 = 11
⚔️ Sauron venceu a batalha!
```

---

## 🧠 Possíveis melhorias

* Interface gráfica (web ou CLI interativa)
* Permitir escolha de personagens pelo usuário
* Sistema de níveis ou evolução
* Mais tipos de desafios
* Multiplayer

---

## 📄 Licença

Este projeto é livre para uso e modificação.
