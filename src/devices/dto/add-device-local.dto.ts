import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class addDeviceLocalDTO {
    @IsNotEmpty()
    @MaxLength(30)
    @IsString()
    readonly local: string;
}