const barChartOptions = {
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

export { barChartOptions };