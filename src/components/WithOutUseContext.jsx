import React from 'react';

function WithOutUseContext() {
  const [firstName, setFirstName] = useState('Awais');
  const [lastName, setLastName] = useState('Ahmad');
  return (
    <div>
      <FirstChild fname={firstName} lname={lastName} />
    </div>
  );
}

function FirstChild({ fname, lname }) {
  return <div></div>;
}
export default WithOutUseContext;
