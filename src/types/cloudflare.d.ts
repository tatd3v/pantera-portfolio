declare global {
  interface D1Database {
    prepare(query: string): D1PreparedStatement;
    batch(statements: D1PreparedStatement[]): Promise<D1Result[]>;
    exec(query: string): D1Result;
    dump(): Promise<ArrayBuffer>;
  }

  interface D1PreparedStatement {
    bind(...params: unknown[]): D1PreparedStatement;
    first(): Promise<unknown>;
    run(): Promise<D1Result>;
    all(): Promise<D1Result>;
  }

  interface D1Result {
    results: unknown[];
    success: boolean;
    error?: string;
    meta?: {
      duration: number;
      changes?: number;
      last_row_id?: number;
      served_by: string;
    };
  }
}

export {};
