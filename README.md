# ISS Tracker

Tracker for the International Space Station powered by [Deck.gl](https://deck.gl/).

## Get Started

### Clone and Install Dependencies

To develop locally, first, clone the repo and install dependencies using [yarn](https://yarnpkg.com/).

```bash
git clone git@github.com:alexberndt/iss-tracker-deckgl.git
cd iss-tracker-deckgl
yarn install
```

### Set Environment Variables

Next, specify the environment variables in `.env.development` using the `.env.example` as a starting point

```bash
cp .env.example .env.development
```

You will need to specify the following environment variables:

- Mapbox API token to `REACT_APP_MAPBOX_TOKEN`

Finally, run the app in development mode

```bash
yarn start
```

The app can be viewed in the browser at [http://localhost:3000](http://localhost:3000).
