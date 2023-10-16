"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewBugPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Add New Bug</Button>
    </div>
  );
};

export default NewBugPage;
