  function fetchShows() {
    fetch('https://lvanness7690.github.io/cinematic-compass/api/shows')
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of shows
        data.forEach(show => {
          addToScheduleFromOtherPage(show.name);
        });
      })
      .catch(error => {
        console.error('Error fetching shows:', error);
      });
  }

  // Call fetchShows when the page loads
  window.onload = function () {
    fetchShows();
  };

