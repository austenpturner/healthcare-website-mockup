import Hero from "../../components/hero";
import { teamContent, team } from "../../config/team";
import "./styles.scss";
import TeamMember from "../../components/teamMember";
import Intro from "../../components/intro";

export default function TeamPage() {
  return (
    <div className="team-page">
      <Hero
        header={teamContent.hero.header}
        backgroundImg={teamContent.hero.backgroundImg}
      />
      <Intro content={teamContent.intro} />
      <div className="team" id="team-members">
        <div className="container">
          <h3>{team.owners.sectionTitle}</h3>
          <div className="grid-large">
            {team.owners.members.map((member) => {
              return (
                <TeamMember
                  content={member}
                  key={member.id}
                  gridSize="gridLarge"
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3>{team.therapists.sectionTitle}</h3>
          <div className="grid-large">
            {team.therapists.members.map((member) => {
              return (
                <TeamMember
                  content={member}
                  key={member.id}
                  gridSize="gridLarge"
                />
              );
            })}
          </div>
        </div>
        <div className="container">
          <h3>{team.staff.sectionTitle}</h3>
          <div className="grid-small">
            {team.staff.members.map((member) => {
              return (
                <TeamMember
                  content={member}
                  key={member.id}
                  gridSize="gridSmall"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
