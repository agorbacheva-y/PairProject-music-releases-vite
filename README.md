<h1 align="center">
  <a href="">
    <img src="/src/assets/music-releases.svg" alt="Project Banner Image">
  </a>
</h1>

# Music Releases

Pair Project: Ayumi Gorbacheva-Yamamoto and Olcay Tapan

The assignment was to create a music release web application that displays information about albums, singles, and popular playlists using data from an API.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

To approach the problem, we initially planned the application's structure and user interface. We used React for the frontend and made API requests to fetch music data. We created components for Album as parent component of AlbumCover, AlbumName, ArtistName, Header, Overlay child components and passed data as props.

### View it live

https://music-releases-vite.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
