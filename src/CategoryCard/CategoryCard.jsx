import React from 'react';

const CategoryCard = ({item}) => {
  console.log(item);
  const {AdventureTitle,Location

    ,Image}=item;
    return (
        <div className="card bg-base-100 w-72 shadow-xl">
  <figure>
    <img
      className='w-96 shadow-xl h-72'
      src={Image}
      alt="Image" />
  </figure>
  <div className="card-body flex justify-center items-center">
    <h2 className="card-title flex justify-center items-center">
      <div className="badge badge-secondary text-center">{AdventureTitle}</div>
    </h2>
    <p>{Location}</p>
    <div className="card-actions justify-end">
      {/* <div className="badge badge-outline">Fashion</div> */}
      {/* <div className="badge badge-outline">Products</div> */}
    </div>
  </div>
</div>
    );
};

export default CategoryCard;