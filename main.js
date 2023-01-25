img="";
status="";
function preload(){
    img=loadImage('dog_cat.jpg');


}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectdetector.detect(img,gotresults);

}
function draw(){
image(img,0,0,640,420);
fill("red");
text("dog",45,75);
noFill();
stroke("red");
rect(30,60,450,350);

fill("blue");
text("cat",320,120);
noFill();
stroke("blue");
rect(300,90,270,320);
}
function gotresults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    

}

