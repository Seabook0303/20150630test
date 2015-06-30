var viewer = new Cesium.Viewer('cesiumContainer');

// Start off looking at Australia.
viewer.camera.viewRectangle(Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730));