const content = document.querySelector('#content');

content.addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display="none";
    }
});

content.addEventListener('mouseout',function(e){
    if (e.target.tagName === 'IMG') {
        e.target.style.display="grid";
    }
})