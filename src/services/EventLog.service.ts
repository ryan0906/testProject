import EventLogResource from "@resources/EventLog.resource";
import { notify } from "./Notify.service";

const EventLogService = {
  getAll: async (): Promise<EventLog[]> => {
    try {
    const logs: EventLog[] = await EventLogResource.getEvents();
    return logs;
    } catch (err: any) {
      notify('error', `Error ${err.status}`, err.message);
      return [];
    }
  },
};

export default EventLogService;