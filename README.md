# Builder.io Gatsby Starter

Gatsby starter with drag + drop page building with your React components via Builder.io's visual headless CMS
<br />
<br />
<img src="https://imgur.com/HjBWIbv.gif" alt="Editor example" />


## Quick Start
1.  **Sign up to Builder.io and Create a Gatsby site.**

    - Clone this repository or use `gatsby new`
    ```shell
    # create a new Gatsby site using this starter
    gatsby new my-builder-site https://github.com/BuilderIO/gatsby-starter-builder
    ```

    - Grab a free account at [builder.io](https://builder.io/fork-sample-org), this link will set you up with all the models used in the starter and some sample content to get you started.

    - Find your [public API key](https://builder.io/account/organization) and add it to the [src/config.js](src/config.js)


2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

    Then start building pages in Builder! Use the pre-built templates, and components to create exactly what you want. This starter uses [@builder.io/gatsby plugin](https://github.com/BuilderIO/builder/tree/master/packages/gatsby) to fetch all your published pages and add them to your Gatsby build.


## 🧐 What's inside?
This starter demonstrates creating dynamic pages in Builder.io on new URLs and generating them with Gatsby, as well as rendering specific parts of your site with Builder.io content via GraphQL queries (e.g. for pages, header, footer, etc)

See: 
- [src/templates/LandingPage.jsx](src/templates/LandingPage.jsx) for using GraphQL to query and render Builder.io components and pages manually in parts of your Gatsby site and content
- [src/layouts/PageLayout.jsx](src/layouts/PageLayout.jsx) for an example on wrapping your pages with conent from `header` and `footer` model entries.
- [@builder.io/gatsby](https://github.com/builderio/builder/tree/master/packages/gatsby) the plugin used in this starter to generate pages dynamically.

### Using your custom components in the editor

> 👉**Tip: want to limit page building to only your components? Try [components only mode](https://builder.io/c/docs/guides/components-only-mode)**

Register a component

```tsx
import { Builder } from '@builder.io/react';

class SimpleText extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Builder.registerComponent(SimpleText, {
  name: 'Simple Text',
  inputs: [{ name: 'text', type: 'string' }],
})

```

Then import it in the template or in your (builder-settings.js)[src/builder-settings.js]

```tsx
import './components/simple-text'
// ...
```

See:
- [src/components/Hero/hero.builder.js](src/components/Hero/hero.builder.js) for an example of using a custom react component in the Builder.io visiaul editor.

- [design systems example](https://github.com/BuilderIO/builder/tree/master/examples/react-design-system) for lots of examples using your deisgn system + custom components



### Mixed Content errors when hosting on insecure http
Our editor uses the preview URL you supply for live editing. Because the editor is on `https`, the preview might not work correctly if your development setup uses http. To fix this, change your development set up to serve using https. Or, as a workaround, on Chrome you can allow insecure content on localhost, by toggling the `insecure content` option here [chrome://settings/content/siteDetails?site=http%3A%2F%2Flocalhost%3A9009](chrome://settings/content/siteDetails?site=http%3A%2F%2Flocalhost%3A8000)


## Prerequisites

- Node
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)


## Available scripts


### `build`

Build the static files into the `public` folder

#### Usage

```sh
$ npm run build
```

### `clean`

Runs `gatsby clean` command.

#### Usage

```sh
npm run clean
```

### `develop` or `start`

Runs the `clean` script and starts the gatsby develop server using the command `gatsby develop`. 

#### Usage

```sh
npm run develop
```

### `format`

Formats code and docs according to our style guidelines using `prettier`

#### Usage

```sh
npm run format
```

## CONTRIBUTING

Contributions are always welcome, no matter how large or small.


## Learn more

- [Official docs](https://www.builder.io/c/docs/getting-started)
