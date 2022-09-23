class Animal {

    constructor(animalName, height, weight) {
        console.log("Created animal named", animalName)
        this.animalName = animalName;
        this.height = height;
        this.weight = weight;
    }

    nameLength() {
        return this.animalName.length;
    }

}

// subclass extending into class

class Dog extends Animal {

    constructor(name, height, weight, barkVolume, leashColor, speed) {
        super(name, height, weight);

        this.barkVolume = barkVolume;
        this.leashColor = leashColor;
        this.speed = 52;
    }

    bark() {
        if(this.barkVolume > 50) {
            console.log(this.animalName, "barks loudly!", this.barkVolume )
        }else{
            console.log(this.animalName, "barks timidly.", this.barkVolume);
        }
    }
}

// further extending class

// class Labrador extends Dog { 
// }

// subclass extending into class

class Fish extends Animal {

    constructor(name, height, weight, swimSpeed) {
        super(name, height, weight);
        this.swimSpeed = swimSpeed;
    }

    swim(chaserSpeed) {
        if(this.swimSpeed > 50) {
            console.log(this.animalName, "swims around quickly!", this.swimSpeed)
        }else{
            console.log(this.animalName, "swims around slowly.", this.swimSpeed)
        }

        if(this.swimSpeed > chaserSpeed) {
            console.log(this.animalName, "got away!")
        }else{
            console.log(this.animalName, "was caught!")
        }
    }
}

let king = new Dog("King", 45, 92, 72, "red", 52);
let goldie = new Fish("Goldie", 2, 0.1, 77);

king.bark();
goldie.swim(king.speed);


// Animal.planet = "Earth";

// let dog = new Animal("Fido", 25, 90);
// let fish = new Animal("Goldie", 2, 0.2);

// console.log(dog.constructor.planet);