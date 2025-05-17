let names = {
"camera": "camera",
"nook-miles": "Progress",
"critterpedia": "Critterpedia",
"diy": "Weaving",
"design": "design",
"map": "Map",
"chat": "Contact",
"passport": "About",
"best-friends": "Resources",
"island-life": "Blog",
"instagram": "Instagram",
"youtube":"YouTube",
"spotify":"Podcast",
"1":"1 Year on HRT",
"2":"2 Years on HRT",
"3":"3 Years on HRT",
"4":"4 Years on HRT",
"5":"5 Years on HRT",
"wooley-green":"Wooley Green",
};

$(".app-icon").on({
    mouseenter: function () {
        $(".title").text(names[$(this).attr("id")]);
    },
    mouseleave: function () {
        $(".title").text("Trans in Japan");
    }
});
$(".app-icon").on({
    mouseenter: function () {
        $(".title").text(names[$(this).attr("id")]);
    },
    mouseleave: function () {
        $(".title").text("Weaving");
    }
});
/*
$(".nmp-header-icon").on({
  mouseenter: function () {
      $(".title").text(names[$(this).attr("id")]);
  },
  mouseleave: function () {
      $(".title").text("Progress");
  }
});*/

function updateTime() {
    let date = new Date();
    $('.time').text(date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
}
updateTime();
setInterval(updateTime, 500);

/*Get current year for copyright statement*/
$('#spanYear').html(new Date().getFullYear());

/*Show Contact Form onClick*/
function contactForm() {
  var x = document.getElementById("contact-form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/*Show Weaving Details onClick*/
let w = document.getElementById("wooley-green");
let d = document.getElementById("ducky");
let b = document.getElementById("brick-house");
let l = document.getElementById("laffy-taffy");
function wooleyGreen() {
   
  if (w.style.display === "none") {
    w.style.display = "block";
    d.style.display = "none";
    b.style.display = "none";
    l.style.display = "none";
  } else if (w.style.display === "none" && d.style.display === "none" && b.style.display === "none" && l.style.display === "block") {
    w.style.display = "block";
    d.style.display = "none";
    b.style.display =="none";
    l.style.display = "none";
  } else {
    w.style.display = "none";
    d.style.display = "none";
    b.style.display = "none";
    l.style.display = "none";
  }
}

function ducky() {
   
  if (d.style.display === "none") {
    d.style.display = "block";
    w.style.display = "none";
    b.style.display = "none";
    l.style.display = "none";
  } else if (d.style.display === "none" && w.style.display === "none" && b.style.display === "none" && l.style.display === "block") {
    d.style.display = "block";
    w.style.display = "none";
    b.style.display =="none";
    l.style.display = "none";
  } else {
    d.style.display = "none";
    w.style.display = "none";
    b.style.display = "none";
    l.style.display = "none";
  }
}
function brickHouse() {
   
  if (b.style.display === "none") {
    b.style.display = "block";
    w.style.display = "none";
    d.style.display = "none";
    l.style.display = "none";
  } else if (b.style.display === "none" && w.style.display === "none" && d.style.display === "none" && l.style.display === "block") {
    b.style.display = "block";
    w.style.display = "none";
    d.style.display =="none";
    l.style.display = "none";
  } else {
    b.style.display = "none";
    w.style.display = "none";
    d.style.display = "none";
    l.style.display = "none";
  }
}
function laffyTaffy() {
   
  if (l.style.display === "none") {
    l.style.display = "block";
    w.style.display = "none";
    d.style.display = "none";
    b.style.display = "none";
  } else if (l.style.display === "none" && w.style.display === "none" && d.style.display === "none" && b.style.display === "block") {
    l.style.display = "block";
    w.style.display = "none";
    d.style.display =="none";
    b.style.display = "none";
  } else {
    b.style.display = "none";
    w.style.display = "none";
    d.style.display = "none";
    l.style.display = "none";
  }
}

/*function weavingDetails() {
  var y = document.getElementById("wooley-green");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}*/

/*Replace Weaving Title
function replaceWeavingTitle() {
  var x = document.getElementById("myImg").alt;
  document.getElementById("weaving-title").innerHTML = x;
  
  var y = document.getElementById("weaving-details");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}*/

/*NMP Header Enlarge
function nmpLarge() {
  var x = document.getElementById("nmp-header");
  var y = document.getElementById("nmp-header-large");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}*/

/*Show new page onClick*/
/*let p = document.getElementById("progress");
  let r = document.getElementById("resources");
  let c = document.getElementById("contact"); 
function designButton() {
   
  if (p.style.display === "none") {
    p.style.display = "block";
    c.style.display = "none";
    r.style.display = "none";
  } else if (p.style.display === "none" && c.style.display === "none" && r.style.display === "block") {
    p.style.display = "block";
    c.style.display = "none";
    r.style.display =="none";
  } else {
    p.style.display = "none";
    c.style.display = "none";
    r.style.display = "none";
  }
}

function diyButton() {


  if (r.style.display === "none") {
    r.style.display = "block";
    p.style.display = "none";
    c.style.display = "none";
  } else if (r.style.display === "none" && c.style.display === "none" && p.style.display === "block") {
    r.style.display = "block";
    p.style.display = "none";
    c.style.display = "none";
  } else {
    r.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";
  }
}

function chatButton() {

  if (c.style.display === "none") {
    c.style.display = "block";
    r.style.display = "none";
    p.style.display = "none";
  } else if (c.style.display === "none" && r.style.display === "block" && p.style.display === "none") {
    c.style.display = "block";
    r.style.display = "none";
    p.style.display = "none";
  } else {
    c.style.display = "none";
    r.style.display = "none";
    p.style.display = "none";
  }
}*/