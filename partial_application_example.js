exports.columns = ["col1", "col2", "col3"];

exports.extract_csv_seperator = function (buffer, some_other_complex_params) {
	if (!buffer) {
		throw "Does not work without buffer";
	}
	if (!some_other_complex_params) {
		throw "Does not work without complex params";
	}
	return ",";
};

exports.write_csv_line = function (seperator, buffer) {
	console.log(buffer.join(seperator));
};

