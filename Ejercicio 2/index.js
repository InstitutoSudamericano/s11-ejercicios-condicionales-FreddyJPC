let firstname;
let age;
let ismarried;

firstname = "Freddy";
age = 18;
ismarried = false;

let message = "Mi nombre es " + firstname + ", tengo " + age + " años";

if (ismarried==true) {
  message += " y estoy casado.";
} else {
  message += " y no estoy casado.";
}

if (age >= 18) {
  message += " Además, soy mayor de edad.";
} else {
  message += " Además, soy menor de edad.";
}

alert(message);
