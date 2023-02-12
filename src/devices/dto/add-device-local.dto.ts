import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class addDeviceLocalDTO {
    @IsNotEmpty()
    @MaxLength(30)
    @IsString()
    @ApiProperty({ name: 'local', example: 'Casa', })
    readonly local: string;
}