$(document).ready(function () {
    $('#personid').change( function(event){
        
        event.preventDefault();

        if($('#personid').val() == "") {
            // the user selected the blank option, so hide the div and return
            $('#output').hide();
            return;
        }

        var payload = {
            personid: $('#personid').val()
        };

        console.log(payload);

        $.ajax({
            url: $("#ajax_form_person").attr("action"),
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
