[![Netlify Status][netlify-shield]][netlify-demo-url]

<br />
<p align="center">
  <a href="https://github.com/SkelleyBelly/optimistic-updates-demo">
    <img src="public/android-chrome-192x192.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Optimistic Updates Demo</h3>

  <p align="center">
    Example using Lerna to manage a monorepo that contains a database, component library, client and api service
    <br />
    <a href="https://optimistic-update.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/SkelleyBelly/optimistic-updates-demo/issues">Report Bug</a>
    ·
    <a href="https://github.com/SkelleyBelly/optimistic-updates-demo/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Optimistic Updates Demo Screenshot][product-screenshot]][netlify-demo-url]

An example repo created to demonstrate optimistic updates in Apollo Client and SWR. It includes:

- A simple component library created with Material UI, with a custom theme
- A local Apollo Client resolver set that simulates server responses
- A local SWR resolver set that simulates server responses **(in progress)**


### Built With

* [Material UI](https://material-ui.com/)
* [Apollo](https://www.apollographql.com/)
* [SWR](https://swr.vercel.app/)


<!-- GETTING STARTED -->
## Getting Started


1. Clone the repo
   ```sh
   git clone https://github.com/SkelleyBelly/optimistic-updates-demo
   ```
2. Install root dependencies (via Yarn or NPM)
   ```sh
   npm install

   or

   yarn install
   ```

3. Start the development server
   ```sh
   npm run start

   or

   yarn start
   ```


<!-- USAGE EXAMPLES -->
## Usage

Adjust the controls to change how delays, optimistic responses and errors are applied to the application:

* **Optimistic**: Switch on optimistic responses that update the cached data on the client before the server response has been returned. This provides immediate feedback and a more responsive feel to the application.
  
* **Delay**: Delay the server response by 1500ms. By default, the mock server will respond immediately
  
* **Force Error**: Make the mock server return errors. This can be used to demonstrate how delayed errors interact with optimistic responses to clear out the locally updated data.

<!-- CONTACT -->
## Contact

Nathan Skelley - [website](https://www.skelleybelly.com/)

Project Link: [https://github.com/SkelleyBelly/optimistic-updates-demo](https://github.com/SkelleyBelly/optimistic-updates-demo)

<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: ./optimistic-update-screenshot.png
[netlify-shield]: https://api.netlify.com/api/v1/badges/c911a516-69a6-4980-8945-42720149ede8/deploy-status
[netlify-demo-url]: https://optimistic-update.netlify.app