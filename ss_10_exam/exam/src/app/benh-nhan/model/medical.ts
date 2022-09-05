import {Medical} from "../../benh-an/model/medical";

export interface Patient {
  patientId?:number;
  patientCode?:string;
  patientName?:string;
  startDay?:string;
  endDay?:string;
  doctor?:string;
  medicalCode?:Medical;
  procedure?:string;
  patientStatus?:number;
  reason?:string;
}
