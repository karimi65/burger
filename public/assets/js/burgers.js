$(document).ready(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#brgr").val().trim(),
        };

        // Send the POST request:
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger");
                location.reload();
            }
        );
    });


});
