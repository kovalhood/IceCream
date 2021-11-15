// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 50.50, lng: 30.42 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("googlemap"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}