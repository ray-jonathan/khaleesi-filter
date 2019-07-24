console.log(`There are ${characters.length} characters in the array.`);
console.log(characters[0]);
console.log(characters[1]);
console.log(characters[2]);

// For each of these questions, write a function that returns the answer.

// How many characters names start with "A"?
const numChars = characters.map(character => character.name);

function aFilter (name, letter) {
    return name[0].toLowerCase() === letter.toLowerCase();
}
const aCharacters = numChars.filter(name=>name[0].toLowerCase() === 'a').length
console.log(aCharacters);

// How many characters names start with "Z"?
const zCharacters = numChars.filter(name=>name[0].toLowerCase() === 'z').length
console.log(zCharacters);

// How many characters are dead?
const deadCharacters = characters.map(character => character.died);
const numDead = deadCharacters.filter(died => died).length
console.log(numDead);

// Who has the most titles?
// const titleCharacters = characters.map(character => [character.name, character.titles.length]);
// const sortedTitles = titleCharacters.sort(function (a,b) {return b[1]-a[1]})
// console.log(sortedTitles[0][0])

const titleCharacters = characters.map(function(character) {return {'name':character.name, 'titles':character.titles.length}});
const sortedTitles = titleCharacters.sort(function (a,b) {return b.titles-a.titles})
console.log(sortedTitles[0].name)


// How many are Valyrian?
const culturedCharacters = characters.map(character => character.culture);

const numValyrian = culturedCharacters.filter(culture => culture.toLowerCase() === 'valyrian').length;
console.log(numValyrian)

// What actor plays "Hot Pie" (and don't use IMDB)?
// const actorCharacters = characters.map(character => [character.name, character.playedBy]);
// const hotPieActor = actorCharacters.filter(characterLst => characterLst[0] === 'Hot Pie')[0][1];
// console.log(hotPieActor[0]);

const actorCharacters = characters.map(function (character) { return{'name':character.name, 'playedBy':character.playedBy}});
const hotPieActor = actorCharacters.filter(characterLst => characterLst.name === 'Hot Pie')[0].playedBy;
console.log(hotPieActor[0]);

// How many characters are *not* in the tv show?
// Produce a list characters with the last name "Targaryen"
// Create a histogram of the houses (it's the "allegiances" key)
 


// After you are finished, submit a Pull Request for code review.