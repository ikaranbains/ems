import { useAnimation } from "motion/react";
import React, { useEffect, useRef } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  // console.log(data.tasks)
  const taskListRef = useRef(null);
  const controls = useAnimation();

  const handleWheel = (e) => {
    e.preventDefault();

    const scrollAmount = e.deltaY;
    const currentScroll = taskListRef.current.scrollLeft;

    const targetScroll = currentScroll + scrollAmount;

    // Animate the scroll
    controls.start({
      x: -targetScroll, // Negative because Framer Motion animates in reverse
      transition: { duration: 0.5, ease: "easeOut" },
    });

    // Apply the actual scroll
    taskListRef.current.scrollLeft = targetScroll;
  };

  useEffect(() => {
    const element = taskListRef.current;
    element.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup on component unmount
    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={taskListRef}
      className="min-h-[45%] mt-5 py-5 flex items-center justify-start gap-3 flex-nowrap overflow-x-auto no-scrollbar select-none"
      style={{ scrollBehavior: "smooth" }}
    >
      {data && data.tasks ? (
        data.tasks.map((elem, idx) => {
          if (elem.active) {
            return <AcceptTask key={idx} data={elem} />;
          }
          if (elem.newTask) {
            return <NewTask key={idx} data={elem} />;
          }
          if (elem.completed) {
            return <CompleteTask key={idx} data={elem} />;
          }
          if (elem.failed) {
            return <FailedTask key={idx} data={elem} />;
          }
        })
      ) : (
        <div>
          <h1>No tasks available</h1>
        </div>
      )}
    </div>
  );
};

export default TaskList;
