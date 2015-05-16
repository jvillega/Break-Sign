$(document).ready(function () {
    $('#createCardioBtn').click( function(event){
        event.preventDefault();
        var payload = {
            Exercise: $('#Exercise').val(),
            Time: $('#Time').val(),
            Day: $('#Day').val(),
            ID: $('#personid').val()
        };

        $.ajax({
            url: $("#create_cardio_form").attr("action"),
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(payload),
            complete: function(data) {
                console.log(data.responseText);
                $('#output').html(data.responseText);
                $('#output').show();
            }
        });
    });
});
