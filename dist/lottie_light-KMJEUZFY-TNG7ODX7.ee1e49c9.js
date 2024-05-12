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
})({"hiTkN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "25bb67faee1e49c9";
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

},{}],"9928f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ma) //# sourceMappingURL=out.js.map
;
var _chunkHDDX7F4AMjs = require("./chunk-HDDX7F4A.mjs");
var _chunkZWH2ESXTMjs = require("./chunk-ZWH2ESXT.mjs");
var fa = (0, _chunkHDDX7F4AMjs.a)((xe, We)=>{
    typeof navigator < "u" && function(oe, Kt) {
        typeof xe == "object" && typeof We < "u" ? We.exports = Kt() : typeof define == "function" && define.amd ? define(Kt) : (oe = typeof globalThis < "u" ? globalThis : oe || self, oe.lottie = Kt());
    }(xe, function() {
        var oe = "http://www.w3.org/2000/svg", Kt = "", ns = !1, Xe = -999999, ai = function(t) {
            ns = !!t;
        }, ri = function() {
            return ns;
        }, ni = function(t) {
            Kt = t;
        }, ct = function() {
            return Kt;
        };
        function Lt(t) {
            return document.createElement(t);
        }
        function Y(t, e) {
            var s, i = t.length, r;
            for(s = 0; s < i; s += 1){
                r = t[s].prototype;
                for(var a in r)Object.prototype.hasOwnProperty.call(r, a) && (e.prototype[a] = r[a]);
            }
        }
        function oi(t) {
            function e() {}
            return e.prototype = t, e;
        }
        var hi = function() {
            function t(e) {
                this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1;
            }
            return t.prototype = {
                addAudio: function(e) {
                    this.audios.push(e);
                },
                pause: function() {
                    var e, s = this.audios.length;
                    for(e = 0; e < s; e += 1)this.audios[e].pause();
                },
                resume: function() {
                    var e, s = this.audios.length;
                    for(e = 0; e < s; e += 1)this.audios[e].resume();
                },
                setRate: function(e) {
                    var s, i = this.audios.length;
                    for(s = 0; s < i; s += 1)this.audios[s].setRate(e);
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
                    var e, s = this.audios.length;
                    for(e = 0; e < s; e += 1)this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1));
                }
            }, function() {
                return new t;
            };
        }(), it = function() {
            function t(s, i) {
                var r = 0, a = [], h;
                switch(s){
                    case "int16":
                    case "uint8c":
                        h = 1;
                        break;
                    default:
                        h = 1.1;
                        break;
                }
                for(r = 0; r < i; r += 1)a.push(h);
                return a;
            }
            function e(s, i) {
                return s === "float32" ? new Float32Array(i) : s === "int16" ? new Int16Array(i) : s === "uint8c" ? new Uint8ClampedArray(i) : t(s, i);
            }
            return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
        }();
        function tt(t) {
            return Array.apply(null, {
                length: t
            });
        }
        var os = !0, hs = null, ls = "", li = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), At = Math.pow, ps = Math.sqrt, Yt = Math.floor, pi = Math.min, fs = 150, H = Math.PI / 180, Vt = .5519;
        function Je(t, e, s, i) {
            this.type = t, this.currentTime = e, this.totalTime = s, this.direction = i < 0 ? -1 : 1;
        }
        function us(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1;
        }
        function ms(t, e, s, i) {
            this.type = t, this.currentLoop = s, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
        }
        function ds(t, e, s) {
            this.type = t, this.firstFrame = e, this.totalFrames = s;
        }
        function cs(t, e) {
            this.type = t, this.target = e;
        }
        function fi(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
        }
        function ui(t) {
            this.type = "configError", this.nativeError = t;
        }
        var pt = function() {
            var t = 0;
            return function() {
                return t += 1, ls + "__lottie_element_" + t;
            };
        }();
        function Ye(t, e, s) {
            var i, r, a, h, m, o, b, _;
            switch(h = Math.floor(t * 6), m = t * 6 - h, o = s * (1 - e), b = s * (1 - m * e), _ = s * (1 - (1 - m) * e), h % 6){
                case 0:
                    i = s, r = _, a = o;
                    break;
                case 1:
                    i = b, r = s, a = o;
                    break;
                case 2:
                    i = o, r = s, a = _;
                    break;
                case 3:
                    i = o, r = b, a = s;
                    break;
                case 4:
                    i = _, r = o, a = s;
                    break;
                case 5:
                    i = s, r = o, a = b;
                    break;
            }
            return [
                i,
                r,
                a
            ];
        }
        function Ue(t, e, s) {
            var i = Math.max(t, e, s), r = Math.min(t, e, s), a = i - r, h, m = i === 0 ? 0 : a / i, o = i / 255;
            switch(i){
                case r:
                    h = 0;
                    break;
                case t:
                    h = e - s + a * (e < s ? 6 : 0), h /= 6 * a;
                    break;
                case e:
                    h = s - t + a * 2, h /= 6 * a;
                    break;
                case s:
                    h = t - e + a * 4, h /= 6 * a;
                    break;
            }
            return [
                h,
                m,
                o
            ];
        }
        function gs(t, e) {
            var s = Ue(t[0] * 255, t[1] * 255, t[2] * 255);
            return s[1] += e, s[1] > 1 ? s[1] = 1 : s[1] <= 0 && (s[1] = 0), Ye(s[0], s[1], s[2]);
        }
        function ys(t, e) {
            var s = Ue(t[0] * 255, t[1] * 255, t[2] * 255);
            return s[2] += e, s[2] > 1 ? s[2] = 1 : s[2] < 0 && (s[2] = 0), Ye(s[0], s[1], s[2]);
        }
        function vs(t, e) {
            var s = Ue(t[0] * 255, t[1] * 255, t[2] * 255);
            return s[0] += e / 360, s[0] > 1 ? s[0] -= 1 : s[0] < 0 && (s[0] += 1), Ye(s[0], s[1], s[2]);
        }
        (function() {
            var t = [], e, s;
            for(e = 0; e < 256; e += 1)s = e.toString(16), t[e] = s.length === 1 ? "0" + s : s;
            return function(i, r, a) {
                return i < 0 && (i = 0), r < 0 && (r = 0), a < 0 && (a = 0), "#" + t[i] + t[r] + t[a];
            };
        })();
        var mi = function(t) {
            os = !!t;
        }, di = function() {
            return os;
        }, ci = function(t) {
            hs = t;
        }, De = function() {
            return hs;
        }, Se = function(t) {
            fs = t;
        }, Me = function() {
            return fs;
        }, gi = function(t) {
            ls = t;
        };
        function q(t) {
            return document.createElementNS(oe, t);
        }
        function Te(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Te = function(e) {
                return typeof e;
            } : Te = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, Te(t);
        }
        var he = function() {
            var t = 1, e = [], s, i, r = {
                onmessage: function() {},
                postMessage: function(f) {
                    s({
                        data: f
                    });
                }
            }, a = {
                postMessage: function(f) {
                    r.onmessage({
                        data: f
                    });
                }
            };
            function h(f) {
                if (window.Worker && window.Blob && ri()) {
                    var A = new Blob([
                        "var _workerSelf = self; self.onmessage = ",
                        f.toString()
                    ], {
                        type: "text/javascript"
                    }), x = URL.createObjectURL(A);
                    return new Worker(x);
                }
                return s = f, r;
            }
            function m() {
                i || (i = h(function(f) {
                    function A() {
                        function k(E, F) {
                            var d, y, n = E.length, c, T, D, W;
                            for(y = 0; y < n; y += 1)if (d = E[y], "ks" in d && !d.completed) {
                                if (d.completed = !0, d.hasMask) {
                                    var z = d.masksProperties;
                                    for(T = z.length, c = 0; c < T; c += 1)if (z[c].pt.k.i) u(z[c].pt.k);
                                    else for(W = z[c].pt.k.length, D = 0; D < W; D += 1)z[c].pt.k[D].s && u(z[c].pt.k[D].s[0]), z[c].pt.k[D].e && u(z[c].pt.k[D].e[0]);
                                }
                                d.ty === 0 ? (d.layers = p(d.refId, F), k(d.layers, F)) : d.ty === 4 ? l(d.shapes) : d.ty === 5 && V(d);
                            }
                        }
                        function S(E, F) {
                            if (E) {
                                var d = 0, y = E.length;
                                for(d = 0; d < y; d += 1)E[d].t === 1 && (E[d].data.layers = p(E[d].data.refId, F), k(E[d].data.layers, F));
                            }
                        }
                        function g(E, F) {
                            for(var d = 0, y = F.length; d < y;){
                                if (F[d].id === E) return F[d];
                                d += 1;
                            }
                            return null;
                        }
                        function p(E, F) {
                            var d = g(E, F);
                            return d ? d.layers.__used ? JSON.parse(JSON.stringify(d.layers)) : (d.layers.__used = !0, d.layers) : null;
                        }
                        function l(E) {
                            var F, d = E.length, y, n;
                            for(F = d - 1; F >= 0; F -= 1)if (E[F].ty === "sh") {
                                if (E[F].ks.k.i) u(E[F].ks.k);
                                else for(n = E[F].ks.k.length, y = 0; y < n; y += 1)E[F].ks.k[y].s && u(E[F].ks.k[y].s[0]), E[F].ks.k[y].e && u(E[F].ks.k[y].e[0]);
                            } else E[F].ty === "gr" && l(E[F].it);
                        }
                        function u(E) {
                            var F, d = E.i.length;
                            for(F = 0; F < d; F += 1)E.i[F][0] += E.v[F][0], E.i[F][1] += E.v[F][1], E.o[F][0] += E.v[F][0], E.o[F][1] += E.v[F][1];
                        }
                        function v(E, F) {
                            var d = F ? F.split(".") : [
                                100,
                                100,
                                100
                            ];
                            return E[0] > d[0] ? !0 : d[0] > E[0] ? !1 : E[1] > d[1] ? !0 : d[1] > E[1] ? !1 : E[2] > d[2] ? !0 : d[2] > E[2] ? !1 : null;
                        }
                        var M = function() {
                            var E = [
                                4,
                                4,
                                14
                            ];
                            function F(y) {
                                var n = y.t.d;
                                y.t.d = {
                                    k: [
                                        {
                                            s: n,
                                            t: 0
                                        }
                                    ]
                                };
                            }
                            function d(y) {
                                var n, c = y.length;
                                for(n = 0; n < c; n += 1)y[n].ty === 5 && F(y[n]);
                            }
                            return function(y) {
                                if (v(E, y.v) && (d(y.layers), y.assets)) {
                                    var n, c = y.assets.length;
                                    for(n = 0; n < c; n += 1)y.assets[n].layers && d(y.assets[n].layers);
                                }
                            };
                        }(), C = function() {
                            var E = [
                                4,
                                7,
                                99
                            ];
                            return function(F) {
                                if (F.chars && !v(E, F.v)) {
                                    var d, y = F.chars.length;
                                    for(d = 0; d < y; d += 1){
                                        var n = F.chars[d];
                                        n.data && n.data.shapes && (l(n.data.shapes), n.data.ip = 0, n.data.op = 99999, n.data.st = 0, n.data.sr = 1, n.data.ks = {
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
                                        }, F.chars[d].t || (n.data.shapes.push({
                                            ty: "no"
                                        }), n.data.shapes[0].it.push({
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
                        }(), w = function() {
                            var E = [
                                5,
                                7,
                                15
                            ];
                            function F(y) {
                                var n = y.t.p;
                                typeof n.a == "number" && (n.a = {
                                    a: 0,
                                    k: n.a
                                }), typeof n.p == "number" && (n.p = {
                                    a: 0,
                                    k: n.p
                                }), typeof n.r == "number" && (n.r = {
                                    a: 0,
                                    k: n.r
                                });
                            }
                            function d(y) {
                                var n, c = y.length;
                                for(n = 0; n < c; n += 1)y[n].ty === 5 && F(y[n]);
                            }
                            return function(y) {
                                if (v(E, y.v) && (d(y.layers), y.assets)) {
                                    var n, c = y.assets.length;
                                    for(n = 0; n < c; n += 1)y.assets[n].layers && d(y.assets[n].layers);
                                }
                            };
                        }(), I = function() {
                            var E = [
                                4,
                                1,
                                9
                            ];
                            function F(y) {
                                var n, c = y.length, T, D;
                                for(n = 0; n < c; n += 1)if (y[n].ty === "gr") F(y[n].it);
                                else if (y[n].ty === "fl" || y[n].ty === "st") {
                                    if (y[n].c.k && y[n].c.k[0].i) for(D = y[n].c.k.length, T = 0; T < D; T += 1)y[n].c.k[T].s && (y[n].c.k[T].s[0] /= 255, y[n].c.k[T].s[1] /= 255, y[n].c.k[T].s[2] /= 255, y[n].c.k[T].s[3] /= 255), y[n].c.k[T].e && (y[n].c.k[T].e[0] /= 255, y[n].c.k[T].e[1] /= 255, y[n].c.k[T].e[2] /= 255, y[n].c.k[T].e[3] /= 255);
                                    else y[n].c.k[0] /= 255, y[n].c.k[1] /= 255, y[n].c.k[2] /= 255, y[n].c.k[3] /= 255;
                                }
                            }
                            function d(y) {
                                var n, c = y.length;
                                for(n = 0; n < c; n += 1)y[n].ty === 4 && F(y[n].shapes);
                            }
                            return function(y) {
                                if (v(E, y.v) && (d(y.layers), y.assets)) {
                                    var n, c = y.assets.length;
                                    for(n = 0; n < c; n += 1)y.assets[n].layers && d(y.assets[n].layers);
                                }
                            };
                        }(), N = function() {
                            var E = [
                                4,
                                4,
                                18
                            ];
                            function F(y) {
                                var n, c = y.length, T, D;
                                for(n = c - 1; n >= 0; n -= 1)if (y[n].ty === "sh") {
                                    if (y[n].ks.k.i) y[n].ks.k.c = y[n].closed;
                                    else for(D = y[n].ks.k.length, T = 0; T < D; T += 1)y[n].ks.k[T].s && (y[n].ks.k[T].s[0].c = y[n].closed), y[n].ks.k[T].e && (y[n].ks.k[T].e[0].c = y[n].closed);
                                } else y[n].ty === "gr" && F(y[n].it);
                            }
                            function d(y) {
                                var n, c, T = y.length, D, W, z, J;
                                for(c = 0; c < T; c += 1){
                                    if (n = y[c], n.hasMask) {
                                        var X = n.masksProperties;
                                        for(W = X.length, D = 0; D < W; D += 1)if (X[D].pt.k.i) X[D].pt.k.c = X[D].cl;
                                        else for(J = X[D].pt.k.length, z = 0; z < J; z += 1)X[D].pt.k[z].s && (X[D].pt.k[z].s[0].c = X[D].cl), X[D].pt.k[z].e && (X[D].pt.k[z].e[0].c = X[D].cl);
                                    }
                                    n.ty === 4 && F(n.shapes);
                                }
                            }
                            return function(y) {
                                if (v(E, y.v) && (d(y.layers), y.assets)) {
                                    var n, c = y.assets.length;
                                    for(n = 0; n < c; n += 1)y.assets[n].layers && d(y.assets[n].layers);
                                }
                            };
                        }();
                        function O(E) {
                            E.__complete || (I(E), M(E), C(E), w(E), N(E), k(E.layers, E.assets), S(E.chars, E.assets), E.__complete = !0);
                        }
                        function V(E) {
                            E.t.a.length === 0 && E.t.p;
                        }
                        var j = {};
                        return j.completeData = O, j.checkColors = I, j.checkChars = C, j.checkPathProperties = w, j.checkShapes = N, j.completeLayers = k, j;
                    }
                    if (a.dataManager || (a.dataManager = A()), a.assetLoader || (a.assetLoader = function() {
                        function k(g) {
                            var p = g.getResponseHeader("content-type");
                            return p && g.responseType === "json" && p.indexOf("json") !== -1 || g.response && Te(g.response) === "object" ? g.response : g.response && typeof g.response == "string" ? JSON.parse(g.response) : g.responseText ? JSON.parse(g.responseText) : null;
                        }
                        function S(g, p, l, u) {
                            var v, M = new XMLHttpRequest;
                            try {
                                M.responseType = "json";
                            } catch  {}
                            M.onreadystatechange = function() {
                                if (M.readyState === 4) {
                                    if (M.status === 200) v = k(M), l(v);
                                    else try {
                                        v = k(M), l(v);
                                    } catch (C) {
                                        u && u(C);
                                    }
                                }
                            };
                            try {
                                M.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), g, !0);
                            } catch  {
                                M.open([
                                    "G",
                                    "E",
                                    "T"
                                ].join(""), p + "/" + g, !0);
                            }
                            M.send();
                        }
                        return {
                            load: S
                        };
                    }()), f.data.type === "loadAnimation") a.assetLoader.load(f.data.path, f.data.fullPath, function(k) {
                        a.dataManager.completeData(k), a.postMessage({
                            id: f.data.id,
                            payload: k,
                            status: "success"
                        });
                    }, function() {
                        a.postMessage({
                            id: f.data.id,
                            status: "error"
                        });
                    });
                    else if (f.data.type === "complete") {
                        var x = f.data.animation;
                        a.dataManager.completeData(x), a.postMessage({
                            id: f.data.id,
                            payload: x,
                            status: "success"
                        });
                    } else f.data.type === "loadData" && a.assetLoader.load(f.data.path, f.data.fullPath, function(k) {
                        a.postMessage({
                            id: f.data.id,
                            payload: k,
                            status: "success"
                        });
                    }, function() {
                        a.postMessage({
                            id: f.data.id,
                            status: "error"
                        });
                    });
                }), i.onmessage = function(f) {
                    var A = f.data, x = A.id, k = e[x];
                    e[x] = null, A.status === "success" ? k.onComplete(A.payload) : k.onError && k.onError();
                });
            }
            function o(f, A) {
                t += 1;
                var x = "processId_" + t;
                return e[x] = {
                    onComplete: f,
                    onError: A
                }, x;
            }
            function b(f, A, x) {
                m();
                var k = o(A, x);
                i.postMessage({
                    type: "loadAnimation",
                    path: f,
                    fullPath: window.location.origin + window.location.pathname,
                    id: k
                });
            }
            function _(f, A, x) {
                m();
                var k = o(A, x);
                i.postMessage({
                    type: "loadData",
                    path: f,
                    fullPath: window.location.origin + window.location.pathname,
                    id: k
                });
            }
            function P(f, A, x) {
                m();
                var k = o(A, x);
                i.postMessage({
                    type: "complete",
                    animation: f,
                    id: k
                });
            }
            return {
                loadAnimation: b,
                loadData: _,
                completeAnimation: P
            };
        }(), yi = function() {
            var t = function() {
                var g = Lt("canvas");
                g.width = 1, g.height = 1;
                var p = g.getContext("2d");
                return p.fillStyle = "rgba(0,0,0,0)", p.fillRect(0, 0, 1, 1), g;
            }();
            function e() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function s() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function i(g, p, l) {
                var u = "";
                if (g.e) u = g.p;
                else if (p) {
                    var v = g.p;
                    v.indexOf("images/") !== -1 && (v = v.split("/")[1]), u = p + v;
                } else u = l, u += g.u ? g.u : "", u += g.p;
                return u;
            }
            function r(g) {
                var p = 0, l = setInterval((function() {
                    var u = g.getBBox();
                    (u.width || p > 500) && (this._imageLoaded(), clearInterval(l)), p += 1;
                }).bind(this), 50);
            }
            function a(g) {
                var p = i(g, this.assetsPath, this.path), l = q("image");
                li ? this.testImageLoaded(l) : l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", (function() {
                    u.img = t, this._imageLoaded();
                }).bind(this), !1), l.setAttributeNS("http://www.w3.org/1999/xlink", "href", p), this._elementHelper.append ? this._elementHelper.append(l) : this._elementHelper.appendChild(l);
                var u = {
                    img: l,
                    assetData: g
                };
                return u;
            }
            function h(g) {
                var p = i(g, this.assetsPath, this.path), l = Lt("img");
                l.crossOrigin = "anonymous", l.addEventListener("load", this._imageLoaded, !1), l.addEventListener("error", (function() {
                    u.img = t, this._imageLoaded();
                }).bind(this), !1), l.src = p;
                var u = {
                    img: l,
                    assetData: g
                };
                return u;
            }
            function m(g) {
                var p = {
                    assetData: g
                }, l = i(g, this.assetsPath, this.path);
                return he.loadData(l, (function(u) {
                    p.img = u, this._footageLoaded();
                }).bind(this), (function() {
                    p.img = {}, this._footageLoaded();
                }).bind(this)), p;
            }
            function o(g, p) {
                this.imagesLoadedCb = p;
                var l, u = g.length;
                for(l = 0; l < u; l += 1)g[l].layers || (!g[l].t || g[l].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(g[l]))) : g[l].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(g[l]))));
            }
            function b(g) {
                this.path = g || "";
            }
            function _(g) {
                this.assetsPath = g || "";
            }
            function P(g) {
                for(var p = 0, l = this.images.length; p < l;){
                    if (this.images[p].assetData === g) return this.images[p].img;
                    p += 1;
                }
                return null;
            }
            function f() {
                this.imagesLoadedCb = null, this.images.length = 0;
            }
            function A() {
                return this.totalImages === this.loadedAssets;
            }
            function x() {
                return this.totalFootages === this.loadedFootagesCount;
            }
            function k(g, p) {
                g === "svg" ? (this._elementHelper = p, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
            }
            function S() {
                this._imageLoaded = e.bind(this), this._footageLoaded = s.bind(this), this.testImageLoaded = r.bind(this), this.createFootageData = m.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
            }
            return S.prototype = {
                loadAssets: o,
                setAssetsPath: _,
                setPath: b,
                loadedImages: A,
                loadedFootages: x,
                destroy: f,
                getAsset: P,
                createImgData: h,
                createImageData: a,
                imageLoaded: e,
                footageLoaded: s,
                setCacheType: k
            }, S;
        }();
        function bs() {}
        bs.prototype = {
            triggerEvent: function(t, e) {
                if (this._cbs[t]) for(var s = this._cbs[t], i = 0; i < s.length; i += 1)s[i](e);
            },
            addEventListener: function(t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
                    this.removeEventListener(t, e);
                }).bind(this);
            },
            removeEventListener: function(t, e) {
                if (!e) this._cbs[t] = null;
                else if (this._cbs[t]) {
                    for(var s = 0, i = this._cbs[t].length; s < i;)this._cbs[t][s] === e && (this._cbs[t].splice(s, 1), s -= 1, i -= 1), s += 1;
                    this._cbs[t].length || (this._cbs[t] = null);
                }
            }
        };
        var vi = function() {
            function t(e) {
                for(var s = e.split(`\r
`), i = {}, r, a = 0, h = 0; h < s.length; h += 1)r = s[h].split(":"), r.length === 2 && (i[r[0]] = r[1].trim(), a += 1);
                if (a === 0) throw new Error;
                return i;
            }
            return function(e) {
                for(var s = [], i = 0; i < e.length; i += 1){
                    var r = e[i], a = {
                        time: r.tm,
                        duration: r.dr
                    };
                    try {
                        a.payload = JSON.parse(e[i].cm);
                    } catch  {
                        try {
                            a.payload = t(e[i].cm);
                        } catch  {
                            a.payload = {
                                name: e[i].cm
                            };
                        }
                    }
                    s.push(a);
                }
                return s;
            };
        }(), bi = function() {
            function t(e) {
                this.compositions.push(e);
            }
            return function() {
                function e(s) {
                    for(var i = 0, r = this.compositions.length; i < r;){
                        if (this.compositions[i].data && this.compositions[i].data.nm === s) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                        i += 1;
                    }
                    return null;
                }
                return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
            };
        }(), le = {}, _i = function(t, e) {
            le[t] = e;
        };
        function ki(t) {
            return le[t];
        }
        function Ai() {
            if (le.canvas) return "canvas";
            for(var t in le)if (le[t]) return t;
            return "";
        }
        function pe(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pe = function(e) {
                return typeof e;
            } : pe = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, pe(t);
        }
        var B = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = pt(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = di(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = bi(), this.imagePreloader = new yi, this.audioController = hi(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new Je("drawnFrame", 0, 0, 0), this.expressionsPlugin = De();
        };
        Y([
            bs
        ], B), B.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? e = t.animType : t.renderer && (e = t.renderer);
            var s = ki(e);
            this.renderer = new s(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), he.loadAnimation(t.path, this.configAnimation, this.onSetupError));
        }, B.prototype.onSetupError = function() {
            this.trigger("data_failed");
        }, B.prototype.setupAnimation = function(t) {
            he.completeAnimation(t, this.configAnimation);
        }, B.prototype.setData = function(t, e) {
            e && pe(e) !== "object" && (e = JSON.parse(e));
            var s = {
                wrapper: t,
                animationData: e
            }, i = t.attributes;
            s.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", s.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : Ai() || "canvas";
            var r = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            r === "false" ? s.loop = !1 : r === "true" ? s.loop = !0 : r !== "" && (s.loop = parseInt(r, 10));
            var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
            s.autoplay = a !== "false", s.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
            var h = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
            h === "false" && (s.prerender = !1), s.path ? this.setParams(s) : this.trigger("destroy");
        }, B.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e = this.animationData.layers, s, i = e.length, r = t.layers, a, h = r.length;
            for(a = 0; a < h; a += 1)for(s = 0; s < i;){
                if (e[s].id === r[a].id) {
                    e[s] = r[a];
                    break;
                }
                s += 1;
            }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for(i = t.assets.length, s = 0; s < i; s += 1)this.animationData.assets.push(t.assets[s]);
            this.animationData.__complete = !1, he.completeAnimation(this.animationData, this.onSegmentComplete);
        }, B.prototype.onSegmentComplete = function(t) {
            this.animationData = t;
            var e = De();
            e && e.initExpressions(this), this.loadNextSegment();
        }, B.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || t.length === 0 || !this.autoloadSegments) {
                this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                return;
            }
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var s = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, he.loadData(s, this.includeLayers.bind(this), (function() {
                this.trigger("data_failed");
            }).bind(this));
        }, B.prototype.loadSegments = function() {
            var t = this.animationData.segments;
            t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
        }, B.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded();
        }, B.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
        }, B.prototype.configAnimation = function(t) {
            if (this.renderer) try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = vi(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
            } catch (e) {
                this.triggerConfigError(e);
            }
        }, B.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }, B.prototype.checkLoaded = function() {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var t = De();
                t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                    this.trigger("DOMLoaded");
                }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
            }
        }, B.prototype.resize = function(t, e) {
            var s = typeof t == "number" ? t : void 0, i = typeof e == "number" ? e : void 0;
            this.renderer.updateContainerSize(s, i);
        }, B.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t;
        }, B.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
        }, B.prototype.renderFrame = function() {
            if (!(this.isLoaded === !1 || !this.renderer)) try {
                this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (t) {
                this.triggerRenderFrameError(t);
            }
        }, B.prototype.play = function(t) {
            t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
        }, B.prototype.pause = function(t) {
            t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
        }, B.prototype.togglePause = function(t) {
            t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause());
        }, B.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
        }, B.prototype.getMarkerData = function(t) {
            for(var e, s = 0; s < this.markers.length; s += 1)if (e = this.markers[s], e.payload && e.payload.name === t) return e;
            return null;
        }, B.prototype.goToAndStop = function(t, e, s) {
            if (!(s && this.name !== s)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var r = this.getMarkerData(t);
                    r && this.goToAndStop(r.time, !0);
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause();
            }
        }, B.prototype.goToAndPlay = function(t, e, s) {
            if (!(s && this.name !== s)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var r = this.getMarkerData(t);
                    r && (r.duration ? this.playSegments([
                        r.time,
                        r.time + r.duration
                    ], !0) : this.goToAndStop(r.time, !0));
                } else this.goToAndStop(i, e, s);
                this.play();
            }
        }, B.prototype.advanceTime = function(t) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var e = this.currentRawFrame + t * this.frameModifier, s = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (s = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (s = !0, e = 0)) : this.setCurrentRawFrameValue(e), s && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
            }
        }, B.prototype.adjustSegment = function(t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart");
        }, B.prototype.setSegment = function(t, e) {
            var s = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? s = t : this.currentRawFrame + this.firstFrame > e && (s = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, s !== -1 && this.goToAndStop(s, !0);
        }, B.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), pe(t[0]) === "object") {
                var s, i = t.length;
                for(s = 0; s < i; s += 1)this.segments.push(t[s]);
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
        }, B.prototype.resetSegments = function(t) {
            this.segments.length = 0, this.segments.push([
                this.animationData.ip,
                this.animationData.op
            ]), t && this.checkSegments(0);
        }, B.prototype.checkSegments = function(t) {
            return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), !0) : !1;
        }, B.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
        }, B.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t, this.gotoFrame();
        }, B.prototype.setSpeed = function(t) {
            this.playSpeed = t, this.updaFrameModifier();
        }, B.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
        }, B.prototype.setLoop = function(t) {
            this.loop = t;
        }, B.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t);
        }, B.prototype.getVolume = function() {
            return this.audioController.getVolume();
        }, B.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute();
        }, B.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute();
        }, B.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
        }, B.prototype.getPath = function() {
            return this.path;
        }, B.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
                var s = t.p;
                s.indexOf("images/") !== -1 && (s = s.split("/")[1]), e = this.assetsPath + s;
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e;
        }, B.prototype.getAssetData = function(t) {
            for(var e = 0, s = this.assets.length; e < s;){
                if (t === this.assets[e].id) return this.assets[e];
                e += 1;
            }
            return null;
        }, B.prototype.hide = function() {
            this.renderer.hide();
        }, B.prototype.show = function() {
            this.renderer.show();
        }, B.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate;
        }, B.prototype.updateDocumentData = function(t, e, s) {
            try {
                var i = this.renderer.getElementByPath(t);
                i.updateDocumentData(e, s);
            } catch  {}
        }, B.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t]) switch(t){
                case "enterFrame":
                    this.triggerEvent(t, new Je(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new ms(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new us(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new ds(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new cs(t, this));
                    break;
                default:
                    this.triggerEvent(t);
            }
            t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new Je(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new ms(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new us(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new ds(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new cs(t, this));
        }, B.prototype.triggerRenderFrameError = function(t) {
            var e = new fi(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
        }, B.prototype.triggerConfigError = function(t) {
            var e = new ui(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
        };
        var et = function() {
            var t = {}, e = [], s = 0, i = 0, r = 0, a = !0, h = !1;
            function m(d) {
                for(var y = 0, n = d.target; y < i;)e[y].animation === n && (e.splice(y, 1), y -= 1, i -= 1, n.isPaused || P()), y += 1;
            }
            function o(d, y) {
                if (!d) return null;
                for(var n = 0; n < i;){
                    if (e[n].elem === d && e[n].elem !== null) return e[n].animation;
                    n += 1;
                }
                var c = new B;
                return f(c, d), c.setData(d, y), c;
            }
            function b() {
                var d, y = e.length, n = [];
                for(d = 0; d < y; d += 1)n.push(e[d].animation);
                return n;
            }
            function _() {
                r += 1, N();
            }
            function P() {
                r -= 1;
            }
            function f(d, y) {
                d.addEventListener("destroy", m), d.addEventListener("_active", _), d.addEventListener("_idle", P), e.push({
                    elem: y,
                    animation: d
                }), i += 1;
            }
            function A(d) {
                var y = new B;
                return f(y, null), y.setParams(d), y;
            }
            function x(d, y) {
                var n;
                for(n = 0; n < i; n += 1)e[n].animation.setSpeed(d, y);
            }
            function k(d, y) {
                var n;
                for(n = 0; n < i; n += 1)e[n].animation.setDirection(d, y);
            }
            function S(d) {
                var y;
                for(y = 0; y < i; y += 1)e[y].animation.play(d);
            }
            function g(d) {
                var y = d - s, n;
                for(n = 0; n < i; n += 1)e[n].animation.advanceTime(y);
                s = d, r && !h ? window.requestAnimationFrame(g) : a = !0;
            }
            function p(d) {
                s = d, window.requestAnimationFrame(g);
            }
            function l(d) {
                var y;
                for(y = 0; y < i; y += 1)e[y].animation.pause(d);
            }
            function u(d, y, n) {
                var c;
                for(c = 0; c < i; c += 1)e[c].animation.goToAndStop(d, y, n);
            }
            function v(d) {
                var y;
                for(y = 0; y < i; y += 1)e[y].animation.stop(d);
            }
            function M(d) {
                var y;
                for(y = 0; y < i; y += 1)e[y].animation.togglePause(d);
            }
            function C(d) {
                var y;
                for(y = i - 1; y >= 0; y -= 1)e[y].animation.destroy(d);
            }
            function w(d, y, n) {
                var c = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), T, D = c.length;
                for(T = 0; T < D; T += 1)n && c[T].setAttribute("data-bm-type", n), o(c[T], d);
                if (y && D === 0) {
                    n || (n = "svg");
                    var W = document.getElementsByTagName("body")[0];
                    W.innerText = "";
                    var z = Lt("div");
                    z.style.width = "100%", z.style.height = "100%", z.setAttribute("data-bm-type", n), W.appendChild(z), o(z, d);
                }
            }
            function I() {
                var d;
                for(d = 0; d < i; d += 1)e[d].animation.resize();
            }
            function N() {
                !h && r && a && (window.requestAnimationFrame(p), a = !1);
            }
            function O() {
                h = !0;
            }
            function V() {
                h = !1, N();
            }
            function j(d, y) {
                var n;
                for(n = 0; n < i; n += 1)e[n].animation.setVolume(d, y);
            }
            function E(d) {
                var y;
                for(y = 0; y < i; y += 1)e[y].animation.mute(d);
            }
            function F(d) {
                var y;
                for(y = 0; y < i; y += 1)e[y].animation.unmute(d);
            }
            return t.registerAnimation = o, t.loadAnimation = A, t.setSpeed = x, t.setDirection = k, t.play = S, t.pause = l, t.stop = v, t.togglePause = M, t.searchAnimations = w, t.resize = I, t.goToAndStop = u, t.destroy = C, t.freeze = O, t.unfreeze = V, t.setVolume = j, t.mute = E, t.unmute = F, t.getRegisteredAnimations = b, t;
        }(), fe = function() {
            var t = {};
            t.getBezierEasing = s;
            var e = {};
            function s(p, l, u, v, M) {
                var C = M || ("bez_" + p + "_" + l + "_" + u + "_" + v).replace(/\./g, "p");
                if (e[C]) return e[C];
                var w = new g([
                    p,
                    l,
                    u,
                    v
                ]);
                return e[C] = w, w;
            }
            var i = 4, r = .001, a = 1e-7, h = 10, m = 11, o = 1 / (m - 1), b = typeof Float32Array == "function";
            function _(p, l) {
                return 1 - 3 * l + 3 * p;
            }
            function P(p, l) {
                return 3 * l - 6 * p;
            }
            function f(p) {
                return 3 * p;
            }
            function A(p, l, u) {
                return ((_(l, u) * p + P(l, u)) * p + f(l)) * p;
            }
            function x(p, l, u) {
                return 3 * _(l, u) * p * p + 2 * P(l, u) * p + f(l);
            }
            function k(p, l, u, v, M) {
                var C, w, I = 0;
                do w = l + (u - l) / 2, C = A(w, v, M) - p, C > 0 ? u = w : l = w;
                while (Math.abs(C) > a && ++I < h);
                return w;
            }
            function S(p, l, u, v) {
                for(var M = 0; M < i; ++M){
                    var C = x(l, u, v);
                    if (C === 0) return l;
                    var w = A(l, u, v) - p;
                    l -= w / C;
                }
                return l;
            }
            function g(p) {
                this._p = p, this._mSampleValues = b ? new Float32Array(m) : new Array(m), this._precomputed = !1, this.get = this.get.bind(this);
            }
            return g.prototype = {
                get: function(p) {
                    var l = this._p[0], u = this._p[1], v = this._p[2], M = this._p[3];
                    return this._precomputed || this._precompute(), l === u && v === M ? p : p === 0 ? 0 : p === 1 ? 1 : A(this._getTForX(p), u, M);
                },
                _precompute: function() {
                    var p = this._p[0], l = this._p[1], u = this._p[2], v = this._p[3];
                    this._precomputed = !0, (p !== l || u !== v) && this._calcSampleValues();
                },
                _calcSampleValues: function() {
                    for(var p = this._p[0], l = this._p[2], u = 0; u < m; ++u)this._mSampleValues[u] = A(u * o, p, l);
                },
                _getTForX: function(p) {
                    for(var l = this._p[0], u = this._p[2], v = this._mSampleValues, M = 0, C = 1, w = m - 1; C !== w && v[C] <= p; ++C)M += o;
                    --C;
                    var I = (p - v[C]) / (v[C + 1] - v[C]), N = M + I * o, O = x(N, l, u);
                    return O >= r ? S(p, N, l, u) : O === 0 ? N : k(p, M, M + o, l, u);
                }
            }, t;
        }(), _s = function() {
            function t(e) {
                return e.concat(tt(e.length));
            }
            return {
                double: t
            };
        }(), Ce = function() {
            return function(t, e, s) {
                var i = 0, r = t, a = tt(r), h = {
                    newElement: m,
                    release: o
                };
                function m() {
                    var b;
                    return i ? (i -= 1, b = a[i]) : b = e(), b;
                }
                function o(b) {
                    i === r && (a = _s.double(a), r *= 2), s && s(b), a[i] = b, i += 1;
                }
                return h;
            };
        }(), ks = function() {
            function t() {
                return {
                    addedLength: 0,
                    percents: it("float32", Me()),
                    lengths: it("float32", Me())
                };
            }
            return Ce(8, t);
        }(), As = function() {
            function t() {
                return {
                    lengths: [],
                    totalLength: 0
                };
            }
            function e(s) {
                var i, r = s.lengths.length;
                for(i = 0; i < r; i += 1)ks.release(s.lengths[i]);
                s.lengths.length = 0;
            }
            return Ce(8, t, e);
        }();
        function Pi() {
            var t = Math;
            function e(f, A, x, k, S, g) {
                var p = f * k + A * S + x * g - S * k - g * f - x * A;
                return p > -0.001 && p < .001;
            }
            function s(f, A, x, k, S, g, p, l, u) {
                if (x === 0 && g === 0 && u === 0) return e(f, A, k, S, p, l);
                var v = t.sqrt(t.pow(k - f, 2) + t.pow(S - A, 2) + t.pow(g - x, 2)), M = t.sqrt(t.pow(p - f, 2) + t.pow(l - A, 2) + t.pow(u - x, 2)), C = t.sqrt(t.pow(p - k, 2) + t.pow(l - S, 2) + t.pow(u - g, 2)), w;
                return v > M ? v > C ? w = v - M - C : w = C - M - v : C > M ? w = C - M - v : w = M - v - C, w > -0.0001 && w < 1e-4;
            }
            var i = function() {
                return function(f, A, x, k) {
                    var S = Me(), g, p, l, u, v, M = 0, C, w = [], I = [], N = ks.newElement();
                    for(l = x.length, g = 0; g < S; g += 1){
                        for(v = g / (S - 1), C = 0, p = 0; p < l; p += 1)u = At(1 - v, 3) * f[p] + 3 * At(1 - v, 2) * v * x[p] + 3 * (1 - v) * At(v, 2) * k[p] + At(v, 3) * A[p], w[p] = u, I[p] !== null && (C += At(w[p] - I[p], 2)), I[p] = w[p];
                        C && (C = ps(C), M += C), N.percents[g] = v, N.lengths[g] = M;
                    }
                    return N.addedLength = M, N;
                };
            }();
            function r(f) {
                var A = As.newElement(), x = f.c, k = f.v, S = f.o, g = f.i, p, l = f._length, u = A.lengths, v = 0;
                for(p = 0; p < l - 1; p += 1)u[p] = i(k[p], k[p + 1], S[p], g[p + 1]), v += u[p].addedLength;
                return x && l && (u[p] = i(k[p], k[0], S[p], g[0]), v += u[p].addedLength), A.totalLength = v, A;
            }
            function a(f) {
                this.segmentLength = 0, this.points = new Array(f);
            }
            function h(f, A) {
                this.partialLength = f, this.point = A;
            }
            var m = function() {
                var f = {};
                return function(A, x, k, S) {
                    var g = (A[0] + "_" + A[1] + "_" + x[0] + "_" + x[1] + "_" + k[0] + "_" + k[1] + "_" + S[0] + "_" + S[1]).replace(/\./g, "p");
                    if (!f[g]) {
                        var p = Me(), l, u, v, M, C, w = 0, I, N, O = null;
                        A.length === 2 && (A[0] !== x[0] || A[1] !== x[1]) && e(A[0], A[1], x[0], x[1], A[0] + k[0], A[1] + k[1]) && e(A[0], A[1], x[0], x[1], x[0] + S[0], x[1] + S[1]) && (p = 2);
                        var V = new a(p);
                        for(v = k.length, l = 0; l < p; l += 1){
                            for(N = tt(v), C = l / (p - 1), I = 0, u = 0; u < v; u += 1)M = At(1 - C, 3) * A[u] + 3 * At(1 - C, 2) * C * (A[u] + k[u]) + 3 * (1 - C) * At(C, 2) * (x[u] + S[u]) + At(C, 3) * x[u], N[u] = M, O !== null && (I += At(N[u] - O[u], 2));
                            I = ps(I), w += I, V.points[l] = new h(I, N), O = N;
                        }
                        V.segmentLength = w, f[g] = V;
                    }
                    return f[g];
                };
            }();
            function o(f, A) {
                var x = A.percents, k = A.lengths, S = x.length, g = Yt((S - 1) * f), p = f * A.addedLength, l = 0;
                if (g === S - 1 || g === 0 || p === k[g]) return x[g];
                for(var u = k[g] > p ? -1 : 1, v = !0; v;)if (k[g] <= p && k[g + 1] > p ? (l = (p - k[g]) / (k[g + 1] - k[g]), v = !1) : g += u, g < 0 || g >= S - 1) {
                    if (g === S - 1) return x[g];
                    v = !1;
                }
                return x[g] + (x[g + 1] - x[g]) * l;
            }
            function b(f, A, x, k, S, g) {
                var p = o(S, g), l = 1 - p, u = t.round((l * l * l * f[0] + (p * l * l + l * p * l + l * l * p) * x[0] + (p * p * l + l * p * p + p * l * p) * k[0] + p * p * p * A[0]) * 1e3) / 1e3, v = t.round((l * l * l * f[1] + (p * l * l + l * p * l + l * l * p) * x[1] + (p * p * l + l * p * p + p * l * p) * k[1] + p * p * p * A[1]) * 1e3) / 1e3;
                return [
                    u,
                    v
                ];
            }
            var _ = it("float32", 8);
            function P(f, A, x, k, S, g, p) {
                S < 0 ? S = 0 : S > 1 && (S = 1);
                var l = o(S, p);
                g = g > 1 ? 1 : g;
                var u = o(g, p), v, M = f.length, C = 1 - l, w = 1 - u, I = C * C * C, N = l * C * C * 3, O = l * l * C * 3, V = l * l * l, j = C * C * w, E = l * C * w + C * l * w + C * C * u, F = l * l * w + C * l * u + l * C * u, d = l * l * u, y = C * w * w, n = l * w * w + C * u * w + C * w * u, c = l * u * w + C * u * u + l * w * u, T = l * u * u, D = w * w * w, W = u * w * w + w * u * w + w * w * u, z = u * u * w + w * u * u + u * w * u, J = u * u * u;
                for(v = 0; v < M; v += 1)_[v * 4] = t.round((I * f[v] + N * x[v] + O * k[v] + V * A[v]) * 1e3) / 1e3, _[v * 4 + 1] = t.round((j * f[v] + E * x[v] + F * k[v] + d * A[v]) * 1e3) / 1e3, _[v * 4 + 2] = t.round((y * f[v] + n * x[v] + c * k[v] + T * A[v]) * 1e3) / 1e3, _[v * 4 + 3] = t.round((D * f[v] + W * x[v] + z * k[v] + J * A[v]) * 1e3) / 1e3;
                return _;
            }
            return {
                getSegmentsLength: r,
                getNewSegment: P,
                getPointInSegment: b,
                buildBezierData: m,
                pointOnLine2D: e,
                pointOnLine3D: s
            };
        }
        var Pt = Pi(), Ut = Xe, Ps = Math.abs;
        function xs(t, e) {
            var s = this.offsetTime, i;
            this.propType === "multidimensional" && (i = it("float32", this.pv.length));
            for(var r = e.lastIndex, a = r, h = this.keyframes.length - 1, m = !0, o, b, _; m;){
                if (o = this.keyframes[a], b = this.keyframes[a + 1], a === h - 1 && t >= b.t - s) {
                    o.h && (o = b), r = 0;
                    break;
                }
                if (b.t - s > t) {
                    r = a;
                    break;
                }
                a < h - 1 ? a += 1 : (r = 0, m = !1);
            }
            _ = this.keyframesMetadata[a] || {};
            var P, f, A, x, k, S, g = b.t - s, p = o.t - s, l;
            if (o.to) {
                _.bezierData || (_.bezierData = Pt.buildBezierData(o.s, b.s || o.e, o.to, o.ti));
                var u = _.bezierData;
                if (t >= g || t < p) {
                    var v = t >= g ? u.points.length - 1 : 0;
                    for(f = u.points[v].point.length, P = 0; P < f; P += 1)i[P] = u.points[v].point[P];
                } else {
                    _.__fnct ? S = _.__fnct : (S = fe.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, _.__fnct = S), A = S((t - p) / (g - p));
                    var M = u.segmentLength * A, C, w = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
                    for(k = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, m = !0, x = u.points.length; m;){
                        if (w += u.points[k].partialLength, M === 0 || A === 0 || k === u.points.length - 1) {
                            for(f = u.points[k].point.length, P = 0; P < f; P += 1)i[P] = u.points[k].point[P];
                            break;
                        } else if (M >= w && M < w + u.points[k + 1].partialLength) {
                            for(C = (M - w) / u.points[k + 1].partialLength, f = u.points[k].point.length, P = 0; P < f; P += 1)i[P] = u.points[k].point[P] + (u.points[k + 1].point[P] - u.points[k].point[P]) * C;
                            break;
                        }
                        k < x - 1 ? k += 1 : m = !1;
                    }
                    e._lastPoint = k, e._lastAddedLength = w - u.points[k].partialLength, e._lastKeyframeIndex = a;
                }
            } else {
                var I, N, O, V, j;
                if (h = o.s.length, l = b.s || o.e, this.sh && o.h !== 1) {
                    if (t >= g) i[0] = l[0], i[1] = l[1], i[2] = l[2];
                    else if (t <= p) i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
                    else {
                        var E = Ds(o.s), F = Ds(l), d = (t - p) / (g - p);
                        Di(i, xi(E, F, d));
                    }
                } else for(a = 0; a < h; a += 1)o.h !== 1 && (t >= g ? A = 1 : t < p ? A = 0 : (o.o.x.constructor === Array ? (_.__fnct || (_.__fnct = []), _.__fnct[a] ? S = _.__fnct[a] : (I = o.o.x[a] === void 0 ? o.o.x[0] : o.o.x[a], N = o.o.y[a] === void 0 ? o.o.y[0] : o.o.y[a], O = o.i.x[a] === void 0 ? o.i.x[0] : o.i.x[a], V = o.i.y[a] === void 0 ? o.i.y[0] : o.i.y[a], S = fe.getBezierEasing(I, N, O, V).get, _.__fnct[a] = S)) : _.__fnct ? S = _.__fnct : (I = o.o.x, N = o.o.y, O = o.i.x, V = o.i.y, S = fe.getBezierEasing(I, N, O, V).get, o.keyframeMetadata = S), A = S((t - p) / (g - p)))), l = b.s || o.e, j = o.h === 1 ? o.s[a] : o.s[a] + (l[a] - o.s[a]) * A, this.propType === "multidimensional" ? i[a] = j : i = j;
            }
            return e.lastIndex = r, i;
        }
        function xi(t, e, s) {
            var i = [], r = t[0], a = t[1], h = t[2], m = t[3], o = e[0], b = e[1], _ = e[2], P = e[3], f, A, x, k, S;
            return A = r * o + a * b + h * _ + m * P, A < 0 && (A = -A, o = -o, b = -b, _ = -_, P = -P), 1 - A > 1e-6 ? (f = Math.acos(A), x = Math.sin(f), k = Math.sin((1 - s) * f) / x, S = Math.sin(s * f) / x) : (k = 1 - s, S = s), i[0] = k * r + S * o, i[1] = k * a + S * b, i[2] = k * h + S * _, i[3] = k * m + S * P, i;
        }
        function Di(t, e) {
            var s = e[0], i = e[1], r = e[2], a = e[3], h = Math.atan2(2 * i * a - 2 * s * r, 1 - 2 * i * i - 2 * r * r), m = Math.asin(2 * s * i + 2 * r * a), o = Math.atan2(2 * s * a - 2 * i * r, 1 - 2 * s * s - 2 * r * r);
            t[0] = h / H, t[1] = m / H, t[2] = o / H;
        }
        function Ds(t) {
            var e = t[0] * H, s = t[1] * H, i = t[2] * H, r = Math.cos(e / 2), a = Math.cos(s / 2), h = Math.cos(i / 2), m = Math.sin(e / 2), o = Math.sin(s / 2), b = Math.sin(i / 2), _ = r * a * h - m * o * b, P = m * o * h + r * a * b, f = m * a * h + r * o * b, A = r * o * h - m * a * b;
            return [
                P,
                f,
                A,
                _
            ];
        }
        function Ss() {
            var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== Ut && (this._caching.lastFrame >= s && t >= s || this._caching.lastFrame < e && t < e))) {
                this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var i = this.interpolateValue(t, this._caching);
                this.pv = i;
            }
            return this._caching.lastFrame = t, this.pv;
        }
        function we(t) {
            var e;
            if (this.propType === "unidimensional") e = t * this.mult, Ps(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
            else for(var s = 0, i = this.v.length; s < i;)e = t[s] * this.mult, Ps(this.v[s] - e) > 1e-5 && (this.v[s] = e, this._mdf = !0), s += 1;
        }
        function Ee() {
            if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return;
                }
                this.lock = !0, this._mdf = this._isFirstFrame;
                var t, e = this.effectsSequence.length, s = this.kf ? this.pv : this.data.k;
                for(t = 0; t < e; t += 1)s = this.effectsSequence[t](s);
                this.setVValue(s), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }
        function Fe(t) {
            this.effectsSequence.push(t), this.container.addDynamicProperty(this);
        }
        function Si(t, e, s, i) {
            this.propType = "unidimensional", this.mult = s || 1, this.data = e, this.v = s ? e.k * s : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = Ee, this.setVValue = we, this.addEffect = Fe;
        }
        function Mi(t, e, s, i) {
            this.propType = "multidimensional", this.mult = s || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var r, a = e.k.length;
            for(this.v = it("float32", a), this.pv = it("float32", a), this.vel = it("float32", a), r = 0; r < a; r += 1)this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = Ee, this.setVValue = we, this.addEffect = Fe;
        }
        function Ti(t, e, s, i) {
            this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                lastFrame: Ut,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = e, this.mult = s || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = Ut, this.pv = Ut, this._isFirstFrame = !0, this.getValue = Ee, this.setVValue = we, this.interpolateValue = xs, this.effectsSequence = [
                Ss.bind(this)
            ], this.addEffect = Fe;
        }
        function Ci(t, e, s, i) {
            this.propType = "multidimensional";
            var r, a = e.k.length, h, m, o, b;
            for(r = 0; r < a - 1; r += 1)e.k[r].to && e.k[r].s && e.k[r + 1] && e.k[r + 1].s && (h = e.k[r].s, m = e.k[r + 1].s, o = e.k[r].to, b = e.k[r].ti, (h.length === 2 && !(h[0] === m[0] && h[1] === m[1]) && Pt.pointOnLine2D(h[0], h[1], m[0], m[1], h[0] + o[0], h[1] + o[1]) && Pt.pointOnLine2D(h[0], h[1], m[0], m[1], m[0] + b[0], m[1] + b[1]) || h.length === 3 && !(h[0] === m[0] && h[1] === m[1] && h[2] === m[2]) && Pt.pointOnLine3D(h[0], h[1], h[2], m[0], m[1], m[2], h[0] + o[0], h[1] + o[1], h[2] + o[2]) && Pt.pointOnLine3D(h[0], h[1], h[2], m[0], m[1], m[2], m[0] + b[0], m[1] + b[1], m[2] + b[2])) && (e.k[r].to = null, e.k[r].ti = null), h[0] === m[0] && h[1] === m[1] && o[0] === 0 && o[1] === 0 && b[0] === 0 && b[1] === 0 && (h.length === 2 || h[2] === m[2] && o[2] === 0 && b[2] === 0) && (e.k[r].to = null, e.k[r].ti = null));
            this.effectsSequence = [
                Ss.bind(this)
            ], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = s || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = Ee, this.setVValue = we, this.interpolateValue = xs, this.frameId = -1;
            var _ = e.k[0].s.length;
            for(this.v = it("float32", _), this.pv = it("float32", _), r = 0; r < _; r += 1)this.v[r] = Ut, this.pv[r] = Ut;
            this._caching = {
                lastFrame: Ut,
                lastIndex: 0,
                value: it("float32", _)
            }, this.addEffect = Fe;
        }
        var L = function() {
            function t(s, i, r, a, h) {
                i.sid && (i = s.globalData.slotManager.getProp(i));
                var m;
                if (!i.k.length) m = new Si(s, i, a, h);
                else if (typeof i.k[0] == "number") m = new Mi(s, i, a, h);
                else switch(r){
                    case 0:
                        m = new Ti(s, i, a, h);
                        break;
                    case 1:
                        m = new Ci(s, i, a, h);
                        break;
                }
                return m.effectsSequence.length && h.addDynamicProperty(m), m;
            }
            var e = {
                getProp: t
            };
            return e;
        }();
        function at() {}
        at.prototype = {
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
        var Zt = function() {
            function t() {
                return it("float32", 2);
            }
            return Ce(8, t);
        }();
        function Mt() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = tt(this._maxLength), this.o = tt(this._maxLength), this.i = tt(this._maxLength);
        }
        Mt.prototype.setPathData = function(t, e) {
            this.c = t, this.setLength(e);
            for(var s = 0; s < e;)this.v[s] = Zt.newElement(), this.o[s] = Zt.newElement(), this.i[s] = Zt.newElement(), s += 1;
        }, Mt.prototype.setLength = function(t) {
            for(; this._maxLength < t;)this.doubleArrayLength();
            this._length = t;
        }, Mt.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(tt(this._maxLength)), this.i = this.i.concat(tt(this._maxLength)), this.o = this.o.concat(tt(this._maxLength)), this._maxLength *= 2;
        }, Mt.prototype.setXYAt = function(t, e, s, i, r) {
            var a;
            switch(this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), s){
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
            (!a[i] || a[i] && !r) && (a[i] = Zt.newElement()), a[i][0] = t, a[i][1] = e;
        }, Mt.prototype.setTripleAt = function(t, e, s, i, r, a, h, m) {
            this.setXYAt(t, e, "v", h, m), this.setXYAt(s, i, "o", h, m), this.setXYAt(r, a, "i", h, m);
        }, Mt.prototype.reverse = function() {
            var t = new Mt;
            t.setPathData(this.c, this._length);
            var e = this.v, s = this.o, i = this.i, r = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], s[0][0], s[0][1], 0, !1), r = 1);
            var a = this._length - 1, h = this._length, m;
            for(m = r; m < h; m += 1)t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], s[a][0], s[a][1], m, !1), a -= 1;
            return t;
        }, Mt.prototype.length = function() {
            return this._length;
        };
        var nt = function() {
            function t() {
                return new Mt;
            }
            function e(r) {
                var a = r._length, h;
                for(h = 0; h < a; h += 1)Zt.release(r.v[h]), Zt.release(r.i[h]), Zt.release(r.o[h]), r.v[h] = null, r.i[h] = null, r.o[h] = null;
                r._length = 0, r.c = !1;
            }
            function s(r) {
                var a = i.newElement(), h, m = r._length === void 0 ? r.v.length : r._length;
                for(a.setLength(m), a.c = r.c, h = 0; h < m; h += 1)a.setTripleAt(r.v[h][0], r.v[h][1], r.o[h][0], r.o[h][1], r.i[h][0], r.i[h][1], h);
                return a;
            }
            var i = Ce(4, t, e);
            return i.clone = s, i;
        }();
        function Ze() {
            this._length = 0, this._maxLength = 4, this.shapes = tt(this._maxLength);
        }
        Ze.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(tt(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
        }, Ze.prototype.releaseShapes = function() {
            var t;
            for(t = 0; t < this._length; t += 1)nt.release(this.shapes[t]);
            this._length = 0;
        };
        var te = function() {
            var t = {
                newShapeCollection: r,
                release: a
            }, e = 0, s = 4, i = tt(s);
            function r() {
                var h;
                return e ? (e -= 1, h = i[e]) : h = new Ze, h;
            }
            function a(h) {
                var m, o = h._length;
                for(m = 0; m < o; m += 1)nt.release(h.shapes[m]);
                h._length = 0, e === s && (i = _s.double(i), s *= 2), i[e] = h, e += 1;
            }
            return t;
        }(), Ie = function() {
            var t = -999999;
            function e(g, p, l) {
                var u = l.lastIndex, v, M, C, w, I, N, O, V, j, E = this.keyframes;
                if (g < E[0].t - this.offsetTime) v = E[0].s[0], C = !0, u = 0;
                else if (g >= E[E.length - 1].t - this.offsetTime) v = E[E.length - 1].s ? E[E.length - 1].s[0] : E[E.length - 2].e[0], C = !0;
                else {
                    for(var F = u, d = E.length - 1, y = !0, n, c, T; y && (n = E[F], c = E[F + 1], !(c.t - this.offsetTime > g));)F < d - 1 ? F += 1 : y = !1;
                    if (T = this.keyframesMetadata[F] || {}, C = n.h === 1, u = F, !C) {
                        if (g >= c.t - this.offsetTime) V = 1;
                        else if (g < n.t - this.offsetTime) V = 0;
                        else {
                            var D;
                            T.__fnct ? D = T.__fnct : (D = fe.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y).get, T.__fnct = D), V = D((g - (n.t - this.offsetTime)) / (c.t - this.offsetTime - (n.t - this.offsetTime)));
                        }
                        M = c.s ? c.s[0] : n.e[0];
                    }
                    v = n.s[0];
                }
                for(N = p._length, O = v.i[0].length, l.lastIndex = u, w = 0; w < N; w += 1)for(I = 0; I < O; I += 1)j = C ? v.i[w][I] : v.i[w][I] + (M.i[w][I] - v.i[w][I]) * V, p.i[w][I] = j, j = C ? v.o[w][I] : v.o[w][I] + (M.o[w][I] - v.o[w][I]) * V, p.o[w][I] = j, j = C ? v.v[w][I] : v.v[w][I] + (M.v[w][I] - v.v[w][I]) * V, p.v[w][I] = j;
            }
            function s() {
                var g = this.comp.renderedFrame - this.offsetTime, p = this.keyframes[0].t - this.offsetTime, l = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, u = this._caching.lastFrame;
                return u !== t && (u < p && g < p || u > l && g > l) || (this._caching.lastIndex = u < g ? this._caching.lastIndex : 0, this.interpolateShape(g, this.pv, this._caching)), this._caching.lastFrame = g, this.pv;
            }
            function i() {
                this.paths = this.localShapeCollection;
            }
            function r(g, p) {
                if (g._length !== p._length || g.c !== p.c) return !1;
                var l, u = g._length;
                for(l = 0; l < u; l += 1)if (g.v[l][0] !== p.v[l][0] || g.v[l][1] !== p.v[l][1] || g.o[l][0] !== p.o[l][0] || g.o[l][1] !== p.o[l][1] || g.i[l][0] !== p.i[l][0] || g.i[l][1] !== p.i[l][1]) return !1;
                return !0;
            }
            function a(g) {
                r(this.v, g) || (this.v = nt.clone(g), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
            }
            function h() {
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
                    var g;
                    this.kf ? g = this.pv : this.data.ks ? g = this.data.ks.k : g = this.data.pt.k;
                    var p, l = this.effectsSequence.length;
                    for(p = 0; p < l; p += 1)g = this.effectsSequence[p](g);
                    this.setVValue(g), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                }
            }
            function m(g, p, l) {
                this.propType = "shape", this.comp = g.comp, this.container = g, this.elem = g, this.data = p, this.k = !1, this.kf = !1, this._mdf = !1;
                var u = l === 3 ? p.pt.k : p.ks.k;
                this.v = nt.clone(u), this.pv = nt.clone(this.v), this.localShapeCollection = te.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
            }
            function o(g) {
                this.effectsSequence.push(g), this.container.addDynamicProperty(this);
            }
            m.prototype.interpolateShape = e, m.prototype.getValue = h, m.prototype.setVValue = a, m.prototype.addEffect = o;
            function b(g, p, l) {
                this.propType = "shape", this.comp = g.comp, this.elem = g, this.container = g, this.offsetTime = g.data.st, this.keyframes = l === 3 ? p.pt.k : p.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                var u = this.keyframes[0].s[0].i.length;
                this.v = nt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, u), this.pv = nt.clone(this.v), this.localShapeCollection = te.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                    lastFrame: t,
                    lastIndex: 0
                }, this.effectsSequence = [
                    s.bind(this)
                ];
            }
            b.prototype.getValue = h, b.prototype.interpolateShape = e, b.prototype.setVValue = a, b.prototype.addEffect = o;
            var _ = function() {
                var g = Vt;
                function p(l, u) {
                    this.v = nt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = te.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = u.d, this.elem = l, this.comp = l.comp, this.frameId = -1, this.initDynamicPropertyContainer(l), this.p = L.getProp(l, u.p, 1, 0, this), this.s = L.getProp(l, u.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                }
                return p.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function() {
                        var l = this.p.v[0], u = this.p.v[1], v = this.s.v[0] / 2, M = this.s.v[1] / 2, C = this.d !== 3, w = this.v;
                        w.v[0][0] = l, w.v[0][1] = u - M, w.v[1][0] = C ? l + v : l - v, w.v[1][1] = u, w.v[2][0] = l, w.v[2][1] = u + M, w.v[3][0] = C ? l - v : l + v, w.v[3][1] = u, w.i[0][0] = C ? l - v * g : l + v * g, w.i[0][1] = u - M, w.i[1][0] = C ? l + v : l - v, w.i[1][1] = u - M * g, w.i[2][0] = C ? l + v * g : l - v * g, w.i[2][1] = u + M, w.i[3][0] = C ? l - v : l + v, w.i[3][1] = u + M * g, w.o[0][0] = C ? l + v * g : l - v * g, w.o[0][1] = u - M, w.o[1][0] = C ? l + v : l - v, w.o[1][1] = u + M * g, w.o[2][0] = C ? l - v * g : l + v * g, w.o[2][1] = u + M, w.o[3][0] = C ? l - v : l + v, w.o[3][1] = u - M * g;
                    }
                }, Y([
                    at
                ], p), p;
            }(), P = function() {
                function g(p, l) {
                    this.v = nt.newElement(), this.v.setPathData(!0, 0), this.elem = p, this.comp = p.comp, this.data = l, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(p), l.sy === 1 ? (this.ir = L.getProp(p, l.ir, 0, 0, this), this.is = L.getProp(p, l.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = L.getProp(p, l.pt, 0, 0, this), this.p = L.getProp(p, l.p, 1, 0, this), this.r = L.getProp(p, l.r, 0, H, this), this.or = L.getProp(p, l.or, 0, 0, this), this.os = L.getProp(p, l.os, 0, .01, this), this.localShapeCollection = te.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                }
                return g.prototype = {
                    reset: i,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function() {
                        var p = Math.floor(this.pt.v) * 2, l = Math.PI * 2 / p, u = !0, v = this.or.v, M = this.ir.v, C = this.os.v, w = this.is.v, I = 2 * Math.PI * v / (p * 2), N = 2 * Math.PI * M / (p * 2), O, V, j, E, F = -Math.PI / 2;
                        F += this.r.v;
                        var d = this.data.d === 3 ? -1 : 1;
                        for(this.v._length = 0, O = 0; O < p; O += 1){
                            V = u ? v : M, j = u ? C : w, E = u ? I : N;
                            var y = V * Math.cos(F), n = V * Math.sin(F), c = y === 0 && n === 0 ? 0 : n / Math.sqrt(y * y + n * n), T = y === 0 && n === 0 ? 0 : -y / Math.sqrt(y * y + n * n);
                            y += +this.p.v[0], n += +this.p.v[1], this.v.setTripleAt(y, n, y - c * E * j * d, n - T * E * j * d, y + c * E * j * d, n + T * E * j * d, O, !0), u = !u, F += l * d;
                        }
                    },
                    convertPolygonToPath: function() {
                        var p = Math.floor(this.pt.v), l = Math.PI * 2 / p, u = this.or.v, v = this.os.v, M = 2 * Math.PI * u / (p * 4), C, w = -Math.PI * .5, I = this.data.d === 3 ? -1 : 1;
                        for(w += this.r.v, this.v._length = 0, C = 0; C < p; C += 1){
                            var N = u * Math.cos(w), O = u * Math.sin(w), V = N === 0 && O === 0 ? 0 : O / Math.sqrt(N * N + O * O), j = N === 0 && O === 0 ? 0 : -N / Math.sqrt(N * N + O * O);
                            N += +this.p.v[0], O += +this.p.v[1], this.v.setTripleAt(N, O, N - V * M * v * I, O - j * M * v * I, N + V * M * v * I, O + j * M * v * I, C, !0), w += l * I;
                        }
                        this.paths.length = 0, this.paths[0] = this.v;
                    }
                }, Y([
                    at
                ], g), g;
            }(), f = function() {
                function g(p, l) {
                    this.v = nt.newElement(), this.v.c = !0, this.localShapeCollection = te.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = p, this.comp = p.comp, this.frameId = -1, this.d = l.d, this.initDynamicPropertyContainer(p), this.p = L.getProp(p, l.p, 1, 0, this), this.s = L.getProp(p, l.s, 1, 0, this), this.r = L.getProp(p, l.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
                }
                return g.prototype = {
                    convertRectToPath: function() {
                        var p = this.p.v[0], l = this.p.v[1], u = this.s.v[0] / 2, v = this.s.v[1] / 2, M = pi(u, v, this.r.v), C = M * (1 - Vt);
                        this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(p + u, l - v + M, p + u, l - v + M, p + u, l - v + C, 0, !0), this.v.setTripleAt(p + u, l + v - M, p + u, l + v - C, p + u, l + v - M, 1, !0), M !== 0 ? (this.v.setTripleAt(p + u - M, l + v, p + u - M, l + v, p + u - C, l + v, 2, !0), this.v.setTripleAt(p - u + M, l + v, p - u + C, l + v, p - u + M, l + v, 3, !0), this.v.setTripleAt(p - u, l + v - M, p - u, l + v - M, p - u, l + v - C, 4, !0), this.v.setTripleAt(p - u, l - v + M, p - u, l - v + C, p - u, l - v + M, 5, !0), this.v.setTripleAt(p - u + M, l - v, p - u + M, l - v, p - u + C, l - v, 6, !0), this.v.setTripleAt(p + u - M, l - v, p + u - C, l - v, p + u - M, l - v, 7, !0)) : (this.v.setTripleAt(p - u, l + v, p - u + C, l + v, p - u, l + v, 2), this.v.setTripleAt(p - u, l - v, p - u, l - v + C, p - u, l - v, 3))) : (this.v.setTripleAt(p + u, l - v + M, p + u, l - v + C, p + u, l - v + M, 0, !0), M !== 0 ? (this.v.setTripleAt(p + u - M, l - v, p + u - M, l - v, p + u - C, l - v, 1, !0), this.v.setTripleAt(p - u + M, l - v, p - u + C, l - v, p - u + M, l - v, 2, !0), this.v.setTripleAt(p - u, l - v + M, p - u, l - v + M, p - u, l - v + C, 3, !0), this.v.setTripleAt(p - u, l + v - M, p - u, l + v - C, p - u, l + v - M, 4, !0), this.v.setTripleAt(p - u + M, l + v, p - u + M, l + v, p - u + C, l + v, 5, !0), this.v.setTripleAt(p + u - M, l + v, p + u - C, l + v, p + u - M, l + v, 6, !0), this.v.setTripleAt(p + u, l + v - M, p + u, l + v - M, p + u, l + v - C, 7, !0)) : (this.v.setTripleAt(p - u, l - v, p - u + C, l - v, p - u, l - v, 1, !0), this.v.setTripleAt(p - u, l + v, p - u, l + v - C, p - u, l + v, 2, !0), this.v.setTripleAt(p + u, l + v, p + u - C, l + v, p + u, l + v, 3, !0)));
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                    },
                    reset: i
                }, Y([
                    at
                ], g), g;
            }();
            function A(g, p, l) {
                var u;
                if (l === 3 || l === 4) {
                    var v = l === 3 ? p.pt : p.ks, M = v.k;
                    M.length ? u = new b(g, p, l) : u = new m(g, p, l);
                } else l === 5 ? u = new f(g, p) : l === 6 ? u = new _(g, p) : l === 7 && (u = new P(g, p));
                return u.k && g.addDynamicProperty(u), u;
            }
            function x() {
                return m;
            }
            function k() {
                return b;
            }
            var S = {};
            return S.getShapeProp = A, S.getConstructorFunction = x, S.getKeyframedConstructorFunction = k, S;
        }(), ot = function() {
            var t = Math.cos, e = Math.sin, s = Math.tan, i = Math.round;
            function r() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
            }
            function a(n) {
                if (n === 0) return this;
                var c = t(n), T = e(n);
                return this._t(c, -T, 0, 0, T, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function h(n) {
                if (n === 0) return this;
                var c = t(n), T = e(n);
                return this._t(1, 0, 0, 0, 0, c, -T, 0, 0, T, c, 0, 0, 0, 0, 1);
            }
            function m(n) {
                if (n === 0) return this;
                var c = t(n), T = e(n);
                return this._t(c, 0, T, 0, 0, 1, 0, 0, -T, 0, c, 0, 0, 0, 0, 1);
            }
            function o(n) {
                if (n === 0) return this;
                var c = t(n), T = e(n);
                return this._t(c, -T, 0, 0, T, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function b(n, c) {
                return this._t(1, c, n, 1, 0, 0);
            }
            function _(n, c) {
                return this.shear(s(n), s(c));
            }
            function P(n, c) {
                var T = t(c), D = e(c);
                return this._t(T, D, 0, 0, -D, T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, s(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(T, -D, 0, 0, D, T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function f(n, c, T) {
                return !T && T !== 0 && (T = 1), n === 1 && c === 1 && T === 1 ? this : this._t(n, 0, 0, 0, 0, c, 0, 0, 0, 0, T, 0, 0, 0, 0, 1);
            }
            function A(n, c, T, D, W, z, J, X, $, K, ut, Dt, mt, rt, gt, Z) {
                return this.props[0] = n, this.props[1] = c, this.props[2] = T, this.props[3] = D, this.props[4] = W, this.props[5] = z, this.props[6] = J, this.props[7] = X, this.props[8] = $, this.props[9] = K, this.props[10] = ut, this.props[11] = Dt, this.props[12] = mt, this.props[13] = rt, this.props[14] = gt, this.props[15] = Z, this;
            }
            function x(n, c, T) {
                return T = T || 0, n !== 0 || c !== 0 || T !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, c, T, 1) : this;
            }
            function k(n, c, T, D, W, z, J, X, $, K, ut, Dt, mt, rt, gt, Z) {
                var R = this.props;
                if (n === 1 && c === 0 && T === 0 && D === 0 && W === 0 && z === 1 && J === 0 && X === 0 && $ === 0 && K === 0 && ut === 1 && Dt === 0) return R[12] = R[12] * n + R[15] * mt, R[13] = R[13] * z + R[15] * rt, R[14] = R[14] * ut + R[15] * gt, R[15] *= Z, this._identityCalculated = !1, this;
                var wt = R[0], qt = R[1], Et = R[2], St = R[3], Ft = R[4], It = R[5], dt = R[6], Wt = R[7], Xt = R[8], _t = R[9], Jt = R[10], kt = R[11], $t = R[12], je = R[13], Be = R[14], qe = R[15];
                return R[0] = wt * n + qt * W + Et * $ + St * mt, R[1] = wt * c + qt * z + Et * K + St * rt, R[2] = wt * T + qt * J + Et * ut + St * gt, R[3] = wt * D + qt * X + Et * Dt + St * Z, R[4] = Ft * n + It * W + dt * $ + Wt * mt, R[5] = Ft * c + It * z + dt * K + Wt * rt, R[6] = Ft * T + It * J + dt * ut + Wt * gt, R[7] = Ft * D + It * X + dt * Dt + Wt * Z, R[8] = Xt * n + _t * W + Jt * $ + kt * mt, R[9] = Xt * c + _t * z + Jt * K + kt * rt, R[10] = Xt * T + _t * J + Jt * ut + kt * gt, R[11] = Xt * D + _t * X + Jt * Dt + kt * Z, R[12] = $t * n + je * W + Be * $ + qe * mt, R[13] = $t * c + je * z + Be * K + qe * rt, R[14] = $t * T + je * J + Be * ut + qe * gt, R[15] = $t * D + je * X + Be * Dt + qe * Z, this._identityCalculated = !1, this;
            }
            function S(n) {
                var c = n.props;
                return this.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]);
            }
            function g() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
            }
            function p(n) {
                for(var c = 0; c < 16;){
                    if (n.props[c] !== this.props[c]) return !1;
                    c += 1;
                }
                return !0;
            }
            function l(n) {
                var c;
                for(c = 0; c < 16; c += 1)n.props[c] = this.props[c];
                return n;
            }
            function u(n) {
                var c;
                for(c = 0; c < 16; c += 1)this.props[c] = n[c];
            }
            function v(n, c, T) {
                return {
                    x: n * this.props[0] + c * this.props[4] + T * this.props[8] + this.props[12],
                    y: n * this.props[1] + c * this.props[5] + T * this.props[9] + this.props[13],
                    z: n * this.props[2] + c * this.props[6] + T * this.props[10] + this.props[14]
                };
            }
            function M(n, c, T) {
                return n * this.props[0] + c * this.props[4] + T * this.props[8] + this.props[12];
            }
            function C(n, c, T) {
                return n * this.props[1] + c * this.props[5] + T * this.props[9] + this.props[13];
            }
            function w(n, c, T) {
                return n * this.props[2] + c * this.props[6] + T * this.props[10] + this.props[14];
            }
            function I() {
                var n = this.props[0] * this.props[5] - this.props[1] * this.props[4], c = this.props[5] / n, T = -this.props[1] / n, D = -this.props[4] / n, W = this.props[0] / n, z = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / n, J = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / n, X = new ot;
                return X.props[0] = c, X.props[1] = T, X.props[4] = D, X.props[5] = W, X.props[12] = z, X.props[13] = J, X;
            }
            function N(n) {
                var c = this.getInverseMatrix();
                return c.applyToPointArray(n[0], n[1], n[2] || 0);
            }
            function O(n) {
                var c, T = n.length, D = [];
                for(c = 0; c < T; c += 1)D[c] = N(n[c]);
                return D;
            }
            function V(n, c, T) {
                var D = it("float32", 6);
                if (this.isIdentity()) D[0] = n[0], D[1] = n[1], D[2] = c[0], D[3] = c[1], D[4] = T[0], D[5] = T[1];
                else {
                    var W = this.props[0], z = this.props[1], J = this.props[4], X = this.props[5], $ = this.props[12], K = this.props[13];
                    D[0] = n[0] * W + n[1] * J + $, D[1] = n[0] * z + n[1] * X + K, D[2] = c[0] * W + c[1] * J + $, D[3] = c[0] * z + c[1] * X + K, D[4] = T[0] * W + T[1] * J + $, D[5] = T[0] * z + T[1] * X + K;
                }
                return D;
            }
            function j(n, c, T) {
                var D;
                return this.isIdentity() ? D = [
                    n,
                    c,
                    T
                ] : D = [
                    n * this.props[0] + c * this.props[4] + T * this.props[8] + this.props[12],
                    n * this.props[1] + c * this.props[5] + T * this.props[9] + this.props[13],
                    n * this.props[2] + c * this.props[6] + T * this.props[10] + this.props[14]
                ], D;
            }
            function E(n, c) {
                if (this.isIdentity()) return n + "," + c;
                var T = this.props;
                return Math.round((n * T[0] + c * T[4] + T[12]) * 100) / 100 + "," + Math.round((n * T[1] + c * T[5] + T[13]) * 100) / 100;
            }
            function F() {
                for(var n = 0, c = this.props, T = "matrix3d(", D = 1e4; n < 16;)T += i(c[n] * D) / D, T += n === 15 ? ")" : ",", n += 1;
                return T;
            }
            function d(n) {
                var c = 1e4;
                return n < 1e-6 && n > 0 || n > -0.000001 && n < 0 ? i(n * c) / c : n;
            }
            function y() {
                var n = this.props, c = d(n[0]), T = d(n[1]), D = d(n[4]), W = d(n[5]), z = d(n[12]), J = d(n[13]);
                return "matrix(" + c + "," + T + "," + D + "," + W + "," + z + "," + J + ")";
            }
            return function() {
                this.reset = r, this.rotate = a, this.rotateX = h, this.rotateY = m, this.rotateZ = o, this.skew = _, this.skewFromAxis = P, this.shear = b, this.scale = f, this.setTransform = A, this.translate = x, this.transform = k, this.multiply = S, this.applyToPoint = v, this.applyToX = M, this.applyToY = C, this.applyToZ = w, this.applyToPointArray = j, this.applyToTriplePoints = V, this.applyToPointStringified = E, this.toCSS = F, this.to2dCSS = y, this.clone = l, this.cloneFromProps = u, this.equals = p, this.inversePoints = O, this.inversePoint = N, this.getInverseMatrix = I, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = it("float32", 16), this.reset();
            };
        }();
        function Le(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Le = function(e) {
                return typeof e;
            } : Le = function(e) {
                return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, Le(t);
        }
        var U = {};
        function wi(t) {
            ni(t);
        }
        function Ms() {
            et.searchAnimations();
        }
        function Ei(t) {
            mi(t);
        }
        function Fi(t) {
            gi(t);
        }
        function Ii(t) {
            return et.loadAnimation(t);
        }
        function Li(t) {
            if (typeof t == "string") switch(t){
                case "high":
                    Se(200);
                    break;
                default:
                case "medium":
                    Se(50);
                    break;
                case "low":
                    Se(10);
                    break;
            }
            else !isNaN(t) && t > 1 && Se(t);
        }
        function Vi() {
            return typeof navigator < "u";
        }
        function zi(t, e) {
            t === "expressions" && ci(e);
        }
        function Ri(t) {
            switch(t){
                case "propertyFactory":
                    return L;
                case "shapePropertyFactory":
                    return Ie;
                case "matrix":
                    return ot;
                default:
                    return null;
            }
        }
        U.play = et.play, U.pause = et.pause, U.setLocationHref = wi, U.togglePause = et.togglePause, U.setSpeed = et.setSpeed, U.setDirection = et.setDirection, U.stop = et.stop, U.searchAnimations = Ms, U.registerAnimation = et.registerAnimation, U.loadAnimation = Ii, U.setSubframeRendering = Ei, U.resize = et.resize, U.goToAndStop = et.goToAndStop, U.destroy = et.destroy, U.setQuality = Li, U.inBrowser = Vi, U.installPlugin = zi, U.freeze = et.freeze, U.unfreeze = et.unfreeze, U.setVolume = et.setVolume, U.mute = et.mute, U.unmute = et.unmute, U.getRegisteredAnimations = et.getRegisteredAnimations, U.useWebWorker = ai, U.setIDPrefix = Fi, U.__getFactory = Ri, U.version = "5.12.2";
        function Oi() {
            document.readyState === "complete" && (clearInterval(Bi), Ms());
        }
        function Ni(t) {
            for(var e = Ts.split("&"), s = 0; s < e.length; s += 1){
                var i = e[s].split("=");
                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
            }
            return null;
        }
        var Ts = "";
        var Cs = document.getElementsByTagName("script"), ji = Cs.length - 1, ws = Cs[ji] || {
            src: ""
        };
        Ts = ws.src ? ws.src.replace(/^[^\?]+\??/, "") : "", Ni("renderer");
        var Bi = setInterval(Oi, 100);
        try {
            !((typeof xe > "u" ? "undefined" : Le(xe)) === "object" && typeof We < "u") && !(typeof define == "function" && define.amd) && (window.bodymovin = U);
        } catch  {}
        var zt = function() {
            var t = {}, e = {};
            t.registerModifier = s, t.getModifier = i;
            function s(r, a) {
                e[r] || (e[r] = a);
            }
            function i(r, a, h) {
                return new e[r](a, h);
            }
            return t;
        }();
        function yt() {}
        yt.prototype.initModifierProperties = function() {}, yt.prototype.addShapeToModifier = function() {}, yt.prototype.addShape = function(t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                    shape: t.sh,
                    data: t,
                    localShapeCollection: te.newShapeCollection()
                };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
            }
        }, yt.prototype.init = function(t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = Xe, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, yt.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
        }, Y([
            at
        ], yt);
        function bt() {}
        Y([
            yt
        ], bt), bt.prototype.initModifierProperties = function(t, e) {
            this.s = L.getProp(t, e.s, 0, .01, this), this.e = L.getProp(t, e.e, 0, .01, this), this.o = L.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
        }, bt.prototype.addShapeToModifier = function(t) {
            t.pathsData = [];
        }, bt.prototype.calculateShapeEdges = function(t, e, s, i, r) {
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
            var h = [], m, o = a.length, b;
            for(m = 0; m < o; m += 1)if (b = a[m], !(b.e * r < i || b.s * r > i + s)) {
                var _, P;
                b.s * r <= i ? _ = 0 : _ = (b.s * r - i) / s, b.e * r >= i + s ? P = 1 : P = (b.e * r - i) / s, h.push([
                    _,
                    P
                ]);
            }
            return h.length || h.push([
                0,
                0
            ]), h;
        }, bt.prototype.releasePathsData = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)As.release(t[e]);
            return t.length = 0, t;
        }, bt.prototype.processShapes = function(t) {
            var e, s;
            if (this._mdf || t) {
                var i = this.o.v % 360 / 360;
                if (i < 0 && (i += 1), this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i, this.e.v > 1 ? s = 1 + i : this.e.v < 0 ? s = 0 + i : s = this.e.v + i, e > s) {
                    var r = e;
                    e = s, s = r;
                }
                e = Math.round(e * 1e4) * 1e-4, s = Math.round(s * 1e4) * 1e-4, this.sValue = e, this.eValue = s;
            } else e = this.sValue, s = this.eValue;
            var a, h, m = this.shapes.length, o, b, _, P, f, A = 0;
            if (s === e) for(h = 0; h < m; h += 1)this.shapes[h].localShapeCollection.releaseShapes(), this.shapes[h].shape._mdf = !0, this.shapes[h].shape.paths = this.shapes[h].localShapeCollection, this._mdf && (this.shapes[h].pathsData.length = 0);
            else if (s === 1 && e === 0 || s === 0 && e === 1) {
                if (this._mdf) for(h = 0; h < m; h += 1)this.shapes[h].pathsData.length = 0, this.shapes[h].shape._mdf = !0;
            } else {
                var x = [], k, S;
                for(h = 0; h < m; h += 1)if (k = this.shapes[h], !k.shape._mdf && !this._mdf && !t && this.m !== 2) k.shape.paths = k.localShapeCollection;
                else {
                    if (a = k.shape.paths, b = a._length, f = 0, !k.shape._mdf && k.pathsData.length) f = k.totalShapeLength;
                    else {
                        for(_ = this.releasePathsData(k.pathsData), o = 0; o < b; o += 1)P = Pt.getSegmentsLength(a.shapes[o]), _.push(P), f += P.totalLength;
                        k.totalShapeLength = f, k.pathsData = _;
                    }
                    A += f, k.shape._mdf = !0;
                }
                var g = e, p = s, l = 0, u;
                for(h = m - 1; h >= 0; h -= 1)if (k = this.shapes[h], k.shape._mdf) {
                    for(S = k.localShapeCollection, S.releaseShapes(), this.m === 2 && m > 1 ? (u = this.calculateShapeEdges(e, s, k.totalShapeLength, l, A), l += k.totalShapeLength) : u = [
                        [
                            g,
                            p
                        ]
                    ], b = u.length, o = 0; o < b; o += 1){
                        g = u[o][0], p = u[o][1], x.length = 0, p <= 1 ? x.push({
                            s: k.totalShapeLength * g,
                            e: k.totalShapeLength * p
                        }) : g >= 1 ? x.push({
                            s: k.totalShapeLength * (g - 1),
                            e: k.totalShapeLength * (p - 1)
                        }) : (x.push({
                            s: k.totalShapeLength * g,
                            e: k.totalShapeLength
                        }), x.push({
                            s: 0,
                            e: k.totalShapeLength * (p - 1)
                        }));
                        var v = this.addShapes(k, x[0]);
                        if (x[0].s !== x[0].e) {
                            if (x.length > 1) {
                                var M = k.shape.paths.shapes[k.shape.paths._length - 1];
                                if (M.c) {
                                    var C = v.pop();
                                    this.addPaths(v, S), v = this.addShapes(k, x[1], C);
                                } else this.addPaths(v, S), v = this.addShapes(k, x[1]);
                            }
                            this.addPaths(v, S);
                        }
                    }
                    k.shape.paths = S;
                }
            }
        }, bt.prototype.addPaths = function(t, e) {
            var s, i = t.length;
            for(s = 0; s < i; s += 1)e.addShape(t[s]);
        }, bt.prototype.addSegment = function(t, e, s, i, r, a, h) {
            r.setXYAt(e[0], e[1], "o", a), r.setXYAt(s[0], s[1], "i", a + 1), h && r.setXYAt(t[0], t[1], "v", a), r.setXYAt(i[0], i[1], "v", a + 1);
        }, bt.prototype.addSegmentFromArray = function(t, e, s, i) {
            e.setXYAt(t[1], t[5], "o", s), e.setXYAt(t[2], t[6], "i", s + 1), i && e.setXYAt(t[0], t[4], "v", s), e.setXYAt(t[3], t[7], "v", s + 1);
        }, bt.prototype.addShapes = function(t, e, s) {
            var i = t.pathsData, r = t.shape.paths.shapes, a, h = t.shape.paths._length, m, o, b = 0, _, P, f, A, x = [], k, S = !0;
            for(s ? (P = s._length, k = s._length) : (s = nt.newElement(), P = 0, k = 0), x.push(s), a = 0; a < h; a += 1){
                for(f = i[a].lengths, s.c = r[a].c, o = r[a].c ? f.length : f.length + 1, m = 1; m < o; m += 1)if (_ = f[m - 1], b + _.addedLength < e.s) b += _.addedLength, s.c = !1;
                else if (b > e.e) {
                    s.c = !1;
                    break;
                } else e.s <= b && e.e >= b + _.addedLength ? (this.addSegment(r[a].v[m - 1], r[a].o[m - 1], r[a].i[m], r[a].v[m], s, P, S), S = !1) : (A = Pt.getNewSegment(r[a].v[m - 1], r[a].v[m], r[a].o[m - 1], r[a].i[m], (e.s - b) / _.addedLength, (e.e - b) / _.addedLength, f[m - 1]), this.addSegmentFromArray(A, s, P, S), S = !1, s.c = !1), b += _.addedLength, P += 1;
                if (r[a].c && f.length) {
                    if (_ = f[m - 1], b <= e.e) {
                        var g = f[m - 1].addedLength;
                        e.s <= b && e.e >= b + g ? (this.addSegment(r[a].v[m - 1], r[a].o[m - 1], r[a].i[0], r[a].v[0], s, P, S), S = !1) : (A = Pt.getNewSegment(r[a].v[m - 1], r[a].v[0], r[a].o[m - 1], r[a].i[0], (e.s - b) / g, (e.e - b) / g, f[m - 1]), this.addSegmentFromArray(A, s, P, S), S = !1, s.c = !1);
                    } else s.c = !1;
                    b += _.addedLength, P += 1;
                }
                if (s._length && (s.setXYAt(s.v[k][0], s.v[k][1], "i", k), s.setXYAt(s.v[s._length - 1][0], s.v[s._length - 1][1], "o", s._length - 1)), b > e.e) break;
                a < h - 1 && (s = nt.newElement(), S = !0, x.push(s), P = 0);
            }
            return x;
        };
        function ue() {}
        Y([
            yt
        ], ue), ue.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = L.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
        }, ue.prototype.processPath = function(t, e) {
            var s = e / 100, i = [
                0,
                0
            ], r = t._length, a = 0;
            for(a = 0; a < r; a += 1)i[0] += t.v[a][0], i[1] += t.v[a][1];
            i[0] /= r, i[1] /= r;
            var h = nt.newElement();
            h.c = t.c;
            var m, o, b, _, P, f;
            for(a = 0; a < r; a += 1)m = t.v[a][0] + (i[0] - t.v[a][0]) * s, o = t.v[a][1] + (i[1] - t.v[a][1]) * s, b = t.o[a][0] + (i[0] - t.o[a][0]) * -s, _ = t.o[a][1] + (i[1] - t.o[a][1]) * -s, P = t.i[a][0] + (i[0] - t.i[a][0]) * -s, f = t.i[a][1] + (i[1] - t.i[a][1]) * -s, h.setTripleAt(m, o, b, _, P, f, a);
            return h;
        }, ue.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, r, a, h = this.amount.v;
            if (h !== 0) {
                var m, o;
                for(s = 0; s < i; s += 1){
                    if (m = this.shapes[s], o = m.localShapeCollection, !(!m.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), m.shape._mdf = !0, e = m.shape.paths.shapes, a = m.shape.paths._length, r = 0; r < a; r += 1)o.addShape(this.processPath(e[r], h));
                    m.shape.paths = m.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        var Ge = function() {
            var t = [
                0,
                0
            ];
            function e(o) {
                var b = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || b, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            function s(o) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
                        var b;
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var _, P;
                            if (b = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (_ = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / b, 0), P = this.p.getValueAtTime(this.p.keyframes[0].t / b, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (_ = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / b, 0), P = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / b, 0)) : (_ = this.p.pv, P = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / b, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                _ = [], P = [];
                                var f = this.px, A = this.py;
                                f._caching.lastFrame + f.offsetTime <= f.keyframes[0].t ? (_[0] = f.getValueAtTime((f.keyframes[0].t + .01) / b, 0), _[1] = A.getValueAtTime((A.keyframes[0].t + .01) / b, 0), P[0] = f.getValueAtTime(f.keyframes[0].t / b, 0), P[1] = A.getValueAtTime(A.keyframes[0].t / b, 0)) : f._caching.lastFrame + f.offsetTime >= f.keyframes[f.keyframes.length - 1].t ? (_[0] = f.getValueAtTime(f.keyframes[f.keyframes.length - 1].t / b, 0), _[1] = A.getValueAtTime(A.keyframes[A.keyframes.length - 1].t / b, 0), P[0] = f.getValueAtTime((f.keyframes[f.keyframes.length - 1].t - .01) / b, 0), P[1] = A.getValueAtTime((A.keyframes[A.keyframes.length - 1].t - .01) / b, 0)) : (_ = [
                                    f.pv,
                                    A.pv
                                ], P[0] = f.getValueAtTime((f._caching.lastFrame + f.offsetTime - .01) / b, f.offsetTime), P[1] = A.getValueAtTime((A._caching.lastFrame + A.offsetTime - .01) / b, A.offsetTime));
                            } else P = t, _ = P;
                            this.v.rotate(-Math.atan2(_[1] - P[1], _[0] - P[0]));
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
            function r() {}
            function a(o) {
                this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0;
            }
            function h(o, b, _) {
                if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = b, this.v = new ot, this.pre = new ot, this.appliedTransformations = 0, this.initDynamicPropertyContainer(_ || o), b.p && b.p.s ? (this.px = L.getProp(o, b.p.x, 0, 0, this), this.py = L.getProp(o, b.p.y, 0, 0, this), b.p.z && (this.pz = L.getProp(o, b.p.z, 0, 0, this))) : this.p = L.getProp(o, b.p || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), b.rx) {
                    if (this.rx = L.getProp(o, b.rx, 0, H, this), this.ry = L.getProp(o, b.ry, 0, H, this), this.rz = L.getProp(o, b.rz, 0, H, this), b.or.k[0].ti) {
                        var P, f = b.or.k.length;
                        for(P = 0; P < f; P += 1)b.or.k[P].to = null, b.or.k[P].ti = null;
                    }
                    this.or = L.getProp(o, b.or, 1, H, this), this.or.sh = !0;
                } else this.r = L.getProp(o, b.r || {
                    k: 0
                }, 0, H, this);
                b.sk && (this.sk = L.getProp(o, b.sk, 0, H, this), this.sa = L.getProp(o, b.sa, 0, H, this)), this.a = L.getProp(o, b.a || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this), this.s = L.getProp(o, b.s || {
                    k: [
                        100,
                        100,
                        100
                    ]
                }, 1, .01, this), b.o ? this.o = L.getProp(o, b.o, 0, .01, o) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
            }
            h.prototype = {
                applyToMatrix: e,
                getValue: s,
                precalculateMatrix: i,
                autoOrient: r
            }, Y([
                at
            ], h), h.prototype.addDynamicProperty = a, h.prototype._addDynamicProperty = at.prototype.addDynamicProperty;
            function m(o, b, _) {
                return new h(o, b, _);
            }
            return {
                getTransformProperty: m
            };
        }();
        function xt() {}
        Y([
            yt
        ], xt), xt.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = L.getProp(t, e.c, 0, null, this), this.o = L.getProp(t, e.o, 0, null, this), this.tr = Ge.getTransformProperty(t, e.tr, this), this.so = L.getProp(t, e.tr.so, 0, .01, this), this.eo = L.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new ot, this.rMatrix = new ot, this.sMatrix = new ot, this.tMatrix = new ot, this.matrix = new ot;
        }, xt.prototype.applyTransforms = function(t, e, s, i, r, a) {
            var h = a ? -1 : 1, m = i.s.v[0] + (1 - i.s.v[0]) * (1 - r), o = i.s.v[1] + (1 - i.s.v[1]) * (1 - r);
            t.translate(i.p.v[0] * h * r, i.p.v[1] * h * r, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * h * r), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), s.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), s.scale(a ? 1 / m : m, a ? 1 / o : o), s.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
        }, xt.prototype.init = function(t, e, s, i) {
            for(this.elem = t, this.arr = e, this.pos = s, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[s]); s > 0;)s -= 1, this._elements.unshift(e[s]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
        }, xt.prototype.resetElements = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it);
        }, xt.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e;
        }, xt.prototype.changeGroupRender = function(t, e) {
            var s, i = t.length;
            for(s = 0; s < i; s += 1)t[s]._render = e, t[s].ty === "gr" && this.changeGroupRender(t[s].it, e);
        }, xt.prototype.processShapes = function(t) {
            var e, s, i, r, a, h = !1;
            if (this._mdf || t) {
                var m = Math.ceil(this.c.v);
                if (this._groups.length < m) {
                    for(; this._groups.length < m;){
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
                    this.elem.reloadShapes(), h = !0;
                }
                a = 0;
                var b;
                for(i = 0; i <= this._groups.length - 1; i += 1){
                    if (b = a < m, this._groups[i]._render = b, this.changeGroupRender(this._groups[i].it, b), !b) {
                        var _ = this.elemsData[i].it, P = _[_.length - 1];
                        P.transform.op.v !== 0 ? (P.transform.op._mdf = !0, P.transform.op.v = 0) : P.transform.op._mdf = !1;
                    }
                    a += 1;
                }
                this._currentCopies = m;
                var f = this.o.v, A = f % 1, x = f > 0 ? Math.floor(f) : Math.ceil(f), k = this.pMatrix.props, S = this.rMatrix.props, g = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var p = 0;
                if (f > 0) {
                    for(; p < x;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), p += 1;
                    A && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, A, !1), p += A);
                } else if (f < 0) {
                    for(; p > x;)this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), p -= 1;
                    A && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -A, !0), p -= A);
                }
                i = this.data.m === 1 ? 0 : this._currentCopies - 1, r = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
                for(var l, u; a;){
                    if (e = this.elemsData[i].it, s = e[e.length - 1].transform.mProps.v.props, u = s.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), p !== 0) {
                        for((i !== 0 && r === 1 || i !== this._currentCopies - 1 && r === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(S[0], S[1], S[2], S[3], S[4], S[5], S[6], S[7], S[8], S[9], S[10], S[11], S[12], S[13], S[14], S[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(k[0], k[1], k[2], k[3], k[4], k[5], k[6], k[7], k[8], k[9], k[10], k[11], k[12], k[13], k[14], k[15]), l = 0; l < u; l += 1)s[l] = this.matrix.props[l];
                        this.matrix.reset();
                    } else for(this.matrix.reset(), l = 0; l < u; l += 1)s[l] = this.matrix.props[l];
                    p += 1, a -= 1, i += r;
                }
            } else for(a = this._currentCopies, i = 0, r = 1; a;)e = this.elemsData[i].it, s = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += r;
            return h;
        }, xt.prototype.addShape = function() {};
        function me() {}
        Y([
            yt
        ], me), me.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.rd = L.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
        }, me.prototype.processPath = function(t, e) {
            var s = nt.newElement();
            s.c = t.c;
            var i, r = t._length, a, h, m, o, b, _, P = 0, f, A, x, k, S, g;
            for(i = 0; i < r; i += 1)a = t.v[i], m = t.o[i], h = t.i[i], a[0] === m[0] && a[1] === m[1] && a[0] === h[0] && a[1] === h[1] ? (i === 0 || i === r - 1) && !t.c ? (s.setTripleAt(a[0], a[1], m[0], m[1], h[0], h[1], P), P += 1) : (i === 0 ? o = t.v[r - 1] : o = t.v[i - 1], b = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), _ = b ? Math.min(b / 2, e) / b : 0, S = a[0] + (o[0] - a[0]) * _, f = S, g = a[1] - (a[1] - o[1]) * _, A = g, x = f - (f - a[0]) * Vt, k = A - (A - a[1]) * Vt, s.setTripleAt(f, A, x, k, S, g, P), P += 1, i === r - 1 ? o = t.v[0] : o = t.v[i + 1], b = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), _ = b ? Math.min(b / 2, e) / b : 0, x = a[0] + (o[0] - a[0]) * _, f = x, k = a[1] + (o[1] - a[1]) * _, A = k, S = f - (f - a[0]) * Vt, g = A - (A - a[1]) * Vt, s.setTripleAt(f, A, x, k, S, g, P), P += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], P), P += 1);
            return s;
        }, me.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, r, a, h = this.rd.v;
            if (h !== 0) {
                var m, o;
                for(s = 0; s < i; s += 1){
                    if (m = this.shapes[s], o = m.localShapeCollection, !(!m.shape._mdf && !this._mdf && !t)) for(o.releaseShapes(), m.shape._mdf = !0, e = m.shape.paths.shapes, a = m.shape.paths._length, r = 0; r < a; r += 1)o.addShape(this.processPath(e[r], h));
                    m.shape.paths = m.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function Ve(t, e) {
            return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
        }
        function He(t) {
            return Math.abs(t) <= 1e-5;
        }
        function Es(t, e, s) {
            return t * (1 - s) + e * s;
        }
        function Rt(t, e, s) {
            return [
                Es(t[0], e[0], s),
                Es(t[1], e[1], s)
            ];
        }
        function qi(t, e, s) {
            if (t === 0) return [];
            var i = e * e - 4 * t * s;
            if (i < 0) return [];
            var r = -e / (2 * t);
            if (i === 0) return [
                r
            ];
            var a = Math.sqrt(i) / (2 * t);
            return [
                r - a,
                r + a
            ];
        }
        function Fs(t, e, s, i) {
            return [
                -t + 3 * e - 3 * s + i,
                3 * t - 6 * e + 3 * s,
                -3 * t + 3 * e,
                t
            ];
        }
        function Is(t) {
            return new G(t, t, t, t, !1);
        }
        function G(t, e, s, i, r) {
            r && se(t, e) && (e = Rt(t, i, 1 / 3)), r && se(s, i) && (s = Rt(t, i, 2 / 3));
            var a = Fs(t[0], e[0], s[0], i[0]), h = Fs(t[1], e[1], s[1], i[1]);
            this.a = [
                a[0],
                h[0]
            ], this.b = [
                a[1],
                h[1]
            ], this.c = [
                a[2],
                h[2]
            ], this.d = [
                a[3],
                h[3]
            ], this.points = [
                t,
                e,
                s,
                i
            ];
        }
        G.prototype.point = function(t) {
            return [
                ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
                ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]
            ];
        }, G.prototype.derivative = function(t) {
            return [
                (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
                (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]
            ];
        }, G.prototype.tangentAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[1], e[0]);
        }, G.prototype.normalAngle = function(t) {
            var e = this.derivative(t);
            return Math.atan2(e[0], e[1]);
        }, G.prototype.inflectionPoints = function() {
            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (He(t)) return [];
            var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, s = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
            if (s < 0) return [];
            var i = Math.sqrt(s);
            return He(i) ? i > 0 && i < 1 ? [
                e
            ] : [] : [
                e - i,
                e + i
            ].filter(function(r) {
                return r > 0 && r < 1;
            });
        }, G.prototype.split = function(t) {
            if (t <= 0) return [
                Is(this.points[0]),
                this
            ];
            if (t >= 1) return [
                this,
                Is(this.points[this.points.length - 1])
            ];
            var e = Rt(this.points[0], this.points[1], t), s = Rt(this.points[1], this.points[2], t), i = Rt(this.points[2], this.points[3], t), r = Rt(e, s, t), a = Rt(s, i, t), h = Rt(r, a, t);
            return [
                new G(this.points[0], e, r, h, !0),
                new G(h, a, i, this.points[3], !0)
            ];
        };
        function Ls(t, e) {
            var s = t.points[0][e], i = t.points[t.points.length - 1][e];
            if (s > i) {
                var r = i;
                i = s, s = r;
            }
            for(var a = qi(3 * t.a[e], 2 * t.b[e], t.c[e]), h = 0; h < a.length; h += 1)if (a[h] > 0 && a[h] < 1) {
                var m = t.point(a[h])[e];
                m < s ? s = m : m > i && (i = m);
            }
            return {
                min: s,
                max: i
            };
        }
        G.prototype.bounds = function() {
            return {
                x: Ls(this, 0),
                y: Ls(this, 1)
            };
        }, G.prototype.boundingBox = function() {
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
        function ze(t, e, s) {
            var i = t.boundingBox();
            return {
                cx: i.cx,
                cy: i.cy,
                width: i.width,
                height: i.height,
                bez: t,
                t: (e + s) / 2,
                t1: e,
                t2: s
            };
        }
        function Vs(t) {
            var e = t.bez.split(.5);
            return [
                ze(e[0], t.t1, t.t),
                ze(e[1], t.t, t.t2)
            ];
        }
        function Wi(t, e) {
            return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
        }
        function de(t, e, s, i, r, a) {
            if (Wi(t, e)) {
                if (s >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
                    r.push([
                        t.t,
                        e.t
                    ]);
                    return;
                }
                var h = Vs(t), m = Vs(e);
                de(h[0], m[0], s + 1, i, r, a), de(h[0], m[1], s + 1, i, r, a), de(h[1], m[0], s + 1, i, r, a), de(h[1], m[1], s + 1, i, r, a);
            }
        }
        G.prototype.intersections = function(t, e, s) {
            e === void 0 && (e = 2), s === void 0 && (s = 7);
            var i = [];
            return de(ze(this, 0, 1), ze(t, 0, 1), 0, e, i, s), i;
        }, G.shapeSegment = function(t, e) {
            var s = (e + 1) % t.length();
            return new G(t.v[e], t.o[e], t.i[s], t.v[s], !0);
        }, G.shapeSegmentInverted = function(t, e) {
            var s = (e + 1) % t.length();
            return new G(t.v[s], t.i[s], t.o[e], t.v[e], !0);
        };
        function Qe(t, e) {
            return [
                t[1] * e[2] - t[2] * e[1],
                t[2] * e[0] - t[0] * e[2],
                t[0] * e[1] - t[1] * e[0]
            ];
        }
        function Re(t, e, s, i) {
            var r = [
                t[0],
                t[1],
                1
            ], a = [
                e[0],
                e[1],
                1
            ], h = [
                s[0],
                s[1],
                1
            ], m = [
                i[0],
                i[1],
                1
            ], o = Qe(Qe(r, a), Qe(h, m));
            return He(o[2]) ? null : [
                o[0] / o[2],
                o[1] / o[2]
            ];
        }
        function ee(t, e, s) {
            return [
                t[0] + Math.cos(e) * s,
                t[1] - Math.sin(e) * s
            ];
        }
        function $e(t, e) {
            return Math.hypot(t[0] - e[0], t[1] - e[1]);
        }
        function se(t, e) {
            return Ve(t[0], e[0]) && Ve(t[1], e[1]);
        }
        function ce() {}
        Y([
            yt
        ], ce), ce.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amplitude = L.getProp(t, e.s, 0, null, this), this.frequency = L.getProp(t, e.r, 0, null, this), this.pointsType = L.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
        };
        function zs(t, e, s, i, r, a, h) {
            var m = s - Math.PI / 2, o = s + Math.PI / 2, b = e[0] + Math.cos(s) * i * r, _ = e[1] - Math.sin(s) * i * r;
            t.setTripleAt(b, _, b + Math.cos(m) * a, _ - Math.sin(m) * a, b + Math.cos(o) * h, _ - Math.sin(o) * h, t.length());
        }
        function Xi(t, e) {
            var s = [
                e[0] - t[0],
                e[1] - t[1]
            ], i = -Math.PI * .5, r = [
                Math.cos(i) * s[0] - Math.sin(i) * s[1],
                Math.sin(i) * s[0] + Math.cos(i) * s[1]
            ];
            return r;
        }
        function Ji(t, e) {
            var s = e === 0 ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), r = t.v[s], a = t.v[i], h = Xi(r, a);
            return Math.atan2(0, 1) - Math.atan2(h[1], h[0]);
        }
        function Rs(t, e, s, i, r, a, h) {
            var m = Ji(e, s), o = e.v[s % e._length], b = e.v[s === 0 ? e._length - 1 : s - 1], _ = e.v[(s + 1) % e._length], P = a === 2 ? Math.sqrt(Math.pow(o[0] - b[0], 2) + Math.pow(o[1] - b[1], 2)) : 0, f = a === 2 ? Math.sqrt(Math.pow(o[0] - _[0], 2) + Math.pow(o[1] - _[1], 2)) : 0;
            zs(t, e.v[s % e._length], m, h, i, f / ((r + 1) * 2), P / ((r + 1) * 2));
        }
        function Yi(t, e, s, i, r, a) {
            for(var h = 0; h < i; h += 1){
                var m = (h + 1) / (i + 1), o = r === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, b = e.normalAngle(m), _ = e.point(m);
                zs(t, _, b, a, s, o / ((i + 1) * 2), o / ((i + 1) * 2)), a = -a;
            }
            return a;
        }
        ce.prototype.processPath = function(t, e, s, i) {
            var r = t._length, a = nt.newElement();
            if (a.c = t.c, t.c || (r -= 1), r === 0) return a;
            var h = -1, m = G.shapeSegment(t, 0);
            Rs(a, t, 0, e, s, i, h);
            for(var o = 0; o < r; o += 1)h = Yi(a, m, e, s, i, -h), o === r - 1 && !t.c ? m = null : m = G.shapeSegment(t, (o + 1) % r), Rs(a, t, o + 1, e, s, i, h);
            return a;
        }, ce.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, r, a, h = this.amplitude.v, m = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
            if (h !== 0) {
                var b, _;
                for(s = 0; s < i; s += 1){
                    if (b = this.shapes[s], _ = b.localShapeCollection, !(!b.shape._mdf && !this._mdf && !t)) for(_.releaseShapes(), b.shape._mdf = !0, e = b.shape.paths.shapes, a = b.shape.paths._length, r = 0; r < a; r += 1)_.addShape(this.processPath(e[r], h, m, o));
                    b.shape.paths = b.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function Ke(t, e, s) {
            var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
            return [
                ee(t, i, s),
                ee(e, i, s)
            ];
        }
        function ie(t, e) {
            var s, i, r, a, h, m, o;
            o = Ke(t.points[0], t.points[1], e), s = o[0], i = o[1], o = Ke(t.points[1], t.points[2], e), r = o[0], a = o[1], o = Ke(t.points[2], t.points[3], e), h = o[0], m = o[1];
            var b = Re(s, i, r, a);
            b === null && (b = i);
            var _ = Re(h, m, r, a);
            return _ === null && (_ = h), new G(s, b, _, m);
        }
        function Os(t, e, s, i, r) {
            var a = e.points[3], h = s.points[0];
            if (i === 3 || se(a, h)) return a;
            if (i === 2) {
                var m = -e.tangentAngle(1), o = -s.tangentAngle(0) + Math.PI, b = Re(a, ee(a, m + Math.PI / 2, 100), h, ee(h, m + Math.PI / 2, 100)), _ = b ? $e(b, a) : $e(a, h) / 2, P = ee(a, m, 2 * _ * Vt);
                return t.setXYAt(P[0], P[1], "o", t.length() - 1), P = ee(h, o, 2 * _ * Vt), t.setTripleAt(h[0], h[1], h[0], h[1], P[0], P[1], t.length()), h;
            }
            var f = se(a, e.points[2]) ? e.points[0] : e.points[2], A = se(h, s.points[1]) ? s.points[3] : s.points[1], x = Re(f, a, h, A);
            return x && $e(x, a) < r ? (t.setTripleAt(x[0], x[1], x[0], x[1], x[0], x[1], t.length()), x) : a;
        }
        function Ns(t, e) {
            var s = t.intersections(e);
            return s.length && Ve(s[0][0], 1) && s.shift(), s.length ? s[0] : null;
        }
        function js(t, e) {
            var s = t.slice(), i = e.slice(), r = Ns(t[t.length - 1], e[0]);
            return r && (s[t.length - 1] = t[t.length - 1].split(r[0])[0], i[0] = e[0].split(r[1])[1]), t.length > 1 && e.length > 1 && (r = Ns(t[0], e[e.length - 1]), r) ? [
                [
                    t[0].split(r[0])[0]
                ],
                [
                    e[e.length - 1].split(r[1])[1]
                ]
            ] : [
                s,
                i
            ];
        }
        function Ui(t) {
            for(var e, s = 1; s < t.length; s += 1)e = js(t[s - 1], t[s]), t[s - 1] = e[0], t[s] = e[1];
            return t.length > 1 && (e = js(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
        }
        function Bs(t, e) {
            var s = t.inflectionPoints(), i, r, a, h;
            if (s.length === 0) return [
                ie(t, e)
            ];
            if (s.length === 1 || Ve(s[1], 1)) return a = t.split(s[0]), i = a[0], r = a[1], [
                ie(i, e),
                ie(r, e)
            ];
            a = t.split(s[0]), i = a[0];
            var m = (s[1] - s[0]) / (1 - s[0]);
            return a = a[1].split(m), h = a[0], r = a[1], [
                ie(i, e),
                ie(h, e),
                ie(r, e)
            ];
        }
        function ge() {}
        Y([
            yt
        ], ge), ge.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = L.getProp(t, e.a, 0, null, this), this.miterLimit = L.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
        }, ge.prototype.processPath = function(t, e, s, i) {
            var r = nt.newElement();
            r.c = t.c;
            var a = t.length();
            t.c || (a -= 1);
            var h, m, o, b = [];
            for(h = 0; h < a; h += 1)o = G.shapeSegment(t, h), b.push(Bs(o, e));
            if (!t.c) for(h = a - 1; h >= 0; h -= 1)o = G.shapeSegmentInverted(t, h), b.push(Bs(o, e));
            b = Ui(b);
            var _ = null, P = null;
            for(h = 0; h < b.length; h += 1){
                var f = b[h];
                for(P && (_ = Os(r, P, f[0], s, i)), P = f[f.length - 1], m = 0; m < f.length; m += 1)o = f[m], _ && se(o.points[0], _) ? r.setXYAt(o.points[1][0], o.points[1][1], "o", r.length() - 1) : r.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], r.length()), r.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], r.length()), _ = o.points[3];
            }
            return b.length && Os(r, P, b[0][0], s, i), r;
        }, ge.prototype.processShapes = function(t) {
            var e, s, i = this.shapes.length, r, a, h = this.amount.v, m = this.miterLimit.v, o = this.lineJoin;
            if (h !== 0) {
                var b, _;
                for(s = 0; s < i; s += 1){
                    if (b = this.shapes[s], _ = b.localShapeCollection, !(!b.shape._mdf && !this._mdf && !t)) for(_.releaseShapes(), b.shape._mdf = !0, e = b.shape.paths.shapes, a = b.shape.paths._length, r = 0; r < a; r += 1)_.addShape(this.processPath(e[r], h, o, m));
                    b.shape.paths = b.localShapeCollection;
                }
            }
            this.dynamicProperties.length || (this._mdf = !1);
        };
        function qs(t) {
            for(var e = t.fStyle ? t.fStyle.split(" ") : [], s = "normal", i = "normal", r = e.length, a, h = 0; h < r; h += 1)switch(a = e[h].toLowerCase(), a){
                case "italic":
                    i = "italic";
                    break;
                case "bold":
                    s = "700";
                    break;
                case "black":
                    s = "900";
                    break;
                case "medium":
                    s = "500";
                    break;
                case "regular":
                case "normal":
                    s = "400";
                    break;
                case "light":
                case "thin":
                    s = "200";
                    break;
            }
            return {
                style: i,
                weight: t.fWeight || s
            };
        }
        var Gt = function() {
            var t = 5e3, e = {
                w: 0,
                size: 0,
                shapes: [],
                data: {
                    shapes: []
                }
            }, s = [];
            s = s.concat([
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
            var i = 127988, r = 917631, a = 917601, h = 917626, m = 65039, o = 8205, b = 127462, _ = 127487, P = [
                "d83cdffb",
                "d83cdffc",
                "d83cdffd",
                "d83cdffe",
                "d83cdfff"
            ];
            function f(d) {
                var y = d.split(","), n, c = y.length, T = [];
                for(n = 0; n < c; n += 1)y[n] !== "sans-serif" && y[n] !== "monospace" && T.push(y[n]);
                return T.join(",");
            }
            function A(d, y) {
                var n = Lt("span");
                n.setAttribute("aria-hidden", !0), n.style.fontFamily = y;
                var c = Lt("span");
                c.innerText = "giItT1WQy@!-/#", n.style.position = "absolute", n.style.left = "-10000px", n.style.top = "-10000px", n.style.fontSize = "300px", n.style.fontVariant = "normal", n.style.fontStyle = "normal", n.style.fontWeight = "normal", n.style.letterSpacing = "0", n.appendChild(c), document.body.appendChild(n);
                var T = c.offsetWidth;
                return c.style.fontFamily = f(d) + ", " + y, {
                    node: c,
                    w: T,
                    parent: n
                };
            }
            function x() {
                var d, y = this.fonts.length, n, c, T = y;
                for(d = 0; d < y; d += 1)this.fonts[d].loaded ? T -= 1 : this.fonts[d].fOrigin === "n" || this.fonts[d].origin === 0 ? this.fonts[d].loaded = !0 : (n = this.fonts[d].monoCase.node, c = this.fonts[d].monoCase.w, n.offsetWidth !== c ? (T -= 1, this.fonts[d].loaded = !0) : (n = this.fonts[d].sansCase.node, c = this.fonts[d].sansCase.w, n.offsetWidth !== c && (T -= 1, this.fonts[d].loaded = !0)), this.fonts[d].loaded && (this.fonts[d].sansCase.parent.parentNode.removeChild(this.fonts[d].sansCase.parent), this.fonts[d].monoCase.parent.parentNode.removeChild(this.fonts[d].monoCase.parent)));
                T !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function k(d, y) {
                var n = document.body && y ? "svg" : "canvas", c, T = qs(d);
                if (n === "svg") {
                    var D = q("text");
                    D.style.fontSize = "100px", D.setAttribute("font-family", d.fFamily), D.setAttribute("font-style", T.style), D.setAttribute("font-weight", T.weight), D.textContent = "1", d.fClass ? (D.style.fontFamily = "inherit", D.setAttribute("class", d.fClass)) : D.style.fontFamily = d.fFamily, y.appendChild(D), c = D;
                } else {
                    var W = new OffscreenCanvas(500, 500).getContext("2d");
                    W.font = T.style + " " + T.weight + " 100px " + d.fFamily, c = W;
                }
                function z(J) {
                    return n === "svg" ? (c.textContent = J, c.getComputedTextLength()) : c.measureText(J).width;
                }
                return {
                    measureText: z
                };
            }
            function S(d, y) {
                if (!d) {
                    this.isLoaded = !0;
                    return;
                }
                if (this.chars) {
                    this.isLoaded = !0, this.fonts = d.list;
                    return;
                }
                if (!document.body) {
                    this.isLoaded = !0, d.list.forEach(function(ut) {
                        ut.helper = k(ut), ut.cache = {};
                    }), this.fonts = d.list;
                    return;
                }
                var n = d.list, c, T = n.length, D = T;
                for(c = 0; c < T; c += 1){
                    var W = !0, z, J;
                    if (n[c].loaded = !1, n[c].monoCase = A(n[c].fFamily, "monospace"), n[c].sansCase = A(n[c].fFamily, "sans-serif"), !n[c].fPath) n[c].loaded = !0, D -= 1;
                    else if (n[c].fOrigin === "p" || n[c].origin === 3) {
                        if (z = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[c].fFamily + '"], style[f-origin="3"][f-family="' + n[c].fFamily + '"]'), z.length > 0 && (W = !1), W) {
                            var X = Lt("style");
                            X.setAttribute("f-forigin", n[c].fOrigin), X.setAttribute("f-origin", n[c].origin), X.setAttribute("f-family", n[c].fFamily), X.type = "text/css", X.innerText = "@font-face {font-family: " + n[c].fFamily + "; font-style: normal; src: url('" + n[c].fPath + "');}", y.appendChild(X);
                        }
                    } else if (n[c].fOrigin === "g" || n[c].origin === 1) {
                        for(z = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), J = 0; J < z.length; J += 1)z[J].href.indexOf(n[c].fPath) !== -1 && (W = !1);
                        if (W) {
                            var $ = Lt("link");
                            $.setAttribute("f-forigin", n[c].fOrigin), $.setAttribute("f-origin", n[c].origin), $.type = "text/css", $.rel = "stylesheet", $.href = n[c].fPath, document.body.appendChild($);
                        }
                    } else if (n[c].fOrigin === "t" || n[c].origin === 2) {
                        for(z = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), J = 0; J < z.length; J += 1)n[c].fPath === z[J].src && (W = !1);
                        if (W) {
                            var K = Lt("link");
                            K.setAttribute("f-forigin", n[c].fOrigin), K.setAttribute("f-origin", n[c].origin), K.setAttribute("rel", "stylesheet"), K.setAttribute("href", n[c].fPath), y.appendChild(K);
                        }
                    }
                    n[c].helper = k(n[c], y), n[c].cache = {}, this.fonts.push(n[c]);
                }
                D === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function g(d) {
                if (d) {
                    this.chars || (this.chars = []);
                    var y, n = d.length, c, T = this.chars.length, D;
                    for(y = 0; y < n; y += 1){
                        for(c = 0, D = !1; c < T;)this.chars[c].style === d[y].style && this.chars[c].fFamily === d[y].fFamily && this.chars[c].ch === d[y].ch && (D = !0), c += 1;
                        D || (this.chars.push(d[y]), T += 1);
                    }
                }
            }
            function p(d, y, n) {
                for(var c = 0, T = this.chars.length; c < T;){
                    if (this.chars[c].ch === d && this.chars[c].style === y && this.chars[c].fFamily === n) return this.chars[c];
                    c += 1;
                }
                return (typeof d == "string" && d.charCodeAt(0) !== 13 || !d) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", d, y, n)), e;
            }
            function l(d, y, n) {
                var c = this.getFontByName(y), T = d;
                if (!c.cache[T]) {
                    var D = c.helper;
                    if (d === " ") {
                        var W = D.measureText("|" + d + "|"), z = D.measureText("||");
                        c.cache[T] = (W - z) / 100;
                    } else c.cache[T] = D.measureText(d) / 100;
                }
                return c.cache[T] * n;
            }
            function u(d) {
                for(var y = 0, n = this.fonts.length; y < n;){
                    if (this.fonts[y].fName === d) return this.fonts[y];
                    y += 1;
                }
                return this.fonts[0];
            }
            function v(d) {
                var y = 0, n = d.charCodeAt(0);
                if (n >= 55296 && n <= 56319) {
                    var c = d.charCodeAt(1);
                    c >= 56320 && c <= 57343 && (y = (n - 55296) * 1024 + c - 56320 + 65536);
                }
                return y;
            }
            function M(d, y) {
                var n = d.toString(16) + y.toString(16);
                return P.indexOf(n) !== -1;
            }
            function C(d) {
                return d === o;
            }
            function w(d) {
                return d === m;
            }
            function I(d) {
                var y = v(d);
                return y >= b && y <= _;
            }
            function N(d) {
                return I(d.substr(0, 2)) && I(d.substr(2, 2));
            }
            function O(d) {
                return s.indexOf(d) !== -1;
            }
            function V(d, y) {
                var n = v(d.substr(y, 2));
                if (n !== i) return !1;
                var c = 0;
                for(y += 2; c < 5;){
                    if (n = v(d.substr(y, 2)), n < a || n > h) return !1;
                    c += 1, y += 2;
                }
                return v(d.substr(y, 2)) === r;
            }
            function j() {
                this.isLoaded = !0;
            }
            var E = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            E.isModifier = M, E.isZeroWidthJoiner = C, E.isFlagEmoji = N, E.isRegionalCode = I, E.isCombinedCharacter = O, E.isRegionalFlag = V, E.isVariationSelector = w, E.BLACK_FLAG_CODE_POINT = i;
            var F = {
                addChars: g,
                addFonts: S,
                getCharData: p,
                getFontByName: u,
                measureText: l,
                checkLoadedFonts: x,
                setIsLoaded: j
            };
            return E.prototype = F, E;
        }();
        function Ws(t) {
            this.animationData = t;
        }
        Ws.prototype.getProp = function(t) {
            return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
        };
        function Zi(t) {
            return new Ws(t);
        }
        function Oe() {}
        Oe.prototype = {
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
        var ts = function() {
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
        function Gi(t, e, s) {
            this.p = L.getProp(e, t.v, 0, 0, s);
        }
        function Hi(t, e, s) {
            this.p = L.getProp(e, t.v, 0, 0, s);
        }
        function Qi(t, e, s) {
            this.p = L.getProp(e, t.v, 1, 0, s);
        }
        function $i(t, e, s) {
            this.p = L.getProp(e, t.v, 1, 0, s);
        }
        function Ki(t, e, s) {
            this.p = L.getProp(e, t.v, 0, 0, s);
        }
        function ta(t, e, s) {
            this.p = L.getProp(e, t.v, 0, 0, s);
        }
        function ea(t, e, s) {
            this.p = L.getProp(e, t.v, 0, 0, s);
        }
        function sa() {
            this.p = {};
        }
        function Xs(t, e) {
            var s = t.ef || [];
            this.effectElements = [];
            var i, r = s.length, a;
            for(i = 0; i < r; i += 1)a = new ye(s[i], e), this.effectElements.push(a);
        }
        function ye(t, e) {
            this.init(t, e);
        }
        Y([
            at
        ], ye), ye.prototype.getValue = ye.prototype.iterateDynamicProperties, ye.prototype.init = function(t, e) {
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var s, i = this.data.ef.length, r, a = this.data.ef;
            for(s = 0; s < i; s += 1){
                switch(r = null, a[s].ty){
                    case 0:
                        r = new Gi(a[s], e, this);
                        break;
                    case 1:
                        r = new Hi(a[s], e, this);
                        break;
                    case 2:
                        r = new Qi(a[s], e, this);
                        break;
                    case 3:
                        r = new $i(a[s], e, this);
                        break;
                    case 4:
                    case 7:
                        r = new ea(a[s], e, this);
                        break;
                    case 10:
                        r = new Ki(a[s], e, this);
                        break;
                    case 11:
                        r = new ta(a[s], e, this);
                        break;
                    case 5:
                        r = new Xs(a[s], e);
                        break;
                    default:
                        r = new sa(a[s]);
                        break;
                }
                r && this.effectElements.push(r);
            }
        };
        function Ot() {}
        Ot.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask) return !1;
                for(var t = 0, e = this.data.masksProperties.length; t < e;){
                    if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== !1) return !0;
                    t += 1;
                }
                return !1;
            },
            initExpressions: function() {},
            setBlendMode: function() {
                var t = ts(this.data.bm), e = this.baseElement || this.layerElement;
                e.style["mix-blend-mode"] = t;
            },
            initBaseData: function(t, e, s) {
                this.globalData = e, this.comp = s, this.data = t, this.layerId = pt(), this.data.sr || (this.data.sr = 1), this.effectsManager = new Xs(this.data, this, this.dynamicProperties);
            },
            getType: function() {
                return this.type;
            },
            sourceRectAtTime: function() {}
        };
        function Nt() {}
        Nt.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
            },
            prepareProperties: function(t, e) {
                var s, i = this.dynamicProperties.length;
                for(s = 0; s < i; s += 1)(e || this._isParent && this.dynamicProperties[s].propType === "transform") && (this.dynamicProperties[s].getValue(), this.dynamicProperties[s]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
            },
            addDynamicProperty: function(t) {
                this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t);
            }
        };
        function jt(t, e, s) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, s);
        }
        jt.prototype.prepareFrame = function() {}, Y([
            Oe,
            Ot,
            Nt
        ], jt), jt.prototype.getBaseElement = function() {
            return null;
        }, jt.prototype.renderFrame = function() {}, jt.prototype.destroy = function() {}, jt.prototype.initExpressions = function() {}, jt.prototype.getFootageData = function() {
            return this.footageData;
        };
        function ft(t, e, s) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, s), this._isPlaying = !1, this._canPlay = !1;
            var i = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? L.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            }, this.lv = L.getProp(this, t.au && t.au.lv ? t.au.lv : {
                k: [
                    100
                ]
            }, 1, .01, this);
        }
        ft.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
            else {
                var e = this.tm.v;
                this._currentTime = e;
            }
            this._volume = this.lv.v[0];
            var s = this._volume * this._volumeMultiplier;
            this._previousVolume !== s && (this._previousVolume = s, this.audio.volume(s));
        }, Y([
            Oe,
            Ot,
            Nt
        ], ft), ft.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
        }, ft.prototype.show = function() {}, ft.prototype.hide = function() {
            this.audio.pause(), this._isPlaying = !1;
        }, ft.prototype.pause = function() {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
        }, ft.prototype.resume = function() {
            this._canPlay = !0;
        }, ft.prototype.setRate = function(t) {
            this.audio.rate(t);
        }, ft.prototype.volume = function(t) {
            this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
        }, ft.prototype.getBaseElement = function() {
            return null;
        }, ft.prototype.destroy = function() {}, ft.prototype.sourceRectAtTime = function() {}, ft.prototype.initExpressions = function() {};
        function ht() {}
        ht.prototype.checkLayers = function(t) {
            var e, s = this.layers.length, i;
            for(this.completeLayers = !0, e = s - 1; e >= 0; e -= 1)this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
            this.checkPendingElements();
        }, ht.prototype.createItem = function(t) {
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
        }, ht.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.");
        }, ht.prototype.createAudio = function(t) {
            return new ft(t, this.globalData, this);
        }, ht.prototype.createFootage = function(t) {
            return new jt(t, this.globalData, this);
        }, ht.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)this.buildItem(t);
            this.checkPendingElements();
        }, ht.prototype.includeLayers = function(t) {
            this.completeLayers = !1;
            var e, s = t.length, i, r = this.layers.length;
            for(e = 0; e < s; e += 1)for(i = 0; i < r;){
                if (this.layers[i].id === t[e].id) {
                    this.layers[i] = t[e];
                    break;
                }
                i += 1;
            }
        }, ht.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t;
        }, ht.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems();
        }, ht.prototype.buildElementParenting = function(t, e, s) {
            for(var i = this.elements, r = this.layers, a = 0, h = r.length; a < h;)r[a].ind == e && (!i[a] || i[a] === !0 ? (this.buildItem(a), this.addPendingElement(t)) : (s.push(i[a]), i[a].setAsParent(), r[a].parent !== void 0 ? this.buildElementParenting(t, r[a].parent, s) : t.setHierarchy(s))), a += 1;
        }, ht.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t);
        }, ht.prototype.searchExtraCompositions = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)if (t[e].xt) {
                var i = this.createComp(t[e]);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
            }
        }, ht.prototype.getElementById = function(t) {
            var e, s = this.elements.length;
            for(e = 0; e < s; e += 1)if (this.elements[e].data.ind === t) return this.elements[e];
            return null;
        }, ht.prototype.getElementByPath = function(t) {
            var e = t.shift(), s;
            if (typeof e == "number") s = this.elements[e];
            else {
                var i, r = this.elements.length;
                for(i = 0; i < r; i += 1)if (this.elements[i].data.nm === e) {
                    s = this.elements[i];
                    break;
                }
            }
            return t.length === 0 ? s : s.getElementByPath(t);
        }, ht.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new Gt, this.globalData.slotManager = Zi(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            };
        };
        var ia = {
            TRANSFORM_EFFECT: "transformEFfect"
        };
        function ae() {}
        ae.prototype = {
            initTransform: function() {
                var t = new ot;
                this.finalTransform = {
                    mProp: this.data.ks ? Ge.getTransformProperty(this, this.data.ks, this) : {
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
                    var t, e = this.finalTransform.mat, s = 0, i = this.hierarchy.length;
                    if (!this.finalTransform._matMdf) for(; s < i;){
                        if (this.hierarchy[s].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break;
                        }
                        s += 1;
                    }
                    if (this.finalTransform._matMdf) for(t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), s = 0; s < i; s += 1)e.multiply(this.hierarchy[s].finalTransform.mProp.v);
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
            },
            renderLocalTransform: function() {
                if (this.localTransforms) {
                    var t = 0, e = this.localTransforms.length;
                    if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for(; t < e;)this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
                    if (this.finalTransform._localMatMdf) {
                        var s = this.finalTransform.localMat;
                        for(this.localTransforms[0].matrix.clone(s), t = 1; t < e; t += 1){
                            var i = this.localTransforms[t].matrix;
                            s.multiply(i);
                        }
                        s.multiply(this.finalTransform.mat);
                    }
                    if (this.finalTransform._opMdf) {
                        var r = this.finalTransform.localOpacity;
                        for(t = 0; t < e; t += 1)r *= this.localTransforms[t].opacity * .01;
                        this.finalTransform.localOpacity = r;
                    }
                }
            },
            searchEffectTransforms: function() {
                if (this.renderableEffectsManager) {
                    var t = this.renderableEffectsManager.getEffects(ia.TRANSFORM_EFFECT);
                    if (t.length) {
                        this.localTransforms = [], this.finalTransform.localMat = new ot;
                        var e = 0, s = t.length;
                        for(e = 0; e < s; e += 1)this.localTransforms.push(t[e]);
                    }
                }
            },
            globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for(var s = !0, i = this.comp; s;)i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : s = !1;
                var r, a = e.length, h;
                for(r = 0; r < a; r += 1)h = e[r].mat.applyToPointArray(0, 0, 0), t = [
                    t[0] - h[0],
                    t[1] - h[1],
                    0
                ];
                return t;
            },
            mHelper: new ot
        };
        function Ht(t, e, s) {
            this.data = t, this.element = e, this.globalData = s, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i = this.globalData.defs, r, a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = tt(a), this.solidPath = "";
            var h, m = this.masksProperties, o = 0, b = [], _, P, f = pt(), A, x, k, S, g = "clipPath", p = "clip-path";
            for(r = 0; r < a; r += 1)if ((m[r].mode !== "a" && m[r].mode !== "n" || m[r].inv || m[r].o.k !== 100 || m[r].o.x) && (g = "mask", p = "mask"), (m[r].mode === "s" || m[r].mode === "i") && o === 0 ? (A = q("rect"), A.setAttribute("fill", "#ffffff"), A.setAttribute("width", this.element.comp.data.w || 0), A.setAttribute("height", this.element.comp.data.h || 0), b.push(A)) : A = null, h = q("path"), m[r].mode === "n") this.viewData[r] = {
                op: L.getProp(this.element, m[r].o, 0, .01, this.element),
                prop: Ie.getShapeProp(this.element, m[r], 3),
                elem: h,
                lastPath: ""
            }, i.appendChild(h);
            else {
                o += 1, h.setAttribute("fill", m[r].mode === "s" ? "#000000" : "#ffffff"), h.setAttribute("clip-rule", "nonzero");
                var l;
                if (m[r].x.k !== 0 ? (g = "mask", p = "mask", S = L.getProp(this.element, m[r].x, 0, null, this.element), l = pt(), x = q("filter"), x.setAttribute("id", l), k = q("feMorphology"), k.setAttribute("operator", "erode"), k.setAttribute("in", "SourceGraphic"), k.setAttribute("radius", "0"), x.appendChild(k), i.appendChild(x), h.setAttribute("stroke", m[r].mode === "s" ? "#000000" : "#ffffff")) : (k = null, S = null), this.storedData[r] = {
                    elem: h,
                    x: S,
                    expan: k,
                    lastPath: "",
                    lastOperator: "",
                    filterId: l,
                    lastRadius: 0
                }, m[r].mode === "i") {
                    P = b.length;
                    var u = q("g");
                    for(_ = 0; _ < P; _ += 1)u.appendChild(b[_]);
                    var v = q("mask");
                    v.setAttribute("mask-type", "alpha"), v.setAttribute("id", f + "_" + o), v.appendChild(h), i.appendChild(v), u.setAttribute("mask", "url(" + ct() + "#" + f + "_" + o + ")"), b.length = 0, b.push(u);
                } else b.push(h);
                m[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                    elem: h,
                    lastPath: "",
                    op: L.getProp(this.element, m[r].o, 0, .01, this.element),
                    prop: Ie.getShapeProp(this.element, m[r], 3),
                    invRect: A
                }, this.viewData[r].prop.k || this.drawPath(m[r], this.viewData[r].prop.v, this.viewData[r]);
            }
            for(this.maskElement = q(g), a = b.length, r = 0; r < a; r += 1)this.maskElement.appendChild(b[r]);
            o > 0 && (this.maskElement.setAttribute("id", f), this.element.maskedElement.setAttribute(p, "url(" + ct() + "#" + f + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
        }
        Ht.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop;
        }, Ht.prototype.renderFrame = function(t) {
            var e = this.element.finalTransform.mat, s, i = this.masksProperties.length;
            for(s = 0; s < i; s += 1)if ((this.viewData[s].prop._mdf || t) && this.drawPath(this.masksProperties[s], this.viewData[s].prop.v, this.viewData[s]), (this.viewData[s].op._mdf || t) && this.viewData[s].elem.setAttribute("fill-opacity", this.viewData[s].op.v), this.masksProperties[s].mode !== "n" && (this.viewData[s].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[s].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[s].x && (this.storedData[s].x._mdf || t))) {
                var r = this.storedData[s].expan;
                this.storedData[s].x.v < 0 ? (this.storedData[s].lastOperator !== "erode" && (this.storedData[s].lastOperator = "erode", this.storedData[s].elem.setAttribute("filter", "url(" + ct() + "#" + this.storedData[s].filterId + ")")), r.setAttribute("radius", -this.storedData[s].x.v)) : (this.storedData[s].lastOperator !== "dilate" && (this.storedData[s].lastOperator = "dilate", this.storedData[s].elem.setAttribute("filter", null)), this.storedData[s].elem.setAttribute("stroke-width", this.storedData[s].x.v * 2));
            }
        }, Ht.prototype.getMaskelement = function() {
            return this.maskElement;
        }, Ht.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
        }, Ht.prototype.drawPath = function(t, e, s) {
            var i = " M" + e.v[0][0] + "," + e.v[0][1], r, a;
            for(a = e._length, r = 1; r < a; r += 1)i += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
            if (e.c && a > 1 && (i += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), s.lastPath !== i) {
                var h = "";
                s.elem && (e.c && (h = t.inv ? this.solidPath + i : i), s.elem.setAttribute("d", h)), s.lastPath = i;
            }
        }, Ht.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
        };
        var ve = function() {
            var t = {};
            t.createFilter = e, t.createAlphaToLuminanceFilter = s;
            function e(i, r) {
                var a = q("filter");
                return a.setAttribute("id", i), r !== !0 && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a;
            }
            function s() {
                var i = q("feColorMatrix");
                return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i;
            }
            return t;
        }(), Js = function() {
            var t = {
                maskType: !0,
                svgLumaHidden: !0,
                offscreenCanvas: typeof OffscreenCanvas < "u"
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t;
        }(), es = {}, Ys = "filter_result_";
        function ss(t) {
            var e, s = "SourceGraphic", i = t.data.ef ? t.data.ef.length : 0, r = pt(), a = ve.createFilter(r, !0), h = 0;
            this.filters = [];
            var m;
            for(e = 0; e < i; e += 1){
                m = null;
                var o = t.data.ef[e].ty;
                if (es[o]) {
                    var b = es[o].effect;
                    m = new b(a, t.effectsManager.effectElements[e], t, Ys + h, s), s = Ys + h, es[o].countsAsEffect && (h += 1);
                }
                m && this.filters.push(m);
            }
            h && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + ct() + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this);
        }
        ss.prototype.renderFrame = function(t) {
            var e, s = this.filters.length;
            for(e = 0; e < s; e += 1)this.filters[e].renderFrame(t);
        }, ss.prototype.getEffects = function(t) {
            var e, s = this.filters.length, i = [];
            for(e = 0; e < s; e += 1)this.filters[e].type === t && i.push(this.filters[e]);
            return i;
        };
        function be() {}
        be.prototype = {
            initRendererElement: function() {
                this.layerElement = q("g");
            },
            createContainerElements: function() {
                this.matteElement = q("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var t = null;
                if (this.data.td) {
                    this.matteMasks = {};
                    var e = q("g");
                    e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e);
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                    var s = q("clipPath"), i = q("path");
                    i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var r = pt();
                    if (s.setAttribute("id", r), s.appendChild(i), this.globalData.defs.appendChild(s), this.checkMasks()) {
                        var a = q("g");
                        a.setAttribute("clip-path", "url(" + ct() + "#" + r + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
                    } else this.layerElement.setAttribute("clip-path", "url(" + ct() + "#" + r + ")");
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
                this.maskManager = new Ht(this.data, this, this.globalData), this.renderableEffectsManager = new ss(this), this.searchEffectTransforms();
            },
            getMatte: function(t) {
                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                    var e = this.layerId + "_" + t, s, i, r, a;
                    if (t === 1 || t === 3) {
                        var h = q("mask");
                        h.setAttribute("id", e), h.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), r = q("use"), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(r), this.globalData.defs.appendChild(h), !Js.maskType && t === 1 && (h.setAttribute("mask-type", "luminance"), s = pt(), i = ve.createFilter(s), this.globalData.defs.appendChild(i), i.appendChild(ve.createAlphaToLuminanceFilter()), a = q("g"), a.appendChild(r), h.appendChild(a), a.setAttribute("filter", "url(" + ct() + "#" + s + ")"));
                    } else if (t === 2) {
                        var m = q("mask");
                        m.setAttribute("id", e), m.setAttribute("mask-type", "alpha");
                        var o = q("g");
                        m.appendChild(o), s = pt(), i = ve.createFilter(s);
                        var b = q("feComponentTransfer");
                        b.setAttribute("in", "SourceGraphic"), i.appendChild(b);
                        var _ = q("feFuncA");
                        _.setAttribute("type", "table"), _.setAttribute("tableValues", "1.0 0.0"), b.appendChild(_), this.globalData.defs.appendChild(i);
                        var P = q("rect");
                        P.setAttribute("width", this.comp.data.w), P.setAttribute("height", this.comp.data.h), P.setAttribute("x", "0"), P.setAttribute("y", "0"), P.setAttribute("fill", "#ffffff"), P.setAttribute("opacity", "0"), o.setAttribute("filter", "url(" + ct() + "#" + s + ")"), o.appendChild(P), r = q("use"), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), o.appendChild(r), Js.maskType || (m.setAttribute("mask-type", "luminance"), i.appendChild(ve.createAlphaToLuminanceFilter()), a = q("g"), o.appendChild(P), a.appendChild(this.layerElement), o.appendChild(a)), this.globalData.defs.appendChild(m);
                    }
                    this.matteMasks[t] = e;
                }
                return this.matteMasks[t];
            },
            setMatte: function(t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + ct() + "#" + t + ")");
            }
        };
        function re() {}
        re.prototype = {
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
        function _e() {}
        (function() {
            var t = {
                initElement: function(e, s, i) {
                    this.initFrame(), this.initBaseData(e, s, i), this.initTransform(e, s, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
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
            Y([
                Oe,
                oi(t)
            ], _e);
        })();
        function ke(t, e, s) {
            this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, s), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            };
        }
        Y([
            Ot,
            ae,
            be,
            re,
            Nt,
            _e
        ], ke), ke.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = q("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
        }, ke.prototype.sourceRectAtTime = function() {
            return this.sourceRect;
        };
        function aa(t, e) {
            this.elem = t, this.pos = e;
        }
        function Us() {}
        Us.prototype = {
            addShapeToModifiers: function(t) {
                var e, s = this.shapeModifiers.length;
                for(e = 0; e < s; e += 1)this.shapeModifiers[e].addShape(t);
            },
            isShapeInAnimatedModifiers: function(t) {
                for(var e = 0, s = this.shapeModifiers.length; e < s;)if (this.shapeModifiers[e].isAnimatedWithShape(t)) return !0;
                return !1;
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var t, e = this.shapes.length;
                    for(t = 0; t < e; t += 1)this.shapes[t].sh.reset();
                    e = this.shapeModifiers.length;
                    var s;
                    for(t = e - 1; t >= 0 && (s = this.shapeModifiers[t].processShapes(this._isFirstFrame), !s); t -= 1);
                }
            },
            searchProcessedElement: function(t) {
                for(var e = this.processedElements, s = 0, i = e.length; s < i;){
                    if (e[s].elem === t) return e[s].pos;
                    s += 1;
                }
                return 0;
            },
            addProcessedElement: function(t, e) {
                for(var s = this.processedElements, i = s.length; i;)if (i -= 1, s[i].elem === t) {
                    s[i].pos = e;
                    return;
                }
                s.push(new aa(t, e));
            },
            prepareFrame: function(t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
            }
        };
        var Zs = {
            1: "butt",
            2: "round",
            3: "square"
        }, Gs = {
            1: "miter",
            2: "round",
            3: "bevel"
        };
        function Hs(t, e, s) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = s, this.lvl = e, this._isAnimated = !!s.k;
            for(var i = 0, r = t.length; i < r;){
                if (t[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                }
                i += 1;
            }
        }
        Hs.prototype.setAsAnimated = function() {
            this._isAnimated = !0;
        };
        function Qs(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = q("path"), this.msElem = null;
        }
        Qs.prototype.reset = function() {
            this.d = "", this._mdf = !1;
        };
        function Ne(t, e, s, i) {
            this.elem = t, this.frameId = -1, this.dataProps = tt(e.length), this.renderer = s, this.k = !1, this.dashStr = "", this.dashArray = it("float32", e.length ? e.length - 1 : 0), this.dashoffset = it("float32", 1), this.initDynamicPropertyContainer(i);
            var r, a = e.length || 0, h;
            for(r = 0; r < a; r += 1)h = L.getProp(t, e[r].v, 0, 0, this), this.k = h.k || this.k, this.dataProps[r] = {
                n: e[r].n,
                p: h
            };
            this.k || this.getValue(!0), this._isAnimated = this.k;
        }
        Ne.prototype.getValue = function(t) {
            if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0, s = this.dataProps.length;
                for(this.renderer === "svg" && (this.dashStr = ""), e = 0; e < s; e += 1)this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
            }
        }, Y([
            at
        ], Ne);
        function $s(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = L.getProp(t, e.o, 0, .01, this), this.w = L.getProp(t, e.w, 0, null, this), this.d = new Ne(t, e.d || {}, "svg", this), this.c = L.getProp(t, e.c, 1, 255, this), this.style = s, this._isAnimated = !!this._isAnimated;
        }
        Y([
            at
        ], $s);
        function Ks(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = L.getProp(t, e.o, 0, .01, this), this.c = L.getProp(t, e.c, 1, 255, this), this.style = s;
        }
        Y([
            at
        ], Ks);
        function ti(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = s;
        }
        Y([
            at
        ], ti);
        function Ae(t, e, s) {
            this.data = e, this.c = it("uint8c", e.p * 4);
            var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
            this.o = it("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(s), this.prop = L.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
        }
        Ae.prototype.comparePoints = function(t, e) {
            for(var s = 0, i = this.o.length / 2, r; s < i;){
                if (r = Math.abs(t[s * 4] - t[e * 4 + s * 2]), r > .01) return !1;
                s += 1;
            }
            return !0;
        }, Ae.prototype.checkCollapsable = function() {
            if (this.o.length / 2 !== this.c.length / 4) return !1;
            if (this.data.k.k[0].s) for(var t = 0, e = this.data.k.k.length; t < e;){
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                t += 1;
            }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
        }, Ae.prototype.getValue = function(t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, s = this.data.p * 4, i, r;
                for(e = 0; e < s; e += 1)i = e % 4 === 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
                if (this.o.length) for(s = this.prop.v.length, e = this.data.p * 4; e < s; e += 1)i = e % 2 === 0 ? 100 : 1, r = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== r && (this.o[e - this.data.p * 4] = r, this._omdf = !t);
                this._mdf = !t;
            }
        }, Y([
            at
        ], Ae);
        function ne(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, s);
        }
        ne.prototype.initGradientData = function(t, e, s) {
            this.o = L.getProp(t, e.o, 0, .01, this), this.s = L.getProp(t, e.s, 1, null, this), this.e = L.getProp(t, e.e, 1, null, this), this.h = L.getProp(t, e.h || {
                k: 0
            }, 0, .01, this), this.a = L.getProp(t, e.a || {
                k: 0
            }, 0, H, this), this.g = new Ae(t, e.g, this), this.style = s, this.stops = [], this.setGradientData(s.pElem, e), this.setGradientOpacity(e, s), this._isAnimated = !!this._isAnimated;
        }, ne.prototype.setGradientData = function(t, e) {
            var s = pt(), i = q(e.t === 1 ? "linearGradient" : "radialGradient");
            i.setAttribute("id", s), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
            var r = [], a, h, m;
            for(m = e.g.p * 4, h = 0; h < m; h += 4)a = q("stop"), i.appendChild(a), r.push(a);
            t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + ct() + "#" + s + ")"), this.gf = i, this.cst = r;
        }, ne.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var s, i, r, a = q("mask"), h = q("path");
                a.appendChild(h);
                var m = pt(), o = pt();
                a.setAttribute("id", o);
                var b = q(t.t === 1 ? "linearGradient" : "radialGradient");
                b.setAttribute("id", m), b.setAttribute("spreadMethod", "pad"), b.setAttribute("gradientUnits", "userSpaceOnUse"), r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var _ = this.stops;
                for(i = t.g.p * 4; i < r; i += 2)s = q("stop"), s.setAttribute("stop-color", "rgb(255,255,255)"), b.appendChild(s), _.push(s);
                h.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + ct() + "#" + m + ")"), t.ty === "gs" && (h.setAttribute("stroke-linecap", Zs[t.lc || 2]), h.setAttribute("stroke-linejoin", Gs[t.lj || 2]), t.lj === 1 && h.setAttribute("stroke-miterlimit", t.ml)), this.of = b, this.ms = a, this.ost = _, this.maskId = o, e.msElem = h;
            }
        }, Y([
            at
        ], ne);
        function ei(t, e, s) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = L.getProp(t, e.w, 0, null, this), this.d = new Ne(t, e.d || {}, "svg", this), this.initGradientData(t, e, s), this._isAnimated = !!this._isAnimated;
        }
        Y([
            ne,
            at
        ], ei);
        function ra() {
            this.it = [], this.prevViewData = [], this.gr = q("g");
        }
        function na(t, e, s) {
            this.transform = {
                mProps: t,
                op: e,
                container: s
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
        }
        var si = function(t, e, s, i) {
            if (e === 0) return "";
            var r = t.o, a = t.i, h = t.v, m, o = " M" + i.applyToPointStringified(h[0][0], h[0][1]);
            for(m = 1; m < e; m += 1)o += " C" + i.applyToPointStringified(r[m - 1][0], r[m - 1][1]) + " " + i.applyToPointStringified(a[m][0], a[m][1]) + " " + i.applyToPointStringified(h[m][0], h[m][1]);
            return s && e && (o += " C" + i.applyToPointStringified(r[m - 1][0], r[m - 1][1]) + " " + i.applyToPointStringified(a[0][0], a[0][1]) + " " + i.applyToPointStringified(h[0][0], h[0][1]), o += "z"), o;
        }, oa = function() {
            var t = new ot, e = new ot, s = {
                createRenderFunction: i
            };
            function i(P) {
                switch(P.ty){
                    case "fl":
                        return m;
                    case "gf":
                        return b;
                    case "gs":
                        return o;
                    case "st":
                        return _;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                        return h;
                    case "tr":
                        return r;
                    case "no":
                        return a;
                    default:
                        return null;
                }
            }
            function r(P, f, A) {
                (A || f.transform.op._mdf) && f.transform.container.setAttribute("opacity", f.transform.op.v), (A || f.transform.mProps._mdf) && f.transform.container.setAttribute("transform", f.transform.mProps.v.to2dCSS());
            }
            function a() {}
            function h(P, f, A) {
                var x, k, S, g, p, l, u = f.styles.length, v = f.lvl, M, C, w, I;
                for(l = 0; l < u; l += 1){
                    if (g = f.sh._mdf || A, f.styles[l].lvl < v) {
                        for(C = e.reset(), w = v - f.styles[l].lvl, I = f.transformers.length - 1; !g && w > 0;)g = f.transformers[I].mProps._mdf || g, w -= 1, I -= 1;
                        if (g) for(w = v - f.styles[l].lvl, I = f.transformers.length - 1; w > 0;)C.multiply(f.transformers[I].mProps.v), w -= 1, I -= 1;
                    } else C = t;
                    if (M = f.sh.paths, k = M._length, g) {
                        for(S = "", x = 0; x < k; x += 1)p = M.shapes[x], p && p._length && (S += si(p, p._length, p.c, C));
                        f.caches[l] = S;
                    } else S = f.caches[l];
                    f.styles[l].d += P.hd === !0 ? "" : S, f.styles[l]._mdf = g || f.styles[l]._mdf;
                }
            }
            function m(P, f, A) {
                var x = f.style;
                (f.c._mdf || A) && x.pElem.setAttribute("fill", "rgb(" + Yt(f.c.v[0]) + "," + Yt(f.c.v[1]) + "," + Yt(f.c.v[2]) + ")"), (f.o._mdf || A) && x.pElem.setAttribute("fill-opacity", f.o.v);
            }
            function o(P, f, A) {
                b(P, f, A), _(P, f, A);
            }
            function b(P, f, A) {
                var x = f.gf, k = f.g._hasOpacity, S = f.s.v, g = f.e.v;
                if (f.o._mdf || A) {
                    var p = P.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                    f.style.pElem.setAttribute(p, f.o.v);
                }
                if (f.s._mdf || A) {
                    var l = P.t === 1 ? "x1" : "cx", u = l === "x1" ? "y1" : "cy";
                    x.setAttribute(l, S[0]), x.setAttribute(u, S[1]), k && !f.g._collapsable && (f.of.setAttribute(l, S[0]), f.of.setAttribute(u, S[1]));
                }
                var v, M, C, w;
                if (f.g._cmdf || A) {
                    v = f.cst;
                    var I = f.g.c;
                    for(C = v.length, M = 0; M < C; M += 1)w = v[M], w.setAttribute("offset", I[M * 4] + "%"), w.setAttribute("stop-color", "rgb(" + I[M * 4 + 1] + "," + I[M * 4 + 2] + "," + I[M * 4 + 3] + ")");
                }
                if (k && (f.g._omdf || A)) {
                    var N = f.g.o;
                    for(f.g._collapsable ? v = f.cst : v = f.ost, C = v.length, M = 0; M < C; M += 1)w = v[M], f.g._collapsable || w.setAttribute("offset", N[M * 2] + "%"), w.setAttribute("stop-opacity", N[M * 2 + 1]);
                }
                if (P.t === 1) (f.e._mdf || A) && (x.setAttribute("x2", g[0]), x.setAttribute("y2", g[1]), k && !f.g._collapsable && (f.of.setAttribute("x2", g[0]), f.of.setAttribute("y2", g[1])));
                else {
                    var O;
                    if ((f.s._mdf || f.e._mdf || A) && (O = Math.sqrt(Math.pow(S[0] - g[0], 2) + Math.pow(S[1] - g[1], 2)), x.setAttribute("r", O), k && !f.g._collapsable && f.of.setAttribute("r", O)), f.e._mdf || f.h._mdf || f.a._mdf || A) {
                        O || (O = Math.sqrt(Math.pow(S[0] - g[0], 2) + Math.pow(S[1] - g[1], 2)));
                        var V = Math.atan2(g[1] - S[1], g[0] - S[0]), j = f.h.v;
                        j >= 1 ? j = .99 : j <= -1 && (j = -0.99);
                        var E = O * j, F = Math.cos(V + f.a.v) * E + S[0], d = Math.sin(V + f.a.v) * E + S[1];
                        x.setAttribute("fx", F), x.setAttribute("fy", d), k && !f.g._collapsable && (f.of.setAttribute("fx", F), f.of.setAttribute("fy", d));
                    }
                }
            }
            function _(P, f, A) {
                var x = f.style, k = f.d;
                k && (k._mdf || A) && k.dashStr && (x.pElem.setAttribute("stroke-dasharray", k.dashStr), x.pElem.setAttribute("stroke-dashoffset", k.dashoffset[0])), f.c && (f.c._mdf || A) && x.pElem.setAttribute("stroke", "rgb(" + Yt(f.c.v[0]) + "," + Yt(f.c.v[1]) + "," + Yt(f.c.v[2]) + ")"), (f.o._mdf || A) && x.pElem.setAttribute("stroke-opacity", f.o.v), (f.w._mdf || A) && (x.pElem.setAttribute("stroke-width", f.w.v), x.msElem && x.msElem.setAttribute("stroke-width", f.w.v));
            }
            return s;
        }();
        function Q(t, e, s) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, s), this.prevViewData = [];
        }
        Y([
            Ot,
            ae,
            be,
            Us,
            re,
            Nt,
            _e
        ], Q), Q.prototype.initSecondaryElement = function() {}, Q.prototype.identityMatrix = new ot, Q.prototype.buildExpressionInterface = function() {}, Q.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
        }, Q.prototype.filterUniqueShapes = function() {
            var t, e = this.shapes.length, s, i, r = this.stylesList.length, a, h = [], m = !1;
            for(i = 0; i < r; i += 1){
                for(a = this.stylesList[i], m = !1, h.length = 0, t = 0; t < e; t += 1)s = this.shapes[t], s.styles.indexOf(a) !== -1 && (h.push(s), m = s._isAnimated || m);
                h.length > 1 && m && this.setShapesAsAnimated(h);
            }
        }, Q.prototype.setShapesAsAnimated = function(t) {
            var e, s = t.length;
            for(e = 0; e < s; e += 1)t[e].setAsAnimated();
        }, Q.prototype.createStyleElement = function(t, e) {
            var s, i = new Qs(t, e), r = i.pElem;
            if (t.ty === "st") s = new $s(this, t, i);
            else if (t.ty === "fl") s = new Ks(this, t, i);
            else if (t.ty === "gf" || t.ty === "gs") {
                var a = t.ty === "gf" ? ne : ei;
                s = new a(this, t, i), this.globalData.defs.appendChild(s.gf), s.maskId && (this.globalData.defs.appendChild(s.ms), this.globalData.defs.appendChild(s.of), r.setAttribute("mask", "url(" + ct() + "#" + s.maskId + ")"));
            } else t.ty === "no" && (s = new ti(this, t, i));
            return (t.ty === "st" || t.ty === "gs") && (r.setAttribute("stroke-linecap", Zs[t.lc || 2]), r.setAttribute("stroke-linejoin", Gs[t.lj || 2]), r.setAttribute("fill-opacity", "0"), t.lj === 1 && r.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && r.setAttribute("fill-rule", "evenodd"), t.ln && r.setAttribute("id", t.ln), t.cl && r.setAttribute("class", t.cl), t.bm && (r.style["mix-blend-mode"] = ts(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, s), s;
        }, Q.prototype.createGroupElement = function(t) {
            var e = new ra;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = ts(t.bm)), e;
        }, Q.prototype.createTransformElement = function(t, e) {
            var s = Ge.getTransformProperty(this, t, this), i = new na(s, s.o, e);
            return this.addToAnimatedContents(t, i), i;
        }, Q.prototype.createShapeElement = function(t, e, s) {
            var i = 4;
            t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
            var r = Ie.getShapeProp(this, t, i, this), a = new Hs(e, s, r);
            return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a;
        }, Q.prototype.addToAnimatedContents = function(t, e) {
            for(var s = 0, i = this.animatedContents.length; s < i;){
                if (this.animatedContents[s].element === e) return;
                s += 1;
            }
            this.animatedContents.push({
                fn: oa.createRenderFunction(t),
                element: e,
                data: t
            });
        }, Q.prototype.setElementStyles = function(t) {
            var e = t.styles, s, i = this.stylesList.length;
            for(s = 0; s < i; s += 1)this.stylesList[s].closed || e.push(this.stylesList[s]);
        }, Q.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for(t = 0; t < e; t += 1)this.prevViewData[t] = this.itemsData[t];
            for(this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)this.dynamicProperties[t].getValue();
            this.renderModifiers();
        }, Q.prototype.searchShapes = function(t, e, s, i, r, a, h) {
            var m = [].concat(a), o, b = t.length - 1, _, P, f = [], A = [], x, k, S;
            for(o = b; o >= 0; o -= 1){
                if (S = this.searchProcessedElement(t[o]), S ? e[o] = s[S - 1] : t[o]._render = h, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") S ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), f.push(e[o].style);
                else if (t[o].ty === "gr") {
                    if (!S) e[o] = this.createGroupElement(t[o]);
                    else for(P = e[o].it.length, _ = 0; _ < P; _ += 1)e[o].prevViewData[_] = e[o].it[_];
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, m, h), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
                } else t[o].ty === "tr" ? (S || (e[o] = this.createTransformElement(t[o], i)), x = e[o].transform, m.push(x)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (S || (e[o] = this.createShapeElement(t[o], m, r)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (S ? (k = e[o], k.closed = !1) : (k = zt.getModifier(t[o].ty), k.init(this, t[o]), e[o] = k, this.shapeModifiers.push(k)), A.push(k)) : t[o].ty === "rp" && (S ? (k = e[o], k.closed = !0) : (k = zt.getModifier(t[o].ty), e[o] = k, k.init(this, t, o, e), this.shapeModifiers.push(k), h = !1), A.push(k));
                this.addProcessedElement(t[o], o + 1);
            }
            for(b = f.length, o = 0; o < b; o += 1)f[o].closed = !0;
            for(b = A.length, o = 0; o < b; o += 1)A[o].closed = !0;
        }, Q.prototype.renderInnerContent = function() {
            this.renderModifiers();
            var t, e = this.stylesList.length;
            for(t = 0; t < e; t += 1)this.stylesList[t].reset();
            for(this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
        }, Q.prototype.renderShape = function() {
            var t, e = this.animatedContents.length, s;
            for(t = 0; t < e; t += 1)s = this.animatedContents[t], (this._isFirstFrame || s.element._isAnimated) && s.data !== !0 && s.fn(s.data, s.element, this._isFirstFrame);
        }, Q.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
        };
        function is(t, e, s, i, r, a) {
            this.o = t, this.sw = e, this.sc = s, this.fc = i, this.m = r, this.p = a, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!s,
                fc: !!i,
                m: !0,
                p: !0
            };
        }
        is.prototype.update = function(t, e, s, i, r, a) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var h = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, h = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, h = !0), this.sc !== s && (this.sc = s, this._mdf.sc = !0, h = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, h = !0), this.m !== r && (this.m = r, this._mdf.m = !0, h = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, h = !0), h;
        };
        function lt(t, e) {
            this._frameId = Xe, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
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
        lt.prototype.defaultBoxWidth = [
            0,
            0
        ], lt.prototype.copyData = function(t, e) {
            for(var s in e)Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            return t;
        }, lt.prototype.setCurrentData = function(t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
        }, lt.prototype.searchProperty = function() {
            return this.searchKeyframes();
        }, lt.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
        }, lt.prototype.addEffect = function(t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
        }, lt.prototype.getValue = function(t) {
            if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData, s = this.keysIndex;
                if (this.lock) {
                    this.setCurrentData(this.currentData);
                    return;
                }
                this.lock = !0, this._mdf = !1;
                var i, r = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
                for(i = 0; i < r; i += 1)s !== this.keysIndex ? a = this.effectsSequence[i](a, a.t) : a = this.effectsSequence[i](this.currentData, a.t);
                e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
        }, lt.prototype.getKeyframeValue = function() {
            for(var t = this.data.d.k, e = this.elem.comp.renderedFrame, s = 0, i = t.length; s <= i - 1 && !(s === i - 1 || t[s + 1].t > e);)s += 1;
            return this.keysIndex !== s && (this.keysIndex = s), this.data.d.k[this.keysIndex].s;
        }, lt.prototype.buildFinalText = function(t) {
            for(var e = [], s = 0, i = t.length, r, a, h = !1, m = !1, o = ""; s < i;)h = m, m = !1, r = t.charCodeAt(s), o = t.charAt(s), Gt.isCombinedCharacter(r) ? h = !0 : r >= 55296 && r <= 56319 ? Gt.isRegionalFlag(t, s) ? o = t.substr(s, 14) : (a = t.charCodeAt(s + 1), a >= 56320 && a <= 57343 && (Gt.isModifier(r, a) ? (o = t.substr(s, 2), h = !0) : Gt.isFlagEmoji(t.substr(s, 4)) ? o = t.substr(s, 4) : o = t.substr(s, 2))) : r > 56319 ? (a = t.charCodeAt(s + 1), Gt.isVariationSelector(r) && (h = !0)) : Gt.isZeroWidthJoiner(r) && (h = !0, m = !0), h ? (e[e.length - 1] += o, h = !1) : e.push(o), s += o.length;
            return e;
        }, lt.prototype.completeTextData = function(t) {
            t.__complete = !0;
            var e = this.elem.globalData.fontManager, s = this.data, i = [], r, a, h, m = 0, o, b = s.m.g, _ = 0, P = 0, f = 0, A = [], x = 0, k = 0, S, g, p = e.getFontByName(t.f), l, u = 0, v = qs(p);
            t.fWeight = v.weight, t.fStyle = v.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), a = t.finalText.length, t.finalLineHeight = t.lh;
            var M = t.tr / 1e3 * t.finalSize, C;
            if (t.sz) for(var w = !0, I = t.sz[0], N = t.sz[1], O, V; w;){
                V = this.buildFinalText(t.t), O = 0, x = 0, a = V.length, M = t.tr / 1e3 * t.finalSize;
                var j = -1;
                for(r = 0; r < a; r += 1)C = V[r].charCodeAt(0), h = !1, V[r] === " " ? j = r : (C === 13 || C === 3) && (x = 0, h = !0, O += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (l = e.getCharData(V[r], p.fStyle, p.fFamily), u = h ? 0 : l.w * t.finalSize / 100) : u = e.measureText(V[r], t.f, t.finalSize), x + u > I && V[r] !== " " ? (j === -1 ? a += 1 : r = j, O += t.finalLineHeight || t.finalSize * 1.2, V.splice(r, j === r ? 1 : 0, "\r"), j = -1, x = 0) : (x += u, x += M);
                O += p.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && N < O ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = V, a = t.finalText.length, w = !1);
            }
            x = -M, u = 0;
            var E = 0, F;
            for(r = 0; r < a; r += 1)if (h = !1, F = t.finalText[r], C = F.charCodeAt(0), C === 13 || C === 3 ? (E = 0, A.push(x), k = x > k ? x : k, x = -2 * M, o = "", h = !0, f += 1) : o = F, e.chars ? (l = e.getCharData(F, p.fStyle, e.getFontByName(t.f).fFamily), u = h ? 0 : l.w * t.finalSize / 100) : u = e.measureText(o, t.f, t.finalSize), F === " " ? E += u + M : (x += u + M + E, E = 0), i.push({
                l: u,
                an: u,
                add: _,
                n: h,
                anIndexes: [],
                val: o,
                line: f,
                animatorJustifyOffset: 0
            }), b == 2) {
                if (_ += u, o === "" || o === " " || r === a - 1) {
                    for((o === "" || o === " ") && (_ -= u); P <= r;)i[P].an = _, i[P].ind = m, i[P].extra = u, P += 1;
                    m += 1, _ = 0;
                }
            } else if (b == 3) {
                if (_ += u, o === "" || r === a - 1) {
                    for(o === "" && (_ -= u); P <= r;)i[P].an = _, i[P].ind = m, i[P].extra = u, P += 1;
                    _ = 0, m += 1;
                }
            } else i[m].ind = m, i[m].extra = 0, m += 1;
            if (t.l = i, k = x > k ? x : k, A.push(x), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch(t.boxWidth = k, t.j){
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0;
            }
            t.lineWidths = A;
            var d = s.a, y, n;
            g = d.length;
            var c, T, D = [];
            for(S = 0; S < g; S += 1){
                for(y = d[S], y.a.sc && (t.strokeColorAnim = !0), y.a.sw && (t.strokeWidthAnim = !0), (y.a.fc || y.a.fh || y.a.fs || y.a.fb) && (t.fillColorAnim = !0), T = 0, c = y.s.b, r = 0; r < a; r += 1)n = i[r], n.anIndexes[S] = T, (c == 1 && n.val !== "" || c == 2 && n.val !== "" && n.val !== " " || c == 3 && (n.n || n.val == " " || r == a - 1) || c == 4 && (n.n || r == a - 1)) && (y.s.rn === 1 && D.push(T), T += 1);
                s.a[S].s.totalChars = T;
                var W = -1, z;
                if (y.s.rn === 1) for(r = 0; r < a; r += 1)n = i[r], W != n.anIndexes[S] && (W = n.anIndexes[S], z = D.splice(Math.floor(Math.random() * D.length), 1)[0]), n.anIndexes[S] = z;
            }
            t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = p.ascent * t.finalSize / 100;
        }, lt.prototype.updateDocumentData = function(t, e) {
            e = e === void 0 ? this.keysIndex : e;
            var s = this.copyData({}, this.data.d.k[e].s);
            s = this.copyData(s, t), this.data.d.k[e].s = s, this.recalculate(e), this.setCurrentData(s), this.elem.addDynamicProperty(this);
        }, lt.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
        }, lt.prototype.canResizeFont = function(t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        }, lt.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        };
        var ha = function() {
            var t = Math.max, e = Math.min, s = Math.floor;
            function i(a, h) {
                this._currentTextLength = -1, this.k = !1, this.data = h, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = L.getProp(a, h.s || {
                    k: 0
                }, 0, 0, this), "e" in h ? this.e = L.getProp(a, h.e, 0, 0, this) : this.e = {
                    v: 100
                }, this.o = L.getProp(a, h.o || {
                    k: 0
                }, 0, 0, this), this.xe = L.getProp(a, h.xe || {
                    k: 0
                }, 0, 0, this), this.ne = L.getProp(a, h.ne || {
                    k: 0
                }, 0, 0, this), this.sm = L.getProp(a, h.sm || {
                    k: 100
                }, 0, 0, this), this.a = L.getProp(a, h.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
            }
            i.prototype = {
                getMult: function(a) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var h = 0, m = 0, o = 1, b = 1;
                    this.ne.v > 0 ? h = this.ne.v / 100 : m = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : b = 1 + this.xe.v / 100;
                    var _ = fe.getBezierEasing(h, m, o, b).get, P = 0, f = this.finalS, A = this.finalE, x = this.data.sh;
                    if (x === 2) A === f ? P = a >= A ? 1 : 0 : P = t(0, e(.5 / (A - f) + (a - f) / (A - f), 1)), P = _(P);
                    else if (x === 3) A === f ? P = a >= A ? 0 : 1 : P = 1 - t(0, e(.5 / (A - f) + (a - f) / (A - f), 1)), P = _(P);
                    else if (x === 4) A === f ? P = 0 : (P = t(0, e(.5 / (A - f) + (a - f) / (A - f), 1)), P < .5 ? P *= 2 : P = 1 - 2 * (P - .5)), P = _(P);
                    else if (x === 5) {
                        if (A === f) P = 0;
                        else {
                            var k = A - f;
                            a = e(t(0, a + .5 - f), A - f);
                            var S = -k / 2 + a, g = k / 2;
                            P = Math.sqrt(1 - S * S / (g * g));
                        }
                        P = _(P);
                    } else x === 6 ? (A === f ? P = 0 : (a = e(t(0, a + .5 - f), A - f), P = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (A - f))) / 2), P = _(P)) : (a >= s(f) && (a - f < 0 ? P = t(0, e(e(A, 1) - (f - a), 1)) : P = t(0, e(A - a, 1))), P = _(P));
                    if (this.sm.v !== 100) {
                        var p = this.sm.v * .01;
                        p === 0 && (p = 1e-8);
                        var l = .5 - p * .5;
                        P < l ? P = 0 : (P = (P - l) / p, P > 1 && (P = 1));
                    }
                    return P * this.a.v;
                },
                getValue: function(a) {
                    this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var h = this.data.r === 2 ? 1 : 100 / this.data.totalChars, m = this.o.v / h, o = this.s.v / h + m, b = this.e.v / h + m;
                    if (o > b) {
                        var _ = o;
                        o = b, b = _;
                    }
                    this.finalS = o, this.finalE = b;
                }
            }, Y([
                at
            ], i);
            function r(a, h, m) {
                return new i(a, h);
            }
            return {
                getTextSelectorProp: r
            };
        }();
        function la(t, e, s) {
            var i = {
                propType: !1
            }, r = L.getProp, a = e.a;
            this.a = {
                r: a.r ? r(t, a.r, 0, H, s) : i,
                rx: a.rx ? r(t, a.rx, 0, H, s) : i,
                ry: a.ry ? r(t, a.ry, 0, H, s) : i,
                sk: a.sk ? r(t, a.sk, 0, H, s) : i,
                sa: a.sa ? r(t, a.sa, 0, H, s) : i,
                s: a.s ? r(t, a.s, 1, .01, s) : i,
                a: a.a ? r(t, a.a, 1, 0, s) : i,
                o: a.o ? r(t, a.o, 0, .01, s) : i,
                p: a.p ? r(t, a.p, 1, 0, s) : i,
                sw: a.sw ? r(t, a.sw, 0, 0, s) : i,
                sc: a.sc ? r(t, a.sc, 1, 0, s) : i,
                fc: a.fc ? r(t, a.fc, 1, 0, s) : i,
                fh: a.fh ? r(t, a.fh, 0, 0, s) : i,
                fs: a.fs ? r(t, a.fs, 0, .01, s) : i,
                fb: a.fb ? r(t, a.fb, 0, .01, s) : i,
                t: a.t ? r(t, a.t, 0, 0, s) : i
            }, this.s = ha.getTextSelectorProp(t, e.s, s), this.s.t = e.s.t;
        }
        function Qt(t, e, s) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = s, this._animatorsData = tt(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                alignment: {}
            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(s);
        }
        Qt.prototype.searchProperties = function() {
            var t, e = this._textData.a.length, s, i = L.getProp;
            for(t = 0; t < e; t += 1)s = this._textData.a[t], this._animatorsData[t] = new la(this._elem, s, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
        }, Qt.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var s = this._moreOptions.alignment.v, i = this._animatorsData, r = this._textData, a = this.mHelper, h = this._renderType, m = this.renderedLetters.length, o, b, _, P, f = t.l, A, x, k, S, g, p, l, u, v, M, C, w, I, N, O;
                if (this._hasMaskedPath) {
                    if (O = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var V = O.v;
                        this._pathData.r.v && (V = V.reverse()), A = {
                            tLength: 0,
                            segments: []
                        }, P = V._length - 1;
                        var j;
                        for(w = 0, _ = 0; _ < P; _ += 1)j = Pt.buildBezierData(V.v[_], V.v[_ + 1], [
                            V.o[_][0] - V.v[_][0],
                            V.o[_][1] - V.v[_][1]
                        ], [
                            V.i[_ + 1][0] - V.v[_ + 1][0],
                            V.i[_ + 1][1] - V.v[_ + 1][1]
                        ]), A.tLength += j.segmentLength, A.segments.push(j), w += j.segmentLength;
                        _ = P, O.v.c && (j = Pt.buildBezierData(V.v[_], V.v[0], [
                            V.o[_][0] - V.v[_][0],
                            V.o[_][1] - V.v[_][1]
                        ], [
                            V.i[0][0] - V.v[0][0],
                            V.i[0][1] - V.v[0][1]
                        ]), A.tLength += j.segmentLength, A.segments.push(j), w += j.segmentLength), this._pathData.pi = A;
                    }
                    if (A = this._pathData.pi, x = this._pathData.f.v, l = 0, p = 1, S = 0, g = !0, M = A.segments, x < 0 && O.v.c) for(A.tLength < Math.abs(x) && (x = -Math.abs(x) % A.tLength), l = M.length - 1, v = M[l].points, p = v.length - 1; x < 0;)x += v[p].partialLength, p -= 1, p < 0 && (l -= 1, v = M[l].points, p = v.length - 1);
                    v = M[l].points, u = v[p - 1], k = v[p], C = k.partialLength;
                }
                P = f.length, o = 0, b = 0;
                var E = t.finalSize * 1.2 * .714, F = !0, d, y, n, c, T;
                c = i.length;
                var D, W = -1, z, J, X, $ = x, K = l, ut = p, Dt = -1, mt, rt, gt, Z, R, wt, qt, Et, St = "", Ft = this.defaultPropsArray, It;
                if (t.j === 2 || t.j === 1) {
                    var dt = 0, Wt = 0, Xt = t.j === 2 ? -0.5 : -1, _t = 0, Jt = !0;
                    for(_ = 0; _ < P; _ += 1)if (f[_].n) {
                        for(dt && (dt += Wt); _t < _;)f[_t].animatorJustifyOffset = dt, _t += 1;
                        dt = 0, Jt = !0;
                    } else {
                        for(n = 0; n < c; n += 1)d = i[n].a, d.t.propType && (Jt && t.j === 2 && (Wt += d.t.v * Xt), y = i[n].s, D = y.getMult(f[_].anIndexes[n], r.a[n].s.totalChars), D.length ? dt += d.t.v * D[0] * Xt : dt += d.t.v * D * Xt);
                        Jt = !1;
                    }
                    for(dt && (dt += Wt); _t < _;)f[_t].animatorJustifyOffset = dt, _t += 1;
                }
                for(_ = 0; _ < P; _ += 1){
                    if (a.reset(), mt = 1, f[_].n) o = 0, b += t.yOffset, b += F ? 1 : 0, x = $, F = !1, this._hasMaskedPath && (l = K, p = ut, v = M[l].points, u = v[p - 1], k = v[p], C = k.partialLength, S = 0), St = "", Et = "", wt = "", It = "", Ft = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Dt !== f[_].line) {
                                switch(t.j){
                                    case 1:
                                        x += w - t.lineWidths[f[_].line];
                                        break;
                                    case 2:
                                        x += (w - t.lineWidths[f[_].line]) / 2;
                                        break;
                                }
                                Dt = f[_].line;
                            }
                            W !== f[_].ind && (f[W] && (x += f[W].extra), x += f[_].an / 2, W = f[_].ind), x += s[0] * f[_].an * .005;
                            var kt = 0;
                            for(n = 0; n < c; n += 1)d = i[n].a, d.p.propType && (y = i[n].s, D = y.getMult(f[_].anIndexes[n], r.a[n].s.totalChars), D.length ? kt += d.p.v[0] * D[0] : kt += d.p.v[0] * D), d.a.propType && (y = i[n].s, D = y.getMult(f[_].anIndexes[n], r.a[n].s.totalChars), D.length ? kt += d.a.v[0] * D[0] : kt += d.a.v[0] * D);
                            for(g = !0, this._pathData.a.v && (x = f[0].an * .5 + (w - this._pathData.f.v - f[0].an * .5 - f[f.length - 1].an * .5) * W / (P - 1), x += this._pathData.f.v); g;)S + C >= x + kt || !v ? (I = (x + kt - S) / k.partialLength, J = u.point[0] + (k.point[0] - u.point[0]) * I, X = u.point[1] + (k.point[1] - u.point[1]) * I, a.translate(-s[0] * f[_].an * .005, -(s[1] * E) * .01), g = !1) : v && (S += k.partialLength, p += 1, p >= v.length && (p = 0, l += 1, M[l] ? v = M[l].points : O.v.c ? (p = 0, l = 0, v = M[l].points) : (S -= k.partialLength, v = null)), v && (u = k, k = v[p], C = k.partialLength));
                            z = f[_].an / 2 - f[_].add, a.translate(-z, 0, 0);
                        } else z = f[_].an / 2 - f[_].add, a.translate(-z, 0, 0), a.translate(-s[0] * f[_].an * .005, -s[1] * E * .01, 0);
                        for(n = 0; n < c; n += 1)d = i[n].a, d.t.propType && (y = i[n].s, D = y.getMult(f[_].anIndexes[n], r.a[n].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? D.length ? x += d.t.v * D[0] : x += d.t.v * D : D.length ? o += d.t.v * D[0] : o += d.t.v * D));
                        for(t.strokeWidthAnim && (gt = t.sw || 0), t.strokeColorAnim && (t.sc ? rt = [
                            t.sc[0],
                            t.sc[1],
                            t.sc[2]
                        ] : rt = [
                            0,
                            0,
                            0
                        ]), t.fillColorAnim && t.fc && (Z = [
                            t.fc[0],
                            t.fc[1],
                            t.fc[2]
                        ]), n = 0; n < c; n += 1)d = i[n].a, d.a.propType && (y = i[n].s, D = y.getMult(f[_].anIndexes[n], r.a[n].s.totalChars), D.length ? a.translate(-d.a.v[0] * D[0], -d.a.v[1] * D[1], d.a.v[2] * D[2]) : a.translate(-d.a.v[0] * D, -d.a.v[1] * D, d.a.v[2] * D));
                        for(n = 0; n < c; n += 1)d = i[n].a, d.s.propType && (y = i[n].s, D = y.getMult(f[_].anIndexes[n], r.a[n].s.totalChars), D.length ? a.scale(1 + (d.s.v[0] - 1) * D[0], 1 + (d.s.v[1] - 1) * D[1], 1) : a.scale(1 + (d.s.v[0] - 1) * D, 1 + (d.s.v[1] - 1) * D, 1));
                        for(n = 0; n < c; n += 1){
                            if (d = i[n].a, y = i[n].s, D = y.getMult(f[_].anIndexes[n], r.a[n].s.totalChars), d.sk.propType && (D.length ? a.skewFromAxis(-d.sk.v * D[0], d.sa.v * D[1]) : a.skewFromAxis(-d.sk.v * D, d.sa.v * D)), d.r.propType && (D.length ? a.rotateZ(-d.r.v * D[2]) : a.rotateZ(-d.r.v * D)), d.ry.propType && (D.length ? a.rotateY(d.ry.v * D[1]) : a.rotateY(d.ry.v * D)), d.rx.propType && (D.length ? a.rotateX(d.rx.v * D[0]) : a.rotateX(d.rx.v * D)), d.o.propType && (D.length ? mt += (d.o.v * D[0] - mt) * D[0] : mt += (d.o.v * D - mt) * D), t.strokeWidthAnim && d.sw.propType && (D.length ? gt += d.sw.v * D[0] : gt += d.sw.v * D), t.strokeColorAnim && d.sc.propType) for(R = 0; R < 3; R += 1)D.length ? rt[R] += (d.sc.v[R] - rt[R]) * D[0] : rt[R] += (d.sc.v[R] - rt[R]) * D;
                            if (t.fillColorAnim && t.fc) {
                                if (d.fc.propType) for(R = 0; R < 3; R += 1)D.length ? Z[R] += (d.fc.v[R] - Z[R]) * D[0] : Z[R] += (d.fc.v[R] - Z[R]) * D;
                                d.fh.propType && (D.length ? Z = vs(Z, d.fh.v * D[0]) : Z = vs(Z, d.fh.v * D)), d.fs.propType && (D.length ? Z = gs(Z, d.fs.v * D[0]) : Z = gs(Z, d.fs.v * D)), d.fb.propType && (D.length ? Z = ys(Z, d.fb.v * D[0]) : Z = ys(Z, d.fb.v * D));
                            }
                        }
                        for(n = 0; n < c; n += 1)d = i[n].a, d.p.propType && (y = i[n].s, D = y.getMult(f[_].anIndexes[n], r.a[n].s.totalChars), this._hasMaskedPath ? D.length ? a.translate(0, d.p.v[1] * D[0], -d.p.v[2] * D[1]) : a.translate(0, d.p.v[1] * D, -d.p.v[2] * D) : D.length ? a.translate(d.p.v[0] * D[0], d.p.v[1] * D[1], -d.p.v[2] * D[2]) : a.translate(d.p.v[0] * D, d.p.v[1] * D, -d.p.v[2] * D));
                        if (t.strokeWidthAnim && (wt = gt < 0 ? 0 : gt), t.strokeColorAnim && (qt = "rgb(" + Math.round(rt[0] * 255) + "," + Math.round(rt[1] * 255) + "," + Math.round(rt[2] * 255) + ")"), t.fillColorAnim && t.fc && (Et = "rgb(" + Math.round(Z[0] * 255) + "," + Math.round(Z[1] * 255) + "," + Math.round(Z[2] * 255) + ")"), this._hasMaskedPath) {
                            if (a.translate(0, -t.ls), a.translate(0, s[1] * E * .01 + b, 0), this._pathData.p.v) {
                                N = (k.point[1] - u.point[1]) / (k.point[0] - u.point[0]);
                                var $t = Math.atan(N) * 180 / Math.PI;
                                k.point[0] < u.point[0] && ($t += 180), a.rotate(-$t * Math.PI / 180);
                            }
                            a.translate(J, X, 0), x -= s[0] * f[_].an * .005, f[_ + 1] && W !== f[_ + 1].ind && (x += f[_].an / 2, x += t.tr * .001 * t.finalSize);
                        } else {
                            switch(a.translate(o, b, 0), t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j){
                                case 1:
                                    a.translate(f[_].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[_].line]), 0, 0);
                                    break;
                                case 2:
                                    a.translate(f[_].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[_].line]) / 2, 0, 0);
                                    break;
                            }
                            a.translate(0, -t.ls), a.translate(z, 0, 0), a.translate(s[0] * f[_].an * .005, s[1] * E * .01, 0), o += f[_].l + t.tr * .001 * t.finalSize;
                        }
                        h === "html" ? St = a.toCSS() : h === "svg" ? St = a.to2dCSS() : Ft = [
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
                        ], It = mt;
                    }
                    m <= _ ? (T = new is(It, wt, qt, Et, St, Ft), this.renderedLetters.push(T), m += 1, this.lettersChangedFlag = !0) : (T = this.renderedLetters[_], this.lettersChangedFlag = T.update(It, wt, qt, Et, St, Ft) || this.lettersChangedFlag);
                }
            }
        }, Qt.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
        }, Qt.prototype.mHelper = new ot, Qt.prototype.defaultPropsArray = [], Y([
            at
        ], Qt);
        function vt() {}
        vt.prototype.initElement = function(t, e, s) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, s), this.textProperty = new lt(this, t.t, this.dynamicProperties), this.textAnimator = new Qt(t.t, this.renderType, this), this.initTransform(t, e, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
        }, vt.prototype.prepareFrame = function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
        }, vt.prototype.createPathShape = function(t, e) {
            var s, i = e.length, r, a = "";
            for(s = 0; s < i; s += 1)e[s].ty === "sh" && (r = e[s].ks.k, a += si(r, r.i.length, !0, t));
            return a;
        }, vt.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e);
        }, vt.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t);
        }, vt.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t);
        }, vt.prototype.applyTextPropertiesToMatrix = function(t, e, s, i, r) {
            switch(t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j){
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]) / 2, 0, 0);
                    break;
            }
            e.translate(i, r, 0);
        }, vt.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
        }, vt.prototype.emptyProp = new is, vt.prototype.destroy = function() {}, vt.prototype.validateText = function() {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
        };
        var pa = {
            shapes: []
        };
        function Tt(t, e, s) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, s);
        }
        Y([
            Ot,
            ae,
            be,
            re,
            Nt,
            _e,
            vt
        ], Tt), Tt.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = q("text"));
        }, Tt.prototype.buildTextContents = function(t) {
            for(var e = 0, s = t.length, i = [], r = ""; e < s;)t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(r), r = "") : r += t[e], e += 1;
            return i.push(r), i;
        }, Tt.prototype.buildShapeData = function(t, e) {
            if (t.shapes && t.shapes.length) {
                var s = t.shapes[0];
                if (s.it) {
                    var i = s.it[s.it.length - 1];
                    i.s && (i.s.k[0] = e, i.s.k[1] = e);
                }
            }
            return t;
        }, Tt.prototype.buildNewText = function() {
            this.addDynamicProperty(this);
            var t, e, s = this.textProperty.currentData;
            this.renderedLetters = tt(s ? s.l.length : 0), s.fc ? this.layerElement.setAttribute("fill", this.buildColor(s.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), s.sc && (this.layerElement.setAttribute("stroke", this.buildColor(s.sc)), this.layerElement.setAttribute("stroke-width", s.sw)), this.layerElement.setAttribute("font-size", s.finalSize);
            var i = this.globalData.fontManager.getFontByName(s.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
            else {
                this.layerElement.setAttribute("font-family", i.fFamily);
                var r = s.fWeight, a = s.fStyle;
                this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", r);
            }
            this.layerElement.setAttribute("aria-label", s.t);
            var h = s.l || [], m = !!this.globalData.fontManager.chars;
            e = h.length;
            var o, b = this.mHelper, _ = "", P = this.data.singleShape, f = 0, A = 0, x = !0, k = s.tr * .001 * s.finalSize;
            if (P && !m && !s.sz) {
                var S = this.textContainer, g = "start";
                switch(s.j){
                    case 1:
                        g = "end";
                        break;
                    case 2:
                        g = "middle";
                        break;
                    default:
                        g = "start";
                        break;
                }
                S.setAttribute("text-anchor", g), S.setAttribute("letter-spacing", k);
                var p = this.buildTextContents(s.finalText);
                for(e = p.length, A = s.ps ? s.ps[1] + s.ascent : 0, t = 0; t < e; t += 1)o = this.textSpans[t].span || q("tspan"), o.textContent = p[t], o.setAttribute("x", 0), o.setAttribute("y", A), o.style.display = "inherit", S.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t].span = o, A += s.finalLineHeight;
                this.layerElement.appendChild(S);
            } else {
                var l = this.textSpans.length, u;
                for(t = 0; t < e; t += 1){
                    if (this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }), !m || !P || t === 0) {
                        if (o = l > t ? this.textSpans[t].span : q(m ? "g" : "text"), l <= t) {
                            if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, m) {
                                var v = q("g");
                                o.appendChild(v), this.textSpans[t].childSpan = v;
                            }
                            this.textSpans[t].span = o, this.layerElement.appendChild(o);
                        }
                        o.style.display = "inherit";
                    }
                    if (b.reset(), P && (h[t].n && (f = -k, A += s.yOffset, A += x ? 1 : 0, x = !1), this.applyTextPropertiesToMatrix(s, b, h[t].line, f, A), f += h[t].l || 0, f += k), m) {
                        u = this.globalData.fontManager.getCharData(s.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(s.f).fFamily);
                        var M;
                        if (u.t === 1) M = new Pe(u.data, this.globalData, this);
                        else {
                            var C = pa;
                            u.data && u.data.shapes && (C = this.buildShapeData(u.data, s.finalSize)), M = new Q(C, this.globalData, this);
                        }
                        if (this.textSpans[t].glyph) {
                            var w = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(w.layerElement), w.destroy();
                        }
                        this.textSpans[t].glyph = M, M._debug = !0, M.prepareFrame(0), M.renderFrame(), this.textSpans[t].childSpan.appendChild(M.layerElement), u.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + s.finalSize / 100 + "," + s.finalSize / 100 + ")");
                    } else P && o.setAttribute("transform", "translate(" + b.props[12] + "," + b.props[13] + ")"), o.textContent = h[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                }
                P && o && o.setAttribute("d", _);
            }
            for(; t < this.textSpans.length;)this.textSpans[t].span.style.display = "none", t += 1;
            this._sizeChanged = !0;
        }, Tt.prototype.sourceRectAtTime = function() {
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
        }, Tt.prototype.getValue = function() {
            var t, e = this.textSpans.length, s;
            for(this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1)s = this.textSpans[t].glyph, s && (s.prepareFrame(this.comp.renderedFrame - this.data.st), s._mdf && (this._mdf = !0));
        }, Tt.prototype.renderInnerContent = function() {
            if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var t, e, s = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l;
                e = i.length;
                var r, a, h;
                for(t = 0; t < e; t += 1)i[t].n || (r = s[t], a = this.textSpans[t].span, h = this.textSpans[t].glyph, h && h.renderFrame(), r._mdf.m && a.setAttribute("transform", r.m), r._mdf.o && a.setAttribute("opacity", r.o), r._mdf.sw && a.setAttribute("stroke-width", r.sw), r._mdf.sc && a.setAttribute("stroke", r.sc), r._mdf.fc && a.setAttribute("fill", r.fc));
            }
        };
        function as(t, e, s) {
            this.initElement(t, e, s);
        }
        Y([
            ke
        ], as), as.prototype.createContent = function() {
            var t = q("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
        };
        function Bt(t, e, s) {
            this.initFrame(), this.initBaseData(t, e, s), this.initFrame(), this.initTransform(t, e, s), this.initHierarchy();
        }
        Bt.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, !0);
        }, Bt.prototype.renderFrame = function() {}, Bt.prototype.getBaseElement = function() {
            return null;
        }, Bt.prototype.destroy = function() {}, Bt.prototype.sourceRectAtTime = function() {}, Bt.prototype.hide = function() {}, Y([
            Ot,
            ae,
            re,
            Nt
        ], Bt);
        function st() {}
        Y([
            ht
        ], st), st.prototype.createNull = function(t) {
            return new Bt(t, this.globalData, this);
        }, st.prototype.createShape = function(t) {
            return new Q(t, this.globalData, this);
        }, st.prototype.createText = function(t) {
            return new Tt(t, this.globalData, this);
        }, st.prototype.createImage = function(t) {
            return new ke(t, this.globalData, this);
        }, st.prototype.createSolid = function(t) {
            return new as(t, this.globalData, this);
        }, st.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var s = q("clipPath"), i = q("rect");
            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
            var r = pt();
            s.setAttribute("id", r), s.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + ct() + "#" + r + ")"), e.appendChild(s), this.layers = t.layers, this.elements = tt(t.layers.length);
        }, st.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
        }, st.prototype.updateContainerSize = function() {}, st.prototype.findIndexByInd = function(t) {
            var e = 0, s = this.layers.length;
            for(e = 0; e < s; e += 1)if (this.layers[e].ind === t) return e;
            return -1;
        }, st.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                e[t] = !0;
                var s = this.createItem(this.layers[t]);
                if (e[t] = s, De() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(s), s.initExpressions()), this.appendElementInPos(s, t), this.layers[t].tt) {
                    var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                    if (i === -1) return;
                    if (!this.elements[i] || this.elements[i] === !0) this.buildItem(i), this.addPendingElement(s);
                    else {
                        var r = e[i], a = r.getMatte(this.layers[t].tt);
                        s.setMatte(a);
                    }
                }
            }
        }, st.prototype.checkPendingElements = function() {
            for(; this.pendingElements.length;){
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt) for(var e = 0, s = this.elements.length; e < s;){
                    if (this.elements[e] === t) {
                        var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, r = this.elements[i], a = r.getMatte(this.layers[e].tt);
                        t.setMatte(a);
                        break;
                    }
                    e += 1;
                }
            }
        }, st.prototype.renderFrame = function(t) {
            if (!(this.renderedFrame === t || this.destroyed)) {
                t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var e, s = this.layers.length;
                for(this.completeLayers || this.checkLayers(t), e = s - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf) for(e = 0; e < s; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }
        }, st.prototype.appendElementInPos = function(t, e) {
            var s = t.getBaseElement();
            if (s) {
                for(var i = 0, r; i < e;)this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (r = this.elements[i].getBaseElement()), i += 1;
                r ? this.layerElement.insertBefore(s, r) : this.layerElement.appendChild(s);
            }
        }, st.prototype.hide = function() {
            this.layerElement.style.display = "none";
        }, st.prototype.show = function() {
            this.layerElement.style.display = "block";
        };
        function Ct() {}
        Y([
            Ot,
            ae,
            re,
            Nt,
            _e
        ], Ct), Ct.prototype.initElement = function(t, e, s) {
            this.initFrame(), this.initBaseData(t, e, s), this.initTransform(t, e, s), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
        }, Ct.prototype.prepareFrame = function(t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
                }
                var s, i = this.elements.length;
                for(this.completeLayers || this.checkLayers(this.renderedFrame), s = i - 1; s >= 0; s -= 1)(this.completeLayers || this.elements[s]) && (this.elements[s].prepareFrame(this.renderedFrame - this.layers[s].st), this.elements[s]._mdf && (this._mdf = !0));
            }
        }, Ct.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
        }, Ct.prototype.setElements = function(t) {
            this.elements = t;
        }, Ct.prototype.getElements = function() {
            return this.elements;
        }, Ct.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for(t = 0; t < e; t += 1)this.elements[t] && this.elements[t].destroy();
        }, Ct.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement();
        };
        function Pe(t, e, s) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? tt(this.layers.length) : [], this.initElement(t, e, s), this.tm = t.tm ? L.getProp(this, t.tm, 0, e.frameRate, this) : {
                _placeholder: !0
            };
        }
        Y([
            st,
            Ct,
            be
        ], Pe), Pe.prototype.createComp = function(t) {
            return new Pe(t, this.globalData, this);
        };
        function rs(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = q("svg");
            var s = "";
            if (e && e.title) {
                var i = q("title"), r = pt();
                i.setAttribute("id", r), i.textContent = e.title, this.svgElement.appendChild(i), s += r;
            }
            if (e && e.description) {
                var a = q("desc"), h = pt();
                a.setAttribute("id", h), a.textContent = e.description, this.svgElement.appendChild(a), s += " " + h;
            }
            s && this.svgElement.setAttribute("aria-labelledby", s);
            var m = q("defs");
            this.svgElement.appendChild(m);
            var o = q("g");
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
                defs: m,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
        }
        return Y([
            st
        ], rs), rs.prototype.createComp = function(t) {
            return new Pe(t, this.globalData, this);
        }, _i("svg", rs), zt.registerModifier("tm", bt), zt.registerModifier("pb", ue), zt.registerModifier("rp", xt), zt.registerModifier("rd", me), zt.registerModifier("zz", ce), zt.registerModifier("op", ge), U;
    });
}), ma = fa(); /*! Bundled license information:

lottie-web/build/player/lottie_light.js:
  (*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   *)
*/ 

},{"./chunk-HDDX7F4A.mjs":"2Aqr0","./chunk-ZWH2ESXT.mjs":"jX5B9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hiTkN"], null, "parcelRequire94c2")

//# sourceMappingURL=lottie_light-KMJEUZFY-TNG7ODX7.ee1e49c9.js.map
