import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const BugPage = () => {
  return (
    <div>
      <Button>
        <Link href={"/bugs/new"}>New Bug</Link>
      </Button>
    </div>
  );
};

export default BugPage;
