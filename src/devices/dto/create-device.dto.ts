import { Type } from "class-transformer";
import { IsNotEmpty, IsObject, IsString, MaxLength, ValidateNested } from "class-validator";
import { DeviceInfoDTO } from "./device-info.dto";

export class CreateDeviceDTO {
    @IsNotEmpty({ message: 'name cannot be empty' })
    @IsString({ message: 'name must be a string' })
    @MaxLength(100, {message: "name cannot be more than 100 characters"})
    readonly name: string;

    @IsString({ message: 'type must be a string' })
    @IsNotEmpty({ message: 'type cannot be empty' })
    @MaxLength(100, {message: "type cannot be more than 100 characters"})
    readonly type: string;

    @IsNotEmpty({ message: 'madeBy cannot be empty' })
    @IsString({ message: 'madeBy must be a string' })
    @MaxLength(100, {message: "madeBy cannot be more than 100 characters"})
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
