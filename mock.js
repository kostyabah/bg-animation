





function createFalling(item, i){
    var size = 30 - 5 * i; 
    var score = (1 + i) * 100;
    return {
        src: item,
        score: score, 
        size: size, 
        //image = new Image()
    }
} 

var imageList = ['images/name0.jpg', 'images/name1.jpg', 'images/name2.jpg'].map(
        (item, i) => createFalling(item, i)
    );



//var mockColors = [];