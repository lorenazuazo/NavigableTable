import React,{ useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './userForm.css'

const UserForm = ({currentItem}) => {
      
    useEffect(() => {
        //debugger
        setValue('episode_id',currentItem.episode_id);
        setValue('title',currentItem.title);
        setValue('series',currentItem.series);
        
    },[currentItem]);


    const{register, errors, handleSubmit,setValue} = useForm({
        defaultValues:currentItem
    });
   
    const inputChangeName=(e)=>{
        console.log(e.target.value)
    }

    const onSubmit=(data,e)=>{
        //console.log(data)
        //props.addUser(data)
        e.target.reset();
    }
    
    return (
        <>
            <form className="user-form flex-container-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
              <div className="grupo-flex1">
                <div className="grupo">
                <input className="input-form"
                    type="number" 
                    name="episode_id"
                    spellCheck={false}
                    ref={
                        register({
                            required:{value:true,message:'el nombre es obligatorio'},
                            minLength:{value:1,message:'minimo 1 letras'},
                            maxLength:{value:50,message:'maximo 50 letras'}
                        })
                    }
                    /><span className="barra"></span>
                <label className="label-form">Id</label> 

                <span className="text-danger text-small d-block mb-2">
                    {errors?.episode_id?.message}
                </span>
                </div>

            <div className="grupo">  
                
                <input className="input-form"
                    type="text" 
                    name="title" 
                    spellCheck={false}
                    ref={
                        register({
                            required:{value:true,message:'username es obligatorio'},
                            minLength:{value:2,message:'minimo 2 caracteres'},
                            maxLength:{value:50,message:'maximo 50 caracteres'}
                        })
                    }
                /><span className="barra"></span>
                <label className="label-form">Titulo</label>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.title?.message}
                </span>
            </div>

            <div className="grupo">  
                <input className="input-form"
                    type="text" 
                    name="series" 
                    spellCheck={false}
                    ref={
                        register({
                            required:{value:true,message:'username es obligatorio'},
                            minLength:{value:2,message:'minimo 2 caracteres'},
                            maxLength:{value:50,message:'maximo 50 caracteres'}
                        })
                    }
                /><span className="barra"></span>
                <label className="label-form">Series</label>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.series?.message}
                </span>
                </div>
            </div>            
        </div> 
        <div className="boton btn-sm flex-btn">
            <button type="submit" className="btn-form">Guardar</button>
        </div>
    </form>
    </>
        
    );
}

export default UserForm;
