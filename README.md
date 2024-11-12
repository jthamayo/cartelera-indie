# Indie Games - The Indie Game Discovery Hub

### Description

This project is an interactive platform dedicated to showcasing the creative diversity of indie video games. Designed with a focus on accessibility and engagement, the site provides a curated space where users can discover, explore, and learn about unique indie games across various genres and styles. This platform showcases the unique experiences and creative visuals that indie games contribute to the gaming world.

Users can browse a catalog of hand-picked titles, each with detailed information such as game synopsis, developer, release year, and genre. Interactive elements, including game previews and hover effects, make it easy to get a feel for each game before diving deeper. A filtering feature also allows users to search titles by developer, publisher, or genre, ensuring that they can quickly find games that align with their tastes.

The platform aims to celebrate and amplify the work of indie game creators, offering gamers a centralized hub for discovering the latest releases, as well as classic indie titles that have left a mark on the industry.

## Key Features

### Home Page

- **Recent Releases**: An ever-updating section displaying the newest additions to the catalog, helping users stay on top of the latest game launches.
- **Featured Games**: Discover themed game collections presented in a sleek Bootstrap carousel, with cards that group titles by genre or style. This setup offers users a better experience, allowing them to effortlessly explore curated selections of games in a visually engaging way.

### Game Catalog

- **Comprehensive Collection**: Dive into the full library of games available on Game Nexus. The catalog page offers a sleek, grid-based layout.
- **Gameplay Preview**, each game is showcased with an interactive hover effect that enhances the browsing experience. As you hover over any game title, you'll get a sneak peek into its gameplay through a dynamic preview, offering a glimpse of the game's mechanics, art style, and overall vibe.
- **Detailed Game Pages**: Click on any game to access an in-depth page featuring:
  - **Cover Image & Trailer**: Visuals that bring the game to life.
  - **Game Info**: Title, Developer, Publisher, Release Year and Revenue information.
  - **Genres & Tags**: Helps users find similar games based on their interests.
  - **Game Synopsis**: A brief description that captures the essence of the game.
  - **Direct Steam Access**: Each game page includes a convenient button that takes you directly to the game's Steam page.

### Filter Feature

- **Refined Search Options**: Quickly locate specific games with a robust filter feature. From any page, users can search by:
  - **Developer**: Discover all games made by a particular developer.
  - **Publisher**: Filter games based on publishing studios.
  - **Name**: Directly locate any game by its title for immediate access.

## JSON Data Structure

The application’s data is loaded from a structured JSON file, where each game’s information is contained within a list of objects under the key `"games"`.

```json
{
  "games": [
    {
      "id": null,
      "poster": "",
      "title": "",
      "developer": "",
      "publisher": "",
      "year": "",
      "length": "",
      "rating": "",
      "revenue": "",
      "aesthetic": [],
      "genre": [],
      "preview": "",
      "steam_page": "",
      "synopsis": ""
    }
  ]
}
```

## Tech Stack

- **HTML5**: Establishes the foundational structure of the website, including essential elements like the header and footer.
- **JavaScript**: Manages the website’s dynamic main content and interactive features, handling hover effects, click events, and filter functionality for an engaging user experience.
- **Bootstrap Library**: Simplifies the layout and component design, enhancing responsiveness through built-in features like cards, modals, navigation bars, and carousels.
- **CSS3**: Adds custom animations, transitions, and gradients to refine and personalize the Bootstrap design.

## Next Steps

- **Expanding the Game Catalog**: Regularly add new titles to grow the catalog, providing users with a wider variety of indie games and access to the latest releases.
- **Upgraded Carousel Design**: Enhance the carousel to display previews of adjacent cards, creating a smoother, more intuitive browsing experience.
- **User Accounts and Game Tracking**: Add a login feature that lets users create accounts, track games they’ve played, rate games, and build wish lists for titles they want to play.
- **Boosted Interactivity and Personalization**: Introduce features like tailored recommendations based on each user's favorite genres, developers, and game styles for a more personalized experience.

