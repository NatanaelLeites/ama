document.addEventListener('DOMContentLoaded', function() {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const intervalTime = 5000;
    let currentActive = img1;
  
    function swapImages() {
      currentActive.classList.remove('active');
      currentActive = (currentActive === img1) ? img2 : img1;
      currentActive.classList.add('active');
    }
  
    setInterval(swapImages, intervalTime);
  });