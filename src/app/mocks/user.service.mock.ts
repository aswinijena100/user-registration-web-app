import { Injectable } from "@angular/core";
import { ActivationEnd } from "@angular/router";

@Injectable()
export class UserServiceMock {
  constructor() {}

  getLocation(): Array<{}> {
    return [
      {
        id: 10,
        name: "user1",
        customId: 1,
        description: "Am testing",
        status: "active",
        studies: [],
        studiesCount: 1,
      },
    ];
  }
}