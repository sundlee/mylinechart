<script>
import { Line, mixins } from 'vue-chartjs';

export default {
  name: 'LineChart1',
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
};
</script>
