interface logger {
  log(exception: Error): void;
}

type log = {
  name: string;
  message: string;
  stack: string;
};

class Logger implements logger {
  public log = (exception: Error): void => {
    let log = this.createLog(exception);
    this.writeLogDown(log);
  };

  private createLog = (initialException: Error): log => {
    let log: log = {
      name: initialException.name,
      message: initialException.message,
      stack: initialException.stack!,
    };

    return log;
  };

  private writeLogDown = (log: log): void => {
    console.error(log.stack);
  };
}

export const logger = new Logger();
