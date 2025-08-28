
"use client";

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from "@/components/product-card";
import ProductFilters from "@/components/product-filters";
import ProductSort from "@/components/product-sort";
import { getProducts, getCategories, getBrands } from "@/lib/mock-data";
import { type Product, type SortOption } from "@/lib/types";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  
  const allProducts = useMemo(() => getProducts(), []);
  const allCategories = useMemo(() => getCategories(), []);
  const allBrands = useMemo(() => getBrands(), []);
  
  const [activeFilters, setActiveFilters] = useState<{ categories: string[], brands: string[] }>({
    categories: [],
    brands: [],
  });
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [sortOption, setSortOption] = useState<SortOption>('newest');

  const filteredProducts = useMemo(() => {
    return getProducts({
      categories: activeFilters.categories,
      brands: activeFilters.brands,
      searchTerm: searchTerm,
      sortBy: sortOption,
    });
  }, [activeFilters, searchTerm, sortOption]);

  const handleFilterChange = (filterType: 'categories' | 'brands', filterValue: string, isChecked: boolean) => {
    setActiveFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (isChecked) {
        newFilters[filterType] = [...newFilters[filterType], filterValue];
      } else {
        newFilters[filterType] = newFilters[filterType].filter(val => val !== filterValue);
      }
      return newFilters;
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Koleksiyonumuz</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Geniş ve yüksek kaliteli ürün kataloğumuza göz atın.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <ProductFilters
            categories={allCategories}
            brands={allBrands}
            onFilterChange={handleFilterChange}
          />
        </aside>

        <main className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-muted-foreground">{filteredProducts.length} ürün bulundu</p>
            <ProductSort value={sortOption} onValueChange={setSortOption} />
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center bg-muted/50 rounded-lg p-12">
              <h2 className="text-2xl font-semibold">Ürün Bulunamadı</h2>
              <p className="mt-2 text-muted-foreground">
                { searchTerm 
                  ? `"${searchTerm}" için arama sonucu bulunamadı.`
                  : "Filtrelerinizi değiştirmeyi deneyin."
                }
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
