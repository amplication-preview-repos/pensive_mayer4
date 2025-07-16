import { Module } from "@nestjs/common";
import { SuperAdminModuleBase } from "./base/superAdmin.module.base";
import { SuperAdminService } from "./superAdmin.service";
import { SuperAdminController } from "./superAdmin.controller";
import { SuperAdminResolver } from "./superAdmin.resolver";

@Module({
  imports: [SuperAdminModuleBase],
  controllers: [SuperAdminController],
  providers: [SuperAdminService, SuperAdminResolver],
  exports: [SuperAdminService],
})
export class SuperAdminModule {}
