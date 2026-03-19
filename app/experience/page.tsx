"use client";

import Navbar from "@/components/Navbar";
import { FadeInGroup, FadeInItem } from "@/components/FadeIn";

export default function Experience() {
  return (
    <div className="w-full">
      <div className="min-h-screen">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
          <p className="text-lg">Raja Muhammed Omar</p>
          <Navbar />
        </div>

        <FadeInGroup>
          <FadeInItem>
            <div className="text-sm font-bold pt-14 pb-5 text-myblue uppercase tracking-widest">
              Work
            </div>
          </FadeInItem>

          <FadeInItem>
            <a
              href="https://www.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block -mx-3 px-3 py-3 rounded-lg transition-colors duration-200 hover:bg-myblue/5 group"
            >
              <p>
                Software Development Engineer Intern at{" "}
                <span className="underline decoration-neutral-300 group-hover:decoration-myblue transition-colors duration-200">
                  Amazon
                </span>
              </p>
              <p className="text-mygray">
                May 2025 — Aug 2025 · Vancouver, BC
              </p>
              <p className="pt-2">
                Owned and built a full-stack application end to end — from
                low-level design to development to deployment using React,
                TypeScript, and Java.
              </p>
            </a>
          </FadeInItem>

          <FadeInItem>
            <a
              href="https://arcurve.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block -mx-3 px-3 py-3 rounded-lg transition-colors duration-200 hover:bg-myblue/5 group mt-2"
            >
              <p>
                Software Developer Intern at{" "}
                <span className="underline decoration-neutral-300 group-hover:decoration-myblue transition-colors duration-200">
                  Arcurve
                </span>
              </p>
              <p className="text-mygray">
                May 2024 — Apr 2025 · Calgary, AB
              </p>
              <p className="pt-2">
                Worked 8 months on an internal project management tool building
                full-stack features using C# and .NET, and 4 months on TC
                Energy&apos;s AP project developing AWS Lambda functions.
              </p>
            </a>
          </FadeInItem>

          <FadeInItem>
            <div className="border-t border-neutral-200 mt-8" />
            <div className="text-sm font-bold pt-10 pb-5 text-myblue uppercase tracking-widest">
              Skills
            </div>
          </FadeInItem>

          <FadeInItem>
            <p className="text-mygray">
              <span className="text-neutral-700 font-medium">Languages:</span>{" "}
              TypeScript, JavaScript, Java, Python, C#, SQL, C/C++
            </p>
          </FadeInItem>
          <FadeInItem>
            <p className="text-mygray pt-2">
              <span className="text-neutral-700 font-medium">Frameworks:</span>{" "}
              React, Express.js, FastAPI, Django, .NET (Blazor), Node.js
            </p>
          </FadeInItem>
          <FadeInItem>
            <p className="text-mygray pt-2">
              <span className="text-neutral-700 font-medium">
                Databases / Cloud:
              </span>{" "}
              PostgreSQL, MySQL, MongoDB, Redis, Firebase, AWS (EC2, S3, RDS,
              Lambda, CDK)
            </p>
          </FadeInItem>
          <FadeInItem>
            <p className="text-mygray pt-2">
              <span className="text-neutral-700 font-medium">
                Tools / Testing:
              </span>{" "}
              Git, Docker, Terraform, GitHub Actions, Azure DevOps (Repos,
              Boards), JUnit, Cypress, YAML
            </p>
          </FadeInItem>

          <FadeInItem>
            <div className="border-t border-neutral-200 mt-8" />
            <div className="text-sm font-bold pt-10 pb-5 text-myblue uppercase tracking-widest">
              Projects
            </div>
          </FadeInItem>

          <FadeInItem>
            <a
              href="https://github.com/raja-omar/clarity-browser"
              target="_blank"
              rel="noopener noreferrer"
              className="block -mx-3 px-3 py-3 rounded-lg transition-colors duration-200 hover:bg-myblue/5 group"
            >
              <div className="flex justify-between items-center">
                <p>Clarity Browser</p>
                <span className="text-mygray text-sm group-hover:text-myblue transition-colors duration-200">
                  GitHub ↗
                </span>
              </div>
              <p className="text-mygray">
                Electron, React, TypeScript, SQLite, OpenAI, Google Calendar,
                Jira
              </p>
            </a>
          </FadeInItem>

          <FadeInItem>
            <a
              href="https://github.com/raja-omar/ForYourResearch"
              target="_blank"
              rel="noopener noreferrer"
              className="block -mx-3 px-3 py-3 rounded-lg transition-colors duration-200 hover:bg-myblue/5 group mt-2"
            >
              <div className="flex justify-between items-center">
                <p>For Your Research</p>
                <span className="text-mygray text-sm group-hover:text-myblue transition-colors duration-200">
                  GitHub ↗
                </span>
              </div>
              <p className="text-mygray">
                React, FastAPI, PostgreSQL, AWS, GitHub Actions · AI literature
                screening
              </p>
            </a>
          </FadeInItem>

          <FadeInItem>
            <a
              href="https://github.com/raja-omar/DB-Assist"
              target="_blank"
              rel="noopener noreferrer"
              className="block -mx-3 px-3 py-3 rounded-lg transition-colors duration-200 hover:bg-myblue/5 group mt-2"
            >
              <div className="flex justify-between items-center">
                <p>DB Assist</p>
                <span className="text-mygray text-sm group-hover:text-myblue transition-colors duration-200">
                  GitHub ↗
                </span>
              </div>
              <p className="text-mygray">
                Next.js, FastAPI, PostgreSQL, Vanna AI, Google Gemini ·
                text-to-SQL
              </p>
            </a>
          </FadeInItem>
        </FadeInGroup>
      </div>
    </div>
  );
}
