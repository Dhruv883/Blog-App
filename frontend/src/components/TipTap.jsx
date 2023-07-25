import "./styles.css";
import { EditorContent } from "@tiptap/react";
import React from "react";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-x-6 gap-y-3 flex-wrap">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={
          editor.isActive("code")
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        code
      </button>

      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive("paragraph")
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={
          editor.isActive("heading", { level: 4 })
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={
          editor.isActive("heading", { level: 5 })
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={
          editor.isActive("heading", { level: 6 })
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        h6
      </button>

      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock")
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote")
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="border border-primaryYellow px-3 h-10 rounded-md"
      >
        horizontal rule
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="border border-primaryYellow px-3 h-10 rounded-md"
      >
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="border border-primaryYellow px-3 h-10 rounded-md"
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="border border-primaryYellow px-3 h-10 rounded-md"
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" })
            ? "is-active bg-primaryYellow px-3 h-10 rounded-md"
            : "border border-primaryYellow px-3 h-10 rounded-md"
        }
      >
        purple
      </button>
    </div>
  );
};

export default ({ editor }) => {
  return (
    <div className="flex flex-col gap-10">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="border-2 border-primaryYellow p-2 min-h-[300px]"
      />
    </div>
  );
};
