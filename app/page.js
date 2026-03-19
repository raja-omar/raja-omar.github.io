import Navbar from "@/components/Navbar";
import { FadeInGroup, FadeInItem } from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="w-full">
      <div className="min-h-screen">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
          <p className="text-lg">Raja Muhammed Omar</p>
          <Navbar />
        </div>

        <FadeInGroup>
          <FadeInItem>
            <div className="text-sm font-bold pt-14 pb-3 text-myblue uppercase tracking-widest">
              About
            </div>
          </FadeInItem>

          <FadeInItem>
            <p className="pt-6">
              Hey, I&apos;m Omar, a Computer Science student at the{" "}
              <span className="font-medium">University of Calgary</span>{" "}
              (graduating Apr 2027). I love building things that actually work
              in production, whether that&apos;s shipping full-stack features,
              squeezing out performance, or designing systems that don&apos;t
              fall over at scale.
            </p>
          </FadeInItem>

          <FadeInItem>
            <p className="pt-6">
              I&apos;ve worked as an SDE intern at Amazon and Arcurve. Outside
              of work, I like playing table tennis and vibe coding random POCs with Cursor.
            </p>
          </FadeInItem>

          <FadeInItem>
            <p className="pt-6">
              Always happy to chat about internships, collaborations, or
              interesting problems,{" "}
              <span className="font-bold">
                <a href="mailto:raja.omar@ucalgary.ca">
                  reach out anytime.
                </a>
              </span>
            </p>
            <p className="pt-2 text-mygray">
              <a href="tel:+18257366606">+1 825 736 6606</a>
            </p>
          </FadeInItem>
        </FadeInGroup>
      </div>
    </div>
  );
}
