import { Type } from "class-transformer";
import { IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator";
import { DeviceInfoDTO } from "./device-info.dto";

export class CreateDeviceDTO {
    @IsNotEmpty({ message: 'name cannot be empty' })
    @IsString({ message: 'name must be a string' })
    readonly name: string;

    @IsString({ message: 'type must be a string' })
    @IsNotEmpty({ message: 'type cannot be empty' })
    readonly type: string;

    @IsNotEmpty({ message: 'madeBy cannot be empty' })
    @IsString({ message: 'madeBy must be a string' })
    readonly madeBy: string;

    @IsString({ message: 'photoUrl must be a string' })
    @IsNotEmpty({ message: 'photoUrl cannot be empty' })
    readonly photoUrl: string;

    @IsNotEmpty()
    @IsObject()
    @ValidateNested()
    @Type(() => DeviceInfoDTO)
    readonly info: DeviceInfoDTO;

}
