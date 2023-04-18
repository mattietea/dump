"use client";
import { useId, useState } from "react";
import { Stack, Input } from "ui";

import { Label } from "../../../components/ui/label";
import { TextArea } from "../../../components/ui/text-area";
import { useLocalStorage } from "../../../lib/hooks/use-local-storage";
import { Content } from "../../../lib/types";

export const NewContentForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const id = useId();

  const storage = useLocalStorage<Content>();

  const handleOnSave = () => {
    if (!title || !body) {
      alert("Please enter some text!");
      return;
    }

    storage.setValue(id, { title, body });
    alert("Saved!");
  };

  return (
    <Stack y={6}>
      <Stack y={3}>
        <Label>Title</Label>
        <Input
          autoFocus={true}
          value={title}
          onChange={setTitle}
          variant="flush"
          placeholder="Write something..."
        />
      </Stack>
      <Stack y={3}>
        <Label>Body</Label>
        <TextArea
          value={body}
          onChange={setBody}
          variant="flush"
          placeholder="Write something..."
        />
      </Stack>
      <button onClick={handleOnSave}>Save</button>
    </Stack>
  );
};
