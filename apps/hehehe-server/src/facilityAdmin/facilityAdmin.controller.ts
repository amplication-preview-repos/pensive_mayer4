import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FacilityAdminService } from "./facilityAdmin.service";
import { FacilityAdminControllerBase } from "./base/facilityAdmin.controller.base";

@swagger.ApiTags("facilityAdmins")
@common.Controller("facilityAdmins")
export class FacilityAdminController extends FacilityAdminControllerBase {
  constructor(protected readonly service: FacilityAdminService) {
    super(service);
  }
}
