import React, {useState} from "react";
import GlobalStyles from "../../../styles/GlobalStyles";

import MyButton from "../../../components/admin-components/btn";

import iconReturn from "../../../assets/img/icon-return.png";
import iconFinish from "../../../assets/img/icon-finish.png";

import {Container} from "./style"

interface FormValues {
    nomeEvento: string;
    inicio: string;
    fim: string;
    descricao: string;
    banner: File | null;
    valor: number;
    linkPagamento: string;
    linkDrive: string;
  }

const EventosAdmin: React.FC = () => {
    const [formValues, setFormValues] = useState<FormValues>({
      nomeEvento: '',
      inicio: '',
      fim: '',
      descricao: '',
      banner: null,
      valor: 0,
      linkPagamento: '',
      linkDrive: '',
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
  
    return (
        <Container>
            <GlobalStyles/>
            <div className="header">
                <a href="/certificados-admin">
                    <MyButton text="Eventos"img_path={iconReturn}/>
                </a>
                <div className="logo">
                    <a href="/"><h1>W<span>i</span>T</h1></a>
                </div>
            </div>
            <div className="forms-event">
                <form onSubmit={handleSubmit}>
                    <div className="primeira-linha">
                        <label id="label-nome" className="label-event">
                            Nome do evento:
                            <input type="text" name="nomeEvento" value={formValues.nomeEvento} onChange={handleInputChange}/>
                        </label>
                        <label id="label-inicio" className="label-event">
                            Inicio:
                            <input type="text" name="inicio" value={formValues.inicio} onChange={handleInputChange} placeholder="DD/MM/AAAA"/>
                        </label>
                        <label id="label-fim" className="label-event">
                            Fim:
                            <input type="text" name="fim" value={formValues.fim} onChange={handleInputChange} placeholder="DD/MM/AAAA"/>
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
                    <label id="label-banner" className="label-event">
                        Banner:
                        <input id="input-banner" type="file" accept="image/*" name="banner" onChange={handleFileChange}/>
                    </label>
                    <h2 className="title-section">Coffee</h2>
                    <div className="segunda-linha">
                        <label id="label-valor" className="label-event">
                            Valor:
                            <input type="text" name="valor" onChange={handleInputChange} placeholder="R$ XX,XX"/>
                        </label>
                        <label id="label-link" className="label-event">
                            Link do pagamento:
                            <input type="text" name="linkPagamento" onChange={handleInputChange}/>
                        </label>
                    </div>
                    <h2 className="title-section">Fotos</h2>
                    <label id="label-drive" className="label-event">
                        Link do Drive:
                        <input type="text" name="linkDrive" onChange={handleInputChange}/>
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