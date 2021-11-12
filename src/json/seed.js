//var args = process.argv.slice(2)

toNumber = (key) => {
    text = ""
    for (var i in key) {
        text += key[i].charCodeAt();
    }
    return text
}

function random(seed) {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}


seed = (key) => {
    return random(toNumber(key.substring(0, 100))).toString().replace('0.', '').padEnd(16, "0").substring(0, 16)
}

//console.log(seed(args.join(' ')))

// shuffle = (data) => {

//     var that=data.split("");
//     var len = that.length,t,i
//     while(len){
//      i=Math.random()*len-- |0;
//      t=that[len],that[len]=that[i],that[i]=t;
//     }
//     return that.join("");
//  }

// average = (array) => {
//     sum = 0
//     for(i in array) {
//         sum += array[i]
//     }
//     return sum/array.length
// }

// text = "1"
// items = []
// for (i =0; i < 100; i++) {
//     text += i
//     items.push(parseInt(seed(shuffle(text)).length))
// }

// console.log(average(items))

//console.log(seed(""))