export interface Fairings {
  reused?: boolean;
  recovery_attempt?: boolean;
  recovered?: boolean;
  ships: string[];
}

export interface Patch {
  small: string;
  large: string;
}

export interface Reddit {
  campaign: string;
  launch: string;
  media: string;
  recovery: string;
}

export interface Flickr {
  small: string[];
  original: string[];
}

export interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

export interface Failure {
  time: number;
  altitude?: number;
  reason: string;
}

export interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success?: boolean;
  landing_type: string;
  landpad: string;
}

export interface LaunchesResponse {
  fairings: Fairings;
  links: Links;
  static_fire_date_utc?: Date;
  static_fire_date_unix?: number;
  tbd: boolean;
  net: boolean;
  window?: number;
  rocket: string;
  success: boolean;
  details: string;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  auto_update: boolean;
  launch_library_id: string;
  failures: Failure[];
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: Date;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  id: string;
}

export interface Height {
  meters: number;
  feet: number;
}

export interface Diameter {
  meters: number;
  feet: number;
}

export interface Mass {
  kg: number;
  lb: number;
}

export interface ThrustSeaLevel {
  kN: number;
  lbf: number;
}

export interface FirstStageThrustVacuum {
  kN: number;
  lbf: number;
}

export interface FirstStage {
  thrust_sea_level: ThrustSeaLevel;
  thrust_vacuum: FirstStageThrustVacuum;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec?: number;
}

export interface Thrust {
  kN: number;
  lbf: number;
}

export interface CompositeHeight {
  meters?: number;
  feet?: number;
}

export interface CompositeDiameter {
  meters?: number;
  feet?: number;
}

export interface CompositeFairing {
  height: CompositeHeight;
  diameter: CompositeDiameter;
}

export interface Payloads {
  composite_fairing: CompositeFairing;
  option_1: string;
}

export interface SecondStage {
  thrust: Thrust;
  payloads: Payloads;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec?: number;
}

export interface Isp {
  sea_level: number;
  vacuum: number;
}

export interface EngineThrustSeaLevel {
  kN: number;
  lbf: number;
}

export interface EngineThrustVacuum {
  kN: number;
  lbf: number;
}

export interface Engines {
  isp: Isp;
  thrust_sea_level: EngineThrustSeaLevel;
  thrust_vacuum: EngineThrustVacuum;
  number: number;
  type: string;
  version: string;
  layout: string;
  engine_loss_max?: number;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: number;
}

export interface LandingLegs {
  number: number;
  material: string;
}

export interface PayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

export interface RocketsResponse {
  height: Height;
  diameter: Diameter;
  mass: Mass;
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: LandingLegs;
  payload_weights: PayloadWeight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}
