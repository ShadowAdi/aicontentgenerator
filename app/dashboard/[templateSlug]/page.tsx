"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contentTemplates } from "@/lib/content-template";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Editor } from "./_components/Editor";
import { chatSession } from "@/lib/GeminiConfig";
import axios from "axios";
interface templaeSlugProps {
  templateSlug: string;
}

const TemplateSlug = ({ params }: { params: templaeSlugProps }) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );

  const generateAiContent = async (formData: FormData) => {
    setIsLoading(true);

    try {
      let dataset = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAiPrompt = JSON.stringify(dataset) + ", " + selectedPrompt;

      const result = await chatSession.sendMessage(finalAiPrompt);
      setAiOutput(result.response.text());
      const response = await axios.post("/api/", {
        title: dataset.title,
        description: result.response.text(),
        templateUsed: selectedTemplate?.name,
      });
      
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (formData: FormData) => {
    generateAiContent(formData);
  };
  return (
    <div className="mx-5  py-2 ">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2 className="font-medium">{selectedTemplate?.name}</h2>
      </div>
      <form action={onSubmit} className="flex flex-col gap-4 p-5 mt-5 bg-white">
        {selectedTemplate?.form?.map((form,i) => (
          <div key={i}>
            <label htmlFor="">{form.label}</label>
            {form.field === "input" ? (
              <div className="mt-5">
                <Input name="title" />
              </div>
            ) : (
              <div className="mt-5">
                <Textarea name="description" />
              </div>
            )}
          </div>
        ))}
        <Button className="mt-5 w-fit" type="submit">
          {isLoading ? (
            <>
              <AiOutlineLoading3Quarters className="animate-spin" />{" "}
            </>
          ) : (
            <>Generate Content</>
          )}
        </Button>
      </form>
      <div className="my-10">
        <Editor value={isLoading ? "Generating..." : aiOutput} />
      </div>
    </div>
  );
};

export default TemplateSlug;
