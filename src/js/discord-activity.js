$(document).ready(() => {

    // $.get('https://api.lanyard.rest/v1/users/674660356819517440', (data, status) => {
    //     console.log(status, data)
    //     if(status !== "success" || !data.success) return;

    //     let user = data;



    // })

    function updateStatus(activity, name, details, state,userdata, isSpotify = false) {
        let assets = activity.assets

        $('#activityImage').attr('src', `${isSpotify ? `${userdata.spotify.album_art_url}` : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${assets.large_image}.png`}`)
        $('#activityImageSmall').attr('src', `${isSpotify ? `/images/spotify.png` : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${assets.small_image}.png`}`)

        $('#name').text(`${isSpotify ? `${userdata.spotify.song}` : name}`)
        $('#details').text(`${isSpotify ? `Album: ${userdata.spotify.album}` : details}`)
        $('#state').text(`${isSpotify ? `${userdata.spotify.artist}` : state}`)
    }

    function updateHtml(data) {

        if(data.op == 1) return;
        let userdata = data.d
        console.log(data);

        let status = userdata.discord_status;

        if(status == "online") {
            $('#disavatar').css(`border`, `solid 2.5px #3ABF6A`)
        } else if(status == "offline") {
            $('#disavatar').css(`border`, `solid 2.5px #444A51`)
        } else if(status == "dnd") {
            $('#disavatar').css(`border`, `solid 2.5px #ED4245`)
        } else if(status == "idle") {
            $('#disavatar').css(`border`, `solid 2.5px #FAA81A`)
        }

        $('#username').text(`${userdata.discord_user.username}#${userdata.discord_user.discriminator}`)

        let activities = userdata.activities;

        for(var i in activities) {
            let activity = activities[i];
            if(activity.name == "Custom Status") {
                $('#statusText').text(`${activity.emoji?.name} ${activity.state}`)
            } else if(activity.type == 0 || activity.type == 2) {


                let isSpotify = false
                if(userdata.listening_to_spotify) isSpotify = true;

                let assets = activity.assets;
                let name = activity.name;
                let details = activity.details;
                let state = activity.state;

                let timestamp = activity.timestamps?.start

                let customStatus = document.createElement('div')
                customStatus.className = "customStatus"
                let span = document.createElement('span')
                span.id = "customStatus"
                span.innerText = `${isSpotify ? `Listening to...` : `Activity`}`
                customStatus.appendChild(span)
                let statusContainer = document.createElement('div')
                statusContainer.className = "statusContainer"
                let activityBox = document.createElement('div')
                activityBox.className = "activityBox"

                let activityImgBox = document.createElement('div')
                activityImgBox.className = "activityImgBox"
                let activityImage = document.createElement('img')
                let activityImageSmall = document.createElement('img')
                activityImage.id = "activityImage"
                activityImageSmall.id = "activityImageSmall"
                activityImgBox.appendChild(activityImage)
                activityImgBox.appendChild(activityImageSmall)
                let activityInfo = document.createElement('div')
                activityInfo.className = "activityInfo"

                let activityName = document.createElement('span')
                activityName.id = "name"
                let activityDetails = document.createElement('span')
                activityDetails.id = "details"
                let activityState = document.createElement('span')
                activityState.id = "state"

                activityInfo.appendChild(activityName)
                activityInfo.appendChild(activityDetails)
                activityInfo.appendChild(activityState)

                activityBox.appendChild(activityImgBox)
                activityBox.appendChild(activityInfo)

                statusContainer.appendChild(activityBox)
                customStatus.appendChild(statusContainer)


                
                
                if(data.t == "INIT_STATE") {
                    $('.presence').append(customStatus)
                    updateStatus(activity, name,details,state, userdata, isSpotify)
                } else if(data.t == "PRESENCE_UPDATE") {
                    updateStatus(activity, name,details,state, userdata, isSpotify)
                }


            }
        }

    }

    var ws = new WebSocket('wss://api.lanyard.rest/socket');

    ws.onopen = (event) => {
        ws.send(`{"op":2,"d":{"subscribe_to_id":"674660356819517440"}}`)
    }

    ws.onmessage = (event) => {
        //console.log(event.data)
        let data = JSON.parse(event.data)
        //console.log(data)
        updateHtml(data)
    }

    ws.onerror = function(error) {
        console.log(`Error connecting to lanyard api...`)
    };


})