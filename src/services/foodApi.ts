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

export async function fetchProduct(barcode: string): Promise<ProductData | null> {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );

    const data = await response.json();

    if (data.status === 1) {
      return data.product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("خطأ في جلب البيانات", error);
    return null;
  }
}