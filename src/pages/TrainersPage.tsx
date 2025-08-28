import React, { useEffect } from 'react';
import Trainers from '../components/Trainers';

const TrainersPage: React.FC = () => {
  useEffect(() => {
    document.title = "Our Trainers - PowerGym";
  }, []);

  return (
    <div className="pt-20">
      <Trainers />
    </div>
  );
};

export default TrainersPage;
