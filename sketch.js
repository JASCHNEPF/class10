

var a = prompt('Enter the first variable: ');
var b = prompt('enter the second variable: ');

function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap);
  }


function draw()
{
}
function swap() {
  [a,b]=[b,a];
  console.log("value of a after swaping is : ",+a);
  console.log("value of b after swaping is : ",+b);
}