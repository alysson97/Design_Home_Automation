import { DeviceContract } from "../contracts/device.contract.js";
import { AlexaAdapter } from "../adapters/alexa.adapter.js";
import { ElginLightAdapter } from "../adapters/elgin_light.adapter.js";

export class DeviceFactory {

  static make(brand: string, id: number, name: string): DeviceContract {
    if(brand === "alexa")
      return new AlexaAdapter(id, name);
    if(brand === "elgin_light")
      return new ElginLightAdapter(id, name);

    throw new Error(`Device brand ${brand} is not supported.`);
  }
}