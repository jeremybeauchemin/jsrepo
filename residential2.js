
//Debut du controlleur
class ElevatorController {
  constructor(Number_Of_Floor, Number_Of_Elevator, Direction) {
    this.number_of_floor = Number_Of_Floor;
    this.number_of_Elevator = Number_Of_Elevator;
    this.direction = Elevator;
    console.log(Direction);
    console.log(ElevatorController);
    console.log(Controller);
  }

  //demande de L'assenceur
  RequestElevator(Number_OF_Floor, direction, number_Of_Elevator) {
    console.log(Number_OF_Floor, direction, number_Of_Elevator);
    this.FindElevator(Number_OF_Floor, direction);
    this.currentElevator = this.currentElevator[i];
    console.log(this.currentElevator);
  }
  //interieur
  RequestFloor(Elevator, Floor, Direction) {
    this.requestFloor = this.FloorList(Elevator, Number_OF_Floor);
    console.log(Elevator, Floor, Direction);
  }

  //trouver l'assenceurs
  FindElevator(Number_OF_Floor, Direction) {
    var Elevator;
    while (Elevator == undefined) {
      for (var i = 0; i < this.currentElevator; i++) {
        let currentElevator = this.elevator_list[i];
        if (Number_OF_Floor == currentElevator.current_floor) {
          if (
            this.currentElevator.status == "stopped" &&
            this.currentElevator.direction == Direction
          ) {
            console.log(this.currentElevator[i]);
            Elevator = this.currentElevator[i];
            return this.currentElevator[i];
          } 
          else if (this.currentElevator[i].status == "idle") {
            console.log(this.currentElevator[i]);
            Elevator = this.currentElevator[i];
            return this.currentElevator[i];
          }
        } 
        else if (Number_OF_Floor > this.currentElevator[i].current_floor) {
          if (
            this.currentElevator.status == "moving" &&
            this.currentElevator.direction == "up" &&
            this.currentElevator.direction == Direction
          ) {
            console.log(this.currentElevator);
            Elevator = this.currentElevator;
            return Elevator;
          } else if (this.currentElevator.status == "moving") {
            console.log(this.currentElevator[i]);
            Elevator = this.currentElevator;
            return Elevator;
          } else if (Number_OF_Floor < this.currentElevator[i].current_floor) {
            if (
              this.currentElevator[i].status == "moving" &&
              this.currentElevator[i].direction == "down"
            )
              if (this.currentElevator[i].direction == Direction) {
                console.log(this.currentElevator[i]);
                Elevator = this.currentElevator[i];
                return Elevator;
              } else if (this.currentElevator[i].Status == "moving") {
                console.log(this.currentElevator[i]);
                Elevator = this.currentElevator;
                return Elevator;
              } else {
                console.log(this.currentElevator[i]);
              }
          }
        }
      }
    }
  }
  //liste de toute les etage
  FloorList(Elevator, Number_OF_Floor) {
    Elevator.floor_List.push(Number_OF_Floor);
    Elevator.floor_List.sort();
    if (Elevator == up) elevator.floor_list.sort;
  }
  SortFloorList(FloorList) {
    console.log(FloorList);
  }
}
//direction de l'assenceur plus son status.
class Elevator {
  constructor(Direction, Status, Floor_List, Current_Floor, Floor_Buttons, Open_Door_Button, Close_Door_Button, Door) {
    this.direction = Direction;
    this.status = Status;
    this.floor_list = Floor_List;
    this.floor_list = 9;
    this.current_floor = Current_Floor;
    this.current_floor = 2;
    this.floor_buttons = Floor_Buttons;
    this.floor_buttons = 9;
    this.open_door_button = Open_Door_Button;
    this.open_door_button = 9;
    this.close_door_button = Close_Door_Button;
    this.close_door_button = 9;
  }
  MoveDown(Number_OF_Floor) {
    this.direction = "down";
    this.status = "moving";
    while ((this.current_floor = Number_OF_Floor)) {
      console.log(this.current_floor);
      this.current_floor = this.current_floor - 1;
    }
  }
  MoveUp(Number_OF_Floor) {
    this.direction = "up";
    this.status = "moving";
    while ((this.current_floor = Number_OF_Floor)) {
      console.log(this.current_floor);
      this.current_floor = this.current_floor + 1;
    }
  }
  Status(Status) {
    this.status = Status;
    console.log(this.status);
  }
  AddToFloorList(Number_OF_Floor) {
    this.floor_list.push(Number_OF_Floor);
    Elevator.floor_list.sort();
    Elevator.status = "Moving";
    if (Direction == "up") {
      elevator.floorlist.sort();
      if (Direction == "down") {
        elevator.floorlist.reverse();
      }
    }
  }
  currentfloor(Number_OF_Floor) {
    this.Number_OF_Floor = Number_OF_Floor;
    console.log(this.Number_OF_Floor);
  }
}

class Controller {
  constructor(Number_Of_Floor, Number_Of_Elevators) {
    this.currentElevator = [];
    for (let i = 0; i < Number_Of_Elevators; i++) {
      this.currentElevator.push(new Elevator(i, Number_Of_Elevators));
      this.floorlist = [];
      Floor_Name = ["ss2", "ss1", "rc", "2", "3", "4", "5", "6", "7", "8"];
      for (var i = 0; i < Number_Of_Floor; i++) {
        this.floorlist[i] = new Floor(i, Floor_Name[i]);
        console.log(number_Of_Elevator);
      }
    }
  }
}
class Door {
  constructor(Elevator, Status) {
    this.elevator = Elevator;
    this.status = Status;
  }
  OpenDoor() {
    this.status = "DoorOpen";
    console.log(Door_NOW_Open);
  }
  CloseDoor() {
    this.status = "ClosingDoor";
    console.log(Door_NOW_Closes);
  }
}
class Floor {
  constructor(Number_OF_Floor, Floor_Name) {
    this.Number_OF_Floor = Number_OF_Floor;
    this.floor_Name = Floor_Name;
    this.callButton = [];
    new CallButton("up");
    console.log(CallButton_up);
    new CallButton("down");
    console.log(CallButton_down);
  }
}
class FloorButton {
  constructor(Floor, Elevator, Activated) {
    this.floor = Floor;
    this.elevator = Elevator;
    this.activated = Activated;
  }
}
class CallButton {
  constructor(Direction) {
    this.direction = Direction;
    this.activated = false;
  }
  Activated() {
    this.activated = true;
    console.log(this.activated_button);
  }

  Desactivated() {
    this.activated = false;
    console.log(this.desactivated_button);
  }
}

class ElevatorController1 {
  constructor(etages) {
    this.number_of_floor = etages;
  }
}
class Elevator1 {
  constructor(assenceur, current_floor) {
    this.number_of_Elevator = assenceur;
    this.current_floor = current_floor;
    this.elevator_list = [];

    for (let i = 0; i < etages; i++) {
      this.elevator_list.push(new Elevator());
    }
  }

  MoveUp(nbu = 1) {
    this.current_floor = this.current_floor + nbu;
  }
  MoveDown(nbd = -1) {
    this.current_floor = this.current_floor + nbd;
  }
}
class controllerf {
  constructor(Nombre_Detage, Nom_Detage) {
    this.number_of_floor = Nombre_Detage;
    this.floor_Name = Nom_Detage;
  }
}

function main() {
  const controller1 = new ElevatorController1(10);
  const Elevator1 = new Elevator(2, 0);
  const controller = new controllerf(9, 2);
  console.log(Controller);
  console.log(controller1);
  console.log(Elevator1);
  console.log(controller1);
  console.log(controller);
}
main();
