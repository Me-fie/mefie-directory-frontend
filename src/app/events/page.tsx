import NavigationTab from "@/components/navigation-tab";

export default async function Events(){
    return (
         <div className="overflow-x-hidden pt-20 bg-gray-50">
              <div className="w-full">
                {/* Main Navigation Tabs */}
                <NavigationTab />
                
                {/* Category Tabs & Content */}
                {/* <BusinessesContent categories={categories} businesses={businesses} /> */}
              </div>
            </div>
    )
}