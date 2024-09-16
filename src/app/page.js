import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/about">About</Link></li>
          <li className={styles.navItem}><Link href="/projects">Projects</Link></li>
          <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className={styles.imageContainer}>
        <Image
          src="https://www.interviewbit.com/blog/wp-content/uploads/2022/05/Full-Stack-Projects-800x391.png"
          alt="Full Stack Projects"
          width={275}
          height={300}
          layout="responsive"
        />
      </div>
    </div>
  );
}
