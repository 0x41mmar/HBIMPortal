var viewerApp;
var viewer;
var containerEl = 'viewerDiv';
//var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci90MTUxNTE1NjM1NDcwMl8wNjYyOTYxODYyMDY5NjEwNl8xNTE1MTU2MzU0NzAyLnJ2dA';

$(document).ready(function() {
	var disabledControls = ['configuration', 'sensors','reportCreator']
	//load sidebar
	loadSideBar(disabledControls);
	parseTimeline();
	
})

appStart(documentId, containerEl, function() {
	console.log('[+] run.js!')
	
	loadExtensions();
	//loadNextState();
	
	//loadReports(documentId);
	//loadModules(documentId);
});