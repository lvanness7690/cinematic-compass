document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        // Redirect to the search results page with the query parameter
        window.location.href = `results.html?query=${encodeURIComponent(query)}`;
    }
});

document.getElementById('loadTrending').addEventListener('click', function() {
    window.location.href = 'trending-shows.html'; // Navigate directly to the search results page to load trending shows
});

document.getElementById('viewSchedule').addEventListener('click', function() {
    window.location.href = 'schedule index.html'; // Navigate to the schedule page
});
