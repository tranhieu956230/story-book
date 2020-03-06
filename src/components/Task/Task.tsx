import React from "react";

interface ITask {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask: any;
  onPinTask: any;
}

const Task: React.FC<ITask> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          <a href="https://google.com" onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;
