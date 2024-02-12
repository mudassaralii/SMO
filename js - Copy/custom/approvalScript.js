// feather.replace();
var orderType = "archive";
var view = new ol.View({
  center: [8566491, 3215057],
  zoom: 5,
});
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
// Return an object of WMS layer
function getWmsLayerMap(lyrName, isVisible) {
  var obj_Wms = new ol.layer.Tile({
    source: new ol.source.WMTS({
      url: '../geoserver/gwc/service/wmts?',
      // url: 'getImagery.php',
      layer: 'oms:' + lyrName,
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

$(document).ready(function() {
  var h_nav = $(".navbar").height();
  var h_win = $(window).height();
  h_win = h_win - h_nav;
  split = (h_win / 2) - 20;
  $("#map").height(split);
  $("#tbl").height(split);
  fetchData();
});

function init() {
  map = new ol.Map({
    layers: [
      getWmsLayerMap("oms", true),
    ],
    target: 'map',
    view: view,
  });
}

function fetchUsers() {

}

function fetchData() {
  $.ajax({
    type: "GET",
    url: "server_scripts/getData.php",
    cache: false,
    success: function(data) {
      var tbl = JSON.parse(data);
      tableArchive = '';
      tableArchive += '<table id="table_archive" class="table table-striped table-bordered tablesorter" style="width:100%">';
      tableFresh = '';
      tableFresh += '<table id="table_fresh" class="table table-striped table-bordered tablesorter" style="width:100%">';
      tableCustom = '';
      tableCustom += '<table id="table_custom" class="table table-striped table-bordered tablesorter" style="width:100%">';

      if ($("#role").html() == '1') {
        tableArchive += "<thead> <tr><th>Sr. #</th><th>PDF</th><th>Delivery</th><th>Status</th><th>Action</th><th>AOI</th><th>Order ID</th><th>Date</th><th>Time</th><th>User</th><th>PRSS Scenes</th><th>SPOT Scenes</th><th>Pleiades Scenes</th><th>PRSS Area (km²)</th><th>PRSS Amount ($)</th><th>SPOT Area (km²)</th><th>SPOT Amount (€)</th><th>Pleiades Area (km²)</th><th>Pleiades Amount (€)</th></tr> </thead>";

        tableFresh += "<thead> <tr><th>Sr. #</th><th>PDF</th><th>Details</th><th>Scenes</th><th>Scenes Entry</th><th>Count</th><th>Area</th><th>Edit</th><th>Status</th><th>Action</th><th>AOI</th><th>Order ID</th><th>Date</th><th>Time</th><th>User</th><th>Start Date</th><th>End Date</th><th>Inc Angle</th><th>Cloud Cover</th><th>Satellite</th><th>Product</th></tr> </thead>";

        tableCustom += "<thead> <tr><th>Sr. #</th><th>Order ID</th><th>Date</th><th>Time</th><th>User</th><th>Start Date</th><th>End Date</th><th>Inc Angle</th><th>Cloud Cover</th><th>Satellite</th><th>Product</th><th>PDF</th><th>Count</th><th>Area</th><th></th><th>Status</th><th>Action</th><th>AOI</th></tr> </thead>";
      } else {
        tableArchive += "<thead> <tr><th>Sr. #</th><th>Order ID</th><th>Date</th><th>Time</th><th>Username</th><th>PRSS Scenes</th><th>SPOT Scenes</th><th>Pleiades Scenes</th><th>PRSS Area (km²)</th><th>PRSS Amount</th><th>SPOT Area (km²)</th><th>SPOT Amount</th><th>Pleiades Area (km²)</th><th>Pleiades Amount</th><th>PDF</th><th>Status</th></tr> </thead>";
        tableFresh += "<thead> <tr><th>#</th><th>Order ID</th><th>Date</th><th>Time</th><th>Username</th><th>Start Date</th><th>End Date</th><th>Inc Angle</th><th>Cloud Cover</th><th>Satellite</th><th>Product</th><th>PDF</th><th>Status</th></tr> </thead>";
      }
      tableArchive += "<tbody id='tablebody'>";
      tableFresh += "<tbody id='tablebody'>";
      tableCustom += "<tbody id='tablebody'>";
      var status_name = [" ", "Completed", "In Progress", "Pending", "Order Placed"];
      var statuses = [];
      try {
        $("#table_id").hide();
        // $("#noData").hide();
      } catch (e) {}
      if (tbl.length > 0) {
        // var dateToday = new Date();
        for (var i = 0; i < tbl.length; i++) {
          if ($("#role").html() == '1') {
            if (tbl[i].type == 'archive') {
              tableArchive += '<tr>'
              tableArchive += '<td></td>';
              tableArchive += '<td><a href="uploads/' + tbl[i].orderid + '.pdf" target="_blank"><i class="fa fa-file-pdf" style="font-size:30px;color:red;"></i></a></td>';
              tableArchive += '<td><div class="input-group date" data-provide="datepicker" data-date-format="dd/mm/yyyy"><input type="text" style="width: 100px; cursor: pointer;" id="orderDeliveryDate-' + i + '" value=' + tbl[i].deliverydate + ' onchange="handleUpdate(this.id)"><div class="input-group-addon"><span class="glyphicon glyphicon-th"></span></div></div></td>';
              switch (tbl[i].status_id) {
                case '1':
                  tableArchive += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1" selected>Completed</option><option value="2">In Progress</option><option value="3">Pending</option><option value="4">Order Placed</option></select></td>';
                  break;
                case '2':
                  tableArchive += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1">Completed</option><option value="2" selected>In Progress</option><option value="3">Pending</option><option value="4">Order Placed</option></select></td>';
                  break;
                case '3':
                  tableArchive += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1">Completed</option><option value="2">In Progress</option><option value="3" selected>Pending</option><option value="4">Order Placed</option></select></td>';
                  break;
                case '4':
                  tableArchive += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1">Completed</option><option value="2">In Progress</option><option value="3">Pending</option><option value="4" selected>Order Placed</option></select></td>';
                  break;
              }
              tableArchive += '<td><button disabled id="btn-' + [i] + '" onclick="updateRecord(\'' + tbl[i].orderid + '\',\'' + [i] + '\', \'archive\');">Update</button></td>';
              var fggeojson = null;
              try {
                var wkt = (new ol.format.WKT()).readFeatures(tbl[i].aoi);
                var gj = new ol.format.GeoJSON();
                fggeojson = gj.writeFeatures(wkt, {
                  featureProjection: 'EPSG:3857'
                });
              } catch (e) {}
              tableArchive += '<td><a href="data:text/json;charset=utf-8,' + encodeURIComponent(fggeojson) + '" download = "' + tbl[i].orderid + '.json"><i class="fa fa-download" style="font-size:20px;color:blue;"></i></a></td>';
              tableArchive += '<td>' + tbl[i].orderid + '</td>';
              tableArchive += '<td>' + tbl[i].date + '</td>';
              tableArchive += '<td>' + tbl[i].time + '</td>';
              tableArchive += '<td>' + tbl[i].username + '</td>';
              tableArchive += '<td>' + tbl[i].prssscene + '</td>';
              tableArchive += '<td>' + tbl[i].spotscene + '</td>';
              tableArchive += '<td>' + tbl[i].pleiadesscene + '</td>';
              if (tbl[i].prssarea == null || tbl[i].prssarea == "0" || tbl[i].prssarea == 0)
                tableArchive += '<td> - </td>';
              else
                tableArchive += '<td>~' + tbl[i].prssarea + '</td>';
              tableArchive += '<td>' + parseFloat(tbl[i].prssamount).toFixed(2) + '</td>';
              if (tbl[i].spotarea == null || tbl[i].spotarea == "0" || tbl[i].spotarea == 0)
                tableArchive += '<td> - </td>';
              else
                tableArchive += '<td>~' + tbl[i].spotarea + '</td>';
              tableArchive += '<td>' + parseFloat(tbl[i].spotamount).toFixed(2) + '</td>';
              if (tbl[i].pleiadesarea == null || tbl[i].pleiadesarea == "0" || tbl[i].pleiadesarea == 0)
                tableArchive += '<td> - </td>';
              else
                tableArchive += '<td>~' + tbl[i].pleiadesarea + '</td>';
              tableArchive += '<td>' + parseFloat(tbl[i].pleiadesamount).toFixed(2) + '</td>';
              tableArchive += '</tr>';
            } else if (tbl[i].type == 'fresh') {
              var sat, product;
              if (tbl[i].prss != null) {
                sat = 'PRSS';
                product = tbl[i].productprss;
              } else if (tbl[i].spot != null) {
                sat = 'SPOT 6/7';
                product = tbl[i].productspot;
              }
              tableFresh += '<tr>'
              tableFresh += '<td></td>';
              tableFresh += '<td><a href="uploads/' + tbl[i].orderid + '.pdf" target="_blank"><i class="fa fa-file-pdf" style="font-size:30px;color:red;"></i></a></td>';
              tableFresh += '<td><i class="fas fa-arrows-alt" id="' + tbl[i].orderid + '" onclick=handlePlusClick(this.id);></i></td>';
              tableFresh += '<td>' + tbl[i].scenes + '</td>';
              tableFresh += '<td><i class="fas fa-plus" id="' + i + '" onclick=addNewOpts(this.id);></i><br/><select name="category" id="scenesId-' + i + '"></select><br/><button disabled id="btnScenes-' + [i] + '" onclick="insertScenes(\'' + tbl[i].orderid + '\',\'' + [i] + '\', \'fresh\');">Submit</button></td>';
              if (tbl[i].fresh_count > 0)
                tableFresh += '<td><input type="number" class="fresh_count" id="fresh_count-' + [i] + '" value="' + tbl[i].fresh_count + '" step="1" onkeydown="return false" disabled></td>';
              else
                tableFresh += '<td><input type="number" class="fresh_count" id="fresh_count-' + [i] + '" value="0" step="1" onkeydown="return false" disabled></td>';

              if (sat === 'PRSS') {
                try {
                  tableFresh += '<td><input type="number" id="area-' + [i] + '" value ="' + parseInt(tbl[i].prssarea) + '" class="fresh_area" disabled  onchange="handleUpdate(this.id)"  onkeyup="handleUpdate(this.id)"  onkeydown="handleUpdate(this.id)"  onpaste="handleUpdate(this.id)"></td>';
                } catch (e) {}
              } else {
                tableFresh += '<td><input type="number" id="area-' + [i] + '" value ="' + parseInt(tbl[i].spotarea) + '" class="fresh_area" disabled onchange="handleUpdate(this.id)"  onkeyup="handleUpdate(this.id)"  onkeydown="handleUpdate(this.id)"  onpaste="handleUpdate(this.id)"></td>'
              }
              tableFresh += '<td><a href="#" onclick="toggleEditFresh(' + [i] + ')"><i class="fas fa-pencil-alt"  style="font-size:20px;color:black;"></i></a></td>'
              switch (tbl[i].status_id) {
                case '1':
                  tableFresh += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1" selected>Completed</option><option value="2">In Progress</option><option value="3">Pending</option><option value="4">Order Placed</option></select></td>';
                  break;
                case '2':
                  tableFresh += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1">Completed</option><option value="2" selected>In Progress</option><option value="3">Pending</option><option value="4">Order Placed</option></select></td>';
                  break;
                case '3':
                  tableFresh += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1">Completed</option><option value="2">In Progress</option><option value="3" selected>Pending</option><option value="4">Order Placed</option></select></td>';
                  break;
                case '4':
                  tableFresh += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1">Completed</option><option value="2">In Progress</option><option value="3">Pending</option><option value="4" selected>Order Placed</option></select></td>';
                  break;
              }
              tableFresh += '<td><button id="btn-' + [i] + '" disabled onclick="updateRecord(\'' + tbl[i].orderid + '\',\'' + [i] + '\', \'fresh\');">Update</button></td>';
              var fggeojson = null;
              try {
                var wkt = (new ol.format.WKT()).readFeatures(tbl[i].aoi);
                var gj = new ol.format.GeoJSON();
                fggeojson = gj.writeFeatures(wkt, {
                  featureProjection: 'EPSG:3857'
                });
              } catch (e) {}
              var fggeojson = gj.writeFeatures(wkt, {
                featureProjection: 'EPSG:3857'
              });
              tableFresh += '<td><a href="data:text/json;charset=utf-8,' + encodeURIComponent(fggeojson) + '" download = "' + tbl[i].orderid + '.json"><i class="fa fa-download" style="font-size:20px;color:blue;"></i></a></td>';
              tableFresh += '<td>' + tbl[i].orderid + '</td>';
              tableFresh += '<td>' + tbl[i].date + '</td>';
              tableFresh += '<td>' + tbl[i].time + '</td>';
              tableFresh += '<td>' + tbl[i].username + '</td>';
              tableFresh += '<td>' + tbl[i].start_date + '</td>';
              tableFresh += '<td>' + tbl[i].end_date + '</td>';
              tableFresh += '<td>' + tbl[i].inc_angle + '</td>';
              tableFresh += '<td>' + tbl[i].cloud_cover + '</td>';
              tableFresh += '<td id="satellite-' + [i] + '">' + sat + '</td>';
              tableFresh += '<td>' + product + '</td>';
              tableFresh += '</tr>';
            } else {
              var sat;
              if (tbl[i].prss != null)
                sat = 'PRSS';
              else if (tbl[i].spot != null)
                sat = 'SPOT 6/7';
              tableFresh += '<tr>'
              tableFresh += '<td></td>';
              tableFresh += '<td>' + tbl[i].orderid + '</td>';
              tableFresh += '<td>' + tbl[i].date + '</td>';
              tableFresh += '<td>' + tbl[i].time + '</td>';
              tableFresh += '<td>' + tbl[i].username + '</td>';
              tableFresh += '<td>' + tbl[i].start_date + '</td>';
              tableFresh += '<td>' + tbl[i].end_date + '</td>';
              tableFresh += '<td>' + tbl[i].inc_angle + '</td>';
              tableFresh += '<td>' + tbl[i].cloud_cover + '</td>';
              tableFresh += '<td id="satellite-' + [i] + '">' + sat + '</td>';
              tableFresh += '<td>' + tbl[i].product + '</td>';
              tableFresh += '<td><a href="uploads/' + tbl[i].orderid + '.pdf" target="_blank"><i class="fa fa-file-pdf" style="font-size:30px;color:red;"></i></a></td>';
              statuses.push(tbl[i].status_id);
              tableFresh += '<td><input type="number" class="fresh_count" id="fresh_count-' + [i] + '" value="' + tbl[i].fresh_count + '" step="1" onkeydown="return false" disabled></td>';

              if (sat === 'PRSS') {
                try {
                  tableFresh += '<td><input type="number" id="area-' + [i] + '" value ="' + parseInt(tbl[i].prssarea) + '" class="fresh_area" disabled  onchange="handleUpdate(this.id)"  onkeyup="handleUpdate(this.id)"  onkeydown="handleUpdate(this.id)"  onpaste="handleUpdate(this.id)"></td>';
                } catch (e) {}
              } else {
                tableFresh += '<td><input type="number" id="area-' + [i] + '" value ="' + parseInt(tbl[i].spotarea) + '" class="fresh_area" disabled onchange="handleUpdate(this.id)"  onkeyup="handleUpdate(this.id)"  onkeydown="handleUpdate(this.id)"  onpaste="handleUpdate(this.id)"></td>'
              }
              tableFresh += '<td><a href="#" onclick="toggleEditFresh(' + [i] + ')"><i class="fas fa-pencil-alt"  style="font-size:20px;color:black;"></i></a></td>'
              switch (tbl[i].status_id) {
                case '1':
                  tableFresh += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1" selected>Completed</option><option value="2">In Progress</option><option value="3">Pending</option><option value="4">Order Placed</option></select></td>';
                  break;
                case '2':
                  tableFresh += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1">Completed</option><option value="2" selected>In Progress</option><option value="3">Pending</option><option value="4">Order Placed</option></select></td>';
                  break;
                case '3':
                  tableFresh += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1">Completed</option><option value="2">In Progress</option><option value="3" selected>Pending</option><option value="4">Order Placed</option></select></td>';
                  break;
                case '4':
                  tableFresh += '<td><select id="status-' + [i] + '" onchange="handleUpdate(this.id)"><option value="1">Completed</option><option value="2">In Progress</option><option value="3">Pending</option><option value="4" selected>Order Placed</option></select></td>';
                  break;
              }
              tableFresh += '<td><button id="btn-' + [i] + '" disabled onclick="updateRecord(\'' + tbl[i].orderid + '\',\'' + [i] + '\', \'fresh\');">Update</button></td>';
              var fggeojson = null;
              try {
                var wkt = (new ol.format.WKT()).readFeatures(tbl[i].aoi);
                var gj = new ol.format.GeoJSON();
                fggeojson = gj.writeFeatures(wkt, {
                  featureProjection: 'EPSG:3857'
                });
              } catch (e) {}
              var fggeojson = gj.writeFeatures(wkt, {
                featureProjection: 'EPSG:3857'
              });
              tableFresh += '<td><a href="data:text/json;charset=utf-8,' + encodeURIComponent(fggeojson) + '" download = "' + tbl[i].orderid + '.json"><i class="fa fa-download" style="font-size:20px;color:blue;"></i></a></td>';
              tableFresh += '</tr>';
            }
          } else {
            var sat;
            if (tbl[i].prss != null)
              sat = 'PRSS';
            else if (tbl[i].spot != null)
              sat = 'SPOT 6/7';
            if (tbl[i].type == 'archive') {
              tableArchive += '<tr>'
              tableArchive += '<td>' + i + '</td>';
              tableArchive += '<td>' + tbl[i].orderid + '</td>';
              tableArchive += '<td>' + tbl[i].date + '</td>';
              tableArchive += '<td>' + tbl[i].time + '</td>';
              tableArchive += '<td>' + tbl[i].username + '</td>';
              tableArchive += '<td>' + tbl[i].prssscene + '</td>';
              tableArchive += '<td>' + tbl[i].spotscene + '</td>';
              tableArchive += '<td>' + tbl[i].pleiadesscene + '</td>';
              tableArchive += '<td>' + tbl[i].prssarea + '</td>';
              tableArchive += '<td>' + parseFloat(tbl[i].prssamount).toFixed(2) + '</td>';
              tableArchive += '<td>' + tbl[i].spotarea + '</td>';
              tableArchive += '<td>' + parseFloat(tbl[i].spotamount).toFixed(2) + '</td>';
              tableArchive += '<td>' + tbl[i].pleiadesarea + '</td>';
              tableArchive += '<td>' + parseFloat(tbl[i].pleiadesamount).toFixed(2) + '</td>';
              tableArchive += '<td><a href="uploads/' + tbl[i].orderid + '.pdf" target="_blank"><i class="fa fa-file-pdf" style="font-size:30px;color:red;"></i></a></td>';
              tableArchive += '<td>' + status_name[tbl[i].status_id] + '</td>';
              tableArchive += '</tr>';
            } else {
              tableFresh += '<tr>'
              tableFresh += '<td></td>';
              tableFresh += '<td>' + tbl[i].orderid + '</td>';
              tableFresh += '<td>' + tbl[i].date + '</td>';
              tableFresh += '<td>' + tbl[i].time + '</td>';
              tableFresh += '<td>' + tbl[i].username + '</td>';
              tableFresh += '<td>' + tbl[i].start_date + '</td>';
              tableFresh += '<td>' + tbl[i].end_date + '</td>';
              tableFresh += '<td>' + tbl[i].inc_angle + '</td>';
              tableFresh += '<td>' + tbl[i].cloud_cover + '</td>';
              // tableFresh += '<td  id="satellite-' + [i] + '">' + tbl[i].satellite + '</td>';
              tableFresh += '<td  id="satellite-' + [i] + '">' + sat + '</td>';
              tableFresh += '<td>' + tbl[i].product + '</td>';
              tableFresh += '<td><a href="uploads/' + tbl[i].orderid + '.pdf" target="_blank"><i class="fa fa-file-pdf" style="font-size:30px;color:red;"></i></a></td>';
              statuses.push(tbl[i].status_id);
              tableFresh += '<td>' + status_name[tbl[i].status_id] + '</td>';
              tableFresh += '</tr>';
            }
          }
        }
        tableArchive += "</tbody>";
        tableArchive += "</table>";
        tableFresh += "</tbody>";
        tableFresh += "</table>";
        $("#tbl").html('');
        $("#tbl").html(tableArchive);
        // for (var j = 0; j < statuses.length; j++) {
        // $('#status-' + [j] + '').val(statuses[j]).change();
        // }
        paginateTable("table_" + orderType);
      } else {
        // $("#noData").show();
      }
    }
  });
}

function paginateTable(val) {
  $('#table thead tr').clone(true).appendTo('#table thead');
  if (val.split('_')[1] == "archive") {
    $('#table thead tr:eq(0) th').each(function(i) {
      if (i == 0) {
        $(this).html('');
      } else {
        $(this).html('');
      }
      if (i == 9 || i == 6 || i == 7 || i == 8) {
        var title = $(this).text();
        if (i == 1)
          $(this).html('<input type="text" placeholder="Search ' + title + '" style="width:240px;"/>');
        else
          $(this).html('<input type="text" placeholder="Search ' + title + '" style="width:120px;"/>');

        $('input', this).on('keyup change', function() {
          if (t.column(i).search() !== this.value) {
            t.column(i).search(this.value).draw();
          }
        });
      }
    });
  } else {
    $('#table thead tr:eq(0) th').each(function(i) {
      if (i == 0) {
        $(this).html('');
      } else {
        $(this).html('');
      }
      if (i == 11 || i == 12 || i == 13 || i == 14) {
        var title = $(this).text();
        if (i == 1)
          $(this).html('<input type="text" placeholder="Search ' + title + '" style="width:240px;"/>');
        else
          $(this).html('<input type="text" placeholder="Search ' + title + '" style="width:120px;"/>');

        $('input', this).on('keyup change', function() {
          if (t.column(i).search() !== this.value) {
            t.column(i).search(this.value).draw();
          }
        });
      }
    });
  }

  t = $('#' + val + '').DataTable({
    dom: 'Bfrtip',
    buttons: [{
        extend: 'copyHtml5',
        text: '<i class="fa fa-files-o"></i>',
        titleAttr: 'Copy'
      },
      {
        extend: 'csvHtml5',
        text: '<i class="fa fa-file-excel-o"></i>',
        titleAttr: 'CSV'
      },
      {
        extend: 'pdfHtml5',
        text: '<i class="fa fa-file-pdf-o"></i>',
        titleAttr: 'PDF',
        orientation: 'landscape',
        pageSize: 'A3',
        messageTop: 'Report of currently displayed OMS Status'
      },
      {
        extend: 'print',
        text: '<i class="fa fa-print"></i>',
        titleAttr: 'Print'
      },
      {
        text: '<i class="fa fa-info-circle"></i>',
        action: function(e, dt, node, config) {
          if ($("#role").html() == '1') {
            if (val.split('_')[1] == "archive") {
              t.column(0).visible(!t.column(0).visible());
              t.column(2).visible(!t.column(2).visible());
              t.column(14).visible(!t.column(14).visible());
              t.column(16).visible(!t.column(16).visible());
              t.column(18).visible(!t.column(18).visible());
            } else {
              t.column(0).visible(!t.column(0).visible());
              t.column(2).visible(!t.column(2).visible());
              t.column(3).visible(!t.column(3).visible());
              t.column(4).visible(!t.column(4).visible());
            }
          }
        }
      }
    ],
    "autoWidth": false,
    "pageLength": 5,
    "scrollX": true,
    "columnDefs": [{
        type: 'date',
        'targets': [1]
      }, {
        "searchable": false,
        "orderable": false,
        "targets": 0
      },
      {
        "targets": ($("#role").html() == '1') ? (val.split('_')[1] == "archive") ? [0, 2, 14, 16, 18] : [0, 2, 3, 4] : null,
        "visible": false
      }
    ],
    "order": [
      [1, 'asc']
    ],
    "footerCallback": function(row, data, start, end, display) {
      var api = this.api(),
        data;
      var intVal = function(i) {
        return typeof i === 'string' ?
          i.replace(/[\$,]/g, '') * 1 :
          typeof i === 'number' ?
          i : 0;
      };
    }
  });

  t.on('order.dt search.dt', function() {
    t.column(0, {
      search: 'applied',
      order: 'applied'
    }).nodes().each(function(cell, i) {
      cell.innerHTML = i + 1;
    });
  }).draw();
  $('#table tr:first').hide();
}
