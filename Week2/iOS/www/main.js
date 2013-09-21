$("h1").on('click', function(){
	alert("hello");

});




$("#Instagram").on('pageinit', function(){
	alert("Welcome to page 5");

});









$.ajax({
	url: url,
	type: 'GET',
	dataType: 'jsonp'
	success: function(received){
		console.log(received);
		$.each(received.data, function(index, photo){
			var stRes = photo.user.id,
			user_id = photo.user.id,
			fullName = photo.user.full_name,
			likes = photo.likes,
			pic = "<li><img src='" + stRes + "' alt='" + user_id + "' /><h3>
created by: " + fullName + ", Likes: " + likes + "<h3></li>";

					$('#results').append(pic);
		});
	}
})





