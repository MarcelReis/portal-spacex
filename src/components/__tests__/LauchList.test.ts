import { render, screen } from "@testing-library/vue";
import LauchList from "../LauchList.vue";

describe("<LauchList />", () => {
  it("starts showing loading", async () => {
    render(LauchList, { props: { loading: true, error: undefined, data: {} } });

    expect(await screen.findByText("Loading...")).not.toBeNull();
  });
});
