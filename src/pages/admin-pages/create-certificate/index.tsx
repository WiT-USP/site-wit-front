import React, {useState} from "react";
import GlobalStyles from "../../../styles/GlobalStyles";

import MyButton from "../../../components/admin-components/btn";
import Dropdown from "../../../components/admin-components/dropdown";

import iconReturn from "../../../assets/img/icon-return.png";
import iconFinish from "../../../assets/img/icon-finish.png";

import {Container} from "./style"

interface FormValues {
    cargaHoraria: string;
    atividade: string;
    descricao: string;
    template: File | null;
  }

const EventosAdmin: React.FC = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        cargaHoraria: '',
        atividade: '',
        descricao: '',
        template: null,
    });
  
    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleFileChange = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const { name, files } = e.target;
      if (files && files.length > 0) {
        setFormValues({ ...formValues, [name]: files[0] });
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Formulário enviado:', formValues);
    };

    const options_drop = ['Minicurso Arduíno', 'Roda de Conversa', 'Palestra linkedin'];
  
    return (
        <Container>
            <GlobalStyles/>
            <div className="header">
                <a href="/eventos-admin">
                    <MyButton text="Eventos"img_path={iconReturn}/>
                </a>
                <div className="logo">
                    <a href="/"><h1>W<span>i</span>T</h1></a>
                </div>
            </div>
            <div className="forms-event">
                <form onSubmit={handleSubmit}>
                    <div className="primeira-linha">
                        <label id="label-carga" className="label-event">
                            Carga Horária:
                            <input type="text" name="cargaHoraria" value={formValues.cargaHoraria} onChange={handleInputChange} placeholder="XX"/>
                        </label>
                        <label id="label-atividade" className="label-event">
                            Atividade:
                            <Dropdown options={options_drop} />
                        </label>
                    </div>
                    <label id="label-descricao" className="label-event">
                        Descrição:
                        <textarea rows={1} cols={50} name="descricao" value={formValues.descricao} onChange={handleInputChange}
                        onInput={(e) => {
                            if (e.target instanceof HTMLElement) {
                                e.target.style.height = 'auto'; // Redefine a altura para automática
                                e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta a altura conforme o conteúdo
                            } // Ajusta a altura conforme o conteúdo
                          }}
                        />
                    </label>
                    <label id="label-template" className="label-event">
                        Template:
                        <input id="input-template" type="file" accept="image/*" name="template" onChange={handleFileChange}/>
                    </label>
                    <button type="submit" className="btn-finish">
                        <MyButton text="Finalizar"img_path={iconFinish}/>
                    </button>
                </form>
            </div>
        </Container>
    );
};
  
export default EventosAdmin;