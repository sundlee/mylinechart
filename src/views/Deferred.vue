<template>
  <div>
    <div class="dummy"><h3>아래로 스크롤 하세요.</h3></div>
    <div class="lineChart">
      <line-chart4 :chart-data="chartData" :options="options" />
    </div>
    <div class="customFields">
      <div class="radioBtnItem">
        <fieldset>
          <legend>Deferred load</legend>
          <input type="radio" id="default" value="default" v-model="selectedDeferredLoad">
          <label for="default">default</label>
          <input type="radio" id="deferred" value="deferred" v-model="selectedDeferredLoad">
          <label for="deferred">deferred</label>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart4 from '@/components/LineChart4.vue';
import { ChartDataMixin } from '../mixins/chartDataMixins';

export default {
  name: 'DeferredLoad',
  mixins: [ChartDataMixin],
  components: {
    LineChart4,
  },
  data() {
    return {
      selectedDeferredLoad: 'deferred',
      chartData: {},
      datasets: [],
      deferred: {},
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          deferred: {
            xOffset: 150,
            yOffset: '50%',
            delay: 1000,
          },
        },
      },
    };
  },
  mounted() {
    this.load();
  },
  watch: {
    selectedDeferredLoad(data) {
      console.log(`watch() - selectedDeferredLoad - data: ${data}`);
      if (data === 'default') {
        this.options = {
          responsive: true,
          maintainAspectRatio: false,
        };
      } else {
        this.options = {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            deferred: {
              xOffset: 150,
              yOffset: '50%',
              delay: 500,
            },
          },
        };
      }

      this.scrollToTop();
      this.load();
    },
  },
  methods: {
    load() {
      this.chartData = {
        labels: this.labels,
        datasets: [{
          label: 'deferred load',
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
      // this.options = {
      //   responsive: true,
      //   maintainAspectRatio: false,
      //   plugins: !this.selectedDeferredLoad === 'deferred' ? {} : {
      //     deferred: {
      //       xOffset: 150,
      //       yOffset: '50%',
      //       delay: 500,
      //     },
      //   },
      // };
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
