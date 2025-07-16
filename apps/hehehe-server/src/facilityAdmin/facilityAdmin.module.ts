import { Module } from "@nestjs/common";
import { FacilityAdminModuleBase } from "./base/facilityAdmin.module.base";
import { FacilityAdminService } from "./facilityAdmin.service";
import { FacilityAdminController } from "./facilityAdmin.controller";
import { FacilityAdminResolver } from "./facilityAdmin.resolver";

@Module({
  imports: [FacilityAdminModuleBase],
  controllers: [FacilityAdminController],
  providers: [FacilityAdminService, FacilityAdminResolver],
  exports: [FacilityAdminService],
})
export class FacilityAdminModule {}
