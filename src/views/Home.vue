<template>
  <!-- <div>
    <div class="app-content--inner p-0 d-flex flex-column"> -->
  <div>
    <b-row class="my-4">
      <b-col cols="12">
        <div>
          <ol class="d-inline-block breadcrumb text-uppercase font-size-xs p-0">
            <li class="d-inline-block breadcrumb-item">
              <a href="javascript:void(0);">Beranda</a>
            </li>
            <li
              class="d-inline-block breadcrumb-item active"
              aria-current="page"
            >
              dashboard
            </li>
          </ol>
          <h5 class="display-4 mt-1 mb-1 font-weight-bold text-capitalize">
            dashboard monitoring hari ini
          </h5>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <b-row>
          <b-col cols="6" v-for="(number, index) in 2" :key="index">
            <CardDashboard title="pasien baru" :highlight="5" />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="6">
        <b-row>
          <b-col>
            <TableDashboard />
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <div class="card card-box my-2">
      <div class="card-body">
        <b-row class="d-flex align-items-center mb-4">
          <b-col cols="6">
            <h5 class="text-capitalize font-weight-bold">trend pasien</h5>
          </b-col>
          <b-col cols="6">
            <div class="d-flex justify-content-end">
              <b-button
                pill
                variant="secondary"
                size="sm"
                class="text-capitalize"
                >mingguan</b-button
              >
              <b-button
                pill
                variant="secondary"
                size="sm"
                class="ml-4 text-capitalize"
                >bulanan</b-button
              >
              <b-button
                pill
                variant="secondary"
                size="sm"
                class="ml-4 text-capitalize"
                >tahunan</b-button
              >
              <b-button
                pill
                variant="secondary"
                size="sm"
                class="ml-4 text-capitalize"
                ><span class="btn-wrapper--icon">
                  <font-awesome-icon icon="chevron-down" /> </span
              ></b-button>
            </div>
          </b-col>
        </b-row>
        <apexchart
          type="line"
          height="350"
          :options="chartOptions2"
          :series="series2"
        />
      </div>
    </div>
  </div>

  <!-- </div>
  </div> -->
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import startCase from "lodash/startCase";

library.add(faChevronDown);

export default {
  name: "home",
  components: {
    FontAwesomeIcon,
    apexchart: () => import("vue-apexcharts"),
    CardDashboard: () => import("@/components/CardDashboard"),
    TableDashboard: () => import("@/components/TableDashboard")
  },
  data: () => ({
    series2: [
      {
        name: "Income",
        type: "column",
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      },
      {
        name: "Cashflow",
        type: "column",
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
      },
      {
        name: "Revenue",
        type: "line",
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }
    ],
    chartOptions2: {
      // toolbar: {
      //   show: true,
      //   tools: {
      //     customIcons: [
      //       {
      //         icon: '<img src="/static/icons/chart-carpet.png" width="20">',
      //         index: 4,
      //         title: "tooltip of the icon",
      //         class: "custom-icon",
      //         click: function(chart, options, e) {
      //           console.log("clicked custom-icon");
      //         }
      //       }
      //     ]
      //   }
      // },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 300
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      },
      dataLabels: {
        enabled: false
      },

      stroke: {
        width: [1, 1, 4]
      },
      // title: {
      //   text: startCase("trend pasien"),
      //   align: "left",
      //   style: {
      //     fontSize: "18px"
      //   }
      // },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
      },
      yaxis: [
        {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#008FFB"
          },
          labels: {
            style: {
              color: "#008FFB"
            }
          },
          title: {
            text: "Income (thousand crores)",
            style: {
              color: "#008FFB"
            }
          },
          tooltip: {
            enabled: true
          }
        },

        {
          seriesName: "Income",
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#00E396"
          },
          labels: {
            style: {
              color: "#00E396"
            }
          },
          title: {
            text: "Operating Cashflow (thousand crores)",
            style: {
              color: "#00E396"
            }
          }
        },
        {
          seriesName: "Revenue",
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FEB019"
          },
          labels: {
            style: {
              color: "#FEB019"
            }
          },
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: "#FEB019"
            }
          }
        }
      ],
      tooltip: {
        fixed: {
          enabled: false
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
    }
  })
};
</script>

<style lang="scss">
.apexcharts-title-text {
  font-weight: 800 !important
}
</style>
