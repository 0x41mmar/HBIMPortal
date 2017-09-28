//==============================================================================
// A360 Viewing Application Reference Implementation
// Builds on the basic ViewingApplication by adding A360 specific UI and behaviors.
// This includes adding a tree browser for browsing the contents of the document.
// Upon clicking on an item, the appropriate viewer is launched.
//==============================================================================


Autodesk.A360ViewingApplication = function(elementId, options, hook)
{
    var app = this;
    app.hook = hook;
    Autodesk.Viewing.ViewingApplication.call(this, elementId, options);

    // Create the view.
    // TODO:
    // Add a 'pin' UI that controls the docking.
    this.viewerContainer  = document.createElement("div");
    this.viewerContainer.className = "viewer-container docked";
    this.viewerContainer.id = this.appContainerId + '-viewing-container';

    this.leftWidthGlobal;
    this.leftPanelVisible = true;

    app.container.appendChild(this.viewerContainer);
};

Autodesk.A360ViewingApplication.prototype = Object.create(Autodesk.Viewing.ViewingApplication.prototype);


Autodesk.A360ViewingApplication.prototype.finish = function() {

    this.searchField = null;
    this.myExplorerView = null;
    this.myBrowser = null;
    this.myTree = null;
    this.myLeftPanel = null;
    this.leftPanel = null;


    window.removeEventListener('resize', this.onWindowResize);
    this.onWindowResize = null;

    this.container.removeEventListener('mouseleave', this.stopDraggingResizeSlider );

    this.startDraggingResizeSlider = null;
    this.stopDraggingResizeSlider = null;
    this.dragResizeSlider = null;


    Autodesk.Viewing.ViewingApplication.prototype.finish.call(this);
};


// generate an id for the viewerContainer
Autodesk.A360ViewingApplication.prototype.getViewerContainer = function()
{
    return this.viewerContainer;
};

Autodesk.A360ViewingApplication.prototype.getLeftPanelContainerId = function()
{
    return this.appContainerId + '-leftPanel';
};

Autodesk.A360ViewingApplication.prototype.createExplorerTree = function(modelDocument, parentContainerId)
{
    var application = this;
    var explorerDelegate = new Autodesk.Viewing.UI.TreeDelegate();

    explorerDelegate.getTreeNodeId = function(node)
    {
        return node.guid;
    };

    explorerDelegate.getTreeNodeLabel = function(node)
    {
        // Just the name for now, but can display any info from the node.
        //
        return node.name || 'Unnamed ' + node.type;
    };

    explorerDelegate.getTreeNodeClass = function(node)
    {
        // Return the type of the node.  This way, in css, the designer can specify
        // custom styling per type like this:
        //
        // group.design > icon.collapsed {
        //    background: url("design_open.png") no-repeat;
        //
        // group.design > icon.expanded {
        //    background: url("design_open") no-repeat;
        //
        return node.type === 'geometry' ? node.type + '_' + node.role : node.type;
    };

    explorerDelegate.isTreeNodeGroup = function(node)
    {
        // Folders and designs are currently what we consider groups.
        //
        return node.type === 'folder' || node.type === 'design' || (1 < modelDocument.getNumViews(node));
    };

    explorerDelegate.shouldCreateTreeNode = function(node)
    {
        // Only filtering out resource nodes.
        //
        return node.type !== 'resource';
    };

    explorerDelegate.onTreeNodeClick = function(tree, node, event)
    {
        application.selectItem(node);

        // NOTE:
        // We can change the selection behavior here and in onItemSelected.
        // Currently we force a single selected object.  We can check the
        // event to see if any modifiers were used, and change what we consider
        // selected.
    };

    var viewableItems = Autodesk.Viewing.Document.getSubItemsWithProperties(modelDocument.getRootItem(), {'type':'folder','role':'viewable'}, true);

    // There should be at least one folder whose role is viewable.
    // We'll display the first one.
    //
    if(viewableItems.length > 0)
    {
        var options = { localize: true };
        var parentContainer = document.getElementById(parentContainerId);
        this.myTree = new Autodesk.Viewing.UI.Tree(explorerDelegate, viewableItems[0], parentContainer, options);
    }
    else
    {
        console.log(modelDocument);
        throw 'Invalid document';
    }
};

Autodesk.A360ViewingApplication.prototype.createBrowserView = function(modelDocument, parentContainerId)
{
    var application = this;
    var browserDelegate = new Autodesk.Viewing.Private.BrowserDelegate();

    browserDelegate.getNodeId = function(node)
    {
        return node.guid;
    };

    browserDelegate.getNodeLabel = function(node)
    {
        // Just the name for now, but can display any info from the node.
        //
        return node.name ? node.name : 'Unnamed ' + node.type;
    };

    browserDelegate.getNodeClass = function(node)
    {
        return node.type;
    };

    browserDelegate.hasThumbnail = function(node)
    {
        return ( (node.hasThumbnail) && (node.hasThumbnail).toLowerCase() === "true" );
    };

    browserDelegate.getThumbnailOptions = function(node)
    {
        var requestedWidth = application.options && application.options.hasOwnProperty('kThumbnailWidth') ? application.options.kThumbnailWidth : 200;
        var requestedHeight = application.options && application.options.hasOwnProperty('kThumbnailHeight') ? application.options.kThumbnailHeight : 200;

        return this.hasThumbnail(node) ? application.myDocument.getThumbnailOptions(node, requestedWidth, requestedHeight) : null;
    };

    browserDelegate.getThumbnail = function(node)
    {
        var requestedWidth = application.options && application.options.hasOwnProperty('kThumbnailWidth') ? application.options.kThumbnailWidth : 200;
        var requestedHeight = application.options && application.options.hasOwnProperty('kThumbnailHeight') ? application.options.kThumbnailHeight : 200;

        return this.hasThumbnail(node) ? application.myDocument.getThumbnailPath(node, requestedWidth, requestedHeight) : null;
    };

    browserDelegate.onNodeClick = function(browser, node, event)
    {
        application.selectItem(node);
        event.stopPropagation();
    };

    browserDelegate.hasContent = function(node)
    {
        return 1 < modelDocument.getNumViews(node);
    };

    browserDelegate.selectItem = function(id) {

        var element = document.querySelector("#A360-cameraview-" + id);

        if (element) {
            element.classList.add('cameraview-selected');

            // Show selection on front of card as well.
            application.myBrowser.addToSelection([modelDocument.getParentId(id)]);
        }
    };

    browserDelegate.deselectItem = function(id) {
        var element = document.querySelector("#A360-cameraview-" + id);

        if (element) {
            element.classList.remove('cameraview-selected');

            // Deselect the front of the card.
            application.myBrowser.removeFromSelection([modelDocument.getParentId(id)]);
        }
    };

    browserDelegate.addContent = function(node, card)
    {
        var parent = card;
		var cardparent = card.parentNode;

		var wrapper = document.createElement("div");
        wrapper.classList.add("wrappercam");
        wrapper.innerHTML = "<p>Views</p>";
        parent.appendChild(wrapper);

        var views = document.createElement("div");
        views.classList.add("cameraviews");
        wrapper.appendChild(views);

        function addViewClickHandler(viewName, view) {

            var viewItem = document.createElement("div");
            viewItem.id = "A360-cameraview-" + view.guid;
            viewItem.classList.add("cameraview");
            viewItem.innerHTML = viewName;
            views.appendChild(viewItem);
            viewItem.onclick = function(e)
                                {
                                    application.selectItem(view);
                                    e.stopPropagation();
                                }
        }

        var childCount = node.children ? node.children.length : 0;
        var viewCount = 0;
        for (var childIndex = 0; childIndex < childCount; ++childIndex) {
            // Add the camera views.
            var child = node.children[childIndex];
            if (child.type === "view") {
                ++viewCount;
                addViewClickHandler(this.getNodeLabel(child), child);
            }
        }

		var viewsbtn = document.createElement("div");
        viewsbtn.innerHTML = "<p id='count'>" + viewCount +"</p><p id='close'>X</p>";
        viewsbtn.classList.add("viewsbtn");
        cardparent.appendChild(viewsbtn);
        viewsbtn.onclick = function(e)
                            {
                                parent.classList.toggle("flipped");
                                e.preventDefault();
                                return false;
                            }
    };

    // The browser starts looking for geometry items at the same root as the tree -
    // the first folder-viewable item - not from the document's root.
    //
    var viewableItems = Autodesk.Viewing.Document.getSubItemsWithProperties(modelDocument.getRootItem(), {'type':'folder','role':'viewable'}, true);
    var root = viewableItems[0];
    var leafItems = Autodesk.Viewing.Document.getSubItemsWithProperties(root, {'type':'geometry'}, true);

    this.myBrowser = new Autodesk.Viewing.Private.Browser(browserDelegate, leafItems, parentContainerId);
};

Autodesk.A360ViewingApplication.prototype.loadDocumentWithItemAndObject = function(documentId, itemId, objectId, accessControlProperties)
{
    var app = this;
    function loadItem(document, errorsandwarnings) {
        // This demonstrates that you can either select the item directly (if you have it, it's
        // more efficient), or by its guid.  Note, a callback function can be provided, which
        // is executed once the item has been selected.  In this case, isolateObject() isolates
        // the object that's requested.
        //
        // Alternatively, one can add new methods to A360ViewingApplication to abstract all of this
        // functionality, or override its existing loadDocument and selectItem, selectItemById
        // methods to execute these extra operations.
        //
        var geometryItems;
        var selected = true;

        // When item id is not available as part of options object passed from application, try to get
        // the item id passed directly from app URL.
        if (!itemId) {
            itemId = Autodesk.Viewing.Private.getParameterByName("itemid");
        }

        if(itemId) {
            geometryItems = Autodesk.Viewing.Document.getSubItemsWithProperties(document.getRootItem(), {'guid':itemId}, true);
            if(geometryItems.length > 0) {
                selected = app.selectItem(geometryItems[0], geometryLoaded, geometryFailedToLoad);
            }
        } else {
            geometryItems = Autodesk.Viewing.Document.getSubItemsWithProperties(document.getRootItem(), {'type':'geometry'}, true);
            if(geometryItems.length > 0) {
                var initialItem = app.getDefaultGeometry(geometryItems);
                selected = app.selectItemById(initialItem.guid, geometryLoaded, geometryFailedToLoad);
                itemId = initialItem.guid;
            }
        }
        Autodesk.Viewing.Private.docItemId = itemId;
    }

    function loadFailed(errorCode, errorMsg, statusCode, statusText, errors) {
        // Display an error message.
        var container = app.getViewerContainer();
        if (container) {
            if (errors && errors.length)
                Autodesk.Viewing.Private.ErrorHandler.reportErrors(container, errors);
            else
                Autodesk.Viewing.Private.ErrorHandler.reportError(container, errorCode, errorMsg, statusCode, statusText);
        }
    }

    function geometryLoaded(viewerIn, item, messages) {

        // Check if this is a 3d geometry item.
        //
        if (item.type === 'geometry' && item.role === '3d' && viewerIn) {
            var objectToLoad = parseInt(objectId);
            if (objectToLoad) {
                viewerIn.isolate(objectToLoad);
            }
        }

        // If left panel is not created, then search field is attached to
        // the viewer container and on full screen mode changes it needs
        // to appear/disappear. Add the appropriate callback.
        //
        viewer = app.getCurrentViewer();

        if(viewer && (viewer instanceof app.getViewerClass(app.k3D))) {
            if (app.myLeftPanel === null) {
                var search = document.querySelector('.search');
                viewer.addEventListener( Autodesk.Viewing.FULLSCREEN_MODE_EVENT, function(e) {
                    if (search && search.length > 0) {
                        var showSearchField = (e.mode === viewer.ScreenMode.kNormal);
                        if (showSearchField)
                            search[0].style.display = "block";
                        else
                            search[0].style.display = "none";
                    }
                });
            }
        }
		
        app.hook();
    }

    function geometryFailedToLoad(errorCode, errorMsg, errors ) {
        // Error is displayed by selectItem()
    }

    app.loadDocument(documentId, loadItem, loadFailed, accessControlProperties);
};

Autodesk.A360ViewingApplication.prototype.selectItem = function(item, onItemSelectedCallback, onItemFailedToSelectCallback)
{
    if (item.type === 'folder' || item.type === 'design') {

        this.myTree.setCollapsed(item, !this.myTree.isCollapsed(item));
        // No viewer for this folder item, so pass in null.
        //
        if(onItemSelectedCallback) {
            onItemSelectedCallback(null, item );
        }
        return true;

    } else if (1 < this.myDocument.getNumViews(item)) {

        // This is a leaf node. If the node is selected then collapse or expand.
        // Otherwise, load it.
        var isSelected = this.myTree.isSelected(item);
        if (isSelected) {
            this.myTree.setCollapsed(item, !this.myTree.isCollapsed(item));
            // No viewer for this folder item, so pass in null.
            //
            if(onItemSelectedCallback) {
                onItemSelectedCallback(null, item );
            }
            return true;
        }
    }

    var app = this;
    var onItemSelected = function( viewer, item, messages ) {
        if(viewer) {

            var onGeometryLoaded = function() {
                viewer.removeEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, onGeometryLoaded);
                if (!viewer.model.hasGeometry()) {
                    var errorCode = Autodesk.Viewing.ErrorCodes.BAD_DATA_MODEL_IS_EMPTY;
                    var errorMsg  = "Model is empty";
                    Autodesk.Viewing.Private.ErrorHandler.reportError(viewer.container, errorCode, errorMsg);
                }
            }

            if (viewer.model.isLoadDone()) {
                onGeometryLoaded();
            } else {
                viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, onGeometryLoaded);
            }

            if (onItemSelectedCallback) {
                onItemSelectedCallback( viewer, item, messages );
            }
        }
    };

    var onItemFailedToSelect = function( errorCode, errorMsg, statusCode, statusText, errors ) {
        // First display any errors that come from the viewer (WebGL, network, etc.)
        var container;
        if (errorCode) {
            container = app.getViewerContainer();
            Autodesk.Viewing.Private.ErrorHandler.reportError(container, errorCode, errorMsg, statusCode, statusText);
        }
        // Then if there are no viewer errors, display errors from the bubble if any.
        else if (errors) {
            container = app.getViewerContainer();
            if (container)
                Autodesk.Viewing.Private.ErrorHandler.reportErrors(container, errors );
        }

        if(onItemFailedToSelectCallback)
           onItemFailedToSelectCallback( errorCode, errorMsg, errors );
    };

    Autodesk.Viewing.Private.docItemId = item.guid;
    return Autodesk.Viewing.ViewingApplication.prototype.selectItem.call(this, item, onItemSelected, onItemFailedToSelect);
};

Autodesk.A360ViewingApplication.prototype.onItemSelected = function(item)
{
    if (this.myExplorerView)
    {
         this.myTree.setSelection( [this.myTree.delegate().getTreeNodeId(item)]);
         this.myBrowser.setSelection( [this.myBrowser.delegate().getNodeId(item)]);
    }
    Autodesk.Viewing.ViewingApplication.prototype.onItemSelected.call(this, item);
    this.searchField.style.visibility = (item.role && item.role === '2d') ? 'hidden' : 'visible';
};

Autodesk.A360ViewingApplication.prototype.setLeftPanelVisible = function(visible) {
    var app = this;
    if(!app.myLeftPanel) {
        return;
    }

    if(app.leftPanelVisible == visible) {
        return;
    }
    app.leftPanelVisible = visible;
    var left = document.querySelector('.leftpanel');
    var slider = document.querySelector('.resizeslider');

    if(visible) {
        slider.show();
        left.show();
    }
    else {
        slider.hide();
        left.hide();
    }
};

Autodesk.A360ViewingApplication.prototype.createLeftPanel = function( searchField )
{
    var app = this;

    // create element
    function CL(tag, className, id){
        var newElement = document.createElement(tag);
        newElement.className = className;
        if( id ){
            newElement.id = id;
        }
        return newElement;
    }

    // Set the callback for resizing the left and view panel.
    //
    var resizeSliderMouseDown = false;
    var resizeSliderMouseInitPosX = 0;

    // Since some browsers return % and some px when queried for min/max width,
    // hardcode here what we have in css for left panel.
    this.leftWidthGlobal   = 20;  // css: width     (20%)
    var maxWidthLeftPanel = 70;  // css: max-width (70%)
    var minWidthLeftPanel = 15;  // css: min-width (15%)

    this.dragResizeSlider = function(e) {
        if (resizeSliderMouseDown) {
            var pageX = e.touches ? e.touches[0].pageX : e.pageX;
            var relativeDrag  = pageX - resizeSliderMouseInitPosX;
            resizeSliderMouseInitPosX = pageX;

            var left = document.querySelector('.leftpanel');
            var view = app.getViewerContainer();
            var slider = document.querySelector('.resizeslider');
            var appContainer = document.querySelector('#' + app.appContainerId );

            var sliderWidth = ((slider.offsetWidth/appContainer.offsetWidth)*100);
            var leftWidth   = app.leftWidthGlobal + ((relativeDrag/appContainer.offsetWidth)*100);

            leftWidth = (leftWidth > maxWidthLeftPanel) ? maxWidthLeftPanel : leftWidth;
            leftWidth = (leftWidth < minWidthLeftPanel) ? minWidthLeftPanel : leftWidth;
            app.leftWidthGlobal = leftWidth;

            left.style.width = (leftWidth).toString() + "%";
            view.style.width = (100-leftWidth-sliderWidth).toString() + "%";

            var viewer = app.getCurrentViewer();
            if (viewer) {
                viewer.resize();
                viewer.resizePanels({viewer: viewer});
            }
        }
    }

    this.stopDraggingResizeSlider = function(e) {
        if (resizeSliderMouseDown) {
            resizeSliderMouseDown = false;
            var slider = document.querySelector('.resizeslider');
            var left   = document.querySelector('.leftpanel');
            var view   = app.getViewerContainer();
            slider.onmousemove = function(e) {};
            left.onmousemove = function(e) {};
            view.onmousemove = function(e) {};

            slider.onmouseup = function(e) {};
            left.onmouseup   = function(e) {};
            view.onmouseup   = function(e) {};

            // TODO:  Not sure why the above are assigning empty functions.
            //
            if (isTouchDevice()) {
                slider.ontouchmove = null;
                slider.ontouchend = null;
            }
        }
    }

    // Create left panel.
    app.leftPanel = CL("div", "leftpanel docked");
    var leftPanel = app.leftPanel;

    // Create the view buttons and attach them to left panel.
    var viewButtons = CL("div", "viewbuttons");

    // Add viewerButtons to left panel
    leftPanel.appendChild( viewButtons );

    // Add search field.
    leftPanel.appendChild(searchField);

    var treeViewBtn = CL("button", "viewbuttons treebtn");
    treeViewBtn.addEventListener('click', function( event )  {
        app.myExplorerView = app.myTree;
        app.myTree.show( true );
        app.myBrowser.show( false );
    });

    var browserViewBtn = CL("button", "viewbuttons browserbtn");
    browserViewBtn.addEventListener('click', function( event )  {
        app.myExplorerView = app.myBrowser;
        app.myTree.show( false );
        app.myBrowser.show( true );
    });
    viewButtons.appendChild( browserViewBtn );
    viewButtons.appendChild( treeViewBtn );

    var explorer = CL("div", "explorer", this.getLeftPanelContainerId() + "-explorer");
    leftPanel.appendChild( explorer );
    leftPanel.explorer = explorer;

    var resizeSlider = CL("div", "resizeslider");

    // Now attach the left panel and the view to the application.
    app.container.insertBefore(leftPanel, app.viewerContainer);
    app.container.insertBefore(resizeSlider, app.viewerContainer);

    this.startDraggingResizeSlider = function(e) {
        if (!resizeSliderMouseDown) {
            resizeSliderMouseDown = true;
            resizeSliderMouseInitPosX = e.touches ? e.touches[0].pageX : e.pageX;

            var slider = document.querySelector('.resizeslider');
            var left   = document.querySelector('.leftpanel');
            var view   = app.getViewerContainer();
            slider.onmousemove = app.dragResizeSlider;
            left.onmousemove   = app.dragResizeSlider;
            view.onmousemove   = app.dragResizeSlider;

            slider.onmouseup = app.stopDraggingResizeSlider;
            left.onmouseup   = app.stopDraggingResizeSlider;
            view.onmouseup   = app.stopDraggingResizeSlider;

            // TODO:  Not sure why the left and viewer divs are also being
            //        assigned the mouse move and mouse up listeners.
            //
            if (isTouchDevice()) {
                slider.ontouchmove = app.dragResizeSlider;
                slider.ontouchend = app.stopDraggingResizeSlider;
            }
        }
    };

    resizeSlider.addEventListener('mousedown', this.startDraggingResizeSlider);

    // TODO:  Find a way to abstract mouse vs touch events so that these
    //        isTouchDevice() calls are not everywhere in the code.
    //
    if (isTouchDevice()) {
        resizeSlider.addEventListener('touchstart', this.startDraggingResizeSlider);
    }

    app.container.addEventListener('mouseleave', this.stopDraggingResizeSlider );

    this.onWindowResize = function(e) {
        // Make sure that the slider is always visible,
        app.resizePanels();
    };

    window.addEventListener('resize', this.onWindowResize);

    return leftPanel;
};

Autodesk.A360ViewingApplication.prototype.resizePanels = function() {
    var app = this;

    var left = document.querySelector('.leftpanel');
    var slider = document.querySelector('.resizeslider');
    var view = app.getViewerContainer();
    var appContainer = app.container;

    if(app.myLeftPanel && app.leftPanelVisible) {
        var sliderWidth = ((slider.offsetWidth/appContainer.offsetWidth)*100);

        if (app.leftWidthGlobal+sliderWidth>99) app.leftWidthGlobal = 99 - sliderWidth;

        left.style.width = (app.leftWidthGlobal).toString() + "%";
        view.style.width = (100-app.leftWidthGlobal-sliderWidth).toString() + "%";
    } else {
        view.style.width = "100%";
    }
};

Autodesk.A360ViewingApplication.prototype.onDocumentLoaded = function(modelDocument, errorsandwarnings)
{
    var app = this;
    var avp = Autodesk.Viewing.Private;

    function showDesignExplorer( modelDocument )
    {
        var viewableItems = Autodesk.Viewing.Document.getSubItemsWithProperties(modelDocument.getRootItem(), {'type':'folder','role':'viewable'}, true);
        var root = viewableItems[0];
        var geometryItems = Autodesk.Viewing.Document.getSubItemsWithProperties(root, {'type':'geometry'}, true);
        if (geometryItems.length === 0)
            return false;

        if (geometryItems.length === 1) {
            // Check if the item has camera views.
            return modelDocument.getNumViews( geometryItems[0] ) > 1;
        }
        return true;
    }

    // If the explorer already exists make sure to clear it out
    // so the new document loads correctly
    if( app.myExplorerView ) {
        var explorer = app.leftPanel.explorer;
        while(explorer.firstChild){
            explorer.removeChild(explorer.firstChild);
        }
    }

    // Create a search field.
    var searchField = document.createElement( "select" );
	searchField.className = "searchfield";
	for (var model in viewModels) {
		searchField.appendChild(document.createElement('option'));
		searchField.children[model].innerText = viewModels[model]['name'];
		searchField.children[model].value = viewModels[model]['documentId'];
	}
	searchField.selectedIndex = defaultIndex;
    searchField.addEventListener('change', function() {
        documentId = this.value;
		nextState = states[this.selectedIndex];
		if (app.leftPanel != null) {
			var explorer = app.leftPanel.explorer;
			while(explorer.firstChild){
				explorer.removeChild(explorer.firstChild);
			}
		}
		/* else {//find some other way of selecting explorer element and destroying its children, or another method of getting app variable}*/
		viewer.unloadExtension("Viewing.Extension.Markup3D");
		viewerApp.finish() // what does finish even do? I know the view seems to disappear when I call it, and that's what I'm trying to do, so...
        loadApplication(getToken, viewerLoaded);
    })
	
    /*searchField.placeholder = Autodesk.Viewing.i18n.translate("Search the currently displayed content");
    searchField.setAttribute("data-i18n", "[placeholder]Search the currently displayed content");
    searchField.type = 'search';
    searchField.incremental = "incremental";*/


    // Search on keydown.  Since search can be expensive, wait a small amount
    // of time insertBefore starting a search so that we don't search on every
    // keystroke.
    //
    var searchTimer = null;

    function doIncrementalSearch()
    {
        if(searchTimer) {
            clearTimeout(searchTimer);
        }
        searchTimer = setTimeout(doSearch, 500);
    }

    function doSearch()
    {
        // Search only works for 3D content at the moment.  Check if we
        // have a 3D viewer.
        //
        var viewer = app.getCurrentViewer();
        if(viewer && (viewer instanceof app.getViewerClass(app.k3D)) && searchField.value !== viewer.searchText)
        {
            viewer.search(searchField.value, function(resultIds)
                {
                    viewer.isolate(resultIds);
                }
            );
            avp.logger.log('Searching: ' + searchField.value);
        }
        searchTimer = null;
    }

    searchField.addEventListener('keydown', function(e) {
        doIncrementalSearch();
    });

    // This is to detect when the user clicks on the 'x' to clear.
    //
    searchField.addEventListener('click', function(e) {
        if(searchField.value === '')
        {
            doSearch();
        }
    });

    this.searchField = searchField;

    var appContainer = document.querySelector('#' + app.appContainerId );
    var viewerWidth;

    if (1)//(showDesignExplorer( modelDocument )) //AMMAR: Force creating left panel
    {
		if (viewLoaded) {
			app.myLeftPanel = document.getElementsByClassName('leftpanel docked')[0];
		}
		else {
			app.myLeftPanel = app.createLeftPanel( searchField );
		}
        var explorer  = app.myLeftPanel.explorer;

        app.createExplorerTree(modelDocument, explorer.id);
        app.createBrowserView(modelDocument, explorer.id);

        app.myExplorerView  = app.myTree;
        app.myTree.show( true );
        app.myBrowser.show( false );

        viewerWidth = 79.5; // Design Explorer - initial width(20%)+ resize slider width(5%)
    }
    else
    {
        app.myExplorerView = null;
        app.myLeftPanel = null;

        var viewableItems = Autodesk.Viewing.Document.getSubItemsWithProperties(modelDocument.getRootItem(), {'type':'folder','role':'viewable'}, true);
        var root = viewableItems[0];
        var geometryItems = Autodesk.Viewing.Document.getSubItemsWithProperties(root, {'type':'geometry'}, true);
        if (geometryItems.length > 0)
        {
            // Create the resizable search field.
            var search = document.createElement( "div" );
            search.className = "search";
            app.viewerContainer.appendChild(search);
            search.appendChild( searchField );
        }

        viewerWidth = 100;
    }

    app.viewerContainer.style.width = viewerWidth+'%';
};
