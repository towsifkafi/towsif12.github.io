const rain = new Tone.Player("src/sounds/rain.mp3").toDestination();
const thunder = new Tone.Player("src/sounds/thunder.mp3").toDestination();
const waves = new Tone.Player("src/sounds/waves.mp3").toDestination();
const wind = new Tone.Player("src/sounds/wind.mp3").toDestination();
const noise = new Tone.Player("src/sounds/noise.mp3").toDestination();

$('.rain').prop('disabled', true)
$('.thunder').prop('disabled', true)
$('.waves').prop('disabled', true)
$('.wind').prop('disabled', true)
$('.noise').prop('disabled', true)

$('#status').text('Please Wait.. ( Click on the page a few times )')

Tone.loaded().then(() => {
    $('.rain').prop('disabled', false)
    $('.thunder').prop('disabled', false)
    $('.waves').prop('disabled', false)
    $('.wind').prop('disabled', false)
    $('.noise').prop('disabled', false)
    $('#status').text('Now you can use sliders..')
});

function rainVol(val) {
    console.log(val)
    if(val == -30) {
        rain.volume.value = -50
        rain.stop()
        $('rainbox').css('color', 'green')
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



function windVol(val) {
    console.log(val)
    if(val == -30) {
        wind.volume.value = -50
        wind.stop()
    } else {
        if(wind.state == 'stopped') {
            wind.start()
            wind.loop = true
            wind.volume.value = val
        } else {
            wind.volume.value = val
        }
    }
}

function updateWind(val) {
    wind.start()
    wind.loop = true
    wind.volume.value = val
    $('.wind').val(val)
}


function noiseVol(val) {
    console.log(val)
    if(val == -30) {
        noise.volume.value = -50
        noise.stop()
    } else {
        if(noise.state == 'stopped') {
            noise.start()
            noise.loop = true
            noise.volume.value = val
        } else {
            noise.volume.value = val
        }
    }
}

function updateNoise(val) {
    noise.start()
    noise.loop = true
    noise.volume.value = val
    $('.noise').val(val)
}