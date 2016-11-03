
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <Link className={s.brand} to="/">
          <img src={logoUrl} width="38" height="38" alt="React" />
          <span className={s.brandTxt}>scottchill</span>
        </Link>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>PLANTS</h1>
          <p className={s.bannerDesc}>driven by a Postgres database built from 90,000 records of data supplied by <a target="_blank" href="https://plants.usda.gov/dl_all.html">the USDA</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
