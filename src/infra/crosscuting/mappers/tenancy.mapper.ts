import { constructUsing, createMap, forMember, mapFrom, Mapper, MappingProfile } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { TenancyAddDto } from "src/domain/dtos/tenancies/tenancyadd.dto";
import { Tenancy } from "src/domain/entities/tenancy.entity";

@Injectable()
export class TenancyMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }
    
    get profile(): MappingProfile {
       return (mapper) => {
        createMap(mapper, TenancyAddDto, Tenancy, 
            forMember((dest) => dest.name, mapFrom(src => src.name.trim()))
        );
       }
    }
}