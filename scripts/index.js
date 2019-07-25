console.log(`There are ${characters.length} characters in the array.`);

const parsedChar = characters.map(char =>{
    return{
        name: char.name,
        culture:char.culture,
        titles: char.titles,
        dead: char.died,
        culture:char.culture,
        playedBy: char.playedBy,
        tvSeries: char.tvSeries,
        allegiances: char.allegiances
    }
})

const namesStartWithA = parsedChar.filter(char => char.name[0] === `A`)
console.log(namesStartWithA.length); 

const namesStartWithZ = parsedChar.filter(char => char.name[0] ===`Z`)
console.log(namesStartWithZ.length);

const characterIsDead = parsedChar.filter(char => char.dead !== ``);
console.log(characterIsDead.length)

const biggestTitle = parsedChar.sort((aChar,bChar) => {aChar.titles.length > bChar.titles.length ? 1 : -1});
console.log(biggestTitle[0].name); 

const iAmValyrian = parsedChar.filter(char => char.culture === `Valyrian`);
console.log(iAmValyrian.length);

const iPlayedHotPie = parsedChar.filter(char => {
    if(char.name === `Hot Pie`){
        console.log(char.playedBy[0])
    }
});

const iAmNotOnTv = parsedChar.filter(char => char.tvSeries[0] === ``);
console.log(iAmNotOnTv.length);

const myLastName = parsedChar.filter(char =>{
    if (char.name.split(` `)[1] === `Targaryen`){
        return char.name.split(` `)[1]
    }
});
console.log(myLastName.length)
// For each of these questions, write a function that returns the answer.

// How many characters names start with "A"?
// How many characters names start with "Z"?
// How many characters are dead?
// Who has the most titles?
// How many are Valyrian?
// What actor plays "Hot Pie" (and don't use IMDB)?
// How many characters are *not* in the tv show?
// Produce a list characters with the last name "Targaryen"
// Create a histogram of the houses (it's the "allegiances" key)
 


// After you are finished, submit a Pull Request for code review.