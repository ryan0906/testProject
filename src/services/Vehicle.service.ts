import VehicleResource from "@resources/Vehicle.resource";
import { notify } from "./Notify.service";

const VehicleService = {
  getAll: async (): Promise<VehicleBrief[]>  => {
    try {
      const vcList: VehicleBrief[] = await VehicleResource.getAllVehicle();
      return vcList;
    } catch (err: any) {
      notify('error', `Error ${err.status}`, err.message);
      return [];
    }
  },
  getById: async (id: string): Promise<Vehicle | undefined> => {
    try {
      const vc: Vehicle = await VehicleResource.getVehicle(id);
      return vc;
    } catch (err: any) {
      notify('error', `Error ${err.status}`, err.message);
      return undefined;
    }
  }
};

export default VehicleService;