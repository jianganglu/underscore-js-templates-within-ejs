;(function($) {
  'use strict';

  $(function() {

    var tmpl = null;

    function init() {
      getTmpl();
      getData();
    }

    function getTmpl() {
      $.ajax({
        url: '../tmpl/tmpl.ejs',
        type: 'GET',
      }).done(function(resp) {
        tmpl = _.template(resp); 
      });
    }

    function getData() {
      $.ajax({
        url: '/json/data.json',
        type: 'GET',
        dataType: 'json',
      }).done(function(resp) {
        if(resp.code === 'ACK') {
          $('#tmpl-wrap').html(tmpl({
            data: resp.data
          }));

          $('#tmpl-wrap').append(_.template($('#tmpl').html())({data: resp.data}));
        }
      });
    }

    init();

  });
})(jQuery);