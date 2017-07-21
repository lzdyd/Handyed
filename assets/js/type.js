$(function() {

	var strings = ["онлайн-программа", "обучение в студии", "открытые лекции и вебинары", "бесплатные видеоуроки"];
	var typedString = $('.typed-strings');

	$.each(typedString, function(index) {
		createTypedString($(this).attr('id'), strings[index]);
	})

	function createTypedString(elem, str) {
		var typed = new Typed('#' + elem, {
			strings: [str],
			typeSpeed: 50
		});
	}

});