var tools = {};

tools.formatDate = function(date) {
    MMDD = new Date(date);

    var strDate = "";

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var yesterday = new Date();
    yesterday.setHours(0, 0, 0, 0);
    yesterday.setDate(yesterday.getDate() - 1);

    var tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (today.getTime() == MMDD.getTime()) {
        strDate = "Today";
    } else if (yesterday.getTime() == MMDD.getTime()) {
        strDate = "Yesterday";
    } else if (tomorrow.getTime() == MMDD.getTime()) {
        strDate = "Tomorrow";
    } else {
        strDate = date;
    }

    return strDate;
}

tools.alert = function(type, message) {
    $("#alert-area").append($("<div class='alert-message alert alert-" + type + " fade in' data-alert='alert'> <button type='button' class='close' data-dismiss='alert'>&times;</button> " + message + " </div>"));
    $(".alert-message").delay(2000).fadeOut("slow", function () { $(this).remove(); });
}