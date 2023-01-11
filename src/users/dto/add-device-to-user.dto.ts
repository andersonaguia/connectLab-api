import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { deviceLocals } from "src/devices/enum/locals.enum";

export class addDeviceToUserDTO {
    @IsNotEmpty({ message: "deviceId cannot be empty" })
    @IsNumber({}, { message: "deviceId must be a number" })
    readonly deviceId: number;

    @IsNotEmpty({ message: "local cannot be empty" })
    @IsEnum({ message: "local must be a enum" })
    readonly local: deviceLocals;

    @IsNotEmpty({ message: "room cannot be empty" })
    @IsString({ message: "room must be a string" })
    readonly room: string;
}