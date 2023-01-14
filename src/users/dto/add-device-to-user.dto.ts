import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { deviceLocals } from "src/devices/enum/locals.enum";

export class addDeviceToUserDTO {
    @IsNotEmpty()
    @IsNumber()
    readonly deviceId: number;

    @IsNotEmpty()
    @IsEnum(deviceLocals)
    readonly local: deviceLocals;

    @IsNotEmpty()
    @IsString()
    readonly room: string;
}