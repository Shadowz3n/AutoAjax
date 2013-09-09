window.jQuery || document.write(unescape('%3Cscript src="http://jquery.com/jquery-wp-content/themes/jquery/js/jquery-1.9.1.min.js"%3E%3C/script%3E'))
(function(){

	//**************************************************
	//
	//	Plugin criado para ser usado quando houver
	//	necessidade do ajax, e pode ser usado com ou
	//	sem um formulário.
	//
	//
	//
	//	*** Vantagens do plugin:
	//
	//	- todo campo input de texto pode ser facilmente validado
	//	apenas usando atributos no HTML.
	//
	//	- Retorna o valor do ajax
	//	
	//	*** Tipos de validações:
	//	
	//	data-type="letter"	(Apenas letras)
	//
	//	data-type="number"	(Apenas números)
	//
	//	data-type="name"	(Apenas nomes)
	//
	//	data-type="email"	(Apenas caracteres de e-mail ,incluído no submit)
	//
	//	data-type="ip"		(Apenas endereço de IP)
	//
	//	data-type="cep"		(Apenas números especificos de um CEP)
	//
	//	data-type="cpf"		(Apenas números especificos de um CPF)
	//
	//	data-type="cnpj"	(Apenas CNPJ válidos)
	//
	//	data-type="phone"	(Apenas números especificos de um Telefone)
	//
	//	data-type="ddd"		(Apenas números especificos de um DDD)
	//
	//	data-type="date"	(Apenas datas)
	//	
	//	
	//*****************************************************
	
	$.fn.formAjax = function(options)
	{
		// Default
		var defaults = $.extend({
			action:"?",
			method:"POST",
			form:true
		}, options);
		
		// Sem formulário
		if(defaults.form === undefined){

			// Manda ajax
			$.ajax({
				url: defaults.action,
				type: defaults.method,
				success: function(data)
				{
					var result = data;
				}
			}).done(function(){
				return result;
			});
			
		}
		
		// Validar letras
		$("input[data-type='letter']").keyup(function(){
			if($(this).val().match(/[(0-9)+.?(0-9)*]+/igm))
			$(this).val($(this).val().replace(/[(0-9)+.?(0-9)*]+/igm, ""));
		});
		
		// Validar números
		$("input[data-type='number']").keyup(function(){
			if($(this).val().match(/([A-Za-z-]+)/gm))
			$(this).val($(this).val().replace(/([A-Za-z-]+)/gm, ""));
		});
		
		// Validar E-mail
		$("input[data-type='email']").keyup(function(){
			if($(this).val().match(/[(0-9)+.?(0-9)*]+/igm))
			$(this).val($(this).val().replace(/[(0-9)+.?(0-9)*]+/igm, ""));
		});
		
		// Validar CPF - **********
		$("input[data-type='cpf']").keyup(function(){
			if($(this).val().match(/([A-Za-z-]+)/gm))
			$(this).val($(this).val().replace(/([A-Za-z-]+)/gm, ""));
		});
		
		// Validar CNPJ - **********
		$("input[data-type='cnpj']").keyup(function(){
			if($(this).val().match(/([A-Za-z-]+)/gm))
			$(this).val($(this).val().replace(/([A-Za-z-]+)/gm, ""));
		});
		
		// Validar CEP - **********
		$("input[data-type='cep']").keyup(function(){
			if($(this).val().match(/([A-Za-z-]+)/gm))
			$(this).val($(this).val().replace(/([A-Za-z-]+)/gm, ""));
		});					
		
		// Validar DDD - **********
		$("input[data-type='ddd']").keyup(function(){
			if($(this).val().match(/([A-Za-z-]+)/gm))
			$(this).val($(this).val().replace(/([A-Za-z-]+)/gm, ""));
		});
		
		// Validar Telefone - **********
		$("input[data-type='phone']").keyup(function(){
			if($(this).val().match(/([A-Za-z-]+)/gm))
			$(this).val($(this).val().replace(/([A-Za-z-]+)/gm, ""));
		});
		
		$(document).on("submit", "form[data-form='ajax']", function(){
			
			// Variável definida para checar erros
			var formAjaxError = false;
		
			// Validar E-mail em submit
			$(this).find("input[data-type='email']").keyup(function(){
				if(!$(this).val().match(/[(0-9)+.?(0-9)*]+/igm))
				formAjaxError = true;
			});
			
			// Validar Nome em submit
			$(this).find("input[data-type='name']").keyup(function(){
				if(!$(this).val().match(/[(0-9)+.?(0-9)*]+/igm))
				formAjaxError = true;
			});
			
			// Validar CEP
			$(this).find("input[data-type='cep']").keyup(function(){
				if(!$(this).val().match("^\d{5}\-?\d{3}$"))
				formAjaxError = true;
			});
			
			// Validar CNPJ
			$(this).find("input[data-type='cnpj']").keyup(function(){
				if(!$(this).val().match('^\d{3}.?\d{3}.?\d{3}/?\d{3}-?\d{2}$'))
				formAjaxError = true;
			});
			
			// Validar DDD
			$(this).find("input[data-type='ddd']").keyup(function(){
				if(!$(this).val().match(/\((10)|([1-9][1-9])\) [2-9][0-9]{3}-[0-9]{4}/))
				formAjaxError = true;
			});
			
			// Validar Data
			$(this).find("input[data-type='date']").keyup(function(){
				if(!$(this).val().match("^((0[1-9]|[12]\d)\/(0[1-9]|1[0-2])|30\/(0[13-9]|1[0-2])|31\/(0[13578]|1[02]))\/\d{4}$"))
				formAjaxError = true;
			});
			
			// Validar IP em submit
			$(this).find("input[data-type='ip']").keyup(function(){
				if(!$(this).val().match('^([01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([01]?[0-9][0-9]|2[0-4][0-9]|25[0-5])$'))
				formAjaxError = true;
			});
		
			// Informações do form
			var method 		= $(this).attr("method");
			var action 		= $(this).attr("action");
			var serialize 	= $(this).serialize();
			
			if(formAjaxError == true){return false;}
			
			// Validar tudo que for obrigatório
			$(this).find("[required]").each(function(){
				if($.trim($(this).val()) == "")
				formAjaxError = true;
			});
			
			var allElementsForm = $(this).find("button, input, select, textarea");
			
			// Manda ajax
			var result = [];
			$.ajax({
				url: action,
				type: method,
				data: serialize,
				beforeSend: function()
				{
					$(allElementsForm).attr("disabled", true);
				},
				success: function(data)
				{
					result.push(data);
				}
			}).done(function(){
				return result;
				$(allElementsForm).attr("disabled", false);
			});
			
			return false;
			
		});
	}
	$("body").formAjax();
	
	
});
