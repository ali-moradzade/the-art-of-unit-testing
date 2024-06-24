import { RealTimeProvider } from './time-provider'
import { PasswordVerifier } from './password-verifier-time02';

export const passwordVerifierFactory = (
    rules: [(input: string) => { passed: boolean, reason: string }],
) => {
  return new PasswordVerifier(rules, new RealTimeProvider());
};
