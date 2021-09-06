const rain = new Tone.Player("src/sounds/rain.mp3").toDestination();
const thunder = new Tone.Player("src/sounds/thunder.mp3").toDestination();
const waves = new Tone.Player("src/sounds/waves.mp3").toDestination();

$('#sounds').prop('disabled', true)
$('#status').text('Please Wait..')

Tone.loaded().then(() => {
    $('#sounds').prop('disabled', false)
    $('#status').text('Now you can use sliders..')
});

function rainVol(val) {
    console.log(val)
    if(val == -30) {
        rain.volume.value = -50
        rain.stop()
    } else {
        if(rain.state == 'stopped') {
            rain.start()
            rain.loop = true
            rain.volume.value = val
        } else {
            rain.volume.value = val
        }
    }
}

function updateRain(val) {
    rain.start()
    rain.loop = true
    rain.volume.value = val
    $('.rain').val(val)
}

function thunderVol(val) {
    console.log(val)
    if(val == -30) {
        thunder.volume.value = -50
        thunder.stop()
    } else {
        if(thunder.state == 'stopped') {
            thunder.start()
            thunder.loop = true
            thunder.volume.value = val
        } else {
            thunder.volume.value = val
        }
    }
}

function updateThunder(val) {
    thunder.start()
    thunder.loop = true
    thunder.volume.value = val
    $('.thunder').val(val)
}

function wavesVol(val) {
    console.log(val)
    if(val == -30) {
        waves.volume.value = -50
        waves.stop()
    } else {
        if(waves.state == 'stopped') {
            waves.start()
            waves.loop = true
            waves.volume.value = val
        } else {
            waves.volume.value = val
        }
    }
}

function updateWaves(val) {
    waves.start()
    waves.loop = true
    waves.volume.value = val
    $('.waves').val(val)
}