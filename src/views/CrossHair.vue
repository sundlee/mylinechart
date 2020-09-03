<template>
  <div>
    <div class="lineChart">
      <line-chart5 :chart-data="chartData" :options="options" />
    </div>
    <!-- <div class="customFields">
      <div class="radioBtnItem">
        <fieldset>
          <legend>Deferred load</legend>
          <input type="radio" id="default" value="default" v-model="selectedCrossHair">
          <label for="default">default</label>
          <input type="radio" id="crosshair" value="crosshair" v-model="selectedCrossHair">
          <label for="crosshair">crosshair</label>
        </fieldset>
      </div>
    </div> -->
  </div>
</template>

<script>
import moment from 'moment';
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
        scales: {
          xAxes: [{
            display: true,
            // type: 'linear',
            position: 'bottom',
            id: 'x-axis-0',
            ticks: {
              source: 'labels',
            },
          }],
        },
        tooltips: {
          mode: 'interpolate',
          intersect: false,
          callbacks: {
            title(a) {
              return a[0].xLabel;
            },
            label(i, d) {
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
            }
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
      console.log(`load() - options: ${JSON.stringify(this.options, null, 4)}`);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
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
