
"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SortOption } from "@/lib/types";

interface ProductSortProps {
  value: SortOption;
  onValueChange: (value: SortOption) => void;
}

export default function ProductSort({ value, onValueChange }: ProductSortProps) {
  return (
    <Select value={value} onValueChange={(v: SortOption) => onValueChange(v)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sırala" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="newest">En Yeniler</SelectItem>
          <SelectItem value="popularity">Popülerlik</SelectItem>
          <SelectItem value="price-asc">Fiyat: Düşükten Yükseğe</SelectItem>
          <SelectItem value="price-desc">Fiyat: Yüksekten Düşüğe</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
