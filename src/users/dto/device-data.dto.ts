import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class DeviceDataDTO {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ name: 'deviceId', example: 1 })
    readonly deviceId: number;

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty({ name: 'isOn', example: true })
    readonly isOn: boolean;
}