import 'requisicao.js';
// new Morris.Line({
//     // ID of the element in which to draw the chart.
//     element: 'grafico',
    
//     data: [
//       { year: '2018', value: 642 },
//       { year: '2019', value: 845 },
//       { year: '2020', value: 1045 },
//       { year: '2021', value: 5 },
//       { year: '2022', value: 20 }
//     ],
//     xkey: 'year',

//     ykeys: ['value'],

//     labels: ['Value']
//   });

  new Morris.Bar({
    // ID of the element in which to draw the chart.
    element: 'grafico',
    
    data: [],
    xkey: 'nomes',

    ykeys: ['valores'],
    
    labels: ['valores']
  });

//   new Morris.Donut({
//     // ID of the element in which to draw the chart.
//     element: 'grafico',
    
//     data: [
//       { year: '2018', value: 642 },
//       { year: '2019', value: 845 },
//       { year: '2020', value: 1045 },
//       { year: '2021', value: 5 },
//       { year: '2022', value: 20 }
//     ],
//     xkey: 'year',

//     ykeys: ['value'],
    
//     labels: ['Value']
//   });

//   new Morris.Area({
//     // ID of the element in which to draw the chart.
//     element: 'grafico',
    
//     data: [
//       { year: '2018', value: 642 },
//       { year: '2019', value: 845 },
//       { year: '2020', value: 1045 },
//       { year: '2021', value: 5 },
//       { year: '2022', value: 20 }
//     ],
//     xkey: 'year',

//     ykeys: ['value'],
    
//     labels: ['Value']
//   });