<?php
  session_start();
  if (!isset($_SESSION['Username_OMS'])) {
   $_SESSION['msg_OMS'] = "You must log in first";
   header('location: login.php');
  }
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico"> -->

    <title>OMS-Approval Portal</title>
    <!-- <link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet"> -->
    <link href="css/libs/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/libs/jquery.dataTables.css">
    <link href="css/libs/ol.css" rel="stylesheet">
    <link href="css/custom/approvalStyle.css" rel="stylesheet">
  </head>

  <body onload="init()">
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">OMS-Approval Portal</a>
      <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <!-- <a class="nav-link" href="#">Sign out</a> -->
          <a class="buttonLogout" href="main.php">
                    Back To Map
                </a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <!-- <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <span data-feather="users"></span>
                  MIDte@GHQ <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  SIDte@SPD
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  SDte@AHQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  GSIDte@SGS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  477ASGE@GHQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  NIDte@NHQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  ISIC@ISI
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  OPSROOM@FCSOUTH
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  MC2@ARMY
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  KC@ARMY
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  HQS@5CORPS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  HQS@12CORPS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  IFC@SPD
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  COC@NAVY
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  FCOC@NAVY
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="users"></span>
                  CCOC@NAVY
                </a>
              </li>
            </ul>
          </div>
        </nav> -->

        <!-- <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"> -->
        <main role="main" class="col-md-12 ml-sm-auto col-lg-12 pt-3 px-4">
          <!-- <h2>Orders for Approval</h2> -->
          <div class="table-responsive" id="tbl">
          </div>
          <div class="map" id="map">

          </div>
        </main>
      </div>
    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> -->
    <script src="js/libs/jquery.js"></script>
    <script type="text/javascript" src="js/libs/jquery.dataTables.js"></script>
    <!-- <script type="text/javascript" src="js/libs/dataTables.buttons.min.js"></script> -->
    <!-- <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script> -->
    <!-- <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js"></script> -->
    <!-- <script src="https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js"></script> -->
    <script src="js/libs/bootstrap.min.js"></script>
    <script src="js/libs/ol.js"></script>
    <!-- Icons -->
    <!-- <script src="https://unpkg.com/feather-icons/dist/feather.min.js"></script> -->

    <script src="js/custom/approvalScript.js"></script>
  </body>
</html>
