import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** Supabase client; null when VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not set (e.g. on Vercel without env vars). */
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image_url: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  category_id: string | null;
  name: string;
  description: string;
  image_url: string;
  gallery_images: string[];
  specifications: Record<string, string>;
  price_range: string;
  is_featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  company_name: string;
  content: string;
  rating: number;
  image_url: string;
  is_published: boolean;
  created_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}
