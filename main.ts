let Distanciaaa = 0
basic.forever(function () {
    Distanciaaa = randint(0, 1)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    if (Distanciaaa == 0) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 15) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(500)
            music.playTone(262, music.beat(BeatFraction.Half))
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
            basic.pause(1000)
            music.playMelody("C5 C C5 C C5 C C5 C ", 500)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
            basic.pause(500)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        }
    } else if (Distanciaaa == 1) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 15) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(500)
            music.playTone(262, music.beat(BeatFraction.Half))
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
            basic.pause(1000)
            music.playMelody("C5 C C5 C C5 C C5 C ", 500)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            basic.pause(800)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
            basic.pause(500)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        }
    }
})
