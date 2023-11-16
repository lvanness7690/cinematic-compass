document.addEventListener('DOMContentLoaded', function() {
    const searchResultsList = document.getElementById('searchResultsList');
    const queryParams = new URLSearchParams(window.location.search);
    const searchQuery = queryParams.get('query');

    if (searchQuery) {
        searchShows(searchQuery);
    }

    function searchShows(query) {
        fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(shows => {
            if (shows.length === 0) {
                searchResultsList.innerHTML = '<li>No search results found.</li>';
                return;
            }
            searchResultsList.innerHTML = ''; // Clear any previous results
            shows.forEach(item => {
                appendShowToList(item.show);
            });
        })
        .catch(error => {
            console.error('Error fetching search results:', error);
        });
    }
    function appendShowToList(show) {
        const listItem = document.createElement('li');
        listItem.classList.add('box'); // Bulma class for a box container
    
        const title = document.createElement('h2');
        title.textContent = show.name;
        title.classList.add('title'); // Bulma class for titles
        listItem.appendChild(title);
    
        const summary = document.createElement('p');
        summary.innerHTML = show.summary || 'No summary available.';
        summary.classList.add('content'); // Bulma class for content text
        listItem.appendChild(summary);
    
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Schedule';
        addButton.classList.add('button', 'is-primary'); // Bulma classes for buttons, 'is-primary' for primary color
        addButton.onclick = function() { addToSchedule(show); };
        listItem.appendChild(addButton);
    
        searchResultsList.appendChild(listItem);
    }

    function addToSchedule(show) {
        let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
        if (!schedule.some(scheduledShow => scheduledShow.id === show.id)) {
            schedule.push({ id: show.id, title: show.name });
            localStorage.setItem('schedule', JSON.stringify(schedule));
            // The show has been added to the schedule; no alert or notification is shown.
        }
        // If the show is already in the schedule, no alert or notification is shown.
    }
});
