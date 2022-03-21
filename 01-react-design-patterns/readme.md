# page url

- react の基礎と設計パターン
  https://speakerdeck.com/dragontaro/reactfalseji-chu-toshe-ji-patan

# github url

https://github.com/SOunit/spz-react

# react problem

- state control with large scale system
- Poor maintainability due to lack of view/state separation
- Scope of state cannot be limited

# redux solution

- flux(one direction state flow architecture)

# flux

## flex

- Flux is an architectural pattern introduced by “Facebook” to work with React. It is a slight modification of the observer-observable pattern and it is not a library or a framework. The main feature in Flux is the concept of uni-directional data flow.

## redux

- Redux is a library inspired by Flux and can be considered as an implementation of Flux. Redux makes easy to handle the state of the application and manage to display data on user actions. It is a very powerful library but also very lightweight.

### url

https://medium.com/@sidathasiri/flux-and-redux-f6c9560997d7

# design

- redux directory / ducks pattern
- presentation / container
- css design
- component directory / atomic design

# ducks pattern

## url

https://webbibouroku.com/Blog/Article/redux-ducks

# presentation / container

- presentation for only appearance
- container for logic
- no state in react

# css design

- following BEM and SCSS best practice is good approach

# component design

- generally, smaller component is better for reuse
- atomic design like approach is good

## atoms

- minimum unit, no more separation
- one responsibility
- wrapper components are categorized as atoms (column-component etc.)
- abstract component

## molecules

- atoms +a(LabeledInput etc.)
- concern only inside component
- combination of atoms
- abstract component(ListItem component is not abstract)

## organisms

- connect to redux
- container component for logic
- presentation component for view

# summary

- re-ducks is the best for redux
- separation of logic from view
- css depends on react project or not
- atomic separation is too much for most of project?
