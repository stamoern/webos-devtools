InspectorBackend.registerInspectorDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Inspector");
InspectorBackend.registerEvent("Inspector.evaluateForTestInFrontend", ["testCallId", "script"]);
InspectorBackend.registerEvent("Inspector.inspect", ["object", "hints"]);
InspectorBackend.registerEvent("Inspector.detached", ["reason"]);
InspectorBackend.registerEvent("Inspector.targetCrashed", []);
InspectorBackend.registerCommand("Inspector.enable", [], [], false);
InspectorBackend.registerCommand("Inspector.disable", [], [], false);
InspectorBackend.registerCommand("Inspector.reset", [], [], false);
InspectorBackend.registerMemoryDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Memory");
InspectorBackend.registerCommand("Memory.getDOMCounters", [], ["documents", "nodes", "jsEventListeners"], false);
InspectorBackend.registerPageDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Page");
InspectorBackend.registerEnum("Page.ResourceType", {
  Document: "Document",
  Stylesheet: "Stylesheet",
  Image: "Image",
  Media: "Media",
  Font: "Font",
  Script: "Script",
  TextTrack: "TextTrack",
  XHR: "XHR",
  WebSocket: "WebSocket",
  Other: "Other"
});
InspectorBackend.registerEnum("Page.UsageItemId", {
  Filesystem: "filesystem",
  Database: "database",
  Appcache: "appcache",
  Indexeddatabase: "indexeddatabase"
});
InspectorBackend.registerEvent("Page.domContentEventFired", ["timestamp"]);
InspectorBackend.registerEvent("Page.loadEventFired", ["timestamp"]);
InspectorBackend.registerEvent("Page.frameAttached", ["frameId", "parentFrameId"]);
InspectorBackend.registerEvent("Page.frameNavigated", ["frame"]);
InspectorBackend.registerEvent("Page.frameDetached", ["frameId"]);
InspectorBackend.registerEvent("Page.frameStartedLoading", ["frameId"]);
InspectorBackend.registerEvent("Page.frameStoppedLoading", ["frameId"]);
InspectorBackend.registerEvent("Page.frameScheduledNavigation", ["frameId", "delay"]);
InspectorBackend.registerEvent("Page.frameClearedScheduledNavigation", ["frameId"]);
InspectorBackend.registerEvent("Page.frameResized", []);
InspectorBackend.registerEvent("Page.javascriptDialogOpening", ["message"]);
InspectorBackend.registerEvent("Page.javascriptDialogClosed", []);
InspectorBackend.registerEvent("Page.scriptsEnabled", ["isEnabled"]);
InspectorBackend.registerEvent("Page.screencastFrame", ["data", "metadata"]);
InspectorBackend.registerEvent("Page.screencastVisibilityChanged", ["visible"]);
InspectorBackend.registerEvent("Page.viewportChanged", ["viewport"]);
InspectorBackend.registerCommand("Page.enable", [], [], false);
InspectorBackend.registerCommand("Page.disable", [], [], false);
InspectorBackend.registerCommand("Page.addScriptToEvaluateOnLoad", [{
  "name": "scriptSource",
  "type": "string",
  "optional": false
}], ["identifier"], false);
InspectorBackend.registerCommand("Page.removeScriptToEvaluateOnLoad", [{
  "name": "identifier",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.reload", [{
  "name": "ignoreCache",
  "type": "boolean",
  "optional": true
}, {
  "name": "scriptToEvaluateOnLoad",
  "type": "string",
  "optional": true
}, {
  "name": "scriptPreprocessor",
  "type": "string",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Page.navigate", [{
  "name": "url",
  "type": "string",
  "optional": false
}], ["frameId"], false);
InspectorBackend.registerCommand("Page.getNavigationHistory", [], ["currentIndex", "entries"], false);
InspectorBackend.registerCommand("Page.navigateToHistoryEntry", [{
  "name": "entryId",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.getCookies", [], ["cookies"], false);
InspectorBackend.registerCommand("Page.deleteCookie", [{
  "name": "cookieName",
  "type": "string",
  "optional": false
}, {
  "name": "url",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.getResourceTree", [], ["frameTree"], false);
InspectorBackend.registerCommand("Page.getResourceContent", [{
  "name": "frameId",
  "type": "string",
  "optional": false
}, {
  "name": "url",
  "type": "string",
  "optional": false
}], ["content", "base64Encoded"], false);
InspectorBackend.registerCommand("Page.searchInResource", [{
  "name": "frameId",
  "type": "string",
  "optional": false
}, {
  "name": "url",
  "type": "string",
  "optional": false
}, {
  "name": "query",
  "type": "string",
  "optional": false
}, {
  "name": "caseSensitive",
  "type": "boolean",
  "optional": true
}, {
  "name": "isRegex",
  "type": "boolean",
  "optional": true
}], ["result"], false);
InspectorBackend.registerCommand("Page.setDocumentContent", [{
  "name": "frameId",
  "type": "string",
  "optional": false
}, {
  "name": "html",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.setDeviceMetricsOverride", [{
  "name": "width",
  "type": "number",
  "optional": false
}, {
  "name": "height",
  "type": "number",
  "optional": false
}, {
  "name": "deviceScaleFactor",
  "type": "number",
  "optional": false
}, {
  "name": "mobile",
  "type": "boolean",
  "optional": false
}, {
  "name": "fitWindow",
  "type": "boolean",
  "optional": false
}, {
  "name": "scale",
  "type": "number",
  "optional": true
}, {
  "name": "offsetX",
  "type": "number",
  "optional": true
}, {
  "name": "offsetY",
  "type": "number",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Page.clearDeviceMetricsOverride", [], [], false);
InspectorBackend.registerCommand("Page.resetScrollAndPageScaleFactor", [], [], false);
InspectorBackend.registerCommand("Page.setShowPaintRects", [{
  "name": "result",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.setShowDebugBorders", [{
  "name": "show",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.setShowFPSCounter", [{
  "name": "show",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.setContinuousPaintingEnabled", [{
  "name": "enabled",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.setShowScrollBottleneckRects", [{
  "name": "show",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.getScriptExecutionStatus", [], ["result"], false);
InspectorBackend.registerCommand("Page.setScriptExecutionDisabled", [{
  "name": "value",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.setGeolocationOverride", [{
  "name": "latitude",
  "type": "number",
  "optional": true
}, {
  "name": "longitude",
  "type": "number",
  "optional": true
}, {
  "name": "accuracy",
  "type": "number",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Page.clearGeolocationOverride", [], [], false);
InspectorBackend.registerCommand("Page.setDeviceOrientationOverride", [{
  "name": "alpha",
  "type": "number",
  "optional": false
}, {
  "name": "beta",
  "type": "number",
  "optional": false
}, {
  "name": "gamma",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.clearDeviceOrientationOverride", [], [], false);
InspectorBackend.registerCommand("Page.setTouchEmulationEnabled", [{
  "name": "enabled",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.setEmulatedMedia", [{
  "name": "media",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Page.captureScreenshot", [], ["data"], false);
InspectorBackend.registerCommand("Page.canScreencast", [], ["result"], false);
InspectorBackend.registerCommand("Page.startScreencast", [{
  "name": "format",
  "type": "string",
  "optional": true
}, {
  "name": "quality",
  "type": "number",
  "optional": true
}, {
  "name": "maxWidth",
  "type": "number",
  "optional": true
}, {
  "name": "maxHeight",
  "type": "number",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Page.stopScreencast", [], [], false);
InspectorBackend.registerCommand("Page.handleJavaScriptDialog", [{
  "name": "accept",
  "type": "boolean",
  "optional": false
}, {
  "name": "promptText",
  "type": "string",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Page.setShowViewportSizeOnResize", [{
  "name": "show",
  "type": "boolean",
  "optional": false
}, {
  "name": "showGrid",
  "type": "boolean",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Page.queryUsageAndQuota", [{
  "name": "securityOrigin",
  "type": "string",
  "optional": false
}], ["quota", "usage"], false);
InspectorBackend.registerRuntimeDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Runtime");
InspectorBackend.registerEnum("Runtime.RemoteObjectType", {
  Object: "object",
  Function: "function",
  Undefined: "undefined",
  String: "string",
  Number: "number",
  Boolean: "boolean",
  Symbol: "symbol"
});
InspectorBackend.registerEnum("Runtime.RemoteObjectSubtype", {
  Array: "array",
  Null: "null",
  Node: "node",
  Regexp: "regexp",
  Date: "date"
});
InspectorBackend.registerEnum("Runtime.PropertyPreviewType", {
  Object: "object",
  Function: "function",
  Undefined: "undefined",
  String: "string",
  Number: "number",
  Boolean: "boolean",
  Symbol: "symbol",
  Accessor: "accessor"
});
InspectorBackend.registerEnum("Runtime.PropertyPreviewSubtype", {
  Array: "array",
  Null: "null",
  Node: "node",
  Regexp: "regexp",
  Date: "date"
});
InspectorBackend.registerEnum("Runtime.CallArgumentType", {
  Object: "object",
  Function: "function",
  Undefined: "undefined",
  String: "string",
  Number: "number",
  Boolean: "boolean",
  Symbol: "symbol"
});
InspectorBackend.registerEvent("Runtime.executionContextCreated", ["context"]);
InspectorBackend.registerEvent("Runtime.executionContextDestroyed", ["executionContextId"]);
InspectorBackend.registerEvent("Runtime.executionContextsCleared", []);
InspectorBackend.registerCommand("Runtime.evaluate", [{
  "name": "expression",
  "type": "string",
  "optional": false
}, {
  "name": "objectGroup",
  "type": "string",
  "optional": true
}, {
  "name": "includeCommandLineAPI",
  "type": "boolean",
  "optional": true
}, {
  "name": "doNotPauseOnExceptionsAndMuteConsole",
  "type": "boolean",
  "optional": true
}, {
  "name": "contextId",
  "type": "number",
  "optional": true
}, {
  "name": "returnByValue",
  "type": "boolean",
  "optional": true
}, {
  "name": "generatePreview",
  "type": "boolean",
  "optional": true
}], ["result", "wasThrown", "exceptionDetails"], false);
InspectorBackend.registerCommand("Runtime.callFunctionOn", [{
  "name": "objectId",
  "type": "string",
  "optional": false
}, {
  "name": "functionDeclaration",
  "type": "string",
  "optional": false
}, {
  "name": "arguments",
  "type": "object",
  "optional": true
}, {
  "name": "doNotPauseOnExceptionsAndMuteConsole",
  "type": "boolean",
  "optional": true
}, {
  "name": "returnByValue",
  "type": "boolean",
  "optional": true
}, {
  "name": "generatePreview",
  "type": "boolean",
  "optional": true
}], ["result", "wasThrown"], false);
InspectorBackend.registerCommand("Runtime.getProperties", [{
  "name": "objectId",
  "type": "string",
  "optional": false
}, {
  "name": "ownProperties",
  "type": "boolean",
  "optional": true
}, {
  "name": "accessorPropertiesOnly",
  "type": "boolean",
  "optional": true
}], ["result", "internalProperties"], false);
InspectorBackend.registerCommand("Runtime.releaseObject", [{
  "name": "objectId",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Runtime.releaseObjectGroup", [{
  "name": "objectGroup",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Runtime.run", [], [], false);
InspectorBackend.registerCommand("Runtime.enable", [], [], false);
InspectorBackend.registerCommand("Runtime.disable", [], [], false);
InspectorBackend.registerCommand("Runtime.isRunRequired", [], ["result"], false);
InspectorBackend.registerConsoleDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Console");
InspectorBackend.registerEnum("Console.ConsoleMessageSource", {
  XML: "xml",
  Javascript: "javascript",
  Network: "network",
  ConsoleAPI: "console-api",
  Storage: "storage",
  Appcache: "appcache",
  Rendering: "rendering",
  Css: "css",
  Security: "security",
  Other: "other",
  Deprecation: "deprecation"
});
InspectorBackend.registerEnum("Console.ConsoleMessageLevel", {
  Log: "log",
  Warning: "warning",
  Error: "error",
  Debug: "debug",
  Info: "info"
});
InspectorBackend.registerEnum("Console.ConsoleMessageType", {
  Log: "log",
  Dir: "dir",
  DirXML: "dirxml",
  Table: "table",
  Trace: "trace",
  Clear: "clear",
  StartGroup: "startGroup",
  StartGroupCollapsed: "startGroupCollapsed",
  EndGroup: "endGroup",
  Assert: "assert",
  Profile: "profile",
  ProfileEnd: "profileEnd"
});
InspectorBackend.registerEvent("Console.messageAdded", ["message"]);
InspectorBackend.registerEvent("Console.messageRepeatCountUpdated", ["count", "timestamp"]);
InspectorBackend.registerEvent("Console.messagesCleared", []);
InspectorBackend.registerCommand("Console.enable", [], [], false);
InspectorBackend.registerCommand("Console.disable", [], [], false);
InspectorBackend.registerCommand("Console.clearMessages", [], [], false);
InspectorBackend.registerCommand("Console.setMonitoringXHREnabled", [{
  "name": "enabled",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Console.addInspectedNode", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Console.addInspectedHeapObject", [{
  "name": "heapObjectId",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Console.setTracingBasedTimeline", [{
  "name": "enabled",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerNetworkDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Network");
InspectorBackend.registerEnum("Network.InitiatorType", {
  Parser: "parser",
  Script: "script",
  Other: "other"
});
InspectorBackend.registerEvent("Network.requestWillBeSent", ["requestId", "frameId", "loaderId", "documentURL", "request", "timestamp", "initiator", "redirectResponse"]);
InspectorBackend.registerEvent("Network.requestServedFromCache", ["requestId"]);
InspectorBackend.registerEvent("Network.responseReceived", ["requestId", "frameId", "loaderId", "timestamp", "type", "response"]);
InspectorBackend.registerEvent("Network.dataReceived", ["requestId", "timestamp", "dataLength", "encodedDataLength"]);
InspectorBackend.registerEvent("Network.loadingFinished", ["requestId", "timestamp", "encodedDataLength"]);
InspectorBackend.registerEvent("Network.loadingFailed", ["requestId", "timestamp", "type", "errorText", "canceled"]);
InspectorBackend.registerEvent("Network.webSocketWillSendHandshakeRequest", ["requestId", "timestamp", "request"]);
InspectorBackend.registerEvent("Network.webSocketHandshakeResponseReceived", ["requestId", "timestamp", "response"]);
InspectorBackend.registerEvent("Network.webSocketCreated", ["requestId", "url"]);
InspectorBackend.registerEvent("Network.webSocketClosed", ["requestId", "timestamp"]);
InspectorBackend.registerEvent("Network.webSocketFrameReceived", ["requestId", "timestamp", "response"]);
InspectorBackend.registerEvent("Network.webSocketFrameError", ["requestId", "timestamp", "errorMessage"]);
InspectorBackend.registerEvent("Network.webSocketFrameSent", ["requestId", "timestamp", "response"]);
InspectorBackend.registerCommand("Network.enable", [], [], false);
InspectorBackend.registerCommand("Network.disable", [], [], false);
InspectorBackend.registerCommand("Network.setUserAgentOverride", [{
  "name": "userAgent",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Network.setExtraHTTPHeaders", [{
  "name": "headers",
  "type": "object",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Network.getResponseBody", [{
  "name": "requestId",
  "type": "string",
  "optional": false
}], ["body", "base64Encoded"], false);
InspectorBackend.registerCommand("Network.replayXHR", [{
  "name": "requestId",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Network.canClearBrowserCache", [], ["result"], false);
InspectorBackend.registerCommand("Network.clearBrowserCache", [], [], false);
InspectorBackend.registerCommand("Network.canClearBrowserCookies", [], ["result"], false);
InspectorBackend.registerCommand("Network.clearBrowserCookies", [], [], false);
InspectorBackend.registerCommand("Network.canEmulateNetworkConditions", [], ["result"], false);
InspectorBackend.registerCommand("Network.emulateNetworkConditions", [{
  "name": "offline",
  "type": "boolean",
  "optional": false
}, {
  "name": "latency",
  "type": "number",
  "optional": false
}, {
  "name": "downloadThroughput",
  "type": "number",
  "optional": false
}, {
  "name": "uploadThroughput",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Network.setCacheDisabled", [{
  "name": "cacheDisabled",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Network.loadResourceForFrontend", [{
  "name": "frameId",
  "type": "string",
  "optional": false
}, {
  "name": "url",
  "type": "string",
  "optional": false
}, {
  "name": "requestHeaders",
  "type": "object",
  "optional": true
}], ["statusCode", "responseHeaders", "content"], false);
InspectorBackend.registerDatabaseDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Database");
InspectorBackend.registerEvent("Database.addDatabase", ["database"]);
InspectorBackend.registerCommand("Database.enable", [], [], false);
InspectorBackend.registerCommand("Database.disable", [], [], false);
InspectorBackend.registerCommand("Database.getDatabaseTableNames", [{
  "name": "databaseId",
  "type": "string",
  "optional": false
}], ["tableNames"], false);
InspectorBackend.registerCommand("Database.executeSQL", [{
  "name": "databaseId",
  "type": "string",
  "optional": false
}, {
  "name": "query",
  "type": "string",
  "optional": false
}], ["columnNames", "values", "sqlError"], false);
InspectorBackend.registerIndexedDBDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "IndexedDB");
InspectorBackend.registerEnum("IndexedDB.KeyType", {
  Number: "number",
  String: "string",
  Date: "date",
  Array: "array"
});
InspectorBackend.registerEnum("IndexedDB.KeyPathType", {
  Null: "null",
  String: "string",
  Array: "array"
});
InspectorBackend.registerCommand("IndexedDB.enable", [], [], false);
InspectorBackend.registerCommand("IndexedDB.disable", [], [], false);
InspectorBackend.registerCommand("IndexedDB.requestDatabaseNames", [{
  "name": "securityOrigin",
  "type": "string",
  "optional": false
}], ["databaseNames"], false);
InspectorBackend.registerCommand("IndexedDB.requestDatabase", [{
  "name": "securityOrigin",
  "type": "string",
  "optional": false
}, {
  "name": "databaseName",
  "type": "string",
  "optional": false
}], ["databaseWithObjectStores"], false);
InspectorBackend.registerCommand("IndexedDB.requestData", [{
  "name": "securityOrigin",
  "type": "string",
  "optional": false
}, {
  "name": "databaseName",
  "type": "string",
  "optional": false
}, {
  "name": "objectStoreName",
  "type": "string",
  "optional": false
}, {
  "name": "indexName",
  "type": "string",
  "optional": false
}, {
  "name": "skipCount",
  "type": "number",
  "optional": false
}, {
  "name": "pageSize",
  "type": "number",
  "optional": false
}, {
  "name": "keyRange",
  "type": "object",
  "optional": true
}], ["objectStoreDataEntries", "hasMore"], false);
InspectorBackend.registerCommand("IndexedDB.clearObjectStore", [{
  "name": "securityOrigin",
  "type": "string",
  "optional": false
}, {
  "name": "databaseName",
  "type": "string",
  "optional": false
}, {
  "name": "objectStoreName",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerDOMStorageDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "DOMStorage");
InspectorBackend.registerEvent("DOMStorage.domStorageItemsCleared", ["storageId"]);
InspectorBackend.registerEvent("DOMStorage.domStorageItemRemoved", ["storageId", "key"]);
InspectorBackend.registerEvent("DOMStorage.domStorageItemAdded", ["storageId", "key", "newValue"]);
InspectorBackend.registerEvent("DOMStorage.domStorageItemUpdated", ["storageId", "key", "oldValue", "newValue"]);
InspectorBackend.registerCommand("DOMStorage.enable", [], [], false);
InspectorBackend.registerCommand("DOMStorage.disable", [], [], false);
InspectorBackend.registerCommand("DOMStorage.getDOMStorageItems", [{
  "name": "storageId",
  "type": "object",
  "optional": false
}], ["entries"], false);
InspectorBackend.registerCommand("DOMStorage.setDOMStorageItem", [{
  "name": "storageId",
  "type": "object",
  "optional": false
}, {
  "name": "key",
  "type": "string",
  "optional": false
}, {
  "name": "value",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOMStorage.removeDOMStorageItem", [{
  "name": "storageId",
  "type": "object",
  "optional": false
}, {
  "name": "key",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerApplicationCacheDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "ApplicationCache");
InspectorBackend.registerEvent("ApplicationCache.applicationCacheStatusUpdated", ["frameId", "manifestURL", "status"]);
InspectorBackend.registerEvent("ApplicationCache.networkStateUpdated", ["isNowOnline"]);
InspectorBackend.registerCommand("ApplicationCache.getFramesWithManifests", [], ["frameIds"], false);
InspectorBackend.registerCommand("ApplicationCache.enable", [], [], false);
InspectorBackend.registerCommand("ApplicationCache.getManifestForFrame", [{
  "name": "frameId",
  "type": "string",
  "optional": false
}], ["manifestURL"], false);
InspectorBackend.registerCommand("ApplicationCache.getApplicationCacheForFrame", [{
  "name": "frameId",
  "type": "string",
  "optional": false
}], ["applicationCache"], false);
InspectorBackend.registerFileSystemDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "FileSystem");
InspectorBackend.registerCommand("FileSystem.enable", [], [], false);
InspectorBackend.registerCommand("FileSystem.disable", [], [], false);
InspectorBackend.registerCommand("FileSystem.requestFileSystemRoot", [{
  "name": "origin",
  "type": "string",
  "optional": false
}, {
  "name": "type",
  "type": "string",
  "optional": false
}], ["errorCode", "root"], false);
InspectorBackend.registerCommand("FileSystem.requestDirectoryContent", [{
  "name": "url",
  "type": "string",
  "optional": false
}], ["errorCode", "entries"], false);
InspectorBackend.registerCommand("FileSystem.requestMetadata", [{
  "name": "url",
  "type": "string",
  "optional": false
}], ["errorCode", "metadata"], false);
InspectorBackend.registerCommand("FileSystem.requestFileContent", [{
  "name": "url",
  "type": "string",
  "optional": false
}, {
  "name": "readAsText",
  "type": "boolean",
  "optional": false
}, {
  "name": "start",
  "type": "number",
  "optional": true
}, {
  "name": "end",
  "type": "number",
  "optional": true
}, {
  "name": "charset",
  "type": "string",
  "optional": true
}], ["errorCode", "content", "charset"], false);
InspectorBackend.registerCommand("FileSystem.deleteEntry", [{
  "name": "url",
  "type": "string",
  "optional": false
}], ["errorCode"], false);
InspectorBackend.registerDOMDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "DOM");
InspectorBackend.registerEnum("DOM.PseudoType", {
  Before: "before",
  After: "after"
});
InspectorBackend.registerEnum("DOM.ShadowRootType", {
  UserAgent: "user-agent",
  Author: "author"
});
InspectorBackend.registerEvent("DOM.documentUpdated", []);
InspectorBackend.registerEvent("DOM.inspectNodeRequested", ["nodeId"]);
InspectorBackend.registerEvent("DOM.setChildNodes", ["parentId", "nodes"]);
InspectorBackend.registerEvent("DOM.attributeModified", ["nodeId", "name", "value"]);
InspectorBackend.registerEvent("DOM.attributeRemoved", ["nodeId", "name"]);
InspectorBackend.registerEvent("DOM.inlineStyleInvalidated", ["nodeIds"]);
InspectorBackend.registerEvent("DOM.characterDataModified", ["nodeId", "characterData"]);
InspectorBackend.registerEvent("DOM.childNodeCountUpdated", ["nodeId", "childNodeCount"]);
InspectorBackend.registerEvent("DOM.childNodeInserted", ["parentNodeId", "previousNodeId", "node"]);
InspectorBackend.registerEvent("DOM.childNodeRemoved", ["parentNodeId", "nodeId"]);
InspectorBackend.registerEvent("DOM.shadowRootPushed", ["hostId", "root"]);
InspectorBackend.registerEvent("DOM.shadowRootPopped", ["hostId", "rootId"]);
InspectorBackend.registerEvent("DOM.pseudoElementAdded", ["parentId", "pseudoElement"]);
InspectorBackend.registerEvent("DOM.pseudoElementRemoved", ["parentId", "pseudoElementId"]);
InspectorBackend.registerCommand("DOM.enable", [], [], false);
InspectorBackend.registerCommand("DOM.disable", [], [], false);
InspectorBackend.registerCommand("DOM.getDocument", [], ["root"], false);
InspectorBackend.registerCommand("DOM.requestChildNodes", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "depth",
  "type": "number",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("DOM.querySelector", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "selector",
  "type": "string",
  "optional": false
}], ["nodeId"], false);
InspectorBackend.registerCommand("DOM.querySelectorAll", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "selector",
  "type": "string",
  "optional": false
}], ["nodeIds"], false);
InspectorBackend.registerCommand("DOM.setNodeName", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "name",
  "type": "string",
  "optional": false
}], ["nodeId"], false);
InspectorBackend.registerCommand("DOM.setNodeValue", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "value",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOM.removeNode", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOM.setAttributeValue", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "name",
  "type": "string",
  "optional": false
}, {
  "name": "value",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOM.setAttributesAsText", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "text",
  "type": "string",
  "optional": false
}, {
  "name": "name",
  "type": "string",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("DOM.removeAttribute", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "name",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOM.getEventListenersForNode", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "objectGroup",
  "type": "string",
  "optional": true
}], ["listeners"], false);
InspectorBackend.registerCommand("DOM.getOuterHTML", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}], ["outerHTML"], false);
InspectorBackend.registerCommand("DOM.setOuterHTML", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "outerHTML",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOM.performSearch", [{
  "name": "query",
  "type": "string",
  "optional": false
}, {
  "name": "includeUserAgentShadowDOM",
  "type": "boolean",
  "optional": true
}], ["searchId", "resultCount"], false);
InspectorBackend.registerCommand("DOM.getSearchResults", [{
  "name": "searchId",
  "type": "string",
  "optional": false
}, {
  "name": "fromIndex",
  "type": "number",
  "optional": false
}, {
  "name": "toIndex",
  "type": "number",
  "optional": false
}], ["nodeIds"], false);
InspectorBackend.registerCommand("DOM.discardSearchResults", [{
  "name": "searchId",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOM.requestNode", [{
  "name": "objectId",
  "type": "string",
  "optional": false
}], ["nodeId"], false);
InspectorBackend.registerCommand("DOM.setInspectModeEnabled", [{
  "name": "enabled",
  "type": "boolean",
  "optional": false
}, {
  "name": "inspectUAShadowDOM",
  "type": "boolean",
  "optional": true
}, {
  "name": "highlightConfig",
  "type": "object",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("DOM.highlightRect", [{
  "name": "x",
  "type": "number",
  "optional": false
}, {
  "name": "y",
  "type": "number",
  "optional": false
}, {
  "name": "width",
  "type": "number",
  "optional": false
}, {
  "name": "height",
  "type": "number",
  "optional": false
}, {
  "name": "color",
  "type": "object",
  "optional": true
}, {
  "name": "outlineColor",
  "type": "object",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("DOM.highlightQuad", [{
  "name": "quad",
  "type": "object",
  "optional": false
}, {
  "name": "color",
  "type": "object",
  "optional": true
}, {
  "name": "outlineColor",
  "type": "object",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("DOM.highlightNode", [{
  "name": "highlightConfig",
  "type": "object",
  "optional": false
}, {
  "name": "nodeId",
  "type": "number",
  "optional": true
}, {
  "name": "objectId",
  "type": "string",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("DOM.hideHighlight", [], [], false);
InspectorBackend.registerCommand("DOM.highlightFrame", [{
  "name": "frameId",
  "type": "string",
  "optional": false
}, {
  "name": "contentColor",
  "type": "object",
  "optional": true
}, {
  "name": "contentOutlineColor",
  "type": "object",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("DOM.pushNodeByPathToFrontend", [{
  "name": "path",
  "type": "string",
  "optional": false
}], ["nodeId"], false);
InspectorBackend.registerCommand("DOM.pushNodesByBackendIdsToFrontend", [{
  "name": "backendNodeIds",
  "type": "object",
  "optional": false
}], ["nodeIds"], false);
InspectorBackend.registerCommand("DOM.resolveNode", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "objectGroup",
  "type": "string",
  "optional": true
}], ["object"], false);
InspectorBackend.registerCommand("DOM.getAttributes", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}], ["attributes"], false);
InspectorBackend.registerCommand("DOM.copyTo", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "targetNodeId",
  "type": "number",
  "optional": false
}, {
  "name": "insertBeforeNodeId",
  "type": "number",
  "optional": true
}], ["nodeId"], false);
InspectorBackend.registerCommand("DOM.moveTo", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "targetNodeId",
  "type": "number",
  "optional": false
}, {
  "name": "insertBeforeNodeId",
  "type": "number",
  "optional": true
}], ["nodeId"], false);
InspectorBackend.registerCommand("DOM.undo", [], [], false);
InspectorBackend.registerCommand("DOM.redo", [], [], false);
InspectorBackend.registerCommand("DOM.markUndoableState", [], [], false);
InspectorBackend.registerCommand("DOM.focus", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOM.setFileInputFiles", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "files",
  "type": "object",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOM.getBoxModel", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}], ["model"], false);
InspectorBackend.registerCommand("DOM.getNodeForLocation", [{
  "name": "x",
  "type": "number",
  "optional": false
}, {
  "name": "y",
  "type": "number",
  "optional": false
}], ["nodeId"], false);
InspectorBackend.registerCommand("DOM.getRelayoutBoundary", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}], ["nodeId"], false);
InspectorBackend.registerCSSDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "CSS");
InspectorBackend.registerEnum("CSS.StyleSheetOrigin", {
  User: "user",
  UserAgent: "user-agent",
  Inspector: "inspector",
  Regular: "regular"
});
InspectorBackend.registerEnum("CSS.CSSMediaSource", {
  MediaRule: "mediaRule",
  ImportRule: "importRule",
  LinkedSheet: "linkedSheet",
  InlineSheet: "inlineSheet"
});
InspectorBackend.registerEvent("CSS.mediaQueryResultChanged", []);
InspectorBackend.registerEvent("CSS.styleSheetChanged", ["styleSheetId"]);
InspectorBackend.registerEvent("CSS.styleSheetAdded", ["header"]);
InspectorBackend.registerEvent("CSS.styleSheetRemoved", ["styleSheetId"]);
InspectorBackend.registerCommand("CSS.enable", [], [], false);
InspectorBackend.registerCommand("CSS.disable", [], [], false);
InspectorBackend.registerCommand("CSS.getMatchedStylesForNode", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "excludePseudo",
  "type": "boolean",
  "optional": true
}, {
  "name": "excludeInherited",
  "type": "boolean",
  "optional": true
}], ["matchedCSSRules", "pseudoElements", "inherited"], false);
InspectorBackend.registerCommand("CSS.getInlineStylesForNode", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}], ["inlineStyle", "attributesStyle"], false);
InspectorBackend.registerCommand("CSS.getComputedStyleForNode", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}], ["computedStyle"], false);
InspectorBackend.registerCommand("CSS.getPlatformFontsForNode", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}], ["cssFamilyName", "fonts"], false);
InspectorBackend.registerCommand("CSS.getStyleSheetText", [{
  "name": "styleSheetId",
  "type": "string",
  "optional": false
}], ["text"], false);
InspectorBackend.registerCommand("CSS.setStyleSheetText", [{
  "name": "styleSheetId",
  "type": "string",
  "optional": false
}, {
  "name": "text",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("CSS.setPropertyText", [{
  "name": "styleSheetId",
  "type": "string",
  "optional": false
}, {
  "name": "range",
  "type": "object",
  "optional": false
}, {
  "name": "text",
  "type": "string",
  "optional": false
}], ["style"], false);
InspectorBackend.registerCommand("CSS.setRuleSelector", [{
  "name": "styleSheetId",
  "type": "string",
  "optional": false
}, {
  "name": "range",
  "type": "object",
  "optional": false
}, {
  "name": "selector",
  "type": "string",
  "optional": false
}], ["rule"], false);
InspectorBackend.registerCommand("CSS.createStyleSheet", [{
  "name": "frameId",
  "type": "string",
  "optional": false
}], ["styleSheetId"], false);
InspectorBackend.registerCommand("CSS.addRule", [{
  "name": "styleSheetId",
  "type": "string",
  "optional": false
}, {
  "name": "ruleText",
  "type": "string",
  "optional": false
}, {
  "name": "location",
  "type": "object",
  "optional": false
}], ["rule"], false);
InspectorBackend.registerCommand("CSS.forcePseudoState", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "forcedPseudoClasses",
  "type": "object",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("CSS.getMediaQueries", [], ["medias"], false);
InspectorBackend.registerTimelineDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Timeline");
InspectorBackend.registerEvent("Timeline.eventRecorded", ["record"]);
InspectorBackend.registerEvent("Timeline.progress", ["count"]);
InspectorBackend.registerEvent("Timeline.started", ["consoleTimeline"]);
InspectorBackend.registerEvent("Timeline.stopped", ["consoleTimeline", "events"]);
InspectorBackend.registerCommand("Timeline.enable", [], [], false);
InspectorBackend.registerCommand("Timeline.disable", [], [], false);
InspectorBackend.registerCommand("Timeline.start", [{
  "name": "maxCallStackDepth",
  "type": "number",
  "optional": true
}, {
  "name": "bufferEvents",
  "type": "boolean",
  "optional": true
}, {
  "name": "liveEvents",
  "type": "string",
  "optional": true
}, {
  "name": "includeCounters",
  "type": "boolean",
  "optional": true
}, {
  "name": "includeGPUEvents",
  "type": "boolean",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Timeline.stop", [], [], false);
InspectorBackend.registerDebuggerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Debugger");
InspectorBackend.registerEnum("Debugger.ScopeType", {
  Global: "global",
  Local: "local",
  With: "with",
  Closure: "closure",
  Catch: "catch"
});
InspectorBackend.registerEvent("Debugger.globalObjectCleared", []);
InspectorBackend.registerEvent("Debugger.scriptParsed", ["scriptId", "url", "startLine", "startColumn", "endLine", "endColumn", "isContentScript", "sourceMapURL", "hasSourceURL"]);
InspectorBackend.registerEvent("Debugger.scriptFailedToParse", ["scriptId", "url", "startLine", "startColumn", "endLine", "endColumn", "isContentScript", "sourceMapURL", "hasSourceURL"]);
InspectorBackend.registerEvent("Debugger.breakpointResolved", ["breakpointId", "location"]);
InspectorBackend.registerEvent("Debugger.paused", ["callFrames", "reason", "data", "hitBreakpoints", "asyncStackTrace"]);
InspectorBackend.registerEvent("Debugger.resumed", []);
InspectorBackend.registerCommand("Debugger.enable", [], [], false);
InspectorBackend.registerCommand("Debugger.disable", [], [], false);
InspectorBackend.registerCommand("Debugger.setBreakpointsActive", [{
  "name": "active",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Debugger.setSkipAllPauses", [{
  "name": "skipped",
  "type": "boolean",
  "optional": false
}, {
  "name": "untilReload",
  "type": "boolean",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Debugger.setBreakpointByUrl", [{
  "name": "lineNumber",
  "type": "number",
  "optional": false
}, {
  "name": "url",
  "type": "string",
  "optional": true
}, {
  "name": "urlRegex",
  "type": "string",
  "optional": true
}, {
  "name": "columnNumber",
  "type": "number",
  "optional": true
}, {
  "name": "condition",
  "type": "string",
  "optional": true
}, {
  "name": "isAntibreakpoint",
  "type": "boolean",
  "optional": true
}], ["breakpointId", "locations"], false);
InspectorBackend.registerCommand("Debugger.setBreakpoint", [{
  "name": "location",
  "type": "object",
  "optional": false
}, {
  "name": "condition",
  "type": "string",
  "optional": true
}], ["breakpointId", "actualLocation"], false);
InspectorBackend.registerCommand("Debugger.removeBreakpoint", [{
  "name": "breakpointId",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Debugger.continueToLocation", [{
  "name": "location",
  "type": "object",
  "optional": false
}, {
  "name": "interstatementLocation",
  "type": "boolean",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Debugger.stepOver", [], [], false);
InspectorBackend.registerCommand("Debugger.stepInto", [], [], false);
InspectorBackend.registerCommand("Debugger.stepOut", [], [], false);
InspectorBackend.registerCommand("Debugger.pause", [], [], false);
InspectorBackend.registerCommand("Debugger.resume", [], [], false);
InspectorBackend.registerCommand("Debugger.searchInContent", [{
  "name": "scriptId",
  "type": "string",
  "optional": false
}, {
  "name": "query",
  "type": "string",
  "optional": false
}, {
  "name": "caseSensitive",
  "type": "boolean",
  "optional": true
}, {
  "name": "isRegex",
  "type": "boolean",
  "optional": true
}], ["result"], false);
InspectorBackend.registerCommand("Debugger.canSetScriptSource", [], ["result"], false);
InspectorBackend.registerCommand("Debugger.setScriptSource", [{
  "name": "scriptId",
  "type": "string",
  "optional": false
}, {
  "name": "scriptSource",
  "type": "string",
  "optional": false
}, {
  "name": "preview",
  "type": "boolean",
  "optional": true
}], ["callFrames", "result", "asyncStackTrace"], true);
InspectorBackend.registerCommand("Debugger.restartFrame", [{
  "name": "callFrameId",
  "type": "string",
  "optional": false
}], ["callFrames", "result", "asyncStackTrace"], false);
InspectorBackend.registerCommand("Debugger.getScriptSource", [{
  "name": "scriptId",
  "type": "string",
  "optional": false
}], ["scriptSource"], false);
InspectorBackend.registerCommand("Debugger.getFunctionDetails", [{
  "name": "functionId",
  "type": "string",
  "optional": false
}], ["details"], false);
InspectorBackend.registerCommand("Debugger.setPauseOnExceptions", [{
  "name": "state",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Debugger.evaluateOnCallFrame", [{
  "name": "callFrameId",
  "type": "string",
  "optional": false
}, {
  "name": "expression",
  "type": "string",
  "optional": false
}, {
  "name": "objectGroup",
  "type": "string",
  "optional": true
}, {
  "name": "includeCommandLineAPI",
  "type": "boolean",
  "optional": true
}, {
  "name": "doNotPauseOnExceptionsAndMuteConsole",
  "type": "boolean",
  "optional": true
}, {
  "name": "returnByValue",
  "type": "boolean",
  "optional": true
}, {
  "name": "generatePreview",
  "type": "boolean",
  "optional": true
}], ["result", "wasThrown", "exceptionDetails"], false);
InspectorBackend.registerCommand("Debugger.compileScript", [{
  "name": "expression",
  "type": "string",
  "optional": false
}, {
  "name": "sourceURL",
  "type": "string",
  "optional": false
}, {
  "name": "executionContextId",
  "type": "number",
  "optional": true
}], ["scriptId", "exceptionDetails"], false);
InspectorBackend.registerCommand("Debugger.runScript", [{
  "name": "scriptId",
  "type": "string",
  "optional": false
}, {
  "name": "executionContextId",
  "type": "number",
  "optional": true
}, {
  "name": "objectGroup",
  "type": "string",
  "optional": true
}, {
  "name": "doNotPauseOnExceptionsAndMuteConsole",
  "type": "boolean",
  "optional": true
}], ["result", "exceptionDetails"], false);
InspectorBackend.registerCommand("Debugger.setOverlayMessage", [{
  "name": "message",
  "type": "string",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Debugger.setVariableValue", [{
  "name": "scopeNumber",
  "type": "number",
  "optional": false
}, {
  "name": "variableName",
  "type": "string",
  "optional": false
}, {
  "name": "newValue",
  "type": "object",
  "optional": false
}, {
  "name": "callFrameId",
  "type": "string",
  "optional": true
}, {
  "name": "functionObjectId",
  "type": "string",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Debugger.getStepInPositions", [{
  "name": "callFrameId",
  "type": "string",
  "optional": false
}], ["stepInPositions"], false);
InspectorBackend.registerCommand("Debugger.getBacktrace", [], ["callFrames", "asyncStackTrace"], false);
InspectorBackend.registerCommand("Debugger.skipStackFrames", [{
  "name": "script",
  "type": "string",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Debugger.setAsyncCallStackDepth", [{
  "name": "maxDepth",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerDOMDebuggerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "DOMDebugger");
InspectorBackend.registerEnum("DOMDebugger.DOMBreakpointType", {
  SubtreeModified: "subtree-modified",
  AttributeModified: "attribute-modified",
  NodeRemoved: "node-removed"
});
InspectorBackend.registerCommand("DOMDebugger.setDOMBreakpoint", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "type",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOMDebugger.removeDOMBreakpoint", [{
  "name": "nodeId",
  "type": "number",
  "optional": false
}, {
  "name": "type",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOMDebugger.setEventListenerBreakpoint", [{
  "name": "eventName",
  "type": "string",
  "optional": false
}, {
  "name": "targetName",
  "type": "string",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("DOMDebugger.removeEventListenerBreakpoint", [{
  "name": "eventName",
  "type": "string",
  "optional": false
}, {
  "name": "targetName",
  "type": "string",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("DOMDebugger.setInstrumentationBreakpoint", [{
  "name": "eventName",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOMDebugger.removeInstrumentationBreakpoint", [{
  "name": "eventName",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOMDebugger.setXHRBreakpoint", [{
  "name": "url",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DOMDebugger.removeXHRBreakpoint", [{
  "name": "url",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerProfilerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Profiler");
InspectorBackend.registerEvent("Profiler.consoleProfileStarted", ["id", "location", "title"]);
InspectorBackend.registerEvent("Profiler.consoleProfileFinished", ["id", "location", "profile", "title"]);
InspectorBackend.registerCommand("Profiler.enable", [], [], false);
InspectorBackend.registerCommand("Profiler.disable", [], [], false);
InspectorBackend.registerCommand("Profiler.setSamplingInterval", [{
  "name": "interval",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Profiler.start", [], [], false);
InspectorBackend.registerCommand("Profiler.stop", [], ["profile"], false);
InspectorBackend.registerHeapProfilerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "HeapProfiler");
InspectorBackend.registerEvent("HeapProfiler.addHeapSnapshotChunk", ["chunk"]);
InspectorBackend.registerEvent("HeapProfiler.resetProfiles", []);
InspectorBackend.registerEvent("HeapProfiler.reportHeapSnapshotProgress", ["done", "total", "finished"]);
InspectorBackend.registerEvent("HeapProfiler.lastSeenObjectId", ["lastSeenObjectId", "timestamp"]);
InspectorBackend.registerEvent("HeapProfiler.heapStatsUpdate", ["statsUpdate"]);
InspectorBackend.registerCommand("HeapProfiler.enable", [], [], false);
InspectorBackend.registerCommand("HeapProfiler.disable", [], [], false);
InspectorBackend.registerCommand("HeapProfiler.startTrackingHeapObjects", [{
  "name": "trackAllocations",
  "type": "boolean",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("HeapProfiler.stopTrackingHeapObjects", [{
  "name": "reportProgress",
  "type": "boolean",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("HeapProfiler.takeHeapSnapshot", [{
  "name": "reportProgress",
  "type": "boolean",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("HeapProfiler.collectGarbage", [], [], false);
InspectorBackend.registerCommand("HeapProfiler.getObjectByHeapObjectId", [{
  "name": "objectId",
  "type": "string",
  "optional": false
}, {
  "name": "objectGroup",
  "type": "string",
  "optional": true
}], ["result"], false);
InspectorBackend.registerCommand("HeapProfiler.getHeapObjectId", [{
  "name": "objectId",
  "type": "string",
  "optional": false
}], ["heapSnapshotObjectId"], false);
InspectorBackend.registerServiceWorkerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Worker");
InspectorBackend.registerEvent("Worker.workerCreated", ["workerId", "url", "inspectorConnected"]);
InspectorBackend.registerEvent("Worker.workerTerminated", ["workerId"]);
InspectorBackend.registerEvent("Worker.dispatchMessageFromWorker", ["workerId", "message"]);
InspectorBackend.registerEvent("Worker.disconnectedFromWorker", []);
InspectorBackend.registerCommand("Worker.enable", [], [], false);
InspectorBackend.registerCommand("Worker.disable", [], [], false);
InspectorBackend.registerCommand("Worker.sendMessageToWorker", [{
  "name": "workerId",
  "type": "number",
  "optional": false
}, {
  "name": "message",
  "type": "object",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Worker.canInspectWorkers", [], ["result"], false);
InspectorBackend.registerCommand("Worker.connectToWorker", [{
  "name": "workerId",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Worker.disconnectFromWorker", [{
  "name": "workerId",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Worker.setAutoconnectToWorkers", [{
  "name": "value",
  "type": "boolean",
  "optional": false
}], [], false);
InspectorBackend.registerCanvasDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Canvas");
InspectorBackend.registerEnum("Canvas.CallArgumentType", {
  Object: "object",
  Function: "function",
  Undefined: "undefined",
  String: "string",
  Number: "number",
  Boolean: "boolean"
});
InspectorBackend.registerEnum("Canvas.CallArgumentSubtype", {
  Array: "array",
  Null: "null",
  Node: "node",
  Regexp: "regexp",
  Date: "date"
});
InspectorBackend.registerEvent("Canvas.contextCreated", ["frameId"]);
InspectorBackend.registerEvent("Canvas.traceLogsRemoved", ["frameId", "traceLogId"]);
InspectorBackend.registerCommand("Canvas.enable", [], [], false);
InspectorBackend.registerCommand("Canvas.disable", [], [], false);
InspectorBackend.registerCommand("Canvas.dropTraceLog", [{
  "name": "traceLogId",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Canvas.hasUninstrumentedCanvases", [], ["result"], false);
InspectorBackend.registerCommand("Canvas.captureFrame", [{
  "name": "frameId",
  "type": "string",
  "optional": true
}], ["traceLogId"], false);
InspectorBackend.registerCommand("Canvas.startCapturing", [{
  "name": "frameId",
  "type": "string",
  "optional": true
}], ["traceLogId"], false);
InspectorBackend.registerCommand("Canvas.stopCapturing", [{
  "name": "traceLogId",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("Canvas.getTraceLog", [{
  "name": "traceLogId",
  "type": "string",
  "optional": false
}, {
  "name": "startOffset",
  "type": "number",
  "optional": true
}, {
  "name": "maxLength",
  "type": "number",
  "optional": true
}], ["traceLog"], false);
InspectorBackend.registerCommand("Canvas.replayTraceLog", [{
  "name": "traceLogId",
  "type": "string",
  "optional": false
}, {
  "name": "stepNo",
  "type": "number",
  "optional": false
}], ["resourceState", "replayTime"], false);
InspectorBackend.registerCommand("Canvas.getResourceState", [{
  "name": "traceLogId",
  "type": "string",
  "optional": false
}, {
  "name": "resourceId",
  "type": "string",
  "optional": false
}], ["resourceState"], false);
InspectorBackend.registerCommand("Canvas.evaluateTraceLogCallArgument", [{
  "name": "traceLogId",
  "type": "string",
  "optional": false
}, {
  "name": "callIndex",
  "type": "number",
  "optional": false
}, {
  "name": "argumentIndex",
  "type": "number",
  "optional": false
}, {
  "name": "objectGroup",
  "type": "string",
  "optional": true
}], ["result", "resourceState"], false);
InspectorBackend.registerInputDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Input");
InspectorBackend.registerEnum("Input.TouchPointState", {
  TouchPressed: "touchPressed",
  TouchReleased: "touchReleased",
  TouchMoved: "touchMoved",
  TouchStationary: "touchStationary",
  TouchCancelled: "touchCancelled"
});
InspectorBackend.registerCommand("Input.dispatchKeyEvent", [{
  "name": "type",
  "type": "string",
  "optional": false
}, {
  "name": "modifiers",
  "type": "number",
  "optional": true
}, {
  "name": "timestamp",
  "type": "number",
  "optional": true
}, {
  "name": "text",
  "type": "string",
  "optional": true
}, {
  "name": "unmodifiedText",
  "type": "string",
  "optional": true
}, {
  "name": "keyIdentifier",
  "type": "string",
  "optional": true
}, {
  "name": "windowsVirtualKeyCode",
  "type": "number",
  "optional": true
}, {
  "name": "nativeVirtualKeyCode",
  "type": "number",
  "optional": true
}, {
  "name": "autoRepeat",
  "type": "boolean",
  "optional": true
}, {
  "name": "isKeypad",
  "type": "boolean",
  "optional": true
}, {
  "name": "isSystemKey",
  "type": "boolean",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Input.dispatchMouseEvent", [{
  "name": "type",
  "type": "string",
  "optional": false
}, {
  "name": "x",
  "type": "number",
  "optional": false
}, {
  "name": "y",
  "type": "number",
  "optional": false
}, {
  "name": "modifiers",
  "type": "number",
  "optional": true
}, {
  "name": "timestamp",
  "type": "number",
  "optional": true
}, {
  "name": "button",
  "type": "string",
  "optional": true
}, {
  "name": "clickCount",
  "type": "number",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Input.dispatchTouchEvent", [{
  "name": "type",
  "type": "string",
  "optional": false
}, {
  "name": "touchPoints",
  "type": "object",
  "optional": false
}, {
  "name": "modifiers",
  "type": "number",
  "optional": true
}, {
  "name": "timestamp",
  "type": "number",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Input.emulateTouchFromMouseEvent", [{
  "name": "type",
  "type": "string",
  "optional": false
}, {
  "name": "x",
  "type": "number",
  "optional": false
}, {
  "name": "y",
  "type": "number",
  "optional": false
}, {
  "name": "deltaX",
  "type": "number",
  "optional": true
}, {
  "name": "deltaY",
  "type": "number",
  "optional": true
}, {
  "name": "modifiers",
  "type": "number",
  "optional": true
}, {
  "name": "timestamp",
  "type": "number",
  "optional": true
}, {
  "name": "button",
  "type": "string",
  "optional": true
}, {
  "name": "clickCount",
  "type": "number",
  "optional": true
}], [], false);
InspectorBackend.registerLayerTreeDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "LayerTree");
InspectorBackend.registerEnum("LayerTree.ScrollRectType", {
  RepaintsOnScroll: "RepaintsOnScroll",
  TouchEventHandler: "TouchEventHandler",
  WheelEventHandler: "WheelEventHandler"
});
InspectorBackend.registerEvent("LayerTree.layerTreeDidChange", ["layers"]);
InspectorBackend.registerEvent("LayerTree.layerPainted", ["layerId", "clip"]);
InspectorBackend.registerCommand("LayerTree.enable", [], [], false);
InspectorBackend.registerCommand("LayerTree.disable", [], [], false);
InspectorBackend.registerCommand("LayerTree.compositingReasons", [{
  "name": "layerId",
  "type": "string",
  "optional": false
}], ["compositingReasons"], false);
InspectorBackend.registerCommand("LayerTree.makeSnapshot", [{
  "name": "layerId",
  "type": "string",
  "optional": false
}], ["snapshotId"], false);
InspectorBackend.registerCommand("LayerTree.loadSnapshot", [{
  "name": "data",
  "type": "string",
  "optional": false
}], ["snapshotId"], false);
InspectorBackend.registerCommand("LayerTree.releaseSnapshot", [{
  "name": "snapshotId",
  "type": "string",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("LayerTree.profileSnapshot", [{
  "name": "snapshotId",
  "type": "string",
  "optional": false
}, {
  "name": "minRepeatCount",
  "type": "number",
  "optional": true
}, {
  "name": "minDuration",
  "type": "number",
  "optional": true
}], ["timings"], false);
InspectorBackend.registerCommand("LayerTree.replaySnapshot", [{
  "name": "snapshotId",
  "type": "string",
  "optional": false
}, {
  "name": "fromStep",
  "type": "number",
  "optional": true
}, {
  "name": "toStep",
  "type": "number",
  "optional": true
}, {
  "name": "scale",
  "type": "number",
  "optional": true
}], ["dataURL"], false);
InspectorBackend.registerCommand("LayerTree.snapshotCommandLog", [{
  "name": "snapshotId",
  "type": "string",
  "optional": false
}], ["commandLog"], false);
InspectorBackend.registerGeolocationDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Geolocation");
InspectorBackend.registerCommand("Geolocation.setGeolocationOverride", [{
  "name": "latitude",
  "type": "number",
  "optional": true
}, {
  "name": "longitude",
  "type": "number",
  "optional": true
}, {
  "name": "accuracy",
  "type": "number",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Geolocation.clearGeolocationOverride", [], [], false);
InspectorBackend.registerDeviceOrientationDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "DeviceOrientation");
InspectorBackend.registerCommand("DeviceOrientation.setDeviceOrientationOverride", [{
  "name": "alpha",
  "type": "number",
  "optional": false
}, {
  "name": "beta",
  "type": "number",
  "optional": false
}, {
  "name": "gamma",
  "type": "number",
  "optional": false
}], [], false);
InspectorBackend.registerCommand("DeviceOrientation.clearDeviceOrientationOverride", [], [], false);
InspectorBackend.registerTracingDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Tracing");
InspectorBackend.registerEvent("Tracing.started", ["consoleTimeline", "sessionId"]);
InspectorBackend.registerEvent("Tracing.stopped", []);
InspectorBackend.registerEvent("Tracing.dataCollected", ["value"]);
InspectorBackend.registerEvent("Tracing.tracingComplete", []);
InspectorBackend.registerEvent("Tracing.bufferUsage", ["value"]);
InspectorBackend.registerCommand("Tracing.start", [{
  "name": "categories",
  "type": "string",
  "optional": false
}, {
  "name": "options",
  "type": "string",
  "optional": false
}, {
  "name": "bufferUsageReportingInterval",
  "type": "number",
  "optional": true
}], [], false);
InspectorBackend.registerCommand("Tracing.end", [], [], false);
InspectorBackend.registerCommand("Tracing.getCategories", [], ["categories"], false);
InspectorBackend.registerPowerDispatcher = InspectorBackend.registerDomainDispatcher.bind(InspectorBackend, "Power");
InspectorBackend.registerEvent("Power.dataAvailable", ["value"]);
InspectorBackend.registerCommand("Power.start", [], [], false);
InspectorBackend.registerCommand("Power.end", [], [], false);
InspectorBackend.registerCommand("Power.canProfilePower", [], ["result"], false);
InspectorBackend.registerCommand("Power.getAccuracyLevel", [], ["result"], false);
