# GitHub User List

## Demo

View the live demo: [GitHub User List Demo](https://danyloshyshkovskyi.github.io/swivl-test/user-list)

## Task Description: GitHub Users Search Tool

This project is a GitHub users search tool implemented using React and Typescript. It allows users to search for GitHub usernames, view a filtered list of users with pagination (infinite scroll), and click to view detailed information about each user.

### Features:

- **Search Input:** Main page with an input field to enter a GitHub username.
- **Filtered User List:** Display of users matching the search query.
- **Pagination:** Infinite scroll for loading more users.
- **User Details Page:** Clicking on a user opens a page with:
  - Avatar image
  - Name
  - Followers
  - Following
  - Company
  - Email
  - Blog

### API Documentation:

- REST API: [GitHub REST API](https://docs.github.com/en/rest)
- GraphQL API: [GitHub GraphQL API](https://api.github.com/graphql)

## Working with API, Handling Errors, Project Architecture

### Project Structure:

- **Components:** React components organized for modularity and reusability.
- **State Management:** Utilizes React Query for efficient data fetching and caching.
- **UI Libraries:** Uses Tailwind CSS for styling and shadcn UI for components like avatars.

### Handling Errors:

- Error handling implemented for API calls and user interactions.
- Display appropriate messages or notifications for errors.

## Installation and Setup

Before running the project, ensure you have copied `env.example` to `.env`.

### Installation Steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd swivl-test`
3. Install dependencies: `npm install`

### Available Scripts:

- **Development:** `npm run dev`
  Starts the development server using Vite.

- **Build:** `npm run build`
  Builds the project for production.

- **Preview:** `npm run preview`
  Previews the production build locally.

## Dependencies

### Major Dependencies:

- `react-query`: Data fetching and caching library for React.
- `axios`: HTTP client for making API requests.
- `tailwindcss`: Utility-first CSS framework for styling.

### Development Dependencies:

- `eslint` and plugins: JavaScript and TypeScript linting.
- `prettier`: Code formatter.
- `vite`: Next generation front-end tooling.

---

Feel free to customize this `README.md` to include additional sections or details specific to your project. Happy coding!
