# How to become a millionaire app

[Deployed on Vercel](https://headway-millionaire-hlyz.vercel.app/)

## How to start:

- `cp .env.example .env`
- `yarn`
- `yarn dev` (for development) `yarn build && yarn start` (for production)

## Mocks:

The app using a [MSW](https://v1.mswjs.io/) for creating a using mocks.

If u want to change questions and answers.
Just upload a new `questions.json` in `src/shared/lib/server/__mocks__/` folder

## Technologies:

- Zustand
- Next.js
- PostCSS
