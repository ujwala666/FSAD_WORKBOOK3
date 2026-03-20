import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🎓 Student Management System</h1>

      <StudentForm setRefresh={setRefresh} />
      <StudentList refresh={refresh} />
    </div>
  );
}

export default App;