var groceryStore = [
  {
    name:'apples',
    total:1
  },
  {
    name:'bread',
    total:1.25
  },
  {
    name:'eggs',
    total:1.50
  },
  {
    name:'flour',
    total:1.75
  },
  {
    name:'meat',
    total:2
  },
  {
    name:'milk',
    total:2.25
  },
  {
    name:'potatoes',
    total:2.50
  },
  {
    name:'carrots',
    total:2.75
  },
  {
    name:'bannanas',
    total:3
  },
  {
    name:'scorpions',
    total:3.25
  },
]
groceryStore.forEach(function(i){
  console.log(i.name );
  console.log('$' + i.total);

});
var subTotal = 0;
groceryStore.forEach(function(i){
  subTotal += i.total;
});
var tax = subTotal * 0.06;
var finalTotal = subTotal + tax;
console.log('Subtotal: $' + subTotal);
console.log('Tax: $' + tax.toFixed(2));
console.log('Total: $' + finalTotal.toFixed(2));
