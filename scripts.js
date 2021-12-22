let quotedBy;
let prophetStatment;
let alHadeeth;
let source;


function getQuotedBy(value) {
    quotedBy = value;

}

function getProphetStatment(value) {
    prophetStatment = value;


}

function getAlHadeeth(value) {
    alHadeeth = value;
}

function getSource(value) {
    source = value;
    console.log("yuuygih");
}


function outputHadeeth() {

    document.getElementById("quotedBy").style.display = "none";
    document.getElementById("prophet").style.display = "none";
    document.getElementById("AlHadeeth").style.display = "none";
    document.getElementById("source").style.display = "none";
    document.getElementById("print").style.display = "none";
    document.getElementById("sourceValue").innerHTML = source;
    document.getElementById("quotedByValue").innerHTML = quotedBy;
    document.getElementById("prophetValue").innerHTML = prophetStatment;
    document.getElementById("AlHadeethValue").innerHTML = alHadeeth;
    let container = document.getElementById("page");
    html2canvas(container).then(function(canvas) {
        // container.innerHTML = "";
        container.appendChild(canvas);
    });

}

// https://htmldom.dev/print-an-image/