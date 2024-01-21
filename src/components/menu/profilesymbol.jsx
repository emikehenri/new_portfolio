import React from 'react';

const image = {
  link: 'https://lh3.google.com/u/0/ogw/ANLem4ZFRbBPWHIwVVOrCfNM2h-qj18-o9UGvQG6cqqO=s32-c-mo',
};

const Profilesymbol = () => {
  return (
    <>
      <div className="avatar">
        <div className="w-8 rounded">
          <img src={image.link} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
