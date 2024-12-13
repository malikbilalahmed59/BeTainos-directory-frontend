import { useContactSubmit } from "@/app/hooks/useContactUsSubmit";
import React, { useState } from "react";
import { Button } from "rsuite";
import Meta from "../components/Meta";
import Layout from '../layout';

interface IContactForm {
  name: string;
  email: string;
  subject: string;
  categories: "Company" | "Professional" | "Annonceur";
  message: string;
}

interface IFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  categories?: string; // Change to allow broader error message
  message?: string;
}

const Index = () => {
  const [formData, setFormData] = useState<IContactForm>({
    name: "",
    email: "",
    subject: "",
    categories: "Professional", // Default value
    message: "",
  });

  const [errors, setErrors] = useState<IFormErrors>({});

  const validate = () => {
    const formErrors: IFormErrors = {};

    if (!formData.name) {
      formErrors.name = "Le nom est requis.";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Un e-mail valide est requis.";
    }
    if (!formData.subject) {
      formErrors.subject = "Le sujet est requis.";
    }
    if (!formData.categories) {
      formErrors.categories = "Veuillez sélectionner une catégorie.";
    }
    if (!formData.message) {
      formErrors.message = "Le message est requis.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value as IContactForm['categories'] });
  };

  const { mutate, isPending } = useContactSubmit()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      mutate(formData,
        {
          onSuccess() {
            setFormData({
              name: "",
              email: "",
              subject: "",
              categories: "Professional", // Default value
              message: "",
            })
          }
        }
      )
    }
  };

  const title = "Prenez contact avec BeTaino";
  const description = "Contactez BeTaino pour toutes vos questions, demandes ou collaborations.";
  const keywords = "BeTaino, contact, questions, demandes, collaborations";

  return (
    <>
      <Meta
        title={title}
        description={description}
        keywords={keywords}
      />
      <Layout>
        <section className='w-100 float-start main-contact-con'>
          <div className='container'>
            <div className='main-contact-title text-center'>
              <h2>Contactez-nous</h2>
              <p>Pour toute demande ou question, veuillez remplir le formulaire</p>

            </div>
            <form className='main-contact-box' onSubmit={handleSubmit}>
              <ul className='list-unstyled'>
                <li>
                  <label>Votre nom*</label>
                  <input
                    type='text'
                    className="form-control"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="text-danger" >{errors.name}</span>}
                </li>
                <li>
                  <label>Votre adresse e-mail*</label>
                  <input
                    type='email'
                    name='email'
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="text-danger" >{errors.email}</span>}
                </li>
                <li>
                  <label>Votre sujet*</label>
                  <input
                    className="form-control"
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <span className="text-danger" >{errors.subject}</span>}
                </li>
                <li>
                  <label>Catégorie*</label>
                  <select
                    className="form-select"
                    name='categories'
                    value={formData.categories}
                    onChange={handleSelectChange}
                  >
                    <option value="Professional">Professionnel</option>
                    <option value="Company">Entreprise</option>
                    <option value="Annonceur">Annonceur</option>

                  </select>
                  {errors.categories && <span className="text-danger" >{errors.categories}</span>}
                </li>
                <li>
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="text-danger" >{errors.message}</span>}
                </li>
              </ul>
              <div className='main-form-btn'>
                <Button loading={isPending} type="submit">Envoyer le message</Button>

              </div>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
