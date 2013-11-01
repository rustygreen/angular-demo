function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.name = firstName + ' ' + lastName;
}
var person = new Person('Rusty', 'Green');
console.log(person.name);