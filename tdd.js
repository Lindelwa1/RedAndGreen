
var assert = {
   equals:function(expectedResult, returnResult){

         
      var mySquare = new RedOrGreen("mySquare");

      if(expectedResult === returnResult){
  
         mySquare.makeGreen();
      }
      else{
         mySquare.makeRed();
      }
         
       }
}
var TestMyCode = {
   run: function(name,test){
      this.name = name;
      test(assert);
}
};
         
