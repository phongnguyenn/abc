const lineChartOptions = {
  backroundColor: 'blue',
  animation: { easing: 'easeOutQuad' },
  plugins: {
    datalabels: {
      backgroundColor: function (context) {
        return context.dataset.borderColor;
      },
      borderRadius: 4,
      color: 'white',
      font: {
        weight: 'bold'
      },
      formatter: function (value, context) {
        return Math.round(value) + '%';
      },
      display: function (context) {
        return (context.dataset.level === 'manager' && !context.dataset.isComparisonData);
      }
    }
  },
  legend: {
    display: true,
    labels: {
      usePointStyle: true,
      generateLabels: function (chart) {
        var data = chart.data;
        if (data.datasets.length) {
          return data.datasets.map(function (dataset, i) {
            return {
              text: dataset.label,
              pointStyle: 'line',
              strokeStyle: dataset.borderColor,
              index: i,
              lineDash: dataset.borderDash
            };
          });
        } else {
          return [];
        }
      }
    }
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 6,
        min: 0,
        max: 100
      }
    }]
  }
}

export { lineChartOptions };