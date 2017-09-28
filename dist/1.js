webpackJsonp([1],{

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

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(390),
    baseKeys = __webpack_require__(1206),
    isArrayLike = __webpack_require__(133);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 1040:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentEditable = function (_React$Component) {
  _inherits(ContentEditable, _React$Component);

  function ContentEditable() {
    _classCallCheck(this, ContentEditable);

    var _this = _possibleConstructorReturn(this, (ContentEditable.__proto__ || Object.getPrototypeOf(ContentEditable)).call(this));

    _this.emitChange = _this.emitChange.bind(_this);
    return _this;
  }

  _createClass(ContentEditable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tagName = _props.tagName,
          html = _props.html,
          props = _objectWithoutProperties(_props, ['tagName', 'html']);

      return _react2.default.createElement(tagName || 'div', _extends({}, props, {
        ref: function ref(e) {
          return _this2.htmlEl = e;
        },
        onInput: this.emitChange,
        onBlur: this.props.onBlur || this.emitChange,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: { __html: html }
      }), this.props.children);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      // We need not rerender if the change of props simply reflects the user's
      // edits. Rerendering in this case would make the cursor/caret jump.
      return (
        // Rerender if there is no element yet... (somehow?)
        !this.htmlEl
        // ...or if html really changed... (programmatically, not by user edit)
        || nextProps.html !== this.htmlEl.innerHTML && nextProps.html !== this.props.html
        // ...or if editing is enabled or disabled.
        || this.props.disabled !== nextProps.disabled
        // ...or if className changed
        || this.props.className !== nextProps.className
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
        // Perhaps React (whose VDOM gets outdated because we often prevent
        // rerendering) did not update the DOM. So we update it manually now.
        this.htmlEl.innerHTML = this.props.html;
      }
    }
  }, {
    key: 'emitChange',
    value: function emitChange(evt) {
      if (!this.htmlEl) return;
      var html = this.htmlEl.innerHTML;
      if (this.props.onChange && html !== this.lastHtml) {
        evt.target = { value: html };
        this.props.onChange(evt);
      }
      this.lastHtml = html;
    }
  }]);

  return ContentEditable;
}(_react2.default.Component);

exports.default = ContentEditable;
module.exports = exports['default'];

/***/ }),

/***/ 1042:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(101),
    isObjectLike = __webpack_require__(83);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(1207),
    baseMatchesProperty = __webpack_require__(1208),
    identity = __webpack_require__(221),
    isArray = __webpack_require__(217),
    property = __webpack_require__(1228);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _ReactLoader = __webpack_require__(1307);

var _ReactLoader2 = _interopRequireDefault(_ReactLoader);

var _Loader = __webpack_require__(1306);

var _Loader2 = _interopRequireDefault(_Loader);

__webpack_require__(1332);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  ReactLoader: _ReactLoader2.default,
  Loader: _Loader2.default
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(1042);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 1052:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 1055:
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stopwatch = __webpack_require__(1308);

var _Stopwatch2 = _interopRequireDefault(_Stopwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Stopwatch2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".label-container {\n  position: relative;\n  overflow: hidden;\n  font-size: 100%;\n  color: #343434;\n  height: 100%;\n  float: left; }\n", ""]);

// exports


/***/ }),

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".viewer-app-container {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.viewer-container {\n  position: absolute;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.viewer-panels-container {\n  position: absolute;\n  overflow: visible;\n  height: 0;\n  width: 0;\n  left: 0;\n  top: 0; }\n", ""]);

// exports


/***/ }),

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(217),
    isKey = __webpack_require__(1081),
    stringToPath = __webpack_require__(1221),
    toString = __webpack_require__(1230);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(217),
    isSymbol = __webpack_require__(1042);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 1088:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1277), __esModule: true };

/***/ }),

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(1080),
    toKey = __webpack_require__(1051);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".loader-background {\n  transition-timing-function: ease;\n  transition-property: none;\n  transition-duration: 2.5s;\n  transition-delay: 0.0s;\n  background: #ededed;\n  position: absolute;\n  z-index: 100;\n  height: 100%;\n  width: 100%;\n  left: 0px;\n  top: 0px; }\n\n.loader-background.disabled {\n  background: transparent !important;\n  pointer-events: none; }\n\n.loader-background.disabled .loader {\n  display: none; }\n\n.loader-background .loader {\n  display: block; }\n\n.loader, .loader:before, .loader:after {\n  top: 35%;\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load7 1.8s infinite ease-in-out;\n  animation: load7 1.8s infinite ease-in-out; }\n\n.loader {\n  color: #f3a81e;\n  font-size: 10px;\n  margin: 0px auto;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s; }\n\n.loader:before, .loader:after {\n  content: '';\n  position: absolute;\n  top: 0; }\n\n.loader:before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s; }\n\n.loader:after {\n  left: 3.5em; }\n\n@-webkit-keyframes load7 {\n  0%, 80%, 100% {\n    box-shadow: 0 2.5em 0 -1.3em; }\n  40% {\n    box-shadow: 0 2.5em 0 0; } }\n\n@keyframes load7 {\n  0%, 80%, 100% {\n    box-shadow: 0 2.5em 0 -1.3em; }\n  40% {\n    box-shadow: 0 2.5em 0 0; } }\n", ""]);

// exports


/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".viewer-app-container {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.viewer-container {\n  position: absolute;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.viewer-panels-container {\n  position: absolute;\n  overflow: visible;\n  height: 0;\n  width: 0;\n  left: 0;\n  top: 0; }\n", ""]);

// exports


/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(1204),
    isObjectLike = __webpack_require__(83);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(1198),
    arraySome = __webpack_require__(1201),
    cacheHas = __webpack_require__(1212);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(1200),
    stubArray = __webpack_require__(1138);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(58);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 1116:
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseComponent = __webpack_require__(1305);

var _BaseComponent2 = _interopRequireDefault(_BaseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _BaseComponent2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _resizeObserverPolyfill = __webpack_require__(1265);

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _getTypes = __webpack_require__(1264);

var _getTypes2 = _interopRequireDefault(_getTypes);

var _getContentRect = __webpack_require__(1263);

var _getContentRect2 = _interopRequireDefault(_getContentRect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withContentRect(types) {
  return function (WrappedComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          contentRect: {
            entry: {},
            client: {},
            offset: {},
            scroll: {},
            bounds: {},
            margin: {}
          }
        }, _this.measure = function (entries) {
          var contentRect = (0, _getContentRect2.default)(_this._node, types || (0, _getTypes2.default)(_this.props));

          if (entries) {
            contentRect.entry = entries[0].contentRect;
          }

          _this.setState({ contentRect: contentRect });

          if (typeof _this.props.onResize === 'function') {
            _this.props.onResize(contentRect);
          }
        }, _this._handleRef = function (node) {
          if (_this._resizeObserver) {
            if (node) {
              _this._resizeObserver.observe(node);
            } else {
              _this._resizeObserver.disconnect(_this._node);
            }
          }
          _this._node = node;

          if (typeof _this.props.innerRef === 'function') {
            _this.props.innerRef(node);
          }
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(_class, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this._resizeObserver = new _resizeObserverPolyfill2.default(this.measure);
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              innerRef = _props.innerRef,
              onResize = _props.onResize,
              props = _objectWithoutProperties(_props, ['innerRef', 'onResize']);

          return (0, _react.createElement)(WrappedComponent, _extends({}, props, {
            measureRef: this._handleRef,
            measure: this.measure,
            contentRect: this.state.contentRect
          }));
        }
      }]);

      return _class;
    }(_react.Component), _class.propTypes = {
      client: _propTypes2.default.bool,
      offset: _propTypes2.default.bool,
      scroll: _propTypes2.default.bool,
      bounds: _propTypes2.default.bool,
      margin: _propTypes2.default.bool,
      innerRef: _propTypes2.default.func,
      onResize: _propTypes2.default.func,
      children: _propTypes2.default.func
    }, _temp2;
  };
}

exports.default = withContentRect;
module.exports = exports['default'];

/***/ }),

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ReflexContainer__ = __webpack_require__(1316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ReflexSplitter__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ReflexElement__ = __webpack_require__(1156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReflexContainer", function() { return __WEBPACK_IMPORTED_MODULE_0__ReflexContainer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReflexSplitter", function() { return __WEBPACK_IMPORTED_MODULE_1__ReflexSplitter__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ReflexElement", function() { return __WEBPACK_IMPORTED_MODULE_2__ReflexElement__["a"]; });






/***/ }),

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1278), __esModule: true };

/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(1055),
    isArray = __webpack_require__(217);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(1133),
    getSymbols = __webpack_require__(1114),
    keys = __webpack_require__(1038);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(1195),
    Map = __webpack_require__(227),
    Promise = __webpack_require__(1196),
    Set = __webpack_require__(1197),
    WeakMap = __webpack_require__(1199),
    baseGetTag = __webpack_require__(101),
    toSource = __webpack_require__(393);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 1136:
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 1137:
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 1138:
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(58),
    isSymbol = __webpack_require__(1042);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Viewer = __webpack_require__(1261);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Viewer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var Easing = {
  linear: function linear(t, b, c, d) {
    return c * t / d + b;
  },
  easeInQuad: function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    } else {
      return -c / 2 * (--t * (t - 2) - 1) + b;
    }
  },
  easeInCubic: function easeInCubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  },
  easeInQuart: function easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    } else {
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  },
  easeInQuint: function easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
  },
  easeInSine: function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function easeInExpo(t, b, c, d) {
    var _ref;
    return (_ref = t === 0) !== null ? _ref : {
      b: c * Math.pow(2, 10 * (t / d - 1)) + b
    };
  },
  easeOutExpo: function easeOutExpo(t, b, c, d) {
    var _ref;
    return (_ref = t === d) !== null ? _ref : b + {
      c: c * (-Math.pow(2, -10 * t / d) + 1) + b
    };
  },
  easeInOutExpo: function easeInOutExpo(t, b, c, d) {
    if (t === 0) {
      b;
    }
    if (t === d) {
      b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    } else {
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  },
  easeInCirc: function easeInCirc(t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function easeOutCirc(t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function easeInOutCirc(t, b, c, d) {
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    } else {
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
  },
  easeInElastic: function easeInElastic(t, b, c, d) {
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      b;
    } else if ((t /= d) === 1) {
      b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function easeOutElastic(t, b, c, d) {
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      b;
    } else if ((t /= d) === 1) {
      b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function easeInOutElastic(t, b, c, d) {
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      b;
    } else if ((t /= d / 2) === 2) {
      b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    } else {
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    }
  },
  easeInBack: function easeInBack(t, b, c, d, s) {
    if (s === void 0) {
      s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function easeOutBack(t, b, c, d, s) {
    if (s === void 0) {
      s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function easeInOutBack(t, b, c, d, s) {
    if (s === void 0) {
      s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    } else {
      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
  },
  easeInBounce: function easeInBounce(t, b, c, d) {
    var v;
    v = Easing.easeOutBounce(d - t, 0, c, d);
    return c - v + b;
  },
  easeOutBounce: function easeOutBounce(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  easeInOutBounce: function easeInOutBounce(t, b, c, d) {
    var v;
    if (t < d / 2) {
      v = Easing.easeInBounce(t * 2, 0, c, d);
      return v * 0.5 + b;
    } else {
      v = Easing.easeOutBounce(t * 2 - d, 0, c, d);
      return v * 0.5 + c * 0.5 + b;
    }
  }
};

exports.default = Easing;
module.exports = exports["default"];

/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Image = __webpack_require__(1252);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Image2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withContentRect = exports.default = undefined;

var _Measure = __webpack_require__(1262);

var _Measure2 = _interopRequireDefault(_Measure);

var _withContentRect = __webpack_require__(1128);

var _withContentRect2 = _interopRequireDefault(_withContentRect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Measure2.default;
exports.withContentRect = _withContentRect2.default;

/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



/////////////////////////////////////////////////////////
// Browser Utils
//
/////////////////////////////////////////////////////////
var Browser = function () {
  function Browser() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Browser);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Browser, null, [{
    key: 'isOpera',


    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    value: function isOpera() {
      return !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    }

    // Firefox 1.0+

  }, {
    key: 'isFirefox',
    value: function isFirefox() {
      return typeof InstallTrigger !== 'undefined';
    }

    // Safari 3.0+

  }, {
    key: 'isSafari',
    value: function isSafari() {

      var hasPushNotif = function hasPushNotif(p) {
        return p.toString() === "[object SafariRemoteNotification]";
      };

      var htmlElement = Object.prototype.toString.call(window.HTMLElement);

      var push = !window['safari'] || safari.pushNotification;

      return htmlElement.indexOf('Constructor') > 0 || hasPushNotif(push);
    }

    // Internet Explorer 6-11

  }, {
    key: 'isIE',
    value: function isIE() {
      /*@cc_on!@*/
      return false || !!document.documentMode;
    }

    // Edge 20+

  }, {
    key: 'isEdge',
    value: function isEdge() {
      return !Browser.isIE() && !!window.StyleMedia;
    }

    // Chrome 1+

  }, {
    key: 'isChrome',
    value: function isChrome() {
      return !!window.chrome && !!window.chrome.webstore;
    }

    // Blink engine detection

  }, {
    key: 'isBlink',
    value: function isBlink() {
      return (Browser.isChrome() || Browser.isOpera()) && !!window.CSS;
    }
  }, {
    key: 'getUserAgent',
    value: function getUserAgent() {
      return navigator.userAgent;
    }
  }, {
    key: 'isAndroid',
    value: function isAndroid() {
      return Browser.getUserAgent().match(/Android/i);
    }
  }, {
    key: 'isBlackBerry',
    value: function isBlackBerry() {
      return Browser.getUserAgent().match(/BlackBerry/i);
    }
  }, {
    key: 'isIOS',
    value: function isIOS() {
      return Browser.getUserAgent().match(/iPhone|iPad|iPod/i);
    }
  }, {
    key: 'isOpera',
    value: function isOpera() {
      return Browser.getUserAgent().match(/Opera Mini/i);
    }
  }, {
    key: 'isWindows',
    value: function isWindows() {
      return Browser.isWindowsDesktop() || Browser.isWindowsMobile();
    }
  }, {
    key: 'isWindowsMobile',
    value: function isWindowsMobile() {
      return Browser.getUserAgent().match(/IEMobile/i);
    }
  }, {
    key: 'isWindowsDesktop',
    value: function isWindowsDesktop() {
      return Browser.getUserAgent().match(/WPDesktop/i);
    }
  }, {
    key: 'isMobile',
    value: function isMobile() {

      return Browser.isWindowsMobile() || Browser.isBlackBerry() || Browser.isAndroid() || Browser.isIOS();
    }
  }]);

  return Browser;
}();

/* harmony default export */ __webpack_exports__["a"] = (Browser);

/***/ }),

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__ = __webpack_require__(1088);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_throttle__ = __webpack_require__(1282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_throttle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_measure__ = __webpack_require__(1154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_measure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_measure__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Browser__ = __webpack_require__(1155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react__);










///////////////////////////////////////////////////////////
// ReflexElement
// By Philippe Leefsma
// December 2016
//
///////////////////////////////////////////////////////////







var ReflexElement = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_9_babel_runtime_helpers_inherits___default()(ReflexElement, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ReflexElement(props) {
    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default()(this, ReflexElement);

    var _this = __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ReflexElement.__proto__ || __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_get_prototype_of___default()(ReflexElement)).call(this, props));

    _this.onResize = _this.onResize.bind(_this);

    _this.setStateThrottled = __WEBPACK_IMPORTED_MODULE_10_lodash_throttle___default()(function (state) {
      _this.setState(state);
    }, _this.props.renderOnResizeRate);

    _this.state = {
      dimensions: {
        height: "100%",
        width: "100%"
      }
    };
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default()(ReflexElement, [{
    key: 'componentWillReceiveProps',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var directions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, dir;

        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(props.size !== this.props.size)) {
                  _context.next = 28;
                  break;
                }

                directions = this.toArray(props.direction);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 5;
                _iterator = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_get_iterator___default()(directions);

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 14;
                  break;
                }

                dir = _step.value;
                _context.next = 11;
                return this.props.events.emit('element.size', {
                  size: props.size,
                  direction: dir,
                  element: this
                });

              case 11:
                _iteratorNormalCompletion = true;
                _context.next = 7;
                break;

              case 14:
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](5);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 20:
                _context.prev = 20;
                _context.prev = 21;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 23:
                _context.prev = 23;

                if (!_didIteratorError) {
                  _context.next = 26;
                  break;
                }

                throw _iteratorError;

              case 26:
                return _context.finish(23);

              case 27:
                return _context.finish(20);

              case 28:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 16, 20, 28], [21,, 23, 27]]);
      }));

      function componentWillReceiveProps(_x) {
        return _ref.apply(this, arguments);
      }

      return componentWillReceiveProps;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'toArray',
    value: function toArray(obj) {

      return obj ? Array.isArray(obj) ? obj : [obj] : [];
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onResize',
    value: function onResize(rect) {

      if (this.props.renderOnResize) {

        this.setStateThrottled({
          dimensions: {
            height: Math.floor(rect.bounds.height),
            width: Math.floor(rect.bounds.width)
          }
        });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      if (this.props.propagateDimensions) {

        return __WEBPACK_IMPORTED_MODULE_15_react___default.a.Children.map(this.props.children, function (child) {

          var newProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, child.props, {
            dimensions: _this2.state.dimensions
          });

          return __WEBPACK_IMPORTED_MODULE_15_react___default.a.cloneElement(child, newProps);
        });
      }

      return this.props.children;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var classNames = ['reflex-element'].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.props.className.split(' ')));

      var className = classNames.join(' ');

      var outerStyle = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, {
        WebkitBoxFlex: this.props.flex,
        FlexElement: this.props.flex,
        MozBoxFlex: this.props.flex,
        WebkitFlex: this.props.flex,
        flex: this.props.flex
      }, this.props.style);

      var innerStyle = {
        height: this.state.dimensions.height,
        width: this.state.dimensions.width
      };

      return __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11_react_measure___default.a,
        { bounds: true, onResize: this.onResize },
        function (_ref2) {
          var measureRef = _ref2.measureRef;
          return __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
            'div',
            { ref: measureRef, className: className, style: outerStyle },
            __WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
              'div',
              { style: innerStyle },
              _this3.renderChildren()
            )
          );
        }
      );
    }
  }]);

  return ReflexElement;
}(__WEBPACK_IMPORTED_MODULE_15_react___default.a.Component);

ReflexElement.propTypes = {
  renderOnResizeRate: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.number,
  propagateDimensions: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,
  renderOnResize: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string };
ReflexElement.defaultProps = {
  renderOnResize: __WEBPACK_IMPORTED_MODULE_14__Browser__["a" /* default */].isSafari(),
  propagateDimensions: false,
  renderOnResizeRate: 60,
  className: '' };
/* harmony default export */ __webpack_exports__["a"] = (ReflexElement);

/***/ }),

/***/ 1157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Browser__ = __webpack_require__(1155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);






///////////////////////////////////////////////////////////
// ReflexSplitter
// By Philippe Leefsma
// December 2016
//
///////////////////////////////////////////////////////////





var ReflexSplitter = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ReflexSplitter, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ReflexSplitter(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ReflexSplitter);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ReflexSplitter.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ReflexSplitter)).call(this, props));

    _this.state = {
      active: false
    };

    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);

    _this.document = props.document;
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ReflexSplitter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.document.addEventListener('touchend', this.onMouseUp);

      this.document.addEventListener('mouseup', this.onMouseUp);

      this.document.addEventListener('mousemove', this.onMouseMove, {
        passive: false
      });

      this.document.addEventListener('touchmove', this.onMouseMove, {
        passive: false
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      this.document.removeEventListener('mouseup', this.onMouseUp);

      this.document.removeEventListener('touchend', this.onMouseUp);

      this.document.removeEventListener('mousemove', this.onMouseMove);

      this.document.removeEventListener('touchmove', this.onMouseMove);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {

      if (this.state.active) {

        this.props.events.emit('splitter.resize', {
          splitter: this,
          event: event
        });

        if (this.props.onResize) {

          this.props.onResize({
            domElement: __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this),
            component: this
          });
        }

        event.stopPropagation();
        event.preventDefault();
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onMouseDown',
    value: function onMouseDown(event) {

      this.setState({
        active: true
      });

      if (this.props.onStartResize) {

        // cancels resize from controller
        // if needed by returning true
        // to onStartResize
        if (this.props.onStartResize({
          domElement: __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this),
          component: this
        })) {

          return;
        }
      }

      this.props.events.emit('splitter.startResize', {
        splitter: this,
        event: event
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onMouseUp',
    value: function onMouseUp(event) {

      if (this.state.active) {

        this.setState({
          active: false
        });

        if (this.props.onStopResize) {

          this.props.onStopResize({
            domElement: __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this),
            component: this
          });
        }

        this.props.events.emit('splitter.stopResize', {
          splitter: this,
          event: event
        });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      var classNames = ['reflex-splitter'].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.props.className.split(' ')));

      if (__WEBPACK_IMPORTED_MODULE_8__Browser__["a" /* default */].isMobile()) {

        classNames.push('reflex-thin');
      }

      if (this.state.active) {

        classNames.push('active');
      }

      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        'div',
        { className: classNames.join(' '),
          onTouchStart: this.onMouseDown,
          onMouseDown: this.onMouseDown,
          style: this.props.style },
        this.props.children
      );
    }
  }]);

  return ReflexSplitter;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

ReflexSplitter.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node]),
  onStartResize: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onStopResize: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  propagate: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  onResize: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object };
ReflexSplitter.defaultProps = {
  onStartResize: null,
  onStopResize: null,
  propagate: false,
  onResize: null,
  className: '',
  style: {},
  document: document };
/* harmony default export */ __webpack_exports__["a"] = (ReflexSplitter);

/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".react-panel {\n  transition-timing-function: ease;\n  transition-duration: 1.5s;\n  transition-property: border, background;\n  transition-delay: 0.0s;\n  background: rgba(255, 255, 255, 0.7);\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  position: absolute;\n  overflow: hidden;\n  z-index: 1; }\n\n.react-panel:hover {\n  background: white;\n  border: 1px solid #afafaf;\n  z-index: 2; }\n\n.react-panel .title {\n  margin: 0px 8px 0px 0px;\n  background: #ededed;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  cursor: move;\n  height: 35px;\n  float: left;\n  width: 100%;\n  z-index: 1; }\n\n.react-panel .title > label {\n  pointer-events: none;\n  white-space: nowrap;\n  font-weight: normal;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 27px;\n  font-weight: bold;\n  line-height: 14px;\n  margin-top: 10px;\n  text-align: left;\n  font-size: 14px;\n  select: none;\n  float: left; }\n\n.react-panel > .content {\n  height: calc(100% - 35px); }\n\n.react-panel .content {\n  background-color: transparent !important; }\n\n.react-panel > .resizer {\n  transition-timing-function: ease;\n  transition-duration: 1.5s;\n  transition-property: background;\n  transition-delay: 0.0s;\n  -webkit-transform: rotateZ(45deg);\n          transform: rotateZ(45deg);\n  left: calc(100% - 15px);\n  top: calc(100% - 15px);\n  cursor: nwse-resize;\n  position: absolute;\n  background: #e1e1e1;\n  height: 30px;\n  width: 30px; }\n\n.react-panel > .resizer:hover {\n  background: #bbbbbb; }\n", ""]);

// exports


/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".configurator-loader {\n  height: calc(100vh - 65px);\n  position: relative;\n  top: 0px; }\n\n.configurator .data-pane {\n  background-color: #ababab;\n  height: 100%; }\n\n.configurator-toolbar {\n  position: absolute;\n  bottom: 100px;\n  right: 105px; }\n\n.configurator-toolbar #toolbar-markup3D .adsk-control-tooltip {\n  -webkit-transform: translate(-65px, 25px);\n          transform: translate(-65px, 25px); }\n\n.configurator-toolbar #toolbar-transform .adsk-control-tooltip {\n  -webkit-transform: translate(-140px, 20px);\n          transform: translate(-140px, 20px); }\n\n.configurator-toolbar #toolbar-translate .adsk-control-tooltip {\n  -webkit-transform: translate(-125px, -20px);\n          transform: translate(-125px, -20px); }\n\n.configurator-toolbar #toolbar-rotate .adsk-control-tooltip {\n  -webkit-transform: translate(-115px, -15px);\n          transform: translate(-115px, -15px); }\n\n.configurator .spinner {\n  display: none; }\n\n.configurator .adsk-viewing-viewer.empty {\n  pointer-events: none; }\n\n.configurator .empty .adsk-control, .configurator .empty .viewcubeUI, .configurator .empty .progressbg {\n  display: none; }\n", ""]);

// exports


/***/ }),

/***/ 1195:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(134),
    root = __webpack_require__(66);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(134),
    root = __webpack_require__(66);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 1197:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(134),
    root = __webpack_require__(66);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(383),
    setCacheAdd = __webpack_require__(1219),
    setCacheHas = __webpack_require__(1220);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(134),
    root = __webpack_require__(66);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 1200:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 1201:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 1202:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 1203:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(378),
    equalArrays = __webpack_require__(1113),
    equalByTag = __webpack_require__(1213),
    equalObjects = __webpack_require__(1214),
    getTag = __webpack_require__(1135),
    isArray = __webpack_require__(217),
    isBuffer = __webpack_require__(222),
    isTypedArray = __webpack_require__(223);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(378),
    baseIsEqual = __webpack_require__(1112);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(229),
    nativeKeys = __webpack_require__(1218);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 1207:
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(1205),
    getMatchData = __webpack_require__(1215),
    matchesStrictComparable = __webpack_require__(1116);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(1112),
    get = __webpack_require__(1224),
    hasIn = __webpack_require__(1225),
    isKey = __webpack_require__(1081),
    isStrictComparable = __webpack_require__(1115),
    matchesStrictComparable = __webpack_require__(1116),
    toKey = __webpack_require__(1051);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 1209:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 1210:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(1089);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 1211:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(219),
    arrayMap = __webpack_require__(1052),
    isArray = __webpack_require__(217),
    isSymbol = __webpack_require__(1042);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 1212:
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(219),
    Uint8Array = __webpack_require__(389),
    eq = __webpack_require__(102),
    equalArrays = __webpack_require__(1113),
    mapToArray = __webpack_require__(1136),
    setToArray = __webpack_require__(1137);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(1134);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 1215:
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(1115),
    keys = __webpack_require__(1038);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(1080),
    isArguments = __webpack_require__(220),
    isArray = __webpack_require__(217),
    isIndex = __webpack_require__(228),
    isLength = __webpack_require__(230),
    toKey = __webpack_require__(1051);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 1217:
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(1226);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 1218:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(392);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 1219:
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 1220:
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 1221:
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(1217);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 1223:
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(1284),
    findIndex = __webpack_require__(1287);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ 1224:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(1089);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(1203),
    hasPath = __webpack_require__(1216);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(383);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 1228:
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(1209),
    basePropertyDeep = __webpack_require__(1210),
    isKey = __webpack_require__(1081),
    toKey = __webpack_require__(1051);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 1229:
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(1288);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 1230:
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(1211);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 1252:
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1269);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(Image, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function Image(props) {
    (0, _classCallCheck3.default)(this, Image);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Image.__proto__ || (0, _getPrototypeOf2.default)(Image)).call(this, props));

    _this.onError = _this.onError.bind(_this);
    _this.onLoad = _this.onLoad.bind(_this);

    _this.state = {
      classNames: ['default-adsk'],
      src: _this.props.src
    };
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(Image, [{
    key: 'onLoad',
    value: function onLoad() {

      this.setState({
        classNames: []
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onError',
    value: function onError() {

      this.setState({
        classNames: ['default-adsk']
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      var classNames = [].concat((0, _toConsumableArray3.default)(this.state.classNames), (0, _toConsumableArray3.default)(this.props.className.split(' ')));

      return _react2.default.createElement('img', { className: classNames.join(' '),
        onError: this.onError,
        onLoad: this.onLoad,
        src: this.state.src
      });
    }
  }]);
  return Image;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes2.default.string }, _class.defaultProps = {
  className: '' }, _temp);
exports.default = Image;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Image.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1261:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _class, _temp; ////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////


var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1272);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Viewer = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(Viewer, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function Viewer() {
    (0, _classCallCheck3.default)(this, Viewer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Viewer.__proto__ || (0, _getPrototypeOf2.default)(Viewer)).call(this));

    _this.height = 0;

    _this.width = 0;
    return _this;
  }

  /////////////////////////////////////////////////////////
  // Component has been mounted so this container div is now created
  // in the DOM and viewer can be instantiated
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(Viewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.viewer = new Autodesk.Viewing.Private.GuiViewer3D(this.viewerContainer);

      this.panelsContainer = document.createElement('div');

      this.viewer.container.appendChild(this.panelsContainer);

      if (this.props.onViewerCreated) {

        this.props.onViewerCreated(this.viewer);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {}

    //const panels = props.panels.map((panel) => {
    //
    //  return panel.render()
    //})
    //
    //this.panelsContainer = ReactDOM.render(
    //  <div className="viewer-panels-container">
    //    { panels }
    //  </div>, this.panelsContainer)


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {

      if (this.viewer && this.viewer.impl) {

        if (this.viewerContainer.offsetHeight !== this.height || this.viewerContainer.offsetWidth !== this.width) {

          this.height = this.viewerContainer.offsetHeight;
          this.width = this.viewerContainer.offsetWidth;

          this.viewer.resize();
        }
      }

      this.props.panels.map(function (panel) {

        panel.emit('update');
      });
    }

    /////////////////////////////////////////////////////////
    // Component will unmount so we can destroy the viewer to avoid
    // memory leaks
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      if (this.viewer) {

        if (this.viewer.impl.selector) {

          this.viewer.tearDown();
          this.viewer.finish();
          this.viewer = null;
        }
      }
    }

    /////////////////////////////////////////////////////////
    // Render component, resize the viewer if exists
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var panels = this.props.panels.map(function (panel) {

        return panel.render();
      });

      return _react2.default.createElement(
        'div',
        { className: 'viewer-app-container' },
        _react2.default.createElement('div', { ref: function ref(div) {
            return _this2.viewerContainer = div;
          },
          className: 'viewer-container',
          style: this.props.style
        }),
        _react2.default.createElement(
          'div',
          { className: 'viewer-panels-container' },
          panels
        )
      );
    }
  }]);
  return Viewer;
}(_react2.default.Component), _class.propTypes = {
  panels: _propTypes2.default.array }, _class.defaultProps = {
  panels: [],
  style: {} }, _temp);
exports.default = Viewer;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withContentRect = __webpack_require__(1128);

var _withContentRect2 = _interopRequireDefault(_withContentRect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Measure(_ref) {
  var measure = _ref.measure,
      measureRef = _ref.measureRef,
      contentRect = _ref.contentRect,
      children = _ref.children;

  return children({ measure: measure, measureRef: measureRef, contentRect: contentRect });
}

exports.default = (0, _withContentRect2.default)()(Measure);
module.exports = exports['default'];

/***/ }),

/***/ 1263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getContentRect(node, types) {
  var calculations = {};

  if (types.indexOf('client') > -1) {
    calculations.client = {
      top: node.clientTop,
      left: node.clientLeft,
      width: node.clientWidth,
      height: node.clientHeight
    };
  }

  if (types.indexOf('offset') > -1) {
    calculations.offset = {
      top: node.offsetTop,
      left: node.offsetLeft,
      width: node.offsetWidth,
      height: node.offsetHeight
    };
  }

  if (types.indexOf('scroll') > -1) {
    calculations.scroll = {
      top: node.scrollTop,
      left: node.scrollLeft,
      width: node.scrollWidth,
      height: node.scrollHeight
    };
  }

  if (types.indexOf('bounds') > -1) {
    var rect = node.getBoundingClientRect();
    calculations.bounds = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  }

  if (types.indexOf('margin') > -1) {
    var styles = getComputedStyle(node);
    calculations.margin = {
      top: parseInt(styles.marginTop),
      right: parseInt(styles.marginRight),
      bottom: parseInt(styles.marginBottom),
      left: parseInt(styles.marginLeft)
    };
  }

  return calculations;
}

exports.default = getContentRect;
module.exports = exports['default'];

/***/ }),

/***/ 1264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTypes;
var types = ['client', 'offset', 'scroll', 'bounds', 'margin'];

function getTypes(props) {
  var allowedTypes = [];
  types.forEach(function (type) {
    if (props[type]) {
      allowedTypes.push(type);
    }
  });
  return allowedTypes;
}
module.exports = exports['default'];

/***/ }),

/***/ 1265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map != 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: {} };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window != 'undefined' && typeof document != 'undefined' && window.document === document;

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame;
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Detect whether running in IE 11 (facepalm).
var isIE11 = typeof navigator != 'undefined' && /Trident\/.*rv:11/.test(navigator.userAgent);

// MutationObserver should not be used if running in Internet Explorer 11 as it's
// implementation is unreliable. Example: https://jsfiddle.net/x2r3jpuz/2/
//
// It's a real bummer that there is no other way to check for this issue but to
// use the UA information.
var mutationObserverSupported = typeof MutationObserver != 'undefined' && !isIE11;

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;

    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */
    this.mutationEventsAdded_ = false;

    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */
    this.mutationsObserver_ = null;

    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName;

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */
ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = Array.prototype.slice.call(arguments, 1);

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement != 'undefined') {
        return function (target) { return target instanceof SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly != 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;

    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */
    this.broadcastHeight = 0;

    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    /**
     * Reference to the observed element.
     *
     * @type {Element}
     */
    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];

    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */
    this.observations_ = new MapShim();

    /**
     * Reference to the callback function.
     *
     * @private {ResizeObserverCallback}
     */
    this.callback_ = callback;

    /**
     * Reference to the associated ResizeObserverController.
     *
     * @private {ResizeObserverController}
     */
    this.controller_ = controller;

    /**
     * Public ResizeObserver instance which will be passed to the callback
     * function and used as a value of it's "this" binding.
     *
     * @private {ResizeObserver}
     */
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap != 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver$1 = function(callback) {
    if (!(this instanceof ResizeObserver$1)) {
        throw new TypeError('Cannot call a class as a function');
    }

    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver$1.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof ResizeObserver != 'undefined') {
        // eslint-disable-next-line no-undef
        return ResizeObserver;
    }

    return ResizeObserver$1;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ 1269:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1075);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1075, function() {
			var newContent = __webpack_require__(1075);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1079);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1079, function() {
			var newContent = __webpack_require__(1079);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1277:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(226);
__webpack_require__(137);
module.exports = __webpack_require__(1280);


/***/ }),

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1281);
module.exports = __webpack_require__(22).Math.sign;


/***/ }),

/***/ 1279:
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ 1280:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(47);
var get = __webpack_require__(232);
module.exports = __webpack_require__(22).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 1281:
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(30);

$export($export.S, 'Math', { sign: __webpack_require__(1279) });


/***/ }),

/***/ 1282:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),

/***/ 1284:
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(1045),
    isArrayLike = __webpack_require__(133),
    keys = __webpack_require__(1038);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ 1287:
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(1202),
    baseIteratee = __webpack_require__(1045),
    toInteger = __webpack_require__(1229);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ 1288:
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(1139);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 1305:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseComponent = function (_React$Component) {
  (0, _inherits3.default)(BaseComponent, _React$Component);

  function BaseComponent(props) {
    (0, _classCallCheck3.default)(this, BaseComponent);
    return (0, _possibleConstructorReturn3.default)(this, (BaseComponent.__proto__ || (0, _getPrototypeOf2.default)(BaseComponent)).call(this, props));
  }

  (0, _createClass3.default)(BaseComponent, [{
    key: 'assignState',
    value: function assignState(state) {
      var _this2 = this;

      return new _promise2.default(function (resolve) {
        var newState = (0, _assign2.default)({}, _this2.state, state);
        _this2.setState(newState, function () {
          resolve();
        });
      });
    }
  }]);
  return BaseComponent;
}(_react2.default.Component);

exports.default = BaseComponent;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "BaseComponent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1306:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function () {
    function Loader(container) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { autoLoad: false };
        (0, _classCallCheck3.default)(this, Loader);


        this.background = document.createElement('div');

        this.background.className = 'loader-background';

        if (!opts.autoLoad) {

            this.background.classList.add('disabled');
        }

        container.appendChild(this.background);

        this.loader = document.createElement('div');

        this.background.appendChild(this.loader);

        this.loader.className = 'loader';
    }

    (0, _createClass3.default)(Loader, [{
        key: 'show',
        value: function show(_show) {

            if (_show) {

                this.background.style.transitionProperty = 'none';

                this.background.classList.remove('disabled');
            } else {

                this.background.style.transitionProperty = 'background';

                this.background.classList.add('disabled');
            }
        }
    }]);
    return Loader;
}();

exports.default = Loader;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Loader.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1307:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function (_React$Component) {
  (0, _inherits3.default)(Loader, _React$Component);

  function Loader() {
    (0, _classCallCheck3.default)(this, Loader);
    return (0, _possibleConstructorReturn3.default)(this, (Loader.__proto__ || (0, _getPrototypeOf2.default)(Loader)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loader, [{
    key: 'render',
    value: function render() {

      var className = 'loader-background' + (!this.props.show ? ' disabled' : '');

      var style = {
        transitionProperty: !this.props.show ? ' background' : 'none'
      };

      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        _react2.default.createElement('div', { className: 'loader' })
      );
    }
  }]);
  return Loader;
}(_react2.default.Component);

exports.default = Loader;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ReactLoader.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1308:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

///////////////////////////////////////////////////////////////////////////
// A stopwatch
//
///////////////////////////////////////////////////////////////////////////
var Stopwatch = function () {
  function Stopwatch() {
    (0, _classCallCheck3.default)(this, Stopwatch);


    this._lastTime = performance.now();
  }

  (0, _createClass3.default)(Stopwatch, [{
    key: "start",
    value: function start() {

      this._lastTime = performance.now();
    }
  }, {
    key: "getElapsedMs",
    value: function getElapsedMs() {

      var time = performance.now();

      var elapsedMs = time - this._lastTime;

      this._lastTime = time;

      return elapsedMs;
    }
  }]);
  return Stopwatch;
}();

exports.default = Stopwatch;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Stopwatch.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1314:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _class, _temp; //////////////////////////////////////////////////////////////////////////
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


__webpack_require__(1337);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewingApplication = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(ViewingApplication, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ViewingApplication() {
    (0, _classCallCheck3.default)(this, ViewingApplication);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ViewingApplication.__proto__ || (0, _getPrototypeOf2.default)(ViewingApplication)).call(this));

    _this.height = 0;

    _this.width = 0;
    return _this;
  }

  ///////////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(ViewingApplication, [{
    key: 'guid',
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxx';


      var d = new Date().getTime();

      var guid = format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });

      return guid;
    }

    /////////////////////////////////////////////////////////
    // Return viewable items
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getViewables',
    value: function getViewables(doc) {
      var roles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['3d', '2d'];


      var toArray = function toArray(obj) {

        return obj ? Array.isArray(obj) ? obj : [obj] : [];
      };

      var rootItem = doc.getRootItem();

      var items = [];

      toArray(roles).forEach(function (role) {

        items = [].concat((0, _toConsumableArray3.default)(items), (0, _toConsumableArray3.default)(Autodesk.Viewing.Document.getSubItemsWithProperties(rootItem, { type: 'geometry', role: role }, true)));
      });

      if (!items.length) {

        return null;
      }

      return items;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadDocument',
    value: function loadDocument(urn) {
      var _this2 = this;

      var pathIndex = this.props.pathIndex || 0;

      var paramUrn = !urn.startsWith('urn:') ? 'urn:' + urn : urn;

      this.viewingApp.loadDocument(paramUrn, function (doc) {

        var viewables = _this2.getViewables(doc);

        if (!viewables || viewables.length - 1 < pathIndex) {

          console.error('Viewable path invalid ...');
          return;
        }

        _this2.viewingApp.selectItem(viewables[pathIndex], function (viewer, item) {

          _this2.viewer = viewer;

          if (_this2.props.onViewerCreated) {

            _this2.props.onViewerCreated(_this2.viewer);
          }

          if (_this2.props.onItemLoaded) {

            _this2.props.onItemLoaded(item);
          }
        }, function () {});
      }, function (error) {

        console.log('Error loading document: ' + error);
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.viewerContainer.id = this.guid();

      this.viewingApp = new Autodesk.Viewing.ViewingApplication(this.viewerContainer.id);

      this.viewingApp.registerViewer(this.viewingApp.k3D, Autodesk.Viewing.Private.GuiViewer3D);

      if (this.props.urn) {

        this.loadDocument(this.props.urn);
      }

      if (this.props.onViewingApplicationCreated) {

        this.props.onViewingApplicationCreated(this.viewingApp);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {

      if (this.props.urn !== props.urn) {

        this.loadDocument(props.urn);
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {

      if (this.viewer && this.viewer.impl) {

        if (this.viewerContainer.offsetHeight !== this.height || this.viewerContainer.offsetWidth !== this.width) {

          this.height = this.viewerContainer.offsetHeight;
          this.width = this.viewerContainer.offsetWidth;

          this.viewer.resize();
        }
      }

      this.props.panels.map(function (panel) {

        panel.emit('update');
      });
    }

    /////////////////////////////////////////////////////////
    // Component will unmount so we can destroy the viewer to avoid
    // memory leaks
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      if (this.viewer) {

        if (this.viewer.impl.selector) {

          this.viewer.tearDown();
          this.viewer.finish();
          this.viewer = null;
        }
      }
    }

    /////////////////////////////////////////////////////////
    // Render component, resize the viewer if exists
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var panels = this.props.panels.map(function (panel) {

        return panel.render();
      });

      return _react2.default.createElement(
        'div',
        { className: 'viewer-app-container' },
        _react2.default.createElement('div', { ref: function ref(div) {
            return _this3.viewerContainer = div;
          },
          className: 'viewer-container',
          style: this.props.style
        }),
        _react2.default.createElement(
          'div',
          { className: 'viewer-panels-container' },
          panels
        )
      );
    }
  }]);
  return ViewingApplication;
}(_react2.default.Component), _class.propTypes = {
  panels: _propTypes2.default.array }, _class.defaultProps = {
  panels: [],
  style: {} }, _temp);
exports.default = ViewingApplication;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ViewingApplication.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1315:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ViewingApplication = __webpack_require__(1314);

var _ViewingApplication2 = _interopRequireDefault(_ViewingApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ViewingApplication2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_math_sign__ = __webpack_require__(1132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_math_sign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_math_sign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ReflexSplitter__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ReflexElement__ = __webpack_require__(1156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ReflexEvents__ = __webpack_require__(1317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react__);









///////////////////////////////////////////////////////////
// ReflexContainer
// By Philippe Leefsma
// December 2016
//
///////////////////////////////////////////////////////////







var ReflexContainer = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default()(ReflexContainer, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ReflexContainer(props) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, ReflexContainer);

    var _this = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ReflexContainer.__proto__ || __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default()(ReflexContainer)).call(this, props));

    _this.state = {
      flexData: []
    };

    _this.events = new __WEBPACK_IMPORTED_MODULE_11__ReflexEvents__["a" /* default */]();

    _this.onSplitterStartResize = _this.onSplitterStartResize.bind(_this);

    _this.onSplitterStopResize = _this.onSplitterStopResize.bind(_this);

    _this.onSplitterResize = _this.onSplitterResize.bind(_this);

    _this.onElementSize = _this.onElementSize.bind(_this);

    _this.children = [];
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(ReflexContainer, [{
    key: 'setPartialState',
    value: function setPartialState(partialState) {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve) {

        _this2.setState(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, _this2.state, partialState), function () {
          resolve();
        });
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      var flexData = this.computeFlexData();

      this.setPartialState({
        flexData: flexData
      });

      this.events.on('splitter.startResize', this.onSplitterStartResize);

      this.events.on('splitter.stopResize', this.onSplitterStopResize);

      this.events.on('splitter.resize', this.onSplitterResize);

      this.events.on('element.size', this.onElementSize);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      this.events.off();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getValidChildren',
    value: function getValidChildren() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;


      return this.toArray(props.children).filter(function (child) {

        return !!child;
      });
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {

      var children = this.getValidChildren(props);

      if (children.length !== this.state.flexData.length || this.flexHasChanged(props)) {

        var flexData = this.computeFlexData(children);

        this.setPartialState({
          flexData: flexData
        });
      }
    }

    /////////////////////////////////////////////////////////
    // Check if flex has changed: this allows updating the
    // component when different flex is passed as property
    // to one or several children
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'flexHasChanged',
    value: function flexHasChanged(props) {

      var nextChildrenFlex = this.getValidChildren(props).map(function (child) {

        return child.props.flex || 0;
      });

      var childrenFlex = this.getValidChildren().map(function (child) {

        return child.props.flex || 0;
      });

      return !childrenFlex.every(function (flex, idx) {

        return flex === nextChildrenFlex[idx];
      });
    }

    /////////////////////////////////////////////////////////
    // Returns size of a ReflexElement
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getSize',
    value: function getSize(element) {

      var ref = element.ref ? this.refs[element.ref] : element;

      var domElement = __WEBPACK_IMPORTED_MODULE_13_react_dom___default.a.findDOMNode(ref);

      switch (this.props.orientation) {

        case 'horizontal':
          return domElement.offsetHeight;

        case 'vertical':
          return domElement.offsetWidth;

        default:
          return 0;
      }
    }

    /////////////////////////////////////////////////////////
    // Computes offset from pointer position
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getOffset',
    value: function getOffset(event) {

      var pos = event.changedTouches ? event.changedTouches[0] : event;

      switch (this.props.orientation) {

        case 'horizontal':
          return pos.pageY - this.previousPos;

        case 'vertical':
          return pos.pageX - this.previousPos;
      }
    }

    /////////////////////////////////////////////////////////
    // Handles splitter startResize event
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onSplitterStartResize',
    value: function onSplitterStartResize(data) {

      var pos = data.event.changedTouches ? data.event.changedTouches[0] : data.event;

      switch (this.props.orientation) {

        case 'horizontal':
          document.body.style.cursor = 'row-resize';
          this.previousPos = pos.pageY;
          break;

        case 'vertical':
          document.body.style.cursor = 'col-resize';
          this.previousPos = pos.pageX;
          break;
      }

      var idx = data.splitter.props.index;

      this.elements = [this.children[idx - 1], this.children[idx + 1]];

      this.emitElementsEvent(this.elements, 'onStartResize');
    }

    /////////////////////////////////////////////////////////
    // Handles splitter resize event
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onSplitterResize',
    value: function onSplitterResize(data) {
      var _this3 = this;

      var idx = data.splitter.props.index;

      var offset = this.getOffset(data.event);

      var availableOffset = this.computeAvailableOffset(idx, offset);

      if (availableOffset) {

        var pos = data.event.changedTouches ? data.event.changedTouches[0] : data.event;

        switch (this.props.orientation) {

          case 'horizontal':
            this.previousPos = pos.pageY;
            break;

          case 'vertical':
            this.previousPos = pos.pageX;
            break;
        }

        this.elements = this.dispatchOffset(idx, availableOffset);

        this.adjustFlex(this.elements);

        this.setPartialState(this.state).then(function () {

          _this3.emitElementsEvent(_this3.elements, 'onResize');
        });
      }
    }

    /////////////////////////////////////////////////////////
    // Handles splitter stopResize event
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onSplitterStopResize',
    value: function onSplitterStopResize(data) {

      document.body.style.cursor = 'auto';

      var resizedRefs = this.elements.map(function (element) {

        return element.ref;
      });

      var elements = this.children.filter(function (child) {

        return child.type !== __WEBPACK_IMPORTED_MODULE_9__ReflexSplitter__["a" /* default */] && resizedRefs.includes(child.ref);
      });

      this.emitElementsEvent(elements, 'onStopResize');
    }

    /////////////////////////////////////////////////////////
    // Handles element size modified event
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onElementSize',
    value: function onElementSize(data) {
      var _this4 = this;

      return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve) {

        try {

          var idx = data.element.props.index;

          var size = _this4.getSize(_this4.children[idx]);

          var offset = data.size - size;

          var dir = data.direction;

          var splitterIdx = idx + dir;

          var availableOffset = _this4.computeAvailableOffset(splitterIdx, dir * offset);

          _this4.elements = null;

          if (availableOffset) {

            _this4.elements = _this4.dispatchOffset(splitterIdx, availableOffset);

            _this4.adjustFlex(_this4.elements);
          }

          _this4.setPartialState(_this4.state).then(function () {

            _this4.emitElementsEvent(_this4.elements, 'onResize');

            resolve();
          });
        } catch (ex) {

          // TODO handle exception ...
        }
      });
    }

    /////////////////////////////////////////////////////////
    // Adjusts flex after a dispatch to make sure
    // total flex of modified elements remains the same
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'adjustFlex',
    value: function adjustFlex(elements) {
      var _this5 = this;

      var diffFlex = elements.reduce(function (sum, element) {

        var idx = element.props.index;

        var previousFlex = element.props.flex;

        var nextFlex = _this5.state.flexData[idx].flex;

        return sum + (previousFlex - nextFlex) / elements.length;
      }, 0);

      elements.forEach(function (element) {
        _this5.state.flexData[element.props.index].flex += diffFlex;
      });
    }

    /////////////////////////////////////////////////////////
    // Returns available offset for a given raw offset value
    // This checks how much the panes can be stretched and
    // shrink, then returns the min
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'computeAvailableOffset',
    value: function computeAvailableOffset(idx, offset) {

      var stretch = this.computeAvailableStretch(idx, offset);

      var shrink = this.computeAvailableShrink(idx, offset);

      var availableOffset = Math.min(stretch, shrink) * __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_math_sign___default()(offset);

      return availableOffset;
    }

    /////////////////////////////////////////////////////////
    // Returns true if the next splitter than the one at idx
    // can propagate the drag. This can happen if that
    // next element is actually a splitter and it has
    // propagate=true property set
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'checkPropagate',
    value: function checkPropagate(idx, direction) {

      if (direction > 0) {

        if (idx < this.children.length - 2) {

          var child = this.children[idx + 2];

          var typeCheck = child.type === __WEBPACK_IMPORTED_MODULE_9__ReflexSplitter__["a" /* default */];

          return typeCheck && child.props.propagate;
        }
      } else {

        if (idx > 2) {

          var _child = this.children[idx - 2];

          var _typeCheck = _child.type === __WEBPACK_IMPORTED_MODULE_9__ReflexSplitter__["a" /* default */];

          return _typeCheck && _child.props.propagate;
        }
      }

      return false;
    }

    /////////////////////////////////////////////////////////
    // Recursively computes available stretch at splitter
    // idx for given raw offset
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'computeAvailableStretch',
    value: function computeAvailableStretch(idx, offset) {

      var childIdx = offset < 0 ? idx + 1 : idx - 1;

      var child = this.children[childIdx];

      var size = this.getSize(child);

      var maxSize = child.props.maxSize;

      var availableStretch = maxSize - size;

      if (availableStretch < Math.abs(offset)) {

        if (this.checkPropagate(idx, -1 * offset)) {

          var nextOffset = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_math_sign___default()(offset) * (Math.abs(offset) - availableStretch);

          return availableStretch + this.computeAvailableStretch(offset < 0 ? idx + 2 : idx - 2, nextOffset);
        }
      }

      return Math.min(availableStretch, Math.abs(offset));
    }

    /////////////////////////////////////////////////////////
    // Recursively computes available shrink at splitter
    // idx for given raw offset
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'computeAvailableShrink',
    value: function computeAvailableShrink(idx, offset) {

      var childIdx = offset > 0 ? idx + 1 : idx - 1;

      var child = this.children[childIdx];

      var size = this.getSize(child);

      var minSize = Math.max(child.props.minSize, 0);

      var availableShrink = size - minSize;

      if (availableShrink < Math.abs(offset)) {

        if (this.checkPropagate(idx, offset)) {

          var nextOffset = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_math_sign___default()(offset) * (Math.abs(offset) - availableShrink);

          return availableShrink + this.computeAvailableShrink(offset > 0 ? idx + 2 : idx - 2, nextOffset);
        }
      }

      return Math.min(availableShrink, Math.abs(offset));
    }

    /////////////////////////////////////////////////////////
    // Returns flex value for unit pixel
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'computePixelFlex',
    value: function computePixelFlex() {

      var domElement = __WEBPACK_IMPORTED_MODULE_13_react_dom___default.a.findDOMNode(this);

      switch (this.props.orientation) {

        case 'horizontal':

          return 1.0 / domElement.offsetHeight;

        case 'vertical':

          return 1.0 / domElement.offsetWidth;

        default:

          return 0;
      }
    }

    /////////////////////////////////////////////////////////
    // Adds offset to a given ReflexElement
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'addOffset',
    value: function addOffset(element, offset) {

      var size = this.getSize(element);

      var idx = element.props.index;

      var newSize = Math.max(size + offset, 0);

      var currentFlex = this.state.flexData[idx].flex;

      var newFlex = currentFlex > 0 ? currentFlex * newSize / size : this.computePixelFlex() * newSize;

      this.state.flexData[idx].flex = !isFinite(newFlex) || isNaN(newFlex) ? 0 : newFlex;
    }

    /////////////////////////////////////////////////////////
    // Recursively dispatches stretch offset across
    // children elements starting at splitter idx
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'dispatchStretch',
    value: function dispatchStretch(idx, offset) {

      var childIdx = offset < 0 ? idx + 1 : idx - 1;

      if (childIdx < 0 || childIdx > this.children.length - 1) {

        return [];
      }

      var child = this.children[childIdx];

      var size = this.getSize(child);

      var newSize = Math.min(child.props.maxSize, size + Math.abs(offset));

      var dispatchedStretch = newSize - size;

      this.addOffset(child, dispatchedStretch);

      if (dispatchedStretch < Math.abs(offset)) {

        var nextIdx = idx - __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_math_sign___default()(offset) * 2;

        var nextOffset = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_math_sign___default()(offset) * (Math.abs(offset) - dispatchedStretch);

        return [child].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.dispatchStretch(nextIdx, nextOffset)));
      }

      return [child];
    }

    /////////////////////////////////////////////////////////
    // Recursively dispatches shrink offset across
    // children elements starting at splitter idx
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'dispatchShrink',
    value: function dispatchShrink(idx, offset) {

      var childIdx = offset > 0 ? idx + 1 : idx - 1;

      if (childIdx < 0 || childIdx > this.children.length - 1) {

        return [];
      }

      var child = this.children[childIdx];

      var size = this.getSize(child);

      var newSize = Math.max(child.props.minSize, size - Math.abs(offset));

      var dispatchedShrink = newSize - size;

      this.addOffset(child, dispatchedShrink);

      if (Math.abs(dispatchedShrink) < Math.abs(offset)) {

        var nextIdx = idx + __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_math_sign___default()(offset) * 2;

        var nextOffset = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_math_sign___default()(offset) * (Math.abs(offset) + dispatchedShrink);

        return [child].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.dispatchShrink(nextIdx, nextOffset)));
      }

      return [child];
    }

    /////////////////////////////////////////////////////////
    // Dispatch offset at splitter idx
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'dispatchOffset',
    value: function dispatchOffset(idx, offset) {

      return [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.dispatchStretch(idx, offset)), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.dispatchShrink(idx, offset)));
    }

    /////////////////////////////////////////////////////////
    // Emits given if event for each given element
    // if present in the component props
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'emitElementsEvent',
    value: function emitElementsEvent(elements, event) {
      var _this6 = this;

      this.toArray(elements).forEach(function (element) {

        if (element.props[event]) {

          var ref = _this6.refs[element.ref];

          element.props[event]({
            domElement: __WEBPACK_IMPORTED_MODULE_13_react_dom___default.a.findDOMNode(ref),
            component: element
          });
        }
      });
    }

    /////////////////////////////////////////////////////////
    // Computes initial flex data based on provided flex
    // properties. By default each ReflexElement gets
    // evenly arranged within its container
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'computeFlexData',
    value: function computeFlexData() {
      var _this7 = this;

      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getValidChildren();


      var pixelFlex = this.computePixelFlex();

      var computeFreeFlex = function computeFreeFlex(flexData) {
        return flexData.reduce(function (sum, entry) {
          if (entry.type !== __WEBPACK_IMPORTED_MODULE_9__ReflexSplitter__["a" /* default */] && entry.constrained) {
            return sum - entry.flex;
          }
          return sum;
        }, 1);
      };

      var computeFreeElements = function computeFreeElements(flexData) {
        return flexData.reduce(function (sum, entry) {
          if (entry.type !== __WEBPACK_IMPORTED_MODULE_9__ReflexSplitter__["a" /* default */] && !entry.constrained) {
            return sum + 1;
          }
          return sum;
        }, 0);
      };

      var flexDataInit = children.map(function (child) {

        var props = child.props;

        return {
          maxFlex: (props.maxSize || Number.MAX_VALUE) * pixelFlex,
          sizeFlex: (props.size || Number.MAX_VALUE) * pixelFlex,
          minFlex: (props.minSize || 1) * pixelFlex,
          constrained: props.flex !== undefined,
          guid: props.ref || _this7.guid(),
          flex: props.flex || 0,
          type: child.type
        };
      });

      var computeFlexDataRec = function computeFlexDataRec(flexDataIn) {

        var hasContrain = false;

        var freeElements = computeFreeElements(flexDataIn);

        var freeFlex = computeFreeFlex(flexDataIn);

        var flexDataOut = flexDataIn.map(function (entry) {

          if (entry.type === __WEBPACK_IMPORTED_MODULE_9__ReflexSplitter__["a" /* default */]) {
            return entry;
          }

          var proposedFlex = !entry.constrained ? freeFlex / freeElements : entry.flex;

          var constrainedFlex = Math.min(entry.sizeFlex, Math.min(entry.maxFlex, Math.max(entry.minFlex, proposedFlex)));

          var constrained = constrainedFlex !== proposedFlex;

          hasContrain = hasContrain || constrained;

          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, entry, {
            flex: constrainedFlex,
            constrained: constrained
          });
        });

        return hasContrain ? computeFlexDataRec(flexDataOut) : flexDataOut;
      };

      var flexData = computeFlexDataRec(flexDataInit);

      return flexData.map(function (entry) {

        return entry.type !== __WEBPACK_IMPORTED_MODULE_9__ReflexSplitter__["a" /* default */] ? {
          guid: entry.guid,
          flex: entry.flex
        } : { flex: 0 };
      });
    }

    /////////////////////////////////////////////////////////
    // Utility method that generates a new unique GUID
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'guid',
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxx-xxxx';


      var d = new Date().getTime();

      return format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });
    }

    /////////////////////////////////////////////////////////
    // Utility method to ensure given argument is
    // returned as an array
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'toArray',
    value: function toArray(obj) {

      return obj ? Array.isArray(obj) ? obj : [obj] : [];
    }

    /////////////////////////////////////////////////////////
    // Render container. This will clone all original child
    // components in order to pass some internal properties
    // used to handle resizing logic
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var classNames = ['reflex-layout', 'reflex-container', this.props.orientation].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.props.className.split(' ')));

      this.children = __WEBPACK_IMPORTED_MODULE_14_react___default.a.Children.map(this.getValidChildren(), function (child, idx) {

        if (idx > _this8.state.flexData.length - 1) {
          return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement('div', null);
        }

        var flexData = _this8.state.flexData[idx];

        var newProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, child.props, {
          maxSize: child.props.maxSize || Number.MAX_VALUE,
          orientation: _this8.props.orientation,
          minSize: child.props.minSize || 1,
          events: _this8.events,
          flex: flexData.flex,
          ref: flexData.guid,
          index: idx
        });

        return __WEBPACK_IMPORTED_MODULE_14_react___default.a.cloneElement(child, newProps);
      });

      return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
        'div',
        { className: classNames.join(' '),
          style: this.props.style },
        this.children
      );
    }
  }]);

  return ReflexContainer;
}(__WEBPACK_IMPORTED_MODULE_14_react___default.a.Component);

ReflexContainer.propTypes = {
  orientation: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.object };
ReflexContainer.defaultProps = {
  orientation: 'horizontal',
  className: '',
  style: {} };


/* harmony default export */ __webpack_exports__["a"] = (ReflexContainer);

/***/ }),

/***/ 1317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



///////////////////////////////////////////////////////////
// ReflexEvents
// By Philippe Leefsma
// December 2016
//
///////////////////////////////////////////////////////////
var ReflexEvents = function () {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ReflexEvents() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ReflexEvents);

    this._events = {};
  }

  /////////////////////////////////////////////////////////
  // Supports multiple events space-separated
  //
  /////////////////////////////////////////////////////////


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(ReflexEvents, [{
    key: 'on',
    value: function on(events, fct) {
      var _this = this;

      events.split(' ').forEach(function (event) {

        _this._events[event] = _this._events[event] || [];
        _this._events[event].push(fct);
      });

      return this;
    }

    /////////////////////////////////////////////////////////
    // Supports multiple events space-separated
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'off',
    value: function off(events, fct) {
      var _this2 = this;

      if (events == undefined) {

        this._events = {};
        return;
      }

      events.split(' ').forEach(function (event) {

        if (event in _this2._events === false) return;

        if (fct) {

          _this2._events[event].splice(_this2._events[event].indexOf(fct), 1);
        } else {

          _this2._events[event] = [];
        }
      });

      return this;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'emit',
    value: function emit(event /* , args... */) {

      if (this._events[event] === undefined) return;

      var tmpArray = this._events[event].slice();

      for (var i = 0; i < tmpArray.length; ++i) {

        var result = tmpArray[i].apply(this, Array.prototype.slice.call(arguments, 1));

        if (result !== undefined) {

          return result;
        }
      }

      return undefined;
    }
  }]);

  return ReflexEvents;
}();

/* harmony default export */ __webpack_exports__["a"] = (ReflexEvents);

/***/ }),

/***/ 1332:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1109);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1109, function() {
			var newContent = __webpack_require__(1109);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1337:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1110);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1110, function() {
			var newContent = __webpack_require__(1110);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".configurator-view .home {\n  background-image: url(\"/resources/img/routes/configurator.jpg\");\n  background-position: center center;\n  background-size: cover;\n  padding: 10px 0;\n  color: white;\n  height: 100%; }\n  .configurator-view .home .search {\n    background: rgba(248, 248, 248, 0.4);\n    margin: 0 auto 10px auto;\n    padding: 5px 0 0 30px;\n    position: relative;\n    max-width: 978px;\n    text-align: left;\n    height: 30px;\n    color: white;\n    width: 95%; }\n  .configurator-view .home .search[contenteditable]:empty:not(:focus):before {\n    content: attr(data-placeholder);\n    pointer-events: none;\n    color: #d8d8d8; }\n  .configurator-view .home .container {\n    background: rgba(248, 248, 248, 0.4);\n    height: calc(100% - 46px);\n    margin: 0 auto 0 auto;\n    position: relative;\n    width: 95%; }\n  .configurator-view .home .primary {\n    height: calc(100% - 30px);\n    overflow: scroll;\n    margin-top: 16px; }\n  .configurator-view .home .secondary {\n    margin: 16px 0 0 0;\n    overflow: hidden; }\n  @media only screen and (max-width: 876px) {\n    .configurator-view .home .search {\n      max-width: 978px; }\n    .configurator-view .home .container {\n      max-width: 978px; }\n    .configurator-view .home .primary {\n      max-width: 100%;\n      margin-left: 0;\n      float: none;\n      width: auto; } }\n  @media only screen and (min-width: 875px) {\n    .configurator-view .home .search {\n      max-width: 978px; }\n    .configurator-view .home .container {\n      max-width: 978px; }\n    .configurator-view .home .primary {\n      margin: 16px 0px 0 3.0%;\n      padding-right: 40px;\n      width: 75%;\n      float: left; }\n    .configurator-view .home .secondary {\n      float: left;\n      width: 32%; } }\n  .configurator-view .home .item:last-child {\n    padding-bottom: 100px; }\n  .configurator-view .home .item {\n    box-shadow: 20px 20px 33px 0px rgba(0, 0, 0, 0.21);\n    display: inline-block;\n    margin: 0 0 16px 0;\n    min-height: 246px;\n    text-align: left;\n    color: black;\n    width: 100%;\n    padding: 0; }\n    .configurator-view .home .item .content {\n      transition-property: background;\n      transition-timing-function: ease;\n      transition-duration: 0.85s;\n      transition-delay: 0.0s;\n      background: rgba(245, 245, 245, 0.8);\n      display: inline-block;\n      min-height: 216px;\n      cursor: pointer;\n      width: 100%; }\n    .configurator-view .home .item .content:hover {\n      background: rgba(255, 253, 60, 0.9);\n      text-decoration: none; }\n    @media only screen and (max-width: 549px) {\n      .configurator-view .home .item .image-container {\n        box-shadow: 15px 15px 33px 0px rgba(0, 0, 0, 0.21);\n        border: 1px solid #cccccc;\n        height: 200px;\n        width: 200px;\n        float: left;\n        margin: 8px; }\n      .configurator-view .home .item .title {\n        margin: 4px 0 0 22px;\n        font-size: 18px;\n        color: black; }\n      .configurator-view .home .item .description {\n        width: calc(100% - 220px);\n        padding: 10px 20px 0 25px;\n        color: #545454;\n        float: left; } }\n    @media only screen and (min-width: 550px) {\n      .configurator-view .home .item .image-container {\n        box-shadow: 15px 15px 33px 0px rgba(0, 0, 0, 0.21);\n        border: 1px solid #cccccc;\n        height: 200px;\n        width: 200px;\n        float: left;\n        margin: 8px; }\n      .configurator-view .home .item .title {\n        margin: 4px 0 0 22px;\n        font-size: 18px;\n        color: black; }\n      .configurator-view .home .item .description {\n        width: calc(100% - 220px);\n        padding: 10px 20px 0 25px;\n        color: #545454;\n        float: left; } }\n    .configurator-view .home .item .image-container img {\n      -o-object-position: center;\n         object-position: center;\n      height: 100%;\n      width: 100%; }\n    .configurator-view .home .item .footer {\n      border-top: 1px solid gainsboro;\n      background: #f9f9f9;\n      height: 34px;\n      float: left;\n      width: 100%; }\n      .configurator-view .home .item .footer .dropdown {\n        margin-left: 9px;\n        top: 4px; }\n        .configurator-view .home .item .footer .dropdown .dropdown-toggle.btn {\n          background: #dedede;\n          padding: 1px 12px;\n          min-width: 198px;\n          border-radius: 0; }\n      .configurator-view .home .item .footer .git-link {\n        text-decoration: none;\n        margin: 3px 4px 0 0;\n        cursor: pointer;\n        font-size: 28px;\n        color: black;\n        float: right; }\n", ""]);

// exports


/***/ }),

/***/ 1375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".configurator-view {\n  height: calc(100vh - 69px);\n  background-color: #dadada;\n  position: relative;\n  width: 100vw; }\n", ""]);

// exports


/***/ }),

/***/ 1474:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

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

var _class, _temp; //////////////////////////////////////////////////////////////////////////
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


var _EventsEmitter2 = __webpack_require__(372);

var _EventsEmitter3 = _interopRequireDefault(_EventsEmitter2);

var _Stopwatch = __webpack_require__(1067);

var _Stopwatch2 = _interopRequireDefault(_Stopwatch);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _easingJs = __webpack_require__(1150);

var _easingJs2 = _interopRequireDefault(_easingJs);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1547);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = (_temp = _class = function (_EventsEmitter) {
  (0, _inherits3.default)(Panel, _EventsEmitter);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function Panel(props) {
    (0, _classCallCheck3.default)(this, Panel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).call(this));

    _this.props = (0, _assign2.default)({}, Panel.defaultProps, props);

    _this.onStartDragging = _this.onStartDragging.bind(_this);
    _this.onStartResizing = _this.onStartResizing.bind(_this);
    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);

    _this.renderable = _this.props.renderable;

    _this.container = _this.props.container;

    _this.document = _this.props.document;

    _this.document.addEventListener('touchend', _this.onMouseUp);

    _this.document.addEventListener('mouseup', _this.onMouseUp);

    _this.document.addEventListener('mousemove', _this.onMouseMove);

    _this.document.addEventListener('touchmove', _this.onMouseMove);

    _this.react = _this.props.react;

    _this.id = _this.props.id;

    _this.react.setState({

      width: props.width || 300,
      left: props.left || 10,
      top: props.top || 10,
      height: 35

    }).then(function () {

      var targetHeight = props.height || 300;

      _this.runAnimation(35, targetHeight, 1.0);
    });
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(Panel, [{
    key: 'destroy',
    value: function destroy() {

      this.document.removeEventListener('touchend', this.onMouseUp);

      this.document.removeEventListener('mouseup', this.onMouseUp);

      this.document.removeEventListener('mousemove', this.onMouseMove);

      this.document.removeEventListener('touchmove', this.onMouseMove);

      this.off();

      var state = this.react.getState();

      return this.runAnimation(state.height, 35, Math.min(state.height / this.props.height, 1.0));
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getPointer',
    value: function getPointer(event) {

      return event.changedTouches ? event.changedTouches[0] : event;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getBounds',
    value: function getBounds(element) {

      var rect = element.getBoundingClientRect();

      return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        height: element.offsetHeight,
        width: element.offsetWidth
      };
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var _this2 = this;

      if (this.dragging) {

        var bounds = this.getBounds(this.container);

        var pointer = this.getPointer(event);

        var state = this.react.getState();

        var left = state.left + pointer.pageX - this.pointer.pageX;

        var top = state.top + pointer.pageY - this.pointer.pageY;

        this.pointer = pointer;

        event.stopPropagation();

        event.preventDefault();

        this.react.setState({

          left: Math.min(Math.max(1, left), bounds.width - state.width - 1),

          top: Math.min(Math.max(1, top), bounds.height - state.height - 1)
        });
      }

      if (this.resizing) {

        var _bounds = this.getBounds(this.container);

        var _pointer = this.getPointer(event);

        var _state = this.react.getState();

        var width = _state.width + _pointer.pageX - this.pointer.pageX;

        var height = _state.height + _pointer.pageY - this.pointer.pageY;

        this.pointer = _pointer;

        event.stopPropagation();

        event.preventDefault();

        this.react.setState({

          width: Math.min(Math.max(300, width), _bounds.width - _state.left - 1),

          height: Math.min(Math.max(35, height), _bounds.height - _state.top - 1)

        }).then(function () {

          if (_this2.renderable.onResize) {

            _this2.renderable.onResize();
          }
        });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onStartDragging',
    value: function onStartDragging(event) {

      this.pointer = this.getPointer(event.nativeEvent);

      event.stopPropagation();
      event.preventDefault();

      this.dragging = true;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onStartResizing',
    value: function onStartResizing(event) {

      this.pointer = this.getPointer(event.nativeEvent);

      event.stopPropagation();
      event.preventDefault();

      this.resizing = true;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onMouseUp',
    value: function onMouseUp() {

      if (this.resizing) {

        if (this.renderable.onStopResize) {

          this.renderable.onStopResize();
        }

        this.resizing = false;
      }

      this.dragging = false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'animate',
    value: function animate(period, easing, update) {

      return new _promise2.default(function (resolve) {

        var stopwatch = new _Stopwatch2.default();

        var elapsed = 0;

        var stepFn = function stepFn() {

          var dt = stopwatch.getElapsedMs() * 0.001;

          elapsed += dt;

          if (elapsed < period) {

            var eased = easing(elapsed / period);

            update(eased).then(function () {

              window.requestAnimationFrame(stepFn);
            });
          } else {

            update(1.0);

            resolve();
          }
        };

        stepFn();
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'runAnimation',
    value: function runAnimation(start, end, animPeriod) {
      var _this3 = this;

      var easingFn = function easingFn(t) {
        //b: begging value, c: change in value, d: duration
        return _easingJs2.default.easeInOutExpo(t, 0, 1.0, animPeriod * 0.9);
      };

      var update = function update(eased) {

        var height = (1.0 - eased) * start + eased * end;

        return new _promise2.default(function (resolve) {

          _this3.react.setState({
            height: height
          }).then(function () {
            return resolve();
          });
        });
      };

      return this.animate(animPeriod, easingFn, update);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderTitle',
    value: function renderTitle() {

      return _react2.default.createElement(
        'div',
        { className: 'title',
          onTouchStart: this.onStartDragging,
          onMouseDown: this.onStartDragging },
        this.renderable.renderTitle ? this.renderable.renderTitle() : this.renderable.title
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderContent',
    value: function renderContent() {

      var renderOptions = {
        showTitle: false,
        docked: false
      };

      return _react2.default.createElement(
        'div',
        { className: 'content' },
        this.renderable.render(renderOptions)
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderResizer',
    value: function renderResizer() {

      return _react2.default.createElement('div', { className: 'resizer',
        onTouchStart: this.onStartResizing,
        onMouseDown: this.onStartResizing });
    }

    /////////////////////////////////////////////////////////
    // Render component
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      var state = this.react.getState();

      var classNames = ['react-panel'].concat((0, _toConsumableArray3.default)(this.props.className.split(' ')));

      var style = (0, _assign2.default)({
        height: state.height,
        width: state.width,
        left: state.left,
        top: state.top
      }, this.props.style);

      return _react2.default.createElement(
        'div',
        { className: classNames.join(' '),
          style: style,
          key: this.id },
        this.renderTitle(),
        this.renderContent(),
        this.renderResizer()
      );
    }
  }]);
  return Panel;
}(_EventsEmitter3.default), _class.defaultProps = {
  className: '',
  style: {},
  document: document }, _temp);
exports.default = Panel;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Panel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1475:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Panel = __webpack_require__(1474);

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Panel2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1484:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = __webpack_require__(373);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = __webpack_require__(218);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(371);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

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

var _desc, _value, _class, _class2, _temp;

var _reactReflex = __webpack_require__(1131);

var _Viewer = __webpack_require__(1315);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _Loader = __webpack_require__(1046);

var _BaseComponent2 = __webpack_require__(1123);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _autobindDecorator = __webpack_require__(374);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _SvcManager = __webpack_require__(67);

var _SvcManager2 = _interopRequireDefault(_SvcManager);

__webpack_require__(1550);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Stopwatch = __webpack_require__(1067);

var _Stopwatch2 = _interopRequireDefault(_Stopwatch);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _merge = __webpack_require__(404);

var _merge2 = _interopRequireDefault(_merge);

var _find = __webpack_require__(1223);

var _find2 = _interopRequireDefault(_find);

var _easingJs = __webpack_require__(1150);

var _easingJs2 = _interopRequireDefault(_easingJs);

var _Viewer3 = __webpack_require__(1145);

var _Viewer4 = _interopRequireDefault(_Viewer3);

var _Panel = __webpack_require__(1475);

var _Panel2 = _interopRequireDefault(_Panel);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(103);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var ViewerConfigurator = (_class = (_temp = _class2 = function (_BaseComponent) {
  (0, _inherits3.default)(ViewerConfigurator, _BaseComponent);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ViewerConfigurator(props, context) {
    (0, _classCallCheck3.default)(this, ViewerConfigurator);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ViewerConfigurator.__proto__ || (0, _getPrototypeOf2.default)(ViewerConfigurator)).call(this, props, context));

    _this.notifySvc = _SvcManager2.default.getService('NotifySvc');

    _this.eventSvc = _SvcManager2.default.getService('EventSvc');

    _this.modelSvc = _SvcManager2.default.getService('ModelSvc');

    _this.state = {
      dataExtension: null,
      viewerPanels: [],
      viewerFlex: 1.0,
      resizing: false,
      dbModel: null
    };

    _this.viewerFlex = 1.0;
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(ViewerConfigurator, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var dbModel, viewerEnv;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;


                this.loader = new _Loader.Loader(this.loaderContainer);

                _context.next = 4;
                return this.modelSvc.getModel(this.props.database, this.props.modelId);

              case 4:
                dbModel = _context.sent;

                if (this.props.appState.viewerEnv) {
                  _context.next = 11;
                  break;
                }

                _context.next = 8;
                return this.initialize({
                  useConsolidation: true,
                  env: dbModel.env
                });

              case 8:
                viewerEnv = _context.sent;


                this.props.setViewerEnv(viewerEnv);

                Autodesk.Viewing.Private.memoryOptimizedSvfLoading = true;

              case 11:

                this.assignState({
                  dbModel: dbModel
                });

                window.addEventListener('resize', this.onResize);

                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](0);
                return _context.abrupt('return', this.props.onError(_context.t0));

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 15]]);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      window.removeEventListener('resize', this.onResize);
    }

    /////////////////////////////////////////////////////////
    // Initialize viewer environment
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'initialize',
    value: function initialize(options) {

      return new _promise2.default(function (resolve, reject) {

        Autodesk.Viewing.Initializer(options, function () {

          resolve();
        }, function (error) {

          reject(error);
        });
      });
    }

    /////////////////////////////////////////////////////////
    // Load a document from URN
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadDocument',
    value: function loadDocument(urn) {

      return new _promise2.default(function (resolve, reject) {

        var paramUrn = !urn.startsWith('urn:') ? 'urn:' + urn : urn;

        Autodesk.Viewing.Document.load(paramUrn, function (doc) {

          resolve(doc);
        }, function (error) {

          reject(error);
        });
      });
    }

    /////////////////////////////////////////////////////////
    // Return viewable path: first 3d or 2d item by default
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getViewablePath',
    value: function getViewablePath(doc) {
      var pathIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [{ type: 'geometry', role: '3d' }, { type: 'geometry', role: '2d' }];


      var toArray = function toArray(obj) {

        return obj ? Array.isArray(obj) ? obj : [obj] : [];
      };

      var rootItem = doc.getRootItem();

      var items = [];

      toArray(query).forEach(function (queryItem) {

        items = [].concat((0, _toConsumableArray3.default)(items), (0, _toConsumableArray3.default)(Autodesk.Viewing.Document.getSubItemsWithProperties(rootItem, queryItem, true)));
      });

      if (!items.length || pathIdx > items.length - 1) {

        return null;
      }

      return doc.getViewablePath(items[pathIdx]);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadDynamicExtension',
    value: function loadDynamicExtension(viewer, extension, options) {
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {

        var ext = viewer.getExtension(extension.id);

        if (ext) {

          if (ext.reload) {

            ext.reload(options);
          }

          return resolve(ext);
        }

        __webpack_require__(1559)("./" + extension.id + '/index').then(function () {

          var extState = (0, _defineProperty3.default)({}, extension.id, {});

          _this2.assignState(extState).then(function () {

            viewer.loadExtension(extension.id, options).then(function (extInstance) {

              _this2.eventSvc.emit('extension.loaded', {
                extension: extInstance
              });

              return resolve(extInstance);
            }, function (err) {

              reject('Failed to load extension: ' + extension.id);
            });
          });
        }, function (error) {

          reject(error);
        });
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'pushRenderExtension',
    value: function pushRenderExtension(extension) {
      var _this3 = this;

      return new _promise2.default(function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve) {
          var layout;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  layout = _this3.state.dbModel.layout;


                  _this3.viewerFlex = layout ? 1.0 - (layout.leftFlex || layout.rightFlex || 0.3) : 1.0;

                  _context2.next = 4;
                  return _this3.assignState({
                    paneExtStyle: { display: 'block' }
                  });

                case 4:
                  _context2.next = 6;
                  return _this3.runAnimation(1.0, _this3.viewerFlex, 1.0);

                case 6:

                  setTimeout(function () {

                    _this3.assignState({
                      renderExtension: extension
                    }).then(function () {

                      resolve();
                    });
                  }, 250);

                case 7:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }));

        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'popRenderExtension',
    value: function popRenderExtension() {
      var _this4 = this;

      return new _promise2.default(function (resolve) {

        _this4.assignState({
          renderExtension: null
        }).then(function () {
          resolve();
        });

        setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this4.runAnimation(_this4.viewerFlex, 1.0, 1.0);

                case 2:
                  _context3.next = 4;
                  return _this4.assignState({
                    paneExtStyle: { display: 'none' }
                  });

                case 4:

                  resolve();

                case 5:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4);
        })), 250);
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'pushViewerPanel',
    value: function pushViewerPanel(viewer) {
      var _this5 = this;

      return function (renderable) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


        var nbPanels = _this5.state.viewerPanels.length;

        var panelId = renderable.id;

        var props = (0, _assign2.default)({
          left: 10 + 50 * nbPanels,
          top: 10 + 55 * nbPanels
        }, opts, {
          container: viewer.container,
          id: panelId,
          renderable: renderable,
          react: {
            setState: function setState(state) {

              return new _promise2.default(function (resolve) {

                var panelState = _this5.state[panelId] || {};

                var newPanelState = (0, _defineProperty3.default)({}, panelId, (0, _assign2.default)({}, panelState, state));

                _this5.assignState(newPanelState).then(function () {

                  resolve(newPanelState);
                });
              });
            },
            getState: function getState() {

              return _this5.state[panelId] || {};
            }
          }
        });

        return new _promise2.default(function (resolve) {

          var panel = new _Panel2.default(props);

          _this5.assignState({
            viewerPanels: [].concat((0, _toConsumableArray3.default)(_this5.state.viewerPanels), [panel])
          }).then(function () {

            resolve(panel);
          });
        });
      };
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'popViewerPanel',
    value: function popViewerPanel(panelId) {
      var _this6 = this;

      return new _promise2.default(function (resolve) {

        var targetPanel = (0, _find2.default)(_this6.state.viewerPanels, {
          id: panelId
        });

        targetPanel ? targetPanel.destroy().then(function () {

          var viewerPanels = _this6.state.viewerPanels.filter(function (panel) {
            return panel.id !== panelId;
          });

          _this6.assignState({
            viewerPanels: viewerPanels
          });
          resolve();
        }) : resolve();
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'setupDynamicExtensions',
    value: function setupDynamicExtensions(viewer) {
      var _this7 = this;

      var ctrlGroup = this.createToolbar(viewer);

      var defaultOptions = {
        setNavbarState: this.props.setNavbarState,
        appContainer: _reactDom2.default.findDOMNode(this),
        getViewablePath: this.getViewablePath,
        loadDocument: this.loadDocument,
        model: this.state.dbModel.model,
        database: this.props.database,
        location: this.props.location,
        appState: this.props.appState,
        dbModel: this.state.dbModel,
        parentControl: ctrlGroup,
        notify: this.notifySvc,
        loader: this.loader,
        apiUrl: '/api'
      };

      var createDefaultOptions = function createDefaultOptions(id) {

        var fullDefaultOptions = (0, _assign2.default)({}, defaultOptions, {
          react: {
            formatMessage: _this7.context.intl.formatMessage,

            pushRenderExtension: _this7.pushRenderExtension,

            pushViewerPanel: _this7.pushViewerPanel(viewer),

            popRenderExtension: _this7.popRenderExtension,

            popViewerPanel: _this7.popViewerPanel,

            forceUpdate: function forceUpdate() {

              return new _promise2.default(function (resolve) {
                _this7.forceUpdate(function () {
                  resolve();
                });
              });
            },
            getComponent: function getComponent() {

              return _this7;
            },
            getState: function getState() {

              return _this7.state[id] || {};
            },
            setState: function setState(state, doMerge) {

              return new _promise2.default(function (resolve) {

                var extState = _this7.state[id] || {};

                var newExtState = (0, _defineProperty3.default)({}, id, doMerge ? (0, _merge2.default)({}, extState, state) : (0, _assign2.default)({}, extState, state));

                _this7.assignState(newExtState).then(function () {

                  resolve(newExtState);
                });
              });
            }
          }
        });

        return fullDefaultOptions;
      };

      viewer.loadDynamicExtension = function (id) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


        var fullOptions = (0, _merge2.default)({}, createDefaultOptions(id), {
          viewerDocument: _this7.viewerDocument,
          eventSink: _this7.eventSvc
        }, options);

        return _this7.loadDynamicExtension(viewer, { id: id }, fullOptions);
      };

      var extensions = this.state.dbModel.dynamicExtensions || [];

      var extensionTasks = extensions.map(function (extension) {

        return viewer.loadDynamicExtension(extension.id, extension.options);
      });

      return _promise2.default.all(extensionTasks);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'animate',
    value: function animate(period, easing, update) {

      return new _promise2.default(function (resolve) {

        var stopwatch = new _Stopwatch2.default();

        var elapsed = 0;

        var stepFn = function stepFn() {

          var dt = stopwatch.getElapsedMs() * 0.001;

          elapsed += dt;

          if (elapsed < period) {

            var eased = easing(elapsed / period);

            update(eased).then(function () {

              window.requestAnimationFrame(stepFn);
            });
          } else {

            update(1.0);

            resolve();
          }
        };

        stepFn();
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'runAnimation',
    value: function runAnimation(start, end, animPeriod) {
      var _this8 = this;

      var easingFn = function easingFn(t) {
        //b: begging value, c: change in value, d: duration
        return _easingJs2.default.easeInOutExpo(t, 0, 1.0, animPeriod * 0.9);
      };

      var update = function update(eased) {

        var viewerFlex = (1.0 - eased) * start + eased * end;

        return new _promise2.default(function (resolve) {

          _this8.assignState({
            viewerFlex: viewerFlex
          }).then(function () {
            return resolve();
          });
        });
      };

      return this.animate(animPeriod, easingFn, update);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'createToolbar',
    value: function createToolbar(viewer) {

      var toolbarContainer = document.createElement('div');

      toolbarContainer.className = 'configurator-toolbar';

      viewer.container.appendChild(toolbarContainer);

      var toolbar = new Autodesk.Viewing.UI.ToolBar(true);

      var ctrlGroup = new Autodesk.Viewing.UI.ControlGroup('configurator');

      toolbar.addControl(ctrlGroup);

      toolbarContainer.appendChild(toolbar.container);

      return ctrlGroup;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'buildTransform',
    value: function buildTransform() {
      var transform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


      var matrix = new THREE.Matrix4();

      var position = new THREE.Vector3();

      position.fromArray(transform.position || [0, 0, 0]);

      var euler = new THREE.Euler(0, 0, 0, 'XYZ');

      euler.fromArray(transform.euler || [0, 0, 0]);

      var quaternion = new THREE.Quaternion();

      quaternion.setFromEuler(euler);

      var scale = new THREE.Vector3();

      scale.fromArray(transform.scale || [1, 1, 1]);

      matrix.compose(position, quaternion, scale);

      return matrix;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onModelRootLoaded',
    value: function onModelRootLoaded(event) {

      var viewer = event.target;

      viewer.removeEventListener(Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT, this.onModelRootLoaded);

      var nav = viewer.navigation;

      nav.toPerspective();

      viewer.autocam.setHomeViewFrom(nav.getCamera());
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onGeometryLoaded',
    value: function onGeometryLoaded(event) {

      var viewer = event.target;

      viewer.removeEventListener(Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT, this.onGeometryLoaded);

      setTimeout(function () {
        viewer.showViewCubeTriad(true);
      }, 2000);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onViewerCreated',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(viewer, modelInfo) {
        var _this9 = this;

        var lmvProxy, localOptions, query, path, loadOptions;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;


                this.loader = new _Loader.Loader(viewer.container);

                this.loader.show(this.props.showLoader);

                if (this.props.onViewerCreated) {

                  this.props.onViewerCreated(viewer, this.loader);
                }

                viewer.start();

                viewer.addEventListener(Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT, this.onModelRootLoaded);

                viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, this.onGeometryLoaded);

                viewer.prefs.tag('ignore-producer');

                _context4.next = 10;
                return this.setupDynamicExtensions(viewer);

              case 10:
                if (!modelInfo) {
                  _context4.next = 27;
                  break;
                }

                lmvProxy = modelInfo.proxy || 'lmv-proxy-2legged';


                Autodesk.Viewing.endpoint.setEndpointAndApi(window.location.origin + '/' + lmvProxy, 'modelDerivativeV2');

                _context4.t0 = this.state.dbModel.env;
                _context4.next = _context4.t0 === 'Local' ? 16 : _context4.t0 === 'AutodeskProduction' ? 19 : 27;
                break;

              case 16:
                localOptions = {
                  placementTransform: this.buildTransform(modelInfo.transform)
                };


                viewer.loadModel(modelInfo.path, localOptions, function (model) {

                  model.name = modelInfo.displayName || modelInfo.name;
                  model.dbModelId = _this9.state.dbModel._id;
                  model.urn = modelInfo.urn;
                  model.guid = _this9.guid();

                  viewer.activeModel = model;

                  _this9.eventSvc.emit('model.loaded', {
                    model: model
                  });
                });

                return _context4.abrupt('break', 27);

              case 19:
                _context4.next = 21;
                return this.loadDocument(modelInfo.urn);

              case 21:
                this.viewerDocument = _context4.sent;
                query = modelInfo.query || [{ type: 'geometry', role: '3d' }, { type: 'geometry', role: '2d' }];
                path = this.getViewablePath(this.viewerDocument, modelInfo.pathIndex || 0, query);
                loadOptions = {
                  sharedPropertyDbPath: this.viewerDocument.getPropertyDbPath(),
                  placementTransform: this.buildTransform(modelInfo.transform)
                };


                viewer.loadModel(path, loadOptions, function (model) {

                  model.name = modelInfo.displayName || modelInfo.name;
                  model.dbModelId = _this9.state.dbModel._id;
                  model.urn = modelInfo.urn;
                  model.guid = _this9.guid();

                  viewer.activeModel = model;

                  _this9.eventSvc.emit('model.loaded', {
                    model: model
                  });
                });

                return _context4.abrupt('break', 27);

              case 27:
                _context4.next = 33;
                break;

              case 29:
                _context4.prev = 29;
                _context4.t1 = _context4['catch'](0);


                console.log('Viewer Initialization Error: ');
                console.log(_context4.t1);

              case 33:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 29]]);
      }));

      function onViewerCreated(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return onViewerCreated;
    }()

    ////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onViewingApplicationCreated',
    value: function onViewingApplicationCreated(viewingApp) {}

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'guid',
    value: function guid() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xxxxxxxxxxxx';


      var d = new Date().getTime();

      var guid = format.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);
      });

      return guid;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderLoader',
    value: function renderLoader() {
      var _this10 = this;

      return _react2.default.createElement('div', { className: 'configurator-loader',
        ref: function ref(div) {
          return _this10.loaderContainer = div;
        } });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderExtension',
    value: function renderExtension() {
      var renderExtension = this.state.renderExtension;


      var renderOptions = {
        showTitle: true,
        docked: true
      };

      var content = renderExtension ? this.state.renderExtension.render(renderOptions) : _react2.default.createElement('div', null);

      return _react2.default.createElement(
        'div',
        { className: 'data-pane' },
        _react2.default.createElement(_Loader.ReactLoader, { show: !renderExtension }),
        content
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderModel',
    value: function renderModel(modelInfo) {
      var _this11 = this;

      var resizing = this.state.resizing;


      var viewerStyle = {
        pointerEvents: resizing ? 'none' : 'all'
      };

      return _react2.default.createElement(_Viewer4.default, { onViewerCreated: function onViewerCreated(viewer) {
          _this11.onViewerCreated(viewer, modelInfo);
        },
        panels: this.state.viewerPanels,
        style: viewerStyle
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onViewerStartResize',
    value: function onViewerStartResize(e) {

      this.assignState({
        resizing: true
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onViewerStopResize',
    value: function onViewerStopResize(e) {

      this.viewerFlex = e.component.props.flex;

      if (this.state.renderExtension) {

        if (this.state.renderExtension.onStopResize) {

          this.state.renderExtension.onStopResize();
        }
      }

      this.assignState({
        resizing: false
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onResize',
    value: function onResize(event) {

      if (this.state.renderExtension) {

        if (this.state.renderExtension.onResize) {

          this.state.renderExtension.onResize();
        }
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this12 = this;

      var _state = this.state,
          dbModel = _state.dbModel,
          viewerFlex = _state.viewerFlex,
          paneExtStyle = _state.paneExtStyle;


      if (!dbModel) {

        // dbModel not loaded yet -> render loader
        return this.renderLoader();
      }

      var modelInfo = dbModel.model;

      var layout = dbModel.layout;

      switch (layout ? layout.type : 'none') {

        case 'flexLayoutLeft':
          return _react2.default.createElement(
            _reactReflex.ReflexContainer,
            { className: 'configurator',
              key: 'configurator', orientation: 'vertical' },
            _react2.default.createElement(
              _reactReflex.ReflexElement,
              { style: paneExtStyle },
              this.renderExtension()
            ),
            _react2.default.createElement(_reactReflex.ReflexSplitter, {
              onStopResize: function onStopResize() {
                return _this12.forceUpdate();
              },
              style: paneExtStyle
            }),
            _react2.default.createElement(
              _reactReflex.ReflexElement,
              {
                onStartResize: this.onViewerStartResize,
                onStopResize: this.onViewerStopResize,
                propagateDimensions: true,
                onResize: this.onResize,
                flex: viewerFlex },
              this.renderModel(modelInfo)
            )
          );

        case 'flexLayoutRight':
          return _react2.default.createElement(
            _reactReflex.ReflexContainer,
            { className: 'configurator',
              key: 'configurator', orientation: 'vertical' },
            _react2.default.createElement(
              _reactReflex.ReflexElement,
              {
                onStartResize: this.onViewerStartResize,
                onStopResize: this.onViewerStopResize,
                propagateDimensions: true,
                onResize: this.onResize,
                flex: viewerFlex },
              this.renderModel(modelInfo)
            ),
            _react2.default.createElement(_reactReflex.ReflexSplitter, {
              onStopResize: function onStopResize() {
                return _this12.forceUpdate();
              },
              style: paneExtStyle
            }),
            _react2.default.createElement(
              _reactReflex.ReflexElement,
              { style: paneExtStyle },
              this.renderExtension()
            )
          );

        case 'none':
        default:
          return this.renderModel(modelInfo);
      }
    }
  }]);
  return ViewerConfigurator;
}(_BaseComponent3.default), _class2.contextTypes = {
  intl: _reactIntl.intlShape }, _class2.propTypes = {
  setViewerEnv: _propTypes2.default.func.isRequired,
  database: _propTypes2.default.string.isRequired,
  modelId: _propTypes2.default.string.isRequired,
  appState: _propTypes2.default.object }, _temp), (_applyDecoratedDescriptor(_class.prototype, 'getViewablePath', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'getViewablePath'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'pushRenderExtension', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'pushRenderExtension'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'popRenderExtension', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'popRenderExtension'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'pushViewerPanel', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'pushViewerPanel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'popViewerPanel', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'popViewerPanel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onModelRootLoaded', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onModelRootLoaded'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onGeometryLoaded', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onGeometryLoaded'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onViewerStartResize', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onViewerStartResize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onViewerStopResize', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onViewerStopResize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onResize', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onResize'), _class.prototype)), _class);
exports.default = ViewerConfigurator;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Viewer.Configurator.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1485:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Viewer = __webpack_require__(1484);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Viewer2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1547:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1169);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1169, function() {
			var newContent = __webpack_require__(1169);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1550:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1172);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1172, function() {
			var newContent = __webpack_require__(1172);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1559:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Viewing.Extension.BarChart/index": [
		1571,
		35
	],
	"./Viewing.Extension.BoundingBox/index": [
		1572,
		51
	],
	"./Viewing.Extension.CAT/CAT.Command/index": [
		1338,
		44
	],
	"./Viewing.Extension.CAT/index": [
		1573,
		22
	],
	"./Viewing.Extension.ConfigManager/index": [
		1574,
		19
	],
	"./Viewing.Extension.ContextMenu/index": [
		1339,
		54
	],
	"./Viewing.Extension.DataManagement/DataTreeView/index": [
		1340,
		18
	],
	"./Viewing.Extension.DataManagement/index": [
		1575,
		16
	],
	"./Viewing.Extension.DualViewer/index": [
		1576,
		40
	],
	"./Viewing.Extension.ExtensionManager/index": [
		1577,
		34
	],
	"./Viewing.Extension.Fader/index": [
		1578,
		13
	],
	"./Viewing.Extension.ForceGraph/index": [
		1579,
		37
	],
	"./Viewing.Extension.HFDM/HFDM/Types/Math.Vector3d/index": [
		1341,
		59
	],
	"./Viewing.Extension.HFDM/HFDM/Types/Viewer.Camera/index": [
		1342,
		58
	],
	"./Viewing.Extension.HFDM/index": [
		1581,
		25
	],
	"./Viewing.Extension.IoT.2/IoT.Graph/index": [
		1343,
		53
	],
	"./Viewing.Extension.IoT.2/index": [
		1582,
		21
	],
	"./Viewing.Extension.IoT/IoT.Graph/index": [
		1344,
		57
	],
	"./Viewing.Extension.IoT/IoT.Popover/index": [
		1583,
		45
	],
	"./Viewing.Extension.IoT/index": [
		1584,
		26
	],
	"./Viewing.Extension.Kinematics/index": [
		1585,
		15
	],
	"./Viewing.Extension.Markup2D/index": [
		1586,
		31
	],
	"./Viewing.Extension.Markup3D/index": [
		1345,
		27
	],
	"./Viewing.Extension.MarqueeSelect/index": [
		1587,
		55
	],
	"./Viewing.Extension.MetaProperties/MetaProperty/index": [
		1346,
		52
	],
	"./Viewing.Extension.MetaProperties/MetaTreeView/index": [
		1347,
		17
	],
	"./Viewing.Extension.MetaProperties/index": [
		1588,
		10
	],
	"./Viewing.Extension.MetaProperty/index": [
		1348,
		46
	],
	"./Viewing.Extension.ModelLoader/index": [
		1589,
		29
	],
	"./Viewing.Extension.ModelTransformer/index": [
		1590,
		32
	],
	"./Viewing.Extension.Particle.LHC/index": [
		1591,
		47
	],
	"./Viewing.Extension.Particle/ParticleSystem/index": [
		1349,
		49
	],
	"./Viewing.Extension.Particle/index": [
		1592,
		30
	],
	"./Viewing.Extension.Physics.Core/index": [
		1593,
		50
	],
	"./Viewing.Extension.Physics.RigidBody/index": [
		1594,
		14
	],
	"./Viewing.Extension.Physics.SoftBody/index": [
		1595,
		11
	],
	"./Viewing.Extension.PieChart/index": [
		1596,
		33
	],
	"./Viewing.Extension.PlantFactory/index": [
		1597,
		12
	],
	"./Viewing.Extension.ScreenShotManager/index": [
		1598,
		39
	],
	"./Viewing.Extension.SelectionFilter/FilterTreeView/index": [
		1350,
		38
	],
	"./Viewing.Extension.SelectionFilter/index": [
		1599,
		28
	],
	"./Viewing.Extension.SelectionWindow/SelectionTreeView/index": [
		1351,
		41
	],
	"./Viewing.Extension.SelectionWindow/index": [
		1600,
		24
	],
	"./Viewing.Extension.ShaderMaterial/index": [
		1601,
		42
	],
	"./Viewing.Extension.Showcase/index": [
		1602,
		43
	],
	"./Viewing.Extension.StateManager/index": [
		1352,
		23
	],
	"./Viewing.Extension.Transform/index": [
		1353,
		48
	],
	"./Viewing.Extension.UISettings/index": [
		1603,
		56
	],
	"./Viewing.Extension.VisualReport/index": [
		1354,
		20
	],
	"./Viewing.Extension.WallAnalyzer/index": [
		1604,
		36
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 1559;

/***/ }),

/***/ 1660:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactContenteditable = __webpack_require__(1040);

var _reactContenteditable2 = _interopRequireDefault(_reactContenteditable);

var _reactRouter = __webpack_require__(135);

var _BaseComponent2 = __webpack_require__(1123);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _SvcManager = __webpack_require__(67);

var _SvcManager2 = _interopRequireDefault(_SvcManager);

var _ConfiguratorItem = __webpack_require__(1661);

var _ConfiguratorItem2 = _interopRequireDefault(_ConfiguratorItem);

__webpack_require__(1794);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Label = __webpack_require__(1034);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfiguratorHomeView = function (_BaseComponent) {
  (0, _inherits3.default)(ConfiguratorHomeView, _BaseComponent);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ConfiguratorHomeView() {
    (0, _classCallCheck3.default)(this, ConfiguratorHomeView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConfiguratorHomeView.__proto__ || (0, _getPrototypeOf2.default)(ConfiguratorHomeView)).call(this));

    _this.modelSvc = _SvcManager2.default.getService('ModelSvc');

    _this.state = {
      search: '',
      items: []
    };
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(ConfiguratorHomeView, [{
    key: 'componentWillMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var items;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.modelSvc.getModels('configurator');

              case 2:
                items = _context.sent;


                this.assignState({
                  items: items
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _ref.apply(this, arguments);
      }

      return componentWillMount;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'gotToLink',
    value: function gotToLink(e, href) {

      e.preventDefault();

      _reactRouter.browserHistory.push(href);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {

      if (e.keyCode === 13) {

        e.stopPropagation();
        e.preventDefault();
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onSearchChanged',
    value: function onSearchChanged(e) {

      this.assignState({
        search: e.target.value.toLowerCase()
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _state = this.state,
          search = _state.search,
          items = _state.items;


      var filteredItems = items.filter(function (model) {
        return search.length ? model.name.toLowerCase().indexOf(search) > -1 : true;
      });

      return filteredItems.map(function (item) {

        return _react2.default.createElement(_ConfiguratorItem2.default, { key: item._id, item: item });
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(_reactContenteditable2.default, {
          onChange: function onChange(e) {
            return _this2.onSearchChanged(e);
          },
          onKeyDown: function onKeyDown(e) {
            return _this2.onKeyDown(e);
          },
          'data-placeholder': 'Search ...',
          html: this.state.search,
          className: 'search' }),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'primary' },
            _react2.default.createElement(
              'div',
              { className: 'items' },
              this.renderItems()
            )
          )
        )
      );
    }
  }]);
  return ConfiguratorHomeView;
}(_BaseComponent3.default);

exports.default = ConfiguratorHomeView;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ConfiguratorHomeView.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1661:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactBootstrap = __webpack_require__(376);

var _reactRouter = __webpack_require__(135);

var _BaseComponent2 = __webpack_require__(1123);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _SvcManager = __webpack_require__(67);

var _SvcManager2 = _interopRequireDefault(_SvcManager);

var _Image = __webpack_require__(1153);

var _Image2 = _interopRequireDefault(_Image);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Label = __webpack_require__(1034);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfiguratorItem = function (_BaseComponent) {
  (0, _inherits3.default)(ConfiguratorItem, _BaseComponent);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ConfiguratorItem() {
    (0, _classCallCheck3.default)(this, ConfiguratorItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConfiguratorItem.__proto__ || (0, _getPrototypeOf2.default)(ConfiguratorItem)).call(this));

    _this.modelSvc = _SvcManager2.default.getService('ModelSvc');

    _this.state = {
      activeModel: null
    };
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(ConfiguratorItem, [{
    key: 'setActiveModel',
    value: function setActiveModel(activeModel) {

      this.assignState({
        activeModel: activeModel
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {

      var name = this.props.item.model ? this.props.item.model.name : this.props.item.name;

      var activeModel = {
        _id: this.props.item._id,
        name: name
      };

      this.assignState({
        activeModel: activeModel
      });

      if (this.props.item.extraModels) {

        var extraModels = [].concat((0, _toConsumableArray3.default)(this.props.item.extraModels));

        extraModels.unshift(activeModel);

        this.assignState({
          extraModels: extraModels,
          activeModel: activeModel
        });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderDropdown',
    value: function renderDropdown() {
      var _this2 = this;

      var extraModels = this.state.extraModels;

      var menuItems = extraModels.map(function (model, idx) {
        return _react2.default.createElement(
          _reactBootstrap.MenuItem,
          { eventKey: idx, key: idx, onClick: function onClick() {

              _this2.setActiveModel(model);
            } },
          model.name
        );
      });

      return _react2.default.createElement(
        _reactBootstrap.DropdownButton,
        {
          title: "Model: " + this.state.activeModel.name,
          key: 'extra-dropdown',
          id: 'extra-dropdown' },
        menuItems
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      var activeModel = this.state.activeModel;

      var item = this.props.item;

      var thumbnailUrl = this.modelSvc.getThumbnailUrl('configurator', item._id);

      var href = '/configurator?id=' + activeModel._id;

      return _react2.default.createElement(
        'div',
        { className: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'content', to: href },
          _react2.default.createElement(
            'div',
            { className: 'image-container' },
            _react2.default.createElement(_Image2.default, { src: thumbnailUrl })
          ),
          _react2.default.createElement(
            'label',
            { className: 'title' },
            item.name
          ),
          _react2.default.createElement(
            'p',
            { className: 'description' },
            item.desc || ''
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer' },
          item.extraModels && this.renderDropdown(),
          _react2.default.createElement('a', { className: 'git-link fa fa-github',
            href: item.git,
            target: '_blank' })
        )
      );
    }
  }]);
  return ConfiguratorItem;
}(_BaseComponent3.default);

exports.default = ConfiguratorItem;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ConfiguratorItem.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1662:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConfiguratorHomeView = __webpack_require__(1660);

var _ConfiguratorHomeView2 = _interopRequireDefault(_ConfiguratorHomeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ConfiguratorHomeView2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1663:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _ConfiguratorHomeView = __webpack_require__(1662);

var _ConfiguratorHomeView2 = _interopRequireDefault(_ConfiguratorHomeView);

var _Viewer = __webpack_require__(1485);

var _Viewer2 = _interopRequireDefault(_Viewer);

var _reactRouter = __webpack_require__(135);

__webpack_require__(1795);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfiguratorView = function (_React$Component) {
  (0, _inherits3.default)(ConfiguratorView, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ConfiguratorView(props) {
    (0, _classCallCheck3.default)(this, ConfiguratorView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConfiguratorView.__proto__ || (0, _getPrototypeOf2.default)(ConfiguratorView)).call(this, props));

    _this.onError = _this.onError.bind(_this);
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(ConfiguratorView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.props.setNavbarState({
        links: {
          settings: false
        }
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onError',
    value: function onError(error) {

      if (error.responseJSON === 'Not Found') {

        _reactRouter.browserHistory.push('/404');
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      var view = this.props.location.query.id ? _react2.default.createElement(_Viewer2.default, {
        setNavbarState: this.props.setNavbarState,
        setViewerEnv: this.props.setViewerEnv,
        modelId: this.props.location.query.id,
        appState: this.props.appState,
        location: this.props.location,
        database: 'configurator',
        onError: this.onError,
        notify: this.notify,
        showLoader: true
      }) : _react2.default.createElement(_ConfiguratorHomeView2.default, null);

      return _react2.default.createElement(
        'div',
        { className: 'configurator-view' },
        view
      );
    }
  }]);
  return ConfiguratorView;
}(_react2.default.Component);

exports.default = ConfiguratorView;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ConfiguratorView.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConfiguratorView = __webpack_require__(1663);

var _ConfiguratorView2 = _interopRequireDefault(_ConfiguratorView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ConfiguratorView2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1794:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1374);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1374, function() {
			var newContent = __webpack_require__(1374);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1795:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1375);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1375, function() {
			var newContent = __webpack_require__(1375);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _ConfiguratorView = __webpack_require__(1664);

var _ConfiguratorView2 = _interopRequireDefault(_ConfiguratorView);

var _reactRedux = __webpack_require__(68);

var _app = __webpack_require__(225);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = {
  setNavbarState: _app.setNavbarState,
  setViewerEnv: _app.setViewerEnv
};

var mapStateToProps = function mapStateToProps(state) {
  return (0, _assign2.default)({}, state.configurator, {
    appState: state.app
  });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ConfiguratorView2.default);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ConfiguratorContainer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;
// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

var actions = exports.actions = {};

// ------------------------------------
// Action Handlers
// ------------------------------------
var ACTION_HANDLERS = {};

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  var handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "configurator.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

});
//# sourceMappingURL=1.js.map