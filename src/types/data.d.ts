type ErrorResponse = {
  status: number,
  data: any,
  message: string
}

type VehicleBrief = [string, string];
/*
  <[Vehicle Id, Update Time]>
  e.g. ['1ee09315-a37f-4e44-b943-1e3daea73cb9', '2022-07-16T06:26:19.054Z']
*/

type Vehicle = {
  ID: string,
  controlMode: string,
  health: number,
  inertialStates: {
    accel: Array<number>,
    axes: Array<number>,
    axesRate: Array<number>,
    location: Array<number>,
    speed: Array<number>
  },
  name: string,
  operatingStates: {
    currentRoute: string,
    currentWaypoint: number,
    energyUsageRate: number,
    remainingEnergy: number
  },
  state: number,
  status: number,
  updateTime: string,
  vehicleNumber: number
}

type EventLog = {
  ID: string,
  date: string,
  isResolve: boolean,
  level: number,
  msg: string,
  resolveDate: string
}