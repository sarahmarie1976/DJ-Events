import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>Copyright &copy; DJ Events 2022</p>
        <p>
          <Link href='/about'>About This Project</Link>
        </p>
      </footer>
    </div>
  );
}
