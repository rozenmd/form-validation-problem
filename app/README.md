# How to test
Run `yarn start` then run `yarn test_e2e`, otherwise Cypress won't have a server to test against.

# Initial Thoughts

- I want to use my own webpack config to customise loaders for performance in production, but am strapped for time. Opting to use create-react-app with ie11 polyfills turned on.
- If this project involved more than one page, I would use [react-loadable](https://github.com/jamiebuilds/react-loadable) to split the bundle.
- If time allowed, I would split out the individual form components such as label, input, fieldset into individual, reusable styled Components

# Assumptions 
- I've assumed the `Email`, `Password`, `Colour`, `Animals` fields are required.

# Decisions
- As email is a nightmare to validate accurately without using an external API, I've opted to use the a regex from the [Yup validation library](https://github.com/jquense/yup/blob/master/src/string.js#L7) that covers around 99% of cases.
- If time allowed, I would add hooks to make end to end testing more robust (i.e add attributes that are unlikely to change, to target elements)
