$(function() {
  $('#button').click(function() {
    cercafilm()

  })



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
      for (var i = 0; i < data.length; i++) {
        console.log(data[i])
      }

    }

  });
}


})
