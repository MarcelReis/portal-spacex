import debounce from "./debounce";

jest.useFakeTimers();

describe("the createDebounce function", () => {
  beforeEach(() => {
    jest.clearAllTimers();
  });

  it("create a debounced function", () => {
    const mock = jest.fn();
    const debouncedMock = debounce(mock);

    debouncedMock();
    expect(mock).not.toBeCalled();

    jest.runAllTimers();

    expect(mock).toBeCalled();
  });

  it("must call just one time if calls are made between the timer", () => {
    const mock = jest.fn();
    const debouncedMock = debounce(mock);

    debouncedMock();
    expect(mock).not.toBeCalled();

    jest.runTimersToTime(100);

    debouncedMock();
    expect(mock).not.toBeCalled();

    jest.runAllTimers();
    expect(mock).toBeCalledTimes(1);
  });

  it("should be able to customize the timer", () => {
    const mock = jest.fn();
    const customTime = 10000;
    const debouncedMock = debounce(mock, { time: 10000 });

    jest.runTimersToTime(customTime / 2);

    debouncedMock();
    expect(mock).not.toBeCalled();

    jest.runAllTimers();
    expect(mock).toBeCalled();
  });

  it("call the debounced function with the same arguments", () => {
    const mock = jest.fn();
    const debouncedMock = debounce(mock);

    const customArgs = [{ number: 1, hello: "world" }, true];

    debouncedMock(...customArgs);

    jest.runAllTimers();

    expect(mock).toBeCalledWith(...customArgs);
  });
});
