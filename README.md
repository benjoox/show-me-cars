This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Requirements

`node > 12.16`

#### Getting started in development mode
`git clone git@github.com:benjoox/show-me-cars.git`

`cd show-me-cars`

`yarn`

`yarn start`

#### Run the tests with 
`yarn run test`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### What is used for this SPA
* Create React App
* React boostrap
* Eslint & prettier
* React testing library + jest
* Storybook for some initial components

#### Consideration
This project is using react bootstrap components. According to the provided instructions "\ Use available components only and ignore missmatching of original design"\ I tried to stick to the available components. Hence the select list that is used is the one provided in bootstrap and I did not add the custom design provided. If this is a deal breaker please let me know and I can create the select component seperately. 

Also with the styling of the components, the override.scss does override bootstrap default theming and color palettes. Any custom styling that is specific to an individual component is done as inline styles in the component.

