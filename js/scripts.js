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
  ativarCycle();

});