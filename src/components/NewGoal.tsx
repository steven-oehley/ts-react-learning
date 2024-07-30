import { FormEvent, useRef, FC } from "react";

interface NewGoalProps {
  onAddGoal: (goal: string, description: string) => void;
}

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
  const goalRef = useRef<HTMLInputElement>(null); // need to add type as with useState
  const descriptionRef = useRef<HTMLInputElement>(null); // need to add null as initial value to avoid ts error

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value; // exclamation mark to tell ts that it will never be null
    const enteredDescription = descriptionRef.current!.value;

    onAddGoal(enteredGoal, enteredDescription);

    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal:</label>
        <input id="goal" type="text" name="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short Description:</label>
        <input id="for" type="text" name="description" ref={descriptionRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
