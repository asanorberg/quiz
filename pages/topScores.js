import Layout from "@/components/Layout";
import ScoreBoard from "@/components/ScoreBoard";
import Image from "next/image";
import crown from "../public/crown.png";

export default function topScores() {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center">
          <h1 className="m-10 text-center">Leaderboard Legends</h1>
          <p className="text-center w-[320px] md:w-[600px] mb-8 leading-6">
            Enter the battleground of champions. Crush your opponents, dominate
            the scores, and carve your name into the halls of glory on the
            Leaderboard of Legends
          </p>
          <Image className="h-auto w-[80px]" src={crown}></Image> <ScoreBoard />
        </div>
      </Layout>
    </>
  );
}
