function button() {
  let x = document.getElementById("contact")
  switch (x) {
  case contact:
    x.style.display = "block";
  case resources:
    x.style.display = "none";
  default:
    x.style.display = "none";
  }
}

function resourcesButton() {
  var x = document.getElementById("resources");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  let names = {
  "camera": "Instagram",
  "nook-miles": "Blog",
  "critterpedia": "Critterpedia",
  "diy": "Resources",
  "design": "Progress",
  "map": "Map",
  "chat": "Contact",
  "passport": "About",
  "best-friends": "Best Friends List",
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

  function updateTime() {
      let date = new Date();
      $('.time').text(date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
  }
  updateTime();
  setInterval(updateTime, 500);

{/*Get current year for copyright statement*/}
$('#spanYear').html(new Date().getFullYear());