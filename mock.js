//var body = document.body;
let domContent =  new Promise((s, f)=>{
    document.addEventListener("DOMContentLoaded",function () { 
        
        var bd = document.body;
        var head = document.getElementsByTagName("head")[0];
        var style = document.createElement("style");
        var bdStyle = document.querySelector("body").style;
        
        console.log(bdStyle)
        head.appendChild(style); 
        console.log(head.childNodes);
    });
})





function generateRandomColor(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`
}
function getRandomType(){
    return ["linear", "radial"][Math.floor(Math.random()*2)]
}
function getColors(count){
    var result = [];
    for(var i=0; i<count; i++){
        result.push({
            color: generateRandomColor(),
            type: getRandomType() 
        });
    }
    return result
}



var mockColors = [
    {
        color: "green",
        type: "radial"
    },{
        color: "yellow",
        type: "linear"
    },{
        color: "magenta",
        type: "radial"
    },{
        color: "orange",
        type: "linear"
    },
    {
        color: "green",
        type: "radial"
    }

]