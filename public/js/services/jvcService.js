/**
 * Created by Damien on 05/11/13.
 */
//declaration of services in order to make request to the server / other sources
leto.service('jvcService', ['$http', function ($http) {

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
          $.ajax({
//              crossDomain: true,
//              xhrFields: {
//                  // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
//                  // This can be used to set the 'withCredentials' property.
//                  // Set the value to 'true' if you'd like to pass cookies to the server.
//                  // If this is enabled, your server must respond with the header
//                  // 'Access-Control-Allow-Credentials: true'.
//                  withCredentials: true
//              },
              beforeSend: function (xhr) {
                  xhr.setRequestHeader ("Authorization", "Basic YXBwYW5kcjplMzIhY2Rm");
              },
//              username: 'appandr',
//              password: 'e32!cdf',
              type: 'GET',
              url:'http://ws.jeuxvideo.com/00.machines_version.xml',
              success:function(data) {
                  callback(data);
              }});
        }
    }
}]);


