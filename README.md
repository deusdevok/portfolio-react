# Portfolio React

A simple portfolio website built with React and hosted on GitHub Pages.

## Live Demo

Visit the live portfolio at: [https://deusdevok.github.io/portfolio-react](https://deusdevok.github.io/portfolio-react)

## Features

- Single-page application with React Router for navigation
- Responsive design
- Easy to customize and extend
- GitHub Pages deployment ready

## Project Structure

The project follows a standard React application structure:

```
portfolio-react/
├── public/ # Static files
├── src/ # Source files
│ ├── components/ # React components
│ ├── App.js # Main application component
│ └── index.js # Application entry point
└── package.json # Project dependencies and scripts
```


## Getting Started

### Prerequisites

- Node.js (v12.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/deusdevok/portfolio-react.git
   cd portfolio-react
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Development

To run the application in development mode:

```
npm start
```


This will start the development server at [http://localhost:3000](http://localhost:3000). The page will automatically reload when you make changes.

## Deployment

The portfolio is configured to be deployed to GitHub Pages. To deploy your changes:

1. Make sure the `homepage` field in `package.json` is correctly set to your GitHub Pages URL.

2. Build and deploy the application:
   ```
   npm run build
   ```

3. Push your changes to the GitHub repository, and GitHub Actions will handle the deployment.

## Customization

- Edit the components in the `src/components` directory to customize the content.
- Modify styles in the CSS files to change the appearance.
- Add new components or pages as needed for your portfolio.

## Technologies Used

- React
- React Router
- GitHub Pages

## License

This project is open source and available under the [MIT License](LICENSE).

## Fixing refresh bug in Github Pages

To fix the issue of refresh, see https://github.com/rafgraph/spa-github-pages