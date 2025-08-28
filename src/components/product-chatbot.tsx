"use client";

import { useState, useRef, useEffect } from "react";
import { productChatbot, ProductChatbotInput } from "@/ai/flows/product-chatbot-flow";
import { type Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, User, Send, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ChatMessage {
  role: "user" | "model";
  content: string;
}

export default function ProductChatbot({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatInput: ProductChatbotInput = {
        productId: product.id,
        history: [...messages, userMessage],
      };
      const result = await productChatbot(chatInput);
      const modelMessage: ChatMessage = { role: "model", content: result.response };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: ChatMessage = {
        role: "model",
        content: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button variant="outline" className="w-full" onClick={() => setIsOpen(true)}>
        <Bot className="mr-2" /> Ask AI Assistant
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] flex flex-col h-[70vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot /> AI Assistant for {product.name}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-1 p-4 -mx-6" ref={scrollAreaRef}>
            <div className="space-y-4 pr-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    message.role === "user" ? "justify-end" : ""
                  }`}
                >
                  {message.role === "model" && (
                    <Avatar className="h-8 w-8">
                       <AvatarFallback><Bot size={20}/></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg px-3 py-2 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                   {message.role === "user" && (
                    <Avatar className="h-8 w-8">
                       <AvatarFallback><User size={20}/></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
               {isLoading && (
                 <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                       <AvatarFallback><Bot size={20}/></AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-3 py-2 bg-muted">
                        <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                </div>
               )}
            </div>
          </ScrollArea>
          <DialogFooter>
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the product..."
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
