"use client";
import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: { title: "", content: "", tag: [] },
  });

  const handleCreateQuestion = () => {};
  return (
    <Form {...form}>
      <form
        className="flex flex-col w-full gap-10"
        onSubmit={form.handleSubmit(handleCreateQuestion)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                Question Title
              </FormLabel>
              <FormControl>
                <Input
                  required
                  type="text"
                  {...field}
                  className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                />
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                A short, descriptive title that summarizes your question.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                Detailed explanation of your problem
              </FormLabel>
              <FormControl>Editor</FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Include all the information someone would need to answer your
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                Tags
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    required
                    type="text"
                    {...field}
                    placeholder="Add tags..."
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                  />
                  tags
                </div>
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Add up to 3 tags to describe what your question is about.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end mt-16">
          <Button
            type="submit"
            className="primary-gradient !text-light-900 w-fit"
          >
            Add a question
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;
