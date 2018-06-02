var configUP = require('./config');

module.exports ={
	DbString: function(){
		return 'mongodb://' + configUP.uname + ':' + configUP.pwd + '@ds047581.mlab.com:47581/notodotestdb';
	}
}
