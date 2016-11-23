function requireAll(r) { r.keys().forEach(r); }

import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/fold/foldgutter.css';
requireAll(require.context('codemirror/theme/', false, /\.css/));
