"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.Language = exports.Game = void 0;
class Game {
}
exports.Game = Game;
var Language;
(function (Language) {
    Language["Eng"] = "eng";
})(Language = exports.Language || (exports.Language = {}));
var Title;
(function (Title) {
    Title["Exceptional"] = "exceptional";
    Title["Meh"] = "meh";
    Title["Recommended"] = "recommended";
    Title["Skip"] = "skip";
})(Title = exports.Title || (exports.Title = {}));
exports.default = Game;
