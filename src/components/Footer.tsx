import styles from "../style/Footer.module.css";

const Description = () => {
  return (
    <div>
      <p className={styles.header}>
        Je suis un photographe professionnel basé à Paris. J&apos;ai plus de 10
        ans d&apos;expérience dans le domaine de la photographie et est
        spécialisé dans les photos de mariage, de grossesse, de bébé et de
        famille.
      </p>
      <p className={styles.header}>
        J&apos;ai un véritable talent pour capturer les moments les plus
        précieux de la vie de mes clients. Ses photos sont remplies
        d&apos;émotions et de beauté, et reflètent l&apos;amour et la joie de
        chaque occasion.
      </p>
      <p className={styles.header}>
        Si vous recherchez un photographe professionnel pour votre prochain
        événement, n&apos;hésitez pas me contacter. C&apos;est un plaisir de
        pouvoir discuter avec vous de vos besoins en matière de photographie et
        de créer des souvenirs inoubliables pour vous et votre famille.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <Description />
    </div>
  );
};

export default Footer;
