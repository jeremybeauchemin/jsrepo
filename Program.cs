using System;
namespace RocketElevators
{
    //debut de l'ascenceur
   class ElevatorController
   {
       private int columns;
       private int nbElevators;
       private int nbFloors;
       private int nbButtons;

       public ElevatorController(int nbButtons, int nbFloors, int nbElevators, int columns)
       {
           this.nbElevators = nbElevators;
           this.nbFloors = nbFloors;
           this.nbButtons = nbButtons;
           this.columns = new Columns(nbFloors, nbElevators);
       }
       //la demande d'ascenceur
       public Elevator RequestElevator(int FloorNumber, string Direction) {
            selectedElevator = this.FindElevator(FloorNumber, Direction);
            selectedElevator.addFloorToList(FloorNumber);
            selectedElevator.activateInsideButton(FloorNumber);
            Console.WriteLine("Request Elevator on floor " + FloorNumber.ToString() + ", going " + Direction);
            return selectedElevator;
        }
        //l'interieur
        public void RequestFloor( int elevator, int floorNumber) {
            elevator.activateInsideButton(floorNumber);
            elevator.addFloorToList(floorNumber);
            elevator.moveNext();
            Console.WriteLine("Request Floor number " + floorNumber.ToString());
        }
        //trouver l'ascenceur
        public int FindElevator( int FloorNumber, string Direction){
            var Elevator;
            while (Elevator == undefined) {
                for (var i = 0; i < this.currentElevator; i++){
                    let currentElevator = this.elevator[i];
                    if (
                        this.currentElevator.status == "stopped" &&
                        this.currentElevator.direction == Direction
                    ) {
                        Console.WriteLine(this.currentElevator[i]);
                        Elevator = this.currentElevator[i];
                        return this.currentElevator[i];
                    }
                    else if (this.currentElevator[i].status =="idle") {
                        Console.WriteLine(this.currentElevator[i]);
                        Elevator = this.currentElevator[i];
                        return this.currentElevator[i];
                    } else if (FloorNumber > this.currentElevator[i].current_floor){
                    if (
                        this.currentElevator.status == "moving" &&
                        this.currentElevator.direction =="up" &&
                        this.currentElevator.direction == Direction
                    )
                    {
                        Console.WriteLine(this.currentElevator);
                        Elevator = this.currentElevator;
                        return Elevator;
                    }
                    else if (this.currentElevator.status == "moving"){
                        Console.WriteLine(this.currentElevator[i]);
                        Elevator = this.currentElevator;
                        return Elevator;
                    }
                    else if (FloorNumber < this.currentElevator[i].current_floor){
                        if (this.currentElevator[i].status == "moving" &&
                        this.currentElevator[i].direction == "down")
                    }
                    if (this.currentElevator[i].direction == Direction){
                        Console.WriteLine(this.currentElevator[i]);
                        Elevator = this.currentElevator[i];
                        return Elevator;
                    }
                    else if (this.currentElevator[i].status == "moving") {
                    Console.WriteLine(this.currentElevator[i]);
                    Elevator = this.currentElevator[i];
                    return Elevator;    
                    }
                    else {
                        Console.WriteLine(this.currentElevator[i]);
                          }
                     }
                 }
            }
        }
    }   

    //les portes
   class Door
   {
        public openDoor(){

            Console.WriteLine("Opening door on floor " + this.current_floor);
            this.status = "open_door";
         }
        public closeDoor(){
             Console.WriteLine("Closing door on floor " + this.current_floor);
            this.status = "close_door";
        }    
   } 
   
   class Elevator{

       private int Direction;
       private int Status;
       private int Floor_List;
       private int Current_Floor;
       private int Floor_Bottons;
       private int Open_Dorr_Button;
       private int Close_Door_Button;
       private int FloorNumber;

       public MoveDown(int FloorNumber){
           elevator.direction;
        }   
    }
}

