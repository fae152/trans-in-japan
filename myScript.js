let names = {
"camera": "Progress",
"nook-miles": "miles",
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
};

$(".app-icon").on({
    mouseenter: function () {
        $(".title").text(names[$(this).attr("id")]);
    },
    mouseleave: function () {
        $(".title").text("Trans in Japan");
    }
});
$(".app-icon-insta").on({
  mouseenter: function () {
      $(".title").text(names[$(this).attr("id")]);
  },
  mouseleave: function () {
      $(".title").text("Trans in Japan");
  }
});

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
