const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
    {
    name: {
    common: "John",
    fullName: ["John", "Doe"]
    },
    age: 32,
    isMale: false,
    address: {
    street: "13/A St Joseph",
    house: 10,
    },
    },
    {
    name: {
    common: "Humayoun",
    fullName: ["Humayoun", "Kabir"]
    },
    age: 33,
    isMale: false,
    address: {
    street: "13/A St Lucia",
    house: 11,
    },
    },
    ]
    };


console.log(person.result[0].name.common);
console.log(person.result[0].age);
console.log(person.result[0].address.street);


console.log(person.result[1].name.common);
console.log(person.result[1].age);
console.log(person.result[1].address.street);

const personBox =  document.getElementById('personContainer').innerHTML = `
<div class="persone-01 shadow bg-white p-5 w-50 fs-3 rounded">
                <h3 class="fs-1">Person Nmae: ${person.result[0].name.common}</h3>
                <p><strong>Age: </strong>${person.result[0].age} Years</p>
                <p><strong>Gender: </strong>${person.result[0].isMale? 'Male' : 'Female'} </p>
            </div>
<div class="persone-01 shadow bg-white p-5 w-50 fs-3 rounded">
                <h3 class="fs-1">Person Nmae: ${person.result[1].name.common}</h3>
                <p><strong>Age: </strong>${person.result[1].age} Years</p>
                <p><strong>Gender: </strong>${person.result[1].isMale? 'Male' : 'Female'} </p>
            </div>
`;
console.log(personBox);