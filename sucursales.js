
function toggleOtro() {
    var otroInput = document.getElementById("otroInput");
    otroInput.disabled = !document.getElementById("otro").checked;
  }
  
var map1, map2, map3;

function initMaps() {
    // Inicializar mapa 1
    map1 = new google.maps.Map(document.getElementById('map1'), {
        center: { lat:-34.614708083861274, lng:-58.391549737435355 },
        zoom: 15
    });

    // Inicializar mapa 2
    map2 = new google.maps.Map(document.getElementById('map2'), {
        center: { lat: -34.6037681, lng: -58.3833847,},
        zoom: 15
    });

    // Inicializar mapa 3
    map3 = new google.maps.Map(document.getElementById('map3'), {
        center: { lat: -34.5982385, lng: -58.4276836},
        zoom: 15
    });
}