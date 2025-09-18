"use client"
import  { useEffect, useState } from 'react';

type usefetchstate<T> = {
 data: T | null 
 error: string | null 
 loading : boolean
}

const useFetch = <T,>(url:string):usefetchstate<T> => {
    const [data,setData] = useState<T | null>(null)
    const [error,setError] = useState<string | null>("")
    const [loading,setLoading] = useState<boolean>(true)

    useEffect(()=>{
         const fetchData = async()=>{
            try{
             const response = await fetch(url)

             const result: T = await response.json()
             setData(result)
            }catch(err:unknown){
                if(err instanceof Error){
                   setError(err.message)
                }else{
                    setError("unknown error")
                }
              
            }finally{
           setLoading(false)
            }
         }
         fetchData()
    },[url])


    return {data,error,loading};
};

export default useFetch;