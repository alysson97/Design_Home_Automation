import { DeviceContract  } from "../contracts/device.contract.js";

export class ElginLightAdapter implements DeviceContract {
  id: number;
  name: string;
  private isActive: boolean = false;

  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }

  async turnOn(): Promise<void>{
    
    // Aqui virá a lógica específica para ligar o dispositivo Elgin Light
    this.isActive = true;
    console.log(`${this.name} is turned ON via Elgin Light.`);
  }

  async turnOff(): Promise<void>{
    
    // Aqui virá a lógica específica para desligar o dispositivo Elgin Light
    this.isActive = false;
    console.log(`${this.name} is turned OFF via Elgin Light.`);
  }

  getStatus(): Promise<"on" | "off"> {
    console.log(`${this.isActive ? "ON" : "OFF"} - status requested via Elgin Light.`);
    return Promise.resolve(this.isActive ? "on" : "off");
  }
}