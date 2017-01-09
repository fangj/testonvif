var CAMERA_HOST = '192.168.3.100',
	USERNAME = 'admin',
	PASSWORD = 'admin',
	PORT=10080;

var Cam = require('onvif').Cam;

new Cam({
	hostname: CAMERA_HOST,
	username: USERNAME,
	password: PASSWORD,
	port:PORT
}, function(err) {
	if (err) {
		console.error(err);
		console.log('Connection Failed for ' + CAMERA_HOST + ' Username: ' + USERNAME + ' Password: ' + PASSWORD);
		return;
	}
	console.log('CONNECTED');
	this.absoluteMove({
		x: 100
		, y: 100
		, zoom: 1
	});
	this.getStreamUri({protocol:'RTSP'}, function(err, stream) {
		console.log(stream.uri)
	});
});