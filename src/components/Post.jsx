import styles from  './Post.module.css'
import { Trash } from 'phosphor-react'

export function Post({content, deleteTask, deleteCount, taskCompleted}) {

    function handleDeleteTask() {
        deleteTask(content);
    }

    return (
        <div className={styles.Container}>
            
            <label className={styles.Post}>  
                <div className={styles.Wrapper}>
                    <input type="checkbox" onClick={(event) => {
                        if (event.target.checked) {
                            taskCompleted(true)
                        } else {
                            taskCompleted(false)
                        }
                    }}/>
                    <span className={styles.Check}></span>
                    <span className={styles.Text}>{content}</span>
                </div>  
                
                <button onClick={() => {
                    handleDeleteTask()
                    deleteCount()
                    }} 
                    className={styles.Button}>
                    <Trash size={20} color='var(--gray-300)'>  </Trash>
                </button>
            </label>
        </div>
        
    )
}