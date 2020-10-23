var spec1 = "https://clairpan.github.io/FIT3179/js/map_Confirmed.vl.json";
var spec2 = "https://clairpan.github.io/FIT3179/js/map_Active.vl.json";
var spec3 = "https://clairpan.github.io/FIT3179/js/map_TotalTest.vl.json";

var spec4 = "https://clairpan.github.io/FIT3179/js/line_Confirmed.vl.json";
var spec5 = "https://clairpan.github.io/FIT3179/js/line_active.vl.json";
var spec6 = "https://clairpan.github.io/FIT3179/js/line_death.vl.json";

vegaEmbed('#mapConfirmed', spec1).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#mapActive', spec2).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#mapTotalTest', spec3).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#lineConfirmed', spec4).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#lineActive', spec5).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#lineDeath', spec6).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

function mapConfirmed() {
  var c = document.getElementById("mapConfirmed");
  var a = document.getElementById("mapActive");
  var t = document.getElementById("mapTotalTest");

  var cButton = document.getElementById("buttonConfirmed");
  var aButton = document.getElementById("buttonActive");
  var tButton = document.getElementById("buttonTotalTest");
  if (c.style.display === "none") {
    c.style.display = "block";
    a.style.display = "none";
    t.style.display = "none";
    cButton.classList.remove('pure-button-primary');
    aButton.classList.remove('pure-button-primary');
    tButton.classList.remove('pure-button-primary');
    cButton.classList.remove('button-success');
    aButton.classList.remove('button-success');
    tButton.classList.remove('button-success');
    cButton.classList.add('button-success');
    aButton.classList.add('pure-button-primary');
    tButton.classList.add('pure-button-primary');
  }
}

function mapActive() {
  var c = document.getElementById("mapConfirmed");
  var a = document.getElementById("mapActive");
  var t = document.getElementById("mapTotalTest");

  var cButton = document.getElementById("buttonConfirmed");
  var aButton = document.getElementById("buttonActive");
  var tButton = document.getElementById("buttonTotalTest");
  
  if (a.style.display === "none") {
    c.style.display = "none";
    a.style.display = "block";
    t.style.display = "none";
    cButton.classList.remove('pure-button-primary');
    aButton.classList.remove('pure-button-primary');
    tButton.classList.remove('pure-button-primary');
    cButton.classList.remove('button-success');
    aButton.classList.remove('button-success');
    tButton.classList.remove('button-success');
    cButton.classList.add('pure-button-primary');
    aButton.classList.add('button-success');
    tButton.classList.add('pure-button-primary');
  }
}

function mapTest() {
  var c = document.getElementById("mapConfirmed");
  var a = document.getElementById("mapActive");
  var t = document.getElementById("mapTotalTest");

  var cButton = document.getElementById("buttonConfirmed");
  var aButton = document.getElementById("buttonActive");
  var tButton = document.getElementById("buttonTotalTest");
  
  if (t.style.display === "none") {
    c.style.display = "none";
    a.style.display = "none";
    t.style.display = "block";
    cButton.classList.remove('pure-button-primary');
    aButton.classList.remove('pure-button-primary');
    tButton.classList.remove('pure-button-primary');
    cButton.classList.remove('button-success');
    aButton.classList.remove('button-success');
    tButton.classList.remove('button-success');
    cButton.classList.add('pure-button-primary');
    aButton.classList.add('pure-button-primary');
    tButton.classList.add('button-success');
  }
}

function lineConfirmed() {
    var c = document.getElementById("lineConfirmed");
    var a = document.getElementById("lineActive");
    var t = document.getElementById("lineDeath");

    var cButton = document.getElementById("buttonLineConfirmed");
    var aButton = document.getElementById("buttonLineActive");
    var tButton = document.getElementById("buttonLineDeath");
    if (c.style.display === "none") {
        c.style.display = "block";
        a.style.display = "none";
        t.style.display = "none";
        cButton.classList.remove('pure-button-primary');
        aButton.classList.remove('pure-button-primary');
        tButton.classList.remove('pure-button-primary');
        cButton.classList.remove('button-success');
        aButton.classList.remove('button-success');
        tButton.classList.remove('button-success');
        cButton.classList.add('button-success');
        aButton.classList.add('pure-button-primary');
        tButton.classList.add('pure-button-primary');
    }
}

function lineActive() {
    var c = document.getElementById("lineConfirmed");
    var a = document.getElementById("lineActive");
    var t = document.getElementById("lineDeath");

    var cButton = document.getElementById("buttonLineConfirmed");
    var aButton = document.getElementById("buttonLineActive");
    var tButton = document.getElementById("buttonLineDeath");

    if (a.style.display === "none") {
        c.style.display = "none";
        a.style.display = "block";
        t.style.display = "none";
        cButton.classList.remove('pure-button-primary');
        aButton.classList.remove('pure-button-primary');
        tButton.classList.remove('pure-button-primary');
        cButton.classList.remove('button-success');
        aButton.classList.remove('button-success');
        tButton.classList.remove('button-success');
        cButton.classList.add('pure-button-primary');
        aButton.classList.add('button-success');
        tButton.classList.add('pure-button-primary');
    }
}

function lineDeath() {
    var c = document.getElementById("lineConfirmed");
    var a = document.getElementById("lineActive");
    var t = document.getElementById("lineDeath");

    var cButton = document.getElementById("buttonLineConfirmed");
    var aButton = document.getElementById("buttonLineActive");
    var tButton = document.getElementById("buttonLineDeath");

    if (t.style.display === "none") {
        c.style.display = "none";
        a.style.display = "none";
        t.style.display = "block";
        cButton.classList.remove('pure-button-primary');
        aButton.classList.remove('pure-button-primary');
        tButton.classList.remove('pure-button-primary');
        cButton.classList.remove('button-success');
        aButton.classList.remove('button-success');
        tButton.classList.remove('button-success');
        cButton.classList.add('pure-button-primary');
        aButton.classList.add('pure-button-primary');
        tButton.classList.add('button-success');
    }
}

setTimeout(function () {
    changeMonthName(document.querySelectorAll('.slider .vega-bind span')[1]);
    changeMonthName(document.querySelectorAll('.slider .vega-bind span')[3]);
    changeMonthName(document.querySelectorAll('.slider .vega-bind span')[5]);
}, 1000);

function changeMonthName(e) {
    console.log(e);
    switch (e.innerText) {
        case 2:
            console.log("2");
            e.innerText = "February";
            break;
        case "3":
            e.innerText = "March";
            break;
        case "4":
            e.innerText = "April";
            break;
        case "5":
            e.innerText = "May";
            break;
        case "6":
            e.innerText = "June";
            break;
        case "7":
            e.innerText = "July";
            break;
        case "8":
            e.innerText = "August";
            break;
        case "9":
            e.innerText = "Sepetember";
            break;
        case "10":
            e.innerText = "October";
    }
}

