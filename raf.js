//console.log()




 function loaded() {
    let bd = document.querySelector("#app");
    // console.log(bd);
    let gradientIndex = -1;
    let start = null;
    function drawPercent (gradient, procent){
        // console.log(gradient.type);
        switch (gradient.type) {
            case "linear":
                // console.log("linear")
                return  `linear-gradient(to right, ${gradient.to}, ${gradient.from} ${procent}%)` 

            case "radial":
                
                return `radial-gradient(at center, ${gradient.to} ${procent}%, ${gradient.from})`
                // console.log(bd.style.background)

                break;
            case "diamand":
                return `radial-gradient(at center, ${gradient.to} ${procent}, ${gradient.from})`
                
            default:
                break;
        }
    }

    function changeGradient(){

    }
    let colors = mockColors;
    // console.log(colors);
    
    var gradient = null;
    var deltaTime = 5000;
    function step(timestamp) {
        //console.log(timestamp);
        if (!start) start = timestamp;
        var progress = timestamp - start;
        //console.log(progress)
        //element.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
        var index = Math.floor(progress / deltaTime) % (colors.length - 1)
        
        if( index === gradientIndex){
            let procent = progress % deltaTime;
            // console.log("----drawPercent")
            //console.log(bd.style.background);
            let bgcurr = drawPercent(gradient, procent*100/deltaTime)
            // console.log(bgcurr);
            bd.style.backgroundImage = bgcurr;
        }else{
            gradientIndex = index;

            gradient = {
                from : colors[index].color,
                to : colors[index+1].color,
                type: colors[index].type
                //gradient : gradient.index + 1
            }
            // console.log("---change gradient", gradient, index);
            //changeGradient(index);
        }
        
        if (
            //progress < (mockColors.length-1) * 1000
            true
        ) {

            window.requestAnimationFrame(step);
        }
    }
    
    window.requestAnimationFrame(step);
} 


document.addEventListener("DOMContentLoaded", loaded);

