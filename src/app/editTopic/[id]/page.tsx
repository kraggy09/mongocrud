import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

export default function EditTopic({ params }: { params: { id: string } }) {
  return <EditTopicForm id={params.id} />;
}
