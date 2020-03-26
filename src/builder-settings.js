import { builder } from '@builder.io/react';
// a set of widgets you can use in the editor, optional.
import '@builder.io/widgets';
/**
 * Import all custom components so you can use in the builder.io editor
 * https://www.builder.io/c/docs/custom-react-components
 */
import './components/Hero/Hero.builder';
import config from './config';
builder.init(config.builderAPIKey);
