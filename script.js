//A programming language is said to have First-class functions
//when functions in that language may be used like any other variable

//I wrote a function called printMyMealPlan in line 86
//The purpose of the function is to return an array containing the three meals
//I will prepare for the day
//printMyMealPlan  accepts 4 parameters:

//1. breakfastArray
//3. lunchArray
//3. dinnerArray
//4. mealChooserFunction

//Remember that parameters are just placeholders
//let's explore this further
//1.breakfastArray
//breakfastArray is a placeholder for an array that contains breakfast options
//vegetarianBreakFastOptions in line 48 and southernBreakfastOptions in line 67 are
//two arrays that contain breakfast options
//either one may be passed as an argument to the breakFastArray parameter in our printMyMealPlan function

//2.lunchArray
//lunchArray is a placeholder for an array that contains lunch options
//vegetarianLunchOptions in line 54 and southernLunchOptions in line 73
//are two arrays that contain lunch options
//either one may be passed as an argument to the lunchArray parameter in our printMyMealPlan function

//3.dinnerArray
//dinnerArray is a placeholder for an array that contains dinner options
//vegetarianDinnerOptions in line 60 and southernDinnerOptions in line 79
//are two arrays that contain dinner options
//either one may be passed as an argument to the dinnerArray parameter in our printMyMealPlan function

//4. mealChooser
//Remember a parameter is just a placeholder
//It can even hold a place for another function
//mealChooserFunction is a place holder for the FUNCTION that we can use
//to select the meals for the meal plan

// I created a function called choosesRandomMeal in line 101 that accepts a meal array
// and returns a random element from that array

//I also created a function called choosesFirstMeal in line 109 that accepts a meal array
// and returns the first element from that array

//we can pass either function as an argument to the mealChooserFunction parameter

let vegetarianBreakfastOptions = [
  "Pancakes",
  "Avocado Toast",
  "Oatmeal",
  "Smoothie",
];
let vegetarianLunchOptions = [
  "Grilled Cheese",
  "Veggie Burger",
  "Tempeh Reuben",
  "Greek Salad",
];
let vegetarianDinnerOptions = [
  "Vegetable Pad Thai",
  "Teriyaki Tofu",
  "Tofu Parmesan",
  "Vegetable Lasagna",
];

let southernBreakfastOptions = [
  "Biscuits and Gravy",
  "Eggs and Grits",
  "Chicken and Waffles",
  "Country Fried Steak and Eggs",
];
let southernLunchOptions = [
  "Pulled Pork Sandwich",
  "Brisket Sandwich",
  "Chicken and Dumplins",
  "Chicken Pot Pie",
];
let southernDinnerOptions = [
  "Meatloaf",
  "Pork Chops",
  "Shrimp n Grits",
  "Baby Back Ribs",
];

function printMyMealPlan(
  breakfastArray,
  lunchArray,
  dinnerArray,
  mealChooserFunction
) {
  let meals = [
    mealChooserFunction(breakfastArray),
    mealChooserFunction(lunchArray),
    mealChooserFunction(dinnerArray),
  ];
  console.log(meals);
  return meals;
}

function choosesRandomMeal(mealArray) {
  //don't worry too much about the code we have assigned to the index variable
  //it is just some JavaScript magic for generating a random whole number that won't
  //be larger that the # of elements in the array
  let index = Math.floor(mealArray.length * Math.random());
  return mealArray[index];
}

function choosesFirstMeal(mealArray) {
  return mealArray[0];
}

//Template for function call:
// functionName(parameters)
//printMyMealPlan(breakfastArray, lunchArray, dinnerArray, mealChooserFunction);
printMyMealPlan(
  southernBreakfastOptions,
  southernLunchOptions,
  southernDinnerOptions,
  choosesFirstMeal
); //this function will return an array containing the same 3 meals every time
//you refresh the console, because we passed the choosesFirstMeal function as
//our argument to the mealChooserFunction parameter
printMyMealPlan(
  vegetarianBreakfastOptions,
  vegetarianLunchOptions,
  vegetarianDinnerOptions,
  choosesRandomMeal
); //this function will return new meals every time
//you refresh the console bc we passed the choosesRandomMeal function as
//our argument to the mealChooserFunction parameter
