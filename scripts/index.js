console.log(`There are ${characters.length} characters in the array.`);
// For each of these questions, write a function that returns the answer.


const parsedChar = characters.map(char =>{
    return{
        name: char.name,
        culture:char.culture,
        gender: char.gender,
        tvSeries: char.tvSeries,
        allegiances: char.allegiances,
        titles: char.titles,
        dead: char.died,
        playedBy:char.playedBy
    }
});

// How many characters names start with "A"?

const aNames = parsedChar.filter(char => char.name[0] === 'A');
console.log(aNames.length)

// How many characters names start with "Z"?

const zNames = parsedChar.filter(char => char.name[0] === 'Z');
console.log(zNames.length)

// How many characters are dead?

const dead = parsedChar.filter(char => char.dead !== "");
console.log(dead.length)

// Who has the most titles?

const mostTitles = parsedChar.sort((aChar,bChar) => {aChar.titles.length > bChar.length ? 1 : -1});
console.log(mostTitles[0].name)


// How many are Valyrian?
const val = parsedChar.filter(char => char.culture === "Valyrian");
console.log(val.length)

// What actor plays "Hot Pie" (and don't use IMDB)?
console.log(parsedChar.name === `Hot Pie`)
const hotPie = parsedChar.filter(char => {
    if(char.name === 'Hot Pie'){
        return char.playedBy;
        }
    });
console.log(hotPie)

// How many characters are *not* in the tv show?
const notOnTv = parsedChar.filter(char => char.tvSeries[0] === '');
console.log(notOnTv.length)

// Produce a list characters with the last name "Targaryen"
const targ = parsedChar.filter(char => {
    // console.log(char.name.split(' ')[1])
    if(char.name.split(' ')[1] === 'Targaryen'){
        return char.name;
    }
});
console.log(targ.length)

// Create a histogram of the houses (it's the "allegiances" key)
 


// After you are finished, submit a Pull Request for code review.