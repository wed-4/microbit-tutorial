sleep_time = 0

def on_button_pressed_a():
    global sleep_time
    sleep_time = sleep_time - 50
    if sleep_time < 0:
        sleep_time = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global sleep_time
    sleep_time = sleep_time + 50
    if 500 < sleep_time:
        sleep_time = 500
input.on_button_pressed(Button.B, on_button_pressed_b)
