import React from 'react';
// import { embedDashboard } from 'amazon-quicksight-embedding-sdk';


const QuickSightDashboard = () => {
  const dashboardUrl = 'https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/525109652766/dashboards/4f8fdcea-36e4-4642-9b9a-e195e6fa4bba?directory_alias=le-fenix-dih';



  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe 
        src={dashboardUrl} 
        title="QuickSight Dashboard" 
        width="100%" 
        height="100%" 
        allowFullScreen
      />
    </div>
  );
};

export default QuickSightDashboard;
