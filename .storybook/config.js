import { configure, setAddon, addDecorator } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import infoAddon from '@kadira/react-storybook-addon-info';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import { withTheme } from './themeAddon';
import '../src/presets.js';

setAddon(infoAddon);
setOptions({
  name: 'Monitor Components',
  url: 'https://github.com/zalmoxisus/remotedev-monitor-components',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true
});

addDecorator(withTheme);
addDecorator(withKnobs);

const req = require.context('../src/', true, /stories\/index\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
