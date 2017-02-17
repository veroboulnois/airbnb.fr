/
/*$(document).ready(function() {

		Reference = $(".carrousel li:first-child");
		// Nombre d'éléments de la liste
		NbElement = $(".carrousel li").length;
	// Ciblage de la bande de diapositives
	$(".carrousel")
		// Englobage de la liste par la zone de visualisation
		.wrap('<div class="carrousel-conteneur"></div>')
		// Application d'une largeur à la bande de diapositive afin de conserver une structrure horizontale
		.css("width", (Reference.width() * NbElement) );
	// Ciblage de la zone de visualisation
	$(".carrousel-conteneur")
		// Application de la largeur d'une seule diapositive
		.width(  Reference.width()  )
		// Application de la hauteur d'une seule diapositive
		.height( Reference.height() )
		// Blocage des débordements
		.css("overflow", "hidden");
});*/
/*$(document).ready(function() {
	// Calcul préalables
	// […]
	// Ciblage de la bande de diapositives
	// […]
	// Ciblage de la zone de visualisation
	$(".carrousel-conteneur")
		// Application de la largeur d'une seule diapositive
		.width(  Reference.width()  )
		// Application de la hauteur d'une seule diapositive
		.height( Reference.height() )
		// Blocage des débordements
		.css("overflow", "hidden")
		// Insertion des boutons de navigation
		.after(''
			+	'<ul class="carrousel-pagination">'
			+	'	<li class="carrousel-prev"><button type="button">Précédent</button></li>'
			+	'	<li class="carrousel-next"><button type="button">Suivant</button></li>'
			+	'</ul>'
			+	'');
});*/
$(document).ready(function() {
	// Code précédent
	// […]
	// Actions de navigation
		// Initialisation du compteur
		Cpt = 0;
		// Clic sur le bouton "Suivant"
		$(".carrousel-next button").click(function() {
			// Ajout +1 au compteur (nous allons sur la diapositive suivante)
			Cpt++;
			// Mouvement du carrousel en arrière-plan
			$(".carrousel").animate({
				marginLeft : - (Reference.width() * Cpt)
			});
		});
		// Clic sur le bouton "Précédent"
		$(".carrousel-prev button").click(function() {
			// Soustraction -1 au compteur (nous allons sur la diapositive précédente)
			Cpt--;
			// Mouvement du carrousel en arrière-plan
			$(".carrousel").animate({
				marginLeft : - (Reference.width() * Cpt)
			});
		});
});
