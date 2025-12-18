namespace SpriteKind {
    export const Tree = SpriteKind.create()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-down`,
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-right`,
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-left`,
    500,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let arbol_sprite of sprites.allOfKind(SpriteKind.Tree)) {
        if (nena.overlapsWith(arbol_sprite)) {
            pause(200)
            arbol_sprite.destroy()
            arboles_recolectados += 1
            info.setScore(arboles_recolectados)
            break;
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nena,
    assets.animation`nena-animation-up`,
    500,
    false
    )
})
let y = 0
let x = 0
let actuales = 0
let arboles_recolectados = 0
let nena: Sprite = null
let arbol = 0
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
controller.moveSprite(nena)
tiles.setCurrentTilemap(tilemap`nivel1`)
scene.cameraFollowSprite(nena)
info.setScore(arboles_recolectados)
let X_max = 150
let Y_max = 145
let Y_min = 110
nena.z = 10
forever(function () {
    let X_min: number;
let nuevo_arbol: Sprite;
actuales = sprites.allOfKind(SpriteKind.Tree).length
    if (actuales < 5) {
        X_min = 0
        pause(1000)
        nuevo_arbol = sprites.create(assets.image`arbol`, SpriteKind.Tree)
        x = randint(X_min, X_max)
        y = randint(Y_min, Y_max)
        nuevo_arbol.setPosition(x, y)
    }
})
