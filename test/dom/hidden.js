var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');

/*!
{
  "name": "[hidden] Attribute",
  "property": "hidden",
  "tags": ["dom"],
  "notes": [{
    "name": "WHATWG: The hidden attribute",
    "href": "http://developers.whatwg.org/editing.html#the-hidden-attribute"
  }, {
    "name": "original implementation of detect code",
    "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L38"
  }],
  "polyfills": ["html5shiv"],
  "authors": ["Ron Waldon (@jokeyrhyme)"]
}
!*/
/* DOC
Does the browser support the HTML5 [hidden] attribute?
*/

  Modernizr.addTest('hidden', 'hidden' in createElement('a'));

