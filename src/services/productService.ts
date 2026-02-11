"use client";

export interface ProductData {
  product_name?: string;
  brands?: string;
  nutriscore_grade?: string;
  image_url?: string;
  nutriments?: {
    sugars_100g?: number;
    fat_100g?: number;
    salt_100g?: number;
  };
  additives_n?: number;
}

export interface ProductResponse {
  success: boolean;
  data?: ProductData;
  error?: 'not_found' | 'network_error';
}

/**
 * Fetches product data from Open Food Facts API by barcode.
 */
export async function fetchProductByBarcode(barcode: string): Promise<ProductResponse> {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );

    if (!response.ok) {
      return { success: false, error: 'network_error' };
    }

    const data = await response.json();

    if (data.status === 1) {
      return { success: true, data: data.product };
    } else {
      return { success: false, error: 'not_found' };
    }
  } catch (error) {
    console.error("Product fetch error:", error);
    return { success: false, error: 'network_error' };
  }
}