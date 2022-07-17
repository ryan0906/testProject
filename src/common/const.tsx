export const AuthKey = "62cc7735114ed86b4cd5b9ca";

export enum View {
  vehicleStatus = 'vehicleStatus',
  eventLog = 'eventLog'
};

export const AlertLevelMap: { [key: number]: string } = {
  1: 'NORMAL/NONE',
  2: 'INFO',
  3: 'ADVISORY/MEDIUM',
  4: 'WARNING/HIGH',
  5: 'CRITICAL',
  6: 'EMERGENCY'
};