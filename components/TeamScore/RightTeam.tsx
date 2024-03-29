import { Team } from "../../types/GameData";

export default function RightTeam({
  team,
  seriesScore,
  textColorOnPrimary,
  textColorOnSecondary,
  seriesLength,
}: {
  team: Team;
  seriesScore: number;
  textColorOnPrimary: string;
  textColorOnSecondary: string;
  seriesLength: number;
}) {
  return (
    <>
      {(() => {
        let seriesScoreIndicators = [];

        if (seriesLength === 3) {
          for (let i = 0; i < seriesScore; i++) {
            seriesScoreIndicators.push(
              <div
                style={{
                  width: "20px",
                  height: "4px",
                  position: "absolute",
                  left: 30 * i + 10 + "px",
                  bottom: "3px",
                  backgroundColor: "#" + textColorOnPrimary,
                }}
                key={i}
              ></div>
            );
          }
          return seriesScoreIndicators;
        }

        for (let i = 0; i < seriesScore; i++) {
          seriesScoreIndicators.push(
            <div
              style={{
                width: "20px",
                height: "4px",
                position: "absolute",
                left: 32 * i + 12 + "px",
                bottom: "3px",
                backgroundColor: "#" + textColorOnPrimary,
              }}
              key={i}
            ></div>
          );
        }
        return seriesScoreIndicators;
      })()}

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "70px",
          width: "290px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "#" + textColorOnSecondary,
            fontFamily: "TheBoldFont",
            fontSize: "45px",
            margin: 0,
            padding: 0,
            lineHeight: "45px",
          }}
        >
          {team.name}
        </h1>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "70px",
          width: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "#" + textColorOnPrimary,
            fontFamily: "Mont",
            fontSize: "64px",
            margin: 0,
            padding: 0,
            lineHeight: "64px",
          }}
        >
          {team.score}
        </h1>
      </div>

      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 360 80"
        style={{ height: "80px", width: "360px" }}
      >
        <defs>
          <style>
            {`
            .cls-team-R-1 {
              fill: #${team.color_primary};
            }
            .cls-team-R-2 {
              fill: url(#lin-grad-R-hud);
            }
          `}
          </style>
          <linearGradient
            id="lin-grad-R-hud"
            x1="70"
            y1="35"
            x2="360"
            y2="35"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color={`#${team.color_secondary}`} />
            <stop
              offset="1"
              stop-color={`#${team.color_secondary}`}
              stop-opacity="1"
            />
          </linearGradient>
        </defs>
        <g id="Layer_1-2">
          <g>
            <g>
              <rect
                className="cls-team-R-2"
                x="70"
                y="0"
                width="290"
                height="70"
              />
              {(() => {
                switch (seriesLength) {
                  case 3:
                    return (
                      <path
                        className="cls-team-R-1"
                        d="M0,0V80H70V0H0ZM30,77H10v-4H30v4Zm30,0h-20v-4h20v4Z"
                      />
                    );
                  case 5:
                    return (
                      <path
                        className="cls-team-R-1"
                        d="M70,70V0H0V80H108v-10h-38Zm-38,7H12v-4.05h20v4.05Zm32,0h-20v-4.05h20v4.05Zm32,0h-20v-4.05h20v4.05Z"
                      />
                    );
                  default:
                    return (
                      <path
                        className="cls-team-R-1"
                        d="M70,70V0H0V80H140v-10H70Zm-38,7H12v-4.05h20v4.05Zm32,0h-20v-4.05h20v4.05Zm32,0h-20v-4.05h20v4.05Zm32,0h-20v-4.05h20v4.05Z"
                      />
                    );
                }
              })()}
            </g>
            <g>
              <path
                className="cls-team-R-1"
                d="M232.98,70C187.27,48.89,140.46,27.11,101.97,0h.61c38.58,27.09,85.48,48.87,131.22,70h-.83Z"
              />
              <path
                className="cls-team-R-1"
                d="M257.51,70C210.86,49.62,164.7,27.87,128.55,0h.28c36.2,27.86,82.42,49.61,129.11,70h-.43Z"
              />
              <path
                className="cls-team-R-1"
                d="M205.99,70h-1.15c-4.85-2.45-9.78-4.92-14.85-7.46C151.25,43.11,111.51,23.17,76.31,0h.95c35.02,22.97,74.49,42.78,112.97,62.08,5.39,2.7,10.62,5.33,15.77,7.92Z"
              />
              <path
                className="cls-team-R-1"
                d="M87.56,70h-1.4c-4.8-5.32-10.3-10.41-16.16-15.28v-1.35c6.4,5.28,12.4,10.81,17.56,16.64Z"
              />
              <path
                className="cls-team-R-1"
                d="M134.74,70h-1.46c-8.65-6.39-17.9-12.42-27.14-18.13-11.63-7.19-23.78-14.88-36.14-22.83v-1.03c12.51,8.05,24.82,15.85,36.59,23.12,9.6,5.93,19.2,12.21,28.14,18.87Z"
              />
              <path
                className="cls-team-R-1"
                d="M162.94,63.94c3.48,1.93,7.05,3.95,10.67,6.06h-1.38c-3.26-1.89-6.48-3.71-9.63-5.46-3.57-1.98-7.19-3.98-10.84-6-26.13-14.47-54.26-30.05-81.76-46.81v-.82c27.6,16.84,55.86,32.49,82.1,47.02,3.65,2.02,7.27,4.02,10.84,6.01Z"
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}
