import React from 'react';
import { NavigableTable } from './component/dataGrid/NavigableTable';
import { useFetch } from './hooks/useFetch';

import './app.css'

export const App = () => {

    const state = useFetch(`https://www.breakingbadapi.com/api/episodes`);
    const{data,loading,error}= state;
    
    

    return (
        <div className="flex-container">
            <div className="container-left">
            {
                data &&
                    <NavigableTable 
                    data={data}
                    loading={loading}
                    title={'Usuarios'}
                    columns={['episode_id','title','series']}
                    />    
            }
                
            </div>
         
            <div className="container-right vl">
                <p>Hola</p>
            </div>
        </div>
    )
}
