exports.data = [
	{
		name: "Riker, William T.",
		security_level: 2
	},

	{
		name: "Picart, Jean-Luc",
		security_level: 1
	},

	{
		name: "Crusher, Wesley",
		security_level: 10
	}
];

exports.compose = function () {
            var funcs = arguments,
                length = arguments.length;

            return function () {
                var args = arguments,
                    length = funcs.length;

                while (length--) {
                   args = funcs[length].apply(this, args);
                   if (length && !args instanceof Array) {
                       throw new Error([funcs[length], "did not return an Array."].join(" "));
                   }
                }

                return args;
            };
        };

exports.comparator = function (predicate) {
        return function (x, y) {
            if (predicate(x, y)) {
                return -1;
            }
            if (predicate(y, x)) {
                return 1;
            }
            return 0;
        };
    };

exports.createParameterMapping = function (func) {
            return function() {
                return Array.prototype.map.call(arguments, func);
            };
        };


exports.extract_security_level = function(obj, obj2) {
	return obj.security_level;
};

