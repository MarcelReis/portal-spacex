import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import YoutubePlayer from "../YoutubePlayer.vue";

describe("<photo-gallery />", () => {
  it("displays a disclaimer when there's no video", async () => {
    render(YoutubePlayer, { props: { id: "" } });

    expect(screen.getByText("Where's the video?")).toBeInTheDocument();
  });

  it("renders a iframe when there is a valid video id", () => {
    render(YoutubePlayer, { props: { id: "ez08gz66" } });

    expect(screen.queryByText("Where's the video?")).not.toBeInTheDocument();
    expect(screen.getByTestId("youtube-iframe")).toBeInTheDocument();
  });
});
