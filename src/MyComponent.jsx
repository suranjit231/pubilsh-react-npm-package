//========= this code works perfect ==============//

// import React from 'react';

// const MyComponent = ({ message }) => {
//     return(
//         <div style={{ color: 'blue', fontSize: '20px' }}>
//             {message}
//         </div>

//     ) 
// };

// export default MyComponent;


//=========== this avove code is workig perfect ====================//



import React from 'react';
import styles from '../src/MyComponent.module.css';


const MyComponent = ({ message, imageUrl, theme = 'light', customStyles }) => {
  return (
    <div
      className={`${styles.container} ${theme === 'dark' ? styles['theme-dark'] : styles['theme-light']}`}
      style={customStyles}
    >
      {imageUrl && <img src={imageUrl} alt="Card image" className={styles.image} />}
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default MyComponent;
