$(document).ready(function () {
    $('#createLiftingBtn').click( function(event){
        event.preventDefault();
        var payload = {
            Day: $('#Day').val(),
            ID: $('#personid').val(),
            Exercise: $('#Exercise').val(),
            Weight: $('#Weight').val(),
            Reps: $('#Reps').val(),
            Sets: $('#Sets').val()
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
