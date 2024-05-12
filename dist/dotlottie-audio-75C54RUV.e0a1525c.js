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
})({"kZA5L":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9cdc6635e0a1525c";
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

},{}],"5MQ98":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DotLottieAudio", ()=>E) //# sourceMappingURL=out.js.map
;
var _chunkHDDX7F4AMjs = require("./chunk-HDDX7F4A.mjs");
var _chunkZWH2ESXTMjs = require("./chunk-ZWH2ESXT.mjs");
var global = arguments[3];
var L = (0, _chunkHDDX7F4AMjs.a)((x)=>{
    (function() {
        var g = function() {
            this.init();
        };
        g.prototype = {
            init: function() {
                var e = this || o;
                return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = typeof window < "u" && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e;
            },
            volume: function(e) {
                var n = this || o;
                if (e = parseFloat(e), n.ctx || A(), typeof e < "u" && e >= 0 && e <= 1) {
                    if (n._volume = e, n._muted) return n;
                    n.usingWebAudio && n.masterGain.gain.setValueAtTime(e, o.ctx.currentTime);
                    for(var t = 0; t < n._howls.length; t++)if (!n._howls[t]._webAudio) for(var r = n._howls[t]._getSoundIds(), s = 0; s < r.length; s++){
                        var d = n._howls[t]._soundById(r[s]);
                        d && d._node && (d._node.volume = d._volume * e);
                    }
                    return n;
                }
                return n._volume;
            },
            mute: function(e) {
                var n = this || o;
                n.ctx || A(), n._muted = e, n.usingWebAudio && n.masterGain.gain.setValueAtTime(e ? 0 : n._volume, o.ctx.currentTime);
                for(var t = 0; t < n._howls.length; t++)if (!n._howls[t]._webAudio) for(var r = n._howls[t]._getSoundIds(), s = 0; s < r.length; s++){
                    var d = n._howls[t]._soundById(r[s]);
                    d && d._node && (d._node.muted = e ? !0 : d._muted);
                }
                return n;
            },
            stop: function() {
                for(var e = this || o, n = 0; n < e._howls.length; n++)e._howls[n].stop();
                return e;
            },
            unload: function() {
                for(var e = this || o, n = e._howls.length - 1; n >= 0; n--)e._howls[n].unload();
                return e.usingWebAudio && e.ctx && typeof e.ctx.close < "u" && (e.ctx.close(), e.ctx = null, A()), e;
            },
            codecs: function(e) {
                return (this || o)._codecs[e.replace(/^x-/, "")];
            },
            _setup: function() {
                var e = this || o;
                if (e.state = e.ctx && e.ctx.state || "suspended", e._autoSuspend(), !e.usingWebAudio) {
                    if (typeof Audio < "u") try {
                        var n = new Audio;
                        typeof n.oncanplaythrough > "u" && (e._canPlayEvent = "canplay");
                    } catch  {
                        e.noAudio = !0;
                    }
                    else e.noAudio = !0;
                }
                try {
                    var n = new Audio;
                    n.muted && (e.noAudio = !0);
                } catch  {}
                return e.noAudio || e._setupCodecs(), e;
            },
            _setupCodecs: function() {
                var e = this || o, n = null;
                try {
                    n = typeof Audio < "u" ? new Audio : null;
                } catch  {
                    return e;
                }
                if (!n || typeof n.canPlayType != "function") return e;
                var t = n.canPlayType("audio/mpeg;").replace(/^no$/, ""), r = e._navigator ? e._navigator.userAgent : "", s = r.match(/OPR\/([0-6].)/g), d = s && parseInt(s[0].split("/")[1], 10) < 33, a = r.indexOf("Safari") !== -1 && r.indexOf("Chrome") === -1, l = r.match(/Version\/(.*?) /), m = a && l && parseInt(l[1], 10) < 15;
                return e._codecs = {
                    mp3: !!(!d && (t || n.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                    mpeg: !!t,
                    opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    oga: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!(n.canPlayType('audio/wav; codecs="1"') || n.canPlayType("audio/wav")).replace(/^no$/, ""),
                    aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(n.canPlayType("audio/x-m4a;") || n.canPlayType("audio/m4a;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    m4b: !!(n.canPlayType("audio/x-m4b;") || n.canPlayType("audio/m4b;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(n.canPlayType("audio/x-mp4;") || n.canPlayType("audio/mp4;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!(!m && n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    webm: !!(!m && n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    dolby: !!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                    flac: !!(n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")).replace(/^no$/, "")
                }, e;
            },
            _unlockAudio: function() {
                var e = this || o;
                if (!(e._audioUnlocked || !e.ctx)) {
                    e._audioUnlocked = !1, e.autoUnlock = !1, !e._mobileUnloaded && e.ctx.sampleRate !== 44100 && (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                    var n = function(t) {
                        for(; e._html5AudioPool.length < e.html5PoolSize;)try {
                            var r = new Audio;
                            r._unlocked = !0, e._releaseHtml5Audio(r);
                        } catch  {
                            e.noAudio = !0;
                            break;
                        }
                        for(var s = 0; s < e._howls.length; s++)if (!e._howls[s]._webAudio) for(var d = e._howls[s]._getSoundIds(), a = 0; a < d.length; a++){
                            var l = e._howls[s]._soundById(d[a]);
                            l && l._node && !l._node._unlocked && (l._node._unlocked = !0, l._node.load());
                        }
                        e._autoResume();
                        var m = e.ctx.createBufferSource();
                        m.buffer = e._scratchBuffer, m.connect(e.ctx.destination), typeof m.start > "u" ? m.noteOn(0) : m.start(0), typeof e.ctx.resume == "function" && e.ctx.resume(), m.onended = function() {
                            m.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", n, !0), document.removeEventListener("touchend", n, !0), document.removeEventListener("click", n, !0), document.removeEventListener("keydown", n, !0);
                            for(var v = 0; v < e._howls.length; v++)e._howls[v]._emit("unlock");
                        };
                    };
                    return document.addEventListener("touchstart", n, !0), document.addEventListener("touchend", n, !0), document.addEventListener("click", n, !0), document.addEventListener("keydown", n, !0), e;
                }
            },
            _obtainHtml5Audio: function() {
                var e = this || o;
                if (e._html5AudioPool.length) return e._html5AudioPool.pop();
                var n = new Audio().play();
                return n && typeof Promise < "u" && (n instanceof Promise || typeof n.then == "function") && n.catch(function() {
                    console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
                }), new Audio;
            },
            _releaseHtml5Audio: function(e) {
                var n = this || o;
                return e._unlocked && n._html5AudioPool.push(e), n;
            },
            _autoSuspend: function() {
                var e = this;
                if (!(!e.autoSuspend || !e.ctx || typeof e.ctx.suspend > "u" || !o.usingWebAudio)) {
                    for(var n = 0; n < e._howls.length; n++)if (e._howls[n]._webAudio) {
                        for(var t = 0; t < e._howls[n]._sounds.length; t++)if (!e._howls[n]._sounds[t]._paused) return e;
                    }
                    return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() {
                        if (e.autoSuspend) {
                            e._suspendTimer = null, e.state = "suspending";
                            var r = function() {
                                e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume());
                            };
                            e.ctx.suspend().then(r, r);
                        }
                    }, 3e4), e;
                }
            },
            _autoResume: function() {
                var e = this;
                if (!(!e.ctx || typeof e.ctx.resume > "u" || !o.usingWebAudio)) return e.state === "running" && e.ctx.state !== "interrupted" && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : e.state === "suspended" || e.state === "running" && e.ctx.state === "interrupted" ? (e.ctx.resume().then(function() {
                    e.state = "running";
                    for(var n = 0; n < e._howls.length; n++)e._howls[n]._emit("resume");
                }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : e.state === "suspending" && (e._resumeAfterSuspend = !0), e;
            }
        };
        var o = new g, u = function(e) {
            var n = this;
            if (!e.src || e.src.length === 0) {
                console.error("An array of source files must be passed with any new Howl.");
                return;
            }
            n.init(e);
        };
        u.prototype = {
            init: function(e) {
                var n = this;
                return o.ctx || A(), n._autoplay = e.autoplay || !1, n._format = typeof e.format != "string" ? e.format : [
                    e.format
                ], n._html5 = e.html5 || !1, n._muted = e.mute || !1, n._loop = e.loop || !1, n._pool = e.pool || 5, n._preload = typeof e.preload == "boolean" || e.preload === "metadata" ? e.preload : !0, n._rate = e.rate || 1, n._sprite = e.sprite || {}, n._src = typeof e.src != "string" ? e.src : [
                    e.src
                ], n._volume = e.volume !== void 0 ? e.volume : 1, n._xhr = {
                    method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                    headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                    withCredentials: e.xhr && e.xhr.withCredentials ? e.xhr.withCredentials : !1
                }, n._duration = 0, n._state = "unloaded", n._sounds = [], n._endTimers = {}, n._queue = [], n._playLock = !1, n._onend = e.onend ? [
                    {
                        fn: e.onend
                    }
                ] : [], n._onfade = e.onfade ? [
                    {
                        fn: e.onfade
                    }
                ] : [], n._onload = e.onload ? [
                    {
                        fn: e.onload
                    }
                ] : [], n._onloaderror = e.onloaderror ? [
                    {
                        fn: e.onloaderror
                    }
                ] : [], n._onplayerror = e.onplayerror ? [
                    {
                        fn: e.onplayerror
                    }
                ] : [], n._onpause = e.onpause ? [
                    {
                        fn: e.onpause
                    }
                ] : [], n._onplay = e.onplay ? [
                    {
                        fn: e.onplay
                    }
                ] : [], n._onstop = e.onstop ? [
                    {
                        fn: e.onstop
                    }
                ] : [], n._onmute = e.onmute ? [
                    {
                        fn: e.onmute
                    }
                ] : [], n._onvolume = e.onvolume ? [
                    {
                        fn: e.onvolume
                    }
                ] : [], n._onrate = e.onrate ? [
                    {
                        fn: e.onrate
                    }
                ] : [], n._onseek = e.onseek ? [
                    {
                        fn: e.onseek
                    }
                ] : [], n._onunlock = e.onunlock ? [
                    {
                        fn: e.onunlock
                    }
                ] : [], n._onresume = [], n._webAudio = o.usingWebAudio && !n._html5, typeof o.ctx < "u" && o.ctx && o.autoUnlock && o._unlockAudio(), o._howls.push(n), n._autoplay && n._queue.push({
                    event: "play",
                    action: function() {
                        n.play();
                    }
                }), n._preload && n._preload !== "none" && n.load(), n;
            },
            load: function() {
                var e = this, n = null;
                if (o.noAudio) {
                    e._emit("loaderror", null, "No audio support.");
                    return;
                }
                typeof e._src == "string" && (e._src = [
                    e._src
                ]);
                for(var t = 0; t < e._src.length; t++){
                    var r, s;
                    if (e._format && e._format[t]) r = e._format[t];
                    else {
                        if (s = e._src[t], typeof s != "string") {
                            e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue;
                        }
                        r = /^data:audio\/([^;,]+);/i.exec(s), r || (r = /\.([^.]+)$/.exec(s.split("?", 1)[0])), r && (r = r[1].toLowerCase());
                    }
                    if (r || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), r && o.codecs(r)) {
                        n = e._src[t];
                        break;
                    }
                }
                if (!n) {
                    e._emit("loaderror", null, "No codec support for selected audio sources.");
                    return;
                }
                return e._src = n, e._state = "loading", window.location.protocol === "https:" && n.slice(0, 5) === "http:" && (e._html5 = !0, e._webAudio = !1), new i(e), e._webAudio && c(e), e;
            },
            play: function(e, n) {
                var t = this, r = null;
                if (typeof e == "number") r = e, e = null;
                else {
                    if (typeof e == "string" && t._state === "loaded" && !t._sprite[e]) return null;
                    if (typeof e > "u" && (e = "__default", !t._playLock)) {
                        for(var s = 0, d = 0; d < t._sounds.length; d++)t._sounds[d]._paused && !t._sounds[d]._ended && (s++, r = t._sounds[d]._id);
                        s === 1 ? e = null : r = null;
                    }
                }
                var a = r ? t._soundById(r) : t._inactiveSound();
                if (!a) return null;
                if (r && !e && (e = a._sprite || "__default"), t._state !== "loaded") {
                    a._sprite = e, a._ended = !1;
                    var l = a._id;
                    return t._queue.push({
                        event: "play",
                        action: function() {
                            t.play(l);
                        }
                    }), l;
                }
                if (r && !a._paused) return n || t._loadQueue("play"), a._id;
                t._webAudio && o._autoResume();
                var m = Math.max(0, a._seek > 0 ? a._seek : t._sprite[e][0] / 1e3), v = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - m), w = v * 1e3 / Math.abs(a._rate), b = t._sprite[e][0] / 1e3, S = (t._sprite[e][0] + t._sprite[e][1]) / 1e3;
                a._sprite = e, a._ended = !1;
                var k = function() {
                    a._paused = !1, a._seek = m, a._start = b, a._stop = S, a._loop = !!(a._loop || t._sprite[e][2]);
                };
                if (m >= S) {
                    t._ended(a);
                    return;
                }
                var h = a._node;
                if (t._webAudio) {
                    var I = function() {
                        t._playLock = !1, k(), t._refreshBuffer(a);
                        var T = a._muted || t._muted ? 0 : a._volume;
                        h.gain.setValueAtTime(T, o.ctx.currentTime), a._playStart = o.ctx.currentTime, typeof h.bufferSource.start > "u" ? a._loop ? h.bufferSource.noteGrainOn(0, m, 86400) : h.bufferSource.noteGrainOn(0, m, v) : a._loop ? h.bufferSource.start(0, m, 86400) : h.bufferSource.start(0, m, v), w !== 1 / 0 && (t._endTimers[a._id] = setTimeout(t._ended.bind(t, a), w)), n || setTimeout(function() {
                            t._emit("play", a._id), t._loadQueue();
                        }, 0);
                    };
                    o.state === "running" && o.ctx.state !== "interrupted" ? I() : (t._playLock = !0, t.once("resume", I), t._clearTimer(a._id));
                } else {
                    var H = function() {
                        h.currentTime = m, h.muted = a._muted || t._muted || o._muted || h.muted, h.volume = a._volume * o.volume(), h.playbackRate = a._rate;
                        try {
                            var T = h.play();
                            if (T && typeof Promise < "u" && (T instanceof Promise || typeof T.then == "function") ? (t._playLock = !0, k(), T.then(function() {
                                t._playLock = !1, h._unlocked = !0, n ? t._loadQueue() : t._emit("play", a._id);
                            }).catch(function() {
                                t._playLock = !1, t._emit("playerror", a._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), a._ended = !0, a._paused = !0;
                            })) : n || (t._playLock = !1, k(), t._emit("play", a._id)), h.playbackRate = a._rate, h.paused) {
                                t._emit("playerror", a._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                return;
                            }
                            e !== "__default" || a._loop ? t._endTimers[a._id] = setTimeout(t._ended.bind(t, a), w) : (t._endTimers[a._id] = function() {
                                t._ended(a), h.removeEventListener("ended", t._endTimers[a._id], !1);
                            }, h.addEventListener("ended", t._endTimers[a._id], !1));
                        } catch (B) {
                            t._emit("playerror", a._id, B);
                        }
                    };
                    h.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (h.src = t._src, h.load());
                    var F = window && window.ejecta || !h.readyState && o._navigator.isCocoonJS;
                    if (h.readyState >= 3 || F) H();
                    else {
                        t._playLock = !0, t._state = "loading";
                        var M = function() {
                            t._state = "loaded", H(), h.removeEventListener(o._canPlayEvent, M, !1);
                        };
                        h.addEventListener(o._canPlayEvent, M, !1), t._clearTimer(a._id);
                    }
                }
                return a._id;
            },
            pause: function(e) {
                var n = this;
                if (n._state !== "loaded" || n._playLock) return n._queue.push({
                    event: "pause",
                    action: function() {
                        n.pause(e);
                    }
                }), n;
                for(var t = n._getSoundIds(e), r = 0; r < t.length; r++){
                    n._clearTimer(t[r]);
                    var s = n._soundById(t[r]);
                    if (s && !s._paused && (s._seek = n.seek(t[r]), s._rateSeek = 0, s._paused = !0, n._stopFade(t[r]), s._node)) {
                        if (n._webAudio) {
                            if (!s._node.bufferSource) continue;
                            typeof s._node.bufferSource.stop > "u" ? s._node.bufferSource.noteOff(0) : s._node.bufferSource.stop(0), n._cleanBuffer(s._node);
                        } else (!isNaN(s._node.duration) || s._node.duration === 1 / 0) && s._node.pause();
                    }
                    arguments[1] || n._emit("pause", s ? s._id : null);
                }
                return n;
            },
            stop: function(e, n) {
                var t = this;
                if (t._state !== "loaded" || t._playLock) return t._queue.push({
                    event: "stop",
                    action: function() {
                        t.stop(e);
                    }
                }), t;
                for(var r = t._getSoundIds(e), s = 0; s < r.length; s++){
                    t._clearTimer(r[s]);
                    var d = t._soundById(r[s]);
                    d && (d._seek = d._start || 0, d._rateSeek = 0, d._paused = !0, d._ended = !0, t._stopFade(r[s]), d._node && (t._webAudio ? d._node.bufferSource && (typeof d._node.bufferSource.stop > "u" ? d._node.bufferSource.noteOff(0) : d._node.bufferSource.stop(0), t._cleanBuffer(d._node)) : (!isNaN(d._node.duration) || d._node.duration === 1 / 0) && (d._node.currentTime = d._start || 0, d._node.pause(), d._node.duration === 1 / 0 && t._clearSound(d._node))), n || t._emit("stop", d._id));
                }
                return t;
            },
            mute: function(e, n) {
                var t = this;
                if (t._state !== "loaded" || t._playLock) return t._queue.push({
                    event: "mute",
                    action: function() {
                        t.mute(e, n);
                    }
                }), t;
                if (typeof n > "u") {
                    if (typeof e == "boolean") t._muted = e;
                    else return t._muted;
                }
                for(var r = t._getSoundIds(n), s = 0; s < r.length; s++){
                    var d = t._soundById(r[s]);
                    d && (d._muted = e, d._interval && t._stopFade(d._id), t._webAudio && d._node ? d._node.gain.setValueAtTime(e ? 0 : d._volume, o.ctx.currentTime) : d._node && (d._node.muted = o._muted ? !0 : e), t._emit("mute", d._id));
                }
                return t;
            },
            volume: function() {
                var e = this, n = arguments, t, r;
                if (n.length === 0) return e._volume;
                if (n.length === 1 || n.length === 2 && typeof n[1] > "u") {
                    var s = e._getSoundIds(), d = s.indexOf(n[0]);
                    d >= 0 ? r = parseInt(n[0], 10) : t = parseFloat(n[0]);
                } else n.length >= 2 && (t = parseFloat(n[0]), r = parseInt(n[1], 10));
                var a;
                if (typeof t < "u" && t >= 0 && t <= 1) {
                    if (e._state !== "loaded" || e._playLock) return e._queue.push({
                        event: "volume",
                        action: function() {
                            e.volume.apply(e, n);
                        }
                    }), e;
                    typeof r > "u" && (e._volume = t), r = e._getSoundIds(r);
                    for(var l = 0; l < r.length; l++)a = e._soundById(r[l]), a && (a._volume = t, n[2] || e._stopFade(r[l]), e._webAudio && a._node && !a._muted ? a._node.gain.setValueAtTime(t, o.ctx.currentTime) : a._node && !a._muted && (a._node.volume = t * o.volume()), e._emit("volume", a._id));
                } else return a = r ? e._soundById(r) : e._sounds[0], a ? a._volume : 0;
                return e;
            },
            fade: function(e, n, t, r) {
                var s = this;
                if (s._state !== "loaded" || s._playLock) return s._queue.push({
                    event: "fade",
                    action: function() {
                        s.fade(e, n, t, r);
                    }
                }), s;
                e = Math.min(Math.max(0, parseFloat(e)), 1), n = Math.min(Math.max(0, parseFloat(n)), 1), t = parseFloat(t), s.volume(e, r);
                for(var d = s._getSoundIds(r), a = 0; a < d.length; a++){
                    var l = s._soundById(d[a]);
                    if (l) {
                        if (r || s._stopFade(d[a]), s._webAudio && !l._muted) {
                            var m = o.ctx.currentTime, v = m + t / 1e3;
                            l._volume = e, l._node.gain.setValueAtTime(e, m), l._node.gain.linearRampToValueAtTime(n, v);
                        }
                        s._startFadeInterval(l, e, n, t, d[a], typeof r > "u");
                    }
                }
                return s;
            },
            _startFadeInterval: function(e, n, t, r, s, d) {
                var a = this, l = n, m = t - n, v = Math.abs(m / .01), w = Math.max(4, v > 0 ? r / v : r), b = Date.now();
                e._fadeTo = t, e._interval = setInterval(function() {
                    var S = (Date.now() - b) / r;
                    b = Date.now(), l += m * S, l = Math.round(l * 100) / 100, m < 0 ? l = Math.max(t, l) : l = Math.min(t, l), a._webAudio ? e._volume = l : a.volume(l, e._id, !0), d && (a._volume = l), (t < n && l <= t || t > n && l >= t) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, a.volume(t, e._id), a._emit("fade", e._id));
                }, w);
            },
            _stopFade: function(e) {
                var n = this, t = n._soundById(e);
                return t && t._interval && (n._webAudio && t._node.gain.cancelScheduledValues(o.ctx.currentTime), clearInterval(t._interval), t._interval = null, n.volume(t._fadeTo, e), t._fadeTo = null, n._emit("fade", e)), n;
            },
            loop: function() {
                var e = this, n = arguments, t, r, s;
                if (n.length === 0) return e._loop;
                if (n.length === 1) {
                    if (typeof n[0] == "boolean") t = n[0], e._loop = t;
                    else return s = e._soundById(parseInt(n[0], 10)), s ? s._loop : !1;
                } else n.length === 2 && (t = n[0], r = parseInt(n[1], 10));
                for(var d = e._getSoundIds(r), a = 0; a < d.length; a++)s = e._soundById(d[a]), s && (s._loop = t, e._webAudio && s._node && s._node.bufferSource && (s._node.bufferSource.loop = t, t && (s._node.bufferSource.loopStart = s._start || 0, s._node.bufferSource.loopEnd = s._stop, e.playing(d[a]) && (e.pause(d[a], !0), e.play(d[a], !0)))));
                return e;
            },
            rate: function() {
                var e = this, n = arguments, t, r;
                if (n.length === 0) r = e._sounds[0]._id;
                else if (n.length === 1) {
                    var s = e._getSoundIds(), d = s.indexOf(n[0]);
                    d >= 0 ? r = parseInt(n[0], 10) : t = parseFloat(n[0]);
                } else n.length === 2 && (t = parseFloat(n[0]), r = parseInt(n[1], 10));
                var a;
                if (typeof t == "number") {
                    if (e._state !== "loaded" || e._playLock) return e._queue.push({
                        event: "rate",
                        action: function() {
                            e.rate.apply(e, n);
                        }
                    }), e;
                    typeof r > "u" && (e._rate = t), r = e._getSoundIds(r);
                    for(var l = 0; l < r.length; l++)if (a = e._soundById(r[l]), a) {
                        e.playing(r[l]) && (a._rateSeek = e.seek(r[l]), a._playStart = e._webAudio ? o.ctx.currentTime : a._playStart), a._rate = t, e._webAudio && a._node && a._node.bufferSource ? a._node.bufferSource.playbackRate.setValueAtTime(t, o.ctx.currentTime) : a._node && (a._node.playbackRate = t);
                        var m = e.seek(r[l]), v = (e._sprite[a._sprite][0] + e._sprite[a._sprite][1]) / 1e3 - m, w = v * 1e3 / Math.abs(a._rate);
                        (e._endTimers[r[l]] || !a._paused) && (e._clearTimer(r[l]), e._endTimers[r[l]] = setTimeout(e._ended.bind(e, a), w)), e._emit("rate", a._id);
                    }
                } else return a = e._soundById(r), a ? a._rate : e._rate;
                return e;
            },
            seek: function() {
                var e = this, n = arguments, t, r;
                if (n.length === 0) e._sounds.length && (r = e._sounds[0]._id);
                else if (n.length === 1) {
                    var s = e._getSoundIds(), d = s.indexOf(n[0]);
                    d >= 0 ? r = parseInt(n[0], 10) : e._sounds.length && (r = e._sounds[0]._id, t = parseFloat(n[0]));
                } else n.length === 2 && (t = parseFloat(n[0]), r = parseInt(n[1], 10));
                if (typeof r > "u") return 0;
                if (typeof t == "number" && (e._state !== "loaded" || e._playLock)) return e._queue.push({
                    event: "seek",
                    action: function() {
                        e.seek.apply(e, n);
                    }
                }), e;
                var a = e._soundById(r);
                if (a) {
                    if (typeof t == "number" && t >= 0) {
                        var l = e.playing(r);
                        l && e.pause(r, !0), a._seek = t, a._ended = !1, e._clearTimer(r), !e._webAudio && a._node && !isNaN(a._node.duration) && (a._node.currentTime = t);
                        var m = function() {
                            l && e.play(r, !0), e._emit("seek", r);
                        };
                        if (l && !e._webAudio) {
                            var v = function() {
                                e._playLock ? setTimeout(v, 0) : m();
                            };
                            setTimeout(v, 0);
                        } else m();
                    } else if (e._webAudio) {
                        var w = e.playing(r) ? o.ctx.currentTime - a._playStart : 0, b = a._rateSeek ? a._rateSeek - a._seek : 0;
                        return a._seek + (b + w * Math.abs(a._rate));
                    } else return a._node.currentTime;
                }
                return e;
            },
            playing: function(e) {
                var n = this;
                if (typeof e == "number") {
                    var t = n._soundById(e);
                    return t ? !t._paused : !1;
                }
                for(var r = 0; r < n._sounds.length; r++)if (!n._sounds[r]._paused) return !0;
                return !1;
            },
            duration: function(e) {
                var n = this, t = n._duration, r = n._soundById(e);
                return r && (t = n._sprite[r._sprite][1] / 1e3), t;
            },
            state: function() {
                return this._state;
            },
            unload: function() {
                for(var e = this, n = e._sounds, t = 0; t < n.length; t++)n[t]._paused || e.stop(n[t]._id), e._webAudio || (e._clearSound(n[t]._node), n[t]._node.removeEventListener("error", n[t]._errorFn, !1), n[t]._node.removeEventListener(o._canPlayEvent, n[t]._loadFn, !1), n[t]._node.removeEventListener("ended", n[t]._endFn, !1), o._releaseHtml5Audio(n[t]._node)), delete n[t]._node, e._clearTimer(n[t]._id);
                var r = o._howls.indexOf(e);
                r >= 0 && o._howls.splice(r, 1);
                var s = !0;
                for(t = 0; t < o._howls.length; t++)if (o._howls[t]._src === e._src || e._src.indexOf(o._howls[t]._src) >= 0) {
                    s = !1;
                    break;
                }
                return p && s && delete p[e._src], o.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null;
            },
            on: function(e, n, t, r) {
                var s = this, d = s["_on" + e];
                return typeof n == "function" && d.push(r ? {
                    id: t,
                    fn: n,
                    once: r
                } : {
                    id: t,
                    fn: n
                }), s;
            },
            off: function(e, n, t) {
                var r = this, s = r["_on" + e], d = 0;
                if (typeof n == "number" && (t = n, n = null), n || t) for(d = 0; d < s.length; d++){
                    var a = t === s[d].id;
                    if (n === s[d].fn && a || !n && a) {
                        s.splice(d, 1);
                        break;
                    }
                }
                else if (e) r["_on" + e] = [];
                else {
                    var l = Object.keys(r);
                    for(d = 0; d < l.length; d++)l[d].indexOf("_on") === 0 && Array.isArray(r[l[d]]) && (r[l[d]] = []);
                }
                return r;
            },
            once: function(e, n, t) {
                var r = this;
                return r.on(e, n, t, 1), r;
            },
            _emit: function(e, n, t) {
                for(var r = this, s = r["_on" + e], d = s.length - 1; d >= 0; d--)(!s[d].id || s[d].id === n || e === "load") && (setTimeout((function(a) {
                    a.call(this, n, t);
                }).bind(r, s[d].fn), 0), s[d].once && r.off(e, s[d].fn, s[d].id));
                return r._loadQueue(e), r;
            },
            _loadQueue: function(e) {
                var n = this;
                if (n._queue.length > 0) {
                    var t = n._queue[0];
                    t.event === e && (n._queue.shift(), n._loadQueue()), e || t.action();
                }
                return n;
            },
            _ended: function(e) {
                var n = this, t = e._sprite;
                if (!n._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(n._ended.bind(n, e), 100), n;
                var r = !!(e._loop || n._sprite[t][2]);
                if (n._emit("end", e._id), !n._webAudio && r && n.stop(e._id, !0).play(e._id), n._webAudio && r) {
                    n._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = o.ctx.currentTime;
                    var s = (e._stop - e._start) * 1e3 / Math.abs(e._rate);
                    n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), s);
                }
                return n._webAudio && !r && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, n._clearTimer(e._id), n._cleanBuffer(e._node), o._autoSuspend()), !n._webAudio && !r && n.stop(e._id, !0), n;
            },
            _clearTimer: function(e) {
                var n = this;
                if (n._endTimers[e]) {
                    if (typeof n._endTimers[e] != "function") clearTimeout(n._endTimers[e]);
                    else {
                        var t = n._soundById(e);
                        t && t._node && t._node.removeEventListener("ended", n._endTimers[e], !1);
                    }
                    delete n._endTimers[e];
                }
                return n;
            },
            _soundById: function(e) {
                for(var n = this, t = 0; t < n._sounds.length; t++)if (e === n._sounds[t]._id) return n._sounds[t];
                return null;
            },
            _inactiveSound: function() {
                var e = this;
                e._drain();
                for(var n = 0; n < e._sounds.length; n++)if (e._sounds[n]._ended) return e._sounds[n].reset();
                return new i(e);
            },
            _drain: function() {
                var e = this, n = e._pool, t = 0, r = 0;
                if (!(e._sounds.length < n)) {
                    for(r = 0; r < e._sounds.length; r++)e._sounds[r]._ended && t++;
                    for(r = e._sounds.length - 1; r >= 0; r--){
                        if (t <= n) return;
                        e._sounds[r]._ended && (e._webAudio && e._sounds[r]._node && e._sounds[r]._node.disconnect(0), e._sounds.splice(r, 1), t--);
                    }
                }
            },
            _getSoundIds: function(e) {
                var n = this;
                if (typeof e > "u") {
                    for(var t = [], r = 0; r < n._sounds.length; r++)t.push(n._sounds[r]._id);
                    return t;
                } else return [
                    e
                ];
            },
            _refreshBuffer: function(e) {
                var n = this;
                return e._node.bufferSource = o.ctx.createBufferSource(), e._node.bufferSource.buffer = p[n._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, o.ctx.currentTime), n;
            },
            _cleanBuffer: function(e) {
                var n = this, t = o._navigator && o._navigator.vendor.indexOf("Apple") >= 0;
                if (o._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), t)) try {
                    e.bufferSource.buffer = o._scratchBuffer;
                } catch  {}
                return e.bufferSource = null, n;
            },
            _clearSound: function(e) {
                var n = /MSIE |Trident\//.test(o._navigator && o._navigator.userAgent);
                n || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
            }
        };
        var i = function(e) {
            this._parent = e, this.init();
        };
        i.prototype = {
            init: function() {
                var e = this, n = e._parent;
                return e._muted = n._muted, e._loop = n._loop, e._volume = n._volume, e._rate = n._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++o._counter, n._sounds.push(e), e.create(), e;
            },
            create: function() {
                var e = this, n = e._parent, t = o._muted || e._muted || e._parent._muted ? 0 : e._volume;
                return n._webAudio ? (e._node = typeof o.ctx.createGain > "u" ? o.ctx.createGainNode() : o.ctx.createGain(), e._node.gain.setValueAtTime(t, o.ctx.currentTime), e._node.paused = !0, e._node.connect(o.masterGain)) : o.noAudio || (e._node = o._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(o._canPlayEvent, e._loadFn, !1), e._endFn = e._endListener.bind(e), e._node.addEventListener("ended", e._endFn, !1), e._node.src = n._src, e._node.preload = n._preload === !0 ? "auto" : n._preload, e._node.volume = t * o.volume(), e._node.load()), e;
            },
            reset: function() {
                var e = this, n = e._parent;
                return e._muted = n._muted, e._loop = n._loop, e._volume = n._volume, e._rate = n._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++o._counter, e;
            },
            _errorListener: function() {
                var e = this;
                e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1);
            },
            _loadListener: function() {
                var e = this, n = e._parent;
                n._duration = Math.ceil(e._node.duration * 10) / 10, Object.keys(n._sprite).length === 0 && (n._sprite = {
                    __default: [
                        0,
                        n._duration * 1e3
                    ]
                }), n._state !== "loaded" && (n._state = "loaded", n._emit("load"), n._loadQueue()), e._node.removeEventListener(o._canPlayEvent, e._loadFn, !1);
            },
            _endListener: function() {
                var e = this, n = e._parent;
                n._duration === 1 / 0 && (n._duration = Math.ceil(e._node.duration * 10) / 10, n._sprite.__default[1] === 1 / 0 && (n._sprite.__default[1] = n._duration * 1e3), n._ended(e)), e._node.removeEventListener("ended", e._endFn, !1);
            }
        };
        var p = {}, c = function(e) {
            var n = e._src;
            if (p[n]) {
                e._duration = p[n].duration, _(e);
                return;
            }
            if (/^data:[^;]+;base64,/.test(n)) {
                for(var t = atob(n.split(",")[1]), r = new Uint8Array(t.length), s = 0; s < t.length; ++s)r[s] = t.charCodeAt(s);
                f(r.buffer, e);
            } else {
                var d = new XMLHttpRequest;
                d.open(e._xhr.method, n, !0), d.withCredentials = e._xhr.withCredentials, d.responseType = "arraybuffer", e._xhr.headers && Object.keys(e._xhr.headers).forEach(function(a) {
                    d.setRequestHeader(a, e._xhr.headers[a]);
                }), d.onload = function() {
                    var a = (d.status + "")[0];
                    if (a !== "0" && a !== "2" && a !== "3") {
                        e._emit("loaderror", null, "Failed loading audio file with status: " + d.status + ".");
                        return;
                    }
                    f(d.response, e);
                }, d.onerror = function() {
                    e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete p[n], e.load());
                }, y(d);
            }
        }, y = function(e) {
            try {
                e.send();
            } catch  {
                e.onerror();
            }
        }, f = function(e, n) {
            var t = function() {
                n._emit("loaderror", null, "Decoding audio data failed.");
            }, r = function(s) {
                s && n._sounds.length > 0 ? (p[n._src] = s, _(n, s)) : t();
            };
            typeof Promise < "u" && o.ctx.decodeAudioData.length === 1 ? o.ctx.decodeAudioData(e).then(r).catch(t) : o.ctx.decodeAudioData(e, r, t);
        }, _ = function(e, n) {
            n && !e._duration && (e._duration = n.duration), Object.keys(e._sprite).length === 0 && (e._sprite = {
                __default: [
                    0,
                    e._duration * 1e3
                ]
            }), e._state !== "loaded" && (e._state = "loaded", e._emit("load"), e._loadQueue());
        }, A = function() {
            if (o.usingWebAudio) {
                try {
                    typeof AudioContext < "u" ? o.ctx = new AudioContext : typeof webkitAudioContext < "u" ? o.ctx = new webkitAudioContext : o.usingWebAudio = !1;
                } catch  {
                    o.usingWebAudio = !1;
                }
                o.ctx || (o.usingWebAudio = !1);
                var e = /iP(hone|od|ad)/.test(o._navigator && o._navigator.platform), n = o._navigator && o._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), t = n ? parseInt(n[1], 10) : null;
                if (e && t && t < 9) {
                    var r = /safari/.test(o._navigator && o._navigator.userAgent.toLowerCase());
                    o._navigator && !r && (o.usingWebAudio = !1);
                }
                o.usingWebAudio && (o.masterGain = typeof o.ctx.createGain > "u" ? o.ctx.createGainNode() : o.ctx.createGain(), o.masterGain.gain.setValueAtTime(o._muted ? 0 : o._volume, o.ctx.currentTime), o.masterGain.connect(o.ctx.destination)), o._setup();
            }
        };
        typeof define == "function" && define.amd && define([], function() {
            return {
                Howler: o,
                Howl: u
            };
        }), typeof x < "u" && (x.Howler = o, x.Howl = u), typeof global < "u" ? (global.HowlerGlobal = g, global.Howler = o, global.Howl = u, global.Sound = i) : typeof window < "u" && (window.HowlerGlobal = g, window.Howler = o, window.Howl = u, window.Sound = i);
    })(), function() {
        HowlerGlobal.prototype._pos = [
            0,
            0,
            0
        ], HowlerGlobal.prototype._orientation = [
            0,
            0,
            -1,
            0,
            1,
            0
        ], HowlerGlobal.prototype.stereo = function(o) {
            var u = this;
            if (!u.ctx || !u.ctx.listener) return u;
            for(var i = u._howls.length - 1; i >= 0; i--)u._howls[i].stereo(o);
            return u;
        }, HowlerGlobal.prototype.pos = function(o, u, i) {
            var p = this;
            if (!p.ctx || !p.ctx.listener) return p;
            if (u = typeof u != "number" ? p._pos[1] : u, i = typeof i != "number" ? p._pos[2] : i, typeof o == "number") p._pos = [
                o,
                u,
                i
            ], typeof p.ctx.listener.positionX < "u" ? (p.ctx.listener.positionX.setTargetAtTime(p._pos[0], Howler.ctx.currentTime, .1), p.ctx.listener.positionY.setTargetAtTime(p._pos[1], Howler.ctx.currentTime, .1), p.ctx.listener.positionZ.setTargetAtTime(p._pos[2], Howler.ctx.currentTime, .1)) : p.ctx.listener.setPosition(p._pos[0], p._pos[1], p._pos[2]);
            else return p._pos;
            return p;
        }, HowlerGlobal.prototype.orientation = function(o, u, i, p, c, y) {
            var f = this;
            if (!f.ctx || !f.ctx.listener) return f;
            var _ = f._orientation;
            if (u = typeof u != "number" ? _[1] : u, i = typeof i != "number" ? _[2] : i, p = typeof p != "number" ? _[3] : p, c = typeof c != "number" ? _[4] : c, y = typeof y != "number" ? _[5] : y, typeof o == "number") f._orientation = [
                o,
                u,
                i,
                p,
                c,
                y
            ], typeof f.ctx.listener.forwardX < "u" ? (f.ctx.listener.forwardX.setTargetAtTime(o, Howler.ctx.currentTime, .1), f.ctx.listener.forwardY.setTargetAtTime(u, Howler.ctx.currentTime, .1), f.ctx.listener.forwardZ.setTargetAtTime(i, Howler.ctx.currentTime, .1), f.ctx.listener.upX.setTargetAtTime(p, Howler.ctx.currentTime, .1), f.ctx.listener.upY.setTargetAtTime(c, Howler.ctx.currentTime, .1), f.ctx.listener.upZ.setTargetAtTime(y, Howler.ctx.currentTime, .1)) : f.ctx.listener.setOrientation(o, u, i, p, c, y);
            else return _;
            return f;
        }, Howl.prototype.init = function(o) {
            return function(u) {
                var i = this;
                return i._orientation = u.orientation || [
                    1,
                    0,
                    0
                ], i._stereo = u.stereo || null, i._pos = u.pos || null, i._pannerAttr = {
                    coneInnerAngle: typeof u.coneInnerAngle < "u" ? u.coneInnerAngle : 360,
                    coneOuterAngle: typeof u.coneOuterAngle < "u" ? u.coneOuterAngle : 360,
                    coneOuterGain: typeof u.coneOuterGain < "u" ? u.coneOuterGain : 0,
                    distanceModel: typeof u.distanceModel < "u" ? u.distanceModel : "inverse",
                    maxDistance: typeof u.maxDistance < "u" ? u.maxDistance : 1e4,
                    panningModel: typeof u.panningModel < "u" ? u.panningModel : "HRTF",
                    refDistance: typeof u.refDistance < "u" ? u.refDistance : 1,
                    rolloffFactor: typeof u.rolloffFactor < "u" ? u.rolloffFactor : 1
                }, i._onstereo = u.onstereo ? [
                    {
                        fn: u.onstereo
                    }
                ] : [], i._onpos = u.onpos ? [
                    {
                        fn: u.onpos
                    }
                ] : [], i._onorientation = u.onorientation ? [
                    {
                        fn: u.onorientation
                    }
                ] : [], o.call(this, u);
            };
        }(Howl.prototype.init), Howl.prototype.stereo = function(o, u) {
            var i = this;
            if (!i._webAudio) return i;
            if (i._state !== "loaded") return i._queue.push({
                event: "stereo",
                action: function() {
                    i.stereo(o, u);
                }
            }), i;
            var p = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
            if (typeof u > "u") {
                if (typeof o == "number") i._stereo = o, i._pos = [
                    o,
                    0,
                    0
                ];
                else return i._stereo;
            }
            for(var c = i._getSoundIds(u), y = 0; y < c.length; y++){
                var f = i._soundById(c[y]);
                if (f) {
                    if (typeof o == "number") f._stereo = o, f._pos = [
                        o,
                        0,
                        0
                    ], f._node && (f._pannerAttr.panningModel = "equalpower", (!f._panner || !f._panner.pan) && g(f, p), p === "spatial" ? typeof f._panner.positionX < "u" ? (f._panner.positionX.setValueAtTime(o, Howler.ctx.currentTime), f._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), f._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : f._panner.setPosition(o, 0, 0) : f._panner.pan.setValueAtTime(o, Howler.ctx.currentTime)), i._emit("stereo", f._id);
                    else return f._stereo;
                }
            }
            return i;
        }, Howl.prototype.pos = function(o, u, i, p) {
            var c = this;
            if (!c._webAudio) return c;
            if (c._state !== "loaded") return c._queue.push({
                event: "pos",
                action: function() {
                    c.pos(o, u, i, p);
                }
            }), c;
            if (u = typeof u != "number" ? 0 : u, i = typeof i != "number" ? -0.5 : i, typeof p > "u") {
                if (typeof o == "number") c._pos = [
                    o,
                    u,
                    i
                ];
                else return c._pos;
            }
            for(var y = c._getSoundIds(p), f = 0; f < y.length; f++){
                var _ = c._soundById(y[f]);
                if (_) {
                    if (typeof o == "number") _._pos = [
                        o,
                        u,
                        i
                    ], _._node && ((!_._panner || _._panner.pan) && g(_, "spatial"), typeof _._panner.positionX < "u" ? (_._panner.positionX.setValueAtTime(o, Howler.ctx.currentTime), _._panner.positionY.setValueAtTime(u, Howler.ctx.currentTime), _._panner.positionZ.setValueAtTime(i, Howler.ctx.currentTime)) : _._panner.setPosition(o, u, i)), c._emit("pos", _._id);
                    else return _._pos;
                }
            }
            return c;
        }, Howl.prototype.orientation = function(o, u, i, p) {
            var c = this;
            if (!c._webAudio) return c;
            if (c._state !== "loaded") return c._queue.push({
                event: "orientation",
                action: function() {
                    c.orientation(o, u, i, p);
                }
            }), c;
            if (u = typeof u != "number" ? c._orientation[1] : u, i = typeof i != "number" ? c._orientation[2] : i, typeof p > "u") {
                if (typeof o == "number") c._orientation = [
                    o,
                    u,
                    i
                ];
                else return c._orientation;
            }
            for(var y = c._getSoundIds(p), f = 0; f < y.length; f++){
                var _ = c._soundById(y[f]);
                if (_) {
                    if (typeof o == "number") _._orientation = [
                        o,
                        u,
                        i
                    ], _._node && (_._panner || (_._pos || (_._pos = c._pos || [
                        0,
                        0,
                        -0.5
                    ]), g(_, "spatial")), typeof _._panner.orientationX < "u" ? (_._panner.orientationX.setValueAtTime(o, Howler.ctx.currentTime), _._panner.orientationY.setValueAtTime(u, Howler.ctx.currentTime), _._panner.orientationZ.setValueAtTime(i, Howler.ctx.currentTime)) : _._panner.setOrientation(o, u, i)), c._emit("orientation", _._id);
                    else return _._orientation;
                }
            }
            return c;
        }, Howl.prototype.pannerAttr = function() {
            var o = this, u = arguments, i, p, c;
            if (!o._webAudio) return o;
            if (u.length === 0) return o._pannerAttr;
            if (u.length === 1) {
                if (typeof u[0] == "object") i = u[0], typeof p > "u" && (i.pannerAttr || (i.pannerAttr = {
                    coneInnerAngle: i.coneInnerAngle,
                    coneOuterAngle: i.coneOuterAngle,
                    coneOuterGain: i.coneOuterGain,
                    distanceModel: i.distanceModel,
                    maxDistance: i.maxDistance,
                    refDistance: i.refDistance,
                    rolloffFactor: i.rolloffFactor,
                    panningModel: i.panningModel
                }), o._pannerAttr = {
                    coneInnerAngle: typeof i.pannerAttr.coneInnerAngle < "u" ? i.pannerAttr.coneInnerAngle : o._coneInnerAngle,
                    coneOuterAngle: typeof i.pannerAttr.coneOuterAngle < "u" ? i.pannerAttr.coneOuterAngle : o._coneOuterAngle,
                    coneOuterGain: typeof i.pannerAttr.coneOuterGain < "u" ? i.pannerAttr.coneOuterGain : o._coneOuterGain,
                    distanceModel: typeof i.pannerAttr.distanceModel < "u" ? i.pannerAttr.distanceModel : o._distanceModel,
                    maxDistance: typeof i.pannerAttr.maxDistance < "u" ? i.pannerAttr.maxDistance : o._maxDistance,
                    refDistance: typeof i.pannerAttr.refDistance < "u" ? i.pannerAttr.refDistance : o._refDistance,
                    rolloffFactor: typeof i.pannerAttr.rolloffFactor < "u" ? i.pannerAttr.rolloffFactor : o._rolloffFactor,
                    panningModel: typeof i.pannerAttr.panningModel < "u" ? i.pannerAttr.panningModel : o._panningModel
                });
                else return c = o._soundById(parseInt(u[0], 10)), c ? c._pannerAttr : o._pannerAttr;
            } else u.length === 2 && (i = u[0], p = parseInt(u[1], 10));
            for(var y = o._getSoundIds(p), f = 0; f < y.length; f++)if (c = o._soundById(y[f]), c) {
                var _ = c._pannerAttr;
                _ = {
                    coneInnerAngle: typeof i.coneInnerAngle < "u" ? i.coneInnerAngle : _.coneInnerAngle,
                    coneOuterAngle: typeof i.coneOuterAngle < "u" ? i.coneOuterAngle : _.coneOuterAngle,
                    coneOuterGain: typeof i.coneOuterGain < "u" ? i.coneOuterGain : _.coneOuterGain,
                    distanceModel: typeof i.distanceModel < "u" ? i.distanceModel : _.distanceModel,
                    maxDistance: typeof i.maxDistance < "u" ? i.maxDistance : _.maxDistance,
                    refDistance: typeof i.refDistance < "u" ? i.refDistance : _.refDistance,
                    rolloffFactor: typeof i.rolloffFactor < "u" ? i.rolloffFactor : _.rolloffFactor,
                    panningModel: typeof i.panningModel < "u" ? i.panningModel : _.panningModel
                };
                var A = c._panner;
                A ? (A.coneInnerAngle = _.coneInnerAngle, A.coneOuterAngle = _.coneOuterAngle, A.coneOuterGain = _.coneOuterGain, A.distanceModel = _.distanceModel, A.maxDistance = _.maxDistance, A.refDistance = _.refDistance, A.rolloffFactor = _.rolloffFactor, A.panningModel = _.panningModel) : (c._pos || (c._pos = o._pos || [
                    0,
                    0,
                    -0.5
                ]), g(c, "spatial"));
            }
            return o;
        }, Sound.prototype.init = function(o) {
            return function() {
                var u = this, i = u._parent;
                u._orientation = i._orientation, u._stereo = i._stereo, u._pos = i._pos, u._pannerAttr = i._pannerAttr, o.call(this), u._stereo ? i.stereo(u._stereo) : u._pos && i.pos(u._pos[0], u._pos[1], u._pos[2], u._id);
            };
        }(Sound.prototype.init), Sound.prototype.reset = function(o) {
            return function() {
                var u = this, i = u._parent;
                return u._orientation = i._orientation, u._stereo = i._stereo, u._pos = i._pos, u._pannerAttr = i._pannerAttr, u._stereo ? i.stereo(u._stereo) : u._pos ? i.pos(u._pos[0], u._pos[1], u._pos[2], u._id) : u._panner && (u._panner.disconnect(0), u._panner = void 0, i._refreshBuffer(u)), o.call(this);
            };
        }(Sound.prototype.reset);
        var g = function(o, u) {
            u = u || "spatial", u === "spatial" ? (o._panner = Howler.ctx.createPanner(), o._panner.coneInnerAngle = o._pannerAttr.coneInnerAngle, o._panner.coneOuterAngle = o._pannerAttr.coneOuterAngle, o._panner.coneOuterGain = o._pannerAttr.coneOuterGain, o._panner.distanceModel = o._pannerAttr.distanceModel, o._panner.maxDistance = o._pannerAttr.maxDistance, o._panner.refDistance = o._pannerAttr.refDistance, o._panner.rolloffFactor = o._pannerAttr.rolloffFactor, o._panner.panningModel = o._pannerAttr.panningModel, typeof o._panner.positionX < "u" ? (o._panner.positionX.setValueAtTime(o._pos[0], Howler.ctx.currentTime), o._panner.positionY.setValueAtTime(o._pos[1], Howler.ctx.currentTime), o._panner.positionZ.setValueAtTime(o._pos[2], Howler.ctx.currentTime)) : o._panner.setPosition(o._pos[0], o._pos[1], o._pos[2]), typeof o._panner.orientationX < "u" ? (o._panner.orientationX.setValueAtTime(o._orientation[0], Howler.ctx.currentTime), o._panner.orientationY.setValueAtTime(o._orientation[1], Howler.ctx.currentTime), o._panner.orientationZ.setValueAtTime(o._orientation[2], Howler.ctx.currentTime)) : o._panner.setOrientation(o._orientation[0], o._orientation[1], o._orientation[2])) : (o._panner = Howler.ctx.createStereoPanner(), o._panner.pan.setValueAtTime(o._stereo, Howler.ctx.currentTime)), o._panner.connect(o._node), o._paused || o._parent.pause(o._id, !0).play(o._id, !0);
        };
    }();
}), D = (0, _chunkHDDX7F4AMjs.b)(L(), 1), E = class {
    _howl;
    constructor({ src: x }){
        this._howl = new D.Howl({
            src: x
        });
    }
    play() {
        return this._howl.play();
    }
    pause() {
        return this._howl.pause();
    }
    playing() {
        return this._howl.playing();
    }
    rate() {
        return this._howl.rate();
    }
    seek() {
        return this._howl.seek();
    }
    setVolume() {
        return this._howl.volume();
    }
    unload() {
        this._howl.unload();
    }
}; /*! Bundled license information:

howler/dist/howler.js:
  (*!
   *  howler.js v2.2.3
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   *)
  (*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *  
   *  howler.js v2.2.3
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   *)
*/ 

},{"./chunk-HDDX7F4A.mjs":"2Aqr0","./chunk-ZWH2ESXT.mjs":"jX5B9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kZA5L"], null, "parcelRequire94c2")

//# sourceMappingURL=dotlottie-audio-75C54RUV.e0a1525c.js.map
