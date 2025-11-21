import { ListingProvider } from "@/context/listing-form-context";
import  ListingContent  from "./new-listing-content";

export default function NewListing() {
  return (
    <ListingProvider>
      <ListingContent />
    </ListingProvider>
  );
}