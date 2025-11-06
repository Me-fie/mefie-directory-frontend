// "use client";

// import { useState, useMemo, Suspense } from "react";
// import ScrollableCategoryTabs from "@/components/scrollable-category-tabs";
// import SearchHeader from "@/components/search-header";
// import { EventsCategory, Event, Events } from "@/lib/data";
// import BusinessSection from "@/components/business/business-section";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import EventSectionCarousel from "@/components/event-section-carousel";

// interface EventsContentProps {
//   categories: EventsCategory[];
//   events: Event[];
// }

// export default function EventsContent({
//   categories,
//   events,
// }: EventsContentProps) {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [showAllCategories, setShowAllCategories] = useState(false);

//   const event = Events

//   // Filter businesses based on selected category
//   const filteredevents = useMemo(() => {
//     if (selectedCategory === "all") {
//       return events;
//     }

//     return events.filter((event) => {
//       // Normalize both values for flexible matching
//       const normalizeString = (str: string) =>
//         str
//           .toLowerCase()
//           .replace(/\s+/g, "-")
//           .replace(/&/g, "")
//           .replace(/'/g, "");

//       const eventsCategory = normalizeString(event.category);
//       const selectedCat = normalizeString(selectedCategory);

//       // Flexible matching: exact match or partial match
//       return (
//         eventsCategory === selectedCat ||
//         eventsCategory.includes(selectedCat) ||
//         selectedCat.includes(eventsCategory)
//       );
//     });
//   }, [events, selectedCategory]);

//   // Get businesses by specific category
//   const getBusinessesByCategory = (category: string) => {
//     return filteredevents.filter((e) => e.category === category);
//   };

//   // Main categories to show initially (in order)
//   const mainCategories = ["Online Events", "Comedy", "Theatre"];

//   // Additional categories to show after "Explore more"
//   const additionalCategories = [
//     "Caterer",
//     "Dancers",
//     "Cultural Attire Stylist",
//     "Drummers & Cultural Performers",
//     "Toys & Games",
//     "Books & Magazines",
//   ];

//   return (
//     <>
//       {/* Scrollable Category Tabs */}
//       <div>
//         <ScrollableCategoryTabs
//           categories={categories}
//           defaultValue="all"
//           onChange={(value) => {
//             setSelectedCategory(value);
//             setShowAllCategories(false); // Reset expand state when category changes
//           }}
//           containerClassName="pt-4 pb-1"
//         />
//       </div>

//       {/* Search and Filter Bar */}
//       <div>
//         <Suspense fallback={<div className="h-20" />}>
//           <SearchHeader context="businesses" />
//         </Suspense>
//       </div>

//       {/* Events content */}
//       <div className="bg-gray-50">

//       </div>
//     </>
//   );
// }

export default function EventsContent(){
    return(
        <div>
            <h1>Events</h1>
        </div>
    )
}
