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

	function loadTop10ClientIP(){
		$('#user-activity tbody').empty();
		periode = $('#periodeTop10ClientIP').val();
		pn 		= '<?= $userinfo[0]['personal_number']?>';

		spinner = Rats.UI.LoadAnimation.start();
		var myTable = $('#user-Top10ClientIP').DataTable( {
		    "bInfo": true,
		    "bFilter": true,
		    "bAutoWidth": false,
		    "bSort": true,
			"bServerSide": false,
			"bDestroy": true,
			"pageLength":10,
	        // "aaSorting" : [[6,'desc']],
	        columnDefs: [ { orderable: false, targets: [0]}],
	        "ajax" : {
	            type: 'POST',
	            url: '/Report_statistik/getUserTop10ClientIP/'+periode,
	            // data: {'pn': pn, 'periode': periode},
	            dataSrc: function ( response ) {
	                //alert(JSON.stringify(response));
	            	Rats.UI.LoadAnimation.stop(spinner);
	            	// setSuccessAjaxRequest(response);
	                if(response){
	                	if(response.data)
	                		return response.data;
	                	else
	                		return 0;
	                }
	                
	                
	              }
	        },
	        "createdRow": function( row, data, dataIndex ) {
	        	// console.log(data);
                $(row).children(':nth-child(5)').find('span').attr('style', 'word-wrap: break-word; width: 100%;display: inline-block; max-width: 250px;');
                
            },
	        "columns": [
	            {
	                "data": "client_ip", className: "align-middle center", "width": "5%",
	                render: function (data, type, row, meta) {
	                    return meta.row + meta.settings._iDisplayStart + 1;
	                }
	            },
	            { data: 'client_ip', className: "align-middle left", "width": "80%" },
	            { data: 'JUMLAH', className: "align-middle left", "width": "15%" },
	            

	        ],
	        
	        
	    
	    
	    } );
	}
