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

$(document).ready(function () {
  var dayInMilliseconds = 1000 * 60 * 60 * 24;
  setInterval(function () {
    try {
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'server_scripts/updatePricingFresh.php',
        success: function (response) {
        }
      });
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'server_scripts/updatePricing.php',
        success: function (response) {
        }
      });
    } catch (e) { }
  }, dayInMilliseconds);

  $("#btnLogout").click(function () {
    eraseCookie('shown');
  });

  // orbitography rollangle section
  document.getElementById("rollAngle").addEventListener("change", function () {
    let v = parseInt(this.value);
    if (v < 5) this.value = 5;
    if (v > 45) this.value = 45;
  })

  document.getElementById("dropDownOrbitoSatellites").addEventListener("change", function () {
    console.log(document.getElementById("dropDownOrbitoSatellites").selectedOptions.length);
    let v = document.getElementById("dropDownOrbitoSatellites").selectedOptions.length;
    if (v > 0) document.getElementById("btnSearchOrbito").disabled = false;
    else document.getElementById("btnSearchOrbito").disabled = true;
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
    'Incidence Angle': ['global_incidence', 'Â°'],
    'Incidence Angle(Across Track)': ['along_track_incidence', 'Â°'],
    'Incidence Angle(Along Track)': ['ortho_track_incidence', 'Â°'],
    'Orientation Angle': ['orientation', 'Â°'],
    'Product': 'SPOT 1.5m',
    'Resolution': '1.5m',
    'Satellite': ['platform_name', 'platform_s_no'],
    'Data Strip Type': 'data_strip_type',
    'Scene ID': 'scene_id',
    'Sun Azimuth': ['sun_azi', 'Â°'],
    'Sun Elevation': ['sun_ele', 'Â°'],
    'Scene Orientation': ['scene_orient', 'Â°'],
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
    'Sun Azimuth': ['sun_azimuth', 'Â°'],
    'Sun Elevation': ['sun_elevation', 'Â°'],
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
    'Sun Azimuth': ['sun_azimuth', 'Â°'],
    'Sun Elevation': ['sun_elevation', 'Â°'],
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
  filter: function (feature, layer) {
    if (layer == null)
      return;
    else {
      if (layer.get('name') == "Drawn Points" || layer.get('name') == "Drawn Polygons" || layer.get('name') == "Clipped Polygons" || layer.get('name') == "alldata")
        return false;
      else
        return true;
    }
  },
  style: function (f) {
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
  style: function (f) {
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
  style: function (f) {
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
  style: function (f) {
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
  style: function (f) {
    // var olFeature = geojsonFormat.writeFeatureObject(f);
    var titleId = f.get('data_id');
    if (typeof (f.get('dataset_name')) !== "undefined" && f.get('dataset_name').indexOf("PHR") !== -1)
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
var toggleOrbitSelected = [];
var toggleOrbitCorridorSelected = [];
var ftr = null;
var rollAngle = null;

var resultVectorSatelliteCorridor = new ol.layer.Vector({
  //displayInLayerSwitcher: false,
  style: function (f) {
    var satellite = f.get('satellite');
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
    } else if (satellite === 'inprogressOrders') {
      fillColor = 'rgba(255, 0, 0, 0.1)';
      strokeColor = 'rgba(255, 0, 0)';
    }
    else {
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
          color: fillColor
        }),

      })
  }
});


//SPOT6, Pleiades, PNeo,PRSS, SuperView, Taijing  styling
var resultVectorSatelliteOrbito = new ol.layer.Vector({
  displayInLayerSwitcher: false,
  style: function (f) {
    var satellite = f.get('satellite');
    var fillColor, strokeColor, textColor, textStrokeColor;
    var orbitId = f.get('orbitNumber');

    //console.log(f.get('satellite'));
    //console.log(satellite);
    // Set different colors based on the satellite property
    if (satellite == 'SPOT6') {
      fillColor = 'rgba(243, 110, 44,0.1)';
      strokeColor = 'rgba(243, 110, 44)';
      textColor = 'Red';
      textStrokeColor = '#FFFF00';
    } else if (satellite == 'Pleiades-1A' || satellite == 'Pleiades-1B') {
      fillColor = 'rgba(220, 12, 203,0.1)';
      strokeColor = 'rgba(220, 12, 203)';
      textStrokeColor = '#FFFF00';//#FFFF00
      textColor = 'rgba(220, 12, 203)';
    }
    else if (satellite == 'PNEO3' || satellite == 'PNEO4') {
      fillColor = 'rgb(106, 49, 220,0.1)';
      strokeColor = 'rgb(106, 49, 220)';
      textStrokeColor = '#FFFF00';//#FFFF00
      textColor = 'rgb(106, 49, 220)';
    }
    else if (satellite == 'PRSS') {
      fillColor = 'rgb(0,134,49,0.1)';
      strokeColor = 'rgb(0,134,49, 220)';
      textStrokeColor = '#FFFF00';//#FFFF00
      textColor = 'rgb(0,134,49)';
    }
    else if (satellite == 'SuperView') {
      fillColor = 'rgb(70,130,180,0.1)';
      strokeColor = 'rgb(70,130,180, 220)';
      textStrokeColor = '#FFFF00';//#FFFF00
      textColor = 'rgb(0,134,49)';
    }
    else if (satellite == 'Taijing') {
      fillColor = 'rgb(0,0,0,0.1)';
      strokeColor = 'rgb(0,0,0, 220)';
      textStrokeColor = '#FFFF00';//#FFFF00
      textColor = 'rgb(0,0,0)';
    }
    else if (satellite == 'inprogressOrders') {
      //fillColor = 'rgb(255,0,0,0.1)';
      fillColor = 'rgb(255,255,255,255,0.1)'; //setting to white to hide
      strokeColor = 'rgb(255,0,0, 220)';
      textStrokeColor = '#FFFF00';//#FFFF00
      textColor = 'rgb(255,0,0)';
    }

    //console.log(strokeColor);
    if (f.get('hidden') == "true")
      return null;
    else if (f.get('satellite') != "inprogressOrders")
      return new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: strokeColor,
          width: 4
        }),
        text: new ol.style.Text({
          font: '18px Calibri,sans-serif',
          //overflow:true,
          fill: new ol.style.Fill({
            color: textColor
          }),
          stroke: new ol.style.Stroke({
            color: textStrokeColor,
            width: 3
          }),
          text: satellite + "(" + orbitId + ")"
        }),
        //minResolution: 0
        // overflow:true
      })
    else //this style is for inprogress orders, to hide vector labels
      return new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: strokeColor,
          width: 4
        }),
        text: new ol.style.Text({
          font: '18px Calibri,sans-serif',
          //overflow:true,
          fill: new ol.style.Fill({
            color: textColor
          }),
          stroke: new ol.style.Stroke({
            color: textStrokeColor,
            width: 3
          }),
          text: ""
        }),
        //minResolution: 0
        // overflow:true
      })

  }
});

var formatArea = function (polygon) {
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

var formatLength = function (line) {
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
      url: 'http://192.168.10.27:8080/geoserver/gwc/service/wmts?',
      // url: 'getImagery.php',
      // layer: 'oms:' + lyrName,
      layer: 'PAKISTAN:baselayer_0',
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
  getCurrentQuota().then(function (data) {
    var current_quota = JSON.parse(data)[0];
    $("#sv_quotaValue").html(parseFloat(current_quota.sv_quota).toFixed(2));
    $("#neo_quotaValue").html(parseFloat(current_quota.neo_quota).toFixed(2));
  }).catch(function (err) {
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
        ol.format.KML,
        ol.format.TopoJSON,
      ],
    });
    dragAndDropInteraction.on('addfeatures', function (event) {
      console.log(event.features);
      const vectorSource = new ol.source.Vector({
        features: event.features,
      });
      console.log(event.features[0]);
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
  var updatePermalink = function (evt) {
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
  window.addEventListener('popstate', function (event) {
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

  map.getInteractions().getArray().forEach(function (interaction) {
    if (interaction instanceof ol.interaction.DoubleClickZoom) {
      interaction.setActive(false);
    }
  });


  //orbitography secction
  $('#chkOrbitography').click(function () {
    $('#dvOrbitography-panel').animate({ width: 'toggle' }, 350);
    //$('.divControls').show();
  });

  $('#iconClose').click(function () {
    $('#dvOrbitography-panel').animate({ width: 'hide' }, 350);
  });

  activatePointer(false);
  // UI Code
  $("#btnDelete").on('click', function () {
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

  $("#btnDraw").on('click', function () {
    if ($('#toolsArea').is(":visible"))
      $('#toolsArea').hide();
    else
      $('#toolsArea').show();
  });
  $("#pointOptions").on('click', function () {
    if ($("#iPoint").hasClass("fa-chevron-circle-right")) {
      $("#distanceBufferPoint").show("slide");
      $("#iPoint").removeClass().addClass("fas fa-chevron-circle-left");
    } else if ($("#iPoint").hasClass("fa-chevron-circle-left")) {
      $("#distanceBufferPoint").hide("slide");
      $("#iPoint").removeClass().addClass("fas fa-chevron-circle-right");
      $("#iLine").removeClass().addClass("fas fa-chevron-circle-right");
    }
  })
  $("#lineOptions").on('click', function () {
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

  select.on('select', function (e) {
    evt.selected.forEach(function (feature) {
      selectSource.push(feature);
    });
    evt.deselected.forEach(function (feature) {
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

  $('#chkGraticule').click(function () {
    if ($("#gridI").hasClass('gridOn')) {
      $("#gridI").removeClass('gridOn');
      try {
        if (g) map.removeControl(g);
      } catch (e) { }
    } else {
      $("#gridI").addClass('gridOn');
      setGraticule();
    }
  });

  $("#satImgPriority").change(function () {
    var txt = $("#satImgPriority option:selected").text();
    $("#pdf_OrderPriority").html(txt);
  });
  $("#satAcqModes").change(function () {
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

  $('#cbMultipleAcq').change(function () {
    if ($('#cbMultipleAcq').is(':checked')) {
      $(".acqFreshFreqDiv").show();
      $("#freshAcqFreq").show();
    } else
      $(".acqFreshFreqDiv").hide();
  });

  $('.chkPleiades').change(function () {
    var len = $('input[name=Pleiades]:checkbox:checked').length;
    $("#countPleiadesProd").text(len);
    if (len == 0)
      $("#cbPleiadesMain").attr('checked', false);
    else if (len == 7)
      $("#cbPleiadesMain").prop('checked', true);
  });
  $('.chkPleiadesNeo').change(function () {
    var len = $('input[name=PleiadesNeo]:checkbox:checked').length;
    $("#countPleiadesNeoProd").text(len);
    if (len == 0)
      $("#cbPleiadesNeoMain").attr('checked', false);
    else if (len == 7)
      $("#cbPleiadesNeoMain").prop('checked', true);
  });
  $('.chkSV').change(function () {
    var len = $('input[name=SV]:checkbox:checked').length;
    $("#countSVProd").text(len);
    if (len == 0)
      $("#cbSVMain").attr('checked', false);
    else if (len == 7)
      $("#cbSVMain").prop('checked', true);
  });
  $('.chkSpot67').change(function () {
    var len = $('input[name=spot67]:checkbox:checked').length;
    $("#countSpot67Prod").text(len);
    if (len == 0)
      $("#cbSPOTMain").attr('checked', false);
    else if (len == 4)
      $("#cbSPOTMain").prop('checked', true);
  });
  $('.chkPRSS').change(function () {
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
  $('#cbPRSSMain').change(function () {
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
  $('#cbSPOTMain').change(function () {
    if ($('#cbSPOTMain').is(":checked"))
      $('input[name=spot67]').prop('checked', true);
    else
      $('input[name=spot67]').prop('checked', false);
  });
  $('#cbSpot5Main').change(function () {
    if ($('#cbSpot5Main').is(":checked"))
      $('input[name=spot5]').prop('checked', true);
    else
      $('input[name=spot5]').prop('checked', false);
  });
  $('#cbPleiadesMain').change(function () {
    if ($('#cbPleiadesMain').is(":checked"))
      $('input[name=Pleiades]').prop('checked', true);
    else
      $('input[name=Pleiades]').prop('checked', false);
  });
  $('#cbPleiadesNeoMain').change(function () {
    if ($('#cbPleiadesNeoMain').is(":checked"))
      $('input[name=PleiadesNeo]').prop('checked', true);
    else
      $('input[name=PleiadesNeo]').prop('checked', false);
  });
  $('#cbSVMain').change(function () {
    if ($('#cbSVMain').is(":checked"))
      $('input[name=SV]').prop('checked', true);
    else
      $('input[name=SV]').prop('checked', false);
  });

  $('.chkProdMain').change(function () {
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

  $('#applyCriteria').on('click', function () {
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

  $('#satSelect').change(function () {
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
      if (parseFloat(areaDrawn.replace(' km', '')) < 100) {
        toastr.error("Minimum order area for PlÃ©iades Neo is 100 sq. km. Please re-draw");
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
      if (parseFloat(areaDrawn.replace(' km', '')) < 500) {
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

  $("#drawCoord").on('click', function () {
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


  $('#decimalLatitude').bind('change keyup mouseup', function () {
    try {
      convertDecimal();
    } catch (e) { }
    try {
      convertUTM();
    } catch (e) { }
  });


  $('#decimalLongitude').bind('change keyup mouseup', function () {
    try {
      convertDecimal();
    } catch (e) { }
    try {
      convertUTM();
    } catch (e) { }
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
    function (evt) {
      evt.features.forEach(function (feature) {
        originalCoordinates[feature] = feature.getGeometry().getCoordinates();
      });
      evt.features.a[0].on('change', function (e) {

        evt.features.a[0].set("calc", Math.round(turf.convertArea(turf.area(geojsonFormat.writeFeatureObject(evt.features.a[0])), "meters", "kilometers")));
      });
    });
  modify.on('modifyend', function (evt) {
    var index = evt.features.getLength() - 1;
    modifiedFeature = evt.features.a[index];
    if (modifiedFeature.getGeometry().getCoordinates()[0].length <= 5) {
      evt.features.a[index].set("drawnType", "Box");
    } else {
      evt.features.a[index].set("drawnType", "Polygon");
    }
    var modifiedFeatureArea = ol.sphere.getArea(modifiedFeature.getGeometry()) / 1000000;
    evt.features.forEach(function (feature) {
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
  } catch (e) { }
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
    function (evt) {
      try {
        var delFeature = vector.getSource().getFeatureById(deleteID);
        vector.getSource().removeFeature(delFeature);
      } catch (e) { }
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

      listener = sketch.getGeometry().on('change', function (evt) {
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
    function (evt) {
      addAOI(evt.feature, val, 'drawend');
    });

  vector.getSource().on('addfeature', function (e) {
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
  try {
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
      } catch (e) { }
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
    } catch (e) { }
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
  } catch (error) {

  }
}
function getCenterOfExtent(Extent) {
  var X = Extent[0] + (Extent[2] - Extent[0]) / 2;
  var Y = Extent[1] + (Extent[3] - Extent[1]) / 2;
  return [X, Y];
}

function showOrbitPath(row) {//console.log(row);
  //for corridor display
  var ftr = null;
  //console.log(row.childNodes[0].innerText+"_"+row.childNodes[1].innerText+"_orbitoVisibility");
  var orbitoDataID = row.childNodes[0].innerText + "_" + row.childNodes[1].innerText + "_orbitoVisibility";
  //var orbitoCorridorDataID = row.childNodes[0].innerText+"_"+row.childNodes[1].innerText+"_corridorVisibility";
  //console.log(orbitoCorridorDataID);
  var totalFeatures = resultVectorSatelliteOrbito.getSource().getFeatures();

  console.log(totalFeatures.length);
  //console.log(orbitoDataID);
  for (var i = 0; i < totalFeatures.length; i++) {
    if (totalFeatures[i].get('satellite') + "_" + totalFeatures[i].get('orbitNumber') + "_orbitoVisibility" == orbitoDataID) {
      highlightedFeature = totalFeatures[i];

      //for corridor display
      ftr = totalFeatures[i];
      totalFeatures[i].set("hidden", "false");
      console.log(totalFeatures[i]);
    }
  }

  //for corridor dislay on mouse enter
  var satelliteName = row.childNodes[0].innerText;
  var orbitNumber = row.childNodes[1].innerText;

  //console.log("Roll Angle is "+rollAngle);
  var bufferDistance = null;
  if (satelliteName === "SPOT6") {
    if (rollAngle == "5")
      bufferDistance = "61.105";
    else if (rollAngle == "10")
      bufferDistance = "125.7652";
    else if (rollAngle == "15")
      bufferDistance = "192.4252";
    else if (rollAngle == "20")
      bufferDistance = "262.196";
    else if (rollAngle == "25")
      bufferDistance = "337.0774";
    else if (rollAngle == "30")
      bufferDistance = "420.0691";
    else if (rollAngle == "35")
      bufferDistance = "516.8372";
    else if (rollAngle == "40")
      bufferDistance = "624.2709";
    else if (rollAngle == "45")
      bufferDistance = "763.8125";
  }
  else if (satelliteName === "Pleiades-1A" || satelliteName === "Pleiades-1B") {
    if (rollAngle == "5")
      bufferDistance = "61.105";
    else if (rollAngle == "10")
      bufferDistance = "125.7652";
    else if (rollAngle == "15")
      bufferDistance = "192.4252";
    else if (rollAngle == "20")
      bufferDistance = "262.196";
    else if (rollAngle == "25")
      bufferDistance = "337.0774";
    else if (rollAngle == "30")
      bufferDistance = "420.0691";
    else if (rollAngle == "35")
      bufferDistance = "516.8372";
    else if (rollAngle == "40")
      bufferDistance = "624.2709";
    else if (rollAngle == "45")
      bufferDistance = "763.8125";
  }
  else if (satelliteName === "PNEO3" || satelliteName === "PNEO4") {
    if (rollAngle == "5")
      bufferDistance = "61.105";
    else if (rollAngle == "10")
      bufferDistance = "125.7652";
    else if (rollAngle == "15")
      bufferDistance = "192.4252";
    else if (rollAngle == "20")
      bufferDistance = "262.196";
    else if (rollAngle == "25")
      bufferDistance = "337.0774";
    else if (rollAngle == "30")
      bufferDistance = "420.0691";
    else if (rollAngle == "35")
      bufferDistance = "516.8372";
    else if (rollAngle == "40")
      bufferDistance = "624.2709";
    else if (rollAngle == "45")
      bufferDistance = "763.8125";
  }
  else if (satelliteName === "PRSS") {
    // if (rollAngle == "5")
    //   bufferDistance = "111.1";
    // else if (rollAngle == "10")
    //   bufferDistance = "222.2";
    // else if (rollAngle == "15")
    //   bufferDistance = "391.072";
    // else if (rollAngle == "20")
    //   bufferDistance = "543.279";
    // else if (rollAngle == "25")
    //   bufferDistance = "684.376";
    // else if (rollAngle == "30")
    //   bufferDistance = "823.251";
    // else if (rollAngle == "35")
    //   bufferDistance = "957.682";
    // else if (rollAngle == "40")
    //   bufferDistance = "1093.224";
    // else if (rollAngle == "45")
    //   bufferDistance = "1227.655";

    if (rollAngle == "5")
      bufferDistance = "61.105";
    else if (rollAngle == "10")
      bufferDistance = "125.7652";
    else if (rollAngle == "15")
      bufferDistance = "192.4252";
    else if (rollAngle == "20")
      bufferDistance = "262.196";
    else if (rollAngle == "25")
      bufferDistance = "337.0774";
    else if (rollAngle == "30")
      bufferDistance = "420.0691";
    else if (rollAngle == "35")
      bufferDistance = "516.8372";
    else if (rollAngle == "40")
      bufferDistance = "624.2709";
    else if (rollAngle == "45")
      bufferDistance = "763.8125";
  }
  else if (satelliteName === "Taijing") {
    if (rollAngle == "5")
      bufferDistance = "111.1";
    else if (rollAngle == "10")
      bufferDistance = "222.2";
    else if (rollAngle == "15")
      bufferDistance = "391.072";
    else if (rollAngle == "20")
      bufferDistance = "543.279";
    else if (rollAngle == "25")
      bufferDistance = "684.376";
    else if (rollAngle == "30")
      bufferDistance = "823.251";
    else if (rollAngle == "35")
      bufferDistance = "957.682";
    else if (rollAngle == "40")
      bufferDistance = "1093.224";
    else if (rollAngle == "45")
      bufferDistance = "1227.655";
  }
  else if (satelliteName === "SuperView") {
    if (rollAngle == "5")
      bufferDistance = "61.105";
    else if (rollAngle == "10")
      bufferDistance = "125.7652";
    else if (rollAngle == "15")
      bufferDistance = "192.4252";
    else if (rollAngle == "20")
      bufferDistance = "262.196";
    else if (rollAngle == "25")
      bufferDistance = "337.0774";
    else if (rollAngle == "30")
      bufferDistance = "420.0691";
    else if (rollAngle == "35")
      bufferDistance = "516.8372";
    else if (rollAngle == "40")
      bufferDistance = "624.2709";
    else if (rollAngle == "45")
      bufferDistance = "763.8125";
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
  ftr.set("orbitNumber", orbitNumber);
  //console.log("ftr="+ftr);

  var vectorSourceSatellitecorridor = new ol.source.Vector({
    features: [ftr]
  });
  resultVectorSatelliteCorridor.setSource(vectorSourceSatellitecorridor);

}

function hideOrbitPath(row) {
  //console.log(row.childNodes[0].innerText+"_"+row.childNodes[1].innerText+"_orbitoVisibility");
  var orbitoDataID = row.childNodes[0].innerText + "_" + row.childNodes[1].innerText + "_orbitoVisibility";
  var corridorDataID = row.childNodes[0].innerText + "_" + row.childNodes[1].innerText + "_corridorVisibility";
  //console.log(orbitoDataID);

  //find this orbitoDataID in toggleOrbitSelected, to check whether to hide this or not(if user selected toggle orbit button)
  var index = toggleOrbitSelected.indexOf(orbitoDataID);
  var indexCorridor = toggleOrbitCorridorSelected.indexOf(corridorDataID);
  //console.log(corridorDataID+" "+indexCorridor); 
  // console.log(index);

  if (index == -1) {
    var totalFeatures = resultVectorSatelliteOrbito.getSource().getFeatures();
    //var totalFeaturesCorridor = resultVectorSatelliteCorridor.getSource().getFeatures();
    //var highlightedFeatureSPOT6;

    //console.log(totalFeatures);

    for (var i = 0; i < totalFeatures.length; i++) {
      if (totalFeatures[i].get('satellite') + "_" + totalFeatures[i].get('orbitNumber') + "_orbitoVisibility" == orbitoDataID) {
        highlightedFeature = totalFeatures[i];

        if (!$('#btnToggleAllOrbits').hasClass("toggle-orbit-active")) //to check whether toggle all orbit button is clicked or not 
          totalFeatures[i].set("hidden", "true");
      }
    }
  }

  //for corridor
  if (indexCorridor == -1) {
    var totalFeaturesCorridor = resultVectorSatelliteCorridor.getSource().getFeatures();
    //var highlightedFeatureCorridor;

    //console.log(totalFeaturesCorridor);
    for (var i = 0; i < totalFeaturesCorridor.length; i++) {
      //console.log(corridorDataID);
      if (totalFeaturesCorridor[i].get('satellite') + "_" + totalFeaturesCorridor[i].get('orbitNumber') + "_corridorVisibility" == corridorDataID) {
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

function toggleOrbito(val) {
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
    if (totalFeatures[i].get('satellite') + "_" + totalFeatures[i].get('orbitNumber') + "_orbitoVisibility" == orbitoDataID) {
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
          toggleOrbitSelected.splice(toggleOrbitSelected.indexOf(orbitoDataID), 1);
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

function toggleCorridor(val) {

  if (!$('#' + val).hasClass("toggle-corridor-active")) {
    $('#' + val).addClass('toggle-corridor-active');
  } else {
    $('#' + val).removeClass('toggle-corridor-active');
  }

  var totalFeatures = resultVectorSatelliteOrbito.getSource().getFeatures();


}

function toggleAllOrbits() {
  if (!$('#btnToggleAllOrbits').hasClass("toggle-orbit-active")) {
    $('#btnToggleAllOrbits').addClass('toggle-orbit-active');
    $('.toggleOrbit').addClass('toggle-orbit-active');
  } else {
    $('#btnToggleAllOrbits').removeClass('toggle-orbit-active');
    $('.toggleOrbit').removeClass('toggle-orbit-active');
  }

  var totalFeatures = resultVectorSatelliteOrbito.getSource().getFeatures();

  for (var i = 0; i < totalFeatures.length; i++) {
    if (totalFeatures[i].get('satellite') !== 'inprogressOrders') {
      highlightedFeature = totalFeatures[i];
      if ($('#btnToggleAllOrbits').hasClass("toggle-orbit-active"))
        totalFeatures[i].set("hidden", "false");
      else
        totalFeatures[i].set("hidden", "true");
    }
  }
}

function toggleAllCorridors() {

  if (!$('#btnToggleAllCorridors').hasClass("toggle-corridor-active")) {
    $('#btnToggleAllCorridors').addClass('toggle-corridor-active');
    $('.toggle-corridor').addClass('toggle-corridor-active');
  } else {
    $('#btnToggleAllCorridors').removeClass('toggle-corridor-active');
    $('.toggle-corridor').removeClass('toggle-corridor-active');
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
        success: function (response) {
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
        error: function (xhr, ajaxOptions, thrownError) { }
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
      cost = "~5.88 â‚¬";
      productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="' + highlightedFeature.get('thumbnail') + '" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + highlightedFeature.get('data_id') + '</a></h3><span class="price">' + cost + '</span><div class="actions"><a href="#0" class="delete-item" id="delete_' + highlightedFeature.get('data_id') + '" onclick="funcDelete(\'' + highlightedFeature.get('data_id') + '\')">Delete</a><div class="quantity"><label for="cd-product-' + highlightedFeature.get('data_id') + '">Qty</label><span class="select"><select id="cd-product-' + highlightedFeature.get('data_id') + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    } else if (dataid.indexOf("SPOT5") !== -1 || dataid.indexOf("SPOT4") !== -1 || dataid.indexOf("SPOT2") !== -1)
      cost = "~25200 PKR";
    else if (dataid.indexOf("PRSS") !== -1) {
      cost = "~2.99 $";
      productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="' + highlightedFeature.get('thumbnail') + '" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + highlightedFeature.get('data_id') + '</a></h3><span class="price">' + cost + '</span><div class="actions"><a href="#0" class="delete-item" id="delete_' + highlightedFeature.get('data_id') + '" onclick="funcDelete(\'' + highlightedFeature.get('data_id') + '\')">Delete</a><div class="quantity"><label for="cd-product-' + highlightedFeature.get('data_id') + '">Qty</label><span class="select"><select id="cd-product-' + highlightedFeature.get('data_id') + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    } else if (dataid.indexOf("PNEO") !== -1) {
      plieadesneoObj[highlightedFeature.get("dataset_name")] = highlightedFeature.get("data_id");
      cost = "~11.90 â‚¬";
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
      cost = "~11.90 â‚¬";
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
      } catch (e) { }
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
  $('#myModal').on('show.bs.modal', function () {
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
      setTimeout(function () {
        cartCount.find('li').eq(0).text(actual);
      }, 150);
      setTimeout(function () {
        cartCount.removeClass('update-count');
      }, 200);
      setTimeout(function () {
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

  cartList.children('li:not(.deleted)').each(function () {
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
    map.on('pointermove', function (e) {
      map.getTargetElement().style.cursor = 'crosshair';
    });
  } else {
    map.on('pointermove', function (evt) {
      if (evt.dragging) {
        return;
      }
      var pixel = map.getEventPixel(evt.originalEvent);
      var hit = map.forEachLayerAtPixel(pixel, function (layer) {
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

$(function () {
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
    format: 'yyyy-mm-dd'
  }).datepicker('update', new Date());

  $("#datepickerOrbitoEnd").datepicker({

    autoclose: true,
    todayHighlight: true,
    minDate: dateToday,
    showButtonPanel: true,
    format: 'yyyy-mm-dd'
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
  } catch (e) { }
  move(initialExtent, 'reset');
  try {
    map.removeInteraction(draw);
  } catch (e) { }
  try {
    vector.getSource().clear();
  } catch (e) { }
  try {
    resultVector.getSource().clear();
  } catch (e) { }
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
  testsource.once('change', function (e) {
    if (testsource.getState() === 'ready') {
      $(".divControls").show();
      $(".myProgress").show();
      move(feature.getGeometry().getExtent());
      resultFeatures = testsource.getFeatures();
      resultFeatures.sort(function (a, b) {
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
        } catch (e) { }
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
  } catch (e) { }
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
      $("#" + divSensor + "amount").text(sensor_amount[sensor] + ' â‚¬' + " approx.");
    }
  }
  $("#grandTotal").text("Total Number of Scenes:        " + (total_scenes));
}

function processOrder(type) {
  vectorPoints.setVisible(true);
  var currentdate = new Date();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $(document).ready(function () {

    $(".selectpicker").selectpicker({
      noneSelectedText: 'Satellites' // by this default 'Nothing selected' -->will change to Satellites
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
  } catch (e) { }
  try {
    var length = totalFeatures.length;
  } catch (e) { }
  var prssCount = 1;
  var svCount = 1;
  var pleiadesCount = 1;
  var pleiadesneoCount = 1;
  var svCount = 1;
  var spotCount = 1;
  scenes = '';
  if (length > 0) {
    $("li.product").each(function (index, element) {
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
  var pneo_cloudFlag = false;
  uploadPDFflag = 1;
  if ($("#satSelect").val() === 'SV' || $("#satSelect").val() === 'PleiadesNeo') {
    var area = parseFloat(areaDrawn.toString().replace(" km", ""));
    var mode = $("#satAcqModes").val();
    var priority = $("#satImgPriority").val();
    var sensor = $("#satSelect").val();
    var cloud_value = $("#freshCloudUpper").val();
    if (parseInt(cloud_value) < 5) {
      pneo_cloudFlag = true;
    }
    if (mode === "Mono" && priority === "standard") {
      ordered_area = areaDrawn;
      getCurrentQuota().then(function (data) {
        var current_quota = JSON.parse(data)[0];
        var qVal = '';
        if ($("#satSelect").val() === 'SV') {
          $("#sv_quotaValue").html(parseFloat(current_quota.sv_quota).toFixed(2));
          qVal = parseFloat(current_quota.sv_quota);
        } else if ($("#satSelect").val() === 'PleiadesNeo') {
          $("#neo_quotaValue").html(parseFloat(current_quota.neo_quota).toFixed(2));
          qVal = parseFloat(current_quota.neo_quota);
        }
        var cloud_msg = ""
        if (pneo_cloudFlag && sensor === 'PleiadesNeo') {
          var surcharge_area = area + (area * 0.25);
          cloud_msg = "<code> 25% additional quota will be charged for Cloud Cover < 5% </code></br>" + "Deducted Area=>" + area + "+" + (area * 0.25) + "=" + surcharge_area.toFixed(2) + "km<sup>2</sup>";
          area = surcharge_area;
          ordered_area = surcharge_area;
        }
        var rem = (qVal - area).toFixed(2);
        var msg = 'Remaining allocated Quota after this order will be: ' + rem.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' km<sup>2</sup>' + '</br>' + cloud_msg + '</br> Do you want to place the order?';
        $(".disablingDiv").hide();
        $(".remQuota").html(msg);
        $("#id01").show();
      }).catch(function (err) {
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
      }).done(function (data) {
        factor = parseFloat(data);
        if (factor > 1) {
          ordered_area = areaDrawn * factor;
          getCurrentQuota().then(function (data) {
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
              msg += '<code>Priority Mode Factor = Ordered Area x ' + factor + ' </code> => Deducted Area = ' + (area * factor).toFixed(2) + 'km<sup>2</sup>. </br> Do you want to place the order?';
              $(".disablingDiv").hide();
              $(".remQuota").html(msg);
              $("#id01").show();
            } else {
              $("#placeFreshOrder").prop('disabled', true);
              $("#showPDF").prop('disabled', true);
            }

          }).catch(function (err) {
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
function displayUpcomingAttempts() {
  $("#dataOrbitoUpcoming").hide();
  $("#loadingIconUpcoming").show();
  var satellite = $('#satSelect').val();
  var startDate = $('#freshStartDate').val().split('/')[2] + '-' + $('#freshStartDate').val().split('/')[1] + '-' + $('#freshStartDate').val().split('/')[0]; //changing date format from 02/04/2024' to 2024-04-02'
  var endDate = $('#freshEndDate').val().split('/')[2] + '-' + $('#freshEndDate').val().split('/')[1] + '-' + $('#freshEndDate').val().split('/')[0]; //changing date format from 02/04/2024' to 2024-04-02'

  //As there is different freshAngleUpper field in case of SAR-SAT1 satellite so
  var tbl = $('#page1Fresh').clone();
  if ($('#satSelect').val() !== "SAR") {
    rollAngle = document.querySelector('#freshAngleUpper').value;
  }
  else
    rollAngle = document.querySelector('#freshAngleUpper2').value;

  //console.log("Roll Angle Value="+rollAngle);


  // console.log(satellite);
  // console.log(startDate);
  // console.log(endDate);
  // console.log(rollAngle);

  var spot6 = '';
  var pleiades = '';
  var pneo = '';
  var prss = '';
  var taijing = '';
  var sv = '';


  var orbitoCriteria = '';
  //console.log(satellite);
  if (satellite.includes('SPOT'))
    spot6 = 'yes';

  if (satellite == 'Pleiades')
    pleiades = 'yes';

  if (satellite == 'PleiadesNeo')
    pneo = 'yes';

  if (satellite == 'PRSS')
    prss = 'yes';

  if (satellite.includes('SAR'))
    taijing = 'yes';

  if (satellite == 'SV')
    sv = 'yes';

  //get activated polygon AOI
  var totalFeatures = vector.getSource().getFeatures();
  for (var i = 0; i < totalFeatures.length; i++) {
    if (totalFeatures[i].get('count') == $("#polygons").val()) {
      var wkt = format.writeGeometry(totalFeatures[i].getGeometry());
    }
  }
  // console.log(wkt);

  var testsourceOrbito = new ol.source.Vector({
    url: "server_scripts/azo.php?geom=" + wkt + "&searchByAOI=true&rollAngle=" + rollAngle + "&upcomingAttempts=yes" + "&startDate=" + startDate + "&endDate=" + endDate + "&spot=" + spot6 + "&prss=" + prss + "&pleiades=" + pleiades + "&sv=" + sv + "&pneo=" + pneo + "&taijing=" + taijing,
    format: new ol.format.GeoJSON(),
  });
  var $satelliteNameTD = '';
  var $inprogressItemsCount = 0;

  //console.log(testsourceOrbito);
  resultVectorSatelliteOrbito.setSource(testsourceOrbito);
  testsourceOrbito.once('change', function (e) {
    if (testsourceOrbito.getState() === 'ready') {
      $("#loadingIconUpcoming").hide();
      //move(feature.getGeometry().getExtent());
      resultFeatures = testsourceOrbito.getFeatures();

      //counting total orbito items found
      for (var i = 0; i < resultFeatures.length; i++) {
        if ((resultFeatures[i].get('satellite') == 'inprogressOrders')) {
          $inprogressItemsCount++;
          continue;
        }
      }

      var $orbitoFound = resultFeatures.length - $inprogressItemsCount;
      if ($orbitoFound > 0) {
        var info;
        var content;
        tableData = "";
        tableData += '<div class="orbito-inprogressOrders-header">Presently there are <b>' + $inprogressItemsCount + ' ' + satellite + '</b> active orders falling in the adjacent region with similar parameters, which might affect the acquisition of your order.</div> <div class="orbito-results-header" style="width:90%;margin:0 auto;margin-bottom:1rem"><div class="orbito-results-header-left"><div class="orbito-nb-items" style="font-size:1.3rem">' + $orbitoFound + ' items</div></div><div class="orbito-results-header-right" style="margin-right:3rem"><div class="orbito-export"><!--<button class="export-button" name="export" type="button" value="export" title="Launch export"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M22.491 13.166h-3.84v-6.583h-5.029v6.583h-3.749l6.309 6.309z"></path><path d="M28.709 18.834v0c-1.097 0-2.011 0.914-2.011 2.011v3.749h-21.303v-3.474c0-1.097-0.914-2.011-2.011-2.011s-2.011 0.914-2.011 2.011v7.589h29.44v-7.771c0-1.189-0.914-2.103-2.103-2.103z"></path></g></svg></button>--></div><div class="orbito-all-orbits"><button id="btnToggleAllOrbits" class="toggle-orbit" title="Toggle all orbits" onclick="toggleAllOrbits();"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M19.9,6.5c-2.7,0-5.4,1-7.3,2.7C12.3,9.1,11.9,9,11.4,9c-2,0-3.6,1.6-3.6,3.6c0,0.9,0.4,1.8,1,2.6 c-0.3,1.1-0.5,2.1-0.5,3c0,6.3,5.1,11.5,11.5,11.5s11.6-5.1,11.6-11.5S26.3,6.5,19.9,6.5z M19.9,27c-5,0-9.1-4-9.1-9 c0-0.5,0.1-1.1,0.2-1.6c0-0.2,0-0.3,0.1-0.5c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c5,0,9.1,4.1,9.1,9.1C29,23.1,24.9,27,19.9,27z"></path><path d="M3.7,11.8c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c1.1,0,2.1,0.2,3,0.5h0.1h0.1c1.1-0.2,2.3-0.4,3.3-0.4h0.7l-0.7-0.4c-1.9-1.4-4.2-2.1-6.7-2.1c-2.7,0-5.4,0.9-7.3,2.7 C4.8,4.9,4.4,4.9,4,4.9C2,4.9,0.5,6.4,0.5,8.3c0,0.9,0.4,1.8,1,2.6c-0.3,1-0.5,2-0.5,3c0,4.1,2.1,7.8,5.7,9.9l0.5,0.3l-0.2-1 c-0.2-0.7-0.3-1.5-0.4-2.1v-0.1l-0.1-0.1c-2-1.7-3.1-4.3-3.1-6.9c0-0.5,0.1-1.1,0.2-1.6C3.6,12.1,3.7,11.9,3.7,11.8z"></path></g></svg></button></div><div class="orbito-all-corridors"><!--<button id="btnToggleAllCorridors" class="toggle-orbit" title="Toggle all corridors" onclick="toggleAllCorridors();"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M22.2,0.7c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3c0.7,0,1.4-0.4,1.7-1 l15.8-26C23.5,2.6,23.2,1.3,22.2,0.7z"></path><path d="M28.5,3.8L28.5,3.8c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3 c0.7,0,1.4-0.4,1.7-1l15.8-26C29.8,5.6,29.5,4.4,28.5,3.8z"></path><path d="M4,17.2c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,9,9,8.2,8.6,7.5 c1.3-1.1,2.9-1.9,4.6-2.3L15,2.3c-3.1,0.3-6,1.6-8.3,3.5C6.2,5.5,5.5,5.3,4.9,5.3c-2.4,0-4.4,2-4.4,4.4C0.5,11,1,12.2,2,13 c-0.4,1.4-0.6,2.7-0.6,4.2c0,2,0.4,3.8,1.1,5.6l1.8-3C4.1,19,4,18.1,4,17.2z"></path><path d="M30.4,11.5l-1.8,3c0.2,0.9,0.3,1.9,0.3,2.9c0,5.7-4,10.6-9.3,12l-1.7,2.8c7.6-0.7,13.6-7.1,13.6-14.9 C31.5,15.2,31.1,13.2,30.4,11.5z"></path></g></svg></button>--></div></div></div>';
        tableData += '<table id="table_id" class="table table-striped table-bordered tablesorter" style="width:90%;margin:0 auto">';
        tableData += "<thead> <tr><th style='font-weight: bold;font-size: 1.5rem'>Satellite</th><th style='font-weight: bold;font-size: 1.5rem'>Orbit</th><th style='font-weight: bold;font-size: 1.5rem'>Date</th><th></th></tr> </thead>";
        tableData += "<tbody id='tablebody'>";

        for (var i = 0; i < resultFeatures.length; i++) {
          console.log(resultFeatures[i].get('satellite'));
          if ((resultFeatures[i].get('satellite') == 'inprogressOrders')) {
            continue;
          }
          if ((resultFeatures[i].get('satellite') == 'SPOT6')) {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(243, 110, 44); background-color: rgba(243, 110, 44, 0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          if ((resultFeatures[i].get('satellite') == 'Pleiades-1A') || (resultFeatures[i].get('satellite') == 'Pleiades-1B')) {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(220, 12, 203); background-color: rgba(220, 12, 203, 0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          if ((resultFeatures[i].get('satellite') == 'PNEO3') || (resultFeatures[i].get('satellite') == 'PNEO4')) {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(106, 49, 220); background-color: rgb(106, 49, 220,0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          if ((resultFeatures[i].get('satellite') == 'PRSS')) {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(1, 50, 32); background-color: rgba(1, 50, 32, 0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          if ((resultFeatures[i].get('satellite') == 'Taijing')) //Black
          {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          if ((resultFeatures[i].get('satellite') == 'SuperView')) //Steel Blue
          {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(70, 130, 180); background-color: rgba(70, 130, 180, 0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          tableData += "<tr class='orbitoRowData' onmousemove='showOrbitPath(this)' onmouseleave='hideOrbitPath(this)'>" +
            $satelliteNameTD +
            "<td style='color:#000 !important'>" + resultFeatures[i].get("orbitNumber").bold() + "</td>" +
            "<td style='color:#000 !important'><strong>" + resultFeatures[i].get("date") + "</strong></td>" +
            "<td><button id='" + resultFeatures[i].get("satellite") + '_' + resultFeatures[i].get("orbitNumber") + "_orbitoVisibility' class='toggle-orbit toggleOrbit' title='Toggle orbit' onclick='toggleOrbito(this.id);'><svg viewBox='0 0 32 32' class='pictos cz-color-3684147' style='width: 1.9rem; height: 1.9rem;'><path d='M16.5,1c-3.7,0-7.1,1.4-9.8,3.6C6.2,4.3,5.5,4.1,4.9,4.1c-2.4,0-4.4,2-4.4,4.4C0.5,9.8,1,11,2,11.8 c-0.4,1.4-0.6,2.7-0.6,4.2c0,8.3,6.7,15,15,15s15.1-6.7,15.1-15S24.8,1,16.5,1z M16.5,28.5C9.6,28.5,4,22.9,4,16 c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,7.8,9,7,8.6,6.3c2.1-1.7,4.8-2.7,7.8-2.7 c6.8,0,12.5,5.6,12.5,12.5C28.9,22.8,23.3,28.5,16.5,28.5z' class='cz-color-3684147'></path></svg></button><!--<button id='" + resultFeatures[i].get("satellite") + '_' + resultFeatures[i].get("orbitNumber") + "_corridorVisibility' class='toggle-corridor' title='Toggle corridor' onclick='toggleCorridor(this.id);'><svg viewBox='0 0 32 32' class='pictos cz-color-3684147' style='width: 1.9rem; height: 1.9rem;'><g class='cz-color-3684147'><path d='M22.2,0.7c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3c0.7,0,1.4-0.4,1.7-1 l15.8-26C23.5,2.6,23.2,1.3,22.2,0.7z' class='cz-color-3684147'></path><path d='M28.5,3.8L28.5,3.8c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3 c0.7,0,1.4-0.4,1.7-1l15.8-26C29.8,5.6,29.5,4.4,28.5,3.8z' class='cz-color-3684147'></path><path d='M4,17.2c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,9,9,8.2,8.6,7.5 c1.3-1.1,2.9-1.9,4.6-2.3L15,2.3c-3.1,0.3-6,1.6-8.3,3.5C6.2,5.5,5.5,5.3,4.9,5.3c-2.4,0-4.4,2-4.4,4.4C0.5,11,1,12.2,2,13 c-0.4,1.4-0.6,2.7-0.6,4.2c0,2,0.4,3.8,1.1,5.6l1.8-3C4.1,19,4,18.1,4,17.2z' class='cz-color-3684147'></path><path d='M30.4,11.5l-1.8,3c0.2,0.9,0.3,1.9,0.3,2.9c0,5.7-4,10.6-9.3,12l-1.7,2.8c7.6-0.7,13.6-7.1,13.6-14.9 C31.5,15.2,31.1,13.2,30.4,11.5z' class='cz-color-3684147'></path></g></svg></button>--></td>"
          "</tr>";
        }
        tableData += "</tbody>";
        tableData += "</table>";

        $("#dataOrbitoUpcoming").show();
        $("#dataOrbitoUpcoming").html('');
        $("#dataOrbitoUpcoming").append(tableData);

      }
      else {
        var info;
        var content;
        tableData = "";
        tableData += '<div class="orbito-results-header" style="width:90%;margin:0 auto;margin-bottom:1rem"><div class="orbito-results-header-left"><div class="orbito-nb-items" style="font-size:1.3rem">' + resultFeatures.length + ' items</div></div><div class="orbito-results-header-right" style="margin-right:3rem"><div class="orbito-export"><!--<button class="export-button" name="export" type="button" value="export" title="Launch export"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M22.491 13.166h-3.84v-6.583h-5.029v6.583h-3.749l6.309 6.309z"></path><path d="M28.709 18.834v0c-1.097 0-2.011 0.914-2.011 2.011v3.749h-21.303v-3.474c0-1.097-0.914-2.011-2.011-2.011s-2.011 0.914-2.011 2.011v7.589h29.44v-7.771c0-1.189-0.914-2.103-2.103-2.103z"></path></g></svg></button>--></div><div class="orbito-all-orbits"><button id="btnToggleAllOrbits" class="toggle-orbit" title="Toggle all orbits" onclick="toggleAllOrbits();"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M19.9,6.5c-2.7,0-5.4,1-7.3,2.7C12.3,9.1,11.9,9,11.4,9c-2,0-3.6,1.6-3.6,3.6c0,0.9,0.4,1.8,1,2.6 c-0.3,1.1-0.5,2.1-0.5,3c0,6.3,5.1,11.5,11.5,11.5s11.6-5.1,11.6-11.5S26.3,6.5,19.9,6.5z M19.9,27c-5,0-9.1-4-9.1-9 c0-0.5,0.1-1.1,0.2-1.6c0-0.2,0-0.3,0.1-0.5c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c5,0,9.1,4.1,9.1,9.1C29,23.1,24.9,27,19.9,27z"></path><path d="M3.7,11.8c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c1.1,0,2.1,0.2,3,0.5h0.1h0.1c1.1-0.2,2.3-0.4,3.3-0.4h0.7l-0.7-0.4c-1.9-1.4-4.2-2.1-6.7-2.1c-2.7,0-5.4,0.9-7.3,2.7 C4.8,4.9,4.4,4.9,4,4.9C2,4.9,0.5,6.4,0.5,8.3c0,0.9,0.4,1.8,1,2.6c-0.3,1-0.5,2-0.5,3c0,4.1,2.1,7.8,5.7,9.9l0.5,0.3l-0.2-1 c-0.2-0.7-0.3-1.5-0.4-2.1v-0.1l-0.1-0.1c-2-1.7-3.1-4.3-3.1-6.9c0-0.5,0.1-1.1,0.2-1.6C3.6,12.1,3.7,11.9,3.7,11.8z"></path></g></svg></button></div><div class="orbito-all-corridors"><!--<button id="btnToggleAllCorridors" class="toggle-orbit" title="Toggle all corridors" onclick="toggleAllCorridors();"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M22.2,0.7c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3c0.7,0,1.4-0.4,1.7-1 l15.8-26C23.5,2.6,23.2,1.3,22.2,0.7z"></path><path d="M28.5,3.8L28.5,3.8c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3 c0.7,0,1.4-0.4,1.7-1l15.8-26C29.8,5.6,29.5,4.4,28.5,3.8z"></path><path d="M4,17.2c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,9,9,8.2,8.6,7.5 c1.3-1.1,2.9-1.9,4.6-2.3L15,2.3c-3.1,0.3-6,1.6-8.3,3.5C6.2,5.5,5.5,5.3,4.9,5.3c-2.4,0-4.4,2-4.4,4.4C0.5,11,1,12.2,2,13 c-0.4,1.4-0.6,2.7-0.6,4.2c0,2,0.4,3.8,1.1,5.6l1.8-3C4.1,19,4,18.1,4,17.2z"></path><path d="M30.4,11.5l-1.8,3c0.2,0.9,0.3,1.9,0.3,2.9c0,5.7-4,10.6-9.3,12l-1.7,2.8c7.6-0.7,13.6-7.1,13.6-14.9 C31.5,15.2,31.1,13.2,30.4,11.5z"></path></g></svg></button>--></div></div></div>';
        tableData += '<table id="table_id" class="table table-striped table-bordered" style="width:90%;margin:0 auto">';
        tableData += "<thead> <tr><th style='font-weight: bold;font-size: 1.5rem'>Satellite</th><th style='font-weight: bold;font-size: 1.5rem'>Orbit</th><th style='font-weight: bold;font-size: 1.5rem'>Date</th><th></th></tr> </thead>";
        tableData += "<tbody id='tablebody'>";
        tableData += "<tr>" +
          "<td colspan='3' style='color:#000 !important'><strong>No data found.</strong></td>" +
          "<td>"
        "</tr>";

        tableData += "</tbody>";
        tableData += "</table>";

        tableData += "</tbody>";
        tableData += "</table>";

        $("#dataOrbitoUpcoming").show();
        $("#dataOrbitoUpcoming").html('');
        $("#dataOrbitoUpcoming").append(tableData);
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
      "&acq_mode=" + $('#satAcqModes').val() + "&order_priority=" + $("#satImgPriority option:selected").text();
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
              if (sat === "PleiadesNeo" && $("#freshCloudUpper").val() < 5) {


                var s_area = parseInt(formatArea(totalFeatures[i].getGeometry()).replace(' km', ''));
                s_area = s_area + (s_area * 0.25);

                sensor_area[sensors[j]] = s_area;
              } else {

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

  map.once('postcompose', function (event) {
    toastr.info("Order is being generated");
    var canvas = event.context.canvas;
    if (navigator.msSaveBlob) {
      screenshot = canvas.msToBlob();
    } else {
      try {
        map.getView().fit(featureArch.getGeometry().getExtent(), {});
      } catch (e) { }
      html2canvas($(".print-wrap:eq(0)")[0], {
        allowTaint: true
      }).then(function (canvas0) {
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
        canvas.toBlob(function (blob) {
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
          ctx1.fillStyle = "white";
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
            ctx2.fillStyle = "white";
            ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
            ctx2.rect(10, 10, 340, 80);
            ctx2.stroke();

            ctx2.font = "20px Arial";
            ctx2.fillStyle = "#1c5982";
            ctx2.fillText("Coordinates", 20, 30);
            ctx2.fillColor = "white";


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
      }).then(function (canvas) {
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
        console.log('fd:' + fd);

        if (uploadPDFflag) {
          $.ajax({
            type: 'POST',
            url: 'uploadPDF.php?orderid=' + orderid,
            data: fd,
            processData: false,
            contentType: false,
            success: function (response) {
              console.log('ajax success' + response);
            },
            error: function (xhr, ajaxOptions, thrownError) {
              console.log('ajax error' + thrownError);
            }
          }).done(function (data) {
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
      } catch (e) { }
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
$(document).ready(function () {
  $("#togglemenu").on('click', function () {
    try {
      map.getView().fit(featureArch.getGeometry().getExtent(), {
        duration: 2500
      });
    } catch (e) { }
    $("#data_header").html("Optical Results");
  });
  $("#freshData").on('click', function () {
    try {
      map.getView().fit(featureArch.getGeometry().getExtent(), {
        duration: 2500
      });
    } catch (e) { }
    $("#data_header").html("Fresh Data Acquisition");
    $("#resultsCount").hide();
    $("#data_fresh").show();
    $("#data").hide();
  });
  $("#endModify").on('click', function () {
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
  $("#table_id").on('length.dt', function (e, settings, len) {
    setTimeout(function () {
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
  if (fresh_sensors == '')
    fresh_sensors = val;
  else {
    if (!fresh_sensors.includes(val))
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
        } catch (e) { }
      } else if (itemsArr[i].indexOf("SPOT5") !== -1 || itemsArr[i].indexOf("SPOT4") !== -1 || itemsArr[i].indexOf("SPOT2") !== -1) {
        addArchiveSensors('SPOT45');
        try {
          $(".pricing-SPOT542").removeClass("disable-title");
          $(".lblPricingSPOT542").removeClass("disable-label");
          $(".chkSPOT542").attr("disabled", false);
        } catch (e) { }
      } else if (itemsArr[i].indexOf("PRSS") !== -1) {
        addArchiveSensors('SPOT45');
        try {
          $(".pricing-PRSS").removeClass("disable-title");
          $(".lblPricingPRSS").removeClass("disable-label");
          $(".chkPRSS").attr("disabled", false);
        } catch (e) { }
      } else if (itemsArr[i].indexOf("PNEO") !== -1) {
        addArchiveSensors('Pleiades Neo');
        try {
          $(".pricing-PleiadesNeo").removeClass("disable-title");
          $(".lblPricingPleiadesNeo").removeClass("disable-label");
          $(".chkPleiadesNeo").attr("disabled", false);
        } catch (e) { }
      } else if (itemsArr[i].indexOf("SV") !== -1) {
        addArchiveSensors('Superview');
        try {
          $(".pricing-SV").removeClass("disable-title");
          $(".lblPricingSV").removeClass("disable-label");
          $(".chkSV").attr("disabled", false);
        } catch (e) { }
      } else if (itemsArr[i].indexOf("SAR") !== -1) {
        addArchiveSensors('SAR');
        try {
          $(".pricing-SAR").removeClass("disable-title");
          $(".lblPricingSAR").removeClass("disable-label");
          $(".chkSAR").attr("disabled", false);
        } catch (e) { }
      } else {
        addArchiveSensors('Pleiades');
        try {
          $(".pricing-Pleiades").removeClass("disable-title");
          $(".lblPricingPleiades").removeClass("disable-label");
          $(".chkPleiades").attr("disabled", false);
        } catch (e) { }
      }
    }
  }
  $("#proceedOrder").text(val);
  $('#pricingModal').modal('show');
}

$(document).ready(function () {
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
  $(".chkPRSS").on("click", function () {
    var values = [];
    $('.chkPRSS:checked').each(function () {
      values.push($(this).val());
    });
    if (values.indexOf("PRSS_Bundle(Multispectral+Panchromatic)") !== -1) {
      $("#098PanC").prop('checked', false);
      $("#289MultiS").prop('checked', false);
    }
  });
  $("#btnAddCoord").click(function () {
    var html = '<div><label class = "lblpolyCoord">Longitude: </label> <input type="text" class="txtpolyCoord" name="polyLon" onkeypress="return isNumberKey(event)"/><label class = "lblpolyCoord">Latitude: </label> <input type="text" class="txtpolyCoord" name="polyLat" onkeypress="return isNumberKey(event)"/></div>';
    $("#divPolyCoords").append(html);
  });
  $("#proceedOrder").click(function () {
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

$('html').on('DOMNodeInserted', function (e) {
  if ($(e.target).hasClass('tablesorter') == true) {
    var totalFeatures = resultVector.getSource().getFeatures();
    $('.featureTable tbody').bind('mouseenter', function (e) {
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
    $('.featureTable').bind('mouseleave', function (e) {
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
$(document).ready(function () {
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
    loader: function (extent, resolution, projection) {
      $.ajax({
        url: "server_scripts/azd.php?aa=" + filter, // + "&bbox=" + bbox,
        dataType: 'json',
        success: function (data) {
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
  $("[class='txtpolyCoord']").each(function () {
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
  } catch (e) { }
  g = new ol.control.Graticule({
    step: 1000,
    stepCoord: 5,
    margin: 5,
    projection: 'EPSG:3857',
    formatCoord: function (c) {
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

document.addEventListener("keydown", function (event) {
  if (event.which === 27) {
    try {
      addInteraction(selectedInteraction);
      $(".tooltip-measure").hide();
    } catch (e) { }
  }
});

function removeAllThumbs() {
  map.getLayers().forEach(function (lyr) {
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
    $("[class='txtpolyCoord']").each(function () {
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
window.onclick = function (event) {
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
    success: function (data) {
      if (acq === "Archive") {
        resetFlags();
        $.ajax({
          type: "GET",
          url: "server_scripts/updatePricing.php",
          cache: false,
          success: function (data) { }
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
  $.each($("input[name='chkPricingGroupPRSS']:checked, input[name='chkPricingGroupSPOT']:checked, input[name='chkPricingGroupPleiades']:checked, input[name='chkPricingGroupSV']:checked, input[name='chkPricingGroupPleiadesNeo']:checked"), function () {
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
    success: function (data) {
      if (acq === 'Archive') {
        $(".disablingDiv").show();
        var price = jQuery.parseJSON(data);
        $("#prssamount").text(price.prssprice);
        $("#spotamount").text(price.price);
        $("#pleiadesamount").text(price.pleiadesprice);
        $("#pleiadesneoamount").text(price.pleiadesneoprice);
        $("#svamount").text(price.svprice);
        setTimeout(function () {
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
        if (sat == 'SAR') {
          $("#formAngle").text($("#freshAngleLower2").val() + ' - ' + $("#freshAngleUpper2").val());
          $("#formCloud").text('N/A');
        } else {
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
    didParseCell: function (table) {
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
    success: function (data) {
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

        if (acq == 'fresh') {
          var sat = $("#satSelect").val();
          var valSat = $("#sat" + sat).val();

          var key = prodToFlags[valSat];
          flagProd[key] = 1;
        } else {
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

$("#cancelFactor").on('click', function () {
  factor = 0;
})

function getCurrentQuota() {
  return new Promise(function (resolve, reject) {
    $.ajax({
      type: 'POST',
      url: 'server_scripts/getQuota.php',
      success: function (data) {
        resolve(data)
      },
      error: function (err) {
        reject(err)
      }
    });
  });
}

// orbitography section
function getOrbitoData(rollAngleValue) {
  $("#dataOrbito").hide();
  $("#loadingIcon").show();

  var orbitoStartDate = $("#orbitoStartDate").val();
  var orbitoEndDate = $("#orbitoEndDate").val();

  var satellites = $("#dropDownOrbitoSatellites").val();
  rollAngle = rollAngleValue;
  //console.log(rollAngle);

  var spot6 = '';
  var pleiades = '';
  var pneo = '';
  var prss = '';
  var taijing = '';
  var sv = ''; //SV1_03 (0.5m) and SV2_gfdm (.42)


  //var orbitoCriteria='';

  if (satellites.includes('SPOT-6'))
    spot6 = 'yes';

  if (satellites.includes('Pleiades'))
    pleiades = 'yes';

  if (satellites.includes('PNeo'))
    pneo = 'yes';

  if (satellites.includes('PRSS'))
    prss = 'yes';

  if (satellites.includes('Taijing'))
    taijing = 'yes';

  if (satellites.includes('SuperView'))
    sv = 'yes';

  //get activated polygon AOI
  var wkt = '';
  //wkt='POLYGON((8147310.336884095 3987278.375566981,8297738.408549322 3987278.375566981,8297738.408549322 4092761.474600524,8147310.336884095 4092761.474600524,8147310.336884095 3987278.375566981))';

  //wkt = 'POLYGON((8211245.96213436 4074801.6396743576,8210012.487184541 4075253.6617033086,8210465.723934709 4080181.6272829277,8207912.277566213 4080066.085561045,8209458.962148522 4083593.878382755,8209525.186002274 4086034.122550944,8208492.152370983 4087800.42715528,8209578.162725304 4088458.844519284,8207776.968502513 4091189.2763535264,8211022.076931072 4094530.6726138378,8211127.707884569 4098516.5307019623,8208386.197923048 4099529.223473667,8205061.953581678 4099336.3189387326,8202903.179001881 4101008.2377115395,8200400.048820584 4100831.3887987575,8198742.167978157 4104369.244748384,8199847.637202109 4107949.1356865736,8184671.462655149 4115241.8694374845,8141231.0791062405 4130964.2573844134,8102028.78174745 4159113.5361017645,8031252.742194348 4187074.959144693,8011757.545675269 4198746.402854514,7988139.945958269 4203533.193050114,7987380.295641654 4198026.9428726835,7985625.9008007115 4198479.2457139995,7983548.455795611 4195200.670988144,7980039.888418746 4194409.455435941,7979480.73106177 4191831.2430389854,7974499.962973887 4185879.203762166,7973299.715890195 4182717.3445162736,7970340.398992225 4183197.7465228345,7962958.580473464 4176227.0855071894,7964205.024923195 4170812.0981478947,7966672.97836804 4167635.4973973613,7961573.543369012 4164892.255378719,7961073.8305088 4162636.6780919004,7961813.103247159 4160661.417731242,7959277.022719226 4159868.315408273,7955179.017859375 4156456.905061714,7951983.165745143 4156379.539321841,7951415.862918387 4154847.999443559,7949170.214830615 4153720.7631975496,7942795.615509828 4152202.1210097927,7940554.75416016 4149530.81217937,7936953.234674525 4147192.5849466193,7936397.193818011 4139278.5473721293,7934963.621415575 4136948.024817262,7930499.765049234 4135087.8526336094,7928602.379765768 4131457.3752557226,7929136.26871153 4129940.8097693957,7924879.188744614 4129594.2492501675,7923569.960213394 4127375.0531281377,7920930.7785787145 4126908.5487797577,7920978.7764262 4125607.2720018346,7919595.07471036 4124581.8368191165,7915657.815529174 4123439.1004116936,7914049.138124318 4119596.5739133977,7914991.568933373 4115983.501416455,7916843.146023737 4113470.0456103706,7914068.730354697 4110137.950092316,7913446.7883596355 4107767.1019669846,7906345.976080513 4105585.5531070894,7903239.903692203 4102176.24958148,7902597.368147941 4097107.034863311,7904685.499044921 4090968.715773202,7911351.532792605 4085174.3316624956,7912435.784076334 4081523.999306943,7923438.71431111 4077534.33800298,7922709.237576621 4074006.454810487,7921011.838314965 4072400.8342158166,7920577.691966911 4068381.781827264,7918326.478238558 4066891.475516916,7917049.4205949 4061399.6084401696,7919201.894714157 4059347.9637102247,7917474.137848124 4056509.6040937477,7918373.788354228 4051240.8834327487,7914153.75540253 4046998.4275470325,7914179.047970073 4045179.9690774125,7911795.80899168 4043602.7592240204,7912607.216648752 4040708.0115267383,7912193.330448025 4039608.676322161,7913131.419908259 4038409.461426851,7912211.03069234 4036398.7799535883,7906637.708732324 4035049.9683602555,7903775.016818404 4032171.2288624044,7902565.196815102 4032808.5724086855,7899378.675945866 4032376.8670966676,7898782.337656326 4031081.5807813704,7894999.478608869 4029930.399023264,7894726.857398555 4027875.024491054,7889631.096499321 4025060.5139341247,7888762.581832154 4025108.4346960513,7888095.889401793 4026427.8783505894,7886206.908851203 4026477.5495439605,7883906.491017361 4025881.637827134,7882798.862417927 4024422.797010106,7880191.760054868 4024340.5183694325,7879118.305871189 4023477.6305429954,7876545.267606271 4024155.6945529203,7870285.661430795 4023100.4989644596,7869274.729505163 4023779.4788840604,7864037.966106875 4022347.747892108,7857358.351047357 4023724.1824984527,7853217.5997256795 4021115.3243613564,7849679.352457501 4021971.735105587,7848258.984773062 4020745.6509926394,7842192.851427306 4021752.0506261312,7838865.1783342995 4023780.2848540614,7828490.313223178 4024026.7092603277,7826260.138655945 4024700.644836641,7825066.125129779 4026430.1598892477,7821999.718881666 4026368.5403821804,7819802.048937826 4025320.7915977435,7818782.474500888 4025375.559716599,7817431.501160621 4027178.750037209,7814764.286161213 4026299.6725863265,7808507.239666108 4030375.441371283,7802042.694753359 4030069.6579518826,7797969.905539284 4033612.757704618,7795974.891949199 4034492.567494352,7793881.751563813 4034129.713875736,7792697.646140244 4035319.7449876945,7790707.810242317 4034793.901959215,7789848.869051354 4033590.358228635,7781759.386741007 4034182.6905897027,7780126.00186385 4031357.3069678075,7780692.952253098 4028513.203058234,7781652.414944245 4027396.6503563025,7781376.34260708 4026451.908701251,7778942.508808801 4026164.5715818363,7778565.079963945 4024846.952873755,7776909.75935849 4024228.845583165,7777225.794836254 4022649.0302242734,7776444.443441695 4021572.7715857867,7778153.413585183 4018308.9573513106,7782554.993375598 4014748.938866061,7783051.524947402 4009159.9763847054,7786600.899934521 4007118.9885026473,7787642.516187235 4005237.8893009126,7788905.000996354 3997319.0253482293,7793950.3304927135 3992525.0626215036,7794421.762413652 3993606.7746136673,7795656.629525022 3993762.592525929,7802522.374446689 3991008.7206695285,7804390.534133679 3990981.2126666503,7806041.847460107 3992403.8083404605,7808803.572595878 3991860.3929398805,7808214.803363794 3990420.4667327125,7809717.059669411 3986906.7296165437,7808620.785546719 3983003.9390929407,7812262.057667792 3980773.6956383702,7814563.577007994 3981310.649273172,7814525.171894992 3977627.6479320414,7811497.058772474 3966723.9248703676,7811640.549930064 3964421.2001222633,7815445.115944266 3962402.0850954535,7814898.391527258 3960113.4203415094,7816825.03235214 3959138.7099111765,7816510.314563189 3958462.887533612,7819513.286957946 3958270.96387778,7821070.908234947 3953210.6244777213,7822526.705573721 3952515.881433636,7823848.958485362 3953473.7736863955,7825382.607110023 3952694.8882793486,7825832.782796831 3950226.784724261,7828432.538518776 3947722.6750505446,7828592.615723898 3946989.7718747896,7826807.284862505 3944853.430945827,7828554.210610893 3942767.1204977455,7828939.487479849 3939439.4573347727,7827443.7621774385 3940101.326988508,7825319.710929805 3938882.274688816,7822769.492603904 3935056.3967512553,7820990.093290257 3934108.3335074284,7817212.423623503 3929410.9305068543,7813080.022265511 3926803.3681757567,7811771.352780775 3926863.981321317,7810741.86745825 3924314.1493846606,7809752.23685114 3923768.203212136,7808343.934418393 3924177.6274754684,7806060.214730811 3922448.88256156,7803148.65389439 3922525.1162269637,7801264.348539773 3924450.540095854,7800084.473034218 3923995.600088052,7795412.282908772 3914405.6685697315,7794633.26944616 3913739.872890118,7792339.865296835 3914553.1122647026,7786610.918243415 3912696.850266118,7783922.330681011 3909047.404182511,7778839.037453428 3907925.3403698173,7774705.29948231 3908334.0759090306,7768943.179220632 3912216.315072555,7766547.91851647 3910912.1229443196,7764239.873850356 3910887.9339084127,7762516.817115863 3909373.784999613,7762496.66828803 3907775.1907892055,7759802.736388193 3907229.2201301707,7755536.3646947 3908717.186511124,7754098.948541567 3907290.739018349,7750758.061045767 3908693.12626958,7745114.241120151 3908561.8365732064,7743361.4036388835 3904873.6963037928,7739413.206872448 3901780.6897327127,7736320.064910911 3897912.2000584817,7736216.6968600275 3886954.0342709655,7737611.418203577 3883683.087906674,7737329.112197566 3880768.3316762527,7738042.781787 3879528.4812865173,7741973.027728947 3878721.3823669166,7732764.010976986 3875557.1454014275,7732905.164091311 3873176.445161044,7732010.934621768 3873176.445161044,7730081.433776529 3869088.456060711,7726363.362895353 3868416.488311814,7724100.906121069 3864687.0703123105,7728308.2262756005 3859276.294057923,7730081.433776529 3859629.7448808234,7730551.314015085 3856928.9135323633,7729441.672870575 3856001.2213538876,7729524.563923768 3853871.552338208,7731517.567195171 3851918.293316618,7731352.035112361 3849479.8214189536,7727116.43925057 3844003.063149056,7727210.50422029 3842662.282361771,7723916.115655031 3838556.841282845,7723633.697550291 3836993.1994077484,7720339.308873713 3836769.8579141507,7715645.968156338 3834489.5317879277,7714974.154361483 3835039.004473659,7711930.140919498 3832927.6593296723,7710106.710294466 3827738.5476679457,7707525.767900422 3823497.3676916654,7708859.659376145 3817635.772110728,7712356.365883905 3808840.251653594,7711738.097432039 3803555.257167922,7712260.18584386 3800977.501452709,7711298.719401879 3800158.883489923,7711139.755169025 3797731.274435044,7711876.356239605 3788707.798765996,7711059.288320382 3784625.066006026,7711333.673721988 3781835.3042369997,7714148.275727204 3774835.48626682,7713138.718597284 3774533.8153006653,7712970.607130554 3772328.6336314655,7714598.782589499 3762040.9616400315,7715698.622275482 3761953.4179965057,7717988.575520591 3753502.52267036,7719994.441425195 3753340.28041611,7722295.526619383 3754838.841814944,7724142.539610625 3754178.6648611743,7730985.348709688 3755481.083208525,7736844.204829628 3754660.447498743,7739357.353653776 3755748.5627035927,7741809.833355443 3753857.4434080743,7741582.741594226 3754517.4716064767,7742915.013260039 3756016.1793195396,7744459.237236324 3755570.2861079043,7748698.17212624 3759887.970993986,7750287.814454769 3759692.048838931,7749879.049284576 3761512.423584405,7750666.189403975 3761619.6519894367,7751915.528049149 3764254.2008426273,7751479.266964728 3765254.432974062,7752635.431196108 3765366.9462403893,7754955.997301184 3768415.708023264,7765571.423943231 3770833.3128268886,7767354.094268793 3770141.6558833793,7768005.201970445 3771360.2912475364,7769365.192189465 3771766.311571658,7771328.534048588 3770957.6997173284,7775087.974625521 3772632.256188302,7785471.996477206 3791801.5614552465,7794477.929653475 3790298.854047124,7803271.958520235 3775532.2634230508,7812701.7003155155 3763032.409032657,7816092.169278742 3753416.3609148553,7816515.977897754 3737572.8492047233,7826369.528312046 3696501.1994089372,7833362.370548007 3661760.5863324776,7840990.925701354 3633173.2729054457,7843639.7295813095 3612423.898910072,7851268.284745788 3581487.632286721,7852857.567067083 3564142.578457614,7849784.954568113 3543384.5748401703,7839507.595534811 3518740.355700734,7833362.370548007 3508945.0043054917,7818529.068838061 3500991.8238260895,7810052.896435559 3481802.2318787235,7797868.398616702 3450086.2539218487,7795537.451201006 3439734.4626370864,7797338.637842937 3434622.5137130544,7799563.633092749 3422094.5866378937,7793312.455951192 3407149.840531558,7782187.479668734 3387735.078534357,7766506.560731896 3363749.012172122,7735336.827604796 3357261.145993185,7736495.663503954 3355165.3018295392,7738966.844880075 3355809.9949302995,7740972.376826207 3353430.1367999935,7741901.226657385 3350794.5953763714,7736704.610188173 3339247.0349848657,7728995.735450739 3325385.403279175,7717794.879606611 3316645.9865422295,7722082.127155532 3306393.0723830606,7705869.085634953 3305713.2433236362,7693253.60652607 3310999.8691435764,7687318.109831025 3306683.4910530606,7677617.236146635 3307218.467309902,7674249.944224219 3308197.7094325246,7664333.484649859 3307444.4398137582,7653010.510322455 3311985.03818235,7625401.927858773 3329924.30660675,7622210.861592089 3333359.36045809,7620716.157312049 3336724.9705709647,7619750.575054535 3352487.079287234,7616854.149883999 3364280.088251004,7617073.783573292 3375500.6843423494,7614523.231066278 3377312.9675181224,7612243.675952165 3384536.5026592175,7610792.13146322 3384851.685689824,7610492.816618251 3386918.746981211,7604401.8920879355 3391613.2771268063,7596808.698450264 3377832.92543325,7598131.776016694 3375635.5518445745,7598032.445857697 3371455.346346457,7592456.051479738 3372255.002851936,7590518.319003432 3370963.2807750427,7590908.222978341 3369716.0330088534,7593256.122693826 3367911.9710722947,7600297.614597417 3367086.3015237926,7597566.035670309 3358395.39134442,7596113.452793153 3356438.524463482,7591702.623688887 3353694.6850110954,7583213.248149125 3353095.71476433,7572713.84580483 3350278.9053015164,7574166.9528854685 3345413.3939855327,7574068.993514683 3339322.205356241,7569724.160615814 3338652.64214259,7569747.642905798 3334031.380884733,7563482.664896974 3329437.8224105253,7560810.357587462 3333078.542971764,7559972.017849383 3340583.582423001,7558245.656929766 3337581.78929263,7557811.25309973 3334423.441288253,7550526.814199848 3332605.435907625,7545475.93297784 3332527.2099634814,7546050.907387306 3336191.884248349,7541825.015022889 3336774.4457370657,7540179.621889622 3344721.7863400406,7540395.582258357 3348084.0056342767,7535587.359715163 3353523.273864196,7533545.041018783 3362374.5663764416,7532151.750130689 3364119.0674139247,7530169.551083786 3364360.3310171645,7530258.384260078 3368150.2458125507,7527541.63175331 3368353.903232538,7526853.900050508 3365938.2069397876,7525469.3083353415 3365357.752498163,7525354.8717874875 3359812.039895051,7522763.464916032 3356490.3051640033,7523767.010236851 3355161.8702858477,7522140.966768793 3353566.8572555752,7521359.726582405 3353711.838547955,7522960.389763162 3346768.098175911,7521880.590702466 3345188.4455965534,7521602.959892428 3341505.0130044348,7519999.514058362 3338882.757998543,7519883.407050228 3337271.17398245,7518374.917075766 3336080.5702649783,7514077.127125789 3335414.8448204994,7514093.019986849 3334786.8411695394,7508092.602544011 3341576.284968869,7497327.496048603 3350520.1896294826,7497063.557647251 3352829.5985682923,7494977.927208672 3353331.6973103457,7495396.40233277 3354444.5780005306,7493923.147092214 3353084.0111251962,7491413.49069445 3355266.8986990275,7491144.430149368 3354174.9265023116,7490218.771736671 3354273.1026216927,7487385.004745279 3349210.962483184,7486875.61989111 3345567.2450340907,7486951.094839826 3343758.8059260873,7488229.376441287 3342185.3508899575,7487303.8663061485 3340554.3256353177,7487362.75420546 3336909.1088329116,7486386.816118356 3333715.6696578255,7485733.481804252 3319608.2135217246,7482340.909448113 3313804.5128382244,7481180.849034557 3314758.7405627375,7480045.055824714 3314281.618244271,7479372.46390662 3312806.143451301,7480151.477146595 3311323.1054175487,7486320.358271032 3311009.748525757,7488509.678696464 3309677.744218428,7488528.714106751 3306256.074667041,7489242.606669124 3305693.16155872,7497787.267809476 3302137.4552990813,7498729.104506411 3295545.617002737,7500079.994468378 3295816.548531239,7500079.994468378 3293649.2493784693,7500954.099711695 3293468.6569891246,7500715.707352368 3292475.4417420966,7501748.740872342 3292565.731083224,7501907.669148998 3288503.3150911382,7502702.310309648 3288142.2708808286,7503258.559110967 3284171.423682172,7504212.128436954 3283810.495683694,7505381.372040583 3262836.7440312738,7506038.157370223 3261282.8577582925,7505219.818349396 3260129.0500941835,7515413.197368851 3238466.668338446,7519320.183080933 3225133.689980978,7520379.704639595 3216227.3195350547,7517664.6806684835 3184764.5209311773,7516009.178244904 3170588.621690468,7514221.23562788 3162611.7279860876,7501506.977024126 3156576.188284273,7497467.551118603 3153745.6021554563,7494752.527147491 3133203.818110224,7494222.766362595 3120343.3378019854,7495745.828592734 3102224.8179490017,7493825.44578227 3081832.155498625,7494951.187432088 3072794.600609615,7497864.871698926 3066057.205175254,7501904.297604451 3061468.712820086,7509784.489130901 3048451.3289354895,7513161.7140803505 3036849.1918842555,7511042.670974158 3022082.9279744043,7512168.412623975 3015885.5965019222,7519982.38405927 2996351.834671942,7531107.360330598 2981626.7130193966,7533756.164210554 2960522.0190958916,7541503.915543565 2926098.7953301514,7548192.145329045 2917230.704297403,7554019.513851591 2915252.594435019,7566733.772455343 2907782.1007159413,7569316.356233014 2908660.788389848,7572892.241467059 2904926.72240655,7574349.083594912 2898412.642279258,7562826.786743261 2877791.173317648,7562826.786743261 2871727.1083021187,7557264.298596466 2860482.149746831,7551569.3702673605 2859606.2697194093,7543358.078251742 2856176.2264280985,7536140.087692498 2851871.5239491686,7522735.286168049 2849543.5362333213,7515811.790030391 2851579.277480514,7511096.474734213 2856557.5137973693,7507176.104500891 2856752.184749245,7507284.814885459 2851429.5813614107,7506530.636244645 2849176.832486287,7504682.558705113 2850179.676172445,7502542.321937477 2849154.381453526,7499335.363922928 2849790.5051198523,7496468.126054962 2849221.7345285844,7496712.724587219 2848196.5043570832,7495150.012001988 2847627.793338888,7488430.347863225 2849812.9569687424,7486738.541738064 2849491.1494426103,7484577.9217037475 2848413.5181617485,7484469.211207861 2846991.760183597,7482016.431945444 2844709.742056157,7477076.90127237 2842532.790972138,7476961.396502683 2840034.5428353143,7479142.3996923575 2838291.995068301,7477874.103671862 2834767.8359914343,7478891.897776186 2830856.7778035006,7481111.6084226025 2828598.9313140595,7481349.943452392 2829531.2720718235,7482454.23280106 2829413.4712222167,7486279.838421662 2825235.67817617,7486136.013639557 2823535.600106481,7484324.177607407 2823184.4193913913,7481675.2190044895 2824105.780973749,7480618.797036861 2823541.96525463,7480652.749481552 2822481.837284166,7484774.959317522 2817232.5934505793,7486847.252122631 2816351.3896419927,7487737.318911135 2817449.168293913,7487290.9458981315 2815636.776693179,7488206.778807293 2814478.832201385,7487465.057040138 2813798.912028599,7487392.810690613 2811886.170761064,7488342.4772665715 2810833.328738782,7487715.525894423 2809195.0109701636,7488876.699502886 2805184.4603505502,7490298.808558119 2805071.9575545266,7491392.707456839 2808012.323789274,7492078.942023807 2805833.1153567815,7492568.139088323 2801162.28770137,7490510.151950977 2800838.8356449837,7489561.955126255 2798342.0569587406,7490970.488101668 2797255.5009929473,7492479.811859116 2797328.1911093877,7489761.555426028 2790834.201563226,7489918.466482191 2787865.8544770987,7493081.570628622 2783694.355547242,7493057.336041517 2779564.9954076754,7496603.284058113 2771896.0505320565,7497935.100427208 2771948.137891294,7499444.147444403 2769880.7589685917,7498289.0259426925 2767441.331605122,7499784.876590851 2762454.340027488,7502230.362979466 2761388.5552310967,7503386.861169319 2762029.117441089,7506708.968733062 2760015.9580024206,7503825.905241007 2758552.791489074,7503767.128549867 2756211.4975623875,7505647.76002733 2753531.4264674163,7508288.369668437 2753415.542494468,7508664.518227828 2751112.297681443,7511678.1594825825 2748599.376919575,7512730.462629051 2748734.472576355,7514063.624850791 2745593.220478954,7514060.165708935 2742879.0460609244,7517150.287350046 2743014.06662792,7519148.940196926 2739535.6772087365,7521892.780298028 2737611.5809873864,7525364.720000197 2738369.4520981745,7525942.244182599 2736199.9574158485,7534136.293677389 2729507.608987271,7537988.719836865 2729819.508990318,7541595.47467815 2731573.676220552,7541103.908400913 2732868.6069990783,7542036.543094779 2733627.030816732,7545957.438199501 2731561.5310490336,7546962.987159836 2732155.6098790406,7547380.43525031 2731010.1845593294,7549037.074435136 2730986.457379554,7551727.00172761 2733592.5009307666,7550836.935050427 2741267.5308087845,7552012.366681911 2743749.899259265,7554193.369871588 2745600.7821655087,7556156.952180808 2745474.409695088,7556156.952180808 2743749.899259265,7554689.361209903 2741921.5300506647,7554974.726164205 2738681.5271959663,7559520.181387091 2734030.761299573,7563766.682996754 2733057.6913519218,7565152.741123574 2730792.3794036303,7562623.277537493 2727507.0532063977,7567109.14332564 2725146.9753857264,7573196.649679669 2725164.3693346516,7576478.014309783 2724002.6658331915,7577233.984971761 2722977.990283755,7575232.3003385505 2720897.219082897,7577210.69604373 2716484.838446893,7579876.598363703 2717886.3661169554,7582666.264802982 2717973.1746261693,7586316.319586601 2716274.537537494,7588397.2148279995 2717657.310650414,7587994.683549291 2718958.010311158,7588812.993126113 2722960.112260337,7592321.004239483 2722998.6655740966,7593295.156316675 2724763.032915405,7593492.19404177 2737708.1703722575,7598812.211172151 2739313.126891704,7601245.599135869 2743770.8049063506,7606809.222941847 2743333.6664094697,7608106.385998736 2745052.724720005,7608288.226720905 2748480.84940587,7610967.3972109845 2751102.6850265577,7613528.886969288 2748938.8689106796,7653579.661720676 2749904.8472245024,7655396.631473785 2785755.633864228,7654872.73189385 2789455.256280229,7661875.425170036 2792266.661206632,7665560.100537933 2779370.7352976087,7667041.540655369 2779287.4920823537,7667915.175462516 2780412.039011714,7670802.024373855 2787702.878554711,7674866.520953784 2790453.4453203925,7678285.254169493 2785036.0719502196,7679265.881478827 2781423.345323996,7680296.76842506 2780763.3341777506,7683031.695063215 2781043.4961687513,7690727.103481848 2786128.974783231,7690831.525728311 2787975.766981533,7687147.03949223 2793777.050953945,7689334.951503464 2796178.4185896832,7688286.025233748 2798207.9521069387,7689577.102431812 2803218.7697938224,7708933.042631632 2814767.117984104,7718866.057161986 2826124.0456906417,7750485.311895964 2875610.4288405385,7754767.079742949 2875806.5833586254,7758152.973296994 2893630.7485559196,7757255.028762086 2894416.4288574453,7758770.008262111 2894978.4922710345,7776121.60843585 2932928.142453053,7771486.201654275 2954213.6563921524,7751289.0721043935 2975529.9497413626,7686724.477640382 3058888.949703164,7702258.056871062 3163981.887085787,7763644.08668135 3185017.083087664,7811719.8770118365 3239994.3013135,7862576.911415718 3285489.8532320014,7969853.468370278 3354930.5269356854,8001043.133998045 3368544.495870251,8025478.349749179 3365820.5783275026,8069580.934276424 3386036.392415697,8079116.628226458 3385581.7628050614,8120138.695847316 3379516.097271328,8126422.124727779 3394407.670347011,8136572.1244675005 3407595.300855177,8157886.658950532 3448988.8215416656,8170536.480011005 3496791.2935269536,8193065.096475363 3506157.3004450225,8216262.185257422 3512421.7221958623,8217954.241962756 3514976.445838812,8234520.919456824 3529052.5173891354,8233029.461030496 3538570.5793184224,8229754.107875525 3545019.4472182994,8226778.871956412 3548561.478013908,8224295.89026899 3549933.1833124976,8228099.788588887 3552849.4374109404,8228888.709820139 3554756.6821928625,8233735.449352426 3558254.9741441747,8234729.532182571 3560708.566270692,8232010.331760202 3559849.4195513492,8229485.159985769 3560127.6602432546,8230708.1159116225 3560893.4703254006,8229694.663490081 3563603.809971666,8230384.510597164 3566729.6662439625,8231894.336850794 3565929.2699249056,8231764.76096351 3563367.853250085,8233688.035264351 3562417.227003267,8234323.216597774 3564954.937041383,8233611.773398155 3566051.9863883276,8236843.044257412 3569850.613223378,8239856.686068764 3569867.4110202193,8238814.623536212 3570800.6434074882,8238907.686630515 3572391.7678881935,8241055.819289631 3571528.979302616,8241940.809241436 3573564.0466771987,8243337.980504343 3572780.4049935956,8244144.531292031 3570432.649602119,8245708.6198974885 3571052.512759835,8247737.841967097 3574402.09454422,8245799.365542633 3575107.0458659874,8248926.775428298 3578295.891489192,8248185.053438504 3581137.1235975632,8248957.22386938 3582325.0281037,8248265.3147913655 3582481.9901953903,8249294.796996945 3583457.1666027433,8250753.960748438 3582043.252665113,8251797.370692108 3585474.506976972,8253003.453477465 3584505.6689514136,8254512.3416417455 3585170.6039760276,8255800.753428185 3587289.794896513,8259179.968447303 3589409.345731245,8261975.646139086 3592970.9056362547,8263482.912044428 3597070.881068387,8266780.140147257 3596912.8072657227,8268314.289375666 3598671.566126165,8269031.623380097 3597917.348046244,8269487.2176544415 3598496.6905605206,8268162.81572003 3599544.505843472,8266548.984779346 3603340.884086931,8271222.5738568315 3604155.4828716554,8271769.42317431 3605428.562033997,8270520.307279439 3606025.049894882,8270712.556040038 3607069.070032398,8273306.7455648035 3610425.2746493137,8273306.7455648035 3612924.383859927,8276472.894855904 3613965.0934655634,8278150.539472046 3613017.4730539704,8278110.738078669 3614267.4935399676,8280160.463862645 3614715.141814916,8277790.472237613 3616394.227879448,8278366.995323836 3618931.898020845,8280224.58433462 3619193.1652695397,8281825.915209682 3621059.430783976,8284777.140182546 3620811.443920768,8284836.4392960565 3621917.994403061,8283395.185848756 3622328.6776568196,8283299.117016881 3622925.976854422,8284708.310339513 3622552.64544568,8285325.956960704 3623790.0207450404,8283796.381516212 3623634.521040271,8284035.718310099 3625091.5746078333,8286533.839002991 3625278.2123413505,8286822.156595466 3626585.273814771,8289633.859729821 3627172.3043473726,8288455.546815958 3628153.8003896964,8291017.676883973 3629535.9506438095,8292490.878691172 3629498.5577283455,8293230.976529595 3628095.157971175,8294364.304346675 3628606.8805482714,8295105.521725218 3630154.948629977,8298474.800255268 3631793.7468705582,8297711.944705426 3634055.7928862097,8298601.942809802 3637074.9705699375,8300859.767023478 3639851.250273729,8303366.014039197 3639318.623335507,8304224.02137095 3637701.518523759,8312235.616439218 3639634.2459828593,8315190.147267 3642449.8757943837,8314587.129919331 3643294.5856600706,8315868.245826347 3645129.665036941,8314466.570688163 3649409.4926207154,8311991.827422297 3648937.3881634697,8311088.872619745 3650155.217317547,8308690.091325368 3648134.422103631,8308064.07325583 3649998.6608644747,8304886.677356575 3650136.2722587995,8304174.082222867 3649244.544624769,8305666.431316442 3647277.679168579,8305738.788985456 3645630.283705768,8304460.95255064 3644848.072094441,8304629.490259701 3644202.1381115834,8303246.011628123 3644767.344748582,8303322.265479316 3644155.861988714,8301372.1706396 3643309.53347647,8299023.217285134 3644064.7399999797,8298708.060786068 3648656.6819334417,8294455.890008696 3650006.746491049,8294953.265716201 3652490.050375025,8294455.890008696 3656427.4504613806,8295514.87299253 3656657.3716770583,8296309.384354651 3660235.2683677184,8295066.366096208 3662428.4045946673,8297056.0910086045 3665257.968821243,8295696.100678262 3668117.487770328,8297938.966001404 3672312.7770352447,8296236.334501043 3673424.1704265526,8297310.901656988 3673621.0529045183,8297054.866828165 3675033.849614871,8298734.677498956 3676401.324877525,8299255.318534757 3680515.3560269703,8302687.7441591555 3682246.9697352084,8304101.390372738 3686971.463469538,8305502.346053054 3687971.605695782,8306586.931629213 3687539.4227076,8306982.450113961 3688825.4504348626,8309225.872034555 3686937.679204582,8310548.347028581 3688319.919848967,8308746.864043035 3690772.6229924127,8310358.881700531 3691953.2893753867,8309874.57846347 3693254.89914042,8308517.308558846 3694984.3542592875,8307546.728056192 3694916.8093961617,8308506.57335243 3695989.041200409,8306971.540247264 3695552.624167587,8305649.859406484 3697865.7759556966,8302835.687985059 3697397.9922050643,8301720.488992333 3698008.8682087567,8303043.803335321 3698417.549572113,8302238.569568525 3698723.8365439456,8302696.649273141 3700554.535033985,8305885.17400453 3701462.152315753,8306533.158192587 3704631.5165758273,8305200.224955039 3706018.8858544244,8306176.608431427 3706841.0687490758,8303599.450566114 3707513.828849736,8301682.640365463 3711407.134815704,8299517.030768932 3711929.961450647,8298537.642222892 3716708.7213143255,8297564.709873359 3717481.6729588215,8297749.166492242 3718772.432630339,8296515.969173234 3719608.557253814,8297147.706726887 3721119.5601548725,8293465.369513577 3723450.2648810428,8293250.299923405 3725125.832552472,8291766.633638794 3726006.7558015073,8293590.269759608 3727782.538586453,8293683.221645739 3729311.968908469,8298477.013509384 3730468.7736929604,8299837.630791099 3731566.0871099834,8299080.213309699 3734843.6130069434,8300760.358272922 3736731.889120271,8299752.137644808 3737794.55115002,8301432.839094165 3739259.61309604,8301178.919780944 3742120.033960279,8302550.153379854 3743938.283510464,8303376.032348091 3743553.3818815104,8304145.472779773 3746056.7089071744,8305197.21921747 3746167.8636956206,8305254.994033191 3749000.683293012,8308441.959401153 3748251.937889527,8309882.434168615 3750370.3336201026,8310683.489447003 3750369.1534980214,8311943.5143180145 3753186.4341486446,8315639.655259503 3753689.817999973,8315631.195423483 3755114.4394626124,8313975.428872144 3755051.999462217,8313694.2358384 3757122.652906792,8312056.614809341 3757824.9774055476,8312221.701614186 3759533.790812836,8309999.987662212 3758867.845400744,8309962.695521478 3761100.448991098,8308521.525786433 3761876.598101851,8308403.064927666 3764392.372730433,8305070.537414307 3767391.9705563597,8304609.0134846475 3771548.0402493365,8302634.422345704 3772285.1859795456,8300575.122862882 3769496.136426184,8300511.670864448 3771331.524223194,8297442.592280638 3772064.496986319,8294732.073554035 3774864.2605020166,8294543.275920289 3776206.502220221,8295928.536220318 3777358.4668411254,8292812.703005097 3779808.762506879,8293173.044308116 3780827.2486460027,8292099.702111844 3781127.500093295,8293061.168108547 3783440.7684766944,8287873.568740729 3784695.3391327052,8288017.838689478 3785849.434592115,8285742.134339191 3786344.1934557906,8285725.324984763 3784666.541434327,8283573.296700066 3786288.0355719686,8282779.589064668 3785501.3272034754,8280237.274088655 3785438.9926723028,8279055.061319068 3788783.5673088273,8278130.998559952 3787844.771766288,8276895.797378791 3788265.8197634993,8276192.8147944305 3789949.6337562976,8274788.742168375 3790361.941683605,8274169.137771299 3795832.08159472,8270156.849030679 3796221.1627386897,8266471.060690514 3797725.350113547,8266565.79335454 3798865.0361462133,8264100.6236762 3801132.224446611,8264975.149261914 3802507.9676201465,8264108.304721064 3803028.5717120995,8265097.601035745 3803965.7951491843,8264756.629435445 3805009.654806059,8263973.496595075 3805046.274284437,8263070.361900229 3808640.891557969,8261921.655852094 3809309.7402228005,8262833.028857177 3810026.7261536755,8262582.44879472 3812954.678170659,8260282.476350163 3815392.375297656,8261254.852213561 3817478.8937543794,8259833.413746941 3823148.2914853035,8261260.529396273 3825962.2982115527,8260585.821739934 3826114.70700803,8260876.811556785 3831132.503278931,8259746.027946668 3831179.8957799845,8261308.285123865 3832594.5012155054,8261422.721783039 3835534.753280134,8263053.774850821 3836602.3876072946,8263686.069781167 3838256.85605624,8268317.739834603 3840784.4419232514,8271722.780530307 3840018.302335789,8271926.383656329 3840690.637498573,8278269.813519692 3842153.682070238,8280567.893310268 3845255.8363600364,8283024.380847561 3846494.7316578054,8282732.612128233 3847335.054798205,8284207.928894439 3847485.228034803,8289052.998968322 3851126.570920841,8290122.222454753 3852737.9732242357,8290734.1458069645 3856183.554677407,8288046.782091043 3855929.688224402,8287379.97845251 3856836.4350298014,8289776.686532691 3857237.310275465,8289973.16610186 3858767.639346504,8289493.601624201 3859939.800238968,8287557.421720834 3859578.5320985345,8288568.090709831 3861631.155695063,8286299.7340025315 3863379.542376609,8288497.514263987 3863706.906115478,8288258.511651212 3864612.9274304863,8289233.781264774 3865666.244804948,8286457.919221589 3870591.053202294,8286367.527795066 3872332.8219281873,8284445.59678652 3874357.857833095,8284025.477028266 3881824.2909743227,8280343.328835449 3881309.915297506,8277244.227051014 3882508.7186703146,8276991.821571548 3884946.416057357,8274350.700083422 3884715.968883222,8272739.127815207 3886034.751129662,8272482.53638893 3886918.0892254077,8275520.445292677 3889037.178144474,8273489.309863664 3896455.4811811703,8273761.05153868 3899178.3850829164,8268675.342566826 3900031.4425862776,8259245.601751159 3904803.4363063597,8256821.954131566 3904882.4636061555,8256689.751549579 3906000.648656587,8258048.485528146 3907242.9317864673,8255563.765475555 3909529.9351342344,8255802.15594245 3911364.1472866493,8254610.2027174225 3913609.8680648436,8251842.199496328 3916457.1667568153,8247167.059181738 3918086.7816675124,8245365.876536175 3921235.8804727243,8239763.656147669 3922533.749923718,8237893.900807098 3926976.655143871,8239577.608105346 3931258.9409172633,8240533.619892278 3930806.530110091,8243012.482313262 3933520.5932446686,8243797.173403865 3932565.279403938,8247870.664709967 3933167.807498676,8249561.519276121 3935384.973099032,8251617.2563126 3935765.237311484,8256169.7782080835 3940415.5904553407,8256849.161060394 3944498.758271666,8257742.277335029 3944801.3414540584,8258437.6901940135 3946545.5475466778,8258630.01209152 3949472.9656728166,8257493.589592597 3950246.255938496,8257302.120068432 3953028.3659394076,8258065.569730398 3954654.643117371,8257909.256571218 3958016.0706137656,8258774.542973154 3957821.768318034,8259132.9466491155 3958935.1400261763,8255944.22221056 3961771.175913777,8255096.602211812 3963626.355979859,8255181.360538145 3966498.6664133593,8253676.844892143 3968913.996852085,8249968.5144664105 3971507.863138751,8248442.802810127 3971050.0825560014,8246747.5737219425 3973033.949792023,8243971.62150997 3971762.1984495996,8241492.347206869 3972041.967035586,8239384.138837849 3976145.596265219,8234443.875348567 3979474.295773518,8233808.163243812 3982070.5392438173,8235651.736351469 3983063.386886903,8232791.025813166 3991544.1668782546,8236117.019095055 3994161.651304753,8237929.857002622 3994364.8673774144,8239000.527865074 3996986.7843853813,8238581.409982236 3998835.4599977974,8244402.974072761 4005338.523317857,8248291.363886171 4005827.5006793006,8250393.966428274 4005201.977872479,8259025.457105402 4007491.7077320665,8259758.94123024 4008822.255599214,8260976.553820536 4008945.439956008,8260893.175521932 4009868.627587219,8261679.313765914 4009554.008891284,8265894.760243274 4013540.13110207,8268335.9966763705 4014533.9618269117,8269100.923547979 4015721.9576449064,8268448.20672309 4018301.2719073053,8269262.1760642845 4020172.7466161037,8267579.135458467 4022648.2252735374,8268667.372091285 4024725.2612127047,8266738.450663996 4025848.2118168073,8266993.327324839 4027510.67698301,8265891.431456542 4028788.6253197617,8264641.190900853 4028865.2965680463,8263390.961922394 4032111.9419965455,8261528.364536398 4032332.677339387,8261776.718320358 4031162.700667054,8260110.376862674 4030959.367181417,8257933.746859193 4031959.1474583643,8257340.302653774 4033521.983458086,8255918.641436853 4032582.509981247,8253101.479083349 4035219.6529139364,8241691.954297131 4032521.03130149,8239445.137911303 4033575.716052681,8238628.16416837 4031953.774949584,8236459.660487717 4030536.8641501036,8234095.011864286 4030396.3914036057,8229937.896800102 4031819.46305302,8226382.463583657 4036207.4456653707,8227478.876633073 4040003.492194501,8226778.560150519 4040474.2913145353,8227043.433969552 4042713.338499454,8229457.361171207 4042789.43939725,8229579.29219246 4046235.3288059738,8231354.047034311 4047194.987132569,8232468.522784306 4049423.790274465,8233915.725590471 4049435.902509586,8234149.224456301 4050217.749378178,8233186.422180431 4050511.2942261985,8233513.478844382 4051869.475125045,8236678.333267165 4052477.4674203377,8237944.773758731 4054209.909780457,8237481.462038049 4056819.3643171894,8238538.4406031305 4057858.3063670974,8238474.320576433 4059118.275799324,8236486.253200122 4063968.996101599,8236790.613278186 4065316.7684691073,8231828.880990207 4065952.3369443114,8230682.735513 4067017.4453725144,8231450.060707377 4070789.3761750977,8230196.380602063 4070722.933393327,8230171.667675109 4069933.601431244,8228766.459534586 4070421.344417174,8230973.0566893285 4074116.731361191,8228258.419586844 4076049.8371423185,8227179.956360038 4076106.1985122114,8226980.6944715185 4074954.351974778,8225261.142352895 4073587.47018487,8222828.143562117 4073861.803954896,8221690.1244077375 4072092.838754581,8220554.6656016465 4073076.431752318,8217546.367682449 4073372.860887296,8216601.376525104 4074221.7507404857,8217181.7962944405 4075407.0946970773,8212540.107542493 4073557.9476843816,8211245.96213436 4074801.6396743576))';
  var format = new ol.format.WKT();
  var totalFeatures = vector.getSource().getFeatures();
  for (var i = 0; i < totalFeatures.length; i++) {
    if (totalFeatures[i].get('count') == $("#polygons").val()) {
      wkt = format.writeGeometry(totalFeatures[i].getGeometry());

      // Check if the WKT string has Z coordinates
      var hasZCoordinates = wkt.toUpperCase().includes(' Z');

      if (hasZCoordinates) {

        // Parse the WKT string to a geometry object
        var format = new ol.format.WKT();
        var geometry = format.readGeometry(wkt);

        // Extract the coordinates from the geometry
        var coordinates = geometry.getCoordinates();

        // Iterate over each coordinate and remove the Z coordinate
        coordinates.forEach(function (ring, ringIndex) {
          ring.forEach(function (coord, coordIndex) {
            coordinates[ringIndex][coordIndex] = coord.slice(0, 2); // Keep only X and Y coordinates
          });
        });

        // Recreate the modified WKT string
        wkt = format.writeGeometry(new ol.geom.Polygon(coordinates));

        // Output the modified WKT string without Z coordinate
        console.log(wkt);

      }
    }
  }

  //console.log(totalFeatures.length);
  console.log(wkt);

  //check search by AOI is checked or not
  var searchByAOI = document.getElementById('chkSearchByAOI').checked

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
    url: "server_scripts/azo.php?geom=" + wkt + "&searchByAOI=" + searchByAOI + "&rollAngle=" + rollAngle + "&upcomingAttempts=no" + "&startDate=" + $("#orbitoStartDate").val() + "&endDate=" + $("#orbitoEndDate").val() + "&spot=" + spot6 + "&prss=" + prss + "&pleiades=" + pleiades + "&sv=" + sv + "&pneo=" + pneo + "&taijing=" + taijing,
    format: new ol.format.GeoJSON(),
  });

  $satelliteNameTD = '';
  resultVectorSatelliteOrbito.setSource(testsourceOrbito);
  testsourceOrbito.once('change', function (e) {
    if (testsourceOrbito.getState() === 'ready') {
      $("#loadingIcon").hide();
      //move(feature.getGeometry().getExtent());
      resultFeatures = testsourceOrbito.getFeatures();
      //console.log(resultFeatures);        

      console.log("total results found= " + resultFeatures.length);
      if (resultFeatures.length > 0) {  //console.log(resultFeatures.length);        


        var info;
        var content;
        tableData = "";
        tableData += '<div class="orbito-results-header"><div class="orbito-results-header-left"><div class="orbito-nb-items">' + resultFeatures.length + ' items</div></div><div class="orbito-results-header-right"><div class="orbito-export"><!--<button class="export-button" name="export" type="button" value="export" title="Launch export"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M22.491 13.166h-3.84v-6.583h-5.029v6.583h-3.749l6.309 6.309z"></path><path d="M28.709 18.834v0c-1.097 0-2.011 0.914-2.011 2.011v3.749h-21.303v-3.474c0-1.097-0.914-2.011-2.011-2.011s-2.011 0.914-2.011 2.011v7.589h29.44v-7.771c0-1.189-0.914-2.103-2.103-2.103z"></path></g></svg></button>--></div><div class="orbito-all-orbits"><button id="btnToggleAllOrbits" class="toggle-orbit" title="Toggle all orbits" onclick="toggleAllOrbits();"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M19.9,6.5c-2.7,0-5.4,1-7.3,2.7C12.3,9.1,11.9,9,11.4,9c-2,0-3.6,1.6-3.6,3.6c0,0.9,0.4,1.8,1,2.6 c-0.3,1.1-0.5,2.1-0.5,3c0,6.3,5.1,11.5,11.5,11.5s11.6-5.1,11.6-11.5S26.3,6.5,19.9,6.5z M19.9,27c-5,0-9.1-4-9.1-9 c0-0.5,0.1-1.1,0.2-1.6c0-0.2,0-0.3,0.1-0.5c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c5,0,9.1,4.1,9.1,9.1C29,23.1,24.9,27,19.9,27z"></path><path d="M3.7,11.8c0.1,0,0.2,0,0.3,0c2,0,3.6-1.6,3.6-3.6c0-0.5-0.2-1.2-0.4-1.6c1.6-1.3,3.5-1.9,5.6-1.9 c1.1,0,2.1,0.2,3,0.5h0.1h0.1c1.1-0.2,2.3-0.4,3.3-0.4h0.7l-0.7-0.4c-1.9-1.4-4.2-2.1-6.7-2.1c-2.7,0-5.4,0.9-7.3,2.7 C4.8,4.9,4.4,4.9,4,4.9C2,4.9,0.5,6.4,0.5,8.3c0,0.9,0.4,1.8,1,2.6c-0.3,1-0.5,2-0.5,3c0,4.1,2.1,7.8,5.7,9.9l0.5,0.3l-0.2-1 c-0.2-0.7-0.3-1.5-0.4-2.1v-0.1l-0.1-0.1c-2-1.7-3.1-4.3-3.1-6.9c0-0.5,0.1-1.1,0.2-1.6C3.6,12.1,3.7,11.9,3.7,11.8z"></path></g></svg></button></div><div class="orbito-all-corridors"><!--<button id="btnToggleAllCorridors" class="toggle-corridor" title="Toggle all corridors" onclick="toggleAllCorridors();"><svg viewBox="0 0 32 32" class="pictos " style="width: 1.9rem; height: 1.9rem;"><g><path d="M22.2,0.7c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3c0.7,0,1.4-0.4,1.7-1 l15.8-26C23.5,2.6,23.2,1.3,22.2,0.7z"></path><path d="M28.5,3.8L28.5,3.8c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3 c0.7,0,1.4-0.4,1.7-1l15.8-26C29.8,5.6,29.5,4.4,28.5,3.8z"></path><path d="M4,17.2c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,9,9,8.2,8.6,7.5 c1.3-1.1,2.9-1.9,4.6-2.3L15,2.3c-3.1,0.3-6,1.6-8.3,3.5C6.2,5.5,5.5,5.3,4.9,5.3c-2.4,0-4.4,2-4.4,4.4C0.5,11,1,12.2,2,13 c-0.4,1.4-0.6,2.7-0.6,4.2c0,2,0.4,3.8,1.1,5.6l1.8-3C4.1,19,4,18.1,4,17.2z"></path><path d="M30.4,11.5l-1.8,3c0.2,0.9,0.3,1.9,0.3,2.9c0,5.7-4,10.6-9.3,12l-1.7,2.8c7.6-0.7,13.6-7.1,13.6-14.9 C31.5,15.2,31.1,13.2,30.4,11.5z"></path></g></svg></button>--></div></div></div>';
        tableData += '<table id="table_id" class="table table-striped table-bordered tablesorter" style="width:100%">';
        tableData += "<thead> <tr><th style='font-weight: bold;font-size: 1.5rem'>Satellite</th><th style='font-weight: bold;font-size: 1.5rem'>Orbit</th><th style='font-weight: bold;font-size: 1.5rem'>Date</th><th></th></tr> </thead>";
        tableData += "<tbody id='tablebody'>";

        for (var i = 0; i < resultFeatures.length; i++) {//console.log(resultFeatures[i].get('satellite')); 

          //converting date format
          var dateStr = resultFeatures[i].get("date");
          var dateObj = new Date(dateStr);
          var formattedDate = ("0" + dateObj.getDate()).slice(-2) + "-" + ("0" + (dateObj.getMonth() + 1)).slice(-2) + "-" + dateObj.getFullYear();


          if ((resultFeatures[i].get('satellite') == 'SPOT6')) //Orange
          {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(243, 110, 44); background-color: rgba(243, 110, 44, 0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          if ((resultFeatures[i].get('satellite') == 'Pleiades-1A') || (resultFeatures[i].get('satellite') == 'Pleiades-1B')) //Pink
          {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(220, 12, 203); background-color: rgba(220, 12, 203, 0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          if ((resultFeatures[i].get('satellite') == 'PNEO3') || (resultFeatures[i].get('satellite') == 'PNEO4')) //Purple
          {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(106, 49, 220); background-color: rgb(106, 49, 220,0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          if ((resultFeatures[i].get('satellite') == 'PRSS')) //Green
          {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(0,134,49); background-color: rgba(0,134,49, 0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          if ((resultFeatures[i].get('satellite') == 'Taijing')) //Black
          {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          if ((resultFeatures[i].get('satellite') == 'SuperView')) //Steel Blue
          {
            $satelliteNameTD = "<td><span class='satellite-name' style='color: rgb(70, 130, 180); background-color: rgba(70, 130, 180, 0.1);'>" + resultFeatures[i].get('satellite').bold() + "</span></td>";
          }
          tableData += "<tr class='orbitoRowData' onmousemove='showOrbitPath(this)' onmouseleave='hideOrbitPath(this)'>" +
            $satelliteNameTD +
            "<td style='color:#000 !important'>" + resultFeatures[i].get("orbitNumber").bold() + "</td>" +
            "<td style='color:#000 !important'><strong>" + formattedDate + "</strong></td>" +
            "<td><button id='" + resultFeatures[i].get("satellite") + '_' + resultFeatures[i].get("orbitNumber") + "_orbitoVisibility' class='toggle-orbit toggleOrbit' title='Toggle orbit' onclick='toggleOrbito(this.id);'><svg viewBox='0 0 32 32' class='pictos cz-color-3684147' style='width: 1.9rem; height: 1.9rem;'><path d='M16.5,1c-3.7,0-7.1,1.4-9.8,3.6C6.2,4.3,5.5,4.1,4.9,4.1c-2.4,0-4.4,2-4.4,4.4C0.5,9.8,1,11,2,11.8 c-0.4,1.4-0.6,2.7-0.6,4.2c0,8.3,6.7,15,15,15s15.1-6.7,15.1-15S24.8,1,16.5,1z M16.5,28.5C9.6,28.5,4,22.9,4,16 c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,7.8,9,7,8.6,6.3c2.1-1.7,4.8-2.7,7.8-2.7 c6.8,0,12.5,5.6,12.5,12.5C28.9,22.8,23.3,28.5,16.5,28.5z' class='cz-color-3684147'></path></svg></button><!--<button id='" + resultFeatures[i].get("satellite") + '_' + resultFeatures[i].get("orbitNumber") + "_corridorVisibility' class='toggle-corridor' title='Toggle corridor' onclick='toggleCorridor(this.id);'><svg viewBox='0 0 32 32' class='pictos cz-color-3684147' style='width: 1.9rem; height: 1.9rem;'><g class='cz-color-3684147'><path d='M22.2,0.7c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3c0.7,0,1.4-0.4,1.7-1 l15.8-26C23.5,2.6,23.2,1.3,22.2,0.7z' class='cz-color-3684147'></path><path d='M28.5,3.8L28.5,3.8c-1-0.6-2.2-0.3-2.8,0.7l-15.8,26c-0.6,1-0.3,2.2,0.7,2.8c0.3,0.2,0.7,0.3,1,0.3 c0.7,0,1.4-0.4,1.7-1l15.8-26C29.8,5.6,29.5,4.4,28.5,3.8z' class='cz-color-3684147'></path><path d='M4,17.2c0-1.1,0.2-2.1,0.4-3.1c0.2,0,0.4,0.1,0.5,0.1c2.5,0,4.4-1.9,4.4-4.4C9.3,9,9,8.2,8.6,7.5 c1.3-1.1,2.9-1.9,4.6-2.3L15,2.3c-3.1,0.3-6,1.6-8.3,3.5C6.2,5.5,5.5,5.3,4.9,5.3c-2.4,0-4.4,2-4.4,4.4C0.5,11,1,12.2,2,13 c-0.4,1.4-0.6,2.7-0.6,4.2c0,2,0.4,3.8,1.1,5.6l1.8-3C4.1,19,4,18.1,4,17.2z' class='cz-color-3684147'></path><path d='M30.4,11.5l-1.8,3c0.2,0.9,0.3,1.9,0.3,2.9c0,5.7-4,10.6-9.3,12l-1.7,2.8c7.6-0.7,13.6-7.1,13.6-14.9 C31.5,15.2,31.1,13.2,30.4,11.5z' class='cz-color-3684147'></path></g></svg></button>--></td>"
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
        tableData += '<div class="orbito-results-header"><div class="orbito-results-header-left"><div class="orbito-nb-items">' + resultFeatures.length + ' items</div></div><div class="orbito-results-header-right"></div></div>';
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