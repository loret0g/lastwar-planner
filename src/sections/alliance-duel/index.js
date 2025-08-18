import TaskBoard from './TaskBoard';
import { ALLIANCE_DUEL_TASKS } from './tasks';

export default function AllianceDuel({ currentDay }) {

  const tasks = ALLIANCE_DUEL_TASKS[currentDay] ?? { do: [], dont: [] };

  return <TaskBoard tasks={tasks} currentDay={currentDay} />;
  
}