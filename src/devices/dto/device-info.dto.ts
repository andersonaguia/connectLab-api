import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class DeviceInfoDTO {
    @IsString({ message: 'virtual_id must be a string' })
    @IsNotEmpty({ message: 'virtual_id cannot be empty' })
    @MaxLength(50, {message: "virtual_id cannot be more than 100 characters"})
    readonly virtual_id: string;

    @IsString({ message: 'ip_address must be a string' })
    @IsNotEmpty({ message: 'ip_address cannot be empty' })
    @MaxLength(30, {message: "ip_address cannot be more than 100 characters"})
    readonly ip_address: string;

    @IsString({ message: 'mac_address must be a string' })
    @IsNotEmpty({ message: 'mac_address cannot be empty' })
    @MaxLength(50, {message: "mac_address cannot be more than 100 characters"})
    readonly mac_address: string;

    @IsString({ message: 'signal must be a string' })
    @IsNotEmpty({ message: 'signal cannot be empty' })
    @MaxLength(10, {message: "signal cannot be more than 100 characters"})
    readonly signal: string;
}