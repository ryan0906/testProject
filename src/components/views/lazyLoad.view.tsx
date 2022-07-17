import ReactLoadable from 'react-loadable';

export const VehicleStatusView = ReactLoadable({
  loader: async () => await import(/* webpackChunkName: 'VehicleStatus.view' */ '@views/VehicleStatus.view'),
  loading: () => { return null }
});

export const EventLogView = ReactLoadable({
  loader: async () => await import(/* webpackChunkName: 'EventLog.view' */ '@views/EventLog.view'),
  loading: () => { return null }
});
