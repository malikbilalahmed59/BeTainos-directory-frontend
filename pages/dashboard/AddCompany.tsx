import { useCategories } from '@/app/hooks/useAPIs';
import { addCompanySchema } from '@/app/validation/registrationSchema';
import PlusIcon from '@rsuite/icons/Plus';
import TrashIcon from '@rsuite/icons/Trash';
import { getSession } from 'next-auth/react';
import React, { useState } from 'react';
import {
    Button,
    ButtonToolbar,
    Divider,
    Form,
    IconButton,
    Input,
    Message,
    SelectPicker,
    Stack,
    Text
} from 'rsuite';

const Textarea = React.forwardRef<HTMLInputElement, any>((props, ref: any) => (
    <Input {...props} as="textarea" ref={ref} />
));
Textarea.displayName = "TextArea";

interface IState {
    logo: string;
    name: string;
    postalAddress: string;
    phone: string;
    email: string;
    website: string;
    socials: {
        icon: string;
        link: string;
        name: string;
    }[];
    coFounderName: string;
    founderName: string;
    categoriesList: string;
    description: string;
    fieldOfExpertise: string;
}

const initialState: IState = {
    logo: '',
    name: '',
    postalAddress: '',
    phone: '',
    email: '',
    website: '',
    socials: [],
    coFounderName: '',
    founderName: '',
    categoriesList: '',
    description: '',
    fieldOfExpertise: '',
};

const AddCompany = () => {
    const [data, setData] = useState<IState>(initialState);
    const [formError, setFormError] = useState<{ [key: string]: string }>({});
    const { data: catList, isLoading: catLoading } = useCategories();

    const handleChange = (value: Partial<IState>) => {
        setData({ ...data, ...value });
    };

    const validate = () => {
        const { error } = addCompanySchema.validate(data, { abortEarly: false });

        if (error) {
            const errors: { [key: string]: string } = {};
            error.details.forEach((err: any) => {
                errors[err?.context.key] = err.message;
            });
            setFormError(errors);
            return false;
        }

        setFormError({});
        return true;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!validate()) {
            console.log('Validation failed:', JSON.stringify(formError));
            return;
        }

        console.log("pass", data.categoriesList)
        try {
            // Prepare FormData object
            const formData = new FormData();

            // Append fields to FormData
            // formData.append('logo', data.logo);
            formData.append('Name', data.name);
            formData.append('PostelAddress', data.postalAddress);
            formData.append('Phone', data.phone);
            formData.append('Email', data.email);
            formData.append('Website', data.website);
            formData.append('CoFounderName', data.coFounderName);
            formData.append('FounderName', data.founderName);
            formData.append('Description', data.description);
            formData.append('FieldOfExpertise', data.fieldOfExpertise);

            // Add array fields as JSON strings
            formData.append('categories_list', data.categoriesList);
            // formData.append('socials', JSON.stringify(data.socials));
            const session = await getSession();  // Retrieve the session from NextAuth.js

            // Make API call
            const response = await fetch('/api/addData', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${session?.user?.token}`,
                    // 'Content-Type': 'multipart/form-data'
                },
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Data successfully submitted:', result);
            } else {
                const error = await response.json();
                console.error('Error submitting data:', error);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
        }
    };


    const handleAddSocial = () => {
        setData(prevData => ({
            ...prevData,
            socials: [...prevData.socials, { icon: '', link: '', name: '' }]
        }));
    };

    const handleDeleteSocial = (index: number) => {
        setData(prevData => ({
            ...prevData,
            socials: prevData.socials.filter((_, i) => i !== index)
        }));
    };

    const handleSocialChange = (index: number, field: keyof IState["socials"][0], value: string) => {
        const updatedSocials = [...data.socials];
        updatedSocials[index][field] = value;
        setData({ ...data, socials: updatedSocials });
    };



    const catsList = catList?.map(item => ({ label: item.Name, value: item.Name }));

    return (
        <div className='profile-box generictab-box'>
            <Message>
                Please fill out the form below to add company details. Fields marked as required must be completed. You can add multiple social links by clicking &quot;Add Social&quot; and remove any entry with the delete icon.
            </Message>
            <Divider />
            <Form className="basic-form" onSubmit={(e: any) => e.preventDefault()} layout="horizontal">
                <Form.Group controlId="name">
                    <Form.ControlLabel>Name*</Form.ControlLabel>
                    <Form.Control name="name" value={data.name} onChange={(value) => handleChange({ name: value })} />
                    {formError.name && <Form.HelpText style={{ color: 'red' }}>{formError.name}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="postalAddress">
                    <Form.ControlLabel>Postal Address*</Form.ControlLabel>
                    <Form.Control
                        name="postalAddress"
                        accepter={Textarea}
                        value={data.postalAddress}
                        onChange={(value) => handleChange({ postalAddress: value })}
                    />
                    {formError.postalAddress && <Form.HelpText style={{ color: 'red' }}>{formError.postalAddress}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.ControlLabel>Phone*</Form.ControlLabel>
                    <Form.Control name="phone" value={data.phone} onChange={(value) => handleChange({ phone: value })} />
                    {formError.phone && <Form.HelpText style={{ color: 'red' }}>{formError.phone}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.ControlLabel>Email*</Form.ControlLabel>
                    <Form.Control name="email" value={data.email} onChange={(value) => handleChange({ email: value })} />
                    {formError.email && <Form.HelpText style={{ color: 'red' }}>{formError.email}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="website">
                    <Form.ControlLabel>Website</Form.ControlLabel>
                    <Form.Control name="website" value={data.website} onChange={(value) => handleChange({ website: value })} />
                    {formError.website && <Form.HelpText style={{ color: 'red' }}>{formError.website}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="founderName">
                    <Form.ControlLabel>Founder Name*</Form.ControlLabel>
                    <Form.Control name="founderName" value={data.founderName} onChange={(value) => handleChange({ founderName: value })} />
                    {formError.founderName && <Form.HelpText style={{ color: 'red' }}>{formError.founderName}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="categories">
                    <Form.ControlLabel>Categories*</Form.ControlLabel>
                    <Form.Control
                        name="categories"
                        accepter={SelectPicker}
                        data={catsList || []}
                        loading={catLoading}
                        onChange={(value) => handleChange({ categoriesList: value })}
                    />
                    {formError.categoriesList && <Form.HelpText style={{ color: 'red' }}>{formError.categoriesList}</Form.HelpText>}

                </Form.Group>

                <Form.Group controlId="description">
                    <Form.ControlLabel>Description*</Form.ControlLabel>
                    <Form.Control
                        name="description"
                        accepter={Textarea}
                        rows={3}
                        value={data.description}
                        onChange={(value) => handleChange({ description: value })}
                    />
                    {formError.description && <Form.HelpText style={{ color: 'red' }}>{formError.description}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="socials">
                    <Stack justifyContent='flex-start' alignItems='center' spacing={8}>
                        <Text weight='bold'>Socials</Text>
                        <IconButton icon={<PlusIcon />} appearance="primary" onClick={handleAddSocial} />
                    </Stack>
                    {data.socials.map((social, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <Form.Group controlId={`socials-name-${index}`}>
                                <Form.ControlLabel>Name</Form.ControlLabel>
                                <Form.Control
                                    name={`socials-${index}-name`}
                                    value={social.name}
                                    onChange={(value) => handleSocialChange(index, 'name', value)}
                                />
                                {formError[`socials.${index}.name`] && <Form.HelpText style={{ color: 'red' }}>{formError[`socials.${index}.name`]}</Form.HelpText>}
                            </Form.Group>
                            <Form.Group controlId={`socials-link-${index}`}>
                                <Form.ControlLabel>Link</Form.ControlLabel>
                                <Form.Control
                                    name={`socials-${index}-link`}
                                    value={social.link}
                                    onChange={(value) => handleSocialChange(index, 'link', value)}
                                />
                                {formError[`socials.${index}.link`] && <Form.HelpText style={{ color: 'red' }}>{formError[`socials.${index}.link`]}</Form.HelpText>}
                            </Form.Group>
                            <IconButton icon={<TrashIcon />} appearance="ghost" color="red" onClick={() => handleDeleteSocial(index)} />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="logo">
                    <Form.ControlLabel>Logo</Form.ControlLabel>
                    <input
                        className='form-control'
                        type="file"
                        accept="image/*"
                        name="logo"
                        onChange={(event) => {
                            console.log(event)
                            const file = event.target.files?.[0];
                            if (file) {
                                // Validate file type
                                if (!file.type.startsWith('image/')) {
                                    setFormError((prev) => ({
                                        ...prev,
                                        logo: 'Only image files are allowed',
                                    }));
                                    return;
                                }

                                // Validate file size (e.g., max 5MB)
                                if (file.size > 5 * 1024 * 1024) {
                                    setFormError((prev) => ({
                                        ...prev,
                                        logo: 'File size exceeds 5MB limit',
                                    }));
                                    return;
                                }

                                setFormError((prev) => ({ ...prev, logo: '' })); // Clear any previous errors
                                handleChange({ logo: file.name }); // Save file name or the file object
                            } else {
                                // Clear the logo field and any error if no file is selected
                                setFormError((prev) => ({ ...prev, logo: '' }));
                                handleChange({ logo: '' });
                            }
                        }}
                    />
                    {formError.logo && <Form.HelpText style={{ color: 'red' }}>{formError.logo}</Form.HelpText>}
                </Form.Group>

                <Form.Group>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                        <Button appearance="default">Cancel</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
        </div>
    );
};

export default AddCompany;
