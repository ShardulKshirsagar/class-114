function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save('myfilter.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        mouthX = results[0].pose.mouth.x;
        mouthY = results[0].pose.mouth.y;
        console.log("mouth x=" + mouthX);
        console.log("mouth y=" + mouthY);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}