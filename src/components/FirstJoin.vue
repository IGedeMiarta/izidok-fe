<template>
  <div class="app-wrapper bg-white h-100">
    <div class="app-main">
      <div class="app-content p-0">
        <div class="d-flex align-items-center">
          <div class="flex-grow-1 w-100 d-flex align-items-center">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 pl-0 d-none d-lg-flex align-items-center">
                  <div class="wrap" :style="wrapStyle">
                    <img src="@/assets/img/forgot.jpg" :style="wrapImgStyle" alt="initial page izidok" />
                  </div>
                </div>
                <div class="col-md-6 pr-0 d-flex align-items-center first-join">
                  <div>
                    <div class="mb-5 w-100">
                      <img src="/img/izidok.baaa69b4.png" alt="izidok"
                        class="img-fluid w-100 d-block float-left logo-forgot"
                        style="width: 39% !important;height:100%;">
                    </div>

                    <div class="col-md-10">
                      <br>
                      <br>
                      <br>
                      <p style="color:gray">
                        Selamat bergabung dengan izidok
                      </p>
                      <p style="color:gray">izidok siap membantu untuk memudahkan Anda dalam menangani pasien dan
                        tempat
                        praktik
                        Anda</p>
                      <router-link :to="determineNextRoute()"
                        class="btn btn-lg btn-block mt-4 "
                        style="background-color :#3F7EA7; color:white; border-radius : 10px;">
                        Masuk
                      </router-link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";

  export default {
    props: ["modalShow"],
    beforeMount() {
      this.setInitPage(true)

      if (!this.sidebarCollapsed) {
        this.collapseSidebar(true);
      }
    },
    mounted() {
      if (this.modalShow) {
        this.$refs["first-join-modal"].show();
      }
    },
    data() {
      return {
        windowHeight: 0
      };
    },
    methods: {
      ...mapMutations({
        collapseSidebar: "sidebar/SET_SIDEBAR_COLLAPSED",
        setInitPage: 'sidebar/SET_INITIALIZATION_PAGE'
      }),
      determineNextRoute() {
        let routeName = "home";
        switch(this.getInitiationPosition) {
          case "spesialisasi":
            routeName = "input-spesialisasi";
            break;
          case "operator":
            routeName = "input-asisten-dokter";
            break;
          case "tarif":
            routeName = "input-tarif";
            break;
          default:
            routeName = "home";
            break;
        }
        
        return {name:routeName}
      }
    },
    computed: {
      ...mapState(["sidebarCollapsed"]),
      ...mapGetters(["getInitiationPosition"]),
      wrapStyle() {
        return {
          height: this.windowHeight + 'px'
        }
      },
      wrapImgStyle() {
        return {
          "max-height": this.windowHeight + 'px'
        }
      },
    },
    mounted() {
      this.windowHeight = window.innerHeight;
      this.$nextTick(() => {
        window.addEventListener('resize', (e) => {
          this.windowHeight = window.innerHeight;
        })
      })
    },
  };
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0;
  }

  .logo-forgot {
    margin-left: 5px;
  }

  .wrap img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    transform: translate(-50%, -50%);
  }
</style>