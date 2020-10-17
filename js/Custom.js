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
  
  function mapConfirmed() {
    var c = document.getElementById("mapConfirmed");
    var a = document.getElementById("mapActive");
    var t = document.getElementById("mapTotalTest");
    if (c.style.display === "none") {
      c.style.display = "block";
      a.style.display = "none";
      t.style.display = "none";
    }
  }
  
  function mapActive() {
    var c = document.getElementById("mapConfirmed");
    var a = document.getElementById("mapActive");
    var t = document.getElementById("mapTotalTest");
    if (a.style.display === "none") {
      c.style.display = "none";
      a.style.display = "block";
      t.style.display = "none";
    }
  }
  
  function mapTest() {
    var c = document.getElementById("mapConfirmed");
    var a = document.getElementById("mapActive");
    var t = document.getElementById("mapTotalTest");
    if (t.style.display === "none") {
      c.style.display = "none";
      a.style.display = "none";
      t.style.display = "block";
    }