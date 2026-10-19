// site.js
// written by the webmaster. if u copy this pls give credit

// where the button goes. change this to whichever charity you want.
var DONATE_URL = "https://www.fidf.org/donate";       // Friends of the IDF
// var DONATE_URL = "https://afmda.org/donate/";       // American Friends of Magen David Adom

var ringSites = ["the best site", "an even better site", "this site again"];

function startPage() {
  var c = document.getElementById("counter");
  if (c) {
    var n = 4821 + Math.floor((new Date().getTime() / 60000) % 99999);
    c.innerHTML = ("0000000" + n).slice(-7);
  }
}

function webring(dir) {
  alert("Webring is down. Going to " + ringSites[dir > 0 ? 1 : 0] + " instead... jk this is the only site");
  return false;
}

function vote() {
  document.getElementById("pollresult").innerHTML =
    "<small><b>Results:</b><br>All of it: 100%<br>All of it: 100%<br>Also all of it: 100%</small>";
  return false;
}

// Paycheck-O-Matic 3000
// takes the number the visitor typed, returns the html to show them
function paycheckVerdict(amount) {
  // TODO(webmaster): write the punchline logic here
  return "Recommended donation: $" + amount.toFixed(2) + " (100%). Great job!!";
}

function runCalc() {
  var raw = document.forms["calc"].amt.value.replace(/[$,\s]/g, "");
  var amount = parseFloat(raw);
  var out = document.getElementById("calcresult");
  if (isNaN(amount) || amount <= 0) {
    out.innerHTML = "<span style='color:#CC0000'>ERROR: please enter a paycheck. a real one.</span>";
  } else {
    out.innerHTML = paycheckVerdict(amount);
  }
  return false;
}

function doRedirect() {
  var link = document.getElementById("manual");
  if (link) link.href = DONATE_URL;
  var dest = document.getElementById("dest");
  if (dest) dest.innerHTML = DONATE_URL.replace(/^https?:\/\//, "").split("/")[0];
  var w = 0, fill = document.getElementById("barfill");
  var t = setInterval(function () {
    w += 5;
    if (fill) fill.style.width = w + "%";
    if (w >= 100) { clearInterval(t); window.location.href = DONATE_URL; }
  }, 120);
}
