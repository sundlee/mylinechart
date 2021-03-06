<template>
  <div>
    <div class="lineChart">
      <line-chart3 ref="lineChart" :chart-data="chartData" :options="options" />
    </div>
    <div class="customFields">
      <div class="radioBtnItem">
        <fieldset>
          <legend>Tooltip style</legend>
          <input type="radio" id="default" value="default" v-model="selectedTooltipStyle">
          <label for="default">default</label>
          <input type="radio" id="callback" value="callback" v-model="selectedTooltipStyle">
          <label for="callback">callback</label>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart3 from '@/components/LineChart3.vue';
import { ChartDataMixin } from '../mixins/chartDataMixins';

export default {
  name: 'Tooltip',
  mixins: [ChartDataMixin],
  components: {
    LineChart3,
  },
  data() {
    return {
      selectedLineColor: 'red',
      selectedLineWidth: 'onePixel',
      selectedTooltipStyle: 'default',
      chartData: {},
      datasets: [],
      options: {},
      tooltip: {},
    };
  },
  mounted() {
    this.load();
  },
  watch: {
    selectedLineColor() {
      this.load();
    },
    selectedLineWidth() {
      this.load();
    },
    selectedTooltipStyle(style) {
      if (style === 'default') {
        this.tooltip = {
          enabled: true,
          mode: 'index',
        };
      } else if (style === 'callback') {
        this.tooltip = {
          enabled: true,
          mode: 'index',
          position: 'nearest',
          intersect: false,

          backgroundColor: '#4F5565',
          titleFontStyle: 'normal',
          titleFontSize: 18,
          bodyFontFamily: "'Noto Sans KR', sans-serif",
          cornerRadius: 3,
          bodyFontColor: 'rgb(255, 159, 64)',
          bodyFontSize: 18,
          xPadding: 20,
          yPadding: 20,
          displayColors: false,
          callbacks: {
            title: (tooltipItem) => {
              return `🗓 ${tooltipItem[0].xLabel}`;
            },
            label: (tooltipItem, data) => {
              const dataset = data.datasets[tooltipItem.datasetIndex];
              const currentValue = dataset.data[tooltipItem.index].y;
              return `📦 Request count: ${currentValue.toLocaleString()}`;
            },
          },
        };
      }
      this.load();
    },
  },
  methods: {
    load() {
      this.chartData = {
        labels: this.labels,
        datasets: [{
          label: 'tooltip',
          borderWidth: this.selectedLineWidth === 'onePixel' ? 1 : 3,
          borderColor: this.selectedLineColor === 'red' ? 'rgba(255, 99, 132, 0.75)' : 'rgba(54, 162, 235, 0.75)',
          backgroundColor: this.selectedLineColor === 'red' ? 'rgba(255, 99, 132, 0.5)' : 'rgba(54, 162, 235, 0.5)',
          borderDash: [],
          pointRadius: 3,
          pointHoverRadius: 4,
          pointHitRadius: 1,
          fill: false,
          cubicInterpolationMode: 'default',
          data: this.data,
        }],
      };
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            pointStyle: 'circle',
          },
        },
        tooltips: this.tooltip,
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
