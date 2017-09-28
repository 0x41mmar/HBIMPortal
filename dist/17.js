webpackJsonp([17],{

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".label-container {\n  position: relative;\n  overflow: hidden;\n  font-size: 100%;\n  color: #343434;\n  height: 100%;\n  float: left; }\n", ""]);

// exports


/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function(factory) {
    'use strict';
    /* global window: false, define: false, module: false */
    var root = typeof window === 'undefined' ? null : window;

    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){ return factory(root); }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module !== 'undefined') {
        module.exports = factory(root);
    } else {
        root.DOMPurify = factory(root);
    }
}(function factory(window) {
    'use strict';

    var DOMPurify = function(window) {
        return factory(window);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '0.8.9';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
        // not running in a browser, provide a factory function
        // so that you can pass your own Window
        DOMPurify.isSupported = false;
        return DOMPurify;
    }

    var document = window.document;
    var originalDocument = document;
    var DocumentFragment = window.DocumentFragment;
    var HTMLTemplateElement = window.HTMLTemplateElement;
    var Node = window.Node;
    var NodeFilter = window.NodeFilter;
    var NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap;
    var Text = window.Text;
    var Comment = window.Comment;
    var DOMParser = window.DOMParser;
    var useDOMParser = false; // See comment below

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
        var template = document.createElement('template');
        if (template.content && template.content.ownerDocument) {
            document = template.content.ownerDocument;
        }
    }
    var implementation = document.implementation;
    var createNodeIterator = document.createNodeIterator;
    var getElementsByTagName = document.getElementsByTagName;
    var createDocumentFragment = document.createDocumentFragment;
    var importNode = originalDocument.importNode;

    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported =
        typeof implementation.createHTMLDocument !== 'undefined' &&
        document.documentMode !== 9;

    /* Add properties to a lookup table */
    var _addToSet = function(set, array) {
        var l = array.length;
        while (l--) {
            if (typeof array[l] === 'string') {
                array[l] = array[l].toLowerCase();
            }
            set[array[l]] = true;
        }
        return set;
    };

    /* Shallow clone an object */
    var _cloneObj = function(object) {
        var newObject = {};
        var property;
        for (property in object) {
            if (object.hasOwnProperty(property)) {
                newObject[property] = object[property];
            }
        }
        return newObject;
    };

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */
    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = _addToSet({}, [

        // HTML
        'a','abbr','acronym','address','area','article','aside','audio','b',
        'bdi','bdo','big','blink','blockquote','body','br','button','canvas',
        'caption','center','cite','code','col','colgroup','content','data',
        'datalist','dd','decorator','del','details','dfn','dir','div','dl','dt',
        'element','em','fieldset','figcaption','figure','font','footer','form',
        'h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','i',
        'img','input','ins','kbd','label','legend','li','main','map','mark',
        'marquee','menu','menuitem','meter','nav','nobr','ol','optgroup',
        'option','output','p','pre','progress','q','rp','rt','ruby','s','samp',
        'section','select','shadow','small','source','spacer','span','strike',
        'strong','style','sub','summary','sup','table','tbody','td','template',
        'textarea','tfoot','th','thead','time','tr','track','tt','u','ul','var',
        'video','wbr',

        // SVG
        'svg','altglyph','altglyphdef','altglyphitem','animatecolor',
        'animatemotion','animatetransform','circle','clippath','defs','desc',
        'ellipse','filter','font','g','glyph','glyphref','hkern','image','line',
        'lineargradient','marker','mask','metadata','mpath','path','pattern',
        'polygon','polyline','radialgradient','rect','stop','switch','symbol',
        'text','textpath','title','tref','tspan','view','vkern',

        // SVG Filters
        'feBlend','feColorMatrix','feComponentTransfer','feComposite',
        'feConvolveMatrix','feDiffuseLighting','feDisplacementMap',
        'feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur',
        'feMerge','feMergeNode','feMorphology','feOffset',
        'feSpecularLighting','feTile','feTurbulence',

        //MathML
        'math','menclose','merror','mfenced','mfrac','mglyph','mi','mlabeledtr',
        'mmuliscripts','mn','mo','mover','mpadded','mphantom','mroot','mrow',
        'ms','mpspace','msqrt','mystyle','msub','msup','msubsup','mtable','mtd',
        'mtext','mtr','munder','munderover',

        //Text
        '#text'
    ]);

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = _addToSet({}, [

        // HTML
        'accept','action','align','alt','autocomplete','background','bgcolor',
        'border','cellpadding','cellspacing','checked','cite','class','clear','color',
        'cols','colspan','coords','datetime','default','dir','disabled',
        'download','enctype','face','for','headers','height','hidden','high','href',
        'hreflang','id','ismap','label','lang','list','loop', 'low','max',
        'maxlength','media','method','min','multiple','name','noshade','novalidate',
        'nowrap','open','optimum','pattern','placeholder','poster','preload','pubdate',
        'radiogroup','readonly','rel','required','rev','reversed','role','rows',
        'rowspan','spellcheck','scope','selected','shape','size','span',
        'srclang','start','src','step','style','summary','tabindex','title',
        'type','usemap','valign','value','width','xmlns',

        // SVG
        'accent-height','accumulate','additivive','alignment-baseline',
        'ascent','attributename','attributetype','azimuth','basefrequency',
        'baseline-shift','begin','bias','by','clip','clip-path','clip-rule',
        'color','color-interpolation','color-interpolation-filters','color-profile',
        'color-rendering','cx','cy','d','dx','dy','diffuseconstant','direction',
        'display','divisor','dur','edgemode','elevation','end','fill','fill-opacity',
        'fill-rule','filter','flood-color','flood-opacity','font-family','font-size',
        'font-size-adjust','font-stretch','font-style','font-variant','font-weight',
        'fx', 'fy','g1','g2','glyph-name','glyphref','gradientunits','gradienttransform',
        'image-rendering','in','in2','k','k1','k2','k3','k4','kerning','keypoints',
        'keysplines','keytimes','lengthadjust','letter-spacing','kernelmatrix',
        'kernelunitlength','lighting-color','local','marker-end','marker-mid',
        'marker-start','markerheight','markerunits','markerwidth','maskcontentunits',
        'maskunits','max','mask','mode','min','numoctaves','offset','operator',
        'opacity','order','orient','orientation','origin','overflow','paint-order',
        'path','pathlength','patterncontentunits','patterntransform','patternunits',
        'points','preservealpha','r','rx','ry','radius','refx','refy','repeatcount',
        'repeatdur','restart','result','rotate','scale','seed','shape-rendering',
        'specularconstant','specularexponent','spreadmethod','stddeviation','stitchtiles',
        'stop-color','stop-opacity','stroke-dasharray','stroke-dashoffset','stroke-linecap',
        'stroke-linejoin','stroke-miterlimit','stroke-opacity','stroke','stroke-width',
        'surfacescale','targetx','targety','transform','text-anchor','text-decoration',
        'text-rendering','textlength','u1','u2','unicode','values','viewbox',
        'visibility','vert-adv-y','vert-origin-x','vert-origin-y','word-spacing',
        'wrap','writing-mode','xchannelselector','ychannelselector','x','x1','x2',
        'y','y1','y2','z','zoomandpan',

        // MathML
        'accent','accentunder','bevelled','close','columnsalign','columnlines',
        'columnspan','denomalign','depth','display','displaystyle','fence',
        'frame','largeop','length','linethickness','lspace','lquote',
        'mathbackground','mathcolor','mathsize','mathvariant','maxsize',
        'minsize','movablelimits','notation','numalign','open','rowalign',
        'rowlines','rowspacing','rowspan','rspace','rquote','scriptlevel',
        'scriptminsize','scriptsizemultiplier','selection','separator',
        'separators','stretchy','subscriptshift','supscriptshift','symmetric',
        'voffset',

        // XML
        'xlink:href','xml:id','xlink:title','xml:space','xmlns:xlink'
    ]);

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if ARIA attributes are okay */
    var ALLOW_ARIA_ATTR = true;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Output should be safe for jQuery's $() factory? */
    var SAFE_FOR_JQUERY = false;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Specify template detection regex for SAFE_FOR_TEMPLATES mode */
    var MUSTACHE_EXPR = /\{\{[\s\S]*|[\s\S]*\}\}/gm;
    var ERB_EXPR = /<%[\s\S]*|[\s\S]*%>/gm;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    var FORCE_BODY = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html string.
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html string */
    var RETURN_DOM_FRAGMENT = false;

    /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify. */
    var RETURN_DOM_IMPORT = false;

    /* Output should be free from DOM clobbering attacks? */
    var SANITIZE_DOM = true;

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = _addToSet({}, [
        'audio', 'head', 'math', 'script', 'style', 'template', 'svg', 'video'
    ]);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = _addToSet({}, [
        'audio', 'video', 'img', 'source', 'image'
    ]);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = _addToSet({}, [
        'alt','class','for','id','label','name','pattern','placeholder',
        'summary','title','value','style','xmlns'
    ]);

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');

    /**
     * _parseConfig
     *
     * @param  optional config literal
     */
    var _parseConfig = function(cfg) {
        /* Shield configuration object from tampering */
        if (typeof cfg !== 'object') {
            cfg = {};
        }

        /* Set configuration parameters */
        ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ?
            _addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ?
            _addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
        FORBID_TAGS = 'FORBID_TAGS' in cfg ?
            _addToSet({}, cfg.FORBID_TAGS) : {};
        FORBID_ATTR = 'FORBID_ATTR' in cfg ?
            _addToSet({}, cfg.FORBID_ATTR) : {};
        ALLOW_ARIA_ATTR     = cfg.ALLOW_ARIA_ATTR     !== false; // Default true
        ALLOW_DATA_ATTR     = cfg.ALLOW_DATA_ATTR     !== false; // Default true
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
        SAFE_FOR_JQUERY     = cfg.SAFE_FOR_JQUERY     ||  false; // Default false
        SAFE_FOR_TEMPLATES  = cfg.SAFE_FOR_TEMPLATES  ||  false; // Default false
        WHOLE_DOCUMENT      = cfg.WHOLE_DOCUMENT      ||  false; // Default false
        RETURN_DOM          = cfg.RETURN_DOM          ||  false; // Default false
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT ||  false; // Default false
        RETURN_DOM_IMPORT   = cfg.RETURN_DOM_IMPORT   ||  false; // Default false
        FORCE_BODY          = cfg.FORCE_BODY          ||  false; // Default false
        SANITIZE_DOM        = cfg.SANITIZE_DOM        !== false; // Default true
        KEEP_CONTENT        = cfg.KEEP_CONTENT        !== false; // Default true

        if (SAFE_FOR_TEMPLATES) {
            ALLOW_DATA_ATTR = false;
        }

        if (RETURN_DOM_FRAGMENT) {
            RETURN_DOM = true;
        }

        /* Merge configuration parameters */
        if (cfg.ADD_TAGS) {
            if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                ALLOWED_TAGS = _cloneObj(ALLOWED_TAGS);
            }
            _addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
        }
        if (cfg.ADD_ATTR) {
            if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                ALLOWED_ATTR = _cloneObj(ALLOWED_ATTR);
            }
            _addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
        }
        if (cfg.ADD_URI_SAFE_ATTR) {
            _addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
        }

        /* Add #text in case KEEP_CONTENT is set to true */
        if (KEEP_CONTENT) { ALLOWED_TAGS['#text'] = true; }

        // Prevent further manipulation of configuration.
        // Not available in IE8, Safari 5, etc.
        if (Object && 'freeze' in Object) { Object.freeze(cfg); }

        CONFIG = cfg;
    };

   /**
     * _forceRemove
     *
     * @param  a DOM node
     */
    var _forceRemove = function(node) {
        DOMPurify.removed.push({element: node});
        try {
            node.parentNode.removeChild(node);
        } catch (e) {
            node.outerHTML = '';
        }
    };

   /**
     * _removeAttribute
     *
     * @param  an Attribute name
     * @param  a DOM node
     */
    var _removeAttribute = function(name, node) {
        DOMPurify.removed.push({
            attribute: node.getAttributeNode(name),
            from: node
        });
        node.removeAttribute(name);
    };

   /**
     * _initDocument
     *
     * @param  a string of dirty markup
     * @return a DOM, filled with the dirty markup
     */
    var _initDocument = function(dirty) {
        /* Create a HTML document */
        var doc, body;

        /* Fill body with bogus element */
        if (FORCE_BODY) {
            dirty = '<remove></remove>' + dirty;
        }

        /* Use DOMParser to workaround Firefox bug (see comment below) */
        if (useDOMParser) {
            try {
                doc = new DOMParser().parseFromString(dirty, 'text/html');
            } catch (e) {}
        }

        /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
           Safari (see comment below) */
        if (!doc || !doc.documentElement) {
            doc = implementation.createHTMLDocument('');
            body = doc.body;
            body.parentNode.removeChild(body.parentNode.firstElementChild);
            body.outerHTML = dirty;
        }

        /* Work on whole document or just its body */
        return getElementsByTagName.call(doc,
            WHOLE_DOCUMENT ? 'html' : 'body')[0];
    };

    // Safari 10.1+ (unfixed as of time of writing) has a catastrophic bug in
    // its implementation of DOMParser such that the following executes the
    // JavaScript:
    //
    // new DOMParser()
    //   .parseFromString('<svg onload=alert(document.domain)>', 'text/html');
    //
    // However, Firefox uses a different parser for innerHTML rather than
    // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
    // which means that you *must* use DOMParser, otherwise the output may
    // not be safe if used in a document.write context later.
    //
    // So we feature detect the Firefox bug and use the DOMParser if necessary.
    if (DOMPurify.isSupported) {
        (function () {
            var doc = _initDocument('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">');
            if (doc.querySelector('svg img')) {
                useDOMParser = true;
            }
        }());
    }

    /**
     * _createIterator
     *
     * @param  document/fragment to create iterator for
     * @return iterator instance
     */
    var _createIterator = function(root) {
        return createNodeIterator.call(root.ownerDocument || root,
            root,
            NodeFilter.SHOW_ELEMENT
            | NodeFilter.SHOW_COMMENT
            | NodeFilter.SHOW_TEXT,
            function() { return NodeFilter.FILTER_ACCEPT; },
            false
        );
    };

    /**
     * _isClobbered
     *
     * @param  element to check for clobbering attacks
     * @return true if clobbered, false if safe
     */
    var _isClobbered = function(elm) {
        if (elm instanceof Text || elm instanceof Comment) {
            return false;
        }
        if (  typeof elm.nodeName !== 'string'
           || typeof elm.textContent !== 'string'
           || typeof elm.removeChild !== 'function'
           || !(elm.attributes instanceof NamedNodeMap)
           || typeof elm.removeAttribute !== 'function'
           || typeof elm.setAttribute !== 'function'
        ) {
            return true;
        }
        return false;
    };

    /**
     * _isNode
     *
     * @param object to check whether it's a DOM node
     * @return true is object is a DOM node
     */
    var _isNode = function(obj) {
        return (
            typeof Node === "object" ? obj instanceof Node : obj
                && typeof obj === "object" && typeof obj.nodeType === "number"
                && typeof obj.nodeName==="string"
        );
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   node to check for permission to exist
     * @return  true if node was killed, false if left alive
     */
    var _sanitizeElements = function(currentNode) {
        var tagName, content;

        /* Execute a hook if present */
        _executeHook('beforeSanitizeElements', currentNode, null);

        /* Check if element is clobbered or can clobber */
        if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
            return true;
        }

        /* Now let's check the element's type and name */
        tagName = currentNode.nodeName.toLowerCase();

        /* Execute a hook if present */
        _executeHook('uponSanitizeElement', currentNode, {
            tagName: tagName,
            allowedTags: ALLOWED_TAGS
        });

        /* Remove element if anything forbids its presence */
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            /* Keep content except for black-listed elements */
            if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]
                    && typeof currentNode.insertAdjacentHTML === 'function') {
                try {
                    currentNode.insertAdjacentHTML('AfterEnd', currentNode.innerHTML);
                } catch (e) {}
            }
            _forceRemove(currentNode);
            return true;
        }

        /* Convert markup to cover jQuery behavior */
        if (SAFE_FOR_JQUERY && !currentNode.firstElementChild &&
                (!currentNode.content || !currentNode.content.firstElementChild) &&
                /</g.test(currentNode.textContent)) {
            DOMPurify.removed.push({element: currentNode.cloneNode()});
            currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
        }

        /* Sanitize element content to be template-safe */
        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
            /* Get the element's text content */
            content = currentNode.textContent;
            content = content.replace(MUSTACHE_EXPR, ' ');
            content = content.replace(ERB_EXPR, ' ');
            if (currentNode.textContent !== content) {
                DOMPurify.removed.push({element: currentNode.cloneNode()});
                currentNode.textContent = content;
            }
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeElements', currentNode, null);

        return false;
    };

    var DATA_ATTR = /^data-[\-\w.\u00B7-\uFFFF]/;
    var ARIA_ATTR = /^aria-[\-\w]+$/;
    var IS_ALLOWED_URI = /^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;
    var IS_SCRIPT_OR_DATA = /^(?:\w+script|data):/i;
    /* This needs to be extensive thanks to Webkit/Blink's behavior */
    var ATTR_WHITESPACE = /[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param   node to sanitize
     * @return  void
     */
    var _sanitizeAttributes = function(currentNode) {
        var attr, name, value, lcName, idAttr, attributes, hookEvent, l;
        /* Execute a hook if present */
        _executeHook('beforeSanitizeAttributes', currentNode, null);

        attributes = currentNode.attributes;

        /* Check if we have attributes; if not we might have a text node */
        if (!attributes) { return; }

        hookEvent = {
            attrName: '',
            attrValue: '',
            keepAttr: true,
            allowedAttributes: ALLOWED_ATTR
        };
        l = attributes.length;

        /* Go backwards over all attributes; safely remove bad ones */
        while (l--) {
            attr = attributes[l];
            name = attr.name;
            value = attr.value.trim();
            lcName = name.toLowerCase();

            /* Execute a hook if present */
            hookEvent.attrName = lcName;
            hookEvent.attrValue = value;
            hookEvent.keepAttr = true;
            _executeHook('uponSanitizeAttribute', currentNode, hookEvent );
            value = hookEvent.attrValue;

            /* Remove attribute */
            // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
            // remove a "name" attribute from an <img> tag that has an "id"
            // attribute at the time.
            if (lcName === 'name'  &&
                    currentNode.nodeName === 'IMG' && attributes.id) {
                idAttr = attributes.id;
                attributes = Array.prototype.slice.apply(attributes);
                _removeAttribute('id', currentNode);
                _removeAttribute(name, currentNode);
                if (attributes.indexOf(idAttr) > l) {
                    currentNode.setAttribute('id', idAttr.value);
                }
            } else if (
                  // This works around a bug in Safari, where input[type=file]
                  // cannot be dynamically set after type has been removed
                  currentNode.nodeName === 'INPUT' && lcName === 'type' &&
                  value === 'file' && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
                  continue;
            } else {
                // This avoids a crash in Safari v9.0 with double-ids.
                // The trick is to first set the id to be empty and then to
                // remove the attribute
                if (name === 'id') {
                    currentNode.setAttribute(name, '');
                }
                _removeAttribute(name, currentNode);
            }

            /* Did the hooks approve of the attribute? */
            if (!hookEvent.keepAttr) {
                continue;
            }

            /* Make sure attribute cannot clobber */
            if (SANITIZE_DOM &&
                    (lcName === 'id' || lcName === 'name') &&
                    (value in window || value in document || value in formElement)) {
                continue;
            }

            /* Sanitize attribute content to be template-safe */
            if (SAFE_FOR_TEMPLATES) {
                value = value.replace(MUSTACHE_EXPR, ' ');
                value = value.replace(ERB_EXPR, ' ');
            }

            /* Allow valid data-* attributes: At least one character after "-"
               (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
               XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
               We don't need to check the value; it's always URI safe. */
            if (ALLOW_DATA_ATTR && DATA_ATTR.test(lcName)) {
                // This attribute is safe
            }
            else if (ALLOW_ARIA_ATTR && ARIA_ATTR.test(lcName)) {
                // This attribute is safe
            }
            /* Otherwise, check the name is permitted */
            else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
                continue;
            }
            /* Check value is safe. First, is attr inert? If so, is safe */
            else if (URI_SAFE_ATTRIBUTES[lcName]) {
                // This attribute is safe
            }
            /* Check no script, data or unknown possibly unsafe URI
               unless we know URI values are safe for that attribute */
            else if (IS_ALLOWED_URI.test(value.replace(ATTR_WHITESPACE,''))) {
                // This attribute is safe
            }
            /* Keep image data URIs alive if src/xlink:href is allowed */
            else if (
                (lcName === 'src' || lcName === 'xlink:href') &&
                value.indexOf('data:') === 0 &&
                DATA_URI_TAGS[currentNode.nodeName.toLowerCase()]) {
                // This attribute is safe
            }
            /* Allow unknown protocols: This provides support for links that
               are handled by protocol handlers which may be unknown ahead of
               time, e.g. fb:, spotify: */
            else if (
                ALLOW_UNKNOWN_PROTOCOLS &&
                !IS_SCRIPT_OR_DATA.test(value.replace(ATTR_WHITESPACE,''))) {
                // This attribute is safe
            }
            /* Check for binary attributes */
            else if (!value) {
                // binary attributes are safe at this point
            }
            /* Anything else, presume unsafe, do not add it back */
            else {
                continue;
            }

            /* Handle invalid data-* attribute set by try-catching it */
            try {
                currentNode.setAttribute(name, value);
                DOMPurify.removed.pop();
            } catch (e) {}
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  fragment to iterate over recursively
     * @return void
     */
    var _sanitizeShadowDOM = function(fragment) {
        var shadowNode;
        var shadowIterator = _createIterator(fragment);

        /* Execute a hook if present */
        _executeHook('beforeSanitizeShadowDOM', fragment, null);

        while ( (shadowNode = shadowIterator.nextNode()) ) {
            /* Execute a hook if present */
            _executeHook('uponSanitizeShadowNode', shadowNode, null);

            /* Sanitize tags and elements */
            if (_sanitizeElements(shadowNode)) {
                continue;
            }

            /* Deep shadow DOM detected */
            if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(shadowNode.content);
            }

            /* Check attributes, sanitize if necessary */
            _sanitizeAttributes(shadowNode);
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode
     */
    var _executeHook = function(entryPoint, currentNode, data) {
        if (!hooks[entryPoint]) { return; }

        hooks[entryPoint].forEach(function(hook) {
            hook.call(DOMPurify, currentNode, data, CONFIG);
        });
    };

    /**
     * sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    DOMPurify.sanitize = function(dirty, cfg) {
        var body, importedNode, currentNode, oldNode, nodeIterator, returnNode;
        /* Make sure we have a string to sanitize.
           DO NOT return early, as this will return the wrong type if
           the user has requested a DOM object rather than a string */
        if (!dirty) {
            dirty = '<!-->';
        }

        /* Stringify, in case dirty is an object */
        if (typeof dirty !== 'string' && !_isNode(dirty)) {
            if (typeof dirty.toString !== 'function') {
                throw new TypeError('toString is not a function');
            } else {
                dirty = dirty.toString();
            }
        }

        /* Check we can run. Otherwise fall back or ignore */
        if (!DOMPurify.isSupported) {
            if (typeof window.toStaticHTML === 'object'
                || typeof window.toStaticHTML === 'function') {
                if (typeof dirty === 'string') {
                    return window.toStaticHTML(dirty);
                } else if (_isNode(dirty)) {
                    return window.toStaticHTML(dirty.outerHTML);
                }
            }
            return dirty;
        }

        /* Assign config vars */
        _parseConfig(cfg);

        /* Clean up removed elements */
        DOMPurify.removed = [];

        if (dirty instanceof Node) {
            /* If dirty is a DOM element, append to an empty document to avoid
               elements being stripped by the parser */
            body = _initDocument('<!-->');
            importedNode = body.ownerDocument.importNode(dirty, true);
            if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
                /* Node is already a body, use as is */
                body = importedNode;
            } else {
                body.appendChild(importedNode);
            }
        } else {
            /* Exit directly if we have nothing to do */
            if (!RETURN_DOM && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
                return dirty;
            }

            /* Initialize the document to work on */
            body = _initDocument(dirty);

            /* Check we have a DOM node from the data */
            if (!body) {
                return RETURN_DOM ? null : '';
            }
        }

        /* Remove first element node (ours) if FORCE_BODY is set */
        if (FORCE_BODY) {
            _forceRemove(body.firstChild);
        }

        /* Get node iterator */
        nodeIterator = _createIterator(body);

        /* Now start iterating over the created document */
        while ( (currentNode = nodeIterator.nextNode()) ) {

            /* Fix IE's strange behavior with manipulated textNodes #89 */
            if (currentNode.nodeType === 3 && currentNode === oldNode) {
                continue;
            }

            /* Sanitize tags and elements */
            if (_sanitizeElements(currentNode)) {
                continue;
            }

            /* Shadow DOM detected, sanitize it */
            if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
            }

            /* Check attributes, sanitize if necessary */
            _sanitizeAttributes(currentNode);

            oldNode = currentNode;
        }

        /* Return sanitized string or DOM */
        if (RETURN_DOM) {

            if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);

                while (body.firstChild) {
                    returnNode.appendChild(body.firstChild);
                }
            } else {
                returnNode = body;
            }

            if (RETURN_DOM_IMPORT) {
                /* adoptNode() is not used because internal state is not reset
                   (e.g. the past names map of a HTMLFormElement), this is safe
                   in theory but we would rather not risk another attack vector.
                   The state that is cloned by importNode() is explicitly defined
                   by the specs. */
                returnNode = importNode.call(originalDocument, returnNode, true);
            }

            return returnNode;
        }

        return WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    };

    /**
     * addHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint
     * @param {Function} hookFunction
     */
    DOMPurify.addHook = function(entryPoint, hookFunction) {
        if (typeof hookFunction !== 'function') { return; }
        hooks[entryPoint] = hooks[entryPoint] || [];
        hooks[entryPoint].push(hookFunction);
    };

    /**
     * removeHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint
     * @return void
     */
    DOMPurify.removeHook = function(entryPoint) {
        if (hooks[entryPoint]) {
            hooks[entryPoint].pop();
        }
    };

    /**
     * removeHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint
     * @return void
     */
    DOMPurify.removeHooks = function(entryPoint) {
        if (hooks[entryPoint]) {
            hooks[entryPoint] = [];
        }
    };

    /**
     * removeAllHooks
     * Public method to remove all DOMPurify hooks
     *
     * @return void
     */
    DOMPurify.removeAllHooks = function() {
        hooks = {};
    };

    return DOMPurify;
}));


/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Label = __webpack_require__(1036);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Label2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dompurify = __webpack_require__(1032);

var _dompurify2 = _interopRequireDefault(_dompurify);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1037);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(Label, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function Label(props) {
    (0, _classCallCheck3.default)(this, Label);
    return (0, _possibleConstructorReturn3.default)(this, (Label.__proto__ || (0, _getPrototypeOf2.default)(Label)).call(this, props));
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(Label, [{
    key: 'render',
    value: function render() {

      var classNames = ['label-container'].concat((0, _toConsumableArray3.default)(this.props.className.split(' ')));

      var style = {
        width: this.props.textAlign === 'center' ? '100%' : '',
        textAlign: this.props.textAlign
      };

      return _react2.default.createElement(
        'div',
        { className: classNames.join(' '),
          style: style },
        _react2.default.createElement(
          'p',
          null,
          _dompurify2.default.sanitize(this.props.text)
        )
      );
    }
  }]);
  return Label;
}(_react2.default.Component), _class.propTypes = {
  textAlign: _propTypes2.default.string,
  className: _propTypes2.default.string,
  text: _propTypes2.default.string }, _class.defaultProps = {
  textAlign: 'left',
  className: '',
  text: '' }, _temp);
exports.default = Label;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Label.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1023);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1023, function() {
			var newContent = __webpack_require__(1023);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(377),
    keys = __webpack_require__(1038);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 1044:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(1055),
    isFlattenable = __webpack_require__(1056);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _TreeDelegate = __webpack_require__(1085);

var _TreeDelegate2 = _interopRequireDefault(_TreeDelegate);

var _TreeNode = __webpack_require__(1086);

var _TreeNode2 = _interopRequireDefault(_TreeNode);

var _TreeView = __webpack_require__(1087);

var _TreeView2 = _interopRequireDefault(_TreeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    TreeDelegate: _TreeDelegate2.default,
    TreeNode: _TreeNode2.default,
    TreeView: _TreeView2.default
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1053:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(1044),
    baseOrderBy = __webpack_require__(1061),
    baseRest = __webpack_require__(380),
    isIterateeCall = __webpack_require__(382);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 1056:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(219),
    isArguments = __webpack_require__(220),
    isArray = __webpack_require__(217);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(1043),
    createBaseEach = __webpack_require__(1065);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(1059),
    isArrayLike = __webpack_require__(133);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(1052),
    baseIteratee = __webpack_require__(1045),
    baseMap = __webpack_require__(1060),
    baseSortBy = __webpack_require__(1062),
    baseUnary = __webpack_require__(381),
    compareMultiple = __webpack_require__(1064),
    identity = __webpack_require__(221);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 1062:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(1042);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(1063);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(133);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".menuItem > span {\n  pointer-events: none;\n  margin-left: -10px;\n  margin-right: 5px; }\n", ""]);

// exports


/***/ }),

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter = __webpack_require__(372);

var _EventsEmitter2 = _interopRequireDefault(_EventsEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////////
var TreeDelegate = function (_EventsEmitter$Compos) {
  (0, _inherits3.default)(TreeDelegate, _EventsEmitter$Compos);

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////
  function TreeDelegate(container, contextMenu) {
    (0, _classCallCheck3.default)(this, TreeDelegate);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TreeDelegate.__proto__ || (0, _getPrototypeOf2.default)(TreeDelegate)).call(this));

    _this.contextMenu = contextMenu;

    _this.container = container;

    _this.clickTimeout = 0;
    return _this;
  }

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(TreeDelegate, [{
    key: 'getTreeNodeId',
    value: function getTreeNodeId(node) {

      return node.id;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'isTreeNodeGroup',
    value: function isTreeNodeGroup(node) {

      return node.group;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeIconClick',
    value: function onTreeNodeIconClick(tree, node, event) {
      var _this2 = this;

      clearTimeout(this.clickTimeout);

      this.clickTimeout = setTimeout(function () {

        _this2.emit('node.iconClick', node);

        !tree.isCollapsed(node) ? node.collapse() : node.expand();
      }, 200);
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'nodeClickSelector',
    value: function nodeClickSelector(event) {

      var selector = ['HEADER', 'LABEL'];

      return selector.indexOf(event.target.nodeName) > -1;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeClick',
    value: function onTreeNodeClick(tree, node, event) {
      var _this3 = this;

      if (this.nodeClickSelector(event)) {

        clearTimeout(this.clickTimeout);

        this.clickTimeout = setTimeout(function () {

          _this3.emit('node.click', node);

          !tree.isCollapsed(node) ? node.collapse() : node.expand();
        }, 200);
      }
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeDoubleClick',
    value: function onTreeNodeDoubleClick(tree, node, event) {

      if (this.nodeClickSelector(event)) {

        clearTimeout(this.clickTimeout);

        this.emit('node.dblClick', node);
      }
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeRightClick',
    value: function onTreeNodeRightClick(tree, node, event) {

      event.stopPropagation();
      event.preventDefault();

      if (this.nodeClickSelector(event)) {

        this.contextMenu.show(event, node);
      }
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'getTreeNodeLabel',
    value: function getTreeNodeLabel(node) {

      return node.name;
    }
  }]);
  return TreeDelegate;
}(_EventsEmitter2.default.Composer(Autodesk.Viewing.UI.TreeDelegate));

exports.default = TreeDelegate;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TreeDelegate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter2 = __webpack_require__(372);

var _EventsEmitter3 = _interopRequireDefault(_EventsEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////////
var TreeNode = function (_EventsEmitter) {
  (0, _inherits3.default)(TreeNode, _EventsEmitter);

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  function TreeNode(properties) {
    (0, _classCallCheck3.default)(this, TreeNode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TreeNode.__proto__ || (0, _getPrototypeOf2.default)(TreeNode)).call(this));

    (0, _assign2.default)(_this, properties);
    return _this;
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  (0, _createClass3.default)(TreeNode, [{
    key: 'destroy',
    value: function destroy() {}
  }]);
  return TreeNode;
}(_EventsEmitter3.default);

exports.default = TreeNode;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TreeNode.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter = __webpack_require__(372);

var _EventsEmitter2 = _interopRequireDefault(_EventsEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////////
var TreeView = function (_EventsEmitter$Compos) {
  (0, _inherits3.default)(TreeView, _EventsEmitter$Compos);

  function TreeView() {
    (0, _classCallCheck3.default)(this, TreeView);
    return (0, _possibleConstructorReturn3.default)(this, (TreeView.__proto__ || (0, _getPrototypeOf2.default)(TreeView)).apply(this, arguments));
  }

  (0, _createClass3.default)(TreeView, [{
    key: "setInputHandlers_",


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    value: function setInputHandlers_() {

      var tree = this;
      var rootElem = this.myRootContainer;

      var NODE_NOT_FOUND = null;

      var getNodeFromElement = function getNodeFromElement(eventTarget) {

        var ret = null;
        var found = false;

        do {
          if (!eventTarget || eventTarget === rootElem) {
            ret = null;
            found = true; // not found
          } else if (eventTarget.hasAttribute("lmv-nodeId")) {
            ret = eventTarget;
            found = true;
          } else {
            eventTarget = eventTarget.parentElement;
          }
        } while (!found);

        if (ret) {
          var nodeId = ret.getAttribute("lmv-nodeId");
          return tree.nodeIdToNode[nodeId] || NODE_NOT_FOUND;
        }
        return NODE_NOT_FOUND;
      };

      if (av.isTouchDevice()) {

        this.hammer = new Hammer.Manager(rootElem, {
          recognizers: [[Hammer.Tap, {
            event: 'doubletap',
            taps: 2,
            interval: 400,
            threshold: 6,
            posThreshold: 30
          }], [Hammer.Press, {
            event: 'press',
            time: 500
          }]],
          inputClass: Hammer.TouchInput
        });

        this.hammer.on("doubletap", function (event) {

          var node = getNodeFromElement(event.target);
          if (node === NODE_NOT_FOUND) return;
          tree.myDelegate.onTreeNodeDoubleClick(tree, node, event);
        });

        this.hammer.on('press', function (event) {

          var node = getNodeFromElement(event.target);
          if (node === NODE_NOT_FOUND) return;
          tree.myDelegate.onTreeNodeRightClick(tree, node, event);
        });
      }

      rootElem.addEventListener('click', function (event) {

        var node = getNodeFromElement(event.target);

        if (node === NODE_NOT_FOUND) return;

        tree.myDelegate.onTreeNodeClick(tree, node, event);

        if (!event.target.classList.contains('propertyLink')) {
          event.preventDefault();
        }
      }, false);

      rootElem.addEventListener('dblclick', function (event) {

        var node = getNodeFromElement(event.target);

        if (node === NODE_NOT_FOUND) return;

        tree.myDelegate.onTreeNodeDoubleClick(tree, node, event);

        event.stopPropagation();
        event.preventDefault();
      }, false);

      rootElem.addEventListener('contextmenu', function (event) {

        var node = getNodeFromElement(event.target);

        if (node === NODE_NOT_FOUND) return;

        tree.myDelegate.onTreeNodeRightClick(tree, node, event);

        event.stopPropagation();
        event.preventDefault();
      }, false);

      rootElem.addEventListener('mouseover', function (event) {

        var node = getNodeFromElement(event.target);

        if (node === NODE_NOT_FOUND) return;

        tree.myDelegate.onTreeNodeHover(tree, node, event);

        event.stopPropagation();
        event.preventDefault();
      }, false);

      rootElem.addEventListener('mouseout', function (event) {
        // When the mouse leaves the element,
        // set node to -1 (background), no highlight,
        var node = -1;

        tree.myDelegate.onTreeNodeHover(tree, node, event);

        event.stopPropagation();
        event.preventDefault();
      }, false);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: "getNodeById",
    value: function getNodeById(nodeId) {

      return this.nodeIdToNode[nodeId];
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: "destroyNode",
    value: function destroyNode(nodeId) {

      if (this.nodeIdToNode[nodeId]) {

        delete this.nodeIdToNode[nodeId];

        this.nodeIdToNode[nodeId] = null;
      }

      if (this.nodeToElement[nodeId]) {

        this.nodeToElement[nodeId].remove();

        delete this.nodeToElement[nodeId];

        this.nodeToElement[nodeId] = null;
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: "destroy",
    value: function destroy() {

      this.clear();

      this.myRootContainer.remove();
    }
  }]);
  return TreeView;
}(_EventsEmitter2.default.Composer(Autodesk.Viewing.UI.Tree));

exports.default = TreeView;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TreeView.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-chasing-dots {\n  width: 27px;\n  height: 27px;\n  position: relative;\n\n  -webkit-animation: sk-rotate 2.0s infinite linear;\n  animation: sk-rotate 2.0s infinite linear;\n}\n\n.sk-dot1, .sk-dot2 {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  background-color: #333;\n  border-radius: 100%;\n\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.sk-dot2 {\n  top: auto;\n  bottom: 0px;\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n@keyframes sk-rotate {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% { -webkit-transform: scale(0.0) }\n  50% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 50% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-circle-wrapper {\n  width: 22px;\n  height: 22px;\n  position: relative;\n}\n\n.sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 20%;\n  height: 20%;\n  background-color: #333;\n\n  border-radius: 100%;\n  -webkit-animation: sk-bouncedelay 1.2s infinite ease-in-out;\n  animation: sk-bouncedelay 1.2s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.sk-circle2  { -webkit-transform: rotate(30deg);  transform: rotate(30deg)  }\n.sk-circle3  { -webkit-transform: rotate(60deg);  transform: rotate(60deg)  }\n.sk-circle4  { -webkit-transform: rotate(90deg);  transform: rotate(90deg)  }\n.sk-circle5  { -webkit-transform: rotate(120deg); transform: rotate(120deg) }\n.sk-circle6  { -webkit-transform: rotate(150deg); transform: rotate(150deg) }\n.sk-circle7  { -webkit-transform: rotate(180deg); transform: rotate(180deg) }\n.sk-circle8  { -webkit-transform: rotate(210deg); transform: rotate(210deg) }\n.sk-circle9  { -webkit-transform: rotate(240deg); transform: rotate(240deg) }\n.sk-circle10 { -webkit-transform: rotate(270deg); transform: rotate(270deg) }\n.sk-circle11 { -webkit-transform: rotate(300deg); transform: rotate(300deg) }\n.sk-circle12 { -webkit-transform: rotate(330deg); transform: rotate(330deg) }\n\n.sk-circle2:before  { -webkit-animation-delay: -1.1s; animation-delay: -1.1s }\n.sk-circle3:before  { -webkit-animation-delay: -1.0s; animation-delay: -1.0s }\n.sk-circle4:before  { -webkit-animation-delay: -0.9s; animation-delay: -0.9s }\n.sk-circle5:before  { -webkit-animation-delay: -0.8s; animation-delay: -0.8s }\n.sk-circle6:before  { -webkit-animation-delay: -0.7s; animation-delay: -0.7s }\n.sk-circle7:before  { -webkit-animation-delay: -0.6s; animation-delay: -0.6s }\n.sk-circle8:before  { -webkit-animation-delay: -0.5s; animation-delay: -0.5s }\n.sk-circle9:before  { -webkit-animation-delay: -0.4s; animation-delay: -0.4s }\n.sk-circle10:before { -webkit-animation-delay: -0.3s; animation-delay: -0.3s }\n.sk-circle11:before { -webkit-animation-delay: -0.2s; animation-delay: -0.2s }\n.sk-circle12:before { -webkit-animation-delay: -0.1s; animation-delay: -0.1s }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% { -webkit-transform: scale(0.0) }\n  40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0.0);\n    transform: scale(0.0);\n  } 40% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-cube-grid {\n  width:27px;\n  height:27px;\n}\n\n.sk-cube {\n  width:33%;\n  height:33%;\n  background:#333;\n  float:left;\n  -webkit-animation: sk-scaleDelay 1.3s infinite ease-in-out;\n  animation: sk-scaleDelay 1.3s infinite ease-in-out;\n}\n\n/*\n * Spinner positions\n * 1 2 3\n * 4 5 6\n * 7 8 9\n */\n\n.sk-spinner .sk-cube:nth-child(1) { -webkit-animation-delay: 0.2s; animation-delay: 0.2s  }\n.sk-spinner .sk-cube:nth-child(2) { -webkit-animation-delay: 0.3s; animation-delay: 0.3s  }\n.sk-spinner .sk-cube:nth-child(3) { -webkit-animation-delay: 0.4s; animation-delay: 0.4s  }\n.sk-spinner .sk-cube:nth-child(4) { -webkit-animation-delay: 0.1s; animation-delay: 0.1s  }\n.sk-spinner .sk-cube:nth-child(5) { -webkit-animation-delay: 0.2s; animation-delay: 0.2s  }\n.sk-spinner .sk-cube:nth-child(6) { -webkit-animation-delay: 0.3s; animation-delay: 0.3s  }\n.sk-spinner .sk-cube:nth-child(7) { -webkit-animation-delay: 0.0s; animation-delay: 0.0s  }\n.sk-spinner .sk-cube:nth-child(8) { -webkit-animation-delay: 0.1s; animation-delay: 0.1s  }\n.sk-spinner .sk-cube:nth-child(9) { -webkit-animation-delay: 0.2s; animation-delay: 0.2s  }\n\n@-webkit-keyframes sk-scaleDelay {\n  0%, 70%, 100% { -webkit-transform:scale3D(1.0, 1.0, 1.0) }\n  35%           { -webkit-transform:scale3D(0.0, 0.0, 1.0) }\n}\n\n@keyframes sk-scaleDelay {\n  0%, 70%, 100% { -webkit-transform:scale3D(1.0, 1.0, 1.0); transform:scale3D(1.0, 1.0, 1.0) }\n  35%           { -webkit-transform:scale3D(1.0, 1.0, 1.0); transform:scale3D(0.0, 0.0, 1.0) }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-double-bounce {\n  width: 27px;\n  height: 27px;\n\n  position: relative;\n}\n\n.sk-double-bounce1, .sk-double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.sk-double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% { -webkit-transform: scale(0.0) }\n  50% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 50% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes sk-fade-in {\n  0% {\n      opacity: 0;\n  }\n  50% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n  }\n}\n\n@keyframes sk-fade-in {\n  0% {\n      opacity: 0;\n  }\n  50% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n  }\n}\n\n.sk-fade-in {\n  -webkit-animation: sk-fade-in 2s;\n  -moz-animation: sk-fade-in 2s;\n  -o-animation: sk-fade-in 2s;\n  -ms-animation: sk-fade-in 2s;\n}\n", ""]);

// exports


/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-folding-cube {\n  width: 27px;\n  height: 27px;\n  position: relative;\n  -webkit-transform: rotateZ(45deg);\n          transform: rotateZ(45deg);\n}\n\n.sk-folding-cube .sk-cube {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); \n}\n.sk-folding-cube .sk-cube:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333;\n  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n          animation: sk-foldCubeAngle 2.4s infinite linear both;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n.sk-folding-cube .sk-cube2 {\n  -webkit-transform: scale(1.1) rotateZ(90deg);\n          transform: scale(1.1) rotateZ(90deg);\n}\n.sk-folding-cube .sk-cube3 {\n  -webkit-transform: scale(1.1) rotateZ(180deg);\n          transform: scale(1.1) rotateZ(180deg);\n}\n.sk-folding-cube .sk-cube4 {\n  -webkit-transform: scale(1.1) rotateZ(270deg);\n          transform: scale(1.1) rotateZ(270deg);\n}\n.sk-folding-cube .sk-cube2:before {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.sk-folding-cube .sk-cube3:before {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s; \n}\n.sk-folding-cube .sk-cube4:before {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n}\n@-webkit-keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; \n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; \n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; \n  } \n}\n\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; \n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; \n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; \n  }\n}\n", ""]);

// exports


/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-pulse {\n  width: 27px;\n  height: 27px;\n  background-color: #333;\n\n  border-radius: 100%;\n  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n  animation: sk-scaleout 1.0s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-scaleout {\n  0% { -webkit-transform: scale(0.0) }\n  100% {\n    -webkit-transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\n@keyframes sk-scaleout {\n  0% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 100% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-rotating-plane {\n  width: 27px;\n  height: 27px;\n  background-color: #333;\n\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n  animation: sk-rotateplane 1.2s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-rotateplane {\n  0% { -webkit-transform: perspective(120px) }\n  50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n}\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  } 50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  } 100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-three-bounce > div {\n  width: 18px;\n  height: 18px;\n  background-color: #333;\n\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.sk-three-bounce .sk-bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.sk-three-bounce .sk-bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% { -webkit-transform: scale(0.0) }\n  40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 40% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-wandering-cubes {\n  width: 27px;\n  height: 27px;\n  position: relative;\n}\n\n.sk-cube1, .sk-cube2 {\n  background-color: #333;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n  animation: sk-cubemove 1.8s infinite ease-in-out;\n}\n\n.sk-cube2 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-cubemove {\n  25% { -webkit-transform: translateX(22px) rotate(-90deg) scale(0.5) }\n  50% { -webkit-transform: translateX(22px) translateY(22px) rotate(-180deg) }\n  75% { -webkit-transform: translateX(0px) translateY(22px) rotate(-270deg) scale(0.5) }\n  100% { -webkit-transform: rotate(-360deg) }\n}\n\n@keyframes sk-cubemove {\n  25% {\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n  } 50% {\n    /* Hack to make FF rotate in the right direction */\n    transform: translateX(42px) translateY(42px) rotate(-179deg);\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n  } 50.1% {\n    transform: translateX(42px) translateY(42px) rotate(-180deg);\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n  } 75% {\n    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n  } 100% {\n    transform: rotate(-360deg);\n    -webkit-transform: rotate(-360deg);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-wave {\n  width: 50px;\n  height: 27px;\n}\n\n.sk-wave > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n\n.sk-wave .sk-rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.sk-wave .sk-rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n.sk-wave .sk-rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.sk-wave .sk-rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n  20% { -webkit-transform: scaleY(1.0) }\n}\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  } 20% {\n    transform: scaleY(1.0);\n    -webkit-transform: scaleY(1.0);\n  }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".sk-wordpress {\n  background: #333;\n  width: 27px;\n  height: 27px;\n  display: inline-block;\n  border-radius: 27px;\n  position: relative;\n  -webkit-animation: sk-inner-circle 1s linear infinite;\n  animation: sk-inner-circle 1s linear infinite;\n}\n\n.sk-inner-circle {\n  display: block;\n  background: #fff;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  border-radius: 8px;\n  top: 5px;\n  left: 5px;\n}\n\n@-webkit-keyframes sk-inner-circle {\n  0% { -webkit-transform: rotate(0); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes sk-inner-circle {\n  0% { transform: rotate(0); -webkit-transform:rotate(0); }\n  100% { transform: rotate(360deg); -webkit-transform:rotate(360deg); }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".metatree-container {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-align: left;\n  height: 100%; }\n  .metatree-container .treeview group {\n    width: 100%; }\n  .metatree-container .treeview lmvheader {\n    transition-property: background, border;\n    transition-timing-function: ease;\n    transition-duration: 1.5s;\n    transition-delay: 0.0s;\n    background: rgba(245, 245, 245, 0.5);\n    margin-bottom: -4px;\n    border: none;\n    height: 30px; }\n  .metatree-container .treeview lmvheader.root {\n    width: calc(100% - 2px); }\n  .metatree-container .treeview lmvheader.category {\n    width: calc(100% - 2px); }\n  .metatree-container .treeview lmvheader.property {\n    width: calc(100% - 25px); }\n  .metatree-container .treeview lmvheader:hover {\n    background: rgba(0, 105, 245, 0.35); }\n  .metatree-container .treeview group > lmvheader.root {\n    background-color: #d8d8d8 !important; }\n  .metatree-container .treeview group > lmvheader.category {\n    background-color: #e6e6e6 !important;\n    padding: 6px; }\n  .metatree-container .treeview group > lmvheader > icon {\n    height: 20px;\n    float: left; }\n  .metatree-container .treeview lmvheader.root .treenode-container {\n    width: calc(100% - 22px);\n    overflow: hidden;\n    float: left; }\n  .metatree-container .treeview lmvheader.category .treenode-container {\n    width: calc(100% - 46px);\n    pointer-events: none;\n    overflow: hidden;\n    float: left; }\n  .metatree-container .treenode {\n    float: left; }\n  .metatree-container .treeview lmvheader.property {\n    padding: 0px; }\n  .metatree-container .treeview lmvheader.property .treenode {\n    width: 100%; }\n  .metatree-container .treeview lmvheader.property .treenode .separator {\n    background: white;\n    height: 30px;\n    float: left;\n    width: 1px; }\n  .metatree-container .treeview lmvheader.property .treenode .meta-value, .metatree-container .treeview lmvheader.property .treenode .meta-name {\n    padding: 6px;\n    width: 49%; }\n    .metatree-container .treeview lmvheader.property .treenode .meta-value p, .metatree-container .treeview lmvheader.property .treenode .meta-name p {\n      pointer-events: none; }\n  .metatree-container .treeview lmvheader.property .treenode .meta-link, .metatree-container .treeview lmvheader.property .treenode .meta-file {\n    position: relative;\n    overflow: hidden;\n    font-size: 100%;\n    color: #343434;\n    height: 100%;\n    float: left; }\n  .metatree-container .treeview lmvheader:hover.property .treenode .meta-value.editable {\n    width: calc(50% - 50px); }\n  .metatree-container .treeview lmvheader.property .treenode span {\n    transition-timing-function: ease;\n    transition-property: color;\n    transition-duration: 1.0s;\n    transition-delay: 0.0s;\n    position: relative;\n    margin: 0 8px 0 0;\n    font-size: 20px;\n    color: #fafafa;\n    display: none;\n    top: 4px; }\n  .metatree-container .treeview lmvheader.property .treenode span.fa-edit {\n    position: relative;\n    top: 6px; }\n  .metatree-container .treeview lmvheader:hover.property .treenode span {\n    color: rgba(47, 47, 47, 0.6);\n    display: inline; }\n  .metatree-container .treeview lmvheader:hover.property .treenode span:hover {\n    color: #FF9800; }\n  .metatree-container .treenode .switch-container {\n    border: 1px solid #9c9c9c;\n    border-radius: 12px;\n    margin: 0 8px 0 2px;\n    float: left; }\n", ""]);

// exports


/***/ }),

/***/ 1250:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, $) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(1268);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContextMenu = function (_Autodesk$Viewing$Pri) {
  (0, _inherits3.default)(ContextMenu, _Autodesk$Viewing$Pri);

  function ContextMenu(opts) {
    (0, _classCallCheck3.default)(this, ContextMenu);
    return (0, _possibleConstructorReturn3.default)(this, (ContextMenu.__proto__ || (0, _getPrototypeOf2.default)(ContextMenu)).call(this, opts));
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////


  (0, _createClass3.default)(ContextMenu, [{
    key: "show",
    value: function show(event, menu) {

      var viewport = this.viewer.container.getBoundingClientRect();

      // Normalize Hammer events
      if (Array.isArray(event.changedPointers) && event.changedPointers.length > 0) {
        event.clientX = event.changedPointers[0].clientX;
        event.clientY = event.changedPointers[0].clientY;
      }

      var x = event.clientX - viewport.left;
      var y = event.clientY - viewport.top;

      if (!this.open) {

        var self = this;

        this.showMenu(menu, x, y);
        this.open = true;
        this.hideEventListener = function (event) {
          if (event.target.className !== "menuItem") {
            self.hide(event);
          }
        };

        this.isTouch = event.type === "press";

        document.body.addEventListener(this.isTouch ? "touchstart" : "mousedown", this.hideEventListener, true);
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "showMenu",
    value: function showMenu(menu, x, y) {

      var container = document.createElement('div'),
          menuItem,
          submenus = [];

      container.className = 'menu';
      this.viewer.container.appendChild(container);
      this.menus.push(container);

      for (var i = 0; i < menu.length; ++i) {

        var defn = menu[i],
            target = defn.target;

        menuItem = this.createMenuItem(container, defn);

        if (typeof target === 'function') {
          this.addCallbackToMenuItem(menuItem, target);
        } else if (Array.isArray(target)) {
          submenus.push({ menuItem: menuItem, target: target });
        } else {
          console.warn("Invalid context menu option:", title, target);
        }
      }

      var rect = container.getBoundingClientRect(),
          containerWidth = rect.width,
          containerHeight = rect.height,
          viewerRect = this.viewer.container.getBoundingClientRect(),
          viewerWidth = viewerRect.width,
          viewerHeight = viewerRect.height,
          shiftLeft = isTouchDevice() && !this.viewer.navigation.getUseLeftHandedInput();

      if (shiftLeft) {
        x -= containerWidth;
      }

      if (x < 0) {
        x = 0;
      }
      if (viewerWidth < x + containerWidth) {
        x = viewerWidth - containerWidth;
        if (x < 0) {
          x = 0;
        }
      }

      if (y < 0) {
        y = 0;
      }
      if (viewerHeight < y + containerHeight) {
        y = viewerHeight - containerHeight;
        if (y < 0) {
          y = 0;
        }
      }

      container.style.top = Math.round(y) + "px";
      container.style.left = Math.round(x) + "px";

      for (i = 0; i < submenus.length; ++i) {
        var submenu = submenus[i];

        menuItem = submenu.menuItem;
        rect = menuItem.getBoundingClientRect();
        x = Math.round((shiftLeft ? rect.left : rect.right) - viewerRect.left);
        y = Math.round(rect.top - viewerRect.top);

        this.addSubmenuCallbackToMenuItem(menuItem, submenu.target, x, y);
      }
    }

    /////////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////////

  }, {
    key: "createMenuItem",
    value: function createMenuItem(parentItem, menuItemDef) {

      var menuItemId = this.guid();

      var text = menuItemDef.title;

      $(parentItem).append("\n      <div id=\"" + menuItemId + "\" class=\"menuItem\" data-i18n=" + text + ">\n        <span class=\"" + (menuItemDef.className || '') + "\">\n        </span>\n        " + Autodesk.Viewing.i18n.translate(text) + "\n      </div>\n    ");

      return document.getElementById(menuItemId);
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: "hide",
    value: function hide() {

      if (this.open) {
        for (var index = 0; index < this.menus.length; ++index) {
          if (this.menus[index]) {
            this.menus[index].parentNode.removeChild(this.menus[index]);
          }
        }
        this.menus = [];
        this.open = false;

        document.body.removeEventListener(this.isTouch ? "touchstart" : "mousedown", this.hideEventListener);

        this.isTouch = false;
        return true;
      }
      return false;
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: "guid",
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxx';


      var d = new Date().getTime();

      var guid = format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });

      return guid;
    }
  }]);
  return ContextMenu;
}(Autodesk.Viewing.Private.ContextMenu); /////////////////////////////////////////////////////////////
// ContextMenu
//
/////////////////////////////////////////////////////////////


exports.default = ContextMenu;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ContextMenu.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(31)))

/***/ }),

/***/ 1251:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ContextMenu = __webpack_require__(1250);

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ContextMenu2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1268:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1074);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1074, function() {
			var newContent = __webpack_require__(1074);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = __webpack_require__(19);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

__webpack_require__(1324);

__webpack_require__(1320);

__webpack_require__(1321);

__webpack_require__(1322);

__webpack_require__(1323);

__webpack_require__(1325);

__webpack_require__(1326);

__webpack_require__(1327);

__webpack_require__(1328);

__webpack_require__(1329);

__webpack_require__(1330);

__webpack_require__(1331);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line import/no-extraneous-dependencies


var Spinner = function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner(props) {
    _classCallCheck(this, Spinner);

    var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, props));

    _this.displayName = 'SpinKit';
    return _this;
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _cx;

      var classes = (0, _classnames2.default)((_cx = {
        'sk-fade-in': !this.props.noFadeIn,
        'sk-spinner': this.props.overrideSpinnerClassName === ''
      }, _defineProperty(_cx, this.props.overrideSpinnerClassName, !!this.props.overrideSpinnerClassName), _defineProperty(_cx, this.props.className, !!this.props.className), _cx));

      var props = (0, _objectAssign2.default)({}, this.props);
      delete props.spinnerName;
      delete props.noFadeIn;
      delete props.overrideSpinnerClassName;
      delete props.className;

      var spinnerEl = void 0;
      switch (this.props.spinnerName) {
        case 'double-bounce':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-double-bounce ' + classes }),
            _react2.default.createElement('div', { className: 'sk-double-bounce1' }),
            _react2.default.createElement('div', { className: 'sk-double-bounce2' })
          );
          break;
        case 'rotating-plane':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: classes }),
            _react2.default.createElement('div', { className: 'sk-rotating-plane' })
          );
          break;
        case 'wave':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-wave ' + classes }),
            _react2.default.createElement('div', { className: 'sk-rect1' }),
            _react2.default.createElement('div', { className: 'sk-rect2' }),
            _react2.default.createElement('div', { className: 'sk-rect3' }),
            _react2.default.createElement('div', { className: 'sk-rect4' }),
            _react2.default.createElement('div', { className: 'sk-rect5' })
          );
          break;
        case 'wandering-cubes':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-wandering-cubes ' + classes }),
            _react2.default.createElement('div', { className: 'sk-cube1' }),
            _react2.default.createElement('div', { className: 'sk-cube2' })
          );
          break;
        case 'pulse':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: classes }),
            _react2.default.createElement('div', { className: 'sk-pulse' })
          );
          break;
        case 'chasing-dots':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: classes }),
            _react2.default.createElement(
              'div',
              { className: 'sk-chasing-dots' },
              _react2.default.createElement('div', { className: 'sk-dot1' }),
              _react2.default.createElement('div', { className: 'sk-dot2' })
            )
          );
          break;
        case 'circle':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-circle-wrapper ' + classes }),
            _react2.default.createElement('div', { className: 'sk-circle1 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle2 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle3 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle4 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle5 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle6 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle7 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle8 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle9 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle10 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle11 sk-circle' }),
            _react2.default.createElement('div', { className: 'sk-circle12 sk-circle' })
          );
          break;
        case 'cube-grid':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-cube-grid ' + classes }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' })
          );
          break;
        case 'folding-cube':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-folding-cube ' + classes }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' }),
            _react2.default.createElement('div', { className: 'sk-cube' })
          );
          break;
        case 'wordpress':
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: classes }),
            _react2.default.createElement(
              'div',
              { className: 'sk-wordpress' },
              _react2.default.createElement('div', { className: 'sk-inner-circle' })
            )
          );
          break;
        case 'three-bounce':
        default:
          spinnerEl = _react2.default.createElement(
            'div',
            _extends({}, props, { className: 'sk-three-bounce ' + classes }),
            _react2.default.createElement('div', { className: 'sk-bounce1' }),
            _react2.default.createElement('div', { className: 'sk-bounce2' }),
            _react2.default.createElement('div', { className: 'sk-bounce3' })
          );
      }
      return spinnerEl;
    }
  }]);

  return Spinner;
}(_react2.default.Component);

Spinner.propTypes = {
  spinnerName: _propTypes2.default.string.isRequired,
  noFadeIn: _propTypes2.default.bool,
  overrideSpinnerClassName: _propTypes2.default.string,
  className: _propTypes2.default.string
};

Spinner.defaultProps = {
  spinnerName: 'sk-three-bounce',
  noFadeIn: false,
  overrideSpinnerClassName: ''
};

module.exports = Spinner;

/***/ }),

/***/ 1320:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1097);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1097, function() {
			var newContent = __webpack_require__(1097);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1321:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1098);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1098, function() {
			var newContent = __webpack_require__(1098);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1099);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1099, function() {
			var newContent = __webpack_require__(1099);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1323:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1100);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1100, function() {
			var newContent = __webpack_require__(1100);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1324:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1101);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1101, function() {
			var newContent = __webpack_require__(1101);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1102);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1102, function() {
			var newContent = __webpack_require__(1102);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1326:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1103);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1103, function() {
			var newContent = __webpack_require__(1103);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1327:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1104);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1104, function() {
			var newContent = __webpack_require__(1104);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1328:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1105);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1105, function() {
			var newContent = __webpack_require__(1105);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1329:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1106);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1106, function() {
			var newContent = __webpack_require__(1106);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1330:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1107);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1107, function() {
			var newContent = __webpack_require__(1107);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1331:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1108);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1108, function() {
			var newContent = __webpack_require__(1108);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1334:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1178);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1178, function() {
			var newContent = __webpack_require__(1178);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1347:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MetaTreeView = __webpack_require__(1506);

var _MetaTreeView2 = _interopRequireDefault(_MetaTreeView);

__webpack_require__(1334);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MetaTreeView2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1503:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter = __webpack_require__(372);

var _EventsEmitter2 = _interopRequireDefault(_EventsEmitter);

var _ContextMenu = __webpack_require__(1251);

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaContextMenu = function (_EventsEmitter$Compos) {
  (0, _inherits3.default)(MetaContextMenu, _EventsEmitter$Compos);

  /////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////
  function MetaContextMenu(opts) {
    (0, _classCallCheck3.default)(this, MetaContextMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MetaContextMenu.__proto__ || (0, _getPrototypeOf2.default)(MetaContextMenu)).call(this, opts));

    _this.contextMenu = new _ContextMenu2.default(opts);
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MetaContextMenu, [{
    key: 'buildMenu',
    value: function buildMenu(event, node) {
      var _this2 = this;

      var menu = [{
        title: 'Edit property ...',
        className: 'fa fa-edit',
        target: function target() {
          _this2.emit('context.property.edit', node);
        }
      }, {
        title: 'Delete property',
        className: 'fa fa-times',
        target: function target() {
          _this2.emit('context.property.delete', node);
        }
      }];

      return menu;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'show',
    value: function show(event, node) {

      var menu = this.buildMenu(event, node);

      if (menu && 0 < menu.length) {

        this.contextMenu.show(event, menu);
      }
    }
  }]);
  return MetaContextMenu;
}(_EventsEmitter2.default.Composer(Autodesk.Viewing.UI.ObjectContextMenu));

exports.default = MetaContextMenu;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MetaContextMenu.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1504:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(215);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _MetaContextMenu = __webpack_require__(1503);

var _MetaContextMenu2 = _interopRequireDefault(_MetaContextMenu);

var _MetaTreeNode = __webpack_require__(1505);

var _MetaTreeNode2 = _interopRequireDefault(_MetaTreeNode);

var _TreeView = __webpack_require__(1049);

var _sortBy = __webpack_require__(1053);

var _sortBy2 = _interopRequireDefault(_sortBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaTreeDelegate = function (_TreeDelegate) {
  (0, _inherits3.default)(MetaTreeDelegate, _TreeDelegate);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function MetaTreeDelegate(menuContainer) {
    (0, _classCallCheck3.default)(this, MetaTreeDelegate);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MetaTreeDelegate.__proto__ || (0, _getPrototypeOf2.default)(MetaTreeDelegate)).call(this));

    _this.contextMenu = new _MetaContextMenu2.default({
      container: menuContainer
    });

    _this.contextMenu.on('context.property.delete', function (node) {

      _this.onDeleteProperty(node);
    });

    _this.contextMenu.on('context.property.edit', function (node) {

      _this.onEditProperty(node);
    });

    _this.on('node.dblClick', function (node) {

      _this.onEditProperty(node);
    });
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MetaTreeDelegate, [{
    key: 'onEditProperty',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(node) {
        var isModelOverride, newMetaProperty;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isModelOverride = !node.props.metaType;
                _context.next = 3;
                return this.emit('property.edit', node.toMetaProperty(), isModelOverride);

              case 3:
                newMetaProperty = _context.sent;


                if (newMetaProperty) {

                  this.emit('node.update', newMetaProperty);
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onEditProperty(_x) {
        return _ref.apply(this, arguments);
      }

      return onEditProperty;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onDeleteProperty',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(node) {
        var isModelOverride, deleted;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isModelOverride = !node.props.metaType;
                _context2.next = 3;
                return this.emit('property.delete', node.toMetaProperty(), isModelOverride);

              case 3:
                deleted = _context2.sent;


                if (deleted) {

                  this.emit('node.destroy', node.id);
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onDeleteProperty(_x2) {
        return _ref2.apply(this, arguments);
      }

      return onDeleteProperty;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'createRootNode',
    value: function createRootNode(data) {

      this.rootNode = new _MetaTreeNode2.default({
        displayName: data.displayName,
        externalId: data.externalId,
        dbId: data.dbId.toString(),
        component: data.component,
        propsMap: data.propsMap,
        delegate: this,
        parent: null,
        type: 'root',
        group: true,
        id: 'root'
      });

      return this.rootNode;
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'destroy',
    value: function destroy() {

      this.rootNode.destroy();
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'createTreeNode',
    value: function createTreeNode(node, parentDomElement) {

      var container = document.createElement('div');

      parentDomElement.appendChild(container);

      node.type.split('.').forEach(function (cls) {

        parentDomElement.classList.add(cls);
      });

      parentDomElement.classList.add('click-trigger');

      node.mount(container);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'nodeClickSelector',
    value: function nodeClickSelector(event) {

      var className = event.target.className;

      return className.toLowerCase().indexOf('click-trigger') > -1;
    }

    ///////////////////////////////////////////////////////////////////
    //
    //
    ///////////////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeRightClick',
    value: function onTreeNodeRightClick(tree, node, event) {

      if (node.type === 'property') {

        this.contextMenu.show(event, node);
      }
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'forEachChild',
    value: function forEachChild(node, addChild) {

      node.addChild = addChild;
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'mapPropsByCategory',
    value: function mapPropsByCategory(properties) {

      var propsMap = {};

      properties.forEach(function (prop) {

        var category = !!prop.displayCategory ? prop.displayCategory : 'Other';

        if (category.indexOf('__') !== 0) {

          propsMap[category] = propsMap[category] || [];

          propsMap[category].push(prop);
        }
      });

      // sort props by displayName in each category

      for (var category in propsMap) {

        propsMap[category] = (0, _sortBy2.default)(propsMap[category], function (prop) {
          return prop.displayName;
        });
      }

      return propsMap;
    }
  }]);
  return MetaTreeDelegate;
}(_TreeView.TreeDelegate);

exports.default = MetaTreeDelegate;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MetaTreeDelegate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(375);

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(216);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(215);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EventsEmitter2 = __webpack_require__(372);

var _EventsEmitter3 = _interopRequireDefault(_EventsEmitter2);

var _reactSpinkit = __webpack_require__(1318);

var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sortBy = __webpack_require__(1053);

var _sortBy2 = _interopRequireDefault(_sortBy);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Label = __webpack_require__(1034);

var _Label2 = _interopRequireDefault(_Label);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaTreeNode = function (_EventsEmitter) {
  (0, _inherits3.default)(MetaTreeNode, _EventsEmitter);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function MetaTreeNode(props) {
    (0, _classCallCheck3.default)(this, MetaTreeNode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MetaTreeNode.__proto__ || (0, _getPrototypeOf2.default)(MetaTreeNode)).call(this));

    _this.onModelDelete = _this.onModelDelete.bind(_this);
    _this.onModelEdit = _this.onModelEdit.bind(_this);
    _this.onExpand = _this.onExpand.bind(_this);
    _this.onDelete = _this.onDelete.bind(_this);
    _this.onEdit = _this.onEdit.bind(_this);

    _this.on('expand', _this.onExpand);

    _this.externalId = props.externalId;
    _this.component = props.component;
    _this.delegate = props.delegate;
    _this.parent = props.parent;
    _this.group = props.group;
    _this.type = props.type;
    _this.dbId = props.dbId;
    _this.id = props.id;

    _this.children = [];

    _this.props = props;
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MetaTreeNode, [{
    key: 'onExpand',
    value: function onExpand() {

      this.off('expand', this.onExpand);

      this.loadChildren();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'mount',
    value: function mount(domContainer) {

      domContainer.className = 'treenode-container';

      this.domContainer = domContainer;

      this.reactNode = _reactDom2.default.render(_react2.default.createElement(ReactTreeNode, this.props), this.domContainer);

      this.collapse();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'update',
    value: function update(metaProperty) {

      this.props = (0, _assign2.default)({}, this.props, metaProperty);

      this.reactNode = _reactDom2.default.render(_react2.default.createElement(ReactTreeNode, this.props), this.domContainer);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'destroy',
    value: function destroy() {

      if (this.children) {

        this.children.forEach(function (child) {

          child.destroy();
        });
      }

      _reactDom2.default.unmountComponentAtNode(this.domContainer);

      this.delegate.emit('node.destroy', this.id);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'expand',
    value: function expand() {

      var target = this.domContainer.parentElement.parentElement;

      target.classList.remove('collapsed');
      target.classList.add('expanded');

      this.expanded = true;

      this.emit('expand');
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'collapse',
    value: function collapse() {

      var target = this.domContainer.parentElement.parentElement;

      target.classList.remove('expanded');
      target.classList.add('collapsed');

      this.expanded = false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'toMetaProperty',
    value: function toMetaProperty() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;


      var baseProperty = (0, _assign2.default)({
        displayCategory: props.displayCategory,
        displayValue: props.displayValue,
        displayName: props.displayName,
        externalId: props.externalId,
        component: props.component,
        metaType: props.metaType,
        dbId: props.dbId,
        id: props.id
      }, props.isOverride ? {
        isOverride: true
      } : {});

      switch (props.metaType) {

        case 'Link':

          return (0, _assign2.default)({}, baseProperty, {
            link: props.link
          });

        case 'File':

          return (0, _assign2.default)({}, baseProperty, {
            filelink: props.filelink,
            filename: props.filename,
            filesize: props.filesize,
            fileId: props.fileId
          });

        case 'Double':
        case 'Text':
        case 'Int':

          return baseProperty;

        default:

          return (0, _assign2.default)({}, baseProperty, {
            displayCategory: props.displayCategory || 'Other',
            isOverride: true,
            metaType: 'Text'
          });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelEdit',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var metaProperty;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.delegate.emit('property.edit', this.toMetaProperty(props), true);

              case 2:
                metaProperty = _context.sent;


                if (metaProperty) {

                  this.delegate.emit('node.update', metaProperty);
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onModelEdit(_x2) {
        return _ref.apply(this, arguments);
      }

      return onModelEdit;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelDelete',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var metaProperty;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.delegate.emit('property.delete', this.toMetaProperty(props), true);

              case 2:
                metaProperty = _context2.sent;


                if (metaProperty) {

                  this.delegate.emit('node.destroy', metaProperty.id);
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onModelDelete(_x3) {
        return _ref2.apply(this, arguments);
      }

      return onModelDelete;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onEdit',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var metaProperty;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.delegate.emit('property.edit', this.toMetaProperty(props));

              case 2:
                metaProperty = _context3.sent;


                if (metaProperty) {

                  this.delegate.emit('node.update', metaProperty);
                }

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onEdit(_x4) {
        return _ref3.apply(this, arguments);
      }

      return onEdit;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onDelete',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
        var metaProperty;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.delegate.emit('property.delete', this.toMetaProperty(props));

              case 2:
                metaProperty = _context4.sent;


                if (metaProperty) {

                  this.delegate.emit('node.destroy', metaProperty.id);
                }

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onDelete(_x5) {
        return _ref4.apply(this, arguments);
      }

      return onDelete;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadChildren',
    value: function loadChildren() {
      var _this2 = this;

      switch (this.type) {

        case 'root':

          var categories = (0, _sortBy2.default)((0, _keys2.default)(this.props.propsMap), function (item) {
            return item;
          });

          this.children = categories.map(function (category) {

            var childNode = new MetaTreeNode({
              properties: _this2.props.propsMap[category],
              externalId: _this2.externalId,
              component: _this2.component,
              delegate: _this2.delegate,
              displayName: category,
              type: 'category',
              dbId: _this2.dbId,
              id: _this2.guid(),
              parent: _this2,
              group: true
            });

            _this2.addChild(childNode);

            childNode.expand();

            return childNode;
          });

          break;

        case 'category':

          this.children = this.props.properties.map(function (prop) {

            var fullProp = (0, _assign2.default)({}, prop, {
              onModelDelete: _this2.onModelDelete,
              onModelEdit: _this2.onModelEdit,
              externalId: _this2.externalId,
              id: prop.id || _this2.guid(),
              component: _this2.component,
              delegate: _this2.delegate,
              onDelete: _this2.onDelete,
              onEdit: _this2.onEdit,
              type: 'property',
              dbId: _this2.dbId,
              parent: _this2,
              group: false
            });

            var childNode = new MetaTreeNode(fullProp);

            _this2.addChild(childNode);

            return childNode;
          });
      }
    }
  }]);
  return MetaTreeNode;
}(_EventsEmitter3.default);

exports.default = MetaTreeNode;

var ReactTreeNode = function (_React$Component) {
  (0, _inherits3.default)(ReactTreeNode, _React$Component);

  function ReactTreeNode() {
    (0, _classCallCheck3.default)(this, ReactTreeNode);
    return (0, _possibleConstructorReturn3.default)(this, (ReactTreeNode.__proto__ || (0, _getPrototypeOf2.default)(ReactTreeNode)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReactTreeNode, [{
    key: 'renderModelProperty',


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    value: function renderModelProperty() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'treenode' },
        _react2.default.createElement(_Label2.default, { className: 'meta-name click-trigger',
          text: this.props.displayName
        }),
        _react2.default.createElement('div', { className: 'separator' }),
        _react2.default.createElement(_Label2.default, { className: 'meta-value editable',
          text: this.props.displayValue.toString()
        }),
        _react2.default.createElement('span', { className: 'fa fa-edit',
          onClick: function onClick() {
            _this4.props.onModelEdit(_this4.props);
          }
        }),
        _react2.default.createElement('span', { className: 'fa fa-times',
          onClick: function onClick() {
            _this4.props.onModelDelete(_this4.props);
          }
        })
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderTextProperty',
    value: function renderTextProperty() {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        { className: 'treenode' },
        _react2.default.createElement(_Label2.default, { className: 'meta-name click-trigger',
          text: this.props.displayName
        }),
        _react2.default.createElement('div', { className: 'separator' }),
        _react2.default.createElement(_Label2.default, { className: 'meta-value editable',
          text: this.props.displayValue.toString()
        }),
        _react2.default.createElement('span', { className: 'fa fa-edit',
          onClick: function onClick() {
            return _this5.props.onEdit(_this5.props);
          }
        }),
        _react2.default.createElement('span', { className: 'fa fa-times',
          onClick: function onClick() {
            return _this5.props.onDelete(_this5.props);
          }
        })
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderLinkProperty',
    value: function renderLinkProperty() {
      var _this6 = this;

      return _react2.default.createElement(
        'div',
        { className: 'treenode' },
        _react2.default.createElement(_Label2.default, { className: 'meta-name click-trigger',
          text: this.props.displayName
        }),
        _react2.default.createElement('div', { className: 'separator' }),
        _react2.default.createElement(
          'div',
          { className: 'meta-value meta-link editable' },
          _react2.default.createElement(
            'a',
            { target: '_blank', href: this.props.link,
              onClick: function onClick() {
                return _this6.onGoToLink(_this6.props.link);
              } },
            this.props.displayValue
          )
        ),
        _react2.default.createElement('span', { className: 'fa fa-edit',
          onClick: function onClick() {
            return _this6.props.onEdit(_this6.props);
          }
        }),
        _react2.default.createElement('span', { className: 'fa fa-times',
          onClick: function onClick() {
            return _this6.props.onDelete(_this6.props);
          }
        })
      );
    }
  }, {
    key: 'onGoToLink',
    value: function onGoToLink(href) {

      var a = document.createElement('a');

      a.target = '_blank';
      a.href = href;

      a.click();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderFileProperty',
    value: function renderFileProperty() {
      var _this7 = this;

      var displayLink = this.props.displayCategory + '/' + this.props.displayName + '/' + this.props.displayValue + '/' + this.props.filename;

      var spinnerStyle = {
        display: 'none'
      };

      return _react2.default.createElement(
        'div',
        { className: 'treenode' },
        _react2.default.createElement(_Label2.default, { className: 'meta-name click-trigger',
          text: this.props.displayName
        }),
        _react2.default.createElement('div', { className: 'separator' }),
        _react2.default.createElement(
          'div',
          { className: 'meta-value meta-file editable' },
          _react2.default.createElement(_reactSpinkit2.default, { spinnerName: 'cube-grid',
            style: spinnerStyle }),
          _react2.default.createElement(
            'a',
            { target: '_blank', href: displayLink,
              onClick: function onClick() {
                return _this7.onDownloadFile(_this7.props.filename, _this7.props.filelink);
              } },
            this.props.displayValue
          )
        ),
        _react2.default.createElement('span', { className: 'fa fa-edit',
          onClick: function onClick() {
            return _this7.props.onEdit(_this7.props);
          }
        }),
        _react2.default.createElement('span', { className: 'fa fa-times',
          onClick: function onClick() {
            return _this7.props.onDelete(_this7.props);
          }
        })
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onDownloadFile',
    value: function onDownloadFile(filename, href) {

      var a = document.createElement('a');

      a.download = filename;
      a.href = href;

      a.click();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderPropertyTreeNode',
    value: function renderPropertyTreeNode() {

      switch (this.props.metaType) {

        case 'File':
          return this.renderFileProperty();

        case 'Link':
          return this.renderLinkProperty();

        case 'Double':
        case 'Text':
        case 'Int':
          return this.renderTextProperty();

        default:
          return this.renderModelProperty();
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderDefaultTreeNode',
    value: function renderDefaultTreeNode() {

      return _react2.default.createElement(
        'div',
        { className: 'treenode' },
        _react2.default.createElement(_Label2.default, { text: this.props.displayName })
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      switch (this.props.type) {

        case 'property':
          return this.renderPropertyTreeNode();

        default:
          return this.renderDefaultTreeNode();
      }
    }
  }]);
  return ReactTreeNode;
}(_react2.default.Component);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MetaTreeNode.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1506:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(20);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _MetaTreeDelegate = __webpack_require__(1504);

var _MetaTreeDelegate2 = _interopRequireDefault(_MetaTreeDelegate);

var _TreeView = __webpack_require__(1049);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(1334);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MetaTreeView = function (_React$Component) {
  (0, _inherits3.default)(MetaTreeView, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function MetaTreeView(props) {
    (0, _classCallCheck3.default)(this, MetaTreeView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MetaTreeView.__proto__ || (0, _getPrototypeOf2.default)(MetaTreeView)).call(this, props));

    _this.delegate = new _MetaTreeDelegate2.default(props.menuContainer);

    _this.delegate.on('property.edit', function (metaProperty, isModelOverride) {

      if (_this.props.onEditProperty) {

        return _this.props.onEditProperty(metaProperty, isModelOverride);
      }
    });

    _this.delegate.on('property.delete', function (metaProperty, isModelOverride) {

      if (_this.props.onDeleteProperty) {

        return _this.props.onDeleteProperty(metaProperty, isModelOverride);
      }
    });

    _this.delegate.on('node.update', function (metaProperty) {

      var nodeId = metaProperty.id;

      var node = _this.tree.nodeIdToNode[nodeId];

      if (node) {

        node.update(metaProperty);
      }
    });

    _this.delegate.on('node.destroy', function (nodeId) {

      var node = _this.tree.nodeIdToNode[nodeId];

      if (node && node.parent) {

        node.parent.children = node.parent.children.filter(function (child) {
          return child.id !== nodeId;
        });

        node.parent.children.length ? _this.tree.destroyNode(nodeId) : node.parent.destroy();
      }
    });
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(MetaTreeView, [{
    key: 'loadTree',
    value: function loadTree(data) {

      var propsMap = this.delegate.mapPropsByCategory(data.properties);

      var rootNode = this.delegate.createRootNode({
        displayName: data.displayName,
        component: data.displayName,
        externalId: data.externalId,
        dbId: data.dbId,
        propsMap: propsMap
      });

      this.tree = new _TreeView.TreeView(this.delegate, rootNode, this.treeContainer, {
        excludeRoot: false
      });

      rootNode.expand();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.loadTree({
        displayName: this.props.displayName,
        properties: this.props.properties,
        externalId: this.props.externalId,
        component: this.props.displayName,
        dbId: this.props.dbId
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {

      return false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {

      if (props.guid !== this.props.guid) {

        this.delegate.destroy();

        this.tree.destroy();

        this.loadTree({
          displayName: props.displayName,
          properties: props.properties,
          externalId: props.externalId,
          component: props.displayName,
          dbId: props.dbId
        });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {

      this.delegate.destroy();

      this.tree.destroy();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      this.delegate.destroy();

      this.delegate.off();

      this.tree.destroy();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'metatree-container', ref: function ref(div) {
          return _this2.treeContainer = div;
        }
      });
    }
  }]);
  return MetaTreeView;
}(_react2.default.Component); //////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Philippe Leefsma 2016 - ADN/Developer Technical Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////


exports.default = MetaTreeView;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MetaTreeView.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

});
//# sourceMappingURL=17.js.map