import PrimaryCard from "./PrimaryCard";
import CardCompact from "./CardCompact";

export default function LandingScreen1() {
  return (
    <div className="row mta" id="landing-screen-1">
      <PrimaryCard />
      <div className="tile2 col-sm-6 col-12">
        <CardCompact />
        <div class="tile2-divider"></div>
        <CardCompact />
        <div class="tile2-divider"></div>
        <CardCompact />
      </div>
    </div>
  );
}
