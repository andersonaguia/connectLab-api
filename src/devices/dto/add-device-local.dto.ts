import { IsNotEmpty } from "class-validator";
import { deviceLocals } from "../enum/locals.enum";

export class addDeviceLocalDTO{
    @IsNotEmpty({message: "local cannot be empty"})
    readonly local: deviceLocals;
}