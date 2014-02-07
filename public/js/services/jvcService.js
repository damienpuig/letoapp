/**
 * Created by Damien on 05/11/13.
 */
//declaration of services in order to make request to the server / other sources
montaud.service('jvcService', ['$http', function ($http) {

    var credentials = {
        'username': 'appandr',
        'passwd': 'e32!cdf'
    }

    return {

      search_by_name: function(name, callback){
          $.ajax({
              crossDomain: true,
              type: 'GET',
              url:'http://ws.jeuxvideo.com/search_n/{0}'.format(name),
              success:function(data) {
                  callback(data);
              }});
      },

      get_game_details_by_id: function(id, callback){
        $.ajax({
            crossDomain: true,
            type: 'GET',
            url: 'http://ws.jeuxvideo.com/01.jeux/{0}.xml'.format(id),
            success:function(data) {
                callback(data);
            }});
      },

      get_consoles: function(callback){
          var build_url = 'http://' + credentials['username']
          + ':' + credentials['passwd'] + '@ws.jeuxvideo.com/00.machines_version.xml'
          $.ajax({
              type: 'GET',
              url: build_url,
              success:function(data) {
                  callback(data);
              }
          });
        }
    }
}]);


