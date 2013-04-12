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

  function criarSlidesEmpresas() {
    var json, empresas, html, i, len, slidesContainer;
    json = informacoes.empresas; // empresas.js
    empresas = "";
    html = [];
    slidesContainer = $('.apresentacao-slides');

    for (i = 0, len = json.length; i < len; i += 1) {
      html[i] =
        "<div class='empresa'>" +
          "<div class='imagem'>" +
            "<img src='imagens/empresas/" + informacoes.empresas[i].imagem + "' alt='' />" +
          "</div>" +
          "<div class='nome-empresa'>" +
            "<p>" + informacoes.empresas[i].empresa.replace(/(^\w+)/, '<span>$1</span>') + "</p>" +
          "</div>" +
        "</div>";
      empresas += html[i];
    }
    slidesContainer.html(empresas);
  }

  function ativarCycle() {
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

  ativarAnimacao();
  criarSlidesEmpresas();
  ativarCycle();

});