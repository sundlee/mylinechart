<template>
  <div>
    <div class="dummy">
      <h3>아래로 스크롤 하세요.</h3>
      <p>deferred를 선택하면 차트가 충분히 보이고 난뒤 1초후에 load됩니다. (default일때와 비교해보세요.)</p>
    </div>
    <div class="lineChart">
      <line-chart4 ref="lineChart" :chart-data="chartData" :options="options" />
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
        elements: {
          point: {
            pointStyle: 'circle',
          },
        },
        plugins: {
          deferred: {
            xOffset: '50%',
            delay: 1000,
          },
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
  watch: {
    selectedDeferredLoad(data) {
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
              xOffset: '50%',
              delay: 1000,
            },
            crosshair: {
              sync: {
                enabled: false,
              },
              zoom: {
                enabled: false,
              },
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
      this.$refs.lineChart.update();
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
