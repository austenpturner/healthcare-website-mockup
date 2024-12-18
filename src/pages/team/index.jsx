import Hero from "../../components/hero";
import { teamContent, team } from "../../config/team";
import "./styles.scss";
import PageIntro from "../../components/pageIntro";
import TeamGrid from "../../components/teamGrid";

export default function TeamPage() {
  return (
    <div className="team-page">
      <Hero
        header={teamContent.hero.header}
        backgroundImg={teamContent.hero.backgroundImg}
      />
      <PageIntro content={teamContent.intro} />
      <div className="team" id="team-members">
        {team.map((group) => {
          return (
            <TeamGrid
              key={group.id}
              content={group}
              gridSize={group.gridSize}
            />
          );
        })}
      </div>
    </div>
  );
}
