document.addEventListener('DOMContentLoaded', function() {

    chrome.tabs.query({
        'active': true,
        'lastFocusedWindow': true
    }, function(tabs) {
        var url = tabs[0].url;
        var option = {
        	text:url,
        	size:300,
        	src:'icon.png'
        }
        $('#qrcode').qrcode(option);
    });
    $('input[type=text]').keyup(function(){
    	var url = $(this).val().trim()
    	if(url != '' && url != undefined && url != null){
    		$("#create").attr('disabled',false)
    	}
    	else{
    		$("#create").attr('disabled',true)
    	}
    })
   $("#create").click(function(){
   		var url ='http://' + $('input[type=text]').val();

   		var option = {
   			text:url,
   			size:300
   		};
   		$('#qrcode').empty().qrcode(option);
   })
});
