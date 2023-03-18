import { createMap, forMember, mapFrom, Mapper, MappingProfile } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Injectable } from "@nestjs/common";
import { Contract } from "src/domain/entities/contract.entity";
import {ContractAddDto} from "src/domain/dtos/contracts/contractadd.dto";

@Injectable()
export class ContractMapper extends AutomapperProfile{
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }
    
    get profile(): MappingProfile {
       return (mapper) => {
        createMap(mapper, ContractAddDto, Contract, 
            forMember((dest) => dest.value, mapFrom(src => src.value > 0 ? src.value : 0))
        );
       }
    }
}