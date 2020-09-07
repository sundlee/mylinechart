<template>
  <div class="lineChart">
    <line-chart5 ref="lineChart" :chart-data="chartData" :options="options" />
  </div>
</template>

<script>
import LineChart5 from '@/components/LineChart5.vue';
import { ChartDataMixin } from '../mixins/chartDataMixins';

export default {
  name: 'CrossHair',
  mixins: [ChartDataMixin],
  components: {
    LineChart5,
  },
  data() {
    return {
      selectedCrossHair: 'default',
      chartData: {},
      datasets: [],
      deferred: {},
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            pointStyle: 'circle',
          },
        },
        // scales: {
        //   xAxes: [{
        //     display: true,
        //     position: 'bottom',
        //     id: 'x-axis-0',
        //     ticks: {
        //       source: 'labels',
        //     },
        //   }],
        // },
        scales: {
          xAxes: [{
            type: 'time',
          }],
        },
        tooltips: {
          mode: 'interpolate',
          intersect: false,
          callbacks: {
            title(a) {
              return a[0].xLabel;
            },
            label(i) {
              return `Request count: ${i.yLabel}`;
            },
          },
        },
        plugins: {
          crosshair: {
            sync: {
              enabled: false,
            },
            zoom: {
              enabled: false,
            },
          },
        },
      },
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      this.chartData = {
        labels: this.labels,
        datasets: [{
          label: 'crosshair',
          borderWidth: 1,
          borderColor: 'rgba(255, 99, 132, 0.75)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderDash: [],
          pointRadius: 3,
          pointHoverRadius: 4,
          pointHitRadius: 1,
          fill: false,
          data: this.data,
        }],
      };
    },
  },
};
</script>

<style>
.lineChart {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 400px;
}
.customFields {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
}
.radioBtnSeries {
  display: flex;
  justify-content: center;
}
.radioBtnSeries label {
  margin-right: 30px;
}
.dummy {
  height: 500px;
}
</style>
