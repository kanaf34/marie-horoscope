var getByJsonp = (function() {
	var unique = 0;

	return function(url, callback, context) {
		var name = '_jsonp_' + unique++;
		var param = (url.match(/\?/)) ? '&' : '?';
		param += 'callback=' + name;

		var script = document.createElement('script');
		script.type = 'application/javascript';
		script.src  = url + param;

		window[name] = function(data) {
			callback.call((context||window), data);
			document.getElementsByTagName('head')[0].removeChild(script);
			script = null;
			delete window[name];
		}

		document.getElementsByTagName('head')[0].appendChild(script);
	}
})();

var drawPage = function(result) {
	var divHoroscope  = document.getElementById('horoscope');
	var ul = document.createElement('ul');

	var horoscopeList = result.horoscopeList;
	horoscopeList.forEach(function(item) {
		var li = document.createElement('li');
		li.innerText = item.sign + ' / ' + item.subtitle + ' / ' + item.content;
		ul.appendChild(li);
	})

	divHoroscope.appendChild(ul);
}

var targetUrl = 'https://script.google.com/macros/s/AKfycbzI-I7wK99xsOBoZDNJvSND68WdbKWIPBFt6s3Hw_ptzku3ElU/exec';
getByJsonp(targetUrl, drawPage, this);
