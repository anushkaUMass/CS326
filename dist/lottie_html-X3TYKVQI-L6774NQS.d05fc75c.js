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
})({"6A6Ew":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6c3b9400d05fc75c";
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

},{}],"Rkjxe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>yt) //# sourceMappingURL=out.js.map
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
            var i, r = t.length, s;
            for(i = 0; i < r; i += 1){
                s = t[i].prototype;
                for(var a in s)Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a]);
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
                var s = 0, a = [], n;
                switch(i){
                    case "int16":
                    case "uint8c":
                        n = 1;
                        break;
                    default:
                        n = 1.1;
                        break;
                }
                for(s = 0; s < r; s += 1)a.push(n);
                return a;
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
                var i = createSizedArray(t.length), r, s = t.length;
                for(r = 0; r < s; r += 1)i[r] = Math.abs(t[r]);
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
            var r, s, a, n, f, o, d, v;
            switch(n = Math.floor(t * 6), f = t * 6 - n, o = i * (1 - e), d = i * (1 - f * e), v = i * (1 - (1 - f) * e), n % 6){
                case 0:
                    r = i, s = v, a = o;
                    break;
                case 1:
                    r = d, s = i, a = o;
                    break;
                case 2:
                    r = o, s = i, a = v;
                    break;
                case 3:
                    r = o, s = d, a = i;
                    break;
                case 4:
                    r = v, s = o, a = i;
                    break;
                case 5:
                    r = i, s = o, a = d;
                    break;
            }
            return [
                r,
                s,
                a
            ];
        }
        function RGBtoHSV(t, e, i) {
            var r = Math.max(t, e, i), s = Math.min(t, e, i), a = r - s, n, f = r === 0 ? 0 : a / r, o = r / 255;
            switch(r){
                case s:
                    n = 0;
                    break;
                case t:
                    n = e - i + a * (e < i ? 6 : 0), n /= 6 * a;
                    break;
                case e:
                    n = i - t + a * 2, n /= 6 * a;
                    break;
                case i:
                    n = t - e + a * 4, n /= 6 * a;
                    break;
            }
            return [
                n,
                f,
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
            return function(r, s, a) {
                return r < 0 && (r = 0), s < 0 && (s = 0), a < 0 && (a = 0), "#" + t[r] + t[s] + t[a];
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
            var t = 1, e = [], i, r, s = {
                onmessage: function() {},
                postMessage: function(m) {
                    i({
                        data: m
                    });
                }
            }, a = {
                postMessage: function(m) {
                    s.onmessage({
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
                    }), g = URL.createObjectURL(b);
                    return new Worker(g);
                }
                return i = m, s;
            }
            function f() {
                r || (r = n(function(m) {
                    function b() {
                        function y(C, w) {
                            var x, _, c = C.length, S, F, T, N;
                            for(_ = 0; _ < c; _ += 1)if (x = C[_], "ks" in x && !x.completed) {
                                if (x.completed = !0, x.hasMask) {
                                    var L = x.masksProperties;
                                    for(F = L.length, S = 0; S < F; S += 1)if (L[S].pt.k.i) u(L[S].pt.k);
                                    else for(N = L[S].pt.k.length, T = 0; T < N; T += 1)L[S].pt.k[T].s && u(L[S].pt.k[T].s[0]), L[S].pt.k[T].e && u(L[S].pt.k[T].e[0]);
                                }
                                x.ty === 0 ? (x.layers = h(x.refId, w), y(x.layers, w)) : x.ty === 4 ? l(x.shapes) : x.ty === 5 && B(x);
                            }
                        }
                        function A(C, w) {
                            if (C) {
                                var x = 0, _ = C.length;
                                for(x = 0; x < _; x += 1)C[x].t === 1 && (C[x].data.layers = h(C[x].data.refId, w), y(C[x].data.layers, w));
                            }
                        }
                        function p(C, w) {
                            for(var x = 0, _ = w.length; x < _;){
                                if (w[x].id === C) return w[x];
                                x += 1;
                            }
                            return null;
                        }
                        function h(C, w) {
                            var x = p(C, w);
                            return x ? x.layers.__used ? JSON.parse(JSON.stringify(x.layers)) : (x.layers.__used = !0, x.layers) : null;
                        }
                        function l(C) {
                            var w, x = C.length, _, c;
                            for(w = x - 1; w >= 0; w -= 1)if (C[w].ty === "sh") {
                                if (C[w].ks.k.i) u(C[w].ks.k);
                                else for(c = C[w].ks.k.length, _ = 0; _ < c; _ += 1)C[w].ks.k[_].s && u(C[w].ks.k[_].s[0]), C[w].ks.k[_].e && u(C[w].ks.k[_].e[0]);
                            } else C[w].ty === "gr" && l(C[w].it);
                        }
                        function u(C) {
                            var w, x = C.i.length;
                            for(w = 0; w < x; w += 1)C.i[w][0] += C.v[w][0], C.i[w][1] += C.v[w][1], C.o[w][0] += C.v[w][0], C.o[w][1] += C.v[w][1];
                        }
                        function E(C, w) {
                            var x = w ? w.split(".") : [
                                100,
                                100,
                                100
                            ];
                            return C[0] > x[0] ? !0 : x[0] > C[0] ? !1 : C[1] > x[1] ? !0 : x[1] > C[1] ? !1 : C[2] > x[2] ? !0 : x[2] > C[2] ? !1 : null;
                        }
                        var M = function() {
                            var C = [
                                4,
                                4,
                                14
                            ];
                            function w(_) {
                                var c = _.t.d;
                                _.t.d = {
                                    k: [
                                        {
                                            s: c,
                                            t: 0
                                        }
                                    ]
                                };
                            }
                            function x(_) {
                                var c, S = _.length;
                                for(c = 0; c < S; c += 1)_[c].ty === 5 && w(_[c]);
                            }
                            return function(_) {
                                if (E(C, _.v) && (x(_.layers), _.assets)) {
                                    var c, S = _.assets.length;
                                    for(c = 0; c < S; c += 1)_.assets[c].layers && x(_.assets[c].layers);
                                }
                            };
                        }(), D = function() {
                            var C = [
                                4,
                                7,
                                99
                            ];
                            return function(w) {
                                if (w.chars && !E(C, w.v)) {
                                    var x, _ = w.chars.length;
                                    for(x = 0; x < _; x += 1){
                                        var c = w.chars[x];
                                        c.data && c.data.shapes && (l(c.data.shapes), c.data.ip = 0, c.data.op = 99999, c.data.st = 0, c.data.sr = 1, c.data.ks = {
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
                                        }, w.chars[x].t || (c.data.shapes.push({
                                            ty: "no"
                                        }), c.data.shapes[0].it.push({
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
                        }(), k = function() {
                            var C = [
                                5,
                                7,
                                15
                            ];
                            function w(_) {
                                var c = _.t.p;
                                typeof c.a == "number" && (c.a = {
                                    a: 0,
                                    k: c.a
                                }), typeof c.p == "number" && (c.p = {
                                    a: 0,
                                    k: c.p
                                }), typeof c.r == "number" && (c.r = {
                                    a: 0,
                                    k: c.r
                                });
                            }
                            function x(_) {
                                var c, S = _.length;
                                for(c = 0; c < S; c += 1)_[c].ty === 5 && w(_[c]);
                            }
                            return function(_) {
                                if (E(C, _.v) && (x(_.layers), _.assets)) {
                                    var c, S = _.assets.length;
                                    for(c = 0; c < S; c += 1)_.assets[c].layers && x(_.assets[c].layers);
                                }
                            };
                        }(), I = function() {
                            var C = [
                                4,
                                1,
                                9
                            ];
                            function w(_) {
                                var c, S = _.length, F, T;
                                for(c = 0; c < S; c += 1)if (_[c].ty === "gr") w(_[c].it);
                                else if (_[c].ty === "fl" || _[c].ty === "st") {
                                    if (_[c].c.k && _[c].c.k[0].i) for(T = _[c].c.k.length, F = 0; F < T; F += 1)_[c].c.k[F].s && (_[c].c.k[F].s[0] /= 255, _[c].c.k[F].s[1] /= 255, _[c].c.k[F].s[2] /= 255, _[c].c.k[F].s[3] /= 255), _[c].c.k[F].e && (_[c].c.k[F].e[0] /= 255, _[c].c.k[F].e[1] /= 255, _[c].c.k[F].e[2] /= 255, _[c].c.k[F].e[3] /= 255);
                                    else _[c].c.k[0] /= 255, _[c].c.k[1] /= 255, _[c].c.k[2] /= 255, _[c].c.k[3] /= 255;
                                }
                            }
                            function x(_) {
                                var c, S = _.length;
                                for(c = 0; c < S; c += 1)_[c].ty === 4 && w(_[c].shapes);
                            }
                            return function(_) {
                                if (E(C, _.v) && (x(_.layers), _.assets)) {
                                    var c, S = _.assets.length;
                                    for(c = 0; c < S; c += 1)_.assets[c].layers && x(_.assets[c].layers);
                                }
                            };
                        }(), R = function() {
                            var C = [
                                4,
                                4,
                                18
                            ];
                            function w(_) {
                                var c, S = _.length, F, T;
                                for(c = S - 1; c >= 0; c -= 1)if (_[c].ty === "sh") {
                                    if (_[c].ks.k.i) _[c].ks.k.c = _[c].closed;
                                    else for(T = _[c].ks.k.length, F = 0; F < T; F += 1)_[c].ks.k[F].s && (_[c].ks.k[F].s[0].c = _[c].closed), _[c].ks.k[F].e && (_[c].ks.k[F].e[0].c = _[c].closed);
                                } else _[c].ty === "gr" && w(_[c].it);
                            }
                            function x(_) {
                                var c, S, F = _.length, T, N, L, H;
                                for(S = 0; S < F; S += 1){
                                    if (c = _[S], c.hasMask) {
                                        var O = c.masksProperties;
                                        for(N = O.length, T = 0; T < N; T += 1)if (O[T].pt.k.i) O[T].pt.k.c = O[T].cl;
                                        else for(H = O[T].pt.k.length, L = 0; L < H; L += 1)O[T].pt.k[L].s && (O[T].pt.k[L].s[0].c = O[T].cl), O[T].pt.k[L].e && (O[T].pt.k[L].e[0].c = O[T].cl);
                                    }
                                    c.ty === 4 && w(c.shapes);
                                }
                            }
                            return function(_) {
                                if (E(C, _.v) && (x(_.layers), _.assets)) {
                                    var c, S = _.assets.length;
                                    for(c = 0; c < S; c += 1)_.assets[c].layers && x(_.assets[c].layers);
                                }
                            };
                        }();
                        function V(C) {
                            C.__complete || (I(C), M(C), D(C), k(C), R(C), y(C.layers, C.assets), A(C.chars, C.assets), C.__complete = !0);
                        }
                        function B(C) {
                            C.t.a.length === 0 && C.t.p;
                        }
                        var G = {};
                        return G.completeData = V, G.checkColors = I, G.checkChars = D, G.checkPathProperties = k, G.checkShapes = R, G.completeLayers = y, G;
                    }
                    if (a.dataManager || (a.dataManager = b()), a.assetLoader || (a.assetLoader = function() {
                        function y(p) {
                            var h = p.getResponseHeader("content-type");
                            return h && p.responseType === "json" && h.indexOf("json") !== -1 || p.response && _typeof$5(p.response) === "object" ? p.response : p.response && typeof p.response == "string" ? JSON.parse(p.response) : p.responseText ? JSON.parse(p.responseText) : null;
                        }
                        function A(p, h, l, u) {
                            var E, M = new XMLHttpRequest;
                            try {
                                M.responseType = "json";
                            } catch  {}
                            M.onreadystatechange = function() {
                                if (M.readyState === 4) {
                                    if (M.status === 200) E = y(M), l(E);
                                    else try {
                                        E = y(M), l(E);
                                    } catch (D) {
                                        u && u(D);
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
                                ].join(""), h + "/" + p, !0);
                            }
                            M.send();
                        }
                        return {
                            load: A
                        };
                    }()), m.data.type === "loadAnimation") a.assetLoader.load(m.data.path, m.data.fullPath, function(y) {
                        a.dataManager.completeData(y), a.postMessage({
                            id: m.data.id,
                            payload: y,
                            status: "success"
                        });
                    }, function() {
                        a.postMessage({
                            id: m.data.id,
                            status: "error"
                        });
                    });
                    else if (m.data.type === "complete") {
                        var g = m.data.animation;
                        a.dataManager.completeData(g), a.postMessage({
                            id: m.data.id,
                            payload: g,
                            status: "success"
                        });
                    } else m.data.type === "loadData" && a.assetLoader.load(m.data.path, m.data.fullPath, function(y) {
                        a.postMessage({
                            id: m.data.id,
                            payload: y,
                            status: "success"
                        });
                    }, function() {
                        a.postMessage({
                            id: m.data.id,
                            status: "error"
                        });
                    });
                }), r.onmessage = function(m) {
                    var b = m.data, g = b.id, y = e[g];
                    e[g] = null, b.status === "success" ? y.onComplete(b.payload) : y.onError && y.onError();
                });
            }
            function o(m, b) {
                t += 1;
                var g = "processId_" + t;
                return e[g] = {
                    onComplete: m,
                    onError: b
                }, g;
            }
            function d(m, b, g) {
                f();
                var y = o(b, g);
                r.postMessage({
                    type: "loadAnimation",
                    path: m,
                    fullPath: window.location.origin + window.location.pathname,
                    id: y
                });
            }
            function v(m, b, g) {
                f();
                var y = o(b, g);
                r.postMessage({
                    type: "loadData",
                    path: m,
                    fullPath: window.location.origin + window.location.pathname,
                    id: y
                });
            }
            function P(m, b, g) {
                f();
                var y = o(b, g);
                r.postMessage({
                    type: "complete",
                    animation: m,
                    id: y
                });
            }
            return {
                loadAnimation: d,
                loadData: v,
                completeAnimation: P
            };
        }(), ImagePreloader = function() {
            var t = function() {
                var p = createTag("canvas");
                p.width = 1, p.height = 1;
                var h = p.getContext("2d");
                return h.fillStyle = "rgba(0,0,0,0)", h.fillRect(0, 0, 1, 1), p;
            }();
            function e() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function i() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function r(p, h, l) {
                var u = "";
                if (p.e) u = p.p;
                else if (h) {
                    var E = p.p;
                    E.indexOf("images/") !== -1 && (E = E.split("/")[1]), u = h + E;
                } else u = l, u += p.u ? p.u : "", u += p.p;
                return u;
            }
            function s(p) {
                var h = 0, l = setInterval((function() {
                    var u = p.getBBox();
                    (u.width || h > 500) && (this._imageLoaded(), clearInterval(l)), h += 1;
                }).bind(this), 50);
            }
            function a(p) {
                var h = r(p, this.assetsPath, this.path), l = createNS("image");
                isSafari ? this.testImageLoaded(l) : l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", (function() {
                    u.img = t, this._imageLoaded();
                }).bind(this), !1), l.setAttributeNS("http://www.w3.org/1999/xlink", "href", h), this._elementHelper.append ? this._elementHelper.append(l) : this._elementHelper.appendChild(l);
                var u = {
                    img: l,
                    assetData: p
                };
                return u;
            }
            function n(p) {
                var h = r(p, this.assetsPath, this.path), l = createTag("img");
                l.crossOrigin = "anonymous", l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", (function() {
                    u.img = t, this._imageLoaded();
                }).bind(this), !1), l.src = h;
                var u = {
                    img: l,
                    assetData: p
                };
                return u;
            }
            function f(p) {
                var h = {
                    assetData: p
                }, l = r(p, this.assetsPath, this.path);
                return dataManager.loadData(l, (function(u) {
                    h.img = u, this._footageLoaded();
                }).bind(this), (function() {
                    h.img = {}, this._footageLoaded();
                }).bind(this)), h;
            }
            function o(p, h) {
                this.imagesLoadedCb = h;
                var l, u = p.length;
                for(l = 0; l < u; l += 1)p[l].layers || (!p[l].t || p[l].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(p[l]))) : p[l].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(p[l]))));
            }
            function d(p) {
                this.path = p || "";
            }
            function v(p) {
                this.assetsPath = p || "";
            }
            function P(p) {
                for(var h = 0, l = this.images.length; h < l;){
                    if (this.images[h].assetData === p) return this.images[h].img;
                    h += 1;
                }
                return null;
            }
            function m() {
                this.imagesLoadedCb = null, this.images.length = 0;
            }
            function b() {
                return this.totalImages === this.loadedAssets;
            }
            function g() {
                return this.totalFootages === this.loadedFootagesCount;
            }
            function y(p, h) {
                p === "svg" ? (this._elementHelper = h, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
            }
            function A() {
                this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = f.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
            }
            return A.prototype = {
                loadAssets: o,
                setAssetsPath: v,
                setPath: d,
                loadedImages: b,
                loadedFootages: g,
                destroy: m,
                getAsset: P,
                createImgData: n,
                createImageData: a,
                imageLoaded: e,
                footageLoaded: i,
                setCacheType: y
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
`), r = {}, s, a = 0, n = 0; n < i.length; n += 1)s = i[n].split(":"), s.length === 2 && (r[s[0]] = s[1].trim(), a += 1);
                if (a === 0) throw new Error;
                return r;
            }
            return function(e) {
                for(var i = [], r = 0; r < e.length; r += 1){
                    var s = e[r], a = {
                        time: s.tm,
                        duration: s.dr
                    };
                    try {
                        a.payload = JSON.parse(e[r].cm);
                    } catch  {
                        try {
                            a.payload = t(e[r].cm);
                        } catch  {
                            a.payload = {
                                name: e[r].cm
                            };
                        }
                    }
                    i.push(a);
                }
                return i;
            };
        }(), ProjectInterface = function() {
            function t(e) {
                this.compositions.push(e);
            }
            return function() {
                function e(i) {
                    for(var r = 0, s = this.compositions.length; r < s;){
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
            var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
            s === "false" ? i.loop = !1 : s === "true" ? i.loop = !0 : s !== "" && (i.loop = parseInt(s, 10));
            var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : r.getNamedItem("bm-autoplay") ? r.getNamedItem("bm-autoplay").value : !0;
            i.autoplay = a !== "false", i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "";
            var n = r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "";
            n === "false" && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy");
        }, AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e = this.animationData.layers, i, r = e.length, s = t.layers, a, n = s.length;
            for(a = 0; a < n; a += 1)for(i = 0; i < r;){
                if (e[i].id === s[a].id) {
                    e[i] = s[a];
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
                    var s = this.getMarkerData(t);
                    s && this.goToAndStop(s.time, !0);
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause();
            }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
            if (!(i && this.name !== i)) {
                var r = Number(t);
                if (isNaN(r)) {
                    var s = this.getMarkerData(t);
                    s && (s.duration ? this.playSegments([
                        s.time,
                        s.time + s.duration
                    ], !0) : this.goToAndStop(s.time, !0));
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
            var t = {}, e = [], i = 0, r = 0, s = 0, a = !0, n = !1;
            function f(x) {
                for(var _ = 0, c = x.target; _ < r;)e[_].animation === c && (e.splice(_, 1), _ -= 1, r -= 1, c.isPaused || P()), _ += 1;
            }
            function o(x, _) {
                if (!x) return null;
                for(var c = 0; c < r;){
                    if (e[c].elem === x && e[c].elem !== null) return e[c].animation;
                    c += 1;
                }
                var S = new AnimationItem;
                return m(S, x), S.setData(x, _), S;
            }
            function d() {
                var x, _ = e.length, c = [];
                for(x = 0; x < _; x += 1)c.push(e[x].animation);
                return c;
            }
            function v() {
                s += 1, R();
            }
            function P() {
                s -= 1;
            }
            function m(x, _) {
                x.addEventListener("destroy", f), x.addEventListener("_active", v), x.addEventListener("_idle", P), e.push({
                    elem: _,
                    animation: x
                }), r += 1;
            }
            function b(x) {
                var _ = new AnimationItem;
                return m(_, null), _.setParams(x), _;
            }
            function g(x, _) {
                var c;
                for(c = 0; c < r; c += 1)e[c].animation.setSpeed(x, _);
            }
            function y(x, _) {
                var c;
                for(c = 0; c < r; c += 1)e[c].animation.setDirection(x, _);
            }
            function A(x) {
                var _;
                for(_ = 0; _ < r; _ += 1)e[_].animation.play(x);
            }
            function p(x) {
                var _ = x - i, c;
                for(c = 0; c < r; c += 1)e[c].animation.advanceTime(_);
                i = x, s && !n ? window.requestAnimationFrame(p) : a = !0;
            }
            function h(x) {
                i = x, window.requestAnimationFrame(p);
            }
            function l(x) {
                var _;
                for(_ = 0; _ < r; _ += 1)e[_].animation.pause(x);
            }
            function u(x, _, c) {
                var S;
                for(S = 0; S < r; S += 1)e[S].animation.goToAndStop(x, _, c);
            }
            function E(x) {
                var _;
                for(_ = 0; _ < r; _ += 1)e[_].animation.stop(x);
            }
            function M(x) {
                var _;
                for(_ = 0; _ < r; _ += 1)e[_].animation.togglePause(x);
            }
            function D(x) {
                var _;
                for(_ = r - 1; _ >= 0; _ -= 1)e[_].animation.destroy(x);
            }
            function k(x, _, c) {
                var S = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), F, T = S.length;
                for(F = 0; F < T; F += 1)c && S[F].setAttribute("data-bm-type", c), o(S[F], x);
                if (_ && T === 0) {
                    c || (c = "svg");
                    var N = document.getElementsByTagName("body")[0];
                    N.innerText = "";
                    var L = createTag("div");
                    L.style.width = "100%", L.style.height = "100%", L.setAttribute("data-bm-type", c), N.appendChild(L), o(L, x);
                }
            }
            function I() {
                var x;
                for(x = 0; x < r; x += 1)e[x].animation.resize();
            }
            function R() {
                !n && s && a && (window.requestAnimationFrame(h), a = !1);
            }
            function V() {
                n = !0;
            }
            function B() {
                n = !1, R();
            }
            function G(x, _) {
                var c;
                for(c = 0; c < r; c += 1)e[c].animation.setVolume(x, _);
            }
            function C(x) {
                var _;
                for(_ = 0; _ < r; _ += 1)e[_].animation.mute(x);
            }
            function w(x) {
                var _;
                for(_ = 0; _ < r; _ += 1)e[_].animation.unmute(x);
            }
            return t.registerAnimation = o, t.loadAnimation = b, t.setSpeed = g, t.setDirection = y, t.play = A, t.pause = l, t.stop = E, t.togglePause = M, t.searchAnimations = k, t.resize = I, t.goToAndStop = u, t.destroy = D, t.freeze = V, t.unfreeze = B, t.setVolume = G, t.mute = C, t.unmute = w, t.getRegisteredAnimations = d, t;
        }(), BezierFactory = function() {
            var t = {};
            t.getBezierEasing = i;
            var e = {};
            function i(h, l, u, E, M) {
                var D = M || ("bez_" + h + "_" + l + "_" + u + "_" + E).replace(/\./g, "p");
                if (e[D]) return e[D];
                var k = new p([
                    h,
                    l,
                    u,
                    E
                ]);
                return e[D] = k, k;
            }
            var r = 4, s = .001, a = 1e-7, n = 10, f = 11, o = 1 / (f - 1), d = typeof Float32Array == "function";
            function v(h, l) {
                return 1 - 3 * l + 3 * h;
            }
            function P(h, l) {
                return 3 * l - 6 * h;
            }
            function m(h) {
                return 3 * h;
            }
            function b(h, l, u) {
                return ((v(l, u) * h + P(l, u)) * h + m(l)) * h;
            }
            function g(h, l, u) {
                return 3 * v(l, u) * h * h + 2 * P(l, u) * h + m(l);
            }
            function y(h, l, u, E, M) {
                var D, k, I = 0;
                do k = l + (u - l) / 2, D = b(k, E, M) - h, D > 0 ? u = k : l = k;
                while (Math.abs(D) > a && ++I < n);
                return k;
            }
            function A(h, l, u, E) {
                for(var M = 0; M < r; ++M){
                    var D = g(l, u, E);
                    if (D === 0) return l;
                    var k = b(l, u, E) - h;
                    l -= k / D;
                }
                return l;
            }
            function p(h) {
                this._p = h, this._mSampleValues = d ? new Float32Array(f) : new Array(f), this._precomputed = !1, this.get = this.get.bind(this);
            }
            return p.prototype = {
                get: function(h) {
                    var l = this._p[0], u = this._p[1], E = this._p[2], M = this._p[3];
                    return this._precomputed || this._precompute(), l === u && E === M ? h : h === 0 ? 0 : h === 1 ? 1 : b(this._getTForX(h), u, M);
                },
                _precompute: function() {
                    var h = this._p[0], l = this._p[1], u = this._p[2], E = this._p[3];
                    this._precomputed = !0, (h !== l || u !== E) && this._calcSampleValues();
                },
                _calcSampleValues: function() {
                    for(var h = this._p[0], l = this._p[2], u = 0; u < f; ++u)this._mSampleValues[u] = b(u * o, h, l);
                },
                _getTForX: function(h) {
                    for(var l = this._p[0], u = this._p[2], E = this._mSampleValues, M = 0, D = 1, k = f - 1; D !== k && E[D] <= h; ++D)M += o;
                    --D;
                    var I = (h - E[D]) / (E[D + 1] - E[D]), R = M + I * o, V = g(R, l, u);
                    return V >= s ? A(h, R, l, u) : V === 0 ? R : y(h, M, M + o, l, u);
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
                var r = 0, s = t, a = createSizedArray(s), n = {
                    newElement: f,
                    release: o
                };
                function f() {
                    var d;
                    return r ? (r -= 1, d = a[r]) : d = e(), d;
                }
                function o(d) {
                    r === s && (a = pooling.double(a), s *= 2), i && i(d), a[r] = d, r += 1;
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
                var r, s = i.lengths.length;
                for(r = 0; r < s; r += 1)bezierLengthPool.release(i.lengths[r]);
                i.lengths.length = 0;
            }
            return poolFactory(8, t, e);
        }();
        function bezFunction() {
            var t = Math;
            function e(m, b, g, y, A, p) {
                var h = m * y + b * A + g * p - A * y - p * m - g * b;
                return h > -0.001 && h < .001;
            }
            function i(m, b, g, y, A, p, h, l, u) {
                if (g === 0 && p === 0 && u === 0) return e(m, b, y, A, h, l);
                var E = t.sqrt(t.pow(y - m, 2) + t.pow(A - b, 2) + t.pow(p - g, 2)), M = t.sqrt(t.pow(h - m, 2) + t.pow(l - b, 2) + t.pow(u - g, 2)), D = t.sqrt(t.pow(h - y, 2) + t.pow(l - A, 2) + t.pow(u - p, 2)), k;
                return E > M ? E > D ? k = E - M - D : k = D - M - E : D > M ? k = D - M - E : k = M - E - D, k > -0.0001 && k < 1e-4;
            }
            var r = function() {
                return function(m, b, g, y) {
                    var A = getDefaultCurveSegments(), p, h, l, u, E, M = 0, D, k = [], I = [], R = bezierLengthPool.newElement();
                    for(l = g.length, p = 0; p < A; p += 1){
                        for(E = p / (A - 1), D = 0, h = 0; h < l; h += 1)u = bmPow(1 - E, 3) * m[h] + 3 * bmPow(1 - E, 2) * E * g[h] + 3 * (1 - E) * bmPow(E, 2) * y[h] + bmPow(E, 3) * b[h], k[h] = u, I[h] !== null && (D += bmPow(k[h] - I[h], 2)), I[h] = k[h];
                        D && (D = bmSqrt(D), M += D), R.percents[p] = E, R.lengths[p] = M;
                    }
                    return R.addedLength = M, R;
                };
            }();
            function s(m) {
                var b = segmentsLengthPool.newElement(), g = m.c, y = m.v, A = m.o, p = m.i, h, l = m._length, u = b.lengths, E = 0;
                for(h = 0; h < l - 1; h += 1)u[h] = r(y[h], y[h + 1], A[h], p[h + 1]), E += u[h].addedLength;
                return g && l && (u[h] = r(y[h], y[0], A[h], p[0]), E += u[h].addedLength), b.totalLength = E, b;
            }
            function a(m) {
                this.segmentLength = 0, this.points = new Array(m);
            }
            function n(m, b) {
                this.partialLength = m, this.point = b;
            }
            var f = function() {
                var m = {};
                return function(b, g, y, A) {
                    var p = (b[0] + "_" + b[1] + "_" + g[0] + "_" + g[1] + "_" + y[0] + "_" + y[1] + "_" + A[0] + "_" + A[1]).replace(/\./g, "p");
                    if (!m[p]) {
                        var h = getDefaultCurveSegments(), l, u, E, M, D, k = 0, I, R, V = null;
                        b.length === 2 && (b[0] !== g[0] || b[1] !== g[1]) && e(b[0], b[1], g[0], g[1], b[0] + y[0], b[1] + y[1]) && e(b[0], b[1], g[0], g[1], g[0] + A[0], g[1] + A[1]) && (h = 2);
                        var B = new a(h);
                        for(E = y.length, l = 0; l < h; l += 1){
                            for(R = createSizedArray(E), D = l / (h - 1), I = 0, u = 0; u < E; u += 1)M = bmPow(1 - D, 3) * b[u] + 3 * bmPow(1 - D, 2) * D * (b[u] + y[u]) + 3 * (1 - D) * bmPow(D, 2) * (g[u] + A[u]) + bmPow(D, 3) * g[u], R[u] = M, V !== null && (I += bmPow(R[u] - V[u], 2));
                            I = bmSqrt(I), k += I, B.points[l] = new n(I, R), V = R;
                        }
                        B.segmentLength = k, m[p] = B;
                    }
                    return m[p];
                };
            }();
            function o(m, b) {
                var g = b.percents, y = b.lengths, A = g.length, p = bmFloor((A - 1) * m), h = m * b.addedLength, l = 0;
                if (p === A - 1 || p === 0 || h === y[p]) return g[p];
                for(var u = y[p] > h ? -1 : 1, E = !0; E;)if (y[p] <= h && y[p + 1] > h ? (l = (h - y[p]) / (y[p + 1] - y[p]), E = !1) : p += u, p < 0 || p >= A - 1) {
                    if (p === A - 1) return g[p];
                    E = !1;
                }
                return g[p] + (g[p + 1] - g[p]) * l;
            }
            function d(m, b, g, y, A, p) {
                var h = o(A, p), l = 1 - h, u = t.round((l * l * l * m[0] + (h * l * l + l * h * l + l * l * h) * g[0] + (h * h * l + l * h * h + h * l * h) * y[0] + h * h * h * b[0]) * 1e3) / 1e3, E = t.round((l * l * l * m[1] + (h * l * l + l * h * l + l * l * h) * g[1] + (h * h * l + l * h * h + h * l * h) * y[1] + h * h * h * b[1]) * 1e3) / 1e3;
                return [
                    u,
                    E
                ];
            }
            var v = createTypedArray("float32", 8);
            function P(m, b, g, y, A, p, h) {
                A < 0 ? A = 0 : A > 1 && (A = 1);
                var l = o(A, h);
                p = p > 1 ? 1 : p;
                var u = o(p, h), E, M = m.length, D = 1 - l, k = 1 - u, I = D * D * D, R = l * D * D * 3, V = l * l * D * 3, B = l * l * l, G = D * D * k, C = l * D * k + D * l * k + D * D * u, w = l * l * k + D * l * u + l * D * u, x = l * l * u, _ = D * k * k, c = l * k * k + D * u * k + D * k * u, S = l * u * k + D * u * u + l * k * u, F = l * u * u, T = k * k * k, N = u * k * k + k * u * k + k * k * u, L = u * u * k + k * u * u + u * k * u, H = u * u * u;
                for(E = 0; E < M; E += 1)v[E * 4] = t.round((I * m[E] + R * g[E] + V * y[E] + B * b[E]) * 1e3) / 1e3, v[E * 4 + 1] = t.round((G * m[E] + C * g[E] + w * y[E] + x * b[E]) * 1e3) / 1e3, v[E * 4 + 2] = t.round((_ * m[E] + c * g[E] + S * y[E] + F * b[E]) * 1e3) / 1e3, v[E * 4 + 3] = t.round((T * m[E] + N * g[E] + L * y[E] + H * b[E]) * 1e3) / 1e3;
                return v;
            }
            return {
                getSegmentsLength: s,
                getNewSegment: P,
                getPointInSegment: d,
                buildBezierData: f,
                pointOnLine2D: e,
                pointOnLine3D: i
            };
        }
        var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
        function interpolateValue(t, e) {
            var i = this.offsetTime, r;
            this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
            for(var s = e.lastIndex, a = s, n = this.keyframes.length - 1, f = !0, o, d, v; f;){
                if (o = this.keyframes[a], d = this.keyframes[a + 1], a === n - 1 && t >= d.t - i) {
                    o.h && (o = d), s = 0;
                    break;
                }
                if (d.t - i > t) {
                    s = a;
                    break;
                }
                a < n - 1 ? a += 1 : (s = 0, f = !1);
            }
            v = this.keyframesMetadata[a] || {};
            var P, m, b, g, y, A, p = d.t - i, h = o.t - i, l;
            if (o.to) {
                v.bezierData || (v.bezierData = bez.buildBezierData(o.s, d.s || o.e, o.to, o.ti));
                var u = v.bezierData;
                if (t >= p || t < h) {
                    var E = t >= p ? u.points.length - 1 : 0;
                    for(m = u.points[E].point.length, P = 0; P < m; P += 1)r[P] = u.points[E].point[P];
                } else {
                    v.__fnct ? A = v.__fnct : (A = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, v.__fnct = A), b = A((t - h) / (p - h));
                    var M = u.segmentLength * b, D, k = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
                    for(y = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, f = !0, g = u.points.length; f;){
                        if (k += u.points[y].partialLength, M === 0 || b === 0 || y === u.points.length - 1) {
                            for(m = u.points[y].point.length, P = 0; P < m; P += 1)r[P] = u.points[y].point[P];
                            break;
                        } else if (M >= k && M < k + u.points[y + 1].partialLength) {
                            for(D = (M - k) / u.points[y + 1].partialLength, m = u.points[y].point.length, P = 0; P < m; P += 1)r[P] = u.points[y].point[P] + (u.points[y + 1].point[P] - u.points[y].point[P]) * D;
                            break;
                        }
                        y < g - 1 ? y += 1 : f = !1;
                    }
                    e._lastPoint = y, e._lastAddedLength = k - u.points[y].partialLength, e._lastKeyframeIndex = a;
                }
            } else {
                var I, R, V, B, G;
                if (n = o.s.length, l = d.s || o.e, this.sh && o.h !== 1) {
                    if (t >= p) r[0] = l[0], r[1] = l[1], r[2] = l[2];
                    else if (t <= h) r[0] = o.s[0], r[1] = o.s[1], r[2] = o.s[2];
                    else {
                        var C = createQuaternion(o.s), w = createQuaternion(l), x = (t - h) / (p - h);
                        quaternionToEuler(r, slerp(C, w, x));
                    }
                } else for(a = 0; a < n; a += 1)o.h !== 1 && (t >= p ? b = 1 : t < h ? b = 0 : (o.o.x.constructor === Array ? (v.__fnct || (v.__fnct = []), v.__fnct[a] ? A = v.__fnct[a] : (I = o.o.x[a] === void 0 ? o.o.x[0] : o.o.x[a], R = o.o.y[a] === void 0 ? o.o.y[0] : o.o.y[a], V = o.i.x[a] === void 0 ? o.i.x[0] : o.i.x[a], B = o.i.y[a] === void 0 ? o.i.y[0] : o.i.y[a], A = BezierFactory.getBezierEasing(I, R, V, B).get, v.__fnct[a] = A)) : v.__fnct ? A = v.__fnct : (I = o.o.x, R = o.o.y, V = o.i.x, B = o.i.y, A = BezierFactory.getBezierEasing(I, R, V, B).get, o.keyframeMetadata = A), b = A((t - h) / (p - h)))), l = d.s || o.e, G = o.h === 1 ? o.s[a] : o.s[a] + (l[a] - o.s[a]) * b, this.propType === "multidimensional" ? r[a] = G : r = G;
            }
            return e.lastIndex = s, r;
        }
        function slerp(t, e, i) {
            var r = [], s = t[0], a = t[1], n = t[2], f = t[3], o = e[0], d = e[1], v = e[2], P = e[3], m, b, g, y, A;
            return b = s * o + a * d + n * v + f * P, b < 0 && (b = -b, o = -o, d = -d, v = -v, P = -P), 1 - b > 1e-6 ? (m = Math.acos(b), g = Math.sin(m), y = Math.sin((1 - i) * m) / g, A = Math.sin(i * m) / g) : (y = 1 - i, A = i), r[0] = y * s + A * o, r[1] = y * a + A * d, r[2] = y * n + A * v, r[3] = y * f + A * P, r;
        }
        function quaternionToEuler(t, e) {
            var i = e[0], r = e[1], s = e[2], a = e[3], n = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s), f = Math.asin(2 * i * r + 2 * s * a), o = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s);
            t[0] = n / degToRads, t[1] = f / degToRads, t[2] = o / degToRads;
        }
        function createQuaternion(t) {
            var e = t[0] * degToRads, i = t[1] * degToRads, r = t[2] * degToRads, s = Math.cos(e / 2), a = Math.cos(i / 2), n = Math.cos(r / 2), f = Math.sin(e / 2), o = Math.sin(i / 2), d = Math.sin(r / 2), v = s * a * n - f * o * d, P = f * o * n + s * a * d, m = f * a * n + s * o * d, b = s * o * n - f * a * d;
            return [
                P,
                m,
                b,
                v
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
            var s, a = e.k.length;
            for(this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1)this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
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
            var s, a = e.k.length, n, f, o, d;
            for(s = 0; s < a - 1; s += 1)e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (n = e.k[s].s, f = e.k[s + 1].s, o = e.k[s].to, d = e.k[s].ti, (n.length === 2 && !(n[0] === f[0] && n[1] === f[1]) && bez.pointOnLine2D(n[0], n[1], f[0], f[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], f[0], f[1], f[0] + d[0], f[1] + d[1]) || n.length === 3 && !(n[0] === f[0] && n[1] === f[1] && n[2] === f[2]) && bez.pointOnLine3D(n[0], n[1], n[2], f[0], f[1], f[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], f[0], f[1], f[2], f[0] + d[0], f[1] + d[1], f[2] + d[2])) && (e.k[s].to = null, e.k[s].ti = null), n[0] === f[0] && n[1] === f[1] && o[0] === 0 && o[1] === 0 && d[0] === 0 && d[1] === 0 && (n.length === 2 || n[2] === f[2] && o[2] === 0 && d[2] === 0) && (e.k[s].to = null, e.k[s].ti = null));
            this.effectsSequence = [
                getValueAtCurrentTime.bind(this)
            ], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
            var v = e.k[0].s.length;
            for(this.v = createTypedArray("float32", v), this.pv = createTypedArray("float32", v), s = 0; s < v; s += 1)this.v[s] = initFrame, this.pv[s] = initFrame;
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray("float32", v)
            }, this.addEffect = addEffect;
        }
        var PropertyFactory = function() {
            function t(i, r, s, a, n) {
                r.sid && (r = i.globalData.slotManager.getProp(r));
                var f;
                if (!r.k.length) f = new ValueProperty(i, r, a, n);
                else if (typeof r.k[0] == "number") f = new MultiDimensionalProperty(i, r, a, n);
                else switch(s){
                    case 0:
                        f = new KeyframedValueProperty(i, r, a, n);
                        break;
                    case 1:
                        f = new KeyframedMultidimensionalProperty(i, r, a, n);
                        break;
                }
                return f.effectsSequence.length && n.addDynamicProperty(f), f;
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
        }, ShapePath.prototype.setXYAt = function(t, e, i, r, s) {
            var a;
            switch(this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i){
                case "v":
                    a = this.v;
                    break;
                case "i":
                    a = this.i;
                    break;
                case "o":
                    a = this.o;
                    break;
                default:
                    a = [];
                    break;
            }
            (!a[r] || a[r] && !s) && (a[r] = pointPool.newElement()), a[r][0] = t, a[r][1] = e;
        }, ShapePath.prototype.setTripleAt = function(t, e, i, r, s, a, n, f) {
            this.setXYAt(t, e, "v", n, f), this.setXYAt(i, r, "o", n, f), this.setXYAt(s, a, "i", n, f);
        }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v, i = this.o, r = this.i, s = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), s = 1);
            var a = this._length - 1, n = this._length, f;
            for(f = s; f < n; f += 1)t.setTripleAt(e[a][0], e[a][1], r[a][0], r[a][1], i[a][0], i[a][1], f, !1), a -= 1;
            return t;
        }, ShapePath.prototype.length = function() {
            return this._length;
        };
        var shapePool = function() {
            function t() {
                return new ShapePath;
            }
            function e(s) {
                var a = s._length, n;
                for(n = 0; n < a; n += 1)pointPool.release(s.v[n]), pointPool.release(s.i[n]), pointPool.release(s.o[n]), s.v[n] = null, s.i[n] = null, s.o[n] = null;
                s._length = 0, s.c = !1;
            }
            function i(s) {
                var a = r.newElement(), n, f = s._length === void 0 ? s.v.length : s._length;
                for(a.setLength(f), a.c = s.c, n = 0; n < f; n += 1)a.setTripleAt(s.v[n][0], s.v[n][1], s.o[n][0], s.o[n][1], s.i[n][0], s.i[n][1], n);
                return a;
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
                newShapeCollection: s,
                release: a
            }, e = 0, i = 4, r = createSizedArray(i);
            function s() {
                var n;
                return e ? (e -= 1, n = r[e]) : n = new ShapeCollection, n;
            }
            function a(n) {
                var f, o = n._length;
                for(f = 0; f < o; f += 1)shapePool.release(n.shapes[f]);
                n._length = 0, e === i && (r = pooling.double(r), i *= 2), r[e] = n, e += 1;
            }
            return t;
        }(), ShapePropertyFactory = function() {
            var t = -999999;
            function e(p, h, l) {
                var u = l.lastIndex, E, M, D, k, I, R, V, B, G, C = this.keyframes;
                if (p < C[0].t - this.offsetTime) E = C[0].s[0], D = !0, u = 0;
                else if (p >= C[C.length - 1].t - this.offsetTime) E = C[C.length - 1].s ? C[C.length - 1].s[0] : C[C.length - 2].e[0], D = !0;
                else {
                    for(var w = u, x = C.length - 1, _ = !0, c, S, F; _ && (c = C[w], S = C[w + 1], !(S.t - this.offsetTime > p));)w < x - 1 ? w += 1 : _ = !1;
                    if (F = this.keyframesMetadata[w] || {}, D = c.h === 1, u = w, !D) {
                        if (p >= S.t - this.offsetTime) B = 1;
                        else if (p < c.t - this.offsetTime) B = 0;
                        else {
                            var T;
                            F.__fnct ? T = F.__fnct : (T = BezierFactory.getBezierEasing(c.o.x, c.o.y, c.i.x, c.i.y).get, F.__fnct = T), B = T((p - (c.t - this.offsetTime)) / (S.t - this.offsetTime - (c.t - this.offsetTime)));
                        }
                        M = S.s ? S.s[0] : c.e[0];
                    }
                    E = c.s[0];
                }
                for(R = h._length, V = E.i[0].length, l.lastIndex = u, k = 0; k < R; k += 1)for(I = 0; I < V; I += 1)G = D ? E.i[k][I] : E.i[k][I] + (M.i[k][I] - E.i[k][I]) * B, h.i[k][I] = G, G = D ? E.o[k][I] : E.o[k][I] + (M.o[k][I] - E.o[k][I]) * B, h.o[k][I] = G, G = D ? E.v[k][I] : E.v[k][I] + (M.v[k][I] - E.v[k][I]) * B, h.v[k][I] = G;
            }
            function i() {
                var p = this.comp.renderedFrame - this.offsetTime, h = this.keyframes[0].t - this.offsetTime, l = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, u = this._caching.lastFrame;
                return u !== t && (u < h && p < h || u > l && p > l) || (this._caching.lastIndex = u < p ? this._caching.lastIndex : 0, this.interpolateShape(p, this.pv, this._caching)), this._caching.lastFrame = p, this.pv;
            }
            function r() {
                this.paths = this.localShapeCollection;
            }
            function s(p, h) {
                if (p._length !== h._length || p.c !== h.c) return !1;
                var l, u = p._length;
                for(l = 0; l < u; l += 1)if (p.v[l][0] !== h.v[l][0] || p.v[l][1] !== h.v[l][1] || p.o[l][0] !== h.o[l][0] || p.o[l][1] !== h.o[l][1] || p.i[l][0] !== h.i[l][0] || p.i[l][1] !== h.i[l][1]) return !1;
                return !0;
            }
            function a(p) {
                s(this.v, p) || (this.v = shapePool.clone(p), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
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
                    var h, l = this.effectsSequence.length;
                    for(h = 0; h < l; h += 1)p = this.effectsSequence[h](p);
                    this.setVValue(p), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                }
            }
            function f(p, h, l) {
                this.propType = "shape", this.comp = p.comp, this.container = p, this.elem = p, this.data = h, this.k = !1, this.kf = !1, this._mdf = !1;
                var u = l === 3 ? h.pt.k : h.ks.k;
                this.v = shapePool.clone(u), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = [];
            }
            function o(p) {
                this.effectsSequence.push(p), this.container.addDynamicProperty(this);
            }
            f.prototype.interpolateShape = e, f.prototype.getValue = n, f.prototype.setVValue = a, f.prototype.addEffect = o;
            function d(p, h, l) {
                this.propType = "shape", this.comp = p.comp, this.elem = p, this.container = p, this.offsetTime = p.data.st, this.keyframes = l === 3 ? h.pt.k : h.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                var u = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, u), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = {
                    lastFrame: t,
                    lastIndex: 0
                }, this.effectsSequence = [
                    i.bind(this)
                ];
            }
            d.prototype.getValue = n, d.prototype.interpolateShape = e, d.prototype.setVValue = a, d.prototype.addEffect = o;
            var v = function() {
                var p = roundCorner;
                function h(l, u) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = u.d, this.elem = l, this.comp = l.comp, this.frameId = -1, this.initDynamicPropertyContainer(l), this.p = PropertyFactory.getProp(l, u.p, 1, 0, this), this.s = PropertyFactory.getProp(l, u.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                }
                return h.prototype = {
                    reset: r,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function() {
                        var l = this.p.v[0], u = this.p.v[1], E = this.s.v[0] / 2, M = this.s.v[1] / 2, D = this.d !== 3, k = this.v;
                        k.v[0][0] = l, k.v[0][1] = u - M, k.v[1][0] = D ? l + E : l - E, k.v[1][1] = u, k.v[2][0] = l, k.v[2][1] = u + M, k.v[3][0] = D ? l - E : l + E, k.v[3][1] = u, k.i[0][0] = D ? l - E * p : l + E * p, k.i[0][1] = u - M, k.i[1][0] = D ? l + E : l - E, k.i[1][1] = u - M * p, k.i[2][0] = D ? l + E * p : l - E * p, k.i[2][1] = u + M, k.i[3][0] = D ? l - E : l + E, k.i[3][1] = u + M * p, k.o[0][0] = D ? l + E * p : l - E * p, k.o[0][1] = u - M, k.o[1][0] = D ? l + E : l - E, k.o[1][1] = u + M * p, k.o[2][0] = D ? l - E * p : l + E * p, k.o[2][1] = u + M, k.o[3][0] = D ? l - E : l + E, k.o[3][1] = u - M * p;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], h), h;
            }(), P = function() {
                function p(h, l) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = h, this.comp = h.comp, this.data = l, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(h), l.sy === 1 ? (this.ir = PropertyFactory.getProp(h, l.ir, 0, 0, this), this.is = PropertyFactory.getProp(h, l.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(h, l.pt, 0, 0, this), this.p = PropertyFactory.getProp(h, l.p, 1, 0, this), this.r = PropertyFactory.getProp(h, l.r, 0, degToRads, this), this.or = PropertyFactory.getProp(h, l.or, 0, 0, this), this.os = PropertyFactory.getProp(h, l.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                }
                return p.prototype = {
                    reset: r,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function() {
                        var h = Math.floor(this.pt.v) * 2, l = Math.PI * 2 / h, u = !0, E = this.or.v, M = this.ir.v, D = this.os.v, k = this.is.v, I = 2 * Math.PI * E / (h * 2), R = 2 * Math.PI * M / (h * 2), V, B, G, C, w = -Math.PI / 2;
                        w += this.r.v;
                        var x = this.data.d === 3 ? -1 : 1;
                        for(this.v._length = 0, V = 0; V < h; V += 1){
                            B = u ? E : M, G = u ? D : k, C = u ? I : R;
                            var _ = B * Math.cos(w), c = B * Math.sin(w), S = _ === 0 && c === 0 ? 0 : c / Math.sqrt(_ * _ + c * c), F = _ === 0 && c === 0 ? 0 : -_ / Math.sqrt(_ * _ + c * c);
                            _ += +this.p.v[0], c += +this.p.v[1], this.v.setTripleAt(_, c, _ - S * C * G * x, c - F * C * G * x, _ + S * C * G * x, c + F * C * G * x, V, !0), u = !u, w += l * x;
                        }
                    },
                    convertPolygonToPath: function() {
                        var h = Math.floor(this.pt.v), l = Math.PI * 2 / h, u = this.or.v, E = this.os.v, M = 2 * Math.PI * u / (h * 4), D, k = -Math.PI * .5, I = this.data.d === 3 ? -1 : 1;
                        for(k += this.r.v, this.v._length = 0, D = 0; D < h; D += 1){
                            var R = u * Math.cos(k), V = u * Math.sin(k), B = R === 0 && V === 0 ? 0 : V / Math.sqrt(R * R + V * V), G = R === 0 && V === 0 ? 0 : -R / Math.sqrt(R * R + V * V);
                            R += +this.p.v[0], V += +this.p.v[1], this.v.setTripleAt(R, V, R - B * M * E * I, V - G * M * E * I, R + B * M * E * I, V + G * M * E * I, D, !0), k += l * I;
                        }
                        this.paths.length = 0, this.paths[0] = this.v;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], p), p;
            }(), m = function() {
                function p(h, l) {
                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = h, this.comp = h.comp, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(h), this.p = PropertyFactory.getProp(h, l.p, 1, 0, this), this.s = PropertyFactory.getProp(h, l.s, 1, 0, this), this.r = PropertyFactory.getProp(h, l.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                }
                return p.prototype = {
                    convertRectToPath: function() {
                        var h = this.p.v[0], l = this.p.v[1], u = this.s.v[0] / 2, E = this.s.v[1] / 2, M = bmMin(u, E, this.r.v), D = M * (1 - roundCorner);
                        this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(h + u, l - E + M, h + u, l - E + M, h + u, l - E + D, 0, !0), this.v.setTripleAt(h + u, l + E - M, h + u, l + E - D, h + u, l + E - M, 1, !0), M !== 0 ? (this.v.setTripleAt(h + u - M, l + E, h + u - M, l + E, h + u - D, l + E, 2, !0), this.v.setTripleAt(h - u + M, l + E, h - u + D, l + E, h - u + M, l + E, 3, !0), this.v.setTripleAt(h - u, l + E - M, h - u, l + E - M, h - u, l + E - D, 4, !0), this.v.setTripleAt(h - u, l - E + M, h - u, l - E + D, h - u, l - E + M, 5, !0), this.v.setTripleAt(h - u + M, l - E, h - u + M, l - E, h - u + D, l - E, 6, !0), this.v.setTripleAt(h + u - M, l - E, h + u - D, l - E, h + u - M, l - E, 7, !0)) : (this.v.setTripleAt(h - u, l + E, h - u + D, l + E, h - u, l + E, 2), this.v.setTripleAt(h - u, l - E, h - u, l - E + D, h - u, l - E, 3))) : (this.v.setTripleAt(h + u, l - E + M, h + u, l - E + D, h + u, l - E + M, 0, !0), M !== 0 ? (this.v.setTripleAt(h + u - M, l - E, h + u - M, l - E, h + u - D, l - E, 1, !0), this.v.setTripleAt(h - u + M, l - E, h - u + D, l - E, h - u + M, l - E, 2, !0), this.v.setTripleAt(h - u, l - E + M, h - u, l - E + M, h - u, l - E + D, 3, !0), this.v.setTripleAt(h - u, l + E - M, h - u, l + E - D, h - u, l + E - M, 4, !0), this.v.setTripleAt(h - u + M, l + E, h - u + M, l + E, h - u + D, l + E, 5, !0), this.v.setTripleAt(h + u - M, l + E, h + u - D, l + E, h + u - M, l + E, 6, !0), this.v.setTripleAt(h + u, l + E - M, h + u, l + E - M, h + u, l + E - D, 7, !0)) : (this.v.setTripleAt(h - u, l - E, h - u + D, l - E, h - u, l - E, 1, !0), this.v.setTripleAt(h - u, l + E, h - u, l + E - D, h - u, l + E, 2, !0), this.v.setTripleAt(h + u, l + E, h + u - D, l + E, h + u, l + E, 3, !0)));
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                    },
                    reset: r
                }, extendPrototype([
                    DynamicPropertyContainer
                ], p), p;
            }();
            function b(p, h, l) {
                var u;
                if (l === 3 || l === 4) {
                    var E = l === 3 ? h.pt : h.ks, M = E.k;
                    M.length ? u = new d(p, h, l) : u = new f(p, h, l);
                } else l === 5 ? u = new m(p, h) : l === 6 ? u = new v(p, h) : l === 7 && (u = new P(p, h));
                return u.k && p.addDynamicProperty(u), u;
            }
            function g() {
                return f;
            }
            function y() {
                return d;
            }
            var A = {};
            return A.getShapeProp = b, A.getConstructorFunction = g, A.getKeyframedConstructorFunction = y, A;
        }(), Matrix = function() {
            var t = Math.cos, e = Math.sin, i = Math.tan, r = Math.round;
            function s() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
            }
            function a(c) {
                if (c === 0) return this;
                var S = t(c), F = e(c);
                return this._t(S, -F, 0, 0, F, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function n(c) {
                if (c === 0) return this;
                var S = t(c), F = e(c);
                return this._t(1, 0, 0, 0, 0, S, -F, 0, 0, F, S, 0, 0, 0, 0, 1);
            }
            function f(c) {
                if (c === 0) return this;
                var S = t(c), F = e(c);
                return this._t(S, 0, F, 0, 0, 1, 0, 0, -F, 0, S, 0, 0, 0, 0, 1);
            }
            function o(c) {
                if (c === 0) return this;
                var S = t(c), F = e(c);
                return this._t(S, -F, 0, 0, F, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function d(c, S) {
                return this._t(1, S, c, 1, 0, 0);
            }
            function v(c, S) {
                return this.shear(i(c), i(S));
            }
            function P(c, S) {
                var F = t(S), T = e(S);
                return this._t(F, T, 0, 0, -T, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(c), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(F, -T, 0, 0, T, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function m(c, S, F) {
                return !F && F !== 0 && (F = 1), c === 1 && S === 1 && F === 1 ? this : this._t(c, 0, 0, 0, 0, S, 0, 0, 0, 0, F, 0, 0, 0, 0, 1);
            }
            function b(c, S, F, T, N, L, H, O, q, $, X, Q, Z, W, K, j) {
                return this.props[0] = c, this.props[1] = S, this.props[2] = F, this.props[3] = T, this.props[4] = N, this.props[5] = L, this.props[6] = H, this.props[7] = O, this.props[8] = q, this.props[9] = $, this.props[10] = X, this.props[11] = Q, this.props[12] = Z, this.props[13] = W, this.props[14] = K, this.props[15] = j, this;
            }
            function g(c, S, F) {
                return F = F || 0, c !== 0 || S !== 0 || F !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c, S, F, 1) : this;
            }
            function y(c, S, F, T, N, L, H, O, q, $, X, Q, Z, W, K, j) {
                var z = this.props;
                if (c === 1 && S === 0 && F === 0 && T === 0 && N === 0 && L === 1 && H === 0 && O === 0 && q === 0 && $ === 0 && X === 1 && Q === 0) return z[12] = z[12] * c + z[15] * Z, z[13] = z[13] * L + z[15] * W, z[14] = z[14] * X + z[15] * K, z[15] *= j, this._identityCalculated = !1, this;
                var et = z[0], at = z[1], it = z[2], tt = z[3], rt = z[4], st = z[5], Y = z[6], nt = z[7], ot = z[8], J = z[9], ht = z[10], U = z[11], lt = z[12], pt = z[13], ft = z[14], mt = z[15];
                return z[0] = et * c + at * N + it * q + tt * Z, z[1] = et * S + at * L + it * $ + tt * W, z[2] = et * F + at * H + it * X + tt * K, z[3] = et * T + at * O + it * Q + tt * j, z[4] = rt * c + st * N + Y * q + nt * Z, z[5] = rt * S + st * L + Y * $ + nt * W, z[6] = rt * F + st * H + Y * X + nt * K, z[7] = rt * T + st * O + Y * Q + nt * j, z[8] = ot * c + J * N + ht * q + U * Z, z[9] = ot * S + J * L + ht * $ + U * W, z[10] = ot * F + J * H + ht * X + U * K, z[11] = ot * T + J * O + ht * Q + U * j, z[12] = lt * c + pt * N + ft * q + mt * Z, z[13] = lt * S + pt * L + ft * $ + mt * W, z[14] = lt * F + pt * H + ft * X + mt * K, z[15] = lt * T + pt * O + ft * Q + mt * j, this._identityCalculated = !1, this;
            }
            function A(c) {
                var S = c.props;
                return this.transform(S[0], S[1], S[2], S[3], S[4], S[5], S[6], S[7], S[8], S[9], S[10], S[11], S[12], S[13], S[14], S[15]);
            }
            function p() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
            }
            function h(c) {
                for(var S = 0; S < 16;){
                    if (c.props[S] !== this.props[S]) return !1;
                    S += 1;
                }
                return !0;
            }
            function l(c) {
                var S;
                for(S = 0; S < 16; S += 1)c.props[S] = this.props[S];
                return c;
            }
            function u(c) {
                var S;
                for(S = 0; S < 16; S += 1)this.props[S] = c[S];
            }
            function E(c, S, F) {
                return {
                    x: c * this.props[0] + S * this.props[4] + F * this.props[8] + this.props[12],
                    y: c * this.props[1] + S * this.props[5] + F * this.props[9] + this.props[13],
                    z: c * this.props[2] + S * this.props[6] + F * this.props[10] + this.props[14]
                };
            }
            function M(c, S, F) {
                return c * this.props[0] + S * this.props[4] + F * this.props[8] + this.props[12];
            }
            function D(c, S, F) {
                return c * this.props[1] + S * this.props[5] + F * this.props[9] + this.props[13];
            }
            function k(c, S, F) {
                return c * this.props[2] + S * this.props[6] + F * this.props[10] + this.props[14];
            }
            function I() {
                var c = this.props[0] * this.props[5] - this.props[1] * this.props[4], S = this.props[5] / c, F = -this.props[1] / c, T = -this.props[4] / c, N = this.props[0] / c, L = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / c, H = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / c, O = new Matrix;
                return O.props[0] = S, O.props[1] = F, O.props[4] = T, O.props[5] = N, O.props[12] = L, O.props[13] = H, O;
            }
            function R(c) {
                var S = this.getInverseMatrix();
                return S.applyToPointArray(c[0], c[1], c[2] || 0);
            }
            function V(c) {
                var S, F = c.length, T = [];
                for(S = 0; S < F; S += 1)T[S] = R(c[S]);
                return T;
            }
            function B(c, S, F) {
                var T = createTypedArray("float32", 6);
                if (this.isIdentity()) T[0] = c[0], T[1] = c[1], T[2] = S[0], T[3] = S[1], T[4] = F[0], T[5] = F[1];
                else {
                    var N = this.props[0], L = this.props[1], H = this.props[4], O = this.props[5], q = this.props[12], $ = this.props[13];
                    T[0] = c[0] * N + c[1] * H + q, T[1] = c[0] * L + c[1] * O + $, T[2] = S[0] * N + S[1] * H + q, T[3] = S[0] * L + S[1] * O + $, T[4] = F[0] * N + F[1] * H + q, T[5] = F[0] * L + F[1] * O + $;
                }
                return T;
            }
            function G(c, S, F) {
                var T;
                return this.isIdentity() ? T = [
                    c,
                    S,
                    F
                ] : T = [
                    c * this.props[0] + S * this.props[4] + F * this.props[8] + this.props[12],
                    c * this.props[1] + S * this.props[5] + F * this.props[9] + this.props[13],
                    c * this.props[2] + S * this.props[6] + F * this.props[10] + this.props[14]
                ], T;
            }
            function C(c, S) {
                if (this.isIdentity()) return c + "," + S;
                var F = this.props;
                return Math.round((c * F[0] + S * F[4] + F[12]) * 100) / 100 + "," + Math.round((c * F[1] + S * F[5] + F[13]) * 100) / 100;
            }
            function w() {
                for(var c = 0, S = this.props, F = "matrix3d(", T = 1e4; c < 16;)F += r(S[c] * T) / T, F += c === 15 ? ")" : ",", c += 1;
                return F;
            }
            function x(c) {
                var S = 1e4;
                return c < 1e-6 && c > 0 || c > -0.000001 && c < 0 ? r(c * S) / S : c;
            }
            function _() {
                var c = this.props, S = x(c[0]), F = x(c[1]), T = x(c[4]), N = x(c[5]), L = x(c[12]), H = x(c[13]);
                return "matrix(" + S + "," + F + "," + T + "," + N + "," + L + "," + H + ")";
            }
            return function() {
                this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = f, this.rotateZ = o, this.skew = v, this.skewFromAxis = P, this.shear = d, this.scale = m, this.setTransform = b, this.translate = g, this.transform = y, this.multiply = A, this.applyToPoint = E, this.applyToX = M, this.applyToY = D, this.applyToZ = k, this.applyToPointArray = G, this.applyToTriplePoints = B, this.applyToPointStringified = C, this.toCSS = w, this.to2dCSS = _, this.clone = l, this.cloneFromProps = u, this.equals = h, this.inversePoints = V, this.inversePoint = R, this.getInverseMatrix = I, this._t = this.transform, this.isIdentity = p, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
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
            for(var e = queryString.split("&"), i = 0; i < e.length; i += 1){
                var r = e[i].split("=");
                if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1]);
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
            t.registerModifier = i, t.getModifier = r;
            function i(s, a) {
                e[s] || (e[s] = a);
            }
            function r(s, a, n) {
                return new e[s](a, n);
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
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, s) {
            var a = [];
            e <= 1 ? a.push({
                s: t,
                e
            }) : t >= 1 ? a.push({
                s: t - 1,
                e: e - 1
            }) : (a.push({
                s: t,
                e: 1
            }), a.push({
                s: 0,
                e: e - 1
            }));
            var n = [], f, o = a.length, d;
            for(f = 0; f < o; f += 1)if (d = a[f], !(d.e * s < r || d.s * s > r + i)) {
                var v, P;
                d.s * s <= r ? v = 0 : v = (d.s * s - r) / i, d.e * s >= r + i ? P = 1 : P = (d.e * s - r) / i, n.push([
                    v,
                    P
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
                    var s = e;
                    e = i, i = s;
                }
                e = Math.round(e * 1e4) * 1e-4, i = Math.round(i * 1e4) * 1e-4, this.sValue = e, this.eValue = i;
            } else e = this.sValue, i = this.eValue;
            var a, n, f = this.shapes.length, o, d, v, P, m, b = 0;
            if (i === e) for(n = 0; n < f; n += 1)this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
            else if (i === 1 && e === 0 || i === 0 && e === 1) {
                if (this._mdf) for(n = 0; n < f; n += 1)this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0;
            } else {
                var g = [], y, A;
                for(n = 0; n < f; n += 1)if (y = this.shapes[n], !y.shape._mdf && !this._mdf && !t && this.m !== 2) y.shape.paths = y.localShapeCollection;
                else {
                    if (a = y.shape.paths, d = a._length, m = 0, !y.shape._mdf && y.pathsData.length) m = y.totalShapeLength;
                    else {
                        for(v = this.releasePathsData(y.pathsData), o = 0; o < d; o += 1)P = bez.getSegmentsLength(a.shapes[o]), v.push(P), m += P.totalLength;
                        y.totalShapeLength = m, y.pathsData = v;
                    }
                    b += m, y.shape._mdf = !0;
                }
                var p = e, h = i, l = 0, u;
                for(n = f - 1; n >= 0; n -= 1)if (y = this.shapes[n], y.shape._mdf) {
                    for(A = y.localShapeCollection, A.releaseShapes(), this.m === 2 && f > 1 ? (u = this.calculateShapeEdges(e, i, y.totalShapeLength, l, b), l += y.totalShapeLength) : u = [
                        [
                            p,
                            h
                        ]
                    ], d = u.length, o = 0; o < d; o += 1){
                        p = u[o][0], h = u[o][1], g.length = 0, h <= 1 ? g.push({
                            s: y.totalShapeLength * p,
                            e: y.totalShapeLength * h
                        }) : p >= 1 ? g.push({
                            s: y.totalShapeLength * (p - 1),
                            e: y.totalShapeLength * (h - 1)
                        }) : (g.push({
                            s: y.totalShapeLength * p,
                            e: y.totalShapeLength
                        }), g.push({
                            s: 0,
                            e: y.totalShapeLength * (h - 1)
                        }));
                        var E = this.addShapes(y, g[0]);
                        if (g[0].s !== g[0].e) {
                            if (g.length > 1) {
                                var M = y.shape.paths.shapes[y.shape.paths._length - 1];
                                if (M.c) {
                                    var D = E.pop();
                                    this.addPaths(E, A), E = this.addShapes(y, g[1], D);
                                } else this.addPaths(E, A), E = this.addShapes(y, g[1]);
                            }
                            this.addPaths(E, A);
                        }
                    }
                    y.shape.paths = A;
                }
            }
        }, TrimModifier.prototype.addPaths = function(t, e) {
            var i, r = t.length;
            for(i = 0; i < r; i += 1)e.addShape(t[i]);
        }, TrimModifier.prototype.addSegment = function(t, e, i, r, s, a, n) {
            s.setXYAt(e[0], e[1], "o", a), s.setXYAt(i[0], i[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(r[0], r[1], "v", a + 1);
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
            e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
        }, TrimModifier.prototype.addShapes = function(t, e, i) {
            var r = t.pathsData, s = t.shape.paths.shapes, a, n = t.shape.paths._length, f, o, d = 0, v, P, m, b, g = [], y, A = !0;
            for(i ? (P = i._length, y = i._length) : (i = shapePool.newElement(), P = 0, y = 0), g.push(i), a = 0; a < n; a += 1){
                for(m = r[a].lengths, i.c = s[a].c, o = s[a].c ? m.length : m.length + 1, f = 1; f < o; f += 1)if (v = m[f - 1], d + v.addedLength < e.s) d += v.addedLength, i.c = !1;
                else if (d > e.e) {
                    i.c = !1;
                    break;
                } else e.s <= d && e.e >= d + v.addedLength ? (this.addSegment(s[a].v[f - 1], s[a].o[f - 1], s[a].i[f], s[a].v[f], i, P, A), A = !1) : (b = bez.getNewSegment(s[a].v[f - 1], s[a].v[f], s[a].o[f - 1], s[a].i[f], (e.s - d) / v.addedLength, (e.e - d) / v.addedLength, m[f - 1]), this.addSegmentFromArray(b, i, P, A), A = !1, i.c = !1), d += v.addedLength, P += 1;
                if (s[a].c && m.length) {
                    if (v = m[f - 1], d <= e.e) {
                        var p = m[f - 1].addedLength;
                        e.s <= d && e.e >= d + p ? (this.addSegment(s[a].v[f - 1], s[a].o[f - 1], s[a].i[0], s[a].v[0], i, P, A), A = !1) : (b = bez.getNewSegment(s[a].v[f - 1], s[a].v[0], s[a].o[f - 1], s[a].i[0], (e.s - d) / p, (e.e - d) / p, m[f - 1]), this.addSegmentFromArray(b, i, P, A), A = !1, i.c = !1);
                    } else i.c = !1;
                    d += v.addedLength, P += 1;
                }
                if (i._length && (i.setXYAt(i.v[y][0], i.v[y][1], "i", y), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
                a < n - 1 && (i = shapePool.newElement(), A = !0, g.push(i), P = 0);
            }
            return g;
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
            ], s = t._length, a = 0;
            for(a = 0; a < s; a += 1)r[0] += t.v[a][0], r[1] += t.v[a][1];
            r[0] /= s, r[1] /= s;
            var n = shapePool.newElement();
            n.c = t.c;
            var f, o, d, v, P, m;
            for(a = 0; a < s; a += 1)f = t.v[a][0] + (r[0] - t.v[a][0]) * i, o = t.v[a][1] + (r[1] - t.v[a][1]) * i, d = t.o[a][0] + (r[0] - t.o[a][0]) * -i, v = t.o[a][1] + (r[1] - t.o[a][1]) * -i, P = t.i[a][0] + (r[0] - t.i[a][0]) * -i, m = t.i[a][1] + (r[1] - t.i[a][1]) * -i, n.setTripleAt(f, o, d, v, P, m, a);
            return n;
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, i, r = this.shapes.length, s, a, n = this.amount.v;
            if (n !== 0) {
                var f, o;
                for(i = 0; i < r; i += 1){
                    if (f = this.shapes[i], o = f.localShapeCollection, !(!f.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), f.shape._mdf = !0, e = f.shape.paths.shapes, a = f.shape.paths._length, s = 0; s < a; s += 1)o.addShape(this.processPath(e[s], n));
                    f.shape.paths = f.localShapeCollection;
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
                var d = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || d, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            function i(o) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
                        var d;
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var v, P;
                            if (d = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (v = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / d, 0), P = this.p.getValueAtTime(this.p.keyframes[0].t / d, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (v = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / d, 0), P = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / d, 0)) : (v = this.p.pv, P = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / d, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                v = [], P = [];
                                var m = this.px, b = this.py;
                                m._caching.lastFrame + m.offsetTime <= m.keyframes[0].t ? (v[0] = m.getValueAtTime((m.keyframes[0].t + .01) / d, 0), v[1] = b.getValueAtTime((b.keyframes[0].t + .01) / d, 0), P[0] = m.getValueAtTime(m.keyframes[0].t / d, 0), P[1] = b.getValueAtTime(b.keyframes[0].t / d, 0)) : m._caching.lastFrame + m.offsetTime >= m.keyframes[m.keyframes.length - 1].t ? (v[0] = m.getValueAtTime(m.keyframes[m.keyframes.length - 1].t / d, 0), v[1] = b.getValueAtTime(b.keyframes[b.keyframes.length - 1].t / d, 0), P[0] = m.getValueAtTime((m.keyframes[m.keyframes.length - 1].t - .01) / d, 0), P[1] = b.getValueAtTime((b.keyframes[b.keyframes.length - 1].t - .01) / d, 0)) : (v = [
                                    m.pv,
                                    b.pv
                                ], P[0] = m.getValueAtTime((m._caching.lastFrame + m.offsetTime - .01) / d, m.offsetTime), P[1] = b.getValueAtTime((b._caching.lastFrame + b.offsetTime - .01) / d, b.offsetTime));
                            } else P = t, v = P;
                            this.v.rotate(-Math.atan2(v[1] - P[1], v[0] - P[0]));
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
            function s() {}
            function a(o) {
                this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0;
            }
            function n(o, d, v) {
                if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = d, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(v || o), d.p && d.p.s ? (this.px = PropertyFactory.getProp(o, d.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, d.p.y, 0, 0, this), d.p.z && (this.pz = PropertyFactory.getProp(o, d.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, d.p || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), d.rx) {
                    if (this.rx = PropertyFactory.getProp(o, d.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, d.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, d.rz, 0, degToRads, this), d.or.k[0].ti) {
                        var P, m = d.or.k.length;
                        for(P = 0; P < m; P += 1)d.or.k[P].to = null, d.or.k[P].ti = null;
                    }
                    this.or = PropertyFactory.getProp(o, d.or, 1, degToRads, this), this.or.sh = !0;
                } else this.r = PropertyFactory.getProp(o, d.r || {
                    k: 0
                }, 0, degToRads, this);
                d.sk && (this.sk = PropertyFactory.getProp(o, d.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, d.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, d.a || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), this.s = PropertyFactory.getProp(o, d.s || {
                    k: [
                        100,
                        100,
                        100
                    ]
                }, 1, .01, this), d.o ? this.o = PropertyFactory.getProp(o, d.o, 0, .01, o) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
            }
            n.prototype = {
                applyToMatrix: e,
                getValue: i,
                precalculateMatrix: r,
                autoOrient: s
            }, extendPrototype([
                DynamicPropertyContainer
            ], n), n.prototype.addDynamicProperty = a, n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
            function f(o, d, v) {
                return new n(o, d, v);
            }
            return {
                getTransformProperty: f
            };
        }();
        function RepeaterModifier() {}
        extendPrototype([
            ShapeModifier
        ], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix;
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, s, a) {
            var n = a ? -1 : 1, f = r.s.v[0] + (1 - r.s.v[0]) * (1 - s), o = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
            t.translate(r.p.v[0] * n * s, r.p.v[1] * n * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * n * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(a ? 1 / f : f, a ? 1 / o : o), i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
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
            var e, i, r, s, a, n = !1;
            if (this._mdf || t) {
                var f = Math.ceil(this.c.v);
                if (this._groups.length < f) {
                    for(; this._groups.length < f;){
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
                a = 0;
                var d;
                for(r = 0; r <= this._groups.length - 1; r += 1){
                    if (d = a < f, this._groups[r]._render = d, this.changeGroupRender(this._groups[r].it, d), !d) {
                        var v = this.elemsData[r].it, P = v[v.length - 1];
                        P.transform.op.v !== 0 ? (P.transform.op._mdf = !0, P.transform.op.v = 0) : P.transform.op._mdf = !1;
                    }
                    a += 1;
                }
                this._currentCopies = f;
                var m = this.o.v, b = m % 1, g = m > 0 ? Math.floor(m) : Math.ceil(m), y = this.pMatrix.props, A = this.rMatrix.props, p = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var h = 0;
                if (m > 0) {
                    for(; h < g;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), h += 1;
                    b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, b, !1), h += b);
                } else if (m < 0) {
                    for(; h > g;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), h -= 1;
                    b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -b, !0), h -= b);
                }
                r = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
                for(var l, u; a;){
                    if (e = this.elemsData[r].it, i = e[e.length - 1].transform.mProps.v.props, u = i.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), h !== 0) {
                        for((r !== 0 && s === 1 || r !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(A[0], A[1], A[2], A[3], A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12], A[13], A[14], A[15]), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), l = 0; l < u; l += 1)i[l] = this.matrix.props[l];
                        this.matrix.reset();
                    } else for(this.matrix.reset(), l = 0; l < u; l += 1)i[l] = this.matrix.props[l];
                    h += 1, a -= 1, r += s;
                }
            } else for(a = this._currentCopies, r = 0, s = 1; a;)e = this.elemsData[r].it, i = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, r += s;
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
            var r, s = t._length, a, n, f, o, d, v, P = 0, m, b, g, y, A, p;
            for(r = 0; r < s; r += 1)a = t.v[r], f = t.o[r], n = t.i[r], a[0] === f[0] && a[1] === f[1] && a[0] === n[0] && a[1] === n[1] ? (r === 0 || r === s - 1) && !t.c ? (i.setTripleAt(a[0], a[1], f[0], f[1], n[0], n[1], P), P += 1) : (r === 0 ? o = t.v[s - 1] : o = t.v[r - 1], d = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), v = d ? Math.min(d / 2, e) / d : 0, A = a[0] + (o[0] - a[0]) * v, m = A, p = a[1] - (a[1] - o[1]) * v, b = p, g = m - (m - a[0]) * roundCorner, y = b - (b - a[1]) * roundCorner, i.setTripleAt(m, b, g, y, A, p, P), P += 1, r === s - 1 ? o = t.v[0] : o = t.v[r + 1], d = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), v = d ? Math.min(d / 2, e) / d : 0, g = a[0] + (o[0] - a[0]) * v, m = g, y = a[1] + (o[1] - a[1]) * v, b = y, A = m - (m - a[0]) * roundCorner, p = b - (b - a[1]) * roundCorner, i.setTripleAt(m, b, g, y, A, p, P), P += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], P), P += 1);
            return i;
        }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, i, r = this.shapes.length, s, a, n = this.rd.v;
            if (n !== 0) {
                var f, o;
                for(i = 0; i < r; i += 1){
                    if (f = this.shapes[i], o = f.localShapeCollection, !(!f.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), f.shape._mdf = !0, e = f.shape.paths.shapes, a = f.shape.paths._length, s = 0; s < a; s += 1)o.addShape(this.processPath(e[s], n));
                    f.shape.paths = f.localShapeCollection;
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
            var s = -e / (2 * t);
            if (r === 0) return [
                s
            ];
            var a = Math.sqrt(r) / (2 * t);
            return [
                s - a,
                s + a
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
        function PolynomialBezier(t, e, i, r, s) {
            s && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)), s && pointEqual(i, r) && (i = lerpPoint(t, r, 2 / 3));
            var a = polynomialCoefficients(t[0], e[0], i[0], r[0]), n = polynomialCoefficients(t[1], e[1], i[1], r[1]);
            this.a = [
                a[0],
                n[0]
            ], this.b = [
                a[1],
                n[1]
            ], this.c = [
                a[2],
                n[2]
            ], this.d = [
                a[3],
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
            ].filter(function(s) {
                return s > 0 && s < 1;
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
            var e = lerpPoint(this.points[0], this.points[1], t), i = lerpPoint(this.points[1], this.points[2], t), r = lerpPoint(this.points[2], this.points[3], t), s = lerpPoint(e, i, t), a = lerpPoint(i, r, t), n = lerpPoint(s, a, t);
            return [
                new PolynomialBezier(this.points[0], e, s, n, !0),
                new PolynomialBezier(n, a, r, this.points[3], !0)
            ];
        };
        function extrema(t, e) {
            var i = t.points[0][e], r = t.points[t.points.length - 1][e];
            if (i > r) {
                var s = r;
                r = i, i = s;
            }
            for(var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)if (a[n] > 0 && a[n] < 1) {
                var f = t.point(a[n])[e];
                f < i ? i = f : f > r && (r = f);
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
        function intersectsImpl(t, e, i, r, s, a) {
            if (boxIntersect(t, e)) {
                if (i >= a || t.width <= r && t.height <= r && e.width <= r && e.height <= r) {
                    s.push([
                        t.t,
                        e.t
                    ]);
                    return;
                }
                var n = splitData(t), f = splitData(e);
                intersectsImpl(n[0], f[0], i + 1, r, s, a), intersectsImpl(n[0], f[1], i + 1, r, s, a), intersectsImpl(n[1], f[0], i + 1, r, s, a), intersectsImpl(n[1], f[1], i + 1, r, s, a);
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
            var s = [
                t[0],
                t[1],
                1
            ], a = [
                e[0],
                e[1],
                1
            ], n = [
                i[0],
                i[1],
                1
            ], f = [
                r[0],
                r[1],
                1
            ], o = crossProduct(crossProduct(s, a), crossProduct(n, f));
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
        function setPoint(t, e, i, r, s, a, n) {
            var f = i - Math.PI / 2, o = i + Math.PI / 2, d = e[0] + Math.cos(i) * r * s, v = e[1] - Math.sin(i) * r * s;
            t.setTripleAt(d, v, d + Math.cos(f) * a, v - Math.sin(f) * a, d + Math.cos(o) * n, v - Math.sin(o) * n, t.length());
        }
        function getPerpendicularVector(t, e) {
            var i = [
                e[0] - t[0],
                e[1] - t[1]
            ], r = -Math.PI * .5, s = [
                Math.cos(r) * i[0] - Math.sin(r) * i[1],
                Math.sin(r) * i[0] + Math.cos(r) * i[1]
            ];
            return s;
        }
        function getProjectingAngle(t, e) {
            var i = e === 0 ? t.length() - 1 : e - 1, r = (e + 1) % t.length(), s = t.v[i], a = t.v[r], n = getPerpendicularVector(s, a);
            return Math.atan2(0, 1) - Math.atan2(n[1], n[0]);
        }
        function zigZagCorner(t, e, i, r, s, a, n) {
            var f = getProjectingAngle(e, i), o = e.v[i % e._length], d = e.v[i === 0 ? e._length - 1 : i - 1], v = e.v[(i + 1) % e._length], P = a === 2 ? Math.sqrt(Math.pow(o[0] - d[0], 2) + Math.pow(o[1] - d[1], 2)) : 0, m = a === 2 ? Math.sqrt(Math.pow(o[0] - v[0], 2) + Math.pow(o[1] - v[1], 2)) : 0;
            setPoint(t, e.v[i % e._length], f, n, r, m / ((s + 1) * 2), P / ((s + 1) * 2));
        }
        function zigZagSegment(t, e, i, r, s, a) {
            for(var n = 0; n < r; n += 1){
                var f = (n + 1) / (r + 1), o = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, d = e.normalAngle(f), v = e.point(f);
                setPoint(t, v, d, a, i, o / ((r + 1) * 2), o / ((r + 1) * 2)), a = -a;
            }
            return a;
        }
        ZigZagModifier.prototype.processPath = function(t, e, i, r) {
            var s = t._length, a = shapePool.newElement();
            if (a.c = t.c, t.c || (s -= 1), s === 0) return a;
            var n = -1, f = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(a, t, 0, e, i, r, n);
            for(var o = 0; o < s; o += 1)n = zigZagSegment(a, f, e, i, r, -n), o === s - 1 && !t.c ? f = null : f = PolynomialBezier.shapeSegment(t, (o + 1) % s), zigZagCorner(a, t, o + 1, e, i, r, n);
            return a;
        }, ZigZagModifier.prototype.processShapes = function(t) {
            var e, i, r = this.shapes.length, s, a, n = this.amplitude.v, f = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
            if (n !== 0) {
                var d, v;
                for(i = 0; i < r; i += 1){
                    if (d = this.shapes[i], v = d.localShapeCollection, !(!d.shape._mdf && !this._mdf && !t)) for(v.releaseShapes(), d.shape._mdf = !0, e = d.shape.paths.shapes, a = d.shape.paths._length, s = 0; s < a; s += 1)v.addShape(this.processPath(e[s], n, f, o));
                    d.shape.paths = d.localShapeCollection;
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
            var i, r, s, a, n, f, o;
            o = linearOffset(t.points[0], t.points[1], e), i = o[0], r = o[1], o = linearOffset(t.points[1], t.points[2], e), s = o[0], a = o[1], o = linearOffset(t.points[2], t.points[3], e), n = o[0], f = o[1];
            var d = lineIntersection(i, r, s, a);
            d === null && (d = r);
            var v = lineIntersection(n, f, s, a);
            return v === null && (v = n), new PolynomialBezier(i, d, v, f);
        }
        function joinLines(t, e, i, r, s) {
            var a = e.points[3], n = i.points[0];
            if (r === 3 || pointEqual(a, n)) return a;
            if (r === 2) {
                var f = -e.tangentAngle(1), o = -i.tangentAngle(0) + Math.PI, d = lineIntersection(a, polarOffset(a, f + Math.PI / 2, 100), n, polarOffset(n, f + Math.PI / 2, 100)), v = d ? pointDistance(d, a) : pointDistance(a, n) / 2, P = polarOffset(a, f, 2 * v * roundCorner);
                return t.setXYAt(P[0], P[1], "o", t.length() - 1), P = polarOffset(n, o, 2 * v * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], P[0], P[1], t.length()), n;
            }
            var m = pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], b = pointEqual(n, i.points[1]) ? i.points[3] : i.points[1], g = lineIntersection(m, a, n, b);
            return g && pointDistance(g, a) < s ? (t.setTripleAt(g[0], g[1], g[0], g[1], g[0], g[1], t.length()), g) : a;
        }
        function getIntersection(t, e) {
            var i = t.intersections(e);
            return i.length && floatEqual(i[0][0], 1) && i.shift(), i.length ? i[0] : null;
        }
        function pruneSegmentIntersection(t, e) {
            var i = t.slice(), r = e.slice(), s = getIntersection(t[t.length - 1], e[0]);
            return s && (i[t.length - 1] = t[t.length - 1].split(s[0])[0], r[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1]), s) ? [
                [
                    t[0].split(s[0])[0]
                ],
                [
                    e[e.length - 1].split(s[1])[1]
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
            var i = t.inflectionPoints(), r, s, a, n;
            if (i.length === 0) return [
                offsetSegment(t, e)
            ];
            if (i.length === 1 || floatEqual(i[1], 1)) return a = t.split(i[0]), r = a[0], s = a[1], [
                offsetSegment(r, e),
                offsetSegment(s, e)
            ];
            a = t.split(i[0]), r = a[0];
            var f = (i[1] - i[0]) / (1 - i[0]);
            return a = a[1].split(f), n = a[0], s = a[1], [
                offsetSegment(r, e),
                offsetSegment(n, e),
                offsetSegment(s, e)
            ];
        }
        function OffsetPathModifier() {}
        extendPrototype([
            ShapeModifier
        ], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
        }, OffsetPathModifier.prototype.processPath = function(t, e, i, r) {
            var s = shapePool.newElement();
            s.c = t.c;
            var a = t.length();
            t.c || (a -= 1);
            var n, f, o, d = [];
            for(n = 0; n < a; n += 1)o = PolynomialBezier.shapeSegment(t, n), d.push(offsetSegmentSplit(o, e));
            if (!t.c) for(n = a - 1; n >= 0; n -= 1)o = PolynomialBezier.shapeSegmentInverted(t, n), d.push(offsetSegmentSplit(o, e));
            d = pruneIntersections(d);
            var v = null, P = null;
            for(n = 0; n < d.length; n += 1){
                var m = d[n];
                for(P && (v = joinLines(s, P, m[0], i, r)), P = m[m.length - 1], f = 0; f < m.length; f += 1)o = m[f], v && pointEqual(o.points[0], v) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), v = o.points[3];
            }
            return d.length && joinLines(s, P, d[0][0], i, r), s;
        }, OffsetPathModifier.prototype.processShapes = function(t) {
            var e, i, r = this.shapes.length, s, a, n = this.amount.v, f = this.miterLimit.v, o = this.lineJoin;
            if (n !== 0) {
                var d, v;
                for(i = 0; i < r; i += 1){
                    if (d = this.shapes[i], v = d.localShapeCollection, !(!d.shape._mdf && !this._mdf && !t)) for(v.releaseShapes(), d.shape._mdf = !0, e = d.shape.paths.shapes, a = d.shape.paths._length, s = 0; s < a; s += 1)v.addShape(this.processPath(e[s], n, o, f));
                    d.shape.paths = d.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function getFontProperties(t) {
            for(var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", s = e.length, a, n = 0; n < s; n += 1)switch(a = e[n].toLowerCase(), a){
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
            var r = 127988, s = 917631, a = 917601, n = 917626, f = 65039, o = 8205, d = 127462, v = 127487, P = [
                "d83cdffb",
                "d83cdffc",
                "d83cdffd",
                "d83cdffe",
                "d83cdfff"
            ];
            function m(x) {
                var _ = x.split(","), c, S = _.length, F = [];
                for(c = 0; c < S; c += 1)_[c] !== "sans-serif" && _[c] !== "monospace" && F.push(_[c]);
                return F.join(",");
            }
            function b(x, _) {
                var c = createTag("span");
                c.setAttribute("aria-hidden", !0), c.style.fontFamily = _;
                var S = createTag("span");
                S.innerText = "giItT1WQy@!-/#", c.style.position = "absolute", c.style.left = "-10000px", c.style.top = "-10000px", c.style.fontSize = "300px", c.style.fontVariant = "normal", c.style.fontStyle = "normal", c.style.fontWeight = "normal", c.style.letterSpacing = "0", c.appendChild(S), document.body.appendChild(c);
                var F = S.offsetWidth;
                return S.style.fontFamily = m(x) + ", " + _, {
                    node: S,
                    w: F,
                    parent: c
                };
            }
            function g() {
                var x, _ = this.fonts.length, c, S, F = _;
                for(x = 0; x < _; x += 1)this.fonts[x].loaded ? F -= 1 : this.fonts[x].fOrigin === "n" || this.fonts[x].origin === 0 ? this.fonts[x].loaded = !0 : (c = this.fonts[x].monoCase.node, S = this.fonts[x].monoCase.w, c.offsetWidth !== S ? (F -= 1, this.fonts[x].loaded = !0) : (c = this.fonts[x].sansCase.node, S = this.fonts[x].sansCase.w, c.offsetWidth !== S && (F -= 1, this.fonts[x].loaded = !0)), this.fonts[x].loaded && (this.fonts[x].sansCase.parent.parentNode.removeChild(this.fonts[x].sansCase.parent), this.fonts[x].monoCase.parent.parentNode.removeChild(this.fonts[x].monoCase.parent)));
                F !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function y(x, _) {
                var c = document.body && _ ? "svg" : "canvas", S, F = getFontProperties(x);
                if (c === "svg") {
                    var T = createNS("text");
                    T.style.fontSize = "100px", T.setAttribute("font-family", x.fFamily), T.setAttribute("font-style", F.style), T.setAttribute("font-weight", F.weight), T.textContent = "1", x.fClass ? (T.style.fontFamily = "inherit", T.setAttribute("class", x.fClass)) : T.style.fontFamily = x.fFamily, _.appendChild(T), S = T;
                } else {
                    var N = new OffscreenCanvas(500, 500).getContext("2d");
                    N.font = F.style + " " + F.weight + " 100px " + x.fFamily, S = N;
                }
                function L(H) {
                    return c === "svg" ? (S.textContent = H, S.getComputedTextLength()) : S.measureText(H).width;
                }
                return {
                    measureText: L
                };
            }
            function A(x, _) {
                if (!x) {
                    this.isLoaded = !0;
                    return;
                }
                if (this.chars) {
                    this.isLoaded = !0, this.fonts = x.list;
                    return;
                }
                if (!document.body) {
                    this.isLoaded = !0, x.list.forEach(function(X) {
                        X.helper = y(X), X.cache = {};
                    }), this.fonts = x.list;
                    return;
                }
                var c = x.list, S, F = c.length, T = F;
                for(S = 0; S < F; S += 1){
                    var N = !0, L, H;
                    if (c[S].loaded = !1, c[S].monoCase = b(c[S].fFamily, "monospace"), c[S].sansCase = b(c[S].fFamily, "sans-serif"), !c[S].fPath) c[S].loaded = !0, T -= 1;
                    else if (c[S].fOrigin === "p" || c[S].origin === 3) {
                        if (L = document.querySelectorAll('style[f-forigin="p"][f-family="' + c[S].fFamily + '"], style[f-origin="3"][f-family="' + c[S].fFamily + '"]'), L.length > 0 && (N = !1), N) {
                            var O = createTag("style");
                            O.setAttribute("f-forigin", c[S].fOrigin), O.setAttribute("f-origin", c[S].origin), O.setAttribute("f-family", c[S].fFamily), O.type = "text/css", O.innerText = "@font-face {font-family: " + c[S].fFamily + "; font-style: normal; src: url('" + c[S].fPath + "');}", _.appendChild(O);
                        }
                    } else if (c[S].fOrigin === "g" || c[S].origin === 1) {
                        for(L = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), H = 0; H < L.length; H += 1)L[H].href.indexOf(c[S].fPath) !== -1 && (N = !1);
                        if (N) {
                            var q = createTag("link");
                            q.setAttribute("f-forigin", c[S].fOrigin), q.setAttribute("f-origin", c[S].origin), q.type = "text/css", q.rel = "stylesheet", q.href = c[S].fPath, document.body.appendChild(q);
                        }
                    } else if (c[S].fOrigin === "t" || c[S].origin === 2) {
                        for(L = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), H = 0; H < L.length; H += 1)c[S].fPath === L[H].src && (N = !1);
                        if (N) {
                            var $ = createTag("link");
                            $.setAttribute("f-forigin", c[S].fOrigin), $.setAttribute("f-origin", c[S].origin), $.setAttribute("rel", "stylesheet"), $.setAttribute("href", c[S].fPath), _.appendChild($);
                        }
                    }
                    c[S].helper = y(c[S], _), c[S].cache = {}, this.fonts.push(c[S]);
                }
                T === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function p(x) {
                if (x) {
                    this.chars || (this.chars = []);
                    var _, c = x.length, S, F = this.chars.length, T;
                    for(_ = 0; _ < c; _ += 1){
                        for(S = 0, T = !1; S < F;)this.chars[S].style === x[_].style && this.chars[S].fFamily === x[_].fFamily && this.chars[S].ch === x[_].ch && (T = !0), S += 1;
                        T || (this.chars.push(x[_]), F += 1);
                    }
                }
            }
            function h(x, _, c) {
                for(var S = 0, F = this.chars.length; S < F;){
                    if (this.chars[S].ch === x && this.chars[S].style === _ && this.chars[S].fFamily === c) return this.chars[S];
                    S += 1;
                }
                return (typeof x == "string" && x.charCodeAt(0) !== 13 || !x) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", x, _, c)), e;
            }
            function l(x, _, c) {
                var S = this.getFontByName(_), F = x;
                if (!S.cache[F]) {
                    var T = S.helper;
                    if (x === " ") {
                        var N = T.measureText("|" + x + "|"), L = T.measureText("||");
                        S.cache[F] = (N - L) / 100;
                    } else S.cache[F] = T.measureText(x) / 100;
                }
                return S.cache[F] * c;
            }
            function u(x) {
                for(var _ = 0, c = this.fonts.length; _ < c;){
                    if (this.fonts[_].fName === x) return this.fonts[_];
                    _ += 1;
                }
                return this.fonts[0];
            }
            function E(x) {
                var _ = 0, c = x.charCodeAt(0);
                if (c >= 55296 && c <= 56319) {
                    var S = x.charCodeAt(1);
                    S >= 56320 && S <= 57343 && (_ = (c - 55296) * 1024 + S - 56320 + 65536);
                }
                return _;
            }
            function M(x, _) {
                var c = x.toString(16) + _.toString(16);
                return P.indexOf(c) !== -1;
            }
            function D(x) {
                return x === o;
            }
            function k(x) {
                return x === f;
            }
            function I(x) {
                var _ = E(x);
                return _ >= d && _ <= v;
            }
            function R(x) {
                return I(x.substr(0, 2)) && I(x.substr(2, 2));
            }
            function V(x) {
                return i.indexOf(x) !== -1;
            }
            function B(x, _) {
                var c = E(x.substr(_, 2));
                if (c !== r) return !1;
                var S = 0;
                for(_ += 2; S < 5;){
                    if (c = E(x.substr(_, 2)), c < a || c > n) return !1;
                    S += 1, _ += 2;
                }
                return E(x.substr(_, 2)) === s;
            }
            function G() {
                this.isLoaded = !0;
            }
            var C = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            C.isModifier = M, C.isZeroWidthJoiner = D, C.isFlagEmoji = R, C.isRegionalCode = I, C.isCombinedCharacter = V, C.isRegionalFlag = B, C.isVariationSelector = k, C.BLACK_FLAG_CODE_POINT = r;
            var w = {
                addChars: p,
                addFonts: A,
                getCharData: h,
                getFontByName: u,
                measureText: l,
                checkLoadedFonts: g,
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
            var r, s = i.length, a;
            for(r = 0; r < s; r += 1)a = new GroupEffect(i[r], e), this.effectElements.push(a);
        }
        function GroupEffect(t, e) {
            this.init(t, e);
        }
        extendPrototype([
            DynamicPropertyContainer
        ], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var i, r = this.data.ef.length, s, a = this.data.ef;
            for(i = 0; i < r; i += 1){
                switch(s = null, a[i].ty){
                    case 0:
                        s = new SliderEffect(a[i], e, this);
                        break;
                    case 1:
                        s = new AngleEffect(a[i], e, this);
                        break;
                    case 2:
                        s = new ColorEffect(a[i], e, this);
                        break;
                    case 3:
                        s = new PointEffect(a[i], e, this);
                        break;
                    case 4:
                    case 7:
                        s = new CheckboxEffect(a[i], e, this);
                        break;
                    case 10:
                        s = new LayerIndexEffect(a[i], e, this);
                        break;
                    case 11:
                        s = new MaskIndexEffect(a[i], e, this);
                        break;
                    case 5:
                        s = new EffectsManager(a[i], e);
                        break;
                    default:
                        s = new NoValueEffect(a[i]);
                        break;
                }
                s && this.effectElements.push(s);
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
                    var e = t("layer"), i = t("effects"), r = t("shape"), s = t("text"), a = t("comp");
                    this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var n = i.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(n), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = s(this), this.layerInterface.text = this.layerInterface.textInterface);
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
            var e, i = t.length, r, s = this.layers.length;
            for(e = 0; e < i; e += 1)for(r = 0; r < s;){
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
            for(var r = this.elements, s = this.layers, a = 0, n = s.length; a < n;)s[a].ind == e && (!r[a] || r[a] === !0 ? (this.buildItem(a), this.addPendingElement(t)) : (i.push(r[a]), r[a].setAsParent(), s[a].parent !== void 0 ? this.buildElementParenting(t, s[a].parent, i) : t.setHierarchy(i))), a += 1;
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
                var r, s = this.elements.length;
                for(r = 0; r < s; r += 1)if (this.elements[r].data.nm === e) {
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
                        var s = this.finalTransform.localOpacity;
                        for(t = 0; t < e; t += 1)s *= this.localTransforms[t].opacity * .01;
                        this.finalTransform.localOpacity = s;
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
                var s, a = e.length, n;
                for(s = 0; s < a; s += 1)n = e[s].mat.applyToPointArray(0, 0, 0), t = [
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
            var r = this.globalData.defs, s, a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(a), this.solidPath = "";
            var n, f = this.masksProperties, o = 0, d = [], v, P, m = createElementID(), b, g, y, A, p = "clipPath", h = "clip-path";
            for(s = 0; s < a; s += 1)if ((f[s].mode !== "a" && f[s].mode !== "n" || f[s].inv || f[s].o.k !== 100 || f[s].o.x) && (p = "mask", h = "mask"), (f[s].mode === "s" || f[s].mode === "i") && o === 0 ? (b = createNS("rect"), b.setAttribute("fill", "#ffffff"), b.setAttribute("width", this.element.comp.data.w || 0), b.setAttribute("height", this.element.comp.data.h || 0), d.push(b)) : b = null, n = createNS("path"), f[s].mode === "n") this.viewData[s] = {
                op: PropertyFactory.getProp(this.element, f[s].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, f[s], 3),
                elem: n,
                lastPath: ""
            }, r.appendChild(n);
            else {
                o += 1, n.setAttribute("fill", f[s].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
                var l;
                if (f[s].x.k !== 0 ? (p = "mask", h = "mask", A = PropertyFactory.getProp(this.element, f[s].x, 0, null, this.element), l = createElementID(), g = createNS("filter"), g.setAttribute("id", l), y = createNS("feMorphology"), y.setAttribute("operator", "erode"), y.setAttribute("in", "SourceGraphic"), y.setAttribute("radius", "0"), g.appendChild(y), r.appendChild(g), n.setAttribute("stroke", f[s].mode === "s" ? "#000000" : "#ffffff")) : (y = null, A = null), this.storedData[s] = {
                    elem: n,
                    x: A,
                    expan: y,
                    lastPath: "",
                    lastOperator: "",
                    filterId: l,
                    lastRadius: 0
                }, f[s].mode === "i") {
                    P = d.length;
                    var u = createNS("g");
                    for(v = 0; v < P; v += 1)u.appendChild(d[v]);
                    var E = createNS("mask");
                    E.setAttribute("mask-type", "alpha"), E.setAttribute("id", m + "_" + o), E.appendChild(n), r.appendChild(E), u.setAttribute("mask", "url(" + getLocationHref() + "#" + m + "_" + o + ")"), d.length = 0, d.push(u);
                } else d.push(n);
                f[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                    elem: n,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, f[s].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, f[s], 3),
                    invRect: b
                }, this.viewData[s].prop.k || this.drawPath(f[s], this.viewData[s].prop.v, this.viewData[s]);
            }
            for(this.maskElement = createNS(p), a = d.length, s = 0; s < a; s += 1)this.maskElement.appendChild(d[s]);
            o > 0 && (this.maskElement.setAttribute("id", m), this.element.maskedElement.setAttribute(h, "url(" + getLocationHref() + "#" + m + ")"), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
        }
        MaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop;
        }, MaskElement.prototype.renderFrame = function(t) {
            var e = this.element.finalTransform.mat, i, r = this.masksProperties.length;
            for(i = 0; i < r; i += 1)if ((this.viewData[i].prop._mdf || t) && this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]), (this.viewData[i].op._mdf || t) && this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v), this.masksProperties[i].mode !== "n" && (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[i].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[i].x && (this.storedData[i].x._mdf || t))) {
                var s = this.storedData[i].expan;
                this.storedData[i].x.v < 0 ? (this.storedData[i].lastOperator !== "erode" && (this.storedData[i].lastOperator = "erode", this.storedData[i].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[i].filterId + ")")), s.setAttribute("radius", -this.storedData[i].x.v)) : (this.storedData[i].lastOperator !== "dilate" && (this.storedData[i].lastOperator = "dilate", this.storedData[i].elem.setAttribute("filter", null)), this.storedData[i].elem.setAttribute("stroke-width", this.storedData[i].x.v * 2));
            }
        }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement;
        }, MaskElement.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
        }, MaskElement.prototype.drawPath = function(t, e, i) {
            var r = " M" + e.v[0][0] + "," + e.v[0][1], s, a;
            for(a = e._length, s = 1; s < a; s += 1)r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
            if (e.c && a > 1 && (r += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== r) {
                var n = "";
                i.elem && (e.c && (n = t.inv ? this.solidPath + r : r), i.elem.setAttribute("d", n)), i.lastPath = r;
            }
        }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
        };
        var filtersFactory = function() {
            var t = {};
            t.createFilter = e, t.createAlphaToLuminanceFilter = i;
            function e(r, s) {
                var a = createNS("filter");
                return a.setAttribute("id", r), s !== !0 && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a;
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
            var e, i = "SourceGraphic", r = t.data.ef ? t.data.ef.length : 0, s = createElementID(), a = filtersFactory.createFilter(s, !0), n = 0;
            this.filters = [];
            var f;
            for(e = 0; e < r; e += 1){
                f = null;
                var o = t.data.ef[e].ty;
                if (registeredEffects$1[o]) {
                    var d = registeredEffects$1[o].effect;
                    f = new d(a, t.effectsManager.effectElements[e], t, idPrefix + n, i), i = idPrefix + n, registeredEffects$1[o].countsAsEffect && (n += 1);
                }
                f && this.filters.push(f);
            }
            n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this);
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
                    var s = createElementID();
                    if (i.setAttribute("id", s), i.appendChild(r), this.globalData.defs.appendChild(i), this.checkMasks()) {
                        var a = createNS("g");
                        a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
                    } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")");
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
                    var e = this.layerId + "_" + t, i, r, s, a;
                    if (t === 1 || t === 3) {
                        var n = createNS("mask");
                        n.setAttribute("id", e), n.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), s = createNS("use"), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(s), this.globalData.defs.appendChild(n), !featureSupport.maskType && t === 1 && (n.setAttribute("mask-type", "luminance"), i = createElementID(), r = filtersFactory.createFilter(i), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), a.appendChild(s), n.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"));
                    } else if (t === 2) {
                        var f = createNS("mask");
                        f.setAttribute("id", e), f.setAttribute("mask-type", "alpha");
                        var o = createNS("g");
                        f.appendChild(o), i = createElementID(), r = filtersFactory.createFilter(i);
                        var d = createNS("feComponentTransfer");
                        d.setAttribute("in", "SourceGraphic"), r.appendChild(d);
                        var v = createNS("feFuncA");
                        v.setAttribute("type", "table"), v.setAttribute("tableValues", "1.0 0.0"), d.appendChild(v), this.globalData.defs.appendChild(r);
                        var P = createNS("rect");
                        P.setAttribute("width", this.comp.data.w), P.setAttribute("height", this.comp.data.h), P.setAttribute("x", "0"), P.setAttribute("y", "0"), P.setAttribute("fill", "#ffffff"), P.setAttribute("opacity", "0"), o.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), o.appendChild(P), s = createNS("use"), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o.appendChild(s), featureSupport.maskType || (f.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), o.appendChild(P), a.appendChild(this.layerElement), o.appendChild(a)), this.globalData.defs.appendChild(f);
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
            for(var r = 0, s = t.length; r < s;){
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
            var s, a = e.length || 0, n;
            for(s = 0; s < a; s += 1)n = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[s] = {
                n: e[s].n,
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
            for(var i = 0, r = this.o.length / 2, s; i < r;){
                if (s = Math.abs(t[i * 4] - t[e * 4 + i * 2]), s > .01) return !1;
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
                var e, i = this.data.p * 4, r, s;
                for(e = 0; e < i; e += 1)r = e % 4 === 0 ? 100 : 255, s = Math.round(this.prop.v[e] * r), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                if (this.o.length) for(i = this.prop.v.length, e = this.data.p * 4; e < i; e += 1)r = e % 2 === 0 ? 100 : 1, s = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== s && (this.o[e - this.data.p * 4] = s, this._omdf = !t);
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
            var s = [], a, n, f;
            for(f = e.g.p * 4, n = 0; n < f; n += 4)a = createNS("stop"), r.appendChild(a), s.push(a);
            t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"), this.gf = r, this.cst = s;
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var i, r, s, a = createNS("mask"), n = createNS("path");
                a.appendChild(n);
                var f = createElementID(), o = createElementID();
                a.setAttribute("id", o);
                var d = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
                d.setAttribute("id", f), d.setAttribute("spreadMethod", "pad"), d.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var v = this.stops;
                for(r = t.g.p * 4; r < s; r += 2)i = createNS("stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), d.appendChild(i), v.push(i);
                n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + f + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = d, this.ms = a, this.ost = v, this.maskId = o, e.msElem = n;
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
            var s = t.o, a = t.i, n = t.v, f, o = " M" + r.applyToPointStringified(n[0][0], n[0][1]);
            for(f = 1; f < e; f += 1)o += " C" + r.applyToPointStringified(s[f - 1][0], s[f - 1][1]) + " " + r.applyToPointStringified(a[f][0], a[f][1]) + " " + r.applyToPointStringified(n[f][0], n[f][1]);
            return i && e && (o += " C" + r.applyToPointStringified(s[f - 1][0], s[f - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(n[0][0], n[0][1]), o += "z"), o;
        }, SVGElementsRenderer = function() {
            var t = new Matrix, e = new Matrix, i = {
                createRenderFunction: r
            };
            function r(P) {
                switch(P.ty){
                    case "fl":
                        return f;
                    case "gf":
                        return d;
                    case "gs":
                        return o;
                    case "st":
                        return v;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                        return n;
                    case "tr":
                        return s;
                    case "no":
                        return a;
                    default:
                        return null;
                }
            }
            function s(P, m, b) {
                (b || m.transform.op._mdf) && m.transform.container.setAttribute("opacity", m.transform.op.v), (b || m.transform.mProps._mdf) && m.transform.container.setAttribute("transform", m.transform.mProps.v.to2dCSS());
            }
            function a() {}
            function n(P, m, b) {
                var g, y, A, p, h, l, u = m.styles.length, E = m.lvl, M, D, k, I;
                for(l = 0; l < u; l += 1){
                    if (p = m.sh._mdf || b, m.styles[l].lvl < E) {
                        for(D = e.reset(), k = E - m.styles[l].lvl, I = m.transformers.length - 1; !p && k > 0;)p = m.transformers[I].mProps._mdf || p, k -= 1, I -= 1;
                        if (p) for(k = E - m.styles[l].lvl, I = m.transformers.length - 1; k > 0;)D.multiply(m.transformers[I].mProps.v), k -= 1, I -= 1;
                    } else D = t;
                    if (M = m.sh.paths, y = M._length, p) {
                        for(A = "", g = 0; g < y; g += 1)h = M.shapes[g], h && h._length && (A += buildShapeString(h, h._length, h.c, D));
                        m.caches[l] = A;
                    } else A = m.caches[l];
                    m.styles[l].d += P.hd === !0 ? "" : A, m.styles[l]._mdf = p || m.styles[l]._mdf;
                }
            }
            function f(P, m, b) {
                var g = m.style;
                (m.c._mdf || b) && g.pElem.setAttribute("fill", "rgb(" + bmFloor(m.c.v[0]) + "," + bmFloor(m.c.v[1]) + "," + bmFloor(m.c.v[2]) + ")"), (m.o._mdf || b) && g.pElem.setAttribute("fill-opacity", m.o.v);
            }
            function o(P, m, b) {
                d(P, m, b), v(P, m, b);
            }
            function d(P, m, b) {
                var g = m.gf, y = m.g._hasOpacity, A = m.s.v, p = m.e.v;
                if (m.o._mdf || b) {
                    var h = P.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                    m.style.pElem.setAttribute(h, m.o.v);
                }
                if (m.s._mdf || b) {
                    var l = P.t === 1 ? "x1" : "cx", u = l === "x1" ? "y1" : "cy";
                    g.setAttribute(l, A[0]), g.setAttribute(u, A[1]), y && !m.g._collapsable && (m.of.setAttribute(l, A[0]), m.of.setAttribute(u, A[1]));
                }
                var E, M, D, k;
                if (m.g._cmdf || b) {
                    E = m.cst;
                    var I = m.g.c;
                    for(D = E.length, M = 0; M < D; M += 1)k = E[M], k.setAttribute("offset", I[M * 4] + "%"), k.setAttribute("stop-color", "rgb(" + I[M * 4 + 1] + "," + I[M * 4 + 2] + "," + I[M * 4 + 3] + ")");
                }
                if (y && (m.g._omdf || b)) {
                    var R = m.g.o;
                    for(m.g._collapsable ? E = m.cst : E = m.ost, D = E.length, M = 0; M < D; M += 1)k = E[M], m.g._collapsable || k.setAttribute("offset", R[M * 2] + "%"), k.setAttribute("stop-opacity", R[M * 2 + 1]);
                }
                if (P.t === 1) (m.e._mdf || b) && (g.setAttribute("x2", p[0]), g.setAttribute("y2", p[1]), y && !m.g._collapsable && (m.of.setAttribute("x2", p[0]), m.of.setAttribute("y2", p[1])));
                else {
                    var V;
                    if ((m.s._mdf || m.e._mdf || b) && (V = Math.sqrt(Math.pow(A[0] - p[0], 2) + Math.pow(A[1] - p[1], 2)), g.setAttribute("r", V), y && !m.g._collapsable && m.of.setAttribute("r", V)), m.e._mdf || m.h._mdf || m.a._mdf || b) {
                        V || (V = Math.sqrt(Math.pow(A[0] - p[0], 2) + Math.pow(A[1] - p[1], 2)));
                        var B = Math.atan2(p[1] - A[1], p[0] - A[0]), G = m.h.v;
                        G >= 1 ? G = .99 : G <= -1 && (G = -0.99);
                        var C = V * G, w = Math.cos(B + m.a.v) * C + A[0], x = Math.sin(B + m.a.v) * C + A[1];
                        g.setAttribute("fx", w), g.setAttribute("fy", x), y && !m.g._collapsable && (m.of.setAttribute("fx", w), m.of.setAttribute("fy", x));
                    }
                }
            }
            function v(P, m, b) {
                var g = m.style, y = m.d;
                y && (y._mdf || b) && y.dashStr && (g.pElem.setAttribute("stroke-dasharray", y.dashStr), g.pElem.setAttribute("stroke-dashoffset", y.dashoffset[0])), m.c && (m.c._mdf || b) && g.pElem.setAttribute("stroke", "rgb(" + bmFloor(m.c.v[0]) + "," + bmFloor(m.c.v[1]) + "," + bmFloor(m.c.v[2]) + ")"), (m.o._mdf || b) && g.pElem.setAttribute("stroke-opacity", m.o.v), (m.w._mdf || b) && (g.pElem.setAttribute("stroke-width", m.w.v), g.msElem && g.msElem.setAttribute("stroke-width", m.w.v));
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
            var t, e = this.shapes.length, i, r, s = this.stylesList.length, a, n = [], f = !1;
            for(r = 0; r < s; r += 1){
                for(a = this.stylesList[r], f = !1, n.length = 0, t = 0; t < e; t += 1)i = this.shapes[t], i.styles.indexOf(a) !== -1 && (n.push(i), f = i._isAnimated || f);
                n.length > 1 && f && this.setShapesAsAnimated(n);
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
            var e, i = t.length;
            for(e = 0; e < i; e += 1)t[e].setAsAnimated();
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var i, r = new SVGStyleData(t, e), s = r.pElem;
            if (t.ty === "st") i = new SVGStrokeStyleData(this, t, r);
            else if (t.ty === "fl") i = new SVGFillStyleData(this, t, r);
            else if (t.ty === "gf" || t.ty === "gs") {
                var a = t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                i = new a(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"));
            } else t.ty === "no" && (i = new SVGNoStyleData(this, t, r));
            return (t.ty === "st" || t.ty === "gs") && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), t.lj === 1 && s.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i;
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var i = TransformPropertyFactory.getTransformProperty(this, t, this), r = new SVGTransformData(i, i.o, e);
            return this.addToAnimatedContents(t, r), r;
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
            var r = 4;
            t.ty === "rc" ? r = 5 : t.ty === "el" ? r = 6 : t.ty === "sr" && (r = 7);
            var s = ShapePropertyFactory.getShapeProp(this, t, r, this), a = new SVGShapeData(e, i, s);
            return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a;
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
        }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, s, a, n) {
            var f = [].concat(a), o, d = t.length - 1, v, P, m = [], b = [], g, y, A;
            for(o = d; o >= 0; o -= 1){
                if (A = this.searchProcessedElement(t[o]), A ? e[o] = i[A - 1] : t[o]._render = n, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") A ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), m.push(e[o].style);
                else if (t[o].ty === "gr") {
                    if (!A) e[o] = this.createGroupElement(t[o]);
                    else for(P = e[o].it.length, v = 0; v < P; v += 1)e[o].prevViewData[v] = e[o].it[v];
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, f, n), t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr);
                } else t[o].ty === "tr" ? (A || (e[o] = this.createTransformElement(t[o], r)), g = e[o].transform, f.push(g)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (A || (e[o] = this.createShapeElement(t[o], f, s)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (A ? (y = e[o], y.closed = !1) : (y = ShapeModifiers.getModifier(t[o].ty), y.init(this, t[o]), e[o] = y, this.shapeModifiers.push(y)), b.push(y)) : t[o].ty === "rp" && (A ? (y = e[o], y.closed = !0) : (y = ShapeModifiers.getModifier(t[o].ty), e[o] = y, y.init(this, t, o, e), this.shapeModifiers.push(y), n = !1), b.push(y));
                this.addProcessedElement(t[o], o + 1);
            }
            for(d = m.length, o = 0; o < d; o += 1)m[o].closed = !0;
            for(d = b.length, o = 0; o < d; o += 1)b[o].closed = !0;
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
        function LetterProps(t, e, i, r, s, a) {
            this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = s, this.p = a, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!i,
                fc: !!r,
                m: !0,
                p: !0
            };
        }
        LetterProps.prototype.update = function(t, e, i, r, s, a) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var n = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, n = !0), this.m !== s && (this.m = s, this._mdf.m = !0, n = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, n = !0), n;
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
                var r, s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
                for(r = 0; r < s; r += 1)i !== this.keysIndex ? a = this.effectsSequence[r](a, a.t) : a = this.effectsSequence[r](this.currentData, a.t);
                e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }, TextProperty.prototype.getKeyframeValue = function() {
            for(var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);)i += 1;
            return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
        }, TextProperty.prototype.buildFinalText = function(t) {
            for(var e = [], i = 0, r = t.length, s, a, n = !1, f = !1, o = ""; i < r;)n = f, f = !1, s = t.charCodeAt(i), o = t.charAt(i), FontManager.isCombinedCharacter(s) ? n = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, i) ? o = t.substr(i, 14) : (a = t.charCodeAt(i + 1), a >= 56320 && a <= 57343 && (FontManager.isModifier(s, a) ? (o = t.substr(i, 2), n = !0) : FontManager.isFlagEmoji(t.substr(i, 4)) ? o = t.substr(i, 4) : o = t.substr(i, 2))) : s > 56319 ? (a = t.charCodeAt(i + 1), FontManager.isVariationSelector(s) && (n = !0)) : FontManager.isZeroWidthJoiner(s) && (n = !0, f = !0), n ? (e[e.length - 1] += o, n = !1) : e.push(o), i += o.length;
            return e;
        }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e = this.elem.globalData.fontManager, i = this.data, r = [], s, a, n, f = 0, o, d = i.m.g, v = 0, P = 0, m = 0, b = [], g = 0, y = 0, A, p, h = e.getFontByName(t.f), l, u = 0, E = getFontProperties(h);
            t.fWeight = E.weight, t.fStyle = E.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), a = t.finalText.length, t.finalLineHeight = t.lh;
            var M = t.tr / 1e3 * t.finalSize, D;
            if (t.sz) for(var k = !0, I = t.sz[0], R = t.sz[1], V, B; k;){
                B = this.buildFinalText(t.t), V = 0, g = 0, a = B.length, M = t.tr / 1e3 * t.finalSize;
                var G = -1;
                for(s = 0; s < a; s += 1)D = B[s].charCodeAt(0), n = !1, B[s] === " " ? G = s : (D === 13 || D === 3) && (g = 0, n = !0, V += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (l = e.getCharData(B[s], h.fStyle, h.fFamily), u = n ? 0 : l.w * t.finalSize / 100) : u = e.measureText(B[s], t.f, t.finalSize), g + u > I && B[s] !== " " ? (G === -1 ? a += 1 : s = G, V += t.finalLineHeight || t.finalSize * 1.2, B.splice(s, G === s ? 1 : 0, "\r"), G = -1, g = 0) : (g += u, g += M);
                V += h.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && R < V ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = B, a = t.finalText.length, k = !1);
            }
            g = -M, u = 0;
            var C = 0, w;
            for(s = 0; s < a; s += 1)if (n = !1, w = t.finalText[s], D = w.charCodeAt(0), D === 13 || D === 3 ? (C = 0, b.push(g), y = g > y ? g : y, g = -2 * M, o = "", n = !0, m += 1) : o = w, e.chars ? (l = e.getCharData(w, h.fStyle, e.getFontByName(t.f).fFamily), u = n ? 0 : l.w * t.finalSize / 100) : u = e.measureText(o, t.f, t.finalSize), w === " " ? C += u + M : (g += u + M + C, C = 0), r.push({
                l: u,
                an: u,
                add: v,
                n,
                anIndexes: [],
                val: o,
                line: m,
                animatorJustifyOffset: 0
            }), d == 2) {
                if (v += u, o === "" || o === " " || s === a - 1) {
                    for((o === "" || o === " ") && (v -= u); P <= s;)r[P].an = v, r[P].ind = f, r[P].extra = u, P += 1;
                    f += 1, v = 0;
                }
            } else if (d == 3) {
                if (v += u, o === "" || s === a - 1) {
                    for(o === "" && (v -= u); P <= s;)r[P].an = v, r[P].ind = f, r[P].extra = u, P += 1;
                    v = 0, f += 1;
                }
            } else r[f].ind = f, r[f].extra = 0, f += 1;
            if (t.l = r, y = g > y ? g : y, b.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch(t.boxWidth = y, t.j){
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
            var x = i.a, _, c;
            p = x.length;
            var S, F, T = [];
            for(A = 0; A < p; A += 1){
                for(_ = x[A], _.a.sc && (t.strokeColorAnim = !0), _.a.sw && (t.strokeWidthAnim = !0), (_.a.fc || _.a.fh || _.a.fs || _.a.fb) && (t.fillColorAnim = !0), F = 0, S = _.s.b, s = 0; s < a; s += 1)c = r[s], c.anIndexes[A] = F, (S == 1 && c.val !== "" || S == 2 && c.val !== "" && c.val !== " " || S == 3 && (c.n || c.val == " " || s == a - 1) || S == 4 && (c.n || s == a - 1)) && (_.s.rn === 1 && T.push(F), F += 1);
                i.a[A].s.totalChars = F;
                var N = -1, L;
                if (_.s.rn === 1) for(s = 0; s < a; s += 1)c = r[s], N != c.anIndexes[A] && (N = c.anIndexes[A], L = T.splice(Math.floor(Math.random() * T.length), 1)[0]), c.anIndexes[A] = L;
            }
            t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = h.ascent * t.finalSize / 100;
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
            function r(a, n) {
                this._currentTextLength = -1, this.k = !1, this.data = n, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = PropertyFactory.getProp(a, n.s || {
                    k: 0
                }, 0, 0, this), "e" in n ? this.e = PropertyFactory.getProp(a, n.e, 0, 0, this) : this.e = {
                    v: 100
                }, this.o = PropertyFactory.getProp(a, n.o || {
                    k: 0
                }, 0, 0, this), this.xe = PropertyFactory.getProp(a, n.xe || {
                    k: 0
                }, 0, 0, this), this.ne = PropertyFactory.getProp(a, n.ne || {
                    k: 0
                }, 0, 0, this), this.sm = PropertyFactory.getProp(a, n.sm || {
                    k: 100
                }, 0, 0, this), this.a = PropertyFactory.getProp(a, n.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
            }
            r.prototype = {
                getMult: function(a) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var n = 0, f = 0, o = 1, d = 1;
                    this.ne.v > 0 ? n = this.ne.v / 100 : f = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : d = 1 + this.xe.v / 100;
                    var v = BezierFactory.getBezierEasing(n, f, o, d).get, P = 0, m = this.finalS, b = this.finalE, g = this.data.sh;
                    if (g === 2) b === m ? P = a >= b ? 1 : 0 : P = t(0, e(.5 / (b - m) + (a - m) / (b - m), 1)), P = v(P);
                    else if (g === 3) b === m ? P = a >= b ? 0 : 1 : P = 1 - t(0, e(.5 / (b - m) + (a - m) / (b - m), 1)), P = v(P);
                    else if (g === 4) b === m ? P = 0 : (P = t(0, e(.5 / (b - m) + (a - m) / (b - m), 1)), P < .5 ? P *= 2 : P = 1 - 2 * (P - .5)), P = v(P);
                    else if (g === 5) {
                        if (b === m) P = 0;
                        else {
                            var y = b - m;
                            a = e(t(0, a + .5 - m), b - m);
                            var A = -y / 2 + a, p = y / 2;
                            P = Math.sqrt(1 - A * A / (p * p));
                        }
                        P = v(P);
                    } else g === 6 ? (b === m ? P = 0 : (a = e(t(0, a + .5 - m), b - m), P = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (b - m))) / 2), P = v(P)) : (a >= i(m) && (a - m < 0 ? P = t(0, e(e(b, 1) - (m - a), 1)) : P = t(0, e(b - a, 1))), P = v(P));
                    if (this.sm.v !== 100) {
                        var h = this.sm.v * .01;
                        h === 0 && (h = 1e-8);
                        var l = .5 - h * .5;
                        P < l ? P = 0 : (P = (P - l) / h, P > 1 && (P = 1));
                    }
                    return P * this.a.v;
                },
                getValue: function(a) {
                    this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var n = this.data.r === 2 ? 1 : 100 / this.data.totalChars, f = this.o.v / n, o = this.s.v / n + f, d = this.e.v / n + f;
                    if (o > d) {
                        var v = o;
                        o = d, d = v;
                    }
                    this.finalS = o, this.finalE = d;
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], r);
            function s(a, n, f) {
                return new r(a, n);
            }
            return {
                getTextSelectorProp: s
            };
        }();
        function TextAnimatorDataProperty(t, e, i) {
            var r = {
                propType: !1
            }, s = PropertyFactory.getProp, a = e.a;
            this.a = {
                r: a.r ? s(t, a.r, 0, degToRads, i) : r,
                rx: a.rx ? s(t, a.rx, 0, degToRads, i) : r,
                ry: a.ry ? s(t, a.ry, 0, degToRads, i) : r,
                sk: a.sk ? s(t, a.sk, 0, degToRads, i) : r,
                sa: a.sa ? s(t, a.sa, 0, degToRads, i) : r,
                s: a.s ? s(t, a.s, 1, .01, i) : r,
                a: a.a ? s(t, a.a, 1, 0, i) : r,
                o: a.o ? s(t, a.o, 0, .01, i) : r,
                p: a.p ? s(t, a.p, 1, 0, i) : r,
                sw: a.sw ? s(t, a.sw, 0, 0, i) : r,
                sc: a.sc ? s(t, a.sc, 1, 0, i) : r,
                fc: a.fc ? s(t, a.fc, 1, 0, i) : r,
                fh: a.fh ? s(t, a.fh, 0, 0, i) : r,
                fs: a.fs ? s(t, a.fs, 0, .01, i) : r,
                fb: a.fb ? s(t, a.fb, 0, .01, i) : r,
                t: a.t ? s(t, a.t, 0, 0, i) : r
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
                var i = this._moreOptions.alignment.v, r = this._animatorsData, s = this._textData, a = this.mHelper, n = this._renderType, f = this.renderedLetters.length, o, d, v, P, m = t.l, b, g, y, A, p, h, l, u, E, M, D, k, I, R, V;
                if (this._hasMaskedPath) {
                    if (V = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var B = V.v;
                        this._pathData.r.v && (B = B.reverse()), b = {
                            tLength: 0,
                            segments: []
                        }, P = B._length - 1;
                        var G;
                        for(k = 0, v = 0; v < P; v += 1)G = bez.buildBezierData(B.v[v], B.v[v + 1], [
                            B.o[v][0] - B.v[v][0],
                            B.o[v][1] - B.v[v][1]
                        ], [
                            B.i[v + 1][0] - B.v[v + 1][0],
                            B.i[v + 1][1] - B.v[v + 1][1]
                        ]), b.tLength += G.segmentLength, b.segments.push(G), k += G.segmentLength;
                        v = P, V.v.c && (G = bez.buildBezierData(B.v[v], B.v[0], [
                            B.o[v][0] - B.v[v][0],
                            B.o[v][1] - B.v[v][1]
                        ], [
                            B.i[0][0] - B.v[0][0],
                            B.i[0][1] - B.v[0][1]
                        ]), b.tLength += G.segmentLength, b.segments.push(G), k += G.segmentLength), this._pathData.pi = b;
                    }
                    if (b = this._pathData.pi, g = this._pathData.f.v, l = 0, h = 1, A = 0, p = !0, M = b.segments, g < 0 && V.v.c) for(b.tLength < Math.abs(g) && (g = -Math.abs(g) % b.tLength), l = M.length - 1, E = M[l].points, h = E.length - 1; g < 0;)g += E[h].partialLength, h -= 1, h < 0 && (l -= 1, E = M[l].points, h = E.length - 1);
                    E = M[l].points, u = E[h - 1], y = E[h], D = y.partialLength;
                }
                P = m.length, o = 0, d = 0;
                var C = t.finalSize * 1.2 * .714, w = !0, x, _, c, S, F;
                S = r.length;
                var T, N = -1, L, H, O, q = g, $ = l, X = h, Q = -1, Z, W, K, j, z, et, at, it, tt = "", rt = this.defaultPropsArray, st;
                if (t.j === 2 || t.j === 1) {
                    var Y = 0, nt = 0, ot = t.j === 2 ? -0.5 : -1, J = 0, ht = !0;
                    for(v = 0; v < P; v += 1)if (m[v].n) {
                        for(Y && (Y += nt); J < v;)m[J].animatorJustifyOffset = Y, J += 1;
                        Y = 0, ht = !0;
                    } else {
                        for(c = 0; c < S; c += 1)x = r[c].a, x.t.propType && (ht && t.j === 2 && (nt += x.t.v * ot), _ = r[c].s, T = _.getMult(m[v].anIndexes[c], s.a[c].s.totalChars), T.length ? Y += x.t.v * T[0] * ot : Y += x.t.v * T * ot);
                        ht = !1;
                    }
                    for(Y && (Y += nt); J < v;)m[J].animatorJustifyOffset = Y, J += 1;
                }
                for(v = 0; v < P; v += 1){
                    if (a.reset(), Z = 1, m[v].n) o = 0, d += t.yOffset, d += w ? 1 : 0, g = q, w = !1, this._hasMaskedPath && (l = $, h = X, E = M[l].points, u = E[h - 1], y = E[h], D = y.partialLength, A = 0), tt = "", it = "", et = "", st = "", rt = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Q !== m[v].line) {
                                switch(t.j){
                                    case 1:
                                        g += k - t.lineWidths[m[v].line];
                                        break;
                                    case 2:
                                        g += (k - t.lineWidths[m[v].line]) / 2;
                                        break;
                                }
                                Q = m[v].line;
                            }
                            N !== m[v].ind && (m[N] && (g += m[N].extra), g += m[v].an / 2, N = m[v].ind), g += i[0] * m[v].an * .005;
                            var U = 0;
                            for(c = 0; c < S; c += 1)x = r[c].a, x.p.propType && (_ = r[c].s, T = _.getMult(m[v].anIndexes[c], s.a[c].s.totalChars), T.length ? U += x.p.v[0] * T[0] : U += x.p.v[0] * T), x.a.propType && (_ = r[c].s, T = _.getMult(m[v].anIndexes[c], s.a[c].s.totalChars), T.length ? U += x.a.v[0] * T[0] : U += x.a.v[0] * T);
                            for(p = !0, this._pathData.a.v && (g = m[0].an * .5 + (k - this._pathData.f.v - m[0].an * .5 - m[m.length - 1].an * .5) * N / (P - 1), g += this._pathData.f.v); p;)A + D >= g + U || !E ? (I = (g + U - A) / y.partialLength, H = u.point[0] + (y.point[0] - u.point[0]) * I, O = u.point[1] + (y.point[1] - u.point[1]) * I, a.translate(-i[0] * m[v].an * .005, -(i[1] * C) * .01), p = !1) : E && (A += y.partialLength, h += 1, h >= E.length && (h = 0, l += 1, M[l] ? E = M[l].points : V.v.c ? (h = 0, l = 0, E = M[l].points) : (A -= y.partialLength, E = null)), E && (u = y, y = E[h], D = y.partialLength));
                            L = m[v].an / 2 - m[v].add, a.translate(-L, 0, 0);
                        } else L = m[v].an / 2 - m[v].add, a.translate(-L, 0, 0), a.translate(-i[0] * m[v].an * .005, -i[1] * C * .01, 0);
                        for(c = 0; c < S; c += 1)x = r[c].a, x.t.propType && (_ = r[c].s, T = _.getMult(m[v].anIndexes[c], s.a[c].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? T.length ? g += x.t.v * T[0] : g += x.t.v * T : T.length ? o += x.t.v * T[0] : o += x.t.v * T));
                        for(t.strokeWidthAnim && (K = t.sw || 0), t.strokeColorAnim && (t.sc ? W = [
                            t.sc[0],
                            t.sc[1],
                            t.sc[2]
                        ] : W = [
                            0,
                            0,
                            0
                        ]), t.fillColorAnim && t.fc && (j = [
                            t.fc[0],
                            t.fc[1],
                            t.fc[2]
                        ]), c = 0; c < S; c += 1)x = r[c].a, x.a.propType && (_ = r[c].s, T = _.getMult(m[v].anIndexes[c], s.a[c].s.totalChars), T.length ? a.translate(-x.a.v[0] * T[0], -x.a.v[1] * T[1], x.a.v[2] * T[2]) : a.translate(-x.a.v[0] * T, -x.a.v[1] * T, x.a.v[2] * T));
                        for(c = 0; c < S; c += 1)x = r[c].a, x.s.propType && (_ = r[c].s, T = _.getMult(m[v].anIndexes[c], s.a[c].s.totalChars), T.length ? a.scale(1 + (x.s.v[0] - 1) * T[0], 1 + (x.s.v[1] - 1) * T[1], 1) : a.scale(1 + (x.s.v[0] - 1) * T, 1 + (x.s.v[1] - 1) * T, 1));
                        for(c = 0; c < S; c += 1){
                            if (x = r[c].a, _ = r[c].s, T = _.getMult(m[v].anIndexes[c], s.a[c].s.totalChars), x.sk.propType && (T.length ? a.skewFromAxis(-x.sk.v * T[0], x.sa.v * T[1]) : a.skewFromAxis(-x.sk.v * T, x.sa.v * T)), x.r.propType && (T.length ? a.rotateZ(-x.r.v * T[2]) : a.rotateZ(-x.r.v * T)), x.ry.propType && (T.length ? a.rotateY(x.ry.v * T[1]) : a.rotateY(x.ry.v * T)), x.rx.propType && (T.length ? a.rotateX(x.rx.v * T[0]) : a.rotateX(x.rx.v * T)), x.o.propType && (T.length ? Z += (x.o.v * T[0] - Z) * T[0] : Z += (x.o.v * T - Z) * T), t.strokeWidthAnim && x.sw.propType && (T.length ? K += x.sw.v * T[0] : K += x.sw.v * T), t.strokeColorAnim && x.sc.propType) for(z = 0; z < 3; z += 1)T.length ? W[z] += (x.sc.v[z] - W[z]) * T[0] : W[z] += (x.sc.v[z] - W[z]) * T;
                            if (t.fillColorAnim && t.fc) {
                                if (x.fc.propType) for(z = 0; z < 3; z += 1)T.length ? j[z] += (x.fc.v[z] - j[z]) * T[0] : j[z] += (x.fc.v[z] - j[z]) * T;
                                x.fh.propType && (T.length ? j = addHueToRGB(j, x.fh.v * T[0]) : j = addHueToRGB(j, x.fh.v * T)), x.fs.propType && (T.length ? j = addSaturationToRGB(j, x.fs.v * T[0]) : j = addSaturationToRGB(j, x.fs.v * T)), x.fb.propType && (T.length ? j = addBrightnessToRGB(j, x.fb.v * T[0]) : j = addBrightnessToRGB(j, x.fb.v * T));
                            }
                        }
                        for(c = 0; c < S; c += 1)x = r[c].a, x.p.propType && (_ = r[c].s, T = _.getMult(m[v].anIndexes[c], s.a[c].s.totalChars), this._hasMaskedPath ? T.length ? a.translate(0, x.p.v[1] * T[0], -x.p.v[2] * T[1]) : a.translate(0, x.p.v[1] * T, -x.p.v[2] * T) : T.length ? a.translate(x.p.v[0] * T[0], x.p.v[1] * T[1], -x.p.v[2] * T[2]) : a.translate(x.p.v[0] * T, x.p.v[1] * T, -x.p.v[2] * T));
                        if (t.strokeWidthAnim && (et = K < 0 ? 0 : K), t.strokeColorAnim && (at = "rgb(" + Math.round(W[0] * 255) + "," + Math.round(W[1] * 255) + "," + Math.round(W[2] * 255) + ")"), t.fillColorAnim && t.fc && (it = "rgb(" + Math.round(j[0] * 255) + "," + Math.round(j[1] * 255) + "," + Math.round(j[2] * 255) + ")"), this._hasMaskedPath) {
                            if (a.translate(0, -t.ls), a.translate(0, i[1] * C * .01 + d, 0), this._pathData.p.v) {
                                R = (y.point[1] - u.point[1]) / (y.point[0] - u.point[0]);
                                var lt = Math.atan(R) * 180 / Math.PI;
                                y.point[0] < u.point[0] && (lt += 180), a.rotate(-lt * Math.PI / 180);
                            }
                            a.translate(H, O, 0), g -= i[0] * m[v].an * .005, m[v + 1] && N !== m[v + 1].ind && (g += m[v].an / 2, g += t.tr * .001 * t.finalSize);
                        } else {
                            switch(a.translate(o, d, 0), t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j){
                                case 1:
                                    a.translate(m[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[m[v].line]), 0, 0);
                                    break;
                                case 2:
                                    a.translate(m[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[m[v].line]) / 2, 0, 0);
                                    break;
                            }
                            a.translate(0, -t.ls), a.translate(L, 0, 0), a.translate(i[0] * m[v].an * .005, i[1] * C * .01, 0), o += m[v].l + t.tr * .001 * t.finalSize;
                        }
                        n === "html" ? tt = a.toCSS() : n === "svg" ? tt = a.to2dCSS() : rt = [
                            a.props[0],
                            a.props[1],
                            a.props[2],
                            a.props[3],
                            a.props[4],
                            a.props[5],
                            a.props[6],
                            a.props[7],
                            a.props[8],
                            a.props[9],
                            a.props[10],
                            a.props[11],
                            a.props[12],
                            a.props[13],
                            a.props[14],
                            a.props[15]
                        ], st = Z;
                    }
                    f <= v ? (F = new LetterProps(st, et, at, it, tt, rt), this.renderedLetters.push(F), f += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[v], this.lettersChangedFlag = F.update(st, et, at, it, tt, rt) || this.lettersChangedFlag);
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
            var i, r = e.length, s, a = "";
            for(i = 0; i < r; i += 1)e[i].ty === "sh" && (s = e[i].ks.k, a += buildShapeString(s, s.i.length, !0, t));
            return a;
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e);
        }, ITextElement.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t);
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t);
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, s) {
            switch(t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j){
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
                    break;
            }
            e.translate(r, s, 0);
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
            for(var e = 0, i = t.length, r = [], s = ""; e < i;)t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(s), s = "") : s += t[e], e += 1;
            return r.push(s), r;
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
                var s = i.fWeight, a = i.fStyle;
                this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s);
            }
            this.layerElement.setAttribute("aria-label", i.t);
            var n = i.l || [], f = !!this.globalData.fontManager.chars;
            e = n.length;
            var o, d = this.mHelper, v = "", P = this.data.singleShape, m = 0, b = 0, g = !0, y = i.tr * .001 * i.finalSize;
            if (P && !f && !i.sz) {
                var A = this.textContainer, p = "start";
                switch(i.j){
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
                A.setAttribute("text-anchor", p), A.setAttribute("letter-spacing", y);
                var h = this.buildTextContents(i.finalText);
                for(e = h.length, b = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)o = this.textSpans[t].span || createNS("tspan"), o.textContent = h[t], o.setAttribute("x", 0), o.setAttribute("y", b), o.style.display = "inherit", A.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t].span = o, b += i.finalLineHeight;
                this.layerElement.appendChild(A);
            } else {
                var l = this.textSpans.length, u;
                for(t = 0; t < e; t += 1){
                    if (this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }), !f || !P || t === 0) {
                        if (o = l > t ? this.textSpans[t].span : createNS(f ? "g" : "text"), l <= t) {
                            if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, f) {
                                var E = createNS("g");
                                o.appendChild(E), this.textSpans[t].childSpan = E;
                            }
                            this.textSpans[t].span = o, this.layerElement.appendChild(o);
                        }
                        o.style.display = "inherit";
                    }
                    if (d.reset(), P && (n[t].n && (m = -y, b += i.yOffset, b += g ? 1 : 0, g = !1), this.applyTextPropertiesToMatrix(i, d, n[t].line, m, b), m += n[t].l || 0, m += y), f) {
                        u = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily);
                        var M;
                        if (u.t === 1) M = new SVGCompElement(u.data, this.globalData, this);
                        else {
                            var D = emptyShapeData;
                            u.data && u.data.shapes && (D = this.buildShapeData(u.data, i.finalSize)), M = new SVGShapeElement(D, this.globalData, this);
                        }
                        if (this.textSpans[t].glyph) {
                            var k = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(k.layerElement), k.destroy();
                        }
                        this.textSpans[t].glyph = M, M._debug = !0, M.prepareFrame(0), M.renderFrame(), this.textSpans[t].childSpan.appendChild(M.layerElement), u.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")");
                    } else P && o.setAttribute("transform", "translate(" + d.props[12] + "," + d.props[13] + ")"), o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                }
                P && o && o.setAttribute("d", v);
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
                var s, a, n;
                for(t = 0; t < e; t += 1)r[t].n || (s = i[t], a = this.textSpans[t].span, n = this.textSpans[t].glyph, n && n.renderFrame(), s._mdf.m && a.setAttribute("transform", s.m), s._mdf.o && a.setAttribute("opacity", s.o), s._mdf.sw && a.setAttribute("stroke-width", s.sw), s._mdf.sc && a.setAttribute("stroke", s.sc), s._mdf.fc && a.setAttribute("fill", s.fc));
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
            var s = createElementID();
            i.setAttribute("id", s), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
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
                        var s = e[r], a = s.getMatte(this.layers[t].tt);
                        i.setMatte(a);
                    }
                }
            }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;){
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt) for(var e = 0, i = this.elements.length; e < i;){
                    if (this.elements[e] === t) {
                        var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, s = this.elements[r], a = s.getMatte(this.layers[e].tt);
                        t.setMatte(a);
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
                for(var r = 0, s; r < e;)this.elements[r] && this.elements[r] !== !0 && this.elements[r].getBaseElement() && (s = this.elements[r].getBaseElement()), r += 1;
                s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i);
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
                var r = createNS("title"), s = createElementID();
                r.setAttribute("id", s), r.textContent = e.title, this.svgElement.appendChild(r), i += s;
            }
            if (e && e.description) {
                var a = createNS("desc"), n = createElementID();
                a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), i += " " + n;
            }
            i && this.svgElement.setAttribute("aria-labelledby", i);
            var f = createNS("defs");
            this.svgElement.appendChild(f);
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
                defs: f,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
        }
        extendPrototype([
            SVGRendererBase
        ], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this);
        };
        var registeredEffects = {};
        function CVEffects(t) {
            var e, i = t.data.ef ? t.data.ef.length : 0;
            this.filters = [];
            var r;
            for(e = 0; e < i; e += 1){
                r = null;
                var s = t.data.ef[e].ty;
                if (registeredEffects[s]) {
                    var a = registeredEffects[s].effect;
                    r = new a(t.effectsManager.effectElements[e], t);
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
            var i = t.sh.v, r = t.transformers, s, a = i._length, n, f, o, d;
            if (!(a <= 1)) {
                for(s = 0; s < a - 1; s += 1)n = this.getTransformedPoint(r, i.v[s]), f = this.getTransformedPoint(r, i.o[s]), o = this.getTransformedPoint(r, i.i[s + 1]), d = this.getTransformedPoint(r, i.v[s + 1]), this.checkBounds(n, f, o, d, e);
                i.c && (n = this.getTransformedPoint(r, i.v[s]), f = this.getTransformedPoint(r, i.o[s]), o = this.getTransformedPoint(r, i.i[0]), d = this.getTransformedPoint(r, i.v[0]), this.checkBounds(n, f, o, d, e));
            }
        }, HShapeElement.prototype.checkBounds = function(t, e, i, r, s) {
            this.getBoundsOfCurve(t, e, i, r);
            var a = this.shapeBoundingBox;
            s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax);
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
            for(var s = [
                [
                    t[0],
                    r[0]
                ],
                [
                    t[1],
                    r[1]
                ]
            ], a, n, f, o, d, v, P, m = 0; m < 2; ++m)n = 6 * t[m] - 12 * e[m] + 6 * i[m], a = -3 * t[m] + 9 * e[m] - 9 * i[m] + 3 * r[m], f = 3 * e[m] - 3 * t[m], n |= 0, a |= 0, f |= 0, a === 0 && n === 0 || (a === 0 ? (o = -f / n, o > 0 && o < 1 && s[m].push(this.calculateF(o, t, e, i, r, m))) : (d = n * n - 4 * f * a, d >= 0 && (v = (-n + bmSqrt(d)) / (2 * a), v > 0 && v < 1 && s[m].push(this.calculateF(v, t, e, i, r, m)), P = (-n - bmSqrt(d)) / (2 * a), P > 0 && P < 1 && s[m].push(this.calculateF(P, t, e, i, r, m)))));
            this.shapeBoundingBox.left = bmMin.apply(null, s[0]), this.shapeBoundingBox.top = bmMin.apply(null, s[1]), this.shapeBoundingBox.right = bmMax.apply(null, s[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, s[1]);
        }, HShapeElement.prototype.calculateF = function(t, e, i, r, s, a) {
            return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * i[a] + 3 * (1 - t) * bmPow(t, 2) * r[a] + bmPow(t, 3) * s[a];
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
            var i, r = t.length;
            for(i = 0; i < r; i += 1)t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e);
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
            var i = 0;
            if (t.keyframes) {
                for(var r = 0; r < t.keyframes.length; r += 1){
                    var s = t.keyframes[r].s;
                    s > i && (i = s);
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
                    var r = this.shapeCont.style, s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    r.transform = s, r.webkitTransform = s;
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
                    var s = t.fWeight, a = t.fStyle;
                    e.fontStyle = a, e.fontWeight = s;
                }
            }
            var n, f, o = t.l;
            f = o.length;
            var d, v, P, m = this.mHelper, b, g = "", y = 0;
            for(n = 0; n < f; n += 1){
                if (this.globalData.fontManager.chars ? (this.textPaths[y] ? d = this.textPaths[y] : (d = createNS("path"), d.setAttribute("stroke-linecap", lineCapEnum[1]), d.setAttribute("stroke-linejoin", lineJoinEnum[2]), d.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[y] ? (v = this.textSpans[y], P = v.children[0]) : (v = createTag("div"), v.style.lineHeight = 0, P = createNS("svg"), P.appendChild(d), styleDiv(v)))) : this.isMasked ? d = this.textPaths[y] ? this.textPaths[y] : createNS("text") : this.textSpans[y] ? (v = this.textSpans[y], d = this.textPaths[y]) : (v = createTag("span"), styleDiv(v), d = createTag("span"), styleDiv(d), v.appendChild(d)), this.globalData.fontManager.chars) {
                    var A = this.globalData.fontManager.getCharData(t.finalText[n], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), p;
                    if (A ? p = A.data : p = null, m.reset(), p && p.shapes && p.shapes.length && (b = p.shapes[0].it, m.scale(t.finalSize / 100, t.finalSize / 100), g = this.createPathShape(m, b), d.setAttribute("d", g)), this.isMasked) this.innerElem.appendChild(d);
                    else {
                        if (this.innerElem.appendChild(v), p && p.shapes) {
                            document.body.appendChild(P);
                            var h = P.getBBox();
                            P.setAttribute("width", h.width + 2), P.setAttribute("height", h.height + 2), P.setAttribute("viewBox", h.x - 1 + " " + (h.y - 1) + " " + (h.width + 2) + " " + (h.height + 2));
                            var l = P.style, u = "translate(" + (h.x - 1) + "px," + (h.y - 1) + "px)";
                            l.transform = u, l.webkitTransform = u, o[n].yOffset = h.y - 1;
                        } else P.setAttribute("width", 1), P.setAttribute("height", 1);
                        v.appendChild(P);
                    }
                } else if (d.textContent = o[n].val, d.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(d);
                else {
                    this.innerElem.appendChild(v);
                    var E = d.style, M = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    E.transform = M, E.webkitTransform = M;
                }
                this.isMasked ? this.textSpans[y] = d : this.textSpans[y] = v, this.textSpans[y].style.display = "block", this.textPaths[y] = d, y += 1;
            }
            for(; y < this.textSpans.length;)this.textSpans[y].style.display = "none", y += 1;
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
                var i, r, s = 0, a = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
                r = n.length;
                var f, o, d;
                for(i = 0; i < r; i += 1)n[i].n ? s += 1 : (o = this.textSpans[i], d = this.textPaths[i], f = a[s], s += 1, f._mdf.m && (this.isMasked ? o.setAttribute("transform", f.m) : (o.style.webkitTransform = f.m, o.style.transform = f.m)), o.style.opacity = f.o, f.sw && f._mdf.sw && d.setAttribute("stroke-width", f.sw), f.sc && f._mdf.sc && d.setAttribute("stroke", f.sc), f.fc && f._mdf.fc && (d.setAttribute("fill", f.fc), d.style.color = f.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var v = this.innerElem.getBBox();
                    this.currentBBox.w !== v.width && (this.currentBBox.w = v.width, this.svgElement.setAttribute("width", v.width)), this.currentBBox.h !== v.height && (this.currentBBox.h = v.height, this.svgElement.setAttribute("height", v.height));
                    var P = 1;
                    if (this.currentBBox.w !== v.width + P * 2 || this.currentBBox.h !== v.height + P * 2 || this.currentBBox.x !== v.x - P || this.currentBBox.y !== v.y - P) {
                        this.currentBBox.w = v.width + P * 2, this.currentBBox.h = v.height + P * 2, this.currentBBox.x = v.x - P, this.currentBBox.y = v.y - P, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                        var m = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = m, t.webkitTransform = m;
                    }
                }
            }
        };
        function HCameraElement(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
            var r = PropertyFactory.getProp;
            if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                var s, a = t.ks.or.k.length;
                for(s = 0; s < a; s += 1)t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null;
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
            var t, e = this.comp.threeDElements.length, i, r, s;
            for(t = 0; t < e; t += 1)if (i = this.comp.threeDElements[t], i.type === "3d") {
                r = i.perspectiveElem.style, s = i.container.style;
                var a = this.pe.v + "px", n = "0px 0px 0px", f = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                r.perspective = a, r.webkitPerspective = a, s.transformOrigin = n, s.mozTransformOrigin = n, s.webkitTransformOrigin = n, r.transform = f, r.webkitTransform = f;
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
                    var s;
                    this.p ? s = [
                        this.p.v[0] - this.a.v[0],
                        this.p.v[1] - this.a.v[1],
                        this.p.v[2] - this.a.v[2]
                    ] : s = [
                        this.px.v - this.a.v[0],
                        this.py.v - this.a.v[1],
                        this.pz.v - this.a.v[2]
                    ];
                    var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)), n = [
                        s[0] / a,
                        s[1] / a,
                        s[2] / a
                    ], f = Math.sqrt(n[2] * n[2] + n[0] * n[0]), o = Math.atan2(n[1], f), d = Math.atan2(n[0], -n[2]);
                    this.mat.rotateY(d).rotateX(-o);
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var v = !this._prevMat.equals(this.mat);
                if ((v || this.pe._mdf) && this.comp.threeDElements) {
                    i = this.comp.threeDElements.length;
                    var P, m, b;
                    for(e = 0; e < i; e += 1)if (P = this.comp.threeDElements[e], P.type === "3d") {
                        if (v) {
                            var g = this.mat.toCSS();
                            b = P.container.style, b.transform = g, b.webkitTransform = g;
                        }
                        this.pe._mdf && (m = P.perspectiveElem.style, m.perspective = this.pe.v + "px", m.webkitPerspective = this.pe.v + "px");
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
                        for(var s = 0, a, n, f; s < e;)this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (n = this.elements[s], f = this.layers[s].ddd ? this.getThreeDContainerByPos(s) : n.getBaseElement(), a = f || a), s += 1;
                        a ? (!r.ddd || !this.supports3d) && this.layerElement.insertBefore(i, a) : (!r.ddd || !this.supports3d) && this.layerElement.appendChild(i);
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
            var i = createTag("div"), r, s;
            styleDiv(i);
            var a = createTag("div");
            if (styleDiv(a), e === "3d") {
                r = i.style, r.width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
                var n = "50% 50%";
                r.webkitTransformOrigin = n, r.mozTransformOrigin = n, r.transformOrigin = n, s = a.style;
                var f = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                s.transform = f, s.webkitTransform = f;
            }
            i.appendChild(a);
            var o = {
                container: a,
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
                    for(var s = this.threeDElements[i].startPos, a; s < e;)this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
                    a ? this.threeDElements[i].container.insertBefore(t, a) : this.threeDElements[i].container.appendChild(t);
                    break;
                }
                i += 1;
            }
        }, HybridRendererBase.prototype.configAnimation = function(t) {
            var e = createTag("div"), i = this.animationItem.wrapper, r = e.style;
            r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), r.overflow = "hidden";
            var s = createNS("svg");
            s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
            var a = createNS("defs");
            s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
        }, HybridRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
        }, HybridRendererBase.prototype.updateContainerSize = function() {
            var t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, i = t / e, r = this.globalData.compSize.w / this.globalData.compSize.h, s, a, n, f;
            r > i ? (s = t / this.globalData.compSize.w, a = t / this.globalData.compSize.w, n = 0, f = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (s = e / this.globalData.compSize.h, a = e / this.globalData.compSize.h, n = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2, f = 0);
            var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + a + ",0,0,0,0,1,0," + n + "," + f + ",0,1)", o.transform = o.webkitTransform;
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
            this.resizerElem.style.display = "none";
        }, HybridRendererBase.prototype.show = function() {
            this.resizerElem.style.display = "block";
        }, HybridRendererBase.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var t = this.globalData.compSize.w, e = this.globalData.compSize.h, i, r = this.threeDElements.length;
                for(i = 0; i < r; i += 1){
                    var s = this.threeDElements[i].perspectiveElem.style;
                    s.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", s.perspective = s.webkitPerspective;
                }
            }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
            var e, i = t.length, r = createTag("div");
            for(e = 0; e < i; e += 1)if (t[e].xt) {
                var s = this.createComp(t[e], r, this.globalData.comp, null);
                s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
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
        }, registerRenderer("html", HybridRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier);
        var CompExpressionInterface = function() {
            return function(t) {
                function e(i) {
                    for(var r = 0, s = t.layers.length; r < s;){
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
            var i = this, r = 256, s = 6, a = 52, n = "random", f = e.pow(r, s), o = e.pow(2, a), d = o * 2, v = r - 1;
            function m(l, u, E) {
                var M = [];
                u = u === !0 ? {
                    entropy: !0
                } : u || {};
                var D = A(y(u.entropy ? [
                    l,
                    h(t)
                ] : l === null ? p() : l, 3), M), k = new b(M), I = function() {
                    for(var R = k.g(s), V = f, B = 0; R < o;)R = (R + B) * r, V *= r, B = k.g(1);
                    for(; R >= d;)R /= 2, V /= 2, B >>>= 1;
                    return (R + B) / V;
                };
                return I.int32 = function() {
                    return k.g(4) | 0;
                }, I.quick = function() {
                    return k.g(4) / 4294967296;
                }, I.double = I, A(h(k.S), t), (u.pass || E || function(R, V, B, G) {
                    return G && (G.S && g(G, k), R.state = function() {
                        return g(k, {});
                    }), B ? (e[n] = R, V) : R;
                })(I, D, "global" in u ? u.global : this == e, u.state);
            }
            e["seed" + n] = m;
            function b(l) {
                var u, E = l.length, M = this, D = 0, k = M.i = M.j = 0, I = M.S = [];
                for(E || (l = [
                    E++
                ]); D < r;)I[D] = D++;
                for(D = 0; D < r; D++)I[D] = I[k = v & k + l[D % E] + (u = I[D])], I[k] = u;
                M.g = function(R) {
                    for(var V, B = 0, G = M.i, C = M.j, w = M.S; R--;)V = w[G = v & G + 1], B = B * r + w[v & (w[G] = w[C = v & C + V]) + (w[C] = V)];
                    return M.i = G, M.j = C, B;
                };
            }
            function g(l, u) {
                return u.i = l.i, u.j = l.j, u.S = l.S.slice(), u;
            }
            function y(l, u) {
                var E = [], M = _typeof$2(l), D;
                if (u && M == "object") for(D in l)try {
                    E.push(y(l[D], u - 1));
                } catch  {}
                return E.length ? E : M == "string" ? l : l + "\0";
            }
            function A(l, u) {
                for(var E = l + "", M, D = 0; D < E.length;)u[v & D] = v & (M ^= u[v & D] * 19) + E.charCodeAt(D++);
                return h(u);
            }
            function p() {
                try {
                    var l = new Uint8Array(r);
                    return (i.crypto || i.msCrypto).getRandomValues(l), h(l);
                } catch  {
                    var u = i.navigator, E = u && u.plugins;
                    return [
                        +new Date,
                        i,
                        E,
                        i.screen,
                        h(t)
                    ];
                }
            }
            function h(l) {
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
                    var i, r = t.length, s = [];
                    for(i = 0; i < r; i += 1)s[i] = -t[i];
                    return s;
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
                    for(var s = 0, a = t.length, n = e.length, f = []; s < a || s < n;)(typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? f[s] = t[s] + e[s] : f[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                    return f;
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
                    for(var s = 0, a = t.length, n = e.length, f = []; s < a || s < n;)(typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? f[s] = t[s] - e[s] : f[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                    return f;
                }
                return 0;
            }
            function mul(t, e) {
                var i = _typeof$1(t), r = _typeof$1(e), s;
                if (isNumerable(i, t) && isNumerable(r, e)) return t * e;
                var a, n;
                if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) {
                    for(n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)s[a] = t[a] * e;
                    return s;
                }
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) {
                    for(n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)s[a] = t * e[a];
                    return s;
                }
                return 0;
            }
            function div(t, e) {
                var i = _typeof$1(t), r = _typeof$1(e), s;
                if (isNumerable(i, t) && isNumerable(r, e)) return t / e;
                var a, n;
                if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) {
                    for(n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)s[a] = t[a] / e;
                    return s;
                }
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) {
                    for(n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)s[a] = t / e[a];
                    return s;
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
                var i, r = Math1.min(t.length, e.length), s = 0;
                for(i = 0; i < r; i += 1)s += Math1.pow(e[i] - t[i], 2);
                return Math1.sqrt(s);
            }
            function normalize(t) {
                return div(t, length(t));
            }
            function rgbToHsl(t) {
                var e = t[0], i = t[1], r = t[2], s = Math1.max(e, i, r), a = Math1.min(e, i, r), n, f, o = (s + a) / 2;
                if (s === a) n = 0, f = 0;
                else {
                    var d = s - a;
                    switch(f = o > .5 ? d / (2 - s - a) : d / (s + a), s){
                        case e:
                            n = (i - r) / d + (i < r ? 6 : 0);
                            break;
                        case i:
                            n = (r - e) / d + 2;
                            break;
                        case r:
                            n = (e - i) / d + 4;
                            break;
                    }
                    n /= 6;
                }
                return [
                    n,
                    f,
                    o,
                    t[3]
                ];
            }
            function hue2rgb(t, e, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + (e - t) * 6 * i : i < 0.5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
            }
            function hslToRgb(t) {
                var e = t[0], i = t[1], r = t[2], s, a, n;
                if (i === 0) s = r, n = r, a = r;
                else {
                    var f = r < .5 ? r * (1 + i) : r + i - r * i, o = 2 * r - f;
                    s = hue2rgb(o, f, e + 1 / 3), a = hue2rgb(o, f, e), n = hue2rgb(o, f, e - 1 / 3);
                }
                return [
                    s,
                    a,
                    n,
                    t[3]
                ];
            }
            function linear(t, e, i, r, s) {
                if ((r === void 0 || s === void 0) && (r = e, s = i, e = 0, i = 1), i < e) {
                    var a = i;
                    i = e, e = a;
                }
                if (t <= e) return r;
                if (t >= i) return s;
                var n = i === e ? 0 : (t - e) / (i - e);
                if (!r.length) return r + (s - r) * n;
                var f, o = r.length, d = createTypedArray("float32", o);
                for(f = 0; f < o; f += 1)d[f] = r[f] + (s[f] - r[f]) * n;
                return d;
            }
            function random(t, e) {
                if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                    var i, r = e.length;
                    t || (t = createTypedArray("float32", r));
                    var s = createTypedArray("float32", r), a = BMMath.random();
                    for(i = 0; i < r; i += 1)s[i] = t[i] + a * (e[i] - t[i]);
                    return s;
                }
                t === void 0 && (t = 0);
                var n = BMMath.random();
                return t + n * (e - t);
            }
            function createPath(t, e, i, r) {
                var s, a = t.length, n = shapePool.newElement();
                n.setPathData(!!r, a);
                var f = [
                    0,
                    0
                ], o, d;
                for(s = 0; s < a; s += 1)o = e && e[s] ? e[s] : f, d = i && i[s] ? i[s] : f, n.setTripleAt(t[s][0], t[s][1], d[0] + t[s][0], d[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
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
                    var r, s, a = this.pv.length ? this.pv.length : 1, n = createTypedArray("float32", a);
                    e = 5;
                    var f = Math1.floor(time * e);
                    for(r = 0, s = 0; r < f;){
                        for(s = 0; s < a; s += 1)n[s] += -i + i * 2 * BMMath.random();
                        r += 1;
                    }
                    var o = time * e, d = o - Math1.floor(o), v = createTypedArray("float32", a);
                    if (a > 1) {
                        for(s = 0; s < a; s += 1)v[s] = this.pv[s] + n[s] + (-i + i * 2 * BMMath.random()) * d;
                        return v;
                    }
                    return this.pv + n[0] + (-i + i * 2 * BMMath.random()) * d;
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
                    ], r = Math1.atan2(i[0], Math1.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads, s = -Math1.atan2(i[1], i[2]) / degToRads;
                    return [
                        s,
                        r,
                        0
                    ];
                }
                function easeOut(t, e, i, r, s) {
                    return applyEase(easeOutBez, t, e, i, r, s);
                }
                function easeIn(t, e, i, r, s) {
                    return applyEase(easeInBez, t, e, i, r, s);
                }
                function ease(t, e, i, r, s) {
                    return applyEase(easeInOutBez, t, e, i, r, s);
                }
                function applyEase(t, e, i, r, s, a) {
                    s === void 0 ? (s = i, a = r) : e = (e - i) / (r - i), e > 1 ? e = 1 : e < 0 && (e = 0);
                    var n = t(e);
                    if ($bm_isInstanceOfArray(s)) {
                        var f, o = s.length, d = createTypedArray("float32", o);
                        for(f = 0; f < o; f += 1)d[f] = (a[f] - s[f]) * n + s[f];
                        return d;
                    }
                    return (a - s) * n + s;
                }
                function nearestKey(t) {
                    var e, i = data.k.length, r, s;
                    if (!data.k.length || typeof data.k[0] == "number") r = 0, s = 0;
                    else if (r = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t) r = 1, s = data.k[0].t;
                    else {
                        for(e = 0; e < i - 1; e += 1)if (t === data.k[e].t) {
                            r = e + 1, s = data.k[e].t;
                            break;
                        } else if (t > data.k[e].t && t < data.k[e + 1].t) {
                            t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, s = data.k[e + 1].t) : (r = e + 1, s = data.k[e].t);
                            break;
                        }
                        r === -1 && (r = e + 1, s = data.k[e].t);
                    }
                    var a = {};
                    return a.index = r, a.time = s / elem.comp.globalData.frameRate, a;
                }
                function key(t) {
                    var e, i, r;
                    if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t);
                    t -= 1, e = {
                        time: data.k[t].t / elem.comp.globalData.frameRate,
                        value: []
                    };
                    var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                    for(r = s.length, i = 0; i < r; i += 1)e[i] = s[i], e.value[i] = s[i];
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
            function e(i) {
                var r = 0, s = [];
                function a() {
                    r += 1;
                }
                function n() {
                    r -= 1, r === 0 && o();
                }
                function f(d) {
                    s.indexOf(d) === -1 && s.push(d);
                }
                function o() {
                    var d, v = s.length;
                    for(d = 0; d < v; d += 1)s[d].release();
                    s.length = 0;
                }
                i.renderer.compInterface = CompExpressionInterface(i.renderer), i.renderer.globalData.projectInterface.registerComposition(i.renderer), i.renderer.globalData.pushExpression = a, i.renderer.globalData.popExpression = n, i.renderer.globalData.registerExpressionProperty = f;
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
                var r = createSizedArray(i.viewData.length), s, a = i.viewData.length;
                for(s = 0; s < a; s += 1)r[s] = new t(i.viewData[s], i.masksProperties[s]);
                var n = function(f) {
                    for(s = 0; s < a;){
                        if (i.masksProperties[s].nm === f) return r[s];
                        s += 1;
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
            function i(n, f, o) {
                Object.defineProperty(n, "velocity", {
                    get: function() {
                        return f.getVelocityAtTime(f.comp.currentFrame);
                    }
                }), n.numKeys = f.keyframes ? f.keyframes.length : 0, n.key = function(d) {
                    if (!n.numKeys) return 0;
                    var v = "";
                    "s" in f.keyframes[d - 1] ? v = f.keyframes[d - 1].s : "e" in f.keyframes[d - 2] ? v = f.keyframes[d - 2].e : v = f.keyframes[d - 2].s;
                    var P = o === "unidimensional" ? new Number(v) : Object.assign({}, v);
                    return P.time = f.keyframes[d - 1].t / f.elem.comp.globalData.frameRate, P.value = o === "unidimensional" ? v[0] : v, P;
                }, n.valueAtTime = f.getValueAtTime, n.speedAtTime = f.getSpeedAtTime, n.velocityAtTime = f.getVelocityAtTime, n.propertyGroup = f.propertyGroup;
            }
            function r(n) {
                (!n || !("pv" in n)) && (n = t);
                var f = 1 / n.mult, o = n.pv * f, d = new Number(o);
                return d.value = o, i(d, n, "unidimensional"), function() {
                    return n.k && n.getValue(), o = n.v * f, d.value !== o && (d = new Number(o), d.value = o, i(d, n, "unidimensional")), d;
                };
            }
            function s(n) {
                (!n || !("pv" in n)) && (n = e);
                var f = 1 / n.mult, o = n.data && n.data.l || n.pv.length, d = createTypedArray("float32", o), v = createTypedArray("float32", o);
                return d.value = v, i(d, n, "multidimensional"), function() {
                    n.k && n.getValue();
                    for(var P = 0; P < o; P += 1)v[P] = n.v[P] * f, d[P] = v[P];
                    return d;
                };
            }
            function a() {
                return t;
            }
            return function(n) {
                return n ? n.propType === "unidimensional" ? r(n) : s(n) : a;
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
                var i, r, s, a;
                return t.p ? a = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                    get: function() {
                        return t.p ? a() : [
                            i(),
                            r(),
                            s ? s() : 0
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
            function t(d) {
                var v = new Matrix;
                if (d !== void 0) {
                    var P = this._elem.finalTransform.mProp.getValueAtTime(d);
                    P.clone(v);
                } else {
                    var m = this._elem.finalTransform.mProp;
                    m.applyToMatrix(v);
                }
                return v;
            }
            function e(d, v) {
                var P = this.getMatrix(v);
                return P.props[12] = 0, P.props[13] = 0, P.props[14] = 0, this.applyPoint(P, d);
            }
            function i(d, v) {
                var P = this.getMatrix(v);
                return this.applyPoint(P, d);
            }
            function r(d, v) {
                var P = this.getMatrix(v);
                return P.props[12] = 0, P.props[13] = 0, P.props[14] = 0, this.invertPoint(P, d);
            }
            function s(d, v) {
                var P = this.getMatrix(v);
                return this.invertPoint(P, d);
            }
            function a(d, v) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var P, m = this._elem.hierarchy.length;
                    for(P = 0; P < m; P += 1)this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(d);
                }
                return d.applyToPointArray(v[0], v[1], v[2] || 0);
            }
            function n(d, v) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var P, m = this._elem.hierarchy.length;
                    for(P = 0; P < m; P += 1)this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(d);
                }
                return d.inversePoint(v);
            }
            function f(d) {
                var v = new Matrix;
                if (v.reset(), this._elem.finalTransform.mProp.applyToMatrix(v), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var P, m = this._elem.hierarchy.length;
                    for(P = 0; P < m; P += 1)this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(v);
                    return v.inversePoint(d);
                }
                return v.inversePoint(d);
            }
            function o() {
                return [
                    1,
                    1,
                    1,
                    1
                ];
            }
            return function(d) {
                var v;
                function P(y) {
                    b.mask = new MaskManagerInterface(y, d);
                }
                function m(y) {
                    b.effect = y;
                }
                function b(y) {
                    switch(y){
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
                b.getMatrix = t, b.invertPoint = n, b.applyPoint = a, b.toWorld = i, b.toWorldVec = e, b.fromWorld = s, b.fromWorldVec = r, b.toComp = i, b.fromComp = f, b.sampleImage = o, b.sourceRectAtTime = d.sourceRectAtTime.bind(d), b._elem = d, v = TransformExpressionInterface(d.finalTransform.mProp);
                var g = getDescriptor(v, "anchorPoint");
                return Object.defineProperties(b, {
                    hasParent: {
                        get: function() {
                            return d.hierarchy.length;
                        }
                    },
                    parent: {
                        get: function() {
                            return d.hierarchy[0].layerInterface;
                        }
                    },
                    rotation: getDescriptor(v, "rotation"),
                    scale: getDescriptor(v, "scale"),
                    position: getDescriptor(v, "position"),
                    opacity: getDescriptor(v, "opacity"),
                    anchorPoint: g,
                    anchor_point: g,
                    transform: {
                        get: function() {
                            return v;
                        }
                    },
                    active: {
                        get: function() {
                            return d.isInRange;
                        }
                    }
                }), b.startTime = d.data.st, b.index = d.data.ind, b.source = d.data.refId, b.height = d.data.ty === 0 ? d.data.h : 100, b.width = d.data.ty === 0 ? d.data.w : 100, b.inPoint = d.data.ip / d.comp.globalData.frameRate, b.outPoint = d.data.op / d.comp.globalData.frameRate, b._name = d.data.nm, b.registerMaskInterface = P, b.registerEffectsInterface = m, b;
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
                function r(s) {
                    return s = s === void 0 ? 1 : s, s <= 0 ? i : e(s - 1);
                }
                return r;
            };
        }(), EffectsExpressionInterface = function() {
            var t = {
                createEffectsInterface: e
            };
            function e(s, a) {
                if (s.effectsManager) {
                    var n = [], f = s.data.ef, o, d = s.effectsManager.effectElements.length;
                    for(o = 0; o < d; o += 1)n.push(i(f[o], s.effectsManager.effectElements[o], a, s));
                    var v = s.data.ef || [], P = function(m) {
                        for(o = 0, d = v.length; o < d;){
                            if (m === v[o].nm || m === v[o].mn || m === v[o].ix) return n[o];
                            o += 1;
                        }
                        return null;
                    };
                    return Object.defineProperty(P, "numProperties", {
                        get: function() {
                            return v.length;
                        }
                    }), P;
                }
                return null;
            }
            function i(s, a, n, f) {
                function o(b) {
                    for(var g = s.ef, y = 0, A = g.length; y < A;){
                        if (b === g[y].nm || b === g[y].mn || b === g[y].ix) return g[y].ty === 5 ? v[y] : v[y]();
                        y += 1;
                    }
                    throw new Error;
                }
                var d = propertyGroupFactory(o, n), v = [], P, m = s.ef.length;
                for(P = 0; P < m; P += 1)s.ef[P].ty === 5 ? v.push(i(s.ef[P], a.effectElements[P], a.effectElements[P].propertyGroup, f)) : v.push(r(a.effectElements[P], s.ef[P].ty, f, d));
                return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
                    get: function() {
                        return v[0]();
                    }
                }), Object.defineProperties(o, {
                    numProperties: {
                        get: function() {
                            return s.np;
                        }
                    },
                    _name: {
                        value: s.nm
                    },
                    propertyGroup: {
                        value: d
                    }
                }), o.enabled = s.en !== 0, o.active = o.enabled, o;
            }
            function r(s, a, n, f) {
                var o = ExpressionPropertyInterface(s.p);
                function d() {
                    return a === 10 ? n.comp.compInterface(s.p.v) : o();
                }
                return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", f)), d;
            }
            return t;
        }(), ShapePathInterface = function() {
            return function(t, e, i) {
                var r = e.sh;
                function s(n) {
                    return n === "Shape" || n === "shape" || n === "Path" || n === "path" || n === "ADBE Vector Shape" || n === 2 ? s.path : null;
                }
                var a = propertyGroupFactory(s, i);
                return r.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(s, {
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
                }), s;
            };
        }(), ShapeExpressionInterface = function() {
            function t(g, y, A) {
                var p = [], h, l = g ? g.length : 0;
                for(h = 0; h < l; h += 1)g[h].ty === "gr" ? p.push(i(g[h], y[h], A)) : g[h].ty === "fl" ? p.push(r(g[h], y[h], A)) : g[h].ty === "st" ? p.push(n(g[h], y[h], A)) : g[h].ty === "tm" ? p.push(f(g[h], y[h], A)) : g[h].ty === "tr" || (g[h].ty === "el" ? p.push(d(g[h], y[h], A)) : g[h].ty === "sr" ? p.push(v(g[h], y[h], A)) : g[h].ty === "sh" ? p.push(ShapePathInterface(g[h], y[h], A)) : g[h].ty === "rc" ? p.push(P(g[h], y[h], A)) : g[h].ty === "rd" ? p.push(m(g[h], y[h], A)) : g[h].ty === "rp" ? p.push(b(g[h], y[h], A)) : g[h].ty === "gf" ? p.push(s(g[h], y[h], A)) : p.push(a(g[h], y[h])));
                return p;
            }
            function e(g, y, A) {
                var p, h = function(u) {
                    for(var E = 0, M = p.length; E < M;){
                        if (p[E]._name === u || p[E].mn === u || p[E].propertyIndex === u || p[E].ix === u || p[E].ind === u) return p[E];
                        E += 1;
                    }
                    return typeof u == "number" ? p[u - 1] : null;
                };
                h.propertyGroup = propertyGroupFactory(h, A), p = t(g.it, y.it, h.propertyGroup), h.numProperties = p.length;
                var l = o(g.it[g.it.length - 1], y.it[y.it.length - 1], h.propertyGroup);
                return h.transform = l, h.propertyIndex = g.cix, h._name = g.nm, h;
            }
            function i(g, y, A) {
                var p = function(u) {
                    switch(u){
                        case "ADBE Vectors Group":
                        case "Contents":
                        case 2:
                            return p.content;
                        default:
                            return p.transform;
                    }
                };
                p.propertyGroup = propertyGroupFactory(p, A);
                var h = e(g, y, p.propertyGroup), l = o(g.it[g.it.length - 1], y.it[y.it.length - 1], p.propertyGroup);
                return p.content = h, p.transform = l, Object.defineProperty(p, "_name", {
                    get: function() {
                        return g.nm;
                    }
                }), p.numProperties = g.np, p.propertyIndex = g.ix, p.nm = g.nm, p.mn = g.mn, p;
            }
            function r(g, y, A) {
                function p(h) {
                    return h === "Color" || h === "color" ? p.color : h === "Opacity" || h === "opacity" ? p.opacity : null;
                }
                return Object.defineProperties(p, {
                    color: {
                        get: ExpressionPropertyInterface(y.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(y.o)
                    },
                    _name: {
                        value: g.nm
                    },
                    mn: {
                        value: g.mn
                    }
                }), y.c.setGroupProperty(PropertyInterface("Color", A)), y.o.setGroupProperty(PropertyInterface("Opacity", A)), p;
            }
            function s(g, y, A) {
                function p(h) {
                    return h === "Start Point" || h === "start point" ? p.startPoint : h === "End Point" || h === "end point" ? p.endPoint : h === "Opacity" || h === "opacity" ? p.opacity : null;
                }
                return Object.defineProperties(p, {
                    startPoint: {
                        get: ExpressionPropertyInterface(y.s)
                    },
                    endPoint: {
                        get: ExpressionPropertyInterface(y.e)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(y.o)
                    },
                    type: {
                        get: function() {
                            return "a";
                        }
                    },
                    _name: {
                        value: g.nm
                    },
                    mn: {
                        value: g.mn
                    }
                }), y.s.setGroupProperty(PropertyInterface("Start Point", A)), y.e.setGroupProperty(PropertyInterface("End Point", A)), y.o.setGroupProperty(PropertyInterface("Opacity", A)), p;
            }
            function a() {
                function g() {
                    return null;
                }
                return g;
            }
            function n(g, y, A) {
                var p = propertyGroupFactory(D, A), h = propertyGroupFactory(M, p);
                function l(k) {
                    Object.defineProperty(M, g.d[k].nm, {
                        get: ExpressionPropertyInterface(y.d.dataProps[k].p)
                    });
                }
                var u, E = g.d ? g.d.length : 0, M = {};
                for(u = 0; u < E; u += 1)l(u), y.d.dataProps[u].p.setGroupProperty(h);
                function D(k) {
                    return k === "Color" || k === "color" ? D.color : k === "Opacity" || k === "opacity" ? D.opacity : k === "Stroke Width" || k === "stroke width" ? D.strokeWidth : null;
                }
                return Object.defineProperties(D, {
                    color: {
                        get: ExpressionPropertyInterface(y.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(y.o)
                    },
                    strokeWidth: {
                        get: ExpressionPropertyInterface(y.w)
                    },
                    dash: {
                        get: function() {
                            return M;
                        }
                    },
                    _name: {
                        value: g.nm
                    },
                    mn: {
                        value: g.mn
                    }
                }), y.c.setGroupProperty(PropertyInterface("Color", p)), y.o.setGroupProperty(PropertyInterface("Opacity", p)), y.w.setGroupProperty(PropertyInterface("Stroke Width", p)), D;
            }
            function f(g, y, A) {
                function p(l) {
                    return l === g.e.ix || l === "End" || l === "end" ? p.end : l === g.s.ix ? p.start : l === g.o.ix ? p.offset : null;
                }
                var h = propertyGroupFactory(p, A);
                return p.propertyIndex = g.ix, y.s.setGroupProperty(PropertyInterface("Start", h)), y.e.setGroupProperty(PropertyInterface("End", h)), y.o.setGroupProperty(PropertyInterface("Offset", h)), p.propertyIndex = g.ix, p.propertyGroup = A, Object.defineProperties(p, {
                    start: {
                        get: ExpressionPropertyInterface(y.s)
                    },
                    end: {
                        get: ExpressionPropertyInterface(y.e)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(y.o)
                    },
                    _name: {
                        value: g.nm
                    }
                }), p.mn = g.mn, p;
            }
            function o(g, y, A) {
                function p(l) {
                    return g.a.ix === l || l === "Anchor Point" ? p.anchorPoint : g.o.ix === l || l === "Opacity" ? p.opacity : g.p.ix === l || l === "Position" ? p.position : g.r.ix === l || l === "Rotation" || l === "ADBE Vector Rotation" ? p.rotation : g.s.ix === l || l === "Scale" ? p.scale : g.sk && g.sk.ix === l || l === "Skew" ? p.skew : g.sa && g.sa.ix === l || l === "Skew Axis" ? p.skewAxis : null;
                }
                var h = propertyGroupFactory(p, A);
                return y.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", h)), y.transform.mProps.p.setGroupProperty(PropertyInterface("Position", h)), y.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", h)), y.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", h)), y.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", h)), y.transform.mProps.sk && (y.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", h)), y.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", h))), y.transform.op.setGroupProperty(PropertyInterface("Opacity", h)), Object.defineProperties(p, {
                    opacity: {
                        get: ExpressionPropertyInterface(y.transform.mProps.o)
                    },
                    position: {
                        get: ExpressionPropertyInterface(y.transform.mProps.p)
                    },
                    anchorPoint: {
                        get: ExpressionPropertyInterface(y.transform.mProps.a)
                    },
                    scale: {
                        get: ExpressionPropertyInterface(y.transform.mProps.s)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(y.transform.mProps.r)
                    },
                    skew: {
                        get: ExpressionPropertyInterface(y.transform.mProps.sk)
                    },
                    skewAxis: {
                        get: ExpressionPropertyInterface(y.transform.mProps.sa)
                    },
                    _name: {
                        value: g.nm
                    }
                }), p.ty = "tr", p.mn = g.mn, p.propertyGroup = A, p;
            }
            function d(g, y, A) {
                function p(u) {
                    return g.p.ix === u ? p.position : g.s.ix === u ? p.size : null;
                }
                var h = propertyGroupFactory(p, A);
                p.propertyIndex = g.ix;
                var l = y.sh.ty === "tm" ? y.sh.prop : y.sh;
                return l.s.setGroupProperty(PropertyInterface("Size", h)), l.p.setGroupProperty(PropertyInterface("Position", h)), Object.defineProperties(p, {
                    size: {
                        get: ExpressionPropertyInterface(l.s)
                    },
                    position: {
                        get: ExpressionPropertyInterface(l.p)
                    },
                    _name: {
                        value: g.nm
                    }
                }), p.mn = g.mn, p;
            }
            function v(g, y, A) {
                function p(u) {
                    return g.p.ix === u ? p.position : g.r.ix === u ? p.rotation : g.pt.ix === u ? p.points : g.or.ix === u || u === "ADBE Vector Star Outer Radius" ? p.outerRadius : g.os.ix === u ? p.outerRoundness : g.ir && (g.ir.ix === u || u === "ADBE Vector Star Inner Radius") ? p.innerRadius : g.is && g.is.ix === u ? p.innerRoundness : null;
                }
                var h = propertyGroupFactory(p, A), l = y.sh.ty === "tm" ? y.sh.prop : y.sh;
                return p.propertyIndex = g.ix, l.or.setGroupProperty(PropertyInterface("Outer Radius", h)), l.os.setGroupProperty(PropertyInterface("Outer Roundness", h)), l.pt.setGroupProperty(PropertyInterface("Points", h)), l.p.setGroupProperty(PropertyInterface("Position", h)), l.r.setGroupProperty(PropertyInterface("Rotation", h)), g.ir && (l.ir.setGroupProperty(PropertyInterface("Inner Radius", h)), l.is.setGroupProperty(PropertyInterface("Inner Roundness", h))), Object.defineProperties(p, {
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
                        value: g.nm
                    }
                }), p.mn = g.mn, p;
            }
            function P(g, y, A) {
                function p(u) {
                    return g.p.ix === u ? p.position : g.r.ix === u ? p.roundness : g.s.ix === u || u === "Size" || u === "ADBE Vector Rect Size" ? p.size : null;
                }
                var h = propertyGroupFactory(p, A), l = y.sh.ty === "tm" ? y.sh.prop : y.sh;
                return p.propertyIndex = g.ix, l.p.setGroupProperty(PropertyInterface("Position", h)), l.s.setGroupProperty(PropertyInterface("Size", h)), l.r.setGroupProperty(PropertyInterface("Rotation", h)), Object.defineProperties(p, {
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
                        value: g.nm
                    }
                }), p.mn = g.mn, p;
            }
            function m(g, y, A) {
                function p(u) {
                    return g.r.ix === u || u === "Round Corners 1" ? p.radius : null;
                }
                var h = propertyGroupFactory(p, A), l = y;
                return p.propertyIndex = g.ix, l.rd.setGroupProperty(PropertyInterface("Radius", h)), Object.defineProperties(p, {
                    radius: {
                        get: ExpressionPropertyInterface(l.rd)
                    },
                    _name: {
                        value: g.nm
                    }
                }), p.mn = g.mn, p;
            }
            function b(g, y, A) {
                function p(u) {
                    return g.c.ix === u || u === "Copies" ? p.copies : g.o.ix === u || u === "Offset" ? p.offset : null;
                }
                var h = propertyGroupFactory(p, A), l = y;
                return p.propertyIndex = g.ix, l.c.setGroupProperty(PropertyInterface("Copies", h)), l.o.setGroupProperty(PropertyInterface("Offset", h)), Object.defineProperties(p, {
                    copies: {
                        get: ExpressionPropertyInterface(l.c)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(l.o)
                    },
                    _name: {
                        value: g.nm
                    }
                }), p.mn = g.mn, p;
            }
            return function(g, y, A) {
                var p;
                function h(u) {
                    if (typeof u == "number") return u = u === void 0 ? 1 : u, u === 0 ? A : p[u - 1];
                    for(var E = 0, M = p.length; E < M;){
                        if (p[E]._name === u) return p[E];
                        E += 1;
                    }
                    return null;
                }
                function l() {
                    return A;
                }
                return h.propertyGroup = propertyGroupFactory(h, l), p = t(g, y, h.propertyGroup), h.numProperties = p.length, h._name = "Contents", h;
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
                var r = "", s = i.getFootageData();
                function a() {
                    return r = "", s = i.getFootageData(), n;
                }
                function n(f) {
                    if (s[f]) return r = f, s = s[f], _typeof(s) === "object" ? n : s;
                    var o = f.indexOf(r);
                    if (o !== -1) {
                        var d = parseInt(f.substr(o + r.length), 10);
                        return s = s[d], _typeof(s) === "object" ? n : s;
                    }
                    return "";
                }
                return a;
            }, e = function(i) {
                function r(s) {
                    return s === "Outline" ? r.outlineInterface() : null;
                }
                return r._name = "Outline", r.outlineInterface = t(i), r;
            };
            return function(i) {
                function r(s) {
                    return s === "Data" ? r.dataInterface : null;
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
            function t(n, f, o) {
                f.x && (o.k = !0, o.x = !0, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(n, f, o).bind(o)));
            }
            function e(n) {
                return n *= this.elem.globalData.frameRate, n -= this.offsetTime, n !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime), this._cachingAtTime.lastFrame = n), this._cachingAtTime.value;
            }
            function i(n) {
                var f = -0.01, o = this.getValueAtTime(n), d = this.getValueAtTime(n + f), v = 0;
                if (o.length) {
                    var P;
                    for(P = 0; P < o.length; P += 1)v += Math.pow(d[P] - o[P], 2);
                    v = Math.sqrt(v) * 100;
                } else v = 0;
                return v;
            }
            function r(n) {
                if (this.vel !== void 0) return this.vel;
                var f = -0.001, o = this.getValueAtTime(n), d = this.getValueAtTime(n + f), v;
                if (o.length) {
                    v = createTypedArray("float32", o.length);
                    var P;
                    for(P = 0; P < o.length; P += 1)v[P] = (d[P] - o[P]) / f;
                } else v = (d - o) / f;
                return v;
            }
            function s() {
                return this.pv;
            }
            function a(n) {
                this.propertyGroup = n;
            }
            return {
                searchExpressions: t,
                getSpeedAtTime: i,
                getVelocityAtTime: r,
                getValueAtTime: e,
                getStaticValueAtTime: s,
                setGroupProperty: a
            };
        }();
        function addPropertyDecorator() {
            function t(m, b, g) {
                if (!this.k || !this.keyframes) return this.pv;
                m = m ? m.toLowerCase() : "";
                var y = this.comp.renderedFrame, A = this.keyframes, p = A[A.length - 1].t;
                if (y <= p) return this.pv;
                var h, l;
                g ? (b ? h = Math.abs(p - this.elem.comp.globalData.frameRate * b) : h = Math.max(0, p - this.elem.data.ip), l = p - h) : ((!b || b > A.length - 1) && (b = A.length - 1), l = A[A.length - 1 - b].t, h = p - l);
                var u, E, M;
                if (m === "pingpong") {
                    var D = Math.floor((y - l) / h);
                    if (D % 2 !== 0) return this.getValueAtTime((h - (y - l) % h + l) / this.comp.globalData.frameRate, 0);
                } else if (m === "offset") {
                    var k = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), I = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), R = this.getValueAtTime(((y - l) % h + l) / this.comp.globalData.frameRate, 0), V = Math.floor((y - l) / h);
                    if (this.pv.length) {
                        for(M = new Array(k.length), E = M.length, u = 0; u < E; u += 1)M[u] = (I[u] - k[u]) * V + R[u];
                        return M;
                    }
                    return (I - k) * V + R;
                } else if (m === "continue") {
                    var B = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), G = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(M = new Array(B.length), E = M.length, u = 0; u < E; u += 1)M[u] = B[u] + (B[u] - G[u]) * ((y - p) / this.comp.globalData.frameRate) / 5e-4;
                        return M;
                    }
                    return B + (B - G) * ((y - p) / .001);
                }
                return this.getValueAtTime(((y - l) % h + l) / this.comp.globalData.frameRate, 0);
            }
            function e(m, b, g) {
                if (!this.k) return this.pv;
                m = m ? m.toLowerCase() : "";
                var y = this.comp.renderedFrame, A = this.keyframes, p = A[0].t;
                if (y >= p) return this.pv;
                var h, l;
                g ? (b ? h = Math.abs(this.elem.comp.globalData.frameRate * b) : h = Math.max(0, this.elem.data.op - p), l = p + h) : ((!b || b > A.length - 1) && (b = A.length - 1), l = A[b].t, h = l - p);
                var u, E, M;
                if (m === "pingpong") {
                    var D = Math.floor((p - y) / h);
                    if (D % 2 === 0) return this.getValueAtTime(((p - y) % h + p) / this.comp.globalData.frameRate, 0);
                } else if (m === "offset") {
                    var k = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), I = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), R = this.getValueAtTime((h - (p - y) % h + p) / this.comp.globalData.frameRate, 0), V = Math.floor((p - y) / h) + 1;
                    if (this.pv.length) {
                        for(M = new Array(k.length), E = M.length, u = 0; u < E; u += 1)M[u] = R[u] - (I[u] - k[u]) * V;
                        return M;
                    }
                    return R - (I - k) * V;
                } else if (m === "continue") {
                    var B = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), G = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(M = new Array(B.length), E = M.length, u = 0; u < E; u += 1)M[u] = B[u] + (B[u] - G[u]) * (p - y) / .001;
                        return M;
                    }
                    return B + (B - G) * (p - y) / .001;
                }
                return this.getValueAtTime((h - ((p - y) % h + p)) / this.comp.globalData.frameRate, 0);
            }
            function i(m, b) {
                if (!this.k) return this.pv;
                if (m = (m || .4) * .5, b = Math.floor(b || 5), b <= 1) return this.pv;
                var g = this.comp.renderedFrame / this.comp.globalData.frameRate, y = g - m, A = g + m, p = b > 1 ? (A - y) / (b - 1) : 1, h = 0, l = 0, u;
                this.pv.length ? u = createTypedArray("float32", this.pv.length) : u = 0;
                for(var E; h < b;){
                    if (E = this.getValueAtTime(y + h * p), this.pv.length) for(l = 0; l < this.pv.length; l += 1)u[l] += E[l];
                    else u += E;
                    h += 1;
                }
                if (this.pv.length) for(l = 0; l < this.pv.length; l += 1)u[l] /= b;
                else u /= b;
                return u;
            }
            function r(m) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var b = this._transformCachingAtTime.v;
                if (b.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var g = this.a.getValueAtTime(m);
                    b.translate(-g[0] * this.a.mult, -g[1] * this.a.mult, g[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                    var y = this.s.getValueAtTime(m);
                    b.scale(y[0] * this.s.mult, y[1] * this.s.mult, y[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var A = this.sk.getValueAtTime(m), p = this.sa.getValueAtTime(m);
                    b.skewFromAxis(-A * this.sk.mult, p * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                    var h = this.r.getValueAtTime(m);
                    b.rotate(-h * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                    var l = this.rz.getValueAtTime(m), u = this.ry.getValueAtTime(m), E = this.rx.getValueAtTime(m), M = this.or.getValueAtTime(m);
                    b.rotateZ(-l * this.rz.mult).rotateY(u * this.ry.mult).rotateX(E * this.rx.mult).rotateZ(-M[2] * this.or.mult).rotateY(M[1] * this.or.mult).rotateX(M[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                    var D = this.px.getValueAtTime(m), k = this.py.getValueAtTime(m);
                    if (this.data.p.z) {
                        var I = this.pz.getValueAtTime(m);
                        b.translate(D * this.px.mult, k * this.py.mult, -I * this.pz.mult);
                    } else b.translate(D * this.px.mult, k * this.py.mult, 0);
                } else {
                    var R = this.p.getValueAtTime(m);
                    b.translate(R[0] * this.p.mult, R[1] * this.p.mult, -R[2] * this.p.mult);
                }
                return b;
            }
            function s() {
                return this.v.clone(new Matrix);
            }
            var a = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(m, b, g) {
                var y = a(m, b, g);
                return y.dynamicProperties.length ? y.getValueAtTime = r.bind(y) : y.getValueAtTime = s.bind(y), y.setGroupProperty = expressionHelpers.setGroupProperty, y;
            };
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function(m, b, g, y, A) {
                var p = n(m, b, g, y, A);
                p.kf ? p.getValueAtTime = expressionHelpers.getValueAtTime.bind(p) : p.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p.loopOut = t, p.loopIn = e, p.smooth = i, p.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(p), p.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(p), p.numKeys = b.a === 1 ? b.k.length : 0, p.propertyIndex = b.ix;
                var h = 0;
                return g !== 0 && (h = createTypedArray("float32", b.a === 1 ? b.k[0].s.length : b.k.length)), p._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: h
                }, expressionHelpers.searchExpressions(m, b, p), p.k && A.addDynamicProperty(p), p;
            };
            function f(m) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), m *= this.elem.globalData.frameRate, m -= this.offsetTime, m !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < m ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = m, this.interpolateShape(m, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
            }
            var o = ShapePropertyFactory.getConstructorFunction(), d = ShapePropertyFactory.getKeyframedConstructorFunction();
            function v() {}
            v.prototype = {
                vertices: function(m, b) {
                    this.k && this.getValue();
                    var g = this.v;
                    b !== void 0 && (g = this.getValueAtTime(b, 0));
                    var y, A = g._length, p = g[m], h = g.v, l = createSizedArray(A);
                    for(y = 0; y < A; y += 1)m === "i" || m === "o" ? l[y] = [
                        p[y][0] - h[y][0],
                        p[y][1] - h[y][1]
                    ] : l[y] = [
                        p[y][0],
                        p[y][1]
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
                    var g = this.v;
                    b !== void 0 && (g = this.getValueAtTime(b, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(g));
                    for(var y = this._segmentsLength, A = y.lengths, p = y.totalLength * m, h = 0, l = A.length, u = 0, E; h < l;){
                        if (u + A[h].addedLength > p) {
                            var M = h, D = g.c && h === l - 1 ? 0 : h + 1, k = (p - u) / A[h].addedLength;
                            E = bez.getPointInSegment(g.v[M], g.v[D], g.o[M], g.i[D], k, A[h]);
                            break;
                        } else u += A[h].addedLength;
                        h += 1;
                    }
                    return E || (E = g.c ? [
                        g.v[0][0],
                        g.v[0][1]
                    ] : [
                        g.v[g._length - 1][0],
                        g.v[g._length - 1][1]
                    ]), E;
                },
                vectorOnPath: function(m, b, g) {
                    m == 1 ? m = this.v.c : m == 0 && (m = .999);
                    var y = this.pointOnPath(m, b), A = this.pointOnPath(m + .001, b), p = A[0] - y[0], h = A[1] - y[1], l = Math.sqrt(Math.pow(p, 2) + Math.pow(h, 2));
                    if (l === 0) return [
                        0,
                        0
                    ];
                    var u = g === "tangent" ? [
                        p / l,
                        h / l
                    ] : [
                        -h / l,
                        p / l
                    ];
                    return u;
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
            ], o), extendPrototype([
                v
            ], d), d.prototype.getValueAtTime = f, d.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var P = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(m, b, g, y, A) {
                var p = P(m, b, g, y, A);
                return p.propertyIndex = b.ix, p.lock = !1, g === 3 ? expressionHelpers.searchExpressions(m, b.pt, p) : g === 4 && expressionHelpers.searchExpressions(m, b.ks, p), p.k && m.addDynamicProperty(p), p;
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
                    var s = {};
                    return this.copyData(s, e), s.t = r.toString(), s.__complete = !1, s;
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
                var s, a;
                for(a = 0; a < i.length; a += 1)s = createNS("feMergeNode"), s.setAttribute("in", i[a]), r.appendChild(s), r.appendChild(s);
                return r;
            }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
        function SVGTintFilter(t, e, i, r, s) {
            this.filterManager = e;
            var a = createNS("feColorMatrix");
            a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", r + "_tint_1"), t.appendChild(a), a = createNS("feColorMatrix"), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", r + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
            var n = this.createMergeNode(r, [
                s,
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
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", r), t.appendChild(s), this.matrixFilter = s;
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
            var t = this.elem.layerElement.children || this.elem.layerElement.childNodes, e, i, r, s;
            for(this.filterManager.effectElements[1].p.v === 1 ? (s = this.elem.maskManager.masksProperties.length, r = 0) : (r = this.filterManager.effectElements[0].p.v - 1, s = r + 1), i = createNS("g"), i.setAttribute("fill", "none"), i.setAttribute("stroke-linecap", "round"), i.setAttribute("stroke-dashoffset", 1), r; r < s; r += 1)e = createNS("path"), i.appendChild(e), this.paths.push({
                p: e,
                m: r
            });
            if (this.filterManager.effectElements[10].p.v === 3) {
                var a = createNS("mask"), n = createElementID();
                a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(i), this.elem.globalData.defs.appendChild(a);
                var f = createNS("g");
                for(f.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); t[0];)f.appendChild(t[0]);
                this.elem.layerElement.appendChild(f), this.masker = a, i.setAttribute("stroke", "#fff");
            } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                if (this.filterManager.effectElements[10].p.v === 2) for(t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length;)this.elem.layerElement.removeChild(t[0]);
                this.elem.layerElement.appendChild(i), this.elem.layerElement.removeAttribute("mask"), i.setAttribute("stroke", "#fff");
            }
            this.initialized = !0, this.pathMasker = i;
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
            this.initialized || this.initialize();
            var e, i = this.paths.length, r, s;
            for(e = 0; e < i; e += 1)if (this.paths[e].m !== -1 && (r = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && s.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                var a;
                if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                    var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, f = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01, o = s.getTotalLength();
                    a = "0 0 0 " + o * n + " ";
                    var d = o * (f - n), v = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01, P = Math.floor(d / v), m;
                    for(m = 0; m < P; m += 1)a += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                    a += "0 " + o * 10 + " 0 0";
                } else a = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                s.setAttribute("stroke-dasharray", a);
            }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var b = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(b[0] * 255) + "," + bmFloor(b[1] * 255) + "," + bmFloor(b[2] * 255) + ")");
            }
        };
        function SVGTritoneFilter(t, e, i, r) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
            var a = createNS("feComponentTransfer");
            a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", r), this.matrixFilter = a;
            var n = createNS("feFuncR");
            n.setAttribute("type", "table"), a.appendChild(n), this.feFuncR = n;
            var f = createNS("feFuncG");
            f.setAttribute("type", "table"), a.appendChild(f), this.feFuncG = f;
            var o = createNS("feFuncB");
            o.setAttribute("type", "table"), a.appendChild(o), this.feFuncB = o, t.appendChild(a);
        }
        SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, r = this.filterManager.effectElements[2].p.v, s = r[0] + " " + i[0] + " " + e[0], a = r[1] + " " + i[1] + " " + e[1], n = r[2] + " " + i[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n);
            }
        };
        function SVGProLevelsFilter(t, e, i, r) {
            this.filterManager = e;
            var s = this.filterManager.effectElements, a = createNS("feComponentTransfer");
            (s[10].p.k || s[10].p.v !== 0 || s[11].p.k || s[11].p.v !== 1 || s[12].p.k || s[12].p.v !== 1 || s[13].p.k || s[13].p.v !== 0 || s[14].p.k || s[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (s[17].p.k || s[17].p.v !== 0 || s[18].p.k || s[18].p.v !== 1 || s[19].p.k || s[19].p.v !== 1 || s[20].p.k || s[20].p.v !== 0 || s[21].p.k || s[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (s[24].p.k || s[24].p.v !== 0 || s[25].p.k || s[25].p.v !== 1 || s[26].p.k || s[26].p.v !== 1 || s[27].p.k || s[27].p.v !== 0 || s[28].p.k || s[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (s[31].p.k || s[31].p.v !== 0 || s[32].p.k || s[32].p.v !== 1 || s[33].p.k || s[33].p.v !== 1 || s[34].p.k || s[34].p.v !== 0 || s[35].p.k || s[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (s[3].p.k || s[3].p.v !== 0 || s[4].p.k || s[4].p.v !== 1 || s[5].p.k || s[5].p.v !== 1 || s[6].p.k || s[6].p.v !== 0 || s[7].p.k || s[7].p.v !== 1) && (a = createNS("feComponentTransfer"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", r), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a));
        }
        SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
            var i = createNS(t);
            return i.setAttribute("type", "table"), e.appendChild(i), i;
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, s) {
            for(var a = 0, n = 256, f, o = Math.min(t, e), d = Math.max(t, e), v = Array.call(null, {
                length: n
            }), P, m = 0, b = s - r, g = e - t; a <= 256;)f = a / 256, f <= o ? P = g < 0 ? s : r : f >= d ? P = g < 0 ? r : s : P = r + b * Math.pow((f - t) / g, 1 / i), v[m] = P, m += 1, a += 256 / (n - 1);
            return v.join(" ");
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e, i = this.filterManager.effectElements;
                this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e));
            }
        };
        function SVGDropShadowEffect(t, e, i, r, s) {
            var a = e.container.globalData.renderConfig.filterSize, n = e.data.fs || a;
            t.setAttribute("x", n.x || a.x), t.setAttribute("y", n.y || a.y), t.setAttribute("width", n.width || a.width), t.setAttribute("height", n.height || a.height), this.filterManager = e;
            var f = createNS("feGaussianBlur");
            f.setAttribute("in", "SourceAlpha"), f.setAttribute("result", r + "_drop_shadow_1"), f.setAttribute("stdDeviation", "0"), this.feGaussianBlur = f, t.appendChild(f);
            var o = createNS("feOffset");
            o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", r + "_drop_shadow_1"), o.setAttribute("result", r + "_drop_shadow_2"), this.feOffset = o, t.appendChild(o);
            var d = createNS("feFlood");
            d.setAttribute("flood-color", "#00ff00"), d.setAttribute("flood-opacity", "1"), d.setAttribute("result", r + "_drop_shadow_3"), this.feFlood = d, t.appendChild(d);
            var v = createNS("feComposite");
            v.setAttribute("in", r + "_drop_shadow_3"), v.setAttribute("in2", r + "_drop_shadow_2"), v.setAttribute("operator", "in"), v.setAttribute("result", r + "_drop_shadow_4"), t.appendChild(v);
            var P = this.createMergeNode(r, [
                r + "_drop_shadow_4",
                s
            ]);
            t.appendChild(P);
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
                    var i = this.filterManager.effectElements[3].p.v, r = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = i * Math.cos(r), a = i * Math.sin(r);
                    this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a);
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
                for(var r = i.children, s = 0, a = r.length; s < a && r[s] !== t.layerElement;)s += 1;
                var n;
                s <= a - 2 && (n = r[s + 1]);
                var f = createNS("use");
                f.setAttribute("href", "#" + e), n ? i.insertBefore(f, n) : i.appendChild(f);
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
                var i = createElementID(), r = createNS("mask");
                r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var s = t.globalData.defs;
                s.appendChild(r);
                var a = createNS("symbol");
                a.setAttribute("id", i), this.replaceInParent(e, i), a.appendChild(e.layerElement), s.appendChild(a);
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
            var s = createNS("feGaussianBlur");
            s.setAttribute("result", r), t.appendChild(s), this.feGaussianBlur = s;
        }
        SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
                var e = .3, i = this.filterManager.effectElements[0].p.v * e, r = this.filterManager.effectElements[1].p.v, s = r == 3 ? 0 : i, a = r == 2 ? 0 : i;
                this.feGaussianBlur.setAttribute("stdDeviation", s + " " + a);
                var n = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", n);
            }
        };
        function TransformEffect() {}
        TransformEffect.prototype.init = function(t) {
            this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1;
        }, TransformEffect.prototype.renderFrame = function(t) {
            if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
                var e = this.effectsManager.effectElements, i = e[0].p.v, r = e[1].p.v, s = e[2].p.v === 1, a = e[3].p.v, n = s ? a : e[4].p.v, f = e[5].p.v, o = e[6].p.v, d = e[7].p.v;
                this.matrix.reset(), this.matrix.translate(-i[0], -i[1], i[2]), this.matrix.scale(n * .01, a * .01, 1), this.matrix.rotate(-d * degToRads), this.matrix.skewFromAxis(-f * degToRads, (o + 90) * degToRads), this.matrix.translate(r[0], r[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0);
            }
        };
        function SVGTransformEffect(t, e) {
            this.init(e);
        }
        return extendPrototype([
            TransformEffect
        ], SVGTransformEffect), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), lottie;
    });
}), yt = ut(); /*! Bundled license information:

lottie-web/build/player/lottie_html.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)
*/ 

},{"./chunk-HDDX7F4A.mjs":"2Aqr0","./chunk-ZWH2ESXT.mjs":"jX5B9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6A6Ew"], null, "parcelRequire94c2")

//# sourceMappingURL=lottie_html-X3TYKVQI-L6774NQS.d05fc75c.js.map
