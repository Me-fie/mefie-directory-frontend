"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useCallback, useRef, useState, useEffect } from "react";

export type CategoryTabItem = {
  label: string;
  value: string;
  count?: number;
};

export interface ScrollableCategoryTabsProps {
  categories: CategoryTabItem[];
  defaultValue?: string;
  className?: string;
  containerClassName?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  inactiveTabClassName?: string;
  onChange?: (value: string) => void;
}

export default function ScrollableCategoryTabs({
  categories,
  defaultValue,
  className,
  containerClassName,
  tabClassName,
  activeTabClassName,
  inactiveTabClassName,
  onChange,
}: ScrollableCategoryTabsProps) {
  const initial = defaultValue ?? categories[0]?.value ?? "";
  const [value, setValue] = useState<string>(initial);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<Record<string, HTMLButtonElement | null>>({});

  const setButtonRef = useCallback((key: string, el: HTMLButtonElement | null) => {
    buttonsRef.current[key] = el;
  }, []);

  const select = useCallback(
    (next: string) => {
      setValue(next);
      onChange?.(next);
    },
    [onChange]
  );

  // Ensure the selected pill is scrolled into view
  useEffect(() => {
    const el = buttonsRef.current[value];
    if (el && containerRef.current) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [value]);

  return (
    <div className={cn("w-full", className)}>
      <div className={cn("relative mt-1 rounded-full pt-6 mx-auto px-6 lg:px-16", containerClassName)}>
        <div
          ref={containerRef}
          role="listbox"
          aria-label="Categories"
          tabIndex={0}
          className="flex w-full gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {categories.map((cat) => {
            const selected = value === cat.value;
            return (
              <button
                key={cat.value}
                ref={(el) => setButtonRef(cat.value, el)}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => select(cat.value)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium border transition-colors",
                  tabClassName,
                  selected
                    ? cn("bg-[#9ACC23] text-white border-[#9ACC23]", activeTabClassName)
                    : cn("bg-white text-[#0F172A] hover:bg-[#F1F5F9]", inactiveTabClassName)
                )}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
 

