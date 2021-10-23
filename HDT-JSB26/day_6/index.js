let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    delage: function () {
        return delete person.age;
    }
  };

let person_new=person.delage();

