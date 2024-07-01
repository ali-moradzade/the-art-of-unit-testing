export function makeVerifier(
    rules: [(input: string) => boolean],
    logger: { info: (input: string) => void },
) {
    return (input: string) => {
        const failed = rules
            .map(rule => rule(input))
            .filter(result => !result);

        console.log(failed);

        if (failed.length === 0) {
            logger.info('PASSED');
            return true;
        }

        logger.info('FAIL');
        return false;
    };
}
