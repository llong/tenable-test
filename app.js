$(function(){
  $.getJSON('data.json', function(data){
    $.each( data.configurations, function( index, element ) {
        $('#mainContainer').append(
          '<div class="card">' +
          '<p> ' + element.name + '</p>' +
          '<p>' + element.hostname + '</p>' +
          '<p>' + element.port + '</p>' +
          '<p>' + element.username + '</p>' +
          '</div>')

        console.log( element.name);
    });
  })
})
