//When the device is ready check the connection
$("document").ready(function checkconnection() {
    checkConnection();


});
//Connection function
function checkConnection() {
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.NONE] = 'No network connection';

    alert('Your device has ' + states[networkState]);
}
//Splashscreen
$('#Community').on('click', function () {
    navigator.splashscreen.show();

    setTimeout(function () {
        navigator.splashscreen.hide();
    }, 2000);
});
//Notification
$('#Instagram').on('click', function () {
    function alertDismissed() {}

    navigator.notification.alert(
        'Thanks for checking out our photos!',
        alertDismissed,
        'Instagram',
        'Dismiss'
    );
});
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