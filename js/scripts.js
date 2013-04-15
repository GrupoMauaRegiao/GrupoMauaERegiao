$(document).ready(function () {
  "use strict";
  var grupoMaua = {};
  grupoMaua.functions = (function () {
    return {

      efeitoEntrada: function () {
        var pagina = $('#pagina');
        setTimeout(function () {
          pagina.show(1000, 'easeInOutElastic');
        }, 1);
      },

      animacaoBackground: function () {
        var body, coords;
        body = $('body');

        if (body.attr('class') !== 'interna') {
          coords = {};
          coords.x = function () {
            return Math.floor(Math.random() * 50);
          };
          coords.y = function () {
            return Math.floor(Math.random() * 10);
          };

          setInterval(function () {
            body.css('background-position', '0,' + coords.x() + 'px ' + coords.y() + '%');
          }, 500);
        }
      },

      criarSlidesEmpresas: function () {
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
      },

      ativarCycle: function () {
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

    };
  }());

  grupoMaua.functions.efeitoEntrada();
  grupoMaua.functions.animacaoBackground();
  grupoMaua.functions.criarSlidesEmpresas();
  grupoMaua.functions.ativarCycle();

});