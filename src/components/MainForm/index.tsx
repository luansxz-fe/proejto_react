import styles from './style.module.css';

type MainFormProps = {
  children: React.ReactNode;
};

export function MainForm({ children }: MainFormProps) {
  return <div className={styles.mainForm}>{children}</div>;
}