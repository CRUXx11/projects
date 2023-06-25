var element = document.getElementById("kt_apexcharts_1");

var height = parseInt(KTUtil.css(element, "height"));
var labelColor = KTUtil.getCssVariableValue("--bs-gray-500");
var borderColor = KTUtil.getCssVariableValue("--bs-gray-200");
var baseColor = KTUtil.getCssVariableValue("--bs-warning");
var secondaryColor = KTUtil.getCssVariableValue("--bs-gray-300");

var options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105],
    },
  ],
  chart: {
    fontFamily: "inherit",
    type: "bar",
    height: height,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: ["30%"],
      endingShape: "rounded",
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: labelColor,
        fontSize: "12px",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  states: {
    normal: {
      filter: {
        type: "none",
        value: 0,
      },
    },
    hover: {
      filter: {
        type: "none",
        value: 0,
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
        value: 0,
      },
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
    },
    y: {
      formatter: function (val) {
        return "$" + val + " thousands";
      },
    },
  },
  colors: [baseColor, secondaryColor],
  grid: {
    borderColor: borderColor,
    strokeDashArray: 4,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
};

var chart = new ApexCharts(element, options);
chart.render();

var element1 = document.getElementById("kt_apexcharts_5");

var height = parseInt(KTUtil.css(element1, "height"));
var labelColor = KTUtil.getCssVariableValue("--bs-gray-500");
var borderColor = KTUtil.getCssVariableValue("--bs-gray-200");

var baseColor = KTUtil.getCssVariableValue("--bs-primary");
var baseLightColor = KTUtil.getCssVariableValue("--bs-light-primary");
var secondaryColor = KTUtil.getCssVariableValue("--bs-info");

var options1 = {
  series: [
    {
      name: "Net Profit",
      type: "bar",
      stacked: true,
      data: [40, 50, 65, 70, 50, 30],
    },
    {
      name: "Revenue",
      type: "bar",
      stacked: true,
      data: [20, 20, 25, 30, 30, 20],
    },
    {
      name: "Expenses",
      type: "area",
      data: [50, 80, 60, 90, 50, 70],
    },
  ],
  chart: {
    fontFamily: "inherit",
    stacked: true,
    height: height,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      stacked: true,
      horizontal: false,
      endingShape: "rounded",
      columnWidth: ["12%"],
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: labelColor,
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    max: 120,
    labels: {
      style: {
        colors: labelColor,
        fontSize: "12px",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  states: {
    normal: {
      filter: {
        type: "none",
        value: 0,
      },
    },
    hover: {
      filter: {
        type: "none",
        value: 0,
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
        value: 0,
      },
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
    },
    y: {
      formatter: function (val) {
        return "$" + val + " thousands";
      },
    },
  },
  colors: [baseColor, secondaryColor, baseLightColor],
  grid: {
    borderColor: borderColor,
    strokeDashArray: 4,
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

var chart1 = new ApexCharts(element1, options1);
chart1.render();
