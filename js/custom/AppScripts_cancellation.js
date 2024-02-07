//Dynamic Datepicker Fields
// $(document).ready(function () {
// });
var cancel_datatable = null;
var orderType = "archive";
var datatable;
var tableFresh = '';
var tableArchive = '';
// var tableCustom = '';
var tableCancel = '';
var t;
var status_dict ={
    1: 'Completed',
    2: 'In Progress',
    3: 'Pending',
    4: 'Order Placed',
    5: 'Cancelled'
}
$(document).ready(function () {
    $('#isFiltersOn').click(function () {
        if (this.checked)
            $('#table tr:first').show();
        else
            $('#table tr:first').hide();
    });
    document.getElementById("defaultOpen").click();
    fetchData();
    setTimeout(
        function () {
            toggleType('Archive');
        }, 100);    
    // if($("#role").html().trim() == '1') {
	if (parseInt($("#role").html().trim()) == 1) {
        checkCancellationRequests();
    }
});

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function fetchData() {
    $.ajax({
        type: "GET",
        url: "server_scripts/getData.php",
        cache: false,
        success: function (data) {
            var tbl = JSON.parse(data);
            tableArchive = '';
            tableArchive += '<table id="table_archive" class="table table-striped table-bordered tablesorter" style="width:100%">';
            tableFresh = '';
            tableFresh += '<table id="table_fresh" class="table table-striped table-bordered tablesorter" style="width:100%">';
            tableCustom = '';
            tableCustom += '<table id="table_custom" class="table table-striped table-bordered tablesorter" style="width:100%">';
			console.log(parseInt($("#role").html().trim()))
            if (parseInt($("#role").html().trim()) == 1) {
                tableArchive += "<thead> <tr>";
                tableArchive += "<th>Sr. #</th>";
                tableArchive += "<th>PDF</th>";
                tableArchive += "<th>Delivery</th>";
                tableArchive += "<th>Status</th>";
                tableArchive += "<th>Action</th>";
                tableArchive += "<th>AOI</th>";
                tableArchive += "<th>Order ID</th>";
                tableArchive += "<th>Date</th>";
                tableArchive += "<th>Time</th>";
                tableArchive += "<th>User</th>";
                tableArchive += "<th>PRSS Scenes</th>";
                tableArchive += "<th>SPOT Scenes</th>";
                tableArchive += "<th>Pleiades Scenes</th>";
                tableArchive += "<th>PRSS Area (km²)</th>";
                tableArchive += "<th>PRSS Amount ($)</th>";
                tableArchive += "<th>SPOT Area (km²)</th>";
                tableArchive += "<th>SPOT Amount (€)</th>";
                tableArchive += "<th>Pleiades Area (km²)</th>";
                tableArchive += "<th>Pleiades Amount (€)</th>";
                tableArchive += "</tr> </thead>";

                tableFresh += "<thead> <tr>";
                tableFresh += "<th>Sr. #</th>";
                tableFresh += "<th>PDF</th>";
                tableFresh += "<th>Details</th>";
                tableFresh += "<th>Scenes</th>";
                tableFresh += "<th>Scenes Entry</th>";
                tableFresh += "<th>Count</th>";
                tableFresh += "<th>Area</th>";
                tableFresh += "<th>Edit</th>";
                tableFresh += "<th>Status</th>";
                tableFresh += "<th>Action</th>";
                tableFresh += "<th>AOI</th>";
                tableFresh += "<th>Order ID</th>";
                tableFresh += "<th>Date</th>";
                tableFresh += "<th>Time</th>";
                tableFresh += "<th>User</th>";
                tableFresh += "<th>Start Date</th>";
                tableFresh += "<th>End Date</th>";
                tableFresh += "<th>Inc Angle</th>";
                tableFresh += "<th>Cloud Cover</th>";
                tableFresh += "<th>Satellite</th>";
                tableFresh += "<th>Product</th></tr> </thead>";
            } else {
                tableArchive += "<thead> <tr>";
                tableArchive += "<th>Sr. #</th>";
                tableArchive += "<th>Action</th>";
                tableArchive += "<th>Order ID</th>";
                tableArchive += "<th>Date</th>";
                tableArchive += "<th>Time</th>";
                tableArchive += "<th>Username</th>";
                tableArchive += "<th>PRSS Scenes</th>";
                tableArchive += "<th>SPOT Scenes</th>";
                tableArchive += "<th>Pleiades Scenes</th>";
                tableArchive += "<th>PRSS Area (km²)</th>";
                tableArchive += "<th>PRSS Amount</th>";
                tableArchive += "<th>SPOT Area (km²)</th>";
                tableArchive += "<th>SPOT Amount</th>";
                tableArchive += "<th>Pleiades Area (km²)</th>";
                tableArchive += "<th>Pleiades Amount</th>";
                tableArchive += "<th>PDF</th>";
                tableArchive += "<th>Status</th></tr> </thead>";

                tableFresh += "<thead> <tr>";
                tableFresh += "<th>#</th>";
                tableFresh += "<th>Action</th>";
                tableFresh += "<th>Order ID</th>";
                tableFresh += "<th>Date</th>";
                tableFresh += "<th>Time</th>";
                tableFresh += "<th>Username</th>";
                tableFresh += "<th>Start Date</th>";
                tableFresh += "<th>End Date</th>";
                tableFresh += "<th>Inc Angle</th>";
                tableFresh += "<th>Cloud Cover</th>";
                tableFresh += "<th>Satellite</th>";
                tableFresh += "<th>Product</th>";
                tableFresh += "<th>PDF</th>";
                tableFresh += "<th>Status</th></tr> </thead>";
            }
            tableArchive += "<tbody id='tablebody'>";
            tableFresh += "<tbody id='tablebody'>";
            tableCustom += "<tbody id='tablebody'>";
            var status_name = [" ", "Completed", "In Progress", "Pending", "Order Placed"];
            var statuses = [];
            try {
                $("#table_id").hide();
                // $("#noData").hide();
            } catch (e) { }
            if (tbl.length > 0) {
                // var dateToday = new Date();
                for (var i = 0; i < tbl.length; i++) {
					console.log(parseInt($("#role").html().trim()));
                    if (parseInt($("#role").html().trim()) == 1) {
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
                            } catch (e) { }
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
                            if (typeof tbl[i].prss == "string") {
                                sat = 'PRSS';
                                product = tbl[i].productprss;
                            } else if (typeof tbl[i].spot == "string") {
                                sat = 'SPOT 6/7';
                                product = tbl[i].productspot;
                            } else if (typeof tbl[i].sv  == "string") {
                                sat = 'SuperView';
                                product = tbl[i].productsuperview;
                            } else if (typeof tbl[i].sar  == "string") {
                                sat = 'SAR';
                                product = tbl[i].productsar;
                            } else if (typeof tbl[i].pneo  == "string") {
                                sat = 'Pleiades Neo';
                                product = tbl[i].productpleiadesneo;
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
                                } catch (e) { }
                            } else if (sat === 'SuperView') {
                                try {
                                    tableFresh += '<td><input type="number" id="area-' + [i] + '" value ="' + parseInt(tbl[i].svarea) + '" class="fresh_area" disabled  onchange="handleUpdate(this.id)"  onkeyup="handleUpdate(this.id)"  onkeydown="handleUpdate(this.id)"  onpaste="handleUpdate(this.id)"></td>';
                                } catch (e) { }
                            } else if (sat === 'Pleiades Neo') {
                                try {
                                    tableFresh += '<td><input type="number" id="area-' + [i] + '" value ="' + parseInt(tbl[i].pleiadesneoarea) + '" class="fresh_area" disabled  onchange="handleUpdate(this.id)"  onkeyup="handleUpdate(this.id)"  onkeydown="handleUpdate(this.id)"  onpaste="handleUpdate(this.id)"></td>';
                                } catch (e) { }
                            } else if (sat === 'SAR') {
                                try {
                                    tableFresh += '<td><input type="number" id="area-' + [i] + '" value ="' + parseInt(tbl[i].sararea) + '" class="fresh_area" disabled  onchange="handleUpdate(this.id)"  onkeyup="handleUpdate(this.id)"  onkeydown="handleUpdate(this.id)"  onpaste="handleUpdate(this.id)"></td>';
                                } catch (e) { }
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
                            } catch (e) { }
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
                            var sat, product;
                            
                            if (typeof tbl[i].prss == "string") {
                                sat = 'PRSS';
                                product = tbl[i].productprss;
                            } else if (typeof tbl[i].spot == "string") {
                                sat = 'SPOT 6/7';
                                product = tbl[i].productspot;
                            } else if (typeof tbl[i].sv  == "string") {
                                sat = 'SuperView';
                                product = tbl[i].productsuperview;
                            } else if (typeof tbl[i].sar  == "string") {
                                sat = 'SAR';
                                product = tbl[i].productsar;
                            } else if (typeof tbl[i].pneo  == "string") {
                                sat = 'Pleiades Neo';
                                product = tbl[i].productpleiadesneo;
                            }
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
                            tableFresh += '<td>' + product + '</td>';
                            tableFresh += '<td><a href="uploads/' + tbl[i].orderid + '.pdf" target="_blank"><i class="fa fa-file-pdf" style="font-size:30px;color:red;"></i></a></td>';
                            statuses.push(tbl[i].status_id);
                            tableFresh += '<td><input type="number" class="fresh_count" id="fresh_count-' + [i] + '" value="' + tbl[i].fresh_count + '" step="1" onkeydown="return false" disabled></td>';

                            if (sat === 'PRSS') {
                                try {
                                    tableFresh += '<td><input type="number" id="area-' + [i] + '" value ="' + parseInt(tbl[i].prssarea) + '" class="fresh_area" disabled  onchange="handleUpdate(this.id)"  onkeyup="handleUpdate(this.id)"  onkeydown="handleUpdate(this.id)"  onpaste="handleUpdate(this.id)"></td>';
                                } catch (e) { }
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
                            } catch (e) { }
                            var fggeojson = gj.writeFeatures(wkt, {
                                featureProjection: 'EPSG:3857'
                            });
                            tableFresh += '<td><a href="data:text/json;charset=utf-8,' + encodeURIComponent(fggeojson) + '" download = "' + tbl[i].orderid + '.json"><i class="fa fa-download" style="font-size:20px;color:blue;"></i></a></td>';
                            tableFresh += '</tr>';
                        }
                    } else {
                        var sat,product;
                        
                            if (typeof tbl[i].prss == "string") {
                                sat = 'PRSS';
                                product = tbl[i].productprss;
                            } else if (typeof tbl[i].spot == "string") {
                                sat = 'SPOT 6/7';
                                product = tbl[i].productspot;
                            } else if (typeof tbl[i].sv  == "string") {
                                sat = 'SuperView';
                                product = tbl[i].productsuperview;
                            } else if (typeof tbl[i].sar  == "string") {
                                sat = 'SAR';
                                product = tbl[i].productsar;
                            } else if (typeof tbl[i].pneo  == "string") {
                                sat = 'Pleiades Neo';
                                product = tbl[i].productpleiadesneo;
                            }
                        if (tbl[i].type == 'archive') {
                            tableArchive += '<tr>'
                            tableArchive += '<td>' + i + '</td>';
                            if (tbl[i].cancel_user === "0") {
                            tableArchive += '<td><button class="btnCancelOrder" id="btn_'+ tbl[i].orderid +'" onclick="promptCancellation(\''+ tbl[i].orderid +'\')">Cancel</button></td>';
                            } else {
                              tableArchive += '<td><button class="btnCancelOrder" id="btn_\'+ tbl[i].orderid +\'" onclick="promptCancellation(\''+ tbl[i].orderid +'\')" disabled>Cancel</button></td>';
                            }
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
                            if (tbl[i].cancel_user === "0") {
                            tableFresh += '<td><button class="btnCancelOrder" id="btn_'+ tbl[i].orderid +'" onclick="promptCancellation(\''+ tbl[i].orderid +'\')">Cancel</button></td>';
                            } else {
                              tableFresh += '<td><button class="btnCancelOrder" id="btn_'+ tbl[i].orderid +'" onclick="promptCancellation(\''+ tbl[i].orderid +'\')" disabled>Cancel</button></td>';
                            }
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
                            tableFresh += '<td>' + product + '</td>';
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
                $("#table").html('');
                $("#table").html(tableArchive);
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


function toggleType(val) {
    $(".iconArchive").css("color", "white");
    $(".iconFresh").css("color", "white");
    $(".iconCancel").css("color", "white");
    if (val === 'Archive') {
        toastr.info("Generating table for archive orders");
        $(".iconArchive").css("color", "#7cf359");
        orderType = "archive";
        $("#table").html('');
        $("#table").html(tableArchive);
        paginateTable("table_" + orderType);
        $("#btnReport").show();
    } else if (val === 'Fresh') {
        toastr.info("Generating table for fresh orders");
        $("#table").html('');
        $("#table").html(tableFresh);
        $(".iconFresh").css("color", "#7cf359");
        orderType = "fresh";
        paginateTable("table_" + orderType);
        $("#btnReport").show();
    } else if (val === 'Cancel') {
        toastr.info("Generating form for Order Cancellation Requests");
        $(".iconCancel").css("color", "#7cf359");
        $("#table").html(tableCancel);
        cancel_datatable = $('#table_cancel').DataTable({
            "autoWidth": true,
            "order": [
                [1, 'desc']
            ]
        });
        cancel_datatable.on('order.dt search.dt', function () {
            t.column(0, {
                search: 'applied',
                order: 'applied'
            }).nodes().each(function (cell, i) {
                cell.innerHTML = i + 1;
            });
        }).draw();
    }
}

function insertScenes(val, id, type) {
    $('button[id^="btnScenes-"]').prop('disabled', true);
    var scenes = "";
    $("#scenesId-" + id + " > option").each(function () {
        scenes += this.value + ", ";
    });
    var payload = '';
    payload = "orderid=" + val + "&scenes=" + scenes;
    $.ajax({
        type: "GET",
        url: "server_scripts/updateScenes.php?" + payload,
        success: function (data) {
            if (data == 'Success') {
                toastr.info('Order Status Updated');
            }
        }
    });
}

function updateRecord(val, id, type) {
    var delDate = $("#orderDeliveryDate-" + id).val();
    $('button[id^="btn-"]').prop('disabled', true);
    var sat = '';

    if (type === 'archive') {
        sat = 'Archive';
    } else {
        sat = $("#satellite-" + id).text();
    }
    var status_id = $('#status-' + id + '').val();
    var fresh_count = $('#status-' + id + '').val();
    if ($("#fresh_count-" + id + "").val())
        fresh_count = $("#fresh_count-" + id + "").val();
    else {
        fresh_count = 0;
    }
    var payload = '';
    payload = "orderid=" + val + "&status_id=" + status_id + "&fresh_count=" + fresh_count + "&fresh_area=" + $("#area-" + id + "").val() + "&satellite=" + sat + "&deliveryDate=" + delDate;
    $.ajax({
        type: "GET",
        url: "server_scripts/updateOrderStatus.php?" + payload,
        success: function (data) {
            if (data == 'Success') {
                toastr.info('Order Status Updated');
                $(".fresh_area").prop("disabled", true);
                $(".fresh_count").prop("disabled", true);
                $.ajax({
                    type: "GET",
                    url: "server_scripts/updatePricingFresh.php",
                    success: function (data) {
                    }
                });
            }
        }
    });
}

function getPDF(id) {
    $http({
        url: "server_scripts/getPDF.php?orderid=" + id,
        method: "POST",
        responseType: "blob"
    }).then(function (response) {
        var fileURL = URL.createObjectURL(response.data);
        window.open(fileURL);
    });
}

function paginateTable(val) {
    $('#table thead tr').clone(true).appendTo('#table thead');
    if (val.split('_')[1] == "archive") {
        $('#table thead tr:eq(0) th').each(function (i) {
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

                $('input', this).on('keyup change', function () {
                    if (t.column(i).search() !== this.value) {
                        t.column(i).search(this.value).draw();
                    }
                });
            }
        });
    } else {
        $('#table thead tr:eq(0) th').each(function (i) {
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

                $('input', this).on('keyup change', function () {
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
            action: function (e, dt, node, config) {
                if (parseInt($("#role").html().trim()) == 1) {
                    if (val.split('_')[1] == "archive") {
                        t.column(0).visible(!t.column(0).visible());
                        t.column(2).visible(!t.column(2).visible());
                        t.column(14).visible(!t.column(14).visible());
                        t.column(16).visible(!t.column(16).visible());
                        t.column(18).visible(!t.column(18).visible());
                    }
                    else {
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
            // "targets": ($("#role").html() == '1')? (val.split('_')[1] == "archive") ? [0, 2, 14, 16, 18] : [0, 2, 3, 4] : null,
            "targets": (parseInt($("#role").html().trim()) == 1)? (val.split('_')[1] == "archive") ? [0, 2, 14, 16, 18] : [0, 2, 3, 4] : null,
            "visible": false
        }
        ],
        "order": [
            [1, 'asc']
        ],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };
        }
    });

    t.on('order.dt search.dt', function () {
        t.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
    $('#table tr:first').hide();
}

function showReport() {
    $.ajax({
        type: "GET",
        url: "server_scripts/getReport.php",
        cache: false,
        success: function (data) {
            var array = JSON.parse(data);
            const personGroupedByColor = groupBy(array, 'name');
            var tbl = '';
				$.map(personGroupedByColor, function (val, i) {

                const GroupedByType = groupBy(val, 'type');
                var freshPRSS;
                var freshSPOT;
				var freshPleiades;
				var freshPleiadesNeo;
				var freshSuperView;
				var freshSAR;
                var archivePRSS;
				var archiveSPOT;            
                var archivePleiades;
                var archivePleiadesNeo;
                var archiveSuperView;
                var archiveSAR;
                var total = 0;
                try{archivePRSS = GroupedByType['archive'][0].total_prssarea;}catch(e){ archivePRSS = 0}
                if (GroupedByType['fresh']) {
                    freshPRSS = isNULL(GroupedByType['fresh'][0].total_prssarea);
                    freshSPOT = isNULL(GroupedByType['fresh'][0].total_spotarea);
                    freshPleiades = isNULL(GroupedByType['fresh'][0].total_pleiadesarea);
                    freshPleiadesNeo = isNULL(GroupedByType['fresh'][0].total_pleiadesneoarea);
					freshSuperView = isNULL(GroupedByType['fresh'][0].total_superviewarea);
					freshSAR = isNULL(GroupedByType['fresh'][0].total_sararea);
                } else {
                    freshPRSS = 0;
                    freshSPOT = 0;
                    freshPleiades = 0;
                    freshPleiadesNeo = 0;
                    freshSuperView = 0;
                    freshSAR = 0;
                }
                try{archiveSPOT = isNULL(GroupedByType['archive'][0].total_spotarea);}catch(e){ archiveSPOT = 0}
                try{archivePleiades = isNULL(GroupedByType['archive'][0].total_pleiadesarea);}catch(e){ archivePleiades = 0}
                try{archivePleiadesNeo = isNULL(GroupedByType['archive'][0].total_pleiadesneoarea);}catch(e){ archivePleiadesNeo = 0}
                try{archiveSuperView = isNULL(GroupedByType['archive'][0].total_superviewarea);}catch(e){ archiveSuperView = 0}
                try{archiveSAR = isNULL(GroupedByType['archive'][0].total_sararea);}catch(e){ archiveSAR = 0}

                if (GroupedByType['fresh']) {
                    total += parseInt(freshPRSS) + parseInt(freshSPOT) + parseInt(freshPleiades) + parseInt(freshSuperView) + parseInt(freshSAR) + parseInt(freshPleiadesNeo);
                } else {
                    total += 0;
                }
                total += parseInt(archiveSPOT) + parseInt(archivePRSS) + parseInt(archivePleiades) + parseInt(archiveSuperView) + parseInt(archiveSAR) + parseInt(archivePleiadesNeo);
                tbl += '<tr>';
                tbl += '<td>' + i + '</td>';
                tbl += '<td>' + parseInt(archivePRSS).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshPRSS).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(archiveSPOT).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshSPOT).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(archivePleiades).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshPleiades).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
				tbl += '<td>' + parseInt(archiveSuperView).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshSuperView).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
				tbl += '<td>' + parseInt(archiveSAR).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshSAR).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
				tbl += '<td>' + parseInt(archivePleiadesNeo).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshPleiadesNeo).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '</tr>';
                $("#reportTBody").html(tbl);
                $('#modalReport').modal('show');

            });
			paginateReport();
        }
    });
    $.ajax({
        type: "GET",
        url: "server_scripts/getReportPrice.php",
        cache: false,
        success: function (data) {
            var array = JSON.parse(data);
            const personGroupedByColor = groupBy(array, 'name');
            var tbl = '';
            	$.map(personGroupedByColor, function (val, i) {

                const GroupedByType = groupBy(val, 'type');
                var freshPRSS;
                var freshSPOT;
                var archiveSPOT;
                var archivePRSS;
                var freshPleiades;
                var freshPleiadesNeo;
                var archivePleiades = 0;
                var archivePleiadesNeo = 0;
                var total = 0;
                try{archivePRSS = GroupedByType['archive'][0].total_prssamount;}catch(e){ archivePRSS = 0}
                if (GroupedByType['fresh']) {
                    freshPRSS = isNULL(GroupedByType['fresh'][0].total_prssamount);
                    freshSPOT = isNULL(GroupedByType['fresh'][0].total_spotamount);
                    freshPleiades = isNULL(GroupedByType['fresh'][0].total_pleiadesamount);
                    freshPleiadesNeo = isNULL(GroupedByType['fresh'][0].total_pleiadesneoamount);
                    freshSuperView = isNULL(GroupedByType['fresh'][0].total_superviewamount);
                    freshSAR = isNULL(GroupedByType['fresh'][0].total_saramount);
                } else {
                    freshPRSS = 0;
                    freshSPOT = 0;
                    freshPleiades = 0;
                    freshPleiadesNeo = 0;
                    freshSuperView = 0;
                    freshSAR = 0;
                }

                try{archiveSPOT = isNULL(GroupedByType['archive'][0].total_spotamount);}catch(e){ archiveSPOT = 0}
                try{archivePleiades = isNULL(GroupedByType['archive'][0].total_pleiadesamount);}catch(e){ archivePleiades = 0}
                try{archivePleiadesNeo = isNULL(GroupedByType['archive'][0].total_pleiadesneoamount);}catch(e){ archivePleiadesNeo = 0}
                try{archiveSuperView = isNULL(GroupedByType['archive'][0].total_superviewamount);}catch(e){ archiveSuperView = 0}
                try{archiveSAR = isNULL(GroupedByType['archive'][0].total_saramount);}catch(e){ archiveSAR = 0}

                if (GroupedByType['fresh']) {
                    total += parseInt(freshPRSS) + parseInt(freshSPOT) + parseInt(freshPleiades);
                } else {
                    total += 0;
                }
                total += parseInt(archiveSPOT) + parseInt(archivePRSS) + parseInt(archivePleiades) + parseInt(archivePleiadesNeo);
                tbl += '<tr>';
                tbl += '<td>' + i + '</td>';
                tbl += '<td>' + parseInt(archivePRSS).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshPRSS).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(archiveSPOT).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshSPOT).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(archivePleiades).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshPleiades).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(archiveSuperView).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshSuperView).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(archiveSAR).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshSAR).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
				tbl += '<td>' + parseInt(archivePleiadesNeo).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(freshPleiadesNeo).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '<td>' + parseInt(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td>';
                tbl += '</tr>';
                $("#reportTBodyPrice").html(tbl);
                $('#modalReport').modal('show');

            });
			paginateReportPrice();
        }
    });

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'server_scripts/getDataForPieChart.php',
        success: function (response) {
            if (response) {
                var labels = [];
                var data = [];
                $.each(response, function (index, value) {
                    labels.push(value.label);
                    data.push(value.data);
                });
                var chart = new CanvasJS.Chart("pie-chart", {
                    theme: "light2", // "light1", "light2", "dark1", "dark2"
                    exportEnabled: true,
                    animationEnabled: true,
                    title: {
                        text: "No. of Orders Delivered User Wise"
                    },
                    legend: {
                        verticalAlign: "right",
                        horizontalAlign: "center"
                    },
                    data: [{
                        type: "doughnut",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y}",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabel: "{label} - {y}",
                        dataPoints: response
                    }]
                });
                chart.render();

                var total = 0;
                for (var i = 0; i < chart.options.data[0].dataPoints.length; i++) {
                    total += parseInt(chart.options.data[0].dataPoints[i].y);
                }
                chart.set("title", {
                    text: "Total: " + total,
                    verticalAlign: "center"
                });
            }
        }
    });

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'server_scripts/getDataForBarChart.php',
        success: function (response) {
            if (response) {
                var labels = [];
                var data = [];
                $.each(response, function (index, value) {
                    labels.push(value.label);
                    data.push(value.data);
                });
                var chart = new CanvasJS.Chart("bar-chart", {
                    theme: "light2", // "light1", "light2", "dark1", "dark2"
                    exportEnabled: true,
                    animationEnabled: true,
                    title: {
                        text: "Delivered Orders Area Wise"
                    },
                    data: [{
                        type: "pie",
                        startAngle: 25,
                        toolTipContent: "<b>{label}</b>: {y} km²",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabel: "{label} - {y} km²",
                        dataPoints: response
                    }]
                });
                chart.render();
            }
        }
    });

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'server_scripts/getDataForPieChart.php',
        success: function (response) {
            if (response) {
                var labels = [];
                var data = [];
                $.each(response, function (index, value) {
                    labels.push(value.label);
                    data.push(value.data);
                });

                var chart2 = new CanvasJS.Chart("chartContainer", {
                    animationEnabled: true,
                    theme: "light2", // "light1", "light2", "dark1", "dark2"
                    title: {
                        text: "Data Delivered (Order wise)"
                    },
                    axisY: {
                        title: "Orders"
                    },
                    data: [{
                        type: "column",
                        dataPoints: response
                    }]
                });
                chart2.render();
            }
        }
    });
}

const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
    }, {}); // empty object is the initial value for result object
};
// });

function isNULL(data) {
    if ((typeof (data) !== 'undefined') && (data !== null)) {
        return data;
    } else {
        return 0;
    }

}

function paginateReport() {
    try {
        datatable.destroy();
    } catch (e) {

    } finally {

    }
    datatable = $('#tblReport').DataTable({
        // paging: false,
        paging: false,
        searching: false,
        dom: 'Bfrtip',
        buttons: [{
            extend: 'pdfHtml5',
            text: '<i class="fa fa-print"></i>',
            titleAttr: 'Print',
            pageSize: 'A4',
            orientation: 'landscape',
            title: 'OMS Report - Area Wise',
            header: true,
            footer: true,
            customize: function (doc) {
                doc.styles.tableHeader.alignment = 'left';
                doc.content[1].table.widths = Array(doc.content[1].table.body[0].length + 1).join('*').split('');
            }
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            // Total over all pages
            total1 = api
                .column(1)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total2 = api
                .column(2)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total3 = api
                .column(3)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total4 = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total5 = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total6 = api
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total7 = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total8 = api
                .column(8)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total9 = api
                .column(9)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total10 = api
                .column(10)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total11 = api
                .column(11)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
			total12 = api
                .column(12)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
			total13 = api
                .column(13)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);

            // Update footer
            $(api.column(1).footer()).html(
                total1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(2).footer()).html(
                total2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(3).footer()).html(
                total3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(4).footer()).html(
                total4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(5).footer()).html(
                total5.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(6).footer()).html(
                total6.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(7).footer()).html(
                total7.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(8).footer()).html(
                total8.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(9).footer()).html(
                total9.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(10).footer()).html(
                total10.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(11).footer()).html(
                total11.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(12).footer()).html(
                total12.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(13).footer()).html(
                total13.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
        }
    });
}

function paginateReportPrice() {
    try {
        datatableTwo.destroy();
    } catch (e) {

    } finally {

    }
    datatableTwo = $('#tblReportPrice').DataTable({
        // paging: false,
        paging: false,
        searching: false,
        dom: 'Bfrtip',
        buttons: [{
            extend: 'pdfHtml5',
            text: '<i class="fa fa-print"></i>',
            titleAttr: 'Print',
            pageSize: 'A4',
            orientation: 'landscape',
            title: 'OMS Report - Price Wise',
            header: true,
            footer: true,
            customize: function (doc) {
                doc.styles.tableHeader.alignment = 'left';
                doc.content[1].table.widths = Array(doc.content[1].table.body[0].length + 1).join('*').split('');
            }
        }],
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(),
                data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '') * 1 :
                    typeof i === 'number' ?
                        i : 0;
            };

            // Total over all pages
            total1 = api
                .column(1)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total2 = api
                .column(2)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total3 = api
                .column(3)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total4 = api
                .column(4)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total5 = api
                .column(5)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total6 = api
                .column(6)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total7 = api
                .column(7)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total8 = api
                .column(8)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total9 = api
                .column(9)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total10 = api
                .column(10)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            total11 = api
                .column(11)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
			total12 = api
                .column(12)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
			total13 = api
                .column(13)
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
            // Update footer
            $(api.column(1).footer()).html(
                total1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " $"
            );
            $(api.column(2).footer()).html(
                total2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " $"
            );
            $(api.column(3).footer()).html(
                total3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " $"
            );
            $(api.column(4).footer()).html(
                total4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " $"
            );
            $(api.column(5).footer()).html(
                total5.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " $"
            );
            $(api.column(6).footer()).html(
                total6.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " $"
            );
            $(api.column(7).footer()).html(
                total7.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " $"
            );
            $(api.column(8).footer()).html(
                total8.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(9).footer()).html(
                total9.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(10).footer()).html(
                total10.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
            $(api.column(11).footer()).html(
                total11.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
			$(api.column(12).footer()).html(
                total12.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
			$(api.column(13).footer()).html(
                total13.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " km²"
            );
        }
    });
}

function toggleEditFresh(val) {
    $("#fresh_count-" + val).prop('disabled', false);
    let previous_value = parseInt($("#fresh_count-" + val).val());
    $("#fresh_count-" + val).change(function () {
        let value = parseInt($("#fresh_count-" + val).val());
        if (previous_value > value) {
        } else if (previous_value < value) {
            $("#fresh_count-" + val).prop('disabled', true);
            $("#area-" + val).prop('disabled', false);
            $("#area-" + val).val("");
        }
        previous_value = value;
    }).change();

}

function handleUpdate(id) {
    $('button[id^="btn-"]').prop('disabled', true);
    $("#btn-" + getSecondPart(id)).removeAttr('disabled');
}

function getSecondPart(str) {
    return str.split('-')[1];
}

function satType() {
    $("#txtPrice").val('');
    switch ($("#satelliteType option:selected").val()) {
        case 'SPOT67':
            $("#productsList").html('<table class="table" style="table-layout: fixed;"><tbody><tr><td style="width: 50%;"><input type="checkbox" value="SPOT67_1.5mP+XS" id="15mPXS" name="chkPricingGroup" class="chkSPOT67 chkPricing"><span class="labelPricing lblPricingSPOT67"> 1.5m Pansharpened + Multispectral</span></td><td><input type="checkbox" value="SPOT67_1.5mP" id="15mP" name="chkPricingGroup" class="chkSPOT67 chkPricing"><span class="labelPricing lblPricingSPOT67"> 1.5m Panchromatic</span></td></tr><tr><td><input type="checkbox" value="SPOT67_6mXS" id="6mXS" name="chkPricingGroup" class="chkSPOT67 chkPricing"><span class="labelPricing lblPricingSPOT67"> 6m Multispectral</span></td><td><input type="checkbox" value="SPOT67_1.5mPansharpen Stereo" id="15mPanCSterio" name="chkPricingGroup" class="chkSPOT67 chkPricing"><span class="labelPricing lblPricingSPOT67"> 1.5m Pansharpen Stereo</span></td></tr><tr><td><input type="checkbox" value="SPOT67_2.5m P+XS" id="25mPXS" name="chkPricingGroup" class="chkSPOT67 chkPricing"><span class="labelPricing lblPricingSPOT67"> 2.5m Pansharpened + Multispectral</span></td><td></td></tr></tbody></table>');
            break;
        case 'PRSS':
            $("#productsList").html('<table class="table" style="table-layout: fixed;"><tbody><tr><td style="width: 50%;"><input type="checkbox" value="PRSS_0.98m Pansharpened" id="098PanS" name="chkPricingGroup" class="chkPRSS chkPricing"><span class="labelPricing lblPricingPRSS"> 0.98m Pansharpened </span></td><td><input type="checkbox" value="PRSS_0.98 Panchromatic" id="098PanC" name="chkPricingGroup" class="chkPRSS chkPricing"><span class="labelPricing lblPricingPRSS"> 0.98 Panchromatic</span></td></tr><tr><td><input type="checkbox" value="PRSS_2.89m Multispectral" id="289MultiS" name="chkPricingGroup" class="chkPRSS chkPricing"><span class="labelPricing lblPricingPRSS"> 2.89m Multispectral</span></td><td><input type="checkbox" value="PRSS_Bundle(Multispectral+Panchromatic)" id="Bundle" name="chkPricingGroup" class="chkPRSS chkPricing"><span class="labelPricing lblPricingPRSS"> Bundle(Multispectral+Panchromatic)</span></td></tr></tbody></table>');
            break;
        case 'Pleidas':
            $("#productsList").html('<table class="table" style="table-layout: fixed;"><tbody><tr><td style="width: 50%;"><input type="checkbox" value="Pleiades_Bundle" id="chkPricing" name="chkPricingGroup" class="chkPleiades chkPricing"><span class="labelPricing lblPricingPleiades"> 0.5 m Pan + 2 m MS </span></td><td><input type="checkbox" value="Pleiades_0.5m Stereo" id="chkPricing" name="chkPricingGroup" class="chkPleiades chkPricing"><span class="labelPricing lblPricingPleiades"> 0.5 m Stereo</span></td></tr><tr><td><input type="checkbox" value="Pleiades_0.5m Tri-stereo" id="chkPricing" name="chkPricingGroup" class="chkPleiades chkPricing"><span class="labelPricing lblPricingPleiades"> 0.5 m Tri-Stereo</span></td><td></td></tr></tbody></table>');
            break;
    }
}

function deliveryType() {
    switch ($("#deliveryType option:selected").val()) {
        case 'CD':
            $("#txtRefNoDeliv").prop("disabled", false);
            break;
        case 'OMS':
            $("#txtRefNoDeliv").prop("disabled", true);
            break;
    }
}

function previewImage() {
    if ($("#txtRefNoReq").val() == "") {
        toastr.error('Order Id is required before uploading the letter');
        $("#file").val('');
        return;
    }
    var fd = new FormData();
    var files = $('#file')[0].files[0];
    fd.append('file', files);
    fd.append('id', $("#txtRefNoReq").val());

    $.ajax({
        url: 'server_scripts/upload.php',
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function (response) {
            if (response != 0) {
                $("#img").attr("src", response.replace('../', ''));
                $(".preview img").show(); // Display image element
            } else {
                alert('file not uploaded');
            }
        },
    });
}

function generateOrderID(user) {
    var currentdate = new Date();
    var date = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear();
    date = date.replace('/', '');
    date = date.replace('/', '');
    var d = new Date();
    var time = d.getTime();

    orderid = time + "_" + user + "_" + date;
    orderid = orderid.replace(' ', '');
    return orderid;
}

function handlePlusClick(id) {
    $.ajax({
        type: "GET",
        url: "server_scripts/getorderDetails.php?orderid=" + id,
        cache: false,
        success: function (data) {
            var tbl = JSON.parse(data);
            var tblDetails = '';
            tblDetails += '<table id="table_details" class="table table-striped table-bordered tablesorter" style="width:100%">';
            tblDetails += "<thead> <tr><th>Order Id</th><th>Date</th><th>Time</th><th>Event</th><th>Acquisition No.</th><th>Area</th></tr></thead>";
            tblDetails += "<tbody id='tablebody'>";
            if (tbl.length > 0) {
                for (var i = 0; i < tbl.length; i++) {
                    // if ($("#role").html() == '1') {
					if (parseInt($("#role").html().trim()) == 1) {
                        var datetime = tbl[i].datetime.split(' ');
                        tblDetails += '<tr>'
                        tblDetails += '<td>' + tbl[i].orderid + '</td>';
                        tblDetails += '<td>' + datetime[0] + '</td>';
                        tblDetails += '<td>' + datetime[1] + '</td>';
                        tblDetails += '<td>' + tbl[i].status + '</td>';
                        tblDetails += '<td>' + tbl[i].acquisition_num + '</td>';
                        tblDetails += '<td>' + tbl[i].area + '</td>';
                        tblDetails += '</tr>';
                    }
                }
                tblDetails += "</tbody>";
                tblDetails += "</table>";
                $("#tblOrderDetails").html('');
                $("#tblOrderDetails").html(tblDetails);
                $("#modalOrderDetails").modal('show');
                $('#tblOrderDetails').dataTable().fnDestroy();

                $('#tblOrderDetails').DataTable({
                    "autoWidth": true,
                    "order": [
                        [1, 'desc']
                    ]
                }).draw();
            } else {
                toastr.error("No record found");
            }
        }
    });
}

function addNewOpts(id) {
    var item = prompt("Scene Id:");
    try {
		if (item == "" || item === null) {
			toastr.error("No value entered");
			return;
		}
		var optionExists = ($('#scenesId-' + id + ' option[value="' + item + '"]').length > 0);
		if (!optionExists) {
			$('#scenesId-' + id).append("<option value='" + item + "' selected>" + item + "</option>");
			$("#btnScenes-" + id).removeAttr('disabled');
		}
		else {
			toastr.error("Value already exists");
		}
	}
	catch(e){
		console.log(e);
	}
}

function promptCancellation(orderid) {
    $(".txtCancellationPrompt").text("Do you want to cancel the order?");
    $("#id01").show();
    $(".cancelID").text(orderid);
  }

function userOrderCancelReq() {
    var id = $(".cancelID").text();
    $("#id01").hide();
    $.ajax({
        type: "POST",
        url: "server_scripts/order_cancel.php",
        data: {
            orderid: id,
            role: 'user',
            action: 'request'
        },
        success: function (data) {
            $("#btn_" + id).attr("disabled", true);
            toastr.success("Order Cancellation Request forwarded to Admin")
        }
    });
}

function checkCancellationRequests(){
    $.ajax({
        type: "GET",
        url: "server_scripts/getCancellationRequests.php",
        success: function (data) {
            tableCancel = '<table id="table_cancel" class="table table-striped table-bordered tablesorter" style="width:100%">';
            tableCancel += "<thead> <tr>";
            tableCancel += "<th>Sr. #</th>";
            tableCancel += "<th>Action</th>";
            tableCancel += "<th>PDF</th>";
            tableCancel += "<th>Status</th>";
            tableCancel += "<th>AOI</th>";
            tableCancel += "<th>Order ID</th>";
            tableCancel += "<th>Date</th>";
            tableCancel += "<th>Time</th>";
            tableCancel += "<th>Type</th>";
            tableCancel += "<th>User</th>";
            tableCancel += "<th>Scenes</th>";
            tableCancel += "<th>Count</th></thead><tbody>";
            data = JSON.parse(data);
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                tableCancel += "<tr>";
                tableCancel += "<td></td>";
                tableCancel += "<td><button class=\"btnCancelAction\" onclick=\"actionCancellation('" + element.orderid + "', 'accept', this);\"><i style=\"font-size: 20px;color:green;\" class=\"fas fa-check-circle\"></i></button><button class=\"btnCancelAction\" onclick=\"actionCancellation('" + element.orderid + "', 'reject', this);\"><i style=\"font-size: 20px;color:red;\" class=\"fas fa-times-circle\"></i></button></td>";
                tableCancel += '<td><a href="uploads/' + element.orderid + '.pdf" target="_blank"><i class="fa fa-file-pdf" style="font-size:30px;color:red;"></i></a></td>';
                tableCancel += "<td>" + status_dict[parseInt(element.status_id)] + "</td>";
                var fggeojson = null;
                try {
                    var wkt = (new ol.format.WKT()).readFeatures(tbl[i].aoi);
                    var gj = new ol.format.GeoJSON();
                    fggeojson = gj.writeFeatures(wkt, {
                        featureProjection: 'EPSG:3857'
                    });
                } catch (e) { }
                tableCancel += '<td><a href="data:text/json;charset=utf-8,' + encodeURIComponent(fggeojson) + '" download = "' + element.orderid + '.json"><i class="fa fa-download" style="font-size:20px;color:blue;"></i></a></td>';
                tableCancel += "<td>" + element.orderid + "</td>";
                tableCancel += "<td>" + element.date + "</td>";
                tableCancel += "<td>" + element.time + "</td>";
                tableCancel += "<td>" + element.type + "</td>";
                tableCancel += "<td>" + element.username + "</td>";
                tableCancel += "<td>" + element.scenes + "</td>";
                tableCancel += "<td>" + element.fresh_count + "</td>";
                tableCancel += "</tr>";
                
            }
            tableCancel += "</tbody><table>";
        }
    });
    setTimeout(checkCancellationRequests, 60000);
}

function actionCancellation(orderid, action, ele) {
    $.ajax({
        type: "POST",
        url: "server_scripts/order_cancel.php",
        data: {
            orderid: orderid,
            role: 'admin',
            action: action
        },
        success: function (data) {
            toastr.success(data);
            cancel_datatable.row($(ele).parents('tr')).remove().draw();
        }
    });
}