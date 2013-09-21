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