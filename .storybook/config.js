import { configure, setAddon } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import infoAddon from '@kadira/react-storybook-addon-info';
import './style.css';

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

const req = require.context('../src/', true, /stories\/index\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
