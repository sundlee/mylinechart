<script>
import { Line, mixins } from 'vue-chartjs';

export default {
  name: 'LineChart2',
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: {
    options: {
      type: Object,
      required: true,
    },

  },
  data() {
    return {

    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    chartData() {
      this.renderChart(this.chartData, this.options);
    },
  },
};
</script>
