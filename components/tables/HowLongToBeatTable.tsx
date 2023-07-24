import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "../ui/card";

const howLongtoBeatHrs = [
  {
    id: 1,
    main: "20 hrs",
    mainAndExtras: "30 hrs",
    completionist: "50 hrs",
    allStyles: "100 hrs",
  },
];

export default function HowLongtoBeat() {
  return (
    <Card className="w-[400px] mt-2">
      <Table className="text-center">
        <TableCaption>Powered by HowLongtoBeat</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Main Story</TableHead>
            <TableHead className="text-center">Main + Extras</TableHead>
            <TableHead className="text-center">Completionist</TableHead>
            <TableHead className="text-center">All Styles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {howLongtoBeatHrs.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.main}</TableCell>
              <TableCell>{item.mainAndExtras}</TableCell>
              <TableCell>{item.completionist}</TableCell>
              <TableCell>{item.allStyles}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
