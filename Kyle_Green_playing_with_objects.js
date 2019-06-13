

//How would you print/log John's age?

var users = {};
user1 = {name: "Michael", 
  age:37}, 
 
user2 = {name: "John", 
  age:30},
 
user3 = {name: "David", 
  age:27};


console.log("John is", user2["age"], "years old")



//How would you print/log the name of the first object?


var users = {};
user1 = {name: "Michael", 
  age:37}, 
 
user2 = {name: "John",                                      //added the age just for kicks
  age:30},
 
user3 = {name: "David", 
  age:27};


console.log(user1["name"], user1.age)


//How would you print/log the name and age of each user using a for loop?  Your output should look something like this

var users = [
  
  {name: "Michael", 
   
   age:37}, 
  
  {name: "John", 
   
   age:30}, 
  
  {name: "David", 
   
   age:27}];

for(var user in users){ 
  if(users [user].name && users[user].age < 3)
  {user++}
    
		console.log (users[user].name,users[user].age)
}