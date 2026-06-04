import imageCompression from 'browser-image-compression';

export interface CompressionOptions {
  maxSizeMB?: number;
  maxWidthOrHeight?: number;
  useWebWorker?: boolean;
  fileType?: string;
}

export interface CompressedImage {
  file: File;
  previewUrl: string;
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
}

/**
 * Default compression options for the portfolio
 * - WebP format for better compression
 * - 1920px max dimension for responsive design
 * - 80% quality to balance file size and visual quality
 */
export const DEFAULT_COMPRESSION_OPTIONS: CompressionOptions = {
  maxSizeMB: 2,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
  fileType: 'image/webp',
};

/**
 * Compress an image file according to portfolio requirements
 */
export async function compressImage(
  file: File,
  options: CompressionOptions = DEFAULT_COMPRESSION_OPTIONS
): Promise<CompressedImage> {
  // Validate input
  if (!file.type.startsWith('image/')) {
    throw new Error('File must be an image');
  }

  const originalSize = file.size;

  try {
    // Compress the image
    const compressedFile = await imageCompression(file, {
      maxSizeMB: options.maxSizeMB || DEFAULT_COMPRESSION_OPTIONS.maxSizeMB,
      maxWidthOrHeight: options.maxWidthOrHeight || DEFAULT_COMPRESSION_OPTIONS.maxWidthOrHeight,
      useWebWorker: options.useWebWorker !== false,
      fileType: options.fileType || DEFAULT_COMPRESSION_OPTIONS.fileType,
    });

    // Create preview URL
    const previewUrl = URL.createObjectURL(compressedFile);
    
    const compressedSize = compressedFile.size;
    const compressionRatio = ((originalSize - compressedSize) / originalSize) * 100;

    return {
      file: compressedFile,
      previewUrl,
      originalSize,
      compressedSize,
      compressionRatio,
    };
  } catch (error) {
    throw new Error(`Image compression failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generate a unique filename for uploaded images
 */
export function generateImageKey(originalName: string): string {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  const extension = originalName.split('.').pop()?.toLowerCase() || 'webp';
  
  return `portfolio/${timestamp}-${randomString}.${extension}`;
}

/**
 * Format file size in human-readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Validate image file before compression
 */
export function validateImageFile(file: File): { isValid: boolean; error?: string } {
  // Check file type
  if (!file.type.startsWith('image/')) {
    return { isValid: false, error: 'File must be an image' };
  }

  // Check file size (max 10MB before compression)
  const maxSizeBytes = 10 * 1024 * 1024; // 10MB
  if (file.size > maxSizeBytes) {
    return { 
      isValid: false, 
      error: `File size must be less than ${formatFileSize(maxSizeBytes)}` 
    };
  }

  return { isValid: true };
}
