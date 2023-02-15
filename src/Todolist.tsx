import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {SuperButton} from "./components/SuperButton";


// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            // addTask();
        }
    }
     const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
     }
    const addTaskHandler = () => {
        props.addTask(title, props.id)
        setTitle("")
    }
    const removeTaskHandler = (taskId: string) => {
        props.removeTask(taskId, props.id)
    }
    const tsarChangeFilter = (valueFilter:FilterValuesType) => {
       props.changeFilter(valueFilter,props.id)
    }
    return <div>
        <h3> {props.title}
            <SuperButton callback={removeTodolistHandler} name={"X"}/>

        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <SuperButton callback={addTaskHandler} name={"+"}/>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }


                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>

                        <SuperButton callback={() => removeTaskHandler(t.taskId)} name={"x"}/>
                    </li>
                })
            }
        </ul>
        <div>
            <SuperButton callback={ () => tsarChangeFilter ("all")} name={"All"}/>
            <SuperButton callback={ () => tsarChangeFilter ("active")} name={"Active"}/>
            <SuperButton callback={ () => tsarChangeFilter ("completed")} name={"Completed"}/>

        </div>
        <p></p>
        {props.students.map((el) => {
                return (
                    <div>{el}</div>
                )})}
    </div>
}


