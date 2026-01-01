// 1-daraja 1
const Animal = {
  speak() {
    console.log("Animal speaks");
  }
};
const Dog = Object.create(Animal);
Dog.speak(); // Animal speaks

// 1-daraja 2
Dog.speak = function() {
  console.log("Woof!");
};
Dog.speak(); // Woof!

// 1-daraja 3
const obj = { a: 1, b: 2 };
obj.__proto__.c = 3;
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('c')); // false
console.log('a' in obj); // true
console.log('c' in obj); // true

// 1-daraja 4
console.log(Object.getPrototypeOf(Dog) === Animal); // true

// 1-daraja 5
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello, ${this.name}`);
};
const p1 = new Person("Ali");
const p2 = new Person("Vali");
p1.greet(); // Hello, Ali
p2.greet(); // Hello, Vali

// 1-daraja 6
const nullProtoObj = Object.create(null);
nullProtoObj.value = 42;
console.log(nullProtoObj.toString); // undefined

// 1-daraja 7
const regularObj = {};
const func = function() {};
console.log(regularObj.__proto__); // Object.prototype
console.log(func.prototype);      // func {}
console.log(regularObj.prototype); // undefined

// 1-daraja 8
const oldObj = Object.create(Animal);
Animal.bark = function() { console.log("New bark!"); };
oldObj.bark(); // New bark!

// 1-daraja 9
const Grandfather = { surname: "Grand" };
const Father = Object.create(Grandfather);
Father.surname = "Father";
const Son = Object.create(Father);
Son.surname = "Son";
console.log(Son.surname); // Son (shadowing)

// 1-daraja 10
const proto = { x: 10 };
const child = Object.create(proto);
child.x = 20;
console.log(child.x); // 20
console.log(proto.x); // 10

// 2-daraja 11
const obj11 = {};
Object.defineProperty(obj11, 'constant', {
  value: 100,
  writable: false,
  configurable: false
});

// 2-daraja 12
const obj12 = {};
Object.defineProperty(obj12, 'hidden', {
  value: "secret",
  enumerable: false
});
console.log(obj12.hidden); // secret
for (let key in obj12) console.log(key); // hech narsa chiqmaydi

// 2-daraja 13
const obj13 = {};
Object.defineProperty(obj13, 'locked', {
  value: 5,
  writable: false,
  configurable: false
});

// 2-daraja 14
const person = {
  firstName: "John",
  lastName: "Doe"
};
Object.defineProperty(person, 'fullName', {
  get() { return this.firstName + " " + this.lastName; }
});
console.log(person.fullName); // John Doe

// 2-daraja 15
const user = {};
Object.defineProperty(user, 'age', {
  set(value) {
    if (value > 0) this._age = value;
  },
  get() { return this._age; }
});
user.age = 25;
user.age = -5;
console.log(user.age); // 25

// 2-daraja 16
const obj16 = { arr: [1, 2, 3] };
Object.defineProperty(obj16, 'arr', {
  writable: false
});
// obj16.arr.push(4); // xato bo'ladi (strict mode da)

// 2-daraja 17
let count = 0;
const counterObj = {};
Object.defineProperty(counterObj, 'value', {
  get() { return count++; }
});
console.log(counterObj.value); // 0
console.log(counterObj.value); // 1

// 2-daraja 18
const obj18 = {};
Object.defineProperty(obj18, 'nonEnum', {
  value: "hello",
  enumerable: false
});
console.log(Object.keys(obj18)); // []

// 2-daraja 19
const obj19 = {};
Object.defineProperties(obj19, {
  a: { value: 1, writable: false },
  b: { value: 2, enumerable: false },
  c: { get() { return 3; } },
  d: { value: 4, configurable: false },
  e: { value: 5 }
});

// 2-daraja 20
const obj20 = {};
Object.defineProperty(obj20, 'text', {
  set(value) { this._text = value.toLowerCase(); },
  get() { return this._text; }
});
obj20.text = "HeLLo";
console.log(obj20.text); // hello

// 3-daraja 21
function deepClone(obj) {
  return Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );
}

// 3-daraja 22
function createPrivate() {
  let secret = "hidden";
  return {
    getSecret() { return secret; },
    setSecret(val) { secret = val; }
  };
}
const priv = createPrivate();
console.log(priv.getSecret()); // hidden

// 3-daraja 23
const proto23 = {};
Object.defineProperty(proto23, 'x', { value: 10, writable: false });
const child23 = Object.create(proto23);
child23.x = 20; // strict mode da xato, aks holda jim o'tkaziladi
console.log(child23.x); // 10

// 3-daraja 24
function createLogger(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      console.log(`${prop} xususiyati ${target[prop]} dan ${value} ga o'zgardi`);
      target[prop] = value;
      return true;
    }
  });
}
const logged = createLogger({ name: "Ali" });
logged.name = "Vali"; // log chiqadi

// 3-daraja 25
const safe = { existing: 1 };
Object.seal(safe); // yangi qo'shish mumkin, lekin borlarini o'chirib bo'lmaydi

// 3-daraja 26
const Singleton = (function() {
  const instance = Object.create({});
  Object.defineProperty(instance, 'data', { value: {}, writable: true });
  return instance;
})();

// 3-daraja 27
const sealed = { a: 1 };
Object.seal(sealed);
const frozen = { b: 2 };
Object.freeze(frozen);
// seal - konfiguratsiya o'zgartirilmaydi, lekin qiymat o'zgartiriladi
// freeze - qiymat ham o'zgartirilmaydi

// 3-daraja 28
const obj28 = { x: 1 };
const newProto = { y: 2 };
Object.setPrototypeOf(obj28, newProto);
console.log(obj28.y); // 2

// 3-daraja 29
const base29 = {
  greet() { console.log(this.name); }
};
const derived29 = Object.create(base29);
derived29.name = "Bob";
derived29.greet(); // Bob (this to'g'ri ishlaydi)

// 3-daraja 30
function createValidatedObj(template) {
  const obj = {};
  Object.keys(template).forEach(key => {
    Object.defineProperty(obj, key, template[key]);
  });
  return obj;
}

// 1-usul 1-masala
function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype.move = function() { console.log("Moving"); };

function Car(model) {
  Vehicle.call(this, "Car");
  this.model = model;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.move = function() {
  Vehicle.prototype.move.call(this);
  console.log("Car driving");
};

// 1-usul 2-masala
// Yuqoridagi kodda allaqachon to'g'ri qilingan

// 1-usul 3-masala
// Yuqoridagi Car.prototype.move misoli

// 2-usul 4-masala
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
class Admin extends User {
  constructor(name, email) {
    super(name, email); // majburiy
  }
}

// 2-usul 5-masala
class Admin2 extends User {
  deleteUser() {
    console.log("User deleted");
  }
}

// 2-usul 6-masala
class Parent {
  static hello() { console.log("Static hello"); }
}
class Child extends Parent {}
Child.hello(); // Static hello

// 3-usul 7-masala
const shape = {
  type: "generic",
  draw() { console.log("Drawing"); }
};
const circle = Object.create(shape);
circle.type = "circle";

// 3-usul 8-masala
const circle2 = Object.create(shape, {
  radius: { value: 5, writable: false }
});

// 3-usul 9-masala
const GrandParent = { role: "grand" };
const Parent = Object.create(GrandParent);
Parent.role = "parent";
const Child = Object.create(Parent);
Child.role = "child";
console.log(Child.role); // child

// 4-usul 10-masala
class Base {
  #private = "secret";
}
class Derived extends Base {
  test() {
    // console.log(this.#private); // xato!
  }
}

// 4-usul 11-masala
const mixinA = { a() { console.log("A"); } };
const mixinB = { b() { console.log("B"); } };
const multi = Object.assign({}, mixinA, mixinB);
multi.a(); // A

// 4-usul 12-masala
// Prototipda metod saqlansa, xotira tejaydi
function WithProto() {}
WithProto.prototype.method = function() {};
function WithoutProto() {
  this.method = function() {};
}
// 10,000 ta obyekt yaratilsa, WithProto ancha kam xotira sarflaydi

// 4-usul 13-masala
class A {}
const inst = new A();
Object.setPrototypeOf(inst, {});
console.log(inst instanceof A); // false

// 4-usul 14-masala
function createPerson(name) {
  const obj = Object.create(personProto);
  obj.name = name;
  return obj;
}
const personProto = {
  greet() { console.log(this.name); }
};
const p = createPerson("Ali");
p.greet(); // Ali