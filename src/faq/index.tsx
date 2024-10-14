import { useState } from "react";
import { jokes } from "./faqData";
import SingleFaqItem from "./SingleFaqItem";

function Faq() {
  const [activeId, setActiveId] = useState<null | number>(null);

  const handleActiveId = (id: number) => {
    const nextId = id === activeId ? null : id;
    setActiveId(nextId);
  };

  return (
    <div className="">
      <h1 className="text-center py-12">FAQ</h1>
      <div className="max-w-2xl mx-auto">
        {jokes.map((joke) => (
          <SingleFaqItem
            key={joke.id}
            {...joke}
            isActive={activeId === joke.id}
            handleActiveId={handleActiveId}
          />
        ))}
      </div>
    </div>
  );
}
export default Faq;
