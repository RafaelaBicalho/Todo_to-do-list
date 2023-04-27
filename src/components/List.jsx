import styles from './List.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { Post } from './Post'

export function List() {

    const [tasks, setTasks] = useState([
    ])


    const [newTasks, setNewTasks] = useState('')

    function handleNewTaskChange() {
        setNewTasks(event.target.value);
    }

    function handleCreateNewTask() {
        event.preventDefault()

        setTasks([...tasks, newTasks]);

        setNewTasks('');

    }


    function deleteTask(taskToDelete) {
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task !== taskToDelete;
        }) 
        setTaskComplete(taskComplete - 1);

        setTasks(tasksWithoutDeleteOne);
    }

    const [tasksCount, setTasksCount] = useState(0);

    function deleteCount() {
        setTasksCount(tasksCount - 1);
    }

    function handleTasksCount() {
        setTasksCount(tasksCount + 1);
    }

    const[taskComplete, setTaskComplete] = useState(0);

    function taskCompleted(isCompleted) {
        if (isCompleted) {
            setTaskComplete(taskComplete + 1);
        } else if(!isCompleted) {
            setTaskComplete(taskComplete - 1);
        }
    }

    return (
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.Create}>
                <input 
                    className={styles.Text} 
                    name='task' type="text" 
                    value = {newTasks}
                    onChange={handleNewTaskChange} 
                    placeholder='Adicionar uma nova tarefa' 
                    required
                /> 
                <button    
                    type="submit" 
                    onClick={handleTasksCount}>
                    Criar 
                    <PlusCircle size={16} color='var(--gray-100)'> </PlusCircle>
                </button>
            </form>

            <div className={styles.accountant}>
                <p>Tarefas criadas <span className={styles.Count}>{tasksCount}</span></p>
                <p>Concluídas <span className={styles.Count}>{taskComplete} de {tasksCount}</span></p>
            </div>

            <div className={styles.commentList}>
                {tasks.map((task, index) => {
                    return (
                        <Post 
                            key={index}
                            content={task} 
                            deleteTask={deleteTask}
                            deleteCount={deleteCount}
                            taskCompleted={taskCompleted}
                        />
                    )
                })}
            </div>    
        </div>
    )
}