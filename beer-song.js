const Beer = {
  nextBottleCount: function(bottleCount) {
    return bottleCount - 1;
  },

  bottlePhrase: function(bottleCount) {
    if(bottleCount == 1) {
      return `${bottleCount} bottle`;
    } else if(bottleCount == 0)
      return `no more bottles`;
    else {
      return `${bottleCount} bottles`;
    }
  },

  bottlePronoun: function(bottleCount) {
    if(bottleCount == 1) {
      return `it`;
    } else {
      return `one`;
    }
  },

  verse: function(bottleCount) {
    return `${this.bottlePhrase(bottleCount)} of beer on the wall, ${this.bottlePhrase(bottleCount)} of beer.
Take ${this.bottlePronoun(bottleCount)} down and pass it around, ${this.bottlePhrase(this.nextBottleCount(bottleCount))} of beer on the wall.
`;
  }
}

export { Beer }
