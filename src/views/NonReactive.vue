<template>
  <div>
    <div class="lineChart">
      <line-chart2 ref="lineChart" :chart-data="chartData" :options="options" />
    </div>
    <div class="customFields">
      <!-- <div class="radioBtnItem">
        <fieldset>
          <legend>Line color</legend>
          <input type="radio" id="red" value="red" v-model="selectedLineColor">
          <label for="red">red</label>
          <input type="radio" id="blue" value="blue" v-model="selectedLineColor">
          <label for="blue">blue</label>
        </fieldset>
      </div>
      <div class="radioBtnItem">
        <fieldset>
          <legend>Line width</legend>
          <input type="radio" id="onePixel" value="onePixel" v-model="selectedLineWidth">
          <label for="onePixel">1px</label>
          <input type="radio" id="threePixels" value="threePixels" v-model="selectedLineWidth">
          <label for="threePixels">3px</label>
        </fieldset>
      </div> -->
      <div class="radioBtnItem">
        <fieldset>
          <legend>Point style</legend>
          <input type="radio" id="circle" value="circle" v-model="selectedPointStyle">
          <label for="circle">circle</label>
          <input type="radio" id="rect" value="rect" v-model="selectedPointStyle">
          <label for="rect">rect</label>
          <input type="radio" id="rectRot" value="rectRot" v-model="selectedPointStyle">
          <label for="rectRot">rectRot</label>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart2 from '@/components/LineChart2.vue';
import { ChartDataMixin } from '../mixins/chartDataMixins';

export default {
  name: 'NonReactive',
  mixins: [ChartDataMixin],
  components: {
    LineChart2,
  },
  data() {
    return {
      selectedLineColor: 'red',
      selectedLineStyle: 'solid',
      selectedLineFill: 'unfilled',
      selectedLineWidth: 'onePixel',
      selectedPointStyle: 'circle',
      selectedPointSize: 'default',
      selectedInterpolation: 'default',
      selectedTooltip: 'default',
      chartData: {},
      datasets: [],
      options: {},
    };
  },
  mounted() {
    this.load();
  },
  watch: {
    selectedInterpolation() {
      this.load();
    },
    selectedLineStyle() {
      this.load();
    },
    selectedLineColor() {
      this.load();
    },
    selectedLineFill() {
      this.load();
    },
    selectedLineWidth() {
      this.load();
    },
    selectedPointStyle() {
      this.load();
    },
    selectedPointSize() {
      this.load();
    },
  },
  methods: {
    load() {
      this.chartData = {
        labels: this.labels,
        datasets: [{
          label: 'non-reactive line chart',
          borderWidth: this.selectedLineWidth === 'onePixel' ? 1 : 3,
          borderColor: this.selectedLineColor === 'red' ? 'rgba(255, 99, 132, 0.75)' : 'rgba(54, 162, 235, 0.75)',
          borderDash: [],
          backgroundColor: this.selectedLineColor === 'red' ? 'rgba(255, 99, 132, 0.5)' : 'rgba(54, 162, 235, 0.5)',
          pointRadius: 10,
          pointHoverRadius: 15,
          pointHitRadius: 15,
          fill: 'filled',
          cubicInterpolationMode: 'default',
          data: this.data,
        }],
      };
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            pointStyle: this.selectedPointStyle,
          },
        },
      };
      this.$refs.lineChart.update();
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
</style>
