$('footer a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

/*		<h1 id="aktDatum"></h1>
		<script>
		let datum = new Date();
		let tag = datum.getDate();
		let monat = datum.getMonth() + 1;
		let jahr = datum.getFullYear();
		//Darstellung in einer Fehlerbox wäre: alert(tag + "." + monat + "." + jahr);
		let datumsfeld = document.getElementById("aktDatum");
		datumsfeld.innerHTML = tag + "." + monat + "." + jahr;
		</script>

		<!-- Monate werden in JS gezählt startend mit Januar = 0 deshalb +1 */