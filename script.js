function calculateCalories() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var age = parseFloat(document.getElementById("age").value);
  var gender = document.getElementById("gender").value;
  var activity = parseFloat(document.getElementById("activity").value);

  if (gender === "male") {
    var bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else if (gender === "female") {
    var bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age);
  }

  var calories = bmr * activity;

  document.getElementById("result").innerText = calories;
}
