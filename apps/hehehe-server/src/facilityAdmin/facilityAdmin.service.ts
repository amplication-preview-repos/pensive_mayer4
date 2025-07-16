import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FacilityAdminServiceBase } from "./base/facilityAdmin.service.base";

@Injectable()
export class FacilityAdminService extends FacilityAdminServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
