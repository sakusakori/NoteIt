const response = () => {
    let Navbar = document.querySelector('.navbar');
    if(Navbar.className === "navbar") {
        Navbar.className += " responsive";
    }
    else {
        Navbar.className = "navbar";
    }
};