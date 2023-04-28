function User(name, age) {
  this.name = name;
  this.age = age;
  this.text = function () {
    console.log(this.age);
  };
}
let user1 = new User("lee", 30);
user1.text();
