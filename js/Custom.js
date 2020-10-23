var spec1 = "https://clairpan.github.io/FIT3179/js/map_Confirmed.vl.json";
var spec2 = "https://clairpan.github.io/FIT3179/js/map_Active.vl.json";
var spec3 = "https://clairpan.github.io/FIT3179/js/map_TotalTest.vl.json";

var spec4 = "https://clairpan.github.io/FIT3179/js/line_Confirmed.vl.json";
var spec5 = "https://clairpan.github.io/FIT3179/js/line_active.vl.json";
var spec6 = "https://clairpan.github.io/FIT3179/js/line_death.vl.json";

var spec7 = "https://clairpan.github.io/FIT3179/js/Pie_Gender.vl.json";
var spec8 = "https://clairpan.github.io/FIT3179/js/ConnectedDot_Probability.vl.json";

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

vegaEmbed('#genderPie', spec7).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#genderCDot', spec8).then(function (result) {
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



//setTimeout(function () {
//    changeMonthName(document.querySelectorAll('.slider .vega-bind span')[1]);
//    changeMonthName(document.querySelectorAll('.slider .vega-bind span')[3]);
//    changeMonthName(document.querySelectorAll('.slider .vega-bind span')[5]);

//    document.querySelectorAll('.slider .vega-bind span')[1].addEventListener("change", changeMonthName(document.querySelectorAll('.slider .vega-bind span')[1]));
//    document.querySelectorAll('.slider .vega-bind span')[3].addEventListener("change", changeMonthName(document.querySelectorAll('.slider .vega-bind span')[3]));
//    document.querySelectorAll('.slider .vega-bind span')[5].addEventListener("change", changeMonthName(document.querySelectorAll('.slider .vega-bind span')[5]));
//}, 1000);

//function changeMonthName(e) {
//    if (e.innerText == "2") {
//        e.innerHTML = "February";
//    } else if (e.innerText == "3") {
//        e.innerHTML = "March";
//    } else if (e.innerText == "4") {
//        e.innerHTML = "April";
//    } else if (e.innerText == "5") {
//        e.innerHTML = "May";
//    } else if (e.innerText == "6") {
//        e.innerHTML = "June";
//    } else if (e.innerText == "7") {
//        e.innerHTML = "July";
//    } else if (e.innerText == "8") {
//        e.innerHTML = "August";
//    } else if (e.innerText == "9") {
//        e.innerHTML = "Sepetember";
//    } else if (e.innerText == "10") {
//        e.innerHTML = "October";
//    }
//}

