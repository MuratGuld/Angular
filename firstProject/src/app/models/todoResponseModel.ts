import { Todo } from "./todo";

export interface TodoResponseModel {
    data:Todo[],
    success:boolean,
    response:string
}