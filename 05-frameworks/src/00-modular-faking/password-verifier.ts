import {ComplicatedLogger} from './complicated-logger';
import {ConfigurationService} from './configuration-service';

export function verifyPassword(
    input: string,
    rules: [(input: string) => boolean],
    complicatedLogger: ComplicatedLogger,
    configurationService: ConfigurationService,
) {

    const log = (text: string) => {
        if (configurationService.getLogLevel() === 'info') {
            complicatedLogger.info(text);
        } else {
            complicatedLogger.debug(text);
        }
    };

    const failed = rules
        .map((rule) => rule(input))
        .filter((result) => !result);

    if (failed.length === 0) {
        log("PASSED");
        return true;
    }

    log("FAIL");
    return false;
}

