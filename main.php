<?php
// include('server_scripts/globals.php');
session_start();
if (!isset($_SESSION['Username_OMS'])) {
    $_SESSION['msg_OMS'] = "You must log in first";
    header('location: login.php');
}

// if (isset($_GET['logout_OMS'])) {
// unset($_SESSION['Username_OMS']);
// unset($_SESSION['UserID_OMS']);
// unset($_SESSION['Role_OMS']);
// unset($_SESSION['FName_OMS']);
// unset($_SESSION['LName_OMS']);
// unset($_SESSION['Email_OMS']);
// unset($_SESSION['Success_OMS']);
// unset($_SESSION['msg_OMS']);
// header("location: login.php");
// }

?>
<!DOCTYPE html>
<html class="ls-top-navbar show-sidebar sidebar-l2 sidebar-r2" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Order Management System</title>
    <link rel="stylesheet" type="text/css" href="css/libs/ol.css" />
    <link rel="stylesheet" type="text/css" href="css/libs/ol-ext.css" />
    <link rel="stylesheet" type="text/css" href="css/libs/reset.css" />
    <link rel="stylesheet" type="text/css" href="css/libs/cart.css" />
    <link rel="stylesheet" type="text/css" href="css/libs/all.css" />
    <link rel="stylesheet" type="text/css" href="css/libs/animate.css" />
    <link rel="stylesheet" type="text/css" href="css/libs/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/libs/datepicker.css" />
    <link rel="stylesheet" type="text/css" href="css/libs/jquery.dataTables.css" />
    <link rel="stylesheet" type="text/css" href="css/libs/toastr.min.css" />
    <link rel="stylesheet" type="text/css" href="css/libs/overhang.min.css" />
    <link rel="stylesheet" type="text/css" href="css/custom/style.css" />
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="css/libs/bootstrap-select.min.css">

    <script type="text/javascript" src="js/libs/jquery.js"></script>
    <script type="text/javascript" src="js/libs/jquery-ui.js"></script>
    <!--<script type="text/javascript" src="js/libs/session-timeout.js"></script>-->
    <script type="text/javascript" src="js/libs/popper.min.js"></script>
    <script type="text/javascript" src="js/libs/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/libs/bootstrap-datepicker.js"></script>
    <script type="text/javascript" src="js/libs/jspdf.min.js"></script>
    <script type="text/javascript" src="js/libs/jspdf.plugin.autotable.js"></script>
    <script type="text/javascript" src="js/libs/jquery.blockUI.js"></script>
    <script type="text/javascript" src="js/libs/html2canvas.js"></script>
    <script type="text/javascript" src="js/libs/mycart.js"></script>
    <script type="text/javascript" src="js/libs/ol.js"></script>
    <script type="text/javascript" src="js/libs/ol-ext.js"></script>
    <script type="text/javascript" src="js/libs/turf.min.js"></script>
    <script type="text/javascript" src="js/libs/utmconv.js"></script>
    <script type="text/javascript" src="js/libs/latlonconv.js"></script>
    <script type="text/javascript" src="js/libs/FileSaver.min.js"></script>
    <script type="text/javascript" src="js/libs/jszip.min.js"></script>
    <script type="text/javascript" src="js/libs/jquery.dataTables.js"></script>
    <script type="text/javascript" src="js/libs/toastr.min.js"></script>
    <script type="text/javascript" src="js/libs/overhang.min.js"></script>
    <script type="text/javascript" src="js/libs/jquery.tickerNews.min.js"></script>
    <!-- Latest compiled and minified JavaScript 
        -->
    <script src="js/libs/bootstrap-select.min.js"></script>

    <!-- <script src="js/libs/turf.min.js"></script> -->
    <!-- <script src="https://api.tiles.mapbox.com/mapbox.js/plugins/turf/v2.0.0/turf.min.js"></script> -->

    <!-- Custom Coding block -->
    <script type="text/javascript" src="js/custom/Script.js"></script>
</head>

<body onload="init()">
    <div id="sar_products" style="display:none;"></div>
    <!-- <button onclick="document.getElementById('id01').style.display='block'" style="position: absolute; top: 0%; z-index: 5200;">Open Modal</button> -->
    <div id="id01" class="modal" style="top:0 !important; z-index: 5300; background-color: rgb(249 250 253 / 40%); width: 100%; height: 100%; padding-top: 20%;">
        <!-- <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span> -->

        <form class="modal-content confirmation-modal">
            <div class="confirm-container">
                <p class="remQuota"></p>
                <div class="clearfix">
                    <button type="button" onclick="document.getElementById('id01').style.display='none'" id="cancelFactor" class="cancelbtn">Cancel</button>
                    <button type="button" onclick="initiateFreshOrder()" class="confirmbtn">Confirm</button>
                </div>
            </div>
        </form>
    </div>
    <div class="disablingDiv"></div>
    <div class="modal fade" id="modalPush" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-notify modal-info" role="document">
            <div class="modal-content text-center">
                <div class="modal-header d-flex justify-content-center" style="font-size: 2.5em; font-weight: bold;">
                    <p class="heading">ORDER STATUS UPDATE!</p>
                </div>
                <div class="modal-body">
                    <i class="fas fa-bell fa-4x animated rotateIn mb-4" style="font-size: 5.5em; color: #ffc107;"></i>
                    <p id="notification_msg"></p>
                </div>
                <div class="modal-footer flex-center" style="justify-content: center;">
                    <a href="#" class="btn btn-info" onclick="notificationRead();">OK</a>
                    <!-- <a type="button" class="btn btn-outline-info waves-effect" data-dismiss="modal">No</a> -->
                </div>
            </div>
        </div>
    </div>
    <div class="navigation" style="background:#093c58">
        <img src='css/images/suparco1.png' height='50' width="50" style="margin-top: 0px; margin-left: 6px;">
        <span class="header-span">ORDER</span><span class="header-span" style="margin-left: 10px;">MANAGEMENT</span><span class="header-span" style="margin-left: 10px;">SYSTEM</span>
        <div style="float:right;">
            <div style="position: absolute; right: 0px; top: 0; z-index:6;">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown user">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="css/images/m4-avatar-circle-head-shoulders-100x100.png" alt="" class="img-circle"> <?php echo $_SESSION['FName_OMS'] . ' ' . $_SESSION['LName_OMS']; ?><span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#" id='chkGraticule'><i id='gridI' class="fas fa-th"></i> Grid On/Off</a></li>
                            <li><a href="account.php" target="_blank"><i class="fa fa-wrench"></i> Orders</a></li>
                            <li><a href="#" id="chkOrbitography"><i class="fa fa-globe-asia fa-spin"></i> Orbitography</a></li>
                            <?php
                            if ($_SESSION['UserID_OMS'] == '46') {
                                echo '<li><a href="Report/main.php" target="_blank"><i class="fa fa-wrench"></i> Reports</a></li>';
                            } ?>
                            <li><a href="logout.php" id="btnLogout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div id=dvOrbitography-panel class="dvOrbitography-panel" style="display:none">
        <div id="dvOrbitography-wrapper" class="dvOrbitography-wrapper">
            <div class="dvOrbitography-header">
                <div class="dvOrbitography-header-action">
                    <span id="iconClose" style="float:right"><i class="fas fa-times"></i></span>
                </div>
                <div class="dvOrbitography-header-title">Orbitography</div>

            </div>
            <div class="dvOrbitography-content">
                <div class="dvOrbitography-content-wrapper">
                    <div class="orbitography-search-form-wrapper">
                        <form action="" class="orbito-search-form">
                            <div class="aoi-gestion orbito-element">
                                <div class="aoi-select form-label">
                                    <label for="">Search by AOI</label>
                                    <!-- <select name="" id="" class="drs-select">
                                        <option value="">AOI:</option>
                                    </select> -->
                                    <div class="container">
                                        <label class="switch" for="chkSearchByAOI" style=" float: left; margin-left: 8%;">
                                            <input type="checkbox" id="chkSearchByAOI" unchecked />
                                            <div class="sliderchk round"></div>
                                        </label>
                                    </div>
                                </div>
                                <!-- <div class="container">
                                    <label class="switch" for="chkSearchByAOI" style=" float: left; margin-left: 8%;">
                                        <input type="checkbox" id="chkSearchByAOI" unchecked />
                                        <div class="sliderchk round"></div>
                                    </label>
                                </div> -->
                            </div>
                            <!-- date section -->
                            <div class="orbito-date-column">
                                <div class="start-date orbito-element">
                                    <label for="" class="form-label">Start:</label>
                                    <span style="float: left;">
                                        <div id="datepickerOrbitoStart" class="input-group date" data-date-format="mm-dd-yyyy">
                                            <input id="orbitoStartDate" class="form-control" type="text" style="height: 35px; font-size: 15px;" readonly />
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                        </div>
                                    </span>
                                </div>
                                <div class="end-date orbito-element">
                                    <label for="" class="form-label">End:</label>
                                    <span style="float: left;">
                                        <div id="datepickerOrbitoEnd" class="input-group date" data-date-format="mm-dd-yyyy">
                                            <input id="orbitoEndDate" class="form-control" type="text" style="height:35px; font-size: 15px;" readonly />
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <!-- satellite selection -->
                            <div class="orbito-satellite-column">
                                <div class="Select orbito-satellite-selection">
                                    <select id="dropDownOrbitoSatellites" class="selectpicker" multiple title="Satellites">
                                        <option>SPOT-6</option>
                                        <option>Pleiades</option>
                                        <option>PNeo</option>

                                        <option>PRSS</option>
                                        <option>Taijing</option>
                                        <option>SuperView</option>

                                        <!-- <option>SV-2</option>
                                        <option>SV-3</option>
                                        <option>SV-4</option>

                                        <option>SV-5</option> -->
                                    </select>
                                </div>
                            </div>
                            <!-- angle column -->
                            <div class="orbito-angle-column">
                                <div class="max-roll-angle orbito-element">
                                    <label class="form-label">Max roll angle (°)</label>
                                    <span class="react-numeric-input" style="position: relative; display: inline-block;">
                                        <input id="rollAngle" type="text" readonly="readonly" min="5" max="45" step="5" value="5" style="font-size:16px;padding-right: 3ex; box-sizing: border-box; border: 1px solid rgb(204, 204, 204); border-radius: 5px; padding-left: 4px; display: block; appearance: none; line-height: normal;width:60px;height:40px" pattern=".*">
                                        <b onclick="if(document.querySelector('#rollAngle').value < 45) {document.querySelector('#rollAngle').value=parseInt(document.querySelector('#rollAngle').value) + 5}" style="cursor:pointer;position: absolute; right: 2px; width: 2.26ex; border-color: rgba(0, 0, 0, 0.1); border-style: solid; text-align: center; cursor: default; transition: all 0.1s ease 0s; background: rgba(0, 0, 0, 0.1); box-shadow: rgba(0, 0, 0, 0.1) -1px -1px 3px inset, rgba(255, 255, 255, 0.7) 1px 1px 3px inset; top: 2px; bottom: 50%; border-radius: 2px 2px 0px 0px; border-width: 1px 1px 0px;">
                                            <i style="position: absolute; top: 50%; left: 50%; width: 0px; height: 0px; border-width: 0px 1ex 1ex; border-color: transparent transparent rgba(0, 0, 0, 0.7); border-style: solid; margin: -0.3ex 0px 0px -0.94ex;"></i>
                                        </b>
                                        <b onclick="if(document.querySelector('#rollAngle').value > 0) {document.querySelector('#rollAngle').value=parseInt(document.querySelector('#rollAngle').value) - 5}" style="cursor:pointer;position: absolute; right: 2px; width: 2.26ex; border-color: rgba(0, 0, 0, 0.1); border-style: solid; text-align: center; cursor: default; transition: all 0.1s ease 0s; background: rgba(0, 0, 0, 0.1); box-shadow: rgba(0, 0, 0, 0.1) -1px -1px 3px inset, rgba(255, 255, 255, 0.7) 1px 1px 3px inset; top: 50%; bottom: 2px; border-radius: 0px 0px 2px 2px; border-width: 0px 1px 1px;">
                                            <i style="position: absolute; top: 50%; left: 50%; width: 0px; height: 0px; border-width: 1ex 1ex 0px; border-color: rgba(0, 0, 0, 0.7) transparent transparent; border-style: solid; margin: -0.3ex 0px 0px -0.94ex;"></i>
                                        </b>
                                    </span>
                                </div>
                                <div class="submit orbito-element orbito-action">
                                    <button onclick="getOrbitoData(document.querySelector('#rollAngle').value)" id="btnSearchOrbito" class="search-button btn btnGetOrbitoData" type="button" name="search" disabled>Search</button>
                                </div>
                            </div>
                    </div>
                    </form>
                </div>
                <div id="loadingIcon" style="display: none;">
                    <span style="margin:0 auto"><i style="font-size:40px" class="fas fa-solid fa-spinner fa-spin fa-5x"></i></span>
                </div>

                <div id="dataOrbito">

                </div>

            </div>

        </div>
    </div>
    <div class="divControls" style="display:none;">
        <button id="togglemenu" data-toggle="tooltip" title="Archived Images" data-placement="right" class="controls" onclick="toggleMenu('Archive')">
            <i class="fas fa-camera sideIcons iconArchive"></i>
        </button>
        <div class="myProgress">
            <div class="myBar" id="Bar1"></div>
        </div>
        <button id="freshData" data-toggle="tooltip" title="Fresh Acquisition" data-placement="right" class="controls" onclick="toggleMenu('Fresh')">
            <i class="fa fa-globe sideIcons iconFresh"></i>
        </button>
        <!-- <button id="onDemandData" data-toggle="tooltip" title="Data on Demand" data-placement="right" class="controls" onclick="toggleMenu('onDemand')">
                <i class="fas fa-database sideIcons iconDemand"></i></i>
            </button> -->
        <div class="myProgress">
            <div class="myBar" id="Bar3"></div>
        </div>
    </div>
    <div id="map">
        <div id="divControlsArea">
            <div id="toolsArea">
                <div class="underLine">
                    <button type="button" id="Point" value="Point" onclick="addInteraction(this.id);" class="btnTools"><i class="fas fa-map-marker"></i> Point</button>
                    <button id="pointOptions"><i id="iPoint" class="fas fa-chevron-circle-right"></i></button>
                </div>
                <div class="underLine">
                    <button type="button" id="LineString" value="Polyline" onclick="addInteraction(this.id);" class="btnTools"><i class="fas fa-grip-lines-vertical"></i> Polyline</button>
                    <button id="lineOptions"><i id="iLine" class="fas fa-chevron-circle-right"></i></button>
                </div>
                <div class="underLine">
                    <button type="button" id="Box" value="Box" onclick="addInteraction(this.id);" class="btnTools"><i class="far fa-square"></i> Box&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
                <div class="underLine">
                    <button type="button" id="Polygon" value="Polygon" onclick="addInteraction(this.id);" class="btnTools"><i class="fas fa-draw-polygon"></i> Polygon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
                <div class="underLine">
                    <button type="button" data-toggle="modal" data-target="#coordsModal" id="btnCoords" class="btnTools"><i class="fas fa-map-marker"></i> Coordinates</button>
                </div>
                <button type="button" data-toggle="modal" data-target="#polycoordsModal" id="btnPolyCoords" class="btnTools"><i class="fas fa-draw-polygon"></i> Coordinates</button>
                <button type="button" id="btnClear" onclick="resetall();">Clear All</button>
            </div>

            <div id="distanceBufferPoint">
                <p style=" font-size: 16px; text-align: center;">Buffer Size (km<sup>2</sup>)</p>
                <div class="form-inline" style="margin-bottom: 10px;">
                    <input type="number" min="5" step="1" class="form-control" value="5" id="txtBufferPoint" placeholder="Buffer Size" style="font-size: 14px; width: 130px;">
                </div>
                <div style="text-align: center; margin-bottom: 10px;">
                    <button style="background: #0d5881; border: none; padding: 5px ​10px 5px 10px; color: white; cursor:pointer; font-size: 15px;" onclick="setBuffer('set');">Set</button>
                    <button style="background: white; border: 1px solid #0d5881; color: #0d5881; padding: 5px ​10px 5px 10px; cursor:pointer; font-size: 15px;" onclick="setBuffer('reset');">Reset</button>
                </div>
            </div>
            <div id="distanceBufferLine">
                <p style=" font-size: 22px; font-weight: bold; text-align: center;">Size</p>
                <div class="form-inline" style="margin-bottom: 10px;">
                    <input type="text" class="form-control" value="5" id="txtBufferLine" placeholder="Buffer Size" style="font-size: 14px; width: 163px;">
                    <p style=" background: #eeeeee; padding: 4px 9px 4px 9px; margin-bottom: 0px;  font-size: 15px; border-radius: 4px;">km</p>
                </div>
                <div style="text-align: center; margin-bottom: 10px;">
                    <button style="background: #0d5881;border: none; padding: 5px ​10px 5px 10px; color: white; font-size: 15px;">Set</button>
                    <button style="background: white; border: 1px solid #0d5881; color: #0d5881; padding: 5px ​10px 5px 10px; font-size: 15px;">Reset</button>
                </div>
            </div>
            <div id="divFilter">
                <button type="button" data-toggle="modal" data-target="#productModal" id="btnProduct" class="btn btn-primary"><i class="fas fa-satellite-dish"></i> Satellites</button>
                <button type="button" data-toggle="modal" data-target="#criteriaModal" id="btnCriteria" class="btn btn-primary"><i class="fas fa-sliders-h"></i> Criteria</button>
            </div>

            <div id="divDrawing">
                <button type="button" id="btnDraw" data-toggle="button" aria-pressed="false" autocomplete="off" class="btn btn-primary"><i class="fas fa-pencil-ruler"></i> Draw</button>
                <button type="button" data-toggle="modal" data-target="#filter_modal" id="btnModify" class="btn btn-primary" aria-pressed="false" autocomplete="off" disabled onclick="modifyFeature();"><i class="fas fa-edit"></i> Modify</button>
            </div>
            <div id="divActive">
                <table style="width: 100%;">
                    <tr>
                        <td>
                            <a href="#" id="endModify" style="font-size: 18px;">
                                End Modifying</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="font-size: 20px;font-size: 18px; font-weight: bold; color: #0d5881;">Active Polygon</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select id="polygons" onchange="polygonChanged();" style="font-size: 16px"></select>
                            <button type="button" id="btnDelete"><i style="color: #e61e1e;" class="fas fa-trash"></i> </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- Content of the menu -->

    <div id="menu">
        <div id="no_data">
            <div style="text-align: center; margin-top: 385px;">
                <h3 style="font-size: 30px; color: #676565;">
                    No Data Available
                </h3>
            </div>
        </div>

        <div id="data_avl" style="display:none">
            <h2 class="headers" id="data_header">Optical Results</h2>
            <h3 style="color: #0d5881; font-size: 20px;" id='resultsCount'>Total Results: </h3>
            <div id="data" style="display:none;"></div>
            <div id="data_fresh" style="display:none;">
                <table class="table table-striped table-bordered tablesorter" style="margin-top: 7%;">
                    <tbody>
                        <tr>
                            <td>
                                <label class="freshLabels">Satellite</label>
                            </td>
                            <td class="freshCntrls">
                                <select class="freshSelect" id="satSelect">
                                    <option value='PRSS' selected>PRSS</option>
                                    <option value='SPOT'>SPOT 6/7</option>
                                    <?php
                                    $sv_quota = $_SESSION['SV_Quota'];
                                    $neo_quota = $_SESSION['Neo_Quota'];
                                    // if($sv_quota != 0){
                                    // echo '<option value=\'SV\'>Super View</option>';
                                    // }
                                    if ($_SESSION['UserID_OMS'] == '26' or $_SESSION['UserID_OMS'] == '27' or $_SESSION['UserID_OMS'] == '25' or $_SESSION['UserID_OMS'] == '22' or $_SESSION['UserID_OMS'] == '16' or $_SESSION['UserID_OMS'] == '23' or $_SESSION['UserID_OMS'] == '18') {
                                        echo '<option value=\'PleiadesNeo\'>Pléiades Neo</option>';
                                        echo '<option value="SAR">SAR-SAT1</option>';
                                        echo '<option value="SV">SuperView</option>';
                                    }
                                    ?>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="freshLabels">Products</label>
                            </td>
                            <td class="freshCntrls">
                                <select class="freshSelect freshProdDivs" id="satPRSS" style="display: block;">
                                    <option value='Bundle(Multispectral+Panchromatic)'>Bundle(Multispectral+Panchromatic)</option>
                                    <option value='0.98m Pansharpened' selected>0.98m Pansharpened</option>
                                    <option value='0.98 Panchromatic'>0.98 Panchromatic</option>
                                    <option value='2.89m Multispectral'>2.89m Multispectral</option>
                                </select>
                                <select class="freshSelect freshProdDivs" id="satSPOT">
                                    <option value='1.5mP+XS' selected>Bundle (1.5m Panchromatic + 6m Multispectral)</option>
                                    <option value='1.5mP'>1.5m Panchromatic</option>
                                    <option value='6mXS'>6m Multispectral</option>
                                </select>
                                <select class="freshSelect freshProdDivs" id="satPleiadesNeo">
                                    <option value='Pansharpened Neo' selected>0.3m Pansharpened</option>
                                    <option value='Bundle Neo'>Bundle(0.3m Pan + 1.2m MS)</option>
                                    <option value='1.2m MS'>1.2m MS</option>
                                    <option value='0.3m Pan'>0.3m Pan</option>
                                </select>
                                <select class="freshSelect freshProdDivs" id="satSV">
                                    <option value='0.5m Pansharpened' selected>0.5m Pansharpened</option>
                                    <option value='0.5m(Ortho)Pansharpened'>0.5m(Ortho)Pansharpened</option>
                                    <option value='BundleSV(Multispectral+Panchromatic)'>Bundle(Multispectral+Panchromatic)</option>
                                </select>
                                <select class="freshSelect freshProdDivs" id="satSAR">
                                    <option value='SM' selected>Strip Map (1-3m, 30 x 100 km)</option>
                                    <option value='SS'>Sliding SpotLight (1m, 10 x 10 km)</option>
                                    <option value='HiRes'>HiRes SpotLight (0.5m, 10 x 05 km)</option>
                                </select>
                                <div class="satSV">
                                    <p class="infoSV">Please draw area within allotted Quota</p>
                                    <p class="quotaSV">Quota after order: 50 km<sup>2<sup></p>
                                </div>
                                <!-- <select class="freshSelect" id="satSPOT542">
                                        <option value='2.5m P+XS' selected>2.5m Pansharpened + Multispectral</option>
                                        <option value='2.5m P'>2.5m Panchromatic</option>
                                        <option value='5m P+XS'>5m Pansharpened + Multispectral</option>
                                        <option value='5m P'>5m Panchromatic</option>
                                        <option value='10m XS'>10m Multispectral</option>
                                        <option value='10m P+XS'>10m Pansharpened + Multispectral</option>
                                        <option value='10m Pan'>10m Panchromatic</option>
                                        <option value='20m XS'>20m Multispectral</option>
                                        <option value='5m XS'>5m Multispectral</option>
                                    </select> -->
                                <select class="freshSelect freshProdDivs" id="satPleiades">
                                    <option value='Bundle' selected>Bundle(0.5m Pansharpened + 2m Multispectral)</option>
                                    <option value='0.5m Pan'>0.5m Pansharpened</option>
                                    <option value='2m MS'>2m Multispectral</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="rowPriority">
                            <td>
                                <label class="freshLabels">Acquisition Modes</label>
                            </td>
                            <td class="freshCntrls">
                                <select class="freshSelect freshProdDivs" id="satAcqModes">
                                    <option value='Mono' selected>Mono</option>
                                    <option value='Stereo'>Stereo</option>
                                    <option value='TriStereo'>Tri-Stereo</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="rowPriority">
                            <td>
                                <label class="freshLabels">Order Priority</label>
                            </td>
                            <td class="freshCntrls">
                                <select class="freshSelect freshProdDivs" id="satImgPriority">
                                    <option value='standard' selected>Standard</option>
                                    <option value='priority' class="stereo">Priority</option>
                                    <option value='emergency' class="stereo">Emergency</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="rowSAR">
                            <td>
                                <label class="freshLabels">Antenna Pointing</label>
                            </td>
                            <td class="freshCntrls">
                                <select class="freshSelect" id="antennaSAR">
                                    <option value='Default' selected>Default</option>
                                    <option value='Right'>Right</option>
                                    <option value='Left'>Left</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="rowSAR">
                            <td>
                                <label class="freshLabels">Acquisition Pass</label>
                            </td>
                            <td class="freshCntrls">
                                <select class="freshSelect" id="passSAR" style="display: block;">
                                    <option value='Default' selected>Default</option>
                                    <option value='Ascending'>Ascending</option>
                                    <option value='Descending'>Descending</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="rowSAR">
                            <td>
                                <label class="freshLabels">Product Levels</label>
                            </td>
                            <td class="freshCntrls">
                                <select class="freshSelect" id="prodLevelSAR" style="display: block;">
                                    <option value='Level 1'>Level 1 - Single Look Complex</option>
                                    <option value='Level 2' selected>Level 2 - Ground Range Detected</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="rowSAR">
                            <td colspan="2">
                                <p class="txtSAR">Complex image with both phase and intensity images, provided in the imaging geometry. No geometric corrections applied</p>
                                <p class="txtSAR">Geometrically corrected image, projected in WGS-84</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="freshLabels">Start Date</label>
                            </td>
                            <td class="freshCntrls"> <span style="float: left;">
                                    <div id="datepickerFreshStart" class="input-group date" data-date-format="dd/mm/yyyy">
                                        <input id="freshStartDate" class="form-control" type="text" style="height: 46px; font-size: 20px;" readonly />
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                    </div>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="freshLabels">End Date</label>
                            </td>
                            <td class="freshCntrls"> <span style="float: left;">
                                    <div id="datepickerFreshEnd" class="input-group date" data-date-format="dd/mm/yyyy">
                                        <input id="freshEndDate" class="form-control" type="text" style="height: 46px; font-size: 20px;" readonly />
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                    </div>
                                </span>
                            </td>
                        </tr>
                        <tr class="rowInc">
                            <td>
                                <label class="freshLabels">Incidence angle (°)</label>
                            </td>
                            <td>
                                <div style="width: 50%; height: 50%; float:left; margin-left: -15px;">
                                    <!-- <input type="number" step="5" min="0" max="45" name="points" id="freshAngleLower" class="form-control input-sm input-slider input-slider-left ng-pristine ng-valid ng-valid-min ng-valid-max ng-touched step" value="0">
                                    <span style="font-size: 20px; padding-left: 10px;">-</span>
                                    <input type="number" step="5" min="0" max="45" name="points" id="freshAngleUpper" class="form-control input-sm input-slider input-slider-left ng-pristine ng-valid ng-valid-min ng-valid-max ng-touched step" value="25"> -->

                                    <span class="numeric-input" style="position: relative; display: inline-block;">
                                        <input id="freshAngleLower" class="form-control input-sm" type="text" readonly="readonly" min="0" max="45" step="5" value="0" style="font-size:16px;padding-right: 3ex; box-sizing: border-box; border: 1px solid rgb(204, 204, 204); border-radius: 5px; padding-left: 4px; display: block; appearance: none; line-height: normal;width:60px;height:40px" pattern=".*">
                                        <b onclick="if(document.querySelector('#freshAngleLower').value < 45) {document.querySelector('#freshAngleLower').value=parseInt(document.querySelector('#freshAngleLower').value) + 5}" style="cursor:pointer;position: absolute; right: 2px; width: 2.26ex; border-color: rgba(0, 0, 0, 0.1); border-style: solid; text-align: center; cursor: default; transition: all 0.1s ease 0s; background: rgba(0, 0, 0, 0.1); box-shadow: rgba(0, 0, 0, 0.1) -1px -1px 3px inset, rgba(255, 255, 255, 0.7) 1px 1px 3px inset; top: 2px; bottom: 50%; border-radius: 2px 2px 0px 0px; border-width: 1px 1px 0px;">
                                            <i style="position: absolute; top: 50%; left: 50%; width: 0px; height: 0px; border-width: 0px 1ex 1ex; border-color: transparent transparent rgba(0, 0, 0, 0.7); border-style: solid; margin: -0.3ex 0px 0px -0.94ex;"></i>
                                        </b>
                                        <b onclick="if(document.querySelector('#freshAngleLower').value > 0) {document.querySelector('#freshAngleLower').value=parseInt(document.querySelector('#freshAngleLower').value) - 5}" style="cursor:pointer;position: absolute; right: 2px; width: 2.26ex; border-color: rgba(0, 0, 0, 0.1); border-style: solid; text-align: center; cursor: default; transition: all 0.1s ease 0s; background: rgba(0, 0, 0, 0.1); box-shadow: rgba(0, 0, 0, 0.1) -1px -1px 3px inset, rgba(255, 255, 255, 0.7) 1px 1px 3px inset; top: 50%; bottom: 2px; border-radius: 0px 0px 2px 2px; border-width: 0px 1px 1px;">
                                            <i style="position: absolute; top: 50%; left: 50%; width: 0px; height: 0px; border-width: 1ex 1ex 0px; border-color: rgba(0, 0, 0, 0.7) transparent transparent; border-style: solid; margin: -0.3ex 0px 0px -0.94ex;"></i>
                                        </b>
                                    </span>
                                    <span style="font-size: 20px; padding-left: 10px;">-</span>
                                    <span class="numeric-input" style="position: relative; display: inline-block;">
                                        <!-- upper -->
                                        <input id="freshAngleUpper" class="form-control input-sm" type="text" readonly="readonly" min="0" max="45" step="5" value="25" style="font-size:16px;padding-right: 3ex; box-sizing: border-box; border: 1px solid rgb(204, 204, 204); border-radius: 5px; padding-left: 4px; display: block; appearance: none; line-height: normal;width:60px;height:40px" pattern=".*">
                                        <b onclick="if(document.querySelector('#freshAngleUpper').value < 45) {document.querySelector('#freshAngleUpper').value=parseInt(document.querySelector('#freshAngleUpper').value) + 5}" style="cursor:pointer;position: absolute; right: 2px; width: 2.26ex; border-color: rgba(0, 0, 0, 0.1); border-style: solid; text-align: center; cursor: default; transition: all 0.1s ease 0s; background: rgba(0, 0, 0, 0.1); box-shadow: rgba(0, 0, 0, 0.1) -1px -1px 3px inset, rgba(255, 255, 255, 0.7) 1px 1px 3px inset; top: 2px; bottom: 50%; border-radius: 2px 2px 0px 0px; border-width: 1px 1px 0px;">
                                            <i style="position: absolute; top: 50%; left: 50%; width: 0px; height: 0px; border-width: 0px 1ex 1ex; border-color: transparent transparent rgba(0, 0, 0, 0.7); border-style: solid; margin: -0.3ex 0px 0px -0.94ex;"></i>
                                        </b>
                                        <b onclick="if(document.querySelector('#freshAngleUpper').value > 0) {document.querySelector('#freshAngleUpper').value=parseInt(document.querySelector('#freshAngleUpper').value) - 5}" style="cursor:pointer;position: absolute; right: 2px; width: 2.26ex; border-color: rgba(0, 0, 0, 0.1); border-style: solid; text-align: center; cursor: default; transition: all 0.1s ease 0s; background: rgba(0, 0, 0, 0.1); box-shadow: rgba(0, 0, 0, 0.1) -1px -1px 3px inset, rgba(255, 255, 255, 0.7) 1px 1px 3px inset; top: 50%; bottom: 2px; border-radius: 0px 0px 2px 2px; border-width: 0px 1px 1px;">
                                            <i style="position: absolute; top: 50%; left: 50%; width: 0px; height: 0px; border-width: 1ex 1ex 0px; border-color: rgba(0, 0, 0, 0.7) transparent transparent; border-style: solid; margin: -0.3ex 0px 0px -0.94ex;"></i>
                                        </b>
                                    </span>
                                </div>
                                <div style="width: 50%; height: 50%; float:left;">
                                    <div class="price-slider" id="fresh-angle-slider">
                                        <input value="0" min="0" max="45" step="5" id="freshAngleLowerSlider" type="range" oninput="updatePriceLabels('freshAngle')">
                                        <input value="15" min="0" max="45" step="5" id="freshAngleUpperSlider" type="range" oninput="updatePriceLabels('freshAngle')">
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="rowSAR">
                            <td>
                                <label class="freshLabels">Incidence angle (°)</label>
                            </td>
                            <td>
                                <div style="width: 50%; height: 50%; float:left; margin-left: -15px;">
                                    <input type="number" step="5" min="20" max="50" name="points" id="freshAngleLower2" class="form-control input-sm input-slider input-slider-left ng-pristine ng-valid ng-valid-min ng-valid-max ng-touched step" value="20">
                                    <span style="font-size: 20px; padding-left: 10px;">-</span>
                                    <input type="number" step="5" min="20" max="45" name="points" id="freshAngleUpper2" class="form-control input-sm input-slider input-slider-left ng-pristine ng-valid ng-valid-min ng-valid-max ng-touched step" value="45">
                                </div>
                                <div style="width: 50%; height: 50%; float:left;">
                                    <div class="price-slider" id="fresh-angle-slider2">
                                        <input value="20" min="20" max="50" step="5" id="freshAngleLowerSlider2" type="range" oninput="updatePriceLabels('freshAngle2')">
                                        <input value="50" min="20" max="50" step="5" id="freshAngleUpperSlider2" type="range" oninput="updatePriceLabels('freshAngle2')">
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="rowCloud">
                            <td style="width: 36%;">
                                <label class="freshLabels">Cloud Cover (%)</label>
                            </td>
                            <td>
                                <div style="width: 50%; height: 50%; float:left; margin-left: -15px;">
                                    <input type="number" step="5" min="0" max="95" name="points" id="freshCloudLower" class="form-control input-sm input-slider input-slider-left ng-pristine ng-valid ng-valid-min ng-valid-max ng-touched step" value="0">
                                    <span style="font-size: 20px; padding-left: 10px;">-</span>
                                    <input type="number" step="5" min="0" max="95" name="points" id="freshCloudUpper" class="form-control input-sm input-slider input-slider-left ng-pristine ng-valid ng-valid-min ng-valid-max ng-touched step" value="15">
                                </div>
                                <div style="width: 50%; height: 50%; float:left;">
                                    <div class="price-slider" id="fresh-cloud-slider">
                                        <input value="0" min="0" max="95" step="5" type="range" oninput="updatePriceLabels('freshcloud')">
                                        <input value="20" min="0" max="95" step="5" type="range" oninput="updatePriceLabels('freshcloud')">
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr id="multipleAcq">
                            <td><label class="freshLabels">Multiple Acquisitions</label></td>
                            <td colspan="3">
                                <!-- <label style="float: left;font-size: 14px;">NO</label> -->
                                <div class="container">
                                    <label class="switch" for="cbMultipleAcq" style=" float: left; margin-left: 8%;">
                                        <input type="checkbox" id="cbMultipleAcq" />
                                        <div class="sliderchk round"></div>
                                    </label>
                                </div>
                            </td>
                        </tr>

                        <tr class="acqFreshFreqDiv" style="display:none">
                            <td>
                                <label class="freshLabels">Acq. Frequency</label>
                            </td>
                            <td class="freshCntrls">
                                <select class="freshSelect" id="freshAcqFreq">
                                    <option value='After Every 14 Days' selected>After Every 14 Days</option>
                                    <option value='After Every 28 Days'>After Every 28 Days</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button type="button" id="displayUpcomingAttempts" data-toggle="button" aria-pressed="true" class="btn btn-primary" onclick="displayUpcomingAttempts();" style="padding: 4px; min-width: 40px; background: white; border: 1px solid #0d5881; color: #0d5881;">
                                    Upcoming Attempts
                                    <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle" viewBox="0 0 24 24" fit="" height="24px" width="24px" preserveAspectRatio="xMidYMid meet" focusable="false">
                                        <path d="M18.36 2.64c1.64 0 3 1.36 3 3 0 1.65-1.36 3-3 3-1.65 0-3-1.35-3-3 0-.3.05-.58.14-.84-1.07-.51-2.25-.8-3.5-.8a8 8 0 00-8 8l.04.84-1.99.21L2 12A10 10 0 0112 2c1.69 0 3.28.42 4.67 1.16.49-.33 1.07-.52 1.69-.52m0 2a1 1 0 00-1 1 1 1 0 001 1c.56 0 1-.45 1-1 0-.56-.44-1-1-1M5.64 15.36c1.65 0 3 1.35 3 3 0 .3-.05.58-.14.84 1.07.51 2.25.8 3.5.8a8 8 0 008-8l-.04-.84 1.99-.21L22 12a10 10 0 01-10 10c-1.69 0-3.28-.42-4.67-1.16-.49.33-1.07.52-1.69.52-1.64 0-3-1.36-3-3 0-1.65 1.36-3 3-3m0 2c-.56 0-1 .45-1 1 0 .56.44 1 1 1a1 1 0 001-1 1 1 0 00-1-1M12 8a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4z"></path>
                                    </svg>
                                    <button type="button" id="placeFreshOrder" data-toggle="button" aria-pressed="true" autocomplete="off" class="btn btn-primary" onclick="FreshOrder();" style="padding: 4px; min-width: 40px; background: white; border: 1px solid #0d5881; color: #0d5881;">
                                        Place Order <i style="font-size: 28px; color: #0d5881;" class="fas fa-shopping-cart"></i>
                                    </button>
                                    <button type="button" id="showPDF" data-toggle="button" aria-pressed="true" autocomplete="off" class="btn btn-primary" onclick="FreshPDF();" style="padding: 4px; min-width: 40px; background: white; border: 1px solid #0d5881; color: #0d5881;">
                                        Generate Order <i style="color: red; font-size: 28px;" class="fas fa-file-pdf"></i>
                                    </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="loadingIconUpcoming" style="display:none">
                    <span style="margin:0 auto"><i style="font-size:40px" class="fas fa-solid fa-spinner fa-spin fa-5x"></i></span>
                </div>
                <div id="dataOrbitoUpcoming">
                </div>
            </div>

            <div id="dataOnDemand" style="display:none">
                <table class="table table-striped table-bordered tablesorter" style="margin-top: 7%;">
                    <tbody>
                        <tr>
                            <td>
                                <label class="freshLabels">Product</label>
                            </td>
                            <td class="freshCntrls">
                                <select class="freshSelect" id="onDemandSelect">
                                    <option value='FlyThrough'>Fly Through</option>
                                    <option value='DEM'>DEM</option>
                                    <option value='Mosaic'>Mosaic</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="freshLabels">Details</label>
                            </td>
                            <td class="freshCntrls">
                                <textarea rows="10" cols="80" id="onDemandComments"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div style="margin-left: 38%; width:24%;">
                                    <button type="button" id="placeOnDemandOrder" data-toggle="button" aria-pressed="true" autocomplete="off" class="btn btn-primary" onclick="onDemandOrder();" style="padding: 4px; min-width: 40px; background: white; border: 1px solid #0d5881;">
                                        <i style="font-size: 28px; color: #0d5881;" class="fas fa-shopping-cart"></i>
                                    </button>
                                    <button type="button" id="showOnDemandPDF" data-toggle="button" aria-pressed="true" autocomplete="off" class="btn btn-primary" onclick="onDemandPDF();" style="padding: 4px; min-width: 40px; background: white; border: 1px solid #0d5881;">
                                        <i style="color: red; font-size: 28px;" class="fas fa-file-pdf"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div id="informationTable"></div>
    <!-- Modal -->
    <div id="coordsModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="productModalLabel">
        <div class="modal-dialog" style=" max-width:70%;!Important; font-size:15px;">
            <div class="modal-content">
                <div class="modal-header" style="background: #0d5881; color: white; font-weight: bold;">
                    <h4 class="modal-title">Enter Latitude/Longitude</h4>
                    <button type="button" class="close" data-dismiss="modal" style="color: white;">&times;</button>
                </div>
                <div class="modal-body text-center">
                    <div class="row-fluid" id="modal-header-title">
                    </div>
                    <div class="table-responsive">
                        <h2>Decimal Degrees</h2>
                        <div class="input-box narrow">
                            Latitude:
                            <input type="number" id="decimalLatitude" placeholder="33.6844" value="33.6844" />&nbsp; Longitude:
                            <input type="number" id="decimalLongitude" placeholder="73.0479" value="73.0479" />
                        </div>
                        <h2>Degrees, Minutes, Seconds</h2>
                        <div class="input-box narrow">
                            Latitude:
                            <div style="margin-bottom: 5px;">
                                Degrees:
                                <input type="text" id="latDegrees" maxlength="3" style="width: 4em;" />&nbsp; Minutes:
                                <input type="text" id="latMinutes" maxlength="7" style="width: 4em;" />&nbsp; Seconds:
                                <input type="text" id="latSeconds" maxlength="7" style="width: 4em;" />&nbsp;
                            </div>
                            Longitude:
                            <div>
                                Degrees:
                                <input type="text" id="lonDegrees" style="width: 4em;" />&nbsp; Minutes:
                                <input type="text" id="lonMinutes" style="width: 4em;" />&nbsp; Seconds:
                                <input type="text" id="lonSeconds" style="width: 4em;" />&nbsp;
                            </div>
                        </div>
                        <h2>Standard UTM</h2>
                        <div class="input-box">
                            Zone:
                            <input type="text" id="utmZone" style="width: 4em;" />&nbsp; Easting:
                            <input type="text" id="utmEasting" />&nbsp; Northing:
                            <input type="text" id="utmNorthing" />&nbsp;
                        </div>
                        <h2>NATO UTM</h2>
                        <div class="input-box">
                            Long. Zone:
                            <input type="text" id="natoLonZone" style="width: 4em;" />&nbsp; Lat. Zone:
                            <input type="text" id="natoLatZone" style="width: 4em;" />&nbsp; Digraph:
                            <input type="text" id="natoDigraph" style="width: 4em;" />&nbsp; Easting:
                            <input type="text" id="natoEasting" />&nbsp; Northing:
                            <input type="text" id="natoNorthing" />&nbsp;
                        </div>
                        <h2>Buffer</h2>
                        <div class="input-box">
                            Buffer Size (km<sup>2</sup>):
                            <input type="number" min="15" step="1" value="5" id="coordBuffer" style="width: 4em;" />&nbsp;
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn" style="font-size:18px;" data-dismiss="modal" id="drawCoord" aria-hidden="true">Draw</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Polygon Coordinates Modal -->
    <div id="polycoordsModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="productModalLabel">
        <div class="modal-dialog" style=" max-width: 40%;!Important">
            <div class="modal-content">
                <div class="modal-header" style="background: #0d5881; color: white; font-weight: bold;">
                    <h4 class="modal-title">Polygon Coordinates</h4>
                    <button type="button" class="close" data-dismiss="modal" style="color: white; font-size: 30px;">&times;</button>
                </div>
                <div class="modal-body text-center">
                    <div style="margin-bottom: 11px;">
                        <label class="lblpolyCoord">Projection:</label>
                        <select id="selProjectionCoord">
                            <option value="4326" selected>Degree</option>
                            <option value="3857">Meteric</option>
                        </select>
                    </div>
                    <div id="divPolyCoords">
                        <div>
                            <label class="lblpolyCoord">Longitude: </label> <input type="text" placeholder="72.42" class="txtpolyCoord" name="polyLon" onkeypress="return isNumberKey(event)" />
                            <label class="lblpolyCoord">Latitude: </label> <input type="text" placeholder="32.98" class="txtpolyCoord" name="polyLat" onkeypress="return isNumberKey(event)" />
                        </div>
                        <div>
                            <label class="lblpolyCoord">Longitude: </label> <input type="text" placeholder="72.54" class="txtpolyCoord" name="polyLon" onkeypress="return isNumberKey(event)" />
                            <label class="lblpolyCoord">Latitude: </label> <input type="text" placeholder="32.37" class="txtpolyCoord" name="polyLat" onkeypress="return isNumberKey(event)" />
                        </div>
                        <div>
                            <label class="lblpolyCoord">Longitude: </label> <input type="text" placeholder="71.65" class="txtpolyCoord" name="polyLon" onkeypress="return isNumberKey(event)" />
                            <label class="lblpolyCoord">Latitude: </label> <input type="text" placeholder="31.55" class="txtpolyCoord" name="polyLat" onkeypress="return isNumberKey(event)" />
                        </div>
                    </div>
                    <div>
                        <button type="button" id="btnAddCoord" class="btn btn-primary" style="font-size: 1.2em; background: white; color: #0d5881; border:1px solid #0d5881"><i class="fas fa-plus"></i> </button>
                    </div>
                </div>
                <div class="modal-footer" style="justify-content: center;">
                    <button class="btn" id="drawPolyCoord" onclick="makePolygonfromCoords()">Draw</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="background: #0d5881; color: white; font-weight: bold;">
                    <h4 class="modal-title">Enhanced Quicklook</h4>
                    <button type="button" class="close" data-dismiss="modal" style="color: white; font-size: 2.5rem;">X</button>
                </div>
                <div class="modal-body text-center">
                    <img class="enhanced_quicklook" src="#" />
                </div>
                <div class="modal-footer">
                    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Results Modal -->
    <div id="resModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="top: 25%;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" style="background: #0d5881; color: white; font-weight: normal;">
                    <h4 class="modal-title" style=" font-weight: normal;">Search Selection</h4>
                </div>
                <div class="modal-body text-center">
                    <div id="divOptions" style="margin-left: 15%;">
                        <button type="button" class="btn" style="float: left;" id="showArchived">Show Archived Results</button>
                        <button type="button" class="btn" style="float: left;" id="freshAcquisition">Request Fresh Acquisition</button>
                    </div>
                </div>
                <div class="modal-footer" id="optionsFooter" style="display:none;">
                    <button class="btn" data-dismiss="modal" aria-hidden="true">OK</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Products Modal -->
    <div id="productModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="productModalLabel">
        <div class="modal-dialog" style=" max-width: 55%;!Important">
            <div class="modal-content">
                <div class="modal-header" style="background: #0d5881; color: white; font-weight: bold;">
                    <h4 class="modal-title">Satellites</h4>
                    <button type="button" class="close" data-dismiss="modal" style="color: white; font-size: 28px;">X</button>
                </div>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4 divProd">
                                <div class="row-fluid">
                                    <input type="checkbox" value="SPOT" id='cbSPOTMain' class="chkProdMain" checked>
                                    <span class="labelProd"> SPOT 6/7 </span>
                                </div>
                            </div>
                            <div class="col-sm-4 divProd">
                                <div class="row-fluid">
                                    <input type="checkbox" value="PRSS" id='cbPRSSMain' class="chkProdMain" checked>
                                    <span class="labelProd"> PRSS </span>
                                </div>
                            </div>
                            <div class="col-sm-4 divProd">
                                <div class="row-fluid">
                                    <input type="checkbox" value="Pleiades" id='cbPleiadesMain' class="chkProdMain" checked>
                                    <span class="labelProd"> Pleiades </span>
                                </div>
                            </div>
                            <div class="col-sm-4 divProd">
                                <div class="row-fluid">
                                    <input type="checkbox" value="PleiadesNeo" id='cbPleiadesNeoMain' class="chkProdMain" checked>
                                    <span class="labelProd"> Pleiades Neo </span>
                                </div>
                            </div>
                            <div class="col-sm-4 divProd">
                                <div class="row-fluid">
                                    <input type="checkbox" value="SV" id='cbSVMain' class="chkProdMain" checked>
                                    <span class="labelProd"> Super View </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <!-- <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button> -->
                    <button class="btn" data-dismiss="modal" aria-hidden="true" onclick="closeProductModal();"> Apply </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Criteria Modal -->
    <div id="criteriaModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="productModalLabel">
        <div class="modal-dialog" style=" max-width: 45%;!Important">
            <div class="modal-content">
                <div class="modal-header" style="background: #0d5881; color: white; font-weight: bold;">
                    <h4 class="modal-title">Criteria</h4>
                    <button type="button" class="close" data-dismiss="modal" style="color: white; font-size: 28px;">X</button>
                </div>
                <div class="modal-body text-center">
                    <div class="row-fluid criteria-Title">
                        <div class="col-md-2"> <span class="text-left ng-binding" style="margin-left: -40px;">Search Criteria</span>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <label style="float: left;font-size: 18px;">Acquisition range</label>
                                    </td>
                                    <td>
                                        <label class="lblDate">Begin</label>
                                        <span style="float: left;">
                                            <div id="datepicker3" class="input-group date" data-date-format="mm-dd-yyyy">
                                                <input id="startdate" class="form-control" type="text" style="height: 46px; font-size: 15px;" readonly />
                                                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                            </div>
                                        </span>
                                        <label class="lblDate">End</label>
                                        <span style="float: left;">
                                            <div id="datepicker2" class="input-group date" data-date-format="dd-mm-yyyy">
                                                <input id="enddate" class="form-control" type="text" style="height: 46px; font-size: 15px;" readonly />
                                                <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                            </div>
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: 18px;">
                                        <label style="float: left;font-size: 18px;">Resolution (m)</label>
                                    </td>
                                    <!-- <td>
                        </td> -->
                                    <td>
                                        <input type="number" step="0.1" min="0" max="20" id="resLower" name="points" class="form-control input-sm input-slider input-slider-left ng-pristine ng-valid ng-valid-min ng-valid-max ng-touched step" value="0.1">
                                        <span>-</span>
                                        <input type="number" step="0.1" min="0" max="20" id="resUpper" name="points" class="form-control input-sm input-slider input-slider-left ng-pristine ng-valid ng-valid-min ng-valid-max ng-touched step" value="30">
                                        <div class="price-slider" id="resolution-slider">
                                            <input value="0" min="0" max="30" step="0.1" type="range" oninput="updatePriceLabels('resolution')">
                                            <input value="30" min="0" max="30" step="0.1" type="range" oninput="updatePriceLabels('resolution')">
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="row  criteria-Title" style="margin-right: 0px;">
                            <div class="col-sm-10"><span class="text-left" style="float:left;">Optical Criteria</span></div>
                            <!-- <div class="col-sm-8"></div> -->
                            <div class="col-sm-2"><a data-toggle="collapse" href="#collapse56"><i class="fas fa-chevron-down chev-prod" style="color:white"></i></a></div>
                        </div>
                        <div class="collapse show" style="margin-top: 31px;" id="collapse56">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td style="width: 20%;font-size: 18px;">
                                            <label style="float: left;font-size: 18px;">Cloud Cover (%)</label>
                                        </td>
                                        <!-- <td style="width: 22%;">
                                    </td> -->
                                        <td colspan="2">
                                            <input type="number" step="5" min="0" max="100" name="points" id="cloudLower" class="form-control input-sm input-slider input-slider-left ng-pristine ng-valid ng-valid-min ng-valid-max ng-touched step" value="0">
                                            <span>-</span>
                                            <input type="number" step="5" min="0" max="100" name="points" id="cloudUpper" class="form-control input-sm input-slider input-slider-left ng-pristine ng-valid ng-valid-min ng-valid-max ng-touched step" value="30">
                                            <div class="price-slider" id="criteria-cloud-slider">
                                                <input value="0" min="0" max="100" step="5" type="range" oninput="updatePriceLabels('cloud')">
                                                <input value="30" min="0" max="100" step="5" type="range" oninput="updatePriceLabels('cloud')">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="width: 20%;font-size: 18px;">
                                            <label style="float: left;font-size: 18px;">Snow accepted</label>
                                        </td>
                                        <td style="width: 22%;">
                                            <!-- <label style="float: left;font-size: 14px;">NO</label> -->
                                            <div class="container">
                                                <label class="switch" for="chkSnowCriteria" style=" float: left; margin-left: 8%;">
                                                    <input type="checkbox" id="chkSnowCriteria" checked />
                                                    <div class="sliderchk round"></div>
                                                </label>
                                            </div>
                                            <!-- <label style="float: left;font-size: 14px;">YES</label> -->
                                        </td>
                                        <td class="slidecontainer" colspan="2"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn" aria-hidden="true" id="applyCriteria" onclick="closeCriteriaModal();">Apply</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Pricing Modal -->
    <div id="pricingModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="productModalLabel">
        <div class="modal-dialog" style=" max-width: 90%;!Important; margin-top: 10%;">
            <div class="modal-content" style="border-radius: 9px;">
                <div class="modal-header" style="background: #0d5881; color: white; font-weight: bold;">
                    <h4 class="modal-title">Select Product Details</h4>
                    <button type="button" class="close" data-dismiss="modal" style="color: white; font-size: 28px;">X</button>
                </div>
                <div class="modal-body text-center">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>
                                    <div class="row-fluid pricing-Title pricing-PRSS">
                                        PRSS
                                    </div>
                                    <table class="table" style="table-layout: fixed;">
                                        <tbody>
                                            <tr>
                                                <td><input type="radio" value="PRSS_Bundle(Multispectral+Panchromatic)" id='Bundle' name="chkPricingGroupPRSS" class="chkPRSS chkPricing">
                                                    <span class="labelPricing lblPricingPRSS"> Bundle(MSS + Pan)</span>
                                                </td>
                                                <td style="width: 50%;">
                                                    <input type="radio" value="PRSS_0.98m Pansharpened" id='098PanS' name="chkPricingGroupPRSS" class="chkPRSS chkPricing">
                                                    <span class="labelPricing lblPricingPRSS"> 0.98m Pansharpened </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="radio" value="PRSS_0.98 Panchromatic" id='098PanC' name="chkPricingGroupPRSS" class="chkPRSS chkPricing">
                                                    <span class="labelPricing lblPricingPRSS"> 0.98 Panchromatic</span>
                                                </td>
                                                <td>
                                                    <input type="radio" value="PRSS_2.89m Multispectral" id='289MultiS' name="chkPricingGroupPRSS" class="chkPRSS chkPricing">
                                                    <span class="labelPricing lblPricingPRSS"> 2.89m Multispectral</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>** All PRSS-I products are provided in Standard 2A format.</h5>
                                                </td>
                                                <td>
                                                    <h5>** Level 3/Ortho products are generated on explicit requirement specifications. </h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td>
                                    <div class="row-fluid pricing-Title pricing-SPOT">
                                        SPOT 6 and SPOT 7
                                    </div>
                                    <table class="table" style="table-layout: fixed;">
                                        <tbody>
                                            <tr>
                                                <td style="width: 50%;">
                                                    <input type="radio" value="SPOT_1.5mP+XS" id='15mPXS' name="chkPricingGroupSPOT" class="chkSPOT chkPricing">
                                                    <span class="labelPricing lblPricingSPOT"> Bundle(MSS + Pan)</span>
                                                </td>
                                                <td>
                                                    <input type="radio" value="SPOT_1.5mP" id='15mP' name="chkPricingGroupSPOT" class="chkSPOT chkPricing">
                                                    <span class="labelPricing lblPricingSPOT"> 1.5m Panchromatic</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="radio" value="SPOT_6mXS" id='6mXS' name="chkPricingGroupSPOT" class="chkSPOT chkPricing">
                                                    <span class="labelPricing lblPricingSPOT"> 6m Multispectral</span>
                                                </td>
                                                <td>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td>
                                    <div class="row-fluid pricing-Title pricing-PleiadesNeo">
                                        Pléiades Neo
                                    </div>
                                    <table class="table" style="table-layout: fixed;">
                                        <tbody>
                                            <tr>
                                                <td style="width: 50%;">
                                                    <input type="radio" value="PleiadesNeo_Bundle Neo" id='BundleNeo' name="chkPricingGroupPleiadesNeo" class="chkPleiadesNeo chkPricing">
                                                    <span class="labelPricing lblPricingPleiadesNeo"> Bundle(0.3m Pan + 1.2m MS)</span>
                                                </td>
                                                <!--<td>
                                                        <input type="radio" value="PleiadesNeo_0.3m Pan" id='03P' name="chkPricingGroupPleiadesNeo" class="chkPleiadesNeo chkPricing">
                                                        <span class="labelPricing lblPricingPleiadesNeo"> 0.3m Pan</span>
                                                    </td>-->
                                            </tr>
                                            <!--<tr>
                                                <td>
                                                    <input type="radio" value="PleiadesNeo_1.2m MS" id='1.2MS' name="chkPricingGroupPleiadesNeo" class="chkPleiadesNeo chkPricing">
                                                    <span class="labelPricing lblPricingPleiadesNeo"> 1.2m MS</span>
                                                </td>
                                                </tr>-->
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="row-fluid pricing-Title pricing-Pleiades">
                                        Pleiades
                                    </div>
                                    <table class="table" style="table-layout: fixed;">
                                        <tbody>
                                            <tr>
                                                <td style="width: 50%;">
                                                    <input type="radio" value="Pleiades_Bundle" id='05PMS' name="chkPricingGroupPleiades" class="chkPleiades chkPricing">
                                                    <span class="labelPricing lblPricingPleiades"> Bundle(0.5m Pan + 2m MS)</span>
                                                </td>
                                                <td>
                                                    <input type="radio" value="Pleiades_0.5m Pan" id='05P' name="chkPricingGroupPleiades" class="chkPleiades chkPricing">
                                                    <span class="labelPricing lblPricingPleiades"> 0.5m Pan</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="radio" value="Pleiades_2m MS" id='2MS' name="chkPricingGroupPleiades" class="chkPleiades chkPricing">
                                                    <span class="labelPricing lblPricingPleiades"> 2m MS</span>
                                                </td>
                                            </tr>
                                            <!-- <tr>
                                                    <td>
                                                        <input type="checkbox" value="Pleiades_0.5m Tri-stereo" id='chkPricing' name="chkPricingGroup" class="chkPleiades chkPricing">
                                                        <span class="labelPricing lblPricingPleiades"> 0.5 m Tri-Stereo</span>
                                                    </td>
                                                    <td></td>
                                                </tr> -->
                                        </tbody>
                                    </table>
                                </td>

                                <td>
                                    <div class="row-fluid pricing-Title pricing-SV">
                                        Super View
                                    </div>
                                    <table class="table" style="table-layout: fixed;">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="radio" value="SV_BundleSV(Multispectral+Panchromatic)" id='2Bundle' name="chkPricingGroupSV" class="chkSV chkPricing">
                                                    <span class="labelPricing lblPricingSV"> Bundle(MSS + Pan)</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td>
                                    <div class="row-fluid pricing-Title pricing-SAR">
                                        Super View
                                    </div>
                                    <table class="table" style="table-layout: fixed;">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type="radio" value="SV_BundleSV(Multispectral+Panchromatic)" id='2Bundle' name="chkPricingGroupSV" class="chkSV chkPricing">
                                                    <span class="labelPricing lblPricingSV"> Bundle(MSS + Pan)</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <!--<td>
                                        <div class="row-fluid pricing-Title pricing-SPOT542">
                                            SPOT 5, SPOT 4 & SPOT 2
                                        </div>
                                        <table class="table" style="table-layout: fixed;">
                                            <tbody>
                                                <tr>
                                                    <td style="width: 50%;">
                                                        <input type="checkbox" value="SPOT542_2.5m P+XS" id='25mPXS' name="chkPricingGroup" class="chkSPOT542 chkPricing">
                                                        <span class="labelPricing lblPricingSPOT542"> 2.5m Pansharpened + Multispectral </span>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" value="SPOT542_2.5m P" id='25mP' name="chkPricingGroup" class="chkSPOT542 chkPricing">
                                                        <span class="labelPricing lblPricingSPOT542"> 2.5m Panchromatic</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" value="SPOT542_5m P+XS" id='5mPXS' name="chkPricingGroup" class="chkSPOT542 chkPricing">
                                                        <span class="labelPricing lblPricingSPOT542"> 5m Pansharpened + Multispectral</span>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" value="SPOT542_5m P" id='5mP' name="chkPricingGroup" class="chkSPOT542 chkPricing">
                                                        <span class="labelPricing lblPricingSPOT542"> 5m Panchromatic</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" value="SPOT542_10m XS" id='10mXS' name="chkPricingGroup" class="chkSPOT542 chkPricing">
                                                        <span class="labelPricing lblPricingSPOT542"> 10m Multispectral</span>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" value="SPOT542_10m P+XS" id='10mPXS' name="chkPricingGroup" class="chkSPOT542 chkPricing">
                                                        <span class="labelPricing lblPricingSPOT542"> 10m Pansharpened + Multispectral</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" value="SPOT542_10m Pan" id='10mPan' name="chkPricingGroup" class="chkSPOT542 chkPricing">
                                                        <span class="labelPricing lblPricingSPOT542"> 10m Panchromatic</span>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" value="SPOT542_20m XS" id='20mXS' name="chkPricingGroup" class="chkSPOT542 chkPricing">
                                                        <span class="labelPricing lblPricingSPOT542"> 20m Multispectral</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" value="SPOT542_5m XS" id='5mXS' name="chkPricingGroup" class="chkSPOT542 chkPricing">
                                                        <span class="labelPricing lblPricingSPOT542"> 5m Multispectral</span>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>
                                        <div class="row-fluid pricing-Title">
                                            DEM
                                        </div>
                                        <table class="table" style="table-layout: fixed;">
                                            <tbody>
                                                <tr>
                                                    <td style="width: 50%;">
                                                        <input type="checkbox" value="DEM_0.98m Pansharpened" id='chkPricing' name="chkPricingGroup" class="chkDEM chkPricing">
                                                        <span class="labelPricing"> 0.98m Pansharpened </span>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" value="DEM_0.98 Panchromatic" id='chkPricing' name="chkPricingGroup" class="chkDEM chkPricing">
                                                        <span class="labelPricing"> 0.98 Panchromatic</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" value="DEM_2.89m Multispectral" id='chkPricing' name="chkPricingGroup" class="chkDEM chkPricing">
                                                        <span class="labelPricing"> 2.89m Multispectral</span>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>-->
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button class="btn" aria-hidden="true" id="proceedOrder"></button>
                </div>
            </div>
        </div>
    </div>
    <div class="cd-cart-container empty">
        <a href="#0" class="cd-cart-trigger">
            Cart
            <ul class="count">
                <!-- cart items count -->
                <li>0</li>
                <li>0</li>
            </ul>
            <!-- .count -->
        </a>
        <div class="cd-cart">
            <div class="wrapper">
                <header>
                    <h2 style="margin-left: 44%;">Cart</h2>
                    </br>
                    <h2 style=" float: left;">Items</h2>
                    <h2 style="float: right;margin-left: 44%;">
                        Unit Price <br />
                        <p style="font-size: 11px;text-align: center;">(Per km<sup>2</sup>)</p>
                    </h2>
                    <span class="undo">Item removed. <a href="#0">Undo</a></span>
                </header>
                <div class="body" style="margin-top: 11%;">
                    <ul id='prdouctsList'>
                    </ul>
                </div>
                <footer>
                    <a href="javascript:setPreferences('Generate');" class="checkout btn"><em>Generate Order</em></a>
                    <a href="javascript:setPreferences('Place');" class="checkout btn"><em>Place Order</em></a>
                </footer>
            </div>
        </div>
        <!-- .cd-cart -->
    </div>
    <!-- cd-cart-container -->
    <div class="print-wrap page1">
        <label style="display:none;" id="userid"><?php echo $_SESSION['UserID_OMS']; ?></label>
        <table class="blueTable" id="page1Archive">
            <tbody>
                <tr>
                    <td colspan="4">Satellite Image Product Form</td>
                </tr>
                <tr>
                    <td><b>Order Date</b></td>
                    <td>
                        <div id="orderdate"></div>
                    </td>
                    <td>
                        <b>Order Time</b>
                    </td>
                    <td>
                        <div id='ordertime'></div>
                    </td>
                </tr>
                <tr>
                    <td><b>Order ID</b></td>
                    <td>
                        <div id="orderid">105278</div>
                    </td>
                    <td><b>User</b></td>
                    <td>
                        <div id="username">
                            <?php echo $_SESSION['Username_OMS']; ?>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><b>PRSS Products</b></td>
                    <td colspan="3">
                        <div id="prss_products">SUPARCO</div>
                    </td>
                    <!-- <td><b>Address</b></td>
                        <td>
                            <div id="address">Satellite Ground Station</div>
                        </td> -->
                </tr>
                <tr>
                    <td><b>SPOT Products</b></td>
                    <td colspan="3">
                        <div id="spot_products"></div>
                    </td>
                    <!-- <td><b>Product</b></td>
                        <td>
                            <div id="products"></div>
                        </td> -->
                </tr>
                <tr>
                    <td><b>Pleidas Products</b></td>
                    <td colspan="3">
                        <div id="pleiades_products">SUPARCO</div>
                    </td>
                    <!-- <td><b>Address</b></td>
                        <td>
                            <div id="address">Satellite Ground Station</div>
                        </td> -->
                </tr>
                <!--<tr>
                        <td><b>Pleidas Neo Products</b></td>
                        <td colspan="3">
                            <div id="pleiadesneo_products">SUPARCO</div>
                        </td>
                    </tr>
                    <tr>
                        <td><b>SuperView Products</b></td>
                        <td colspan="3">
                            <div id="sv_products">SUPARCO</div>
                        </td>
                    </tr>
                    <tr>
                        <td><b>SAR Products</b></td>
                        <td colspan="3">
                            <div id="sar_products">SUPARCO</div>
                        </td>
                    </tr>-->
                <tr>
                    <td><b>Spot Images Area</b></td>
                    <td>
                        <div id="spotarea"></div>
                    </td>
                    <td><b>Spot Images Cost</b></td>
                    <td>
                        <div id="spotamount"></div>
                    </td>
                </tr>
                <tr>
                    <td><b>PRSS Images Area</b></td>
                    <td>
                        <div id="prssarea"></div>
                    </td>
                    <td><b>PRSS Images Cost</b></td>
                    <td>
                        <div id="prssamount"></div>
                    </td>
                </tr>
                <tr>
                    <td><b>Pleiades Images Area</b></td>
                    <td>
                        <div id="pleiadesarea"></div>
                    </td>
                    <td><b>Pleiades Images Cost</b></td>
                    <td>
                        <div id="pleiadesamount"></div>
                    </td>
                </tr>
                <tr>
                    <td><b>SuperView Images Area</b></td>
                    <td>
                        <div id="svarea"></div>
                    </td>
                    <td><b>SuperView Images Cost</b></td>
                    <td>
                        <div id="svamount"></div>
                    </td>
                </tr>
                <tr>
                    <td><b>Pleiades Neo Images Area</b></td>
                    <td>
                        <div id="pleiadesneoarea"></div>
                    </td>
                    <td><b>Pleiades Neo Images Cost</b></td>
                    <td>
                        <div id="pleiadesneoamount"></div>
                    </td>
                </tr>
                <tr>
                    <td>Note:</td>
                    <td colspan="3">Computer Generated Document does not require signatures</td>
                </tr>
            </tbody>
        </table>
        <table class="blueTable" id="page1Fresh" style="display:none;">
            <tbody>
                <tr>
                    <td colspan="4">Satellite Image Product Form</td>
                </tr>
                <tr>
                    <td><b>Order Date</b></td>
                    <td>
                        <div id="freshorderdate"></div>
                    </td>
                    <td><b>Order Time</b></td>
                    <td>
                        <div id='freshordertime'></div>
                    </td>
                </tr>
                <tr>
                    <td><b>Order ID</b></td>
                    <td>
                        <div id="freshorderid">105278</div>
                    </td>
                    <td><b>User</b></td>
                    <td>
                        <div id="freshusername">
                            <?php echo $_SESSION['Username_OMS']; ?>
                        </div>
                    </td>
                </tr>
                <tr></tr>
                <tr>
                    <td><b>Area</b></td>
                    <td>
                        <div id="aoiarea"></div>
                    </td>
                    <td><b>Price</b></td>
                    <td>
                        <div id="freshprice"></div>
                    </td>
                </tr>
                <tr class="rowSAR" style="display:none">
                    <td><b>Antenna Pointing</b></td>
                    <td>
                        <div id="antennaPointing">Default</div>
                    </td>
                    <td><b>Acquisition Pass</b></td>
                    <td>
                        <div id="acqPass">Default</div>
                    </td>
                </tr>
                <tr class="rowSAR" style="display:none">
                    <td><b>Product Levels</b></td>
                    <td colspan="3">
                        <div id="prodLevels">Level 2 - Ground Range Detected</div>
                    </td>
                    <!-- <td><b>Acquisition Pass</b></td>
                        <td>
                            <div id="acqPass"></div>
                        </td> -->
                </tr>
                <tr>
                    <td colspan="4">Fresh Acquisition Request
                    <td>
                </tr>
                <tr class="pdf_row_sat" style="display:none">
                    <td style="width: 15%;"><b>Satellite</b></td>
                    <td style="width: 35%;">
                        <div id="sensor"></div>
                    </td>
                    <td style="width: 15%;"><b>Product</b></td>
                    <td style="width: 35%;">
                        <div id="freshProduct"></div>
                    </td>
                </tr>
                <tr class="pdf_row_priority">
                    <td style="width: 15%;"><b>Acquisition Mode</b></td>
                    <td style="width: 35%;">
                        <div id="pdf_acqMode">Mono</div>
                    </td>
                    <td style="width: 15%;"><b>Order Priority</b></td>
                    <td style="width: 35%;">
                        <div id="pdf_OrderPriority">Standard</div>
                    </td>
                </tr>
                <tr>
                    <td><b>Start Date</b></td>
                    <td>
                        <div id="formStartDate"></div>
                    </td>
                    <td><b>End Date</b></td>
                    <td>
                        <div id="formEndDate"></div>
                    </td>
                </tr>
                <tr>
                    <td><b>Max incidence angle (°)</b></td>
                    <td>
                        <div id="formAngle"></div>
                    </td>
                    <td><b>Max cloud cover (%)</b></td>
                    <td>
                        <div id="formCloud"></div>
                    </td>
                </tr>
                <tr>
                    <td><b>Frequency of Acquisitions</b></td>
                    <td colspan="3">
                        <div id="formComments"></div>
                    </td>
                </tr>
                <tr>
                    <td>Note:</td>
                    <td colspan="3">Computer Generated Document does not require signatures</td>
                </tr>
            </tbody>
        </table>
        <!-- <table class="blueTable" id="page1OnDemand" style="display:none;">
                <tbody>
                    <tr>
                        <td colspan="4">Satellite Image Product Form</td>
                    </tr>
                    <tr>
                        <td><b>Order Date</b></td>
                        <td>
                            <div id="demandorderdate"></div>
                        </td>
                        <td><b>Order Time</b></td>
                        <td>
                            <div id='demandordertime'></div>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Order ID</b></td>
                        <td>
                            <div id="demandorderid">105278</div>
                        </td>
                        <td><b>User</b></td>
                        <td>
                            <div id="demandusername">
                                <?php echo $_SESSION['Username_OMS']; ?>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Organization</b></td>
                        <td>
                            <div id="demandorganization">SUPARCO</div>
                        </td>
                        <td><b>Address</b></td>
                        <td>
                            <div id="demandaddress">Satellite Ground Station</div>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Email</b></td>
                        <td>
                        </td>
                        <div id="demandemail">
                            <?php echo $_SESSION['Email_OMS']; ?>
                        </div>
                        <td><b>Contact</b></td>
                        <td>
                            <div id="demandcontact">051-9075255</div>
                        </td>
                    </tr>
                    <tr>
                        <td><b>AOI Area</b></td>
                        <td colspan="3">
                            <div id="aoiarea"></div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">On Demand Acquisition Data
                            <td>
                    </tr>
                    <tr>
                        <td style="width: 15%;"><b>Product</b></td>
                        <td  colspan="3" style="width: 35%;">
                            <div id="demandProduct"></div>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Description</b></td>
                        <td colspan="3">
                            <div id="formDetails"></div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4" style='text-align: center;'>
                            <h3>For Office Use Only</h3>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Signature of DG (SPARC)</b></td>
                        <td colspan="3">____________________________________</td>
                    </tr>
                </tbody>
            </table> -->
    </div>
    <div class="print-wrap page2" id='pageTwo'></div>
    <div class="quotaFloatDiv">
        <?php
        if ($_SESSION['UserID_OMS'] == '26' or $_SESSION['UserID_OMS'] == '27' or $_SESSION['UserID_OMS'] == '25' or $_SESSION['UserID_OMS'] == '22' or $_SESSION['UserID_OMS'] == '16' or $_SESSION['UserID_OMS'] == '23' or $_SESSION['UserID_OMS'] == '18') {
            echo '<div class="quotaDiv"><h3>Balance Quota</h3></div>';
            //   echo '<div class="quotaDiv"><p>PLeiades Neo Quota Remaining: <span id="neo_quotaValue"> ' . $neo_quota . ' </span> </p></div>';
            // if($sv_quota != 0){
            // echo '<p>SuperView (0.5m): <span id="sv_quotaValue"> ' . number_format($sv_quota) . ' </span> km<sup>2</sup></p>';
            if ($sv_quota <= 0)
                echo '<p>SuperView (0.5m): <span id="sv_quotaValue" style="color:#ffc107; border-bottom:3px solid #dc3545; font-weight: bold;"> ' . number_format($sv_quota, 2) . ' km</span><sup style="color:#ffc107; font-weight: bold;">2</sup></p>';
            else
                echo '<p>SuperView (0.5m): <span id="sv_quotaValue"> ' . number_format($sv_quota, 2) . ' </span> km<sup>2</sup></p>';
            if ($neo_quota <= 0)
                echo '<p>Pléiades Neo (0.3m): <span id="neo_quotaValue" style="color:#ffc107; border-bottom:3px solid #dc3545; font-weight: bold;"> ' . number_format($neo_quota, 2) . ' km</span><sup style="color:#ffc107; font-weight: bold;">2</sup></p>';
            else
                echo '<p>Pléiades Neo (0.3m): <span id="neo_quotaValue"> ' . number_format($neo_quota, 2) . ' </span> km<sup>2</sup></p>';
        }
        ?>
    </div>
    <div style="position: absolute; left: -1000px;">
        <table id="freshTable">
            <tbody>
                <tr>
                    <td style="width: 15%;"><b>Satellite</b></td>
                    <td style="width: 35%;">
                        <div id="sensor"></div>
                    </td>
                    <td style="width: 15%;"><b>Product</b></td>
                    <td style="width: 35%;">
                        <div id="freshProduct"></div>
                    </td>
                </tr>
                <tr>
                    <td><b>Start Date</b></td>
                    <td>
                        <div id="formStartDate"></div>
                    </td>
                    <td><b>End Date</b></td>
                    <td>
                        <div id="formEndDate"></div>
                    </td>
                </tr>
                <tr>
                    <td><b>Max incidence angle (°)</b></td>
                    <td>
                        <div id="formAngle"></div>
                    </td>
                    <td><b>Max cloud cover (%)</b></td>
                    <td>
                        <div id="formCloud"></div>
                    </td>
                </tr>

                <tr>
                    <td><b>Comments</b></td>
                    <td colspan="3">
                        <div id="formComments"></div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table id="tblPolyCoords">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Longitude</th>
                    <th>Latitude</th>
                </tr>
            </thead>
            <tbody id="tbodyPolyCoords"></tbody>
        </table>
        <table id="PleiadesTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Pleiades Images</th>
                </tr>
            </thead>
            <tbody id="ulpleiadesscenes"></tbody>
        </table>
        <div id="pleiadesscenesCount" style="display:none;"></div>
        <table id="PleiadesNeoTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Pleiades Neo Images</th>
                </tr>
            </thead>
            <tbody id="ulpleiadesneoscenes"></tbody>
        </table>
        <div id="pleiadesneoscenesCount" style="display:none;"></div>
        <table id="SVTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>SuperView Images</th>
                </tr>
            </thead>
            <tbody id="ulsvscenes"></tbody>
        </table>
        <div id="svscenesCount" style="display:none;"></div>
        <table id="PRSSTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>PRSS Images</th>
                </tr>
            </thead>
            <tbody id="ulprssscenes"></tbody>
        </table>
        <div id="prssscenesCount" style="display:none;"></div>
        <table id="SPOTTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>SPOT Images</th>
                </tr>
            </thead>
            <tbody id="ulspotscenes"></tbody>
        </table>
        <div id="spotscenesCount" style="display:none;"></div>
        <div style="font-size: 20px; margin-left: 32%;">
            <b id="grandTotal"></b>
        </div>
    </div>
    <script type="text/javascript" src="js/custom/notifications.js"></script>
    <?php
    // echo $sv_quota;
    if ($_SESSION['UserID_OMS'] == '26' or $_SESSION['UserID_OMS'] == '27' or $_SESSION['UserID_OMS'] == '25' or $_SESSION['UserID_OMS'] == '22' or $_SESSION['UserID_OMS'] == '16' or $_SESSION['UserID_OMS'] == '23' or $_SESSION['UserID_OMS'] == '18') {
        echo '<div class="TickerNews default_theme" id="T2"><div class="ti_wrapper"><div class="ti_slide"><div class="ti_content"><div class="ti_news"><a href="#">Fresh Ordering of Pléiades Neo, Super View and SAR-SAT1 is now available on Order Management System&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div><div class="ti_news"><a href="#">Fresh Ordering of Pléiades Neo, Super View and SAR-SAT1 is now available on Order Management System&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div><div class="ti_news"><a href="#">Fresh Ordering of Pléiades Neo, Super View and SAR-SAT1 is now available on Order Management System&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div><div class="ti_news"><a href="#">Fresh Ordering of Pléiades Neo, Super View and SAR-SAT1 is now available on Order Management System&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div><div class="ti_news"><a href="#">Fresh Ordering of Pléiades Neo, Super View and SAR-SAT1 is now available on Order Management System&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div><div class="ti_news"><a href="#">Fresh Ordering of Pléiades Neo, Super View and SAR-SAT1 is now available on Order Management System&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div></div></div></div></div>';
    }
    ?>
</body>

</html>