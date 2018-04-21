/* http://learn.javascript.ru/screencast/nodejs */

var db = require('./db');
//db.connect();

var User = require('./user');

function run() {
	//var vasya = new user.User("Вася");
	//var petya = new user.User("Петя");
	
	var vasya = new User("Вася");
	var petya = new User("Петя");

	vasya.hello(petya);
	
	console.log(db.getPhrase("Run successful"));
}

if (module.parent) {	//если этот модуль кто-то подключил
	exports.run = run;
} else {				//если сервер запущен сам по себе
	run();
}

