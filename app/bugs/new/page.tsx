"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface BugForm {
  title: string;
  description: string;
}

const NewBugPage = () => {
  const { register, control, handleSubmit } = useForm<BugForm>();
  const router = useRouter();
  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit((data) => {
        axios.post("/api/bugs", data);
        router.push("/bugs");
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <Button>Add New Bug</Button>
    </form>
  );
};

export default NewBugPage;
