<script>
import { Line, mixins } from 'vue-chartjs';

export default {
  name: 'LineChart6',
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
  methods: {
    update() {
      this.$data._chart.update();
    },
  },
};
</script>
