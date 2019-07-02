var monthlyDeepSummaryLineGraph = document.getElementById('monthlyDeepSummaryLineGraph').getContext('2d');
var getMonthlyDeepSummaryLineGraph = new Chart(monthlyDeepSummaryLineGraph, {
   type: 'line',
   data: {
      labels: ["Starting Assets", "Label 2", "Label 3"],
      datasets: [{
         label: 'Legend',
         data: [{
        //STARTING POINT -- monthlyTotal
            x: 0,
            y: monthlyStart,
         }, {
            x: 0,
            y: 10
         }, {
            x: 10,
            y: 5
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }, {
            x: -10,
            y: 0,
         }
        ]
      }]
   },
   options: {
      tooltips: {
         callbacks: {
            label: function(tooltipItem, data) {
               var label = data.labels[tooltipItem.index];
               return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
            }
         }
      }
   }
});