const environmentList = [
    "http://localhost:3030/", //local      = 0
    "https://lotto-api/applogiq.in/api/v1", //develop    = 1
   
  ];
  
  const env = 0; // Place your environment number here
  
  const hostConfig = {
    WEB_URL: process.env.url,
    API_URL: environmentList[env] + "api/v1/",
  };
  
  const api = environmentList[env];
  
  //time interval to check online or offline
  const activeStatusCallTime = 1000 * 60 * 4;
  
  //if idle for this much time go to idle screen
  const idleTime = 1000 * 60 * 5; // millisec * sec * min * hr * days
  
  //after idle wait this much time before logout
  const waitTimeInTimeOutScreen = 1000 * 60 * 2;
  
  //change this value to increase or decrease page refresh interval;
  const refreshInterval = 1000 * 60 * 3; //(3min) In milliseconds
  
 
  
  export {
    hostConfig,
    refreshInterval,
    api,
    env,
    idleTime,
    activeStatusCallTime,
    waitTimeInTimeOutScreen,
  };
  