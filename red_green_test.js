   var rg = new RedOrGreen("mySquare");

   rg.makeGreen();
   if(document.getElementById('mySquare').style.backgoundColor === "Green"){
   	window.alert("failure");
   }

else{
	window.alert("success");
}
   rg.makeRed();
   if(document.getElementById('mySquare').style.backgoundColor === "red"){
   	window.alert("failure");
   }
else{
	window.alert("success");
}
  
