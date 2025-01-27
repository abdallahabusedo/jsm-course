"use client";
import { toast } from "@/hooks/use-toast";
import { incrementViews } from "@/lib/actions/question.action";
import React from "react";

const View = ({ questionId }: { questionId: string }) => {
  const handleIncrementViews = async () => {
    const result = await incrementViews({ questionId });

    if (result.success) {
      toast({
        title: "Success",
        description: "Views incremented successfully.",
      });
    } else {
      toast({
        title: "Error",
        description: result.error?.message || "An error occurred.",
        variant: "destructive",
      });
    }
  };

  React.useEffect(() => {
    handleIncrementViews();
  }, []);
  return null;
};

export default View;
