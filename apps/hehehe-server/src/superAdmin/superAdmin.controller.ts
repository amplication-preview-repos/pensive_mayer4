import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SuperAdminService } from "./superAdmin.service";
import { SuperAdminControllerBase } from "./base/superAdmin.controller.base";

@swagger.ApiTags("superAdmins")
@common.Controller("superAdmins")
export class SuperAdminController extends SuperAdminControllerBase {
  constructor(protected readonly service: SuperAdminService) {
    super(service);
  }
}
