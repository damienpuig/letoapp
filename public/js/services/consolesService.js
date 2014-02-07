/**
 * Created by Damien on 05/11/13.
 */
//declaration of services in order to make request to the server / other sources
montaud.service('consolesService', ['$http', function ($http) {
    return {
      //return a list of movies, json result.
      all: function(callback){
          $.ajax({
                  type:'GET',
                  url:'/consoles',
                  success:function(data) {
                      callback(data);
          }});
      }
    };
}]);


