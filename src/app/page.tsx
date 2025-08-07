import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Staking } from "../../components/Staking";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}>
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px auto",
        width: "100%",
        maxWidth: "1400px",
        flex: 1,
        padding: "0 20px"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "20px"
        }}>
          <h1 style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            margin: 0,
            textAlign: "center",
            color: "#ffffff"
          }}>ERC-721 Staking App</h1>
        </div>
        <ConnectEmbed
          client={client}
          chain={chain}
        />
        <Staking />
      </main>
      <Footer />
    </div>
  );
}
