listOfCars = [
    { 
        type: "Fiat", 
        model: "500", 
        color: "white",
        price: 10000
    },
    { 
        type: "Fiat", 
        model: "600", 
        color: "white" 
    },
    {
        type: "Peugeot", 
        model: 700, 
        color: "Grey",
        price: NaN
    },
    {
       invalid: false
    },
    {

    }
];

let goodCars = filterCars(listOfCars);
        generateCards(goodCars);











        sayLabas();
        let personsName = "Petrai";
        sayLabasTo(personsName);
       let reiksme = returnLabas();
       console.log(reiksme);



       let reiksme2 = returnLabasTo(" Algimantai");
       console.log(reiksme2);


        function generateCards(goodCars) {
            let HMTL = ``;
            for (let i = 0; i < goodCars.length; i++) {
                const car = goodCars[i];
                HMTL += `<div class="card">
                            <h1>${car.type}</h1>
                            <h2>`+ car.model +`</h2>
                            <h2>${car.color}</h2>
                            <h2>${car.price}</h2>
                        </div>`;
                
            }
        document.getElementById("container").innerHTML = HMTL;
        }




    function returnLabas() {
        return "labas";
    }

    function returnLabasTo(vardas) {
        return "labuka "+vardas;
    }


    function sayLabasTo(vardas) {
        console.log("labuka "+vardas);
    }


    function sayLabas() {
        console.log("labuka");
    }


    function filterCars(listOfCars) {




        let goodCars = [];
        for (let i = 0; i < listOfCars.length; i++) {
            const car = listOfCars[i];
            if( (car.type === undefined || car.type === null) 
                || (car.model === undefined || car.model === null) 
                || (car.color === undefined || car.color === null) ){
                    continue;
                }else if( isNaN(car.price) || car.price === undefined || car.price === null  ){
                    goodCars[i] =   { 
                    type: car.type, 
                    model: car.model, 
                    color: car.color,
                    price: "kaina sutartine",
                    };
                }else{
                    goodCars[i] =   { 
                    type: car.type, 
                    model: car.model, 
                    color: car.color,
                    price: car.price,
                    };
            }
        }
        return goodCars;
    }






// document.getElementById("container").innerHTML = "<h1> labas vakaras </h1>";
// document.getElementById("container").classList.add("color");
// document.getElementById("container").style.color = 'red';
















//============== filtravimas new age vs oldScool==========
// listOfCars = listOfCars.filter((car) => car.type == "Fiat");

// cars = [];
// for (let i = 0; i < listOfCars.length; i++) {
//     if (listOfCars[i]['type'] == "Fiat") {
//         cars[i] = listOfCars[i];
//     }  
// }


// console.log(cars);


//============== map new age vs oldScool==========
// carModelNames = listOfCars.map((car) => car.type);
// console.log(carModelNames);

// for (let i = 0; i < listOfCars.length; i++) {
//     listOfCars[i] = listOfCars[i]['type'];
    
// }
// console.log(listOfCars);

//statines ir nestatines
// priima parametrus arba nepriima
// kazka grazina arba negrazina



















// for (let i = 0; i < listOfCars.length; i++) {
//     const car = listOfCars[i];
//     if( (car.type === undefined || car.type === null) 
//         || (car.model === undefined || car.model === null) 
//         || (car.color === undefined || car.color === null) ){
//         console.log(" blogi masinos duomenys");
//     }else if( isNaN(car.price) || car.price === undefined || car.price === null  ){
//         console.log(listOfCars[i]['type'] + " " + car['model'] + " " + car.color + " kaina sutartine" );
//     }else{
//          console.log(listOfCars[i]['type'] + " " + car['model'] + " " + car.color + " "+ car.price );
   
//     }

// }
  


// atvaizduoti masyvo duomenis
//jeigu kazkuriu parametru nera - atspausdinti, kad duomenys nepilni ir viskas
// bet jeigu tas domuo yra kaina, spausdinam visus fieldus, ir ties kaina - "sutartine";

// carModelNames = listOfCars.map((car) => car.model);
// console.log(carModelNames);


