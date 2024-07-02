$("input").keypress(function (event) {
    key_pressed = event.key;
    $("h1").text(key_pressed);
})