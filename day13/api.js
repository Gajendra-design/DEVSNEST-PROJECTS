const key='	3cwRqobnrPPKAw2GaS5vRXcnFlfjAvsv';

const weatherinfo=async(id)=>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;
    const response=await fetch(base+query);
    const data=await response.json();
    return data[0];
}

const getcity=async(city)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`
    const response=await fetch(base+query);
    const data=await response.json();
   return data[0];

}
// getcity('jaipur').then((data)=>{
//     console.log(data);
//     return weatherinfo(data.Key);
// }).then((data)=>{
//      console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })