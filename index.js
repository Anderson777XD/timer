var seconds = 0
var minuts = 0
var interval = 2
var hours = 0





function start(){
    watch()
    console.log('iniciou')
   interval = setInterval(watch,10)
}

function pause(){
    clearInterval(interval)
    console.log('pausou')
}

function stop(){
    clearInterval(interval)
    minuts=0
    seconds=0
    console.log('parou')
    document.getElementById('watch').innerText='00:00:00'
}

function twodigits(digit){
    if(digit<10){
      return('0'+digit)
    }else{
        return(digit)
    }
    
    

}

function watch(){
    seconds++
    if(seconds==60){
        minuts++
        seconds=0
        if(minuts==60){
            minuts=0
            hours++
        }
    }
    document.getElementById('watch').innerText=twodigits(hours)+':'+twodigits(minuts)+':'+twodigits(seconds)
}