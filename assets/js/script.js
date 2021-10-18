var setTasks = [];

$("#currentDay").html(moment().format('dddd, MMMM Do'));

$('.tasks').each(function() {

    currentHour = moment().format("HH");

    if ($(this).attr("id") === currentHour) {
        $(this).css('background-color', 'red');
    }
    else if ($(this).attr("id") < moment().format("HH")) {
        $(this).css('background-color', 'gray');
    }
    else {
        $(this).css('background-color', 'green');
    }
});





$('.btn').on('click', function() {
    var setHour = $(this).parent().attr("id");
    var setTask = $(this).parent().children('.tasks').text();
    if (setTasks.includes(setHour)){
        var remover = (setTasks.indexOf(setHour));
        setTasks.splice(remover, 2, setHour, setTask);
        localStorage.setItem("tasks", JSON.stringify(setTasks));
        console.log(setTasks);
    }
    else {
        setTasks.push(setHour, setTask);
        localStorage.setItem("tasks", JSON.stringify(setTasks));
        console.log(setTasks);
    }

});
