document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  const text = "Hello!\nI'm Suraj Kumar";
  const typingText = document.getElementById("typing-text");

  let i = 0;
  let isDeleting = false;

  function type() {
      if (!isDeleting) {
          typingText.textContent = text.substring(0, i + 1);
          i++;

          if (i === text.length) {
              setTimeout(() => {
                  isDeleting = true;
                  type();
              }, 2000); // wait before deleting
              return;
          }
      } else {
          typingText.textContent = text.substring(0, i - 1);
          i--;

          if (i === 0) {
              isDeleting = false;
          }
      }

      const speed = isDeleting ? 50 : 100; // faster delete, slower type
      setTimeout(type, speed);
  }

  type();

  // Scroll animation for sections
  const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
      });
  }, appearOptions);

  faders.forEach(fader => {
      appearOnScroll.observe(fader);
  });

  // Skill radar chart - Only initialize if element exists
  const radarCtx = document.getElementById('skillRadar');
  if (radarCtx) {
      const skillRadar = new Chart(radarCtx.getContext('2d'), {
          type: 'radar',
          data: {
              labels: ['Frontend', 'Backend', 'Database', 'DevOps', 'Problem Solving', 'Architecture'],
              datasets: [{
                  label: 'Skill Level',
                  data: [90, 85, 80, 75, 95, 85],
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderColor: 'rgba(0, 0, 0, 1)',
                  borderWidth: 2,
                  pointBackgroundColor: '#000',
                  pointBorderColor: '#fff',
                  pointHoverRadius: 6
              }]
          },
          options: {
              scales: {
                  r: {
                      angleLines: {
                          color: '#999'
                      },
                      grid: {
                          color: '#ddd'
                      },
                      pointLabels: {
                          font: {
                              size: 14
                          }
                      },
                      suggestedMin: 0,
                      suggestedMax: 100,
                      ticks: {
                          backdropColor: 'transparent',
                          color: '#000',
                          font: {
                              size: 12
                          }
                      }
                  }
              },
              plugins: {
                  legend: {
                      labels: {
                          font: {
                              size: 14
                          },
                          color: '#000'
                      }
                  }
              },
              elements: {
                  line: {
                      tension: 0.1
                  }
              }
          }
      });
  }

  // Skill category hover effect
  const skillCategories = document.querySelectorAll('.skill-category');
  
  skillCategories.forEach(category => {
      category.addEventListener('mouseenter', () => {
          const categoryType = category.dataset.category;
          skillCategories.forEach(cat => {
              if (cat !== category) {
                  cat.style.opacity = '0.7';
                  cat.style.transform = 'scale(0.95)';
              }
          });
      });
      
      category.addEventListener('mouseleave', () => {
          skillCategories.forEach(cat => {
              cat.style.opacity = '1';
              cat.style.transform = 'scale(1)';
          });
      });
  });

  // Skill item animation
  const skillItems = document.querySelectorAll('.skills-list li');
  
  skillItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
          const skill = item.dataset.skill;
          const originalText = item.textContent;
          item.innerHTML = `<i class="fab fa-${skill}"></i> ${originalText}`;
      });
      
      item.addEventListener('mouseleave', () => {
          item.textContent = item.textContent; // Reset to original text
      });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Initialize animation for timeline items
  animateTimelineItems();
  
  // Add hover effect to timeline content
  setupHoverEffects();
});

function animateTimelineItems() {
  const timelineContainers = document.querySelectorAll('.timeline-container');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
  });

  timelineContainers.forEach(container => {
      observer.observe(container);
  });
}

function setupHoverEffects() {
  const timelineContents = document.querySelectorAll('.timeline-content');
  
  timelineContents.forEach(content => {
      content.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-5px)';
          this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
      });
      
      content.addEventListener('mouseleave', function() {
          this.style.transform = '';
          this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';
      });
  });
}
document.addEventListener('DOMContentLoaded', function() {
  // Animation for project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  // Intersection Observer for scroll animation
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
              }, index * 150);
          }
      });
  }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
  });

  // Set initial state and observe
  projectCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      observer.observe(card);
  });

  // Button hover effects
  const projectBtns = document.querySelectorAll('.project-btn');
  projectBtns.forEach(btn => {
      btn.addEventListener('mouseenter', function() {
          this.style.backgroundColor = 'var(--black)';
          this.style.color = 'var(--white)';
      });
      
      btn.addEventListener('mouseleave', function() {
          this.style.backgroundColor = 'transparent';
          this.style.color = 'var(--black)';
      });
  });
});