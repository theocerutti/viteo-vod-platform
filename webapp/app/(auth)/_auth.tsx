import React from 'react';

const Auth = ({ mode }: { mode: string }) => {
  return (
    <div className='flex justify-center'>
      <div className='w-50% flex flex-row'>
        <form>
          <label>Email address</label>
          <input type='email' />
          <p>We'll never share your email.</p>
        </form>
        <form>
          <label>Email address</label>
          <input type='email' />
          <p>We'll never share your email.</p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
