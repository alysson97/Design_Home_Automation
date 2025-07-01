import type { HttpContext } from '@adonisjs/core/http';
import { DeviceFactory } from "../domain/automation/factories/device.factory.js";

export default class DeviceController {

  // Fazer algo
  public async execute({ params, request, response }: HttpContext) {
    // Exemplo de uso da DeviceFactory para criar um dispositivo e executar ações
    const { brand, name, action } = request.only(['brand', 'name', 'action']);
    const deviceId = params.id;

    try{
      const device = DeviceFactory.make(brand, Number(deviceId), name);
      if(action === 'turnOn')
        await device.turnOn();
      if(action === 'turnOff')
        await device.turnOff();

      return response.ok({ status: await device.getStatus(), message: `Success ! ${name} ${action}` });

    }catch(error){
      return response.badRequest({ error: error.message });
    }
  }

}