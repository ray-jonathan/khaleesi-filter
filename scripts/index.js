console.log(`There are ${characters.length} characters in the array.`);
function getCharacterName(cha) {
    console.log(name)
}
getCharacterName(characters)
names = characters.map(name => name.name)
// For each of these questions, write a function that returns the answer.

// How many characters names start with "A"?

var NameWithA = names.filter(function(data){
    if (data[0].toLowerCase() == 'a'){
    return data 
}
});
console.log(`Names with first letter of A: ${NameWithA.length}`);
// How many characters names start with "Z"?
var NameWithZ = names.filter(function(data){
    if (data[0].toLowerCase() == 'z'){
    return data 
}
});
console.log(`Names with first letters Z: ${NameWithZ.length}`);
// How many characters are dead?

deadChar = characters.map(dead => dead.died)
var NameWithdead = deadChar.filter(function(data){
    if (data.toLowerCase() !== ''){
    return data 
}
});
console.log(`Number of dead: ${NameWithdead.length}`);
// Who has the most titles?
var charTitleslength = characters.map(title => title.titles.length)
const mostTitles = charTitleslength.reduce(function(prev, current, index) {
    return (prev > current) ? index : current
})
console.log(names[mostTitles]);
// How many are Valyrian?
var charCul = characters.map(cul => cul.culture)
var charCultureVal = charCul.filter(function(data){
    if (data == 'Valyrian'){
    return data 
}
});
console.log(`NUmber of Valyrian: ${charCultureVal.length}`)
// What actor plays "Hot Pie" (and don't use IMDB)?
var charPlayed = characters.map(cul => cul.playedBy)
let realIndexPlayed;
var charPlayedIndex = names.filter(function(data, index){
    // console.log(data)
    if (data == 'Hot Pie'){
        realIndexPlayed = index;
    return index
    }
});
// console.log(charPlayedIndex)
// console.log(charPlayed[1497])
console.log(`Who played hot pie: ${charPlayed[realIndexPlayed]}`)
// How many characters are *not* in the tv show?

var charTvSeries = characters.map(cul => cul.tvSeries)
var charNotOnTv = charTvSeries.filter(function(data){
    if (data == ''){
    return data
}
})
console.log(`Whos not on the tv show: ${charNotOnTv.length}`)

// Produce a list characters with the last name "Targaryen"
var lastnameTargaryen = names.filter(function(data){
    if (data.includes('Targaryen')){
    return data
}
})
console.log(`Who last name is Targaryen:\n${lastnameTargaryen}`)
// Create a histogram of the houses (it's the "allegiances" key)

var charHouses = characters.map(cul => cul.allegiances)
// var charHouses = charHouses1.forEach((element, index) => {
    
// })

let houseHisto = {};
let housedata;
let getHisto= charHouses.forEach(element => {
    element.forEach(eleItems =>{
        housedata = houses[eleItems];
       
            if(houseHisto[housedata]){
                 houseHisto[housedata] += 1; 
            }else{                 
                houseHisto[housedata] = 1; 
            }
            //cant get it to show after this is executed

    
    
})
});
console.log(`Histogram of People in Houses:`);
console.log(houseHisto);
// document.addEventListener('DOMContentLoaded', () => {
//     
// });


// After you are finished, submit a Pull Request for code review