$(document).ready(function() {
    // $("#newsOMS").hover(
    $("#T2").newsTicker();

    $("body").overhang({
        custom: true,
        message: "OMS is now upgraded with new features",
        duration: 5,
        textColor: "#fff",
        primary: "#093c58",
        html: true,
        overlay: true,
        closeConfirm: true
    });

    function load_unseen_notification() {
        $.ajax({
            url: "server_scripts/fetch.php",
            method: "POST",
            dataType: "json",
            success: function(data) {
                if (data.unseen_notification > 0) {
                    $('#modalPush').modal({
                        backdrop: 'static',
                        keyboard: false
                    });
                    $("#notification_msg").html("Order <em id= \"orderid_noti\" style=\"color:red;\">" + data.notification + "</em> is processed. <br>Please click on the Link for FTP Path");
                }
            }
        });
    }
    load_unseen_notification();
    setInterval(function() {
        if (!$('#modalPush').is(':visible')) {
            load_unseen_notification();
        }
    }, 5000000);
});

function notificationRead() {
    $('#modalPush').modal('toggle');
    $.ajax({
        url: 'server_scripts/readNotification.php',
        method: 'POST',
        data: {
            orderid: $("#orderid_noti").text()
        },
        success: function(response) {}
    });
}
