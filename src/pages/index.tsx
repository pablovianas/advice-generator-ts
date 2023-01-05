import Head from "next/head";
import { Card } from "../components/Card"

export default function Home() {
  return (
      <>
          <Head>
            <title>Frontend Mentor | Advice generator app</title>
          </Head>
          <main>
              <Card />
          </main>
      </>
  );
}
