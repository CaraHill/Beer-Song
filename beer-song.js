const Beer = {
  nextBottleCount: function(bottleCount) {
    if(bottleCount == 0) { return `99`; }
    return bottleCount - 1;
  },

  bottlePhrase: function(bottleCount) {
    if(bottleCount == 1) { return `${bottleCount} bottle`; }
    if(bottleCount == 0) { return `no more bottles`; }
    return `${bottleCount} bottles`;
  },

  bottlePronoun: function(bottleCount) {
    if(bottleCount == 1) { return `it`; }
    return `one`;
  },

  shareOrBuy: function(bottleCount) {
    if(bottleCount == 0) { return `Go to the store and buy some more`; }
    return `Take ${this.bottlePronoun(bottleCount)} down and pass it around`;
  },

  capitalizeFirstLetter: function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  verse: function(bottleCount) {
    return `${this.capitalizeFirstLetter(this.bottlePhrase(bottleCount))} of beer on the wall, ${this.bottlePhrase(bottleCount)} of beer.
${this.shareOrBuy(bottleCount)}, ${this.bottlePhrase(this.nextBottleCount(bottleCount))} of beer on the wall.
`;
  },

  sing: function(_bottleCount, _endCount) {
    let song = []
    let bottleCount = _bottleCount || 99;
    let endCount = _endCount || 0;

    for ( let i = bottleCount; i >= endCount; i-- ) {
      if(i > endCount) {
        song.push(this.verse(i) + `\n`);
      } else {
        song.push(this.verse(i));
      }
    }

    return song.join("");
  }
}

export { Beer }
