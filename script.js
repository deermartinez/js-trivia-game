

var sibling = {
    name: "Ebony",
    age: 38,
    children:["Sky", "Kelis", "Brandon"],
    single: false,
    email: "email@email.com"
}

var sibling = new Object();;
sibling.name = "Ebony";
sibling.age = 38;
sibling.children = ["Sky", "Kelis", "Brandon"]
sibling.single = false;
sibling.email = "email@email.com";


//passing argument/methods into function

function meetSibling(){
    console.log("My name is " + sibling.name);
}

meetSibling(sibling);


//acessing objects
//dot notation
document.write("My name is " + sibling.name + "I am " + sibling.age + "years old.");
//bracket notation
document.write("My name is " + sibling["name"] + "My email is " + sibling["email"]);
//see all keys/values in an object
//for in loop
for (key in sibling){
     document.write(key)
    // console.log(key);
}

document.write (Object.keys(sibling));


//a recipe card
//create an object to hold information on your favorite recipe. It should have 
//4 propertires including a string, a number, an array of string, and 1 more
//on seperate lines(one console.log for each statement for each) log the recipe information

//object literal way
var recipe = {
    name: "Food",
    servings: 4,
    ingredients: ["Milk", "Butter", "Heat"],
    calories: "680 calories a serving",
     
}

//object construct way
// var recipe = new Object();
//     recipe.name = "Food";
//     recipe.servings = 4;
//     recipe.ingredient = ["Milk", "Butter", "Heat"];
//     recipe.calories = "680 calories a serving";
     

console.log("Our recipe/dish for today is called " + recipe.name);
console.log("This is a serving of  " + recipe.servings);
console.log("There are " + recipe.calories);
console.log("The ingredients are " + recipe.ingredients);



//keep track of books you have read and what you want to read
//creat an array of objects, where each object describes a book and has properties for the title(string),
//author(string), alreadyREad(boolean)
//iterate through arroy of books, for each book, log the book by title and author like so: The Hobbit by JRR Tolkien
//now use an if/else statement to change the ouput depending on whether you read it yet or not,

var books = [
    {
        title: "The host",
        author: "Stephanie Meyer?",
        alreadyRead: true

    },

    {
        title: "Holes",
        author: "Yes",
        alreadyRead: true

    },

    {
        title: "A Promised Land",
        author: "Obama",
        alreadyRead: false

    },
];


for (i=0; i<books.length; i++){
    var book = books[i];
    var bookInfo = book.title + " by " + book.author;
    if (book.alreadyRead){
        console.log("You read " + bookInfo);
    }
    else{
        console.log("You should read " + bookInfo);
    }
 }