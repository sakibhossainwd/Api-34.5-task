const data = [
    {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
    "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags",
    Transmission: "Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
    "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags",
    Transmission: "Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:"Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8Bags", 
    Transmission: "Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
    "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags",
    Transmission: "Automatic",
    },
    ];


console.log(data[0])


document.getElementById('carContainer').innerHTML =`
<div class="div shadow p-4 w-50 rounded">
<img src="${data[0].imageURL}" alt="">
<h2>Car Name: ${data[0].name}</h2>
<h5>Car Detail: ${data[0].description}</h5>
<h5>Transmission: ${data[0].Transmission}<h5>
<button class="btn btn-primary">car Price: <samp id="car-price">${data[0].price}</samp></button>
</div>

<div class="div shadow p-4 w-50 rounded">
<img src="${data[1].imageURL}" alt="">
<h2>Car Name: ${data[1].name}</h2>
<h5>Car Detail: ${data[1].description}</h5>
<h5>Transmission: ${data[1].Transmission}<h5>
<button class="btn btn-primary">car Price: <samp id="car-price">${data[1].price}</samp></button>
</div>
`;
