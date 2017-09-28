webpackJsonp([3],{

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

/***/ 1057:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".label-container {\n  position: relative;\n  overflow: hidden;\n  font-size: 100%;\n  color: #343434;\n  height: 100%;\n  float: left; }\n", ""]);

// exports


/***/ }),

/***/ 1094:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

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

/***/ 1303:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(4));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["Dropzone"] = factory(require("react"), require("prop-types"));
	else
		root["Dropzone"] = factory(root["react"], root["prop-types"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _attrAccept = __webpack_require__(4);
	
	var _attrAccept2 = _interopRequireDefault(_attrAccept);
	
	var _getDataTransferItems = __webpack_require__(5);
	
	var _getDataTransferItems2 = _interopRequireDefault(_getDataTransferItems);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint prefer-template: 0 */
	
	var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;
	
	var Dropzone = function (_React$Component) {
	  _inherits(Dropzone, _React$Component);
	
	  _createClass(Dropzone, null, [{
	    key: 'onDocumentDragOver',
	    value: function onDocumentDragOver(e) {
	      // allow the entire document to be a drag target
	      e.preventDefault();
	    }
	  }]);
	
	  function Dropzone(props, context) {
	    _classCallCheck(this, Dropzone);
	
	    var _this = _possibleConstructorReturn(this, (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this, props, context));
	
	    _this.renderChildren = function (children) {
	      if (typeof children === 'function') {
	        return children(_this.state);
	      }
	      return children;
	    };
	
	    _this.onClick = _this.onClick.bind(_this);
	    _this.onDocumentDrop = _this.onDocumentDrop.bind(_this);
	    _this.onDragStart = _this.onDragStart.bind(_this);
	    _this.onDragEnter = _this.onDragEnter.bind(_this);
	    _this.onDragLeave = _this.onDragLeave.bind(_this);
	    _this.onDragOver = _this.onDragOver.bind(_this);
	    _this.onDrop = _this.onDrop.bind(_this);
	    _this.onFileDialogCancel = _this.onFileDialogCancel.bind(_this);
	    _this.fileAccepted = _this.fileAccepted.bind(_this);
	    _this.setRef = _this.setRef.bind(_this);
	    _this.isFileDialogActive = false;
	    _this.state = {
	      isDragActive: false,
	      acceptedFiles: [],
	      rejectedFiles: []
	    };
	    return _this;
	  }
	
	  _createClass(Dropzone, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var preventDropOnDocument = this.props.preventDropOnDocument;
	
	      this.dragTargets = [];
	
	      if (preventDropOnDocument) {
	        document.addEventListener('dragover', Dropzone.onDocumentDragOver, false);
	        document.addEventListener('drop', this.onDocumentDrop, false);
	      }
	      // Tried implementing addEventListener, but didn't work out
	      document.body.onfocus = this.onFileDialogCancel;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var preventDropOnDocument = this.props.preventDropOnDocument;
	
	      if (preventDropOnDocument) {
	        document.removeEventListener('dragover', Dropzone.onDocumentDragOver);
	        document.removeEventListener('drop', this.onDocumentDrop);
	      }
	      // Can be replaced with removeEventListener, if addEventListener works
	      document.body.onfocus = null;
	    }
	  }, {
	    key: 'onDocumentDrop',
	    value: function onDocumentDrop(e) {
	      if (this.node.contains(e.target)) {
	        // if we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
	        return;
	      }
	      e.preventDefault();
	      this.dragTargets = [];
	    }
	  }, {
	    key: 'onDragStart',
	    value: function onDragStart(e) {
	      if (this.props.onDragStart) {
	        this.props.onDragStart.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDragEnter',
	    value: function onDragEnter(e) {
	      e.preventDefault();
	
	      // Count the dropzone and any children that are entered.
	      if (this.dragTargets.indexOf(e.target) === -1) {
	        this.dragTargets.push(e.target);
	      }
	
	      var files = (0, _getDataTransferItems2.default)(e);
	      var allFilesAccepted = this.allFilesAccepted(files);
	      var isMultipleAllowed = this.props.multiple || files.length <= 1;
	
	      this.setState({
	        isDragActive: allFilesAccepted,
	        isDragReject: !allFilesAccepted || !isMultipleAllowed
	      });
	
	      if (this.props.onDragEnter) {
	        this.props.onDragEnter.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDragOver',
	    value: function onDragOver(e) {
	      // eslint-disable-line class-methods-use-this
	      e.preventDefault();
	      e.stopPropagation();
	      try {
	        e.dataTransfer.dropEffect = 'copy'; // eslint-disable-line no-param-reassign
	      } catch (err) {
	        // continue regardless of error
	      }
	
	      if (this.props.onDragOver) {
	        this.props.onDragOver.call(this, e);
	      }
	      return false;
	    }
	  }, {
	    key: 'onDragLeave',
	    value: function onDragLeave(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	
	      // Only deactivate once the dropzone and all children have been left.
	      this.dragTargets = this.dragTargets.filter(function (el) {
	        return el !== e.target && _this2.node.contains(el);
	      });
	      if (this.dragTargets.length > 0) {
	        return;
	      }
	
	      this.setState({
	        isDragActive: false,
	        isDragReject: false
	      });
	
	      if (this.props.onDragLeave) {
	        this.props.onDragLeave.call(this, e);
	      }
	    }
	  }, {
	    key: 'onDrop',
	    value: function onDrop(e) {
	      var _this3 = this;
	
	      var _props = this.props,
	          onDrop = _props.onDrop,
	          onDropAccepted = _props.onDropAccepted,
	          onDropRejected = _props.onDropRejected,
	          multiple = _props.multiple,
	          disablePreview = _props.disablePreview;
	
	      var fileList = (0, _getDataTransferItems2.default)(e);
	      var acceptedFiles = [];
	      var rejectedFiles = [];
	
	      // Stop default browser behavior
	      e.preventDefault();
	
	      // Reset the counter along with the drag on a drop.
	      this.dragTargets = [];
	      this.isFileDialogActive = false;
	
	      fileList.forEach(function (file) {
	        if (!disablePreview) {
	          try {
	            file.preview = window.URL.createObjectURL(file); // eslint-disable-line no-param-reassign
	          } catch (err) {
	            if (process.env.NODE_ENV !== 'production') {
	              console.error('Failed to generate preview for file', file, err); // eslint-disable-line no-console
	            }
	          }
	        }
	
	        if (_this3.fileAccepted(file) && _this3.fileMatchSize(file)) {
	          acceptedFiles.push(file);
	        } else {
	          rejectedFiles.push(file);
	        }
	      });
	
	      if (!multiple) {
	        // if not in multi mode add any extra accepted files to rejected.
	        // This will allow end users to easily ignore a multi file drop in "single" mode.
	        rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.splice(1)));
	      }
	
	      if (onDrop) {
	        onDrop.call(this, acceptedFiles, rejectedFiles, e);
	      }
	
	      if (rejectedFiles.length > 0 && onDropRejected) {
	        onDropRejected.call(this, rejectedFiles, e);
	      }
	
	      if (acceptedFiles.length > 0 && onDropAccepted) {
	        onDropAccepted.call(this, acceptedFiles, e);
	      }
	
	      // Reset drag state
	      this.setState({
	        isDragActive: false,
	        isDragReject: false,
	        acceptedFiles: acceptedFiles,
	        rejectedFiles: rejectedFiles
	      });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      var _props2 = this.props,
	          onClick = _props2.onClick,
	          disableClick = _props2.disableClick;
	
	      if (!disableClick) {
	        e.stopPropagation();
	        this.open();
	        if (onClick) {
	          onClick.call(this, e);
	        }
	      }
	    }
	  }, {
	    key: 'onFileDialogCancel',
	    value: function onFileDialogCancel() {
	      // timeout will not recognize context of this method
	      var onFileDialogCancel = this.props.onFileDialogCancel;
	      var fileInputEl = this.fileInputEl;
	      var isFileDialogActive = this.isFileDialogActive;
	      // execute the timeout only if the onFileDialogCancel is defined and FileDialog
	      // is opened in the browser
	
	      if (onFileDialogCancel && isFileDialogActive) {
	        setTimeout(function () {
	          // Returns an object as FileList
	          var FileList = fileInputEl.files;
	          if (!FileList.length) {
	            isFileDialogActive = false;
	            onFileDialogCancel();
	          }
	        }, 300);
	      }
	    }
	  }, {
	    key: 'setRef',
	    value: function setRef(ref) {
	      this.node = ref;
	    }
	  }, {
	    key: 'fileAccepted',
	    value: function fileAccepted(file) {
	      // Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
	      // that MIME type will always be accepted
	      return file.type === 'application/x-moz-file' || (0, _attrAccept2.default)(file, this.props.accept);
	    }
	  }, {
	    key: 'fileMatchSize',
	    value: function fileMatchSize(file) {
	      return file.size <= this.props.maxSize && file.size >= this.props.minSize;
	    }
	  }, {
	    key: 'allFilesAccepted',
	    value: function allFilesAccepted(files) {
	      return files.every(this.fileAccepted);
	    }
	
	    /**
	     * Open system file upload dialog.
	     *
	     * @public
	     */
	
	  }, {
	    key: 'open',
	    value: function open() {
	      this.isFileDialogActive = true;
	      this.fileInputEl.value = null;
	      this.fileInputEl.click();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props3 = this.props,
	          accept = _props3.accept,
	          activeClassName = _props3.activeClassName,
	          inputProps = _props3.inputProps,
	          multiple = _props3.multiple,
	          name = _props3.name,
	          rejectClassName = _props3.rejectClassName,
	          children = _props3.children,
	          rest = _objectWithoutProperties(_props3, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName', 'children']);
	
	      var activeStyle = rest.activeStyle,
	          className = rest.className,
	          rejectStyle = rest.rejectStyle,
	          style = rest.style,
	          props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);
	
	      var _state = this.state,
	          isDragActive = _state.isDragActive,
	          isDragReject = _state.isDragReject;
	
	
	      className = className || '';
	
	      if (isDragActive && activeClassName) {
	        className += ' ' + activeClassName;
	      }
	      if (isDragReject && rejectClassName) {
	        className += ' ' + rejectClassName;
	      }
	
	      if (!className && !style && !activeStyle && !rejectStyle) {
	        style = {
	          width: 200,
	          height: 200,
	          borderWidth: 2,
	          borderColor: '#666',
	          borderStyle: 'dashed',
	          borderRadius: 5
	        };
	        activeStyle = {
	          borderStyle: 'solid',
	          borderColor: '#6c6',
	          backgroundColor: '#eee'
	        };
	        rejectStyle = {
	          borderStyle: 'solid',
	          borderColor: '#c66',
	          backgroundColor: '#eee'
	        };
	      }
	
	      var appliedStyle = void 0;
	      if (activeStyle && isDragActive) {
	        appliedStyle = _extends({}, style, activeStyle);
	      } else if (rejectStyle && isDragReject) {
	        appliedStyle = _extends({}, style, rejectStyle);
	      } else {
	        appliedStyle = _extends({}, style);
	      }
	
	      var inputAttributes = {
	        accept: accept,
	        type: 'file',
	        style: { display: 'none' },
	        multiple: supportMultiple && multiple,
	        ref: function ref(el) {
	          return _this4.fileInputEl = el;
	        }, // eslint-disable-line
	        onChange: this.onDrop
	      };
	
	      if (name && name.length) {
	        inputAttributes.name = name;
	      }
	
	      // Remove custom properties before passing them to the wrapper div element
	      var customProps = ['acceptedFiles', 'preventDropOnDocument', 'disablePreview', 'disableClick', 'onDropAccepted', 'onDropRejected', 'onFileDialogCancel', 'maxSize', 'minSize'];
	      var divProps = _extends({}, props);
	      customProps.forEach(function (prop) {
	        return delete divProps[prop];
	      });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({
	          className: className,
	          style: appliedStyle
	        }, divProps /* expand user provided props first so event handlers are never overridden */, {
	          onClick: this.onClick,
	          onDragStart: this.onDragStart,
	          onDragEnter: this.onDragEnter,
	          onDragOver: this.onDragOver,
	          onDragLeave: this.onDragLeave,
	          onDrop: this.onDrop,
	          ref: this.setRef
	        }),
	        this.renderChildren(children),
	        _react2.default.createElement('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes))
	      );
	    }
	  }]);
	
	  return Dropzone;
	}(_react2.default.Component);
	
	Dropzone.propTypes = {
	  /**
	   * Allow specific types of files. See https://github.com/okonet/attr-accept for more information.
	   * Keep in mind that mime type determination is not reliable accross platforms. CSV files,
	   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
	   * Windows. In some cases there might not be a mime type set at all.
	   * See: https://github.com/okonet/react-dropzone/issues/276
	   */
	  accept: _propTypes2.default.string,
	
	  /**
	   * Contents of the dropzone
	   */
	  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
	
	  /**
	   * Disallow clicking on the dropzone container to open file dialog
	   */
	  disableClick: _propTypes2.default.bool,
	
	  /**
	   * Enable/disable preview generation
	   */
	  disablePreview: _propTypes2.default.bool,
	
	  /**
	   * If false, allow dropped items to take over the current browser window
	   */
	  preventDropOnDocument: _propTypes2.default.bool,
	
	  /**
	   * Pass additional attributes to the `<input type="file"/>` tag
	   */
	  inputProps: _propTypes2.default.object,
	
	  /**
	   * Allow dropping multiple files
	   */
	  multiple: _propTypes2.default.bool,
	
	  /**
	   * `name` attribute for the input tag
	   */
	  name: _propTypes2.default.string,
	
	  /**
	   * Maximum file size
	   */
	  maxSize: _propTypes2.default.number,
	
	  /**
	   * Minimum file size
	   */
	  minSize: _propTypes2.default.number,
	
	  /**
	   * className
	   */
	  className: _propTypes2.default.string,
	
	  /**
	   * className for accepted state
	   */
	  activeClassName: _propTypes2.default.string,
	
	  /**
	   * className for rejected state
	   */
	  rejectClassName: _propTypes2.default.string,
	
	  /**
	   * CSS styles to apply
	   */
	  style: _propTypes2.default.object,
	
	  /**
	   * CSS styles to apply when drop will be accepted
	   */
	  activeStyle: _propTypes2.default.object,
	
	  /**
	   * CSS styles to apply when drop will be rejected
	   */
	  rejectStyle: _propTypes2.default.object,
	
	  /**
	   * onClick callback
	   * @param {Event} event
	   */
	  onClick: _propTypes2.default.func,
	
	  /**
	   * onDrop callback
	   */
	  onDrop: _propTypes2.default.func,
	
	  /**
	   * onDropAccepted callback
	   */
	  onDropAccepted: _propTypes2.default.func,
	
	  /**
	   * onDropRejected callback
	   */
	  onDropRejected: _propTypes2.default.func,
	
	  /**
	   * onDragStart callback
	   */
	  onDragStart: _propTypes2.default.func,
	
	  /**
	   * onDragEnter callback
	   */
	  onDragEnter: _propTypes2.default.func,
	
	  /**
	   * onDragOver callback
	   */
	  onDragOver: _propTypes2.default.func,
	
	  /**
	   * onDragLeave callback
	   */
	  onDragLeave: _propTypes2.default.func,
	
	  /**
	   * Provide a callback on clicking the cancel button of the file dialog
	   */
	  onFileDialogCancel: _propTypes2.default.func
	};
	
	Dropzone.defaultProps = {
	  preventDropOnDocument: true,
	  disablePreview: false,
	  disableClick: false,
	  multiple: true,
	  maxSize: Infinity,
	  minSize: 0
	};
	
	exports.default = Dropzone;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=Array.isArray(n)?n:n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,y,d=t&s.G,h=t&s.P,v=d?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=d?o:o[n]||(o[n]={});d&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],y=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,y),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getDataTransferFiles;
	function getDataTransferFiles(event) {
	  var dataTransferItemsList = [];
	  if (event.dataTransfer) {
	    var dt = event.dataTransfer;
	    if (dt.files && dt.files.length) {
	      dataTransferItemsList = dt.files;
	    } else if (dt.items && dt.items.length) {
	      // During the drag even the dataTransfer.files is null
	      // but Chrome implements some drag store, which is accesible via dataTransfer.items
	      dataTransferItemsList = dt.items;
	    }
	  } else if (event.target && event.target.files) {
	    dataTransferItemsList = event.target.files;
	  }
	  // Convert from DataTransferItemsList to the native Array
	  return Array.prototype.slice.call(dataTransferItemsList);
	}
	module.exports = exports["default"];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=index.js.map

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

/***/ 1362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".background {\n  background: rgba(248, 248, 248, 0.8);\n  -webkit-transform: rotateZ(180deg);\n          transform: rotateZ(180deg);\n  height: calc(100% - 65px);\n  position: absolute;\n  width: 100vw;\n  top: 65px; }\n", ""]);

// exports


/***/ }),

/***/ 1368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".image-grid {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .image-grid a {\n    width: calc(50% - 4px);\n    display: inline-block;\n    text-decoration: none;\n    margin-bottom: 4px;\n    margin-right: 4px;\n    color: black; }\n  .image-grid a:hover img {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  .image-grid a:hover button {\n    border: solid 1px #1bb1f4; }\n  .image-grid button {\n    border: solid 1px #dedede;\n    background: transparent;\n    overflow: hidden;\n    outline: none;\n    margin: 0; }\n  .image-grid figcaption {\n    margin-top: 15px; }\n  .image-grid img {\n    transition: -webkit-transform .2s ease-in-out;\n    transition: transform .2s ease-in-out;\n    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\n    max-width: 100%;\n    display: block;\n    height: auto; }\n  .image-grid .p a {\n    text-decoration: underline;\n    display: inline;\n    font-size: 13px;\n    margin: 0;\n    color: blue; }\n  .image-grid .p {\n    text-align: center;\n    font-size: 13px;\n    padding-top: 100px; }\n  @media only screen and (min-width: 875px) {\n    .image-grid a {\n      width: calc(33% - 3px); }\n    .image-grid a:nth-of-type(n) {\n      margin-right: 4px; }\n    .image-grid a:nth-of-type(3n) {\n      margin-right: 0; } }\n  @media only screen and (min-width: 501px) and (max-width: 876px) {\n    .image-grid a {\n      width: calc(20% - 4px); }\n    .image-grid a:nth-of-type(n) {\n      margin-right: 4px; }\n    .image-grid a:nth-of-type(5n) {\n      margin-right: 0; } }\n  @media only screen and (max-width: 500px) {\n    .image-grid a {\n      width: calc(33% - 3px); }\n    .image-grid a:nth-of-type(n) {\n      margin-right: 4px; }\n    .image-grid a:nth-of-type(3n) {\n      margin-right: 0; } }\n", ""]);

// exports


/***/ }),

/***/ 1370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".model-uploader {\n  overflow: hidden;\n  height: 100%; }\n  .model-uploader .title {\n    border-bottom: 1px solid #dedede;\n    padding: 4px 0 4px 8px;\n    background: #f9f9f9;\n    text-align: left;\n    font-weight: 800;\n    font-size: 16px;\n    cursor: default;\n    color: #6d6d6d; }\n  .model-uploader .title > span {\n    position: relative;\n    margin-right: 6px;\n    font-size: 24px;\n    color: #8e8e8e;\n    top: 2px; }\n  .model-uploader .title > label {\n    margin: 0; }\n  .model-uploader .login {\n    height: calc(100% - 36px);\n    padding-top: 10px;\n    background: white;\n    cursor: default; }\n    .model-uploader .login u {\n      cursor: pointer; }\n  .model-uploader .limit {\n    cursor: not-allowed;\n    padding-top: 3px;\n    color: #e44747; }\n    .model-uploader .limit hr {\n      margin: -6px 40px 3px 40px; }\n  .model-uploader .content {\n    transition-property: all;\n    transition-timing-function: ease;\n    transition-duration: 0.5s;\n    transition-delay: 0.0s;\n    border: 2px solid #ffffff;\n    height: calc(100% - 36px);\n    padding: 8px 10px 0 0;\n    background: white;\n    cursor: pointer; }\n  .model-uploader .content:hover {\n    border-color: #1bb1f4; }\n  .model-uploader hr {\n    margin: 0 40px 10px 40px; }\n", ""]);

// exports


/***/ }),

/***/ 1372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".recent-models {\n  background: #ffffff;\n  overflow: hidden;\n  height: 100%; }\n  .recent-models .title {\n    border-bottom: 1px solid #dedede;\n    padding: 4px 0 4px 8px;\n    background: #f9f9f9;\n    text-align: left;\n    font-weight: 800;\n    font-size: 16px;\n    cursor: default;\n    color: #6d6d6d; }\n  .recent-models .title > span {\n    position: relative;\n    margin-right: 6px;\n    font-size: 24px;\n    color: #8e8e8e;\n    top: 2px; }\n  .recent-models .title > label {\n    position: relative;\n    margin: 0;\n    top: -2px; }\n  .recent-models .content {\n    height: calc(100% - 42px);\n    margin: 4px 0 0 4px;\n    overflow: auto; }\n", ""]);

// exports


/***/ }),

/***/ 1378:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".gallery-view {\n  height: calc(100vh - 65px);\n  background-color: #284e99;\n  padding: 10px 0;\n  color: white; }\n  .gallery-view .search {\n    background: rgba(248, 248, 248, 0.4);\n    margin: 0 auto 10px auto;\n    padding: 5px 0 0 30px;\n    position: relative;\n    max-width: 978px;\n    text-align: left;\n    height: 30px;\n    color: white;\n    width: 95%; }\n  .gallery-view .search[contenteditable]:empty:not(:focus):before {\n    content: attr(data-placeholder);\n    pointer-events: none;\n    color: #d8d8d8; }\n  .gallery-view .container {\n    background: rgba(248, 248, 248, 0.4);\n    height: calc(100% - 46px);\n    margin: 0 auto 0 auto;\n    position: relative;\n    overflow: scroll;\n    width: 95%; }\n  .gallery-view .scroller {\n    overflow: scroll;\n    height: 100%; }\n  .gallery-view .paginator {\n    margin: 16px 0 0 16px;\n    width: calc(63% - 40px);\n    position: absolute;\n    padding: 0 0 0 0;\n    height: 34px; }\n    .gallery-view .paginator .pagination {\n      border: 0px solid #ffffff;\n      background: white;\n      border-radius: 0;\n      width: 100%;\n      margin: 0; }\n      .gallery-view .paginator .pagination li > a {\n        border-right: 1px solid #ddd;\n        border-left: 1px solid #ddd;\n        border-bottom: 0;\n        cursor: pointer;\n        border-top: 0;\n        outline: none; }\n      .gallery-view .paginator .pagination li:first-child > a {\n        border-left: 0; }\n      .gallery-view .paginator .pagination li:last-child > a {\n        border-bottom-right-radius: 0px;\n        border-top-right-radius: 0px; }\n      .gallery-view .paginator .pagination li.break-me > a {\n        cursor: default; }\n        .gallery-view .paginator .pagination li.break-me > a:hover {\n          background-color: #ffffff; }\n  .gallery-view .primary {\n    height: calc(100% - 60px);\n    overflow: scroll; }\n    .gallery-view .primary .items {\n      height: calc(100% - 45px); }\n  .gallery-view .secondary {\n    height: calc(100% - 30px);\n    margin: 16px 0 0 0;\n    overflow: hidden; }\n  .gallery-view .uploader {\n    box-shadow: 20px 20px 33px 0px rgba(0, 0, 0, 0.21);\n    margin-bottom: 16px;\n    background: #f9f9f9;\n    color: #284e99;\n    height: 130px; }\n  .gallery-view .recent {\n    box-shadow: 20px 20px 33px 0px rgba(0, 0, 0, 0.21);\n    height: calc(100% - 145px);\n    overflow: auto; }\n  @media only screen and (max-width: 875px) {\n    .gallery-view .search {\n      max-width: 978px; }\n    .gallery-view .container {\n      max-width: 978px; }\n    .gallery-view .scroller {\n      height: calc(100% - 46px);\n      margin-top: 46px; }\n    .gallery-view .paginator {\n      margin: 0 0 0 0;\n      width: 100%; }\n    .gallery-view .primary {\n      max-width: 100%;\n      margin: 0 0 0 0;\n      float: none;\n      width: auto; }\n      .gallery-view .primary .items {\n        height: 100%; }\n    .gallery-view .secondary {\n      max-width: 100%;\n      margin-left: 0;\n      float: none;\n      width: auto; }\n    .gallery-view .recent {\n      height: 100%; } }\n  @media only screen and (min-width: 876px) {\n    .gallery-view .search {\n      max-width: 978px; }\n    .gallery-view .container {\n      max-width: 978px; }\n    .gallery-view .primary {\n      margin: 60px 0px 0 16px;\n      padding: 0px 40px 0 0;\n      float: left;\n      width: 63%; }\n    .gallery-view .secondary {\n      padding: 0px 40px 0 0;\n      float: left;\n      width: 34%; } }\n  .gallery-view .item {\n    box-shadow: 20px 20px 33px 0px rgba(0, 0, 0, 0.21);\n    background: #ffffff;\n    margin: 0 0 16px 0;\n    text-align: left;\n    overflow: hidden;\n    color: black;\n    padding: 0; }\n    .gallery-view .item .content {\n      transition-property: background;\n      transition-timing-function: ease;\n      transition-duration: 0.85s;\n      transition-delay: 0.0s;\n      cursor: pointer;\n      display: block;\n      height: 100px; }\n    .gallery-view .item .content:hover {\n      background: rgba(189, 217, 255, 0.8);\n      text-decoration: none; }\n    .gallery-view .item .content:hover img {\n      -webkit-transform: scale(1.08);\n              transform: scale(1.08); }\n    .gallery-view .item .image-container {\n      overflow: hidden;\n      margin: 0px 0px;\n      height: 100px;\n      width: 100px;\n      float: left; }\n    .gallery-view .item .image-container img {\n      transition-property: -webkit-transform;\n      transition-property: transform;\n      transition-property: transform, -webkit-transform;\n      transition-timing-function: ease;\n      transition-duration: 0.3s;\n      transition-delay: 0.0s;\n      -o-object-position: center;\n         object-position: center;\n      height: 100%;\n      width: 100%; }\n    .gallery-view .item .title {\n      margin: 20px 0 0 10px;\n      float: left; }\n    .gallery-view .item .footer {\n      border-top: 1px solid gainsboro;\n      background: #f9f9f9;\n      height: 30px;\n      float: left;\n      width: 100%; }\n      .gallery-view .item .footer .svf:hover span {\n        color: #595959; }\n      .gallery-view .item .footer .svf:hover label {\n        color: #595959; }\n      .gallery-view .item .footer .svf {\n        margin-right: 10px;\n        cursor: pointer;\n        width: 152px;\n        float: left; }\n        .gallery-view .item .footer .svf span {\n          transition-property: color;\n          transition-timing-function: ease;\n          transition-duration: 0.5s;\n          transition-delay: 0.0s;\n          margin: 3px 4px 0 6px;\n          pointer-events: none;\n          position: relative;\n          font-size: 22px;\n          color: #8e8e8e;\n          float: left; }\n        .gallery-view .item .footer .svf label {\n          transition-property: color;\n          transition-timing-function: ease;\n          transition-duration: 0.5s;\n          transition-delay: 0.0s;\n          pointer-events: none;\n          position: relative;\n          margin-right: 6px;\n          color: #8e8e8e;\n          float: left;\n          top: 4px; }\n        .gallery-view .item .footer .svf .sk-cube-grid {\n          position: relative;\n          height: 16px;\n          width: 16px;\n          float: left;\n          top: 6px; }\n        .gallery-view .item .footer .svf .sk-cube {\n          background: #8e8e8e; }\n      .gallery-view .item .footer .expiry {\n        float: left; }\n        .gallery-view .item .footer .expiry span {\n          margin: 3px 4px 0 6px;\n          position: relative;\n          font-size: 22px;\n          color: #8e8e8e; }\n        .gallery-view .item .footer .expiry label {\n          position: relative;\n          color: #8e8e8e;\n          top: -3px; }\n\n.agreement-dlg {\n  left: calc(50% - 250px) !important;\n  width: 500px !important;\n  text-align: left; }\n", ""]);

// exports


/***/ }),

/***/ 1615:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.6.2
/** echo  * @license echo  * while read i do echo  *  done echo
*/


(function() {
  var Color, K, PITHIRD, TWOPI, X, Y, Z, bezier, brewer, chroma, clip_rgb, colors, cos, css2rgb, hex2rgb, hsi2rgb, hsl2rgb, hsv2rgb, lab2lch, lab2rgb, lab_xyz, lch2lab, lch2rgb, limit, luminance, luminance_x, rgb2hex, rgb2hsi, rgb2hsl, rgb2hsv, rgb2lab, rgb2lch, rgb_xyz, root, type, unpack, xyz_lab, xyz_rgb, _ref;

  chroma = function(x, y, z, m) {
    return new Color(x, y, z, m);
  };

  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
    module.exports = chroma;
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return chroma;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    root = typeof exports !== "undefined" && exports !== null ? exports : this;
    root.chroma = chroma;
  }

  chroma.color = function(x, y, z, m) {
    return new Color(x, y, z, m);
  };

  chroma.hsl = function(h, s, l, a) {
    return new Color(h, s, l, a, 'hsl');
  };

  chroma.hsv = function(h, s, v, a) {
    return new Color(h, s, v, a, 'hsv');
  };

  chroma.rgb = function(r, g, b, a) {
    return new Color(r, g, b, a, 'rgb');
  };

  chroma.hex = function(x) {
    return new Color(x);
  };

  chroma.css = function(x) {
    return new Color(x);
  };

  chroma.lab = function(l, a, b) {
    return new Color(l, a, b, 'lab');
  };

  chroma.lch = function(l, c, h) {
    return new Color(l, c, h, 'lch');
  };

  chroma.hsi = function(h, s, i) {
    return new Color(h, s, i, 'hsi');
  };

  chroma.gl = function(r, g, b, a) {
    return new Color(r * 255, g * 255, b * 255, a, 'gl');
  };

  chroma.interpolate = function(a, b, f, m) {
    if ((a == null) || (b == null)) {
      return '#000';
    }
    if (type(a) === 'string') {
      a = new Color(a);
    }
    if (type(b) === 'string') {
      b = new Color(b);
    }
    return a.interpolate(f, b, m);
  };

  chroma.mix = chroma.interpolate;

  chroma.contrast = function(a, b) {
    var l1, l2;

    if (type(a) === 'string') {
      a = new Color(a);
    }
    if (type(b) === 'string') {
      b = new Color(b);
    }
    l1 = a.luminance();
    l2 = b.luminance();
    if (l1 > l2) {
      return (l1 + 0.05) / (l2 + 0.05);
    } else {
      return (l2 + 0.05) / (l1 + 0.05);
    }
  };

  chroma.luminance = function(color) {
    return chroma(color).luminance();
  };

  chroma._Color = Color;

  /**
      chroma.js
  
      Copyright (c) 2011-2013, Gregor Aisch
      All rights reserved.
  
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
  
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
  
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.
  
      * The name Gregor Aisch may not be used to endorse or promote products
        derived from this software without specific prior written permission.
  
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  
      @source: https://github.com/gka/chroma.js
  */


  Color = (function() {
    function Color() {
      var a, arg, args, m, me, me_rgb, x, y, z, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4;

      me = this;
      args = [];
      for (_i = 0, _len = arguments.length; _i < _len; _i++) {
        arg = arguments[_i];
        if (arg != null) {
          args.push(arg);
        }
      }
      if (args.length === 0) {
        _ref = [255, 0, 255, 1, 'rgb'], x = _ref[0], y = _ref[1], z = _ref[2], a = _ref[3], m = _ref[4];
      } else if (type(args[0]) === "array") {
        if (args[0].length === 3) {
          _ref1 = args[0], x = _ref1[0], y = _ref1[1], z = _ref1[2];
          a = 1;
        } else if (args[0].length === 4) {
          _ref2 = args[0], x = _ref2[0], y = _ref2[1], z = _ref2[2], a = _ref2[3];
        } else {
          throw 'unknown input argument';
        }
        m = (_ref3 = args[1]) != null ? _ref3 : 'rgb';
      } else if (type(args[0]) === "string") {
        x = args[0];
        m = 'hex';
      } else if (type(args[0]) === "object") {
        _ref4 = args[0]._rgb, x = _ref4[0], y = _ref4[1], z = _ref4[2], a = _ref4[3];
        m = 'rgb';
      } else if (args.length >= 3) {
        x = args[0];
        y = args[1];
        z = args[2];
      }
      if (args.length === 3) {
        m = 'rgb';
        a = 1;
      } else if (args.length === 4) {
        if (type(args[3]) === "string") {
          m = args[3];
          a = 1;
        } else if (type(args[3]) === "number") {
          m = 'rgb';
          a = args[3];
        }
      } else if (args.length === 5) {
        a = args[3];
        m = args[4];
      }
      if (a == null) {
        a = 1;
      }
      if (m === 'rgb') {
        me._rgb = [x, y, z, a];
      } else if (m === 'gl') {
        me._rgb = [x * 255, y * 255, z * 255, a];
      } else if (m === 'hsl') {
        me._rgb = hsl2rgb(x, y, z);
        me._rgb[3] = a;
      } else if (m === 'hsv') {
        me._rgb = hsv2rgb(x, y, z);
        me._rgb[3] = a;
      } else if (m === 'hex') {
        me._rgb = hex2rgb(x);
      } else if (m === 'lab') {
        me._rgb = lab2rgb(x, y, z);
        me._rgb[3] = a;
      } else if (m === 'lch') {
        me._rgb = lch2rgb(x, y, z);
        me._rgb[3] = a;
      } else if (m === 'hsi') {
        me._rgb = hsi2rgb(x, y, z);
        me._rgb[3] = a;
      }
      me_rgb = clip_rgb(me._rgb);
    }

    Color.prototype.rgb = function() {
      return this._rgb.slice(0, 3);
    };

    Color.prototype.rgba = function() {
      return this._rgb;
    };

    Color.prototype.hex = function() {
      return rgb2hex(this._rgb);
    };

    Color.prototype.toString = function() {
      return this.name();
    };

    Color.prototype.hsl = function() {
      return rgb2hsl(this._rgb);
    };

    Color.prototype.hsv = function() {
      return rgb2hsv(this._rgb);
    };

    Color.prototype.lab = function() {
      return rgb2lab(this._rgb);
    };

    Color.prototype.lch = function() {
      return rgb2lch(this._rgb);
    };

    Color.prototype.hsi = function() {
      return rgb2hsi(this._rgb);
    };

    Color.prototype.gl = function() {
      return [this._rgb[0] / 255, this._rgb[1] / 255, this._rgb[2] / 255, this._rgb[3]];
    };

    Color.prototype.luminance = function(lum, mode) {
      var cur_lum, eps, max_iter, test;

      if (mode == null) {
        mode = 'rgb';
      }
      if (!arguments.length) {
        return luminance(this._rgb);
      }
      if (lum === 0) {
        this._rgb = [0, 0, 0, this._rgb[3]];
      }
      if (lum === 1) {
        this._rgb = [255, 255, 255, this._rgb[3]];
      }
      cur_lum = luminance(this._rgb);
      eps = 1e-7;
      max_iter = 20;
      test = function(l, h) {
        var lm, m;

        m = l.interpolate(0.5, h, mode);
        lm = m.luminance();
        if (Math.abs(lum - lm) < eps || !max_iter--) {
          return m;
        }
        if (lm > lum) {
          return test(l, m);
        }
        return test(m, h);
      };
      this._rgb = (cur_lum > lum ? test(new Color('black'), this) : test(this, new Color('white'))).rgba();
      return this;
    };

    Color.prototype.name = function() {
      var h, k;

      h = this.hex();
      for (k in chroma.colors) {
        if (h === chroma.colors[k]) {
          return k;
        }
      }
      return h;
    };

    Color.prototype.alpha = function(alpha) {
      if (arguments.length) {
        this._rgb[3] = alpha;
        return this;
      }
      return this._rgb[3];
    };

    Color.prototype.css = function(mode) {
      var hsl, me, rgb, rnd;

      if (mode == null) {
        mode = 'rgb';
      }
      me = this;
      rgb = me._rgb;
      if (mode.length === 3 && rgb[3] < 1) {
        mode += 'a';
      }
      if (mode === 'rgb') {
        return mode + '(' + rgb.slice(0, 3).map(Math.round).join(',') + ')';
      } else if (mode === 'rgba') {
        return mode + '(' + rgb.slice(0, 3).map(Math.round).join(',') + ',' + rgb[3] + ')';
      } else if (mode === 'hsl' || mode === 'hsla') {
        hsl = me.hsl();
        rnd = function(a) {
          return Math.round(a * 100) / 100;
        };
        hsl[0] = rnd(hsl[0]);
        hsl[1] = rnd(hsl[1] * 100) + '%';
        hsl[2] = rnd(hsl[2] * 100) + '%';
        if (mode.length === 4) {
          hsl[3] = rgb[3];
        }
        return mode + '(' + hsl.join(',') + ')';
      }
    };

    Color.prototype.interpolate = function(f, col, m) {
      /*
      interpolates between colors
      f = 0 --> me
      f = 1 --> col
      */

      var dh, hue, hue0, hue1, lbv, lbv0, lbv1, me, res, sat, sat0, sat1, xyz0, xyz1;

      me = this;
      if (m == null) {
        m = 'rgb';
      }
      if (type(col) === "string") {
        col = new Color(col);
      }
      if (m === 'hsl' || m === 'hsv' || m === 'lch' || m === 'hsi') {
        if (m === 'hsl') {
          xyz0 = me.hsl();
          xyz1 = col.hsl();
        } else if (m === 'hsv') {
          xyz0 = me.hsv();
          xyz1 = col.hsv();
        } else if (m === 'hsi') {
          xyz0 = me.hsi();
          xyz1 = col.hsi();
        } else if (m === 'lch') {
          xyz0 = me.lch();
          xyz1 = col.lch();
        }
        if (m.substr(0, 1) === 'h') {
          hue0 = xyz0[0], sat0 = xyz0[1], lbv0 = xyz0[2];
          hue1 = xyz1[0], sat1 = xyz1[1], lbv1 = xyz1[2];
        } else {
          lbv0 = xyz0[0], sat0 = xyz0[1], hue0 = xyz0[2];
          lbv1 = xyz1[0], sat1 = xyz1[1], hue1 = xyz1[2];
        }
        if (!isNaN(hue0) && !isNaN(hue1)) {
          if (hue1 > hue0 && hue1 - hue0 > 180) {
            dh = hue1 - (hue0 + 360);
          } else if (hue1 < hue0 && hue0 - hue1 > 180) {
            dh = hue1 + 360 - hue0;
          } else {
            dh = hue1 - hue0;
          }
          hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
          hue = hue0;
          if ((lbv1 === 1 || lbv1 === 0) && m !== 'hsv') {
            sat = sat0;
          }
        } else if (!isNaN(hue1)) {
          hue = hue1;
          if ((lbv0 === 1 || lbv0 === 0) && m !== 'hsv') {
            sat = sat1;
          }
        } else {
          hue = Number.NaN;
        }
        if (sat == null) {
          sat = sat0 + f * (sat1 - sat0);
        }
        lbv = lbv0 + f * (lbv1 - lbv0);
        if (m.substr(0, 1) === 'h') {
          res = new Color(hue, sat, lbv, m);
        } else {
          res = new Color(lbv, sat, hue, m);
        }
      } else if (m === 'rgb') {
        xyz0 = me._rgb;
        xyz1 = col._rgb;
        res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
      } else if (m === 'lab') {
        xyz0 = me.lab();
        xyz1 = col.lab();
        res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
      } else {
        throw "color mode " + m + " is not supported";
      }
      res.alpha(me.alpha() + f * (col.alpha() - me.alpha()));
      return res;
    };

    Color.prototype.premultiply = function() {
      var a, rgb;

      rgb = this.rgb();
      a = this.alpha();
      return chroma(rgb[0] * a, rgb[1] * a, rgb[2] * a, a);
    };

    Color.prototype.darken = function(amount) {
      var lch, me;

      if (amount == null) {
        amount = 20;
      }
      me = this;
      lch = me.lch();
      lch[0] -= amount;
      return chroma.lch(lch).alpha(me.alpha());
    };

    Color.prototype.darker = function(amount) {
      return this.darken(amount);
    };

    Color.prototype.brighten = function(amount) {
      if (amount == null) {
        amount = 20;
      }
      return this.darken(-amount);
    };

    Color.prototype.brighter = function(amount) {
      return this.brighten(amount);
    };

    Color.prototype.saturate = function(amount) {
      var lch, me;

      if (amount == null) {
        amount = 20;
      }
      me = this;
      lch = me.lch();
      lch[1] += amount;
      return chroma.lch(lch).alpha(me.alpha());
    };

    Color.prototype.desaturate = function(amount) {
      if (amount == null) {
        amount = 20;
      }
      return this.saturate(-amount);
    };

    return Color;

  })();

  clip_rgb = function(rgb) {
    var i;

    for (i in rgb) {
      if (i < 3) {
        if (rgb[i] < 0) {
          rgb[i] = 0;
        }
        if (rgb[i] > 255) {
          rgb[i] = 255;
        }
      } else if (i === 3) {
        if (rgb[i] < 0) {
          rgb[i] = 0;
        }
        if (rgb[i] > 1) {
          rgb[i] = 1;
        }
      }
    }
    return rgb;
  };

  css2rgb = function(css) {
    var hsl, i, m, rgb, _i, _j, _k, _l;

    css = css.toLowerCase();
    if ((chroma.colors != null) && chroma.colors[css]) {
      return hex2rgb(chroma.colors[css]);
    }
    if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
      rgb = m.slice(1, 4);
      for (i = _i = 0; _i <= 2; i = ++_i) {
        rgb[i] = +rgb[i];
      }
      rgb[3] = 1;
    } else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
      rgb = m.slice(1, 5);
      for (i = _j = 0; _j <= 3; i = ++_j) {
        rgb[i] = +rgb[i];
      }
    } else if (m = css.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
      rgb = m.slice(1, 4);
      for (i = _k = 0; _k <= 2; i = ++_k) {
        rgb[i] = Math.round(rgb[i] * 2.55);
      }
      rgb[3] = 1;
    } else if (m = css.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
      rgb = m.slice(1, 5);
      for (i = _l = 0; _l <= 2; i = ++_l) {
        rgb[i] = Math.round(rgb[i] * 2.55);
      }
      rgb[3] = +rgb[3];
    } else if (m = css.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
      hsl = m.slice(1, 4);
      hsl[1] *= 0.01;
      hsl[2] *= 0.01;
      rgb = hsl2rgb(hsl);
      rgb[3] = 1;
    } else if (m = css.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
      hsl = m.slice(1, 4);
      hsl[1] *= 0.01;
      hsl[2] *= 0.01;
      rgb = hsl2rgb(hsl);
      rgb[3] = +m[4];
    }
    return rgb;
  };

  hex2rgb = function(hex) {
    var a, b, g, r, rgb, u;

    if (hex.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      if (hex.length === 4 || hex.length === 7) {
        hex = hex.substr(1);
      }
      if (hex.length === 3) {
        hex = hex.split("");
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      u = parseInt(hex, 16);
      r = u >> 16;
      g = u >> 8 & 0xFF;
      b = u & 0xFF;
      return [r, g, b, 1];
    }
    if (hex.match(/^#?([A-Fa-f0-9]{8})$/)) {
      if (hex.length === 9) {
        hex = hex.substr(1);
      }
      u = parseInt(hex, 16);
      r = u >> 24 & 0xFF;
      g = u >> 16 & 0xFF;
      b = u >> 8 & 0xFF;
      a = u & 0xFF;
      return [r, g, b, a];
    }
    if (rgb = css2rgb(hex)) {
      return rgb;
    }
    throw "unknown color: " + hex;
  };

  hsi2rgb = function(h, s, i) {
    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
    */

    var b, g, r, _ref;

    _ref = unpack(arguments), h = _ref[0], s = _ref[1], i = _ref[2];
    h /= 360;
    if (h < 1 / 3) {
      b = (1 - s) / 3;
      r = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      g = 1 - (b + r);
    } else if (h < 2 / 3) {
      h -= 1 / 3;
      r = (1 - s) / 3;
      g = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      b = 1 - (r + g);
    } else {
      h -= 2 / 3;
      g = (1 - s) / 3;
      b = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
      r = 1 - (g + b);
    }
    r = limit(i * r * 3);
    g = limit(i * g * 3);
    b = limit(i * b * 3);
    return [r * 255, g * 255, b * 255];
  };

  hsl2rgb = function() {
    var b, c, g, h, i, l, r, s, t1, t2, t3, _i, _ref, _ref1;

    _ref = unpack(arguments), h = _ref[0], s = _ref[1], l = _ref[2];
    if (s === 0) {
      r = g = b = l * 255;
    } else {
      t3 = [0, 0, 0];
      c = [0, 0, 0];
      t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
      t1 = 2 * l - t2;
      h /= 360;
      t3[0] = h + 1 / 3;
      t3[1] = h;
      t3[2] = h - 1 / 3;
      for (i = _i = 0; _i <= 2; i = ++_i) {
        if (t3[i] < 0) {
          t3[i] += 1;
        }
        if (t3[i] > 1) {
          t3[i] -= 1;
        }
        if (6 * t3[i] < 1) {
          c[i] = t1 + (t2 - t1) * 6 * t3[i];
        } else if (2 * t3[i] < 1) {
          c[i] = t2;
        } else if (3 * t3[i] < 2) {
          c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
        } else {
          c[i] = t1;
        }
      }
      _ref1 = [Math.round(c[0] * 255), Math.round(c[1] * 255), Math.round(c[2] * 255)], r = _ref1[0], g = _ref1[1], b = _ref1[2];
    }
    return [r, g, b];
  };

  hsv2rgb = function() {
    var b, f, g, h, i, p, q, r, s, t, v, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;

    _ref = unpack(arguments), h = _ref[0], s = _ref[1], v = _ref[2];
    v *= 255;
    if (s === 0) {
      r = g = b = v;
    } else {
      if (h === 360) {
        h = 0;
      }
      if (h > 360) {
        h -= 360;
      }
      if (h < 0) {
        h += 360;
      }
      h /= 60;
      i = Math.floor(h);
      f = h - i;
      p = v * (1 - s);
      q = v * (1 - s * f);
      t = v * (1 - s * (1 - f));
      switch (i) {
        case 0:
          _ref1 = [v, t, p], r = _ref1[0], g = _ref1[1], b = _ref1[2];
          break;
        case 1:
          _ref2 = [q, v, p], r = _ref2[0], g = _ref2[1], b = _ref2[2];
          break;
        case 2:
          _ref3 = [p, v, t], r = _ref3[0], g = _ref3[1], b = _ref3[2];
          break;
        case 3:
          _ref4 = [p, q, v], r = _ref4[0], g = _ref4[1], b = _ref4[2];
          break;
        case 4:
          _ref5 = [t, p, v], r = _ref5[0], g = _ref5[1], b = _ref5[2];
          break;
        case 5:
          _ref6 = [v, p, q], r = _ref6[0], g = _ref6[1], b = _ref6[2];
      }
    }
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    return [r, g, b];
  };

  K = 18;

  X = 0.950470;

  Y = 1;

  Z = 1.088830;

  lab2lch = function() {
    var a, b, c, h, l, _ref;

    _ref = unpack(arguments), l = _ref[0], a = _ref[1], b = _ref[2];
    c = Math.sqrt(a * a + b * b);
    h = Math.atan2(b, a) / Math.PI * 180;
    return [l, c, h];
  };

  lab2rgb = function(l, a, b) {
    /*
    adapted to match d3 implementation
    */

    var g, r, x, y, z, _ref, _ref1;

    if (l !== void 0 && l.length === 3) {
      _ref = l, l = _ref[0], a = _ref[1], b = _ref[2];
    }
    if (l !== void 0 && l.length === 3) {
      _ref1 = l, l = _ref1[0], a = _ref1[1], b = _ref1[2];
    }
    y = (l + 16) / 116;
    x = y + a / 500;
    z = y - b / 200;
    x = lab_xyz(x) * X;
    y = lab_xyz(y) * Y;
    z = lab_xyz(z) * Z;
    r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
    g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
    b = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
    return [limit(r, 0, 255), limit(g, 0, 255), limit(b, 0, 255), 1];
  };

  lab_xyz = function(x) {
    if (x > 0.206893034) {
      return x * x * x;
    } else {
      return (x - 4 / 29) / 7.787037;
    }
  };

  xyz_rgb = function(r) {
    return Math.round(255 * (r <= 0.00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - 0.055));
  };

  lch2lab = function() {
    /*
    Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel. These formulas were invented by David Dalrymple to obtain maximum contrast without going out of gamut if the parameters are in the range 0-1.
    A saturation multiplier was added by Gregor Aisch
    */

    var c, h, l, _ref;

    _ref = unpack(arguments), l = _ref[0], c = _ref[1], h = _ref[2];
    h = h * Math.PI / 180;
    return [l, Math.cos(h) * c, Math.sin(h) * c];
  };

  lch2rgb = function(l, c, h) {
    var L, a, b, g, r, _ref, _ref1;

    _ref = lch2lab(l, c, h), L = _ref[0], a = _ref[1], b = _ref[2];
    _ref1 = lab2rgb(L, a, b), r = _ref1[0], g = _ref1[1], b = _ref1[2];
    return [limit(r, 0, 255), limit(g, 0, 255), limit(b, 0, 255)];
  };

  luminance = function(r, g, b) {
    var _ref;

    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
    r = luminance_x(r);
    g = luminance_x(g);
    b = luminance_x(b);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  luminance_x = function(x) {
    x /= 255;
    if (x <= 0.03928) {
      return x / 12.92;
    } else {
      return Math.pow((x + 0.055) / 1.055, 2.4);
    }
  };

  rgb2hex = function() {
    var b, g, r, str, u, _ref;

    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
    u = r << 16 | g << 8 | b;
    str = "000000" + u.toString(16);
    return "#" + str.substr(str.length - 6);
  };

  rgb2hsi = function() {
    /*
    borrowed from here:
    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
    */

    var TWOPI, b, g, h, i, min, r, s, _ref;

    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
    TWOPI = Math.PI * 2;
    r /= 255;
    g /= 255;
    b /= 255;
    min = Math.min(r, g, b);
    i = (r + g + b) / 3;
    s = 1 - min / i;
    if (s === 0) {
      h = 0;
    } else {
      h = ((r - g) + (r - b)) / 2;
      h /= Math.sqrt((r - g) * (r - g) + (r - b) * (g - b));
      h = Math.acos(h);
      if (b > g) {
        h = TWOPI - h;
      }
      h /= TWOPI;
    }
    return [h * 360, s, i];
  };

  rgb2hsl = function(r, g, b) {
    var h, l, max, min, s, _ref;

    if (r !== void 0 && r.length >= 3) {
      _ref = r, r = _ref[0], g = _ref[1], b = _ref[2];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    l = (max + min) / 2;
    if (max === min) {
      s = 0;
      h = Number.NaN;
    } else {
      s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
    }
    if (r === max) {
      h = (g - b) / (max - min);
    } else if (g === max) {
      h = 2 + (b - r) / (max - min);
    } else if (b === max) {
      h = 4 + (r - g) / (max - min);
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
    return [h, s, l];
  };

  rgb2hsv = function() {
    var b, delta, g, h, max, min, r, s, v, _ref;

    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);
    delta = max - min;
    v = max / 255.0;
    if (max === 0) {
      h = Number.NaN;
      s = 0;
    } else {
      s = delta / max;
      if (r === max) {
        h = (g - b) / delta;
      }
      if (g === max) {
        h = 2 + (b - r) / delta;
      }
      if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
    }
    return [h, s, v];
  };

  rgb2lab = function() {
    var b, g, r, x, y, z, _ref;

    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
    r = rgb_xyz(r);
    g = rgb_xyz(g);
    b = rgb_xyz(b);
    x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / X);
    y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / Y);
    z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / Z);
    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
  };

  rgb_xyz = function(r) {
    if ((r /= 255) <= 0.04045) {
      return r / 12.92;
    } else {
      return Math.pow((r + 0.055) / 1.055, 2.4);
    }
  };

  xyz_lab = function(x) {
    if (x > 0.008856) {
      return Math.pow(x, 1 / 3);
    } else {
      return 7.787037 * x + 4 / 29;
    }
  };

  rgb2lch = function() {
    var a, b, g, l, r, _ref, _ref1;

    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
    _ref1 = rgb2lab(r, g, b), l = _ref1[0], a = _ref1[1], b = _ref1[2];
    return lab2lch(l, a, b);
  };

  /*
      chroma.js
  
      Copyright (c) 2011-2013, Gregor Aisch
      All rights reserved.
  
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
  
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
  
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.
  
      * The name Gregor Aisch may not be used to endorse or promote products
        derived from this software without specific prior written permission.
  
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  
      @source: https://github.com/gka/chroma.js
  */


  chroma.scale = function(colors, positions) {
    var classifyValue, f, getClass, getColor, resetCache, setColors, setDomain, tmap, _colorCache, _colors, _correctLightness, _domain, _fixed, _max, _min, _mode, _nacol, _numClasses, _out, _pos, _spread;

    _mode = 'rgb';
    _nacol = chroma('#ccc');
    _spread = 0;
    _fixed = false;
    _domain = [0, 1];
    _colors = [];
    _out = false;
    _pos = [];
    _min = 0;
    _max = 1;
    _correctLightness = false;
    _numClasses = 0;
    _colorCache = {};
    setColors = function(colors, positions) {
      var c, col, _i, _j, _ref, _ref1, _ref2;

      if (colors == null) {
        colors = ['#ddd', '#222'];
      }
      if ((colors != null) && type(colors) === 'string' && (((_ref = chroma.brewer) != null ? _ref[colors] : void 0) != null)) {
        colors = chroma.brewer[colors];
      }
      if (type(colors) === 'array') {
        colors = colors.slice(0);
        for (c = _i = 0, _ref1 = colors.length - 1; 0 <= _ref1 ? _i <= _ref1 : _i >= _ref1; c = 0 <= _ref1 ? ++_i : --_i) {
          col = colors[c];
          if (type(col) === "string") {
            colors[c] = chroma(col);
          }
        }
        if (positions != null) {
          _pos = positions;
        } else {
          _pos = [];
          for (c = _j = 0, _ref2 = colors.length - 1; 0 <= _ref2 ? _j <= _ref2 : _j >= _ref2; c = 0 <= _ref2 ? ++_j : --_j) {
            _pos.push(c / (colors.length - 1));
          }
        }
      }
      resetCache();
      return _colors = colors;
    };
    setDomain = function(domain) {
      if (domain == null) {
        domain = [];
      }
      /*
      # use this if you want to display a limited number of data classes
      # possible methods are "equalinterval", "quantiles", "custom"
      */

      _domain = domain;
      _min = domain[0];
      _max = domain[domain.length - 1];
      resetCache();
      if (domain.length === 2) {
        return _numClasses = 0;
      } else {
        return _numClasses = domain.length - 1;
      }
    };
    getClass = function(value) {
      var i, n;

      if (_domain != null) {
        n = _domain.length - 1;
        i = 0;
        while (i < n && value >= _domain[i]) {
          i++;
        }
        return i - 1;
      }
      return 0;
    };
    tmap = function(t) {
      return t;
    };
    classifyValue = function(value) {
      var i, maxc, minc, n, val;

      val = value;
      if (_domain.length > 2) {
        n = _domain.length - 1;
        i = getClass(value);
        minc = _domain[0] + (_domain[1] - _domain[0]) * (0 + _spread * 0.5);
        maxc = _domain[n - 1] + (_domain[n] - _domain[n - 1]) * (1 - _spread * 0.5);
        val = _min + ((_domain[i] + (_domain[i + 1] - _domain[i]) * 0.5 - minc) / (maxc - minc)) * (_max - _min);
      }
      return val;
    };
    getColor = function(val, bypassMap) {
      var c, col, f0, i, k, p, t, _i, _ref;

      if (bypassMap == null) {
        bypassMap = false;
      }
      if (isNaN(val)) {
        return _nacol;
      }
      if (!bypassMap) {
        if (_domain.length > 2) {
          c = getClass(val);
          t = c / (_numClasses - 1);
        } else {
          t = f0 = _min !== _max ? (val - _min) / (_max - _min) : 0;
          t = f0 = (val - _min) / (_max - _min);
          t = Math.min(1, Math.max(0, t));
        }
      } else {
        t = val;
      }
      if (!bypassMap) {
        t = tmap(t);
      }
      k = Math.floor(t * 10000);
      if (_colorCache[k]) {
        col = _colorCache[k];
      } else {
        if (type(_colors) === 'array') {
          for (i = _i = 0, _ref = _pos.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
            p = _pos[i];
            if (t <= p) {
              col = _colors[i];
              break;
            }
            if (t >= p && i === _pos.length - 1) {
              col = _colors[i];
              break;
            }
            if (t > p && t < _pos[i + 1]) {
              t = (t - p) / (_pos[i + 1] - p);
              col = chroma.interpolate(_colors[i], _colors[i + 1], t, _mode);
              break;
            }
          }
        } else if (type(_colors) === 'function') {
          col = _colors(t);
        }
        _colorCache[k] = col;
      }
      return col;
    };
    resetCache = function() {
      return _colorCache = {};
    };
    setColors(colors, positions);
    f = function(v) {
      var c;

      c = getColor(v);
      if (_out && c[_out]) {
        return c[_out]();
      } else {
        return c;
      }
    };
    f.domain = function(domain, classes, mode, key) {
      var d;

      if (mode == null) {
        mode = 'e';
      }
      if (!arguments.length) {
        return _domain;
      }
      if (classes != null) {
        d = chroma.analyze(domain, key);
        if (classes === 0) {
          domain = [d.min, d.max];
        } else {
          domain = chroma.limits(d, mode, classes);
        }
      }
      setDomain(domain);
      return f;
    };
    f.mode = function(_m) {
      if (!arguments.length) {
        return _mode;
      }
      _mode = _m;
      resetCache();
      return f;
    };
    f.range = function(colors, _pos) {
      setColors(colors, _pos);
      return f;
    };
    f.out = function(_o) {
      _out = _o;
      return f;
    };
    f.spread = function(val) {
      if (!arguments.length) {
        return _spread;
      }
      _spread = val;
      return f;
    };
    f.correctLightness = function(v) {
      if (!arguments.length) {
        return _correctLightness;
      }
      _correctLightness = v;
      resetCache();
      if (_correctLightness) {
        tmap = function(t) {
          var L0, L1, L_actual, L_diff, L_ideal, max_iter, pol, t0, t1;

          L0 = getColor(0, true).lab()[0];
          L1 = getColor(1, true).lab()[0];
          pol = L0 > L1;
          L_actual = getColor(t, true).lab()[0];
          L_ideal = L0 + (L1 - L0) * t;
          L_diff = L_actual - L_ideal;
          t0 = 0;
          t1 = 1;
          max_iter = 20;
          while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
            (function() {
              if (pol) {
                L_diff *= -1;
              }
              if (L_diff < 0) {
                t0 = t;
                t += (t1 - t) * 0.5;
              } else {
                t1 = t;
                t += (t0 - t) * 0.5;
              }
              L_actual = getColor(t, true).lab()[0];
              return L_diff = L_actual - L_ideal;
            })();
          }
          return t;
        };
      } else {
        tmap = function(t) {
          return t;
        };
      }
      return f;
    };
    f.colors = function(out) {
      var i, samples, _i, _j, _len, _ref;

      if (out == null) {
        out = 'hex';
      }
      colors = [];
      samples = [];
      if (_domain.length > 2) {
        for (i = _i = 1, _ref = _domain.length; 1 <= _ref ? _i < _ref : _i > _ref; i = 1 <= _ref ? ++_i : --_i) {
          samples.push((_domain[i - 1] + _domain[i]) * 0.5);
        }
      } else {
        samples = _domain;
      }
      for (_j = 0, _len = samples.length; _j < _len; _j++) {
        i = samples[_j];
        colors.push(f(i)[out]());
      }
      return colors;
    };
    return f;
  };

  if ((_ref = chroma.scales) == null) {
    chroma.scales = {};
  }

  chroma.scales.cool = function() {
    return chroma.scale([chroma.hsl(180, 1, .9), chroma.hsl(250, .7, .4)]);
  };

  chroma.scales.hot = function() {
    return chroma.scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb');
  };

  /*
      chroma.js
  
      Copyright (c) 2011-2013, Gregor Aisch
      All rights reserved.
  
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
  
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
  
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.
  
      * The name Gregor Aisch may not be used to endorse or promote products
        derived from this software without specific prior written permission.
  
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  
      @source: https://github.com/gka/chroma.js
  */


  chroma.analyze = function(data, key, filter) {
    var add, k, r, val, visit, _i, _len;

    r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    if (filter == null) {
      filter = function() {
        return true;
      };
    }
    add = function(val) {
      if ((val != null) && !isNaN(val)) {
        r.values.push(val);
        r.sum += val;
        if (val < r.min) {
          r.min = val;
        }
        if (val > r.max) {
          r.max = val;
        }
        r.count += 1;
      }
    };
    visit = function(val, k) {
      if (filter(val, k)) {
        if ((key != null) && type(key) === 'function') {
          return add(key(val));
        } else if ((key != null) && type(key) === 'string' || type(key) === 'number') {
          return add(val[key]);
        } else {
          return add(val);
        }
      }
    };
    if (type(data) === 'array') {
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        val = data[_i];
        visit(val);
      }
    } else {
      for (k in data) {
        val = data[k];
        visit(val, k);
      }
    }
    r.domain = [r.min, r.max];
    r.limits = function(mode, num) {
      return chroma.limits(r, mode, num);
    };
    return r;
  };

  chroma.limits = function(data, mode, num) {
    var assignments, best, centroids, cluster, clusterSizes, dist, i, j, kClusters, limits, max, max_log, min, min_log, mindist, n, nb_iters, newCentroids, p, pb, pr, repeat, sum, tmpKMeansBreaks, value, values, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _s, _t, _u, _v, _w;

    if (mode == null) {
      mode = 'equal';
    }
    if (num == null) {
      num = 7;
    }
    if (type(data) === 'array') {
      data = chroma.analyze(data);
    }
    min = data.min;
    max = data.max;
    sum = data.sum;
    values = data.values.sort(function(a, b) {
      return a - b;
    });
    limits = [];
    if (mode.substr(0, 1) === 'c') {
      limits.push(min);
      limits.push(max);
    }
    if (mode.substr(0, 1) === 'e') {
      limits.push(min);
      for (i = _i = 1, _ref1 = num - 1; 1 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 1 <= _ref1 ? ++_i : --_i) {
        limits.push(min + (i / num) * (max - min));
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'l') {
      if (min <= 0) {
        throw 'Logarithmic scales are only possible for values > 0';
      }
      min_log = Math.LOG10E * Math.log(min);
      max_log = Math.LOG10E * Math.log(max);
      limits.push(min);
      for (i = _j = 1, _ref2 = num - 1; 1 <= _ref2 ? _j <= _ref2 : _j >= _ref2; i = 1 <= _ref2 ? ++_j : --_j) {
        limits.push(Math.pow(10, min_log + (i / num) * (max_log - min_log)));
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'q') {
      limits.push(min);
      for (i = _k = 1, _ref3 = num - 1; 1 <= _ref3 ? _k <= _ref3 : _k >= _ref3; i = 1 <= _ref3 ? ++_k : --_k) {
        p = values.length * i / num;
        pb = Math.floor(p);
        if (pb === p) {
          limits.push(values[pb]);
        } else {
          pr = p - pb;
          limits.push(values[pb] * pr + values[pb + 1] * (1 - pr));
        }
      }
      limits.push(max);
    } else if (mode.substr(0, 1) === 'k') {
      /*
      implementation based on
      http://code.google.com/p/figue/source/browse/trunk/figue.js#336
      simplified for 1-d input values
      */

      n = values.length;
      assignments = new Array(n);
      clusterSizes = new Array(num);
      repeat = true;
      nb_iters = 0;
      centroids = null;
      centroids = [];
      centroids.push(min);
      for (i = _l = 1, _ref4 = num - 1; 1 <= _ref4 ? _l <= _ref4 : _l >= _ref4; i = 1 <= _ref4 ? ++_l : --_l) {
        centroids.push(min + (i / num) * (max - min));
      }
      centroids.push(max);
      while (repeat) {
        for (j = _m = 0, _ref5 = num - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; j = 0 <= _ref5 ? ++_m : --_m) {
          clusterSizes[j] = 0;
        }
        for (i = _n = 0, _ref6 = n - 1; 0 <= _ref6 ? _n <= _ref6 : _n >= _ref6; i = 0 <= _ref6 ? ++_n : --_n) {
          value = values[i];
          mindist = Number.MAX_VALUE;
          for (j = _o = 0, _ref7 = num - 1; 0 <= _ref7 ? _o <= _ref7 : _o >= _ref7; j = 0 <= _ref7 ? ++_o : --_o) {
            dist = Math.abs(centroids[j] - value);
            if (dist < mindist) {
              mindist = dist;
              best = j;
            }
          }
          clusterSizes[best]++;
          assignments[i] = best;
        }
        newCentroids = new Array(num);
        for (j = _p = 0, _ref8 = num - 1; 0 <= _ref8 ? _p <= _ref8 : _p >= _ref8; j = 0 <= _ref8 ? ++_p : --_p) {
          newCentroids[j] = null;
        }
        for (i = _q = 0, _ref9 = n - 1; 0 <= _ref9 ? _q <= _ref9 : _q >= _ref9; i = 0 <= _ref9 ? ++_q : --_q) {
          cluster = assignments[i];
          if (newCentroids[cluster] === null) {
            newCentroids[cluster] = values[i];
          } else {
            newCentroids[cluster] += values[i];
          }
        }
        for (j = _r = 0, _ref10 = num - 1; 0 <= _ref10 ? _r <= _ref10 : _r >= _ref10; j = 0 <= _ref10 ? ++_r : --_r) {
          newCentroids[j] *= 1 / clusterSizes[j];
        }
        repeat = false;
        for (j = _s = 0, _ref11 = num - 1; 0 <= _ref11 ? _s <= _ref11 : _s >= _ref11; j = 0 <= _ref11 ? ++_s : --_s) {
          if (newCentroids[j] !== centroids[i]) {
            repeat = true;
            break;
          }
        }
        centroids = newCentroids;
        nb_iters++;
        if (nb_iters > 200) {
          repeat = false;
        }
      }
      kClusters = {};
      for (j = _t = 0, _ref12 = num - 1; 0 <= _ref12 ? _t <= _ref12 : _t >= _ref12; j = 0 <= _ref12 ? ++_t : --_t) {
        kClusters[j] = [];
      }
      for (i = _u = 0, _ref13 = n - 1; 0 <= _ref13 ? _u <= _ref13 : _u >= _ref13; i = 0 <= _ref13 ? ++_u : --_u) {
        cluster = assignments[i];
        kClusters[cluster].push(values[i]);
      }
      tmpKMeansBreaks = [];
      for (j = _v = 0, _ref14 = num - 1; 0 <= _ref14 ? _v <= _ref14 : _v >= _ref14; j = 0 <= _ref14 ? ++_v : --_v) {
        tmpKMeansBreaks.push(kClusters[j][0]);
        tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
      }
      tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
        return a - b;
      });
      limits.push(tmpKMeansBreaks[0]);
      for (i = _w = 1, _ref15 = tmpKMeansBreaks.length - 1; _w <= _ref15; i = _w += 2) {
        if (!isNaN(tmpKMeansBreaks[i])) {
          limits.push(tmpKMeansBreaks[i]);
        }
      }
    }
    return limits;
  };

  /**
  	ColorBrewer colors for chroma.js
  
  	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
  	Pennsylvania State University.
  
  	Licensed under the Apache License, Version 2.0 (the "License"); 
  	you may not use this file except in compliance with the License.
  	You may obtain a copy of the License at	
  	http://www.apache.org/licenses/LICENSE-2.0
  
  	Unless required by applicable law or agreed to in writing, software distributed
  	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
  	CONDITIONS OF ANY KIND, either express or implied. See the License for the
  	specific language governing permissions and limitations under the License.
  
      @preserve
  */


  chroma.brewer = brewer = {
    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
  };

  /**
  	X11 color names
  
  	http://www.w3.org/TR/css3-color/#svg-color
  */


  chroma.colors = colors = {
    indigo: "#4b0082",
    gold: "#ffd700",
    hotpink: "#ff69b4",
    firebrick: "#b22222",
    indianred: "#cd5c5c",
    yellow: "#ffff00",
    mistyrose: "#ffe4e1",
    darkolivegreen: "#556b2f",
    olive: "#808000",
    darkseagreen: "#8fbc8f",
    pink: "#ffc0cb",
    tomato: "#ff6347",
    lightcoral: "#f08080",
    orangered: "#ff4500",
    navajowhite: "#ffdead",
    lime: "#00ff00",
    palegreen: "#98fb98",
    darkslategrey: "#2f4f4f",
    greenyellow: "#adff2f",
    burlywood: "#deb887",
    seashell: "#fff5ee",
    mediumspringgreen: "#00fa9a",
    fuchsia: "#ff00ff",
    papayawhip: "#ffefd5",
    blanchedalmond: "#ffebcd",
    chartreuse: "#7fff00",
    dimgray: "#696969",
    black: "#000000",
    peachpuff: "#ffdab9",
    springgreen: "#00ff7f",
    aquamarine: "#7fffd4",
    white: "#ffffff",
    orange: "#ffa500",
    lightsalmon: "#ffa07a",
    darkslategray: "#2f4f4f",
    brown: "#a52a2a",
    ivory: "#fffff0",
    dodgerblue: "#1e90ff",
    peru: "#cd853f",
    lawngreen: "#7cfc00",
    chocolate: "#d2691e",
    crimson: "#dc143c",
    forestgreen: "#228b22",
    darkgrey: "#a9a9a9",
    lightseagreen: "#20b2aa",
    cyan: "#00ffff",
    mintcream: "#f5fffa",
    silver: "#c0c0c0",
    antiquewhite: "#faebd7",
    mediumorchid: "#ba55d3",
    skyblue: "#87ceeb",
    gray: "#808080",
    darkturquoise: "#00ced1",
    goldenrod: "#daa520",
    darkgreen: "#006400",
    floralwhite: "#fffaf0",
    darkviolet: "#9400d3",
    darkgray: "#a9a9a9",
    moccasin: "#ffe4b5",
    saddlebrown: "#8b4513",
    grey: "#808080",
    darkslateblue: "#483d8b",
    lightskyblue: "#87cefa",
    lightpink: "#ffb6c1",
    mediumvioletred: "#c71585",
    slategrey: "#708090",
    red: "#ff0000",
    deeppink: "#ff1493",
    limegreen: "#32cd32",
    darkmagenta: "#8b008b",
    palegoldenrod: "#eee8aa",
    plum: "#dda0dd",
    turquoise: "#40e0d0",
    lightgrey: "#d3d3d3",
    lightgoldenrodyellow: "#fafad2",
    darkgoldenrod: "#b8860b",
    lavender: "#e6e6fa",
    maroon: "#800000",
    yellowgreen: "#9acd32",
    sandybrown: "#f4a460",
    thistle: "#d8bfd8",
    violet: "#ee82ee",
    navy: "#000080",
    magenta: "#ff00ff",
    dimgrey: "#696969",
    tan: "#d2b48c",
    rosybrown: "#bc8f8f",
    olivedrab: "#6b8e23",
    blue: "#0000ff",
    lightblue: "#add8e6",
    ghostwhite: "#f8f8ff",
    honeydew: "#f0fff0",
    cornflowerblue: "#6495ed",
    slateblue: "#6a5acd",
    linen: "#faf0e6",
    darkblue: "#00008b",
    powderblue: "#b0e0e6",
    seagreen: "#2e8b57",
    darkkhaki: "#bdb76b",
    snow: "#fffafa",
    sienna: "#a0522d",
    mediumblue: "#0000cd",
    royalblue: "#4169e1",
    lightcyan: "#e0ffff",
    green: "#008000",
    mediumpurple: "#9370db",
    midnightblue: "#191970",
    cornsilk: "#fff8dc",
    paleturquoise: "#afeeee",
    bisque: "#ffe4c4",
    slategray: "#708090",
    darkcyan: "#008b8b",
    khaki: "#f0e68c",
    wheat: "#f5deb3",
    teal: "#008080",
    darkorchid: "#9932cc",
    deepskyblue: "#00bfff",
    salmon: "#fa8072",
    darkred: "#8b0000",
    steelblue: "#4682b4",
    palevioletred: "#db7093",
    lightslategray: "#778899",
    aliceblue: "#f0f8ff",
    lightslategrey: "#778899",
    lightgreen: "#90ee90",
    orchid: "#da70d6",
    gainsboro: "#dcdcdc",
    mediumseagreen: "#3cb371",
    lightgray: "#d3d3d3",
    mediumturquoise: "#48d1cc",
    lemonchiffon: "#fffacd",
    cadetblue: "#5f9ea0",
    lightyellow: "#ffffe0",
    lavenderblush: "#fff0f5",
    coral: "#ff7f50",
    purple: "#800080",
    aqua: "#00ffff",
    whitesmoke: "#f5f5f5",
    mediumslateblue: "#7b68ee",
    darkorange: "#ff8c00",
    mediumaquamarine: "#66cdaa",
    darksalmon: "#e9967a",
    beige: "#f5f5dc",
    blueviolet: "#8a2be2",
    azure: "#f0ffff",
    lightsteelblue: "#b0c4de",
    oldlace: "#fdf5e6"
  };

  /*
      chroma.js
  
      Copyright (c) 2011-2013, Gregor Aisch
      All rights reserved.
  
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
  
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
  
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation
        and/or other materials provided with the distribution.
  
      * The name Gregor Aisch may not be used to endorse or promote products
        derived from this software without specific prior written permission.
  
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  
      @source: https://github.com/gka/chroma.js
  */


  type = (function() {
    /*
    for browser-safe type checking+
    ported from jQuery's $.type
    */

    var classToType, name, _i, _len, _ref1;

    classToType = {};
    _ref1 = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ");
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      name = _ref1[_i];
      classToType["[object " + name + "]"] = name.toLowerCase();
    }
    return function(obj) {
      var strType;

      strType = Object.prototype.toString.call(obj);
      return classToType[strType] || "object";
    };
  })();

  limit = function(x, min, max) {
    if (min == null) {
      min = 0;
    }
    if (max == null) {
      max = 1;
    }
    if (x < min) {
      x = min;
    }
    if (x > max) {
      x = max;
    }
    return x;
  };

  unpack = function(args) {
    if (args.length >= 3) {
      return args;
    } else {
      return args[0];
    }
  };

  TWOPI = Math.PI * 2;

  PITHIRD = Math.PI / 3;

  cos = Math.cos;

  /*
  interpolates between a set of colors uzing a bezier spline
  */


  bezier = function(colors) {
    var I, I0, I1, c, lab0, lab1, lab2, lab3, _ref1, _ref2, _ref3;

    colors = (function() {
      var _i, _len, _results;

      _results = [];
      for (_i = 0, _len = colors.length; _i < _len; _i++) {
        c = colors[_i];
        _results.push(chroma(c));
      }
      return _results;
    })();
    if (colors.length === 2) {
      _ref1 = (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = colors.length; _i < _len; _i++) {
          c = colors[_i];
          _results.push(c.lab());
        }
        return _results;
      })(), lab0 = _ref1[0], lab1 = _ref1[1];
      I = function(t) {
        var i, lab;

        lab = (function() {
          var _i, _results;

          _results = [];
          for (i = _i = 0; _i <= 2; i = ++_i) {
            _results.push(lab0[i] + t * (lab1[i] - lab0[i]));
          }
          return _results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 3) {
      _ref2 = (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = colors.length; _i < _len; _i++) {
          c = colors[_i];
          _results.push(c.lab());
        }
        return _results;
      })(), lab0 = _ref2[0], lab1 = _ref2[1], lab2 = _ref2[2];
      I = function(t) {
        var i, lab;

        lab = (function() {
          var _i, _results;

          _results = [];
          for (i = _i = 0; _i <= 2; i = ++_i) {
            _results.push((1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
          }
          return _results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 4) {
      _ref3 = (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = colors.length; _i < _len; _i++) {
          c = colors[_i];
          _results.push(c.lab());
        }
        return _results;
      })(), lab0 = _ref3[0], lab1 = _ref3[1], lab2 = _ref3[2], lab3 = _ref3[3];
      I = function(t) {
        var i, lab;

        lab = (function() {
          var _i, _results;

          _results = [];
          for (i = _i = 0; _i <= 2; i = ++_i) {
            _results.push((1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
          }
          return _results;
        })();
        return chroma.lab.apply(chroma, lab);
      };
    } else if (colors.length === 5) {
      I0 = bezier(colors.slice(0, 3));
      I1 = bezier(colors.slice(2, 5));
      I = function(t) {
        if (t < 0.5) {
          return I0(t * 2);
        } else {
          return I1((t - 0.5) * 2);
        }
      };
    }
    return I;
  };

  chroma.interpolate.bezier = bezier;

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1621:
/***/ (function(module, exports, __webpack_require__) {

var Delaunay;

(function() {
  "use strict";

  var EPSILON = 1.0 / 1048576.0;

  function supertriangle(vertices) {
    var xmin = Number.POSITIVE_INFINITY,
        ymin = Number.POSITIVE_INFINITY,
        xmax = Number.NEGATIVE_INFINITY,
        ymax = Number.NEGATIVE_INFINITY,
        i, dx, dy, dmax, xmid, ymid;

    for(i = vertices.length; i--; ) {
      if(vertices[i][0] < xmin) xmin = vertices[i][0];
      if(vertices[i][0] > xmax) xmax = vertices[i][0];
      if(vertices[i][1] < ymin) ymin = vertices[i][1];
      if(vertices[i][1] > ymax) ymax = vertices[i][1];
    }

    dx = xmax - xmin;
    dy = ymax - ymin;
    dmax = Math.max(dx, dy);
    xmid = xmin + dx * 0.5;
    ymid = ymin + dy * 0.5;

    return [
      [xmid - 20 * dmax, ymid -      dmax],
      [xmid            , ymid + 20 * dmax],
      [xmid + 20 * dmax, ymid -      dmax]
    ];
  }

  function circumcircle(vertices, i, j, k) {
    var x1 = vertices[i][0],
        y1 = vertices[i][1],
        x2 = vertices[j][0],
        y2 = vertices[j][1],
        x3 = vertices[k][0],
        y3 = vertices[k][1],
        fabsy1y2 = Math.abs(y1 - y2),
        fabsy2y3 = Math.abs(y2 - y3),
        xc, yc, m1, m2, mx1, mx2, my1, my2, dx, dy;

    /* Check for coincident points */
    if(fabsy1y2 < EPSILON && fabsy2y3 < EPSILON)
      throw new Error("Eek! Coincident points!");

    if(fabsy1y2 < EPSILON) {
      m2  = -((x3 - x2) / (y3 - y2));
      mx2 = (x2 + x3) / 2.0;
      my2 = (y2 + y3) / 2.0;
      xc  = (x2 + x1) / 2.0;
      yc  = m2 * (xc - mx2) + my2;
    }

    else if(fabsy2y3 < EPSILON) {
      m1  = -((x2 - x1) / (y2 - y1));
      mx1 = (x1 + x2) / 2.0;
      my1 = (y1 + y2) / 2.0;
      xc  = (x3 + x2) / 2.0;
      yc  = m1 * (xc - mx1) + my1;
    }

    else {
      m1  = -((x2 - x1) / (y2 - y1));
      m2  = -((x3 - x2) / (y3 - y2));
      mx1 = (x1 + x2) / 2.0;
      mx2 = (x2 + x3) / 2.0;
      my1 = (y1 + y2) / 2.0;
      my2 = (y2 + y3) / 2.0;
      xc  = (m1 * mx1 - m2 * mx2 + my2 - my1) / (m1 - m2);
      yc  = (fabsy1y2 > fabsy2y3) ?
        m1 * (xc - mx1) + my1 :
        m2 * (xc - mx2) + my2;
    }

    dx = x2 - xc;
    dy = y2 - yc;
    return {i: i, j: j, k: k, x: xc, y: yc, r: dx * dx + dy * dy};
  }

  function dedup(edges) {
    var i, j, a, b, m, n;

    for(j = edges.length; j; ) {
      b = edges[--j];
      a = edges[--j];

      for(i = j; i; ) {
        n = edges[--i];
        m = edges[--i];

        if((a === m && b === n) || (a === n && b === m)) {
          edges.splice(j, 2);
          edges.splice(i, 2);
          break;
        }
      }
    }
  }

  Delaunay = {
    triangulate: function(vertices, key) {
      var n = vertices.length,
          i, j, indices, st, open, closed, edges, dx, dy, a, b, c;

      /* Bail if there aren't enough vertices to form any triangles. */
      if(n < 3)
        return [];

      /* Slice out the actual vertices from the passed objects. (Duplicate the
       * array even if we don't, though, since we need to make a supertriangle
       * later on!) */
      vertices = vertices.slice(0);

      if(key)
        for(i = n; i--; )
          vertices[i] = vertices[i][key];

      /* Make an array of indices into the vertex array, sorted by the
       * vertices' x-position. */
      indices = new Array(n);

      for(i = n; i--; )
        indices[i] = i;

      indices.sort(function(i, j) {
        return vertices[j][0] - vertices[i][0];
      });

      /* Next, find the vertices of the supertriangle (which contains all other
       * triangles), and append them onto the end of a (copy of) the vertex
       * array. */
      st = supertriangle(vertices);
      vertices.push(st[0], st[1], st[2]);
      
      /* Initialize the open list (containing the supertriangle and nothing
       * else) and the closed list (which is empty since we havn't processed
       * any triangles yet). */
      open   = [circumcircle(vertices, n + 0, n + 1, n + 2)];
      closed = [];
      edges  = [];

      /* Incrementally add each vertex to the mesh. */
      for(i = indices.length; i--; edges.length = 0) {
        c = indices[i];

        /* For each open triangle, check to see if the current point is
         * inside it's circumcircle. If it is, remove the triangle and add
         * it's edges to an edge list. */
        for(j = open.length; j--; ) {
          /* If this point is to the right of this triangle's circumcircle,
           * then this triangle should never get checked again. Remove it
           * from the open list, add it to the closed list, and skip. */
          dx = vertices[c][0] - open[j].x;
          if(dx > 0.0 && dx * dx > open[j].r) {
            closed.push(open[j]);
            open.splice(j, 1);
            continue;
          }

          /* If we're outside the circumcircle, skip this triangle. */
          dy = vertices[c][1] - open[j].y;
          if(dx * dx + dy * dy - open[j].r > EPSILON)
            continue;

          /* Remove the triangle and add it's edges to the edge list. */
          edges.push(
            open[j].i, open[j].j,
            open[j].j, open[j].k,
            open[j].k, open[j].i
          );
          open.splice(j, 1);
        }

        /* Remove any doubled edges. */
        dedup(edges);

        /* Add a new triangle for each edge. */
        for(j = edges.length; j; ) {
          b = edges[--j];
          a = edges[--j];
          open.push(circumcircle(vertices, a, b, c));
        }
      }

      /* Copy any remaining open triangles to the closed list, and then
       * remove any triangles that share a vertex with the supertriangle,
       * building a list of triplets that represent triangles. */
      for(i = open.length; i--; )
        closed.push(open[i]);
      open.length = 0;

      for(i = closed.length; i--; )
        if(closed[i].i < n && closed[i].j < n && closed[i].k < n)
          open.push(closed[i].i, closed[i].j, closed[i].k);

      /* Yay, we're done! */
      return open;
    },
    contains: function(tri, p) {
      /* Bounding box test first, for quick rejections. */
      if((p[0] < tri[0][0] && p[0] < tri[1][0] && p[0] < tri[2][0]) ||
         (p[0] > tri[0][0] && p[0] > tri[1][0] && p[0] > tri[2][0]) ||
         (p[1] < tri[0][1] && p[1] < tri[1][1] && p[1] < tri[2][1]) ||
         (p[1] > tri[0][1] && p[1] > tri[1][1] && p[1] > tri[2][1]))
        return null;

      var a = tri[1][0] - tri[0][0],
          b = tri[2][0] - tri[0][0],
          c = tri[1][1] - tri[0][1],
          d = tri[2][1] - tri[0][1],
          i = a * d - b * c;

      /* Degenerate tri. */
      if(i === 0.0)
        return null;

      var u = (d * (p[0] - tri[0][0]) - b * (p[1] - tri[0][1])) / i,
          v = (a * (p[1] - tri[0][1]) - c * (p[0] - tri[0][0])) / i;

      /* If we're outside the tri, fail. */
      if(u < 0.0 || v < 0.0 || (u + v) > 1.0)
        return null;

      return [u, v];
    }
  };

  if(true)
    module.exports = Delaunay;
})();


/***/ }),

/***/ 1624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var React = __webpack_require__(0);

var REACT_ELEMENT_TYPE =
  (typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element')) ||
  0xeac7;

var emptyFunction = __webpack_require__(40);
var invariant = __webpack_require__(14);
var warning = __webpack_require__(15);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

var didWarnAboutMaps = false;

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

function getIteratorFn(maybeIterable) {
  var iteratorFn =
    maybeIterable &&
    ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
      maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function(match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function traverseAllChildrenImpl(
  children,
  nameSoFar,
  callback,
  traverseContext
) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (
    children === null ||
    type === 'string' ||
    type === 'number' ||
    // The following is inlined from ReactElement. This means we can optimize
    // some checks. React Fiber also inlines this logic for similar purposes.
    (type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE)
  ) {
    callback(
      traverseContext,
      children,
      // If it's the only child, treat the name as if it was wrapped in an array
      // so that it's consistent if the number of children grows.
      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
    );
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(
        child,
        nextName,
        callback,
        traverseContext
      );
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      if (true) {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning(
            didWarnAboutMaps,
            'Using Maps as children is unsupported and will likely yield ' +
              'unexpected results. Convert it to a sequence/iterable of keyed ' +
              'ReactElements instead.'
          );
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(
          child,
          nextName,
          callback,
          traverseContext
        );
      }
    } else if (type === 'object') {
      var addendum = '';
      if (true) {
        addendum =
          ' If you meant to render a collection of children, use an array ' +
          'instead or wrap the object using createFragment(object) from the ' +
          'React add-ons.';
      }
      var childrenString = '' + children;
      invariant(
        false,
        'Objects are not valid as a React child (found: %s).%s',
        childrenString === '[object Object]'
          ? 'object with keys {' + Object.keys(children).join(', ') + '}'
          : childrenString,
        addendum
      );
    }
  }

  return subtreeCount;
}

function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

function cloneAndReplaceKey(oldElement, newKey) {
  return React.cloneElement(
    oldElement,
    {key: newKey},
    oldElement.props !== undefined ? oldElement.props.children : undefined
  );
}

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

var oneArgumentPooler = function(copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var standardReleaser = function standardReleaser(instance) {
  var Klass = this;
  invariant(
    instance instanceof Klass,
    'Trying to release an instance into a pool of a different type.'
  );
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function() {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result;
  var keyPrefix = bookKeeping.keyPrefix;
  var func = bookKeeping.func;
  var context = bookKeeping.context;

  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(
      mappedChild,
      result,
      childKey,
      emptyFunction.thatReturnsArgument
    );
  } else if (mappedChild != null) {
    if (React.isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(
        mappedChild,
        // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        keyPrefix +
          (mappedChild.key && (!child || child.key !== mappedChild.key)
            ? escapeUserProvidedKey(mappedChild.key) + '/'
            : '') +
          childKey
      );
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(
    array,
    escapedPrefix,
    func,
    context
  );
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

var numericPropertyRegex = /^\d+$/;

var warnedAboutNumeric = false;

function createReactFragment(object) {
  if (typeof object !== 'object' || !object || Array.isArray(object)) {
    warning(
      false,
      'React.addons.createFragment only accepts a single object. Got: %s',
      object
    );
    return object;
  }
  if (React.isValidElement(object)) {
    warning(
      false,
      'React.addons.createFragment does not accept a ReactElement ' +
        'without a wrapper object.'
    );
    return object;
  }

  invariant(
    object.nodeType !== 1,
    'React.addons.createFragment(...): Encountered an invalid child; DOM ' +
      'elements are not valid children of React components.'
  );

  var result = [];

  for (var key in object) {
    if (true) {
      if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
        warning(
          false,
          'React.addons.createFragment(...): Child objects should have ' +
            'non-numeric keys so ordering is preserved.'
        );
        warnedAboutNumeric = true;
      }
    }
    mapIntoWithKeyPrefixInternal(
      object[key],
      result,
      key,
      emptyFunction.thatReturnsArgument
    );
  }

  return result;
}

module.exports = createReactFragment;


/***/ }),

/***/ 1632:
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

var _reactTrianglify = __webpack_require__(1635);

var _reactTrianglify2 = _interopRequireDefault(_reactTrianglify);

var _reactMeasure = __webpack_require__(1154);

var _reactMeasure2 = _interopRequireDefault(_reactMeasure);

__webpack_require__(1783);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Background = function (_React$Component) {
  (0, _inherits3.default)(Background, _React$Component);

  function Background(props) {
    (0, _classCallCheck3.default)(this, Background);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Background.__proto__ || (0, _getPrototypeOf2.default)(Background)).call(this, props));

    _this.animate = _this.animate.bind(_this);

    _this.state = {
      variance: 0.8,
      dimensions: {
        height: 1,
        width: 1
      }
    };

    _this.varianceDeg = 0;
    return _this;
  }

  (0, _createClass3.default)(Background, [{
    key: 'assignState',
    value: function assignState(state) {
      var _this2 = this;

      return new _promise2.default(function (resolve) {

        var newState = (0, _assign2.default)({}, _this2.state, state);

        _this2.setState(newState, function () {
          return resolve();
        });
      });
    }
  }, {
    key: 'animate',
    value: function animate() {
      var _this3 = this;

      this.varianceDeg += 1 * Math.PI / 180;

      var variance = 0.5 + 0.45 * Math.sin(this.varianceDeg);

      this.assignState({ variance: variance }).then(function () {

        requestAnimationFrame(_this3.animate);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      //this.animate()
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state = this.state,
          variance = _state.variance,
          dimensions = _state.dimensions;


      return _react2.default.createElement(
        _reactMeasure2.default,
        {
          bounds: true,
          onResize: function onResize(rect) {

            _this4.assignState({ dimensions: rect.bounds });
          } },
        function (_ref) {
          var measureRef = _ref.measureRef;


          return _react2.default.createElement(
            'div',
            { ref: measureRef, className: 'background' },
            dimensions.with !== 0 && dimensions.height !== 0 && _react2.default.createElement(_reactTrianglify2.default, {
              height: dimensions.height,
              width: dimensions.width,
              variance: variance,
              y_colors: 'match_x',
              x_colors: 'Blues',
              cell_size: 60,
              output: 'svg'
            })
          );
        }
      );
    }
  }]);
  return Background;
}(_react2.default.Component);

exports.default = Background;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Background.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1633:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Background = __webpack_require__(1632);

var _Background2 = _interopRequireDefault(_Background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Background2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1634:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractProps = undefined;

var _defineProperty2 = __webpack_require__(218);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(5);

var _extends4 = _interopRequireDefault(_extends3);

var _keys = __webpack_require__(375);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allOptions = function allOptions(PropTypes) {
  return {
    height: {
      defaultValue: 300,
      type: PropTypes.number
    },
    width: {
      defaultValue: 300,
      type: PropTypes.number
    },
    cell_size: {
      defaultValue: 60,
      type: PropTypes.number
    },
    variance: {
      defaultValue: 0.75,
      type: PropTypes.number
    },
    seed: {
      defaultValue: null,
      type: PropTypes.string
    },
    x_colors: {
      defaultValue: 'random',
      type: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    },
    y_colors: {
      defaultValue: 'match_x',
      type: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    },
    color_space: {
      defaultValue: 'lab',
      type: PropTypes.oneOf(['rgb', 'hsv', 'hsl', 'hsi', 'lab', 'hcl'])
    },
    color_function: {
      defaultValue: null,
      type: PropTypes.func
    },
    stroke_width: {
      defaultValue: 1.51,
      type: PropTypes.number
    },
    points: {
      defaultValue: undefined,
      type: PropTypes.array
    },
    output: {
      defaultValue: 'canvas',
      type: PropTypes.oneOf(['svg', 'canvas', 'png'])
    }
  };
};

var extractProps = exports.extractProps = function extractProps(PropTypes) {
  var options = allOptions(PropTypes);

  return function (optionName) {
    return (0, _keys2.default)(options).reduce(function (acc, option) {
      return (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, option, options[option][optionName]));
    }, {});
  };
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "props.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1635:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(6);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _trianglify = __webpack_require__(1898);

var _trianglify2 = _interopRequireDefault(_trianglify);

var _props2 = __webpack_require__(1634);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Trianglify = function (_Component) {
  (0, _inherits3.default)(Trianglify, _Component);

  function Trianglify() {
    (0, _classCallCheck3.default)(this, Trianglify);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Trianglify.__proto__ || (0, _getPrototypeOf2.default)(Trianglify)).call(this));

    _this.state = { pattern: null };
    return _this;
  }

  (0, _createClass3.default)(Trianglify, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.generatePattern(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.generatePattern(nextProps);
    }
  }, {
    key: 'generatePng',
    value: function generatePng(outputMethod) {
      this.setState({ pattern: outputMethod() });
    }
  }, {
    key: 'generateSvg',
    value: function generateSvg(outputMethod) {
      this.setState({ pattern: outputMethod().innerHTML });
    }
  }, {
    key: 'generateCanvas',
    value: function generateCanvas(outputMethod) {
      outputMethod(this.trianglify);
    }
  }, {
    key: 'outputTypes',
    value: function outputTypes(output) {
      return {
        canvas: {
          method: 'generateCanvas',
          component: function component(_ref) {
            var canvasRef = _ref.canvasRef,
                height = _ref.height,
                width = _ref.width;
            return _react2.default.createElement('canvas', { ref: canvasRef, height: height, width: width });
          }
        },

        svg: {
          method: 'generateSvg',
          component: function component(_ref2) {
            var pattern = _ref2.pattern,
                height = _ref2.height,
                width = _ref2.width;
            return _react2.default.createElement('svg', { dangerouslySetInnerHTML: { __html: pattern }, height: height, width: width });
          }
        },

        png: {
          method: 'generatePng',
          component: function component(_ref3) {
            var pattern = _ref3.pattern,
                height = _ref3.height,
                width = _ref3.width;
            return _react2.default.createElement('img', { src: pattern, height: height, width: width });
          }
        }
      }[output];
    }
  }, {
    key: 'generatePattern',
    value: function generatePattern(_ref4) {
      var output = _ref4.output,
          props = (0, _objectWithoutProperties3.default)(_ref4, ['output']);

      var pattern = (0, _trianglify2.default)(props);
      var outputMethod = pattern[output];

      this[this.outputTypes(output).method](outputMethod);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          output = _props.output,
          width = _props.width,
          height = _props.height;


      return this.outputTypes(output).component({
        height: height,
        width: width,
        pattern: this.state.pattern,
        canvasRef: function canvasRef(node) {
          return _this2.trianglify = node;
        }
      });
    }
  }]);
  return Trianglify;
}(_react.Component);

var getProps = (0, _props2.extractProps)(_propTypes2.default);

Trianglify.defaultProps = getProps('defaultValue');
Trianglify.propTypes = getProps('type');

exports.default = Trianglify;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "react-trianglify.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1647:
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

__webpack_require__(1789);

var _Image = __webpack_require__(1153);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageGrid = function (_React$Component) {
  (0, _inherits3.default)(ImageGrid, _React$Component);

  function ImageGrid() {
    (0, _classCallCheck3.default)(this, ImageGrid);
    return (0, _possibleConstructorReturn3.default)(this, (ImageGrid.__proto__ || (0, _getPrototypeOf2.default)(ImageGrid)).apply(this, arguments));
  }

  (0, _createClass3.default)(ImageGrid, [{
    key: 'render',


    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////
    value: function render() {

      var items = this.props.images.map(function (img) {

        return _react2.default.createElement(
          'a',
          { key: img.link, href: img.link, target: '_blank' },
          _react2.default.createElement(
            'button',
            { title: img.title },
            _react2.default.createElement(_Image2.default, { src: img.src })
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: "image-grid " + this.props.size },
        items
      );
    }
  }]);
  return ImageGrid;
}(_react2.default.Component);

exports.default = ImageGrid;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ImageGrid.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1648:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageGrid = __webpack_require__(1647);

var _ImageGrid2 = _interopRequireDefault(_ImageGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ImageGrid2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1651:
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

var _SvcManager = __webpack_require__(67);

var _SvcManager2 = _interopRequireDefault(_SvcManager);

var _reactDropzone = __webpack_require__(1303);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(1791);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModelUploader = function (_React$Component) {
  (0, _inherits3.default)(ModelUploader, _React$Component);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function ModelUploader(props) {
    (0, _classCallCheck3.default)(this, ModelUploader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ModelUploader.__proto__ || (0, _getPrototypeOf2.default)(ModelUploader)).call(this, props));

    _this.dialogSvc = _SvcManager2.default.getService('DialogSvc');

    _this.modelSvc = _SvcManager2.default.getService('ModelSvc');

    _this.onDrop = _this.onDrop.bind(_this);
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(ModelUploader, [{
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
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'isComposite',
    value: function isComposite(file) {
      var _this2 = this;

      return new _promise2.default(function (resolve) {

        var filename = file.name.toLowerCase();

        if (filename.endsWith('.zip')) {

          var onClose = function onClose(result) {

            resolve(result === 'OK');

            _this2.dialogSvc.off('dialog.close', onClose);
          };

          _this2.dialogSvc.on('dialog.close', onClose);

          _this2.dialogSvc.setState({
            className: 'composite-dlg',
            title: 'Composite Model',
            onRequestClose: function onRequestClose() {},
            captionCancel: 'NO',
            captionOK: 'Yes',
            content: _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                null,
                'Are you uploading a composite model?'
              )
            ),
            open: true
          });
        } else {

          resolve(false);
        }
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onDrop',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(files) {
        var _this3 = this;

        var validUpload, uploadId, file, options, composite;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.onDropFiles(files);

              case 2:
                validUpload = _context.sent;

                if (!validUpload) {
                  _context.next = 12;
                  break;
                }

                uploadId = this.guid();
                file = files[0];
                options = {
                  progress: function progress(percent) {

                    if (_this3.props.onProgress) {

                      _this3.props.onProgress({
                        uploadId: uploadId,
                        percent: percent,
                        file: file
                      });
                    }
                  },
                  data: {
                    socketId: this.props.socketId,
                    uploadId: uploadId
                  }
                };
                _context.next = 9;
                return this.isComposite(file);

              case 9:
                composite = _context.sent;


                if (this.props.onInitUpload) {

                  this.props.onInitUpload({
                    uploadId: uploadId,
                    file: file
                  });
                }

                this.modelSvc.upload(this.props.database, file, options);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onDrop(_x2) {
        return _ref.apply(this, arguments);
      }

      return onDrop;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderContent',
    value: function renderContent() {
      var user = this.props.user;


      if (user) {

        if (user.allowedUploads === undefined || user.allowedUploads > 0) {

          return _react2.default.createElement(
            _reactDropzone2.default,
            { className: 'content',
              onDrop: this.onDrop,
              multiple: false },
            _react2.default.createElement(
              'p',
              null,
              'Drop a file here or click to browse ...'
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'p',
              null,
              'Your model will be available for',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'u',
                null,
                '30 days'
              )
            )
          );
        }

        return _react2.default.createElement(
          'div',
          { className: 'limit' },
          _react2.default.createElement(
            'p',
            null,
            'You have reached your maximum active models quota :('
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'p',
            null,
            'Wait for your current models to expire before being able to upload again ...'
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'login' },
        _react2.default.createElement(
          'p',
          null,
          'In order to upload models ...'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'p',
          null,
          'You must be \xA0',
          _react2.default.createElement(
            'u',
            { onClick: this.props.onLogIn },
            'logged in'
          )
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

      return _react2.default.createElement(
        'div',
        { className: 'model-uploader' },
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement('span', { className: 'fa fa-cloud-upload' }),
          _react2.default.createElement(
            'label',
            null,
            'Upload your Model'
          )
        ),
        this.renderContent()
      );
    }
  }]);
  return ModelUploader;
}(_react2.default.Component);

exports.default = ModelUploader;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ModelUploader.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ModelUploader = __webpack_require__(1651);

var _ModelUploader2 = _interopRequireDefault(_ModelUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ModelUploader2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1655:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = __webpack_require__(373);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _desc, _value, _class;

var _autobindDecorator = __webpack_require__(374);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _BaseComponent2 = __webpack_require__(1123);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _SvcManager = __webpack_require__(67);

var _SvcManager2 = _interopRequireDefault(_SvcManager);

var _ImageGrid = __webpack_require__(1648);

var _ImageGrid2 = _interopRequireDefault(_ImageGrid);

__webpack_require__(1792);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

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

var RecentModels = (_class = function (_BaseComponent) {
  (0, _inherits3.default)(RecentModels, _BaseComponent);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function RecentModels() {
    (0, _classCallCheck3.default)(this, RecentModels);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RecentModels.__proto__ || (0, _getPrototypeOf2.default)(RecentModels)).call(this));

    _this.socketSvc = _SvcManager2.default.getService('SocketSvc');

    _this.modelSvc = _SvcManager2.default.getService('ModelSvc');

    _this.state = {
      images: [],
      dimensions: {
        height: 0,
        width: 0
      }
    };
    return _this;
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////


  (0, _createClass3.default)(RecentModels, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.socketSvc.on('model.deleted', this.refresh);

      this.socketSvc.on('model.added', this.refresh);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.refresh();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      this.socketSvc.off('model.deleted', this.refresh);

      this.socketSvc.off('model.added', this.refresh);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'refresh',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var db, models, images;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                db = this.props.database;
                _context.next = 3;
                return this.modelSvc.getRecentModels(db);

              case 3:
                models = _context.sent;
                images = models.map(function (model) {

                  var thumbnailUrl = _this2.modelSvc.getThumbnailUrl(db, model._id, 200);

                  var href = '/viewer?id=' + model._id;

                  return {
                    title: model.name,
                    src: thumbnailUrl,
                    link: href
                  };
                });


                this.assignState({
                  images: images
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refresh() {
        return _ref.apply(this, arguments);
      }

      return refresh;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderContent',
    value: function renderContent() {

      return _react2.default.createElement(_ImageGrid2.default, { images: this.state.images });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'recent-models' },
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement('span', { className: 'fa fa-info-circle' }),
          _react2.default.createElement(
            'label',
            null,
            'Recent Models'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          this.renderContent()
        )
      );
    }
  }]);
  return RecentModels;
}(_BaseComponent3.default), (_applyDecoratedDescriptor(_class.prototype, 'refresh', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'refresh'), _class.prototype)), _class);
exports.default = RecentModels;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "RecentModels.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1656:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RecentModels = __webpack_require__(1655);

var _RecentModels2 = _interopRequireDefault(_RecentModels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RecentModels2.default;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1670:
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

var _reactContenteditable = __webpack_require__(1040);

var _reactContenteditable2 = _interopRequireDefault(_reactContenteditable);

var _autobindDecorator = __webpack_require__(374);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _ModelUploader = __webpack_require__(1652);

var _ModelUploader2 = _interopRequireDefault(_ModelUploader);

var _BaseComponent2 = __webpack_require__(1123);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _SvcManager = __webpack_require__(67);

var _SvcManager2 = _interopRequireDefault(_SvcManager);

var _RecentModels = __webpack_require__(1656);

var _RecentModels2 = _interopRequireDefault(_RecentModels);

var _reactPaginate = __webpack_require__(1759);

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _Background = __webpack_require__(1633);

var _Background2 = _interopRequireDefault(_Background);

var _reactRouter = __webpack_require__(135);

var _reactSpinkit = __webpack_require__(1318);

var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);

var _dompurify = __webpack_require__(1032);

var _dompurify2 = _interopRequireDefault(_dompurify);

__webpack_require__(1798);

var _Image = __webpack_require__(1153);

var _Image2 = _interopRequireDefault(_Image);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

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

var GalleryView = (_class = (_temp = _class2 = function (_BaseComponent) {
  (0, _inherits3.default)(GalleryView, _BaseComponent);

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  function GalleryView(props) {
    (0, _classCallCheck3.default)(this, GalleryView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GalleryView.__proto__ || (0, _getPrototypeOf2.default)(GalleryView)).call(this, props));

    _this.extractorSvc = _SvcManager2.default.getService('ExtractorSvc');

    _this.storageSvc = _SvcManager2.default.getService('StorageSvc');

    _this.socketSvc = _SvcManager2.default.getService('SocketSvc');

    _this.notifySvc = _SvcManager2.default.getService('NotifySvc');

    _this.dialogSvc = _SvcManager2.default.getService('DialogSvc');

    _this.modelSvc = _SvcManager2.default.getService('ModelSvc');

    _this.forgeSvc = _SvcManager2.default.getService('ForgeSvc');

    _this.state = {
      pageCount: 1,
      search: '',
      offset: 0,
      items: [],
      page: 0
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


  (0, _createClass3.default)(GalleryView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.settings = this.storageSvc.load('gallery');

      this.props.setNavbarState({
        links: {
          settings: false
        }
      });

      this.socketSvc.on('extract.ready', this.onExtractReady);

      this.socketSvc.on('model.deleted', this.refresh);

      this.socketSvc.on('model.added', this.refresh);

      this.refresh();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      this.socketSvc.off('extract.ready', this.onExtractReady);

      this.socketSvc.off('model.deleted', this.refresh);

      this.socketSvc.off('model.added', this.refresh);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'refresh',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _state, offset, search, limit, opts, countRes, items, pageCount;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _state = this.state, offset = _state.offset, search = _state.search;
                limit = this.props.perPage;
                opts = {
                  offset: offset,
                  search: search,
                  limit: limit
                };
                _context.next = 5;
                return this.modelSvc.getCount('gallery', opts);

              case 5:
                countRes = _context.sent;
                _context.next = 8;
                return this.modelSvc.getModels('gallery', opts);

              case 8:
                items = _context.sent;
                pageCount = Math.ceil(countRes.count / limit);


                this.assignState({
                  pageCount: pageCount,
                  items: items
                });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refresh() {
        return _ref.apply(this, arguments);
      }

      return refresh;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onLogIn',
    value: function onLogIn() {

      this.forgeSvc.login();
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'validateAgreement',
    value: function validateAgreement() {
      var _this2 = this;

      return new _promise2.default(function (resolve) {

        var onClose = function onClose(result) {

          _this2.dialogSvc.off('dialog.close', onClose);

          if (result === 'OK') {

            _this2.settings.agreement = true;

            _this2.storageSvc.save('gallery', _this2.settings);

            return resolve(true);
          }

          resolve(false);
        };

        _this2.dialogSvc.on('dialog.close', onClose);

        _this2.dialogSvc.setState({
          className: 'agreement-dlg',
          title: 'Gallery Terms & Conditions',
          captionOK: 'I Agree',
          content: _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              '\xA0\xA0 By uploading your model to Forge RCDB Gallery, you agree to make the viewable content available publicly. The seed file however remains your property.'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\xA0\xA0 The viewable content will remain on the Gallery 30 days by default. The author reserves the right to maintain permanently models that he finds interesting.'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\xA0\xA0 If you are not an Autodesk employee, you have a limit of 5 active models at a time. Once reached that limit you will not be able to upload more models until one of them expire.'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\xA0\xA0 Reminder: That website is purely a demo and the author makes no guarrantee that uploaded models will remain available even during the 30 days default period.'
            )
          ),
          open: true
        });
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onDropFiles',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(files) {
        var res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.settings.agreement) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', true);

              case 2:
                _context2.next = 4;
                return this.validateAgreement();

              case 4:
                res = _context2.sent;
                return _context2.abrupt('return', res);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onDropFiles(_x) {
        return _ref2.apply(this, arguments);
      }

      return onDropFiles;
    }()

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onInitUpload',
    value: function onInitUpload(data) {
      var _this3 = this;

      var notification = this.notifySvc.add({
        title: 'Uploading ' + data.file.name,
        message: 'progress: 0%',
        dismissible: false,
        status: 'loading',
        id: data.uploadId,
        dismissAfter: 0,
        position: 'tl'
      });

      notification.buttons = [{
        name: 'Hide',
        onClick: function onClick() {
          notification.dismissAfter = 1;
          _this3.notifySvc.update(notification);
        }
      }];

      this.notifySvc.update(notification);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onUploadProgress',
    value: function onUploadProgress(data) {

      var notification = this.notifySvc.getNotification(data.uploadId);

      if (!notification.forgeUpload) {

        var progress = data.percent * 0.5;

        notification.message = 'progress: ' + progress.toFixed(2) + '%';

        this.notifySvc.update(notification);
      }
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
      var _this4 = this;

      var search = e.target.value.toLowerCase();

      var offset = 0;

      var page = 0;

      this.assignState({ offset: offset, page: page, search: search }).then(function () {

        _this4.refresh();
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'getExpiry',
    value: function getExpiry(item) {

      if (item.lifetime) {

        var age = Date.now() - new Date(item.timestamp);

        var expiry = item.lifetime - age / 1000;

        if (expiry > 86400) {

          return 'Expires in: ' + Math.round(expiry / 86400) + ' days';
        }

        if (expiry > 3600) {

          return 'Expires in: ' + Math.round(expiry / 3600) + ' hours';
        }

        if (expiry > 60) {

          return 'Expires in: ' + Math.round(expiry / 60) + ' minutes';
        }
      }

      return false;
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'showSpinner',
    value: function showSpinner(itemId, show) {

      var items = this.state.items.map(function (item) {
        if (item._id === itemId) {
          return (0, _assign2.default)({}, item, {
            spinner: show
          });
        }
        return item;
      });

      this.assignState({
        items: items
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'extract',
    value: function extract(item) {
      var _this5 = this;

      if (!item.spinner) {

        var itemId = item._id;

        this.showSpinner(itemId, true);

        this.extractorSvc.getStatus(itemId).then(function () {

          _this5.extractorSvc.download(itemId);

          setTimeout(function () {
            return _this5.showSpinner(itemId, false);
          }, 2000);
        }, function (error) {

          if (error.status === 404) {

            _this5.extractorSvc.extract(itemId, {
              socketId: _this5.socketSvc.socketId
            });
          }
        });
      }
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onExtractReady',
    value: function onExtractReady(msg) {

      this.showSpinner(msg.modelId, false);
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'onPageChanged',
    value: function onPageChanged(data) {
      var _this6 = this;

      var page = data.selected;

      var offset = Math.ceil(page * this.props.perPage);

      this.assignState({ offset: offset, page: page }).then(function () {

        _this6.refresh();
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var _this7 = this;

      var thumbnailUrl = this.modelSvc.getThumbnailUrl('gallery', item._id, 200);

      var href = '/viewer?id=' + item._id;

      var expiry = this.getExpiry(item);

      return _react2.default.createElement(
        'div',
        { key: item._id, className: 'item' },
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'content', to: href },
          _react2.default.createElement(
            'div',
            { className: 'image-container' },
            _react2.default.createElement(_Image2.default, { src: thumbnailUrl })
          ),
          _react2.default.createElement(
            'h3',
            { className: 'title' },
            _dompurify2.default.sanitize(item.name)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer' },
          _react2.default.createElement(
            'div',
            { className: 'svf',
              onClick: function onClick() {
                return _this7.extract(item);
              } },
            _react2.default.createElement('span', { className: 'fa fa-cloud-download' }),
            _react2.default.createElement(
              'label',
              null,
              'Download SVF'
            ),
            item.spinner && _react2.default.createElement(_reactSpinkit2.default, { spinnerName: 'cube-grid' })
          ),
          expiry && _react2.default.createElement(
            'div',
            { className: 'expiry' },
            _react2.default.createElement('span', { className: 'fa fa-clock-o' }),
            _react2.default.createElement(
              'label',
              null,
              expiry
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
    key: 'renderItems',
    value: function renderItems() {
      var _this8 = this;

      return this.state.items.map(function (item) {

        return _this8.renderItem(item);
      });
    }

    /////////////////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////////////////

  }, {
    key: 'render',
    value: function render() {
      var _this9 = this;

      return _react2.default.createElement(
        'div',
        { className: 'gallery-view' },
        _react2.default.createElement(_Background2.default, null),
        _react2.default.createElement(_reactContenteditable2.default, {
          onChange: function onChange(e) {
            return _this9.onSearchChanged(e);
          },
          onKeyDown: function onKeyDown(e) {
            return _this9.onKeyDown(e);
          },
          'data-placeholder': 'Search ...',
          html: this.state.search,
          className: 'search' }),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'paginator' },
            _react2.default.createElement(_reactPaginate2.default, {
              subContainerClassName: "pages pagination",
              onPageChange: this.onPageChanged,
              containerClassName: "pagination",
              pageCount: this.state.pageCount,
              initialPage: this.state.page,
              forcePage: this.state.page,
              breakClassName: "break-me",
              previousLabel: "previous",
              activeClassName: "active",
              marginPagesDisplayed: 1,
              breakLabel: _react2.default.createElement(
                'a',
                null,
                '...'
              ),
              pageRangeDisplayed: 3,
              nextLabel: "next"
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'scroller' },
            _react2.default.createElement(
              'div',
              { className: 'primary' },
              _react2.default.createElement(
                'div',
                { className: 'items' },
                this.renderItems()
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'secondary' },
              _react2.default.createElement(
                'div',
                { className: 'uploader' },
                _react2.default.createElement(_ModelUploader2.default, {
                  onProgress: this.onUploadProgress,
                  socketId: this.socketSvc.socketId,
                  onInitUpload: this.onInitUpload,
                  user: this.props.appState.user,
                  onDropFiles: this.onDropFiles,
                  onLogIn: this.onLogIn,
                  database: 'gallery'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'recent' },
                _react2.default.createElement(_RecentModels2.default, { database: 'gallery' })
              ),
              _react2.default.createElement('div', null)
            )
          )
        )
      );
    }
  }]);
  return GalleryView;
}(_BaseComponent3.default), _class2.defaultProps = {
  perPage: 10 }, _temp), (_applyDecoratedDescriptor(_class.prototype, 'refresh', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'refresh'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onLogIn', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onLogIn'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onDropFiles', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onDropFiles'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onInitUpload', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onInitUpload'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onUploadProgress', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onUploadProgress'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'extract', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'extract'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onExtractReady', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onExtractReady'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onPageChanged', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'onPageChanged'), _class.prototype)), _class);
exports.default = GalleryView;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "GalleryView.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreakView = function BreakView(props) {
  var label = props.breakLabel;
  var className = props.breakClassName || 'break';

  return _react2.default.createElement(
    'li',
    { className: className },
    label
  );
};

exports.default = BreakView;
//# sourceMappingURL=BreakView.js.map

/***/ }),

/***/ 1757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageView = function PageView(props) {
  var cssClassName = props.pageClassName;
  var linkClassName = props.pageLinkClassName;
  var onClick = props.onClick;
  var href = props.href;
  var ariaLabel = 'Page ' + props.page + (props.extraAriaContext ? ' ' + props.extraAriaContext : '');
  var ariaCurrent = null;

  if (props.selected) {
    ariaCurrent = 'page';
    ariaLabel = 'Page ' + props.page + ' is your current page';
    if (typeof cssClassName !== 'undefined') {
      cssClassName = cssClassName + ' ' + props.activeClassName;
    } else {
      cssClassName = props.activeClassName;
    }
  }

  return _react2.default.createElement(
    'li',
    { className: cssClassName },
    _react2.default.createElement(
      'a',
      { onClick: onClick,
        className: linkClassName,
        href: href,
        tabIndex: '0',
        'aria-label': ariaLabel,
        'aria-current': ariaCurrent,
        onKeyPress: onClick },
      props.page
    )
  );
};

exports.default = PageView;
//# sourceMappingURL=PageView.js.map

/***/ }),

/***/ 1758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCreateFragment = __webpack_require__(1624);

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

var _PageView = __webpack_require__(1757);

var _PageView2 = _interopRequireDefault(_PageView);

var _BreakView = __webpack_require__(1756);

var _BreakView2 = _interopRequireDefault(_BreakView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationBoxView = function (_Component) {
  _inherits(PaginationBoxView, _Component);

  function PaginationBoxView(props) {
    _classCallCheck(this, PaginationBoxView);

    var _this = _possibleConstructorReturn(this, (PaginationBoxView.__proto__ || Object.getPrototypeOf(PaginationBoxView)).call(this, props));

    _this.handlePreviousPage = function (evt) {
      evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
      if (_this.state.selected > 0) {
        _this.handlePageSelected(_this.state.selected - 1, evt);
      }
    };

    _this.handleNextPage = function (evt) {
      evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;
      if (_this.state.selected < _this.props.pageCount - 1) {
        _this.handlePageSelected(_this.state.selected + 1, evt);
      }
    };

    _this.handlePageSelected = function (selected, evt) {
      evt.preventDefault ? evt.preventDefault() : evt.returnValue = false;

      if (_this.state.selected === selected) return;

      _this.setState({ selected: selected });

      // Call the callback with the new selected item:
      _this.callCallback(selected);
    };

    _this.callCallback = function (selectedItem) {
      if (typeof _this.props.onPageChange !== "undefined" && typeof _this.props.onPageChange === "function") {
        _this.props.onPageChange({ selected: selectedItem });
      }
    };

    _this.pagination = function () {
      var items = {};

      if (_this.props.pageCount <= _this.props.pageRangeDisplayed) {

        for (var index = 0; index < _this.props.pageCount; index++) {
          items['key' + index] = _this.getPageElement(index);
        }
      } else {

        var leftSide = _this.props.pageRangeDisplayed / 2;
        var rightSide = _this.props.pageRangeDisplayed - leftSide;

        if (_this.state.selected > _this.props.pageCount - _this.props.pageRangeDisplayed / 2) {
          rightSide = _this.props.pageCount - _this.state.selected;
          leftSide = _this.props.pageRangeDisplayed - rightSide;
        } else if (_this.state.selected < _this.props.pageRangeDisplayed / 2) {
          leftSide = _this.state.selected;
          rightSide = _this.props.pageRangeDisplayed - leftSide;
        }

        var _index = void 0;
        var page = void 0;
        var breakView = void 0;
        var createPageView = function createPageView(index) {
          return _this.getPageElement(index);
        };

        for (_index = 0; _index < _this.props.pageCount; _index++) {

          page = _index + 1;

          if (page <= _this.props.marginPagesDisplayed) {
            items['key' + _index] = createPageView(_index);
            continue;
          }

          if (page > _this.props.pageCount - _this.props.marginPagesDisplayed) {
            items['key' + _index] = createPageView(_index);
            continue;
          }

          if (_index >= _this.state.selected - leftSide && _index <= _this.state.selected + rightSide) {
            items['key' + _index] = createPageView(_index);
            continue;
          }

          var keys = Object.keys(items);
          var breakLabelKey = keys[keys.length - 1];
          var breakLabelValue = items[breakLabelKey];

          if (_this.props.breakLabel && breakLabelValue !== breakView) {
            breakView = _react2.default.createElement(_BreakView2.default, {
              breakLabel: _this.props.breakLabel,
              breakClassName: _this.props.breakClassName
            });

            items['key' + _index] = breakView;
          }
        }
      }

      return items;
    };

    _this.state = {
      selected: props.initialPage ? props.initialPage : props.forcePage ? props.forcePage : 0
    };
    return _this;
  }

  _createClass(PaginationBoxView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Call the callback with the initialPage item:
      if (typeof this.props.initialPage !== 'undefined' && !this.props.disableInitialCallback) {
        this.callCallback(this.props.initialPage);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps.forcePage !== 'undefined' && this.props.forcePage !== nextProps.forcePage) {
        this.setState({ selected: nextProps.forcePage });
      }
    }
  }, {
    key: 'hrefBuilder',
    value: function hrefBuilder(pageIndex) {
      if (this.props.hrefBuilder && pageIndex !== this.state.selected && pageIndex >= 0 && pageIndex < this.props.pageCount) {
        return this.props.hrefBuilder(pageIndex + 1);
      }
    }
  }, {
    key: 'getPageElement',
    value: function getPageElement(index) {
      return _react2.default.createElement(_PageView2.default, {
        onClick: this.handlePageSelected.bind(null, index),
        selected: this.state.selected === index,
        pageClassName: this.props.pageClassName,
        pageLinkClassName: this.props.pageLinkClassName,
        activeClassName: this.props.activeClassName,
        extraAriaContext: this.props.extraAriaContext,
        href: this.hrefBuilder(index),
        page: index + 1 });
    }
  }, {
    key: 'render',
    value: function render() {
      var disabled = this.props.disabledClassName;

      var previousClasses = (0, _classnames2.default)(this.props.previousClassName, _defineProperty({}, disabled, this.state.selected === 0));

      var nextClasses = (0, _classnames2.default)(this.props.nextClassName, _defineProperty({}, disabled, this.state.selected === this.props.pageCount - 1));

      return _react2.default.createElement(
        'ul',
        { className: this.props.containerClassName },
        _react2.default.createElement(
          'li',
          { className: previousClasses },
          _react2.default.createElement(
            'a',
            { onClick: this.handlePreviousPage,
              className: this.props.previousLinkClassName,
              href: this.hrefBuilder(this.state.selected - 1),
              tabIndex: '0',
              onKeyPress: this.handlePreviousPage },
            this.props.previousLabel
          )
        ),
        (0, _reactAddonsCreateFragment2.default)(this.pagination()),
        _react2.default.createElement(
          'li',
          { className: nextClasses },
          _react2.default.createElement(
            'a',
            { onClick: this.handleNextPage,
              className: this.props.nextLinkClassName,
              href: this.hrefBuilder(this.state.selected + 1),
              tabIndex: '0',
              onKeyPress: this.handleNextPage },
            this.props.nextLabel
          )
        )
      );
    }
  }]);

  return PaginationBoxView;
}(_react.Component);

PaginationBoxView.propTypes = {
  pageCount: _propTypes2.default.number.isRequired,
  pageRangeDisplayed: _propTypes2.default.number.isRequired,
  marginPagesDisplayed: _propTypes2.default.number.isRequired,
  previousLabel: _propTypes2.default.node,
  nextLabel: _propTypes2.default.node,
  breakLabel: _propTypes2.default.node,
  hrefBuilder: _propTypes2.default.func,
  onPageChange: _propTypes2.default.func,
  initialPage: _propTypes2.default.number,
  forcePage: _propTypes2.default.number,
  disableInitialCallback: _propTypes2.default.bool,
  containerClassName: _propTypes2.default.string,
  pageClassName: _propTypes2.default.string,
  pageLinkClassName: _propTypes2.default.string,
  activeClassName: _propTypes2.default.string,
  previousClassName: _propTypes2.default.string,
  nextClassName: _propTypes2.default.string,
  previousLinkClassName: _propTypes2.default.string,
  nextLinkClassName: _propTypes2.default.string,
  disabledClassName: _propTypes2.default.string,
  breakClassName: _propTypes2.default.string
};
PaginationBoxView.defaultProps = {
  pageCount: 10,
  pageRangeDisplayed: 2,
  marginPagesDisplayed: 3,
  activeClassName: "selected",
  previousClassName: "previous",
  nextClassName: "next",
  previousLabel: "Previous",
  nextLabel: "Next",
  breakLabel: "...",
  disabledClassName: "disabled",
  disableInitialCallback: false
};
exports.default = PaginationBoxView;
;
//# sourceMappingURL=PaginationBoxView.js.map

/***/ }),

/***/ 1759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PaginationBoxView = __webpack_require__(1758);

var _PaginationBoxView2 = _interopRequireDefault(_PaginationBoxView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _PaginationBoxView2.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1768:
/***/ (function(module, exports, __webpack_require__) {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(1769);

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(1771);

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(1774);

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(1773);

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(1772);

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(1770);

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(1775);

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),

/***/ 1769:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = data.toString();
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(1057) && __webpack_require__(1094)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(1057)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1770:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(1057) && __webpack_require__(1094)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(1057)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1771:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(1057) && __webpack_require__(1094)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(1057)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1772:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(1057) && __webpack_require__(1094)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(1057)   // present with an AMD loader
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1773:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(1057) && __webpack_require__(1094)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(1057)   // present with an AMD loader
);


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1774:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(1057) && __webpack_require__(1094)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(1057)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 1775:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//
var global = this,
    width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}
math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ((typeof module) == 'object' && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(1907);
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return seedrandom; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

// End anonymous scope, and pass initial values.
})(
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),

/***/ 1783:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1362);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1362, function() {
			var newContent = __webpack_require__(1362);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1789:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1368);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1368, function() {
			var newContent = __webpack_require__(1368);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1791:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1370);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1370, function() {
			var newContent = __webpack_require__(1370);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1792:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1372);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1372, function() {
			var newContent = __webpack_require__(1372);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1798:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1378);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1378, function() {
			var newContent = __webpack_require__(1378);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1895:
/***/ (function(module, exports) {

/*
 * colorbrewer.js
 *
 * Colorbrewer colors, by Cindy Brewer
 */

module.exports = {
  YlGn: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],
  YlGnBu: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],
  GnBu: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],
  BuGn: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],
  PuBuGn: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],
  PuBu: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],
  BuPu: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],
  RdPu: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],
  PuRd: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],
  OrRd: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],
  YlOrRd: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],
  YlOrBr: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],
  Purples: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],
  Blues: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],
  Greens: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],
  Oranges: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],
  Reds: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],
  Greys: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],
  PuOr: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],
  BrBG: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],
  PRGn: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],
  PiYG: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],
  RdBu: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],
  RdGy: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],
  RdYlBu: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],
  Spectral: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],
  RdYlGn: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]
};

/***/ }),

/***/ 1896:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*
 * Pattern.js
 * Contains rendering implementations for trianglify-generated geometry
 */

// conditionally load jsdom if we don't have a browser environment available.
var doc = (typeof document !== "undefined") ? document : __webpack_require__(1909).jsdom('<html/>');

function Pattern(polys, opts) {

  // SVG rendering method
  function render_svg(svgOpts) {
    var svg = doc.createElementNS("http://www.w3.org/2000/svg", 'svg');
    svg.setAttribute('width', opts.width);
    svg.setAttribute('height', opts.height);
    if (svgOpts && svgOpts.includeNamespace) {
      svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    }

    polys.forEach(function(poly) {
      var path = doc.createElementNS("http://www.w3.org/2000/svg", 'path');
      path.setAttribute("d", "M" + poly[1].join("L") + "Z");
      path.setAttribute("fill", poly[0]);
      path.setAttribute("stroke", poly[0]);
      path.setAttribute("stroke-width", opts.stroke_width);
      svg.appendChild(path);
    });

    return svg;
  }

  // Canvas rendering method
  function render_canvas(canvas) {
    // check for canvas support
    var ctx;
    if (typeof process !== "undefined") {
      try {
        __webpack_require__(1908);
      } catch (e) {
        throw Error('The optional node-canvas dependency is needed for Trianglify to render using canvas in node.');
      }
    }

    if (!canvas) {
      canvas = doc.createElement('canvas');
    }

    canvas.setAttribute('width', opts.width);
    canvas.setAttribute('height', opts.height);
    ctx = canvas.getContext("2d");
    ctx.canvas.width = opts.width;
    ctx.canvas.height = opts.height;

    polys.forEach(function(poly) {
      ctx.fillStyle = ctx.strokeStyle = poly[0];
      ctx.lineWidth = opts.stroke_width;
      ctx.beginPath();
      ctx.moveTo.apply(ctx, poly[1][0]);
      ctx.lineTo.apply(ctx, poly[1][1]);
      ctx.lineTo.apply(ctx, poly[1][2]);
      ctx.fill();
      ctx.stroke();
    });

    return canvas;
  }

  // PNG rendering method
  // currently returns a data url as a string since toBlob support really isn't there yet...
  function render_png() {
    return render_canvas().toDataURL("image/png");
  }

  // Return an object with all the relevant functions/properties attached to it
  return {
    polys: polys,
    opts: opts,
    svg: render_svg,
    canvas: render_canvas,
    png: render_png
  };
}

module.exports = Pattern;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ }),

/***/ 1897:
/***/ (function(module, exports) {

function generate_grid(width, height, bleed_x, bleed_y, cell_size, variance, rand_fn) {
  var w = width + bleed_x;
  var h = height + bleed_y;
  var half_cell_size = cell_size * 0.5;
  var double_v = variance * 2;
  var negative_v = -variance;

  var points = [];
  for (var i = -bleed_x; i < w; i += cell_size) {
    for (var j = -bleed_y; j < h; j += cell_size) {
      var x = (i + half_cell_size) + (rand_fn() * double_v + negative_v);
      var y = (j + half_cell_size) + (rand_fn() * double_v + negative_v);
      points.push([Math.floor(x), Math.floor(y)]);
    }
  }

  return points;
}

module.exports = generate_grid;


/***/ }),

/***/ 1898:
/***/ (function(module, exports, __webpack_require__) {

/*
 * Trianglify.js
 * by @qrohlf
 *
 * Licensed under the GPLv3
 */

var delaunay = __webpack_require__(1621);
var seedrandom = __webpack_require__(1768);
var chroma = __webpack_require__(1615); //PROBLEM: chroma.js is nearly 32k in size
var colorbrewer = __webpack_require__(1895); //We could use the chroma.js colorbrewer, but it's got some ugly stuff so we use our own subset.
var _generate_points = __webpack_require__(1897);

var Pattern = __webpack_require__(1896);

var defaults = {
  width: 600,                       // Width of pattern
  height: 400,                      // Height of pattern
  cell_size: 75,                    // Size of the cells used to generate a randomized grid
  variance: 0.75,                   // how much to randomize the grid
  seed: null,                       // Seed for the RNG
  x_colors: 'random',               // X color stops
  y_colors: 'match_x',              // Y color stops
  palette: colorbrewer,             // Palette to use for 'random' color option
  color_space: 'lab',               // Color space used for gradient construction & interpolation
  color_function: null,             // Color function f(x, y) that returns a color specification that is consumable by chroma-js
  stroke_width: 1.51,               // Width of stroke. Defaults to 1.51 to fix an issue with canvas antialiasing.
  points: undefined                 // An Array of [x,y] coordinates to trianglulate. Defaults to undefined, and points are generated.
};

/*********************************************************
*
* Main function that is exported to the global namespace
*
**********************************************************/

function Trianglify(opts) {
  var rand;
  
  // apply defaults
  opts = _merge_opts(defaults, opts);

  // setup seedable RNG
  rand = seedrandom(opts.seed);

  // randomize colors if requested
  if (opts.x_colors === 'random') opts.x_colors = _random_from_palette();
  if (opts.y_colors === 'random') opts.y_colors = _random_from_palette();
  if (opts.y_colors === 'match_x') opts.y_colors = opts.x_colors;

  // some sanity-checking
  if (!(opts.width > 0 && opts.height > 0)) {
    throw new Error("Width and height must be numbers greater than 0");
  }

  if (opts.cell_size < 2) {
    throw new Error("Cell size must be greater than 2.");
  }

  // Setup the color gradient function
  var gradient;

  if (opts.color_function) {
    gradient = function(x, y) {
      return chroma(opts.color_function(x, y));
    };
  } else {
    var x_color = chroma.scale(opts.x_colors).mode(opts.color_space);
    var y_color = chroma.scale(opts.y_colors).mode(opts.color_space);
    gradient = function(x, y) {
      return chroma.interpolate(x_color(x), y_color(y), 0.5, opts.color_space);
    };
  }

  // Figure out key dimensions

  // it's a pain to prefix width and height with opts all the time, so let's
  // give them proper variables to refer to
  var width = opts.width;
  var height = opts.height;

  // How many cells we're going to have on each axis (pad by 2 cells on each edge)
  var cells_x = Math.floor((width + 4 * opts.cell_size) / opts.cell_size);
  var cells_y = Math.floor((height + 4 * opts.cell_size) / opts.cell_size);

  // figure out the bleed widths to center the grid
  var bleed_x = ((cells_x * opts.cell_size) - width)/2;
  var bleed_y = ((cells_y * opts.cell_size) - height)/2;

  // how much can out points wiggle (+/-) given the cell padding?
  var variance = opts.cell_size * opts.variance / 2;

  // Set up normalizers
  var norm_x = function(x) {
    return _map(x, [-bleed_x, width+bleed_x], [0, 1]);
  };

  var norm_y = function(y) {
    return _map(y, [-bleed_y, height+bleed_y], [0, 1]);
  };

  // generate a point mesh
  var points = opts.points || _generate_points(width, height, bleed_x, bleed_y, opts.cell_size, variance, rand);

  // delaunay.triangulate gives us indices into the original coordinate array
  var geom_indices = delaunay.triangulate(points);

  // iterate over the indices in groups of three to flatten them into polygons, with color lookup
  var triangles = [];
  var lookup_point = function(i) { return points[i];};
  for (var i=0; i < geom_indices.length; i += 3) {
    var vertices = [geom_indices[i], geom_indices[i+1], geom_indices[i+2]].map(lookup_point);
    var centroid = _centroid(vertices);
    var color = gradient(norm_x(centroid.x), norm_y(centroid.y)).hex();
    triangles.push([color, vertices]);
  }
  return Pattern(triangles, opts);


  /*********************************************************
  *
  * Private functions
  *
  **********************************************************/

  function _map(num, in_range, out_range ) {
    return ( num - in_range[0] ) * ( out_range[1] - out_range[0] ) / ( in_range[1] - in_range[0] ) + out_range[0];
  }

  //triangles only!
  function _centroid(d) {
    return {
      x: (d[0][0] + d[1][0] + d[2][0])/3,
      y: (d[0][1] + d[1][1] + d[2][1])/3
    };
  }

  // select a random palette from colorbrewer
  function _random_from_palette() {
    if (opts.palette instanceof Array) {
      return opts.palette[Math.floor(rand()*opts.palette.length)];
    }

    var keys = Object.keys(opts.palette);
    return opts.palette[keys[Math.floor(rand()*keys.length)]];
  }

  // shallow extend (sort of) for option defaults
  function _merge_opts(defaults, options) {
    var out = {};

    // shallow-copy defaults so we don't mutate the input objects (bad)
    for (var key in defaults) {
      out[key] = defaults[key];
    }

    for (key in options) {
      if (defaults.hasOwnProperty(key)) {
        out[key] = options[key]; // override defaults with options
      } else {
        throw new Error(key+" is not a configuration option for Trianglify. Check your spelling?");
      }
    }
    return out;
  }

} //end of Trianglify function closure

// exports
Trianglify.colorbrewer = colorbrewer;
Trianglify.defaults = defaults;
module.exports = Trianglify;


/***/ }),

/***/ 1907:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1908:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1909:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(10), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(46);

var _assign2 = _interopRequireDefault(_assign);

var _GalleryView = __webpack_require__(1670);

var _GalleryView2 = _interopRequireDefault(_GalleryView);

var _reactRedux = __webpack_require__(68);

var _app = __webpack_require__(225);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = {
  setNavbarState: _app.setNavbarState
};

var mapStateToProps = function mapStateToProps(state) {
  return (0, _assign2.default)({}, state.gallery, {
    appState: state.app
  });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_GalleryView2.default);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "GalleryContainer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 929:
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "gallery.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

});
//# sourceMappingURL=3.js.map