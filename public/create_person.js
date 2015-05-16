$(document).ready(function () {
    $('#createPersonBtn').click( function(event){
        event.preventDefault();
        var payload = {
            FirstAndLastName: $('#FirstAndLastName').val(),
            Age: $('#Age').val(),
            StartWeight: $('#StartWeight').val(),
            Gender: $('#Gender').val()
        };

        $.ajax({
            url: $("#create_person_form").attr("action"),
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
