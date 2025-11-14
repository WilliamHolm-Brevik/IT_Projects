var checked = false;
function saveData() {
  // Get the value of the input field
  var inputValue = [document.getElementById("txtEmail").value, document.getElementById("txtNavn").value];
  var inputValue2 = document.getElementById("txtEmail").value
  var inputValue3 = document.getElementById("txtNavn").value
    // Check if the input value is a valid email address
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValue2)) {
        alert("Please enter a valid email address");
        return;
    }
    else
    {
        checked = true;
    }
    localStorage.setItem("minData", inputValue2);
    localStorage.setItem("mittNavn", inputValue3);

}
function logoEmail()
{
    if (checked) {
        var img = document.getElementById("img1");
        img.style.transform = "scale(0.8)";
        img.style.transition = "transform 0.4s ease-in-out";
        setTimeout(function() {
            img.style.transform = "scale(2300)";
            img.style.transition = "transform 5s ease-in-out";
        }, 500);
        setTimeout(function() {
            window.location.href = "sider/hovedside.html";
        }, 1900);
    }
    else {
        checked = false;
    }
}