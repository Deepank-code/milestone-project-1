let product_cart = [
  { unit_price: 120, quantity: 3 },
  { unit_price: 220, quantity: 10 },
  { unit_price: 400, quantity: 9 },
];

const final_cost = (cart) => {
  let final_pricing=0;
  for(let i=0;i<cart.length;i++){
      final_pricing+=cart[i].unit_price*cart[i].quantity
  }
  return final_pricing;
};
console.log(final_cost(product_cart)); 
