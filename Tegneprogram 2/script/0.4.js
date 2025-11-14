var ctx = document.getElementById("canPaint").getContext("2d");

function tegnLinear()
{
    //henter verdier fra colorPickers
    var farge1 = document.getElementById("colFarge1").value;
    var farge2 = document.getElementById("colFarge2").value;

    //lager gradient for å fylle canvas
    var grd = ctx.createLinearGradient(0,0, canPaint.width, canPaint.height);
    //angir start og stoppfarge
    grd.addColorStop(0, farge1);
    grd.addColorStop(1, farge2);
    //fyller canvas med gradientfarge
    ctx.fillStyle = grd;
    ctx.fillRect(0,0, canPaint.width, canPaint.height);
}

function tegnRadial()
{
    //henter verdier fra colorPickers
    var farge1 = document.getElementById("colFarge1").value;
    var farge2 = document.getElementById("colFarge2").value;

    //lager gradient for å fylle canvas må finner senterpunkt og angi radis til sentral sirkel
    var grd = ctx.createRadialGradient(canPaint.width/2, canPaint.height/2, 100, canPaint.width, canPaint.width, canPaint.height);
    //angir start og stoppfarge
    grd.addColorStop(0, farge1);
    grd.addColorStop(1, farge2);
    //fyller canvas med gradientfarge
    ctx.fillStyle = grd;
    ctx.fillRect(0,0, canPaint.width, canPaint.height);
}