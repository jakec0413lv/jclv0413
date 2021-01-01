/*Written by jakec0413lv

Fading Gallery -- Gallery space for HTML page utiizing javascript to fade in/fade out an array of pictures
*/

let displaySpace = document.getElementById('display-space');
let gallery = document.getElementById('gallery');

//Links to pictures
let pictureGallery = ["https://images.immediate.co.uk/production/volatile/sites/30/2020/08/hub-image-coffee-e732616.jpg?quality=90&resize=504,458",
"https://i.guim.co.uk/img/media/3eb709d3ba0e7b1e121ac0efd934c9128eeec873/0_0_4631_2778/master/4631.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ac5ad1bcf791576f845e60bc3fdd58a",
"https://www.southsoundtalk.com/wp-content/uploads/2019/11/Coffee-ander-Latte-e1573143205948.jpg"];

//Initial Conditions
let i = 0;
displaySpace.src = pictureGallery[i];

let opac = 1;

let id = setInterval(opacityLower, 50); //Fade out timer, change number to dictate speed of fade
let id2;

function opacityLower(){
    opac = opac - .01;
    gallery.style.opacity = opac;
    if(opac < 0){
        clearInterval(id);
        i++;
        if(i === pictureGallery.length){ //Loop condition
            i = 0;
        }
        displaySpace.src = pictureGallery[i];
        id2 = setInterval(opacityRaise, 50);//Fade in timer, change number for speed
        setTimeout(opacityRaise, 300); //Small delay for aesthetics
        return;
    }
}


function opacityRaise() {
    opac = opac + .01;
    gallery.style.opacity = opac;
    if(opac > 1){
        clearInterval(id2);
        id = setInterval(opacityLower, 50);
        return;
    }
}


