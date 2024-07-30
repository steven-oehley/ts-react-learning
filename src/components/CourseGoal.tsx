import { FC, type ReactNode } from "react"; // type can be added or removed - type for children props
import { CourseGoal as CGoal } from "../types/types";

interface CourseGoalProps {
  // can use interface or type
  children: ReactNode;
  goal: CGoal;
  handleDeleteGoal: (goalId: string) => void;
}

// destructure props as type of CourseGoalProps
// approach if writing a function decleration and not an arrow function
/* function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>delete</button>
    </article>
  );
}
export default CourseGoal;
 */

// arrow function approach
const CourseGoal: FC<CourseGoalProps> = ({
  goal,
  children,
  handleDeleteGoal,
}) => {
  return (
    <article>
      <div>
        <h2>{goal.title}</h2>
        {children}
      </div>
      <button onClick={() => handleDeleteGoal(goal.id)}>delete</button>
    </article>
  );
};
export default CourseGoal;
