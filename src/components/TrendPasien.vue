<template>
  <div class="card card-box">
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
              v-for="(data, index) in btnFilter"
              :key="index"
              class="text-capitalize"
              :class="{ 'ml-4': index > 0 }"
              :pressed.sync="data.state"
              >{{ data.label }}</b-button
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
        :options="chartOptions"
        :series="seriesData"
      />
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown);

export default {
  components: {
    apexchart: () => import("vue-apexcharts")
  },
  data: () => ({
    btnFilter: [
      { label: "mingguan", state: false },
      { label: "bulanan", state: false },
      { label: "tahunan", state: false }
    ]
  }),
  props: {
    seriesData: {
      type: Array,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => ({
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
      })
    }
  }
};
</script>
