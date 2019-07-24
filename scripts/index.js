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
console.log(NameWithA.length);
// How many characters names start with "Z"?
var NameWithZ = names.filter(function(data){
    if (data[0].toLowerCase() == 'z'){
    return data 
}
});
console.log(NameWithZ.length);
// How many characters are dead?

deadChar = characters.map(dead => dead.died)
var NameWithdead = deadChar.filter(function(data){
    if (data.toLowerCase() !== ''){
    return data 
}
});
console.log(NameWithdead.length);
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
console.log(charCultureVal.length)
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
console.log(charPlayedIndex)
console.log(charPlayed[1497])
console.log(charPlayed[realIndexPlayed])
// How many characters are *not* in the tv show?

var charTvSeries = characters.map(cul => cul.tvSeries)
var charNotOnTv = charTvSeries.filter(function(data){
    if (data == ''){
    return data
}
})
console.log(`hello ${charNotOnTv.length}`)

// Produce a list characters with the last name "Targaryen"
var lastnameTargaryen = names.filter(function(data){
    if (data.includes('Targaryen')){
    return data
}
})
console.log(lastnameTargaryen)
// Create a histogram of the houses (it's the "allegiances" key)

var charHouses = characters.map(cul => cul.allegiances)
console.log(charHouses)
let houseHisto = {};
let housedata;
let getHisto= charHouses.forEach(element => {
    element.forEach(eleItems =>{
        fetch(eleItems).then(res=>res.json()).then(res=>{
            housedata = res.name;
            if(houseHisto[housedata]){
                 houseHisto[housedata] += 1; 
            }else{                 
                houseHisto[housedata] = 1; 
            }
            console.log(getHisto);
            //cant get it to show after this is executed

    })
    
})
});


document.addEventListener('DOMContentLoaded', () => {
    console.log(houseHisto);
});


// After you are finished, submit a Pull Request for code review