function rollPitch (pos: any[]) {
    if (input.rotation(Rotation.Roll) > 20 && pos[0] < 4) {
        pos[0] += 1
    }
    if (input.rotation(Rotation.Roll) < -20 && pos[0] > 0) {
        pos[0] += -1
    }
    if (input.rotation(Rotation.Pitch) > 20 && pos[1] < 4) {
        pos[1] += 1
    }
    if (input.rotation(Rotation.Pitch) < -20 && pos[1] > 0) {
        pos[1] += -1
    }
}
function moveDot(pos: any[]) {
    led.unplot(pos[0], pos[1])
    rollPitch(pos)
    drawDot(pos)
}
function drawDot(pos: any[]) {
    led.plot(pos[0], pos[1])
}
let position = [2, 2]
drawDot(position)
basic.forever(function () {
    basic.pause(200)
    moveDot(position)
})
