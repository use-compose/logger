import Logger from '../logger';

export function useLogger(message: string) {
  function log(messageOverride?: string) {
    Logger(messageOverride || message);
  }

  return { log };
}
