import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceDTO } from './create-device.dto';

export class UpdateDeviceDto extends PartialType(CreateDeviceDTO) {}
