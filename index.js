// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}

function appendCat(name){
   let name1= [...cats, name];
   return name1;
}

function prependCat(name){
    let name2= [name, ...cats];
    return name2;
}

function removeLastCat(name){
    let cats1= cats.slice(0,cats.length-1);
    return cats1;
}

function removeFirstCat(name){
    let cats2= cats.slice(1);
    return cats2;
}
