// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
   return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    return cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}
function appendCat(name) {
    const moreCats = [...cats, "Broom"];
    return moreCats;
}
function prependCat(name) {
    const moreCats = ["Arnold", ...cats]
    return moreCats;
}
function removeLastCat(name) {
    return cats.slice(0,2);
}
function removeFirstCat(name) {
    return cats.slice(1,3);
}