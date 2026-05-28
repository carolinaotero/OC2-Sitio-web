import { Link } from "react-router";
import { usePageTitle } from "../hooks/usePageTitle";
import { Hero } from "../components/Hero";
import { Authority } from "../components/Authority";
import { Quote } from "../components/Quote";
import { Quote2 } from "../components/Quote2";
import { Services } from "../components/Services";
import { Team } from "../components/Team";
import { Clients } from "../components/Clients";

export function Home() {
  usePageTitle('OC2 | Consultoría en Comunicaciones Estratégicas');
  return (
    <div className="pt-40">
      {/* Hero Section */}
      <Hero />

      {/* Expertos Section */}
      <Authority />

      {/* Quote Section */}
      <Quote />

      {/* Services summary */}
      <Services />

      {/* Clients Section */}
      <Clients />

      {/* Team Section */}
      <Team />

      {/* Quote 2 */}
      <Quote2 />
    </div>
  );
}
