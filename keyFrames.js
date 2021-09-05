
/*
body.style.background = `linear-gradient(black, red, white)`
body.style.backgroundSize = "100%, 100%"
style.id="myStyle"
*/
function radial(from, to, time){
    return `
        body{
            background: radial-gradient(${to} 30%, ${from} 70%), ${from};
            background-position: center;
            background-repeat: no-repeat; 
            animation: name ${time}ms;
        }
        @keyframes name {
            from{
                background-size: 0% 0%;
            }
            to {
                background-size: 200% 200%;
            }
        }


    `
}

function linear(from, to, time, name){
    return `
        body {
            background: linear-gradient(-45deg, ${to}, ${from});
            background-size:  600% 600%;
            animation: ${name} ${time}ms ;
            background-repeat: no-repeat; 
        }
        @keyframes ${name} {
            from {
                background-position: 0% 0%; 
            }
            to {
                background-position: 100% 100%;
            }
        }

    `
}
var master = {
    linear,
    radial
}
console.log(master);


function stepAnimation(from, to, time){
    kfr = master[from.type](from.color, to.color, time);
    console.log(kfr);
    style.innerHTML= kfr            
}





function makeFrameAnimation(time){
    var colors = mockColors//getColors(8);

    var timeout = null;
    var index = 0;
    var interval = setInterval(function(){
        var i = index % (colors.length-1);
        //var n = index === color.length-1 ? 
        var step = colors[i];
        
        /* if (colors.length - 2 == i){
            clearInterval (interval)
        } */
        stepAnimation(step, colors[i+1], time, `name-${i}`);
        //console.log('interval : ', i);
        index++;
    },time)

}

/*style.innerHTML = linear("black", "yellow")*/
makeAnimation(3000);

/* function gen(i){
    console.log(i)
}
for(var i=0; i<6; i++){
    setTimeout(gen(i), 1000)
} */
