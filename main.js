$(function() {
  $('#button').click(function() {
    cercafilm()

  });
  $('#input').keypress(function(e) {
    if(e.which == 13) {
      cercafilm()
    }
});

function cercafilm() {
  var search = $('#input').val()
  $.ajax({
    url:'https://api.themoviedb.org/3/search/movie',
    method: "GET",
    data: {
      api_key:'ed27a50223f9ee71021bcb238ca2a3c3',
      language:'it',
      query: search,
    },
    success:function(data) {
      console.log(data)
      $('.container').html('')
      for (var i = 0; i < data.results.length; i++) {
        var titolo = data.results[i].title
        var titoloOriginale = data.results[i].original_title
        var lingua = data.results[i].original_language
        var voto = data.results[i].vote_average
        voto = voto / 2
        var arrotondato = Math.round(voto)
        console.log(arrotondato)
        console.log(titolo, lingua, titoloOriginale, arrotondato)
        var container = $('.container')
        container.append('<div class="risultati">'+ 'Titolo: '+ titolo + '<br>' + 'Titolo originale: '+ titoloOriginale + '<br>' + 'Lingua: ' + lingua + '<br>' + 'Voto: ' + arrotondato + '<br>' + '</div>')
      }
    }
  });
}
})
