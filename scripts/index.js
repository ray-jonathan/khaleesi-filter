console.log(`There are ${characters.length} characters in the array.`);

let parsedInfo = characters.map( char => {
    return {
        name: `${char.name}`,
        dead: `${char.died}`,
        titleCount: `${char.titles.length}`,
        actor: `${char.playedBy}`,
        culture: `${char.culture}`,
        seasons: `${char.tvSeries}`,
        aliases: `${char.aliases}`,
    }
})
// For each of these questions, write a function that returns the answer.

// How many characters names start with "A"?
function firstLetter(letter) {
    const filteredUsers = parsedInfo.filter(function (char) {
        return char.name[0] === letter.toUpperCase()
    })
    return filteredUsers.length
}
console.log(firstLetter('a'));

// How many characters names start with "Z"?
console.log(firstLetter('z'));
// How many characters are dead?
function deadCount() {
    const deadChars = parsedInfo.filter(function (char) {
        return char.dead != ''
    })
    return deadChars.length
}
console.log(deadCount());
// Who has the most titles?
function titleCount() {
    const titledChars = parsedInfo.filter(function (char) {
        return char.titleCount > 6
    })
    return titledChars
}
console.log(titleCount());
// How many are Valyrian?
function valCount() {
    const valyrians = parsedInfo.filter(function (char) {
        return char.culture === 'Valyrian'
    })
    return valyrians.length
}
console.log(valCount());
// What actor plays "Hot Pie" (and don't use IMDB)?
function hotPie() {
    const hotPie = parsedInfo.filter(function (char) {
        return char.name.includes('Hot Pie')
    })
    let actor = hotPie.map( (char) => char.actor)
    return actor
}
console.log(hotPie());
// How many characters are *not* in the tv show?
function showCount() {
    const showChars = parsedInfo.filter(function (char) {
        return char.seasons === ''
    })
    return showChars.length
}
console.log(showCount());
// Produce a list characters with the last name "Targaryen"
function targaryenCount() {
    const filteredUsers = parsedInfo.filter(function (char) {
        return char.name.includes('Targaryen')
    })
    let targs = filteredUsers.map( (char) => char.name)
    return targs
}
console.log(targaryenCount());
// Create a histogram of the houses (it's the "allegiances" key)
 

// After you are finished, submit a Pull Request for code review.