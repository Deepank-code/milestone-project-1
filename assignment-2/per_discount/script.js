const discount_cal = (orig_price, dis_price) => {
  let discount = ((orig_price - dis_price) / orig_price) * 100;
  return "yupp! you have got a discount of " + discount + "%";
};

console.log(discount_cal(100, 30));
