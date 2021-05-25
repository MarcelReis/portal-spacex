// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Procedure = (...args: any[]) => any;

type DebouncedCallback<F extends Procedure> = (
  this: ThisParameterType<F>,
  ...args: Parameters<F>
) => void;

type OptionsType = {
  time?: number;
};

function debouncer<C extends Procedure>(
  callback: C,
  { time = 200 }: OptionsType = {}
): DebouncedCallback<C> {
  let handle: number;

  return (...args: unknown[]) => {
    clearInterval(handle);

    handle = setTimeout(() => {
      callback(...args);
    }, time);
  };
}

export default debouncer;
