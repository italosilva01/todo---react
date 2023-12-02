import style from "./CreateTask.module.scss";
import plus from "assets/plus.svg";
export const CreateTask = () => {
  return (
    <div className={style.containerCreateTask}>
      <div>
        <input type="text" placeholder="Adicione uma nova tarefa" />
      </div>
      <button type="submit">
        Criar <img src={plus} />
      </button>
    </div>
  );
};
