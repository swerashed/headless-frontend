import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "../ui/select";

function JobFilterForm({ filterProps }) {
  const { 
    districts, 
    departments, 
    selectedDistrict, 
    setSelectedDistrict, 
    selectedDepartment, 
    setSelectedDepartment 
  } = filterProps;

  return (
    <form className="flex flex-col gap-[10px] sm:flex-row xl:flex-row xl:items-center xl:justify-end">
      {/* District Select */}
      <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
        <SelectTrigger className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 font-inter text-sm font-normal leading-[22px] text-dark focus-within:border-blue focus:ring-0 focus-visible:outline-0 sm:w-[292px]">
          <SelectValue placeholder="All Locations" />
        </SelectTrigger>
        <SelectContent className="w-full rounded-[5px] bg-white sm:w-[292px]">
          <SelectGroup>
            {districts.map((district, index) => (
              <SelectItem
                key={index}
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value={district.value}
              >
                {district.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Department Select */}
      <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
        <SelectTrigger className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 font-inter text-sm font-normal leading-[22px] text-dark focus-within:border-blue focus:ring-0 focus-visible:outline-0 sm:w-[292px]">
          <SelectValue placeholder="Departments" />
        </SelectTrigger>
        <SelectContent className="w-full rounded-[5px] bg-white sm:w-[292px]">
          <SelectGroup>
            {departments.map((department, index) => (
              <SelectItem
                key={index}
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value={department.value}
              >
                {department.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </form>
  );
}

export default JobFilterForm;
