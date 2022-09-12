import React from 'react'
import styles from './styles.module.scss'
import tesodevLogo from 'assets/img/tesodev-logo.jpg'
const HomeLogo = () => {
  return (
    <div className={styles.homeLogoSection}>
      <div>
        <div className={styles.logo}>
          <img src={tesodevLogo} alt='Tesodev Home Page Logo' />
        </div>
        <span>Search app</span>
      </div>


    </div>

  )
}

export default HomeLogo