var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerhtml = "";
    recognition.start();
}
recognition.onresult= function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    speak();
}
function speak (){
var synth = window.speechSynthesis;
dataholder = document.getElementById("textbox").value;
var Utterthis=new SpeechSynthesisUtterance(dataholder);
synth.speak(Utterthis);
Webcam.attach(camera);
}
Webcam.set({
width : 300,
height : 250,
image_format: 'jpg',
jpg_quality:90
}) ;
camera=document.getElementById("camera");
