import { IsNotEmpty, IsString } from "class-validator";

export class DeviceInfoDTO {
    @IsString({ message: 'ipAddress must be a string' })
    @IsNotEmpty({ message: 'ipAddress cannot be empty' })
    readonly ipAddress: string;

    @IsString({ message: 'macAddress must be a string' })
    @IsNotEmpty({ message: 'macAddress cannot be empty' })
    readonly macAddress: string;

    @IsString({ message: 'signal must be a string' })
    @IsNotEmpty({ message: 'signal cannot be empty' })
    readonly signal: string;
}