import React, { useState } from "react";
import Head from "next/head";
import Layout from '../layout';
import { useContactSubmit } from "@/app/hooks/useContactUsSubmit";
import { Button } from "rsuite";

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
      formErrors.name = "Name is required.";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Valid email is required.";
    }
    if (!formData.subject) {
      formErrors.subject = "Subject is required.";
    }
    if (!formData.categories) {
      formErrors.categories = "Please select a category.";
    }
    if (!formData.message) {
      formErrors.message = "Message is required.";
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

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout>
        <section className='w-100 float-start main-contact-con'>
          <div className='container'>
            <div className='main-contact-title text-center'>
              <h2>Contact us</h2>
              <p>For all request or question, please fill out the form</p>
            </div>
            <form className='main-contact-box' onSubmit={handleSubmit}>
              <ul className='list-unstyled'>
                <li>
                  <label>Your Name*</label>
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
                  <label>Your Email Address*</label>
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
                  <label>Your Subject*</label>
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
                  <label>Category*</label>
                  <select
                    className="form-select"
                    name='categories'
                    value={formData.categories}
                    onChange={handleSelectChange}
                  >
                    <option value="Professional">Professional</option>
                    <option value="Company">Company</option>
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
                <Button loading={isPending} type='submit'>Send Message</Button>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
