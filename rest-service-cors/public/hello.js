$(document).ready(function() {
	var name = $.url().param('name');
    $.ajax({
        url: name === undefined ? "http://localhost:8080/greeting" : "http://localhost:8080/greeting?name="+name
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
       console.log(jqxhr);
    });
});