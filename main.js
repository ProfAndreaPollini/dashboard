import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'



const TESTER = document.querySelector('#tester');
console.log(TESTER);
	Plotly.newPlot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
    margin: { t: 25, r: 25, l: 25, b: 25 }} );

let data_base = 
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: 0,
      title: { text: "Pannello Pilota" },
      type: "indicator",
      mode: "gauge+number",
      gauge:{
        axis: { range: [null, 100], tickwidth: 1, tickcolor: "darkblue" },
      bar: { color: "green" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "gray",
      steps: [
        { range: [0, 20], color: "cyan" },
        { range: [20, 60], color: "lightgreen" },
        { range: [60, 80], color: "orange" },
        { range: [80, 100], color: "LightCoral" }
      ],
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 1,
        value: 95
      }
      }
    }
  ;

  let data = [{...data_base,title:{
    text: "NTC1"
  }}];
  console.log(data);
  
  var layout = {  margin: { t: 50, r: 35, l: 30, b: 10 }, padding: 10};
  Plotly.newPlot('ntc1', data, layout);
  let data2 = [{...data_base,title:{
    text: "NTC2"
  }}];
  Plotly.newPlot('ntc2', data2, layout);
  let data3 = [{...data_base,title:{
    text: "NTC3"
  }}];
  Plotly.newPlot('ntc3', data3, layout);
  let data4 = [{...data_base,title:{
    text: "NTC4"
  }}];
  Plotly.newPlot('ntc4', data4, layout);
  let data5 = [{...data_base,title:{
    text: "NTC5"
  }}];
  Plotly.newPlot('ntc5', data5, layout);
  let data6 = [{...data_base,title:{
    text: "NTC6"
  }}];
  Plotly.newPlot('ntc6', data6, layout);
  let data7 = [{...data_base,title:{
    text: "NTC7"
  }}];
  Plotly.newPlot('ntc7', data7, layout);
  let data8 = [{...data_base,title:{
    text: "NTC8"
  }}];
  Plotly.newPlot('ntc8', data8, layout);
  let data9 = [{...data_base,title:{
    text: "NTC9"
  }}];
  Plotly.newPlot('ntc9', data9, layout);
  let data10 = [{...data_base,title:{
    text: "NTC10"
  }}];
  Plotly.newPlot('ntc10', data10, layout);
  let data11 = [{...data_base,title:{
    text: "NTC11"
  }}];
  Plotly.newPlot('ntc11', data11, layout);


  let datatpp = [{...data_base,title:{
    text: "Pannello Pilota"
  }}];
  Plotly.newPlot("tpp",datatpp,layout);

  let datatamb = [{...data_base,title:{
    text: "Temperatura Ambiente"
  }}];
  Plotly.newPlot("tamb",datatamb,layout);


  var interval = setInterval(function() {
    Plotly.update('ntc1', {value:Math.random()*100}, {}, [0])
    Plotly.update('ntc2', {value:Math.random()*100}, {}, [0])
    Plotly.update('ntc3', {value:Math.random()*100}, {}, [0])
    Plotly.update('ntc4', {value:Math.random()*100}, {}, [0])
    Plotly.update('ntc5', {value:Math.random()*100}, {}, [0])
    Plotly.update('ntc6', {value:Math.random()*100}, {}, [0])
    Plotly.update('ntc7', {value:Math.random()*100}, {}, [0])
    Plotly.update('ntc8', {value:Math.random()*100}, {}, [0])
    Plotly.update('ntc9', {value:Math.random()*100}, {}, [0])
    Plotly.update('ntc10', {value:Math.random()*100}, {}, [0])
    Plotly.update('ntc11', {value:Math.random()*100}, {}, [0])
    
    }, 800);
  