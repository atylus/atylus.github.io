export type Metadata = {
  title?: string;
  description?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?:
      | string[]
      | Array<{
          url: string;
          alt?: string;
          width?: number;
          height?: number;
        }>;
    [key: string]: unknown;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
    [key: string]: unknown;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    [key: string]: unknown;
  };
  alternates?: {
    canonical?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export type NextConfig = Record<string, unknown>;
