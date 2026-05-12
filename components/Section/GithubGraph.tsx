import { GitHubCalendar } from "react-github-calendar";

export default function GithubGraph() {
  const themeSZ = {
    dark: [
      "#161b22", // Niveau 0
      "#4a0d0d", // Niveau 1
      "#871313", // Niveau 2
      "#c21f1f", // Niveau 3
      "#ff2c2c", // Niveau 4
    ],
  };

  return (
    <div className="flex items-center justify-center" id="github">
      <GitHubCalendar
        username="FlytziTv"
        colorScheme="dark"
        theme={themeSZ}
        blockSize={12}
        blockMargin={3}
        fontSize={14}
      />
    </div>
  );
}
