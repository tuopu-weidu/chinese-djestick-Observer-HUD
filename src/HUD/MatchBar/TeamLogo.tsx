import { Team } from "csgogsi-socket";
import * as I from "../../API/types";
import { apiUrl } from "./../../API";
import { LogoCT, LogoT } from "../../assets/Icons";

const TeamLogo = ({
  team,
  height,
  width,
}: {
  team?: Team | I.Team | null;
  height?: number;
  width?: number;
}) => {
  if (!team) return null;
  let id = "";
  const { logo } = team;
  if ("_id" in team) {
    id = team._id;
  } else if ("id" in team && team.id) {
    id = team.id;
  }
  // ${apiUrl}/teams/${id}/logo - 旧的获取队标方式
  return (
    <div className={`logo`}>
      {logo && id ? (
        <img
          src={`${apiUrl}api/teams/logo/${id}`}
          width={width}
          height={height}
          alt={"队标"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default TeamLogo;
