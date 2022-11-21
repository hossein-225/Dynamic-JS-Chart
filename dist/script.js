data = [10, 90, 20, 30, 60];
categories = [1, 2, 3, 4, 5];

var options = {
  series: [
    {
      data: data.slice(),
    },
  ],
  chart: {
    id: "realtime",
    height: 350,
    type: "line",
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 1000,
      },
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  ataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Dynamic Updating Chart",
    align: "left",
  },
  markers: {
    size: 0,
  },
  xaxis: {
    categories: categories,
  },
  yaxis: {
    max: 100,
  },
  legend: {
    show: false,
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

window.setInterval(function () {
  getRandomIntData(10, 90);
  getRandomIntcategories(5, 100);

  chart.updateSeries([
    {
      data: data,
      categories: categories,
    },
  ]);
}, 1000);

function getRandomIntData(min, max) {
  data.shift();
  min = Math.ceil(min);
  max = Math.floor(max);
  data.push(Math.floor(Math.random() * (max - min) + min));
  return data;
}

function getRandomIntcategories(min, max) {
  categories.shift();
  min = Math.ceil(min);
  max = Math.floor(max);
  categories.push(Math.floor(Math.random() * (max - min) + min));
  return categories;
}
