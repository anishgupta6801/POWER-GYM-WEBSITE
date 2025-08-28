import React, { useEffect } from 'react';
import Classes from '../components/Classes';

const ClassesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Our Classes - PowerGym";
  }, []);

  return (
    <div className="pt-20">
      <Classes />
    </div>
  );
};

export default ClassesPage;
