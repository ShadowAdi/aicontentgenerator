import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const History = async () => {
  const { userId } = auth();

  const userHistory = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bh-white rounded">
        <h2 className="font-medium">Output History</h2>
      </div>
      <div className="mt-5 py-6 px-4 bh-white rounded">
        {userHistory ? (
          <Table>
            <TableCaption>A list of your AI Output History</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Template</TableHead>
                <TableHead className="w-[250px]">Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userHistory && userHistory.length > 0
                ? userHistory.map((history) => (
                    <>
                      <TableRow key={history.id}>
                        <TableCell>{history.templateUsed}</TableCell>
                        <TableCell>{history.title}</TableCell>
                        <TableCell className="whitespace-pre-wrap">
                          {history.description}
                        </TableCell>
                        <TableCell className="text-right">
                          {format(history.createdAt, "MM/dd/yyyy")}
                        </TableCell>
                      </TableRow>
                    </>
                  ))
                : null}
            </TableBody>
          </Table>
        ) : (
          <div className="flex justify-center py-4 items-center flex-col gap-5 bg-white">
            <h1 className="text-xl font-bold ">No History Found</h1>
            <Button variant={"link"}><Link href={"/dashboard"}>Create Some</Link></Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
