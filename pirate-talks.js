var btntranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

// var serverURL= "http://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
 var serverURL = "https://api.funtranslations.com/translate/pirate.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("Hey Some Error has occured", error);
    alert("Please Try Again after some time");
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;

        })
        .catch(errorHandler)
};
btntranslate.addEventListener("click", clickHandler);