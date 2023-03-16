const user_details = {
  user_name: "deepank",
  account_bal: 30000,
   deposit : function(amount){

   this.account_bal+=amount; 
   console.log(this.account_bal);
},
withdrawal:function(amount){
    if(this.account_bal<=0){
        console.log("insufficient balance");
    }
    this.account_bal-=amount; 
    console.log(this.account_bal);

}
  
};
user_details.deposit(4500);
user_details.withdrawal(500);