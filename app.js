// Problem 1
function radianToDegree(radian) {
  const pi = Math.PI;

  if (typeof radian !== "number") {
    return "please enter a valid value";
  } else {
    let getResult = radian * (180 / pi);
    let finalOutput = getResult.toFixed(2);
    return finalOutput;
  }
}
radianToDegree(25);

// Problem 2
function isJavaScriptFile(fileType) {
  if (typeof fileType !== "string") {
    return "please enter a valid key";
  } else {
    if (fileType === "index.js" || fileType === "app.js") {
      return true;
    } else {
      return false;
    }
  }
}
isJavaScriptFile("index.js");

// Problem 3
function oilPrice(diesel, petrol, octane) {
  if (
    // type check
    typeof diesel !== "number" ||
    typeof petrol !== "number" ||
    typeof octane !== "number"
  ) {
    return "Please enter the valid value";
  } else {
    let requireDieselPrice = 114 * diesel;
    let requirePetrolPrice = 130 * petrol;
    let requireOctanePrice = 135 * octane;

    const totalPrice =
      requireDieselPrice + requirePetrolPrice + requireOctanePrice;
    return totalPrice;
  }
}

oilPrice(30, 20, 10);

// Problem 4
function publicBusFare(peoples) {
  // requirement
  let busCapacity = 50;
  let microBusCapacity = 11;
  let localBusTicket = 250;

  if (typeof peoples !== "number") {
    return "Please enter the numner value";
  } else {
    if (peoples < busCapacity) {
      let lessThenPeople = peoples % microBusCapacity;
      let result = lessThenPeople * localBusTicket;
      return result;
    } else {
      let bigArrangement = peoples % busCapacity;
      let remainingPeople = bigArrangement % microBusCapacity;
      let finalResult = remainingPeople * localBusTicket;
      return finalResult;
    }
  }
}

publicBusFare(50);

// Problem 5
const friends = [
  { name: "abul", friend: "babul" },
  { name: "abul", friend: "babul" },
];

//
let bestFriend1 = friends[0];
let bestFriend2 = friends[1];

function isBestFriend(names1, names2) {
  // type check
  if (typeof names1 !== "object" || typeof names2 !== "object") {
    return "Please enter a object for get result";
  } else {
    // name check
    if (names1.name === names2.name && names1.friend === names2.friend) {
      return true;
    } else {
      return false;
    }
  }
}

isBestFriend(bestFriend1, bestFriend2);
