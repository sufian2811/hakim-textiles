/*
  # Hakim Textiles Database Schema

  ## Overview
  This migration creates the complete database structure for the Hakim Textiles website,
  including product management, testimonials, and contact form submissions.

  ## New Tables
  
  ### 1. product_categories
  - `id` (uuid, primary key) - Unique identifier for each category
  - `name` (text) - Category name (e.g., "Cotton Fabrics", "Silk", "Denim")
  - `description` (text) - Category description
  - `image_url` (text) - Category image URL
  - `display_order` (integer) - Order for displaying categories
  - `created_at` (timestamptz) - Timestamp when category was created
  - `updated_at` (timestamptz) - Timestamp when category was last updated

  ### 2. products
  - `id` (uuid, primary key) - Unique identifier for each product
  - `category_id` (uuid, foreign key) - Reference to product_categories
  - `name` (text) - Product name
  - `description` (text) - Product description
  - `image_url` (text) - Main product image URL
  - `gallery_images` (text[]) - Array of additional product images
  - `specifications` (jsonb) - Product specifications (fabric type, weight, width, etc.)
  - `price_range` (text) - Price range for the product
  - `is_featured` (boolean) - Whether product is featured on homepage
  - `display_order` (integer) - Order for displaying products
  - `created_at` (timestamptz) - Timestamp when product was created
  - `updated_at` (timestamptz) - Timestamp when product was last updated

  ### 3. testimonials
  - `id` (uuid, primary key) - Unique identifier for each testimonial
  - `client_name` (text) - Name of the client
  - `company_name` (text) - Client's company name
  - `content` (text) - Testimonial content
  - `rating` (integer) - Rating out of 5
  - `image_url` (text) - Client photo URL
  - `is_published` (boolean) - Whether testimonial is published
  - `created_at` (timestamptz) - Timestamp when testimonial was created

  ### 4. contact_submissions
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text) - Contact person's name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `company` (text) - Company name
  - `message` (text) - Message content
  - `is_read` (boolean) - Whether submission has been read
  - `created_at` (timestamptz) - Timestamp when submission was received

  ## Security
  - Enable RLS on all tables
  - Public can read published content (products, categories, testimonials)
  - Only authenticated users can manage content
  - Anyone can submit contact forms
*/

-- Create product_categories table
CREATE TABLE IF NOT EXISTS product_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  image_url text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES product_categories(id) ON DELETE SET NULL,
  name text NOT NULL,
  description text DEFAULT '',
  image_url text DEFAULT '',
  gallery_images text[] DEFAULT '{}',
  specifications jsonb DEFAULT '{}',
  price_range text DEFAULT '',
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company_name text DEFAULT '',
  content text NOT NULL,
  rating integer DEFAULT 5,
  image_url text DEFAULT '',
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  company text DEFAULT '',
  message text NOT NULL,
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for product_categories
CREATE POLICY "Anyone can view product categories"
  ON product_categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert categories"
  ON product_categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON product_categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete categories"
  ON product_categories FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for products
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON products FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for testimonials
CREATE POLICY "Anyone can view published testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for contact_submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete submissions"
  ON contact_submissions FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_is_featured ON products(is_featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_is_published ON testimonials(is_published);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_is_read ON contact_submissions(is_read);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);