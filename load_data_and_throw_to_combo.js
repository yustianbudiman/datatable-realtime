	function loadPeriodeTop10ClientIP(){
		var el = $("#periodeTop10ClientIP");
		spinner = Rats.UI.LoadAnimation.start();

		$.ajax({
			type: "GET",
			url: "/Tes/getPeriode",
			dataType: 'json',
			success: function(response){
				// setSuccessAjaxRequest(response);
				el.empty();
				Rats.UI.LoadAnimation.stop(spinner);
				if(response.act_periode.length > 0){
					$.each(response.act_periode, function(k, v){
						el.append('<option value="'+v+'">'+v+'</option>');
					});
				}

			}
		});
	}
