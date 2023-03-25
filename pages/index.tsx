import Input from "@/components/Input/Input";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    name: yup.string().min(5,"es minimo").matches(/"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/, "segui la indicacion" ).required(),
    email: yup.string().email("Hola kaku").required("requirido bro"),
}).required();

const App = () => {
  const {register, handleSubmit, formState : { errors }, control} = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data : any) => {
    console.log(data);
  }

  const showNameErrorMessage = errors['name'] && errors['name'].type === 'required';
  const showEmailErrorMessage = errors['email'] && errors['email'].type === 'required';

  return (
    <main>
      <h1>Cadastro blog de receitas</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          control={control}
          name="name"
          type="text"
          rules={{ required: true }} 
        />
        {/* {showNameErrorMessage && <p>Nombre es obligatorio</p>} */}
        <p>{errors.name?.message?.toString()}</p>

        <Input 
          control={control}
          name="email"
          type="text"
          rules={{ required: true }} 
        />
        {/* {showEmailErrorMessage && <p>Email es obligatorio</p>} */}
        <p>{errors.email?.message?.toString()}</p>

        {/* <select>
          <option value="">Selecionar...</option>
          <option value="Leitor">Leitor</option>
          <option value="Criador">Criador de artigos</option>
        </select>
        {errors.name?.type === "required" && <p>Seleccione una opcion</p>}

        <div className="gender">
          <h3>Gênero</h3>
          <div>
            <input type="radio" value="Male" {...register("masculino")}/>
            <label>Masculino</label>
          </div>
          <div>
            <input type="radio" value="Female" {...register("femenino")}/>
            <label>Feminino</label>
          </div>
        </div>

        <input type="number" placeholder="Digite sua idade" {...register("numero", {required: true})} />
        {errors.name?.type === "required" && <p>Número es obligatorio</p>}

        <input type="password" placeholder="Digite sua senha" {...register("contrasenia", {required: true})}/>
        <p>Senha é obrigatória</p>

        <div className="checkbox">
          <input type="checkbox" {...register("submit")}/>
          <label>Concordar com os termos</label>
        </div>

        <p>Você deve concordar com os termos</p> */}

        <Button type="submit"
        sx={{bgcolor:"white", width:350}}>Registreishon</Button>
      </form>
    </main>
  );
};

export default App;