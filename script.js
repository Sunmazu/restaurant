$(document).ready(function () {
    $("#navbar").load("./navbar.html");
    $("#pageContent").load("./home.html");
});
function navigate(destination) {
    $("#pageContent").load(`./${destination}.html`);
}