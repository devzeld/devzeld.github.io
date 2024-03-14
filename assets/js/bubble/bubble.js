class Bubble{
    static previousID = 0;
    parent;
    bubble;
    ID;
    size;
    position = 10;

    constructor(size, parent = document.querySelector("body")) {
        this.bubble = document.createElement("div");
        this.ID = Bubble.previousID++;
        this.bubble.id = this.ID;
        this.parent = parent;

        this.size = size;
        this.bubble.className = "bubble";
        this.bubble.size = this.size + "px";
        this.bubble.style.width = this.size + "px";
        this.bubble.style.height = this.size + "px";

        this.bubble.filter = "blur("+ Math.abs(Math.random() * Math.random() < 0.45 ? 1 : 10) + ");"
        this.bubble.borderRadius = 1000 + "px";
        this.bubble.style = "background: rgb(140,187,236); background: radial-gradient(circle, rgba(140,187,236,1) 20%, rgba(2,0,36,1) 80%);"; //background-image: linear-gradient(to top, #000000, #271c23, #403349, #4d5175, #4573a3);
        this.bubble.positionY = 50;
        this.bubble.positionX = this.bubble.position;
        this.bubble.zIndex += 10;
        this.bubble = document.getElementById(this.ID);
        parent.appendChild(this.bubble);

        function float(){
            console.log(this.parent);
            if(this.height < -this.size){
                this.parent.removeChild(this.bubble);
            }
            this.height -= 69/(60 - this.size);
            this.bubble.style.top = this.height + "px";
        }


        setInterval(float(), 2000);
    }

}

