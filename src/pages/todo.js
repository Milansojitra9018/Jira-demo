// import React, { useEffect, useState } from "react";
// import ListTask from "./ListTask";
// import CreateTask from "./createTask";
// import { Toaster } from "react-hot-toast";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { DndProvider } from "react-dnd";
// import { useLocation } from "react-router-dom";

// const Todo = () => {
//   const [tasks, setTasks] = useState([]);
//   const { search } = useLocation();
//   const userType = new URLSearchParams(search).get("type");
//   useEffect(() => {
//     setTasks(JSON.parse(localStorage.getItem("tasks")));
//   }, []);
//   return (
//     <DndProvider backend={HTML5Backend}>
//       <Toaster />
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           gap: 40,
//         }}
//       >
//         <CreateTask tasks={tasks} setTasks={setTasks} />

//         <ListTask tasks={tasks} setTasks={setTasks} />
//       </div>
//     </DndProvider>
//   );
// };
// export default Todo;
