// function isUnique(string){
//   var length= string.length;
//   for(var i= 0; i < length; i++){
//     var char = string[i];
//     if(string.indexOf(char, i+1) > -1){
//       return false
//     }
//   }
//   return true;
// }

// isUnique('hello');
// isUnique('bogey');

// function isUnique(string) {
//   var length= string.length;
//   for(var i= 0; i < length; i++){
//     var char=string[i];
//     if(string.indexOf(char, i+1) > -1) {
//       return false;
//     }
//   }
//   return true;
// }

// isUnique(balloon);
// isUnique(car);


// function isUnique(string){
//   var length= string.length;
//   for(var i= 0; i< length; i++){
//     var char = string[i];
//     if(string.indexOf(char, i+1) > -1){
//       return false
//     }
//   }
//   return true;
//   }

// //  isUnique('hello');
// isUnique('bogey'); 


class Customer {
    constructor(name, town, phone){
      this.name= name;
      this.town= town;
      this.phone= phone;
    }
    getHashCode(){
      return parseInt(this.phone);
    }
  }
  
  let customerList={};
  let john = new Customer('john', 'boulder', '3033333003');
  
  customerList[john.getHashCode()]= john;
  
  customer.log(customerList['john']);