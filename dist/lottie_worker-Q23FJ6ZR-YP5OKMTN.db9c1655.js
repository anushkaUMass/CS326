// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dwb8D":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "96634a5fdb9c1655";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gDD4W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>yt) //# sourceMappingURL=out.js.map
;
var _chunkHDDX7F4AMjs = require("./chunk-HDDX7F4A.mjs");
var _chunkZWH2ESXTMjs = require("./chunk-ZWH2ESXT.mjs");
var dt = (0, _chunkHDDX7F4AMjs.a)((exports, module)=>{
    typeof navigator < "u" && function(t, e) {
        typeof define == "function" && define.amd ? define(function() {
            return e(t);
        }) : typeof module == "object" && module.exports ? module.exports = e(t) : (t.lottie = e(t), t.bodymovin = t.lottie);
    }(self || {}, function(window) {
        function workerContent() {
            function extendPrototype(t, e) {
                var i, r = t.length, a;
                for(i = 0; i < r; i += 1){
                    a = t[i].prototype;
                    for(var s in a)Object.prototype.hasOwnProperty.call(a, s) && (e.prototype[s] = a[s]);
                }
            }
            function ProxyElement(t, e) {
                this._state = "init", this._isDirty = !1, this._isProxy = !0, this._changedStyles = [], this._changedAttributes = [], this._changedElements = [], this._textContent = null, this.type = t, this.namespace = e, this.children = [], localIdCounter += 1, this.attributes = {
                    id: "l_d_" + localIdCounter
                }, this.style = new Style(this);
            }
            ProxyElement.prototype = {
                appendChild: function(t) {
                    t.parentNode = this, this.children.push(t), this._isDirty = !0, this._changedElements.push([
                        t,
                        this.attributes.id
                    ]);
                },
                insertBefore: function(t, e) {
                    for(var i = this.children, r = 0; r < i.length; r += 1)if (i[r] === e) {
                        i.splice(r, 0, t), this._isDirty = !0, this._changedElements.push([
                            t,
                            this.attributes.id,
                            e.attributes.id
                        ]);
                        return;
                    }
                    i.push(e);
                },
                setAttribute: function(t, e) {
                    this.attributes[t] = e, this._isDirty || (this._isDirty = !0), this._changedAttributes.push(t);
                },
                serialize: function() {
                    return {
                        type: this.type,
                        namespace: this.namespace,
                        style: this.style.serialize(),
                        attributes: this.attributes,
                        children: this.children.map(function(t) {
                            return t.serialize();
                        }),
                        textContent: this._textContent
                    };
                },
                addEventListener: function(t, e) {
                    setTimeout(e, 1);
                },
                setAttributeNS: function(t, e, i) {
                    this.attributes[e] = i, this._isDirty || (this._isDirty = !0), this._changedAttributes.push(e);
                }
            }, Object.defineProperty(ProxyElement.prototype, "textContent", {
                set: function(t) {
                    this._isDirty = !0, this._textContent = t;
                }
            });
            var localIdCounter = 0, animations = {}, styleProperties = [
                "width",
                "height",
                "display",
                "transform",
                "opacity",
                "contentVisibility",
                "mix-blend-mode"
            ];
            function convertArguments(t) {
                var e = [], i, r = t.length;
                for(i = 0; i < r; i += 1)e.push(t[i]);
                return e;
            }
            function Style(t) {
                this.element = t;
            }
            Style.prototype = {
                serialize: function() {
                    for(var t = {}, e = 0; e < styleProperties.length; e += 1){
                        var i = styleProperties[e], r = "_" + i;
                        r in this && (t[i] = this[r]);
                    }
                    return t;
                }
            }, styleProperties.forEach(function(t) {
                Object.defineProperty(Style.prototype, t, {
                    set: function(e) {
                        this.element._isDirty || (this.element._isDirty = !0), this.element._changedStyles.push(t);
                        var i = "_" + t;
                        this[i] = e;
                    },
                    get: function() {
                        var e = "_" + t;
                        return this[e];
                    }
                });
            });
            function CanvasContext(t) {
                this.element = t;
            }
            CanvasContext.prototype = {
                createRadialGradient: function() {
                    function t() {
                        e.stops.push(convertArguments(arguments));
                    }
                    var e = {
                        t: "rGradient",
                        a: convertArguments(arguments),
                        stops: []
                    };
                    return this.element.instructions.push(e), {
                        addColorStop: t
                    };
                },
                createLinearGradient: function() {
                    function t() {
                        e.stops.push(convertArguments(arguments));
                    }
                    var e = {
                        t: "lGradient",
                        a: convertArguments(arguments),
                        stops: []
                    };
                    return this.element.instructions.push(e), {
                        addColorStop: t
                    };
                }
            }, Object.defineProperties(CanvasContext.prototype, {
                canvas: {
                    enumerable: !0,
                    get: function() {
                        return this.element;
                    }
                }
            });
            var canvasContextMethods = [
                "fillRect",
                "setTransform",
                "drawImage",
                "beginPath",
                "moveTo",
                "save",
                "restore",
                "fillText",
                "setLineDash",
                "clearRect",
                "clip",
                "rect",
                "stroke",
                "fill",
                "closePath",
                "bezierCurveTo",
                "lineTo"
            ];
            canvasContextMethods.forEach(function(t) {
                CanvasContext.prototype[t] = function() {
                    this.element.instructions.push({
                        t,
                        a: convertArguments(arguments)
                    });
                };
            });
            var canvasContextProperties = [
                "globalAlpha",
                "strokeStyle",
                "fillStyle",
                "lineCap",
                "lineJoin",
                "lineWidth",
                "miterLimit",
                "lineDashOffset",
                "globalCompositeOperation"
            ];
            canvasContextProperties.forEach(function(t) {
                Object.defineProperty(CanvasContext.prototype, t, {
                    set: function(e) {
                        this.element.instructions.push({
                            t,
                            a: e
                        });
                    }
                });
            });
            function CanvasElement(t, e) {
                ProxyElement.call(this, t, e), this.instructions = [], this.width = 0, this.height = 0, this.context = new CanvasContext(this);
            }
            CanvasElement.prototype = {
                getContext: function() {
                    return this.context;
                },
                resetInstructions: function() {
                    this.instructions.length = 0;
                }
            }, extendPrototype([
                ProxyElement
            ], CanvasElement);
            function createElement(t, e) {
                return e === "canvas" ? new CanvasElement(e, t) : new ProxyElement(e, t);
            }
            var window = self, document1 = {
                createElementNS: function(t, e) {
                    return createElement(t, e);
                },
                createElement: function(t) {
                    return createElement("", t);
                },
                getElementsByTagName: function() {
                    return [];
                },
                body: createElement("", "body"),
                _isProxy: !0
            }, lottieInternal = function() {
                typeof navigator < "u" && function(t, e) {
                    typeof exports == "object" && typeof module < "u" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self, t.lottie = e());
                }(this, function() {
                    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999, setWebWorker = function(t) {
                        _useWebWorker = !!t;
                    }, getWebWorker = function() {
                        return _useWebWorker;
                    }, setLocationHref = function(t) {
                        locationHref = t;
                    }, getLocationHref = function() {
                        return locationHref;
                    };
                    function createTag(t) {
                        return document1.createElement(t);
                    }
                    function extendPrototype(t, e) {
                        var i, r = t.length, a;
                        for(i = 0; i < r; i += 1){
                            a = t[i].prototype;
                            for(var s in a)Object.prototype.hasOwnProperty.call(a, s) && (e.prototype[s] = a[s]);
                        }
                    }
                    function getDescriptor(t, e) {
                        return Object.getOwnPropertyDescriptor(t, e);
                    }
                    function createProxyFunction(t) {
                        function e() {}
                        return e.prototype = t, e;
                    }
                    var audioControllerFactory = function() {
                        function t(e) {
                            this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1;
                        }
                        return t.prototype = {
                            addAudio: function(e) {
                                this.audios.push(e);
                            },
                            pause: function() {
                                var e, i = this.audios.length;
                                for(e = 0; e < i; e += 1)this.audios[e].pause();
                            },
                            resume: function() {
                                var e, i = this.audios.length;
                                for(e = 0; e < i; e += 1)this.audios[e].resume();
                            },
                            setRate: function(e) {
                                var i, r = this.audios.length;
                                for(i = 0; i < r; i += 1)this.audios[i].setRate(e);
                            },
                            createAudio: function(e) {
                                return this.audioFactory ? this.audioFactory(e) : window.Howl ? new window.Howl({
                                    src: [
                                        e
                                    ]
                                }) : {
                                    isPlaying: !1,
                                    play: function() {
                                        this.isPlaying = !0;
                                    },
                                    seek: function() {
                                        this.isPlaying = !1;
                                    },
                                    playing: function() {},
                                    rate: function() {},
                                    setVolume: function() {}
                                };
                            },
                            setAudioFactory: function(e) {
                                this.audioFactory = e;
                            },
                            setVolume: function(e) {
                                this._volume = e, this._updateVolume();
                            },
                            mute: function() {
                                this._isMuted = !0, this._updateVolume();
                            },
                            unmute: function() {
                                this._isMuted = !1, this._updateVolume();
                            },
                            getVolume: function() {
                                return this._volume;
                            },
                            _updateVolume: function() {
                                var e, i = this.audios.length;
                                for(e = 0; e < i; e += 1)this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1));
                            }
                        }, function() {
                            return new t;
                        };
                    }(), createTypedArray = function() {
                        function t(i, r) {
                            var a = 0, s = [], n;
                            switch(i){
                                case "int16":
                                case "uint8c":
                                    n = 1;
                                    break;
                                default:
                                    n = 1.1;
                                    break;
                            }
                            for(a = 0; a < r; a += 1)s.push(n);
                            return s;
                        }
                        function e(i, r) {
                            return i === "float32" ? new Float32Array(r) : i === "int16" ? new Int16Array(r) : i === "uint8c" ? new Uint8ClampedArray(r) : t(i, r);
                        }
                        return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
                    }();
                    function createSizedArray(t) {
                        return Array.apply(null, {
                            length: t
                        });
                    }
                    function _typeof$6(t) {
                        "@babel/helpers - typeof";
                        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(e) {
                            return typeof e;
                        } : _typeof$6 = function(e) {
                            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, _typeof$6(t);
                    }
                    var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
                    (function() {
                        var t = [
                            "abs",
                            "acos",
                            "acosh",
                            "asin",
                            "asinh",
                            "atan",
                            "atanh",
                            "atan2",
                            "ceil",
                            "cbrt",
                            "expm1",
                            "clz32",
                            "cos",
                            "cosh",
                            "exp",
                            "floor",
                            "fround",
                            "hypot",
                            "imul",
                            "log",
                            "log1p",
                            "log2",
                            "log10",
                            "max",
                            "min",
                            "pow",
                            "random",
                            "round",
                            "sign",
                            "sin",
                            "sinh",
                            "sqrt",
                            "tan",
                            "tanh",
                            "trunc",
                            "E",
                            "LN10",
                            "LN2",
                            "LOG10E",
                            "LOG2E",
                            "PI",
                            "SQRT1_2",
                            "SQRT2"
                        ], e, i = t.length;
                        for(e = 0; e < i; e += 1)BMMath[t[e]] = Math[t[e]];
                    })(), BMMath.random = Math.random, BMMath.abs = function(t) {
                        var e = _typeof$6(t);
                        if (e === "object" && t.length) {
                            var i = createSizedArray(t.length), r, a = t.length;
                            for(r = 0; r < a; r += 1)i[r] = Math.abs(t[r]);
                            return i;
                        }
                        return Math.abs(t);
                    };
                    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;
                    function styleDiv(t) {
                        t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
                    }
                    function BMEnterFrameEvent(t, e, i, r) {
                        this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1;
                    }
                    function BMCompleteEvent(t, e) {
                        this.type = t, this.direction = e < 0 ? -1 : 1;
                    }
                    function BMCompleteLoopEvent(t, e, i, r) {
                        this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1;
                    }
                    function BMSegmentStartEvent(t, e, i) {
                        this.type = t, this.firstFrame = e, this.totalFrames = i;
                    }
                    function BMDestroyEvent(t, e) {
                        this.type = t, this.target = e;
                    }
                    function BMRenderFrameErrorEvent(t, e) {
                        this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
                    }
                    function BMConfigErrorEvent(t) {
                        this.type = "configError", this.nativeError = t;
                    }
                    var createElementID = function() {
                        var t = 0;
                        return function() {
                            return t += 1, idPrefix$1 + "__lottie_element_" + t;
                        };
                    }();
                    function HSVtoRGB(t, e, i) {
                        var r, a, s, n, h, o, c, g;
                        switch(n = Math.floor(t * 6), h = t * 6 - n, o = i * (1 - e), c = i * (1 - h * e), g = i * (1 - (1 - h) * e), n % 6){
                            case 0:
                                r = i, a = g, s = o;
                                break;
                            case 1:
                                r = c, a = i, s = o;
                                break;
                            case 2:
                                r = o, a = i, s = g;
                                break;
                            case 3:
                                r = o, a = c, s = i;
                                break;
                            case 4:
                                r = g, a = o, s = i;
                                break;
                            case 5:
                                r = i, a = o, s = c;
                                break;
                        }
                        return [
                            r,
                            a,
                            s
                        ];
                    }
                    function RGBtoHSV(t, e, i) {
                        var r = Math.max(t, e, i), a = Math.min(t, e, i), s = r - a, n, h = r === 0 ? 0 : s / r, o = r / 255;
                        switch(r){
                            case a:
                                n = 0;
                                break;
                            case t:
                                n = e - i + s * (e < i ? 6 : 0), n /= 6 * s;
                                break;
                            case e:
                                n = i - t + s * 2, n /= 6 * s;
                                break;
                            case i:
                                n = t - e + s * 4, n /= 6 * s;
                                break;
                        }
                        return [
                            n,
                            h,
                            o
                        ];
                    }
                    function addSaturationToRGB(t, e) {
                        var i = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
                        return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2]);
                    }
                    function addBrightnessToRGB(t, e) {
                        var i = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
                        return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2]);
                    }
                    function addHueToRGB(t, e) {
                        var i = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
                        return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2]);
                    }
                    var rgbToHex = function() {
                        var t = [], e, i;
                        for(e = 0; e < 256; e += 1)i = e.toString(16), t[e] = i.length === 1 ? "0" + i : i;
                        return function(r, a, s) {
                            return r < 0 && (r = 0), a < 0 && (a = 0), s < 0 && (s = 0), "#" + t[r] + t[a] + t[s];
                        };
                    }(), setSubframeEnabled = function(t) {
                        subframeEnabled = !!t;
                    }, getSubframeEnabled = function() {
                        return subframeEnabled;
                    }, setExpressionsPlugin = function(t) {
                        expressionsPlugin = t;
                    }, getExpressionsPlugin = function() {
                        return expressionsPlugin;
                    }, setExpressionInterfaces = function(t) {
                        expressionsInterfaces = t;
                    }, getExpressionInterfaces = function() {
                        return expressionsInterfaces;
                    }, setDefaultCurveSegments = function(t) {
                        defaultCurveSegments = t;
                    }, getDefaultCurveSegments = function() {
                        return defaultCurveSegments;
                    }, setIdPrefix = function(t) {
                        idPrefix$1 = t;
                    };
                    function createNS(t) {
                        return document1.createElementNS(svgNS, t);
                    }
                    function _typeof$5(t) {
                        "@babel/helpers - typeof";
                        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(e) {
                            return typeof e;
                        } : _typeof$5 = function(e) {
                            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, _typeof$5(t);
                    }
                    var dataManager = function() {
                        var t = 1, e = [], i, r, a = {
                            onmessage: function() {},
                            postMessage: function(f) {
                                i({
                                    data: f
                                });
                            }
                        }, s = {
                            postMessage: function(f) {
                                a.onmessage({
                                    data: f
                                });
                            }
                        };
                        function n(f) {
                            if (window.Worker && window.Blob && getWebWorker()) {
                                var x = new Blob([
                                    "var _workerSelf = self; self.onmessage = ",
                                    f.toString()
                                ], {
                                    type: "text/javascript"
                                }), v = URL.createObjectURL(x);
                                return new Worker(v);
                            }
                            return i = f, a;
                        }
                        function h() {
                            r || (r = n(function(f) {
                                function x() {
                                    function d(B, R) {
                                        var E, T, y = B.length, _, k, D, O;
                                        for(T = 0; T < y; T += 1)if (E = B[T], "ks" in E && !E.completed) {
                                            if (E.completed = !0, E.hasMask) {
                                                var z = E.masksProperties;
                                                for(k = z.length, _ = 0; _ < k; _ += 1)if (z[_].pt.k.i) u(z[_].pt.k);
                                                else for(O = z[_].pt.k.length, D = 0; D < O; D += 1)z[_].pt.k[D].s && u(z[_].pt.k[D].s[0]), z[_].pt.k[D].e && u(z[_].pt.k[D].e[0]);
                                            }
                                            E.ty === 0 ? (E.layers = l(E.refId, R), d(E.layers, R)) : E.ty === 4 ? p(E.shapes) : E.ty === 5 && I(E);
                                        }
                                    }
                                    function A(B, R) {
                                        if (B) {
                                            var E = 0, T = B.length;
                                            for(E = 0; E < T; E += 1)B[E].t === 1 && (B[E].data.layers = l(B[E].data.refId, R), d(B[E].data.layers, R));
                                        }
                                    }
                                    function m(B, R) {
                                        for(var E = 0, T = R.length; E < T;){
                                            if (R[E].id === B) return R[E];
                                            E += 1;
                                        }
                                        return null;
                                    }
                                    function l(B, R) {
                                        var E = m(B, R);
                                        return E ? E.layers.__used ? JSON.parse(JSON.stringify(E.layers)) : (E.layers.__used = !0, E.layers) : null;
                                    }
                                    function p(B) {
                                        var R, E = B.length, T, y;
                                        for(R = E - 1; R >= 0; R -= 1)if (B[R].ty === "sh") {
                                            if (B[R].ks.k.i) u(B[R].ks.k);
                                            else for(y = B[R].ks.k.length, T = 0; T < y; T += 1)B[R].ks.k[T].s && u(B[R].ks.k[T].s[0]), B[R].ks.k[T].e && u(B[R].ks.k[T].e[0]);
                                        } else B[R].ty === "gr" && p(B[R].it);
                                    }
                                    function u(B) {
                                        var R, E = B.i.length;
                                        for(R = 0; R < E; R += 1)B.i[R][0] += B.v[R][0], B.i[R][1] += B.v[R][1], B.o[R][0] += B.v[R][0], B.o[R][1] += B.v[R][1];
                                    }
                                    function P(B, R) {
                                        var E = R ? R.split(".") : [
                                            100,
                                            100,
                                            100
                                        ];
                                        return B[0] > E[0] ? !0 : E[0] > B[0] ? !1 : B[1] > E[1] ? !0 : E[1] > B[1] ? !1 : B[2] > E[2] ? !0 : E[2] > B[2] ? !1 : null;
                                    }
                                    var S = function() {
                                        var B = [
                                            4,
                                            4,
                                            14
                                        ];
                                        function R(T) {
                                            var y = T.t.d;
                                            T.t.d = {
                                                k: [
                                                    {
                                                        s: y,
                                                        t: 0
                                                    }
                                                ]
                                            };
                                        }
                                        function E(T) {
                                            var y, _ = T.length;
                                            for(y = 0; y < _; y += 1)T[y].ty === 5 && R(T[y]);
                                        }
                                        return function(T) {
                                            if (P(B, T.v) && (E(T.layers), T.assets)) {
                                                var y, _ = T.assets.length;
                                                for(y = 0; y < _; y += 1)T.assets[y].layers && E(T.assets[y].layers);
                                            }
                                        };
                                    }(), C = function() {
                                        var B = [
                                            4,
                                            7,
                                            99
                                        ];
                                        return function(R) {
                                            if (R.chars && !P(B, R.v)) {
                                                var E, T = R.chars.length;
                                                for(E = 0; E < T; E += 1){
                                                    var y = R.chars[E];
                                                    y.data && y.data.shapes && (p(y.data.shapes), y.data.ip = 0, y.data.op = 99999, y.data.st = 0, y.data.sr = 1, y.data.ks = {
                                                        p: {
                                                            k: [
                                                                0,
                                                                0
                                                            ],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [
                                                                100,
                                                                100
                                                            ],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [
                                                                0,
                                                                0
                                                            ],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        }
                                                    }, R.chars[E].t || (y.data.shapes.push({
                                                        ty: "no"
                                                    }), y.data.shapes[0].it.push({
                                                        p: {
                                                            k: [
                                                                0,
                                                                0
                                                            ],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [
                                                                100,
                                                                100
                                                            ],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [
                                                                0,
                                                                0
                                                            ],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        },
                                                        sk: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        sa: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        ty: "tr"
                                                    })));
                                                }
                                            }
                                        };
                                    }(), M = function() {
                                        var B = [
                                            5,
                                            7,
                                            15
                                        ];
                                        function R(T) {
                                            var y = T.t.p;
                                            typeof y.a == "number" && (y.a = {
                                                a: 0,
                                                k: y.a
                                            }), typeof y.p == "number" && (y.p = {
                                                a: 0,
                                                k: y.p
                                            }), typeof y.r == "number" && (y.r = {
                                                a: 0,
                                                k: y.r
                                            });
                                        }
                                        function E(T) {
                                            var y, _ = T.length;
                                            for(y = 0; y < _; y += 1)T[y].ty === 5 && R(T[y]);
                                        }
                                        return function(T) {
                                            if (P(B, T.v) && (E(T.layers), T.assets)) {
                                                var y, _ = T.assets.length;
                                                for(y = 0; y < _; y += 1)T.assets[y].layers && E(T.assets[y].layers);
                                            }
                                        };
                                    }(), w = function() {
                                        var B = [
                                            4,
                                            1,
                                            9
                                        ];
                                        function R(T) {
                                            var y, _ = T.length, k, D;
                                            for(y = 0; y < _; y += 1)if (T[y].ty === "gr") R(T[y].it);
                                            else if (T[y].ty === "fl" || T[y].ty === "st") {
                                                if (T[y].c.k && T[y].c.k[0].i) for(D = T[y].c.k.length, k = 0; k < D; k += 1)T[y].c.k[k].s && (T[y].c.k[k].s[0] /= 255, T[y].c.k[k].s[1] /= 255, T[y].c.k[k].s[2] /= 255, T[y].c.k[k].s[3] /= 255), T[y].c.k[k].e && (T[y].c.k[k].e[0] /= 255, T[y].c.k[k].e[1] /= 255, T[y].c.k[k].e[2] /= 255, T[y].c.k[k].e[3] /= 255);
                                                else T[y].c.k[0] /= 255, T[y].c.k[1] /= 255, T[y].c.k[2] /= 255, T[y].c.k[3] /= 255;
                                            }
                                        }
                                        function E(T) {
                                            var y, _ = T.length;
                                            for(y = 0; y < _; y += 1)T[y].ty === 4 && R(T[y].shapes);
                                        }
                                        return function(T) {
                                            if (P(B, T.v) && (E(T.layers), T.assets)) {
                                                var y, _ = T.assets.length;
                                                for(y = 0; y < _; y += 1)T.assets[y].layers && E(T.assets[y].layers);
                                            }
                                        };
                                    }(), F = function() {
                                        var B = [
                                            4,
                                            4,
                                            18
                                        ];
                                        function R(T) {
                                            var y, _ = T.length, k, D;
                                            for(y = _ - 1; y >= 0; y -= 1)if (T[y].ty === "sh") {
                                                if (T[y].ks.k.i) T[y].ks.k.c = T[y].closed;
                                                else for(D = T[y].ks.k.length, k = 0; k < D; k += 1)T[y].ks.k[k].s && (T[y].ks.k[k].s[0].c = T[y].closed), T[y].ks.k[k].e && (T[y].ks.k[k].e[0].c = T[y].closed);
                                            } else T[y].ty === "gr" && R(T[y].it);
                                        }
                                        function E(T) {
                                            var y, _, k = T.length, D, O, z, H;
                                            for(_ = 0; _ < k; _ += 1){
                                                if (y = T[_], y.hasMask) {
                                                    var N = y.masksProperties;
                                                    for(O = N.length, D = 0; D < O; D += 1)if (N[D].pt.k.i) N[D].pt.k.c = N[D].cl;
                                                    else for(H = N[D].pt.k.length, z = 0; z < H; z += 1)N[D].pt.k[z].s && (N[D].pt.k[z].s[0].c = N[D].cl), N[D].pt.k[z].e && (N[D].pt.k[z].e[0].c = N[D].cl);
                                                }
                                                y.ty === 4 && R(y.shapes);
                                            }
                                        }
                                        return function(T) {
                                            if (P(B, T.v) && (E(T.layers), T.assets)) {
                                                var y, _ = T.assets.length;
                                                for(y = 0; y < _; y += 1)T.assets[y].layers && E(T.assets[y].layers);
                                            }
                                        };
                                    }();
                                    function V(B) {
                                        B.__complete || (w(B), S(B), C(B), M(B), F(B), d(B.layers, B.assets), A(B.chars, B.assets), B.__complete = !0);
                                    }
                                    function I(B) {
                                        B.t.a.length === 0 && B.t.p;
                                    }
                                    var L = {};
                                    return L.completeData = V, L.checkColors = w, L.checkChars = C, L.checkPathProperties = M, L.checkShapes = F, L.completeLayers = d, L;
                                }
                                if (s.dataManager || (s.dataManager = x()), s.assetLoader || (s.assetLoader = function() {
                                    function d(m) {
                                        var l = m.getResponseHeader("content-type");
                                        return l && m.responseType === "json" && l.indexOf("json") !== -1 || m.response && _typeof$5(m.response) === "object" ? m.response : m.response && typeof m.response == "string" ? JSON.parse(m.response) : m.responseText ? JSON.parse(m.responseText) : null;
                                    }
                                    function A(m, l, p, u) {
                                        var P, S = new XMLHttpRequest;
                                        try {
                                            S.responseType = "json";
                                        } catch  {}
                                        S.onreadystatechange = function() {
                                            if (S.readyState === 4) {
                                                if (S.status === 200) P = d(S), p(P);
                                                else try {
                                                    P = d(S), p(P);
                                                } catch (C) {
                                                    u && u(C);
                                                }
                                            }
                                        };
                                        try {
                                            S.open([
                                                "G",
                                                "E",
                                                "T"
                                            ].join(""), m, !0);
                                        } catch  {
                                            S.open([
                                                "G",
                                                "E",
                                                "T"
                                            ].join(""), l + "/" + m, !0);
                                        }
                                        S.send();
                                    }
                                    return {
                                        load: A
                                    };
                                }()), f.data.type === "loadAnimation") s.assetLoader.load(f.data.path, f.data.fullPath, function(d) {
                                    s.dataManager.completeData(d), s.postMessage({
                                        id: f.data.id,
                                        payload: d,
                                        status: "success"
                                    });
                                }, function() {
                                    s.postMessage({
                                        id: f.data.id,
                                        status: "error"
                                    });
                                });
                                else if (f.data.type === "complete") {
                                    var v = f.data.animation;
                                    s.dataManager.completeData(v), s.postMessage({
                                        id: f.data.id,
                                        payload: v,
                                        status: "success"
                                    });
                                } else f.data.type === "loadData" && s.assetLoader.load(f.data.path, f.data.fullPath, function(d) {
                                    s.postMessage({
                                        id: f.data.id,
                                        payload: d,
                                        status: "success"
                                    });
                                }, function() {
                                    s.postMessage({
                                        id: f.data.id,
                                        status: "error"
                                    });
                                });
                            }), r.onmessage = function(f) {
                                var x = f.data, v = x.id, d = e[v];
                                e[v] = null, x.status === "success" ? d.onComplete(x.payload) : d.onError && d.onError();
                            });
                        }
                        function o(f, x) {
                            t += 1;
                            var v = "processId_" + t;
                            return e[v] = {
                                onComplete: f,
                                onError: x
                            }, v;
                        }
                        function c(f, x, v) {
                            h();
                            var d = o(x, v);
                            r.postMessage({
                                type: "loadAnimation",
                                path: f,
                                fullPath: window.location.origin + window.location.pathname,
                                id: d
                            });
                        }
                        function g(f, x, v) {
                            h();
                            var d = o(x, v);
                            r.postMessage({
                                type: "loadData",
                                path: f,
                                fullPath: window.location.origin + window.location.pathname,
                                id: d
                            });
                        }
                        function b(f, x, v) {
                            h();
                            var d = o(x, v);
                            r.postMessage({
                                type: "complete",
                                animation: f,
                                id: d
                            });
                        }
                        return {
                            loadAnimation: c,
                            loadData: g,
                            completeAnimation: b
                        };
                    }(), ImagePreloader = function() {
                        var t = function() {
                            var m = createTag("canvas");
                            m.width = 1, m.height = 1;
                            var l = m.getContext("2d");
                            return l.fillStyle = "rgba(0,0,0,0)", l.fillRect(0, 0, 1, 1), m;
                        }();
                        function e() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                        }
                        function i() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                        }
                        function r(m, l, p) {
                            var u = "";
                            if (m.e) u = m.p;
                            else if (l) {
                                var P = m.p;
                                P.indexOf("images/") !== -1 && (P = P.split("/")[1]), u = l + P;
                            } else u = p, u += m.u ? m.u : "", u += m.p;
                            return u;
                        }
                        function a(m) {
                            var l = 0, p = setInterval((function() {
                                var u = m.getBBox();
                                (u.width || l > 500) && (this._imageLoaded(), clearInterval(p)), l += 1;
                            }).bind(this), 50);
                        }
                        function s(m) {
                            var l = r(m, this.assetsPath, this.path), p = createNS("image");
                            isSafari ? this.testImageLoaded(p) : p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", (function() {
                                u.img = t, this._imageLoaded();
                            }).bind(this), !1), p.setAttributeNS("http://www.w3.org/1999/xlink", "href", l), this._elementHelper.append ? this._elementHelper.append(p) : this._elementHelper.appendChild(p);
                            var u = {
                                img: p,
                                assetData: m
                            };
                            return u;
                        }
                        function n(m) {
                            var l = r(m, this.assetsPath, this.path), p = createTag("img");
                            p.crossOrigin = "anonymous", p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", (function() {
                                u.img = t, this._imageLoaded();
                            }).bind(this), !1), p.src = l;
                            var u = {
                                img: p,
                                assetData: m
                            };
                            return u;
                        }
                        function h(m) {
                            var l = {
                                assetData: m
                            }, p = r(m, this.assetsPath, this.path);
                            return dataManager.loadData(p, (function(u) {
                                l.img = u, this._footageLoaded();
                            }).bind(this), (function() {
                                l.img = {}, this._footageLoaded();
                            }).bind(this)), l;
                        }
                        function o(m, l) {
                            this.imagesLoadedCb = l;
                            var p, u = m.length;
                            for(p = 0; p < u; p += 1)m[p].layers || (!m[p].t || m[p].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(m[p]))) : m[p].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(m[p]))));
                        }
                        function c(m) {
                            this.path = m || "";
                        }
                        function g(m) {
                            this.assetsPath = m || "";
                        }
                        function b(m) {
                            for(var l = 0, p = this.images.length; l < p;){
                                if (this.images[l].assetData === m) return this.images[l].img;
                                l += 1;
                            }
                            return null;
                        }
                        function f() {
                            this.imagesLoadedCb = null, this.images.length = 0;
                        }
                        function x() {
                            return this.totalImages === this.loadedAssets;
                        }
                        function v() {
                            return this.totalFootages === this.loadedFootagesCount;
                        }
                        function d(m, l) {
                            m === "svg" ? (this._elementHelper = l, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
                        }
                        function A() {
                            this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = h.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
                        }
                        return A.prototype = {
                            loadAssets: o,
                            setAssetsPath: g,
                            setPath: c,
                            loadedImages: x,
                            loadedFootages: v,
                            destroy: f,
                            getAsset: b,
                            createImgData: n,
                            createImageData: s,
                            imageLoaded: e,
                            footageLoaded: i,
                            setCacheType: d
                        }, A;
                    }();
                    function BaseEvent() {}
                    BaseEvent.prototype = {
                        triggerEvent: function(t, e) {
                            if (this._cbs[t]) for(var i = this._cbs[t], r = 0; r < i.length; r += 1)i[r](e);
                        },
                        addEventListener: function(t, e) {
                            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
                                this.removeEventListener(t, e);
                            }).bind(this);
                        },
                        removeEventListener: function(t, e) {
                            if (!e) this._cbs[t] = null;
                            else if (this._cbs[t]) {
                                for(var i = 0, r = this._cbs[t].length; i < r;)this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
                                this._cbs[t].length || (this._cbs[t] = null);
                            }
                        }
                    };
                    var markerParser = function() {
                        function t(e) {
                            for(var i = e.split(`\r
`), r = {}, a, s = 0, n = 0; n < i.length; n += 1)a = i[n].split(":"), a.length === 2 && (r[a[0]] = a[1].trim(), s += 1);
                            if (s === 0) throw new Error;
                            return r;
                        }
                        return function(e) {
                            for(var i = [], r = 0; r < e.length; r += 1){
                                var a = e[r], s = {
                                    time: a.tm,
                                    duration: a.dr
                                };
                                try {
                                    s.payload = JSON.parse(e[r].cm);
                                } catch  {
                                    try {
                                        s.payload = t(e[r].cm);
                                    } catch  {
                                        s.payload = {
                                            name: e[r].cm
                                        };
                                    }
                                }
                                i.push(s);
                            }
                            return i;
                        };
                    }(), ProjectInterface = function() {
                        function t(e) {
                            this.compositions.push(e);
                        }
                        return function() {
                            function e(i) {
                                for(var r = 0, a = this.compositions.length; r < a;){
                                    if (this.compositions[r].data && this.compositions[r].data.nm === i) return this.compositions[r].prepareFrame && this.compositions[r].data.xt && this.compositions[r].prepareFrame(this.currentFrame), this.compositions[r].compInterface;
                                    r += 1;
                                }
                                return null;
                            }
                            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
                        };
                    }(), renderers = {}, registerRenderer = function(t, e) {
                        renderers[t] = e;
                    };
                    function getRenderer(t) {
                        return renderers[t];
                    }
                    function getRegisteredRenderer() {
                        if (renderers.canvas) return "canvas";
                        for(var t in renderers)if (renderers[t]) return t;
                        return "";
                    }
                    function _typeof$4(t) {
                        "@babel/helpers - typeof";
                        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(e) {
                            return typeof e;
                        } : _typeof$4 = function(e) {
                            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, _typeof$4(t);
                    }
                    var AnimationItem = function() {
                        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
                    };
                    extendPrototype([
                        BaseEvent
                    ], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                        (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                        var e = "svg";
                        t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                        var i = getRenderer(e);
                        this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
                    }, AnimationItem.prototype.onSetupError = function() {
                        this.trigger("data_failed");
                    }, AnimationItem.prototype.setupAnimation = function(t) {
                        dataManager.completeAnimation(t, this.configAnimation);
                    }, AnimationItem.prototype.setData = function(t, e) {
                        e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
                        var i = {
                            wrapper: t,
                            animationData: e
                        }, r = t.attributes;
                        i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
                        var a = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
                        a === "false" ? i.loop = !1 : a === "true" ? i.loop = !0 : a !== "" && (i.loop = parseInt(a, 10));
                        var s = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : r.getNamedItem("bm-autoplay") ? r.getNamedItem("bm-autoplay").value : !0;
                        i.autoplay = s !== "false", i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "";
                        var n = r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "";
                        n === "false" && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy");
                    }, AnimationItem.prototype.includeLayers = function(t) {
                        t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                        var e = this.animationData.layers, i, r = e.length, a = t.layers, s, n = a.length;
                        for(s = 0; s < n; s += 1)for(i = 0; i < r;){
                            if (e[i].id === a[s].id) {
                                e[i] = a[s];
                                break;
                            }
                            i += 1;
                        }
                        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for(r = t.assets.length, i = 0; i < r; i += 1)this.animationData.assets.push(t.assets[i]);
                        this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
                    }, AnimationItem.prototype.onSegmentComplete = function(t) {
                        this.animationData = t;
                        var e = getExpressionsPlugin();
                        e && e.initExpressions(this), this.loadNextSegment();
                    }, AnimationItem.prototype.loadNextSegment = function() {
                        var t = this.animationData.segments;
                        if (!t || t.length === 0 || !this.autoloadSegments) {
                            this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                            return;
                        }
                        var e = t.shift();
                        this.timeCompleted = e.time * this.frameRate;
                        var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
                        this.segmentPos += 1, dataManager.loadData(i, this.includeLayers.bind(this), (function() {
                            this.trigger("data_failed");
                        }).bind(this));
                    }, AnimationItem.prototype.loadSegments = function() {
                        var t = this.animationData.segments;
                        t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
                    }, AnimationItem.prototype.imagesLoaded = function() {
                        this.trigger("loaded_images"), this.checkLoaded();
                    }, AnimationItem.prototype.preloadImages = function() {
                        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
                    }, AnimationItem.prototype.configAnimation = function(t) {
                        if (this.renderer) try {
                            this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
                        } catch (e) {
                            this.triggerConfigError(e);
                        }
                    }, AnimationItem.prototype.waitForFontsLoaded = function() {
                        this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
                    }, AnimationItem.prototype.checkLoaded = function() {
                        if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                            this.isLoaded = !0;
                            var t = getExpressionsPlugin();
                            t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                                this.trigger("DOMLoaded");
                            }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
                        }
                    }, AnimationItem.prototype.resize = function(t, e) {
                        var i = typeof t == "number" ? t : void 0, r = typeof e == "number" ? e : void 0;
                        this.renderer.updateContainerSize(i, r);
                    }, AnimationItem.prototype.setSubframe = function(t) {
                        this.isSubframeEnabled = !!t;
                    }, AnimationItem.prototype.gotoFrame = function() {
                        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
                    }, AnimationItem.prototype.renderFrame = function() {
                        if (!(this.isLoaded === !1 || !this.renderer)) try {
                            this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
                        } catch (t) {
                            this.triggerRenderFrameError(t);
                        }
                    }, AnimationItem.prototype.play = function(t) {
                        t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
                    }, AnimationItem.prototype.pause = function(t) {
                        t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
                    }, AnimationItem.prototype.togglePause = function(t) {
                        t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause());
                    }, AnimationItem.prototype.stop = function(t) {
                        t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
                    }, AnimationItem.prototype.getMarkerData = function(t) {
                        for(var e, i = 0; i < this.markers.length; i += 1)if (e = this.markers[i], e.payload && e.payload.name === t) return e;
                        return null;
                    }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
                        if (!(i && this.name !== i)) {
                            var r = Number(t);
                            if (isNaN(r)) {
                                var a = this.getMarkerData(t);
                                a && this.goToAndStop(a.time, !0);
                            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                            this.pause();
                        }
                    }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
                        if (!(i && this.name !== i)) {
                            var r = Number(t);
                            if (isNaN(r)) {
                                var a = this.getMarkerData(t);
                                a && (a.duration ? this.playSegments([
                                    a.time,
                                    a.time + a.duration
                                ], !0) : this.goToAndStop(a.time, !0));
                            } else this.goToAndStop(r, e, i);
                            this.play();
                        }
                    }, AnimationItem.prototype.advanceTime = function(t) {
                        if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                            var e = this.currentRawFrame + t * this.frameModifier, i = !1;
                            e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (i = !0, e = 0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
                        }
                    }, AnimationItem.prototype.adjustSegment = function(t, e) {
                        this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart");
                    }, AnimationItem.prototype.setSegment = function(t, e) {
                        var i = -1;
                        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, i !== -1 && this.goToAndStop(i, !0);
                    }, AnimationItem.prototype.playSegments = function(t, e) {
                        if (e && (this.segments.length = 0), _typeof$4(t[0]) === "object") {
                            var i, r = t.length;
                            for(i = 0; i < r; i += 1)this.segments.push(t[i]);
                        } else this.segments.push(t);
                        this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
                    }, AnimationItem.prototype.resetSegments = function(t) {
                        this.segments.length = 0, this.segments.push([
                            this.animationData.ip,
                            this.animationData.op
                        ]), t && this.checkSegments(0);
                    }, AnimationItem.prototype.checkSegments = function(t) {
                        return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), !0) : !1;
                    }, AnimationItem.prototype.destroy = function(t) {
                        t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
                    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                        this.currentRawFrame = t, this.gotoFrame();
                    }, AnimationItem.prototype.setSpeed = function(t) {
                        this.playSpeed = t, this.updaFrameModifier();
                    }, AnimationItem.prototype.setDirection = function(t) {
                        this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
                    }, AnimationItem.prototype.setLoop = function(t) {
                        this.loop = t;
                    }, AnimationItem.prototype.setVolume = function(t, e) {
                        e && this.name !== e || this.audioController.setVolume(t);
                    }, AnimationItem.prototype.getVolume = function() {
                        return this.audioController.getVolume();
                    }, AnimationItem.prototype.mute = function(t) {
                        t && this.name !== t || this.audioController.mute();
                    }, AnimationItem.prototype.unmute = function(t) {
                        t && this.name !== t || this.audioController.unmute();
                    }, AnimationItem.prototype.updaFrameModifier = function() {
                        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
                    }, AnimationItem.prototype.getPath = function() {
                        return this.path;
                    }, AnimationItem.prototype.getAssetsPath = function(t) {
                        var e = "";
                        if (t.e) e = t.p;
                        else if (this.assetsPath) {
                            var i = t.p;
                            i.indexOf("images/") !== -1 && (i = i.split("/")[1]), e = this.assetsPath + i;
                        } else e = this.path, e += t.u ? t.u : "", e += t.p;
                        return e;
                    }, AnimationItem.prototype.getAssetData = function(t) {
                        for(var e = 0, i = this.assets.length; e < i;){
                            if (t === this.assets[e].id) return this.assets[e];
                            e += 1;
                        }
                        return null;
                    }, AnimationItem.prototype.hide = function() {
                        this.renderer.hide();
                    }, AnimationItem.prototype.show = function() {
                        this.renderer.show();
                    }, AnimationItem.prototype.getDuration = function(t) {
                        return t ? this.totalFrames : this.totalFrames / this.frameRate;
                    }, AnimationItem.prototype.updateDocumentData = function(t, e, i) {
                        try {
                            var r = this.renderer.getElementByPath(t);
                            r.updateDocumentData(e, i);
                        } catch  {}
                    }, AnimationItem.prototype.trigger = function(t) {
                        if (this._cbs && this._cbs[t]) switch(t){
                            case "enterFrame":
                                this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                                break;
                            case "drawnFrame":
                                this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                                break;
                            case "loopComplete":
                                this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                                break;
                            case "complete":
                                this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                                break;
                            case "segmentStart":
                                this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                                break;
                            case "destroy":
                                this.triggerEvent(t, new BMDestroyEvent(t, this));
                                break;
                            default:
                                this.triggerEvent(t);
                        }
                        t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
                    }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                        var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
                    }, AnimationItem.prototype.triggerConfigError = function(t) {
                        var e = new BMConfigErrorEvent(t, this.currentFrame);
                        this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
                    };
                    var animationManager = function() {
                        var t = {}, e = [], i = 0, r = 0, a = 0, s = !0, n = !1;
                        function h(E) {
                            for(var T = 0, y = E.target; T < r;)e[T].animation === y && (e.splice(T, 1), T -= 1, r -= 1, y.isPaused || b()), T += 1;
                        }
                        function o(E, T) {
                            if (!E) return null;
                            for(var y = 0; y < r;){
                                if (e[y].elem === E && e[y].elem !== null) return e[y].animation;
                                y += 1;
                            }
                            var _ = new AnimationItem;
                            return f(_, E), _.setData(E, T), _;
                        }
                        function c() {
                            var E, T = e.length, y = [];
                            for(E = 0; E < T; E += 1)y.push(e[E].animation);
                            return y;
                        }
                        function g() {
                            a += 1, F();
                        }
                        function b() {
                            a -= 1;
                        }
                        function f(E, T) {
                            E.addEventListener("destroy", h), E.addEventListener("_active", g), E.addEventListener("_idle", b), e.push({
                                elem: T,
                                animation: E
                            }), r += 1;
                        }
                        function x(E) {
                            var T = new AnimationItem;
                            return f(T, null), T.setParams(E), T;
                        }
                        function v(E, T) {
                            var y;
                            for(y = 0; y < r; y += 1)e[y].animation.setSpeed(E, T);
                        }
                        function d(E, T) {
                            var y;
                            for(y = 0; y < r; y += 1)e[y].animation.setDirection(E, T);
                        }
                        function A(E) {
                            var T;
                            for(T = 0; T < r; T += 1)e[T].animation.play(E);
                        }
                        function m(E) {
                            var T = E - i, y;
                            for(y = 0; y < r; y += 1)e[y].animation.advanceTime(T);
                            i = E, a && !n ? window.requestAnimationFrame(m) : s = !0;
                        }
                        function l(E) {
                            i = E, window.requestAnimationFrame(m);
                        }
                        function p(E) {
                            var T;
                            for(T = 0; T < r; T += 1)e[T].animation.pause(E);
                        }
                        function u(E, T, y) {
                            var _;
                            for(_ = 0; _ < r; _ += 1)e[_].animation.goToAndStop(E, T, y);
                        }
                        function P(E) {
                            var T;
                            for(T = 0; T < r; T += 1)e[T].animation.stop(E);
                        }
                        function S(E) {
                            var T;
                            for(T = 0; T < r; T += 1)e[T].animation.togglePause(E);
                        }
                        function C(E) {
                            var T;
                            for(T = r - 1; T >= 0; T -= 1)e[T].animation.destroy(E);
                        }
                        function M(E, T, y) {
                            var _ = [].concat([].slice.call(document1.getElementsByClassName("lottie")), [].slice.call(document1.getElementsByClassName("bodymovin"))), k, D = _.length;
                            for(k = 0; k < D; k += 1)y && _[k].setAttribute("data-bm-type", y), o(_[k], E);
                            if (T && D === 0) {
                                y || (y = "svg");
                                var O = document1.getElementsByTagName("body")[0];
                                O.innerText = "";
                                var z = createTag("div");
                                z.style.width = "100%", z.style.height = "100%", z.setAttribute("data-bm-type", y), O.appendChild(z), o(z, E);
                            }
                        }
                        function w() {
                            var E;
                            for(E = 0; E < r; E += 1)e[E].animation.resize();
                        }
                        function F() {
                            !n && a && s && (window.requestAnimationFrame(l), s = !1);
                        }
                        function V() {
                            n = !0;
                        }
                        function I() {
                            n = !1, F();
                        }
                        function L(E, T) {
                            var y;
                            for(y = 0; y < r; y += 1)e[y].animation.setVolume(E, T);
                        }
                        function B(E) {
                            var T;
                            for(T = 0; T < r; T += 1)e[T].animation.mute(E);
                        }
                        function R(E) {
                            var T;
                            for(T = 0; T < r; T += 1)e[T].animation.unmute(E);
                        }
                        return t.registerAnimation = o, t.loadAnimation = x, t.setSpeed = v, t.setDirection = d, t.play = A, t.pause = p, t.stop = P, t.togglePause = S, t.searchAnimations = M, t.resize = w, t.goToAndStop = u, t.destroy = C, t.freeze = V, t.unfreeze = I, t.setVolume = L, t.mute = B, t.unmute = R, t.getRegisteredAnimations = c, t;
                    }(), BezierFactory = function() {
                        var t = {};
                        t.getBezierEasing = i;
                        var e = {};
                        function i(l, p, u, P, S) {
                            var C = S || ("bez_" + l + "_" + p + "_" + u + "_" + P).replace(/\./g, "p");
                            if (e[C]) return e[C];
                            var M = new m([
                                l,
                                p,
                                u,
                                P
                            ]);
                            return e[C] = M, M;
                        }
                        var r = 4, a = .001, s = 1e-7, n = 10, h = 11, o = 1 / (h - 1), c = typeof Float32Array == "function";
                        function g(l, p) {
                            return 1 - 3 * p + 3 * l;
                        }
                        function b(l, p) {
                            return 3 * p - 6 * l;
                        }
                        function f(l) {
                            return 3 * l;
                        }
                        function x(l, p, u) {
                            return ((g(p, u) * l + b(p, u)) * l + f(p)) * l;
                        }
                        function v(l, p, u) {
                            return 3 * g(p, u) * l * l + 2 * b(p, u) * l + f(p);
                        }
                        function d(l, p, u, P, S) {
                            var C, M, w = 0;
                            do M = p + (u - p) / 2, C = x(M, P, S) - l, C > 0 ? u = M : p = M;
                            while (Math.abs(C) > s && ++w < n);
                            return M;
                        }
                        function A(l, p, u, P) {
                            for(var S = 0; S < r; ++S){
                                var C = v(p, u, P);
                                if (C === 0) return p;
                                var M = x(p, u, P) - l;
                                p -= M / C;
                            }
                            return p;
                        }
                        function m(l) {
                            this._p = l, this._mSampleValues = c ? new Float32Array(h) : new Array(h), this._precomputed = !1, this.get = this.get.bind(this);
                        }
                        return m.prototype = {
                            get: function(l) {
                                var p = this._p[0], u = this._p[1], P = this._p[2], S = this._p[3];
                                return this._precomputed || this._precompute(), p === u && P === S ? l : l === 0 ? 0 : l === 1 ? 1 : x(this._getTForX(l), u, S);
                            },
                            _precompute: function() {
                                var l = this._p[0], p = this._p[1], u = this._p[2], P = this._p[3];
                                this._precomputed = !0, (l !== p || u !== P) && this._calcSampleValues();
                            },
                            _calcSampleValues: function() {
                                for(var l = this._p[0], p = this._p[2], u = 0; u < h; ++u)this._mSampleValues[u] = x(u * o, l, p);
                            },
                            _getTForX: function(l) {
                                for(var p = this._p[0], u = this._p[2], P = this._mSampleValues, S = 0, C = 1, M = h - 1; C !== M && P[C] <= l; ++C)S += o;
                                --C;
                                var w = (l - P[C]) / (P[C + 1] - P[C]), F = S + w * o, V = v(F, p, u);
                                return V >= a ? A(l, F, p, u) : V === 0 ? F : d(l, S, S + o, p, u);
                            }
                        }, t;
                    }(), pooling = function() {
                        function t(e) {
                            return e.concat(createSizedArray(e.length));
                        }
                        return {
                            double: t
                        };
                    }(), poolFactory = function() {
                        return function(t, e, i) {
                            var r = 0, a = t, s = createSizedArray(a), n = {
                                newElement: h,
                                release: o
                            };
                            function h() {
                                var c;
                                return r ? (r -= 1, c = s[r]) : c = e(), c;
                            }
                            function o(c) {
                                r === a && (s = pooling.double(s), a *= 2), i && i(c), s[r] = c, r += 1;
                            }
                            return n;
                        };
                    }(), bezierLengthPool = function() {
                        function t() {
                            return {
                                addedLength: 0,
                                percents: createTypedArray("float32", getDefaultCurveSegments()),
                                lengths: createTypedArray("float32", getDefaultCurveSegments())
                            };
                        }
                        return poolFactory(8, t);
                    }(), segmentsLengthPool = function() {
                        function t() {
                            return {
                                lengths: [],
                                totalLength: 0
                            };
                        }
                        function e(i) {
                            var r, a = i.lengths.length;
                            for(r = 0; r < a; r += 1)bezierLengthPool.release(i.lengths[r]);
                            i.lengths.length = 0;
                        }
                        return poolFactory(8, t, e);
                    }();
                    function bezFunction() {
                        var t = Math;
                        function e(f, x, v, d, A, m) {
                            var l = f * d + x * A + v * m - A * d - m * f - v * x;
                            return l > -0.001 && l < .001;
                        }
                        function i(f, x, v, d, A, m, l, p, u) {
                            if (v === 0 && m === 0 && u === 0) return e(f, x, d, A, l, p);
                            var P = t.sqrt(t.pow(d - f, 2) + t.pow(A - x, 2) + t.pow(m - v, 2)), S = t.sqrt(t.pow(l - f, 2) + t.pow(p - x, 2) + t.pow(u - v, 2)), C = t.sqrt(t.pow(l - d, 2) + t.pow(p - A, 2) + t.pow(u - m, 2)), M;
                            return P > S ? P > C ? M = P - S - C : M = C - S - P : C > S ? M = C - S - P : M = S - P - C, M > -0.0001 && M < 1e-4;
                        }
                        var r = function() {
                            return function(f, x, v, d) {
                                var A = getDefaultCurveSegments(), m, l, p, u, P, S = 0, C, M = [], w = [], F = bezierLengthPool.newElement();
                                for(p = v.length, m = 0; m < A; m += 1){
                                    for(P = m / (A - 1), C = 0, l = 0; l < p; l += 1)u = bmPow(1 - P, 3) * f[l] + 3 * bmPow(1 - P, 2) * P * v[l] + 3 * (1 - P) * bmPow(P, 2) * d[l] + bmPow(P, 3) * x[l], M[l] = u, w[l] !== null && (C += bmPow(M[l] - w[l], 2)), w[l] = M[l];
                                    C && (C = bmSqrt(C), S += C), F.percents[m] = P, F.lengths[m] = S;
                                }
                                return F.addedLength = S, F;
                            };
                        }();
                        function a(f) {
                            var x = segmentsLengthPool.newElement(), v = f.c, d = f.v, A = f.o, m = f.i, l, p = f._length, u = x.lengths, P = 0;
                            for(l = 0; l < p - 1; l += 1)u[l] = r(d[l], d[l + 1], A[l], m[l + 1]), P += u[l].addedLength;
                            return v && p && (u[l] = r(d[l], d[0], A[l], m[0]), P += u[l].addedLength), x.totalLength = P, x;
                        }
                        function s(f) {
                            this.segmentLength = 0, this.points = new Array(f);
                        }
                        function n(f, x) {
                            this.partialLength = f, this.point = x;
                        }
                        var h = function() {
                            var f = {};
                            return function(x, v, d, A) {
                                var m = (x[0] + "_" + x[1] + "_" + v[0] + "_" + v[1] + "_" + d[0] + "_" + d[1] + "_" + A[0] + "_" + A[1]).replace(/\./g, "p");
                                if (!f[m]) {
                                    var l = getDefaultCurveSegments(), p, u, P, S, C, M = 0, w, F, V = null;
                                    x.length === 2 && (x[0] !== v[0] || x[1] !== v[1]) && e(x[0], x[1], v[0], v[1], x[0] + d[0], x[1] + d[1]) && e(x[0], x[1], v[0], v[1], v[0] + A[0], v[1] + A[1]) && (l = 2);
                                    var I = new s(l);
                                    for(P = d.length, p = 0; p < l; p += 1){
                                        for(F = createSizedArray(P), C = p / (l - 1), w = 0, u = 0; u < P; u += 1)S = bmPow(1 - C, 3) * x[u] + 3 * bmPow(1 - C, 2) * C * (x[u] + d[u]) + 3 * (1 - C) * bmPow(C, 2) * (v[u] + A[u]) + bmPow(C, 3) * v[u], F[u] = S, V !== null && (w += bmPow(F[u] - V[u], 2));
                                        w = bmSqrt(w), M += w, I.points[p] = new n(w, F), V = F;
                                    }
                                    I.segmentLength = M, f[m] = I;
                                }
                                return f[m];
                            };
                        }();
                        function o(f, x) {
                            var v = x.percents, d = x.lengths, A = v.length, m = bmFloor((A - 1) * f), l = f * x.addedLength, p = 0;
                            if (m === A - 1 || m === 0 || l === d[m]) return v[m];
                            for(var u = d[m] > l ? -1 : 1, P = !0; P;)if (d[m] <= l && d[m + 1] > l ? (p = (l - d[m]) / (d[m + 1] - d[m]), P = !1) : m += u, m < 0 || m >= A - 1) {
                                if (m === A - 1) return v[m];
                                P = !1;
                            }
                            return v[m] + (v[m + 1] - v[m]) * p;
                        }
                        function c(f, x, v, d, A, m) {
                            var l = o(A, m), p = 1 - l, u = t.round((p * p * p * f[0] + (l * p * p + p * l * p + p * p * l) * v[0] + (l * l * p + p * l * l + l * p * l) * d[0] + l * l * l * x[0]) * 1e3) / 1e3, P = t.round((p * p * p * f[1] + (l * p * p + p * l * p + p * p * l) * v[1] + (l * l * p + p * l * l + l * p * l) * d[1] + l * l * l * x[1]) * 1e3) / 1e3;
                            return [
                                u,
                                P
                            ];
                        }
                        var g = createTypedArray("float32", 8);
                        function b(f, x, v, d, A, m, l) {
                            A < 0 ? A = 0 : A > 1 && (A = 1);
                            var p = o(A, l);
                            m = m > 1 ? 1 : m;
                            var u = o(m, l), P, S = f.length, C = 1 - p, M = 1 - u, w = C * C * C, F = p * C * C * 3, V = p * p * C * 3, I = p * p * p, L = C * C * M, B = p * C * M + C * p * M + C * C * u, R = p * p * M + C * p * u + p * C * u, E = p * p * u, T = C * M * M, y = p * M * M + C * u * M + C * M * u, _ = p * u * M + C * u * u + p * M * u, k = p * u * u, D = M * M * M, O = u * M * M + M * u * M + M * M * u, z = u * u * M + M * u * u + u * M * u, H = u * u * u;
                            for(P = 0; P < S; P += 1)g[P * 4] = t.round((w * f[P] + F * v[P] + V * d[P] + I * x[P]) * 1e3) / 1e3, g[P * 4 + 1] = t.round((L * f[P] + B * v[P] + R * d[P] + E * x[P]) * 1e3) / 1e3, g[P * 4 + 2] = t.round((T * f[P] + y * v[P] + _ * d[P] + k * x[P]) * 1e3) / 1e3, g[P * 4 + 3] = t.round((D * f[P] + O * v[P] + z * d[P] + H * x[P]) * 1e3) / 1e3;
                            return g;
                        }
                        return {
                            getSegmentsLength: a,
                            getNewSegment: b,
                            getPointInSegment: c,
                            buildBezierData: h,
                            pointOnLine2D: e,
                            pointOnLine3D: i
                        };
                    }
                    var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
                    function interpolateValue(t, e) {
                        var i = this.offsetTime, r;
                        this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
                        for(var a = e.lastIndex, s = a, n = this.keyframes.length - 1, h = !0, o, c, g; h;){
                            if (o = this.keyframes[s], c = this.keyframes[s + 1], s === n - 1 && t >= c.t - i) {
                                o.h && (o = c), a = 0;
                                break;
                            }
                            if (c.t - i > t) {
                                a = s;
                                break;
                            }
                            s < n - 1 ? s += 1 : (a = 0, h = !1);
                        }
                        g = this.keyframesMetadata[s] || {};
                        var b, f, x, v, d, A, m = c.t - i, l = o.t - i, p;
                        if (o.to) {
                            g.bezierData || (g.bezierData = bez.buildBezierData(o.s, c.s || o.e, o.to, o.ti));
                            var u = g.bezierData;
                            if (t >= m || t < l) {
                                var P = t >= m ? u.points.length - 1 : 0;
                                for(f = u.points[P].point.length, b = 0; b < f; b += 1)r[b] = u.points[P].point[b];
                            } else {
                                g.__fnct ? A = g.__fnct : (A = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, g.__fnct = A), x = A((t - l) / (m - l));
                                var S = u.segmentLength * x, C, M = e.lastFrame < t && e._lastKeyframeIndex === s ? e._lastAddedLength : 0;
                                for(d = e.lastFrame < t && e._lastKeyframeIndex === s ? e._lastPoint : 0, h = !0, v = u.points.length; h;){
                                    if (M += u.points[d].partialLength, S === 0 || x === 0 || d === u.points.length - 1) {
                                        for(f = u.points[d].point.length, b = 0; b < f; b += 1)r[b] = u.points[d].point[b];
                                        break;
                                    } else if (S >= M && S < M + u.points[d + 1].partialLength) {
                                        for(C = (S - M) / u.points[d + 1].partialLength, f = u.points[d].point.length, b = 0; b < f; b += 1)r[b] = u.points[d].point[b] + (u.points[d + 1].point[b] - u.points[d].point[b]) * C;
                                        break;
                                    }
                                    d < v - 1 ? d += 1 : h = !1;
                                }
                                e._lastPoint = d, e._lastAddedLength = M - u.points[d].partialLength, e._lastKeyframeIndex = s;
                            }
                        } else {
                            var w, F, V, I, L;
                            if (n = o.s.length, p = c.s || o.e, this.sh && o.h !== 1) {
                                if (t >= m) r[0] = p[0], r[1] = p[1], r[2] = p[2];
                                else if (t <= l) r[0] = o.s[0], r[1] = o.s[1], r[2] = o.s[2];
                                else {
                                    var B = createQuaternion(o.s), R = createQuaternion(p), E = (t - l) / (m - l);
                                    quaternionToEuler(r, slerp(B, R, E));
                                }
                            } else for(s = 0; s < n; s += 1)o.h !== 1 && (t >= m ? x = 1 : t < l ? x = 0 : (o.o.x.constructor === Array ? (g.__fnct || (g.__fnct = []), g.__fnct[s] ? A = g.__fnct[s] : (w = o.o.x[s] === void 0 ? o.o.x[0] : o.o.x[s], F = o.o.y[s] === void 0 ? o.o.y[0] : o.o.y[s], V = o.i.x[s] === void 0 ? o.i.x[0] : o.i.x[s], I = o.i.y[s] === void 0 ? o.i.y[0] : o.i.y[s], A = BezierFactory.getBezierEasing(w, F, V, I).get, g.__fnct[s] = A)) : g.__fnct ? A = g.__fnct : (w = o.o.x, F = o.o.y, V = o.i.x, I = o.i.y, A = BezierFactory.getBezierEasing(w, F, V, I).get, o.keyframeMetadata = A), x = A((t - l) / (m - l)))), p = c.s || o.e, L = o.h === 1 ? o.s[s] : o.s[s] + (p[s] - o.s[s]) * x, this.propType === "multidimensional" ? r[s] = L : r = L;
                        }
                        return e.lastIndex = a, r;
                    }
                    function slerp(t, e, i) {
                        var r = [], a = t[0], s = t[1], n = t[2], h = t[3], o = e[0], c = e[1], g = e[2], b = e[3], f, x, v, d, A;
                        return x = a * o + s * c + n * g + h * b, x < 0 && (x = -x, o = -o, c = -c, g = -g, b = -b), 1 - x > 1e-6 ? (f = Math.acos(x), v = Math.sin(f), d = Math.sin((1 - i) * f) / v, A = Math.sin(i * f) / v) : (d = 1 - i, A = i), r[0] = d * a + A * o, r[1] = d * s + A * c, r[2] = d * n + A * g, r[3] = d * h + A * b, r;
                    }
                    function quaternionToEuler(t, e) {
                        var i = e[0], r = e[1], a = e[2], s = e[3], n = Math.atan2(2 * r * s - 2 * i * a, 1 - 2 * r * r - 2 * a * a), h = Math.asin(2 * i * r + 2 * a * s), o = Math.atan2(2 * i * s - 2 * r * a, 1 - 2 * i * i - 2 * a * a);
                        t[0] = n / degToRads, t[1] = h / degToRads, t[2] = o / degToRads;
                    }
                    function createQuaternion(t) {
                        var e = t[0] * degToRads, i = t[1] * degToRads, r = t[2] * degToRads, a = Math.cos(e / 2), s = Math.cos(i / 2), n = Math.cos(r / 2), h = Math.sin(e / 2), o = Math.sin(i / 2), c = Math.sin(r / 2), g = a * s * n - h * o * c, b = h * o * n + a * s * c, f = h * s * n + a * o * c, x = a * o * n - h * s * c;
                        return [
                            b,
                            f,
                            x,
                            g
                        ];
                    }
                    function getValueAtCurrentTime() {
                        var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                        if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
                            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                            var r = this.interpolateValue(t, this._caching);
                            this.pv = r;
                        }
                        return this._caching.lastFrame = t, this.pv;
                    }
                    function setVValue(t) {
                        var e;
                        if (this.propType === "unidimensional") e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
                        else for(var i = 0, r = this.v.length; i < r;)e = t[i] * this.mult, mathAbs(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1;
                    }
                    function processEffectsSequence() {
                        if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                            if (this.lock) {
                                this.setVValue(this.pv);
                                return;
                            }
                            this.lock = !0, this._mdf = this._isFirstFrame;
                            var t, e = this.effectsSequence.length, i = this.kf ? this.pv : this.data.k;
                            for(t = 0; t < e; t += 1)i = this.effectsSequence[t](i);
                            this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
                        }
                    }
                    function addEffect(t) {
                        this.effectsSequence.push(t), this.container.addDynamicProperty(this);
                    }
                    function ValueProperty(t, e, i, r) {
                        this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
                    }
                    function MultiDimensionalProperty(t, e, i, r) {
                        this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                        var a, s = e.k.length;
                        for(this.v = createTypedArray("float32", s), this.pv = createTypedArray("float32", s), this.vel = createTypedArray("float32", s), a = 0; a < s; a += 1)this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
                        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
                    }
                    function KeyframedValueProperty(t, e, i, r) {
                        this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                            lastFrame: initFrame,
                            lastIndex: 0,
                            value: 0,
                            _lastKeyframeIndex: -1
                        }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [
                            getValueAtCurrentTime.bind(this)
                        ], this.addEffect = addEffect;
                    }
                    function KeyframedMultidimensionalProperty(t, e, i, r) {
                        this.propType = "multidimensional";
                        var a, s = e.k.length, n, h, o, c;
                        for(a = 0; a < s - 1; a += 1)e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (n = e.k[a].s, h = e.k[a + 1].s, o = e.k[a].to, c = e.k[a].ti, (n.length === 2 && !(n[0] === h[0] && n[1] === h[1]) && bez.pointOnLine2D(n[0], n[1], h[0], h[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], h[0], h[1], h[0] + c[0], h[1] + c[1]) || n.length === 3 && !(n[0] === h[0] && n[1] === h[1] && n[2] === h[2]) && bez.pointOnLine3D(n[0], n[1], n[2], h[0], h[1], h[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], h[0], h[1], h[2], h[0] + c[0], h[1] + c[1], h[2] + c[2])) && (e.k[a].to = null, e.k[a].ti = null), n[0] === h[0] && n[1] === h[1] && o[0] === 0 && o[1] === 0 && c[0] === 0 && c[1] === 0 && (n.length === 2 || n[2] === h[2] && o[2] === 0 && c[2] === 0) && (e.k[a].to = null, e.k[a].ti = null));
                        this.effectsSequence = [
                            getValueAtCurrentTime.bind(this)
                        ], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
                        var g = e.k[0].s.length;
                        for(this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), a = 0; a < g; a += 1)this.v[a] = initFrame, this.pv[a] = initFrame;
                        this._caching = {
                            lastFrame: initFrame,
                            lastIndex: 0,
                            value: createTypedArray("float32", g)
                        }, this.addEffect = addEffect;
                    }
                    var PropertyFactory = function() {
                        function t(i, r, a, s, n) {
                            r.sid && (r = i.globalData.slotManager.getProp(r));
                            var h;
                            if (!r.k.length) h = new ValueProperty(i, r, s, n);
                            else if (typeof r.k[0] == "number") h = new MultiDimensionalProperty(i, r, s, n);
                            else switch(a){
                                case 0:
                                    h = new KeyframedValueProperty(i, r, s, n);
                                    break;
                                case 1:
                                    h = new KeyframedMultidimensionalProperty(i, r, s, n);
                                    break;
                            }
                            return h.effectsSequence.length && n.addDynamicProperty(h), h;
                        }
                        var e = {
                            getProp: t
                        };
                        return e;
                    }();
                    function DynamicPropertyContainer() {}
                    DynamicPropertyContainer.prototype = {
                        addDynamicProperty: function(t) {
                            this.dynamicProperties.indexOf(t) === -1 && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0);
                        },
                        iterateDynamicProperties: function() {
                            this._mdf = !1;
                            var t, e = this.dynamicProperties.length;
                            for(t = 0; t < e; t += 1)this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);
                        },
                        initDynamicPropertyContainer: function(t) {
                            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
                        }
                    };
                    var pointPool = function() {
                        function t() {
                            return createTypedArray("float32", 2);
                        }
                        return poolFactory(8, t);
                    }();
                    function ShapePath() {
                        this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
                    }
                    ShapePath.prototype.setPathData = function(t, e) {
                        this.c = t, this.setLength(e);
                        for(var i = 0; i < e;)this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1;
                    }, ShapePath.prototype.setLength = function(t) {
                        for(; this._maxLength < t;)this.doubleArrayLength();
                        this._length = t;
                    }, ShapePath.prototype.doubleArrayLength = function() {
                        this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
                    }, ShapePath.prototype.setXYAt = function(t, e, i, r, a) {
                        var s;
                        switch(this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i){
                            case "v":
                                s = this.v;
                                break;
                            case "i":
                                s = this.i;
                                break;
                            case "o":
                                s = this.o;
                                break;
                            default:
                                s = [];
                                break;
                        }
                        (!s[r] || s[r] && !a) && (s[r] = pointPool.newElement()), s[r][0] = t, s[r][1] = e;
                    }, ShapePath.prototype.setTripleAt = function(t, e, i, r, a, s, n, h) {
                        this.setXYAt(t, e, "v", n, h), this.setXYAt(i, r, "o", n, h), this.setXYAt(a, s, "i", n, h);
                    }, ShapePath.prototype.reverse = function() {
                        var t = new ShapePath;
                        t.setPathData(this.c, this._length);
                        var e = this.v, i = this.o, r = this.i, a = 0;
                        this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), a = 1);
                        var s = this._length - 1, n = this._length, h;
                        for(h = a; h < n; h += 1)t.setTripleAt(e[s][0], e[s][1], r[s][0], r[s][1], i[s][0], i[s][1], h, !1), s -= 1;
                        return t;
                    }, ShapePath.prototype.length = function() {
                        return this._length;
                    };
                    var shapePool = function() {
                        function t() {
                            return new ShapePath;
                        }
                        function e(a) {
                            var s = a._length, n;
                            for(n = 0; n < s; n += 1)pointPool.release(a.v[n]), pointPool.release(a.i[n]), pointPool.release(a.o[n]), a.v[n] = null, a.i[n] = null, a.o[n] = null;
                            a._length = 0, a.c = !1;
                        }
                        function i(a) {
                            var s = r.newElement(), n, h = a._length === void 0 ? a.v.length : a._length;
                            for(s.setLength(h), s.c = a.c, n = 0; n < h; n += 1)s.setTripleAt(a.v[n][0], a.v[n][1], a.o[n][0], a.o[n][1], a.i[n][0], a.i[n][1], n);
                            return s;
                        }
                        var r = poolFactory(4, t, e);
                        return r.clone = i, r;
                    }();
                    function ShapeCollection() {
                        this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
                    }
                    ShapeCollection.prototype.addShape = function(t) {
                        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
                    }, ShapeCollection.prototype.releaseShapes = function() {
                        var t;
                        for(t = 0; t < this._length; t += 1)shapePool.release(this.shapes[t]);
                        this._length = 0;
                    };
                    var shapeCollectionPool = function() {
                        var t = {
                            newShapeCollection: a,
                            release: s
                        }, e = 0, i = 4, r = createSizedArray(i);
                        function a() {
                            var n;
                            return e ? (e -= 1, n = r[e]) : n = new ShapeCollection, n;
                        }
                        function s(n) {
                            var h, o = n._length;
                            for(h = 0; h < o; h += 1)shapePool.release(n.shapes[h]);
                            n._length = 0, e === i && (r = pooling.double(r), i *= 2), r[e] = n, e += 1;
                        }
                        return t;
                    }(), ShapePropertyFactory = function() {
                        var t = -999999;
                        function e(m, l, p) {
                            var u = p.lastIndex, P, S, C, M, w, F, V, I, L, B = this.keyframes;
                            if (m < B[0].t - this.offsetTime) P = B[0].s[0], C = !0, u = 0;
                            else if (m >= B[B.length - 1].t - this.offsetTime) P = B[B.length - 1].s ? B[B.length - 1].s[0] : B[B.length - 2].e[0], C = !0;
                            else {
                                for(var R = u, E = B.length - 1, T = !0, y, _, k; T && (y = B[R], _ = B[R + 1], !(_.t - this.offsetTime > m));)R < E - 1 ? R += 1 : T = !1;
                                if (k = this.keyframesMetadata[R] || {}, C = y.h === 1, u = R, !C) {
                                    if (m >= _.t - this.offsetTime) I = 1;
                                    else if (m < y.t - this.offsetTime) I = 0;
                                    else {
                                        var D;
                                        k.__fnct ? D = k.__fnct : (D = BezierFactory.getBezierEasing(y.o.x, y.o.y, y.i.x, y.i.y).get, k.__fnct = D), I = D((m - (y.t - this.offsetTime)) / (_.t - this.offsetTime - (y.t - this.offsetTime)));
                                    }
                                    S = _.s ? _.s[0] : y.e[0];
                                }
                                P = y.s[0];
                            }
                            for(F = l._length, V = P.i[0].length, p.lastIndex = u, M = 0; M < F; M += 1)for(w = 0; w < V; w += 1)L = C ? P.i[M][w] : P.i[M][w] + (S.i[M][w] - P.i[M][w]) * I, l.i[M][w] = L, L = C ? P.o[M][w] : P.o[M][w] + (S.o[M][w] - P.o[M][w]) * I, l.o[M][w] = L, L = C ? P.v[M][w] : P.v[M][w] + (S.v[M][w] - P.v[M][w]) * I, l.v[M][w] = L;
                        }
                        function i() {
                            var m = this.comp.renderedFrame - this.offsetTime, l = this.keyframes[0].t - this.offsetTime, p = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, u = this._caching.lastFrame;
                            return u !== t && (u < l && m < l || u > p && m > p) || (this._caching.lastIndex = u < m ? this._caching.lastIndex : 0, this.interpolateShape(m, this.pv, this._caching)), this._caching.lastFrame = m, this.pv;
                        }
                        function r() {
                            this.paths = this.localShapeCollection;
                        }
                        function a(m, l) {
                            if (m._length !== l._length || m.c !== l.c) return !1;
                            var p, u = m._length;
                            for(p = 0; p < u; p += 1)if (m.v[p][0] !== l.v[p][0] || m.v[p][1] !== l.v[p][1] || m.o[p][0] !== l.o[p][0] || m.o[p][1] !== l.o[p][1] || m.i[p][0] !== l.i[p][0] || m.i[p][1] !== l.i[p][1]) return !1;
                            return !0;
                        }
                        function s(m) {
                            a(this.v, m) || (this.v = shapePool.clone(m), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
                        }
                        function n() {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (!this.effectsSequence.length) {
                                    this._mdf = !1;
                                    return;
                                }
                                if (this.lock) {
                                    this.setVValue(this.pv);
                                    return;
                                }
                                this.lock = !0, this._mdf = !1;
                                var m;
                                this.kf ? m = this.pv : this.data.ks ? m = this.data.ks.k : m = this.data.pt.k;
                                var l, p = this.effectsSequence.length;
                                for(l = 0; l < p; l += 1)m = this.effectsSequence[l](m);
                                this.setVValue(m), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                            }
                        }
                        function h(m, l, p) {
                            this.propType = "shape", this.comp = m.comp, this.container = m, this.elem = m, this.data = l, this.k = !1, this.kf = !1, this._mdf = !1;
                            var u = p === 3 ? l.pt.k : l.ks.k;
                            this.v = shapePool.clone(u), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = [];
                        }
                        function o(m) {
                            this.effectsSequence.push(m), this.container.addDynamicProperty(this);
                        }
                        h.prototype.interpolateShape = e, h.prototype.getValue = n, h.prototype.setVValue = s, h.prototype.addEffect = o;
                        function c(m, l, p) {
                            this.propType = "shape", this.comp = m.comp, this.elem = m, this.container = m, this.offsetTime = m.data.st, this.keyframes = p === 3 ? l.pt.k : l.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                            var u = this.keyframes[0].s[0].i.length;
                            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, u), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = {
                                lastFrame: t,
                                lastIndex: 0
                            }, this.effectsSequence = [
                                i.bind(this)
                            ];
                        }
                        c.prototype.getValue = n, c.prototype.interpolateShape = e, c.prototype.setVValue = s, c.prototype.addEffect = o;
                        var g = function() {
                            var m = roundCorner;
                            function l(p, u) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = u.d, this.elem = p, this.comp = p.comp, this.frameId = -1, this.initDynamicPropertyContainer(p), this.p = PropertyFactory.getProp(p, u.p, 1, 0, this), this.s = PropertyFactory.getProp(p, u.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                            }
                            return l.prototype = {
                                reset: r,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                                },
                                convertEllToPath: function() {
                                    var p = this.p.v[0], u = this.p.v[1], P = this.s.v[0] / 2, S = this.s.v[1] / 2, C = this.d !== 3, M = this.v;
                                    M.v[0][0] = p, M.v[0][1] = u - S, M.v[1][0] = C ? p + P : p - P, M.v[1][1] = u, M.v[2][0] = p, M.v[2][1] = u + S, M.v[3][0] = C ? p - P : p + P, M.v[3][1] = u, M.i[0][0] = C ? p - P * m : p + P * m, M.i[0][1] = u - S, M.i[1][0] = C ? p + P : p - P, M.i[1][1] = u - S * m, M.i[2][0] = C ? p + P * m : p - P * m, M.i[2][1] = u + S, M.i[3][0] = C ? p - P : p + P, M.i[3][1] = u + S * m, M.o[0][0] = C ? p + P * m : p - P * m, M.o[0][1] = u - S, M.o[1][0] = C ? p + P : p - P, M.o[1][1] = u + S * m, M.o[2][0] = C ? p - P * m : p + P * m, M.o[2][1] = u + S, M.o[3][0] = C ? p - P : p + P, M.o[3][1] = u - S * m;
                                }
                            }, extendPrototype([
                                DynamicPropertyContainer
                            ], l), l;
                        }(), b = function() {
                            function m(l, p) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = l, this.comp = l.comp, this.data = p, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(l), p.sy === 1 ? (this.ir = PropertyFactory.getProp(l, p.ir, 0, 0, this), this.is = PropertyFactory.getProp(l, p.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(l, p.pt, 0, 0, this), this.p = PropertyFactory.getProp(l, p.p, 1, 0, this), this.r = PropertyFactory.getProp(l, p.r, 0, degToRads, this), this.or = PropertyFactory.getProp(l, p.or, 0, 0, this), this.os = PropertyFactory.getProp(l, p.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                            }
                            return m.prototype = {
                                reset: r,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                                },
                                convertStarToPath: function() {
                                    var l = Math.floor(this.pt.v) * 2, p = Math.PI * 2 / l, u = !0, P = this.or.v, S = this.ir.v, C = this.os.v, M = this.is.v, w = 2 * Math.PI * P / (l * 2), F = 2 * Math.PI * S / (l * 2), V, I, L, B, R = -Math.PI / 2;
                                    R += this.r.v;
                                    var E = this.data.d === 3 ? -1 : 1;
                                    for(this.v._length = 0, V = 0; V < l; V += 1){
                                        I = u ? P : S, L = u ? C : M, B = u ? w : F;
                                        var T = I * Math.cos(R), y = I * Math.sin(R), _ = T === 0 && y === 0 ? 0 : y / Math.sqrt(T * T + y * y), k = T === 0 && y === 0 ? 0 : -T / Math.sqrt(T * T + y * y);
                                        T += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(T, y, T - _ * B * L * E, y - k * B * L * E, T + _ * B * L * E, y + k * B * L * E, V, !0), u = !u, R += p * E;
                                    }
                                },
                                convertPolygonToPath: function() {
                                    var l = Math.floor(this.pt.v), p = Math.PI * 2 / l, u = this.or.v, P = this.os.v, S = 2 * Math.PI * u / (l * 4), C, M = -Math.PI * .5, w = this.data.d === 3 ? -1 : 1;
                                    for(M += this.r.v, this.v._length = 0, C = 0; C < l; C += 1){
                                        var F = u * Math.cos(M), V = u * Math.sin(M), I = F === 0 && V === 0 ? 0 : V / Math.sqrt(F * F + V * V), L = F === 0 && V === 0 ? 0 : -F / Math.sqrt(F * F + V * V);
                                        F += +this.p.v[0], V += +this.p.v[1], this.v.setTripleAt(F, V, F - I * S * P * w, V - L * S * P * w, F + I * S * P * w, V + L * S * P * w, C, !0), M += p * w;
                                    }
                                    this.paths.length = 0, this.paths[0] = this.v;
                                }
                            }, extendPrototype([
                                DynamicPropertyContainer
                            ], m), m;
                        }(), f = function() {
                            function m(l, p) {
                                this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = l, this.comp = l.comp, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(l), this.p = PropertyFactory.getProp(l, p.p, 1, 0, this), this.s = PropertyFactory.getProp(l, p.s, 1, 0, this), this.r = PropertyFactory.getProp(l, p.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                            }
                            return m.prototype = {
                                convertRectToPath: function() {
                                    var l = this.p.v[0], p = this.p.v[1], u = this.s.v[0] / 2, P = this.s.v[1] / 2, S = bmMin(u, P, this.r.v), C = S * (1 - roundCorner);
                                    this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(l + u, p - P + S, l + u, p - P + S, l + u, p - P + C, 0, !0), this.v.setTripleAt(l + u, p + P - S, l + u, p + P - C, l + u, p + P - S, 1, !0), S !== 0 ? (this.v.setTripleAt(l + u - S, p + P, l + u - S, p + P, l + u - C, p + P, 2, !0), this.v.setTripleAt(l - u + S, p + P, l - u + C, p + P, l - u + S, p + P, 3, !0), this.v.setTripleAt(l - u, p + P - S, l - u, p + P - S, l - u, p + P - C, 4, !0), this.v.setTripleAt(l - u, p - P + S, l - u, p - P + C, l - u, p - P + S, 5, !0), this.v.setTripleAt(l - u + S, p - P, l - u + S, p - P, l - u + C, p - P, 6, !0), this.v.setTripleAt(l + u - S, p - P, l + u - C, p - P, l + u - S, p - P, 7, !0)) : (this.v.setTripleAt(l - u, p + P, l - u + C, p + P, l - u, p + P, 2), this.v.setTripleAt(l - u, p - P, l - u, p - P + C, l - u, p - P, 3))) : (this.v.setTripleAt(l + u, p - P + S, l + u, p - P + C, l + u, p - P + S, 0, !0), S !== 0 ? (this.v.setTripleAt(l + u - S, p - P, l + u - S, p - P, l + u - C, p - P, 1, !0), this.v.setTripleAt(l - u + S, p - P, l - u + C, p - P, l - u + S, p - P, 2, !0), this.v.setTripleAt(l - u, p - P + S, l - u, p - P + S, l - u, p - P + C, 3, !0), this.v.setTripleAt(l - u, p + P - S, l - u, p + P - C, l - u, p + P - S, 4, !0), this.v.setTripleAt(l - u + S, p + P, l - u + S, p + P, l - u + C, p + P, 5, !0), this.v.setTripleAt(l + u - S, p + P, l + u - C, p + P, l + u - S, p + P, 6, !0), this.v.setTripleAt(l + u, p + P - S, l + u, p + P - S, l + u, p + P - C, 7, !0)) : (this.v.setTripleAt(l - u, p - P, l - u + C, p - P, l - u, p - P, 1, !0), this.v.setTripleAt(l - u, p + P, l - u, p + P - C, l - u, p + P, 2, !0), this.v.setTripleAt(l + u, p + P, l + u - C, p + P, l + u, p + P, 3, !0)));
                                },
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                                },
                                reset: r
                            }, extendPrototype([
                                DynamicPropertyContainer
                            ], m), m;
                        }();
                        function x(m, l, p) {
                            var u;
                            if (p === 3 || p === 4) {
                                var P = p === 3 ? l.pt : l.ks, S = P.k;
                                S.length ? u = new c(m, l, p) : u = new h(m, l, p);
                            } else p === 5 ? u = new f(m, l) : p === 6 ? u = new g(m, l) : p === 7 && (u = new b(m, l));
                            return u.k && m.addDynamicProperty(u), u;
                        }
                        function v() {
                            return h;
                        }
                        function d() {
                            return c;
                        }
                        var A = {};
                        return A.getShapeProp = x, A.getConstructorFunction = v, A.getKeyframedConstructorFunction = d, A;
                    }(), Matrix = function() {
                        var t = Math.cos, e = Math.sin, i = Math.tan, r = Math.round;
                        function a() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
                        }
                        function s(y) {
                            if (y === 0) return this;
                            var _ = t(y), k = e(y);
                            return this._t(_, -k, 0, 0, k, _, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                        }
                        function n(y) {
                            if (y === 0) return this;
                            var _ = t(y), k = e(y);
                            return this._t(1, 0, 0, 0, 0, _, -k, 0, 0, k, _, 0, 0, 0, 0, 1);
                        }
                        function h(y) {
                            if (y === 0) return this;
                            var _ = t(y), k = e(y);
                            return this._t(_, 0, k, 0, 0, 1, 0, 0, -k, 0, _, 0, 0, 0, 0, 1);
                        }
                        function o(y) {
                            if (y === 0) return this;
                            var _ = t(y), k = e(y);
                            return this._t(_, -k, 0, 0, k, _, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                        }
                        function c(y, _) {
                            return this._t(1, _, y, 1, 0, 0);
                        }
                        function g(y, _) {
                            return this.shear(i(y), i(_));
                        }
                        function b(y, _) {
                            var k = t(_), D = e(_);
                            return this._t(k, D, 0, 0, -D, k, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(y), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(k, -D, 0, 0, D, k, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                        }
                        function f(y, _, k) {
                            return !k && k !== 0 && (k = 1), y === 1 && _ === 1 && k === 1 ? this : this._t(y, 0, 0, 0, 0, _, 0, 0, 0, 0, k, 0, 0, 0, 0, 1);
                        }
                        function x(y, _, k, D, O, z, H, N, q, W, Y, Q, J, $, Z, j) {
                            return this.props[0] = y, this.props[1] = _, this.props[2] = k, this.props[3] = D, this.props[4] = O, this.props[5] = z, this.props[6] = H, this.props[7] = N, this.props[8] = q, this.props[9] = W, this.props[10] = Y, this.props[11] = Q, this.props[12] = J, this.props[13] = $, this.props[14] = Z, this.props[15] = j, this;
                        }
                        function v(y, _, k) {
                            return k = k || 0, y !== 0 || _ !== 0 || k !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, y, _, k, 1) : this;
                        }
                        function d(y, _, k, D, O, z, H, N, q, W, Y, Q, J, $, Z, j) {
                            var G = this.props;
                            if (y === 1 && _ === 0 && k === 0 && D === 0 && O === 0 && z === 1 && H === 0 && N === 0 && q === 0 && W === 0 && Y === 1 && Q === 0) return G[12] = G[12] * y + G[15] * J, G[13] = G[13] * z + G[15] * $, G[14] = G[14] * Y + G[15] * Z, G[15] *= j, this._identityCalculated = !1, this;
                            var et = G[0], st = G[1], it = G[2], tt = G[3], rt = G[4], at = G[5], X = G[6], nt = G[7], ot = G[8], K = G[9], ht = G[10], U = G[11], lt = G[12], pt = G[13], ft = G[14], mt = G[15];
                            return G[0] = et * y + st * O + it * q + tt * J, G[1] = et * _ + st * z + it * W + tt * $, G[2] = et * k + st * H + it * Y + tt * Z, G[3] = et * D + st * N + it * Q + tt * j, G[4] = rt * y + at * O + X * q + nt * J, G[5] = rt * _ + at * z + X * W + nt * $, G[6] = rt * k + at * H + X * Y + nt * Z, G[7] = rt * D + at * N + X * Q + nt * j, G[8] = ot * y + K * O + ht * q + U * J, G[9] = ot * _ + K * z + ht * W + U * $, G[10] = ot * k + K * H + ht * Y + U * Z, G[11] = ot * D + K * N + ht * Q + U * j, G[12] = lt * y + pt * O + ft * q + mt * J, G[13] = lt * _ + pt * z + ft * W + mt * $, G[14] = lt * k + pt * H + ft * Y + mt * Z, G[15] = lt * D + pt * N + ft * Q + mt * j, this._identityCalculated = !1, this;
                        }
                        function A(y) {
                            var _ = y.props;
                            return this.transform(_[0], _[1], _[2], _[3], _[4], _[5], _[6], _[7], _[8], _[9], _[10], _[11], _[12], _[13], _[14], _[15]);
                        }
                        function m() {
                            return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
                        }
                        function l(y) {
                            for(var _ = 0; _ < 16;){
                                if (y.props[_] !== this.props[_]) return !1;
                                _ += 1;
                            }
                            return !0;
                        }
                        function p(y) {
                            var _;
                            for(_ = 0; _ < 16; _ += 1)y.props[_] = this.props[_];
                            return y;
                        }
                        function u(y) {
                            var _;
                            for(_ = 0; _ < 16; _ += 1)this.props[_] = y[_];
                        }
                        function P(y, _, k) {
                            return {
                                x: y * this.props[0] + _ * this.props[4] + k * this.props[8] + this.props[12],
                                y: y * this.props[1] + _ * this.props[5] + k * this.props[9] + this.props[13],
                                z: y * this.props[2] + _ * this.props[6] + k * this.props[10] + this.props[14]
                            };
                        }
                        function S(y, _, k) {
                            return y * this.props[0] + _ * this.props[4] + k * this.props[8] + this.props[12];
                        }
                        function C(y, _, k) {
                            return y * this.props[1] + _ * this.props[5] + k * this.props[9] + this.props[13];
                        }
                        function M(y, _, k) {
                            return y * this.props[2] + _ * this.props[6] + k * this.props[10] + this.props[14];
                        }
                        function w() {
                            var y = this.props[0] * this.props[5] - this.props[1] * this.props[4], _ = this.props[5] / y, k = -this.props[1] / y, D = -this.props[4] / y, O = this.props[0] / y, z = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / y, H = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / y, N = new Matrix;
                            return N.props[0] = _, N.props[1] = k, N.props[4] = D, N.props[5] = O, N.props[12] = z, N.props[13] = H, N;
                        }
                        function F(y) {
                            var _ = this.getInverseMatrix();
                            return _.applyToPointArray(y[0], y[1], y[2] || 0);
                        }
                        function V(y) {
                            var _, k = y.length, D = [];
                            for(_ = 0; _ < k; _ += 1)D[_] = F(y[_]);
                            return D;
                        }
                        function I(y, _, k) {
                            var D = createTypedArray("float32", 6);
                            if (this.isIdentity()) D[0] = y[0], D[1] = y[1], D[2] = _[0], D[3] = _[1], D[4] = k[0], D[5] = k[1];
                            else {
                                var O = this.props[0], z = this.props[1], H = this.props[4], N = this.props[5], q = this.props[12], W = this.props[13];
                                D[0] = y[0] * O + y[1] * H + q, D[1] = y[0] * z + y[1] * N + W, D[2] = _[0] * O + _[1] * H + q, D[3] = _[0] * z + _[1] * N + W, D[4] = k[0] * O + k[1] * H + q, D[5] = k[0] * z + k[1] * N + W;
                            }
                            return D;
                        }
                        function L(y, _, k) {
                            var D;
                            return this.isIdentity() ? D = [
                                y,
                                _,
                                k
                            ] : D = [
                                y * this.props[0] + _ * this.props[4] + k * this.props[8] + this.props[12],
                                y * this.props[1] + _ * this.props[5] + k * this.props[9] + this.props[13],
                                y * this.props[2] + _ * this.props[6] + k * this.props[10] + this.props[14]
                            ], D;
                        }
                        function B(y, _) {
                            if (this.isIdentity()) return y + "," + _;
                            var k = this.props;
                            return Math.round((y * k[0] + _ * k[4] + k[12]) * 100) / 100 + "," + Math.round((y * k[1] + _ * k[5] + k[13]) * 100) / 100;
                        }
                        function R() {
                            for(var y = 0, _ = this.props, k = "matrix3d(", D = 1e4; y < 16;)k += r(_[y] * D) / D, k += y === 15 ? ")" : ",", y += 1;
                            return k;
                        }
                        function E(y) {
                            var _ = 1e4;
                            return y < 1e-6 && y > 0 || y > -0.000001 && y < 0 ? r(y * _) / _ : y;
                        }
                        function T() {
                            var y = this.props, _ = E(y[0]), k = E(y[1]), D = E(y[4]), O = E(y[5]), z = E(y[12]), H = E(y[13]);
                            return "matrix(" + _ + "," + k + "," + D + "," + O + "," + z + "," + H + ")";
                        }
                        return function() {
                            this.reset = a, this.rotate = s, this.rotateX = n, this.rotateY = h, this.rotateZ = o, this.skew = g, this.skewFromAxis = b, this.shear = c, this.scale = f, this.setTransform = x, this.translate = v, this.transform = d, this.multiply = A, this.applyToPoint = P, this.applyToX = S, this.applyToY = C, this.applyToZ = M, this.applyToPointArray = L, this.applyToTriplePoints = I, this.applyToPointStringified = B, this.toCSS = R, this.to2dCSS = T, this.clone = p, this.cloneFromProps = u, this.equals = l, this.inversePoints = V, this.inversePoint = F, this.getInverseMatrix = w, this._t = this.transform, this.isIdentity = m, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
                        };
                    }();
                    function _typeof$3(t) {
                        "@babel/helpers - typeof";
                        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(e) {
                            return typeof e;
                        } : _typeof$3 = function(e) {
                            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, _typeof$3(t);
                    }
                    var lottie = {};
                    function setLocation(t) {
                        setLocationHref(t);
                    }
                    function searchAnimations() {
                        animationManager.searchAnimations();
                    }
                    function setSubframeRendering(t) {
                        setSubframeEnabled(t);
                    }
                    function setPrefix(t) {
                        setIdPrefix(t);
                    }
                    function loadAnimation(t) {
                        return animationManager.loadAnimation(t);
                    }
                    function setQuality(t) {
                        if (typeof t == "string") switch(t){
                            case "high":
                                setDefaultCurveSegments(200);
                                break;
                            default:
                            case "medium":
                                setDefaultCurveSegments(50);
                                break;
                            case "low":
                                setDefaultCurveSegments(10);
                                break;
                        }
                        else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
                    }
                    function inBrowser() {
                        return typeof navigator < "u";
                    }
                    function installPlugin(t, e) {
                        t === "expressions" && setExpressionsPlugin(e);
                    }
                    function getFactory(t) {
                        switch(t){
                            case "propertyFactory":
                                return PropertyFactory;
                            case "shapePropertyFactory":
                                return ShapePropertyFactory;
                            case "matrix":
                                return Matrix;
                            default:
                                return null;
                        }
                    }
                    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
                    function checkReady() {
                        document1.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
                    }
                    function getQueryVariable(t) {
                        for(var e = queryString.split("&"), i = 0; i < e.length; i += 1){
                            var r = e[i].split("=");
                            if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1]);
                        }
                        return null;
                    }
                    var queryString = "";
                    var scripts = document1.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || {
                        src: ""
                    };
                    queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
                    var readyStateCheckInterval = setInterval(checkReady, 100);
                    try {
                        !((typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u") && !(typeof define == "function" && define.amd) && (window.bodymovin = lottie);
                    } catch (t) {}
                    var ShapeModifiers = function() {
                        var t = {}, e = {};
                        t.registerModifier = i, t.getModifier = r;
                        function i(a, s) {
                            e[a] || (e[a] = s);
                        }
                        function r(a, s, n) {
                            return new e[a](s, n);
                        }
                        return t;
                    }();
                    function ShapeModifier() {}
                    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                        if (!this.closed) {
                            t.sh.container.addDynamicProperty(t.sh);
                            var e = {
                                shape: t.sh,
                                data: t,
                                localShapeCollection: shapeCollectionPool.newShapeCollection()
                            };
                            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
                        }
                    }, ShapeModifier.prototype.init = function(t, e) {
                        this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
                    }, ShapeModifier.prototype.processKeys = function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
                    }, extendPrototype([
                        DynamicPropertyContainer
                    ], ShapeModifier);
                    function TrimModifier() {}
                    extendPrototype([
                        ShapeModifier
                    ], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                        this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
                    }, TrimModifier.prototype.addShapeToModifier = function(t) {
                        t.pathsData = [];
                    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, a) {
                        var s = [];
                        e <= 1 ? s.push({
                            s: t,
                            e
                        }) : t >= 1 ? s.push({
                            s: t - 1,
                            e: e - 1
                        }) : (s.push({
                            s: t,
                            e: 1
                        }), s.push({
                            s: 0,
                            e: e - 1
                        }));
                        var n = [], h, o = s.length, c;
                        for(h = 0; h < o; h += 1)if (c = s[h], !(c.e * a < r || c.s * a > r + i)) {
                            var g, b;
                            c.s * a <= r ? g = 0 : g = (c.s * a - r) / i, c.e * a >= r + i ? b = 1 : b = (c.e * a - r) / i, n.push([
                                g,
                                b
                            ]);
                        }
                        return n.length || n.push([
                            0,
                            0
                        ]), n;
                    }, TrimModifier.prototype.releasePathsData = function(t) {
                        var e, i = t.length;
                        for(e = 0; e < i; e += 1)segmentsLengthPool.release(t[e]);
                        return t.length = 0, t;
                    }, TrimModifier.prototype.processShapes = function(t) {
                        var e, i;
                        if (this._mdf || t) {
                            var r = this.o.v % 360 / 360;
                            if (r < 0 && (r += 1), this.s.v > 1 ? e = 1 + r : this.s.v < 0 ? e = 0 + r : e = this.s.v + r, this.e.v > 1 ? i = 1 + r : this.e.v < 0 ? i = 0 + r : i = this.e.v + r, e > i) {
                                var a = e;
                                e = i, i = a;
                            }
                            e = Math.round(e * 1e4) * 1e-4, i = Math.round(i * 1e4) * 1e-4, this.sValue = e, this.eValue = i;
                        } else e = this.sValue, i = this.eValue;
                        var s, n, h = this.shapes.length, o, c, g, b, f, x = 0;
                        if (i === e) for(n = 0; n < h; n += 1)this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
                        else if (i === 1 && e === 0 || i === 0 && e === 1) {
                            if (this._mdf) for(n = 0; n < h; n += 1)this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0;
                        } else {
                            var v = [], d, A;
                            for(n = 0; n < h; n += 1)if (d = this.shapes[n], !d.shape._mdf && !this._mdf && !t && this.m !== 2) d.shape.paths = d.localShapeCollection;
                            else {
                                if (s = d.shape.paths, c = s._length, f = 0, !d.shape._mdf && d.pathsData.length) f = d.totalShapeLength;
                                else {
                                    for(g = this.releasePathsData(d.pathsData), o = 0; o < c; o += 1)b = bez.getSegmentsLength(s.shapes[o]), g.push(b), f += b.totalLength;
                                    d.totalShapeLength = f, d.pathsData = g;
                                }
                                x += f, d.shape._mdf = !0;
                            }
                            var m = e, l = i, p = 0, u;
                            for(n = h - 1; n >= 0; n -= 1)if (d = this.shapes[n], d.shape._mdf) {
                                for(A = d.localShapeCollection, A.releaseShapes(), this.m === 2 && h > 1 ? (u = this.calculateShapeEdges(e, i, d.totalShapeLength, p, x), p += d.totalShapeLength) : u = [
                                    [
                                        m,
                                        l
                                    ]
                                ], c = u.length, o = 0; o < c; o += 1){
                                    m = u[o][0], l = u[o][1], v.length = 0, l <= 1 ? v.push({
                                        s: d.totalShapeLength * m,
                                        e: d.totalShapeLength * l
                                    }) : m >= 1 ? v.push({
                                        s: d.totalShapeLength * (m - 1),
                                        e: d.totalShapeLength * (l - 1)
                                    }) : (v.push({
                                        s: d.totalShapeLength * m,
                                        e: d.totalShapeLength
                                    }), v.push({
                                        s: 0,
                                        e: d.totalShapeLength * (l - 1)
                                    }));
                                    var P = this.addShapes(d, v[0]);
                                    if (v[0].s !== v[0].e) {
                                        if (v.length > 1) {
                                            var S = d.shape.paths.shapes[d.shape.paths._length - 1];
                                            if (S.c) {
                                                var C = P.pop();
                                                this.addPaths(P, A), P = this.addShapes(d, v[1], C);
                                            } else this.addPaths(P, A), P = this.addShapes(d, v[1]);
                                        }
                                        this.addPaths(P, A);
                                    }
                                }
                                d.shape.paths = A;
                            }
                        }
                    }, TrimModifier.prototype.addPaths = function(t, e) {
                        var i, r = t.length;
                        for(i = 0; i < r; i += 1)e.addShape(t[i]);
                    }, TrimModifier.prototype.addSegment = function(t, e, i, r, a, s, n) {
                        a.setXYAt(e[0], e[1], "o", s), a.setXYAt(i[0], i[1], "i", s + 1), n && a.setXYAt(t[0], t[1], "v", s), a.setXYAt(r[0], r[1], "v", s + 1);
                    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
                        e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
                    }, TrimModifier.prototype.addShapes = function(t, e, i) {
                        var r = t.pathsData, a = t.shape.paths.shapes, s, n = t.shape.paths._length, h, o, c = 0, g, b, f, x, v = [], d, A = !0;
                        for(i ? (b = i._length, d = i._length) : (i = shapePool.newElement(), b = 0, d = 0), v.push(i), s = 0; s < n; s += 1){
                            for(f = r[s].lengths, i.c = a[s].c, o = a[s].c ? f.length : f.length + 1, h = 1; h < o; h += 1)if (g = f[h - 1], c + g.addedLength < e.s) c += g.addedLength, i.c = !1;
                            else if (c > e.e) {
                                i.c = !1;
                                break;
                            } else e.s <= c && e.e >= c + g.addedLength ? (this.addSegment(a[s].v[h - 1], a[s].o[h - 1], a[s].i[h], a[s].v[h], i, b, A), A = !1) : (x = bez.getNewSegment(a[s].v[h - 1], a[s].v[h], a[s].o[h - 1], a[s].i[h], (e.s - c) / g.addedLength, (e.e - c) / g.addedLength, f[h - 1]), this.addSegmentFromArray(x, i, b, A), A = !1, i.c = !1), c += g.addedLength, b += 1;
                            if (a[s].c && f.length) {
                                if (g = f[h - 1], c <= e.e) {
                                    var m = f[h - 1].addedLength;
                                    e.s <= c && e.e >= c + m ? (this.addSegment(a[s].v[h - 1], a[s].o[h - 1], a[s].i[0], a[s].v[0], i, b, A), A = !1) : (x = bez.getNewSegment(a[s].v[h - 1], a[s].v[0], a[s].o[h - 1], a[s].i[0], (e.s - c) / m, (e.e - c) / m, f[h - 1]), this.addSegmentFromArray(x, i, b, A), A = !1, i.c = !1);
                                } else i.c = !1;
                                c += g.addedLength, b += 1;
                            }
                            if (i._length && (i.setXYAt(i.v[d][0], i.v[d][1], "i", d), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), c > e.e) break;
                            s < n - 1 && (i = shapePool.newElement(), A = !0, v.push(i), b = 0);
                        }
                        return v;
                    };
                    function PuckerAndBloatModifier() {}
                    extendPrototype([
                        ShapeModifier
                    ], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
                    }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                        var i = e / 100, r = [
                            0,
                            0
                        ], a = t._length, s = 0;
                        for(s = 0; s < a; s += 1)r[0] += t.v[s][0], r[1] += t.v[s][1];
                        r[0] /= a, r[1] /= a;
                        var n = shapePool.newElement();
                        n.c = t.c;
                        var h, o, c, g, b, f;
                        for(s = 0; s < a; s += 1)h = t.v[s][0] + (r[0] - t.v[s][0]) * i, o = t.v[s][1] + (r[1] - t.v[s][1]) * i, c = t.o[s][0] + (r[0] - t.o[s][0]) * -i, g = t.o[s][1] + (r[1] - t.o[s][1]) * -i, b = t.i[s][0] + (r[0] - t.i[s][0]) * -i, f = t.i[s][1] + (r[1] - t.i[s][1]) * -i, n.setTripleAt(h, o, c, g, b, f, s);
                        return n;
                    }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                        var e, i, r = this.shapes.length, a, s, n = this.amount.v;
                        if (n !== 0) {
                            var h, o;
                            for(i = 0; i < r; i += 1){
                                if (h = this.shapes[i], o = h.localShapeCollection, !(!h.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, s = h.shape.paths._length, a = 0; a < s; a += 1)o.addShape(this.processPath(e[a], n));
                                h.shape.paths = h.localShapeCollection;
                            }
                        }
                        this.dynamicProperties.length || (this._mdf = !1);
                    };
                    var TransformPropertyFactory = function() {
                        var t = [
                            0,
                            0
                        ];
                        function e(o) {
                            var c = this._mdf;
                            this.iterateDynamicProperties(), this._mdf = this._mdf || c, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                        }
                        function i(o) {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
                                    var c;
                                    if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                        var g, b;
                                        if (c = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (g = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / c, 0), b = this.p.getValueAtTime(this.p.keyframes[0].t / c, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (g = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / c, 0), b = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / c, 0)) : (g = this.p.pv, b = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / c, this.p.offsetTime));
                                        else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                            g = [], b = [];
                                            var f = this.px, x = this.py;
                                            f._caching.lastFrame + f.offsetTime <= f.keyframes[0].t ? (g[0] = f.getValueAtTime((f.keyframes[0].t + .01) / c, 0), g[1] = x.getValueAtTime((x.keyframes[0].t + .01) / c, 0), b[0] = f.getValueAtTime(f.keyframes[0].t / c, 0), b[1] = x.getValueAtTime(x.keyframes[0].t / c, 0)) : f._caching.lastFrame + f.offsetTime >= f.keyframes[f.keyframes.length - 1].t ? (g[0] = f.getValueAtTime(f.keyframes[f.keyframes.length - 1].t / c, 0), g[1] = x.getValueAtTime(x.keyframes[x.keyframes.length - 1].t / c, 0), b[0] = f.getValueAtTime((f.keyframes[f.keyframes.length - 1].t - .01) / c, 0), b[1] = x.getValueAtTime((x.keyframes[x.keyframes.length - 1].t - .01) / c, 0)) : (g = [
                                                f.pv,
                                                x.pv
                                            ], b[0] = f.getValueAtTime((f._caching.lastFrame + f.offsetTime - .01) / c, f.offsetTime), b[1] = x.getValueAtTime((x._caching.lastFrame + x.offsetTime - .01) / c, x.offsetTime));
                                        } else b = t, g = b;
                                        this.v.rotate(-Math.atan2(g[1] - b[1], g[0] - b[0]));
                                    }
                                    this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                                }
                                this.frameId = this.elem.globalData.frameId;
                            }
                        }
                        function r() {
                            if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
                            else return;
                            if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
                            else return;
                            if (this.sk) {
                                if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                                else return;
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
                        }
                        function a() {}
                        function s(o) {
                            this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0;
                        }
                        function n(o, c, g) {
                            if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = c, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(g || o), c.p && c.p.s ? (this.px = PropertyFactory.getProp(o, c.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, c.p.y, 0, 0, this), c.p.z && (this.pz = PropertyFactory.getProp(o, c.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, c.p || {
                                k: [
                                    0,
                                    0,
                                    0
                                ]
                            }, 1, 0, this), c.rx) {
                                if (this.rx = PropertyFactory.getProp(o, c.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, c.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, c.rz, 0, degToRads, this), c.or.k[0].ti) {
                                    var b, f = c.or.k.length;
                                    for(b = 0; b < f; b += 1)c.or.k[b].to = null, c.or.k[b].ti = null;
                                }
                                this.or = PropertyFactory.getProp(o, c.or, 1, degToRads, this), this.or.sh = !0;
                            } else this.r = PropertyFactory.getProp(o, c.r || {
                                k: 0
                            }, 0, degToRads, this);
                            c.sk && (this.sk = PropertyFactory.getProp(o, c.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, c.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, c.a || {
                                k: [
                                    0,
                                    0,
                                    0
                                ]
                            }, 1, 0, this), this.s = PropertyFactory.getProp(o, c.s || {
                                k: [
                                    100,
                                    100,
                                    100
                                ]
                            }, 1, .01, this), c.o ? this.o = PropertyFactory.getProp(o, c.o, 0, .01, o) : this.o = {
                                _mdf: !1,
                                v: 1
                            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
                        }
                        n.prototype = {
                            applyToMatrix: e,
                            getValue: i,
                            precalculateMatrix: r,
                            autoOrient: a
                        }, extendPrototype([
                            DynamicPropertyContainer
                        ], n), n.prototype.addDynamicProperty = s, n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
                        function h(o, c, g) {
                            return new n(o, c, g);
                        }
                        return {
                            getTransformProperty: h
                        };
                    }();
                    function RepeaterModifier() {}
                    extendPrototype([
                        ShapeModifier
                    ], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix;
                    }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, a, s) {
                        var n = s ? -1 : 1, h = r.s.v[0] + (1 - r.s.v[0]) * (1 - a), o = r.s.v[1] + (1 - r.s.v[1]) * (1 - a);
                        t.translate(r.p.v[0] * n * a, r.p.v[1] * n * a, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * n * a), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(s ? 1 / h : h, s ? 1 / o : o), i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
                    }, RepeaterModifier.prototype.init = function(t, e, i, r) {
                        for(this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;)i -= 1, this._elements.unshift(e[i]);
                        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
                    }, RepeaterModifier.prototype.resetElements = function(t) {
                        var e, i = t.length;
                        for(e = 0; e < i; e += 1)t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it);
                    }, RepeaterModifier.prototype.cloneElements = function(t) {
                        var e = JSON.parse(JSON.stringify(t));
                        return this.resetElements(e), e;
                    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                        var i, r = t.length;
                        for(i = 0; i < r; i += 1)t[i]._render = e, t[i].ty === "gr" && this.changeGroupRender(t[i].it, e);
                    }, RepeaterModifier.prototype.processShapes = function(t) {
                        var e, i, r, a, s, n = !1;
                        if (this._mdf || t) {
                            var h = Math.ceil(this.c.v);
                            if (this._groups.length < h) {
                                for(; this._groups.length < h;){
                                    var o = {
                                        it: this.cloneElements(this._elements),
                                        ty: "gr"
                                    };
                                    o.it.push({
                                        a: {
                                            a: 0,
                                            ix: 1,
                                            k: [
                                                0,
                                                0
                                            ]
                                        },
                                        nm: "Transform",
                                        o: {
                                            a: 0,
                                            ix: 7,
                                            k: 100
                                        },
                                        p: {
                                            a: 0,
                                            ix: 2,
                                            k: [
                                                0,
                                                0
                                            ]
                                        },
                                        r: {
                                            a: 1,
                                            ix: 6,
                                            k: [
                                                {
                                                    s: 0,
                                                    e: 0,
                                                    t: 0
                                                },
                                                {
                                                    s: 0,
                                                    e: 0,
                                                    t: 1
                                                }
                                            ]
                                        },
                                        s: {
                                            a: 0,
                                            ix: 3,
                                            k: [
                                                100,
                                                100
                                            ]
                                        },
                                        sa: {
                                            a: 0,
                                            ix: 5,
                                            k: 0
                                        },
                                        sk: {
                                            a: 0,
                                            ix: 4,
                                            k: 0
                                        },
                                        ty: "tr"
                                    }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1;
                                }
                                this.elem.reloadShapes(), n = !0;
                            }
                            s = 0;
                            var c;
                            for(r = 0; r <= this._groups.length - 1; r += 1){
                                if (c = s < h, this._groups[r]._render = c, this.changeGroupRender(this._groups[r].it, c), !c) {
                                    var g = this.elemsData[r].it, b = g[g.length - 1];
                                    b.transform.op.v !== 0 ? (b.transform.op._mdf = !0, b.transform.op.v = 0) : b.transform.op._mdf = !1;
                                }
                                s += 1;
                            }
                            this._currentCopies = h;
                            var f = this.o.v, x = f % 1, v = f > 0 ? Math.floor(f) : Math.ceil(f), d = this.pMatrix.props, A = this.rMatrix.props, m = this.sMatrix.props;
                            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                            var l = 0;
                            if (f > 0) {
                                for(; l < v;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), l += 1;
                                x && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, x, !1), l += x);
                            } else if (f < 0) {
                                for(; l > v;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), l -= 1;
                                x && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -x, !0), l -= x);
                            }
                            r = this.data.m === 1 ? 0 : this._currentCopies - 1, a = this.data.m === 1 ? 1 : -1, s = this._currentCopies;
                            for(var p, u; s;){
                                if (e = this.elemsData[r].it, i = e[e.length - 1].transform.mProps.v.props, u = i.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), l !== 0) {
                                    for((r !== 0 && a === 1 || r !== this._currentCopies - 1 && a === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(A[0], A[1], A[2], A[3], A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12], A[13], A[14], A[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), p = 0; p < u; p += 1)i[p] = this.matrix.props[p];
                                    this.matrix.reset();
                                } else for(this.matrix.reset(), p = 0; p < u; p += 1)i[p] = this.matrix.props[p];
                                l += 1, s -= 1, r += a;
                            }
                        } else for(s = this._currentCopies, r = 0, a = 1; s;)e = this.elemsData[r].it, i = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, r += a;
                        return n;
                    }, RepeaterModifier.prototype.addShape = function() {};
                    function RoundCornersModifier() {}
                    extendPrototype([
                        ShapeModifier
                    ], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
                    }, RoundCornersModifier.prototype.processPath = function(t, e) {
                        var i = shapePool.newElement();
                        i.c = t.c;
                        var r, a = t._length, s, n, h, o, c, g, b = 0, f, x, v, d, A, m;
                        for(r = 0; r < a; r += 1)s = t.v[r], h = t.o[r], n = t.i[r], s[0] === h[0] && s[1] === h[1] && s[0] === n[0] && s[1] === n[1] ? (r === 0 || r === a - 1) && !t.c ? (i.setTripleAt(s[0], s[1], h[0], h[1], n[0], n[1], b), b += 1) : (r === 0 ? o = t.v[a - 1] : o = t.v[r - 1], c = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)), g = c ? Math.min(c / 2, e) / c : 0, A = s[0] + (o[0] - s[0]) * g, f = A, m = s[1] - (s[1] - o[1]) * g, x = m, v = f - (f - s[0]) * roundCorner, d = x - (x - s[1]) * roundCorner, i.setTripleAt(f, x, v, d, A, m, b), b += 1, r === a - 1 ? o = t.v[0] : o = t.v[r + 1], c = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)), g = c ? Math.min(c / 2, e) / c : 0, v = s[0] + (o[0] - s[0]) * g, f = v, d = s[1] + (o[1] - s[1]) * g, x = d, A = f - (f - s[0]) * roundCorner, m = x - (x - s[1]) * roundCorner, i.setTripleAt(f, x, v, d, A, m, b), b += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], b), b += 1);
                        return i;
                    }, RoundCornersModifier.prototype.processShapes = function(t) {
                        var e, i, r = this.shapes.length, a, s, n = this.rd.v;
                        if (n !== 0) {
                            var h, o;
                            for(i = 0; i < r; i += 1){
                                if (h = this.shapes[i], o = h.localShapeCollection, !(!h.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, s = h.shape.paths._length, a = 0; a < s; a += 1)o.addShape(this.processPath(e[a], n));
                                h.shape.paths = h.localShapeCollection;
                            }
                        }
                        this.dynamicProperties.length || (this._mdf = !1);
                    };
                    function floatEqual(t, e) {
                        return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
                    }
                    function floatZero(t) {
                        return Math.abs(t) <= 1e-5;
                    }
                    function lerp(t, e, i) {
                        return t * (1 - i) + e * i;
                    }
                    function lerpPoint(t, e, i) {
                        return [
                            lerp(t[0], e[0], i),
                            lerp(t[1], e[1], i)
                        ];
                    }
                    function quadRoots(t, e, i) {
                        if (t === 0) return [];
                        var r = e * e - 4 * t * i;
                        if (r < 0) return [];
                        var a = -e / (2 * t);
                        if (r === 0) return [
                            a
                        ];
                        var s = Math.sqrt(r) / (2 * t);
                        return [
                            a - s,
                            a + s
                        ];
                    }
                    function polynomialCoefficients(t, e, i, r) {
                        return [
                            -t + 3 * e - 3 * i + r,
                            3 * t - 6 * e + 3 * i,
                            -3 * t + 3 * e,
                            t
                        ];
                    }
                    function singlePoint(t) {
                        return new PolynomialBezier(t, t, t, t, !1);
                    }
                    function PolynomialBezier(t, e, i, r, a) {
                        a && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)), a && pointEqual(i, r) && (i = lerpPoint(t, r, 2 / 3));
                        var s = polynomialCoefficients(t[0], e[0], i[0], r[0]), n = polynomialCoefficients(t[1], e[1], i[1], r[1]);
                        this.a = [
                            s[0],
                            n[0]
                        ], this.b = [
                            s[1],
                            n[1]
                        ], this.c = [
                            s[2],
                            n[2]
                        ], this.d = [
                            s[3],
                            n[3]
                        ], this.points = [
                            t,
                            e,
                            i,
                            r
                        ];
                    }
                    PolynomialBezier.prototype.point = function(t) {
                        return [
                            ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
                            ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]
                        ];
                    }, PolynomialBezier.prototype.derivative = function(t) {
                        return [
                            (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
                            (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]
                        ];
                    }, PolynomialBezier.prototype.tangentAngle = function(t) {
                        var e = this.derivative(t);
                        return Math.atan2(e[1], e[0]);
                    }, PolynomialBezier.prototype.normalAngle = function(t) {
                        var e = this.derivative(t);
                        return Math.atan2(e[0], e[1]);
                    }, PolynomialBezier.prototype.inflectionPoints = function() {
                        var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                        if (floatZero(t)) return [];
                        var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                        if (i < 0) return [];
                        var r = Math.sqrt(i);
                        return floatZero(r) ? r > 0 && r < 1 ? [
                            e
                        ] : [] : [
                            e - r,
                            e + r
                        ].filter(function(a) {
                            return a > 0 && a < 1;
                        });
                    }, PolynomialBezier.prototype.split = function(t) {
                        if (t <= 0) return [
                            singlePoint(this.points[0]),
                            this
                        ];
                        if (t >= 1) return [
                            this,
                            singlePoint(this.points[this.points.length - 1])
                        ];
                        var e = lerpPoint(this.points[0], this.points[1], t), i = lerpPoint(this.points[1], this.points[2], t), r = lerpPoint(this.points[2], this.points[3], t), a = lerpPoint(e, i, t), s = lerpPoint(i, r, t), n = lerpPoint(a, s, t);
                        return [
                            new PolynomialBezier(this.points[0], e, a, n, !0),
                            new PolynomialBezier(n, s, r, this.points[3], !0)
                        ];
                    };
                    function extrema(t, e) {
                        var i = t.points[0][e], r = t.points[t.points.length - 1][e];
                        if (i > r) {
                            var a = r;
                            r = i, i = a;
                        }
                        for(var s = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < s.length; n += 1)if (s[n] > 0 && s[n] < 1) {
                            var h = t.point(s[n])[e];
                            h < i ? i = h : h > r && (r = h);
                        }
                        return {
                            min: i,
                            max: r
                        };
                    }
                    PolynomialBezier.prototype.bounds = function() {
                        return {
                            x: extrema(this, 0),
                            y: extrema(this, 1)
                        };
                    }, PolynomialBezier.prototype.boundingBox = function() {
                        var t = this.bounds();
                        return {
                            left: t.x.min,
                            right: t.x.max,
                            top: t.y.min,
                            bottom: t.y.max,
                            width: t.x.max - t.x.min,
                            height: t.y.max - t.y.min,
                            cx: (t.x.max + t.x.min) / 2,
                            cy: (t.y.max + t.y.min) / 2
                        };
                    };
                    function intersectData(t, e, i) {
                        var r = t.boundingBox();
                        return {
                            cx: r.cx,
                            cy: r.cy,
                            width: r.width,
                            height: r.height,
                            bez: t,
                            t: (e + i) / 2,
                            t1: e,
                            t2: i
                        };
                    }
                    function splitData(t) {
                        var e = t.bez.split(.5);
                        return [
                            intersectData(e[0], t.t1, t.t),
                            intersectData(e[1], t.t, t.t2)
                        ];
                    }
                    function boxIntersect(t, e) {
                        return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
                    }
                    function intersectsImpl(t, e, i, r, a, s) {
                        if (boxIntersect(t, e)) {
                            if (i >= s || t.width <= r && t.height <= r && e.width <= r && e.height <= r) {
                                a.push([
                                    t.t,
                                    e.t
                                ]);
                                return;
                            }
                            var n = splitData(t), h = splitData(e);
                            intersectsImpl(n[0], h[0], i + 1, r, a, s), intersectsImpl(n[0], h[1], i + 1, r, a, s), intersectsImpl(n[1], h[0], i + 1, r, a, s), intersectsImpl(n[1], h[1], i + 1, r, a, s);
                        }
                    }
                    PolynomialBezier.prototype.intersections = function(t, e, i) {
                        e === void 0 && (e = 2), i === void 0 && (i = 7);
                        var r = [];
                        return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, r, i), r;
                    }, PolynomialBezier.shapeSegment = function(t, e) {
                        var i = (e + 1) % t.length();
                        return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], !0);
                    }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
                        var i = (e + 1) % t.length();
                        return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], !0);
                    };
                    function crossProduct(t, e) {
                        return [
                            t[1] * e[2] - t[2] * e[1],
                            t[2] * e[0] - t[0] * e[2],
                            t[0] * e[1] - t[1] * e[0]
                        ];
                    }
                    function lineIntersection(t, e, i, r) {
                        var a = [
                            t[0],
                            t[1],
                            1
                        ], s = [
                            e[0],
                            e[1],
                            1
                        ], n = [
                            i[0],
                            i[1],
                            1
                        ], h = [
                            r[0],
                            r[1],
                            1
                        ], o = crossProduct(crossProduct(a, s), crossProduct(n, h));
                        return floatZero(o[2]) ? null : [
                            o[0] / o[2],
                            o[1] / o[2]
                        ];
                    }
                    function polarOffset(t, e, i) {
                        return [
                            t[0] + Math.cos(e) * i,
                            t[1] - Math.sin(e) * i
                        ];
                    }
                    function pointDistance(t, e) {
                        return Math.hypot(t[0] - e[0], t[1] - e[1]);
                    }
                    function pointEqual(t, e) {
                        return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
                    }
                    function ZigZagModifier() {}
                    extendPrototype([
                        ShapeModifier
                    ], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
                    };
                    function setPoint(t, e, i, r, a, s, n) {
                        var h = i - Math.PI / 2, o = i + Math.PI / 2, c = e[0] + Math.cos(i) * r * a, g = e[1] - Math.sin(i) * r * a;
                        t.setTripleAt(c, g, c + Math.cos(h) * s, g - Math.sin(h) * s, c + Math.cos(o) * n, g - Math.sin(o) * n, t.length());
                    }
                    function getPerpendicularVector(t, e) {
                        var i = [
                            e[0] - t[0],
                            e[1] - t[1]
                        ], r = -Math.PI * .5, a = [
                            Math.cos(r) * i[0] - Math.sin(r) * i[1],
                            Math.sin(r) * i[0] + Math.cos(r) * i[1]
                        ];
                        return a;
                    }
                    function getProjectingAngle(t, e) {
                        var i = e === 0 ? t.length() - 1 : e - 1, r = (e + 1) % t.length(), a = t.v[i], s = t.v[r], n = getPerpendicularVector(a, s);
                        return Math.atan2(0, 1) - Math.atan2(n[1], n[0]);
                    }
                    function zigZagCorner(t, e, i, r, a, s, n) {
                        var h = getProjectingAngle(e, i), o = e.v[i % e._length], c = e.v[i === 0 ? e._length - 1 : i - 1], g = e.v[(i + 1) % e._length], b = s === 2 ? Math.sqrt(Math.pow(o[0] - c[0], 2) + Math.pow(o[1] - c[1], 2)) : 0, f = s === 2 ? Math.sqrt(Math.pow(o[0] - g[0], 2) + Math.pow(o[1] - g[1], 2)) : 0;
                        setPoint(t, e.v[i % e._length], h, n, r, f / ((a + 1) * 2), b / ((a + 1) * 2));
                    }
                    function zigZagSegment(t, e, i, r, a, s) {
                        for(var n = 0; n < r; n += 1){
                            var h = (n + 1) / (r + 1), o = a === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, c = e.normalAngle(h), g = e.point(h);
                            setPoint(t, g, c, s, i, o / ((r + 1) * 2), o / ((r + 1) * 2)), s = -s;
                        }
                        return s;
                    }
                    ZigZagModifier.prototype.processPath = function(t, e, i, r) {
                        var a = t._length, s = shapePool.newElement();
                        if (s.c = t.c, t.c || (a -= 1), a === 0) return s;
                        var n = -1, h = PolynomialBezier.shapeSegment(t, 0);
                        zigZagCorner(s, t, 0, e, i, r, n);
                        for(var o = 0; o < a; o += 1)n = zigZagSegment(s, h, e, i, r, -n), o === a - 1 && !t.c ? h = null : h = PolynomialBezier.shapeSegment(t, (o + 1) % a), zigZagCorner(s, t, o + 1, e, i, r, n);
                        return s;
                    }, ZigZagModifier.prototype.processShapes = function(t) {
                        var e, i, r = this.shapes.length, a, s, n = this.amplitude.v, h = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
                        if (n !== 0) {
                            var c, g;
                            for(i = 0; i < r; i += 1){
                                if (c = this.shapes[i], g = c.localShapeCollection, !(!c.shape._mdf && !this._mdf && !t)) for(g.releaseShapes(), c.shape._mdf = !0, e = c.shape.paths.shapes, s = c.shape.paths._length, a = 0; a < s; a += 1)g.addShape(this.processPath(e[a], n, h, o));
                                c.shape.paths = c.localShapeCollection;
                            }
                        }
                        this.dynamicProperties.length || (this._mdf = !1);
                    };
                    function linearOffset(t, e, i) {
                        var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
                        return [
                            polarOffset(t, r, i),
                            polarOffset(e, r, i)
                        ];
                    }
                    function offsetSegment(t, e) {
                        var i, r, a, s, n, h, o;
                        o = linearOffset(t.points[0], t.points[1], e), i = o[0], r = o[1], o = linearOffset(t.points[1], t.points[2], e), a = o[0], s = o[1], o = linearOffset(t.points[2], t.points[3], e), n = o[0], h = o[1];
                        var c = lineIntersection(i, r, a, s);
                        c === null && (c = r);
                        var g = lineIntersection(n, h, a, s);
                        return g === null && (g = n), new PolynomialBezier(i, c, g, h);
                    }
                    function joinLines(t, e, i, r, a) {
                        var s = e.points[3], n = i.points[0];
                        if (r === 3 || pointEqual(s, n)) return s;
                        if (r === 2) {
                            var h = -e.tangentAngle(1), o = -i.tangentAngle(0) + Math.PI, c = lineIntersection(s, polarOffset(s, h + Math.PI / 2, 100), n, polarOffset(n, h + Math.PI / 2, 100)), g = c ? pointDistance(c, s) : pointDistance(s, n) / 2, b = polarOffset(s, h, 2 * g * roundCorner);
                            return t.setXYAt(b[0], b[1], "o", t.length() - 1), b = polarOffset(n, o, 2 * g * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], b[0], b[1], t.length()), n;
                        }
                        var f = pointEqual(s, e.points[2]) ? e.points[0] : e.points[2], x = pointEqual(n, i.points[1]) ? i.points[3] : i.points[1], v = lineIntersection(f, s, n, x);
                        return v && pointDistance(v, s) < a ? (t.setTripleAt(v[0], v[1], v[0], v[1], v[0], v[1], t.length()), v) : s;
                    }
                    function getIntersection(t, e) {
                        var i = t.intersections(e);
                        return i.length && floatEqual(i[0][0], 1) && i.shift(), i.length ? i[0] : null;
                    }
                    function pruneSegmentIntersection(t, e) {
                        var i = t.slice(), r = e.slice(), a = getIntersection(t[t.length - 1], e[0]);
                        return a && (i[t.length - 1] = t[t.length - 1].split(a[0])[0], r[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = getIntersection(t[0], e[e.length - 1]), a) ? [
                            [
                                t[0].split(a[0])[0]
                            ],
                            [
                                e[e.length - 1].split(a[1])[1]
                            ]
                        ] : [
                            i,
                            r
                        ];
                    }
                    function pruneIntersections(t) {
                        for(var e, i = 1; i < t.length; i += 1)e = pruneSegmentIntersection(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
                        return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
                    }
                    function offsetSegmentSplit(t, e) {
                        var i = t.inflectionPoints(), r, a, s, n;
                        if (i.length === 0) return [
                            offsetSegment(t, e)
                        ];
                        if (i.length === 1 || floatEqual(i[1], 1)) return s = t.split(i[0]), r = s[0], a = s[1], [
                            offsetSegment(r, e),
                            offsetSegment(a, e)
                        ];
                        s = t.split(i[0]), r = s[0];
                        var h = (i[1] - i[0]) / (1 - i[0]);
                        return s = s[1].split(h), n = s[0], a = s[1], [
                            offsetSegment(r, e),
                            offsetSegment(n, e),
                            offsetSegment(a, e)
                        ];
                    }
                    function OffsetPathModifier() {}
                    extendPrototype([
                        ShapeModifier
                    ], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
                    }, OffsetPathModifier.prototype.processPath = function(t, e, i, r) {
                        var a = shapePool.newElement();
                        a.c = t.c;
                        var s = t.length();
                        t.c || (s -= 1);
                        var n, h, o, c = [];
                        for(n = 0; n < s; n += 1)o = PolynomialBezier.shapeSegment(t, n), c.push(offsetSegmentSplit(o, e));
                        if (!t.c) for(n = s - 1; n >= 0; n -= 1)o = PolynomialBezier.shapeSegmentInverted(t, n), c.push(offsetSegmentSplit(o, e));
                        c = pruneIntersections(c);
                        var g = null, b = null;
                        for(n = 0; n < c.length; n += 1){
                            var f = c[n];
                            for(b && (g = joinLines(a, b, f[0], i, r)), b = f[f.length - 1], h = 0; h < f.length; h += 1)o = f[h], g && pointEqual(o.points[0], g) ? a.setXYAt(o.points[1][0], o.points[1][1], "o", a.length() - 1) : a.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], a.length()), a.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], a.length()), g = o.points[3];
                        }
                        return c.length && joinLines(a, b, c[0][0], i, r), a;
                    }, OffsetPathModifier.prototype.processShapes = function(t) {
                        var e, i, r = this.shapes.length, a, s, n = this.amount.v, h = this.miterLimit.v, o = this.lineJoin;
                        if (n !== 0) {
                            var c, g;
                            for(i = 0; i < r; i += 1){
                                if (c = this.shapes[i], g = c.localShapeCollection, !(!c.shape._mdf && !this._mdf && !t)) for(g.releaseShapes(), c.shape._mdf = !0, e = c.shape.paths.shapes, s = c.shape.paths._length, a = 0; a < s; a += 1)g.addShape(this.processPath(e[a], n, o, h));
                                c.shape.paths = c.localShapeCollection;
                            }
                        }
                        this.dynamicProperties.length || (this._mdf = !1);
                    };
                    function getFontProperties(t) {
                        for(var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", a = e.length, s, n = 0; n < a; n += 1)switch(s = e[n].toLowerCase(), s){
                            case "italic":
                                r = "italic";
                                break;
                            case "bold":
                                i = "700";
                                break;
                            case "black":
                                i = "900";
                                break;
                            case "medium":
                                i = "500";
                                break;
                            case "regular":
                            case "normal":
                                i = "400";
                                break;
                            case "light":
                            case "thin":
                                i = "200";
                                break;
                        }
                        return {
                            style: r,
                            weight: t.fWeight || i
                        };
                    }
                    var FontManager = function() {
                        var t = 5e3, e = {
                            w: 0,
                            size: 0,
                            shapes: [],
                            data: {
                                shapes: []
                            }
                        }, i = [];
                        i = i.concat([
                            2304,
                            2305,
                            2306,
                            2307,
                            2362,
                            2363,
                            2364,
                            2364,
                            2366,
                            2367,
                            2368,
                            2369,
                            2370,
                            2371,
                            2372,
                            2373,
                            2374,
                            2375,
                            2376,
                            2377,
                            2378,
                            2379,
                            2380,
                            2381,
                            2382,
                            2383,
                            2387,
                            2388,
                            2389,
                            2390,
                            2391,
                            2402,
                            2403
                        ]);
                        var r = 127988, a = 917631, s = 917601, n = 917626, h = 65039, o = 8205, c = 127462, g = 127487, b = [
                            "d83cdffb",
                            "d83cdffc",
                            "d83cdffd",
                            "d83cdffe",
                            "d83cdfff"
                        ];
                        function f(E) {
                            var T = E.split(","), y, _ = T.length, k = [];
                            for(y = 0; y < _; y += 1)T[y] !== "sans-serif" && T[y] !== "monospace" && k.push(T[y]);
                            return k.join(",");
                        }
                        function x(E, T) {
                            var y = createTag("span");
                            y.setAttribute("aria-hidden", !0), y.style.fontFamily = T;
                            var _ = createTag("span");
                            _.innerText = "giItT1WQy@!-/#", y.style.position = "absolute", y.style.left = "-10000px", y.style.top = "-10000px", y.style.fontSize = "300px", y.style.fontVariant = "normal", y.style.fontStyle = "normal", y.style.fontWeight = "normal", y.style.letterSpacing = "0", y.appendChild(_), document1.body.appendChild(y);
                            var k = _.offsetWidth;
                            return _.style.fontFamily = f(E) + ", " + T, {
                                node: _,
                                w: k,
                                parent: y
                            };
                        }
                        function v() {
                            var E, T = this.fonts.length, y, _, k = T;
                            for(E = 0; E < T; E += 1)this.fonts[E].loaded ? k -= 1 : this.fonts[E].fOrigin === "n" || this.fonts[E].origin === 0 ? this.fonts[E].loaded = !0 : (y = this.fonts[E].monoCase.node, _ = this.fonts[E].monoCase.w, y.offsetWidth !== _ ? (k -= 1, this.fonts[E].loaded = !0) : (y = this.fonts[E].sansCase.node, _ = this.fonts[E].sansCase.w, y.offsetWidth !== _ && (k -= 1, this.fonts[E].loaded = !0)), this.fonts[E].loaded && (this.fonts[E].sansCase.parent.parentNode.removeChild(this.fonts[E].sansCase.parent), this.fonts[E].monoCase.parent.parentNode.removeChild(this.fonts[E].monoCase.parent)));
                            k !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
                        }
                        function d(E, T) {
                            var y = document1.body && T ? "svg" : "canvas", _, k = getFontProperties(E);
                            if (y === "svg") {
                                var D = createNS("text");
                                D.style.fontSize = "100px", D.setAttribute("font-family", E.fFamily), D.setAttribute("font-style", k.style), D.setAttribute("font-weight", k.weight), D.textContent = "1", E.fClass ? (D.style.fontFamily = "inherit", D.setAttribute("class", E.fClass)) : D.style.fontFamily = E.fFamily, T.appendChild(D), _ = D;
                            } else {
                                var O = new OffscreenCanvas(500, 500).getContext("2d");
                                O.font = k.style + " " + k.weight + " 100px " + E.fFamily, _ = O;
                            }
                            function z(H) {
                                return y === "svg" ? (_.textContent = H, _.getComputedTextLength()) : _.measureText(H).width;
                            }
                            return {
                                measureText: z
                            };
                        }
                        function A(E, T) {
                            if (!E) {
                                this.isLoaded = !0;
                                return;
                            }
                            if (this.chars) {
                                this.isLoaded = !0, this.fonts = E.list;
                                return;
                            }
                            if (!document1.body) {
                                this.isLoaded = !0, E.list.forEach(function(Y) {
                                    Y.helper = d(Y), Y.cache = {};
                                }), this.fonts = E.list;
                                return;
                            }
                            var y = E.list, _, k = y.length, D = k;
                            for(_ = 0; _ < k; _ += 1){
                                var O = !0, z, H;
                                if (y[_].loaded = !1, y[_].monoCase = x(y[_].fFamily, "monospace"), y[_].sansCase = x(y[_].fFamily, "sans-serif"), !y[_].fPath) y[_].loaded = !0, D -= 1;
                                else if (y[_].fOrigin === "p" || y[_].origin === 3) {
                                    if (z = document1.querySelectorAll('style[f-forigin="p"][f-family="' + y[_].fFamily + '"], style[f-origin="3"][f-family="' + y[_].fFamily + '"]'), z.length > 0 && (O = !1), O) {
                                        var N = createTag("style");
                                        N.setAttribute("f-forigin", y[_].fOrigin), N.setAttribute("f-origin", y[_].origin), N.setAttribute("f-family", y[_].fFamily), N.type = "text/css", N.innerText = "@font-face {font-family: " + y[_].fFamily + "; font-style: normal; src: url('" + y[_].fPath + "');}", T.appendChild(N);
                                    }
                                } else if (y[_].fOrigin === "g" || y[_].origin === 1) {
                                    for(z = document1.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), H = 0; H < z.length; H += 1)z[H].href.indexOf(y[_].fPath) !== -1 && (O = !1);
                                    if (O) {
                                        var q = createTag("link");
                                        q.setAttribute("f-forigin", y[_].fOrigin), q.setAttribute("f-origin", y[_].origin), q.type = "text/css", q.rel = "stylesheet", q.href = y[_].fPath, document1.body.appendChild(q);
                                    }
                                } else if (y[_].fOrigin === "t" || y[_].origin === 2) {
                                    for(z = document1.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), H = 0; H < z.length; H += 1)y[_].fPath === z[H].src && (O = !1);
                                    if (O) {
                                        var W = createTag("link");
                                        W.setAttribute("f-forigin", y[_].fOrigin), W.setAttribute("f-origin", y[_].origin), W.setAttribute("rel", "stylesheet"), W.setAttribute("href", y[_].fPath), T.appendChild(W);
                                    }
                                }
                                y[_].helper = d(y[_], T), y[_].cache = {}, this.fonts.push(y[_]);
                            }
                            D === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
                        }
                        function m(E) {
                            if (E) {
                                this.chars || (this.chars = []);
                                var T, y = E.length, _, k = this.chars.length, D;
                                for(T = 0; T < y; T += 1){
                                    for(_ = 0, D = !1; _ < k;)this.chars[_].style === E[T].style && this.chars[_].fFamily === E[T].fFamily && this.chars[_].ch === E[T].ch && (D = !0), _ += 1;
                                    D || (this.chars.push(E[T]), k += 1);
                                }
                            }
                        }
                        function l(E, T, y) {
                            for(var _ = 0, k = this.chars.length; _ < k;){
                                if (this.chars[_].ch === E && this.chars[_].style === T && this.chars[_].fFamily === y) return this.chars[_];
                                _ += 1;
                            }
                            return (typeof E == "string" && E.charCodeAt(0) !== 13 || !E) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", E, T, y)), e;
                        }
                        function p(E, T, y) {
                            var _ = this.getFontByName(T), k = E;
                            if (!_.cache[k]) {
                                var D = _.helper;
                                if (E === " ") {
                                    var O = D.measureText("|" + E + "|"), z = D.measureText("||");
                                    _.cache[k] = (O - z) / 100;
                                } else _.cache[k] = D.measureText(E) / 100;
                            }
                            return _.cache[k] * y;
                        }
                        function u(E) {
                            for(var T = 0, y = this.fonts.length; T < y;){
                                if (this.fonts[T].fName === E) return this.fonts[T];
                                T += 1;
                            }
                            return this.fonts[0];
                        }
                        function P(E) {
                            var T = 0, y = E.charCodeAt(0);
                            if (y >= 55296 && y <= 56319) {
                                var _ = E.charCodeAt(1);
                                _ >= 56320 && _ <= 57343 && (T = (y - 55296) * 1024 + _ - 56320 + 65536);
                            }
                            return T;
                        }
                        function S(E, T) {
                            var y = E.toString(16) + T.toString(16);
                            return b.indexOf(y) !== -1;
                        }
                        function C(E) {
                            return E === o;
                        }
                        function M(E) {
                            return E === h;
                        }
                        function w(E) {
                            var T = P(E);
                            return T >= c && T <= g;
                        }
                        function F(E) {
                            return w(E.substr(0, 2)) && w(E.substr(2, 2));
                        }
                        function V(E) {
                            return i.indexOf(E) !== -1;
                        }
                        function I(E, T) {
                            var y = P(E.substr(T, 2));
                            if (y !== r) return !1;
                            var _ = 0;
                            for(T += 2; _ < 5;){
                                if (y = P(E.substr(T, 2)), y < s || y > n) return !1;
                                _ += 1, T += 2;
                            }
                            return P(E.substr(T, 2)) === a;
                        }
                        function L() {
                            this.isLoaded = !0;
                        }
                        var B = function() {
                            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
                        };
                        B.isModifier = S, B.isZeroWidthJoiner = C, B.isFlagEmoji = F, B.isRegionalCode = w, B.isCombinedCharacter = V, B.isRegionalFlag = I, B.isVariationSelector = M, B.BLACK_FLAG_CODE_POINT = r;
                        var R = {
                            addChars: m,
                            addFonts: A,
                            getCharData: l,
                            getFontByName: u,
                            measureText: p,
                            checkLoadedFonts: v,
                            setIsLoaded: L
                        };
                        return B.prototype = R, B;
                    }();
                    function SlotManager(t) {
                        this.animationData = t;
                    }
                    SlotManager.prototype.getProp = function(t) {
                        return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
                    };
                    function slotFactory(t) {
                        return new SlotManager(t);
                    }
                    function RenderableElement() {}
                    RenderableElement.prototype = {
                        initRenderable: function() {
                            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
                        },
                        addRenderableComponent: function(t) {
                            this.renderableComponents.indexOf(t) === -1 && this.renderableComponents.push(t);
                        },
                        removeRenderableComponent: function(t) {
                            this.renderableComponents.indexOf(t) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
                        },
                        prepareRenderableFrame: function(t) {
                            this.checkLayerLimits(t);
                        },
                        checkTransparency: function() {
                            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
                        },
                        checkLayerLimits: function(t) {
                            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
                        },
                        renderRenderable: function() {
                            var t, e = this.renderableComponents.length;
                            for(t = 0; t < e; t += 1)this.renderableComponents[t].renderFrame(this._isFirstFrame);
                        },
                        sourceRectAtTime: function() {
                            return {
                                top: 0,
                                left: 0,
                                width: 100,
                                height: 100
                            };
                        },
                        getLayerSize: function() {
                            return this.data.ty === 5 ? {
                                w: this.data.textData.width,
                                h: this.data.textData.height
                            } : {
                                w: this.data.width,
                                h: this.data.height
                            };
                        }
                    };
                    var getBlendMode = function() {
                        var t = {
                            0: "source-over",
                            1: "multiply",
                            2: "screen",
                            3: "overlay",
                            4: "darken",
                            5: "lighten",
                            6: "color-dodge",
                            7: "color-burn",
                            8: "hard-light",
                            9: "soft-light",
                            10: "difference",
                            11: "exclusion",
                            12: "hue",
                            13: "saturation",
                            14: "color",
                            15: "luminosity"
                        };
                        return function(e) {
                            return t[e] || "";
                        };
                    }();
                    function SliderEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
                    }
                    function AngleEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
                    }
                    function ColorEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
                    }
                    function PointEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
                    }
                    function LayerIndexEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
                    }
                    function MaskIndexEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
                    }
                    function CheckboxEffect(t, e, i) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
                    }
                    function NoValueEffect() {
                        this.p = {};
                    }
                    function EffectsManager(t, e) {
                        var i = t.ef || [];
                        this.effectElements = [];
                        var r, a = i.length, s;
                        for(r = 0; r < a; r += 1)s = new GroupEffect(i[r], e), this.effectElements.push(s);
                    }
                    function GroupEffect(t, e) {
                        this.init(t, e);
                    }
                    extendPrototype([
                        DynamicPropertyContainer
                    ], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                        this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                        var i, r = this.data.ef.length, a, s = this.data.ef;
                        for(i = 0; i < r; i += 1){
                            switch(a = null, s[i].ty){
                                case 0:
                                    a = new SliderEffect(s[i], e, this);
                                    break;
                                case 1:
                                    a = new AngleEffect(s[i], e, this);
                                    break;
                                case 2:
                                    a = new ColorEffect(s[i], e, this);
                                    break;
                                case 3:
                                    a = new PointEffect(s[i], e, this);
                                    break;
                                case 4:
                                case 7:
                                    a = new CheckboxEffect(s[i], e, this);
                                    break;
                                case 10:
                                    a = new LayerIndexEffect(s[i], e, this);
                                    break;
                                case 11:
                                    a = new MaskIndexEffect(s[i], e, this);
                                    break;
                                case 5:
                                    a = new EffectsManager(s[i], e);
                                    break;
                                default:
                                    a = new NoValueEffect(s[i]);
                                    break;
                            }
                            a && this.effectElements.push(a);
                        }
                    };
                    function BaseElement() {}
                    BaseElement.prototype = {
                        checkMasks: function() {
                            if (!this.data.hasMask) return !1;
                            for(var t = 0, e = this.data.masksProperties.length; t < e;){
                                if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== !1) return !0;
                                t += 1;
                            }
                            return !1;
                        },
                        initExpressions: function() {
                            var t = getExpressionInterfaces();
                            if (t) {
                                var e = t("layer"), i = t("effects"), r = t("shape"), a = t("text"), s = t("comp");
                                this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                                var n = i.createEffectsInterface(this, this.layerInterface);
                                this.layerInterface.registerEffectsInterface(n), this.data.ty === 0 || this.data.xt ? this.compInterface = s(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface);
                            }
                        },
                        setBlendMode: function() {
                            var t = getBlendMode(this.data.bm), e = this.baseElement || this.layerElement;
                            e.style["mix-blend-mode"] = t;
                        },
                        initBaseData: function(t, e, i) {
                            this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
                        },
                        getType: function() {
                            return this.type;
                        },
                        sourceRectAtTime: function() {}
                    };
                    function FrameElement() {}
                    FrameElement.prototype = {
                        initFrame: function() {
                            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
                        },
                        prepareProperties: function(t, e) {
                            var i, r = this.dynamicProperties.length;
                            for(i = 0; i < r; i += 1)(e || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
                        },
                        addDynamicProperty: function(t) {
                            this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t);
                        }
                    };
                    function FootageElement(t, e, i) {
                        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i);
                    }
                    FootageElement.prototype.prepareFrame = function() {}, extendPrototype([
                        RenderableElement,
                        BaseElement,
                        FrameElement
                    ], FootageElement), FootageElement.prototype.getBaseElement = function() {
                        return null;
                    }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                        var t = getExpressionInterfaces();
                        if (t) {
                            var e = t("footage");
                            this.layerInterface = e(this);
                        }
                    }, FootageElement.prototype.getFootageData = function() {
                        return this.footageData;
                    };
                    function AudioElement(t, e, i) {
                        this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
                        var r = this.globalData.getAssetsPath(this.assetData);
                        this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                            k: [
                                100
                            ]
                        }, 1, .01, this);
                    }
                    AudioElement.prototype.prepareFrame = function(t) {
                        if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            this._currentTime = e;
                        }
                        this._volume = this.lv.v[0];
                        var i = this._volume * this._volumeMultiplier;
                        this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i));
                    }, extendPrototype([
                        RenderableElement,
                        BaseElement,
                        FrameElement
                    ], AudioElement), AudioElement.prototype.renderFrame = function() {
                        this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
                    }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                        this.audio.pause(), this._isPlaying = !1;
                    }, AudioElement.prototype.pause = function() {
                        this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
                    }, AudioElement.prototype.resume = function() {
                        this._canPlay = !0;
                    }, AudioElement.prototype.setRate = function(t) {
                        this.audio.rate(t);
                    }, AudioElement.prototype.volume = function(t) {
                        this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
                    }, AudioElement.prototype.getBaseElement = function() {
                        return null;
                    }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {};
                    function BaseRenderer() {}
                    BaseRenderer.prototype.checkLayers = function(t) {
                        var e, i = this.layers.length, r;
                        for(this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)this.elements[e] || (r = this.layers[e], r.ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
                        this.checkPendingElements();
                    }, BaseRenderer.prototype.createItem = function(t) {
                        switch(t.ty){
                            case 2:
                                return this.createImage(t);
                            case 0:
                                return this.createComp(t);
                            case 1:
                                return this.createSolid(t);
                            case 3:
                                return this.createNull(t);
                            case 4:
                                return this.createShape(t);
                            case 5:
                                return this.createText(t);
                            case 6:
                                return this.createAudio(t);
                            case 13:
                                return this.createCamera(t);
                            case 15:
                                return this.createFootage(t);
                            default:
                                return this.createNull(t);
                        }
                    }, BaseRenderer.prototype.createCamera = function() {
                        throw new Error("You're using a 3d camera. Try the html renderer.");
                    }, BaseRenderer.prototype.createAudio = function(t) {
                        return new AudioElement(t, this.globalData, this);
                    }, BaseRenderer.prototype.createFootage = function(t) {
                        return new FootageElement(t, this.globalData, this);
                    }, BaseRenderer.prototype.buildAllItems = function() {
                        var t, e = this.layers.length;
                        for(t = 0; t < e; t += 1)this.buildItem(t);
                        this.checkPendingElements();
                    }, BaseRenderer.prototype.includeLayers = function(t) {
                        this.completeLayers = !1;
                        var e, i = t.length, r, a = this.layers.length;
                        for(e = 0; e < i; e += 1)for(r = 0; r < a;){
                            if (this.layers[r].id === t[e].id) {
                                this.layers[r] = t[e];
                                break;
                            }
                            r += 1;
                        }
                    }, BaseRenderer.prototype.setProjectInterface = function(t) {
                        this.globalData.projectInterface = t;
                    }, BaseRenderer.prototype.initItems = function() {
                        this.globalData.progressiveLoad || this.buildAllItems();
                    }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
                        for(var r = this.elements, a = this.layers, s = 0, n = a.length; s < n;)a[s].ind == e && (!r[s] || r[s] === !0 ? (this.buildItem(s), this.addPendingElement(t)) : (i.push(r[s]), r[s].setAsParent(), a[s].parent !== void 0 ? this.buildElementParenting(t, a[s].parent, i) : t.setHierarchy(i))), s += 1;
                    }, BaseRenderer.prototype.addPendingElement = function(t) {
                        this.pendingElements.push(t);
                    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                        var e, i = t.length;
                        for(e = 0; e < i; e += 1)if (t[e].xt) {
                            var r = this.createComp(t[e]);
                            r.initExpressions(), this.globalData.projectInterface.registerComposition(r);
                        }
                    }, BaseRenderer.prototype.getElementById = function(t) {
                        var e, i = this.elements.length;
                        for(e = 0; e < i; e += 1)if (this.elements[e].data.ind === t) return this.elements[e];
                        return null;
                    }, BaseRenderer.prototype.getElementByPath = function(t) {
                        var e = t.shift(), i;
                        if (typeof e == "number") i = this.elements[e];
                        else {
                            var r, a = this.elements.length;
                            for(r = 0; r < a; r += 1)if (this.elements[r].data.nm === e) {
                                i = this.elements[r];
                                break;
                            }
                        }
                        return t.length === 0 ? i : i.getElementByPath(t);
                    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                        this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                            w: t.w,
                            h: t.h
                        };
                    };
                    var effectTypes = {
                        TRANSFORM_EFFECT: "transformEFfect"
                    };
                    function TransformElement() {}
                    TransformElement.prototype = {
                        initTransform: function() {
                            var t = new Matrix;
                            this.finalTransform = {
                                mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                    o: 0
                                },
                                _matMdf: !1,
                                _localMatMdf: !1,
                                _opMdf: !1,
                                mat: t,
                                localMat: t,
                                localOpacity: 1
                            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
                        },
                        renderTransform: function() {
                            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                                var t, e = this.finalTransform.mat, i = 0, r = this.hierarchy.length;
                                if (!this.finalTransform._matMdf) for(; i < r;){
                                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break;
                                    }
                                    i += 1;
                                }
                                if (this.finalTransform._matMdf) for(t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1)e.multiply(this.hierarchy[i].finalTransform.mProp.v);
                            }
                            this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
                        },
                        renderLocalTransform: function() {
                            if (this.localTransforms) {
                                var t = 0, e = this.localTransforms.length;
                                if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for(; t < e;)this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
                                if (this.finalTransform._localMatMdf) {
                                    var i = this.finalTransform.localMat;
                                    for(this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1){
                                        var r = this.localTransforms[t].matrix;
                                        i.multiply(r);
                                    }
                                    i.multiply(this.finalTransform.mat);
                                }
                                if (this.finalTransform._opMdf) {
                                    var a = this.finalTransform.localOpacity;
                                    for(t = 0; t < e; t += 1)a *= this.localTransforms[t].opacity * .01;
                                    this.finalTransform.localOpacity = a;
                                }
                            }
                        },
                        searchEffectTransforms: function() {
                            if (this.renderableEffectsManager) {
                                var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                                if (t.length) {
                                    this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                                    var e = 0, i = t.length;
                                    for(e = 0; e < i; e += 1)this.localTransforms.push(t[e]);
                                }
                            }
                        },
                        globalToLocal: function(t) {
                            var e = [];
                            e.push(this.finalTransform);
                            for(var i = !0, r = this.comp; i;)r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : i = !1;
                            var a, s = e.length, n;
                            for(a = 0; a < s; a += 1)n = e[a].mat.applyToPointArray(0, 0, 0), t = [
                                t[0] - n[0],
                                t[1] - n[1],
                                0
                            ];
                            return t;
                        },
                        mHelper: new Matrix
                    };
                    function MaskElement(t, e, i) {
                        this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                        var r = this.globalData.defs, a, s = this.masksProperties ? this.masksProperties.length : 0;
                        this.viewData = createSizedArray(s), this.solidPath = "";
                        var n, h = this.masksProperties, o = 0, c = [], g, b, f = createElementID(), x, v, d, A, m = "clipPath", l = "clip-path";
                        for(a = 0; a < s; a += 1)if ((h[a].mode !== "a" && h[a].mode !== "n" || h[a].inv || h[a].o.k !== 100 || h[a].o.x) && (m = "mask", l = "mask"), (h[a].mode === "s" || h[a].mode === "i") && o === 0 ? (x = createNS("rect"), x.setAttribute("fill", "#ffffff"), x.setAttribute("width", this.element.comp.data.w || 0), x.setAttribute("height", this.element.comp.data.h || 0), c.push(x)) : x = null, n = createNS("path"), h[a].mode === "n") this.viewData[a] = {
                            op: PropertyFactory.getProp(this.element, h[a].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, h[a], 3),
                            elem: n,
                            lastPath: ""
                        }, r.appendChild(n);
                        else {
                            o += 1, n.setAttribute("fill", h[a].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
                            var p;
                            if (h[a].x.k !== 0 ? (m = "mask", l = "mask", A = PropertyFactory.getProp(this.element, h[a].x, 0, null, this.element), p = createElementID(), v = createNS("filter"), v.setAttribute("id", p), d = createNS("feMorphology"), d.setAttribute("operator", "erode"), d.setAttribute("in", "SourceGraphic"), d.setAttribute("radius", "0"), v.appendChild(d), r.appendChild(v), n.setAttribute("stroke", h[a].mode === "s" ? "#000000" : "#ffffff")) : (d = null, A = null), this.storedData[a] = {
                                elem: n,
                                x: A,
                                expan: d,
                                lastPath: "",
                                lastOperator: "",
                                filterId: p,
                                lastRadius: 0
                            }, h[a].mode === "i") {
                                b = c.length;
                                var u = createNS("g");
                                for(g = 0; g < b; g += 1)u.appendChild(c[g]);
                                var P = createNS("mask");
                                P.setAttribute("mask-type", "alpha"), P.setAttribute("id", f + "_" + o), P.appendChild(n), r.appendChild(P), u.setAttribute("mask", "url(" + getLocationHref() + "#" + f + "_" + o + ")"), c.length = 0, c.push(u);
                            } else c.push(n);
                            h[a].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[a] = {
                                elem: n,
                                lastPath: "",
                                op: PropertyFactory.getProp(this.element, h[a].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, h[a], 3),
                                invRect: x
                            }, this.viewData[a].prop.k || this.drawPath(h[a], this.viewData[a].prop.v, this.viewData[a]);
                        }
                        for(this.maskElement = createNS(m), s = c.length, a = 0; a < s; a += 1)this.maskElement.appendChild(c[a]);
                        o > 0 && (this.maskElement.setAttribute("id", f), this.element.maskedElement.setAttribute(l, "url(" + getLocationHref() + "#" + f + ")"), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
                    }
                    MaskElement.prototype.getMaskProperty = function(t) {
                        return this.viewData[t].prop;
                    }, MaskElement.prototype.renderFrame = function(t) {
                        var e = this.element.finalTransform.mat, i, r = this.masksProperties.length;
                        for(i = 0; i < r; i += 1)if ((this.viewData[i].prop._mdf || t) && this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]), (this.viewData[i].op._mdf || t) && this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v), this.masksProperties[i].mode !== "n" && (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[i].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[i].x && (this.storedData[i].x._mdf || t))) {
                            var a = this.storedData[i].expan;
                            this.storedData[i].x.v < 0 ? (this.storedData[i].lastOperator !== "erode" && (this.storedData[i].lastOperator = "erode", this.storedData[i].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[i].filterId + ")")), a.setAttribute("radius", -this.storedData[i].x.v)) : (this.storedData[i].lastOperator !== "dilate" && (this.storedData[i].lastOperator = "dilate", this.storedData[i].elem.setAttribute("filter", null)), this.storedData[i].elem.setAttribute("stroke-width", this.storedData[i].x.v * 2));
                        }
                    }, MaskElement.prototype.getMaskelement = function() {
                        return this.maskElement;
                    }, MaskElement.prototype.createLayerSolidPath = function() {
                        var t = "M0,0 ";
                        return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
                    }, MaskElement.prototype.drawPath = function(t, e, i) {
                        var r = " M" + e.v[0][0] + "," + e.v[0][1], a, s;
                        for(s = e._length, a = 1; a < s; a += 1)r += " C" + e.o[a - 1][0] + "," + e.o[a - 1][1] + " " + e.i[a][0] + "," + e.i[a][1] + " " + e.v[a][0] + "," + e.v[a][1];
                        if (e.c && s > 1 && (r += " C" + e.o[a - 1][0] + "," + e.o[a - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== r) {
                            var n = "";
                            i.elem && (e.c && (n = t.inv ? this.solidPath + r : r), i.elem.setAttribute("d", n)), i.lastPath = r;
                        }
                    }, MaskElement.prototype.destroy = function() {
                        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
                    };
                    var filtersFactory = function() {
                        var t = {};
                        t.createFilter = e, t.createAlphaToLuminanceFilter = i;
                        function e(r, a) {
                            var s = createNS("filter");
                            return s.setAttribute("id", r), a !== !0 && (s.setAttribute("filterUnits", "objectBoundingBox"), s.setAttribute("x", "0%"), s.setAttribute("y", "0%"), s.setAttribute("width", "100%"), s.setAttribute("height", "100%")), s;
                        }
                        function i() {
                            var r = createNS("feColorMatrix");
                            return r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), r;
                        }
                        return t;
                    }(), featureSupport = function() {
                        var t = {
                            maskType: !0,
                            svgLumaHidden: !0,
                            offscreenCanvas: typeof OffscreenCanvas < "u"
                        };
                        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t;
                    }(), registeredEffects$1 = {}, idPrefix = "filter_result_";
                    function SVGEffects(t) {
                        var e, i = "SourceGraphic", r = t.data.ef ? t.data.ef.length : 0, a = createElementID(), s = filtersFactory.createFilter(a, !0), n = 0;
                        this.filters = [];
                        var h;
                        for(e = 0; e < r; e += 1){
                            h = null;
                            var o = t.data.ef[e].ty;
                            if (registeredEffects$1[o]) {
                                var c = registeredEffects$1[o].effect;
                                h = new c(s, t.effectsManager.effectElements[e], t, idPrefix + n, i), i = idPrefix + n, registeredEffects$1[o].countsAsEffect && (n += 1);
                            }
                            h && this.filters.push(h);
                        }
                        n && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this);
                    }
                    SVGEffects.prototype.renderFrame = function(t) {
                        var e, i = this.filters.length;
                        for(e = 0; e < i; e += 1)this.filters[e].renderFrame(t);
                    }, SVGEffects.prototype.getEffects = function(t) {
                        var e, i = this.filters.length, r = [];
                        for(e = 0; e < i; e += 1)this.filters[e].type === t && r.push(this.filters[e]);
                        return r;
                    };
                    function registerEffect$1(t, e, i) {
                        registeredEffects$1[t] = {
                            effect: e,
                            countsAsEffect: i
                        };
                    }
                    function SVGBaseElement() {}
                    SVGBaseElement.prototype = {
                        initRendererElement: function() {
                            this.layerElement = createNS("g");
                        },
                        createContainerElements: function() {
                            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                            var t = null;
                            if (this.data.td) {
                                this.matteMasks = {};
                                var e = createNS("g");
                                e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e);
                            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                                var i = createNS("clipPath"), r = createNS("path");
                                r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                var a = createElementID();
                                if (i.setAttribute("id", a), i.appendChild(r), this.globalData.defs.appendChild(i), this.checkMasks()) {
                                    var s = createNS("g");
                                    s.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), s.appendChild(this.layerElement), this.transformedElement = s, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
                                } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")");
                            }
                            this.data.bm !== 0 && this.setBlendMode();
                        },
                        renderElement: function() {
                            this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
                        },
                        destroyBaseElement: function() {
                            this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
                        },
                        getBaseElement: function() {
                            return this.data.hd ? null : this.baseElement;
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
                        },
                        getMatte: function(t) {
                            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                                var e = this.layerId + "_" + t, i, r, a, s;
                                if (t === 1 || t === 3) {
                                    var n = createNS("mask");
                                    n.setAttribute("id", e), n.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(a), this.globalData.defs.appendChild(n), !featureSupport.maskType && t === 1 && (n.setAttribute("mask-type", "luminance"), i = createElementID(), r = filtersFactory.createFilter(i), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), s.appendChild(a), n.appendChild(s), s.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"));
                                } else if (t === 2) {
                                    var h = createNS("mask");
                                    h.setAttribute("id", e), h.setAttribute("mask-type", "alpha");
                                    var o = createNS("g");
                                    h.appendChild(o), i = createElementID(), r = filtersFactory.createFilter(i);
                                    var c = createNS("feComponentTransfer");
                                    c.setAttribute("in", "SourceGraphic"), r.appendChild(c);
                                    var g = createNS("feFuncA");
                                    g.setAttribute("type", "table"), g.setAttribute("tableValues", "1.0 0.0"), c.appendChild(g), this.globalData.defs.appendChild(r);
                                    var b = createNS("rect");
                                    b.setAttribute("width", this.comp.data.w), b.setAttribute("height", this.comp.data.h), b.setAttribute("x", "0"), b.setAttribute("y", "0"), b.setAttribute("fill", "#ffffff"), b.setAttribute("opacity", "0"), o.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), o.appendChild(b), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o.appendChild(a), featureSupport.maskType || (h.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), o.appendChild(b), s.appendChild(this.layerElement), o.appendChild(s)), this.globalData.defs.appendChild(h);
                                }
                                this.matteMasks[t] = e;
                            }
                            return this.matteMasks[t];
                        },
                        setMatte: function(t) {
                            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")");
                        }
                    };
                    function HierarchyElement() {}
                    HierarchyElement.prototype = {
                        initHierarchy: function() {
                            this.hierarchy = [], this._isParent = !1, this.checkParenting();
                        },
                        setHierarchy: function(t) {
                            this.hierarchy = t;
                        },
                        setAsParent: function() {
                            this._isParent = !0;
                        },
                        checkParenting: function() {
                            this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
                        }
                    };
                    function RenderableDOMElement() {}
                    (function() {
                        var t = {
                            initElement: function(e, i, r) {
                                this.initFrame(), this.initBaseData(e, i, r), this.initTransform(e, i, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
                            },
                            hide: function() {
                                if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                                    var e = this.baseElement || this.layerElement;
                                    e.style.display = "none", this.hidden = !0;
                                }
                            },
                            show: function() {
                                if (this.isInRange && !this.isTransparent) {
                                    if (!this.data.hd) {
                                        var e = this.baseElement || this.layerElement;
                                        e.style.display = "block";
                                    }
                                    this.hidden = !1, this._isFirstFrame = !0;
                                }
                            },
                            renderFrame: function() {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                            },
                            renderInnerContent: function() {},
                            prepareFrame: function(e) {
                                this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency();
                            },
                            destroy: function() {
                                this.innerElem = null, this.destroyBaseElement();
                            }
                        };
                        extendPrototype([
                            RenderableElement,
                            createProxyFunction(t)
                        ], RenderableDOMElement);
                    })();
                    function IImageElement(t, e, i) {
                        this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
                            top: 0,
                            left: 0,
                            width: this.assetData.w,
                            height: this.assetData.h
                        };
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        SVGBaseElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableDOMElement
                    ], IImageElement), IImageElement.prototype.createContent = function() {
                        var t = this.globalData.getAssetsPath(this.assetData);
                        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
                    }, IImageElement.prototype.sourceRectAtTime = function() {
                        return this.sourceRect;
                    };
                    function ProcessedElement(t, e) {
                        this.elem = t, this.pos = e;
                    }
                    function IShapeElement() {}
                    IShapeElement.prototype = {
                        addShapeToModifiers: function(t) {
                            var e, i = this.shapeModifiers.length;
                            for(e = 0; e < i; e += 1)this.shapeModifiers[e].addShape(t);
                        },
                        isShapeInAnimatedModifiers: function(t) {
                            for(var e = 0, i = this.shapeModifiers.length; e < i;)if (this.shapeModifiers[e].isAnimatedWithShape(t)) return !0;
                            return !1;
                        },
                        renderModifiers: function() {
                            if (this.shapeModifiers.length) {
                                var t, e = this.shapes.length;
                                for(t = 0; t < e; t += 1)this.shapes[t].sh.reset();
                                e = this.shapeModifiers.length;
                                var i;
                                for(t = e - 1; t >= 0 && (i = this.shapeModifiers[t].processShapes(this._isFirstFrame), !i); t -= 1);
                            }
                        },
                        searchProcessedElement: function(t) {
                            for(var e = this.processedElements, i = 0, r = e.length; i < r;){
                                if (e[i].elem === t) return e[i].pos;
                                i += 1;
                            }
                            return 0;
                        },
                        addProcessedElement: function(t, e) {
                            for(var i = this.processedElements, r = i.length; r;)if (r -= 1, i[r].elem === t) {
                                i[r].pos = e;
                                return;
                            }
                            i.push(new ProcessedElement(t, e));
                        },
                        prepareFrame: function(t) {
                            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
                        }
                    };
                    var lineCapEnum = {
                        1: "butt",
                        2: "round",
                        3: "square"
                    }, lineJoinEnum = {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    };
                    function SVGShapeData(t, e, i) {
                        this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
                        for(var r = 0, a = t.length; r < a;){
                            if (t[r].mProps.dynamicProperties.length) {
                                this._isAnimated = !0;
                                break;
                            }
                            r += 1;
                        }
                    }
                    SVGShapeData.prototype.setAsAnimated = function() {
                        this._isAnimated = !0;
                    };
                    function SVGStyleData(t, e) {
                        this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = createNS("path"), this.msElem = null;
                    }
                    SVGStyleData.prototype.reset = function() {
                        this.d = "", this._mdf = !1;
                    };
                    function DashProperty(t, e, i, r) {
                        this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
                        var a, s = e.length || 0, n;
                        for(a = 0; a < s; a += 1)n = PropertyFactory.getProp(t, e[a].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[a] = {
                            n: e[a].n,
                            p: n
                        };
                        this.k || this.getValue(!0), this._isAnimated = this.k;
                    }
                    DashProperty.prototype.getValue = function(t) {
                        if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                            var e = 0, i = this.dataProps.length;
                            for(this.renderer === "svg" && (this.dashStr = ""), e = 0; e < i; e += 1)this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
                        }
                    }, extendPrototype([
                        DynamicPropertyContainer
                    ], DashProperty);
                    function SVGStrokeStyleData(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated;
                    }
                    extendPrototype([
                        DynamicPropertyContainer
                    ], SVGStrokeStyleData);
                    function SVGFillStyleData(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i;
                    }
                    extendPrototype([
                        DynamicPropertyContainer
                    ], SVGFillStyleData);
                    function SVGNoStyleData(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i;
                    }
                    extendPrototype([
                        DynamicPropertyContainer
                    ], SVGNoStyleData);
                    function GradientProperty(t, e, i) {
                        this.data = e, this.c = createTypedArray("uint8c", e.p * 4);
                        var r = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
                        this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
                    }
                    GradientProperty.prototype.comparePoints = function(t, e) {
                        for(var i = 0, r = this.o.length / 2, a; i < r;){
                            if (a = Math.abs(t[i * 4] - t[e * 4 + i * 2]), a > .01) return !1;
                            i += 1;
                        }
                        return !0;
                    }, GradientProperty.prototype.checkCollapsable = function() {
                        if (this.o.length / 2 !== this.c.length / 4) return !1;
                        if (this.data.k.k[0].s) for(var t = 0, e = this.data.k.k.length; t < e;){
                            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                            t += 1;
                        }
                        else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                        return !0;
                    }, GradientProperty.prototype.getValue = function(t) {
                        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                            var e, i = this.data.p * 4, r, a;
                            for(e = 0; e < i; e += 1)r = e % 4 === 0 ? 100 : 255, a = Math.round(this.prop.v[e] * r), this.c[e] !== a && (this.c[e] = a, this._cmdf = !t);
                            if (this.o.length) for(i = this.prop.v.length, e = this.data.p * 4; e < i; e += 1)r = e % 2 === 0 ? 100 : 1, a = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== a && (this.o[e - this.data.p * 4] = a, this._omdf = !t);
                            this._mdf = !t;
                        }
                    }, extendPrototype([
                        DynamicPropertyContainer
                    ], GradientProperty);
                    function SVGGradientFillStyleData(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i);
                    }
                    SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
                        this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                            k: 0
                        }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                            k: 0
                        }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated;
                    }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                        var i = createElementID(), r = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
                        r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
                        var a = [], s, n, h;
                        for(h = e.g.p * 4, n = 0; n < h; n += 4)s = createNS("stop"), r.appendChild(s), a.push(s);
                        t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"), this.gf = r, this.cst = a;
                    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                        if (this.g._hasOpacity && !this.g._collapsable) {
                            var i, r, a, s = createNS("mask"), n = createNS("path");
                            s.appendChild(n);
                            var h = createElementID(), o = createElementID();
                            s.setAttribute("id", o);
                            var c = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
                            c.setAttribute("id", h), c.setAttribute("spreadMethod", "pad"), c.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                            var g = this.stops;
                            for(r = t.g.p * 4; r < a; r += 2)i = createNS("stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), c.appendChild(i), g.push(i);
                            n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + h + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = c, this.ms = s, this.ost = g, this.maskId = o, e.msElem = n;
                        }
                    }, extendPrototype([
                        DynamicPropertyContainer
                    ], SVGGradientFillStyleData);
                    function SVGGradientStrokeStyleData(t, e, i) {
                        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated;
                    }
                    extendPrototype([
                        SVGGradientFillStyleData,
                        DynamicPropertyContainer
                    ], SVGGradientStrokeStyleData);
                    function ShapeGroupData() {
                        this.it = [], this.prevViewData = [], this.gr = createNS("g");
                    }
                    function SVGTransformData(t, e, i) {
                        this.transform = {
                            mProps: t,
                            op: e,
                            container: i
                        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
                    }
                    var buildShapeString = function(t, e, i, r) {
                        if (e === 0) return "";
                        var a = t.o, s = t.i, n = t.v, h, o = " M" + r.applyToPointStringified(n[0][0], n[0][1]);
                        for(h = 1; h < e; h += 1)o += " C" + r.applyToPointStringified(a[h - 1][0], a[h - 1][1]) + " " + r.applyToPointStringified(s[h][0], s[h][1]) + " " + r.applyToPointStringified(n[h][0], n[h][1]);
                        return i && e && (o += " C" + r.applyToPointStringified(a[h - 1][0], a[h - 1][1]) + " " + r.applyToPointStringified(s[0][0], s[0][1]) + " " + r.applyToPointStringified(n[0][0], n[0][1]), o += "z"), o;
                    }, SVGElementsRenderer = function() {
                        var t = new Matrix, e = new Matrix, i = {
                            createRenderFunction: r
                        };
                        function r(b) {
                            switch(b.ty){
                                case "fl":
                                    return h;
                                case "gf":
                                    return c;
                                case "gs":
                                    return o;
                                case "st":
                                    return g;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return n;
                                case "tr":
                                    return a;
                                case "no":
                                    return s;
                                default:
                                    return null;
                            }
                        }
                        function a(b, f, x) {
                            (x || f.transform.op._mdf) && f.transform.container.setAttribute("opacity", f.transform.op.v), (x || f.transform.mProps._mdf) && f.transform.container.setAttribute("transform", f.transform.mProps.v.to2dCSS());
                        }
                        function s() {}
                        function n(b, f, x) {
                            var v, d, A, m, l, p, u = f.styles.length, P = f.lvl, S, C, M, w;
                            for(p = 0; p < u; p += 1){
                                if (m = f.sh._mdf || x, f.styles[p].lvl < P) {
                                    for(C = e.reset(), M = P - f.styles[p].lvl, w = f.transformers.length - 1; !m && M > 0;)m = f.transformers[w].mProps._mdf || m, M -= 1, w -= 1;
                                    if (m) for(M = P - f.styles[p].lvl, w = f.transformers.length - 1; M > 0;)C.multiply(f.transformers[w].mProps.v), M -= 1, w -= 1;
                                } else C = t;
                                if (S = f.sh.paths, d = S._length, m) {
                                    for(A = "", v = 0; v < d; v += 1)l = S.shapes[v], l && l._length && (A += buildShapeString(l, l._length, l.c, C));
                                    f.caches[p] = A;
                                } else A = f.caches[p];
                                f.styles[p].d += b.hd === !0 ? "" : A, f.styles[p]._mdf = m || f.styles[p]._mdf;
                            }
                        }
                        function h(b, f, x) {
                            var v = f.style;
                            (f.c._mdf || x) && v.pElem.setAttribute("fill", "rgb(" + bmFloor(f.c.v[0]) + "," + bmFloor(f.c.v[1]) + "," + bmFloor(f.c.v[2]) + ")"), (f.o._mdf || x) && v.pElem.setAttribute("fill-opacity", f.o.v);
                        }
                        function o(b, f, x) {
                            c(b, f, x), g(b, f, x);
                        }
                        function c(b, f, x) {
                            var v = f.gf, d = f.g._hasOpacity, A = f.s.v, m = f.e.v;
                            if (f.o._mdf || x) {
                                var l = b.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                                f.style.pElem.setAttribute(l, f.o.v);
                            }
                            if (f.s._mdf || x) {
                                var p = b.t === 1 ? "x1" : "cx", u = p === "x1" ? "y1" : "cy";
                                v.setAttribute(p, A[0]), v.setAttribute(u, A[1]), d && !f.g._collapsable && (f.of.setAttribute(p, A[0]), f.of.setAttribute(u, A[1]));
                            }
                            var P, S, C, M;
                            if (f.g._cmdf || x) {
                                P = f.cst;
                                var w = f.g.c;
                                for(C = P.length, S = 0; S < C; S += 1)M = P[S], M.setAttribute("offset", w[S * 4] + "%"), M.setAttribute("stop-color", "rgb(" + w[S * 4 + 1] + "," + w[S * 4 + 2] + "," + w[S * 4 + 3] + ")");
                            }
                            if (d && (f.g._omdf || x)) {
                                var F = f.g.o;
                                for(f.g._collapsable ? P = f.cst : P = f.ost, C = P.length, S = 0; S < C; S += 1)M = P[S], f.g._collapsable || M.setAttribute("offset", F[S * 2] + "%"), M.setAttribute("stop-opacity", F[S * 2 + 1]);
                            }
                            if (b.t === 1) (f.e._mdf || x) && (v.setAttribute("x2", m[0]), v.setAttribute("y2", m[1]), d && !f.g._collapsable && (f.of.setAttribute("x2", m[0]), f.of.setAttribute("y2", m[1])));
                            else {
                                var V;
                                if ((f.s._mdf || f.e._mdf || x) && (V = Math.sqrt(Math.pow(A[0] - m[0], 2) + Math.pow(A[1] - m[1], 2)), v.setAttribute("r", V), d && !f.g._collapsable && f.of.setAttribute("r", V)), f.e._mdf || f.h._mdf || f.a._mdf || x) {
                                    V || (V = Math.sqrt(Math.pow(A[0] - m[0], 2) + Math.pow(A[1] - m[1], 2)));
                                    var I = Math.atan2(m[1] - A[1], m[0] - A[0]), L = f.h.v;
                                    L >= 1 ? L = .99 : L <= -1 && (L = -0.99);
                                    var B = V * L, R = Math.cos(I + f.a.v) * B + A[0], E = Math.sin(I + f.a.v) * B + A[1];
                                    v.setAttribute("fx", R), v.setAttribute("fy", E), d && !f.g._collapsable && (f.of.setAttribute("fx", R), f.of.setAttribute("fy", E));
                                }
                            }
                        }
                        function g(b, f, x) {
                            var v = f.style, d = f.d;
                            d && (d._mdf || x) && d.dashStr && (v.pElem.setAttribute("stroke-dasharray", d.dashStr), v.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), f.c && (f.c._mdf || x) && v.pElem.setAttribute("stroke", "rgb(" + bmFloor(f.c.v[0]) + "," + bmFloor(f.c.v[1]) + "," + bmFloor(f.c.v[2]) + ")"), (f.o._mdf || x) && v.pElem.setAttribute("stroke-opacity", f.o.v), (f.w._mdf || x) && (v.pElem.setAttribute("stroke-width", f.w.v), v.msElem && v.msElem.setAttribute("stroke-width", f.w.v));
                        }
                        return i;
                    }();
                    function SVGShapeElement(t, e, i) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [];
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        SVGBaseElement,
                        IShapeElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableDOMElement
                    ], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
                    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                        var t, e = this.shapes.length, i, r, a = this.stylesList.length, s, n = [], h = !1;
                        for(r = 0; r < a; r += 1){
                            for(s = this.stylesList[r], h = !1, n.length = 0, t = 0; t < e; t += 1)i = this.shapes[t], i.styles.indexOf(s) !== -1 && (n.push(i), h = i._isAnimated || h);
                            n.length > 1 && h && this.setShapesAsAnimated(n);
                        }
                    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                        var e, i = t.length;
                        for(e = 0; e < i; e += 1)t[e].setAsAnimated();
                    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                        var i, r = new SVGStyleData(t, e), a = r.pElem;
                        if (t.ty === "st") i = new SVGStrokeStyleData(this, t, r);
                        else if (t.ty === "fl") i = new SVGFillStyleData(this, t, r);
                        else if (t.ty === "gf" || t.ty === "gs") {
                            var s = t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                            i = new s(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), a.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"));
                        } else t.ty === "no" && (i = new SVGNoStyleData(this, t, r));
                        return (t.ty === "st" || t.ty === "gs") && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), a.setAttribute("fill-opacity", "0"), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i;
                    }, SVGShapeElement.prototype.createGroupElement = function(t) {
                        var e = new ShapeGroupData;
                        return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
                    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                        var i = TransformPropertyFactory.getTransformProperty(this, t, this), r = new SVGTransformData(i, i.o, e);
                        return this.addToAnimatedContents(t, r), r;
                    }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
                        var r = 4;
                        t.ty === "rc" ? r = 5 : t.ty === "el" ? r = 6 : t.ty === "sr" && (r = 7);
                        var a = ShapePropertyFactory.getShapeProp(this, t, r, this), s = new SVGShapeData(e, i, a);
                        return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s;
                    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                        for(var i = 0, r = this.animatedContents.length; i < r;){
                            if (this.animatedContents[i].element === e) return;
                            i += 1;
                        }
                        this.animatedContents.push({
                            fn: SVGElementsRenderer.createRenderFunction(t),
                            element: e,
                            data: t
                        });
                    }, SVGShapeElement.prototype.setElementStyles = function(t) {
                        var e = t.styles, i, r = this.stylesList.length;
                        for(i = 0; i < r; i += 1)this.stylesList[i].closed || e.push(this.stylesList[i]);
                    }, SVGShapeElement.prototype.reloadShapes = function() {
                        this._isFirstFrame = !0;
                        var t, e = this.itemsData.length;
                        for(t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t];
                        for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue();
                        this.renderModifiers();
                    }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, a, s, n) {
                        var h = [].concat(s), o, c = t.length - 1, g, b, f = [], x = [], v, d, A;
                        for(o = c; o >= 0; o -= 1){
                            if (A = this.searchProcessedElement(t[o]), A ? e[o] = i[A - 1] : t[o]._render = n, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") A ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], a), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), f.push(e[o].style);
                            else if (t[o].ty === "gr") {
                                if (!A) e[o] = this.createGroupElement(t[o]);
                                else for(b = e[o].it.length, g = 0; g < b; g += 1)e[o].prevViewData[g] = e[o].it[g];
                                this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, h, n), t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr);
                            } else t[o].ty === "tr" ? (A || (e[o] = this.createTransformElement(t[o], r)), v = e[o].transform, h.push(v)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (A || (e[o] = this.createShapeElement(t[o], h, a)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (A ? (d = e[o], d.closed = !1) : (d = ShapeModifiers.getModifier(t[o].ty), d.init(this, t[o]), e[o] = d, this.shapeModifiers.push(d)), x.push(d)) : t[o].ty === "rp" && (A ? (d = e[o], d.closed = !0) : (d = ShapeModifiers.getModifier(t[o].ty), e[o] = d, d.init(this, t, o, e), this.shapeModifiers.push(d), n = !1), x.push(d));
                            this.addProcessedElement(t[o], o + 1);
                        }
                        for(c = f.length, o = 0; o < c; o += 1)f[o].closed = !0;
                        for(c = x.length, o = 0; o < c; o += 1)x[o].closed = !0;
                    }, SVGShapeElement.prototype.renderInnerContent = function() {
                        this.renderModifiers();
                        var t, e = this.stylesList.length;
                        for(t = 0; t < e; t += 1)this.stylesList[t].reset();
                        for(this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
                    }, SVGShapeElement.prototype.renderShape = function() {
                        var t, e = this.animatedContents.length, i;
                        for(t = 0; t < e; t += 1)i = this.animatedContents[t], (this._isFirstFrame || i.element._isAnimated) && i.data !== !0 && i.fn(i.data, i.element, this._isFirstFrame);
                    }, SVGShapeElement.prototype.destroy = function() {
                        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
                    };
                    function LetterProps(t, e, i, r, a, s) {
                        this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = a, this.p = s, this._mdf = {
                            o: !0,
                            sw: !!e,
                            sc: !!i,
                            fc: !!r,
                            m: !0,
                            p: !0
                        };
                    }
                    LetterProps.prototype.update = function(t, e, i, r, a, s) {
                        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                        var n = !1;
                        return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), s.length && (this.p[0] !== s[0] || this.p[1] !== s[1] || this.p[4] !== s[4] || this.p[5] !== s[5] || this.p[12] !== s[12] || this.p[13] !== s[13]) && (this.p = s, this._mdf.p = !0, n = !0), n;
                    };
                    function TextProperty(t, e) {
                        this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                            ascent: 0,
                            boxWidth: this.defaultBoxWidth,
                            f: "",
                            fStyle: "",
                            fWeight: "",
                            fc: "",
                            j: "",
                            justifyOffset: "",
                            l: [],
                            lh: 0,
                            lineWidths: [],
                            ls: "",
                            of: "",
                            s: "",
                            sc: "",
                            sw: 0,
                            t: 0,
                            tr: 0,
                            sz: 0,
                            ps: null,
                            fillColorAnim: !1,
                            strokeColorAnim: !1,
                            strokeWidthAnim: !1,
                            yOffset: 0,
                            finalSize: 0,
                            finalText: [],
                            finalLineHeight: 0,
                            __complete: !1
                        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
                    }
                    TextProperty.prototype.defaultBoxWidth = [
                        0,
                        0
                    ], TextProperty.prototype.copyData = function(t, e) {
                        for(var i in e)Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t;
                    }, TextProperty.prototype.setCurrentData = function(t) {
                        t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
                    }, TextProperty.prototype.searchProperty = function() {
                        return this.searchKeyframes();
                    }, TextProperty.prototype.searchKeyframes = function() {
                        return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
                    }, TextProperty.prototype.addEffect = function(t) {
                        this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
                    }, TextProperty.prototype.getValue = function(t) {
                        if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
                            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                            var e = this.currentData, i = this.keysIndex;
                            if (this.lock) {
                                this.setCurrentData(this.currentData);
                                return;
                            }
                            this.lock = !0, this._mdf = !1;
                            var r, a = this.effectsSequence.length, s = t || this.data.d.k[this.keysIndex].s;
                            for(r = 0; r < a; r += 1)i !== this.keysIndex ? s = this.effectsSequence[r](s, s.t) : s = this.effectsSequence[r](this.currentData, s.t);
                            e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
                        }
                    }, TextProperty.prototype.getKeyframeValue = function() {
                        for(var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);)i += 1;
                        return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
                    }, TextProperty.prototype.buildFinalText = function(t) {
                        for(var e = [], i = 0, r = t.length, a, s, n = !1, h = !1, o = ""; i < r;)n = h, h = !1, a = t.charCodeAt(i), o = t.charAt(i), FontManager.isCombinedCharacter(a) ? n = !0 : a >= 55296 && a <= 56319 ? FontManager.isRegionalFlag(t, i) ? o = t.substr(i, 14) : (s = t.charCodeAt(i + 1), s >= 56320 && s <= 57343 && (FontManager.isModifier(a, s) ? (o = t.substr(i, 2), n = !0) : FontManager.isFlagEmoji(t.substr(i, 4)) ? o = t.substr(i, 4) : o = t.substr(i, 2))) : a > 56319 ? (s = t.charCodeAt(i + 1), FontManager.isVariationSelector(a) && (n = !0)) : FontManager.isZeroWidthJoiner(a) && (n = !0, h = !0), n ? (e[e.length - 1] += o, n = !1) : e.push(o), i += o.length;
                        return e;
                    }, TextProperty.prototype.completeTextData = function(t) {
                        t.__complete = !0;
                        var e = this.elem.globalData.fontManager, i = this.data, r = [], a, s, n, h = 0, o, c = i.m.g, g = 0, b = 0, f = 0, x = [], v = 0, d = 0, A, m, l = e.getFontByName(t.f), p, u = 0, P = getFontProperties(l);
                        t.fWeight = P.weight, t.fStyle = P.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), s = t.finalText.length, t.finalLineHeight = t.lh;
                        var S = t.tr / 1e3 * t.finalSize, C;
                        if (t.sz) for(var M = !0, w = t.sz[0], F = t.sz[1], V, I; M;){
                            I = this.buildFinalText(t.t), V = 0, v = 0, s = I.length, S = t.tr / 1e3 * t.finalSize;
                            var L = -1;
                            for(a = 0; a < s; a += 1)C = I[a].charCodeAt(0), n = !1, I[a] === " " ? L = a : (C === 13 || C === 3) && (v = 0, n = !0, V += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (p = e.getCharData(I[a], l.fStyle, l.fFamily), u = n ? 0 : p.w * t.finalSize / 100) : u = e.measureText(I[a], t.f, t.finalSize), v + u > w && I[a] !== " " ? (L === -1 ? s += 1 : a = L, V += t.finalLineHeight || t.finalSize * 1.2, I.splice(a, L === a ? 1 : 0, "\r"), L = -1, v = 0) : (v += u, v += S);
                            V += l.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && F < V ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = I, s = t.finalText.length, M = !1);
                        }
                        v = -S, u = 0;
                        var B = 0, R;
                        for(a = 0; a < s; a += 1)if (n = !1, R = t.finalText[a], C = R.charCodeAt(0), C === 13 || C === 3 ? (B = 0, x.push(v), d = v > d ? v : d, v = -2 * S, o = "", n = !0, f += 1) : o = R, e.chars ? (p = e.getCharData(R, l.fStyle, e.getFontByName(t.f).fFamily), u = n ? 0 : p.w * t.finalSize / 100) : u = e.measureText(o, t.f, t.finalSize), R === " " ? B += u + S : (v += u + S + B, B = 0), r.push({
                            l: u,
                            an: u,
                            add: g,
                            n,
                            anIndexes: [],
                            val: o,
                            line: f,
                            animatorJustifyOffset: 0
                        }), c == 2) {
                            if (g += u, o === "" || o === " " || a === s - 1) {
                                for((o === "" || o === " ") && (g -= u); b <= a;)r[b].an = g, r[b].ind = h, r[b].extra = u, b += 1;
                                h += 1, g = 0;
                            }
                        } else if (c == 3) {
                            if (g += u, o === "" || a === s - 1) {
                                for(o === "" && (g -= u); b <= a;)r[b].an = g, r[b].ind = h, r[b].extra = u, b += 1;
                                g = 0, h += 1;
                            }
                        } else r[h].ind = h, r[h].extra = 0, h += 1;
                        if (t.l = r, d = v > d ? v : d, x.push(v), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                        else switch(t.boxWidth = d, t.j){
                            case 1:
                                t.justifyOffset = -t.boxWidth;
                                break;
                            case 2:
                                t.justifyOffset = -t.boxWidth / 2;
                                break;
                            default:
                                t.justifyOffset = 0;
                        }
                        t.lineWidths = x;
                        var E = i.a, T, y;
                        m = E.length;
                        var _, k, D = [];
                        for(A = 0; A < m; A += 1){
                            for(T = E[A], T.a.sc && (t.strokeColorAnim = !0), T.a.sw && (t.strokeWidthAnim = !0), (T.a.fc || T.a.fh || T.a.fs || T.a.fb) && (t.fillColorAnim = !0), k = 0, _ = T.s.b, a = 0; a < s; a += 1)y = r[a], y.anIndexes[A] = k, (_ == 1 && y.val !== "" || _ == 2 && y.val !== "" && y.val !== " " || _ == 3 && (y.n || y.val == " " || a == s - 1) || _ == 4 && (y.n || a == s - 1)) && (T.s.rn === 1 && D.push(k), k += 1);
                            i.a[A].s.totalChars = k;
                            var O = -1, z;
                            if (T.s.rn === 1) for(a = 0; a < s; a += 1)y = r[a], O != y.anIndexes[A] && (O = y.anIndexes[A], z = D.splice(Math.floor(Math.random() * D.length), 1)[0]), y.anIndexes[A] = z;
                        }
                        t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = l.ascent * t.finalSize / 100;
                    }, TextProperty.prototype.updateDocumentData = function(t, e) {
                        e = e === void 0 ? this.keysIndex : e;
                        var i = this.copyData({}, this.data.d.k[e].s);
                        i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this);
                    }, TextProperty.prototype.recalculate = function(t) {
                        var e = this.data.d.k[t].s;
                        e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
                    }, TextProperty.prototype.canResizeFont = function(t) {
                        this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
                    }, TextProperty.prototype.setMinimumFontSize = function(t) {
                        this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
                    };
                    var TextSelectorProp = function() {
                        var t = Math.max, e = Math.min, i = Math.floor;
                        function r(s, n) {
                            this._currentTextLength = -1, this.k = !1, this.data = n, this.elem = s, this.comp = s.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(s), this.s = PropertyFactory.getProp(s, n.s || {
                                k: 0
                            }, 0, 0, this), "e" in n ? this.e = PropertyFactory.getProp(s, n.e, 0, 0, this) : this.e = {
                                v: 100
                            }, this.o = PropertyFactory.getProp(s, n.o || {
                                k: 0
                            }, 0, 0, this), this.xe = PropertyFactory.getProp(s, n.xe || {
                                k: 0
                            }, 0, 0, this), this.ne = PropertyFactory.getProp(s, n.ne || {
                                k: 0
                            }, 0, 0, this), this.sm = PropertyFactory.getProp(s, n.sm || {
                                k: 100
                            }, 0, 0, this), this.a = PropertyFactory.getProp(s, n.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
                        }
                        r.prototype = {
                            getMult: function(s) {
                                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                var n = 0, h = 0, o = 1, c = 1;
                                this.ne.v > 0 ? n = this.ne.v / 100 : h = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : c = 1 + this.xe.v / 100;
                                var g = BezierFactory.getBezierEasing(n, h, o, c).get, b = 0, f = this.finalS, x = this.finalE, v = this.data.sh;
                                if (v === 2) x === f ? b = s >= x ? 1 : 0 : b = t(0, e(.5 / (x - f) + (s - f) / (x - f), 1)), b = g(b);
                                else if (v === 3) x === f ? b = s >= x ? 0 : 1 : b = 1 - t(0, e(.5 / (x - f) + (s - f) / (x - f), 1)), b = g(b);
                                else if (v === 4) x === f ? b = 0 : (b = t(0, e(.5 / (x - f) + (s - f) / (x - f), 1)), b < .5 ? b *= 2 : b = 1 - 2 * (b - .5)), b = g(b);
                                else if (v === 5) {
                                    if (x === f) b = 0;
                                    else {
                                        var d = x - f;
                                        s = e(t(0, s + .5 - f), x - f);
                                        var A = -d / 2 + s, m = d / 2;
                                        b = Math.sqrt(1 - A * A / (m * m));
                                    }
                                    b = g(b);
                                } else v === 6 ? (x === f ? b = 0 : (s = e(t(0, s + .5 - f), x - f), b = (1 + Math.cos(Math.PI + Math.PI * 2 * s / (x - f))) / 2), b = g(b)) : (s >= i(f) && (s - f < 0 ? b = t(0, e(e(x, 1) - (f - s), 1)) : b = t(0, e(x - s, 1))), b = g(b));
                                if (this.sm.v !== 100) {
                                    var l = this.sm.v * .01;
                                    l === 0 && (l = 1e-8);
                                    var p = .5 - l * .5;
                                    b < p ? b = 0 : (b = (b - p) / l, b > 1 && (b = 1));
                                }
                                return b * this.a.v;
                            },
                            getValue: function(s) {
                                this.iterateDynamicProperties(), this._mdf = s || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, s && this.data.r === 2 && (this.e.v = this._currentTextLength);
                                var n = this.data.r === 2 ? 1 : 100 / this.data.totalChars, h = this.o.v / n, o = this.s.v / n + h, c = this.e.v / n + h;
                                if (o > c) {
                                    var g = o;
                                    o = c, c = g;
                                }
                                this.finalS = o, this.finalE = c;
                            }
                        }, extendPrototype([
                            DynamicPropertyContainer
                        ], r);
                        function a(s, n, h) {
                            return new r(s, n);
                        }
                        return {
                            getTextSelectorProp: a
                        };
                    }();
                    function TextAnimatorDataProperty(t, e, i) {
                        var r = {
                            propType: !1
                        }, a = PropertyFactory.getProp, s = e.a;
                        this.a = {
                            r: s.r ? a(t, s.r, 0, degToRads, i) : r,
                            rx: s.rx ? a(t, s.rx, 0, degToRads, i) : r,
                            ry: s.ry ? a(t, s.ry, 0, degToRads, i) : r,
                            sk: s.sk ? a(t, s.sk, 0, degToRads, i) : r,
                            sa: s.sa ? a(t, s.sa, 0, degToRads, i) : r,
                            s: s.s ? a(t, s.s, 1, .01, i) : r,
                            a: s.a ? a(t, s.a, 1, 0, i) : r,
                            o: s.o ? a(t, s.o, 0, .01, i) : r,
                            p: s.p ? a(t, s.p, 1, 0, i) : r,
                            sw: s.sw ? a(t, s.sw, 0, 0, i) : r,
                            sc: s.sc ? a(t, s.sc, 1, 0, i) : r,
                            fc: s.fc ? a(t, s.fc, 1, 0, i) : r,
                            fh: s.fh ? a(t, s.fh, 0, 0, i) : r,
                            fs: s.fs ? a(t, s.fs, 0, .01, i) : r,
                            fb: s.fb ? a(t, s.fb, 0, .01, i) : r,
                            t: s.t ? a(t, s.t, 0, 0, i) : r
                        }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t;
                    }
                    function TextAnimatorProperty(t, e, i) {
                        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                            alignment: {}
                        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i);
                    }
                    TextAnimatorProperty.prototype.searchProperties = function() {
                        var t, e = this._textData.a.length, i, r = PropertyFactory.getProp;
                        for(t = 0; t < e; t += 1)i = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, i, this);
                        this._textData.p && "m" in this._textData.p ? (this._pathData = {
                            a: r(this._elem, this._textData.p.a, 0, 0, this),
                            f: r(this._elem, this._textData.p.f, 0, 0, this),
                            l: r(this._elem, this._textData.p.l, 0, 0, this),
                            r: r(this._elem, this._textData.p.r, 0, 0, this),
                            p: r(this._elem, this._textData.p.p, 0, 0, this),
                            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this);
                    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                        if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                            this._isFirstFrame = !1;
                            var i = this._moreOptions.alignment.v, r = this._animatorsData, a = this._textData, s = this.mHelper, n = this._renderType, h = this.renderedLetters.length, o, c, g, b, f = t.l, x, v, d, A, m, l, p, u, P, S, C, M, w, F, V;
                            if (this._hasMaskedPath) {
                                if (V = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                    var I = V.v;
                                    this._pathData.r.v && (I = I.reverse()), x = {
                                        tLength: 0,
                                        segments: []
                                    }, b = I._length - 1;
                                    var L;
                                    for(M = 0, g = 0; g < b; g += 1)L = bez.buildBezierData(I.v[g], I.v[g + 1], [
                                        I.o[g][0] - I.v[g][0],
                                        I.o[g][1] - I.v[g][1]
                                    ], [
                                        I.i[g + 1][0] - I.v[g + 1][0],
                                        I.i[g + 1][1] - I.v[g + 1][1]
                                    ]), x.tLength += L.segmentLength, x.segments.push(L), M += L.segmentLength;
                                    g = b, V.v.c && (L = bez.buildBezierData(I.v[g], I.v[0], [
                                        I.o[g][0] - I.v[g][0],
                                        I.o[g][1] - I.v[g][1]
                                    ], [
                                        I.i[0][0] - I.v[0][0],
                                        I.i[0][1] - I.v[0][1]
                                    ]), x.tLength += L.segmentLength, x.segments.push(L), M += L.segmentLength), this._pathData.pi = x;
                                }
                                if (x = this._pathData.pi, v = this._pathData.f.v, p = 0, l = 1, A = 0, m = !0, S = x.segments, v < 0 && V.v.c) for(x.tLength < Math.abs(v) && (v = -Math.abs(v) % x.tLength), p = S.length - 1, P = S[p].points, l = P.length - 1; v < 0;)v += P[l].partialLength, l -= 1, l < 0 && (p -= 1, P = S[p].points, l = P.length - 1);
                                P = S[p].points, u = P[l - 1], d = P[l], C = d.partialLength;
                            }
                            b = f.length, o = 0, c = 0;
                            var B = t.finalSize * 1.2 * .714, R = !0, E, T, y, _, k;
                            _ = r.length;
                            var D, O = -1, z, H, N, q = v, W = p, Y = l, Q = -1, J, $, Z, j, G, et, st, it, tt = "", rt = this.defaultPropsArray, at;
                            if (t.j === 2 || t.j === 1) {
                                var X = 0, nt = 0, ot = t.j === 2 ? -0.5 : -1, K = 0, ht = !0;
                                for(g = 0; g < b; g += 1)if (f[g].n) {
                                    for(X && (X += nt); K < g;)f[K].animatorJustifyOffset = X, K += 1;
                                    X = 0, ht = !0;
                                } else {
                                    for(y = 0; y < _; y += 1)E = r[y].a, E.t.propType && (ht && t.j === 2 && (nt += E.t.v * ot), T = r[y].s, D = T.getMult(f[g].anIndexes[y], a.a[y].s.totalChars), D.length ? X += E.t.v * D[0] * ot : X += E.t.v * D * ot);
                                    ht = !1;
                                }
                                for(X && (X += nt); K < g;)f[K].animatorJustifyOffset = X, K += 1;
                            }
                            for(g = 0; g < b; g += 1){
                                if (s.reset(), J = 1, f[g].n) o = 0, c += t.yOffset, c += R ? 1 : 0, v = q, R = !1, this._hasMaskedPath && (p = W, l = Y, P = S[p].points, u = P[l - 1], d = P[l], C = d.partialLength, A = 0), tt = "", it = "", et = "", at = "", rt = this.defaultPropsArray;
                                else {
                                    if (this._hasMaskedPath) {
                                        if (Q !== f[g].line) {
                                            switch(t.j){
                                                case 1:
                                                    v += M - t.lineWidths[f[g].line];
                                                    break;
                                                case 2:
                                                    v += (M - t.lineWidths[f[g].line]) / 2;
                                                    break;
                                            }
                                            Q = f[g].line;
                                        }
                                        O !== f[g].ind && (f[O] && (v += f[O].extra), v += f[g].an / 2, O = f[g].ind), v += i[0] * f[g].an * .005;
                                        var U = 0;
                                        for(y = 0; y < _; y += 1)E = r[y].a, E.p.propType && (T = r[y].s, D = T.getMult(f[g].anIndexes[y], a.a[y].s.totalChars), D.length ? U += E.p.v[0] * D[0] : U += E.p.v[0] * D), E.a.propType && (T = r[y].s, D = T.getMult(f[g].anIndexes[y], a.a[y].s.totalChars), D.length ? U += E.a.v[0] * D[0] : U += E.a.v[0] * D);
                                        for(m = !0, this._pathData.a.v && (v = f[0].an * .5 + (M - this._pathData.f.v - f[0].an * .5 - f[f.length - 1].an * .5) * O / (b - 1), v += this._pathData.f.v); m;)A + C >= v + U || !P ? (w = (v + U - A) / d.partialLength, H = u.point[0] + (d.point[0] - u.point[0]) * w, N = u.point[1] + (d.point[1] - u.point[1]) * w, s.translate(-i[0] * f[g].an * .005, -(i[1] * B) * .01), m = !1) : P && (A += d.partialLength, l += 1, l >= P.length && (l = 0, p += 1, S[p] ? P = S[p].points : V.v.c ? (l = 0, p = 0, P = S[p].points) : (A -= d.partialLength, P = null)), P && (u = d, d = P[l], C = d.partialLength));
                                        z = f[g].an / 2 - f[g].add, s.translate(-z, 0, 0);
                                    } else z = f[g].an / 2 - f[g].add, s.translate(-z, 0, 0), s.translate(-i[0] * f[g].an * .005, -i[1] * B * .01, 0);
                                    for(y = 0; y < _; y += 1)E = r[y].a, E.t.propType && (T = r[y].s, D = T.getMult(f[g].anIndexes[y], a.a[y].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? D.length ? v += E.t.v * D[0] : v += E.t.v * D : D.length ? o += E.t.v * D[0] : o += E.t.v * D));
                                    for(t.strokeWidthAnim && (Z = t.sw || 0), t.strokeColorAnim && (t.sc ? $ = [
                                        t.sc[0],
                                        t.sc[1],
                                        t.sc[2]
                                    ] : $ = [
                                        0,
                                        0,
                                        0
                                    ]), t.fillColorAnim && t.fc && (j = [
                                        t.fc[0],
                                        t.fc[1],
                                        t.fc[2]
                                    ]), y = 0; y < _; y += 1)E = r[y].a, E.a.propType && (T = r[y].s, D = T.getMult(f[g].anIndexes[y], a.a[y].s.totalChars), D.length ? s.translate(-E.a.v[0] * D[0], -E.a.v[1] * D[1], E.a.v[2] * D[2]) : s.translate(-E.a.v[0] * D, -E.a.v[1] * D, E.a.v[2] * D));
                                    for(y = 0; y < _; y += 1)E = r[y].a, E.s.propType && (T = r[y].s, D = T.getMult(f[g].anIndexes[y], a.a[y].s.totalChars), D.length ? s.scale(1 + (E.s.v[0] - 1) * D[0], 1 + (E.s.v[1] - 1) * D[1], 1) : s.scale(1 + (E.s.v[0] - 1) * D, 1 + (E.s.v[1] - 1) * D, 1));
                                    for(y = 0; y < _; y += 1){
                                        if (E = r[y].a, T = r[y].s, D = T.getMult(f[g].anIndexes[y], a.a[y].s.totalChars), E.sk.propType && (D.length ? s.skewFromAxis(-E.sk.v * D[0], E.sa.v * D[1]) : s.skewFromAxis(-E.sk.v * D, E.sa.v * D)), E.r.propType && (D.length ? s.rotateZ(-E.r.v * D[2]) : s.rotateZ(-E.r.v * D)), E.ry.propType && (D.length ? s.rotateY(E.ry.v * D[1]) : s.rotateY(E.ry.v * D)), E.rx.propType && (D.length ? s.rotateX(E.rx.v * D[0]) : s.rotateX(E.rx.v * D)), E.o.propType && (D.length ? J += (E.o.v * D[0] - J) * D[0] : J += (E.o.v * D - J) * D), t.strokeWidthAnim && E.sw.propType && (D.length ? Z += E.sw.v * D[0] : Z += E.sw.v * D), t.strokeColorAnim && E.sc.propType) for(G = 0; G < 3; G += 1)D.length ? $[G] += (E.sc.v[G] - $[G]) * D[0] : $[G] += (E.sc.v[G] - $[G]) * D;
                                        if (t.fillColorAnim && t.fc) {
                                            if (E.fc.propType) for(G = 0; G < 3; G += 1)D.length ? j[G] += (E.fc.v[G] - j[G]) * D[0] : j[G] += (E.fc.v[G] - j[G]) * D;
                                            E.fh.propType && (D.length ? j = addHueToRGB(j, E.fh.v * D[0]) : j = addHueToRGB(j, E.fh.v * D)), E.fs.propType && (D.length ? j = addSaturationToRGB(j, E.fs.v * D[0]) : j = addSaturationToRGB(j, E.fs.v * D)), E.fb.propType && (D.length ? j = addBrightnessToRGB(j, E.fb.v * D[0]) : j = addBrightnessToRGB(j, E.fb.v * D));
                                        }
                                    }
                                    for(y = 0; y < _; y += 1)E = r[y].a, E.p.propType && (T = r[y].s, D = T.getMult(f[g].anIndexes[y], a.a[y].s.totalChars), this._hasMaskedPath ? D.length ? s.translate(0, E.p.v[1] * D[0], -E.p.v[2] * D[1]) : s.translate(0, E.p.v[1] * D, -E.p.v[2] * D) : D.length ? s.translate(E.p.v[0] * D[0], E.p.v[1] * D[1], -E.p.v[2] * D[2]) : s.translate(E.p.v[0] * D, E.p.v[1] * D, -E.p.v[2] * D));
                                    if (t.strokeWidthAnim && (et = Z < 0 ? 0 : Z), t.strokeColorAnim && (st = "rgb(" + Math.round($[0] * 255) + "," + Math.round($[1] * 255) + "," + Math.round($[2] * 255) + ")"), t.fillColorAnim && t.fc && (it = "rgb(" + Math.round(j[0] * 255) + "," + Math.round(j[1] * 255) + "," + Math.round(j[2] * 255) + ")"), this._hasMaskedPath) {
                                        if (s.translate(0, -t.ls), s.translate(0, i[1] * B * .01 + c, 0), this._pathData.p.v) {
                                            F = (d.point[1] - u.point[1]) / (d.point[0] - u.point[0]);
                                            var lt = Math.atan(F) * 180 / Math.PI;
                                            d.point[0] < u.point[0] && (lt += 180), s.rotate(-lt * Math.PI / 180);
                                        }
                                        s.translate(H, N, 0), v -= i[0] * f[g].an * .005, f[g + 1] && O !== f[g + 1].ind && (v += f[g].an / 2, v += t.tr * .001 * t.finalSize);
                                    } else {
                                        switch(s.translate(o, c, 0), t.ps && s.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j){
                                            case 1:
                                                s.translate(f[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[g].line]), 0, 0);
                                                break;
                                            case 2:
                                                s.translate(f[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[g].line]) / 2, 0, 0);
                                                break;
                                        }
                                        s.translate(0, -t.ls), s.translate(z, 0, 0), s.translate(i[0] * f[g].an * .005, i[1] * B * .01, 0), o += f[g].l + t.tr * .001 * t.finalSize;
                                    }
                                    n === "html" ? tt = s.toCSS() : n === "svg" ? tt = s.to2dCSS() : rt = [
                                        s.props[0],
                                        s.props[1],
                                        s.props[2],
                                        s.props[3],
                                        s.props[4],
                                        s.props[5],
                                        s.props[6],
                                        s.props[7],
                                        s.props[8],
                                        s.props[9],
                                        s.props[10],
                                        s.props[11],
                                        s.props[12],
                                        s.props[13],
                                        s.props[14],
                                        s.props[15]
                                    ], at = J;
                                }
                                h <= g ? (k = new LetterProps(at, et, st, it, tt, rt), this.renderedLetters.push(k), h += 1, this.lettersChangedFlag = !0) : (k = this.renderedLetters[g], this.lettersChangedFlag = k.update(at, et, st, it, tt, rt) || this.lettersChangedFlag);
                            }
                        }
                    }, TextAnimatorProperty.prototype.getValue = function() {
                        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
                    }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([
                        DynamicPropertyContainer
                    ], TextAnimatorProperty);
                    function ITextElement() {}
                    ITextElement.prototype.initElement = function(t, e, i) {
                        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
                    }, ITextElement.prototype.prepareFrame = function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
                    }, ITextElement.prototype.createPathShape = function(t, e) {
                        var i, r = e.length, a, s = "";
                        for(i = 0; i < r; i += 1)e[i].ty === "sh" && (a = e[i].ks.k, s += buildShapeString(a, a.i.length, !0, t));
                        return s;
                    }, ITextElement.prototype.updateDocumentData = function(t, e) {
                        this.textProperty.updateDocumentData(t, e);
                    }, ITextElement.prototype.canResizeFont = function(t) {
                        this.textProperty.canResizeFont(t);
                    }, ITextElement.prototype.setMinimumFontSize = function(t) {
                        this.textProperty.setMinimumFontSize(t);
                    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, a) {
                        switch(t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j){
                            case 1:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                                break;
                            case 2:
                                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
                                break;
                        }
                        e.translate(r, a, 0);
                    }, ITextElement.prototype.buildColor = function(t) {
                        return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
                    }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
                        (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
                    };
                    var emptyShapeData = {
                        shapes: []
                    };
                    function SVGTextLottieElement(t, e, i) {
                        this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        SVGBaseElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableDOMElement,
                        ITextElement
                    ], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
                    }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
                        for(var e = 0, i = t.length, r = [], a = ""; e < i;)t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(a), a = "") : a += t[e], e += 1;
                        return r.push(a), r;
                    }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
                        if (t.shapes && t.shapes.length) {
                            var i = t.shapes[0];
                            if (i.it) {
                                var r = i.it[i.it.length - 1];
                                r.s && (r.s.k[0] = e, r.s.k[1] = e);
                            }
                        }
                        return t;
                    }, SVGTextLottieElement.prototype.buildNewText = function() {
                        this.addDynamicProperty(this);
                        var t, e, i = this.textProperty.currentData;
                        this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
                        var r = this.globalData.fontManager.getFontByName(i.f);
                        if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
                        else {
                            this.layerElement.setAttribute("font-family", r.fFamily);
                            var a = i.fWeight, s = i.fStyle;
                            this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", a);
                        }
                        this.layerElement.setAttribute("aria-label", i.t);
                        var n = i.l || [], h = !!this.globalData.fontManager.chars;
                        e = n.length;
                        var o, c = this.mHelper, g = "", b = this.data.singleShape, f = 0, x = 0, v = !0, d = i.tr * .001 * i.finalSize;
                        if (b && !h && !i.sz) {
                            var A = this.textContainer, m = "start";
                            switch(i.j){
                                case 1:
                                    m = "end";
                                    break;
                                case 2:
                                    m = "middle";
                                    break;
                                default:
                                    m = "start";
                                    break;
                            }
                            A.setAttribute("text-anchor", m), A.setAttribute("letter-spacing", d);
                            var l = this.buildTextContents(i.finalText);
                            for(e = l.length, x = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)o = this.textSpans[t].span || createNS("tspan"), o.textContent = l[t], o.setAttribute("x", 0), o.setAttribute("y", x), o.style.display = "inherit", A.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
                                span: null,
                                glyph: null
                            }), this.textSpans[t].span = o, x += i.finalLineHeight;
                            this.layerElement.appendChild(A);
                        } else {
                            var p = this.textSpans.length, u;
                            for(t = 0; t < e; t += 1){
                                if (this.textSpans[t] || (this.textSpans[t] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                }), !h || !b || t === 0) {
                                    if (o = p > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), p <= t) {
                                        if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, h) {
                                            var P = createNS("g");
                                            o.appendChild(P), this.textSpans[t].childSpan = P;
                                        }
                                        this.textSpans[t].span = o, this.layerElement.appendChild(o);
                                    }
                                    o.style.display = "inherit";
                                }
                                if (c.reset(), b && (n[t].n && (f = -d, x += i.yOffset, x += v ? 1 : 0, v = !1), this.applyTextPropertiesToMatrix(i, c, n[t].line, f, x), f += n[t].l || 0, f += d), h) {
                                    u = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily);
                                    var S;
                                    if (u.t === 1) S = new SVGCompElement(u.data, this.globalData, this);
                                    else {
                                        var C = emptyShapeData;
                                        u.data && u.data.shapes && (C = this.buildShapeData(u.data, i.finalSize)), S = new SVGShapeElement(C, this.globalData, this);
                                    }
                                    if (this.textSpans[t].glyph) {
                                        var M = this.textSpans[t].glyph;
                                        this.textSpans[t].childSpan.removeChild(M.layerElement), M.destroy();
                                    }
                                    this.textSpans[t].glyph = S, S._debug = !0, S.prepareFrame(0), S.renderFrame(), this.textSpans[t].childSpan.appendChild(S.layerElement), u.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")");
                                } else b && o.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                            }
                            b && o && o.setAttribute("d", g);
                        }
                        for(; t < this.textSpans.length;)this.textSpans[t].span.style.display = "none", t += 1;
                        this._sizeChanged = !0;
                    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                            this._sizeChanged = !1;
                            var t = this.layerElement.getBBox();
                            this.bbox = {
                                top: t.y,
                                left: t.x,
                                width: t.width,
                                height: t.height
                            };
                        }
                        return this.bbox;
                    }, SVGTextLottieElement.prototype.getValue = function() {
                        var t, e = this.textSpans.length, i;
                        for(this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1)i = this.textSpans[t].glyph, i && (i.prepareFrame(this.comp.renderedFrame - this.data.st), i._mdf && (this._mdf = !0));
                    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                        if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                            this._sizeChanged = !0;
                            var t, e, i = this.textAnimator.renderedLetters, r = this.textProperty.currentData.l;
                            e = r.length;
                            var a, s, n;
                            for(t = 0; t < e; t += 1)r[t].n || (a = i[t], s = this.textSpans[t].span, n = this.textSpans[t].glyph, n && n.renderFrame(), a._mdf.m && s.setAttribute("transform", a.m), a._mdf.o && s.setAttribute("opacity", a.o), a._mdf.sw && s.setAttribute("stroke-width", a.sw), a._mdf.sc && s.setAttribute("stroke", a.sc), a._mdf.fc && s.setAttribute("fill", a.fc));
                        }
                    };
                    function ISolidElement(t, e, i) {
                        this.initElement(t, e, i);
                    }
                    extendPrototype([
                        IImageElement
                    ], ISolidElement), ISolidElement.prototype.createContent = function() {
                        var t = createNS("rect");
                        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
                    };
                    function NullElement(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
                    }
                    NullElement.prototype.prepareFrame = function(t) {
                        this.prepareProperties(t, !0);
                    }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                        return null;
                    }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([
                        BaseElement,
                        TransformElement,
                        HierarchyElement,
                        FrameElement
                    ], NullElement);
                    function SVGRendererBase() {}
                    extendPrototype([
                        BaseRenderer
                    ], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
                        return new NullElement(t, this.globalData, this);
                    }, SVGRendererBase.prototype.createShape = function(t) {
                        return new SVGShapeElement(t, this.globalData, this);
                    }, SVGRendererBase.prototype.createText = function(t) {
                        return new SVGTextLottieElement(t, this.globalData, this);
                    }, SVGRendererBase.prototype.createImage = function(t) {
                        return new IImageElement(t, this.globalData, this);
                    }, SVGRendererBase.prototype.createSolid = function(t) {
                        return new ISolidElement(t, this.globalData, this);
                    }, SVGRendererBase.prototype.configAnimation = function(t) {
                        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                        var e = this.globalData.defs;
                        this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                        var i = createNS("clipPath"), r = createNS("rect");
                        r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
                        var a = createElementID();
                        i.setAttribute("id", a), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
                    }, SVGRendererBase.prototype.destroy = function() {
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                        var t, e = this.layers ? this.layers.length : 0;
                        for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
                    }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
                        var e = 0, i = this.layers.length;
                        for(e = 0; e < i; e += 1)if (this.layers[e].ind === t) return e;
                        return -1;
                    }, SVGRendererBase.prototype.buildItem = function(t) {
                        var e = this.elements;
                        if (!(e[t] || this.layers[t].ty === 99)) {
                            e[t] = !0;
                            var i = this.createItem(this.layers[t]);
                            if (e[t] = i, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
                                var r = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                                if (r === -1) return;
                                if (!this.elements[r] || this.elements[r] === !0) this.buildItem(r), this.addPendingElement(i);
                                else {
                                    var a = e[r], s = a.getMatte(this.layers[t].tt);
                                    i.setMatte(s);
                                }
                            }
                        }
                    }, SVGRendererBase.prototype.checkPendingElements = function() {
                        for(; this.pendingElements.length;){
                            var t = this.pendingElements.pop();
                            if (t.checkParenting(), t.data.tt) for(var e = 0, i = this.elements.length; e < i;){
                                if (this.elements[e] === t) {
                                    var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, a = this.elements[r], s = a.getMatte(this.layers[e].tt);
                                    t.setMatte(s);
                                    break;
                                }
                                e += 1;
                            }
                        }
                    }, SVGRendererBase.prototype.renderFrame = function(t) {
                        if (!(this.renderedFrame === t || this.destroyed)) {
                            t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                            var e, i = this.layers.length;
                            for(this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                            if (this.globalData._mdf) for(e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
                        }
                    }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
                        var i = t.getBaseElement();
                        if (i) {
                            for(var r = 0, a; r < e;)this.elements[r] && this.elements[r] !== !0 && this.elements[r].getBaseElement() && (a = this.elements[r].getBaseElement()), r += 1;
                            a ? this.layerElement.insertBefore(i, a) : this.layerElement.appendChild(i);
                        }
                    }, SVGRendererBase.prototype.hide = function() {
                        this.layerElement.style.display = "none";
                    }, SVGRendererBase.prototype.show = function() {
                        this.layerElement.style.display = "block";
                    };
                    function ICompElement() {}
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableDOMElement
                    ], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
                    }, ICompElement.prototype.prepareFrame = function(t) {
                        if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                            else {
                                var e = this.tm.v;
                                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
                            }
                            var i, r = this.elements.length;
                            for(this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0));
                        }
                    }, ICompElement.prototype.renderInnerContent = function() {
                        var t, e = this.layers.length;
                        for(t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
                    }, ICompElement.prototype.setElements = function(t) {
                        this.elements = t;
                    }, ICompElement.prototype.getElements = function() {
                        return this.elements;
                    }, ICompElement.prototype.destroyElements = function() {
                        var t, e = this.layers.length;
                        for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy();
                    }, ICompElement.prototype.destroy = function() {
                        this.destroyElements(), this.destroyBaseElement();
                    };
                    function SVGCompElement(t, e, i) {
                        this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        };
                    }
                    extendPrototype([
                        SVGRendererBase,
                        ICompElement,
                        SVGBaseElement
                    ], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
                        return new SVGCompElement(t, this.globalData, this);
                    };
                    function SVGRenderer(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                        var i = "";
                        if (e && e.title) {
                            var r = createNS("title"), a = createElementID();
                            r.setAttribute("id", a), r.textContent = e.title, this.svgElement.appendChild(r), i += a;
                        }
                        if (e && e.description) {
                            var s = createNS("desc"), n = createElementID();
                            s.setAttribute("id", n), s.textContent = e.description, this.svgElement.appendChild(s), i += " " + n;
                        }
                        i && this.svgElement.setAttribute("aria-labelledby", i);
                        var h = createNS("defs");
                        this.svgElement.appendChild(h);
                        var o = createNS("g");
                        this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
                            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            contentVisibility: e && e.contentVisibility || "visible",
                            progressiveLoad: e && e.progressiveLoad || !1,
                            hideOnTransparent: !(e && e.hideOnTransparent === !1),
                            viewBoxOnly: e && e.viewBoxOnly || !1,
                            viewBoxSize: e && e.viewBoxSize || !1,
                            className: e && e.className || "",
                            id: e && e.id || "",
                            focusable: e && e.focusable,
                            filterSize: {
                                width: e && e.filterSize && e.filterSize.width || "100%",
                                height: e && e.filterSize && e.filterSize.height || "100%",
                                x: e && e.filterSize && e.filterSize.x || "0%",
                                y: e && e.filterSize && e.filterSize.y || "0%"
                            },
                            width: e && e.width,
                            height: e && e.height,
                            runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            defs: h,
                            renderConfig: this.renderConfig
                        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
                    }
                    extendPrototype([
                        SVGRendererBase
                    ], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
                        return new SVGCompElement(t, this.globalData, this);
                    };
                    function ShapeTransformManager() {
                        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
                    }
                    ShapeTransformManager.prototype = {
                        addTransformSequence: function(t) {
                            var e, i = t.length, r = "_";
                            for(e = 0; e < i; e += 1)r += t[e].transform.key + "_";
                            var a = this.sequences[r];
                            return a || (a = {
                                transforms: [].concat(t),
                                finalTransform: new Matrix,
                                _mdf: !1
                            }, this.sequences[r] = a, this.sequenceList.push(a)), a;
                        },
                        processSequence: function(t, e) {
                            for(var i = 0, r = t.transforms.length, a = e; i < r && !e;){
                                if (t.transforms[i].transform.mProps._mdf) {
                                    a = !0;
                                    break;
                                }
                                i += 1;
                            }
                            if (a) for(t.finalTransform.reset(), i = r - 1; i >= 0; i -= 1)t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
                            t._mdf = a;
                        },
                        processSequences: function(t) {
                            var e, i = this.sequenceList.length;
                            for(e = 0; e < i; e += 1)this.processSequence(this.sequenceList[e], t);
                        },
                        getNewKey: function() {
                            return this.transform_key_count += 1, "_" + this.transform_key_count;
                        }
                    };
                    var lumaLoader = function() {
                        var t = "__lottie_element_luma_buffer", e = null, i = null, r = null;
                        function a() {
                            var h = createNS("svg"), o = createNS("filter"), c = createNS("feColorMatrix");
                            return o.setAttribute("id", t), c.setAttribute("type", "matrix"), c.setAttribute("color-interpolation-filters", "sRGB"), c.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), o.appendChild(c), h.appendChild(o), h.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (h.style.display = "none"), h;
                        }
                        function s() {
                            e || (r = a(), document1.body.appendChild(r), e = createTag("canvas"), i = e.getContext("2d"), i.filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1));
                        }
                        function n(h) {
                            return e || s(), e.width = h.width, e.height = h.height, i.filter = "url(#" + t + ")", e;
                        }
                        return {
                            load: s,
                            get: n
                        };
                    };
                    function createCanvas(t, e) {
                        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
                        var i = createTag("canvas");
                        return i.width = t, i.height = e, i;
                    }
                    var assetLoader = function() {
                        return {
                            loadLumaCanvas: lumaLoader.load,
                            getLumaCanvas: lumaLoader.get,
                            createCanvas
                        };
                    }(), registeredEffects = {};
                    function CVEffects(t) {
                        var e, i = t.data.ef ? t.data.ef.length : 0;
                        this.filters = [];
                        var r;
                        for(e = 0; e < i; e += 1){
                            r = null;
                            var a = t.data.ef[e].ty;
                            if (registeredEffects[a]) {
                                var s = registeredEffects[a].effect;
                                r = new s(t.effectsManager.effectElements[e], t);
                            }
                            r && this.filters.push(r);
                        }
                        this.filters.length && t.addRenderableComponent(this);
                    }
                    CVEffects.prototype.renderFrame = function(t) {
                        var e, i = this.filters.length;
                        for(e = 0; e < i; e += 1)this.filters[e].renderFrame(t);
                    }, CVEffects.prototype.getEffects = function(t) {
                        var e, i = this.filters.length, r = [];
                        for(e = 0; e < i; e += 1)this.filters[e].type === t && r.push(this.filters[e]);
                        return r;
                    };
                    function registerEffect(t, e) {
                        registeredEffects[t] = {
                            effect: e
                        };
                    }
                    function CVMaskElement(t, e) {
                        this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                        var i, r = this.masksProperties.length, a = !1;
                        for(i = 0; i < r; i += 1)this.masksProperties[i].mode !== "n" && (a = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
                        this.hasMasks = a, a && this.element.addRenderableComponent(this);
                    }
                    CVMaskElement.prototype.renderFrame = function() {
                        if (this.hasMasks) {
                            var t = this.element.finalTransform.mat, e = this.element.canvasContext, i, r = this.masksProperties.length, a, s, n;
                            for(e.beginPath(), i = 0; i < r; i += 1)if (this.masksProperties[i].mode !== "n") {
                                this.masksProperties[i].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), n = this.viewData[i].v, a = t.applyToPointArray(n.v[0][0], n.v[0][1], 0), e.moveTo(a[0], a[1]);
                                var h, o = n._length;
                                for(h = 1; h < o; h += 1)s = t.applyToTriplePoints(n.o[h - 1], n.i[h], n.v[h]), e.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
                                s = t.applyToTriplePoints(n.o[h - 1], n.i[0], n.v[0]), e.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
                            }
                            this.element.globalData.renderer.save(!0), e.clip();
                        }
                    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                        this.element = null;
                    };
                    function CVBaseElement() {}
                    var operationsMap = {
                        1: "source-in",
                        2: "source-out",
                        3: "source-in",
                        4: "source-out"
                    };
                    CVBaseElement.prototype = {
                        createElements: function() {},
                        initRendererElement: function() {},
                        createContainerElements: function() {
                            if (this.data.tt >= 1) {
                                this.buffers = [];
                                var t = this.globalData.canvasContext, e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                                this.buffers.push(e);
                                var i = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                                this.buffers.push(i), this.data.tt >= 3 && !document1._isProxy && assetLoader.loadLumaCanvas();
                            }
                            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms();
                        },
                        createContent: function() {},
                        setBlendMode: function() {
                            var t = this.globalData;
                            if (t.blendMode !== this.data.bm) {
                                t.blendMode = this.data.bm;
                                var e = getBlendMode(this.data.bm);
                                t.canvasContext.globalCompositeOperation = e;
                            }
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                        },
                        hideElement: function() {
                            !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0);
                        },
                        showElement: function() {
                            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
                        },
                        clearCanvas: function(t) {
                            t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
                        },
                        prepareLayer: function() {
                            if (this.data.tt >= 1) {
                                var t = this.buffers[0], e = t.getContext("2d");
                                this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                            }
                        },
                        exitLayer: function() {
                            if (this.data.tt >= 1) {
                                var t = this.buffers[1], e = t.getContext("2d");
                                this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                                var i = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
                                if (i.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document1._isProxy) {
                                    var r = assetLoader.getLumaCanvas(this.canvasContext.canvas), a = r.getContext("2d");
                                    a.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0);
                                }
                                this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
                            }
                        },
                        renderFrame: function(t) {
                            if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !t)) {
                                this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                                var e = this.data.ty === 0;
                                this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
                            }
                        },
                        destroy: function() {
                            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
                        },
                        mHelper: new Matrix
                    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
                    function CVShapeData(t, e, i, r) {
                        this.styledShapes = [], this.tr = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ];
                        var a = 4;
                        e.ty === "rc" ? a = 5 : e.ty === "el" ? a = 6 : e.ty === "sr" && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
                        var s, n = i.length, h;
                        for(s = 0; s < n; s += 1)i[s].closed || (h = {
                            transforms: r.addTransformSequence(i[s].transforms),
                            trNodes: []
                        }, this.styledShapes.push(h), i[s].elements.push(h));
                    }
                    CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
                    function CVShapeElement(t, e, i) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        CVBaseElement,
                        IShapeElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableElement
                    ], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                        opacity: 1,
                        _opMdf: !1
                    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
                    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                        var i = {
                            data: t,
                            type: t.ty,
                            preTransforms: this.transformsManager.addTransformSequence(e),
                            transforms: [],
                            elements: [],
                            closed: t.hd === !0
                        }, r = {};
                        if (t.ty === "fl" || t.ty === "st" ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : (t.ty === "gf" || t.ty === "gs") && (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
                            k: 0
                        }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
                            k: 0
                        }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), t.ty === "st" || t.ty === "gs") {
                            if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], t.lj == 1 && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
                                var a = new DashProperty(this, t.d, "canvas", this);
                                r.d = a, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0]);
                            }
                        } else i.r = t.r === 2 ? "evenodd" : "nonzero";
                        return this.stylesList.push(i), r.style = i, r;
                    }, CVShapeElement.prototype.createGroupElement = function() {
                        var t = {
                            it: [],
                            prevViewData: []
                        };
                        return t;
                    }, CVShapeElement.prototype.createTransformElement = function(t) {
                        var e = {
                            transform: {
                                opacity: 1,
                                _opMdf: !1,
                                key: this.transformsManager.getNewKey(),
                                op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                                mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                            }
                        };
                        return e;
                    }, CVShapeElement.prototype.createShapeElement = function(t) {
                        var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                        return this.shapes.push(e), this.addShapeToModifiers(e), e;
                    }, CVShapeElement.prototype.reloadShapes = function() {
                        this._isFirstFrame = !0;
                        var t, e = this.itemsData.length;
                        for(t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t];
                        for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue();
                        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
                    }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                        var e, i = this.stylesList.length;
                        for(e = 0; e < i; e += 1)this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
                    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                        var t, e = this.stylesList.length;
                        for(t = 0; t < e; t += 1)this.stylesList[t].closed || this.stylesList[t].transforms.pop();
                    }, CVShapeElement.prototype.closeStyles = function(t) {
                        var e, i = t.length;
                        for(e = 0; e < i; e += 1)t[e].closed = !0;
                    }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, a) {
                        var s, n = t.length - 1, h, o, c = [], g = [], b, f, x, v = [].concat(a);
                        for(s = n; s >= 0; s -= 1){
                            if (b = this.searchProcessedElement(t[s]), b ? e[s] = i[b - 1] : t[s]._shouldRender = r, t[s].ty === "fl" || t[s].ty === "st" || t[s].ty === "gf" || t[s].ty === "gs") b ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], v), c.push(e[s].style);
                            else if (t[s].ty === "gr") {
                                if (!b) e[s] = this.createGroupElement(t[s]);
                                else for(o = e[s].it.length, h = 0; h < o; h += 1)e[s].prevViewData[h] = e[s].it[h];
                                this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, r, v);
                            } else t[s].ty === "tr" ? (b || (x = this.createTransformElement(t[s]), e[s] = x), v.push(e[s]), this.addTransformToStyleList(e[s])) : t[s].ty === "sh" || t[s].ty === "rc" || t[s].ty === "el" || t[s].ty === "sr" ? b || (e[s] = this.createShapeElement(t[s])) : t[s].ty === "tm" || t[s].ty === "rd" || t[s].ty === "pb" || t[s].ty === "zz" || t[s].ty === "op" ? (b ? (f = e[s], f.closed = !1) : (f = ShapeModifiers.getModifier(t[s].ty), f.init(this, t[s]), e[s] = f, this.shapeModifiers.push(f)), g.push(f)) : t[s].ty === "rp" && (b ? (f = e[s], f.closed = !0) : (f = ShapeModifiers.getModifier(t[s].ty), e[s] = f, f.init(this, t, s, e), this.shapeModifiers.push(f), r = !1), g.push(f));
                            this.addProcessedElement(t[s], s + 1);
                        }
                        for(this.removeTransformFromStyleList(), this.closeStyles(c), n = g.length, s = 0; s < n; s += 1)g[s].closed = !0;
                    }, CVShapeElement.prototype.renderInnerContent = function() {
                        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
                    }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                        (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0);
                    }, CVShapeElement.prototype.drawLayer = function() {
                        var t, e = this.stylesList.length, i, r, a, s, n, h, o = this.globalData.renderer, c = this.globalData.canvasContext, g, b;
                        for(t = 0; t < e; t += 1)if (b = this.stylesList[t], g = b.type, !((g === "st" || g === "gs") && b.wi === 0 || !b.data._shouldRender || b.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
                            for(o.save(), n = b.elements, g === "st" || g === "gs" ? (o.ctxStrokeStyle(g === "st" ? b.co : b.grd), o.ctxLineWidth(b.wi), o.ctxLineCap(b.lc), o.ctxLineJoin(b.lj), o.ctxMiterLimit(b.ml || 0)) : o.ctxFillStyle(g === "fl" ? b.co : b.grd), o.ctxOpacity(b.coOp), g !== "st" && g !== "gs" && c.beginPath(), o.ctxTransform(b.preTransforms.finalTransform.props), r = n.length, i = 0; i < r; i += 1){
                                for((g === "st" || g === "gs") && (c.beginPath(), b.da && (c.setLineDash(b.da), c.lineDashOffset = b.do)), h = n[i].trNodes, s = h.length, a = 0; a < s; a += 1)h[a].t === "m" ? c.moveTo(h[a].p[0], h[a].p[1]) : h[a].t === "c" ? c.bezierCurveTo(h[a].pts[0], h[a].pts[1], h[a].pts[2], h[a].pts[3], h[a].pts[4], h[a].pts[5]) : c.closePath();
                                (g === "st" || g === "gs") && (o.ctxStroke(), b.da && c.setLineDash(this.dashResetter));
                            }
                            g !== "st" && g !== "gs" && this.globalData.renderer.ctxFill(b.r), o.restore();
                        }
                    }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
                        var a, s = e.length - 1, n;
                        for(n = t, a = s; a >= 0; a -= 1)e[a].ty === "tr" ? (n = i[a].transform, this.renderShapeTransform(t, n)) : e[a].ty === "sh" || e[a].ty === "el" || e[a].ty === "rc" || e[a].ty === "sr" ? this.renderPath(e[a], i[a]) : e[a].ty === "fl" ? this.renderFill(e[a], i[a], n) : e[a].ty === "st" ? this.renderStroke(e[a], i[a], n) : e[a].ty === "gf" || e[a].ty === "gs" ? this.renderGradientFill(e[a], i[a], n) : e[a].ty === "gr" ? this.renderShape(n, e[a].it, i[a].it) : e[a].ty;
                        r && this.drawLayer();
                    }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                        if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                            var i = t.trNodes, r = e.paths, a, s, n, h = r._length;
                            i.length = 0;
                            var o = t.transforms.finalTransform;
                            for(n = 0; n < h; n += 1){
                                var c = r.shapes[n];
                                if (c && c.v) {
                                    for(s = c._length, a = 1; a < s; a += 1)a === 1 && i.push({
                                        t: "m",
                                        p: o.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                                    }), i.push({
                                        t: "c",
                                        pts: o.applyToTriplePoints(c.o[a - 1], c.i[a], c.v[a])
                                    });
                                    s === 1 && i.push({
                                        t: "m",
                                        p: o.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                                    }), c.c && s && (i.push({
                                        t: "c",
                                        pts: o.applyToTriplePoints(c.o[a - 1], c.i[0], c.v[0])
                                    }), i.push({
                                        t: "z"
                                    }));
                                }
                            }
                            t.trNodes = i;
                        }
                    }, CVShapeElement.prototype.renderPath = function(t, e) {
                        if (t.hd !== !0 && t._shouldRender) {
                            var i, r = e.styledShapes.length;
                            for(i = 0; i < r; i += 1)this.renderStyledShape(e.styledShapes[i], e.sh);
                        }
                    }, CVShapeElement.prototype.renderFill = function(t, e, i) {
                        var r = e.style;
                        (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity);
                    }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
                        var r = e.style, a;
                        if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
                            var s = this.globalData.canvasContext, n = e.s.v, h = e.e.v;
                            if (t.t === 1) a = s.createLinearGradient(n[0], n[1], h[0], h[1]);
                            else {
                                var o = Math.sqrt(Math.pow(n[0] - h[0], 2) + Math.pow(n[1] - h[1], 2)), c = Math.atan2(h[1] - n[1], h[0] - n[0]), g = e.h.v;
                                g >= 1 ? g = .99 : g <= -1 && (g = -0.99);
                                var b = o * g, f = Math.cos(c + e.a.v) * b + n[0], x = Math.sin(c + e.a.v) * b + n[1];
                                a = s.createRadialGradient(f, x, 0, n[0], n[1], o);
                            }
                            var v, d = t.g.p, A = e.g.c, m = 1;
                            for(v = 0; v < d; v += 1)e.g._hasOpacity && e.g._collapsable && (m = e.g.o[v * 2 + 1]), a.addColorStop(A[v * 4] / 100, "rgba(" + A[v * 4 + 1] + "," + A[v * 4 + 2] + "," + A[v * 4 + 3] + "," + m + ")");
                            r.grd = a;
                        }
                        r.coOp = e.o.v * i.opacity;
                    }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
                        var r = e.style, a = e.d;
                        a && (a._mdf || this._isFirstFrame) && (r.da = a.dashArray, r.do = a.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v);
                    }, CVShapeElement.prototype.destroy = function() {
                        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
                    };
                    function CVTextElement(t, e, i) {
                        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                            fill: "rgba(0,0,0,0)",
                            stroke: "rgba(0,0,0,0)",
                            sWidth: 0,
                            fValue: ""
                        }, this.initElement(t, e, i);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        CVBaseElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableElement,
                        ITextElement
                    ], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                        var t = this.textProperty.currentData;
                        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                        var e = !1;
                        t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                        var i = !1;
                        t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                        var r = this.globalData.fontManager.getFontByName(t.f), a, s, n = t.l, h = this.mHelper;
                        this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
                        var o, c, g, b, f, x, v, d, A, m, l = this.data.singleShape, p = t.tr * .001 * t.finalSize, u = 0, P = 0, S = !0, C = 0;
                        for(a = 0; a < s; a += 1){
                            o = this.globalData.fontManager.getCharData(t.finalText[a], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), c = o && o.data || {}, h.reset(), l && n[a].n && (u = -p, P += t.yOffset, P += S ? 1 : 0, S = !1), f = c.shapes ? c.shapes[0].it : [], v = f.length, h.scale(t.finalSize / 100, t.finalSize / 100), l && this.applyTextPropertiesToMatrix(t, h, n[a].line, u, P), A = createSizedArray(v - 1);
                            var M = 0;
                            for(x = 0; x < v; x += 1)if (f[x].ty === "sh") {
                                for(b = f[x].ks.k.i.length, d = f[x].ks.k, m = [], g = 1; g < b; g += 1)g === 1 && m.push(h.applyToX(d.v[0][0], d.v[0][1], 0), h.applyToY(d.v[0][0], d.v[0][1], 0)), m.push(h.applyToX(d.o[g - 1][0], d.o[g - 1][1], 0), h.applyToY(d.o[g - 1][0], d.o[g - 1][1], 0), h.applyToX(d.i[g][0], d.i[g][1], 0), h.applyToY(d.i[g][0], d.i[g][1], 0), h.applyToX(d.v[g][0], d.v[g][1], 0), h.applyToY(d.v[g][0], d.v[g][1], 0));
                                m.push(h.applyToX(d.o[g - 1][0], d.o[g - 1][1], 0), h.applyToY(d.o[g - 1][0], d.o[g - 1][1], 0), h.applyToX(d.i[0][0], d.i[0][1], 0), h.applyToY(d.i[0][0], d.i[0][1], 0), h.applyToX(d.v[0][0], d.v[0][1], 0), h.applyToY(d.v[0][0], d.v[0][1], 0)), A[M] = m, M += 1;
                            }
                            l && (u += n[a].l, u += p), this.textSpans[C] ? this.textSpans[C].elem = A : this.textSpans[C] = {
                                elem: A
                            }, C += 1;
                        }
                    }, CVTextElement.prototype.renderInnerContent = function() {
                        this.validateText();
                        var t = this.canvasContext;
                        t.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                        var e, i, r, a, s, n, h = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
                        i = o.length;
                        var c, g = null, b = null, f = null, x, v, d = this.globalData.renderer;
                        for(e = 0; e < i; e += 1)if (!o[e].n) {
                            if (c = h[e], c && (d.save(), d.ctxTransform(c.p), d.ctxOpacity(c.o)), this.fill) {
                                for(c && c.fc ? g !== c.fc && (d.ctxFillStyle(c.fc), g = c.fc) : g !== this.values.fill && (g = this.values.fill, d.ctxFillStyle(this.values.fill)), x = this.textSpans[e].elem, a = x.length, this.globalData.canvasContext.beginPath(), r = 0; r < a; r += 1)for(v = x[r], n = v.length, this.globalData.canvasContext.moveTo(v[0], v[1]), s = 2; s < n; s += 6)this.globalData.canvasContext.bezierCurveTo(v[s], v[s + 1], v[s + 2], v[s + 3], v[s + 4], v[s + 5]);
                                this.globalData.canvasContext.closePath(), d.ctxFill();
                            }
                            if (this.stroke) {
                                for(c && c.sw ? f !== c.sw && (f = c.sw, d.ctxLineWidth(c.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), c && c.sc ? b !== c.sc && (b = c.sc, d.ctxStrokeStyle(c.sc)) : b !== this.values.stroke && (b = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), x = this.textSpans[e].elem, a = x.length, this.globalData.canvasContext.beginPath(), r = 0; r < a; r += 1)for(v = x[r], n = v.length, this.globalData.canvasContext.moveTo(v[0], v[1]), s = 2; s < n; s += 6)this.globalData.canvasContext.bezierCurveTo(v[s], v[s + 1], v[s + 2], v[s + 3], v[s + 4], v[s + 5]);
                                this.globalData.canvasContext.closePath(), d.ctxStroke();
                            }
                            c && this.globalData.renderer.restore();
                        }
                    };
                    function CVImageElement(t, e, i) {
                        this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        CVBaseElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableElement
                    ], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                            var t = createTag("canvas");
                            t.width = this.assetData.w, t.height = this.assetData.h;
                            var e = t.getContext("2d"), i = this.img.width, r = this.img.height, a = i / r, s = this.assetData.w / this.assetData.h, n, h, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                            a > s && o === "xMidYMid slice" || a < s && o !== "xMidYMid slice" ? (h = r, n = h * s) : (n = i, h = n / s), e.drawImage(this.img, (i - n) / 2, (r - h) / 2, n, h, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
                        }
                    }, CVImageElement.prototype.renderInnerContent = function() {
                        this.canvasContext.drawImage(this.img, 0, 0);
                    }, CVImageElement.prototype.destroy = function() {
                        this.img = null;
                    };
                    function CVSolidElement(t, e, i) {
                        this.initElement(t, e, i);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        CVBaseElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableElement
                    ], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                        this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
                    };
                    function CanvasRendererBase() {}
                    extendPrototype([
                        BaseRenderer
                    ], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
                        return new CVShapeElement(t, this.globalData, this);
                    }, CanvasRendererBase.prototype.createText = function(t) {
                        return new CVTextElement(t, this.globalData, this);
                    }, CanvasRendererBase.prototype.createImage = function(t) {
                        return new CVImageElement(t, this.globalData, this);
                    }, CanvasRendererBase.prototype.createSolid = function(t) {
                        return new CVSolidElement(t, this.globalData, this);
                    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
                        t[0] === 1 && t[1] === 0 && t[4] === 0 && t[5] === 1 && t[12] === 0 && t[13] === 0 || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
                    }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
                        this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
                    }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
                        this.canvasContext.fillStyle = t;
                    }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
                        this.canvasContext.strokeStyle = t;
                    }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
                        this.canvasContext.lineWidth = t;
                    }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
                        this.canvasContext.lineCap = t;
                    }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
                        this.canvasContext.lineJoin = t;
                    }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
                        this.canvasContext.miterLimit = t;
                    }, CanvasRendererBase.prototype.ctxFill = function(t) {
                        this.canvasContext.fill(t);
                    }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, i, r) {
                        this.canvasContext.fillRect(t, e, i, r);
                    }, CanvasRendererBase.prototype.ctxStroke = function() {
                        this.canvasContext.stroke();
                    }, CanvasRendererBase.prototype.reset = function() {
                        if (!this.renderConfig.clearCanvas) {
                            this.canvasContext.restore();
                            return;
                        }
                        this.contextData.reset();
                    }, CanvasRendererBase.prototype.save = function() {
                        this.canvasContext.save();
                    }, CanvasRendererBase.prototype.restore = function(t) {
                        if (!this.renderConfig.clearCanvas) {
                            this.canvasContext.restore();
                            return;
                        }
                        t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t);
                    }, CanvasRendererBase.prototype.configAnimation = function(t) {
                        if (this.animationItem.wrapper) {
                            this.animationItem.container = createTag("canvas");
                            var e = this.animationItem.container.style;
                            e.width = "100%", e.height = "100%";
                            var i = "0px 0px 0px";
                            e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
                        } else this.canvasContext = this.renderConfig.context;
                        this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
                            w: t.w,
                            h: t.h,
                            sx: 0,
                            sy: 0,
                            tx: 0,
                            ty: 0
                        }, this.setupGlobalData(t, document1.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
                    }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
                        this.reset();
                        var i, r;
                        t ? (i = t, r = e, this.canvasContext.canvas.width = i, this.canvasContext.canvas.height = r) : (this.animationItem.wrapper && this.animationItem.container ? (i = this.animationItem.wrapper.offsetWidth, r = this.animationItem.wrapper.offsetHeight) : (i = this.canvasContext.canvas.width, r = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i * this.renderConfig.dpr, this.canvasContext.canvas.height = r * this.renderConfig.dpr);
                        var a, s;
                        if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                            var n = this.renderConfig.preserveAspectRatio.split(" "), h = n[1] || "meet", o = n[0] || "xMidYMid", c = o.substr(0, 4), g = o.substr(4);
                            a = i / r, s = this.transformCanvas.w / this.transformCanvas.h, s > a && h === "meet" || s < a && h === "slice" ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)), c === "xMid" && (s < a && h === "meet" || s > a && h === "slice") ? this.transformCanvas.tx = (i - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : c === "xMax" && (s < a && h === "meet" || s > a && h === "slice") ? this.transformCanvas.tx = (i - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, g === "YMid" && (s > a && h === "meet" || s < a && h === "slice") ? this.transformCanvas.ty = (r - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : g === "YMax" && (s > a && h === "meet" || s < a && h === "slice") ? this.transformCanvas.ty = (r - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
                        } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                        this.transformCanvas.props = [
                            this.transformCanvas.sx,
                            0,
                            0,
                            0,
                            0,
                            this.transformCanvas.sy,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            this.transformCanvas.tx,
                            this.transformCanvas.ty,
                            0,
                            1
                        ], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
                    }, CanvasRendererBase.prototype.destroy = function() {
                        this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
                        var t, e = this.layers ? this.layers.length : 0;
                        for(t = e - 1; t >= 0; t -= 1)this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
                    }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
                        if (!(this.renderedFrame === t && this.renderConfig.clearCanvas === !0 && !e || this.destroyed || t === -1)) {
                            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                            var i, r = this.layers.length;
                            for(this.completeLayers || this.checkLayers(t), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                            if (this.globalData._mdf) {
                                for(this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                                this.renderConfig.clearCanvas !== !0 && this.restore();
                            }
                        }
                    }, CanvasRendererBase.prototype.buildItem = function(t) {
                        var e = this.elements;
                        if (!(e[t] || this.layers[t].ty === 99)) {
                            var i = this.createItem(this.layers[t], this, this.globalData);
                            e[t] = i, i.initExpressions();
                        }
                    }, CanvasRendererBase.prototype.checkPendingElements = function() {
                        for(; this.pendingElements.length;){
                            var t = this.pendingElements.pop();
                            t.checkParenting();
                        }
                    }, CanvasRendererBase.prototype.hide = function() {
                        this.animationItem.container.style.display = "none";
                    }, CanvasRendererBase.prototype.show = function() {
                        this.animationItem.container.style.display = "block";
                    };
                    function CanvasContext() {
                        this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
                    }
                    function CVContextData() {
                        this.stack = [], this.cArrPos = 0, this.cTr = new Matrix;
                        var t, e = 15;
                        for(t = 0; t < e; t += 1){
                            var i = new CanvasContext;
                            this.stack[t] = i;
                        }
                        this._length = e, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
                    }
                    CVContextData.prototype.duplicate = function() {
                        var t = this._length * 2, e = 0;
                        for(e = this._length; e < t; e += 1)this.stack[e] = new CanvasContext;
                        this._length = t;
                    }, CVContextData.prototype.reset = function() {
                        this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
                    }, CVContextData.prototype.restore = function(t) {
                        this.cArrPos -= 1;
                        var e = this.stack[this.cArrPos], i = e.transform, r, a = this.cTr.props;
                        for(r = 0; r < 16; r += 1)a[r] = i[r];
                        if (t) {
                            this.nativeContext.restore();
                            var s = this.stack[this.cArrPos + 1];
                            this.appliedFillStyle = s.fillStyle, this.appliedStrokeStyle = s.strokeStyle, this.appliedLineWidth = s.lineWidth, this.appliedLineCap = s.lineCap, this.appliedLineJoin = s.lineJoin, this.appliedMiterLimit = s.miterLimit;
                        }
                        this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (t || e.opacity !== -1 && this.currentOpacity !== e.opacity) && (this.nativeContext.globalAlpha = e.opacity, this.currentOpacity = e.opacity), this.currentFillStyle = e.fillStyle, this.currentStrokeStyle = e.strokeStyle, this.currentLineWidth = e.lineWidth, this.currentLineCap = e.lineCap, this.currentLineJoin = e.lineJoin, this.currentMiterLimit = e.miterLimit;
                    }, CVContextData.prototype.save = function(t) {
                        t && this.nativeContext.save();
                        var e = this.cTr.props;
                        this._length <= this.cArrPos && this.duplicate();
                        var i = this.stack[this.cArrPos], r;
                        for(r = 0; r < 16; r += 1)i.transform[r] = e[r];
                        this.cArrPos += 1;
                        var a = this.stack[this.cArrPos];
                        a.opacity = i.opacity, a.fillStyle = i.fillStyle, a.strokeStyle = i.strokeStyle, a.lineWidth = i.lineWidth, a.lineCap = i.lineCap, a.lineJoin = i.lineJoin, a.miterLimit = i.miterLimit;
                    }, CVContextData.prototype.setOpacity = function(t) {
                        this.stack[this.cArrPos].opacity = t;
                    }, CVContextData.prototype.setContext = function(t) {
                        this.nativeContext = t;
                    }, CVContextData.prototype.fillStyle = function(t) {
                        this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t);
                    }, CVContextData.prototype.strokeStyle = function(t) {
                        this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t);
                    }, CVContextData.prototype.lineWidth = function(t) {
                        this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t);
                    }, CVContextData.prototype.lineCap = function(t) {
                        this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t);
                    }, CVContextData.prototype.lineJoin = function(t) {
                        this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t);
                    }, CVContextData.prototype.miterLimit = function(t) {
                        this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t);
                    }, CVContextData.prototype.transform = function(t) {
                        this.transformMat.cloneFromProps(t);
                        var e = this.cTr;
                        this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
                        var i = e.props;
                        this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]);
                    }, CVContextData.prototype.opacity = function(t) {
                        var e = this.stack[this.cArrPos].opacity;
                        e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e);
                    }, CVContextData.prototype.fill = function(t) {
                        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t);
                    }, CVContextData.prototype.fillRect = function(t, e, i, r) {
                        this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, i, r);
                    }, CVContextData.prototype.stroke = function() {
                        this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
                    };
                    function CVCompElement(t, e, i) {
                        this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        };
                    }
                    extendPrototype([
                        CanvasRendererBase,
                        ICompElement,
                        CVBaseElement
                    ], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                        var t = this.canvasContext;
                        t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip();
                        var e, i = this.layers.length;
                        for(e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
                    }, CVCompElement.prototype.destroy = function() {
                        var t, e = this.layers.length;
                        for(t = e - 1; t >= 0; t -= 1)this.elements[t] && this.elements[t].destroy();
                        this.layers = null, this.elements = null;
                    }, CVCompElement.prototype.createComp = function(t) {
                        return new CVCompElement(t, this.globalData, this);
                    };
                    function CanvasRenderer(t, e) {
                        this.animationItem = t, this.renderConfig = {
                            clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : !0,
                            context: e && e.context || null,
                            progressiveLoad: e && e.progressiveLoad || !1,
                            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            contentVisibility: e && e.contentVisibility || "visible",
                            className: e && e.className || "",
                            id: e && e.id || "",
                            runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
                        }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                            frameNum: -1,
                            _mdf: !1,
                            renderConfig: this.renderConfig,
                            currentGlobalAlpha: -1
                        }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
                    }
                    extendPrototype([
                        CanvasRendererBase
                    ], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
                        return new CVCompElement(t, this.globalData, this);
                    };
                    function HBaseElement() {}
                    HBaseElement.prototype = {
                        checkBlendMode: function() {},
                        initRendererElement: function() {
                            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
                        },
                        createContainerElements: function() {
                            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
                        },
                        renderElement: function() {
                            var t = this.transformedElement ? this.transformedElement.style : {};
                            if (this.finalTransform._matMdf) {
                                var e = this.finalTransform.mat.toCSS();
                                t.transform = e, t.webkitTransform = e;
                            }
                            this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v);
                        },
                        renderFrame: function() {
                            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                        },
                        destroy: function() {
                            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new MaskElement(this.data, this, this.globalData);
                        },
                        addEffects: function() {},
                        setMatte: function() {}
                    }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
                    function HSolidElement(t, e, i) {
                        this.initElement(t, e, i);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        HBaseElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableDOMElement
                    ], HSolidElement), HSolidElement.prototype.createContent = function() {
                        var t;
                        this.data.hasMask ? (t = createNS("rect"), t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (t = createTag("div"), t.style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
                    };
                    function HShapeElement(t, e, i) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
                            x: 999999,
                            y: -999999,
                            h: 0,
                            w: 0
                        };
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        HSolidElement,
                        SVGShapeElement,
                        HBaseElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableElement
                    ], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                        var t;
                        if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                        else {
                            t = createNS("svg");
                            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                            t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
                        }
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t;
                    }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                        var i, r = t.length;
                        for(i = 0; i < r; i += 1)e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
                        return e;
                    }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                        var i = t.sh.v, r = t.transformers, a, s = i._length, n, h, o, c;
                        if (!(s <= 1)) {
                            for(a = 0; a < s - 1; a += 1)n = this.getTransformedPoint(r, i.v[a]), h = this.getTransformedPoint(r, i.o[a]), o = this.getTransformedPoint(r, i.i[a + 1]), c = this.getTransformedPoint(r, i.v[a + 1]), this.checkBounds(n, h, o, c, e);
                            i.c && (n = this.getTransformedPoint(r, i.v[a]), h = this.getTransformedPoint(r, i.o[a]), o = this.getTransformedPoint(r, i.i[0]), c = this.getTransformedPoint(r, i.v[0]), this.checkBounds(n, h, o, c, e));
                        }
                    }, HShapeElement.prototype.checkBounds = function(t, e, i, r, a) {
                        this.getBoundsOfCurve(t, e, i, r);
                        var s = this.shapeBoundingBox;
                        a.x = bmMin(s.left, a.x), a.xMax = bmMax(s.right, a.xMax), a.y = bmMin(s.top, a.y), a.yMax = bmMax(s.bottom, a.yMax);
                    }, HShapeElement.prototype.shapeBoundingBox = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, HShapeElement.prototype.tempBoundingBox = {
                        x: 0,
                        xMax: 0,
                        y: 0,
                        yMax: 0,
                        width: 0,
                        height: 0
                    }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
                        for(var a = [
                            [
                                t[0],
                                r[0]
                            ],
                            [
                                t[1],
                                r[1]
                            ]
                        ], s, n, h, o, c, g, b, f = 0; f < 2; ++f)n = 6 * t[f] - 12 * e[f] + 6 * i[f], s = -3 * t[f] + 9 * e[f] - 9 * i[f] + 3 * r[f], h = 3 * e[f] - 3 * t[f], n |= 0, s |= 0, h |= 0, s === 0 && n === 0 || (s === 0 ? (o = -h / n, o > 0 && o < 1 && a[f].push(this.calculateF(o, t, e, i, r, f))) : (c = n * n - 4 * h * s, c >= 0 && (g = (-n + bmSqrt(c)) / (2 * s), g > 0 && g < 1 && a[f].push(this.calculateF(g, t, e, i, r, f)), b = (-n - bmSqrt(c)) / (2 * s), b > 0 && b < 1 && a[f].push(this.calculateF(b, t, e, i, r, f)))));
                        this.shapeBoundingBox.left = bmMin.apply(null, a[0]), this.shapeBoundingBox.top = bmMin.apply(null, a[1]), this.shapeBoundingBox.right = bmMax.apply(null, a[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, a[1]);
                    }, HShapeElement.prototype.calculateF = function(t, e, i, r, a, s) {
                        return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * i[s] + 3 * (1 - t) * bmPow(t, 2) * r[s] + bmPow(t, 3) * a[s];
                    }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                        var i, r = t.length;
                        for(i = 0; i < r; i += 1)t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e);
                    }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
                        var i = 0;
                        if (t.keyframes) {
                            for(var r = 0; r < t.keyframes.length; r += 1){
                                var a = t.keyframes[r].s;
                                a > i && (i = a);
                            }
                            i *= t.mult;
                        } else i = t.v * t.mult;
                        e.x -= i, e.xMax += i, e.y -= i, e.yMax += i;
                    }, HShapeElement.prototype.currentBoxContains = function(t) {
                        return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
                    }, HShapeElement.prototype.renderInnerContent = function() {
                        if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var t = this.tempBoundingBox, e = 999999;
                            if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                            var i = !1;
                            if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                                this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                                var r = this.shapeCont.style, a = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                r.transform = a, r.webkitTransform = a;
                            }
                        }
                    };
                    function HTextElement(t, e, i) {
                        this.textSpans = [], this.textPaths = [], this.currentBBox = {
                            x: 999999,
                            y: -999999,
                            h: 0,
                            w: 0
                        }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        HBaseElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableDOMElement,
                        ITextElement
                    ], HTextElement), HTextElement.prototype.createContent = function() {
                        if (this.isMasked = this.checkMasks(), this.isMasked) {
                            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                            var t = createNS("g");
                            this.maskedElement.appendChild(t), this.innerElem = t;
                        } else this.renderType = "html", this.innerElem = this.layerElement;
                        this.checkParenting();
                    }, HTextElement.prototype.buildNewText = function() {
                        var t = this.textProperty.currentData;
                        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                        var e = this.innerElem.style, i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                        e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                        var r = this.globalData.fontManager.getFontByName(t.f);
                        if (!this.globalData.fontManager.chars) {
                            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", r.fClass) this.innerElem.className = r.fClass;
                            else {
                                e.fontFamily = r.fFamily;
                                var a = t.fWeight, s = t.fStyle;
                                e.fontStyle = s, e.fontWeight = a;
                            }
                        }
                        var n, h, o = t.l;
                        h = o.length;
                        var c, g, b, f = this.mHelper, x, v = "", d = 0;
                        for(n = 0; n < h; n += 1){
                            if (this.globalData.fontManager.chars ? (this.textPaths[d] ? c = this.textPaths[d] : (c = createNS("path"), c.setAttribute("stroke-linecap", lineCapEnum[1]), c.setAttribute("stroke-linejoin", lineJoinEnum[2]), c.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? (g = this.textSpans[d], b = g.children[0]) : (g = createTag("div"), g.style.lineHeight = 0, b = createNS("svg"), b.appendChild(c), styleDiv(g)))) : this.isMasked ? c = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (g = this.textSpans[d], c = this.textPaths[d]) : (g = createTag("span"), styleDiv(g), c = createTag("span"), styleDiv(c), g.appendChild(c)), this.globalData.fontManager.chars) {
                                var A = this.globalData.fontManager.getCharData(t.finalText[n], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), m;
                                if (A ? m = A.data : m = null, f.reset(), m && m.shapes && m.shapes.length && (x = m.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), v = this.createPathShape(f, x), c.setAttribute("d", v)), this.isMasked) this.innerElem.appendChild(c);
                                else {
                                    if (this.innerElem.appendChild(g), m && m.shapes) {
                                        document1.body.appendChild(b);
                                        var l = b.getBBox();
                                        b.setAttribute("width", l.width + 2), b.setAttribute("height", l.height + 2), b.setAttribute("viewBox", l.x - 1 + " " + (l.y - 1) + " " + (l.width + 2) + " " + (l.height + 2));
                                        var p = b.style, u = "translate(" + (l.x - 1) + "px," + (l.y - 1) + "px)";
                                        p.transform = u, p.webkitTransform = u, o[n].yOffset = l.y - 1;
                                    } else b.setAttribute("width", 1), b.setAttribute("height", 1);
                                    g.appendChild(b);
                                }
                            } else if (c.textContent = o[n].val, c.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(c);
                            else {
                                this.innerElem.appendChild(g);
                                var P = c.style, S = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                                P.transform = S, P.webkitTransform = S;
                            }
                            this.isMasked ? this.textSpans[d] = c : this.textSpans[d] = g, this.textSpans[d].style.display = "block", this.textPaths[d] = c, d += 1;
                        }
                        for(; d < this.textSpans.length;)this.textSpans[d].style.display = "none", d += 1;
                    }, HTextElement.prototype.renderInnerContent = function() {
                        this.validateText();
                        var t;
                        if (this.data.singleShape) {
                            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                            if (this.isMasked && this.finalTransform._matMdf) {
                                this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                                var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                                t.transform = e, t.webkitTransform = e;
                            }
                        }
                        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
                            var i, r, a = 0, s = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
                            r = n.length;
                            var h, o, c;
                            for(i = 0; i < r; i += 1)n[i].n ? a += 1 : (o = this.textSpans[i], c = this.textPaths[i], h = s[a], a += 1, h._mdf.m && (this.isMasked ? o.setAttribute("transform", h.m) : (o.style.webkitTransform = h.m, o.style.transform = h.m)), o.style.opacity = h.o, h.sw && h._mdf.sw && c.setAttribute("stroke-width", h.sw), h.sc && h._mdf.sc && c.setAttribute("stroke", h.sc), h.fc && h._mdf.fc && (c.setAttribute("fill", h.fc), c.style.color = h.fc));
                            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                                var g = this.innerElem.getBBox();
                                this.currentBBox.w !== g.width && (this.currentBBox.w = g.width, this.svgElement.setAttribute("width", g.width)), this.currentBBox.h !== g.height && (this.currentBBox.h = g.height, this.svgElement.setAttribute("height", g.height));
                                var b = 1;
                                if (this.currentBBox.w !== g.width + b * 2 || this.currentBBox.h !== g.height + b * 2 || this.currentBBox.x !== g.x - b || this.currentBBox.y !== g.y - b) {
                                    this.currentBBox.w = g.width + b * 2, this.currentBBox.h = g.height + b * 2, this.currentBBox.x = g.x - b, this.currentBBox.y = g.y - b, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                                    var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                    t.transform = f, t.webkitTransform = f;
                                }
                            }
                        }
                    };
                    function HCameraElement(t, e, i) {
                        this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
                        var r = PropertyFactory.getProp;
                        if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                            var a, s = t.ks.or.k.length;
                            for(a = 0; a < s; a += 1)t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null;
                        }
                        this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                            mProp: this
                        };
                    }
                    extendPrototype([
                        BaseElement,
                        FrameElement,
                        HierarchyElement
                    ], HCameraElement), HCameraElement.prototype.setup = function() {
                        var t, e = this.comp.threeDElements.length, i, r, a;
                        for(t = 0; t < e; t += 1)if (i = this.comp.threeDElements[t], i.type === "3d") {
                            r = i.perspectiveElem.style, a = i.container.style;
                            var s = this.pe.v + "px", n = "0px 0px 0px", h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            r.perspective = s, r.webkitPerspective = s, a.transformOrigin = n, a.mozTransformOrigin = n, a.webkitTransformOrigin = n, r.transform = h, r.webkitTransform = h;
                        }
                    }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                        var t = this._isFirstFrame, e, i;
                        if (this.hierarchy) for(i = this.hierarchy.length, e = 0; e < i; e += 1)t = this.hierarchy[e].finalTransform.mProp._mdf || t;
                        if (t || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                            if (this.mat.reset(), this.hierarchy) for(i = this.hierarchy.length - 1, e = i; e >= 0; e -= 1){
                                var r = this.hierarchy[e].finalTransform.mProp;
                                this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
                            }
                            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                                var a;
                                this.p ? a = [
                                    this.p.v[0] - this.a.v[0],
                                    this.p.v[1] - this.a.v[1],
                                    this.p.v[2] - this.a.v[2]
                                ] : a = [
                                    this.px.v - this.a.v[0],
                                    this.py.v - this.a.v[1],
                                    this.pz.v - this.a.v[2]
                                ];
                                var s = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)), n = [
                                    a[0] / s,
                                    a[1] / s,
                                    a[2] / s
                                ], h = Math.sqrt(n[2] * n[2] + n[0] * n[0]), o = Math.atan2(n[1], h), c = Math.atan2(n[0], -n[2]);
                                this.mat.rotateY(c).rotateX(-o);
                            }
                            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                            var g = !this._prevMat.equals(this.mat);
                            if ((g || this.pe._mdf) && this.comp.threeDElements) {
                                i = this.comp.threeDElements.length;
                                var b, f, x;
                                for(e = 0; e < i; e += 1)if (b = this.comp.threeDElements[e], b.type === "3d") {
                                    if (g) {
                                        var v = this.mat.toCSS();
                                        x = b.container.style, x.transform = v, x.webkitTransform = v;
                                    }
                                    this.pe._mdf && (f = b.perspectiveElem.style, f.perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px");
                                }
                                this.mat.clone(this._prevMat);
                            }
                        }
                        this._isFirstFrame = !1;
                    }, HCameraElement.prototype.prepareFrame = function(t) {
                        this.prepareProperties(t, !0);
                    }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                        return null;
                    };
                    function HImageElement(t, e, i) {
                        this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i);
                    }
                    extendPrototype([
                        BaseElement,
                        TransformElement,
                        HBaseElement,
                        HSolidElement,
                        HierarchyElement,
                        FrameElement,
                        RenderableElement
                    ], HImageElement), HImageElement.prototype.createContent = function() {
                        var t = this.globalData.getAssetsPath(this.assetData), e = new Image;
                        this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
                    };
                    function HybridRendererBase(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                            className: e && e.className || "",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            hideOnTransparent: !(e && e.hideOnTransparent === !1),
                            filterSize: {
                                width: e && e.filterSize && e.filterSize.width || "400%",
                                height: e && e.filterSize && e.filterSize.height || "400%",
                                x: e && e.filterSize && e.filterSize.x || "-100%",
                                y: e && e.filterSize && e.filterSize.y || "-100%"
                            }
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            renderConfig: this.renderConfig
                        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
                    }
                    extendPrototype([
                        BaseRenderer
                    ], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                        for(; this.pendingElements.length;){
                            var t = this.pendingElements.pop();
                            t.checkParenting();
                        }
                    }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
                        var i = t.getBaseElement();
                        if (i) {
                            var r = this.layers[e];
                            if (!r.ddd || !this.supports3d) {
                                if (this.threeDElements) this.addTo3dContainer(i, e);
                                else {
                                    for(var a = 0, s, n, h; a < e;)this.elements[a] && this.elements[a] !== !0 && this.elements[a].getBaseElement && (n = this.elements[a], h = this.layers[a].ddd ? this.getThreeDContainerByPos(a) : n.getBaseElement(), s = h || s), a += 1;
                                    s ? (!r.ddd || !this.supports3d) && this.layerElement.insertBefore(i, s) : (!r.ddd || !this.supports3d) && this.layerElement.appendChild(i);
                                }
                            } else this.addTo3dContainer(i, e);
                        }
                    }, HybridRendererBase.prototype.createShape = function(t) {
                        return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
                    }, HybridRendererBase.prototype.createText = function(t) {
                        return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this);
                    }, HybridRendererBase.prototype.createCamera = function(t) {
                        return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
                    }, HybridRendererBase.prototype.createImage = function(t) {
                        return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
                    }, HybridRendererBase.prototype.createSolid = function(t) {
                        return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
                    }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
                        for(var e = 0, i = this.threeDElements.length; e < i;){
                            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                            e += 1;
                        }
                        return null;
                    }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
                        var i = createTag("div"), r, a;
                        styleDiv(i);
                        var s = createTag("div");
                        if (styleDiv(s), e === "3d") {
                            r = i.style, r.width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
                            var n = "50% 50%";
                            r.webkitTransformOrigin = n, r.mozTransformOrigin = n, r.transformOrigin = n, a = s.style;
                            var h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            a.transform = h, a.webkitTransform = h;
                        }
                        i.appendChild(s);
                        var o = {
                            container: s,
                            perspectiveElem: i,
                            startPos: t,
                            endPos: t,
                            type: e
                        };
                        return this.threeDElements.push(o), o;
                    }, HybridRendererBase.prototype.build3dContainers = function() {
                        var t, e = this.layers.length, i, r = "";
                        for(t = 0; t < e; t += 1)this.layers[t].ddd && this.layers[t].ty !== 3 ? (r !== "3d" && (r = "3d", i = this.createThreeDContainer(t, "3d")), i.endPos = Math.max(i.endPos, t)) : (r !== "2d" && (r = "2d", i = this.createThreeDContainer(t, "2d")), i.endPos = Math.max(i.endPos, t));
                        for(e = this.threeDElements.length, t = e - 1; t >= 0; t -= 1)this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
                    }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
                        for(var i = 0, r = this.threeDElements.length; i < r;){
                            if (e <= this.threeDElements[i].endPos) {
                                for(var a = this.threeDElements[i].startPos, s; a < e;)this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
                                s ? this.threeDElements[i].container.insertBefore(t, s) : this.threeDElements[i].container.appendChild(t);
                                break;
                            }
                            i += 1;
                        }
                    }, HybridRendererBase.prototype.configAnimation = function(t) {
                        var e = createTag("div"), i = this.animationItem.wrapper, r = e.style;
                        r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), r.overflow = "hidden";
                        var a = createNS("svg");
                        a.setAttribute("width", "1"), a.setAttribute("height", "1"), styleDiv(a), this.resizerElem.appendChild(a);
                        var s = createNS("defs");
                        a.appendChild(s), this.data = t, this.setupGlobalData(t, a), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
                    }, HybridRendererBase.prototype.destroy = function() {
                        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                        var t, e = this.layers ? this.layers.length : 0;
                        for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
                    }, HybridRendererBase.prototype.updateContainerSize = function() {
                        var t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, i = t / e, r = this.globalData.compSize.w / this.globalData.compSize.h, a, s, n, h;
                        r > i ? (a = t / this.globalData.compSize.w, s = t / this.globalData.compSize.w, n = 0, h = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (a = e / this.globalData.compSize.h, s = e / this.globalData.compSize.h, n = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2, h = 0);
                        var o = this.resizerElem.style;
                        o.webkitTransform = "matrix3d(" + a + ",0,0,0,0," + s + ",0,0,0,0,1,0," + n + "," + h + ",0,1)", o.transform = o.webkitTransform;
                    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                        this.resizerElem.style.display = "none";
                    }, HybridRendererBase.prototype.show = function() {
                        this.resizerElem.style.display = "block";
                    }, HybridRendererBase.prototype.initItems = function() {
                        if (this.buildAllItems(), this.camera) this.camera.setup();
                        else {
                            var t = this.globalData.compSize.w, e = this.globalData.compSize.h, i, r = this.threeDElements.length;
                            for(i = 0; i < r; i += 1){
                                var a = this.threeDElements[i].perspectiveElem.style;
                                a.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", a.perspective = a.webkitPerspective;
                            }
                        }
                    }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
                        var e, i = t.length, r = createTag("div");
                        for(e = 0; e < i; e += 1)if (t[e].xt) {
                            var a = this.createComp(t[e], r, this.globalData.comp, null);
                            a.initExpressions(), this.globalData.projectInterface.registerComposition(a);
                        }
                    };
                    function HCompElement(t, e, i) {
                        this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        };
                    }
                    extendPrototype([
                        HybridRendererBase,
                        ICompElement,
                        HBaseElement
                    ], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                        this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
                    }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                        for(var i = 0, r; i < e;)this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
                        r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t);
                    }, HCompElement.prototype.createComp = function(t) {
                        return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
                    };
                    function HybridRenderer(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                            className: e && e.className || "",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            hideOnTransparent: !(e && e.hideOnTransparent === !1),
                            filterSize: {
                                width: e && e.filterSize && e.filterSize.width || "400%",
                                height: e && e.filterSize && e.filterSize.height || "400%",
                                x: e && e.filterSize && e.filterSize.x || "-100%",
                                y: e && e.filterSize && e.filterSize.y || "-100%"
                            },
                            runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            renderConfig: this.renderConfig
                        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
                    }
                    extendPrototype([
                        HybridRendererBase
                    ], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
                        return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
                    };
                    var CompExpressionInterface = function() {
                        return function(t) {
                            function e(i) {
                                for(var r = 0, a = t.layers.length; r < a;){
                                    if (t.layers[r].nm === i || t.layers[r].ind === i) return t.elements[r].layerInterface;
                                    r += 1;
                                }
                                return null;
                            }
                            return Object.defineProperty(e, "_name", {
                                value: t.data.nm
                            }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e;
                        };
                    }();
                    function _typeof$2(t) {
                        "@babel/helpers - typeof";
                        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(e) {
                            return typeof e;
                        } : _typeof$2 = function(e) {
                            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, _typeof$2(t);
                    }
                    function seedRandom(t, e) {
                        var i = this, r = 256, a = 6, s = 52, n = "random", h = e.pow(r, a), o = e.pow(2, s), c = o * 2, g = r - 1;
                        function f(p, u, P) {
                            var S = [];
                            u = u === !0 ? {
                                entropy: !0
                            } : u || {};
                            var C = A(d(u.entropy ? [
                                p,
                                l(t)
                            ] : p === null ? m() : p, 3), S), M = new x(S), w = function() {
                                for(var F = M.g(a), V = h, I = 0; F < o;)F = (F + I) * r, V *= r, I = M.g(1);
                                for(; F >= c;)F /= 2, V /= 2, I >>>= 1;
                                return (F + I) / V;
                            };
                            return w.int32 = function() {
                                return M.g(4) | 0;
                            }, w.quick = function() {
                                return M.g(4) / 4294967296;
                            }, w.double = w, A(l(M.S), t), (u.pass || P || function(F, V, I, L) {
                                return L && (L.S && v(L, M), F.state = function() {
                                    return v(M, {});
                                }), I ? (e[n] = F, V) : F;
                            })(w, C, "global" in u ? u.global : this == e, u.state);
                        }
                        e["seed" + n] = f;
                        function x(p) {
                            var u, P = p.length, S = this, C = 0, M = S.i = S.j = 0, w = S.S = [];
                            for(P || (p = [
                                P++
                            ]); C < r;)w[C] = C++;
                            for(C = 0; C < r; C++)w[C] = w[M = g & M + p[C % P] + (u = w[C])], w[M] = u;
                            S.g = function(F) {
                                for(var V, I = 0, L = S.i, B = S.j, R = S.S; F--;)V = R[L = g & L + 1], I = I * r + R[g & (R[L] = R[B = g & B + V]) + (R[B] = V)];
                                return S.i = L, S.j = B, I;
                            };
                        }
                        function v(p, u) {
                            return u.i = p.i, u.j = p.j, u.S = p.S.slice(), u;
                        }
                        function d(p, u) {
                            var P = [], S = _typeof$2(p), C;
                            if (u && S == "object") for(C in p)try {
                                P.push(d(p[C], u - 1));
                            } catch  {}
                            return P.length ? P : S == "string" ? p : p + "\0";
                        }
                        function A(p, u) {
                            for(var P = p + "", S, C = 0; C < P.length;)u[g & C] = g & (S ^= u[g & C] * 19) + P.charCodeAt(C++);
                            return l(u);
                        }
                        function m() {
                            try {
                                var p = new Uint8Array(r);
                                return (i.crypto || i.msCrypto).getRandomValues(p), l(p);
                            } catch  {
                                var u = i.navigator, P = u && u.plugins;
                                return [
                                    +new Date,
                                    i,
                                    P,
                                    i.screen,
                                    l(t)
                                ];
                            }
                        }
                        function l(p) {
                            return String.fromCharCode.apply(0, p);
                        }
                        A(e.random(), t);
                    }
                    function initialize$2(t) {
                        seedRandom([], t);
                    }
                    var propTypes = {
                        SHAPE: "shape"
                    };
                    function _typeof$1(t) {
                        "@babel/helpers - typeof";
                        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(e) {
                            return typeof e;
                        } : _typeof$1 = function(e) {
                            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, _typeof$1(t);
                    }
                    var ExpressionManager = function() {
                        var ob = {}, Math1 = BMMath, window = null, document1 = null, XMLHttpRequest1 = null, fetch1 = null, frames = null, _lottieGlobal = {};
                        initialize$2(BMMath);
                        function resetFrame() {
                            _lottieGlobal = {};
                        }
                        function $bm_isInstanceOfArray(t) {
                            return t.constructor === Array || t.constructor === Float32Array;
                        }
                        function isNumerable(t, e) {
                            return t === "number" || e instanceof Number || t === "boolean" || t === "string";
                        }
                        function $bm_neg(t) {
                            var e = _typeof$1(t);
                            if (e === "number" || t instanceof Number || e === "boolean") return -t;
                            if ($bm_isInstanceOfArray(t)) {
                                var i, r = t.length, a = [];
                                for(i = 0; i < r; i += 1)a[i] = -t[i];
                                return a;
                            }
                            return t.propType ? t.v : -t;
                        }
                        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
                        function sum(t, e) {
                            var i = _typeof$1(t), r = _typeof$1(e);
                            if (isNumerable(i, t) && isNumerable(r, e) || i === "string" || r === "string") return t + e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return t = t.slice(0), t[0] += e, t;
                            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t + e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for(var a = 0, s = t.length, n = e.length, h = []; a < s || a < n;)(typeof t[a] == "number" || t[a] instanceof Number) && (typeof e[a] == "number" || e[a] instanceof Number) ? h[a] = t[a] + e[a] : h[a] = e[a] === void 0 ? t[a] : t[a] || e[a], a += 1;
                                return h;
                            }
                            return 0;
                        }
                        var add = sum;
                        function sub(t, e) {
                            var i = _typeof$1(t), r = _typeof$1(e);
                            if (isNumerable(i, t) && isNumerable(r, e)) return i === "string" && (t = parseInt(t, 10)), r === "string" && (e = parseInt(e, 10)), t - e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return t = t.slice(0), t[0] -= e, t;
                            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t - e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for(var a = 0, s = t.length, n = e.length, h = []; a < s || a < n;)(typeof t[a] == "number" || t[a] instanceof Number) && (typeof e[a] == "number" || e[a] instanceof Number) ? h[a] = t[a] - e[a] : h[a] = e[a] === void 0 ? t[a] : t[a] || e[a], a += 1;
                                return h;
                            }
                            return 0;
                        }
                        function mul(t, e) {
                            var i = _typeof$1(t), r = _typeof$1(e), a;
                            if (isNumerable(i, t) && isNumerable(r, e)) return t * e;
                            var s, n;
                            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) {
                                for(n = t.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1)a[s] = t[s] * e;
                                return a;
                            }
                            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) {
                                for(n = e.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1)a[s] = t * e[s];
                                return a;
                            }
                            return 0;
                        }
                        function div(t, e) {
                            var i = _typeof$1(t), r = _typeof$1(e), a;
                            if (isNumerable(i, t) && isNumerable(r, e)) return t / e;
                            var s, n;
                            if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) {
                                for(n = t.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1)a[s] = t[s] / e;
                                return a;
                            }
                            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) {
                                for(n = e.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1)a[s] = t / e[s];
                                return a;
                            }
                            return 0;
                        }
                        function mod(t, e) {
                            return typeof t == "string" && (t = parseInt(t, 10)), typeof e == "string" && (e = parseInt(e, 10)), t % e;
                        }
                        var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
                        function clamp(t, e, i) {
                            if (e > i) {
                                var r = i;
                                i = e, e = r;
                            }
                            return Math1.min(Math1.max(t, e), i);
                        }
                        function radiansToDegrees(t) {
                            return t / degToRads;
                        }
                        var radians_to_degrees = radiansToDegrees;
                        function degreesToRadians(t) {
                            return t * degToRads;
                        }
                        var degrees_to_radians = radiansToDegrees, helperLengthArray = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ];
                        function length(t, e) {
                            if (typeof t == "number" || t instanceof Number) return e = e || 0, Math1.abs(t - e);
                            e || (e = helperLengthArray);
                            var i, r = Math1.min(t.length, e.length), a = 0;
                            for(i = 0; i < r; i += 1)a += Math1.pow(e[i] - t[i], 2);
                            return Math1.sqrt(a);
                        }
                        function normalize(t) {
                            return div(t, length(t));
                        }
                        function rgbToHsl(t) {
                            var e = t[0], i = t[1], r = t[2], a = Math1.max(e, i, r), s = Math1.min(e, i, r), n, h, o = (a + s) / 2;
                            if (a === s) n = 0, h = 0;
                            else {
                                var c = a - s;
                                switch(h = o > .5 ? c / (2 - a - s) : c / (a + s), a){
                                    case e:
                                        n = (i - r) / c + (i < r ? 6 : 0);
                                        break;
                                    case i:
                                        n = (r - e) / c + 2;
                                        break;
                                    case r:
                                        n = (e - i) / c + 4;
                                        break;
                                }
                                n /= 6;
                            }
                            return [
                                n,
                                h,
                                o,
                                t[3]
                            ];
                        }
                        function hue2rgb(t, e, i) {
                            return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + (e - t) * 6 * i : i < 0.5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
                        }
                        function hslToRgb(t) {
                            var e = t[0], i = t[1], r = t[2], a, s, n;
                            if (i === 0) a = r, n = r, s = r;
                            else {
                                var h = r < .5 ? r * (1 + i) : r + i - r * i, o = 2 * r - h;
                                a = hue2rgb(o, h, e + 1 / 3), s = hue2rgb(o, h, e), n = hue2rgb(o, h, e - 1 / 3);
                            }
                            return [
                                a,
                                s,
                                n,
                                t[3]
                            ];
                        }
                        function linear(t, e, i, r, a) {
                            if ((r === void 0 || a === void 0) && (r = e, a = i, e = 0, i = 1), i < e) {
                                var s = i;
                                i = e, e = s;
                            }
                            if (t <= e) return r;
                            if (t >= i) return a;
                            var n = i === e ? 0 : (t - e) / (i - e);
                            if (!r.length) return r + (a - r) * n;
                            var h, o = r.length, c = createTypedArray("float32", o);
                            for(h = 0; h < o; h += 1)c[h] = r[h] + (a[h] - r[h]) * n;
                            return c;
                        }
                        function random(t, e) {
                            if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                                var i, r = e.length;
                                t || (t = createTypedArray("float32", r));
                                var a = createTypedArray("float32", r), s = BMMath.random();
                                for(i = 0; i < r; i += 1)a[i] = t[i] + s * (e[i] - t[i]);
                                return a;
                            }
                            t === void 0 && (t = 0);
                            var n = BMMath.random();
                            return t + n * (e - t);
                        }
                        function createPath(t, e, i, r) {
                            var a, s = t.length, n = shapePool.newElement();
                            n.setPathData(!!r, s);
                            var h = [
                                0,
                                0
                            ], o, c;
                            for(a = 0; a < s; a += 1)o = e && e[a] ? e[a] : h, c = i && i[a] ? i[a] : h, n.setTripleAt(t[a][0], t[a][1], c[0] + t[a][0], c[1] + t[a][1], o[0] + t[a][0], o[1] + t[a][1], a, !0);
                            return n;
                        }
                        function initiateExpression(elem, data, property) {
                            function noOp(t) {
                                return t;
                            }
                            if (!elem.globalData.renderConfig.runExpressions) return noOp;
                            var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
                            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                get: function() {
                                    return thisProperty.v;
                                }
                            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                            var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = (function t(e, i) {
                                var r, a, s = this.pv.length ? this.pv.length : 1, n = createTypedArray("float32", s);
                                e = 5;
                                var h = Math1.floor(time * e);
                                for(r = 0, a = 0; r < h;){
                                    for(a = 0; a < s; a += 1)n[a] += -i + i * 2 * BMMath.random();
                                    r += 1;
                                }
                                var o = time * e, c = o - Math1.floor(o), g = createTypedArray("float32", s);
                                if (s > 1) {
                                    for(a = 0; a < s; a += 1)g[a] = this.pv[a] + n[a] + (-i + i * 2 * BMMath.random()) * c;
                                    return g;
                                }
                                return this.pv + n[0] + (-i + i * 2 * BMMath.random()) * c;
                            }).bind(this);
                            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));
                            function loopInDuration(t, e) {
                                return loopIn(t, e, !0);
                            }
                            function loopOutDuration(t, e) {
                                return loopOut(t, e, !0);
                            }
                            this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
                            function lookAt(t, e) {
                                var i = [
                                    e[0] - t[0],
                                    e[1] - t[1],
                                    e[2] - t[2]
                                ], r = Math1.atan2(i[0], Math1.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads, a = -Math1.atan2(i[1], i[2]) / degToRads;
                                return [
                                    a,
                                    r,
                                    0
                                ];
                            }
                            function easeOut(t, e, i, r, a) {
                                return applyEase(easeOutBez, t, e, i, r, a);
                            }
                            function easeIn(t, e, i, r, a) {
                                return applyEase(easeInBez, t, e, i, r, a);
                            }
                            function ease(t, e, i, r, a) {
                                return applyEase(easeInOutBez, t, e, i, r, a);
                            }
                            function applyEase(t, e, i, r, a, s) {
                                a === void 0 ? (a = i, s = r) : e = (e - i) / (r - i), e > 1 ? e = 1 : e < 0 && (e = 0);
                                var n = t(e);
                                if ($bm_isInstanceOfArray(a)) {
                                    var h, o = a.length, c = createTypedArray("float32", o);
                                    for(h = 0; h < o; h += 1)c[h] = (s[h] - a[h]) * n + a[h];
                                    return c;
                                }
                                return (s - a) * n + a;
                            }
                            function nearestKey(t) {
                                var e, i = data.k.length, r, a;
                                if (!data.k.length || typeof data.k[0] == "number") r = 0, a = 0;
                                else if (r = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t) r = 1, a = data.k[0].t;
                                else {
                                    for(e = 0; e < i - 1; e += 1)if (t === data.k[e].t) {
                                        r = e + 1, a = data.k[e].t;
                                        break;
                                    } else if (t > data.k[e].t && t < data.k[e + 1].t) {
                                        t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, a = data.k[e + 1].t) : (r = e + 1, a = data.k[e].t);
                                        break;
                                    }
                                    r === -1 && (r = e + 1, a = data.k[e].t);
                                }
                                var s = {};
                                return s.index = r, s.time = a / elem.comp.globalData.frameRate, s;
                            }
                            function key(t) {
                                var e, i, r;
                                if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t);
                                t -= 1, e = {
                                    time: data.k[t].t / elem.comp.globalData.frameRate,
                                    value: []
                                };
                                var a = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                                for(r = a.length, i = 0; i < r; i += 1)e[i] = a[i], e.value[i] = a[i];
                                return e;
                            }
                            function framesToTime(t, e) {
                                return e || (e = elem.comp.globalData.frameRate), t / e;
                            }
                            function timeToFrames(t, e) {
                                return !t && t !== 0 && (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
                            }
                            function seedRandom(t) {
                                BMMath.seedrandom(randSeed + t);
                            }
                            function sourceRectAtTime() {
                                return elem.sourceRectAtTime();
                            }
                            function substring(t, e) {
                                return typeof value == "string" ? e === void 0 ? value.substring(t) : value.substring(t, e) : "";
                            }
                            function substr(t, e) {
                                return typeof value == "string" ? e === void 0 ? value.substr(t) : value.substr(t, e) : "";
                            }
                            function posterizeTime(t) {
                                time = t === 0 ? 0 : Math1.floor(time * t) / t, value = valueAtTime(time);
                            }
                            var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !!(elem.hierarchy && elem.hierarchy.length), parent, randSeed = Math1.floor(Math1.random() * 1e6), globalData = elem.globalData;
                            function executeExpression(t) {
                                return value = t, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt);
                            }
                            return executeExpression.__preventDeadCodeRemoval = [
                                $bm_transform,
                                anchorPoint,
                                time,
                                velocity,
                                inPoint,
                                outPoint,
                                width,
                                height,
                                name,
                                loop_in,
                                loop_out,
                                smooth,
                                toComp,
                                fromCompToSurface,
                                toWorld,
                                fromWorld,
                                mask,
                                position,
                                rotation,
                                scale,
                                thisComp,
                                numKeys,
                                active,
                                wiggle,
                                loopInDuration,
                                loopOutDuration,
                                comp,
                                lookAt,
                                easeOut,
                                easeIn,
                                ease,
                                nearestKey,
                                key,
                                text,
                                textIndex,
                                textTotal,
                                selectorValue,
                                framesToTime,
                                timeToFrames,
                                sourceRectAtTime,
                                substring,
                                substr,
                                posterizeTime,
                                index,
                                globalData
                            ], executeExpression;
                        }
                        return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [
                            window,
                            document1,
                            XMLHttpRequest1,
                            fetch1,
                            frames,
                            $bm_neg,
                            add,
                            $bm_sum,
                            $bm_sub,
                            $bm_mul,
                            $bm_div,
                            $bm_mod,
                            clamp,
                            radians_to_degrees,
                            degreesToRadians,
                            degrees_to_radians,
                            normalize,
                            rgbToHsl,
                            hslToRgb,
                            linear,
                            random,
                            createPath,
                            _lottieGlobal
                        ], ob.resetFrame = resetFrame, ob;
                    }(), Expressions = function() {
                        var t = {};
                        t.initExpressions = e, t.resetFrame = ExpressionManager.resetFrame;
                        function e(i) {
                            var r = 0, a = [];
                            function s() {
                                r += 1;
                            }
                            function n() {
                                r -= 1, r === 0 && o();
                            }
                            function h(c) {
                                a.indexOf(c) === -1 && a.push(c);
                            }
                            function o() {
                                var c, g = a.length;
                                for(c = 0; c < g; c += 1)a[c].release();
                                a.length = 0;
                            }
                            i.renderer.compInterface = CompExpressionInterface(i.renderer), i.renderer.globalData.projectInterface.registerComposition(i.renderer), i.renderer.globalData.pushExpression = s, i.renderer.globalData.popExpression = n, i.renderer.globalData.registerExpressionProperty = h;
                        }
                        return t;
                    }(), MaskManagerInterface = function() {
                        function t(i, r) {
                            this._mask = i, this._data = r;
                        }
                        Object.defineProperty(t.prototype, "maskPath", {
                            get: function() {
                                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
                            }
                        }), Object.defineProperty(t.prototype, "maskOpacity", {
                            get: function() {
                                return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100;
                            }
                        });
                        var e = function(i) {
                            var r = createSizedArray(i.viewData.length), a, s = i.viewData.length;
                            for(a = 0; a < s; a += 1)r[a] = new t(i.viewData[a], i.masksProperties[a]);
                            var n = function(h) {
                                for(a = 0; a < s;){
                                    if (i.masksProperties[a].nm === h) return r[a];
                                    a += 1;
                                }
                                return null;
                            };
                            return n;
                        };
                        return e;
                    }(), ExpressionPropertyInterface = function() {
                        var t = {
                            pv: 0,
                            v: 0,
                            mult: 1
                        }, e = {
                            pv: [
                                0,
                                0,
                                0
                            ],
                            v: [
                                0,
                                0,
                                0
                            ],
                            mult: 1
                        };
                        function i(n, h, o) {
                            Object.defineProperty(n, "velocity", {
                                get: function() {
                                    return h.getVelocityAtTime(h.comp.currentFrame);
                                }
                            }), n.numKeys = h.keyframes ? h.keyframes.length : 0, n.key = function(c) {
                                if (!n.numKeys) return 0;
                                var g = "";
                                "s" in h.keyframes[c - 1] ? g = h.keyframes[c - 1].s : "e" in h.keyframes[c - 2] ? g = h.keyframes[c - 2].e : g = h.keyframes[c - 2].s;
                                var b = o === "unidimensional" ? new Number(g) : Object.assign({}, g);
                                return b.time = h.keyframes[c - 1].t / h.elem.comp.globalData.frameRate, b.value = o === "unidimensional" ? g[0] : g, b;
                            }, n.valueAtTime = h.getValueAtTime, n.speedAtTime = h.getSpeedAtTime, n.velocityAtTime = h.getVelocityAtTime, n.propertyGroup = h.propertyGroup;
                        }
                        function r(n) {
                            (!n || !("pv" in n)) && (n = t);
                            var h = 1 / n.mult, o = n.pv * h, c = new Number(o);
                            return c.value = o, i(c, n, "unidimensional"), function() {
                                return n.k && n.getValue(), o = n.v * h, c.value !== o && (c = new Number(o), c.value = o, i(c, n, "unidimensional")), c;
                            };
                        }
                        function a(n) {
                            (!n || !("pv" in n)) && (n = e);
                            var h = 1 / n.mult, o = n.data && n.data.l || n.pv.length, c = createTypedArray("float32", o), g = createTypedArray("float32", o);
                            return c.value = g, i(c, n, "multidimensional"), function() {
                                n.k && n.getValue();
                                for(var b = 0; b < o; b += 1)g[b] = n.v[b] * h, c[b] = g[b];
                                return c;
                            };
                        }
                        function s() {
                            return t;
                        }
                        return function(n) {
                            return n ? n.propType === "unidimensional" ? r(n) : a(n) : s;
                        };
                    }(), TransformExpressionInterface = function() {
                        return function(t) {
                            function e(n) {
                                switch(n){
                                    case "scale":
                                    case "Scale":
                                    case "ADBE Scale":
                                    case 6:
                                        return e.scale;
                                    case "rotation":
                                    case "Rotation":
                                    case "ADBE Rotation":
                                    case "ADBE Rotate Z":
                                    case 10:
                                        return e.rotation;
                                    case "ADBE Rotate X":
                                        return e.xRotation;
                                    case "ADBE Rotate Y":
                                        return e.yRotation;
                                    case "position":
                                    case "Position":
                                    case "ADBE Position":
                                    case 2:
                                        return e.position;
                                    case "ADBE Position_0":
                                        return e.xPosition;
                                    case "ADBE Position_1":
                                        return e.yPosition;
                                    case "ADBE Position_2":
                                        return e.zPosition;
                                    case "anchorPoint":
                                    case "AnchorPoint":
                                    case "Anchor Point":
                                    case "ADBE AnchorPoint":
                                    case 1:
                                        return e.anchorPoint;
                                    case "opacity":
                                    case "Opacity":
                                    case 11:
                                        return e.opacity;
                                    default:
                                        return null;
                                }
                            }
                            Object.defineProperty(e, "rotation", {
                                get: ExpressionPropertyInterface(t.r || t.rz)
                            }), Object.defineProperty(e, "zRotation", {
                                get: ExpressionPropertyInterface(t.rz || t.r)
                            }), Object.defineProperty(e, "xRotation", {
                                get: ExpressionPropertyInterface(t.rx)
                            }), Object.defineProperty(e, "yRotation", {
                                get: ExpressionPropertyInterface(t.ry)
                            }), Object.defineProperty(e, "scale", {
                                get: ExpressionPropertyInterface(t.s)
                            });
                            var i, r, a, s;
                            return t.p ? s = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (a = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                                get: function() {
                                    return t.p ? s() : [
                                        i(),
                                        r(),
                                        a ? a() : 0
                                    ];
                                }
                            }), Object.defineProperty(e, "xPosition", {
                                get: ExpressionPropertyInterface(t.px)
                            }), Object.defineProperty(e, "yPosition", {
                                get: ExpressionPropertyInterface(t.py)
                            }), Object.defineProperty(e, "zPosition", {
                                get: ExpressionPropertyInterface(t.pz)
                            }), Object.defineProperty(e, "anchorPoint", {
                                get: ExpressionPropertyInterface(t.a)
                            }), Object.defineProperty(e, "opacity", {
                                get: ExpressionPropertyInterface(t.o)
                            }), Object.defineProperty(e, "skew", {
                                get: ExpressionPropertyInterface(t.sk)
                            }), Object.defineProperty(e, "skewAxis", {
                                get: ExpressionPropertyInterface(t.sa)
                            }), Object.defineProperty(e, "orientation", {
                                get: ExpressionPropertyInterface(t.or)
                            }), e;
                        };
                    }(), LayerExpressionInterface = function() {
                        function t(c) {
                            var g = new Matrix;
                            if (c !== void 0) {
                                var b = this._elem.finalTransform.mProp.getValueAtTime(c);
                                b.clone(g);
                            } else {
                                var f = this._elem.finalTransform.mProp;
                                f.applyToMatrix(g);
                            }
                            return g;
                        }
                        function e(c, g) {
                            var b = this.getMatrix(g);
                            return b.props[12] = 0, b.props[13] = 0, b.props[14] = 0, this.applyPoint(b, c);
                        }
                        function i(c, g) {
                            var b = this.getMatrix(g);
                            return this.applyPoint(b, c);
                        }
                        function r(c, g) {
                            var b = this.getMatrix(g);
                            return b.props[12] = 0, b.props[13] = 0, b.props[14] = 0, this.invertPoint(b, c);
                        }
                        function a(c, g) {
                            var b = this.getMatrix(g);
                            return this.invertPoint(b, c);
                        }
                        function s(c, g) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var b, f = this._elem.hierarchy.length;
                                for(b = 0; b < f; b += 1)this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(c);
                            }
                            return c.applyToPointArray(g[0], g[1], g[2] || 0);
                        }
                        function n(c, g) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var b, f = this._elem.hierarchy.length;
                                for(b = 0; b < f; b += 1)this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(c);
                            }
                            return c.inversePoint(g);
                        }
                        function h(c) {
                            var g = new Matrix;
                            if (g.reset(), this._elem.finalTransform.mProp.applyToMatrix(g), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var b, f = this._elem.hierarchy.length;
                                for(b = 0; b < f; b += 1)this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(g);
                                return g.inversePoint(c);
                            }
                            return g.inversePoint(c);
                        }
                        function o() {
                            return [
                                1,
                                1,
                                1,
                                1
                            ];
                        }
                        return function(c) {
                            var g;
                            function b(d) {
                                x.mask = new MaskManagerInterface(d, c);
                            }
                            function f(d) {
                                x.effect = d;
                            }
                            function x(d) {
                                switch(d){
                                    case "ADBE Root Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return x.shapeInterface;
                                    case 1:
                                    case 6:
                                    case "Transform":
                                    case "transform":
                                    case "ADBE Transform Group":
                                        return g;
                                    case 4:
                                    case "ADBE Effect Parade":
                                    case "effects":
                                    case "Effects":
                                        return x.effect;
                                    case "ADBE Text Properties":
                                        return x.textInterface;
                                    default:
                                        return null;
                                }
                            }
                            x.getMatrix = t, x.invertPoint = n, x.applyPoint = s, x.toWorld = i, x.toWorldVec = e, x.fromWorld = a, x.fromWorldVec = r, x.toComp = i, x.fromComp = h, x.sampleImage = o, x.sourceRectAtTime = c.sourceRectAtTime.bind(c), x._elem = c, g = TransformExpressionInterface(c.finalTransform.mProp);
                            var v = getDescriptor(g, "anchorPoint");
                            return Object.defineProperties(x, {
                                hasParent: {
                                    get: function() {
                                        return c.hierarchy.length;
                                    }
                                },
                                parent: {
                                    get: function() {
                                        return c.hierarchy[0].layerInterface;
                                    }
                                },
                                rotation: getDescriptor(g, "rotation"),
                                scale: getDescriptor(g, "scale"),
                                position: getDescriptor(g, "position"),
                                opacity: getDescriptor(g, "opacity"),
                                anchorPoint: v,
                                anchor_point: v,
                                transform: {
                                    get: function() {
                                        return g;
                                    }
                                },
                                active: {
                                    get: function() {
                                        return c.isInRange;
                                    }
                                }
                            }), x.startTime = c.data.st, x.index = c.data.ind, x.source = c.data.refId, x.height = c.data.ty === 0 ? c.data.h : 100, x.width = c.data.ty === 0 ? c.data.w : 100, x.inPoint = c.data.ip / c.comp.globalData.frameRate, x.outPoint = c.data.op / c.comp.globalData.frameRate, x._name = c.data.nm, x.registerMaskInterface = b, x.registerEffectsInterface = f, x;
                        };
                    }(), propertyGroupFactory = function() {
                        return function(t, e) {
                            return function(i) {
                                return i = i === void 0 ? 1 : i, i <= 0 ? t : e(i - 1);
                            };
                        };
                    }(), PropertyInterface = function() {
                        return function(t, e) {
                            var i = {
                                _name: t
                            };
                            function r(a) {
                                return a = a === void 0 ? 1 : a, a <= 0 ? i : e(a - 1);
                            }
                            return r;
                        };
                    }(), EffectsExpressionInterface = function() {
                        var t = {
                            createEffectsInterface: e
                        };
                        function e(a, s) {
                            if (a.effectsManager) {
                                var n = [], h = a.data.ef, o, c = a.effectsManager.effectElements.length;
                                for(o = 0; o < c; o += 1)n.push(i(h[o], a.effectsManager.effectElements[o], s, a));
                                var g = a.data.ef || [], b = function(f) {
                                    for(o = 0, c = g.length; o < c;){
                                        if (f === g[o].nm || f === g[o].mn || f === g[o].ix) return n[o];
                                        o += 1;
                                    }
                                    return null;
                                };
                                return Object.defineProperty(b, "numProperties", {
                                    get: function() {
                                        return g.length;
                                    }
                                }), b;
                            }
                            return null;
                        }
                        function i(a, s, n, h) {
                            function o(x) {
                                for(var v = a.ef, d = 0, A = v.length; d < A;){
                                    if (x === v[d].nm || x === v[d].mn || x === v[d].ix) return v[d].ty === 5 ? g[d] : g[d]();
                                    d += 1;
                                }
                                throw new Error;
                            }
                            var c = propertyGroupFactory(o, n), g = [], b, f = a.ef.length;
                            for(b = 0; b < f; b += 1)a.ef[b].ty === 5 ? g.push(i(a.ef[b], s.effectElements[b], s.effectElements[b].propertyGroup, h)) : g.push(r(s.effectElements[b], a.ef[b].ty, h, c));
                            return a.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
                                get: function() {
                                    return g[0]();
                                }
                            }), Object.defineProperties(o, {
                                numProperties: {
                                    get: function() {
                                        return a.np;
                                    }
                                },
                                _name: {
                                    value: a.nm
                                },
                                propertyGroup: {
                                    value: c
                                }
                            }), o.enabled = a.en !== 0, o.active = o.enabled, o;
                        }
                        function r(a, s, n, h) {
                            var o = ExpressionPropertyInterface(a.p);
                            function c() {
                                return s === 10 ? n.comp.compInterface(a.p.v) : o();
                            }
                            return a.p.setGroupProperty && a.p.setGroupProperty(PropertyInterface("", h)), c;
                        }
                        return t;
                    }(), ShapePathInterface = function() {
                        return function(t, e, i) {
                            var r = e.sh;
                            function a(n) {
                                return n === "Shape" || n === "shape" || n === "Path" || n === "path" || n === "ADBE Vector Shape" || n === 2 ? a.path : null;
                            }
                            var s = propertyGroupFactory(a, i);
                            return r.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(a, {
                                path: {
                                    get: function() {
                                        return r.k && r.getValue(), r;
                                    }
                                },
                                shape: {
                                    get: function() {
                                        return r.k && r.getValue(), r;
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                ix: {
                                    value: t.ix
                                },
                                propertyIndex: {
                                    value: t.ix
                                },
                                mn: {
                                    value: t.mn
                                },
                                propertyGroup: {
                                    value: i
                                }
                            }), a;
                        };
                    }(), ShapeExpressionInterface = function() {
                        function t(v, d, A) {
                            var m = [], l, p = v ? v.length : 0;
                            for(l = 0; l < p; l += 1)v[l].ty === "gr" ? m.push(i(v[l], d[l], A)) : v[l].ty === "fl" ? m.push(r(v[l], d[l], A)) : v[l].ty === "st" ? m.push(n(v[l], d[l], A)) : v[l].ty === "tm" ? m.push(h(v[l], d[l], A)) : v[l].ty === "tr" || (v[l].ty === "el" ? m.push(c(v[l], d[l], A)) : v[l].ty === "sr" ? m.push(g(v[l], d[l], A)) : v[l].ty === "sh" ? m.push(ShapePathInterface(v[l], d[l], A)) : v[l].ty === "rc" ? m.push(b(v[l], d[l], A)) : v[l].ty === "rd" ? m.push(f(v[l], d[l], A)) : v[l].ty === "rp" ? m.push(x(v[l], d[l], A)) : v[l].ty === "gf" ? m.push(a(v[l], d[l], A)) : m.push(s(v[l], d[l])));
                            return m;
                        }
                        function e(v, d, A) {
                            var m, l = function(u) {
                                for(var P = 0, S = m.length; P < S;){
                                    if (m[P]._name === u || m[P].mn === u || m[P].propertyIndex === u || m[P].ix === u || m[P].ind === u) return m[P];
                                    P += 1;
                                }
                                return typeof u == "number" ? m[u - 1] : null;
                            };
                            l.propertyGroup = propertyGroupFactory(l, A), m = t(v.it, d.it, l.propertyGroup), l.numProperties = m.length;
                            var p = o(v.it[v.it.length - 1], d.it[d.it.length - 1], l.propertyGroup);
                            return l.transform = p, l.propertyIndex = v.cix, l._name = v.nm, l;
                        }
                        function i(v, d, A) {
                            var m = function(u) {
                                switch(u){
                                    case "ADBE Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return m.content;
                                    default:
                                        return m.transform;
                                }
                            };
                            m.propertyGroup = propertyGroupFactory(m, A);
                            var l = e(v, d, m.propertyGroup), p = o(v.it[v.it.length - 1], d.it[d.it.length - 1], m.propertyGroup);
                            return m.content = l, m.transform = p, Object.defineProperty(m, "_name", {
                                get: function() {
                                    return v.nm;
                                }
                            }), m.numProperties = v.np, m.propertyIndex = v.ix, m.nm = v.nm, m.mn = v.mn, m;
                        }
                        function r(v, d, A) {
                            function m(l) {
                                return l === "Color" || l === "color" ? m.color : l === "Opacity" || l === "opacity" ? m.opacity : null;
                            }
                            return Object.defineProperties(m, {
                                color: {
                                    get: ExpressionPropertyInterface(d.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(d.o)
                                },
                                _name: {
                                    value: v.nm
                                },
                                mn: {
                                    value: v.mn
                                }
                            }), d.c.setGroupProperty(PropertyInterface("Color", A)), d.o.setGroupProperty(PropertyInterface("Opacity", A)), m;
                        }
                        function a(v, d, A) {
                            function m(l) {
                                return l === "Start Point" || l === "start point" ? m.startPoint : l === "End Point" || l === "end point" ? m.endPoint : l === "Opacity" || l === "opacity" ? m.opacity : null;
                            }
                            return Object.defineProperties(m, {
                                startPoint: {
                                    get: ExpressionPropertyInterface(d.s)
                                },
                                endPoint: {
                                    get: ExpressionPropertyInterface(d.e)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(d.o)
                                },
                                type: {
                                    get: function() {
                                        return "a";
                                    }
                                },
                                _name: {
                                    value: v.nm
                                },
                                mn: {
                                    value: v.mn
                                }
                            }), d.s.setGroupProperty(PropertyInterface("Start Point", A)), d.e.setGroupProperty(PropertyInterface("End Point", A)), d.o.setGroupProperty(PropertyInterface("Opacity", A)), m;
                        }
                        function s() {
                            function v() {
                                return null;
                            }
                            return v;
                        }
                        function n(v, d, A) {
                            var m = propertyGroupFactory(C, A), l = propertyGroupFactory(S, m);
                            function p(M) {
                                Object.defineProperty(S, v.d[M].nm, {
                                    get: ExpressionPropertyInterface(d.d.dataProps[M].p)
                                });
                            }
                            var u, P = v.d ? v.d.length : 0, S = {};
                            for(u = 0; u < P; u += 1)p(u), d.d.dataProps[u].p.setGroupProperty(l);
                            function C(M) {
                                return M === "Color" || M === "color" ? C.color : M === "Opacity" || M === "opacity" ? C.opacity : M === "Stroke Width" || M === "stroke width" ? C.strokeWidth : null;
                            }
                            return Object.defineProperties(C, {
                                color: {
                                    get: ExpressionPropertyInterface(d.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(d.o)
                                },
                                strokeWidth: {
                                    get: ExpressionPropertyInterface(d.w)
                                },
                                dash: {
                                    get: function() {
                                        return S;
                                    }
                                },
                                _name: {
                                    value: v.nm
                                },
                                mn: {
                                    value: v.mn
                                }
                            }), d.c.setGroupProperty(PropertyInterface("Color", m)), d.o.setGroupProperty(PropertyInterface("Opacity", m)), d.w.setGroupProperty(PropertyInterface("Stroke Width", m)), C;
                        }
                        function h(v, d, A) {
                            function m(p) {
                                return p === v.e.ix || p === "End" || p === "end" ? m.end : p === v.s.ix ? m.start : p === v.o.ix ? m.offset : null;
                            }
                            var l = propertyGroupFactory(m, A);
                            return m.propertyIndex = v.ix, d.s.setGroupProperty(PropertyInterface("Start", l)), d.e.setGroupProperty(PropertyInterface("End", l)), d.o.setGroupProperty(PropertyInterface("Offset", l)), m.propertyIndex = v.ix, m.propertyGroup = A, Object.defineProperties(m, {
                                start: {
                                    get: ExpressionPropertyInterface(d.s)
                                },
                                end: {
                                    get: ExpressionPropertyInterface(d.e)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(d.o)
                                },
                                _name: {
                                    value: v.nm
                                }
                            }), m.mn = v.mn, m;
                        }
                        function o(v, d, A) {
                            function m(p) {
                                return v.a.ix === p || p === "Anchor Point" ? m.anchorPoint : v.o.ix === p || p === "Opacity" ? m.opacity : v.p.ix === p || p === "Position" ? m.position : v.r.ix === p || p === "Rotation" || p === "ADBE Vector Rotation" ? m.rotation : v.s.ix === p || p === "Scale" ? m.scale : v.sk && v.sk.ix === p || p === "Skew" ? m.skew : v.sa && v.sa.ix === p || p === "Skew Axis" ? m.skewAxis : null;
                            }
                            var l = propertyGroupFactory(m, A);
                            return d.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", l)), d.transform.mProps.p.setGroupProperty(PropertyInterface("Position", l)), d.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", l)), d.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", l)), d.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", l)), d.transform.mProps.sk && (d.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", l)), d.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", l))), d.transform.op.setGroupProperty(PropertyInterface("Opacity", l)), Object.defineProperties(m, {
                                opacity: {
                                    get: ExpressionPropertyInterface(d.transform.mProps.o)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(d.transform.mProps.p)
                                },
                                anchorPoint: {
                                    get: ExpressionPropertyInterface(d.transform.mProps.a)
                                },
                                scale: {
                                    get: ExpressionPropertyInterface(d.transform.mProps.s)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(d.transform.mProps.r)
                                },
                                skew: {
                                    get: ExpressionPropertyInterface(d.transform.mProps.sk)
                                },
                                skewAxis: {
                                    get: ExpressionPropertyInterface(d.transform.mProps.sa)
                                },
                                _name: {
                                    value: v.nm
                                }
                            }), m.ty = "tr", m.mn = v.mn, m.propertyGroup = A, m;
                        }
                        function c(v, d, A) {
                            function m(u) {
                                return v.p.ix === u ? m.position : v.s.ix === u ? m.size : null;
                            }
                            var l = propertyGroupFactory(m, A);
                            m.propertyIndex = v.ix;
                            var p = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                            return p.s.setGroupProperty(PropertyInterface("Size", l)), p.p.setGroupProperty(PropertyInterface("Position", l)), Object.defineProperties(m, {
                                size: {
                                    get: ExpressionPropertyInterface(p.s)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(p.p)
                                },
                                _name: {
                                    value: v.nm
                                }
                            }), m.mn = v.mn, m;
                        }
                        function g(v, d, A) {
                            function m(u) {
                                return v.p.ix === u ? m.position : v.r.ix === u ? m.rotation : v.pt.ix === u ? m.points : v.or.ix === u || u === "ADBE Vector Star Outer Radius" ? m.outerRadius : v.os.ix === u ? m.outerRoundness : v.ir && (v.ir.ix === u || u === "ADBE Vector Star Inner Radius") ? m.innerRadius : v.is && v.is.ix === u ? m.innerRoundness : null;
                            }
                            var l = propertyGroupFactory(m, A), p = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                            return m.propertyIndex = v.ix, p.or.setGroupProperty(PropertyInterface("Outer Radius", l)), p.os.setGroupProperty(PropertyInterface("Outer Roundness", l)), p.pt.setGroupProperty(PropertyInterface("Points", l)), p.p.setGroupProperty(PropertyInterface("Position", l)), p.r.setGroupProperty(PropertyInterface("Rotation", l)), v.ir && (p.ir.setGroupProperty(PropertyInterface("Inner Radius", l)), p.is.setGroupProperty(PropertyInterface("Inner Roundness", l))), Object.defineProperties(m, {
                                position: {
                                    get: ExpressionPropertyInterface(p.p)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(p.r)
                                },
                                points: {
                                    get: ExpressionPropertyInterface(p.pt)
                                },
                                outerRadius: {
                                    get: ExpressionPropertyInterface(p.or)
                                },
                                outerRoundness: {
                                    get: ExpressionPropertyInterface(p.os)
                                },
                                innerRadius: {
                                    get: ExpressionPropertyInterface(p.ir)
                                },
                                innerRoundness: {
                                    get: ExpressionPropertyInterface(p.is)
                                },
                                _name: {
                                    value: v.nm
                                }
                            }), m.mn = v.mn, m;
                        }
                        function b(v, d, A) {
                            function m(u) {
                                return v.p.ix === u ? m.position : v.r.ix === u ? m.roundness : v.s.ix === u || u === "Size" || u === "ADBE Vector Rect Size" ? m.size : null;
                            }
                            var l = propertyGroupFactory(m, A), p = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                            return m.propertyIndex = v.ix, p.p.setGroupProperty(PropertyInterface("Position", l)), p.s.setGroupProperty(PropertyInterface("Size", l)), p.r.setGroupProperty(PropertyInterface("Rotation", l)), Object.defineProperties(m, {
                                position: {
                                    get: ExpressionPropertyInterface(p.p)
                                },
                                roundness: {
                                    get: ExpressionPropertyInterface(p.r)
                                },
                                size: {
                                    get: ExpressionPropertyInterface(p.s)
                                },
                                _name: {
                                    value: v.nm
                                }
                            }), m.mn = v.mn, m;
                        }
                        function f(v, d, A) {
                            function m(u) {
                                return v.r.ix === u || u === "Round Corners 1" ? m.radius : null;
                            }
                            var l = propertyGroupFactory(m, A), p = d;
                            return m.propertyIndex = v.ix, p.rd.setGroupProperty(PropertyInterface("Radius", l)), Object.defineProperties(m, {
                                radius: {
                                    get: ExpressionPropertyInterface(p.rd)
                                },
                                _name: {
                                    value: v.nm
                                }
                            }), m.mn = v.mn, m;
                        }
                        function x(v, d, A) {
                            function m(u) {
                                return v.c.ix === u || u === "Copies" ? m.copies : v.o.ix === u || u === "Offset" ? m.offset : null;
                            }
                            var l = propertyGroupFactory(m, A), p = d;
                            return m.propertyIndex = v.ix, p.c.setGroupProperty(PropertyInterface("Copies", l)), p.o.setGroupProperty(PropertyInterface("Offset", l)), Object.defineProperties(m, {
                                copies: {
                                    get: ExpressionPropertyInterface(p.c)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(p.o)
                                },
                                _name: {
                                    value: v.nm
                                }
                            }), m.mn = v.mn, m;
                        }
                        return function(v, d, A) {
                            var m;
                            function l(u) {
                                if (typeof u == "number") return u = u === void 0 ? 1 : u, u === 0 ? A : m[u - 1];
                                for(var P = 0, S = m.length; P < S;){
                                    if (m[P]._name === u) return m[P];
                                    P += 1;
                                }
                                return null;
                            }
                            function p() {
                                return A;
                            }
                            return l.propertyGroup = propertyGroupFactory(l, p), m = t(v, d, l.propertyGroup), l.numProperties = m.length, l._name = "Contents", l;
                        };
                    }(), TextExpressionInterface = function() {
                        return function(t) {
                            var e;
                            function i(r) {
                                switch(r){
                                    case "ADBE Text Document":
                                        return i.sourceText;
                                    default:
                                        return null;
                                }
                            }
                            return Object.defineProperty(i, "sourceText", {
                                get: function() {
                                    t.textProperty.getValue();
                                    var r = t.textProperty.currentData.t;
                                    return (!e || r !== e.value) && (e = new String(r), e.value = r || new String(r), Object.defineProperty(e, "style", {
                                        get: function() {
                                            return {
                                                fillColor: t.textProperty.currentData.fc
                                            };
                                        }
                                    })), e;
                                }
                            }), i;
                        };
                    }();
                    function _typeof(t) {
                        "@babel/helpers - typeof";
                        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(e) {
                            return typeof e;
                        } : _typeof = function(e) {
                            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, _typeof(t);
                    }
                    var FootageInterface = function() {
                        var t = function(i) {
                            var r = "", a = i.getFootageData();
                            function s() {
                                return r = "", a = i.getFootageData(), n;
                            }
                            function n(h) {
                                if (a[h]) return r = h, a = a[h], _typeof(a) === "object" ? n : a;
                                var o = h.indexOf(r);
                                if (o !== -1) {
                                    var c = parseInt(h.substr(o + r.length), 10);
                                    return a = a[c], _typeof(a) === "object" ? n : a;
                                }
                                return "";
                            }
                            return s;
                        }, e = function(i) {
                            function r(a) {
                                return a === "Outline" ? r.outlineInterface() : null;
                            }
                            return r._name = "Outline", r.outlineInterface = t(i), r;
                        };
                        return function(i) {
                            function r(a) {
                                return a === "Data" ? r.dataInterface : null;
                            }
                            return r._name = "Data", r.dataInterface = e(i), r;
                        };
                    }(), interfaces = {
                        layer: LayerExpressionInterface,
                        effects: EffectsExpressionInterface,
                        comp: CompExpressionInterface,
                        shape: ShapeExpressionInterface,
                        text: TextExpressionInterface,
                        footage: FootageInterface
                    };
                    function getInterface(t) {
                        return interfaces[t] || null;
                    }
                    var expressionHelpers = function() {
                        function t(n, h, o) {
                            h.x && (o.k = !0, o.x = !0, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(n, h, o).bind(o)));
                        }
                        function e(n) {
                            return n *= this.elem.globalData.frameRate, n -= this.offsetTime, n !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime), this._cachingAtTime.lastFrame = n), this._cachingAtTime.value;
                        }
                        function i(n) {
                            var h = -0.01, o = this.getValueAtTime(n), c = this.getValueAtTime(n + h), g = 0;
                            if (o.length) {
                                var b;
                                for(b = 0; b < o.length; b += 1)g += Math.pow(c[b] - o[b], 2);
                                g = Math.sqrt(g) * 100;
                            } else g = 0;
                            return g;
                        }
                        function r(n) {
                            if (this.vel !== void 0) return this.vel;
                            var h = -0.001, o = this.getValueAtTime(n), c = this.getValueAtTime(n + h), g;
                            if (o.length) {
                                g = createTypedArray("float32", o.length);
                                var b;
                                for(b = 0; b < o.length; b += 1)g[b] = (c[b] - o[b]) / h;
                            } else g = (c - o) / h;
                            return g;
                        }
                        function a() {
                            return this.pv;
                        }
                        function s(n) {
                            this.propertyGroup = n;
                        }
                        return {
                            searchExpressions: t,
                            getSpeedAtTime: i,
                            getVelocityAtTime: r,
                            getValueAtTime: e,
                            getStaticValueAtTime: a,
                            setGroupProperty: s
                        };
                    }();
                    function addPropertyDecorator() {
                        function t(f, x, v) {
                            if (!this.k || !this.keyframes) return this.pv;
                            f = f ? f.toLowerCase() : "";
                            var d = this.comp.renderedFrame, A = this.keyframes, m = A[A.length - 1].t;
                            if (d <= m) return this.pv;
                            var l, p;
                            v ? (x ? l = Math.abs(m - this.elem.comp.globalData.frameRate * x) : l = Math.max(0, m - this.elem.data.ip), p = m - l) : ((!x || x > A.length - 1) && (x = A.length - 1), p = A[A.length - 1 - x].t, l = m - p);
                            var u, P, S;
                            if (f === "pingpong") {
                                var C = Math.floor((d - p) / l);
                                if (C % 2 !== 0) return this.getValueAtTime((l - (d - p) % l + p) / this.comp.globalData.frameRate, 0);
                            } else if (f === "offset") {
                                var M = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), w = this.getValueAtTime(m / this.comp.globalData.frameRate, 0), F = this.getValueAtTime(((d - p) % l + p) / this.comp.globalData.frameRate, 0), V = Math.floor((d - p) / l);
                                if (this.pv.length) {
                                    for(S = new Array(M.length), P = S.length, u = 0; u < P; u += 1)S[u] = (w[u] - M[u]) * V + F[u];
                                    return S;
                                }
                                return (w - M) * V + F;
                            } else if (f === "continue") {
                                var I = this.getValueAtTime(m / this.comp.globalData.frameRate, 0), L = this.getValueAtTime((m - .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for(S = new Array(I.length), P = S.length, u = 0; u < P; u += 1)S[u] = I[u] + (I[u] - L[u]) * ((d - m) / this.comp.globalData.frameRate) / 5e-4;
                                    return S;
                                }
                                return I + (I - L) * ((d - m) / .001);
                            }
                            return this.getValueAtTime(((d - p) % l + p) / this.comp.globalData.frameRate, 0);
                        }
                        function e(f, x, v) {
                            if (!this.k) return this.pv;
                            f = f ? f.toLowerCase() : "";
                            var d = this.comp.renderedFrame, A = this.keyframes, m = A[0].t;
                            if (d >= m) return this.pv;
                            var l, p;
                            v ? (x ? l = Math.abs(this.elem.comp.globalData.frameRate * x) : l = Math.max(0, this.elem.data.op - m), p = m + l) : ((!x || x > A.length - 1) && (x = A.length - 1), p = A[x].t, l = p - m);
                            var u, P, S;
                            if (f === "pingpong") {
                                var C = Math.floor((m - d) / l);
                                if (C % 2 === 0) return this.getValueAtTime(((m - d) % l + m) / this.comp.globalData.frameRate, 0);
                            } else if (f === "offset") {
                                var M = this.getValueAtTime(m / this.comp.globalData.frameRate, 0), w = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), F = this.getValueAtTime((l - (m - d) % l + m) / this.comp.globalData.frameRate, 0), V = Math.floor((m - d) / l) + 1;
                                if (this.pv.length) {
                                    for(S = new Array(M.length), P = S.length, u = 0; u < P; u += 1)S[u] = F[u] - (w[u] - M[u]) * V;
                                    return S;
                                }
                                return F - (w - M) * V;
                            } else if (f === "continue") {
                                var I = this.getValueAtTime(m / this.comp.globalData.frameRate, 0), L = this.getValueAtTime((m + .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for(S = new Array(I.length), P = S.length, u = 0; u < P; u += 1)S[u] = I[u] + (I[u] - L[u]) * (m - d) / .001;
                                    return S;
                                }
                                return I + (I - L) * (m - d) / .001;
                            }
                            return this.getValueAtTime((l - ((m - d) % l + m)) / this.comp.globalData.frameRate, 0);
                        }
                        function i(f, x) {
                            if (!this.k) return this.pv;
                            if (f = (f || .4) * .5, x = Math.floor(x || 5), x <= 1) return this.pv;
                            var v = this.comp.renderedFrame / this.comp.globalData.frameRate, d = v - f, A = v + f, m = x > 1 ? (A - d) / (x - 1) : 1, l = 0, p = 0, u;
                            this.pv.length ? u = createTypedArray("float32", this.pv.length) : u = 0;
                            for(var P; l < x;){
                                if (P = this.getValueAtTime(d + l * m), this.pv.length) for(p = 0; p < this.pv.length; p += 1)u[p] += P[p];
                                else u += P;
                                l += 1;
                            }
                            if (this.pv.length) for(p = 0; p < this.pv.length; p += 1)u[p] /= x;
                            else u /= x;
                            return u;
                        }
                        function r(f) {
                            this._transformCachingAtTime || (this._transformCachingAtTime = {
                                v: new Matrix
                            });
                            var x = this._transformCachingAtTime.v;
                            if (x.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                                var v = this.a.getValueAtTime(f);
                                x.translate(-v[0] * this.a.mult, -v[1] * this.a.mult, v[2] * this.a.mult);
                            }
                            if (this.appliedTransformations < 2) {
                                var d = this.s.getValueAtTime(f);
                                x.scale(d[0] * this.s.mult, d[1] * this.s.mult, d[2] * this.s.mult);
                            }
                            if (this.sk && this.appliedTransformations < 3) {
                                var A = this.sk.getValueAtTime(f), m = this.sa.getValueAtTime(f);
                                x.skewFromAxis(-A * this.sk.mult, m * this.sa.mult);
                            }
                            if (this.r && this.appliedTransformations < 4) {
                                var l = this.r.getValueAtTime(f);
                                x.rotate(-l * this.r.mult);
                            } else if (!this.r && this.appliedTransformations < 4) {
                                var p = this.rz.getValueAtTime(f), u = this.ry.getValueAtTime(f), P = this.rx.getValueAtTime(f), S = this.or.getValueAtTime(f);
                                x.rotateZ(-p * this.rz.mult).rotateY(u * this.ry.mult).rotateX(P * this.rx.mult).rotateZ(-S[2] * this.or.mult).rotateY(S[1] * this.or.mult).rotateX(S[0] * this.or.mult);
                            }
                            if (this.data.p && this.data.p.s) {
                                var C = this.px.getValueAtTime(f), M = this.py.getValueAtTime(f);
                                if (this.data.p.z) {
                                    var w = this.pz.getValueAtTime(f);
                                    x.translate(C * this.px.mult, M * this.py.mult, -w * this.pz.mult);
                                } else x.translate(C * this.px.mult, M * this.py.mult, 0);
                            } else {
                                var F = this.p.getValueAtTime(f);
                                x.translate(F[0] * this.p.mult, F[1] * this.p.mult, -F[2] * this.p.mult);
                            }
                            return x;
                        }
                        function a() {
                            return this.v.clone(new Matrix);
                        }
                        var s = TransformPropertyFactory.getTransformProperty;
                        TransformPropertyFactory.getTransformProperty = function(f, x, v) {
                            var d = s(f, x, v);
                            return d.dynamicProperties.length ? d.getValueAtTime = r.bind(d) : d.getValueAtTime = a.bind(d), d.setGroupProperty = expressionHelpers.setGroupProperty, d;
                        };
                        var n = PropertyFactory.getProp;
                        PropertyFactory.getProp = function(f, x, v, d, A) {
                            var m = n(f, x, v, d, A);
                            m.kf ? m.getValueAtTime = expressionHelpers.getValueAtTime.bind(m) : m.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(m), m.setGroupProperty = expressionHelpers.setGroupProperty, m.loopOut = t, m.loopIn = e, m.smooth = i, m.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(m), m.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(m), m.numKeys = x.a === 1 ? x.k.length : 0, m.propertyIndex = x.ix;
                            var l = 0;
                            return v !== 0 && (l = createTypedArray("float32", x.a === 1 ? x.k[0].s.length : x.k.length)), m._cachingAtTime = {
                                lastFrame: initialDefaultFrame,
                                lastIndex: 0,
                                value: l
                            }, expressionHelpers.searchExpressions(f, x, m), m.k && A.addDynamicProperty(m), m;
                        };
                        function h(f) {
                            return this._cachingAtTime || (this._cachingAtTime = {
                                shapeValue: shapePool.clone(this.pv),
                                lastIndex: 0,
                                lastTime: initialDefaultFrame
                            }), f *= this.elem.globalData.frameRate, f -= this.offsetTime, f !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < f ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = f, this.interpolateShape(f, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
                        }
                        var o = ShapePropertyFactory.getConstructorFunction(), c = ShapePropertyFactory.getKeyframedConstructorFunction();
                        function g() {}
                        g.prototype = {
                            vertices: function(f, x) {
                                this.k && this.getValue();
                                var v = this.v;
                                x !== void 0 && (v = this.getValueAtTime(x, 0));
                                var d, A = v._length, m = v[f], l = v.v, p = createSizedArray(A);
                                for(d = 0; d < A; d += 1)f === "i" || f === "o" ? p[d] = [
                                    m[d][0] - l[d][0],
                                    m[d][1] - l[d][1]
                                ] : p[d] = [
                                    m[d][0],
                                    m[d][1]
                                ];
                                return p;
                            },
                            points: function(f) {
                                return this.vertices("v", f);
                            },
                            inTangents: function(f) {
                                return this.vertices("i", f);
                            },
                            outTangents: function(f) {
                                return this.vertices("o", f);
                            },
                            isClosed: function() {
                                return this.v.c;
                            },
                            pointOnPath: function(f, x) {
                                var v = this.v;
                                x !== void 0 && (v = this.getValueAtTime(x, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(v));
                                for(var d = this._segmentsLength, A = d.lengths, m = d.totalLength * f, l = 0, p = A.length, u = 0, P; l < p;){
                                    if (u + A[l].addedLength > m) {
                                        var S = l, C = v.c && l === p - 1 ? 0 : l + 1, M = (m - u) / A[l].addedLength;
                                        P = bez.getPointInSegment(v.v[S], v.v[C], v.o[S], v.i[C], M, A[l]);
                                        break;
                                    } else u += A[l].addedLength;
                                    l += 1;
                                }
                                return P || (P = v.c ? [
                                    v.v[0][0],
                                    v.v[0][1]
                                ] : [
                                    v.v[v._length - 1][0],
                                    v.v[v._length - 1][1]
                                ]), P;
                            },
                            vectorOnPath: function(f, x, v) {
                                f == 1 ? f = this.v.c : f == 0 && (f = .999);
                                var d = this.pointOnPath(f, x), A = this.pointOnPath(f + .001, x), m = A[0] - d[0], l = A[1] - d[1], p = Math.sqrt(Math.pow(m, 2) + Math.pow(l, 2));
                                if (p === 0) return [
                                    0,
                                    0
                                ];
                                var u = v === "tangent" ? [
                                    m / p,
                                    l / p
                                ] : [
                                    -l / p,
                                    m / p
                                ];
                                return u;
                            },
                            tangentOnPath: function(f, x) {
                                return this.vectorOnPath(f, x, "tangent");
                            },
                            normalOnPath: function(f, x) {
                                return this.vectorOnPath(f, x, "normal");
                            },
                            setGroupProperty: expressionHelpers.setGroupProperty,
                            getValueAtTime: expressionHelpers.getStaticValueAtTime
                        }, extendPrototype([
                            g
                        ], o), extendPrototype([
                            g
                        ], c), c.prototype.getValueAtTime = h, c.prototype.initiateExpression = ExpressionManager.initiateExpression;
                        var b = ShapePropertyFactory.getShapeProp;
                        ShapePropertyFactory.getShapeProp = function(f, x, v, d, A) {
                            var m = b(f, x, v, d, A);
                            return m.propertyIndex = x.ix, m.lock = !1, v === 3 ? expressionHelpers.searchExpressions(f, x.pt, m) : v === 4 && expressionHelpers.searchExpressions(f, x.ks, m), m.k && f.addDynamicProperty(m), m;
                        };
                    }
                    function initialize$1() {
                        addPropertyDecorator();
                    }
                    function addDecorator() {
                        function t() {
                            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
                        }
                        TextProperty.prototype.getExpressionValue = function(e, i) {
                            var r = this.calculateExpression(i);
                            if (e.t !== r) {
                                var a = {};
                                return this.copyData(a, e), a.t = r.toString(), a.__complete = !1, a;
                            }
                            return e;
                        }, TextProperty.prototype.searchProperty = function() {
                            var e = this.searchKeyframes(), i = this.searchExpressions();
                            return this.kf = e || i, this.kf;
                        }, TextProperty.prototype.searchExpressions = t;
                    }
                    function initialize() {
                        addDecorator();
                    }
                    function SVGComposableEffect() {}
                    SVGComposableEffect.prototype = {
                        createMergeNode: function t(e, i) {
                            var r = createNS("feMerge");
                            r.setAttribute("result", e);
                            var a, s;
                            for(s = 0; s < i.length; s += 1)a = createNS("feMergeNode"), a.setAttribute("in", i[s]), r.appendChild(a), r.appendChild(a);
                            return r;
                        }
                    };
                    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
                    function SVGTintFilter(t, e, i, r, a) {
                        this.filterManager = e;
                        var s = createNS("feColorMatrix");
                        s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = s, s.setAttribute("result", r + "_tint_1"), t.appendChild(s), s = createNS("feColorMatrix"), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", r + "_tint_2"), t.appendChild(s), this.matrixFilter = s;
                        var n = this.createMergeNode(r, [
                            a,
                            r + "_tint_1",
                            r + "_tint_2"
                        ]);
                        t.appendChild(n);
                    }
                    extendPrototype([
                        SVGComposableEffect
                    ], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, r = this.filterManager.effectElements[2].p.v / 100;
                            this.linearFilter.setAttribute("values", linearFilterValue + " " + r + " 0"), this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0");
                        }
                    };
                    function SVGFillFilter(t, e, i, r) {
                        this.filterManager = e;
                        var a = createNS("feColorMatrix");
                        a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", r), t.appendChild(a), this.matrixFilter = a;
                    }
                    SVGFillFilter.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = this.filterManager.effectElements[2].p.v, i = this.filterManager.effectElements[6].p.v;
                            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
                        }
                    };
                    function SVGStrokeEffect(t, e, i) {
                        this.initialized = !1, this.filterManager = e, this.elem = i, this.paths = [];
                    }
                    SVGStrokeEffect.prototype.initialize = function() {
                        var t = this.elem.layerElement.children || this.elem.layerElement.childNodes, e, i, r, a;
                        for(this.filterManager.effectElements[1].p.v === 1 ? (a = this.elem.maskManager.masksProperties.length, r = 0) : (r = this.filterManager.effectElements[0].p.v - 1, a = r + 1), i = createNS("g"), i.setAttribute("fill", "none"), i.setAttribute("stroke-linecap", "round"), i.setAttribute("stroke-dashoffset", 1), r; r < a; r += 1)e = createNS("path"), i.appendChild(e), this.paths.push({
                            p: e,
                            m: r
                        });
                        if (this.filterManager.effectElements[10].p.v === 3) {
                            var s = createNS("mask"), n = createElementID();
                            s.setAttribute("id", n), s.setAttribute("mask-type", "alpha"), s.appendChild(i), this.elem.globalData.defs.appendChild(s);
                            var h = createNS("g");
                            for(h.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); t[0];)h.appendChild(t[0]);
                            this.elem.layerElement.appendChild(h), this.masker = s, i.setAttribute("stroke", "#fff");
                        } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                            if (this.filterManager.effectElements[10].p.v === 2) for(t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length;)this.elem.layerElement.removeChild(t[0]);
                            this.elem.layerElement.appendChild(i), this.elem.layerElement.removeAttribute("mask"), i.setAttribute("stroke", "#fff");
                        }
                        this.initialized = !0, this.pathMasker = i;
                    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                        this.initialized || this.initialize();
                        var e, i = this.paths.length, r, a;
                        for(e = 0; e < i; e += 1)if (this.paths[e].m !== -1 && (r = this.elem.maskManager.viewData[this.paths[e].m], a = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && a.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                            var s;
                            if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                                var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, h = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, o = a.getTotalLength();
                                s = "0 0 0 " + o * n + " ";
                                var c = o * (h - n), g = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01, b = Math.floor(c / g), f;
                                for(f = 0; f < b; f += 1)s += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                                s += "0 " + o * 10 + " 0 0";
                            } else s = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                            a.setAttribute("stroke-dasharray", s);
                        }
                        if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
                            var x = this.filterManager.effectElements[3].p.v;
                            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(x[0] * 255) + "," + bmFloor(x[1] * 255) + "," + bmFloor(x[2] * 255) + ")");
                        }
                    };
                    function SVGTritoneFilter(t, e, i, r) {
                        this.filterManager = e;
                        var a = createNS("feColorMatrix");
                        a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(a);
                        var s = createNS("feComponentTransfer");
                        s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", r), this.matrixFilter = s;
                        var n = createNS("feFuncR");
                        n.setAttribute("type", "table"), s.appendChild(n), this.feFuncR = n;
                        var h = createNS("feFuncG");
                        h.setAttribute("type", "table"), s.appendChild(h), this.feFuncG = h;
                        var o = createNS("feFuncB");
                        o.setAttribute("type", "table"), s.appendChild(o), this.feFuncB = o, t.appendChild(s);
                    }
                    SVGTritoneFilter.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, r = this.filterManager.effectElements[2].p.v, a = r[0] + " " + i[0] + " " + e[0], s = r[1] + " " + i[1] + " " + e[1], n = r[2] + " " + i[2] + " " + e[2];
                            this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", n);
                        }
                    };
                    function SVGProLevelsFilter(t, e, i, r) {
                        this.filterManager = e;
                        var a = this.filterManager.effectElements, s = createNS("feComponentTransfer");
                        (a[10].p.k || a[10].p.v !== 0 || a[11].p.k || a[11].p.v !== 1 || a[12].p.k || a[12].p.v !== 1 || a[13].p.k || a[13].p.v !== 0 || a[14].p.k || a[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", s)), (a[17].p.k || a[17].p.v !== 0 || a[18].p.k || a[18].p.v !== 1 || a[19].p.k || a[19].p.v !== 1 || a[20].p.k || a[20].p.v !== 0 || a[21].p.k || a[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", s)), (a[24].p.k || a[24].p.v !== 0 || a[25].p.k || a[25].p.v !== 1 || a[26].p.k || a[26].p.v !== 1 || a[27].p.k || a[27].p.v !== 0 || a[28].p.k || a[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", s)), (a[31].p.k || a[31].p.v !== 0 || a[32].p.k || a[32].p.v !== 1 || a[33].p.k || a[33].p.v !== 1 || a[34].p.k || a[34].p.v !== 0 || a[35].p.k || a[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s)), (a[3].p.k || a[3].p.v !== 0 || a[4].p.k || a[4].p.v !== 1 || a[5].p.k || a[5].p.v !== 1 || a[6].p.k || a[6].p.v !== 0 || a[7].p.k || a[7].p.v !== 1) && (s = createNS("feComponentTransfer"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", r), t.appendChild(s), this.feFuncRComposed = this.createFeFunc("feFuncR", s), this.feFuncGComposed = this.createFeFunc("feFuncG", s), this.feFuncBComposed = this.createFeFunc("feFuncB", s));
                    }
                    SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                        var i = createNS(t);
                        return i.setAttribute("type", "table"), e.appendChild(i), i;
                    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, a) {
                        for(var s = 0, n = 256, h, o = Math.min(t, e), c = Math.max(t, e), g = Array.call(null, {
                            length: n
                        }), b, f = 0, x = a - r, v = e - t; s <= 256;)h = s / 256, h <= o ? b = v < 0 ? a : r : h >= c ? b = v < 0 ? r : a : b = r + x * Math.pow((h - t) / v, 1 / i), g[f] = b, f += 1, s += 256 / (n - 1);
                        return g.join(" ");
                    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e, i = this.filterManager.effectElements;
                            this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e));
                        }
                    };
                    function SVGDropShadowEffect(t, e, i, r, a) {
                        var s = e.container.globalData.renderConfig.filterSize, n = e.data.fs || s;
                        t.setAttribute("x", n.x || s.x), t.setAttribute("y", n.y || s.y), t.setAttribute("width", n.width || s.width), t.setAttribute("height", n.height || s.height), this.filterManager = e;
                        var h = createNS("feGaussianBlur");
                        h.setAttribute("in", "SourceAlpha"), h.setAttribute("result", r + "_drop_shadow_1"), h.setAttribute("stdDeviation", "0"), this.feGaussianBlur = h, t.appendChild(h);
                        var o = createNS("feOffset");
                        o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", r + "_drop_shadow_1"), o.setAttribute("result", r + "_drop_shadow_2"), this.feOffset = o, t.appendChild(o);
                        var c = createNS("feFlood");
                        c.setAttribute("flood-color", "#00ff00"), c.setAttribute("flood-opacity", "1"), c.setAttribute("result", r + "_drop_shadow_3"), this.feFlood = c, t.appendChild(c);
                        var g = createNS("feComposite");
                        g.setAttribute("in", r + "_drop_shadow_3"), g.setAttribute("in2", r + "_drop_shadow_2"), g.setAttribute("operator", "in"), g.setAttribute("result", r + "_drop_shadow_4"), t.appendChild(g);
                        var b = this.createMergeNode(r, [
                            r + "_drop_shadow_4",
                            a
                        ]);
                        t.appendChild(b);
                    }
                    extendPrototype([
                        SVGComposableEffect
                    ], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                                var e = this.filterManager.effectElements[0].p.v;
                                this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(e[0] * 255), Math.round(e[1] * 255), Math.round(e[2] * 255)));
                            }
                            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                                var i = this.filterManager.effectElements[3].p.v, r = (this.filterManager.effectElements[2].p.v - 90) * degToRads, a = i * Math.cos(r), s = i * Math.sin(r);
                                this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", s);
                            }
                        }
                    };
                    var _svgMatteSymbols = [];
                    function SVGMatte3Effect(t, e, i) {
                        this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement;
                    }
                    SVGMatte3Effect.prototype.findSymbol = function(t) {
                        for(var e = 0, i = _svgMatteSymbols.length; e < i;){
                            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                            e += 1;
                        }
                        return null;
                    }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                        var i = t.layerElement.parentNode;
                        if (i) {
                            for(var r = i.children, a = 0, s = r.length; a < s && r[a] !== t.layerElement;)a += 1;
                            var n;
                            a <= s - 2 && (n = r[a + 1]);
                            var h = createNS("use");
                            h.setAttribute("href", "#" + e), n ? i.insertBefore(h, n) : i.appendChild(h);
                        }
                    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                        if (!this.findSymbol(e)) {
                            var i = createElementID(), r = createNS("mask");
                            r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                            var a = t.globalData.defs;
                            a.appendChild(r);
                            var s = createNS("symbol");
                            s.setAttribute("id", i), this.replaceInParent(e, i), s.appendChild(e.layerElement), a.appendChild(s);
                            var n = createNS("use");
                            n.setAttribute("href", "#" + i), r.appendChild(n), e.data.hd = !1, e.show();
                        }
                        t.setMatte(e.layerId);
                    }, SVGMatte3Effect.prototype.initialize = function() {
                        for(var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;)e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
                        this.initialized = !0;
                    }, SVGMatte3Effect.prototype.renderFrame = function() {
                        this.initialized || this.initialize();
                    };
                    function SVGGaussianBlurEffect(t, e, i, r) {
                        t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                        var a = createNS("feGaussianBlur");
                        a.setAttribute("result", r), t.appendChild(a), this.feGaussianBlur = a;
                    }
                    SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                        if (t || this.filterManager._mdf) {
                            var e = .3, i = this.filterManager.effectElements[0].p.v * e, r = this.filterManager.effectElements[1].p.v, a = r == 3 ? 0 : i, s = r == 2 ? 0 : i;
                            this.feGaussianBlur.setAttribute("stdDeviation", a + " " + s);
                            var n = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                            this.feGaussianBlur.setAttribute("edgeMode", n);
                        }
                    };
                    function TransformEffect() {}
                    TransformEffect.prototype.init = function(t) {
                        this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1;
                    }, TransformEffect.prototype.renderFrame = function(t) {
                        if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
                            var e = this.effectsManager.effectElements, i = e[0].p.v, r = e[1].p.v, a = e[2].p.v === 1, s = e[3].p.v, n = a ? s : e[4].p.v, h = e[5].p.v, o = e[6].p.v, c = e[7].p.v;
                            this.matrix.reset(), this.matrix.translate(-i[0], -i[1], i[2]), this.matrix.scale(n * .01, s * .01, 1), this.matrix.rotate(-c * degToRads), this.matrix.skewFromAxis(-h * degToRads, (o + 90) * degToRads), this.matrix.translate(r[0], r[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0);
                        }
                    };
                    function SVGTransformEffect(t, e) {
                        this.init(e);
                    }
                    extendPrototype([
                        TransformEffect
                    ], SVGTransformEffect);
                    function CVTransformEffect(t) {
                        this.init(t);
                    }
                    return extendPrototype([
                        TransformEffect
                    ], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie;
                });
                function addElementToList(t, e) {
                    e.push(t), t._isDirty = !1, t._changedStyles.length = 0, t._changedAttributes.length = 0, t._changedElements.length = 0, t._textContent = null, t.children.forEach(function(i) {
                        addElementToList(i, e);
                    });
                }
                function addChangedAttributes(t) {
                    for(var e = t._changedAttributes, i = [], r, a = 0; a < e.length; a += 1)r = e[a], i.push([
                        r,
                        t.attributes[r]
                    ]);
                    return i;
                }
                function addChangedStyles(t) {
                    for(var e = t._changedStyles, i = [], r, a = 0; a < e.length; a += 1)r = e[a], i.push([
                        r,
                        t.style[r]
                    ]);
                    return i;
                }
                function addChangedElements(t, e) {
                    for(var i = t._changedElements, r = [], a, s = 0; s < i.length; s += 1)a = i[s], r.push([
                        a[0].serialize(),
                        a[1],
                        a[2]
                    ]), addElementToList(a[0], e);
                    return r;
                }
                function loadAnimation(t) {
                    var e = t.params, i, r, a = [], s;
                    if (e.renderer === "svg") i = document1.createElement("div"), e.container = i;
                    else {
                        s = e.rendererSettings.canvas, s || (s = document1.createElement("canvas"), s.width = e.animationData.w, s.height = e.animationData.h);
                        var n = s.getContext("2d");
                        e.rendererSettings.context = n;
                    }
                    r = lottie.loadAnimation(e), r.addEventListener("error", function(h) {
                        console.log(h);
                    }), r.onError = function(h) {
                        console.log("ERRORO", h);
                    }, r.addEventListener("_play", function() {
                        self.postMessage({
                            type: "playing",
                            payload: {
                                id: t.id
                            }
                        });
                    }), r.addEventListener("_pause", function() {
                        self.postMessage({
                            type: "paused",
                            payload: {
                                id: t.id
                            }
                        });
                    }), e.renderer === "svg" ? (r.addEventListener("DOMLoaded", function() {
                        var h = i.serialize();
                        addElementToList(i, a), self.postMessage({
                            type: "SVGloaded",
                            payload: {
                                id: t.id,
                                tree: h.children[0]
                            }
                        });
                    }), r.addEventListener("drawnFrame", function(h) {
                        for(var o = [], c, g = 0; g < a.length; g += 1)if (c = a[g], c._isDirty) {
                            var b = {
                                id: c.attributes.id,
                                styles: addChangedStyles(c),
                                attributes: addChangedAttributes(c),
                                elements: addChangedElements(c, a),
                                textContent: c._textContent || void 0
                            };
                            o.push(b), c._isDirty = !1, c._changedAttributes.length = 0, c._changedStyles.length = 0, c._changedElements.length = 0, c._textContent = null;
                        }
                        self.postMessage({
                            type: "SVGupdated",
                            payload: {
                                elements: o,
                                id: t.id,
                                currentTime: h.currentTime
                            }
                        });
                    })) : s._isProxy && r.addEventListener("drawnFrame", function(h) {
                        self.postMessage({
                            type: "CanvasUpdated",
                            payload: {
                                instructions: s.instructions,
                                id: t.id,
                                currentTime: h.currentTime
                            }
                        }), s.resetInstructions();
                    }), r.addEventListener("DOMLoaded", function() {
                        self.postMessage({
                            type: "DOMLoaded",
                            payload: {
                                id: t.id,
                                totalFrames: r.totalFrames,
                                frameRate: r.frameRate,
                                firstFrame: r.firstFrame,
                                currentFrame: r.currentFrame,
                                playDirection: r.playDirection,
                                isSubframeEnabled: r.isSubframeEnabled,
                                currentRawFrame: r.currentRawFrame,
                                timeCompleted: r.timeCompleted
                            }
                        });
                    }), animations[t.id] = {
                        animation: r,
                        events: {}
                    };
                }
                return {
                    loadAnimation
                };
            }();
            onmessage = function(t) {
                var e = t.data, i = e.type, r = e.payload;
                if (i === "load") lottieInternal.loadAnimation(r);
                else if (i === "pause") animations[r.id] && animations[r.id].animation.pause();
                else if (i === "play") animations[r.id] && animations[r.id].animation.play();
                else if (i === "stop") animations[r.id] && animations[r.id].animation.stop();
                else if (i === "setSpeed") animations[r.id] && animations[r.id].animation.setSpeed(r.value);
                else if (i === "setDirection") animations[r.id] && animations[r.id].animation.setDirection(r.value);
                else if (i === "setLoop") animations[r.id] && animations[r.id].animation.setLoop(r.value);
                else if (i === "goToAndPlay") animations[r.id] && animations[r.id].animation.goToAndPlay(r.value, r.isFrame);
                else if (i === "goToAndStop") animations[r.id] && animations[r.id].animation.goToAndStop(r.value, r.isFrame);
                else if (i === "setSubframe") animations[r.id] && animations[r.id].animation.setSubframe(r.value);
                else if (i === "addEventListener") {
                    if (animations[r.id]) {
                        var a = function() {
                            self.postMessage({
                                type: "event",
                                payload: {
                                    id: r.id,
                                    callbackId: r.callbackId,
                                    argument: arguments[0]
                                }
                            });
                        };
                        animations[r.id].events[r.callbackId] = {
                            callback: a
                        }, animations[r.id].animation.addEventListener(r.eventName, a);
                    }
                } else if (i === "removeEventListener") {
                    if (animations[r.id]) {
                        var s = animations[r.id].events[r.callbackId];
                        animations[r.id].animation.removeEventListener(r.eventName, s);
                    }
                } else i === "destroy" ? animations[r.id] && (animations[r.id].animation.destroy(), animations[r.id] = null) : i === "resize" ? animations[r.id] && animations[r.id].animation.resize(r.width, r.height) : i === "playSegments" ? animations[r.id] && animations[r.id].animation.playSegments(r.arr, r.forceFlag) : i === "updateDocumentData" && animations[r.id].animation.updateDocumentData(r.path, r.documentData, r.index);
            };
        }
        function createWorker(t) {
            var e = new Blob([
                "(" + t.toString() + "())"
            ], {
                type: "text/javascript"
            }), i = URL.createObjectURL(e);
            return new Worker(i);
        }
        var lottie = function() {
            var t = createWorker(workerContent), e = 0, i = 0, r = {}, a = {
                rendererSettings: {}
            };
            function s(S, C, M, w) {
                var F;
                S.type === "div" ? F = document.createElement("div") : F = document.createElementNS(S.namespace, S.type), S.textContent && (F.textContent = S.textContent);
                for(var V in S.attributes)Object.prototype.hasOwnProperty.call(S.attributes, V) && (V === "href" ? F.setAttributeNS("http://www.w3.org/1999/xlink", V, S.attributes[V]) : F.setAttribute(V, S.attributes[V]), V === "id" && (M[S.attributes[V]] = F));
                for(var I in S.style)Object.prototype.hasOwnProperty.call(S.style, I) && (F.style[I] = S.style[I]);
                S.children.forEach(function(L) {
                    s(L, F, M);
                }), w ? C.insertBefore(F, w) : C.appendChild(F);
            }
            var n = function() {
                return function(S) {
                    var C = r[S.id];
                    C._loaded = !0, C.pendingCallbacks.forEach(function(M) {
                        C.animInstance.addEventListener(M.eventName, M.callback), M.eventName === "DOMLoaded" && M.callback();
                    }), C.animInstance.totalFrames = S.totalFrames, C.animInstance.frameRate = S.frameRate, C.animInstance.firstFrame = S.firstFrame, C.animInstance.playDirection = S.playDirection, C.animInstance.currentFrame = S.isSubframeEnabled ? S.currentRawFrame : ~~S.currentRawFrame, S.timeCompleted !== S.totalFrames && S.currentFrame > S.timeCompleted && (C.animInstance.currentFrame = S.timeCompleted);
                };
            }(), h = function() {
                return function(S) {
                    var C = r[S.id], M = C.container, w = C.elements;
                    s(S.tree, M, w);
                };
            }();
            function o(S, C) {
                for(var M, w = 0; w < S.length; w += 1){
                    M = S[w];
                    var F = C[M[1]];
                    if (F) {
                        var V;
                        M[2] && (V = C[M[2]]), s(M[0], F, C, V), S.splice(w, 1), w -= 1;
                    }
                }
            }
            function c(S, C) {
                for(var M, w = 0; w < C.length; w += 1)M = C[w], S.style[M[0]] = M[1];
            }
            function g(S, C) {
                for(var M, w = 0; w < C.length; w += 1)M = C[w], S.setAttribute(M[0], M[1]);
            }
            function b(S, C) {
                C && (S.textContent = C);
            }
            function f(S) {
                var C = S.elements, M = r[S.id];
                if (M) {
                    for(var w = M.elements, F, V = 0; V < C.length; V += 1){
                        F = C[V];
                        var I = w[F.id];
                        o(F.elements, w), c(I, F.styles), g(I, F.attributes), b(I, F.textContent);
                    }
                    M.animInstance.currentFrame = S.currentTime;
                }
            }
            function x(S) {
                var C = S.getContext("2d"), M = {
                    beginPath: C.beginPath,
                    closePath: C.closePath,
                    rect: C.rect,
                    clip: C.clip,
                    clearRect: C.clearRect,
                    setTransform: C.setTransform,
                    moveTo: C.moveTo,
                    bezierCurveTo: C.bezierCurveTo,
                    lineTo: C.lineTo,
                    fill: C.fill,
                    save: C.save,
                    restore: C.restore
                };
                return function(w) {
                    for(var F = 0; F < w.length; F += 1){
                        var V = w[F], I = M[V.t];
                        I ? I.apply(C, V.a) : C[V.t] = V.a;
                    }
                };
            }
            function v(S) {
                var C = r[S.id];
                C.instructionsHandler(S.instructions);
            }
            function d(S) {
                var C = r[S.id];
                if (C) {
                    var M = C.callbacks;
                    M[S.callbackId] && M[S.callbackId].callback(S.argument);
                }
            }
            function A(S) {
                var C = r[S.id];
                C && (C.animInstance.isPaused = !1);
            }
            function m(S) {
                var C = r[S.id];
                C && (C.animInstance.isPaused = !0);
            }
            var l = {
                DOMLoaded: n,
                SVGloaded: h,
                SVGupdated: f,
                CanvasUpdated: v,
                event: d,
                playing: A,
                paused: m
            };
            t.onmessage = function(S) {
                l[S.data.type] && l[S.data.type](S.data.payload);
            };
            function p(S) {
                return new Promise(function(C, M) {
                    var w = Object.assign({}, a, S);
                    w.animType && !w.renderer && (w.renderer = w.animType), w.wrapper && (w.container || (w.container = w.wrapper), delete w.wrapper), w.animationData ? C(w) : w.path ? fetch(w.path).then(function(F) {
                        return F.json();
                    }).then(function(F) {
                        w.animationData = F, delete w.path, C(w);
                    }) : M();
                });
            }
            function u(S) {
                e += 1;
                var C = "lottie_animationId_" + e, M = {
                    elements: {},
                    callbacks: {},
                    pendingCallbacks: [],
                    status: "init"
                }, w = {
                    id: C,
                    isPaused: !0,
                    pause: function() {
                        t.postMessage({
                            type: "pause",
                            payload: {
                                id: C
                            }
                        });
                    },
                    play: function() {
                        t.postMessage({
                            type: "play",
                            payload: {
                                id: C
                            }
                        });
                    },
                    stop: function() {
                        t.postMessage({
                            type: "stop",
                            payload: {
                                id: C
                            }
                        });
                    },
                    setSpeed: function(F) {
                        t.postMessage({
                            type: "setSpeed",
                            payload: {
                                id: C,
                                value: F
                            }
                        });
                    },
                    setDirection: function(F) {
                        t.postMessage({
                            type: "setDirection",
                            payload: {
                                id: C,
                                value: F
                            }
                        });
                    },
                    setLoop: function(F) {
                        t.postMessage({
                            type: "setLoop",
                            payload: {
                                id: C,
                                value: F
                            }
                        });
                    },
                    goToAndStop: function(F, V) {
                        t.postMessage({
                            type: "goToAndStop",
                            payload: {
                                id: C,
                                value: F,
                                isFrame: V
                            }
                        });
                    },
                    goToAndPlay: function(F, V) {
                        t.postMessage({
                            type: "goToAndPlay",
                            payload: {
                                id: C,
                                value: F,
                                isFrame: V
                            }
                        });
                    },
                    playSegments: function(F, V) {
                        t.postMessage({
                            type: "playSegments",
                            payload: {
                                id: C,
                                arr: F,
                                forceFlag: V
                            }
                        });
                    },
                    setSubframe: function(F) {
                        t.postMessage({
                            type: "setSubframe",
                            payload: {
                                id: C,
                                value: F
                            }
                        });
                    },
                    addEventListener: function(F, V) {
                        if (!M._loaded) M.pendingCallbacks.push({
                            eventName: F,
                            callback: V
                        });
                        else {
                            i += 1;
                            var I = "callback_" + i;
                            M.callbacks[I] = {
                                eventName: F,
                                callback: V
                            }, t.postMessage({
                                type: "addEventListener",
                                payload: {
                                    id: C,
                                    callbackId: I,
                                    eventName: F
                                }
                            });
                        }
                    },
                    removeEventListener: function(F, V) {
                        Object.keys(M.callbacks).forEach(function(I) {
                            M.callbacks[I].eventName === F && (M.callbacks[I].callback === V || !V) && (delete M.callbacks[I], t.postMessage({
                                type: "removeEventListener",
                                payload: {
                                    id: C,
                                    callbackId: I,
                                    eventName: F
                                }
                            }));
                        });
                    },
                    destroy: function() {
                        M.status === "init" ? M.status = "destroyable" : (M.status = "destroyed", r[C] = null, M.container && (M.container.innerHTML = ""), t.postMessage({
                            type: "destroy",
                            payload: {
                                id: C
                            }
                        }));
                    },
                    resize: function(F, V) {
                        var I = window.devicePixelRatio || 1;
                        t.postMessage({
                            type: "resize",
                            payload: {
                                id: C,
                                width: F || (M.container ? M.container.offsetWidth * I : 0),
                                height: V || (M.container ? M.container.offsetHeight * I : 0)
                            }
                        });
                    },
                    updateDocumentData: function(F, V, I) {
                        t.postMessage({
                            type: "updateDocumentData",
                            payload: {
                                id: C,
                                path: F,
                                documentData: V,
                                index: I
                            }
                        });
                    }
                };
                return M.animInstance = w, p(S).then(function(F) {
                    if (M.status === "destroyable") {
                        M.animInstance.destroy();
                        return;
                    }
                    M.status = "loaded";
                    var V = [];
                    if (F.container && (M.container = F.container, delete F.container), F.renderer === "canvas") {
                        var I = F.rendererSettings.canvas;
                        if (!I) {
                            var L = window.devicePixelRatio || 1;
                            I = document.createElement("canvas"), M.container.appendChild(I), I.width = (M.container ? M.container.offsetWidth : F.animationData.w) * L, I.height = (M.container ? M.container.offsetHeight : F.animationData.h) * L, I.style.width = "100%", I.style.height = "100%";
                        }
                        var B = I;
                        typeof OffscreenCanvas > "u" ? (M.canvas = I, M.instructionsHandler = x(I)) : (I instanceof OffscreenCanvas || (B = I.transferControlToOffscreen(), F.rendererSettings.canvas = B), V.push(B));
                    }
                    r[C] = M, t.postMessage({
                        type: "load",
                        payload: {
                            params: F,
                            id: C
                        }
                    }, V);
                }), w;
            }
            var P = {
                loadAnimation: u
            };
            return P;
        }();
        return lottie;
    });
}), yt = dt(); /*! Bundled license information:

lottie-web/build/player/lottie_worker.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)
*/ 

},{"./chunk-HDDX7F4A.mjs":"2Aqr0","./chunk-ZWH2ESXT.mjs":"jX5B9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dwb8D"], null, "parcelRequire94c2")

//# sourceMappingURL=lottie_worker-Q23FJ6ZR-YP5OKMTN.db9c1655.js.map
