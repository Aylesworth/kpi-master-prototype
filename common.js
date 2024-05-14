$("#nav-home").click(() => window.location.href = 'home.html');
$("#nav-kpi-list").click(() => window.location.href = 'kpi.html');
$("#nav-schedule").click(() => window.location.href = 'schedule.html');
$("#nav-noti").click(() => window.location.href = 'notification.html');
$("#nav-settings").click(() => window.location.href = 'settings.html');

function inputGainsFocus() {
    $($($(this).parent().get(0)).parent().get(0)).css("border-width", "2px");
}

function inputLosesFocus() {
    $($($(this).parent().get(0)).parent().get(0)).css("border-width", "1px");
}

$("input").focus(inputGainsFocus);
$("input").blur(inputLosesFocus);