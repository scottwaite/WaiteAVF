//Instagram
$('#instagram').on('pageinit', function () {

        var url = 'https://api.instagram.com/v1/tags/kitten/media/recent?callback=?&amp;client_id=bdd3abebae3a4d6385255d64427aeaff';

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp'
            success: function (received) {
                console.log(received);
                $.each(received.data, function (index, photo) {
                    var stRes = photo.user.id,
                        user_id = photo.user.id,
                        fullName = photo.user.full_name,
                        likes = photo.likes,
                        pic = "<li><img src='" + stRes + "' alt='" + user_id + "' /><h3>
Created by: " + fullName + ", Likes: " + likes + "</h3></li>";

                    $('#instagram').append(pic);

                });
}

            };
        });


/*

https://api.instagram.com/v1/users/376080995/media/recent?access_token=376080995.5b9e1e6.e3cdf1450ae345308e32fb59dc1d6150';

