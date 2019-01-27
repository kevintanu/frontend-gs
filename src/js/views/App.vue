<template>
  <div>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="#" class="brand-link">
        <img
          src="/public/dist/img/chest.png"
          alt="GS Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: .8"
        >
        <span class="brand-text font-weight-light">{{state.appName}}</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="/public/dist/img/boy.png" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block">{{username}}</a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <!-- Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library-->
            <!-- <li class="nav-item has-treeview menu-open">
              >ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link active">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>Active Page</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="fa fa-circle-o nav-icon"></i>
                      <p>Inactive Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fa fa-th"></i>
                  <p>
                    Simple Link
                    <span class="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
            </li>-->
            <li class="nav-item">
              <router-link to="./" exact class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dasbor</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="./bank-account" class="nav-link">
                <i class="nav-icon fas fa-money-check-alt"></i>
                <p>Rekening Bank</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="./members" class="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>Member</p>
              </router-link>
            </li>

            <li v-on:click="signOut" class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-sign-out-alt"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <!-- <div class="row mb-2"></div> -->
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
          <router-view></router-view>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
  </div>
</template>

<script>
import auth from "../services/AuthService";

export default {
  data() {
    return {
      state: this.$root.$data.getState()
    };
  },
  methods: {
    signOut: () => {
      auth.signOut().catch(err => {
        alert(err.message);
      });
    }
  },
  mounted() {
    // auth.onAuthStateChanged(user => {
    //   if (user) {
    //     auth.currentUser.getIdToken().then(idToken => {
    //       getMember(user.email, idToken).then(member => {
    //         this.user = member;
    //       });
    //     });
    //   } else {
    //     window.location.href = "../login";
    //   }
    // });
  },
  computed: {
    username: function() {
      return this.state.member.username;
    }
  }
};
</script>

<style>
</style>
