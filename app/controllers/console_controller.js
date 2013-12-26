/**
 * Created by Damien on 25/12/13.
 */

// I created this controller for potential exta features on the movies.
var locomotive = require('locomotive')
    , Controller = locomotive.Controller
    , colors = require('colors')
    , mongoose = require('mongoose')
    , sc = require('../database/models.js');

ConsoleController = new Controller();

//declare some routes for future features
ConsoleController.consoles = function () {
    var self = this;

    this.title = 'Les consoles disponibles a montaud.'

//    this.new_consoles = [new sc.GameConsole(
//        { name: 'Playstation',
//          date: new Date(),
//          photo_url: 'http://www.akascope.com/wp-content/uploads/2013/09/sony-1.jpg'
//        })]
//
//    this.new_consoles.forEach(function(item) {
//        item.save()
//    })

    sc.GameConsole.find({}, function(error, data){
        console.log(data)
        self.consoles = data

        self.respond({
            'json': function() { self.res.json(self.consoles); }
        })
    });
}


module.exports = ConsoleController;