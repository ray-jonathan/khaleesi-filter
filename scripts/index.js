console.log(`There are ${characters.length} characters in the array.`);
// console.log(characters[0])
// For each of these questions, write a function that returns the answer.

// How many characters names start with "A"?
    const aList = characters.filter(characters => {
        return characters.name[0] === "A"   
    });
    // console.log (aList.length)
// How many characters names start with "Z"?
const zList = characters.filter(characters =>{
    return characters.name[0] ==="Z"
});
// console.log(zList.length)
// How many characters are dead?
const died = characters.filter(characters =>{
    return characters.died
});
// console.log(died.length)
// Who has the most titles?
    const king = characters.filter(characters =>{
        return characters.titles.length > 5
    });
    console.log(king[0])
// How many are Valyrian?
    const valyrian = characters.filter(characters =>{
        return characters.culture === "Valyrian"
    });
    console.log(valyrian.length)
// What actor plays "Hot Pie" (and don't use IMDB)?
    const hotpie = characters.filter(characters =>{
        return characters.name === "Hot Pie"
    });
    console.log(hotpie[0].playedBy[0])
// How many characters are *not* in the tv show?
    const left = characters.filter(characters =>{
        return characters.tvSeries.length < 1
    });
    console.log(left.length)
// Produce a list characters with the last name "Targaryen"
    const houseTargaryen = characters.filter(characters =>{
        
        return characters.name.split(' ')[1] === "Targaryen"
    });
    console.log(houseTargaryen)
// Create a histogram of the houses (it's the "allegiances" key)
    // create an array of characters with allegience filter list make this name a varible
    const histogram = {};
    let loyaltyLied = characters.map(characters => characters.allegiances)
    // console.log(loyaltyLied)
    
    // for each person in array for each house in allegiences compare if its in the empty histogram
    loyaltyLied.forEach(element => {
        element.forEach(e2 =>{
            if (histogram[e2]){
                histogram[e2] +=1
            }
            else {
                histogram[e2] = 1;
            }
        })
    });
    console.log(histogram)
    // if it isnt we have to add to it with the value of 1 if it is increase by 1

// After you are finished, submit a Pull Request for code review.


