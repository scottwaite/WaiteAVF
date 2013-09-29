//Instagram
$('#instagram').on('pageinit', function () {
    var url = 'https://api.instagram.com/v1/users/554363169/media/recent?access_token=554363169.9d8f735.d89a044a6dd64d598a7738241d7e1014';
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        success: function (received) {
            console.log(received);
            $.each(received.data, function (index, photo) {
                var stRes = photo.user.id,
                    user_id = photo.user.id,
                    fullName = photo.user.full_name,
                    likes = photo.likes,
                    pic = "<li><img src='" + stRes + "' alt='" + user_id + "' /><h3>Created by: " + fullName + ", Likes: " + likes + "</h3></li>";
                $('#instagram').append(pic);
            });
        }
    });
});