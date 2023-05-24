/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
// /* eslint-disable react/prop-types */

// function Card({ image, title, description, price, ...props }) {
//   return (
//     <label>
//       <input type="radio" {...props} />
//       <div className="card">
//         <img src={image} alt={title} />
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <p>{price}</p>
//       </div>
//     </label>
//   );
// }
// export default Card;
import  { forwardRef } from 'react';

// const Card = forwardRef(({ image, title, description, price, ...props }, ref) => {
//   return (
//     <div className="card">
//       <img src={image} className="card-img-top" alt={title} />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <p className="card-text">{price}</p>
//         <input type="radio" className="form-check-input d-none" ref={ref} {...props} />
//       </div>
//     </div>
//   );
// });
import "./style.scss"
const Card = forwardRef(({ image, title, description, price, ...props }, ref) => {
    return (
      <label className="card">
        <input type="radio" className="form-check-input d-none" ref={ref} {...props} />
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{price}</p>
        </div>
      </label>
    );
  });
export default Card;
