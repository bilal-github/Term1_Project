//Code Author Bilal
$(document).ready(function() {
  var navBarHTML =
    '<nav class="navbar navbar-expand-md bg-dark navbar-dark">\
    <button class="navbar-toggler justify-content-end" type="button" data-toggle="collapse"\
        data-target="#collapsibleNavbar">\
        <span class="navbar-toggler-icon"></span>\
    </button>\
    <div class="collapse navbar-collapse" id="collapsibleNavbar" >\
        <div class="navbar-nav" width="100%">\
                <a class="nav-link" href="index.html" style="font-weight: bold">\
                <img src="plane.png">\
                Home</a>\
                <a class="nav-link" href="Contact.html" style="font-weight: bold">\
                <img src="card.png">\
                Contact Us</a>\
                <a class="nav-link" href="Vacation.html" style="font-weight: bold">\
                <img src="book.png">\
                Book Vacation</a>\
                <a class="nav-link" href="Registration.html" style="font-weight: bold">\
                <img src="register.png">\
                Sign Up</a>\
        </div>\
    </div>\
</nav>';
  $("section").append(navBarHTML);
});
