const obj = {
    name: 'Nazarii',
    surname: 'Baks',
    height: 180,
    age: 26,
    address: {
        city: 'Lviv',
        street: 'Shevchenka',
        zip: '79043',
        coordinates: {
            lat: 47.5397,
            lng: 22.0237
        }
    },
    hobbies: ['motorcycles', 'muay thai', 'hiking'],
    friends: [
        {name: 'Anna', age: 25},
        {name: 'Vitalii', age: 29}
    ],

    showInfo: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Address: ${this.address.city}, ${this.address.street}`);
        console.log(`Coordinates: lat ${this.address.coordinates.lat}, lng ${this.address.coordinates.lng}`);
        console.log("Hobbies:");
        this.hobbies.forEach((hobby, index) => {
            console.log(`  ${index + 1}. ${hobby}`);
        });
        console.log("Friends:");
        this.friends.forEach(friend => {
            console.log(`  Name: ${friend.name}, Age: ${friend.age}`);
        });
    }
};

obj.showInfo();

