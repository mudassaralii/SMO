var orderids = {
  '1632467673352_26_2492021': 'POLYGON((8246989.447119066 1667614.0937110623,8246874.791576638 1664747.7051503682,8249530.9783095615 1657935.2550044504,8258703.421703783 1655183.5219861842,8264034.904426673 1654610.2442740453,8267235.704986111 1650329.7706900754,8271678.607255187 1649957.140177185,8276064.181753049 1652508.2259962028,8277182.07329172 1655575.2617561454,8276379.484494727 1657237.767121348,8274989.286042791 1657911.368433111,8272409.536338165 1659100.9196857992,8270646.707373339 1659702.861283545,8265902.834305389 1662110.6276745277,8262893.12631666 1663959.4482961753,8257676.299136197 1664289.0829806558,8254336.956462988 1665736.6092038061,8250567.655505677 1667499.4381686328,8246989.447119066 1667614.0937110623))',
  '1633067199073_26_1102021': 'POLYGON((7585684.331288965 2706965.9475653004,7590780.134729759 2723884.0129359835,7592614.6234086035 2731221.96765136,7592614.6234086035 2740394.4110455816,7598933.41930196 2741617.4034981444,7600564.079015608 2745490.212153702,7606067.54505214 2745694.043451572,7610144.180340222 2753235.8317974913,7652133.590988442 2753031.9981669486,7653968.079667288 2793390.7491015214,7669663.143254716 2793798.41169726,7677001.097970093 2792779.25287524,7694326.830601861 2787275.7845060336,7686300.961293303 2673384.6123611233,7672134.628940887 2650351.5847276263,7652464.83055194 2640975.307702862,7643292.387157719 2648007.5143050984,7632081.626119456 2660135.5243481286,7627189.653976533 2669206.0509270784,7621074.691713719 2675422.930005164,7614348.230891949 2680518.733445959,7611494.583391083 2688162.436274477,7617099.963910215 2690098.839435919,7615876.971457652 2694379.3153525623,7616896.134945018 2699882.781389095,7617915.293767039 2704469.0030862056,7613125.238439386 2704774.751199346,7607519.857920255 2700901.9425437883,7601608.7269553095 2699780.8645738238,7597022.5052582 2701003.8570263865,7589480.719244953 2703347.927448914,7585684.331288965 2706965.9475653004))',
  '1666258685458_16_20102022': 'POLYGON((8210464.7782199755 3378823.267359989,8194492.657680957 3379001.500253535,8191144.167397895 3378671.7713004607,8190189.0461668875 3377116.1732628276,8186845.008663457 3376851.4089446547,8184390.413891466 3376120.788906187,8182765.149325885 3373001.4723043204,8180785.888779581 3365346.942722373,8176620.313434096 3363533.507385946,8176284.1285719 3363018.516846291,8173621.366352126 3357618.048319072,8172047.308752308 3357827.7710696827,8171174.56394449 3356504.666904643,8168695.478884522 3347641.630264445,8166337.732069521 3345231.2397700166,8165276.857322261 3342189.0332257245,8165397.082372318 3336177.774545247,8161854.896175277 3332381.5229142504,8160977.6985878255 3329868.624979303,8160453.383786189 3322415.174217874,8163777.383781277 3319549.279498924,8180121.311419544 3320790.1198400813,8182836.393799992 3322675.049175273,8184746.636262005 3326714.5378249595,8189102.567936745 3327023.9528048593,8194386.904164703 3330693.0974738323,8195018.085677499 3333255.630507823,8198206.27589382 3337035.634010805,8199056.756803479 3338161.341352539,8203520.668384289 3337036.903074718,8204751.861952464 3336727.2550737965,8205479.891422252 3338398.678529541,8206697.726651531 3342907.6217348324,8205184.89477165 3346258.586534903,8207767.5069580525 3349069.275872756,8208800.551832615 3352877.930618628,8208721.514994153 3354646.698068548,8210095.1975105405 3355498.1288064695,8210611.719947823 3357415.954999228,8209238.037431432 3360090.4463794227,8211984.289269303 3362503.5464021363,8213131.993219382 3364129.9042619253,8212684.4888663925 3365836.58757242,8212956.108423929 3366108.7616617316,8211264.052163871 3367580.3796273754,8214045.926238795 3370155.152297965,8214167.264483759 3370606.8070798856,8215634.455372415 3371938.960823133,8215268.214247704 3374691.4876018707,8215268.214247704 3374691.4876018707,8210464.7782199755 3378823.267359989))'
}
var uploadPDFflag = 0;
var factor = 0;
var ordered_area = 0;
var productsKeys = {
  "1.5mP+XS": "Bundle (1.5m Panchromatic + 6m Multispectral)",
  "1.5mP": "1.5m Panchromatic",
  "6mXS": "6m Multispectral",
  "0.98m Pansharpened": "0.98m Pansharpened",
  "0.98 Panchromatic": "0.98 Panchromatic",
  "2.89m Multispectral": "2.89m Multispectral",
  "0.5m Pan": "0.5m Pansharpened",
  "2m MS": "2m Multispectral",
  "Bundle": "Bundle(0.5m Pansharpened + 2m Multispectral)",
  "Bundle(Multispectral+Panchromatic)": "Bundle(Multispectral+Panchromatic)",
  "BundleSV(Multispectral+Panchromatic)": "BundleSV(Multispectral+Panchromatic)",
  "1.5m Pansharpened": "1.5m Pansharpened",
  "0.5m Pansharpened": "0.5m Pansharpened",
  "0.5m Panchromatic": "0.5m Panchromatic",
  "2m Multispectral": "2m Multispectral",
  "Bundle(0.5m Pansharpened + 2m Multispectral)": "Bundle(0.5m Pansharpened + 2m Multispectral)",
  "SM": "Strip Map",
  "SS": "Sliding SpotLight",
  "HiRes": "HiRes SpotLight",
  "Pansharpened Neo": "0.3m Pansharpened",
  "Bundle Neo": "Bundle(0.3m Pan + 1.2m MS)",
  "1.2m MS": "1.2m MS",
  "0.3m Pan": "0.3m Pan"
}
var fresh_sensors = '';
var p_neo, pleiades, prss, spot, sv;

$(document).ready(function() {
  var dayInMilliseconds = 1000 * 60 * 60 * 24;
  setInterval(function() {
    try {
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'server_scripts/updatePricingFresh.php',
        success: function(response) {
        }
      });
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'server_scripts/updatePricing.php',
        success: function(response) {
        }
      });
    } catch (e) {}
  }, dayInMilliseconds);

  $("#btnLogout").click(function() {
    eraseCookie('shown');
  });
 
  // orbitography rollangle section
  document.getElementById("rollAngle").addEventListener("change", function(){
      let v = parseInt(this.value);
      if (v < 5) this.value = 5;
      if (v > 45) this.value = 45;
})

  document.getElementById("dropDownOrbitoSatellites").addEventListener("change", function(){console.log(document.getElementById("dropDownOrbitoSatellites").selectedOptions.length);
    let v = document.getElementById("dropDownOrbitoSatellites").selectedOptions.length;
    if (v > 0) document.getElementById("btnSearchOrbito").disabled =false;
    else  document.getElementById("btnSearchOrbito").disabled =true;
  })

  });
var areaDrawn = 0;
var plieadesObj = [];
var plieadesneoObj = [];
var svObj = [];
var sarObj = [];
var modifiedFeature = null;
var deleteID = 12;
var activeAOI = '';
var highlightedAOI = null;
var scenes = '';
var initialExtent;
var selectedInteraction;
var cartWrapper = $('.cd-cart-container');
var productId = 0;
var cartBody = cartWrapper.find('.body')
var cartList = cartBody.find('ul').eq(0);
var cartTotal = cartWrapper.find('.checkout').find('span');
var cartTrigger = cartWrapper.children('.cd-cart-trigger');
var cartCount = cartTrigger.children('.count')
var addToCartBtn = $('.cd-add-to-cart');
var undo = cartWrapper.find('.undo');
var undoTimeoutId;
var cartIsEmpty = cartWrapper.hasClass('empty');
var wktArch = null;
var featureArch = null;
var featureModify = null;
var selectSource = new ol.Collection();
var geojsonFormat = new ol.format.GeoJSON({
  defaultDataProjection: 'EPSG:4326',
  featureProjection: 'EPSG:3857'
});
var orderid;
var acquisition = '';
var polygonCoord = [];
var tableData = '';
var table;
var aoiShape = '';
var sensors = ['PRSS', 'SPOT', 'Pleiades', 'PleiadesNeo', 'SV', 'SAR'];
var prodToFlags = {
  '2.89m Multispectral': 'prssMS',
  '0.98 Panchromatic': 'prssP',
  '0.98m Pansharpened': 'prssPS',
  'Bundle(Multispectral+Panchromatic)': 'prssB',
  '1.5mP+XS': 'spotB',
  '1.5mP': 'spotP',
  '6mXS': 'spotMS',
  'Bundle': 'pleB',
  '0.5m Pan': 'pleP',
  '2m MS': 'pleMS',
  'Bundle Neo': 'plenB',
  '0.3m Pan': 'plenP',
  '1.2m MS': 'plenMS',
  '2m Multispectral': 'svMS',
  '0.5m Panchromatic': 'svPC',
  '0.5m Pansharpened': 'svPS',
  'BundleSV(Multispectral+Panchromatic)': 'svB',
  'SM': 'sarSM',
  'SS': 'sarSS',
  'HiRes': 'sarHR'
}
var flagProd = {
  prssMS: 0,
  prssP: 0,
  prssPS: 0,
  prssB: 0,
  spotB: 0,
  spotP: 0,
  spotMS: 0,
  pleB: 0,
  pleP: 0,
  pleMS: 0,
  plenB: 0,
  plenP: 0,
  plenMS: 0,
  sarSM: 0,
  sarSS: 0,
  sarHR: 0,
  svMS: 0,
  svB: 0,
  svPC: 0,
  svPS: 0
}
var sensor_Products = {
  productsPRSS: '',
  productsSPOT: '',
  productsPleiades: '',
  productsPleiadesNeo: '',
  productsSV: '',
  productsSAR: ''
};
var sensor_Products_Div = {
  productsPRSS: 'prss_products',
  productsSPOT: 'spot_products',
  productsPleiades: 'pleiades_products',
  productsPleiadesNeo: 'pleiadesneo_products',
  productsSV: 'sv_products',
  productsSAR: 'sar_products'
};

var sensor_area = {
  PRSS: 0,
  SPOT: 0,
  Pleiades: 0,
  PleiadesNeo: 0,
  SV: 0,
  SAR: 0
}

var sensor_scenes = {
  PRSS: 0,
  SPOT: 0,
  Pleiades: 0,
  PleiadesNeo: 0,
  SV: 0,
  SAR: 0
}

var sensor_amount = {
  PRSS: 0,
  SPOT: 0,
  Pleiades: 0,
  PleiadesNeo: 0,
  SV: 0,
  SAR: 0
}

var sensors_resolution = {
  PRSS: '0.98m',
  SPOT: '1.5m',
  Pleiades: '0.5m',
  PleiadesNeo: '0.3m',
  SV: '0.5m',
  SAR: '0m'
}

var scenesSubtring_dict = {
  PRSS: 'PRSS',
  SPOT: 'SPOT',
  Pleiades: 'PHR',
  PleiadesNeo: 'PNEO',
  SV: 'SV',
  SAR: 'SAR'
}

var infoTable_dict = {
  PRSS: {
    'ID': 'data_id',
    'Description': 'PRSS imagery',
    'Date': ['date', 'time'],
    'Archive': 'PRSS Archive',
    'Cloud Cover': 'cloud_notation',
    'Constellation': 'PRSS',
    'Product': 'PRSS 0.98m',
    'Resolution': '0.98m',
    'Satellite': 'platform_name',
    'Data Strip Type': 'data_strip_type',
    'Scene ID': 'scene_id',
    'Click on image for Enlarged View': 'thumbnail'
  },
  SPOT: {
    'ID': 'data_id',
    'Description': 'SPOT imagery',
    'Date': ['date', 'time'],
    'Archive': 'SPOT Archive',
    'Cloud Cover': 'cloud_notation',
    'Cloud Reliability Index': ['cloud_reli_ind', '%'],
    'Constellation': 'SPOT 6/7',
    'Incidence Angle': ['global_incidence', '°'],
    'Incidence Angle(Across Track)': ['along_track_incidence', '°'],
    'Incidence Angle(Along Track)': ['ortho_track_incidence', '°'],
    'Orientation Angle': ['orientation', '°'],
    'Product': 'SPOT 1.5m',
    'Resolution': '1.5m',
    'Satellite': ['platform_name', 'platform_s_no'],
    'Data Strip Type': 'data_strip_type',
    'Scene ID': 'scene_id',
    'Sun Azimuth': ['sun_azi', '°'],
    'Sun Elevation': ['sun_ele', '°'],
    'Scene Orientation': ['scene_orient', '°'],
    'MIME Type': 'mime_type',
    'Band Order': 'band_order',
    'Click on image for Enlarged View': 'thumbnail'
  },
  Pleiades: {
    'ID': 'data_id',
    'Description': 'Pleiades imagery',
    'Date': ['date', 'time'],
    'Resolution': '0.5m',
    'Satellite': 'platform_name',
    'Incidence Angle': 'incidence_angle',
    'Sun Azimuth': ['sun_azimuth', '°'],
    'Sun Elevation': ['sun_elevation', '°'],
    'Processing Level': 'processing_level',
    'Spectral Processing': 'spectral_processing',
    'Ephemeris Used': 'ephemeris_used',
    'Attitudes Used': 'attitudes_used',
    'Ground Setting': 'ground_setting',
    'Ground Description': 'ground_desc',
    'Vertical Setting': 'vertical_setting',
    'Radiometric Processing': 'radiometric_processing',
    'Inter Detector Normalization': 'inter_detector_normalization',
    'Detectors Interpolation': 'detectors_interpolation',
    'Straylight Correction': 'straylight_correction',
    'VCTI Correction': 'vcti_correction',
    'Inter Array Reconstruction': 'inter_array_reconstruction',
    'Radiometric Stretch': 'radiometric_stretch',
    'Source ID': 'source_id',
    'Source Type': 'source_type',
    'Source Description': 'source_description',
    'Mission': 'mission',
    'MIME Type': 'mime_type',
    'Band Mode': 'band_mode',
    'Click on image for Enlarged View': 'thumbnail'
  },
  PleiadesNeo: {
    'ID': 'data_id',
    'Description': 'Pleiades imagery',
    'Date': ['date', 'time'],
    'Resolution': '0.5m',
    'Satellite': 'platform_name',
    'Incidence Angle': 'incidence_angle',
    'Sun Azimuth': ['sun_azimuth', '°'],
    'Sun Elevation': ['sun_elevation', '°'],
    'Processing Level': 'processing_level',
    'Spectral Processing': 'spectral_processing',
    'Ephemeris Used': 'ephemeris_used',
    'Attitudes Used': 'attitudes_used',
    'Ground Setting': 'ground_setting',
    'Ground Description': 'ground_desc',
    'Vertical Setting': 'vertical_setting',
    'Radiometric Processing': 'radiometric_processing',
    'Inter Detector Normalization': 'inter_detector_normalization',
    'Source ID': 'source_id',
    'Source Type': 'source_type',
    'Source Description': 'source_description',
    'Mission': 'mission',
    'MIME Type': 'mime_type',
    'Band Mode': 'band_mode',
    'Click on image for Enlarged View': 'thumbnail'
  },
  SV: {
    'ID': 'sceneid',
    'Description': 'SuperView imagery',
    'Time': 'time',
    'Resolution': '0.5m',
    'platform_name': 'SuperView',
    'Incidence Angle': 'incidence_angle',
    'Sun Azimuth': 'sun_azimuth',
    'Solar Zenith': 'solarzenith',
    'Constellation': 'constellation',
    'Map Projection': 'mapprojection',
    'Strip ID': 'stripid',
    'Bands': 'bands',
    'Resolution': 'resolution',
    'Click on image for Enlarged View': 'thumbnail'
  },
  SAR: {
    'ID': 'data_id',
    'Description': 'SAR imagery',
    'Time': 'time',
    'Target Name': 'target_name',
    'platform_name': 'SAR',
    'Date': 'date',
    'Mode': 'mode',
    'Resolution': 'N/A',
    'Click on image for Enlarged View': 'thumbnail'
  }
}

var aoiarea = 0;
var numPages = 0;
var coordsArr = [];
var polyArr = [];

var map;
var canvas1;
var screenshot;
var resultFeatures;
var resultFeaturesCorridor;
var zoom = 5;
var center = [8566491, 3215057];
var rotation = 0;

var menu;
var menuShown = false;

var draw;
var modify;
var selectedFeature;

var projection = new ol.proj.Projection({
  code: 'EPSG:4326',
  units: 'degrees',
  axisOrientation: 'neu'
});
var projectionExtent = projection.getExtent();
var matrixIds = new Array(22);
for (var z = 0; z < 22; ++z) {
  matrixIds[z] = "EPSG:4326:" + z;;
}
var resolutions = [
  0.703125, 0.3515625, 0.17578125, 0.087890625,
  0.0439453125, 0.02197265625, 0.010986328125,
  0.0054931640625, 0.00274658203125, 0.001373291015625,
  6.866455078125E-4, 3.4332275390625E-4, 1.71661376953125E-4,
  8.58306884765625E-5, 4.291534423828125E-5, 2.1457672119140625E-5,
  1.0728836059570312E-5, 5.364418029785156E-6, 2.682209014892578E-6,
  1.341104507446289E-6, 6.705522537231445E-7, 3.3527612686157227E-7
];

var styleCitiesMap, condition = "styleCitiesMap";
var mapZero = getWfsFiltered(true, "Map 0", "alldata", 'a=900', 40);
var mapFirst = getWfsFiltered(false, "Map 1", "alldata", 'a=900 OR a=800', 50); //vector13
var mapSecond = getWfsFiltered(false, "Map 2", "alldata", 'a=900 OR a=800 OR a=600', 40); //vector14
var mapThird = getWfsFiltered(false, "Map 3", "alldata", 'a=900 OR a=800 OR a=600 OR a=400', 35); //vector15
var select = new ol.interaction.Select({
  filter: function(feature, layer) {
    if (layer == null)
      return;
    else {
      if (layer.get('name') == "Drawn Points" || layer.get('name') == "Drawn Polygons" || layer.get('name') == "Clipped Polygons" || layer.get('name') == "alldata")
        return false;
      else
        return true;
    }
  },
  style: function(f) {
    var textStroke = new ol.style.Stroke({
      color: '#fff',
      width: 3
    });
    var textFill = new ol.style.Fill({
      color: '#000'
    });

    return new ol.style.Style({
      cursor: 'pointer',
      image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({
          color: '#ff7733'
        })
      }),
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new ol.style.Stroke({
        color: '#ffcc33',
        width: 2
      }),
      text: new ol.style.Text({
        text: 'Polygon: ' + f.get('count') + "\r\n" + f.get('calc') + '\u00B2',
        font: '24px Calibri,sans-serif',
        fill: textFill,
        stroke: textStroke
      })
    })
  }
});
var interaction = new ol.interaction.Select();
var interactionSelectPointerMove = new ol.interaction.Select({
  condition: ol.events.condition.click
});
var drawCount = 0;
var layerThumbnail;
var goToCartIcon;
var format = new ol.format.WKT();
var sketch;
var measureTooltipElement;
var measureTooltip;

var pinColors = ['#4271AE', '#FF00FF', '#FFFF00', '#FF0000', '#00FF00', '#0000FF', '#00FFFFF', '#662506', '#FF00FF', '#FFFF00', '#FF0000', '#00FF00', '#0000FF', '#00FFFFF', '#662506'];

var osmLight = new ol.layer.Tile({
  displayInLayerSwitcher: false,
  name: "OSM Light Gray",
  visible: true,
  baseLayer: true,
  source: new ol.source.OSM({
    "url": "http://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
  })
});

var vector = new ol.layer.Vector({
  name: "Drawn Polygons",
  displayInLayerSwitcher: false,
  source: new ol.source.Vector(),
  style: function(f) {
    if (f.get("param") === "deleted") {
      return;
    }
    var textStroke = new ol.style.Stroke({
      color: 'Yellow',
      width: 3
    });
    var textFill = new ol.style.Fill({
      color: 'Blue'
    });

    return new ol.style.Style({
      cursor: 'pointer',
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new ol.style.Stroke({
        color: '#000000',
        width: 4
      }),
      text: new ol.style.Text({
        offsetY: 50,
        text: 'Polygon: ' + f.get('count') + "\r\n ~" + f.get('calc') + ' km\u00B2',
        font: '24px Calibri,sans-serif',
        fill: textFill,
        stroke: textStroke
      })
    })
  }
});

var vectorClipped = new ol.layer.Vector({
  name: "Clipped Polygons",
  source: new ol.source.Vector(),
  displayInLayerSwitcher: false,
  style: function(f) {
    var label = f.get('sceneOrder');
    return new ol.style.Style({
      cursor: 'pointer',
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new ol.style.Stroke({
        color: '#00FF00',
        width: 2
      }),
      text: new ol.style.Text({
        font: '18px Calibri,sans-serif',
        fill: new ol.style.Fill({
          color: 'Blue'
        }),
        stroke: new ol.style.Stroke({
          color: '#00FF00',
          width: 3
        }),
        text: label
      })
    })
  }
});

var vectorPoints = new ol.layer.Vector({
  name: "Drawn Points",
  visible: false,
  displayInLayerSwitcher: false,
  source: new ol.source.Vector(),
  style: function(f) {
    var type = f.get('type');
    var coords = ol.proj.transform(f.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');
    polygonCoord.push({
      lat: parseFloat(coords[0]).toFixed(7),
      lon: parseFloat(coords[1]).toFixed(7)
    });
    var textStroke = new ol.style.Stroke({
      color: '#000',
      width: 3
    });
    var textFill = new ol.style.Fill({
      color: '#c21a00'
    });
    if (f.get('type') !== 'Polygon') {
      return new ol.style.Style({
        image: new ol.style.Icon({
          color: pinColors[f.get('id')],
          src: 'css/images/dot.png'
        })
      });
    } else {
      var coordID = f.get('id');
      if (coordID !== 100) {
        return new ol.style.Style({
          text: new ol.style.Text({
            font: '25px Calibri,sans-serif',
            fill: textFill,
            stroke: textStroke,
            text: "" + coordID + "",
            align: 'start',
            baseline: 'bottom',
            offsetX: 10,
            offsetY: -10
          }),
          declutter: true,
        });
      }
    }
  }
});

var resultVector = new ol.layer.Vector({
  displayInLayerSwitcher: false,
  style: function(f) {
    // var olFeature = geojsonFormat.writeFeatureObject(f);
    var titleId = f.get('data_id');
    if (typeof(f.get('dataset_name')) !== "undefined" && f.get('dataset_name').indexOf("PHR") !== -1)
      titleId = f.get('dataset_name');
    if (f.get('hidden') == "true")
      return null;
    else
      return new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: '#000000',
          width: 2
        }),
        text: new ol.style.Text({
          font: '18px Calibri,sans-serif',
          fill: new ol.style.Fill({
            color: 'Red'
          }),
          stroke: new ol.style.Stroke({
            color: '#FFFF00',
            width: 3
          }),
          text: titleId
        })
      })
  }
});

// orbito section
var toggleOrbitSelected=[];
var toggleOrbitCorridorSelected=[];
var ftr=null;
var rollAngle=null;

var resultVectorSatelliteCorridor = new ol.layer.Vector({
  //displayInLayerSwitcher: false,
  style: function(f) {
    var satellite=f.get('satellite');
    var fillColor, color;
     
    //console.log(satellite);
    // //Set different colors based on the satellite property
    // if (satellite === 'SPOT6') {
    //   color = 'rgba(243, 110, 44)';
    //   fillColor = 'rgba(243, 110, 44,0.1)';      
    //  } else if (satellite === 'Pleiades-1A' || satellite === 'Pleiades-1B') {
    //   fillColor = 'rgba(220, 12, 203,0.1)';
    //   strokeColor = 'rgba(220, 12, 203)';
     
    // }    
    

    if (satellite === 'SPOT6') {
      fillColor = 'rgba(243, 110, 44, 0.1)';
      strokeColor = 'rgba(243, 110, 44)';
    } else if (satellite === 'Pleiades-1A' || satellite === 'Pleiades-1B') {
      fillColor = 'rgba(220, 12, 203, 0.1)';
      strokeColor = 'rgba(220, 12, 203)';
    } else if (satellite === 'PNEO3' || satellite === 'PNEO4') {
      fillColor = 'rgba(106, 49, 220, 0.1)';
      strokeColor = 'rgba(106, 49, 220)';
    } else if (satellite === 'PRSS') {
      fillColor = 'rgba(0, 134, 49, 0.1)';
      strokeColor = 'rgba(0, 134, 49)';
    } else if (satellite === 'SuperView') {
      fillColor = 'rgba(70, 130, 180, 0.1)';
      strokeColor = 'rgba(70, 130, 180)';
    } else if (satellite === 'Taijing') {
      fillColor = 'rgba(0, 0, 0, 0.1)';
      strokeColor = 'rgba(0, 0, 0)';
    } else {
      // Default colors if satellite doesn't match any condition
      fillColor = 'rgba(255, 255, 255, 0.1)';
      strokeColor = 'rgba(0, 0, 0, 0.5)';
    }

    // console.log("Its "+ f.getProperties());
    if (f.get('hidden') == "true")
      return null;
    else 
      return new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: strokeColor,          
          width: 1
        }),
        fill: new ol.style.Fill({
          color:fillColor
        }),        
      })    
  }
});


//SPOT6, Pleiades, PNeo,PRSS, SuperView, Taijing  styling
var resultVectorSatelliteOrbito = new ol.layer.Vector({
  displayInLayerSwitcher: false,
  style: function(f) {
    var satellite=f.get('satellite');
    var fillColor, strokeColor,textColor,textStrokeColor;
    var orbitId = f.get('orbitNumber');

    //console.log(f.get('satellite'));
    //console.log(satellite);
    // Set different colors based on the satellite property
    if (satellite == 'SPOT6') {
      fillColor = 'rgba(243, 110, 44,0.1)';
      strokeColor = 'rgba(243, 110, 44)';
      textColor='Red';
      textStrokeColor='#FFFF00';
     } else if (satellite == 'Pleiades-1A' || satellite == 'Pleiades-1B') {
      fillColor = 'rgba(220, 12, 203,0.1)';
      strokeColor = 'rgba(220, 12, 203)';
      textStrokeColor='#FFFF00';//#FFFF00
      textColor='rgba(220, 12, 203)';
    } 
    else if (satellite == 'PNEO3' || satellite == 'PNEO4') {
      fillColor = 'rgb(106, 49, 220,0.1)';
      strokeColor = 'rgb(106, 49, 220)';
      textStrokeColor='#FFFF00';//#FFFF00
      textColor='rgb(106, 49, 220)';
    } 
    else if (satellite == 'PRSS') {
      fillColor = 'rgb(0,134,49,0.1)';
      strokeColor = 'rgb(0,134,49, 220)';
      textStrokeColor='#FFFF00';//#FFFF00
      textColor='rgb(0,134,49)';
    } 
    else if (satellite == 'SuperView') {
      fillColor = 'rgb(70,130,180,0.1)';
      strokeColor = 'rgb(70,130,180, 220)';
      textStrokeColor='#FFFF00';//#FFFF00
      textColor='rgb(0,134,49)';
    } 
    else if (satellite == 'Taijing') {
      fillColor = 'rgb(0,0,0,0.1)';
      strokeColor = 'rgb(0,0,0, 220)';
      textStrokeColor='#FFFF00';//#FFFF00
      textColor='rgb(0,0,0)';
    } 
    
    //console.log(strokeColor);
    if (f.get('hidden') == "true")
      return null;
    else
      return new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: strokeColor,
          width: 4
        }),
        text: new ol.style.Text({
          font: '18px Calibri,sans-serif',
          overflow:true,
          fill: new ol.style.Fill({
            color: textColor
          }),
          stroke: new ol.style.Stroke({
            color: textStrokeColor,
            width: 3
          }), 
          text: satellite + "("+orbitId+")"        
        })
      })

  }
});




// //Pleiades styling
// var resultVectorPleiadesorbito = new ol.layer.Vector({
//   displayInLayerSwitcher: false,
//   style: function(f) {
//     // var olFeature = geojsonFormat.writeFeatureObject(f);  
//     var orbitId = f.get('orbitNumber');
//     if (f.get('hidden') == "true")
//       return null;
//     else
//       return new ol.style.Style({
//         stroke: new ol.style.Stroke({
//           color: '#dc0ccb',
//           width: 4
//         }),
//         text: new ol.style.Text({
//           font: '18px Calibri,sans-serif',
//           overflow:true,
//           fill: new ol.style.Fill({
//             color: 'Red'
//           }),
//           stroke: new ol.style.Stroke({
//             color: '#FFFF00',
//             width: 3
//           }), 
//           text: "Pleiades ("+orbitId+")"        
//         })
//       })
//   }
// });

// var resultVectorPleiadescorridor = new ol.layer.Vector({
//   displayInLayerSwitcher: false,
//   style: function(f) {
//     // var olFeature = geojsonFormat.writeFeatureObject(f);  
//     //var orbitId = f.get('orbitNumber');
//     if (f.get('hidden') == "true")
//       return null;
//     else
//       return new ol.style.Style({
//         stroke: new ol.style.Stroke({
//           color: 'rgba(220, 12, 203)',
//           width: 1
//         }),
//         fill: new ol.style.Fill({
//           color:'rgba(220, 12, 203, 0.1)'
//         }),        
//       })
//   }
// });

var formatArea = function(polygon) {
  var area = ol.Sphere.getArea(polygon);
  var output;
  if (area > 10000) {
    output = (Math.round(area / 1000000 * 100) / 100) +
      ' ' + 'km';
  } else {
    output = (Math.round(area * 100) / 100) +
      ' ' + 'm';
  }
  return output;
};

var formatLength = function(line) {
  var length = ol.Sphere.getLength(line);
  var output;
  if (length > 100) {
    output = (Math.round(length / 1000 * 100) / 100) +
      ' ' + 'km';
  } else {
    output = (Math.round(length * 100) / 100) +
      ' ' + 'm';
  }
  return output;
};

// Return an object of WMS layer
function getWmsLayerMap(lyrName, isVisible) {
  var obj_Wms = new ol.layer.Tile({
    source: new ol.source.WMTS({
      url: 'http://192.168.10.35:8080/geoserver/gwc/service/wmts?',
      // url: 'getImagery.php',
      // layer: 'oms:' + lyrName,
      layer: 'OMS:baselayer_oms',
      matrixSet: 'EPSG:4326',
      format: 'image/png',
      projection: projection,
      // serverType: 'geoserver',
      crossOrigin: "Anonymous",
      tileGrid: new ol.tilegrid.WMTS({
        origin: [-180.0, 90.0],
        resolutions: resolutions,
        matrixIds: matrixIds,
        tileSize: [256, 256],
        extent: [-180.0, -90.0, 180.0, 90.0],
      })
    })
  });

  return obj_Wms;
}

function init() {
  getCurrentQuota().then(function(data) {
    var current_quota = JSON.parse(data)[0];
    $("#sv_quotaValue").html(parseFloat(current_quota.sv_quota).toFixed(2));
    $("#neo_quotaValue").html(parseFloat(current_quota.neo_quota).toFixed(2));
  }).catch(function(err) {
    console.log(err);
  });
  $(".pricing-Title").addClass("disable-title");
  $(".labelPricing").addClass("disable-label");
  $("input.chkPricing").attr("disabled", true);
  $("#endModify").hide();
  $("#divAcquisition").show();
  $("#divOptions").hide();
  ///////////////////---------------------------- PERMALINK ---------------------------------/////////////////////
  if (window.location.hash !== '') {
    // try to restore center, zoom-level and rotation from the URL
    var hash = window.location.hash.replace('#map=', '');
    var parts = hash.split('/');
    if (parts.length === 4) {
      zoom = parseInt(parts[0], 10);
      center = [
        parseFloat(parts[1]),
        parseFloat(parts[2])
      ];
      rotation = parseFloat(parts[3]);
    }
  }
  map = new ol.Map({
    target: 'map',
    controls: ol.control.defaults({
      attributionOptions: ({
        collapsible: true
      })
    }).extend([
      new ol.control.ZoomSlider(),
      new ol.control.ScaleLine({
        'units': 'us'
      })
    ]),
    interactions: [
      new ol.interaction.DragRotateAndZoom(),
      new ol.interaction.MouseWheelZoom(),
      new ol.interaction.DragPan(),
      new ol.interaction.DoubleClickZoom(),
      new ol.interaction.PinchZoom({
        constrainResolution: false
      }),
      select
    ],
    layers: [
      getWmsLayerMap("oms", true),
      mapZero,
      mapFirst,
      mapSecond,
      mapThird,
      vector,
      resultVector,
      resultVectorSatelliteOrbito,
      resultVectorSatelliteCorridor,            
      vectorClipped,
      vectorPoints
    ],
    view: new ol.View({
      center: center,
      zoom: zoom,
      minZoom: 4, 
      maxZoom: 14,
    })
  });

  let dragAndDropInteraction;

  function setInteraction() {
    if (dragAndDropInteraction) {
      map.removeInteraction(dragAndDropInteraction);
    }
    dragAndDropInteraction = new ol.interaction.DragAndDrop({
      formatConstructors: [
        ol.format.GPX,
        ol.format.GeoJSON,
        ol.format.IGC,
        // use constructed format to set options
        new ol.format.KML({extractStyles:true}),
        ol.format.TopoJSON,
      ],
    });
    dragAndDropInteraction.on('addfeatures', function (event) {
      const vectorSource = new ol.source.Vector({
        features: event.features,
      });
      // console.log(event.features);
      addAOI(event.features[0], '', 'dragdrop');
      // map.addLayer(
      //   new ol.layer.Vector({
      //     source: vectorSource,
      //   })
      // );
      map.getView().fit(vectorSource.getExtent());
    });
    map.addInteraction(dragAndDropInteraction);
  }
  setInteraction();
  initialExtent = map.getView().calculateExtent(map.getSize());

  /////////////////////---------------------------- PERMALINK ---------------------------------/////////////////////
  var shouldUpdate = true;
  var view = map.getView();
  var updatePermalink = function(evt) {
    if (map.getView().getZoom() > "4" && map.getView().getZoom() <= "5") {
      mapZero.setVisible(true);
      mapFirst.setVisible(false);
      mapSecond.setVisible(false);
      mapThird.setVisible(false);
    }
    if (map.getView().getZoom() > "5" && map.getView().getZoom() <= "6") {
      mapZero.setVisible(false);
      mapFirst.setVisible(true);
      mapSecond.setVisible(false);
      mapThird.setVisible(false);
    }
    if (map.getView().getZoom() > "6" && map.getView().getZoom() <= "7") {
      mapZero.setVisible(false);
      mapFirst.setVisible(false);
      mapSecond.setVisible(true);
      mapThird.setVisible(false);
    }
    if (map.getView().getZoom() > "7") {
      mapZero.setVisible(false);
      mapFirst.setVisible(false);
      mapSecond.setVisible(false);
      mapThird.setVisible(true);
    }
    if (!shouldUpdate) {
      shouldUpdate = true;
      return;
    }

    var center = view.getCenter();
    var hash = '#map=' +
      (view.getZoom()) + '/' +
      Math.round(center[0] * 100) / 100 + '/' +
      Math.round(center[1] * 100) / 100 + '/' +
      view.getRotation();
    var state = {
      zoom: view.getZoom(),
      center: view.getCenter(),
      rotation: view.getRotation()
    };
    window.history.pushState(state, 'map', hash);
  };
  hoverInteraction = new ol.interaction.Select({
    condition: ol.events.condition.pointerMove,
    layers: [mapZero, mapFirst, mapSecond],
    style: styleSelected
  });
  map.addInteraction(hoverInteraction);


  map.on('moveend', updatePermalink);
  window.addEventListener('popstate', function(event) {
    if (event.state === null) {
      return;
    }
    map.getView().setCenter(event.state.center);
    map.getView().setZoom(event.state.zoom);
    map.getView().setRotation(event.state.rotation);
    shouldUpdate = false;
  });

  /////////////////////---------------------------- SIDE MENU ---------------------------------/////////////////////

  menu = new ol.control.Overlay({
    closeBox: false,
    className: "slide-left menu",
    content: $("#menu").get(0)
  });
  map.addControl(menu);

    
  /////////////////////---------------------------- EDIT BAR ---------------------------------/////////////////////

  map.getInteractions().getArray().forEach(function(interaction) {
    if (interaction instanceof ol.interaction.DoubleClickZoom) {
      interaction.setActive(false);
    }
  });


   //orbitography secction
   $('#chkOrbitography').click(function() {
      $('#dvOrbitography-panel').animate({width:'toggle'},350);
      //$('.divControls').show();
    });

    $('#iconClose').click(function(){
      $('#dvOrbitography-panel').animate({width:'hide'},350);
    });

  activatePointer(false);
  // UI Code
  $("#btnDelete").on('click', function() {
    var features = vector.getSource().getFeatures();

    removeAllThumbs();
    for (i = 0; i < features.length; i++) {
      if (features[i].get('count') == $("#polygons").val()) {
        vector.getSource().removeFeature(features[i]);
        drawCount--;
        $("#polygons option[value='" + features[i].get('count') + "']").remove();
        if ($("#polygons").val() == "" || $("#polygons").val() == null) {
          move(initialExtent, "reset");
          $("#divActive").hide();
          $(".divControls").hide();
        }
        if ($('.menu').hasClass("ol-visible"))
          toggleMenu('Archive');
        $("#btnModify").prop('disabled', true);
        break;
      }
    }
    polygonChanged();
  });

  $("#btnDraw").on('click', function() {
    if ($('#toolsArea').is(":visible"))
      $('#toolsArea').hide();
    else
      $('#toolsArea').show();
  });
  $("#pointOptions").on('click', function() {
    if ($("#iPoint").hasClass("fa-chevron-circle-right")) {
      $("#distanceBufferPoint").show("slide");
      $("#iPoint").removeClass().addClass("fas fa-chevron-circle-left");
    } else if ($("#iPoint").hasClass("fa-chevron-circle-left")) {
      $("#distanceBufferPoint").hide("slide");
      $("#iPoint").removeClass().addClass("fas fa-chevron-circle-right");
      $("#iLine").removeClass().addClass("fas fa-chevron-circle-right");
    }
  })
  $("#lineOptions").on('click', function() {
    if ($("#iLine").hasClass("fa-chevron-circle-right")) {
      $("#distanceBufferPoint").show("slide");
      $("#iLine").removeClass().addClass("fas fa-chevron-circle-left");
    } else if ($("#iLine").hasClass("fa-chevron-circle-left")) {
      $("#distanceBufferPoint").hide("slide");
      $("#iPoint").removeClass().addClass("fas fa-chevron-circle-right");
      $("#iLine").removeClass().addClass("fas fa-chevron-circle-right");
    }
  })

  $("#divActive").hide();

  select.on('select', function(e) {
    evt.selected.forEach(function(feature) {
      selectSource.push(feature);
    });
    evt.deselected.forEach(function(feature) {
      selectSource.remove(feature);
    });
    if (e.selected.length > 0) {
      selectedFeature = e.selected[0];
      var wkt = format.writeGeometry(selectedFeature.getGeometry());
      endCoords = selectedFeature.getGeometry().getCoordinates();
      activeAOI = wkt;
      highlightedAOI = selectedFeature;
      fetchData(wkt, selectedFeature);
    }
  });

  $('#chkGraticule').click(function() {
    if ($("#gridI").hasClass('gridOn')) {
      $("#gridI").removeClass('gridOn');
      try {
        if (g) map.removeControl(g);
      } catch (e) {}
    } else {
      $("#gridI").addClass('gridOn');
      setGraticule();
    }
  });

  $("#satImgPriority").change(function() {
    var txt = $( "#satImgPriority option:selected" ).text();
    $("#pdf_OrderPriority").html(txt);
  });
  $("#satAcqModes").change(function() {
    $("#pdf_acqMode").html($(this).val());
    if ($(this).val() !== "Mono") {
      $(".stereo").hide();
      $("#satImgPriority").prop('disabled', true);
      let element = document.getElementById("satImgPriority");
      element.value = 'standard';
    } else {
      $(".stereo").show();
      $("#satImgPriority").prop('disabled', false);
    }
  });

  $('#cbMultipleAcq').change(function() {
    if ($('#cbMultipleAcq').is(':checked')) {
  		$(".acqFreshFreqDiv").show();
  		$("#freshAcqFreq").show();
	  } else
      $(".acqFreshFreqDiv").hide();
  });

  $('.chkPleiades').change(function() {
    var len = $('input[name=Pleiades]:checkbox:checked').length;
    $("#countPleiadesProd").text(len);
    if (len == 0)
      $("#cbPleiadesMain").attr('checked', false);
    else if (len == 7)
      $("#cbPleiadesMain").prop('checked', true);
  });
  $('.chkPleiadesNeo').change(function() {
    var len = $('input[name=PleiadesNeo]:checkbox:checked').length;
    $("#countPleiadesNeoProd").text(len);
    if (len == 0)
      $("#cbPleiadesNeoMain").attr('checked', false);
    else if (len == 7)
      $("#cbPleiadesNeoMain").prop('checked', true);
  });
  $('.chkSV').change(function() {
    var len = $('input[name=SV]:checkbox:checked').length;
    $("#countSVProd").text(len);
    if (len == 0)
      $("#cbSVMain").attr('checked', false);
    else if (len == 7)
      $("#cbSVMain").prop('checked', true);
  });
  $('.chkSpot67').change(function() {
    var len = $('input[name=spot67]:checkbox:checked').length;
    $("#countSpot67Prod").text(len);
    if (len == 0)
      $("#cbSPOTMain").attr('checked', false);
    else if (len == 4)
      $("#cbSPOTMain").prop('checked', true);
  });
  $('.chkPRSS').change(function() {
    var len = $('input[name=prss]:checkbox:checked').length;
    $("#countPRSSProd").text(len);
    if (len == 0)
      $("#cbPRSSMain").attr('checked', false);
    else if (len == 6)
      $("#cbPRSSMain").prop('checked', true);


    if (selectedFeature) {
      var wkt = format.writeGeometry(selectedFeature.getGeometry());
      endCoords = selectedFeature.getGeometry().getCoordinates();
      highlightedAOI = selectedFeature;
      activeAOI = wkt;
      fetchData(wkt, selectedFeature);
    }
  });
  $('#cbPRSSMain').change(function() {
    if ($('#cbPRSSMain').is(":checked"))
      $('input[name=prss]').prop('checked', true);
    else
      $('input[name=prss]').prop('checked', false);
    var len = $('input[name=prss]:checkbox:checked').length;
    $("#countPRSSProd").text(len);
    if (len == 0)
      $("#cbPRSSMain").attr('checked', false);

    var totalFeatures = vector.getSource().getFeatures();
    for (var i = 0; i < totalFeatures.length; i++) {
      if (totalFeatures[i].get('count') == $("#polygons").val()) {
        var wkt = format.writeGeometry(totalFeatures[i].getGeometry());
        endCoords = totalFeatures[i].getGeometry().getCoordinates();
        highlightedAOI = totalFeatures[i];
        activeAOI = wkt;
        fetchData(wkt, totalFeatures[i]);
      }
    }
  });
  $('#cbSPOTMain').change(function() {
    if ($('#cbSPOTMain').is(":checked"))
      $('input[name=spot67]').prop('checked', true);
    else
      $('input[name=spot67]').prop('checked', false);
  });
  $('#cbSpot5Main').change(function() {
    if ($('#cbSpot5Main').is(":checked"))
      $('input[name=spot5]').prop('checked', true);
    else
      $('input[name=spot5]').prop('checked', false);
  });
  $('#cbPleiadesMain').change(function() {
    if ($('#cbPleiadesMain').is(":checked"))
      $('input[name=Pleiades]').prop('checked', true);
    else
      $('input[name=Pleiades]').prop('checked', false);
  });
  $('#cbPleiadesNeoMain').change(function() {
    if ($('#cbPleiadesNeoMain').is(":checked"))
      $('input[name=PleiadesNeo]').prop('checked', true);
    else
      $('input[name=PleiadesNeo]').prop('checked', false);
  });
  $('#cbSVMain').change(function() {
    if ($('#cbSVMain').is(":checked"))
      $('input[name=SV]').prop('checked', true);
    else
      $('input[name=SV]').prop('checked', false);
  });

  $('.chkProdMain').change(function() {
    var totalFeatures = vector.getSource().getFeatures();
    for (var i = 0; i < totalFeatures.length; i++) {
      if (totalFeatures[i].get('count') == $("#polygons").val()) {
        var wkt = format.writeGeometry(totalFeatures[i].getGeometry());
        endCoords = totalFeatures[i].getGeometry().getCoordinates();
        highlightedAOI = totalFeatures[i];
        activeAOI = wkt;
        fetchData(wkt, totalFeatures[i]);
      }
    }
  });

  $('#applyCriteria').on('click', function() {
    var totalFeatures = vector.getSource().getFeatures();
    for (var i = 0; i < totalFeatures.length; i++) {
      if (totalFeatures[i].get('count') == $("#polygons").val()) {
        var wkt = format.writeGeometry(totalFeatures[i].getGeometry());
        endCoords = totalFeatures[i].getGeometry().getCoordinates();
        highlightedAOI = totalFeatures[i];
        activeAOI = wkt;
        fetchData(wkt, totalFeatures[i]);
      }
    }
  });

  $('#satSelect').change(function() {
    $(".rowPriority").hide();
	$("#multipleAcq").show();
	$("#placeFreshOrder").prop('disabled', false);
	$("#showPDF").prop('disabled', false);
    var x = document.getElementById("satProducts");
    var option = document.createElement("option");
    var val = $('#satSelect').val();
    hideAllFreshProdDivs();
    $(".rowSAR").hide();
    $(".rowCloud").show();
    $(".rowInc").show();
    $(".infoPleiadesNeo").hide();
    $(".quotaPleiadesNeo").hide();
    $(".infoSV").hide();
    $("#sat" + val).show();
    if (val == 'PleiadesNeo') {
	    $("#multipleAcq").hide();
	    $(".rowPriority").show();
      if(parseFloat(areaDrawn.replace(' km', '')) < 100){
        toastr.error("Minimum order area for Pléiades Neo is 100 sq. km. Please re-draw");
        $("#placeFreshOrder").prop('disabled', true);
        $("#showPDF").prop('disabled', true);
        return;
      }
      var area = parseFloat(areaDrawn.replace(" km", ""));
      var qVal = parseFloat($("#neo_quotaValue").text().replace(' km2', '').replace(',', ''));
      if (qVal < area) {
        toastr.error("Quota unavailable to process the request.");
        $("#placeFreshOrder").prop('disabled', true);
        $("#showPDF").prop('disabled', true);
      } else {
        $("#placeFreshOrder").prop('disabled', false);
        $("#showPDF").prop('disabled', false);
        var area = parseFloat(areaDrawn.replace(" km", ""));
        var qVal = parseFloat($("#neo_quotaValue").text().replace(' km2', '').replace(',', ''));
        var rem = (qVal - area).toFixed(2);
      }
    } else if (val == 'SV') {
      $(".rowPriority").show();
      if(parseFloat(areaDrawn.replace(' km', '')) < 500){
        toastr.error("Minimum order area for SuperView is 500 sq. km. Please re-draw");
        $("#placeFreshOrder").prop('disabled', true);
        $("#showPDF").prop('disabled', true);
        return;
      }
      // $("#satSV").show();
      var area = parseFloat(areaDrawn.replace(" km", ""));
      var qVal = parseFloat($("#sv_quotaValue").text().replace(' km2', '').replace(',', ''));
      if (qVal < area) {
        toastr.error("Quota unavailable to process the request.");
        $("#placeFreshOrder").prop('disabled', true);
        $("#showPDF").prop('disabled', true);
      } else {
        $("#placeFreshOrder").prop('disabled', false);
        $("#showPDF").prop('disabled', false);
        var area = parseFloat(areaDrawn.replace(" km", ""));
        var qVal = parseFloat($("#sv_quotaValue").text().replace(' km2', '').replace(',', ''));
        var rem = (qVal - area).toFixed(2);
      }
    } else if (val == 'SAR') {
      $(".rowSAR").show();
      $(".rowCloud").hide();
      $(".rowInc").hide();
	  $("#antennaSAR").show();
	  $("#passSAR").show();
	  $("#prodLevelSAR").show();
      // $("#freshAngleLower").attr('min', 20);
      // $("#freshAngleLower").attr('max', 50);
      // $("#freshAngleUpper").attr('max', 50);
      // $("#freshAngleUpper").attr('max', 50);
      // $("#freshAngleLowerSlider").attr('min', 20);
      // $("#freshAngleLowerSlider").attr('max', 50);
      // $("#freshAngleUpperSlider").attr('max', 20);
      // $("#freshAngleUpperSlider").attr('max', 50);
    }
  });

  $("#drawCoord").on('click', function() {
    var latValue = parseFloat(document.getElementById('decimalLatitude').value);
    var longValue = parseFloat(document.getElementById('decimalLongitude').value);
    var latDegrees = parseFloat(document.getElementById('latDegrees').value);
    var latMinutes = parseFloat(document.getElementById('latMinutes').value);
    var latSeconds = parseFloat(document.getElementById('latSeconds').value);
    var lonDegrees = parseFloat(document.getElementById('lonDegrees').value);
    var lonMinutes = parseFloat(document.getElementById('lonMinutes').value);
    var lonSeconds = parseFloat(document.getElementById('lonSeconds').value);
    var bufferValue = parseInt(document.getElementById('coordBuffer').value);
    if (!latValue) {
      latValue = parseInt(ConvertDMSToDEG(latDegrees, latMinutes, latSeconds));
    }
    if (!longValue) {
      longValue = parseInt(ConvertDMSToDEG(lonDegrees, lonMinutes, lonSeconds));
    }
    var pointFeature = turf.point([longValue, latValue]);
    var bufferedFeature = turf.buffer(pointFeature, bufferValue, {
      units: 'kilometers'
    });
    var olFeature = (new ol.format.GeoJSON({
      defaultDataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857'
    })).readFeature(bufferedFeature);
    squareBox = new ol.Feature(new ol.geom.Polygon.fromExtent(olFeature.getGeometry().getExtent()));
	areaDrawn = formatArea(squareBox.getGeometry()).replace(" km", "");
	if (parseInt(areaDrawn) < 100) {
      toastr.error("Please draw AOI according to minimum area requirements i.e " + 100 + " km <sup>2</sup>");
      if ($("#polygons").val() === null) {
        $("#divActive").hide();
      }
      return;
    }
	squareBox.set("calc", areaDrawn + " km");
	drawCount++;
    squareBox.set("count", drawCount);
    squareBox.set("calc", areaDrawn + " km");
    vector.getSource().addFeature(squareBox);
    populatePolygonCombo(drawCount);
    var wkt = format.writeGeometry(squareBox.getGeometry());
    endCoords = squareBox.getGeometry().getCoordinates();
    highlightedAOI = squareBox;
    activeAOI = wkt;
    fetchData(wkt, squareBox);
    $("#divActive").show();
    activatePointer(false);
  });


  $('#decimalLatitude').bind('change keyup mouseup', function() {
    try {
      convertDecimal();
    } catch (e) {}
    try {
      convertUTM();
    } catch (e) {}
  });


  $('#decimalLongitude').bind('change keyup mouseup', function() {
    try {
      convertDecimal();
    } catch (e) {}
    try {
      convertUTM();
    } catch (e) {}
  });
}

function convertDecimal() {
  var lat = parseFloat(document.getElementById("decimalLatitude").value);
  var lon = parseFloat(document.getElementById("decimalLongitude").value);
  var mapDatum = 1;
  var latStr = Geo.toDMS(lat, "dms", 4);
  var lonStr = Geo.toDMS(lon, "dms", 4);
  setDMS(latStr, lonStr, lat >= 0 ? 0 : 1, lon < 0 ? 0 : 1);

  utmconv.setDatum(mapDatum);
  var coords = utmconv.latLngToUtm(lat, lon);

  setStandardUtm(coords.global.easting, coords.global.northing, coords.global.zone, coords.global.southern);
  setNatoUtm(coords.nato.easting, coords.nato.northing, coords.nato.lngZone, coords.nato.latZone, coords.nato.digraph);
}


function setDMS(lat, lon, latHemi, lonHemi) {
  var latDeg = lat.substr(0, 3);
  var latMin = lat.substr(4, 2);
  var latSec = lat.substring(7, lat.length - 1);

  var lonDeg = lon.substr(0, 3);
  var lonMin = lon.substr(4, 2);
  var lonSec = lon.substring(7, lon.length - 1);

  if (latDeg.charAt(0) == "0") {
    latDeg = latDeg.substring(1, latDeg.length);
  }

  if (latDeg.charAt(0) == "0") {
    latDeg = latDeg.substring(1, latDeg.length);
  }

  if (lonDeg.charAt(0) == "0") {
    lonDeg = lonDeg.substring(1, lonDeg.length);
  }

  if (lonDeg.charAt(0) == "0") {
    lonDeg = lonDeg.substring(1, lonDeg.length);
  }

  document.getElementById("latDegrees").value = latDeg;
  document.getElementById("latMinutes").value = latMin;
  document.getElementById("latSeconds").value = latSec;

  document.getElementById("lonDegrees").value = lonDeg;
  document.getElementById("lonMinutes").value = lonMin;
  document.getElementById("lonSeconds").value = lonSec;
}

function setStandardUtm(x, y, utmz, southern) {
  document.getElementById("utmEasting").value = x;
  document.getElementById("utmNorthing").value = y;
  document.getElementById("utmZone").value = utmz;
}

function setNatoUtm(x, y, utmz, latz, digraph) {
  document.getElementById("natoEasting").value = x;
  document.getElementById("natoNorthing").value = y;
  document.getElementById("natoLonZone").value = utmz;
  document.getElementById("natoLatZone").value = latz;
  document.getElementById("natoDigraph").value = digraph;
}

function setDecimalDegrees(lat, lon) {
  document.getElementById("decimalLatitude").value = lat;
  document.getElementById("decimalLongitude").value = lon;
}

function updateCounter() {
  var len = $("input[name='prss[]']:checked").length;
}

function modifyFeature() {
  $(".divControls").hide();
  $("#endModify").show();
  if ($('.menu').hasClass("ol-visible")) {
    toggleMenu('Archive');
  }
  emptyCart();
  toastr.info("Please click 'End Modifying' button to fetch results");
  modify = new ol.interaction.Modify({
    source: vector.getSource(),
    features: featureModify
  });
  map.addInteraction(modify);
  var originalCoordinates = {};
  modify.on('modifystart',
    function(evt) {
      evt.features.forEach(function(feature) {
        originalCoordinates[feature] = feature.getGeometry().getCoordinates();
      });
      evt.features.a[0].on('change', function(e) {

        evt.features.a[0].set("calc", Math.round(turf.convertArea(turf.area(geojsonFormat.writeFeatureObject(evt.features.a[0])), "meters", "kilometers")));
      });
    });
  modify.on('modifyend', function(evt) {
    var index = evt.features.getLength() - 1;
    modifiedFeature = evt.features.a[index];
    if (modifiedFeature.getGeometry().getCoordinates()[0].length <= 5) {
      evt.features.a[index].set("drawnType", "Box");
    } else {
      evt.features.a[index].set("drawnType", "Polygon");
    }
    var modifiedFeatureArea = ol.sphere.getArea(modifiedFeature.getGeometry()) / 1000000;
    evt.features.forEach(function(feature) {
      if (feature in originalCoordinates && modifiedFeatureArea < 100) {
        feature.getGeometry().setCoordinates(
          originalCoordinates[feature]
        );
        delete originalCoordinates[feature];

        // remove and re-add the feature to make Modify reload it's geometry
        selectSource.remove(feature);
        selectSource.push(feature);
        toastr.error("AOI Area cannot be less than 100 km<sup>2</sup>");
      }
    });
    var shp = modifiedFeature.get("drawnType");
    if (modifiedFeature.getGeometry().getCoordinates()[0].length === 5) {
      shp = "Box";
    } else {
      shp = "Polygon";
    }
    var wkt = format.writeGeometry(evt.features.a[0].getGeometry());
    endCoords = evt.features.a[0].getGeometry().getCoordinates();
    highlightedAOI = evt.features.a[0];
    activeAOI = wkt;
  })
}

function addInteraction(val) {
  toastr.info("Area of AOI should be greater than 100km<sup>2</sup>");
  selectedInteraction = val;
  $("#btnDraw").hasClass('active')
  $("#btnDraw").removeClass("active");

  if ($('#toolsArea').is(":visible"))
    $('#toolsArea').hide();
  activatePointer(true);
  try {
    map.removeInteraction(draw);
  } catch (e) {}
  switch (val) {
    case 'Point':
    case 'LineString':
    case 'Polygon':
      draw = new ol.interaction.Draw({
        source: vector.getSource(),
        type: val,
        style: new ol.style.Style({
          cursor: 'pointer',
          image: new ol.style.Circle({
            radius: 0,
            fill: new ol.style.Fill({
              color: '#000'
            })
          }),
          stroke: new ol.style.Stroke({
            color: '#000',
            width: 2
          })
        })
      });
      map.addInteraction(draw);
      break;
    case 'Box':
      draw = new ol.interaction.Draw({
        finishCondition: (event) => {
          var area = ol.Sphere.getArea(geomDrawn);
          var minArea = 100;
          if (area > minArea) {
            return true;
          } else {
            return false;
          }
        },
        source: vector.getSource(),
        type: 'Circle',
        geometryFunction: ol.interaction.Draw.createBox(),
        style: new ol.style.Style({
          cursor: 'pointer',
          image: new ol.style.Circle({
            radius: 0,
            fill: new ol.style.Fill({
              color: '#000'
            })
          }),
          stroke: new ol.style.Stroke({
            color: '#000',
            width: 2
          })
        })
      });
      map.addInteraction(draw);
      break;
  }

  draw.on('drawstart',
    function(evt) {
      try {
        var delFeature = vector.getSource().getFeatureById(deleteID);
        vector.getSource().removeFeature(delFeature);
      } catch (e) {}
      map.removeInteraction(select);
      measureTooltipElement = document.createElement('div');
      measureTooltipElement.className = 'tooltip tooltip-measure';
      measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center'
      });
      map.addOverlay(measureTooltip);
      sketch = evt.feature;
      var tooltipCoord = evt.coordinate;

      listener = sketch.getGeometry().on('change', function(evt) {
        var geom = evt.target;
        var output;
        if (geom instanceof ol.geom.Polygon) {
          output = formatArea(geom);
          tooltipCoord = geom.getInteriorPoint().getCoordinates();
        } else if (geom instanceof ol.geom.LineString) {
          output = formatLength(geom);
          tooltipCoord = geom.getLastCoordinate();
        }
        measureTooltipElement.innerHTML = output;
        measureTooltip.setPosition(tooltipCoord);
      });
    });

  draw.on('drawend',
    function(evt) {
	     addAOI(evt.feature, val, 'drawend');
    });

  vector.getSource().on('addfeature', function(e) {
    var features = vector.getSource().getFeatures();
    var feature = features[features.length - 1];
    if (feature.S.type == "simpleline" || feature.S.type == "simplepoint")
      vector.getSource().removeFeature(feature);
  });
}


function measureAOIArea(ftr) {
  // console.log(parseFloat(ol.sphere.getArea(ftr.getGeometry()) / 1000000).toFixed(2));
  area = (parseFloat(ol.sphere.getArea(ftr.getGeometry()) / 1000000).toFixed(2)).toString();
  return area;
}
// var txt_temp = '';
// for (const key in orderids) {
//   console.log("update oms set ordered_area = " + measureAOIArea(new ol.format.WKT().readFeature(orderids[key])) + " where orderid ='"+ key +"'");
//   txt_temp += "update orders set ordered_area = " + measureAOIArea(new ol.format.WKT().readFeature(orderids[key])) + " where orderid ='"+ key +"'; "; 
// }
// console.log(txt_temp);
function checkGeomType(ftr) {
  if (ftr.getGeometry().getCoordinates()[0].length <= 5) {
    geom = "Box";
  } else {
    geom = "Polygon";
  }
  return geom;
}

function addAOI(ftr, val, event) {
    $("#satSelect").val("PRSS");
  	$(".freshSelect").hide();
  	$("#satSelect").show();
  	$("#satPRSS").show();
    $("#placeFreshOrder").prop('disabled', false);
    $("#showPDF").prop('disabled', false);
    $("#btnModify").prop('disabled', false);
    $("#divActive").show();
    activatePointer(false);
    areaDrawn = 0;
    var endCoords = ftr.getGeometry().getCoordinates();
    areaDrawn = measureAOIArea(ftr);
    //console.log(areaDrawn);
    // Record AOI Area
    if (measureTooltipElement) {
      try {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
      } catch (e) {}
    }
    drawCount++;
    ftr.set("drawnType", val);
    ftr.set("count", drawCount);
    if (val === "Point") {
      ftr.set("type", 'simplepoint');
      var coords = ol.proj.transform(ftr.getGeometry().getCoordinates(), 'EPSG:3857', 'EPSG:4326');
      var pointFeature = turf.point([coords[0], coords[1]]);
      var bufferedFeature = turf.buffer(pointFeature, document.getElementById('txtBufferPoint').value, {
        units: 'kilometers'
      });
      var olFeature = (new ol.format.GeoJSON({
        defaultDataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
      })).readFeature(bufferedFeature);
      ftr = new ol.Feature(new ol.geom.Polygon.fromExtent(olFeature.getGeometry().getExtent()));
      ftr.set("count", drawCount);
      areaDrawn = measureAOIArea(ftr);
      ftr.set("calc", areaDrawn + " km");
      endCoords = ftr.getGeometry().getCoordinates();
    }
    if (val == "LineString") {
      ftr.set("type", 'simpleline');
      var pp = (new ol.format.GeoJSON({
        defaultDataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
      })).writeGeometry(ftr.getGeometry());
      var ppJson = JSON.parse(pp);
      var line = turf.lineString(ppJson.coordinates);
      var buffered = turf.buffer(line, document.getElementById('txtBufferLine').value, {
        units: 'kilometers'
      });
      ftr = (new ol.format.GeoJSON({
        defaultDataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
      })).readFeature(buffered);
      ftr.set("count", drawCount);
      areaDrawn = measureAOIArea(ftr);
      ftr.set("calc", areaDrawn + " km");
      endCoords = ftr.getGeometry().getCoordinates();
    }
    try {
      areaDrawn.replace(' km', '');
    } catch (e) {}
    if (parseInt(areaDrawn) < 100) {
      toastr.error("Please draw AOI according to minimum area requirements i.e 100 km <sup>2</sup>");
      ftr.set("param", "deleted");
      ftr.setId(deleteID);
      $(".tooltip-measure").hide();
      if ($("#polygons").val() === null) {
        $("#divActive").hide();
      }
      return;
    } else {
      ftr.set("calc", areaDrawn);
      // feature already added in case of drawend
      if (!((val == "Box" && event == 'drawend') || (val == "Polygon" && event == 'drawend'))) {
        vector.getSource().addFeature(ftr);
      }
    }
    populatePolygonCombo(drawCount);
    var wkt = format.writeGeometry(ftr.getGeometry());
    endCoords = ftr.getGeometry().getCoordinates();
    wktArch = wkt;
    highlightedAOI = ftr;
    featureArch = ftr;
    $('#divOptions').show();
    $('#divAcquisition').hide();
    $(".iconArchive").css("color", "#7cf359");
    activeAOI = wktArch;
    fetchData(wktArch, featureArch);
    acquisition = 'Archive';
    draw.setActive(false);
}
function getCenterOfExtent(Extent) {
  var X = Extent[0] + (Extent[2] - Extent[0]) / 2;
  var Y = Extent[1] + (Extent[3] - Extent[1]) / 2;
  return [X, Y];
}

function showOrbitPath(row){
  //for corridor display
  var ftr=null;
  //console.log(row.childNodes[0].innerText+"_"+row.childNodes[1].innerText+"_orbitoVisibility");
  var orbitoDataID = row.childNodes[0].innerText+"_"+row.childNodes[1].innerText+"_orbitoVisibility";
  //var orbitoCorridorDataID = row.childNodes[0].innerText+"_"+row.childNodes[1].innerText+"_corridorVisibility";
  //console.log(orbitoCorridorDataID);
  var totalFeatures = resultVectorSatelliteOrbito.getSource().getFeatures();
  var highlightedFeatureSPOT6;

  //console.log(totalFeatures.length);
  //console.log(orbitoDataID);
  for (var i = 0; i < totalFeatures.length; i++) {
    if (totalFeatures[i].get('satellite')+"_"+totalFeatures[i].get('orbitNumber')+"_orbitoVisibility" == orbitoDataID) {
      highlightedFeature = totalFeatures[i];      
      
      //for corridor display
      ftr=totalFeatures[i];      
      totalFeatures[i].set("hidden", "false");
    }
  }  
  
  //for corridor dislay on mouse enter
  var satelliteName=row.childNodes[0].innerText;
  var orbitNumber=row.childNodes[1].innerText;

  //console.log(rollAngle);
  var bufferDistance=null;
  if(satelliteName==="SPOT6"){
    if(rollAngle=="5")
      bufferDistance="61.105";
    else if(rollAngle=="10")
      bufferDistance="125.7652";
    else if(rollAngle=="15")
      bufferDistance="192.4252";
    else if(rollAngle=="20")
      bufferDistance="262.196";
    else if(rollAngle=="25")
      bufferDistance="337.0774";
    else if(rollAngle=="30")
      bufferDistance="420.0691";
    else if(rollAngle=="35")
      bufferDistance="516.8372";
    else if(rollAngle=="40")
      bufferDistance="624.2709";
    else if(rollAngle=="45")
      bufferDistance="763.8125";
  }
  else if(satelliteName==="Pleiades-1A" || satelliteName==="Pleiades-1B"){
    if(rollAngle=="5")
      bufferDistance="61.105";
    else if(rollAngle=="10")
      bufferDistance="125.7652";
    else if(rollAngle=="15")
      bufferDistance="192.4252";
    else if(rollAngle=="20")
      bufferDistance="262.196";
    else if(rollAngle=="25")
      bufferDistance="337.0774";
    else if(rollAngle=="30")
      bufferDistance="420.0691";
    else if(rollAngle=="35")
      bufferDistance="516.8372";
    else if(rollAngle=="40")
      bufferDistance="624.2709";
    else if(rollAngle=="45")
      bufferDistance="763.8125";
  }
  else if(satelliteName==="PNEO3" || satelliteName==="PNEO4"){
      if(rollAngle=="5")
      bufferDistance="61.105";
    else if(rollAngle=="10")
      bufferDistance="125.7652";
    else if(rollAngle=="15")
      bufferDistance="192.4252";
    else if(rollAngle=="20")
      bufferDistance="262.196";
    else if(rollAngle=="25")
      bufferDistance="337.0774";
    else if(rollAngle=="30")
      bufferDistance="420.0691";
    else if(rollAngle=="35")
      bufferDistance="516.8372";
    else if(rollAngle=="40")
      bufferDistance="624.2709";
    else if(rollAngle=="45")
      bufferDistance="763.8125";
  }
  else if(satelliteName==="PRSS"){
    if(rollAngle=="5")
      bufferDistance="111.1";
    else if(rollAngle=="10")
      bufferDistance="222.2";
    else if(rollAngle=="15")
      bufferDistance="391.072";
    else if(rollAngle=="20")
      bufferDistance="543.279";
    else if(rollAngle=="25")
      bufferDistance="684.376";
    else if(rollAngle=="30")
      bufferDistance="823.251";
    else if(rollAngle=="35")
      bufferDistance="957.682";
    else if(rollAngle=="40")
      bufferDistance="1093.224";
    else if(rollAngle=="45")
      bufferDistance="1227.655";
  }
  else if(satelliteName==="Taijing"){
    if(rollAngle=="5")
      bufferDistance="111.1";
    else if(rollAngle=="10")
      bufferDistance="222.2";
    else if(rollAngle=="15")
      bufferDistance="391.072";
    else if(rollAngle=="20")
      bufferDistance="543.279";
    else if(rollAngle=="25")
      bufferDistance="684.376";
    else if(rollAngle=="30")
      bufferDistance="823.251";
    else if(rollAngle=="35")
      bufferDistance="957.682";
    else if(rollAngle=="40")
      bufferDistance="1093.224";
    else if(rollAngle=="45")
      bufferDistance="1227.655";
  }
  else if(satelliteName==="SuperView"){
    if(rollAngle=="5")
      bufferDistance="61.105";
    else if(rollAngle=="10")
      bufferDistance="125.7652";
    else if(rollAngle=="15")
      bufferDistance="192.4252";
    else if(rollAngle=="20")
      bufferDistance="262.196";
    else if(rollAngle=="25")
      bufferDistance="337.0774";
    else if(rollAngle=="30")
      bufferDistance="420.0691";
    else if(rollAngle=="35")
      bufferDistance="516.8372";
    else if(rollAngle=="40")
      bufferDistance="624.2709";
    else if(rollAngle=="45")
      bufferDistance="763.8125";
  }
  
  ftr.set("type", 'simpleline');
  //ftr.set("satellite",satelliteName);
  var pp = (new ol.format.GeoJSON({
    defaultDataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
  })).writeGeometry(ftr.getGeometry());
  var ppJson = JSON.parse(pp);
  var line = turf.lineString(ppJson.coordinates[0]);
  var buffered = turf.buffer(line, bufferDistance, {
    units: 'kilometers'
  });
  
  ftr = (new ol.format.GeoJSON({
    defaultDataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
  })).readFeature(buffered);
  ftr.set("count", drawCount);
  ftr.set("satellite", satelliteName); //setting satellite name to be used in styling 
  ftr.set("orbitNumber",orbitNumber);
  //console.log(ftr);

  var vectorSourceSatellitecorridor = new ol.source.Vector({
    features: [ftr]    
  });
  resultVectorSatelliteCorridor.setSource(vectorSourceSatellitecorridor);
  
}

function hideOrbitPath(row){  
    //console.log(row.childNodes[0].innerText+"_"+row.childNodes[1].innerText+"_orbitoVisibility");
    var orbitoDataID = row.childNodes[0].innerText+"_"+row.childNodes[1].innerText+"_orbitoVisibility";
    var corridorDataID = row.childNodes[0].innerText+"_"+row.childNodes[1].innerText+"_corridorVisibility";
    //console.log(orbitoDataID);

    //find this orbitoDataID in toggleOrbitSelected, to check whether to hide this or not(if user selected toggle orbit button)
    var index = toggleOrbitSelected.indexOf(orbitoDataID);
    var indexCorridor = toggleOrbitCorridorSelected.indexOf(corridorDataID);
    //console.log(corridorDataID+" "+indexCorridor); 
    // console.log(index);
    
    if(index == -1){
      var totalFeatures = resultVectorSatelliteOrbito.getSource().getFeatures();
      var totalFeaturesCorridor = resultVectorSatelliteCorridor.getSource().getFeatures();
      //var highlightedFeatureSPOT6;

      //console.log(totalFeatures);

      for (var i = 0; i < totalFeatures.length; i++) {
        if (totalFeatures[i].get('satellite')+"_"+totalFeatures[i].get('orbitNumber')+"_orbitoVisibility" == orbitoDataID) {
          highlightedFeature = totalFeatures[i];
          
          if (!$('#btnToggleAllOrbits').hasClass("toggle-orbit-active")) //to check whether toggle all orbit button is clicked or not 
            totalFeatures[i].set("hidden", "true");
        }       
      }      
    }

     //for corridor
    if(indexCorridor == -1){ console.log("corridor section");  
      var totalFeaturesCorridor = resultVectorSatelliteCorridor.getSource().getFeatures();
      //var highlightedFeatureCorridor;

      //console.log(totalFeaturesCorridor);
    for (var i = 0; i < totalFeaturesCorridor.length; i++) {
      //console.log(corridorDataID);
        if (totalFeaturesCorridor[i].get('satellite')+"_"+totalFeaturesCorridor[i].get('orbitNumber')+"_corridorVisibility" == corridorDataID) {console.log("corridor inner section");
            highlightedFeature = totalFeaturesCorridor[i];
          
          if (!$('#btnToggleAllCorridors').hasClass("toggle-corridor-active")) //to check whether toggle all corridor button is clicked or not 
            totalFeaturesCorridor[i].set("hidden", "true");
        }       
      }
    }

    //start from here
    // if(indexCorridor == -1){
    //   var totalFeaturesCorridor = resultVectorSatelliteCorridor.getSource().getFeatures();
    //   var highlightedFeatureSPOT6corridor;

    //   //console.log(totalFeaturesCorridor);

    //   for (var i = 0; i < totalFeaturesCorridor.length; i++) {
    //     if (totalFeatures[i].get('satellite')+"_"+totalFeatures[i].get('orbitNumber')+"_corridorVisibility" == corridorDataID) {
    //       highlightedFeatureSPOT6corridor = totalFeaturesCorridor[i];
    //       totalFeaturesCorridor[i].set("hidden", "true");
    //     }       
    //   }
    // }
}

function toggleOrbito(val){
  if (!$('#' + val).hasClass("toggle-orbit-active")) {
    $('#' + val).addClass('toggle-orbit-active');
  } else {
      $('#' + val).removeClass('toggle-orbit-active');
  }

  var orbitoDataID = val.toString();
  //console.log(orbitoDataID);
  var totalFeatures = resultVectorSatelliteOrbito.getSource().getFeatures();
  var highlightedFeature;

  for (var i = 0; i < totalFeatures.length; i++) {
    if (totalFeatures[i].get('satellite')+"_"+totalFeatures[i].get('orbitNumber')+"_orbitoVisibility" == orbitoDataID) {
      highlightedFeature = totalFeatures[i];
      totalFeatures[i].set("hidden", "true");
    }
  } 

  if (val.indexOf("orbitoVisibility") !== -1) {
    for (var i = 0; i < totalFeatures.length; i++) {
      if (totalFeatures[i] == highlightedFeature) {
        if ($($("#" + val)).attr('data-click-state') == 1) {
          $($("#" + val)).attr('data-click-state', 0);
          totalFeatures[i].set("hidden", "true");

          //remove this element from array
          toggleOrbitSelected.splice(toggleOrbitSelected.indexOf(orbitoDataID),1);
          //console.log(toggleOrbitSelected);
        } else {
          $($("#" + val)).attr('data-click-state', 1);
          totalFeatures[i].set("hidden", "false");

          //add this element to array
          toggleOrbitSelected.push(orbitoDataID);
          //console.log(toggleOrbitSelected);
        }
      }
    }
  } 
}

function toggleCorridor(val){
  
  var corridorDataID = val.toString();
  var totalFeatures = resultVectorSatelliteOrbito.getSource().getFeatures();
  var totalFeaturesCorridor = resultVectorSatelliteCorridor.getSource().getFeatures();
  
  var corridorDataID = val.toString();
    if (!$('#' + val).hasClass("toggle-corridor-active")) {
    $('#' + val).addClass('toggle-corridor-active');
      //add this element to array
      toggleOrbitCorridorSelected.push(corridorDataID);
      
      //toggleOrbitCorridorSelected.forEach((element) => console.log(element));   

  } else {
      $('#' + val).removeClass('toggle-corridor-active');
          //remove this element from array
          toggleOrbitCorridorSelected.splice(toggleOrbitCorridorSelected.indexOf(corridorDataID),1);
          //console.log(toggleOrbitCorridorSelected);
  }

  //console.log(totalFeaturesCorridor.length); 

  var totalFeaturesCorridor = resultVectorSatelliteCorridor.getSource().getFeatures();//console.log(totalFeaturesCorridor);
  var highlightedFeatureCorridor;
  //console.log(corridorDataID);
  for (var i = 0; i < totalFeaturesCorridor.length; i++) {
    if (totalFeaturesCorridor[i].get('satellite')+"_"+totalFeaturesCorridor[i].get('orbitNumber')+"_corridorVisibility" == corridorDataID) {     

      highlightedFeatureCorridor = totalFeaturesCorridor[i];
      totalFeaturesCorridor[i].set("hidden", "true");
    }
    else{console.log("not found");}
  } 
  
  //console.log(val.indexOf("corridorVisibility"));
  if (val.indexOf("corridorVisibility") !== -1) {
    for (var i = 0; i < totalFeaturesCorridor.length; i++) {
      if (totalFeaturesCorridor[i] == highlightedFeatureCorridor) {
        if ($($("#" + val)).attr('data-click-state') == 1) {
          $($("#" + val)).attr('data-click-state', 0);
          totalFeaturesCorridor[i].set("hidden", "true");

          //remove this element from array
          toggleOrbitCorridorSelected.splice(toggleOrbitCorridorSelected.indexOf(corridorDataID),1);
          //console.log(toggleOrbitCorridorSelected);
        } else {
          $($("#" + val)).attr('data-click-state', 1);
          totalFeaturesCorridor[i].set("hidden", "false");

          //add this element to array
          toggleOrbitCorridorSelected.push(corridorDataID);
          console.log(toggleOrbitCorridorSelected);
        }
      }
    }
  } 

  
  // //get satellite path and generate corridor
  // for (var i = 0; i < totalFeatures.length; i++) {
  //   if (totalFeatures[i].get('satellite')+"_"+totalFeatures[i].get('orbitNumber')+"_orbitoVisibility" == orbitoDataID) {
  //     highlightedFeature = totalFeatures[i];      
      
  //     //for corridor display
  //     ftr=totalFeatures[i];
  //     //totalFeatures[i].set("hidden", "false");
  //   }
  // }  
  
    // //for corridor dislay on mouse enter
    // ftr.set("type", 'simpleline');
    // var pp = (new ol.format.GeoJSON({
    //   defaultDataProjection: 'EPSG:4326',
    //   featureProjection: 'EPSG:3857'
    // })).writeGeometry(ftr.getGeometry());
    // var ppJson = JSON.parse(pp);
    // var line = turf.lineString(ppJson.coordinates[0]);
    // var buffered = turf.buffer(line, 50, {
    //   units: 'kilometers'
    // });
    
    // ftr = (new ol.format.GeoJSON({
    //   defaultDataProjection: 'EPSG:4326',
    //   featureProjection: 'EPSG:3857'
    // })).readFeature(buffered);
    // ftr.set("count", drawCount);

    // var vectorSourceSPOT6corridor = new ol.source.Vector({
    //   features: [ftr]
    // });
    // resultVectorSatelliteCorridor.setSource(vectorSourceSPOT6corridor);
}

function toggleAllOrbits(){
  if (!$('#btnToggleAllOrbits').hasClass("toggle-orbit-active")) {
    $('#btnToggleAllOrbits').addClass('toggle-orbit-active');
    $('.toggleOrbit').addClass('toggle-orbit-active');
  } else {
      $('#btnToggleAllOrbits').removeClass('toggle-orbit-active');
      $('.toggleOrbit').removeClass('toggle-orbit-active');
  }

  var totalFeatures = resultVectorSatelliteOrbito.getSource().getFeatures();

  for (var i = 0; i < totalFeatures.length; i++) {    
      highlightedFeature = totalFeatures[i];
      if($('#btnToggleAllOrbits').hasClass("toggle-orbit-active"))
        totalFeatures[i].set("hidden", "false"); 
      else
        totalFeatures[i].set("hidden", "true"); 
  } 
}

function toggleAllCorridors(){

  if (!$('#btnToggleAllCorridors').hasClass("toggle-corridor-active")) {
    $('#btnToggleAllCorridors').addClass('toggle-corridor-active');
    $('.toggle-corridor').addClass('toggle-corridor-active');
  } else {
      $('#btnToggleAllCorridors').removeClass('toggle-corridor-active');
      $('.toggle-corridor').removeClass('toggle-corridor-active');
  }
  
  var totalFeaturesCorridor = resultVectorSatelliteCorridor.getSource().getFeatures();
  //console.log(totalFeaturesCorridor.length);
  for (var i = 0; i < totalFeaturesCorridor.length; i++) {    
      highlightedFeature = totalFeaturesCorridor[i];
      if($('#btnToggleAllCorridors').hasClass("toggle-corridor-active")){//console.log("ii")
      totalFeaturesCorridor[i].set("hidden", "false"); }
      else
      totalFeaturesCorridor[i].set("hidden", "true"); 
  } 
}
function functionalites(val) {
  if (!$('#' + val).hasClass("selectedIcon")) {
    $('#' + val).addClass('selectedIcon');
  } else {
    if (val.indexOf("cart") == -1)
      $('#' + val).removeClass('selectedIcon');
  }

  var sceneid = val.substring(0, val.lastIndexOf("_"));
  var totalFeatures = resultVector.getSource().getFeatures();
  var highlightedFeature;

  for (var i = 0; i < totalFeatures.length; i++) {
    if (totalFeatures[i].get('data_id') == sceneid) {
      highlightedFeature = totalFeatures[i];
    }
  }
  if (val.indexOf("info") !== -1) {
    if ($("#" + val).attr('data-click-state') == 1) {
      $($("#" + val)).attr('data-click-state', 0);
      $("#informationTable").removeClass().addClass("animated fadeOutLeft");
      $("#informationTable").css("margin-left", "-1000px");
      $("[id*='info']").removeClass('selectedIcon');
    } else {
      console.log(sceneid);
      var url = '';
      if (sceneid.indexOf("PRSS") !== -1)
        url = 'server_scripts/getSceneInformationPRSS.php?sceneid=' + sceneid;
      else if (sceneid.indexOf("SPOT") !== -1)
        url = 'server_scripts/getSceneInformation.php?sceneid=' + sceneid;
      else if (sceneid.indexOf("NEO") !== -1)
        url = 'server_scripts/getSceneInformationPleiadesNeo.php?sceneid=' + sceneid;
      else if (sceneid.indexOf("SV") !== -1) {
        var len = sceneid.split('-').length;
        url = 'server_scripts/getSceneInformationSV.php?sceneid=' + sceneid;
      } else if (sceneid.indexOf("SAR") !== -1) {
        var len = sceneid.split('-').length;
        url = 'server_scripts/getSceneInformationSAR.php?sceneid=' + sceneid;
      } else
        url = 'server_scripts/getSceneInformationPleiades.php?sceneid=' + sceneid;

      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: function(response) {
          if (response) {
            if (response['data_id'].indexOf("PRSS") !== -1) {
              var infoTable = getInfoTable("PRSS", response);
            } else if (response['data_id'].indexOf("SPOT") !== -1) {
              var infoTable = getInfoTable("SPOT", response);
            } else if (response['data_id'].indexOf("NEO") !== -1) {
              var infoTable = getInfoTable("PleiadesNeo", response);
            } else if (response['data_id'].indexOf("SV") !== -1) {
              var infoTable = getInfoTable("SV", response);
            } else if (response['data_id'].indexOf("PHR") !== -1) {
              var infoTable = getInfoTable("Pleiades", response);
            } else if (response['data_id'].indexOf("SAR") !== -1) {
              var infoTable = getInfoTable("SAR", response);
            }
            $("#informationTable").html(infoTable);
          }
        },
        error: function(xhr, ajaxOptions, thrownError) {}
      });
      $("i[id$='_info']").val("_info").attr('data-click-state', 0);
      $($("#" + val)).attr('data-click-state', 1);
      var margin = $('#menu').width() + 50;
      $("#informationTable").css("margin-left", "" + margin + "px");
      $("#informationTable").removeClass().addClass("animated fadeInLeft");
    }
  }
  if (val.indexOf("cart") !== -1) {
    var dataid = highlightedFeature.get("data_id");
    var cost;
    var productAdded;
    if (dataid.indexOf("SPOT6") !== -1 || dataid.indexOf("SPOT7") !== -1) {
      cost = "~5.88 €";
      productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="' + highlightedFeature.get('thumbnail') + '" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + highlightedFeature.get('data_id') + '</a></h3><span class="price">' + cost + '</span><div class="actions"><a href="#0" class="delete-item" id="delete_' + highlightedFeature.get('data_id') + '" onclick="funcDelete(\'' + highlightedFeature.get('data_id') + '\')">Delete</a><div class="quantity"><label for="cd-product-' + highlightedFeature.get('data_id') + '">Qty</label><span class="select"><select id="cd-product-' + highlightedFeature.get('data_id') + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    } else if (dataid.indexOf("SPOT5") !== -1 || dataid.indexOf("SPOT4") !== -1 || dataid.indexOf("SPOT2") !== -1)
      cost = "~25200 PKR";
    else if (dataid.indexOf("PRSS") !== -1) {
      cost = "~2.99 $";
      productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="' + highlightedFeature.get('thumbnail') + '" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + highlightedFeature.get('data_id') + '</a></h3><span class="price">' + cost + '</span><div class="actions"><a href="#0" class="delete-item" id="delete_' + highlightedFeature.get('data_id') + '" onclick="funcDelete(\'' + highlightedFeature.get('data_id') + '\')">Delete</a><div class="quantity"><label for="cd-product-' + highlightedFeature.get('data_id') + '">Qty</label><span class="select"><select id="cd-product-' + highlightedFeature.get('data_id') + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    } else if (dataid.indexOf("PNEO") !== -1) {
      plieadesneoObj[highlightedFeature.get("dataset_name")] = highlightedFeature.get("data_id");
      cost = "~11.90 €";
      productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="' + highlightedFeature.get('thumbnail') + '" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + highlightedFeature.get('dataset_name') + '</a></h3><span class="price">' + cost + '</span><div class="actions"><a href="#0" class="delete-item" id="delete_' + highlightedFeature.get('data_id') + '" onclick="funcDelete(\'' + highlightedFeature.get('dataset_name') + '\')">Delete</a><div class="quantity"><label for="cd-product-' + highlightedFeature.get('data_id') + '">Qty</label><span class="select"><select id="cd-product-' + highlightedFeature.get('data_id') + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    } else if (dataid.indexOf("SV") !== -1) {
      svObj[highlightedFeature.get("data_id")] = highlightedFeature.get("data_id");
      cost = "~2.99 $";
      productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="' + highlightedFeature.get('thumbnail') + '" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + highlightedFeature.get('data_id') + '</a></h3><span class="price">' + cost + '</span><div class="actions"><a href="#0" class="delete-item" id="delete_' + highlightedFeature.get('data_id') + '" onclick="funcDelete(\'' + highlightedFeature.get('data_id') + '\')">Delete</a><div class="quantity"><label for="cd-product-' + highlightedFeature.get('data_id') + '">Qty</label><span class="select"><select id="cd-product-' + highlightedFeature.get('data_id') + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    } else if (dataid.indexOf("SAR") !== -1) {
      sarObj[highlightedFeature.get("data_id")] = highlightedFeature.get("data_id");
      cost = "~2.99 $";
      productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="' + highlightedFeature.get('thumbnail') + '" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + highlightedFeature.get('data_id') + '</a></h3><span class="price">' + cost + '</span><div class="actions"><a href="#0" class="delete-item" id="delete_' + highlightedFeature.get('data_id') + '" onclick="funcDelete(\'' + highlightedFeature.get('data_id') + '\')">Delete</a><div class="quantity"><label for="cd-product-' + highlightedFeature.get('data_id') + '">Qty</label><span class="select"><select id="cd-product-' + highlightedFeature.get('data_id') + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    } else {
      plieadesObj[highlightedFeature.get("dataset_name")] = highlightedFeature.get("data_id");
      cost = "~11.90 €";
      productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="' + highlightedFeature.get('thumbnail') + '" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + highlightedFeature.get('dataset_name') + '</a></h3><span class="price">' + cost + '</span><div class="actions"><a href="#0" class="delete-item" id="delete_' + highlightedFeature.get('data_id') + '" onclick="funcDelete(\'' + highlightedFeature.get('dataset_name') + '\')">Delete</a><div class="quantity"><label for="cd-product-' + highlightedFeature.get('data_id') + '">Qty</label><span class="select"><select id="cd-product-' + highlightedFeature.get('data_id') + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    }
    var cartItems = cartList[0].innerHTML;
    if (cartItems.indexOf(highlightedFeature.get("data_id")) !== -1 || cartItems.indexOf(highlightedFeature.get("dataset_name")) !== -1) {
      removeProduct(val);
      $('#' + val).removeClass('selectedIcon');
    } else {
      cartList.prepend(productAdded);
      updateCartCount(cartIsEmpty);
      cartWrapper.removeClass("empty");
    }
  }
  if (val.indexOf("thumbnail") !== -1) {
    if ($($("#" + val)).attr('data-click-state') == 1) {
      $($("#" + val)).attr('data-click-state', 0);
      try {
        for (var i = 0; i < map.getLayers().getArray().length; i++) {
          if (sceneid == map.getLayers().getArray()[i].getProperties().name)
            map.removeLayer(map.getLayers().getArray()[i]);
        };
      } catch (e) {}
    } else {
      $($("#" + val)).attr('data-click-state', 1);
      layerThumbnail = new ol.layer.Image({
        name: val.substring(0, val.lastIndexOf("_")),
        source: new ol.source.ImageStatic({
          url: highlightedFeature.get('thumbnail'),
          imageExtent: highlightedFeature.getGeometry().getExtent()
        })
      });
      map.addLayer(layerThumbnail);
    }
  }
  if (val.indexOf("visibility") !== -1) {
    for (var i = 0; i < totalFeatures.length; i++) {
      if (totalFeatures[i] == highlightedFeature) {
        if ($($("#" + val)).attr('data-click-state') == 1) {
          $($("#" + val)).attr('data-click-state', 0);
          totalFeatures[i].set("hidden", "true");
        } else {
          $($("#" + val)).attr('data-click-state', 1);
          totalFeatures[i].set("hidden", "false");
        }
      }
    }
  }
  if (val.indexOf("zoom") !== -1) {
    map.getView().fit(highlightedFeature.getGeometry().getExtent(), {
      duration: 2500
    });
    $('#' + val).removeClass('selectedIcon');
  }
}

function closePanes(val) {
  if (val == 'close-infoTable') {
    $("i[id$='_info']").val("_info").attr('data-click-state', 0);
    $("#informationTable").css("margin-left", "-1000px");
    $("#informationTable").removeClass().addClass("animated fadeOutLeft");
    $("[id*='info']").removeClass('selectedIcon');
  } else if (val == 'close-menu') {
    $(".menu").hide();
  }
}

function toggleMenu(val) {
  if ($(".menu").hasClass("ol-visible")) {
    $(".iconArchive").css("color", "white");
    $(".iconFresh").css("color", "white");
  }
  if (val === 'Archive') {
    $("#data_avl").hide();
    $("#no_data").hide();
    if ($("#data").html() === '') {
      $("#no_data").show();
    } else {
      $("#data_avl").show();
    }
    if (!$('.menu').hasClass("ol-visible")) {
      $("#resultsCount").show();
      $("#data_fresh").hide();
      $("#dataOnDemand").hide();
      $("#data").show();
      $(".iconArchive").css("color", "#7cf359");
    } else
      $(".iconArchive").css("color", "white");
    menu.toggle();
  } else if (val === 'Fresh') {
    if (!$('.menu').hasClass("ol-visible")) {
      $("#data_fresh").show();
      $("#dataOnDemand").hide();
      $("#data").hide();
      $(".iconFresh").css("color", "#7cf359");
    } else
      $(".iconFresh").css("color", "white");
    menu.toggle();
  } else if (val === 'onDemand') {
    if (!$('.menu').hasClass("ol-visible")) {
      $("#dataOnDemand").show();
      $("#data_fresh").hide();
      $("#data").hide();
      $(".iconDemand").css("color", "#7cf359");
    } else
      $(".iconDemand").css("color", "white");
    menu.toggle();
  }
}

function showFullImage(sceneVal) {
  if (sceneVal.indexOf("PRSS") !== -1) {
    $('#myModal img').attr('src', sceneVal.replace("THUMB.jpg", "Browse.png"));
  } else
    $('#myModal img').attr('src', sceneVal.replace("QUICKLOOK", "ENHANCED_ALBUM"));
  $('#myModal').on('show.bs.modal', function() {
    $(this).find('.modal-body').css({
      width: 'auto',
      height: 'auto',
      'max-height': '100%'
    });
  });
  $('#myModal').modal('show');
}

/////////////////////---------------------------- CART CODE ---------------------------------/////////////////////

function updateCartCount(emptyCart, quantity) {
  if (typeof quantity === 'undefined') {
    var actual = Number(cartCount.find('li').eq(0).text()) + 1;
    var next = actual + 1;

    if (emptyCart) {
      cartCount.find('li').eq(0).text(actual);
      cartCount.find('li').eq(1).text(next);
    } else {
      cartCount.addClass('update-count');
      setTimeout(function() {
        cartCount.find('li').eq(0).text(actual);
      }, 150);
      setTimeout(function() {
        cartCount.removeClass('update-count');
      }, 200);
      setTimeout(function() {
        cartCount.find('li').eq(1).text(next);
      }, 230);
    }
  } else {
    var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
    var next = actual + 1;

    cartCount.find('li').eq(0).text(actual);
    cartCount.find('li').eq(1).text(next);
  }
}

function updateCartTotal(price, bool) {
  bool ? cartTotal.text((Number(cartTotal.text()) + Number(price)).toFixed(2)) : cartTotal.text((Number(cartTotal.text()) - Number(price)).toFixed(2));
}

function quickUpdateCart() {
  var quantity = 0;
  var price = 0;

  cartList.children('li:not(.deleted)').each(function() {
    var singleQuantity = Number($(this).find('select').val());
    quantity = quantity + singleQuantity;
    price = price + singleQuantity * Number($(this).find('.price').text().replace('$', ''));
  });
  cartTotal.text(price.toFixed(2));
  cartCount.find('li').eq(0).text(quantity);
  cartCount.find('li').eq(1).text(quantity + 1);
}

function activatePointer(draw) {
  if (draw) {
    map.on('pointermove', function(e) {
      map.getTargetElement().style.cursor = 'crosshair';
    });
  } else {
    map.on('pointermove', function(evt) {
      if (evt.dragging) {
        return;
      }
      var pixel = map.getEventPixel(evt.originalEvent);
      var hit = map.forEachLayerAtPixel(pixel, function(layer) {
        var source = layer.getSource();
        if (source instanceof ol.source.TileWMS || source instanceof ol.source.Vector) {
          return layer;
        }
      });
      map.getTargetElement().style.cursor = hit ? 'pointer' : '';
    });
  }
}

function toggleFooter() {
  if ($('.footer').is(":visible")) {
    $('.footer').hide("slow");
    $('#chevron-footer').removeClass().addClass("fas fa-chevron-up");
    $('.ol-scale-line').css("bottom", "0%");
    $('.ol-globe').attr('style', 'margin-bottom: 0% !important');
  } else {
    $('.footer').show("slow");
    $('#chevron-footer').removeClass().addClass("fas fa-chevron-down");
    $('.ol-scale-line').css("bottom", "5%");
    $('.ol-globe').attr('style', 'margin-bottom: 2.9% !important');
  }
}

$(function() {
  var dateToday = new Date();

  
  $("#datepicker3").datepicker({
    autoclose: true,
    todayHighlight: true
  }).datepicker('setDate', new Date(2015, 00, 01));
  $("#datepicker2").datepicker({
    autoclose: true,
    todayHighlight: true
  }).datepicker('update', new Date());
  $("#datepickerFreshStart, #datepickerFreshEnd").datepicker({
    autoclose: true,
    todayHighlight: true,
    minDate: dateToday,
    showButtonPanel: true
  }).datepicker('update', new Date());

  // orbitography section
  $("#datepickerOrbitoStart").datepicker({
    autoclose: true,
    todayHighlight: true,
    minDate: dateToday,
    showButtonPanel: true,
    format:'yyyy-mm-dd'
  }).datepicker('update', new Date());

  $("#datepickerOrbitoEnd").datepicker({
    
    autoclose: true,
    todayHighlight: true,
    minDate: dateToday,
    showButtonPanel: true,
    format:'yyyy-mm-dd'
  }).datepicker('update', new Date());

});

function resetall() {
  try {
    $("#polygons").children().remove();
    $("#divActive").hide();
    if ($('.menu').hasClass("ol-visible"))
      toggleMenu('Archive');
    $(".divControls").hide();
    $("#btnDraw").removeClass('active');
    map.getView().setCenter(center);
  } catch (e) {}
  move(initialExtent, 'reset');
  try {
    map.removeInteraction(draw);
  } catch (e) {}
  try {
    vector.getSource().clear();
  } catch (e) {}
  try {
    resultVector.getSource().clear();
  } catch (e) {}
  $('#toolsArea').hide();
}

function polygonChanged() {
  var totalFeatures = vector.getSource().getFeatures();
  for (var i = 0; i < totalFeatures.length; i++) {
    if (totalFeatures[i].get('count') == $("#polygons").val()) {
      var wkt = format.writeGeometry(totalFeatures[i].getGeometry());
      featureModify = totalFeatures[i];
      featureArch = null;
      featureArch = totalFeatures[i];
      endCoords = totalFeatures[i].getGeometry().getCoordinates();
      highlightedAOI = totalFeatures[i];
      activeAOI = wkt;
      fetchData(wkt, totalFeatures[i]);
    }
  }
  emptyCart();
}

function closeProductModal() {
  $('#productModal').modal('hide');
}

function closeCriteriaModal() {
  $('#criteriaModal').modal('hide');
}

function fetchData(wkt, feature) {
  var coordsLength = highlightedAOI.getGeometry().getCoordinates()[0].length;
  var aoiType = null;
  if (coordsLength != 5) {
    aoiShape = "Polygon";
    addVectorPoints(highlightedAOI, "Polygon");
  } else {
    aoiShape = "Box";
    addVectorPoints(highlightedAOI, "Box");
  }
  var prsscriteria = '';
  var spotcriteria = '';
  var svcriteria = '';
  var spot = 'no',
    prss = 'no';

  prsscriteria += "to_date(cast((to_char(to_date(databasetime, 'DD Mon YYYY'), 'dd mm yy')) as TEXT),'DD-MM-YY') >= '" + $("#startdate").val() + "'::date AND to_date(cast((to_char(to_date(databasetime, 'DD Mon YYYY'), 'dd mm yy')) as TEXT),'DD-MM-YY') < '" + $("#enddate").val() + "'::date";
  var cloudLower = ($("#cloudLower").val() == 0) ? "-1" : $("#cloudLower").val();
  prsscriteria += " and (cloudcoverage>=" + cloudLower + " and cloudcoverage<=" + $("#cloudUpper").val() + ")";

  spotcriteria += "date >= '" + $("#startdate").val() + "'::date AND date < '" + $("#enddate").val() + "'::date";
  spotcriteria += " and (CAST (cloud_notation AS DOUBLE PRECISION)>=" + $("#cloudLower").val() + " and CAST (cloud_notation AS DOUBLE PRECISION)<=" + $("#cloudUpper").val() + ")";

  
  svcriteria += "date >= '" + $("#startdate").val() + "'::date AND date < '" + $("#enddate").val() + "'::date";
  svcriteria += " and (CAST (cloud_notation AS DOUBLE PRECISION)>=" + $("#cloudLower").val() + " and CAST (cloud_notation AS DOUBLE PRECISION)<=" + $("#cloudUpper").val() + ")";

  $("#data").empty();
  if ($('#cbSPOTMain').is(":checked")) {
    spot = 'yes';
  }
  if ($('#cbPRSSMain').is(":checked")) {
    prss = 'yes';
  }
  if ($('#cbPleiadesMain').is(":checked")) {
    pleiades = 'yes';
  }
  if ($('#cbPleiadesNeoMain').is(":checked")) {
    p_neo = 'yes';
  }
  if ($('#cbSVMain').is(":checked")) {
    sv = 'yes';
  }
  var testsource = new ol.source.Vector({
    url: "server_scripts/aza.php?geom=" + wkt + "&prsscriteria=" + prsscriteria + "&spotcriteria=" + spotcriteria + "&svcriteria=" + svcriteria + "&spot=" + spot + "&prss=" + prss + "&pleiades=" + pleiades + "&sv=" + sv + "&p_neo=" + p_neo + "&sar=yes",
    format: new ol.format.GeoJSON()
  });
  resultVector.setSource(testsource);
  testsource.once('change', function(e) {
    if (testsource.getState() === 'ready') {
      $(".divControls").show();
      $(".myProgress").show();
      move(feature.getGeometry().getExtent());
      resultFeatures = testsource.getFeatures();
      resultFeatures.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      if (resultFeatures.length > 0) {
        $("#no_data").hide();
        $("#data_avl").show();
        $('#toolsArea').hide();
        var info;
        var content;
        tableData = "";
        tableData += '<table id="table_id" class="table table-striped table-bordered tablesorter" style="width:100%">';
        tableData += "<thead> <tr><th>Satellite</th>	<th>Date</th>	<th>Res</th> <th>Inc Angle</th>	<th>Cloud</th> <th class='no-sort'><i class='fas fa-info-circle'></i></th> <th class='no-sort'><i class='fas fa-shopping-cart'></i></th>	<th class='no-sort'><i class='fas fa-image'></i></th>	<th class='no-sort'><i class='fas fa-search-location'></i></th>	<th class='no-sort'><i class='fas fa-bullseye'></i></th>	</tr> </thead>";
        tableData += "<tbody id='tablebody'>";

        for (var i = 0; i < resultFeatures.length; i++) {
          var globalIncidence = resultFeatures[i].get("global_incidence");
          if (resultFeatures[i].get('global_incidence') !== "N/A") {
            globalIncidence = parseFloat(globalIncidence).toFixed(1);
          }
          var clouds = 'N/A';
          if (resultFeatures[i].get("cloud_notation"))
            clouds = parseFloat(resultFeatures[i].get("cloud_notation")).toFixed(1);
          tableData += "<tr>" +
            "<td>" + resultFeatures[i].get('platform_name').bold() + "</td>" +
            "<td>" + resultFeatures[i].get("date") + "</td>" +
            "<td>" + resultFeatures[i].get('resolutoin') + "</td>" +
            "<td>" + globalIncidence + "</td>" +
            "<td>" + clouds + "</td>" +
            "<td><i id='" + resultFeatures[i].get("data_id") + "_info' style='color:#71a6cf; margin-left: 5px;' class='fas fa-info-circle' onclick='functionalites(this.id);'></i></td>" +
            "<td><i  data-price='5' id='" + resultFeatures[i].get("data_id") + "_cart' style='color:#000; margin-left: 5px;' class='fas fa-shopping-cart' onclick='functionalites(this.id);'></i></td>" +
            "<td><i id='" + resultFeatures[i].get("data_id") + "_thumbnail' style='margin-left: 5px;' class='fas fa-image' onclick='functionalites(this.id);'></i></td>" +
            "<td><i id='" + resultFeatures[i].get("data_id") + "_visibility' style='color:#c1392b;margin-left: 5px;' class='fas fa-search-location' onclick='functionalites(this.id);'></i></td>" +
            "<td><i id='" + resultFeatures[i].get("data_id") + "_zoom' style='color:#fe0000;margin-left: 5px;' class='fas fa-bullseye' onclick='functionalites(this.id);'></i></td>" +
            "</tr>";
        }
        tableData += "</tbody>";
        tableData += "</table>";
        $("#resultsCount").show();
        $("#data_fresh").hide();
        $("#data").show();
        $("#data").html('');
        $("#data").append(tableData);
        $(".iconArchive").css("color", "#7cf359");
      } else {
        $("#menu h3").text("Total Results: 0");
      }
    }
  });
}

function clipResultsToDrawnFeature() {
  removeAllThumbs();
  var drawnFeatures = vector.getSource().getFeatures();
  var features = resultVector.getSource().getFeatures();
  var currentFeature;
  for (var i = 0; i < drawnFeatures.length; i++) {
    if (drawnFeatures[i].get('count') == $("#polygons").val()) {
      currentFeature = drawnFeatures[i];
    }
  }

  var poly1 = geojsonFormat.writeFeatureObject(currentFeature);
  var extent1 = currentFeature.getGeometry().getExtent();

  try {
    for (var j = 0; j < features.length; j++) {
      if (features[j].get('clip') == "true") {
        var poly2 = geojsonFormat.writeFeatureObject(features[j]);
        try {
          var intersection = turf.intersect(poly1, poly2);
        } catch (e) {}
        if (intersection) {
          var feature = features[j].get('data_id');
          for (var i = 0, len = sensors.length; i < len; ++i) {
            populateAreaArr(feature, intersection, sensors[i]);
          }
          intersection.properties = {
            "data_id": features[j].get('data_id'),
            "clipped": "true",
            "area": turf.convertArea(turf.area(intersection), "meters", "kilometers"),
            "sceneOrder": features[j].get('sceneOrder')
          };
          vectorClipped.getSource().addFeature(geojsonFormat.readFeature(intersection));
        }
      }
    }
  } catch (e) {}
  var total_scenes = 0;
  for (var i = 0; i < sensors.length; i++) {
    var sensor = sensors[i];
    var divSensor = sensors[i].toLowerCase();
    $("#" + divSensor + "area").text(sensor_area[sensor] + " km" + '\u00B2' + " approx.");
    $("#" + divSensor + "scenesCount").text(sensor_scenes[sensor]);
    total_scenes = total_scenes + parseInt(sensor_scenes[sensor]);
    if (sensor == "PRSS" || sensor == "PleiadesNeo") {
      sensor_amount[sensor] = sensor_area[sensor] * 3;
      $("#" + divSensor + "amount").text(sensor_amount[sensor] + ' $' + " approx.");
    } else {
      sensor_amount[sensor] = sensor_area[sensor] * 3;
      $("#" + divSensor + "amount").text(sensor_amount[sensor] + ' €' + " approx.");
    }
  }
  $("#grandTotal").text("Total Number of Scenes:        " + (total_scenes));
}

function processOrder(type) {
  vectorPoints.setVisible(true);
  var currentdate = new Date();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $(document).ready(function() {

    $(".selectpicker").selectpicker({
      noneSelectedText : 'Satellites' // by this default 'Nothing selected' -->will change to Satellites
  });
    $('#orderdate').text(currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear());
    $('#freshorderdate').text(currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear());
    $('#ordertime').text(currentdate.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }));
    $('#freshordertime').text(currentdate.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }));
  });

  $("#divSearch").hide();
  $("#divFilter").hide();
  $("#divDrawing").hide();
  $("#divActive").hide();

  try {
    var totalFeatures = resultVector.getSource().getFeatures();
  } catch (e) {}
  try {
    var length = totalFeatures.length;
  } catch (e) {}
  var prssCount = 1;
  var svCount = 1;
  var pleiadesCount = 1;
  var pleiadesneoCount = 1;
  var svCount = 1;
  var spotCount = 1;
  scenes = '';
  if (length > 0) {
    $("li.product").each(function(index, element) {
      for (var i = 0; i < totalFeatures.length; i++) {
        var prodTxt = $(this).text().substr(0, $(this).text().indexOf('~'));
        if (totalFeatures[i].get('dataset_name') == prodTxt && (totalFeatures[i].get('data_id') == plieadesObj[totalFeatures[i].get('dataset_name')] || totalFeatures[i].get('data_id') == plieadesneoObj[totalFeatures[i].get('dataset_name')])) {
          if (totalFeatures[i].get("data_id").indexOf("PNEO") !== -1) {
            $("#ulpleiadesneoscenes").append("<tr><td>PNEO-" + pleiadesneoCount + "</td><td>" + prodTxt + "</td></tr>");
            populateScenesVar(prodTxt);
            totalFeatures[i].set("sceneOrder", "PNEO-" + pleiadesneoCount);
            pleiadesneoCount++;
          } else if (totalFeatures[i].get("data_id").indexOf("_PHR") !== -1) {
            $("#ulpleiadesscenes").append("<tr><td>PHR-" + pleiadesCount + "</td><td>" + prodTxt + "</td></tr>");
            populateScenesVar(prodTxt);
            totalFeatures[i].set("sceneOrder", "PHR-" + pleiadesCount);
            pleiadesCount++;
          }
          totalFeatures[i].set("clip", "true");
        } else if (totalFeatures[i].get('data_id') == prodTxt) {
          if (totalFeatures[i].get("data_id").indexOf("SPOT") !== -1) {
            $("#ulspotscenes").append("<tr><td>S-" + spotCount + "</td><td>" + prodTxt + "</td></tr>");
            populateScenesVar(prodTxt);
            totalFeatures[i].set("sceneOrder", "S-" + spotCount);
            spotCount++;
          }
          if (totalFeatures[i].get("data_id").indexOf("PRSS") !== -1) {
            $("#ulprssscenes").append("<tr><td>P-" + prssCount + "</td><td>" + prodTxt + "</td></tr>");
            populateScenesVar(prodTxt);
            totalFeatures[i].set("sceneOrder", "P-" + prssCount);
            prssCount++;
          }
          if (totalFeatures[i].get("data_id").indexOf("SV") !== -1) {
            if ($("#ulsvscenes").html() === '') {
              $("#ulsvscenes").append("<tr><td>SV-" + svCount + "</td><td>" + prodTxt + "</td></tr>");
              populateScenesVar(prodTxt);
              totalFeatures[i].set("sceneOrder", "SV-" + svCount);
              svCount = svCount + 1;
            } else if ($("#ulsvscenes").html() !== '' && !$("#ulsvscenes").html().includes(prodTxt)) {
              $("#ulsvscenes").append("<tr><td>SV-" + svCount + "</td><td>" + prodTxt + "</td></tr>");
              populateScenesVar(prodTxt);
              totalFeatures[i].set("sceneOrder", "SV-" + svCount);
              svCount = svCount + 1;
            }
          }
          totalFeatures[i].set("clip", "true");
          //superview has to be implemented here
        }
      }
    });
    clipResultsToDrawnFeature();
  }
}

var pdf, page_section, HTML_Width, HTML_Height, top_left_margin, PDF_Width, PDF_Height, canvas_image_width, canvas_image_height;

function calculatePDF_height_width(selector, index) {
  page_section = $(selector).eq(index);
  HTML_Width = page_section.width();
  HTML_Height = page_section.height();
  top_left_margin = 15;
  PDF_Width = HTML_Width + (top_left_margin * 2);
  PDF_Height = (PDF_Width * 1.2) + (top_left_margin * 2);
  canvas_image_width = HTML_Width;
  canvas_image_height = HTML_Height;
}

function FreshOrder() {
  var pneo_cloudFlag=false;
  uploadPDFflag = 1;
  if ($("#satSelect").val() === 'SV' || $("#satSelect").val() === 'PleiadesNeo') {
    var area = parseFloat(areaDrawn.toString().replace(" km", ""));
    var mode = $("#satAcqModes").val();
    var priority = $("#satImgPriority").val();
    var sensor = $("#satSelect").val();
    var cloud_value=$("#freshCloudUpper").val();
    if (parseInt(cloud_value) < 5){
      pneo_cloudFlag=true;
    }
    if (mode === "Mono" && priority === "standard") {
      ordered_area = areaDrawn;
      getCurrentQuota().then(function(data) {
        var current_quota = JSON.parse(data)[0];
        var qVal = '';
        if ($("#satSelect").val() === 'SV') {
          $("#sv_quotaValue").html(parseFloat(current_quota.sv_quota).toFixed(2));
          qVal = parseFloat(current_quota.sv_quota);
        } else if ($("#satSelect").val() === 'PleiadesNeo') {
          $("#neo_quotaValue").html(parseFloat(current_quota.neo_quota).toFixed(2));
          qVal = parseFloat(current_quota.neo_quota);
        }
       var cloud_msg=""
        if (pneo_cloudFlag && sensor === 'PleiadesNeo'){
          var surcharge_area=area + (area*0.25);
          cloud_msg="<code> 25% additional quota will be charged for Cloud Cover < 5% </code></br>"+"Deducted Area=>"+area+"+"+(area*0.25)+"="+surcharge_area.toFixed(2)+"km<sup>2</sup>";  
          area=surcharge_area;
          ordered_area=surcharge_area;
        }
        var rem = (qVal - area).toFixed(2);
        var msg = 'Remaining allocated Quota after this order will be: ' + rem.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' km<sup>2</sup>'+'</br>'+cloud_msg+'</br> Do you want to place the order?';
        $(".disablingDiv").hide();
        $(".remQuota").html(msg);
        $("#id01").show();
      }).catch(function(err) {
        console.log(err);
      });

    } else {
      $(".disablingDiv").show();
      $.ajax({
      type: 'POST',
      url: 'server_scripts/getPriorityFactor.php',
      data: {
        'mode': mode,
        'priority': priority,
        'sensor': sensor
      }
    }).done(function(data) {
      factor = parseFloat(data);
      if(factor > 1) {
        ordered_area = areaDrawn * factor;
        getCurrentQuota().then(function(data) {
          var current_quota = JSON.parse(data)[0];
          var qVal = '';
          if ($("#satSelect").val() === 'SV') {
            $("#sv_quotaValue").html(parseFloat(current_quota.sv_quota).toFixed(2));
            qVal = parseFloat(current_quota.sv_quota);
          } else if ($("#satSelect").val() === 'PleiadesNeo') {
            $("#neo_quotaValue").html(parseFloat(current_quota.neo_quota).toFixed(2));
            qVal = parseFloat(current_quota.neo_quota);
          }
          var rem = (qVal - (area * factor)).toFixed(2);
          if (rem > 0) {
            $("#placeFreshOrder").prop('disabled', false);
            $("#showPDF").prop('disabled', false);
            var msg = 'Remaining allocated Quota after this order will be: ' + rem.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' km<sup>2</sup> </br>';
            // if(pneo_cloudFlag){
            //   msg+= "<code>25% additional quota will be charged for Cloud Cover < 5% </code> </br>";
            //   msg+= "Ordered Area => Area Drawn + "+(area*0.25)+"km<sup>2</sup> </br>";
            // }
            msg += '<code>Priority Mode Factor = Ordered Area x '+ factor +' </code> => Deducted Area = ' + (area * factor).toFixed(2) + 'km<sup>2</sup>. </br> Do you want to place the order?';
            $(".disablingDiv").hide();
            $(".remQuota").html(msg);
            $("#id01").show();
          } else {
            $("#placeFreshOrder").prop('disabled', true);
            $("#showPDF").prop('disabled', true);
          }

        }).catch(function(err) {
          console.log(err);
        });
      //   var qVal = '';
      //   if ($("#satSelect").val() === 'SV') {
      //     qVal = parseFloat($("#sv_quotaValue").text().replace(' km2', '').replace(',', ''));
      //   } else if ($("#satSelect").val() === 'PleiadesNeo') {
      //     qVal = parseFloat($("#neo_quotaValue").text().replace(' km2', '').replace(',', ''));
      //   }
      //   var rem = (qVal - (area * factor)).toFixed(2);
      //   var msg = 'Remaining allocated Quota after this order will be: ' + rem.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' km<sup>2</sup> </br>';
      //   msg += '<code>Priority Mode Factor = Ordered Area x '+ factor +' </code> => Deducted Area = ' + (area * factor) + 'km<sup>2</sup>. </br> Do you want to place the order?';
      //   $(".disablingDiv").hide();
      //   $(".remQuota").html(msg);
      //   $("#id01").show();
      } else {
        ordered_area = areaDrawn;
      }
    });
  }

  } else {
    initiateFreshOrder();
  }
}

//upcomiong attempts section
function displayUpcomingAttempts(freshAngleUpperValue){
  var satellite=$('#satSelect').val();
  var startDate=$('#freshStartDate').val().split('/')[2]+'-'+$('#freshStartDate').val().split('/')[1]+'-'+$('#freshStartDate').val().split('/')[0]; //changing date format from 02/04/2024' to 2024-04-02'
  var endDate=$('#freshEndDate').val().split('/')[2]+'-'+$('#freshEndDate').val().split('/')[1]+'-'+$('#freshEndDate').val().split('/')[0]; //changing date format from 02/04/2024' to 2024-04-02'
  rollAngle=freshAngleUpperValue;

  // console.log(satellite);
  // console.log(startDate);
  // console.log(endDate);
  // console.log(rollAngle);
  
  var spot6='';
  var pleiades='';
  var pneo='';
  var prss='';
  var taijing='';
  var sv='';
  

  var orbitoCriteria='';
//console.log(satellite);
  if(satellite.includes('SPOT'))
    spot6='yes';
  
  if(satellite=='Pleiades')
    pleiades='yes';

  if(satellite=='PleiadesNeo')
    pneo='yes';

  if(satellite=='PRSS')
    prss='yes';

  if(satellite.includes('SAR'))
    taijing='yes';

  if(satellite=='SV')
    sv='yes';
  
 //get activated polygon AOI
 var totalFeatures = vector.getSource().getFeatures();
 for (var i = 0; i < totalFeatures.length; i++) {
   if (totalFeatures[i].get('count') == $("#polygons").val()) {
     var wkt = format.writeGeometry(totalFeatures[i].getGeometry());
     }
 }
 // console.log(wkt);

  //get roll angle
  var rollAngle=document.getElementById('freshAngleUpper').value;
  

  var testsourceOrbito = new ol.source.Vector({   
    url: "server_scripts/azo.php?geom="+wkt+"&searchByAOI=true&rollAngle="+rollAngle+"&startDate="+startDate+"&endDate="+endDate+ "&spot=" + spot6 + "&prss=" + prss + "&pleiades=" + pleiades + "&sv=" + sv +"&pneo=" + pneo + "&taijing="+taijing,
    format: new ol.format.GeoJSON(),       
});

//console.log(satellite);
resultVectorSatelliteOrbito.setSource(testsourceOrbito);
  testsourceOrbito.once('change', function(e) {
      if (testsourceOrbito.getState() === 'ready') {
          //move(feature.getGeometry().getExtent());
         resultFeatures = testsourceOrbito.getFeatures(); 
         //console.log(resultFeatures.length);        

        
         if (resultFeatures.length > 0) { 
          var info;
          var content;
          tableData = "";
          tableData += '<div class="orbito-results-header" style="width:90%;margin:0 auto;margin-bottom:1rem"><div class="orbito-results-header-left"><div class="orbito-nb-items" style="font-size:1.3rem">'+resultFeatures.length+' items</div></div><div class="orbito-results-header-right" style="margin-right:3rem"><div class="orbito-export"><!--<button class="export-button" name="export" type="button" value="export" title="Launch export"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M22.491 13.166h-3.84v-6.583h-5.029v6.583h-3.749l6.309 6.309z"></path><path d="M28.709 18.834v0c-1.097 0-2.011 0.914-2.011 2.011v3.749h-21.303v-3.474c0-1.097-0.914-2.011-2.011-2.011s-2.011 0.914-2.011 2.011v7.589h29.44v-7.771c0-1.189-0.914-2.103-2.103-2.103z"></path></g></svg></button>--></div><div class="orbito-all-orbits"><button id="btnToggleAllOrbits" class="toggle-orbit" title="Toggle all orbits" onclick="toggleAllOrbits();"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M19.9,6.5c-2.7,0-5.4,1-7.3,2.7C12.3,9.1,11.9,9,11.4,9c-2,0-3.6,1.6-3.6,3.6c0,0.9,0.4,1.8,1,2.6 c-0.3,1.1-0.5,2.1-0.5,3c0,6.3,5.1,11.5,11.5,11.5s11.6-5.1,11.6-11.5S26.3,6.5,19.9,6.5z M19.9,27c-5,0-9.1-4-9.1-9 c0-0.5,0.1-1.1,0.2-1.6c0-0.2,0-0.3,0.1-0.5c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c5,0,9.1,4.1,9.1,9.1C29,23.1,24.9,27,19.9,27z"></path><path d="M3.7,11.8c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c1.1,0,2.1,0.2,3,0.5h0.1h0.1c1.1-0.2,2.3-0.4,3.3-0.4h0.7l-0.7-0.4c-1.9-1.4-4.2-2.1-6.7-2.1c-2.7,0-5.4,0.9-7.3,2.7 C4.8,4.9,4.4,4.9,4,4.9C2,4.9,0.5,6.4,0.5,8.3c0,0.9,0.4,1.8,1,2.6c-0.3,1-0.5,2-0.5,3c0,4.1,2.1,7.8,5.7,9.9l0.5,0.3l-0.2-1 c-0.2-0.7-0.3-1.5-0.4-2.1v-0.1l-0.1-0.1c-2-1.7-3.1-4.3-3.1-6.9c0-0.5,0.1-1.1,0.2-1.6C3.6,12.1,3.7,11.9,3.7,11.8z"></path></g></svg></button></div><div class="orbito-all-corridors"><button id="btnToggleAllCorridors" class="toggle-orbit" title="Toggle all corridors" onclick="toggleAllCorridors();"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M22.2,0.7c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3c0.7,0,1.4-0.4,1.7-1 l15.8-26C23.5,2.6,23.2,1.3,22.2,0.7z"></path><path d="M28.5,3.8L28.5,3.8c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3 c0.7,0,1.4-0.4,1.7-1l15.8-26C29.8,5.6,29.5,4.4,28.5,3.8z"></path><path d="M4,17.2c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,9,9,8.2,8.6,7.5 c1.3-1.1,2.9-1.9,4.6-2.3L15,2.3c-3.1,0.3-6,1.6-8.3,3.5C6.2,5.5,5.5,5.3,4.9,5.3c-2.4,0-4.4,2-4.4,4.4C0.5,11,1,12.2,2,13 c-0.4,1.4-0.6,2.7-0.6,4.2c0,2,0.4,3.8,1.1,5.6l1.8-3C4.1,19,4,18.1,4,17.2z"></path><path d="M30.4,11.5l-1.8,3c0.2,0.9,0.3,1.9,0.3,2.9c0,5.7-4,10.6-9.3,12l-1.7,2.8c7.6-0.7,13.6-7.1,13.6-14.9 C31.5,15.2,31.1,13.2,30.4,11.5z"></path></g></svg></button></div></div></div>';
          tableData += '<table id="table_id" class="table table-striped table-bordered tablesorter" style="width:90%;margin:0 auto">';
          tableData += "<thead> <tr><th style='font-weight: bold;font-size: 1.5rem'>Satellite</th><th style='font-weight: bold;font-size: 1.5rem'>Orbit</th><th style='font-weight: bold;font-size: 1.5rem'>Date</th><th></th></tr> </thead>";
          tableData += "<tbody id='tablebody'>"; 
          
          for (var i = 0; i < resultFeatures.length; i++) {
            if((resultFeatures[i].get('satellite')=='SPOT6'))
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(243, 110, 44); background-color: rgba(243, 110, 44, 0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
            if((resultFeatures[i].get('satellite')=='Pleiades-1A') || (resultFeatures[i].get('satellite')=='Pleiades-1B'))
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(220, 12, 203); background-color: rgba(220, 12, 203, 0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
            if((resultFeatures[i].get('satellite')=='PNEO3') || (resultFeatures[i].get('satellite')=='PNEO4'))
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(106, 49, 220); background-color: rgb(106, 49, 220,0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
            if((resultFeatures[i].get('satellite')=='PRSS'))
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(1, 50, 32); background-color: rgba(1, 50, 32, 0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
            if((resultFeatures[i].get('satellite')=='Taijing')) //Black
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
            if((resultFeatures[i].get('satellite')=='SuperView')) //Steel Blue
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(70, 130, 180); background-color: rgba(70, 130, 180, 0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
          tableData += "<tr class='orbitoRowData' onmousemove='showOrbitPath(this)' onmouseleave='hideOrbitPath(this)'>" +
          $satelliteNameTD +
            "<td style='color:#000 !important'>"+ resultFeatures[i].get("orbitNumber").bold() +"</td>" +
            "<td style='color:#000 !important'><strong>"+resultFeatures[i].get("date")+"</strong></td>" +            
            "<td><button id='"+resultFeatures[i].get("satellite")+'_'+resultFeatures[i].get("orbitNumber")+"_orbitoVisibility' class='toggle-orbit toggleOrbit' title='Toggle orbit' onclick='toggleOrbito(this.id);'><svg viewBox='0 0 32 32' class='pictos cz-color-3684147' style='width: 1.9rem; height: 1.9rem;'><path d='M16.5,1c-3.7,0-7.1,1.4-9.8,3.6C6.2,4.3,5.5,4.1,4.9,4.1c-2.4,0-4.4,2-4.4,4.4C0.5,9.8,1,11,2,11.8 c-0.4,1.4-0.6,2.7-0.6,4.2c0,8.3,6.7,15,15,15s15.1-6.7,15.1-15S24.8,1,16.5,1z M16.5,28.5C9.6,28.5,4,22.9,4,16 c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,7.8,9,7,8.6,6.3c2.1-1.7,4.8-2.7,7.8-2.7 c6.8,0,12.5,5.6,12.5,12.5C28.9,22.8,23.3,28.5,16.5,28.5z' class='cz-color-3684147'></path></svg></button><button id='"+resultFeatures[i].get("satellite")+'_'+resultFeatures[i].get("orbitNumber")+"_corridorVisibility' class='toggle-corridor' title='Toggle corridor' onclick='toggleCorridor(this.id);'><svg viewBox='0 0 32 32' class='pictos cz-color-3684147' style='width: 1.9rem; height: 1.9rem;'><g class='cz-color-3684147'><path d='M22.2,0.7c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3c0.7,0,1.4-0.4,1.7-1 l15.8-26C23.5,2.6,23.2,1.3,22.2,0.7z' class='cz-color-3684147'></path><path d='M28.5,3.8L28.5,3.8c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3 c0.7,0,1.4-0.4,1.7-1l15.8-26C29.8,5.6,29.5,4.4,28.5,3.8z' class='cz-color-3684147'></path><path d='M4,17.2c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,9,9,8.2,8.6,7.5 c1.3-1.1,2.9-1.9,4.6-2.3L15,2.3c-3.1,0.3-6,1.6-8.3,3.5C6.2,5.5,5.5,5.3,4.9,5.3c-2.4,0-4.4,2-4.4,4.4C0.5,11,1,12.2,2,13 c-0.4,1.4-0.6,2.7-0.6,4.2c0,2,0.4,3.8,1.1,5.6l1.8-3C4.1,19,4,18.1,4,17.2z' class='cz-color-3684147'></path><path d='M30.4,11.5l-1.8,3c0.2,0.9,0.3,1.9,0.3,2.9c0,5.7-4,10.6-9.3,12l-1.7,2.8c7.6-0.7,13.6-7.1,13.6-14.9 C31.5,15.2,31.1,13.2,30.4,11.5z' class='cz-color-3684147'></path></g></svg></button></td>"
            "</tr>";
          }
          tableData += "</tbody>";
          tableData += "</table>";
          
          $("#dataOrbitoUpcoming").show();
          $("#dataOrbitoUpcoming").html('');
          $("#dataOrbitoUpcoming").append(tableData);
        }
        else {console.log('no data');
        $("#dataOrbitoUpcoming").hide();
          // var info;
          // var content;
          // tableData = "";
          // tableData += '<table id="table_id" class="table table-striped table-bordered tablesorter" style="width:90%;margin:0 auto">';
          // tableData += "<thead> <tr><th style='font-weight: bold;font-size: 1.5rem'>Satellite</th><th style='font-weight: bold;font-size: 1.5rem'>Orbit</th><th style='font-weight: bold;font-size: 1.5rem'>Date</th><th><button id='btnToggleAllOrbits' class='toggle-orbit' title='Toggle all orbits' onclick='toggleAllOrbits();'><svg viewBox='0 0 32 32' class='pictos' style='width: 1.9rem; height: 1.9rem;'><g><path d='M19.9,6.5c-2.7,0-5.4,1-7.3,2.7C12.3,9.1,11.9,9,11.4,9c-2,0-3.6,1.6-3.6,3.6c0,0.9,0.4,1.8,1,2.6 c-0.3,1.1-0.5,2.1-0.5,3c0,6.3,5.1,11.5,11.5,11.5s11.6-5.1,11.6-11.5S26.3,6.5,19.9,6.5z M19.9,27c-5,0-9.1-4-9.1-9 c0-0.5,0.1-1.1,0.2-1.6c0-0.2,0-0.3,0.1-0.5c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c5,0,9.1,4.1,9.1,9.1C29,23.1,24.9,27,19.9,27z'></path><path d='M3.7,11.8c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c1.1,0,2.1,0.2,3,0.5h0.1h0.1c1.1-0.2,2.3-0.4,3.3-0.4h0.7l-0.7-0.4c-1.9-1.4-4.2-2.1-6.7-2.1c-2.7,0-5.4,0.9-7.3,2.7 C4.8,4.9,4.4,4.9,4,4.9C2,4.9,0.5,6.4,0.5,8.3c0,0.9,0.4,1.8,1,2.6c-0.3,1-0.5,2-0.5,3c0,4.1,2.1,7.8,5.7,9.9l0.5,0.3l-0.2-1 c-0.2-0.7-0.3-1.5-0.4-2.1v-0.1l-0.1-0.1c-2-1.7-3.1-4.3-3.1-6.9c0-0.5,0.1-1.1,0.2-1.6C3.6,12.1,3.7,11.9,3.7,11.8z'></path></g></svg></button><button id='btnToggleAllCorridors' class='toggle-orbit' title='Toggle all corridors' onclick='toggleAllCorridors();'><svg viewBox='0 0 32 32' class='pictos' style='width: 1.9rem; height: 1.9rem;'><g><path d='M22.2,0.7c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3c0.7,0,1.4-0.4,1.7-1 l15.8-26C23.5,2.6,23.2,1.3,22.2,0.7z'></path><path d='M28.5,3.8L28.5,3.8c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3 c0.7,0,1.4-0.4,1.7-1l15.8-26C29.8,5.6,29.5,4.4,28.5,3.8z'></path><path d='M4,17.2c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,9,9,8.2,8.6,7.5 c1.3-1.1,2.9-1.9,4.6-2.3L15,2.3c-3.1,0.3-6,1.6-8.3,3.5C6.2,5.5,5.5,5.3,4.9,5.3c-2.4,0-4.4,2-4.4,4.4C0.5,11,1,12.2,2,13 c-0.4,1.4-0.6,2.7-0.6,4.2c0,2,0.4,3.8,1.1,5.6l1.8-3C4.1,19,4,18.1,4,17.2z'></path><path d='M30.4,11.5l-1.8,3c0.2,0.9,0.3,1.9,0.3,2.9c0,5.7-4,10.6-9.3,12l-1.7,2.8c7.6-0.7,13.6-7.1,13.6-14.9 C31.5,15.2,31.1,13.2,30.4,11.5z'></path></g></svg></button></th></tr> </thead>";
          // tableData += "<tbody id='tablebody'>"; 
          // trableData += "<td colspan='4'><span class='satellite-name' style='color: rgb(243, 110, 44); background-color: rgba(243, 110, 44, 0.1);'>No data found</span></td>";         
         
          // tableData += "</tbody>";
          // tableData += "</table>";
          
          // $("#dataOrbitoUpcoming").show();
          // $("#dataOrbitoUpcoming").html('');
          // $("#dataOrbitoUpcoming").append(tableData);
        }        
      }
    });

}

// fetch(url)
//       .then(response => response.ok ? response.json() : Promise.reject({ err: response.statusText }))
//       .then(data => {
//
//       })
//       .catch(error => {
//         console.log(error.err);
//         toastr.error(id + ' ' + error.err);
//         tbl_ordnance += '</table>';
//         $("#nav-ordnance").html(tbl_ordnance);
//     });
// async function checkFactor() {
//   var mode = $("#satAcqModes").val();
//   var priority = $("#satImgPriority").val();
//   var sensor = $("#satSelect").val();
//   var factor = 0;
//   if (mode === "Mono" && priority === "standard") {
//     return 1;
//   } else {
//     var params = {
//       'mode': mode,
//       'priority': priority,
//       'sensor': sensor
//     };
//     $.ajax({
//       type: 'POST',
//       url: 'server_scripts/getPriorityFactor.php',
//       data: {
//         'mode': mode,
//         'priority': priority,
//         'sensor': sensor
//       }
//     }).done(function(data) {
//       console.log(data);
//       factor = parseFloat(data);
//       console.log(factor);
//       return factor;
//     });
//   }
//
// }

function initiateFreshOrder() {
  $("#id01").hide();
  $(".disablingDiv").show();
  var area = 0;
  console.log(factor);
  if (factor) {
    area = parseFloat(areaDrawn.replace(" km", "")) * factor;
  } else {

    area = parseFloat(areaDrawn.replace(" km", ""));
  }
  var qVal = '';
  var currentdate = new Date();
  var date = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear();
  order = generateOrderID();
  var product = '';
  if ($("#satSelect").val() == 'PRSS')
    product = $("#satPRSS").val();
  else if ($("#satSelect").val() == 'SPOT')
    product = $("#satSPOT").val();
  else if ($("#satSelect").val() == 'SAR')
    product = $("#satSAR").val();
  else if ($("#satSelect").val() == 'SPOT542')
    product = $("#satSPOT542").val();
  else if ($("#satSelect").val() == 'PleiadesNeo') {
    // if($("#freshCloudUpper").val() <5){
    //   area=area+(area*0.25);
    // }
    product = $("#satPleiadesNeo").val();
    qVal = parseFloat($("#neo_quotaValue").text().replace(' km2', '').replace(',', ''))
  } else if ($("#satSelect").val() == 'SV') {
    product = $("#satSV").val();
    qVal = parseFloat($("#sv_quotaValue").text().replace(' km2', '').replace(',', ''))
  }

  var rem = (qVal - area).toFixed(2);
  // $.ajax({ //fresh
    // type: "GET",
    // url: "server_scripts/checkIntersection.php?aoi=" + activeAOI,
    // success: function(data) {
      var payload = "date=" + date +
        "&time=" + document.getElementById('ordertime').innerHTML +
        "&id=" + orderid +
        "&userid=" + document.getElementById('userid').innerHTML +
        "&start_date=" + $('#freshStartDate').val() +
        "&end_date=" + $('#freshEndDate').val();
      if ($("#satSelect").val() === 'SAR') {
        payload += "&inc_angle=" + $('#freshAngleLower2').val() + " - " + $('#freshAngleUpper2').val() +
          "&cloud_cover=0-0" +
          "&antenna_pointing=" + $('#antennaSAR').val() +
          "&acq_pass=" + $('#passSAR').val() +
          "&prod_level=" + $('#prodLevelSAR').val();
      } else if ($("#satSelect").val() === 'SV' || $("#satSelect").val() === 'PleiadesNeo') {
        payload += "&inc_angle=" + $('#freshAngleLower').val() + " - " + $('#freshAngleUpper').val() +
          "&cloud_cover=" + $('#freshCloudLower').val() + " - " + $('#freshCloudUpper').val() +
          "&antenna_pointing=null&acq_pass=null&prod_level=null" +
          "&acq_mode=" + $('#satAcqModes').val() + "&order_priority=" + $( "#satImgPriority option:selected" ).text();
      } else {
        payload += "&inc_angle=" + $('#freshAngleLower').val() + " - " + $('#freshAngleUpper').val() +
          "&cloud_cover=" + $('#freshCloudLower').val() + " - " + $('#freshCloudUpper').val() +
          "&antenna_pointing=null&acq_pass=null&prod_level=null";
      }
      payload += "&satellite=" + $('#satSelect').val() +
        "&product=" + product +
        "&type=fresh&aoi=" + activeAOI +
        "&quota=" + rem +
        "&ordered_area=" + area;
      insertOrderDetailsFunc(payload, "fresh", rem);
    // }
  // });
}

// function onDemandOrder() {
//   var currentdate = new Date();
//   var date = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear();
//   order = generateOrderID();
//   FreshPDF(orderid);
// }

// function FreshPDF(orderid) {
//   // console.log('FreshPDF');
//   uploadPDFflag = 1;
//   $(".disablingDiv").show();
//   // var prssarea, spotarea, pleiadesarea, pleiadesneoarea, svarea = 0;
//   var array = [];
//   var sat = $("#satSelect").val();
//   array.push(sat + "_" + $("#sat" + sat).val());
//   var jsonString = JSON.stringify(array);
//   var totalFeatures = vector.getSource().getFeatures();
//   for (var i = 0; i < totalFeatures.length; i++) {
//     if (totalFeatures[i].get('count') == $("#polygons").val()) {
//       for (var j = 0; j < sensors.length; j++) {
//         if (sat === sensors[j]) {
//           if (sat === "PleiadesNeo" || sat === "SV") {
//             if (factor > 0) {
//               sensor_area[sensors[j]] = formatArea(totalFeatures[i].getGeometry()).replace(' km', '') * factor;
//             } else {           
//               sensor_area[sensors[j]] = formatArea(totalFeatures[i].getGeometry()).replace(' km', '');
//             }
//           } else {
//             sensor_area[sensors[j]] = formatArea(totalFeatures[i].getGeometry()).replace(' km', '');
//           }
//         }
//       }
//     }
//   }

  function FreshPDF(orderid) {
    // console.log('FreshPDF');
    uploadPDFflag = 1;
    $(".disablingDiv").show();
    // var prssarea, spotarea, pleiadesarea, pleiadesneoarea, svarea = 0;
    var array = [];
    var sat = $("#satSelect").val();
    array.push(sat + "_" + $("#sat" + sat).val());
    var jsonString = JSON.stringify(array);
    var totalFeatures = vector.getSource().getFeatures();
    for (var i = 0; i < totalFeatures.length; i++) {
      if (totalFeatures[i].get('count') == $("#polygons").val()) {
        for (var j = 0; j < sensors.length; j++) {
          if (sat === sensors[j]) {
            if (sat === "PleiadesNeo" || sat === "SV") {
              if (factor > 0) {
                sensor_area[sensors[j]] = formatArea(totalFeatures[i].getGeometry()).replace(' km', '') * factor;
              } else {
                if(sat === "PleiadesNeo" && $("#freshCloudUpper").val() < 5){

                  
                  var s_area=parseInt(formatArea(totalFeatures[i].getGeometry()).replace(' km', ''));
                  s_area=s_area+(s_area*0.25);
                  
                  sensor_area[sensors[j]]=s_area;                 
                }else{
                  
                  sensor_area[sensors[j]] = formatArea(totalFeatures[i].getGeometry()).replace(' km', '');
                  
                }
              }
            } else {
              sensor_area[sensors[j]] = formatArea(totalFeatures[i].getGeometry()).replace(' km', '');
              
            }
          }
        }
      }
    }


  var price_payload = '';
  price_payload = getPayload();
  price_payload += "&acquisition=Fresh";
  checkPrice(jsonString, price_payload, 'Fresh');
}

function onDemandPDF(orderid) {
  $("#demandProduct").text($("#onDemandSelect").val());
  $("#formDetails").text($("#onDemandComments").val());
  if (orderid === null || orderid == undefined)
    orderid = generateOrderID();
  processOrder('fresh');
  generatePDF('Generate', 'demand', orderid);
}

//Generate PDF
function generatePDF(type, acq, orderidFresh) {
  if (acq == 'fresh') {
    $("#page1Fresh").show();
    $("#page1Archive").hide();
    $("#page1OnDemand").hide();
  } else if (acq == 'demand') {
    $("#page1OnDemand").show();
    $("#page1Archive").hide();
    $("#page1Fresh").hide();
  } else {
    $("#page1Archive").show();
    $("#page1Fresh").hide();
    $("#page1OnDemand").hide();
  }
  var date = document.getElementById('orderdate').innerHTML;
  date = date.replace('/', '');
  date = date.replace('/', '');
  var d = new Date();
  var time = d.getTime();

  var userid = document.getElementById('userid').innerHTML;
  orderid = time + "_" + userid + "_" + date;
  if (acq == 'fresh' || acq == 'demand') {
    orderid = orderidFresh;
  }
  $("#orderid").text(orderid);
  pdf = "";

  map.once('postcompose', function(event) {
    toastr.info("Order is being generated");
    var canvas = event.context.canvas;
    if (navigator.msSaveBlob) {
      screenshot = canvas.msToBlob();
    } else {
      try {
        map.getView().fit(featureArch.getGeometry().getExtent(), {});
      } catch (e) {}
      html2canvas($(".print-wrap:eq(0)")[0], {
        allowTaint: true
      }).then(function(canvas0) {
        pdf = new jsPDF('p', 'pt', 'a4');
        var tbl = $('#page1Fresh').clone();
        if ($('#satSelect').val() !== "SAR") {
          tbl.find('.rowSAR').remove();
        }
        if ($("#satSelect").val() !== 'SV' && $("#satSelect").val() !== 'PleiadesNeo') {
          tbl.find('.pdf_row_priority').remove();
        }
        var img = new Image();
        img.src = 'css/images/suparco.png';
        pdf.addImage(img, 'PNG', 260, 10, 80, 80);
        if (acq == 'fresh') {
          pdf.autoTable({
            html: tbl.get(0),
            // html: "#page1Fresh",
            font: 'helvetica',
            theme: 'grid',
            margin: {
              right: 10,
              left: 10,
              top: 100
            },
            tableWidth: 'auto',
            styles: {
              lineColor: [44, 62, 80],
              lineWidth: 1
            },
            bodyStyles: {
              fillColor: [238, 238, 238],
              textColor: 000
            },
            alternateRowStyles: {
              fillColor: [118, 157, 178]
            },
            didParseCell(data) {

              if (typeof data.cell !== 'undefined') {
                if (data.cell.text[0] === "Fresh Acquisition Request" || data.cell.text[0] === "Satellite Image Product Form") {
                  data.cell.styles.textColor = [255, 255, 255];
                  data.cell.styles.fillColor = '#0d5881';
                  data.cell.styles.halign = 'center';
                  data.cell.styles.fontSize = 25;
                  data.cell.styles.fontStyle = 'normal';
                }
              }
            },
            columnStyles: {
              0: {
                cellWidth: 85,
                fontSize: 14,
                fontStyle: 'bold',
                cellPadding: 10,
                halign: 'left',
                valign: 'middle',
                minCellHeight: 40
              },
              1: {
                cellWidth: 115,
                fontSize: 14,
                cellPadding: 10,
                halign: 'left',
                valign: 'middle',
                minCellHeight: 40
              },
              2: {
                cellWidth: 85,
                fontSize: 14,
                fontStyle: 'bold',
                cellPadding: 10,
                halign: 'left',
                valign: 'middle',
                minCellHeight: 40
              },
              3: {
                cellWidth: 115,
                fontSize: 14,
                cellPadding: 10,
                halign: 'left',
                valign: 'middle',
                minCellHeight: 40
              },
            }
          });
        } else if (acq == 'demand') {
          pdf.autoTable({
            html: "#page1OnDemand",
            font: 'helvetica',
            theme: 'grid',
            margin: {
              right: 10,
              left: 10,
              top: 100
            },
            tableWidth: 'auto',
            styles: {
              lineColor: [44, 62, 80],
              lineWidth: 1
            },
            bodyStyles: {
              fillColor: [238, 238, 238],
              textColor: 000
            },
            alternateRowStyles: {
              fillColor: [118, 157, 178]
            },
            didParseCell(data) {

              if (typeof data.cell !== 'undefined') {
                if (data.cell.text[0] === "On Demand Acquisition Data" || data.cell.text[0] === "Satellite Image Product Form") {
                  data.cell.styles.textColor = [255, 255, 255];
                  data.cell.styles.fillColor = '#0d5881';
                  data.cell.styles.halign = 'center';
                  data.cell.styles.fontSize = 25;
                  data.cell.styles.fontStyle = 'normal';
                }
              }
            },
            columnStyles: {
              0: {
                cellWidth: 85,
                fontSize: 16,
                fontStyle: 'bold',
                cellPadding: 10,
                halign: 'left',
                valign: 'middle',
                minCellHeight: 40
              },
              1: {
                cellWidth: 115,
                fontSize: 16,
                cellPadding: 10,
                halign: 'left',
                valign: 'middle',
                minCellHeight: 40
              },
              2: {
                cellWidth: 85,
                fontSize: 16,
                fontStyle: 'bold',
                cellPadding: 10,
                halign: 'left',
                valign: 'middle',
                minCellHeight: 40
              },
              3: {
                cellWidth: 115,
                fontSize: 16,
                cellPadding: 10,
                halign: 'left',
                valign: 'middle',
                minCellHeight: 40
              },
            }
          });
        } else {
          pdf.autoTable({
            html: "#page1Archive",
            font: 'helvetica',
            theme: 'grid',
            margin: {
              right: 10,
              left: 10,
              top: 100
            },
            tableWidth: 'auto',
            styles: {
              lineColor: [44, 62, 80],
              lineWidth: 1
            },
            bodyStyles: {
              fillColor: [238, 238, 238],
              textColor: 000
            },
            alternateRowStyles: {
              fillColor: [118, 157, 178]
            },
            didParseCell(data) {
              if (typeof data.cell !== 'undefined') {
                if (data.cell.text[0] === "Satellite Image Product Form") {
                  data.cell.styles.textColor = [255, 255, 255];
                  data.cell.styles.fillColor = '#0d5881';
                  data.cell.styles.halign = 'center';
                  data.cell.styles.fontSize = 25;
                  data.cell.styles.fontStyle = 'normal';
                }
              }
            },
            columnStyles: {
              0: {
                cellWidth: 85,
                fontSize: 14,
                fontStyle: 'bold',
                cellPadding: [0, 10, 0, 10],
                halign: 'left',
                valign: 'middle',
                minCellHeight: 55
              },
              1: {
                cellWidth: 115,
                fontSize: 16,
                cellPadding: [0, 10, 0, 10],
                halign: 'left',
                valign: 'middle',
                minCellHeight: 55
              },
              2: {
                cellWidth: 85,
                fontSize: 14,
                fontStyle: 'bold',
                cellPadding: [0, 10, 0, 10],
                halign: 'left',
                valign: 'middle',
                minCellHeight: 55
              },
              3: {
                cellWidth: 115,
                fontSize: 16,
                cellPadding: [0, 10, 0, 10],
                halign: 'left',
                valign: 'middle',
                minCellHeight: 55
              },
            }
          });
        }


        var imgData = canvas.toDataURL("image/jpeg", 0.3);
        canvas.toBlob(function(blob) {
          calculatePDF_height_width(".print-wrap", 0);
          pdf.addPage('a4');
          pdf.setFontSize(20);
          pdf.text(150, 20, "Order ID: " + orderid);
          pdf.addImage(imgData, 'JPEG', 10, 30, PDF_Width - 105, PDF_Height - 150);

          // // // -------------------- CANVAS ONE -------------------- // // //
          canvas1 = document.createElement('canvas');

          canvas1.id = "LegendLayer";
          canvas1.width = 200;
          canvas1.height = 100;
          canvas1.style.zIndex = 8;
          canvas1.style.position = "absolute";
          canvas1.style.border = "1px solid";
   
          var body = document.getElementsByTagName("body")[0];
          body.appendChild(canvas1);

          LegendLayer = document.getElementById("LegendLayer");

          var ctx1 = canvas1.getContext("2d");
          ctx1.beginPath();
          ctx1.fillStyle="white";
          ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
          ctx1.rect(15, 10, 150, 80);
          ctx1.stroke();

          ctx1.font = "20px Arial";
          ctx1.fillStyle = "#1c5982";
          ctx1.fillText("Legend", 20, 30);

          // AOI Legend
          ctx1.beginPath();
          ctx1.lineWidth = "1";
          ctx1.strokeStyle = "black";
          ctx1.rect(20, 40, 15, 15);
          ctx1.stroke();
          // Label Text
          ctx1.font = "12px Arial";
          ctx1.fillStyle = "black";
          ctx1.fillText("AOI", 40, 50);

          // Available Images Legend
          ctx1.beginPath();
          ctx1.lineWidth = "1";
          ctx1.strokeStyle = "green";
          ctx1.rect(20, 65, 15, 15);
          ctx1.stroke();
          // Label Text
          ctx1.font = "12px Arial";
          ctx1.fillStyle = "black";
          ctx1.fillText("Available Images", 40, 75);

          // // // -------------------- CANVAS TWO -------------------- // // //
          if (aoiShape !== "Polygon" && coordsArr.length > 0) {
            canvas2 = document.createElement('canvas');

            canvas2.id = "LegendLayer";
            canvas2.width = 350;
            canvas2.height = 100;
            canvas2.style.zIndex = 8;
            canvas2.style.position = "absolute";
            canvas2.style.border = "1px solid";

            var body = document.getElementsByTagName("body")[0];
            body.appendChild(canvas2);

            LabelLayer = document.getElementById("LabelLayer");

            var ctx2 = canvas2.getContext("2d");
            ctx2.beginPath();
            ctx2.strokeStyle = "green";
            ctx2.fillStyle="white";
            ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
            ctx2.rect(10, 10, 340, 80);
            ctx2.stroke();

            ctx2.font = "20px Arial";
            ctx2.fillStyle = "#1c5982";
            ctx2.fillText("Coordinates", 20, 30);
            ctx2.fillColor="white";
            

            // // Circle One // //
            ctx2.beginPath();
            ctx2.arc(25, 45, 5, 0, 2 * Math.PI);
            ctx2.fillStyle = coordsArr[3][0];
            ctx2.fill();
            ctx2.stroke();
            // Label Text
            ctx2.font = "12px Arial";
            ctx2.fillStyle = "black";
            ctx2.fillText(coordsArr[3][1], 40, 50);

            // // Circle Two // //
            ctx2.beginPath();
            ctx2.arc(190, 45, 5, 0, 2 * Math.PI);
            ctx2.fillStyle = coordsArr[2][0];
            ctx2.fill();
            ctx2.stroke();
            // Label Text
            ctx2.font = "12px Arial";
            ctx2.fillStyle = "black";
            ctx2.fillText(coordsArr[2][1], 200, 50);

            // // Circle Three // //
            ctx2.beginPath();
            ctx2.arc(25, 70, 5, 0, 2 * Math.PI);
            ctx2.fillStyle = coordsArr[4][0];
            ctx2.fill();
            ctx2.stroke();
            // Label Text
            ctx2.font = "12px Arial";
            ctx2.fillStyle = "black";
            ctx2.fillText(coordsArr[4][1], 40, 75);

            // // Circle Four // //
            ctx2.beginPath();
            ctx2.arc(190, 70, 5, 0, 2 * Math.PI);
            ctx2.fillStyle = coordsArr[1][0];
            ctx2.fill();
            ctx2.stroke();
            // Label Text
            ctx2.font = "12px Arial";
            ctx2.fillStyle = "black";
            ctx2.fillText(coordsArr[1][1], 200, 75);
          }

          var imgData1 = canvas1.toDataURL("image/jpeg", 1.0);
          pdf.addImage(imgData1, 'JPEG', PDF_Width - 260, PDF_Height - 120, 200, 100);
          if (aoiShape !== "Polygon" && coordsArr.length > 0) {
            var imgData2 = canvas2.toDataURL("image/jpeg", 1.0);
            pdf.addImage(imgData2, 'JPEG', 0, PDF_Height - 120, 350, 100);
          }
          // setTimeout(function() {
          print();
          // }, 1500);
        });
      });
    }

    function print() {
      html2canvas($("#pageTwo")[0], {
        allowTaint: true
      }).then(function(canvas) {
        calculatePDF_height_width(".print-wrap", 1);
        if (acq !== 'fresh') {
          pdf.addPage('a4');
          pdf.setFontSize(25);
          pdf.text(230, 30, 'List of Images');
          pdf.setFontSize(15);
          pdf.text(170, 55, "(Order ID: " + orderid + ")");
          if ($("#tbodyPolyCoords").html() !== '') {
            pdf.autoTable({
              html: "#tblPolyCoords",
              theme: 'striped',
              margin: {
                right: 10,
                left: 10,
                top: 70
              },
              tableWidth: 'auto',
              columnStyles: {
                0: {
                  cellWidth: 50
                },
                1: {
                  cellWidth: 100
                },
                2: {
                  cellWidth: 100
                }
              }
            });
          }
          for (const key in sensor_scenes) {
            if (sensor_scenes[key] > 0) {
              var sensor = key;
              var div = "#" + sensor + "Table";
              if (sensor !== "SPOT") {
                makePDFScenesDiv(pdf, div);
              } else {
                if (sensor_scenes['PRSS'] > 0 || $("#tbodyPolyCoords").html() !== '') {
                  makePDFScenesDiv(pdf, div);
                } else {
                  pdf.autoTable({
                    html: div,
                    theme: 'striped',
                    margin: {
                      right: 10,
                      left: 10,
                      top: 70
                    },
                    tableWidth: 'auto',
                    columnStyles: {
                      0: {
                        cellWidth: 10
                      },
                      1: {
                        cellWidth: 300
                      }
                    }
                  });
                }
              }
            }
          }
        } else if (acq == "fresh") {
          if ($("#tbodyPolyCoords").html() !== '') {
            pdf.addPage('a4');
            pdf.setFontSize(25);
            pdf.text(230, 30, 'Coordinates List');
            pdf.setFontSize(15);
            pdf.text(170, 55, "(Order ID: " + orderid + ")");
            pdf.autoTable({
              html: "#tblPolyCoords",
              theme: 'striped',
              margin: {
                right: 10,
                left: 10,
                top: 70
              },
              tableWidth: 'auto',
              columnStyles: {
                0: {
                  cellWidth: 50
                },
                1: {
                  cellWidth: 100
                },
                2: {
                  cellWidth: 100
                }
              }
            });
          }
        }
        pdf.save(orderid + ".pdf");
        var blob = pdf.output('blob');
        var fd = new FormData();
        fd.append('data', blob);

        // if (type == 'Place' || (type == 'Generate' && acq == 'fresh')) {
        console.log(uploadPDFflag);
        console.log('fd:'+ fd); 

        if (uploadPDFflag) {
          $.ajax({
            type: 'POST',
            url: 'uploadPDF.php?orderid=' + orderid,
            data: fd,
            processData: false,
            contentType: false,
            success:function(response){
              console.log('ajax success'+response);
            },
            error:function(xhr,ajaxOptions,thrownError){
              console.log('ajax error'+thrownError);
            }
          }).done(function(data) {
            $(".disablingDiv").hide();
          });
        }

        $("#divSearch").show();
        $("#divFilter").show();
        $("#divDrawing").show();
        $("#divActive").show();

        if (acq !== 'fresh') {
          toastr.success("Order Generated");
          resetAllCheckboxes();
          $(".disablingDiv").hide();
        }


        // Empty Scenes Divs
        $('#pricingModal').modal('hide');
        emptyProdDivs();
        resetSensorsArea();
        resetSensorScenes();
        $('input[name="chkPricingGroup"]').attr('checked', false);
        vectorClipped.getSource().clear();
        vectorPoints.setVisible(false);
      });
      canvas1.remove();
      try {
        canvas2.remove();
      } catch (e) {}
    }
  });
  map.renderSync();


  if (type == 'Place') { //archive
    // $.ajax({
      // type: "GET",
      // url: "server_scripts/checkIntersection.php?aoi=" + activeAOI,
      // success: function(data) {
        // if (data === "intersected") {

        if (factor) {
          area = parseFloat(areaDrawn.replace(" km", "")) * factor;
        } else {
          area = parseFloat(areaDrawn.replace(" km", ""));
        }
          var payload = "date=" + document.getElementById('orderdate').innerHTML +
            "&time=" + document.getElementById('ordertime').innerHTML +
            "&id=" + orderid +
            "&userid=" + document.getElementById('userid').innerHTML +
            "&prssscenesCount=" + document.getElementById('prssscenesCount').innerHTML +
            "&spotscenesCount=" + document.getElementById('spotscenesCount').innerHTML +
            "&pleiadesscenesCount=" + document.getElementById('pleiadesscenesCount').innerHTML +
            "&pleiadesneoscenesCount=" + document.getElementById('pleiadesneoscenesCount').innerHTML +
            "&svscenesCount=" + document.getElementById('svscenesCount').innerHTML +
            "&pleiadesamount=" + document.getElementById('pleiadesamount').innerHTML +
            "&pleiadesneoamount=" + document.getElementById('pleiadesneoamount').innerHTML +
            "&svamount=" + document.getElementById('svamount').innerHTML +
            "&spotamount=" + document.getElementById('spotamount').innerHTML +
            "&prssamount=" + document.getElementById('prssamount').innerHTML +
            "&satellite=" + fresh_sensors +
            "&type=archive&aoi=" + activeAOI +
            "&scenes=" + scenes +
            "&ordered_area=" + area;
          insertOrderDetailsFunc(payload, "archive", 0);
          var flagString = '';
          for (const sensor_prod in sensor_Products) {
            var selected_prod = sensor_Products[sensor_prod];
            for (const prod in prodToFlags) {
              if (selected_prod == prod) {
                var key = prodToFlags[prod];
                flagProd[key] = 1;
              }
            }
          }
          flagString = getAllFlags();
          var dataString = 'productPrss=' + productsKeys[sensor_Products['productsPRSS']] +
            '&productSpot=' + productsKeys[sensor_Products['productsSPOT']] +
            '&productPleiades=' + productsKeys[sensor_Products['productsPleiades']] +
            '&productPleiadesNeo=' + productsKeys[sensor_Products['productsPleiadesNeo']] +
            '&productSV=' + productsKeys[sensor_Products['productsSV']] +
            '&productSAR=' + productsKeys[sensor_Products['productsSAR']] +
            '&orderid=' + orderid +
            '&type=' + acquisition +
            '&' + flagString;
          setOrderProductsFunc(dataString, acquisition);
          // resetProducts();
        // }
      // }
    // });
  }
}
$(document).ready(function() {
  $("#togglemenu").on('click', function() {
    try {
      map.getView().fit(featureArch.getGeometry().getExtent(), {
        duration: 2500
      });
    } catch (e) {}
    $("#data_header").html("Optical Results");
  });
  $("#freshData").on('click', function() {
    try {
      map.getView().fit(featureArch.getGeometry().getExtent(), {
        duration: 2500
      });
    } catch (e) {}
    $("#data_header").html("Fresh Data Acquisition");
    $("#resultsCount").hide();
    $("#data_fresh").show();
    $("#data").hide();
  });
  $("#endModify").on('click', function() {
    map.removeInteraction(modify);
    var wkt = format.writeGeometry(modifiedFeature.getGeometry());
    endCoords = modifiedFeature.getGeometry().getCoordinates();
    highlightedAOI = modifiedFeature;
    activeAOI = wkt;
    fetchData(wkt, modifiedFeature);
    $("#endModify").hide();
  });
});

function updatePriceLabels(val) {
  if (val = "resolution") {
    var resolution = document.querySelectorAll("#resolution-slider input");
    var val1 = parseInt(resolution[0].value);
    var val2 = parseInt(resolution[1].value);
    $("#resLower").val(val1);
    $("#resUpper").val(val2);
  }
  if (val = "cloud") {
    var resolution = document.querySelectorAll("#criteria-cloud-slider input");
    var val1 = parseInt(resolution[0].value);
    var val2 = parseInt(resolution[1].value);
    $("#cloudLower").val(val1);
    $("#cloudUpper").val(val2);
  }
  if (val = "freshcloud") {
    var resolution = document.querySelectorAll("#fresh-cloud-slider input");
    var val1 = parseInt(resolution[0].value);
    var val2 = parseInt(resolution[1].value);
    $("#freshCloudLower").val(val1);
    $("#freshCloudUpper").val(val2);
  }
  if (val = "freshAngle") {
    var resolution = document.querySelectorAll("#fresh-angle-slider input");
    var val1 = parseInt(resolution[0].value);
    var val2 = parseInt(resolution[1].value);
    $("#freshAngleLower").val(val1);
    $("#freshAngleUpper").val(val2);
  }
  if (val = "freshAngle2") {
    var resolution = document.querySelectorAll("#fresh-angle-slider2 input");
    var val1 = parseInt(resolution[0].value);
    var val2 = parseInt(resolution[1].value);
    $("#freshAngleLower2").val(val1);
    $("#freshAngleUpper2").val(val2);
  }
}
var geoJSONFormat = new ol.format.GeoJSON();

function paginateTable() {
  var len = $(window).height();
  len = len - 330;
  table = $("#table_id").DataTable({
    columnDefs: [{
      type: 'date',
      'targets': [1]
    }, {
      targets: [5, 6, 7, 8, 9],
      orderable: false
    }],
    order: [
      [1, 'desc']
    ],
    "stripeClasses": ['strip1', 'strip2', 'strip3'],
    "lengthMenu": [
      [15, 25, 50, -1],
      [15, 25, 50, "All"]
    ],
    "scrollY": len,
    "scrollCollapse": true,
    "paging": true,
    "bDestroy": true
  });
  $("#table_id").on('length.dt', function(e, settings, len) {
    setTimeout(function() {
      var h = $(tableData).height();
    }, 50)
  });
}

function funcDelete(val) {
  $('#' + val + '_cart').removeClass('selectedIcon');
  $('#' + plieadesObj[val] + '_cart').removeClass('selectedIcon');
  $('#' + plieadesneoObj[val] + '_cart').removeClass('selectedIcon');
  $('#' + svObj[val] + '_cart').removeClass('selectedIcon');
}
function addArchiveSensors(val) {
	if(fresh_sensors == '')
		fresh_sensors = val;
	else{
		if(!fresh_sensors.includes(val))
			fresh_sensors = fresh_sensors + ', ' + val;
	}


}
function setPreferences(val) {
  $(".chkSPOT").attr("disabled", true);
  $(".chkSPOT542").attr("disabled", true);
  $(".chkPleiades").attr("disabled", true);
  $(".chkPRSS").attr("disabled", true);
  $(".chkPleiadesNeo").attr("disabled", true);
  $(".chkSV").attr("disabled", true);
  $(".chkSAR").attr("disabled", true);
  var cartItems = cartList[0].innerText;
  var itemsArr = $(".product-details").text().split("DeleteQty123456789");
  var lim = itemsArr.length;

  for (var i = 0; i < lim; i++) {
    if (itemsArr[i] != '') {
      if (itemsArr[i].indexOf("SPOT6") !== -1 || itemsArr[i].indexOf("SPOT7") !== -1) {
		addArchiveSensors('SPOT67');
        try {
          $(".pricing-SPOT").removeClass("disable-title");
          $(".lblPricingSPOT").removeClass("disable-label");
          $(".chkSPOT").attr("disabled", false);
        } catch (e) {}
      } else if (itemsArr[i].indexOf("SPOT5") !== -1 || itemsArr[i].indexOf("SPOT4") !== -1 || itemsArr[i].indexOf("SPOT2") !== -1) {
		  addArchiveSensors('SPOT45');
        try {
          $(".pricing-SPOT542").removeClass("disable-title");
          $(".lblPricingSPOT542").removeClass("disable-label");
          $(".chkSPOT542").attr("disabled", false);
        } catch (e) {}
      } else if (itemsArr[i].indexOf("PRSS") !== -1) {
		  addArchiveSensors('SPOT45');
        try {
          $(".pricing-PRSS").removeClass("disable-title");
          $(".lblPricingPRSS").removeClass("disable-label");
          $(".chkPRSS").attr("disabled", false);
        } catch (e) {}
      } else if (itemsArr[i].indexOf("PNEO") !== -1) {
		  addArchiveSensors('Pleiades Neo');
        try {
          $(".pricing-PleiadesNeo").removeClass("disable-title");
          $(".lblPricingPleiadesNeo").removeClass("disable-label");
          $(".chkPleiadesNeo").attr("disabled", false);
        } catch (e) {}
      } else if (itemsArr[i].indexOf("SV") !== -1) {
		  addArchiveSensors('Superview');
        try {
          $(".pricing-SV").removeClass("disable-title");
          $(".lblPricingSV").removeClass("disable-label");
          $(".chkSV").attr("disabled", false);
        } catch (e) {}
      } else if (itemsArr[i].indexOf("SAR") !== -1) {
        addArchiveSensors('SAR');
          try {
            $(".pricing-SAR").removeClass("disable-title");
            $(".lblPricingSAR").removeClass("disable-label");
            $(".chkSAR").attr("disabled", false);
          } catch (e) {}
      } else {
		  addArchiveSensors('Pleiades');
        try {
          $(".pricing-Pleiades").removeClass("disable-title");
          $(".lblPricingPleiades").removeClass("disable-label");
          $(".chkPleiades").attr("disabled", false);
        } catch (e) {}
      }
    }
  }
  $("#proceedOrder").text(val);
  $('#pricingModal').modal('show');
}

$(document).ready(function() {
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  $(".chkPRSS").on("click", function() {
    var values = [];
    $('.chkPRSS:checked').each(function() {
      values.push($(this).val());
    });
    if (values.indexOf("PRSS_Bundle(Multispectral+Panchromatic)") !== -1) {
      $("#098PanC").prop('checked', false);
      $("#289MultiS").prop('checked', false);
    }
  });
  $("#btnAddCoord").click(function() {
    var html = '<div><label class = "lblpolyCoord">Longitude: </label> <input type="text" class="txtpolyCoord" name="polyLon" onkeypress="return isNumberKey(event)"/><label class = "lblpolyCoord">Latitude: </label> <input type="text" class="txtpolyCoord" name="polyLat" onkeypress="return isNumberKey(event)"/></div>';
    $("#divPolyCoords").append(html);
  });
  $("#proceedOrder").click(function() {
    console.log('proceedOrder' + $(this).text());
    if ($(this).text() === "Generate") {
      uploadPDFflag = 0;
    } else if ($(this).text() === "Place") {
      uploadPDFflag = 1;
    }
    resetProducts();
    checkSelectedProducts();
  });
});

$('html').on('DOMNodeInserted', function(e) {
  if ($(e.target).hasClass('tablesorter') == true) {
    var totalFeatures = resultVector.getSource().getFeatures();
    $('.featureTable tbody').bind('mouseenter', function(e) {
      var targetDataId = $(this).find('tr.data_id').text();
      for (var i = 0; i < totalFeatures.length; i++) {
        if (totalFeatures[i].get('data_id') == targetDataId) {
          totalFeatures[i].setStyle(new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: '#000000',
              width: 2
            })
          }));
        } else
          totalFeatures[i].setStyle(null);
      }
    });
    $('.featureTable').bind('mouseleave', function(e) {
      for (var i = 0; i < totalFeatures.length; i++) {
        totalFeatures[i].setStyle(null);
      }
    });
    $("#menu h3").text("Total Results: " + resultFeatures.length);
    paginateTable();
  }
});

function setBuffer(val) {
  $("#distanceBufferPoint").hide();
  if (val == 'set') {
    $("#iPoint").removeClass().addClass("fas fa-chevron-circle-right");
    $("#iLine").removeClass().addClass("fas fa-chevron-circle-right");
  } else {
    $("#iPoint").removeClass("fas fa-chevron-circle-left");
    $("#iPoint").addClass("fas fa-chevron-circle-right");
    $("#iLine").removeClass("fas fa-chevron-circle-left");
    $("#iLine").addClass("fas fa-chevron-circle-right");
    $("#txtBufferPoint").val(15);
    $("#txtBufferLine").val(15);
  }
}
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover' //,
  });
});
var itr = 0;

function move(extent, val) {
  if (itr == 0) {
    itr = 1;
    var elem = document.getElementById("Bar1");
    var elem3 = document.getElementById("Bar3");
    var width = 1;
    var tid = setInterval(frame, 10);

    function frame() {
      if (width >= 100) {
        clearInterval(tid);
        itr = 0;
        map.getView().fit(extent, {
          duration: 2500,
          maxZoom: 10
        });
        if (!$('.menu').hasClass("ol-visible") && val !== 'reset') {
          menu.toggle();
        }
        $(".myProgress").hide();
      } else {
        width++;
        elem.style.width = width + "%";
        elem3.style.width = width + "%";
      }
    }
  }
}

function emptyCart() {
  var itemsArr = $(".product-details").text().split("DeleteQty123456789");
  var len = itemsArr.length;
  for (var i = 0; i < len - 1; i++) {
    var val = itemsArr[i].substr(0, itemsArr[i].indexOf('~'));
    if (val.indexOf("PHR") !== -1) {
      val = plieadesObj[val];
    }
    if (val.indexOf("PNEO") !== -1) {
      val = plieadesneoObj[val];
    }
    if (val.indexOf("SV") !== -1) {
      val = svObj[val];
    }
    if (val === '' || val != null) {
      $('#' + val + '_cart').removeClass('selectedIcon');
      removeProduct(val, 'reset');
    }
  }
}

function generateOrderID() {
  var currentdate = new Date();
  var date = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear();
  date = date.replace('/', '');
  date = date.replace('/', '');
  var d = new Date();
  var time = d.getTime();
  $('#ordertime').text(currentdate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }));
  var userid = document.getElementById('userid').innerHTML;

  orderid = time + "_" + userid + "_" + date;
  orderid = orderid.replace(' ', '');
  return orderid;
}

function getWfsFiltered(isVisible, lyrTitle, lyrName, filter, distance) {
  var source = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    loader: function(extent, resolution, projection) {
      $.ajax({
        url: "server_scripts/azd.php?aa=" + filter, // + "&bbox=" + bbox,
        dataType: 'json',
        success: function(data) {
          var features = geoJSONFormat.readFeatures(data);
          source.addFeatures(features);
        }
      });
    },
    strategy: ol.loadingstrategy.bbox
  });

  var clusterSource = new ol.source.Cluster({
    distance: distance,
    source: source
  });

  return new ol.layer.AnimatedCluster({
    displayInLayerSwitcher: false,
    title: lyrTitle,
    name: lyrName,
    source: clusterSource,
    animationDuration: 500,
    visible: isVisible,
    style: getClusterStyle
  });
}

function fontSize(imp) {
  if (imp == "900")
    return "28px";

  //initial view
  if (imp == "800" && getCurrentScalefunction() > 8000000)
    return "18px";

  //first zoom
  if (imp == "800" && getCurrentScalefunction() > 4000000)
    return "19px";
  if (imp == "600" && getCurrentScalefunction() > 4000000)
    return "16px";

  //second zoom
  if (imp == "800" && getCurrentScalefunction() > 2000000)
    return "21px";
  if (imp == "600" && getCurrentScalefunction() > 2000000)
    return "18px";
  if (imp == "400" && getCurrentScalefunction() > 2000000)
    return "15px";

  //third zoom
  if (imp == "800" && getCurrentScalefunction() > 1000000)
    return "23px";
  if (imp == "600" && getCurrentScalefunction() > 1000000)
    return "21px";
  if (imp == "400" && getCurrentScalefunction() > 1000000)
    return "18px";

  //fourth zoom
  if (imp == "800" && getCurrentScalefunction() < 1000000)
    return "31px";
  if (imp == "600" && getCurrentScalefunction() < 1000000)
    return "29px";
  if (imp == "400" && getCurrentScalefunction() < 1000000)
    return "23px";
  if (imp == "300" && getCurrentScalefunction() < 1000000)
    return "21px";

  if (imp == "290")
    return "14px";
  if (imp == "280")
    return "14px";
  if (imp == "275")
    return "14px";
  if (imp == "250")
    return "17px";
  if (imp == "235")
    return "15px";
}

function fontWeight(feature) {
  if (feature == "250")
    return "bold";
  else
    return " ";
}

function getCurrentScalefunction() {
  var viewer = map.getView();
  var resolution = viewer.getResolution();
  var units = map.getView().getProjection().getUnits();
  var dpi = 25.4 / 0.28;
  var mpu = ol.proj.METERS_PER_UNIT[units];
  var scale = resolution * mpu * 39.37 * dpi;
  return scale;
}

function stringDivider(str, width, spaceReplacer) {
  if (str.length > width) {
    var p = width;
    while (p > 0 && (str[p] != ' ' && str[p] != '-')) {
      p--;
    }
    if (p > 0) {
      var left;
      if (str.substring(p, p + 1) == '-') {
        left = str.substring(0, p + 1);
      } else {
        left = str.substring(0, p);
      }
      var right = str.substring(p + 1);
      return left + spaceReplacer + stringDivider(right, width, spaceReplacer);
    }
  }
  return str;
}


function getClusterStyle(feature, resolution) {
  var style;
  var cfeatures = feature.get('features');
  if (condition == "styleCitiesMap") {
    if (cfeatures.length > 1) {
      text = "";
      scale = "";
      font = "";
      maxImportance = 0;
      for (var c = 0; c < cfeatures.length; c++) {
        // if (cfeatures[c].get('name') == "Disputed Territory")
        // break;
        i = cfeatures[c].get('importance');
        if (i > maxImportance) {
          maxImportance = i;
          mainFeature = c;
        }
        if (cfeatures[0].get('urdu') != null) {
          text = cfeatures[0].get('urdu');
          try {
            font = fontSize(cfeatures[mainFeature].get('importance')) + ' Calibri ' + fontWeight(cfeatures[mainFeature].get('importance'));
          } catch (e) {
            font = "15px Calibri ";
          }
        } else {
          text = cfeatures[0].get('name');
          try {
            font = fontSize(cfeatures[mainFeature].get('importance')) + ' Calibri ' + fontWeight(cfeatures[mainFeature].get('importance'));
          } catch (e) {
            font = "15px Calibri ";
          }
        }
        if (i == "900" || i == "800" || i == "600" || i == "400") {
          scale = 1.3;
        } else {
          scale = 0.9;
        }
        if (cfeatures[0].get('importance') == "250" || cfeatures[0].get('importance') == "235") {
          text = stringDivider(text, 15, '\n');
        }
        style = new ol.style.Style({
          text: new ol.style.Text({
            text: text,
            font: font,
            // scale: scale,
            fill: new ol.style.Fill({
              color: 'White'
            }),
            stroke: new ol.style.Stroke({
              color: '#' + cfeatures[mainFeature].get('fontcolor'),
              width: 2.5
            })
          })
        });
      }
    } else {
      if (cfeatures[0].get('urdu') != null) {
        text = cfeatures[0].get('urdu');
        try {
          font = fontSize(cfeatures[mainFeature].get('importance')) + ' Calibri ' + fontWeight(cfeatures[mainFeature].get('importance'));
        } catch (e) {
          font = fontSize(cfeatures[0].get('importance')) + ' Calibri ' + fontWeight(cfeatures[0].get('importance'));
        }
      } else {
        text = cfeatures[0].get('name');
        try {
          font = fontSize(cfeatures[mainFeature].get('importance')) + ' Calibri ' + fontWeight(cfeatures[mainFeature].get('importance'));
        } catch (e) {
          font = fontSize(cfeatures[0].get('importance')) + ' Calibri ' + fontWeight(cfeatures[0].get('importance'));
        }
      }
      if (cfeatures[0].get('importance') == "900" || cfeatures[0].get('importance') == "800" || cfeatures[0].get('importance') == "600" || cfeatures[0].get('importance') == "400") {
        scale = 1.3;
      } else {
        scale = 0.9;
      }
      if (cfeatures[0].get('importance') == "250" || cfeatures[0].get('importance') == "235") {
        text = stringDivider(text, 16, '\n');
      }
      style = new ol.style.Style({
        text: new ol.style.Text({
          text: text,
          font: font,
          // scale: scale,
          fill: new ol.style.Fill({
            color: 'white'
          }),
          stroke: new ol.style.Stroke({
            color: '#' + cfeatures[0].get('fontcolor'),
            width: 2
          })
        })
      });
    }
  }
  return style;
}

function styleSelected(feature) {
  var cfeatures = feature.get('features');
  // scale = "";
  if (cfeatures.length > 1) {
    text = "";
    font = null;
    maxImportance = 0;
    for (var c = 0; c < cfeatures.length; c++) {
      i = cfeatures[c].get('importance');
      if (i > maxImportance) {
        maxImportance = i;
        mainFeature = c;
      }
      if (cfeatures[0].get('urdu') != null) {
        text = cfeatures[0].get('urdu');
        try {
          font = fontSize(cfeatures[mainFeature].get('importance')) + ' Calibri ' + fontWeight(cfeatures[mainFeature].get('importance'));
        } catch (e) {
          font = "15px Calibri ";
        }
      } else {
        text = cfeatures[0].get('name');
        try {
          font = fontSize(cfeatures[mainFeature].get('importance')) + ' Calibri ' + fontWeight(cfeatures[mainFeature].get('importance'));
        } catch (e) {
          font = "15px Calibri ";
        }
      }
      if (cfeatures[0].get('importance') == "900" || cfeatures[0].get('importance') == "800" || cfeatures[0].get('importance') == "600" || cfeatures[0].get('importance') == "400") {
        scale = 1.3;
      } else {
        scale = 0.9;
      }
      if (cfeatures[0].get('importance') == "250" || cfeatures[0].get('importance') == "235") {
        text = stringDivider(text, 15, '\n');
      }
      selectStyle = new ol.style.Style({
        text: new ol.style.Text({
          text: cfeatures[mainFeature].get('name') + "\n" + cfeatures[mainFeature].get('urdu'),
          text: text,
          font: font,
          scale: scale,
          fill: new ol.style.Fill({
            color: '#ffff00'
          }),
          stroke: new ol.style.Stroke({
            color: 'black',
            width: 2.5
          })
        })
      });

    }
  } else {
    if (cfeatures[0].get('urdu') != null) {
      text = cfeatures[0].get('urdu');
      try {
        font = fontSize(cfeatures[mainFeature].get('importance')) + ' Calibri ' + fontWeight(cfeatures[mainFeature].get('importance'));
      } catch (e) {
        font = "15px Calibri ";
      }
    } else {
      text = cfeatures[0].get('name');
      try {
        font = fontSize(cfeatures[mainFeature].get('importance')) + ' Calibri ' + fontWeight(cfeatures[mainFeature].get('importance'));
      } catch (e) {
        font = "15px Calibri ";
      }
    }
    if (cfeatures[0].get('importance') == "900" || cfeatures[0].get('importance') == "800" || cfeatures[0].get('importance') == "600" || cfeatures[0].get('importance') == "400") {
      scale = 1.3;
    } else {
      scale = 0.9;
    }
    selectStyle = new ol.style.Style({
      text: new ol.style.Text({
        text: text,
        font: font,
        scale: scale,
        fill: new ol.style.Fill({
          color: '#ffff00'
        }),
        stroke: new ol.style.Stroke({
          color: 'black',
          width: 2.5
        })
      })
    });
  }
  return selectStyle;
}

function validatePolyCoords() {
  var ret = true;
  $("[class='txtpolyCoord']").each(function() {
    if (!$(this).val()) {
      toastr.error("Some fields are Empty");
      ret = false;
    }
  });
  return ret;
}

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

  return true;
}

function setGraticule(proj) {
  try {
    if (g) map.removeControl(g);
  } catch (e) {}
  g = new ol.control.Graticule({
    step: 1000,
    stepCoord: 5,
    margin: 5,
    projection: 'EPSG:3857',
    formatCoord: function(c) {
      return c.toFixed(1) + " m"
    }
  })
  var c = "#093c58";
  var style = new ol.style.Style();
  style.setStroke(new ol.style.Stroke({
    color: c,
    width: 2
  }));
  style.setFill(new ol.style.Fill({
    color: "#fff"
  }));
  style.setText(new ol.style.Text({
    stroke: new ol.style.Stroke({
      color: c,
      width: 2
    }),
    fill: new ol.style.Fill({
      color: "#fff"
    })
  }));
  g.setStyle(style);
  map.addControl(g);
}

document.addEventListener("keydown", function(event) {
  if (event.which === 27) {
    try {
      addInteraction(selectedInteraction);
      $(".tooltip-measure").hide();
    } catch (e) {}
  }
});

function removeAllThumbs() {
  map.getLayers().forEach(function(lyr) {
    if (lyr.get('name') != undefined && (lyr.get('name').indexOf("PRSS") !== -1 || lyr.get('name').indexOf("SPOT") !== -1)) {
      lyr.setVisible(false);
      $($("#" + lyr.get("name") + "_thumbnail")).attr('data-click-state', 0);
      $("#" + lyr.get("name") + "_thumbnail").removeClass("selectedIcon");
    }
  });
}

function makePolygonfromCoords() {
  var decimalIndex = 0;
  if (validatePolyCoords()) {
    var coords = '';
    var counter = 0;
    $("[class='txtpolyCoord']").each(function() {
      if (counter === 0) {
        coords = this.value;
        decimalIndex = this.value.indexOf('.');
      }
      if (this.name === "polyLon" && counter > 0)
        coords += ' ' + this.value;
      if (this.name === "polyLat")
        coords += ',' + this.value;
      counter++;
      if (this.value.indexOf('.') < decimalIndex)
        decimalIndex = this.value.indexOf('.');
    });
    coords = coords.toString().split(' ');
    var polyCoords = [];
    for (var i in coords) {
      var c = coords[i].split(',');
      if ($("#selProjectionCoord").val() === "3857")
        polyCoords.push([parseFloat(c[0]), parseFloat(c[1])]);
      else if ($("#selProjectionCoord").val() === "4326")
        polyCoords.push(ol.proj.transform([parseFloat(c[0]), parseFloat(c[1])], 'EPSG:4326', 'EPSG:3857'));
    }
    var c = coords[0].split(',');
    if ($("#selProjectionCoord").val() === "3857")
      polyCoords.push([parseFloat(c[0]), parseFloat(c[1])]);
    else if ($("#selProjectionCoord").val() === "4326")
      polyCoords.push(ol.proj.transform([parseFloat(c[0]), parseFloat(c[1])], 'EPSG:4326', 'EPSG:3857'));
    var polyFeature = new ol.Feature({
      geometry: new ol.geom.Polygon([polyCoords])
    })
    if (decimalIndex > 3 && $("#selProjectionCoord").val() === "4326") {
      toastr.error("Input Values and Selected Coordinate System do not match");
    } else {
      drawCount++;
      polyFeature.set("count", drawCount);
      polyFeature.set("calc", formatArea(polyFeature.getGeometry()));
      areaDrawn = formatArea(polyFeature.getGeometry()).replace(" km", "");
      if (parseInt(areaDrawn) < 100) {
        toastr.error("Please draw AOI according to minimum area requirements i.e 100 km <sup>2</sup>");
        if ($("#polygons").val() === null) {
          $("#divActive").hide();
        }
        return;
      }
      polyFeature.set("drawnType", "Polygon");
      vector.getSource().addFeature(polyFeature);
      featureArch = polyFeature;
      var wkt = format.writeGeometry(polyFeature.getGeometry());
      populatePolygonCombo(drawCount);
      endCoords = polyFeature.getGeometry().getCoordinates();
      highlightedAOI = polyFeature;
      activeAOI = wkt;
      fetchData(wkt, polyFeature);
      $('#polycoordsModal').modal('hide');
    }
  } else {
    toastr.error("Invalid Input");
  }
}

function addVectorPoints(actualFeature, type) {
  $("#tbodyPolyCoords").html('');
  coordsArr = [];
  var table = '';
  vectorPoints.getSource().clear();
  var endCoords = actualFeature.getGeometry().getCoordinates()[0];
  for (i = 0; i < endCoords.length; i++) {
    var coords = ol.proj.transform([parseFloat(endCoords[i][0]), parseFloat(endCoords[i][1])], 'EPSG:3857', 'EPSG:4326');
    var feature = new ol.Feature(
      new ol.geom.Point(endCoords[i])
    );
    var id = i + 1;
    feature.set("id", id);
    feature.set("type", type);
    vectorPoints.getSource().addFeature(feature);
    if (type === "Polygon") {
      table += "<tr><td>" + id + "</td><td>" + coords[0].toFixed(7) + "</td><td>" + coords[1].toFixed(7) + "</td></tr>";
    } else {
      coordsArr.push([pinColors[id], coords[0].toFixed(7) + ", " + coords[1].toFixed(7)]);
    }
  }
  $("#tbodyPolyCoords").html(table);
  var centerLocation = getCenterOfExtent(actualFeature.getGeometry().getExtent());
  var centroid = new ol.Feature(
    new ol.geom.Point(centerLocation)
  );
  centroid.set("id", 100);
  centroid.set("type", type);
  vectorPoints.getSource().addFeature(centroid);
}

function populatePolygonCombo(count) {
  emptyCart();
  $('#polygons').append($("<option selected></option>")
    .attr("value", count)
    .text("Polygon " + count));
}

function populateScenesVar(val) {
  if (scenes === '') {
    scenes = val;
  } else {
    scenes += ', ' + val;
  }
}

function resetAllCheckboxes() {
  $('.chkPricing').prop('checked', false);
  resetSensorsArea();
  resetSensorScenes();
  resetSensorAmount();
  emptySensorAreaDivs();
  emptySensorAmountDivs();
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function setOrderProductsFunc(data, acq) {
  $.ajax({
    type: "GET",
    url: "server_scripts/setOrderProducts.php",
    data: data,
    cache: false,
    success: function(data) {
      if (acq === "Archive") {
        resetFlags();
        $.ajax({
          type: "GET",
          url: "server_scripts/updatePricing.php",
          cache: false,
          success: function(data) {}
        });
      } else {
		resetFlags();
      }
    }
  });
}

function resetProducts() {
  $("#prss_products").html('');
  $("#pleiades_products").html('');
  $("#spot_products").html('');
  for (const key in sensor_Products) {
    sensor_Products[key] = '';
  }
}

function resetFlags() {
  for (const key in flagProd) {
    flagProd[key] = 0;
  }
}

function checkSelectedProducts() {
  var array = [];
  $.each($("input[name='chkPricingGroupPRSS']:checked, input[name='chkPricingGroupSPOT']:checked, input[name='chkPricingGroupPleiades']:checked, input[name='chkPricingGroupSV']:checked, input[name='chkPricingGroupPleiadesNeo']:checked"), function() {
    array.push($(this).val());
  });
  if (array.length > 0) {
    array.forEach((val, i) => {
      for (var i = 0, len = sensors.length; i < len; ++i) {
        var sensor = sensors[i];
        var valSensor = val.split("_")[0];
        var prod = val.split("_")[1];
        if (sensor === valSensor) {
          if (sensor_Products[sensor] === '' || typeof sensor_Products[sensor] === "undefined") {
            sensor_Products['products' + sensor] = prod;
          } else
            sensor_Products['products' + sensor] += ', ' + prod;
        }
      }
    });
    if ($(".chkSPOT").is(":not(:disabled)") && $('#15mPXS').is(':not(:checked)') && $('#15mP').is(':not(:checked)') && $('#6mXS').is(':not(:checked)')) {
      toastr.error("Select SPOT 6/7 product(s) to continue");
      return;
    } else if ($(".chkPRSS").is(":not(:disabled)") && $('#098PanS').is(':not(:checked)') && $('#098PanC').is(':not(:checked)') && $('#289MultiS').is(':not(:checked)') && $('#Bundle').is(':not(:checked)')) {
      toastr.error("Select PRSS-1 product(s) to continue");
      return;
    } else if ($(".chkPleiades").is(":not(:disabled)") && $('#05PMS').is(':not(:checked)') && $('#05P').is(':not(:checked)') && $('#2MS').is(':not(:checked)')) {
      toastr.error("Select Pleidas product(s) to continue");
      return;
    } else if ($(".chkPleiadesNeo").is(":not(:disabled)") && $('#03PMS').is(':not(:checked)') && $('#03P').is(':not(:checked)') && $('#1.2MS').is(':not(:checked)')) {
      toastr.error("Select Pleidas product(s) to continue");
      return;
    } else if ($(".chkSV").is(":not(:disabled)") && $('#05PanS').is(':not(:checked)') && $('#05PanC').is(':not(:checked)') && $('#2MultiSS').is(':not(:checked)') && $('#2Bundle').is(':not(:checked)')) {
      toastr.error("Select Super View product(s) to continue");
      return;
    } else {
      processOrder($("#proceedOrder").text());
      $(".disablingDiv").show();
      populateProducts();
      checkOrderType();
      // orderedarea_archive = 0;
      var jsonString = JSON.stringify(array);
      var price_payload = '';
      for (const key in sensor_area) {
        var area = sensor_area[key];
        // orderedarea_archive += parseInt(area);
        var sensor = key.toLowerCase();
        if (price_payload == '') {
          price_payload = sensor + "area=" + sensor_area[key];
        } else {
          price_payload += "&" + sensor + "area=" + sensor_area[key];
        }
      }
      price_payload += "&acquisition=" + acquisition;
      checkPrice(jsonString, price_payload, acquisition);
    }
  } else {
    toastr.error("Please Select at least One Product to proceed");
  }
}

function populateProducts() {
  for (const key in sensor_Products) {
    if (sensor_Products[key] === '' || typeof sensor_Products[key] === "undefined") {
      sensor_Products[key] = 'N/A';
    }
  }
  for (const key in sensor_Products_Div) {
    $("#" + sensor_Products_Div[key]).html(sensor_Products[key]);
  }
}

function checkOrderType() {
  acquisition = 'Fresh';
  for (const key in sensor_Products) {
    if (sensor_Products[key] !== '' || typeof sensor_Products[key] !== "undefined") {
      acquisition = 'Archive';
    }
  }
}

function checkPrice(json, payload, acq) {
  $.ajax({
    type: "POST",
    url: "server_scripts/getPrice.php?" + payload,
    data: {
      data: json
    },
    cache: false,
    success: function(data) {
      if (acq === 'Archive') {
        $(".disablingDiv").show();
        var price = jQuery.parseJSON(data);
        $("#prssamount").text(price.prssprice);
        $("#spotamount").text(price.price);
        $("#pleiadesamount").text(price.pleiadesprice);
        $("#pleiadesneoamount").text(price.pleiadesneoprice);
        $("#svamount").text(price.svprice);
        setTimeout(function() {
          generatePDF($("#proceedOrder").text());
        }, 1000);
      } else if (acq === 'Fresh') {
        var price = jQuery.parseJSON(data);
        var freshprice = 0;
        var fresharea = 0;
        var sat = $("#satSelect").val();
        var divVar = sat.toLowerCase();
        var sensor = sat;
        var antenna_txt = $("#antennaSAR").find(":selected").text();
        var antenna_val = $("#antennaSAR").val();
        var pass_txt = $("#passSAR").find(":selected").text();
        var pass_val = $("#passSAR").val();
        var prodLevel_txt = $("#prodLevelSAR").find(":selected").text();
        var prodLevel_val = $("#prodLevelSAR").val();
        freshprice = price[divVar + "price"];
        fresharea = sensor_area[sensor];
        if ($('#sat' + sensor).is(':visible')) {
          $("#freshProduct").text($("#sat" + sensor).val());
        }
        $("#freshprice").text(freshprice);
        $("#antennaPointing").html(antenna_txt);
        $("#acqPass").html(pass_txt);
        $("#prodLevels").html(prodLevel_txt);

        //////////////////////pdf price//////////////////////////
        $("#aoiarea").html(fresharea + " km\u00B2");
        var sensor = $("#satSelect").val();
        if (sensor == 'SV') {
          sensor = 'Super View';
        }
        $("#sensor").text(sensor);
        $("#acqmode").text($("#selAcqMode").val());
        $("#formStartDate").text($("#freshStartDate").val());
        if ($('#cbMultipleAcq').is(':checked')) {
          $("#formComments").text($("#freshAcqFreq").val());
        } else {
          $("#formComments").text("N/A");
        }
        $("#formEndDate").text($("#freshEndDate").val());
		if(sat == 'SAR') {
			$("#formAngle").text($("#freshAngleLower2").val() + ' - ' + $("#freshAngleUpper2").val());
			$("#formCloud").text('N/A');
		} else{
			$("#formAngle").text($("#freshAngleLower").val() + ' - ' + $("#freshAngleUpper").val());
			$("#formCloud").text($("#freshCloudLower").val() + ' - ' + $("#freshCloudUpper").val());
		}


        if (orderid === null || orderid == undefined)
          orderid = generateOrderID();
        $("#freshorderid").text(orderid);
        processOrder('fresh');
        generatePDF('Generate', 'fresh', orderid);
      }
    }
  });
}

function makePDFScenesDiv(pdf, div) {
  pdf.autoTable({
    html: div,
    margin: {
      right: 10,
      left: 10,
      top: 70
    },
    tableWidth: 'auto',
    tableHeight: 'auto',
    bodyStyles: {
      fillColor: '#9ab7c6',
      textColor: 000,
      fontSize: 10
    },
    alternateRowStyles: {
      fillColor: [238, 238, 238],
    },
    didParseCell: function(table) {
      if (table.section === 'head') {
        table.cell.styles.textColor = '#fff';
        table.cell.styles.fillColor = '#0d5881';
        table.cell.styles.fontSize = 15;
      }
    },
    columnStyles: {
      0: {
        cellWidth: 50
      },
      1: {
        cellWidth: 300
      }
    }
  });
}

function getAllFlags(val) {
  var str = '';
  for (const key1 in flagProd) {
    if (str === '') {
      str = key1 + '=' + flagProd[key1];
    } else {
      str += '&' + key1 + '=' + flagProd[key1];
    }
  }
  for (const key in sensor_area) {
	  str += '&' + key.toLowerCase() + 'A=' + sensor_area[key];
	  // if(val === 'fresh'){
		//   str += '&' + key.toLowerCase() + 'A=0';
	  // } else{
		// 	str += '&' + key.toLowerCase() + 'A=' + sensor_area[key]
	  // }
  }
  return str;
}

function resetSensorsArea() {
  for (const key in sensor_area) {
    sensor_area[key] = 0;
  }
}

function resetSensorScenes() {
  for (const key in sensor_scenes) {
    sensor_scenes[key] = 0;
  }
}

function resetSensorAmount() {
  for (const key in sensor_amount) {
    sensor_amount[key] = 0;
  }
}

function emptySensorAreaDivs() {
  $("#spotarea").html("");
  $("#prssarea").html("");
  $("#pleiadesarea").html("");
  $("#pleiadesneoarea").html("");
  $("#svarea").html("");
}

function emptySensorAmountDivs() {
  $("#spotamount").html("");
  $("#prssamount").html("");
  $("#pleiadesamount").html("");
  $("#pleiadesneoamount").html("");
  $("#svamount").html("");
}

function emptyProdDivs() {
  $("#ulprssscenes").html('');
  $("#ulpleiadesscenes").html('');
  $("#ulpleiadesneoscenes").html('');
  $("#ulsvoscenes").html('');
  $("#ulspotscenes").html('');
  $("#prss_products").html('');
  $("#pleiades_products").html('');
  $("#spot_products").html('');
  $("#grandTotal").html('');
}

function getPayload() {
  var str = '';
  for (const key in sensor_area) {
    var area = sensor_area[key];
    var sensor = key.toLowerCase();
    if (str == '') {
      str = sensor + "area=" + sensor_area[key];
    } else {
      str += "&" + sensor + "area=" + sensor_area[key];
    }
  }
  return str;
}

function populateAreaArr(feature, intersection, iter) {
  var sensor = iter;
  if (feature.includes(scenesSubtring_dict[sensor])) {
    sensor_scenes[sensor] = parseInt(sensor_scenes[sensor]) + 1;
    sensor_area[sensor] = parseInt(sensor_area[sensor]) + parseInt(Math.round(turf.convertArea(turf.area(intersection), "meters", "kilometers")));
  }
}

function insertOrderDetailsFunc(insertPayload, acq, rem) {
  $.ajax({
    type: "GET",
    url: "server_scripts/insertOrderDetails.php?" + insertPayload,
    success: function(data) {
      if (acq === "fresh") {
        if (data === "Success") {
          if ($('#satSelect').val() === 'PleiadesNeo') {
            $("#neo_quotaValue").text(rem.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          } else if ($('#satSelect').val() === 'SV') {
            $("#sv_quotaValue").text(rem.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          }
        }
        toastr.success("Fresh Acquisition Order Placed");
        factor = 0;
        emptyCart();
        FreshPDF(orderid);
        var flagString = '';

        if(acq == 'fresh') {
          var sat = $("#satSelect").val();
          var valSat = $("#sat" + sat).val();

          var key = prodToFlags[valSat];
          flagProd[key] = 1;
        } else{
          for (const sensor_prod in sensor_Products) {
            var selected_prod = sensor_Products[sensor_prod];
            for (const prod in prodToFlags) {
              if (selected_prod == prod) {
                var key = prodToFlags[prod];
                flagProd[key] = 1;
              }
            }
          }
        }
        flagString = getAllFlags('fresh');
        var sat = $("#satSelect").val();
        sensor_Products["products" + sat] = $("#sat" + sat).val();
        var dataString = 'productPrss=' + productsKeys[sensor_Products['productsPRSS']] +
        '&productSpot=' + productsKeys[sensor_Products['productsSPOT']] +
        '&productPleiades=' + productsKeys[sensor_Products['productsPleiades']] +
        '&productPleiadesNeo=' + productsKeys[sensor_Products['productsPleiadesNeo']] +
        '&productSV=' + productsKeys[sensor_Products['productsSV']] +
        '&productSAR=' + productsKeys[sensor_Products['productsSAR']] +
        '&orderid=' + orderid +
        '&type=Fresh' +
        '&' + flagString;
        setOrderProductsFunc(dataString, 'Fresh');
      } else if (acq === "archive") {
        toastr.success("Order Placed");
        factor = 0;
        emptyCart();
        // resetProducts();
      }
    }
  });
}

function getInfoTable(sensor, response) {
  var obj_info = infoTable_dict[sensor];
  var infoTable = "<table class='informationTable'><tbody>" +
    "<tr>" +
    "<td><h2 class='headers'>Information</h2></td><td><button type='button' id='close-infoTable' onclick='closePanes(this.id)' class='close'>&times;</button></td>" +
    "</tr>" +
    "<tr>";
  var len = Object.keys(obj_info).length;
  Object.entries(obj_info).forEach(([key, value], index) => {
    if ((index + 1) === len) {
      infoTable += "<tr>" +
        "<td style='text-align: center;' colspan='2'><h3 style='color: #0d5881;text-align: center;'>" + key + "</h3><img class='infoThumb' onclick='showFullImage(this.id);' id='" + response[value] + "' src='" + response[value] + "'</td>" +
        "</tr>";
    } else {
      if (typeof value === "object") {
        infoTable += "<tr><td class='infoKey'>" + key.bold() + "</td><td class='infoVal'>" + getInfoVal(response[value[0]], value[0]) + " " + getInfoVal(response[value[1]], value[1]) + "</td></tr>";
      } else {
        infoTable += "<tr><td class='infoKey'>" + key.bold() + "</td><td class='infoVal'>" + getInfoVal(response[value], value) + "</td></tr>";
      }
    }
  });
  infoTable += "</tbody></table>";
  return infoTable;
}

function getInfoVal(resp, val) {
  var txt = '';
  if (typeof resp === "undefined") {
    txt = val;
  } else {
    txt = resp;
  }
  return txt;
}

function ConvertDMSToDEG(degrees, minutes, seconds, direction) {
  var deg = (Number(degrees) + Number(minutes) / 60 + Number(seconds) / 3600).toFixed(6);
  if (direction == "S" || direction == "W") {
    deg = deg * -1;
  } // Don't do anything for N or E
  return deg;
}

function hideAllFreshProdDivs() {
  $(".freshProdDivs").hide();
  // $("#satSPOT").hide();
  // $("#satSAR").hide();
  // $("#satPleiadesNeo").hide();
  // $("#satSV").hide();
}


// ALTER TABLE `orders` ADD COLUMN acq_mode varchar(45);
// ALTER TABLE `orders` ADD COLUMN order_priority varchar(45);

// ALTER TABLE `orders` ADD `cancel_user` int NOT NULL DEFAULT(1);
// ALTER TABLE `orders` ADD `cancel_admin` int NOT NULL DEFAULT(1);
// INSERT INTO `status` (id, status) VALUES(5, 'Cancelled');

$("#cancelFactor").on('click', function() {
  factor = 0;
})

function getCurrentQuota() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      type: 'POST',
      url: 'server_scripts/getQuota.php',
      success: function(data) {
        resolve(data)
      },
      error: function(err) {
        reject(err)
      }
    });
  });
}

// orbitography section
function getOrbitoData(rollAngleValue){
  $("#dataOrbito").hide();
  $("#loadingIcon").show();
    
  var orbitoStartDate=$("#orbitoStartDate").val();
  var orbitoEndDate=$("#orbitoEndDate").val();

  var satellites=$("#dropDownOrbitoSatellites").val();
  rollAngle=rollAngleValue;
  //console.log(rollAngle);

  var spot6='';
  var pleiades='';
  var pneo='';
  var prss='';
  var taijing='';
  var sv=''; //SV1_03 (0.5m) and SV2_gfdm (.42)
  

  //var orbitoCriteria='';

  if(satellites.includes('SPOT-6'))
    spot6='yes';
  
  if(satellites.includes('Pleiades'))
    pleiades='yes';

  if(satellites.includes('PNeo'))
    pneo='yes';

  if(satellites.includes('PRSS'))
    prss='yes';

  if(satellites.includes('Taijing'))
    taijing='yes';

  if(satellites.includes('SuperView'))  
    sv='yes';
  
  //get activated polygon AOI
  var wkt='';
  //wkt='POLYGON((8147310.336884095 3987278.375566981,8297738.408549322 3987278.375566981,8297738.408549322 4092761.474600524,8147310.336884095 4092761.474600524,8147310.336884095 3987278.375566981))';
  var totalFeatures = vector.getSource().getFeatures();
  for (var i = 0; i < totalFeatures.length; i++) {
    if (totalFeatures[i].get('count') == $("#polygons").val()) {
         wkt = format.writeGeometry(totalFeatures[i].getGeometry());
      }
  }
  console.log(totalFeatures.length);
  
  //check search by AOI is checked or not
  var searchByAOI=document.getElementById('chkSearchByAOI').checked
  
  // orbitoCriteria += "(date1 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date2 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date3 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date4 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date5 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date6 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date7 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date8 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date9 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date10 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date11 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date12 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date13 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date14 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " +
  //                   "OR (date15 between '" + $("#orbitoStartDate").val() + "' AND '" + $("#orbitoEndDate").val() + "') " ;
  // //console.log(orbitoCriteria);

  var testsourceOrbito = new ol.source.Vector({   
    url: "server_scripts/azo.php?geom="+wkt+"&searchByAOI="+searchByAOI+"&rollAngle="+rollAngle+"&startDate="+$("#orbitoStartDate").val()+"&endDate="+$("#orbitoEndDate").val()+ "&spot=" + spot6 + "&prss=" + prss + "&pleiades=" + pleiades + "&sv=" + sv + "&pneo=" + pneo + "&taijing="+taijing,
    format: new ol.format.GeoJSON(),       
});


resultVectorSatelliteOrbito.setSource(testsourceOrbito);
  testsourceOrbito.once('change', function(e) { 
      if (testsourceOrbito.getState() === 'ready') {
          $("#loadingIcon").hide();
          //move(feature.getGeometry().getExtent());
          resultFeatures = testsourceOrbito.getFeatures(); 
          //console.log(resultFeatures);        

        
         if (resultFeatures.length > 0) {  //console.log(resultFeatures.length);
          var info;
          var content;
          tableData = "";
          tableData += '<div class="orbito-results-header"><div class="orbito-results-header-left"><div class="orbito-nb-items">'+resultFeatures.length+' items</div></div><div class="orbito-results-header-right"><div class="orbito-export"><!--<button class="export-button" name="export" type="button" value="export" title="Launch export"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M22.491 13.166h-3.84v-6.583h-5.029v6.583h-3.749l6.309 6.309z"></path><path d="M28.709 18.834v0c-1.097 0-2.011 0.914-2.011 2.011v3.749h-21.303v-3.474c0-1.097-0.914-2.011-2.011-2.011s-2.011 0.914-2.011 2.011v7.589h29.44v-7.771c0-1.189-0.914-2.103-2.103-2.103z"></path></g></svg></button>--></div><div class="orbito-all-orbits"><button id="btnToggleAllOrbits" class="toggle-orbit" title="Toggle all orbits" onclick="toggleAllOrbits();"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M19.9,6.5c-2.7,0-5.4,1-7.3,2.7C12.3,9.1,11.9,9,11.4,9c-2,0-3.6,1.6-3.6,3.6c0,0.9,0.4,1.8,1,2.6 c-0.3,1.1-0.5,2.1-0.5,3c0,6.3,5.1,11.5,11.5,11.5s11.6-5.1,11.6-11.5S26.3,6.5,19.9,6.5z M19.9,27c-5,0-9.1-4-9.1-9 c0-0.5,0.1-1.1,0.2-1.6c0-0.2,0-0.3,0.1-0.5c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c5,0,9.1,4.1,9.1,9.1C29,23.1,24.9,27,19.9,27z"></path><path d="M3.7,11.8c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c1.1,0,2.1,0.2,3,0.5h0.1h0.1c1.1-0.2,2.3-0.4,3.3-0.4h0.7l-0.7-0.4c-1.9-1.4-4.2-2.1-6.7-2.1c-2.7,0-5.4,0.9-7.3,2.7 C4.8,4.9,4.4,4.9,4,4.9C2,4.9,0.5,6.4,0.5,8.3c0,0.9,0.4,1.8,1,2.6c-0.3,1-0.5,2-0.5,3c0,4.1,2.1,7.8,5.7,9.9l0.5,0.3l-0.2-1 c-0.2-0.7-0.3-1.5-0.4-2.1v-0.1l-0.1-0.1c-2-1.7-3.1-4.3-3.1-6.9c0-0.5,0.1-1.1,0.2-1.6C3.6,12.1,3.7,11.9,3.7,11.8z"></path></g></svg></button></div><div class="orbito-all-corridors"><button id="btnToggleAllCorridors" class="toggle-corridor" title="Toggle all corridors" onclick="toggleAllCorridors();"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M22.2,0.7c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3c0.7,0,1.4-0.4,1.7-1 l15.8-26C23.5,2.6,23.2,1.3,22.2,0.7z"></path><path d="M28.5,3.8L28.5,3.8c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3 c0.7,0,1.4-0.4,1.7-1l15.8-26C29.8,5.6,29.5,4.4,28.5,3.8z"></path><path d="M4,17.2c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,9,9,8.2,8.6,7.5 c1.3-1.1,2.9-1.9,4.6-2.3L15,2.3c-3.1,0.3-6,1.6-8.3,3.5C6.2,5.5,5.5,5.3,4.9,5.3c-2.4,0-4.4,2-4.4,4.4C0.5,11,1,12.2,2,13 c-0.4,1.4-0.6,2.7-0.6,4.2c0,2,0.4,3.8,1.1,5.6l1.8-3C4.1,19,4,18.1,4,17.2z"></path><path d="M30.4,11.5l-1.8,3c0.2,0.9,0.3,1.9,0.3,2.9c0,5.7-4,10.6-9.3,12l-1.7,2.8c7.6-0.7,13.6-7.1,13.6-14.9 C31.5,15.2,31.1,13.2,30.4,11.5z"></path></g></svg></button></div></div></div>';
          tableData += '<table id="table_id" class="table table-striped table-bordered tablesorter" style="width:100%">';
          tableData += "<thead> <tr><th style='font-weight: bold;font-size: 1.5rem'>Satellite</th><th style='font-weight: bold;font-size: 1.5rem'>Orbit</th><th style='font-weight: bold;font-size: 1.5rem'>Date</th><th></th></tr> </thead>";
          tableData += "<tbody id='tablebody'>"; 
          
          for (var i = 0; i < resultFeatures.length; i++) {//console.log(resultFeatures[i].get('satellite'));
            if((resultFeatures[i].get('satellite')=='SPOT6')) //Orange
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(243, 110, 44); background-color: rgba(243, 110, 44, 0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
            if((resultFeatures[i].get('satellite')=='Pleiades-1A') || (resultFeatures[i].get('satellite')=='Pleiades-1B')) //Pink
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(220, 12, 203); background-color: rgba(220, 12, 203, 0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
            if((resultFeatures[i].get('satellite')=='PNEO3') || (resultFeatures[i].get('satellite')=='PNEO4')) //Purple
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(106, 49, 220); background-color: rgb(106, 49, 220,0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
            if((resultFeatures[i].get('satellite')=='PRSS')) //Green
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(0,134,49); background-color: rgba(0,134,49, 0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
            if((resultFeatures[i].get('satellite')=='Taijing')) //Black
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
            if((resultFeatures[i].get('satellite')=='SuperView')) //Steel Blue
            {
              $satelliteNameTD="<td><span class='satellite-name' style='color: rgb(70, 130, 180); background-color: rgba(70, 130, 180, 0.1);'>"+ resultFeatures[i].get('satellite').bold() +"</span></td>";
            }
          tableData += "<tr class='orbitoRowData' onmousemove='showOrbitPath(this)' onmouseleave='hideOrbitPath(this)'>" +
          $satelliteNameTD +
            "<td style='color:#000 !important'>"+ resultFeatures[i].get("orbitNumber").bold() +"</td>" +
            "<td style='color:#000 !important'><strong>"+resultFeatures[i].get("date")+"</strong></td>" +            
            "<td><button id='"+resultFeatures[i].get("satellite")+'_'+resultFeatures[i].get("orbitNumber")+"_orbitoVisibility' class='toggle-orbit toggleOrbit' title='Toggle orbit' onclick='toggleOrbito(this.id);'><svg viewBox='0 0 32 32' class='pictos cz-color-3684147' style='width: 1.9rem; height: 1.9rem;'><path d='M16.5,1c-3.7,0-7.1,1.4-9.8,3.6C6.2,4.3,5.5,4.1,4.9,4.1c-2.4,0-4.4,2-4.4,4.4C0.5,9.8,1,11,2,11.8 c-0.4,1.4-0.6,2.7-0.6,4.2c0,8.3,6.7,15,15,15s15.1-6.7,15.1-15S24.8,1,16.5,1z M16.5,28.5C9.6,28.5,4,22.9,4,16 c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,7.8,9,7,8.6,6.3c2.1-1.7,4.8-2.7,7.8-2.7 c6.8,0,12.5,5.6,12.5,12.5C28.9,22.8,23.3,28.5,16.5,28.5z' class='cz-color-3684147'></path></svg></button><button id='"+resultFeatures[i].get("satellite")+'_'+resultFeatures[i].get("orbitNumber")+"_corridorVisibility' class='toggle-corridor' title='Toggle corridor' onclick='toggleCorridor(this.id);'><svg viewBox='0 0 32 32' class='pictos cz-color-3684147' style='width: 1.9rem; height: 1.9rem;'><g class='cz-color-3684147'><path d='M22.2,0.7c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3c0.7,0,1.4-0.4,1.7-1 l15.8-26C23.5,2.6,23.2,1.3,22.2,0.7z' class='cz-color-3684147'></path><path d='M28.5,3.8L28.5,3.8c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3 c0.7,0,1.4-0.4,1.7-1l15.8-26C29.8,5.6,29.5,4.4,28.5,3.8z' class='cz-color-3684147'></path><path d='M4,17.2c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,9,9,8.2,8.6,7.5 c1.3-1.1,2.9-1.9,4.6-2.3L15,2.3c-3.1,0.3-6,1.6-8.3,3.5C6.2,5.5,5.5,5.3,4.9,5.3c-2.4,0-4.4,2-4.4,4.4C0.5,11,1,12.2,2,13 c-0.4,1.4-0.6,2.7-0.6,4.2c0,2,0.4,3.8,1.1,5.6l1.8-3C4.1,19,4,18.1,4,17.2z' class='cz-color-3684147'></path><path d='M30.4,11.5l-1.8,3c0.2,0.9,0.3,1.9,0.3,2.9c0,5.7-4,10.6-9.3,12l-1.7,2.8c7.6-0.7,13.6-7.1,13.6-14.9 C31.5,15.2,31.1,13.2,30.4,11.5z' class='cz-color-3684147'></path></g></svg></button></td>"
            "</tr>";
          }
          tableData += "</tbody>";
          tableData += "</table>";
          
          $("#dataOrbito").show();
          $("#dataOrbito").html('');
          $("#dataOrbito").append(tableData);
        }
        else {
          var info;
          var content;
          tableData = "";
          tableData += '<div class="orbito-results-header"><div class="orbito-results-header-left"><div class="orbito-nb-items">'+resultFeatures.length+' items</div></div><div class="orbito-results-header-right"></div></div>';
          tableData += '<table id="table_id" class="table table-striped table-bordered tablesorter" style="width:100%">';
          tableData += "<thead> <tr><th style='font-weight: bold;font-size: 1.5rem'>Satellite</th><th style='font-weight: bold;font-size: 1.5rem'>Orbit</th><th style='font-weight: bold;font-size: 1.5rem'>Date</th><th></th></tr> </thead>";
          tableData += "<tbody id='tablebody'>"; 
          tableData += "<tr>" +    
            "<td colspan='3' style='color:#000 !important'><strong>No data found.</strong></td>" +            
            "<td>"
            "</tr>";

          tableData += "</tbody>";
          tableData += "</table>";
          
          $("#dataOrbito").show();
          $("#dataOrbito").html('');
          $("#dataOrbito").append(tableData);

        }        
      }
    });
  // console.log(orbitoCriteria);
}