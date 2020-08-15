require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc) {
    
    // Access the "default" token model
	var tokens = mvc.Components.get("default");
    var tokens = mvc.Components.get('submitted');

	/* --- Search Reference --- */
	var reloadBaseFREDList = mvc.Components.get('reloadBaseFREDList');

	$(document).ready(function () {		
        console.log('Page loaded');
        $("#LoadList").click(function () {
            
            if (confirm("Press OK to replace all data in FRED_Default_List")) {
                reloadBaseFREDList.startSearch();
                txt = "Update Completed";
              } else {
                txt = "Operation cancelled";
              }
              alert(txt);
        });
        
    }());

});
