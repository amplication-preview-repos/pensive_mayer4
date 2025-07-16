import * as graphql from "@nestjs/graphql";
import { SuperAdminResolverBase } from "./base/superAdmin.resolver.base";
import { SuperAdmin } from "./base/SuperAdmin";
import { SuperAdminService } from "./superAdmin.service";

@graphql.Resolver(() => SuperAdmin)
export class SuperAdminResolver extends SuperAdminResolverBase {
  constructor(protected readonly service: SuperAdminService) {
    super(service);
  }
}
