/* Create a business name generator by combining list of adjectives and shop name and another word


                Adjectives:



Crazy 
Amazing
Fire 


Shop Name:
Engine
Foods
Garments


Another Word:
Bros
Limited
Hub



*/

//       Business Name Generator

let a = Math.floor(Math.random()*3);
let b = Math.floor(Math.random()*3);
let c = Math.floor(Math.random()*3);

let Adj = {
    0 : "Fire",
    1 : "Crazy",
    2 : "Amazing",
} ;

let Shopname = {
    0 : "Garments",
    1 : "Engine",
    2 : "Foods",
} ;

let Words = {
    0 : "Hub",
    1 : "Bros",
    2 : "Limited",
} ;

console.log(`The Company Name - ${Adj[a]}${Shopname[b]}${Words[c]}`);
