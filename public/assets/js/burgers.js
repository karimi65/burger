$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault()
        let newBurger = {
            burger_name: $("#brgr").val().trim(),
            devoured: false,
        };

        // Send the POST request:
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger!");
                location.reload();
            })
    });

    $('.newBurger').on('click', function (event) {
        event.preventDefault()
        let id = event.target.id
        let newBurger = {
            burger_name: event.target.burger_name,
            devoured: true
        }
        console.log(event.target.id)
        $.ajax('api/burger/' + id, {
            type: 'PUT',
            data: newBurger

        }).then(function () {
            console.log('Devoured burger' + id)
            location.reload()

        })
    })

    $(".delete").on("click", function () {
        // event.preventDefault();
        const id = $(this).attr("data-id");

        $.ajax("/api/burger/" + id, {
            type: "DELETE",
        }).then(
            function () {
                console.log('deleted burger!')
                location.reload()
            }
        );
    })

});
