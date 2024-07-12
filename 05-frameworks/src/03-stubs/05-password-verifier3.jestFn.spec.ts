import {describe, test, vi} from "vitest";
import {IComplicatedLogger} from "../02-longinterfaces-faking/interfaces/complicated-logger";
import {Arg, Substitute} from "@fluffy-spoon/substitute";
import {PasswordVerifier3} from "./00-password-verifier3";
import {MaintenanceWindow} from "./maintenance-window";

describe("working with substitute part 2", () => {
    test("verify, with logger, calls logger", () => {
        const stubMaintenanceWindow: MaintenanceWindow = {
            isUnderMaintenance:
                vi.fn()
                    .mockImplementationOnce(() => true)
                    .mockImplementationOnce(() => false),
        };

        const mockLog = Substitute.for<IComplicatedLogger>();

        const verifier = new PasswordVerifier3([], mockLog, stubMaintenanceWindow);

        verifier.verify("anything");

        mockLog.received().info(
            Arg.is((s) => s.includes("Maintenance")),
            "verify"
        );
    });
});
