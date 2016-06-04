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