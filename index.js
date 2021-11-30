const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

const newCats = ["Broom"];
function appendCat() {
    let newCats = ([...cats, "Broom"]);
    return newCats;
}

const moreCats = ["Arnold"];
function prependCat() {
    let moreCats = (["Arnold", ...cats]);
    return moreCats;
}

const goneCats = ["Milo", "Otis", "Garfield"];
function removeLastCat() {
return goneCats.slice(0, -1);
}

const lastCats = ["Milo", "Otis", "Garfield"];
function removeFirstCat() {
    return lastCats.slice(1);
}