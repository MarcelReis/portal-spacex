import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import LaunchFailures from "../LaunchFailures.vue";
import {
  launchFailure,
  launchFailureBeforeLaunch,
  launchFailureOnAltitude,
} from "@/__mocks__/api";

describe("<launch-failures />", () => {
  it("should display a disclamer when there's no failures", async () => {
    render(LaunchFailures, {
      props: { failures: [] },
    });

    expect(
      screen.getByText("The launch was completly successful")
    ).toBeInTheDocument();

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("show the altitude when greater than 0", () => {
    render(LaunchFailures, {
      props: { failures: [launchFailureOnAltitude] },
    });

    expect(screen.getByText(/40m Altitude/i)).toBeInTheDocument();
    expect(screen.getByText(/2:19/i)).toBeInTheDocument();
  });

  it("display time of the failure even before the launch", () => {
    render(LaunchFailures, {
      props: { failures: [launchFailureBeforeLaunch] },
    });

    expect(screen.getByText(/0m Altitude/i)).toBeInTheDocument();
    expect(screen.getByText(/-7:00/i)).toBeInTheDocument();
  });

  it("displays a question mark when missing failure altitude", () => {
    render(LaunchFailures, {
      props: { failures: [launchFailure] },
    });

    expect(screen.getByText(/\? Altitude/i)).toBeInTheDocument();
    expect(screen.getByText(/0:33/i)).toBeInTheDocument();
  });
});
