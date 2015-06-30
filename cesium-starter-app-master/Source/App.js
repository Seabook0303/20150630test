var viewer = new Cesium.Viewer('cesiumContainer');

// Start off looking at Australia.
viewer.camera.viewRectangle(Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730));

// Add an ArcGIS MapServer imagery layer
var imageryLayers = viewer.imageryLayers;
imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
    url : 'http://www.ga.gov.au/gis/rest/services/earth_science/GA_Surface_Geology_of_Australia_WM/MapServer'
}));

viewer.dataSources.add(Cesium.KmlDataSource.load(http://seabook0303.github.io/20150630test/cesium-starter-app-master/KML/test.kmz'));