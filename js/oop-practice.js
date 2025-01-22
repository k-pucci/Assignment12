// STEP 1
// Named Cat class declaration
class Cat {
    constructor(name) {
        this.name = name;
    }
}
// Anonymous Dog class declaration
const Dog = class {
    constructor(name) {
        this.name = name;
    }
};

// STEP 2
const cat = new Cat('Whiskers');
const dog = new Dog('Rover');

// STEP 3
class Animal {
    constructor() {
        console.log('The Animal has been created');
    }
}

// STEP 4
class AnimalWithMessage {
    constructor(message) {
        console.log(message);
    }
}

// STEP 5
class AnimalWithProperties {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
}

// STEP 6
const myAnimal = new AnimalWithProperties('dog', 'Labrador', 'yellow', 24, 36);
for (let property in myAnimal) {
    console.log(property);
}

// STEP 7
class AnimalWithSpeak {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
    
    speak() {
        if (this.type.toLowerCase() === 'dog') {
            return `The ${this.color} dog is barking!`;
        } else if (this.type.toLowerCase() === 'cat') {
            return `The ${this.color} cat is meowing!`;
        }
    }
}

// STEP 8
class AnimalPrivate {
    #type;
    #breed;
    #color;
    #height;
    #length;
    
    constructor(type, breed, color, height, length) {
        this.#type = type;
        this.#breed = breed;
        this.#color = color;
        this.#height = height;
        this.#length = length;
    }
    
    #checkType() {
        return this.#type.toLowerCase() === 'dog' ? 'dog' : 'cat';
    }
    
    speak() {
        return `The ${this.#checkType()} has made a noise!`;
    }
}

// STEP 9
String.prototype.findWords = function(word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = this.match(regex);
    const count = matches ? matches.length : 0;
    alert(`The word "${word}" appears ${count} time(s) in the text.`);
    return count;
};
