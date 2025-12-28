// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020203040201020202020202020202020102030402020202020202020202020202020304020202020202020202020102020203040202020202020202020202020202030402020202010102020202020102010304020202020202020202010202020203040202020202020202020202020202030402020202020202020202020202010304020101020202020202020202020203040202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath4,sprites.castle.tilePath6], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`10001000030202020202020202020202020202060801010101010101010101010101010908010101010101010101010101010109080101010101010101010101010101090801010101010101010101010101010908010101010101010101010101010109080101010101010101010101010101090801010101010101010101010101010908010101010101010101010101010109080101010101010101010101010101090801010101010101010101010101010908010101010101010101010101010109080101010101010101010101010101090801010101010101010101010101010908010101010101010101010101010109070404040404040a0404040404040405`, img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
. 2 2 2 2 2 2 . . 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,myTiles.tile1], TileScale.Sixteen);
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`0f000f00060909090909090909070101010101050a0a0a0a0a0a0a0a080101010101050a0a0a0a0a0a0a0a0a0909090101050a0a0a0a0a0a0a0a0a0202020101050a0a0a0a0a0a0a0a0801010101010302020202020202020401010101010b010b010b010b010b010101010101010b010b010b010b010b01010101010b010b010b010b010b010101010101010b010b010b010b01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
