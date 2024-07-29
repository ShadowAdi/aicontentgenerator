"use client";
import { contentTemplates } from "@/lib/content-template";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TemplateListing = ({ input }: { input: string }) => {
  const [templateList, setTempateList] = useState(contentTemplates);
  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");

  useEffect(() => {
    if (searchCategory === "All") {
        setTempateList(contentTemplates);
    } else if (searchCategory) {
      const filteredTemplates = contentTemplates.filter(
        (item) => item.category === searchCategory
      );
      setTempateList(filteredTemplates);
    } else {
        setTempateList(contentTemplates);
    }
  }, [searchCategory]);

  useEffect(() => {
    if (input && input.length > 2) {
      const filteredTemplates = templateList.filter((template, i) =>
        template.name.toLowerCase().includes(input.toLowerCase())
      );
      setTempateList(filteredTemplates);
    } else {
      setTempateList(contentTemplates);
    }
  }, [input]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5">
      {templateList?.map((template) => {
        return (
          <div
            key={template?.slug}
            className="bg-white w-full rounded-lg  h-[200px] py-4 px-4 text-center flex flex-col justify-center"
          >
            <Link href={`/dashboard/${template.slug}`}>
              <template.icon className="w-12 h-12 mx-auto"></template.icon>
              <h2 className="font-semibold mt-5">{template.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TemplateListing;
