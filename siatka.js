

function grid(canvasId)
{
  var canvas = document.getElementById(canvasId);
  var context = canvas.getContext('2d');
  var w = canvas.width;
  var h = canvas.height;
  var range = 30;
  var rangeX = w/range;
  var rangeY = h/range;

  context.strokeStyle = "black";
  for(i=1; i<=Math.floor(rangeX*2); i++)
  {
    context.lineWidth = 1/6;
    context.beginPath();
    context.moveTo((range/2)*i,0);
    context.lineTo((range/2)*i,h);
    context.closePath();
    context.stroke();
  }
  for(i=1; i<=Math.floor(rangeY*2);i++)
  {
    context.lineWidth = 1/6;
    context.beginPath();
    context.moveTo(0,(range/2)*i);
    context.lineTo(w,(range/2)*i);
    context.closePath();
    context.stroke();
  }
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(0,h/2);
  context.lineTo(w,h/2);
  context.closePath();
  context.stroke();

  context.beginPath();
  context.moveTo(w/2,0);
  context.lineTo(w/2,h);
  context.closePath();
  context.stroke();
  for(i=-(rangeX/2);i<=(rangeX/2);i++)
  {
    context.fillText(i, (i+(rangeX/2))*range,h/2);
  }
  context.save();
  context.translate(w/2, h/2);
  context.scale(range, range);

}
