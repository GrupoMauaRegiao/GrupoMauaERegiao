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