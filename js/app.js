let menuToggler = document.querySelector(".nav_button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");

menuToggler.addEventListener("click", () => {
	body.classList.toggle("open");
});

navLinks.forEach(link => {
	link.addEventListener("click", () => {
		body.classList.toggle("open");
	});
});

// Map 
var map = L.map('map').setView([15.889792, 120.629860], 14.3);
      var gl = L.mapboxGL({
        attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
        style: 'https://api.maptiler.com/maps/streets/style.json?key=Fw57d1RT2ZvWEb2bNWuh'
      }).addTo(map);
      var marker = L.marker([15.889792, 120.629860]).addTo(map);
      marker.bindPopup("<b>Venn Edward Nicolas</b><br>Home").openPopup();

//Animation on Scroll 
AOS.init();