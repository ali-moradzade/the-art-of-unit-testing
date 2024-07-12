import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { verifyPassword } from './password-verifier';
import { ComplicatedLogger } from './complicated-logger';
import { ConfigurationService } from './configuration-service';

vi.mock('./configuration-service', () => {
    return {
        ConfigurationService: vi.fn().mockImplementation(() => {
            return {
                getLogLevel: vi.fn(),
            };
        }),
    };
});

vi.mock('./complicated-logger', () => {
    return {
        ComplicatedLogger: vi.fn().mockImplementation(() => {
            return {
                info: vi.fn(),
                debug: vi.fn(),
            };
        }),
    };
});

describe('password verifier', () => {
    let loggerMocked: ComplicatedLogger;
    let configServiceMocked: ConfigurationService;

    beforeEach(() => {
        loggerMocked = new ComplicatedLogger();
        configServiceMocked = new ConfigurationService();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test(`with info log level and no rules, it calls the logger with PASSED`, () => {
        vi.mocked(configServiceMocked.getLogLevel).mockReturnValue('info');

        verifyPassword('anything', [] as any, loggerMocked, configServiceMocked);

        expect(loggerMocked.info).toHaveBeenCalledWith(expect.stringContaining('PASS'));
    });

    test(`with debug log level and no rules, it calls the logger with PASSED`, () => {
        // Mock the getLogLevel method to return 'debug'
        vi.mocked(configServiceMocked.getLogLevel).mockReturnValue('debug');

        // Call the verifyPassword function
        verifyPassword('anything', [] as any, loggerMocked, configServiceMocked);

        // Assert that the debug method of mockLogger was called with 'PASS'
        expect(loggerMocked.debug).toHaveBeenCalledWith(expect.stringContaining('PASS'));
    });
});
