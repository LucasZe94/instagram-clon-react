


export const getAxios = async (page = 0) =>{
    try{
        const url = `../data/data.json`;
        const response = await fetch(url);
        const json = await response.json();
        const data = json   
        
    return {data};

    }catch(err){
        throw new Error(err)
    }
    
}
