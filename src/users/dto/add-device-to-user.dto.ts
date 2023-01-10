import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class addDeviceToUserDTO {
    @IsNotEmpty({ message: "deviceId cannot be empty" })
    @IsNumber({}, { message: "deviceId must be a number" })
    readonly deviceId: number;

    @IsNotEmpty({ message: "local cannot be empty" })
    @IsString({ message: "local must be a string" })
    readonly local: string;

    @IsNotEmpty({ message: "room cannot be empty" })
    @IsString({ message: "room must be a string" })
    readonly room: string;
}