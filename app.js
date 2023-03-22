const content = document.querySelector('#content');

// content.addEventListener('mouseover', function(e) {
//     if (e.target.tagName === 'IMG') {
//         e.target.style.display="none";
//     }
// });

// content.addEventListener('mouseout',function(e){
//     if (e.target.tagName === 'IMG') {
//         e.target.style.display="grid";
//     }
// })

const images = document.querySelectorAll('#content img');
const mainWrap = document.querySelector('#main');
console.log(mainWrap); //test main wrap 


images.forEach(function(img) {
    img.addEventListener('mouseover', function() {
      if (img.classList.contains('one')) {
        content.style.opacity=0.2;
        mainWrap.classList.add("backgroundOne");

      } else if (img.classList.contains('two')) {
        content.style.opacity=0.2;
        mainWrap.classList.add("backgroundTwo");
      } else if (img.classList.contains('three')) {
        content.style.opacity=0.2;
        mainWrap.classList.add("backgroundThree");;
      } else if (img.classList.contains('four')) {
        content.style.opacity=0.2;
        mainWrap.classList.add("backgroundFour");
      } else if (img.classList.contains('five')) {
        content.style.opacity=0.2;
        mainWrap.classList.add("backgroundFive");
      }
    });

    img.addEventListener('mouseout', function() {
        if (img.classList.contains('one')) {
          content.style.opacity=1;
          mainWrap.classList.remove("backgroundOne");
  
        } else if (img.classList.contains('two')) {
          content.style.opacity=1;
          mainWrap.classList.remove("backgroundTwo");
        } else if (img.classList.contains('three')) {
          content.style.opacity=1;
          mainWrap.classList.remove("backgroundThree");;
        } else if (img.classList.contains('four')) {
          content.style.opacity=1;
          mainWrap.classList.remove("backgroundFour");
        } else if (img.classList.contains('five')) {
          content.style.opacity=1;
          mainWrap.classList.remove("backgroundFive");
        }
      });
  });