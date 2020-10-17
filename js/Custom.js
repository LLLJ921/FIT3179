var spec1 = "https://clairpan.github.io/FIT3179/js/mapConfirmed.vl.json";
var spec2 = "https://clairpan.github.io/FIT3179/js/mapActive.vl.json";
var spec3 = "https://clairpan.github.io/FIT3179/js/mapTotalTest.vl.json";

vegaEmbed('#mapConfirmed', spec1).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#mapActive', spec2).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#mapTotalTest', spec3).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var c = document.getElementById("mapConfirmed");
var a = document.getElementById("mapActive");
var t = document.getElementById("mapTotalTest");

var cButton = document.getElementById("buttonConfirmed");
var aButton = document.getElementById("buttonActive");
var tButton = document.getElementById("buttonTotalTest");

function mapConfirmed() {
  if (c.style.display === "none") {
    c.style.display = "block";
    a.style.display = "none";
    t.style.display = "none";
    cButton.classList.remove('pure-button-primary');
    aButton.classList.remove('pure-button-primary');
    tButton.classList.remove('pure-button-primary');
    cButton.classList.add('button-success');
    aButton.classList.add('pure-button-primary');
    tButton.classList.add('pure-button-primary');
  }
}

function mapActive() {
  if (a.style.display === "none") {
    c.style.display = "none";
    a.style.display = "block";
    t.style.display = "none";
    cButton.classList.remove('pure-button-primary');
    aButton.classList.remove('pure-button-primary');
    tButton.classList.remove('pure-button-primary');
    cButton.classList.add('pure-button-primary');
    aButton.classList.add('button-success');
    tButton.classList.add('pure-button-primary');
  }
}

function mapTest() {
  if (t.style.display === "none") {
    c.style.display = "none";
    a.style.display = "none";
    t.style.display = "block";
    cButton.classList.remove('pure-button-primary');
    aButton.classList.remove('pure-button-primary');
    tButton.classList.remove('pure-button-primary');
    cButton.classList.add('pure-button-primary');
    aButton.classList.add('pure-button-primary');
    tButton.classList.add('button-success');
  }
}
