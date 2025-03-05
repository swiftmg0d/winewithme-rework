# Wine With Me - Your Guide to Local Wineries


## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Key Features](#key-features)

## Description

"Wine With Me" is a web application designed for wine enthusiasts and tourists who wish to explore various wineries across the country. The app provides detailed information and locations for numerous wineries, allowing users to discover and experience different types of wine. Users can search for wineries by name, rating, or city, view them on an interactive map, access contact information, operating hours, and offerings. Additionally, the platform enables users to share their experiences through comments and ratings, fostering a community of wine enthusiasts.

## Tech Stack

- **Frontend**: React, Material-UI, i18next for internationalization
- **Backend**: Spring Boot

## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/swiftmg0d/winewithme-rework.git
```

### 2. Navigate to the project directory

Change into the project directory:

```bash
cd wine-with-me
git checkout dev # The app is still in development ( not finished )
```

### 3. Set up the Backend

Ensure that you have Java 21 and Maven 3.6.3 or higher installed on your machine. If not, you can follow the [Java installation guide](https://www.oracle.com/java/technologies/javase-jdk21-downloads.html) and [Maven installation guide](https://maven.apache.org/install.html).

Once Java and Maven are installed, navigate to the backend directory and run the following commands:

```bash
cd backend
mvn clean install      # Install dependencies and build the backend
mvn spring-boot:run    # Run the backend server
```


The backend server should now be running on `http://localhost:8080`.

### 4. Set up the Frontend

Ensure that you have Node.js and npm installed on your machine. If not, you can follow the [Node.js installation guide](https://nodejs.org/en/download/).

Navigate to the frontend directory and run the following commands:

```bash
cd ../frontend
npm install            # Install dependencies
npm start              # Run the frontend development server
```


The frontend application should now be running on `http://localhost:3000`.

### 5. Access the Application

Open your web browser and navigate to `http://localhost:3000` to access the "Wine With Me" application.

## Key Features

- **Search Wineries**: Users can search for wineries by name, rating, or city, facilitating quick and easy discovery of desired wineries.

- **Interactive Map**: The application displays winery locations on an interactive map, allowing users to locate and visit them.

- **Detailed Information**: Each winery has a profile with contact information, operating hours, and offerings, helping users make informed decisions.

- **Ratings and Comments**: Users can share their experiences by leaving comments and ratings for the wineries they have visited, creating a community of wine enthusiasts.

- **Multilingual Support**: Using i18next, the application is available in multiple languages, making it suitable for tourists from different countries.

"Wine With Me" is your guide in the world of wine, uniting personal winery stories and turning them into unforgettable moments. With just a tap on the screen, you can embark on a journey into the world of winemaking, share experiences, explore new aromas, and create delightful memories. 
