import configs from './app-config.json';

export class ConfigurationService {
    getLogLevel() {
        return configs.logLevel;
    }
}
