export class Weather {
  mainCondition: string;
  temperature: number;
  pressure: number;
  humidity: number;
  windspeed: number;
  city: string;
  country: string;

  constructor(obj?: any) {
    this.mainCondition = obj && obj.mainCondition || null;
    this.temperature = obj && obj.temperature || null;
    this.pressure = obj && obj.pressure || null;
    this.humidity = obj && obj.humidity || null;
    this.windspeed = obj && obj.windspeed || null;
    this.city = obj && obj.city || null;
    this.country = obj && obj.country || null;
  }
}
