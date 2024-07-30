import { FC } from "react";

import CourseGoal from "./CourseGoal";

import { CourseGoal as CGoal } from "../types/types";

interface CourseGoalListProps {
  courseGoals: CGoal[];
  handleDeleteGoal: (goalId: string) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({
  courseGoals,
  handleDeleteGoal,
}) => {
  return (
    <ul>
      {courseGoals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal goal={goal} handleDeleteGoal={handleDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};
export default CourseGoalList;
