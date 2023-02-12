import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class DeviceInfoDTO {
    @IsString({ message: 'virtual_id must be a string' })
    @IsNotEmpty({ message: 'virtual_id cannot be empty' })
    @MaxLength(50, {message: "virtual_id cannot be more than 100 characters"})
    @ApiProperty({ name: 'virtual_id', example: '1235asd489', })
    readonly virtual_id: string;

    @IsString({ message: 'ip_address must be a string' })
    @IsNotEmpty({ message: 'ip_address cannot be empty' })
    @MaxLength(30, {message: "ip_address cannot be more than 100 characters"})
    @ApiProperty({ name: 'ip_address', example: '192.168.0.1', })
    readonly ip_address: string;

    @IsString({ message: 'mac_address must be a string' })
    @IsNotEmpty({ message: 'mac_address cannot be empty' })
    @MaxLength(50, {message: "mac_address cannot be more than 100 characters"})
    @ApiProperty({ name: 'mac_address', example: '0C:5e:44:a9:82:57', })
    readonly mac_address: string;

    @IsString({ message: 'signal must be a string' })
    @IsNotEmpty({ message: 'signal cannot be empty' })
    @MaxLength(10, {message: "signal cannot be more than 100 characters"})
    @ApiProperty({ name: 'signal', example: '-70db', })
    readonly signal: string;
}