const checkConnection = async () => {
    console.log("called");
    
  const endpoints = [
    "/favicon.ico",
    "https://www.cloudflare.com/cdn-cgi/trace",
  ];
  try {
    if (!navigator.onLine) {
      return false;
    }
    // for (const url of endpoints) {
        // console.log(url);
        
    //   try {
        const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace", {
          method: "HEAD",
          cache: "no-store",
          credentials: "omit",
          signal: AbortSignal.timeout(3000),
        });
        console.log(response.ok);
        
        if (response.ok) return true;
    //   } catch (error) {
    //     // continue;
    //   }
    // }
  } catch (error) {
    console.log(error);
    
    return false;
  }
};

export default checkConnection;
