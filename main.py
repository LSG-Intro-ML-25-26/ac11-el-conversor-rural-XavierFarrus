@namespace
class SpriteKind:
    Tree = SpriteKind.create()

def on_down_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-down
            """),
        500,
        False)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_right_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-right
            """),
        500,
        False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-left
            """),
        500,
        False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_a_pressed():
    global arboles_recolectados
    for arbol_sprite in sprites.all_of_kind(SpriteKind.Tree):
        if nena.overlaps_with(arbol_sprite):
            pause(200)
            arbol_sprite.destroy()
            arboles_recolectados += 1
            info.set_score(arboles_recolectados)
            break
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_up_pressed():
    animation.run_image_animation(nena,
        assets.animation("""
            nena-animation-up
            """),
        500,
        False)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

y = 0
x = 0
actuales = 0
arboles_recolectados = 0
nena: Sprite = None
arbol = 0
nena = sprites.create(assets.image("""
    nena-front
    """), SpriteKind.player)
controller.move_sprite(nena)
tiles.set_current_tilemap(tilemap("""
    nivel1
    """))
scene.camera_follow_sprite(nena)
info.set_score(arboles_recolectados)
X_max = 150
Y_max = 145
Y_min = 110
nena.z = 10

def on_forever():
    global actuales, x, y
    actuales = len(sprites.all_of_kind(SpriteKind.Tree))
    if actuales < 5:
        X_min = 0
        pause(1000)
        nuevo_arbol = sprites.create(assets.image("""
            arbol
            """), SpriteKind.Tree)
        x = randint(X_min, X_max)
        y = randint(Y_min, Y_max)
        nuevo_arbol.set_position(x, y)
forever(on_forever)
