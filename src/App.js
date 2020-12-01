import React,{ useState } from 'react';
import { NavigableTable } from './component/dataGrid/NavigableTable';
import { useFetch } from './hooks/useFetch';

import './app.css'
import UserForm from './component/users/UserForm';
import { useCurrentRow } from './component/dataGrid/hooks/useCurrentRow';



export const App = () => {

    const [state,setState] = useFetch(`https://www.breakingbadapi.com/api/episodes`);
    const{data,loading,error}= state;

    const [item,setCurrentRow] = useCurrentRow({
        episode_id:'',
        title:'',
        series:''
    },data);
  
  

    return (
        <>
        {loading ? (
            <div className="alert alert-info text-center loading">Buscando Datos...</div>
        ):(
            
            <div className="flex-container">
            <div className="container-left">
            {
                data &&
                    <NavigableTable 
                    data={data}
                    title={'Usuarios'}
                    fields={['episode_id','title','series']}
                    colEditable={['title','series']}
                    colTitle={['Id','Titulo','Series']}
                    searchFields={['Titulo','Series']}
                    focus={'Titulo'}
                    setCurrentRow={setCurrentRow}
                    />    
            }   
            </div>
            <div className="container-right vl">
                <UserForm 
                    currentItem={item}/>
            </div>
            
             </div>
        )}
            
        </> 
            
       

    )
}
