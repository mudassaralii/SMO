<?php
session_start();

if (!isset($_SESSION['Username_OMS'])) {
  $_SESSION['msg_OMS'] = "You must log in first";
  header('location: login.php');
}

if (isset($_GET['logout_OMS'])) {
  // session_destroy();
  unset($_SESSION['Username_OMS']);
  unset($_SESSION['UserID_OMS']);
  unset($_SESSION['Role_OMS']);
  unset($_SESSION['FName_OMS']);
  unset($_SESSION['LName_OMS']);
  unset($_SESSION['Email_OMS']);
  unset($_SESSION['Success_OMS']);
  unset($_SESSION['msg_OMS']);
  header("location: ../login.php");
}

?>
<!DOCTYPE html>
<html>

<head>
  <title>OMS Orders Status</title>
  <!--meta http-equiv="refresh" content="180">-->
  <link rel="stylesheet" type="text/css" href="css/libs/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="css/libs/buttons.dataTables.min.css">
  <link rel="stylesheet" type="text/css" href="css/libs/all.css">
  <link rel="stylesheet" type="text/css" href="css/libs/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/libs/jquery.dataTables.css">
  <link rel="stylesheet" type="text/css" href="css/libs/datepicker.css" />
  <link rel="stylesheet" type="text/css" href="css/libs/toastr.min.css" />
  <link rel="stylesheet" type="text/css" href="css/custom/style.css">
  <link rel="stylesheet" type="text/css" href="css/libs/datepicker.css" />
  <script type="text/javascript" src="js/libs/jquery.js"></script>
  <script type="text/javascript" src="js/libs/toastr.min.js"></script>
  <script type="text/javascript" src="js/libs/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/libs/bootstrap-datepicker.js"></script>
  <script type="text/javascript" src="js/libs/jquery.dataTables.js"></script>
  <script type="text/javascript" src="js/libs/dataTables.buttons.min.js"></script>
  <script type="text/javascript" src="js/libs/buttons.print.min.js"></script>
  <script type="text/javascript" src="js/libs/pdfmake.min.js"></script>
  <script type="text/javascript" src="js/libs/vfs_fonts.js"></script>
  <script type="text/javascript" src="js/libs/buttons.html5.min.js"></script>
  <script type="text/javascript" src="js/libs/canvasjs.min.js"></script>
  <script type="text/javascript" src="js/libs/ol.js"></script>
  <script type="text/javascript" src="js/libs/bootbox.min.js"></script>

</head>

<body>
  <div id="id01" class="modal"
    style="top:0 !important; z-index: 5300; background-color: rgb(249 250 253 / 40%); width: 100%; height: 100%; padding-top: 20%;">
    <form class="modal-content confirmation-modal">
      <div class="confirm-container">
        <p class="txtCancellationPrompt"></p>
        <p style="display:none;" class="cancelID"></p>
        <div class="clearfix">
          <button type="button" onclick="document.getElementById('id01').style.display='none'"
            class="cancelbtn">Cancel</button>
          <button type="button" onclick="userOrderCancelReq()" class="confirmbtn">Confirm</button>
        </div>
      </div>
    </form>
  </div>
  <div id="OrderCancellation_Requests" class="modal"
    style="top:0 !important; z-index: 5300; background-color: rgb(249 250 253 / 40%); width: 100%; height: 100%; padding-top: 10%;">
    <form class="modal-content cancellation-modal">
      <div class="confirm-container">
        <div id="Cancel_Table"></div>
        <div class="clearfix">
          <button type="button" onclick="document.getElementById('OrderCancellation_Requests').style.display='none'"
            class="cancelbtn">Cancel</button>
          <!-- <button type="button" onclick="userOrderCancelReq()" class="confirmbtn">Confirm</button> -->
        </div>
      </div>
    </form>
  </div>
  <div class="modal fade" id="modalReport" tabindex="-1" role="dialog" aria-labelledby="modalReportLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="docuArchivet">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Orders Report </h3>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="tab">
            <button class="tablinks" onclick="openTab(event, 'Table')">Table</button>
            <button class="tablinks" onclick="openTab(event, 'Charts')" id="defaultOpen">Graphs</button>
          </div>
          <!-- Tab content -->
          <div id="Table" class="tabcontent">
            <h3 style="text-align: center;">Orders Status - Area Breakdown (km²)</h3>
            <table id="tblReport" style="text-align: center;">
              <thead>
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2">PRSS-1</th>
                  <th colspan="2">SPOT-6/7</th>
                  <th colspan="2">Pleiades</th>
                  <th colspan="2">SuperView</th>
                  <th colspan="2">SAR</th>
                  <th colspan="2">Pleiades Neo</th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <th>User</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody id="reportTBody"></tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
            <div
              style="height: 15px; width: 100%; border-bottom: 2px solid #c3c3c3; margin-top: 15px; margin-bottom: 15px;">
            </div>
            <h3 style="text-align: center;">Orders Status - Price Breakdown ($)</h3>
            <table id="tblReportPrice" style="text-align: center;">
              <thead>
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2">PRSS-1</th>
                  <th colspan="2">SPOT-6/7</th>
                  <th colspan="2">Pleiades</th>
                  <th colspan="2">SuperView</th>
                  <th colspan="2">SAR</th>
                  <th colspan="2">Pleiades Neo</th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <th>User</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Archived</th>
                  <th>Fresh</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody id="reportTBodyPrice"></tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div id="Charts" class="tabcontent">
            <div id="stats" style="width: 100%; height: 140px;">
              <table>
                <tr>
                  <td style='padding-left:30px; font-size: 20px; font-weight:bold;'>Total Orders:</td>
                  <td style='padding-left:30px; font-size: 20px; font-weight:bold;'>7,331</td>
                  <td style='padding-left:30px; font-size: 20px; font-weight:bold;'>Completed:</td>
                  <td style='padding-left:30px; font-size: 20px; font-weight:bold;'>6,361</td>
                </tr>
                <tr>
                  <td style='padding-left:30px; font-size: 20px; font-weight:bold;'>In Progress:</td>
                  <td colspan="3" style='padding-left:30px; font-size: 20px; font-weight:bold;'>970</td>
                  <!--<td style='padding-left:30px; font-size: 20px; font-weight:bold;'>Order Placed:</td><td style='padding-left:30px; font-size: 20px; font-weight:bold;'>30</td>-->
                </tr>
                <tr>
                  <td style='padding-left:30px; font-size: 20px; font-weight:bold;'>Delivered Area:</td>
                  <td colspan="3" style='padding-left:30px; font-size: 20px; font-weight:bold;'>21.6 Million km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr></tr>
              </table>
            </div>
            <div id="pie-chart" style="width: 100%; height: 450px;"></div>
            <div id="bar-chart" style="width: 100%; height: 450px;"></div>
            <div id="chartContainer" style="display:none; width: 100%; height: 450px;"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" style="font-size: 1em;">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="modalOrderDetails" tabindex="-1" role="dialog" aria-labelledby="modalReportLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="docuArchivet">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Order Details </h3>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div id="Table">
            <table id="tblOrderDetails" style="text-align: center;">
              <thead>
                <tr>
                  <th colspan="1">Id</th>
                  <th colspan="1">Date</th>
                  <th colspan="1">Time</th>
                  <th colspan="1">Status</th>
                  <th colspan="1">Acquisition No.</th>
                  <th colspan="1">Area</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" style="font-size: 1em;">Close</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Side navigation -->
  <div class="navigation" style="background:#093c58; position: relative;">
    <img src='css/images/suparco1.png' height='50' width="50" style="margin-top: 0px; margin-left: 6px;">
    <!-- <span class="header-span">ORDER</span><span class="header-span" style="margin-left: 10px;">MANAGEArchiveT</span><span class="header-span" style="margin-left: 10px;">SYSTEM</span> -->
    <span class="header-span">SRS-OMS</span>
    <?php if (isset($_SESSION['Username_OMS'])): ?>
      <div style="float:right;">
        <a class="buttonLogout" href="main.php"> Back To Map </a>
      </div>
    <?php endif ?>
  </div>
  <div class="sidenav">
    <div class="sidenav-btns">
      <button id="archive_status" data-toggle="tooltip" title="Archived Images" data-placeArchivet="right"
        class="controls" onclick="toggleType('Archive');">
        <i class="fas fa-camera sideIcons iconArchive"></i>
      </button>
      <button id="fresh_status" data-toggle="tooltip" title="Fresh Acquisition" data-placeArchivet="right"
        class="controls" onclick="toggleType('Fresh');">
        <i class="fa fa-globe sideIcons iconFresh"></i>
      </button>
      <?php
      if ($_SESSION['Role_OMS'] == '1') {
        $btn = '<button id="cancel_status" data-toggle="tooltip" title="Order Cancellation Requests" data-placeArchivet="right" class="controls" onclick="toggleType(\'Cancel\');">';
        $btn .= '<i class="fa fa-ban sideIcons iconCancel"></i><span class="badge">3</span></button>';
        echo $btn;
      }
      ?>
    </div>
  </div>
  <div class="main">
    <!-- Modal -->
    <!-- <div class="modal fade" id="modalReport" tabindex="-1" role="dialog" aria-labelledby="modalReportLabel"
      aria-hidden="true"><div class="modal-dialog modal-notify modal-info" role="docuArchivet"><div class="modal-content text-center"><div class="modal-header d-flex justify-content-center" style="font-size: 2.5em; font-weight: bold;"><p class="heading">Orders Report</p></div><div class="modal-body"><i class="fas fa-bell fa-4x animated rotateIn mb-4" style="font-size: 5.5em; color: #ffc107;"></i><p id="notification_msg"></p></div><div class="modal-footer flex-center" style="justify-content: center;"></div></div></div></div> -->
    <div id="table" style="margin-top: 20px; margin-left:10px;"></div>
    <?php
    if ($_SESSION['Role_OMS'] == '1')
      echo '
								<button type="button" name="button" class="btnReport" onclick="showReport()">
									<i class="fa fa-list"></i>
								</button>
					 &nbsp;&nbsp;&nbsp;&nbsp;
								<input type="checkbox" name="select-all" id="isFiltersOn"> Show Filters';
    ?>
    <div id="role" style="display: none;">
      <?php echo $_SESSION['Role_OMS'] ?>
    </div>
    <!-- <div id="noData"  style="text-align: center; color: #757575; margin-top: 25%; font-size: 40px; display:none;"><h1>No Record Found!</h1></div> -->
  </div>

  <!-- Message Modal -->

  <!-- Modal -->
  <div class="modal fade" id="messageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Messages</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Conversation</label>
            <textarea class="form-control" rows="5" id="messagetxtarea" readonly></textarea>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enter Message!" aria-label="Enter Message!"
              aria-describedby="basic-addon2" id="messagetxt">
            <div class="input-group-append">
              <button  type="button" id="messagesendbtn" onclick="messagepush(54)">send</button>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <!-- <button type="button">Update</button> -->
        </div>
      </div>
    </div>
  </div>





  <script src="js/custom/AppScripts.js"></script>
</body>

</html>