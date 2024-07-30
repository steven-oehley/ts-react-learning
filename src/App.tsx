import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header.tsx";
import CourseGoalsList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

import { CourseGoal } from "./types/types.ts";

import goalsImg from "./assets/goals.jpg";

export default function App() {
  // problem with useState is that it doesn't have a type
  // need to tell ts what type of data is stored in the state
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, description: string) {
    setCourseGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: uuidv4(),
        title: goal,
        description: description,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(goalId: string) {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalsList
        courseGoals={courseGoals}
        handleDeleteGoal={handleDeleteGoal}
      />
    </main>
  );
}
