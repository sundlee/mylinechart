<script>
import { Line, mixins } from 'vue-chartjs';
import 'chartjs-plugin-crosshair';

export default {
  name: 'LineChart5',
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
