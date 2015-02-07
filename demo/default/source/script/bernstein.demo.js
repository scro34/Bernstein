(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"bernstein.demo.Application","qx.revision":"","qx.theme":"bernstein.demo.theme.Theme","qx.version":"4.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"bernstein":{"resourceUri":"../../../source/resource","sourceUri":"../../../source/class"},"bernstein.demo":{"resourceUri":"../source/resource","sourceUri":"../source/class"},"qx":{"resourceUri":"../../../../qooxdoo/4.1/framework/source/resource","sourceUri":"../../../../qooxdoo/4.1/framework/source/class","sourceViewUri":"https://github.com/qooxdoo/qooxdoo/blob/%{qxGitBranch}/framework/source/class/%{classFilePath}#L%{lineNumber}"},"qxc.application.formdemo":{"resourceUri":"../../../../qooxdoo/4.1/component/library/formdemo/source/resource","sourceUri":"../../../../qooxdoo/4.1/component/library/formdemo/source/class"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null};
qx.$$locales = {"C":null,"en":null};
qx.$$packageData = {};
qx.$$g = {}

qx.$$loader = {
  parts : {"boot":[1023],"embed":[1023,1019,256],"embedframe":[1023,1019,16],"form":[1023,1019,41,513,33,65,1],"list":[1023,1019,41,33,40,32],"misc":[1023,1019,2],"tab":[1023,1019,128],"toolbar":[1023,1019,513,512],"tree":[1023,1019,41,40,8],"window":[1023,1019,65,64]},
  packages : {"1":{"uris":["__out__:bernstein.demo.45a12165f86b.js","bernstein.demo:bernstein/demo/pages/Form.js","__out__:bernstein.demo.dff7397d4803.js"]},"2":{"uris":["__out__:bernstein.demo.4c169fa3253b.js","bernstein.demo:bernstein/demo/pages/Misc.js","__out__:bernstein.demo.4745a3e1da70.js"]},"8":{"uris":["__out__:bernstein.demo.7db855fbdfea.js","bernstein.demo:bernstein/demo/pages/Tree.js","__out__:bernstein.demo.5231f5bd0a18.js"]},"16":{"uris":["__out__:bernstein.demo.313389275fc3.js","bernstein.demo:bernstein/demo/pages/EmbedFrame.js","__out__:bernstein.demo.59cbf3281285.js"]},"32":{"uris":["__out__:bernstein.demo.3c0569ff7190.js","bernstein.demo:bernstein/demo/pages/List.js"]},"33":{"uris":["__out__:bernstein.demo.ec97066e95ca.js"]},"40":{"uris":["__out__:bernstein.demo.925cc71cf137.js"]},"41":{"uris":["__out__:bernstein.demo.2967305f8edb.js"]},"64":{"uris":["__out__:bernstein.demo.8694265c697a.js","bernstein.demo:bernstein/demo/pages/Window.js"]},"65":{"uris":["__out__:bernstein.demo.4956356fd1d7.js"]},"128":{"uris":["__out__:bernstein.demo.5202aa7629ad.js","bernstein.demo:bernstein/demo/pages/Tab.js"]},"256":{"uris":["__out__:bernstein.demo.eceb73dc76b2.js","bernstein.demo:bernstein/demo/pages/Embed.js","__out__:bernstein.demo.bae1e2af3a43.js"]},"512":{"uris":["__out__:bernstein.demo.d5f9c4a663e8.js","bernstein.demo:bernstein/demo/pages/ToolBar.js","__out__:bernstein.demo.83ab7dca07fd.js"]},"513":{"uris":["__out__:bernstein.demo.0de5a1bb0cd4.js"]},"1019":{"uris":["__out__:bernstein.demo.6580ca79d3bc.js","bernstein.demo:bernstein/demo/pages/AbstractPage.js"]},"1023":{"uris":["__out__:bernstein.demo.9ca69d46660d.js","bernstein.demo:bernstein/demo/Application.js","__out__:bernstein.demo.e58c63b9b987.js","bernstein.demo:bernstein/demo/About.js","bernstein.demo:bernstein/demo/Separator.js","bernstein.demo:bernstein/demo/Calculator.js","bernstein.demo:bernstein/demo/CalculatorLogic.js","bernstein.demo:bernstein/demo/ColorChooser.js","__out__:bernstein.demo.ec65464d51a1.js","bernstein.demo:bernstein/demo/TableWindow.js","__out__:bernstein.demo.38d7a2bf3988.js","bernstein.demo:bernstein/demo/WebBrowser.js","bernstein.demo:bernstein/demo/WidgetBrowser.js","bernstein.demo:bernstein/demo/view/TabView.js","bernstein.demo:bernstein/demo/MControls.js","bernstein.demo:bernstein/demo/view/TabPage.js","__out__:bernstein.demo.2cf1ee73113c.js","bernstein.demo:bernstein/demo/PlayerWindow.js","__out__:bernstein.demo.8b58ff5ebaae.js","bernstein.demo:bernstein/demo/VideoWindow.js","__out__:bernstein.demo.582a5ce1aacf.js","bernstein.demo:bernstein/demo/theme/Appearance.js","__out__:bernstein.demo.31ff58006b0d.js","bernstein.demo:bernstein/demo/theme/Font.js","__out__:bernstein.demo.d6fc38080175.js","bernstein.demo:bernstein/demo/theme/Decoration.js","__out__:bernstein.demo.3e2230f07386.js","bernstein.demo:bernstein/demo/theme/Color.js","bernstein.demo:bernstein/demo/theme/Theme.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : false,
  addNoCacheParam : false,

  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;
  }
};

var readyStateValue = {"complete" : true};
if (document.documentMode && document.documentMode < 10 ||
    (typeof window.ActiveXObject !== "undefined" && !document.documentMode)) {
  readyStateValue["loaded"] = true;
}

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || readyStateValue[this.readyState]) {
      elem.onreadystatechange = elem.onload = null;
      if (typeof callback === "function") {
        callback();
      }
    }
  };

  if (isLoadParallel) {
    elem.async = null;
  }

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);
var isLoadParallel = 'async' in document.createElement('script');

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }

  var item;

  if (isLoadParallel) {
    while (list.length) {
      item = list.shift();
      if (list.length) {
        loadScript(item);
      } else {
        loadScript(item, callback);
      }
    }
  } else {
    item = list.shift();
    loadScript(item,  function() {
      if (isWebkit) {
        // force async, else Safari fails with a "maximum recursion depth exceeded"
        window.setTimeout(function() {
          loadScriptList(list, callback);
        }, 0);
      } else {
        loadScriptList(list, callback);
      }
    });
  }
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function ()
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true;
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();



qx.$$loader.init();

