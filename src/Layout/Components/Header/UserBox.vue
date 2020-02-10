<template>
  <div class="user-box ml-2">
    <a
      href="javascript:void(0);"
      class="p-0 d-flex align-items-center"
      id="userBoxPopover"
    >
      <div class="d-block p-0 avatar-icon-wrapper">
        <span class="badge badge-circle badge-success p-top-a">Online</span>
        <div class="avatar-icon rounded">
          <img src="@/assets/img/avatars/avatar3.jpg" alt="" />
        </div>
      </div>
      <div class="d-none d-md-block pl-2">
        <div class="font-weight-bold">
          {{ userName }}
        </div>
        <span class="text-black-50">
          {{ userRole }}
        </span>
      </div>
      <span class="pl-3">
        <font-awesome-icon icon="angle-down" class="opacity-5" />
      </span>
    </a>
    <b-popover
      triggers="click blur"
      placement="bottom"
      @show="showPopoverIntegrations"
      ref="userBoxPopover"
      target="userBoxPopover"
    >
      <ul class="list-group list-group-flush text-left bg-transparent">
        <li class="list-group-item rounded-top">
          <ul class="nav nav-pills nav-pills-hover flex-column text-capitalize">
            <!-- <li
              class="nav-header d-flex text-primary pt-1 pb-2 font-weight-bold align-items-center"
            >
              <div>
                Profile options
              </div>
              <div class="ml-auto font-size-xs">
                <a href="javascript:void(0);">
                  <font-awesome-icon icon="plus-circle" />
                </a>
              </div>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">
                ubah password
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" @click="logout">
                log out
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </b-popover>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusCircle,
  faChartBar,
  faAngleDown
  //   faFacebook,
  //   faTwitter
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';
import startCase from "lodash/startCase";
library.add(
  faDribbble,
  faPlusCircle,
  faChartBar,
  faAngleDown
  //   faFacebook,
  //   faTwitter
);

export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon
  },
  computed: {
    userName() {
      return startCase(this.$store.state.user.nama)
    },
    userRole() {
      let role = this.$store.state.user.roles[0].name
      return startCase(role)
    }
  },
  methods: {
    showTooltip() {
      this.$refs.tooltipSuccess._toolpop
        .getTipElement()
        .classList.add("tooltip-success");
    },
    showPopoverIntegrations() {
      this.$refs.userBoxPopover._toolpop
        .getTipElement()
        .classList.add(
          "popover-custom-wrapper",
          "popover-custom-lg",
          "popover-secondary"
        );
    },
    async logout() {
      try {
        const res = await axios.post(`${this.url_api}/logout`);
        const { status, data, message } = res.data;
        if(status) {
          this.$store.commit('SET_BEARER_TOKEN', null);
          this.$store.commit('SET_USER', null);
          this.$router.push('/login');
        }
      } catch (err) {
        // console.log(err);
      }
    }
  }
};
</script>
