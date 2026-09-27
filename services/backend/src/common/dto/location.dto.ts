import { IsLatitude, IsLongitude, IsNumber, IsOptional } from 'class-validator';
export class LocationUpdateDto { @IsLatitude() latitude!: number; @IsLongitude() longitude!: number; @IsNumber() @IsOptional() accuracy?: number; }
