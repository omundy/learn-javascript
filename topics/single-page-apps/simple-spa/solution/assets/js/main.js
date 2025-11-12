/* main.js file for JS single page application */

// object to store our page data
var pages = {
    "home": {
        "title": "This is the home page",
        "content": "This is the content of the home page"
    },
    "about": {
        "title": "This is the about page",
        "content": "This is the content of the about page"
    },
    "contact": {
        "title": "This is the contact page",
        "content": "This is the content of the contact page"
    }
};

// display page function
function displayPage(id) {
    // testing
    console.log("displayPage()", id);

    // new var to hold html we will display
    var html = '';
    // create title and content html
    html += `<h1>${pages[id].title}</h1>`;
    html += `<p>${pages[id].content}</p>`;

    // display html
    document.querySelector("#main").innerHTML = html;

    document.querySelectorAll('.nav-link a').forEach(function(ele){
        // remove active class from all links
        ele.classList.remove('active');
    });
    // add active class to active link
    document.querySelector('#' + id).classList.add('active');
}
// load default page
displayPage('home');

document.querySelectorAll('.nav-link').forEach(function (ele) {
    ele.addEventListener('click', function () {
        let id = this.id;
        console.log("id =", id);
        displayPage(id);
    });
});







// OLD jQUERY FUNCTIONS

// // display page function
// function displayPage(id) {
//     // new var to hold html we will display
//     var html = '';

//     // create title and content html
//     html += `<h1>${pages[id].title}</h1>`;
//     html += `<p>${pages[id].content}</p>`;

//     // testing
//     console.log("displayPage()", id);

//     // display html
//     $('#main').html(html);
//     // remove active class from all links
//     $('.nav-item a').removeClass('active');
//     // add active class to active link
//     $('#' + id).addClass('active');
// }

// $(document).on('click', '.nav-link', function () {
//     // store id
//     var id = $(this).attr('id');
//     // call displayPage function
//     displayPage(id);
// });
