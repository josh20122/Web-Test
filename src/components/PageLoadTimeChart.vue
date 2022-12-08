<template>
  <VCard flat>
    <v-card-title primary-title> Page load time </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <canvas height="300" class="myChart" id="pageLoadTimeChart"> </canvas>
    </v-card-text>
  </VCard>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  methods: {
    drawChart() {
      let ctx = document.getElementById("pageLoadTimeChart").getContext("2d");
      var gradient = ctx.createLinearGradient(0, 0, 0, 270);
      gradient.addColorStop(0, "#00abb3");
      // gradient.addColorStop(0, "red");
      gradient.addColorStop(1, "white");
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "10th Nov",
            "11th Nov",
            "12th Nov",
            "13th Nov",
            "14th Nov",
            "15th Nov",
            "16th Nov",
            "17th Nov",
            "18th Nov",
            "20th Nov",
            "21th Nov",
            "22th Nov",
          ],
          datasets: [
            {
              fillColor: gradient,
              fillColor: "red",
              backgroundColor: gradient,
              label: "Series 2",
              data: [1, 3.2, 1.3, 3.7, 3.2, 3.4, 2.2, 1, 0.1, 3.1, 1.8, 1, 2.3],
              fill: true,
              borderColor: "#00abb3",
              backgroundColor: gradient,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              border: {
                display: false,
              },
              grid: {
                display: false,

                drawTicks: false,
              },
            },
            y: {
              max: 5,
            },
          },

          // scales: {
          //   myScale: {
          //     type: "logarithmic",
          //     position: "right",
          //   },
          // },

          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              //   backgroundColor: "white",
              //   titleColor: "black",
              //   bodyColor: "black",
              xAlign: "center",
              yAlign: "bottom",
              //   borderColor: "black",
            },
          },
          tension: 0.5,
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    },
  },
  mounted() {
    this.drawChart();
  },
};
</script>

<style>
</style>