import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function JobFilterForm() {
  return (
    <>
      <form className="flex flex-col gap-[10px] sm:flex-row xl:flex-row xl:items-center xl:justify-end">
        <Select>
          <SelectTrigger className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 font-inter text-sm font-normal leading-[22px] text-dark focus-within:border-blue focus:border focus:border-blue focus:ring-0 sm:w-[292px]">
            <SelectValue placeholder="All Location" />
          </SelectTrigger>
          <SelectContent className="w-full rounded-[5px] bg-white sm:w-[292px]">
            <SelectGroup>
              <SelectItem
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value="apple"
              >
                Apple
              </SelectItem>
              <SelectItem
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value="banana"
              >
                Banana
              </SelectItem>
              <SelectItem
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value="blueberry"
              >
                Blueberry
              </SelectItem>
              <SelectItem
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value="grapes"
              >
                Grapes
              </SelectItem>
              <SelectItem
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value="pineapple"
              >
                Pineapple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 font-inter text-sm font-normal leading-[22px] text-dark focus-within:border-blue focus:border focus:border-blue focus:ring-0 sm:w-[292px]">
            <SelectValue placeholder="Departments" />
          </SelectTrigger>
          <SelectContent className="w-full rounded-[5px] bg-white sm:w-[292px]">
            <SelectGroup>
              <SelectItem
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value="apple"
              >
                Apple
              </SelectItem>
              <SelectItem
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value="banana"
              >
                Banana
              </SelectItem>
              <SelectItem
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value="blueberry"
              >
                Blueberry
              </SelectItem>
              <SelectItem
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value="grapes"
              >
                Grapes
              </SelectItem>
              <SelectItem
                className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                value="pineapple"
              >
                Pineapple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </form>
    </>
  );
}

export default JobFilterForm;
