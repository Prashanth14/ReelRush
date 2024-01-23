
# Project Name: ReelRush

## Overview
This GitHub repository contains the source code for a ReelRush web application built using React. The application replicates some of the core features of the Netflix platform, including user authentication, browsing movies, playing trailers, and implementing a custom search functionality using the OpenAI GPT API. Below, you'll find a breakdown of the key components and features of this application, as well as some valuable learnings and takeaways from the development process.

## Key Components and Features

### 1. Create React App
- The project was initiated using Create React App as the base.

### 2. Configured TailwindCSS
- TailwindCSS was integrated to streamline the styling of the entire application.

### 3. Header
- A responsive header component was created for navigation.

### 4. Routing of App
- React Router was utilized to enable navigation between different pages within the app.

### 5. Login Form
- Implemented a user login form for authentication.

### 6. Sign Up Form
- Developed a user registration form for new users.

### 7. Form Validation
- Added form validation to ensure data integrity during user registration and login.

### 8. useRef Hook
- Utilized the useRef hook to manage form input elements efficiently.

### 9. Firebase Setup
- Integrated Firebase for user authentication and database management.

### 10. Deploying to Production
- The app was deployed to a production environment for public access.

### 11. Redux Store with userSlice
- Created a Redux store and implemented the userSlice for user state management.

### 12. Sign Out
- Implemented functionality to allow users to sign out of their accounts.

### 13. Update Profile
- Users can update their profile information, including display name and profile picture.

### 14. BugFix: Sign up user displayName and profile picture update
- Addressed a bug related to user profile information not updating correctly.

### 15. BugFix: Redirect Unauthorized Users
- Implemented a feature to redirect unauthorized users to the login page and vice-versa.

### 16. Unsubscribe onAuthStateChanged Callback
- Ensured efficient handling of Firebase authentication callbacks.

### 17. Constants File
- Added constants file with hardcoded values for easy configuration.

### 18. Register TMDB API & Get Access Token
- Registered and obtained an API key for TMDB (The Movie Database) integration.

### 19. Get Data from TMDB
- Fetched data from the TMDB API, including now playing movies list.

### 20. Custom Hook for Now Playing Movies
- Created a custom hook to fetch now playing movies data efficiently.

### 21. Create movieSlice
- Implemented Redux slice for managing movie-related state.

### 22. Update Store with Movies Data
- Populated the Redux store with movie data from TMDB.

### 23. Planning for Main Container & Secondary Container
- Organized the project structure for the main content and secondary components.

### 24. Fetch Data for Trailer Video
- Retrieved trailer video data from TMDB.

### 25. Update Store with Trailer Video Data
- Stored trailer video data in the Redux store.

### 26. Embedded YouTube Video
- Embedded trailer videos and configured autoplay and mute functionality.

### 27. Tailwind Classes
- Utilized Tailwind CSS classes to enhance the visual appeal of the main container.

### 28. Build Secondary Component
- Developed secondary components to enhance the user interface.

### 29. Build Movie List
- Created movie lists for displaying recommended movies.

### 30. Build Movie Card
- Designed movie cards for individual movie items.

### 31. TMDB Image CDN URL
- Utilized TMDB's image CDN URL for movie posters.

### 32. Made the Browse Page Amazing
- Enhanced the browse page using Tailwind CSS to provide an immersive experience.

### 33. usePopularMovies Custom Hook
- Implemented a custom hook to fetch popular movies efficiently.

### 34. GPT Search Page
- Integrated a GPT-powered search page for enhanced search capabilities.

### 35. GPT Search Bar
- Created a dynamic search bar powered by GPT for movie suggestions.

### 36. (BONUS) Multi-language Feature
- Added a multi-language feature to the app for broader user accessibility.

## Project Setup

### Before You Begin
- Make sure to create an `.env` file and include your TMDB API key and OpenAI API key for proper functionality.

## Learnings and Takeaways
- Building this ReelRush project involved a wide range of skills and technologies, including React, Redux, Firebase, Tailwind CSS, and API integrations.
- Form validation and user authentication are crucial for a seamless user experience.
- Managing state with Redux simplifies data handling and sharing across components.
- Effective API integration and data retrieval are essential for displaying dynamic content.
- Tailwind CSS offers a quick and efficient way to style a web application.
- Incorporating third-party APIs can enhance the app's functionality.
- Creating custom hooks can improve code reusability and maintainability.
- Optimizing the user interface with responsive design is vital for a great user experience.
- Utilizing the power of machine learning APIs, such as GPT, can add unique features to your application.

This project serves as a valuable learning experience in modern web development, and it can be used as a reference for building similar applications. Feel free to explore the code and contribute to its improvement. Enjoy building your own Netflix-inspired web application!