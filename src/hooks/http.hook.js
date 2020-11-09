import React from 'react';
import axios from 'axios';

const useHttp = ()=> {
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async (url, method="get", body=null)=>{    
    setLoading(true);

    try {      
      const response = await axios[method](url, body);      

      if(!response.status){        
        throw new Error(response.message || 'что то пошло не так')
      }

      setLoading(false)
      return response.data;
    }
    catch(err){          
      setLoading(false);
      setError(err.response.data.errors || err.response.data.message);       
      throw err;
    }
  }, []);  
  const clearError = () => setError(null);
  
  return {request, loading, error, clearError}
};

export default useHttp;
