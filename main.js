Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality : 100
});

Webcam.attach("#webcam");

function clickimage(){

    Webcam.snap(function(url)
    {
     document.getElementById("photo").innerHTML = '<img id="selfie" src="'+url+'">' ;   
    });
}

console.log('ml5 version:', ml5.version); 

gesturemodel = ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image/model.json',modelLoaded); 

function modelLoaded() {
     console.log('Model Loaded!');
     } 

function predict() { 
    img = document.getElementById('selfie');
    gesturemodel.classify(img , getresults);
}

function getresults(error,results){

    if(error){
        console.error(error);
    }

    else{
        console.log(results);

        guess=results[0].label;

        if(guess=="good"){

            document.getElementById("good").style.fontSize="100px";
        }

        if(guess=="victory"){

            document.getElementById("victory").style.fontSize="100px";
        }

        if(guess=="bad"){

            document.getElementById("bad").style.fontSize="100px";
        }
    }
}