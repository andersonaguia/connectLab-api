import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { deviceLocals } from "src/devices/enum/locals.enum";

export class addDeviceToUserDTO {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ name: 'deviceId', example: 3 })
    readonly deviceId: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ name: 'local', example: 'Casa' })
    readonly local: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ name: 'room', example: 'Quarto' })
    readonly room: string;
}