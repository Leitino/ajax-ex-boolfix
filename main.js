$(function() {
  $('#button').click(function() {
    cercafilm()

  })



function cercafilm() {
  var search = $('#input').val()
  console.log(search)
  $.ajax({
    url:'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro',
    method: "GET",
    success:function (data) {
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].popularity)
      }

    }

  });

}


})
