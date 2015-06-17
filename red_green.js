function RedOrGreen(mySquare){
  this.makeRed = function(){
	document.getElementById(mySquare).style.background = 'red';

};

  this.makeGreen = function(){
	document.getElementById(mySquare).style.background = 'green';
};
}