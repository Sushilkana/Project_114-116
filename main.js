Nose_X = 0;
Nose_Y = 0;

function preload(){
    Mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    Lipstick  = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png'); 
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
    image(Mustache,Nose_X,Nose_Y,110,30);
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
     Nose_X = result[0].pose.nose.x +72;
     Nose_Y = result[0].pose.nose.y +30;
    }
}

function Mustache_Shot(){
    var Mustache_Shot = true;
    image(Mustache,Nose_X,Nose_Y,110,40);
}

function Lipstick_Shot(){
    
}

function ClownNose_Shot(){
    
}

function Beard_Shot(){
    
}

function Hair_Shot(){
    
}

function Face_Shot(){
    
}