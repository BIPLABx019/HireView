import React from "react";
import dayjs from "dayjs";
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM DD, YYYY");

  return <div className="card-border w-[360px] max-sm:w-full min-h-96">
    <div className="card-interview">
      <div>
        <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
           <p className="badge-text">{normalizedType}</p> 
        </div>
        <Image src={getRandomInterviewCover()} alt="company logo" width={90} height={90} className="rounded-full object-fit " />
        <h3 className="mt-5 capitalize">
          {role} Interview
        </h3>
        <div className="flex flex-row gap-5 mt-3">
          <div className="flex flex-row gap-2 items-center">
            <Image src="/calendar.svg" alt="calendar icon" width={22} height={22} />
            <p className="text-s">{formattedDate}</p>
            <Image src="/star.svg" alt="star icon" width={22} height={22} />
            <p>{feedback?.totalScore || "---"}</p>
          </div>
        </div>
        <p className="line-clamp-2 mt-5">
          {feedback?.finalAssessment || "You haven't taken this interview yet."}
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <DisplayTechIcons techStack={techstack} />
        <Button className="btn-oprimary">
          <Link href={feedback? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}>
            {feedback ? "check Feedback" : "View Interview"}
          </Link>
        </Button>
        
      </div>
    </div>
  </div>;
};

export default InterviewCard;
