import styles from './style.module.css';

type DefaultButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function DefaultButton({
  children,
  ...props
}: DefaultButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}