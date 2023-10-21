import styles from './Filter.module.css'


export const Filter =({filter, onChange}) => {
    return (
    <>
    <label className={styles.filterLabel}>Find contacts by name
    <input className={styles.filterInput} type="text" input={filter} name='filter' placeholder="search" onChange={onChange}/>
    </label>
    
    </>)
}