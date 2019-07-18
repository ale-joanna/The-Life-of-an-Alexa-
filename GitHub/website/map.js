var ourloc;
var view;
var map;

function map_api(){
  ourloc = ol.proj.fromLonLat([41,28]);
  view = new ol.view({
    center: ourloc,
    zoom:6
  });


map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  loadTilesWhileAnimating: true,
  view: view
  /*
  view: new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
  })*/
});
}
function panHome(){
  view.animate({
    center: ourLoc,
    duration: 20000
  });
}

window.onload = map_api;
