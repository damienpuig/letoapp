/**
 * Created by root on 25/12/13.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var gameSchema = Schema({
    name: String,
    console: String,
    date: Date,
    type: { type: ObjectId, ref: 'TypeSchema' },
    id_on_jvc: Number,
    photo_url: String
})
var Game = mongoose.model('game', gameSchema)


var GameConsoleSchema = Schema({
    name: String,
    date: Date,
    type: { type: ObjectId, ref: 'TypeSchema' },
    photo_url: String
})
var GameConsole = mongoose.model('gameconsole', GameConsoleSchema)


var AccessorySchema = Schema({
    name: String,
    date: Date,
    type: { type: ObjectId, ref: 'TypeSchema' },
    photo_url: String
})
var Accessory = mongoose.model('accessory', AccessorySchema)

var TypeSchema = Schema({
    name: String
})
var Type = mongoose.model('type', TypeSchema)

var db = mongoose.connect('mongodb://localhost/montaud-game-station');

module.exports = { db: db, Game: Game, GameConsole: GameConsole, Accessory: Accessory }







