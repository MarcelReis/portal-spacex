import "@testing-library/jest-dom";
import { failedLaunchMock } from "@/__mocks__/api";
import { render, screen } from "@testing-library/vue";
import LaunchList from "../LaunchList.vue";
import { createMockedRouter } from "@/test-utils";

describe("<LaunchList />", () => {
  it("when loading show a disclaimer saying loading", async () => {
    const router = createMockedRouter(LaunchList);
    render(LaunchList, {
      props: { loading: true, error: undefined, data: [] },
      global: { plugins: [router] },
    });

    await router.isReady();

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("render the list of elements", async () => {
    const router = createMockedRouter(LaunchList);
    render(LaunchList, {
      props: { loading: false, error: undefined, data: [failedLaunchMock] },
      global: { plugins: [router] },
    });

    await router.isReady();

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

    expect(screen.getByText(failedLaunchMock.name)).toBeInTheDocument();
  });
});
