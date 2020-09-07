<script>
import { Line, mixins } from 'vue-chartjs';
import 'chartjs-plugin-deferred';

export default {
  name: 'LineChart4',
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    chartData: {
      deep: true,
      handler() {
        this.renderChart(this.chartData, this.options);
      },
    },
  },
  methods: {
    update() {
      this.$data._chart.update();
    },
  },
};
</script>
