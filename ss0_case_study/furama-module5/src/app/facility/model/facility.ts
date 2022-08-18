import {FacilityType} from "../../facility-type/model/facility-type";
import {RentType} from "../../rent-type/model/rent-type";

export interface Facility {
    id?:number;
    name?:string;
    typeFacility?:FacilityType;
    rentType?:RentType;
    area?:string;
    cost?:string;
    people?:string;
    standardRoom?:string;
    description?:string;
    areaPool?:string;
    floor?:number;
    free?:string;
    url?:string
}
