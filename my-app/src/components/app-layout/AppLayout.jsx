/* eslint-disable react/prop-types */
import styles from "./style.module.scss"
const AppLayout = ({children}) => {
  return (
    <section className={styles.layout}>
      {children}
    </section>
  )
}

export default AppLayout
