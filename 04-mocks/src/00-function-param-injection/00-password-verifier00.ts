import {Log} from "./complicated-logger";

const log = new Log();

export function verifyPassword(
    input: string,
    rules: [(input: string) => boolean],
) {
    const failed = rules
        .map((rule) => rule(input))
        .filter((result) => !result);

    console.log(failed);
    if (failed.length === 0) {
        // this line is impossible to test with traditional injection techniques
        log.info("PASSED");
        return true;
    }

    // this line is impossible to test with traditional injection techniques
    log.info("FAIL");
    return false;
}

export function verifyPassword2(
    input: string,
    rules: [(input: string) => boolean],
    logger: any,
) {
    const failed = rules
        .map((rule) => rule(input))
        .filter((result) => !result);

    if (failed.length === 0) {
        logger.info("PASSED");
        return true;
    }

    logger.info("FAIL");
    return false;
}

export function verifyPassword3(
    input: string,
    rules: [(input: string) => boolean],
    logger: any,
) {
    const failed = rules
        .map((rule) => rule(input))
        .filter((result) => !result);

    if (failed.length === 0) {
        logger.info("PASSED");
        return true;
    }
    logger.info("FAIL");
    return false;
}
