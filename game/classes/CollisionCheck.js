///work in progres and half pseudocode
var CollisionCheck=
{
    checkFall function(var positionX,var positionY,var tileWith,var tileHeight,var objects[]):
    {
        var tileHitPositionY = (((Math.ceil(positionY/tileHeight))-1)*10)-1;
        var tileHitPositionX = (Math.ceil(positionX/tileWith))-1;
        var tileNumber = tileHitPositionY + tileHitPositionX;
    
        if(objects[tileNumber].hit == true)
        {
            return true;
        }
        else
        {
            return false;
        }
    },
};