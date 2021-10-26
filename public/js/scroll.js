var home = document.getElementById("home");
var homeLink = document.getElementById("HomeLink");
var about = document.getElementById("about");
var aboutLink = document.getElementById("AboutLink");
var services = document.getElementById("services");
var servicesLink = document.getElementById("ServicesLink");
var departments = document.getElementById("departments");
var departmentsLink = document.getElementById("DepartmentsLink");
var contact = document.getElementById("contact");
var contactLink = document.getElementById("ContactLink");


function ScrollFnts() {
    var scrollTop = document.documentElement.scrollTop;
    var homeTop = home.offsetTop;
    var homeFinal = homeTop - 50;
    var aboutTop = about.offsetTop;
    var aboutFinal = aboutTop - 50;
    var servicesTop = services.offsetTop;
	var servicesFinal = servicesTop - 50;
    var departmentsTop = departments.offsetTop;
	var departmentsFinal = departmentsTop - 50;
	var contactTop = contact.offsetTop;
	var contactFinal = contactTop - 50;
 
    if (homeFinal < scrollTop) {
       homeLink.classList.add("link-active");

    } else {
        homeLink.classList.remove("link-active");
        
    }
    
    if (aboutFinal < scrollTop) {
        homeLink.classList.remove("link-active");
       aboutLink.classList.add("link-active");

    } else {
        aboutLink.classList.remove("link-active");
    }
    
    if (servicesFinal < scrollTop) {
        homeLink.classList.remove("link-active");
		aboutLink.classList.remove("link-active");
		servicesLink.classList.add("link-active");

	} else {
		servicesLink.classList.remove("link-active");
	}
    
    if (departmentsFinal < scrollTop) {
        homeLink.classList.remove("link-active");
		aboutLink.classList.remove("link-active");
        servicesLink.classList.remove("link-active");
		departmentsLink.classList.add("link-active");

	} else {
		departmentsLink.classList.remove("link-active");
	}
    
    if (contactFinal < scrollTop) {
        homeLink.classList.remove("link-active");
		aboutLink.classList.remove("link-active");
		servicesLink.classList.remove("link-active");
		departmentsLink.classList.remove("link-active");
		contactLink.classList.add("link-active");

	} else {
		contactLink.classList.remove("link-active");
	}
}

window.addEventListener('scroll', ScrollFnts);
