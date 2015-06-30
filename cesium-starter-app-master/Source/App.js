var viewer = new Cesium.Viewer('cesiumContainer');

// Start off looking at Australia.
viewer.camera.viewRectangle(Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730));

// Add on kml file
viewer.dataSources.add(Cesium.KmlDataSource.load('/KML/test.kmz'));
viewer.dataSources.add(Cesium.KmlDataSource.load('/KML/JPN_adm2.shp.kml'));