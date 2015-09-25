// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @constructor
 * @param {!WebInspector.Workspace} workspace
 * @param {!WebInspector.FileSystemWorkspaceBinding} fileSystemWorkspaceBinding
 * @param {!WebInspector.FileSystemMapping} fileSystemMapping
 */
WebInspector.NetworkMapping = function(workspace, fileSystemWorkspaceBinding, fileSystemMapping)
{
    this._workspace = workspace;
    this._fileSystemWorkspaceBinding = fileSystemWorkspaceBinding;
    this._fileSystemMapping = fileSystemMapping;
    InspectorFrontendHost.events.addEventListener(InspectorFrontendHostAPI.Events.RevealSourceLine, this._revealSourceLine, this);
    fileSystemWorkspaceBinding.fileSystemManager().addEventListener(WebInspector.IsolatedFileSystemManager.Events.FileSystemAdded, this._fileSystemAdded, this);
    fileSystemWorkspaceBinding.fileSystemManager().addEventListener(WebInspector.IsolatedFileSystemManager.Events.FileSystemRemoved, this._fileSystemRemoved, this);
}

WebInspector.NetworkMapping.prototype = {
    /**
     * @param {!WebInspector.Event} event
     */
    _fileSystemAdded: function(event)
    {
        var fileSystem = /** @type {!WebInspector.IsolatedFileSystem} */ (event.data);
        this._fileSystemMapping.addFileSystem(fileSystem.path());
    },

    /**
     * @param {!WebInspector.Event} event
     */
    _fileSystemRemoved: function(event)
    {
        var fileSystem = /** @type {!WebInspector.IsolatedFileSystem} */ (event.data);
        this._fileSystemMapping.removeFileSystem(fileSystem.path());
    },

    /**
     * @param {!WebInspector.UISourceCode} uiSourceCode
     * @return {string}
     */
    networkURL: function(uiSourceCode)
    {
        if (uiSourceCode.project().type() === WebInspector.projectTypes.FileSystem) {
            var fileSystemPath = this._fileSystemWorkspaceBinding.fileSystemPath(uiSourceCode.project().id());
            return this.urlForPath(fileSystemPath, uiSourceCode.path());
        }
        return uiSourceCode.originURL();
    },

    /**
     * @param {string} url
     * @return {boolean}
     */
    hasMappingForURL: function(url)
    {
        return this._fileSystemMapping.hasMappingForURL(url);
    },

    /**
     * @param {string} url
     * @param {!WebInspector.Target} target
     * @return {?WebInspector.UISourceCode}
     */
    _networkUISourceCodeForURL: function(url, target)
    {
        var splitURL = WebInspector.ParsedURL.splitURLIntoPathComponents(url);
        var projectId = WebInspector.NetworkProject.projectId(target, splitURL[0], false);
        var project = this._workspace.project(projectId);
        return project ? project.uiSourceCode(splitURL.slice(1).join("/")) : null;
    },

    /**
     * @param {string} url
     * @param {!WebInspector.Target} target
     * @return {?WebInspector.UISourceCode}
     */
    _contentScriptUISourceCodeForURL: function(url, target)
    {
        var splitURL = WebInspector.ParsedURL.splitURLIntoPathComponents(url);
        var projectId = WebInspector.NetworkProject.projectId(target, splitURL[0], true);
        var project = this._workspace.project(projectId);
        return project ? project.uiSourceCode(splitURL.slice(1).join("/")) : null;
    },

    /**
     * @param {string} url
     * @param {!WebInspector.Target} target
     * @return {?WebInspector.UISourceCode}
     */
    uiSourceCodeForURL: function(url, target)
    {
        var file = this._fileSystemMapping.fileForURL(url);
        if (file) {
            var projectId = WebInspector.FileSystemWorkspaceBinding.projectId(file.fileSystemPath);
            var project = this._workspace.project(projectId);
            return project ? project.uiSourceCode(file.filePath) : null;
        }

        return this._networkUISourceCodeForURL(url, target) || this._contentScriptUISourceCodeForURL(url, target);
    },

    /**
     * @param {string} url
     * @return {?WebInspector.UISourceCode}
     */
    uiSourceCodeForURLForAnyTarget: function(url)
    {
        for (var target of WebInspector.targetManager.targets()) {
            var result = this.uiSourceCodeForURL(url, target);
            if (result)
                return result;
        }
        return null;
    },

    /**
     * @param {string} fileSystemPath
     * @param {string} filePath
     * @return {string}
     */
    urlForPath: function(fileSystemPath, filePath)
    {
        return this._fileSystemMapping.urlForPath(fileSystemPath, filePath);
    },

    /**
     * @param {!WebInspector.UISourceCode} networkUISourceCode
     * @param {!WebInspector.UISourceCode} uiSourceCode
     */
    addMapping: function(networkUISourceCode, uiSourceCode)
    {
        var url = this.networkURL(networkUISourceCode);
        var path = uiSourceCode.path();
        var fileSystemPath = this._fileSystemWorkspaceBinding.fileSystemPath(uiSourceCode.project().id());
        this._fileSystemMapping.addMappingForResource(url, fileSystemPath, path);
    },

    /**
     * @param {!WebInspector.UISourceCode} uiSourceCode
     */
    removeMapping: function(uiSourceCode)
    {
        var networkURL = this.networkURL(uiSourceCode);
        this._fileSystemMapping.removeMappingForURL(networkURL);
    },

    /**
     * @param {!WebInspector.Event} event
     */
    _revealSourceLine: function(event)
    {
        var url = /** @type {string} */ (event.data["url"]);
        var lineNumber = /** @type {number} */ (event.data["lineNumber"]);
        var columnNumber = /** @type {number} */ (event.data["columnNumber"]);

        var uiSourceCode = this.uiSourceCodeForURLForAnyTarget(url);
        if (uiSourceCode) {
            WebInspector.Revealer.reveal(uiSourceCode.uiLocation(lineNumber, columnNumber));
            return;
        }

        /**
         * @param {!WebInspector.Event} event
         * @this {WebInspector.NetworkMapping}
         */
        function listener(event)
        {
            var uiSourceCode = /** @type {!WebInspector.UISourceCode} */ (event.data);
            if (this.networkURL(uiSourceCode) === url) {
                WebInspector.Revealer.reveal(uiSourceCode.uiLocation(lineNumber, columnNumber));
                this._workspace.removeEventListener(WebInspector.Workspace.Events.UISourceCodeAdded, listener, this);
            }
        }

        this._workspace.addEventListener(WebInspector.Workspace.Events.UISourceCodeAdded, listener, this);
    },
}

/**
 * @type {!WebInspector.NetworkMapping}
 */
WebInspector.networkMapping;
