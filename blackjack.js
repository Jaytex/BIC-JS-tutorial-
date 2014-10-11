/*Kevin's Blackjack code */

var cardValues = '23456789TJQKA'.split('');
var cardSuit = 'SCHD'.split('');
var deck = [];

cardValues.forEach(function(type) {
  cardSuit.forEach(function(suit) {
    deck.push(type + suit);
  });
});

function createDeck() {
  return {
    deck: deck.slice(0),
    deal: function() {
      var cardPosition = Math.floor(Math.random() * this.deck.length);
      var card = deck[cardPosition];
      this.deck.splice(cardPosition, 1);    
      return card;  
    },
    dealTwo: function() {
      var cards = [];
      cards.push(this.deal());
      cards.push(this.deal());
      return cards;
    }
  };
}

function createPlayer(deck) {
  return {
    deck: deck,
    hand: [],
    stopped: false,
    start: function() {
      this.hand = this.deck.dealTwo();
    },
    hit: function() {
      this.hand.push(this.deck.deal());
    },
    score: function() {
      var score = 0;
      this.hand.forEach(function(card) {
        var cardValue = card.charAt(0);
        var cardScore = parseInt(cardValue);
        if (!isNaN(cardScore)) {
          score += cardScore;
        } else if (cardValue === 'A') {
          score += 11;
        } else {
          score += 10;
        }
      });
      return score;    
    },
    stop: function() {
      this.stopped = true;
    } 
  }
}

function createGame() {
  var deck = createDeck();
  var player = createPlayer(deck);
  var dealer = createPlayer(deck);
  player.start();
  dealer.start();
  while (player.score() < 21 && player.stopped != true) {
    var input = confirm("Do you want to hit");
    if (input == true) {
      player.hit();
      console.log(player.hand);
    } else {
      player.stop();
    }
  }
  console.log(player.score());
}

createGame();
