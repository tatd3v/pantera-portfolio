/**
 * Storage service interface for file operations
 * Follows repository pattern for abstraction
 */
export interface IStorageService {
  /**
   * Generate a presigned URL for uploading a file
   */
  generateUploadUrl(key: string, contentType: string): Promise<string>;
  
  /**
   * Generate a presigned URL for accessing a file
   */
  getPublicUrl(key: string): string;
  
  /**
   * Delete a file from storage
   */
  deleteFile(key: string): Promise<void>;
  
  /**
   * Check if a file exists
   */
  fileExists(key: string): Promise<boolean>;
}

export interface UploadOptions {
  key: string;
  contentType: string;
  maxSize?: number; // in bytes
}

export interface StorageError extends Error {
  code: 'UPLOAD_FAILED' | 'DELETE_FAILED' | 'FILE_NOT_FOUND' | 'INVALID_KEY';
  details?: unknown;
}
