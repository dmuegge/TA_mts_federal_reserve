require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc) {

    

	var tokens = mvc.Components.get('submitted');
	/* --- Search Reference --- */
	var updateSearch = mvc.Components.get('updateSearch');
	var deleteSearch = mvc.Components.get('deleteSearch');
	var serieslistDisplaySearch = mvc.Components.get('serieslistDisplaySearch');
	
	/* --- Table Reference --- */
	var serieslistDisplayTable = mvc.Components.get('serieslistDisplayTable');
	
	/* --- Define the form inputs --- */
	var state_Input = $('[name="State"]');
	var _key_Input = $('[name="_key"]')
	
	/* --- Reference to the input values --- */
	var state_Val, _key_Val;
	

    serieslistDisplayTable.on('click', function(e) {


       e.preventDefault();
       console.log('e: ', e);
	   
	   
		if(e['field'] === 'Update') { 
		
			/* --- Pull values from the current table row --- */
			state_Val = e.data['row.state'];
			_key_Val = e.data['row._key'];
			 
			 
			/* --- Insert values from rows into input fields --- */
			state_Input.val(state_Val);
			_key_Input.val(_key_Val);

			$('form *').filter(':input').each(function(){
			   var value = $(this).val();
			   console.log(value);
			});
			
		} else if(e['field'] === 'Delete') {


			tokens.set('delete_key_tok', e.data['row._key']);


		}
		
    });

	$(document).on('click', '#submitButton', function(e) {
	
	
		e.preventDefault();
		if(_key_Input.val() != '') {
			/* --- this is an update --- */
			tokens.set('update_key_tok', _key_Val);

			// need to remove and re-add quotes with escape "\" TOKEN \""

			console.log(_key_Val);
			console.log(state_Input.val());
			var state_text = state_Input.val().replace(/"/g,"")
			console.log(state_text);



			tokens.set('update_state_tok', state_text);


			
			
			updateSearch.startSearch();
			
		} 
		
		
		
		console.log('e: ', e);
		
	});
	
	/* --- Search Jobs --- */
	updateSearch.on('search:done', function() {


		serieslistDisplaySearch.startSearch();
		$('form *').filter(':input').each(function(){
			$(this).val('');
		});

		tokens.unset('update_key_tok');
		tokens.unset('update_state_tok');


	});
	
	
	
	
	deleteSearch.on('search:done', function() {


		serieslistDisplaySearch.startSearch();


		tokens.unset('delete_key_tok');


	});
	
	
});


