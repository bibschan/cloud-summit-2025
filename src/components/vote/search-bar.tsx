import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="text"
        placeholder="Search cloud providers..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
      />
    </div>
  );
} 