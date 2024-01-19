import styles from './taskList.module.scss'

interface TaskListProps {
  doneTaskList?: boolean
}

export default function TaskList(props: TaskListProps) {
  const {doneTaskList} = props
  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{ doneTaskList ? 'Hoan thanh' : 'Chua hoan thanh'}</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>study</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>edit</button>
            <button className={styles.taskBtn}>trash</button>
          </div>
        </div>
      </div>

      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={`${styles.taskName} ${styles.taskNameDone}`}>done done</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>edit</button>
            <button className={styles.taskBtn}>trash</button>
          </div>
        </div>
      </div>
    </div>
  )
}
