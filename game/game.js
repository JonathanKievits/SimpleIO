window.addEventListener("load", function ()
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var cw = canvas.width, ch = canvas.height;
    var pl = Object.create(Player);

    setInterval(loop,5);

    function loop()
    {
        context.clearRect(0,0,cw,ch);
        pl.x += 10;
        pl.draw(context);
    }

});
