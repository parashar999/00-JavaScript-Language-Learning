let score = "33"
console.log(typeof(score)); 

let valueInNumber =Number(score); // conversion of a number is easier but if score is not a number it will convert and store NaN in the valueInNumber
// If value like true is taken it will convert to 1;
console.log(typeof valueInNumber);
console.log(valueInNumber);

// while conversion to boolean. 1 => true; 0 => false, "" => false, "tarun" => true