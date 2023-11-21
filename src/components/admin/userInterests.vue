<template>
    <div class="app-admin-wrap layout-horizontal-bar">
    <Sidebar />
      <Topbar />
      <div class="main-content-wrap d-flex flex-column">
        <div class="main-content">
            <Breadcrumbs />
                  <div class="separator-breadcrumb border-top"></div>
                  <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="card o-hidden mb-4">
                            <div class="card-header bg-info d-flex align-items-center border-0">
                            <h3 class="w-50 float-start card-title m-0 text-white">Email Templates</h3>
                            <div class="dropdown dropleft text-end w-50 float-end">
                                <button class="btn btn-secondary ul-btn-raised--v2 m-1" type="button">
                                    <i class="nav-icon i-add fw-bold"></i> ADD EMAIL TEMPLATE
                                </button>
                            </div>
                            </div>
                            <div>
                            <div class="table-responsive">
                                <table class="table text-center" id="user_table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Avatar</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Smith Doe</td>
                                    <td>
                                        <img
                                        class="rounded-circle m-0 avatar-sm-table"
                                        src="../../assets/images/faces/1.jpg"
                                        alt=""
                                        />
                                    </td>
                                    <td>Smith@gmail.com</td>
                                    <td>
                                        <span class="badge bg-success">Active</span>
                                    </td>
                                    <td>
                                        <a class="text-success me-2" href="#"
                                        ><i class="nav-icon i-Pen-2 fw-bold"></i></a
                                        ><a class="text-danger me-2" href="#"
                                        ><i
                                            class="nav-icon i-Close-Window fw-bold"
                                        ></i
                                        ></a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jhon Doe</td>
                                    <td>
                                        <img
                                        class="rounded-circle m-0 avatar-sm-table"
                                        src="../../assets/images/faces/1.jpg"
                                        alt=""
                                        />
                                    </td>
                                    <td>Jhon@gmail.com</td>
                                    <td>
                                        <span class="badge bg-info">Pending</span>
                                    </td>
                                    <td>
                                        <a class="text-success me-2" href="#"
                                        ><i class="nav-icon i-Pen-2 fw-bold"></i></a
                                        ><a class="text-danger me-2" href="#"
                                        ><i
                                            class="nav-icon i-Close-Window fw-bold"
                                        ></i
                                        ></a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Alex</td>
                                    <td>
                                        <img
                                        class="rounded-circle m-0 avatar-sm-table"
                                        src="../../assets/images/faces/1.jpg"
                                        alt=""
                                        />
                                    </td>
                                    <td>Otto@gmail.com</td>
                                    <td>
                                        <span class="badge bg-warning">Not Active</span>
                                    </td>
                                    <td>
                                        <a class="text-success me-2" href="#"
                                        ><i class="nav-icon i-Pen-2 fw-bold"></i></a
                                        ><a class="text-danger me-2" href="#"
                                        ><i
                                            class="nav-icon i-Close-Window fw-bold"
                                        ></i
                                        ></a>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">4</th>
                                    <td>Mathew Doe</td>
                                    <td>
                                        <img
                                        class="rounded-circle m-0 avatar-sm-table"
                                        src="../../assets/images/faces/1.jpg"
                                        alt=""
                                        />
                                    </td>
                                    <td>Mathew@gmail.com</td>
                                    <td>
                                        <span class="badge bg-success">Active</span>
                                    </td>
                                    <td>
                                        <a class="text-success me-2" href="#"
                                        ><i class="nav-icon i-Pen-2 fw-bold"></i></a
                                        ><a class="text-danger me-2" href="#"
                                        ><i
                                            class="nav-icon i-Close-Window fw-bold"
                                        ></i
                                        ></a>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
          <div class="flex-grow-1"></div>
        <Footer />
      </div>
    </div>
  </template>
  
  <script>
  import Topbar from "@/components/partials/Topbar.vue";
  import Footer from "@/components/partials/Footer.vue";
  import Sidebar from "@/components/partials/Sidebar";
  import Breadcrumbs from "@/components/partials/Breadcrumbs";
  import "datatables.net-dt/js/dataTables.dataTables";
    import "@/assets/css/dataTables.bootstrap4.min.css";
    import "@/assets/css/buttons.dataTables.min.css";
    import "datatables.net-buttons/js/dataTables.buttons.js";
    import "datatables.net-buttons/js/buttons.colVis.js";
    import "datatables.net-buttons/js/buttons.flash.js";
    import "datatables.net-buttons/js/buttons.html5.js";
    import "datatables.net-buttons/js/buttons.print.js";
    import pdfMake from "pdfmake/build/pdfmake";
    import pdfFonts from "pdfmake/build/vfs_fonts";
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    import "@/assets/datatables/jquery.dataTables.min.js";
    import "@/assets/datatables/dataTables.bootstrap4.min.js";
    import "@/assets/datatables/dataTables.buttons.min.js";
    import "@/assets/datatables/buttons.html5.min.js";
    import "@/assets/datatables/buttons.print.min.js";
    import "@/assets/datatables/jszip.min.js";
  export default {
    name: "Email",
    components: { Sidebar, Topbar, Footer, Breadcrumbs },
  
  }
  </script>