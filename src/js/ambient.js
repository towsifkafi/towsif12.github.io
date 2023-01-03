
const sounds = {
    rain: new Tone.Player("src/sounds/rain.mp3").toDestination(),
    thunder: new Tone.Player("src/sounds/thunder.mp3").toDestination(),
    waves: new Tone.Player("src/sounds/waves.mp3").toDestination(),
    wind: new Tone.Player("src/sounds/wind.mp3").toDestination(),
    noise: new Tone.Player("src/sounds/noise.mp3").toDestination(),
    crickets: new Tone.Player("src/sounds/crickets.mp3").toDestination(),
    fire: new Tone.Player("src/sounds/fire.mp3").toDestination(),
    waterfall: new Tone.Player("src/sounds/waterfall.mp3").toDestination(),
    fan: new Tone.Player("src/sounds/fan.mp3").toDestination()
}

let sounds_name = Object.keys(sounds)
for(var i in sounds_name) {
    $(`.${sounds_name[i]}`).prop('disabled', true)
}

$('#status').text('Please Wait.. ( Click on the page a few times )')

Tone.loaded().then(() => {
    for(var i in sounds_name) {
        $(`.${sounds_name[i]}`).prop('disabled', false)
    }
    $('#status').text('Now you can use sliders..')
});

function updateVolume(name, value) {
    console.log({ name, value })
    let sound = sounds[name]
    if(value == -30) {
        sound.volume.value = -50
        sound.stop()
    } else {
        if(sound.state == 'stopped') {
            sound.start()
            sound.loop = true
            sound.volume.value = value
        } else {
            sound.volume.value = value
        }
    }
}

function updateSound(name, value) {
    let sound = sounds[name];
    sound.start()
    sound.loop = true
    sound.volume.value = value
    $(`.${name}`).val(val)
}