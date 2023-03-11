

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



const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.hash.toLowerCase());
    const targetOffset = target.offsetTop;
    const windowHeight = window.innerHeight;
    const targetHeight = target.offsetHeight;
    const offset = targetOffset - (windowHeight - targetHeight + paddingTop) / 2;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  });
});