import { Button, TextField } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });

  const hadleSubmit = (e) => {
    e.preventDefault();
    if (task?.name?.length < 3) return toast.error("plese enter task");
      setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    })
    toast.success("Ticket added succefully");
    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <form onSubmit={hadleSubmit}>
        <TextField
          type="text"
          value={task.name}
          label="Enter ticket name"
          onChange={(e) =>
            setTask({ ...task, id: uuidv4(), name: e.target.value })
          }
        />
        <Button
          variant="contained"
          style={{ margin: 10 }}
          onClick={hadleSubmit}
        >
          create
        </Button>
      </form>
    </div>
  );
};
export default CreateTask;
