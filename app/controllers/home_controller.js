/**
 * Created by Damien on 05/11/13.
 */

// Home controller rendering the first single page
var locomotive = require('locomotive')
    , Controller = locomotive.Controller;

var HomeController = new Controller();

HomeController.index = function () {
    this.title = 'A single web page app for leto.'
    this.render();
}

module.exports = HomeController;
