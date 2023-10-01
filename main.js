function preload()
{
 classifier = ml5.imageClassifier('doodleNet');
}

function setup()
{
    canvas = createCanvas(280, 280);
    canvas.position(530, 200);
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function draw()
{
    strokeWeight(20);
    stroke("#632d2d");

    if(mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
        
    }
}

function Cc()
{
    background("white");
}

function classifyCanvas()
{
    classifier.classify(canvas, gotResult);
}

function gotResult(error, result)
{
    if(error)
    {
        console.error(error);
    }
    console.log(result)

    document.getElementById("labelL").innerHTML ="label:" + result[0].label;
    document.getElementById("labelC").innerHTML ="confidence:" + Math.round(result[0].confidence) * 100 + "%";

    utterThis = new SpeechSynthesisUtterance(result[0].label);
    synth.speak(utterThis);
}