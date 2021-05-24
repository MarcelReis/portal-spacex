import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import PhotoGallery from "../PhotoGallery.vue";

describe("<photo-gallery />", () => {
  it("displays a disclaimer when there's no failures", async () => {
    render(PhotoGallery, { props: { imgs: [] } });

    expect(screen.getByText("There aren't photos here")).toBeInTheDocument();
  });

  it("renders a photo thumb for every item in the array", () => {
    const imgs = [
      "http://placekitten.com/50/50",
      "http://placekitten.com/60/60",
      "http://placekitten.com/70/70",
    ];

    render(PhotoGallery, { props: { imgs } });

    expect(
      screen.queryByText("There aren't photos here")
    ).not.toBeInTheDocument();

    expect(screen.getAllByRole("listitem")).toHaveLength(imgs.length);
  });
});
