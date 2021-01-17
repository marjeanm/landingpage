



/*global variables*/




let text = [
  "The Candi Shoppe",
  "About",
  "faqs",
  "services",  
  "News letter",
  "testimonials"
];

let url = [
  "Logo",
  "about",
  "faq",
  "services",
  "newsletter",
  "testimonials"
];



let ul = '<ul class="flex-ul" id="navbar">';
let li = "<li>";
let liCLose = "</li>";
/* added class to code so i can create a foreach click event.*/
/* added 'javascript:void();' to prevent jumping to top on all clicks*/
let a = '<a class="scroll" href="javascript:void(0);" id =" ">';
let aClose = "</a>";
/*this is to create the li element and the nested a element*/
text.forEach((text) => {
  ul += li + a + text + aClose;

});
ul += "</ul>";

document.getElementById("listMenu").innerHTML = ul;
/*this is to add the id  for a click event*/
url.forEach((url) => {
  document.querySelector('a[id=" "]').id = url;
});



/*This is  a click event where it shows the dropdown menu */
let closer = document.getElementById('mobile-close');
let click = document.getElementById('mobile-click');
let list = document.getElementById('navbar');
let nav = document.querySelector('.dynamicMenu');
let headerMain = document.querySelector('.header-main');
function open() {
  nav.style.display = "inline-block";
  list.style.display = "inline-block";
  closer.style.display = 'inline-block';
  click.style.display = 'none';
}
function close() {
  list.style.display = "none";
  closer.style.display = 'none';
  click.style.display = "inline-block";
  nav.style.display ="none";
  headerMain.style.marginTop = "0";
  
  
}
click.addEventListener("click", open);
closer.addEventListener("click", close);






/* variables for function to change the color of the li  */
const color = document.getElementById('navbar');
let liColor = color.firstElementChild;
let pink = liColor.firstElementChild;

function colorChange() {

  pink.style.color = '#FF1493';
}
colorChange();






let home = document.getElementById('Logo');
let about = document.getElementById('about');
let faq = document.getElementById('faq');
let services = document.getElementById('services');
let newsletter = document.getElementById('newsletter');
let test = document.getElementById('testimonials');
let homeBase = document.getElementById('upArrow');
let names = document.querySelectorAll('li > a');

/* on click to scroll to Y position */
names.forEach((names) => {

  home.addEventListener("click", function(event) {
   
    document.documentElement.scrollTop = document.body.scrollTop = 0;
    event.preventDefault();
  });
  about.addEventListener("click", function  (event) { 
   
      document.documentElement.scrollTop = document.body.scrollTop = 500;
      event.preventDefault();
  });
  faq.addEventListener("click", function  (event) {
   
    document.documentElement.scrollTop = document.body.scrollTop = 1258 ;
    event.preventDefault();
  });
  services.addEventListener("click", function(event) {
  
    document.documentElement.scrollTop = document.body.scrollTop = 2034;
    event.preventDefault();
  });
  newsletter.addEventListener("click", function (event) {
  document.documentElement.scrollTop = document.body.scrollTop = 3186 ;
  event.preventDefault();
  });

  test.addEventListener("click", function(event) {
    
    document.documentElement.scrollTop = document.body.scrollTop = 3440 ;
    event.preventDefault();
  });

  homeBase.addEventListener("click",function (event) {
    document.documentElement.scrollTop = document.body.scrollTop = 0 ;
    event.preventDefault();
  });
  

  
});

/* this is the helper function that was suggested and the licence is below for reference. */
/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
let isInViewport = function (elem) {
  let distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
    (window.innerWidth || document.documentElement.clientWidth)
    
  );
};

let h1Main = document.querySelector('.header-main > h1');
let aboutUsH2 = document.querySelector('.aboutUs-text > h2');
let faqH2 = document.querySelector('.test-faq');
let serviceH1 = document.querySelector('.services-flex > h2');
let newH2 = document.querySelector('.newsletter > h2');
let testH2 = document.querySelector('.header > h2');
window.addEventListener('scroll', function (event) {
  if (isInViewport(h1Main)) {
    home.className ="border"
} else {
    home.className ="none"
}
if (isInViewport(aboutUsH2)) {
  about.className ="border"
  aboutUsH2.className ="pink"
} else {
  about.className = "none"; 
  aboutUsH2.className ="none";
}
if(isInViewport(faqH2)) {
  faq.className = "border"
  faqH2.className = "test-faq pink" 

  } else {
    faq.className = "none"; 
    faqH2.className ="test-faq";
  }
  if(isInViewport(serviceH1)) {
    services.className = "border"
    serviceH1.className ="pink"
  } else {
    services.className = "none";
    serviceH1.className = "none";
  }
  if(isInViewport(newH2)) {
    newsletter.className ="border"
    newH2.className = "pink"
  }else {
    newsletter.className = "none";
    newH2.className = "none"
  }
  if (isInViewport(testH2)) {
    test.className = "border"
    testH2.className = "pink"
  } else {
    test.className = "none";
    testH2.className = "none";
  }







}, false);



