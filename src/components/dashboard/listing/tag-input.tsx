import { useState, KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TagInputProps {
  label: string;
  placeholder: string;
  tags: string[];
  onChange: (tags: string[]) => void;
}

export function TagInput({
  label,
  placeholder,
  tags,
  onChange,
}: TagInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        onChange([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="h-10"
      />
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-0 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "inline-flex items-center px-3 py-1.5 rounded-lg text-sm gap-3",
                "bg-[#1C3C59] text-white border border-[#1C3C59"
              )}
            >
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="bg-white border text-gray-800 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
