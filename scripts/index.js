console.log(`There are ${characters.length} characters in the array.`);

// const createCharacters =({name,died,titles,aliases,tvSeries})=>{
//     return {
//     name,
//     died,
//     titles,
//     aliases,
//     tvseries,
//     }
// }
// const filterA = ({name}) =>{
//     return name.charAt(0) ==='A'
// }
// const filterbyA = charcterInfo.filter(filterbyA)
// let characterInfo = characters.map(createCharacters)
// For each of these questions, write a function that returns the answer.
console.log(characters[0].name[0]);

// How many characters names start with "A"?
let thisA = characters.filter(charA => (charA.name[0]==="A"));
console.log(thisA);
// How many characters names start with "Z"?
let thisZ = characters.filter(charZ => (charZ.name[0]==="Z"));
console.log(thisZ.length);
// How many characters are dead?

let deadP = characters.filter(deadDude => deadDude.died !=='');
console.log(deadP.length);
// Who has the most titles?
let titleD = characters.filter(charactertitle => charactertitle.titles.length >= 7);
console.log(titleD[0].name);

// How many are Valyrian?
let cultureV = characters.filter(charactercult => charactercult.culture=== "Valyrian");
console.log(cultureV.length);

// What actor plays "Hot Pie" (and don't use IMDB)?
let hotPie = characters.filter(charPie => charPie.name ==="Hot Pie"); 
console.log(hotPie[0].playedBy);
// How many characters are *not* in the tv show?
let charMap = characters.map(tvOrNo => tvOrNo.tvSeries)
let noTv = charMap.filter(function(data){
    if (data ==''){
        return data
    }
});
console.log(noTv.length);

// Produce a list characters with the last name "Targaryen"
// let lastName = characters.filter(tarName => tarName.namesincludes( "Targaryen"));
// console.log(lastName); tried filter a lot
names = characters.map(name => name.name)
let lNameTargaryen = names.filter(function(data){
    if (data.includes("Targaryen")){
        return data
    }
})
console.log(lNameTargaryen);
// Create a histogram of the houses (it's the "allegiances" key)




// After you are finished, submit a Pull Request for code review.