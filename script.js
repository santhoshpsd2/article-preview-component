const sharebutton = document.querySelector('.share');
const sharelink = document.querySelector('.links');

sharebutton.addEventListener('click',()=>{
    sharelink.classList.toggle('active')
})