let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a')


window.onscroll=()=>{
 let header=document.querySelector(".header");
 header.classList.toggle('sticky',window.scrollY > 100);
  sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');

    if(top >= offset && top <offset +height){
navLinks.forEach(links =>{ 
    links.classList.remove("active");
    document.querySelector('header nav a[href*='+ id +']').classList.add('active');

});
    }    
  })
};

//for section projects
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');

          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to the clicked button
          button.classList.add('active');

          // Show or hide items based on filter
          portfolioItems.forEach(item => {
              if (filter === 'all' || item.classList.contains(filter)) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
});


//contact
document.addEventListener('DOMContentLoaded', function() {
  emailjs.init('YOUR_USER_ID'); // Replace 'YOUR_USER_ID' with your actual user ID from EmailJS

  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const status = document.getElementById('status');

      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
          .then(function() {
              status.innerHTML = "Message sent successfully!";
              status.style.color = "#00ffcc";
              document.getElementById('contact-form').reset();
          }, function(error) {
              status.innerHTML = "Failed to send message. Please try again later.";
              status.style.color = "red";
          });
  });
});