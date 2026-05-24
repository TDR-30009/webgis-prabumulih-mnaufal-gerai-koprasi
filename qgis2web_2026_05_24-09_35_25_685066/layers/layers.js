var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1 = format_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: 'KOTA PRABUMULIH — ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1.png" /> KOTA PRABUMULIH — ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_excell_2 = new ol.format.GeoJSON();
var features_excell_2 = format_excell_2.readFeatures(json_excell_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_excell_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_excell_2.addFeatures(features_excell_2);
var lyr_excell_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_excell_2, 
                style: style_excell_2,
                popuplayertitle: 'excell',
                interactive: true,
                title: '<img src="styles/legend/excell_2.png" /> excell'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_excell_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1,lyr_excell_2];
lyr_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_excell_2.set('fieldAliases', {'id': 'id', 'nama_dapur': 'nama_dapur', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'longitude': 'longitude', 'latitude': 'latitude', 'status (aktif / tidak aktif)': 'status (aktif / tidak aktif)', 'persentase pembangunan GERAI': 'persentase pembangunan GERAI', 'NAMA_KETUA KOPERASI': 'NAMA_KETUA KOPERASI', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_excell_2.set('fieldImages', {'id': 'Range', 'nama_dapur': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'status (aktif / tidak aktif)': 'TextEdit', 'persentase pembangunan GERAI': 'TextEdit', 'NAMA_KETUA KOPERASI': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_KOTAPRABUMULIHADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_excell_2.set('fieldLabels', {'id': 'no label', 'nama_dapur': 'no label', 'Kelurahan': 'no label', 'Kecamatan': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'status (aktif / tidak aktif)': 'no label', 'persentase pembangunan GERAI': 'no label', 'NAMA_KETUA KOPERASI': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', });
lyr_excell_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});