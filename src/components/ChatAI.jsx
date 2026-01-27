import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, X, SendHorizontal } from "lucide-react";

export function ChatAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Trigger button */}
      {!open && (
        <Button
          className="rounded-full bg-blue-600 hover:bg-blue-500 w-14 h-14 flex items-center justify-center"
          onClick={() => setOpen(true)}
        >
          <Sparkles className="size-6" />
        </Button>
      )}

      {/* Chat form */}
      {open && (
        <div className="w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-2 border-b">
            <h4 className="font-medium text-sm">Chat with AI</h4>
            <Button
              size="sm"
              variant="ghost"
              className="p-1"
              onClick={() => setOpen(false)}
            >
              <X size={16} />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-2">
            <div className="flex-1 p-2 overflow-y-auto flex flex-col gap-2">
              <div className="max-w-[70%] bg-gray-100 text-gray-800 p-2 rounded-xl self-start">
                Hello! How can I help you?
              </div>

              <div className="max-w-[70%] bg-blue-500 text-white p-2 rounded-xl self-end">
                Hi, I have a question.
              </div>

              {messages?.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[70%] p-2 rounded-xl ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-100 text-gray-800 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input area */}
          <div className="flex gap-2 p-2 border-t">
            <Input
              className="flex-1 h-8"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              onClick={() => {
                if (!input.trim()) return;
                setMessages((prev) => [
                  ...prev,
                  { text: input, sender: "user" },
                ]);
                setInput("");
              }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500"
            >
              <SendHorizontal className="size-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
