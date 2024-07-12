import {describe, test} from "vitest";
import {Substitute} from "@fluffy-spoon/substitute";
import {PasswordVerifier3} from "./00-password-verifier3";
import {IComplicatedLogger} from "../02-longinterfaces-faking/interfaces/complicated-logger";
import {MaintenanceWindow} from "./maintenance-window";

const makeVerifierWithNoRules = (log: IComplicatedLogger, maintenance: MaintenanceWindow) => {
    return new PasswordVerifier3([], log, maintenance);
};

describe("working with substitute part 2", () => {
    test("verify, during maintenance, calls logger", () => {
        const stubMaintenanceWindow = Substitute.for<MaintenanceWindow>();
        stubMaintenanceWindow.isUnderMaintenance().returns(true);
        const mockLog = Substitute.for<IComplicatedLogger>();
        const verifier = makeVerifierWithNoRules(mockLog, stubMaintenanceWindow);

        verifier.verify("anything");

        mockLog.received().info("Under Maintenance", "verify");
    });

    test("verify, outside maintenance, calls logger", () => {
        const stubMaintenanceWindow = Substitute.for<MaintenanceWindow>();
        stubMaintenanceWindow.isUnderMaintenance().returns(false);
        const mockLog = Substitute.for<IComplicatedLogger>();
        const verifier = makeVerifierWithNoRules(mockLog, stubMaintenanceWindow);

        verifier.verify("anything");

        mockLog.received().info("PASSED", "verify");
    });
});
