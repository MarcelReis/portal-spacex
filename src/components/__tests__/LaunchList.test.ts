import "@testing-library/jest-dom";
import { failedLaunchMock } from "@/__mocks__/api";
import { render, screen } from "@testing-library/vue";
import LaunchList from "../LaunchList.vue";

describe("<LaunchList />", () => {
  it("when loading show a disclamer saying loading", async () => {
    render(LaunchList, {
      props: { loading: true, error: undefined, data: [] },
    });

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("render the list of elements", async () => {
    render(LaunchList, {
      props: { loading: false, error: undefined, data: [failedLaunchMock] },
    });

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

    expect(screen.getByText(failedLaunchMock.name)).toBeInTheDocument();
  });
});
