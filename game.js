function CatchObject(){
    this.width = 20;
    this.height = 30; 
    this.inControl = false;
}

CatchObject.prototype = {
    setPosition(value){
        this.width = value;
    }
}

function Game(canvas){
    this.gameItems = [];
    this.score = 0;
    this.canvas = canvas;
    this.catch = new CatchObject();
    canvas.addEventListener('mousedown', (event) =>{
        console.log('mousedown')
        
        var {top, left, bottom} = canvas.getBoundingClientRect();

        var x = (event.clientX - left);
        var y = (event.clientY - top);
        if(this.isInteracted(x, y, catchObject)){
            this.catch.inControl = true;
        }
        
    })
    

    canvas.addEventListener('mouseup', (event) =>{
        console.log('mouseup');
        this.catch.inControl = false;
    })

    canvas.addEventListener("mousemove", (event) => {
        console.log('mousemove')
        
        if(!this.catch.inControl) return;
        
        var {top, left, bottom} = canvas.getBoundingClientRect();

        var x = (event.clientX - left);
        var y = (event.clientY - top);

        

        this.catch.setPosition(event.clientX - left); 

        /* if(fruit.score === -Infinity){
                    alert(`You score is ${this.score}!`);
                    location.reload();
                } 
        for (let index = 0; index < this.gameItems.length; index++) {
            const falling = this.gameItems[index].centerX;
            //var x = ;
            //var y = (event.clientY - top);
            
            
            if (this.isInteracted(falling.x, falling.y, catchObject)){
                
                if (fruit.score){
                    this.updateScore(fruit.score)
                }
                this.removeGameItem(index);
            }
        }
        */
    })
}

function Falliing(data, canvas){
    Object.assign(this, data);
    this.x = Math.random() * canvas.width;
    this.y = 0;

}

Falliing.prototype = {
    update(ctx){
        this.y += this.step; 
        ctx.drawImage(
            this.image, 
            this.x - this.width / 2, this.y,
            this.size, this.size 
        );
    }
    /*
    ruleCatch(keeper){
        return this.
    }
    */
}


Game.prototype = {
    addFallingItem(gameItem) {
        console.log('draw', gameItem);
		this.gameItems.push(new Falliing(gameItem, this.canvas))
	},

	removeGameItem(index) {
		this.gameItems.splice(index, 1);
	},

	isInteracted(positionX, positionY, fruit) {
		return positionX > fruit.x && positionX < fruit.x + fruit.width &&
			positionY > fruit.y && positionY < fruit.y + fruit.height
	},

	updateScore(updater){
		this.score += updater;
	}
}