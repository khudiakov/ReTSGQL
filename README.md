# Web Component Boilerplate

**Technical Stack:**

- Node v12
- Parcel
- TypeScript
- React
- Apollo GraphQL + GraphQL Code Generator

**Recommended Directory Structure:**

```
    - src/
        - Feed.tsx - component implementation
        - Feed.gql - component graphql definitions
        - utils.ts - utility functions
```

## Setup

0. Check version of NodeJS is 12
1. Define environment variables in .env
1. Set _schema_ address in _codegen.yml_
1. Install dependencies: `npm install`

## Scripts

* **Run Development:** `npm run dev`
* **Build Production:** `npm run build`

---

#### Used Resources:

- https://createapp.dev/parcel
- https://graphql-code-generator.com/docs/plugins/typescript-react-apollo
