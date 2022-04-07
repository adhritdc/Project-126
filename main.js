leftWristX = ""; 
leftWristY = "";
rightWristX = "";
rightWristY = "";
song = "";

function preload()
{
    song = loadSound("Alan-Walker-Spectre(NCS).mp3");
}
function setup()
{
    canvas = createCanvas(500,500);
    canvas.position(550,300);

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results) { if(results.length > 0) { scoreRightWrist = results[0].pose.keypoints[10].score; scoreLeftWrist = results[0].pose.keypoints[9].score; console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist); rightWristX = results[0].pose.rightWrist.x; rightWristY = results[0].pose.rightWrist.y; console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY); leftWristX = results[0].pose.leftWrist.x; leftWristY = results[0].pose.leftWrist.y; console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY); } }
function modelLoaded() 
{
    console.log("PoseNet is initialized");
}
function draw()
{
    image(video, 0, 0, 600, 500);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}