const progress = {
  'step': 0,
  'loadingTime': 0.1,
  'sliderStepSize': 0.1,
  'sliderMaxValue': 10,
  'sliderMinValue': 0.1,
  'sliderDisabled': false,
  'selectedbandwidthType': -1,
  'libraryDialogOpened': false,
  'libraryDialogData': null,
  'budget': '',
  'actualBudget': 0,
  'visibilityFilter': 'SHOW_ALL_INCLUDED',
  'searchedString': '',
  'bandwidthTypes': [
    {
      name: 'GPRS (50 Kbps)',
      speed: 50,
      latency: 500
    },
    {
      name: 'Regular 2G (250 Kbps)',
      speed: 250,
      latency: 300
    },
    {
      name: 'Good 2G (450 Kbps)',
      speed: 450,
      latency: 150
    },
    {
      name: 'Regular 3G (750 Kbps)',
      speed: 750,
      latency: 100

    },
    {
      name: 'Good 3G - Fast (1.5 Mbps)',
      speed: 1500,
      latency: 40

    },
    {
      name: 'Regular 4G - Fast (4.0 Mbps)',
      speed: 4000,
      latency: 20

    },
    {
      name: 'DSL (2.0 Mbps)',
      speed: 2000,
      latency: 5
    },
    {
      name: 'WiFi (30.0 Mbps)',
      speed: 30000,
      latency: 2
    },
  ],


};


export default progress;
