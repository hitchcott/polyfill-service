it("Should return true if the element matches the tag selector", function() {
	var el = document.createElement("p");
	expect(el.matches("p")).to.be(true);
});

it("Should return true if the element matches the class selector", function() {
	var el = document.createElement("p");
	el.className = "foo";
	expect(el.matches(".foo")).to.be(true);
});

it("Should return true for more complex selectors", function() {
	var el = document.createElement("p");
	el.className = "foo";
	expect(el.matches("p.foo")).to.be(true);
});

it("Should not match non-matching selectors", function() {
	var el = document.createElement("p");
	el.className = "bar";
	expect(el.matches("a.bar")).to.be(false);
});

it("Should not match inner elements", function() {
	var el = document.createElement("p");
	var innerEl = document.createElement("a");
	el.appendChild(innerEl);

	expect(el.matches("a")).to.be(false);
});

it("Should throw an exception with an invalid selector", function() {
	var el = document.createElement("p");
	expect(function() { el.matches("an>invalid<:selector") }).to.throwException();
});
