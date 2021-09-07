document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide', {
		perPage    : 3,
		breakpoints: {
			1100:{perPage:2,
			
			600: {
				perPage: 1,
			}

		}}
	} ).mount();
} );
