$(function() {
    // Esconde todas as respostas inicialmente
    $('.response').hide();
  
    // Adiciona um evento de clique para as perguntas e ícones
    $('.content-question-img').click(function() {
      // Encontra a resposta associada a esta pergunta
      var $response = $(this).next('.response');
  
      // Encontra a imagem dentro da pergunta
      var $img = $(this).find('img');

      var $text = $(this).find('h2');
  
      // Fecha todas as respostas, exceto a que está associada a esta pergunta
      $('.response').not($response).slideUp();
      
      // Altera o ícone de todas as perguntas, exceto esta
      $('.content-question-img img').not($img).attr('src', '/assets/images/icon-plus.svg');
  
      // Alternar a visibilidade da resposta desta pergunta
      $response.slideToggle('fast',function(){
        // Altera o ícone da imagem baseado na visibilidade da resposta
        if ($response.is(':visible')) {
            $img.attr('src', '/assets/images/icon-minus.svg');
          } else {
            $img.attr('src', '/assets/images/icon-plus.svg');
          }
      });
    });
  });