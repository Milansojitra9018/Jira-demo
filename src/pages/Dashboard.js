import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import ListTask from "./ListTask";
import CreateTask from "./createTask";
import { Toaster } from "react-hot-toast";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export default function Dashboard() {
  const usertype = localStorage.getItem("userType");
  const [showinput, setShowinput] = useState(false);
  const [ticketinput, setTicketinput] = useState(false);
  const [input, setInput] = useState("");
  const [showbutton, setShowbutton] = useState(true);

  useEffect(() => {
    setInput(localStorage.getItem("Project"));
  }, []);

  const profilename = localStorage.getItem("email");
  const Dprofile = profilename?.slice(0, 2);

  const handleClick = () => {
    setShowinput(true);
    setShowbutton(false);
  };
  const hadlesave = () => {
    if (input) {
      localStorage.setItem("Project", input);
      setShowinput(false);
    } else {
      alert("please enter project name");
    }
  };
  const Todo = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }, []);
    return (
      <DndProvider backend={HTML5Backend}>
        <Toaster />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 40,
          }}
        >
          {ticketinput && usertype === "Owner" && (
            <CreateTask tasks={tasks} setTasks={setTasks} />
          )}
          <ListTask tasks={tasks} setTasks={setTasks} />
        </div>
      </DndProvider>
    );
  };

  return (
    <>
      <>
        {usertype === "Owner" ? (
          <div
            style={{ display: "flex", flexDirection: "column", width: "6%" }}
          >
            {showbutton ? (
              <Button variant="contained" onClick={handleClick}>
                Project
              </Button>
            ) : (
              ""
            )}
            <Button
              variant="contained"
              style={{ marginTop: 10 }}
              onClick={() => setTicketinput(true)}
            >
              Ticket
            </Button>
          </div>
        ) : (
          ""
        )}
        {showinput ? (
          <div
            style={{
              marginTop: 10,
              width: "20%",
              height: 100,
              backgroundColor: "yellow",
              border: "2px solid green",
              borderColor: "green",
            }}
          >
            <TextField
              style={{
                width: 150,
                margin: 20,
                border: "2px solid blue",
                borderRadius: 5,
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "green", marginTop: 30 }}
              onClick={hadlesave}
            >
              Save
            </Button>
          </div>
        ) : (
          " "
        )}
        <h3
          style={{
            color: "skyblue",
            backgroundColor: "darkblue",
            width: "100%",
            textAlign: "center",
          }}
        >
          {input}
        </h3>
        <div
          style={{
            width: 40,
            height: 40,
            backgroundColor: "purple",
            borderRadius: 25,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid skyblue",
          }}
        >
          <h4 style={{ color: "white" }}>{Dprofile}</h4>
        </div>
        <Todo />
      </>
    </>
  );
}
