"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var htmx_org__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! htmx.org */ "./node_modules/htmx.org/dist/htmx.esm.js");

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */


window.htmx = __webpack_require__(/*! htmx.org */ "./node_modules/htmx.org/dist/htmx.esm.js");

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@symfony/stimulus-bundle'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var app = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@symfony/stimulus-bundle'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./node_modules/htmx.org/dist/htmx.esm.js":
/*!************************************************!*\
  !*** ./node_modules/htmx.org/dist/htmx.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var htmx = (function() {
  'use strict'

  // Public API
  const htmx = {
    // Tsc madness here, assigning the functions directly results in an invalid TypeScript output, but reassigning is fine
    /* Event processing */
    /** @type {typeof onLoadHelper} */
    onLoad: null,
    /** @type {typeof processNode} */
    process: null,
    /** @type {typeof addEventListenerImpl} */
    on: null,
    /** @type {typeof removeEventListenerImpl} */
    off: null,
    /** @type {typeof triggerEvent} */
    trigger: null,
    /** @type {typeof ajaxHelper} */
    ajax: null,
    /* DOM querying helpers */
    /** @type {typeof find} */
    find: null,
    /** @type {typeof findAll} */
    findAll: null,
    /** @type {typeof closest} */
    closest: null,
    /**
     * Returns the input values that would resolve for a given element via the htmx value resolution mechanism
     *
     * @see https://htmx.org/api/#values
     *
     * @param {Element} elt the element to resolve values on
     * @param {HttpVerb} type the request type (e.g. **get** or **post**) non-GET's will include the enclosing form of the element. Defaults to **post**
     * @returns {Object}
     */
    values: function(elt, type) {
      const inputValues = getInputValues(elt, type || 'post')
      return inputValues.values
    },
    /* DOM manipulation helpers */
    /** @type {typeof removeElement} */
    remove: null,
    /** @type {typeof addClassToElement} */
    addClass: null,
    /** @type {typeof removeClassFromElement} */
    removeClass: null,
    /** @type {typeof toggleClassOnElement} */
    toggleClass: null,
    /** @type {typeof takeClassForElement} */
    takeClass: null,
    /** @type {typeof swap} */
    swap: null,
    /* Extension entrypoints */
    /** @type {typeof defineExtension} */
    defineExtension: null,
    /** @type {typeof removeExtension} */
    removeExtension: null,
    /* Debugging */
    /** @type {typeof logAll} */
    logAll: null,
    /** @type {typeof logNone} */
    logNone: null,
    /* Debugging */
    /**
     * The logger htmx uses to log with
     *
     * @see https://htmx.org/api/#logger
     */
    logger: null,
    /**
     * A property holding the configuration htmx uses at runtime.
     *
     * Note that using a [meta tag](https://htmx.org/docs/#config) is the preferred mechanism for setting these properties.
     *
     * @see https://htmx.org/api/#config
     */
    config: {
      /**
       * Whether to use history.
       * @type boolean
       * @default true
       */
      historyEnabled: true,
      /**
       * The number of pages to keep in **localStorage** for history support.
       * @type number
       * @default 10
       */
      historyCacheSize: 10,
      /**
       * @type boolean
       * @default false
       */
      refreshOnHistoryMiss: false,
      /**
       * The default swap style to use if **[hx-swap](https://htmx.org/attributes/hx-swap)** is omitted.
       * @type HtmxSwapStyle
       * @default 'innerHTML'
       */
      defaultSwapStyle: 'innerHTML',
      /**
       * The default delay between receiving a response from the server and doing the swap.
       * @type number
       * @default 0
       */
      defaultSwapDelay: 0,
      /**
       * The default delay between completing the content swap and settling attributes.
       * @type number
       * @default 20
       */
      defaultSettleDelay: 20,
      /**
       * If true, htmx will inject a small amount of CSS into the page to make indicators invisible unless the **htmx-indicator** class is present.
       * @type boolean
       * @default true
       */
      includeIndicatorStyles: true,
      /**
       * The class to place on indicators when a request is in flight.
       * @type string
       * @default 'htmx-indicator'
       */
      indicatorClass: 'htmx-indicator',
      /**
       * The class to place on triggering elements when a request is in flight.
       * @type string
       * @default 'htmx-request'
       */
      requestClass: 'htmx-request',
      /**
       * The class to temporarily place on elements that htmx has added to the DOM.
       * @type string
       * @default 'htmx-added'
       */
      addedClass: 'htmx-added',
      /**
       * The class to place on target elements when htmx is in the settling phase.
       * @type string
       * @default 'htmx-settling'
       */
      settlingClass: 'htmx-settling',
      /**
       * The class to place on target elements when htmx is in the swapping phase.
       * @type string
       * @default 'htmx-swapping'
       */
      swappingClass: 'htmx-swapping',
      /**
       * Allows the use of eval-like functionality in htmx, to enable **hx-vars**, trigger conditions & script tag evaluation. Can be set to **false** for CSP compatibility.
       * @type boolean
       * @default true
       */
      allowEval: true,
      /**
       * If set to false, disables the interpretation of script tags.
       * @type boolean
       * @default true
       */
      allowScriptTags: true,
      /**
       * If set, the nonce will be added to inline scripts.
       * @type string
       * @default ''
       */
      inlineScriptNonce: '',
      /**
       * If set, the nonce will be added to inline styles.
       * @type string
       * @default ''
       */
      inlineStyleNonce: '',
      /**
       * The attributes to settle during the settling phase.
       * @type string[]
       * @default ['class', 'style', 'width', 'height']
       */
      attributesToSettle: ['class', 'style', 'width', 'height'],
      /**
       * Allow cross-site Access-Control requests using credentials such as cookies, authorization headers or TLS client certificates.
       * @type boolean
       * @default false
       */
      withCredentials: false,
      /**
       * @type number
       * @default 0
       */
      timeout: 0,
      /**
       * The default implementation of **getWebSocketReconnectDelay** for reconnecting after unexpected connection loss by the event code **Abnormal Closure**, **Service Restart** or **Try Again Later**.
       * @type {'full-jitter' | ((retryCount:number) => number)}
       * @default "full-jitter"
       */
      wsReconnectDelay: 'full-jitter',
      /**
       * The type of binary data being received over the WebSocket connection
       * @type BinaryType
       * @default 'blob'
       */
      wsBinaryType: 'blob',
      /**
       * @type string
       * @default '[hx-disable], [data-hx-disable]'
       */
      disableSelector: '[hx-disable], [data-hx-disable]',
      /**
       * @type {'auto' | 'instant' | 'smooth'}
       * @default 'smooth'
       */
      scrollBehavior: 'instant',
      /**
       * If the focused element should be scrolled into view.
       * @type boolean
       * @default false
       */
      defaultFocusScroll: false,
      /**
       * If set to true htmx will include a cache-busting parameter in GET requests to avoid caching partial responses by the browser
       * @type boolean
       * @default false
       */
      getCacheBusterParam: false,
      /**
       * If set to true, htmx will use the View Transition API when swapping in new content.
       * @type boolean
       * @default false
       */
      globalViewTransitions: false,
      /**
       * htmx will format requests with these methods by encoding their parameters in the URL, not the request body
       * @type {(HttpVerb)[]}
       * @default ['get', 'delete']
       */
      methodsThatUseUrlParams: ['get', 'delete'],
      /**
       * If set to true, disables htmx-based requests to non-origin hosts.
       * @type boolean
       * @default false
       */
      selfRequestsOnly: true,
      /**
       * If set to true htmx will not update the title of the document when a title tag is found in new content
       * @type boolean
       * @default false
       */
      ignoreTitle: false,
      /**
       * Whether the target of a boosted element is scrolled into the viewport.
       * @type boolean
       * @default true
       */
      scrollIntoViewOnBoost: true,
      /**
       * The cache to store evaluated trigger specifications into.
       * You may define a simple object to use a never-clearing cache, or implement your own system using a [proxy object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
       * @type {Object|null}
       * @default null
       */
      triggerSpecsCache: null,
      /** @type boolean */
      disableInheritance: false,
      /** @type HtmxResponseHandlingConfig[] */
      responseHandling: [
        { code: '204', swap: false },
        { code: '[23]..', swap: true },
        { code: '[45]..', swap: false, error: true }
      ],
      /**
       * Whether to process OOB swaps on elements that are nested within the main response element.
       * @type boolean
       * @default true
       */
      allowNestedOobSwaps: true
    },
    /** @type {typeof parseInterval} */
    parseInterval: null,
    /** @type {typeof internalEval} */
    _: null,
    version: '2.0.1'
  }
  // Tsc madness part 2
  htmx.onLoad = onLoadHelper
  htmx.process = processNode
  htmx.on = addEventListenerImpl
  htmx.off = removeEventListenerImpl
  htmx.trigger = triggerEvent
  htmx.ajax = ajaxHelper
  htmx.find = find
  htmx.findAll = findAll
  htmx.closest = closest
  htmx.remove = removeElement
  htmx.addClass = addClassToElement
  htmx.removeClass = removeClassFromElement
  htmx.toggleClass = toggleClassOnElement
  htmx.takeClass = takeClassForElement
  htmx.swap = swap
  htmx.defineExtension = defineExtension
  htmx.removeExtension = removeExtension
  htmx.logAll = logAll
  htmx.logNone = logNone
  htmx.parseInterval = parseInterval
  htmx._ = internalEval

  const internalAPI = {
    addTriggerHandler,
    bodyContains,
    canAccessLocalStorage,
    findThisElement,
    filterValues,
    swap,
    hasAttribute,
    getAttributeValue,
    getClosestAttributeValue,
    getClosestMatch,
    getExpressionVars,
    getHeaders,
    getInputValues,
    getInternalData,
    getSwapSpecification,
    getTriggerSpecs,
    getTarget,
    makeFragment,
    mergeObjects,
    makeSettleInfo,
    oobSwap,
    querySelectorExt,
    settleImmediately,
    shouldCancel,
    triggerEvent,
    triggerErrorEvent,
    withExtensions
  }

  const VERBS = ['get', 'post', 'put', 'delete', 'patch']
  const VERB_SELECTOR = VERBS.map(function(verb) {
    return '[hx-' + verb + '], [data-hx-' + verb + ']'
  }).join(', ')

  const HEAD_TAG_REGEX = makeTagRegEx('head')

  //= ===================================================================
  // Utilities
  //= ===================================================================

  /**
   * @param {string} tag
   * @param {boolean} global
   * @returns {RegExp}
   */
  function makeTagRegEx(tag, global = false) {
    return new RegExp(`<${tag}(\\s[^>]*>|>)([\\s\\S]*?)<\\/${tag}>`,
      global ? 'gim' : 'im')
  }

  /**
   * Parses an interval string consistent with the way htmx does. Useful for plugins that have timing-related attributes.
   *
   * Caution: Accepts an int followed by either **s** or **ms**. All other values use **parseFloat**
   *
   * @see https://htmx.org/api/#parseInterval
   *
   * @param {string} str timing string
   * @returns {number|undefined}
   */
  function parseInterval(str) {
    if (str == undefined) {
      return undefined
    }

    let interval = NaN
    if (str.slice(-2) == 'ms') {
      interval = parseFloat(str.slice(0, -2))
    } else if (str.slice(-1) == 's') {
      interval = parseFloat(str.slice(0, -1)) * 1000
    } else if (str.slice(-1) == 'm') {
      interval = parseFloat(str.slice(0, -1)) * 1000 * 60
    } else {
      interval = parseFloat(str)
    }
    return isNaN(interval) ? undefined : interval
  }

  /**
   * @param {Node} elt
   * @param {string} name
   * @returns {(string | null)}
   */
  function getRawAttribute(elt, name) {
    return elt instanceof Element && elt.getAttribute(name)
  }

  /**
   * @param {Element} elt
   * @param {string} qualifiedName
   * @returns {boolean}
   */
  // resolve with both hx and data-hx prefixes
  function hasAttribute(elt, qualifiedName) {
    return !!elt.hasAttribute && (elt.hasAttribute(qualifiedName) ||
      elt.hasAttribute('data-' + qualifiedName))
  }

  /**
   *
   * @param {Node} elt
   * @param {string} qualifiedName
   * @returns {(string | null)}
   */
  function getAttributeValue(elt, qualifiedName) {
    return getRawAttribute(elt, qualifiedName) || getRawAttribute(elt, 'data-' + qualifiedName)
  }

  /**
   * @param {Node} elt
   * @returns {Node | null}
   */
  function parentElt(elt) {
    const parent = elt.parentElement
    if (!parent && elt.parentNode instanceof ShadowRoot) return elt.parentNode
    return parent
  }

  /**
   * @returns {Document}
   */
  function getDocument() {
    return document
  }

  /**
   * @param {Node} elt
   * @param {boolean} global
   * @returns {Node|Document}
   */
  function getRootNode(elt, global) {
    return elt.getRootNode ? elt.getRootNode({ composed: global }) : getDocument()
  }

  /**
   * @param {Node} elt
   * @param {(e:Node) => boolean} condition
   * @returns {Node | null}
   */
  function getClosestMatch(elt, condition) {
    while (elt && !condition(elt)) {
      elt = parentElt(elt)
    }

    return elt || null
  }

  /**
   * @param {Element} initialElement
   * @param {Element} ancestor
   * @param {string} attributeName
   * @returns {string|null}
   */
  function getAttributeValueWithDisinheritance(initialElement, ancestor, attributeName) {
    const attributeValue = getAttributeValue(ancestor, attributeName)
    const disinherit = getAttributeValue(ancestor, 'hx-disinherit')
    var inherit = getAttributeValue(ancestor, 'hx-inherit')
    if (initialElement !== ancestor) {
      if (htmx.config.disableInheritance) {
        if (inherit && (inherit === '*' || inherit.split(' ').indexOf(attributeName) >= 0)) {
          return attributeValue
        } else {
          return null
        }
      }
      if (disinherit && (disinherit === '*' || disinherit.split(' ').indexOf(attributeName) >= 0)) {
        return 'unset'
      }
    }
    return attributeValue
  }

  /**
   * @param {Element} elt
   * @param {string} attributeName
   * @returns {string | null}
   */
  function getClosestAttributeValue(elt, attributeName) {
    let closestAttr = null
    getClosestMatch(elt, function(e) {
      return !!(closestAttr = getAttributeValueWithDisinheritance(elt, asElement(e), attributeName))
    })
    if (closestAttr !== 'unset') {
      return closestAttr
    }
  }

  /**
   * @param {Node} elt
   * @param {string} selector
   * @returns {boolean}
   */
  function matches(elt, selector) {
    // @ts-ignore: non-standard properties for browser compatibility
    // noinspection JSUnresolvedVariable
    const matchesFunction = elt instanceof Element && (elt.matches || elt.matchesSelector || elt.msMatchesSelector || elt.mozMatchesSelector || elt.webkitMatchesSelector || elt.oMatchesSelector)
    return !!matchesFunction && matchesFunction.call(elt, selector)
  }

  /**
   * @param {string} str
   * @returns {string}
   */
  function getStartTag(str) {
    const tagMatcher = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
    const match = tagMatcher.exec(str)
    if (match) {
      return match[1].toLowerCase()
    } else {
      return ''
    }
  }

  /**
   * @param {string} resp
   * @returns {Document}
   */
  function parseHTML(resp) {
    const parser = new DOMParser()
    return parser.parseFromString(resp, 'text/html')
  }

  /**
   * @param {DocumentFragment} fragment
   * @param {Node} elt
   */
  function takeChildrenFor(fragment, elt) {
    while (elt.childNodes.length > 0) {
      fragment.append(elt.childNodes[0])
    }
  }

  /**
   * @param {HTMLScriptElement} script
   * @returns {HTMLScriptElement}
   */
  function duplicateScript(script) {
    const newScript = getDocument().createElement('script')
    forEach(script.attributes, function(attr) {
      newScript.setAttribute(attr.name, attr.value)
    })
    newScript.textContent = script.textContent
    newScript.async = false
    if (htmx.config.inlineScriptNonce) {
      newScript.nonce = htmx.config.inlineScriptNonce
    }
    return newScript
  }

  /**
   * @param {HTMLScriptElement} script
   * @returns {boolean}
   */
  function isJavaScriptScriptNode(script) {
    return script.matches('script') && (script.type === 'text/javascript' || script.type === 'module' || script.type === '')
  }

  /**
   * we have to make new copies of script tags that we are going to insert because
   * SOME browsers (not saying who, but it involves an element and an animal) don't
   * execute scripts created in <template> tags when they are inserted into the DOM
   * and all the others do lmao
   * @param {DocumentFragment} fragment
   */
  function normalizeScriptTags(fragment) {
    Array.from(fragment.querySelectorAll('script')).forEach(/** @param {HTMLScriptElement} script */ (script) => {
      if (isJavaScriptScriptNode(script)) {
        const newScript = duplicateScript(script)
        const parent = script.parentNode
        try {
          parent.insertBefore(newScript, script)
        } catch (e) {
          logError(e)
        } finally {
          script.remove()
        }
      }
    })
  }

  /**
   * @typedef {DocumentFragment & {title?: string}} DocumentFragmentWithTitle
   * @description  a document fragment representing the response HTML, including
   * a `title` property for any title information found
   */

  /**
   * @param {string} response HTML
   * @returns {DocumentFragmentWithTitle}
   */
  function makeFragment(response) {
    // strip head tag to determine shape of response we are dealing with
    const responseWithNoHead = response.replace(HEAD_TAG_REGEX, '')
    const startTag = getStartTag(responseWithNoHead)
    /** @type DocumentFragmentWithTitle */
    let fragment
    if (startTag === 'html') {
      // if it is a full document, parse it and return the body
      fragment = /** @type DocumentFragmentWithTitle */ (new DocumentFragment())
      const doc = parseHTML(response)
      takeChildrenFor(fragment, doc.body)
      fragment.title = doc.title
    } else if (startTag === 'body') {
      // parse body w/o wrapping in template
      fragment = /** @type DocumentFragmentWithTitle */ (new DocumentFragment())
      const doc = parseHTML(responseWithNoHead)
      takeChildrenFor(fragment, doc.body)
      fragment.title = doc.title
    } else {
      // otherwise we have non-body partial HTML content, so wrap it in a template to maximize parsing flexibility
      const doc = parseHTML('<body><template class="internal-htmx-wrapper">' + responseWithNoHead + '</template></body>')
      fragment = /** @type DocumentFragmentWithTitle */ (doc.querySelector('template').content)
      // extract title into fragment for later processing
      fragment.title = doc.title

      // for legacy reasons we support a title tag at the root level of non-body responses, so we need to handle it
      var titleElement = fragment.querySelector('title')
      if (titleElement && titleElement.parentNode === fragment) {
        titleElement.remove()
        fragment.title = titleElement.innerText
      }
    }
    if (fragment) {
      if (htmx.config.allowScriptTags) {
        normalizeScriptTags(fragment)
      } else {
        // remove all script tags if scripts are disabled
        fragment.querySelectorAll('script').forEach((script) => script.remove())
      }
    }
    return fragment
  }

  /**
   * @param {Function} func
   */
  function maybeCall(func) {
    if (func) {
      func()
    }
  }

  /**
   * @param {any} o
   * @param {string} type
   * @returns
   */
  function isType(o, type) {
    return Object.prototype.toString.call(o) === '[object ' + type + ']'
  }

  /**
   * @param {*} o
   * @returns {o is Function}
   */
  function isFunction(o) {
    return typeof o === 'function'
  }

  /**
   * @param {*} o
   * @returns {o is Object}
   */
  function isRawObject(o) {
    return isType(o, 'Object')
  }

  /**
   * @typedef {Object} OnHandler
   * @property {(keyof HTMLElementEventMap)|string} event
   * @property {EventListener} listener
   */

  /**
   * @typedef {Object} ListenerInfo
   * @property {string} trigger
   * @property {EventListener} listener
   * @property {EventTarget} on
   */

  /**
   * @typedef {Object} HtmxNodeInternalData
   * Element data
   * @property {number} [initHash]
   * @property {boolean} [boosted]
   * @property {OnHandler[]} [onHandlers]
   * @property {number} [timeout]
   * @property {ListenerInfo[]} [listenerInfos]
   * @property {boolean} [cancelled]
   * @property {boolean} [triggeredOnce]
   * @property {number} [delayed]
   * @property {number|null} [throttle]
   * @property {string} [lastValue]
   * @property {boolean} [loaded]
   * @property {string} [path]
   * @property {string} [verb]
   * @property {boolean} [polling]
   * @property {HTMLButtonElement|HTMLInputElement|null} [lastButtonClicked]
   * @property {number} [requestCount]
   * @property {XMLHttpRequest} [xhr]
   * @property {(() => void)[]} [queuedRequests]
   * @property {boolean} [abortable]
   *
   * Event data
   * @property {HtmxTriggerSpecification} [triggerSpec]
   * @property {EventTarget[]} [handledFor]
   */

  /**
   * getInternalData retrieves "private" data stored by htmx within an element
   * @param {EventTarget|Event} elt
   * @returns {HtmxNodeInternalData}
   */
  function getInternalData(elt) {
    const dataProp = 'htmx-internal-data'
    let data = elt[dataProp]
    if (!data) {
      data = elt[dataProp] = {}
    }
    return data
  }

  /**
   * toArray converts an ArrayLike object into a real array.
   * @template T
   * @param {ArrayLike<T>} arr
   * @returns {T[]}
   */
  function toArray(arr) {
    const returnArr = []
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        returnArr.push(arr[i])
      }
    }
    return returnArr
  }

  /**
   * @template T
   * @param {T[]|NamedNodeMap|HTMLCollection|HTMLFormControlsCollection|ArrayLike<T>} arr
   * @param {(T) => void} func
   */
  function forEach(arr, func) {
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        func(arr[i])
      }
    }
  }

  /**
   * @param {Element} el
   * @returns {boolean}
   */
  function isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect()
    const elemTop = rect.top
    const elemBottom = rect.bottom
    return elemTop < window.innerHeight && elemBottom >= 0
  }

  /**
   * @param {Node} elt
   * @returns {boolean}
   */
  function bodyContains(elt) {
    // IE Fix
    const rootNode = elt.getRootNode && elt.getRootNode()
    if (rootNode && rootNode instanceof window.ShadowRoot) {
      return getDocument().body.contains(rootNode.host)
    } else {
      return getDocument().body.contains(elt)
    }
  }

  /**
   * @param {string} trigger
   * @returns {string[]}
   */
  function splitOnWhitespace(trigger) {
    return trigger.trim().split(/\s+/)
  }

  /**
   * mergeObjects takes all the keys from
   * obj2 and duplicates them into obj1
   * @template T1
   * @template T2
   * @param {T1} obj1
   * @param {T2} obj2
   * @returns {T1 & T2}
   */
  function mergeObjects(obj1, obj2) {
    for (const key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        // @ts-ignore tsc doesn't seem to properly handle types merging
        obj1[key] = obj2[key]
      }
    }
    // @ts-ignore tsc doesn't seem to properly handle types merging
    return obj1
  }

  /**
   * @param {string} jString
   * @returns {any|null}
   */
  function parseJSON(jString) {
    try {
      return JSON.parse(jString)
    } catch (error) {
      logError(error)
      return null
    }
  }

  /**
   * @returns {boolean}
   */
  function canAccessLocalStorage() {
    const test = 'htmx:localStorageTest'
    try {
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * @param {string} path
   * @returns {string}
   */
  function normalizePath(path) {
    try {
      const url = new URL(path)
      if (url) {
        path = url.pathname + url.search
      }
      // remove trailing slash, unless index page
      if (!(/^\/$/.test(path))) {
        path = path.replace(/\/+$/, '')
      }
      return path
    } catch (e) {
      // be kind to IE11, which doesn't support URL()
      return path
    }
  }

  //= =========================================================================================
  // public API
  //= =========================================================================================

  /**
   * @param {string} str
   * @returns {any}
   */
  function internalEval(str) {
    return maybeEval(getDocument().body, function() {
      return eval(str)
    })
  }

  /**
   * Adds a callback for the **htmx:load** event. This can be used to process new content, for example initializing the content with a javascript library
   *
   * @see https://htmx.org/api/#onLoad
   *
   * @param {(elt: Node) => void} callback the callback to call on newly loaded content
   * @returns {EventListener}
   */
  function onLoadHelper(callback) {
    const value = htmx.on('htmx:load', /** @param {CustomEvent} evt */ function(evt) {
      callback(evt.detail.elt)
    })
    return value
  }

  /**
   * Log all htmx events, useful for debugging.
   *
   * @see https://htmx.org/api/#logAll
   */
  function logAll() {
    htmx.logger = function(elt, event, data) {
      if (console) {
        console.log(event, elt, data)
      }
    }
  }

  function logNone() {
    htmx.logger = null
  }

  /**
   * Finds an element matching the selector
   *
   * @see https://htmx.org/api/#find
   *
   * @param {ParentNode|string} eltOrSelector  the root element to find the matching element in, inclusive | the selector to match
   * @param {string} [selector] the selector to match
   * @returns {Element|null}
   */
  function find(eltOrSelector, selector) {
    if (typeof eltOrSelector !== 'string') {
      return eltOrSelector.querySelector(selector)
    } else {
      return find(getDocument(), eltOrSelector)
    }
  }

  /**
   * Finds all elements matching the selector
   *
   * @see https://htmx.org/api/#findAll
   *
   * @param {ParentNode|string} eltOrSelector the root element to find the matching elements in, inclusive | the selector to match
   * @param {string} [selector] the selector to match
   * @returns {NodeListOf<Element>}
   */
  function findAll(eltOrSelector, selector) {
    if (typeof eltOrSelector !== 'string') {
      return eltOrSelector.querySelectorAll(selector)
    } else {
      return findAll(getDocument(), eltOrSelector)
    }
  }

  /**
   * @returns Window
   */
  function getWindow() {
    return window
  }

  /**
   * Removes an element from the DOM
   *
   * @see https://htmx.org/api/#remove
   *
   * @param {Node} elt
   * @param {number} [delay]
   */
  function removeElement(elt, delay) {
    elt = resolveTarget(elt)
    if (delay) {
      getWindow().setTimeout(function() {
        removeElement(elt)
        elt = null
      }, delay)
    } else {
      parentElt(elt).removeChild(elt)
    }
  }

  /**
   * @param {any} elt
   * @return {Element|null}
   */
  function asElement(elt) {
    return elt instanceof Element ? elt : null
  }

  /**
   * @param {any} elt
   * @return {HTMLElement|null}
   */
  function asHtmlElement(elt) {
    return elt instanceof HTMLElement ? elt : null
  }

  /**
   * @param {any} value
   * @return {string|null}
   */
  function asString(value) {
    return typeof value === 'string' ? value : null
  }

  /**
   * @param {EventTarget} elt
   * @return {ParentNode|null}
   */
  function asParentNode(elt) {
    return elt instanceof Element || elt instanceof Document || elt instanceof DocumentFragment ? elt : null
  }

  /**
   * This method adds a class to the given element.
   *
   * @see https://htmx.org/api/#addClass
   *
   * @param {Element|string} elt the element to add the class to
   * @param {string} clazz the class to add
   * @param {number} [delay] the delay (in milliseconds) before class is added
   */
  function addClassToElement(elt, clazz, delay) {
    elt = asElement(resolveTarget(elt))
    if (!elt) {
      return
    }
    if (delay) {
      getWindow().setTimeout(function() {
        addClassToElement(elt, clazz)
        elt = null
      }, delay)
    } else {
      elt.classList && elt.classList.add(clazz)
    }
  }

  /**
   * Removes a class from the given element
   *
   * @see https://htmx.org/api/#removeClass
   *
   * @param {Node|string} node element to remove the class from
   * @param {string} clazz the class to remove
   * @param {number} [delay] the delay (in milliseconds before class is removed)
   */
  function removeClassFromElement(node, clazz, delay) {
    let elt = asElement(resolveTarget(node))
    if (!elt) {
      return
    }
    if (delay) {
      getWindow().setTimeout(function() {
        removeClassFromElement(elt, clazz)
        elt = null
      }, delay)
    } else {
      if (elt.classList) {
        elt.classList.remove(clazz)
        // if there are no classes left, remove the class attribute
        if (elt.classList.length === 0) {
          elt.removeAttribute('class')
        }
      }
    }
  }

  /**
   * Toggles the given class on an element
   *
   * @see https://htmx.org/api/#toggleClass
   *
   * @param {Element|string} elt the element to toggle the class on
   * @param {string} clazz the class to toggle
   */
  function toggleClassOnElement(elt, clazz) {
    elt = resolveTarget(elt)
    elt.classList.toggle(clazz)
  }

  /**
   * Takes the given class from its siblings, so that among its siblings, only the given element will have the class.
   *
   * @see https://htmx.org/api/#takeClass
   *
   * @param {Node|string} elt the element that will take the class
   * @param {string} clazz the class to take
   */
  function takeClassForElement(elt, clazz) {
    elt = resolveTarget(elt)
    forEach(elt.parentElement.children, function(child) {
      removeClassFromElement(child, clazz)
    })
    addClassToElement(asElement(elt), clazz)
  }

  /**
   * Finds the closest matching element in the given elements parentage, inclusive of the element
   *
   * @see https://htmx.org/api/#closest
   *
   * @param {Element|string} elt the element to find the selector from
   * @param {string} selector the selector to find
   * @returns {Element|null}
   */
  function closest(elt, selector) {
    elt = asElement(resolveTarget(elt))
    if (elt && elt.closest) {
      return elt.closest(selector)
    } else {
      // TODO remove when IE goes away
      do {
        if (elt == null || matches(elt, selector)) {
          return elt
        }
      }
      while (elt = elt && asElement(parentElt(elt)))
      return null
    }
  }

  /**
   * @param {string} str
   * @param {string} prefix
   * @returns {boolean}
   */
  function startsWith(str, prefix) {
    return str.substring(0, prefix.length) === prefix
  }

  /**
   * @param {string} str
   * @param {string} suffix
   * @returns {boolean}
   */
  function endsWith(str, suffix) {
    return str.substring(str.length - suffix.length) === suffix
  }

  /**
   * @param {string} selector
   * @returns {string}
   */
  function normalizeSelector(selector) {
    const trimmedSelector = selector.trim()
    if (startsWith(trimmedSelector, '<') && endsWith(trimmedSelector, '/>')) {
      return trimmedSelector.substring(1, trimmedSelector.length - 2)
    } else {
      return trimmedSelector
    }
  }

  /**
   * @param {Node|Element|Document|string} elt
   * @param {string} selector
   * @param {boolean=} global
   * @returns {(Node|Window)[]}
   */
  function querySelectorAllExt(elt, selector, global) {
    elt = resolveTarget(elt)
    if (selector.indexOf('closest ') === 0) {
      return [closest(asElement(elt), normalizeSelector(selector.substr(8)))]
    } else if (selector.indexOf('find ') === 0) {
      return [find(asParentNode(elt), normalizeSelector(selector.substr(5)))]
    } else if (selector === 'next') {
      return [asElement(elt).nextElementSibling]
    } else if (selector.indexOf('next ') === 0) {
      return [scanForwardQuery(elt, normalizeSelector(selector.substr(5)), !!global)]
    } else if (selector === 'previous') {
      return [asElement(elt).previousElementSibling]
    } else if (selector.indexOf('previous ') === 0) {
      return [scanBackwardsQuery(elt, normalizeSelector(selector.substr(9)), !!global)]
    } else if (selector === 'document') {
      return [document]
    } else if (selector === 'window') {
      return [window]
    } else if (selector === 'body') {
      return [document.body]
    } else if (selector === 'root') {
      return [getRootNode(elt, !!global)]
    } else if (selector.indexOf('global ') === 0) {
      return querySelectorAllExt(elt, selector.slice(7), true)
    } else {
      return toArray(asParentNode(getRootNode(elt, !!global)).querySelectorAll(normalizeSelector(selector)))
    }
  }

  /**
   * @param {Node} start
   * @param {string} match
   * @param {boolean} global
   * @returns {Element}
   */
  var scanForwardQuery = function(start, match, global) {
    const results = asParentNode(getRootNode(start, global)).querySelectorAll(match)
    for (let i = 0; i < results.length; i++) {
      const elt = results[i]
      if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_PRECEDING) {
        return elt
      }
    }
  }

  /**
   * @param {Node} start
   * @param {string} match
   * @param {boolean} global
   * @returns {Element}
   */
  var scanBackwardsQuery = function(start, match, global) {
    const results = asParentNode(getRootNode(start, global)).querySelectorAll(match)
    for (let i = results.length - 1; i >= 0; i--) {
      const elt = results[i]
      if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_FOLLOWING) {
        return elt
      }
    }
  }

  /**
   * @param {Node|string} eltOrSelector
   * @param {string=} selector
   * @returns {Node|Window}
   */
  function querySelectorExt(eltOrSelector, selector) {
    if (typeof eltOrSelector !== 'string') {
      return querySelectorAllExt(eltOrSelector, selector)[0]
    } else {
      return querySelectorAllExt(getDocument().body, eltOrSelector)[0]
    }
  }

  /**
   * @template {EventTarget} T
   * @param {T|string} eltOrSelector
   * @param {T} [context]
   * @returns {Element|T|null}
   */
  function resolveTarget(eltOrSelector, context) {
    if (typeof eltOrSelector === 'string') {
      return find(asParentNode(context) || document, eltOrSelector)
    } else {
      return eltOrSelector
    }
  }

  /**
   * @typedef {keyof HTMLElementEventMap|string} AnyEventName
   */

  /**
   * @typedef {Object} EventArgs
   * @property {EventTarget} target
   * @property {AnyEventName} event
   * @property {EventListener} listener
   */

  /**
   * @param {EventTarget|AnyEventName} arg1
   * @param {AnyEventName|EventListener} arg2
   * @param {EventListener} [arg3]
   * @returns {EventArgs}
   */
  function processEventArgs(arg1, arg2, arg3) {
    if (isFunction(arg2)) {
      return {
        target: getDocument().body,
        event: asString(arg1),
        listener: arg2
      }
    } else {
      return {
        target: resolveTarget(arg1),
        event: asString(arg2),
        listener: arg3
      }
    }
  }

  /**
   * Adds an event listener to an element
   *
   * @see https://htmx.org/api/#on
   *
   * @param {EventTarget|string} arg1 the element to add the listener to | the event name to add the listener for
   * @param {string|EventListener} arg2 the event name to add the listener for | the listener to add
   * @param {EventListener} [arg3] the listener to add
   * @returns {EventListener}
   */
  function addEventListenerImpl(arg1, arg2, arg3) {
    ready(function() {
      const eventArgs = processEventArgs(arg1, arg2, arg3)
      eventArgs.target.addEventListener(eventArgs.event, eventArgs.listener)
    })
    const b = isFunction(arg2)
    return b ? arg2 : arg3
  }

  /**
   * Removes an event listener from an element
   *
   * @see https://htmx.org/api/#off
   *
   * @param {EventTarget|string} arg1 the element to remove the listener from | the event name to remove the listener from
   * @param {string|EventListener} arg2 the event name to remove the listener from | the listener to remove
   * @param {EventListener} [arg3] the listener to remove
   * @returns {EventListener}
   */
  function removeEventListenerImpl(arg1, arg2, arg3) {
    ready(function() {
      const eventArgs = processEventArgs(arg1, arg2, arg3)
      eventArgs.target.removeEventListener(eventArgs.event, eventArgs.listener)
    })
    return isFunction(arg2) ? arg2 : arg3
  }

  //= ===================================================================
  // Node processing
  //= ===================================================================

  const DUMMY_ELT = getDocument().createElement('output') // dummy element for bad selectors
  /**
   * @param {Element} elt
   * @param {string} attrName
   * @returns {(Node|Window)[]}
   */
  function findAttributeTargets(elt, attrName) {
    const attrTarget = getClosestAttributeValue(elt, attrName)
    if (attrTarget) {
      if (attrTarget === 'this') {
        return [findThisElement(elt, attrName)]
      } else {
        const result = querySelectorAllExt(elt, attrTarget)
        if (result.length === 0) {
          logError('The selector "' + attrTarget + '" on ' + attrName + ' returned no matches!')
          return [DUMMY_ELT]
        } else {
          return result
        }
      }
    }
  }

  /**
   * @param {Element} elt
   * @param {string} attribute
   * @returns {Element|null}
   */
  function findThisElement(elt, attribute) {
    return asElement(getClosestMatch(elt, function(elt) {
      return getAttributeValue(asElement(elt), attribute) != null
    }))
  }

  /**
   * @param {Element} elt
   * @returns {Node|Window|null}
   */
  function getTarget(elt) {
    const targetStr = getClosestAttributeValue(elt, 'hx-target')
    if (targetStr) {
      if (targetStr === 'this') {
        return findThisElement(elt, 'hx-target')
      } else {
        return querySelectorExt(elt, targetStr)
      }
    } else {
      const data = getInternalData(elt)
      if (data.boosted) {
        return getDocument().body
      } else {
        return elt
      }
    }
  }

  /**
   * @param {string} name
   * @returns {boolean}
   */
  function shouldSettleAttribute(name) {
    const attributesToSettle = htmx.config.attributesToSettle
    for (let i = 0; i < attributesToSettle.length; i++) {
      if (name === attributesToSettle[i]) {
        return true
      }
    }
    return false
  }

  /**
   * @param {Element} mergeTo
   * @param {Element} mergeFrom
   */
  function cloneAttributes(mergeTo, mergeFrom) {
    forEach(mergeTo.attributes, function(attr) {
      if (!mergeFrom.hasAttribute(attr.name) && shouldSettleAttribute(attr.name)) {
        mergeTo.removeAttribute(attr.name)
      }
    })
    forEach(mergeFrom.attributes, function(attr) {
      if (shouldSettleAttribute(attr.name)) {
        mergeTo.setAttribute(attr.name, attr.value)
      }
    })
  }

  /**
   * @param {HtmxSwapStyle} swapStyle
   * @param {Element} target
   * @returns {boolean}
   */
  function isInlineSwap(swapStyle, target) {
    const extensions = getExtensions(target)
    for (let i = 0; i < extensions.length; i++) {
      const extension = extensions[i]
      try {
        if (extension.isInlineSwap(swapStyle)) {
          return true
        }
      } catch (e) {
        logError(e)
      }
    }
    return swapStyle === 'outerHTML'
  }

  /**
   * @param {string} oobValue
   * @param {Element} oobElement
   * @param {HtmxSettleInfo} settleInfo
   * @returns
   */
  function oobSwap(oobValue, oobElement, settleInfo) {
    let selector = '#' + getRawAttribute(oobElement, 'id')
    /** @type HtmxSwapStyle */
    let swapStyle = 'outerHTML'
    if (oobValue === 'true') {
      // do nothing
    } else if (oobValue.indexOf(':') > 0) {
      swapStyle = oobValue.substr(0, oobValue.indexOf(':'))
      selector = oobValue.substr(oobValue.indexOf(':') + 1, oobValue.length)
    } else {
      swapStyle = oobValue
    }

    const targets = getDocument().querySelectorAll(selector)
    if (targets) {
      forEach(
        targets,
        function(target) {
          let fragment
          const oobElementClone = oobElement.cloneNode(true)
          fragment = getDocument().createDocumentFragment()
          fragment.appendChild(oobElementClone)
          if (!isInlineSwap(swapStyle, target)) {
            fragment = asParentNode(oobElementClone) // if this is not an inline swap, we use the content of the node, not the node itself
          }

          const beforeSwapDetails = { shouldSwap: true, target, fragment }
          if (!triggerEvent(target, 'htmx:oobBeforeSwap', beforeSwapDetails)) return

          target = beforeSwapDetails.target // allow re-targeting
          if (beforeSwapDetails.shouldSwap) {
            swapWithStyle(swapStyle, target, target, fragment, settleInfo)
          }
          forEach(settleInfo.elts, function(elt) {
            triggerEvent(elt, 'htmx:oobAfterSwap', beforeSwapDetails)
          })
        }
      )
      oobElement.parentNode.removeChild(oobElement)
    } else {
      oobElement.parentNode.removeChild(oobElement)
      triggerErrorEvent(getDocument().body, 'htmx:oobErrorNoTarget', { content: oobElement })
    }
    return oobValue
  }

  /**
   * @param {DocumentFragment} fragment
   */
  function handlePreservedElements(fragment) {
    forEach(findAll(fragment, '[hx-preserve], [data-hx-preserve]'), function(preservedElt) {
      const id = getAttributeValue(preservedElt, 'id')
      const oldElt = getDocument().getElementById(id)
      if (oldElt != null) {
        preservedElt.parentNode.replaceChild(oldElt, preservedElt)
      }
    })
  }

  /**
   * @param {Node} parentNode
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function handleAttributes(parentNode, fragment, settleInfo) {
    forEach(fragment.querySelectorAll('[id]'), function(newNode) {
      const id = getRawAttribute(newNode, 'id')
      if (id && id.length > 0) {
        const normalizedId = id.replace("'", "\\'")
        const normalizedTag = newNode.tagName.replace(':', '\\:')
        const parentElt = asParentNode(parentNode)
        const oldNode = parentElt && parentElt.querySelector(normalizedTag + "[id='" + normalizedId + "']")
        if (oldNode && oldNode !== parentElt) {
          const newAttributes = newNode.cloneNode()
          cloneAttributes(newNode, oldNode)
          settleInfo.tasks.push(function() {
            cloneAttributes(newNode, newAttributes)
          })
        }
      }
    })
  }

  /**
   * @param {Node} child
   * @returns {HtmxSettleTask}
   */
  function makeAjaxLoadTask(child) {
    return function() {
      removeClassFromElement(child, htmx.config.addedClass)
      processNode(asElement(child))
      processFocus(asParentNode(child))
      triggerEvent(child, 'htmx:load')
    }
  }

  /**
   * @param {ParentNode} child
   */
  function processFocus(child) {
    const autofocus = '[autofocus]'
    const autoFocusedElt = asHtmlElement(matches(child, autofocus) ? child : child.querySelector(autofocus))
    if (autoFocusedElt != null) {
      autoFocusedElt.focus()
    }
  }

  /**
   * @param {Node} parentNode
   * @param {Node} insertBefore
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function insertNodesBefore(parentNode, insertBefore, fragment, settleInfo) {
    handleAttributes(parentNode, fragment, settleInfo)
    while (fragment.childNodes.length > 0) {
      const child = fragment.firstChild
      addClassToElement(asElement(child), htmx.config.addedClass)
      parentNode.insertBefore(child, insertBefore)
      if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
        settleInfo.tasks.push(makeAjaxLoadTask(child))
      }
    }
  }

  /**
   * based on https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0,
   * derived from Java's string hashcode implementation
   * @param {string} string
   * @param {number} hash
   * @returns {number}
   */
  function stringHash(string, hash) {
    let char = 0
    while (char < string.length) {
      hash = (hash << 5) - hash + string.charCodeAt(char++) | 0 // bitwise or ensures we have a 32-bit int
    }
    return hash
  }

  /**
   * @param {Element} elt
   * @returns {number}
   */
  function attributeHash(elt) {
    let hash = 0
    // IE fix
    if (elt.attributes) {
      for (let i = 0; i < elt.attributes.length; i++) {
        const attribute = elt.attributes[i]
        if (attribute.value) { // only include attributes w/ actual values (empty is same as non-existent)
          hash = stringHash(attribute.name, hash)
          hash = stringHash(attribute.value, hash)
        }
      }
    }
    return hash
  }

  /**
   * @param {EventTarget} elt
   */
  function deInitOnHandlers(elt) {
    const internalData = getInternalData(elt)
    if (internalData.onHandlers) {
      for (let i = 0; i < internalData.onHandlers.length; i++) {
        const handlerInfo = internalData.onHandlers[i]
        removeEventListenerImpl(elt, handlerInfo.event, handlerInfo.listener)
      }
      delete internalData.onHandlers
    }
  }

  /**
   * @param {Node} element
   */
  function deInitNode(element) {
    const internalData = getInternalData(element)
    if (internalData.timeout) {
      clearTimeout(internalData.timeout)
    }
    if (internalData.listenerInfos) {
      forEach(internalData.listenerInfos, function(info) {
        if (info.on) {
          removeEventListenerImpl(info.on, info.trigger, info.listener)
        }
      })
    }
    deInitOnHandlers(element)
    forEach(Object.keys(internalData), function(key) { delete internalData[key] })
  }

  /**
   * @param {Node} element
   */
  function cleanUpElement(element) {
    triggerEvent(element, 'htmx:beforeCleanupElement')
    deInitNode(element)
    // @ts-ignore IE11 code
    // noinspection JSUnresolvedReference
    if (element.children) { // IE
      // @ts-ignore
      forEach(element.children, function(child) { cleanUpElement(child) })
    }
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapOuterHTML(target, fragment, settleInfo) {
    if (target instanceof Element && target.tagName === 'BODY') { // special case the body to innerHTML because DocumentFragments can't contain a body elt unfortunately
      return swapInnerHTML(target, fragment, settleInfo)
    }
    /** @type {Node} */
    let newElt
    const eltBeforeNewContent = target.previousSibling
    insertNodesBefore(parentElt(target), target, fragment, settleInfo)
    if (eltBeforeNewContent == null) {
      newElt = parentElt(target).firstChild
    } else {
      newElt = eltBeforeNewContent.nextSibling
    }
    settleInfo.elts = settleInfo.elts.filter(function(e) { return e !== target })
    while (newElt && newElt !== target) {
      if (newElt instanceof Element) {
        settleInfo.elts.push(newElt)
        newElt = newElt.nextElementSibling
      } else {
        newElt = null
      }
    }
    cleanUpElement(target)
    if (target instanceof Element) {
      target.remove()
    } else {
      target.parentNode.removeChild(target)
    }
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapAfterBegin(target, fragment, settleInfo) {
    return insertNodesBefore(target, target.firstChild, fragment, settleInfo)
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapBeforeBegin(target, fragment, settleInfo) {
    return insertNodesBefore(parentElt(target), target, fragment, settleInfo)
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapBeforeEnd(target, fragment, settleInfo) {
    return insertNodesBefore(target, null, fragment, settleInfo)
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapAfterEnd(target, fragment, settleInfo) {
    return insertNodesBefore(parentElt(target), target.nextSibling, fragment, settleInfo)
  }

  /**
   * @param {Node} target
   */
  function swapDelete(target) {
    cleanUpElement(target)
    return parentElt(target).removeChild(target)
  }

  /**
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapInnerHTML(target, fragment, settleInfo) {
    const firstChild = target.firstChild
    insertNodesBefore(target, firstChild, fragment, settleInfo)
    if (firstChild) {
      while (firstChild.nextSibling) {
        cleanUpElement(firstChild.nextSibling)
        target.removeChild(firstChild.nextSibling)
      }
      cleanUpElement(firstChild)
      target.removeChild(firstChild)
    }
  }

  /**
   * @param {HtmxSwapStyle} swapStyle
   * @param {Element} elt
   * @param {Node} target
   * @param {ParentNode} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function swapWithStyle(swapStyle, elt, target, fragment, settleInfo) {
    switch (swapStyle) {
      case 'none':
        return
      case 'outerHTML':
        swapOuterHTML(target, fragment, settleInfo)
        return
      case 'afterbegin':
        swapAfterBegin(target, fragment, settleInfo)
        return
      case 'beforebegin':
        swapBeforeBegin(target, fragment, settleInfo)
        return
      case 'beforeend':
        swapBeforeEnd(target, fragment, settleInfo)
        return
      case 'afterend':
        swapAfterEnd(target, fragment, settleInfo)
        return
      case 'delete':
        swapDelete(target)
        return
      default:
        var extensions = getExtensions(elt)
        for (let i = 0; i < extensions.length; i++) {
          const ext = extensions[i]
          try {
            const newElements = ext.handleSwap(swapStyle, target, fragment, settleInfo)
            if (newElements) {
              if (typeof newElements.length !== 'undefined') {
                // if handleSwap returns an array (like) of elements, we handle them
                for (let j = 0; j < newElements.length; j++) {
                  const child = newElements[j]
                  if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
                    settleInfo.tasks.push(makeAjaxLoadTask(child))
                  }
                }
              }
              return
            }
          } catch (e) {
            logError(e)
          }
        }
        if (swapStyle === 'innerHTML') {
          swapInnerHTML(target, fragment, settleInfo)
        } else {
          swapWithStyle(htmx.config.defaultSwapStyle, elt, target, fragment, settleInfo)
        }
    }
  }

  /**
   * @param {DocumentFragment} fragment
   * @param {HtmxSettleInfo} settleInfo
   */
  function findAndSwapOobElements(fragment, settleInfo) {
    forEach(findAll(fragment, '[hx-swap-oob], [data-hx-swap-oob]'), function(oobElement) {
      if (htmx.config.allowNestedOobSwaps || oobElement.parentElement === null) {
        const oobValue = getAttributeValue(oobElement, 'hx-swap-oob')
        if (oobValue != null) {
          oobSwap(oobValue, oobElement, settleInfo)
        }
      } else {
        oobElement.removeAttribute('hx-swap-oob')
        oobElement.removeAttribute('data-hx-swap-oob')
      }
    })
  }

  /**
   * Implements complete swapping pipeline, including: focus and selection preservation,
   * title updates, scroll, OOB swapping, normal swapping and settling
   * @param {string|Element} target
   * @param {string} content
   * @param {HtmxSwapSpecification} swapSpec
   * @param {SwapOptions} [swapOptions]
   */
  function swap(target, content, swapSpec, swapOptions) {
    if (!swapOptions) {
      swapOptions = {}
    }

    target = resolveTarget(target)

    // preserve focus and selection
    const activeElt = document.activeElement
    let selectionInfo = {}
    try {
      selectionInfo = {
        elt: activeElt,
        // @ts-ignore
        start: activeElt ? activeElt.selectionStart : null,
        // @ts-ignore
        end: activeElt ? activeElt.selectionEnd : null
      }
    } catch (e) {
      // safari issue - see https://github.com/microsoft/playwright/issues/5894
    }
    const settleInfo = makeSettleInfo(target)

    // For text content swaps, don't parse the response as HTML, just insert it
    if (swapSpec.swapStyle === 'textContent') {
      target.textContent = content
    // Otherwise, make the fragment and process it
    } else {
      let fragment = makeFragment(content)

      settleInfo.title = fragment.title

      // select-oob swaps
      if (swapOptions.selectOOB) {
        const oobSelectValues = swapOptions.selectOOB.split(',')
        for (let i = 0; i < oobSelectValues.length; i++) {
          const oobSelectValue = oobSelectValues[i].split(':', 2)
          let id = oobSelectValue[0].trim()
          if (id.indexOf('#') === 0) {
            id = id.substring(1)
          }
          const oobValue = oobSelectValue[1] || 'true'
          const oobElement = fragment.querySelector('#' + id)
          if (oobElement) {
            oobSwap(oobValue, oobElement, settleInfo)
          }
        }
      }
      // oob swaps
      findAndSwapOobElements(fragment, settleInfo)
      forEach(findAll(fragment, 'template'), /** @param {HTMLTemplateElement} template */function(template) {
        findAndSwapOobElements(template.content, settleInfo)
        if (template.content.childElementCount === 0 && template.content.textContent.trim() === '') {
        // Avoid polluting the DOM with empty templates that were only used to encapsulate oob swap
          template.remove()
        }
      })

      // normal swap
      if (swapOptions.select) {
        const newFragment = getDocument().createDocumentFragment()
        forEach(fragment.querySelectorAll(swapOptions.select), function(node) {
          newFragment.appendChild(node)
        })
        fragment = newFragment
      }
      handlePreservedElements(fragment)
      swapWithStyle(swapSpec.swapStyle, swapOptions.contextElement, target, fragment, settleInfo)
    }

    // apply saved focus and selection information to swapped content
    if (selectionInfo.elt &&
      !bodyContains(selectionInfo.elt) &&
      getRawAttribute(selectionInfo.elt, 'id')) {
      const newActiveElt = document.getElementById(getRawAttribute(selectionInfo.elt, 'id'))
      const focusOptions = { preventScroll: swapSpec.focusScroll !== undefined ? !swapSpec.focusScroll : !htmx.config.defaultFocusScroll }
      if (newActiveElt) {
        // @ts-ignore
        if (selectionInfo.start && newActiveElt.setSelectionRange) {
          try {
            // @ts-ignore
            newActiveElt.setSelectionRange(selectionInfo.start, selectionInfo.end)
          } catch (e) {
            // the setSelectionRange method is present on fields that don't support it, so just let this fail
          }
        }
        newActiveElt.focus(focusOptions)
      }
    }

    target.classList.remove(htmx.config.swappingClass)
    forEach(settleInfo.elts, function(elt) {
      if (elt.classList) {
        elt.classList.add(htmx.config.settlingClass)
      }
      triggerEvent(elt, 'htmx:afterSwap', swapOptions.eventInfo)
    })
    if (swapOptions.afterSwapCallback) {
      swapOptions.afterSwapCallback()
    }

    // merge in new title after swap but before settle
    if (!swapSpec.ignoreTitle) {
      handleTitle(settleInfo.title)
    }

    // settle
    const doSettle = function() {
      forEach(settleInfo.tasks, function(task) {
        task.call()
      })
      forEach(settleInfo.elts, function(elt) {
        if (elt.classList) {
          elt.classList.remove(htmx.config.settlingClass)
        }
        triggerEvent(elt, 'htmx:afterSettle', swapOptions.eventInfo)
      })

      if (swapOptions.anchor) {
        const anchorTarget = asElement(resolveTarget('#' + swapOptions.anchor))
        if (anchorTarget) {
          anchorTarget.scrollIntoView({ block: 'start', behavior: 'auto' })
        }
      }

      updateScrollState(settleInfo.elts, swapSpec)
      if (swapOptions.afterSettleCallback) {
        swapOptions.afterSettleCallback()
      }
    }

    if (swapSpec.settleDelay > 0) {
      getWindow().setTimeout(doSettle, swapSpec.settleDelay)
    } else {
      doSettle()
    }
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @param {string} header
   * @param {EventTarget} elt
   */
  function handleTriggerHeader(xhr, header, elt) {
    const triggerBody = xhr.getResponseHeader(header)
    if (triggerBody.indexOf('{') === 0) {
      const triggers = parseJSON(triggerBody)
      for (const eventName in triggers) {
        if (triggers.hasOwnProperty(eventName)) {
          let detail = triggers[eventName]
          if (!isRawObject(detail)) {
            detail = { value: detail }
          }
          triggerEvent(elt, eventName, detail)
        }
      }
    } else {
      const eventNames = triggerBody.split(',')
      for (let i = 0; i < eventNames.length; i++) {
        triggerEvent(elt, eventNames[i].trim(), [])
      }
    }
  }

  const WHITESPACE = /\s/
  const WHITESPACE_OR_COMMA = /[\s,]/
  const SYMBOL_START = /[_$a-zA-Z]/
  const SYMBOL_CONT = /[_$a-zA-Z0-9]/
  const STRINGISH_START = ['"', "'", '/']
  const NOT_WHITESPACE = /[^\s]/
  const COMBINED_SELECTOR_START = /[{(]/
  const COMBINED_SELECTOR_END = /[})]/

  /**
   * @param {string} str
   * @returns {string[]}
   */
  function tokenizeString(str) {
    /** @type string[] */
    const tokens = []
    let position = 0
    while (position < str.length) {
      if (SYMBOL_START.exec(str.charAt(position))) {
        var startPosition = position
        while (SYMBOL_CONT.exec(str.charAt(position + 1))) {
          position++
        }
        tokens.push(str.substr(startPosition, position - startPosition + 1))
      } else if (STRINGISH_START.indexOf(str.charAt(position)) !== -1) {
        const startChar = str.charAt(position)
        var startPosition = position
        position++
        while (position < str.length && str.charAt(position) !== startChar) {
          if (str.charAt(position) === '\\') {
            position++
          }
          position++
        }
        tokens.push(str.substr(startPosition, position - startPosition + 1))
      } else {
        const symbol = str.charAt(position)
        tokens.push(symbol)
      }
      position++
    }
    return tokens
  }

  /**
   * @param {string} token
   * @param {string|null} last
   * @param {string} paramName
   * @returns {boolean}
   */
  function isPossibleRelativeReference(token, last, paramName) {
    return SYMBOL_START.exec(token.charAt(0)) &&
      token !== 'true' &&
      token !== 'false' &&
      token !== 'this' &&
      token !== paramName &&
      last !== '.'
  }

  /**
   * @param {EventTarget|string} elt
   * @param {string[]} tokens
   * @param {string} paramName
   * @returns {ConditionalFunction|null}
   */
  function maybeGenerateConditional(elt, tokens, paramName) {
    if (tokens[0] === '[') {
      tokens.shift()
      let bracketCount = 1
      let conditionalSource = ' return (function(' + paramName + '){ return ('
      let last = null
      while (tokens.length > 0) {
        const token = tokens[0]
        // @ts-ignore For some reason tsc doesn't understand the shift call, and thinks we're comparing the same value here, i.e. '[' vs ']'
        if (token === ']') {
          bracketCount--
          if (bracketCount === 0) {
            if (last === null) {
              conditionalSource = conditionalSource + 'true'
            }
            tokens.shift()
            conditionalSource += ')})'
            try {
              const conditionFunction = maybeEval(elt, function() {
                return Function(conditionalSource)()
              },
              function() { return true })
              conditionFunction.source = conditionalSource
              return conditionFunction
            } catch (e) {
              triggerErrorEvent(getDocument().body, 'htmx:syntax:error', { error: e, source: conditionalSource })
              return null
            }
          }
        } else if (token === '[') {
          bracketCount++
        }
        if (isPossibleRelativeReference(token, last, paramName)) {
          conditionalSource += '((' + paramName + '.' + token + ') ? (' + paramName + '.' + token + ') : (window.' + token + '))'
        } else {
          conditionalSource = conditionalSource + token
        }
        last = tokens.shift()
      }
    }
  }

  /**
   * @param {string[]} tokens
   * @param {RegExp} match
   * @returns {string}
   */
  function consumeUntil(tokens, match) {
    let result = ''
    while (tokens.length > 0 && !match.test(tokens[0])) {
      result += tokens.shift()
    }
    return result
  }

  /**
   * @param {string[]} tokens
   * @returns {string}
   */
  function consumeCSSSelector(tokens) {
    let result
    if (tokens.length > 0 && COMBINED_SELECTOR_START.test(tokens[0])) {
      tokens.shift()
      result = consumeUntil(tokens, COMBINED_SELECTOR_END).trim()
      tokens.shift()
    } else {
      result = consumeUntil(tokens, WHITESPACE_OR_COMMA)
    }
    return result
  }

  const INPUT_SELECTOR = 'input, textarea, select'

  /**
   * @param {Element} elt
   * @param {string} explicitTrigger
   * @param {Object} cache for trigger specs
   * @returns {HtmxTriggerSpecification[]}
   */
  function parseAndCacheTrigger(elt, explicitTrigger, cache) {
    /** @type HtmxTriggerSpecification[] */
    const triggerSpecs = []
    const tokens = tokenizeString(explicitTrigger)
    do {
      consumeUntil(tokens, NOT_WHITESPACE)
      const initialLength = tokens.length
      const trigger = consumeUntil(tokens, /[,\[\s]/)
      if (trigger !== '') {
        if (trigger === 'every') {
          /** @type HtmxTriggerSpecification */
          const every = { trigger: 'every' }
          consumeUntil(tokens, NOT_WHITESPACE)
          every.pollInterval = parseInterval(consumeUntil(tokens, /[,\[\s]/))
          consumeUntil(tokens, NOT_WHITESPACE)
          var eventFilter = maybeGenerateConditional(elt, tokens, 'event')
          if (eventFilter) {
            every.eventFilter = eventFilter
          }
          triggerSpecs.push(every)
        } else {
          /** @type HtmxTriggerSpecification */
          const triggerSpec = { trigger }
          var eventFilter = maybeGenerateConditional(elt, tokens, 'event')
          if (eventFilter) {
            triggerSpec.eventFilter = eventFilter
          }
          while (tokens.length > 0 && tokens[0] !== ',') {
            consumeUntil(tokens, NOT_WHITESPACE)
            const token = tokens.shift()
            if (token === 'changed') {
              triggerSpec.changed = true
            } else if (token === 'once') {
              triggerSpec.once = true
            } else if (token === 'consume') {
              triggerSpec.consume = true
            } else if (token === 'delay' && tokens[0] === ':') {
              tokens.shift()
              triggerSpec.delay = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA))
            } else if (token === 'from' && tokens[0] === ':') {
              tokens.shift()
              if (COMBINED_SELECTOR_START.test(tokens[0])) {
                var from_arg = consumeCSSSelector(tokens)
              } else {
                var from_arg = consumeUntil(tokens, WHITESPACE_OR_COMMA)
                if (from_arg === 'closest' || from_arg === 'find' || from_arg === 'next' || from_arg === 'previous') {
                  tokens.shift()
                  const selector = consumeCSSSelector(tokens)
                  // `next` and `previous` allow a selector-less syntax
                  if (selector.length > 0) {
                    from_arg += ' ' + selector
                  }
                }
              }
              triggerSpec.from = from_arg
            } else if (token === 'target' && tokens[0] === ':') {
              tokens.shift()
              triggerSpec.target = consumeCSSSelector(tokens)
            } else if (token === 'throttle' && tokens[0] === ':') {
              tokens.shift()
              triggerSpec.throttle = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA))
            } else if (token === 'queue' && tokens[0] === ':') {
              tokens.shift()
              triggerSpec.queue = consumeUntil(tokens, WHITESPACE_OR_COMMA)
            } else if (token === 'root' && tokens[0] === ':') {
              tokens.shift()
              triggerSpec[token] = consumeCSSSelector(tokens)
            } else if (token === 'threshold' && tokens[0] === ':') {
              tokens.shift()
              triggerSpec[token] = consumeUntil(tokens, WHITESPACE_OR_COMMA)
            } else {
              triggerErrorEvent(elt, 'htmx:syntax:error', { token: tokens.shift() })
            }
          }
          triggerSpecs.push(triggerSpec)
        }
      }
      if (tokens.length === initialLength) {
        triggerErrorEvent(elt, 'htmx:syntax:error', { token: tokens.shift() })
      }
      consumeUntil(tokens, NOT_WHITESPACE)
    } while (tokens[0] === ',' && tokens.shift())
    if (cache) {
      cache[explicitTrigger] = triggerSpecs
    }
    return triggerSpecs
  }

  /**
   * @param {Element} elt
   * @returns {HtmxTriggerSpecification[]}
   */
  function getTriggerSpecs(elt) {
    const explicitTrigger = getAttributeValue(elt, 'hx-trigger')
    let triggerSpecs = []
    if (explicitTrigger) {
      const cache = htmx.config.triggerSpecsCache
      triggerSpecs = (cache && cache[explicitTrigger]) || parseAndCacheTrigger(elt, explicitTrigger, cache)
    }

    if (triggerSpecs.length > 0) {
      return triggerSpecs
    } else if (matches(elt, 'form')) {
      return [{ trigger: 'submit' }]
    } else if (matches(elt, 'input[type="button"], input[type="submit"]')) {
      return [{ trigger: 'click' }]
    } else if (matches(elt, INPUT_SELECTOR)) {
      return [{ trigger: 'change' }]
    } else {
      return [{ trigger: 'click' }]
    }
  }

  /**
   * @param {Element} elt
   */
  function cancelPolling(elt) {
    getInternalData(elt).cancelled = true
  }

  /**
   * @param {Element} elt
   * @param {TriggerHandler} handler
   * @param {HtmxTriggerSpecification} spec
   */
  function processPolling(elt, handler, spec) {
    const nodeData = getInternalData(elt)
    nodeData.timeout = getWindow().setTimeout(function() {
      if (bodyContains(elt) && nodeData.cancelled !== true) {
        if (!maybeFilterEvent(spec, elt, makeEvent('hx:poll:trigger', {
          triggerSpec: spec,
          target: elt
        }))) {
          handler(elt)
        }
        processPolling(elt, handler, spec)
      }
    }, spec.pollInterval)
  }

  /**
   * @param {HTMLAnchorElement} elt
   * @returns {boolean}
   */
  function isLocalLink(elt) {
    return location.hostname === elt.hostname &&
      getRawAttribute(elt, 'href') &&
      getRawAttribute(elt, 'href').indexOf('#') !== 0
  }

  /**
   * @param {Element} elt
   */
  function eltIsDisabled(elt) {
    return closest(elt, htmx.config.disableSelector)
  }

  /**
   * @param {Element} elt
   * @param {HtmxNodeInternalData} nodeData
   * @param {HtmxTriggerSpecification[]} triggerSpecs
   */
  function boostElement(elt, nodeData, triggerSpecs) {
    if ((elt instanceof HTMLAnchorElement && isLocalLink(elt) && (elt.target === '' || elt.target === '_self')) || elt.tagName === 'FORM') {
      nodeData.boosted = true
      let verb, path
      if (elt.tagName === 'A') {
        verb = 'get'
        path = getRawAttribute(elt, 'href')
      } else {
        const rawAttribute = getRawAttribute(elt, 'method')
        verb = rawAttribute ? rawAttribute.toLowerCase() : 'get'
        if (verb === 'get') {
        }
        path = getRawAttribute(elt, 'action')
      }
      triggerSpecs.forEach(function(triggerSpec) {
        addEventListener(elt, function(node, evt) {
          const elt = asElement(node)
          if (eltIsDisabled(elt)) {
            cleanUpElement(elt)
            return
          }
          issueAjaxRequest(verb, path, elt, evt)
        }, nodeData, triggerSpec, true)
      })
    }
  }

  /**
   * @param {Event} evt
   * @param {Node} node
   * @returns {boolean}
   */
  function shouldCancel(evt, node) {
    const elt = asElement(node)
    if (!elt) {
      return false
    }
    if (evt.type === 'submit' || evt.type === 'click') {
      if (elt.tagName === 'FORM') {
        return true
      }
      if (matches(elt, 'input[type="submit"], button') && closest(elt, 'form') !== null) {
        return true
      }
      if (elt instanceof HTMLAnchorElement && elt.href &&
        (elt.getAttribute('href') === '#' || elt.getAttribute('href').indexOf('#') !== 0)) {
        return true
      }
    }
    return false
  }

  /**
   * @param {Node} elt
   * @param {Event|MouseEvent|KeyboardEvent|TouchEvent} evt
   * @returns {boolean}
   */
  function ignoreBoostedAnchorCtrlClick(elt, evt) {
    return getInternalData(elt).boosted && elt instanceof HTMLAnchorElement && evt.type === 'click' &&
      // @ts-ignore this will resolve to undefined for events that don't define those properties, which is fine
      (evt.ctrlKey || evt.metaKey)
  }

  /**
   * @param {HtmxTriggerSpecification} triggerSpec
   * @param {Node} elt
   * @param {Event} evt
   * @returns {boolean}
   */
  function maybeFilterEvent(triggerSpec, elt, evt) {
    const eventFilter = triggerSpec.eventFilter
    if (eventFilter) {
      try {
        return eventFilter.call(elt, evt) !== true
      } catch (e) {
        const source = eventFilter.source
        triggerErrorEvent(getDocument().body, 'htmx:eventFilter:error', { error: e, source })
        return true
      }
    }
    return false
  }

  /**
   * @param {Node} elt
   * @param {TriggerHandler} handler
   * @param {HtmxNodeInternalData} nodeData
   * @param {HtmxTriggerSpecification} triggerSpec
   * @param {boolean} [explicitCancel]
   */
  function addEventListener(elt, handler, nodeData, triggerSpec, explicitCancel) {
    const elementData = getInternalData(elt)
    /** @type {(Node|Window)[]} */
    let eltsToListenOn
    if (triggerSpec.from) {
      eltsToListenOn = querySelectorAllExt(elt, triggerSpec.from)
    } else {
      eltsToListenOn = [elt]
    }
    // store the initial values of the elements, so we can tell if they change
    if (triggerSpec.changed) {
      eltsToListenOn.forEach(function(eltToListenOn) {
        const eltToListenOnData = getInternalData(eltToListenOn)
        // @ts-ignore value will be undefined for non-input elements, which is fine
        eltToListenOnData.lastValue = eltToListenOn.value
      })
    }
    forEach(eltsToListenOn, function(eltToListenOn) {
      /** @type EventListener */
      const eventListener = function(evt) {
        if (!bodyContains(elt)) {
          eltToListenOn.removeEventListener(triggerSpec.trigger, eventListener)
          return
        }
        if (ignoreBoostedAnchorCtrlClick(elt, evt)) {
          return
        }
        if (explicitCancel || shouldCancel(evt, elt)) {
          evt.preventDefault()
        }
        if (maybeFilterEvent(triggerSpec, elt, evt)) {
          return
        }
        const eventData = getInternalData(evt)
        eventData.triggerSpec = triggerSpec
        if (eventData.handledFor == null) {
          eventData.handledFor = []
        }
        if (eventData.handledFor.indexOf(elt) < 0) {
          eventData.handledFor.push(elt)
          if (triggerSpec.consume) {
            evt.stopPropagation()
          }
          if (triggerSpec.target && evt.target) {
            if (!matches(asElement(evt.target), triggerSpec.target)) {
              return
            }
          }
          if (triggerSpec.once) {
            if (elementData.triggeredOnce) {
              return
            } else {
              elementData.triggeredOnce = true
            }
          }
          if (triggerSpec.changed) {
            const eltToListenOnData = getInternalData(eltToListenOn)
            // @ts-ignore value will be undefined for non-input elements, which is fine
            const value = eltToListenOn.value
            if (eltToListenOnData.lastValue === value) {
              return
            }
            eltToListenOnData.lastValue = value
          }
          if (elementData.delayed) {
            clearTimeout(elementData.delayed)
          }
          if (elementData.throttle) {
            return
          }

          if (triggerSpec.throttle > 0) {
            if (!elementData.throttle) {
              handler(elt, evt)
              elementData.throttle = getWindow().setTimeout(function() {
                elementData.throttle = null
              }, triggerSpec.throttle)
            }
          } else if (triggerSpec.delay > 0) {
            elementData.delayed = getWindow().setTimeout(function() { handler(elt, evt) }, triggerSpec.delay)
          } else {
            triggerEvent(elt, 'htmx:trigger')
            handler(elt, evt)
          }
        }
      }
      if (nodeData.listenerInfos == null) {
        nodeData.listenerInfos = []
      }
      nodeData.listenerInfos.push({
        trigger: triggerSpec.trigger,
        listener: eventListener,
        on: eltToListenOn
      })
      eltToListenOn.addEventListener(triggerSpec.trigger, eventListener)
    })
  }

  let windowIsScrolling = false // used by initScrollHandler
  let scrollHandler = null
  function initScrollHandler() {
    if (!scrollHandler) {
      scrollHandler = function() {
        windowIsScrolling = true
      }
      window.addEventListener('scroll', scrollHandler)
      setInterval(function() {
        if (windowIsScrolling) {
          windowIsScrolling = false
          forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"), function(elt) {
            maybeReveal(elt)
          })
        }
      }, 200)
    }
  }

  /**
   * @param {Element} elt
   */
  function maybeReveal(elt) {
    if (!hasAttribute(elt, 'data-hx-revealed') && isScrolledIntoView(elt)) {
      elt.setAttribute('data-hx-revealed', 'true')
      const nodeData = getInternalData(elt)
      if (nodeData.initHash) {
        triggerEvent(elt, 'revealed')
      } else {
        // if the node isn't initialized, wait for it before triggering the request
        elt.addEventListener('htmx:afterProcessNode', function() { triggerEvent(elt, 'revealed') }, { once: true })
      }
    }
  }

  //= ===================================================================

  /**
   * @param {Element} elt
   * @param {TriggerHandler} handler
   * @param {HtmxNodeInternalData} nodeData
   * @param {number} delay
   */
  function loadImmediately(elt, handler, nodeData, delay) {
    const load = function() {
      if (!nodeData.loaded) {
        nodeData.loaded = true
        handler(elt)
      }
    }
    if (delay > 0) {
      getWindow().setTimeout(load, delay)
    } else {
      load()
    }
  }

  /**
   * @param {Element} elt
   * @param {HtmxNodeInternalData} nodeData
   * @param {HtmxTriggerSpecification[]} triggerSpecs
   * @returns {boolean}
   */
  function processVerbs(elt, nodeData, triggerSpecs) {
    let explicitAction = false
    forEach(VERBS, function(verb) {
      if (hasAttribute(elt, 'hx-' + verb)) {
        const path = getAttributeValue(elt, 'hx-' + verb)
        explicitAction = true
        nodeData.path = path
        nodeData.verb = verb
        triggerSpecs.forEach(function(triggerSpec) {
          addTriggerHandler(elt, triggerSpec, nodeData, function(node, evt) {
            const elt = asElement(node)
            if (closest(elt, htmx.config.disableSelector)) {
              cleanUpElement(elt)
              return
            }
            issueAjaxRequest(verb, path, elt, evt)
          })
        })
      }
    })
    return explicitAction
  }

  /**
   * @callback TriggerHandler
   * @param {Node} elt
   * @param {Event} [evt]
   */

  /**
   * @param {Node} elt
   * @param {HtmxTriggerSpecification} triggerSpec
   * @param {HtmxNodeInternalData} nodeData
   * @param {TriggerHandler} handler
   */
  function addTriggerHandler(elt, triggerSpec, nodeData, handler) {
    if (triggerSpec.trigger === 'revealed') {
      initScrollHandler()
      addEventListener(elt, handler, nodeData, triggerSpec)
      maybeReveal(asElement(elt))
    } else if (triggerSpec.trigger === 'intersect') {
      const observerOptions = {}
      if (triggerSpec.root) {
        observerOptions.root = querySelectorExt(elt, triggerSpec.root)
      }
      if (triggerSpec.threshold) {
        observerOptions.threshold = parseFloat(triggerSpec.threshold)
      }
      const observer = new IntersectionObserver(function(entries) {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i]
          if (entry.isIntersecting) {
            triggerEvent(elt, 'intersect')
            break
          }
        }
      }, observerOptions)
      observer.observe(asElement(elt))
      addEventListener(asElement(elt), handler, nodeData, triggerSpec)
    } else if (triggerSpec.trigger === 'load') {
      if (!maybeFilterEvent(triggerSpec, elt, makeEvent('load', { elt }))) {
        loadImmediately(asElement(elt), handler, nodeData, triggerSpec.delay)
      }
    } else if (triggerSpec.pollInterval > 0) {
      nodeData.polling = true
      processPolling(asElement(elt), handler, triggerSpec)
    } else {
      addEventListener(elt, handler, nodeData, triggerSpec)
    }
  }

  /**
   * @param {Node} node
   * @returns {boolean}
   */
  function shouldProcessHxOn(node) {
    const elt = asElement(node)
    if (!elt) {
      return false
    }
    const attributes = elt.attributes
    for (let j = 0; j < attributes.length; j++) {
      const attrName = attributes[j].name
      if (startsWith(attrName, 'hx-on:') || startsWith(attrName, 'data-hx-on:') ||
        startsWith(attrName, 'hx-on-') || startsWith(attrName, 'data-hx-on-')) {
        return true
      }
    }
    return false
  }

  /**
   * @param {Node} elt
   * @returns {Element[]}
   */
  const HX_ON_QUERY = new XPathEvaluator()
    .createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or' +
      ' starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]')

  function processHXOnRoot(elt, elements) {
    if (shouldProcessHxOn(elt)) {
      elements.push(asElement(elt))
    }
    const iter = HX_ON_QUERY.evaluate(elt)
    let node = null
    while (node = iter.iterateNext()) elements.push(asElement(node))
  }

  function findHxOnWildcardElements(elt) {
    /** @type {Element[]} */
    const elements = []
    if (elt instanceof DocumentFragment) {
      for (const child of elt.childNodes) {
        processHXOnRoot(child, elements)
      }
    } else {
      processHXOnRoot(elt, elements)
    }
    return elements
  }

  /**
   * @param {Element} elt
   * @returns {NodeListOf<Element>|[]}
   */
  function findElementsToProcess(elt) {
    if (elt.querySelectorAll) {
      const boostedSelector = ', [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]'

      const extensionSelectors = []
      for (const e in extensions) {
        const extension = extensions[e]
        if (extension.getSelectors) {
          var selectors = extension.getSelectors()
          if (selectors) {
            extensionSelectors.push(selectors)
          }
        }
      }

      const results = elt.querySelectorAll(VERB_SELECTOR + boostedSelector + ", form, [type='submit']," +
        ' [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]' + extensionSelectors.flat().map(s => ', ' + s).join(''))

      return results
    } else {
      return []
    }
  }

  /**
   * Handle submit buttons/inputs that have the form attribute set
   * see https://developer.mozilla.org/docs/Web/HTML/Element/button
   * @param {Event} evt
   */
  function maybeSetLastButtonClicked(evt) {
    const elt = /** @type {HTMLButtonElement|HTMLInputElement} */ (closest(asElement(evt.target), "button, input[type='submit']"))
    const internalData = getRelatedFormData(evt)
    if (internalData) {
      internalData.lastButtonClicked = elt
    }
  }

  /**
   * @param {Event} evt
   */
  function maybeUnsetLastButtonClicked(evt) {
    const internalData = getRelatedFormData(evt)
    if (internalData) {
      internalData.lastButtonClicked = null
    }
  }

  /**
   * @param {Event} evt
   * @returns {HtmxNodeInternalData|undefined}
   */
  function getRelatedFormData(evt) {
    const elt = closest(asElement(evt.target), "button, input[type='submit']")
    if (!elt) {
      return
    }
    const form = resolveTarget('#' + getRawAttribute(elt, 'form'), elt.getRootNode()) || closest(elt, 'form')
    if (!form) {
      return
    }
    return getInternalData(form)
  }

  /**
   * @param {EventTarget} elt
   */
  function initButtonTracking(elt) {
    // need to handle both click and focus in:
    //   focusin - in case someone tabs in to a button and hits the space bar
    //   click - on OSX buttons do not focus on click see https://bugs.webkit.org/show_bug.cgi?id=13724
    elt.addEventListener('click', maybeSetLastButtonClicked)
    elt.addEventListener('focusin', maybeSetLastButtonClicked)
    elt.addEventListener('focusout', maybeUnsetLastButtonClicked)
  }

  /**
   * @param {Element} elt
   * @param {string} eventName
   * @param {string} code
   */
  function addHxOnEventHandler(elt, eventName, code) {
    const nodeData = getInternalData(elt)
    if (!Array.isArray(nodeData.onHandlers)) {
      nodeData.onHandlers = []
    }
    let func
    /** @type EventListener */
    const listener = function(e) {
      maybeEval(elt, function() {
        if (eltIsDisabled(elt)) {
          return
        }
        if (!func) {
          func = new Function('event', code)
        }
        func.call(elt, e)
      })
    }
    elt.addEventListener(eventName, listener)
    nodeData.onHandlers.push({ event: eventName, listener })
  }

  /**
   * @param {Element} elt
   */
  function processHxOnWildcard(elt) {
    // wipe any previous on handlers so that this function takes precedence
    deInitOnHandlers(elt)

    for (let i = 0; i < elt.attributes.length; i++) {
      const name = elt.attributes[i].name
      const value = elt.attributes[i].value
      if (startsWith(name, 'hx-on') || startsWith(name, 'data-hx-on')) {
        const afterOnPosition = name.indexOf('-on') + 3
        const nextChar = name.slice(afterOnPosition, afterOnPosition + 1)
        if (nextChar === '-' || nextChar === ':') {
          let eventName = name.slice(afterOnPosition + 1)
          // if the eventName starts with a colon or dash, prepend "htmx" for shorthand support
          if (startsWith(eventName, ':')) {
            eventName = 'htmx' + eventName
          } else if (startsWith(eventName, '-')) {
            eventName = 'htmx:' + eventName.slice(1)
          } else if (startsWith(eventName, 'htmx-')) {
            eventName = 'htmx:' + eventName.slice(5)
          }

          addHxOnEventHandler(elt, eventName, value)
        }
      }
    }
  }

  /**
   * @param {Element|HTMLInputElement} elt
   */
  function initNode(elt) {
    if (closest(elt, htmx.config.disableSelector)) {
      cleanUpElement(elt)
      return
    }
    const nodeData = getInternalData(elt)
    if (nodeData.initHash !== attributeHash(elt)) {
      // clean up any previously processed info
      deInitNode(elt)

      nodeData.initHash = attributeHash(elt)

      triggerEvent(elt, 'htmx:beforeProcessNode')

      // @ts-ignore value will be undefined for non-input elements, which is fine
      if (elt.value) {
        // @ts-ignore
        nodeData.lastValue = elt.value
      }

      const triggerSpecs = getTriggerSpecs(elt)
      const hasExplicitHttpAction = processVerbs(elt, nodeData, triggerSpecs)

      if (!hasExplicitHttpAction) {
        if (getClosestAttributeValue(elt, 'hx-boost') === 'true') {
          boostElement(elt, nodeData, triggerSpecs)
        } else if (hasAttribute(elt, 'hx-trigger')) {
          triggerSpecs.forEach(function(triggerSpec) {
            // For "naked" triggers, don't do anything at all
            addTriggerHandler(elt, triggerSpec, nodeData, function() {
            })
          })
        }
      }

      // Handle submit buttons/inputs that have the form attribute set
      // see https://developer.mozilla.org/docs/Web/HTML/Element/button
      if (elt.tagName === 'FORM' || (getRawAttribute(elt, 'type') === 'submit' && hasAttribute(elt, 'form'))) {
        initButtonTracking(elt)
      }

      triggerEvent(elt, 'htmx:afterProcessNode')
    }
  }

  /**
   * Processes new content, enabling htmx behavior. This can be useful if you have content that is added to the DOM outside of the normal htmx request cycle but still want htmx attributes to work.
   *
   * @see https://htmx.org/api/#process
   *
   * @param {Element|string} elt element to process
   */
  function processNode(elt) {
    elt = resolveTarget(elt)
    if (closest(elt, htmx.config.disableSelector)) {
      cleanUpElement(elt)
      return
    }
    initNode(elt)
    forEach(findElementsToProcess(elt), function(child) { initNode(child) })
    forEach(findHxOnWildcardElements(elt), processHxOnWildcard)
  }

  //= ===================================================================
  // Event/Log Support
  //= ===================================================================

  /**
   * @param {string} str
   * @returns {string}
   */
  function kebabEventName(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
  }

  /**
   * @param {string} eventName
   * @param {any} detail
   * @returns {CustomEvent}
   */
  function makeEvent(eventName, detail) {
    let evt
    if (window.CustomEvent && typeof window.CustomEvent === 'function') {
      // TODO: `composed: true` here is a hack to make global event handlers work with events in shadow DOM
      // This breaks expected encapsulation but needs to be here until decided otherwise by core devs
      evt = new CustomEvent(eventName, { bubbles: true, cancelable: true, composed: true, detail })
    } else {
      evt = getDocument().createEvent('CustomEvent')
      evt.initCustomEvent(eventName, true, true, detail)
    }
    return evt
  }

  /**
   * @param {EventTarget|string} elt
   * @param {string} eventName
   * @param {any=} detail
   */
  function triggerErrorEvent(elt, eventName, detail) {
    triggerEvent(elt, eventName, mergeObjects({ error: eventName }, detail))
  }

  /**
   * @param {string} eventName
   * @returns {boolean}
   */
  function ignoreEventForLogging(eventName) {
    return eventName === 'htmx:afterProcessNode'
  }

  /**
   * `withExtensions` locates all active extensions for a provided element, then
   * executes the provided function using each of the active extensions.  It should
   * be called internally at every extendable execution point in htmx.
   *
   * @param {Element} elt
   * @param {(extension:HtmxExtension) => void} toDo
   * @returns void
   */
  function withExtensions(elt, toDo) {
    forEach(getExtensions(elt), function(extension) {
      try {
        toDo(extension)
      } catch (e) {
        logError(e)
      }
    })
  }

  function logError(msg) {
    if (console.error) {
      console.error(msg)
    } else if (console.log) {
      console.log('ERROR: ', msg)
    }
  }

  /**
   * Triggers a given event on an element
   *
   * @see https://htmx.org/api/#trigger
   *
   * @param {EventTarget|string} elt the element to trigger the event on
   * @param {string} eventName the name of the event to trigger
   * @param {any=} detail details for the event
   * @returns {boolean}
   */
  function triggerEvent(elt, eventName, detail) {
    elt = resolveTarget(elt)
    if (detail == null) {
      detail = {}
    }
    detail.elt = elt
    const event = makeEvent(eventName, detail)
    if (htmx.logger && !ignoreEventForLogging(eventName)) {
      htmx.logger(elt, eventName, detail)
    }
    if (detail.error) {
      logError(detail.error)
      triggerEvent(elt, 'htmx:error', { errorInfo: detail })
    }
    let eventResult = elt.dispatchEvent(event)
    const kebabName = kebabEventName(eventName)
    if (eventResult && kebabName !== eventName) {
      const kebabedEvent = makeEvent(kebabName, event.detail)
      eventResult = eventResult && elt.dispatchEvent(kebabedEvent)
    }
    withExtensions(asElement(elt), function(extension) {
      eventResult = eventResult && (extension.onEvent(eventName, event) !== false && !event.defaultPrevented)
    })
    return eventResult
  }

  //= ===================================================================
  // History Support
  //= ===================================================================
  let currentPathForHistory = location.pathname + location.search

  /**
   * @returns {Element}
   */
  function getHistoryElement() {
    const historyElt = getDocument().querySelector('[hx-history-elt],[data-hx-history-elt]')
    return historyElt || getDocument().body
  }

  /**
   * @param {string} url
   * @param {Element} rootElt
   */
  function saveToHistoryCache(url, rootElt) {
    if (!canAccessLocalStorage()) {
      return
    }

    // get state to save
    const innerHTML = cleanInnerHtmlForHistory(rootElt)
    const title = getDocument().title
    const scroll = window.scrollY

    if (htmx.config.historyCacheSize <= 0) {
      // make sure that an eventually already existing cache is purged
      localStorage.removeItem('htmx-history-cache')
      return
    }

    url = normalizePath(url)

    const historyCache = parseJSON(localStorage.getItem('htmx-history-cache')) || []
    for (let i = 0; i < historyCache.length; i++) {
      if (historyCache[i].url === url) {
        historyCache.splice(i, 1)
        break
      }
    }

    /** @type HtmxHistoryItem */
    const newHistoryItem = { url, content: innerHTML, title, scroll }

    triggerEvent(getDocument().body, 'htmx:historyItemCreated', { item: newHistoryItem, cache: historyCache })

    historyCache.push(newHistoryItem)
    while (historyCache.length > htmx.config.historyCacheSize) {
      historyCache.shift()
    }

    // keep trying to save the cache until it succeeds or is empty
    while (historyCache.length > 0) {
      try {
        localStorage.setItem('htmx-history-cache', JSON.stringify(historyCache))
        break
      } catch (e) {
        triggerErrorEvent(getDocument().body, 'htmx:historyCacheError', { cause: e, cache: historyCache })
        historyCache.shift() // shrink the cache and retry
      }
    }
  }

  /**
   * @typedef {Object} HtmxHistoryItem
   * @property {string} url
   * @property {string} content
   * @property {string} title
   * @property {number} scroll
   */

  /**
   * @param {string} url
   * @returns {HtmxHistoryItem|null}
   */
  function getCachedHistory(url) {
    if (!canAccessLocalStorage()) {
      return null
    }

    url = normalizePath(url)

    const historyCache = parseJSON(localStorage.getItem('htmx-history-cache')) || []
    for (let i = 0; i < historyCache.length; i++) {
      if (historyCache[i].url === url) {
        return historyCache[i]
      }
    }
    return null
  }

  /**
   * @param {Element} elt
   * @returns {string}
   */
  function cleanInnerHtmlForHistory(elt) {
    const className = htmx.config.requestClass
    const clone = /** @type Element */ (elt.cloneNode(true))
    forEach(findAll(clone, '.' + className), function(child) {
      removeClassFromElement(child, className)
    })
    return clone.innerHTML
  }

  function saveCurrentPageToHistory() {
    const elt = getHistoryElement()
    const path = currentPathForHistory || location.pathname + location.search

    // Allow history snapshot feature to be disabled where hx-history="false"
    // is present *anywhere* in the current document we're about to save,
    // so we can prevent privileged data entering the cache.
    // The page will still be reachable as a history entry, but htmx will fetch it
    // live from the server onpopstate rather than look in the localStorage cache
    let disableHistoryCache
    try {
      disableHistoryCache = getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]')
    } catch (e) {
    // IE11: insensitive modifier not supported so fallback to case sensitive selector
      disableHistoryCache = getDocument().querySelector('[hx-history="false"],[data-hx-history="false"]')
    }
    if (!disableHistoryCache) {
      triggerEvent(getDocument().body, 'htmx:beforeHistorySave', { path, historyElt: elt })
      saveToHistoryCache(path, elt)
    }

    if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, getDocument().title, window.location.href)
  }

  /**
   * @param {string} path
   */
  function pushUrlIntoHistory(path) {
  // remove the cache buster parameter, if any
    if (htmx.config.getCacheBusterParam) {
      path = path.replace(/org\.htmx\.cache-buster=[^&]*&?/, '')
      if (endsWith(path, '&') || endsWith(path, '?')) {
        path = path.slice(0, -1)
      }
    }
    if (htmx.config.historyEnabled) {
      history.pushState({ htmx: true }, '', path)
    }
    currentPathForHistory = path
  }

  /**
   * @param {string} path
   */
  function replaceUrlInHistory(path) {
    if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, '', path)
    currentPathForHistory = path
  }

  /**
   * @param {HtmxSettleTask[]} tasks
   */
  function settleImmediately(tasks) {
    forEach(tasks, function(task) {
      task.call(undefined)
    })
  }

  /**
   * @param {string} path
   */
  function loadHistoryFromServer(path) {
    const request = new XMLHttpRequest()
    const details = { path, xhr: request }
    triggerEvent(getDocument().body, 'htmx:historyCacheMiss', details)
    request.open('GET', path, true)
    request.setRequestHeader('HX-Request', 'true')
    request.setRequestHeader('HX-History-Restore-Request', 'true')
    request.setRequestHeader('HX-Current-URL', getDocument().location.href)
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        triggerEvent(getDocument().body, 'htmx:historyCacheMissLoad', details)
        const fragment = makeFragment(this.response)
        /** @type ParentNode */
        const content = fragment.querySelector('[hx-history-elt],[data-hx-history-elt]') || fragment
        const historyElement = getHistoryElement()
        const settleInfo = makeSettleInfo(historyElement)
        handleTitle(fragment.title)

        swapInnerHTML(historyElement, content, settleInfo)
        settleImmediately(settleInfo.tasks)
        currentPathForHistory = path
        triggerEvent(getDocument().body, 'htmx:historyRestore', { path, cacheMiss: true, serverResponse: this.response })
      } else {
        triggerErrorEvent(getDocument().body, 'htmx:historyCacheMissLoadError', details)
      }
    }
    request.send()
  }

  /**
   * @param {string} [path]
   */
  function restoreHistory(path) {
    saveCurrentPageToHistory()
    path = path || location.pathname + location.search
    const cached = getCachedHistory(path)
    if (cached) {
      const fragment = makeFragment(cached.content)
      const historyElement = getHistoryElement()
      const settleInfo = makeSettleInfo(historyElement)
      handleTitle(fragment.title)
      swapInnerHTML(historyElement, fragment, settleInfo)
      settleImmediately(settleInfo.tasks)
      getWindow().setTimeout(function() {
        window.scrollTo(0, cached.scroll)
      }, 0) // next 'tick', so browser has time to render layout
      currentPathForHistory = path
      triggerEvent(getDocument().body, 'htmx:historyRestore', { path, item: cached })
    } else {
      if (htmx.config.refreshOnHistoryMiss) {
        // @ts-ignore: optional parameter in reload() function throws error
        // noinspection JSUnresolvedReference
        window.location.reload(true)
      } else {
        loadHistoryFromServer(path)
      }
    }
  }

  /**
   * @param {Element} elt
   * @returns {Element[]}
   */
  function addRequestIndicatorClasses(elt) {
    let indicators = /** @type Element[] */ (findAttributeTargets(elt, 'hx-indicator'))
    if (indicators == null) {
      indicators = [elt]
    }
    forEach(indicators, function(ic) {
      const internalData = getInternalData(ic)
      internalData.requestCount = (internalData.requestCount || 0) + 1
      ic.classList.add.call(ic.classList, htmx.config.requestClass)
    })
    return indicators
  }

  /**
   * @param {Element} elt
   * @returns {Element[]}
   */
  function disableElements(elt) {
    let disabledElts = /** @type Element[] */ (findAttributeTargets(elt, 'hx-disabled-elt'))
    if (disabledElts == null) {
      disabledElts = []
    }
    forEach(disabledElts, function(disabledElement) {
      const internalData = getInternalData(disabledElement)
      internalData.requestCount = (internalData.requestCount || 0) + 1
      disabledElement.setAttribute('disabled', '')
    })
    return disabledElts
  }

  /**
   * @param {Element[]} indicators
   * @param {Element[]} disabled
   */
  function removeRequestIndicators(indicators, disabled) {
    forEach(indicators, function(ic) {
      const internalData = getInternalData(ic)
      internalData.requestCount = (internalData.requestCount || 0) - 1
      if (internalData.requestCount === 0) {
        ic.classList.remove.call(ic.classList, htmx.config.requestClass)
      }
    })
    forEach(disabled, function(disabledElement) {
      const internalData = getInternalData(disabledElement)
      internalData.requestCount = (internalData.requestCount || 0) - 1
      if (internalData.requestCount === 0) {
        disabledElement.removeAttribute('disabled')
      }
    })
  }

  //= ===================================================================
  // Input Value Processing
  //= ===================================================================

  /**
   * @param {Element[]} processed
   * @param {Element} elt
   * @returns {boolean}
   */
  function haveSeenNode(processed, elt) {
    for (let i = 0; i < processed.length; i++) {
      const node = processed[i]
      if (node.isSameNode(elt)) {
        return true
      }
    }
    return false
  }

  /**
   * @param {Element} element
   * @return {boolean}
   */
  function shouldInclude(element) {
    // Cast to trick tsc, undefined values will work fine here
    const elt = /** @type {HTMLInputElement} */ (element)
    if (elt.name === '' || elt.name == null || elt.disabled || closest(elt, 'fieldset[disabled]')) {
      return false
    }
    // ignore "submitter" types (see jQuery src/serialize.js)
    if (elt.type === 'button' || elt.type === 'submit' || elt.tagName === 'image' || elt.tagName === 'reset' || elt.tagName === 'file') {
      return false
    }
    if (elt.type === 'checkbox' || elt.type === 'radio') {
      return elt.checked
    }
    return true
  }

  /** @param {string} name
   * @param {string|Array|FormDataEntryValue} value
   * @param {FormData} formData */
  function addValueToFormData(name, value, formData) {
    if (name != null && value != null) {
      if (Array.isArray(value)) {
        value.forEach(function(v) { formData.append(name, v) })
      } else {
        formData.append(name, value)
      }
    }
  }

  /** @param {string} name
   * @param {string|Array} value
   * @param {FormData} formData */
  function removeValueFromFormData(name, value, formData) {
    if (name != null && value != null) {
      let values = formData.getAll(name)
      if (Array.isArray(value)) {
        values = values.filter(v => value.indexOf(v) < 0)
      } else {
        values = values.filter(v => v !== value)
      }
      formData.delete(name)
      forEach(values, v => formData.append(name, v))
    }
  }

  /**
   * @param {Element[]} processed
   * @param {FormData} formData
   * @param {HtmxElementValidationError[]} errors
   * @param {Element|HTMLInputElement|HTMLSelectElement|HTMLFormElement} elt
   * @param {boolean} validate
   */
  function processInputValue(processed, formData, errors, elt, validate) {
    if (elt == null || haveSeenNode(processed, elt)) {
      return
    } else {
      processed.push(elt)
    }
    if (shouldInclude(elt)) {
      const name = getRawAttribute(elt, 'name')
      // @ts-ignore value will be undefined for non-input elements, which is fine
      let value = elt.value
      if (elt instanceof HTMLSelectElement && elt.multiple) {
        value = toArray(elt.querySelectorAll('option:checked')).map(function(e) { return (/** @type HTMLOptionElement */(e)).value })
      }
      // include file inputs
      if (elt instanceof HTMLInputElement && elt.files) {
        value = toArray(elt.files)
      }
      addValueToFormData(name, value, formData)
      if (validate) {
        validateElement(elt, errors)
      }
    }
    if (elt instanceof HTMLFormElement) {
      forEach(elt.elements, function(input) {
        if (processed.indexOf(input) >= 0) {
          // The input has already been processed and added to the values, but the FormData that will be
          //  constructed right after on the form, will include it once again. So remove that input's value
          //  now to avoid duplicates
          removeValueFromFormData(input.name, input.value, formData)
        } else {
          processed.push(input)
        }
        if (validate) {
          validateElement(input, errors)
        }
      })
      new FormData(elt).forEach(function(value, name) {
        if (value instanceof File && value.name === '') {
          return // ignore no-name files
        }
        addValueToFormData(name, value, formData)
      })
    }
  }

  /**
   *
   * @param {Element} elt
   * @param {HtmxElementValidationError[]} errors
   */
  function validateElement(elt, errors) {
    const element = /** @type {HTMLElement & ElementInternals} */ (elt)
    if (element.willValidate) {
      triggerEvent(element, 'htmx:validation:validate')
      if (!element.checkValidity()) {
        errors.push({ elt: element, message: element.validationMessage, validity: element.validity })
        triggerEvent(element, 'htmx:validation:failed', { message: element.validationMessage, validity: element.validity })
      }
    }
  }

  /**
   * Override values in the one FormData with those from another.
   * @param {FormData} receiver the formdata that will be mutated
   * @param {FormData} donor the formdata that will provide the overriding values
   * @returns {FormData} the {@linkcode receiver}
   */
  function overrideFormData(receiver, donor) {
    for (const key of donor.keys()) {
      receiver.delete(key)
      donor.getAll(key).forEach(function(value) {
        receiver.append(key, value)
      })
    }
    return receiver
  }

  /**
 * @param {Element|HTMLFormElement} elt
 * @param {HttpVerb} verb
 * @returns {{errors: HtmxElementValidationError[], formData: FormData, values: Object}}
 */
  function getInputValues(elt, verb) {
    /** @type Element[] */
    const processed = []
    const formData = new FormData()
    const priorityFormData = new FormData()
    /** @type HtmxElementValidationError[] */
    const errors = []
    const internalData = getInternalData(elt)
    if (internalData.lastButtonClicked && !bodyContains(internalData.lastButtonClicked)) {
      internalData.lastButtonClicked = null
    }

    // only validate when form is directly submitted and novalidate or formnovalidate are not set
    // or if the element has an explicit hx-validate="true" on it
    let validate = (elt instanceof HTMLFormElement && elt.noValidate !== true) || getAttributeValue(elt, 'hx-validate') === 'true'
    if (internalData.lastButtonClicked) {
      validate = validate && internalData.lastButtonClicked.formNoValidate !== true
    }

    // for a non-GET include the closest form
    if (verb !== 'get') {
      processInputValue(processed, priorityFormData, errors, closest(elt, 'form'), validate)
    }

    // include the element itself
    processInputValue(processed, formData, errors, elt, validate)

    // if a button or submit was clicked last, include its value
    if (internalData.lastButtonClicked || elt.tagName === 'BUTTON' ||
    (elt.tagName === 'INPUT' && getRawAttribute(elt, 'type') === 'submit')) {
      const button = internalData.lastButtonClicked || (/** @type HTMLInputElement|HTMLButtonElement */(elt))
      const name = getRawAttribute(button, 'name')
      addValueToFormData(name, button.value, priorityFormData)
    }

    // include any explicit includes
    const includes = findAttributeTargets(elt, 'hx-include')
    forEach(includes, function(node) {
      processInputValue(processed, formData, errors, asElement(node), validate)
      // if a non-form is included, include any input values within it
      if (!matches(node, 'form')) {
        forEach(asParentNode(node).querySelectorAll(INPUT_SELECTOR), function(descendant) {
          processInputValue(processed, formData, errors, descendant, validate)
        })
      }
    })

    // values from a <form> take precedence, overriding the regular values
    overrideFormData(formData, priorityFormData)

    return { errors, formData, values: formDataProxy(formData) }
  }

  /**
   * @param {string} returnStr
   * @param {string} name
   * @param {any} realValue
   * @returns {string}
   */
  function appendParam(returnStr, name, realValue) {
    if (returnStr !== '') {
      returnStr += '&'
    }
    if (String(realValue) === '[object Object]') {
      realValue = JSON.stringify(realValue)
    }
    const s = encodeURIComponent(realValue)
    returnStr += encodeURIComponent(name) + '=' + s
    return returnStr
  }

  /**
   * @param {FormData|Object} values
   * @returns string
   */
  function urlEncode(values) {
    values = formDataFromObject(values)
    let returnStr = ''
    values.forEach(function(value, key) {
      returnStr = appendParam(returnStr, key, value)
    })
    return returnStr
  }

  //= ===================================================================
  // Ajax
  //= ===================================================================

  /**
 * @param {Element} elt
 * @param {Element} target
 * @param {string} prompt
 * @returns {HtmxHeaderSpecification}
 */
  function getHeaders(elt, target, prompt) {
    /** @type HtmxHeaderSpecification */
    const headers = {
      'HX-Request': 'true',
      'HX-Trigger': getRawAttribute(elt, 'id'),
      'HX-Trigger-Name': getRawAttribute(elt, 'name'),
      'HX-Target': getAttributeValue(target, 'id'),
      'HX-Current-URL': getDocument().location.href
    }
    getValuesForElement(elt, 'hx-headers', false, headers)
    if (prompt !== undefined) {
      headers['HX-Prompt'] = prompt
    }
    if (getInternalData(elt).boosted) {
      headers['HX-Boosted'] = 'true'
    }
    return headers
  }

  /**
 * filterValues takes an object containing form input values
 * and returns a new object that only contains keys that are
 * specified by the closest "hx-params" attribute
 * @param {FormData} inputValues
 * @param {Element} elt
 * @returns {FormData}
 */
  function filterValues(inputValues, elt) {
    const paramsValue = getClosestAttributeValue(elt, 'hx-params')
    if (paramsValue) {
      if (paramsValue === 'none') {
        return new FormData()
      } else if (paramsValue === '*') {
        return inputValues
      } else if (paramsValue.indexOf('not ') === 0) {
        forEach(paramsValue.substr(4).split(','), function(name) {
          name = name.trim()
          inputValues.delete(name)
        })
        return inputValues
      } else {
        const newValues = new FormData()
        forEach(paramsValue.split(','), function(name) {
          name = name.trim()
          if (inputValues.has(name)) {
            inputValues.getAll(name).forEach(function(value) { newValues.append(name, value) })
          }
        })
        return newValues
      }
    } else {
      return inputValues
    }
  }

  /**
   * @param {Element} elt
   * @return {boolean}
   */
  function isAnchorLink(elt) {
    return !!getRawAttribute(elt, 'href') && getRawAttribute(elt, 'href').indexOf('#') >= 0
  }

  /**
 * @param {Element} elt
 * @param {HtmxSwapStyle} [swapInfoOverride]
 * @returns {HtmxSwapSpecification}
 */
  function getSwapSpecification(elt, swapInfoOverride) {
    const swapInfo = swapInfoOverride || getClosestAttributeValue(elt, 'hx-swap')
    /** @type HtmxSwapSpecification */
    const swapSpec = {
      swapStyle: getInternalData(elt).boosted ? 'innerHTML' : htmx.config.defaultSwapStyle,
      swapDelay: htmx.config.defaultSwapDelay,
      settleDelay: htmx.config.defaultSettleDelay
    }
    if (htmx.config.scrollIntoViewOnBoost && getInternalData(elt).boosted && !isAnchorLink(elt)) {
      swapSpec.show = 'top'
    }
    if (swapInfo) {
      const split = splitOnWhitespace(swapInfo)
      if (split.length > 0) {
        for (let i = 0; i < split.length; i++) {
          const value = split[i]
          if (value.indexOf('swap:') === 0) {
            swapSpec.swapDelay = parseInterval(value.substr(5))
          } else if (value.indexOf('settle:') === 0) {
            swapSpec.settleDelay = parseInterval(value.substr(7))
          } else if (value.indexOf('transition:') === 0) {
            swapSpec.transition = value.substr(11) === 'true'
          } else if (value.indexOf('ignoreTitle:') === 0) {
            swapSpec.ignoreTitle = value.substr(12) === 'true'
          } else if (value.indexOf('scroll:') === 0) {
            const scrollSpec = value.substr(7)
            var splitSpec = scrollSpec.split(':')
            const scrollVal = splitSpec.pop()
            var selectorVal = splitSpec.length > 0 ? splitSpec.join(':') : null
            // @ts-ignore
            swapSpec.scroll = scrollVal
            swapSpec.scrollTarget = selectorVal
          } else if (value.indexOf('show:') === 0) {
            const showSpec = value.substr(5)
            var splitSpec = showSpec.split(':')
            const showVal = splitSpec.pop()
            var selectorVal = splitSpec.length > 0 ? splitSpec.join(':') : null
            swapSpec.show = showVal
            swapSpec.showTarget = selectorVal
          } else if (value.indexOf('focus-scroll:') === 0) {
            const focusScrollVal = value.substr('focus-scroll:'.length)
            swapSpec.focusScroll = focusScrollVal == 'true'
          } else if (i == 0) {
            swapSpec.swapStyle = value
          } else {
            logError('Unknown modifier in hx-swap: ' + value)
          }
        }
      }
    }
    return swapSpec
  }

  /**
   * @param {Element} elt
   * @return {boolean}
   */
  function usesFormData(elt) {
    return getClosestAttributeValue(elt, 'hx-encoding') === 'multipart/form-data' ||
    (matches(elt, 'form') && getRawAttribute(elt, 'enctype') === 'multipart/form-data')
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @param {Element} elt
   * @param {FormData} filteredParameters
   * @returns {*|string|null}
   */
  function encodeParamsForBody(xhr, elt, filteredParameters) {
    let encodedParameters = null
    withExtensions(elt, function(extension) {
      if (encodedParameters == null) {
        encodedParameters = extension.encodeParameters(xhr, filteredParameters, elt)
      }
    })
    if (encodedParameters != null) {
      return encodedParameters
    } else {
      if (usesFormData(elt)) {
        // Force conversion to an actual FormData object in case filteredParameters is a formDataProxy
        // See https://github.com/bigskysoftware/htmx/issues/2317
        return overrideFormData(new FormData(), formDataFromObject(filteredParameters))
      } else {
        return urlEncode(filteredParameters)
      }
    }
  }

  /**
 *
 * @param {Element} target
 * @returns {HtmxSettleInfo}
 */
  function makeSettleInfo(target) {
    return { tasks: [], elts: [target] }
  }

  /**
   * @param {Element[]} content
   * @param {HtmxSwapSpecification} swapSpec
   */
  function updateScrollState(content, swapSpec) {
    const first = content[0]
    const last = content[content.length - 1]
    if (swapSpec.scroll) {
      var target = null
      if (swapSpec.scrollTarget) {
        target = asElement(querySelectorExt(first, swapSpec.scrollTarget))
      }
      if (swapSpec.scroll === 'top' && (first || target)) {
        target = target || first
        target.scrollTop = 0
      }
      if (swapSpec.scroll === 'bottom' && (last || target)) {
        target = target || last
        target.scrollTop = target.scrollHeight
      }
    }
    if (swapSpec.show) {
      var target = null
      if (swapSpec.showTarget) {
        let targetStr = swapSpec.showTarget
        if (swapSpec.showTarget === 'window') {
          targetStr = 'body'
        }
        target = asElement(querySelectorExt(first, targetStr))
      }
      if (swapSpec.show === 'top' && (first || target)) {
        target = target || first
        // @ts-ignore For some reason tsc doesn't recognize "instant" as a valid option for now
        target.scrollIntoView({ block: 'start', behavior: htmx.config.scrollBehavior })
      }
      if (swapSpec.show === 'bottom' && (last || target)) {
        target = target || last
        // @ts-ignore For some reason tsc doesn't recognize "instant" as a valid option for now
        target.scrollIntoView({ block: 'end', behavior: htmx.config.scrollBehavior })
      }
    }
  }

  /**
 * @param {Element} elt
 * @param {string} attr
 * @param {boolean=} evalAsDefault
 * @param {Object=} values
 * @returns {Object}
 */
  function getValuesForElement(elt, attr, evalAsDefault, values) {
    if (values == null) {
      values = {}
    }
    if (elt == null) {
      return values
    }
    const attributeValue = getAttributeValue(elt, attr)
    if (attributeValue) {
      let str = attributeValue.trim()
      let evaluateValue = evalAsDefault
      if (str === 'unset') {
        return null
      }
      if (str.indexOf('javascript:') === 0) {
        str = str.substr(11)
        evaluateValue = true
      } else if (str.indexOf('js:') === 0) {
        str = str.substr(3)
        evaluateValue = true
      }
      if (str.indexOf('{') !== 0) {
        str = '{' + str + '}'
      }
      let varsValues
      if (evaluateValue) {
        varsValues = maybeEval(elt, function() { return Function('return (' + str + ')')() }, {})
      } else {
        varsValues = parseJSON(str)
      }
      for (const key in varsValues) {
        if (varsValues.hasOwnProperty(key)) {
          if (values[key] == null) {
            values[key] = varsValues[key]
          }
        }
      }
    }
    return getValuesForElement(asElement(parentElt(elt)), attr, evalAsDefault, values)
  }

  /**
   * @param {EventTarget|string} elt
   * @param {() => any} toEval
   * @param {any=} defaultVal
   * @returns {any}
   */
  function maybeEval(elt, toEval, defaultVal) {
    if (htmx.config.allowEval) {
      return toEval()
    } else {
      triggerErrorEvent(elt, 'htmx:evalDisallowedError')
      return defaultVal
    }
  }

  /**
 * @param {Element} elt
 * @param {*?} expressionVars
 * @returns
 */
  function getHXVarsForElement(elt, expressionVars) {
    return getValuesForElement(elt, 'hx-vars', true, expressionVars)
  }

  /**
 * @param {Element} elt
 * @param {*?} expressionVars
 * @returns
 */
  function getHXValsForElement(elt, expressionVars) {
    return getValuesForElement(elt, 'hx-vals', false, expressionVars)
  }

  /**
 * @param {Element} elt
 * @returns {FormData}
 */
  function getExpressionVars(elt) {
    return mergeObjects(getHXVarsForElement(elt), getHXValsForElement(elt))
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @param {string} header
   * @param {string|null} headerValue
   */
  function safelySetHeaderValue(xhr, header, headerValue) {
    if (headerValue !== null) {
      try {
        xhr.setRequestHeader(header, headerValue)
      } catch (e) {
      // On an exception, try to set the header URI encoded instead
        xhr.setRequestHeader(header, encodeURIComponent(headerValue))
        xhr.setRequestHeader(header + '-URI-AutoEncoded', 'true')
      }
    }
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @return {string}
   */
  function getPathFromResponse(xhr) {
  // NB: IE11 does not support this stuff
    if (xhr.responseURL && typeof (URL) !== 'undefined') {
      try {
        const url = new URL(xhr.responseURL)
        return url.pathname + url.search
      } catch (e) {
        triggerErrorEvent(getDocument().body, 'htmx:badResponseUrl', { url: xhr.responseURL })
      }
    }
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @param {RegExp} regexp
   * @return {boolean}
   */
  function hasHeader(xhr, regexp) {
    return regexp.test(xhr.getAllResponseHeaders())
  }

  /**
   * Issues an htmx-style AJAX request
   *
   * @see https://htmx.org/api/#ajax
   *
   * @param {HttpVerb} verb
   * @param {string} path the URL path to make the AJAX
   * @param {Element|string|HtmxAjaxHelperContext} context the element to target (defaults to the **body**) | a selector for the target | a context object that contains any of the following
   * @return {Promise<void>} Promise that resolves immediately if no request is sent, or when the request is complete
   */
  function ajaxHelper(verb, path, context) {
    verb = (/** @type HttpVerb */(verb.toLowerCase()))
    if (context) {
      if (context instanceof Element || typeof context === 'string') {
        return issueAjaxRequest(verb, path, null, null, {
          targetOverride: resolveTarget(context),
          returnPromise: true
        })
      } else {
        return issueAjaxRequest(verb, path, resolveTarget(context.source), context.event,
          {
            handler: context.handler,
            headers: context.headers,
            values: context.values,
            targetOverride: resolveTarget(context.target),
            swapOverride: context.swap,
            select: context.select,
            returnPromise: true
          })
      }
    } else {
      return issueAjaxRequest(verb, path, null, null, {
        returnPromise: true
      })
    }
  }

  /**
   * @param {Element} elt
   * @return {Element[]}
   */
  function hierarchyForElt(elt) {
    const arr = []
    while (elt) {
      arr.push(elt)
      elt = elt.parentElement
    }
    return arr
  }

  /**
   * @param {Element} elt
   * @param {string} path
   * @param {HtmxRequestConfig} requestConfig
   * @return {boolean}
   */
  function verifyPath(elt, path, requestConfig) {
    let sameHost
    let url
    if (typeof URL === 'function') {
      url = new URL(path, document.location.href)
      const origin = document.location.origin
      sameHost = origin === url.origin
    } else {
    // IE11 doesn't support URL
      url = path
      sameHost = startsWith(path, document.location.origin)
    }

    if (htmx.config.selfRequestsOnly) {
      if (!sameHost) {
        return false
      }
    }
    return triggerEvent(elt, 'htmx:validateUrl', mergeObjects({ url, sameHost }, requestConfig))
  }

  /**
   * @param {Object|FormData} obj
   * @return {FormData}
   */
  function formDataFromObject(obj) {
    if (obj instanceof FormData) return obj
    const formData = new FormData()
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key].forEach === 'function') {
          obj[key].forEach(function(v) { formData.append(key, v) })
        } else if (typeof obj[key] === 'object') {
          formData.append(key, JSON.stringify(obj[key]))
        } else {
          formData.append(key, obj[key])
        }
      }
    }
    return formData
  }

  /**
   * @param {FormData} formData
   * @param {string} name
   * @param {Array} array
   * @returns {Array}
   */
  function formDataArrayProxy(formData, name, array) {
    // mutating the array should mutate the underlying form data
    return new Proxy(array, {
      get: function(target, key) {
        if (typeof key === 'number') return target[key]
        if (key === 'length') return target.length
        if (key === 'push') {
          return function(value) {
            target.push(value)
            formData.append(name, value)
          }
        }
        if (typeof target[key] === 'function') {
          return function() {
            target[key].apply(target, arguments)
            formData.delete(name)
            target.forEach(function(v) { formData.append(name, v) })
          }
        }

        if (target[key] && target[key].length === 1) {
          return target[key][0]
        } else {
          return target[key]
        }
      },
      set: function(target, index, value) {
        target[index] = value
        formData.delete(name)
        target.forEach(function(v) { formData.append(name, v) })
        return true
      }
    })
  }

  /**
   * @param {FormData} formData
   * @returns {Object}
   */
  function formDataProxy(formData) {
    return new Proxy(formData, {
      get: function(target, name) {
        if (typeof name === 'symbol') {
          // Forward symbol calls to the FormData itself directly
          return Reflect.get(target, name)
        }
        if (name === 'toJSON') {
          // Support JSON.stringify call on proxy
          return () => Object.fromEntries(formData)
        }
        if (name in target) {
          // Wrap in function with apply to correctly bind the FormData context, as a direct call would result in an illegal invocation error
          if (typeof target[name] === 'function') {
            return function() {
              return formData[name].apply(formData, arguments)
            }
          } else {
            return target[name]
          }
        }
        const array = formData.getAll(name)
        // Those 2 undefined & single value returns are for retro-compatibility as we weren't using FormData before
        if (array.length === 0) {
          return undefined
        } else if (array.length === 1) {
          return array[0]
        } else {
          return formDataArrayProxy(target, name, array)
        }
      },
      set: function(target, name, value) {
        if (typeof name !== 'string') {
          return false
        }
        target.delete(name)
        if (typeof value.forEach === 'function') {
          value.forEach(function(v) { target.append(name, v) })
        } else {
          target.append(name, value)
        }
        return true
      },
      deleteProperty: function(target, name) {
        if (typeof name === 'string') {
          target.delete(name)
        }
        return true
      },
      // Support Object.assign call from proxy
      ownKeys: function(target) {
        return Reflect.ownKeys(Object.fromEntries(target))
      },
      getOwnPropertyDescriptor: function(target, prop) {
        return Reflect.getOwnPropertyDescriptor(Object.fromEntries(target), prop)
      }
    })
  }

  /**
   * @param {HttpVerb} verb
   * @param {string} path
   * @param {Element} elt
   * @param {Event} event
   * @param {HtmxAjaxEtc} [etc]
   * @param {boolean} [confirmed]
   * @return {Promise<void>}
   */
  function issueAjaxRequest(verb, path, elt, event, etc, confirmed) {
    let resolve = null
    let reject = null
    etc = etc != null ? etc : {}
    if (etc.returnPromise && typeof Promise !== 'undefined') {
      var promise = new Promise(function(_resolve, _reject) {
        resolve = _resolve
        reject = _reject
      })
    }
    if (elt == null) {
      elt = getDocument().body
    }
    const responseHandler = etc.handler || handleAjaxResponse
    const select = etc.select || null

    if (!bodyContains(elt)) {
    // do not issue requests for elements removed from the DOM
      maybeCall(resolve)
      return promise
    }
    const target = etc.targetOverride || asElement(getTarget(elt))
    if (target == null || target == DUMMY_ELT) {
      triggerErrorEvent(elt, 'htmx:targetError', { target: getAttributeValue(elt, 'hx-target') })
      maybeCall(reject)
      return promise
    }

    let eltData = getInternalData(elt)
    const submitter = eltData.lastButtonClicked

    if (submitter) {
      const buttonPath = getRawAttribute(submitter, 'formaction')
      if (buttonPath != null) {
        path = buttonPath
      }

      const buttonVerb = getRawAttribute(submitter, 'formmethod')
      if (buttonVerb != null) {
      // ignore buttons with formmethod="dialog"
        if (buttonVerb.toLowerCase() !== 'dialog') {
          verb = (/** @type HttpVerb */(buttonVerb))
        }
      }
    }

    const confirmQuestion = getClosestAttributeValue(elt, 'hx-confirm')
    // allow event-based confirmation w/ a callback
    if (confirmed === undefined) {
      const issueRequest = function(skipConfirmation) {
        return issueAjaxRequest(verb, path, elt, event, etc, !!skipConfirmation)
      }
      const confirmDetails = { target, elt, path, verb, triggeringEvent: event, etc, issueRequest, question: confirmQuestion }
      if (triggerEvent(elt, 'htmx:confirm', confirmDetails) === false) {
        maybeCall(resolve)
        return promise
      }
    }

    let syncElt = elt
    let syncStrategy = getClosestAttributeValue(elt, 'hx-sync')
    let queueStrategy = null
    let abortable = false
    if (syncStrategy) {
      const syncStrings = syncStrategy.split(':')
      const selector = syncStrings[0].trim()
      if (selector === 'this') {
        syncElt = findThisElement(elt, 'hx-sync')
      } else {
        syncElt = asElement(querySelectorExt(elt, selector))
      }
      // default to the drop strategy
      syncStrategy = (syncStrings[1] || 'drop').trim()
      eltData = getInternalData(syncElt)
      if (syncStrategy === 'drop' && eltData.xhr && eltData.abortable !== true) {
        maybeCall(resolve)
        return promise
      } else if (syncStrategy === 'abort') {
        if (eltData.xhr) {
          maybeCall(resolve)
          return promise
        } else {
          abortable = true
        }
      } else if (syncStrategy === 'replace') {
        triggerEvent(syncElt, 'htmx:abort') // abort the current request and continue
      } else if (syncStrategy.indexOf('queue') === 0) {
        const queueStrArray = syncStrategy.split(' ')
        queueStrategy = (queueStrArray[1] || 'last').trim()
      }
    }

    if (eltData.xhr) {
      if (eltData.abortable) {
        triggerEvent(syncElt, 'htmx:abort') // abort the current request and continue
      } else {
        if (queueStrategy == null) {
          if (event) {
            const eventData = getInternalData(event)
            if (eventData && eventData.triggerSpec && eventData.triggerSpec.queue) {
              queueStrategy = eventData.triggerSpec.queue
            }
          }
          if (queueStrategy == null) {
            queueStrategy = 'last'
          }
        }
        if (eltData.queuedRequests == null) {
          eltData.queuedRequests = []
        }
        if (queueStrategy === 'first' && eltData.queuedRequests.length === 0) {
          eltData.queuedRequests.push(function() {
            issueAjaxRequest(verb, path, elt, event, etc)
          })
        } else if (queueStrategy === 'all') {
          eltData.queuedRequests.push(function() {
            issueAjaxRequest(verb, path, elt, event, etc)
          })
        } else if (queueStrategy === 'last') {
          eltData.queuedRequests = [] // dump existing queue
          eltData.queuedRequests.push(function() {
            issueAjaxRequest(verb, path, elt, event, etc)
          })
        }
        maybeCall(resolve)
        return promise
      }
    }

    const xhr = new XMLHttpRequest()
    eltData.xhr = xhr
    eltData.abortable = abortable
    const endRequestLock = function() {
      eltData.xhr = null
      eltData.abortable = false
      if (eltData.queuedRequests != null &&
      eltData.queuedRequests.length > 0) {
        const queuedRequest = eltData.queuedRequests.shift()
        queuedRequest()
      }
    }
    const promptQuestion = getClosestAttributeValue(elt, 'hx-prompt')
    if (promptQuestion) {
      var promptResponse = prompt(promptQuestion)
      // prompt returns null if cancelled and empty string if accepted with no entry
      if (promptResponse === null ||
      !triggerEvent(elt, 'htmx:prompt', { prompt: promptResponse, target })) {
        maybeCall(resolve)
        endRequestLock()
        return promise
      }
    }

    if (confirmQuestion && !confirmed) {
      if (!confirm(confirmQuestion)) {
        maybeCall(resolve)
        endRequestLock()
        return promise
      }
    }

    let headers = getHeaders(elt, target, promptResponse)

    if (verb !== 'get' && !usesFormData(elt)) {
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }

    if (etc.headers) {
      headers = mergeObjects(headers, etc.headers)
    }
    const results = getInputValues(elt, verb)
    let errors = results.errors
    const rawFormData = results.formData
    if (etc.values) {
      overrideFormData(rawFormData, formDataFromObject(etc.values))
    }
    const expressionVars = formDataFromObject(getExpressionVars(elt))
    const allFormData = overrideFormData(rawFormData, expressionVars)
    let filteredFormData = filterValues(allFormData, elt)

    if (htmx.config.getCacheBusterParam && verb === 'get') {
      filteredFormData.set('org.htmx.cache-buster', getRawAttribute(target, 'id') || 'true')
    }

    // behavior of anchors w/ empty href is to use the current URL
    if (path == null || path === '') {
      path = getDocument().location.href
    }

    /**
     * @type {Object}
     * @property {boolean} [credentials]
     * @property {number} [timeout]
     * @property {boolean} [noHeaders]
     */
    const requestAttrValues = getValuesForElement(elt, 'hx-request')

    const eltIsBoosted = getInternalData(elt).boosted

    let useUrlParams = htmx.config.methodsThatUseUrlParams.indexOf(verb) >= 0

    /** @type HtmxRequestConfig */
    const requestConfig = {
      boosted: eltIsBoosted,
      useUrlParams,
      formData: filteredFormData,
      parameters: formDataProxy(filteredFormData),
      unfilteredFormData: allFormData,
      unfilteredParameters: formDataProxy(allFormData),
      headers,
      target,
      verb,
      errors,
      withCredentials: etc.credentials || requestAttrValues.credentials || htmx.config.withCredentials,
      timeout: etc.timeout || requestAttrValues.timeout || htmx.config.timeout,
      path,
      triggeringEvent: event
    }

    if (!triggerEvent(elt, 'htmx:configRequest', requestConfig)) {
      maybeCall(resolve)
      endRequestLock()
      return promise
    }

    // copy out in case the object was overwritten
    path = requestConfig.path
    verb = requestConfig.verb
    headers = requestConfig.headers
    filteredFormData = formDataFromObject(requestConfig.parameters)
    errors = requestConfig.errors
    useUrlParams = requestConfig.useUrlParams

    if (errors && errors.length > 0) {
      triggerEvent(elt, 'htmx:validation:halted', requestConfig)
      maybeCall(resolve)
      endRequestLock()
      return promise
    }

    const splitPath = path.split('#')
    const pathNoAnchor = splitPath[0]
    const anchor = splitPath[1]

    let finalPath = path
    if (useUrlParams) {
      finalPath = pathNoAnchor
      const hasValues = !filteredFormData.keys().next().done
      if (hasValues) {
        if (finalPath.indexOf('?') < 0) {
          finalPath += '?'
        } else {
          finalPath += '&'
        }
        finalPath += urlEncode(filteredFormData)
        if (anchor) {
          finalPath += '#' + anchor
        }
      }
    }

    if (!verifyPath(elt, finalPath, requestConfig)) {
      triggerErrorEvent(elt, 'htmx:invalidPath', requestConfig)
      maybeCall(reject)
      return promise
    }

    xhr.open(verb.toUpperCase(), finalPath, true)
    xhr.overrideMimeType('text/html')
    xhr.withCredentials = requestConfig.withCredentials
    xhr.timeout = requestConfig.timeout

    // request headers
    if (requestAttrValues.noHeaders) {
    // ignore all headers
    } else {
      for (const header in headers) {
        if (headers.hasOwnProperty(header)) {
          const headerValue = headers[header]
          safelySetHeaderValue(xhr, header, headerValue)
        }
      }
    }

    /** @type {HtmxResponseInfo} */
    const responseInfo = {
      xhr,
      target,
      requestConfig,
      etc,
      boosted: eltIsBoosted,
      select,
      pathInfo: {
        requestPath: path,
        finalRequestPath: finalPath,
        responsePath: null,
        anchor
      }
    }

    xhr.onload = function() {
      try {
        const hierarchy = hierarchyForElt(elt)
        responseInfo.pathInfo.responsePath = getPathFromResponse(xhr)
        responseHandler(elt, responseInfo)
        removeRequestIndicators(indicators, disableElts)
        triggerEvent(elt, 'htmx:afterRequest', responseInfo)
        triggerEvent(elt, 'htmx:afterOnLoad', responseInfo)
        // if the body no longer contains the element, trigger the event on the closest parent
        // remaining in the DOM
        if (!bodyContains(elt)) {
          let secondaryTriggerElt = null
          while (hierarchy.length > 0 && secondaryTriggerElt == null) {
            const parentEltInHierarchy = hierarchy.shift()
            if (bodyContains(parentEltInHierarchy)) {
              secondaryTriggerElt = parentEltInHierarchy
            }
          }
          if (secondaryTriggerElt) {
            triggerEvent(secondaryTriggerElt, 'htmx:afterRequest', responseInfo)
            triggerEvent(secondaryTriggerElt, 'htmx:afterOnLoad', responseInfo)
          }
        }
        maybeCall(resolve)
        endRequestLock()
      } catch (e) {
        triggerErrorEvent(elt, 'htmx:onLoadError', mergeObjects({ error: e }, responseInfo))
        throw e
      }
    }
    xhr.onerror = function() {
      removeRequestIndicators(indicators, disableElts)
      triggerErrorEvent(elt, 'htmx:afterRequest', responseInfo)
      triggerErrorEvent(elt, 'htmx:sendError', responseInfo)
      maybeCall(reject)
      endRequestLock()
    }
    xhr.onabort = function() {
      removeRequestIndicators(indicators, disableElts)
      triggerErrorEvent(elt, 'htmx:afterRequest', responseInfo)
      triggerErrorEvent(elt, 'htmx:sendAbort', responseInfo)
      maybeCall(reject)
      endRequestLock()
    }
    xhr.ontimeout = function() {
      removeRequestIndicators(indicators, disableElts)
      triggerErrorEvent(elt, 'htmx:afterRequest', responseInfo)
      triggerErrorEvent(elt, 'htmx:timeout', responseInfo)
      maybeCall(reject)
      endRequestLock()
    }
    if (!triggerEvent(elt, 'htmx:beforeRequest', responseInfo)) {
      maybeCall(resolve)
      endRequestLock()
      return promise
    }
    var indicators = addRequestIndicatorClasses(elt)
    var disableElts = disableElements(elt)

    forEach(['loadstart', 'loadend', 'progress', 'abort'], function(eventName) {
      forEach([xhr, xhr.upload], function(target) {
        target.addEventListener(eventName, function(event) {
          triggerEvent(elt, 'htmx:xhr:' + eventName, {
            lengthComputable: event.lengthComputable,
            loaded: event.loaded,
            total: event.total
          })
        })
      })
    })
    triggerEvent(elt, 'htmx:beforeSend', responseInfo)
    const params = useUrlParams ? null : encodeParamsForBody(xhr, elt, filteredFormData)
    xhr.send(params)
    return promise
  }

  /**
   * @typedef {Object} HtmxHistoryUpdate
   * @property {string|null} [type]
   * @property {string|null} [path]
   */

  /**
   * @param {Element} elt
   * @param {HtmxResponseInfo} responseInfo
   * @return {HtmxHistoryUpdate}
   */
  function determineHistoryUpdates(elt, responseInfo) {
    const xhr = responseInfo.xhr

    //= ==========================================
    // First consult response headers
    //= ==========================================
    let pathFromHeaders = null
    let typeFromHeaders = null
    if (hasHeader(xhr, /HX-Push:/i)) {
      pathFromHeaders = xhr.getResponseHeader('HX-Push')
      typeFromHeaders = 'push'
    } else if (hasHeader(xhr, /HX-Push-Url:/i)) {
      pathFromHeaders = xhr.getResponseHeader('HX-Push-Url')
      typeFromHeaders = 'push'
    } else if (hasHeader(xhr, /HX-Replace-Url:/i)) {
      pathFromHeaders = xhr.getResponseHeader('HX-Replace-Url')
      typeFromHeaders = 'replace'
    }

    // if there was a response header, that has priority
    if (pathFromHeaders) {
      if (pathFromHeaders === 'false') {
        return {}
      } else {
        return {
          type: typeFromHeaders,
          path: pathFromHeaders
        }
      }
    }

    //= ==========================================
    // Next resolve via DOM values
    //= ==========================================
    const requestPath = responseInfo.pathInfo.finalRequestPath
    const responsePath = responseInfo.pathInfo.responsePath

    const pushUrl = getClosestAttributeValue(elt, 'hx-push-url')
    const replaceUrl = getClosestAttributeValue(elt, 'hx-replace-url')
    const elementIsBoosted = getInternalData(elt).boosted

    let saveType = null
    let path = null

    if (pushUrl) {
      saveType = 'push'
      path = pushUrl
    } else if (replaceUrl) {
      saveType = 'replace'
      path = replaceUrl
    } else if (elementIsBoosted) {
      saveType = 'push'
      path = responsePath || requestPath // if there is no response path, go with the original request path
    }

    if (path) {
    // false indicates no push, return empty object
      if (path === 'false') {
        return {}
      }

      // true indicates we want to follow wherever the server ended up sending us
      if (path === 'true') {
        path = responsePath || requestPath // if there is no response path, go with the original request path
      }

      // restore any anchor associated with the request
      if (responseInfo.pathInfo.anchor && path.indexOf('#') === -1) {
        path = path + '#' + responseInfo.pathInfo.anchor
      }

      return {
        type: saveType,
        path
      }
    } else {
      return {}
    }
  }

  /**
   * @param {HtmxResponseHandlingConfig} responseHandlingConfig
   * @param {number} status
   * @return {boolean}
   */
  function codeMatches(responseHandlingConfig, status) {
    var regExp = new RegExp(responseHandlingConfig.code)
    return regExp.test(status.toString(10))
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @return {HtmxResponseHandlingConfig}
   */
  function resolveResponseHandling(xhr) {
    for (var i = 0; i < htmx.config.responseHandling.length; i++) {
      /** @type HtmxResponseHandlingConfig */
      var responseHandlingElement = htmx.config.responseHandling[i]
      if (codeMatches(responseHandlingElement, xhr.status)) {
        return responseHandlingElement
      }
    }
    // no matches, return no swap
    return {
      swap: false
    }
  }

  /**
   * @param {string} title
   */
  function handleTitle(title) {
    if (title) {
      const titleElt = find('title')
      if (titleElt) {
        titleElt.innerHTML = title
      } else {
        window.document.title = title
      }
    }
  }

  /**
   * @param {Element} elt
   * @param {HtmxResponseInfo} responseInfo
   */
  function handleAjaxResponse(elt, responseInfo) {
    const xhr = responseInfo.xhr
    let target = responseInfo.target
    const etc = responseInfo.etc
    const responseInfoSelect = responseInfo.select

    if (!triggerEvent(elt, 'htmx:beforeOnLoad', responseInfo)) return

    if (hasHeader(xhr, /HX-Trigger:/i)) {
      handleTriggerHeader(xhr, 'HX-Trigger', elt)
    }

    if (hasHeader(xhr, /HX-Location:/i)) {
      saveCurrentPageToHistory()
      let redirectPath = xhr.getResponseHeader('HX-Location')
      /** @type {HtmxAjaxHelperContext&{path:string}} */
      var redirectSwapSpec
      if (redirectPath.indexOf('{') === 0) {
        redirectSwapSpec = parseJSON(redirectPath)
        // what's the best way to throw an error if the user didn't include this
        redirectPath = redirectSwapSpec.path
        delete redirectSwapSpec.path
      }
      ajaxHelper('get', redirectPath, redirectSwapSpec).then(function() {
        pushUrlIntoHistory(redirectPath)
      })
      return
    }

    const shouldRefresh = hasHeader(xhr, /HX-Refresh:/i) && xhr.getResponseHeader('HX-Refresh') === 'true'

    if (hasHeader(xhr, /HX-Redirect:/i)) {
      location.href = xhr.getResponseHeader('HX-Redirect')
      shouldRefresh && location.reload()
      return
    }

    if (shouldRefresh) {
      location.reload()
      return
    }

    if (hasHeader(xhr, /HX-Retarget:/i)) {
      if (xhr.getResponseHeader('HX-Retarget') === 'this') {
        responseInfo.target = elt
      } else {
        responseInfo.target = asElement(querySelectorExt(elt, xhr.getResponseHeader('HX-Retarget')))
      }
    }

    const historyUpdate = determineHistoryUpdates(elt, responseInfo)

    const responseHandling = resolveResponseHandling(xhr)
    const shouldSwap = responseHandling.swap
    let isError = !!responseHandling.error
    let ignoreTitle = htmx.config.ignoreTitle || responseHandling.ignoreTitle
    let selectOverride = responseHandling.select
    if (responseHandling.target) {
      responseInfo.target = asElement(querySelectorExt(elt, responseHandling.target))
    }
    var swapOverride = etc.swapOverride
    if (swapOverride == null && responseHandling.swapOverride) {
      swapOverride = responseHandling.swapOverride
    }

    // response headers override response handling config
    if (hasHeader(xhr, /HX-Retarget:/i)) {
      if (xhr.getResponseHeader('HX-Retarget') === 'this') {
        responseInfo.target = elt
      } else {
        responseInfo.target = asElement(querySelectorExt(elt, xhr.getResponseHeader('HX-Retarget')))
      }
    }
    if (hasHeader(xhr, /HX-Reswap:/i)) {
      swapOverride = xhr.getResponseHeader('HX-Reswap')
    }

    var serverResponse = xhr.response
    /** @type HtmxBeforeSwapDetails */
    var beforeSwapDetails = mergeObjects({
      shouldSwap,
      serverResponse,
      isError,
      ignoreTitle,
      selectOverride
    }, responseInfo)

    if (responseHandling.event && !triggerEvent(target, responseHandling.event, beforeSwapDetails)) return

    if (!triggerEvent(target, 'htmx:beforeSwap', beforeSwapDetails)) return

    target = beforeSwapDetails.target // allow re-targeting
    serverResponse = beforeSwapDetails.serverResponse // allow updating content
    isError = beforeSwapDetails.isError // allow updating error
    ignoreTitle = beforeSwapDetails.ignoreTitle // allow updating ignoring title
    selectOverride = beforeSwapDetails.selectOverride // allow updating select override

    responseInfo.target = target // Make updated target available to response events
    responseInfo.failed = isError // Make failed property available to response events
    responseInfo.successful = !isError // Make successful property available to response events

    if (beforeSwapDetails.shouldSwap) {
      if (xhr.status === 286) {
        cancelPolling(elt)
      }

      withExtensions(elt, function(extension) {
        serverResponse = extension.transformResponse(serverResponse, xhr, elt)
      })

      // Save current page if there will be a history update
      if (historyUpdate.type) {
        saveCurrentPageToHistory()
      }

      if (hasHeader(xhr, /HX-Reswap:/i)) {
        swapOverride = xhr.getResponseHeader('HX-Reswap')
      }
      var swapSpec = getSwapSpecification(elt, swapOverride)

      if (!swapSpec.hasOwnProperty('ignoreTitle')) {
        swapSpec.ignoreTitle = ignoreTitle
      }

      target.classList.add(htmx.config.swappingClass)

      // optional transition API promise callbacks
      let settleResolve = null
      let settleReject = null

      if (responseInfoSelect) {
        selectOverride = responseInfoSelect
      }

      if (hasHeader(xhr, /HX-Reselect:/i)) {
        selectOverride = xhr.getResponseHeader('HX-Reselect')
      }

      const selectOOB = getClosestAttributeValue(elt, 'hx-select-oob')
      const select = getClosestAttributeValue(elt, 'hx-select')

      let doSwap = function() {
        try {
          // if we need to save history, do so, before swapping so that relative resources have the correct base URL
          if (historyUpdate.type) {
            triggerEvent(getDocument().body, 'htmx:beforeHistoryUpdate', mergeObjects({ history: historyUpdate }, responseInfo))
            if (historyUpdate.type === 'push') {
              pushUrlIntoHistory(historyUpdate.path)
              triggerEvent(getDocument().body, 'htmx:pushedIntoHistory', { path: historyUpdate.path })
            } else {
              replaceUrlInHistory(historyUpdate.path)
              triggerEvent(getDocument().body, 'htmx:replacedInHistory', { path: historyUpdate.path })
            }
          }

          swap(target, serverResponse, swapSpec, {
            select: selectOverride || select,
            selectOOB,
            eventInfo: responseInfo,
            anchor: responseInfo.pathInfo.anchor,
            contextElement: elt,
            afterSwapCallback: function() {
              if (hasHeader(xhr, /HX-Trigger-After-Swap:/i)) {
                let finalElt = elt
                if (!bodyContains(elt)) {
                  finalElt = getDocument().body
                }
                handleTriggerHeader(xhr, 'HX-Trigger-After-Swap', finalElt)
              }
            },
            afterSettleCallback: function() {
              if (hasHeader(xhr, /HX-Trigger-After-Settle:/i)) {
                let finalElt = elt
                if (!bodyContains(elt)) {
                  finalElt = getDocument().body
                }
                handleTriggerHeader(xhr, 'HX-Trigger-After-Settle', finalElt)
              }
              maybeCall(settleResolve)
            }
          })
        } catch (e) {
          triggerErrorEvent(elt, 'htmx:swapError', responseInfo)
          maybeCall(settleReject)
          throw e
        }
      }

      let shouldTransition = htmx.config.globalViewTransitions
      if (swapSpec.hasOwnProperty('transition')) {
        shouldTransition = swapSpec.transition
      }

      if (shouldTransition &&
              triggerEvent(elt, 'htmx:beforeTransition', responseInfo) &&
              typeof Promise !== 'undefined' &&
              // @ts-ignore experimental feature atm
              document.startViewTransition) {
        const settlePromise = new Promise(function(_resolve, _reject) {
          settleResolve = _resolve
          settleReject = _reject
        })
        // wrap the original doSwap() in a call to startViewTransition()
        const innerDoSwap = doSwap
        doSwap = function() {
          // @ts-ignore experimental feature atm
          document.startViewTransition(function() {
            innerDoSwap()
            return settlePromise
          })
        }
      }

      if (swapSpec.swapDelay > 0) {
        getWindow().setTimeout(doSwap, swapSpec.swapDelay)
      } else {
        doSwap()
      }
    }
    if (isError) {
      triggerErrorEvent(elt, 'htmx:responseError', mergeObjects({ error: 'Response Status Error Code ' + xhr.status + ' from ' + responseInfo.pathInfo.requestPath }, responseInfo))
    }
  }

  //= ===================================================================
  // Extensions API
  //= ===================================================================

  /** @type {Object<string, HtmxExtension>} */
  const extensions = {}

  /**
   * extensionBase defines the default functions for all extensions.
   * @returns {HtmxExtension}
   */
  function extensionBase() {
    return {
      init: function(api) { return null },
      getSelectors: function() { return null },
      onEvent: function(name, evt) { return true },
      transformResponse: function(text, xhr, elt) { return text },
      isInlineSwap: function(swapStyle) { return false },
      handleSwap: function(swapStyle, target, fragment, settleInfo) { return false },
      encodeParameters: function(xhr, parameters, elt) { return null }
    }
  }

  /**
   * defineExtension initializes the extension and adds it to the htmx registry
   *
   * @see https://htmx.org/api/#defineExtension
   *
   * @param {string} name the extension name
   * @param {HtmxExtension} extension the extension definition
   */
  function defineExtension(name, extension) {
    if (extension.init) {
      extension.init(internalAPI)
    }
    extensions[name] = mergeObjects(extensionBase(), extension)
  }

  /**
   * removeExtension removes an extension from the htmx registry
   *
   * @see https://htmx.org/api/#removeExtension
   *
   * @param {string} name
   */
  function removeExtension(name) {
    delete extensions[name]
  }

  /**
   * getExtensions searches up the DOM tree to return all extensions that can be applied to a given element
   *
   * @param {Element} elt
   * @param {HtmxExtension[]=} extensionsToReturn
   * @param {string[]=} extensionsToIgnore
   * @returns {HtmxExtension[]}
   */
  function getExtensions(elt, extensionsToReturn, extensionsToIgnore) {
    if (extensionsToReturn == undefined) {
      extensionsToReturn = []
    }
    if (elt == undefined) {
      return extensionsToReturn
    }
    if (extensionsToIgnore == undefined) {
      extensionsToIgnore = []
    }
    const extensionsForElement = getAttributeValue(elt, 'hx-ext')
    if (extensionsForElement) {
      forEach(extensionsForElement.split(','), function(extensionName) {
        extensionName = extensionName.replace(/ /g, '')
        if (extensionName.slice(0, 7) == 'ignore:') {
          extensionsToIgnore.push(extensionName.slice(7))
          return
        }
        if (extensionsToIgnore.indexOf(extensionName) < 0) {
          const extension = extensions[extensionName]
          if (extension && extensionsToReturn.indexOf(extension) < 0) {
            extensionsToReturn.push(extension)
          }
        }
      })
    }
    return getExtensions(asElement(parentElt(elt)), extensionsToReturn, extensionsToIgnore)
  }

  //= ===================================================================
  // Initialization
  //= ===================================================================
  var isReady = false
  getDocument().addEventListener('DOMContentLoaded', function() {
    isReady = true
  })

  /**
   * Execute a function now if DOMContentLoaded has fired, otherwise listen for it.
   *
   * This function uses isReady because there is no reliable way to ask the browser whether
   * the DOMContentLoaded event has already been fired; there's a gap between DOMContentLoaded
   * firing and readystate=complete.
   */
  function ready(fn) {
    // Checking readyState here is a failsafe in case the htmx script tag entered the DOM by
    // some means other than the initial page load.
    if (isReady || getDocument().readyState === 'complete') {
      fn()
    } else {
      getDocument().addEventListener('DOMContentLoaded', fn)
    }
  }

  function insertIndicatorStyles() {
    if (htmx.config.includeIndicatorStyles !== false) {
      const nonceAttribute = htmx.config.inlineStyleNonce ? ` nonce="${htmx.config.inlineStyleNonce}"` : ''
      getDocument().head.insertAdjacentHTML('beforeend',
        '<style' + nonceAttribute + '>\
      .' + htmx.config.indicatorClass + '{opacity:0}\
      .' + htmx.config.requestClass + ' .' + htmx.config.indicatorClass + '{opacity:1; transition: opacity 200ms ease-in;}\
      .' + htmx.config.requestClass + '.' + htmx.config.indicatorClass + '{opacity:1; transition: opacity 200ms ease-in;}\
      </style>')
    }
  }

  function getMetaConfig() {
    /** @type HTMLMetaElement */
    const element = getDocument().querySelector('meta[name="htmx-config"]')
    if (element) {
      return parseJSON(element.content)
    } else {
      return null
    }
  }

  function mergeMetaConfig() {
    const metaConfig = getMetaConfig()
    if (metaConfig) {
      htmx.config = mergeObjects(htmx.config, metaConfig)
    }
  }

  // initialize the document
  ready(function() {
    mergeMetaConfig()
    insertIndicatorStyles()
    let body = getDocument().body
    processNode(body)
    const restoredElts = getDocument().querySelectorAll(
      "[hx-trigger='restored'],[data-hx-trigger='restored']"
    )
    body.addEventListener('htmx:abort', function(evt) {
      const target = evt.target
      const internalData = getInternalData(target)
      if (internalData && internalData.xhr) {
        internalData.xhr.abort()
      }
    })
    /** @type {(ev: PopStateEvent) => any} */
    const originalPopstate = window.onpopstate ? window.onpopstate.bind(window) : null
    /** @type {(ev: PopStateEvent) => any} */
    window.onpopstate = function(event) {
      if (event.state && event.state.htmx) {
        restoreHistory()
        forEach(restoredElts, function(elt) {
          triggerEvent(elt, 'htmx:restored', {
            document: getDocument(),
            triggerEvent
          })
        })
      } else {
        if (originalPopstate) {
          originalPopstate(event)
        }
      }
    }
    getWindow().setTimeout(function() {
      triggerEvent(body, 'htmx:load', {}) // give ready handlers a chance to load up before firing this event
      body = null // kill reference for gc
    }, 0)
  })

  return htmx
})()

/** @typedef {'get'|'head'|'post'|'put'|'delete'|'connect'|'options'|'trace'|'patch'} HttpVerb */

/**
 * @typedef {Object} SwapOptions
 * @property {string} [select]
 * @property {string} [selectOOB]
 * @property {*} [eventInfo]
 * @property {string} [anchor]
 * @property {Element} [contextElement]
 * @property {swapCallback} [afterSwapCallback]
 * @property {swapCallback} [afterSettleCallback]
 */

/**
 * @callback swapCallback
 */

/**
 * @typedef {'innerHTML' | 'outerHTML' | 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend' | 'delete' | 'none' | string} HtmxSwapStyle
 */

/**
 * @typedef HtmxSwapSpecification
 * @property {HtmxSwapStyle} swapStyle
 * @property {number} swapDelay
 * @property {number} settleDelay
 * @property {boolean} [transition]
 * @property {boolean} [ignoreTitle]
 * @property {string} [head]
 * @property {'top' | 'bottom'} [scroll]
 * @property {string} [scrollTarget]
 * @property {string} [show]
 * @property {string} [showTarget]
 * @property {boolean} [focusScroll]
 */

/**
 * @typedef {((this:Node, evt:Event) => boolean) & {source: string}} ConditionalFunction
 */

/**
 * @typedef {Object} HtmxTriggerSpecification
 * @property {string} trigger
 * @property {number} [pollInterval]
 * @property {ConditionalFunction} [eventFilter]
 * @property {boolean} [changed]
 * @property {boolean} [once]
 * @property {boolean} [consume]
 * @property {number} [delay]
 * @property {string} [from]
 * @property {string} [target]
 * @property {number} [throttle]
 * @property {string} [queue]
 * @property {string} [root]
 * @property {string} [threshold]
 */

/**
 * @typedef {{elt: Element, message: string, validity: ValidityState}} HtmxElementValidationError
 */

/**
 * @typedef {Record<string, string>} HtmxHeaderSpecification
 * @property {'true'} HX-Request
 * @property {string|null} HX-Trigger
 * @property {string|null} HX-Trigger-Name
 * @property {string|null} HX-Target
 * @property {string} HX-Current-URL
 * @property {string} [HX-Prompt]
 * @property {'true'} [HX-Boosted]
 * @property {string} [Content-Type]
 * @property {'true'} [HX-History-Restore-Request]
 */

/** @typedef HtmxAjaxHelperContext
 * @property {Element|string} [source]
 * @property {Event} [event]
 * @property {HtmxAjaxHandler} [handler]
 * @property {Element|string} [target]
 * @property {HtmxSwapStyle} [swap]
 * @property {Object|FormData} [values]
 * @property {Record<string,string>} [headers]
 * @property {string} [select]
 */

/**
 * @typedef {Object} HtmxRequestConfig
 * @property {boolean} boosted
 * @property {boolean} useUrlParams
 * @property {FormData} formData
 * @property {Object} parameters formData proxy
 * @property {FormData} unfilteredFormData
 * @property {Object} unfilteredParameters unfilteredFormData proxy
 * @property {HtmxHeaderSpecification} headers
 * @property {Element} target
 * @property {HttpVerb} verb
 * @property {HtmxElementValidationError[]} errors
 * @property {boolean} withCredentials
 * @property {number} timeout
 * @property {string} path
 * @property {Event} triggeringEvent
 */

/**
 * @typedef {Object} HtmxResponseInfo
 * @property {XMLHttpRequest} xhr
 * @property {Element} target
 * @property {HtmxRequestConfig} requestConfig
 * @property {HtmxAjaxEtc} etc
 * @property {boolean} boosted
 * @property {string} select
 * @property {{requestPath: string, finalRequestPath: string, responsePath: string|null, anchor: string}} pathInfo
 * @property {boolean} [failed]
 * @property {boolean} [successful]
 */

/**
 * @typedef {Object} HtmxAjaxEtc
 * @property {boolean} [returnPromise]
 * @property {HtmxAjaxHandler} [handler]
 * @property {string} [select]
 * @property {Element} [targetOverride]
 * @property {HtmxSwapStyle} [swapOverride]
 * @property {Record<string,string>} [headers]
 * @property {Object|FormData} [values]
 * @property {boolean} [credentials]
 * @property {number} [timeout]
 */

/**
 * @typedef {Object} HtmxResponseHandlingConfig
 * @property {string} [code]
 * @property {boolean} swap
 * @property {boolean} [error]
 * @property {boolean} [ignoreTitle]
 * @property {string} [select]
 * @property {string} [target]
 * @property {string} [swapOverride]
 * @property {string} [event]
 */

/**
 * @typedef {HtmxResponseInfo & {shouldSwap: boolean, serverResponse: any, isError: boolean, ignoreTitle: boolean, selectOverride:string}} HtmxBeforeSwapDetails
 */

/**
 * @callback HtmxAjaxHandler
 * @param {Element} elt
 * @param {HtmxResponseInfo} responseInfo
 */

/**
 * @typedef {(() => void)} HtmxSettleTask
 */

/**
 * @typedef {Object} HtmxSettleInfo
 * @property {HtmxSettleTask[]} tasks
 * @property {Element[]} elts
 * @property {string} [title]
 */

/**
 * @typedef {Object} HtmxExtension
 * @see https://htmx.org/extensions/#defining
 * @property {(api: any) => void} init
 * @property {(name: string, event: Event|CustomEvent) => boolean} onEvent
 * @property {(text: string, xhr: XMLHttpRequest, elt: Element) => string} transformResponse
 * @property {(swapStyle: HtmxSwapStyle) => boolean} isInlineSwap
 * @property {(swapStyle: HtmxSwapStyle, target: Element, fragment: Node, settleInfo: HtmxSettleInfo) => boolean} handleSwap
 * @property {(xhr: XMLHttpRequest, parameters: FormData, elt: Element) => *|string|null} encodeParameters
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (htmx);


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBRVI7QUFDbEJBLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLDBEQUFVLENBQUM7Ozs7Ozs7Ozs7OztBQ1YyQjtBQUU1RCxJQUFNRSxHQUFHLEdBQUdELHVKQUFnQixDQUFDLENBQUM7QUFDOUI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQztBQUNBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0EsZUFBZSxnQ0FBZ0M7QUFDL0M7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUI7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFVBQVU7QUFDekIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QztBQUNBLGVBQWUsK0JBQStCO0FBQzlDO0FBQ0EsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQSxlQUFlLDRCQUE0QjtBQUMzQztBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0EsZUFBZSx3QkFBd0I7QUFDdkM7QUFDQSxlQUFlLHdCQUF3QjtBQUN2QztBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGdDQUFnQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkLGtCQUFrQixTQUFTO0FBQzNCLGtCQUFrQixRQUFRO0FBQzFCLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGtCQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLGtFQUFrRSxVQUFVO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtB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QixjQUFjLFNBQVM7QUFDdkIsY0FBYyxtQkFBbUI7QUFDakMsY0FBYyxhQUFhO0FBQzNCLGNBQWMsU0FBUztBQUN2QixjQUFjLFFBQVE7QUFDdEIsZUFBZSwyRkFBMkY7QUFDMUcsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsU0FBUztBQUN2Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjLFNBQVM7QUFDdkIsY0FBYyxpQkFBaUI7QUFDL0IsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsU0FBUztBQUN2QixjQUFjLGVBQWU7QUFDN0IsY0FBYyx1QkFBdUI7QUFDckMsY0FBYyxpQkFBaUI7QUFDL0IsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsUUFBUTtBQUN0Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsU0FBUztBQUN2QixjQUFjLFNBQVM7QUFDdkIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0EsYUFBYSxvQkFBb0IsMEdBQTBHO0FBQzNJOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxrQkFBa0I7QUFDN0I7O0FBRUE7QUFDQSxhQUFhLGNBQWM7QUFDM0I7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsY0FBYyxrQkFBa0I7QUFDaEMsY0FBYyxXQUFXO0FBQ3pCLGNBQWMsUUFBUTtBQUN0Qjs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDLGNBQWMscURBQXFEO0FBQ25FLGNBQWMsNkRBQTZEO0FBQzNFLGNBQWMsdUNBQXVDO0FBQ3JELGNBQWMsb0dBQW9HO0FBQ2xILGNBQWMsNEVBQTRFO0FBQzFGO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7O0FDNWdLbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bXgub3JnL2Rpc3QvaHRteC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5cclxuaW1wb3J0ICdodG14Lm9yZyc7XHJcbndpbmRvdy5odG14ID0gcmVxdWlyZSgnaHRteC5vcmcnKTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnVuZGxlJztcclxuXHJcbmNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAoKTtcclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCJ2YXIgaHRteCA9IChmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgLy8gUHVibGljIEFQSVxuICBjb25zdCBodG14ID0ge1xuICAgIC8vIFRzYyBtYWRuZXNzIGhlcmUsIGFzc2lnbmluZyB0aGUgZnVuY3Rpb25zIGRpcmVjdGx5IHJlc3VsdHMgaW4gYW4gaW52YWxpZCBUeXBlU2NyaXB0IG91dHB1dCwgYnV0IHJlYXNzaWduaW5nIGlzIGZpbmVcbiAgICAvKiBFdmVudCBwcm9jZXNzaW5nICovXG4gICAgLyoqIEB0eXBlIHt0eXBlb2Ygb25Mb2FkSGVscGVyfSAqL1xuICAgIG9uTG9hZDogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiBwcm9jZXNzTm9kZX0gKi9cbiAgICBwcm9jZXNzOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIGFkZEV2ZW50TGlzdGVuZXJJbXBsfSAqL1xuICAgIG9uOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIHJlbW92ZUV2ZW50TGlzdGVuZXJJbXBsfSAqL1xuICAgIG9mZjogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiB0cmlnZ2VyRXZlbnR9ICovXG4gICAgdHJpZ2dlcjogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiBhamF4SGVscGVyfSAqL1xuICAgIGFqYXg6IG51bGwsXG4gICAgLyogRE9NIHF1ZXJ5aW5nIGhlbHBlcnMgKi9cbiAgICAvKiogQHR5cGUge3R5cGVvZiBmaW5kfSAqL1xuICAgIGZpbmQ6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgZmluZEFsbH0gKi9cbiAgICBmaW5kQWxsOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIGNsb3Nlc3R9ICovXG4gICAgY2xvc2VzdDogbnVsbCxcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbnB1dCB2YWx1ZXMgdGhhdCB3b3VsZCByZXNvbHZlIGZvciBhIGdpdmVuIGVsZW1lbnQgdmlhIHRoZSBodG14IHZhbHVlIHJlc29sdXRpb24gbWVjaGFuaXNtXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyN2YWx1ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0IHRoZSBlbGVtZW50IHRvIHJlc29sdmUgdmFsdWVzIG9uXG4gICAgICogQHBhcmFtIHtIdHRwVmVyYn0gdHlwZSB0aGUgcmVxdWVzdCB0eXBlIChlLmcuICoqZ2V0Kiogb3IgKipwb3N0KiopIG5vbi1HRVQncyB3aWxsIGluY2x1ZGUgdGhlIGVuY2xvc2luZyBmb3JtIG9mIHRoZSBlbGVtZW50LiBEZWZhdWx0cyB0byAqKnBvc3QqKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFsdWVzOiBmdW5jdGlvbihlbHQsIHR5cGUpIHtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWVzID0gZ2V0SW5wdXRWYWx1ZXMoZWx0LCB0eXBlIHx8ICdwb3N0JylcbiAgICAgIHJldHVybiBpbnB1dFZhbHVlcy52YWx1ZXNcbiAgICB9LFxuICAgIC8qIERPTSBtYW5pcHVsYXRpb24gaGVscGVycyAqL1xuICAgIC8qKiBAdHlwZSB7dHlwZW9mIHJlbW92ZUVsZW1lbnR9ICovXG4gICAgcmVtb3ZlOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIGFkZENsYXNzVG9FbGVtZW50fSAqL1xuICAgIGFkZENsYXNzOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnR9ICovXG4gICAgcmVtb3ZlQ2xhc3M6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgdG9nZ2xlQ2xhc3NPbkVsZW1lbnR9ICovXG4gICAgdG9nZ2xlQ2xhc3M6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgdGFrZUNsYXNzRm9yRWxlbWVudH0gKi9cbiAgICB0YWtlQ2xhc3M6IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2Ygc3dhcH0gKi9cbiAgICBzd2FwOiBudWxsLFxuICAgIC8qIEV4dGVuc2lvbiBlbnRyeXBvaW50cyAqL1xuICAgIC8qKiBAdHlwZSB7dHlwZW9mIGRlZmluZUV4dGVuc2lvbn0gKi9cbiAgICBkZWZpbmVFeHRlbnNpb246IG51bGwsXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgcmVtb3ZlRXh0ZW5zaW9ufSAqL1xuICAgIHJlbW92ZUV4dGVuc2lvbjogbnVsbCxcbiAgICAvKiBEZWJ1Z2dpbmcgKi9cbiAgICAvKiogQHR5cGUge3R5cGVvZiBsb2dBbGx9ICovXG4gICAgbG9nQWxsOiBudWxsLFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIGxvZ05vbmV9ICovXG4gICAgbG9nTm9uZTogbnVsbCxcbiAgICAvKiBEZWJ1Z2dpbmcgKi9cbiAgICAvKipcbiAgICAgKiBUaGUgbG9nZ2VyIGh0bXggdXNlcyB0byBsb2cgd2l0aFxuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jbG9nZ2VyXG4gICAgICovXG4gICAgbG9nZ2VyOiBudWxsLFxuICAgIC8qKlxuICAgICAqIEEgcHJvcGVydHkgaG9sZGluZyB0aGUgY29uZmlndXJhdGlvbiBodG14IHVzZXMgYXQgcnVudGltZS5cbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB1c2luZyBhIFttZXRhIHRhZ10oaHR0cHM6Ly9odG14Lm9yZy9kb2NzLyNjb25maWcpIGlzIHRoZSBwcmVmZXJyZWQgbWVjaGFuaXNtIGZvciBzZXR0aW5nIHRoZXNlIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNjb25maWdcbiAgICAgKi9cbiAgICBjb25maWc6IHtcbiAgICAgIC8qKlxuICAgICAgICogV2hldGhlciB0byB1c2UgaGlzdG9yeS5cbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgICAqL1xuICAgICAgaGlzdG9yeUVuYWJsZWQ6IHRydWUsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBudW1iZXIgb2YgcGFnZXMgdG8ga2VlcCBpbiAqKmxvY2FsU3RvcmFnZSoqIGZvciBoaXN0b3J5IHN1cHBvcnQuXG4gICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICAqIEBkZWZhdWx0IDEwXG4gICAgICAgKi9cbiAgICAgIGhpc3RvcnlDYWNoZVNpemU6IDEwLFxuICAgICAgLyoqXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICByZWZyZXNoT25IaXN0b3J5TWlzczogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBkZWZhdWx0IHN3YXAgc3R5bGUgdG8gdXNlIGlmICoqW2h4LXN3YXBdKGh0dHBzOi8vaHRteC5vcmcvYXR0cmlidXRlcy9oeC1zd2FwKSoqIGlzIG9taXR0ZWQuXG4gICAgICAgKiBAdHlwZSBIdG14U3dhcFN0eWxlXG4gICAgICAgKiBAZGVmYXVsdCAnaW5uZXJIVE1MJ1xuICAgICAgICovXG4gICAgICBkZWZhdWx0U3dhcFN0eWxlOiAnaW5uZXJIVE1MJyxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGRlZmF1bHQgZGVsYXkgYmV0d2VlbiByZWNlaXZpbmcgYSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIGRvaW5nIHRoZSBzd2FwLlxuICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgKiBAZGVmYXVsdCAwXG4gICAgICAgKi9cbiAgICAgIGRlZmF1bHRTd2FwRGVsYXk6IDAsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBkZWZhdWx0IGRlbGF5IGJldHdlZW4gY29tcGxldGluZyB0aGUgY29udGVudCBzd2FwIGFuZCBzZXR0bGluZyBhdHRyaWJ1dGVzLlxuICAgICAgICogQHR5cGUgbnVtYmVyXG4gICAgICAgKiBAZGVmYXVsdCAyMFxuICAgICAgICovXG4gICAgICBkZWZhdWx0U2V0dGxlRGVsYXk6IDIwLFxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0cnVlLCBodG14IHdpbGwgaW5qZWN0IGEgc21hbGwgYW1vdW50IG9mIENTUyBpbnRvIHRoZSBwYWdlIHRvIG1ha2UgaW5kaWNhdG9ycyBpbnZpc2libGUgdW5sZXNzIHRoZSAqKmh0bXgtaW5kaWNhdG9yKiogY2xhc3MgaXMgcHJlc2VudC5cbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgICAqL1xuICAgICAgaW5jbHVkZUluZGljYXRvclN0eWxlczogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGNsYXNzIHRvIHBsYWNlIG9uIGluZGljYXRvcnMgd2hlbiBhIHJlcXVlc3QgaXMgaW4gZmxpZ2h0LlxuICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgKiBAZGVmYXVsdCAnaHRteC1pbmRpY2F0b3InXG4gICAgICAgKi9cbiAgICAgIGluZGljYXRvckNsYXNzOiAnaHRteC1pbmRpY2F0b3InLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgY2xhc3MgdG8gcGxhY2Ugb24gdHJpZ2dlcmluZyBlbGVtZW50cyB3aGVuIGEgcmVxdWVzdCBpcyBpbiBmbGlnaHQuXG4gICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAqIEBkZWZhdWx0ICdodG14LXJlcXVlc3QnXG4gICAgICAgKi9cbiAgICAgIHJlcXVlc3RDbGFzczogJ2h0bXgtcmVxdWVzdCcsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBjbGFzcyB0byB0ZW1wb3JhcmlseSBwbGFjZSBvbiBlbGVtZW50cyB0aGF0IGh0bXggaGFzIGFkZGVkIHRvIHRoZSBET00uXG4gICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAqIEBkZWZhdWx0ICdodG14LWFkZGVkJ1xuICAgICAgICovXG4gICAgICBhZGRlZENsYXNzOiAnaHRteC1hZGRlZCcsXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBjbGFzcyB0byBwbGFjZSBvbiB0YXJnZXQgZWxlbWVudHMgd2hlbiBodG14IGlzIGluIHRoZSBzZXR0bGluZyBwaGFzZS5cbiAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICogQGRlZmF1bHQgJ2h0bXgtc2V0dGxpbmcnXG4gICAgICAgKi9cbiAgICAgIHNldHRsaW5nQ2xhc3M6ICdodG14LXNldHRsaW5nJyxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGNsYXNzIHRvIHBsYWNlIG9uIHRhcmdldCBlbGVtZW50cyB3aGVuIGh0bXggaXMgaW4gdGhlIHN3YXBwaW5nIHBoYXNlLlxuICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgKiBAZGVmYXVsdCAnaHRteC1zd2FwcGluZydcbiAgICAgICAqL1xuICAgICAgc3dhcHBpbmdDbGFzczogJ2h0bXgtc3dhcHBpbmcnLFxuICAgICAgLyoqXG4gICAgICAgKiBBbGxvd3MgdGhlIHVzZSBvZiBldmFsLWxpa2UgZnVuY3Rpb25hbGl0eSBpbiBodG14LCB0byBlbmFibGUgKipoeC12YXJzKiosIHRyaWdnZXIgY29uZGl0aW9ucyAmIHNjcmlwdCB0YWcgZXZhbHVhdGlvbi4gQ2FuIGJlIHNldCB0byAqKmZhbHNlKiogZm9yIENTUCBjb21wYXRpYmlsaXR5LlxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAgICovXG4gICAgICBhbGxvd0V2YWw6IHRydWUsXG4gICAgICAvKipcbiAgICAgICAqIElmIHNldCB0byBmYWxzZSwgZGlzYWJsZXMgdGhlIGludGVycHJldGF0aW9uIG9mIHNjcmlwdCB0YWdzLlxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAgICovXG4gICAgICBhbGxvd1NjcmlwdFRhZ3M6IHRydWUsXG4gICAgICAvKipcbiAgICAgICAqIElmIHNldCwgdGhlIG5vbmNlIHdpbGwgYmUgYWRkZWQgdG8gaW5saW5lIHNjcmlwdHMuXG4gICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICAgKi9cbiAgICAgIGlubGluZVNjcmlwdE5vbmNlOiAnJyxcbiAgICAgIC8qKlxuICAgICAgICogSWYgc2V0LCB0aGUgbm9uY2Ugd2lsbCBiZSBhZGRlZCB0byBpbmxpbmUgc3R5bGVzLlxuICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAgICovXG4gICAgICBpbmxpbmVTdHlsZU5vbmNlOiAnJyxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGF0dHJpYnV0ZXMgdG8gc2V0dGxlIGR1cmluZyB0aGUgc2V0dGxpbmcgcGhhc2UuXG4gICAgICAgKiBAdHlwZSBzdHJpbmdbXVxuICAgICAgICogQGRlZmF1bHQgWydjbGFzcycsICdzdHlsZScsICd3aWR0aCcsICdoZWlnaHQnXVxuICAgICAgICovXG4gICAgICBhdHRyaWJ1dGVzVG9TZXR0bGU6IFsnY2xhc3MnLCAnc3R5bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gICAgICAvKipcbiAgICAgICAqIEFsbG93IGNyb3NzLXNpdGUgQWNjZXNzLUNvbnRyb2wgcmVxdWVzdHMgdXNpbmcgY3JlZGVudGlhbHMgc3VjaCBhcyBjb29raWVzLCBhdXRob3JpemF0aW9uIGhlYWRlcnMgb3IgVExTIGNsaWVudCBjZXJ0aWZpY2F0ZXMuXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgLyoqXG4gICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICAqL1xuICAgICAgdGltZW91dDogMCxcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgKipnZXRXZWJTb2NrZXRSZWNvbm5lY3REZWxheSoqIGZvciByZWNvbm5lY3RpbmcgYWZ0ZXIgdW5leHBlY3RlZCBjb25uZWN0aW9uIGxvc3MgYnkgdGhlIGV2ZW50IGNvZGUgKipBYm5vcm1hbCBDbG9zdXJlKiosICoqU2VydmljZSBSZXN0YXJ0Kiogb3IgKipUcnkgQWdhaW4gTGF0ZXIqKi5cbiAgICAgICAqIEB0eXBlIHsnZnVsbC1qaXR0ZXInIHwgKChyZXRyeUNvdW50Om51bWJlcikgPT4gbnVtYmVyKX1cbiAgICAgICAqIEBkZWZhdWx0IFwiZnVsbC1qaXR0ZXJcIlxuICAgICAgICovXG4gICAgICB3c1JlY29ubmVjdERlbGF5OiAnZnVsbC1qaXR0ZXInLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdHlwZSBvZiBiaW5hcnkgZGF0YSBiZWluZyByZWNlaXZlZCBvdmVyIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgICAgICogQHR5cGUgQmluYXJ5VHlwZVxuICAgICAgICogQGRlZmF1bHQgJ2Jsb2InXG4gICAgICAgKi9cbiAgICAgIHdzQmluYXJ5VHlwZTogJ2Jsb2InLFxuICAgICAgLyoqXG4gICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAqIEBkZWZhdWx0ICdbaHgtZGlzYWJsZV0sIFtkYXRhLWh4LWRpc2FibGVdJ1xuICAgICAgICovXG4gICAgICBkaXNhYmxlU2VsZWN0b3I6ICdbaHgtZGlzYWJsZV0sIFtkYXRhLWh4LWRpc2FibGVdJyxcbiAgICAgIC8qKlxuICAgICAgICogQHR5cGUgeydhdXRvJyB8ICdpbnN0YW50JyB8ICdzbW9vdGgnfVxuICAgICAgICogQGRlZmF1bHQgJ3Ntb290aCdcbiAgICAgICAqL1xuICAgICAgc2Nyb2xsQmVoYXZpb3I6ICdpbnN0YW50JyxcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIGZvY3VzZWQgZWxlbWVudCBzaG91bGQgYmUgc2Nyb2xsZWQgaW50byB2aWV3LlxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgICAqL1xuICAgICAgZGVmYXVsdEZvY3VzU2Nyb2xsOiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICogSWYgc2V0IHRvIHRydWUgaHRteCB3aWxsIGluY2x1ZGUgYSBjYWNoZS1idXN0aW5nIHBhcmFtZXRlciBpbiBHRVQgcmVxdWVzdHMgdG8gYXZvaWQgY2FjaGluZyBwYXJ0aWFsIHJlc3BvbnNlcyBieSB0aGUgYnJvd3NlclxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgICAqL1xuICAgICAgZ2V0Q2FjaGVCdXN0ZXJQYXJhbTogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqIElmIHNldCB0byB0cnVlLCBodG14IHdpbGwgdXNlIHRoZSBWaWV3IFRyYW5zaXRpb24gQVBJIHdoZW4gc3dhcHBpbmcgaW4gbmV3IGNvbnRlbnQuXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICBnbG9iYWxWaWV3VHJhbnNpdGlvbnM6IGZhbHNlLFxuICAgICAgLyoqXG4gICAgICAgKiBodG14IHdpbGwgZm9ybWF0IHJlcXVlc3RzIHdpdGggdGhlc2UgbWV0aG9kcyBieSBlbmNvZGluZyB0aGVpciBwYXJhbWV0ZXJzIGluIHRoZSBVUkwsIG5vdCB0aGUgcmVxdWVzdCBib2R5XG4gICAgICAgKiBAdHlwZSB7KEh0dHBWZXJiKVtdfVxuICAgICAgICogQGRlZmF1bHQgWydnZXQnLCAnZGVsZXRlJ11cbiAgICAgICAqL1xuICAgICAgbWV0aG9kc1RoYXRVc2VVcmxQYXJhbXM6IFsnZ2V0JywgJ2RlbGV0ZSddLFxuICAgICAgLyoqXG4gICAgICAgKiBJZiBzZXQgdG8gdHJ1ZSwgZGlzYWJsZXMgaHRteC1iYXNlZCByZXF1ZXN0cyB0byBub24tb3JpZ2luIGhvc3RzLlxuICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgICAqL1xuICAgICAgc2VsZlJlcXVlc3RzT25seTogdHJ1ZSxcbiAgICAgIC8qKlxuICAgICAgICogSWYgc2V0IHRvIHRydWUgaHRteCB3aWxsIG5vdCB1cGRhdGUgdGhlIHRpdGxlIG9mIHRoZSBkb2N1bWVudCB3aGVuIGEgdGl0bGUgdGFnIGlzIGZvdW5kIGluIG5ldyBjb250ZW50XG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICovXG4gICAgICBpZ25vcmVUaXRsZTogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqIFdoZXRoZXIgdGhlIHRhcmdldCBvZiBhIGJvb3N0ZWQgZWxlbWVudCBpcyBzY3JvbGxlZCBpbnRvIHRoZSB2aWV3cG9ydC5cbiAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgICAqL1xuICAgICAgc2Nyb2xsSW50b1ZpZXdPbkJvb3N0OiB0cnVlLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgY2FjaGUgdG8gc3RvcmUgZXZhbHVhdGVkIHRyaWdnZXIgc3BlY2lmaWNhdGlvbnMgaW50by5cbiAgICAgICAqIFlvdSBtYXkgZGVmaW5lIGEgc2ltcGxlIG9iamVjdCB0byB1c2UgYSBuZXZlci1jbGVhcmluZyBjYWNoZSwgb3IgaW1wbGVtZW50IHlvdXIgb3duIHN5c3RlbSB1c2luZyBhIFtwcm94eSBvYmplY3RdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb3h5KVxuICAgICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAgICovXG4gICAgICB0cmlnZ2VyU3BlY3NDYWNoZTogbnVsbCxcbiAgICAgIC8qKiBAdHlwZSBib29sZWFuICovXG4gICAgICBkaXNhYmxlSW5oZXJpdGFuY2U6IGZhbHNlLFxuICAgICAgLyoqIEB0eXBlIEh0bXhSZXNwb25zZUhhbmRsaW5nQ29uZmlnW10gKi9cbiAgICAgIHJlc3BvbnNlSGFuZGxpbmc6IFtcbiAgICAgICAgeyBjb2RlOiAnMjA0Jywgc3dhcDogZmFsc2UgfSxcbiAgICAgICAgeyBjb2RlOiAnWzIzXS4uJywgc3dhcDogdHJ1ZSB9LFxuICAgICAgICB7IGNvZGU6ICdbNDVdLi4nLCBzd2FwOiBmYWxzZSwgZXJyb3I6IHRydWUgfVxuICAgICAgXSxcbiAgICAgIC8qKlxuICAgICAgICogV2hldGhlciB0byBwcm9jZXNzIE9PQiBzd2FwcyBvbiBlbGVtZW50cyB0aGF0IGFyZSBuZXN0ZWQgd2l0aGluIHRoZSBtYWluIHJlc3BvbnNlIGVsZW1lbnQuXG4gICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICAgKi9cbiAgICAgIGFsbG93TmVzdGVkT29iU3dhcHM6IHRydWVcbiAgICB9LFxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIHBhcnNlSW50ZXJ2YWx9ICovXG4gICAgcGFyc2VJbnRlcnZhbDogbnVsbCxcbiAgICAvKiogQHR5cGUge3R5cGVvZiBpbnRlcm5hbEV2YWx9ICovXG4gICAgXzogbnVsbCxcbiAgICB2ZXJzaW9uOiAnMi4wLjEnXG4gIH1cbiAgLy8gVHNjIG1hZG5lc3MgcGFydCAyXG4gIGh0bXgub25Mb2FkID0gb25Mb2FkSGVscGVyXG4gIGh0bXgucHJvY2VzcyA9IHByb2Nlc3NOb2RlXG4gIGh0bXgub24gPSBhZGRFdmVudExpc3RlbmVySW1wbFxuICBodG14Lm9mZiA9IHJlbW92ZUV2ZW50TGlzdGVuZXJJbXBsXG4gIGh0bXgudHJpZ2dlciA9IHRyaWdnZXJFdmVudFxuICBodG14LmFqYXggPSBhamF4SGVscGVyXG4gIGh0bXguZmluZCA9IGZpbmRcbiAgaHRteC5maW5kQWxsID0gZmluZEFsbFxuICBodG14LmNsb3Nlc3QgPSBjbG9zZXN0XG4gIGh0bXgucmVtb3ZlID0gcmVtb3ZlRWxlbWVudFxuICBodG14LmFkZENsYXNzID0gYWRkQ2xhc3NUb0VsZW1lbnRcbiAgaHRteC5yZW1vdmVDbGFzcyA9IHJlbW92ZUNsYXNzRnJvbUVsZW1lbnRcbiAgaHRteC50b2dnbGVDbGFzcyA9IHRvZ2dsZUNsYXNzT25FbGVtZW50XG4gIGh0bXgudGFrZUNsYXNzID0gdGFrZUNsYXNzRm9yRWxlbWVudFxuICBodG14LnN3YXAgPSBzd2FwXG4gIGh0bXguZGVmaW5lRXh0ZW5zaW9uID0gZGVmaW5lRXh0ZW5zaW9uXG4gIGh0bXgucmVtb3ZlRXh0ZW5zaW9uID0gcmVtb3ZlRXh0ZW5zaW9uXG4gIGh0bXgubG9nQWxsID0gbG9nQWxsXG4gIGh0bXgubG9nTm9uZSA9IGxvZ05vbmVcbiAgaHRteC5wYXJzZUludGVydmFsID0gcGFyc2VJbnRlcnZhbFxuICBodG14Ll8gPSBpbnRlcm5hbEV2YWxcblxuICBjb25zdCBpbnRlcm5hbEFQSSA9IHtcbiAgICBhZGRUcmlnZ2VySGFuZGxlcixcbiAgICBib2R5Q29udGFpbnMsXG4gICAgY2FuQWNjZXNzTG9jYWxTdG9yYWdlLFxuICAgIGZpbmRUaGlzRWxlbWVudCxcbiAgICBmaWx0ZXJWYWx1ZXMsXG4gICAgc3dhcCxcbiAgICBoYXNBdHRyaWJ1dGUsXG4gICAgZ2V0QXR0cmlidXRlVmFsdWUsXG4gICAgZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlLFxuICAgIGdldENsb3Nlc3RNYXRjaCxcbiAgICBnZXRFeHByZXNzaW9uVmFycyxcbiAgICBnZXRIZWFkZXJzLFxuICAgIGdldElucHV0VmFsdWVzLFxuICAgIGdldEludGVybmFsRGF0YSxcbiAgICBnZXRTd2FwU3BlY2lmaWNhdGlvbixcbiAgICBnZXRUcmlnZ2VyU3BlY3MsXG4gICAgZ2V0VGFyZ2V0LFxuICAgIG1ha2VGcmFnbWVudCxcbiAgICBtZXJnZU9iamVjdHMsXG4gICAgbWFrZVNldHRsZUluZm8sXG4gICAgb29iU3dhcCxcbiAgICBxdWVyeVNlbGVjdG9yRXh0LFxuICAgIHNldHRsZUltbWVkaWF0ZWx5LFxuICAgIHNob3VsZENhbmNlbCxcbiAgICB0cmlnZ2VyRXZlbnQsXG4gICAgdHJpZ2dlckVycm9yRXZlbnQsXG4gICAgd2l0aEV4dGVuc2lvbnNcbiAgfVxuXG4gIGNvbnN0IFZFUkJTID0gWydnZXQnLCAncG9zdCcsICdwdXQnLCAnZGVsZXRlJywgJ3BhdGNoJ11cbiAgY29uc3QgVkVSQl9TRUxFQ1RPUiA9IFZFUkJTLm1hcChmdW5jdGlvbih2ZXJiKSB7XG4gICAgcmV0dXJuICdbaHgtJyArIHZlcmIgKyAnXSwgW2RhdGEtaHgtJyArIHZlcmIgKyAnXSdcbiAgfSkuam9pbignLCAnKVxuXG4gIGNvbnN0IEhFQURfVEFHX1JFR0VYID0gbWFrZVRhZ1JlZ0V4KCdoZWFkJylcblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBVdGlsaXRpZXNcbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdsb2JhbFxuICAgKiBAcmV0dXJucyB7UmVnRXhwfVxuICAgKi9cbiAgZnVuY3Rpb24gbWFrZVRhZ1JlZ0V4KHRhZywgZ2xvYmFsID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChgPCR7dGFnfShcXFxcc1tePl0qPnw+KShbXFxcXHNcXFxcU10qPyk8XFxcXC8ke3RhZ30+YCxcbiAgICAgIGdsb2JhbCA/ICdnaW0nIDogJ2ltJylcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW50ZXJ2YWwgc3RyaW5nIGNvbnNpc3RlbnQgd2l0aCB0aGUgd2F5IGh0bXggZG9lcy4gVXNlZnVsIGZvciBwbHVnaW5zIHRoYXQgaGF2ZSB0aW1pbmctcmVsYXRlZCBhdHRyaWJ1dGVzLlxuICAgKlxuICAgKiBDYXV0aW9uOiBBY2NlcHRzIGFuIGludCBmb2xsb3dlZCBieSBlaXRoZXIgKipzKiogb3IgKiptcyoqLiBBbGwgb3RoZXIgdmFsdWVzIHVzZSAqKnBhcnNlRmxvYXQqKlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNwYXJzZUludGVydmFsXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgdGltaW5nIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfHVuZGVmaW5lZH1cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlSW50ZXJ2YWwoc3RyKSB7XG4gICAgaWYgKHN0ciA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSBOYU5cbiAgICBpZiAoc3RyLnNsaWNlKC0yKSA9PSAnbXMnKSB7XG4gICAgICBpbnRlcnZhbCA9IHBhcnNlRmxvYXQoc3RyLnNsaWNlKDAsIC0yKSlcbiAgICB9IGVsc2UgaWYgKHN0ci5zbGljZSgtMSkgPT0gJ3MnKSB7XG4gICAgICBpbnRlcnZhbCA9IHBhcnNlRmxvYXQoc3RyLnNsaWNlKDAsIC0xKSkgKiAxMDAwXG4gICAgfSBlbHNlIGlmIChzdHIuc2xpY2UoLTEpID09ICdtJykge1xuICAgICAgaW50ZXJ2YWwgPSBwYXJzZUZsb2F0KHN0ci5zbGljZSgwLCAtMSkpICogMTAwMCAqIDYwXG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVydmFsID0gcGFyc2VGbG9hdChzdHIpXG4gICAgfVxuICAgIHJldHVybiBpc05hTihpbnRlcnZhbCkgPyB1bmRlZmluZWQgOiBpbnRlcnZhbFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEByZXR1cm5zIHsoc3RyaW5nIHwgbnVsbCl9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRSYXdBdHRyaWJ1dGUoZWx0LCBuYW1lKSB7XG4gICAgcmV0dXJuIGVsdCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgZWx0LmdldEF0dHJpYnV0ZShuYW1lKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWFsaWZpZWROYW1lXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgLy8gcmVzb2x2ZSB3aXRoIGJvdGggaHggYW5kIGRhdGEtaHggcHJlZml4ZXNcbiAgZnVuY3Rpb24gaGFzQXR0cmlidXRlKGVsdCwgcXVhbGlmaWVkTmFtZSkge1xuICAgIHJldHVybiAhIWVsdC5oYXNBdHRyaWJ1dGUgJiYgKGVsdC5oYXNBdHRyaWJ1dGUocXVhbGlmaWVkTmFtZSkgfHxcbiAgICAgIGVsdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtJyArIHF1YWxpZmllZE5hbWUpKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWFsaWZpZWROYW1lXG4gICAqIEByZXR1cm5zIHsoc3RyaW5nIHwgbnVsbCl9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZShlbHQsIHF1YWxpZmllZE5hbWUpIHtcbiAgICByZXR1cm4gZ2V0UmF3QXR0cmlidXRlKGVsdCwgcXVhbGlmaWVkTmFtZSkgfHwgZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2RhdGEtJyArIHF1YWxpZmllZE5hbWUpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHJldHVybnMge05vZGUgfCBudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gcGFyZW50RWx0KGVsdCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGVsdC5wYXJlbnRFbGVtZW50XG4gICAgaWYgKCFwYXJlbnQgJiYgZWx0LnBhcmVudE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSByZXR1cm4gZWx0LnBhcmVudE5vZGVcbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge0RvY3VtZW50fVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHtib29sZWFufSBnbG9iYWxcbiAgICogQHJldHVybnMge05vZGV8RG9jdW1lbnR9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRSb290Tm9kZShlbHQsIGdsb2JhbCkge1xuICAgIHJldHVybiBlbHQuZ2V0Um9vdE5vZGUgPyBlbHQuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogZ2xvYmFsIH0pIDogZ2V0RG9jdW1lbnQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7KGU6Tm9kZSkgPT4gYm9vbGVhbn0gY29uZGl0aW9uXG4gICAqIEByZXR1cm5zIHtOb2RlIHwgbnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldENsb3Nlc3RNYXRjaChlbHQsIGNvbmRpdGlvbikge1xuICAgIHdoaWxlIChlbHQgJiYgIWNvbmRpdGlvbihlbHQpKSB7XG4gICAgICBlbHQgPSBwYXJlbnRFbHQoZWx0KVxuICAgIH1cblxuICAgIHJldHVybiBlbHQgfHwgbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gaW5pdGlhbEVsZW1lbnRcbiAgICogQHBhcmFtIHtFbGVtZW50fSBhbmNlc3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0cmlidXRlTmFtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVWYWx1ZVdpdGhEaXNpbmhlcml0YW5jZShpbml0aWFsRWxlbWVudCwgYW5jZXN0b3IsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGdldEF0dHJpYnV0ZVZhbHVlKGFuY2VzdG9yLCBhdHRyaWJ1dGVOYW1lKVxuICAgIGNvbnN0IGRpc2luaGVyaXQgPSBnZXRBdHRyaWJ1dGVWYWx1ZShhbmNlc3RvciwgJ2h4LWRpc2luaGVyaXQnKVxuICAgIHZhciBpbmhlcml0ID0gZ2V0QXR0cmlidXRlVmFsdWUoYW5jZXN0b3IsICdoeC1pbmhlcml0JylcbiAgICBpZiAoaW5pdGlhbEVsZW1lbnQgIT09IGFuY2VzdG9yKSB7XG4gICAgICBpZiAoaHRteC5jb25maWcuZGlzYWJsZUluaGVyaXRhbmNlKSB7XG4gICAgICAgIGlmIChpbmhlcml0ICYmIChpbmhlcml0ID09PSAnKicgfHwgaW5oZXJpdC5zcGxpdCgnICcpLmluZGV4T2YoYXR0cmlidXRlTmFtZSkgPj0gMCkpIHtcbiAgICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZGlzaW5oZXJpdCAmJiAoZGlzaW5oZXJpdCA9PT0gJyonIHx8IGRpc2luaGVyaXQuc3BsaXQoJyAnKS5pbmRleE9mKGF0dHJpYnV0ZU5hbWUpID49IDApKSB7XG4gICAgICAgIHJldHVybiAndW5zZXQnXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyaWJ1dGVOYW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmcgfCBudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgYXR0cmlidXRlTmFtZSkge1xuICAgIGxldCBjbG9zZXN0QXR0ciA9IG51bGxcbiAgICBnZXRDbG9zZXN0TWF0Y2goZWx0LCBmdW5jdGlvbihlKSB7XG4gICAgICByZXR1cm4gISEoY2xvc2VzdEF0dHIgPSBnZXRBdHRyaWJ1dGVWYWx1ZVdpdGhEaXNpbmhlcml0YW5jZShlbHQsIGFzRWxlbWVudChlKSwgYXR0cmlidXRlTmFtZSkpXG4gICAgfSlcbiAgICBpZiAoY2xvc2VzdEF0dHIgIT09ICd1bnNldCcpIHtcbiAgICAgIHJldHVybiBjbG9zZXN0QXR0clxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBtYXRjaGVzKGVsdCwgc2VsZWN0b3IpIHtcbiAgICAvLyBAdHMtaWdub3JlOiBub24tc3RhbmRhcmQgcHJvcGVydGllcyBmb3IgYnJvd3NlciBjb21wYXRpYmlsaXR5XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5yZXNvbHZlZFZhcmlhYmxlXG4gICAgY29uc3QgbWF0Y2hlc0Z1bmN0aW9uID0gZWx0IGluc3RhbmNlb2YgRWxlbWVudCAmJiAoZWx0Lm1hdGNoZXMgfHwgZWx0Lm1hdGNoZXNTZWxlY3RvciB8fCBlbHQubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWx0Lm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbHQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsdC5vTWF0Y2hlc1NlbGVjdG9yKVxuICAgIHJldHVybiAhIW1hdGNoZXNGdW5jdGlvbiAmJiBtYXRjaGVzRnVuY3Rpb24uY2FsbChlbHQsIHNlbGVjdG9yKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0YXJ0VGFnKHN0cikge1xuICAgIGNvbnN0IHRhZ01hdGNoZXIgPSAvPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2lcbiAgICBjb25zdCBtYXRjaCA9IHRhZ01hdGNoZXIuZXhlYyhzdHIpXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc3BcbiAgICogQHJldHVybnMge0RvY3VtZW50fVxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VIVE1MKHJlc3ApIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKClcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhyZXNwLCAndGV4dC9odG1sJylcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqL1xuICBmdW5jdGlvbiB0YWtlQ2hpbGRyZW5Gb3IoZnJhZ21lbnQsIGVsdCkge1xuICAgIHdoaWxlIChlbHQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmcmFnbWVudC5hcHBlbmQoZWx0LmNoaWxkTm9kZXNbMF0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTFNjcmlwdEVsZW1lbnR9IHNjcmlwdFxuICAgKiBAcmV0dXJucyB7SFRNTFNjcmlwdEVsZW1lbnR9XG4gICAqL1xuICBmdW5jdGlvbiBkdXBsaWNhdGVTY3JpcHQoc2NyaXB0KSB7XG4gICAgY29uc3QgbmV3U2NyaXB0ID0gZ2V0RG9jdW1lbnQoKS5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgIGZvckVhY2goc2NyaXB0LmF0dHJpYnV0ZXMsIGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIG5ld1NjcmlwdC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKVxuICAgIH0pXG4gICAgbmV3U2NyaXB0LnRleHRDb250ZW50ID0gc2NyaXB0LnRleHRDb250ZW50XG4gICAgbmV3U2NyaXB0LmFzeW5jID0gZmFsc2VcbiAgICBpZiAoaHRteC5jb25maWcuaW5saW5lU2NyaXB0Tm9uY2UpIHtcbiAgICAgIG5ld1NjcmlwdC5ub25jZSA9IGh0bXguY29uZmlnLmlubGluZVNjcmlwdE5vbmNlXG4gICAgfVxuICAgIHJldHVybiBuZXdTY3JpcHRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxTY3JpcHRFbGVtZW50fSBzY3JpcHRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc0phdmFTY3JpcHRTY3JpcHROb2RlKHNjcmlwdCkge1xuICAgIHJldHVybiBzY3JpcHQubWF0Y2hlcygnc2NyaXB0JykgJiYgKHNjcmlwdC50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JyB8fCBzY3JpcHQudHlwZSA9PT0gJ21vZHVsZScgfHwgc2NyaXB0LnR5cGUgPT09ICcnKVxuICB9XG5cbiAgLyoqXG4gICAqIHdlIGhhdmUgdG8gbWFrZSBuZXcgY29waWVzIG9mIHNjcmlwdCB0YWdzIHRoYXQgd2UgYXJlIGdvaW5nIHRvIGluc2VydCBiZWNhdXNlXG4gICAqIFNPTUUgYnJvd3NlcnMgKG5vdCBzYXlpbmcgd2hvLCBidXQgaXQgaW52b2x2ZXMgYW4gZWxlbWVudCBhbmQgYW4gYW5pbWFsKSBkb24ndFxuICAgKiBleGVjdXRlIHNjcmlwdHMgY3JlYXRlZCBpbiA8dGVtcGxhdGU+IHRhZ3Mgd2hlbiB0aGV5IGFyZSBpbnNlcnRlZCBpbnRvIHRoZSBET01cbiAgICogYW5kIGFsbCB0aGUgb3RoZXJzIGRvIGxtYW9cbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gbm9ybWFsaXplU2NyaXB0VGFncyhmcmFnbWVudCkge1xuICAgIEFycmF5LmZyb20oZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JykpLmZvckVhY2goLyoqIEBwYXJhbSB7SFRNTFNjcmlwdEVsZW1lbnR9IHNjcmlwdCAqLyAoc2NyaXB0KSA9PiB7XG4gICAgICBpZiAoaXNKYXZhU2NyaXB0U2NyaXB0Tm9kZShzY3JpcHQpKSB7XG4gICAgICAgIGNvbnN0IG5ld1NjcmlwdCA9IGR1cGxpY2F0ZVNjcmlwdChzY3JpcHQpXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHNjcmlwdC5wYXJlbnROb2RlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdTY3JpcHQsIHNjcmlwdClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGxvZ0Vycm9yKGUpXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgc2NyaXB0LnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtEb2N1bWVudEZyYWdtZW50ICYge3RpdGxlPzogc3RyaW5nfX0gRG9jdW1lbnRGcmFnbWVudFdpdGhUaXRsZVxuICAgKiBAZGVzY3JpcHRpb24gIGEgZG9jdW1lbnQgZnJhZ21lbnQgcmVwcmVzZW50aW5nIHRoZSByZXNwb25zZSBIVE1MLCBpbmNsdWRpbmdcbiAgICogYSBgdGl0bGVgIHByb3BlcnR5IGZvciBhbnkgdGl0bGUgaW5mb3JtYXRpb24gZm91bmRcbiAgICovXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXNwb25zZSBIVE1MXG4gICAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50V2l0aFRpdGxlfVxuICAgKi9cbiAgZnVuY3Rpb24gbWFrZUZyYWdtZW50KHJlc3BvbnNlKSB7XG4gICAgLy8gc3RyaXAgaGVhZCB0YWcgdG8gZGV0ZXJtaW5lIHNoYXBlIG9mIHJlc3BvbnNlIHdlIGFyZSBkZWFsaW5nIHdpdGhcbiAgICBjb25zdCByZXNwb25zZVdpdGhOb0hlYWQgPSByZXNwb25zZS5yZXBsYWNlKEhFQURfVEFHX1JFR0VYLCAnJylcbiAgICBjb25zdCBzdGFydFRhZyA9IGdldFN0YXJ0VGFnKHJlc3BvbnNlV2l0aE5vSGVhZClcbiAgICAvKiogQHR5cGUgRG9jdW1lbnRGcmFnbWVudFdpdGhUaXRsZSAqL1xuICAgIGxldCBmcmFnbWVudFxuICAgIGlmIChzdGFydFRhZyA9PT0gJ2h0bWwnKSB7XG4gICAgICAvLyBpZiBpdCBpcyBhIGZ1bGwgZG9jdW1lbnQsIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGJvZHlcbiAgICAgIGZyYWdtZW50ID0gLyoqIEB0eXBlIERvY3VtZW50RnJhZ21lbnRXaXRoVGl0bGUgKi8gKG5ldyBEb2N1bWVudEZyYWdtZW50KCkpXG4gICAgICBjb25zdCBkb2MgPSBwYXJzZUhUTUwocmVzcG9uc2UpXG4gICAgICB0YWtlQ2hpbGRyZW5Gb3IoZnJhZ21lbnQsIGRvYy5ib2R5KVxuICAgICAgZnJhZ21lbnQudGl0bGUgPSBkb2MudGl0bGVcbiAgICB9IGVsc2UgaWYgKHN0YXJ0VGFnID09PSAnYm9keScpIHtcbiAgICAgIC8vIHBhcnNlIGJvZHkgdy9vIHdyYXBwaW5nIGluIHRlbXBsYXRlXG4gICAgICBmcmFnbWVudCA9IC8qKiBAdHlwZSBEb2N1bWVudEZyYWdtZW50V2l0aFRpdGxlICovIChuZXcgRG9jdW1lbnRGcmFnbWVudCgpKVxuICAgICAgY29uc3QgZG9jID0gcGFyc2VIVE1MKHJlc3BvbnNlV2l0aE5vSGVhZClcbiAgICAgIHRha2VDaGlsZHJlbkZvcihmcmFnbWVudCwgZG9jLmJvZHkpXG4gICAgICBmcmFnbWVudC50aXRsZSA9IGRvYy50aXRsZVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2Ugd2UgaGF2ZSBub24tYm9keSBwYXJ0aWFsIEhUTUwgY29udGVudCwgc28gd3JhcCBpdCBpbiBhIHRlbXBsYXRlIHRvIG1heGltaXplIHBhcnNpbmcgZmxleGliaWxpdHlcbiAgICAgIGNvbnN0IGRvYyA9IHBhcnNlSFRNTCgnPGJvZHk+PHRlbXBsYXRlIGNsYXNzPVwiaW50ZXJuYWwtaHRteC13cmFwcGVyXCI+JyArIHJlc3BvbnNlV2l0aE5vSGVhZCArICc8L3RlbXBsYXRlPjwvYm9keT4nKVxuICAgICAgZnJhZ21lbnQgPSAvKiogQHR5cGUgRG9jdW1lbnRGcmFnbWVudFdpdGhUaXRsZSAqLyAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RlbXBsYXRlJykuY29udGVudClcbiAgICAgIC8vIGV4dHJhY3QgdGl0bGUgaW50byBmcmFnbWVudCBmb3IgbGF0ZXIgcHJvY2Vzc2luZ1xuICAgICAgZnJhZ21lbnQudGl0bGUgPSBkb2MudGl0bGVcblxuICAgICAgLy8gZm9yIGxlZ2FjeSByZWFzb25zIHdlIHN1cHBvcnQgYSB0aXRsZSB0YWcgYXQgdGhlIHJvb3QgbGV2ZWwgb2Ygbm9uLWJvZHkgcmVzcG9uc2VzLCBzbyB3ZSBuZWVkIHRvIGhhbmRsZSBpdFxuICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJylcbiAgICAgIGlmICh0aXRsZUVsZW1lbnQgJiYgdGl0bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IGZyYWdtZW50KSB7XG4gICAgICAgIHRpdGxlRWxlbWVudC5yZW1vdmUoKVxuICAgICAgICBmcmFnbWVudC50aXRsZSA9IHRpdGxlRWxlbWVudC5pbm5lclRleHRcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWdtZW50KSB7XG4gICAgICBpZiAoaHRteC5jb25maWcuYWxsb3dTY3JpcHRUYWdzKSB7XG4gICAgICAgIG5vcm1hbGl6ZVNjcmlwdFRhZ3MoZnJhZ21lbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZW1vdmUgYWxsIHNjcmlwdCB0YWdzIGlmIHNjcmlwdHMgYXJlIGRpc2FibGVkXG4gICAgICAgIGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpLmZvckVhY2goKHNjcmlwdCkgPT4gc2NyaXB0LnJlbW92ZSgpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gICAqL1xuICBmdW5jdGlvbiBtYXliZUNhbGwoZnVuYykge1xuICAgIGlmIChmdW5jKSB7XG4gICAgICBmdW5jKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICogQHJldHVybnNcbiAgICovXG4gIGZ1bmN0aW9uIGlzVHlwZShvLCB0eXBlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgJyArIHR5cGUgKyAnXSdcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyp9IG9cbiAgICogQHJldHVybnMge28gaXMgRnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdmdW5jdGlvbidcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyp9IG9cbiAgICogQHJldHVybnMge28gaXMgT2JqZWN0fVxuICAgKi9cbiAgZnVuY3Rpb24gaXNSYXdPYmplY3Qobykge1xuICAgIHJldHVybiBpc1R5cGUobywgJ09iamVjdCcpXG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gT25IYW5kbGVyXG4gICAqIEBwcm9wZXJ0eSB7KGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXApfHN0cmluZ30gZXZlbnRcbiAgICogQHByb3BlcnR5IHtFdmVudExpc3RlbmVyfSBsaXN0ZW5lclxuICAgKi9cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gTGlzdGVuZXJJbmZvXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0cmlnZ2VyXG4gICAqIEBwcm9wZXJ0eSB7RXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXJcbiAgICogQHByb3BlcnR5IHtFdmVudFRhcmdldH0gb25cbiAgICovXG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IEh0bXhOb2RlSW50ZXJuYWxEYXRhXG4gICAqIEVsZW1lbnQgZGF0YVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2luaXRIYXNoXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtib29zdGVkXVxuICAgKiBAcHJvcGVydHkge09uSGFuZGxlcltdfSBbb25IYW5kbGVyc11cbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFt0aW1lb3V0XVxuICAgKiBAcHJvcGVydHkge0xpc3RlbmVySW5mb1tdfSBbbGlzdGVuZXJJbmZvc11cbiAgICogQHByb3BlcnR5IHtib29sZWFufSBbY2FuY2VsbGVkXVxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFt0cmlnZ2VyZWRPbmNlXVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2RlbGF5ZWRdXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfG51bGx9IFt0aHJvdHRsZV1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtsYXN0VmFsdWVdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2xvYWRlZF1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtwYXRoXVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW3ZlcmJdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3BvbGxpbmddXG4gICAqIEBwcm9wZXJ0eSB7SFRNTEJ1dHRvbkVsZW1lbnR8SFRNTElucHV0RWxlbWVudHxudWxsfSBbbGFzdEJ1dHRvbkNsaWNrZWRdXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcmVxdWVzdENvdW50XVxuICAgKiBAcHJvcGVydHkge1hNTEh0dHBSZXF1ZXN0fSBbeGhyXVxuICAgKiBAcHJvcGVydHkgeygoKSA9PiB2b2lkKVtdfSBbcXVldWVkUmVxdWVzdHNdXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2Fib3J0YWJsZV1cbiAgICpcbiAgICogRXZlbnQgZGF0YVxuICAgKiBAcHJvcGVydHkge0h0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbn0gW3RyaWdnZXJTcGVjXVxuICAgKiBAcHJvcGVydHkge0V2ZW50VGFyZ2V0W119IFtoYW5kbGVkRm9yXVxuICAgKi9cblxuICAvKipcbiAgICogZ2V0SW50ZXJuYWxEYXRhIHJldHJpZXZlcyBcInByaXZhdGVcIiBkYXRhIHN0b3JlZCBieSBodG14IHdpdGhpbiBhbiBlbGVtZW50XG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR8RXZlbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7SHRteE5vZGVJbnRlcm5hbERhdGF9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJbnRlcm5hbERhdGEoZWx0KSB7XG4gICAgY29uc3QgZGF0YVByb3AgPSAnaHRteC1pbnRlcm5hbC1kYXRhJ1xuICAgIGxldCBkYXRhID0gZWx0W2RhdGFQcm9wXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IGVsdFtkYXRhUHJvcF0gPSB7fVxuICAgIH1cbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgLyoqXG4gICAqIHRvQXJyYXkgY29udmVydHMgYW4gQXJyYXlMaWtlIG9iamVjdCBpbnRvIGEgcmVhbCBhcnJheS5cbiAgICogQHRlbXBsYXRlIFRcbiAgICogQHBhcmFtIHtBcnJheUxpa2U8VD59IGFyclxuICAgKiBAcmV0dXJucyB7VFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gdG9BcnJheShhcnIpIHtcbiAgICBjb25zdCByZXR1cm5BcnIgPSBbXVxuICAgIGlmIChhcnIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJldHVybkFyci5wdXNoKGFycltpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkFyclxuICB9XG5cbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSBUXG4gICAqIEBwYXJhbSB7VFtdfE5hbWVkTm9kZU1hcHxIVE1MQ29sbGVjdGlvbnxIVE1MRm9ybUNvbnRyb2xzQ29sbGVjdGlvbnxBcnJheUxpa2U8VD59IGFyclxuICAgKiBAcGFyYW0geyhUKSA9PiB2b2lkfSBmdW5jXG4gICAqL1xuICBmdW5jdGlvbiBmb3JFYWNoKGFyciwgZnVuYykge1xuICAgIGlmIChhcnIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZ1bmMoYXJyW2ldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNTY3JvbGxlZEludG9WaWV3KGVsKSB7XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgZWxlbVRvcCA9IHJlY3QudG9wXG4gICAgY29uc3QgZWxlbUJvdHRvbSA9IHJlY3QuYm90dG9tXG4gICAgcmV0dXJuIGVsZW1Ub3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgZWxlbUJvdHRvbSA+PSAwXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBib2R5Q29udGFpbnMoZWx0KSB7XG4gICAgLy8gSUUgRml4XG4gICAgY29uc3Qgcm9vdE5vZGUgPSBlbHQuZ2V0Um9vdE5vZGUgJiYgZWx0LmdldFJvb3ROb2RlKClcbiAgICBpZiAocm9vdE5vZGUgJiYgcm9vdE5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuU2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIGdldERvY3VtZW50KCkuYm9keS5jb250YWlucyhyb290Tm9kZS5ob3N0KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0RG9jdW1lbnQoKS5ib2R5LmNvbnRhaW5zKGVsdClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyaWdnZXJcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgZnVuY3Rpb24gc3BsaXRPbldoaXRlc3BhY2UodHJpZ2dlcikge1xuICAgIHJldHVybiB0cmlnZ2VyLnRyaW0oKS5zcGxpdCgvXFxzKy8pXG4gIH1cblxuICAvKipcbiAgICogbWVyZ2VPYmplY3RzIHRha2VzIGFsbCB0aGUga2V5cyBmcm9tXG4gICAqIG9iajIgYW5kIGR1cGxpY2F0ZXMgdGhlbSBpbnRvIG9iajFcbiAgICogQHRlbXBsYXRlIFQxXG4gICAqIEB0ZW1wbGF0ZSBUMlxuICAgKiBAcGFyYW0ge1QxfSBvYmoxXG4gICAqIEBwYXJhbSB7VDJ9IG9iajJcbiAgICogQHJldHVybnMge1QxICYgVDJ9XG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZU9iamVjdHMob2JqMSwgb2JqMikge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iajIpIHtcbiAgICAgIGlmIChvYmoyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0c2MgZG9lc24ndCBzZWVtIHRvIHByb3Blcmx5IGhhbmRsZSB0eXBlcyBtZXJnaW5nXG4gICAgICAgIG9iajFba2V5XSA9IG9iajJba2V5XVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlIHRzYyBkb2Vzbid0IHNlZW0gdG8gcHJvcGVybHkgaGFuZGxlIHR5cGVzIG1lcmdpbmdcbiAgICByZXR1cm4gb2JqMVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBqU3RyaW5nXG4gICAqIEByZXR1cm5zIHthbnl8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlSlNPTihqU3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGpTdHJpbmcpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ0Vycm9yKGVycm9yKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBjYW5BY2Nlc3NMb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3QgdGVzdCA9ICdodG14OmxvY2FsU3RvcmFnZVRlc3QnXG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRlc3QsIHRlc3QpXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0KVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGgocGF0aCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHBhdGgpXG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIHBhdGggPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoXG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2gsIHVubGVzcyBpbmRleCBwYWdlXG4gICAgICBpZiAoISgvXlxcLyQvLnRlc3QocGF0aCkpKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyskLywgJycpXG4gICAgICB9XG4gICAgICByZXR1cm4gcGF0aFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGJlIGtpbmQgdG8gSUUxMSwgd2hpY2ggZG9lc24ndCBzdXBwb3J0IFVSTCgpXG4gICAgICByZXR1cm4gcGF0aFxuICAgIH1cbiAgfVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBwdWJsaWMgQVBJXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqL1xuICBmdW5jdGlvbiBpbnRlcm5hbEV2YWwoc3RyKSB7XG4gICAgcmV0dXJuIG1heWJlRXZhbChnZXREb2N1bWVudCgpLmJvZHksIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV2YWwoc3RyKVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNhbGxiYWNrIGZvciB0aGUgKipodG14OmxvYWQqKiBldmVudC4gVGhpcyBjYW4gYmUgdXNlZCB0byBwcm9jZXNzIG5ldyBjb250ZW50LCBmb3IgZXhhbXBsZSBpbml0aWFsaXppbmcgdGhlIGNvbnRlbnQgd2l0aCBhIGphdmFzY3JpcHQgbGlicmFyeVxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNvbkxvYWRcbiAgICpcbiAgICogQHBhcmFtIHsoZWx0OiBOb2RlKSA9PiB2b2lkfSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgdG8gY2FsbCBvbiBuZXdseSBsb2FkZWQgY29udGVudFxuICAgKiBAcmV0dXJucyB7RXZlbnRMaXN0ZW5lcn1cbiAgICovXG4gIGZ1bmN0aW9uIG9uTG9hZEhlbHBlcihjYWxsYmFjaykge1xuICAgIGNvbnN0IHZhbHVlID0gaHRteC5vbignaHRteDpsb2FkJywgLyoqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2dCAqLyBmdW5jdGlvbihldnQpIHtcbiAgICAgIGNhbGxiYWNrKGV2dC5kZXRhaWwuZWx0KVxuICAgIH0pXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogTG9nIGFsbCBodG14IGV2ZW50cywgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI2xvZ0FsbFxuICAgKi9cbiAgZnVuY3Rpb24gbG9nQWxsKCkge1xuICAgIGh0bXgubG9nZ2VyID0gZnVuY3Rpb24oZWx0LCBldmVudCwgZGF0YSkge1xuICAgICAgaWYgKGNvbnNvbGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQsIGVsdCwgZGF0YSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb2dOb25lKCkge1xuICAgIGh0bXgubG9nZ2VyID0gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGFuIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI2ZpbmRcbiAgICpcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfHN0cmluZ30gZWx0T3JTZWxlY3RvciAgdGhlIHJvb3QgZWxlbWVudCB0byBmaW5kIHRoZSBtYXRjaGluZyBlbGVtZW50IGluLCBpbmNsdXNpdmUgfCB0aGUgc2VsZWN0b3IgdG8gbWF0Y2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl0gdGhlIHNlbGVjdG9yIHRvIG1hdGNoXG4gICAqIEByZXR1cm5zIHtFbGVtZW50fG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBmaW5kKGVsdE9yU2VsZWN0b3IsIHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBlbHRPclNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGVsdE9yU2VsZWN0b3IucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZpbmQoZ2V0RG9jdW1lbnQoKSwgZWx0T3JTZWxlY3RvcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgYWxsIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBzZWxlY3RvclxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNmaW5kQWxsXG4gICAqXG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZXxzdHJpbmd9IGVsdE9yU2VsZWN0b3IgdGhlIHJvb3QgZWxlbWVudCB0byBmaW5kIHRoZSBtYXRjaGluZyBlbGVtZW50cyBpbiwgaW5jbHVzaXZlIHwgdGhlIHNlbGVjdG9yIHRvIG1hdGNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JdIHRoZSBzZWxlY3RvciB0byBtYXRjaFxuICAgKiBAcmV0dXJucyB7Tm9kZUxpc3RPZjxFbGVtZW50Pn1cbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRBbGwoZWx0T3JTZWxlY3Rvciwgc2VsZWN0b3IpIHtcbiAgICBpZiAodHlwZW9mIGVsdE9yU2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZWx0T3JTZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmluZEFsbChnZXREb2N1bWVudCgpLCBlbHRPclNlbGVjdG9yKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBXaW5kb3dcbiAgICovXG4gIGZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgICByZXR1cm4gd2luZG93XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlbGVtZW50IGZyb20gdGhlIERPTVxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNyZW1vdmVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBlbHRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheV1cbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWx0LCBkZWxheSkge1xuICAgIGVsdCA9IHJlc29sdmVUYXJnZXQoZWx0KVxuICAgIGlmIChkZWxheSkge1xuICAgICAgZ2V0V2luZG93KCkuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmVtb3ZlRWxlbWVudChlbHQpXG4gICAgICAgIGVsdCA9IG51bGxcbiAgICAgIH0sIGRlbGF5KVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnRFbHQoZWx0KS5yZW1vdmVDaGlsZChlbHQpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSBlbHRcbiAgICogQHJldHVybiB7RWxlbWVudHxudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gYXNFbGVtZW50KGVsdCkge1xuICAgIHJldHVybiBlbHQgaW5zdGFuY2VvZiBFbGVtZW50ID8gZWx0IDogbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSBlbHRcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGFzSHRtbEVsZW1lbnQoZWx0KSB7XG4gICAgcmV0dXJuIGVsdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWx0IDogbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGFzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBlbHRcbiAgICogQHJldHVybiB7UGFyZW50Tm9kZXxudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gYXNQYXJlbnROb2RlKGVsdCkge1xuICAgIHJldHVybiBlbHQgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsdCBpbnN0YW5jZW9mIERvY3VtZW50IHx8IGVsdCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQgPyBlbHQgOiBudWxsXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgYWRkcyBhIGNsYXNzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNhZGRDbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSBlbHQgdGhlIGVsZW1lbnQgdG8gYWRkIHRoZSBjbGFzcyB0b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhenogdGhlIGNsYXNzIHRvIGFkZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5XSB0aGUgZGVsYXkgKGluIG1pbGxpc2Vjb25kcykgYmVmb3JlIGNsYXNzIGlzIGFkZGVkXG4gICAqL1xuICBmdW5jdGlvbiBhZGRDbGFzc1RvRWxlbWVudChlbHQsIGNsYXp6LCBkZWxheSkge1xuICAgIGVsdCA9IGFzRWxlbWVudChyZXNvbHZlVGFyZ2V0KGVsdCkpXG4gICAgaWYgKCFlbHQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGdldFdpbmRvdygpLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGFkZENsYXNzVG9FbGVtZW50KGVsdCwgY2xhenopXG4gICAgICAgIGVsdCA9IG51bGxcbiAgICAgIH0sIGRlbGF5KVxuICAgIH0gZWxzZSB7XG4gICAgICBlbHQuY2xhc3NMaXN0ICYmIGVsdC5jbGFzc0xpc3QuYWRkKGNsYXp6KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2xhc3MgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNyZW1vdmVDbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV8c3RyaW5nfSBub2RlIGVsZW1lbnQgdG8gcmVtb3ZlIHRoZSBjbGFzcyBmcm9tXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGF6eiB0aGUgY2xhc3MgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsYXldIHRoZSBkZWxheSAoaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSBjbGFzcyBpcyByZW1vdmVkKVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChub2RlLCBjbGF6eiwgZGVsYXkpIHtcbiAgICBsZXQgZWx0ID0gYXNFbGVtZW50KHJlc29sdmVUYXJnZXQobm9kZSkpXG4gICAgaWYgKCFlbHQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGdldFdpbmRvdygpLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoZWx0LCBjbGF6eilcbiAgICAgICAgZWx0ID0gbnVsbFxuICAgICAgfSwgZGVsYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlbHQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsdC5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KVxuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gY2xhc3NlcyBsZWZ0LCByZW1vdmUgdGhlIGNsYXNzIGF0dHJpYnV0ZVxuICAgICAgICBpZiAoZWx0LmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBlbHQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZ2l2ZW4gY2xhc3Mgb24gYW4gZWxlbWVudFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyN0b2dnbGVDbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSBlbHQgdGhlIGVsZW1lbnQgdG8gdG9nZ2xlIHRoZSBjbGFzcyBvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhenogdGhlIGNsYXNzIHRvIHRvZ2dsZVxuICAgKi9cbiAgZnVuY3Rpb24gdG9nZ2xlQ2xhc3NPbkVsZW1lbnQoZWx0LCBjbGF6eikge1xuICAgIGVsdCA9IHJlc29sdmVUYXJnZXQoZWx0KVxuICAgIGVsdC5jbGFzc0xpc3QudG9nZ2xlKGNsYXp6KVxuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBnaXZlbiBjbGFzcyBmcm9tIGl0cyBzaWJsaW5ncywgc28gdGhhdCBhbW9uZyBpdHMgc2libGluZ3MsIG9ubHkgdGhlIGdpdmVuIGVsZW1lbnQgd2lsbCBoYXZlIHRoZSBjbGFzcy5cbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jdGFrZUNsYXNzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZXxzdHJpbmd9IGVsdCB0aGUgZWxlbWVudCB0aGF0IHdpbGwgdGFrZSB0aGUgY2xhc3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXp6IHRoZSBjbGFzcyB0byB0YWtlXG4gICAqL1xuICBmdW5jdGlvbiB0YWtlQ2xhc3NGb3JFbGVtZW50KGVsdCwgY2xhenopIHtcbiAgICBlbHQgPSByZXNvbHZlVGFyZ2V0KGVsdClcbiAgICBmb3JFYWNoKGVsdC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChjaGlsZCwgY2xhenopXG4gICAgfSlcbiAgICBhZGRDbGFzc1RvRWxlbWVudChhc0VsZW1lbnQoZWx0KSwgY2xhenopXG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIGNsb3Nlc3QgbWF0Y2hpbmcgZWxlbWVudCBpbiB0aGUgZ2l2ZW4gZWxlbWVudHMgcGFyZW50YWdlLCBpbmNsdXNpdmUgb2YgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jY2xvc2VzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSBlbHQgdGhlIGVsZW1lbnQgdG8gZmluZCB0aGUgc2VsZWN0b3IgZnJvbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIHNlbGVjdG9yIHRvIGZpbmRcbiAgICogQHJldHVybnMge0VsZW1lbnR8bnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGNsb3Nlc3QoZWx0LCBzZWxlY3Rvcikge1xuICAgIGVsdCA9IGFzRWxlbWVudChyZXNvbHZlVGFyZ2V0KGVsdCkpXG4gICAgaWYgKGVsdCAmJiBlbHQuY2xvc2VzdCkge1xuICAgICAgcmV0dXJuIGVsdC5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPIHJlbW92ZSB3aGVuIElFIGdvZXMgYXdheVxuICAgICAgZG8ge1xuICAgICAgICBpZiAoZWx0ID09IG51bGwgfHwgbWF0Y2hlcyhlbHQsIHNlbGVjdG9yKSkge1xuICAgICAgICAgIHJldHVybiBlbHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2hpbGUgKGVsdCA9IGVsdCAmJiBhc0VsZW1lbnQocGFyZW50RWx0KGVsdCkpKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnRzV2l0aChzdHIsIHByZWZpeCkge1xuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIHByZWZpeC5sZW5ndGgpID09PSBwcmVmaXhcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdWZmaXhcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkge1xuICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSA9PT0gc3VmZml4XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvcikge1xuICAgIGNvbnN0IHRyaW1tZWRTZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKVxuICAgIGlmIChzdGFydHNXaXRoKHRyaW1tZWRTZWxlY3RvciwgJzwnKSAmJiBlbmRzV2l0aCh0cmltbWVkU2VsZWN0b3IsICcvPicpKSB7XG4gICAgICByZXR1cm4gdHJpbW1lZFNlbGVjdG9yLnN1YnN0cmluZygxLCB0cmltbWVkU2VsZWN0b3IubGVuZ3RoIC0gMilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRyaW1tZWRTZWxlY3RvclxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV8RWxlbWVudHxEb2N1bWVudHxzdHJpbmd9IGVsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHBhcmFtIHtib29sZWFuPX0gZ2xvYmFsXG4gICAqIEByZXR1cm5zIHsoTm9kZXxXaW5kb3cpW119XG4gICAqL1xuICBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yQWxsRXh0KGVsdCwgc2VsZWN0b3IsIGdsb2JhbCkge1xuICAgIGVsdCA9IHJlc29sdmVUYXJnZXQoZWx0KVxuICAgIGlmIChzZWxlY3Rvci5pbmRleE9mKCdjbG9zZXN0ICcpID09PSAwKSB7XG4gICAgICByZXR1cm4gW2Nsb3Nlc3QoYXNFbGVtZW50KGVsdCksIG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLnN1YnN0cig4KSkpXVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IuaW5kZXhPZignZmluZCAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtmaW5kKGFzUGFyZW50Tm9kZShlbHQpLCBub3JtYWxpemVTZWxlY3RvcihzZWxlY3Rvci5zdWJzdHIoNSkpKV1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yID09PSAnbmV4dCcpIHtcbiAgICAgIHJldHVybiBbYXNFbGVtZW50KGVsdCkubmV4dEVsZW1lbnRTaWJsaW5nXVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IuaW5kZXhPZignbmV4dCAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtzY2FuRm9yd2FyZFF1ZXJ5KGVsdCwgbm9ybWFsaXplU2VsZWN0b3Ioc2VsZWN0b3Iuc3Vic3RyKDUpKSwgISFnbG9iYWwpXVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgPT09ICdwcmV2aW91cycpIHtcbiAgICAgIHJldHVybiBbYXNFbGVtZW50KGVsdCkucHJldmlvdXNFbGVtZW50U2libGluZ11cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLmluZGV4T2YoJ3ByZXZpb3VzICcpID09PSAwKSB7XG4gICAgICByZXR1cm4gW3NjYW5CYWNrd2FyZHNRdWVyeShlbHQsIG5vcm1hbGl6ZVNlbGVjdG9yKHNlbGVjdG9yLnN1YnN0cig5KSksICEhZ2xvYmFsKV1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICByZXR1cm4gW2RvY3VtZW50XVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgPT09ICd3aW5kb3cnKSB7XG4gICAgICByZXR1cm4gW3dpbmRvd11cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yID09PSAnYm9keScpIHtcbiAgICAgIHJldHVybiBbZG9jdW1lbnQuYm9keV1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yID09PSAncm9vdCcpIHtcbiAgICAgIHJldHVybiBbZ2V0Um9vdE5vZGUoZWx0LCAhIWdsb2JhbCldXG4gICAgfSBlbHNlIGlmIChzZWxlY3Rvci5pbmRleE9mKCdnbG9iYWwgJykgPT09IDApIHtcbiAgICAgIHJldHVybiBxdWVyeVNlbGVjdG9yQWxsRXh0KGVsdCwgc2VsZWN0b3Iuc2xpY2UoNyksIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0b0FycmF5KGFzUGFyZW50Tm9kZShnZXRSb290Tm9kZShlbHQsICEhZ2xvYmFsKSkucXVlcnlTZWxlY3RvckFsbChub3JtYWxpemVTZWxlY3RvcihzZWxlY3RvcikpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHN0YXJ0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdsb2JhbFxuICAgKiBAcmV0dXJucyB7RWxlbWVudH1cbiAgICovXG4gIHZhciBzY2FuRm9yd2FyZFF1ZXJ5ID0gZnVuY3Rpb24oc3RhcnQsIG1hdGNoLCBnbG9iYWwpIHtcbiAgICBjb25zdCByZXN1bHRzID0gYXNQYXJlbnROb2RlKGdldFJvb3ROb2RlKHN0YXJ0LCBnbG9iYWwpKS5xdWVyeVNlbGVjdG9yQWxsKG1hdGNoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWx0ID0gcmVzdWx0c1tpXVxuICAgICAgaWYgKGVsdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihzdGFydCkgPT09IE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HKSB7XG4gICAgICAgIHJldHVybiBlbHRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBzdGFydFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hcbiAgICogQHBhcmFtIHtib29sZWFufSBnbG9iYWxcbiAgICogQHJldHVybnMge0VsZW1lbnR9XG4gICAqL1xuICB2YXIgc2NhbkJhY2t3YXJkc1F1ZXJ5ID0gZnVuY3Rpb24oc3RhcnQsIG1hdGNoLCBnbG9iYWwpIHtcbiAgICBjb25zdCByZXN1bHRzID0gYXNQYXJlbnROb2RlKGdldFJvb3ROb2RlKHN0YXJ0LCBnbG9iYWwpKS5xdWVyeVNlbGVjdG9yQWxsKG1hdGNoKVxuICAgIGZvciAobGV0IGkgPSByZXN1bHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBlbHQgPSByZXN1bHRzW2ldXG4gICAgICBpZiAoZWx0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHN0YXJ0KSA9PT0gTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcpIHtcbiAgICAgICAgcmV0dXJuIGVsdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV8c3RyaW5nfSBlbHRPclNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge05vZGV8V2luZG93fVxuICAgKi9cbiAgZnVuY3Rpb24gcXVlcnlTZWxlY3RvckV4dChlbHRPclNlbGVjdG9yLCBzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2YgZWx0T3JTZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBxdWVyeVNlbGVjdG9yQWxsRXh0KGVsdE9yU2VsZWN0b3IsIHNlbGVjdG9yKVswXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcXVlcnlTZWxlY3RvckFsbEV4dChnZXREb2N1bWVudCgpLmJvZHksIGVsdE9yU2VsZWN0b3IpWzBdXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0ZW1wbGF0ZSB7RXZlbnRUYXJnZXR9IFRcbiAgICogQHBhcmFtIHtUfHN0cmluZ30gZWx0T3JTZWxlY3RvclxuICAgKiBAcGFyYW0ge1R9IFtjb250ZXh0XVxuICAgKiBAcmV0dXJucyB7RWxlbWVudHxUfG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiByZXNvbHZlVGFyZ2V0KGVsdE9yU2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAodHlwZW9mIGVsdE9yU2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmluZChhc1BhcmVudE5vZGUoY29udGV4dCkgfHwgZG9jdW1lbnQsIGVsdE9yU2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbHRPclNlbGVjdG9yXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwfHN0cmluZ30gQW55RXZlbnROYW1lXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBFdmVudEFyZ3NcbiAgICogQHByb3BlcnR5IHtFdmVudFRhcmdldH0gdGFyZ2V0XG4gICAqIEBwcm9wZXJ0eSB7QW55RXZlbnROYW1lfSBldmVudFxuICAgKiBAcHJvcGVydHkge0V2ZW50TGlzdGVuZXJ9IGxpc3RlbmVyXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fEFueUV2ZW50TmFtZX0gYXJnMVxuICAgKiBAcGFyYW0ge0FueUV2ZW50TmFtZXxFdmVudExpc3RlbmVyfSBhcmcyXG4gICAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lcn0gW2FyZzNdXG4gICAqIEByZXR1cm5zIHtFdmVudEFyZ3N9XG4gICAqL1xuICBmdW5jdGlvbiBwcm9jZXNzRXZlbnRBcmdzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihhcmcyKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGFyZ2V0OiBnZXREb2N1bWVudCgpLmJvZHksXG4gICAgICAgIGV2ZW50OiBhc1N0cmluZyhhcmcxKSxcbiAgICAgICAgbGlzdGVuZXI6IGFyZzJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGFyZ2V0OiByZXNvbHZlVGFyZ2V0KGFyZzEpLFxuICAgICAgICBldmVudDogYXNTdHJpbmcoYXJnMiksXG4gICAgICAgIGxpc3RlbmVyOiBhcmczXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYW4gZWxlbWVudFxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNvblxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fHN0cmluZ30gYXJnMSB0aGUgZWxlbWVudCB0byBhZGQgdGhlIGxpc3RlbmVyIHRvIHwgdGhlIGV2ZW50IG5hbWUgdG8gYWRkIHRoZSBsaXN0ZW5lciBmb3JcbiAgICogQHBhcmFtIHtzdHJpbmd8RXZlbnRMaXN0ZW5lcn0gYXJnMiB0aGUgZXZlbnQgbmFtZSB0byBhZGQgdGhlIGxpc3RlbmVyIGZvciB8IHRoZSBsaXN0ZW5lciB0byBhZGRcbiAgICogQHBhcmFtIHtFdmVudExpc3RlbmVyfSBbYXJnM10gdGhlIGxpc3RlbmVyIHRvIGFkZFxuICAgKiBAcmV0dXJucyB7RXZlbnRMaXN0ZW5lcn1cbiAgICovXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJJbXBsKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICByZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGV2ZW50QXJncyA9IHByb2Nlc3NFdmVudEFyZ3MoYXJnMSwgYXJnMiwgYXJnMylcbiAgICAgIGV2ZW50QXJncy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudEFyZ3MuZXZlbnQsIGV2ZW50QXJncy5saXN0ZW5lcilcbiAgICB9KVxuICAgIGNvbnN0IGIgPSBpc0Z1bmN0aW9uKGFyZzIpXG4gICAgcmV0dXJuIGIgPyBhcmcyIDogYXJnM1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSBhbiBlbGVtZW50XG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI29mZlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fHN0cmluZ30gYXJnMSB0aGUgZWxlbWVudCB0byByZW1vdmUgdGhlIGxpc3RlbmVyIGZyb20gfCB0aGUgZXZlbnQgbmFtZSB0byByZW1vdmUgdGhlIGxpc3RlbmVyIGZyb21cbiAgICogQHBhcmFtIHtzdHJpbmd8RXZlbnRMaXN0ZW5lcn0gYXJnMiB0aGUgZXZlbnQgbmFtZSB0byByZW1vdmUgdGhlIGxpc3RlbmVyIGZyb20gfCB0aGUgbGlzdGVuZXIgdG8gcmVtb3ZlXG4gICAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lcn0gW2FyZzNdIHRoZSBsaXN0ZW5lciB0byByZW1vdmVcbiAgICogQHJldHVybnMge0V2ZW50TGlzdGVuZXJ9XG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVySW1wbChhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgcmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBldmVudEFyZ3MgPSBwcm9jZXNzRXZlbnRBcmdzKGFyZzEsIGFyZzIsIGFyZzMpXG4gICAgICBldmVudEFyZ3MudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRBcmdzLmV2ZW50LCBldmVudEFyZ3MubGlzdGVuZXIpXG4gICAgfSlcbiAgICByZXR1cm4gaXNGdW5jdGlvbihhcmcyKSA/IGFyZzIgOiBhcmczXG4gIH1cblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBOb2RlIHByb2Nlc3NpbmdcbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBjb25zdCBEVU1NWV9FTFQgPSBnZXREb2N1bWVudCgpLmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpIC8vIGR1bW15IGVsZW1lbnQgZm9yIGJhZCBzZWxlY3RvcnNcbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyTmFtZVxuICAgKiBAcmV0dXJucyB7KE5vZGV8V2luZG93KVtdfVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZEF0dHJpYnV0ZVRhcmdldHMoZWx0LCBhdHRyTmFtZSkge1xuICAgIGNvbnN0IGF0dHJUYXJnZXQgPSBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCBhdHRyTmFtZSlcbiAgICBpZiAoYXR0clRhcmdldCkge1xuICAgICAgaWYgKGF0dHJUYXJnZXQgPT09ICd0aGlzJykge1xuICAgICAgICByZXR1cm4gW2ZpbmRUaGlzRWxlbWVudChlbHQsIGF0dHJOYW1lKV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHF1ZXJ5U2VsZWN0b3JBbGxFeHQoZWx0LCBhdHRyVGFyZ2V0KVxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGxvZ0Vycm9yKCdUaGUgc2VsZWN0b3IgXCInICsgYXR0clRhcmdldCArICdcIiBvbiAnICsgYXR0ck5hbWUgKyAnIHJldHVybmVkIG5vIG1hdGNoZXMhJylcbiAgICAgICAgICByZXR1cm4gW0RVTU1ZX0VMVF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZVxuICAgKiBAcmV0dXJucyB7RWxlbWVudHxudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZFRoaXNFbGVtZW50KGVsdCwgYXR0cmlidXRlKSB7XG4gICAgcmV0dXJuIGFzRWxlbWVudChnZXRDbG9zZXN0TWF0Y2goZWx0LCBmdW5jdGlvbihlbHQpIHtcbiAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZShhc0VsZW1lbnQoZWx0KSwgYXR0cmlidXRlKSAhPSBudWxsXG4gICAgfSkpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHJldHVybnMge05vZGV8V2luZG93fG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRUYXJnZXQoZWx0KSB7XG4gICAgY29uc3QgdGFyZ2V0U3RyID0gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXRhcmdldCcpXG4gICAgaWYgKHRhcmdldFN0cikge1xuICAgICAgaWYgKHRhcmdldFN0ciA9PT0gJ3RoaXMnKSB7XG4gICAgICAgIHJldHVybiBmaW5kVGhpc0VsZW1lbnQoZWx0LCAnaHgtdGFyZ2V0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBxdWVyeVNlbGVjdG9yRXh0KGVsdCwgdGFyZ2V0U3RyKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsdClcbiAgICAgIGlmIChkYXRhLmJvb3N0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldERvY3VtZW50KCkuYm9keVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVsdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIHNob3VsZFNldHRsZUF0dHJpYnV0ZShuYW1lKSB7XG4gICAgY29uc3QgYXR0cmlidXRlc1RvU2V0dGxlID0gaHRteC5jb25maWcuYXR0cmlidXRlc1RvU2V0dGxlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzVG9TZXR0bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChuYW1lID09PSBhdHRyaWJ1dGVzVG9TZXR0bGVbaV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBtZXJnZVRvXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gbWVyZ2VGcm9tXG4gICAqL1xuICBmdW5jdGlvbiBjbG9uZUF0dHJpYnV0ZXMobWVyZ2VUbywgbWVyZ2VGcm9tKSB7XG4gICAgZm9yRWFjaChtZXJnZVRvLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIGlmICghbWVyZ2VGcm9tLmhhc0F0dHJpYnV0ZShhdHRyLm5hbWUpICYmIHNob3VsZFNldHRsZUF0dHJpYnV0ZShhdHRyLm5hbWUpKSB7XG4gICAgICAgIG1lcmdlVG8ucmVtb3ZlQXR0cmlidXRlKGF0dHIubmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGZvckVhY2gobWVyZ2VGcm9tLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uKGF0dHIpIHtcbiAgICAgIGlmIChzaG91bGRTZXR0bGVBdHRyaWJ1dGUoYXR0ci5uYW1lKSkge1xuICAgICAgICBtZXJnZVRvLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0h0bXhTd2FwU3R5bGV9IHN3YXBTdHlsZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzSW5saW5lU3dhcChzd2FwU3R5bGUsIHRhcmdldCkge1xuICAgIGNvbnN0IGV4dGVuc2lvbnMgPSBnZXRFeHRlbnNpb25zKHRhcmdldClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbaV1cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChleHRlbnNpb24uaXNJbmxpbmVTd2FwKHN3YXBTdHlsZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzd2FwU3R5bGUgPT09ICdvdXRlckhUTUwnXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9vYlZhbHVlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gb29iRWxlbWVudFxuICAgKiBAcGFyYW0ge0h0bXhTZXR0bGVJbmZvfSBzZXR0bGVJbmZvXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBmdW5jdGlvbiBvb2JTd2FwKG9vYlZhbHVlLCBvb2JFbGVtZW50LCBzZXR0bGVJbmZvKSB7XG4gICAgbGV0IHNlbGVjdG9yID0gJyMnICsgZ2V0UmF3QXR0cmlidXRlKG9vYkVsZW1lbnQsICdpZCcpXG4gICAgLyoqIEB0eXBlIEh0bXhTd2FwU3R5bGUgKi9cbiAgICBsZXQgc3dhcFN0eWxlID0gJ291dGVySFRNTCdcbiAgICBpZiAob29iVmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0gZWxzZSBpZiAob29iVmFsdWUuaW5kZXhPZignOicpID4gMCkge1xuICAgICAgc3dhcFN0eWxlID0gb29iVmFsdWUuc3Vic3RyKDAsIG9vYlZhbHVlLmluZGV4T2YoJzonKSlcbiAgICAgIHNlbGVjdG9yID0gb29iVmFsdWUuc3Vic3RyKG9vYlZhbHVlLmluZGV4T2YoJzonKSArIDEsIG9vYlZhbHVlLmxlbmd0aClcbiAgICB9IGVsc2Uge1xuICAgICAgc3dhcFN0eWxlID0gb29iVmFsdWVcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRzID0gZ2V0RG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICBmb3JFYWNoKFxuICAgICAgICB0YXJnZXRzLFxuICAgICAgICBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICBsZXQgZnJhZ21lbnRcbiAgICAgICAgICBjb25zdCBvb2JFbGVtZW50Q2xvbmUgPSBvb2JFbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAgIGZyYWdtZW50ID0gZ2V0RG9jdW1lbnQoKS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChvb2JFbGVtZW50Q2xvbmUpXG4gICAgICAgICAgaWYgKCFpc0lubGluZVN3YXAoc3dhcFN0eWxlLCB0YXJnZXQpKSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IGFzUGFyZW50Tm9kZShvb2JFbGVtZW50Q2xvbmUpIC8vIGlmIHRoaXMgaXMgbm90IGFuIGlubGluZSBzd2FwLCB3ZSB1c2UgdGhlIGNvbnRlbnQgb2YgdGhlIG5vZGUsIG5vdCB0aGUgbm9kZSBpdHNlbGZcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBiZWZvcmVTd2FwRGV0YWlscyA9IHsgc2hvdWxkU3dhcDogdHJ1ZSwgdGFyZ2V0LCBmcmFnbWVudCB9XG4gICAgICAgICAgaWYgKCF0cmlnZ2VyRXZlbnQodGFyZ2V0LCAnaHRteDpvb2JCZWZvcmVTd2FwJywgYmVmb3JlU3dhcERldGFpbHMpKSByZXR1cm5cblxuICAgICAgICAgIHRhcmdldCA9IGJlZm9yZVN3YXBEZXRhaWxzLnRhcmdldCAvLyBhbGxvdyByZS10YXJnZXRpbmdcbiAgICAgICAgICBpZiAoYmVmb3JlU3dhcERldGFpbHMuc2hvdWxkU3dhcCkge1xuICAgICAgICAgICAgc3dhcFdpdGhTdHlsZShzd2FwU3R5bGUsIHRhcmdldCwgdGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yRWFjaChzZXR0bGVJbmZvLmVsdHMsIGZ1bmN0aW9uKGVsdCkge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6b29iQWZ0ZXJTd2FwJywgYmVmb3JlU3dhcERldGFpbHMpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgb29iRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9vYkVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9vYkVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvb2JFbGVtZW50KVxuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpvb2JFcnJvck5vVGFyZ2V0JywgeyBjb250ZW50OiBvb2JFbGVtZW50IH0pXG4gICAgfVxuICAgIHJldHVybiBvb2JWYWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnRcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVByZXNlcnZlZEVsZW1lbnRzKGZyYWdtZW50KSB7XG4gICAgZm9yRWFjaChmaW5kQWxsKGZyYWdtZW50LCAnW2h4LXByZXNlcnZlXSwgW2RhdGEtaHgtcHJlc2VydmVdJyksIGZ1bmN0aW9uKHByZXNlcnZlZEVsdCkge1xuICAgICAgY29uc3QgaWQgPSBnZXRBdHRyaWJ1dGVWYWx1ZShwcmVzZXJ2ZWRFbHQsICdpZCcpXG4gICAgICBjb25zdCBvbGRFbHQgPSBnZXREb2N1bWVudCgpLmdldEVsZW1lbnRCeUlkKGlkKVxuICAgICAgaWYgKG9sZEVsdCAhPSBudWxsKSB7XG4gICAgICAgIHByZXNlcnZlZEVsdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChvbGRFbHQsIHByZXNlcnZlZEVsdClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50Tm9kZVxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZUF0dHJpYnV0ZXMocGFyZW50Tm9kZSwgZnJhZ21lbnQsIHNldHRsZUluZm8pIHtcbiAgICBmb3JFYWNoKGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF0nKSwgZnVuY3Rpb24obmV3Tm9kZSkge1xuICAgICAgY29uc3QgaWQgPSBnZXRSYXdBdHRyaWJ1dGUobmV3Tm9kZSwgJ2lkJylcbiAgICAgIGlmIChpZCAmJiBpZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZCA9IGlkLnJlcGxhY2UoXCInXCIsIFwiXFxcXCdcIilcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFRhZyA9IG5ld05vZGUudGFnTmFtZS5yZXBsYWNlKCc6JywgJ1xcXFw6JylcbiAgICAgICAgY29uc3QgcGFyZW50RWx0ID0gYXNQYXJlbnROb2RlKHBhcmVudE5vZGUpXG4gICAgICAgIGNvbnN0IG9sZE5vZGUgPSBwYXJlbnRFbHQgJiYgcGFyZW50RWx0LnF1ZXJ5U2VsZWN0b3Iobm9ybWFsaXplZFRhZyArIFwiW2lkPSdcIiArIG5vcm1hbGl6ZWRJZCArIFwiJ11cIilcbiAgICAgICAgaWYgKG9sZE5vZGUgJiYgb2xkTm9kZSAhPT0gcGFyZW50RWx0KSB7XG4gICAgICAgICAgY29uc3QgbmV3QXR0cmlidXRlcyA9IG5ld05vZGUuY2xvbmVOb2RlKClcbiAgICAgICAgICBjbG9uZUF0dHJpYnV0ZXMobmV3Tm9kZSwgb2xkTm9kZSlcbiAgICAgICAgICBzZXR0bGVJbmZvLnRhc2tzLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbG9uZUF0dHJpYnV0ZXMobmV3Tm9kZSwgbmV3QXR0cmlidXRlcylcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IGNoaWxkXG4gICAqIEByZXR1cm5zIHtIdG14U2V0dGxlVGFza31cbiAgICovXG4gIGZ1bmN0aW9uIG1ha2VBamF4TG9hZFRhc2soY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZW1vdmVDbGFzc0Zyb21FbGVtZW50KGNoaWxkLCBodG14LmNvbmZpZy5hZGRlZENsYXNzKVxuICAgICAgcHJvY2Vzc05vZGUoYXNFbGVtZW50KGNoaWxkKSlcbiAgICAgIHByb2Nlc3NGb2N1cyhhc1BhcmVudE5vZGUoY2hpbGQpKVxuICAgICAgdHJpZ2dlckV2ZW50KGNoaWxkLCAnaHRteDpsb2FkJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfSBjaGlsZFxuICAgKi9cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZvY3VzKGNoaWxkKSB7XG4gICAgY29uc3QgYXV0b2ZvY3VzID0gJ1thdXRvZm9jdXNdJ1xuICAgIGNvbnN0IGF1dG9Gb2N1c2VkRWx0ID0gYXNIdG1sRWxlbWVudChtYXRjaGVzKGNoaWxkLCBhdXRvZm9jdXMpID8gY2hpbGQgOiBjaGlsZC5xdWVyeVNlbGVjdG9yKGF1dG9mb2N1cykpXG4gICAgaWYgKGF1dG9Gb2N1c2VkRWx0ICE9IG51bGwpIHtcbiAgICAgIGF1dG9Gb2N1c2VkRWx0LmZvY3VzKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBwYXJlbnROb2RlXG4gICAqIEBwYXJhbSB7Tm9kZX0gaW5zZXJ0QmVmb3JlXG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtIdG14U2V0dGxlSW5mb30gc2V0dGxlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gaW5zZXJ0Tm9kZXNCZWZvcmUocGFyZW50Tm9kZSwgaW5zZXJ0QmVmb3JlLCBmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIGhhbmRsZUF0dHJpYnV0ZXMocGFyZW50Tm9kZSwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgd2hpbGUgKGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBmcmFnbWVudC5maXJzdENoaWxkXG4gICAgICBhZGRDbGFzc1RvRWxlbWVudChhc0VsZW1lbnQoY2hpbGQpLCBodG14LmNvbmZpZy5hZGRlZENsYXNzKVxuICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2hpbGQsIGluc2VydEJlZm9yZSlcbiAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5URVhUX05PREUgJiYgY2hpbGQubm9kZVR5cGUgIT09IE5vZGUuQ09NTUVOVF9OT0RFKSB7XG4gICAgICAgIHNldHRsZUluZm8udGFza3MucHVzaChtYWtlQWpheExvYWRUYXNrKGNoaWxkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYmFzZWQgb24gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaHlhbWFtb3RvL2ZkNDM1NTA1ZDI5ZWJmYTNkOTcxNmZkMmJlOGQ0MmYwLFxuICAgKiBkZXJpdmVkIGZyb20gSmF2YSdzIHN0cmluZyBoYXNoY29kZSBpbXBsZW1lbnRhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoYXNoXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBzdHJpbmdIYXNoKHN0cmluZywgaGFzaCkge1xuICAgIGxldCBjaGFyID0gMFxuICAgIHdoaWxlIChjaGFyIDwgc3RyaW5nLmxlbmd0aCkge1xuICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0cmluZy5jaGFyQ29kZUF0KGNoYXIrKykgfCAwIC8vIGJpdHdpc2Ugb3IgZW5zdXJlcyB3ZSBoYXZlIGEgMzItYml0IGludFxuICAgIH1cbiAgICByZXR1cm4gaGFzaFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBhdHRyaWJ1dGVIYXNoKGVsdCkge1xuICAgIGxldCBoYXNoID0gMFxuICAgIC8vIElFIGZpeFxuICAgIGlmIChlbHQuYXR0cmlidXRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbHQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBlbHQuYXR0cmlidXRlc1tpXVxuICAgICAgICBpZiAoYXR0cmlidXRlLnZhbHVlKSB7IC8vIG9ubHkgaW5jbHVkZSBhdHRyaWJ1dGVzIHcvIGFjdHVhbCB2YWx1ZXMgKGVtcHR5IGlzIHNhbWUgYXMgbm9uLWV4aXN0ZW50KVxuICAgICAgICAgIGhhc2ggPSBzdHJpbmdIYXNoKGF0dHJpYnV0ZS5uYW1lLCBoYXNoKVxuICAgICAgICAgIGhhc2ggPSBzdHJpbmdIYXNoKGF0dHJpYnV0ZS52YWx1ZSwgaGFzaClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFzaFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGVsdFxuICAgKi9cbiAgZnVuY3Rpb24gZGVJbml0T25IYW5kbGVycyhlbHQpIHtcbiAgICBjb25zdCBpbnRlcm5hbERhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWx0KVxuICAgIGlmIChpbnRlcm5hbERhdGEub25IYW5kbGVycykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlcm5hbERhdGEub25IYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBoYW5kbGVySW5mbyA9IGludGVybmFsRGF0YS5vbkhhbmRsZXJzW2ldXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJJbXBsKGVsdCwgaGFuZGxlckluZm8uZXZlbnQsIGhhbmRsZXJJbmZvLmxpc3RlbmVyKVxuICAgICAgfVxuICAgICAgZGVsZXRlIGludGVybmFsRGF0YS5vbkhhbmRsZXJzXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gZGVJbml0Tm9kZShlbGVtZW50KSB7XG4gICAgY29uc3QgaW50ZXJuYWxEYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsZW1lbnQpXG4gICAgaWYgKGludGVybmFsRGF0YS50aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQoaW50ZXJuYWxEYXRhLnRpbWVvdXQpXG4gICAgfVxuICAgIGlmIChpbnRlcm5hbERhdGEubGlzdGVuZXJJbmZvcykge1xuICAgICAgZm9yRWFjaChpbnRlcm5hbERhdGEubGlzdGVuZXJJbmZvcywgZnVuY3Rpb24oaW5mbykge1xuICAgICAgICBpZiAoaW5mby5vbikge1xuICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJJbXBsKGluZm8ub24sIGluZm8udHJpZ2dlciwgaW5mby5saXN0ZW5lcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgZGVJbml0T25IYW5kbGVycyhlbGVtZW50KVxuICAgIGZvckVhY2goT2JqZWN0LmtleXMoaW50ZXJuYWxEYXRhKSwgZnVuY3Rpb24oa2V5KSB7IGRlbGV0ZSBpbnRlcm5hbERhdGFba2V5XSB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYW5VcEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHRyaWdnZXJFdmVudChlbGVtZW50LCAnaHRteDpiZWZvcmVDbGVhbnVwRWxlbWVudCcpXG4gICAgZGVJbml0Tm9kZShlbGVtZW50KVxuICAgIC8vIEB0cy1pZ25vcmUgSUUxMSBjb2RlXG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5yZXNvbHZlZFJlZmVyZW5jZVxuICAgIGlmIChlbGVtZW50LmNoaWxkcmVuKSB7IC8vIElFXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBmb3JFYWNoKGVsZW1lbnQuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKSB7IGNsZWFuVXBFbGVtZW50KGNoaWxkKSB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIHN3YXBPdXRlckhUTUwodGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHRhcmdldC50YWdOYW1lID09PSAnQk9EWScpIHsgLy8gc3BlY2lhbCBjYXNlIHRoZSBib2R5IHRvIGlubmVySFRNTCBiZWNhdXNlIERvY3VtZW50RnJhZ21lbnRzIGNhbid0IGNvbnRhaW4gYSBib2R5IGVsdCB1bmZvcnR1bmF0ZWx5XG4gICAgICByZXR1cm4gc3dhcElubmVySFRNTCh0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgIH1cbiAgICAvKiogQHR5cGUge05vZGV9ICovXG4gICAgbGV0IG5ld0VsdFxuICAgIGNvbnN0IGVsdEJlZm9yZU5ld0NvbnRlbnQgPSB0YXJnZXQucHJldmlvdXNTaWJsaW5nXG4gICAgaW5zZXJ0Tm9kZXNCZWZvcmUocGFyZW50RWx0KHRhcmdldCksIHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgaWYgKGVsdEJlZm9yZU5ld0NvbnRlbnQgPT0gbnVsbCkge1xuICAgICAgbmV3RWx0ID0gcGFyZW50RWx0KHRhcmdldCkuZmlyc3RDaGlsZFxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdFbHQgPSBlbHRCZWZvcmVOZXdDb250ZW50Lm5leHRTaWJsaW5nXG4gICAgfVxuICAgIHNldHRsZUluZm8uZWx0cyA9IHNldHRsZUluZm8uZWx0cy5maWx0ZXIoZnVuY3Rpb24oZSkgeyByZXR1cm4gZSAhPT0gdGFyZ2V0IH0pXG4gICAgd2hpbGUgKG5ld0VsdCAmJiBuZXdFbHQgIT09IHRhcmdldCkge1xuICAgICAgaWYgKG5ld0VsdCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgc2V0dGxlSW5mby5lbHRzLnB1c2gobmV3RWx0KVxuICAgICAgICBuZXdFbHQgPSBuZXdFbHQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbHQgPSBudWxsXG4gICAgICB9XG4gICAgfVxuICAgIGNsZWFuVXBFbGVtZW50KHRhcmdldClcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgdGFyZ2V0LnJlbW92ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhcmdldClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfSBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0h0bXhTZXR0bGVJbmZvfSBzZXR0bGVJbmZvXG4gICAqL1xuICBmdW5jdGlvbiBzd2FwQWZ0ZXJCZWdpbih0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKSB7XG4gICAgcmV0dXJuIGluc2VydE5vZGVzQmVmb3JlKHRhcmdldCwgdGFyZ2V0LmZpcnN0Q2hpbGQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtIdG14U2V0dGxlSW5mb30gc2V0dGxlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gc3dhcEJlZm9yZUJlZ2luKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pIHtcbiAgICByZXR1cm4gaW5zZXJ0Tm9kZXNCZWZvcmUocGFyZW50RWx0KHRhcmdldCksIHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAgICogQHBhcmFtIHtQYXJlbnROb2RlfSBmcmFnbWVudFxuICAgKiBAcGFyYW0ge0h0bXhTZXR0bGVJbmZvfSBzZXR0bGVJbmZvXG4gICAqL1xuICBmdW5jdGlvbiBzd2FwQmVmb3JlRW5kKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pIHtcbiAgICByZXR1cm4gaW5zZXJ0Tm9kZXNCZWZvcmUodGFyZ2V0LCBudWxsLCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIHN3YXBBZnRlckVuZCh0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKSB7XG4gICAgcmV0dXJuIGluc2VydE5vZGVzQmVmb3JlKHBhcmVudEVsdCh0YXJnZXQpLCB0YXJnZXQubmV4dFNpYmxpbmcsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqL1xuICBmdW5jdGlvbiBzd2FwRGVsZXRlKHRhcmdldCkge1xuICAgIGNsZWFuVXBFbGVtZW50KHRhcmdldClcbiAgICByZXR1cm4gcGFyZW50RWx0KHRhcmdldCkucmVtb3ZlQ2hpbGQodGFyZ2V0KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtIdG14U2V0dGxlSW5mb30gc2V0dGxlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gc3dhcElubmVySFRNTCh0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IHRhcmdldC5maXJzdENoaWxkXG4gICAgaW5zZXJ0Tm9kZXNCZWZvcmUodGFyZ2V0LCBmaXJzdENoaWxkLCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICBpZiAoZmlyc3RDaGlsZCkge1xuICAgICAgd2hpbGUgKGZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgY2xlYW5VcEVsZW1lbnQoZmlyc3RDaGlsZC5uZXh0U2libGluZylcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpXG4gICAgICB9XG4gICAgICBjbGVhblVwRWxlbWVudChmaXJzdENoaWxkKVxuICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKGZpcnN0Q2hpbGQpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SHRteFN3YXBTdHlsZX0gc3dhcFN0eWxlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gZnJhZ21lbnRcbiAgICogQHBhcmFtIHtIdG14U2V0dGxlSW5mb30gc2V0dGxlSW5mb1xuICAgKi9cbiAgZnVuY3Rpb24gc3dhcFdpdGhTdHlsZShzd2FwU3R5bGUsIGVsdCwgdGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbykge1xuICAgIHN3aXRjaCAoc3dhcFN0eWxlKSB7XG4gICAgICBjYXNlICdub25lJzpcbiAgICAgICAgcmV0dXJuXG4gICAgICBjYXNlICdvdXRlckhUTUwnOlxuICAgICAgICBzd2FwT3V0ZXJIVE1MKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgICAgIHJldHVyblxuICAgICAgY2FzZSAnYWZ0ZXJiZWdpbic6XG4gICAgICAgIHN3YXBBZnRlckJlZ2luKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgICAgIHJldHVyblxuICAgICAgY2FzZSAnYmVmb3JlYmVnaW4nOlxuICAgICAgICBzd2FwQmVmb3JlQmVnaW4odGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgcmV0dXJuXG4gICAgICBjYXNlICdiZWZvcmVlbmQnOlxuICAgICAgICBzd2FwQmVmb3JlRW5kKHRhcmdldCwgZnJhZ21lbnQsIHNldHRsZUluZm8pXG4gICAgICAgIHJldHVyblxuICAgICAgY2FzZSAnYWZ0ZXJlbmQnOlxuICAgICAgICBzd2FwQWZ0ZXJFbmQodGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgcmV0dXJuXG4gICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICBzd2FwRGVsZXRlKHRhcmdldClcbiAgICAgICAgcmV0dXJuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgZXh0ZW5zaW9ucyA9IGdldEV4dGVuc2lvbnMoZWx0KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBleHQgPSBleHRlbnNpb25zW2ldXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnRzID0gZXh0LmhhbmRsZVN3YXAoc3dhcFN0eWxlLCB0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnRzKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3RWxlbWVudHMubGVuZ3RoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIGhhbmRsZVN3YXAgcmV0dXJucyBhbiBhcnJheSAobGlrZSkgb2YgZWxlbWVudHMsIHdlIGhhbmRsZSB0aGVtXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdFbGVtZW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBuZXdFbGVtZW50c1tqXVxuICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLlRFWFRfTk9ERSAmJiBjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5DT01NRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGxlSW5mby50YXNrcy5wdXNoKG1ha2VBamF4TG9hZFRhc2soY2hpbGQpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2dFcnJvcihlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dhcFN0eWxlID09PSAnaW5uZXJIVE1MJykge1xuICAgICAgICAgIHN3YXBJbm5lckhUTUwodGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzd2FwV2l0aFN0eWxlKGh0bXguY29uZmlnLmRlZmF1bHRTd2FwU3R5bGUsIGVsdCwgdGFyZ2V0LCBmcmFnbWVudCwgc2V0dGxlSW5mbylcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50XG4gICAqIEBwYXJhbSB7SHRteFNldHRsZUluZm99IHNldHRsZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRBbmRTd2FwT29iRWxlbWVudHMoZnJhZ21lbnQsIHNldHRsZUluZm8pIHtcbiAgICBmb3JFYWNoKGZpbmRBbGwoZnJhZ21lbnQsICdbaHgtc3dhcC1vb2JdLCBbZGF0YS1oeC1zd2FwLW9vYl0nKSwgZnVuY3Rpb24ob29iRWxlbWVudCkge1xuICAgICAgaWYgKGh0bXguY29uZmlnLmFsbG93TmVzdGVkT29iU3dhcHMgfHwgb29iRWxlbWVudC5wYXJlbnRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG9vYlZhbHVlID0gZ2V0QXR0cmlidXRlVmFsdWUob29iRWxlbWVudCwgJ2h4LXN3YXAtb29iJylcbiAgICAgICAgaWYgKG9vYlZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICBvb2JTd2FwKG9vYlZhbHVlLCBvb2JFbGVtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvb2JFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnaHgtc3dhcC1vb2InKVxuICAgICAgICBvb2JFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1oeC1zd2FwLW9vYicpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRzIGNvbXBsZXRlIHN3YXBwaW5nIHBpcGVsaW5lLCBpbmNsdWRpbmc6IGZvY3VzIGFuZCBzZWxlY3Rpb24gcHJlc2VydmF0aW9uLFxuICAgKiB0aXRsZSB1cGRhdGVzLCBzY3JvbGwsIE9PQiBzd2FwcGluZywgbm9ybWFsIHN3YXBwaW5nIGFuZCBzZXR0bGluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ3xFbGVtZW50fSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICogQHBhcmFtIHtIdG14U3dhcFNwZWNpZmljYXRpb259IHN3YXBTcGVjXG4gICAqIEBwYXJhbSB7U3dhcE9wdGlvbnN9IFtzd2FwT3B0aW9uc11cbiAgICovXG4gIGZ1bmN0aW9uIHN3YXAodGFyZ2V0LCBjb250ZW50LCBzd2FwU3BlYywgc3dhcE9wdGlvbnMpIHtcbiAgICBpZiAoIXN3YXBPcHRpb25zKSB7XG4gICAgICBzd2FwT3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGFyZ2V0ID0gcmVzb2x2ZVRhcmdldCh0YXJnZXQpXG5cbiAgICAvLyBwcmVzZXJ2ZSBmb2N1cyBhbmQgc2VsZWN0aW9uXG4gICAgY29uc3QgYWN0aXZlRWx0ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgIGxldCBzZWxlY3Rpb25JbmZvID0ge31cbiAgICB0cnkge1xuICAgICAgc2VsZWN0aW9uSW5mbyA9IHtcbiAgICAgICAgZWx0OiBhY3RpdmVFbHQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc3RhcnQ6IGFjdGl2ZUVsdCA/IGFjdGl2ZUVsdC5zZWxlY3Rpb25TdGFydCA6IG51bGwsXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZW5kOiBhY3RpdmVFbHQgPyBhY3RpdmVFbHQuc2VsZWN0aW9uRW5kIDogbnVsbFxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHNhZmFyaSBpc3N1ZSAtIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3BsYXl3cmlnaHQvaXNzdWVzLzU4OTRcbiAgICB9XG4gICAgY29uc3Qgc2V0dGxlSW5mbyA9IG1ha2VTZXR0bGVJbmZvKHRhcmdldClcblxuICAgIC8vIEZvciB0ZXh0IGNvbnRlbnQgc3dhcHMsIGRvbid0IHBhcnNlIHRoZSByZXNwb25zZSBhcyBIVE1MLCBqdXN0IGluc2VydCBpdFxuICAgIGlmIChzd2FwU3BlYy5zd2FwU3R5bGUgPT09ICd0ZXh0Q29udGVudCcpIHtcbiAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICAvLyBPdGhlcndpc2UsIG1ha2UgdGhlIGZyYWdtZW50IGFuZCBwcm9jZXNzIGl0XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmcmFnbWVudCA9IG1ha2VGcmFnbWVudChjb250ZW50KVxuXG4gICAgICBzZXR0bGVJbmZvLnRpdGxlID0gZnJhZ21lbnQudGl0bGVcblxuICAgICAgLy8gc2VsZWN0LW9vYiBzd2Fwc1xuICAgICAgaWYgKHN3YXBPcHRpb25zLnNlbGVjdE9PQikge1xuICAgICAgICBjb25zdCBvb2JTZWxlY3RWYWx1ZXMgPSBzd2FwT3B0aW9ucy5zZWxlY3RPT0Iuc3BsaXQoJywnKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9vYlNlbGVjdFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IG9vYlNlbGVjdFZhbHVlID0gb29iU2VsZWN0VmFsdWVzW2ldLnNwbGl0KCc6JywgMilcbiAgICAgICAgICBsZXQgaWQgPSBvb2JTZWxlY3RWYWx1ZVswXS50cmltKClcbiAgICAgICAgICBpZiAoaWQuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgICAgICBpZCA9IGlkLnN1YnN0cmluZygxKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBvb2JWYWx1ZSA9IG9vYlNlbGVjdFZhbHVlWzFdIHx8ICd0cnVlJ1xuICAgICAgICAgIGNvbnN0IG9vYkVsZW1lbnQgPSBmcmFnbWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGlkKVxuICAgICAgICAgIGlmIChvb2JFbGVtZW50KSB7XG4gICAgICAgICAgICBvb2JTd2FwKG9vYlZhbHVlLCBvb2JFbGVtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gb29iIHN3YXBzXG4gICAgICBmaW5kQW5kU3dhcE9vYkVsZW1lbnRzKGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgZm9yRWFjaChmaW5kQWxsKGZyYWdtZW50LCAndGVtcGxhdGUnKSwgLyoqIEBwYXJhbSB7SFRNTFRlbXBsYXRlRWxlbWVudH0gdGVtcGxhdGUgKi9mdW5jdGlvbih0ZW1wbGF0ZSkge1xuICAgICAgICBmaW5kQW5kU3dhcE9vYkVsZW1lbnRzKHRlbXBsYXRlLmNvbnRlbnQsIHNldHRsZUluZm8pXG4gICAgICAgIGlmICh0ZW1wbGF0ZS5jb250ZW50LmNoaWxkRWxlbWVudENvdW50ID09PSAwICYmIHRlbXBsYXRlLmNvbnRlbnQudGV4dENvbnRlbnQudHJpbSgpID09PSAnJykge1xuICAgICAgICAvLyBBdm9pZCBwb2xsdXRpbmcgdGhlIERPTSB3aXRoIGVtcHR5IHRlbXBsYXRlcyB0aGF0IHdlcmUgb25seSB1c2VkIHRvIGVuY2Fwc3VsYXRlIG9vYiBzd2FwXG4gICAgICAgICAgdGVtcGxhdGUucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gbm9ybWFsIHN3YXBcbiAgICAgIGlmIChzd2FwT3B0aW9ucy5zZWxlY3QpIHtcbiAgICAgICAgY29uc3QgbmV3RnJhZ21lbnQgPSBnZXREb2N1bWVudCgpLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICBmb3JFYWNoKGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3dhcE9wdGlvbnMuc2VsZWN0KSwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgIG5ld0ZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gICAgICAgIH0pXG4gICAgICAgIGZyYWdtZW50ID0gbmV3RnJhZ21lbnRcbiAgICAgIH1cbiAgICAgIGhhbmRsZVByZXNlcnZlZEVsZW1lbnRzKGZyYWdtZW50KVxuICAgICAgc3dhcFdpdGhTdHlsZShzd2FwU3BlYy5zd2FwU3R5bGUsIHN3YXBPcHRpb25zLmNvbnRleHRFbGVtZW50LCB0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgIH1cblxuICAgIC8vIGFwcGx5IHNhdmVkIGZvY3VzIGFuZCBzZWxlY3Rpb24gaW5mb3JtYXRpb24gdG8gc3dhcHBlZCBjb250ZW50XG4gICAgaWYgKHNlbGVjdGlvbkluZm8uZWx0ICYmXG4gICAgICAhYm9keUNvbnRhaW5zKHNlbGVjdGlvbkluZm8uZWx0KSAmJlxuICAgICAgZ2V0UmF3QXR0cmlidXRlKHNlbGVjdGlvbkluZm8uZWx0LCAnaWQnKSkge1xuICAgICAgY29uc3QgbmV3QWN0aXZlRWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0UmF3QXR0cmlidXRlKHNlbGVjdGlvbkluZm8uZWx0LCAnaWQnKSlcbiAgICAgIGNvbnN0IGZvY3VzT3B0aW9ucyA9IHsgcHJldmVudFNjcm9sbDogc3dhcFNwZWMuZm9jdXNTY3JvbGwgIT09IHVuZGVmaW5lZCA/ICFzd2FwU3BlYy5mb2N1c1Njcm9sbCA6ICFodG14LmNvbmZpZy5kZWZhdWx0Rm9jdXNTY3JvbGwgfVxuICAgICAgaWYgKG5ld0FjdGl2ZUVsdCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChzZWxlY3Rpb25JbmZvLnN0YXJ0ICYmIG5ld0FjdGl2ZUVsdC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBuZXdBY3RpdmVFbHQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uSW5mby5zdGFydCwgc2VsZWN0aW9uSW5mby5lbmQpXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gdGhlIHNldFNlbGVjdGlvblJhbmdlIG1ldGhvZCBpcyBwcmVzZW50IG9uIGZpZWxkcyB0aGF0IGRvbid0IHN1cHBvcnQgaXQsIHNvIGp1c3QgbGV0IHRoaXMgZmFpbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdBY3RpdmVFbHQuZm9jdXMoZm9jdXNPcHRpb25zKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGh0bXguY29uZmlnLnN3YXBwaW5nQ2xhc3MpXG4gICAgZm9yRWFjaChzZXR0bGVJbmZvLmVsdHMsIGZ1bmN0aW9uKGVsdCkge1xuICAgICAgaWYgKGVsdC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWx0LmNsYXNzTGlzdC5hZGQoaHRteC5jb25maWcuc2V0dGxpbmdDbGFzcylcbiAgICAgIH1cbiAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OmFmdGVyU3dhcCcsIHN3YXBPcHRpb25zLmV2ZW50SW5mbylcbiAgICB9KVxuICAgIGlmIChzd2FwT3B0aW9ucy5hZnRlclN3YXBDYWxsYmFjaykge1xuICAgICAgc3dhcE9wdGlvbnMuYWZ0ZXJTd2FwQ2FsbGJhY2soKVxuICAgIH1cblxuICAgIC8vIG1lcmdlIGluIG5ldyB0aXRsZSBhZnRlciBzd2FwIGJ1dCBiZWZvcmUgc2V0dGxlXG4gICAgaWYgKCFzd2FwU3BlYy5pZ25vcmVUaXRsZSkge1xuICAgICAgaGFuZGxlVGl0bGUoc2V0dGxlSW5mby50aXRsZSlcbiAgICB9XG5cbiAgICAvLyBzZXR0bGVcbiAgICBjb25zdCBkb1NldHRsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yRWFjaChzZXR0bGVJbmZvLnRhc2tzLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgIHRhc2suY2FsbCgpXG4gICAgICB9KVxuICAgICAgZm9yRWFjaChzZXR0bGVJbmZvLmVsdHMsIGZ1bmN0aW9uKGVsdCkge1xuICAgICAgICBpZiAoZWx0LmNsYXNzTGlzdCkge1xuICAgICAgICAgIGVsdC5jbGFzc0xpc3QucmVtb3ZlKGh0bXguY29uZmlnLnNldHRsaW5nQ2xhc3MpXG4gICAgICAgIH1cbiAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6YWZ0ZXJTZXR0bGUnLCBzd2FwT3B0aW9ucy5ldmVudEluZm8pXG4gICAgICB9KVxuXG4gICAgICBpZiAoc3dhcE9wdGlvbnMuYW5jaG9yKSB7XG4gICAgICAgIGNvbnN0IGFuY2hvclRhcmdldCA9IGFzRWxlbWVudChyZXNvbHZlVGFyZ2V0KCcjJyArIHN3YXBPcHRpb25zLmFuY2hvcikpXG4gICAgICAgIGlmIChhbmNob3JUYXJnZXQpIHtcbiAgICAgICAgICBhbmNob3JUYXJnZXQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ3N0YXJ0JywgYmVoYXZpb3I6ICdhdXRvJyB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVNjcm9sbFN0YXRlKHNldHRsZUluZm8uZWx0cywgc3dhcFNwZWMpXG4gICAgICBpZiAoc3dhcE9wdGlvbnMuYWZ0ZXJTZXR0bGVDYWxsYmFjaykge1xuICAgICAgICBzd2FwT3B0aW9ucy5hZnRlclNldHRsZUNhbGxiYWNrKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3dhcFNwZWMuc2V0dGxlRGVsYXkgPiAwKSB7XG4gICAgICBnZXRXaW5kb3coKS5zZXRUaW1lb3V0KGRvU2V0dGxlLCBzd2FwU3BlYy5zZXR0bGVEZWxheSlcbiAgICB9IGVsc2Uge1xuICAgICAgZG9TZXR0bGUoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhlYWRlclxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBlbHRcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRyaWdnZXJIZWFkZXIoeGhyLCBoZWFkZXIsIGVsdCkge1xuICAgIGNvbnN0IHRyaWdnZXJCb2R5ID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKGhlYWRlcilcbiAgICBpZiAodHJpZ2dlckJvZHkuaW5kZXhPZigneycpID09PSAwKSB7XG4gICAgICBjb25zdCB0cmlnZ2VycyA9IHBhcnNlSlNPTih0cmlnZ2VyQm9keSlcbiAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIGluIHRyaWdnZXJzKSB7XG4gICAgICAgIGlmICh0cmlnZ2Vycy5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpKSB7XG4gICAgICAgICAgbGV0IGRldGFpbCA9IHRyaWdnZXJzW2V2ZW50TmFtZV1cbiAgICAgICAgICBpZiAoIWlzUmF3T2JqZWN0KGRldGFpbCkpIHtcbiAgICAgICAgICAgIGRldGFpbCA9IHsgdmFsdWU6IGRldGFpbCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyaWdnZXJFdmVudChlbHQsIGV2ZW50TmFtZSwgZGV0YWlsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV2ZW50TmFtZXMgPSB0cmlnZ2VyQm9keS5zcGxpdCgnLCcpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgZXZlbnROYW1lc1tpXS50cmltKCksIFtdKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFdISVRFU1BBQ0UgPSAvXFxzL1xuICBjb25zdCBXSElURVNQQUNFX09SX0NPTU1BID0gL1tcXHMsXS9cbiAgY29uc3QgU1lNQk9MX1NUQVJUID0gL1tfJGEtekEtWl0vXG4gIGNvbnN0IFNZTUJPTF9DT05UID0gL1tfJGEtekEtWjAtOV0vXG4gIGNvbnN0IFNUUklOR0lTSF9TVEFSVCA9IFsnXCInLCBcIidcIiwgJy8nXVxuICBjb25zdCBOT1RfV0hJVEVTUEFDRSA9IC9bXlxcc10vXG4gIGNvbnN0IENPTUJJTkVEX1NFTEVDVE9SX1NUQVJUID0gL1t7KF0vXG4gIGNvbnN0IENPTUJJTkVEX1NFTEVDVE9SX0VORCA9IC9bfSldL1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIGZ1bmN0aW9uIHRva2VuaXplU3RyaW5nKHN0cikge1xuICAgIC8qKiBAdHlwZSBzdHJpbmdbXSAqL1xuICAgIGNvbnN0IHRva2VucyA9IFtdXG4gICAgbGV0IHBvc2l0aW9uID0gMFxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgIGlmIChTWU1CT0xfU1RBUlQuZXhlYyhzdHIuY2hhckF0KHBvc2l0aW9uKSkpIHtcbiAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICB3aGlsZSAoU1lNQk9MX0NPTlQuZXhlYyhzdHIuY2hhckF0KHBvc2l0aW9uICsgMSkpKSB7XG4gICAgICAgICAgcG9zaXRpb24rK1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHN0ci5zdWJzdHIoc3RhcnRQb3NpdGlvbiwgcG9zaXRpb24gLSBzdGFydFBvc2l0aW9uICsgMSkpXG4gICAgICB9IGVsc2UgaWYgKFNUUklOR0lTSF9TVEFSVC5pbmRleE9mKHN0ci5jaGFyQXQocG9zaXRpb24pKSAhPT0gLTEpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRDaGFyID0gc3RyLmNoYXJBdChwb3NpdGlvbilcbiAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICBwb3NpdGlvbisrXG4gICAgICAgIHdoaWxlIChwb3NpdGlvbiA8IHN0ci5sZW5ndGggJiYgc3RyLmNoYXJBdChwb3NpdGlvbikgIT09IHN0YXJ0Q2hhcikge1xuICAgICAgICAgIGlmIChzdHIuY2hhckF0KHBvc2l0aW9uKSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBwb3NpdGlvbisrXG4gICAgICAgICAgfVxuICAgICAgICAgIHBvc2l0aW9uKytcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaChzdHIuc3Vic3RyKHN0YXJ0UG9zaXRpb24sIHBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvbiArIDEpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gc3RyLmNoYXJBdChwb3NpdGlvbilcbiAgICAgICAgdG9rZW5zLnB1c2goc3ltYm9sKVxuICAgICAgfVxuICAgICAgcG9zaXRpb24rK1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGxhc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtTmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzUG9zc2libGVSZWxhdGl2ZVJlZmVyZW5jZSh0b2tlbiwgbGFzdCwgcGFyYW1OYW1lKSB7XG4gICAgcmV0dXJuIFNZTUJPTF9TVEFSVC5leGVjKHRva2VuLmNoYXJBdCgwKSkgJiZcbiAgICAgIHRva2VuICE9PSAndHJ1ZScgJiZcbiAgICAgIHRva2VuICE9PSAnZmFsc2UnICYmXG4gICAgICB0b2tlbiAhPT0gJ3RoaXMnICYmXG4gICAgICB0b2tlbiAhPT0gcGFyYW1OYW1lICYmXG4gICAgICBsYXN0ICE9PSAnLidcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fHN0cmluZ30gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRva2Vuc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1OYW1lXG4gICAqIEByZXR1cm5zIHtDb25kaXRpb25hbEZ1bmN0aW9ufG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBtYXliZUdlbmVyYXRlQ29uZGl0aW9uYWwoZWx0LCB0b2tlbnMsIHBhcmFtTmFtZSkge1xuICAgIGlmICh0b2tlbnNbMF0gPT09ICdbJykge1xuICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgIGxldCBicmFja2V0Q291bnQgPSAxXG4gICAgICBsZXQgY29uZGl0aW9uYWxTb3VyY2UgPSAnIHJldHVybiAoZnVuY3Rpb24oJyArIHBhcmFtTmFtZSArICcpeyByZXR1cm4gKCdcbiAgICAgIGxldCBsYXN0ID0gbnVsbFxuICAgICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zWzBdXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgRm9yIHNvbWUgcmVhc29uIHRzYyBkb2Vzbid0IHVuZGVyc3RhbmQgdGhlIHNoaWZ0IGNhbGwsIGFuZCB0aGlua3Mgd2UncmUgY29tcGFyaW5nIHRoZSBzYW1lIHZhbHVlIGhlcmUsIGkuZS4gJ1snIHZzICddJ1xuICAgICAgICBpZiAodG9rZW4gPT09ICddJykge1xuICAgICAgICAgIGJyYWNrZXRDb3VudC0tXG4gICAgICAgICAgaWYgKGJyYWNrZXRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGxhc3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uZGl0aW9uYWxTb3VyY2UgPSBjb25kaXRpb25hbFNvdXJjZSArICd0cnVlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgICAgICAgIGNvbmRpdGlvbmFsU291cmNlICs9ICcpfSknXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBjb25kaXRpb25GdW5jdGlvbiA9IG1heWJlRXZhbChlbHQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBGdW5jdGlvbihjb25kaXRpb25hbFNvdXJjZSkoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWUgfSlcbiAgICAgICAgICAgICAgY29uZGl0aW9uRnVuY3Rpb24uc291cmNlID0gY29uZGl0aW9uYWxTb3VyY2VcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbmRpdGlvbkZ1bmN0aW9uXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6c3ludGF4OmVycm9yJywgeyBlcnJvcjogZSwgc291cmNlOiBjb25kaXRpb25hbFNvdXJjZSB9KVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1snKSB7XG4gICAgICAgICAgYnJhY2tldENvdW50KytcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQb3NzaWJsZVJlbGF0aXZlUmVmZXJlbmNlKHRva2VuLCBsYXN0LCBwYXJhbU5hbWUpKSB7XG4gICAgICAgICAgY29uZGl0aW9uYWxTb3VyY2UgKz0gJygoJyArIHBhcmFtTmFtZSArICcuJyArIHRva2VuICsgJykgPyAoJyArIHBhcmFtTmFtZSArICcuJyArIHRva2VuICsgJykgOiAod2luZG93LicgKyB0b2tlbiArICcpKSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25kaXRpb25hbFNvdXJjZSA9IGNvbmRpdGlvbmFsU291cmNlICsgdG9rZW5cbiAgICAgICAgfVxuICAgICAgICBsYXN0ID0gdG9rZW5zLnNoaWZ0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdG9rZW5zXG4gICAqIEBwYXJhbSB7UmVnRXhwfSBtYXRjaFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gY29uc3VtZVVudGlsKHRva2VucywgbWF0Y2gpIHtcbiAgICBsZXQgcmVzdWx0ID0gJydcbiAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCA+IDAgJiYgIW1hdGNoLnRlc3QodG9rZW5zWzBdKSkge1xuICAgICAgcmVzdWx0ICs9IHRva2Vucy5zaGlmdCgpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0b2tlbnNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnN1bWVDU1NTZWxlY3Rvcih0b2tlbnMpIHtcbiAgICBsZXQgcmVzdWx0XG4gICAgaWYgKHRva2Vucy5sZW5ndGggPiAwICYmIENPTUJJTkVEX1NFTEVDVE9SX1NUQVJULnRlc3QodG9rZW5zWzBdKSkge1xuICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgIHJlc3VsdCA9IGNvbnN1bWVVbnRpbCh0b2tlbnMsIENPTUJJTkVEX1NFTEVDVE9SX0VORCkudHJpbSgpXG4gICAgICB0b2tlbnMuc2hpZnQoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBjb25zdCBJTlBVVF9TRUxFQ1RPUiA9ICdpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCdcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cGxpY2l0VHJpZ2dlclxuICAgKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgZm9yIHRyaWdnZXIgc3BlY3NcbiAgICogQHJldHVybnMge0h0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbltdfVxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VBbmRDYWNoZVRyaWdnZXIoZWx0LCBleHBsaWNpdFRyaWdnZXIsIGNhY2hlKSB7XG4gICAgLyoqIEB0eXBlIEh0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbltdICovXG4gICAgY29uc3QgdHJpZ2dlclNwZWNzID0gW11cbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbml6ZVN0cmluZyhleHBsaWNpdFRyaWdnZXIpXG4gICAgZG8ge1xuICAgICAgY29uc3VtZVVudGlsKHRva2VucywgTk9UX1dISVRFU1BBQ0UpXG4gICAgICBjb25zdCBpbml0aWFsTGVuZ3RoID0gdG9rZW5zLmxlbmd0aFxuICAgICAgY29uc3QgdHJpZ2dlciA9IGNvbnN1bWVVbnRpbCh0b2tlbnMsIC9bLFxcW1xcc10vKVxuICAgICAgaWYgKHRyaWdnZXIgIT09ICcnKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnZXZlcnknKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIEh0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbiAqL1xuICAgICAgICAgIGNvbnN0IGV2ZXJ5ID0geyB0cmlnZ2VyOiAnZXZlcnknIH1cbiAgICAgICAgICBjb25zdW1lVW50aWwodG9rZW5zLCBOT1RfV0hJVEVTUEFDRSlcbiAgICAgICAgICBldmVyeS5wb2xsSW50ZXJ2YWwgPSBwYXJzZUludGVydmFsKGNvbnN1bWVVbnRpbCh0b2tlbnMsIC9bLFxcW1xcc10vKSlcbiAgICAgICAgICBjb25zdW1lVW50aWwodG9rZW5zLCBOT1RfV0hJVEVTUEFDRSlcbiAgICAgICAgICB2YXIgZXZlbnRGaWx0ZXIgPSBtYXliZUdlbmVyYXRlQ29uZGl0aW9uYWwoZWx0LCB0b2tlbnMsICdldmVudCcpXG4gICAgICAgICAgaWYgKGV2ZW50RmlsdGVyKSB7XG4gICAgICAgICAgICBldmVyeS5ldmVudEZpbHRlciA9IGV2ZW50RmlsdGVyXG4gICAgICAgICAgfVxuICAgICAgICAgIHRyaWdnZXJTcGVjcy5wdXNoKGV2ZXJ5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKiBAdHlwZSBIdG14VHJpZ2dlclNwZWNpZmljYXRpb24gKi9cbiAgICAgICAgICBjb25zdCB0cmlnZ2VyU3BlYyA9IHsgdHJpZ2dlciB9XG4gICAgICAgICAgdmFyIGV2ZW50RmlsdGVyID0gbWF5YmVHZW5lcmF0ZUNvbmRpdGlvbmFsKGVsdCwgdG9rZW5zLCAnZXZlbnQnKVxuICAgICAgICAgIGlmIChldmVudEZpbHRlcikge1xuICAgICAgICAgICAgdHJpZ2dlclNwZWMuZXZlbnRGaWx0ZXIgPSBldmVudEZpbHRlclxuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAodG9rZW5zLmxlbmd0aCA+IDAgJiYgdG9rZW5zWzBdICE9PSAnLCcpIHtcbiAgICAgICAgICAgIGNvbnN1bWVVbnRpbCh0b2tlbnMsIE5PVF9XSElURVNQQUNFKVxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKVxuICAgICAgICAgICAgaWYgKHRva2VuID09PSAnY2hhbmdlZCcpIHtcbiAgICAgICAgICAgICAgdHJpZ2dlclNwZWMuY2hhbmdlZCA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICdvbmNlJykge1xuICAgICAgICAgICAgICB0cmlnZ2VyU3BlYy5vbmNlID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ2NvbnN1bWUnKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjLmNvbnN1bWUgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnZGVsYXknICYmIHRva2Vuc1swXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpXG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjLmRlbGF5ID0gcGFyc2VJbnRlcnZhbChjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICdmcm9tJyAmJiB0b2tlbnNbMF0gPT09ICc6Jykge1xuICAgICAgICAgICAgICB0b2tlbnMuc2hpZnQoKVxuICAgICAgICAgICAgICBpZiAoQ09NQklORURfU0VMRUNUT1JfU1RBUlQudGVzdCh0b2tlbnNbMF0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyb21fYXJnID0gY29uc3VtZUNTU1NlbGVjdG9yKHRva2VucylcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJvbV9hcmcgPSBjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKVxuICAgICAgICAgICAgICAgIGlmIChmcm9tX2FyZyA9PT0gJ2Nsb3Nlc3QnIHx8IGZyb21fYXJnID09PSAnZmluZCcgfHwgZnJvbV9hcmcgPT09ICduZXh0JyB8fCBmcm9tX2FyZyA9PT0gJ3ByZXZpb3VzJykge1xuICAgICAgICAgICAgICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY29uc3VtZUNTU1NlbGVjdG9yKHRva2VucylcbiAgICAgICAgICAgICAgICAgIC8vIGBuZXh0YCBhbmQgYHByZXZpb3VzYCBhbGxvdyBhIHNlbGVjdG9yLWxlc3Mgc3ludGF4XG4gICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tX2FyZyArPSAnICcgKyBzZWxlY3RvclxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0cmlnZ2VyU3BlYy5mcm9tID0gZnJvbV9hcmdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICd0YXJnZXQnICYmIHRva2Vuc1swXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpXG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjLnRhcmdldCA9IGNvbnN1bWVDU1NTZWxlY3Rvcih0b2tlbnMpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSAndGhyb3R0bGUnICYmIHRva2Vuc1swXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpXG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjLnRocm90dGxlID0gcGFyc2VJbnRlcnZhbChjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICdxdWV1ZScgJiYgdG9rZW5zWzBdID09PSAnOicpIHtcbiAgICAgICAgICAgICAgdG9rZW5zLnNoaWZ0KClcbiAgICAgICAgICAgICAgdHJpZ2dlclNwZWMucXVldWUgPSBjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ3Jvb3QnICYmIHRva2Vuc1swXSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgIHRva2Vucy5zaGlmdCgpXG4gICAgICAgICAgICAgIHRyaWdnZXJTcGVjW3Rva2VuXSA9IGNvbnN1bWVDU1NTZWxlY3Rvcih0b2tlbnMpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSAndGhyZXNob2xkJyAmJiB0b2tlbnNbMF0gPT09ICc6Jykge1xuICAgICAgICAgICAgICB0b2tlbnMuc2hpZnQoKVxuICAgICAgICAgICAgICB0cmlnZ2VyU3BlY1t0b2tlbl0gPSBjb25zdW1lVW50aWwodG9rZW5zLCBXSElURVNQQUNFX09SX0NPTU1BKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDpzeW50YXg6ZXJyb3InLCB7IHRva2VuOiB0b2tlbnMuc2hpZnQoKSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0cmlnZ2VyU3BlY3MucHVzaCh0cmlnZ2VyU3BlYylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRva2Vucy5sZW5ndGggPT09IGluaXRpYWxMZW5ndGgpIHtcbiAgICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDpzeW50YXg6ZXJyb3InLCB7IHRva2VuOiB0b2tlbnMuc2hpZnQoKSB9KVxuICAgICAgfVxuICAgICAgY29uc3VtZVVudGlsKHRva2VucywgTk9UX1dISVRFU1BBQ0UpXG4gICAgfSB3aGlsZSAodG9rZW5zWzBdID09PSAnLCcgJiYgdG9rZW5zLnNoaWZ0KCkpXG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICBjYWNoZVtleHBsaWNpdFRyaWdnZXJdID0gdHJpZ2dlclNwZWNzXG4gICAgfVxuICAgIHJldHVybiB0cmlnZ2VyU3BlY3NcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7SHRteFRyaWdnZXJTcGVjaWZpY2F0aW9uW119XG4gICAqL1xuICBmdW5jdGlvbiBnZXRUcmlnZ2VyU3BlY3MoZWx0KSB7XG4gICAgY29uc3QgZXhwbGljaXRUcmlnZ2VyID0gZ2V0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtdHJpZ2dlcicpXG4gICAgbGV0IHRyaWdnZXJTcGVjcyA9IFtdXG4gICAgaWYgKGV4cGxpY2l0VHJpZ2dlcikge1xuICAgICAgY29uc3QgY2FjaGUgPSBodG14LmNvbmZpZy50cmlnZ2VyU3BlY3NDYWNoZVxuICAgICAgdHJpZ2dlclNwZWNzID0gKGNhY2hlICYmIGNhY2hlW2V4cGxpY2l0VHJpZ2dlcl0pIHx8IHBhcnNlQW5kQ2FjaGVUcmlnZ2VyKGVsdCwgZXhwbGljaXRUcmlnZ2VyLCBjYWNoZSlcbiAgICB9XG5cbiAgICBpZiAodHJpZ2dlclNwZWNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cmlnZ2VyU3BlY3NcbiAgICB9IGVsc2UgaWYgKG1hdGNoZXMoZWx0LCAnZm9ybScpKSB7XG4gICAgICByZXR1cm4gW3sgdHJpZ2dlcjogJ3N1Ym1pdCcgfV1cbiAgICB9IGVsc2UgaWYgKG1hdGNoZXMoZWx0LCAnaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpKSB7XG4gICAgICByZXR1cm4gW3sgdHJpZ2dlcjogJ2NsaWNrJyB9XVxuICAgIH0gZWxzZSBpZiAobWF0Y2hlcyhlbHQsIElOUFVUX1NFTEVDVE9SKSkge1xuICAgICAgcmV0dXJuIFt7IHRyaWdnZXI6ICdjaGFuZ2UnIH1dXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbeyB0cmlnZ2VyOiAnY2xpY2snIH1dXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqL1xuICBmdW5jdGlvbiBjYW5jZWxQb2xsaW5nKGVsdCkge1xuICAgIGdldEludGVybmFsRGF0YShlbHQpLmNhbmNlbGxlZCA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge1RyaWdnZXJIYW5kbGVyfSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7SHRteFRyaWdnZXJTcGVjaWZpY2F0aW9ufSBzcGVjXG4gICAqL1xuICBmdW5jdGlvbiBwcm9jZXNzUG9sbGluZyhlbHQsIGhhbmRsZXIsIHNwZWMpIHtcbiAgICBjb25zdCBub2RlRGF0YSA9IGdldEludGVybmFsRGF0YShlbHQpXG4gICAgbm9kZURhdGEudGltZW91dCA9IGdldFdpbmRvdygpLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYm9keUNvbnRhaW5zKGVsdCkgJiYgbm9kZURhdGEuY2FuY2VsbGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGlmICghbWF5YmVGaWx0ZXJFdmVudChzcGVjLCBlbHQsIG1ha2VFdmVudCgnaHg6cG9sbDp0cmlnZ2VyJywge1xuICAgICAgICAgIHRyaWdnZXJTcGVjOiBzcGVjLFxuICAgICAgICAgIHRhcmdldDogZWx0XG4gICAgICAgIH0pKSkge1xuICAgICAgICAgIGhhbmRsZXIoZWx0KVxuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NQb2xsaW5nKGVsdCwgaGFuZGxlciwgc3BlYylcbiAgICAgIH1cbiAgICB9LCBzcGVjLnBvbGxJbnRlcnZhbClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxBbmNob3JFbGVtZW50fSBlbHRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc0xvY2FsTGluayhlbHQpIHtcbiAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWUgPT09IGVsdC5ob3N0bmFtZSAmJlxuICAgICAgZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2hyZWYnKSAmJlxuICAgICAgZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2hyZWYnKS5pbmRleE9mKCcjJykgIT09IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKi9cbiAgZnVuY3Rpb24gZWx0SXNEaXNhYmxlZChlbHQpIHtcbiAgICByZXR1cm4gY2xvc2VzdChlbHQsIGh0bXguY29uZmlnLmRpc2FibGVTZWxlY3RvcilcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge0h0bXhOb2RlSW50ZXJuYWxEYXRhfSBub2RlRGF0YVxuICAgKiBAcGFyYW0ge0h0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbltdfSB0cmlnZ2VyU3BlY3NcbiAgICovXG4gIGZ1bmN0aW9uIGJvb3N0RWxlbWVudChlbHQsIG5vZGVEYXRhLCB0cmlnZ2VyU3BlY3MpIHtcbiAgICBpZiAoKGVsdCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmIGlzTG9jYWxMaW5rKGVsdCkgJiYgKGVsdC50YXJnZXQgPT09ICcnIHx8IGVsdC50YXJnZXQgPT09ICdfc2VsZicpKSB8fCBlbHQudGFnTmFtZSA9PT0gJ0ZPUk0nKSB7XG4gICAgICBub2RlRGF0YS5ib29zdGVkID0gdHJ1ZVxuICAgICAgbGV0IHZlcmIsIHBhdGhcbiAgICAgIGlmIChlbHQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgIHZlcmIgPSAnZ2V0J1xuICAgICAgICBwYXRoID0gZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2hyZWYnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmF3QXR0cmlidXRlID0gZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ21ldGhvZCcpXG4gICAgICAgIHZlcmIgPSByYXdBdHRyaWJ1dGUgPyByYXdBdHRyaWJ1dGUudG9Mb3dlckNhc2UoKSA6ICdnZXQnXG4gICAgICAgIGlmICh2ZXJiID09PSAnZ2V0Jykge1xuICAgICAgICB9XG4gICAgICAgIHBhdGggPSBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnYWN0aW9uJylcbiAgICAgIH1cbiAgICAgIHRyaWdnZXJTcGVjcy5mb3JFYWNoKGZ1bmN0aW9uKHRyaWdnZXJTcGVjKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoZWx0LCBmdW5jdGlvbihub2RlLCBldnQpIHtcbiAgICAgICAgICBjb25zdCBlbHQgPSBhc0VsZW1lbnQobm9kZSlcbiAgICAgICAgICBpZiAoZWx0SXNEaXNhYmxlZChlbHQpKSB7XG4gICAgICAgICAgICBjbGVhblVwRWxlbWVudChlbHQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaXNzdWVBamF4UmVxdWVzdCh2ZXJiLCBwYXRoLCBlbHQsIGV2dClcbiAgICAgICAgfSwgbm9kZURhdGEsIHRyaWdnZXJTcGVjLCB0cnVlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIHNob3VsZENhbmNlbChldnQsIG5vZGUpIHtcbiAgICBjb25zdCBlbHQgPSBhc0VsZW1lbnQobm9kZSlcbiAgICBpZiAoIWVsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmIChldnQudHlwZSA9PT0gJ3N1Ym1pdCcgfHwgZXZ0LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgIGlmIChlbHQudGFnTmFtZSA9PT0gJ0ZPUk0nKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAobWF0Y2hlcyhlbHQsICdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b24nKSAmJiBjbG9zZXN0KGVsdCwgJ2Zvcm0nKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKGVsdCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmIGVsdC5ocmVmICYmXG4gICAgICAgIChlbHQuZ2V0QXR0cmlidXRlKCdocmVmJykgPT09ICcjJyB8fCBlbHQuZ2V0QXR0cmlidXRlKCdocmVmJykuaW5kZXhPZignIycpICE9PSAwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcGFyYW0ge0V2ZW50fE1vdXNlRXZlbnR8S2V5Ym9hcmRFdmVudHxUb3VjaEV2ZW50fSBldnRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpZ25vcmVCb29zdGVkQW5jaG9yQ3RybENsaWNrKGVsdCwgZXZ0KSB7XG4gICAgcmV0dXJuIGdldEludGVybmFsRGF0YShlbHQpLmJvb3N0ZWQgJiYgZWx0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgJiYgZXZ0LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyB3aWxsIHJlc29sdmUgdG8gdW5kZWZpbmVkIGZvciBldmVudHMgdGhhdCBkb24ndCBkZWZpbmUgdGhvc2UgcHJvcGVydGllcywgd2hpY2ggaXMgZmluZVxuICAgICAgKGV2dC5jdHJsS2V5IHx8IGV2dC5tZXRhS2V5KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SHRteFRyaWdnZXJTcGVjaWZpY2F0aW9ufSB0cmlnZ2VyU3BlY1xuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBtYXliZUZpbHRlckV2ZW50KHRyaWdnZXJTcGVjLCBlbHQsIGV2dCkge1xuICAgIGNvbnN0IGV2ZW50RmlsdGVyID0gdHJpZ2dlclNwZWMuZXZlbnRGaWx0ZXJcbiAgICBpZiAoZXZlbnRGaWx0ZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBldmVudEZpbHRlci5jYWxsKGVsdCwgZXZ0KSAhPT0gdHJ1ZVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBldmVudEZpbHRlci5zb3VyY2VcbiAgICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpldmVudEZpbHRlcjplcnJvcicsIHsgZXJyb3I6IGUsIHNvdXJjZSB9KVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcGFyYW0ge1RyaWdnZXJIYW5kbGVyfSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7SHRteE5vZGVJbnRlcm5hbERhdGF9IG5vZGVEYXRhXG4gICAqIEBwYXJhbSB7SHRteFRyaWdnZXJTcGVjaWZpY2F0aW9ufSB0cmlnZ2VyU3BlY1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtleHBsaWNpdENhbmNlbF1cbiAgICovXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWx0LCBoYW5kbGVyLCBub2RlRGF0YSwgdHJpZ2dlclNwZWMsIGV4cGxpY2l0Q2FuY2VsKSB7XG4gICAgY29uc3QgZWxlbWVudERhdGEgPSBnZXRJbnRlcm5hbERhdGEoZWx0KVxuICAgIC8qKiBAdHlwZSB7KE5vZGV8V2luZG93KVtdfSAqL1xuICAgIGxldCBlbHRzVG9MaXN0ZW5PblxuICAgIGlmICh0cmlnZ2VyU3BlYy5mcm9tKSB7XG4gICAgICBlbHRzVG9MaXN0ZW5PbiA9IHF1ZXJ5U2VsZWN0b3JBbGxFeHQoZWx0LCB0cmlnZ2VyU3BlYy5mcm9tKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbHRzVG9MaXN0ZW5PbiA9IFtlbHRdXG4gICAgfVxuICAgIC8vIHN0b3JlIHRoZSBpbml0aWFsIHZhbHVlcyBvZiB0aGUgZWxlbWVudHMsIHNvIHdlIGNhbiB0ZWxsIGlmIHRoZXkgY2hhbmdlXG4gICAgaWYgKHRyaWdnZXJTcGVjLmNoYW5nZWQpIHtcbiAgICAgIGVsdHNUb0xpc3Rlbk9uLmZvckVhY2goZnVuY3Rpb24oZWx0VG9MaXN0ZW5Pbikge1xuICAgICAgICBjb25zdCBlbHRUb0xpc3Rlbk9uRGF0YSA9IGdldEludGVybmFsRGF0YShlbHRUb0xpc3Rlbk9uKVxuICAgICAgICAvLyBAdHMtaWdub3JlIHZhbHVlIHdpbGwgYmUgdW5kZWZpbmVkIGZvciBub24taW5wdXQgZWxlbWVudHMsIHdoaWNoIGlzIGZpbmVcbiAgICAgICAgZWx0VG9MaXN0ZW5PbkRhdGEubGFzdFZhbHVlID0gZWx0VG9MaXN0ZW5Pbi52YWx1ZVxuICAgICAgfSlcbiAgICB9XG4gICAgZm9yRWFjaChlbHRzVG9MaXN0ZW5PbiwgZnVuY3Rpb24oZWx0VG9MaXN0ZW5Pbikge1xuICAgICAgLyoqIEB0eXBlIEV2ZW50TGlzdGVuZXIgKi9cbiAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgaWYgKCFib2R5Q29udGFpbnMoZWx0KSkge1xuICAgICAgICAgIGVsdFRvTGlzdGVuT24ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmlnZ2VyU3BlYy50cmlnZ2VyLCBldmVudExpc3RlbmVyKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChpZ25vcmVCb29zdGVkQW5jaG9yQ3RybENsaWNrKGVsdCwgZXZ0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChleHBsaWNpdENhbmNlbCB8fCBzaG91bGRDYW5jZWwoZXZ0LCBlbHQpKSB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF5YmVGaWx0ZXJFdmVudCh0cmlnZ2VyU3BlYywgZWx0LCBldnQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnREYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGV2dClcbiAgICAgICAgZXZlbnREYXRhLnRyaWdnZXJTcGVjID0gdHJpZ2dlclNwZWNcbiAgICAgICAgaWYgKGV2ZW50RGF0YS5oYW5kbGVkRm9yID09IG51bGwpIHtcbiAgICAgICAgICBldmVudERhdGEuaGFuZGxlZEZvciA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50RGF0YS5oYW5kbGVkRm9yLmluZGV4T2YoZWx0KSA8IDApIHtcbiAgICAgICAgICBldmVudERhdGEuaGFuZGxlZEZvci5wdXNoKGVsdClcbiAgICAgICAgICBpZiAodHJpZ2dlclNwZWMuY29uc3VtZSkge1xuICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0cmlnZ2VyU3BlYy50YXJnZXQgJiYgZXZ0LnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCFtYXRjaGVzKGFzRWxlbWVudChldnQudGFyZ2V0KSwgdHJpZ2dlclNwZWMudGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRyaWdnZXJTcGVjLm9uY2UpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50RGF0YS50cmlnZ2VyZWRPbmNlKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbWVudERhdGEudHJpZ2dlcmVkT25jZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRyaWdnZXJTcGVjLmNoYW5nZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsdFRvTGlzdGVuT25EYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsdFRvTGlzdGVuT24pXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHZhbHVlIHdpbGwgYmUgdW5kZWZpbmVkIGZvciBub24taW5wdXQgZWxlbWVudHMsIHdoaWNoIGlzIGZpbmVcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWx0VG9MaXN0ZW5Pbi52YWx1ZVxuICAgICAgICAgICAgaWYgKGVsdFRvTGlzdGVuT25EYXRhLmxhc3RWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHRUb0xpc3Rlbk9uRGF0YS5sYXN0VmFsdWUgPSB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudERhdGEuZGVsYXllZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGVsZW1lbnREYXRhLmRlbGF5ZWQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbGVtZW50RGF0YS50aHJvdHRsZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRyaWdnZXJTcGVjLnRocm90dGxlID4gMCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50RGF0YS50aHJvdHRsZSkge1xuICAgICAgICAgICAgICBoYW5kbGVyKGVsdCwgZXZ0KVxuICAgICAgICAgICAgICBlbGVtZW50RGF0YS50aHJvdHRsZSA9IGdldFdpbmRvdygpLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudERhdGEudGhyb3R0bGUgPSBudWxsXG4gICAgICAgICAgICAgIH0sIHRyaWdnZXJTcGVjLnRocm90dGxlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHJpZ2dlclNwZWMuZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICBlbGVtZW50RGF0YS5kZWxheWVkID0gZ2V0V2luZG93KCkuc2V0VGltZW91dChmdW5jdGlvbigpIHsgaGFuZGxlcihlbHQsIGV2dCkgfSwgdHJpZ2dlclNwZWMuZGVsYXkpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OnRyaWdnZXInKVxuICAgICAgICAgICAgaGFuZGxlcihlbHQsIGV2dClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChub2RlRGF0YS5saXN0ZW5lckluZm9zID09IG51bGwpIHtcbiAgICAgICAgbm9kZURhdGEubGlzdGVuZXJJbmZvcyA9IFtdXG4gICAgICB9XG4gICAgICBub2RlRGF0YS5saXN0ZW5lckluZm9zLnB1c2goe1xuICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyU3BlYy50cmlnZ2VyLFxuICAgICAgICBsaXN0ZW5lcjogZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgb246IGVsdFRvTGlzdGVuT25cbiAgICAgIH0pXG4gICAgICBlbHRUb0xpc3Rlbk9uLmFkZEV2ZW50TGlzdGVuZXIodHJpZ2dlclNwZWMudHJpZ2dlciwgZXZlbnRMaXN0ZW5lcilcbiAgICB9KVxuICB9XG5cbiAgbGV0IHdpbmRvd0lzU2Nyb2xsaW5nID0gZmFsc2UgLy8gdXNlZCBieSBpbml0U2Nyb2xsSGFuZGxlclxuICBsZXQgc2Nyb2xsSGFuZGxlciA9IG51bGxcbiAgZnVuY3Rpb24gaW5pdFNjcm9sbEhhbmRsZXIoKSB7XG4gICAgaWYgKCFzY3JvbGxIYW5kbGVyKSB7XG4gICAgICBzY3JvbGxIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvd0lzU2Nyb2xsaW5nID0gdHJ1ZVxuICAgICAgfVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvd0lzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgd2luZG93SXNTY3JvbGxpbmcgPSBmYWxzZVxuICAgICAgICAgIGZvckVhY2goZ2V0RG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2h4LXRyaWdnZXIqPSdyZXZlYWxlZCddLFtkYXRhLWh4LXRyaWdnZXIqPSdyZXZlYWxlZCddXCIpLCBmdW5jdGlvbihlbHQpIHtcbiAgICAgICAgICAgIG1heWJlUmV2ZWFsKGVsdClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LCAyMDApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqL1xuICBmdW5jdGlvbiBtYXliZVJldmVhbChlbHQpIHtcbiAgICBpZiAoIWhhc0F0dHJpYnV0ZShlbHQsICdkYXRhLWh4LXJldmVhbGVkJykgJiYgaXNTY3JvbGxlZEludG9WaWV3KGVsdCkpIHtcbiAgICAgIGVsdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaHgtcmV2ZWFsZWQnLCAndHJ1ZScpXG4gICAgICBjb25zdCBub2RlRGF0YSA9IGdldEludGVybmFsRGF0YShlbHQpXG4gICAgICBpZiAobm9kZURhdGEuaW5pdEhhc2gpIHtcbiAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ3JldmVhbGVkJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHRoZSBub2RlIGlzbid0IGluaXRpYWxpemVkLCB3YWl0IGZvciBpdCBiZWZvcmUgdHJpZ2dlcmluZyB0aGUgcmVxdWVzdFxuICAgICAgICBlbHQuYWRkRXZlbnRMaXN0ZW5lcignaHRteDphZnRlclByb2Nlc3NOb2RlJywgZnVuY3Rpb24oKSB7IHRyaWdnZXJFdmVudChlbHQsICdyZXZlYWxlZCcpIH0sIHsgb25jZTogdHJ1ZSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7VHJpZ2dlckhhbmRsZXJ9IGhhbmRsZXJcbiAgICogQHBhcmFtIHtIdG14Tm9kZUludGVybmFsRGF0YX0gbm9kZURhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gICAqL1xuICBmdW5jdGlvbiBsb2FkSW1tZWRpYXRlbHkoZWx0LCBoYW5kbGVyLCBub2RlRGF0YSwgZGVsYXkpIHtcbiAgICBjb25zdCBsb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIW5vZGVEYXRhLmxvYWRlZCkge1xuICAgICAgICBub2RlRGF0YS5sb2FkZWQgPSB0cnVlXG4gICAgICAgIGhhbmRsZXIoZWx0KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICBnZXRXaW5kb3coKS5zZXRUaW1lb3V0KGxvYWQsIGRlbGF5KVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtIdG14Tm9kZUludGVybmFsRGF0YX0gbm9kZURhdGFcbiAgICogQHBhcmFtIHtIdG14VHJpZ2dlclNwZWNpZmljYXRpb25bXX0gdHJpZ2dlclNwZWNzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gcHJvY2Vzc1ZlcmJzKGVsdCwgbm9kZURhdGEsIHRyaWdnZXJTcGVjcykge1xuICAgIGxldCBleHBsaWNpdEFjdGlvbiA9IGZhbHNlXG4gICAgZm9yRWFjaChWRVJCUywgZnVuY3Rpb24odmVyYikge1xuICAgICAgaWYgKGhhc0F0dHJpYnV0ZShlbHQsICdoeC0nICsgdmVyYikpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGdldEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LScgKyB2ZXJiKVxuICAgICAgICBleHBsaWNpdEFjdGlvbiA9IHRydWVcbiAgICAgICAgbm9kZURhdGEucGF0aCA9IHBhdGhcbiAgICAgICAgbm9kZURhdGEudmVyYiA9IHZlcmJcbiAgICAgICAgdHJpZ2dlclNwZWNzLmZvckVhY2goZnVuY3Rpb24odHJpZ2dlclNwZWMpIHtcbiAgICAgICAgICBhZGRUcmlnZ2VySGFuZGxlcihlbHQsIHRyaWdnZXJTcGVjLCBub2RlRGF0YSwgZnVuY3Rpb24obm9kZSwgZXZ0KSB7XG4gICAgICAgICAgICBjb25zdCBlbHQgPSBhc0VsZW1lbnQobm9kZSlcbiAgICAgICAgICAgIGlmIChjbG9zZXN0KGVsdCwgaHRteC5jb25maWcuZGlzYWJsZVNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICBjbGVhblVwRWxlbWVudChlbHQpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNzdWVBamF4UmVxdWVzdCh2ZXJiLCBwYXRoLCBlbHQsIGV2dClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGV4cGxpY2l0QWN0aW9uXG4gIH1cblxuICAvKipcbiAgICogQGNhbGxiYWNrIFRyaWdnZXJIYW5kbGVyXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEBwYXJhbSB7RXZlbnR9IFtldnRdXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsdFxuICAgKiBAcGFyYW0ge0h0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvbn0gdHJpZ2dlclNwZWNcbiAgICogQHBhcmFtIHtIdG14Tm9kZUludGVybmFsRGF0YX0gbm9kZURhdGFcbiAgICogQHBhcmFtIHtUcmlnZ2VySGFuZGxlcn0gaGFuZGxlclxuICAgKi9cbiAgZnVuY3Rpb24gYWRkVHJpZ2dlckhhbmRsZXIoZWx0LCB0cmlnZ2VyU3BlYywgbm9kZURhdGEsIGhhbmRsZXIpIHtcbiAgICBpZiAodHJpZ2dlclNwZWMudHJpZ2dlciA9PT0gJ3JldmVhbGVkJykge1xuICAgICAgaW5pdFNjcm9sbEhhbmRsZXIoKVxuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihlbHQsIGhhbmRsZXIsIG5vZGVEYXRhLCB0cmlnZ2VyU3BlYylcbiAgICAgIG1heWJlUmV2ZWFsKGFzRWxlbWVudChlbHQpKVxuICAgIH0gZWxzZSBpZiAodHJpZ2dlclNwZWMudHJpZ2dlciA9PT0gJ2ludGVyc2VjdCcpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHt9XG4gICAgICBpZiAodHJpZ2dlclNwZWMucm9vdCkge1xuICAgICAgICBvYnNlcnZlck9wdGlvbnMucm9vdCA9IHF1ZXJ5U2VsZWN0b3JFeHQoZWx0LCB0cmlnZ2VyU3BlYy5yb290KVxuICAgICAgfVxuICAgICAgaWYgKHRyaWdnZXJTcGVjLnRocmVzaG9sZCkge1xuICAgICAgICBvYnNlcnZlck9wdGlvbnMudGhyZXNob2xkID0gcGFyc2VGbG9hdCh0cmlnZ2VyU3BlYy50aHJlc2hvbGQpXG4gICAgICB9XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZW50cmllc1tpXVxuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2ludGVyc2VjdCcpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgb2JzZXJ2ZXJPcHRpb25zKVxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShhc0VsZW1lbnQoZWx0KSlcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoYXNFbGVtZW50KGVsdCksIGhhbmRsZXIsIG5vZGVEYXRhLCB0cmlnZ2VyU3BlYylcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXJTcGVjLnRyaWdnZXIgPT09ICdsb2FkJykge1xuICAgICAgaWYgKCFtYXliZUZpbHRlckV2ZW50KHRyaWdnZXJTcGVjLCBlbHQsIG1ha2VFdmVudCgnbG9hZCcsIHsgZWx0IH0pKSkge1xuICAgICAgICBsb2FkSW1tZWRpYXRlbHkoYXNFbGVtZW50KGVsdCksIGhhbmRsZXIsIG5vZGVEYXRhLCB0cmlnZ2VyU3BlYy5kZWxheSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRyaWdnZXJTcGVjLnBvbGxJbnRlcnZhbCA+IDApIHtcbiAgICAgIG5vZGVEYXRhLnBvbGxpbmcgPSB0cnVlXG4gICAgICBwcm9jZXNzUG9sbGluZyhhc0VsZW1lbnQoZWx0KSwgaGFuZGxlciwgdHJpZ2dlclNwZWMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoZWx0LCBoYW5kbGVyLCBub2RlRGF0YSwgdHJpZ2dlclNwZWMpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIHNob3VsZFByb2Nlc3NIeE9uKG5vZGUpIHtcbiAgICBjb25zdCBlbHQgPSBhc0VsZW1lbnQobm9kZSlcbiAgICBpZiAoIWVsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBlbHQuYXR0cmlidXRlc1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXR0cmlidXRlcy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgYXR0ck5hbWUgPSBhdHRyaWJ1dGVzW2pdLm5hbWVcbiAgICAgIGlmIChzdGFydHNXaXRoKGF0dHJOYW1lLCAnaHgtb246JykgfHwgc3RhcnRzV2l0aChhdHRyTmFtZSwgJ2RhdGEtaHgtb246JykgfHxcbiAgICAgICAgc3RhcnRzV2l0aChhdHRyTmFtZSwgJ2h4LW9uLScpIHx8IHN0YXJ0c1dpdGgoYXR0ck5hbWUsICdkYXRhLWh4LW9uLScpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWx0XG4gICAqIEByZXR1cm5zIHtFbGVtZW50W119XG4gICAqL1xuICBjb25zdCBIWF9PTl9RVUVSWSA9IG5ldyBYUGF0aEV2YWx1YXRvcigpXG4gICAgLmNyZWF0ZUV4cHJlc3Npb24oJy4vLypbQCpbIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJoeC1vbjpcIikgb3Igc3RhcnRzLXdpdGgobmFtZSgpLCBcImRhdGEtaHgtb246XCIpIG9yJyArXG4gICAgICAnIHN0YXJ0cy13aXRoKG5hbWUoKSwgXCJoeC1vbi1cIikgb3Igc3RhcnRzLXdpdGgobmFtZSgpLCBcImRhdGEtaHgtb24tXCIpIF1dJylcblxuICBmdW5jdGlvbiBwcm9jZXNzSFhPblJvb3QoZWx0LCBlbGVtZW50cykge1xuICAgIGlmIChzaG91bGRQcm9jZXNzSHhPbihlbHQpKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGFzRWxlbWVudChlbHQpKVxuICAgIH1cbiAgICBjb25zdCBpdGVyID0gSFhfT05fUVVFUlkuZXZhbHVhdGUoZWx0KVxuICAgIGxldCBub2RlID0gbnVsbFxuICAgIHdoaWxlIChub2RlID0gaXRlci5pdGVyYXRlTmV4dCgpKSBlbGVtZW50cy5wdXNoKGFzRWxlbWVudChub2RlKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmRIeE9uV2lsZGNhcmRFbGVtZW50cyhlbHQpIHtcbiAgICAvKiogQHR5cGUge0VsZW1lbnRbXX0gKi9cbiAgICBjb25zdCBlbGVtZW50cyA9IFtdXG4gICAgaWYgKGVsdCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgZWx0LmNoaWxkTm9kZXMpIHtcbiAgICAgICAgcHJvY2Vzc0hYT25Sb290KGNoaWxkLCBlbGVtZW50cylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzc0hYT25Sb290KGVsdCwgZWxlbWVudHMpXG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50c1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEByZXR1cm5zIHtOb2RlTGlzdE9mPEVsZW1lbnQ+fFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZEVsZW1lbnRzVG9Qcm9jZXNzKGVsdCkge1xuICAgIGlmIChlbHQucXVlcnlTZWxlY3RvckFsbCkge1xuICAgICAgY29uc3QgYm9vc3RlZFNlbGVjdG9yID0gJywgW2h4LWJvb3N0XSBhLCBbZGF0YS1oeC1ib29zdF0gYSwgYVtoeC1ib29zdF0sIGFbZGF0YS1oeC1ib29zdF0nXG5cbiAgICAgIGNvbnN0IGV4dGVuc2lvblNlbGVjdG9ycyA9IFtdXG4gICAgICBmb3IgKGNvbnN0IGUgaW4gZXh0ZW5zaW9ucykge1xuICAgICAgICBjb25zdCBleHRlbnNpb24gPSBleHRlbnNpb25zW2VdXG4gICAgICAgIGlmIChleHRlbnNpb24uZ2V0U2VsZWN0b3JzKSB7XG4gICAgICAgICAgdmFyIHNlbGVjdG9ycyA9IGV4dGVuc2lvbi5nZXRTZWxlY3RvcnMoKVxuICAgICAgICAgIGlmIChzZWxlY3RvcnMpIHtcbiAgICAgICAgICAgIGV4dGVuc2lvblNlbGVjdG9ycy5wdXNoKHNlbGVjdG9ycylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0cyA9IGVsdC5xdWVyeVNlbGVjdG9yQWxsKFZFUkJfU0VMRUNUT1IgKyBib29zdGVkU2VsZWN0b3IgKyBcIiwgZm9ybSwgW3R5cGU9J3N1Ym1pdCddLFwiICtcbiAgICAgICAgJyBbaHgtZXh0XSwgW2RhdGEtaHgtZXh0XSwgW2h4LXRyaWdnZXJdLCBbZGF0YS1oeC10cmlnZ2VyXScgKyBleHRlbnNpb25TZWxlY3RvcnMuZmxhdCgpLm1hcChzID0+ICcsICcgKyBzKS5qb2luKCcnKSlcblxuICAgICAgcmV0dXJuIHJlc3VsdHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBzdWJtaXQgYnV0dG9ucy9pbnB1dHMgdGhhdCBoYXZlIHRoZSBmb3JtIGF0dHJpYnV0ZSBzZXRcbiAgICogc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9idXR0b25cbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqL1xuICBmdW5jdGlvbiBtYXliZVNldExhc3RCdXR0b25DbGlja2VkKGV2dCkge1xuICAgIGNvbnN0IGVsdCA9IC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR8SFRNTElucHV0RWxlbWVudH0gKi8gKGNsb3Nlc3QoYXNFbGVtZW50KGV2dC50YXJnZXQpLCBcImJ1dHRvbiwgaW5wdXRbdHlwZT0nc3VibWl0J11cIikpXG4gICAgY29uc3QgaW50ZXJuYWxEYXRhID0gZ2V0UmVsYXRlZEZvcm1EYXRhKGV2dClcbiAgICBpZiAoaW50ZXJuYWxEYXRhKSB7XG4gICAgICBpbnRlcm5hbERhdGEubGFzdEJ1dHRvbkNsaWNrZWQgPSBlbHRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAqL1xuICBmdW5jdGlvbiBtYXliZVVuc2V0TGFzdEJ1dHRvbkNsaWNrZWQoZXZ0KSB7XG4gICAgY29uc3QgaW50ZXJuYWxEYXRhID0gZ2V0UmVsYXRlZEZvcm1EYXRhKGV2dClcbiAgICBpZiAoaW50ZXJuYWxEYXRhKSB7XG4gICAgICBpbnRlcm5hbERhdGEubGFzdEJ1dHRvbkNsaWNrZWQgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxuICAgKiBAcmV0dXJucyB7SHRteE5vZGVJbnRlcm5hbERhdGF8dW5kZWZpbmVkfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0UmVsYXRlZEZvcm1EYXRhKGV2dCkge1xuICAgIGNvbnN0IGVsdCA9IGNsb3Nlc3QoYXNFbGVtZW50KGV2dC50YXJnZXQpLCBcImJ1dHRvbiwgaW5wdXRbdHlwZT0nc3VibWl0J11cIilcbiAgICBpZiAoIWVsdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGZvcm0gPSByZXNvbHZlVGFyZ2V0KCcjJyArIGdldFJhd0F0dHJpYnV0ZShlbHQsICdmb3JtJyksIGVsdC5nZXRSb290Tm9kZSgpKSB8fCBjbG9zZXN0KGVsdCwgJ2Zvcm0nKVxuICAgIGlmICghZm9ybSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJldHVybiBnZXRJbnRlcm5hbERhdGEoZm9ybSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBlbHRcbiAgICovXG4gIGZ1bmN0aW9uIGluaXRCdXR0b25UcmFja2luZyhlbHQpIHtcbiAgICAvLyBuZWVkIHRvIGhhbmRsZSBib3RoIGNsaWNrIGFuZCBmb2N1cyBpbjpcbiAgICAvLyAgIGZvY3VzaW4gLSBpbiBjYXNlIHNvbWVvbmUgdGFicyBpbiB0byBhIGJ1dHRvbiBhbmQgaGl0cyB0aGUgc3BhY2UgYmFyXG4gICAgLy8gICBjbGljayAtIG9uIE9TWCBidXR0b25zIGRvIG5vdCBmb2N1cyBvbiBjbGljayBzZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzI0XG4gICAgZWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWF5YmVTZXRMYXN0QnV0dG9uQ2xpY2tlZClcbiAgICBlbHQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG1heWJlU2V0TGFzdEJ1dHRvbkNsaWNrZWQpXG4gICAgZWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgbWF5YmVVbnNldExhc3RCdXR0b25DbGlja2VkKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAgICovXG4gIGZ1bmN0aW9uIGFkZEh4T25FdmVudEhhbmRsZXIoZWx0LCBldmVudE5hbWUsIGNvZGUpIHtcbiAgICBjb25zdCBub2RlRGF0YSA9IGdldEludGVybmFsRGF0YShlbHQpXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG5vZGVEYXRhLm9uSGFuZGxlcnMpKSB7XG4gICAgICBub2RlRGF0YS5vbkhhbmRsZXJzID0gW11cbiAgICB9XG4gICAgbGV0IGZ1bmNcbiAgICAvKiogQHR5cGUgRXZlbnRMaXN0ZW5lciAqL1xuICAgIGNvbnN0IGxpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xuICAgICAgbWF5YmVFdmFsKGVsdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChlbHRJc0Rpc2FibGVkKGVsdCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZ1bmMpIHtcbiAgICAgICAgICBmdW5jID0gbmV3IEZ1bmN0aW9uKCdldmVudCcsIGNvZGUpXG4gICAgICAgIH1cbiAgICAgICAgZnVuYy5jYWxsKGVsdCwgZSlcbiAgICAgIH0pXG4gICAgfVxuICAgIGVsdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpXG4gICAgbm9kZURhdGEub25IYW5kbGVycy5wdXNoKHsgZXZlbnQ6IGV2ZW50TmFtZSwgbGlzdGVuZXIgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKi9cbiAgZnVuY3Rpb24gcHJvY2Vzc0h4T25XaWxkY2FyZChlbHQpIHtcbiAgICAvLyB3aXBlIGFueSBwcmV2aW91cyBvbiBoYW5kbGVycyBzbyB0aGF0IHRoaXMgZnVuY3Rpb24gdGFrZXMgcHJlY2VkZW5jZVxuICAgIGRlSW5pdE9uSGFuZGxlcnMoZWx0KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbHQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmFtZSA9IGVsdC5hdHRyaWJ1dGVzW2ldLm5hbWVcbiAgICAgIGNvbnN0IHZhbHVlID0gZWx0LmF0dHJpYnV0ZXNbaV0udmFsdWVcbiAgICAgIGlmIChzdGFydHNXaXRoKG5hbWUsICdoeC1vbicpIHx8IHN0YXJ0c1dpdGgobmFtZSwgJ2RhdGEtaHgtb24nKSkge1xuICAgICAgICBjb25zdCBhZnRlck9uUG9zaXRpb24gPSBuYW1lLmluZGV4T2YoJy1vbicpICsgM1xuICAgICAgICBjb25zdCBuZXh0Q2hhciA9IG5hbWUuc2xpY2UoYWZ0ZXJPblBvc2l0aW9uLCBhZnRlck9uUG9zaXRpb24gKyAxKVxuICAgICAgICBpZiAobmV4dENoYXIgPT09ICctJyB8fCBuZXh0Q2hhciA9PT0gJzonKSB7XG4gICAgICAgICAgbGV0IGV2ZW50TmFtZSA9IG5hbWUuc2xpY2UoYWZ0ZXJPblBvc2l0aW9uICsgMSlcbiAgICAgICAgICAvLyBpZiB0aGUgZXZlbnROYW1lIHN0YXJ0cyB3aXRoIGEgY29sb24gb3IgZGFzaCwgcHJlcGVuZCBcImh0bXhcIiBmb3Igc2hvcnRoYW5kIHN1cHBvcnRcbiAgICAgICAgICBpZiAoc3RhcnRzV2l0aChldmVudE5hbWUsICc6JykpIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9ICdodG14JyArIGV2ZW50TmFtZVxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhcnRzV2l0aChldmVudE5hbWUsICctJykpIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZSA9ICdodG14OicgKyBldmVudE5hbWUuc2xpY2UoMSlcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0c1dpdGgoZXZlbnROYW1lLCAnaHRteC0nKSkge1xuICAgICAgICAgICAgZXZlbnROYW1lID0gJ2h0bXg6JyArIGV2ZW50TmFtZS5zbGljZSg1KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGFkZEh4T25FdmVudEhhbmRsZXIoZWx0LCBldmVudE5hbWUsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fSBlbHRcbiAgICovXG4gIGZ1bmN0aW9uIGluaXROb2RlKGVsdCkge1xuICAgIGlmIChjbG9zZXN0KGVsdCwgaHRteC5jb25maWcuZGlzYWJsZVNlbGVjdG9yKSkge1xuICAgICAgY2xlYW5VcEVsZW1lbnQoZWx0KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IG5vZGVEYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsdClcbiAgICBpZiAobm9kZURhdGEuaW5pdEhhc2ggIT09IGF0dHJpYnV0ZUhhc2goZWx0KSkge1xuICAgICAgLy8gY2xlYW4gdXAgYW55IHByZXZpb3VzbHkgcHJvY2Vzc2VkIGluZm9cbiAgICAgIGRlSW5pdE5vZGUoZWx0KVxuXG4gICAgICBub2RlRGF0YS5pbml0SGFzaCA9IGF0dHJpYnV0ZUhhc2goZWx0KVxuXG4gICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDpiZWZvcmVQcm9jZXNzTm9kZScpXG5cbiAgICAgIC8vIEB0cy1pZ25vcmUgdmFsdWUgd2lsbCBiZSB1bmRlZmluZWQgZm9yIG5vbi1pbnB1dCBlbGVtZW50cywgd2hpY2ggaXMgZmluZVxuICAgICAgaWYgKGVsdC52YWx1ZSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG5vZGVEYXRhLmxhc3RWYWx1ZSA9IGVsdC52YWx1ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCB0cmlnZ2VyU3BlY3MgPSBnZXRUcmlnZ2VyU3BlY3MoZWx0KVxuICAgICAgY29uc3QgaGFzRXhwbGljaXRIdHRwQWN0aW9uID0gcHJvY2Vzc1ZlcmJzKGVsdCwgbm9kZURhdGEsIHRyaWdnZXJTcGVjcylcblxuICAgICAgaWYgKCFoYXNFeHBsaWNpdEh0dHBBY3Rpb24pIHtcbiAgICAgICAgaWYgKGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1ib29zdCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICBib29zdEVsZW1lbnQoZWx0LCBub2RlRGF0YSwgdHJpZ2dlclNwZWNzKVxuICAgICAgICB9IGVsc2UgaWYgKGhhc0F0dHJpYnV0ZShlbHQsICdoeC10cmlnZ2VyJykpIHtcbiAgICAgICAgICB0cmlnZ2VyU3BlY3MuZm9yRWFjaChmdW5jdGlvbih0cmlnZ2VyU3BlYykge1xuICAgICAgICAgICAgLy8gRm9yIFwibmFrZWRcIiB0cmlnZ2VycywgZG9uJ3QgZG8gYW55dGhpbmcgYXQgYWxsXG4gICAgICAgICAgICBhZGRUcmlnZ2VySGFuZGxlcihlbHQsIHRyaWdnZXJTcGVjLCBub2RlRGF0YSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSGFuZGxlIHN1Ym1pdCBidXR0b25zL2lucHV0cyB0aGF0IGhhdmUgdGhlIGZvcm0gYXR0cmlidXRlIHNldFxuICAgICAgLy8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9idXR0b25cbiAgICAgIGlmIChlbHQudGFnTmFtZSA9PT0gJ0ZPUk0nIHx8IChnZXRSYXdBdHRyaWJ1dGUoZWx0LCAndHlwZScpID09PSAnc3VibWl0JyAmJiBoYXNBdHRyaWJ1dGUoZWx0LCAnZm9ybScpKSkge1xuICAgICAgICBpbml0QnV0dG9uVHJhY2tpbmcoZWx0KVxuICAgICAgfVxuXG4gICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDphZnRlclByb2Nlc3NOb2RlJylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvY2Vzc2VzIG5ldyBjb250ZW50LCBlbmFibGluZyBodG14IGJlaGF2aW9yLiBUaGlzIGNhbiBiZSB1c2VmdWwgaWYgeW91IGhhdmUgY29udGVudCB0aGF0IGlzIGFkZGVkIHRvIHRoZSBET00gb3V0c2lkZSBvZiB0aGUgbm9ybWFsIGh0bXggcmVxdWVzdCBjeWNsZSBidXQgc3RpbGwgd2FudCBodG14IGF0dHJpYnV0ZXMgdG8gd29yay5cbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jcHJvY2Vzc1xuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8c3RyaW5nfSBlbHQgZWxlbWVudCB0byBwcm9jZXNzXG4gICAqL1xuICBmdW5jdGlvbiBwcm9jZXNzTm9kZShlbHQpIHtcbiAgICBlbHQgPSByZXNvbHZlVGFyZ2V0KGVsdClcbiAgICBpZiAoY2xvc2VzdChlbHQsIGh0bXguY29uZmlnLmRpc2FibGVTZWxlY3RvcikpIHtcbiAgICAgIGNsZWFuVXBFbGVtZW50KGVsdClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpbml0Tm9kZShlbHQpXG4gICAgZm9yRWFjaChmaW5kRWxlbWVudHNUb1Byb2Nlc3MoZWx0KSwgZnVuY3Rpb24oY2hpbGQpIHsgaW5pdE5vZGUoY2hpbGQpIH0pXG4gICAgZm9yRWFjaChmaW5kSHhPbldpbGRjYXJkRWxlbWVudHMoZWx0KSwgcHJvY2Vzc0h4T25XaWxkY2FyZClcbiAgfVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEV2ZW50L0xvZyBTdXBwb3J0XG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGtlYmFiRXZlbnROYW1lKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHthbnl9IGRldGFpbFxuICAgKiBAcmV0dXJucyB7Q3VzdG9tRXZlbnR9XG4gICAqL1xuICBmdW5jdGlvbiBtYWtlRXZlbnQoZXZlbnROYW1lLCBkZXRhaWwpIHtcbiAgICBsZXQgZXZ0XG4gICAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCAmJiB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBUT0RPOiBgY29tcG9zZWQ6IHRydWVgIGhlcmUgaXMgYSBoYWNrIHRvIG1ha2UgZ2xvYmFsIGV2ZW50IGhhbmRsZXJzIHdvcmsgd2l0aCBldmVudHMgaW4gc2hhZG93IERPTVxuICAgICAgLy8gVGhpcyBicmVha3MgZXhwZWN0ZWQgZW5jYXBzdWxhdGlvbiBidXQgbmVlZHMgdG8gYmUgaGVyZSB1bnRpbCBkZWNpZGVkIG90aGVyd2lzZSBieSBjb3JlIGRldnNcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgY29tcG9zZWQ6IHRydWUsIGRldGFpbCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBnZXREb2N1bWVudCgpLmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgZGV0YWlsKVxuICAgIH1cbiAgICByZXR1cm4gZXZ0XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudFRhcmdldHxzdHJpbmd9IGVsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7YW55PX0gZGV0YWlsXG4gICAqL1xuICBmdW5jdGlvbiB0cmlnZ2VyRXJyb3JFdmVudChlbHQsIGV2ZW50TmFtZSwgZGV0YWlsKSB7XG4gICAgdHJpZ2dlckV2ZW50KGVsdCwgZXZlbnROYW1lLCBtZXJnZU9iamVjdHMoeyBlcnJvcjogZXZlbnROYW1lIH0sIGRldGFpbCkpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGlnbm9yZUV2ZW50Rm9yTG9nZ2luZyhldmVudE5hbWUpIHtcbiAgICByZXR1cm4gZXZlbnROYW1lID09PSAnaHRteDphZnRlclByb2Nlc3NOb2RlJ1xuICB9XG5cbiAgLyoqXG4gICAqIGB3aXRoRXh0ZW5zaW9uc2AgbG9jYXRlcyBhbGwgYWN0aXZlIGV4dGVuc2lvbnMgZm9yIGEgcHJvdmlkZWQgZWxlbWVudCwgdGhlblxuICAgKiBleGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gdXNpbmcgZWFjaCBvZiB0aGUgYWN0aXZlIGV4dGVuc2lvbnMuICBJdCBzaG91bGRcbiAgICogYmUgY2FsbGVkIGludGVybmFsbHkgYXQgZXZlcnkgZXh0ZW5kYWJsZSBleGVjdXRpb24gcG9pbnQgaW4gaHRteC5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHsoZXh0ZW5zaW9uOkh0bXhFeHRlbnNpb24pID0+IHZvaWR9IHRvRG9cbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgZnVuY3Rpb24gd2l0aEV4dGVuc2lvbnMoZWx0LCB0b0RvKSB7XG4gICAgZm9yRWFjaChnZXRFeHRlbnNpb25zKGVsdCksIGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdG9EbyhleHRlbnNpb24pXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZ0Vycm9yKG1zZykge1xuICAgIGlmIChjb25zb2xlLmVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1zZylcbiAgICB9IGVsc2UgaWYgKGNvbnNvbGUubG9nKSB7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1I6ICcsIG1zZylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcnMgYSBnaXZlbiBldmVudCBvbiBhbiBlbGVtZW50XG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9odG14Lm9yZy9hcGkvI3RyaWdnZXJcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudFRhcmdldHxzdHJpbmd9IGVsdCB0aGUgZWxlbWVudCB0byB0cmlnZ2VyIHRoZSBldmVudCBvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBldmVudCB0byB0cmlnZ2VyXG4gICAqIEBwYXJhbSB7YW55PX0gZGV0YWlsIGRldGFpbHMgZm9yIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIHRyaWdnZXJFdmVudChlbHQsIGV2ZW50TmFtZSwgZGV0YWlsKSB7XG4gICAgZWx0ID0gcmVzb2x2ZVRhcmdldChlbHQpXG4gICAgaWYgKGRldGFpbCA9PSBudWxsKSB7XG4gICAgICBkZXRhaWwgPSB7fVxuICAgIH1cbiAgICBkZXRhaWwuZWx0ID0gZWx0XG4gICAgY29uc3QgZXZlbnQgPSBtYWtlRXZlbnQoZXZlbnROYW1lLCBkZXRhaWwpXG4gICAgaWYgKGh0bXgubG9nZ2VyICYmICFpZ25vcmVFdmVudEZvckxvZ2dpbmcoZXZlbnROYW1lKSkge1xuICAgICAgaHRteC5sb2dnZXIoZWx0LCBldmVudE5hbWUsIGRldGFpbClcbiAgICB9XG4gICAgaWYgKGRldGFpbC5lcnJvcikge1xuICAgICAgbG9nRXJyb3IoZGV0YWlsLmVycm9yKVxuICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6ZXJyb3InLCB7IGVycm9ySW5mbzogZGV0YWlsIH0pXG4gICAgfVxuICAgIGxldCBldmVudFJlc3VsdCA9IGVsdC5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgIGNvbnN0IGtlYmFiTmFtZSA9IGtlYmFiRXZlbnROYW1lKGV2ZW50TmFtZSlcbiAgICBpZiAoZXZlbnRSZXN1bHQgJiYga2ViYWJOYW1lICE9PSBldmVudE5hbWUpIHtcbiAgICAgIGNvbnN0IGtlYmFiZWRFdmVudCA9IG1ha2VFdmVudChrZWJhYk5hbWUsIGV2ZW50LmRldGFpbClcbiAgICAgIGV2ZW50UmVzdWx0ID0gZXZlbnRSZXN1bHQgJiYgZWx0LmRpc3BhdGNoRXZlbnQoa2ViYWJlZEV2ZW50KVxuICAgIH1cbiAgICB3aXRoRXh0ZW5zaW9ucyhhc0VsZW1lbnQoZWx0KSwgZnVuY3Rpb24oZXh0ZW5zaW9uKSB7XG4gICAgICBldmVudFJlc3VsdCA9IGV2ZW50UmVzdWx0ICYmIChleHRlbnNpb24ub25FdmVudChldmVudE5hbWUsIGV2ZW50KSAhPT0gZmFsc2UgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgfSlcbiAgICByZXR1cm4gZXZlbnRSZXN1bHRcbiAgfVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEhpc3RvcnkgU3VwcG9ydFxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBsZXQgY3VycmVudFBhdGhGb3JIaXN0b3J5ID0gbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2hcblxuICAvKipcbiAgICogQHJldHVybnMge0VsZW1lbnR9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRIaXN0b3J5RWxlbWVudCgpIHtcbiAgICBjb25zdCBoaXN0b3J5RWx0ID0gZ2V0RG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdbaHgtaGlzdG9yeS1lbHRdLFtkYXRhLWh4LWhpc3RvcnktZWx0XScpXG4gICAgcmV0dXJuIGhpc3RvcnlFbHQgfHwgZ2V0RG9jdW1lbnQoKS5ib2R5XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHJvb3RFbHRcbiAgICovXG4gIGZ1bmN0aW9uIHNhdmVUb0hpc3RvcnlDYWNoZSh1cmwsIHJvb3RFbHQpIHtcbiAgICBpZiAoIWNhbkFjY2Vzc0xvY2FsU3RvcmFnZSgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBnZXQgc3RhdGUgdG8gc2F2ZVxuICAgIGNvbnN0IGlubmVySFRNTCA9IGNsZWFuSW5uZXJIdG1sRm9ySGlzdG9yeShyb290RWx0KVxuICAgIGNvbnN0IHRpdGxlID0gZ2V0RG9jdW1lbnQoKS50aXRsZVxuICAgIGNvbnN0IHNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZXG5cbiAgICBpZiAoaHRteC5jb25maWcuaGlzdG9yeUNhY2hlU2l6ZSA8PSAwKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgdGhhdCBhbiBldmVudHVhbGx5IGFscmVhZHkgZXhpc3RpbmcgY2FjaGUgaXMgcHVyZ2VkXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaHRteC1oaXN0b3J5LWNhY2hlJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHVybCA9IG5vcm1hbGl6ZVBhdGgodXJsKVxuXG4gICAgY29uc3QgaGlzdG9yeUNhY2hlID0gcGFyc2VKU09OKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdodG14LWhpc3RvcnktY2FjaGUnKSkgfHwgW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpc3RvcnlDYWNoZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGhpc3RvcnlDYWNoZVtpXS51cmwgPT09IHVybCkge1xuICAgICAgICBoaXN0b3J5Q2FjaGUuc3BsaWNlKGksIDEpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIEh0bXhIaXN0b3J5SXRlbSAqL1xuICAgIGNvbnN0IG5ld0hpc3RvcnlJdGVtID0geyB1cmwsIGNvbnRlbnQ6IGlubmVySFRNTCwgdGl0bGUsIHNjcm9sbCB9XG5cbiAgICB0cmlnZ2VyRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpoaXN0b3J5SXRlbUNyZWF0ZWQnLCB7IGl0ZW06IG5ld0hpc3RvcnlJdGVtLCBjYWNoZTogaGlzdG9yeUNhY2hlIH0pXG5cbiAgICBoaXN0b3J5Q2FjaGUucHVzaChuZXdIaXN0b3J5SXRlbSlcbiAgICB3aGlsZSAoaGlzdG9yeUNhY2hlLmxlbmd0aCA+IGh0bXguY29uZmlnLmhpc3RvcnlDYWNoZVNpemUpIHtcbiAgICAgIGhpc3RvcnlDYWNoZS5zaGlmdCgpXG4gICAgfVxuXG4gICAgLy8ga2VlcCB0cnlpbmcgdG8gc2F2ZSB0aGUgY2FjaGUgdW50aWwgaXQgc3VjY2VlZHMgb3IgaXMgZW1wdHlcbiAgICB3aGlsZSAoaGlzdG9yeUNhY2hlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdodG14LWhpc3RvcnktY2FjaGUnLCBKU09OLnN0cmluZ2lmeShoaXN0b3J5Q2FjaGUpKVxuICAgICAgICBicmVha1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0cmlnZ2VyRXJyb3JFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14Omhpc3RvcnlDYWNoZUVycm9yJywgeyBjYXVzZTogZSwgY2FjaGU6IGhpc3RvcnlDYWNoZSB9KVxuICAgICAgICBoaXN0b3J5Q2FjaGUuc2hpZnQoKSAvLyBzaHJpbmsgdGhlIGNhY2hlIGFuZCByZXRyeVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBIdG14SGlzdG9yeUl0ZW1cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHVybFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gY29udGVudFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdGl0bGVcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNjcm9sbFxuICAgKi9cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcmV0dXJucyB7SHRteEhpc3RvcnlJdGVtfG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRDYWNoZWRIaXN0b3J5KHVybCkge1xuICAgIGlmICghY2FuQWNjZXNzTG9jYWxTdG9yYWdlKCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgdXJsID0gbm9ybWFsaXplUGF0aCh1cmwpXG5cbiAgICBjb25zdCBoaXN0b3J5Q2FjaGUgPSBwYXJzZUpTT04obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2h0bXgtaGlzdG9yeS1jYWNoZScpKSB8fCBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlzdG9yeUNhY2hlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaGlzdG9yeUNhY2hlW2ldLnVybCA9PT0gdXJsKSB7XG4gICAgICAgIHJldHVybiBoaXN0b3J5Q2FjaGVbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gY2xlYW5Jbm5lckh0bWxGb3JIaXN0b3J5KGVsdCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGh0bXguY29uZmlnLnJlcXVlc3RDbGFzc1xuICAgIGNvbnN0IGNsb25lID0gLyoqIEB0eXBlIEVsZW1lbnQgKi8gKGVsdC5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgZm9yRWFjaChmaW5kQWxsKGNsb25lLCAnLicgKyBjbGFzc05hbWUpLCBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChjaGlsZCwgY2xhc3NOYW1lKVxuICAgIH0pXG4gICAgcmV0dXJuIGNsb25lLmlubmVySFRNTFxuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZUN1cnJlbnRQYWdlVG9IaXN0b3J5KCkge1xuICAgIGNvbnN0IGVsdCA9IGdldEhpc3RvcnlFbGVtZW50KClcbiAgICBjb25zdCBwYXRoID0gY3VycmVudFBhdGhGb3JIaXN0b3J5IHx8IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoXG5cbiAgICAvLyBBbGxvdyBoaXN0b3J5IHNuYXBzaG90IGZlYXR1cmUgdG8gYmUgZGlzYWJsZWQgd2hlcmUgaHgtaGlzdG9yeT1cImZhbHNlXCJcbiAgICAvLyBpcyBwcmVzZW50ICphbnl3aGVyZSogaW4gdGhlIGN1cnJlbnQgZG9jdW1lbnQgd2UncmUgYWJvdXQgdG8gc2F2ZSxcbiAgICAvLyBzbyB3ZSBjYW4gcHJldmVudCBwcml2aWxlZ2VkIGRhdGEgZW50ZXJpbmcgdGhlIGNhY2hlLlxuICAgIC8vIFRoZSBwYWdlIHdpbGwgc3RpbGwgYmUgcmVhY2hhYmxlIGFzIGEgaGlzdG9yeSBlbnRyeSwgYnV0IGh0bXggd2lsbCBmZXRjaCBpdFxuICAgIC8vIGxpdmUgZnJvbSB0aGUgc2VydmVyIG9ucG9wc3RhdGUgcmF0aGVyIHRoYW4gbG9vayBpbiB0aGUgbG9jYWxTdG9yYWdlIGNhY2hlXG4gICAgbGV0IGRpc2FibGVIaXN0b3J5Q2FjaGVcbiAgICB0cnkge1xuICAgICAgZGlzYWJsZUhpc3RvcnlDYWNoZSA9IGdldERvY3VtZW50KCkucXVlcnlTZWxlY3RvcignW2h4LWhpc3Rvcnk9XCJmYWxzZVwiIGldLFtkYXRhLWh4LWhpc3Rvcnk9XCJmYWxzZVwiIGldJylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSUUxMTogaW5zZW5zaXRpdmUgbW9kaWZpZXIgbm90IHN1cHBvcnRlZCBzbyBmYWxsYmFjayB0byBjYXNlIHNlbnNpdGl2ZSBzZWxlY3RvclxuICAgICAgZGlzYWJsZUhpc3RvcnlDYWNoZSA9IGdldERvY3VtZW50KCkucXVlcnlTZWxlY3RvcignW2h4LWhpc3Rvcnk9XCJmYWxzZVwiXSxbZGF0YS1oeC1oaXN0b3J5PVwiZmFsc2VcIl0nKVxuICAgIH1cbiAgICBpZiAoIWRpc2FibGVIaXN0b3J5Q2FjaGUpIHtcbiAgICAgIHRyaWdnZXJFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14OmJlZm9yZUhpc3RvcnlTYXZlJywgeyBwYXRoLCBoaXN0b3J5RWx0OiBlbHQgfSlcbiAgICAgIHNhdmVUb0hpc3RvcnlDYWNoZShwYXRoLCBlbHQpXG4gICAgfVxuXG4gICAgaWYgKGh0bXguY29uZmlnLmhpc3RvcnlFbmFibGVkKSBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGh0bXg6IHRydWUgfSwgZ2V0RG9jdW1lbnQoKS50aXRsZSwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAgICovXG4gIGZ1bmN0aW9uIHB1c2hVcmxJbnRvSGlzdG9yeShwYXRoKSB7XG4gIC8vIHJlbW92ZSB0aGUgY2FjaGUgYnVzdGVyIHBhcmFtZXRlciwgaWYgYW55XG4gICAgaWYgKGh0bXguY29uZmlnLmdldENhY2hlQnVzdGVyUGFyYW0pIHtcbiAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL29yZ1xcLmh0bXhcXC5jYWNoZS1idXN0ZXI9W14mXSomPy8sICcnKVxuICAgICAgaWYgKGVuZHNXaXRoKHBhdGgsICcmJykgfHwgZW5kc1dpdGgocGF0aCwgJz8nKSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zbGljZSgwLCAtMSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGh0bXguY29uZmlnLmhpc3RvcnlFbmFibGVkKSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7IGh0bXg6IHRydWUgfSwgJycsIHBhdGgpXG4gICAgfVxuICAgIGN1cnJlbnRQYXRoRm9ySGlzdG9yeSA9IHBhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVVybEluSGlzdG9yeShwYXRoKSB7XG4gICAgaWYgKGh0bXguY29uZmlnLmhpc3RvcnlFbmFibGVkKSBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGh0bXg6IHRydWUgfSwgJycsIHBhdGgpXG4gICAgY3VycmVudFBhdGhGb3JIaXN0b3J5ID0gcGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SHRteFNldHRsZVRhc2tbXX0gdGFza3NcbiAgICovXG4gIGZ1bmN0aW9uIHNldHRsZUltbWVkaWF0ZWx5KHRhc2tzKSB7XG4gICAgZm9yRWFjaCh0YXNrcywgZnVuY3Rpb24odGFzaykge1xuICAgICAgdGFzay5jYWxsKHVuZGVmaW5lZClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqL1xuICBmdW5jdGlvbiBsb2FkSGlzdG9yeUZyb21TZXJ2ZXIocGF0aCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgIGNvbnN0IGRldGFpbHMgPSB7IHBhdGgsIHhocjogcmVxdWVzdCB9XG4gICAgdHJpZ2dlckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6aGlzdG9yeUNhY2hlTWlzcycsIGRldGFpbHMpXG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBwYXRoLCB0cnVlKVxuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignSFgtUmVxdWVzdCcsICd0cnVlJylcbiAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0hYLUhpc3RvcnktUmVzdG9yZS1SZXF1ZXN0JywgJ3RydWUnKVxuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignSFgtQ3VycmVudC1VUkwnLCBnZXREb2N1bWVudCgpLmxvY2F0aW9uLmhyZWYpXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgdHJpZ2dlckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6aGlzdG9yeUNhY2hlTWlzc0xvYWQnLCBkZXRhaWxzKVxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IG1ha2VGcmFnbWVudCh0aGlzLnJlc3BvbnNlKVxuICAgICAgICAvKiogQHR5cGUgUGFyZW50Tm9kZSAqL1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvcignW2h4LWhpc3RvcnktZWx0XSxbZGF0YS1oeC1oaXN0b3J5LWVsdF0nKSB8fCBmcmFnbWVudFxuICAgICAgICBjb25zdCBoaXN0b3J5RWxlbWVudCA9IGdldEhpc3RvcnlFbGVtZW50KClcbiAgICAgICAgY29uc3Qgc2V0dGxlSW5mbyA9IG1ha2VTZXR0bGVJbmZvKGhpc3RvcnlFbGVtZW50KVxuICAgICAgICBoYW5kbGVUaXRsZShmcmFnbWVudC50aXRsZSlcblxuICAgICAgICBzd2FwSW5uZXJIVE1MKGhpc3RvcnlFbGVtZW50LCBjb250ZW50LCBzZXR0bGVJbmZvKVxuICAgICAgICBzZXR0bGVJbW1lZGlhdGVseShzZXR0bGVJbmZvLnRhc2tzKVxuICAgICAgICBjdXJyZW50UGF0aEZvckhpc3RvcnkgPSBwYXRoXG4gICAgICAgIHRyaWdnZXJFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14Omhpc3RvcnlSZXN0b3JlJywgeyBwYXRoLCBjYWNoZU1pc3M6IHRydWUsIHNlcnZlclJlc3BvbnNlOiB0aGlzLnJlc3BvbnNlIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmlnZ2VyRXJyb3JFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14Omhpc3RvcnlDYWNoZU1pc3NMb2FkRXJyb3InLCBkZXRhaWxzKVxuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0LnNlbmQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcGF0aF1cbiAgICovXG4gIGZ1bmN0aW9uIHJlc3RvcmVIaXN0b3J5KHBhdGgpIHtcbiAgICBzYXZlQ3VycmVudFBhZ2VUb0hpc3RvcnkoKVxuICAgIHBhdGggPSBwYXRoIHx8IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoXG4gICAgY29uc3QgY2FjaGVkID0gZ2V0Q2FjaGVkSGlzdG9yeShwYXRoKVxuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gbWFrZUZyYWdtZW50KGNhY2hlZC5jb250ZW50KVxuICAgICAgY29uc3QgaGlzdG9yeUVsZW1lbnQgPSBnZXRIaXN0b3J5RWxlbWVudCgpXG4gICAgICBjb25zdCBzZXR0bGVJbmZvID0gbWFrZVNldHRsZUluZm8oaGlzdG9yeUVsZW1lbnQpXG4gICAgICBoYW5kbGVUaXRsZShmcmFnbWVudC50aXRsZSlcbiAgICAgIHN3YXBJbm5lckhUTUwoaGlzdG9yeUVsZW1lbnQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKVxuICAgICAgc2V0dGxlSW1tZWRpYXRlbHkoc2V0dGxlSW5mby50YXNrcylcbiAgICAgIGdldFdpbmRvdygpLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBjYWNoZWQuc2Nyb2xsKVxuICAgICAgfSwgMCkgLy8gbmV4dCAndGljaycsIHNvIGJyb3dzZXIgaGFzIHRpbWUgdG8gcmVuZGVyIGxheW91dFxuICAgICAgY3VycmVudFBhdGhGb3JIaXN0b3J5ID0gcGF0aFxuICAgICAgdHJpZ2dlckV2ZW50KGdldERvY3VtZW50KCkuYm9keSwgJ2h0bXg6aGlzdG9yeVJlc3RvcmUnLCB7IHBhdGgsIGl0ZW06IGNhY2hlZCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaHRteC5jb25maWcucmVmcmVzaE9uSGlzdG9yeU1pc3MpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogb3B0aW9uYWwgcGFyYW1ldGVyIGluIHJlbG9hZCgpIGZ1bmN0aW9uIHRocm93cyBlcnJvclxuICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNVbnJlc29sdmVkUmVmZXJlbmNlXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRIaXN0b3J5RnJvbVNlcnZlcihwYXRoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkUmVxdWVzdEluZGljYXRvckNsYXNzZXMoZWx0KSB7XG4gICAgbGV0IGluZGljYXRvcnMgPSAvKiogQHR5cGUgRWxlbWVudFtdICovIChmaW5kQXR0cmlidXRlVGFyZ2V0cyhlbHQsICdoeC1pbmRpY2F0b3InKSlcbiAgICBpZiAoaW5kaWNhdG9ycyA9PSBudWxsKSB7XG4gICAgICBpbmRpY2F0b3JzID0gW2VsdF1cbiAgICB9XG4gICAgZm9yRWFjaChpbmRpY2F0b3JzLCBmdW5jdGlvbihpYykge1xuICAgICAgY29uc3QgaW50ZXJuYWxEYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGljKVxuICAgICAgaW50ZXJuYWxEYXRhLnJlcXVlc3RDb3VudCA9IChpbnRlcm5hbERhdGEucmVxdWVzdENvdW50IHx8IDApICsgMVxuICAgICAgaWMuY2xhc3NMaXN0LmFkZC5jYWxsKGljLmNsYXNzTGlzdCwgaHRteC5jb25maWcucmVxdWVzdENsYXNzKVxuICAgIH0pXG4gICAgcmV0dXJuIGluZGljYXRvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7RWxlbWVudFtdfVxuICAgKi9cbiAgZnVuY3Rpb24gZGlzYWJsZUVsZW1lbnRzKGVsdCkge1xuICAgIGxldCBkaXNhYmxlZEVsdHMgPSAvKiogQHR5cGUgRWxlbWVudFtdICovIChmaW5kQXR0cmlidXRlVGFyZ2V0cyhlbHQsICdoeC1kaXNhYmxlZC1lbHQnKSlcbiAgICBpZiAoZGlzYWJsZWRFbHRzID09IG51bGwpIHtcbiAgICAgIGRpc2FibGVkRWx0cyA9IFtdXG4gICAgfVxuICAgIGZvckVhY2goZGlzYWJsZWRFbHRzLCBmdW5jdGlvbihkaXNhYmxlZEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGludGVybmFsRGF0YSA9IGdldEludGVybmFsRGF0YShkaXNhYmxlZEVsZW1lbnQpXG4gICAgICBpbnRlcm5hbERhdGEucmVxdWVzdENvdW50ID0gKGludGVybmFsRGF0YS5yZXF1ZXN0Q291bnQgfHwgMCkgKyAxXG4gICAgICBkaXNhYmxlZEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVxuICAgIH0pXG4gICAgcmV0dXJuIGRpc2FibGVkRWx0c1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudFtdfSBpbmRpY2F0b3JzXG4gICAqIEBwYXJhbSB7RWxlbWVudFtdfSBkaXNhYmxlZFxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlUmVxdWVzdEluZGljYXRvcnMoaW5kaWNhdG9ycywgZGlzYWJsZWQpIHtcbiAgICBmb3JFYWNoKGluZGljYXRvcnMsIGZ1bmN0aW9uKGljKSB7XG4gICAgICBjb25zdCBpbnRlcm5hbERhdGEgPSBnZXRJbnRlcm5hbERhdGEoaWMpXG4gICAgICBpbnRlcm5hbERhdGEucmVxdWVzdENvdW50ID0gKGludGVybmFsRGF0YS5yZXF1ZXN0Q291bnQgfHwgMCkgLSAxXG4gICAgICBpZiAoaW50ZXJuYWxEYXRhLnJlcXVlc3RDb3VudCA9PT0gMCkge1xuICAgICAgICBpYy5jbGFzc0xpc3QucmVtb3ZlLmNhbGwoaWMuY2xhc3NMaXN0LCBodG14LmNvbmZpZy5yZXF1ZXN0Q2xhc3MpXG4gICAgICB9XG4gICAgfSlcbiAgICBmb3JFYWNoKGRpc2FibGVkLCBmdW5jdGlvbihkaXNhYmxlZEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGludGVybmFsRGF0YSA9IGdldEludGVybmFsRGF0YShkaXNhYmxlZEVsZW1lbnQpXG4gICAgICBpbnRlcm5hbERhdGEucmVxdWVzdENvdW50ID0gKGludGVybmFsRGF0YS5yZXF1ZXN0Q291bnQgfHwgMCkgLSAxXG4gICAgICBpZiAoaW50ZXJuYWxEYXRhLnJlcXVlc3RDb3VudCA9PT0gMCkge1xuICAgICAgICBkaXNhYmxlZEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIElucHV0IFZhbHVlIFByb2Nlc3NpbmdcbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50W119IHByb2Nlc3NlZFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGhhdmVTZWVuTm9kZShwcm9jZXNzZWQsIGVsdCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvY2Vzc2VkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBub2RlID0gcHJvY2Vzc2VkW2ldXG4gICAgICBpZiAobm9kZS5pc1NhbWVOb2RlKGVsdCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBzaG91bGRJbmNsdWRlKGVsZW1lbnQpIHtcbiAgICAvLyBDYXN0IHRvIHRyaWNrIHRzYywgdW5kZWZpbmVkIHZhbHVlcyB3aWxsIHdvcmsgZmluZSBoZXJlXG4gICAgY29uc3QgZWx0ID0gLyoqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqLyAoZWxlbWVudClcbiAgICBpZiAoZWx0Lm5hbWUgPT09ICcnIHx8IGVsdC5uYW1lID09IG51bGwgfHwgZWx0LmRpc2FibGVkIHx8IGNsb3Nlc3QoZWx0LCAnZmllbGRzZXRbZGlzYWJsZWRdJykpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICAvLyBpZ25vcmUgXCJzdWJtaXR0ZXJcIiB0eXBlcyAoc2VlIGpRdWVyeSBzcmMvc2VyaWFsaXplLmpzKVxuICAgIGlmIChlbHQudHlwZSA9PT0gJ2J1dHRvbicgfHwgZWx0LnR5cGUgPT09ICdzdWJtaXQnIHx8IGVsdC50YWdOYW1lID09PSAnaW1hZ2UnIHx8IGVsdC50YWdOYW1lID09PSAncmVzZXQnIHx8IGVsdC50YWdOYW1lID09PSAnZmlsZScpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAoZWx0LnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWx0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHJldHVybiBlbHQuY2hlY2tlZFxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fEZvcm1EYXRhRW50cnlWYWx1ZX0gdmFsdWVcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGEgKi9cbiAgZnVuY3Rpb24gYWRkVmFsdWVUb0Zvcm1EYXRhKG5hbWUsIHZhbHVlLCBmb3JtRGF0YSkge1xuICAgIGlmIChuYW1lICE9IG51bGwgJiYgdmFsdWUgIT0gbnVsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24odikgeyBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdikgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IHZhbHVlXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhICovXG4gIGZ1bmN0aW9uIHJlbW92ZVZhbHVlRnJvbUZvcm1EYXRhKG5hbWUsIHZhbHVlLCBmb3JtRGF0YSkge1xuICAgIGlmIChuYW1lICE9IG51bGwgJiYgdmFsdWUgIT0gbnVsbCkge1xuICAgICAgbGV0IHZhbHVlcyA9IGZvcm1EYXRhLmdldEFsbChuYW1lKVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcy5maWx0ZXIodiA9PiB2YWx1ZS5pbmRleE9mKHYpIDwgMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcy5maWx0ZXIodiA9PiB2ICE9PSB2YWx1ZSlcbiAgICAgIH1cbiAgICAgIGZvcm1EYXRhLmRlbGV0ZShuYW1lKVxuICAgICAgZm9yRWFjaCh2YWx1ZXMsIHYgPT4gZm9ybURhdGEuYXBwZW5kKG5hbWUsIHYpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnRbXX0gcHJvY2Vzc2VkXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXG4gICAqIEBwYXJhbSB7SHRteEVsZW1lbnRWYWxpZGF0aW9uRXJyb3JbXX0gZXJyb3JzXG4gICAqIEBwYXJhbSB7RWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fEhUTUxTZWxlY3RFbGVtZW50fEhUTUxGb3JtRWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsaWRhdGVcbiAgICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NJbnB1dFZhbHVlKHByb2Nlc3NlZCwgZm9ybURhdGEsIGVycm9ycywgZWx0LCB2YWxpZGF0ZSkge1xuICAgIGlmIChlbHQgPT0gbnVsbCB8fCBoYXZlU2Vlbk5vZGUocHJvY2Vzc2VkLCBlbHQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzc2VkLnB1c2goZWx0KVxuICAgIH1cbiAgICBpZiAoc2hvdWxkSW5jbHVkZShlbHQpKSB7XG4gICAgICBjb25zdCBuYW1lID0gZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ25hbWUnKVxuICAgICAgLy8gQHRzLWlnbm9yZSB2YWx1ZSB3aWxsIGJlIHVuZGVmaW5lZCBmb3Igbm9uLWlucHV0IGVsZW1lbnRzLCB3aGljaCBpcyBmaW5lXG4gICAgICBsZXQgdmFsdWUgPSBlbHQudmFsdWVcbiAgICAgIGlmIChlbHQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiBlbHQubXVsdGlwbGUpIHtcbiAgICAgICAgdmFsdWUgPSB0b0FycmF5KGVsdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb246Y2hlY2tlZCcpKS5tYXAoZnVuY3Rpb24oZSkgeyByZXR1cm4gKC8qKiBAdHlwZSBIVE1MT3B0aW9uRWxlbWVudCAqLyhlKSkudmFsdWUgfSlcbiAgICAgIH1cbiAgICAgIC8vIGluY2x1ZGUgZmlsZSBpbnB1dHNcbiAgICAgIGlmIChlbHQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsdC5maWxlcykge1xuICAgICAgICB2YWx1ZSA9IHRvQXJyYXkoZWx0LmZpbGVzKVxuICAgICAgfVxuICAgICAgYWRkVmFsdWVUb0Zvcm1EYXRhKG5hbWUsIHZhbHVlLCBmb3JtRGF0YSlcbiAgICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgICB2YWxpZGF0ZUVsZW1lbnQoZWx0LCBlcnJvcnMpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbHQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgIGZvckVhY2goZWx0LmVsZW1lbnRzLCBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICBpZiAocHJvY2Vzc2VkLmluZGV4T2YoaW5wdXQpID49IDApIHtcbiAgICAgICAgICAvLyBUaGUgaW5wdXQgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQgYW5kIGFkZGVkIHRvIHRoZSB2YWx1ZXMsIGJ1dCB0aGUgRm9ybURhdGEgdGhhdCB3aWxsIGJlXG4gICAgICAgICAgLy8gIGNvbnN0cnVjdGVkIHJpZ2h0IGFmdGVyIG9uIHRoZSBmb3JtLCB3aWxsIGluY2x1ZGUgaXQgb25jZSBhZ2Fpbi4gU28gcmVtb3ZlIHRoYXQgaW5wdXQncyB2YWx1ZVxuICAgICAgICAgIC8vICBub3cgdG8gYXZvaWQgZHVwbGljYXRlc1xuICAgICAgICAgIHJlbW92ZVZhbHVlRnJvbUZvcm1EYXRhKGlucHV0Lm5hbWUsIGlucHV0LnZhbHVlLCBmb3JtRGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzZWQucHVzaChpbnB1dClcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgICAgICB2YWxpZGF0ZUVsZW1lbnQoaW5wdXQsIGVycm9ycylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIG5ldyBGb3JtRGF0YShlbHQpLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRmlsZSAmJiB2YWx1ZS5uYW1lID09PSAnJykge1xuICAgICAgICAgIHJldHVybiAvLyBpZ25vcmUgbm8tbmFtZSBmaWxlc1xuICAgICAgICB9XG4gICAgICAgIGFkZFZhbHVlVG9Gb3JtRGF0YShuYW1lLCB2YWx1ZSwgZm9ybURhdGEpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge0h0bXhFbGVtZW50VmFsaWRhdGlvbkVycm9yW119IGVycm9yc1xuICAgKi9cbiAgZnVuY3Rpb24gdmFsaWRhdGVFbGVtZW50KGVsdCwgZXJyb3JzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgJiBFbGVtZW50SW50ZXJuYWxzfSAqLyAoZWx0KVxuICAgIGlmIChlbGVtZW50LndpbGxWYWxpZGF0ZSkge1xuICAgICAgdHJpZ2dlckV2ZW50KGVsZW1lbnQsICdodG14OnZhbGlkYXRpb246dmFsaWRhdGUnKVxuICAgICAgaWYgKCFlbGVtZW50LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBlcnJvcnMucHVzaCh7IGVsdDogZWxlbWVudCwgbWVzc2FnZTogZWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSwgdmFsaWRpdHk6IGVsZW1lbnQudmFsaWRpdHkgfSlcbiAgICAgICAgdHJpZ2dlckV2ZW50KGVsZW1lbnQsICdodG14OnZhbGlkYXRpb246ZmFpbGVkJywgeyBtZXNzYWdlOiBlbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlLCB2YWxpZGl0eTogZWxlbWVudC52YWxpZGl0eSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB2YWx1ZXMgaW4gdGhlIG9uZSBGb3JtRGF0YSB3aXRoIHRob3NlIGZyb20gYW5vdGhlci5cbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gcmVjZWl2ZXIgdGhlIGZvcm1kYXRhIHRoYXQgd2lsbCBiZSBtdXRhdGVkXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IGRvbm9yIHRoZSBmb3JtZGF0YSB0aGF0IHdpbGwgcHJvdmlkZSB0aGUgb3ZlcnJpZGluZyB2YWx1ZXNcbiAgICogQHJldHVybnMge0Zvcm1EYXRhfSB0aGUge0BsaW5rY29kZSByZWNlaXZlcn1cbiAgICovXG4gIGZ1bmN0aW9uIG92ZXJyaWRlRm9ybURhdGEocmVjZWl2ZXIsIGRvbm9yKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgZG9ub3Iua2V5cygpKSB7XG4gICAgICByZWNlaXZlci5kZWxldGUoa2V5KVxuICAgICAgZG9ub3IuZ2V0QWxsKGtleSkuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZWNlaXZlci5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiByZWNlaXZlclxuICB9XG5cbiAgLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR8SFRNTEZvcm1FbGVtZW50fSBlbHRcbiAqIEBwYXJhbSB7SHR0cFZlcmJ9IHZlcmJcbiAqIEByZXR1cm5zIHt7ZXJyb3JzOiBIdG14RWxlbWVudFZhbGlkYXRpb25FcnJvcltdLCBmb3JtRGF0YTogRm9ybURhdGEsIHZhbHVlczogT2JqZWN0fX1cbiAqL1xuICBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlcyhlbHQsIHZlcmIpIHtcbiAgICAvKiogQHR5cGUgRWxlbWVudFtdICovXG4gICAgY29uc3QgcHJvY2Vzc2VkID0gW11cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgY29uc3QgcHJpb3JpdHlGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgLyoqIEB0eXBlIEh0bXhFbGVtZW50VmFsaWRhdGlvbkVycm9yW10gKi9cbiAgICBjb25zdCBlcnJvcnMgPSBbXVxuICAgIGNvbnN0IGludGVybmFsRGF0YSA9IGdldEludGVybmFsRGF0YShlbHQpXG4gICAgaWYgKGludGVybmFsRGF0YS5sYXN0QnV0dG9uQ2xpY2tlZCAmJiAhYm9keUNvbnRhaW5zKGludGVybmFsRGF0YS5sYXN0QnV0dG9uQ2xpY2tlZCkpIHtcbiAgICAgIGludGVybmFsRGF0YS5sYXN0QnV0dG9uQ2xpY2tlZCA9IG51bGxcbiAgICB9XG5cbiAgICAvLyBvbmx5IHZhbGlkYXRlIHdoZW4gZm9ybSBpcyBkaXJlY3RseSBzdWJtaXR0ZWQgYW5kIG5vdmFsaWRhdGUgb3IgZm9ybW5vdmFsaWRhdGUgYXJlIG5vdCBzZXRcbiAgICAvLyBvciBpZiB0aGUgZWxlbWVudCBoYXMgYW4gZXhwbGljaXQgaHgtdmFsaWRhdGU9XCJ0cnVlXCIgb24gaXRcbiAgICBsZXQgdmFsaWRhdGUgPSAoZWx0IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50ICYmIGVsdC5ub1ZhbGlkYXRlICE9PSB0cnVlKSB8fCBnZXRBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC12YWxpZGF0ZScpID09PSAndHJ1ZSdcbiAgICBpZiAoaW50ZXJuYWxEYXRhLmxhc3RCdXR0b25DbGlja2VkKSB7XG4gICAgICB2YWxpZGF0ZSA9IHZhbGlkYXRlICYmIGludGVybmFsRGF0YS5sYXN0QnV0dG9uQ2xpY2tlZC5mb3JtTm9WYWxpZGF0ZSAhPT0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIGZvciBhIG5vbi1HRVQgaW5jbHVkZSB0aGUgY2xvc2VzdCBmb3JtXG4gICAgaWYgKHZlcmIgIT09ICdnZXQnKSB7XG4gICAgICBwcm9jZXNzSW5wdXRWYWx1ZShwcm9jZXNzZWQsIHByaW9yaXR5Rm9ybURhdGEsIGVycm9ycywgY2xvc2VzdChlbHQsICdmb3JtJyksIHZhbGlkYXRlKVxuICAgIH1cblxuICAgIC8vIGluY2x1ZGUgdGhlIGVsZW1lbnQgaXRzZWxmXG4gICAgcHJvY2Vzc0lucHV0VmFsdWUocHJvY2Vzc2VkLCBmb3JtRGF0YSwgZXJyb3JzLCBlbHQsIHZhbGlkYXRlKVxuXG4gICAgLy8gaWYgYSBidXR0b24gb3Igc3VibWl0IHdhcyBjbGlja2VkIGxhc3QsIGluY2x1ZGUgaXRzIHZhbHVlXG4gICAgaWYgKGludGVybmFsRGF0YS5sYXN0QnV0dG9uQ2xpY2tlZCB8fCBlbHQudGFnTmFtZSA9PT0gJ0JVVFRPTicgfHxcbiAgICAoZWx0LnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ3R5cGUnKSA9PT0gJ3N1Ym1pdCcpKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBpbnRlcm5hbERhdGEubGFzdEJ1dHRvbkNsaWNrZWQgfHwgKC8qKiBAdHlwZSBIVE1MSW5wdXRFbGVtZW50fEhUTUxCdXR0b25FbGVtZW50ICovKGVsdCkpXG4gICAgICBjb25zdCBuYW1lID0gZ2V0UmF3QXR0cmlidXRlKGJ1dHRvbiwgJ25hbWUnKVxuICAgICAgYWRkVmFsdWVUb0Zvcm1EYXRhKG5hbWUsIGJ1dHRvbi52YWx1ZSwgcHJpb3JpdHlGb3JtRGF0YSlcbiAgICB9XG5cbiAgICAvLyBpbmNsdWRlIGFueSBleHBsaWNpdCBpbmNsdWRlc1xuICAgIGNvbnN0IGluY2x1ZGVzID0gZmluZEF0dHJpYnV0ZVRhcmdldHMoZWx0LCAnaHgtaW5jbHVkZScpXG4gICAgZm9yRWFjaChpbmNsdWRlcywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgcHJvY2Vzc0lucHV0VmFsdWUocHJvY2Vzc2VkLCBmb3JtRGF0YSwgZXJyb3JzLCBhc0VsZW1lbnQobm9kZSksIHZhbGlkYXRlKVxuICAgICAgLy8gaWYgYSBub24tZm9ybSBpcyBpbmNsdWRlZCwgaW5jbHVkZSBhbnkgaW5wdXQgdmFsdWVzIHdpdGhpbiBpdFxuICAgICAgaWYgKCFtYXRjaGVzKG5vZGUsICdmb3JtJykpIHtcbiAgICAgICAgZm9yRWFjaChhc1BhcmVudE5vZGUobm9kZSkucXVlcnlTZWxlY3RvckFsbChJTlBVVF9TRUxFQ1RPUiksIGZ1bmN0aW9uKGRlc2NlbmRhbnQpIHtcbiAgICAgICAgICBwcm9jZXNzSW5wdXRWYWx1ZShwcm9jZXNzZWQsIGZvcm1EYXRhLCBlcnJvcnMsIGRlc2NlbmRhbnQsIHZhbGlkYXRlKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyB2YWx1ZXMgZnJvbSBhIDxmb3JtPiB0YWtlIHByZWNlZGVuY2UsIG92ZXJyaWRpbmcgdGhlIHJlZ3VsYXIgdmFsdWVzXG4gICAgb3ZlcnJpZGVGb3JtRGF0YShmb3JtRGF0YSwgcHJpb3JpdHlGb3JtRGF0YSlcblxuICAgIHJldHVybiB7IGVycm9ycywgZm9ybURhdGEsIHZhbHVlczogZm9ybURhdGFQcm94eShmb3JtRGF0YSkgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXR1cm5TdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHthbnl9IHJlYWxWYWx1ZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gYXBwZW5kUGFyYW0ocmV0dXJuU3RyLCBuYW1lLCByZWFsVmFsdWUpIHtcbiAgICBpZiAocmV0dXJuU3RyICE9PSAnJykge1xuICAgICAgcmV0dXJuU3RyICs9ICcmJ1xuICAgIH1cbiAgICBpZiAoU3RyaW5nKHJlYWxWYWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICByZWFsVmFsdWUgPSBKU09OLnN0cmluZ2lmeShyZWFsVmFsdWUpXG4gICAgfVxuICAgIGNvbnN0IHMgPSBlbmNvZGVVUklDb21wb25lbnQocmVhbFZhbHVlKVxuICAgIHJldHVyblN0ciArPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSkgKyAnPScgKyBzXG4gICAgcmV0dXJuIHJldHVyblN0clxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF8T2JqZWN0fSB2YWx1ZXNcbiAgICogQHJldHVybnMgc3RyaW5nXG4gICAqL1xuICBmdW5jdGlvbiB1cmxFbmNvZGUodmFsdWVzKSB7XG4gICAgdmFsdWVzID0gZm9ybURhdGFGcm9tT2JqZWN0KHZhbHVlcylcbiAgICBsZXQgcmV0dXJuU3RyID0gJydcbiAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICByZXR1cm5TdHIgPSBhcHBlbmRQYXJhbShyZXR1cm5TdHIsIGtleSwgdmFsdWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmV0dXJuU3RyXG4gIH1cblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBBamF4XG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9tcHRcbiAqIEByZXR1cm5zIHtIdG14SGVhZGVyU3BlY2lmaWNhdGlvbn1cbiAqL1xuICBmdW5jdGlvbiBnZXRIZWFkZXJzKGVsdCwgdGFyZ2V0LCBwcm9tcHQpIHtcbiAgICAvKiogQHR5cGUgSHRteEhlYWRlclNwZWNpZmljYXRpb24gKi9cbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgJ0hYLVJlcXVlc3QnOiAndHJ1ZScsXG4gICAgICAnSFgtVHJpZ2dlcic6IGdldFJhd0F0dHJpYnV0ZShlbHQsICdpZCcpLFxuICAgICAgJ0hYLVRyaWdnZXItTmFtZSc6IGdldFJhd0F0dHJpYnV0ZShlbHQsICduYW1lJyksXG4gICAgICAnSFgtVGFyZ2V0JzogZ2V0QXR0cmlidXRlVmFsdWUodGFyZ2V0LCAnaWQnKSxcbiAgICAgICdIWC1DdXJyZW50LVVSTCc6IGdldERvY3VtZW50KCkubG9jYXRpb24uaHJlZlxuICAgIH1cbiAgICBnZXRWYWx1ZXNGb3JFbGVtZW50KGVsdCwgJ2h4LWhlYWRlcnMnLCBmYWxzZSwgaGVhZGVycylcbiAgICBpZiAocHJvbXB0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhlYWRlcnNbJ0hYLVByb21wdCddID0gcHJvbXB0XG4gICAgfVxuICAgIGlmIChnZXRJbnRlcm5hbERhdGEoZWx0KS5ib29zdGVkKSB7XG4gICAgICBoZWFkZXJzWydIWC1Cb29zdGVkJ10gPSAndHJ1ZSdcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxuXG4gIC8qKlxuICogZmlsdGVyVmFsdWVzIHRha2VzIGFuIG9iamVjdCBjb250YWluaW5nIGZvcm0gaW5wdXQgdmFsdWVzXG4gKiBhbmQgcmV0dXJucyBhIG5ldyBvYmplY3QgdGhhdCBvbmx5IGNvbnRhaW5zIGtleXMgdGhhdCBhcmVcbiAqIHNwZWNpZmllZCBieSB0aGUgY2xvc2VzdCBcImh4LXBhcmFtc1wiIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtGb3JtRGF0YX0gaW5wdXRWYWx1ZXNcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gKi9cbiAgZnVuY3Rpb24gZmlsdGVyVmFsdWVzKGlucHV0VmFsdWVzLCBlbHQpIHtcbiAgICBjb25zdCBwYXJhbXNWYWx1ZSA9IGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1wYXJhbXMnKVxuICAgIGlmIChwYXJhbXNWYWx1ZSkge1xuICAgICAgaWYgKHBhcmFtc1ZhbHVlID09PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtRGF0YSgpXG4gICAgICB9IGVsc2UgaWYgKHBhcmFtc1ZhbHVlID09PSAnKicpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWVzXG4gICAgICB9IGVsc2UgaWYgKHBhcmFtc1ZhbHVlLmluZGV4T2YoJ25vdCAnKSA9PT0gMCkge1xuICAgICAgICBmb3JFYWNoKHBhcmFtc1ZhbHVlLnN1YnN0cig0KS5zcGxpdCgnLCcpLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgbmFtZSA9IG5hbWUudHJpbSgpXG4gICAgICAgICAgaW5wdXRWYWx1ZXMuZGVsZXRlKG5hbWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpbnB1dFZhbHVlc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWVzID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZm9yRWFjaChwYXJhbXNWYWx1ZS5zcGxpdCgnLCcpLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgbmFtZSA9IG5hbWUudHJpbSgpXG4gICAgICAgICAgaWYgKGlucHV0VmFsdWVzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgaW5wdXRWYWx1ZXMuZ2V0QWxsKG5hbWUpLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgbmV3VmFsdWVzLmFwcGVuZChuYW1lLCB2YWx1ZSkgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZXNcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlucHV0VmFsdWVzXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpc0FuY2hvckxpbmsoZWx0KSB7XG4gICAgcmV0dXJuICEhZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2hyZWYnKSAmJiBnZXRSYXdBdHRyaWJ1dGUoZWx0LCAnaHJlZicpLmluZGV4T2YoJyMnKSA+PSAwXG4gIH1cblxuICAvKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gKiBAcGFyYW0ge0h0bXhTd2FwU3R5bGV9IFtzd2FwSW5mb092ZXJyaWRlXVxuICogQHJldHVybnMge0h0bXhTd2FwU3BlY2lmaWNhdGlvbn1cbiAqL1xuICBmdW5jdGlvbiBnZXRTd2FwU3BlY2lmaWNhdGlvbihlbHQsIHN3YXBJbmZvT3ZlcnJpZGUpIHtcbiAgICBjb25zdCBzd2FwSW5mbyA9IHN3YXBJbmZvT3ZlcnJpZGUgfHwgZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXN3YXAnKVxuICAgIC8qKiBAdHlwZSBIdG14U3dhcFNwZWNpZmljYXRpb24gKi9cbiAgICBjb25zdCBzd2FwU3BlYyA9IHtcbiAgICAgIHN3YXBTdHlsZTogZ2V0SW50ZXJuYWxEYXRhKGVsdCkuYm9vc3RlZCA/ICdpbm5lckhUTUwnIDogaHRteC5jb25maWcuZGVmYXVsdFN3YXBTdHlsZSxcbiAgICAgIHN3YXBEZWxheTogaHRteC5jb25maWcuZGVmYXVsdFN3YXBEZWxheSxcbiAgICAgIHNldHRsZURlbGF5OiBodG14LmNvbmZpZy5kZWZhdWx0U2V0dGxlRGVsYXlcbiAgICB9XG4gICAgaWYgKGh0bXguY29uZmlnLnNjcm9sbEludG9WaWV3T25Cb29zdCAmJiBnZXRJbnRlcm5hbERhdGEoZWx0KS5ib29zdGVkICYmICFpc0FuY2hvckxpbmsoZWx0KSkge1xuICAgICAgc3dhcFNwZWMuc2hvdyA9ICd0b3AnXG4gICAgfVxuICAgIGlmIChzd2FwSW5mbykge1xuICAgICAgY29uc3Qgc3BsaXQgPSBzcGxpdE9uV2hpdGVzcGFjZShzd2FwSW5mbylcbiAgICAgIGlmIChzcGxpdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNwbGl0W2ldXG4gICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoJ3N3YXA6JykgPT09IDApIHtcbiAgICAgICAgICAgIHN3YXBTcGVjLnN3YXBEZWxheSA9IHBhcnNlSW50ZXJ2YWwodmFsdWUuc3Vic3RyKDUpKVxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignc2V0dGxlOicpID09PSAwKSB7XG4gICAgICAgICAgICBzd2FwU3BlYy5zZXR0bGVEZWxheSA9IHBhcnNlSW50ZXJ2YWwodmFsdWUuc3Vic3RyKDcpKVxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZigndHJhbnNpdGlvbjonKSA9PT0gMCkge1xuICAgICAgICAgICAgc3dhcFNwZWMudHJhbnNpdGlvbiA9IHZhbHVlLnN1YnN0cigxMSkgPT09ICd0cnVlJ1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignaWdub3JlVGl0bGU6JykgPT09IDApIHtcbiAgICAgICAgICAgIHN3YXBTcGVjLmlnbm9yZVRpdGxlID0gdmFsdWUuc3Vic3RyKDEyKSA9PT0gJ3RydWUnXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCdzY3JvbGw6JykgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFNwZWMgPSB2YWx1ZS5zdWJzdHIoNylcbiAgICAgICAgICAgIHZhciBzcGxpdFNwZWMgPSBzY3JvbGxTcGVjLnNwbGl0KCc6JylcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFZhbCA9IHNwbGl0U3BlYy5wb3AoKVxuICAgICAgICAgICAgdmFyIHNlbGVjdG9yVmFsID0gc3BsaXRTcGVjLmxlbmd0aCA+IDAgPyBzcGxpdFNwZWMuam9pbignOicpIDogbnVsbFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgc3dhcFNwZWMuc2Nyb2xsID0gc2Nyb2xsVmFsXG4gICAgICAgICAgICBzd2FwU3BlYy5zY3JvbGxUYXJnZXQgPSBzZWxlY3RvclZhbFxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignc2hvdzonKSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2hvd1NwZWMgPSB2YWx1ZS5zdWJzdHIoNSlcbiAgICAgICAgICAgIHZhciBzcGxpdFNwZWMgPSBzaG93U3BlYy5zcGxpdCgnOicpXG4gICAgICAgICAgICBjb25zdCBzaG93VmFsID0gc3BsaXRTcGVjLnBvcCgpXG4gICAgICAgICAgICB2YXIgc2VsZWN0b3JWYWwgPSBzcGxpdFNwZWMubGVuZ3RoID4gMCA/IHNwbGl0U3BlYy5qb2luKCc6JykgOiBudWxsXG4gICAgICAgICAgICBzd2FwU3BlYy5zaG93ID0gc2hvd1ZhbFxuICAgICAgICAgICAgc3dhcFNwZWMuc2hvd1RhcmdldCA9IHNlbGVjdG9yVmFsXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCdmb2N1cy1zY3JvbGw6JykgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzU2Nyb2xsVmFsID0gdmFsdWUuc3Vic3RyKCdmb2N1cy1zY3JvbGw6Jy5sZW5ndGgpXG4gICAgICAgICAgICBzd2FwU3BlYy5mb2N1c1Njcm9sbCA9IGZvY3VzU2Nyb2xsVmFsID09ICd0cnVlJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICBzd2FwU3BlYy5zd2FwU3R5bGUgPSB2YWx1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2dFcnJvcignVW5rbm93biBtb2RpZmllciBpbiBoeC1zd2FwOiAnICsgdmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzd2FwU3BlY1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiB1c2VzRm9ybURhdGEoZWx0KSB7XG4gICAgcmV0dXJuIGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1lbmNvZGluZycpID09PSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfHxcbiAgICAobWF0Y2hlcyhlbHQsICdmb3JtJykgJiYgZ2V0UmF3QXR0cmlidXRlKGVsdCwgJ2VuY3R5cGUnKSA9PT0gJ211bHRpcGFydC9mb3JtLWRhdGEnKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmaWx0ZXJlZFBhcmFtZXRlcnNcbiAgICogQHJldHVybnMgeyp8c3RyaW5nfG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBlbmNvZGVQYXJhbXNGb3JCb2R5KHhociwgZWx0LCBmaWx0ZXJlZFBhcmFtZXRlcnMpIHtcbiAgICBsZXQgZW5jb2RlZFBhcmFtZXRlcnMgPSBudWxsXG4gICAgd2l0aEV4dGVuc2lvbnMoZWx0LCBmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICAgIGlmIChlbmNvZGVkUGFyYW1ldGVycyA9PSBudWxsKSB7XG4gICAgICAgIGVuY29kZWRQYXJhbWV0ZXJzID0gZXh0ZW5zaW9uLmVuY29kZVBhcmFtZXRlcnMoeGhyLCBmaWx0ZXJlZFBhcmFtZXRlcnMsIGVsdClcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChlbmNvZGVkUGFyYW1ldGVycyAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gZW5jb2RlZFBhcmFtZXRlcnNcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHVzZXNGb3JtRGF0YShlbHQpKSB7XG4gICAgICAgIC8vIEZvcmNlIGNvbnZlcnNpb24gdG8gYW4gYWN0dWFsIEZvcm1EYXRhIG9iamVjdCBpbiBjYXNlIGZpbHRlcmVkUGFyYW1ldGVycyBpcyBhIGZvcm1EYXRhUHJveHlcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iaWdza3lzb2Z0d2FyZS9odG14L2lzc3Vlcy8yMzE3XG4gICAgICAgIHJldHVybiBvdmVycmlkZUZvcm1EYXRhKG5ldyBGb3JtRGF0YSgpLCBmb3JtRGF0YUZyb21PYmplY3QoZmlsdGVyZWRQYXJhbWV0ZXJzKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1cmxFbmNvZGUoZmlsdGVyZWRQYXJhbWV0ZXJzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcmV0dXJucyB7SHRteFNldHRsZUluZm99XG4gKi9cbiAgZnVuY3Rpb24gbWFrZVNldHRsZUluZm8odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHsgdGFza3M6IFtdLCBlbHRzOiBbdGFyZ2V0XSB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50W119IGNvbnRlbnRcbiAgICogQHBhcmFtIHtIdG14U3dhcFNwZWNpZmljYXRpb259IHN3YXBTcGVjXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxTdGF0ZShjb250ZW50LCBzd2FwU3BlYykge1xuICAgIGNvbnN0IGZpcnN0ID0gY29udGVudFswXVxuICAgIGNvbnN0IGxhc3QgPSBjb250ZW50W2NvbnRlbnQubGVuZ3RoIC0gMV1cbiAgICBpZiAoc3dhcFNwZWMuc2Nyb2xsKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gbnVsbFxuICAgICAgaWYgKHN3YXBTcGVjLnNjcm9sbFRhcmdldCkge1xuICAgICAgICB0YXJnZXQgPSBhc0VsZW1lbnQocXVlcnlTZWxlY3RvckV4dChmaXJzdCwgc3dhcFNwZWMuc2Nyb2xsVGFyZ2V0KSlcbiAgICAgIH1cbiAgICAgIGlmIChzd2FwU3BlYy5zY3JvbGwgPT09ICd0b3AnICYmIChmaXJzdCB8fCB0YXJnZXQpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCBmaXJzdFxuICAgICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gMFxuICAgICAgfVxuICAgICAgaWYgKHN3YXBTcGVjLnNjcm9sbCA9PT0gJ2JvdHRvbScgJiYgKGxhc3QgfHwgdGFyZ2V0KSkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgbGFzdFxuICAgICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gdGFyZ2V0LnNjcm9sbEhlaWdodFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3dhcFNwZWMuc2hvdykge1xuICAgICAgdmFyIHRhcmdldCA9IG51bGxcbiAgICAgIGlmIChzd2FwU3BlYy5zaG93VGFyZ2V0KSB7XG4gICAgICAgIGxldCB0YXJnZXRTdHIgPSBzd2FwU3BlYy5zaG93VGFyZ2V0XG4gICAgICAgIGlmIChzd2FwU3BlYy5zaG93VGFyZ2V0ID09PSAnd2luZG93Jykge1xuICAgICAgICAgIHRhcmdldFN0ciA9ICdib2R5J1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IGFzRWxlbWVudChxdWVyeVNlbGVjdG9yRXh0KGZpcnN0LCB0YXJnZXRTdHIpKVxuICAgICAgfVxuICAgICAgaWYgKHN3YXBTcGVjLnNob3cgPT09ICd0b3AnICYmIChmaXJzdCB8fCB0YXJnZXQpKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCBmaXJzdFxuICAgICAgICAvLyBAdHMtaWdub3JlIEZvciBzb21lIHJlYXNvbiB0c2MgZG9lc24ndCByZWNvZ25pemUgXCJpbnN0YW50XCIgYXMgYSB2YWxpZCBvcHRpb24gZm9yIG5vd1xuICAgICAgICB0YXJnZXQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ3N0YXJ0JywgYmVoYXZpb3I6IGh0bXguY29uZmlnLnNjcm9sbEJlaGF2aW9yIH0pXG4gICAgICB9XG4gICAgICBpZiAoc3dhcFNwZWMuc2hvdyA9PT0gJ2JvdHRvbScgJiYgKGxhc3QgfHwgdGFyZ2V0KSkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgbGFzdFxuICAgICAgICAvLyBAdHMtaWdub3JlIEZvciBzb21lIHJlYXNvbiB0c2MgZG9lc24ndCByZWNvZ25pemUgXCJpbnN0YW50XCIgYXMgYSB2YWxpZCBvcHRpb24gZm9yIG5vd1xuICAgICAgICB0YXJnZXQuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ2VuZCcsIGJlaGF2aW9yOiBodG14LmNvbmZpZy5zY3JvbGxCZWhhdmlvciB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdHRyXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBldmFsQXNEZWZhdWx0XG4gKiBAcGFyYW0ge09iamVjdD19IHZhbHVlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuICBmdW5jdGlvbiBnZXRWYWx1ZXNGb3JFbGVtZW50KGVsdCwgYXR0ciwgZXZhbEFzRGVmYXVsdCwgdmFsdWVzKSB7XG4gICAgaWYgKHZhbHVlcyA9PSBudWxsKSB7XG4gICAgICB2YWx1ZXMgPSB7fVxuICAgIH1cbiAgICBpZiAoZWx0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiB2YWx1ZXNcbiAgICB9XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBnZXRBdHRyaWJ1dGVWYWx1ZShlbHQsIGF0dHIpXG4gICAgaWYgKGF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgICBsZXQgc3RyID0gYXR0cmlidXRlVmFsdWUudHJpbSgpXG4gICAgICBsZXQgZXZhbHVhdGVWYWx1ZSA9IGV2YWxBc0RlZmF1bHRcbiAgICAgIGlmIChzdHIgPT09ICd1bnNldCcpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignamF2YXNjcmlwdDonKSA9PT0gMCkge1xuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDExKVxuICAgICAgICBldmFsdWF0ZVZhbHVlID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChzdHIuaW5kZXhPZignanM6JykgPT09IDApIHtcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cigzKVxuICAgICAgICBldmFsdWF0ZVZhbHVlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCd7JykgIT09IDApIHtcbiAgICAgICAgc3RyID0gJ3snICsgc3RyICsgJ30nXG4gICAgICB9XG4gICAgICBsZXQgdmFyc1ZhbHVlc1xuICAgICAgaWYgKGV2YWx1YXRlVmFsdWUpIHtcbiAgICAgICAgdmFyc1ZhbHVlcyA9IG1heWJlRXZhbChlbHQsIGZ1bmN0aW9uKCkgeyByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiAoJyArIHN0ciArICcpJykoKSB9LCB7fSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhcnNWYWx1ZXMgPSBwYXJzZUpTT04oc3RyKVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFyc1ZhbHVlcykge1xuICAgICAgICBpZiAodmFyc1ZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKHZhbHVlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlc1trZXldID0gdmFyc1ZhbHVlc1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnZXRWYWx1ZXNGb3JFbGVtZW50KGFzRWxlbWVudChwYXJlbnRFbHQoZWx0KSksIGF0dHIsIGV2YWxBc0RlZmF1bHQsIHZhbHVlcylcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fHN0cmluZ30gZWx0XG4gICAqIEBwYXJhbSB7KCkgPT4gYW55fSB0b0V2YWxcbiAgICogQHBhcmFtIHthbnk9fSBkZWZhdWx0VmFsXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqL1xuICBmdW5jdGlvbiBtYXliZUV2YWwoZWx0LCB0b0V2YWwsIGRlZmF1bHRWYWwpIHtcbiAgICBpZiAoaHRteC5jb25maWcuYWxsb3dFdmFsKSB7XG4gICAgICByZXR1cm4gdG9FdmFsKClcbiAgICB9IGVsc2Uge1xuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDpldmFsRGlzYWxsb3dlZEVycm9yJylcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICogQHBhcmFtIHsqP30gZXhwcmVzc2lvblZhcnNcbiAqIEByZXR1cm5zXG4gKi9cbiAgZnVuY3Rpb24gZ2V0SFhWYXJzRm9yRWxlbWVudChlbHQsIGV4cHJlc3Npb25WYXJzKSB7XG4gICAgcmV0dXJuIGdldFZhbHVlc0ZvckVsZW1lbnQoZWx0LCAnaHgtdmFycycsIHRydWUsIGV4cHJlc3Npb25WYXJzKVxuICB9XG5cbiAgLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICogQHBhcmFtIHsqP30gZXhwcmVzc2lvblZhcnNcbiAqIEByZXR1cm5zXG4gKi9cbiAgZnVuY3Rpb24gZ2V0SFhWYWxzRm9yRWxlbWVudChlbHQsIGV4cHJlc3Npb25WYXJzKSB7XG4gICAgcmV0dXJuIGdldFZhbHVlc0ZvckVsZW1lbnQoZWx0LCAnaHgtdmFscycsIGZhbHNlLCBleHByZXNzaW9uVmFycylcbiAgfVxuXG4gIC8qKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAqL1xuICBmdW5jdGlvbiBnZXRFeHByZXNzaW9uVmFycyhlbHQpIHtcbiAgICByZXR1cm4gbWVyZ2VPYmplY3RzKGdldEhYVmFyc0ZvckVsZW1lbnQoZWx0KSwgZ2V0SFhWYWxzRm9yRWxlbWVudChlbHQpKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGVhZGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGhlYWRlclZhbHVlXG4gICAqL1xuICBmdW5jdGlvbiBzYWZlbHlTZXRIZWFkZXJWYWx1ZSh4aHIsIGhlYWRlciwgaGVhZGVyVmFsdWUpIHtcbiAgICBpZiAoaGVhZGVyVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgaGVhZGVyVmFsdWUpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBPbiBhbiBleGNlcHRpb24sIHRyeSB0byBzZXQgdGhlIGhlYWRlciBVUkkgZW5jb2RlZCBpbnN0ZWFkXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgZW5jb2RlVVJJQ29tcG9uZW50KGhlYWRlclZhbHVlKSlcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyICsgJy1VUkktQXV0b0VuY29kZWQnLCAndHJ1ZScpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRQYXRoRnJvbVJlc3BvbnNlKHhocikge1xuICAvLyBOQjogSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgc3R1ZmZcbiAgICBpZiAoeGhyLnJlc3BvbnNlVVJMICYmIHR5cGVvZiAoVVJMKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoeGhyLnJlc3BvbnNlVVJMKVxuICAgICAgICByZXR1cm4gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaFxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0cmlnZ2VyRXJyb3JFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14OmJhZFJlc3BvbnNlVXJsJywgeyB1cmw6IHhoci5yZXNwb25zZVVSTCB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ2V4cFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaGFzSGVhZGVyKHhociwgcmVnZXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4cC50ZXN0KHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJc3N1ZXMgYW4gaHRteC1zdHlsZSBBSkFYIHJlcXVlc3RcbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jYWpheFxuICAgKlxuICAgKiBAcGFyYW0ge0h0dHBWZXJifSB2ZXJiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIHRoZSBVUkwgcGF0aCB0byBtYWtlIHRoZSBBSkFYXG4gICAqIEBwYXJhbSB7RWxlbWVudHxzdHJpbmd8SHRteEFqYXhIZWxwZXJDb250ZXh0fSBjb250ZXh0IHRoZSBlbGVtZW50IHRvIHRhcmdldCAoZGVmYXVsdHMgdG8gdGhlICoqYm9keSoqKSB8IGEgc2VsZWN0b3IgZm9yIHRoZSB0YXJnZXQgfCBhIGNvbnRleHQgb2JqZWN0IHRoYXQgY29udGFpbnMgYW55IG9mIHRoZSBmb2xsb3dpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gUHJvbWlzZSB0aGF0IHJlc29sdmVzIGltbWVkaWF0ZWx5IGlmIG5vIHJlcXVlc3QgaXMgc2VudCwgb3Igd2hlbiB0aGUgcmVxdWVzdCBpcyBjb21wbGV0ZVxuICAgKi9cbiAgZnVuY3Rpb24gYWpheEhlbHBlcih2ZXJiLCBwYXRoLCBjb250ZXh0KSB7XG4gICAgdmVyYiA9ICgvKiogQHR5cGUgSHR0cFZlcmIgKi8odmVyYi50b0xvd2VyQ2FzZSgpKSlcbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgaWYgKGNvbnRleHQgaW5zdGFuY2VvZiBFbGVtZW50IHx8IHR5cGVvZiBjb250ZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gaXNzdWVBamF4UmVxdWVzdCh2ZXJiLCBwYXRoLCBudWxsLCBudWxsLCB7XG4gICAgICAgICAgdGFyZ2V0T3ZlcnJpZGU6IHJlc29sdmVUYXJnZXQoY29udGV4dCksXG4gICAgICAgICAgcmV0dXJuUHJvbWlzZTogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlzc3VlQWpheFJlcXVlc3QodmVyYiwgcGF0aCwgcmVzb2x2ZVRhcmdldChjb250ZXh0LnNvdXJjZSksIGNvbnRleHQuZXZlbnQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGFuZGxlcjogY29udGV4dC5oYW5kbGVyLFxuICAgICAgICAgICAgaGVhZGVyczogY29udGV4dC5oZWFkZXJzLFxuICAgICAgICAgICAgdmFsdWVzOiBjb250ZXh0LnZhbHVlcyxcbiAgICAgICAgICAgIHRhcmdldE92ZXJyaWRlOiByZXNvbHZlVGFyZ2V0KGNvbnRleHQudGFyZ2V0KSxcbiAgICAgICAgICAgIHN3YXBPdmVycmlkZTogY29udGV4dC5zd2FwLFxuICAgICAgICAgICAgc2VsZWN0OiBjb250ZXh0LnNlbGVjdCxcbiAgICAgICAgICAgIHJldHVyblByb21pc2U6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNzdWVBamF4UmVxdWVzdCh2ZXJiLCBwYXRoLCBudWxsLCBudWxsLCB7XG4gICAgICAgIHJldHVyblByb21pc2U6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEByZXR1cm4ge0VsZW1lbnRbXX1cbiAgICovXG4gIGZ1bmN0aW9uIGhpZXJhcmNoeUZvckVsdChlbHQpIHtcbiAgICBjb25zdCBhcnIgPSBbXVxuICAgIHdoaWxlIChlbHQpIHtcbiAgICAgIGFyci5wdXNoKGVsdClcbiAgICAgIGVsdCA9IGVsdC5wYXJlbnRFbGVtZW50XG4gICAgfVxuICAgIHJldHVybiBhcnJcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge0h0bXhSZXF1ZXN0Q29uZmlnfSByZXF1ZXN0Q29uZmlnXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiB2ZXJpZnlQYXRoKGVsdCwgcGF0aCwgcmVxdWVzdENvbmZpZykge1xuICAgIGxldCBzYW1lSG9zdFxuICAgIGxldCB1cmxcbiAgICBpZiAodHlwZW9mIFVSTCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdXJsID0gbmV3IFVSTChwYXRoLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmKVxuICAgICAgY29uc3Qgb3JpZ2luID0gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luXG4gICAgICBzYW1lSG9zdCA9IG9yaWdpbiA9PT0gdXJsLm9yaWdpblxuICAgIH0gZWxzZSB7XG4gICAgLy8gSUUxMSBkb2Vzbid0IHN1cHBvcnQgVVJMXG4gICAgICB1cmwgPSBwYXRoXG4gICAgICBzYW1lSG9zdCA9IHN0YXJ0c1dpdGgocGF0aCwgZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luKVxuICAgIH1cblxuICAgIGlmIChodG14LmNvbmZpZy5zZWxmUmVxdWVzdHNPbmx5KSB7XG4gICAgICBpZiAoIXNhbWVIb3N0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6dmFsaWRhdGVVcmwnLCBtZXJnZU9iamVjdHMoeyB1cmwsIHNhbWVIb3N0IH0sIHJlcXVlc3RDb25maWcpKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fEZvcm1EYXRhfSBvYmpcbiAgICogQHJldHVybiB7Rm9ybURhdGF9XG4gICAqL1xuICBmdW5jdGlvbiBmb3JtRGF0YUZyb21PYmplY3Qob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEZvcm1EYXRhKSByZXR1cm4gb2JqXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0uZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9ialtrZXldLmZvckVhY2goZnVuY3Rpb24odikgeyBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2KSB9KVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBKU09OLnN0cmluZ2lmeShvYmpba2V5XSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgb2JqW2tleV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvcm1EYXRhXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gZm9ybURhdGFBcnJheVByb3h5KGZvcm1EYXRhLCBuYW1lLCBhcnJheSkge1xuICAgIC8vIG11dGF0aW5nIHRoZSBhcnJheSBzaG91bGQgbXV0YXRlIHRoZSB1bmRlcmx5aW5nIGZvcm0gZGF0YVxuICAgIHJldHVybiBuZXcgUHJveHkoYXJyYXksIHtcbiAgICAgIGdldDogZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdudW1iZXInKSByZXR1cm4gdGFyZ2V0W2tleV1cbiAgICAgICAgaWYgKGtleSA9PT0gJ2xlbmd0aCcpIHJldHVybiB0YXJnZXQubGVuZ3RoXG4gICAgICAgIGlmIChrZXkgPT09ICdwdXNoJykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0LnB1c2godmFsdWUpXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XS5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShuYW1lKVxuICAgICAgICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24odikgeyBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdikgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0W2tleV0gJiYgdGFyZ2V0W2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldWzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHRhcmdldCwgaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtpbmRleF0gPSB2YWx1ZVxuICAgICAgICBmb3JtRGF0YS5kZWxldGUobmFtZSlcbiAgICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24odikgeyBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdikgfSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBmdW5jdGlvbiBmb3JtRGF0YVByb3h5KGZvcm1EYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShmb3JtRGF0YSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbih0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIC8vIEZvcndhcmQgc3ltYm9sIGNhbGxzIHRvIHRoZSBGb3JtRGF0YSBpdHNlbGYgZGlyZWN0bHlcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBuYW1lKVxuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lID09PSAndG9KU09OJykge1xuICAgICAgICAgIC8vIFN1cHBvcnQgSlNPTi5zdHJpbmdpZnkgY2FsbCBvbiBwcm94eVxuICAgICAgICAgIHJldHVybiAoKSA9PiBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgLy8gV3JhcCBpbiBmdW5jdGlvbiB3aXRoIGFwcGx5IHRvIGNvcnJlY3RseSBiaW5kIHRoZSBGb3JtRGF0YSBjb250ZXh0LCBhcyBhIGRpcmVjdCBjYWxsIHdvdWxkIHJlc3VsdCBpbiBhbiBpbGxlZ2FsIGludm9jYXRpb24gZXJyb3JcbiAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gZm9ybURhdGFbbmFtZV0uYXBwbHkoZm9ybURhdGEsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcnJheSA9IGZvcm1EYXRhLmdldEFsbChuYW1lKVxuICAgICAgICAvLyBUaG9zZSAyIHVuZGVmaW5lZCAmIHNpbmdsZSB2YWx1ZSByZXR1cm5zIGFyZSBmb3IgcmV0cm8tY29tcGF0aWJpbGl0eSBhcyB3ZSB3ZXJlbid0IHVzaW5nIEZvcm1EYXRhIGJlZm9yZVxuICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9IGVsc2UgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBhcnJheVswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmb3JtRGF0YUFycmF5UHJveHkodGFyZ2V0LCBuYW1lLCBhcnJheSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LmRlbGV0ZShuYW1lKVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlLmZvckVhY2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHYpIHsgdGFyZ2V0LmFwcGVuZChuYW1lLCB2KSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldC5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24odGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0YXJnZXQuZGVsZXRlKG5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0sXG4gICAgICAvLyBTdXBwb3J0IE9iamVjdC5hc3NpZ24gY2FsbCBmcm9tIHByb3h5XG4gICAgICBvd25LZXlzOiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyhPYmplY3QuZnJvbUVudHJpZXModGFyZ2V0KSlcbiAgICAgIH0sXG4gICAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uKHRhcmdldCwgcHJvcCkge1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmZyb21FbnRyaWVzKHRhcmdldCksIHByb3ApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0h0dHBWZXJifSB2ZXJiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7SHRteEFqYXhFdGN9IFtldGNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbmZpcm1lZF1cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIGZ1bmN0aW9uIGlzc3VlQWpheFJlcXVlc3QodmVyYiwgcGF0aCwgZWx0LCBldmVudCwgZXRjLCBjb25maXJtZWQpIHtcbiAgICBsZXQgcmVzb2x2ZSA9IG51bGxcbiAgICBsZXQgcmVqZWN0ID0gbnVsbFxuICAgIGV0YyA9IGV0YyAhPSBudWxsID8gZXRjIDoge31cbiAgICBpZiAoZXRjLnJldHVyblByb21pc2UgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKF9yZXNvbHZlLCBfcmVqZWN0KSB7XG4gICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZVxuICAgICAgICByZWplY3QgPSBfcmVqZWN0XG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoZWx0ID09IG51bGwpIHtcbiAgICAgIGVsdCA9IGdldERvY3VtZW50KCkuYm9keVxuICAgIH1cbiAgICBjb25zdCByZXNwb25zZUhhbmRsZXIgPSBldGMuaGFuZGxlciB8fCBoYW5kbGVBamF4UmVzcG9uc2VcbiAgICBjb25zdCBzZWxlY3QgPSBldGMuc2VsZWN0IHx8IG51bGxcblxuICAgIGlmICghYm9keUNvbnRhaW5zKGVsdCkpIHtcbiAgICAvLyBkbyBub3QgaXNzdWUgcmVxdWVzdHMgZm9yIGVsZW1lbnRzIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAgICBtYXliZUNhbGwocmVzb2x2ZSlcbiAgICAgIHJldHVybiBwcm9taXNlXG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV0Yy50YXJnZXRPdmVycmlkZSB8fCBhc0VsZW1lbnQoZ2V0VGFyZ2V0KGVsdCkpXG4gICAgaWYgKHRhcmdldCA9PSBudWxsIHx8IHRhcmdldCA9PSBEVU1NWV9FTFQpIHtcbiAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6dGFyZ2V0RXJyb3InLCB7IHRhcmdldDogZ2V0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtdGFyZ2V0JykgfSlcbiAgICAgIG1heWJlQ2FsbChyZWplY3QpXG4gICAgICByZXR1cm4gcHJvbWlzZVxuICAgIH1cblxuICAgIGxldCBlbHREYXRhID0gZ2V0SW50ZXJuYWxEYXRhKGVsdClcbiAgICBjb25zdCBzdWJtaXR0ZXIgPSBlbHREYXRhLmxhc3RCdXR0b25DbGlja2VkXG5cbiAgICBpZiAoc3VibWl0dGVyKSB7XG4gICAgICBjb25zdCBidXR0b25QYXRoID0gZ2V0UmF3QXR0cmlidXRlKHN1Ym1pdHRlciwgJ2Zvcm1hY3Rpb24nKVxuICAgICAgaWYgKGJ1dHRvblBhdGggIT0gbnVsbCkge1xuICAgICAgICBwYXRoID0gYnV0dG9uUGF0aFxuICAgICAgfVxuXG4gICAgICBjb25zdCBidXR0b25WZXJiID0gZ2V0UmF3QXR0cmlidXRlKHN1Ym1pdHRlciwgJ2Zvcm1tZXRob2QnKVxuICAgICAgaWYgKGJ1dHRvblZlcmIgIT0gbnVsbCkge1xuICAgICAgLy8gaWdub3JlIGJ1dHRvbnMgd2l0aCBmb3JtbWV0aG9kPVwiZGlhbG9nXCJcbiAgICAgICAgaWYgKGJ1dHRvblZlcmIudG9Mb3dlckNhc2UoKSAhPT0gJ2RpYWxvZycpIHtcbiAgICAgICAgICB2ZXJiID0gKC8qKiBAdHlwZSBIdHRwVmVyYiAqLyhidXR0b25WZXJiKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpcm1RdWVzdGlvbiA9IGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1jb25maXJtJylcbiAgICAvLyBhbGxvdyBldmVudC1iYXNlZCBjb25maXJtYXRpb24gdy8gYSBjYWxsYmFja1xuICAgIGlmIChjb25maXJtZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaXNzdWVSZXF1ZXN0ID0gZnVuY3Rpb24oc2tpcENvbmZpcm1hdGlvbikge1xuICAgICAgICByZXR1cm4gaXNzdWVBamF4UmVxdWVzdCh2ZXJiLCBwYXRoLCBlbHQsIGV2ZW50LCBldGMsICEhc2tpcENvbmZpcm1hdGlvbilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbmZpcm1EZXRhaWxzID0geyB0YXJnZXQsIGVsdCwgcGF0aCwgdmVyYiwgdHJpZ2dlcmluZ0V2ZW50OiBldmVudCwgZXRjLCBpc3N1ZVJlcXVlc3QsIHF1ZXN0aW9uOiBjb25maXJtUXVlc3Rpb24gfVxuICAgICAgaWYgKHRyaWdnZXJFdmVudChlbHQsICdodG14OmNvbmZpcm0nLCBjb25maXJtRGV0YWlscykgPT09IGZhbHNlKSB7XG4gICAgICAgIG1heWJlQ2FsbChyZXNvbHZlKVxuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzeW5jRWx0ID0gZWx0XG4gICAgbGV0IHN5bmNTdHJhdGVneSA9IGdldENsb3Nlc3RBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1zeW5jJylcbiAgICBsZXQgcXVldWVTdHJhdGVneSA9IG51bGxcbiAgICBsZXQgYWJvcnRhYmxlID0gZmFsc2VcbiAgICBpZiAoc3luY1N0cmF0ZWd5KSB7XG4gICAgICBjb25zdCBzeW5jU3RyaW5ncyA9IHN5bmNTdHJhdGVneS5zcGxpdCgnOicpXG4gICAgICBjb25zdCBzZWxlY3RvciA9IHN5bmNTdHJpbmdzWzBdLnRyaW0oKVxuICAgICAgaWYgKHNlbGVjdG9yID09PSAndGhpcycpIHtcbiAgICAgICAgc3luY0VsdCA9IGZpbmRUaGlzRWxlbWVudChlbHQsICdoeC1zeW5jJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN5bmNFbHQgPSBhc0VsZW1lbnQocXVlcnlTZWxlY3RvckV4dChlbHQsIHNlbGVjdG9yKSlcbiAgICAgIH1cbiAgICAgIC8vIGRlZmF1bHQgdG8gdGhlIGRyb3Agc3RyYXRlZ3lcbiAgICAgIHN5bmNTdHJhdGVneSA9IChzeW5jU3RyaW5nc1sxXSB8fCAnZHJvcCcpLnRyaW0oKVxuICAgICAgZWx0RGF0YSA9IGdldEludGVybmFsRGF0YShzeW5jRWx0KVxuICAgICAgaWYgKHN5bmNTdHJhdGVneSA9PT0gJ2Ryb3AnICYmIGVsdERhdGEueGhyICYmIGVsdERhdGEuYWJvcnRhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgIG1heWJlQ2FsbChyZXNvbHZlKVxuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgfSBlbHNlIGlmIChzeW5jU3RyYXRlZ3kgPT09ICdhYm9ydCcpIHtcbiAgICAgICAgaWYgKGVsdERhdGEueGhyKSB7XG4gICAgICAgICAgbWF5YmVDYWxsKHJlc29sdmUpXG4gICAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhYm9ydGFibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3luY1N0cmF0ZWd5ID09PSAncmVwbGFjZScpIHtcbiAgICAgICAgdHJpZ2dlckV2ZW50KHN5bmNFbHQsICdodG14OmFib3J0JykgLy8gYWJvcnQgdGhlIGN1cnJlbnQgcmVxdWVzdCBhbmQgY29udGludWVcbiAgICAgIH0gZWxzZSBpZiAoc3luY1N0cmF0ZWd5LmluZGV4T2YoJ3F1ZXVlJykgPT09IDApIHtcbiAgICAgICAgY29uc3QgcXVldWVTdHJBcnJheSA9IHN5bmNTdHJhdGVneS5zcGxpdCgnICcpXG4gICAgICAgIHF1ZXVlU3RyYXRlZ3kgPSAocXVldWVTdHJBcnJheVsxXSB8fCAnbGFzdCcpLnRyaW0oKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbHREYXRhLnhocikge1xuICAgICAgaWYgKGVsdERhdGEuYWJvcnRhYmxlKSB7XG4gICAgICAgIHRyaWdnZXJFdmVudChzeW5jRWx0LCAnaHRteDphYm9ydCcpIC8vIGFib3J0IHRoZSBjdXJyZW50IHJlcXVlc3QgYW5kIGNvbnRpbnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocXVldWVTdHJhdGVneSA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudERhdGEgPSBnZXRJbnRlcm5hbERhdGEoZXZlbnQpXG4gICAgICAgICAgICBpZiAoZXZlbnREYXRhICYmIGV2ZW50RGF0YS50cmlnZ2VyU3BlYyAmJiBldmVudERhdGEudHJpZ2dlclNwZWMucXVldWUpIHtcbiAgICAgICAgICAgICAgcXVldWVTdHJhdGVneSA9IGV2ZW50RGF0YS50cmlnZ2VyU3BlYy5xdWV1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocXVldWVTdHJhdGVneSA9PSBudWxsKSB7XG4gICAgICAgICAgICBxdWV1ZVN0cmF0ZWd5ID0gJ2xhc3QnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlbHREYXRhLnF1ZXVlZFJlcXVlc3RzID09IG51bGwpIHtcbiAgICAgICAgICBlbHREYXRhLnF1ZXVlZFJlcXVlc3RzID0gW11cbiAgICAgICAgfVxuICAgICAgICBpZiAocXVldWVTdHJhdGVneSA9PT0gJ2ZpcnN0JyAmJiBlbHREYXRhLnF1ZXVlZFJlcXVlc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGVsdERhdGEucXVldWVkUmVxdWVzdHMucHVzaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlzc3VlQWpheFJlcXVlc3QodmVyYiwgcGF0aCwgZWx0LCBldmVudCwgZXRjKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAocXVldWVTdHJhdGVneSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICBlbHREYXRhLnF1ZXVlZFJlcXVlc3RzLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpc3N1ZUFqYXhSZXF1ZXN0KHZlcmIsIHBhdGgsIGVsdCwgZXZlbnQsIGV0YylcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKHF1ZXVlU3RyYXRlZ3kgPT09ICdsYXN0Jykge1xuICAgICAgICAgIGVsdERhdGEucXVldWVkUmVxdWVzdHMgPSBbXSAvLyBkdW1wIGV4aXN0aW5nIHF1ZXVlXG4gICAgICAgICAgZWx0RGF0YS5xdWV1ZWRSZXF1ZXN0cy5wdXNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaXNzdWVBamF4UmVxdWVzdCh2ZXJiLCBwYXRoLCBlbHQsIGV2ZW50LCBldGMpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBtYXliZUNhbGwocmVzb2x2ZSlcbiAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgIGVsdERhdGEueGhyID0geGhyXG4gICAgZWx0RGF0YS5hYm9ydGFibGUgPSBhYm9ydGFibGVcbiAgICBjb25zdCBlbmRSZXF1ZXN0TG9jayA9IGZ1bmN0aW9uKCkge1xuICAgICAgZWx0RGF0YS54aHIgPSBudWxsXG4gICAgICBlbHREYXRhLmFib3J0YWJsZSA9IGZhbHNlXG4gICAgICBpZiAoZWx0RGF0YS5xdWV1ZWRSZXF1ZXN0cyAhPSBudWxsICYmXG4gICAgICBlbHREYXRhLnF1ZXVlZFJlcXVlc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcXVldWVkUmVxdWVzdCA9IGVsdERhdGEucXVldWVkUmVxdWVzdHMuc2hpZnQoKVxuICAgICAgICBxdWV1ZWRSZXF1ZXN0KClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcHJvbXB0UXVlc3Rpb24gPSBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtcHJvbXB0JylcbiAgICBpZiAocHJvbXB0UXVlc3Rpb24pIHtcbiAgICAgIHZhciBwcm9tcHRSZXNwb25zZSA9IHByb21wdChwcm9tcHRRdWVzdGlvbilcbiAgICAgIC8vIHByb21wdCByZXR1cm5zIG51bGwgaWYgY2FuY2VsbGVkIGFuZCBlbXB0eSBzdHJpbmcgaWYgYWNjZXB0ZWQgd2l0aCBubyBlbnRyeVxuICAgICAgaWYgKHByb21wdFJlc3BvbnNlID09PSBudWxsIHx8XG4gICAgICAhdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6cHJvbXB0JywgeyBwcm9tcHQ6IHByb21wdFJlc3BvbnNlLCB0YXJnZXQgfSkpIHtcbiAgICAgICAgbWF5YmVDYWxsKHJlc29sdmUpXG4gICAgICAgIGVuZFJlcXVlc3RMb2NrKClcbiAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29uZmlybVF1ZXN0aW9uICYmICFjb25maXJtZWQpIHtcbiAgICAgIGlmICghY29uZmlybShjb25maXJtUXVlc3Rpb24pKSB7XG4gICAgICAgIG1heWJlQ2FsbChyZXNvbHZlKVxuICAgICAgICBlbmRSZXF1ZXN0TG9jaygpXG4gICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGhlYWRlcnMgPSBnZXRIZWFkZXJzKGVsdCwgdGFyZ2V0LCBwcm9tcHRSZXNwb25zZSlcblxuICAgIGlmICh2ZXJiICE9PSAnZ2V0JyAmJiAhdXNlc0Zvcm1EYXRhKGVsdCkpIHtcbiAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICB9XG5cbiAgICBpZiAoZXRjLmhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMgPSBtZXJnZU9iamVjdHMoaGVhZGVycywgZXRjLmhlYWRlcnMpXG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdHMgPSBnZXRJbnB1dFZhbHVlcyhlbHQsIHZlcmIpXG4gICAgbGV0IGVycm9ycyA9IHJlc3VsdHMuZXJyb3JzXG4gICAgY29uc3QgcmF3Rm9ybURhdGEgPSByZXN1bHRzLmZvcm1EYXRhXG4gICAgaWYgKGV0Yy52YWx1ZXMpIHtcbiAgICAgIG92ZXJyaWRlRm9ybURhdGEocmF3Rm9ybURhdGEsIGZvcm1EYXRhRnJvbU9iamVjdChldGMudmFsdWVzKSlcbiAgICB9XG4gICAgY29uc3QgZXhwcmVzc2lvblZhcnMgPSBmb3JtRGF0YUZyb21PYmplY3QoZ2V0RXhwcmVzc2lvblZhcnMoZWx0KSlcbiAgICBjb25zdCBhbGxGb3JtRGF0YSA9IG92ZXJyaWRlRm9ybURhdGEocmF3Rm9ybURhdGEsIGV4cHJlc3Npb25WYXJzKVxuICAgIGxldCBmaWx0ZXJlZEZvcm1EYXRhID0gZmlsdGVyVmFsdWVzKGFsbEZvcm1EYXRhLCBlbHQpXG5cbiAgICBpZiAoaHRteC5jb25maWcuZ2V0Q2FjaGVCdXN0ZXJQYXJhbSAmJiB2ZXJiID09PSAnZ2V0Jykge1xuICAgICAgZmlsdGVyZWRGb3JtRGF0YS5zZXQoJ29yZy5odG14LmNhY2hlLWJ1c3RlcicsIGdldFJhd0F0dHJpYnV0ZSh0YXJnZXQsICdpZCcpIHx8ICd0cnVlJylcbiAgICB9XG5cbiAgICAvLyBiZWhhdmlvciBvZiBhbmNob3JzIHcvIGVtcHR5IGhyZWYgaXMgdG8gdXNlIHRoZSBjdXJyZW50IFVSTFxuICAgIGlmIChwYXRoID09IG51bGwgfHwgcGF0aCA9PT0gJycpIHtcbiAgICAgIHBhdGggPSBnZXREb2N1bWVudCgpLmxvY2F0aW9uLmhyZWZcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2NyZWRlbnRpYWxzXVxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdGltZW91dF1cbiAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtub0hlYWRlcnNdXG4gICAgICovXG4gICAgY29uc3QgcmVxdWVzdEF0dHJWYWx1ZXMgPSBnZXRWYWx1ZXNGb3JFbGVtZW50KGVsdCwgJ2h4LXJlcXVlc3QnKVxuXG4gICAgY29uc3QgZWx0SXNCb29zdGVkID0gZ2V0SW50ZXJuYWxEYXRhKGVsdCkuYm9vc3RlZFxuXG4gICAgbGV0IHVzZVVybFBhcmFtcyA9IGh0bXguY29uZmlnLm1ldGhvZHNUaGF0VXNlVXJsUGFyYW1zLmluZGV4T2YodmVyYikgPj0gMFxuXG4gICAgLyoqIEB0eXBlIEh0bXhSZXF1ZXN0Q29uZmlnICovXG4gICAgY29uc3QgcmVxdWVzdENvbmZpZyA9IHtcbiAgICAgIGJvb3N0ZWQ6IGVsdElzQm9vc3RlZCxcbiAgICAgIHVzZVVybFBhcmFtcyxcbiAgICAgIGZvcm1EYXRhOiBmaWx0ZXJlZEZvcm1EYXRhLFxuICAgICAgcGFyYW1ldGVyczogZm9ybURhdGFQcm94eShmaWx0ZXJlZEZvcm1EYXRhKSxcbiAgICAgIHVuZmlsdGVyZWRGb3JtRGF0YTogYWxsRm9ybURhdGEsXG4gICAgICB1bmZpbHRlcmVkUGFyYW1ldGVyczogZm9ybURhdGFQcm94eShhbGxGb3JtRGF0YSksXG4gICAgICBoZWFkZXJzLFxuICAgICAgdGFyZ2V0LFxuICAgICAgdmVyYixcbiAgICAgIGVycm9ycyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogZXRjLmNyZWRlbnRpYWxzIHx8IHJlcXVlc3RBdHRyVmFsdWVzLmNyZWRlbnRpYWxzIHx8IGh0bXguY29uZmlnLndpdGhDcmVkZW50aWFscyxcbiAgICAgIHRpbWVvdXQ6IGV0Yy50aW1lb3V0IHx8IHJlcXVlc3RBdHRyVmFsdWVzLnRpbWVvdXQgfHwgaHRteC5jb25maWcudGltZW91dCxcbiAgICAgIHBhdGgsXG4gICAgICB0cmlnZ2VyaW5nRXZlbnQ6IGV2ZW50XG4gICAgfVxuXG4gICAgaWYgKCF0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDpjb25maWdSZXF1ZXN0JywgcmVxdWVzdENvbmZpZykpIHtcbiAgICAgIG1heWJlQ2FsbChyZXNvbHZlKVxuICAgICAgZW5kUmVxdWVzdExvY2soKVxuICAgICAgcmV0dXJuIHByb21pc2VcbiAgICB9XG5cbiAgICAvLyBjb3B5IG91dCBpbiBjYXNlIHRoZSBvYmplY3Qgd2FzIG92ZXJ3cml0dGVuXG4gICAgcGF0aCA9IHJlcXVlc3RDb25maWcucGF0aFxuICAgIHZlcmIgPSByZXF1ZXN0Q29uZmlnLnZlcmJcbiAgICBoZWFkZXJzID0gcmVxdWVzdENvbmZpZy5oZWFkZXJzXG4gICAgZmlsdGVyZWRGb3JtRGF0YSA9IGZvcm1EYXRhRnJvbU9iamVjdChyZXF1ZXN0Q29uZmlnLnBhcmFtZXRlcnMpXG4gICAgZXJyb3JzID0gcmVxdWVzdENvbmZpZy5lcnJvcnNcbiAgICB1c2VVcmxQYXJhbXMgPSByZXF1ZXN0Q29uZmlnLnVzZVVybFBhcmFtc1xuXG4gICAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdHJpZ2dlckV2ZW50KGVsdCwgJ2h0bXg6dmFsaWRhdGlvbjpoYWx0ZWQnLCByZXF1ZXN0Q29uZmlnKVxuICAgICAgbWF5YmVDYWxsKHJlc29sdmUpXG4gICAgICBlbmRSZXF1ZXN0TG9jaygpXG4gICAgICByZXR1cm4gcHJvbWlzZVxuICAgIH1cblxuICAgIGNvbnN0IHNwbGl0UGF0aCA9IHBhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IHBhdGhOb0FuY2hvciA9IHNwbGl0UGF0aFswXVxuICAgIGNvbnN0IGFuY2hvciA9IHNwbGl0UGF0aFsxXVxuXG4gICAgbGV0IGZpbmFsUGF0aCA9IHBhdGhcbiAgICBpZiAodXNlVXJsUGFyYW1zKSB7XG4gICAgICBmaW5hbFBhdGggPSBwYXRoTm9BbmNob3JcbiAgICAgIGNvbnN0IGhhc1ZhbHVlcyA9ICFmaWx0ZXJlZEZvcm1EYXRhLmtleXMoKS5uZXh0KCkuZG9uZVxuICAgICAgaWYgKGhhc1ZhbHVlcykge1xuICAgICAgICBpZiAoZmluYWxQYXRoLmluZGV4T2YoJz8nKSA8IDApIHtcbiAgICAgICAgICBmaW5hbFBhdGggKz0gJz8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmluYWxQYXRoICs9ICcmJ1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsUGF0aCArPSB1cmxFbmNvZGUoZmlsdGVyZWRGb3JtRGF0YSlcbiAgICAgICAgaWYgKGFuY2hvcikge1xuICAgICAgICAgIGZpbmFsUGF0aCArPSAnIycgKyBhbmNob3JcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdmVyaWZ5UGF0aChlbHQsIGZpbmFsUGF0aCwgcmVxdWVzdENvbmZpZykpIHtcbiAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6aW52YWxpZFBhdGgnLCByZXF1ZXN0Q29uZmlnKVxuICAgICAgbWF5YmVDYWxsKHJlamVjdClcbiAgICAgIHJldHVybiBwcm9taXNlXG4gICAgfVxuXG4gICAgeGhyLm9wZW4odmVyYi50b1VwcGVyQ2FzZSgpLCBmaW5hbFBhdGgsIHRydWUpXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoJ3RleHQvaHRtbCcpXG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHJlcXVlc3RDb25maWcud2l0aENyZWRlbnRpYWxzXG4gICAgeGhyLnRpbWVvdXQgPSByZXF1ZXN0Q29uZmlnLnRpbWVvdXRcblxuICAgIC8vIHJlcXVlc3QgaGVhZGVyc1xuICAgIGlmIChyZXF1ZXN0QXR0clZhbHVlcy5ub0hlYWRlcnMpIHtcbiAgICAvLyBpZ25vcmUgYWxsIGhlYWRlcnNcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBoZWFkZXIgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShoZWFkZXIpKSB7XG4gICAgICAgICAgY29uc3QgaGVhZGVyVmFsdWUgPSBoZWFkZXJzW2hlYWRlcl1cbiAgICAgICAgICBzYWZlbHlTZXRIZWFkZXJWYWx1ZSh4aHIsIGhlYWRlciwgaGVhZGVyVmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQHR5cGUge0h0bXhSZXNwb25zZUluZm99ICovXG4gICAgY29uc3QgcmVzcG9uc2VJbmZvID0ge1xuICAgICAgeGhyLFxuICAgICAgdGFyZ2V0LFxuICAgICAgcmVxdWVzdENvbmZpZyxcbiAgICAgIGV0YyxcbiAgICAgIGJvb3N0ZWQ6IGVsdElzQm9vc3RlZCxcbiAgICAgIHNlbGVjdCxcbiAgICAgIHBhdGhJbmZvOiB7XG4gICAgICAgIHJlcXVlc3RQYXRoOiBwYXRoLFxuICAgICAgICBmaW5hbFJlcXVlc3RQYXRoOiBmaW5hbFBhdGgsXG4gICAgICAgIHJlc3BvbnNlUGF0aDogbnVsbCxcbiAgICAgICAgYW5jaG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaGllcmFyY2h5ID0gaGllcmFyY2h5Rm9yRWx0KGVsdClcbiAgICAgICAgcmVzcG9uc2VJbmZvLnBhdGhJbmZvLnJlc3BvbnNlUGF0aCA9IGdldFBhdGhGcm9tUmVzcG9uc2UoeGhyKVxuICAgICAgICByZXNwb25zZUhhbmRsZXIoZWx0LCByZXNwb25zZUluZm8pXG4gICAgICAgIHJlbW92ZVJlcXVlc3RJbmRpY2F0b3JzKGluZGljYXRvcnMsIGRpc2FibGVFbHRzKVxuICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDphZnRlclJlcXVlc3QnLCByZXNwb25zZUluZm8pXG4gICAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OmFmdGVyT25Mb2FkJywgcmVzcG9uc2VJbmZvKVxuICAgICAgICAvLyBpZiB0aGUgYm9keSBubyBsb25nZXIgY29udGFpbnMgdGhlIGVsZW1lbnQsIHRyaWdnZXIgdGhlIGV2ZW50IG9uIHRoZSBjbG9zZXN0IHBhcmVudFxuICAgICAgICAvLyByZW1haW5pbmcgaW4gdGhlIERPTVxuICAgICAgICBpZiAoIWJvZHlDb250YWlucyhlbHQpKSB7XG4gICAgICAgICAgbGV0IHNlY29uZGFyeVRyaWdnZXJFbHQgPSBudWxsXG4gICAgICAgICAgd2hpbGUgKGhpZXJhcmNoeS5sZW5ndGggPiAwICYmIHNlY29uZGFyeVRyaWdnZXJFbHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50RWx0SW5IaWVyYXJjaHkgPSBoaWVyYXJjaHkuc2hpZnQoKVxuICAgICAgICAgICAgaWYgKGJvZHlDb250YWlucyhwYXJlbnRFbHRJbkhpZXJhcmNoeSkpIHtcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5VHJpZ2dlckVsdCA9IHBhcmVudEVsdEluSGllcmFyY2h5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZWNvbmRhcnlUcmlnZ2VyRWx0KSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoc2Vjb25kYXJ5VHJpZ2dlckVsdCwgJ2h0bXg6YWZ0ZXJSZXF1ZXN0JywgcmVzcG9uc2VJbmZvKVxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KHNlY29uZGFyeVRyaWdnZXJFbHQsICdodG14OmFmdGVyT25Mb2FkJywgcmVzcG9uc2VJbmZvKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXliZUNhbGwocmVzb2x2ZSlcbiAgICAgICAgZW5kUmVxdWVzdExvY2soKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14Om9uTG9hZEVycm9yJywgbWVyZ2VPYmplY3RzKHsgZXJyb3I6IGUgfSwgcmVzcG9uc2VJbmZvKSlcbiAgICAgICAgdGhyb3cgZVxuICAgICAgfVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVtb3ZlUmVxdWVzdEluZGljYXRvcnMoaW5kaWNhdG9ycywgZGlzYWJsZUVsdHMpXG4gICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OmFmdGVyUmVxdWVzdCcsIHJlc3BvbnNlSW5mbylcbiAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6c2VuZEVycm9yJywgcmVzcG9uc2VJbmZvKVxuICAgICAgbWF5YmVDYWxsKHJlamVjdClcbiAgICAgIGVuZFJlcXVlc3RMb2NrKClcbiAgICB9XG4gICAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlbW92ZVJlcXVlc3RJbmRpY2F0b3JzKGluZGljYXRvcnMsIGRpc2FibGVFbHRzKVxuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDphZnRlclJlcXVlc3QnLCByZXNwb25zZUluZm8pXG4gICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OnNlbmRBYm9ydCcsIHJlc3BvbnNlSW5mbylcbiAgICAgIG1heWJlQ2FsbChyZWplY3QpXG4gICAgICBlbmRSZXF1ZXN0TG9jaygpXG4gICAgfVxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlbW92ZVJlcXVlc3RJbmRpY2F0b3JzKGluZGljYXRvcnMsIGRpc2FibGVFbHRzKVxuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDphZnRlclJlcXVlc3QnLCByZXNwb25zZUluZm8pXG4gICAgICB0cmlnZ2VyRXJyb3JFdmVudChlbHQsICdodG14OnRpbWVvdXQnLCByZXNwb25zZUluZm8pXG4gICAgICBtYXliZUNhbGwocmVqZWN0KVxuICAgICAgZW5kUmVxdWVzdExvY2soKVxuICAgIH1cbiAgICBpZiAoIXRyaWdnZXJFdmVudChlbHQsICdodG14OmJlZm9yZVJlcXVlc3QnLCByZXNwb25zZUluZm8pKSB7XG4gICAgICBtYXliZUNhbGwocmVzb2x2ZSlcbiAgICAgIGVuZFJlcXVlc3RMb2NrKClcbiAgICAgIHJldHVybiBwcm9taXNlXG4gICAgfVxuICAgIHZhciBpbmRpY2F0b3JzID0gYWRkUmVxdWVzdEluZGljYXRvckNsYXNzZXMoZWx0KVxuICAgIHZhciBkaXNhYmxlRWx0cyA9IGRpc2FibGVFbGVtZW50cyhlbHQpXG5cbiAgICBmb3JFYWNoKFsnbG9hZHN0YXJ0JywgJ2xvYWRlbmQnLCAncHJvZ3Jlc3MnLCAnYWJvcnQnXSwgZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgICBmb3JFYWNoKFt4aHIsIHhoci51cGxvYWRdLCBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OnhocjonICsgZXZlbnROYW1lLCB7XG4gICAgICAgICAgICBsZW5ndGhDb21wdXRhYmxlOiBldmVudC5sZW5ndGhDb21wdXRhYmxlLFxuICAgICAgICAgICAgbG9hZGVkOiBldmVudC5sb2FkZWQsXG4gICAgICAgICAgICB0b3RhbDogZXZlbnQudG90YWxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OmJlZm9yZVNlbmQnLCByZXNwb25zZUluZm8pXG4gICAgY29uc3QgcGFyYW1zID0gdXNlVXJsUGFyYW1zID8gbnVsbCA6IGVuY29kZVBhcmFtc0ZvckJvZHkoeGhyLCBlbHQsIGZpbHRlcmVkRm9ybURhdGEpXG4gICAgeGhyLnNlbmQocGFyYW1zKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gSHRteEhpc3RvcnlVcGRhdGVcbiAgICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gW3R5cGVdXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfG51bGx9IFtwYXRoXVxuICAgKi9cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtIdG14UmVzcG9uc2VJbmZvfSByZXNwb25zZUluZm9cbiAgICogQHJldHVybiB7SHRteEhpc3RvcnlVcGRhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBkZXRlcm1pbmVIaXN0b3J5VXBkYXRlcyhlbHQsIHJlc3BvbnNlSW5mbykge1xuICAgIGNvbnN0IHhociA9IHJlc3BvbnNlSW5mby54aHJcblxuICAgIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBGaXJzdCBjb25zdWx0IHJlc3BvbnNlIGhlYWRlcnNcbiAgICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgbGV0IHBhdGhGcm9tSGVhZGVycyA9IG51bGxcbiAgICBsZXQgdHlwZUZyb21IZWFkZXJzID0gbnVsbFxuICAgIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtUHVzaDovaSkpIHtcbiAgICAgIHBhdGhGcm9tSGVhZGVycyA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUHVzaCcpXG4gICAgICB0eXBlRnJvbUhlYWRlcnMgPSAncHVzaCdcbiAgICB9IGVsc2UgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1QdXNoLVVybDovaSkpIHtcbiAgICAgIHBhdGhGcm9tSGVhZGVycyA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUHVzaC1VcmwnKVxuICAgICAgdHlwZUZyb21IZWFkZXJzID0gJ3B1c2gnXG4gICAgfSBlbHNlIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtUmVwbGFjZS1Vcmw6L2kpKSB7XG4gICAgICBwYXRoRnJvbUhlYWRlcnMgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVJlcGxhY2UtVXJsJylcbiAgICAgIHR5cGVGcm9tSGVhZGVycyA9ICdyZXBsYWNlJ1xuICAgIH1cblxuICAgIC8vIGlmIHRoZXJlIHdhcyBhIHJlc3BvbnNlIGhlYWRlciwgdGhhdCBoYXMgcHJpb3JpdHlcbiAgICBpZiAocGF0aEZyb21IZWFkZXJzKSB7XG4gICAgICBpZiAocGF0aEZyb21IZWFkZXJzID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiB0eXBlRnJvbUhlYWRlcnMsXG4gICAgICAgICAgcGF0aDogcGF0aEZyb21IZWFkZXJzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gTmV4dCByZXNvbHZlIHZpYSBET00gdmFsdWVzXG4gICAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0IHJlcXVlc3RQYXRoID0gcmVzcG9uc2VJbmZvLnBhdGhJbmZvLmZpbmFsUmVxdWVzdFBhdGhcbiAgICBjb25zdCByZXNwb25zZVBhdGggPSByZXNwb25zZUluZm8ucGF0aEluZm8ucmVzcG9uc2VQYXRoXG5cbiAgICBjb25zdCBwdXNoVXJsID0gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXB1c2gtdXJsJylcbiAgICBjb25zdCByZXBsYWNlVXJsID0gZ2V0Q2xvc2VzdEF0dHJpYnV0ZVZhbHVlKGVsdCwgJ2h4LXJlcGxhY2UtdXJsJylcbiAgICBjb25zdCBlbGVtZW50SXNCb29zdGVkID0gZ2V0SW50ZXJuYWxEYXRhKGVsdCkuYm9vc3RlZFxuXG4gICAgbGV0IHNhdmVUeXBlID0gbnVsbFxuICAgIGxldCBwYXRoID0gbnVsbFxuXG4gICAgaWYgKHB1c2hVcmwpIHtcbiAgICAgIHNhdmVUeXBlID0gJ3B1c2gnXG4gICAgICBwYXRoID0gcHVzaFVybFxuICAgIH0gZWxzZSBpZiAocmVwbGFjZVVybCkge1xuICAgICAgc2F2ZVR5cGUgPSAncmVwbGFjZSdcbiAgICAgIHBhdGggPSByZXBsYWNlVXJsXG4gICAgfSBlbHNlIGlmIChlbGVtZW50SXNCb29zdGVkKSB7XG4gICAgICBzYXZlVHlwZSA9ICdwdXNoJ1xuICAgICAgcGF0aCA9IHJlc3BvbnNlUGF0aCB8fCByZXF1ZXN0UGF0aCAvLyBpZiB0aGVyZSBpcyBubyByZXNwb25zZSBwYXRoLCBnbyB3aXRoIHRoZSBvcmlnaW5hbCByZXF1ZXN0IHBhdGhcbiAgICB9XG5cbiAgICBpZiAocGF0aCkge1xuICAgIC8vIGZhbHNlIGluZGljYXRlcyBubyBwdXNoLCByZXR1cm4gZW1wdHkgb2JqZWN0XG4gICAgICBpZiAocGF0aCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cblxuICAgICAgLy8gdHJ1ZSBpbmRpY2F0ZXMgd2Ugd2FudCB0byBmb2xsb3cgd2hlcmV2ZXIgdGhlIHNlcnZlciBlbmRlZCB1cCBzZW5kaW5nIHVzXG4gICAgICBpZiAocGF0aCA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHBhdGggPSByZXNwb25zZVBhdGggfHwgcmVxdWVzdFBhdGggLy8gaWYgdGhlcmUgaXMgbm8gcmVzcG9uc2UgcGF0aCwgZ28gd2l0aCB0aGUgb3JpZ2luYWwgcmVxdWVzdCBwYXRoXG4gICAgICB9XG5cbiAgICAgIC8vIHJlc3RvcmUgYW55IGFuY2hvciBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgIGlmIChyZXNwb25zZUluZm8ucGF0aEluZm8uYW5jaG9yICYmIHBhdGguaW5kZXhPZignIycpID09PSAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aCArICcjJyArIHJlc3BvbnNlSW5mby5wYXRoSW5mby5hbmNob3JcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogc2F2ZVR5cGUsXG4gICAgICAgIHBhdGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SHRteFJlc3BvbnNlSGFuZGxpbmdDb25maWd9IHJlc3BvbnNlSGFuZGxpbmdDb25maWdcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1c1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gY29kZU1hdGNoZXMocmVzcG9uc2VIYW5kbGluZ0NvbmZpZywgc3RhdHVzKSB7XG4gICAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVzcG9uc2VIYW5kbGluZ0NvbmZpZy5jb2RlKVxuICAgIHJldHVybiByZWdFeHAudGVzdChzdGF0dXMudG9TdHJpbmcoMTApKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcmV0dXJuIHtIdG14UmVzcG9uc2VIYW5kbGluZ0NvbmZpZ31cbiAgICovXG4gIGZ1bmN0aW9uIHJlc29sdmVSZXNwb25zZUhhbmRsaW5nKHhocikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaHRteC5jb25maWcucmVzcG9uc2VIYW5kbGluZy5sZW5ndGg7IGkrKykge1xuICAgICAgLyoqIEB0eXBlIEh0bXhSZXNwb25zZUhhbmRsaW5nQ29uZmlnICovXG4gICAgICB2YXIgcmVzcG9uc2VIYW5kbGluZ0VsZW1lbnQgPSBodG14LmNvbmZpZy5yZXNwb25zZUhhbmRsaW5nW2ldXG4gICAgICBpZiAoY29kZU1hdGNoZXMocmVzcG9uc2VIYW5kbGluZ0VsZW1lbnQsIHhoci5zdGF0dXMpKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZUhhbmRsaW5nRWxlbWVudFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBubyBtYXRjaGVzLCByZXR1cm4gbm8gc3dhcFxuICAgIHJldHVybiB7XG4gICAgICBzd2FwOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRpdGxlKHRpdGxlKSB7XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBjb25zdCB0aXRsZUVsdCA9IGZpbmQoJ3RpdGxlJylcbiAgICAgIGlmICh0aXRsZUVsdCkge1xuICAgICAgICB0aXRsZUVsdC5pbm5lckhUTUwgPSB0aXRsZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gdGl0bGVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbHRcbiAgICogQHBhcmFtIHtIdG14UmVzcG9uc2VJbmZvfSByZXNwb25zZUluZm9cbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZUFqYXhSZXNwb25zZShlbHQsIHJlc3BvbnNlSW5mbykge1xuICAgIGNvbnN0IHhociA9IHJlc3BvbnNlSW5mby54aHJcbiAgICBsZXQgdGFyZ2V0ID0gcmVzcG9uc2VJbmZvLnRhcmdldFxuICAgIGNvbnN0IGV0YyA9IHJlc3BvbnNlSW5mby5ldGNcbiAgICBjb25zdCByZXNwb25zZUluZm9TZWxlY3QgPSByZXNwb25zZUluZm8uc2VsZWN0XG5cbiAgICBpZiAoIXRyaWdnZXJFdmVudChlbHQsICdodG14OmJlZm9yZU9uTG9hZCcsIHJlc3BvbnNlSW5mbykpIHJldHVyblxuXG4gICAgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1UcmlnZ2VyOi9pKSkge1xuICAgICAgaGFuZGxlVHJpZ2dlckhlYWRlcih4aHIsICdIWC1UcmlnZ2VyJywgZWx0KVxuICAgIH1cblxuICAgIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtTG9jYXRpb246L2kpKSB7XG4gICAgICBzYXZlQ3VycmVudFBhZ2VUb0hpc3RvcnkoKVxuICAgICAgbGV0IHJlZGlyZWN0UGF0aCA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtTG9jYXRpb24nKVxuICAgICAgLyoqIEB0eXBlIHtIdG14QWpheEhlbHBlckNvbnRleHQme3BhdGg6c3RyaW5nfX0gKi9cbiAgICAgIHZhciByZWRpcmVjdFN3YXBTcGVjXG4gICAgICBpZiAocmVkaXJlY3RQYXRoLmluZGV4T2YoJ3snKSA9PT0gMCkge1xuICAgICAgICByZWRpcmVjdFN3YXBTcGVjID0gcGFyc2VKU09OKHJlZGlyZWN0UGF0aClcbiAgICAgICAgLy8gd2hhdCdzIHRoZSBiZXN0IHdheSB0byB0aHJvdyBhbiBlcnJvciBpZiB0aGUgdXNlciBkaWRuJ3QgaW5jbHVkZSB0aGlzXG4gICAgICAgIHJlZGlyZWN0UGF0aCA9IHJlZGlyZWN0U3dhcFNwZWMucGF0aFxuICAgICAgICBkZWxldGUgcmVkaXJlY3RTd2FwU3BlYy5wYXRoXG4gICAgICB9XG4gICAgICBhamF4SGVscGVyKCdnZXQnLCByZWRpcmVjdFBhdGgsIHJlZGlyZWN0U3dhcFNwZWMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHB1c2hVcmxJbnRvSGlzdG9yeShyZWRpcmVjdFBhdGgpXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvdWxkUmVmcmVzaCA9IGhhc0hlYWRlcih4aHIsIC9IWC1SZWZyZXNoOi9pKSAmJiB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0hYLVJlZnJlc2gnKSA9PT0gJ3RydWUnXG5cbiAgICBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVJlZGlyZWN0Oi9pKSkge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUmVkaXJlY3QnKVxuICAgICAgc2hvdWxkUmVmcmVzaCAmJiBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFJlZnJlc2gpIHtcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVJldGFyZ2V0Oi9pKSkge1xuICAgICAgaWYgKHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUmV0YXJnZXQnKSA9PT0gJ3RoaXMnKSB7XG4gICAgICAgIHJlc3BvbnNlSW5mby50YXJnZXQgPSBlbHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3BvbnNlSW5mby50YXJnZXQgPSBhc0VsZW1lbnQocXVlcnlTZWxlY3RvckV4dChlbHQsIHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUmV0YXJnZXQnKSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGlzdG9yeVVwZGF0ZSA9IGRldGVybWluZUhpc3RvcnlVcGRhdGVzKGVsdCwgcmVzcG9uc2VJbmZvKVxuXG4gICAgY29uc3QgcmVzcG9uc2VIYW5kbGluZyA9IHJlc29sdmVSZXNwb25zZUhhbmRsaW5nKHhocilcbiAgICBjb25zdCBzaG91bGRTd2FwID0gcmVzcG9uc2VIYW5kbGluZy5zd2FwXG4gICAgbGV0IGlzRXJyb3IgPSAhIXJlc3BvbnNlSGFuZGxpbmcuZXJyb3JcbiAgICBsZXQgaWdub3JlVGl0bGUgPSBodG14LmNvbmZpZy5pZ25vcmVUaXRsZSB8fCByZXNwb25zZUhhbmRsaW5nLmlnbm9yZVRpdGxlXG4gICAgbGV0IHNlbGVjdE92ZXJyaWRlID0gcmVzcG9uc2VIYW5kbGluZy5zZWxlY3RcbiAgICBpZiAocmVzcG9uc2VIYW5kbGluZy50YXJnZXQpIHtcbiAgICAgIHJlc3BvbnNlSW5mby50YXJnZXQgPSBhc0VsZW1lbnQocXVlcnlTZWxlY3RvckV4dChlbHQsIHJlc3BvbnNlSGFuZGxpbmcudGFyZ2V0KSlcbiAgICB9XG4gICAgdmFyIHN3YXBPdmVycmlkZSA9IGV0Yy5zd2FwT3ZlcnJpZGVcbiAgICBpZiAoc3dhcE92ZXJyaWRlID09IG51bGwgJiYgcmVzcG9uc2VIYW5kbGluZy5zd2FwT3ZlcnJpZGUpIHtcbiAgICAgIHN3YXBPdmVycmlkZSA9IHJlc3BvbnNlSGFuZGxpbmcuc3dhcE92ZXJyaWRlXG4gICAgfVxuXG4gICAgLy8gcmVzcG9uc2UgaGVhZGVycyBvdmVycmlkZSByZXNwb25zZSBoYW5kbGluZyBjb25maWdcbiAgICBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVJldGFyZ2V0Oi9pKSkge1xuICAgICAgaWYgKHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUmV0YXJnZXQnKSA9PT0gJ3RoaXMnKSB7XG4gICAgICAgIHJlc3BvbnNlSW5mby50YXJnZXQgPSBlbHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3BvbnNlSW5mby50YXJnZXQgPSBhc0VsZW1lbnQocXVlcnlTZWxlY3RvckV4dChlbHQsIHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUmV0YXJnZXQnKSkpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtUmVzd2FwOi9pKSkge1xuICAgICAgc3dhcE92ZXJyaWRlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdIWC1SZXN3YXAnKVxuICAgIH1cblxuICAgIHZhciBzZXJ2ZXJSZXNwb25zZSA9IHhoci5yZXNwb25zZVxuICAgIC8qKiBAdHlwZSBIdG14QmVmb3JlU3dhcERldGFpbHMgKi9cbiAgICB2YXIgYmVmb3JlU3dhcERldGFpbHMgPSBtZXJnZU9iamVjdHMoe1xuICAgICAgc2hvdWxkU3dhcCxcbiAgICAgIHNlcnZlclJlc3BvbnNlLFxuICAgICAgaXNFcnJvcixcbiAgICAgIGlnbm9yZVRpdGxlLFxuICAgICAgc2VsZWN0T3ZlcnJpZGVcbiAgICB9LCByZXNwb25zZUluZm8pXG5cbiAgICBpZiAocmVzcG9uc2VIYW5kbGluZy5ldmVudCAmJiAhdHJpZ2dlckV2ZW50KHRhcmdldCwgcmVzcG9uc2VIYW5kbGluZy5ldmVudCwgYmVmb3JlU3dhcERldGFpbHMpKSByZXR1cm5cblxuICAgIGlmICghdHJpZ2dlckV2ZW50KHRhcmdldCwgJ2h0bXg6YmVmb3JlU3dhcCcsIGJlZm9yZVN3YXBEZXRhaWxzKSkgcmV0dXJuXG5cbiAgICB0YXJnZXQgPSBiZWZvcmVTd2FwRGV0YWlscy50YXJnZXQgLy8gYWxsb3cgcmUtdGFyZ2V0aW5nXG4gICAgc2VydmVyUmVzcG9uc2UgPSBiZWZvcmVTd2FwRGV0YWlscy5zZXJ2ZXJSZXNwb25zZSAvLyBhbGxvdyB1cGRhdGluZyBjb250ZW50XG4gICAgaXNFcnJvciA9IGJlZm9yZVN3YXBEZXRhaWxzLmlzRXJyb3IgLy8gYWxsb3cgdXBkYXRpbmcgZXJyb3JcbiAgICBpZ25vcmVUaXRsZSA9IGJlZm9yZVN3YXBEZXRhaWxzLmlnbm9yZVRpdGxlIC8vIGFsbG93IHVwZGF0aW5nIGlnbm9yaW5nIHRpdGxlXG4gICAgc2VsZWN0T3ZlcnJpZGUgPSBiZWZvcmVTd2FwRGV0YWlscy5zZWxlY3RPdmVycmlkZSAvLyBhbGxvdyB1cGRhdGluZyBzZWxlY3Qgb3ZlcnJpZGVcblxuICAgIHJlc3BvbnNlSW5mby50YXJnZXQgPSB0YXJnZXQgLy8gTWFrZSB1cGRhdGVkIHRhcmdldCBhdmFpbGFibGUgdG8gcmVzcG9uc2UgZXZlbnRzXG4gICAgcmVzcG9uc2VJbmZvLmZhaWxlZCA9IGlzRXJyb3IgLy8gTWFrZSBmYWlsZWQgcHJvcGVydHkgYXZhaWxhYmxlIHRvIHJlc3BvbnNlIGV2ZW50c1xuICAgIHJlc3BvbnNlSW5mby5zdWNjZXNzZnVsID0gIWlzRXJyb3IgLy8gTWFrZSBzdWNjZXNzZnVsIHByb3BlcnR5IGF2YWlsYWJsZSB0byByZXNwb25zZSBldmVudHNcblxuICAgIGlmIChiZWZvcmVTd2FwRGV0YWlscy5zaG91bGRTd2FwKSB7XG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjg2KSB7XG4gICAgICAgIGNhbmNlbFBvbGxpbmcoZWx0KVxuICAgICAgfVxuXG4gICAgICB3aXRoRXh0ZW5zaW9ucyhlbHQsIGZ1bmN0aW9uKGV4dGVuc2lvbikge1xuICAgICAgICBzZXJ2ZXJSZXNwb25zZSA9IGV4dGVuc2lvbi50cmFuc2Zvcm1SZXNwb25zZShzZXJ2ZXJSZXNwb25zZSwgeGhyLCBlbHQpXG4gICAgICB9KVxuXG4gICAgICAvLyBTYXZlIGN1cnJlbnQgcGFnZSBpZiB0aGVyZSB3aWxsIGJlIGEgaGlzdG9yeSB1cGRhdGVcbiAgICAgIGlmIChoaXN0b3J5VXBkYXRlLnR5cGUpIHtcbiAgICAgICAgc2F2ZUN1cnJlbnRQYWdlVG9IaXN0b3J5KClcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1SZXN3YXA6L2kpKSB7XG4gICAgICAgIHN3YXBPdmVycmlkZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUmVzd2FwJylcbiAgICAgIH1cbiAgICAgIHZhciBzd2FwU3BlYyA9IGdldFN3YXBTcGVjaWZpY2F0aW9uKGVsdCwgc3dhcE92ZXJyaWRlKVxuXG4gICAgICBpZiAoIXN3YXBTcGVjLmhhc093blByb3BlcnR5KCdpZ25vcmVUaXRsZScpKSB7XG4gICAgICAgIHN3YXBTcGVjLmlnbm9yZVRpdGxlID0gaWdub3JlVGl0bGVcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoaHRteC5jb25maWcuc3dhcHBpbmdDbGFzcylcblxuICAgICAgLy8gb3B0aW9uYWwgdHJhbnNpdGlvbiBBUEkgcHJvbWlzZSBjYWxsYmFja3NcbiAgICAgIGxldCBzZXR0bGVSZXNvbHZlID0gbnVsbFxuICAgICAgbGV0IHNldHRsZVJlamVjdCA9IG51bGxcblxuICAgICAgaWYgKHJlc3BvbnNlSW5mb1NlbGVjdCkge1xuICAgICAgICBzZWxlY3RPdmVycmlkZSA9IHJlc3BvbnNlSW5mb1NlbGVjdFxuICAgICAgfVxuXG4gICAgICBpZiAoaGFzSGVhZGVyKHhociwgL0hYLVJlc2VsZWN0Oi9pKSkge1xuICAgICAgICBzZWxlY3RPdmVycmlkZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignSFgtUmVzZWxlY3QnKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RPT0IgPSBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtc2VsZWN0LW9vYicpXG4gICAgICBjb25zdCBzZWxlY3QgPSBnZXRDbG9zZXN0QXR0cmlidXRlVmFsdWUoZWx0LCAnaHgtc2VsZWN0JylcblxuICAgICAgbGV0IGRvU3dhcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIGlmIHdlIG5lZWQgdG8gc2F2ZSBoaXN0b3J5LCBkbyBzbywgYmVmb3JlIHN3YXBwaW5nIHNvIHRoYXQgcmVsYXRpdmUgcmVzb3VyY2VzIGhhdmUgdGhlIGNvcnJlY3QgYmFzZSBVUkxcbiAgICAgICAgICBpZiAoaGlzdG9yeVVwZGF0ZS50eXBlKSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpiZWZvcmVIaXN0b3J5VXBkYXRlJywgbWVyZ2VPYmplY3RzKHsgaGlzdG9yeTogaGlzdG9yeVVwZGF0ZSB9LCByZXNwb25zZUluZm8pKVxuICAgICAgICAgICAgaWYgKGhpc3RvcnlVcGRhdGUudHlwZSA9PT0gJ3B1c2gnKSB7XG4gICAgICAgICAgICAgIHB1c2hVcmxJbnRvSGlzdG9yeShoaXN0b3J5VXBkYXRlLnBhdGgpXG4gICAgICAgICAgICAgIHRyaWdnZXJFdmVudChnZXREb2N1bWVudCgpLmJvZHksICdodG14OnB1c2hlZEludG9IaXN0b3J5JywgeyBwYXRoOiBoaXN0b3J5VXBkYXRlLnBhdGggfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlcGxhY2VVcmxJbkhpc3RvcnkoaGlzdG9yeVVwZGF0ZS5wYXRoKVxuICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoZ2V0RG9jdW1lbnQoKS5ib2R5LCAnaHRteDpyZXBsYWNlZEluSGlzdG9yeScsIHsgcGF0aDogaGlzdG9yeVVwZGF0ZS5wYXRoIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3dhcCh0YXJnZXQsIHNlcnZlclJlc3BvbnNlLCBzd2FwU3BlYywge1xuICAgICAgICAgICAgc2VsZWN0OiBzZWxlY3RPdmVycmlkZSB8fCBzZWxlY3QsXG4gICAgICAgICAgICBzZWxlY3RPT0IsXG4gICAgICAgICAgICBldmVudEluZm86IHJlc3BvbnNlSW5mbyxcbiAgICAgICAgICAgIGFuY2hvcjogcmVzcG9uc2VJbmZvLnBhdGhJbmZvLmFuY2hvcixcbiAgICAgICAgICAgIGNvbnRleHRFbGVtZW50OiBlbHQsXG4gICAgICAgICAgICBhZnRlclN3YXBDYWxsYmFjazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmIChoYXNIZWFkZXIoeGhyLCAvSFgtVHJpZ2dlci1BZnRlci1Td2FwOi9pKSkge1xuICAgICAgICAgICAgICAgIGxldCBmaW5hbEVsdCA9IGVsdFxuICAgICAgICAgICAgICAgIGlmICghYm9keUNvbnRhaW5zKGVsdCkpIHtcbiAgICAgICAgICAgICAgICAgIGZpbmFsRWx0ID0gZ2V0RG9jdW1lbnQoKS5ib2R5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZVRyaWdnZXJIZWFkZXIoeGhyLCAnSFgtVHJpZ2dlci1BZnRlci1Td2FwJywgZmluYWxFbHQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZnRlclNldHRsZUNhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKGhhc0hlYWRlcih4aHIsIC9IWC1UcmlnZ2VyLUFmdGVyLVNldHRsZTovaSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmluYWxFbHQgPSBlbHRcbiAgICAgICAgICAgICAgICBpZiAoIWJvZHlDb250YWlucyhlbHQpKSB7XG4gICAgICAgICAgICAgICAgICBmaW5hbEVsdCA9IGdldERvY3VtZW50KCkuYm9keVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoYW5kbGVUcmlnZ2VySGVhZGVyKHhociwgJ0hYLVRyaWdnZXItQWZ0ZXItU2V0dGxlJywgZmluYWxFbHQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbWF5YmVDYWxsKHNldHRsZVJlc29sdmUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRyaWdnZXJFcnJvckV2ZW50KGVsdCwgJ2h0bXg6c3dhcEVycm9yJywgcmVzcG9uc2VJbmZvKVxuICAgICAgICAgIG1heWJlQ2FsbChzZXR0bGVSZWplY3QpXG4gICAgICAgICAgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBzaG91bGRUcmFuc2l0aW9uID0gaHRteC5jb25maWcuZ2xvYmFsVmlld1RyYW5zaXRpb25zXG4gICAgICBpZiAoc3dhcFNwZWMuaGFzT3duUHJvcGVydHkoJ3RyYW5zaXRpb24nKSkge1xuICAgICAgICBzaG91bGRUcmFuc2l0aW9uID0gc3dhcFNwZWMudHJhbnNpdGlvblxuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkVHJhbnNpdGlvbiAmJlxuICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoZWx0LCAnaHRteDpiZWZvcmVUcmFuc2l0aW9uJywgcmVzcG9uc2VJbmZvKSAmJlxuICAgICAgICAgICAgICB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBleHBlcmltZW50YWwgZmVhdHVyZSBhdG1cbiAgICAgICAgICAgICAgZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbikge1xuICAgICAgICBjb25zdCBzZXR0bGVQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24oX3Jlc29sdmUsIF9yZWplY3QpIHtcbiAgICAgICAgICBzZXR0bGVSZXNvbHZlID0gX3Jlc29sdmVcbiAgICAgICAgICBzZXR0bGVSZWplY3QgPSBfcmVqZWN0XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHdyYXAgdGhlIG9yaWdpbmFsIGRvU3dhcCgpIGluIGEgY2FsbCB0byBzdGFydFZpZXdUcmFuc2l0aW9uKClcbiAgICAgICAgY29uc3QgaW5uZXJEb1N3YXAgPSBkb1N3YXBcbiAgICAgICAgZG9Td2FwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBleHBlcmltZW50YWwgZmVhdHVyZSBhdG1cbiAgICAgICAgICBkb2N1bWVudC5zdGFydFZpZXdUcmFuc2l0aW9uKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5uZXJEb1N3YXAoKVxuICAgICAgICAgICAgcmV0dXJuIHNldHRsZVByb21pc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2FwU3BlYy5zd2FwRGVsYXkgPiAwKSB7XG4gICAgICAgIGdldFdpbmRvdygpLnNldFRpbWVvdXQoZG9Td2FwLCBzd2FwU3BlYy5zd2FwRGVsYXkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb1N3YXAoKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNFcnJvcikge1xuICAgICAgdHJpZ2dlckVycm9yRXZlbnQoZWx0LCAnaHRteDpyZXNwb25zZUVycm9yJywgbWVyZ2VPYmplY3RzKHsgZXJyb3I6ICdSZXNwb25zZSBTdGF0dXMgRXJyb3IgQ29kZSAnICsgeGhyLnN0YXR1cyArICcgZnJvbSAnICsgcmVzcG9uc2VJbmZvLnBhdGhJbmZvLnJlcXVlc3RQYXRoIH0sIHJlc3BvbnNlSW5mbykpXG4gICAgfVxuICB9XG5cbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gRXh0ZW5zaW9ucyBBUElcbiAgLy89ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvKiogQHR5cGUge09iamVjdDxzdHJpbmcsIEh0bXhFeHRlbnNpb24+fSAqL1xuICBjb25zdCBleHRlbnNpb25zID0ge31cblxuICAvKipcbiAgICogZXh0ZW5zaW9uQmFzZSBkZWZpbmVzIHRoZSBkZWZhdWx0IGZ1bmN0aW9ucyBmb3IgYWxsIGV4dGVuc2lvbnMuXG4gICAqIEByZXR1cm5zIHtIdG14RXh0ZW5zaW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZXh0ZW5zaW9uQmFzZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdDogZnVuY3Rpb24oYXBpKSB7IHJldHVybiBudWxsIH0sXG4gICAgICBnZXRTZWxlY3RvcnM6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbnVsbCB9LFxuICAgICAgb25FdmVudDogZnVuY3Rpb24obmFtZSwgZXZ0KSB7IHJldHVybiB0cnVlIH0sXG4gICAgICB0cmFuc2Zvcm1SZXNwb25zZTogZnVuY3Rpb24odGV4dCwgeGhyLCBlbHQpIHsgcmV0dXJuIHRleHQgfSxcbiAgICAgIGlzSW5saW5lU3dhcDogZnVuY3Rpb24oc3dhcFN0eWxlKSB7IHJldHVybiBmYWxzZSB9LFxuICAgICAgaGFuZGxlU3dhcDogZnVuY3Rpb24oc3dhcFN0eWxlLCB0YXJnZXQsIGZyYWdtZW50LCBzZXR0bGVJbmZvKSB7IHJldHVybiBmYWxzZSB9LFxuICAgICAgZW5jb2RlUGFyYW1ldGVyczogZnVuY3Rpb24oeGhyLCBwYXJhbWV0ZXJzLCBlbHQpIHsgcmV0dXJuIG51bGwgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBkZWZpbmVFeHRlbnNpb24gaW5pdGlhbGl6ZXMgdGhlIGV4dGVuc2lvbiBhbmQgYWRkcyBpdCB0byB0aGUgaHRteCByZWdpc3RyeVxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvYXBpLyNkZWZpbmVFeHRlbnNpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIGV4dGVuc2lvbiBuYW1lXG4gICAqIEBwYXJhbSB7SHRteEV4dGVuc2lvbn0gZXh0ZW5zaW9uIHRoZSBleHRlbnNpb24gZGVmaW5pdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gZGVmaW5lRXh0ZW5zaW9uKG5hbWUsIGV4dGVuc2lvbikge1xuICAgIGlmIChleHRlbnNpb24uaW5pdCkge1xuICAgICAgZXh0ZW5zaW9uLmluaXQoaW50ZXJuYWxBUEkpXG4gICAgfVxuICAgIGV4dGVuc2lvbnNbbmFtZV0gPSBtZXJnZU9iamVjdHMoZXh0ZW5zaW9uQmFzZSgpLCBleHRlbnNpb24pXG4gIH1cblxuICAvKipcbiAgICogcmVtb3ZlRXh0ZW5zaW9uIHJlbW92ZXMgYW4gZXh0ZW5zaW9uIGZyb20gdGhlIGh0bXggcmVnaXN0cnlcbiAgICpcbiAgICogQHNlZSBodHRwczovL2h0bXgub3JnL2FwaS8jcmVtb3ZlRXh0ZW5zaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVFeHRlbnNpb24obmFtZSkge1xuICAgIGRlbGV0ZSBleHRlbnNpb25zW25hbWVdXG4gIH1cblxuICAvKipcbiAgICogZ2V0RXh0ZW5zaW9ucyBzZWFyY2hlcyB1cCB0aGUgRE9NIHRyZWUgdG8gcmV0dXJuIGFsbCBleHRlbnNpb25zIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gYSBnaXZlbiBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWx0XG4gICAqIEBwYXJhbSB7SHRteEV4dGVuc2lvbltdPX0gZXh0ZW5zaW9uc1RvUmV0dXJuXG4gICAqIEBwYXJhbSB7c3RyaW5nW109fSBleHRlbnNpb25zVG9JZ25vcmVcbiAgICogQHJldHVybnMge0h0bXhFeHRlbnNpb25bXX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEV4dGVuc2lvbnMoZWx0LCBleHRlbnNpb25zVG9SZXR1cm4sIGV4dGVuc2lvbnNUb0lnbm9yZSkge1xuICAgIGlmIChleHRlbnNpb25zVG9SZXR1cm4gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBleHRlbnNpb25zVG9SZXR1cm4gPSBbXVxuICAgIH1cbiAgICBpZiAoZWx0ID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV4dGVuc2lvbnNUb1JldHVyblxuICAgIH1cbiAgICBpZiAoZXh0ZW5zaW9uc1RvSWdub3JlID09IHVuZGVmaW5lZCkge1xuICAgICAgZXh0ZW5zaW9uc1RvSWdub3JlID0gW11cbiAgICB9XG4gICAgY29uc3QgZXh0ZW5zaW9uc0ZvckVsZW1lbnQgPSBnZXRBdHRyaWJ1dGVWYWx1ZShlbHQsICdoeC1leHQnKVxuICAgIGlmIChleHRlbnNpb25zRm9yRWxlbWVudCkge1xuICAgICAgZm9yRWFjaChleHRlbnNpb25zRm9yRWxlbWVudC5zcGxpdCgnLCcpLCBmdW5jdGlvbihleHRlbnNpb25OYW1lKSB7XG4gICAgICAgIGV4dGVuc2lvbk5hbWUgPSBleHRlbnNpb25OYW1lLnJlcGxhY2UoLyAvZywgJycpXG4gICAgICAgIGlmIChleHRlbnNpb25OYW1lLnNsaWNlKDAsIDcpID09ICdpZ25vcmU6Jykge1xuICAgICAgICAgIGV4dGVuc2lvbnNUb0lnbm9yZS5wdXNoKGV4dGVuc2lvbk5hbWUuc2xpY2UoNykpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4dGVuc2lvbnNUb0lnbm9yZS5pbmRleE9mKGV4dGVuc2lvbk5hbWUpIDwgMCkge1xuICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbZXh0ZW5zaW9uTmFtZV1cbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uICYmIGV4dGVuc2lvbnNUb1JldHVybi5pbmRleE9mKGV4dGVuc2lvbikgPCAwKSB7XG4gICAgICAgICAgICBleHRlbnNpb25zVG9SZXR1cm4ucHVzaChleHRlbnNpb24pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gZ2V0RXh0ZW5zaW9ucyhhc0VsZW1lbnQocGFyZW50RWx0KGVsdCkpLCBleHRlbnNpb25zVG9SZXR1cm4sIGV4dGVuc2lvbnNUb0lnbm9yZSlcbiAgfVxuXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEluaXRpYWxpemF0aW9uXG4gIC8vPSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBpc1JlYWR5ID0gZmFsc2VcbiAgZ2V0RG9jdW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgaXNSZWFkeSA9IHRydWVcbiAgfSlcblxuICAvKipcbiAgICogRXhlY3V0ZSBhIGZ1bmN0aW9uIG5vdyBpZiBET01Db250ZW50TG9hZGVkIGhhcyBmaXJlZCwgb3RoZXJ3aXNlIGxpc3RlbiBmb3IgaXQuXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gdXNlcyBpc1JlYWR5IGJlY2F1c2UgdGhlcmUgaXMgbm8gcmVsaWFibGUgd2F5IHRvIGFzayB0aGUgYnJvd3NlciB3aGV0aGVyXG4gICAqIHRoZSBET01Db250ZW50TG9hZGVkIGV2ZW50IGhhcyBhbHJlYWR5IGJlZW4gZmlyZWQ7IHRoZXJlJ3MgYSBnYXAgYmV0d2VlbiBET01Db250ZW50TG9hZGVkXG4gICAqIGZpcmluZyBhbmQgcmVhZHlzdGF0ZT1jb21wbGV0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlYWR5KGZuKSB7XG4gICAgLy8gQ2hlY2tpbmcgcmVhZHlTdGF0ZSBoZXJlIGlzIGEgZmFpbHNhZmUgaW4gY2FzZSB0aGUgaHRteCBzY3JpcHQgdGFnIGVudGVyZWQgdGhlIERPTSBieVxuICAgIC8vIHNvbWUgbWVhbnMgb3RoZXIgdGhhbiB0aGUgaW5pdGlhbCBwYWdlIGxvYWQuXG4gICAgaWYgKGlzUmVhZHkgfHwgZ2V0RG9jdW1lbnQoKS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICBmbigpXG4gICAgfSBlbHNlIHtcbiAgICAgIGdldERvY3VtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydEluZGljYXRvclN0eWxlcygpIHtcbiAgICBpZiAoaHRteC5jb25maWcuaW5jbHVkZUluZGljYXRvclN0eWxlcyAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IG5vbmNlQXR0cmlidXRlID0gaHRteC5jb25maWcuaW5saW5lU3R5bGVOb25jZSA/IGAgbm9uY2U9XCIke2h0bXguY29uZmlnLmlubGluZVN0eWxlTm9uY2V9XCJgIDogJydcbiAgICAgIGdldERvY3VtZW50KCkuaGVhZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgICAgICc8c3R5bGUnICsgbm9uY2VBdHRyaWJ1dGUgKyAnPlxcXG4gICAgICAuJyArIGh0bXguY29uZmlnLmluZGljYXRvckNsYXNzICsgJ3tvcGFjaXR5OjB9XFxcbiAgICAgIC4nICsgaHRteC5jb25maWcucmVxdWVzdENsYXNzICsgJyAuJyArIGh0bXguY29uZmlnLmluZGljYXRvckNsYXNzICsgJ3tvcGFjaXR5OjE7IHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbjt9XFxcbiAgICAgIC4nICsgaHRteC5jb25maWcucmVxdWVzdENsYXNzICsgJy4nICsgaHRteC5jb25maWcuaW5kaWNhdG9yQ2xhc3MgKyAne29wYWNpdHk6MTsgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluO31cXFxuICAgICAgPC9zdHlsZT4nKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1ldGFDb25maWcoKSB7XG4gICAgLyoqIEB0eXBlIEhUTUxNZXRhRWxlbWVudCAqL1xuICAgIGNvbnN0IGVsZW1lbnQgPSBnZXREb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImh0bXgtY29uZmlnXCJdJylcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHBhcnNlSlNPTihlbGVtZW50LmNvbnRlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VNZXRhQ29uZmlnKCkge1xuICAgIGNvbnN0IG1ldGFDb25maWcgPSBnZXRNZXRhQ29uZmlnKClcbiAgICBpZiAobWV0YUNvbmZpZykge1xuICAgICAgaHRteC5jb25maWcgPSBtZXJnZU9iamVjdHMoaHRteC5jb25maWcsIG1ldGFDb25maWcpXG4gICAgfVxuICB9XG5cbiAgLy8gaW5pdGlhbGl6ZSB0aGUgZG9jdW1lbnRcbiAgcmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgbWVyZ2VNZXRhQ29uZmlnKClcbiAgICBpbnNlcnRJbmRpY2F0b3JTdHlsZXMoKVxuICAgIGxldCBib2R5ID0gZ2V0RG9jdW1lbnQoKS5ib2R5XG4gICAgcHJvY2Vzc05vZGUoYm9keSlcbiAgICBjb25zdCByZXN0b3JlZEVsdHMgPSBnZXREb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIltoeC10cmlnZ2VyPSdyZXN0b3JlZCddLFtkYXRhLWh4LXRyaWdnZXI9J3Jlc3RvcmVkJ11cIlxuICAgIClcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWJvcnQnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXRcbiAgICAgIGNvbnN0IGludGVybmFsRGF0YSA9IGdldEludGVybmFsRGF0YSh0YXJnZXQpXG4gICAgICBpZiAoaW50ZXJuYWxEYXRhICYmIGludGVybmFsRGF0YS54aHIpIHtcbiAgICAgICAgaW50ZXJuYWxEYXRhLnhoci5hYm9ydCgpXG4gICAgICB9XG4gICAgfSlcbiAgICAvKiogQHR5cGUgeyhldjogUG9wU3RhdGVFdmVudCkgPT4gYW55fSAqL1xuICAgIGNvbnN0IG9yaWdpbmFsUG9wc3RhdGUgPSB3aW5kb3cub25wb3BzdGF0ZSA/IHdpbmRvdy5vbnBvcHN0YXRlLmJpbmQod2luZG93KSA6IG51bGxcbiAgICAvKiogQHR5cGUgeyhldjogUG9wU3RhdGVFdmVudCkgPT4gYW55fSAqL1xuICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5zdGF0ZSAmJiBldmVudC5zdGF0ZS5odG14KSB7XG4gICAgICAgIHJlc3RvcmVIaXN0b3J5KClcbiAgICAgICAgZm9yRWFjaChyZXN0b3JlZEVsdHMsIGZ1bmN0aW9uKGVsdCkge1xuICAgICAgICAgIHRyaWdnZXJFdmVudChlbHQsICdodG14OnJlc3RvcmVkJywge1xuICAgICAgICAgICAgZG9jdW1lbnQ6IGdldERvY3VtZW50KCksXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnRcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9yaWdpbmFsUG9wc3RhdGUpIHtcbiAgICAgICAgICBvcmlnaW5hbFBvcHN0YXRlKGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGdldFdpbmRvdygpLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB0cmlnZ2VyRXZlbnQoYm9keSwgJ2h0bXg6bG9hZCcsIHt9KSAvLyBnaXZlIHJlYWR5IGhhbmRsZXJzIGEgY2hhbmNlIHRvIGxvYWQgdXAgYmVmb3JlIGZpcmluZyB0aGlzIGV2ZW50XG4gICAgICBib2R5ID0gbnVsbCAvLyBraWxsIHJlZmVyZW5jZSBmb3IgZ2NcbiAgICB9LCAwKVxuICB9KVxuXG4gIHJldHVybiBodG14XG59KSgpXG5cbi8qKiBAdHlwZWRlZiB7J2dldCd8J2hlYWQnfCdwb3N0J3wncHV0J3wnZGVsZXRlJ3wnY29ubmVjdCd8J29wdGlvbnMnfCd0cmFjZSd8J3BhdGNoJ30gSHR0cFZlcmIgKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTd2FwT3B0aW9uc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFtzZWxlY3RdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3NlbGVjdE9PQl1cbiAqIEBwcm9wZXJ0eSB7Kn0gW2V2ZW50SW5mb11cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbYW5jaG9yXVxuICogQHByb3BlcnR5IHtFbGVtZW50fSBbY29udGV4dEVsZW1lbnRdXG4gKiBAcHJvcGVydHkge3N3YXBDYWxsYmFja30gW2FmdGVyU3dhcENhbGxiYWNrXVxuICogQHByb3BlcnR5IHtzd2FwQ2FsbGJhY2t9IFthZnRlclNldHRsZUNhbGxiYWNrXVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIHN3YXBDYWxsYmFja1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeydpbm5lckhUTUwnIHwgJ291dGVySFRNTCcgfCAnYmVmb3JlYmVnaW4nIHwgJ2FmdGVyYmVnaW4nIHwgJ2JlZm9yZWVuZCcgfCAnYWZ0ZXJlbmQnIHwgJ2RlbGV0ZScgfCAnbm9uZScgfCBzdHJpbmd9IEh0bXhTd2FwU3R5bGVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIEh0bXhTd2FwU3BlY2lmaWNhdGlvblxuICogQHByb3BlcnR5IHtIdG14U3dhcFN0eWxlfSBzd2FwU3R5bGVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzd2FwRGVsYXlcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzZXR0bGVEZWxheVxuICogQHByb3BlcnR5IHtib29sZWFufSBbdHJhbnNpdGlvbl1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2lnbm9yZVRpdGxlXVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtoZWFkXVxuICogQHByb3BlcnR5IHsndG9wJyB8ICdib3R0b20nfSBbc2Nyb2xsXVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtzY3JvbGxUYXJnZXRdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3Nob3ddXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3Nob3dUYXJnZXRdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtmb2N1c1Njcm9sbF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoKHRoaXM6Tm9kZSwgZXZ0OkV2ZW50KSA9PiBib29sZWFuKSAmIHtzb3VyY2U6IHN0cmluZ319IENvbmRpdGlvbmFsRnVuY3Rpb25cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEh0bXhUcmlnZ2VyU3BlY2lmaWNhdGlvblxuICogQHByb3BlcnR5IHtzdHJpbmd9IHRyaWdnZXJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcG9sbEludGVydmFsXVxuICogQHByb3BlcnR5IHtDb25kaXRpb25hbEZ1bmN0aW9ufSBbZXZlbnRGaWx0ZXJdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtjaGFuZ2VkXVxuICogQHByb3BlcnR5IHtib29sZWFufSBbb25jZV1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2NvbnN1bWVdXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2RlbGF5XVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtmcm9tXVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFt0YXJnZXRdXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3Rocm90dGxlXVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtxdWV1ZV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcm9vdF1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbdGhyZXNob2xkXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge3tlbHQ6IEVsZW1lbnQsIG1lc3NhZ2U6IHN0cmluZywgdmFsaWRpdHk6IFZhbGlkaXR5U3RhdGV9fSBIdG14RWxlbWVudFZhbGlkYXRpb25FcnJvclxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IEh0bXhIZWFkZXJTcGVjaWZpY2F0aW9uXG4gKiBAcHJvcGVydHkgeyd0cnVlJ30gSFgtUmVxdWVzdFxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gSFgtVHJpZ2dlclxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gSFgtVHJpZ2dlci1OYW1lXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBIWC1UYXJnZXRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBIWC1DdXJyZW50LVVSTFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtIWC1Qcm9tcHRdXG4gKiBAcHJvcGVydHkgeyd0cnVlJ30gW0hYLUJvb3N0ZWRdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW0NvbnRlbnQtVHlwZV1cbiAqIEBwcm9wZXJ0eSB7J3RydWUnfSBbSFgtSGlzdG9yeS1SZXN0b3JlLVJlcXVlc3RdXG4gKi9cblxuLyoqIEB0eXBlZGVmIEh0bXhBamF4SGVscGVyQ29udGV4dFxuICogQHByb3BlcnR5IHtFbGVtZW50fHN0cmluZ30gW3NvdXJjZV1cbiAqIEBwcm9wZXJ0eSB7RXZlbnR9IFtldmVudF1cbiAqIEBwcm9wZXJ0eSB7SHRteEFqYXhIYW5kbGVyfSBbaGFuZGxlcl1cbiAqIEBwcm9wZXJ0eSB7RWxlbWVudHxzdHJpbmd9IFt0YXJnZXRdXG4gKiBAcHJvcGVydHkge0h0bXhTd2FwU3R5bGV9IFtzd2FwXVxuICogQHByb3BlcnR5IHtPYmplY3R8Rm9ybURhdGF9IFt2YWx1ZXNdXG4gKiBAcHJvcGVydHkge1JlY29yZDxzdHJpbmcsc3RyaW5nPn0gW2hlYWRlcnNdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3NlbGVjdF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEh0bXhSZXF1ZXN0Q29uZmlnXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGJvb3N0ZWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdXNlVXJsUGFyYW1zXG4gKiBAcHJvcGVydHkge0Zvcm1EYXRhfSBmb3JtRGF0YVxuICogQHByb3BlcnR5IHtPYmplY3R9IHBhcmFtZXRlcnMgZm9ybURhdGEgcHJveHlcbiAqIEBwcm9wZXJ0eSB7Rm9ybURhdGF9IHVuZmlsdGVyZWRGb3JtRGF0YVxuICogQHByb3BlcnR5IHtPYmplY3R9IHVuZmlsdGVyZWRQYXJhbWV0ZXJzIHVuZmlsdGVyZWRGb3JtRGF0YSBwcm94eVxuICogQHByb3BlcnR5IHtIdG14SGVhZGVyU3BlY2lmaWNhdGlvbn0gaGVhZGVyc1xuICogQHByb3BlcnR5IHtFbGVtZW50fSB0YXJnZXRcbiAqIEBwcm9wZXJ0eSB7SHR0cFZlcmJ9IHZlcmJcbiAqIEBwcm9wZXJ0eSB7SHRteEVsZW1lbnRWYWxpZGF0aW9uRXJyb3JbXX0gZXJyb3JzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHdpdGhDcmVkZW50aWFsc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHRpbWVvdXRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBwYXRoXG4gKiBAcHJvcGVydHkge0V2ZW50fSB0cmlnZ2VyaW5nRXZlbnRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEh0bXhSZXNwb25zZUluZm9cbiAqIEBwcm9wZXJ0eSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICogQHByb3BlcnR5IHtFbGVtZW50fSB0YXJnZXRcbiAqIEBwcm9wZXJ0eSB7SHRteFJlcXVlc3RDb25maWd9IHJlcXVlc3RDb25maWdcbiAqIEBwcm9wZXJ0eSB7SHRteEFqYXhFdGN9IGV0Y1xuICogQHByb3BlcnR5IHtib29sZWFufSBib29zdGVkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc2VsZWN0XG4gKiBAcHJvcGVydHkge3tyZXF1ZXN0UGF0aDogc3RyaW5nLCBmaW5hbFJlcXVlc3RQYXRoOiBzdHJpbmcsIHJlc3BvbnNlUGF0aDogc3RyaW5nfG51bGwsIGFuY2hvcjogc3RyaW5nfX0gcGF0aEluZm9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2ZhaWxlZF1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3N1Y2Nlc3NmdWxdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBIdG14QWpheEV0Y1xuICogQHByb3BlcnR5IHtib29sZWFufSBbcmV0dXJuUHJvbWlzZV1cbiAqIEBwcm9wZXJ0eSB7SHRteEFqYXhIYW5kbGVyfSBbaGFuZGxlcl1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2VsZWN0XVxuICogQHByb3BlcnR5IHtFbGVtZW50fSBbdGFyZ2V0T3ZlcnJpZGVdXG4gKiBAcHJvcGVydHkge0h0bXhTd2FwU3R5bGV9IFtzd2FwT3ZlcnJpZGVdXG4gKiBAcHJvcGVydHkge1JlY29yZDxzdHJpbmcsc3RyaW5nPn0gW2hlYWRlcnNdXG4gKiBAcHJvcGVydHkge09iamVjdHxGb3JtRGF0YX0gW3ZhbHVlc11cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2NyZWRlbnRpYWxzXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0aW1lb3V0XVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gSHRteFJlc3BvbnNlSGFuZGxpbmdDb25maWdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY29kZV1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc3dhcFxuICogQHByb3BlcnR5IHtib29sZWFufSBbZXJyb3JdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtpZ25vcmVUaXRsZV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2VsZWN0XVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFt0YXJnZXRdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3N3YXBPdmVycmlkZV1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZXZlbnRdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7SHRteFJlc3BvbnNlSW5mbyAmIHtzaG91bGRTd2FwOiBib29sZWFuLCBzZXJ2ZXJSZXNwb25zZTogYW55LCBpc0Vycm9yOiBib29sZWFuLCBpZ25vcmVUaXRsZTogYm9vbGVhbiwgc2VsZWN0T3ZlcnJpZGU6c3RyaW5nfX0gSHRteEJlZm9yZVN3YXBEZXRhaWxzXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgSHRteEFqYXhIYW5kbGVyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsdFxuICogQHBhcmFtIHtIdG14UmVzcG9uc2VJbmZvfSByZXNwb25zZUluZm9cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoKCkgPT4gdm9pZCl9IEh0bXhTZXR0bGVUYXNrXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBIdG14U2V0dGxlSW5mb1xuICogQHByb3BlcnR5IHtIdG14U2V0dGxlVGFza1tdfSB0YXNrc1xuICogQHByb3BlcnR5IHtFbGVtZW50W119IGVsdHNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbdGl0bGVdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBIdG14RXh0ZW5zaW9uXG4gKiBAc2VlIGh0dHBzOi8vaHRteC5vcmcvZXh0ZW5zaW9ucy8jZGVmaW5pbmdcbiAqIEBwcm9wZXJ0eSB7KGFwaTogYW55KSA9PiB2b2lkfSBpbml0XG4gKiBAcHJvcGVydHkgeyhuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudHxDdXN0b21FdmVudCkgPT4gYm9vbGVhbn0gb25FdmVudFxuICogQHByb3BlcnR5IHsodGV4dDogc3RyaW5nLCB4aHI6IFhNTEh0dHBSZXF1ZXN0LCBlbHQ6IEVsZW1lbnQpID0+IHN0cmluZ30gdHJhbnNmb3JtUmVzcG9uc2VcbiAqIEBwcm9wZXJ0eSB7KHN3YXBTdHlsZTogSHRteFN3YXBTdHlsZSkgPT4gYm9vbGVhbn0gaXNJbmxpbmVTd2FwXG4gKiBAcHJvcGVydHkgeyhzd2FwU3R5bGU6IEh0bXhTd2FwU3R5bGUsIHRhcmdldDogRWxlbWVudCwgZnJhZ21lbnQ6IE5vZGUsIHNldHRsZUluZm86IEh0bXhTZXR0bGVJbmZvKSA9PiBib29sZWFufSBoYW5kbGVTd2FwXG4gKiBAcHJvcGVydHkgeyh4aHI6IFhNTEh0dHBSZXF1ZXN0LCBwYXJhbWV0ZXJzOiBGb3JtRGF0YSwgZWx0OiBFbGVtZW50KSA9PiAqfHN0cmluZ3xudWxsfSBlbmNvZGVQYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGh0bXhcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJodG14IiwicmVxdWlyZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiXSwic291cmNlUm9vdCI6IiJ9