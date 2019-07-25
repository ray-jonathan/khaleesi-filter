console.log(`There are ${characters.length} characters in the array.`);

// For each of these questions, write a function that returns the answer.

// How many characters names start with "A"?
const numChars = characters.map(character => character.name);

function aFilter (name, letter) {
    return name[0].toLowerCase() === letter.toLowerCase();
}
const aCharacters = numChars.filter(name=>name[0].toLowerCase() === 'a').length
console.log(aCharacters);   // 168

// How many characters names start with "Z"?
const zCharacters = numChars.filter(name=>name[0].toLowerCase() === 'z').length
console.log(zCharacters);   // 8

// How many characters are dead?
const deadCharacters = characters.map(character => character.died);
const numDead = deadCharacters.filter(died => died).length
console.log(numDead);   // 553

// Who has the most titles?
// const titleCharacters = characters.map(character => [character.name, character.titles.length]);
// const sortedTitles = titleCharacters.sort(function (a,b) {return b[1]-a[1]})
// console.log(sortedTitles[0][0])

const titleCharacters = characters.map(function(character) {return {'name':character.name, 'titles':character.titles.length}});
const sortedTitles = titleCharacters.sort(function (a,b) {return b.titles-a.titles})
console.log(sortedTitles[0].name)   // Balon Greyjoy    


// How many are Valyrian?
const culturedCharacters = characters.map(character => character.culture);

const numValyrian = culturedCharacters.filter(culture => culture.toLowerCase() === 'valyrian').length;
console.log(numValyrian)    // 57

// What actor plays "Hot Pie" (and don't use IMDB)?
// const actorCharacters = characters.map(character => [character.name, character.playedBy]);
// const hotPieActor = actorCharacters.filter(characterLst => characterLst[0] === 'Hot Pie')[0][1];
// console.log(hotPieActor[0]); 

const actorCharacters = characters.map(function (character) { return {'name':character.name, 'playedBy':character.playedBy}});
const hotPieActor = actorCharacters.filter(characterLst => characterLst.name === 'Hot Pie')[0].playedBy;
console.log(hotPieActor[0]);    // Ben Hawkey

// How many characters are *not* in the tv show?
const showCharacters = characters.map(character => character.tvSeries);
const numNotShowChars = showCharacters.filter(show => show == '').length;
console.log(numNotShowChars);   // 1927

// Produce a list characters with the last name "Targaryen"
numTargs = numChars.filter(char => char.split(' ').includes('Targaryen')).length
console.log(numTargs);  // 49


// Create a histogram of the houses (it's the "allegiances" key)
const charAllegiances = characters.map(char => char.allegiances)
let alleginceTally = {};

function countAllegianceTotals(charArray) {
    charArray.forEach(arr => {
        arr.forEach(item => {
            if (!alleginceTally[item]){
                alleginceTally[item] = 1;
            } else {
                alleginceTally[item]++;
            }
        })
    })
}

countAllegianceTotals(charAllegiances)
console.log(alleginceTally);    // Logs an object mapping number of allegiances per symbol

//
//
// Somehow Make a Histogram 
//
//



// After you are finished, submit a Pull Request for code review.