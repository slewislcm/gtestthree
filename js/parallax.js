
/* shadow overlay on front page */




//console.log(overlay);
//console.log(articleshort);
//console.log(clickableArea);

function applyOverlay () {

  // var overlay = document.getElementsByClassName('cover1');
	// console.log('Show overlay on class');
	// overlay.className = 'overlay';
	
  var overlayid = document.getElementById('overlay');
	console.log('Show overlay on id');
	overlayid.className = 'overlay';
}

var clickableArea = document.getElementById('thumbnails');
clickableArea.addEventListener("click", applyOverlay, true);

//clickableArea.addEventListener('click',applyOverlay);


// clickableArea.addEventListener("click", function(){
//     overlay.innerHTML = "Hello World";
// });

// Function to change the content of t2
function modifyText() {
  var t2 = document.getElementById("t2");


    t2.firstChild.nodeValue = "three";
  
}

// add event listener to table
var el = document.getElementById("outside");
el.addEventListener("mouseover", modifyText, false);

/*
function modifyText() {
  var t2 = document.getElementById("t2");


    t2.firstChild.nodeValue = "three";
  
}

// add event listener to table
var el = document.getElementById("outside");
el.addEventListener("mouseover", modifyText, false);
*/

// Function to change the content of t2 - amended by me
/*
function modifyText() {
  var t2 = document.getElementById("t2");

  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
*/


//4.0 gallery start

// function myFunction() {
//     document.getElementById('overlay').className = "showit";
// } ();





// (function () {

//     //get hotml element with #id of overlay
//     var overlay = document.getElementById('overlay');
//     var image = document.getElementsByTagName('li');
   
   
//     image.addEventListener('click', function() {

//             overlay.className="showit";
//             console.log();

//     })

// var listContainer=$('.col-main')
// var productWrapper='.product-wrapper';

// listContainer.on( {
//     mouseenter: function() {
//         $( this ).addClass( "js-hover" );
//         console.log( "hoooover" );
//     },
//     mouseleave: function() {
//         $( this ).removeClass( "js-hover" );
//    }
// }, productWrapper );

//     var listid = 0;

//     //when you click on the overlay div again the class of fade out is inputted
//     overlay.addEventListener('click', function (showimage) {

//         //if(largeImage) overlay.removeChild(largeImage);

//         // var pText = this.children[1].innerHTML;
//         // alert("You clicked on " + pText);

//         overlay.className='fadeout';

//         // var pText = this.children[1].innerHTML;
//         // alert("You clicked on " + pText);
//         var parentstuff = listid.parentNode.getElementsByTagName("img");
//         console.log("parentstuff " + parentstuff);




//     })

// // load the imagesArray data from the external JSON data file provided in the ./data/images.json file.
//     function requestListener() {
//         console.log(this.responseText);
//         if (!this.responseText) return console.warn("warning");
//         let data = JSON.parse(this.responseText);
//         console.log(data);

//         populateGallery(data.images);
//     }

//     let request = new XMLHttpRequest();
//     request.addEventListener("load", requestListener);
//     request.open("GET", "data/images.json");
//     request.send();

// // find the galleryList <ul> element
//     var galleryList = document.getElementById('thumbnails');

// //var hrimage = document.getElementsByTagName('image');
// //console.log(hrimage);

//     function populateGallery(imagesArray) {
//         imagesArray.forEach(function (item, index, array) {

//             var listItem = document.createElement("li");
//             listItem.setAttribute('data-srchighres', item.image);
//             var img = document.createElement("img");
//             img.src = item.thumb;

//             var p = document.createElement("p");
//             var t = document.createTextNode(item.name);
//             p.appendChild(t);
//             // or populate <p> with: p.innerHTML = 'test';

//             listItem.appendChild(img);
//             listItem.appendChild(p);

//             galleryList.appendChild(listItem);

//             // add click handler
//             //when you click on the list item class of fade in is added
//             listItem.addEventListener('click', function (event) {

//                 var imageSrc = event.currentTarget.getAttribute('data-srchighres');
//                 //var img = document.createElement("img");
//                 largeImage.src = imageSrc;




//                 overlay.className = 'fadein';

//             })


//         });
//     }


// })();

// /* 
// //tutor's code

// var populateGallery = function( imagesArray ) {

//     // find the galleryList <ul> element
//     var galleryList = document.getElementById('thumbnails');

//     imagesArray.forEach(function(item){

//         var listItem = document.createElement("li");
//         var img = document.createElement("img");
//         img.src = item.thumb;

//         var p = document.createElement("p");
//         var t = document.createTextNode(item.name);
//         p.appendChild(t);
//         // or populate <p> with: p.innerHTML = 'test';

//         listItem.appendChild(img);
//         listItem.appendChild(p);

//         galleryList.appendChild(listItem);

//         // add click handler
//         listItem.addEventListener('click', function( event ){

//             var pText = this.children[1].innerHTML;
//             alert("You clicked on " + pText);

//         })
//     });

// }

// // load the imagesArray data from the external JSON data file provided in the ./data/images.json file.
// $.ajax({
//     url: './data/images.json'
// })
// .done(function(data) {
//     console.log(data);
//     populateGallery(data.images);
// })
// .fail(function() {
//     alert("Ajax failed to fetch data")
// });*/


// //4.1 overlay 
// // find the galleryList <ul> element
// var galleryList = document.getElementById('thumbnails');
// var overlay = document.getElementById('overlay');

// var showImage = function() {
// 	console.log('Show overlay');
// 	var pText = this.children[1].innerHTML;
// 	overlay.className = 'fadein';
// }

// var showGallery = function() {
// 	console.log('Hide overlay');
// 	overlay.className = 'fadeout';
// }

// var populateGallery = function( imagesArray ) {

//     // find the galleryList <ul> element
//     var galleryList = document.getElementById('thumbnails');

//     imagesArray.forEach(function(item){

//         var listItem = document.createElement("li");
//         var img = document.createElement("img");
//         img.src = item.thumb;

//         var p = document.createElement("p");
//         var t = document.createTextNode(item.name);
//         p.appendChild(t);
//         // or populate <p> with: p.innerHTML = 'test';

//         listItem.appendChild(img);
//         listItem.appendChild(p);

//         galleryList.appendChild(listItem);

//         // add click handler
//         listItem.addEventListener('click', showImage)
//     });

// }

// // load the imagesArray data from the external JSON data file provided in the ./data/images.json file.
// $.ajax({
//     url: './data/images.json'
// })
// .done(function(data) {
//     console.log(data);
//     populateGallery(data.images);
// })
// .fail(function() {
//     alert("Ajax failed to fetch data")
// });

// overlay.addEventListener('click', showGallery);