const car = {
  color: "grey",
  brand: "Aston Martin",
  model: "DB5",
  logInfo() {
    console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`);
  }
};

const agent = {
  firstname: "James",
  lastname: "Bond",
  code: '007',
  age: 57,
  car,
  logInfo() {
    console.log(`Agent information: ${this.firstname} ${this.lastname}, ${this.code}, ${this.age}`);
    this.car.logInfo(); // Reuse car's logInfo method
  }
};

agent.logInfo();
car.logInfo();
