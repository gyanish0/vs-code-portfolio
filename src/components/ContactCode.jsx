import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'gyanish.netlify.app',
    href: 'https://gyanish.netlify.app/',
  },
  {
    social: 'email',
    link: 'srivastavagyanish@gmail.com',
    href: 'mailto:srivastavagyanish@gmail.com',
  },
  {
    social: 'github',
    link: 'gyanish0',
    href: 'https://www.github.com/gyanish0',
  },
  {
    social: 'linkedin',
    link: 'gyanish0',
    href: 'https://www.linkedin.com/in/gyanish0',
  },
  {
    social: 'twitter',
    link: 'srivastavgyani1',
    href: 'https://www.twitter.com/srivastavgyani1',
  },
  {
    social: 'instagram',
    link: 'gyanishd',
    href: 'https://www.instagram.com/gyanishd',
  },
  {
    social: 'telegram',
    link: 'gyanish0',
    href: 'https://t.me/gyanish0',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
