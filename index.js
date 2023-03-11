 const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

destructivelyAppendCat();

console.log(cats);

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
  }
  
  function destructivelyRemoveLastCat() {
    cats.pop(); 
    return cats; 
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
  }
  
  

  function appendCat(name) {
    let newCats = [...cats, name];
    return newCats;
  }
  
  

function prependCat(name) {
  return [name, ...cats];
}

let newCats = prependCat('Garfield');

console.log(cats); 
console.log(newCats); 



function removeLastCat() {
  
  const newCats = [...cats];
  
  
  newCats.pop();

  
  return newCats;
}

function removeFirstCat() {
  
    const newCats = [...cats];
    
    
    newCats.shift();
  
    
    return newCats;
  }

console.log(cats); 
console.log(removeLastCat());
console.log(cats); 



  
  
