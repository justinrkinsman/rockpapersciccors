function computerPlay() {
    let selections = ['Rock','Paper','Scissors']
    let randSel = selections[Math.floor(Math.random()*selections.length)];
    return randSel;
}

console.log(computerPlay())
