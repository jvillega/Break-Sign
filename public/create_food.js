$(document).ready(function () {
    $('#createFoodBtn').click( function(event){
        event.preventDefault();
        var payload = {
            Day: $('#Day').val(),
            DayWeight: $('#DayWeight').val(),
            ID: $('#personid').val(),
            Food: $('#Food').val(),
            Calories: $('#Calories').val()
        };

        $.ajax({
            url: $("#create_food_form").attr("action"),
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
