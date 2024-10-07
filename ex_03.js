function addCarToAgent(agent, brand, model, color, power) {
  if (!agent || !brand || !model || !color || !power) {
    console.error('Invalid input');
    return null;
  }

  agent.car = { brand, model, color, power };
  return agent;
}

const agent = {
  firstname: 'James',
  lastname: 'Bond',
  age: 45,
  location: 'London'
};

const updatedAgent = addCarToAgent(agent, 'Aston Martin', 'DB5', 'Silver', '280 horsepower');
shareThatBeauty(updatedAgent);
