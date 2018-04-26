///////////////////////////////////////////////////////////////////////////////
// Autodesk.ADN.Viewing.Extension.HeritageEditor
// by Philippe Leefsma, May 2015
//
///////////////////////////////////////////////////////////////////////////////
AutodeskNamespace("Autodesk.ADN.Viewing.Extension");

Autodesk.ADN.Viewing.Extension.HeritageEditor = function (viewer, options) {

  Autodesk.Viewing.Extension.call(this, viewer, options);

  var _panel = null;

  /////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////
  this.load = function () {

    var ctrlGroup = getControlGroup();

    createControls(ctrlGroup);

    _panel = new Autodesk.ADN.Viewing.Extension.HeritageEditor.Panel(
      viewer.container,
      newGUID());
	  
	viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this.onSelectionChanged);
	
    console.log('Autodesk.ADN.Viewing.Extension.HeritageEditor loaded');

    return true;
  };

  /////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////
  this.unload = function () {	
	
	this.viewer.removeEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this.onSelectionChanged);
    try {

      var toolbar = viewer.getToolbar(true);
  
      toolbar.removeControl(
        'Autodesk.ADN.HeritageEditor.ControlGroup');
    }
    catch (ex) {
      $('#divHeritageEditorToolbar').remove();
    }

    console.log('Autodesk.ADN.Viewing.Extension.HeritageEditor unloaded');

    return true;
  };

  /////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////
  function getControlGroup() {

    var toolbar = null;

    try {
      toolbar = viewer.getToolbar(true);

      if(!toolbar) {
        toolbar = createDivToolbar();
      }
    }
    catch (ex) {
        toolbar = createDivToolbar();
    }

    var control = toolbar.getControl(
      'Autodesk.ADN.Gallery.ControlGroup');

    if(!control) {

      control = new Autodesk.Viewing.UI.ControlGroup(
        'Autodesk.ADN.HeritageEditor.ControlGroup');

      toolbar.addControl(control);
    }

    return control;
  }

  /////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////
  function createDivToolbar() {

    var toolbarDivHtml =
      '<div id="divHeritageEditorToolbar"> </div>';

    $(viewer.container).append(toolbarDivHtml);

    $('#divToolbar').css({
      'bottom': '0%',
      'left': '50%',
      'position': 'absolute'

    });

    var toolbar = new Autodesk.Viewing.UI.ToolBar(true);

    $('#divHeritageEditorToolbar')[0].appendChild(
      toolbar.container);

    return toolbar;
  }

  /////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////
  function createControls(parentGroup) {

    var btn = createButton(
      'Autodesk.ADN.HeritageEditor.Button.Show',
      'glyphicon glyphicon-list',
      'Show Panel',
      onShowPanel);

    parentGroup.addControl(btn);
  }

  /////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////
  function onShowPanel() {

    _panel.setVisible(true);
  }

  /////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////
  function createButton(id, className, tooltip, handler) {

    var button = new Autodesk.Viewing.UI.Button(id);

    button.icon.className = className;

    button.setToolTip(tooltip);

    button.onClick = handler;

    return button;
  }

  /////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////
  function newGUID() {

    var d = new Date().getTime();

    var guid = 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
      });

    return guid;
  };

  /////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////
  Autodesk.ADN.Viewing.Extension.HeritageEditor.Panel = function(
    parentContainer,
    baseId) {

    this.content = document.createElement('div');

    this.content.id = baseId + 'PanelContentId';
    this.content.className = 'heritageeditor-panel-content';

    Autodesk.Viewing.UI.DockingPanel.call(
      this,
      parentContainer,
      baseId,
      "Object Property Editor",
      {shadow: true});

    this.container.style.top = "0px";
    this.container.style.left = "0px";

    this.container.style.width = "380px";
    this.container.style.height = "545px";

    this.container.style.resize = "auto";
	
    var html = [
      '<div class="heritageeditor-panel-container">',
        '<div class="heritageeditor-panel-controls-container">',
		'<div style="color: white;font-size: 16;" class=""><span>Node: </span><span id="HE_nodeId">' + nodeSelected + '</span></div>',
          '<div>',
		  '<div class="dropdown"><button type="button" data-toggle="dropdown" aria-expanded="false" class="btn btn-primary dropdown-toggle" style="width: 85%;margin: 10px;">',
		  'Property Category',
		  '<span class="caret"></span></button><ul id="itemCategory" class="dropdown-menu" style="width: 100%;">',
		  
		  '<li class="inputCat1"><a href="#">Historical Significance</a></li>',
		  '<li class="inputCat2"><a href="#">Transformation over Time</a></li>',
		  '<li class="inputCat3"><a href="#">Interpretation</a></li>',
		  '<li class="inputCat4"><a href="#">Preservation</a></li>',
		  
		  '</ul></div>',
		  
		  '<div class="dropdown"><button type="button" data-toggle="dropdown" aria-expanded="false" class="btn btn-info dropdown-toggle" style="width: 85%;margin: 10px;">',
		  'Property Name',
		  '<span class="caret"></span></button><ul id="itemName" class="dropdown-menu" style="width: 100%;">',
		  '<li class="inputCat1"><a href="#">Significance</a></li>',
			'<li class="inputCat1"><a href="#">Planning</a></li>',
			'<li class="inputCat1"><a href="#">List entry Description</a></li>',
			'<li class="inputCat1"><a href="#">List entry Number</a></li>',
			'<li class="inputCat1"><a href="#">Date first listed</a></li>',
			'<li class="inputCat1"><a href="#">Date of most recent amendment</a></li>',
			'<li class="inputCat1"><a href="#">Grade</a></li>',
			'<li class="inputCat1"><a href="#">Legacy System</a></li>',
			'<li class="inputCat1"><a href="#">UID</a></li>',
			'<li class="inputCat1"><a href="#">Boundary authority</a></li>',
			'<li class="inputCat1"><a href="#">Asset Grouping</a></li>',
			'<li class="inputCat1"><a href="#">Reasons for Designation</a></li>',
			'<li class="inputCat1"><a href="#">History</a></li>',
			'<li class="inputCat1"><a href="#">Details</a></li>',
			'<li class="inputCat1"><a href="#">Listing NGR</a></li>',
			'<li class="inputCat1"><a href="#">Selected Sources</a></li>',
			'<li class="inputCat1"><a href="#">Information Page</a></li>',
			'<li class="inputCat1"><a href="#">Specification Report</a></li>',
			'<li class="inputCat1"><a href="#">Interesting Marks</a></li>',
		  '<li class="inputCat2"><a href="#">Phase I</a></li>',
'<li class="inputCat2"><a href="#">Phase II</a></li>',
'<li class="inputCat2"><a href="#">Phase III</a></li>',
'<li class="inputCat2"><a href="#">Owner I</a></li>',
'<li class="inputCat2"><a href="#">Owner II</a></li>',
'<li class="inputCat2"><a href="#">Owner III</a></li>',
'<li class="inputCat3"><a href="#">Identity</a></li>',
'<li class="inputCat3"><a href="#">Value</a></li>',
'<li class="inputCat3"><a href="#">Traditions</a></li>',
'<li class="inputCat3"><a href="#">Architectural value</a></li>',
'<li class="inputCat3"><a href="#">Technological value</a></li>',
'<li class="inputCat3"><a href="#">Social value</a></li>',
'<li class="inputCat3"><a href="#">Archival documentation</a></li>',
'<li class="inputCat4"><a href="#">Material</a></li>',
'<li class="inputCat4"><a href="#">Maintenance</a></li>',
'<li class="inputCat4"><a href="#">Restoration techniques</a></li>',
'<li class="inputCat4"><a href="#">State of conservation</a></li>',
'<li class="inputCat4"><a href="#">Major type of decay</a></li>',
'<li class="inputCat4"><a href="#">Cause of decay</a></li>',
		  '</ul></div>',
		  
		  '<div class="dropdown"><button type="button" data-toggle="dropdown" aria-expanded="false" class="btn btn-danger dropdown-toggle" style="width: 85%;margin: 10px;">',
		  'Data Type',
		  '<span class="caret"></span></button><ul id="itemDataType" class="dropdown-menu" style="width: 100%;">',
		  
		  '<li style=""><a href="#">text</a></li>',
		  '<li style=""><a href="#">img</a></li>',
		  '<li style=""><a href="#">link</a></li>',
		  
		  '</ul></div>',
			
			'<input class="heritageeditor-panel-input" type="text" placeholder=" Property Name " id="' + baseId + 'itemName">',
			'<input class="heritageeditor-panel-input" type="text" placeholder=" Category " id="' + baseId + 'itemCategory">',
			'<input class="heritageeditor-panel-input" type="text" placeholder=" dataType (text, img, link)" id="' + baseId + 'itemDataType">',
			'<input class="heritageeditor-panel-input" type="text" placeholder=" Value" id="' + baseId + 'itemValue">',
			'<button class="btn btn-info" id="' + baseId + 'addBtn" style="display: block; margin: 10px auto;">',
              '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Item',
            '</button><br />',
          '</div>',
          '<br>',
          '<div>',
            '<button class="btn btn-info" id="' + baseId + 'clearBtn">',
              '<span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> <label> Clear  </label>',
            '</button>',
          '</div>',
        '</div>',
        '<div id="' + baseId + 'PanelContainerId" class="list-group heritageeditor-panel-list-container">',
        '</div>',
      '</div>'
    ].join('\n');

    $('#' + baseId + 'PanelContentId').html(html);
	$('.dropdown-menu>li').each(function(i,item) {
		$(item).click(function() {
			$('#' + baseId + item.parentElement.id).val(item.innerText);
		})
	})
	// Add buttons for existing events
	if (nodeSelected in objProps) {
		for (var p in objProps[nodeSelected]) {
			var name =  objProps[nodeSelected][p]['name'];
			var item = {
			name: name,
			id: newGUID(),
			handler: function (){if (confirm("Would you like to delete property " +name+" ?")){delProp(name)}}
		  }
		  var html = [
			'<div class="list-group-item heritageeditor-panel-item" id="' + item.id + '">',
			  name,
			  '',
			'</div>'
		  ].join('\n');
		  $('#' + baseId + 'PanelContainerId').append(html);
		  $('#' + item.id).click(function () {
			item.handler();
		  });
		}
	}
	
    /////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////
    $('#' + baseId + 'addBtn').click(function(){
		addProp(baseId);
		
		var name =  $('#' + baseId + 'itemName').val();
		var item = {
        name: name,
        id: newGUID(),
        handler: function (){if (confirm("Would you like to delete property " +name+" ?")){delProp(name)}}
      }
	  var html = [
        '<div class="list-group-item heritageeditor-panel-item" id="' + item.id + '">',
          name,
		  '',
        '</div>'
      ].join('\n');
      $('#' + baseId + 'PanelContainerId').append(html);
      $('#' + item.id).click(function () {
        item.handler();
      });
    /*   var name =  $('#' + baseId + 'itemName').val();
      name = name.length ? name :
        new Date().toString('d/M/yyyy H:mm:ss');
      var item = {
        name: name,
        id: newGUID(),
        handler: function (){alert('Item: ' + name + ' clicked!')}
      }
      var html = [
        '<div class="list-group-item heritageeditor-panel-item" id="' + item.id + '">',
          name,
        '</div>'
      ].join('\n');
      $('#' + baseId + 'PanelContainerId').append(html);
      $('#' + item.id).click(function () {
        item.handler();
      }); */
	  
    });

    /////////////////////////////////////////////
    //
    //
    /////////////////////////////////////////////
    $('#' + baseId + 'clearBtn').click(function(){

      $('#' + baseId + 'PanelContainerId > div').each(
        function (idx, child) {
          $(child).remove();
        }
      )
    });
	
	viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, function(){
		$('#HE_nodeId').html(nodeSelected)
		$('#' + baseId + 'PanelContainerId > div').each(
        function (idx, child) {
          $(child).remove();
	})
	});
	
  };

  Autodesk.ADN.Viewing.Extension.HeritageEditor.Panel.prototype = Object.create(
    Autodesk.Viewing.UI.DockingPanel.prototype);

  Autodesk.ADN.Viewing.Extension.HeritageEditor.Panel.prototype.constructor =
    Autodesk.ADN.Viewing.Extension.HeritageEditor.Panel;

  Autodesk.ADN.Viewing.Extension.HeritageEditor.Panel.prototype.initialize = function()
  {
    // Override DockingPanel initialize() to:
    // - create a standard title bar
    // - click anywhere on the panel to move

    this.title = this.createTitleBar(
      this.titleLabel ||
      this.container.id);

    this.closer = this.createCloseButton();

    this.container.appendChild(this.title);
    this.title.appendChild(this.closer);
    this.container.appendChild(this.content);

    this.initializeMoveHandlers(this.title);
    this.initializeCloseHandler(this.closer);
	
	this.addVisibilityListener(function() {$('#HE_nodeId').html(nodeSelected)});
  };

  var css = [
	'li.inputCat1 {background:rgba(91,155,213,0.8)}',
	'li.inputCat2 {background:rgba(191,144,0,0.8)}',
	'li.inputCat3 {background:rgba(169,209,142,0.8)}',
	'li.inputCat4 {background:rgba(255,102,0,0.8)}',
	'#itemName.dropdown-menu {overflow-y:scroll; height: 200px}',
    'div.heritageeditor-panel-content {',
      'height: calc(100% - 60px);',
    '}',

    'div.heritageeditor-panel-container {',
      'height: calc(100% - 60px);',
      'margin: 10px;',
    '}',

    'div.heritageeditor-panel-controls-container {',
      'margin-bottom: 10px;',
    '}',

    'div.heritageeditor-panel-list-container {',
      'height: calc(100% - 60px);',
      'overflow-y: auto;',
    '}',

    'div.heritageeditor-panel-item {',
      'margin-left: 0;',
      'margin-right: 0;',
      'color: #FFFFFF;',
      'background-color: #3F4244;',
      'margin-bottom: 5px;',
      'border-radius: 4px;',
    '}',

    'div.heritageeditor-panel-item:hover {',
      'background-color: #5BC0DE;',
    '}',

    'label.heritageeditor-panel-label {',
      'color: #FFFFFF;',
    '}',

    'input.heritageeditor-panel-input {',
      'height: 30px;',
      'width: 90%;',
	  'margin: 10px;',
      'border-radius: 5px;',
    '}'

  ].join('\n');

  $('<style type="text/css">' + css + '</style>').appendTo('head');
};

Autodesk.ADN.Viewing.Extension.HeritageEditor.prototype =
  Object.create(Autodesk.Viewing.Extension.prototype);

Autodesk.ADN.Viewing.Extension.HeritageEditor.prototype.constructor =
  Autodesk.ADN.Viewing.Extension.HeritageEditor;

  
Autodesk.ADN.Viewing.Extension.HeritageEditor.prototype.onSelectionChanged = 
function() {console.log('HE selection changed handler fired')};

Autodesk.Viewing.theExtensionManager.registerExtension(
  'Autodesk.Viewing.Extension.HeritageEditor',
Autodesk.ADN.Viewing.Extension.HeritageEditor);

