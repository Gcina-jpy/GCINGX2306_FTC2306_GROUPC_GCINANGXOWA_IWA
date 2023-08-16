const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

  
let balance = 0;
if ((hourOfDay == 0) && (minuteOfDay == 0)){
    const taxAsDecimal = parseInt(tax) / 100;
    const startingAfterTax = salary * (1 - taxAsDecimal);
    balance = 'R ' + (startingAfterTax - (food + transport + rent)).toFixed(2);
}
console.log(balance);