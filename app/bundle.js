(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var drawPage = function(result) {
	var $main = $('#horoscope');
	var $table = $('<table>').attr({'border': '1', 'width': '100%'});

	var columns = [];
	columns.push('sign');
	columns.push('subtitle');
	columns.push('content');

	var horoscopeList = result.horoscopeList;
	horoscopeList.forEach(function(item, idx) {
		var $row = $('<tr>');
		columns.forEach(function(colId, idx) {
			var $col = $('<td>');
			$col.text(item[colId]);
			$row.append($col);
		})
		$table.append($row);
	})

	$main.append($table);
}

var targetUrl = 'https://script.google.com/macros/s/AKfycbzI-I7wK99xsOBoZDNJvSND68WdbKWIPBFt6s3Hw_ptzku3ElU/exec';
$.ajax({
	url: targetUrl,
	dataType: 'jsonp',
	success: drawPage
});
},{}]},{},[1]);
