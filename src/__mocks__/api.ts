import { LaunchesResponse, RocketsResponse } from "@/utils/spacexAPI";

export const launchFailure = {
  time: 33,
  altitude: null,
  reason: "merlin engine failure",
};

export const launchFailureBeforeLaunch = {
  time: -165180,
  altitude: 0,
  reason:
    "buckled liner in several of the COPV tanks, causing perforations that allowed liquid and/or solid oxygen to accumulate underneath the lining, which was ignited by friction.",
};

export const launchFailureOnAltitude = {
  time: 139,
  altitude: 40,
  reason:
    "helium tank overpressure lead to the second stage LOX tank explosion",
};

export const failedLaunchMock: LaunchesResponse = {
  fairings: {
    reused: false,
    recovery_attempt: false,
    recovered: false,
    ships: [],
  },
  links: {
    patch: {
      small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
      large: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
    },
    reddit: {
      campaign: null,
      launch: null,
      media: null,
      recovery: null,
    },
    flickr: {
      small: [],
      original: [],
    },
    presskit: null,
    webcast: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
    youtube_id: "0a_00nJ_Y88",
    article:
      "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
    wikipedia: "https://en.wikipedia.org/wiki/DemoSat",
  },
  static_fire_date_utc: "2006-03-17T00:00:00.000Z",
  static_fire_date_unix: 1142553600,
  tbd: false,
  net: false,
  window: 0,
  rocket: "5e9d0d95eda69955f709d1eb",
  success: false,
  details: "Engine failure at 33 seconds and loss of vehicle",
  crew: [],
  ships: [],
  capsules: [],
  payloads: ["5eb0e4b5b6c3bb0006eeb1e1"],
  launchpad: "5e9e4502f5090995de566f86",
  auto_update: true,
  launch_library_id: null,
  failures: [launchFailure],
  flight_number: 1,
  name: "FalconSat",
  date_utc: "2006-03-24T22:30:00.000Z",
  date_unix: 1143239400,
  date_local: "2006-03-25T10:30:00+12:00",
  date_precision: "hour",
  upcoming: false,
  cores: [
    {
      core: "5e9e289df35918033d3b2623",
      flight: 1,
      gridfins: false,
      legs: false,
      reused: false,
      landing_attempt: false,
      landing_success: null,
      landing_type: null,
      landpad: null,
    },
  ],
  id: "5eb87cd9ffd86e000604b32a",
};

export const successfulLaunchMock: LaunchesResponse = {
  fairings: null,
  links: {
    patch: {
      small: "https://images2.imgbox.com/0b/33/2eLGEejP_o.png",
      large: "https://images2.imgbox.com/52/09/eNvilptL_o.png",
    },
    reddit: {
      campaign: null,
      launch: null,
      media: null,
      recovery: null,
    },
    flickr: {
      small: [],
      original: [],
    },
    presskit: "https://www.nasa.gov/pdf/694166main_SpaceXCRS-1PressKit.pdf",
    webcast: "https://www.youtube.com/watch?v=-Vk3hiV_zXU",
    youtube_id: "-Vk3hiV_zXU",
    article:
      "https://www.nasa.gov/mission_pages/station/main/spacex-crs1-target.html",
    wikipedia: "https://en.wikipedia.org/wiki/SpaceX_CRS-1",
  },
  static_fire_date_utc: "2012-09-29T00:00:00.000Z",
  static_fire_date_unix: 1348876800,
  tbd: false,
  net: false,
  window: 0,
  rocket: "5e9d0d95eda69973a809d1ec",
  success: true,
  details:
    "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions.",
  crew: [],
  ships: ["5ea6ed2d080df4000697c902"],
  capsules: ["5e9e2c5bf3591835983b2666"],
  payloads: ["5eb0e4bab6c3bb0006eeb1eb", "5eb0e4bab6c3bb0006eeb1ec"],
  launchpad: "5e9e4501f509094ba4566f84",
  auto_update: true,
  launch_library_id: null,
  failures: [],
  flight_number: 9,
  name: "CRS-1",
  date_utc: "2012-10-08T00:35:00.000Z",
  date_unix: 1349656500,
  date_local: "2012-10-08T20:35:00-04:00",
  date_precision: "hour",
  upcoming: false,
  cores: [
    {
      core: "5e9e289ff3591821a73b262b",
      flight: 1,
      gridfins: false,
      legs: false,
      reused: false,
      landing_attempt: false,
      landing_success: null,
      landing_type: null,
      landpad: null,
    },
  ],
  id: "5eb87ce0ffd86e000604b332",
};

export const futureLaunchMock: LaunchesResponse = {
  fairings: {
    reused: null,
    recovery_attempt: null,
    recovered: null,
    ships: [],
  },
  links: {
    patch: {
      small: null,
      large: null,
    },
    reddit: {
      campaign: null,
      launch: null,
      media: null,
      recovery: null,
    },
    flickr: {
      small: [],
      original: [],
    },
    presskit: null,
    webcast: null,
    youtube_id: null,
    article: null,
    wikipedia: null,
  },
  static_fire_date_utc: null,
  static_fire_date_unix: null,
  tbd: false,
  net: false,
  window: null,
  rocket: "5e9d0d95eda69973a809d1ec",
  success: null,
  details: null,
  crew: [],
  ships: [],
  capsules: [],
  payloads: ["608d3d7fffcee803616cbde7"],
  launchpad: "5e9e4501f509094ba4566f84",
  auto_update: true,
  launch_library_id: null,
  failures: [],
  flight_number: 132,
  name: "NROL-85",
  date_utc: "2021-06-01T00:00:00.000Z",
  date_unix: 1622505600,
  date_local: "2021-05-31T20:00:00-04:00",
  date_precision: "month",
  upcoming: true,
  cores: [
    {
      core: null,
      flight: null,
      gridfins: null,
      legs: null,
      reused: null,
      landing_attempt: null,
      landing_success: null,
      landing_type: null,
      landpad: null,
    },
  ],
  id: "608d3d23ffcee803616cbde2",
};

export const firstRocketMock: RocketsResponse = {
  height: {
    meters: 22.25,
    feet: 73,
  },
  diameter: {
    meters: 1.68,
    feet: 5.5,
  },
  mass: {
    kg: 30146,
    lb: 66460,
  },
  first_stage: {
    thrust_sea_level: {
      kN: 420,
      lbf: 94000,
    },
    thrust_vacuum: {
      kN: 480,
      lbf: 110000,
    },
    reusable: false,
    engines: 1,
    fuel_amount_tons: 44.3,
    burn_time_sec: 169,
  },
  second_stage: {
    thrust: {
      kN: 31,
      lbf: 7000,
    },
    payloads: {
      composite_fairing: {
        height: {
          meters: 3.5,
          feet: 11.5,
        },
        diameter: {
          meters: 1.5,
          feet: 4.9,
        },
      },
      option_1: "composite fairing",
    },
    reusable: false,
    engines: 1,
    fuel_amount_tons: 3.38,
    burn_time_sec: 378,
  },
  engines: {
    isp: {
      sea_level: 267,
      vacuum: 304,
    },
    thrust_sea_level: {
      kN: 420,
      lbf: 94000,
    },
    thrust_vacuum: {
      kN: 480,
      lbf: 110000,
    },
    number: 1,
    type: "merlin",
    version: "1C",
    layout: "single",
    engine_loss_max: 0,
    propellant_1: "liquid oxygen",
    propellant_2: "RP-1 kerosene",
    thrust_to_weight: 96,
  },
  landing_legs: {
    number: 0,
    material: null,
  },
  payload_weights: [
    {
      id: "leo",
      name: "Low Earth Orbit",
      kg: 450,
      lb: 992,
    },
  ],
  flickr_images: [
    "https://imgur.com/DaCfMsj.jpg",
    "https://imgur.com/azYafd8.jpg",
  ],
  name: "Falcon 1",
  type: "rocket",
  active: false,
  stages: 2,
  boosters: 0,
  cost_per_launch: 6700000,
  success_rate_pct: 40,
  first_flight: "2006-03-24",
  country: "Republic of the Marshall Islands",
  company: "SpaceX",
  wikipedia: "https://en.wikipedia.org/wiki/Falcon_1",
  description:
    "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
  id: "5e9d0d95eda69955f709d1eb",
};

export const inDevelopmentRocketMock: RocketsResponse = {
  height: {
    meters: 118,
    feet: 387,
  },
  diameter: {
    meters: 9,
    feet: 30,
  },
  mass: {
    kg: 1335000,
    lb: 2943000,
  },
  first_stage: {
    thrust_sea_level: {
      kN: 128000,
      lbf: 28775544,
    },
    thrust_vacuum: {
      kN: 138000,
      lbf: 31023634,
    },
    reusable: true,
    engines: 37,
    fuel_amount_tons: 3300,
    burn_time_sec: null,
  },
  second_stage: {
    thrust: {
      kN: 1957,
      lbf: 440000,
    },
    payloads: {
      composite_fairing: {
        height: {
          meters: null,
          feet: null,
        },
        diameter: {
          meters: null,
          feet: null,
        },
      },
      option_1: "Spaceship",
    },
    reusable: true,
    engines: 6,
    fuel_amount_tons: 1200,
    burn_time_sec: null,
  },
  engines: {
    isp: {
      sea_level: 330,
      vacuum: 380,
    },
    thrust_sea_level: {
      kN: 1780,
      lbf: 400000,
    },
    thrust_vacuum: {
      kN: 1960,
      lbf: 440000,
    },
    number: 37,
    type: "raptor",
    version: "",
    layout: null,
    engine_loss_max: null,
    propellant_1: "liquid oxygen",
    propellant_2: "liquid methane",
    thrust_to_weight: 107,
  },
  landing_legs: {
    number: 6,
    material: "stainless steel",
  },
  payload_weights: [
    {
      id: "leo",
      name: "Low Earth Orbit",
      kg: 150000,
      lb: 330000,
    },
    {
      id: "mars",
      name: "Mars Orbit",
      kg: 100000,
      lb: 220000,
    },
    {
      id: "moon",
      name: "Moon Orbit",
      kg: 100000,
      lb: 220000,
    },
  ],
  flickr_images: [
    "https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg",
    "https://live.staticflickr.com/65535/48953946911_e60c5bcc5c_b.jpg",
    "https://live.staticflickr.com/65535/48954138922_9c42173f08_b.jpg",
    "https://live.staticflickr.com/65535/48953947006_313f01ec93_b.jpg",
  ],
  name: "Starship",
  type: "rocket",
  active: false,
  stages: 2,
  boosters: 0,
  cost_per_launch: 7000000,
  success_rate_pct: 0,
  first_flight: "2021-12-01",
  country: "United States",
  company: "SpaceX",
  wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Starship",
  description:
    "Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.",
  id: "5e9d0d96eda699382d09d1ee",
};
