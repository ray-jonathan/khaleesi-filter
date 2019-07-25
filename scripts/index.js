console.log(`There are ${characters.length} characters in the array.`);

// Parse the given GOT info and grab what all is needed:

let parsedInfo = characters.map( (char) => {
    return {
        name: `${char.name}`,
        dead: `${char.died}`,
        titles: char.titles,
        culture: `${char.culture}`,
        actor: `${char.playedBy}`,
        allegiances: char.allegiances,
        seasons: `${char.tvSeries}`
    }
});

/* * * * * * * * * * FUNCTION DESCRIPTIONS * * * * * * * * * * 
* capEachWord(<phrase>) returns a given phrase with all word capitalized.
*   This is simply a helper function.
* 
* nameStartsWith(<letter>) returns an array whose elements are complete data
*   for each character whose name starts with a specified letter
* 
* isDead() returns an array whose elements are complete data for each
*   character who died
* 
* titlesMostToLeast() returns an array whose elements are all the GOT
*   characters sorted by those who have the most titles to those who
*   have the fewest
* 
* inCulture(<cultureName>) returns an array whose elements are all the
*   GOT characters in the specified culture of cultureName
* 
* characterActor(<characterName>) returns the name of the actor who 
*   plays the given character
* 
* lastNameList(<lastName>) returns an array of the names of all characters
*   who have a last name of lastName
*
* notInTVShow() returns an array whose elements are the characters who 
*   did *not* appear in a season of the TV show
*
* function houseHistogram(<dataArray>) returns an array that gives the 
*   frequency count with which each allegiance occurs
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function capEachWord(phrase) {
    return phrase.toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
}

function nameStartsWith(letter) {
    return parsedInfo.filter( (char) => {
        return char.name[0] === letter.toUpperCase()});
}

function isDead() {
    return parsedInfo.filter( (char) => {
        return char.dead !== ""});
}

function titlesMostToLeast() {
    return parsedInfo.sort( 
        (char1, char2) => char1.titles.length < char2.titles.length ? 1 : -1);
}

function inCulture(cultureName) {
    return parsedInfo.filter( (char) => {
        return char.culture === capEachWord(cultureName);
    });
}

function characterActor(characterName) {
    return parsedInfo.filter( (char) => {
        return char.name === capEachWord(characterName)})[0].actor;
}

function lastNameList(lastName) {
    return parsedInfo.filter( (char) => {
        return char.name.includes(capEachWord(lastName))}).map( (char) => char.name);
}

function notInTVShow() {
    return parsedInfo.filter( (char) => {
        return char.seasons.length < 1;
    });
}

function houseHistogram(dataArray) {
    let histogram = {};
    dataArray.map(char => {
        char.allegiances.map(allegiance => {
            histogram[allegiance] ? histogram[allegiance] += 1 : histogram[allegiance] = 1;
        })
    })
    return histogram;
}

/* * * * * * * * * * Questions and Answers * * * * * * * * * */

// QUESTION: How many characters names start with "A"? 
// ANSWER: 168, returned by nameStartsWith("a").length

console.log(`There are ${nameStartsWith("a").length} characters in GOT whose names start with the letter "A".`);


// QUESTION: How many characters names start with "Z"?
// ANSWER: 8, returned by nameStartsWith("z").length

console.log(`There are ${nameStartsWith("z").length} characters in GOT whose names start with the letter "Z".`);

// QUESTION: How many characters are dead?
// ANSWER: 553, returned by isDead().length

console.log(`There are ${isDead().length} characters in GOT who are dead`);

// QUESTION: Who has the most titles?
// ANSWER: Balon Greyjoy (7 titles), returned by titlesMostToLeast()[0].name

console.log(`${titlesMostToLeast()[0].name} has the most titles at ${titlesMostToLeast()[0].titles.length}.
${titlesMostToLeast()[1].name} has the second most titles at ${titlesMostToLeast()[1].titles.length}.
`);

// QUESTION: How many are Valyrian?
// ANSWER: 57, returned by inCulture("valyrian").length

console.log(`There are ${inCulture("valyrian").length} characters in the Valyrian culture.`);

// QUESTION: What actor plays "Hot Pie" (and don't use IMDB)?
// ANSWER: Ben Hawkey, returned by characterActor("hot pie")

console.log(`${characterActor("hot pie")} plays the "Hot Pie" character.`);

// QUESTION: How many characters are *not* in the tv show?
// ANSWER: 1927. returned by notInTVShow().length

console.log(`There are ${notInTVShow().length} characters in GOT who did not appear on the TV show.`);

// QUESTION: Produce a list of characters with the last name "Targaryen"
// ANSWER: See the list printed in the console, returned by lastNameList("targaryen")

console.log(`There are ${lastNameList("targaryen").length} characters with "Targaryen" as their last name. Here is the full list of characters:`);
console.log(lastNameList("targaryen"));

// QUESTION: Create a histogram of the houses (it's the "allegiances" key)
// ANSWER: See the list printed out in the console

console.log(houseHistogram(parsedInfo));