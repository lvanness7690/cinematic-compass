document.addEventListener('DOMContentLoaded', function() {
    const trendingShowsList = document.getElementById('trendingShowsList');
    loadTrendingShows();

    function loadTrendingShows() {
        const traktApiKey = 'ba2af28dcdd45736054deeb1534d3cd80792d0d2b59ce3f432899d681aac800e';

        fetch('https://api.trakt.tv/shows/trending', {
            headers: {
                'Content-Type': 'application/json',
                'trakt-api-version': '2',
                'trakt-api-key': traktApiKey
            }
        })
        .then(response => response.json())
        .then(shows => {
            shows.slice(0, 10).forEach(show => {
                fetch(`https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(show.show.title)}`)
                .then(response => response.json())
                .then(data => {
                    appendShowToList(data);
                })
                .catch(error => {
                    console.error(`Error fetching details for '${show.show.title}':`, error);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching trending shows:', error);
        });
    }

    function appendShowToList(show) {
        const listItem = document.createElement('li');
        const title = document.createElement('h2');
        title.textContent = show.title || show.name;
        listItem.appendChild(title);

        const summary = document.createElement('p');
        summary.innerHTML = show.summary || 'No summary available.';
        listItem.appendChild(summary);

        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Schedule';
        addButton.onclick = function() { addToSchedule(show); };
        listItem.appendChild(addButton);

        trendingShowsList.appendChild(listItem);
    }

    function addToSchedule(show) {
        let schedule = JSON.parse(localStorage.getItem('schedule')) || [];
        const showId = show.ids ? show.ids.trakt : show.id;

        if (!schedule.some(scheduledShow => scheduledShow.id === showId)) {
            schedule.push({ id: showId, title: show.title || show.name });
            localStorage.setItem('schedule', JSON.stringify(schedule));
            // Show added to schedule. No alert is shown.
        } else {
            // Show is already in the schedule. No alert is shown.
        }
    }
});
