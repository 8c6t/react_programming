// import { func1 } from './util_esm';
// import { func1 } from './util_commonjs';
// func1();

import('./util_esm').then(util => util.func1());
