import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class DeviceDataDTO {
    @IsNotEmpty()
    @IsNumber()
    readonly deviceId: number;

    @IsNotEmpty()
    @IsBoolean()
    readonly isOn: boolean;
}