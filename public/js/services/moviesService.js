/**
 * Created by Damien on 05/11/13.
 */
//declaration of services in order to make request to the server / other sources
leto.service('moviesService', ['$http', function ($http) {
    return {
      all: function(callback){
          $.ajax({
                  type:'GET',
                  url:'http://www.bbc.co.uk/tv/programmes/formats/films/player/episodes.json',
                  success:function(data) {
                      callback(data);
          }});
      },
      get: function(pid, callback){

      },
      getrating: function(novieName, callback){

      }
    };
}]);


