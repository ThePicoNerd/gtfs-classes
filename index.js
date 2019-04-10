class Coordinate {
  constructor({ lat, lon }) {
    this.lat = lat;
    this.lon = lon;
  }
}

class Agency {
  constructor({
    agency_id = null,
    agency_name,
    agency_url,
    agency_timezone,
    agency_lang = null,
    agency_phone = null,
    agency_fare_url = null,
    agency_email = null
  }) {
    this.agency_id = agency_id;
    this.agency_name = agency_name;
    this.agency_url = agency_url;
    this.agency_timezone = agency_timezone;
    this.agency_lang = agency_lang;
    this.agency_phone = agency_phone;
    this.agency_fare_url = agency_fare_url;
    this.agency_email = agency_email;
  }

  get json() {
    return {
      agency_id: this.agency_id,
      agency_name: this.agency_name,
      agency_url: this.agency_url,
      agency_timezone: this.agency_timezone,
      agency_lang: this.agency_lang,
      agency_phone: this.agency_phone,
      agency_fare_url: this.agency_fare_url,
      agency_email: this.agency_email
    };
  }
}

exports.Agency = Agency;

class Stop {
  constructor({
    stop_id,
    stop_code = null,
    stop_name,
    stop_desc = null,
    stop_lat,
    stop_lon,
    zone_id = null,
    stop_url = null,
    location_type = 0,
    parent_station = null,
    stop_timezone = null,
    wheelchair_boarding = 0,
    platform_code = null
  }) {
    this.stop_id = stop_id;
    this.stop_code = stop_code;
    this.stop_name = stop_name;
    this.stop_desc = stop_desc;
    this.stop_lat = stop_lat;
    this.stop_lon = stop_lon;
    this.zone_id = zone_id;
    this.stop_url = stop_url;
    this.location_type = location_type;
    this.parent_station = parent_station;
    this.stop_timezone = stop_timezone;
    this.wheelchair_boarding = wheelchair_boarding;
    this.platform_code = platform_code;

    this.location = new Coordinate({ lat: stop_lat, lon: stop_lon });
  }

  get json() {
    return {
      stop_id: this.stop_id,
      stop_code: this.stop_code,
      stop_name: this.stop_name,
      stop_desc: this.stop_desc,
      stop_lat: this.stop_lat,
      stop_lon: this.stop_lon,
      zone_id: this.zone_id,
      stop_url: this.stop_url,
      location_type: this.location_type,
      parent_station: this.parent_station,
      stop_timezone: this.stop_timezone,
      wheelchair_boarding: this.wheelchair_boarding,
      platform_code: this.platform_code
    };
  }
}

exports.Stop = Stop;

class Route {
  constructor({
    route_id,
    agency_id,
    route_short_name = null,
    route_long_name = null,
    route_desc = null,
    route_type,
    route_url = null,
    route_color = null,
    route_text_color = null,
    route_sort_order = null
  }) {
    this.route_id = route_id;
    this.agency_id = agency_id;
    this.route_short_name = route_short_name;
    this.route_long_name = route_long_name;
    this.route_desc = route_desc;
    this.route_type = route_type;
    this.route_url = route_url;
    this.route_color = route_color;
    this.route_text_color = route_text_color;
    this.route_sort_order = route_sort_order;
  }

  get json() {
    return {
      route_id: this.route_id,
      agency_id: this.agency_id,
      route_short_name: this.route_short_name,
      route_long_name: this.route_long_name,
      route_desc: this.route_desc,
      route_type: this.route_type,
      route_url: this.route_url,
      route_color: this.route_color,
      route_text_color: this.route_text_color,
      route_sort_order: this.route_sort_order
    };
  }
}

exports.Route = Route;

class Trip {
  constructor({
    route_id,
    service_id,
    trip_id,
    trip_headsign = null,
    trip_short_name = null,
    direction_id = null,
    block_id = null,
    wheelchair_accessible = 0,
    bikes_allowed = 0
  }) {
    this.route_id = route_id;
    this.service_id = service_id;
    this.trip_id = trip_id;
    this.trip_headsign = trip_headsign;
    this.trip_short_name = trip_short_name;
    this.direction_id = direction_id;
    this.block_id = block_id;
    this.wheelchair_accessible = wheelchair_accessible;
    this.bikes_allowed = bikes_allowed;
  }

  get json() {
    return {
      route_id: this.route_id,
      service_id: this.service_id,
      trip_id: this.trip_id,
      trip_headsign: this.trip_headsign,
      trip_short_name: this.trip_short_name,
      direction_id: this.direction_id,
      block_id: this.block_id,
      wheelchair_accessible: this.wheelchair_accessible,
      bikes_allowed: this.bikes_allowed
    };
  }
}

exports.Trip = Trip;

class StopTime {
  constructor({
    trip_id,
    arrival_time,
    departure_time,
    stop_id,
    stop_sequence,
    stop_headsign = null,
    pickup_type = 0,
    drop_off_type = 0,
    shape_dist_traveled = null,
    timepoint = null
  }) {
    this.trip_id = trip_id;
    this.arrival_time = arrival_time;
    this.departure_time = departure_time;
    this.stop_id = stop_id;
    this.stop_sequence = stop_sequence;
    this.stop_headsign = stop_headsign;
    this.pickup_type = pickup_type;
    this.drop_off_type = drop_off_type;
    this.shape_dist_traveled = shape_dist_traveled;
    this.timepoint = timepoint;
  }

  get json() {
    return {
      trip_id: this.trip_id,
      arrival_time: this.arrival_time,
      departure_time: this.departure_time,
      stop_id: this.stop_id,
      stop_sequence: this.stop_sequence,
      stop_headsign: this.stop_headsign,
      pickup_type: this.pickup_type,
      drop_off_type: this.drop_off_type,
      shape_dist_traveled: this.shape_dist_traveled,
      timepoint: this.timepoint
    };
  }
}

exports.StopTime = StopTime;

class Calendar {
  constructor({
    service_id,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    start_date,
    end_date
  }) {
    this.service_id = service_id;
    this.monday = monday;
    this.tuesday = tuesday;
    this.wednesday = wednesday;
    this.thursday = thursday;
    this.friday = friday;
    this.saturday = saturday;
    this.sunday = sunday;
    this.start_date = start_date;
    this.end_date = end_date;
  }

  get json() {
    return {
      service_id: this.service_id,
      monday: this.monday,
      tuesday: this.tuesday,
      wednesday: this.wednesday,
      thursday: this.thursday,
      friday: this.friday,
      saturday: this.saturday,
      sunday: this.sunday,
      start_date: this.start_date,
      end_date: this.end_date
    };
  }
}

exports.Calendar = Calendar;

class CalendarDate {
  constructor({ service_id, date, exception_type }) {
    this.service_id = service_id;
    this.date = date;
    this.exception_type = exception_type;
  }

  get json() {
    return {
      service_id: this.service_id,
      date: this.date,
      exception_type: this.exception_type
    };
  }
}

exports.CalendarDate = CalendarDate;

const files = {
  "agency.txt": Agency,
  "stops.txt": Stop,
  "routes.txt": Route,
  "trips.txt": Trip,
  "stop_times.txt": StopTime,
  "calendar.txt": Calendar,
  "calendar_dates.txt": CalendarDate
};

exports.files = files;

const keys = [
  "agency_id",
  "stop_id",
  "zone_id",
  "route_id",
  "service_id",
  "trip_id",
  "block_id",
  "shape_id",
  "fare_id",
  "origin_id",
  "destination_id",
  "contains_id"
];

exports.keys = keys;

/**
 * @param {string} filename
 */
function getFileKeys(filename) {
  let file = new (getClass(filename))({});
  return Object.keys(file.json);
}

exports.getFileKeys = getFileKeys;
