
/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  eat(foodItem) {
    if(this.stomach.length < 10) {
      this.stomach.push(foodItem);
    }
  }
  poop() {
    this.stomach = [];
  }
  toString() {
    return `${this.name}, ${this.age}`;
  }
}

const john = new Person('John', 25);
console.log('task 1', john.toString());

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  fill(gallons) {
    this.tank += gallons;
  }
  drive(miles) {
    const drivableMiles = this.milesPerGallon * this.tank;
    if(miles <= drivableMiles) {
      this.tank = (drivableMiles - miles) / this.milesPerGallon;
      this.odometer += miles;
    } else {
      this.tank = 0;
      this.odometer += drivableMiles;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
}

const audi = new Car('R8', 20);
audi.fill(20);
console.log('task 2', audi);
console.log(audi.drive(401));
console.log(audi);

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

const josh = new Lambdasian({
  name: 'Josh',
  age: 27,
  location: 'New York'
});

console.log('task 3', josh.speak());

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

const brit = new Instructor({
  name: 'Brit',
  age: 35,
  location: 'Toronto',
  specialty: 'JavaScript',
  favLanguage: 'Python',
  catchPhrase: 'You Can Do It!!!'
});

console.log('task 4', brit);
console.log(brit.demo('HTML'));
console.log(brit.grade({name: 'Joseph'}, 'Unit 1'));


/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before BloomTech
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/

class Student extends Lambdasian {
   constructor(obj) {
     super(obj);
     this.previousBackground = obj.previousBackground;
     this.className = obj.className;
     this.favSubjects = obj.favSubjects;
     this.currentGrade = obj.currentGrade;
   }
   listSubjects() {
    return `Loving ${this.favSubjects[0]}, ${this.favSubjects[1]}, ${this.favSubjects[2]}, ${this.favSubjects[3]}, and ${this.favSubjects[4]}.`;
   }
   PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
   }
   sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
   }
}

const joseph = new Student({
  name: 'Joseph',
  age: 21,
  location: 'State College',
  previousBackground: 'Penn State AE Student',
  className: 'WEB52',
  favSubjects: ['HTML', 'CSS', 'JavaScript', 'React', 'Three.js'],
  currentGrade: 100
});

console.log('task 5', joseph);
console.log(joseph.listSubjects());
console.log(joseph.PRAssignment('JS'));
console.log(joseph.sprintChallenge('HTML & CSS'));


Instructor.prototype.studentGrader = function(studentObj) {
  let randomNum = Math.floor(Math.random() * 21);
  if (randomNum <= 10) {
    studentObj.currentGrade = studentObj.currentGrade + randomNum;
    } else {
    studentObj.currentGrade = studentObj.currentGrade - randomNum;
  }
  return studentObj.currentGrade;
}

Student.prototype.graduate = function(instructorObj, studentObj) {
  if(this.currentGrade > 70) {
    return 'You graduate from BloomTech!';
  } else {
    return instructorObj.studentGrader(studentObj);
  }
}

console.log('Stretch');
console.log(brit.studentGrader(joseph));

console.log('Stretch')
console.log(joseph.graduate(brit, joseph));

console.log(joseph);


/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager extends Instructor {
   constructor(obj) {
     super(obj);
     this.gradClassName = obj.gradClassName;
     this.favInstructor = obj.favInstructor;
   }
   standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
   }
   debugsCode(studentObj, subject) {
    return `${this.name} debugs ${studentObj.name}'s code on ${subject}.`;
   }
}

const adam = new ProjectManager({
  name: 'Adam',
  age: 55,
  location: 'Kansas City',
  specialty: 'Managing Tasks',
  favLanguage: 'English',
  catchPhrase: 'I can fix this!',
  gradClassName: 'CS1',
  favInstructor: 'Brit'
});

console.log('task 6', adam);
console.log(adam.name);
console.log(adam.specialty);
console.log(adam.standUp('WEB52'));
console.log(adam.debugsCode({name: 'Harold'}, 'React'));


/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or 
      subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from BloomTech
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/


//End of Challenge
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  return 'bar';
}

module.exports = {
  foo,
  Person,
  Car,
  Lambdasian,
  Instructor,
  Student,
  ProjectManager
}
