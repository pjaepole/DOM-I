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


// change a tag in .container textcontent
const aTag= document.querySelectorAll('nav a');
aTag[0].textContent =siteContent['nav']['nav-item-1'];
console.log(aTag[0].textContent);
aTag[1].textContent =siteContent['nav']['nav-item-2'];
aTag[2].textContent =siteContent['nav']['nav-item-3'];
aTag[3].textContent =siteContent['nav']['nav-item-4'];
aTag[4].textContent =siteContent['nav']['nav-item-5'];
aTag[5].textContent =siteContent['nav']['nav-item-6'];
// ask instructor about forEach method for this
console.log(Object.values(siteContent['nav']));
const aValues= Object.values(siteContent['nav']);
aTag.forEach(function(aTagCB,idx){
  aTagCB.textContent=aValues[idx];
})
// forloop
for(let i=0; i<aTag.length; i++){
  aTag[i].textContent= aValues[i]
}
// add src to log-img id or class logo
const logoImg =document.querySelector('#logo-img');
logoImg.setAttribute('src', siteContent['nav']['img-src']);
console.log(logoImg);

// textcontent h1tag and button

const ctaTxtSelector =document.querySelector('.cta-text')
const hOneText =document.querySelector(".cta-text h1")
hOneText.innerHTML='DOM<br>Is<br>Awesome';
// hOneText.textContent=siteContent['cta']['h1'];
// how to add break tag inside example <h1>DOM<br> Is<br> Awesome</h1>



const ctaTextButton= document.querySelector(".cta-text button")
ctaTextButton.textContent=siteContent['cta']['button'];

const ctaImgSelector=document.querySelector('#cta-img');
ctaImgSelector.setAttribute('src', siteContent['cta']['img-src']);

// maincontent
// all h4 selector from main content
const hFourSelector=document.querySelectorAll('.main-content h4');
const pSelector=document.querySelectorAll('.main-content p');
console.log(hFourSelector);

hFourSelector[0].textContent= siteContent['main-content']['features-h4'];
pSelector[0].textContent= siteContent['main-content']['features-content'];



hFourSelector[1].textContent= siteContent['main-content']['about-h4'];
pSelector[1].textContent= siteContent['main-content']['about-content'];


hFourSelector[2].textContent= siteContent['main-content']['services-h4'];
pSelector[2].textContent= siteContent['main-content']['services-content'];

hFourSelector[3].textContent= siteContent['main-content']['product-h4'];
pSelector[3].textContent= siteContent['main-content']['product-content'];


hFourSelector[4].textContent= siteContent['main-content']['vision-h4'];
pSelector[4].textContent= siteContent['main-content']['vision-content'];