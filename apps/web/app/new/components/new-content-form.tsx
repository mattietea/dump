"use client";
import { useId, useRef } from "react";

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Stack } from "../../../components/ui/stack";
import { TextArea } from "../../../components/ui/text-area";
import { useLocalStorage } from "../../../lib/hooks/use-local-storage";
import { Content } from "../../../lib/types";

export const NewContentForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const id = useId();

  const storage = useLocalStorage<Content>();

  const handleOnSave = () => {
    const title = titleRef.current?.value;
    const content = titleRef.current?.value;

    if (!title || !content) {
      alert("Please enter some text!");
      return;
    }

    storage.setValue(id, { title, content });
    alert("Saved!");
  };

  return (
    <Stack y={6}>
      <Stack y={3}>
        <Label>Title</Label>
        <Input
          autoFocus={true}
          ref={titleRef}
          variant="flush"
          placeholder="Write something..."
        />
      </Stack>
      <Stack y={3}>
        <Label>Body</Label>
        <TextArea
          ref={bodyRef}
          variant="flush"
          placeholder="Write something..."
        />
      </Stack>
      <button onClick={handleOnSave}>Save</button>
    </Stack>
  );
};
