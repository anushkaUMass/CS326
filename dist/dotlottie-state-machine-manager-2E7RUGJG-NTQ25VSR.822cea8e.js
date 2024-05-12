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
})({"kG1bl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "808c0ac9822cea8e";
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

},{}],"4OkIX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DotLottieStateMachineManager", ()=>Tn) //# sourceMappingURL=out.js.map
;
var _chunkTRZ6EGBZMjs = require("./chunk-TRZ6EGBZ.mjs");
var _chunkHDDX7F4AMjs = require("./chunk-HDDX7F4A.mjs");
var _chunkZWH2ESXTMjs = require("./chunk-ZWH2ESXT.mjs");
var global = arguments[3];
var p = function() {
    return p = Object.assign || function(e) {
        for(var t, n = 1, i = arguments.length; n < i; n++){
            t = arguments[n];
            for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }
        return e;
    }, p.apply(this, arguments);
};
function $t(e, t) {
    var n = {};
    for(var i in e)Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for(var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
    return n;
}
function E(e) {
    var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], i = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && i >= e.length && (e = void 0), {
                value: e && e[i++],
                done: !e
            };
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function O(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var i = n.call(e), r, o = [], a;
    try {
        for(; (t === void 0 || t-- > 0) && !(r = i.next()).done;)o.push(r.value);
    } catch (s) {
        a = {
            error: s
        };
    } finally{
        try {
            r && !r.done && (n = i.return) && n.call(i);
        } finally{
            if (a) throw a.error;
        }
    }
    return o;
}
function V(e, t, n) {
    if (n || arguments.length === 2) for(var i = 0, r = t.length, o; i < r; i++)(o || !(i in t)) && (o || (o = Array.prototype.slice.call(t, 0, i)), o[i] = t[i]);
    return e.concat(o || Array.prototype.slice.call(t));
}
var P;
(function(e) {
    e.Start = "xstate.start", e.Stop = "xstate.stop", e.Raise = "xstate.raise", e.Send = "xstate.send", e.Cancel = "xstate.cancel", e.NullEvent = "", e.Assign = "xstate.assign", e.After = "xstate.after", e.DoneState = "done.state", e.DoneInvoke = "done.invoke", e.Log = "xstate.log", e.Init = "xstate.init", e.Invoke = "xstate.invoke", e.ErrorExecution = "error.execution", e.ErrorCommunication = "error.communication", e.ErrorPlatform = "error.platform", e.ErrorCustom = "xstate.error", e.Update = "xstate.update", e.Pure = "xstate.pure", e.Choose = "xstate.choose";
})(P || (P = {}));
var it;
(function(e) {
    e.Parent = "#_parent", e.Internal = "#_internal";
})(it || (it = {}));
var Mt = P.Start, Ft = P.Stop, pt = P.Raise, Pt = P.Send, oe = P.Cancel, Oe = P.NullEvent, ae = P.Assign;
P.After;
P.DoneState;
var se = P.Log, ke = P.Init, Dt = P.Invoke;
P.ErrorExecution;
var Yt = P.ErrorPlatform, Te = P.ErrorCustom, ce = P.Update, Ne = P.Choose, je = P.Pure, ue = ".", Gt = {}, Rt = "xstate.guard", Ae = "", mt;
function Xt(e, t, n) {
    n === void 0 && (n = ue);
    var i = ft(e, n), r = ft(t, n);
    return A(r) ? A(i) ? r === i : !1 : A(i) ? i in r : Object.keys(i).every(function(o) {
        return o in r ? Xt(i[o], r[o]) : !1;
    });
}
function he(e) {
    try {
        return A(e) || typeof e == "number" ? "".concat(e) : e.type;
    } catch  {
        throw new Error("Events must be strings or objects with a string event.type property.");
    }
}
function zt(e, t) {
    try {
        return ot(e) ? e : e.toString().split(t);
    } catch  {
        throw new Error("'".concat(e, "' is not a valid state path."));
    }
}
function Pe(e) {
    return typeof e == "object" && "value" in e && "context" in e && "event" in e && "_event" in e;
}
function ft(e, t) {
    if (Pe(e)) return e.value;
    if (ot(e)) return Tt(e);
    if (typeof e != "string") return e;
    var n = zt(e, t);
    return Tt(n);
}
function Tt(e) {
    if (e.length === 1) return e[0];
    for(var t = {}, n = t, i = 0; i < e.length - 1; i++)i === e.length - 2 ? n[e[i]] = e[i + 1] : (n[e[i]] = {}, n = n[e[i]]);
    return t;
}
function ct(e, t) {
    for(var n = {}, i = Object.keys(e), r = 0; r < i.length; r++){
        var o = i[r];
        n[o] = t(e[o], o, e, r);
    }
    return n;
}
function te(e, t, n) {
    var i, r, o = {};
    try {
        for(var a = E(Object.keys(e)), s = a.next(); !s.done; s = a.next()){
            var c = s.value, u = e[c];
            n(u) && (o[c] = t(u, c, e));
        }
    } catch (h) {
        i = {
            error: h
        };
    } finally{
        try {
            s && !s.done && (r = a.return) && r.call(a);
        } finally{
            if (i) throw i.error;
        }
    }
    return o;
}
var Le = function(e) {
    return function(t) {
        var n, i, r = t;
        try {
            for(var o = E(e), a = o.next(); !a.done; a = o.next()){
                var s = a.value;
                r = r[s];
            }
        } catch (c) {
            n = {
                error: c
            };
        } finally{
            try {
                a && !a.done && (i = o.return) && i.call(o);
            } finally{
                if (n) throw n.error;
            }
        }
        return r;
    };
};
function Ce(e, t) {
    return function(n) {
        var i, r, o = n;
        try {
            for(var a = E(e), s = a.next(); !s.done; s = a.next()){
                var c = s.value;
                o = o[t][c];
            }
        } catch (u) {
            i = {
                error: u
            };
        } finally{
            try {
                s && !s.done && (r = a.return) && r.call(a);
            } finally{
                if (i) throw i.error;
            }
        }
        return o;
    };
}
function wt(e) {
    if (!e) return [
        []
    ];
    if (A(e)) return [
        [
            e
        ]
    ];
    var t = I(Object.keys(e).map(function(n) {
        var i = e[n];
        return typeof i != "string" && (!i || !Object.keys(i).length) ? [
            [
                n
            ]
        ] : wt(e[n]).map(function(r) {
            return [
                n
            ].concat(r);
        });
    }));
    return t;
}
function I(e) {
    var t;
    return (t = []).concat.apply(t, V([], O(e), !1));
}
function le(e) {
    return ot(e) ? e : [
        e
    ];
}
function U(e) {
    return e === void 0 ? [] : le(e);
}
function Nt(e, t, n) {
    var i, r;
    if (T(e)) return e(t, n.data);
    var o = {};
    try {
        for(var a = E(Object.keys(e)), s = a.next(); !s.done; s = a.next()){
            var c = s.value, u = e[c];
            T(u) ? o[c] = u(t, n.data) : o[c] = u;
        }
    } catch (h) {
        i = {
            error: h
        };
    } finally{
        try {
            s && !s.done && (r = a.return) && r.call(a);
        } finally{
            if (i) throw i.error;
        }
    }
    return o;
}
function Ve(e) {
    return /^(done|error)\./.test(e);
}
function ee(e) {
    return !!(e instanceof Promise || e !== null && (T(e) || typeof e == "object") && T(e.then));
}
function Ie(e) {
    return e !== null && typeof e == "object" && "transition" in e && typeof e.transition == "function";
}
function Me(e, t) {
    var n, i, r = O([
        [],
        []
    ], 2), o = r[0], a = r[1];
    try {
        for(var s = E(e), c = s.next(); !c.done; c = s.next()){
            var u = c.value;
            t(u) ? o.push(u) : a.push(u);
        }
    } catch (h) {
        n = {
            error: h
        };
    } finally{
        try {
            c && !c.done && (i = s.return) && i.call(s);
        } finally{
            if (n) throw n.error;
        }
    }
    return [
        o,
        a
    ];
}
function fe(e, t) {
    return ct(e.states, function(n, i) {
        if (n) {
            var r = (A(t) ? void 0 : t[i]) || (n ? n.current : void 0);
            if (r) return {
                current: r,
                states: fe(n, r)
            };
        }
    });
}
function De(e, t) {
    return {
        current: t,
        states: fe(e, t)
    };
}
function ne(e, t, n, i) {
    var r = e && n.reduce(function(o, a) {
        var s, c, u = a.assignment, h = {
            state: i,
            action: a,
            _event: t
        }, f = {};
        if (T(u)) f = u(o, t.data, h);
        else try {
            for(var l = E(Object.keys(u)), d = l.next(); !d.done; d = l.next()){
                var y = d.value, v = u[y];
                f[y] = T(v) ? v(o, t.data, h) : v;
            }
        } catch (_) {
            s = {
                error: _
            };
        } finally{
            try {
                d && !d.done && (c = l.return) && c.call(l);
            } finally{
                if (s) throw s.error;
            }
        }
        return Object.assign({}, o, f);
    }, e);
    return r;
}
var Re = function() {};
function ot(e) {
    return Array.isArray(e);
}
function T(e) {
    return typeof e == "function";
}
function A(e) {
    return typeof e == "string";
}
function de(e, t) {
    if (e) return A(e) ? {
        type: Rt,
        name: e,
        predicate: t ? t[e] : void 0
    } : T(e) ? {
        type: Rt,
        name: e.name,
        predicate: e
    } : e;
}
function ze(e) {
    try {
        return "subscribe" in e && T(e.subscribe);
    } catch  {
        return !1;
    }
}
var X = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
mt = {}, mt[X] = function() {
    return this;
}, mt[Symbol.observable] = function() {
    return this;
};
function rt(e) {
    return !!e && "__xstatenode" in e;
}
function Be(e) {
    return !!e && typeof e.send == "function";
}
function Lt(e, t) {
    return A(e) || typeof e == "number" ? p({
        type: e
    }, t) : e;
}
function R(e, t) {
    if (!A(e) && "$$type" in e && e.$$type === "scxml") return e;
    var n = Lt(e);
    return p({
        name: n.type,
        data: n,
        $$type: "scxml",
        type: "external"
    }, t);
}
function Z(e, t) {
    var n = le(t).map(function(i) {
        return typeof i > "u" || typeof i == "string" || rt(i) ? {
            target: i,
            event: e
        } : p(p({}, i), {
            event: e
        });
    });
    return n;
}
function Je(e) {
    if (!(e === void 0 || e === Ae)) return U(e);
}
function ve(e, t, n, i, r) {
    var o = e.options.guards, a = {
        state: r,
        cond: t,
        _event: i
    };
    if (t.type === Rt) return ((o == null ? void 0 : o[t.name]) || t.predicate)(n, i.data, a);
    var s = o == null ? void 0 : o[t.type];
    if (!s) throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
    return s(n, i.data, a);
}
function pe(e) {
    return typeof e == "string" ? {
        type: e
    } : e;
}
function Et(e, t, n) {
    var i = function() {}, r = typeof e == "object", o = r ? e : null;
    return {
        next: ((r ? e.next : e) || i).bind(o),
        error: ((r ? e.error : t) || i).bind(o),
        complete: ((r ? e.complete : n) || i).bind(o)
    };
}
function _t(e, t) {
    return "".concat(e, ":invocation[").concat(t, "]");
}
function Bt(e) {
    return (e.type === pt || e.type === Pt && e.to === it.Internal) && typeof e.delay != "number";
}
var nt = R({
    type: ke
});
function Jt(e, t) {
    return t && t[e] || void 0;
}
function dt(e, t) {
    var n;
    if (A(e) || typeof e == "number") {
        var i = Jt(e, t);
        T(i) ? n = {
            type: e,
            exec: i
        } : i ? n = i : n = {
            type: e,
            exec: void 0
        };
    } else if (T(e)) n = {
        type: e.name || e.toString(),
        exec: e
    };
    else {
        var i = Jt(e.type, t);
        if (T(i)) n = p(p({}, e), {
            exec: i
        });
        else if (i) {
            var r = i.type || e.type;
            n = p(p(p({}, i), e), {
                type: r
            });
        } else n = e;
    }
    return n;
}
var Q = function(e, t) {
    if (!e) return [];
    var n = ot(e) ? e : [
        e
    ];
    return n.map(function(i) {
        return dt(i, t);
    });
};
function Qt(e) {
    var t = dt(e);
    return p(p({
        id: A(e) ? e : t.id
    }, t), {
        type: t.type
    });
}
function qe(e, t) {
    return {
        type: pt,
        event: typeof e == "function" ? e : Lt(e),
        delay: t ? t.delay : void 0,
        id: t == null ? void 0 : t.id
    };
}
function Ue(e, t, n, i) {
    var r = {
        _event: n
    }, o = R(T(e.event) ? e.event(t, n.data, r) : e.event), a;
    if (A(e.delay)) {
        var s = i && i[e.delay];
        a = T(s) ? s(t, n.data, r) : s;
    } else a = T(e.delay) ? e.delay(t, n.data, r) : e.delay;
    return p(p({}, e), {
        type: pt,
        _event: o,
        delay: a
    });
}
function $e(e, t) {
    return {
        to: t ? t.to : void 0,
        type: Pt,
        event: T(e) ? e : Lt(e),
        delay: t ? t.delay : void 0,
        id: t && t.id !== void 0 ? t.id : T(e) ? e.name : he(e)
    };
}
function Fe(e, t, n, i) {
    var r = {
        _event: n
    }, o = R(T(e.event) ? e.event(t, n.data, r) : e.event), a;
    if (A(e.delay)) {
        var s = i && i[e.delay];
        a = T(s) ? s(t, n.data, r) : s;
    } else a = T(e.delay) ? e.delay(t, n.data, r) : e.delay;
    var c = T(e.to) ? e.to(t, n.data, r) : e.to;
    return p(p({}, e), {
        to: c,
        _event: o,
        event: o.data,
        delay: a
    });
}
var Xe = function(e, t, n) {
    return p(p({}, e), {
        value: A(e.expr) ? e.expr : e.expr(t, n.data, {
            _event: n
        })
    });
}, Qe = function(e) {
    return {
        type: oe,
        sendId: e
    };
};
function He(e) {
    var t = Qt(e);
    return {
        type: P.Start,
        activity: t,
        exec: void 0
    };
}
function We(e) {
    var t = T(e) ? e : Qt(e);
    return {
        type: P.Stop,
        activity: t,
        exec: void 0
    };
}
function Ke(e, t, n) {
    var i = T(e.activity) ? e.activity(t, n.data) : e.activity, r = typeof i == "string" ? {
        id: i
    } : i, o = {
        type: P.Stop,
        activity: r
    };
    return o;
}
function Ze(e, t) {
    var n = t ? "#".concat(t) : "";
    return "".concat(P.After, "(").concat(e, ")").concat(n);
}
function bt(e, t) {
    var n = "".concat(P.DoneState, ".").concat(e), i = {
        type: n,
        data: t
    };
    return i.toString = function() {
        return n;
    }, i;
}
function Ot(e, t) {
    var n = "".concat(P.DoneInvoke, ".").concat(e), i = {
        type: n,
        data: t
    };
    return i.toString = function() {
        return n;
    }, i;
}
function ut(e, t) {
    var n = "".concat(P.ErrorPlatform, ".").concat(e), i = {
        type: n,
        data: t
    };
    return i.toString = function() {
        return n;
    }, i;
}
var Ye = function(e) {
    var t, n, i = [];
    try {
        for(var r = E(e), o = r.next(); !o.done; o = r.next())for(var a = o.value, s = 0; s < a.actions.length;){
            if (a.actions[s].type === ae) {
                i.push(a.actions[s]), a.actions.splice(s, 1);
                continue;
            }
            s++;
        }
    } catch (c) {
        t = {
            error: c
        };
    } finally{
        try {
            o && !o.done && (n = r.return) && n.call(r);
        } finally{
            if (t) throw t.error;
        }
    }
    return i;
};
function jt(e, t, n, i, r, o, a) {
    a === void 0 && (a = !1);
    var s = a ? [] : Ye(r), c = s.length ? ne(n, i, s, t) : n, u = a ? [
        n
    ] : void 0, h = [];
    function f(y, v) {
        var _;
        switch(v.type){
            case pt:
                var g = Ue(v, c, i, e.options.delays);
                return o && typeof g.delay == "number" && o(g, c, i), g;
            case Pt:
                var m = Fe(v, c, i, e.options.delays);
                return o && m.to !== it.Internal && (y === "entry" ? h.push(m) : o(m, c, i)), m;
            case se:
                var b = Xe(v, c, i);
                return o == null || o(b, c, i), b;
            case Ne:
                var S = v, N = (_ = S.conds.find(function(yt) {
                    var $ = de(yt.cond, e.options.guards);
                    return !$ || ve(e, $, c, i, o ? void 0 : t);
                })) === null || _ === void 0 ? void 0 : _.actions;
                if (!N) return [];
                var C = O(jt(e, t, c, i, [
                    {
                        type: y,
                        actions: Q(U(N), e.options.actions)
                    }
                ], o, a), 2), k = C[0], L = C[1];
                return c = L, u == null || u.push(c), k;
            case je:
                var N = v.get(c, i.data);
                if (!N) return [];
                var w = O(jt(e, t, c, i, [
                    {
                        type: y,
                        actions: Q(U(N), e.options.actions)
                    }
                ], o, a), 2), M = w[0], x = w[1];
                return c = x, u == null || u.push(c), M;
            case Ft:
                var b = Ke(v, c, i);
                return o == null || o(b, n, i), b;
            case ae:
                c = ne(c, i, [
                    v
                ], o ? void 0 : t), u == null || u.push(c);
                break;
            default:
                var j = dt(v, e.options.actions), z = j.exec;
                if (o) o(j, c, i);
                else if (z && u) {
                    var B = u.length - 1, at = p(p({}, j), {
                        exec: function(yt) {
                            for(var $ = [], H = 1; H < arguments.length; H++)$[H - 1] = arguments[H];
                            z.apply(void 0, V([
                                u[B]
                            ], O($), !1));
                        }
                    });
                    j = at;
                }
                return j;
        }
    }
    function l(y) {
        var v, _, g = [];
        try {
            for(var m = E(y.actions), b = m.next(); !b.done; b = m.next()){
                var S = b.value, N = f(y.type, S);
                N && (g = g.concat(N));
            }
        } catch (C) {
            v = {
                error: C
            };
        } finally{
            try {
                b && !b.done && (_ = m.return) && _.call(m);
            } finally{
                if (v) throw v.error;
            }
        }
        return h.forEach(function(C) {
            o(C, c, i);
        }), h.length = 0, g;
    }
    var d = I(r.map(l));
    return [
        d,
        c
    ];
}
var tt = function(e, t) {
    var n = t(e);
    return n;
};
function ye(e) {
    var t;
    return t = {
        id: e,
        send: function() {},
        subscribe: function() {
            return {
                unsubscribe: function() {}
            };
        },
        getSnapshot: function() {},
        toJSON: function() {
            return {
                id: e
            };
        }
    }, t[X] = function() {
        return this;
    }, t;
}
function Ge(e, t, n, i) {
    var r, o = pe(e.src), a = (r = t == null ? void 0 : t.options.services) === null || r === void 0 ? void 0 : r[o.type], s = e.data ? Nt(e.data, n, i) : void 0, c = a ? ge(a, e.id, s) : ye(e.id);
    return c.meta = e, c;
}
function ge(e, t, n) {
    var i = ye(t);
    if (i.deferred = !0, rt(e)) {
        var r = i.state = tt(void 0, function() {
            return (n ? e.withContext(n) : e).initialState;
        });
        i.getSnapshot = function() {
            return r;
        };
    }
    return i;
}
function tn(e) {
    try {
        return typeof e.send == "function";
    } catch  {
        return !1;
    }
}
function en(e) {
    return tn(e) && "id" in e;
}
function nn(e) {
    var t;
    return p((t = {
        subscribe: function() {
            return {
                unsubscribe: function() {}
            };
        },
        id: "anonymous",
        getSnapshot: function() {}
    }, t[X] = function() {
        return this;
    }, t), e);
}
var At = function(e) {
    return e.type === "atomic" || e.type === "final";
};
function me(e) {
    return Object.keys(e.states).map(function(t) {
        return e.states[t];
    });
}
function vt(e) {
    return me(e).filter(function(t) {
        return t.type !== "history";
    });
}
function _e(e) {
    var t = [
        e
    ];
    return At(e) ? t : t.concat(I(vt(e).map(_e)));
}
function ht(e, t) {
    var n, i, r, o, a, s, c, u, h = new Set(e), f = qt(h), l = new Set(t);
    try {
        for(var d = E(l), y = d.next(); !y.done; y = d.next())for(var v = y.value, _ = v.parent; _ && !l.has(_);)l.add(_), _ = _.parent;
    } catch (w) {
        n = {
            error: w
        };
    } finally{
        try {
            y && !y.done && (i = d.return) && i.call(d);
        } finally{
            if (n) throw n.error;
        }
    }
    var g = qt(l);
    try {
        for(var m = E(l), b = m.next(); !b.done; b = m.next()){
            var v = b.value;
            if (v.type === "compound" && (!g.get(v) || !g.get(v).length)) f.get(v) ? f.get(v).forEach(function(M) {
                return l.add(M);
            }) : v.initialStateNodes.forEach(function(M) {
                return l.add(M);
            });
            else if (v.type === "parallel") try {
                for(var S = (a = void 0, E(vt(v))), N = S.next(); !N.done; N = S.next()){
                    var C = N.value;
                    l.has(C) || (l.add(C), f.get(C) ? f.get(C).forEach(function(M) {
                        return l.add(M);
                    }) : C.initialStateNodes.forEach(function(M) {
                        return l.add(M);
                    }));
                }
            } catch (M) {
                a = {
                    error: M
                };
            } finally{
                try {
                    N && !N.done && (s = S.return) && s.call(S);
                } finally{
                    if (a) throw a.error;
                }
            }
        }
    } catch (w) {
        r = {
            error: w
        };
    } finally{
        try {
            b && !b.done && (o = m.return) && o.call(m);
        } finally{
            if (r) throw r.error;
        }
    }
    try {
        for(var k = E(l), L = k.next(); !L.done; L = k.next())for(var v = L.value, _ = v.parent; _ && !l.has(_);)l.add(_), _ = _.parent;
    } catch (w) {
        c = {
            error: w
        };
    } finally{
        try {
            L && !L.done && (u = k.return) && u.call(k);
        } finally{
            if (c) throw c.error;
        }
    }
    return l;
}
function be(e, t) {
    var n = t.get(e);
    if (!n) return {};
    if (e.type === "compound") {
        var i = n[0];
        if (i) {
            if (At(i)) return i.key;
        } else return {};
    }
    var r = {};
    return n.forEach(function(o) {
        r[o.key] = be(o, t);
    }), r;
}
function qt(e) {
    var t, n, i = new Map;
    try {
        for(var r = E(e), o = r.next(); !o.done; o = r.next()){
            var a = o.value;
            i.has(a) || i.set(a, []), a.parent && (i.has(a.parent) || i.set(a.parent, []), i.get(a.parent).push(a));
        }
    } catch (s) {
        t = {
            error: s
        };
    } finally{
        try {
            o && !o.done && (n = r.return) && n.call(r);
        } finally{
            if (t) throw t.error;
        }
    }
    return i;
}
function rn(e, t) {
    var n = ht([
        e
    ], t);
    return be(e, qt(n));
}
function lt(e, t) {
    return Array.isArray(e) ? e.some(function(n) {
        return n === t;
    }) : e instanceof Set ? e.has(t) : !1;
}
function on(e) {
    return V([], O(new Set(I(V([], O(e.map(function(t) {
        return t.ownEvents;
    })), !1)))), !1);
}
function kt(e, t) {
    return t.type === "compound" ? vt(t).some(function(n) {
        return n.type === "final" && lt(e, n);
    }) : t.type === "parallel" ? vt(t).every(function(n) {
        return kt(e, n);
    }) : !1;
}
function an(e) {
    return e === void 0 && (e = []), e.reduce(function(t, n) {
        return n.meta !== void 0 && (t[n.id] = n.meta), t;
    }, {});
}
function ie(e) {
    return new Set(I(e.map(function(t) {
        return t.tags;
    })));
}
function xe(e, t) {
    if (e === t) return !0;
    if (e === void 0 || t === void 0) return !1;
    if (A(e) || A(t)) return e === t;
    var n = Object.keys(e), i = Object.keys(t);
    return n.length === i.length && n.every(function(r) {
        return xe(e[r], t[r]);
    });
}
function sn(e) {
    return typeof e != "object" || e === null ? !1 : "value" in e && "_event" in e;
}
function cn(e, t) {
    var n = e.exec, i = p(p({}, e), {
        exec: n !== void 0 ? function() {
            return n(t.context, t.event, {
                action: e,
                state: t,
                _event: t._event
            });
        } : void 0
    });
    return i;
}
var F = function() {
    function e(t) {
        var n = this, i;
        this.actions = [], this.activities = Gt, this.meta = {}, this.events = [], this.value = t.value, this.context = t.context, this._event = t._event, this._sessionid = t._sessionid, this.event = this._event.data, this.historyValue = t.historyValue, this.history = t.history, this.actions = t.actions || [], this.activities = t.activities || Gt, this.meta = an(t.configuration), this.events = t.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = t.configuration, this.transitions = t.transitions, this.children = t.children, this.done = !!t.done, this.tags = (i = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && i !== void 0 ? i : new Set, this.machine = t.machine, Object.defineProperty(this, "nextEvents", {
            get: function() {
                return on(n.configuration);
            }
        });
    }
    return e.from = function(t, n) {
        if (t instanceof e) return t.context !== n ? new e({
            value: t.value,
            context: n,
            _event: t._event,
            _sessionid: null,
            historyValue: t.historyValue,
            history: t.history,
            actions: [],
            activities: t.activities,
            meta: {},
            events: [],
            configuration: [],
            transitions: [],
            children: {}
        }) : t;
        var i = nt;
        return new e({
            value: t,
            context: n,
            _event: i,
            _sessionid: null,
            historyValue: void 0,
            history: void 0,
            actions: [],
            activities: void 0,
            meta: void 0,
            events: [],
            configuration: [],
            transitions: [],
            children: {}
        });
    }, e.create = function(t) {
        return new e(t);
    }, e.inert = function(t, n) {
        if (t instanceof e) {
            if (!t.actions.length) return t;
            var i = nt;
            return new e({
                value: t.value,
                context: n,
                _event: i,
                _sessionid: null,
                historyValue: t.historyValue,
                history: t.history,
                activities: t.activities,
                configuration: t.configuration,
                transitions: [],
                children: {}
            });
        }
        return e.from(t, n);
    }, e.prototype.toStrings = function(t, n) {
        var i = this;
        if (t === void 0 && (t = this.value), n === void 0 && (n = "."), A(t)) return [
            t
        ];
        var r = Object.keys(t);
        return r.concat.apply(r, V([], O(r.map(function(o) {
            return i.toStrings(t[o], n).map(function(a) {
                return o + n + a;
            });
        })), !1));
    }, e.prototype.toJSON = function() {
        var t = this;
        t.configuration, t.transitions;
        var n = t.tags;
        t.machine;
        var i = $t(t, [
            "configuration",
            "transitions",
            "tags",
            "machine"
        ]);
        return p(p({}, i), {
            tags: Array.from(n)
        });
    }, e.prototype.matches = function(t) {
        return Xt(t, this.value);
    }, e.prototype.hasTag = function(t) {
        return this.tags.has(t);
    }, e.prototype.can = function(t) {
        var n;
        Re(!!this.machine);
        var i = (n = this.machine) === null || n === void 0 ? void 0 : n.getTransitionData(this, t);
        return !!(i != null && i.transitions.length) && i.transitions.some(function(r) {
            return r.target !== void 0 || r.actions.length;
        });
    }, e;
}(), un = {
    deferEvents: !1
}, re = function() {
    function e(t) {
        this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = p(p({}, un), t);
    }
    return e.prototype.initialize = function(t) {
        if (this.initialized = !0, t) {
            if (!this.options.deferEvents) {
                this.schedule(t);
                return;
            }
            this.process(t);
        }
        this.flushEvents();
    }, e.prototype.schedule = function(t) {
        if (!this.initialized || this.processingEvent) {
            this.queue.push(t);
            return;
        }
        if (this.queue.length !== 0) throw new Error("Event queue should be empty when it is not processing events");
        this.process(t), this.flushEvents();
    }, e.prototype.clear = function() {
        this.queue = [];
    }, e.prototype.flushEvents = function() {
        for(var t = this.queue.shift(); t;)this.process(t), t = this.queue.shift();
    }, e.prototype.process = function(t) {
        this.processingEvent = !0;
        try {
            t();
        } catch (n) {
            throw this.clear(), n;
        } finally{
            this.processingEvent = !1;
        }
    }, e;
}(), Vt = new Map, hn = 0, st = {
    bookId: function() {
        return "x:".concat(hn++);
    },
    register: function(e, t) {
        return Vt.set(e, t), e;
    },
    get: function(e) {
        return Vt.get(e);
    },
    free: function(e) {
        Vt.delete(e);
    }
};
function Ht() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
}
function ln() {
    var e = Ht();
    if (e && "__xstate__" in e) return e.__xstate__;
}
function fn(e) {
    if (Ht()) {
        var t = ln();
        t && t.register(e);
    }
}
function dn(e, t) {
    t === void 0 && (t = {});
    var n = e.initialState, i = new Set, r = [], o = !1, a = function() {
        if (!o) {
            for(o = !0; r.length > 0;){
                var u = r.shift();
                n = e.transition(n, u, c), i.forEach(function(h) {
                    return h.next(n);
                });
            }
            o = !1;
        }
    }, s = nn({
        id: t.id,
        send: function(u) {
            r.push(u), a();
        },
        getSnapshot: function() {
            return n;
        },
        subscribe: function(u, h, f) {
            var l = Et(u, h, f);
            return i.add(l), l.next(n), {
                unsubscribe: function() {
                    i.delete(l);
                }
            };
        }
    }), c = {
        parent: t.parent,
        self: s,
        id: t.id || "anonymous",
        observers: i
    };
    return n = e.start ? e.start(c) : n, s;
}
var vn = {
    sync: !1,
    autoForward: !1
}, D;
(function(e) {
    e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(D || (D = {}));
var pn = function() {
    function e(t, n) {
        n === void 0 && (n = e.defaultOptions);
        var i = this;
        this.machine = t, this.delayedEventsMap = {}, this.listeners = new Set, this.contextListeners = new Set, this.stopListeners = new Set, this.doneListeners = new Set, this.eventListeners = new Set, this.sendListeners = new Set, this.initialized = !1, this.status = D.NotStarted, this.children = new Map, this.forwardTo = new Set, this._outgoingQueue = [], this.init = this.start, this.send = function(h, f) {
            if (ot(h)) return i.batch(h), i.state;
            var l = R(Lt(h, f));
            if (i.status === D.Stopped) return i.state;
            if (i.status !== D.Running && !i.options.deferEvents) throw new Error('Event "'.concat(l.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(l.data)));
            return i.scheduler.schedule(function() {
                i.forward(l);
                var d = i._nextState(l);
                i.update(d, l);
            }), i._state;
        }, this.sendTo = function(h, f, l) {
            var d = i.parent && (f === it.Parent || i.parent.id === f), y = d ? i.parent : A(f) ? f === it.Internal ? i : i.children.get(f) || st.get(f) : Be(f) ? f : void 0;
            if (!y) {
                if (!d) throw new Error("Unable to send event to child '".concat(f, "' from service '").concat(i.id, "'."));
                return;
            }
            if ("machine" in y) {
                if (i.status !== D.Stopped || i.parent !== y || i.state.done) {
                    var v = p(p({}, h), {
                        name: h.name === Te ? "".concat(ut(i.id)) : h.name,
                        origin: i.sessionId
                    });
                    !l && i.machine.config.predictableActionArguments ? i._outgoingQueue.push([
                        y,
                        v
                    ]) : y.send(v);
                }
            } else !l && i.machine.config.predictableActionArguments ? i._outgoingQueue.push([
                y,
                h.data
            ]) : y.send(h.data);
        }, this._exec = function(h, f, l, d) {
            d === void 0 && (d = i.machine.options.actions);
            var y = h.exec || Jt(h.type, d), v = T(y) ? y : y ? y.exec : h.exec;
            if (v) try {
                return v(f, l.data, i.machine.config.predictableActionArguments ? {
                    action: h,
                    _event: l
                } : {
                    action: h,
                    state: i.state,
                    _event: l
                });
            } catch (B) {
                throw i.parent && i.parent.send({
                    type: "xstate.error",
                    data: B
                }), B;
            }
            switch(h.type){
                case pt:
                    var _ = h;
                    i.defer(_);
                    break;
                case Pt:
                    var g = h;
                    if (typeof g.delay == "number") {
                        i.defer(g);
                        return;
                    } else g.to ? i.sendTo(g._event, g.to, l === nt) : i.send(g._event);
                    break;
                case oe:
                    i.cancel(h.sendId);
                    break;
                case Mt:
                    if (i.status !== D.Running) return;
                    var m = h.activity;
                    if (!i.machine.config.predictableActionArguments && !i.state.activities[m.id || m.type]) break;
                    if (m.type === P.Invoke) {
                        var b = pe(m.src), S = i.machine.options.services ? i.machine.options.services[b.type] : void 0, N = m.id, C = m.data, k = "autoForward" in m ? m.autoForward : !!m.forward;
                        if (!S) return;
                        var L = C ? Nt(C, f, l) : void 0;
                        if (typeof S == "string") return;
                        var w = T(S) ? S(f, l.data, {
                            data: L,
                            src: b,
                            meta: m.meta
                        }) : S;
                        if (!w) return;
                        var M = void 0;
                        rt(w) && (w = L ? w.withContext(L) : w, M = {
                            autoForward: k
                        }), i.spawn(w, N, M);
                    } else i.spawnActivity(m);
                    break;
                case Ft:
                    i.stopChild(h.activity.id);
                    break;
                case se:
                    var x = h, j = x.label, z = x.value;
                    j ? i.logger(j, z) : i.logger(z);
                    break;
            }
        };
        var r = p(p({}, e.defaultOptions), n), o = r.clock, a = r.logger, s = r.parent, c = r.id, u = c !== void 0 ? c : t.id;
        this.id = u, this.logger = a, this.clock = o, this.parent = s, this.options = r, this.scheduler = new re({
            deferEvents: this.options.deferEvents
        }), this.sessionId = st.bookId();
    }
    return Object.defineProperty(e.prototype, "initialState", {
        get: function() {
            var t = this;
            return this._initialState ? this._initialState : tt(this, function() {
                return t._initialState = t.machine.initialState, t._initialState;
            });
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "state", {
        get: function() {
            return this._state;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.execute = function(t, n) {
        var i, r;
        try {
            for(var o = E(t.actions), a = o.next(); !a.done; a = o.next()){
                var s = a.value;
                this.exec(s, t, n);
            }
        } catch (c) {
            i = {
                error: c
            };
        } finally{
            try {
                a && !a.done && (r = o.return) && r.call(o);
            } finally{
                if (i) throw i.error;
            }
        }
    }, e.prototype.update = function(t, n) {
        var i, r, o, a, s, c, u, h, f = this;
        if (t._sessionid = this.sessionId, this._state = t, (!this.machine.config.predictableActionArguments || n === nt) && this.options.execute) this.execute(this.state);
        else for(var l = void 0; l = this._outgoingQueue.shift();)l[0].send(l[1]);
        if (this.children.forEach(function(w) {
            f.state.children[w.id] = w;
        }), this.devTools && this.devTools.send(n.data, t), t.event) try {
            for(var d = E(this.eventListeners), y = d.next(); !y.done; y = d.next()){
                var v = y.value;
                v(t.event);
            }
        } catch (w) {
            i = {
                error: w
            };
        } finally{
            try {
                y && !y.done && (r = d.return) && r.call(d);
            } finally{
                if (i) throw i.error;
            }
        }
        try {
            for(var _ = E(this.listeners), g = _.next(); !g.done; g = _.next()){
                var v = g.value;
                v(t, t.event);
            }
        } catch (w) {
            o = {
                error: w
            };
        } finally{
            try {
                g && !g.done && (a = _.return) && a.call(_);
            } finally{
                if (o) throw o.error;
            }
        }
        try {
            for(var m = E(this.contextListeners), b = m.next(); !b.done; b = m.next()){
                var S = b.value;
                S(this.state.context, this.state.history ? this.state.history.context : void 0);
            }
        } catch (w) {
            s = {
                error: w
            };
        } finally{
            try {
                b && !b.done && (c = m.return) && c.call(m);
            } finally{
                if (s) throw s.error;
            }
        }
        if (this.state.done) {
            var N = t.configuration.find(function(w) {
                return w.type === "final" && w.parent === f.machine;
            }), C = N && N.doneData ? Nt(N.doneData, t.context, n) : void 0;
            this._doneEvent = Ot(this.id, C);
            try {
                for(var k = E(this.doneListeners), L = k.next(); !L.done; L = k.next()){
                    var v = L.value;
                    v(this._doneEvent);
                }
            } catch (w) {
                u = {
                    error: w
                };
            } finally{
                try {
                    L && !L.done && (h = k.return) && h.call(k);
                } finally{
                    if (u) throw u.error;
                }
            }
            this._stop(), this._stopChildren(), st.free(this.sessionId);
        }
    }, e.prototype.onTransition = function(t) {
        return this.listeners.add(t), this.status === D.Running && t(this.state, this.state.event), this;
    }, e.prototype.subscribe = function(t, n, i) {
        var r = this, o = Et(t, n, i);
        this.listeners.add(o.next), this.status !== D.NotStarted && o.next(this.state);
        var a = function() {
            r.doneListeners.delete(a), r.stopListeners.delete(a), o.complete();
        };
        return this.status === D.Stopped ? o.complete() : (this.onDone(a), this.onStop(a)), {
            unsubscribe: function() {
                r.listeners.delete(o.next), r.doneListeners.delete(a), r.stopListeners.delete(a);
            }
        };
    }, e.prototype.onEvent = function(t) {
        return this.eventListeners.add(t), this;
    }, e.prototype.onSend = function(t) {
        return this.sendListeners.add(t), this;
    }, e.prototype.onChange = function(t) {
        return this.contextListeners.add(t), this;
    }, e.prototype.onStop = function(t) {
        return this.stopListeners.add(t), this;
    }, e.prototype.onDone = function(t) {
        return this.status === D.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t), this;
    }, e.prototype.off = function(t) {
        return this.listeners.delete(t), this.eventListeners.delete(t), this.sendListeners.delete(t), this.stopListeners.delete(t), this.doneListeners.delete(t), this.contextListeners.delete(t), this;
    }, e.prototype.start = function(t) {
        var n = this;
        if (this.status === D.Running) return this;
        this.machine._init(), st.register(this.sessionId, this), this.initialized = !0, this.status = D.Running;
        var i = t === void 0 ? this.initialState : tt(this, function() {
            return sn(t) ? n.machine.resolveState(t) : n.machine.resolveState(F.from(t, n.machine.context));
        });
        return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
            n.update(i, nt);
        }), this;
    }, e.prototype._stopChildren = function() {
        this.children.forEach(function(t) {
            T(t.stop) && t.stop();
        }), this.children.clear();
    }, e.prototype._stop = function() {
        var t, n, i, r, o, a, s, c, u, h;
        try {
            for(var f = E(this.listeners), l = f.next(); !l.done; l = f.next()){
                var d = l.value;
                this.listeners.delete(d);
            }
        } catch (k) {
            t = {
                error: k
            };
        } finally{
            try {
                l && !l.done && (n = f.return) && n.call(f);
            } finally{
                if (t) throw t.error;
            }
        }
        try {
            for(var y = E(this.stopListeners), v = y.next(); !v.done; v = y.next()){
                var d = v.value;
                d(), this.stopListeners.delete(d);
            }
        } catch (k) {
            i = {
                error: k
            };
        } finally{
            try {
                v && !v.done && (r = y.return) && r.call(y);
            } finally{
                if (i) throw i.error;
            }
        }
        try {
            for(var _ = E(this.contextListeners), g = _.next(); !g.done; g = _.next()){
                var d = g.value;
                this.contextListeners.delete(d);
            }
        } catch (k) {
            o = {
                error: k
            };
        } finally{
            try {
                g && !g.done && (a = _.return) && a.call(_);
            } finally{
                if (o) throw o.error;
            }
        }
        try {
            for(var m = E(this.doneListeners), b = m.next(); !b.done; b = m.next()){
                var d = b.value;
                this.doneListeners.delete(d);
            }
        } catch (k) {
            s = {
                error: k
            };
        } finally{
            try {
                b && !b.done && (c = m.return) && c.call(m);
            } finally{
                if (s) throw s.error;
            }
        }
        if (!this.initialized) return this;
        this.initialized = !1, this.status = D.Stopped, this._initialState = void 0;
        try {
            for(var S = E(Object.keys(this.delayedEventsMap)), N = S.next(); !N.done; N = S.next()){
                var C = N.value;
                this.clock.clearTimeout(this.delayedEventsMap[C]);
            }
        } catch (k) {
            u = {
                error: k
            };
        } finally{
            try {
                N && !N.done && (h = S.return) && h.call(S);
            } finally{
                if (u) throw u.error;
            }
        }
        this.scheduler.clear(), this.scheduler = new re({
            deferEvents: this.options.deferEvents
        });
    }, e.prototype.stop = function() {
        var t = this, n = this.scheduler;
        return this._stop(), n.schedule(function() {
            var i = R({
                type: "xstate.stop"
            }), r = tt(t, function() {
                var o = I(V([], O(t.state.configuration), !1).sort(function(h, f) {
                    return f.order - h.order;
                }).map(function(h) {
                    return Q(h.onExit, t.machine.options.actions);
                })), a = O(jt(t.machine, t.state, t.state.context, i, [
                    {
                        type: "exit",
                        actions: o
                    }
                ], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2), s = a[0], c = a[1], u = new F({
                    value: t.state.value,
                    context: c,
                    _event: i,
                    _sessionid: t.sessionId,
                    historyValue: void 0,
                    history: t.state,
                    actions: s.filter(function(h) {
                        return !Bt(h);
                    }),
                    activities: {},
                    events: [],
                    configuration: [],
                    transitions: [],
                    children: {},
                    done: t.state.done,
                    tags: t.state.tags,
                    machine: t.machine
                });
                return u.changed = !0, u;
            });
            t.update(r, i), t._stopChildren(), st.free(t.sessionId);
        }), this;
    }, e.prototype.batch = function(t) {
        var n = this;
        if (!(this.status === D.NotStarted && this.options.deferEvents)) {
            if (this.status !== D.Running) throw new Error("".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
        }
        if (t.length) {
            var i = !!this.machine.config.predictableActionArguments && this._exec;
            this.scheduler.schedule(function() {
                var r, o, a = n.state, s = !1, c = [], u = function(d) {
                    var y = R(d);
                    n.forward(y), a = tt(n, function() {
                        return n.machine.transition(a, y, void 0, i || void 0);
                    }), c.push.apply(c, V([], O(n.machine.config.predictableActionArguments ? a.actions : a.actions.map(function(v) {
                        return cn(v, a);
                    })), !1)), s = s || !!a.changed;
                };
                try {
                    for(var h = E(t), f = h.next(); !f.done; f = h.next()){
                        var l = f.value;
                        u(l);
                    }
                } catch (d) {
                    r = {
                        error: d
                    };
                } finally{
                    try {
                        f && !f.done && (o = h.return) && o.call(h);
                    } finally{
                        if (r) throw r.error;
                    }
                }
                a.changed = s, a.actions = c, n.update(a, R(t[t.length - 1]));
            });
        }
    }, e.prototype.sender = function(t) {
        return this.send.bind(this, t);
    }, e.prototype._nextState = function(t, n) {
        var i = this;
        n === void 0 && (n = !!this.machine.config.predictableActionArguments && this._exec);
        var r = R(t);
        if (r.name.indexOf(Yt) === 0 && !this.state.nextEvents.some(function(a) {
            return a.indexOf(Yt) === 0;
        })) throw r.data.data;
        var o = tt(this, function() {
            return i.machine.transition(i.state, r, void 0, n || void 0);
        });
        return o;
    }, e.prototype.nextState = function(t) {
        return this._nextState(t, !1);
    }, e.prototype.forward = function(t) {
        var n, i;
        try {
            for(var r = E(this.forwardTo), o = r.next(); !o.done; o = r.next()){
                var a = o.value, s = this.children.get(a);
                if (!s) throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(a, "'."));
                s.send(t);
            }
        } catch (c) {
            n = {
                error: c
            };
        } finally{
            try {
                o && !o.done && (i = r.return) && i.call(r);
            } finally{
                if (n) throw n.error;
            }
        }
    }, e.prototype.defer = function(t) {
        var n = this, i = this.clock.setTimeout(function() {
            "to" in t && t.to ? n.sendTo(t._event, t.to, !0) : n.send(t._event);
        }, t.delay);
        t.id && (this.delayedEventsMap[t.id] = i);
    }, e.prototype.cancel = function(t) {
        this.clock.clearTimeout(this.delayedEventsMap[t]), delete this.delayedEventsMap[t];
    }, e.prototype.exec = function(t, n, i) {
        i === void 0 && (i = this.machine.options.actions), this._exec(t, n.context, n._event, i);
    }, e.prototype.removeChild = function(t) {
        var n;
        this.children.delete(t), this.forwardTo.delete(t), (n = this.state) === null || n === void 0 || delete n.children[t];
    }, e.prototype.stopChild = function(t) {
        var n = this.children.get(t);
        n && (this.removeChild(t), T(n.stop) && n.stop());
    }, e.prototype.spawn = function(t, n, i) {
        if (this.status !== D.Running) return ge(t, n);
        if (ee(t)) return this.spawnPromise(Promise.resolve(t), n);
        if (T(t)) return this.spawnCallback(t, n);
        if (en(t)) return this.spawnActor(t, n);
        if (ze(t)) return this.spawnObservable(t, n);
        if (rt(t)) return this.spawnMachine(t, p(p({}, i), {
            id: n
        }));
        if (Ie(t)) return this.spawnBehavior(t, n);
        throw new Error('Unable to spawn entity "'.concat(n, '" of type "').concat(typeof t, '".'));
    }, e.prototype.spawnMachine = function(t, n) {
        var i = this;
        n === void 0 && (n = {});
        var r = new e(t, p(p({}, this.options), {
            parent: this,
            id: n.id || t.id
        })), o = p(p({}, vn), n);
        o.sync && r.onTransition(function(s) {
            i.send(ce, {
                state: s,
                id: r.id
            });
        });
        var a = r;
        return this.children.set(r.id, a), o.autoForward && this.forwardTo.add(r.id), r.onDone(function(s) {
            i.removeChild(r.id), i.send(R(s, {
                origin: r.id
            }));
        }).start(), a;
    }, e.prototype.spawnBehavior = function(t, n) {
        var i = dn(t, {
            id: n,
            parent: this
        });
        return this.children.set(n, i), i;
    }, e.prototype.spawnPromise = function(t, n) {
        var i, r = this, o = !1, a;
        t.then(function(c) {
            o || (a = c, r.removeChild(n), r.send(R(Ot(n, c), {
                origin: n
            })));
        }, function(c) {
            if (!o) {
                r.removeChild(n);
                var u = ut(n, c);
                try {
                    r.send(R(u, {
                        origin: n
                    }));
                } catch  {
                    r.devTools && r.devTools.send(u, r.state), r.machine.strict && r.stop();
                }
            }
        });
        var s = (i = {
            id: n,
            send: function() {},
            subscribe: function(c, u, h) {
                var f = Et(c, u, h), l = !1;
                return t.then(function(d) {
                    l || (f.next(d), !l && f.complete());
                }, function(d) {
                    l || f.error(d);
                }), {
                    unsubscribe: function() {
                        return l = !0;
                    }
                };
            },
            stop: function() {
                o = !0;
            },
            toJSON: function() {
                return {
                    id: n
                };
            },
            getSnapshot: function() {
                return a;
            }
        }, i[X] = function() {
            return this;
        }, i);
        return this.children.set(n, s), s;
    }, e.prototype.spawnCallback = function(t, n) {
        var i, r = this, o = !1, a = new Set, s = new Set, c, u = function(l) {
            c = l, s.forEach(function(d) {
                return d(l);
            }), !o && r.send(R(l, {
                origin: n
            }));
        }, h;
        try {
            h = t(u, function(l) {
                a.add(l);
            });
        } catch (l) {
            this.send(ut(n, l));
        }
        if (ee(h)) return this.spawnPromise(h, n);
        var f = (i = {
            id: n,
            send: function(l) {
                return a.forEach(function(d) {
                    return d(l);
                });
            },
            subscribe: function(l) {
                var d = Et(l);
                return s.add(d.next), {
                    unsubscribe: function() {
                        s.delete(d.next);
                    }
                };
            },
            stop: function() {
                o = !0, T(h) && h();
            },
            toJSON: function() {
                return {
                    id: n
                };
            },
            getSnapshot: function() {
                return c;
            }
        }, i[X] = function() {
            return this;
        }, i);
        return this.children.set(n, f), f;
    }, e.prototype.spawnObservable = function(t, n) {
        var i, r = this, o, a = t.subscribe(function(c) {
            o = c, r.send(R(c, {
                origin: n
            }));
        }, function(c) {
            r.removeChild(n), r.send(R(ut(n, c), {
                origin: n
            }));
        }, function() {
            r.removeChild(n), r.send(R(Ot(n), {
                origin: n
            }));
        }), s = (i = {
            id: n,
            send: function() {},
            subscribe: function(c, u, h) {
                return t.subscribe(c, u, h);
            },
            stop: function() {
                return a.unsubscribe();
            },
            getSnapshot: function() {
                return o;
            },
            toJSON: function() {
                return {
                    id: n
                };
            }
        }, i[X] = function() {
            return this;
        }, i);
        return this.children.set(n, s), s;
    }, e.prototype.spawnActor = function(t, n) {
        return this.children.set(n, t), t;
    }, e.prototype.spawnActivity = function(t) {
        var n = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
        if (n) {
            var i = n(this.state.context, t);
            this.spawnEffect(t.id, i);
        }
    }, e.prototype.spawnEffect = function(t, n) {
        var i;
        this.children.set(t, (i = {
            id: t,
            send: function() {},
            subscribe: function() {
                return {
                    unsubscribe: function() {}
                };
            },
            stop: n || void 0,
            getSnapshot: function() {},
            toJSON: function() {
                return {
                    id: t
                };
            }
        }, i[X] = function() {
            return this;
        }, i));
    }, e.prototype.attachDev = function() {
        var t = Ht();
        if (this.options.devTools && t) {
            if (t.__REDUX_DEVTOOLS_EXTENSION__) {
                var n = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
                this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(p(p({
                    name: this.id,
                    autoPause: !0,
                    stateSanitizer: function(i) {
                        return {
                            value: i.value,
                            context: i.context,
                            actions: i.actions
                        };
                    }
                }, n), {
                    features: p({
                        jump: !1,
                        skip: !1
                    }, n ? n.features : void 0)
                }), this.machine), this.devTools.init(this.state);
            }
            fn(this);
        }
    }, e.prototype.toJSON = function() {
        return {
            id: this.id
        };
    }, e.prototype[X] = function() {
        return this;
    }, e.prototype.getSnapshot = function() {
        return this.status === D.NotStarted ? this.initialState : this._state;
    }, e.defaultOptions = {
        execute: !0,
        deferEvents: !0,
        clock: {
            setTimeout: function(t, n) {
                return setTimeout(t, n);
            },
            clearTimeout: function(t) {
                return clearTimeout(t);
            }
        },
        logger: console.log.bind(console),
        devTools: !1
    }, e.interpret = Se, e;
}();
function Se(e, t) {
    var n = new pn(e, t);
    return n;
}
function yn(e) {
    if (typeof e == "string") {
        var t = {
            type: e
        };
        return t.toString = function() {
            return e;
        }, t;
    }
    return e;
}
function xt(e) {
    return p(p({
        type: Dt
    }, e), {
        toJSON: function() {
            e.onDone, e.onError;
            var t = $t(e, [
                "onDone",
                "onError"
            ]);
            return p(p({}, t), {
                type: Dt,
                src: yn(e.src)
            });
        }
    });
}
var St = "", Ut = "#", It = "*", Y = {}, G = function(e) {
    return e[0] === Ut;
}, gn = function() {
    return {
        actions: {},
        guards: {},
        services: {},
        activities: {},
        delays: {}
    };
}, mn = function() {
    function e(t, n, i, r) {
        i === void 0 && (i = "context" in t ? t.context : void 0);
        var o = this, a;
        this.config = t, this._context = i, this.order = -1, this.__xstatenode = !0, this.__cache = {
            events: void 0,
            relativeValue: new Map,
            initialStateValue: void 0,
            initialState: void 0,
            on: void 0,
            transitions: void 0,
            candidates: {},
            delayedTransitions: void 0
        }, this.idMap = {}, this.tags = [], this.options = Object.assign(gn(), n), this.parent = r == null ? void 0 : r.parent, this.key = this.config.key || (r == null ? void 0 : r.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : ue), this.id = this.config.id || V([
            this.machine.key
        ], O(this.path), !1).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (a = this.config.schema) !== null && a !== void 0 ? a : {}, this.description = this.config.description, this.initial = this.config.initial, this.states = this.config.states ? ct(this.config.states, function(u, h) {
            var f, l = new e(u, {}, void 0, {
                parent: o,
                key: h
            });
            return Object.assign(o.idMap, p((f = {}, f[l.id] = l, f), l.idMap)), l;
        }) : Y;
        var s = 0;
        function c(u) {
            var h, f;
            u.order = s++;
            try {
                for(var l = E(me(u)), d = l.next(); !d.done; d = l.next()){
                    var y = d.value;
                    c(y);
                }
            } catch (v) {
                h = {
                    error: v
                };
            } finally{
                try {
                    d && !d.done && (f = l.return) && f.call(l);
                } finally{
                    if (h) throw h.error;
                }
            }
        }
        c(this), this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(u) {
            var h = u.event;
            return h === St;
        }) : St in this.config.on : !1), this.strict = !!this.config.strict, this.onEntry = U(this.config.entry || this.config.onEntry).map(function(u) {
            return dt(u);
        }), this.onExit = U(this.config.exit || this.config.onExit).map(function(u) {
            return dt(u);
        }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = U(this.config.invoke).map(function(u, h) {
            var f, l;
            if (rt(u)) {
                var d = _t(o.id, h);
                return o.machine.options.services = p((f = {}, f[d] = u, f), o.machine.options.services), xt({
                    src: d,
                    id: d
                });
            } else if (A(u.src)) {
                var d = u.id || _t(o.id, h);
                return xt(p(p({}, u), {
                    id: d,
                    src: u.src
                }));
            } else if (rt(u.src) || T(u.src)) {
                var d = u.id || _t(o.id, h);
                return o.machine.options.services = p((l = {}, l[d] = u.src, l), o.machine.options.services), xt(p(p({
                    id: d
                }, u), {
                    src: d
                }));
            } else {
                var y = u.src;
                return xt(p(p({
                    id: _t(o.id, h)
                }, u), {
                    src: y
                }));
            }
        }), this.activities = U(this.config.activities).concat(this.invoke).map(function(u) {
            return Qt(u);
        }), this.transition = this.transition.bind(this), this.tags = U(this.config.tags);
    }
    return e.prototype._init = function() {
        this.__cache.transitions || _e(this).forEach(function(t) {
            return t.on;
        });
    }, e.prototype.withConfig = function(t, n) {
        var i = this.options, r = i.actions, o = i.activities, a = i.guards, s = i.services, c = i.delays;
        return new e(this.config, {
            actions: p(p({}, r), t.actions),
            activities: p(p({}, o), t.activities),
            guards: p(p({}, a), t.guards),
            services: p(p({}, s), t.services),
            delays: p(p({}, c), t.delays)
        }, n != null ? n : this.context);
    }, e.prototype.withContext = function(t) {
        return new e(this.config, this.options, t);
    }, Object.defineProperty(e.prototype, "context", {
        get: function() {
            return T(this._context) ? this._context() : this._context;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "definition", {
        get: function() {
            return {
                id: this.id,
                key: this.key,
                version: this.version,
                context: this.context,
                type: this.type,
                initial: this.initial,
                history: this.history,
                states: ct(this.states, function(t) {
                    return t.definition;
                }),
                on: this.on,
                transitions: this.transitions,
                entry: this.onEntry,
                exit: this.onExit,
                activities: this.activities || [],
                meta: this.meta,
                order: this.order || -1,
                data: this.doneData,
                invoke: this.invoke,
                description: this.description,
                tags: this.tags
            };
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.toJSON = function() {
        return this.definition;
    }, Object.defineProperty(e.prototype, "on", {
        get: function() {
            if (this.__cache.on) return this.__cache.on;
            var t = this.transitions;
            return this.__cache.on = t.reduce(function(n, i) {
                return n[i.eventType] = n[i.eventType] || [], n[i.eventType].push(i), n;
            }, {});
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "after", {
        get: function() {
            return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "transitions", {
        get: function() {
            return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.getCandidates = function(t) {
        if (this.__cache.candidates[t]) return this.__cache.candidates[t];
        var n = t === St, i = this.transitions.filter(function(r) {
            var o = r.eventType === t;
            return n ? o : o || r.eventType === It;
        });
        return this.__cache.candidates[t] = i, i;
    }, e.prototype.getDelayedTransitions = function() {
        var t = this, n = this.config.after;
        if (!n) return [];
        var i = function(o, a) {
            var s = T(o) ? "".concat(t.id, ":delay[").concat(a, "]") : o, c = Ze(s, t.id);
            return t.onEntry.push($e(c, {
                delay: o
            })), t.onExit.push(Qe(c)), c;
        }, r = ot(n) ? n.map(function(o, a) {
            var s = i(o.delay, a);
            return p(p({}, o), {
                event: s
            });
        }) : I(Object.keys(n).map(function(o, a) {
            var s = n[o], c = A(s) ? {
                target: s
            } : s, u = isNaN(+o) ? o : +o, h = i(u, a);
            return U(c).map(function(f) {
                return p(p({}, f), {
                    event: h,
                    delay: u
                });
            });
        }));
        return r.map(function(o) {
            var a = o.delay;
            return p(p({}, t.formatTransition(o)), {
                delay: a
            });
        });
    }, e.prototype.getStateNodes = function(t) {
        var n, i = this;
        if (!t) return [];
        var r = t instanceof F ? t.value : ft(t, this.delimiter);
        if (A(r)) {
            var o = this.getStateNode(r).initial;
            return o !== void 0 ? this.getStateNodes((n = {}, n[r] = o, n)) : [
                this,
                this.states[r]
            ];
        }
        var a = Object.keys(r), s = [
            this
        ];
        return s.push.apply(s, V([], O(I(a.map(function(c) {
            return i.getStateNode(c).getStateNodes(r[c]);
        }))), !1)), s;
    }, e.prototype.handles = function(t) {
        var n = he(t);
        return this.events.includes(n);
    }, e.prototype.resolveState = function(t) {
        var n = t instanceof F ? t : F.create(t), i = Array.from(ht([], this.getStateNodes(n.value)));
        return new F(p(p({}, n), {
            value: this.resolve(n.value),
            configuration: i,
            done: kt(i, this),
            tags: ie(i),
            machine: this.machine
        }));
    }, e.prototype.transitionLeafNode = function(t, n, i) {
        var r = this.getStateNode(t), o = r.next(n, i);
        return !o || !o.transitions.length ? this.next(n, i) : o;
    }, e.prototype.transitionCompoundNode = function(t, n, i) {
        var r = Object.keys(t), o = this.getStateNode(r[0]), a = o._transition(t[r[0]], n, i);
        return !a || !a.transitions.length ? this.next(n, i) : a;
    }, e.prototype.transitionParallelNode = function(t, n, i) {
        var r, o, a = {};
        try {
            for(var s = E(Object.keys(t)), c = s.next(); !c.done; c = s.next()){
                var u = c.value, h = t[u];
                if (h) {
                    var f = this.getStateNode(u), l = f._transition(h, n, i);
                    l && (a[u] = l);
                }
            }
        } catch (g) {
            r = {
                error: g
            };
        } finally{
            try {
                c && !c.done && (o = s.return) && o.call(s);
            } finally{
                if (r) throw r.error;
            }
        }
        var d = Object.keys(a).map(function(g) {
            return a[g];
        }), y = I(d.map(function(g) {
            return g.transitions;
        })), v = d.some(function(g) {
            return g.transitions.length > 0;
        });
        if (!v) return this.next(n, i);
        var _ = I(Object.keys(a).map(function(g) {
            return a[g].configuration;
        }));
        return {
            transitions: y,
            exitSet: I(d.map(function(g) {
                return g.exitSet;
            })),
            configuration: _,
            source: n,
            actions: I(Object.keys(a).map(function(g) {
                return a[g].actions;
            }))
        };
    }, e.prototype._transition = function(t, n, i) {
        return A(t) ? this.transitionLeafNode(t, n, i) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, n, i) : this.transitionParallelNode(t, n, i);
    }, e.prototype.getTransitionData = function(t, n) {
        return this._transition(t.value, t, R(n));
    }, e.prototype.next = function(t, n) {
        var i, r, o = this, a = n.name, s = [], c = [], u;
        try {
            for(var h = E(this.getCandidates(a)), f = h.next(); !f.done; f = h.next()){
                var l = f.value, d = l.cond, y = l.in, v = t.context, _ = y ? A(y) && G(y) ? t.matches(ft(this.getStateNodeById(y).path, this.delimiter)) : Xt(ft(y, this.delimiter), Le(this.path.slice(0, -2))(t.value)) : !0, g = !1;
                try {
                    g = !d || ve(this.machine, d, v, n, t);
                } catch (S) {
                    throw new Error("Unable to evaluate guard '".concat(d.name || d.type, "' in transition for event '").concat(a, "' in state node '").concat(this.id, `':
`).concat(S.message));
                }
                if (g && _) {
                    l.target !== void 0 && (c = l.target), s.push.apply(s, V([], O(l.actions), !1)), u = l;
                    break;
                }
            }
        } catch (S) {
            i = {
                error: S
            };
        } finally{
            try {
                f && !f.done && (r = h.return) && r.call(h);
            } finally{
                if (i) throw i.error;
            }
        }
        if (u) {
            if (!c.length) return {
                transitions: [
                    u
                ],
                exitSet: [],
                configuration: t.value ? [
                    this
                ] : [],
                source: t,
                actions: s
            };
            var m = I(c.map(function(S) {
                return o.getRelativeStateNodes(S, t.historyValue);
            })), b = !!u.internal;
            return {
                transitions: [
                    u
                ],
                exitSet: b ? [] : I(c.map(function(S) {
                    return o.getPotentiallyReenteringNodes(S);
                })),
                configuration: m,
                source: t,
                actions: s
            };
        }
    }, e.prototype.getPotentiallyReenteringNodes = function(t) {
        if (this.order < t.order) return [
            this
        ];
        for(var n = [], i = this, r = t; i && i !== r;)n.push(i), i = i.parent;
        return i !== r ? [] : (n.push(r), n);
    }, e.prototype.getActions = function(t, n, i, r, o, a, s) {
        var c, u, h, f, l = this, d = a ? ht([], this.getStateNodes(a.value)) : [], y = new Set;
        try {
            for(var v = E(Array.from(t).sort(function(x, j) {
                return x.order - j.order;
            })), _ = v.next(); !_.done; _ = v.next()){
                var g = _.value;
                (!lt(d, g) || lt(i.exitSet, g) || g.parent && y.has(g.parent)) && y.add(g);
            }
        } catch (x) {
            c = {
                error: x
            };
        } finally{
            try {
                _ && !_.done && (u = v.return) && u.call(v);
            } finally{
                if (c) throw c.error;
            }
        }
        try {
            for(var m = E(d), b = m.next(); !b.done; b = m.next()){
                var g = b.value;
                (!lt(t, g) || lt(i.exitSet, g.parent)) && i.exitSet.push(g);
            }
        } catch (x) {
            h = {
                error: x
            };
        } finally{
            try {
                b && !b.done && (f = m.return) && f.call(m);
            } finally{
                if (h) throw h.error;
            }
        }
        i.exitSet.sort(function(x, j) {
            return j.order - x.order;
        });
        var S = Array.from(y).sort(function(x, j) {
            return x.order - j.order;
        }), N = new Set(i.exitSet), C = I(S.map(function(x) {
            var j = [];
            if (x.type !== "final") return j;
            var z = x.parent;
            if (!z.parent) return j;
            j.push(bt(x.id, x.doneData), bt(z.id, x.doneData ? Nt(x.doneData, r, o) : void 0));
            var B = z.parent;
            return B.type === "parallel" && vt(B).every(function(at) {
                return kt(i.configuration, at);
            }) && j.push(bt(B.id)), j;
        })), k = S.map(function(x) {
            var j = x.onEntry, z = x.activities.map(function(B) {
                return He(B);
            });
            return {
                type: "entry",
                actions: Q(s ? V(V([], O(j), !1), O(z), !1) : V(V([], O(z), !1), O(j), !1), l.machine.options.actions)
            };
        }).concat({
            type: "state_done",
            actions: C.map(function(x) {
                return qe(x);
            })
        }), L = Array.from(N).map(function(x) {
            return {
                type: "exit",
                actions: Q(V(V([], O(x.onExit), !1), O(x.activities.map(function(j) {
                    return We(j);
                })), !1), l.machine.options.actions)
            };
        }), w = L.concat({
            type: "transition",
            actions: Q(i.actions, this.machine.options.actions)
        }).concat(k);
        if (n) {
            var M = Q(I(V([], O(t), !1).sort(function(x, j) {
                return j.order - x.order;
            }).map(function(x) {
                return x.onExit;
            })), this.machine.options.actions).filter(function(x) {
                return !Bt(x);
            });
            return w.concat({
                type: "stop",
                actions: M
            });
        }
        return w;
    }, e.prototype.transition = function(t, n, i, r) {
        t === void 0 && (t = this.initialState);
        var o = R(n), a;
        if (t instanceof F) a = i === void 0 ? t : this.resolveState(F.from(t, i));
        else {
            var s = A(t) ? this.resolve(Tt(this.getResolvedPath(t))) : this.resolve(t), c = i != null ? i : this.machine.context;
            a = this.resolveState(F.from(s, c));
        }
        if (this.strict && !this.events.includes(o.name) && !Ve(o.name)) throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(o.name, "'"));
        var u = this._transition(a.value, a, o) || {
            transitions: [],
            configuration: [],
            exitSet: [],
            source: a,
            actions: []
        }, h = ht([], this.getStateNodes(a.value)), f = u.configuration.length ? ht(h, u.configuration) : h;
        return u.configuration = V([], O(f), !1), this.resolveTransition(u, a, a.context, r, o);
    }, e.prototype.resolveRaisedTransition = function(t, n, i, r) {
        var o, a = t.actions;
        return t = this.transition(t, n, void 0, r), t._event = i, t.event = i.data, (o = t.actions).unshift.apply(o, V([], O(a), !1)), t;
    }, e.prototype.resolveTransition = function(t, n, i, r, o) {
        var a, s, c, u, h = this;
        o === void 0 && (o = nt);
        var f = t.configuration, l = !n || t.transitions.length > 0, d = l ? t.configuration : n ? n.configuration : [], y = kt(d, this), v = l ? rn(this.machine, f) : void 0, _ = n ? n.historyValue ? n.historyValue : t.source ? this.machine.historyValue(n.value) : void 0 : void 0, g = this.getActions(new Set(d), y, t, i, o, n, r), m = n ? p({}, n.activities) : {};
        try {
            for(var b = E(g), S = b.next(); !S.done; S = b.next()){
                var N = S.value;
                try {
                    for(var C = (c = void 0, E(N.actions)), k = C.next(); !k.done; k = C.next()){
                        var L = k.value;
                        L.type === Mt ? m[L.activity.id || L.activity.type] = L : L.type === Ft && (m[L.activity.id || L.activity.type] = !1);
                    }
                } catch (q) {
                    c = {
                        error: q
                    };
                } finally{
                    try {
                        k && !k.done && (u = C.return) && u.call(C);
                    } finally{
                        if (c) throw c.error;
                    }
                }
            }
        } catch (q) {
            a = {
                error: q
            };
        } finally{
            try {
                S && !S.done && (s = b.return) && s.call(b);
            } finally{
                if (a) throw a.error;
            }
        }
        var w = O(jt(this, n, i, o, g, r, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), M = w[0], x = w[1], j = O(Me(M, Bt), 2), z = j[0], B = j[1], at = M.filter(function(q) {
            var K;
            return q.type === Mt && ((K = q.activity) === null || K === void 0 ? void 0 : K.type) === Dt;
        }), yt = at.reduce(function(q, K) {
            return q[K.activity.id] = Ge(K.activity, h.machine, x, o), q;
        }, n ? p({}, n.children) : {}), $ = new F({
            value: v || n.value,
            context: x,
            _event: o,
            _sessionid: n ? n._sessionid : null,
            historyValue: v ? _ ? De(_, v) : void 0 : n ? n.historyValue : void 0,
            history: !v || t.source ? n : void 0,
            actions: v ? B : [],
            activities: v ? m : n ? n.activities : {},
            events: [],
            configuration: d,
            transitions: t.transitions,
            children: yt,
            done: y,
            tags: ie(d),
            machine: this
        }), H = i !== x;
        $.changed = o.name === ce || H;
        var W = $.history;
        W && delete W.history;
        var Wt = !y && (this._transient || f.some(function(q) {
            return q._transient;
        }));
        if (!l && (!Wt || o.name === St)) return $;
        var J = $;
        if (!y) for(Wt && (J = this.resolveRaisedTransition(J, {
            type: Oe
        }, o, r)); z.length;){
            var we = z.shift();
            J = this.resolveRaisedTransition(J, we._event, o, r);
        }
        var Ee = J.changed || (W ? !!J.actions.length || H || typeof W.value != typeof J.value || !xe(J.value, W.value) : void 0);
        return J.changed = Ee, J.history = W, J;
    }, e.prototype.getStateNode = function(t) {
        if (G(t)) return this.machine.getStateNodeById(t);
        if (!this.states) throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
        var n = this.states[t];
        if (!n) throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
        return n;
    }, e.prototype.getStateNodeById = function(t) {
        var n = G(t) ? t.slice(Ut.length) : t;
        if (n === this.id) return this;
        var i = this.machine.idMap[n];
        if (!i) throw new Error("Child state node '#".concat(n, "' does not exist on machine '").concat(this.id, "'"));
        return i;
    }, e.prototype.getStateNodeByPath = function(t) {
        if (typeof t == "string" && G(t)) try {
            return this.getStateNodeById(t.slice(1));
        } catch  {}
        for(var n = zt(t, this.delimiter).slice(), i = this; n.length;){
            var r = n.shift();
            if (!r.length) break;
            i = i.getStateNode(r);
        }
        return i;
    }, e.prototype.resolve = function(t) {
        var n, i = this;
        if (!t) return this.initialStateValue || Y;
        switch(this.type){
            case "parallel":
                return ct(this.initialStateValue, function(o, a) {
                    return o ? i.getStateNode(a).resolve(t[a] || o) : Y;
                });
            case "compound":
                if (A(t)) {
                    var r = this.getStateNode(t);
                    return r.type === "parallel" || r.type === "compound" ? (n = {}, n[t] = r.initialStateValue, n) : t;
                }
                return Object.keys(t).length ? ct(t, function(o, a) {
                    return o ? i.getStateNode(a).resolve(o) : Y;
                }) : this.initialStateValue || {};
            default:
                return t || Y;
        }
    }, e.prototype.getResolvedPath = function(t) {
        if (G(t)) {
            var n = this.machine.idMap[t.slice(Ut.length)];
            if (!n) throw new Error("Unable to find state node '".concat(t, "'"));
            return n.path;
        }
        return zt(t, this.delimiter);
    }, Object.defineProperty(e.prototype, "initialStateValue", {
        get: function() {
            var t;
            if (this.__cache.initialStateValue) return this.__cache.initialStateValue;
            var n;
            if (this.type === "parallel") n = te(this.states, function(i) {
                return i.initialStateValue || Y;
            }, function(i) {
                return i.type !== "history";
            });
            else if (this.initial !== void 0) {
                if (!this.states[this.initial]) throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
                n = At(this.states[this.initial]) ? this.initial : (t = {}, t[this.initial] = this.states[this.initial].initialStateValue, t);
            } else n = {};
            return this.__cache.initialStateValue = n, this.__cache.initialStateValue;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.getInitialState = function(t, n) {
        this._init();
        var i = this.getStateNodes(t);
        return this.resolveTransition({
            configuration: i,
            exitSet: [],
            transitions: [],
            source: void 0,
            actions: []
        }, void 0, n != null ? n : this.machine.context, void 0);
    }, Object.defineProperty(e.prototype, "initialState", {
        get: function() {
            var t = this.initialStateValue;
            if (!t) throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
            return this.getInitialState(t);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "target", {
        get: function() {
            var t;
            if (this.type === "history") {
                var n = this.config;
                A(n.target) ? t = G(n.target) ? Tt(this.machine.getStateNodeById(n.target).path.slice(this.path.length - 1)) : n.target : t = n.target;
            }
            return t;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.getRelativeStateNodes = function(t, n, i) {
        return i === void 0 && (i = !0), i ? t.type === "history" ? t.resolveHistory(n) : t.initialStateNodes : [
            t
        ];
    }, Object.defineProperty(e.prototype, "initialStateNodes", {
        get: function() {
            var t = this;
            if (At(this)) return [
                this
            ];
            if (this.type === "compound" && !this.initial) return [
                this
            ];
            var n = wt(this.initialStateValue);
            return I(n.map(function(i) {
                return t.getFromRelativePath(i);
            }));
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.getFromRelativePath = function(t) {
        if (!t.length) return [
            this
        ];
        var n = O(t), i = n[0], r = n.slice(1);
        if (!this.states) throw new Error("Cannot retrieve subPath '".concat(i, "' from node with no states"));
        var o = this.getStateNode(i);
        if (o.type === "history") return o.resolveHistory();
        if (!this.states[i]) throw new Error("Child state '".concat(i, "' does not exist on '").concat(this.id, "'"));
        return this.states[i].getFromRelativePath(r);
    }, e.prototype.historyValue = function(t) {
        if (Object.keys(this.states).length) return {
            current: t || this.initialStateValue,
            states: te(this.states, function(n, i) {
                if (!t) return n.historyValue();
                var r = A(t) ? void 0 : t[i];
                return n.historyValue(r || n.initialStateValue);
            }, function(n) {
                return !n.history;
            })
        };
    }, e.prototype.resolveHistory = function(t) {
        var n = this;
        if (this.type !== "history") return [
            this
        ];
        var i = this.parent;
        if (!t) {
            var r = this.target;
            return r ? I(wt(r).map(function(a) {
                return i.getFromRelativePath(a);
            })) : i.initialStateNodes;
        }
        var o = Ce(i.path, "states")(t).current;
        return A(o) ? [
            i.getStateNode(o)
        ] : I(wt(o).map(function(a) {
            return n.history === "deep" ? i.getFromRelativePath(a) : [
                i.states[a[0]]
            ];
        }));
    }, Object.defineProperty(e.prototype, "stateIds", {
        get: function() {
            var t = this, n = I(Object.keys(this.states).map(function(i) {
                return t.states[i].stateIds;
            }));
            return [
                this.id
            ].concat(n);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "events", {
        get: function() {
            var t, n, i, r;
            if (this.__cache.events) return this.__cache.events;
            var o = this.states, a = new Set(this.ownEvents);
            if (o) try {
                for(var s = E(Object.keys(o)), c = s.next(); !c.done; c = s.next()){
                    var u = c.value, h = o[u];
                    if (h.states) try {
                        for(var f = (i = void 0, E(h.events)), l = f.next(); !l.done; l = f.next()){
                            var d = l.value;
                            a.add("".concat(d));
                        }
                    } catch (y) {
                        i = {
                            error: y
                        };
                    } finally{
                        try {
                            l && !l.done && (r = f.return) && r.call(f);
                        } finally{
                            if (i) throw i.error;
                        }
                    }
                }
            } catch (y) {
                t = {
                    error: y
                };
            } finally{
                try {
                    c && !c.done && (n = s.return) && n.call(s);
                } finally{
                    if (t) throw t.error;
                }
            }
            return this.__cache.events = Array.from(a);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "ownEvents", {
        get: function() {
            var t = new Set(this.transitions.filter(function(n) {
                return !(!n.target && !n.actions.length && n.internal);
            }).map(function(n) {
                return n.eventType;
            }));
            return Array.from(t);
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.resolveTarget = function(t) {
        var n = this;
        if (t !== void 0) return t.map(function(i) {
            if (!A(i)) return i;
            var r = i[0] === n.delimiter;
            if (r && !n.parent) return n.getStateNodeByPath(i.slice(1));
            var o = r ? n.key + i : i;
            if (n.parent) try {
                var a = n.parent.getStateNodeByPath(o);
                return a;
            } catch (s) {
                throw new Error("Invalid transition definition for state node '".concat(n.id, `':
`).concat(s.message));
            }
            else return n.getStateNodeByPath(o);
        });
    }, e.prototype.formatTransition = function(t) {
        var n = this, i = Je(t.target), r = "internal" in t ? t.internal : i ? i.some(function(c) {
            return A(c) && c[0] === n.delimiter;
        }) : !0, o = this.machine.options.guards, a = this.resolveTarget(i), s = p(p({}, t), {
            actions: Q(U(t.actions)),
            cond: de(t.cond, o),
            target: a,
            source: this,
            internal: r,
            eventType: t.event,
            toJSON: function() {
                return p(p({}, s), {
                    target: s.target ? s.target.map(function(c) {
                        return "#".concat(c.id);
                    }) : void 0,
                    source: "#".concat(n.id)
                });
            }
        });
        return s;
    }, e.prototype.formatTransitions = function() {
        var t, n, i = this, r;
        if (!this.config.on) r = [];
        else if (Array.isArray(this.config.on)) r = this.config.on;
        else {
            var o = this.config.on, a = It, s = o[a], c = s === void 0 ? [] : s, u = $t(o, [
                typeof a == "symbol" ? a : a + ""
            ]);
            r = I(Object.keys(u).map(function(m) {
                var b = Z(m, u[m]);
                return b;
            }).concat(Z(It, c)));
        }
        var h = this.config.always ? Z("", this.config.always) : [], f = this.config.onDone ? Z(String(bt(this.id)), this.config.onDone) : [], l = I(this.invoke.map(function(m) {
            var b = [];
            return m.onDone && b.push.apply(b, V([], O(Z(String(Ot(m.id)), m.onDone)), !1)), m.onError && b.push.apply(b, V([], O(Z(String(ut(m.id)), m.onError)), !1)), b;
        })), d = this.after, y = I(V(V(V(V([], O(f), !1), O(l), !1), O(r), !1), O(h), !1).map(function(m) {
            return U(m).map(function(b) {
                return i.formatTransition(b);
            });
        }));
        try {
            for(var v = E(d), _ = v.next(); !_.done; _ = v.next()){
                var g = _.value;
                y.push(g);
            }
        } catch (m) {
            t = {
                error: m
            };
        } finally{
            try {
                _ && !_.done && (n = v.return) && n.call(v);
            } finally{
                if (t) throw t.error;
            }
        }
        return y;
    }, e;
}();
function _n(e, t) {
    return new mn(e, t);
}
var et = {
    click: "onClick",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    complete: "onComplete",
    after: "onAfter",
    enter: "onEnter",
    show: "onShow"
};
Object.values(et);
var bn = Object.keys(et), Tn = class {
    activeStateId = "";
    _service;
    _domListeners = new Map;
    _domElement;
    _playerListeners = new Map;
    _player;
    _machineSchemas = new Map;
    _onShowPrevValue = 0;
    constructor(e, t){
        this._player = t, this._machineSchemas = this._transformToXStateSchema(e), this._domElement = t.container;
    }
    start(e) {
        this.stop();
        let t = this._machineSchemas.get(e);
        if (typeof t > "u") throw (0, _chunkTRZ6EGBZMjs.a)(`invalid state machine id ${e}`);
        this._service = Se(_n(t)), this._addEventListeners(), this._service.start();
    }
    stop() {
        var e;
        this._removeEventListeners(), (e = this._service) == null || e.stop(), this._player.stop();
    }
    _removeEventListeners() {
        var e;
        this._requiresDomElement();
        for (let [t, n] of this._domListeners)t === "visibilityChange" && this._player.stopPlayOnShow(), (e = this._domElement) == null || e.removeEventListener(t, n), this._domListeners.delete(t);
        for (let [t, n] of this._playerListeners)this._player.removeEventListener(t, n), this._playerListeners.delete(t);
    }
    _addEventListeners() {
        this._requiresDomElement();
        let e = (n)=>{
            this._service.send({
                type: n
            });
        }, t = (n)=>{
            function i() {
                e(n);
            }
            return i;
        };
        this._service.subscribe((n)=>{
            var i;
            if (typeof n.changed > "u" || n.changed) {
                this._removeEventListeners();
                for (let r of n.nextEvents)if (bn.filter((o)=>o !== "complete" && o !== "show").includes(r)) {
                    let o = t(r);
                    this._domListeners.set(r, o), (i = this._domElement) == null || i.addEventListener(r, o, {
                        once: !0
                    });
                } else if (r === "complete") {
                    let o = t(r);
                    this._player.addEventListener(r, o), this._playerListeners.set(r, o);
                } else if (r === "show") {
                    let o = t(r);
                    this._player.addIntersectionObserver({
                        callbackOnIntersect: (a)=>{
                            a > 0 && (a !== 100 && this._onShowPrevValue !== a && o(), this._onShowPrevValue = a);
                        },
                        threshold: []
                    }), this._domListeners.set("visibilityChange", o);
                }
            }
        });
    }
    subscribe(e) {
        throw (0, _chunkTRZ6EGBZMjs.a)(e.toString());
    }
    _transformToXStateSchema(e) {
        var t, n, i;
        let r = new Map;
        for (let o of e){
            let a = {}, s = {};
            if (s.id = o.descriptor.id, typeof o.descriptor.initial < "u" && (s.initial = o.descriptor.initial), typeof o < "u") {
                let c = o.states;
                for(let u in c)if (typeof c[u] < "u" && c[u]) {
                    let h$1 = c[u], f = h$1.playbackSettings, l = Object.keys(h$1).filter((v)=>v.startsWith("on")), d$1 = {}, y = {};
                    for (let v of l)if (typeof h$1[v] < "u") {
                        let _ = h$1[v];
                        if (v === et.after) {
                            let g = _;
                            y[g.ms] = {
                                target: (t = _ == null ? void 0 : _.state) != null ? t : ""
                            };
                        } else v === et.enter ? d$1[(0, _chunkTRZ6EGBZMjs.d)(et, v)] = {
                            target: (n = _ == null ? void 0 : _.state) != null ? n : ""
                        } : d$1[(0, _chunkTRZ6EGBZMjs.d)(et, v)] = {
                            target: (i = _ == null ? void 0 : _.state) != null ? i : ""
                        };
                    }
                    a[u] = {
                        entry: ()=>{
                            !this._player.getAnimationInstance() || h$1.animationId && h$1.animationId !== this._player.currentAnimationId ? this._player.play(h$1.animationId, ()=>({
                                    ...(0, _chunkTRZ6EGBZMjs.h),
                                    ...f
                                })).then(()=>{
                                this._updatePlaybackSettings(f);
                            }).catch((v)=>{
                                (0, _chunkTRZ6EGBZMjs.b)(`State machine error: ${v.message}`);
                            }) : this._updatePlaybackSettings(f);
                        },
                        exit: ()=>{
                            typeof f.segments < "u" && this._player.resetSegments(!1), typeof f.playOnScroll < "u" && this._player.stopPlayOnScroll();
                        },
                        on: d$1,
                        after: y,
                        meta: f
                    };
                }
            }
            s.states = a, r.set(s.id, s);
        }
        return r;
    }
    _handlePlaySegments(e) {
        if (typeof e.segments == "string") this._player.goToAndPlay(e.segments, !0);
        else {
            let [t, n] = e.segments, i = t;
            t !== 0 && t === n && (i = t - 1), t === 0 && t === n ? this._player.goToAndPlay(t, !0) : this._player.playSegments([
                i,
                n
            ], !0);
        }
    }
    _handlePlayOnScroll(e) {
        let t = e.playOnScroll;
        if (e.segments && typeof e.segments != "string") {
            let n = e.segments;
            this._player.playOnScroll({
                threshold: t,
                segments: n
            });
        } else this._player.playOnScroll({
            threshold: t
        });
    }
    _updatePlaybackSettings(e) {
        if (!this._player.getAnimationInstance()) throw new Error("Unable to update playbackSettings. Animations is not rendered yet.");
        typeof e.autoplay < "u" && (this._player.setAutoplay(e.autoplay), e.autoplay ? this._player.play() : this._player.pause()), typeof e.direction < "u" && this._player.setDirection(e.direction), typeof e.intermission < "u" && this._player.setIntermission(e.intermission), typeof e.loop < "u" && this._player.setLoop(e.loop), typeof e.playMode < "u" && this._player.setMode(e.playMode), typeof e.speed < "u" && this._player.setSpeed(e.speed), typeof e.defaultTheme < "u" && this._player.setDefaultTheme(e.defaultTheme), typeof e.playOnScroll < "u" && this._handlePlayOnScroll(e), e.segments && this._handlePlaySegments(e), e.autoplay || this._player.pause();
    }
    _requiresDomElement() {
        if (!this._domElement) throw (0, _chunkTRZ6EGBZMjs.a)("Requires a DOM element to attach events.");
    }
}; /*! Bundled license information:

xstate/es/_virtual/_tslib.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/ 

},{"./chunk-TRZ6EGBZ.mjs":"7lJx4","./chunk-HDDX7F4A.mjs":"2Aqr0","./chunk-ZWH2ESXT.mjs":"jX5B9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kG1bl"], null, "parcelRequire94c2")

//# sourceMappingURL=dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR.822cea8e.js.map
