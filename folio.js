// The codes below provide the onmouseover functionality on About me section

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// Menu functionality - make these functions globally available
function openmenu() {
    const body = document.body;
    const sidemenu = document.getElementById('sidemenu');
    if (body && sidemenu) {
        body.classList.add('sidemenu-active');
        sidemenu.classList.add('active');
    }
}

function closemenu() {
    const body = document.body;
    const sidemenu = document.getElementById('sidemenu');
    if (body && sidemenu) {
        body.classList.remove('sidemenu-active');
        sidemenu.classList.remove('active');
    }
}

// Initialize menu functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.fa-bars');
    const closeToggle = document.querySelector('.fa-xmark');
    const sidemenu = document.getElementById('sidemenu');
    const body = document.body;
    
    // Toggle menu when clicking the hamburger/close icon
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            openmenu();
        });
    }
    
    if (closeToggle) {
        closeToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            closemenu();
        });
    }
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !event.target.closest('#sidemenu') && 
            !event.target.closest('.fa-bars')) {
            closemenu();
        }
    });
    
    // Close menu when clicking on a link
    var navLinks = document.querySelectorAll('#sidemenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', closemenu);
    });
    
    // Handle window resize
    function handleResize() {
        const sidemenu = document.getElementById('sidemenu');
        const body = document.body;
        
        // If window is resized to desktop view, ensure menu is closed and reset
        if (window.innerWidth > 768) {
            if (sidemenu && body) {
                body.classList.remove('sidemenu-active');
                sidemenu.classList.remove('active');
            }
        }
    }
    
    // Add resize event listener with debounce
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 250);
    });
});

// the codes below provide the sending of data entered on the form , to the googlesheet attached to this site

const scriptURL = 'https://script.google.com/macros/s/AKfycbzrdkLaY8raiv__qEahMNw_VzH5oWbCQb1nlwmXAwDCwZXX-y2i57v45ZfISxmHOAnC/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML= "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

// the codes below gives us the auto typing effect 

var typed = new Typed('.auto-type',{
    strings:['Louis Kapend','a web developer','a freelancer'],
    typeSpeed: 150,
    backSpeed: 150,
    loop:true
})

// the below codes are for the display of more work , by pressing show more button

function showMore(){
    document.querySelector('.work-list').classList.toggle('show-all');
    document.getElementById('more-content').style.display='none';
}
