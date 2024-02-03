import clsx from "clsx";
import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
  type RefObject,
} from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export default function ScrollArea({ className, children, ...props }: Props) {
  const ref = useRef(null);
  const { scroll, maxScroll } = useScroll(ref);

  return (
    <div
      ref={ref}
      className={clsx(
        "w-96 h-96 rounded-lg bg-white overflow-y-auto gap-y-4 p-2 grid content-start [mask:linear-gradient(180deg,transparent,white_var(--start)_var(--end),transparent)]",
        className,
        scroll > 10 ? "[--start:20%]" : "[--start:0%]",
        scroll >= maxScroll - 10 ? "[--end:100%]" : "[--end:80%]"
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function useScroll(ref: RefObject<HTMLDivElement>) {
  const [scroll, setScroll] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        setScroll(ref.current.scrollTop);
      }
    };
    ref.current?.addEventListener("scroll", onScroll);

    if (!maxScroll) {
      setMaxScroll(
        (ref.current?.scrollHeight ?? 0) - (ref.current?.clientHeight ?? 0)
      );
    }

    return () => {
      ref.current?.removeEventListener("scroll", onScroll);
    };
  }, [ref]);

  return {
    scroll,
    maxScroll,
  };
}
