/* Slick (Plugin)
-------------------------------------------------- */

$(document).ready(function(){
	$('.slide-clientes').slick({
		arrows: false,
		autoplay: true,
		dots: true,
		autoplaySpeed: 5000,
		slidesToShow: 5,
  	slidesToScroll: 5,
  	responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    },
	    {
	      breakpoint: 750,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    }
	  ]
	});	
});

/* Mask (Plugin)
-------------------------------------------------- */

$(document).ready(function(){
	$(".mask-fone").mask("(99) 99999999?9");
});

/* Toggle
-------------------------------------------------- */

$(document).ready(function() {
	$('[data-toggle]').click(function(){
		select = $(this).data("toggle");
		$(select).toggle();
	});

	$('[data-hide]').click(function(){
		select = $(this).data("hide");
		$(select).hide();
	});

	$('[data-show]').click(function(){
		select = $(this).data("show");
		$(select).show();
	});
});

/* Form
-------------------------------------------------- */

$(document).ready(function() {
	$('#form').submit(function(event){
		event.preventDefault()

		var nome = $("#form [name='nome']").val();
		var email = $("#form [name='email']").val();
		var serie = $("#form [name='serie']").val();
		var telefone = $("#form [name='telefone']").val();

		if ((nome != '') && (email != '') && (serie != '') && (telefone != '')) {
			$('#form .button').html("Enviando...");

			$.ajax({
				type: "POST",
				url: "form.php",
				data: { 
					nome: nome,
					email: email,
					serie: serie,
					telefone: telefone
				},
				success: function(msg) {
					if (msg == "1") {
						$('#form .alert').html("<p class='alert-success animate-down'>Cadastro enviado com sucesso!</p>");
						$('#form .alert').show();
						$("#form [name='nome']").val("");
						$("#form [name='email']").val("");
						$("#form [name='telefone']").val("");
						
					} else {
						$('#form .alert').html("<p class='alert-error animate-shake'>Erro. Tente novamente mais tarde.</p>");
						$('#form .alert').show();
					}
					$('#form .button').html("Enviar");
						}
			});

		} else {
			msg = "<p class='alert-error animate-shake'>Erro. Verifique os dados preenchidos.</p>";
			$('#form .alert').html(msg);
			$('#form .alert').show();
		}
	});

	$('.alert').click(function(){
		$('.alert').hide();
		$('.alert').html('');
	});
});