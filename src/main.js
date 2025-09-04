     function scrollProjects(direction) {
                 const container = document.getElementById('project-container');
                 const scrollAmount = 400; // lebar card
                 if (direction === 'left') {
                   container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                 } else {
                   container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                 }
               }
            