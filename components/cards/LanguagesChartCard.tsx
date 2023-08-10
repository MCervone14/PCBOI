"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Icons } from "../Icons";
import ShowMoreButton from "../ShowMoreButton";
import { Card } from "../ui/card";
import { type Language } from "@prisma/client";
import {
  Table,
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
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current?.clientHeight! > 100) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }, []);

  return (
    <Card
      className={`w-full md:w-[400px] ${
        showMore ? "h-[130px]" : "h-auto"
      } mt-2 overflow-hidden relative `}
      ref={elementRef}
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
              <TableCell className="font-medium text-xs text-center">
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
      {showMore && (
        <ShowMoreButton
          showMore={showMore}
          setShowMore={setShowMore}
          className="absolute bottom-0 right-0"
        />
      )}
    </Card>
  );
};

export default LanguagesChartCard;
