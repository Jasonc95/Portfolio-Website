
/*transition delay*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});

const hiddenSections = document.querySelectorAll('.hidden');
hiddenSections.forEach((section) => observer.observe(section));


/* anchor to center vertically*/
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  if (link.hash === '#about' || link.hash === '#projects') {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  } else {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      const targetPosition = target.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const targetHeight = target.offsetHeight;
      const offset = targetPosition - (windowHeight - targetHeight) / 2.3;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    });
  }
});


/*clock*/
function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }    
    if(h > 12){
        h = h - 12;
        session = "PM";
    } 

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    const time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("ClockDisplay").innerText = time;
    document.getElementById("ClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);    
}

showTime();