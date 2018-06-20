$(document).ready(function(){
    //open modal
    $('$open_modal').click(function(){
        $('$modal_to_open').css(
            {
                'display': 'block'
            }
        );
    });
});
    
//Close modal
$(document).ready(function(){
    //open modal
    $('$close_modal').click(function(){
        $('$modal_to_open').css(
            {
                'display': 'none'
            }
        );
    });
});
//Send mail with AJAX

$('#send_mail').click(function(e){
    e.preventDefault();
    var data = {
        email: $('#email').val(),
        name: $('#name').val(),
        firstname: $('#firstname').val(),
        phone: $('#phone').val(),
        message: $('#message').val()
    };

    //AJAX

    $.ajax({
        url: "mail.php",
        type: 'POST',
        data: data,
        success: function(data) {
            $('#js_alert_success').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_success').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('#firstname').val("");
                $('#phone').val("");
                $('#message').val("")
            }, 3000);
        },
        error: function(data) {
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_danger').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('#firstname').val("");
                $('#phone').val("");
                $('#message').val("")
            }, 3000);
        }
    });
});