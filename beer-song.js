const Beer = {
  nextBottleCount: function(bottleCount) {
    if(bottleCount == 0) {
      return `99`;
    } else {
      return bottleCount - 1;
    }
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

  shareOrBuy: function(bottleCount) {
    if(bottleCount == 0) {
      return `Go to the store and buy some more`;
    } else {
      return `Take ${this.bottlePronoun(bottleCount)} down and pass it around`;
    }
  },

  capitalizeFirstLetter: function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  verse: function(bottleCount) {
    return `${this.capitalizeFirstLetter(this.bottlePhrase(bottleCount))} of beer on the wall, ${this.bottlePhrase(bottleCount)} of beer.
${this.shareOrBuy(bottleCount)}, ${this.bottlePhrase(this.nextBottleCount(bottleCount))} of beer on the wall.
`;
  }
}

export { Beer }
