"use strict";
$(document).ready(function () {
  function ativarAnimacao() {
    var pagina, link;
    pagina = $('.home');
    link = $('.home a');

    link.on('click', function (evt) {
      var $this;
      $this = $(this);

      evt.preventDefault();
      pagina.addClass('animar');

      setTimeout(function () {
        window.location.href = window.location.href + $this.attr('href');
      }, 2000);

    });
  }

  ativarAnimacao();

});

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
    var expr;
    expr = marcador.getAnimation() !== null
      ? marcador.setAnimation(null)
      : marcador.setAnimation(google.maps.Animation.BOUNCE);
  });
} // #Google Maps
google.maps.event.addDomListener(window, 'load', googleMaps);