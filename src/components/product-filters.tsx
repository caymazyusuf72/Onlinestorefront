"use client";

import { type Category, type Brand } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface ProductFiltersProps {
  categories: Category[];
  brands: Brand[];
  onFilterChange: (filterType: 'categories' | 'brands', filterValue: string, isChecked: boolean) => void;
}

export default function ProductFilters({ categories, brands, onFilterChange }: ProductFiltersProps) {
  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" defaultValue={['categories', 'brands']} className="w-full">
          <AccordionItem value="categories">
            <AccordionTrigger className="text-base font-semibold">Category</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 pt-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`cat-${category.id}`} 
                      onCheckedChange={(checked) => onFilterChange('categories', category.id, !!checked)}
                    />
                    <Label htmlFor={`cat-${category.id}`} className="text-sm font-normal cursor-pointer">
                      {category.name}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="brands">
            <AccordionTrigger className="text-base font-semibold">Brand</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 pt-2">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`brand-${brand.id}`} 
                      onCheckedChange={(checked) => onFilterChange('brands', brand.id, !!checked)}
                    />
                    <Label htmlFor={`brand-${brand.id}`} className="text-sm font-normal cursor-pointer">
                      {brand.name}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
