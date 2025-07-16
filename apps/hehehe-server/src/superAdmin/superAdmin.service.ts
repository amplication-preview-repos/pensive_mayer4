import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SuperAdminServiceBase } from "./base/superAdmin.service.base";

@Injectable()
export class SuperAdminService extends SuperAdminServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
