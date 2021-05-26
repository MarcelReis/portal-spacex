import { renderWithPlugins } from "@/test-utils";
import "node-fetch";
import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/vue";
import MainSearch from "../MainSearch.vue";
import userEvent from "@testing-library/user-event";
import { failedLaunchMock } from "@/__mocks__/api";
import "@/__mocks__/server";

const setup = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { store }] = await renderWithPlugins(MainSearch);

  store.dispatch("launches/load");
  store.dispatch("rockets/load");
};

describe("<main-search />", () => {
  it("render the input field and search button", async () => {
    await setup();

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();

    const search = screen.getByRole("textbox");

    expect(search).toBeDisabled();
    await waitFor(
      () => {
        expect(search).toBeEnabled();
      },
      { timeout: 2000 }
    );
  });

  it("display results after tipying and waiting for the debouncer", async () => {
    await setup();

    const search = screen.getByRole("textbox");
    await waitFor(
      () => {
        expect(search).toBeEnabled();
      },
      { timeout: 2000 }
    );

    userEvent.type(search, failedLaunchMock.name);

    await waitFor(() => {
      expect(screen.getByText(failedLaunchMock.name)).toBeInTheDocument();
    });
  });

  it("displays a disclamer if no options are found", async () => {
    await setup();

    const search = screen.getByRole("textbox");
    await waitFor(
      () => {
        expect(search).toBeEnabled();
      },
      { timeout: 2000 }
    );

    userEvent.type(search, "randomslkfjasdf");

    await waitFor(() => {
      expect(screen.getByText("No results")).toBeInTheDocument();
    });

    userEvent.clear(search);

    await waitFor(() => {
      expect(screen.queryByText("No results")).not.toBeInTheDocument();
    });
  });
});
