var wms_layers = [];

var format_water_bodies_0 = new ol.format.GeoJSON();
var features_water_bodies_0 = format_water_bodies_0.readFeatures(json_water_bodies_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_bodies_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_bodies_0.addFeatures(features_water_bodies_0);
var lyr_water_bodies_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_bodies_0, 
                style: style_water_bodies_0,
                popuplayertitle: 'water_bodies',
                interactive: true,
                title: '<img src="styles/legend/water_bodies_0.png" /> water_bodies'
            });
var format_DistrictsandTCas2020_1 = new ol.format.GeoJSON();
var features_DistrictsandTCas2020_1 = format_DistrictsandTCas2020_1.readFeatures(json_DistrictsandTCas2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictsandTCas2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictsandTCas2020_1.addFeatures(features_DistrictsandTCas2020_1);
var lyr_DistrictsandTCas2020_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictsandTCas2020_1, 
                style: style_DistrictsandTCas2020_1,
                popuplayertitle: 'Districts and TC as 2020',
                interactive: true,
                title: '<img src="styles/legend/DistrictsandTCas2020_1.png" /> Districts and TC as 2020'
            });

lyr_water_bodies_0.setVisible(true);lyr_DistrictsandTCas2020_1.setVisible(true);
var layersList = [lyr_water_bodies_0,lyr_DistrictsandTCas2020_1];
lyr_water_bodies_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TZ_05G_': 'TZ_05G_', 'REGION': 'REGION', 'WARD': 'WARD', 'Status': 'Status', 'LAKES': 'LAKES', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Ziwa': 'Ziwa', 'X': 'X', 'Y': 'Y', });
lyr_DistrictsandTCas2020_1.set('fieldAliases', {'Region_Nam': 'Region_Nam', 'Region_Cod': 'Region_Cod', 'District_C': 'District_C', 'NewDist20': 'NewDist20', });
lyr_water_bodies_0.set('fieldImages', {'OBJECTID': '', 'DISTRICT': '', 'AREA': '', 'PERIMETER': '', 'TZ_05G_': '', 'REGION': '', 'WARD': '', 'Status': '', 'LAKES': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', 'Ziwa': '', 'X': '', 'Y': '', });
lyr_DistrictsandTCas2020_1.set('fieldImages', {'Region_Nam': '', 'Region_Cod': '', 'District_C': '', 'NewDist20': '', });
lyr_water_bodies_0.set('fieldLabels', {'OBJECTID': 'no label', 'DISTRICT': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'TZ_05G_': 'no label', 'REGION': 'no label', 'WARD': 'no label', 'Status': 'no label', 'LAKES': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Ziwa': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_DistrictsandTCas2020_1.set('fieldLabels', {'Region_Nam': 'inline label - always visible', 'Region_Cod': 'inline label - always visible', 'District_C': 'inline label - always visible', 'NewDist20': 'inline label - always visible', });
lyr_DistrictsandTCas2020_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});