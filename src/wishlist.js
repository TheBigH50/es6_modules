import Car from "./car.js";
export default WishList;

class WishList {
  //two class properties
    list = [];
    nextId = 0;

    add(make, model, year) {
      //use the Car class to create a new car
      let car = new Car(this.nextId++, make, model, year)
      //add that car to the wishlist list
      this.list.push(car);
    }
    remove(carId) {
      //find the car in the wishlist list that matches the remove id
      let index = this.list.findIndex((car) => car.id == carId);
      //remove it and update wishlist list
      this.list.splice(index, 1);
    }

}


