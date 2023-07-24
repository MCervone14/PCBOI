"use client";

import { useState } from "react";
import { Icons } from "../Icons";
import ShowMoreButton from "../ShowMoreButton";
import { Card } from "../ui/card";
import { type Language } from "@prisma/client";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

interface LanguagesChartCardProps {
  languages: Language[];
}

const LanguagesChartCard = ({ languages }: LanguagesChartCardProps) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Card
      className={`w-[400px] ${
        showMore ? "h-auto" : "h-[140px]"
      } mt-2 overflow-hidden relative `}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Language</TableHead>
            <TableHead>Interface</TableHead>
            <TableHead>FullAudio</TableHead>
            <TableHead>Subtitles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {languages.map((language) => (
            <TableRow key={language.language}>
              <TableCell className="font-medium text-xs">
                {language.language}
              </TableCell>
              <TableCell>
                {language.interface ? (
                  <Icons.check className="w-4 h-4 mx-auto" />
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell>
                {language.fullAudio ? (
                  <Icons.check className="w-4 h-4 mx-auto" />
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell>
                {language.subtitles ? (
                  <Icons.check className="w-4 h-4 mx-auto" />
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ShowMoreButton
        showMore={showMore}
        setShowMore={setShowMore}
        className="absolute bottom-0 right-0"
      />
    </Card>
  );
};

export default LanguagesChartCard;
