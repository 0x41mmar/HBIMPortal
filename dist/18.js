webpackJsonp([18],{

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

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(1044);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".datatree-container {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-align: left;\n  height: 100%; }\n  .datatree-container .search {\n    border: 1px solid #888888;\n    background: #fafafa;\n    border-radius: 4px;\n    position: absolute;\n    padding: 0 4px;\n    width: 180px;\n    right: 17px;\n    z-index: 10;\n    top: 38px; }\n  .datatree-container .treeview group {\n    width: 100%; }\n  .datatree-container .treeview lmvheader {\n    transition-property: background, border;\n    transition-timing-function: ease;\n    transition-duration: 1.5s;\n    transition-delay: 0.0s;\n    background: white;\n    margin-bottom: -2px;\n    border: none;\n    height: 30px; }\n    .datatree-container .treeview lmvheader:hover {\n      background: #bcdaff; }\n    .datatree-container .treeview lmvheader .treenode {\n      width: calc(100% - 22px);\n      float: left; }\n      .datatree-container .treeview lmvheader .treenode .name {\n        pointer-events: none; }\n    .datatree-container .treeview lmvheader .treenode span {\n      transition-property: color;\n      transition-timing-function: ease;\n      transition-duration: 1.0s;\n      transition-delay: 0.0s;\n      margin-right: 8px;\n      font-size: 20px;\n      color: #fafafa;\n      display: none;\n      float: right; }\n    .datatree-container .treeview lmvheader .treenode span.fa-edit {\n      position: relative;\n      top: 1px; }\n    .datatree-container .treeview lmvheader .node-loader span {\n      content: url(\"data:image/gif;base64,R0lGODlhHwAfAPMMAJ6enpmZmbi4uNnZ2bKysnNzc1lZWczMzNHR0b+/v4yMjKampv///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSWm5NevNruegpIyShzFGGlJj25loqq5MS76FJM+rrWg7A010A/I2geSwMmhWktClpEmlQJVSqnNyDUgZ2sET+61+v4D0uYJoM9LwtaRNh6vl9LYdIGfkEW93fXR9QwuHaweKFYeNX4qQFI2IUpCLE5MLj5aMlJsHIQSiHAmlS6KoGqWrQ6ijDAKxEqumNK4EsLGytAmnr7qyDKxywAKFFbpDEQAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSam6NevNruegFIyShzFFGlJj25loqq5MS76KJM+rHWi7Ak10A/I2gOSwYmhWktClpEmlQJVSqnNyBUgZWsMT+61+v4v0uTJoM9LwtaRNh6vl9LZ9IWfkB293fXR9QwSHawiKFYeNX4qQFI2IUpCLE5MEj5aMlJsIIQKiHAelS6KoGqWrQ6ijDAmxEqumNK4CsLGytAenr7qyDKxywAmFFbpDEQAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSWm4NevNruegBIyShzFKGlJj25loqq5MS76BJM+rDWg7BU10A/I2i+SwUmhWktClpEmlQJVSqnNyXUgZ2sIT+61+v4T0uWJoM9LwtaRNh6vl9LadIGfkDW93fXR9QwKHawOKFYeNX4qQFI2IUpCLE5MCj5aMlJsDIQmiHAilS6KoGqWrQ6ijDAexEqumNK4JsLGytAinr7qyDKxywAeFFbpDEQAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSSm4NevNruegtIyShzFBGlJj25loqq5MS76AJM+rvWi7AE10A/I2hOSwomhWktClpEmlQJVSqnNyJUgZWsUT+61+v4L0uVJoM9LwtaRNh6vl9LZdIGfkC293fXR9QwmHawaKFYeNX4qQFI2IUpCLE5MJj5aMlJsGIQeiHAOlS6KoGqWrQ6ijDAixEqumNK4HsLGytAOnr7qyDKxywAiFFbpDEQAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSem6NevNruegRIyShzFAGlJj25loqq5MS76LJM+rTWg7AE10A/I2guSwEmhWktClpEmlQJVSqnNyFUgZ2sAT+61+v4n0uaJoM9LwtaRNh6vl9LY9IWfkFW93fXR9QweHawWKFYeNX4qQFI2IUpCLE5MHj5aMlJsFIQiiHAalS6KoGqWrQ6ijDAOxEqumNK4IsLGytAanr7qyDKxywAOFFbpDEQAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSSm5NevNruegJIyShzFLGlJj25loqq5MS76EJM+rLWi7BU10A/I2ieSwAmhWktClpEmlQJVSqnNyTUgZWsAT+61+v4f0uRJoM9LwtaRNh6vl9Lb9IGfkA293fXR9QwiHawqKFYeNX4qQFI2IUpCLE5MIj5aMlJsKIQOiHAWlS6KoGqWrQ6ijDAaxEqumNK4DsLGytAWnr7qyDKxywAaFFbpDEQAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSam4NevNrueglIyShzFEGlJj25loqq5MS76CJM+rnWg7Ak10A/I2h+SwsmhWktClpEmlQJVSqnNyPUgZ2sUT+61+v4j0uQJoM9LwtaRNh6vl9LYdIWfkAW93fXR9QwOHawGKFYeNX4qQFI2IUpCLE5MDj5aMlJsBIQaiHAqlS6KoGqWrQ6ijDAWxEqumNK4GsLGytAqnr7qyDKxywAWFFbpDEQAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSWm6NevNruegdIyShzFCGlJj25loqq5MS76JJM+rfWg7AU10A/I2iOSwQmhWktClpEmlQJVSqnNyRUgZWsIT+61+v4P0ubJoM9LwtaRNh6vl9LZ9IGfkF293fXR9QwaHawCKFYeNX4qQFI2IUpCLE5MGj5aMlJsAIQWiHAGlS6KoGqWrQ6ijDAqxEqumNK4FsLGytAGnr7qyDKxywAqFFbpDEQAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSem5NevNrueghIyShzFJGlJj25loqq5MS76HJM+rjWi7BE10A/I2g+SwImhWktClpEmlQJVSqnNyHUgZWsET+61+v4b0uUJoM9LwtaRNh6vl9LbdIGfkCW93fXR9QwWHawuKFYeNX4qQFI2IUpCLE5MFj5aMlJsLIQqiHAClS6KoGqWrQ6ijDAGxEqumNK4KsLGytACnr7qyDKxywAGFFbpDEQAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSSm6NevNruegNIyShzFHGlJj25loqq5MS76IJM+rPWi7A010A/I2huSwkmhWktClpEmlQJVSqnNyNUgZ2sQT+61+v4X0uSJoM9LwtaRNh6vl9La9IGfkBW93fXR9QwqHawSKFYeNX4qQFI2IUpCLE5MKj5aMlJsEIQGiHAulS6KoGqWrQ6ijDACxEqumNK4BsLGytAunr7qyDKxywACFFbpDEQAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSem4NevNruegZIyShzFIGlJj25loqq5MS76DJM+rbWg7BE10A/I2heSwcmhWktClpEmlQJVSqnNyLUgZ2sMT+61+v4r0uZJoM9LwtaRNh6vl9LZdIWfkE293fXR9QwGHawKKFYeNX4qQFI2IUpCLE5MBj5aMlJsCIQCiHASlS6KoGqWrQ6ijDAuxEqumNK4AsLGytASnr7qyDKxywAuFFbpDEQAh+QQFAAAMACwAAAAAHwAfAAAEpZDJSam5NevNruegVIyShzFDGlJj25loqq5MS76GJM+rXWi7AU10A/I2iuSwgmhWktClpEmlQJVSqnNyVUgZWsQT+61+v4H0uXJoM9LwtaRNh6vl9LY9IGfkD293fXR9QwCHawmKFYeNX4qQFI2IUpCLE5MAj5aMlJsJIQuiHAKlS6KoGqWrQ6ijDASxEqumNK4LsLGytAKnr7qyDKxywASFFbpDEQA7LyogIHx4R3YwMHwwMWE1NzgzY2FlMGQzN2NhZjVjZWE0OGIzYTAxNjk0ZSAqLw==\");\n      color: rgba(47, 47, 47, 0.6);\n      position: relative;\n      margin-left: 10px;\n      display: inline;\n      height: 19px;\n      float: left;\n      width: 19px;\n      top: 0px; }\n    .datatree-container .treeview lmvheader .tooltip-text {\n      background-color: #ededed !important;\n      border: 1px solid grey;\n      color: grey !important;\n      padding: 4px; }\n    .datatree-container .treeview lmvheader .tooltip-thumbnail {\n      background-color: #ededed !important;\n      border: 1px solid grey;\n      padding: 2px; }\n      .datatree-container .treeview lmvheader .tooltip-thumbnail div {\n        height: 120px;\n        width: 120px; }\n  .datatree-container .treeview group > lmvheader > icon {\n    height: 20px;\n    float: left; }\n  .datatree-container .treeview lmvheader:hover .treenode span {\n    color: rgba(47, 47, 47, 0.6);\n    display: inline; }\n  .datatree-container .treeview lmvheader:hover .treenode span:hover {\n    color: #FF9800; }\n  .datatree-container .treeview lmvheader.items icon {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAD0klEQVQ4ETVUS2hjVRg+j/uYtE06UErVJDeZEDptA1XbWimmEsXNIF04kI6I6IwoghRxLQULyigiKMosfCymKjhDUTciFhXjAwqWLpNOJGXSNqGmXUxtpp2b+zp+/2174XDu/zjf+f7H+SXDVywW5ezsLC+VSqpQKGjd3d3a3t6eTzbLeiDf0xOLt9vtBsm5XM6wLEvs7OwECwsLor+/X1QqFRWC5HJFAz5iamoqQkB0YGhoKJ1KJT/AsrHuWVb8ajYbT5CNvgsXsiZ8zxxLjHNCxWLj4+NybW3NHRgY6I5EzOeDQM1LKRJBEKwzprgQcigI/C3P8696XvB1q9U6BAgHQx2sAolwCFTl83m+v7//lGnqnwshXlMq0Dnn1zTNeBlkF33fJ6bTuq4/I6V8IhqNNsfGxuqrq6vu5ct1xglleHg4dXjYnuecXcElHljcME3t01ptc4XsSilgcpVM3veIlMYc7LNQm7jwS9f155vNZkOQY7v932NQ4mYufT+4FYno752CIOTeZDIZ5mJ7+99Vx/HeVYptwJ/jgheFUNOEQXSZpknolIMc2KD9oG17fyHBH0aj2hfIW4t8BgcH47Z99AqYvQExhgvvSMm7NE0LqxsyAlUSdCT3hu+r1/HPAf5Ou+3+mkgknjt3znqh0zn6Bbq3EL7j+96rALwJN911Aw/+7ASI+8dUeavRaHxiGGceR3WuIYQR3PoVbr8O30FU8mMQf7TR2EFB+D7sQsrjPIeh6ToihRbLJPRarVbGNpdKpX5Uyv+GdJxrl+r1+k9wAxnG0AJC0wTOkPWEkYvUExDnIqwieqMH3W647mYJPnuA2cVeKhZzxsTEeAz/zDC0EAJtEe5haIyBH+cBwMJ44/G4WlpaCqLR82fpDGOBBntvpcLYzMxMm4AQOvkz9JUk+aRqnEICqLqYTqf/dhznB/Jl7IjCVciHMAxDlstlx7I6ZiqVeBoNe1FKjQWBG2KEjDzv6A8k8joSfh45+f727drNkZGRh6vV7V2E66EfvWq1upvJJCfK5c4SQv2WfMHqM9flfxIjygmt8NVvbPzzJA7Oo8zTSOYd6BdhunTMSqDc7CWw64X8O1rm7a2t5m/QBTQ9wke7vLxsrqys2ASYzWZjtm0/i556E4dS6BmoBYOMMPwtPN73u7p6FhHmXZoWpmm6eK+epHkCIIfGRywWi6yvr989ODhY6+vr+w7U7yGEh/DM0PXqIyG0uXp982fMKmd0dLQ7k8l0JicnqWphwrEzfjqHiGahkD6dMyyTsfLJ5P3heyJH8qPhRmdOZfr/H6pDy54J8vNgAAAAAElFTkSuQmCC\");\n    position: relative;\n    margin-right: 2px;\n    top: -1px; }\n  .datatree-container .treeview lmvheader.items.derivated icon {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAA4VJREFUOBGdVF1Ik2EU/vYvEw3XMqaikcKma/4MmduczpzYhCB3EUmQF0pkEUjYRZSQEAReRUWYUV2HXYRRWFJhZJJGhKipEwdr0ykqarrp3NzXcz7XxyeZFx04e9/3vOc873N+vjHMPsKyrGiPa/Eetv1NbW1tFMQFdnV1Serq6soyMjIMgij+XmD7e0tAer1eLrwpLy+/ZjKZWNhIzwnvsJdBJVA+E34DI70agzLV1dWpYrH4qcfjKXS73W9hmoBGKisrC9bX108NDQ19w7kJOg3dJYROQsBsc3OzNikp6TICinw+X9Hs7Kw6MzNztKamZnpra0s0NTV1CI8cpQCHw3FQo9HUwo+YT5GNk3i9GKPReMZsNq+np6eTgz83N9fsdDqPFBcXNxoMhj8pP3G5XMe0Wm1pfn7+l5SUFM4ulUrb43BcxhxLiUTSASM59KJm9QD7kJOTE8L5PfQStMFqtXaWlJRERCLRDM63oXfkcjmL2B7sSUTSnZVhtre3JxUKBRMOhyfn5uYc4+Pjx9fW1pjU1FQWQAe8Xq9qYGBgHv6jACxMSEhoikajd1EKgqCaknAMufHIysoywukjmtGKizdYie1DMHpAKYMFneeUSuUFsPLEzy15eXkvUZ4q3JGI+XlaXV21Y5DNsVjsB5j2gAUjk8kkg4ODVSMjIwzsQZwPRyIRM1iFkVE3gIZBwrGwsGAjtIqKCjGf8srKig8gcrzckJyc3IMHXiHwE5jaAMTgscR4eh6UwAu7pr+//yxwlNDvBNjX18dSQygVBg1Y2NzcTEKQG+oEoxPoXjfAh0OhkA71kmICenHuQp1v+v3+so2NjWc6nW5CpVI9X1paWgOMiACJJeJjJxB0BdqBvRtsXdAoUsoH4Izdbn+HMSnA3KUEAgELwO5ZLJav8Lk1NjY2AAyaxZ2JwYaklBoBh89paWm1qON92E5D58GUzc7OjtKK81WbzdaCtFuw74OSjRt2rBwg1ni7xeKLAG1HF19TF6G1+HIasHrgE8Mjj5G2GZ0NqNXqn7C1JiYmOgkAwk2L8FveMeMXAOfRhEdg9AIB4eXl5UX8SXhhN+Gz/BUMBhvhdgNKw/1PIXCeMsCqAFCPEqxgZcFqEcWn9K5jtQpQ+BiBbdeWgHnmxBZKHSSwTkyDIu5NKfJ+cdu+C3WfqwtWPWp5UuBN/4P/LcKUdrHfC/E3Q9JQP3uZLWgAAAAASUVORK5CYII=\"); }\n", ""]);

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

/***/ 1319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  GLOBAL: {
    HIDE: '__react_tooltip_hide_event',
    REBUILD: '__react_tooltip_rebuild_event',
    SHOW: '__react_tooltip_show_event'
  }
};

/***/ }),

/***/ 1333:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1174);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1174, function() {
			var newContent = __webpack_require__(1174);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1340:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DataTreeView = __webpack_require__(1493);

var _DataTreeView2 = _interopRequireDefault(_DataTreeView);

__webpack_require__(1333);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DataTreeView2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1490:
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

var DataContextMenu = function (_EventsEmitter$Compos) {
  (0, _inherits3.default)(DataContextMenu, _EventsEmitter$Compos);

  /////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////
  function DataContextMenu(opts) {
    (0, _classCallCheck3.default)(this, DataContextMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DataContextMenu.__proto__ || (0, _getPrototypeOf2.default)(DataContextMenu)).call(this, opts));

    _this.contextMenu = new _ContextMenu2.default(opts);
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(DataContextMenu, [{
    key: 'buildMenu',
    value: function buildMenu(event, node) {
      var _this2 = this;

      var menu = [{
        title: 'Edit property ...',
        className: 'fa fa-edit',
        target: function target() {
          _this2.emit('context.property.edit', node.toMetaProperty());
        }
      }, {
        title: 'Delete property',
        className: 'fa fa-times',
        target: function target() {
          _this2.emit('context.property.delete', node.toMetaProperty());
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
  return DataContextMenu;
}(_EventsEmitter2.default.Composer(Autodesk.Viewing.UI.ObjectContextMenu));

exports.default = DataContextMenu;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DataContextMenu.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1491:
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

var _DataContextMenu = __webpack_require__(1490);

var _DataContextMenu2 = _interopRequireDefault(_DataContextMenu);

var _DataTreeNode = __webpack_require__(1492);

var _DataTreeNode2 = _interopRequireDefault(_DataTreeNode);

var _TreeView = __webpack_require__(1049);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataTreeDelegate = function (_TreeDelegate) {
  (0, _inherits3.default)(DataTreeDelegate, _TreeDelegate);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function DataTreeDelegate(menuContainer) {
    (0, _classCallCheck3.default)(this, DataTreeDelegate);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DataTreeDelegate.__proto__ || (0, _getPrototypeOf2.default)(DataTreeDelegate)).call(this));

    _this.contextMenu = new _DataContextMenu2.default({
      container: menuContainer
    });

    _this.on('node.dblClick', function (node) {

      console.log(node);
    });
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(DataTreeDelegate, [{
    key: 'createRootNode',
    value: function createRootNode(props) {

      this.rootNode = new _DataTreeNode2.default(props);

      return this.rootNode;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'destroy',
    value: function destroy() {

      this.rootNode.destroy();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'createTreeNode',
    value: function createTreeNode(node, parentDomElement) {

      var container = document.createElement('div');

      parentDomElement.appendChild(container);

      node.type.split('.').forEach(function (cls) {

        parentDomElement.classList.add(cls);
      });

      parentDomElement.classList.add('click-trigger');

      parentDomElement.style.width = 'calc(100% - ' + (node.level * 25 + 5) + 'px)';

      node.parentDomElement = parentDomElement;

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

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onTreeNodeRightClick',
    value: function onTreeNodeRightClick(tree, node, event) {

      if (node.type === 'property') {

        if (node.props.metaType !== undefined) {

          this.contextMenu.show(event, node);
        }
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'forEachChild',
    value: function forEachChild(node, addChild) {

      node.addChild = addChild;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'filterNodes',
    value: function filterNodes(filter) {
      var _this2 = this;

      var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rootNode;


      var name = node.name.toLowerCase();

      var visibleItems = 0;

      if (node.children) {

        node.children.forEach(function (child) {

          visibleItems += _this2.filterNodes(filter, child);
        });

        if (visibleItems) {

          node.parentDomElement.style.display = 'inline-block';
        } else {

          node.parentDomElement.style.display = name.indexOf(filter) < 0 ? 'none' : 'inline-block';
        }
      } else {

        if (name.indexOf(filter) < 0) {

          node.parentDomElement.style.display = 'none';
        } else {

          node.parentDomElement.style.display = 'inline-block';

          ++visibleItems;
        }
      }

      return visibleItems;
    }
  }]);
  return DataTreeDelegate;
}(_TreeView.TreeDelegate);

exports.default = DataTreeDelegate;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DataTreeDelegate.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1492:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

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

var _reactBootstrap = __webpack_require__(376);

var _EventsEmitter2 = __webpack_require__(372);

var _EventsEmitter3 = _interopRequireDefault(_EventsEmitter2);

var _reactTooltip = __webpack_require__(1538);

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _flatten = __webpack_require__(1151);

var _flatten2 = _interopRequireDefault(_flatten);

var _sortBy = __webpack_require__(1053);

var _sortBy2 = _interopRequireDefault(_sortBy);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Label = __webpack_require__(1034);

var _Label2 = _interopRequireDefault(_Label);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataTreeNode = function (_EventsEmitter) {
  (0, _inherits3.default)(DataTreeNode, _EventsEmitter);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function DataTreeNode(props) {
    (0, _classCallCheck3.default)(this, DataTreeNode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DataTreeNode.__proto__ || (0, _getPrototypeOf2.default)(DataTreeNode)).call(this));

    _this.onVersionSelected = _this.onVersionSelected.bind(_this);
    _this.onLoadItem = _this.onLoadItem.bind(_this);
    _this.onReload = _this.onReload.bind(_this);
    _this.onExpand = _this.onExpand.bind(_this);

    _this.on('expand', _this.onExpand);

    _this.delegate = props.delegate;
    _this.parent = props.parent;
    _this.level = props.level;
    _this.group = props.group;
    _this.name = props.name;
    _this.type = props.type;
    _this.api = props.api;
    _this.id = props.id;

    _this.children = null;

    _this.props = props;
    return _this;
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////


  (0, _createClass3.default)(DataTreeNode, [{
    key: 'onExpand',
    value: function onExpand() {

      this.off('expand', this.onExpand);

      this.loadChildren();
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'setViewerUrn',
    value: function setViewerUrn(urn) {

      this.parentDomElement.classList.add('derivated');

      this.viewerUrn = urn;

      this.render({
        onLoadItem: this.onLoadItem,
        viewerUrn: urn
      });
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'setThumbnail',
    value: function setThumbnail(thumbnail) {

      this.render({
        thumbnail: thumbnail
      });
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'setName',
    value: function setName(name) {

      this.props.name = this.name = name;

      this.render({
        name: name
      });
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'setActiveVersion',
    value: function setActiveVersion(activeVersion) {

      this.activeVersion = activeVersion;

      this.render({
        activeVersion: activeVersion
      });
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'setVersions',
    value: function setVersions(versions) {

      this.versions = versions;

      this.render({
        onVersionSelected: this.onVersionSelected,
        versions: versions
      });
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'showLoader',
    value: function showLoader(show) {

      this.render({
        showLoader: show
      });
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'setLoaded',
    value: function setLoaded(loaded) {

      this.render({
        onReload: this.onReload,
        loaded: loaded
      });
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'getNodeName',
    value: function getNodeName(node) {

      return node.attributes.displayName || node.attributes.name || '';
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


      this.renderProps = (0, _assign2.default)(this.renderProps || {}, this.props, props);

      this.reactNode = _reactDom2.default.render(_react2.default.createElement(ReactTreeNode, this.renderProps), this.domContainer);
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'mount',
    value: function mount(domContainer) {

      domContainer.className = 'click-trigger';

      this.domContainer = domContainer;

      this.collapse();

      this.render();
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

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

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'onReload',
    value: function onReload() {

      if (this.children) {

        this.children.forEach(function (child) {

          child.destroy();
        });

        this.loadChildren();
      }
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

  }, {
    key: 'expand',
    value: function expand() {

      var target = this.domContainer.parentElement.parentElement;

      target.classList.remove('collapsed');
      target.classList.add('expanded');

      this.expanded = true;

      this.emit('expand');
    }

    /////////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////////

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
    key: 'loadChildren',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                this.showLoader(true);

                this.children = [];

                _context.t0 = this.type;
                _context.next = _context.t0 === 'hubs' ? 5 : _context.t0 === 'projects' ? 8 : _context.t0 === 'folders' ? 11 : 14;
                break;

              case 5:
                _context.next = 7;
                return this.loadHubChildren();

              case 7:
                return _context.abrupt('break', 15);

              case 8:
                _context.next = 10;
                return this.loadProjectChildren();

              case 10:
                return _context.abrupt('break', 15);

              case 11:
                _context.next = 13;
                return this.loadFolderChildren();

              case 13:
                return _context.abrupt('break', 15);

              case 14:
                return _context.abrupt('break', 15);

              case 15:

                this.showLoader(false);

                this.setLoaded(true);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadChildren() {
        return _ref.apply(this, arguments);
      }

      return loadChildren;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadHubChildren',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _this2 = this;

        var projectsRes, projects, hubType, showProjects, projectTasks, _projectTasks, folderArrays, folders, foldersTasks;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.api.getProjects(this.props.hubId);

              case 2:
                projectsRes = _context3.sent;
                projects = (0, _sortBy2.default)(projectsRes.data, function (project) {
                  return _this2.getNodeName(project).toLowerCase();
                });
                hubType = this.props.details.attributes.extension.type;
                showProjects = hubType === 'hubs:autodesk.bim360:Account';

                if (!showProjects) {
                  _context3.next = 10;
                  break;
                }

                projectTasks = projects.map(function (project) {

                  return new _promise2.default(function (resolve) {

                    var rootId = project.relationships.rootFolder.data.id;

                    var childProps = (0, _assign2.default)({}, _this2.props, {
                      name: _this2.getNodeName(project),
                      projectId: project.id,
                      level: _this2.level + 1,
                      type: project.type,
                      details: project,
                      folderId: rootId,
                      id: _this2.guid(),
                      parent: _this2
                    });

                    var childNode = new DataTreeNode(childProps);

                    _this2.children.push(childNode);

                    _this2.addChild(childNode);
                  });
                });
                _context3.next = 16;
                break;

              case 10:
                _projectTasks = projects.map(function (project) {

                  return new _promise2.default(function () {
                    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve) {
                      var folderItemsRes;
                      return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return _this2.api.getProjectTopFolders(_this2.props.hubId, project.id);

                            case 2:
                              folderItemsRes = _context2.sent;


                              folderItemsRes.data.forEach(function (folder) {
                                folder.projectId = project.id;
                              });

                              return _context2.abrupt('return', resolve(folderItemsRes.data));

                            case 5:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, _callee2, _this2);
                    }));

                    return function (_x2) {
                      return _ref3.apply(this, arguments);
                    };
                  }());
                });
                _context3.next = 13;
                return _promise2.default.all(_projectTasks);

              case 13:
                folderArrays = _context3.sent;
                folders = (0, _sortBy2.default)((0, _flatten2.default)(folderArrays), function (folderItem) {
                  return _this2.getNodeName(folderItem).toLowerCase();
                });
                foldersTasks = folders.map(function (folder) {

                  return new _promise2.default(function (resolve) {

                    var childProps = (0, _assign2.default)({}, _this2.props, {
                      name: _this2.getNodeName(folder),
                      projectId: folder.projectId,
                      level: _this2.level + 1,
                      folderId: folder.id,
                      type: folder.type,
                      details: folder,
                      id: _this2.guid(),
                      parent: _this2
                    });

                    var childNode = new DataTreeNode(childProps);

                    _this2.children.push(childNode);

                    _this2.addChild(childNode);
                  });
                });

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadHubChildren() {
        return _ref2.apply(this, arguments);
      }

      return loadHubChildren;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadProjectChildren',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _this3 = this;

        var folderItemsRes, folderItems, folders, items, folderTasks, itemTasks;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.api.getProjectTopFolders(this.props.hubId, this.props.projectId);

              case 2:
                folderItemsRes = _context4.sent;
                folderItems = (0, _sortBy2.default)(folderItemsRes.data, function (folderItem) {
                  return _this3.getNodeName(folderItem).toLowerCase();
                });
                folders = folderItems.filter(function (folderItem) {

                  return folderItem.type === 'folders';
                });
                items = folderItems.filter(function (folderItem) {

                  return folderItem.type === 'items';
                });
                folderTasks = folders.map(function (folder) {

                  return new _promise2.default(function (resolve) {

                    var childProps = (0, _assign2.default)({}, _this3.props, {
                      name: _this3.getNodeName(folder),
                      level: _this3.level + 1,
                      folderId: folder.id,
                      type: folder.type,
                      details: folder,
                      id: _this3.guid(),
                      parent: _this3
                    });

                    var childNode = new DataTreeNode(childProps);

                    _this3.children.push(childNode);

                    _this3.addChild(childNode);
                  });
                });
                itemTasks = items.map(function (item) {

                  return new _promise2.default(function (resolve) {

                    var childProps = (0, _assign2.default)({}, _this3.props, {
                      name: _this3.getNodeName(item),
                      level: _this3.level + 1,
                      type: item.type,
                      itemId: item.id,
                      id: _this3.guid(),
                      details: item,
                      parent: _this3
                    });

                    var childNode = new DataTreeNode(childProps);

                    _this3.delegate.emit('item.created', childNode);

                    _this3.children.push(childNode);

                    _this3.addChild(childNode);
                  });
                });

              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadProjectChildren() {
        return _ref4.apply(this, arguments);
      }

      return loadProjectChildren;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'loadFolderChildren',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var _this4 = this;

        var folderItemsRes, folderItems, folders, items, folderTasks, itemTasks;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.api.getFolderContent(this.props.projectId, this.props.folderId);

              case 2:
                folderItemsRes = _context5.sent;
                folderItems = (0, _sortBy2.default)(folderItemsRes.data, function (folderItem) {
                  return _this4.getNodeName(folderItem).toLowerCase();
                });
                folders = folderItems.filter(function (folderItem) {

                  return folderItem.type === 'folders';
                });
                items = folderItems.filter(function (folderItem) {

                  return folderItem.type === 'items';
                });
                folderTasks = folders.map(function (folder) {

                  return new _promise2.default(function (resolve) {

                    var childProps = (0, _assign2.default)({}, _this4.props, {
                      name: _this4.getNodeName(folder),
                      level: _this4.level + 1,
                      folderId: folder.id,
                      type: folder.type,
                      details: folder,
                      id: _this4.guid(),
                      parent: _this4
                    });

                    var childNode = new DataTreeNode(childProps);

                    _this4.children.push(childNode);

                    _this4.addChild(childNode);
                  });
                });
                itemTasks = items.map(function (item) {

                  return new _promise2.default(function (resolve) {

                    var childProps = (0, _assign2.default)({}, _this4.props, {
                      name: _this4.getNodeName(item),
                      level: _this4.level + 1,
                      type: item.type,
                      itemId: item.id,
                      id: _this4.guid(),
                      details: item,
                      parent: _this4
                    });

                    var childNode = new DataTreeNode(childProps);

                    _this4.delegate.emit('item.created', childNode);

                    _this4.children.push(childNode);

                    _this4.addChild(childNode);

                    childNode.showLoader(true);
                  });
                });

              case 8:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function loadFolderChildren() {
        return _ref5.apply(this, arguments);
      }

      return loadFolderChildren;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onLoadItem',
    value: function onLoadItem() {

      this.delegate.emit('item.load', this);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onVersionSelected',
    value: function onVersionSelected(version) {

      this.setActiveVersion(version);
    }
  }]);
  return DataTreeNode;
}(_EventsEmitter3.default);

exports.default = DataTreeNode;

var ReactTreeNode = function (_React$Component) {
  (0, _inherits3.default)(ReactTreeNode, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ReactTreeNode(props) {
    (0, _classCallCheck3.default)(this, ReactTreeNode);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (ReactTreeNode.__proto__ || (0, _getPrototypeOf2.default)(ReactTreeNode)).call(this, props));

    _this5.renderers = {
      projects: _this5.renderProjectNode.bind(_this5),
      folders: _this5.renderFolderNode.bind(_this5),
      items: _this5.renderItemNode.bind(_this5),
      hubs: _this5.renderHubNode.bind(_this5)
    };
    return _this5;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(ReactTreeNode, [{
    key: 'renderHubNode',
    value: function renderHubNode() {

      return _react2.default.createElement(
        'div',
        { className: 'treenode click-trigger' },
        _react2.default.createElement(_Label2.default, { className: 'name',
          text: this.props.name
        }),
        this.props.showLoader && _react2.default.createElement(
          'div',
          { className: 'node-loader' },
          _react2.default.createElement('span', null)
        ),
        this.props.loaded && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { className: 'fa fa-refresh',
            'data-for': 'reload-' + this.props.id,
            style: { marginRight: '162px' },
            onClick: this.props.onReload,
            'data-tip': true
          }),
          _react2.default.createElement(
            _reactTooltip2.default,
            { id: 'reload-' + this.props.id,
              className: 'tooltip-text',
              effect: 'solid' },
            _react2.default.createElement(
              'div',
              null,
              'Reload child nodes ...'
            )
          )
        )
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderProjectNode',
    value: function renderProjectNode() {

      return _react2.default.createElement(
        'div',
        { className: 'treenode click-trigger' },
        _react2.default.createElement(_Label2.default, { className: 'name',
          text: this.props.name
        }),
        this.props.showLoader && _react2.default.createElement(
          'div',
          { className: 'node-loader' },
          _react2.default.createElement('span', null)
        ),
        this.props.loaded && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { className: 'fa fa-refresh',
            'data-for': 'reload-' + this.props.id,
            onClick: this.props.onReload,
            'data-tip': true
          }),
          _react2.default.createElement(
            _reactTooltip2.default,
            { id: 'reload-' + this.props.id,
              className: 'tooltip-text',
              effect: 'solid' },
            _react2.default.createElement(
              'div',
              null,
              'Reload child nodes ...'
            )
          )
        )
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderFolderNode',
    value: function renderFolderNode() {

      return _react2.default.createElement(
        'div',
        { className: 'treenode click-trigger' },
        _react2.default.createElement(_Label2.default, { className: 'name',
          text: this.props.name
        }),
        this.props.showLoader && _react2.default.createElement(
          'div',
          { className: 'node-loader' },
          _react2.default.createElement('span', null)
        ),
        this.props.loaded && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { className: 'fa fa-refresh',
            'data-for': 'reload-' + this.props.id,
            onClick: this.props.onReload,
            'data-tip': true
          }),
          _react2.default.createElement(
            _reactTooltip2.default,
            { id: 'reload-' + this.props.id,
              className: 'tooltip-text',
              effect: 'solid' },
            _react2.default.createElement(
              'div',
              null,
              'Reload child nodes ...'
            )
          )
        )
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderItemNode',
    value: function renderItemNode() {

      return _react2.default.createElement(
        'div',
        { className: 'treenode click-trigger' },
        _react2.default.createElement(_Label2.default, { className: 'name',
          text: this.props.name
        }),
        this.props.showLoader && _react2.default.createElement(
          'div',
          { className: 'node-loader' },
          _react2.default.createElement('span', null)
        ),
        this.props.viewerUrn && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { className: 'fa fa-eye',
            'data-for': 'load-' + this.props.id,
            onClick: this.props.onLoadItem,
            'data-tip': true
          }),
          _react2.default.createElement(
            _reactTooltip2.default,
            { id: 'load-' + this.props.id,
              className: 'tooltip-text',
              effect: 'solid' },
            _react2.default.createElement(
              'div',
              null,
              'Load ' + this.props.name + ' in viewer ...'
            )
          )
        ),
        this.props.versions && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactBootstrap.OverlayTrigger,
            { trigger: 'click',
              overlay: this.renderVersionsControl(),
              placement: 'right',
              rootClose: true },
            _react2.default.createElement('span', { className: 'fa fa-clock-o',
              'data-for': 'versions-' + this.props.id,
              'data-tip': true
            })
          ),
          _react2.default.createElement(
            _reactTooltip2.default,
            { id: 'versions-' + this.props.id,
              className: 'tooltip-text',
              effect: 'solid' },
            _react2.default.createElement(
              'div',
              null,
              'Versions control'
            )
          )
        ),
        this.props.thumbnail && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { className: 'fa fa-file-image-o',
            'data-for': 'thumbnail-' + this.props.id,
            'data-tip': true
          }),
          _react2.default.createElement(
            _reactTooltip2.default,
            { id: 'thumbnail-' + this.props.id,
              className: 'tooltip-thumbnail',
              effect: 'solid' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('img', { src: this.props.thumbnail,
                height: '120'
              })
            )
          )
        )
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderVersionsControl',
    value: function renderVersionsControl() {
      var _this6 = this;

      var activeVersionId = this.props.activeVersion.id;

      var versions = this.props.versions.map(function (version, idx) {

        var isActive = version.id === activeVersionId;

        var verNum = _this6.props.versions.length - idx;

        var name = version.attributes.displayName;

        return _react2.default.createElement(
          'div',
          {
            className: 'version ' + (isActive ? 'active' : ''),
            onClick: function onClick() {
              return _this6.props.onVersionSelected(version);
            },
            key: version.id },
          isActive && _react2.default.createElement('span', { className: 'fa fa-check' }),
          _react2.default.createElement(
            'label',
            null,
            'v' + verNum + ' - ' + name
          )
        );
      });

      return _react2.default.createElement(
        _reactBootstrap.Popover,
        { className: 'data-management',
          title: 'Versions Control',
          id: 'versions-ctrl' },
        _react2.default.createElement(
          'label',
          null,
          'Select active version:'
        ),
        _react2.default.createElement(
          'div',
          { className: 'versions' },
          versions
        )
      );
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      return this.renderers[this.props.type]();
    }
  }]);
  return ReactTreeNode;
}(_react2.default.Component);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DataTreeNode.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1493:
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

var _reactContenteditable = __webpack_require__(1040);

var _reactContenteditable2 = _interopRequireDefault(_reactContenteditable);

var _DataTreeDelegate = __webpack_require__(1491);

var _DataTreeDelegate2 = _interopRequireDefault(_DataTreeDelegate);

var _BaseComponent2 = __webpack_require__(1123);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _TreeView = __webpack_require__(1049);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(1333);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataTreeView = function (_BaseComponent) {
  (0, _inherits3.default)(DataTreeView, _BaseComponent);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function DataTreeView(props) {
    (0, _classCallCheck3.default)(this, DataTreeView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DataTreeView.__proto__ || (0, _getPrototypeOf2.default)(DataTreeView)).call(this, props));

    _this.onInputChanged = _this.onInputChanged.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onSearch = _this.onSearch.bind(_this);

    _this.delegate = new _DataTreeDelegate2.default(props.menuContainer);

    _this.delegate.on('node.destroy', function (nodeId) {

      _this.tree.destroyNode(nodeId);
    });

    _this.delegate.on('item.created', function (node) {

      if (_this.props.onItemNodeCreated) {

        _this.props.onItemNodeCreated(node);
      }
    });

    _this.delegate.on('item.load', function (node) {

      if (_this.props.onLoadItem) {

        _this.props.onLoadItem(node);
      }
    });

    _this.state = {
      search: ''
    };
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(DataTreeView, [{
    key: 'loadHub',
    value: function loadHub(hub) {

      var rootNode = this.delegate.createRootNode({
        name: hub.attributes.name,
        delegate: this.delegate,
        api: this.props.api,
        type: hub.type,
        hubId: hub.id,
        details: hub,
        group: true,
        id: hub.id,
        level: 0
      });

      this.tree = new _TreeView.TreeView(this.delegate, rootNode, this.treeContainer, {
        excludeRoot: false
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.loadHub(this.props.hub);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      this.delegate.destroy();

      this.tree.destroy();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {

      return false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onInputChanged',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.assignState({
                  search: e.target.value
                });

              case 2:

                this.onSearch();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onInputChanged(_x) {
        return _ref.apply(this, arguments);
      }

      return onInputChanged;
    }()

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

        this.onSearch();
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onSearch',
    value: function onSearch() {
      var search = this.state.search;


      this.delegate.filterNodes(search);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var search = this.state.search;


      return _react2.default.createElement(
        'div',
        { className: 'datatree-container', ref: function ref(div) {
            return _this2.treeContainer = div;
          } },
        _react2.default.createElement(
          'div',
          { className: 'search' },
          _react2.default.createElement(_reactContenteditable2.default, {
            onChange: this.onInputChanged,
            onKeyDown: this.onKeyDown,
            'data-placeholder': 'Search ...',
            className: 'input-search',
            html: search
          })
        )
      );
    }
  }]);
  return DataTreeView;
}(_BaseComponent3.default); //////////////////////////////////////////////////////////////////////////
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


exports.default = DataTreeView;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DataTreeView.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  target.prototype.isCustomEvent = function (ele) {
    var event = this.state.event;

    return event || !!ele.getAttribute('data-event');
  };

  /* Bind listener for custom event */
  target.prototype.customBindListener = function (ele) {
    var _this = this;

    var _state = this.state,
        event = _state.event,
        eventOff = _state.eventOff;

    var dataEvent = ele.getAttribute('data-event') || event;
    var dataEventOff = ele.getAttribute('data-event-off') || eventOff;

    dataEvent.split(' ').forEach(function (event) {
      ele.removeEventListener(event, customListener);
      customListener = checkStatus.bind(_this, dataEventOff);
      ele.addEventListener(event, customListener, false);
    });
    if (dataEventOff) {
      dataEventOff.split(' ').forEach(function (event) {
        ele.removeEventListener(event, _this.hideTooltip);
        ele.addEventListener(event, _this.hideTooltip, false);
      });
    }
  };

  /* Unbind listener for custom event */
  target.prototype.customUnbindListener = function (ele) {
    var _state2 = this.state,
        event = _state2.event,
        eventOff = _state2.eventOff;

    var dataEvent = event || ele.getAttribute('data-event');
    var dataEventOff = eventOff || ele.getAttribute('data-event-off');

    ele.removeEventListener(dataEvent, customListener);
    if (dataEventOff) ele.removeEventListener(dataEventOff, this.hideTooltip);
  };
};

/**
 * Custom events to control showing and hiding of tooltip
 *
 * @attributes
 * - `event` {String}
 * - `eventOff` {String}
 */

var checkStatus = function checkStatus(dataEventOff, e) {
  var show = this.state.show;
  var id = this.props.id;

  var dataIsCapture = e.currentTarget.getAttribute('data-iscapture');
  var isCapture = dataIsCapture && dataIsCapture === 'true' || this.props.isCapture;
  var currentItem = e.currentTarget.getAttribute('currentItem');

  if (!isCapture) e.stopPropagation();
  if (show && currentItem === 'true') {
    if (!dataEventOff) this.hideTooltip(e);
  } else {
    e.currentTarget.setAttribute('currentItem', 'true');
    setUntargetItems(e.currentTarget, this.getTargetArray(id));
    this.showTooltip(e);
  }
};

var setUntargetItems = function setUntargetItems(currentTarget, targetArray) {
  for (var i = 0; i < targetArray.length; i++) {
    if (currentTarget !== targetArray[i]) {
      targetArray[i].setAttribute('currentItem', 'false');
    } else {
      targetArray[i].setAttribute('currentItem', 'true');
    }
  }
};

var customListener = void 0;

/***/ }),

/***/ 1533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  target.prototype.getEffect = function (currentTarget) {
    var dataEffect = currentTarget.getAttribute('data-effect');
    return dataEffect || this.props.effect || 'float';
  };
};

/***/ }),

/***/ 1534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  target.prototype.isCapture = function (currentTarget) {
    var dataIsCapture = currentTarget.getAttribute('data-iscapture');
    return dataIsCapture && dataIsCapture === 'true' || this.props.isCapture || false;
  };
};

/***/ }),

/***/ 1535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  /**
   * Hide all tooltip
   * @trigger ReactTooltip.hide()
   */
  target.hide = function (target) {
    dispatchGlobalEvent(_constant2.default.GLOBAL.HIDE, { target: target });
  };

  /**
   * Rebuild all tooltip
   * @trigger ReactTooltip.rebuild()
   */
  target.rebuild = function () {
    dispatchGlobalEvent(_constant2.default.GLOBAL.REBUILD);
  };

  /**
   * Show specific tooltip
   * @trigger ReactTooltip.show()
   */
  target.show = function (target) {
    dispatchGlobalEvent(_constant2.default.GLOBAL.SHOW, { target: target });
  };

  target.prototype.globalRebuild = function () {
    if (this.mount) {
      this.unbindListener();
      this.bindListener();
    }
  };

  target.prototype.globalShow = function (event) {
    if (this.mount) {
      // Create a fake event, specific show will limit the type to `solid`
      // only `float` type cares e.clientX e.clientY
      var e = { currentTarget: event.detail.target };
      this.showTooltip(e, true);
    }
  };

  target.prototype.globalHide = function (event) {
    if (this.mount) {
      var hasTarget = event && event.detail && event.detail.target && true || false;
      this.hideTooltip({ currentTarget: hasTarget && event.detail.target }, hasTarget);
    }
  };
};

var _constant = __webpack_require__(1319);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dispatchGlobalEvent = function dispatchGlobalEvent(eventName, opts) {
  // Compatibale with IE
  // @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
  var event = void 0;

  if (typeof window.CustomEvent === 'function') {
    event = new window.CustomEvent(eventName, { detail: opts });
  } else {
    event = document.createEvent('Event');
    event.initEvent(eventName, false, true);
    event.detail = opts;
  }

  window.dispatchEvent(event);
}; /**
    * Static methods for react-tooltip
    */

/***/ }),

/***/ 1536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  target.prototype.bindRemovalTracker = function () {
    var _this = this;

    var MutationObserver = getMutationObserverClass();
    if (MutationObserver == null) return;

    var observer = new MutationObserver(function (mutations) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = mutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mutation = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = mutation.removedNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var element = _step2.value;

              if (element === _this.state.currentTarget) {
                _this.hideTooltip();
                return;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });

    observer.observe(window.document, { childList: true, subtree: true });

    this.removalTracker = observer;
  };

  target.prototype.unbindRemovalTracker = function () {
    if (this.removalTracker) {
      this.removalTracker.disconnect();
      this.removalTracker = null;
    }
  };
};

/**
 * Tracking target removing from DOM.
 * It's nessesary to hide tooltip when it's target disappears.
 * Otherwise, the tooltip would be shown forever until another target
 * is triggered.
 *
 * If MutationObserver is not available, this feature just doesn't work.
 */

// https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
var getMutationObserverClass = function getMutationObserverClass() {
  return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
};

/***/ }),

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target) {
  target.prototype.bindWindowEvents = function (resizeHide) {
    // ReactTooltip.hide
    window.removeEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide);
    window.addEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide, false);

    // ReactTooltip.rebuild
    window.removeEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild);
    window.addEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild, false);

    // ReactTooltip.show
    window.removeEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow);
    window.addEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow, false);

    // Resize
    if (resizeHide) {
      window.removeEventListener('resize', this.onWindowResize);
      window.addEventListener('resize', this.onWindowResize, false);
    }
  };

  target.prototype.unbindWindowEvents = function () {
    window.removeEventListener(_constant2.default.GLOBAL.HIDE, this.globalHide);
    window.removeEventListener(_constant2.default.GLOBAL.REBUILD, this.globalRebuild);
    window.removeEventListener(_constant2.default.GLOBAL.SHOW, this.globalShow);
    window.removeEventListener('resize', this.onWindowResize);
  };

  /**
   * invoked by resize event of window
   */
  target.prototype.onWindowResize = function () {
    if (!this.mount) return;
    this.hideTooltip();
  };
};

var _constant = __webpack_require__(1319);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 1538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

/* Decoraters */


/* Utils */


/* CSS */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _staticMethods = __webpack_require__(1535);

var _staticMethods2 = _interopRequireDefault(_staticMethods);

var _windowListener = __webpack_require__(1537);

var _windowListener2 = _interopRequireDefault(_windowListener);

var _customEvent = __webpack_require__(1532);

var _customEvent2 = _interopRequireDefault(_customEvent);

var _isCapture = __webpack_require__(1534);

var _isCapture2 = _interopRequireDefault(_isCapture);

var _getEffect = __webpack_require__(1533);

var _getEffect2 = _interopRequireDefault(_getEffect);

var _trackRemoval = __webpack_require__(1536);

var _trackRemoval2 = _interopRequireDefault(_trackRemoval);

var _getPosition = __webpack_require__(1541);

var _getPosition2 = _interopRequireDefault(_getPosition);

var _getTipContent = __webpack_require__(1542);

var _getTipContent2 = _interopRequireDefault(_getTipContent);

var _aria = __webpack_require__(1540);

var _nodeListToArray = __webpack_require__(1543);

var _nodeListToArray2 = _interopRequireDefault(_nodeListToArray);

var _style = __webpack_require__(1539);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTooltip = (0, _staticMethods2.default)(_class = (0, _windowListener2.default)(_class = (0, _customEvent2.default)(_class = (0, _isCapture2.default)(_class = (0, _getEffect2.default)(_class = (0, _trackRemoval2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(ReactTooltip, _Component);

  function ReactTooltip(props) {
    _classCallCheck(this, ReactTooltip);

    var _this = _possibleConstructorReturn(this, (ReactTooltip.__proto__ || Object.getPrototypeOf(ReactTooltip)).call(this, props));

    _this.state = {
      place: 'top', // Direction of tooltip
      type: 'dark', // Color theme of tooltip
      effect: 'float', // float or fixed
      show: false,
      border: false,
      placeholder: '',
      offset: {},
      extraClass: '',
      html: false,
      delayHide: 0,
      delayShow: 0,
      event: props.event || null,
      eventOff: props.eventOff || null,
      currentEvent: null, // Current mouse event
      currentTarget: null, // Current target of mouse event
      ariaProps: (0, _aria.parseAria)(props), // aria- and role attributes
      isEmptyTip: false,
      disable: false
    };

    _this.bind(['showTooltip', 'updateTooltip', 'hideTooltip', 'globalRebuild', 'globalShow', 'globalHide', 'onWindowResize']);

    _this.mount = true;
    _this.delayShowLoop = null;
    _this.delayHideLoop = null;
    _this.intervalUpdateContent = null;
    return _this;
  }

  /**
   * For unify the bind and unbind listener
   */


  _createClass(ReactTooltip, [{
    key: 'bind',
    value: function bind(methodArray) {
      var _this2 = this;

      methodArray.forEach(function (method) {
        _this2[method] = _this2[method].bind(_this2);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          insecure = _props.insecure,
          resizeHide = _props.resizeHide;

      if (insecure) {
        this.setStyleHeader(); // Set the style to the <link>
      }
      this.bindListener(); // Bind listener for tooltip
      this.bindWindowEvents(resizeHide); // Bind global event for static method
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var ariaProps = this.state.ariaProps;

      var newAriaProps = (0, _aria.parseAria)(props);

      var isChanged = Object.keys(newAriaProps).some(function (props) {
        return newAriaProps[props] !== ariaProps[props];
      });
      if (isChanged) {
        this.setState({ ariaProps: newAriaProps });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mount = false;

      this.clearTimer();

      this.unbindListener();
      this.removeScrollListener();
      this.unbindWindowEvents();
    }

    /**
     * Pick out corresponded target elements
     */

  }, {
    key: 'getTargetArray',
    value: function getTargetArray(id) {
      var targetArray = void 0;
      if (!id) {
        targetArray = document.querySelectorAll('[data-tip]:not([data-for])');
      } else {
        var escaped = id.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        targetArray = document.querySelectorAll('[data-tip][data-for="' + escaped + '"]');
      }
      // targetArray is a NodeList, convert it to a real array
      return (0, _nodeListToArray2.default)(targetArray);
    }

    /**
     * Bind listener to the target elements
     * These listeners used to trigger showing or hiding the tooltip
     */

  }, {
    key: 'bindListener',
    value: function bindListener() {
      var _this3 = this;

      var _props2 = this.props,
          id = _props2.id,
          globalEventOff = _props2.globalEventOff;

      var targetArray = this.getTargetArray(id);

      targetArray.forEach(function (target) {
        var isCaptureMode = _this3.isCapture(target);
        var effect = _this3.getEffect(target);
        if (target.getAttribute('currentItem') === null) {
          target.setAttribute('currentItem', 'false');
        }
        _this3.unbindBasicListener(target);

        if (_this3.isCustomEvent(target)) {
          _this3.customBindListener(target);
          return;
        }

        target.addEventListener('mouseenter', _this3.showTooltip, isCaptureMode);
        if (effect === 'float') {
          target.addEventListener('mousemove', _this3.updateTooltip, isCaptureMode);
        }
        target.addEventListener('mouseleave', _this3.hideTooltip, isCaptureMode);
      });

      // Global event to hide tooltip
      if (globalEventOff) {
        window.removeEventListener(globalEventOff, this.hideTooltip);
        window.addEventListener(globalEventOff, this.hideTooltip, false);
      }

      // Track removal of targetArray elements from DOM
      this.bindRemovalTracker();
    }

    /**
     * Unbind listeners on target elements
     */

  }, {
    key: 'unbindListener',
    value: function unbindListener() {
      var _this4 = this;

      var _props3 = this.props,
          id = _props3.id,
          globalEventOff = _props3.globalEventOff;

      var targetArray = this.getTargetArray(id);
      targetArray.forEach(function (target) {
        _this4.unbindBasicListener(target);
        if (_this4.isCustomEvent(target)) _this4.customUnbindListener(target);
      });

      if (globalEventOff) window.removeEventListener(globalEventOff, this.hideTooltip);
      this.unbindRemovalTracker();
    }

    /**
     * Invoke this before bind listener and ummount the compont
     * it is necessary to invloke this even when binding custom event
     * so that the tooltip can switch between custom and default listener
     */

  }, {
    key: 'unbindBasicListener',
    value: function unbindBasicListener(target) {
      var isCaptureMode = this.isCapture(target);
      target.removeEventListener('mouseenter', this.showTooltip, isCaptureMode);
      target.removeEventListener('mousemove', this.updateTooltip, isCaptureMode);
      target.removeEventListener('mouseleave', this.hideTooltip, isCaptureMode);
    }

    /**
     * When mouse enter, show the tooltip
     */

  }, {
    key: 'showTooltip',
    value: function showTooltip(e, isGlobalCall) {
      var _this5 = this;

      if (isGlobalCall) {
        // Don't trigger other elements belongs to other ReactTooltip
        var targetArray = this.getTargetArray(this.props.id);
        var isMyElement = targetArray.some(function (ele) {
          return ele === e.currentTarget;
        });
        if (!isMyElement || this.state.show) return;
      }
      // Get the tooltip content
      // calculate in this phrase so that tip width height can be detected
      var _props4 = this.props,
          children = _props4.children,
          multiline = _props4.multiline,
          getContent = _props4.getContent;

      var originTooltip = e.currentTarget.getAttribute('data-tip');
      var isMultiline = e.currentTarget.getAttribute('data-multiline') || multiline || false;

      // Generate tootlip content
      var content = void 0;
      if (getContent) {
        if (Array.isArray(getContent)) {
          content = getContent[0] && getContent[0]();
        } else {
          content = getContent();
        }
      }
      var placeholder = (0, _getTipContent2.default)(originTooltip, children, content, isMultiline);
      var isEmptyTip = typeof placeholder === 'string' && placeholder === '' || placeholder === null;

      // If it is focus event or called by ReactTooltip.show, switch to `solid` effect
      var switchToSolid = e instanceof window.FocusEvent || isGlobalCall;

      // if it need to skip adding hide listener to scroll
      var scrollHide = true;
      if (e.currentTarget.getAttribute('data-scroll-hide')) {
        scrollHide = e.currentTarget.getAttribute('data-scroll-hide') === 'true';
      } else if (this.props.scrollHide != null) {
        scrollHide = this.props.scrollHide;
      }

      // To prevent previously created timers from triggering
      this.clearTimer();

      this.setState({
        placeholder: placeholder,
        isEmptyTip: isEmptyTip,
        place: e.currentTarget.getAttribute('data-place') || this.props.place || 'top',
        type: e.currentTarget.getAttribute('data-type') || this.props.type || 'dark',
        effect: switchToSolid && 'solid' || this.getEffect(e.currentTarget),
        offset: e.currentTarget.getAttribute('data-offset') || this.props.offset || {},
        html: e.currentTarget.getAttribute('data-html') ? e.currentTarget.getAttribute('data-html') === 'true' : this.props.html || false,
        delayShow: e.currentTarget.getAttribute('data-delay-show') || this.props.delayShow || 0,
        delayHide: e.currentTarget.getAttribute('data-delay-hide') || this.props.delayHide || 0,
        border: e.currentTarget.getAttribute('data-border') ? e.currentTarget.getAttribute('data-border') === 'true' : this.props.border || false,
        extraClass: e.currentTarget.getAttribute('data-class') || this.props.class || this.props.className || '',
        disable: e.currentTarget.getAttribute('data-tip-disable') ? e.currentTarget.getAttribute('data-tip-disable') === 'true' : this.props.disable || false
      }, function () {
        if (scrollHide) _this5.addScrollListener(e);
        _this5.updateTooltip(e);

        if (getContent && Array.isArray(getContent)) {
          _this5.intervalUpdateContent = setInterval(function () {
            if (_this5.mount) {
              var _getContent = _this5.props.getContent;

              var _placeholder = (0, _getTipContent2.default)(originTooltip, _getContent[0](), isMultiline);
              var _isEmptyTip = typeof _placeholder === 'string' && _placeholder === '';
              _this5.setState({
                placeholder: _placeholder,
                isEmptyTip: _isEmptyTip
              });
            }
          }, getContent[1]);
        }
      });
    }

    /**
     * When mouse hover, updatetooltip
     */

  }, {
    key: 'updateTooltip',
    value: function updateTooltip(e) {
      var _this6 = this;

      var _state = this.state,
          delayShow = _state.delayShow,
          show = _state.show,
          isEmptyTip = _state.isEmptyTip,
          disable = _state.disable;
      var afterShow = this.props.afterShow;
      var placeholder = this.state.placeholder;

      var delayTime = show ? 0 : parseInt(delayShow, 10);
      var eventTarget = e.currentTarget;

      if (isEmptyTip || disable) return; // if the tooltip is empty, disable the tooltip
      var updateState = function updateState() {
        if (Array.isArray(placeholder) && placeholder.length > 0 || placeholder) {
          (function () {
            var isInvisible = !_this6.state.show;
            _this6.setState({
              currentEvent: e,
              currentTarget: eventTarget,
              show: true
            }, function () {
              _this6.updatePosition();
              if (isInvisible && afterShow) afterShow();
            });
          })();
        }
      };

      clearTimeout(this.delayShowLoop);
      if (delayShow) {
        this.delayShowLoop = setTimeout(updateState, delayTime);
      } else {
        updateState();
      }
    }

    /**
     * When mouse leave, hide tooltip
     */

  }, {
    key: 'hideTooltip',
    value: function hideTooltip(e, hasTarget) {
      var _this7 = this;

      var _state2 = this.state,
          delayHide = _state2.delayHide,
          isEmptyTip = _state2.isEmptyTip,
          disable = _state2.disable;
      var afterHide = this.props.afterHide;

      if (!this.mount) return;
      if (isEmptyTip || disable) return; // if the tooltip is empty, disable the tooltip
      if (hasTarget) {
        // Don't trigger other elements belongs to other ReactTooltip
        var targetArray = this.getTargetArray(this.props.id);
        var isMyElement = targetArray.some(function (ele) {
          return ele === e.currentTarget;
        });
        if (!isMyElement || !this.state.show) return;
      }
      var resetState = function resetState() {
        var isVisible = _this7.state.show;
        _this7.setState({
          show: false
        }, function () {
          _this7.removeScrollListener();
          if (isVisible && afterHide) afterHide();
        });
      };

      this.clearTimer();
      if (delayHide) {
        this.delayHideLoop = setTimeout(resetState, parseInt(delayHide, 10));
      } else {
        resetState();
      }
    }

    /**
     * Add scroll eventlistener when tooltip show
     * automatically hide the tooltip when scrolling
     */

  }, {
    key: 'addScrollListener',
    value: function addScrollListener(e) {
      var isCaptureMode = this.isCapture(e.currentTarget);
      window.addEventListener('scroll', this.hideTooltip, isCaptureMode);
    }
  }, {
    key: 'removeScrollListener',
    value: function removeScrollListener() {
      window.removeEventListener('scroll', this.hideTooltip);
    }

    // Calculation the position

  }, {
    key: 'updatePosition',
    value: function updatePosition() {
      var _this8 = this;

      var _state3 = this.state,
          currentEvent = _state3.currentEvent,
          currentTarget = _state3.currentTarget,
          place = _state3.place,
          effect = _state3.effect,
          offset = _state3.offset;

      var node = _reactDom2.default.findDOMNode(this);
      var result = (0, _getPosition2.default)(currentEvent, currentTarget, node, place, effect, offset);

      if (result.isNewState) {
        // Switch to reverse placement
        return this.setState(result.newState, function () {
          _this8.updatePosition();
        });
      }
      // Set tooltip position
      node.style.left = result.position.left + 'px';
      node.style.top = result.position.top + 'px';
    }

    /**
     * Set style tag in header
     * in this way we can insert default css
     */

  }, {
    key: 'setStyleHeader',
    value: function setStyleHeader() {
      if (!document.getElementsByTagName('head')[0].querySelector('style[id="react-tooltip"]')) {
        var tag = document.createElement('style');
        tag.id = 'react-tooltip';
        tag.innerHTML = _style2.default;
        document.getElementsByTagName('head')[0].appendChild(tag);
      }
    }

    /**
     * CLear all kinds of timeout of interval
     */

  }, {
    key: 'clearTimer',
    value: function clearTimer() {
      clearTimeout(this.delayShowLoop);
      clearTimeout(this.delayHideLoop);
      clearInterval(this.intervalUpdateContent);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state4 = this.state,
          placeholder = _state4.placeholder,
          extraClass = _state4.extraClass,
          html = _state4.html,
          ariaProps = _state4.ariaProps,
          disable = _state4.disable,
          isEmptyTip = _state4.isEmptyTip;

      var tooltipClass = (0, _classnames2.default)('__react_component_tooltip', { 'show': this.state.show && !disable && !isEmptyTip }, { 'border': this.state.border }, { 'place-top': this.state.place === 'top' }, { 'place-bottom': this.state.place === 'bottom' }, { 'place-left': this.state.place === 'left' }, { 'place-right': this.state.place === 'right' }, { 'type-dark': this.state.type === 'dark' }, { 'type-success': this.state.type === 'success' }, { 'type-warning': this.state.type === 'warning' }, { 'type-error': this.state.type === 'error' }, { 'type-info': this.state.type === 'info' }, { 'type-light': this.state.type === 'light' });

      var Wrapper = this.props.wrapper;
      if (ReactTooltip.supportedWrappers.indexOf(Wrapper) < 0) {
        Wrapper = ReactTooltip.defaultProps.wrapper;
      }

      if (html) {
        return _react2.default.createElement(Wrapper, _extends({ className: tooltipClass + ' ' + extraClass
        }, ariaProps, {
          'data-id': 'tooltip',
          dangerouslySetInnerHTML: { __html: placeholder } }));
      } else {
        return _react2.default.createElement(
          Wrapper,
          _extends({ className: tooltipClass + ' ' + extraClass
          }, ariaProps, {
            'data-id': 'tooltip' }),
          placeholder
        );
      }
    }
  }]);

  return ReactTooltip;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.any,
  place: _propTypes2.default.string,
  type: _propTypes2.default.string,
  effect: _propTypes2.default.string,
  offset: _propTypes2.default.object,
  multiline: _propTypes2.default.bool,
  border: _propTypes2.default.bool,
  insecure: _propTypes2.default.bool,
  class: _propTypes2.default.string,
  className: _propTypes2.default.string,
  id: _propTypes2.default.string,
  html: _propTypes2.default.bool,
  delayHide: _propTypes2.default.number,
  delayShow: _propTypes2.default.number,
  event: _propTypes2.default.string,
  eventOff: _propTypes2.default.string,
  watchWindow: _propTypes2.default.bool,
  isCapture: _propTypes2.default.bool,
  globalEventOff: _propTypes2.default.string,
  getContent: _propTypes2.default.any,
  afterShow: _propTypes2.default.func,
  afterHide: _propTypes2.default.func,
  disable: _propTypes2.default.bool,
  scrollHide: _propTypes2.default.bool,
  resizeHide: _propTypes2.default.bool,
  wrapper: _propTypes2.default.string
}, _class2.defaultProps = {
  insecure: true,
  resizeHide: true,
  wrapper: 'div'
}, _class2.supportedWrappers = ['div', 'span'], _temp)) || _class) || _class) || _class) || _class) || _class) || _class;

/* export default not fit for standalone, it will exports {default:...} */


module.exports = ReactTooltip;

/***/ }),

/***/ 1539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '.__react_component_tooltip{border-radius:3px;display:inline-block;font-size:13px;left:-999em;opacity:0;padding:8px 21px;position:fixed;pointer-events:none;transition:opacity 0.3s ease-out;top:-999em;visibility:hidden;z-index:999}.__react_component_tooltip:before,.__react_component_tooltip:after{content:"";width:0;height:0;position:absolute}.__react_component_tooltip.show{opacity:0.9;margin-top:0px;margin-left:0px;visibility:visible}.__react_component_tooltip.type-dark{color:#fff;background-color:#222}.__react_component_tooltip.type-dark.place-top:after{border-top-color:#222;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-dark.place-bottom:after{border-bottom-color:#222;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-dark.place-left:after{border-left-color:#222;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-dark.place-right:after{border-right-color:#222;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-dark.border{border:1px solid #fff}.__react_component_tooltip.type-dark.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-dark.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-dark.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-dark.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-success{color:#fff;background-color:#8DC572}.__react_component_tooltip.type-success.place-top:after{border-top-color:#8DC572;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-success.place-bottom:after{border-bottom-color:#8DC572;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-success.place-left:after{border-left-color:#8DC572;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-success.place-right:after{border-right-color:#8DC572;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-success.border{border:1px solid #fff}.__react_component_tooltip.type-success.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-success.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-success.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-success.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-warning{color:#fff;background-color:#F0AD4E}.__react_component_tooltip.type-warning.place-top:after{border-top-color:#F0AD4E;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-warning.place-bottom:after{border-bottom-color:#F0AD4E;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-warning.place-left:after{border-left-color:#F0AD4E;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-warning.place-right:after{border-right-color:#F0AD4E;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-warning.border{border:1px solid #fff}.__react_component_tooltip.type-warning.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-warning.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-warning.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-warning.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-error{color:#fff;background-color:#BE6464}.__react_component_tooltip.type-error.place-top:after{border-top-color:#BE6464;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-error.place-bottom:after{border-bottom-color:#BE6464;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-error.place-left:after{border-left-color:#BE6464;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-error.place-right:after{border-right-color:#BE6464;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-error.border{border:1px solid #fff}.__react_component_tooltip.type-error.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-error.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-error.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-error.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-info{color:#fff;background-color:#337AB7}.__react_component_tooltip.type-info.place-top:after{border-top-color:#337AB7;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-info.place-bottom:after{border-bottom-color:#337AB7;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-info.place-left:after{border-left-color:#337AB7;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-info.place-right:after{border-right-color:#337AB7;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-info.border{border:1px solid #fff}.__react_component_tooltip.type-info.border.place-top:before{border-top:8px solid #fff}.__react_component_tooltip.type-info.border.place-bottom:before{border-bottom:8px solid #fff}.__react_component_tooltip.type-info.border.place-left:before{border-left:8px solid #fff}.__react_component_tooltip.type-info.border.place-right:before{border-right:8px solid #fff}.__react_component_tooltip.type-light{color:#222;background-color:#fff}.__react_component_tooltip.type-light.place-top:after{border-top-color:#fff;border-top-style:solid;border-top-width:6px}.__react_component_tooltip.type-light.place-bottom:after{border-bottom-color:#fff;border-bottom-style:solid;border-bottom-width:6px}.__react_component_tooltip.type-light.place-left:after{border-left-color:#fff;border-left-style:solid;border-left-width:6px}.__react_component_tooltip.type-light.place-right:after{border-right-color:#fff;border-right-style:solid;border-right-width:6px}.__react_component_tooltip.type-light.border{border:1px solid #222}.__react_component_tooltip.type-light.border.place-top:before{border-top:8px solid #222}.__react_component_tooltip.type-light.border.place-bottom:before{border-bottom:8px solid #222}.__react_component_tooltip.type-light.border.place-left:before{border-left:8px solid #222}.__react_component_tooltip.type-light.border.place-right:before{border-right:8px solid #222}.__react_component_tooltip.place-top{margin-top:-10px}.__react_component_tooltip.place-top:before{border-left:10px solid transparent;border-right:10px solid transparent;bottom:-8px;left:50%;margin-left:-10px}.__react_component_tooltip.place-top:after{border-left:8px solid transparent;border-right:8px solid transparent;bottom:-6px;left:50%;margin-left:-8px}.__react_component_tooltip.place-bottom{margin-top:10px}.__react_component_tooltip.place-bottom:before{border-left:10px solid transparent;border-right:10px solid transparent;top:-8px;left:50%;margin-left:-10px}.__react_component_tooltip.place-bottom:after{border-left:8px solid transparent;border-right:8px solid transparent;top:-6px;left:50%;margin-left:-8px}.__react_component_tooltip.place-left{margin-left:-10px}.__react_component_tooltip.place-left:before{border-top:6px solid transparent;border-bottom:6px solid transparent;right:-8px;top:50%;margin-top:-5px}.__react_component_tooltip.place-left:after{border-top:5px solid transparent;border-bottom:5px solid transparent;right:-6px;top:50%;margin-top:-4px}.__react_component_tooltip.place-right{margin-left:10px}.__react_component_tooltip.place-right:before{border-top:6px solid transparent;border-bottom:6px solid transparent;left:-8px;top:50%;margin-top:-5px}.__react_component_tooltip.place-right:after{border-top:5px solid transparent;border-bottom:5px solid transparent;left:-6px;top:50%;margin-top:-4px}.__react_component_tooltip .multi-line{display:block;padding:2px 0px;text-align:center}';

/***/ }),

/***/ 1540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAria = parseAria;
/**
 * Support aria- and role in ReactTooltip
 *
 * @params props {Object}
 * @return {Object}
 */
function parseAria(props) {
  var ariaObj = {};
  Object.keys(props).filter(function (prop) {
    // aria-xxx and role is acceptable
    return (/(^aria-\w+$|^role$)/.test(prop)
    );
  }).forEach(function (prop) {
    ariaObj[prop] = props[prop];
  });

  return ariaObj;
}

/***/ }),

/***/ 1541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e, target, node, place, effect, offset) {
  var tipWidth = node.clientWidth;
  var tipHeight = node.clientHeight;

  var _getCurrentOffset = getCurrentOffset(e, target, effect),
      mouseX = _getCurrentOffset.mouseX,
      mouseY = _getCurrentOffset.mouseY;

  var defaultOffset = getDefaultPosition(effect, target.clientWidth, target.clientHeight, tipWidth, tipHeight);

  var _calculateOffset = calculateOffset(offset),
      extraOffset_X = _calculateOffset.extraOffset_X,
      extraOffset_Y = _calculateOffset.extraOffset_Y;

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var _getParent = getParent(node),
      parentTop = _getParent.parentTop,
      parentLeft = _getParent.parentLeft;

  // Get the edge offset of the tooltip


  var getTipOffsetLeft = function getTipOffsetLeft(place) {
    var offset_X = defaultOffset[place].l;
    return mouseX + offset_X + extraOffset_X;
  };
  var getTipOffsetRight = function getTipOffsetRight(place) {
    var offset_X = defaultOffset[place].r;
    return mouseX + offset_X + extraOffset_X;
  };
  var getTipOffsetTop = function getTipOffsetTop(place) {
    var offset_Y = defaultOffset[place].t;
    return mouseY + offset_Y + extraOffset_Y;
  };
  var getTipOffsetBottom = function getTipOffsetBottom(place) {
    var offset_Y = defaultOffset[place].b;
    return mouseY + offset_Y + extraOffset_Y;
  };

  // Judge if the tooltip has over the window(screen)
  var outsideVertical = function outsideVertical() {
    var result = false;
    var newPlace = void 0;
    if (getTipOffsetTop('left') < 0 && getTipOffsetBottom('left') <= windowHeight && getTipOffsetBottom('bottom') <= windowHeight) {
      result = true;
      newPlace = 'bottom';
    } else if (getTipOffsetBottom('left') > windowHeight && getTipOffsetTop('left') >= 0 && getTipOffsetTop('top') >= 0) {
      result = true;
      newPlace = 'top';
    }
    return { result: result, newPlace: newPlace };
  };
  var outsideLeft = function outsideLeft() {
    var _outsideVertical = outsideVertical(),
        result = _outsideVertical.result,
        newPlace = _outsideVertical.newPlace; // Deal with vertical as first priority


    if (result && outsideHorizontal().result) {
      return { result: false }; // No need to change, if change to vertical will out of space
    }
    if (!result && getTipOffsetLeft('left') < 0 && getTipOffsetRight('right') <= windowWidth) {
      result = true; // If vertical ok, but let out of side and right won't out of side
      newPlace = 'right';
    }
    return { result: result, newPlace: newPlace };
  };
  var outsideRight = function outsideRight() {
    var _outsideVertical2 = outsideVertical(),
        result = _outsideVertical2.result,
        newPlace = _outsideVertical2.newPlace;

    if (result && outsideHorizontal().result) {
      return { result: false }; // No need to change, if change to vertical will out of space
    }
    if (!result && getTipOffsetRight('right') > windowWidth && getTipOffsetLeft('left') >= 0) {
      result = true;
      newPlace = 'left';
    }
    return { result: result, newPlace: newPlace };
  };

  var outsideHorizontal = function outsideHorizontal() {
    var result = false;
    var newPlace = void 0;
    if (getTipOffsetLeft('top') < 0 && getTipOffsetRight('top') <= windowWidth && getTipOffsetRight('right') <= windowWidth) {
      result = true;
      newPlace = 'right';
    } else if (getTipOffsetRight('top') > windowWidth && getTipOffsetLeft('top') >= 0 && getTipOffsetLeft('left') >= 0) {
      result = true;
      newPlace = 'left';
    }
    return { result: result, newPlace: newPlace };
  };
  var outsideTop = function outsideTop() {
    var _outsideHorizontal = outsideHorizontal(),
        result = _outsideHorizontal.result,
        newPlace = _outsideHorizontal.newPlace;

    if (result && outsideVertical().result) {
      return { result: false };
    }
    if (!result && getTipOffsetTop('top') < 0 && getTipOffsetBottom('bottom') <= windowHeight) {
      result = true;
      newPlace = 'bottom';
    }
    return { result: result, newPlace: newPlace };
  };
  var outsideBottom = function outsideBottom() {
    var _outsideHorizontal2 = outsideHorizontal(),
        result = _outsideHorizontal2.result,
        newPlace = _outsideHorizontal2.newPlace;

    if (result && outsideVertical().result) {
      return { result: false };
    }
    if (!result && getTipOffsetBottom('bottom') > windowHeight && getTipOffsetTop('top') >= 0) {
      result = true;
      newPlace = 'top';
    }
    return { result: result, newPlace: newPlace };
  };

  // Return new state to change the placement to the reverse if possible
  var outsideLeftResult = outsideLeft();
  var outsideRightResult = outsideRight();
  var outsideTopResult = outsideTop();
  var outsideBottomResult = outsideBottom();

  if (place === 'left' && outsideLeftResult.result) {
    return {
      isNewState: true,
      newState: { place: outsideLeftResult.newPlace }
    };
  } else if (place === 'right' && outsideRightResult.result) {
    return {
      isNewState: true,
      newState: { place: outsideRightResult.newPlace }
    };
  } else if (place === 'top' && outsideTopResult.result) {
    return {
      isNewState: true,
      newState: { place: outsideTopResult.newPlace }
    };
  } else if (place === 'bottom' && outsideBottomResult.result) {
    return {
      isNewState: true,
      newState: { place: outsideBottomResult.newPlace }
    };
  }

  // Return tooltip offset position
  return {
    isNewState: false,
    position: {
      left: parseInt(getTipOffsetLeft(place) - parentLeft, 10),
      top: parseInt(getTipOffsetTop(place) - parentTop, 10)
    }
  };
};

// Get current mouse offset
var getCurrentOffset = function getCurrentOffset(e, currentTarget, effect) {
  var boundingClientRect = currentTarget.getBoundingClientRect();
  var targetTop = boundingClientRect.top;
  var targetLeft = boundingClientRect.left;
  var targetWidth = currentTarget.clientWidth;
  var targetHeight = currentTarget.clientHeight;

  if (effect === 'float') {
    return {
      mouseX: e.clientX,
      mouseY: e.clientY
    };
  }
  return {
    mouseX: targetLeft + targetWidth / 2,
    mouseY: targetTop + targetHeight / 2
  };
};

// List all possibility of tooltip final offset
// This is useful in judging if it is necessary for tooltip to switch position when out of window
/**
 * Calculate the position of tooltip
 *
 * @params
 * - `e` {Event} the event of current mouse
 * - `target` {Element} the currentTarget of the event
 * - `node` {DOM} the react-tooltip object
 * - `place` {String} top / right / bottom / left
 * - `effect` {String} float / solid
 * - `offset` {Object} the offset to default position
 *
 * @return {Object
 * - `isNewState` {Bool} required
 * - `newState` {Object}
 * - `position` {OBject} {left: {Number}, top: {Number}}
 */
var getDefaultPosition = function getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight) {
  var top = void 0;
  var right = void 0;
  var bottom = void 0;
  var left = void 0;
  var disToMouse = 3;
  var triangleHeight = 2;
  var cursorHeight = 12; // Optimize for float bottom only, cause the cursor will hide the tooltip

  if (effect === 'float') {
    top = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: -(tipHeight + disToMouse + triangleHeight),
      b: -disToMouse
    };
    bottom = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: disToMouse + cursorHeight,
      b: tipHeight + disToMouse + triangleHeight + cursorHeight
    };
    left = {
      l: -(tipWidth + disToMouse + triangleHeight),
      r: -disToMouse,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
    right = {
      l: disToMouse,
      r: tipWidth + disToMouse + triangleHeight,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
  } else if (effect === 'solid') {
    top = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: -(targetHeight / 2 + tipHeight + triangleHeight),
      b: -(targetHeight / 2)
    };
    bottom = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: targetHeight / 2,
      b: targetHeight / 2 + tipHeight + triangleHeight
    };
    left = {
      l: -(tipWidth + targetWidth / 2 + triangleHeight),
      r: -(targetWidth / 2),
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
    right = {
      l: targetWidth / 2,
      r: tipWidth + targetWidth / 2 + triangleHeight,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
  }

  return { top: top, bottom: bottom, left: left, right: right };
};

// Consider additional offset into position calculation
var calculateOffset = function calculateOffset(offset) {
  var extraOffset_X = 0;
  var extraOffset_Y = 0;

  if (Object.prototype.toString.apply(offset) === '[object String]') {
    offset = JSON.parse(offset.toString().replace(/\'/g, '\"'));
  }
  for (var key in offset) {
    if (key === 'top') {
      extraOffset_Y -= parseInt(offset[key], 10);
    } else if (key === 'bottom') {
      extraOffset_Y += parseInt(offset[key], 10);
    } else if (key === 'left') {
      extraOffset_X -= parseInt(offset[key], 10);
    } else if (key === 'right') {
      extraOffset_X += parseInt(offset[key], 10);
    }
  }

  return { extraOffset_X: extraOffset_X, extraOffset_Y: extraOffset_Y };
};

// Get the offset of the parent elements
var getParent = function getParent(currentTarget) {
  var currentParent = currentTarget;
  while (currentParent) {
    if (window.getComputedStyle(currentParent).getPropertyValue('transform') !== 'none') break;
    currentParent = currentParent.parentElement;
  }

  var parentTop = currentParent && currentParent.getBoundingClientRect().top || 0;
  var parentLeft = currentParent && currentParent.getBoundingClientRect().left || 0;

  return { parentTop: parentTop, parentLeft: parentLeft };
};

/***/ }),

/***/ 1542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (tip, children, getContent, multiline) {
  if (children) return children;
  if (getContent !== undefined && getContent !== null) return getContent; // getContent can be 0, '', etc.
  if (getContent === null) return null; // Tip not exist and childern is null or undefined

  var regexp = /<br\s*\/?>/;
  if (!multiline || multiline === 'false' || !regexp.test(tip)) {
    // No trim(), so that user can keep their input
    return tip;
  }

  // Multiline tooltip content
  return tip.split(regexp).map(function (d, i) {
    return _react2.default.createElement(
      'span',
      { key: i, className: 'multi-line' },
      d
    );
  });
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 1543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (nodeList) {
  var length = nodeList.length;
  if (nodeList.hasOwnProperty) {
    return Array.prototype.slice.call(nodeList);
  }
  return new Array(length).fill().map(function (index) {
    return nodeList[index];
  });
};

/***/ })

});
//# sourceMappingURL=18.js.map