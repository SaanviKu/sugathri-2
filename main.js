song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill('#CE4CF7')
    stroke('#CE4CF7')
    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);

        document.getElementById("stop").innerHTML = song2.stop();
        song2.stop;
    }

    if(scoreLeftWrist = false);
    {
        document.getElementById("play").innerHTML = song1.play();
        song1.play;
    }

    if(scoreRightWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);

        document.getElementById("play").innerHTML = song2.play();
        song2.play;
    }

    if(scoreRightWrist = false);
    {
        document.getElementById("stop").innerHTML = song1.stop();
        song1.stop;
    }
}

function play() {
    song.play();
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if (results.length > 0)
    {
        fill('#CE4CF7')
        stroke('#CE4CF7')

        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x; 
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x; 
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX +"rightWristY ="+ rightWristY);
    }
}