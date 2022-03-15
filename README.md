# Restaurant Finder

This is developed for the employees in Cogent Labs, an AI company in Tokyo, Japan, to help them to find restaurants quickly and efficiently. This uses was React.js with TypeScript and Redux, and MUI for styling.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder structure

The folder is structured with the following diagram:

```
.
|-- src
|   |-- components
|   |-- hooks
|   |-- store
|   |-- tests
|   `-- utils
|-- package.json
|-- README.md
|-- tsconfig.json
`-- yarn.lock
```

## Development

One time only: install `yarn`.

```bash
# On Mac with Homebrew (https://brew.sh/).
brew install yarn
# With npm package manager.
npm install --global yarn
```

Clone the repo and install the dependencies:

```bash
git clone https://github.com/cchungmin/restaurant-finder.git
cd restaurant-finder
yarn install
```

Start development server by typing:

```
yarn start
```

Run tests:

```
yarn test
```

Build the package:

```
yarn build
```

In the root of the project, set up an `.env` file

```
REACT_APP_FOURSQUARE_API=https://api.foursquare.com/v3
REACT_APP_FOURSQUARE_API_KEY=YOUR_API_KEY
```

## Trade-offs & technical choices

- API server and cache setting. The API requests are fired directly to FourSquare now, but it's better to have a lightweight server to transfer the requests.
- Better UI impletmentation with theme. The UI is based on basic MUI theme.
- Error handling for the inputs.
- React testing library for quick setup since search field is the only input.
- Icons for better understanding of restaurants.
- TypeScript for type checks but some types are not well handled for now.
