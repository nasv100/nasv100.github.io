$(document).ready(function(){
	var startForm = 5;
	var url = "index.html";
    setInterval(function(){
        $(".text--countdown span").text(--startForm);
        if(startForm <= 0) {
        	var url = "index.html";
			$(location).attr('href',url);
        }
    },1000);
});