export default Car;

class Car {
  constructor(id, make, model, year) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.year = year;
  }
  print() {
    console.log(this.make);
  }
}

const cr = new Car("myCar", "Volvo");
cr.print()