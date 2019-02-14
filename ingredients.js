var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;

while (i < 8) {
  console.log(ingredients[i])
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (counter = 0; counter < 8; counter++) {
  console.log(ingredients[counter]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (counter = 7; counter >=0; counter --) {
  console.log(ingredients[counter]);
}