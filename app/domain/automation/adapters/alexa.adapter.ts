import { DeviceContract } from "../contracts/device.contract.js";

export class AlexaAdapter implements DeviceContract {
  id: number;
  name: string;
  private isActive: boolean = false;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  async turnOn(): Promise<void>{
    
    // Aqui virá a lógica específica para ligar o dispositivo via Alexa

    this.isActive = true;
    console.log(`${this.name} is turned ON via Alexa.`);
  }
  async turnOff(): Promise<void>{

    // Aqui virá a lógica específica para desligar o dispositivo via Alexa
    
    this.isActive = false;
    console.log(`${this.name} is turned OFF via Alexa.`);
  }

  getStatus(): Promise<"on" | "off"> {
    console.log(`${this.isActive ? "ON" : "OFF"} - status requested via Alexa.`);
    return Promise.resolve(this.isActive ? "on" : "off");
  }
}