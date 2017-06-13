var Player ={
    radius:50,
    x:100,
    y:100,
    
    
    draw: function(context)
    {
        context.beginPath();
        context.fillStyle = "#c82124";
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.fill();
        context.stroke();
        context.closePath();
    },
};

