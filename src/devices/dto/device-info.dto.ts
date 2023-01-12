import { IsNotEmpty, IsString } from "class-validator";

export class DeviceInfoDTO {
    @IsString({ message: 'virtual_id must be a string' })
    @IsNotEmpty({ message: 'virtual_id cannot be empty' })
    readonly virtual_id: string;

    @IsString({ message: 'ipAddress must be a string' })
    @IsNotEmpty({ message: 'ipAddress cannot be empty' })
    readonly ip_address: string;

    @IsString({ message: 'macAddress must be a string' })
    @IsNotEmpty({ message: 'macAddress cannot be empty' })
    readonly mac_address: string;

    @IsString({ message: 'signal must be a string' })
    @IsNotEmpty({ message: 'signal cannot be empty' })
    readonly signal: string;
}