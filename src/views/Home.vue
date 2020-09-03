<template>
  <div>
    <div class="lineChart">
      <line-chart1 :chart-data="chartData" :options="options"></line-chart1>
    </div>
    <div class="customFields">
      <div class="radioBtnItem">
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
          <legend>Line style</legend>
          <input type="radio" id="solid" value="solid" v-model="selectedLineStyle">
          <label for="solid">solid</label>
          <input type="radio" id="dash" value="dash" v-model="selectedLineStyle">
          <label for="dash">dash</label>
        </fieldset>
      </div>
      <div class="radioBtnItem">
        <fieldset>
          <legend>Line fill</legend>
          <input type="radio" id="unfilled" value="unfilled" v-model="selectedLineFill">
          <label for="unfilled">unfilled</label>
          <input type="radio" id="filled" value="filled" v-model="selectedLineFill">
          <label for="filled">filled</label>
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
      </div>
      <!-- <div class="radioBtnItem">
        <fieldset>
          <legend>Point style</legend>
          <input type="radio" id="circle" value="circle" v-model="selectedPointStyle">
          <label for="circle">circle</label>
          <input type="radio" id="rect" value="rect" v-model="selectedPointStyle">
          <label for="rect">rect</label>
          <input type="radio" id="rectRot" value="rectRot" v-model="selectedPointStyle">
          <label for="rectRot">rectRot</label>
        </fieldset>
      </div> -->
      <div class="radioBtnItem">
        <fieldset>
          <legend>Point size</legend>
          <input type="radio" id="default" value="default" v-model="selectedPointSize">
          <label for="default">default</label>
          <input type="radio" id="big" value="big" v-model="selectedPointSize">
          <label for="big">big</label>
        </fieldset>
      </div>
      <div class="radioBtnItem">
        <fieldset>
          <legend>Interpolation</legend>
          <input type="radio" id="default" value="default" v-model="selectedInterpolation">
          <label for="default">default</label>
          <input type="radio" id="monotone" value="monotone" v-model="selectedInterpolation">
          <label for="monotone">monotone</label>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart1 from '@/components/LineChart1.vue';
import { ChartDataMixin } from '../mixins/chartDataMixins';

export default {
  name: 'Reactive',
  mixins: [ChartDataMixin],
  components: {
    LineChart1,
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
          label: 'reactive line chart',
          borderWidth: this.selectedLineWidth === 'onePixel' ? 1 : 3,
          borderColor: this.selectedLineColor === 'red' ? 'rgba(255, 99, 132, 0.75)' : 'rgba(54, 162, 235, 0.75)',
          borderDash: this.selectedLineStyle === 'dash' ? [3, 3] : [],
          backgroundColor: this.selectedLineColor === 'red' ? 'rgba(255, 99, 132, 0.5)' : 'rgba(54, 162, 235, 0.5)',
          pointRadius: this.selectedPointSize === 'default' ? 3 : 10,
          pointHoverRadius: this.selectedPointSize === 'default' ? 4 : 15,
          pointHitRadius: this.selectedPointSize === 'default' ? 1 : 15,
          fill: this.selectedLineFill === 'filled',
          cubicInterpolationMode: this.selectedInterpolation,
          data: this.data,
        }],
      };
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
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
</style>
