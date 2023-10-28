import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { useDrag, useDrop } from "react-dnd";

const ListTask = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    const filTodos = tasks?.filter((task) => task.status === "todo");
    const filInprogress = tasks?.filter((task) => task.status === "inprogress");
    const filClosed = tasks?.filter((task) => task.status === "completed");
    setTodos(filTodos);
    setInProgress(filInprogress);
    setClosed(filClosed);
  }, [tasks]);

  const statuses = ["todo", "inprogress", "completed"];

  return (
    <div style={{ display: "flex", gap: 160 }}>
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          settasks={setTasks}
          todos={todos}
          inprogress={inProgress}
          closed={closed}
          tasks={tasks}
        />
      ))}
    </div>
  );
};
export default ListTask;

const Section = ({ status, settasks, todos, inprogress, closed, tasks }) => {
  let text = "Todo";
  let tasksTOMap = todos;

  if (status === "inprogress") {
    text = "In progress";
    tasksTOMap = inprogress;
  }
  if (status === "completed") {
    text = "Completed";
    tasksTOMap = closed;
  }
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    settasks((prev) => {
      const modifiedTasks = prev.map((t) => {
        if (t.id === id) {
          return { ...t, status: status };
        }
        return t;
      });
      localStorage.setItem("tasks", JSON.stringify(modifiedTasks));
      toast.success("Ticket status was changed");
      return modifiedTasks;
    });
  };

  return (
    <div ref={drop}>
      <Header text={text} count={tasksTOMap?.length} />
      {tasksTOMap?.length > 0 &&
        tasksTOMap.map((task) => (
          <Task key={task.id} task={task} setTasks={settasks} tasks={tasks} />
        ))}
    </div>
  );
};

const Header = ({ text, count }) => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        border: "3px solid highlight",
        padding: 18,
        display: "flex",
        borderRadius: 10,
        width: 100,
      }}
    >
      <div style={{ color: "whitesmoke" }}>{text}</div>
      <div
        style={{
          marginLeft: 10,
          backgroundColor: "white",
          padding: 2,
          marginTop: -5,
          borderRadius: 25,
          border: "3px solid black",
        }}
      >
        {count}
      </div>
    </div>
  );
};

const Task = ({ task, setTasks, tasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const handleRemove = (id) => {
    const ftasks = tasks.filter((t) => t.id !== id);
    localStorage.setItem("tasks", JSON.stringify(ftasks));
    setTasks(ftasks);
    toast.success("Ticket Removed Successfully");
  };
  return (
    <div>
      <div
        ref={drag}
        style={{
          position: "relative",
          padding: 3,
          marginTop: 5,
          backgroundColor: "lightblue",
          border: 2,
          borderRadius: 10,
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ display: "flex" }}>{task.name}</p>
        <button
          style={{ display: "flex", borderRadius: 25, width: 22 }}
          onClick={() => handleRemove(task.id)}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};
