export interface DeviceContract {
  id: number;
  name: string;

  turnOn(): Promise<void>;
  turnOff(): Promise<void>;
  getStatus(): Promise<'on' | 'off'>;
}