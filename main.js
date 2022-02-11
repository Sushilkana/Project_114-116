function preload(){

}

function setup(){
    canvas = createCanvas(600,380);
    canvas.position(300,150);
    video = createCapture(VIDEO);
    video.position(300,150);
    video.hide();
    
}

function draw(){
    image(video,0,0,)
}

function Save_Image(){
    save("Image.jpg");
}