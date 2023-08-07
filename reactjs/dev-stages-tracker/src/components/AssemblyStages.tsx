import { MouseEventHandler, useState } from "react";

type Props = { stages: string[] };
export default function AssemblyStages({ stages }: Props) {
  const [inputVal, setInputVal] = useState("");
  const [stageList, setStageList] = useState(() => {
    const stage: Record<string, string[]> = {};
    stages.forEach((s) => {
      if (!stage[s]) {
        stage[s] = [];
      }
    });
    return stage;
  });
  const stageLen = stages.length;

  const addInputTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStageList((prevL) => {
      const firstStage = stages[0];
      const stageLArr = stageList[firstStage];
      const newStageLArr = [...stageLArr, inputVal.trim().toLowerCase()];
      return { ...prevL, [firstStage]: newStageLArr };
    });
    setInputVal("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const removeTask = (s: string, task: string) => {
    setStageList((prevL) => {
      const newTasks = prevL[s].filter((sl) => sl !== task);
      return { ...prevL, [s]: newTasks };
    });
  };
  const addTask = (s: string, task: string) => {
    setStageList((prevL) => {
      const newTasks = [...prevL[s]];
      newTasks.push(task)
      return { ...prevL, [s]: newTasks };
    });
  };

  const onStageClick =
    (s: string, sidx: number, task: string) =>
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const mouseBtn = e.button;
      if (mouseBtn === 0) {
        if (sidx !== stageLen - 1) {
          const nextStage = sidx + 1;
          addTask(stages[nextStage], task);
        }
        removeTask(s, task);
        return;
      }
      if (mouseBtn === 2) {
        if (sidx !== 0) {
          const nextStage = sidx - 1;
          addTask(stages[nextStage], task);
        }
          removeTask(s, task);
        return;
      }
    };

  return (
    <div>
      <h5>AssemblyStages</h5>
      <form onSubmit={addInputTask}>
        <input value={inputVal} onChange={handleChange} />
        <button>add</button>
      </form>
      {JSON.stringify(stageList)}
      <div className="flex gap-3">
        {stages.map((s, sidx) => (
          <div key={s} className="flex dir-col gap-1">
            <div>{s}</div>
            {stageList[s].map((l, lidx) => {
              return (
                <button
                  key={l}
                  onMouseUp={onStageClick(s, sidx, l)}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  {l}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
