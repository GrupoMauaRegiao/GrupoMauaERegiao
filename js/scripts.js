"use strict";
$(document).ready(function () {

  function efeitoEntrada() {
    var pagina;
    pagina = $('#pagina');

    setTimeout(function() {
      pagina.show(1000, 'easeInOutElastic');
    }, 1);
  }

  function criarSlidesEmpresas() {
    if (typeof informacoes !== 'undefined') {
      var json, empresas, html, i, len, slidesContainer;
      json = informacoes.empresas; // empresas.js
      empresas = "";
      html = [];
      slidesContainer = $('.apresentacao-slides');

      for (i = 0, len = json.length; i < len; i += 1) {
        html[i] =
          "<a href='" + informacoes.empresas[i].url + "' target='_blank'>" +
            "<div class='empresa'>" +
              "<div class='imagem'>" +
                "<img src='imagens/empresas/" + informacoes.empresas[i].imagem + "' alt='' />" +
              "</div>" +
              "<div class='nome-empresa'>" +
                "<p>" + informacoes.empresas[i].empresa.replace(/(^\w+)/, '<span>$1</span>') + "</p>" +
              "</div>" +
            "</div>" +
          "</a>";
        empresas += html[i];
      }
      slidesContainer.html(empresas);
    }
  }

  function ativarCycle() {
    if ($('.apresentacao-slides').length > 0) {
      $('.apresentacao-slides').cycle({
        fx: 'shuffle',
        easing: 'easeOutBack',
        timeout: 5000,
        pause: 1,
        speed: 500,
        prev: '.anterior',
        next: '.proximo'
      });
    }
  }

  efeitoEntrada();
  criarSlidesEmpresas();
  ativarCycle();

});