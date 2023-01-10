import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class addDeviceToUserDTO {
    @IsNotEmpty({ message: "deviceID cannot be empty" })
    @IsNumber()
    readonly deviceID: number;

    @IsNotEmpty({ message: "local cannot be empty" })
    @IsString({ message: "local must be a string" })
    readonly local: string;

    @IsNotEmpty({ message: "room cannot be empty" })
    @IsString({ message: "room must be a string" })
    readonly room: string;
}