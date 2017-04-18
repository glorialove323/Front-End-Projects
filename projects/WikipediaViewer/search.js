'use strict';

$('#query').keypress( (e) => {
  if(e.which == 13) {
    $('#search').click();
    return false;
  }
});


$('#close').on('click', () => {
  $('.my-new-list').remove();
  $('#results').addClass('invis');
}); 


$('#search').on('click', () => {
  const query = $('#query').val();
  
  $('#query').val('');
  $('#results').addClass('invis');
  
  if(query != '') {
    $('.my-new-list').remove();
    const terms = query.split(' ').join('+');
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      jsonp: 'callback',
      dataType: 'jsonp',
      data: {
        action: 'query',
        list: 'search',
        srsearch: terms,
        format: 'json'
      },
      xhrFields: { withCredentials: true },
      success: (data) => {
        let items = [];
        $.each(data.query.search, (key, val) => {
          const link = '<a href="http://en.wikipedia.org/wiki/' + val.title.replace(new RegExp(' ', 'g'), '_') + '" target="_blank">' + val.title + '</a>';
          items.push('<li><h4>' + link + '</h4><p>'+ val.snippet +'</p></li>');
        });
        $("<ul/>", {
          "class": "my-new-list",
          html: items.join("")
        }).appendTo(".well");
        $('#results').removeClass('invis');
      }
    });
  }
});
