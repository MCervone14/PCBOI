import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface CustomFilterProps {
  title: string;
  list: string[] | number[];
}

const CustomFilter = ({ title, list }: CustomFilterProps) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent className="scrollbar">
        <SelectGroup className="overflow-y-scroll max-h-[200px]  text-left">
          {list.map((item, idx) => (
            <div key={idx}>
              <SelectItem value={`${item}`}>{item}</SelectItem>
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomFilter;
