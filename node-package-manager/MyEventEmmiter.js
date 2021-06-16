import EventEmitter from "events";

const myEventEmmiter = new EventEmitter();

const makeCoffee = (name,coffe_type) => {
    console.log(`One ${coffe_type} coffee for ${name} is ready!`);
}

const makeBill = (bill,coffe_type) => {
    console.log(`${bill} for one ${coffe_type}`);
}

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }

const orderingCoffee = ({name,coffe_type,bill}) => {
    makeCoffee(name,coffe_type);
    makeBill(bill,coffe_type);
    birthdayEventListener(name);
}
myEventEmmiter.on('coffee-order', orderingCoffee);

myEventEmmiter.emit('coffee-order',{name : 'Kai',coffe_type : 'Latte', bill : "$5"});
