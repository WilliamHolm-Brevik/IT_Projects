var ctx = document.getElementById("canPaint").getContext("2d");


function heart()
{
    t = 5
    //definerer en radial grafient (straler) > to sirkler (x, y, $, x1, y1, r1)
    //lager denne statisk
    var grd = ctx.createRadialGradient(70*t, 60*t, 2*t, 90*t, 60*t, 80*t)
    //angi start og sluttfarge
    grd.addColorStop(0, "#FF0000");
    grd.addColorStop(1, "#FFFFFF");

    ctx.beginPath();
    ctx.fillStyle = grd;
    //tegner hjerte manuelt
    ctx.moveTo(75*t, 40*t);

    //berzierkurver = kontrollpunkt 1 og kontrollpunkt 2, sluttpunkt
    ctx.bezierCurveTo(75*t, 37*t, 70*t, 25*t, 50*t, 25*t);
    ctx.bezierCurveTo(20*t, 25*t, 20*t, 62.5*t, 20*t, 62.5*t);
    ctx.bezierCurveTo(20*t, 80*t, 40*t, 102*t, 75*t, 120*t);
    ctx.bezierCurveTo(110*t, 102*t, 130*t, 80*t, 130*t, 62.5*t);
    ctx.bezierCurveTo(130*t, 62.5*t, 130*t, 25*t, 100*t, 25*t);
    ctx.bezierCurveTo(85*t, 25*t, 75*t, 37*t, 75*t, 40*t);
    ctx.fill()

}