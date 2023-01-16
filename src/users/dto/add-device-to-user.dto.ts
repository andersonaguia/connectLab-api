import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { deviceLocals } from "src/devices/enum/locals.enum";

export class addDeviceToUserDTO {
    @IsNotEmpty()
    @IsNumber()
    readonly deviceId: number;

    @IsNotEmpty()
    @IsString()
    readonly local: string;

    @IsNotEmpty()
    @IsString()
    readonly room: string;
}