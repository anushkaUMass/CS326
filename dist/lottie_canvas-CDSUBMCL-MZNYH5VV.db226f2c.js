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
})({"7PWpd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c77e3ab0db226f2c";
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

},{}],"l9YoP":[function(require,module,exports) {
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
            var r, s, a, n, p, o, d, v;
            switch(n = Math.floor(t * 6), p = t * 6 - n, o = i * (1 - e), d = i * (1 - p * e), v = i * (1 - (1 - p) * e), n % 6){
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
            var r = Math.max(t, e, i), s = Math.min(t, e, i), a = r - s, n, p = r === 0 ? 0 : a / r, o = r / 255;
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
                p,
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
        (function() {
            var t = [], e, i;
            for(e = 0; e < 256; e += 1)i = e.toString(16), t[e] = i.length === 1 ? "0" + i : i;
            return function(r, s, a) {
                return r < 0 && (r = 0), s < 0 && (s = 0), a < 0 && (a = 0), "#" + t[r] + t[s] + t[a];
            };
        })();
        var setSubframeEnabled = function(t) {
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
                postMessage: function(c) {
                    i({
                        data: c
                    });
                }
            }, a = {
                postMessage: function(c) {
                    s.onmessage({
                        data: c
                    });
                }
            };
            function n(c) {
                if (window.Worker && window.Blob && getWebWorker()) {
                    var P = new Blob([
                        "var _workerSelf = self; self.onmessage = ",
                        c.toString()
                    ], {
                        type: "text/javascript"
                    }), g = URL.createObjectURL(P);
                    return new Worker(g);
                }
                return i = c, s;
            }
            function p() {
                r || (r = n(function(c) {
                    function P() {
                        function y(F, w) {
                            var x, E, u = F.length, C, M, k, z;
                            for(E = 0; E < u; E += 1)if (x = F[E], "ks" in x && !x.completed) {
                                if (x.completed = !0, x.hasMask) {
                                    var O = x.masksProperties;
                                    for(M = O.length, C = 0; C < M; C += 1)if (O[C].pt.k.i) m(O[C].pt.k);
                                    else for(z = O[C].pt.k.length, k = 0; k < z; k += 1)O[C].pt.k[k].s && m(O[C].pt.k[k].s[0]), O[C].pt.k[k].e && m(O[C].pt.k[k].e[0]);
                                }
                                x.ty === 0 ? (x.layers = h(x.refId, w), y(x.layers, w)) : x.ty === 4 ? l(x.shapes) : x.ty === 5 && V(x);
                            }
                        }
                        function _(F, w) {
                            if (F) {
                                var x = 0, E = F.length;
                                for(x = 0; x < E; x += 1)F[x].t === 1 && (F[x].data.layers = h(F[x].data.refId, w), y(F[x].data.layers, w));
                            }
                        }
                        function f(F, w) {
                            for(var x = 0, E = w.length; x < E;){
                                if (w[x].id === F) return w[x];
                                x += 1;
                            }
                            return null;
                        }
                        function h(F, w) {
                            var x = f(F, w);
                            return x ? x.layers.__used ? JSON.parse(JSON.stringify(x.layers)) : (x.layers.__used = !0, x.layers) : null;
                        }
                        function l(F) {
                            var w, x = F.length, E, u;
                            for(w = x - 1; w >= 0; w -= 1)if (F[w].ty === "sh") {
                                if (F[w].ks.k.i) m(F[w].ks.k);
                                else for(u = F[w].ks.k.length, E = 0; E < u; E += 1)F[w].ks.k[E].s && m(F[w].ks.k[E].s[0]), F[w].ks.k[E].e && m(F[w].ks.k[E].e[0]);
                            } else F[w].ty === "gr" && l(F[w].it);
                        }
                        function m(F) {
                            var w, x = F.i.length;
                            for(w = 0; w < x; w += 1)F.i[w][0] += F.v[w][0], F.i[w][1] += F.v[w][1], F.o[w][0] += F.v[w][0], F.o[w][1] += F.v[w][1];
                        }
                        function S(F, w) {
                            var x = w ? w.split(".") : [
                                100,
                                100,
                                100
                            ];
                            return F[0] > x[0] ? !0 : x[0] > F[0] ? !1 : F[1] > x[1] ? !0 : x[1] > F[1] ? !1 : F[2] > x[2] ? !0 : x[2] > F[2] ? !1 : null;
                        }
                        var T = function() {
                            var F = [
                                4,
                                4,
                                14
                            ];
                            function w(E) {
                                var u = E.t.d;
                                E.t.d = {
                                    k: [
                                        {
                                            s: u,
                                            t: 0
                                        }
                                    ]
                                };
                            }
                            function x(E) {
                                var u, C = E.length;
                                for(u = 0; u < C; u += 1)E[u].ty === 5 && w(E[u]);
                            }
                            return function(E) {
                                if (S(F, E.v) && (x(E.layers), E.assets)) {
                                    var u, C = E.assets.length;
                                    for(u = 0; u < C; u += 1)E.assets[u].layers && x(E.assets[u].layers);
                                }
                            };
                        }(), A = function() {
                            var F = [
                                4,
                                7,
                                99
                            ];
                            return function(w) {
                                if (w.chars && !S(F, w.v)) {
                                    var x, E = w.chars.length;
                                    for(x = 0; x < E; x += 1){
                                        var u = w.chars[x];
                                        u.data && u.data.shapes && (l(u.data.shapes), u.data.ip = 0, u.data.op = 99999, u.data.st = 0, u.data.sr = 1, u.data.ks = {
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
                                        }, w.chars[x].t || (u.data.shapes.push({
                                            ty: "no"
                                        }), u.data.shapes[0].it.push({
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
                        }(), D = function() {
                            var F = [
                                5,
                                7,
                                15
                            ];
                            function w(E) {
                                var u = E.t.p;
                                typeof u.a == "number" && (u.a = {
                                    a: 0,
                                    k: u.a
                                }), typeof u.p == "number" && (u.p = {
                                    a: 0,
                                    k: u.p
                                }), typeof u.r == "number" && (u.r = {
                                    a: 0,
                                    k: u.r
                                });
                            }
                            function x(E) {
                                var u, C = E.length;
                                for(u = 0; u < C; u += 1)E[u].ty === 5 && w(E[u]);
                            }
                            return function(E) {
                                if (S(F, E.v) && (x(E.layers), E.assets)) {
                                    var u, C = E.assets.length;
                                    for(u = 0; u < C; u += 1)E.assets[u].layers && x(E.assets[u].layers);
                                }
                            };
                        }(), I = function() {
                            var F = [
                                4,
                                1,
                                9
                            ];
                            function w(E) {
                                var u, C = E.length, M, k;
                                for(u = 0; u < C; u += 1)if (E[u].ty === "gr") w(E[u].it);
                                else if (E[u].ty === "fl" || E[u].ty === "st") {
                                    if (E[u].c.k && E[u].c.k[0].i) for(k = E[u].c.k.length, M = 0; M < k; M += 1)E[u].c.k[M].s && (E[u].c.k[M].s[0] /= 255, E[u].c.k[M].s[1] /= 255, E[u].c.k[M].s[2] /= 255, E[u].c.k[M].s[3] /= 255), E[u].c.k[M].e && (E[u].c.k[M].e[0] /= 255, E[u].c.k[M].e[1] /= 255, E[u].c.k[M].e[2] /= 255, E[u].c.k[M].e[3] /= 255);
                                    else E[u].c.k[0] /= 255, E[u].c.k[1] /= 255, E[u].c.k[2] /= 255, E[u].c.k[3] /= 255;
                                }
                            }
                            function x(E) {
                                var u, C = E.length;
                                for(u = 0; u < C; u += 1)E[u].ty === 4 && w(E[u].shapes);
                            }
                            return function(E) {
                                if (S(F, E.v) && (x(E.layers), E.assets)) {
                                    var u, C = E.assets.length;
                                    for(u = 0; u < C; u += 1)E.assets[u].layers && x(E.assets[u].layers);
                                }
                            };
                        }(), R = function() {
                            var F = [
                                4,
                                4,
                                18
                            ];
                            function w(E) {
                                var u, C = E.length, M, k;
                                for(u = C - 1; u >= 0; u -= 1)if (E[u].ty === "sh") {
                                    if (E[u].ks.k.i) E[u].ks.k.c = E[u].closed;
                                    else for(k = E[u].ks.k.length, M = 0; M < k; M += 1)E[u].ks.k[M].s && (E[u].ks.k[M].s[0].c = E[u].closed), E[u].ks.k[M].e && (E[u].ks.k[M].e[0].c = E[u].closed);
                                } else E[u].ty === "gr" && w(E[u].it);
                            }
                            function x(E) {
                                var u, C, M = E.length, k, z, O, j;
                                for(C = 0; C < M; C += 1){
                                    if (u = E[C], u.hasMask) {
                                        var N = u.masksProperties;
                                        for(z = N.length, k = 0; k < z; k += 1)if (N[k].pt.k.i) N[k].pt.k.c = N[k].cl;
                                        else for(j = N[k].pt.k.length, O = 0; O < j; O += 1)N[k].pt.k[O].s && (N[k].pt.k[O].s[0].c = N[k].cl), N[k].pt.k[O].e && (N[k].pt.k[O].e[0].c = N[k].cl);
                                    }
                                    u.ty === 4 && w(u.shapes);
                                }
                            }
                            return function(E) {
                                if (S(F, E.v) && (x(E.layers), E.assets)) {
                                    var u, C = E.assets.length;
                                    for(u = 0; u < C; u += 1)E.assets[u].layers && x(E.assets[u].layers);
                                }
                            };
                        }();
                        function L(F) {
                            F.__complete || (I(F), T(F), A(F), D(F), R(F), y(F.layers, F.assets), _(F.chars, F.assets), F.__complete = !0);
                        }
                        function V(F) {
                            F.t.a.length === 0 && F.t.p;
                        }
                        var B = {};
                        return B.completeData = L, B.checkColors = I, B.checkChars = A, B.checkPathProperties = D, B.checkShapes = R, B.completeLayers = y, B;
                    }
                    if (a.dataManager || (a.dataManager = P()), a.assetLoader || (a.assetLoader = function() {
                        function y(f) {
                            var h = f.getResponseHeader("content-type");
                            return h && f.responseType === "json" && h.indexOf("json") !== -1 || f.response && _typeof$5(f.response) === "object" ? f.response : f.response && typeof f.response == "string" ? JSON.parse(f.response) : f.responseText ? JSON.parse(f.responseText) : null;
                        }
                        function _(f, h, l, m) {
                            var S, T = new XMLHttpRequest;
                            try {
                                T.responseType = "json";
                            } catch  {}
                            T.onreadystatechange = function() {
                                if (T.readyState === 4) {
                                    if (T.status === 200) S = y(T), l(S);
                                    else try {
                                        S = y(T), l(S);
                                    } catch (A) {
                                        m && m(A);
                                    }
                                }
                            };
                            try {
                                T.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), f, !0);
                            } catch  {
                                T.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), h + "/" + f, !0);
                            }
                            T.send();
                        }
                        return {
                            load: _
                        };
                    }()), c.data.type === "loadAnimation") a.assetLoader.load(c.data.path, c.data.fullPath, function(y) {
                        a.dataManager.completeData(y), a.postMessage({
                            id: c.data.id,
                            payload: y,
                            status: "success"
                        });
                    }, function() {
                        a.postMessage({
                            id: c.data.id,
                            status: "error"
                        });
                    });
                    else if (c.data.type === "complete") {
                        var g = c.data.animation;
                        a.dataManager.completeData(g), a.postMessage({
                            id: c.data.id,
                            payload: g,
                            status: "success"
                        });
                    } else c.data.type === "loadData" && a.assetLoader.load(c.data.path, c.data.fullPath, function(y) {
                        a.postMessage({
                            id: c.data.id,
                            payload: y,
                            status: "success"
                        });
                    }, function() {
                        a.postMessage({
                            id: c.data.id,
                            status: "error"
                        });
                    });
                }), r.onmessage = function(c) {
                    var P = c.data, g = P.id, y = e[g];
                    e[g] = null, P.status === "success" ? y.onComplete(P.payload) : y.onError && y.onError();
                });
            }
            function o(c, P) {
                t += 1;
                var g = "processId_" + t;
                return e[g] = {
                    onComplete: c,
                    onError: P
                }, g;
            }
            function d(c, P, g) {
                p();
                var y = o(P, g);
                r.postMessage({
                    type: "loadAnimation",
                    path: c,
                    fullPath: window.location.origin + window.location.pathname,
                    id: y
                });
            }
            function v(c, P, g) {
                p();
                var y = o(P, g);
                r.postMessage({
                    type: "loadData",
                    path: c,
                    fullPath: window.location.origin + window.location.pathname,
                    id: y
                });
            }
            function b(c, P, g) {
                p();
                var y = o(P, g);
                r.postMessage({
                    type: "complete",
                    animation: c,
                    id: y
                });
            }
            return {
                loadAnimation: d,
                loadData: v,
                completeAnimation: b
            };
        }(), ImagePreloader = function() {
            var t = function() {
                var f = createTag("canvas");
                f.width = 1, f.height = 1;
                var h = f.getContext("2d");
                return h.fillStyle = "rgba(0,0,0,0)", h.fillRect(0, 0, 1, 1), f;
            }();
            function e() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function i() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function r(f, h, l) {
                var m = "";
                if (f.e) m = f.p;
                else if (h) {
                    var S = f.p;
                    S.indexOf("images/") !== -1 && (S = S.split("/")[1]), m = h + S;
                } else m = l, m += f.u ? f.u : "", m += f.p;
                return m;
            }
            function s(f) {
                var h = 0, l = setInterval((function() {
                    var m = f.getBBox();
                    (m.width || h > 500) && (this._imageLoaded(), clearInterval(l)), h += 1;
                }).bind(this), 50);
            }
            function a(f) {
                var h = r(f, this.assetsPath, this.path), l = createNS("image");
                isSafari ? this.testImageLoaded(l) : l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", (function() {
                    m.img = t, this._imageLoaded();
                }).bind(this), !1), l.setAttributeNS("http://www.w3.org/1999/xlink", "href", h), this._elementHelper.append ? this._elementHelper.append(l) : this._elementHelper.appendChild(l);
                var m = {
                    img: l,
                    assetData: f
                };
                return m;
            }
            function n(f) {
                var h = r(f, this.assetsPath, this.path), l = createTag("img");
                l.crossOrigin = "anonymous", l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", (function() {
                    m.img = t, this._imageLoaded();
                }).bind(this), !1), l.src = h;
                var m = {
                    img: l,
                    assetData: f
                };
                return m;
            }
            function p(f) {
                var h = {
                    assetData: f
                }, l = r(f, this.assetsPath, this.path);
                return dataManager.loadData(l, (function(m) {
                    h.img = m, this._footageLoaded();
                }).bind(this), (function() {
                    h.img = {}, this._footageLoaded();
                }).bind(this)), h;
            }
            function o(f, h) {
                this.imagesLoadedCb = h;
                var l, m = f.length;
                for(l = 0; l < m; l += 1)f[l].layers || (!f[l].t || f[l].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(f[l]))) : f[l].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(f[l]))));
            }
            function d(f) {
                this.path = f || "";
            }
            function v(f) {
                this.assetsPath = f || "";
            }
            function b(f) {
                for(var h = 0, l = this.images.length; h < l;){
                    if (this.images[h].assetData === f) return this.images[h].img;
                    h += 1;
                }
                return null;
            }
            function c() {
                this.imagesLoadedCb = null, this.images.length = 0;
            }
            function P() {
                return this.totalImages === this.loadedAssets;
            }
            function g() {
                return this.totalFootages === this.loadedFootagesCount;
            }
            function y(f, h) {
                f === "svg" ? (this._elementHelper = h, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
            }
            function _() {
                this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = p.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
            }
            return _.prototype = {
                loadAssets: o,
                setAssetsPath: v,
                setPath: d,
                loadedImages: P,
                loadedFootages: g,
                destroy: c,
                getAsset: b,
                createImgData: n,
                createImageData: a,
                imageLoaded: e,
                footageLoaded: i,
                setCacheType: y
            }, _;
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
            function p(x) {
                for(var E = 0, u = x.target; E < r;)e[E].animation === u && (e.splice(E, 1), E -= 1, r -= 1, u.isPaused || b()), E += 1;
            }
            function o(x, E) {
                if (!x) return null;
                for(var u = 0; u < r;){
                    if (e[u].elem === x && e[u].elem !== null) return e[u].animation;
                    u += 1;
                }
                var C = new AnimationItem;
                return c(C, x), C.setData(x, E), C;
            }
            function d() {
                var x, E = e.length, u = [];
                for(x = 0; x < E; x += 1)u.push(e[x].animation);
                return u;
            }
            function v() {
                s += 1, R();
            }
            function b() {
                s -= 1;
            }
            function c(x, E) {
                x.addEventListener("destroy", p), x.addEventListener("_active", v), x.addEventListener("_idle", b), e.push({
                    elem: E,
                    animation: x
                }), r += 1;
            }
            function P(x) {
                var E = new AnimationItem;
                return c(E, null), E.setParams(x), E;
            }
            function g(x, E) {
                var u;
                for(u = 0; u < r; u += 1)e[u].animation.setSpeed(x, E);
            }
            function y(x, E) {
                var u;
                for(u = 0; u < r; u += 1)e[u].animation.setDirection(x, E);
            }
            function _(x) {
                var E;
                for(E = 0; E < r; E += 1)e[E].animation.play(x);
            }
            function f(x) {
                var E = x - i, u;
                for(u = 0; u < r; u += 1)e[u].animation.advanceTime(E);
                i = x, s && !n ? window.requestAnimationFrame(f) : a = !0;
            }
            function h(x) {
                i = x, window.requestAnimationFrame(f);
            }
            function l(x) {
                var E;
                for(E = 0; E < r; E += 1)e[E].animation.pause(x);
            }
            function m(x, E, u) {
                var C;
                for(C = 0; C < r; C += 1)e[C].animation.goToAndStop(x, E, u);
            }
            function S(x) {
                var E;
                for(E = 0; E < r; E += 1)e[E].animation.stop(x);
            }
            function T(x) {
                var E;
                for(E = 0; E < r; E += 1)e[E].animation.togglePause(x);
            }
            function A(x) {
                var E;
                for(E = r - 1; E >= 0; E -= 1)e[E].animation.destroy(x);
            }
            function D(x, E, u) {
                var C = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), M, k = C.length;
                for(M = 0; M < k; M += 1)u && C[M].setAttribute("data-bm-type", u), o(C[M], x);
                if (E && k === 0) {
                    u || (u = "svg");
                    var z = document.getElementsByTagName("body")[0];
                    z.innerText = "";
                    var O = createTag("div");
                    O.style.width = "100%", O.style.height = "100%", O.setAttribute("data-bm-type", u), z.appendChild(O), o(O, x);
                }
            }
            function I() {
                var x;
                for(x = 0; x < r; x += 1)e[x].animation.resize();
            }
            function R() {
                !n && s && a && (window.requestAnimationFrame(h), a = !1);
            }
            function L() {
                n = !0;
            }
            function V() {
                n = !1, R();
            }
            function B(x, E) {
                var u;
                for(u = 0; u < r; u += 1)e[u].animation.setVolume(x, E);
            }
            function F(x) {
                var E;
                for(E = 0; E < r; E += 1)e[E].animation.mute(x);
            }
            function w(x) {
                var E;
                for(E = 0; E < r; E += 1)e[E].animation.unmute(x);
            }
            return t.registerAnimation = o, t.loadAnimation = P, t.setSpeed = g, t.setDirection = y, t.play = _, t.pause = l, t.stop = S, t.togglePause = T, t.searchAnimations = D, t.resize = I, t.goToAndStop = m, t.destroy = A, t.freeze = L, t.unfreeze = V, t.setVolume = B, t.mute = F, t.unmute = w, t.getRegisteredAnimations = d, t;
        }(), BezierFactory = function() {
            var t = {};
            t.getBezierEasing = i;
            var e = {};
            function i(h, l, m, S, T) {
                var A = T || ("bez_" + h + "_" + l + "_" + m + "_" + S).replace(/\./g, "p");
                if (e[A]) return e[A];
                var D = new f([
                    h,
                    l,
                    m,
                    S
                ]);
                return e[A] = D, D;
            }
            var r = 4, s = .001, a = 1e-7, n = 10, p = 11, o = 1 / (p - 1), d = typeof Float32Array == "function";
            function v(h, l) {
                return 1 - 3 * l + 3 * h;
            }
            function b(h, l) {
                return 3 * l - 6 * h;
            }
            function c(h) {
                return 3 * h;
            }
            function P(h, l, m) {
                return ((v(l, m) * h + b(l, m)) * h + c(l)) * h;
            }
            function g(h, l, m) {
                return 3 * v(l, m) * h * h + 2 * b(l, m) * h + c(l);
            }
            function y(h, l, m, S, T) {
                var A, D, I = 0;
                do D = l + (m - l) / 2, A = P(D, S, T) - h, A > 0 ? m = D : l = D;
                while (Math.abs(A) > a && ++I < n);
                return D;
            }
            function _(h, l, m, S) {
                for(var T = 0; T < r; ++T){
                    var A = g(l, m, S);
                    if (A === 0) return l;
                    var D = P(l, m, S) - h;
                    l -= D / A;
                }
                return l;
            }
            function f(h) {
                this._p = h, this._mSampleValues = d ? new Float32Array(p) : new Array(p), this._precomputed = !1, this.get = this.get.bind(this);
            }
            return f.prototype = {
                get: function(h) {
                    var l = this._p[0], m = this._p[1], S = this._p[2], T = this._p[3];
                    return this._precomputed || this._precompute(), l === m && S === T ? h : h === 0 ? 0 : h === 1 ? 1 : P(this._getTForX(h), m, T);
                },
                _precompute: function() {
                    var h = this._p[0], l = this._p[1], m = this._p[2], S = this._p[3];
                    this._precomputed = !0, (h !== l || m !== S) && this._calcSampleValues();
                },
                _calcSampleValues: function() {
                    for(var h = this._p[0], l = this._p[2], m = 0; m < p; ++m)this._mSampleValues[m] = P(m * o, h, l);
                },
                _getTForX: function(h) {
                    for(var l = this._p[0], m = this._p[2], S = this._mSampleValues, T = 0, A = 1, D = p - 1; A !== D && S[A] <= h; ++A)T += o;
                    --A;
                    var I = (h - S[A]) / (S[A + 1] - S[A]), R = T + I * o, L = g(R, l, m);
                    return L >= s ? _(h, R, l, m) : L === 0 ? R : y(h, T, T + o, l, m);
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
                    newElement: p,
                    release: o
                };
                function p() {
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
            function e(c, P, g, y, _, f) {
                var h = c * y + P * _ + g * f - _ * y - f * c - g * P;
                return h > -0.001 && h < .001;
            }
            function i(c, P, g, y, _, f, h, l, m) {
                if (g === 0 && f === 0 && m === 0) return e(c, P, y, _, h, l);
                var S = t.sqrt(t.pow(y - c, 2) + t.pow(_ - P, 2) + t.pow(f - g, 2)), T = t.sqrt(t.pow(h - c, 2) + t.pow(l - P, 2) + t.pow(m - g, 2)), A = t.sqrt(t.pow(h - y, 2) + t.pow(l - _, 2) + t.pow(m - f, 2)), D;
                return S > T ? S > A ? D = S - T - A : D = A - T - S : A > T ? D = A - T - S : D = T - S - A, D > -0.0001 && D < 1e-4;
            }
            var r = function() {
                return function(c, P, g, y) {
                    var _ = getDefaultCurveSegments(), f, h, l, m, S, T = 0, A, D = [], I = [], R = bezierLengthPool.newElement();
                    for(l = g.length, f = 0; f < _; f += 1){
                        for(S = f / (_ - 1), A = 0, h = 0; h < l; h += 1)m = bmPow(1 - S, 3) * c[h] + 3 * bmPow(1 - S, 2) * S * g[h] + 3 * (1 - S) * bmPow(S, 2) * y[h] + bmPow(S, 3) * P[h], D[h] = m, I[h] !== null && (A += bmPow(D[h] - I[h], 2)), I[h] = D[h];
                        A && (A = bmSqrt(A), T += A), R.percents[f] = S, R.lengths[f] = T;
                    }
                    return R.addedLength = T, R;
                };
            }();
            function s(c) {
                var P = segmentsLengthPool.newElement(), g = c.c, y = c.v, _ = c.o, f = c.i, h, l = c._length, m = P.lengths, S = 0;
                for(h = 0; h < l - 1; h += 1)m[h] = r(y[h], y[h + 1], _[h], f[h + 1]), S += m[h].addedLength;
                return g && l && (m[h] = r(y[h], y[0], _[h], f[0]), S += m[h].addedLength), P.totalLength = S, P;
            }
            function a(c) {
                this.segmentLength = 0, this.points = new Array(c);
            }
            function n(c, P) {
                this.partialLength = c, this.point = P;
            }
            var p = function() {
                var c = {};
                return function(P, g, y, _) {
                    var f = (P[0] + "_" + P[1] + "_" + g[0] + "_" + g[1] + "_" + y[0] + "_" + y[1] + "_" + _[0] + "_" + _[1]).replace(/\./g, "p");
                    if (!c[f]) {
                        var h = getDefaultCurveSegments(), l, m, S, T, A, D = 0, I, R, L = null;
                        P.length === 2 && (P[0] !== g[0] || P[1] !== g[1]) && e(P[0], P[1], g[0], g[1], P[0] + y[0], P[1] + y[1]) && e(P[0], P[1], g[0], g[1], g[0] + _[0], g[1] + _[1]) && (h = 2);
                        var V = new a(h);
                        for(S = y.length, l = 0; l < h; l += 1){
                            for(R = createSizedArray(S), A = l / (h - 1), I = 0, m = 0; m < S; m += 1)T = bmPow(1 - A, 3) * P[m] + 3 * bmPow(1 - A, 2) * A * (P[m] + y[m]) + 3 * (1 - A) * bmPow(A, 2) * (g[m] + _[m]) + bmPow(A, 3) * g[m], R[m] = T, L !== null && (I += bmPow(R[m] - L[m], 2));
                            I = bmSqrt(I), D += I, V.points[l] = new n(I, R), L = R;
                        }
                        V.segmentLength = D, c[f] = V;
                    }
                    return c[f];
                };
            }();
            function o(c, P) {
                var g = P.percents, y = P.lengths, _ = g.length, f = bmFloor((_ - 1) * c), h = c * P.addedLength, l = 0;
                if (f === _ - 1 || f === 0 || h === y[f]) return g[f];
                for(var m = y[f] > h ? -1 : 1, S = !0; S;)if (y[f] <= h && y[f + 1] > h ? (l = (h - y[f]) / (y[f + 1] - y[f]), S = !1) : f += m, f < 0 || f >= _ - 1) {
                    if (f === _ - 1) return g[f];
                    S = !1;
                }
                return g[f] + (g[f + 1] - g[f]) * l;
            }
            function d(c, P, g, y, _, f) {
                var h = o(_, f), l = 1 - h, m = t.round((l * l * l * c[0] + (h * l * l + l * h * l + l * l * h) * g[0] + (h * h * l + l * h * h + h * l * h) * y[0] + h * h * h * P[0]) * 1e3) / 1e3, S = t.round((l * l * l * c[1] + (h * l * l + l * h * l + l * l * h) * g[1] + (h * h * l + l * h * h + h * l * h) * y[1] + h * h * h * P[1]) * 1e3) / 1e3;
                return [
                    m,
                    S
                ];
            }
            var v = createTypedArray("float32", 8);
            function b(c, P, g, y, _, f, h) {
                _ < 0 ? _ = 0 : _ > 1 && (_ = 1);
                var l = o(_, h);
                f = f > 1 ? 1 : f;
                var m = o(f, h), S, T = c.length, A = 1 - l, D = 1 - m, I = A * A * A, R = l * A * A * 3, L = l * l * A * 3, V = l * l * l, B = A * A * D, F = l * A * D + A * l * D + A * A * m, w = l * l * D + A * l * m + l * A * m, x = l * l * m, E = A * D * D, u = l * D * D + A * m * D + A * D * m, C = l * m * D + A * m * m + l * D * m, M = l * m * m, k = D * D * D, z = m * D * D + D * m * D + D * D * m, O = m * m * D + D * m * m + m * D * m, j = m * m * m;
                for(S = 0; S < T; S += 1)v[S * 4] = t.round((I * c[S] + R * g[S] + L * y[S] + V * P[S]) * 1e3) / 1e3, v[S * 4 + 1] = t.round((B * c[S] + F * g[S] + w * y[S] + x * P[S]) * 1e3) / 1e3, v[S * 4 + 2] = t.round((E * c[S] + u * g[S] + C * y[S] + M * P[S]) * 1e3) / 1e3, v[S * 4 + 3] = t.round((k * c[S] + z * g[S] + O * y[S] + j * P[S]) * 1e3) / 1e3;
                return v;
            }
            return {
                getSegmentsLength: s,
                getNewSegment: b,
                getPointInSegment: d,
                buildBezierData: p,
                pointOnLine2D: e,
                pointOnLine3D: i
            };
        }
        var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
        function interpolateValue(t, e) {
            var i = this.offsetTime, r;
            this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
            for(var s = e.lastIndex, a = s, n = this.keyframes.length - 1, p = !0, o, d, v; p;){
                if (o = this.keyframes[a], d = this.keyframes[a + 1], a === n - 1 && t >= d.t - i) {
                    o.h && (o = d), s = 0;
                    break;
                }
                if (d.t - i > t) {
                    s = a;
                    break;
                }
                a < n - 1 ? a += 1 : (s = 0, p = !1);
            }
            v = this.keyframesMetadata[a] || {};
            var b, c, P, g, y, _, f = d.t - i, h = o.t - i, l;
            if (o.to) {
                v.bezierData || (v.bezierData = bez.buildBezierData(o.s, d.s || o.e, o.to, o.ti));
                var m = v.bezierData;
                if (t >= f || t < h) {
                    var S = t >= f ? m.points.length - 1 : 0;
                    for(c = m.points[S].point.length, b = 0; b < c; b += 1)r[b] = m.points[S].point[b];
                } else {
                    v.__fnct ? _ = v.__fnct : (_ = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, v.__fnct = _), P = _((t - h) / (f - h));
                    var T = m.segmentLength * P, A, D = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
                    for(y = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, p = !0, g = m.points.length; p;){
                        if (D += m.points[y].partialLength, T === 0 || P === 0 || y === m.points.length - 1) {
                            for(c = m.points[y].point.length, b = 0; b < c; b += 1)r[b] = m.points[y].point[b];
                            break;
                        } else if (T >= D && T < D + m.points[y + 1].partialLength) {
                            for(A = (T - D) / m.points[y + 1].partialLength, c = m.points[y].point.length, b = 0; b < c; b += 1)r[b] = m.points[y].point[b] + (m.points[y + 1].point[b] - m.points[y].point[b]) * A;
                            break;
                        }
                        y < g - 1 ? y += 1 : p = !1;
                    }
                    e._lastPoint = y, e._lastAddedLength = D - m.points[y].partialLength, e._lastKeyframeIndex = a;
                }
            } else {
                var I, R, L, V, B;
                if (n = o.s.length, l = d.s || o.e, this.sh && o.h !== 1) {
                    if (t >= f) r[0] = l[0], r[1] = l[1], r[2] = l[2];
                    else if (t <= h) r[0] = o.s[0], r[1] = o.s[1], r[2] = o.s[2];
                    else {
                        var F = createQuaternion(o.s), w = createQuaternion(l), x = (t - h) / (f - h);
                        quaternionToEuler(r, slerp(F, w, x));
                    }
                } else for(a = 0; a < n; a += 1)o.h !== 1 && (t >= f ? P = 1 : t < h ? P = 0 : (o.o.x.constructor === Array ? (v.__fnct || (v.__fnct = []), v.__fnct[a] ? _ = v.__fnct[a] : (I = o.o.x[a] === void 0 ? o.o.x[0] : o.o.x[a], R = o.o.y[a] === void 0 ? o.o.y[0] : o.o.y[a], L = o.i.x[a] === void 0 ? o.i.x[0] : o.i.x[a], V = o.i.y[a] === void 0 ? o.i.y[0] : o.i.y[a], _ = BezierFactory.getBezierEasing(I, R, L, V).get, v.__fnct[a] = _)) : v.__fnct ? _ = v.__fnct : (I = o.o.x, R = o.o.y, L = o.i.x, V = o.i.y, _ = BezierFactory.getBezierEasing(I, R, L, V).get, o.keyframeMetadata = _), P = _((t - h) / (f - h)))), l = d.s || o.e, B = o.h === 1 ? o.s[a] : o.s[a] + (l[a] - o.s[a]) * P, this.propType === "multidimensional" ? r[a] = B : r = B;
            }
            return e.lastIndex = s, r;
        }
        function slerp(t, e, i) {
            var r = [], s = t[0], a = t[1], n = t[2], p = t[3], o = e[0], d = e[1], v = e[2], b = e[3], c, P, g, y, _;
            return P = s * o + a * d + n * v + p * b, P < 0 && (P = -P, o = -o, d = -d, v = -v, b = -b), 1 - P > 1e-6 ? (c = Math.acos(P), g = Math.sin(c), y = Math.sin((1 - i) * c) / g, _ = Math.sin(i * c) / g) : (y = 1 - i, _ = i), r[0] = y * s + _ * o, r[1] = y * a + _ * d, r[2] = y * n + _ * v, r[3] = y * p + _ * b, r;
        }
        function quaternionToEuler(t, e) {
            var i = e[0], r = e[1], s = e[2], a = e[3], n = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s), p = Math.asin(2 * i * r + 2 * s * a), o = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s);
            t[0] = n / degToRads, t[1] = p / degToRads, t[2] = o / degToRads;
        }
        function createQuaternion(t) {
            var e = t[0] * degToRads, i = t[1] * degToRads, r = t[2] * degToRads, s = Math.cos(e / 2), a = Math.cos(i / 2), n = Math.cos(r / 2), p = Math.sin(e / 2), o = Math.sin(i / 2), d = Math.sin(r / 2), v = s * a * n - p * o * d, b = p * o * n + s * a * d, c = p * a * n + s * o * d, P = s * o * n - p * a * d;
            return [
                b,
                c,
                P,
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
            var s, a = e.k.length, n, p, o, d;
            for(s = 0; s < a - 1; s += 1)e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (n = e.k[s].s, p = e.k[s + 1].s, o = e.k[s].to, d = e.k[s].ti, (n.length === 2 && !(n[0] === p[0] && n[1] === p[1]) && bez.pointOnLine2D(n[0], n[1], p[0], p[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], p[0], p[1], p[0] + d[0], p[1] + d[1]) || n.length === 3 && !(n[0] === p[0] && n[1] === p[1] && n[2] === p[2]) && bez.pointOnLine3D(n[0], n[1], n[2], p[0], p[1], p[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], p[0], p[1], p[2], p[0] + d[0], p[1] + d[1], p[2] + d[2])) && (e.k[s].to = null, e.k[s].ti = null), n[0] === p[0] && n[1] === p[1] && o[0] === 0 && o[1] === 0 && d[0] === 0 && d[1] === 0 && (n.length === 2 || n[2] === p[2] && o[2] === 0 && d[2] === 0) && (e.k[s].to = null, e.k[s].ti = null));
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
                var p;
                if (!r.k.length) p = new ValueProperty(i, r, a, n);
                else if (typeof r.k[0] == "number") p = new MultiDimensionalProperty(i, r, a, n);
                else switch(s){
                    case 0:
                        p = new KeyframedValueProperty(i, r, a, n);
                        break;
                    case 1:
                        p = new KeyframedMultidimensionalProperty(i, r, a, n);
                        break;
                }
                return p.effectsSequence.length && n.addDynamicProperty(p), p;
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
        }, ShapePath.prototype.setTripleAt = function(t, e, i, r, s, a, n, p) {
            this.setXYAt(t, e, "v", n, p), this.setXYAt(i, r, "o", n, p), this.setXYAt(s, a, "i", n, p);
        }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v, i = this.o, r = this.i, s = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), s = 1);
            var a = this._length - 1, n = this._length, p;
            for(p = s; p < n; p += 1)t.setTripleAt(e[a][0], e[a][1], r[a][0], r[a][1], i[a][0], i[a][1], p, !1), a -= 1;
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
                var a = r.newElement(), n, p = s._length === void 0 ? s.v.length : s._length;
                for(a.setLength(p), a.c = s.c, n = 0; n < p; n += 1)a.setTripleAt(s.v[n][0], s.v[n][1], s.o[n][0], s.o[n][1], s.i[n][0], s.i[n][1], n);
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
                var p, o = n._length;
                for(p = 0; p < o; p += 1)shapePool.release(n.shapes[p]);
                n._length = 0, e === i && (r = pooling.double(r), i *= 2), r[e] = n, e += 1;
            }
            return t;
        }(), ShapePropertyFactory = function() {
            var t = -999999;
            function e(f, h, l) {
                var m = l.lastIndex, S, T, A, D, I, R, L, V, B, F = this.keyframes;
                if (f < F[0].t - this.offsetTime) S = F[0].s[0], A = !0, m = 0;
                else if (f >= F[F.length - 1].t - this.offsetTime) S = F[F.length - 1].s ? F[F.length - 1].s[0] : F[F.length - 2].e[0], A = !0;
                else {
                    for(var w = m, x = F.length - 1, E = !0, u, C, M; E && (u = F[w], C = F[w + 1], !(C.t - this.offsetTime > f));)w < x - 1 ? w += 1 : E = !1;
                    if (M = this.keyframesMetadata[w] || {}, A = u.h === 1, m = w, !A) {
                        if (f >= C.t - this.offsetTime) V = 1;
                        else if (f < u.t - this.offsetTime) V = 0;
                        else {
                            var k;
                            M.__fnct ? k = M.__fnct : (k = BezierFactory.getBezierEasing(u.o.x, u.o.y, u.i.x, u.i.y).get, M.__fnct = k), V = k((f - (u.t - this.offsetTime)) / (C.t - this.offsetTime - (u.t - this.offsetTime)));
                        }
                        T = C.s ? C.s[0] : u.e[0];
                    }
                    S = u.s[0];
                }
                for(R = h._length, L = S.i[0].length, l.lastIndex = m, D = 0; D < R; D += 1)for(I = 0; I < L; I += 1)B = A ? S.i[D][I] : S.i[D][I] + (T.i[D][I] - S.i[D][I]) * V, h.i[D][I] = B, B = A ? S.o[D][I] : S.o[D][I] + (T.o[D][I] - S.o[D][I]) * V, h.o[D][I] = B, B = A ? S.v[D][I] : S.v[D][I] + (T.v[D][I] - S.v[D][I]) * V, h.v[D][I] = B;
            }
            function i() {
                var f = this.comp.renderedFrame - this.offsetTime, h = this.keyframes[0].t - this.offsetTime, l = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, m = this._caching.lastFrame;
                return m !== t && (m < h && f < h || m > l && f > l) || (this._caching.lastIndex = m < f ? this._caching.lastIndex : 0, this.interpolateShape(f, this.pv, this._caching)), this._caching.lastFrame = f, this.pv;
            }
            function r() {
                this.paths = this.localShapeCollection;
            }
            function s(f, h) {
                if (f._length !== h._length || f.c !== h.c) return !1;
                var l, m = f._length;
                for(l = 0; l < m; l += 1)if (f.v[l][0] !== h.v[l][0] || f.v[l][1] !== h.v[l][1] || f.o[l][0] !== h.o[l][0] || f.o[l][1] !== h.o[l][1] || f.i[l][0] !== h.i[l][0] || f.i[l][1] !== h.i[l][1]) return !1;
                return !0;
            }
            function a(f) {
                s(this.v, f) || (this.v = shapePool.clone(f), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
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
                    var f;
                    this.kf ? f = this.pv : this.data.ks ? f = this.data.ks.k : f = this.data.pt.k;
                    var h, l = this.effectsSequence.length;
                    for(h = 0; h < l; h += 1)f = this.effectsSequence[h](f);
                    this.setVValue(f), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                }
            }
            function p(f, h, l) {
                this.propType = "shape", this.comp = f.comp, this.container = f, this.elem = f, this.data = h, this.k = !1, this.kf = !1, this._mdf = !1;
                var m = l === 3 ? h.pt.k : h.ks.k;
                this.v = shapePool.clone(m), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = [];
            }
            function o(f) {
                this.effectsSequence.push(f), this.container.addDynamicProperty(this);
            }
            p.prototype.interpolateShape = e, p.prototype.getValue = n, p.prototype.setVValue = a, p.prototype.addEffect = o;
            function d(f, h, l) {
                this.propType = "shape", this.comp = f.comp, this.elem = f, this.container = f, this.offsetTime = f.data.st, this.keyframes = l === 3 ? h.pt.k : h.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                var m = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, m), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = {
                    lastFrame: t,
                    lastIndex: 0
                }, this.effectsSequence = [
                    i.bind(this)
                ];
            }
            d.prototype.getValue = n, d.prototype.interpolateShape = e, d.prototype.setVValue = a, d.prototype.addEffect = o;
            var v = function() {
                var f = roundCorner;
                function h(l, m) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = m.d, this.elem = l, this.comp = l.comp, this.frameId = -1, this.initDynamicPropertyContainer(l), this.p = PropertyFactory.getProp(l, m.p, 1, 0, this), this.s = PropertyFactory.getProp(l, m.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                }
                return h.prototype = {
                    reset: r,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function() {
                        var l = this.p.v[0], m = this.p.v[1], S = this.s.v[0] / 2, T = this.s.v[1] / 2, A = this.d !== 3, D = this.v;
                        D.v[0][0] = l, D.v[0][1] = m - T, D.v[1][0] = A ? l + S : l - S, D.v[1][1] = m, D.v[2][0] = l, D.v[2][1] = m + T, D.v[3][0] = A ? l - S : l + S, D.v[3][1] = m, D.i[0][0] = A ? l - S * f : l + S * f, D.i[0][1] = m - T, D.i[1][0] = A ? l + S : l - S, D.i[1][1] = m - T * f, D.i[2][0] = A ? l + S * f : l - S * f, D.i[2][1] = m + T, D.i[3][0] = A ? l - S : l + S, D.i[3][1] = m + T * f, D.o[0][0] = A ? l + S * f : l - S * f, D.o[0][1] = m - T, D.o[1][0] = A ? l + S : l - S, D.o[1][1] = m + T * f, D.o[2][0] = A ? l - S * f : l + S * f, D.o[2][1] = m + T, D.o[3][0] = A ? l - S : l + S, D.o[3][1] = m - T * f;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], h), h;
            }(), b = function() {
                function f(h, l) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = h, this.comp = h.comp, this.data = l, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(h), l.sy === 1 ? (this.ir = PropertyFactory.getProp(h, l.ir, 0, 0, this), this.is = PropertyFactory.getProp(h, l.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(h, l.pt, 0, 0, this), this.p = PropertyFactory.getProp(h, l.p, 1, 0, this), this.r = PropertyFactory.getProp(h, l.r, 0, degToRads, this), this.or = PropertyFactory.getProp(h, l.or, 0, 0, this), this.os = PropertyFactory.getProp(h, l.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                }
                return f.prototype = {
                    reset: r,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function() {
                        var h = Math.floor(this.pt.v) * 2, l = Math.PI * 2 / h, m = !0, S = this.or.v, T = this.ir.v, A = this.os.v, D = this.is.v, I = 2 * Math.PI * S / (h * 2), R = 2 * Math.PI * T / (h * 2), L, V, B, F, w = -Math.PI / 2;
                        w += this.r.v;
                        var x = this.data.d === 3 ? -1 : 1;
                        for(this.v._length = 0, L = 0; L < h; L += 1){
                            V = m ? S : T, B = m ? A : D, F = m ? I : R;
                            var E = V * Math.cos(w), u = V * Math.sin(w), C = E === 0 && u === 0 ? 0 : u / Math.sqrt(E * E + u * u), M = E === 0 && u === 0 ? 0 : -E / Math.sqrt(E * E + u * u);
                            E += +this.p.v[0], u += +this.p.v[1], this.v.setTripleAt(E, u, E - C * F * B * x, u - M * F * B * x, E + C * F * B * x, u + M * F * B * x, L, !0), m = !m, w += l * x;
                        }
                    },
                    convertPolygonToPath: function() {
                        var h = Math.floor(this.pt.v), l = Math.PI * 2 / h, m = this.or.v, S = this.os.v, T = 2 * Math.PI * m / (h * 4), A, D = -Math.PI * .5, I = this.data.d === 3 ? -1 : 1;
                        for(D += this.r.v, this.v._length = 0, A = 0; A < h; A += 1){
                            var R = m * Math.cos(D), L = m * Math.sin(D), V = R === 0 && L === 0 ? 0 : L / Math.sqrt(R * R + L * L), B = R === 0 && L === 0 ? 0 : -R / Math.sqrt(R * R + L * L);
                            R += +this.p.v[0], L += +this.p.v[1], this.v.setTripleAt(R, L, R - V * T * S * I, L - B * T * S * I, R + V * T * S * I, L + B * T * S * I, A, !0), D += l * I;
                        }
                        this.paths.length = 0, this.paths[0] = this.v;
                    }
                }, extendPrototype([
                    DynamicPropertyContainer
                ], f), f;
            }(), c = function() {
                function f(h, l) {
                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = h, this.comp = h.comp, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(h), this.p = PropertyFactory.getProp(h, l.p, 1, 0, this), this.s = PropertyFactory.getProp(h, l.s, 1, 0, this), this.r = PropertyFactory.getProp(h, l.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                }
                return f.prototype = {
                    convertRectToPath: function() {
                        var h = this.p.v[0], l = this.p.v[1], m = this.s.v[0] / 2, S = this.s.v[1] / 2, T = bmMin(m, S, this.r.v), A = T * (1 - roundCorner);
                        this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(h + m, l - S + T, h + m, l - S + T, h + m, l - S + A, 0, !0), this.v.setTripleAt(h + m, l + S - T, h + m, l + S - A, h + m, l + S - T, 1, !0), T !== 0 ? (this.v.setTripleAt(h + m - T, l + S, h + m - T, l + S, h + m - A, l + S, 2, !0), this.v.setTripleAt(h - m + T, l + S, h - m + A, l + S, h - m + T, l + S, 3, !0), this.v.setTripleAt(h - m, l + S - T, h - m, l + S - T, h - m, l + S - A, 4, !0), this.v.setTripleAt(h - m, l - S + T, h - m, l - S + A, h - m, l - S + T, 5, !0), this.v.setTripleAt(h - m + T, l - S, h - m + T, l - S, h - m + A, l - S, 6, !0), this.v.setTripleAt(h + m - T, l - S, h + m - A, l - S, h + m - T, l - S, 7, !0)) : (this.v.setTripleAt(h - m, l + S, h - m + A, l + S, h - m, l + S, 2), this.v.setTripleAt(h - m, l - S, h - m, l - S + A, h - m, l - S, 3))) : (this.v.setTripleAt(h + m, l - S + T, h + m, l - S + A, h + m, l - S + T, 0, !0), T !== 0 ? (this.v.setTripleAt(h + m - T, l - S, h + m - T, l - S, h + m - A, l - S, 1, !0), this.v.setTripleAt(h - m + T, l - S, h - m + A, l - S, h - m + T, l - S, 2, !0), this.v.setTripleAt(h - m, l - S + T, h - m, l - S + T, h - m, l - S + A, 3, !0), this.v.setTripleAt(h - m, l + S - T, h - m, l + S - A, h - m, l + S - T, 4, !0), this.v.setTripleAt(h - m + T, l + S, h - m + T, l + S, h - m + A, l + S, 5, !0), this.v.setTripleAt(h + m - T, l + S, h + m - A, l + S, h + m - T, l + S, 6, !0), this.v.setTripleAt(h + m, l + S - T, h + m, l + S - T, h + m, l + S - A, 7, !0)) : (this.v.setTripleAt(h - m, l - S, h - m + A, l - S, h - m, l - S, 1, !0), this.v.setTripleAt(h - m, l + S, h - m, l + S - A, h - m, l + S, 2, !0), this.v.setTripleAt(h + m, l + S, h + m - A, l + S, h + m, l + S, 3, !0)));
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                    },
                    reset: r
                }, extendPrototype([
                    DynamicPropertyContainer
                ], f), f;
            }();
            function P(f, h, l) {
                var m;
                if (l === 3 || l === 4) {
                    var S = l === 3 ? h.pt : h.ks, T = S.k;
                    T.length ? m = new d(f, h, l) : m = new p(f, h, l);
                } else l === 5 ? m = new c(f, h) : l === 6 ? m = new v(f, h) : l === 7 && (m = new b(f, h));
                return m.k && f.addDynamicProperty(m), m;
            }
            function g() {
                return p;
            }
            function y() {
                return d;
            }
            var _ = {};
            return _.getShapeProp = P, _.getConstructorFunction = g, _.getKeyframedConstructorFunction = y, _;
        }(), Matrix = function() {
            var t = Math.cos, e = Math.sin, i = Math.tan, r = Math.round;
            function s() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
            }
            function a(u) {
                if (u === 0) return this;
                var C = t(u), M = e(u);
                return this._t(C, -M, 0, 0, M, C, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function n(u) {
                if (u === 0) return this;
                var C = t(u), M = e(u);
                return this._t(1, 0, 0, 0, 0, C, -M, 0, 0, M, C, 0, 0, 0, 0, 1);
            }
            function p(u) {
                if (u === 0) return this;
                var C = t(u), M = e(u);
                return this._t(C, 0, M, 0, 0, 1, 0, 0, -M, 0, C, 0, 0, 0, 0, 1);
            }
            function o(u) {
                if (u === 0) return this;
                var C = t(u), M = e(u);
                return this._t(C, -M, 0, 0, M, C, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function d(u, C) {
                return this._t(1, C, u, 1, 0, 0);
            }
            function v(u, C) {
                return this.shear(i(u), i(C));
            }
            function b(u, C) {
                var M = t(C), k = e(C);
                return this._t(M, k, 0, 0, -k, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(u), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(M, -k, 0, 0, k, M, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function c(u, C, M) {
                return !M && M !== 0 && (M = 1), u === 1 && C === 1 && M === 1 ? this : this._t(u, 0, 0, 0, 0, C, 0, 0, 0, 0, M, 0, 0, 0, 0, 1);
            }
            function P(u, C, M, k, z, O, j, N, W, H, J, Q, Y, $, Z, q) {
                return this.props[0] = u, this.props[1] = C, this.props[2] = M, this.props[3] = k, this.props[4] = z, this.props[5] = O, this.props[6] = j, this.props[7] = N, this.props[8] = W, this.props[9] = H, this.props[10] = J, this.props[11] = Q, this.props[12] = Y, this.props[13] = $, this.props[14] = Z, this.props[15] = q, this;
            }
            function g(u, C, M) {
                return M = M || 0, u !== 0 || C !== 0 || M !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, u, C, M, 1) : this;
            }
            function y(u, C, M, k, z, O, j, N, W, H, J, Q, Y, $, Z, q) {
                var G = this.props;
                if (u === 1 && C === 0 && M === 0 && k === 0 && z === 0 && O === 1 && j === 0 && N === 0 && W === 0 && H === 0 && J === 1 && Q === 0) return G[12] = G[12] * u + G[15] * Y, G[13] = G[13] * O + G[15] * $, G[14] = G[14] * J + G[15] * Z, G[15] *= q, this._identityCalculated = !1, this;
                var et = G[0], at = G[1], it = G[2], tt = G[3], rt = G[4], st = G[5], X = G[6], nt = G[7], ot = G[8], K = G[9], ht = G[10], U = G[11], lt = G[12], pt = G[13], ft = G[14], ct = G[15];
                return G[0] = et * u + at * z + it * W + tt * Y, G[1] = et * C + at * O + it * H + tt * $, G[2] = et * M + at * j + it * J + tt * Z, G[3] = et * k + at * N + it * Q + tt * q, G[4] = rt * u + st * z + X * W + nt * Y, G[5] = rt * C + st * O + X * H + nt * $, G[6] = rt * M + st * j + X * J + nt * Z, G[7] = rt * k + st * N + X * Q + nt * q, G[8] = ot * u + K * z + ht * W + U * Y, G[9] = ot * C + K * O + ht * H + U * $, G[10] = ot * M + K * j + ht * J + U * Z, G[11] = ot * k + K * N + ht * Q + U * q, G[12] = lt * u + pt * z + ft * W + ct * Y, G[13] = lt * C + pt * O + ft * H + ct * $, G[14] = lt * M + pt * j + ft * J + ct * Z, G[15] = lt * k + pt * N + ft * Q + ct * q, this._identityCalculated = !1, this;
            }
            function _(u) {
                var C = u.props;
                return this.transform(C[0], C[1], C[2], C[3], C[4], C[5], C[6], C[7], C[8], C[9], C[10], C[11], C[12], C[13], C[14], C[15]);
            }
            function f() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
            }
            function h(u) {
                for(var C = 0; C < 16;){
                    if (u.props[C] !== this.props[C]) return !1;
                    C += 1;
                }
                return !0;
            }
            function l(u) {
                var C;
                for(C = 0; C < 16; C += 1)u.props[C] = this.props[C];
                return u;
            }
            function m(u) {
                var C;
                for(C = 0; C < 16; C += 1)this.props[C] = u[C];
            }
            function S(u, C, M) {
                return {
                    x: u * this.props[0] + C * this.props[4] + M * this.props[8] + this.props[12],
                    y: u * this.props[1] + C * this.props[5] + M * this.props[9] + this.props[13],
                    z: u * this.props[2] + C * this.props[6] + M * this.props[10] + this.props[14]
                };
            }
            function T(u, C, M) {
                return u * this.props[0] + C * this.props[4] + M * this.props[8] + this.props[12];
            }
            function A(u, C, M) {
                return u * this.props[1] + C * this.props[5] + M * this.props[9] + this.props[13];
            }
            function D(u, C, M) {
                return u * this.props[2] + C * this.props[6] + M * this.props[10] + this.props[14];
            }
            function I() {
                var u = this.props[0] * this.props[5] - this.props[1] * this.props[4], C = this.props[5] / u, M = -this.props[1] / u, k = -this.props[4] / u, z = this.props[0] / u, O = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / u, j = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / u, N = new Matrix;
                return N.props[0] = C, N.props[1] = M, N.props[4] = k, N.props[5] = z, N.props[12] = O, N.props[13] = j, N;
            }
            function R(u) {
                var C = this.getInverseMatrix();
                return C.applyToPointArray(u[0], u[1], u[2] || 0);
            }
            function L(u) {
                var C, M = u.length, k = [];
                for(C = 0; C < M; C += 1)k[C] = R(u[C]);
                return k;
            }
            function V(u, C, M) {
                var k = createTypedArray("float32", 6);
                if (this.isIdentity()) k[0] = u[0], k[1] = u[1], k[2] = C[0], k[3] = C[1], k[4] = M[0], k[5] = M[1];
                else {
                    var z = this.props[0], O = this.props[1], j = this.props[4], N = this.props[5], W = this.props[12], H = this.props[13];
                    k[0] = u[0] * z + u[1] * j + W, k[1] = u[0] * O + u[1] * N + H, k[2] = C[0] * z + C[1] * j + W, k[3] = C[0] * O + C[1] * N + H, k[4] = M[0] * z + M[1] * j + W, k[5] = M[0] * O + M[1] * N + H;
                }
                return k;
            }
            function B(u, C, M) {
                var k;
                return this.isIdentity() ? k = [
                    u,
                    C,
                    M
                ] : k = [
                    u * this.props[0] + C * this.props[4] + M * this.props[8] + this.props[12],
                    u * this.props[1] + C * this.props[5] + M * this.props[9] + this.props[13],
                    u * this.props[2] + C * this.props[6] + M * this.props[10] + this.props[14]
                ], k;
            }
            function F(u, C) {
                if (this.isIdentity()) return u + "," + C;
                var M = this.props;
                return Math.round((u * M[0] + C * M[4] + M[12]) * 100) / 100 + "," + Math.round((u * M[1] + C * M[5] + M[13]) * 100) / 100;
            }
            function w() {
                for(var u = 0, C = this.props, M = "matrix3d(", k = 1e4; u < 16;)M += r(C[u] * k) / k, M += u === 15 ? ")" : ",", u += 1;
                return M;
            }
            function x(u) {
                var C = 1e4;
                return u < 1e-6 && u > 0 || u > -0.000001 && u < 0 ? r(u * C) / C : u;
            }
            function E() {
                var u = this.props, C = x(u[0]), M = x(u[1]), k = x(u[4]), z = x(u[5]), O = x(u[12]), j = x(u[13]);
                return "matrix(" + C + "," + M + "," + k + "," + z + "," + O + "," + j + ")";
            }
            return function() {
                this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = p, this.rotateZ = o, this.skew = v, this.skewFromAxis = b, this.shear = d, this.scale = c, this.setTransform = P, this.translate = g, this.transform = y, this.multiply = _, this.applyToPoint = S, this.applyToX = T, this.applyToY = A, this.applyToZ = D, this.applyToPointArray = B, this.applyToTriplePoints = V, this.applyToPointStringified = F, this.toCSS = w, this.to2dCSS = E, this.clone = l, this.cloneFromProps = m, this.equals = h, this.inversePoints = L, this.inversePoint = R, this.getInverseMatrix = I, this._t = this.transform, this.isIdentity = f, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
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
            var n = [], p, o = a.length, d;
            for(p = 0; p < o; p += 1)if (d = a[p], !(d.e * s < r || d.s * s > r + i)) {
                var v, b;
                d.s * s <= r ? v = 0 : v = (d.s * s - r) / i, d.e * s >= r + i ? b = 1 : b = (d.e * s - r) / i, n.push([
                    v,
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
                    var s = e;
                    e = i, i = s;
                }
                e = Math.round(e * 1e4) * 1e-4, i = Math.round(i * 1e4) * 1e-4, this.sValue = e, this.eValue = i;
            } else e = this.sValue, i = this.eValue;
            var a, n, p = this.shapes.length, o, d, v, b, c, P = 0;
            if (i === e) for(n = 0; n < p; n += 1)this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
            else if (i === 1 && e === 0 || i === 0 && e === 1) {
                if (this._mdf) for(n = 0; n < p; n += 1)this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0;
            } else {
                var g = [], y, _;
                for(n = 0; n < p; n += 1)if (y = this.shapes[n], !y.shape._mdf && !this._mdf && !t && this.m !== 2) y.shape.paths = y.localShapeCollection;
                else {
                    if (a = y.shape.paths, d = a._length, c = 0, !y.shape._mdf && y.pathsData.length) c = y.totalShapeLength;
                    else {
                        for(v = this.releasePathsData(y.pathsData), o = 0; o < d; o += 1)b = bez.getSegmentsLength(a.shapes[o]), v.push(b), c += b.totalLength;
                        y.totalShapeLength = c, y.pathsData = v;
                    }
                    P += c, y.shape._mdf = !0;
                }
                var f = e, h = i, l = 0, m;
                for(n = p - 1; n >= 0; n -= 1)if (y = this.shapes[n], y.shape._mdf) {
                    for(_ = y.localShapeCollection, _.releaseShapes(), this.m === 2 && p > 1 ? (m = this.calculateShapeEdges(e, i, y.totalShapeLength, l, P), l += y.totalShapeLength) : m = [
                        [
                            f,
                            h
                        ]
                    ], d = m.length, o = 0; o < d; o += 1){
                        f = m[o][0], h = m[o][1], g.length = 0, h <= 1 ? g.push({
                            s: y.totalShapeLength * f,
                            e: y.totalShapeLength * h
                        }) : f >= 1 ? g.push({
                            s: y.totalShapeLength * (f - 1),
                            e: y.totalShapeLength * (h - 1)
                        }) : (g.push({
                            s: y.totalShapeLength * f,
                            e: y.totalShapeLength
                        }), g.push({
                            s: 0,
                            e: y.totalShapeLength * (h - 1)
                        }));
                        var S = this.addShapes(y, g[0]);
                        if (g[0].s !== g[0].e) {
                            if (g.length > 1) {
                                var T = y.shape.paths.shapes[y.shape.paths._length - 1];
                                if (T.c) {
                                    var A = S.pop();
                                    this.addPaths(S, _), S = this.addShapes(y, g[1], A);
                                } else this.addPaths(S, _), S = this.addShapes(y, g[1]);
                            }
                            this.addPaths(S, _);
                        }
                    }
                    y.shape.paths = _;
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
            var r = t.pathsData, s = t.shape.paths.shapes, a, n = t.shape.paths._length, p, o, d = 0, v, b, c, P, g = [], y, _ = !0;
            for(i ? (b = i._length, y = i._length) : (i = shapePool.newElement(), b = 0, y = 0), g.push(i), a = 0; a < n; a += 1){
                for(c = r[a].lengths, i.c = s[a].c, o = s[a].c ? c.length : c.length + 1, p = 1; p < o; p += 1)if (v = c[p - 1], d + v.addedLength < e.s) d += v.addedLength, i.c = !1;
                else if (d > e.e) {
                    i.c = !1;
                    break;
                } else e.s <= d && e.e >= d + v.addedLength ? (this.addSegment(s[a].v[p - 1], s[a].o[p - 1], s[a].i[p], s[a].v[p], i, b, _), _ = !1) : (P = bez.getNewSegment(s[a].v[p - 1], s[a].v[p], s[a].o[p - 1], s[a].i[p], (e.s - d) / v.addedLength, (e.e - d) / v.addedLength, c[p - 1]), this.addSegmentFromArray(P, i, b, _), _ = !1, i.c = !1), d += v.addedLength, b += 1;
                if (s[a].c && c.length) {
                    if (v = c[p - 1], d <= e.e) {
                        var f = c[p - 1].addedLength;
                        e.s <= d && e.e >= d + f ? (this.addSegment(s[a].v[p - 1], s[a].o[p - 1], s[a].i[0], s[a].v[0], i, b, _), _ = !1) : (P = bez.getNewSegment(s[a].v[p - 1], s[a].v[0], s[a].o[p - 1], s[a].i[0], (e.s - d) / f, (e.e - d) / f, c[p - 1]), this.addSegmentFromArray(P, i, b, _), _ = !1, i.c = !1);
                    } else i.c = !1;
                    d += v.addedLength, b += 1;
                }
                if (i._length && (i.setXYAt(i.v[y][0], i.v[y][1], "i", y), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
                a < n - 1 && (i = shapePool.newElement(), _ = !0, g.push(i), b = 0);
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
            var p, o, d, v, b, c;
            for(a = 0; a < s; a += 1)p = t.v[a][0] + (r[0] - t.v[a][0]) * i, o = t.v[a][1] + (r[1] - t.v[a][1]) * i, d = t.o[a][0] + (r[0] - t.o[a][0]) * -i, v = t.o[a][1] + (r[1] - t.o[a][1]) * -i, b = t.i[a][0] + (r[0] - t.i[a][0]) * -i, c = t.i[a][1] + (r[1] - t.i[a][1]) * -i, n.setTripleAt(p, o, d, v, b, c, a);
            return n;
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, i, r = this.shapes.length, s, a, n = this.amount.v;
            if (n !== 0) {
                var p, o;
                for(i = 0; i < r; i += 1){
                    if (p = this.shapes[i], o = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), p.shape._mdf = !0, e = p.shape.paths.shapes, a = p.shape.paths._length, s = 0; s < a; s += 1)o.addShape(this.processPath(e[s], n));
                    p.shape.paths = p.localShapeCollection;
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
                            var v, b;
                            if (d = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (v = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / d, 0), b = this.p.getValueAtTime(this.p.keyframes[0].t / d, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (v = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / d, 0), b = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / d, 0)) : (v = this.p.pv, b = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / d, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                v = [], b = [];
                                var c = this.px, P = this.py;
                                c._caching.lastFrame + c.offsetTime <= c.keyframes[0].t ? (v[0] = c.getValueAtTime((c.keyframes[0].t + .01) / d, 0), v[1] = P.getValueAtTime((P.keyframes[0].t + .01) / d, 0), b[0] = c.getValueAtTime(c.keyframes[0].t / d, 0), b[1] = P.getValueAtTime(P.keyframes[0].t / d, 0)) : c._caching.lastFrame + c.offsetTime >= c.keyframes[c.keyframes.length - 1].t ? (v[0] = c.getValueAtTime(c.keyframes[c.keyframes.length - 1].t / d, 0), v[1] = P.getValueAtTime(P.keyframes[P.keyframes.length - 1].t / d, 0), b[0] = c.getValueAtTime((c.keyframes[c.keyframes.length - 1].t - .01) / d, 0), b[1] = P.getValueAtTime((P.keyframes[P.keyframes.length - 1].t - .01) / d, 0)) : (v = [
                                    c.pv,
                                    P.pv
                                ], b[0] = c.getValueAtTime((c._caching.lastFrame + c.offsetTime - .01) / d, c.offsetTime), b[1] = P.getValueAtTime((P._caching.lastFrame + P.offsetTime - .01) / d, P.offsetTime));
                            } else b = t, v = b;
                            this.v.rotate(-Math.atan2(v[1] - b[1], v[0] - b[0]));
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
                        var b, c = d.or.k.length;
                        for(b = 0; b < c; b += 1)d.or.k[b].to = null, d.or.k[b].ti = null;
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
            function p(o, d, v) {
                return new n(o, d, v);
            }
            return {
                getTransformProperty: p
            };
        }();
        function RepeaterModifier() {}
        extendPrototype([
            ShapeModifier
        ], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix;
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, s, a) {
            var n = a ? -1 : 1, p = r.s.v[0] + (1 - r.s.v[0]) * (1 - s), o = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
            t.translate(r.p.v[0] * n * s, r.p.v[1] * n * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * n * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(a ? 1 / p : p, a ? 1 / o : o), i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
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
                var p = Math.ceil(this.c.v);
                if (this._groups.length < p) {
                    for(; this._groups.length < p;){
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
                    if (d = a < p, this._groups[r]._render = d, this.changeGroupRender(this._groups[r].it, d), !d) {
                        var v = this.elemsData[r].it, b = v[v.length - 1];
                        b.transform.op.v !== 0 ? (b.transform.op._mdf = !0, b.transform.op.v = 0) : b.transform.op._mdf = !1;
                    }
                    a += 1;
                }
                this._currentCopies = p;
                var c = this.o.v, P = c % 1, g = c > 0 ? Math.floor(c) : Math.ceil(c), y = this.pMatrix.props, _ = this.rMatrix.props, f = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var h = 0;
                if (c > 0) {
                    for(; h < g;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), h += 1;
                    P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, P, !1), h += P);
                } else if (c < 0) {
                    for(; h > g;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), h -= 1;
                    P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -P, !0), h -= P);
                }
                r = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
                for(var l, m; a;){
                    if (e = this.elemsData[r].it, i = e[e.length - 1].transform.mProps.v.props, m = i.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), h !== 0) {
                        for((r !== 0 && s === 1 || r !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(_[0], _[1], _[2], _[3], _[4], _[5], _[6], _[7], _[8], _[9], _[10], _[11], _[12], _[13], _[14], _[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), l = 0; l < m; l += 1)i[l] = this.matrix.props[l];
                        this.matrix.reset();
                    } else for(this.matrix.reset(), l = 0; l < m; l += 1)i[l] = this.matrix.props[l];
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
            var r, s = t._length, a, n, p, o, d, v, b = 0, c, P, g, y, _, f;
            for(r = 0; r < s; r += 1)a = t.v[r], p = t.o[r], n = t.i[r], a[0] === p[0] && a[1] === p[1] && a[0] === n[0] && a[1] === n[1] ? (r === 0 || r === s - 1) && !t.c ? (i.setTripleAt(a[0], a[1], p[0], p[1], n[0], n[1], b), b += 1) : (r === 0 ? o = t.v[s - 1] : o = t.v[r - 1], d = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), v = d ? Math.min(d / 2, e) / d : 0, _ = a[0] + (o[0] - a[0]) * v, c = _, f = a[1] - (a[1] - o[1]) * v, P = f, g = c - (c - a[0]) * roundCorner, y = P - (P - a[1]) * roundCorner, i.setTripleAt(c, P, g, y, _, f, b), b += 1, r === s - 1 ? o = t.v[0] : o = t.v[r + 1], d = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), v = d ? Math.min(d / 2, e) / d : 0, g = a[0] + (o[0] - a[0]) * v, c = g, y = a[1] + (o[1] - a[1]) * v, P = y, _ = c - (c - a[0]) * roundCorner, f = P - (P - a[1]) * roundCorner, i.setTripleAt(c, P, g, y, _, f, b), b += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], b), b += 1);
            return i;
        }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, i, r = this.shapes.length, s, a, n = this.rd.v;
            if (n !== 0) {
                var p, o;
                for(i = 0; i < r; i += 1){
                    if (p = this.shapes[i], o = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), p.shape._mdf = !0, e = p.shape.paths.shapes, a = p.shape.paths._length, s = 0; s < a; s += 1)o.addShape(this.processPath(e[s], n));
                    p.shape.paths = p.localShapeCollection;
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
                var p = t.point(a[n])[e];
                p < i ? i = p : p > r && (r = p);
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
                var n = splitData(t), p = splitData(e);
                intersectsImpl(n[0], p[0], i + 1, r, s, a), intersectsImpl(n[0], p[1], i + 1, r, s, a), intersectsImpl(n[1], p[0], i + 1, r, s, a), intersectsImpl(n[1], p[1], i + 1, r, s, a);
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
            ], p = [
                r[0],
                r[1],
                1
            ], o = crossProduct(crossProduct(s, a), crossProduct(n, p));
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
            var p = i - Math.PI / 2, o = i + Math.PI / 2, d = e[0] + Math.cos(i) * r * s, v = e[1] - Math.sin(i) * r * s;
            t.setTripleAt(d, v, d + Math.cos(p) * a, v - Math.sin(p) * a, d + Math.cos(o) * n, v - Math.sin(o) * n, t.length());
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
            var p = getProjectingAngle(e, i), o = e.v[i % e._length], d = e.v[i === 0 ? e._length - 1 : i - 1], v = e.v[(i + 1) % e._length], b = a === 2 ? Math.sqrt(Math.pow(o[0] - d[0], 2) + Math.pow(o[1] - d[1], 2)) : 0, c = a === 2 ? Math.sqrt(Math.pow(o[0] - v[0], 2) + Math.pow(o[1] - v[1], 2)) : 0;
            setPoint(t, e.v[i % e._length], p, n, r, c / ((s + 1) * 2), b / ((s + 1) * 2));
        }
        function zigZagSegment(t, e, i, r, s, a) {
            for(var n = 0; n < r; n += 1){
                var p = (n + 1) / (r + 1), o = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, d = e.normalAngle(p), v = e.point(p);
                setPoint(t, v, d, a, i, o / ((r + 1) * 2), o / ((r + 1) * 2)), a = -a;
            }
            return a;
        }
        ZigZagModifier.prototype.processPath = function(t, e, i, r) {
            var s = t._length, a = shapePool.newElement();
            if (a.c = t.c, t.c || (s -= 1), s === 0) return a;
            var n = -1, p = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(a, t, 0, e, i, r, n);
            for(var o = 0; o < s; o += 1)n = zigZagSegment(a, p, e, i, r, -n), o === s - 1 && !t.c ? p = null : p = PolynomialBezier.shapeSegment(t, (o + 1) % s), zigZagCorner(a, t, o + 1, e, i, r, n);
            return a;
        }, ZigZagModifier.prototype.processShapes = function(t) {
            var e, i, r = this.shapes.length, s, a, n = this.amplitude.v, p = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
            if (n !== 0) {
                var d, v;
                for(i = 0; i < r; i += 1){
                    if (d = this.shapes[i], v = d.localShapeCollection, !(!d.shape._mdf && !this._mdf && !t)) for(v.releaseShapes(), d.shape._mdf = !0, e = d.shape.paths.shapes, a = d.shape.paths._length, s = 0; s < a; s += 1)v.addShape(this.processPath(e[s], n, p, o));
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
            var i, r, s, a, n, p, o;
            o = linearOffset(t.points[0], t.points[1], e), i = o[0], r = o[1], o = linearOffset(t.points[1], t.points[2], e), s = o[0], a = o[1], o = linearOffset(t.points[2], t.points[3], e), n = o[0], p = o[1];
            var d = lineIntersection(i, r, s, a);
            d === null && (d = r);
            var v = lineIntersection(n, p, s, a);
            return v === null && (v = n), new PolynomialBezier(i, d, v, p);
        }
        function joinLines(t, e, i, r, s) {
            var a = e.points[3], n = i.points[0];
            if (r === 3 || pointEqual(a, n)) return a;
            if (r === 2) {
                var p = -e.tangentAngle(1), o = -i.tangentAngle(0) + Math.PI, d = lineIntersection(a, polarOffset(a, p + Math.PI / 2, 100), n, polarOffset(n, p + Math.PI / 2, 100)), v = d ? pointDistance(d, a) : pointDistance(a, n) / 2, b = polarOffset(a, p, 2 * v * roundCorner);
                return t.setXYAt(b[0], b[1], "o", t.length() - 1), b = polarOffset(n, o, 2 * v * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], b[0], b[1], t.length()), n;
            }
            var c = pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], P = pointEqual(n, i.points[1]) ? i.points[3] : i.points[1], g = lineIntersection(c, a, n, P);
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
            var p = (i[1] - i[0]) / (1 - i[0]);
            return a = a[1].split(p), n = a[0], s = a[1], [
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
            var n, p, o, d = [];
            for(n = 0; n < a; n += 1)o = PolynomialBezier.shapeSegment(t, n), d.push(offsetSegmentSplit(o, e));
            if (!t.c) for(n = a - 1; n >= 0; n -= 1)o = PolynomialBezier.shapeSegmentInverted(t, n), d.push(offsetSegmentSplit(o, e));
            d = pruneIntersections(d);
            var v = null, b = null;
            for(n = 0; n < d.length; n += 1){
                var c = d[n];
                for(b && (v = joinLines(s, b, c[0], i, r)), b = c[c.length - 1], p = 0; p < c.length; p += 1)o = c[p], v && pointEqual(o.points[0], v) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), v = o.points[3];
            }
            return d.length && joinLines(s, b, d[0][0], i, r), s;
        }, OffsetPathModifier.prototype.processShapes = function(t) {
            var e, i, r = this.shapes.length, s, a, n = this.amount.v, p = this.miterLimit.v, o = this.lineJoin;
            if (n !== 0) {
                var d, v;
                for(i = 0; i < r; i += 1){
                    if (d = this.shapes[i], v = d.localShapeCollection, !(!d.shape._mdf && !this._mdf && !t)) for(v.releaseShapes(), d.shape._mdf = !0, e = d.shape.paths.shapes, a = d.shape.paths._length, s = 0; s < a; s += 1)v.addShape(this.processPath(e[s], n, o, p));
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
            var r = 127988, s = 917631, a = 917601, n = 917626, p = 65039, o = 8205, d = 127462, v = 127487, b = [
                "d83cdffb",
                "d83cdffc",
                "d83cdffd",
                "d83cdffe",
                "d83cdfff"
            ];
            function c(x) {
                var E = x.split(","), u, C = E.length, M = [];
                for(u = 0; u < C; u += 1)E[u] !== "sans-serif" && E[u] !== "monospace" && M.push(E[u]);
                return M.join(",");
            }
            function P(x, E) {
                var u = createTag("span");
                u.setAttribute("aria-hidden", !0), u.style.fontFamily = E;
                var C = createTag("span");
                C.innerText = "giItT1WQy@!-/#", u.style.position = "absolute", u.style.left = "-10000px", u.style.top = "-10000px", u.style.fontSize = "300px", u.style.fontVariant = "normal", u.style.fontStyle = "normal", u.style.fontWeight = "normal", u.style.letterSpacing = "0", u.appendChild(C), document.body.appendChild(u);
                var M = C.offsetWidth;
                return C.style.fontFamily = c(x) + ", " + E, {
                    node: C,
                    w: M,
                    parent: u
                };
            }
            function g() {
                var x, E = this.fonts.length, u, C, M = E;
                for(x = 0; x < E; x += 1)this.fonts[x].loaded ? M -= 1 : this.fonts[x].fOrigin === "n" || this.fonts[x].origin === 0 ? this.fonts[x].loaded = !0 : (u = this.fonts[x].monoCase.node, C = this.fonts[x].monoCase.w, u.offsetWidth !== C ? (M -= 1, this.fonts[x].loaded = !0) : (u = this.fonts[x].sansCase.node, C = this.fonts[x].sansCase.w, u.offsetWidth !== C && (M -= 1, this.fonts[x].loaded = !0)), this.fonts[x].loaded && (this.fonts[x].sansCase.parent.parentNode.removeChild(this.fonts[x].sansCase.parent), this.fonts[x].monoCase.parent.parentNode.removeChild(this.fonts[x].monoCase.parent)));
                M !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function y(x, E) {
                var u = document.body && E ? "svg" : "canvas", C, M = getFontProperties(x);
                if (u === "svg") {
                    var k = createNS("text");
                    k.style.fontSize = "100px", k.setAttribute("font-family", x.fFamily), k.setAttribute("font-style", M.style), k.setAttribute("font-weight", M.weight), k.textContent = "1", x.fClass ? (k.style.fontFamily = "inherit", k.setAttribute("class", x.fClass)) : k.style.fontFamily = x.fFamily, E.appendChild(k), C = k;
                } else {
                    var z = new OffscreenCanvas(500, 500).getContext("2d");
                    z.font = M.style + " " + M.weight + " 100px " + x.fFamily, C = z;
                }
                function O(j) {
                    return u === "svg" ? (C.textContent = j, C.getComputedTextLength()) : C.measureText(j).width;
                }
                return {
                    measureText: O
                };
            }
            function _(x, E) {
                if (!x) {
                    this.isLoaded = !0;
                    return;
                }
                if (this.chars) {
                    this.isLoaded = !0, this.fonts = x.list;
                    return;
                }
                if (!document.body) {
                    this.isLoaded = !0, x.list.forEach(function(J) {
                        J.helper = y(J), J.cache = {};
                    }), this.fonts = x.list;
                    return;
                }
                var u = x.list, C, M = u.length, k = M;
                for(C = 0; C < M; C += 1){
                    var z = !0, O, j;
                    if (u[C].loaded = !1, u[C].monoCase = P(u[C].fFamily, "monospace"), u[C].sansCase = P(u[C].fFamily, "sans-serif"), !u[C].fPath) u[C].loaded = !0, k -= 1;
                    else if (u[C].fOrigin === "p" || u[C].origin === 3) {
                        if (O = document.querySelectorAll('style[f-forigin="p"][f-family="' + u[C].fFamily + '"], style[f-origin="3"][f-family="' + u[C].fFamily + '"]'), O.length > 0 && (z = !1), z) {
                            var N = createTag("style");
                            N.setAttribute("f-forigin", u[C].fOrigin), N.setAttribute("f-origin", u[C].origin), N.setAttribute("f-family", u[C].fFamily), N.type = "text/css", N.innerText = "@font-face {font-family: " + u[C].fFamily + "; font-style: normal; src: url('" + u[C].fPath + "');}", E.appendChild(N);
                        }
                    } else if (u[C].fOrigin === "g" || u[C].origin === 1) {
                        for(O = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), j = 0; j < O.length; j += 1)O[j].href.indexOf(u[C].fPath) !== -1 && (z = !1);
                        if (z) {
                            var W = createTag("link");
                            W.setAttribute("f-forigin", u[C].fOrigin), W.setAttribute("f-origin", u[C].origin), W.type = "text/css", W.rel = "stylesheet", W.href = u[C].fPath, document.body.appendChild(W);
                        }
                    } else if (u[C].fOrigin === "t" || u[C].origin === 2) {
                        for(O = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), j = 0; j < O.length; j += 1)u[C].fPath === O[j].src && (z = !1);
                        if (z) {
                            var H = createTag("link");
                            H.setAttribute("f-forigin", u[C].fOrigin), H.setAttribute("f-origin", u[C].origin), H.setAttribute("rel", "stylesheet"), H.setAttribute("href", u[C].fPath), E.appendChild(H);
                        }
                    }
                    u[C].helper = y(u[C], E), u[C].cache = {}, this.fonts.push(u[C]);
                }
                k === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function f(x) {
                if (x) {
                    this.chars || (this.chars = []);
                    var E, u = x.length, C, M = this.chars.length, k;
                    for(E = 0; E < u; E += 1){
                        for(C = 0, k = !1; C < M;)this.chars[C].style === x[E].style && this.chars[C].fFamily === x[E].fFamily && this.chars[C].ch === x[E].ch && (k = !0), C += 1;
                        k || (this.chars.push(x[E]), M += 1);
                    }
                }
            }
            function h(x, E, u) {
                for(var C = 0, M = this.chars.length; C < M;){
                    if (this.chars[C].ch === x && this.chars[C].style === E && this.chars[C].fFamily === u) return this.chars[C];
                    C += 1;
                }
                return (typeof x == "string" && x.charCodeAt(0) !== 13 || !x) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", x, E, u)), e;
            }
            function l(x, E, u) {
                var C = this.getFontByName(E), M = x;
                if (!C.cache[M]) {
                    var k = C.helper;
                    if (x === " ") {
                        var z = k.measureText("|" + x + "|"), O = k.measureText("||");
                        C.cache[M] = (z - O) / 100;
                    } else C.cache[M] = k.measureText(x) / 100;
                }
                return C.cache[M] * u;
            }
            function m(x) {
                for(var E = 0, u = this.fonts.length; E < u;){
                    if (this.fonts[E].fName === x) return this.fonts[E];
                    E += 1;
                }
                return this.fonts[0];
            }
            function S(x) {
                var E = 0, u = x.charCodeAt(0);
                if (u >= 55296 && u <= 56319) {
                    var C = x.charCodeAt(1);
                    C >= 56320 && C <= 57343 && (E = (u - 55296) * 1024 + C - 56320 + 65536);
                }
                return E;
            }
            function T(x, E) {
                var u = x.toString(16) + E.toString(16);
                return b.indexOf(u) !== -1;
            }
            function A(x) {
                return x === o;
            }
            function D(x) {
                return x === p;
            }
            function I(x) {
                var E = S(x);
                return E >= d && E <= v;
            }
            function R(x) {
                return I(x.substr(0, 2)) && I(x.substr(2, 2));
            }
            function L(x) {
                return i.indexOf(x) !== -1;
            }
            function V(x, E) {
                var u = S(x.substr(E, 2));
                if (u !== r) return !1;
                var C = 0;
                for(E += 2; C < 5;){
                    if (u = S(x.substr(E, 2)), u < a || u > n) return !1;
                    C += 1, E += 2;
                }
                return S(x.substr(E, 2)) === s;
            }
            function B() {
                this.isLoaded = !0;
            }
            var F = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            F.isModifier = T, F.isZeroWidthJoiner = A, F.isFlagEmoji = R, F.isRegionalCode = I, F.isCombinedCharacter = L, F.isRegionalFlag = V, F.isVariationSelector = D, F.BLACK_FLAG_CODE_POINT = r;
            var w = {
                addChars: f,
                addFonts: _,
                getCharData: h,
                getFontByName: m,
                measureText: l,
                checkLoadedFonts: g,
                setIsLoaded: B
            };
            return F.prototype = w, F;
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
            var n, p = this.masksProperties, o = 0, d = [], v, b, c = createElementID(), P, g, y, _, f = "clipPath", h = "clip-path";
            for(s = 0; s < a; s += 1)if ((p[s].mode !== "a" && p[s].mode !== "n" || p[s].inv || p[s].o.k !== 100 || p[s].o.x) && (f = "mask", h = "mask"), (p[s].mode === "s" || p[s].mode === "i") && o === 0 ? (P = createNS("rect"), P.setAttribute("fill", "#ffffff"), P.setAttribute("width", this.element.comp.data.w || 0), P.setAttribute("height", this.element.comp.data.h || 0), d.push(P)) : P = null, n = createNS("path"), p[s].mode === "n") this.viewData[s] = {
                op: PropertyFactory.getProp(this.element, p[s].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, p[s], 3),
                elem: n,
                lastPath: ""
            }, r.appendChild(n);
            else {
                o += 1, n.setAttribute("fill", p[s].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
                var l;
                if (p[s].x.k !== 0 ? (f = "mask", h = "mask", _ = PropertyFactory.getProp(this.element, p[s].x, 0, null, this.element), l = createElementID(), g = createNS("filter"), g.setAttribute("id", l), y = createNS("feMorphology"), y.setAttribute("operator", "erode"), y.setAttribute("in", "SourceGraphic"), y.setAttribute("radius", "0"), g.appendChild(y), r.appendChild(g), n.setAttribute("stroke", p[s].mode === "s" ? "#000000" : "#ffffff")) : (y = null, _ = null), this.storedData[s] = {
                    elem: n,
                    x: _,
                    expan: y,
                    lastPath: "",
                    lastOperator: "",
                    filterId: l,
                    lastRadius: 0
                }, p[s].mode === "i") {
                    b = d.length;
                    var m = createNS("g");
                    for(v = 0; v < b; v += 1)m.appendChild(d[v]);
                    var S = createNS("mask");
                    S.setAttribute("mask-type", "alpha"), S.setAttribute("id", c + "_" + o), S.appendChild(n), r.appendChild(S), m.setAttribute("mask", "url(" + getLocationHref() + "#" + c + "_" + o + ")"), d.length = 0, d.push(m);
                } else d.push(n);
                p[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                    elem: n,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, p[s].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, p[s], 3),
                    invRect: P
                }, this.viewData[s].prop.k || this.drawPath(p[s], this.viewData[s].prop.v, this.viewData[s]);
            }
            for(this.maskElement = createNS(f), a = d.length, s = 0; s < a; s += 1)this.maskElement.appendChild(d[s]);
            o > 0 && (this.maskElement.setAttribute("id", c), this.element.maskedElement.setAttribute(h, "url(" + getLocationHref() + "#" + c + ")"), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
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
            var p;
            for(e = 0; e < r; e += 1){
                p = null;
                var o = t.data.ef[e].ty;
                if (registeredEffects$1[o]) {
                    var d = registeredEffects$1[o].effect;
                    p = new d(a, t.effectsManager.effectElements[e], t, idPrefix + n, i), i = idPrefix + n, registeredEffects$1[o].countsAsEffect && (n += 1);
                }
                p && this.filters.push(p);
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
                        var p = createNS("mask");
                        p.setAttribute("id", e), p.setAttribute("mask-type", "alpha");
                        var o = createNS("g");
                        p.appendChild(o), i = createElementID(), r = filtersFactory.createFilter(i);
                        var d = createNS("feComponentTransfer");
                        d.setAttribute("in", "SourceGraphic"), r.appendChild(d);
                        var v = createNS("feFuncA");
                        v.setAttribute("type", "table"), v.setAttribute("tableValues", "1.0 0.0"), d.appendChild(v), this.globalData.defs.appendChild(r);
                        var b = createNS("rect");
                        b.setAttribute("width", this.comp.data.w), b.setAttribute("height", this.comp.data.h), b.setAttribute("x", "0"), b.setAttribute("y", "0"), b.setAttribute("fill", "#ffffff"), b.setAttribute("opacity", "0"), o.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), o.appendChild(b), s = createNS("use"), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o.appendChild(s), featureSupport.maskType || (p.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), o.appendChild(b), a.appendChild(this.layerElement), o.appendChild(a)), this.globalData.defs.appendChild(p);
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
            var s = [], a, n, p;
            for(p = e.g.p * 4, n = 0; n < p; n += 4)a = createNS("stop"), r.appendChild(a), s.push(a);
            t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"), this.gf = r, this.cst = s;
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var i, r, s, a = createNS("mask"), n = createNS("path");
                a.appendChild(n);
                var p = createElementID(), o = createElementID();
                a.setAttribute("id", o);
                var d = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
                d.setAttribute("id", p), d.setAttribute("spreadMethod", "pad"), d.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var v = this.stops;
                for(r = t.g.p * 4; r < s; r += 2)i = createNS("stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), d.appendChild(i), v.push(i);
                n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + p + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = d, this.ms = a, this.ost = v, this.maskId = o, e.msElem = n;
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
            var s = t.o, a = t.i, n = t.v, p, o = " M" + r.applyToPointStringified(n[0][0], n[0][1]);
            for(p = 1; p < e; p += 1)o += " C" + r.applyToPointStringified(s[p - 1][0], s[p - 1][1]) + " " + r.applyToPointStringified(a[p][0], a[p][1]) + " " + r.applyToPointStringified(n[p][0], n[p][1]);
            return i && e && (o += " C" + r.applyToPointStringified(s[p - 1][0], s[p - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(n[0][0], n[0][1]), o += "z"), o;
        }, SVGElementsRenderer = function() {
            var t = new Matrix, e = new Matrix, i = {
                createRenderFunction: r
            };
            function r(b) {
                switch(b.ty){
                    case "fl":
                        return p;
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
            function s(b, c, P) {
                (P || c.transform.op._mdf) && c.transform.container.setAttribute("opacity", c.transform.op.v), (P || c.transform.mProps._mdf) && c.transform.container.setAttribute("transform", c.transform.mProps.v.to2dCSS());
            }
            function a() {}
            function n(b, c, P) {
                var g, y, _, f, h, l, m = c.styles.length, S = c.lvl, T, A, D, I;
                for(l = 0; l < m; l += 1){
                    if (f = c.sh._mdf || P, c.styles[l].lvl < S) {
                        for(A = e.reset(), D = S - c.styles[l].lvl, I = c.transformers.length - 1; !f && D > 0;)f = c.transformers[I].mProps._mdf || f, D -= 1, I -= 1;
                        if (f) for(D = S - c.styles[l].lvl, I = c.transformers.length - 1; D > 0;)A.multiply(c.transformers[I].mProps.v), D -= 1, I -= 1;
                    } else A = t;
                    if (T = c.sh.paths, y = T._length, f) {
                        for(_ = "", g = 0; g < y; g += 1)h = T.shapes[g], h && h._length && (_ += buildShapeString(h, h._length, h.c, A));
                        c.caches[l] = _;
                    } else _ = c.caches[l];
                    c.styles[l].d += b.hd === !0 ? "" : _, c.styles[l]._mdf = f || c.styles[l]._mdf;
                }
            }
            function p(b, c, P) {
                var g = c.style;
                (c.c._mdf || P) && g.pElem.setAttribute("fill", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || P) && g.pElem.setAttribute("fill-opacity", c.o.v);
            }
            function o(b, c, P) {
                d(b, c, P), v(b, c, P);
            }
            function d(b, c, P) {
                var g = c.gf, y = c.g._hasOpacity, _ = c.s.v, f = c.e.v;
                if (c.o._mdf || P) {
                    var h = b.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                    c.style.pElem.setAttribute(h, c.o.v);
                }
                if (c.s._mdf || P) {
                    var l = b.t === 1 ? "x1" : "cx", m = l === "x1" ? "y1" : "cy";
                    g.setAttribute(l, _[0]), g.setAttribute(m, _[1]), y && !c.g._collapsable && (c.of.setAttribute(l, _[0]), c.of.setAttribute(m, _[1]));
                }
                var S, T, A, D;
                if (c.g._cmdf || P) {
                    S = c.cst;
                    var I = c.g.c;
                    for(A = S.length, T = 0; T < A; T += 1)D = S[T], D.setAttribute("offset", I[T * 4] + "%"), D.setAttribute("stop-color", "rgb(" + I[T * 4 + 1] + "," + I[T * 4 + 2] + "," + I[T * 4 + 3] + ")");
                }
                if (y && (c.g._omdf || P)) {
                    var R = c.g.o;
                    for(c.g._collapsable ? S = c.cst : S = c.ost, A = S.length, T = 0; T < A; T += 1)D = S[T], c.g._collapsable || D.setAttribute("offset", R[T * 2] + "%"), D.setAttribute("stop-opacity", R[T * 2 + 1]);
                }
                if (b.t === 1) (c.e._mdf || P) && (g.setAttribute("x2", f[0]), g.setAttribute("y2", f[1]), y && !c.g._collapsable && (c.of.setAttribute("x2", f[0]), c.of.setAttribute("y2", f[1])));
                else {
                    var L;
                    if ((c.s._mdf || c.e._mdf || P) && (L = Math.sqrt(Math.pow(_[0] - f[0], 2) + Math.pow(_[1] - f[1], 2)), g.setAttribute("r", L), y && !c.g._collapsable && c.of.setAttribute("r", L)), c.e._mdf || c.h._mdf || c.a._mdf || P) {
                        L || (L = Math.sqrt(Math.pow(_[0] - f[0], 2) + Math.pow(_[1] - f[1], 2)));
                        var V = Math.atan2(f[1] - _[1], f[0] - _[0]), B = c.h.v;
                        B >= 1 ? B = .99 : B <= -1 && (B = -0.99);
                        var F = L * B, w = Math.cos(V + c.a.v) * F + _[0], x = Math.sin(V + c.a.v) * F + _[1];
                        g.setAttribute("fx", w), g.setAttribute("fy", x), y && !c.g._collapsable && (c.of.setAttribute("fx", w), c.of.setAttribute("fy", x));
                    }
                }
            }
            function v(b, c, P) {
                var g = c.style, y = c.d;
                y && (y._mdf || P) && y.dashStr && (g.pElem.setAttribute("stroke-dasharray", y.dashStr), g.pElem.setAttribute("stroke-dashoffset", y.dashoffset[0])), c.c && (c.c._mdf || P) && g.pElem.setAttribute("stroke", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || P) && g.pElem.setAttribute("stroke-opacity", c.o.v), (c.w._mdf || P) && (g.pElem.setAttribute("stroke-width", c.w.v), g.msElem && g.msElem.setAttribute("stroke-width", c.w.v));
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
            var t, e = this.shapes.length, i, r, s = this.stylesList.length, a, n = [], p = !1;
            for(r = 0; r < s; r += 1){
                for(a = this.stylesList[r], p = !1, n.length = 0, t = 0; t < e; t += 1)i = this.shapes[t], i.styles.indexOf(a) !== -1 && (n.push(i), p = i._isAnimated || p);
                n.length > 1 && p && this.setShapesAsAnimated(n);
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
            var p = [].concat(a), o, d = t.length - 1, v, b, c = [], P = [], g, y, _;
            for(o = d; o >= 0; o -= 1){
                if (_ = this.searchProcessedElement(t[o]), _ ? e[o] = i[_ - 1] : t[o]._render = n, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") _ ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), c.push(e[o].style);
                else if (t[o].ty === "gr") {
                    if (!_) e[o] = this.createGroupElement(t[o]);
                    else for(b = e[o].it.length, v = 0; v < b; v += 1)e[o].prevViewData[v] = e[o].it[v];
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, p, n), t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr);
                } else t[o].ty === "tr" ? (_ || (e[o] = this.createTransformElement(t[o], r)), g = e[o].transform, p.push(g)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (_ || (e[o] = this.createShapeElement(t[o], p, s)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (_ ? (y = e[o], y.closed = !1) : (y = ShapeModifiers.getModifier(t[o].ty), y.init(this, t[o]), e[o] = y, this.shapeModifiers.push(y)), P.push(y)) : t[o].ty === "rp" && (_ ? (y = e[o], y.closed = !0) : (y = ShapeModifiers.getModifier(t[o].ty), e[o] = y, y.init(this, t, o, e), this.shapeModifiers.push(y), n = !1), P.push(y));
                this.addProcessedElement(t[o], o + 1);
            }
            for(d = c.length, o = 0; o < d; o += 1)c[o].closed = !0;
            for(d = P.length, o = 0; o < d; o += 1)P[o].closed = !0;
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
            for(var e = [], i = 0, r = t.length, s, a, n = !1, p = !1, o = ""; i < r;)n = p, p = !1, s = t.charCodeAt(i), o = t.charAt(i), FontManager.isCombinedCharacter(s) ? n = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, i) ? o = t.substr(i, 14) : (a = t.charCodeAt(i + 1), a >= 56320 && a <= 57343 && (FontManager.isModifier(s, a) ? (o = t.substr(i, 2), n = !0) : FontManager.isFlagEmoji(t.substr(i, 4)) ? o = t.substr(i, 4) : o = t.substr(i, 2))) : s > 56319 ? (a = t.charCodeAt(i + 1), FontManager.isVariationSelector(s) && (n = !0)) : FontManager.isZeroWidthJoiner(s) && (n = !0, p = !0), n ? (e[e.length - 1] += o, n = !1) : e.push(o), i += o.length;
            return e;
        }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e = this.elem.globalData.fontManager, i = this.data, r = [], s, a, n, p = 0, o, d = i.m.g, v = 0, b = 0, c = 0, P = [], g = 0, y = 0, _, f, h = e.getFontByName(t.f), l, m = 0, S = getFontProperties(h);
            t.fWeight = S.weight, t.fStyle = S.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), a = t.finalText.length, t.finalLineHeight = t.lh;
            var T = t.tr / 1e3 * t.finalSize, A;
            if (t.sz) for(var D = !0, I = t.sz[0], R = t.sz[1], L, V; D;){
                V = this.buildFinalText(t.t), L = 0, g = 0, a = V.length, T = t.tr / 1e3 * t.finalSize;
                var B = -1;
                for(s = 0; s < a; s += 1)A = V[s].charCodeAt(0), n = !1, V[s] === " " ? B = s : (A === 13 || A === 3) && (g = 0, n = !0, L += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (l = e.getCharData(V[s], h.fStyle, h.fFamily), m = n ? 0 : l.w * t.finalSize / 100) : m = e.measureText(V[s], t.f, t.finalSize), g + m > I && V[s] !== " " ? (B === -1 ? a += 1 : s = B, L += t.finalLineHeight || t.finalSize * 1.2, V.splice(s, B === s ? 1 : 0, "\r"), B = -1, g = 0) : (g += m, g += T);
                L += h.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && R < L ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = V, a = t.finalText.length, D = !1);
            }
            g = -T, m = 0;
            var F = 0, w;
            for(s = 0; s < a; s += 1)if (n = !1, w = t.finalText[s], A = w.charCodeAt(0), A === 13 || A === 3 ? (F = 0, P.push(g), y = g > y ? g : y, g = -2 * T, o = "", n = !0, c += 1) : o = w, e.chars ? (l = e.getCharData(w, h.fStyle, e.getFontByName(t.f).fFamily), m = n ? 0 : l.w * t.finalSize / 100) : m = e.measureText(o, t.f, t.finalSize), w === " " ? F += m + T : (g += m + T + F, F = 0), r.push({
                l: m,
                an: m,
                add: v,
                n,
                anIndexes: [],
                val: o,
                line: c,
                animatorJustifyOffset: 0
            }), d == 2) {
                if (v += m, o === "" || o === " " || s === a - 1) {
                    for((o === "" || o === " ") && (v -= m); b <= s;)r[b].an = v, r[b].ind = p, r[b].extra = m, b += 1;
                    p += 1, v = 0;
                }
            } else if (d == 3) {
                if (v += m, o === "" || s === a - 1) {
                    for(o === "" && (v -= m); b <= s;)r[b].an = v, r[b].ind = p, r[b].extra = m, b += 1;
                    v = 0, p += 1;
                }
            } else r[p].ind = p, r[p].extra = 0, p += 1;
            if (t.l = r, y = g > y ? g : y, P.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
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
            t.lineWidths = P;
            var x = i.a, E, u;
            f = x.length;
            var C, M, k = [];
            for(_ = 0; _ < f; _ += 1){
                for(E = x[_], E.a.sc && (t.strokeColorAnim = !0), E.a.sw && (t.strokeWidthAnim = !0), (E.a.fc || E.a.fh || E.a.fs || E.a.fb) && (t.fillColorAnim = !0), M = 0, C = E.s.b, s = 0; s < a; s += 1)u = r[s], u.anIndexes[_] = M, (C == 1 && u.val !== "" || C == 2 && u.val !== "" && u.val !== " " || C == 3 && (u.n || u.val == " " || s == a - 1) || C == 4 && (u.n || s == a - 1)) && (E.s.rn === 1 && k.push(M), M += 1);
                i.a[_].s.totalChars = M;
                var z = -1, O;
                if (E.s.rn === 1) for(s = 0; s < a; s += 1)u = r[s], z != u.anIndexes[_] && (z = u.anIndexes[_], O = k.splice(Math.floor(Math.random() * k.length), 1)[0]), u.anIndexes[_] = O;
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
                    var n = 0, p = 0, o = 1, d = 1;
                    this.ne.v > 0 ? n = this.ne.v / 100 : p = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : d = 1 + this.xe.v / 100;
                    var v = BezierFactory.getBezierEasing(n, p, o, d).get, b = 0, c = this.finalS, P = this.finalE, g = this.data.sh;
                    if (g === 2) P === c ? b = a >= P ? 1 : 0 : b = t(0, e(.5 / (P - c) + (a - c) / (P - c), 1)), b = v(b);
                    else if (g === 3) P === c ? b = a >= P ? 0 : 1 : b = 1 - t(0, e(.5 / (P - c) + (a - c) / (P - c), 1)), b = v(b);
                    else if (g === 4) P === c ? b = 0 : (b = t(0, e(.5 / (P - c) + (a - c) / (P - c), 1)), b < .5 ? b *= 2 : b = 1 - 2 * (b - .5)), b = v(b);
                    else if (g === 5) {
                        if (P === c) b = 0;
                        else {
                            var y = P - c;
                            a = e(t(0, a + .5 - c), P - c);
                            var _ = -y / 2 + a, f = y / 2;
                            b = Math.sqrt(1 - _ * _ / (f * f));
                        }
                        b = v(b);
                    } else g === 6 ? (P === c ? b = 0 : (a = e(t(0, a + .5 - c), P - c), b = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (P - c))) / 2), b = v(b)) : (a >= i(c) && (a - c < 0 ? b = t(0, e(e(P, 1) - (c - a), 1)) : b = t(0, e(P - a, 1))), b = v(b));
                    if (this.sm.v !== 100) {
                        var h = this.sm.v * .01;
                        h === 0 && (h = 1e-8);
                        var l = .5 - h * .5;
                        b < l ? b = 0 : (b = (b - l) / h, b > 1 && (b = 1));
                    }
                    return b * this.a.v;
                },
                getValue: function(a) {
                    this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var n = this.data.r === 2 ? 1 : 100 / this.data.totalChars, p = this.o.v / n, o = this.s.v / n + p, d = this.e.v / n + p;
                    if (o > d) {
                        var v = o;
                        o = d, d = v;
                    }
                    this.finalS = o, this.finalE = d;
                }
            }, extendPrototype([
                DynamicPropertyContainer
            ], r);
            function s(a, n, p) {
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
                var i = this._moreOptions.alignment.v, r = this._animatorsData, s = this._textData, a = this.mHelper, n = this._renderType, p = this.renderedLetters.length, o, d, v, b, c = t.l, P, g, y, _, f, h, l, m, S, T, A, D, I, R, L;
                if (this._hasMaskedPath) {
                    if (L = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var V = L.v;
                        this._pathData.r.v && (V = V.reverse()), P = {
                            tLength: 0,
                            segments: []
                        }, b = V._length - 1;
                        var B;
                        for(D = 0, v = 0; v < b; v += 1)B = bez.buildBezierData(V.v[v], V.v[v + 1], [
                            V.o[v][0] - V.v[v][0],
                            V.o[v][1] - V.v[v][1]
                        ], [
                            V.i[v + 1][0] - V.v[v + 1][0],
                            V.i[v + 1][1] - V.v[v + 1][1]
                        ]), P.tLength += B.segmentLength, P.segments.push(B), D += B.segmentLength;
                        v = b, L.v.c && (B = bez.buildBezierData(V.v[v], V.v[0], [
                            V.o[v][0] - V.v[v][0],
                            V.o[v][1] - V.v[v][1]
                        ], [
                            V.i[0][0] - V.v[0][0],
                            V.i[0][1] - V.v[0][1]
                        ]), P.tLength += B.segmentLength, P.segments.push(B), D += B.segmentLength), this._pathData.pi = P;
                    }
                    if (P = this._pathData.pi, g = this._pathData.f.v, l = 0, h = 1, _ = 0, f = !0, T = P.segments, g < 0 && L.v.c) for(P.tLength < Math.abs(g) && (g = -Math.abs(g) % P.tLength), l = T.length - 1, S = T[l].points, h = S.length - 1; g < 0;)g += S[h].partialLength, h -= 1, h < 0 && (l -= 1, S = T[l].points, h = S.length - 1);
                    S = T[l].points, m = S[h - 1], y = S[h], A = y.partialLength;
                }
                b = c.length, o = 0, d = 0;
                var F = t.finalSize * 1.2 * .714, w = !0, x, E, u, C, M;
                C = r.length;
                var k, z = -1, O, j, N, W = g, H = l, J = h, Q = -1, Y, $, Z, q, G, et, at, it, tt = "", rt = this.defaultPropsArray, st;
                if (t.j === 2 || t.j === 1) {
                    var X = 0, nt = 0, ot = t.j === 2 ? -0.5 : -1, K = 0, ht = !0;
                    for(v = 0; v < b; v += 1)if (c[v].n) {
                        for(X && (X += nt); K < v;)c[K].animatorJustifyOffset = X, K += 1;
                        X = 0, ht = !0;
                    } else {
                        for(u = 0; u < C; u += 1)x = r[u].a, x.t.propType && (ht && t.j === 2 && (nt += x.t.v * ot), E = r[u].s, k = E.getMult(c[v].anIndexes[u], s.a[u].s.totalChars), k.length ? X += x.t.v * k[0] * ot : X += x.t.v * k * ot);
                        ht = !1;
                    }
                    for(X && (X += nt); K < v;)c[K].animatorJustifyOffset = X, K += 1;
                }
                for(v = 0; v < b; v += 1){
                    if (a.reset(), Y = 1, c[v].n) o = 0, d += t.yOffset, d += w ? 1 : 0, g = W, w = !1, this._hasMaskedPath && (l = H, h = J, S = T[l].points, m = S[h - 1], y = S[h], A = y.partialLength, _ = 0), tt = "", it = "", et = "", st = "", rt = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Q !== c[v].line) {
                                switch(t.j){
                                    case 1:
                                        g += D - t.lineWidths[c[v].line];
                                        break;
                                    case 2:
                                        g += (D - t.lineWidths[c[v].line]) / 2;
                                        break;
                                }
                                Q = c[v].line;
                            }
                            z !== c[v].ind && (c[z] && (g += c[z].extra), g += c[v].an / 2, z = c[v].ind), g += i[0] * c[v].an * .005;
                            var U = 0;
                            for(u = 0; u < C; u += 1)x = r[u].a, x.p.propType && (E = r[u].s, k = E.getMult(c[v].anIndexes[u], s.a[u].s.totalChars), k.length ? U += x.p.v[0] * k[0] : U += x.p.v[0] * k), x.a.propType && (E = r[u].s, k = E.getMult(c[v].anIndexes[u], s.a[u].s.totalChars), k.length ? U += x.a.v[0] * k[0] : U += x.a.v[0] * k);
                            for(f = !0, this._pathData.a.v && (g = c[0].an * .5 + (D - this._pathData.f.v - c[0].an * .5 - c[c.length - 1].an * .5) * z / (b - 1), g += this._pathData.f.v); f;)_ + A >= g + U || !S ? (I = (g + U - _) / y.partialLength, j = m.point[0] + (y.point[0] - m.point[0]) * I, N = m.point[1] + (y.point[1] - m.point[1]) * I, a.translate(-i[0] * c[v].an * .005, -(i[1] * F) * .01), f = !1) : S && (_ += y.partialLength, h += 1, h >= S.length && (h = 0, l += 1, T[l] ? S = T[l].points : L.v.c ? (h = 0, l = 0, S = T[l].points) : (_ -= y.partialLength, S = null)), S && (m = y, y = S[h], A = y.partialLength));
                            O = c[v].an / 2 - c[v].add, a.translate(-O, 0, 0);
                        } else O = c[v].an / 2 - c[v].add, a.translate(-O, 0, 0), a.translate(-i[0] * c[v].an * .005, -i[1] * F * .01, 0);
                        for(u = 0; u < C; u += 1)x = r[u].a, x.t.propType && (E = r[u].s, k = E.getMult(c[v].anIndexes[u], s.a[u].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? k.length ? g += x.t.v * k[0] : g += x.t.v * k : k.length ? o += x.t.v * k[0] : o += x.t.v * k));
                        for(t.strokeWidthAnim && (Z = t.sw || 0), t.strokeColorAnim && (t.sc ? $ = [
                            t.sc[0],
                            t.sc[1],
                            t.sc[2]
                        ] : $ = [
                            0,
                            0,
                            0
                        ]), t.fillColorAnim && t.fc && (q = [
                            t.fc[0],
                            t.fc[1],
                            t.fc[2]
                        ]), u = 0; u < C; u += 1)x = r[u].a, x.a.propType && (E = r[u].s, k = E.getMult(c[v].anIndexes[u], s.a[u].s.totalChars), k.length ? a.translate(-x.a.v[0] * k[0], -x.a.v[1] * k[1], x.a.v[2] * k[2]) : a.translate(-x.a.v[0] * k, -x.a.v[1] * k, x.a.v[2] * k));
                        for(u = 0; u < C; u += 1)x = r[u].a, x.s.propType && (E = r[u].s, k = E.getMult(c[v].anIndexes[u], s.a[u].s.totalChars), k.length ? a.scale(1 + (x.s.v[0] - 1) * k[0], 1 + (x.s.v[1] - 1) * k[1], 1) : a.scale(1 + (x.s.v[0] - 1) * k, 1 + (x.s.v[1] - 1) * k, 1));
                        for(u = 0; u < C; u += 1){
                            if (x = r[u].a, E = r[u].s, k = E.getMult(c[v].anIndexes[u], s.a[u].s.totalChars), x.sk.propType && (k.length ? a.skewFromAxis(-x.sk.v * k[0], x.sa.v * k[1]) : a.skewFromAxis(-x.sk.v * k, x.sa.v * k)), x.r.propType && (k.length ? a.rotateZ(-x.r.v * k[2]) : a.rotateZ(-x.r.v * k)), x.ry.propType && (k.length ? a.rotateY(x.ry.v * k[1]) : a.rotateY(x.ry.v * k)), x.rx.propType && (k.length ? a.rotateX(x.rx.v * k[0]) : a.rotateX(x.rx.v * k)), x.o.propType && (k.length ? Y += (x.o.v * k[0] - Y) * k[0] : Y += (x.o.v * k - Y) * k), t.strokeWidthAnim && x.sw.propType && (k.length ? Z += x.sw.v * k[0] : Z += x.sw.v * k), t.strokeColorAnim && x.sc.propType) for(G = 0; G < 3; G += 1)k.length ? $[G] += (x.sc.v[G] - $[G]) * k[0] : $[G] += (x.sc.v[G] - $[G]) * k;
                            if (t.fillColorAnim && t.fc) {
                                if (x.fc.propType) for(G = 0; G < 3; G += 1)k.length ? q[G] += (x.fc.v[G] - q[G]) * k[0] : q[G] += (x.fc.v[G] - q[G]) * k;
                                x.fh.propType && (k.length ? q = addHueToRGB(q, x.fh.v * k[0]) : q = addHueToRGB(q, x.fh.v * k)), x.fs.propType && (k.length ? q = addSaturationToRGB(q, x.fs.v * k[0]) : q = addSaturationToRGB(q, x.fs.v * k)), x.fb.propType && (k.length ? q = addBrightnessToRGB(q, x.fb.v * k[0]) : q = addBrightnessToRGB(q, x.fb.v * k));
                            }
                        }
                        for(u = 0; u < C; u += 1)x = r[u].a, x.p.propType && (E = r[u].s, k = E.getMult(c[v].anIndexes[u], s.a[u].s.totalChars), this._hasMaskedPath ? k.length ? a.translate(0, x.p.v[1] * k[0], -x.p.v[2] * k[1]) : a.translate(0, x.p.v[1] * k, -x.p.v[2] * k) : k.length ? a.translate(x.p.v[0] * k[0], x.p.v[1] * k[1], -x.p.v[2] * k[2]) : a.translate(x.p.v[0] * k, x.p.v[1] * k, -x.p.v[2] * k));
                        if (t.strokeWidthAnim && (et = Z < 0 ? 0 : Z), t.strokeColorAnim && (at = "rgb(" + Math.round($[0] * 255) + "," + Math.round($[1] * 255) + "," + Math.round($[2] * 255) + ")"), t.fillColorAnim && t.fc && (it = "rgb(" + Math.round(q[0] * 255) + "," + Math.round(q[1] * 255) + "," + Math.round(q[2] * 255) + ")"), this._hasMaskedPath) {
                            if (a.translate(0, -t.ls), a.translate(0, i[1] * F * .01 + d, 0), this._pathData.p.v) {
                                R = (y.point[1] - m.point[1]) / (y.point[0] - m.point[0]);
                                var lt = Math.atan(R) * 180 / Math.PI;
                                y.point[0] < m.point[0] && (lt += 180), a.rotate(-lt * Math.PI / 180);
                            }
                            a.translate(j, N, 0), g -= i[0] * c[v].an * .005, c[v + 1] && z !== c[v + 1].ind && (g += c[v].an / 2, g += t.tr * .001 * t.finalSize);
                        } else {
                            switch(a.translate(o, d, 0), t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j){
                                case 1:
                                    a.translate(c[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[c[v].line]), 0, 0);
                                    break;
                                case 2:
                                    a.translate(c[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[c[v].line]) / 2, 0, 0);
                                    break;
                            }
                            a.translate(0, -t.ls), a.translate(O, 0, 0), a.translate(i[0] * c[v].an * .005, i[1] * F * .01, 0), o += c[v].l + t.tr * .001 * t.finalSize;
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
                        ], st = Y;
                    }
                    p <= v ? (M = new LetterProps(st, et, at, it, tt, rt), this.renderedLetters.push(M), p += 1, this.lettersChangedFlag = !0) : (M = this.renderedLetters[v], this.lettersChangedFlag = M.update(st, et, at, it, tt, rt) || this.lettersChangedFlag);
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
            var n = i.l || [], p = !!this.globalData.fontManager.chars;
            e = n.length;
            var o, d = this.mHelper, v = "", b = this.data.singleShape, c = 0, P = 0, g = !0, y = i.tr * .001 * i.finalSize;
            if (b && !p && !i.sz) {
                var _ = this.textContainer, f = "start";
                switch(i.j){
                    case 1:
                        f = "end";
                        break;
                    case 2:
                        f = "middle";
                        break;
                    default:
                        f = "start";
                        break;
                }
                _.setAttribute("text-anchor", f), _.setAttribute("letter-spacing", y);
                var h = this.buildTextContents(i.finalText);
                for(e = h.length, P = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)o = this.textSpans[t].span || createNS("tspan"), o.textContent = h[t], o.setAttribute("x", 0), o.setAttribute("y", P), o.style.display = "inherit", _.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t].span = o, P += i.finalLineHeight;
                this.layerElement.appendChild(_);
            } else {
                var l = this.textSpans.length, m;
                for(t = 0; t < e; t += 1){
                    if (this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }), !p || !b || t === 0) {
                        if (o = l > t ? this.textSpans[t].span : createNS(p ? "g" : "text"), l <= t) {
                            if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, p) {
                                var S = createNS("g");
                                o.appendChild(S), this.textSpans[t].childSpan = S;
                            }
                            this.textSpans[t].span = o, this.layerElement.appendChild(o);
                        }
                        o.style.display = "inherit";
                    }
                    if (d.reset(), b && (n[t].n && (c = -y, P += i.yOffset, P += g ? 1 : 0, g = !1), this.applyTextPropertiesToMatrix(i, d, n[t].line, c, P), c += n[t].l || 0, c += y), p) {
                        m = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily);
                        var T;
                        if (m.t === 1) T = new SVGCompElement(m.data, this.globalData, this);
                        else {
                            var A = emptyShapeData;
                            m.data && m.data.shapes && (A = this.buildShapeData(m.data, i.finalSize)), T = new SVGShapeElement(A, this.globalData, this);
                        }
                        if (this.textSpans[t].glyph) {
                            var D = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(D.layerElement), D.destroy();
                        }
                        this.textSpans[t].glyph = T, T._debug = !0, T.prepareFrame(0), T.renderFrame(), this.textSpans[t].childSpan.appendChild(T.layerElement), m.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")");
                    } else b && o.setAttribute("transform", "translate(" + d.props[12] + "," + d.props[13] + ")"), o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                }
                b && o && o.setAttribute("d", v);
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
            var p = createNS("defs");
            this.svgElement.appendChild(p);
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
                defs: p,
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
                var s = this.sequences[r];
                return s || (s = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix,
                    _mdf: !1
                }, this.sequences[r] = s, this.sequenceList.push(s)), s;
            },
            processSequence: function(t, e) {
                for(var i = 0, r = t.transforms.length, s = e; i < r && !e;){
                    if (t.transforms[i].transform.mProps._mdf) {
                        s = !0;
                        break;
                    }
                    i += 1;
                }
                if (s) for(t.finalTransform.reset(), i = r - 1; i >= 0; i -= 1)t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
                t._mdf = s;
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
            function s() {
                var p = createNS("svg"), o = createNS("filter"), d = createNS("feColorMatrix");
                return o.setAttribute("id", t), d.setAttribute("type", "matrix"), d.setAttribute("color-interpolation-filters", "sRGB"), d.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), o.appendChild(d), p.appendChild(o), p.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (p.style.display = "none"), p;
            }
            function a() {
                e || (r = s(), document.body.appendChild(r), e = createTag("canvas"), i = e.getContext("2d"), i.filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1));
            }
            function n(p) {
                return e || a(), e.width = p.width, e.height = p.height, i.filter = "url(#" + t + ")", e;
            }
            return {
                load: a,
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
        function registerEffect(t, e) {
            registeredEffects[t] = {
                effect: e
            };
        }
        function CVMaskElement(t, e) {
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var i, r = this.masksProperties.length, s = !1;
            for(i = 0; i < r; i += 1)this.masksProperties[i].mode !== "n" && (s = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
            this.hasMasks = s, s && this.element.addRenderableComponent(this);
        }
        CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var t = this.element.finalTransform.mat, e = this.element.canvasContext, i, r = this.masksProperties.length, s, a, n;
                for(e.beginPath(), i = 0; i < r; i += 1)if (this.masksProperties[i].mode !== "n") {
                    this.masksProperties[i].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), n = this.viewData[i].v, s = t.applyToPointArray(n.v[0][0], n.v[0][1], 0), e.moveTo(s[0], s[1]);
                    var p, o = n._length;
                    for(p = 1; p < o; p += 1)a = t.applyToTriplePoints(n.o[p - 1], n.i[p], n.v[p]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                    a = t.applyToTriplePoints(n.o[p - 1], n.i[0], n.v[0]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
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
                    this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
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
                    if (i.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                        var r = assetLoader.getLumaCanvas(this.canvasContext.canvas), s = r.getContext("2d");
                        s.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0);
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
            var s = 4;
            e.ty === "rc" ? s = 5 : e.ty === "el" ? s = 6 : e.ty === "sr" && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
            var a, n = i.length, p;
            for(a = 0; a < n; a += 1)i[a].closed || (p = {
                transforms: r.addTransformSequence(i[a].transforms),
                trNodes: []
            }, this.styledShapes.push(p), i[a].elements.push(p));
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
                    var s = new DashProperty(this, t.d, "canvas", this);
                    r.d = s, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0]);
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
        }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, s) {
            var a, n = t.length - 1, p, o, d = [], v = [], b, c, P, g = [].concat(s);
            for(a = n; a >= 0; a -= 1){
                if (b = this.searchProcessedElement(t[a]), b ? e[a] = i[b - 1] : t[a]._shouldRender = r, t[a].ty === "fl" || t[a].ty === "st" || t[a].ty === "gf" || t[a].ty === "gs") b ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], g), d.push(e[a].style);
                else if (t[a].ty === "gr") {
                    if (!b) e[a] = this.createGroupElement(t[a]);
                    else for(o = e[a].it.length, p = 0; p < o; p += 1)e[a].prevViewData[p] = e[a].it[p];
                    this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, r, g);
                } else t[a].ty === "tr" ? (b || (P = this.createTransformElement(t[a]), e[a] = P), g.push(e[a]), this.addTransformToStyleList(e[a])) : t[a].ty === "sh" || t[a].ty === "rc" || t[a].ty === "el" || t[a].ty === "sr" ? b || (e[a] = this.createShapeElement(t[a])) : t[a].ty === "tm" || t[a].ty === "rd" || t[a].ty === "pb" || t[a].ty === "zz" || t[a].ty === "op" ? (b ? (c = e[a], c.closed = !1) : (c = ShapeModifiers.getModifier(t[a].ty), c.init(this, t[a]), e[a] = c, this.shapeModifiers.push(c)), v.push(c)) : t[a].ty === "rp" && (b ? (c = e[a], c.closed = !0) : (c = ShapeModifiers.getModifier(t[a].ty), e[a] = c, c.init(this, t, a, e), this.shapeModifiers.push(c), r = !1), v.push(c));
                this.addProcessedElement(t[a], a + 1);
            }
            for(this.removeTransformFromStyleList(), this.closeStyles(d), n = v.length, a = 0; a < n; a += 1)v[a].closed = !0;
        }, CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0);
        }, CVShapeElement.prototype.drawLayer = function() {
            var t, e = this.stylesList.length, i, r, s, a, n, p, o = this.globalData.renderer, d = this.globalData.canvasContext, v, b;
            for(t = 0; t < e; t += 1)if (b = this.stylesList[t], v = b.type, !((v === "st" || v === "gs") && b.wi === 0 || !b.data._shouldRender || b.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
                for(o.save(), n = b.elements, v === "st" || v === "gs" ? (o.ctxStrokeStyle(v === "st" ? b.co : b.grd), o.ctxLineWidth(b.wi), o.ctxLineCap(b.lc), o.ctxLineJoin(b.lj), o.ctxMiterLimit(b.ml || 0)) : o.ctxFillStyle(v === "fl" ? b.co : b.grd), o.ctxOpacity(b.coOp), v !== "st" && v !== "gs" && d.beginPath(), o.ctxTransform(b.preTransforms.finalTransform.props), r = n.length, i = 0; i < r; i += 1){
                    for((v === "st" || v === "gs") && (d.beginPath(), b.da && (d.setLineDash(b.da), d.lineDashOffset = b.do)), p = n[i].trNodes, a = p.length, s = 0; s < a; s += 1)p[s].t === "m" ? d.moveTo(p[s].p[0], p[s].p[1]) : p[s].t === "c" ? d.bezierCurveTo(p[s].pts[0], p[s].pts[1], p[s].pts[2], p[s].pts[3], p[s].pts[4], p[s].pts[5]) : d.closePath();
                    (v === "st" || v === "gs") && (o.ctxStroke(), b.da && d.setLineDash(this.dashResetter));
                }
                v !== "st" && v !== "gs" && this.globalData.renderer.ctxFill(b.r), o.restore();
            }
        }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
            var s, a = e.length - 1, n;
            for(n = t, s = a; s >= 0; s -= 1)e[s].ty === "tr" ? (n = i[s].transform, this.renderShapeTransform(t, n)) : e[s].ty === "sh" || e[s].ty === "el" || e[s].ty === "rc" || e[s].ty === "sr" ? this.renderPath(e[s], i[s]) : e[s].ty === "fl" ? this.renderFill(e[s], i[s], n) : e[s].ty === "st" ? this.renderStroke(e[s], i[s], n) : e[s].ty === "gf" || e[s].ty === "gs" ? this.renderGradientFill(e[s], i[s], n) : e[s].ty === "gr" ? this.renderShape(n, e[s].it, i[s].it) : e[s].ty;
            r && this.drawLayer();
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var i = t.trNodes, r = e.paths, s, a, n, p = r._length;
                i.length = 0;
                var o = t.transforms.finalTransform;
                for(n = 0; n < p; n += 1){
                    var d = r.shapes[n];
                    if (d && d.v) {
                        for(a = d._length, s = 1; s < a; s += 1)s === 1 && i.push({
                            t: "m",
                            p: o.applyToPointArray(d.v[0][0], d.v[0][1], 0)
                        }), i.push({
                            t: "c",
                            pts: o.applyToTriplePoints(d.o[s - 1], d.i[s], d.v[s])
                        });
                        a === 1 && i.push({
                            t: "m",
                            p: o.applyToPointArray(d.v[0][0], d.v[0][1], 0)
                        }), d.c && a && (i.push({
                            t: "c",
                            pts: o.applyToTriplePoints(d.o[s - 1], d.i[0], d.v[0])
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
            var r = e.style, s;
            if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
                var a = this.globalData.canvasContext, n = e.s.v, p = e.e.v;
                if (t.t === 1) s = a.createLinearGradient(n[0], n[1], p[0], p[1]);
                else {
                    var o = Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)), d = Math.atan2(p[1] - n[1], p[0] - n[0]), v = e.h.v;
                    v >= 1 ? v = .99 : v <= -1 && (v = -0.99);
                    var b = o * v, c = Math.cos(d + e.a.v) * b + n[0], P = Math.sin(d + e.a.v) * b + n[1];
                    s = a.createRadialGradient(c, P, 0, n[0], n[1], o);
                }
                var g, y = t.g.p, _ = e.g.c, f = 1;
                for(g = 0; g < y; g += 1)e.g._hasOpacity && e.g._collapsable && (f = e.g.o[g * 2 + 1]), s.addColorStop(_[g * 4] / 100, "rgba(" + _[g * 4 + 1] + "," + _[g * 4 + 2] + "," + _[g * 4 + 3] + "," + f + ")");
                r.grd = s;
            }
            r.coOp = e.o.v * i.opacity;
        }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
            var r = e.style, s = e.d;
            s && (s._mdf || this._isFirstFrame) && (r.da = s.dashArray, r.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v);
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
            var r = this.globalData.fontManager.getFontByName(t.f), s, a, n = t.l, p = this.mHelper;
            this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
            var o, d, v, b, c, P, g, y, _, f, h = this.data.singleShape, l = t.tr * .001 * t.finalSize, m = 0, S = 0, T = !0, A = 0;
            for(s = 0; s < a; s += 1){
                o = this.globalData.fontManager.getCharData(t.finalText[s], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), d = o && o.data || {}, p.reset(), h && n[s].n && (m = -l, S += t.yOffset, S += T ? 1 : 0, T = !1), c = d.shapes ? d.shapes[0].it : [], g = c.length, p.scale(t.finalSize / 100, t.finalSize / 100), h && this.applyTextPropertiesToMatrix(t, p, n[s].line, m, S), _ = createSizedArray(g - 1);
                var D = 0;
                for(P = 0; P < g; P += 1)if (c[P].ty === "sh") {
                    for(b = c[P].ks.k.i.length, y = c[P].ks.k, f = [], v = 1; v < b; v += 1)v === 1 && f.push(p.applyToX(y.v[0][0], y.v[0][1], 0), p.applyToY(y.v[0][0], y.v[0][1], 0)), f.push(p.applyToX(y.o[v - 1][0], y.o[v - 1][1], 0), p.applyToY(y.o[v - 1][0], y.o[v - 1][1], 0), p.applyToX(y.i[v][0], y.i[v][1], 0), p.applyToY(y.i[v][0], y.i[v][1], 0), p.applyToX(y.v[v][0], y.v[v][1], 0), p.applyToY(y.v[v][0], y.v[v][1], 0));
                    f.push(p.applyToX(y.o[v - 1][0], y.o[v - 1][1], 0), p.applyToY(y.o[v - 1][0], y.o[v - 1][1], 0), p.applyToX(y.i[0][0], y.i[0][1], 0), p.applyToY(y.i[0][0], y.i[0][1], 0), p.applyToX(y.v[0][0], y.v[0][1], 0), p.applyToY(y.v[0][0], y.v[0][1], 0)), _[D] = f, D += 1;
                }
                h && (m += n[s].l, m += l), this.textSpans[A] ? this.textSpans[A].elem = _ : this.textSpans[A] = {
                    elem: _
                }, A += 1;
            }
        }, CVTextElement.prototype.renderInnerContent = function() {
            this.validateText();
            var t = this.canvasContext;
            t.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var e, i, r, s, a, n, p = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
            i = o.length;
            var d, v = null, b = null, c = null, P, g, y = this.globalData.renderer;
            for(e = 0; e < i; e += 1)if (!o[e].n) {
                if (d = p[e], d && (y.save(), y.ctxTransform(d.p), y.ctxOpacity(d.o)), this.fill) {
                    for(d && d.fc ? v !== d.fc && (y.ctxFillStyle(d.fc), v = d.fc) : v !== this.values.fill && (v = this.values.fill, y.ctxFillStyle(this.values.fill)), P = this.textSpans[e].elem, s = P.length, this.globalData.canvasContext.beginPath(), r = 0; r < s; r += 1)for(g = P[r], n = g.length, this.globalData.canvasContext.moveTo(g[0], g[1]), a = 2; a < n; a += 6)this.globalData.canvasContext.bezierCurveTo(g[a], g[a + 1], g[a + 2], g[a + 3], g[a + 4], g[a + 5]);
                    this.globalData.canvasContext.closePath(), y.ctxFill();
                }
                if (this.stroke) {
                    for(d && d.sw ? c !== d.sw && (c = d.sw, y.ctxLineWidth(d.sw)) : c !== this.values.sWidth && (c = this.values.sWidth, y.ctxLineWidth(this.values.sWidth)), d && d.sc ? b !== d.sc && (b = d.sc, y.ctxStrokeStyle(d.sc)) : b !== this.values.stroke && (b = this.values.stroke, y.ctxStrokeStyle(this.values.stroke)), P = this.textSpans[e].elem, s = P.length, this.globalData.canvasContext.beginPath(), r = 0; r < s; r += 1)for(g = P[r], n = g.length, this.globalData.canvasContext.moveTo(g[0], g[1]), a = 2; a < n; a += 6)this.globalData.canvasContext.bezierCurveTo(g[a], g[a + 1], g[a + 2], g[a + 3], g[a + 4], g[a + 5]);
                    this.globalData.canvasContext.closePath(), y.ctxStroke();
                }
                d && this.globalData.renderer.restore();
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
                var e = t.getContext("2d"), i = this.img.width, r = this.img.height, s = i / r, a = this.assetData.w / this.assetData.h, n, p, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                s > a && o === "xMidYMid slice" || s < a && o !== "xMidYMid slice" ? (p = r, n = p * a) : (n = i, p = n / a), e.drawImage(this.img, (i - n) / 2, (r - p) / 2, n, p, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
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
            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
        }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
            this.reset();
            var i, r;
            t ? (i = t, r = e, this.canvasContext.canvas.width = i, this.canvasContext.canvas.height = r) : (this.animationItem.wrapper && this.animationItem.container ? (i = this.animationItem.wrapper.offsetWidth, r = this.animationItem.wrapper.offsetHeight) : (i = this.canvasContext.canvas.width, r = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i * this.renderConfig.dpr, this.canvasContext.canvas.height = r * this.renderConfig.dpr);
            var s, a;
            if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                var n = this.renderConfig.preserveAspectRatio.split(" "), p = n[1] || "meet", o = n[0] || "xMidYMid", d = o.substr(0, 4), v = o.substr(4);
                s = i / r, a = this.transformCanvas.w / this.transformCanvas.h, a > s && p === "meet" || a < s && p === "slice" ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)), d === "xMid" && (a < s && p === "meet" || a > s && p === "slice") ? this.transformCanvas.tx = (i - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : d === "xMax" && (a < s && p === "meet" || a > s && p === "slice") ? this.transformCanvas.tx = (i - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, v === "YMid" && (a > s && p === "meet" || a < s && p === "slice") ? this.transformCanvas.ty = (r - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : v === "YMax" && (a > s && p === "meet" || a < s && p === "slice") ? this.transformCanvas.ty = (r - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
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
            var e = this.stack[this.cArrPos], i = e.transform, r, s = this.cTr.props;
            for(r = 0; r < 16; r += 1)s[r] = i[r];
            if (t) {
                this.nativeContext.restore();
                var a = this.stack[this.cArrPos + 1];
                this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit;
            }
            this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (t || e.opacity !== -1 && this.currentOpacity !== e.opacity) && (this.nativeContext.globalAlpha = e.opacity, this.currentOpacity = e.opacity), this.currentFillStyle = e.fillStyle, this.currentStrokeStyle = e.strokeStyle, this.currentLineWidth = e.lineWidth, this.currentLineCap = e.lineCap, this.currentLineJoin = e.lineJoin, this.currentMiterLimit = e.miterLimit;
        }, CVContextData.prototype.save = function(t) {
            t && this.nativeContext.save();
            var e = this.cTr.props;
            this._length <= this.cArrPos && this.duplicate();
            var i = this.stack[this.cArrPos], r;
            for(r = 0; r < 16; r += 1)i.transform[r] = e[r];
            this.cArrPos += 1;
            var s = this.stack[this.cArrPos];
            s.opacity = i.opacity, s.fillStyle = i.fillStyle, s.strokeStyle = i.strokeStyle, s.lineWidth = i.lineWidth, s.lineCap = i.lineCap, s.lineJoin = i.lineJoin, s.miterLimit = i.miterLimit;
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
        }, registerRenderer("canvas", CanvasRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier);
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
            var i = this, r = 256, s = 6, a = 52, n = "random", p = e.pow(r, s), o = e.pow(2, a), d = o * 2, v = r - 1;
            function c(l, m, S) {
                var T = [];
                m = m === !0 ? {
                    entropy: !0
                } : m || {};
                var A = _(y(m.entropy ? [
                    l,
                    h(t)
                ] : l === null ? f() : l, 3), T), D = new P(T), I = function() {
                    for(var R = D.g(s), L = p, V = 0; R < o;)R = (R + V) * r, L *= r, V = D.g(1);
                    for(; R >= d;)R /= 2, L /= 2, V >>>= 1;
                    return (R + V) / L;
                };
                return I.int32 = function() {
                    return D.g(4) | 0;
                }, I.quick = function() {
                    return D.g(4) / 4294967296;
                }, I.double = I, _(h(D.S), t), (m.pass || S || function(R, L, V, B) {
                    return B && (B.S && g(B, D), R.state = function() {
                        return g(D, {});
                    }), V ? (e[n] = R, L) : R;
                })(I, A, "global" in m ? m.global : this == e, m.state);
            }
            e["seed" + n] = c;
            function P(l) {
                var m, S = l.length, T = this, A = 0, D = T.i = T.j = 0, I = T.S = [];
                for(S || (l = [
                    S++
                ]); A < r;)I[A] = A++;
                for(A = 0; A < r; A++)I[A] = I[D = v & D + l[A % S] + (m = I[A])], I[D] = m;
                T.g = function(R) {
                    for(var L, V = 0, B = T.i, F = T.j, w = T.S; R--;)L = w[B = v & B + 1], V = V * r + w[v & (w[B] = w[F = v & F + L]) + (w[F] = L)];
                    return T.i = B, T.j = F, V;
                };
            }
            function g(l, m) {
                return m.i = l.i, m.j = l.j, m.S = l.S.slice(), m;
            }
            function y(l, m) {
                var S = [], T = _typeof$2(l), A;
                if (m && T == "object") for(A in l)try {
                    S.push(y(l[A], m - 1));
                } catch  {}
                return S.length ? S : T == "string" ? l : l + "\0";
            }
            function _(l, m) {
                for(var S = l + "", T, A = 0; A < S.length;)m[v & A] = v & (T ^= m[v & A] * 19) + S.charCodeAt(A++);
                return h(m);
            }
            function f() {
                try {
                    var l = new Uint8Array(r);
                    return (i.crypto || i.msCrypto).getRandomValues(l), h(l);
                } catch  {
                    var m = i.navigator, S = m && m.plugins;
                    return [
                        +new Date,
                        i,
                        S,
                        i.screen,
                        h(t)
                    ];
                }
            }
            function h(l) {
                return String.fromCharCode.apply(0, l);
            }
            _(e.random(), t);
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
                    for(var s = 0, a = t.length, n = e.length, p = []; s < a || s < n;)(typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? p[s] = t[s] + e[s] : p[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                    return p;
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
                    for(var s = 0, a = t.length, n = e.length, p = []; s < a || s < n;)(typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? p[s] = t[s] - e[s] : p[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                    return p;
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
                var e = t[0], i = t[1], r = t[2], s = Math1.max(e, i, r), a = Math1.min(e, i, r), n, p, o = (s + a) / 2;
                if (s === a) n = 0, p = 0;
                else {
                    var d = s - a;
                    switch(p = o > .5 ? d / (2 - s - a) : d / (s + a), s){
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
                    p,
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
                    var p = r < .5 ? r * (1 + i) : r + i - r * i, o = 2 * r - p;
                    s = hue2rgb(o, p, e + 1 / 3), a = hue2rgb(o, p, e), n = hue2rgb(o, p, e - 1 / 3);
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
                var p, o = r.length, d = createTypedArray("float32", o);
                for(p = 0; p < o; p += 1)d[p] = r[p] + (s[p] - r[p]) * n;
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
                var p = [
                    0,
                    0
                ], o, d;
                for(s = 0; s < a; s += 1)o = e && e[s] ? e[s] : p, d = i && i[s] ? i[s] : p, n.setTripleAt(t[s][0], t[s][1], d[0] + t[s][0], d[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
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
                    var p = Math1.floor(time * e);
                    for(r = 0, s = 0; r < p;){
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
                        var p, o = s.length, d = createTypedArray("float32", o);
                        for(p = 0; p < o; p += 1)d[p] = (a[p] - s[p]) * n + s[p];
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
                function p(d) {
                    s.indexOf(d) === -1 && s.push(d);
                }
                function o() {
                    var d, v = s.length;
                    for(d = 0; d < v; d += 1)s[d].release();
                    s.length = 0;
                }
                i.renderer.compInterface = CompExpressionInterface(i.renderer), i.renderer.globalData.projectInterface.registerComposition(i.renderer), i.renderer.globalData.pushExpression = a, i.renderer.globalData.popExpression = n, i.renderer.globalData.registerExpressionProperty = p;
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
                var n = function(p) {
                    for(s = 0; s < a;){
                        if (i.masksProperties[s].nm === p) return r[s];
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
            function i(n, p, o) {
                Object.defineProperty(n, "velocity", {
                    get: function() {
                        return p.getVelocityAtTime(p.comp.currentFrame);
                    }
                }), n.numKeys = p.keyframes ? p.keyframes.length : 0, n.key = function(d) {
                    if (!n.numKeys) return 0;
                    var v = "";
                    "s" in p.keyframes[d - 1] ? v = p.keyframes[d - 1].s : "e" in p.keyframes[d - 2] ? v = p.keyframes[d - 2].e : v = p.keyframes[d - 2].s;
                    var b = o === "unidimensional" ? new Number(v) : Object.assign({}, v);
                    return b.time = p.keyframes[d - 1].t / p.elem.comp.globalData.frameRate, b.value = o === "unidimensional" ? v[0] : v, b;
                }, n.valueAtTime = p.getValueAtTime, n.speedAtTime = p.getSpeedAtTime, n.velocityAtTime = p.getVelocityAtTime, n.propertyGroup = p.propertyGroup;
            }
            function r(n) {
                (!n || !("pv" in n)) && (n = t);
                var p = 1 / n.mult, o = n.pv * p, d = new Number(o);
                return d.value = o, i(d, n, "unidimensional"), function() {
                    return n.k && n.getValue(), o = n.v * p, d.value !== o && (d = new Number(o), d.value = o, i(d, n, "unidimensional")), d;
                };
            }
            function s(n) {
                (!n || !("pv" in n)) && (n = e);
                var p = 1 / n.mult, o = n.data && n.data.l || n.pv.length, d = createTypedArray("float32", o), v = createTypedArray("float32", o);
                return d.value = v, i(d, n, "multidimensional"), function() {
                    n.k && n.getValue();
                    for(var b = 0; b < o; b += 1)v[b] = n.v[b] * p, d[b] = v[b];
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
                    var b = this._elem.finalTransform.mProp.getValueAtTime(d);
                    b.clone(v);
                } else {
                    var c = this._elem.finalTransform.mProp;
                    c.applyToMatrix(v);
                }
                return v;
            }
            function e(d, v) {
                var b = this.getMatrix(v);
                return b.props[12] = 0, b.props[13] = 0, b.props[14] = 0, this.applyPoint(b, d);
            }
            function i(d, v) {
                var b = this.getMatrix(v);
                return this.applyPoint(b, d);
            }
            function r(d, v) {
                var b = this.getMatrix(v);
                return b.props[12] = 0, b.props[13] = 0, b.props[14] = 0, this.invertPoint(b, d);
            }
            function s(d, v) {
                var b = this.getMatrix(v);
                return this.invertPoint(b, d);
            }
            function a(d, v) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var b, c = this._elem.hierarchy.length;
                    for(b = 0; b < c; b += 1)this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(d);
                }
                return d.applyToPointArray(v[0], v[1], v[2] || 0);
            }
            function n(d, v) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var b, c = this._elem.hierarchy.length;
                    for(b = 0; b < c; b += 1)this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(d);
                }
                return d.inversePoint(v);
            }
            function p(d) {
                var v = new Matrix;
                if (v.reset(), this._elem.finalTransform.mProp.applyToMatrix(v), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var b, c = this._elem.hierarchy.length;
                    for(b = 0; b < c; b += 1)this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(v);
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
                function b(y) {
                    P.mask = new MaskManagerInterface(y, d);
                }
                function c(y) {
                    P.effect = y;
                }
                function P(y) {
                    switch(y){
                        case "ADBE Root Vectors Group":
                        case "Contents":
                        case 2:
                            return P.shapeInterface;
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
                            return P.effect;
                        case "ADBE Text Properties":
                            return P.textInterface;
                        default:
                            return null;
                    }
                }
                P.getMatrix = t, P.invertPoint = n, P.applyPoint = a, P.toWorld = i, P.toWorldVec = e, P.fromWorld = s, P.fromWorldVec = r, P.toComp = i, P.fromComp = p, P.sampleImage = o, P.sourceRectAtTime = d.sourceRectAtTime.bind(d), P._elem = d, v = TransformExpressionInterface(d.finalTransform.mProp);
                var g = getDescriptor(v, "anchorPoint");
                return Object.defineProperties(P, {
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
                }), P.startTime = d.data.st, P.index = d.data.ind, P.source = d.data.refId, P.height = d.data.ty === 0 ? d.data.h : 100, P.width = d.data.ty === 0 ? d.data.w : 100, P.inPoint = d.data.ip / d.comp.globalData.frameRate, P.outPoint = d.data.op / d.comp.globalData.frameRate, P._name = d.data.nm, P.registerMaskInterface = b, P.registerEffectsInterface = c, P;
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
                    var n = [], p = s.data.ef, o, d = s.effectsManager.effectElements.length;
                    for(o = 0; o < d; o += 1)n.push(i(p[o], s.effectsManager.effectElements[o], a, s));
                    var v = s.data.ef || [], b = function(c) {
                        for(o = 0, d = v.length; o < d;){
                            if (c === v[o].nm || c === v[o].mn || c === v[o].ix) return n[o];
                            o += 1;
                        }
                        return null;
                    };
                    return Object.defineProperty(b, "numProperties", {
                        get: function() {
                            return v.length;
                        }
                    }), b;
                }
                return null;
            }
            function i(s, a, n, p) {
                function o(P) {
                    for(var g = s.ef, y = 0, _ = g.length; y < _;){
                        if (P === g[y].nm || P === g[y].mn || P === g[y].ix) return g[y].ty === 5 ? v[y] : v[y]();
                        y += 1;
                    }
                    throw new Error;
                }
                var d = propertyGroupFactory(o, n), v = [], b, c = s.ef.length;
                for(b = 0; b < c; b += 1)s.ef[b].ty === 5 ? v.push(i(s.ef[b], a.effectElements[b], a.effectElements[b].propertyGroup, p)) : v.push(r(a.effectElements[b], s.ef[b].ty, p, d));
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
            function r(s, a, n, p) {
                var o = ExpressionPropertyInterface(s.p);
                function d() {
                    return a === 10 ? n.comp.compInterface(s.p.v) : o();
                }
                return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", p)), d;
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
            function t(g, y, _) {
                var f = [], h, l = g ? g.length : 0;
                for(h = 0; h < l; h += 1)g[h].ty === "gr" ? f.push(i(g[h], y[h], _)) : g[h].ty === "fl" ? f.push(r(g[h], y[h], _)) : g[h].ty === "st" ? f.push(n(g[h], y[h], _)) : g[h].ty === "tm" ? f.push(p(g[h], y[h], _)) : g[h].ty === "tr" || (g[h].ty === "el" ? f.push(d(g[h], y[h], _)) : g[h].ty === "sr" ? f.push(v(g[h], y[h], _)) : g[h].ty === "sh" ? f.push(ShapePathInterface(g[h], y[h], _)) : g[h].ty === "rc" ? f.push(b(g[h], y[h], _)) : g[h].ty === "rd" ? f.push(c(g[h], y[h], _)) : g[h].ty === "rp" ? f.push(P(g[h], y[h], _)) : g[h].ty === "gf" ? f.push(s(g[h], y[h], _)) : f.push(a(g[h], y[h])));
                return f;
            }
            function e(g, y, _) {
                var f, h = function(m) {
                    for(var S = 0, T = f.length; S < T;){
                        if (f[S]._name === m || f[S].mn === m || f[S].propertyIndex === m || f[S].ix === m || f[S].ind === m) return f[S];
                        S += 1;
                    }
                    return typeof m == "number" ? f[m - 1] : null;
                };
                h.propertyGroup = propertyGroupFactory(h, _), f = t(g.it, y.it, h.propertyGroup), h.numProperties = f.length;
                var l = o(g.it[g.it.length - 1], y.it[y.it.length - 1], h.propertyGroup);
                return h.transform = l, h.propertyIndex = g.cix, h._name = g.nm, h;
            }
            function i(g, y, _) {
                var f = function(m) {
                    switch(m){
                        case "ADBE Vectors Group":
                        case "Contents":
                        case 2:
                            return f.content;
                        default:
                            return f.transform;
                    }
                };
                f.propertyGroup = propertyGroupFactory(f, _);
                var h = e(g, y, f.propertyGroup), l = o(g.it[g.it.length - 1], y.it[y.it.length - 1], f.propertyGroup);
                return f.content = h, f.transform = l, Object.defineProperty(f, "_name", {
                    get: function() {
                        return g.nm;
                    }
                }), f.numProperties = g.np, f.propertyIndex = g.ix, f.nm = g.nm, f.mn = g.mn, f;
            }
            function r(g, y, _) {
                function f(h) {
                    return h === "Color" || h === "color" ? f.color : h === "Opacity" || h === "opacity" ? f.opacity : null;
                }
                return Object.defineProperties(f, {
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
                }), y.c.setGroupProperty(PropertyInterface("Color", _)), y.o.setGroupProperty(PropertyInterface("Opacity", _)), f;
            }
            function s(g, y, _) {
                function f(h) {
                    return h === "Start Point" || h === "start point" ? f.startPoint : h === "End Point" || h === "end point" ? f.endPoint : h === "Opacity" || h === "opacity" ? f.opacity : null;
                }
                return Object.defineProperties(f, {
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
                }), y.s.setGroupProperty(PropertyInterface("Start Point", _)), y.e.setGroupProperty(PropertyInterface("End Point", _)), y.o.setGroupProperty(PropertyInterface("Opacity", _)), f;
            }
            function a() {
                function g() {
                    return null;
                }
                return g;
            }
            function n(g, y, _) {
                var f = propertyGroupFactory(A, _), h = propertyGroupFactory(T, f);
                function l(D) {
                    Object.defineProperty(T, g.d[D].nm, {
                        get: ExpressionPropertyInterface(y.d.dataProps[D].p)
                    });
                }
                var m, S = g.d ? g.d.length : 0, T = {};
                for(m = 0; m < S; m += 1)l(m), y.d.dataProps[m].p.setGroupProperty(h);
                function A(D) {
                    return D === "Color" || D === "color" ? A.color : D === "Opacity" || D === "opacity" ? A.opacity : D === "Stroke Width" || D === "stroke width" ? A.strokeWidth : null;
                }
                return Object.defineProperties(A, {
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
                            return T;
                        }
                    },
                    _name: {
                        value: g.nm
                    },
                    mn: {
                        value: g.mn
                    }
                }), y.c.setGroupProperty(PropertyInterface("Color", f)), y.o.setGroupProperty(PropertyInterface("Opacity", f)), y.w.setGroupProperty(PropertyInterface("Stroke Width", f)), A;
            }
            function p(g, y, _) {
                function f(l) {
                    return l === g.e.ix || l === "End" || l === "end" ? f.end : l === g.s.ix ? f.start : l === g.o.ix ? f.offset : null;
                }
                var h = propertyGroupFactory(f, _);
                return f.propertyIndex = g.ix, y.s.setGroupProperty(PropertyInterface("Start", h)), y.e.setGroupProperty(PropertyInterface("End", h)), y.o.setGroupProperty(PropertyInterface("Offset", h)), f.propertyIndex = g.ix, f.propertyGroup = _, Object.defineProperties(f, {
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
                }), f.mn = g.mn, f;
            }
            function o(g, y, _) {
                function f(l) {
                    return g.a.ix === l || l === "Anchor Point" ? f.anchorPoint : g.o.ix === l || l === "Opacity" ? f.opacity : g.p.ix === l || l === "Position" ? f.position : g.r.ix === l || l === "Rotation" || l === "ADBE Vector Rotation" ? f.rotation : g.s.ix === l || l === "Scale" ? f.scale : g.sk && g.sk.ix === l || l === "Skew" ? f.skew : g.sa && g.sa.ix === l || l === "Skew Axis" ? f.skewAxis : null;
                }
                var h = propertyGroupFactory(f, _);
                return y.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", h)), y.transform.mProps.p.setGroupProperty(PropertyInterface("Position", h)), y.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", h)), y.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", h)), y.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", h)), y.transform.mProps.sk && (y.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", h)), y.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", h))), y.transform.op.setGroupProperty(PropertyInterface("Opacity", h)), Object.defineProperties(f, {
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
                }), f.ty = "tr", f.mn = g.mn, f.propertyGroup = _, f;
            }
            function d(g, y, _) {
                function f(m) {
                    return g.p.ix === m ? f.position : g.s.ix === m ? f.size : null;
                }
                var h = propertyGroupFactory(f, _);
                f.propertyIndex = g.ix;
                var l = y.sh.ty === "tm" ? y.sh.prop : y.sh;
                return l.s.setGroupProperty(PropertyInterface("Size", h)), l.p.setGroupProperty(PropertyInterface("Position", h)), Object.defineProperties(f, {
                    size: {
                        get: ExpressionPropertyInterface(l.s)
                    },
                    position: {
                        get: ExpressionPropertyInterface(l.p)
                    },
                    _name: {
                        value: g.nm
                    }
                }), f.mn = g.mn, f;
            }
            function v(g, y, _) {
                function f(m) {
                    return g.p.ix === m ? f.position : g.r.ix === m ? f.rotation : g.pt.ix === m ? f.points : g.or.ix === m || m === "ADBE Vector Star Outer Radius" ? f.outerRadius : g.os.ix === m ? f.outerRoundness : g.ir && (g.ir.ix === m || m === "ADBE Vector Star Inner Radius") ? f.innerRadius : g.is && g.is.ix === m ? f.innerRoundness : null;
                }
                var h = propertyGroupFactory(f, _), l = y.sh.ty === "tm" ? y.sh.prop : y.sh;
                return f.propertyIndex = g.ix, l.or.setGroupProperty(PropertyInterface("Outer Radius", h)), l.os.setGroupProperty(PropertyInterface("Outer Roundness", h)), l.pt.setGroupProperty(PropertyInterface("Points", h)), l.p.setGroupProperty(PropertyInterface("Position", h)), l.r.setGroupProperty(PropertyInterface("Rotation", h)), g.ir && (l.ir.setGroupProperty(PropertyInterface("Inner Radius", h)), l.is.setGroupProperty(PropertyInterface("Inner Roundness", h))), Object.defineProperties(f, {
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
                }), f.mn = g.mn, f;
            }
            function b(g, y, _) {
                function f(m) {
                    return g.p.ix === m ? f.position : g.r.ix === m ? f.roundness : g.s.ix === m || m === "Size" || m === "ADBE Vector Rect Size" ? f.size : null;
                }
                var h = propertyGroupFactory(f, _), l = y.sh.ty === "tm" ? y.sh.prop : y.sh;
                return f.propertyIndex = g.ix, l.p.setGroupProperty(PropertyInterface("Position", h)), l.s.setGroupProperty(PropertyInterface("Size", h)), l.r.setGroupProperty(PropertyInterface("Rotation", h)), Object.defineProperties(f, {
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
                }), f.mn = g.mn, f;
            }
            function c(g, y, _) {
                function f(m) {
                    return g.r.ix === m || m === "Round Corners 1" ? f.radius : null;
                }
                var h = propertyGroupFactory(f, _), l = y;
                return f.propertyIndex = g.ix, l.rd.setGroupProperty(PropertyInterface("Radius", h)), Object.defineProperties(f, {
                    radius: {
                        get: ExpressionPropertyInterface(l.rd)
                    },
                    _name: {
                        value: g.nm
                    }
                }), f.mn = g.mn, f;
            }
            function P(g, y, _) {
                function f(m) {
                    return g.c.ix === m || m === "Copies" ? f.copies : g.o.ix === m || m === "Offset" ? f.offset : null;
                }
                var h = propertyGroupFactory(f, _), l = y;
                return f.propertyIndex = g.ix, l.c.setGroupProperty(PropertyInterface("Copies", h)), l.o.setGroupProperty(PropertyInterface("Offset", h)), Object.defineProperties(f, {
                    copies: {
                        get: ExpressionPropertyInterface(l.c)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(l.o)
                    },
                    _name: {
                        value: g.nm
                    }
                }), f.mn = g.mn, f;
            }
            return function(g, y, _) {
                var f;
                function h(m) {
                    if (typeof m == "number") return m = m === void 0 ? 1 : m, m === 0 ? _ : f[m - 1];
                    for(var S = 0, T = f.length; S < T;){
                        if (f[S]._name === m) return f[S];
                        S += 1;
                    }
                    return null;
                }
                function l() {
                    return _;
                }
                return h.propertyGroup = propertyGroupFactory(h, l), f = t(g, y, h.propertyGroup), h.numProperties = f.length, h._name = "Contents", h;
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
                function n(p) {
                    if (s[p]) return r = p, s = s[p], _typeof(s) === "object" ? n : s;
                    var o = p.indexOf(r);
                    if (o !== -1) {
                        var d = parseInt(p.substr(o + r.length), 10);
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
            function t(n, p, o) {
                p.x && (o.k = !0, o.x = !0, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(n, p, o).bind(o)));
            }
            function e(n) {
                return n *= this.elem.globalData.frameRate, n -= this.offsetTime, n !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime), this._cachingAtTime.lastFrame = n), this._cachingAtTime.value;
            }
            function i(n) {
                var p = -0.01, o = this.getValueAtTime(n), d = this.getValueAtTime(n + p), v = 0;
                if (o.length) {
                    var b;
                    for(b = 0; b < o.length; b += 1)v += Math.pow(d[b] - o[b], 2);
                    v = Math.sqrt(v) * 100;
                } else v = 0;
                return v;
            }
            function r(n) {
                if (this.vel !== void 0) return this.vel;
                var p = -0.001, o = this.getValueAtTime(n), d = this.getValueAtTime(n + p), v;
                if (o.length) {
                    v = createTypedArray("float32", o.length);
                    var b;
                    for(b = 0; b < o.length; b += 1)v[b] = (d[b] - o[b]) / p;
                } else v = (d - o) / p;
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
            function t(c, P, g) {
                if (!this.k || !this.keyframes) return this.pv;
                c = c ? c.toLowerCase() : "";
                var y = this.comp.renderedFrame, _ = this.keyframes, f = _[_.length - 1].t;
                if (y <= f) return this.pv;
                var h, l;
                g ? (P ? h = Math.abs(f - this.elem.comp.globalData.frameRate * P) : h = Math.max(0, f - this.elem.data.ip), l = f - h) : ((!P || P > _.length - 1) && (P = _.length - 1), l = _[_.length - 1 - P].t, h = f - l);
                var m, S, T;
                if (c === "pingpong") {
                    var A = Math.floor((y - l) / h);
                    if (A % 2 !== 0) return this.getValueAtTime((h - (y - l) % h + l) / this.comp.globalData.frameRate, 0);
                } else if (c === "offset") {
                    var D = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), I = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), R = this.getValueAtTime(((y - l) % h + l) / this.comp.globalData.frameRate, 0), L = Math.floor((y - l) / h);
                    if (this.pv.length) {
                        for(T = new Array(D.length), S = T.length, m = 0; m < S; m += 1)T[m] = (I[m] - D[m]) * L + R[m];
                        return T;
                    }
                    return (I - D) * L + R;
                } else if (c === "continue") {
                    var V = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), B = this.getValueAtTime((f - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(T = new Array(V.length), S = T.length, m = 0; m < S; m += 1)T[m] = V[m] + (V[m] - B[m]) * ((y - f) / this.comp.globalData.frameRate) / 5e-4;
                        return T;
                    }
                    return V + (V - B) * ((y - f) / .001);
                }
                return this.getValueAtTime(((y - l) % h + l) / this.comp.globalData.frameRate, 0);
            }
            function e(c, P, g) {
                if (!this.k) return this.pv;
                c = c ? c.toLowerCase() : "";
                var y = this.comp.renderedFrame, _ = this.keyframes, f = _[0].t;
                if (y >= f) return this.pv;
                var h, l;
                g ? (P ? h = Math.abs(this.elem.comp.globalData.frameRate * P) : h = Math.max(0, this.elem.data.op - f), l = f + h) : ((!P || P > _.length - 1) && (P = _.length - 1), l = _[P].t, h = l - f);
                var m, S, T;
                if (c === "pingpong") {
                    var A = Math.floor((f - y) / h);
                    if (A % 2 === 0) return this.getValueAtTime(((f - y) % h + f) / this.comp.globalData.frameRate, 0);
                } else if (c === "offset") {
                    var D = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), I = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), R = this.getValueAtTime((h - (f - y) % h + f) / this.comp.globalData.frameRate, 0), L = Math.floor((f - y) / h) + 1;
                    if (this.pv.length) {
                        for(T = new Array(D.length), S = T.length, m = 0; m < S; m += 1)T[m] = R[m] - (I[m] - D[m]) * L;
                        return T;
                    }
                    return R - (I - D) * L;
                } else if (c === "continue") {
                    var V = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), B = this.getValueAtTime((f + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for(T = new Array(V.length), S = T.length, m = 0; m < S; m += 1)T[m] = V[m] + (V[m] - B[m]) * (f - y) / .001;
                        return T;
                    }
                    return V + (V - B) * (f - y) / .001;
                }
                return this.getValueAtTime((h - ((f - y) % h + f)) / this.comp.globalData.frameRate, 0);
            }
            function i(c, P) {
                if (!this.k) return this.pv;
                if (c = (c || .4) * .5, P = Math.floor(P || 5), P <= 1) return this.pv;
                var g = this.comp.renderedFrame / this.comp.globalData.frameRate, y = g - c, _ = g + c, f = P > 1 ? (_ - y) / (P - 1) : 1, h = 0, l = 0, m;
                this.pv.length ? m = createTypedArray("float32", this.pv.length) : m = 0;
                for(var S; h < P;){
                    if (S = this.getValueAtTime(y + h * f), this.pv.length) for(l = 0; l < this.pv.length; l += 1)m[l] += S[l];
                    else m += S;
                    h += 1;
                }
                if (this.pv.length) for(l = 0; l < this.pv.length; l += 1)m[l] /= P;
                else m /= P;
                return m;
            }
            function r(c) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var P = this._transformCachingAtTime.v;
                if (P.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var g = this.a.getValueAtTime(c);
                    P.translate(-g[0] * this.a.mult, -g[1] * this.a.mult, g[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                    var y = this.s.getValueAtTime(c);
                    P.scale(y[0] * this.s.mult, y[1] * this.s.mult, y[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var _ = this.sk.getValueAtTime(c), f = this.sa.getValueAtTime(c);
                    P.skewFromAxis(-_ * this.sk.mult, f * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                    var h = this.r.getValueAtTime(c);
                    P.rotate(-h * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                    var l = this.rz.getValueAtTime(c), m = this.ry.getValueAtTime(c), S = this.rx.getValueAtTime(c), T = this.or.getValueAtTime(c);
                    P.rotateZ(-l * this.rz.mult).rotateY(m * this.ry.mult).rotateX(S * this.rx.mult).rotateZ(-T[2] * this.or.mult).rotateY(T[1] * this.or.mult).rotateX(T[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                    var A = this.px.getValueAtTime(c), D = this.py.getValueAtTime(c);
                    if (this.data.p.z) {
                        var I = this.pz.getValueAtTime(c);
                        P.translate(A * this.px.mult, D * this.py.mult, -I * this.pz.mult);
                    } else P.translate(A * this.px.mult, D * this.py.mult, 0);
                } else {
                    var R = this.p.getValueAtTime(c);
                    P.translate(R[0] * this.p.mult, R[1] * this.p.mult, -R[2] * this.p.mult);
                }
                return P;
            }
            function s() {
                return this.v.clone(new Matrix);
            }
            var a = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(c, P, g) {
                var y = a(c, P, g);
                return y.dynamicProperties.length ? y.getValueAtTime = r.bind(y) : y.getValueAtTime = s.bind(y), y.setGroupProperty = expressionHelpers.setGroupProperty, y;
            };
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function(c, P, g, y, _) {
                var f = n(c, P, g, y, _);
                f.kf ? f.getValueAtTime = expressionHelpers.getValueAtTime.bind(f) : f.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(f), f.setGroupProperty = expressionHelpers.setGroupProperty, f.loopOut = t, f.loopIn = e, f.smooth = i, f.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(f), f.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(f), f.numKeys = P.a === 1 ? P.k.length : 0, f.propertyIndex = P.ix;
                var h = 0;
                return g !== 0 && (h = createTypedArray("float32", P.a === 1 ? P.k[0].s.length : P.k.length)), f._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: h
                }, expressionHelpers.searchExpressions(c, P, f), f.k && _.addDynamicProperty(f), f;
            };
            function p(c) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), c *= this.elem.globalData.frameRate, c -= this.offsetTime, c !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < c ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = c, this.interpolateShape(c, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
            }
            var o = ShapePropertyFactory.getConstructorFunction(), d = ShapePropertyFactory.getKeyframedConstructorFunction();
            function v() {}
            v.prototype = {
                vertices: function(c, P) {
                    this.k && this.getValue();
                    var g = this.v;
                    P !== void 0 && (g = this.getValueAtTime(P, 0));
                    var y, _ = g._length, f = g[c], h = g.v, l = createSizedArray(_);
                    for(y = 0; y < _; y += 1)c === "i" || c === "o" ? l[y] = [
                        f[y][0] - h[y][0],
                        f[y][1] - h[y][1]
                    ] : l[y] = [
                        f[y][0],
                        f[y][1]
                    ];
                    return l;
                },
                points: function(c) {
                    return this.vertices("v", c);
                },
                inTangents: function(c) {
                    return this.vertices("i", c);
                },
                outTangents: function(c) {
                    return this.vertices("o", c);
                },
                isClosed: function() {
                    return this.v.c;
                },
                pointOnPath: function(c, P) {
                    var g = this.v;
                    P !== void 0 && (g = this.getValueAtTime(P, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(g));
                    for(var y = this._segmentsLength, _ = y.lengths, f = y.totalLength * c, h = 0, l = _.length, m = 0, S; h < l;){
                        if (m + _[h].addedLength > f) {
                            var T = h, A = g.c && h === l - 1 ? 0 : h + 1, D = (f - m) / _[h].addedLength;
                            S = bez.getPointInSegment(g.v[T], g.v[A], g.o[T], g.i[A], D, _[h]);
                            break;
                        } else m += _[h].addedLength;
                        h += 1;
                    }
                    return S || (S = g.c ? [
                        g.v[0][0],
                        g.v[0][1]
                    ] : [
                        g.v[g._length - 1][0],
                        g.v[g._length - 1][1]
                    ]), S;
                },
                vectorOnPath: function(c, P, g) {
                    c == 1 ? c = this.v.c : c == 0 && (c = .999);
                    var y = this.pointOnPath(c, P), _ = this.pointOnPath(c + .001, P), f = _[0] - y[0], h = _[1] - y[1], l = Math.sqrt(Math.pow(f, 2) + Math.pow(h, 2));
                    if (l === 0) return [
                        0,
                        0
                    ];
                    var m = g === "tangent" ? [
                        f / l,
                        h / l
                    ] : [
                        -h / l,
                        f / l
                    ];
                    return m;
                },
                tangentOnPath: function(c, P) {
                    return this.vectorOnPath(c, P, "tangent");
                },
                normalOnPath: function(c, P) {
                    return this.vectorOnPath(c, P, "normal");
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([
                v
            ], o), extendPrototype([
                v
            ], d), d.prototype.getValueAtTime = p, d.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var b = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(c, P, g, y, _) {
                var f = b(c, P, g, y, _);
                return f.propertyIndex = P.ix, f.lock = !1, g === 3 ? expressionHelpers.searchExpressions(c, P.pt, f) : g === 4 && expressionHelpers.searchExpressions(c, P.ks, f), f.k && c.addDynamicProperty(f), f;
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
        function TransformEffect() {}
        TransformEffect.prototype.init = function(t) {
            this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1;
        }, TransformEffect.prototype.renderFrame = function(t) {
            if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
                var e = this.effectsManager.effectElements, i = e[0].p.v, r = e[1].p.v, s = e[2].p.v === 1, a = e[3].p.v, n = s ? a : e[4].p.v, p = e[5].p.v, o = e[6].p.v, d = e[7].p.v;
                this.matrix.reset(), this.matrix.translate(-i[0], -i[1], i[2]), this.matrix.scale(n * .01, a * .01, 1), this.matrix.rotate(-d * degToRads), this.matrix.skewFromAxis(-p * degToRads, (o + 90) * degToRads), this.matrix.translate(r[0], r[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0);
            }
        };
        function CVTransformEffect(t) {
            this.init(t);
        }
        return extendPrototype([
            TransformEffect
        ], CVTransformEffect), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(35, CVTransformEffect), lottie;
    });
}), yt = ut(); /*! Bundled license information:

lottie-web/build/player/lottie_canvas.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)
*/ 

},{"./chunk-HDDX7F4A.mjs":"2Aqr0","./chunk-ZWH2ESXT.mjs":"jX5B9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7PWpd"], null, "parcelRequire94c2")

//# sourceMappingURL=lottie_canvas-CDSUBMCL-MZNYH5VV.db226f2c.js.map
