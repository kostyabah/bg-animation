



var holst = document.getElementById('holst');
/*
function getRandomBetween(start, end) {
    return start + (end - start) * Math.random();
}

function isBeetweenPosition(min, max, position){
    return position > min && position < max ;
}
*/

var Ref = null;
var ctx = document.getElementById('holst').getContext('2d');
var game = new Game(holst);

function gameLoop()  {
	ctx.clearRect(0, 0, holst.width, holst.height);

	//ctx.fillText(`Score: ${game.score}`, 10, 40);

	for (let index = 0; index < game.gameItems.length; index++) {
		var fruit = game.gameItems[index];
		fruit.update(ctx);
	}

	//REF = requestAnimationFrame(gameLoop);
};

function startGame() {
	//gameLoop();
    
	for (let index = 0; index < 3; index++) {
		game.addFallingItem(imageLoaderInstance.imageCache[index]);
	}
    gameLoop();
    
}

function ImageLoader(loadingCallback){
    this.imageStack = [];
    this.imageCache = [];
    this.loading = true;
    this.loadingCallback = loadingCallback;
}

ImageLoader.prototype = {
    checkLoaded(){
        if (this.imageCache.length === this.imageStack.length) {
            console.log('checkLoaded', this.imageCache.length);
            this.loading = false;
            this.loadingCallback();
        }
    },

    addImage(props) {
        this.loading = true;

        if (this.imageStack.includes(props.url)){
            this.checkLoaded();
            return;
        };

        

        this.imageStack.push(props.src);
        console.log("imageCache", this.imageCache);
        console.log("imageStack", this.imageStack);


        var image = new Image();
        image.src = props.src;
        image.onload = () => {
            console.log('imageLoaded', props)
            this.imageCache.push({
                image,
                ...props,
            });

            this.checkLoaded();
        };
    }
}


var imageLoaderInstance = new ImageLoader(startGame)

for (var index = 0; index < imageList.length; index++) {
	var fruit = imageList[index];
	imageLoaderInstance.addImage(fruit);
};