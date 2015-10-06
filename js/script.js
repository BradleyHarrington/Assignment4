// 1.	Create a namespace called Animal. Then, define two sub namespaces, one called Cat and another called Dog.

//var ANIMAL = ANIMAL || {};
//ANIMAL.Cat = function() {}
//ANIMAL.Dog = function() {}

// 2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal syntax and the Dog class should be created using the constructor syntax.

//var Cat = {};
//
//function Dog() {}


// 3.	Create a new instance of Cat class. Directly underneath, create a new instance of the Dog class.

//var kitty = new Cat();
//var puppy = new Dog();

// 4.	Start over and now create a new class using literal syntax called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window. 

//function Animal() {
//    window.console.log("The Animal has been created"); 
//}
//var animal1 = new Animal();


// 5.	Now, change the above code so that is mimics a true constructor. The class should accept an argument and that value is what should be displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.

//function Animal(message) {
//    window.console.log(message); 
//}
//var animal1 = new Animal("The Animal has been created");


// 6.	Start over and now create a new class using literal syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 

//var Animal = function(type, breed, color, height, length) {
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//    
//    window.console.log("Your animal is a " + this._breed + " " + this._type + ".  It is " + this._color + ", " + this._height + " in height and " + this._length + " in length."); 
//}
//var animal1 = new Animal("Dog", "Beagle", "Brown", "17 inches", "30 inches");

// 7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

//var Animal = function(type, breed, color, height, length) {
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//}
//var animal1 = new Animal("Dog", "Beagle", "Brown", "17 inches", "30 inches");
//
//for (var property in animal1) {
//    window.console.log(property);
//}

// 8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

//var Animal = function(type, breed, color, height, length) {
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//}
//    
//Animal.prototype.speak = function() {
//        if (this._type == "Dog") {
//            window.console.log("The " + this._color + " dog is barking");
//        } else if (this._type == "Cat") {
//            window.console.log("The " + this._color + " cat is meowing");
//        } else {
//            window.console.log("There is a weird animal here and it wants to eat you");
//        }
//    }
//
//var animal1 = new Animal("Dog", "Beagle", "Brown", "17 inches", "30 inches");
//animal1.speak();


// 9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

//var Animal = function(type, breed, color, height, length) {
//    var _type = type;
//    var _breed = breed;
//    var _color = color;
//    var _height = height;
//    var _length = length;
//    var checkType = function() {
//        if (_type == "Dog") {
//            return "dog";
////            window.console.log(_type);
//        } else  {
//            return "cat";
////            window.console.log("Cat");
//        } 
//    }
//    this.showAnimalInfo = function() {
//        checkType();
//    }
//    Animal.prototype.speak = function() {
//        window.console.log(checkType);
//        }
//}
//
//var animal1 = new Animal("Dog", "Beagle", "Brown", "17 inches", "30 inches");
//animal1.showAnimalInfo();
//animal1.speak();

// 10.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph.

var theWord = "from";
var findWords = "df";
String.prototype.findWords = function() {
    window.console.log(message.match(/\bfrom\b/gi).length);
return findWords;
}
var message = "From my experience of tasting the finest wines from around the world, all the greatest wines possess authenticity, harmony, and elegance. These are the qualities I constantly try to capture in my wines. The ultimate goal is to create wines that are seamless and textural with enough structure and balance to complement fine cuisine.";
window.console.log(message.findWords());

//String.prototype.reverse = function() {
//    var reverse = "";
//    for (var i = this.length - 1; i >= 0; i--) {
//        reverse += this.charAt(i);
//    }
//    return reverse;
//}
//var message = "JavaScript";
//console.log(message.reverse());	//Displays "tpircSavaJ"





//// 11.	Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).
//
//var Vehicle = function(make, model, totalMiles, lastOilChange) {
//    
//}
//
//// 12.	Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their respective arguments. The drivenMiles property should be initialized to 0 and the type property should be initialized to an empty string.
//
//var Vehicle = function(make, model, totalMiles, lastOilChange) {
//    this.type = "";
//    this.make = make;
//    this.model = model;
//    this.drivenMiles = 0;
//    this.totalMiles = 0;
//    this.lastOilChange = 0;
//}
//
//
//
//// 13.	Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and set the public drivenMiles property to the miles argument. Return the method (return this).
//
//Vehicle.prototype.drive = function(miles) {
//    this.miles += miles;
//    return this;
//}
//
//
//// 14.	Now create a public method called checkOil(). Within this method, check to see if the total miles minus the last oil change plus the driven miles are less than or equal to 3000. If they are, return a message to the user that they need an oil change. Otherwise, return the method (return this).
//
//Vehicle.prototype.checkOil = function() {
//    if ((this.totalMiles - this.lastOilChange) >= 3000) {
//        return "You need an oil change!";
//    } else {
//        return this;
//    }
//}
//
//// 15.	Now create a new sub class called Car that accepts one parameter for the amount of doors that the car has. 
//
////var Car = function(doorCount) {
////    
////}
//
//// 16.	Within the new Car class, initialize a public property called doorCount and set it equal to the argument.
//
////var Car = function(doorCount) {
////    this.doorCount = doorCount;
////}
//
//// 17.	Within the Car class use a conditional to check and see if the door count is greater than 2. If it is, set the type property to Sedan. Otherwise, set it to coupe.
//
//var Car = function(doorCount) {
//    this.doorCount = doorCount;
//    if (this.doorCount > 2) {
//        this.type = "Sedan";
//    } else {
//        this.type = "Coupe";
//    }
//}
//
//
//// 18.	Now, make sure that the Car class inherits from the Vehicle base class. Use this opportunity to pass in the make, model, total miles, and last oil change values into the Vehicle’s constructor. 
//
//Car.prototype = new Vehicle("Honda", "Accord", 20000, 15000);
//
//
//// 19.	Then, create a new instance of the Car class and pass in the number of doors that the car has into the Car’s constructor.
//
//var myCar = new Car(4);
//
//// 20.	Finally, using method chaining, call the drive() method of the car object, passing in a numeric value as a parameter. At the same time, call the checkOil() method. Display the results in the console window. You will either get a message indicating your car needs an oil change or you will get the object hierarchy.
//
//console.log(myCar.drive(15500).checkOil());
//

////////////////////// The Recipe Card /////////////////////

//var recipe = {
//    "title": "Chili Roja",
//    "servings": 6,
//    "ingredients": ["1 TBSP Cumin", "1 TBSP Oregano", "10 Cloves Garlic", "1 Cup Dried Ground Chili Peppers", "1 LB Stewing Beef"],
//    "description": "Heat a TBSP of rice bran oil in saute pan.  Add garlic and onion if you want.  Cook for a bit, add diced garlic and cumin seeds.  Heat a bit more and add your ground chili powder.  Heat until the room is filled with the aroma.  Use water, beer and chicken broth to thin out. In a separate pan, saute your beef until it is browned all around.  Be sure to salt and pepper it to your hearts content.  Add beef to chili sauce, and reduce the pan with whatever you have left.  Throw those juices into the chili sauce too.  If you wife is giving you any grief, throw her into the chili sauce too. Yum!"
//};
//
//window.console.log(recipe.title);
//window.console.log("Servings: " + recipe.servings + "\n\n");
//window.console.log("Ingredients:\n\n");
//var i;
//for (i = 0; i < recipe.ingredients.length; i++) {
//    window.console.log(recipe.ingredients[i]);
//}
//
//window.console.log("\nDirections: \n" + recipe.description);



//////////////////// The Reading List ///////////////////////////

//var books = [
//    {   title: "Dune",
//        author: "Frank Herbert",
//        alreadyRead: true
//    },
//    {   title: "Blue Mars",
//        author: "Stanley Robinson",
//        alreadyRead: false
//    },
//    {   title: "Stranger In a Strange Land",
//        author: "Robert Heinlein",
//        alreadyRead: true
//    },
//    {   title: "Among Others",
//        author: "Jo Walton",
//        alreadyRead: false
//  },
//    {   title: "Lord of the Rings",
//        author: "J.R.R. Tolkien",
//        alreadyRead: true
//    },
//    {   title: "Enders Game",
//        author: "Orson Scott Card",
//        alreadyRead: true
//  }];
//
//for (var i = 0; i < books.length; i++) {
//  var book = books[i];
//  var bookInfo = book.title + " by " + book.author;
//  if (book.alreadyRead) {
//    console.log("You already read " + bookInfo);
//  } else {
//    console.log("You still need to read " + bookInfo);
//  }
//}



