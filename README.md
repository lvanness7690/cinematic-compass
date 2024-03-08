# Cinematic Compass
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Description](#description)
* [Screenshot](#screenshot)
* [Installation](#installation)
* [Technologies Used](#technologies-used)
* [Live Application](#live-application)
* [Usage](#usage)
* [Features](#features)
* [Credits](#credits)
* [Third Party Add Ons](#third-party-add-ons)
* [License](#license)

## Description

Cinematic Compass is an engaging and user-friendly platform that caters to TV show enthusiasts, offering a streamlined way to discover and organize their favorite shows. Upon visiting the site, users are greeted with a clean, intuitive search interface where they can easily search for any TV show of their interest. For those looking for new content, a dedicated button provides access to a curated list of trending TV shows, keeping users updated with the latest and popular series. Once a search is conducted or the trending list is accessed, users are presented with a comprehensive results page that not only lists the show names but also provides succinct summaries for each. This thoughtful design allows users to make informed choices about what to watch next. The site's standout feature is its personalized scheduling functionality – users can effortlessly add shows to their unique schedule with a simple button click. The schedule page takes user convenience a step further by not only listing the chosen shows but also indicating where each show can be watched, thereby providing a complete viewing plan. Cinematic Compass thus stands out as a holistic solution for TV show discovery and organization, tailored to the preferences of each user.

## Screenshot 

![Cinematic Compass Demo](/assets/cinematic-compass-demo.gif)

## Installation

To install Event Connect, follow these steps:

1. Clone the GitHub repository to your local machine:
2. Navigate to the project directory:
3. Install dependencies using npm: npm install
4. Set up your MySQL database using the schema provided in the `db/schema.sql` file.
5. Optionally, populate your database with initial data using the `db/seeds.sql` file.
6. Create a `.env` file in the root directory and fill in your MySQL credentials, following the example provided in the `.env.EXAMPLE` file.
7. Run the application: npm start
8. Access the application through your web browser at `http://localhost:3000`.
9. You may need to register an account or log in to access certain features, depending on the functionality implemented in the application.
10. Enjoy using Event Connect to explore upcoming events, connect with other users, and share experiences!

## Technologies Used

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) HTML5
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) CSS3
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) JavaScript
- ![Bulma](https://img.shields.io/badge/Bulma-00D1B2?style=for-the-badge&logo=bulma&logoColor=white) Bulma
- ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google-fonts&logoColor=white) Google Fonts
- ![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=font-awesome&logoColor=white) Font Awesome

## Live Application

[Cinematic Compass Website](https://lvanness7690.github.io/work-day-cinematic-compass/)

## Usage

To search for a show click on the text field and type your query then click on the search button. Alternatively you can click on the trending shows list to view a list of popular shows. Once you are on the results page you will see a button to add to your schedule. To view your schedule scroll to the bottom and click the View Schedule button. To remove a show from your schedule click on the remove button. To go home at any time click on the go home button.

## Features

- **User Authentication**: Secure user authentication system implemented using express-session and cookies.
- **Search Functionality**: Intuitive search interface allowing users to easily search for TV shows based on their interests.
- **Trending Shows**: Access to a curated list of trending TV shows, keeping users updated with popular series.
- **Comprehensive Results Page**: Provides detailed information and succinct summaries for each search result.
- **Personalized Scheduling**: Allows users to add shows to their unique schedule with a simple button click.
- **View Schedule**: Conveniently view scheduled shows and where each show can be watched.
- **Responsive Design**: UI designed to be responsive, ensuring compatibility across various devices.

## Credits

- lvanness7690: [GitHub Profile](https://github.com/lvanness7690)
- lg-2121: [GitHub Profile](https://github.com/lg-2121)
- biancamistretta: [GitHub Profile](https://github.com/biancamistretta)

## Third Party Add Ons

- Trakt API: [API Documentation](https://trakt.docs.apiary.io/#)
- TVMaze API: [API Documentation](https://static.tvmaze.com/apidoc/)
- Bulma CSS Framework: [Bulma](https://bulma.io)

## License

Please refer to the license in the repo
