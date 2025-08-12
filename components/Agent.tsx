"use client";

import { cn } from "@/lib/utils";
import { Divide } from "lucide-react";
import Image from "next/image";
import React from "react";

enum CallStatus {
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
  CONNECTING = "CONNECTING",
}

const Agent = ({ userName }: AgentProps) => {
  const callStatus = CallStatus.INACTIVE;
  const isSpeaking = true;

  const messages = [
    "What is your name?",
    "My name is John Doe.",
    "What is your experience with React?",
    "I have been working with React for over 3 years.",
    "What is your favorite feature of React?",
    "My favorite feature is the component-based architecture.",
    "How do you handle state management in React?",
    "I use React Context API and Redux for state management.",
    "What is your approach to testing React components?",
    "I use Jest and React Testing Library for testing React components.",
    "How do you optimize performance in React applications?",
    "I use techniques like code splitting, lazy loading, and memoization to optimize performance.",
    "What is your experience with Next.js?",
    "I have built several applications using Next.js, leveraging its server-side rendering and static sites.",
  ];

  const lastMessatge = messages[messages.length - 1];

  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="AI Avatar"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak"></span>}
          </div>

          <h3>AI Interviewer</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="user avatar"
              width={540}
              height={540}
              className="rounded-full object-cover size-[120px]"
            />
            <h3 className="text-center">{userName}</h3>
          </div>
        </div>
      </div>
      {messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              key={lastMessatge}
              className="cn('transition-opacity duration-500 opacity-0','animate-fadeIn opacity-100')"
            >
              {lastMessatge}
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center">
        {callStatus !== "ACTIVE" ? (
          <button className="relative btn-call">
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            />

            <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect">End</button>
        )}
      </div>
    </>
  );
};

export default Agent;
