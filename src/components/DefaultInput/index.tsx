import styles from './style.module.css';

type DefaultInputProps = {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function DefaultInput({
  label,
  icon,
  error,
  ...props
}: DefaultInputProps) {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.inputContainer}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input {...props} />
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}