<img alt="BUILDER" src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6836fc105ad549a5b4bf144235b1a228" width="300" />

Drag and drop page building with your code components. 

<br />
<img src="https://imgur.com/HjBWIbv.gif" alt="Editor example" />

<table style="width:100%;">
  <tr>
    <td width="50%">Register components</td>
    <td>Rendered your visually created pages</td>
  </tr width="50%">
  <tr>
    <td width="50%">
<pre lang="tsx">
import { Builder } from '@builder.io/react'
&nbsp;
// Register our heading component for use in 
// the visual editor
const Heading = props => (
  &lt;h1 className={style}&gt;{props.title}&lt;/h1&gt;
)
&nbsp;
Builder.registerComponent(Heading, { 
&nbsp;&nbsp;name: 'Heading',
&nbsp;&nbsp;inputs: [{ name: 'title', type: 'text' }]
})
</pre>
    
</td>
    <td width="50%">
<pre lang="tsx">
import { BuilderComponent } from '@builder.io/react'
&nbsp;
// Include this in your app, and Builder.io will render  
// the matching page by the current document's URL. Scroll 
// down for more advanced options and examples
export default let BuilderPage = () => (
&nbsp;&nbsp;&lt;BuilderComponent name="page" /&gt;
)
</pre>
    </td>
  </tr>
</table>

## Quick Start
Clone this repository or use `gatsby new`

```sh
gatsby new my-builder-site https://github.com/BuilderIO/gatsby-starter-builder
```

- Grab a free account at [builder.io](https://builder.io/fork-sample-org), this link will set you up with all the models used in the starter and some sample content to get you started.

- Find your [public API key](https://builder.io/account/organization) and add it to the [src/config.js](src/config.js)

- Start building pages in Builder! Use the pre-built templates, and components to create exactly what you want. This starter uses [@builder.io/gatsby plugin](https://github.com/BuilderIO/builder/tree/master/packages/gatsby) to fetch all your published pages and add them to your Gatsby build.

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

# CONTRIBUTING

Contributions are always welcome, no matter how large or small.


## Learn more

- [Official docs](https://www.builder.io/c/docs/getting-started)