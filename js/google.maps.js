"use strict";
function googleMaps() {
  var infowindow, conteudoInfoWindow, estilosMapa, localizacao, mapOptions, mapa, iconeMarcador, marcador;
  conteudoInfoWindow =
    "<div class='infowindow'>" +
      "<div class='nome-empresa'>" +
        "<p>Grupo Mauá e Região de Comunicação</p>" +
      "</div>" +
      "<div class='endereco-mapa'>" +
        "<p>" +
          "Rua Vitório Veneto, 355 <br />" +
          "Vila Vitória - Mauá - SP." +
        "</p>" +
      "</div>" +
    "</div>";

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

  localizacao = new google.maps.LatLng(-23.675265, -46.45794);
  mapOptions = {
    center: localizacao,
    zoom: 17,
    minZoom: 15,
    maxZoom: 18,
    streetViewControl: false,
    mapTypeControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  mapa = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  mapa.setOptions({styles: estilosMapa});

  iconeMarcador = 'http://grupomauaeregiao.com.br/imagens/icone.png';
  marcador = new google.maps.Marker({
    position: localizacao,
    title: "Grupo Mauá e Região de Comunicação",
    icon: iconeMarcador
  });

  marcador.setMap(mapa);
  marcador.setAnimation(google.maps.Animation.DROP);

  infowindow = new google.maps.InfoWindow({
    content: conteudoInfoWindow
  });

  google.maps.event.addListener(marcador, 'click', function () {
    var expr;
    expr = marcador.getAnimation() !== null
      ? marcador.setAnimation(null)
      : marcador.setAnimation(google.maps.Animation.BOUNCE);
    expr = infowindow.getMap()
      ? infowindow.close()
      : infowindow.open(mapa, marcador);
  });
} // #Google Maps
google.maps.event.addDomListener(window, 'load', googleMaps);