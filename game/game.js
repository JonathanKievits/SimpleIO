window.addEventListener("load", function () 
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var cw = canvas.width,
        ch = canvas.height;
    var tiles = [];
    var fallenTiles = [];
    var datem;
    var sec;
    var preSec = 2;
    
    for (var i = 0; i < 10; i++) 
    {
        for (var j = 0; j < 10; j++)
        {
            tile = Object.create(Tile);
            tile.w = canvas.width / 10;
            tile.h = canvas.height / 10;
            tile.x = ((0 + tile.w / 2) * 2) * j;
            tile.y = ((0 + tile.h / 2) * 2) * i;
            tiles.push(tile);
        }
    }
    
    console.log(typeof(tiles));
    
    datem = new Date();
    sec = datem.getSeconds();
    
    if(sec >= 57)
    {
        
    }
    else
    {
        preSec = sec + 3;
    }
    
    setInterval(loop, 17);
    
    function loop() 
    {
        context.clearRect(0, 0, cw, ch);
        
        datem = new Date();
        sec = datem.getSeconds();
        
        if(sec == 59)
        {
            preSec = 60;
        }
        else if(sec == 0 && preSec == 60)
        {
            preSec = 0;
        }
        
        if (fallenTiles.length < 100 && sec >= preSec)
        {
            console.log("spawn" + sec);
            
            var rand = Math.floor(Math. random()*tiles.length);
            
            tiles[rand].fall(context);
            fallenTiles.push(tiles[rand]);
            tiles.splice(rand,1);
            
            preSec = sec+1;
        
        }
        

        for (var i = 0; i < tiles.length; i++)
        {
            tiles[i].draw(context);
        }
        
        for (var i = 0; i < fallenTiles.length; i++)
        {
            fallenTiles[i].draw(context);
        }
    }

});
