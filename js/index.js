const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//images//
let headerImage = document.getElementById('cta-img');
headerImage.setAttribute('src', siteContent['cta']['img-src']);

let midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent ['main-content']['middle-img-src']);


//nav//
let navigation = document.getElementsByTagName('a');
Array.from(navigation).forEach((item, index) =>{
  item.textContent = siteContent['nav'][`nav-item-${(index += 1)}`]
});

//logo text//
let logoText = document.querySelectorAll('.cta-text h1')[0];
logoText.textContent = siteContent['cta']['h1'];

//button//
let button = document.querySelectorAll('.cta-text button')[0];
button.textContent = siteContent['cta']['button'];

//main content//
let featureTitle = document.querySelectorAll('.main-content .top-content .text-content h4')[0];
featureTitle.textContent = siteContent['main-content']['features-h4'];

let featureParagraph = document.querySelectorAll('.main-content .top-content .text-content p')[0];
featureParagraph.textContent = siteContent['main-content']['features-content'];

let aboutTitle = document.querySelectorAll('.main-content .top-content .text-content h4')[1];
aboutTitle.textContent = siteContent['main-content']['about-h4'];

let aboutParagraph = document.querySelectorAll('.main-content .top-content .text-content p')[1];
aboutParagraph.textContent = siteContent['main-content']['about-content'];

let serviceTitle = document.querySelectorAll('.main-content .bottom-content .text-content h4')[0];
serviceTitle.textContent = siteContent['main-content']['services-h4'];

let serviceParagraph = document.querySelectorAll('.main-content .bottom-content .text-content p')[0];
serviceParagraph.textContent = siteContent['main-content']['services-content'];

let productTitle = document.querySelectorAll('.main-content .bottom-content .text-content h4')[1];
productTitle.textContent = siteContent['main-content']['product-h4'];

let productParagraph = document.querySelectorAll('.main-content .bottom-content .text-content p')[1];
productParagraph.textContent = siteContent['main-content']['product-content'];

let visionTitle = document.querySelectorAll('.main-content .bottom-content .text-content h4')[2];
visionTitle.textContent = siteContent['main-content']['vision-h4'];

let visionParagraph = document.querySelectorAll('.main-content .bottom-content .text-content p')[2];
visionParagraph.textContent = siteContent['main-content']['vision-content'];


//contact//
let contactTitle = document.querySelectorAll('.contact h4')[0];
contactTitle.textContent = siteContent['contact']['contact-h4'];

let address = document.querySelectorAll('.contact p')[0];
address.textContent = siteContent['contact']['address'];

let phone = document.querySelectorAll('.contact p')[1];
phone.textContent = siteContent['contact']['phone'];

let email = document.querySelectorAll('.contact p')[2];
email.textContent = siteContent['contact']['email'];


//footer//
let footerTitle = document.querySelectorAll('footer p')[0];
footerTitle.textContent = siteContent['footer']['copyright'];


//change navigation to green//
let greenNav = document.querySelectorAll('a');
greenNav.forEach((item =>{
  item.style.color = "green";
}));

//create elements on nav//

//item 1//
let newNav1 = document.createElement('a');
newNav1.textContent = 'Home';

let newItem1 = document.querySelector('nav');
newItem1.prepend(newNav1);

//item2//

let newNav2 = document.createElement('a');
newNav2.textContent = 'Testimonials';

let newItem2 = document.querySelector('nav');
newItem2.appendChild(newNav2);