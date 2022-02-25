function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie)
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}




$("form").on('submit', function(event) {
    event.preventDefault();
    let val = document.getElementById("habitInput").value;
    console.log(val);
    checkCookie(val);
    return false;
});


function checkCookie(name) {
    // assuming all cookies are integers
    let cookieVal = Number(getCookie(name));
    console.log("checkCookie()", cookie)
    // if a value 
    if (cookieVal !== "" && cookieVal !== null) {

        console.log("cookie exists", cookieVal);

        // does exist, add 1
        setCookie(name, cookieVal += 1, 30);
    } else {
        // doesn't exist, add it with 1
        setCookie(name, 1, 30);
    }
}
