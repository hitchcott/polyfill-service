(function () {
	Object.create = function create(prototype, properties) {
		/* jshint evil: true */

		if (typeof prototype !== 'object') {
			throw TypeError('Argument must be an object');
		}

		var
		object = new Function('e', 'function Object() {}Object.prototype=e;return new Object')(prototype);

		object.constructor.prototype = prototype;

		if (1 in arguments) {
			Object.defineProperties(object, properties);
		}

		return object;
	};
})();
