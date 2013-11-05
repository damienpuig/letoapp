/**
 * Created by Damien on 05/11/13.
 */
//declaration of services in order to make request to the server / other sources
leto.service('moviesService', ['$http', function ($http) {
    return {
      //return a list of movies, json result.
      all: function(callback){
          $.ajax({
                  type:'GET',
                  url:'http://www.bbc.co.uk/tv/programmes/formats/films/player/episodes.json',
                  success:function(data) {
                      callback(data);
          }});
      },
       //Use the pid of a movie to get it details following the bbc website, json result.
      get: function(pid, callback){
          $.ajax({
              type:'GET',
              url:'http://www.bbc.co.uk/programmes/' + pid + '.json',
              success:function (data) {
                  callback(data);
              }
          });
      },

      //Use the movie name of a movie to retreive a json result containing the vote_average and vote_count.
      getrating: function (movieName, callback){
          var option = {
              url: 'http://api.themoviedb.org/3/',
              mode: 'search/movie?',
              input: '&query='+ movieName,
              key: '&api_key=576a17be195c126caaaa18489e13c885',
              format: function () {
                  return this.url + this.mode + this.key + this.input;
              }
          };

          $.ajax({
              type: 'GET',
              url: option.format(),
              success: function (data) {
                  callback(data);
              }
          });

      }
    };
}]);


