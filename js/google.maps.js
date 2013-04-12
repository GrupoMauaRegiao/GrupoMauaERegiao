function googleMaps() {
  var estilosMapa, localizacao, mapOptions, mapa, iconeMarcador, marcador;
  estilosMapa = [
    {
      stylers: [
        { hue: "#0052fb" },
        { saturation: 100 }
      ]
    }, {
      featureType: "road.local",
      elementType: "labels",
      stylers: [
        { lightness: 0 },
        { visibility: "on" }
      ]
    }, {
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "on" }
      ]
    }
  ];

  localizacao = new google.maps.LatLng(-23.67914, -46.46164);
  mapOptions = {
    center: localizacao,
    zoom: 17,
    minZoom: 15,
    maxZoom: 18,
    streetViewControl: false,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  mapa = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  mapa.setOptions({styles: estilosMapa});

  iconeMarcador = 'http://localhost/GrupoMauaERegiao/imagens/icone.png';
  marcador = new google.maps.Marker({
    position: localizacao,
    title: "Grupo Mauá e Região de Comunicação",
    icon: iconeMarcador
  });

  marcador.setMap(mapa);
  marcador.setAnimation(google.maps.Animation.DROP);

  google.maps.event.addListener(marcador, 'click', function () {
    var expr, infowindow;
    expr = marcador.getAnimation() !== null
      ? marcador.setAnimation(null)
      : marcador.setAnimation(google.maps.Animation.BOUNCE);
    infowindow = new google.maps.InfoWindow();
  });
} // #Google Maps
google.maps.event.addDomListener(window, 'load', googleMaps);