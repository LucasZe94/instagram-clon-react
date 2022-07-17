


export const getAxios = async () =>{
    try{
        const url = `https://reqres.in/api/users`;
        const response = await fetch(url);
        const json = await response.json();
        const data = json   
        
    return {data};

    }catch(err){
        throw new Error(err)
    }
    
}
