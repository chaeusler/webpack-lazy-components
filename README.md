# Lazy Components With Webpack

Demonstration of a simple approach to lazily load components with their assets.

This frontend-techonoly-agnostic concept is suitable for websites which are composed on the server side like a CMS.

## Motivation

In a CMS or Portal-Environment the pages may be structured by the authors by arranging the components on their templates. These components may be rendered server-side or they consist of code which will be executed in the browser.

Server-Side rendered components are mostly straight-forward. They render the content typed or defined by the autors and the rendering logic will be able to add all needed assets to the page.

Client-Side components are adding new pitfalls to the playground because it's out of the rendering control of the server and the assets need to be loaded as well. Lazily of course. That's where webpack can help simplify our lifes.

## Concept

1. The page will be rendered server side and delivered to the client.
2. the bootstrapping code will scan the page for elements with the attribute 'data-component'
3. the value of each 'data-component' attribute will be used to lookup the component-registry. (which is delivered to the client)
4. every matching component will be rendered into the containing element. Optionally the 'data-component-options' will deliver data to the component. The component-options could be used to add author-defined configuration or other pre-processed data to the component.

## Benefits

Self containg component:
Because webpack will bundle the components with all their dependencies, the template doesn't need preload the environment with js-libraries or css-files.

## Shortcomings

Webpack needs to parse the code for import statements in order to detect all bundles to generate. The current configuration forces us to register every component in the code with an import statement and a path with a single string literal. I'm quite sure that there are more sohpisticated possibilities to get rid of this issue.

## Run the example

Precondition: [yarn](https://yarnpkg.com/lang/en/docs/install)

1. install the dependencies with `yarn`
2. build with `yarn run build` or watch for changes with `yarn run watch`