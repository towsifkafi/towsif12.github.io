let bedrock = 1

function changeToBedrock() {
    console.log('clicked')
    if(bedrock) {
        console.log('to white')
        bedrock = 0
        $("#mcgetBedrock").html('Bedrock? <i class="fa-regular fa-square"></i>')
    } else {
        console.log('to black')
        bedrock = 1
        $("#mcgetBedrock").html('Bedrock? <i class="fa-regular fa-square-check"></i>')
    }
}