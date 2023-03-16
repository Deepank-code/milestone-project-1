const Economy = 4000;
const Midsize = 10000;
const Luxury = 20000;

let rental_cost = function (days, type) {
  return type * days;
};

console.log(rental_cost(20, Midsize));
