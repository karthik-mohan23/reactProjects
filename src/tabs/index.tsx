import { useState } from "react";

const tabsContent = [
  {
    title: "Tab 1",
    content: <div>Tab one content</div>,
  },
  {
    title: "Tab 2",
    content: <div>Tab two content</div>,
  },
  {
    title: "Tab 3",
    content: <div>Tab three content</div>,
  },
];

function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentTab = tabsContent[activeIndex];

  return (
    <div>
      <h1 className="text-center text-3xl">Tabs</h1>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center">
          {tabsContent.map((tab, index) => (
            <button
              className={`text-center border border-black p-2 ${
                index === activeIndex && "bg-yellow-300"
              }`}
              onClick={() => setActiveIndex(index)}>
              {tab.title}
            </button>
          ))}
        </div>
        <div className="border border-black h-80">{currentTab.content}</div>
      </div>
    </div>
  );
}
export default Tabs;
