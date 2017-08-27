import { React } from "react";

export const EventList = (props) =>{
  console.log(props.event[1]); 
  return (
    <option value={props.event.toString()}>{props.event}</option>
  );
}