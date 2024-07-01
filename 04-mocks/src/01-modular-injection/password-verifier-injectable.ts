import {Log} from "./complicated-logger";
import {ConfigurationService} from "./configuration-service";

const logger = new Log();
const configs = new ConfigurationService();

const originalDependencies = {
    log: logger,
    configs,
    lodash: require('lodash')
};

let dependencies = {...originalDependencies};

export function resetDependencies() {
    dependencies = {...originalDependencies};
}

export function injectDependencies(fakes: any) {
    Object.assign(dependencies, fakes);
}

export function log(text: string) {
    if (dependencies.configs.getLogLevel() === "info") {
        dependencies.log.info(text);
    }

    if (dependencies.configs.getLogLevel() === "debug") {
        dependencies.log.debug(text);
    }
}

export function verifyPassword(
    input: string,
    rules: [(input: string) => boolean],
) {
    const failed = rules
        .map(rule => rule(input))
        .filter(result => !result);

    if (failed.length === 0) {
        log('PASSED');
        return true;
    }

    log('FAIL');
    return false;
}
