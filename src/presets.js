function requireAll(r) { r.keys().forEach(r); }

require('codemirror/mode/javascript/javascript');
require('codemirror/lib/codemirror.css');
requireAll(require.context('codemirror/theme/', false, /\.css/));
