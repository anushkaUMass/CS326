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
})({"7jTz2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6c7d78c6a2ed2711";
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

},{}],"6JTyB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>gt) //# sourceMappingURL=out.js.map
;
var _chunkHDDX7F4AMjs = require("./chunk-HDDX7F4A.mjs");
var _chunkZWH2ESXTMjs = require("./chunk-ZWH2ESXT.mjs");
var ut = (0, _chunkHDDX7F4AMjs.a)((exports, module)=>{
    typeof navigator < "u" && function(t, e) {
        typeof exports == "object" && typeof module < "u" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self, t.lottie = e());
    }(exports, function() {
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
            return document.createElement(t);
        }
        function extendPrototype(t, e) {
            var r, i = t.length, a;
            for(r = 0; r < i; r += 1){
                a = t[r].prototype;
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
                    var e, r = this.audios.length;
                    for(e = 0; e < r; e += 1)this.audios[e].pause();
                },
                resume: function() {
                    var e, r = this.audios.length;
                    for(e = 0; e < r; e += 1)this.audios[e].resume();
                },
                setRate: function(e) {
                    var r, i = this.audios.length;
                    for(r = 0; r < i; r += 1)this.audios[r].setRate(e);
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
                    var e, r = this.audios.length;
                    for(e = 0; e < r; e += 1)this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1));
                }
            }, function() {
                return new t;
            };
        }(), createTypedArray = function() {
            function t(r, i) {
                var a = 0, s = [], n;
                switch(r){
                    case "int16":
                    case "uint8c":
                        n = 1;
                        break;
                    default:
                        n = 1.1;
                        break;
                }
                for(a = 0; a < i; a += 1)s.push(n);
                return s;
            }
            function e(r, i) {
                return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : t(r, i);
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
        var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMin = Math.min, BMMath = {};
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
            ], e, r = t.length;
            for(e = 0; e < r; e += 1)BMMath[t[e]] = Math[t[e]];
        })(), BMMath.random = Math.random, BMMath.abs = function(t) {
            var e = _typeof$6(t);
            if (e === "object" && t.length) {
                var r = createSizedArray(t.length), i, a = t.length;
                for(i = 0; i < a; i += 1)r[i] = Math.abs(t[i]);
                return r;
            }
            return Math.abs(t);
        };
        var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;
        function BMEnterFrameEvent(t, e, r, i) {
            this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1;
        }
        function BMCompleteEvent(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1;
        }
        function BMCompleteLoopEvent(t, e, r, i) {
            this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
        }
        function BMSegmentStartEvent(t, e, r) {
            this.type = t, this.firstFrame = e, this.totalFrames = r;
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
        function HSVtoRGB(t, e, r) {
            var i, a, s, n, u, h, g, v;
            switch(n = Math.floor(t * 6), u = t * 6 - n, h = r * (1 - e), g = r * (1 - u * e), v = r * (1 - (1 - u) * e), n % 6){
                case 0:
                    i = r, a = v, s = h;
                    break;
                case 1:
                    i = g, a = r, s = h;
                    break;
                case 2:
                    i = h, a = r, s = v;
                    break;
                case 3:
                    i = h, a = g, s = r;
                    break;
                case 4:
                    i = v, a = h, s = r;
                    break;
                case 5:
                    i = r, a = h, s = g;
                    break;
            }
            return [
                i,
                a,
                s
            ];
        }
        function RGBtoHSV(t, e, r) {
            var i = Math.max(t, e, r), a = Math.min(t, e, r), s = i - a, n, u = i === 0 ? 0 : s / i, h = i / 255;
            switch(i){
                case a:
                    n = 0;
                    break;
                case t:
                    n = e - r + s * (e < r ? 6 : 0), n /= 6 * s;
                    break;
                case e:
                    n = r - t + s * 2, n /= 6 * s;
                    break;
                case r:
                    n = t - e + s * 4, n /= 6 * s;
                    break;
            }
            return [
                n,
                u,
                h
            ];
        }
        function addSaturationToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
        }
        function addBrightnessToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
        }
        function addHueToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
        }
        var rgbToHex = function() {
            var t = [], e, r;
            for(e = 0; e < 256; e += 1)r = e.toString(16), t[e] = r.length === 1 ? "0" + r : r;
            return function(i, a, s) {
                return i < 0 && (i = 0), a < 0 && (a = 0), s < 0 && (s = 0), "#" + t[i] + t[a] + t[s];
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
            return document.createElementNS(svgNS, t);
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
            var t = 1, e = [], r, i, a = {
                onmessage: function() {},
                postMessage: function(m) {
                    r({
                        data: m
                    });
                }
            }, s = {
                postMessage: function(m) {
                    a.onmessage({
                        data: m
                    });
                }
            };
            function n(m) {
                if (window.Worker && window.Blob && getWebWorker()) {
                    var b = new Blob([
                        "var _workerSelf = self; self.onmessage = ",
                        m.toString()
                    ], {
                        type: "text/javascript"
                    }), y = URL.createObjectURL(b);
                    return new Worker(y);
                }
                return r = m, a;
            }
            function u() {
                i || (i = n(function(m) {
                    function b() {
                        function d(C, w) {
                            var _, x, f = C.length, S, D, k, O;
                            for(x = 0; x < f; x += 1)if (_ = C[x], "ks" in _ && !_.completed) {
                                if (_.completed = !0, _.hasMask) {
                                    var B = _.masksProperties;
                                    for(D = B.length, S = 0; S < D; S += 1)if (B[S].pt.k.i) c(B[S].pt.k);
                                    else for(O = B[S].pt.k.length, k = 0; k < O; k += 1)B[S].pt.k[k].s && c(B[S].pt.k[k].s[0]), B[S].pt.k[k].e && c(B[S].pt.k[k].e[0]);
                                }
                                _.ty === 0 ? (_.layers = o(_.refId, w), d(_.layers, w)) : _.ty === 4 ? l(_.shapes) : _.ty === 5 && V(_);
                            }
                        }
                        function A(C, w) {
                            if (C) {
                                var _ = 0, x = C.length;
                                for(_ = 0; _ < x; _ += 1)C[_].t === 1 && (C[_].data.layers = o(C[_].data.refId, w), d(C[_].data.layers, w));
                            }
                        }
                        function p(C, w) {
                            for(var _ = 0, x = w.length; _ < x;){
                                if (w[_].id === C) return w[_];
                                _ += 1;
                            }
                            return null;
                        }
                        function o(C, w) {
                            var _ = p(C, w);
                            return _ ? _.layers.__used ? JSON.parse(JSON.stringify(_.layers)) : (_.layers.__used = !0, _.layers) : null;
                        }
                        function l(C) {
                            var w, _ = C.length, x, f;
                            for(w = _ - 1; w >= 0; w -= 1)if (C[w].ty === "sh") {
                                if (C[w].ks.k.i) c(C[w].ks.k);
                                else for(f = C[w].ks.k.length, x = 0; x < f; x += 1)C[w].ks.k[x].s && c(C[w].ks.k[x].s[0]), C[w].ks.k[x].e && c(C[w].ks.k[x].e[0]);
                            } else C[w].ty === "gr" && l(C[w].it);
                        }
                        function c(C) {
                            var w, _ = C.i.length;
                            for(w = 0; w < _; w += 1)C.i[w][0] += C.v[w][0], C.i[w][1] += C.v[w][1], C.o[w][0] += C.v[w][0], C.o[w][1] += C.v[w][1];
                        }
                        function P(C, w) {
                            var _ = w ? w.split(".") : [
                                100,
                                100,
                                100
                            ];
                            return C[0] > _[0] ? !0 : _[0] > C[0] ? !1 : C[1] > _[1] ? !0 : _[1] > C[1] ? !1 : C[2] > _[2] ? !0 : _[2] > C[2] ? !1 : null;
                        }
                        var M = function() {
                            var C = [
                                4,
                                4,
                                14
                            ];
                            function w(x) {
                                var f = x.t.d;
                                x.t.d = {
                                    k: [
                                        {
                                            s: f,
                                            t: 0
                                        }
                                    ]
                                };
                            }
                            function _(x) {
                                var f, S = x.length;
                                for(f = 0; f < S; f += 1)x[f].ty === 5 && w(x[f]);
                            }
                            return function(x) {
                                if (P(C, x.v) && (_(x.layers), x.assets)) {
                                    var f, S = x.assets.length;
                                    for(f = 0; f < S; f += 1)x.assets[f].layers && _(x.assets[f].layers);
                                }
                            };
                        }(), T = function() {
                            var C = [
                                4,
                                7,
                                99
                            ];
                            return function(w) {
                                if (w.chars && !P(C, w.v)) {
                                    var _, x = w.chars.length;
                                    for(_ = 0; _ < x; _ += 1){
                                        var f = w.chars[_];
                                        f.data && f.data.shapes && (l(f.data.shapes), f.data.ip = 0, f.data.op = 99999, f.data.st = 0, f.data.sr = 1, f.data.ks = {
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
                                        }, w.chars[_].t || (f.data.shapes.push({
                                            ty: "no"
                                        }), f.data.shapes[0].it.push({
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
                        }(), F = function() {
                            var C = [
                                5,
                                7,
                                15
                            ];
                            function w(x) {
                                var f = x.t.p;
                                typeof f.a == "number" && (f.a = {
                                    a: 0,
                                    k: f.a
                                }), typeof f.p == "number" && (f.p = {
                                    a: 0,
                                    k: f.p
                                }), typeof f.r == "number" && (f.r = {
                                    a: 0,
                                    k: f.r
                                });
                            }
                            function _(x) {
                                var f, S = x.length;
                                for(f = 0; f < S; f += 1)x[f].ty === 5 && w(x[f]);
                            }
                            return function(x) {
                                if (P(C, x.v) && (_(x.layers), x.assets)) {
                                    var f, S = x.assets.length;
                                    for(f = 0; f < S; f += 1)x.assets[f].layers && _(x.assets[f].layers);
                                }
                            };
                        }(), I = function() {
                            var C = [
                                4,
                                1,
                                9
                            ];
                            function w(x) {
                                var f, S = x.length, D, k;
                                for(f = 0; f < S; f += 1)if (x[f].ty === "gr") w(x[f].it);
                                else if (x[f].ty === "fl" || x[f].ty === "st") {
                                    if (x[f].c.k && x[f].c.k[0].i) for(k = x[f].c.k.length, D = 0; D < k; D += 1)x[f].c.k[D].s && (x[f].c.k[D].s[0] /= 255, x[f].c.k[D].s[1] /= 255, x[f].c.k[D].s[2] /= 255, x[f].c.k[D].s[3] /= 255), x[f].c.k[D].e && (x[f].c.k[D].e[0] /= 255, x[f].c.k[D].e[1] /= 255, x[f].c.k[D].e[2] /= 255, x[f].c.k[D].e[3] /= 255);
                                    else x[f].c.k[0] /= 255, x[f].c.k[1] /= 255, x[f].c.k[2] /= 255, x[f].c.k[3] /= 255;
                                }
                            }
                            function _(x) {
                                var f, S = x.length;
                                for(f = 0; f < S; f += 1)x[f].ty === 4 && w(x[f].shapes);
                            }
                            return function(x) {
                                if (P(C, x.v) && (_(x.layers), x.assets)) {
                                    var f, S = x.assets.length;
                                    for(f = 0; f < S; f += 1)x.assets[f].layers && _(x.assets[f].layers);
                                }
                            };
                        }(), R = function() {
                            var C = [
                                4,
                                4,
                                18
                            ];
                            function w(x) {
                                var f, S = x.length, D, k;
                                for(f = S - 1; f >= 0; f -= 1)if (x[f].ty === "sh") {
                                    if (x[f].ks.k.i) x[f].ks.k.c = x[f].closed;
                                    else for(k = x[f].ks.k.length, D = 0; D < k; D += 1)x[f].ks.k[D].s && (x[f].ks.k[D].s[0].c = x[f].closed), x[f].ks.k[D].e && (x[f].ks.k[D].e[0].c = x[f].closed);
                                } else x[f].ty === "gr" && w(x[f].it);
                            }
                            function _(x) {
                                var f, S, D = x.length, k, O, B, j;
                                for(S = 0; S < D; S += 1){
                                    if (f = x[S], f.hasMask) {
                                        var N = f.masksProperties;
                                        for(O = N.length, k = 0; k < O; k += 1)if (N[k].pt.k.i) N[k].pt.k.c = N[k].cl;
                                        else for(j = N[k].pt.k.length, B = 0; B < j; B += 1)N[k].pt.k[B].s && (N[k].pt.k[B].s[0].c = N[k].cl), N[k].pt.k[B].e && (N[k].pt.k[B].e[0].c = N[k].cl);
                                    }
                                    f.ty === 4 && w(f.shapes);
                                }
                            }
                            return function(x) {
                                if (P(C, x.v) && (_(x.layers), x.assets)) {
                                    var f, S = x.assets.length;
                                    for(f = 0; f < S; f += 1)x.assets[f].layers && _(x.assets[f].layers);
                                }
                            };
                        }();
                        function L(C) {
                            C.__complete || (I(C), M(C), T(C), F(C), R(C), d(C.layers, C.assets), A(C.chars, C.assets), C.__complete = !0);
                        }
                        function V(C) {
                            C.t.a.length === 0 && C.t.p;
                        }
                        var G = {};
                        return G.completeData = L, G.checkColors = I, G.checkChars = T, G.checkPathProperties = F, G.checkShapes = R, G.completeLayers = d, G;
                    }
                    if (s.dataManager || (s.dataManager = b()), s.assetLoader || (s.assetLoader = function() {
                        function d(p) {
                            var o = p.getResponseHeader("content-type");
                            return o && p.responseType === "json" && o.indexOf("json") !== -1 || p.response && _typeof$5(p.response) === "object" ? p.response : p.response && typeof p.response == "string" ? JSON.parse(p.response) : p.responseText ? JSON.parse(p.responseText) : null;
                        }
                        function A(p, o, l, c) {
                            var P, M = new XMLHttpRequest;
                            try {
                                M.responseType = "json";
                            } catch  {}
                            M.onreadystatechange = function() {
                                if (M.readyState === 4) {
                                    if (M.status === 200) P = d(M), l(P);
                                    else try {
                                        P = d(M), l(P);
                                    } catch (T) {
                                        c && c(T);
                                    }
                                }
                            };
                            try {
                                M.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), p, !0);
                            } catch  {
                                M.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), o + "/" + p, !0);
                            }
                            M.send();
                        }
                        return {
                            load: A
                        };
                    }()), m.data.type === "loadAnimation") s.assetLoader.load(m.data.path, m.data.fullPath, function(d) {
                        s.dataManager.completeData(d), s.postMessage({
                            id: m.data.id,
                            payload: d,
                            status: "success"
                        });
                    }, function() {
                        s.postMessage({
                            id: m.data.id,
                            status: "error"
                        });
                    });
                    else if (m.data.type === "complete") {
                        var y = m.data.animation;
                        s.dataManager.completeData(y), s.postMessage({
                            id: m.data.id,
                            payload: y,
                            status: "success"
                        });
                    } else m.data.type === "loadData" && s.assetLoader.load(m.data.path, m.data.fullPath, function(d) {
                        s.postMessage({
                            id: m.data.id,
                            payload: d,
                            status: "success"
                        });
                    }, function() {
                        s.postMessage({
                            id: m.data.id,
                            status: "error"
                        });
                    });
                }), i.onmessage = function(m) {
                    var b = m.data, y = b.id, d = e[y];
                    e[y] = null, b.status === "success" ? d.onComplete(b.payload) : d.onError && d.onError();
                });
            }
            function h(m, b) {
                t += 1;
                var y = "processId_" + t;
                return e[y] = {
                    onComplete: m,
                    onError: b
                }, y;
            }
            function g(m, b, y) {
                u();
                var d = h(b, y);
                i.postMessage({
                    type: "loadAnimation",
                    path: m,
                    fullPath: window.location.origin + window.location.pathname,
                    id: d
                });
            }
            function v(m, b, y) {
                u();
                var d = h(b, y);
                i.postMessage({
                    type: "loadData",
                    path: m,
                    fullPath: window.location.origin + window.location.pathname,
                    id: d
                });
            }
            function E(m, b, y) {
                u();
                var d = h(b, y);
                i.postMessage({
                    type: "complete",
                    animation: m,
                    id: d
                });
            }
            return {
                loadAnimation: g,
                loadData: v,
                completeAnimation: E
            };
        }(), ImagePreloader = function() {
            var t = function() {
                var p = createTag("canvas");
                p.width = 1, p.height = 1;
                var o = p.getContext("2d");
                return o.fillStyle = "rgba(0,0,0,0)", o.fillRect(0, 0, 1, 1), p;
            }();
            function e() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function r() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function i(p, o, l) {
                var c = "";
                if (p.e) c = p.p;
                else if (o) {
                    var P = p.p;
                    P.indexOf("images/") !== -1 && (P = P.split("/")[1]), c = o + P;
                } else c = l, c += p.u ? p.u : "", c += p.p;
                return c;
            }
            function a(p) {
                var o = 0, l = setInterval((function() {
                    var c = p.getBBox();
                    (c.width || o > 500) && (this._imageLoaded(), clearInterval(l)), o += 1;
                }).bind(this), 50);
            }
            function s(p) {
                var o = i(p, this.assetsPath, this.path), l = createNS("image");
                isSafari ? this.testImageLoaded(l) : l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", (function() {
                    c.img = t, this._imageLoaded();
                }).bind(this), !1), l.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), this._elementHelper.append ? this._elementHelper.append(l) : this._elementHelper.appendChild(l);
                var c = {
                    img: l,
                    assetData: p
                };
                return c;
            }
            function n(p) {
                var o = i(p, this.assetsPath, this.path), l = createTag("img");
                l.crossOrigin = "anonymous", l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", (function() {
                    c.img = t, this._imageLoaded();
                }).bind(this), !1), l.src = o;
                var c = {
                    img: l,
                    assetData: p
                };
                return c;
            }
            function u(p) {
                var o = {
                    assetData: p
                }, l = i(p, this.assetsPath, this.path);
                return dataManager.loadData(l, (function(c) {
                    o.img = c, this._footageLoaded();
                }).bind(this), (function() {
                    o.img = {}, this._footageLoaded();
                }).bind(this)), o;
            }
            function h(p, o) {
                this.imagesLoadedCb = o;
                var l, c = p.length;
                for(l = 0; l < c; l += 1)p[l].layers || (!p[l].t || p[l].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(p[l]))) : p[l].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(p[l]))));
            }
            function g(p) {
                this.path = p || "";
            }
            function v(p) {
                this.assetsPath = p || "";
            }
            function E(p) {
                for(var o = 0, l = this.images.length; o < l;){
                    if (this.images[o].assetData === p) return this.images[o].img;
                    o += 1;
                }
                return null;
            }
            function m() {
                this.imagesLoadedCb = null, this.images.length = 0;
            }
            function b() {
                return this.totalImages === this.loadedAssets;
            }
            function y() {
                return this.totalFootages === this.loadedFootagesCount;
            }
            function d(p, o) {
                p === "svg" ? (this._elementHelper = o, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
            }
            function A() {
                this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = u.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
            }
            return A.prototype = {
                loadAssets: h,
                setAssetsPath: v,
                setPath: g,
                loadedImages: b,
                loadedFootages: y,
                destroy: m,
                getAsset: E,
                createImgData: n,
                createImageData: s,
                imageLoaded: e,
                footageLoaded: r,
                setCacheType: d
            }, A;
        }();
        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(t, e) {
                if (this._cbs[t]) for(var r = this._cbs[t], i = 0; i < r.length; i += 1)r[i](e);
            },
            addEventListener: function(t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
                    this.removeEventListener(t, e);
                }).bind(this);
            },
            removeEventListener: function(t, e) {
                if (!e) this._cbs[t] = null;
                else if (this._cbs[t]) {
                    for(var r = 0, i = this._cbs[t].length; r < i;)this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                    this._cbs[t].length || (this._cbs[t] = null);
                }
            }
        };
        var markerParser = function() {
            function t(e) {
                for(var r = e.split(`\r
`), i = {}, a, s = 0, n = 0; n < r.length; n += 1)a = r[n].split(":"), a.length === 2 && (i[a[0]] = a[1].trim(), s += 1);
                if (s === 0) throw new Error;
                return i;
            }
            return function(e) {
                for(var r = [], i = 0; i < e.length; i += 1){
                    var a = e[i], s = {
                        time: a.tm,
                        duration: a.dr
                    };
                    try {
                        s.payload = JSON.parse(e[i].cm);
                    } catch  {
                        try {
                            s.payload = t(e[i].cm);
                        } catch  {
                            s.payload = {
                                name: e[i].cm
                            };
                        }
                    }
                    r.push(s);
                }
                return r;
            };
        }(), ProjectInterface = function() {
            function t(e) {
                this.compositions.push(e);
            }
            return function() {
                function e(r) {
                    for(var i = 0, a = this.compositions.length; i < a;){
                        if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                        i += 1;
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
            var r = getRenderer(e);
            this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
        }, AnimationItem.prototype.onSetupError = function() {
            this.trigger("data_failed");
        }, AnimationItem.prototype.setupAnimation = function(t) {
            dataManager.completeAnimation(t, this.configAnimation);
        }, AnimationItem.prototype.setData = function(t, e) {
            e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
            var r = {
                wrapper: t,
                animationData: e
            }, i = t.attributes;
            r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
            var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            a === "false" ? r.loop = !1 : a === "true" ? r.loop = !0 : a !== "" && (r.loop = parseInt(a, 10));
            var s = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
            r.autoplay = s !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
            var n = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
            n === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy");
        }, AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e = this.animationData.layers, r, i = e.length, a = t.layers, s, n = a.length;
            for(s = 0; s < n; s += 1)for(r = 0; r < i;){
                if (e[r].id === a[s].id) {
                    e[r] = a[s];
                    break;
                }
                r += 1;
            }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for(i = t.assets.length, r = 0; r < i; r += 1)this.animationData.assets.push(t.assets[r]);
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
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), (function() {
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
            var r = typeof t == "number" ? t : void 0, i = typeof e == "number" ? e : void 0;
            this.renderer.updateContainerSize(r, i);
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
            for(var e, r = 0; r < this.markers.length; r += 1)if (e = this.markers[r], e.payload && e.payload.name === t) return e;
            return null;
        }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
            if (!(r && this.name !== r)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var a = this.getMarkerData(t);
                    a && this.goToAndStop(a.time, !0);
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause();
            }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
            if (!(r && this.name !== r)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var a = this.getMarkerData(t);
                    a && (a.duration ? this.playSegments([
                        a.time,
                        a.time + a.duration
                    ], !0) : this.goToAndStop(a.time, !0));
                } else this.goToAndStop(i, e, r);
                this.play();
            }
        }, AnimationItem.prototype.advanceTime = function(t) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var e = this.currentRawFrame + t * this.frameModifier, r = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (r = !0, e = 0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
            }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart");
        }, AnimationItem.prototype.setSegment = function(t, e) {
            var r = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0);
        }, AnimationItem.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), _typeof$4(t[0]) === "object") {
                var r, i = t.length;
                for(r = 0; r < i; r += 1)this.segments.push(t[r]);
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
                var r = t.p;
                r.indexOf("images/") !== -1 && (r = r.split("/")[1]), e = this.assetsPath + r;
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e;
        }, AnimationItem.prototype.getAssetData = function(t) {
            for(var e = 0, r = this.assets.length; e < r;){
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
        }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
            try {
                var i = this.renderer.getElementByPath(t);
                i.updateDocumentData(e, r);
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
            var t = {}, e = [], r = 0, i = 0, a = 0, s = !0, n = !1;
            function u(_) {
                for(var x = 0, f = _.target; x < i;)e[x].animation === f && (e.splice(x, 1), x -= 1, i -= 1, f.isPaused || E()), x += 1;
            }
            function h(_, x) {
                if (!_) return null;
                for(var f = 0; f < i;){
                    if (e[f].elem === _ && e[f].elem !== null) return e[f].animation;
                    f += 1;
                }
                var S = new AnimationItem;
                return m(S, _), S.setData(_, x), S;
            }
            function g() {
                var _, x = e.length, f = [];
                for(_ = 0; _ < x; _ += 1)f.push(e[_].animation);
                return f;
            }
            function v() {
                a += 1, R();
            }
            function E() {
                a -= 1;
            }
            function m(_, x) {
                _.addEventListener("destroy", u), _.addEventListener("_active", v), _.addEventListener("_idle", E), e.push({
                    elem: x,
                    animation: _
                }), i += 1;
            }
            function b(_) {
                var x = new AnimationItem;
                return m(x, null), x.setParams(_), x;
            }
            function y(_, x) {
                var f;
                for(f = 0; f < i; f += 1)e[f].animation.setSpeed(_, x);
            }
            function d(_, x) {
                var f;
                for(f = 0; f < i; f += 1)e[f].animation.setDirection(_, x);
            }
            function A(_) {
                var x;
                for(x = 0; x < i; x += 1)e[x].animation.play(_);
            }
            function p(_) {
                var x = _ - r, f;
                for(f = 0; f < i; f += 1)e[f].animation.advanceTime(x);
                r = _, a && !n ? window.requestAnimationFrame(p) : s = !0;
            }
            function o(_) {
                r = _, window.requestAnimationFrame(p);
            }
            function l(_) {
                var x;
                for(x = 0; x < i; x += 1)e[x].animation.pause(_);
            }
            function c(_, x, f) {
                var S;
                for(S = 0; S < i; S += 1)e[S].animation.goToAndStop(_, x, f);
            }
            function P(_) {
                var x;
                for(x = 0; x < i; x += 1)e[x].animation.stop(_);
            }
            function M(_) {
                var x;
                for(x = 0; x < i; x += 1)e[x].animation.togglePause(_);
            }
            function T(_) {
                var x;
                for(x = i - 1; x >= 0; x -= 1)e[x].animation.destroy(_);
            }
            function F(_, x, f) {
                var S = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), D, k = S.length;
                for(D = 0; D < k; D += 1)f && S[D].setAttribute("data-bm-type", f), h(S[D], _);
                if (x && k === 0) {
                    f || (f = "svg");
                    var O = document.getElementsByTagName("body")[0];
                    O.innerText = "";
                    var B = createTag("div");
                    B.style.width = "100%", B.style.height = "100%", B.setAttribute("data-bm-type", f), O.appendChild(B), h(B, _);
                }
            }
            function I() {
                var _;
                for(_ = 0; _ < i; _ += 1)e[_].animation.resize();
            }
            function R() {
                !n && a && s && (window.requestAnimationFrame(o), s = !1);
            }
            function L() {
                n = !0;
            }
            function V() {
                n = !1, R();
            }
            function G(_, x) {
                var f;
                for(f = 0; f < i; f += 1)e[f].animation.setVolume(_, x);
            }
            function C(_) {
                var x;
                for(x = 0; x < i; x += 1)e[x].animation.mute(_);
            }
            function w(_) {
                var x;
                for(x = 0; x < i; x += 1)e[x].animation.unmute(_);
            }
            return t.registerAnimation = h, t.loadAnimation = b, t.setSpeed = y, t.setDirection = d, t.play = A, t.pause = l, t.stop = P, t.togglePause = M, t.searchAnimations = F, t.resize = I, t.goToAndStop = c, t.destroy = T, t.freeze = L, t.unfreeze = V, t.setVolume = G, t.mute = C, t.unmute = w, t.getRegisteredAnimations = g, t;
        }(), BezierFactory = function() {
            var t = {};
            t.getBezierEasing = r;
            var e = {};
            function r(o, l, c, P, M) {
                var T = M || ("bez_" + o + "_" + l + "_" + c + "_" + P).replace(/\./g, "p");
                if (e[T]) return e[T];
                var F = new p([
                    o,
                    l,
                    c,
                    P
                ]);
                return e[T] = F, F;
            }
            var i = 4, a = .001, s = 1e-7, n = 10, u = 11, h = 1 / (u - 1), g = typeof Float32Array == "function";
            function v(o, l) {
                return 1 - 3 * l + 3 * o;
            }
            function E(o, l) {
                return 3 * l - 6 * o;
            }
            function m(o) {
                return 3 * o;
            }
            function b(o, l, c) {
                return ((v(l, c) * o + E(l, c)) * o + m(l)) * o;
            }
            function y(o, l, c) {
                return 3 * v(l, c) * o * o + 2 * E(l, c) * o + m(l);
            }
            function d(o, l, c, P, M) {
                var T, F, I = 0;
                do F = l + (c - l) / 2, T = b(F, P, M) - o, T > 0 ? c = F : l = F;
                while (Math.abs(T) > s && ++I < n);
                return F;
            }
            function A(o, l, c, P) {
                for(var M = 0; M < i; ++M){
                    var T = y(l, c, P);
                    if (T === 0) return l;
                    var F = b(l, c, P) - o;
                    l -= F / T;
                }
                return l;
            }
            function p(o) {
                this._p = o, this._mSampleValues = g ? new Float32Array(u) : new Array(u), this._precomputed = !1, this.get = this.get.bind(this);
            }
            return p.prototype = {
                get: function(o) {
                    var l = this._p[0], c = this._p[1], P = this._p[2], M = this._p[3];
                    return this._precomputed || this._precompute(), l === c && P === M ? o : o === 0 ? 0 : o === 1 ? 1 : b(this._getTForX(o), c, M);
                },
                _precompute: function() {
                    var o = this._p[0], l = this._p[1], c = this._p[2], P = this._p[3];
                    this._precomputed = !0, (o !== l || c !== P) && this._calcSampleValues();
                },
                _calcSampleValues: function() {
                    for(var o = this._p[0], l = this._p[2], c = 0; c < u; ++c)this._mSampleValues[c] = b(c * h, o, l);
                },
                _getTForX: function(o) {
                    for(var l = this._p[0], c = this._p[2], P = this._mSampleValues, M = 0, T = 1, F = u - 1; T !== F && P[T] <= o; ++T)M += h;
                    --T;
                    var I = (o - P[T]) / (P[T + 1] - P[T]), R = M + I * h, L = y(R, l, c);
                    return L >= a ? A(o, R, l, c) : L === 0 ? R : d(o, M, M + h, l, c);
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
            return function(t, e, r) {
                var i = 0, a = t, s = createSizedArray(a), n = {
                    newElement: u,
                    release: h
                };
                function u() {
                    var g;
                    return i ? (i -= 1, g = s[i]) : g = e(), g;
                }
                function h(g) {
                    i === a && (s = pooling.double(s), a *= 2), r && r(g), s[i] = g, i += 1;
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
            function e(r) {
                var i, a = r.lengths.length;
                for(i = 0; i < a; i += 1)bezierLengthPool.release(r.lengths[i]);
                r.lengths.length = 0;
            }
            return poolFactory(8, t, e);
        }();
        function bezFunction() {
            var t = Math;
            function e(m, b, y, d, A, p) {
                var o = m * d + b * A + y * p - A * d - p * m - y * b;
                return o > -0.001 && o < .001;
            }
            function r(m, b, y, d, A, p, o, l, c) {
                if (y === 0 && p === 0 && c === 0) return e(m, b, d, A, o, l);
                var P = t.sqrt(t.pow(d - m, 2) + t.pow(A - b, 2) + t.pow(p - y, 2)), M = t.sqrt(t.pow(o - m, 2) + t.pow(l - b, 2) + t.pow(c - y, 2)), T = t.sqrt(t.pow(o - d, 2) + t.pow(l - A, 2) + t.pow(c - p, 2)), F;
                return P > M ? P > T ? F = P - M - T : F = T - M - P : T > M ? F = T - M - P : F = M - P - T, F > -0.0001 && F < 1e-4;
            }
            var i = function() {
                return function(m, b, y, d) {
                    var A = getDefaultCurveSegments(), p, o, l, c, P, M = 0, T, F = [], I = [], R = bezierLengthPool.newElement();
                    for(l = y.length, p = 0; p < A; p += 1){
                        for(P = p / (A - 1), T = 0, o = 0; o < l; o += 1)c = bmPow(1 - P, 3) * m[o] + 3 * bmPow(1 - P, 2) * P * y[o] + 3 * (1 - P) * bmPow(P, 2) * d[o] + bmPow(P, 3) * b[o], F[o] = c, I[o] !== null && (T += bmPow(F[o] - I[o], 2)), I[o] = F[o];
                        T && (T = bmSqrt(T), M += T), R.percents[p] = P, R.lengths[p] = M;
                    }
                    return R.addedLength = M, R;
                };
            }();
            function a(m) {
                var b = segmentsLengthPool.newElement(), y = m.c, d = m.v, A = m.o, p = m.i, o, l = m._length, c = b.lengths, P = 0;
                for(o = 0; o < l - 1; o += 1)c[o] = i(d[o], d[o + 1], A[o], p[o + 1]), P += c[o].addedLength;
                return y && l && (c[o] = i(d[o], d[0], A[o], p[0]), P += c[o].addedLength), b.totalLength = P, b;
            }
            function s(m) {
                this.segmentLength = 0, this.points = new Array(m);
            }
            function n(m, b) {
                this.partialLength = m, this.point = b;
            }
            var u = function() {
                var m = {};
                return function(b, y, d, A) {
                    var p = (b[0] + "_" + b[1] + "_" + y[0] + "_" + y[1] + "_" + d[0] + "_" + d[1] + "_" + A[0] + "_" + A[1]).replace(/\./g, "p");
                    if (!m[p]) {
                        var o = getDefaultCurveSegments(), l, c, P, M, T, F = 0, I, R, L = null;
                        b.length === 2 && (b[0] !== y[0] || b[1] !== y[1]) && e(b[0], b[1], y[0], y[1], b[0] + d[0], b[1] + d[1]) && e(b[0], b[1], y[0], y[1], y[0] + A[0], y[1] + A[1]) && (o = 2);
                        var V = new s(o);
                        for(P = d.length, l = 0; l < o; l += 1){
                            for(R = createSizedArray(P), T = l / (o - 1), I = 0, c = 0; c < P; c += 1)M = bmPow(1 - T, 3) * b[c] + 3 * bmPow(1 - T, 2) * T * (b[c] + d[c]) + 3 * (1 - T) * bmPow(T, 2) * (y[c] + A[c]) + bmPow(T, 3) * y[c], R[c] = M, L !== null && (I += bmPow(R[c] - L[c], 2));
                            I = bmSqrt(I), F += I, V.points[l] = new n(I, R), L = R;
                        }
                        V.segmentLength = F, m[p] = V;
                    }
                    return m[p];
                };
            }();
            function h(m, b) {
                var y = b.percents, d = b.lengths, A = y.length, p = bmFloor((A - 1) * m), o = m * b.addedLength, l = 0;
                if (p === A - 1 || p === 0 || o === d[p]) return y[p];
                for(var c = d[p] > o ? -1 : 1, P = !0; P;)if (d[p] <= o && d[p + 1] > o ? (l = (o - d[p]) / (d[p + 1] - d[p]), P = !1) : p += c, p < 0 || p >= A - 1) {
                    if (p === A - 1) return y[p];
                    P = !1;
                }
                return y[p] + (y[p + 1] - y[p]) * l;
            }
            function g(m, b, y, d, A, p) {
                var o = h(A, p), l = 1 - o, c = t.round((l * l * l * m[0] + (o * l * l + l * o * l + l * l * o) * y[0] + (o * o * l + l * o * o + o * l * o) * d[0] + o * o * o * b[0]) * 1e3) / 1e3, P = t.round((l * l * l * m[1] + (o * l * l + l * o * l + l * l * o) * y[1] + (o * o * l + l * o * o + o * l * o) * d[1] + o * o * o * b[1]) * 1e3) / 1e3;
                return [
                    c,
                    P
                ];
            }
            var v = createTypedArray("float32", 8);
            function E(m, b, y, d, A, p, o) {
                A < 0 ? A = 0 : A > 1 && (A = 1);
                var l = h(A, o);
                p = p > 1 ? 1 : p;
                var c = h(p, o), P, M = m.length, T = 1 - l, F = 1 - c, I = T * T * T, R = l * T * T * 3, L = l * l * T * 3, V = l * l * l, G = T * T * F, C = l * T * F + T * l * F + T * T * c, w = l * l * F + T * l * c + l * T * c, _ = l * l * c, x = T * F * F, f = l * F * F + T * c * F + T * F * c, S = l * c * F + T * c * c + l * F * c, D = l * c * c, k = F * F * F, O = c * F * F + F * c * F + F * F * c, B = c * c * F + F * c * c + c * F * c, j = c * c * c;
                for(P = 0; P < M; P += 1)v[P * 4] = t.round((I * m[P] + R * y[P] + L * d[P] + V * b[P]) * 1e3) / 1e3, v[P * 4 + 1] = t.round((G * m[P] + C * y[P] + w * d[P] + _ * b[P]) * 1e3) / 1e3, v[P * 4 + 2] = t.round((x * m[P] + f * y[P] + S * d[P] + D * b[P]) * 1e3) / 1e3, v[P * 4 + 3] = t.round((k * m[P] + O * y[P] + B * d[P] + j * b[P]) * 1e3) / 1e3;
                return v;
            }
            return {
                getSegmentsLength: a,
                getNewSegment: E,
                getPointInSegment: g,
                buildBezierData: u,
                pointOnLine2D: e,
                pointOnLine3D: r
            };
        }
        var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
        function interpolateValue(t, e) {
            var r = this.offsetTime, i;
            this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
            for(var a = e.lastIndex, s = a, n = this.keyframes.length - 1, u = !0, h, g, v; u;){
                if (h = this.keyframes[s], g = this.keyframes[s + 1], s === n - 1 && t >= g.t - r) {
                    h.h && (h = g), a = 0;
                    break;
                }
                if (g.t - r > t) {
                    a = s;
                    break;
                }
                s < n - 1 ? s += 1 : (a = 0, u = !1);
            }
            v = this.keyframesMetadata[s] || {};
            var E, m, b, y, d, A, p = g.t - r, o = h.t - r, l;
            if (h.to) {
                v.bezierData || (v.bezierData = bez.buildBezierData(h.s, g.s || h.e, h.to, h.ti));
                var c = v.bezierData;
                if (t >= p || t < o) {
                    var P = t >= p ? c.points.length - 1 : 0;
                    for(m = c.points[P].point.length, E = 0; E < m; E += 1)i[E] = c.points[P].point[E];
                } else {
                    v.__fnct ? A = v.__fnct : (A = BezierFactory.getBezierEasing(h.o.x, h.o.y, h.i.x, h.i.y, h.n).get, v.__fnct = A), b = A((t - o) / (p - o));
                    var M = c.segmentLength * b, T, F = e.lastFrame < t && e._lastKeyframeIndex === s ? e._lastAddedLength : 0;
                    for(d = e.lastFrame < t && e._lastKeyframeIndex === s ? e._lastPoint : 0, u = !0, y = c.points.length; u;){
                        if (F += c.points[d].partialLength, M === 0 || b === 0 || d === c.points.length - 1) {
                            for(m = c.points[d].point.length, E = 0; E < m; E += 1)i[E] = c.points[d].point[E];
                            break;
                        } else if (M >= F && M < F + c.points[d + 1].partialLength) {
                            for(T = (M - F) / c.points[d + 1].partialLength, m = c.points[d].point.length, E = 0; E < m; E += 1)i[E] = c.points[d].point[E] + (c.points[d + 1].point[E] - c.points[d].point[E]) * T;
                            break;
                        }
                        d < y - 1 ? d += 1 : u = !1;
                    }
                    e._lastPoint = d, e._lastAddedLength = F - c.points[d].partialLength, e._lastKeyframeIndex = s;
                }
            } else {
                var I, R, L, V, G;
                if (n = h.s.length, l = g.s || h.e, this.sh && h.h !== 1) {
                    if (t >= p) i[0] = l[0], i[1] = l[1], i[2] = l[2];
                    else if (t <= o) i[0] = h.s[0], i[1] = h.s[1], i[2] = h.s[2];
                    else {
                        var C = createQuaternion(h.s), w = createQuaternion(l), _ = (t - o) / (p - o);
                        quaternionToEuler(i, slerp(C, w, _));
                    }
                } else for(s = 0; s < n; s += 1)h.h !== 1 && (t >= p ? b = 1 : t < o ? b = 0 : (h.o.x.constructor === Array ? (v.__fnct || (v.__fnct = []), v.__fnct[s] ? A = v.__fnct[s] : (I = h.o.x[s] === void 0 ? h.o.x[0] : h.o.x[s], R = h.o.y[s] === void 0 ? h.o.y[0] : h.o.y[s], L = h.i.x[s] === void 0 ? h.i.x[0] : h.i.x[s], V = h.i.y[s] === void 0 ? h.i.y[0] : h.i.y[s], A = BezierFactory.getBezierEasing(I, R, L, V).get, v.__fnct[s] = A)) : v.__fnct ? A = v.__fnct : (I = h.o.x, R = h.o.y, L = h.i.x, V = h.i.y, A = BezierFactory.getBezierEasing(I, R, L, V).get, h.keyframeMetadata = A), b = A((t - o) / (p - o)))), l = g.s || h.e, G = h.h === 1 ? h.s[s] : h.s[s] + (l[s] - h.s[s]) * b, this.propType === "multidimensional" ? i[s] = G : i = G;
            }
            return e.lastIndex = a, i;
        }
        function slerp(t, e, r) {
            var i = [], a = t[0], s = t[1], n = t[2], u = t[3], h = e[0], g = e[1], v = e[2], E = e[3], m, b, y, d, A;
            return b = a * h + s * g + n * v + u * E, b < 0 && (b = -b, h = -h, g = -g, v = -v, E = -E), 1 - b > 1e-6 ? (m = Math.acos(b), y = Math.sin(m), d = Math.sin((1 - r) * m) / y, A = Math.sin(r * m) / y) : (d = 1 - r, A = r), i[0] = d * a + A * h, i[1] = d * s + A * g, i[2] = d * n + A * v, i[3] = d * u + A * E, i;
        }
        function quaternionToEuler(t, e) {
            var r = e[0], i = e[1], a = e[2], s = e[3], n = Math.atan2(2 * i * s - 2 * r * a, 1 - 2 * i * i - 2 * a * a), u = Math.asin(2 * r * i + 2 * a * s), h = Math.atan2(2 * r * s - 2 * i * a, 1 - 2 * r * r - 2 * a * a);
            t[0] = n / degToRads, t[1] = u / degToRads, t[2] = h / degToRads;
        }
        function createQuaternion(t) {
            var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, a = Math.cos(e / 2), s = Math.cos(r / 2), n = Math.cos(i / 2), u = Math.sin(e / 2), h = Math.sin(r / 2), g = Math.sin(i / 2), v = a * s * n - u * h * g, E = u * h * n + a * s * g, m = u * s * n + a * h * g, b = a * h * n - u * s * g;
            return [
                E,
                m,
                b,
                v
            ];
        }
        function getValueAtCurrentTime() {
            var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
                this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var i = this.interpolateValue(t, this._caching);
                this.pv = i;
            }
            return this._caching.lastFrame = t, this.pv;
        }
        function setVValue(t) {
            var e;
            if (this.propType === "unidimensional") e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
            else for(var r = 0, i = this.v.length; r < i;)e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = !0), r += 1;
        }
        function processEffectsSequence() {
            if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return;
                }
                this.lock = !0, this._mdf = this._isFirstFrame;
                var t, e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
                for(t = 0; t < e; t += 1)r = this.effectsSequence[t](r);
                this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }
        function addEffect(t) {
            this.effectsSequence.push(t), this.container.addDynamicProperty(this);
        }
        function ValueProperty(t, e, r, i) {
            this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
        }
        function MultiDimensionalProperty(t, e, r, i) {
            this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var a, s = e.k.length;
            for(this.v = createTypedArray("float32", s), this.pv = createTypedArray("float32", s), this.vel = createTypedArray("float32", s), a = 0; a < s; a += 1)this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
        }
        function KeyframedValueProperty(t, e, r, i) {
            this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [
                getValueAtCurrentTime.bind(this)
            ], this.addEffect = addEffect;
        }
        function KeyframedMultidimensionalProperty(t, e, r, i) {
            this.propType = "multidimensional";
            var a, s = e.k.length, n, u, h, g;
            for(a = 0; a < s - 1; a += 1)e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (n = e.k[a].s, u = e.k[a + 1].s, h = e.k[a].to, g = e.k[a].ti, (n.length === 2 && !(n[0] === u[0] && n[1] === u[1]) && bez.pointOnLine2D(n[0], n[1], u[0], u[1], n[0] + h[0], n[1] + h[1]) && bez.pointOnLine2D(n[0], n[1], u[0], u[1], u[0] + g[0], u[1] + g[1]) || n.length === 3 && !(n[0] === u[0] && n[1] === u[1] && n[2] === u[2]) && bez.pointOnLine3D(n[0], n[1], n[2], u[0], u[1], u[2], n[0] + h[0], n[1] + h[1], n[2] + h[2]) && bez.pointOnLine3D(n[0], n[1], n[2], u[0], u[1], u[2], u[0] + g[0], u[1] + g[1], u[2] + g[2])) && (e.k[a].to = null, e.k[a].ti = null), n[0] === u[0] && n[1] === u[1] && h[0] === 0 && h[1] === 0 && g[0] === 0 && g[1] === 0 && (n.length === 2 || n[2] === u[2] && h[2] === 0 && g[2] === 0) && (e.k[a].to = null, e.k[a].ti = null));
            this.effectsSequence = [
                getValueAtCurrentTime.bind(this)
            ], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
            var v = e.k[0].s.length;
            for(this.v = createTypedArray("float32", v), this.pv = createTypedArray("float32", v), a = 0; a < v; a += 1)this.v[a] = initFrame, this.pv[a] = initFrame;
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray("float32", v)
            }, this.addEffect = addEffect;
        }
        var PropertyFactory = function() {
            function t(r, i, a, s, n) {
                i.sid && (i = r.globalData.slotManager.getProp(i));
                var u;
                if (!i.k.length) u = new ValueProperty(r, i, s, n);
                else if (typeof i.k[0] == "number") u = new MultiDimensionalProperty(r, i, s, n);
                else switch(a){
                    case 0:
                        u = new KeyframedValueProperty(r, i, s, n);
                        break;
                    case 1:
                        u = new KeyframedMultidimensionalProperty(r, i, s, n);
                        break;
                }
                return u.effectsSequence.length && n.addDynamicProperty(u), u;
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
            for(var r = 0; r < e;)this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1;
        }, ShapePath.prototype.setLength = function(t) {
            for(; this._maxLength < t;)this.doubleArrayLength();
            this._length = t;
        }, ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
        }, ShapePath.prototype.setXYAt = function(t, e, r, i, a) {
            var s;
            switch(this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r){
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
            (!s[i] || s[i] && !a) && (s[i] = pointPool.newElement()), s[i][0] = t, s[i][1] = e;
        }, ShapePath.prototype.setTripleAt = function(t, e, r, i, a, s, n, u) {
            this.setXYAt(t, e, "v", n, u), this.setXYAt(r, i, "o", n, u), this.setXYAt(a, s, "i", n, u);
        }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v, r = this.o, i = this.i, a = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), a = 1);
            var s = this._length - 1, n = this._length, u;
            for(u = a; u < n; u += 1)t.setTripleAt(e[s][0], e[s][1], i[s][0], i[s][1], r[s][0], r[s][1], u, !1), s -= 1;
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
            function r(a) {
                var s = i.newElement(), n, u = a._length === void 0 ? a.v.length : a._length;
                for(s.setLength(u), s.c = a.c, n = 0; n < u; n += 1)s.setTripleAt(a.v[n][0], a.v[n][1], a.o[n][0], a.o[n][1], a.i[n][0], a.i[n][1], n);
                return s;
            }
            var i = poolFactory(4, t, e);
            return i.clone = r, i;
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
            }, e = 0, r = 4, i = createSizedArray(r);
            function a() {
                var n;
                return e ? (e -= 1, n = i[e]) : n = new ShapeCollection, n;
            }
            function s(n) {
                var u, h = n._length;
                for(u = 0; u < h; u += 1)shapePool.release(n.shapes[u]);
                n._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = n, e += 1;
            }
            return t;
        }(), ShapePropertyFactory = function() {
            var t = -999999;
            function e(p, o, l) {
                var c = l.lastIndex, P, M, T, F, I, R, L, V, G, C = this.keyframes;
                if (p < C[0].t - this.offsetTime) P = C[0].s[0], T = !0, c = 0;
                else if (p >= C[C.length - 1].t - this.offsetTime) P = C[C.length - 1].s ? C[C.length - 1].s[0] : C[C.length - 2].e[0], T = !0;
                else {
                    for(var w = c, _ = C.length - 1, x = !0, f, S, D; x && (f = C[w], S = C[w + 1], !(S.t - this.offsetTime > p));)w < _ - 1 ? w += 1 : x = !1;
                    if (D = this.keyframesMetadata[w] || {}, T = f.h === 1, c = w, !T) {
                        if (p >= S.t - this.offsetTime) V = 1;
                        else if (p < f.t - this.offsetTime) V = 0;
                        else {
                            var k;
                            D.__fnct ? k = D.__fnct : (k = BezierFactory.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y).get, D.__fnct = k), V = k((p - (f.t - this.offsetTime)) / (S.t - this.offsetTime - (f.t - this.offsetTime)));
                        }
                        M = S.s ? S.s[0] : f.e[0];
                    }
                    P = f.s[0];
                }
                for(R = o._length, L = P.i[0].length, l.lastIndex = c, F = 0; F < R; F += 1)for(I = 0; I < L; I += 1)G = T ? P.i[F][I] : P.i[F][I] + (M.i[F][I] - P.i[F][I]) * V, o.i[F][I] = G, G = T ? P.o[F][I] : P.o[F][I] + (M.o[F][I] - P.o[F][I]) * V, o.o[F][I] = G, G = T ? P.v[F][I] : P.v[F][I] + (M.v[F][I] - P.v[F][I]) * V, o.v[F][I] = G;
            }
            function r() {
                var p = this.comp.renderedFrame - this.offsetTime, o = this.keyframes[0].t - this.offsetTime, l = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, c = this._caching.lastFrame;
                return c !== t && (c < o && p < o || c > l && p > l) || (this._caching.lastIndex = c < p ? this._caching.lastIndex : 0, this.interpolateShape(p, this.pv, this._caching)), this._caching.lastFrame = p, this.pv;
            }
            function i() {
                this.paths = this.localShapeCollection;
            }
            function a(p, o) {
                if (p._length !== o._length || p.c !== o.c) return !1;
                var l, c = p._length;
                for(l = 0; l < c; l += 1)if (p.v[l][0] !== o.v[l][0] || p.v[l][1] !== o.v[l][1] || p.o[l][0] !== o.o[l][0] || p.o[l][1] !== o.o[l][1] || p.i[l][0] !== o.i[l][0] || p.i[l][1] !== o.i[l][1]) return !1;
                return !0;
            }
            function s(p) {
                a(this.v, p) || (this.v = shapePool.clone(p), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
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
                    var p;
                    this.kf ? p = this.pv : this.data.ks ? p = this.data.ks.k : p = this.data.pt.k;
                    var o, l = this.effectsSequence.length;
                    for(o = 0; o < l; o += 1)p = this.effectsSequence[o](p);
                    this.setVValue(p), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                }
            }
            function u(p, o, l) {
                this.propType = "shape", this.comp = p.comp, this.container = p, this.elem = p, this.data = o, this.k = !1, this.kf = !1, this._mdf = !1;
                var c = l === 3 ? o.pt.k : o.ks.k;
                this.v = shapePool.clone(c), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
            }
            function h(p) {
                this.effectsSequence.push(p), this.container.addDynamicProperty(this);
            }
            u.prototype.interpolateShape = e, u.prototype.getValue = n, u.prototype.setVValue = s, u.prototype.addEffect = h;
            function g(p, o, l) {
                this.propType = "shape", this.comp = p.comp, this.elem = p, this.container = p, this.offsetTime = p.data.st, this.keyframes = l === 3 ? o.pt.k : o.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                var c = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, c), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                    lastFrame: t,
                    lastIndex: 0
                }, this.effectsSequence = [
                    r.bind(this)
                ];
            }
            g.prototype.getValue = n, g.prototype.interpolateShape = e, g.prototype.setVValue = s, g.prototype.addEffect = h;
            var v = function() {
                var p = roundCorner;
                function o(l, c) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = c.d, this.elem = l, this.comp = l.comp, this.frameId = -1, this.initDynamicPropertyContainer(l), this.p = PropertyFactory.getProp(l, c.p, 1, 0, this), this.s = PropertyFactory.getProp(l, c.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                }
                return o.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function() {
                        var l = this.p.v[0], c = this.p.v[1], P = this.s.v[0] / 2, M = this.s.v[1] / 2, T = this.d !== 3, F = this.v;
                        F.v[0][0] = l, F.v[0][1] = c - M, F.v[1][0] = T ? l + P : l - P, F.v[1][1] = c, F.v[2][0] = l, F.v[2][1] = c + M, F.v[3][0] = T ? l - P : l + P, F.v[3][1] = c, F.i[0][0] = T ? l - P * p : l + P * p, F.i[0][1] = c - M, F.i[1][0] = T ? l + P : l - P, F.i[1][1] = c - M * p, F.i[2][0] = T ? l + P * p : l - P * p, F.i[2][1] = c + M, F.i[3][0] = T ? l - P : l + P, F.i[3][1] = c + M * p, F.o[0][0] = T ? l + P * p : l - P * p, F.o[0][1] = c - M, F.o[1][0] = T ? l + P : l - P, F.o[1][1] = c + M * p, F.o[2][0] = T ? l - P * p : l + P * p, F.o[2][1] = c + M, F.o[3][0] = T ? l - P : l + P, F.o[3][1] = c - M * p;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], o), o;
            }(), E = function() {
                function p(o, l) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = o, this.comp = o.comp, this.data = l, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(o), l.sy === 1 ? (this.ir = PropertyFactory.getProp(o, l.ir, 0, 0, this), this.is = PropertyFactory.getProp(o, l.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(o, l.pt, 0, 0, this), this.p = PropertyFactory.getProp(o, l.p, 1, 0, this), this.r = PropertyFactory.getProp(o, l.r, 0, degToRads, this), this.or = PropertyFactory.getProp(o, l.or, 0, 0, this), this.os = PropertyFactory.getProp(o, l.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                }
                return p.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function() {
                        var o = Math.floor(this.pt.v) * 2, l = Math.PI * 2 / o, c = !0, P = this.or.v, M = this.ir.v, T = this.os.v, F = this.is.v, I = 2 * Math.PI * P / (o * 2), R = 2 * Math.PI * M / (o * 2), L, V, G, C, w = -Math.PI / 2;
                        w += this.r.v;
                        var _ = this.data.d === 3 ? -1 : 1;
                        for(this.v._length = 0, L = 0; L < o; L += 1){
                            V = c ? P : M, G = c ? T : F, C = c ? I : R;
                            var x = V * Math.cos(w), f = V * Math.sin(w), S = x === 0 && f === 0 ? 0 : f / Math.sqrt(x * x + f * f), D = x === 0 && f === 0 ? 0 : -x / Math.sqrt(x * x + f * f);
                            x += +this.p.v[0], f += +this.p.v[1], this.v.setTripleAt(x, f, x - S * C * G * _, f - D * C * G * _, x + S * C * G * _, f + D * C * G * _, L, !0), c = !c, w += l * _;
                        }
                    },
                    convertPolygonToPath: function() {
                        var o = Math.floor(this.pt.v), l = Math.PI * 2 / o, c = this.or.v, P = this.os.v, M = 2 * Math.PI * c / (o * 4), T, F = -Math.PI * .5, I = this.data.d === 3 ? -1 : 1;
                        for(F += this.r.v, this.v._length = 0, T = 0; T < o; T += 1){
                            var R = c * Math.cos(F), L = c * Math.sin(F), V = R === 0 && L === 0 ? 0 : L / Math.sqrt(R * R + L * L), G = R === 0 && L === 0 ? 0 : -R / Math.sqrt(R * R + L * L);
                            R += +this.p.v[0], L += +this.p.v[1], this.v.setTripleAt(R, L, R - V * M * P * I, L - G * M * P * I, R + V * M * P * I, L + G * M * P * I, T, !0), F += l * I;
                        }
                        this.paths.length = 0, this.paths[0] = this.v;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], p), p;
            }(), m = function() {
                function p(o, l) {
                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = o, this.comp = o.comp, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(o), this.p = PropertyFactory.getProp(o, l.p, 1, 0, this), this.s = PropertyFactory.getProp(o, l.s, 1, 0, this), this.r = PropertyFactory.getProp(o, l.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                }
                return p.prototype = {
                    convertRectToPath: function() {
                        var o = this.p.v[0], l = this.p.v[1], c = this.s.v[0] / 2, P = this.s.v[1] / 2, M = bmMin(c, P, this.r.v), T = M * (1 - roundCorner);
                        this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(o + c, l - P + M, o + c, l - P + M, o + c, l - P + T, 0, !0), this.v.setTripleAt(o + c, l + P - M, o + c, l + P - T, o + c, l + P - M, 1, !0), M !== 0 ? (this.v.setTripleAt(o + c - M, l + P, o + c - M, l + P, o + c - T, l + P, 2, !0), this.v.setTripleAt(o - c + M, l + P, o - c + T, l + P, o - c + M, l + P, 3, !0), this.v.setTripleAt(o - c, l + P - M, o - c, l + P - M, o - c, l + P - T, 4, !0), this.v.setTripleAt(o - c, l - P + M, o - c, l - P + T, o - c, l - P + M, 5, !0), this.v.setTripleAt(o - c + M, l - P, o - c + M, l - P, o - c + T, l - P, 6, !0), this.v.setTripleAt(o + c - M, l - P, o + c - T, l - P, o + c - M, l - P, 7, !0)) : (this.v.setTripleAt(o - c, l + P, o - c + T, l + P, o - c, l + P, 2), this.v.setTripleAt(o - c, l - P, o - c, l - P + T, o - c, l - P, 3))) : (this.v.setTripleAt(o + c, l - P + M, o + c, l - P + T, o + c, l - P + M, 0, !0), M !== 0 ? (this.v.setTripleAt(o + c - M, l - P, o + c - M, l - P, o + c - T, l - P, 1, !0), this.v.setTripleAt(o - c + M, l - P, o - c + T, l - P, o - c + M, l - P, 2, !0), this.v.setTripleAt(o - c, l - P + M, o - c, l - P + M, o - c, l - P + T, 3, !0), this.v.setTripleAt(o - c, l + P - M, o - c, l + P - T, o - c, l + P - M, 4, !0), this.v.setTripleAt(o - c + M, l + P, o - c + M, l + P, o - c + T, l + P, 5, !0), this.v.setTripleAt(o + c - M, l + P, o + c - T, l + P, o + c - M, l + P, 6, !0), this.v.setTripleAt(o + c, l + P - M, o + c, l + P - M, o + c, l + P - T, 7, !0)) : (this.v.setTripleAt(o - c, l - P, o - c + T, l - P, o - c, l - P, 1, !0), this.v.setTripleAt(o - c, l + P, o - c, l + P - T, o - c, l + P, 2, !0), this.v.setTripleAt(o + c, l + P, o + c - T, l + P, o + c, l + P, 3, !0)));
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                    },
                    reset: i
                }, extendPrototype([
                    DynamicPropertyContainer
                ], p), p;
            }();
            function b(p, o, l) {
                var c;
                if (l === 3 || l === 4) {
                    var P = l === 3 ? o.pt : o.ks, M = P.k;
                    M.length ? c = new g(p, o, l) : c = new u(p, o, l);
                } else l === 5 ? c = new m(p, o) : l === 6 ? c = new v(p, o) : l === 7 && (c = new E(p, o));
                return c.k && p.addDynamicProperty(c), c;
            }
            function y() {
                return u;
            }
            function d() {
                return g;
            }
            var A = {};
            return A.getShapeProp = b, A.getConstructorFunction = y, A.getKeyframedConstructorFunction = d, A;
        }(), Matrix = function() {
            var t = Math.cos, e = Math.sin, r = Math.tan, i = Math.round;
            function a() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
            }
            function s(f) {
                if (f === 0) return this;
                var S = t(f), D = e(f);
                return this._t(S, -D, 0, 0, D, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function n(f) {
                if (f === 0) return this;
                var S = t(f), D = e(f);
                return this._t(1, 0, 0, 0, 0, S, -D, 0, 0, D, S, 0, 0, 0, 0, 1);
            }
            function u(f) {
                if (f === 0) return this;
                var S = t(f), D = e(f);
                return this._t(S, 0, D, 0, 0, 1, 0, 0, -D, 0, S, 0, 0, 0, 0, 1);
            }
            function h(f) {
                if (f === 0) return this;
                var S = t(f), D = e(f);
                return this._t(S, -D, 0, 0, D, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function g(f, S) {
                return this._t(1, S, f, 1, 0, 0);
            }
            function v(f, S) {
                return this.shear(r(f), r(S));
            }
            function E(f, S) {
                var D = t(S), k = e(S);
                return this._t(D, k, 0, 0, -k, D, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(f), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(D, -k, 0, 0, k, D, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function m(f, S, D) {
                return !D && D !== 0 && (D = 1), f === 1 && S === 1 && D === 1 ? this : this._t(f, 0, 0, 0, 0, S, 0, 0, 0, 0, D, 0, 0, 0, 0, 1);
            }
            function b(f, S, D, k, O, B, j, N, H, $, X, Q, Z, W, K, q) {
                return this.props[0] = f, this.props[1] = S, this.props[2] = D, this.props[3] = k, this.props[4] = O, this.props[5] = B, this.props[6] = j, this.props[7] = N, this.props[8] = H, this.props[9] = $, this.props[10] = X, this.props[11] = Q, this.props[12] = Z, this.props[13] = W, this.props[14] = K, this.props[15] = q, this;
            }
            function y(f, S, D) {
                return D = D || 0, f !== 0 || S !== 0 || D !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, f, S, D, 1) : this;
            }
            function d(f, S, D, k, O, B, j, N, H, $, X, Q, Z, W, K, q) {
                var z = this.props;
                if (f === 1 && S === 0 && D === 0 && k === 0 && O === 0 && B === 1 && j === 0 && N === 0 && H === 0 && $ === 0 && X === 1 && Q === 0) return z[12] = z[12] * f + z[15] * Z, z[13] = z[13] * B + z[15] * W, z[14] = z[14] * X + z[15] * K, z[15] *= q, this._identityCalculated = !1, this;
                var et = z[0], st = z[1], rt = z[2], tt = z[3], it = z[4], at = z[5], Y = z[6], nt = z[7], ot = z[8], J = z[9], ht = z[10], U = z[11], lt = z[12], pt = z[13], ft = z[14], mt = z[15];
                return z[0] = et * f + st * O + rt * H + tt * Z, z[1] = et * S + st * B + rt * $ + tt * W, z[2] = et * D + st * j + rt * X + tt * K, z[3] = et * k + st * N + rt * Q + tt * q, z[4] = it * f + at * O + Y * H + nt * Z, z[5] = it * S + at * B + Y * $ + nt * W, z[6] = it * D + at * j + Y * X + nt * K, z[7] = it * k + at * N + Y * Q + nt * q, z[8] = ot * f + J * O + ht * H + U * Z, z[9] = ot * S + J * B + ht * $ + U * W, z[10] = ot * D + J * j + ht * X + U * K, z[11] = ot * k + J * N + ht * Q + U * q, z[12] = lt * f + pt * O + ft * H + mt * Z, z[13] = lt * S + pt * B + ft * $ + mt * W, z[14] = lt * D + pt * j + ft * X + mt * K, z[15] = lt * k + pt * N + ft * Q + mt * q, this._identityCalculated = !1, this;
            }
            function A(f) {
                var S = f.props;
                return this.transform(S[0], S[1], S[2], S[3], S[4], S[5], S[6], S[7], S[8], S[9], S[10], S[11], S[12], S[13], S[14], S[15]);
            }
            function p() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
            }
            function o(f) {
                for(var S = 0; S < 16;){
                    if (f.props[S] !== this.props[S]) return !1;
                    S += 1;
                }
                return !0;
            }
            function l(f) {
                var S;
                for(S = 0; S < 16; S += 1)f.props[S] = this.props[S];
                return f;
            }
            function c(f) {
                var S;
                for(S = 0; S < 16; S += 1)this.props[S] = f[S];
            }
            function P(f, S, D) {
                return {
                    x: f * this.props[0] + S * this.props[4] + D * this.props[8] + this.props[12],
                    y: f * this.props[1] + S * this.props[5] + D * this.props[9] + this.props[13],
                    z: f * this.props[2] + S * this.props[6] + D * this.props[10] + this.props[14]
                };
            }
            function M(f, S, D) {
                return f * this.props[0] + S * this.props[4] + D * this.props[8] + this.props[12];
            }
            function T(f, S, D) {
                return f * this.props[1] + S * this.props[5] + D * this.props[9] + this.props[13];
            }
            function F(f, S, D) {
                return f * this.props[2] + S * this.props[6] + D * this.props[10] + this.props[14];
            }
            function I() {
                var f = this.props[0] * this.props[5] - this.props[1] * this.props[4], S = this.props[5] / f, D = -this.props[1] / f, k = -this.props[4] / f, O = this.props[0] / f, B = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / f, j = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / f, N = new Matrix;
                return N.props[0] = S, N.props[1] = D, N.props[4] = k, N.props[5] = O, N.props[12] = B, N.props[13] = j, N;
            }
            function R(f) {
                var S = this.getInverseMatrix();
                return S.applyToPointArray(f[0], f[1], f[2] || 0);
            }
            function L(f) {
                var S, D = f.length, k = [];
                for(S = 0; S < D; S += 1)k[S] = R(f[S]);
                return k;
            }
            function V(f, S, D) {
                var k = createTypedArray("float32", 6);
                if (this.isIdentity()) k[0] = f[0], k[1] = f[1], k[2] = S[0], k[3] = S[1], k[4] = D[0], k[5] = D[1];
                else {
                    var O = this.props[0], B = this.props[1], j = this.props[4], N = this.props[5], H = this.props[12], $ = this.props[13];
                    k[0] = f[0] * O + f[1] * j + H, k[1] = f[0] * B + f[1] * N + $, k[2] = S[0] * O + S[1] * j + H, k[3] = S[0] * B + S[1] * N + $, k[4] = D[0] * O + D[1] * j + H, k[5] = D[0] * B + D[1] * N + $;
                }
                return k;
            }
            function G(f, S, D) {
                var k;
                return this.isIdentity() ? k = [
                    f,
                    S,
                    D
                ] : k = [
                    f * this.props[0] + S * this.props[4] + D * this.props[8] + this.props[12],
                    f * this.props[1] + S * this.props[5] + D * this.props[9] + this.props[13],
                    f * this.props[2] + S * this.props[6] + D * this.props[10] + this.props[14]
                ], k;
            }
            function C(f, S) {
                if (this.isIdentity()) return f + "," + S;
                var D = this.props;
                return Math.round((f * D[0] + S * D[4] + D[12]) * 100) / 100 + "," + Math.round((f * D[1] + S * D[5] + D[13]) * 100) / 100;
            }
            function w() {
                for(var f = 0, S = this.props, D = "matrix3d(", k = 1e4; f < 16;)D += i(S[f] * k) / k, D += f === 15 ? ")" : ",", f += 1;
                return D;
            }
            function _(f) {
                var S = 1e4;
                return f < 1e-6 && f > 0 || f > -0.000001 && f < 0 ? i(f * S) / S : f;
            }
            function x() {
                var f = this.props, S = _(f[0]), D = _(f[1]), k = _(f[4]), O = _(f[5]), B = _(f[12]), j = _(f[13]);
                return "matrix(" + S + "," + D + "," + k + "," + O + "," + B + "," + j + ")";
            }
            return function() {
                this.reset = a, this.rotate = s, this.rotateX = n, this.rotateY = u, this.rotateZ = h, this.skew = v, this.skewFromAxis = E, this.shear = g, this.scale = m, this.setTransform = b, this.translate = y, this.transform = d, this.multiply = A, this.applyToPoint = P, this.applyToX = M, this.applyToY = T, this.applyToZ = F, this.applyToPointArray = G, this.applyToTriplePoints = V, this.applyToPointStringified = C, this.toCSS = w, this.to2dCSS = x, this.clone = l, this.cloneFromProps = c, this.equals = o, this.inversePoints = L, this.inversePoint = R, this.getInverseMatrix = I, this._t = this.transform, this.isIdentity = p, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
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
            document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
        }
        function getQueryVariable(t) {
            for(var e = queryString.split("&"), r = 0; r < e.length; r += 1){
                var i = e[r].split("=");
                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
            }
            return null;
        }
        var queryString = "";
        var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || {
            src: ""
        };
        queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            !((typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u") && !(typeof define == "function" && define.amd) && (window.bodymovin = lottie);
        } catch (t) {}
        var ShapeModifiers = function() {
            var t = {}, e = {};
            t.registerModifier = r, t.getModifier = i;
            function r(a, s) {
                e[a] || (e[a] = s);
            }
            function i(a, s, n) {
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
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, a) {
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
            var n = [], u, h = s.length, g;
            for(u = 0; u < h; u += 1)if (g = s[u], !(g.e * a < i || g.s * a > i + r)) {
                var v, E;
                g.s * a <= i ? v = 0 : v = (g.s * a - i) / r, g.e * a >= i + r ? E = 1 : E = (g.e * a - i) / r, n.push([
                    v,
                    E
                ]);
            }
            return n.length || n.push([
                0,
                0
            ]), n;
        }, TrimModifier.prototype.releasePathsData = function(t) {
            var e, r = t.length;
            for(e = 0; e < r; e += 1)segmentsLengthPool.release(t[e]);
            return t.length = 0, t;
        }, TrimModifier.prototype.processShapes = function(t) {
            var e, r;
            if (this._mdf || t) {
                var i = this.o.v % 360 / 360;
                if (i < 0 && (i += 1), this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i, this.e.v > 1 ? r = 1 + i : this.e.v < 0 ? r = 0 + i : r = this.e.v + i, e > r) {
                    var a = e;
                    e = r, r = a;
                }
                e = Math.round(e * 1e4) * 1e-4, r = Math.round(r * 1e4) * 1e-4, this.sValue = e, this.eValue = r;
            } else e = this.sValue, r = this.eValue;
            var s, n, u = this.shapes.length, h, g, v, E, m, b = 0;
            if (r === e) for(n = 0; n < u; n += 1)this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
            else if (r === 1 && e === 0 || r === 0 && e === 1) {
                if (this._mdf) for(n = 0; n < u; n += 1)this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0;
            } else {
                var y = [], d, A;
                for(n = 0; n < u; n += 1)if (d = this.shapes[n], !d.shape._mdf && !this._mdf && !t && this.m !== 2) d.shape.paths = d.localShapeCollection;
                else {
                    if (s = d.shape.paths, g = s._length, m = 0, !d.shape._mdf && d.pathsData.length) m = d.totalShapeLength;
                    else {
                        for(v = this.releasePathsData(d.pathsData), h = 0; h < g; h += 1)E = bez.getSegmentsLength(s.shapes[h]), v.push(E), m += E.totalLength;
                        d.totalShapeLength = m, d.pathsData = v;
                    }
                    b += m, d.shape._mdf = !0;
                }
                var p = e, o = r, l = 0, c;
                for(n = u - 1; n >= 0; n -= 1)if (d = this.shapes[n], d.shape._mdf) {
                    for(A = d.localShapeCollection, A.releaseShapes(), this.m === 2 && u > 1 ? (c = this.calculateShapeEdges(e, r, d.totalShapeLength, l, b), l += d.totalShapeLength) : c = [
                        [
                            p,
                            o
                        ]
                    ], g = c.length, h = 0; h < g; h += 1){
                        p = c[h][0], o = c[h][1], y.length = 0, o <= 1 ? y.push({
                            s: d.totalShapeLength * p,
                            e: d.totalShapeLength * o
                        }) : p >= 1 ? y.push({
                            s: d.totalShapeLength * (p - 1),
                            e: d.totalShapeLength * (o - 1)
                        }) : (y.push({
                            s: d.totalShapeLength * p,
                            e: d.totalShapeLength
                        }), y.push({
                            s: 0,
                            e: d.totalShapeLength * (o - 1)
                        }));
                        var P = this.addShapes(d, y[0]);
                        if (y[0].s !== y[0].e) {
                            if (y.length > 1) {
                                var M = d.shape.paths.shapes[d.shape.paths._length - 1];
                                if (M.c) {
                                    var T = P.pop();
                                    this.addPaths(P, A), P = this.addShapes(d, y[1], T);
                                } else this.addPaths(P, A), P = this.addShapes(d, y[1]);
                            }
                            this.addPaths(P, A);
                        }
                    }
                    d.shape.paths = A;
                }
            }
        }, TrimModifier.prototype.addPaths = function(t, e) {
            var r, i = t.length;
            for(r = 0; r < i; r += 1)e.addShape(t[r]);
        }, TrimModifier.prototype.addSegment = function(t, e, r, i, a, s, n) {
            a.setXYAt(e[0], e[1], "o", s), a.setXYAt(r[0], r[1], "i", s + 1), n && a.setXYAt(t[0], t[1], "v", s), a.setXYAt(i[0], i[1], "v", s + 1);
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
            e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1);
        }, TrimModifier.prototype.addShapes = function(t, e, r) {
            var i = t.pathsData, a = t.shape.paths.shapes, s, n = t.shape.paths._length, u, h, g = 0, v, E, m, b, y = [], d, A = !0;
            for(r ? (E = r._length, d = r._length) : (r = shapePool.newElement(), E = 0, d = 0), y.push(r), s = 0; s < n; s += 1){
                for(m = i[s].lengths, r.c = a[s].c, h = a[s].c ? m.length : m.length + 1, u = 1; u < h; u += 1)if (v = m[u - 1], g + v.addedLength < e.s) g += v.addedLength, r.c = !1;
                else if (g > e.e) {
                    r.c = !1;
                    break;
                } else e.s <= g && e.e >= g + v.addedLength ? (this.addSegment(a[s].v[u - 1], a[s].o[u - 1], a[s].i[u], a[s].v[u], r, E, A), A = !1) : (b = bez.getNewSegment(a[s].v[u - 1], a[s].v[u], a[s].o[u - 1], a[s].i[u], (e.s - g) / v.addedLength, (e.e - g) / v.addedLength, m[u - 1]), this.addSegmentFromArray(b, r, E, A), A = !1, r.c = !1), g += v.addedLength, E += 1;
                if (a[s].c && m.length) {
                    if (v = m[u - 1], g <= e.e) {
                        var p = m[u - 1].addedLength;
                        e.s <= g && e.e >= g + p ? (this.addSegment(a[s].v[u - 1], a[s].o[u - 1], a[s].i[0], a[s].v[0], r, E, A), A = !1) : (b = bez.getNewSegment(a[s].v[u - 1], a[s].v[0], a[s].o[u - 1], a[s].i[0], (e.s - g) / p, (e.e - g) / p, m[u - 1]), this.addSegmentFromArray(b, r, E, A), A = !1, r.c = !1);
                    } else r.c = !1;
                    g += v.addedLength, E += 1;
                }
                if (r._length && (r.setXYAt(r.v[d][0], r.v[d][1], "i", d), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), g > e.e) break;
                s < n - 1 && (r = shapePool.newElement(), A = !0, y.push(r), E = 0);
            }
            return y;
        };
        function PuckerAndBloatModifier() {}
        extendPrototype([
            ShapeModifier
        ], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
            var r = e / 100, i = [
                0,
                0
            ], a = t._length, s = 0;
            for(s = 0; s < a; s += 1)i[0] += t.v[s][0], i[1] += t.v[s][1];
            i[0] /= a, i[1] /= a;
            var n = shapePool.newElement();
            n.c = t.c;
            var u, h, g, v, E, m;
            for(s = 0; s < a; s += 1)u = t.v[s][0] + (i[0] - t.v[s][0]) * r, h = t.v[s][1] + (i[1] - t.v[s][1]) * r, g = t.o[s][0] + (i[0] - t.o[s][0]) * -r, v = t.o[s][1] + (i[1] - t.o[s][1]) * -r, E = t.i[s][0] + (i[0] - t.i[s][0]) * -r, m = t.i[s][1] + (i[1] - t.i[s][1]) * -r, n.setTripleAt(u, h, g, v, E, m, s);
            return n;
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, a, s, n = this.amount.v;
            if (n !== 0) {
                var u, h;
                for(r = 0; r < i; r += 1){
                    if (u = this.shapes[r], h = u.localShapeCollection, !(!u.shape._mdf && !this._mdf && !t)) for(h.releaseShapes(), u.shape._mdf = !0, e = u.shape.paths.shapes, s = u.shape.paths._length, a = 0; a < s; a += 1)h.addShape(this.processPath(e[a], n));
                    u.shape.paths = u.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        var TransformPropertyFactory = function() {
            var t = [
                0,
                0
            ];
            function e(h) {
                var g = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || g, this.a && h.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && h.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && h.skewFromAxis(-this.sk.v, this.sa.v), this.r ? h.rotate(-this.r.v) : h.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? h.translate(this.px.v, this.py.v, -this.pz.v) : h.translate(this.px.v, this.py.v, 0) : h.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            function r(h) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || h) {
                        var g;
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var v, E;
                            if (g = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (v = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / g, 0), E = this.p.getValueAtTime(this.p.keyframes[0].t / g, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (v = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / g, 0), E = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / g, 0)) : (v = this.p.pv, E = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / g, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                v = [], E = [];
                                var m = this.px, b = this.py;
                                m._caching.lastFrame + m.offsetTime <= m.keyframes[0].t ? (v[0] = m.getValueAtTime((m.keyframes[0].t + .01) / g, 0), v[1] = b.getValueAtTime((b.keyframes[0].t + .01) / g, 0), E[0] = m.getValueAtTime(m.keyframes[0].t / g, 0), E[1] = b.getValueAtTime(b.keyframes[0].t / g, 0)) : m._caching.lastFrame + m.offsetTime >= m.keyframes[m.keyframes.length - 1].t ? (v[0] = m.getValueAtTime(m.keyframes[m.keyframes.length - 1].t / g, 0), v[1] = b.getValueAtTime(b.keyframes[b.keyframes.length - 1].t / g, 0), E[0] = m.getValueAtTime((m.keyframes[m.keyframes.length - 1].t - .01) / g, 0), E[1] = b.getValueAtTime((b.keyframes[b.keyframes.length - 1].t - .01) / g, 0)) : (v = [
                                    m.pv,
                                    b.pv
                                ], E[0] = m.getValueAtTime((m._caching.lastFrame + m.offsetTime - .01) / g, m.offsetTime), E[1] = b.getValueAtTime((b._caching.lastFrame + b.offsetTime - .01) / g, b.offsetTime));
                            } else E = t, v = E;
                            this.v.rotate(-Math.atan2(v[1] - E[1], v[0] - E[0]));
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    }
                    this.frameId = this.elem.globalData.frameId;
                }
            }
            function i() {
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
            function s(h) {
                this._addDynamicProperty(h), this.elem.addDynamicProperty(h), this._isDirty = !0;
            }
            function n(h, g, v) {
                if (this.elem = h, this.frameId = -1, this.propType = "transform", this.data = g, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(v || h), g.p && g.p.s ? (this.px = PropertyFactory.getProp(h, g.p.x, 0, 0, this), this.py = PropertyFactory.getProp(h, g.p.y, 0, 0, this), g.p.z && (this.pz = PropertyFactory.getProp(h, g.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(h, g.p || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), g.rx) {
                    if (this.rx = PropertyFactory.getProp(h, g.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(h, g.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(h, g.rz, 0, degToRads, this), g.or.k[0].ti) {
                        var E, m = g.or.k.length;
                        for(E = 0; E < m; E += 1)g.or.k[E].to = null, g.or.k[E].ti = null;
                    }
                    this.or = PropertyFactory.getProp(h, g.or, 1, degToRads, this), this.or.sh = !0;
                } else this.r = PropertyFactory.getProp(h, g.r || {
                    k: 0
                }, 0, degToRads, this);
                g.sk && (this.sk = PropertyFactory.getProp(h, g.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(h, g.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(h, g.a || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), this.s = PropertyFactory.getProp(h, g.s || {
                    k: [
                        100,
                        100,
                        100
                    ]
                }, 1, .01, this), g.o ? this.o = PropertyFactory.getProp(h, g.o, 0, .01, h) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
            }
            n.prototype = {
                applyToMatrix: e,
                getValue: r,
                precalculateMatrix: i,
                autoOrient: a
            }, extendPrototype([
                DynamicPropertyContainer
            ], n), n.prototype.addDynamicProperty = s, n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
            function u(h, g, v) {
                return new n(h, g, v);
            }
            return {
                getTransformProperty: u
            };
        }();
        function RepeaterModifier() {}
        extendPrototype([
            ShapeModifier
        ], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix;
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, a, s) {
            var n = s ? -1 : 1, u = i.s.v[0] + (1 - i.s.v[0]) * (1 - a), h = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
            t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(s ? 1 / u : u, s ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
        }, RepeaterModifier.prototype.init = function(t, e, r, i) {
            for(this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;)r -= 1, this._elements.unshift(e[r]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, RepeaterModifier.prototype.resetElements = function(t) {
            var e, r = t.length;
            for(e = 0; e < r; e += 1)t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it);
        }, RepeaterModifier.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e;
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
            var r, i = t.length;
            for(r = 0; r < i; r += 1)t[r]._render = e, t[r].ty === "gr" && this.changeGroupRender(t[r].it, e);
        }, RepeaterModifier.prototype.processShapes = function(t) {
            var e, r, i, a, s, n = !1;
            if (this._mdf || t) {
                var u = Math.ceil(this.c.v);
                if (this._groups.length < u) {
                    for(; this._groups.length < u;){
                        var h = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        h.it.push({
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
                        }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1;
                    }
                    this.elem.reloadShapes(), n = !0;
                }
                s = 0;
                var g;
                for(i = 0; i <= this._groups.length - 1; i += 1){
                    if (g = s < u, this._groups[i]._render = g, this.changeGroupRender(this._groups[i].it, g), !g) {
                        var v = this.elemsData[i].it, E = v[v.length - 1];
                        E.transform.op.v !== 0 ? (E.transform.op._mdf = !0, E.transform.op.v = 0) : E.transform.op._mdf = !1;
                    }
                    s += 1;
                }
                this._currentCopies = u;
                var m = this.o.v, b = m % 1, y = m > 0 ? Math.floor(m) : Math.ceil(m), d = this.pMatrix.props, A = this.rMatrix.props, p = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var o = 0;
                if (m > 0) {
                    for(; o < y;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), o += 1;
                    b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, b, !1), o += b);
                } else if (m < 0) {
                    for(; o > y;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), o -= 1;
                    b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -b, !0), o -= b);
                }
                i = this.data.m === 1 ? 0 : this._currentCopies - 1, a = this.data.m === 1 ? 1 : -1, s = this._currentCopies;
                for(var l, c; s;){
                    if (e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, c = r.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), o !== 0) {
                        for((i !== 0 && a === 1 || i !== this._currentCopies - 1 && a === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(A[0], A[1], A[2], A[3], A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12], A[13], A[14], A[15]), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), l = 0; l < c; l += 1)r[l] = this.matrix.props[l];
                        this.matrix.reset();
                    } else for(this.matrix.reset(), l = 0; l < c; l += 1)r[l] = this.matrix.props[l];
                    o += 1, s -= 1, i += a;
                }
            } else for(s = this._currentCopies, i = 0, a = 1; s;)e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, i += a;
            return n;
        }, RepeaterModifier.prototype.addShape = function() {};
        function RoundCornersModifier() {}
        extendPrototype([
            ShapeModifier
        ], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
            var r = shapePool.newElement();
            r.c = t.c;
            var i, a = t._length, s, n, u, h, g, v, E = 0, m, b, y, d, A, p;
            for(i = 0; i < a; i += 1)s = t.v[i], u = t.o[i], n = t.i[i], s[0] === u[0] && s[1] === u[1] && s[0] === n[0] && s[1] === n[1] ? (i === 0 || i === a - 1) && !t.c ? (r.setTripleAt(s[0], s[1], u[0], u[1], n[0], n[1], E), E += 1) : (i === 0 ? h = t.v[a - 1] : h = t.v[i - 1], g = Math.sqrt(Math.pow(s[0] - h[0], 2) + Math.pow(s[1] - h[1], 2)), v = g ? Math.min(g / 2, e) / g : 0, A = s[0] + (h[0] - s[0]) * v, m = A, p = s[1] - (s[1] - h[1]) * v, b = p, y = m - (m - s[0]) * roundCorner, d = b - (b - s[1]) * roundCorner, r.setTripleAt(m, b, y, d, A, p, E), E += 1, i === a - 1 ? h = t.v[0] : h = t.v[i + 1], g = Math.sqrt(Math.pow(s[0] - h[0], 2) + Math.pow(s[1] - h[1], 2)), v = g ? Math.min(g / 2, e) / g : 0, y = s[0] + (h[0] - s[0]) * v, m = y, d = s[1] + (h[1] - s[1]) * v, b = d, A = m - (m - s[0]) * roundCorner, p = b - (b - s[1]) * roundCorner, r.setTripleAt(m, b, y, d, A, p, E), E += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], E), E += 1);
            return r;
        }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, a, s, n = this.rd.v;
            if (n !== 0) {
                var u, h;
                for(r = 0; r < i; r += 1){
                    if (u = this.shapes[r], h = u.localShapeCollection, !(!u.shape._mdf && !this._mdf && !t)) for(h.releaseShapes(), u.shape._mdf = !0, e = u.shape.paths.shapes, s = u.shape.paths._length, a = 0; a < s; a += 1)h.addShape(this.processPath(e[a], n));
                    u.shape.paths = u.localShapeCollection;
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
        function lerp(t, e, r) {
            return t * (1 - r) + e * r;
        }
        function lerpPoint(t, e, r) {
            return [
                lerp(t[0], e[0], r),
                lerp(t[1], e[1], r)
            ];
        }
        function quadRoots(t, e, r) {
            if (t === 0) return [];
            var i = e * e - 4 * t * r;
            if (i < 0) return [];
            var a = -e / (2 * t);
            if (i === 0) return [
                a
            ];
            var s = Math.sqrt(i) / (2 * t);
            return [
                a - s,
                a + s
            ];
        }
        function polynomialCoefficients(t, e, r, i) {
            return [
                -t + 3 * e - 3 * r + i,
                3 * t - 6 * e + 3 * r,
                -3 * t + 3 * e,
                t
            ];
        }
        function singlePoint(t) {
            return new PolynomialBezier(t, t, t, t, !1);
        }
        function PolynomialBezier(t, e, r, i, a) {
            a && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), a && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
            var s = polynomialCoefficients(t[0], e[0], r[0], i[0]), n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
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
                r,
                i
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
            var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
            if (r < 0) return [];
            var i = Math.sqrt(r);
            return floatZero(i) ? i > 0 && i < 1 ? [
                e
            ] : [] : [
                e - i,
                e + i
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
            var e = lerpPoint(this.points[0], this.points[1], t), r = lerpPoint(this.points[1], this.points[2], t), i = lerpPoint(this.points[2], this.points[3], t), a = lerpPoint(e, r, t), s = lerpPoint(r, i, t), n = lerpPoint(a, s, t);
            return [
                new PolynomialBezier(this.points[0], e, a, n, !0),
                new PolynomialBezier(n, s, i, this.points[3], !0)
            ];
        };
        function extrema(t, e) {
            var r = t.points[0][e], i = t.points[t.points.length - 1][e];
            if (r > i) {
                var a = i;
                i = r, r = a;
            }
            for(var s = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < s.length; n += 1)if (s[n] > 0 && s[n] < 1) {
                var u = t.point(s[n])[e];
                u < r ? r = u : u > i && (i = u);
            }
            return {
                min: r,
                max: i
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
        function intersectData(t, e, r) {
            var i = t.boundingBox();
            return {
                cx: i.cx,
                cy: i.cy,
                width: i.width,
                height: i.height,
                bez: t,
                t: (e + r) / 2,
                t1: e,
                t2: r
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
        function intersectsImpl(t, e, r, i, a, s) {
            if (boxIntersect(t, e)) {
                if (r >= s || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
                    a.push([
                        t.t,
                        e.t
                    ]);
                    return;
                }
                var n = splitData(t), u = splitData(e);
                intersectsImpl(n[0], u[0], r + 1, i, a, s), intersectsImpl(n[0], u[1], r + 1, i, a, s), intersectsImpl(n[1], u[0], r + 1, i, a, s), intersectsImpl(n[1], u[1], r + 1, i, a, s);
            }
        }
        PolynomialBezier.prototype.intersections = function(t, e, r) {
            e === void 0 && (e = 2), r === void 0 && (r = 7);
            var i = [];
            return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i;
        }, PolynomialBezier.shapeSegment = function(t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0);
        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0);
        };
        function crossProduct(t, e) {
            return [
                t[1] * e[2] - t[2] * e[1],
                t[2] * e[0] - t[0] * e[2],
                t[0] * e[1] - t[1] * e[0]
            ];
        }
        function lineIntersection(t, e, r, i) {
            var a = [
                t[0],
                t[1],
                1
            ], s = [
                e[0],
                e[1],
                1
            ], n = [
                r[0],
                r[1],
                1
            ], u = [
                i[0],
                i[1],
                1
            ], h = crossProduct(crossProduct(a, s), crossProduct(n, u));
            return floatZero(h[2]) ? null : [
                h[0] / h[2],
                h[1] / h[2]
            ];
        }
        function polarOffset(t, e, r) {
            return [
                t[0] + Math.cos(e) * r,
                t[1] - Math.sin(e) * r
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
        function setPoint(t, e, r, i, a, s, n) {
            var u = r - Math.PI / 2, h = r + Math.PI / 2, g = e[0] + Math.cos(r) * i * a, v = e[1] - Math.sin(r) * i * a;
            t.setTripleAt(g, v, g + Math.cos(u) * s, v - Math.sin(u) * s, g + Math.cos(h) * n, v - Math.sin(h) * n, t.length());
        }
        function getPerpendicularVector(t, e) {
            var r = [
                e[0] - t[0],
                e[1] - t[1]
            ], i = -Math.PI * .5, a = [
                Math.cos(i) * r[0] - Math.sin(i) * r[1],
                Math.sin(i) * r[0] + Math.cos(i) * r[1]
            ];
            return a;
        }
        function getProjectingAngle(t, e) {
            var r = e === 0 ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), a = t.v[r], s = t.v[i], n = getPerpendicularVector(a, s);
            return Math.atan2(0, 1) - Math.atan2(n[1], n[0]);
        }
        function zigZagCorner(t, e, r, i, a, s, n) {
            var u = getProjectingAngle(e, r), h = e.v[r % e._length], g = e.v[r === 0 ? e._length - 1 : r - 1], v = e.v[(r + 1) % e._length], E = s === 2 ? Math.sqrt(Math.pow(h[0] - g[0], 2) + Math.pow(h[1] - g[1], 2)) : 0, m = s === 2 ? Math.sqrt(Math.pow(h[0] - v[0], 2) + Math.pow(h[1] - v[1], 2)) : 0;
            setPoint(t, e.v[r % e._length], u, n, i, m / ((a + 1) * 2), E / ((a + 1) * 2));
        }
        function zigZagSegment(t, e, r, i, a, s) {
            for(var n = 0; n < i; n += 1){
                var u = (n + 1) / (i + 1), h = a === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, g = e.normalAngle(u), v = e.point(u);
                setPoint(t, v, g, s, r, h / ((i + 1) * 2), h / ((i + 1) * 2)), s = -s;
            }
            return s;
        }
        ZigZagModifier.prototype.processPath = function(t, e, r, i) {
            var a = t._length, s = shapePool.newElement();
            if (s.c = t.c, t.c || (a -= 1), a === 0) return s;
            var n = -1, u = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(s, t, 0, e, r, i, n);
            for(var h = 0; h < a; h += 1)n = zigZagSegment(s, u, e, r, i, -n), h === a - 1 && !t.c ? u = null : u = PolynomialBezier.shapeSegment(t, (h + 1) % a), zigZagCorner(s, t, h + 1, e, r, i, n);
            return s;
        }, ZigZagModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, a, s, n = this.amplitude.v, u = Math.max(0, Math.round(this.frequency.v)), h = this.pointsType.v;
            if (n !== 0) {
                var g, v;
                for(r = 0; r < i; r += 1){
                    if (g = this.shapes[r], v = g.localShapeCollection, !(!g.shape._mdf && !this._mdf && !t)) for(v.releaseShapes(), g.shape._mdf = !0, e = g.shape.paths.shapes, s = g.shape.paths._length, a = 0; a < s; a += 1)v.addShape(this.processPath(e[a], n, u, h));
                    g.shape.paths = g.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function linearOffset(t, e, r) {
            var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
            return [
                polarOffset(t, i, r),
                polarOffset(e, i, r)
            ];
        }
        function offsetSegment(t, e) {
            var r, i, a, s, n, u, h;
            h = linearOffset(t.points[0], t.points[1], e), r = h[0], i = h[1], h = linearOffset(t.points[1], t.points[2], e), a = h[0], s = h[1], h = linearOffset(t.points[2], t.points[3], e), n = h[0], u = h[1];
            var g = lineIntersection(r, i, a, s);
            g === null && (g = i);
            var v = lineIntersection(n, u, a, s);
            return v === null && (v = n), new PolynomialBezier(r, g, v, u);
        }
        function joinLines(t, e, r, i, a) {
            var s = e.points[3], n = r.points[0];
            if (i === 3 || pointEqual(s, n)) return s;
            if (i === 2) {
                var u = -e.tangentAngle(1), h = -r.tangentAngle(0) + Math.PI, g = lineIntersection(s, polarOffset(s, u + Math.PI / 2, 100), n, polarOffset(n, u + Math.PI / 2, 100)), v = g ? pointDistance(g, s) : pointDistance(s, n) / 2, E = polarOffset(s, u, 2 * v * roundCorner);
                return t.setXYAt(E[0], E[1], "o", t.length() - 1), E = polarOffset(n, h, 2 * v * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], E[0], E[1], t.length()), n;
            }
            var m = pointEqual(s, e.points[2]) ? e.points[0] : e.points[2], b = pointEqual(n, r.points[1]) ? r.points[3] : r.points[1], y = lineIntersection(m, s, n, b);
            return y && pointDistance(y, s) < a ? (t.setTripleAt(y[0], y[1], y[0], y[1], y[0], y[1], t.length()), y) : s;
        }
        function getIntersection(t, e) {
            var r = t.intersections(e);
            return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null;
        }
        function pruneSegmentIntersection(t, e) {
            var r = t.slice(), i = e.slice(), a = getIntersection(t[t.length - 1], e[0]);
            return a && (r[t.length - 1] = t[t.length - 1].split(a[0])[0], i[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = getIntersection(t[0], e[e.length - 1]), a) ? [
                [
                    t[0].split(a[0])[0]
                ],
                [
                    e[e.length - 1].split(a[1])[1]
                ]
            ] : [
                r,
                i
            ];
        }
        function pruneIntersections(t) {
            for(var e, r = 1; r < t.length; r += 1)e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
            return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
        }
        function offsetSegmentSplit(t, e) {
            var r = t.inflectionPoints(), i, a, s, n;
            if (r.length === 0) return [
                offsetSegment(t, e)
            ];
            if (r.length === 1 || floatEqual(r[1], 1)) return s = t.split(r[0]), i = s[0], a = s[1], [
                offsetSegment(i, e),
                offsetSegment(a, e)
            ];
            s = t.split(r[0]), i = s[0];
            var u = (r[1] - r[0]) / (1 - r[0]);
            return s = s[1].split(u), n = s[0], a = s[1], [
                offsetSegment(i, e),
                offsetSegment(n, e),
                offsetSegment(a, e)
            ];
        }
        function OffsetPathModifier() {}
        extendPrototype([
            ShapeModifier
        ], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
        }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
            var a = shapePool.newElement();
            a.c = t.c;
            var s = t.length();
            t.c || (s -= 1);
            var n, u, h, g = [];
            for(n = 0; n < s; n += 1)h = PolynomialBezier.shapeSegment(t, n), g.push(offsetSegmentSplit(h, e));
            if (!t.c) for(n = s - 1; n >= 0; n -= 1)h = PolynomialBezier.shapeSegmentInverted(t, n), g.push(offsetSegmentSplit(h, e));
            g = pruneIntersections(g);
            var v = null, E = null;
            for(n = 0; n < g.length; n += 1){
                var m = g[n];
                for(E && (v = joinLines(a, E, m[0], r, i)), E = m[m.length - 1], u = 0; u < m.length; u += 1)h = m[u], v && pointEqual(h.points[0], v) ? a.setXYAt(h.points[1][0], h.points[1][1], "o", a.length() - 1) : a.setTripleAt(h.points[0][0], h.points[0][1], h.points[1][0], h.points[1][1], h.points[0][0], h.points[0][1], a.length()), a.setTripleAt(h.points[3][0], h.points[3][1], h.points[3][0], h.points[3][1], h.points[2][0], h.points[2][1], a.length()), v = h.points[3];
            }
            return g.length && joinLines(a, E, g[0][0], r, i), a;
        }, OffsetPathModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, a, s, n = this.amount.v, u = this.miterLimit.v, h = this.lineJoin;
            if (n !== 0) {
                var g, v;
                for(r = 0; r < i; r += 1){
                    if (g = this.shapes[r], v = g.localShapeCollection, !(!g.shape._mdf && !this._mdf && !t)) for(v.releaseShapes(), g.shape._mdf = !0, e = g.shape.paths.shapes, s = g.shape.paths._length, a = 0; a < s; a += 1)v.addShape(this.processPath(e[a], n, h, u));
                    g.shape.paths = g.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function getFontProperties(t) {
            for(var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", a = e.length, s, n = 0; n < a; n += 1)switch(s = e[n].toLowerCase(), s){
                case "italic":
                    i = "italic";
                    break;
                case "bold":
                    r = "700";
                    break;
                case "black":
                    r = "900";
                    break;
                case "medium":
                    r = "500";
                    break;
                case "regular":
                case "normal":
                    r = "400";
                    break;
                case "light":
                case "thin":
                    r = "200";
                    break;
            }
            return {
                style: i,
                weight: t.fWeight || r
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
            }, r = [];
            r = r.concat([
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
            var i = 127988, a = 917631, s = 917601, n = 917626, u = 65039, h = 8205, g = 127462, v = 127487, E = [
                "d83cdffb",
                "d83cdffc",
                "d83cdffd",
                "d83cdffe",
                "d83cdfff"
            ];
            function m(_) {
                var x = _.split(","), f, S = x.length, D = [];
                for(f = 0; f < S; f += 1)x[f] !== "sans-serif" && x[f] !== "monospace" && D.push(x[f]);
                return D.join(",");
            }
            function b(_, x) {
                var f = createTag("span");
                f.setAttribute("aria-hidden", !0), f.style.fontFamily = x;
                var S = createTag("span");
                S.innerText = "giItT1WQy@!-/#", f.style.position = "absolute", f.style.left = "-10000px", f.style.top = "-10000px", f.style.fontSize = "300px", f.style.fontVariant = "normal", f.style.fontStyle = "normal", f.style.fontWeight = "normal", f.style.letterSpacing = "0", f.appendChild(S), document.body.appendChild(f);
                var D = S.offsetWidth;
                return S.style.fontFamily = m(_) + ", " + x, {
                    node: S,
                    w: D,
                    parent: f
                };
            }
            function y() {
                var _, x = this.fonts.length, f, S, D = x;
                for(_ = 0; _ < x; _ += 1)this.fonts[_].loaded ? D -= 1 : this.fonts[_].fOrigin === "n" || this.fonts[_].origin === 0 ? this.fonts[_].loaded = !0 : (f = this.fonts[_].monoCase.node, S = this.fonts[_].monoCase.w, f.offsetWidth !== S ? (D -= 1, this.fonts[_].loaded = !0) : (f = this.fonts[_].sansCase.node, S = this.fonts[_].sansCase.w, f.offsetWidth !== S && (D -= 1, this.fonts[_].loaded = !0)), this.fonts[_].loaded && (this.fonts[_].sansCase.parent.parentNode.removeChild(this.fonts[_].sansCase.parent), this.fonts[_].monoCase.parent.parentNode.removeChild(this.fonts[_].monoCase.parent)));
                D !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function d(_, x) {
                var f = document.body && x ? "svg" : "canvas", S, D = getFontProperties(_);
                if (f === "svg") {
                    var k = createNS("text");
                    k.style.fontSize = "100px", k.setAttribute("font-family", _.fFamily), k.setAttribute("font-style", D.style), k.setAttribute("font-weight", D.weight), k.textContent = "1", _.fClass ? (k.style.fontFamily = "inherit", k.setAttribute("class", _.fClass)) : k.style.fontFamily = _.fFamily, x.appendChild(k), S = k;
                } else {
                    var O = new OffscreenCanvas(500, 500).getContext("2d");
                    O.font = D.style + " " + D.weight + " 100px " + _.fFamily, S = O;
                }
                function B(j) {
                    return f === "svg" ? (S.textContent = j, S.getComputedTextLength()) : S.measureText(j).width;
                }
                return {
                    measureText: B
                };
            }
            function A(_, x) {
                if (!_) {
                    this.isLoaded = !0;
                    return;
                }
                if (this.chars) {
                    this.isLoaded = !0, this.fonts = _.list;
                    return;
                }
                if (!document.body) {
                    this.isLoaded = !0, _.list.forEach(function(X) {
                        X.helper = d(X), X.cache = {};
                    }), this.fonts = _.list;
                    return;
                }
                var f = _.list, S, D = f.length, k = D;
                for(S = 0; S < D; S += 1){
                    var O = !0, B, j;
                    if (f[S].loaded = !1, f[S].monoCase = b(f[S].fFamily, "monospace"), f[S].sansCase = b(f[S].fFamily, "sans-serif"), !f[S].fPath) f[S].loaded = !0, k -= 1;
                    else if (f[S].fOrigin === "p" || f[S].origin === 3) {
                        if (B = document.querySelectorAll('style[f-forigin="p"][f-family="' + f[S].fFamily + '"], style[f-origin="3"][f-family="' + f[S].fFamily + '"]'), B.length > 0 && (O = !1), O) {
                            var N = createTag("style");
                            N.setAttribute("f-forigin", f[S].fOrigin), N.setAttribute("f-origin", f[S].origin), N.setAttribute("f-family", f[S].fFamily), N.type = "text/css", N.innerText = "@font-face {font-family: " + f[S].fFamily + "; font-style: normal; src: url('" + f[S].fPath + "');}", x.appendChild(N);
                        }
                    } else if (f[S].fOrigin === "g" || f[S].origin === 1) {
                        for(B = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), j = 0; j < B.length; j += 1)B[j].href.indexOf(f[S].fPath) !== -1 && (O = !1);
                        if (O) {
                            var H = createTag("link");
                            H.setAttribute("f-forigin", f[S].fOrigin), H.setAttribute("f-origin", f[S].origin), H.type = "text/css", H.rel = "stylesheet", H.href = f[S].fPath, document.body.appendChild(H);
                        }
                    } else if (f[S].fOrigin === "t" || f[S].origin === 2) {
                        for(B = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), j = 0; j < B.length; j += 1)f[S].fPath === B[j].src && (O = !1);
                        if (O) {
                            var $ = createTag("link");
                            $.setAttribute("f-forigin", f[S].fOrigin), $.setAttribute("f-origin", f[S].origin), $.setAttribute("rel", "stylesheet"), $.setAttribute("href", f[S].fPath), x.appendChild($);
                        }
                    }
                    f[S].helper = d(f[S], x), f[S].cache = {}, this.fonts.push(f[S]);
                }
                k === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function p(_) {
                if (_) {
                    this.chars || (this.chars = []);
                    var x, f = _.length, S, D = this.chars.length, k;
                    for(x = 0; x < f; x += 1){
                        for(S = 0, k = !1; S < D;)this.chars[S].style === _[x].style && this.chars[S].fFamily === _[x].fFamily && this.chars[S].ch === _[x].ch && (k = !0), S += 1;
                        k || (this.chars.push(_[x]), D += 1);
                    }
                }
            }
            function o(_, x, f) {
                for(var S = 0, D = this.chars.length; S < D;){
                    if (this.chars[S].ch === _ && this.chars[S].style === x && this.chars[S].fFamily === f) return this.chars[S];
                    S += 1;
                }
                return (typeof _ == "string" && _.charCodeAt(0) !== 13 || !_) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", _, x, f)), e;
            }
            function l(_, x, f) {
                var S = this.getFontByName(x), D = _;
                if (!S.cache[D]) {
                    var k = S.helper;
                    if (_ === " ") {
                        var O = k.measureText("|" + _ + "|"), B = k.measureText("||");
                        S.cache[D] = (O - B) / 100;
                    } else S.cache[D] = k.measureText(_) / 100;
                }
                return S.cache[D] * f;
            }
            function c(_) {
                for(var x = 0, f = this.fonts.length; x < f;){
                    if (this.fonts[x].fName === _) return this.fonts[x];
                    x += 1;
                }
                return this.fonts[0];
            }
            function P(_) {
                var x = 0, f = _.charCodeAt(0);
                if (f >= 55296 && f <= 56319) {
                    var S = _.charCodeAt(1);
                    S >= 56320 && S <= 57343 && (x = (f - 55296) * 1024 + S - 56320 + 65536);
                }
                return x;
            }
            function M(_, x) {
                var f = _.toString(16) + x.toString(16);
                return E.indexOf(f) !== -1;
            }
            function T(_) {
                return _ === h;
            }
            function F(_) {
                return _ === u;
            }
            function I(_) {
                var x = P(_);
                return x >= g && x <= v;
            }
            function R(_) {
                return I(_.substr(0, 2)) && I(_.substr(2, 2));
            }
            function L(_) {
                return r.indexOf(_) !== -1;
            }
            function V(_, x) {
                var f = P(_.substr(x, 2));
                if (f !== i) return !1;
                var S = 0;
                for(x += 2; S < 5;){
                    if (f = P(_.substr(x, 2)), f < s || f > n) return !1;
                    S += 1, x += 2;
                }
                return P(_.substr(x, 2)) === a;
            }
            function G() {
                this.isLoaded = !0;
            }
            var C = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            C.isModifier = M, C.isZeroWidthJoiner = T, C.isFlagEmoji = R, C.isRegionalCode = I, C.isCombinedCharacter = L, C.isRegionalFlag = V, C.isVariationSelector = F, C.BLACK_FLAG_CODE_POINT = i;
            var w = {
                addChars: p,
                addFonts: A,
                getCharData: o,
                getFontByName: c,
                measureText: l,
                checkLoadedFonts: y,
                setIsLoaded: G
            };
            return C.prototype = w, C;
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
        function SliderEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function AngleEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function ColorEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function PointEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function LayerIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function MaskIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function CheckboxEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function NoValueEffect() {
            this.p = {};
        }
        function EffectsManager(t, e) {
            var r = t.ef || [];
            this.effectElements = [];
            var i, a = r.length, s;
            for(i = 0; i < a; i += 1)s = new GroupEffect(r[i], e), this.effectElements.push(s);
        }
        function GroupEffect(t, e) {
            this.init(t, e);
        }
        extendPrototype([
            DynamicPropertyContainer
        ], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var r, i = this.data.ef.length, a, s = this.data.ef;
            for(r = 0; r < i; r += 1){
                switch(a = null, s[r].ty){
                    case 0:
                        a = new SliderEffect(s[r], e, this);
                        break;
                    case 1:
                        a = new AngleEffect(s[r], e, this);
                        break;
                    case 2:
                        a = new ColorEffect(s[r], e, this);
                        break;
                    case 3:
                        a = new PointEffect(s[r], e, this);
                        break;
                    case 4:
                    case 7:
                        a = new CheckboxEffect(s[r], e, this);
                        break;
                    case 10:
                        a = new LayerIndexEffect(s[r], e, this);
                        break;
                    case 11:
                        a = new MaskIndexEffect(s[r], e, this);
                        break;
                    case 5:
                        a = new EffectsManager(s[r], e);
                        break;
                    default:
                        a = new NoValueEffect(s[r]);
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
                    var e = t("layer"), r = t("effects"), i = t("shape"), a = t("text"), s = t("comp");
                    this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var n = r.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(n), this.data.ty === 0 || this.data.xt ? this.compInterface = s(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface);
                }
            },
            setBlendMode: function() {
                var t = getBlendMode(this.data.bm), e = this.baseElement || this.layerElement;
                e.style["mix-blend-mode"] = t;
            },
            initBaseData: function(t, e, r) {
                this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
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
                var r, i = this.dynamicProperties.length;
                for(r = 0; r < i; r += 1)(e || this._isParent && this.dynamicProperties[r].propType === "transform") && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
            },
            addDynamicProperty: function(t) {
                this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t);
            }
        };
        function FootageElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r);
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
        function AudioElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
            var i = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
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
            var r = this._volume * this._volumeMultiplier;
            this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r));
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
            var e, r = this.layers.length, i;
            for(this.completeLayers = !0, e = r - 1; e >= 0; e -= 1)this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
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
            var e, r = t.length, i, a = this.layers.length;
            for(e = 0; e < r; e += 1)for(i = 0; i < a;){
                if (this.layers[i].id === t[e].id) {
                    this.layers[i] = t[e];
                    break;
                }
                i += 1;
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t;
        }, BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems();
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
            for(var i = this.elements, a = this.layers, s = 0, n = a.length; s < n;)a[s].ind == e && (!i[s] || i[s] === !0 ? (this.buildItem(s), this.addPendingElement(t)) : (r.push(i[s]), i[s].setAsParent(), a[s].parent !== void 0 ? this.buildElementParenting(t, a[s].parent, r) : t.setHierarchy(r))), s += 1;
        }, BaseRenderer.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t);
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length;
            for(e = 0; e < r; e += 1)if (t[e].xt) {
                var i = this.createComp(t[e]);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
            }
        }, BaseRenderer.prototype.getElementById = function(t) {
            var e, r = this.elements.length;
            for(e = 0; e < r; e += 1)if (this.elements[e].data.ind === t) return this.elements[e];
            return null;
        }, BaseRenderer.prototype.getElementByPath = function(t) {
            var e = t.shift(), r;
            if (typeof e == "number") r = this.elements[e];
            else {
                var i, a = this.elements.length;
                for(i = 0; i < a; i += 1)if (this.elements[i].data.nm === e) {
                    r = this.elements[i];
                    break;
                }
            }
            return t.length === 0 ? r : r.getElementByPath(t);
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
                    var t, e = this.finalTransform.mat, r = 0, i = this.hierarchy.length;
                    if (!this.finalTransform._matMdf) for(; r < i;){
                        if (this.hierarchy[r].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break;
                        }
                        r += 1;
                    }
                    if (this.finalTransform._matMdf) for(t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1)e.multiply(this.hierarchy[r].finalTransform.mProp.v);
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
            },
            renderLocalTransform: function() {
                if (this.localTransforms) {
                    var t = 0, e = this.localTransforms.length;
                    if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for(; t < e;)this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
                    if (this.finalTransform._localMatMdf) {
                        var r = this.finalTransform.localMat;
                        for(this.localTransforms[0].matrix.clone(r), t = 1; t < e; t += 1){
                            var i = this.localTransforms[t].matrix;
                            r.multiply(i);
                        }
                        r.multiply(this.finalTransform.mat);
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
                        var e = 0, r = t.length;
                        for(e = 0; e < r; e += 1)this.localTransforms.push(t[e]);
                    }
                }
            },
            globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for(var r = !0, i = this.comp; r;)i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : r = !1;
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
        function MaskElement(t, e, r) {
            this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i = this.globalData.defs, a, s = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(s), this.solidPath = "";
            var n, u = this.masksProperties, h = 0, g = [], v, E, m = createElementID(), b, y, d, A, p = "clipPath", o = "clip-path";
            for(a = 0; a < s; a += 1)if ((u[a].mode !== "a" && u[a].mode !== "n" || u[a].inv || u[a].o.k !== 100 || u[a].o.x) && (p = "mask", o = "mask"), (u[a].mode === "s" || u[a].mode === "i") && h === 0 ? (b = createNS("rect"), b.setAttribute("fill", "#ffffff"), b.setAttribute("width", this.element.comp.data.w || 0), b.setAttribute("height", this.element.comp.data.h || 0), g.push(b)) : b = null, n = createNS("path"), u[a].mode === "n") this.viewData[a] = {
                op: PropertyFactory.getProp(this.element, u[a].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, u[a], 3),
                elem: n,
                lastPath: ""
            }, i.appendChild(n);
            else {
                h += 1, n.setAttribute("fill", u[a].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
                var l;
                if (u[a].x.k !== 0 ? (p = "mask", o = "mask", A = PropertyFactory.getProp(this.element, u[a].x, 0, null, this.element), l = createElementID(), y = createNS("filter"), y.setAttribute("id", l), d = createNS("feMorphology"), d.setAttribute("operator", "erode"), d.setAttribute("in", "SourceGraphic"), d.setAttribute("radius", "0"), y.appendChild(d), i.appendChild(y), n.setAttribute("stroke", u[a].mode === "s" ? "#000000" : "#ffffff")) : (d = null, A = null), this.storedData[a] = {
                    elem: n,
                    x: A,
                    expan: d,
                    lastPath: "",
                    lastOperator: "",
                    filterId: l,
                    lastRadius: 0
                }, u[a].mode === "i") {
                    E = g.length;
                    var c = createNS("g");
                    for(v = 0; v < E; v += 1)c.appendChild(g[v]);
                    var P = createNS("mask");
                    P.setAttribute("mask-type", "alpha"), P.setAttribute("id", m + "_" + h), P.appendChild(n), i.appendChild(P), c.setAttribute("mask", "url(" + getLocationHref() + "#" + m + "_" + h + ")"), g.length = 0, g.push(c);
                } else g.push(n);
                u[a].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[a] = {
                    elem: n,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, u[a].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, u[a], 3),
                    invRect: b
                }, this.viewData[a].prop.k || this.drawPath(u[a], this.viewData[a].prop.v, this.viewData[a]);
            }
            for(this.maskElement = createNS(p), s = g.length, a = 0; a < s; a += 1)this.maskElement.appendChild(g[a]);
            h > 0 && (this.maskElement.setAttribute("id", m), this.element.maskedElement.setAttribute(o, "url(" + getLocationHref() + "#" + m + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
        }
        MaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop;
        }, MaskElement.prototype.renderFrame = function(t) {
            var e = this.element.finalTransform.mat, r, i = this.masksProperties.length;
            for(r = 0; r < i; r += 1)if ((this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || t))) {
                var a = this.storedData[r].expan;
                this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), a.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2));
            }
        }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement;
        }, MaskElement.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
        }, MaskElement.prototype.drawPath = function(t, e, r) {
            var i = " M" + e.v[0][0] + "," + e.v[0][1], a, s;
            for(s = e._length, a = 1; a < s; a += 1)i += " C" + e.o[a - 1][0] + "," + e.o[a - 1][1] + " " + e.i[a][0] + "," + e.i[a][1] + " " + e.v[a][0] + "," + e.v[a][1];
            if (e.c && s > 1 && (i += " C" + e.o[a - 1][0] + "," + e.o[a - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== i) {
                var n = "";
                r.elem && (e.c && (n = t.inv ? this.solidPath + i : i), r.elem.setAttribute("d", n)), r.lastPath = i;
            }
        }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
        };
        var filtersFactory = function() {
            var t = {};
            t.createFilter = e, t.createAlphaToLuminanceFilter = r;
            function e(i, a) {
                var s = createNS("filter");
                return s.setAttribute("id", i), a !== !0 && (s.setAttribute("filterUnits", "objectBoundingBox"), s.setAttribute("x", "0%"), s.setAttribute("y", "0%"), s.setAttribute("width", "100%"), s.setAttribute("height", "100%")), s;
            }
            function r() {
                var i = createNS("feColorMatrix");
                return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i;
            }
            return t;
        }(), featureSupport = function() {
            var t = {
                maskType: !0,
                svgLumaHidden: !0,
                offscreenCanvas: typeof OffscreenCanvas < "u"
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t;
        }(), registeredEffects = {}, idPrefix = "filter_result_";
        function SVGEffects(t) {
            var e, r = "SourceGraphic", i = t.data.ef ? t.data.ef.length : 0, a = createElementID(), s = filtersFactory.createFilter(a, !0), n = 0;
            this.filters = [];
            var u;
            for(e = 0; e < i; e += 1){
                u = null;
                var h = t.data.ef[e].ty;
                if (registeredEffects[h]) {
                    var g = registeredEffects[h].effect;
                    u = new g(s, t.effectsManager.effectElements[e], t, idPrefix + n, r), r = idPrefix + n, registeredEffects[h].countsAsEffect && (n += 1);
                }
                u && this.filters.push(u);
            }
            n && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this);
        }
        SVGEffects.prototype.renderFrame = function(t) {
            var e, r = this.filters.length;
            for(e = 0; e < r; e += 1)this.filters[e].renderFrame(t);
        }, SVGEffects.prototype.getEffects = function(t) {
            var e, r = this.filters.length, i = [];
            for(e = 0; e < r; e += 1)this.filters[e].type === t && i.push(this.filters[e]);
            return i;
        };
        function registerEffect(t, e, r) {
            registeredEffects[t] = {
                effect: e,
                countsAsEffect: r
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
                    var r = createNS("clipPath"), i = createNS("path");
                    i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var a = createElementID();
                    if (r.setAttribute("id", a), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
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
                    var e = this.layerId + "_" + t, r, i, a, s;
                    if (t === 1 || t === 3) {
                        var n = createNS("mask");
                        n.setAttribute("id", e), n.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(a), this.globalData.defs.appendChild(n), !featureSupport.maskType && t === 1 && (n.setAttribute("mask-type", "luminance"), r = createElementID(), i = filtersFactory.createFilter(r), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), s.appendChild(a), n.appendChild(s), s.setAttribute("filter", "url(" + getLocationHref() + "#" + r + ")"));
                    } else if (t === 2) {
                        var u = createNS("mask");
                        u.setAttribute("id", e), u.setAttribute("mask-type", "alpha");
                        var h = createNS("g");
                        u.appendChild(h), r = createElementID(), i = filtersFactory.createFilter(r);
                        var g = createNS("feComponentTransfer");
                        g.setAttribute("in", "SourceGraphic"), i.appendChild(g);
                        var v = createNS("feFuncA");
                        v.setAttribute("type", "table"), v.setAttribute("tableValues", "1.0 0.0"), g.appendChild(v), this.globalData.defs.appendChild(i);
                        var E = createNS("rect");
                        E.setAttribute("width", this.comp.data.w), E.setAttribute("height", this.comp.data.h), E.setAttribute("x", "0"), E.setAttribute("y", "0"), E.setAttribute("fill", "#ffffff"), E.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + r + ")"), h.appendChild(E), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(a), featureSupport.maskType || (u.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), h.appendChild(E), s.appendChild(this.layerElement), h.appendChild(s)), this.globalData.defs.appendChild(u);
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
                initElement: function(e, r, i) {
                    this.initFrame(), this.initBaseData(e, r, i), this.initTransform(e, r, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
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
        function IImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = {
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
                var e, r = this.shapeModifiers.length;
                for(e = 0; e < r; e += 1)this.shapeModifiers[e].addShape(t);
            },
            isShapeInAnimatedModifiers: function(t) {
                for(var e = 0, r = this.shapeModifiers.length; e < r;)if (this.shapeModifiers[e].isAnimatedWithShape(t)) return !0;
                return !1;
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for(t = 0; t < e; t += 1)this.shapes[t].sh.reset();
                    e = this.shapeModifiers.length;
                    var r;
                    for(t = e - 1; t >= 0 && (r = this.shapeModifiers[t].processShapes(this._isFirstFrame), !r); t -= 1);
                }
            },
            searchProcessedElement: function(t) {
                for(var e = this.processedElements, r = 0, i = e.length; r < i;){
                    if (e[r].elem === t) return e[r].pos;
                    r += 1;
                }
                return 0;
            },
            addProcessedElement: function(t, e) {
                for(var r = this.processedElements, i = r.length; i;)if (i -= 1, r[i].elem === t) {
                    r[i].pos = e;
                    return;
                }
                r.push(new ProcessedElement(t, e));
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
        function SVGShapeData(t, e, r) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
            for(var i = 0, a = t.length; i < a;){
                if (t[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                }
                i += 1;
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
        function DashProperty(t, e, r, i) {
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
            var a, s = e.length || 0, n;
            for(a = 0; a < s; a += 1)n = PropertyFactory.getProp(t, e[a].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[a] = {
                n: e[a].n,
                p: n
            };
            this.k || this.getValue(!0), this._isAnimated = this.k;
        }
        DashProperty.prototype.getValue = function(t) {
            if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0, r = this.dataProps.length;
                for(this.renderer === "svg" && (this.dashStr = ""), e = 0; e < r; e += 1)this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], DashProperty);
        function SVGStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated;
        }
        extendPrototype([
            DynamicPropertyContainer
        ], SVGStrokeStyleData);
        function SVGFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r;
        }
        extendPrototype([
            DynamicPropertyContainer
        ], SVGFillStyleData);
        function SVGNoStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r;
        }
        extendPrototype([
            DynamicPropertyContainer
        ], SVGNoStyleData);
        function GradientProperty(t, e, r) {
            this.data = e, this.c = createTypedArray("uint8c", e.p * 4);
            var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
            this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
        }
        GradientProperty.prototype.comparePoints = function(t, e) {
            for(var r = 0, i = this.o.length / 2, a; r < i;){
                if (a = Math.abs(t[r * 4] - t[e * 4 + r * 2]), a > .01) return !1;
                r += 1;
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
                var e, r = this.data.p * 4, i, a;
                for(e = 0; e < r; e += 1)i = e % 4 === 0 ? 100 : 255, a = Math.round(this.prop.v[e] * i), this.c[e] !== a && (this.c[e] = a, this._cmdf = !t);
                if (this.o.length) for(r = this.prop.v.length, e = this.data.p * 4; e < r; e += 1)i = e % 2 === 0 ? 100 : 1, a = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== a && (this.o[e - this.data.p * 4] = a, this._omdf = !t);
                this._mdf = !t;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], GradientProperty);
        function SVGGradientFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r);
        }
        SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                k: 0
            }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                k: 0
            }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated;
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
            var r = createElementID(), i = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
            i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
            var a = [], s, n, u;
            for(u = e.g.p * 4, n = 0; n < u; n += 4)s = createNS("stop"), i.appendChild(s), a.push(s);
            t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = a;
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var r, i, a, s = createNS("mask"), n = createNS("path");
                s.appendChild(n);
                var u = createElementID(), h = createElementID();
                s.setAttribute("id", h);
                var g = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
                g.setAttribute("id", u), g.setAttribute("spreadMethod", "pad"), g.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var v = this.stops;
                for(i = t.g.p * 4; i < a; i += 2)r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), g.appendChild(r), v.push(r);
                n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + u + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = g, this.ms = s, this.ost = v, this.maskId = h, e.msElem = n;
            }
        }, extendPrototype([
            DynamicPropertyContainer
        ], SVGGradientFillStyleData);
        function SVGGradientStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated;
        }
        extendPrototype([
            SVGGradientFillStyleData,
            DynamicPropertyContainer
        ], SVGGradientStrokeStyleData);
        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g");
        }
        function SVGTransformData(t, e, r) {
            this.transform = {
                mProps: t,
                op: e,
                container: r
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
        }
        var buildShapeString = function(t, e, r, i) {
            if (e === 0) return "";
            var a = t.o, s = t.i, n = t.v, u, h = " M" + i.applyToPointStringified(n[0][0], n[0][1]);
            for(u = 1; u < e; u += 1)h += " C" + i.applyToPointStringified(a[u - 1][0], a[u - 1][1]) + " " + i.applyToPointStringified(s[u][0], s[u][1]) + " " + i.applyToPointStringified(n[u][0], n[u][1]);
            return r && e && (h += " C" + i.applyToPointStringified(a[u - 1][0], a[u - 1][1]) + " " + i.applyToPointStringified(s[0][0], s[0][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]), h += "z"), h;
        }, SVGElementsRenderer = function() {
            var t = new Matrix, e = new Matrix, r = {
                createRenderFunction: i
            };
            function i(E) {
                switch(E.ty){
                    case "fl":
                        return u;
                    case "gf":
                        return g;
                    case "gs":
                        return h;
                    case "st":
                        return v;
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
            function a(E, m, b) {
                (b || m.transform.op._mdf) && m.transform.container.setAttribute("opacity", m.transform.op.v), (b || m.transform.mProps._mdf) && m.transform.container.setAttribute("transform", m.transform.mProps.v.to2dCSS());
            }
            function s() {}
            function n(E, m, b) {
                var y, d, A, p, o, l, c = m.styles.length, P = m.lvl, M, T, F, I;
                for(l = 0; l < c; l += 1){
                    if (p = m.sh._mdf || b, m.styles[l].lvl < P) {
                        for(T = e.reset(), F = P - m.styles[l].lvl, I = m.transformers.length - 1; !p && F > 0;)p = m.transformers[I].mProps._mdf || p, F -= 1, I -= 1;
                        if (p) for(F = P - m.styles[l].lvl, I = m.transformers.length - 1; F > 0;)T.multiply(m.transformers[I].mProps.v), F -= 1, I -= 1;
                    } else T = t;
                    if (M = m.sh.paths, d = M._length, p) {
                        for(A = "", y = 0; y < d; y += 1)o = M.shapes[y], o && o._length && (A += buildShapeString(o, o._length, o.c, T));
                        m.caches[l] = A;
                    } else A = m.caches[l];
                    m.styles[l].d += E.hd === !0 ? "" : A, m.styles[l]._mdf = p || m.styles[l]._mdf;
                }
            }
            function u(E, m, b) {
                var y = m.style;
                (m.c._mdf || b) && y.pElem.setAttribute("fill", "rgb(" + bmFloor(m.c.v[0]) + "," + bmFloor(m.c.v[1]) + "," + bmFloor(m.c.v[2]) + ")"), (m.o._mdf || b) && y.pElem.setAttribute("fill-opacity", m.o.v);
            }
            function h(E, m, b) {
                g(E, m, b), v(E, m, b);
            }
            function g(E, m, b) {
                var y = m.gf, d = m.g._hasOpacity, A = m.s.v, p = m.e.v;
                if (m.o._mdf || b) {
                    var o = E.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                    m.style.pElem.setAttribute(o, m.o.v);
                }
                if (m.s._mdf || b) {
                    var l = E.t === 1 ? "x1" : "cx", c = l === "x1" ? "y1" : "cy";
                    y.setAttribute(l, A[0]), y.setAttribute(c, A[1]), d && !m.g._collapsable && (m.of.setAttribute(l, A[0]), m.of.setAttribute(c, A[1]));
                }
                var P, M, T, F;
                if (m.g._cmdf || b) {
                    P = m.cst;
                    var I = m.g.c;
                    for(T = P.length, M = 0; M < T; M += 1)F = P[M], F.setAttribute("offset", I[M * 4] + "%"), F.setAttribute("stop-color", "rgb(" + I[M * 4 + 1] + "," + I[M * 4 + 2] + "," + I[M * 4 + 3] + ")");
                }
                if (d && (m.g._omdf || b)) {
                    var R = m.g.o;
                    for(m.g._collapsable ? P = m.cst : P = m.ost, T = P.length, M = 0; M < T; M += 1)F = P[M], m.g._collapsable || F.setAttribute("offset", R[M * 2] + "%"), F.setAttribute("stop-opacity", R[M * 2 + 1]);
                }
                if (E.t === 1) (m.e._mdf || b) && (y.setAttribute("x2", p[0]), y.setAttribute("y2", p[1]), d && !m.g._collapsable && (m.of.setAttribute("x2", p[0]), m.of.setAttribute("y2", p[1])));
                else {
                    var L;
                    if ((m.s._mdf || m.e._mdf || b) && (L = Math.sqrt(Math.pow(A[0] - p[0], 2) + Math.pow(A[1] - p[1], 2)), y.setAttribute("r", L), d && !m.g._collapsable && m.of.setAttribute("r", L)), m.e._mdf || m.h._mdf || m.a._mdf || b) {
                        L || (L = Math.sqrt(Math.pow(A[0] - p[0], 2) + Math.pow(A[1] - p[1], 2)));
                        var V = Math.atan2(p[1] - A[1], p[0] - A[0]), G = m.h.v;
                        G >= 1 ? G = .99 : G <= -1 && (G = -0.99);
                        var C = L * G, w = Math.cos(V + m.a.v) * C + A[0], _ = Math.sin(V + m.a.v) * C + A[1];
                        y.setAttribute("fx", w), y.setAttribute("fy", _), d && !m.g._collapsable && (m.of.setAttribute("fx", w), m.of.setAttribute("fy", _));
                    }
                }
            }
            function v(E, m, b) {
                var y = m.style, d = m.d;
                d && (d._mdf || b) && d.dashStr && (y.pElem.setAttribute("stroke-dasharray", d.dashStr), y.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), m.c && (m.c._mdf || b) && y.pElem.setAttribute("stroke", "rgb(" + bmFloor(m.c.v[0]) + "," + bmFloor(m.c.v[1]) + "," + bmFloor(m.c.v[2]) + ")"), (m.o._mdf || b) && y.pElem.setAttribute("stroke-opacity", m.o.v), (m.w._mdf || b) && (y.pElem.setAttribute("stroke-width", m.w.v), y.msElem && y.msElem.setAttribute("stroke-width", m.w.v));
            }
            return r;
        }();
        function SVGShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [];
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
            var t, e = this.shapes.length, r, i, a = this.stylesList.length, s, n = [], u = !1;
            for(i = 0; i < a; i += 1){
                for(s = this.stylesList[i], u = !1, n.length = 0, t = 0; t < e; t += 1)r = this.shapes[t], r.styles.indexOf(s) !== -1 && (n.push(r), u = r._isAnimated || u);
                n.length > 1 && u && this.setShapesAsAnimated(n);
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
            var e, r = t.length;
            for(e = 0; e < r; e += 1)t[e].setAsAnimated();
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var r, i = new SVGStyleData(t, e), a = i.pElem;
            if (t.ty === "st") r = new SVGStrokeStyleData(this, t, i);
            else if (t.ty === "fl") r = new SVGFillStyleData(this, t, i);
            else if (t.ty === "gf" || t.ty === "gs") {
                var s = t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                r = new s(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), a.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"));
            } else t.ty === "no" && (r = new SVGNoStyleData(this, t, i));
            return (t.ty === "st" || t.ty === "gs") && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), a.setAttribute("fill-opacity", "0"), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r;
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var r = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r, r.o, e);
            return this.addToAnimatedContents(t, i), i;
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
            var i = 4;
            t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
            var a = ShapePropertyFactory.getShapeProp(this, t, i, this), s = new SVGShapeData(e, r, a);
            return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s;
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
            for(var r = 0, i = this.animatedContents.length; r < i;){
                if (this.animatedContents[r].element === e) return;
                r += 1;
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t
            });
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
            var e = t.styles, r, i = this.stylesList.length;
            for(r = 0; r < i; r += 1)this.stylesList[r].closed || e.push(this.stylesList[r]);
        }, SVGShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for(t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t];
            for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue();
            this.renderModifiers();
        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, a, s, n) {
            var u = [].concat(s), h, g = t.length - 1, v, E, m = [], b = [], y, d, A;
            for(h = g; h >= 0; h -= 1){
                if (A = this.searchProcessedElement(t[h]), A ? e[h] = r[A - 1] : t[h]._render = n, t[h].ty === "fl" || t[h].ty === "st" || t[h].ty === "gf" || t[h].ty === "gs" || t[h].ty === "no") A ? e[h].style.closed = !1 : e[h] = this.createStyleElement(t[h], a), t[h]._render && e[h].style.pElem.parentNode !== i && i.appendChild(e[h].style.pElem), m.push(e[h].style);
                else if (t[h].ty === "gr") {
                    if (!A) e[h] = this.createGroupElement(t[h]);
                    else for(E = e[h].it.length, v = 0; v < E; v += 1)e[h].prevViewData[v] = e[h].it[v];
                    this.searchShapes(t[h].it, e[h].it, e[h].prevViewData, e[h].gr, a + 1, u, n), t[h]._render && e[h].gr.parentNode !== i && i.appendChild(e[h].gr);
                } else t[h].ty === "tr" ? (A || (e[h] = this.createTransformElement(t[h], i)), y = e[h].transform, u.push(y)) : t[h].ty === "sh" || t[h].ty === "rc" || t[h].ty === "el" || t[h].ty === "sr" ? (A || (e[h] = this.createShapeElement(t[h], u, a)), this.setElementStyles(e[h])) : t[h].ty === "tm" || t[h].ty === "rd" || t[h].ty === "ms" || t[h].ty === "pb" || t[h].ty === "zz" || t[h].ty === "op" ? (A ? (d = e[h], d.closed = !1) : (d = ShapeModifiers.getModifier(t[h].ty), d.init(this, t[h]), e[h] = d, this.shapeModifiers.push(d)), b.push(d)) : t[h].ty === "rp" && (A ? (d = e[h], d.closed = !0) : (d = ShapeModifiers.getModifier(t[h].ty), e[h] = d, d.init(this, t, h, e), this.shapeModifiers.push(d), n = !1), b.push(d));
                this.addProcessedElement(t[h], h + 1);
            }
            for(g = m.length, h = 0; h < g; h += 1)m[h].closed = !0;
            for(g = b.length, h = 0; h < g; h += 1)b[h].closed = !0;
        }, SVGShapeElement.prototype.renderInnerContent = function() {
            this.renderModifiers();
            var t, e = this.stylesList.length;
            for(t = 0; t < e; t += 1)this.stylesList[t].reset();
            for(this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
        }, SVGShapeElement.prototype.renderShape = function() {
            var t, e = this.animatedContents.length, r;
            for(t = 0; t < e; t += 1)r = this.animatedContents[t], (this._isFirstFrame || r.element._isAnimated) && r.data !== !0 && r.fn(r.data, r.element, this._isFirstFrame);
        }, SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
        };
        function LetterProps(t, e, r, i, a, s) {
            this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = a, this.p = s, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!r,
                fc: !!i,
                m: !0,
                p: !0
            };
        }
        LetterProps.prototype.update = function(t, e, r, i, a, s) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var n = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), s.length && (this.p[0] !== s[0] || this.p[1] !== s[1] || this.p[4] !== s[4] || this.p[5] !== s[5] || this.p[12] !== s[12] || this.p[13] !== s[13]) && (this.p = s, this._mdf.p = !0, n = !0), n;
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
            for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
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
                var e = this.currentData, r = this.keysIndex;
                if (this.lock) {
                    this.setCurrentData(this.currentData);
                    return;
                }
                this.lock = !0, this._mdf = !1;
                var i, a = this.effectsSequence.length, s = t || this.data.d.k[this.keysIndex].s;
                for(i = 0; i < a; i += 1)r !== this.keysIndex ? s = this.effectsSequence[i](s, s.t) : s = this.effectsSequence[i](this.currentData, s.t);
                e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }, TextProperty.prototype.getKeyframeValue = function() {
            for(var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);)r += 1;
            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
        }, TextProperty.prototype.buildFinalText = function(t) {
            for(var e = [], r = 0, i = t.length, a, s, n = !1, u = !1, h = ""; r < i;)n = u, u = !1, a = t.charCodeAt(r), h = t.charAt(r), FontManager.isCombinedCharacter(a) ? n = !0 : a >= 55296 && a <= 56319 ? FontManager.isRegionalFlag(t, r) ? h = t.substr(r, 14) : (s = t.charCodeAt(r + 1), s >= 56320 && s <= 57343 && (FontManager.isModifier(a, s) ? (h = t.substr(r, 2), n = !0) : FontManager.isFlagEmoji(t.substr(r, 4)) ? h = t.substr(r, 4) : h = t.substr(r, 2))) : a > 56319 ? (s = t.charCodeAt(r + 1), FontManager.isVariationSelector(a) && (n = !0)) : FontManager.isZeroWidthJoiner(a) && (n = !0, u = !0), n ? (e[e.length - 1] += h, n = !1) : e.push(h), r += h.length;
            return e;
        }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e = this.elem.globalData.fontManager, r = this.data, i = [], a, s, n, u = 0, h, g = r.m.g, v = 0, E = 0, m = 0, b = [], y = 0, d = 0, A, p, o = e.getFontByName(t.f), l, c = 0, P = getFontProperties(o);
            t.fWeight = P.weight, t.fStyle = P.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), s = t.finalText.length, t.finalLineHeight = t.lh;
            var M = t.tr / 1e3 * t.finalSize, T;
            if (t.sz) for(var F = !0, I = t.sz[0], R = t.sz[1], L, V; F;){
                V = this.buildFinalText(t.t), L = 0, y = 0, s = V.length, M = t.tr / 1e3 * t.finalSize;
                var G = -1;
                for(a = 0; a < s; a += 1)T = V[a].charCodeAt(0), n = !1, V[a] === " " ? G = a : (T === 13 || T === 3) && (y = 0, n = !0, L += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (l = e.getCharData(V[a], o.fStyle, o.fFamily), c = n ? 0 : l.w * t.finalSize / 100) : c = e.measureText(V[a], t.f, t.finalSize), y + c > I && V[a] !== " " ? (G === -1 ? s += 1 : a = G, L += t.finalLineHeight || t.finalSize * 1.2, V.splice(a, G === a ? 1 : 0, "\r"), G = -1, y = 0) : (y += c, y += M);
                L += o.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && R < L ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = V, s = t.finalText.length, F = !1);
            }
            y = -M, c = 0;
            var C = 0, w;
            for(a = 0; a < s; a += 1)if (n = !1, w = t.finalText[a], T = w.charCodeAt(0), T === 13 || T === 3 ? (C = 0, b.push(y), d = y > d ? y : d, y = -2 * M, h = "", n = !0, m += 1) : h = w, e.chars ? (l = e.getCharData(w, o.fStyle, e.getFontByName(t.f).fFamily), c = n ? 0 : l.w * t.finalSize / 100) : c = e.measureText(h, t.f, t.finalSize), w === " " ? C += c + M : (y += c + M + C, C = 0), i.push({
                l: c,
                an: c,
                add: v,
                n,
                anIndexes: [],
                val: h,
                line: m,
                animatorJustifyOffset: 0
            }), g == 2) {
                if (v += c, h === "" || h === " " || a === s - 1) {
                    for((h === "" || h === " ") && (v -= c); E <= a;)i[E].an = v, i[E].ind = u, i[E].extra = c, E += 1;
                    u += 1, v = 0;
                }
            } else if (g == 3) {
                if (v += c, h === "" || a === s - 1) {
                    for(h === "" && (v -= c); E <= a;)i[E].an = v, i[E].ind = u, i[E].extra = c, E += 1;
                    v = 0, u += 1;
                }
            } else i[u].ind = u, i[u].extra = 0, u += 1;
            if (t.l = i, d = y > d ? y : d, b.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
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
            t.lineWidths = b;
            var _ = r.a, x, f;
            p = _.length;
            var S, D, k = [];
            for(A = 0; A < p; A += 1){
                for(x = _[A], x.a.sc && (t.strokeColorAnim = !0), x.a.sw && (t.strokeWidthAnim = !0), (x.a.fc || x.a.fh || x.a.fs || x.a.fb) && (t.fillColorAnim = !0), D = 0, S = x.s.b, a = 0; a < s; a += 1)f = i[a], f.anIndexes[A] = D, (S == 1 && f.val !== "" || S == 2 && f.val !== "" && f.val !== " " || S == 3 && (f.n || f.val == " " || a == s - 1) || S == 4 && (f.n || a == s - 1)) && (x.s.rn === 1 && k.push(D), D += 1);
                r.a[A].s.totalChars = D;
                var O = -1, B;
                if (x.s.rn === 1) for(a = 0; a < s; a += 1)f = i[a], O != f.anIndexes[A] && (O = f.anIndexes[A], B = k.splice(Math.floor(Math.random() * k.length), 1)[0]), f.anIndexes[A] = B;
            }
            t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = o.ascent * t.finalSize / 100;
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
            e = e === void 0 ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
        }, TextProperty.prototype.canResizeFont = function(t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        };
        var TextSelectorProp = function() {
            var t = Math.max, e = Math.min, r = Math.floor;
            function i(s, n) {
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
            i.prototype = {
                getMult: function(s) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var n = 0, u = 0, h = 1, g = 1;
                    this.ne.v > 0 ? n = this.ne.v / 100 : u = -this.ne.v / 100, this.xe.v > 0 ? h = 1 - this.xe.v / 100 : g = 1 + this.xe.v / 100;
                    var v = BezierFactory.getBezierEasing(n, u, h, g).get, E = 0, m = this.finalS, b = this.finalE, y = this.data.sh;
                    if (y === 2) b === m ? E = s >= b ? 1 : 0 : E = t(0, e(.5 / (b - m) + (s - m) / (b - m), 1)), E = v(E);
                    else if (y === 3) b === m ? E = s >= b ? 0 : 1 : E = 1 - t(0, e(.5 / (b - m) + (s - m) / (b - m), 1)), E = v(E);
                    else if (y === 4) b === m ? E = 0 : (E = t(0, e(.5 / (b - m) + (s - m) / (b - m), 1)), E < .5 ? E *= 2 : E = 1 - 2 * (E - .5)), E = v(E);
                    else if (y === 5) {
                        if (b === m) E = 0;
                        else {
                            var d = b - m;
                            s = e(t(0, s + .5 - m), b - m);
                            var A = -d / 2 + s, p = d / 2;
                            E = Math.sqrt(1 - A * A / (p * p));
                        }
                        E = v(E);
                    } else y === 6 ? (b === m ? E = 0 : (s = e(t(0, s + .5 - m), b - m), E = (1 + Math.cos(Math.PI + Math.PI * 2 * s / (b - m))) / 2), E = v(E)) : (s >= r(m) && (s - m < 0 ? E = t(0, e(e(b, 1) - (m - s), 1)) : E = t(0, e(b - s, 1))), E = v(E));
                    if (this.sm.v !== 100) {
                        var o = this.sm.v * .01;
                        o === 0 && (o = 1e-8);
                        var l = .5 - o * .5;
                        E < l ? E = 0 : (E = (E - l) / o, E > 1 && (E = 1));
                    }
                    return E * this.a.v;
                },
                getValue: function(s) {
                    this.iterateDynamicProperties(), this._mdf = s || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, s && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var n = this.data.r === 2 ? 1 : 100 / this.data.totalChars, u = this.o.v / n, h = this.s.v / n + u, g = this.e.v / n + u;
                    if (h > g) {
                        var v = h;
                        h = g, g = v;
                    }
                    this.finalS = h, this.finalE = g;
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], i);
            function a(s, n, u) {
                return new i(s, n);
            }
            return {
                getTextSelectorProp: a
            };
        }();
        function TextAnimatorDataProperty(t, e, r) {
            var i = {
                propType: !1
            }, a = PropertyFactory.getProp, s = e.a;
            this.a = {
                r: s.r ? a(t, s.r, 0, degToRads, r) : i,
                rx: s.rx ? a(t, s.rx, 0, degToRads, r) : i,
                ry: s.ry ? a(t, s.ry, 0, degToRads, r) : i,
                sk: s.sk ? a(t, s.sk, 0, degToRads, r) : i,
                sa: s.sa ? a(t, s.sa, 0, degToRads, r) : i,
                s: s.s ? a(t, s.s, 1, .01, r) : i,
                a: s.a ? a(t, s.a, 1, 0, r) : i,
                o: s.o ? a(t, s.o, 0, .01, r) : i,
                p: s.p ? a(t, s.p, 1, 0, r) : i,
                sw: s.sw ? a(t, s.sw, 0, 0, r) : i,
                sc: s.sc ? a(t, s.sc, 1, 0, r) : i,
                fc: s.fc ? a(t, s.fc, 1, 0, r) : i,
                fh: s.fh ? a(t, s.fh, 0, 0, r) : i,
                fs: s.fs ? a(t, s.fs, 0, .01, r) : i,
                fb: s.fb ? a(t, s.fb, 0, .01, r) : i,
                t: s.t ? a(t, s.t, 0, 0, r) : i
            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t;
        }
        function TextAnimatorProperty(t, e, r) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r);
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var t, e = this._textData.a.length, r, i = PropertyFactory.getProp;
            for(t = 0; t < e; t += 1)r = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, r, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var r = this._moreOptions.alignment.v, i = this._animatorsData, a = this._textData, s = this.mHelper, n = this._renderType, u = this.renderedLetters.length, h, g, v, E, m = t.l, b, y, d, A, p, o, l, c, P, M, T, F, I, R, L;
                if (this._hasMaskedPath) {
                    if (L = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var V = L.v;
                        this._pathData.r.v && (V = V.reverse()), b = {
                            tLength: 0,
                            segments: []
                        }, E = V._length - 1;
                        var G;
                        for(F = 0, v = 0; v < E; v += 1)G = bez.buildBezierData(V.v[v], V.v[v + 1], [
                            V.o[v][0] - V.v[v][0],
                            V.o[v][1] - V.v[v][1]
                        ], [
                            V.i[v + 1][0] - V.v[v + 1][0],
                            V.i[v + 1][1] - V.v[v + 1][1]
                        ]), b.tLength += G.segmentLength, b.segments.push(G), F += G.segmentLength;
                        v = E, L.v.c && (G = bez.buildBezierData(V.v[v], V.v[0], [
                            V.o[v][0] - V.v[v][0],
                            V.o[v][1] - V.v[v][1]
                        ], [
                            V.i[0][0] - V.v[0][0],
                            V.i[0][1] - V.v[0][1]
                        ]), b.tLength += G.segmentLength, b.segments.push(G), F += G.segmentLength), this._pathData.pi = b;
                    }
                    if (b = this._pathData.pi, y = this._pathData.f.v, l = 0, o = 1, A = 0, p = !0, M = b.segments, y < 0 && L.v.c) for(b.tLength < Math.abs(y) && (y = -Math.abs(y) % b.tLength), l = M.length - 1, P = M[l].points, o = P.length - 1; y < 0;)y += P[o].partialLength, o -= 1, o < 0 && (l -= 1, P = M[l].points, o = P.length - 1);
                    P = M[l].points, c = P[o - 1], d = P[o], T = d.partialLength;
                }
                E = m.length, h = 0, g = 0;
                var C = t.finalSize * 1.2 * .714, w = !0, _, x, f, S, D;
                S = i.length;
                var k, O = -1, B, j, N, H = y, $ = l, X = o, Q = -1, Z, W, K, q, z, et, st, rt, tt = "", it = this.defaultPropsArray, at;
                if (t.j === 2 || t.j === 1) {
                    var Y = 0, nt = 0, ot = t.j === 2 ? -0.5 : -1, J = 0, ht = !0;
                    for(v = 0; v < E; v += 1)if (m[v].n) {
                        for(Y && (Y += nt); J < v;)m[J].animatorJustifyOffset = Y, J += 1;
                        Y = 0, ht = !0;
                    } else {
                        for(f = 0; f < S; f += 1)_ = i[f].a, _.t.propType && (ht && t.j === 2 && (nt += _.t.v * ot), x = i[f].s, k = x.getMult(m[v].anIndexes[f], a.a[f].s.totalChars), k.length ? Y += _.t.v * k[0] * ot : Y += _.t.v * k * ot);
                        ht = !1;
                    }
                    for(Y && (Y += nt); J < v;)m[J].animatorJustifyOffset = Y, J += 1;
                }
                for(v = 0; v < E; v += 1){
                    if (s.reset(), Z = 1, m[v].n) h = 0, g += t.yOffset, g += w ? 1 : 0, y = H, w = !1, this._hasMaskedPath && (l = $, o = X, P = M[l].points, c = P[o - 1], d = P[o], T = d.partialLength, A = 0), tt = "", rt = "", et = "", at = "", it = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Q !== m[v].line) {
                                switch(t.j){
                                    case 1:
                                        y += F - t.lineWidths[m[v].line];
                                        break;
                                    case 2:
                                        y += (F - t.lineWidths[m[v].line]) / 2;
                                        break;
                                }
                                Q = m[v].line;
                            }
                            O !== m[v].ind && (m[O] && (y += m[O].extra), y += m[v].an / 2, O = m[v].ind), y += r[0] * m[v].an * .005;
                            var U = 0;
                            for(f = 0; f < S; f += 1)_ = i[f].a, _.p.propType && (x = i[f].s, k = x.getMult(m[v].anIndexes[f], a.a[f].s.totalChars), k.length ? U += _.p.v[0] * k[0] : U += _.p.v[0] * k), _.a.propType && (x = i[f].s, k = x.getMult(m[v].anIndexes[f], a.a[f].s.totalChars), k.length ? U += _.a.v[0] * k[0] : U += _.a.v[0] * k);
                            for(p = !0, this._pathData.a.v && (y = m[0].an * .5 + (F - this._pathData.f.v - m[0].an * .5 - m[m.length - 1].an * .5) * O / (E - 1), y += this._pathData.f.v); p;)A + T >= y + U || !P ? (I = (y + U - A) / d.partialLength, j = c.point[0] + (d.point[0] - c.point[0]) * I, N = c.point[1] + (d.point[1] - c.point[1]) * I, s.translate(-r[0] * m[v].an * .005, -(r[1] * C) * .01), p = !1) : P && (A += d.partialLength, o += 1, o >= P.length && (o = 0, l += 1, M[l] ? P = M[l].points : L.v.c ? (o = 0, l = 0, P = M[l].points) : (A -= d.partialLength, P = null)), P && (c = d, d = P[o], T = d.partialLength));
                            B = m[v].an / 2 - m[v].add, s.translate(-B, 0, 0);
                        } else B = m[v].an / 2 - m[v].add, s.translate(-B, 0, 0), s.translate(-r[0] * m[v].an * .005, -r[1] * C * .01, 0);
                        for(f = 0; f < S; f += 1)_ = i[f].a, _.t.propType && (x = i[f].s, k = x.getMult(m[v].anIndexes[f], a.a[f].s.totalChars), (h !== 0 || t.j !== 0) && (this._hasMaskedPath ? k.length ? y += _.t.v * k[0] : y += _.t.v * k : k.length ? h += _.t.v * k[0] : h += _.t.v * k));
                        for(t.strokeWidthAnim && (K = t.sw || 0), t.strokeColorAnim && (t.sc ? W = [
                            t.sc[0],
                            t.sc[1],
                            t.sc[2]
                        ] : W = [
                            0,
                            0,
                            0
                        ]), t.fillColorAnim && t.fc && (q = [
                            t.fc[0],
                            t.fc[1],
                            t.fc[2]
                        ]), f = 0; f < S; f += 1)_ = i[f].a, _.a.propType && (x = i[f].s, k = x.getMult(m[v].anIndexes[f], a.a[f].s.totalChars), k.length ? s.translate(-_.a.v[0] * k[0], -_.a.v[1] * k[1], _.a.v[2] * k[2]) : s.translate(-_.a.v[0] * k, -_.a.v[1] * k, _.a.v[2] * k));
                        for(f = 0; f < S; f += 1)_ = i[f].a, _.s.propType && (x = i[f].s, k = x.getMult(m[v].anIndexes[f], a.a[f].s.totalChars), k.length ? s.scale(1 + (_.s.v[0] - 1) * k[0], 1 + (_.s.v[1] - 1) * k[1], 1) : s.scale(1 + (_.s.v[0] - 1) * k, 1 + (_.s.v[1] - 1) * k, 1));
                        for(f = 0; f < S; f += 1){
                            if (_ = i[f].a, x = i[f].s, k = x.getMult(m[v].anIndexes[f], a.a[f].s.totalChars), _.sk.propType && (k.length ? s.skewFromAxis(-_.sk.v * k[0], _.sa.v * k[1]) : s.skewFromAxis(-_.sk.v * k, _.sa.v * k)), _.r.propType && (k.length ? s.rotateZ(-_.r.v * k[2]) : s.rotateZ(-_.r.v * k)), _.ry.propType && (k.length ? s.rotateY(_.ry.v * k[1]) : s.rotateY(_.ry.v * k)), _.rx.propType && (k.length ? s.rotateX(_.rx.v * k[0]) : s.rotateX(_.rx.v * k)), _.o.propType && (k.length ? Z += (_.o.v * k[0] - Z) * k[0] : Z += (_.o.v * k - Z) * k), t.strokeWidthAnim && _.sw.propType && (k.length ? K += _.sw.v * k[0] : K += _.sw.v * k), t.strokeColorAnim && _.sc.propType) for(z = 0; z < 3; z += 1)k.length ? W[z] += (_.sc.v[z] - W[z]) * k[0] : W[z] += (_.sc.v[z] - W[z]) * k;
                            if (t.fillColorAnim && t.fc) {
                                if (_.fc.propType) for(z = 0; z < 3; z += 1)k.length ? q[z] += (_.fc.v[z] - q[z]) * k[0] : q[z] += (_.fc.v[z] - q[z]) * k;
                                _.fh.propType && (k.length ? q = addHueToRGB(q, _.fh.v * k[0]) : q = addHueToRGB(q, _.fh.v * k)), _.fs.propType && (k.length ? q = addSaturationToRGB(q, _.fs.v * k[0]) : q = addSaturationToRGB(q, _.fs.v * k)), _.fb.propType && (k.length ? q = addBrightnessToRGB(q, _.fb.v * k[0]) : q = addBrightnessToRGB(q, _.fb.v * k));
                            }
                        }
                        for(f = 0; f < S; f += 1)_ = i[f].a, _.p.propType && (x = i[f].s, k = x.getMult(m[v].anIndexes[f], a.a[f].s.totalChars), this._hasMaskedPath ? k.length ? s.translate(0, _.p.v[1] * k[0], -_.p.v[2] * k[1]) : s.translate(0, _.p.v[1] * k, -_.p.v[2] * k) : k.length ? s.translate(_.p.v[0] * k[0], _.p.v[1] * k[1], -_.p.v[2] * k[2]) : s.translate(_.p.v[0] * k, _.p.v[1] * k, -_.p.v[2] * k));
                        if (t.strokeWidthAnim && (et = K < 0 ? 0 : K), t.strokeColorAnim && (st = "rgb(" + Math.round(W[0] * 255) + "," + Math.round(W[1] * 255) + "," + Math.round(W[2] * 255) + ")"), t.fillColorAnim && t.fc && (rt = "rgb(" + Math.round(q[0] * 255) + "," + Math.round(q[1] * 255) + "," + Math.round(q[2] * 255) + ")"), this._hasMaskedPath) {
                            if (s.translate(0, -t.ls), s.translate(0, r[1] * C * .01 + g, 0), this._pathData.p.v) {
                                R = (d.point[1] - c.point[1]) / (d.point[0] - c.point[0]);
                                var lt = Math.atan(R) * 180 / Math.PI;
                                d.point[0] < c.point[0] && (lt += 180), s.rotate(-lt * Math.PI / 180);
                            }
                            s.translate(j, N, 0), y -= r[0] * m[v].an * .005, m[v + 1] && O !== m[v + 1].ind && (y += m[v].an / 2, y += t.tr * .001 * t.finalSize);
                        } else {
                            switch(s.translate(h, g, 0), t.ps && s.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j){
                                case 1:
                                    s.translate(m[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[m[v].line]), 0, 0);
                                    break;
                                case 2:
                                    s.translate(m[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[m[v].line]) / 2, 0, 0);
                                    break;
                            }
                            s.translate(0, -t.ls), s.translate(B, 0, 0), s.translate(r[0] * m[v].an * .005, r[1] * C * .01, 0), h += m[v].l + t.tr * .001 * t.finalSize;
                        }
                        n === "html" ? tt = s.toCSS() : n === "svg" ? tt = s.to2dCSS() : it = [
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
                        ], at = Z;
                    }
                    u <= v ? (D = new LetterProps(at, et, st, rt, tt, it), this.renderedLetters.push(D), u += 1, this.lettersChangedFlag = !0) : (D = this.renderedLetters[v], this.lettersChangedFlag = D.update(at, et, st, rt, tt, it) || this.lettersChangedFlag);
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([
            DynamicPropertyContainer
        ], TextAnimatorProperty);
        function ITextElement() {}
        ITextElement.prototype.initElement = function(t, e, r) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
        }, ITextElement.prototype.prepareFrame = function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
        }, ITextElement.prototype.createPathShape = function(t, e) {
            var r, i = e.length, a, s = "";
            for(r = 0; r < i; r += 1)e[r].ty === "sh" && (a = e[r].ks.k, s += buildShapeString(a, a.i.length, !0, t));
            return s;
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e);
        }, ITextElement.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t);
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t);
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, a) {
            switch(t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j){
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
                    break;
            }
            e.translate(i, a, 0);
        }, ITextElement.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
        };
        var emptyShapeData = {
            shapes: []
        };
        function SVGTextLottieElement(t, e, r) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r);
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
            for(var e = 0, r = t.length, i = [], a = ""; e < r;)t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(a), a = "") : a += t[e], e += 1;
            return i.push(a), i;
        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
            if (t.shapes && t.shapes.length) {
                var r = t.shapes[0];
                if (r.it) {
                    var i = r.it[r.it.length - 1];
                    i.s && (i.s.k[0] = e, i.s.k[1] = e);
                }
            }
            return t;
        }, SVGTextLottieElement.prototype.buildNewText = function() {
            this.addDynamicProperty(this);
            var t, e, r = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
            var i = this.globalData.fontManager.getFontByName(r.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
            else {
                this.layerElement.setAttribute("font-family", i.fFamily);
                var a = r.fWeight, s = r.fStyle;
                this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", a);
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var n = r.l || [], u = !!this.globalData.fontManager.chars;
            e = n.length;
            var h, g = this.mHelper, v = "", E = this.data.singleShape, m = 0, b = 0, y = !0, d = r.tr * .001 * r.finalSize;
            if (E && !u && !r.sz) {
                var A = this.textContainer, p = "start";
                switch(r.j){
                    case 1:
                        p = "end";
                        break;
                    case 2:
                        p = "middle";
                        break;
                    default:
                        p = "start";
                        break;
                }
                A.setAttribute("text-anchor", p), A.setAttribute("letter-spacing", d);
                var o = this.buildTextContents(r.finalText);
                for(e = o.length, b = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)h = this.textSpans[t].span || createNS("tspan"), h.textContent = o[t], h.setAttribute("x", 0), h.setAttribute("y", b), h.style.display = "inherit", A.appendChild(h), this.textSpans[t] || (this.textSpans[t] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t].span = h, b += r.finalLineHeight;
                this.layerElement.appendChild(A);
            } else {
                var l = this.textSpans.length, c;
                for(t = 0; t < e; t += 1){
                    if (this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }), !u || !E || t === 0) {
                        if (h = l > t ? this.textSpans[t].span : createNS(u ? "g" : "text"), l <= t) {
                            if (h.setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = h, u) {
                                var P = createNS("g");
                                h.appendChild(P), this.textSpans[t].childSpan = P;
                            }
                            this.textSpans[t].span = h, this.layerElement.appendChild(h);
                        }
                        h.style.display = "inherit";
                    }
                    if (g.reset(), E && (n[t].n && (m = -d, b += r.yOffset, b += y ? 1 : 0, y = !1), this.applyTextPropertiesToMatrix(r, g, n[t].line, m, b), m += n[t].l || 0, m += d), u) {
                        c = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
                        var M;
                        if (c.t === 1) M = new SVGCompElement(c.data, this.globalData, this);
                        else {
                            var T = emptyShapeData;
                            c.data && c.data.shapes && (T = this.buildShapeData(c.data, r.finalSize)), M = new SVGShapeElement(T, this.globalData, this);
                        }
                        if (this.textSpans[t].glyph) {
                            var F = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(F.layerElement), F.destroy();
                        }
                        this.textSpans[t].glyph = M, M._debug = !0, M.prepareFrame(0), M.renderFrame(), this.textSpans[t].childSpan.appendChild(M.layerElement), c.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")");
                    } else E && h.setAttribute("transform", "translate(" + g.props[12] + "," + g.props[13] + ")"), h.textContent = n[t].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                }
                E && h && h.setAttribute("d", v);
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
            var t, e = this.textSpans.length, r;
            for(this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1)r = this.textSpans[t].glyph, r && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = !0));
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
            if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var t, e, r = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l;
                e = i.length;
                var a, s, n;
                for(t = 0; t < e; t += 1)i[t].n || (a = r[t], s = this.textSpans[t].span, n = this.textSpans[t].glyph, n && n.renderFrame(), a._mdf.m && s.setAttribute("transform", a.m), a._mdf.o && s.setAttribute("opacity", a.o), a._mdf.sw && s.setAttribute("stroke-width", a.sw), a._mdf.sc && s.setAttribute("stroke", a.sc), a._mdf.fc && s.setAttribute("fill", a.fc));
            }
        };
        function ISolidElement(t, e, r) {
            this.initElement(t, e, r);
        }
        extendPrototype([
            IImageElement
        ], ISolidElement), ISolidElement.prototype.createContent = function() {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
        };
        function NullElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy();
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
            var r = createNS("clipPath"), i = createNS("rect");
            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
            var a = createElementID();
            r.setAttribute("id", a), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
        }, SVGRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
            var e = 0, r = this.layers.length;
            for(e = 0; e < r; e += 1)if (this.layers[e].ind === t) return e;
            return -1;
        }, SVGRendererBase.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                e[t] = !0;
                var r = this.createItem(this.layers[t]);
                if (e[t] = r, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
                    var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                    if (i === -1) return;
                    if (!this.elements[i] || this.elements[i] === !0) this.buildItem(i), this.addPendingElement(r);
                    else {
                        var a = e[i], s = a.getMatte(this.layers[t].tt);
                        r.setMatte(s);
                    }
                }
            }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;){
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt) for(var e = 0, r = this.elements.length; e < r;){
                    if (this.elements[e] === t) {
                        var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, a = this.elements[i], s = a.getMatte(this.layers[e].tt);
                        t.setMatte(s);
                        break;
                    }
                    e += 1;
                }
            }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
            if (!(this.renderedFrame === t || this.destroyed)) {
                t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var e, r = this.layers.length;
                for(this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf) for(e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
                for(var i = 0, a; i < e;)this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (a = this.elements[i].getBaseElement()), i += 1;
                a ? this.layerElement.insertBefore(r, a) : this.layerElement.appendChild(r);
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
        ], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
        }, ICompElement.prototype.prepareFrame = function(t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
                }
                var r, i = this.elements.length;
                for(this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0));
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
        function SVGCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
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
            var r = "";
            if (e && e.title) {
                var i = createNS("title"), a = createElementID();
                i.setAttribute("id", a), i.textContent = e.title, this.svgElement.appendChild(i), r += a;
            }
            if (e && e.description) {
                var s = createNS("desc"), n = createElementID();
                s.setAttribute("id", n), s.textContent = e.description, this.svgElement.appendChild(s), r += " " + n;
            }
            r && this.svgElement.setAttribute("aria-labelledby", r);
            var u = createNS("defs");
            this.svgElement.appendChild(u);
            var h = createNS("g");
            this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
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
                defs: u,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
        }
        extendPrototype([
            SVGRendererBase
        ], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this);
        }, registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier);
        var CompExpressionInterface = function() {
            return function(t) {
                function e(r) {
                    for(var i = 0, a = t.layers.length; i < a;){
                        if (t.layers[i].nm === r || t.layers[i].ind === r) return t.elements[i].layerInterface;
                        i += 1;
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
            var r = this, i = 256, a = 6, s = 52, n = "random", u = e.pow(i, a), h = e.pow(2, s), g = h * 2, v = i - 1;
            function m(l, c, P) {
                var M = [];
                c = c === !0 ? {
                    entropy: !0
                } : c || {};
                var T = A(d(c.entropy ? [
                    l,
                    o(t)
                ] : l === null ? p() : l, 3), M), F = new b(M), I = function() {
                    for(var R = F.g(a), L = u, V = 0; R < h;)R = (R + V) * i, L *= i, V = F.g(1);
                    for(; R >= g;)R /= 2, L /= 2, V >>>= 1;
                    return (R + V) / L;
                };
                return I.int32 = function() {
                    return F.g(4) | 0;
                }, I.quick = function() {
                    return F.g(4) / 4294967296;
                }, I.double = I, A(o(F.S), t), (c.pass || P || function(R, L, V, G) {
                    return G && (G.S && y(G, F), R.state = function() {
                        return y(F, {});
                    }), V ? (e[n] = R, L) : R;
                })(I, T, "global" in c ? c.global : this == e, c.state);
            }
            e["seed" + n] = m;
            function b(l) {
                var c, P = l.length, M = this, T = 0, F = M.i = M.j = 0, I = M.S = [];
                for(P || (l = [
                    P++
                ]); T < i;)I[T] = T++;
                for(T = 0; T < i; T++)I[T] = I[F = v & F + l[T % P] + (c = I[T])], I[F] = c;
                M.g = function(R) {
                    for(var L, V = 0, G = M.i, C = M.j, w = M.S; R--;)L = w[G = v & G + 1], V = V * i + w[v & (w[G] = w[C = v & C + L]) + (w[C] = L)];
                    return M.i = G, M.j = C, V;
                };
            }
            function y(l, c) {
                return c.i = l.i, c.j = l.j, c.S = l.S.slice(), c;
            }
            function d(l, c) {
                var P = [], M = _typeof$2(l), T;
                if (c && M == "object") for(T in l)try {
                    P.push(d(l[T], c - 1));
                } catch  {}
                return P.length ? P : M == "string" ? l : l + "\0";
            }
            function A(l, c) {
                for(var P = l + "", M, T = 0; T < P.length;)c[v & T] = v & (M ^= c[v & T] * 19) + P.charCodeAt(T++);
                return o(c);
            }
            function p() {
                try {
                    var l = new Uint8Array(i);
                    return (r.crypto || r.msCrypto).getRandomValues(l), o(l);
                } catch  {
                    var c = r.navigator, P = c && c.plugins;
                    return [
                        +new Date,
                        r,
                        P,
                        r.screen,
                        o(t)
                    ];
                }
            }
            function o(l) {
                return String.fromCharCode.apply(0, l);
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
            var ob = {}, Math1 = BMMath, window1 = null, document1 = null, XMLHttpRequest1 = null, fetch = null, frames = null, _lottieGlobal = {};
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
                    var r, i = t.length, a = [];
                    for(r = 0; r < i; r += 1)a[r] = -t[r];
                    return a;
                }
                return t.propType ? t.v : -t;
            }
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
            function sum(t, e) {
                var r = _typeof$1(t), i = _typeof$1(e);
                if (isNumerable(r, t) && isNumerable(i, e) || r === "string" || i === "string") return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] += e, t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t + e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for(var a = 0, s = t.length, n = e.length, u = []; a < s || a < n;)(typeof t[a] == "number" || t[a] instanceof Number) && (typeof e[a] == "number" || e[a] instanceof Number) ? u[a] = t[a] + e[a] : u[a] = e[a] === void 0 ? t[a] : t[a] || e[a], a += 1;
                    return u;
                }
                return 0;
            }
            var add = sum;
            function sub(t, e) {
                var r = _typeof$1(t), i = _typeof$1(e);
                if (isNumerable(r, t) && isNumerable(i, e)) return r === "string" && (t = parseInt(t, 10)), i === "string" && (e = parseInt(e, 10)), t - e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] -= e, t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t - e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for(var a = 0, s = t.length, n = e.length, u = []; a < s || a < n;)(typeof t[a] == "number" || t[a] instanceof Number) && (typeof e[a] == "number" || e[a] instanceof Number) ? u[a] = t[a] - e[a] : u[a] = e[a] === void 0 ? t[a] : t[a] || e[a], a += 1;
                    return u;
                }
                return 0;
            }
            function mul(t, e) {
                var r = _typeof$1(t), i = _typeof$1(e), a;
                if (isNumerable(r, t) && isNumerable(i, e)) return t * e;
                var s, n;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                    for(n = t.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1)a[s] = t[s] * e;
                    return a;
                }
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                    for(n = e.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1)a[s] = t * e[s];
                    return a;
                }
                return 0;
            }
            function div(t, e) {
                var r = _typeof$1(t), i = _typeof$1(e), a;
                if (isNumerable(r, t) && isNumerable(i, e)) return t / e;
                var s, n;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                    for(n = t.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1)a[s] = t[s] / e;
                    return a;
                }
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                    for(n = e.length, a = createTypedArray("float32", n), s = 0; s < n; s += 1)a[s] = t / e[s];
                    return a;
                }
                return 0;
            }
            function mod(t, e) {
                return typeof t == "string" && (t = parseInt(t, 10)), typeof e == "string" && (e = parseInt(e, 10)), t % e;
            }
            var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
            function clamp(t, e, r) {
                if (e > r) {
                    var i = r;
                    r = e, e = i;
                }
                return Math1.min(Math1.max(t, e), r);
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
                var r, i = Math1.min(t.length, e.length), a = 0;
                for(r = 0; r < i; r += 1)a += Math1.pow(e[r] - t[r], 2);
                return Math1.sqrt(a);
            }
            function normalize(t) {
                return div(t, length(t));
            }
            function rgbToHsl(t) {
                var e = t[0], r = t[1], i = t[2], a = Math1.max(e, r, i), s = Math1.min(e, r, i), n, u, h = (a + s) / 2;
                if (a === s) n = 0, u = 0;
                else {
                    var g = a - s;
                    switch(u = h > .5 ? g / (2 - a - s) : g / (a + s), a){
                        case e:
                            n = (r - i) / g + (r < i ? 6 : 0);
                            break;
                        case r:
                            n = (i - e) / g + 2;
                            break;
                        case i:
                            n = (e - r) / g + 4;
                            break;
                    }
                    n /= 6;
                }
                return [
                    n,
                    u,
                    h,
                    t[3]
                ];
            }
            function hue2rgb(t, e, r) {
                return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 0.5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
            }
            function hslToRgb(t) {
                var e = t[0], r = t[1], i = t[2], a, s, n;
                if (r === 0) a = i, n = i, s = i;
                else {
                    var u = i < .5 ? i * (1 + r) : i + r - i * r, h = 2 * i - u;
                    a = hue2rgb(h, u, e + 1 / 3), s = hue2rgb(h, u, e), n = hue2rgb(h, u, e - 1 / 3);
                }
                return [
                    a,
                    s,
                    n,
                    t[3]
                ];
            }
            function linear(t, e, r, i, a) {
                if ((i === void 0 || a === void 0) && (i = e, a = r, e = 0, r = 1), r < e) {
                    var s = r;
                    r = e, e = s;
                }
                if (t <= e) return i;
                if (t >= r) return a;
                var n = r === e ? 0 : (t - e) / (r - e);
                if (!i.length) return i + (a - i) * n;
                var u, h = i.length, g = createTypedArray("float32", h);
                for(u = 0; u < h; u += 1)g[u] = i[u] + (a[u] - i[u]) * n;
                return g;
            }
            function random(t, e) {
                if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                    var r, i = e.length;
                    t || (t = createTypedArray("float32", i));
                    var a = createTypedArray("float32", i), s = BMMath.random();
                    for(r = 0; r < i; r += 1)a[r] = t[r] + s * (e[r] - t[r]);
                    return a;
                }
                t === void 0 && (t = 0);
                var n = BMMath.random();
                return t + n * (e - t);
            }
            function createPath(t, e, r, i) {
                var a, s = t.length, n = shapePool.newElement();
                n.setPathData(!!i, s);
                var u = [
                    0,
                    0
                ], h, g;
                for(a = 0; a < s; a += 1)h = e && e[a] ? e[a] : u, g = r && r[a] ? r[a] : u, n.setTripleAt(t[a][0], t[a][1], g[0] + t[a][0], g[1] + t[a][1], h[0] + t[a][0], h[1] + t[a][1], a, !0);
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
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = (function t(e, r) {
                    var i, a, s = this.pv.length ? this.pv.length : 1, n = createTypedArray("float32", s);
                    e = 5;
                    var u = Math1.floor(time * e);
                    for(i = 0, a = 0; i < u;){
                        for(a = 0; a < s; a += 1)n[a] += -r + r * 2 * BMMath.random();
                        i += 1;
                    }
                    var h = time * e, g = h - Math1.floor(h), v = createTypedArray("float32", s);
                    if (s > 1) {
                        for(a = 0; a < s; a += 1)v[a] = this.pv[a] + n[a] + (-r + r * 2 * BMMath.random()) * g;
                        return v;
                    }
                    return this.pv + n[0] + (-r + r * 2 * BMMath.random()) * g;
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
                    var r = [
                        e[0] - t[0],
                        e[1] - t[1],
                        e[2] - t[2]
                    ], i = Math1.atan2(r[0], Math1.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads, a = -Math1.atan2(r[1], r[2]) / degToRads;
                    return [
                        a,
                        i,
                        0
                    ];
                }
                function easeOut(t, e, r, i, a) {
                    return applyEase(easeOutBez, t, e, r, i, a);
                }
                function easeIn(t, e, r, i, a) {
                    return applyEase(easeInBez, t, e, r, i, a);
                }
                function ease(t, e, r, i, a) {
                    return applyEase(easeInOutBez, t, e, r, i, a);
                }
                function applyEase(t, e, r, i, a, s) {
                    a === void 0 ? (a = r, s = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                    var n = t(e);
                    if ($bm_isInstanceOfArray(a)) {
                        var u, h = a.length, g = createTypedArray("float32", h);
                        for(u = 0; u < h; u += 1)g[u] = (s[u] - a[u]) * n + a[u];
                        return g;
                    }
                    return (s - a) * n + a;
                }
                function nearestKey(t) {
                    var e, r = data.k.length, i, a;
                    if (!data.k.length || typeof data.k[0] == "number") i = 0, a = 0;
                    else if (i = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t) i = 1, a = data.k[0].t;
                    else {
                        for(e = 0; e < r - 1; e += 1)if (t === data.k[e].t) {
                            i = e + 1, a = data.k[e].t;
                            break;
                        } else if (t > data.k[e].t && t < data.k[e + 1].t) {
                            t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, a = data.k[e + 1].t) : (i = e + 1, a = data.k[e].t);
                            break;
                        }
                        i === -1 && (i = e + 1, a = data.k[e].t);
                    }
                    var s = {};
                    return s.index = i, s.time = a / elem.comp.globalData.frameRate, s;
                }
                function key(t) {
                    var e, r, i;
                    if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t);
                    t -= 1, e = {
                        time: data.k[t].t / elem.comp.globalData.frameRate,
                        value: []
                    };
                    var a = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                    for(i = a.length, r = 0; r < i; r += 1)e[r] = a[r], e.value[r] = a[r];
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
                window1,
                document1,
                XMLHttpRequest1,
                fetch,
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
            function e(r) {
                var i = 0, a = [];
                function s() {
                    i += 1;
                }
                function n() {
                    i -= 1, i === 0 && h();
                }
                function u(g) {
                    a.indexOf(g) === -1 && a.push(g);
                }
                function h() {
                    var g, v = a.length;
                    for(g = 0; g < v; g += 1)a[g].release();
                    a.length = 0;
                }
                r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = s, r.renderer.globalData.popExpression = n, r.renderer.globalData.registerExpressionProperty = u;
            }
            return t;
        }(), MaskManagerInterface = function() {
            function t(r, i) {
                this._mask = r, this._data = i;
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
            var e = function(r) {
                var i = createSizedArray(r.viewData.length), a, s = r.viewData.length;
                for(a = 0; a < s; a += 1)i[a] = new t(r.viewData[a], r.masksProperties[a]);
                var n = function(u) {
                    for(a = 0; a < s;){
                        if (r.masksProperties[a].nm === u) return i[a];
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
            function r(n, u, h) {
                Object.defineProperty(n, "velocity", {
                    get: function() {
                        return u.getVelocityAtTime(u.comp.currentFrame);
                    }
                }), n.numKeys = u.keyframes ? u.keyframes.length : 0, n.key = function(g) {
                    if (!n.numKeys) return 0;
                    var v = "";
                    "s" in u.keyframes[g - 1] ? v = u.keyframes[g - 1].s : "e" in u.keyframes[g - 2] ? v = u.keyframes[g - 2].e : v = u.keyframes[g - 2].s;
                    var E = h === "unidimensional" ? new Number(v) : Object.assign({}, v);
                    return E.time = u.keyframes[g - 1].t / u.elem.comp.globalData.frameRate, E.value = h === "unidimensional" ? v[0] : v, E;
                }, n.valueAtTime = u.getValueAtTime, n.speedAtTime = u.getSpeedAtTime, n.velocityAtTime = u.getVelocityAtTime, n.propertyGroup = u.propertyGroup;
            }
            function i(n) {
                (!n || !("pv" in n)) && (n = t);
                var u = 1 / n.mult, h = n.pv * u, g = new Number(h);
                return g.value = h, r(g, n, "unidimensional"), function() {
                    return n.k && n.getValue(), h = n.v * u, g.value !== h && (g = new Number(h), g.value = h, r(g, n, "unidimensional")), g;
                };
            }
            function a(n) {
                (!n || !("pv" in n)) && (n = e);
                var u = 1 / n.mult, h = n.data && n.data.l || n.pv.length, g = createTypedArray("float32", h), v = createTypedArray("float32", h);
                return g.value = v, r(g, n, "multidimensional"), function() {
                    n.k && n.getValue();
                    for(var E = 0; E < h; E += 1)v[E] = n.v[E] * u, g[E] = v[E];
                    return g;
                };
            }
            function s() {
                return t;
            }
            return function(n) {
                return n ? n.propType === "unidimensional" ? i(n) : a(n) : s;
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
                var r, i, a, s;
                return t.p ? s = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (a = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                    get: function() {
                        return t.p ? s() : [
                            r(),
                            i(),
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
            function t(g) {
                var v = new Matrix;
                if (g !== void 0) {
                    var E = this._elem.finalTransform.mProp.getValueAtTime(g);
                    E.clone(v);
                } else {
                    var m = this._elem.finalTransform.mProp;
                    m.applyToMatrix(v);
                }
                return v;
            }
            function e(g, v) {
                var E = this.getMatrix(v);
                return E.props[12] = 0, E.props[13] = 0, E.props[14] = 0, this.applyPoint(E, g);
            }
            function r(g, v) {
                var E = this.getMatrix(v);
                return this.applyPoint(E, g);
            }
            function i(g, v) {
                var E = this.getMatrix(v);
                return E.props[12] = 0, E.props[13] = 0, E.props[14] = 0, this.invertPoint(E, g);
            }
            function a(g, v) {
                var E = this.getMatrix(v);
                return this.invertPoint(E, g);
            }
            function s(g, v) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var E, m = this._elem.hierarchy.length;
                    for(E = 0; E < m; E += 1)this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(g);
                }
                return g.applyToPointArray(v[0], v[1], v[2] || 0);
            }
            function n(g, v) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var E, m = this._elem.hierarchy.length;
                    for(E = 0; E < m; E += 1)this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(g);
                }
                return g.inversePoint(v);
            }
            function u(g) {
                var v = new Matrix;
                if (v.reset(), this._elem.finalTransform.mProp.applyToMatrix(v), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var E, m = this._elem.hierarchy.length;
                    for(E = 0; E < m; E += 1)this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(v);
                    return v.inversePoint(g);
                }
                return v.inversePoint(g);
            }
            function h() {
                return [
                    1,
                    1,
                    1,
                    1
                ];
            }
            return function(g) {
                var v;
                function E(d) {
                    b.mask = new MaskManagerInterface(d, g);
                }
                function m(d) {
                    b.effect = d;
                }
                function b(d) {
                    switch(d){
                        case "ADBE Root Vectors Group":
                        case "Contents":
                        case 2:
                            return b.shapeInterface;
                        case 1:
                        case 6:
                        case "Transform":
                        case "transform":
                        case "ADBE Transform Group":
                            return v;
                        case 4:
                        case "ADBE Effect Parade":
                        case "effects":
                        case "Effects":
                            return b.effect;
                        case "ADBE Text Properties":
                            return b.textInterface;
                        default:
                            return null;
                    }
                }
                b.getMatrix = t, b.invertPoint = n, b.applyPoint = s, b.toWorld = r, b.toWorldVec = e, b.fromWorld = a, b.fromWorldVec = i, b.toComp = r, b.fromComp = u, b.sampleImage = h, b.sourceRectAtTime = g.sourceRectAtTime.bind(g), b._elem = g, v = TransformExpressionInterface(g.finalTransform.mProp);
                var y = getDescriptor(v, "anchorPoint");
                return Object.defineProperties(b, {
                    hasParent: {
                        get: function() {
                            return g.hierarchy.length;
                        }
                    },
                    parent: {
                        get: function() {
                            return g.hierarchy[0].layerInterface;
                        }
                    },
                    rotation: getDescriptor(v, "rotation"),
                    scale: getDescriptor(v, "scale"),
                    position: getDescriptor(v, "position"),
                    opacity: getDescriptor(v, "opacity"),
                    anchorPoint: y,
                    anchor_point: y,
                    transform: {
                        get: function() {
                            return v;
                        }
                    },
                    active: {
                        get: function() {
                            return g.isInRange;
                        }
                    }
                }), b.startTime = g.data.st, b.index = g.data.ind, b.source = g.data.refId, b.height = g.data.ty === 0 ? g.data.h : 100, b.width = g.data.ty === 0 ? g.data.w : 100, b.inPoint = g.data.ip / g.comp.globalData.frameRate, b.outPoint = g.data.op / g.comp.globalData.frameRate, b._name = g.data.nm, b.registerMaskInterface = E, b.registerEffectsInterface = m, b;
            };
        }(), propertyGroupFactory = function() {
            return function(t, e) {
                return function(r) {
                    return r = r === void 0 ? 1 : r, r <= 0 ? t : e(r - 1);
                };
            };
        }(), PropertyInterface = function() {
            return function(t, e) {
                var r = {
                    _name: t
                };
                function i(a) {
                    return a = a === void 0 ? 1 : a, a <= 0 ? r : e(a - 1);
                }
                return i;
            };
        }(), EffectsExpressionInterface = function() {
            var t = {
                createEffectsInterface: e
            };
            function e(a, s) {
                if (a.effectsManager) {
                    var n = [], u = a.data.ef, h, g = a.effectsManager.effectElements.length;
                    for(h = 0; h < g; h += 1)n.push(r(u[h], a.effectsManager.effectElements[h], s, a));
                    var v = a.data.ef || [], E = function(m) {
                        for(h = 0, g = v.length; h < g;){
                            if (m === v[h].nm || m === v[h].mn || m === v[h].ix) return n[h];
                            h += 1;
                        }
                        return null;
                    };
                    return Object.defineProperty(E, "numProperties", {
                        get: function() {
                            return v.length;
                        }
                    }), E;
                }
                return null;
            }
            function r(a, s, n, u) {
                function h(b) {
                    for(var y = a.ef, d = 0, A = y.length; d < A;){
                        if (b === y[d].nm || b === y[d].mn || b === y[d].ix) return y[d].ty === 5 ? v[d] : v[d]();
                        d += 1;
                    }
                    throw new Error;
                }
                var g = propertyGroupFactory(h, n), v = [], E, m = a.ef.length;
                for(E = 0; E < m; E += 1)a.ef[E].ty === 5 ? v.push(r(a.ef[E], s.effectElements[E], s.effectElements[E].propertyGroup, u)) : v.push(i(s.effectElements[E], a.ef[E].ty, u, g));
                return a.mn === "ADBE Color Control" && Object.defineProperty(h, "color", {
                    get: function() {
                        return v[0]();
                    }
                }), Object.defineProperties(h, {
                    numProperties: {
                        get: function() {
                            return a.np;
                        }
                    },
                    _name: {
                        value: a.nm
                    },
                    propertyGroup: {
                        value: g
                    }
                }), h.enabled = a.en !== 0, h.active = h.enabled, h;
            }
            function i(a, s, n, u) {
                var h = ExpressionPropertyInterface(a.p);
                function g() {
                    return s === 10 ? n.comp.compInterface(a.p.v) : h();
                }
                return a.p.setGroupProperty && a.p.setGroupProperty(PropertyInterface("", u)), g;
            }
            return t;
        }(), ShapePathInterface = function() {
            return function(t, e, r) {
                var i = e.sh;
                function a(n) {
                    return n === "Shape" || n === "shape" || n === "Path" || n === "path" || n === "ADBE Vector Shape" || n === 2 ? a.path : null;
                }
                var s = propertyGroupFactory(a, r);
                return i.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(a, {
                    path: {
                        get: function() {
                            return i.k && i.getValue(), i;
                        }
                    },
                    shape: {
                        get: function() {
                            return i.k && i.getValue(), i;
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
                        value: r
                    }
                }), a;
            };
        }(), ShapeExpressionInterface = function() {
            function t(y, d, A) {
                var p = [], o, l = y ? y.length : 0;
                for(o = 0; o < l; o += 1)y[o].ty === "gr" ? p.push(r(y[o], d[o], A)) : y[o].ty === "fl" ? p.push(i(y[o], d[o], A)) : y[o].ty === "st" ? p.push(n(y[o], d[o], A)) : y[o].ty === "tm" ? p.push(u(y[o], d[o], A)) : y[o].ty === "tr" || (y[o].ty === "el" ? p.push(g(y[o], d[o], A)) : y[o].ty === "sr" ? p.push(v(y[o], d[o], A)) : y[o].ty === "sh" ? p.push(ShapePathInterface(y[o], d[o], A)) : y[o].ty === "rc" ? p.push(E(y[o], d[o], A)) : y[o].ty === "rd" ? p.push(m(y[o], d[o], A)) : y[o].ty === "rp" ? p.push(b(y[o], d[o], A)) : y[o].ty === "gf" ? p.push(a(y[o], d[o], A)) : p.push(s(y[o], d[o])));
                return p;
            }
            function e(y, d, A) {
                var p, o = function(c) {
                    for(var P = 0, M = p.length; P < M;){
                        if (p[P]._name === c || p[P].mn === c || p[P].propertyIndex === c || p[P].ix === c || p[P].ind === c) return p[P];
                        P += 1;
                    }
                    return typeof c == "number" ? p[c - 1] : null;
                };
                o.propertyGroup = propertyGroupFactory(o, A), p = t(y.it, d.it, o.propertyGroup), o.numProperties = p.length;
                var l = h(y.it[y.it.length - 1], d.it[d.it.length - 1], o.propertyGroup);
                return o.transform = l, o.propertyIndex = y.cix, o._name = y.nm, o;
            }
            function r(y, d, A) {
                var p = function(c) {
                    switch(c){
                        case "ADBE Vectors Group":
                        case "Contents":
                        case 2:
                            return p.content;
                        default:
                            return p.transform;
                    }
                };
                p.propertyGroup = propertyGroupFactory(p, A);
                var o = e(y, d, p.propertyGroup), l = h(y.it[y.it.length - 1], d.it[d.it.length - 1], p.propertyGroup);
                return p.content = o, p.transform = l, Object.defineProperty(p, "_name", {
                    get: function() {
                        return y.nm;
                    }
                }), p.numProperties = y.np, p.propertyIndex = y.ix, p.nm = y.nm, p.mn = y.mn, p;
            }
            function i(y, d, A) {
                function p(o) {
                    return o === "Color" || o === "color" ? p.color : o === "Opacity" || o === "opacity" ? p.opacity : null;
                }
                return Object.defineProperties(p, {
                    color: {
                        get: ExpressionPropertyInterface(d.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(d.o)
                    },
                    _name: {
                        value: y.nm
                    },
                    mn: {
                        value: y.mn
                    }
                }), d.c.setGroupProperty(PropertyInterface("Color", A)), d.o.setGroupProperty(PropertyInterface("Opacity", A)), p;
            }
            function a(y, d, A) {
                function p(o) {
                    return o === "Start Point" || o === "start point" ? p.startPoint : o === "End Point" || o === "end point" ? p.endPoint : o === "Opacity" || o === "opacity" ? p.opacity : null;
                }
                return Object.defineProperties(p, {
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
                        value: y.nm
                    },
                    mn: {
                        value: y.mn
                    }
                }), d.s.setGroupProperty(PropertyInterface("Start Point", A)), d.e.setGroupProperty(PropertyInterface("End Point", A)), d.o.setGroupProperty(PropertyInterface("Opacity", A)), p;
            }
            function s() {
                function y() {
                    return null;
                }
                return y;
            }
            function n(y, d, A) {
                var p = propertyGroupFactory(T, A), o = propertyGroupFactory(M, p);
                function l(F) {
                    Object.defineProperty(M, y.d[F].nm, {
                        get: ExpressionPropertyInterface(d.d.dataProps[F].p)
                    });
                }
                var c, P = y.d ? y.d.length : 0, M = {};
                for(c = 0; c < P; c += 1)l(c), d.d.dataProps[c].p.setGroupProperty(o);
                function T(F) {
                    return F === "Color" || F === "color" ? T.color : F === "Opacity" || F === "opacity" ? T.opacity : F === "Stroke Width" || F === "stroke width" ? T.strokeWidth : null;
                }
                return Object.defineProperties(T, {
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
                            return M;
                        }
                    },
                    _name: {
                        value: y.nm
                    },
                    mn: {
                        value: y.mn
                    }
                }), d.c.setGroupProperty(PropertyInterface("Color", p)), d.o.setGroupProperty(PropertyInterface("Opacity", p)), d.w.setGroupProperty(PropertyInterface("Stroke Width", p)), T;
            }
            function u(y, d, A) {
                function p(l) {
                    return l === y.e.ix || l === "End" || l === "end" ? p.end : l === y.s.ix ? p.start : l === y.o.ix ? p.offset : null;
                }
                var o = propertyGroupFactory(p, A);
                return p.propertyIndex = y.ix, d.s.setGroupProperty(PropertyInterface("Start", o)), d.e.setGroupProperty(PropertyInterface("End", o)), d.o.setGroupProperty(PropertyInterface("Offset", o)), p.propertyIndex = y.ix, p.propertyGroup = A, Object.defineProperties(p, {
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
                        value: y.nm
                    }
                }), p.mn = y.mn, p;
            }
            function h(y, d, A) {
                function p(l) {
                    return y.a.ix === l || l === "Anchor Point" ? p.anchorPoint : y.o.ix === l || l === "Opacity" ? p.opacity : y.p.ix === l || l === "Position" ? p.position : y.r.ix === l || l === "Rotation" || l === "ADBE Vector Rotation" ? p.rotation : y.s.ix === l || l === "Scale" ? p.scale : y.sk && y.sk.ix === l || l === "Skew" ? p.skew : y.sa && y.sa.ix === l || l === "Skew Axis" ? p.skewAxis : null;
                }
                var o = propertyGroupFactory(p, A);
                return d.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", o)), d.transform.mProps.p.setGroupProperty(PropertyInterface("Position", o)), d.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", o)), d.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", o)), d.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", o)), d.transform.mProps.sk && (d.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", o)), d.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", o))), d.transform.op.setGroupProperty(PropertyInterface("Opacity", o)), Object.defineProperties(p, {
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
                        value: y.nm
                    }
                }), p.ty = "tr", p.mn = y.mn, p.propertyGroup = A, p;
            }
            function g(y, d, A) {
                function p(c) {
                    return y.p.ix === c ? p.position : y.s.ix === c ? p.size : null;
                }
                var o = propertyGroupFactory(p, A);
                p.propertyIndex = y.ix;
                var l = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                return l.s.setGroupProperty(PropertyInterface("Size", o)), l.p.setGroupProperty(PropertyInterface("Position", o)), Object.defineProperties(p, {
                    size: {
                        get: ExpressionPropertyInterface(l.s)
                    },
                    position: {
                        get: ExpressionPropertyInterface(l.p)
                    },
                    _name: {
                        value: y.nm
                    }
                }), p.mn = y.mn, p;
            }
            function v(y, d, A) {
                function p(c) {
                    return y.p.ix === c ? p.position : y.r.ix === c ? p.rotation : y.pt.ix === c ? p.points : y.or.ix === c || c === "ADBE Vector Star Outer Radius" ? p.outerRadius : y.os.ix === c ? p.outerRoundness : y.ir && (y.ir.ix === c || c === "ADBE Vector Star Inner Radius") ? p.innerRadius : y.is && y.is.ix === c ? p.innerRoundness : null;
                }
                var o = propertyGroupFactory(p, A), l = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                return p.propertyIndex = y.ix, l.or.setGroupProperty(PropertyInterface("Outer Radius", o)), l.os.setGroupProperty(PropertyInterface("Outer Roundness", o)), l.pt.setGroupProperty(PropertyInterface("Points", o)), l.p.setGroupProperty(PropertyInterface("Position", o)), l.r.setGroupProperty(PropertyInterface("Rotation", o)), y.ir && (l.ir.setGroupProperty(PropertyInterface("Inner Radius", o)), l.is.setGroupProperty(PropertyInterface("Inner Roundness", o))), Object.defineProperties(p, {
                    position: {
                        get: ExpressionPropertyInterface(l.p)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(l.r)
                    },
                    points: {
                        get: ExpressionPropertyInterface(l.pt)
                    },
                    outerRadius: {
                        get: ExpressionPropertyInterface(l.or)
                    },
                    outerRoundness: {
                        get: ExpressionPropertyInterface(l.os)
                    },
                    innerRadius: {
                        get: ExpressionPropertyInterface(l.ir)
                    },
                    innerRoundness: {
                        get: ExpressionPropertyInterface(l.is)
                    },
                    _name: {
                        value: y.nm
                    }
                }), p.mn = y.mn, p;
            }
            function E(y, d, A) {
                function p(c) {
                    return y.p.ix === c ? p.position : y.r.ix === c ? p.roundness : y.s.ix === c || c === "Size" || c === "ADBE Vector Rect Size" ? p.size : null;
                }
                var o = propertyGroupFactory(p, A), l = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                return p.propertyIndex = y.ix, l.p.setGroupProperty(PropertyInterface("Position", o)), l.s.setGroupProperty(PropertyInterface("Size", o)), l.r.setGroupProperty(PropertyInterface("Rotation", o)), Object.defineProperties(p, {
                    position: {
                        get: ExpressionPropertyInterface(l.p)
                    },
                    roundness: {
                        get: ExpressionPropertyInterface(l.r)
                    },
                    size: {
                        get: ExpressionPropertyInterface(l.s)
                    },
                    _name: {
                        value: y.nm
                    }
                }), p.mn = y.mn, p;
            }
            function m(y, d, A) {
                function p(c) {
                    return y.r.ix === c || c === "Round Corners 1" ? p.radius : null;
                }
                var o = propertyGroupFactory(p, A), l = d;
                return p.propertyIndex = y.ix, l.rd.setGroupProperty(PropertyInterface("Radius", o)), Object.defineProperties(p, {
                    radius: {
                        get: ExpressionPropertyInterface(l.rd)
                    },
                    _name: {
                        value: y.nm
                    }
                }), p.mn = y.mn, p;
            }
            function b(y, d, A) {
                function p(c) {
                    return y.c.ix === c || c === "Copies" ? p.copies : y.o.ix === c || c === "Offset" ? p.offset : null;
                }
                var o = propertyGroupFactory(p, A), l = d;
                return p.propertyIndex = y.ix, l.c.setGroupProperty(PropertyInterface("Copies", o)), l.o.setGroupProperty(PropertyInterface("Offset", o)), Object.defineProperties(p, {
                    copies: {
                        get: ExpressionPropertyInterface(l.c)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(l.o)
                    },
                    _name: {
                        value: y.nm
                    }
                }), p.mn = y.mn, p;
            }
            return function(y, d, A) {
                var p;
                function o(c) {
                    if (typeof c == "number") return c = c === void 0 ? 1 : c, c === 0 ? A : p[c - 1];
                    for(var P = 0, M = p.length; P < M;){
                        if (p[P]._name === c) return p[P];
                        P += 1;
                    }
                    return null;
                }
                function l() {
                    return A;
                }
                return o.propertyGroup = propertyGroupFactory(o, l), p = t(y, d, o.propertyGroup), o.numProperties = p.length, o._name = "Contents", o;
            };
        }(), TextExpressionInterface = function() {
            return function(t) {
                var e;
                function r(i) {
                    switch(i){
                        case "ADBE Text Document":
                            return r.sourceText;
                        default:
                            return null;
                    }
                }
                return Object.defineProperty(r, "sourceText", {
                    get: function() {
                        t.textProperty.getValue();
                        var i = t.textProperty.currentData.t;
                        return (!e || i !== e.value) && (e = new String(i), e.value = i || new String(i), Object.defineProperty(e, "style", {
                            get: function() {
                                return {
                                    fillColor: t.textProperty.currentData.fc
                                };
                            }
                        })), e;
                    }
                }), r;
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
            var t = function(r) {
                var i = "", a = r.getFootageData();
                function s() {
                    return i = "", a = r.getFootageData(), n;
                }
                function n(u) {
                    if (a[u]) return i = u, a = a[u], _typeof(a) === "object" ? n : a;
                    var h = u.indexOf(i);
                    if (h !== -1) {
                        var g = parseInt(u.substr(h + i.length), 10);
                        return a = a[g], _typeof(a) === "object" ? n : a;
                    }
                    return "";
                }
                return s;
            }, e = function(r) {
                function i(a) {
                    return a === "Outline" ? i.outlineInterface() : null;
                }
                return i._name = "Outline", i.outlineInterface = t(r), i;
            };
            return function(r) {
                function i(a) {
                    return a === "Data" ? i.dataInterface : null;
                }
                return i._name = "Data", i.dataInterface = e(r), i;
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
            function t(n, u, h) {
                u.x && (h.k = !0, h.x = !0, h.initiateExpression = ExpressionManager.initiateExpression, h.effectsSequence.push(h.initiateExpression(n, u, h).bind(h)));
            }
            function e(n) {
                return n *= this.elem.globalData.frameRate, n -= this.offsetTime, n !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime), this._cachingAtTime.lastFrame = n), this._cachingAtTime.value;
            }
            function r(n) {
                var u = -0.01, h = this.getValueAtTime(n), g = this.getValueAtTime(n + u), v = 0;
                if (h.length) {
                    var E;
                    for(E = 0; E < h.length; E += 1)v += Math.pow(g[E] - h[E], 2);
                    v = Math.sqrt(v) * 100;
                } else v = 0;
                return v;
            }
            function i(n) {
                if (this.vel !== void 0) return this.vel;
                var u = -0.001, h = this.getValueAtTime(n), g = this.getValueAtTime(n + u), v;
                if (h.length) {
                    v = createTypedArray("float32", h.length);
                    var E;
                    for(E = 0; E < h.length; E += 1)v[E] = (g[E] - h[E]) / u;
                } else v = (g - h) / u;
                return v;
            }
            function a() {
                return this.pv;
            }
            function s(n) {
                this.propertyGroup = n;
            }
            return {
                searchExpressions: t,
                getSpeedAtTime: r,
                getVelocityAtTime: i,
                getValueAtTime: e,
                getStaticValueAtTime: a,
                setGroupProperty: s
            };
        }();
        function addPropertyDecorator() {
            function t(m, b, y) {
                if (!this.k || !this.keyframes) return this.pv;
                m = m ? m.toLowerCase() : "";
                var d = this.comp.renderedFrame, A = this.keyframes, p = A[A.length - 1].t;
                if (d <= p) return this.pv;
                var o, l;
                y ? (b ? o = Math.abs(p - this.elem.comp.globalData.frameRate * b) : o = Math.max(0, p - this.elem.data.ip), l = p - o) : ((!b || b > A.length - 1) && (b = A.length - 1), l = A[A.length - 1 - b].t, o = p - l);
                var c, P, M;
                if (m === "pingpong") {
                    var T = Math.floor((d - l) / o);
                    if (T % 2 !== 0) return this.getValueAtTime((o - (d - l) % o + l) / this.comp.globalData.frameRate, 0);
                } else if (m === "offset") {
                    var F = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), I = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), R = this.getValueAtTime(((d - l) % o + l) / this.comp.globalData.frameRate, 0), L = Math.floor((d - l) / o);
                    if (this.pv.length) {
                        for(M = new Array(F.length), P = M.length, c = 0; c < P; c += 1)M[c] = (I[c] - F[c]) * L + R[c];
                        return M;
                    }
                    return (I - F) * L + R;
                } else if (m === "continue") {
                    var V = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), G = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(M = new Array(V.length), P = M.length, c = 0; c < P; c += 1)M[c] = V[c] + (V[c] - G[c]) * ((d - p) / this.comp.globalData.frameRate) / 5e-4;
                        return M;
                    }
                    return V + (V - G) * ((d - p) / .001);
                }
                return this.getValueAtTime(((d - l) % o + l) / this.comp.globalData.frameRate, 0);
            }
            function e(m, b, y) {
                if (!this.k) return this.pv;
                m = m ? m.toLowerCase() : "";
                var d = this.comp.renderedFrame, A = this.keyframes, p = A[0].t;
                if (d >= p) return this.pv;
                var o, l;
                y ? (b ? o = Math.abs(this.elem.comp.globalData.frameRate * b) : o = Math.max(0, this.elem.data.op - p), l = p + o) : ((!b || b > A.length - 1) && (b = A.length - 1), l = A[b].t, o = l - p);
                var c, P, M;
                if (m === "pingpong") {
                    var T = Math.floor((p - d) / o);
                    if (T % 2 === 0) return this.getValueAtTime(((p - d) % o + p) / this.comp.globalData.frameRate, 0);
                } else if (m === "offset") {
                    var F = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), I = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), R = this.getValueAtTime((o - (p - d) % o + p) / this.comp.globalData.frameRate, 0), L = Math.floor((p - d) / o) + 1;
                    if (this.pv.length) {
                        for(M = new Array(F.length), P = M.length, c = 0; c < P; c += 1)M[c] = R[c] - (I[c] - F[c]) * L;
                        return M;
                    }
                    return R - (I - F) * L;
                } else if (m === "continue") {
                    var V = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), G = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(M = new Array(V.length), P = M.length, c = 0; c < P; c += 1)M[c] = V[c] + (V[c] - G[c]) * (p - d) / .001;
                        return M;
                    }
                    return V + (V - G) * (p - d) / .001;
                }
                return this.getValueAtTime((o - ((p - d) % o + p)) / this.comp.globalData.frameRate, 0);
            }
            function r(m, b) {
                if (!this.k) return this.pv;
                if (m = (m || .4) * .5, b = Math.floor(b || 5), b <= 1) return this.pv;
                var y = this.comp.renderedFrame / this.comp.globalData.frameRate, d = y - m, A = y + m, p = b > 1 ? (A - d) / (b - 1) : 1, o = 0, l = 0, c;
                this.pv.length ? c = createTypedArray("float32", this.pv.length) : c = 0;
                for(var P; o < b;){
                    if (P = this.getValueAtTime(d + o * p), this.pv.length) for(l = 0; l < this.pv.length; l += 1)c[l] += P[l];
                    else c += P;
                    o += 1;
                }
                if (this.pv.length) for(l = 0; l < this.pv.length; l += 1)c[l] /= b;
                else c /= b;
                return c;
            }
            function i(m) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var b = this._transformCachingAtTime.v;
                if (b.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var y = this.a.getValueAtTime(m);
                    b.translate(-y[0] * this.a.mult, -y[1] * this.a.mult, y[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                    var d = this.s.getValueAtTime(m);
                    b.scale(d[0] * this.s.mult, d[1] * this.s.mult, d[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var A = this.sk.getValueAtTime(m), p = this.sa.getValueAtTime(m);
                    b.skewFromAxis(-A * this.sk.mult, p * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                    var o = this.r.getValueAtTime(m);
                    b.rotate(-o * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                    var l = this.rz.getValueAtTime(m), c = this.ry.getValueAtTime(m), P = this.rx.getValueAtTime(m), M = this.or.getValueAtTime(m);
                    b.rotateZ(-l * this.rz.mult).rotateY(c * this.ry.mult).rotateX(P * this.rx.mult).rotateZ(-M[2] * this.or.mult).rotateY(M[1] * this.or.mult).rotateX(M[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                    var T = this.px.getValueAtTime(m), F = this.py.getValueAtTime(m);
                    if (this.data.p.z) {
                        var I = this.pz.getValueAtTime(m);
                        b.translate(T * this.px.mult, F * this.py.mult, -I * this.pz.mult);
                    } else b.translate(T * this.px.mult, F * this.py.mult, 0);
                } else {
                    var R = this.p.getValueAtTime(m);
                    b.translate(R[0] * this.p.mult, R[1] * this.p.mult, -R[2] * this.p.mult);
                }
                return b;
            }
            function a() {
                return this.v.clone(new Matrix);
            }
            var s = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(m, b, y) {
                var d = s(m, b, y);
                return d.dynamicProperties.length ? d.getValueAtTime = i.bind(d) : d.getValueAtTime = a.bind(d), d.setGroupProperty = expressionHelpers.setGroupProperty, d;
            };
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function(m, b, y, d, A) {
                var p = n(m, b, y, d, A);
                p.kf ? p.getValueAtTime = expressionHelpers.getValueAtTime.bind(p) : p.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p.loopOut = t, p.loopIn = e, p.smooth = r, p.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(p), p.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(p), p.numKeys = b.a === 1 ? b.k.length : 0, p.propertyIndex = b.ix;
                var o = 0;
                return y !== 0 && (o = createTypedArray("float32", b.a === 1 ? b.k[0].s.length : b.k.length)), p._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: o
                }, expressionHelpers.searchExpressions(m, b, p), p.k && A.addDynamicProperty(p), p;
            };
            function u(m) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), m *= this.elem.globalData.frameRate, m -= this.offsetTime, m !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < m ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = m, this.interpolateShape(m, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
            }
            var h = ShapePropertyFactory.getConstructorFunction(), g = ShapePropertyFactory.getKeyframedConstructorFunction();
            function v() {}
            v.prototype = {
                vertices: function(m, b) {
                    this.k && this.getValue();
                    var y = this.v;
                    b !== void 0 && (y = this.getValueAtTime(b, 0));
                    var d, A = y._length, p = y[m], o = y.v, l = createSizedArray(A);
                    for(d = 0; d < A; d += 1)m === "i" || m === "o" ? l[d] = [
                        p[d][0] - o[d][0],
                        p[d][1] - o[d][1]
                    ] : l[d] = [
                        p[d][0],
                        p[d][1]
                    ];
                    return l;
                },
                points: function(m) {
                    return this.vertices("v", m);
                },
                inTangents: function(m) {
                    return this.vertices("i", m);
                },
                outTangents: function(m) {
                    return this.vertices("o", m);
                },
                isClosed: function() {
                    return this.v.c;
                },
                pointOnPath: function(m, b) {
                    var y = this.v;
                    b !== void 0 && (y = this.getValueAtTime(b, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(y));
                    for(var d = this._segmentsLength, A = d.lengths, p = d.totalLength * m, o = 0, l = A.length, c = 0, P; o < l;){
                        if (c + A[o].addedLength > p) {
                            var M = o, T = y.c && o === l - 1 ? 0 : o + 1, F = (p - c) / A[o].addedLength;
                            P = bez.getPointInSegment(y.v[M], y.v[T], y.o[M], y.i[T], F, A[o]);
                            break;
                        } else c += A[o].addedLength;
                        o += 1;
                    }
                    return P || (P = y.c ? [
                        y.v[0][0],
                        y.v[0][1]
                    ] : [
                        y.v[y._length - 1][0],
                        y.v[y._length - 1][1]
                    ]), P;
                },
                vectorOnPath: function(m, b, y) {
                    m == 1 ? m = this.v.c : m == 0 && (m = .999);
                    var d = this.pointOnPath(m, b), A = this.pointOnPath(m + .001, b), p = A[0] - d[0], o = A[1] - d[1], l = Math.sqrt(Math.pow(p, 2) + Math.pow(o, 2));
                    if (l === 0) return [
                        0,
                        0
                    ];
                    var c = y === "tangent" ? [
                        p / l,
                        o / l
                    ] : [
                        -o / l,
                        p / l
                    ];
                    return c;
                },
                tangentOnPath: function(m, b) {
                    return this.vectorOnPath(m, b, "tangent");
                },
                normalOnPath: function(m, b) {
                    return this.vectorOnPath(m, b, "normal");
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([
                v
            ], h), extendPrototype([
                v
            ], g), g.prototype.getValueAtTime = u, g.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var E = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(m, b, y, d, A) {
                var p = E(m, b, y, d, A);
                return p.propertyIndex = b.ix, p.lock = !1, y === 3 ? expressionHelpers.searchExpressions(m, b.pt, p) : y === 4 && expressionHelpers.searchExpressions(m, b.ks, p), p.k && m.addDynamicProperty(p), p;
            };
        }
        function initialize$1() {
            addPropertyDecorator();
        }
        function addDecorator() {
            function t() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
            }
            TextProperty.prototype.getExpressionValue = function(e, r) {
                var i = this.calculateExpression(r);
                if (e.t !== i) {
                    var a = {};
                    return this.copyData(a, e), a.t = i.toString(), a.__complete = !1, a;
                }
                return e;
            }, TextProperty.prototype.searchProperty = function() {
                var e = this.searchKeyframes(), r = this.searchExpressions();
                return this.kf = e || r, this.kf;
            }, TextProperty.prototype.searchExpressions = t;
        }
        function initialize() {
            addDecorator();
        }
        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
            createMergeNode: function t(e, r) {
                var i = createNS("feMerge");
                i.setAttribute("result", e);
                var a, s;
                for(s = 0; s < r.length; s += 1)a = createNS("feMergeNode"), a.setAttribute("in", r[s]), i.appendChild(a), i.appendChild(a);
                return i;
            }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
        function SVGTintFilter(t, e, r, i, a) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = s, s.setAttribute("result", i + "_tint_1"), t.appendChild(s), s = createNS("feColorMatrix"), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i + "_tint_2"), t.appendChild(s), this.matrixFilter = s;
            var n = this.createMergeNode(i, [
                a,
                i + "_tint_1",
                i + "_tint_2"
            ]);
            t.appendChild(n);
        }
        extendPrototype([
            SVGComposableEffect
        ], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100;
                this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0");
            }
        };
        function SVGFillFilter(t, e, r, i) {
            this.filterManager = e;
            var a = createNS("feColorMatrix");
            a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i), t.appendChild(a), this.matrixFilter = a;
        }
        SVGFillFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0");
            }
        };
        function SVGStrokeEffect(t, e, r) {
            this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = [];
        }
        SVGStrokeEffect.prototype.initialize = function() {
            var t = this.elem.layerElement.children || this.elem.layerElement.childNodes, e, r, i, a;
            for(this.filterManager.effectElements[1].p.v === 1 ? (a = this.elem.maskManager.masksProperties.length, i = 0) : (i = this.filterManager.effectElements[0].p.v - 1, a = i + 1), r = createNS("g"), r.setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-dashoffset", 1), i; i < a; i += 1)e = createNS("path"), r.appendChild(e), this.paths.push({
                p: e,
                m: i
            });
            if (this.filterManager.effectElements[10].p.v === 3) {
                var s = createNS("mask"), n = createElementID();
                s.setAttribute("id", n), s.setAttribute("mask-type", "alpha"), s.appendChild(r), this.elem.globalData.defs.appendChild(s);
                var u = createNS("g");
                for(u.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); t[0];)u.appendChild(t[0]);
                this.elem.layerElement.appendChild(u), this.masker = s, r.setAttribute("stroke", "#fff");
            } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                if (this.filterManager.effectElements[10].p.v === 2) for(t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length;)this.elem.layerElement.removeChild(t[0]);
                this.elem.layerElement.appendChild(r), this.elem.layerElement.removeAttribute("mask"), r.setAttribute("stroke", "#fff");
            }
            this.initialized = !0, this.pathMasker = r;
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
            this.initialized || this.initialize();
            var e, r = this.paths.length, i, a;
            for(e = 0; e < r; e += 1)if (this.paths[e].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[e].m], a = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && a.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                var s;
                if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                    var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, u = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, h = a.getTotalLength();
                    s = "0 0 0 " + h * n + " ";
                    var g = h * (u - n), v = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01, E = Math.floor(g / v), m;
                    for(m = 0; m < E; m += 1)s += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                    s += "0 " + h * 10 + " 0 0";
                } else s = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                a.setAttribute("stroke-dasharray", s);
            }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var b = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(b[0] * 255) + "," + bmFloor(b[1] * 255) + "," + bmFloor(b[2] * 255) + ")");
            }
        };
        function SVGTritoneFilter(t, e, r, i) {
            this.filterManager = e;
            var a = createNS("feColorMatrix");
            a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(a);
            var s = createNS("feComponentTransfer");
            s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", i), this.matrixFilter = s;
            var n = createNS("feFuncR");
            n.setAttribute("type", "table"), s.appendChild(n), this.feFuncR = n;
            var u = createNS("feFuncG");
            u.setAttribute("type", "table"), s.appendChild(u), this.feFuncG = u;
            var h = createNS("feFuncB");
            h.setAttribute("type", "table"), s.appendChild(h), this.feFuncB = h, t.appendChild(s);
        }
        SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, a = i[0] + " " + r[0] + " " + e[0], s = i[1] + " " + r[1] + " " + e[1], n = i[2] + " " + r[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", n);
            }
        };
        function SVGProLevelsFilter(t, e, r, i) {
            this.filterManager = e;
            var a = this.filterManager.effectElements, s = createNS("feComponentTransfer");
            (a[10].p.k || a[10].p.v !== 0 || a[11].p.k || a[11].p.v !== 1 || a[12].p.k || a[12].p.v !== 1 || a[13].p.k || a[13].p.v !== 0 || a[14].p.k || a[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", s)), (a[17].p.k || a[17].p.v !== 0 || a[18].p.k || a[18].p.v !== 1 || a[19].p.k || a[19].p.v !== 1 || a[20].p.k || a[20].p.v !== 0 || a[21].p.k || a[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", s)), (a[24].p.k || a[24].p.v !== 0 || a[25].p.k || a[25].p.v !== 1 || a[26].p.k || a[26].p.v !== 1 || a[27].p.k || a[27].p.v !== 0 || a[28].p.k || a[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", s)), (a[31].p.k || a[31].p.v !== 0 || a[32].p.k || a[32].p.v !== 1 || a[33].p.k || a[33].p.v !== 1 || a[34].p.k || a[34].p.v !== 0 || a[35].p.k || a[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s)), (a[3].p.k || a[3].p.v !== 0 || a[4].p.k || a[4].p.v !== 1 || a[5].p.k || a[5].p.v !== 1 || a[6].p.k || a[6].p.v !== 0 || a[7].p.k || a[7].p.v !== 1) && (s = createNS("feComponentTransfer"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", i), t.appendChild(s), this.feFuncRComposed = this.createFeFunc("feFuncR", s), this.feFuncGComposed = this.createFeFunc("feFuncG", s), this.feFuncBComposed = this.createFeFunc("feFuncB", s));
        }
        SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
            var r = createNS(t);
            return r.setAttribute("type", "table"), e.appendChild(r), r;
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, a) {
            for(var s = 0, n = 256, u, h = Math.min(t, e), g = Math.max(t, e), v = Array.call(null, {
                length: n
            }), E, m = 0, b = a - i, y = e - t; s <= 256;)u = s / 256, u <= h ? E = y < 0 ? a : i : u >= g ? E = y < 0 ? i : a : E = i + b * Math.pow((u - t) / y, 1 / r), v[m] = E, m += 1, s += 256 / (n - 1);
            return v.join(" ");
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e, r = this.filterManager.effectElements;
                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e));
            }
        };
        function SVGDropShadowEffect(t, e, r, i, a) {
            var s = e.container.globalData.renderConfig.filterSize, n = e.data.fs || s;
            t.setAttribute("x", n.x || s.x), t.setAttribute("y", n.y || s.y), t.setAttribute("width", n.width || s.width), t.setAttribute("height", n.height || s.height), this.filterManager = e;
            var u = createNS("feGaussianBlur");
            u.setAttribute("in", "SourceAlpha"), u.setAttribute("result", i + "_drop_shadow_1"), u.setAttribute("stdDeviation", "0"), this.feGaussianBlur = u, t.appendChild(u);
            var h = createNS("feOffset");
            h.setAttribute("dx", "25"), h.setAttribute("dy", "0"), h.setAttribute("in", i + "_drop_shadow_1"), h.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = h, t.appendChild(h);
            var g = createNS("feFlood");
            g.setAttribute("flood-color", "#00ff00"), g.setAttribute("flood-opacity", "1"), g.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = g, t.appendChild(g);
            var v = createNS("feComposite");
            v.setAttribute("in", i + "_drop_shadow_3"), v.setAttribute("in2", i + "_drop_shadow_2"), v.setAttribute("operator", "in"), v.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(v);
            var E = this.createMergeNode(i, [
                i + "_drop_shadow_4",
                a
            ]);
            t.appendChild(E);
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
                    var r = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, a = r * Math.cos(i), s = r * Math.sin(i);
                    this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", s);
                }
            }
        };
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(t, e, r) {
            this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement;
        }
        SVGMatte3Effect.prototype.findSymbol = function(t) {
            for(var e = 0, r = _svgMatteSymbols.length; e < r;){
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1;
            }
            return null;
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
                for(var i = r.children, a = 0, s = i.length; a < s && i[a] !== t.layerElement;)a += 1;
                var n;
                a <= s - 2 && (n = i[a + 1]);
                var u = createNS("use");
                u.setAttribute("href", "#" + e), n ? r.insertBefore(u, n) : r.appendChild(u);
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
                var r = createElementID(), i = createNS("mask");
                i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var a = t.globalData.defs;
                a.appendChild(i);
                var s = createNS("symbol");
                s.setAttribute("id", r), this.replaceInParent(e, r), s.appendChild(e.layerElement), a.appendChild(s);
                var n = createNS("use");
                n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show();
            }
            t.setMatte(e.layerId);
        }, SVGMatte3Effect.prototype.initialize = function() {
            for(var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;)e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
            this.initialized = !0;
        }, SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize();
        };
        function SVGGaussianBlurEffect(t, e, r, i) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var a = createNS("feGaussianBlur");
            a.setAttribute("result", i), t.appendChild(a), this.feGaussianBlur = a;
        }
        SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = .3, r = this.filterManager.effectElements[0].p.v * e, i = this.filterManager.effectElements[1].p.v, a = i == 3 ? 0 : r, s = i == 2 ? 0 : r;
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
                var e = this.effectsManager.effectElements, r = e[0].p.v, i = e[1].p.v, a = e[2].p.v === 1, s = e[3].p.v, n = a ? s : e[4].p.v, u = e[5].p.v, h = e[6].p.v, g = e[7].p.v;
                this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(n * .01, s * .01, 1), this.matrix.rotate(-g * degToRads), this.matrix.skewFromAxis(-u * degToRads, (h + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0);
            }
        };
        function SVGTransformEffect(t, e) {
            this.init(e);
        }
        return extendPrototype([
            TransformEffect
        ], SVGTransformEffect), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), registerEffect(35, SVGTransformEffect, !1), lottie;
    });
}), gt = ut(); /*! Bundled license information:

lottie-web/build/player/lottie_svg.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)
*/ 

},{"./chunk-HDDX7F4A.mjs":"2Aqr0","./chunk-ZWH2ESXT.mjs":"jX5B9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7jTz2"], null, "parcelRequire94c2")

//# sourceMappingURL=lottie_svg-MJGYILXD-NRTSROOT.a2ed2711.js.map
