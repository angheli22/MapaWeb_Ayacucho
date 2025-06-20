ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([368303.505693, 8254061.994986, 799301.099013, 8603273.900417]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ProvinciadeAyacucho_1 = new ol.format.GeoJSON();
var features_ProvinciadeAyacucho_1 = format_ProvinciadeAyacucho_1.readFeatures(json_ProvinciadeAyacucho_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_ProvinciadeAyacucho_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciadeAyacucho_1.addFeatures(features_ProvinciadeAyacucho_1);
var lyr_ProvinciadeAyacucho_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinciadeAyacucho_1, 
                style: style_ProvinciadeAyacucho_1,
                popuplayertitle: 'Provincia de Ayacucho',
                interactive: true,
    title: 'Provincia de Ayacucho<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_0.png" /> CANGALLO<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_1.png" /> HUAMANGA<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_2.png" /> HUANCA SANCOS<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_3.png" /> HUANTA<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_4.png" /> LA MAR<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_5.png" /> LUCANAS<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_6.png" /> PARINACOCHAS<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_7.png" /> PAUCAR DEL SARA SARA<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_8.png" /> SUCRE<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_9.png" /> VICTOR FAFARDO<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_10.png" /> VICTOR FAJARDO<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_11.png" /> VILCAS HUAMAN<br />\
    <img src="styles/legend/ProvinciadeAyacucho_1_12.png" /> <br />' });
var format_RIOS_2 = new ol.format.GeoJSON();
var features_RIOS_2 = format_RIOS_2.readFeatures(json_RIOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_RIOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOS_2.addFeatures(features_RIOS_2);
var lyr_RIOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIOS_2, 
                style: style_RIOS_2,
                popuplayertitle: 'RIOS',
                interactive: true,
                title: '<img src="styles/legend/RIOS_2.png" /> RIOS'
            });
var format_RVV_3 = new ol.format.GeoJSON();
var features_RVV_3 = format_RVV_3.readFeatures(json_RVV_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_RVV_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVV_3.addFeatures(features_RVV_3);
var lyr_RVV_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVV_3, 
                style: style_RVV_3,
                popuplayertitle: 'RVV',
                interactive: true,
                title: '<img src="styles/legend/RVV_3.png" /> RVV'
            });
var format_RVD_4 = new ol.format.GeoJSON();
var features_RVD_4 = format_RVD_4.readFeatures(json_RVD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_RVD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVD_4.addFeatures(features_RVD_4);
var lyr_RVD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVD_4, 
                style: style_RVD_4,
                popuplayertitle: 'RVD',
                interactive: true,
                title: '<img src="styles/legend/RVD_4.png" /> RVD'
            });
var format_AYACUCHO_5 = new ol.format.GeoJSON();
var features_AYACUCHO_5 = format_AYACUCHO_5.readFeatures(json_AYACUCHO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_AYACUCHO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AYACUCHO_5.addFeatures(features_AYACUCHO_5);
var lyr_AYACUCHO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AYACUCHO_5, 
                style: style_AYACUCHO_5,
                popuplayertitle: 'AYACUCHO',
                interactive: true,
    title: 'AYACUCHO<br />\
    <img src="styles/legend/AYACUCHO_5_0.png" /> CANGALLO<br />\
    <img src="styles/legend/AYACUCHO_5_1.png" /> HUAMANGA<br />\
    <img src="styles/legend/AYACUCHO_5_2.png" /> HUANCA SANCOS<br />\
    <img src="styles/legend/AYACUCHO_5_3.png" /> HUANTA<br />\
    <img src="styles/legend/AYACUCHO_5_4.png" /> LA MAR<br />\
    <img src="styles/legend/AYACUCHO_5_5.png" /> LUCANAS<br />\
    <img src="styles/legend/AYACUCHO_5_6.png" /> PARINACOCHAS<br />\
    <img src="styles/legend/AYACUCHO_5_7.png" /> PAUCAR DEL SARA SARA<br />\
    <img src="styles/legend/AYACUCHO_5_8.png" /> SUCRE<br />\
    <img src="styles/legend/AYACUCHO_5_9.png" /> VICTOR FAJARDO<br />\
    <img src="styles/legend/AYACUCHO_5_10.png" /> VILCAS HUAMAN<br />\
    <img src="styles/legend/AYACUCHO_5_11.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ProvinciadeAyacucho_1.setVisible(true);lyr_RIOS_2.setVisible(true);lyr_RVV_3.setVisible(true);lyr_RVD_4.setVisible(true);lyr_AYACUCHO_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ProvinciadeAyacucho_1,lyr_RIOS_2,lyr_RVV_3,lyr_RVD_4,lyr_AYACUCHO_5];
lyr_ProvinciadeAyacucho_1.set('fieldAliases', {'fid': 'fid', 'COUNT': 'N° de distritos:', 'FIRST_IDPR': 'UBIGEO de los distritos:', 'NOMBPROV': 'Nombre de provincia:', 'FIRST_NOMB': 'Nombre de principal:', 'LAST_DCTO': 'Decreto asociado:', 'LAST_LEY': 'N° de la última ley:', 'FIRST_FECH': 'Fecha iniacial de creación/ registro:', 'LAST_FECHA': 'Fecha final de actualización:', 'MIN_SHAPE_': 'Coordenadas:', 'ha': 'Superficie en "Ha":', 'FOTOS': 'Fotos turisticas de los distritos:', 'INEI': 'INEI de los distritos:', 'GOBIERNO REGIONAL': 'Gobierno Regional de los distritos:', 'VIDEOS': 'Videos de los distritos:', });
lyr_RIOS_2.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_RVV_3.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_RVD_4.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'Tipo de superficie:', 'COD_DS11': 'Segmento vial nivel 1:', 'COD_DS12': 'Segmento vial nivel 2:', 'TRAY_DS12': 'Trayecto del tramo vial nivel 1:', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_AYACUCHO_5.set('fieldAliases', {'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre de SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_ProvinciadeAyacucho_1.set('fieldImages', {'fid': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'LAST_DCTO': 'TextEdit', 'LAST_LEY': 'TextEdit', 'FIRST_FECH': 'TextEdit', 'LAST_FECHA': 'TextEdit', 'MIN_SHAPE_': 'TextEdit', 'ha': 'TextEdit', 'FOTOS': 'ExternalResource', 'INEI': 'TextEdit', 'GOBIERNO REGIONAL': 'TextEdit', 'VIDEOS': 'TextEdit', });
lyr_RIOS_2.set('fieldImages', {'fid': '', 'Rasgo_Prin': '', 'Rasgo_Secu': '', 'Nombre': '', 'Longitud': '', });
lyr_RVV_3.set('fieldImages', {'fid': '', 'COD_DS11': '', 'COD_DS12': '', 'TRAY_DS12': '', 'TRAY_DS11': '', 'UBIGEO': '', 'DEP': '', 'PROV': '', 'COD_DEP': '', 'COD_PROV': '', 'LONG_KM': '', 'OBS': '', });
lyr_RVD_4.set('fieldImages', {'fid': 'TextEdit', 'RODADURA': 'TextEdit', 'COD_DS11': 'TextEdit', 'COD_DS12': 'TextEdit', 'TRAY_DS12': 'TextEdit', 'TRAY_DS11': 'TextEdit', 'UBIGEO': 'TextEdit', 'DEP': 'TextEdit', 'PROV': 'TextEdit', 'COD_DEP': 'TextEdit', 'COD_PROV': 'TextEdit', 'LONG_KM': 'TextEdit', 'OBS': 'TextEdit', 'SENTIDO': 'TextEdit', 'BASE': 'TextEdit', 'DATA': 'TextEdit', 'FECHA_ACTU': 'TextEdit', 'FUENTE': 'TextEdit', 'COD_RODADU': 'TextEdit', 'NOMBDIST': 'TextEdit', 'CAPITAL': 'TextEdit', });
lyr_AYACUCHO_5.set('fieldImages', {'Código Modular': '', 'Anexo': '', 'Nombre de SS.EE.': '', 'Ubigeo': '', 'Departamento': '', 'Provincia': '', 'Distrito': '', 'Código DRE/UGEL': '', 'DRE / UGEL': '', 'Centro Poblado': '', 'Código Centro Poblado': '', 'Código Local': '', 'Dirección': '', 'Nivel / Modalidad': '', 'Gestion / Dependencia': '', 'Altitud': '', 'Fuente de coordenadas': '', });
lyr_ProvinciadeAyacucho_1.set('fieldLabels', {'fid': 'no label', 'COUNT': 'header label - always visible', 'FIRST_IDPR': 'header label - always visible', 'NOMBPROV': 'header label - always visible', 'FIRST_NOMB': 'header label - always visible', 'LAST_DCTO': 'header label - always visible', 'LAST_LEY': 'header label - always visible', 'FIRST_FECH': 'header label - always visible', 'LAST_FECHA': 'header label - always visible', 'MIN_SHAPE_': 'header label - always visible', 'ha': 'no label', 'FOTOS': 'header label - always visible', 'INEI': 'header label - always visible', 'GOBIERNO REGIONAL': 'header label - always visible', 'VIDEOS': 'header label - always visible', });
lyr_RIOS_2.set('fieldLabels', {'fid': 'no label', 'Rasgo_Prin': 'header label - always visible', 'Rasgo_Secu': 'header label - always visible', 'Nombre': 'header label - always visible', 'Longitud': 'header label - always visible', });
lyr_RVV_3.set('fieldLabels', {'fid': 'no label', 'COD_DS11': 'header label - always visible', 'COD_DS12': 'header label - always visible', 'TRAY_DS12': 'header label - always visible', 'TRAY_DS11': 'header label - always visible', 'UBIGEO': 'header label - always visible', 'DEP': 'header label - always visible', 'PROV': 'header label - always visible', 'COD_DEP': 'header label - always visible', 'COD_PROV': 'header label - always visible', 'LONG_KM': 'header label - always visible', 'OBS': 'header label - always visible', });
lyr_RVD_4.set('fieldLabels', {'fid': 'header label - always visible', 'RODADURA': 'header label - always visible', 'COD_DS11': 'header label - always visible', 'COD_DS12': 'header label - always visible', 'TRAY_DS12': 'header label - always visible', 'TRAY_DS11': 'header label - always visible', 'UBIGEO': 'header label - always visible', 'DEP': 'header label - always visible', 'PROV': 'header label - always visible', 'COD_DEP': 'header label - always visible', 'COD_PROV': 'header label - always visible', 'LONG_KM': 'header label - always visible', 'OBS': 'header label - always visible', 'SENTIDO': 'header label - always visible', 'BASE': 'header label - always visible', 'DATA': 'header label - always visible', 'FECHA_ACTU': 'header label - always visible', 'FUENTE': 'header label - always visible', 'COD_RODADU': 'header label - always visible', 'NOMBDIST': 'header label - always visible', 'CAPITAL': 'header label - always visible', });
lyr_AYACUCHO_5.set('fieldLabels', {'Código Modular': 'header label - always visible', 'Anexo': 'header label - always visible', 'Nombre de SS.EE.': 'header label - always visible', 'Ubigeo': 'header label - always visible', 'Departamento': 'header label - always visible', 'Provincia': 'header label - always visible', 'Distrito': 'header label - always visible', 'Código DRE/UGEL': 'header label - always visible', 'DRE / UGEL': 'header label - always visible', 'Centro Poblado': 'header label - always visible', 'Código Centro Poblado': 'header label - always visible', 'Código Local': 'header label - always visible', 'Dirección': 'header label - always visible', 'Nivel / Modalidad': 'header label - always visible', 'Gestion / Dependencia': 'header label - always visible', 'Altitud': 'header label - always visible', 'Fuente de coordenadas': 'header label - always visible', });
lyr_AYACUCHO_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});