console.log("Register page")
let saloon={
    name:"Pet Saloon",
    address:{
        street:"University",
        number:"808-444-3322",
        zip:"96826",
        city:"San Diego"
    },
    hours:{
        open:"09:00 PST",
        Close:"19:00"
    },
    pets:[
        {
            name:"Scooby",
             age:3,
            gender:"Male",
            breed:"Dane",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Ollie",
            age:2,
            gender:"Male",
            breed:"Shih Tzu",
            owner:"Kamalani",
            phone:"444-444-4444"
        },
        {
            name:"Stormi",
            age:3,
            gender:"Female",
            breed:"Pom",
            owner:"Raven",
            phone:"333-333-3333"
        },
        {
            name:"Hulk",
            age:1,
            gender:"Male",
            breed:"Frenchie",
            owner:"James",
            phone:"888-888-8888"
        }
    ]
}

console.log(saloon.address.city);
console.log(saloon.pets);
alert(saloon.pets.length+"registered pets");

function simpleDisplay(){
    for(let i=0; i<saloon.pets.length;i++){
        console.log(saloon.pets[i].name);
    }
    
}
simpleDisplay();
