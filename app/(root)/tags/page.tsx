import { getTags } from "@/lib/actions/tag.action";
import React from "react";

const Tags = async () => {
  const { success, data, error } = await getTags({
    page: 1,
    pageSize: 10,
    query: "",
  });

  const { tags } = data || {};

  console.log("Tags", JSON.stringify(tags, null, 2));

  return <div>Tags</div>;
};

export default Tags;
