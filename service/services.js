


// Select all the stars
const cards = document.querySelectorAll('.card');

// Add click event listeners to each card's stars
cards.forEach((card) => {
  const stars = card.querySelectorAll('.star'); // Select stars within this card

  stars.forEach((star) => {
    star.addEventListener('click', function () {
      const rating = this.getAttribute('data-value'); // Get the rating value
      highlightStars(card, rating); // Pass the current card and rating
      alert(`You rated this ${rating} stars!`);
    });
  });

  // Function to highlight stars based on the rating
  function highlightStars(card, rating) {
    const stars = card.querySelectorAll('.star'); // Restrict to this card's stars
    stars.forEach((star) => {
      const starValue = star.getAttribute('data-value');
      if (starValue <= rating) {
        star.classList.add('selected'); // Highlight star
      } else {
        star.classList.remove('selected'); // Remove highlight
      }
    });
  }
});


setTimeout(() => {
  const message = document.getElementById("welcome-message");
  message.style.display = "block"; 

  
  setTimeout(() => {
    message.style.display = "none"; 
  }, 10000); 
}, 2000); 


