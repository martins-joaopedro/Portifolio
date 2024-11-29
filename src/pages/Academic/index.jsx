import styles from "./styles.module.css";

export const Academic = () => {
  const data = [
    {
      name: "Universidade Federal de Juiz de Fora",
      activity: "Bacharelado em Ciência da Computação",
      description: "",
      date: "2023 - o momento",
      img: "https://www2.ufjf.br/ice/wp-content/uploads/sites/268/2021/07/Reuni.jpg"
    },
    {
      name: "Centro Federal de Educação Tecnológica",
      activity: "Técnico de Nivel Médio em Informática",
      description: "",
      date: "2020 - 2022",
      img: "https://img.cmswebsg.com.br/leopoldinense.com.br/image?src=https://leopoldinense.com.br/images/noticias/23008/04041543_DJI_0036_M.jpg&w=1200&h=630&output=webp"
    },
  ];

  return (
    <div id="academic" className={styles.academic}>
      <div className={styles.cardContainer}>
        {data.map(({ name, img, activity, description, date }) => (
          <div className={styles.card} key={name}>
            <div className={styles.header}>
                <img src={img} />
                <div>
                    <h3>{name}</h3>
                    <p>{activity}</p>
                    <small>{date}</small>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
