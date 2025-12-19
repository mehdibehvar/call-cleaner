const Filter = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 ">      
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="flex items-center gap-2">          
          <input type="checkbox" className="h-4 w-4 rounded-sm bg-gray-200 border-gray-300 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-800" />
          <label className="text-sm font-medium text-gray-900">
            All
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 rounded-sm bg-gray-200 border-gray-300 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-800" />
          <label className="text-sm font-medium text-gray-900">
            Cleaning
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 rounded-sm bg-gray-200 border-gray-300 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-800" />
          <label className="text-sm font-medium text-gray-900">
            Laundry
          </label>
        </div>
      </div>
    </div>
  );
};  

export default Filter;