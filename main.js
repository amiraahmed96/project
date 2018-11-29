var active1 = document.getElementById("active1"),
    active2 = document.getElementById("active2"),
    active3 = document.getElementById("active3"),
    active4 = document.getElementById("active4"),
    active5 = document.getElementById("active5"),
    home = document.getElementById("home"),
    about = document.getElementById("about"),
    services = document.getElementById("services"),
    gallary = document.getElementById("gallary"),
    contact = document.getElementById("contact");
active1.onclick = function () {
    "use strict";
    this.setAttribute("class", "active");
    active2.setAttribute("class", "");
    active3.setAttribute("class", "");
    active4.setAttribute("class", "");
    active5.setAttribute("class", "");
    home.style.display = "block";
    about.style.display = "none";
    services.style.display = "none";
    gallary.style.display = "none";
    contact.style.display = "none";
};
active2.onclick = function () {
    "use strict";
    this.setAttribute("class", "active");
    active1.setAttribute("class", "");
    active3.setAttribute("class", "");
    active4.setAttribute("class", "");
    active5.setAttribute("class", "");
    home.style.display = "none";
    about.style.display = "block";
    services.style.display = "none";
    gallary.style.display = "none";
    contact.style.display = "none";
};
active3.onclick = function () {
    "use strict";
    this.setAttribute("class", "active");
    active2.setAttribute("class", "");
    active1.setAttribute("class", "");
    active4.setAttribute("class", "");
    active5.setAttribute("class", "");
    home.style.display = "none";
    about.style.display = "none";
    services.style.display = "block";
    gallary.style.display = "none";
    contact.style.display = "none";
};
active4.onclick = function () {
    "use strict";
    this.setAttribute("class", "active");
    active2.setAttribute("class", "");
    active3.setAttribute("class", "");
    active1.setAttribute("class", "");
    active5.setAttribute("class", "");
    home.style.display = "none";
    about.style.display = "none";
    services.style.display = "none";
    gallary.style.display = "block";
    contact.style.display = "none";
};
active5.onclick = function () {
    "use strict";
    this.setAttribute("class", "active");
    active2.setAttribute("class", "");
    active3.setAttribute("class", "");
    active4.setAttribute("class", "");
    active1.setAttribute("class", "");
    home.style.display = "none";
    about.style.display = "none";
    services.style.display = "none";
    gallary.style.display = "none";
    contact.style.display = "block";
};