//import User from 'classes.ts'

interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
}

class User implements UserInterface {
  public name: string;
  email: string;
  protected age: number; //accessible through inherited classes

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  register() {
    console.log(this.name + ' is now registered');
  }
}

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  register() {
    super.register;
  }
}

let john = new User('John Doe', 'jdoe@gmail.com', 34);
