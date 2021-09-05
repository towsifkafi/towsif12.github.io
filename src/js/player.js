const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'Lemon Tree',
            artist: 'Gustixa',
            url: 'music/gustixa-lemontree.mp3',
            cover: 'music/lemontree.jpg',
            lrc: 'music/lemontree.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'Oviman',
            artist: 'Tanveer Evan',
            url: 'music/tanveer-evan-oviman.mp3',
            lrc: 'music/oviman.lrc',
            cover: 'cover2.jpg',
            theme: '#46718b'
        },
        {
            name: 'Rainy Mood',
            artist: 'RainyMood',
            url: 'https://rainymood.com/audio1112/0.m4a',
            cover: 'cover2.jpg',
            theme: '#46718b'
        }
    ]
});


// $('#lyrics').typer({
//     repeat:true,
//     backspaceDelay: 5000,
//     strings: [
//         'OwO'
//     ]
// })

$(document).ready(() => {
    $().progress(100)

    setInterval(() => {
        $('#lyrics').text(ap.lrc.current[ap.lrc.index][1])
    }, 10);

})