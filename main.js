function preload(){

}

function setup(){
    canvas = createCanvas(900,500);
    canvas.position(350,200);
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelload);
    posenet.on('pose',gotposes);
}

function draw(){
    image(video,0,0,900,500);
}

function Save_Image(){
    save("Image.jpg");
}

function modelload(){
    console.log("posenet is initialtized...");
}

function gotposes(result){
    if (result.length > 0){
     console.log(result);
     console.log("Nose x " + result[0].pose.nose.x);
     console.log("Nose y " + result[0].pose.nose.y);
    }
}