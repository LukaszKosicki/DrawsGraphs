function wykresCos() {
  var canvas = document.getElementById('wykres2');
  var context = canvas.getContext('2d');
  var w = canvas.width;
  var h = canvas.height;
  var range = 30;
  var rangeX = w/range;
  var rangeY = h/range;

  context.strokeStyle = "red";
  context.lineWidth = 1/50;
  var a = document.getElementById('a2').value;
  var b = document.getElementById('b2').value;
  var y1;
  for(x=-rangeX; x<=rangeX; x+=0.01)
  {
    y = LiczCos(a, b, x);
    if(y1===undefined)
    {
      context.moveTo(x, y);
      y1=1;
    } else {
      context.lineTo(x,y)
    }
  }
  context.stroke();
}

 function LiczCos(a1, b1, x) {
   return a1*Math.cos(b1 * x);
 }
