import {Medical} from "../../benh-an/model/medical";

export interface Patient {
  id?:number;
  patientCode?:string;
  name?:string;
  startDay?:string;
  endDay?:string;
  doctor?:string;
  medicalCode?:Medical;
  procedure?:string;
  status?:number;
  reason?:string;
}
