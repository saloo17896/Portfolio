// Smooth scroll to section
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Typewriter animation
function typeWriter(element, text, speed = 100, callback = null) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if (callback) callback();
    }
  }
  type();
}

// Erase text animation
function eraseText(element, speed = 50, callback = null) {
  let text = element.innerHTML;
  let i = text.length;
  
  function erase() {
    if (i > 0) {
      element.innerHTML = text.substring(0, i - 1);
      i--;
      setTimeout(erase, speed);
    } else {
      if (callback) callback();
    }
  }
  erase();
}

// Simple test function
function testTypewriter() {
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    console.log('Testing typewriter...');
    typewriterElement.innerHTML = 'Test: Hello World!';
  } else {
    console.error('Typewriter element not found in test');
  }
}

// Start typewriter sequence
function startTypewriterSequence() {
  const typewriterElement = document.getElementById('typewriter');
  const typewriterLine2 = document.getElementById('typewriter-line2');
  const heroTextContent = document.querySelector('.hero-text-content');
  
  if (typewriterElement && typewriterLine2) {
    // First text: "Hi, I'm Salman Ali"
    typeWriter(typewriterElement, "Hi, I'm Salman Ali", 100, () => {
      // Wait 1 second, then show second line and type
      setTimeout(() => {
        typewriterLine2.style.opacity = '1';
        heroTextContent.classList.add('second-line-active'); // Add class to parent to hide first line cursor
        
        typeWriter(typewriterLine2, "I'm a Unity Game Developer", 100, () => {
          // Animation complete
        });
      }, 1000);
    });
  }
}

// Contact form animation (placeholder)
document.addEventListener('DOMContentLoaded', function() {
  // Start typewriter animation after a short delay
  setTimeout(startTypewriterSequence, 1000);
  
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.reset();
      form.querySelector('button').textContent = 'Message Sent!';
      setTimeout(() => {
        form.querySelector('button').textContent = 'Let\'s build something awesome together!';
      }, 2000);
    });
  }
}); 