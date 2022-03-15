Webcam.set({
    height:300,
    width:350,
    image_qualty:'jpeg',
    jpeg_qualty:100

});


camera=document.getElementById("camara");
Webcam.attach("#camara");


function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="op"src="'+data_uri+'">';


    })
}
console.log("ml5 version=",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sq-gVCeDP/.json',modelloaded);
function modelloaded(){
    console.log("model is loading wait....");
}
function identify_object(){
    img=document.getElementById("op");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
if(error){
console.error(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}