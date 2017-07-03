var Tile ={
    w:50,
    h:50,
    x:100,
    y:100,
    color: "#FFFFFF",
    draw: function(context)
    {
        context.beginPath();
        context.fillStyle=this.color;
        context.rect(this.x,this.y,this.w,this.h);
        context.fill();
        context.stroke();
        context.closePath();
    },
    fall: function(context)
    {
        this.color = "#FF0000";
    }
};
