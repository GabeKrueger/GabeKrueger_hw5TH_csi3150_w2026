const carContainer = document.getElementById("carContainer");
const noResults = document.getElementById("noResults");

function displayCars(cars){

carContainer.innerHTML = "";
noResults.textContent = "";

cars.forEach(car => {

carContainer.innerHTML += `
<div class="card">

<img src="${car.image}" alt="${car.make}">

<div class="card-content">

<h3>${car.year} ${car.make} ${car.model}</h3>

<p>Mileage: ${car.mileage}</p>

<p>Price: $${car.price}</p>

<p>Color: ${car.color}</p>

<p>${car.gasMileage}</p>

</div>

</div>
`;

});

}

displayCars(usedCars);



function filterCars(){

    let minYear = document.getElementById("minYear").value;
    let maxYear = document.getElementById("maxYear").value;
    let maxMileage = document.getElementById("maxMileage").value;
    let minPrice = document.getElementById("minPrice").value;
    let maxPrice = document.getElementById("maxPrice").value;

    let makeSelect = document.getElementById("make");
    let selectedMakes = Array.from(makeSelect.selectedOptions).map(o=>o.value);

    let colorSelect = document.getElementById("color");
    let selectedColors = Array.from(colorSelect.selectedOptions).map(o=>o.value);


    let filteredCars = usedCars.filter(car => {

        if(minYear && car.year < minYear) return false;
        if(maxYear && car.year > maxYear) return false;

        if(maxMileage && car.mileage > maxMileage) return false;

        if(minPrice && car.price < minPrice) return false;
        if(maxPrice && car.price > maxPrice) return false;

        if(selectedMakes.length>0 && !selectedMakes.includes(car.make)) return false;

        if(selectedColors.length>0 && !selectedColors.includes(car.color)) return false;

        return true;

});


if(filteredCars.length === 0){

    carContainer.innerHTML="";
    noResults.textContent="No cars match your filters. Please try again.";

}
else{

    displayCars(filteredCars);

}

}