"use client";
import { TextArea } from "@/components/text-area";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { Content } from "@/lib/types";
import { useId, useRef } from "react";

export const NewContentForm = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const id = useId();

  const storage = useLocalStorage<Content>();

  const handleOnSave = () => {
    const value = ref.current?.value;

    if (!value) {
      alert("Please enter some text!");
      return;
    }

    storage.setValue(id, { title: value, content: value });
    alert("Saved!");
  };

  return (
    <>
      <TextArea
        autoFocus={true}
        ref={ref}
        className="border-transparent focus:border-transparent focus:ring-0 rounded-none !p-0"
        placeholder="Write something..."
      />
      <button onClick={handleOnSave}>Save</button>
    </>
  );
};
