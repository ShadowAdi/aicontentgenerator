"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const Upgrade = () => {
  const router = useRouter();
  const handleClick = async () => {
    try {
      const response = await axios.post("/api/upgrade/checkout");
      console.log("Checkout response:", response);
      router.push(response?.data?.url);
    } catch (error) {
      console.error("Error initiating checkout:", error);
    }
  };

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 px-4 mx-6 bg-white rounded">
        <h2 className="font-medium">Upgrade Plan</h2>
      </div>
      <div className="mt-5 py-6 px-4 rounded">
        <Card className="w-[350px] flex flex-col mx-auto">
          <CardHeader>
            <CardTitle>10$ - One Time Plan</CardTitle>
            <CardDescription>10,000 AI Credits</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <p className="flex gap-2 my-2">
                <CheckIcon /> 10,000 Words/Purchase
              </p>
              <p className="flex gap-2 my-2">
                <CheckIcon /> All Template Access
              </p>
              <p className="flex gap-2 my-2">
                <CheckIcon /> Retain All History
              </p>
            </div>
            <Button className="mt-5" onClick={handleClick}>
              Purchase
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upgrade;
