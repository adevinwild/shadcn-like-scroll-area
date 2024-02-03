import ScrollArea from "./scroll-area";

function App() {
  return (
    <div className="grid grid-cols-2 w-full h-dvh items-center justify-center p-0 m-0">
      <div className="w-full bg-neutral-50 h-full flex items-center justify-center">
        <div className="w-auto h-auto bg-white rounded-xl p-2 border border-neutral-200 shadow-lg shadow-neutral-500/10 flex flex-col">
          <div className="mb-3 grid content-start items-center justify-center text-center">
            <h3 className="font-medium text-center text-neutral-700">
              Scroll Area
            </h3>
            <span className="text-xs font-light text-neutral-500">
              Light mode
            </span>
          </div>

          <ScrollArea>
            {Array.from({ length: 20 }, (_, i) => {
              return (
                <div
                  className="h-10 p-2 rounded border w-full text-center flex items-center"
                  key={i}
                >
                  <span className="text-sm text-neutral-500 font-light">
                    Item #{i + 1}
                  </span>
                </div>
              );
            })}
          </ScrollArea>
        </div>
      </div>
      <div className="w-full bg-neutral-950 h-full flex items-center justify-center">
        <div className="w-auto h-auto bg-neutral-900 rounded-xl p-2 border border-neutral-800 shadow-lg shadow-black flex flex-col">
          <div className="mb-3 grid content-start items-center justify-center text-center">
            <h3 className="font-medium text-center text-neutral-50">
              Scroll Area
            </h3>
            <span className="text-xs  text-neutral-400 font-light">
              Dark mode
            </span>
          </div>

          <ScrollArea className="bg-neutral-900">
            {Array.from({ length: 20 }, (_, i) => {
              return (
                <div
                  className="h-10 p-2 rounded border border-neutral-800 w-full text-center flex items-center"
                  key={i}
                >
                  <span className="text-sm text-neutral-400 font-light">
                    Item #{i + 1}
                  </span>
                </div>
              );
            })}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default App;
