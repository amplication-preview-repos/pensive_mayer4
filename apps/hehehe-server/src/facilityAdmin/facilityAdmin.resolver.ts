import * as graphql from "@nestjs/graphql";
import { FacilityAdminResolverBase } from "./base/facilityAdmin.resolver.base";
import { FacilityAdmin } from "./base/FacilityAdmin";
import { FacilityAdminService } from "./facilityAdmin.service";

@graphql.Resolver(() => FacilityAdmin)
export class FacilityAdminResolver extends FacilityAdminResolverBase {
  constructor(protected readonly service: FacilityAdminService) {
    super(service);
  }
}
