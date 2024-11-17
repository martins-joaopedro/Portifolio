import styles from "./styles.module.css";

export const Header = ({ links }) => {
  
    const navigate = (link) => {
        document.querySelector(link).scrollIntoView({ behavior: 'smooth'})
    }
    return (
    <div className={styles.container}>
      {links.map(({value, link }) => (
        <div
            key={value}
            onClick={() => navigate(link)} 
            className={styles.linkPill}
        >    
            <span>{value}</span>
        </div>
      ))}
    </div>
  );
};
