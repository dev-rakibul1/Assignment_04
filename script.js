function publicBusFare(peoples) {
  if (peoples < 50) {
    let letThenPeople = peoples % 11;
    console.log(letThenPeople * 250);
  } else if (peoples >= 50) {
    let bigArenagement = peoples % 50;
    let finalRestult = bigArenagement % 11;
    console.log(finalRestult * 250);
  }
}

publicBusFare(51);
