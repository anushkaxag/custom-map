import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

// Adding "implements Mappable", makes sure
// class user satisfies all the properties required by Mappable interface
// sets up direct dependency between User and customMap class
export class User implements Mappable {
  name: string;
  location: {
    //randomly generate latitude and longitude for mapping user
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
