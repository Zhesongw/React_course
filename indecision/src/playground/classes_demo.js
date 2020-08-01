//car
class Car {
    constructor(name = 'Volvo', size = 'Medium'){
        this.name = name;
        this.size = size;
    }
    print(){
        return `The name of the car is ${this.name}`
    }
}

class Truck extends Car{
    constructor(name,size,weight){
        super(name, size);
        this.weight = weight;
    }
    print(){
        return super.print();
    }
}

let sample1 = new Car('Benz','Big');
let sample2 = new Truck('ANO','SuperBig')
console.log(sample2.print());