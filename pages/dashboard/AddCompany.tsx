import { API_URL } from '@/app/constants/constants';
import { useCategories } from '@/app/hooks/useAPIs';
import axiosInstance from '@/app/services/axiosInstance';
import { addCompanySchema } from '@/app/validation/registrationSchema';
import PlusIcon from '@rsuite/icons/Plus';
import TrashIcon from '@rsuite/icons/Trash';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
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
    const [file, setFile] = useState<null | File>(null)
    const [data, setData] = useState<IState>(initialState);
    const userSession = useSession()
    const [formError, setFormError] = useState<{ [key: string]: string }>({});
    const { data: catList, isLoading: catLoading } = useCategories();
    const [isLoading, setIsLoading] = useState(false)
    const queryClient = useQueryClient();
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
        setIsLoading(true);

        try {
            let uploadedLogoId = null;
            if (file) {
                const logoData = new FormData();
                logoData.append('files', file); // Use 'files' as the key or change to match backend expectations
                const uploadResponse = await axios.post(API_URL + "upload", logoData, {
                    headers: {
                        'Authorization': `Bearer ${userSession?.data?.user.token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                });

                uploadedLogoId = uploadResponse.data?.[0]?.id;
            }

            // Prepare FormData object for the company details
            const formData = new FormData();
            if (uploadedLogoId) {
                formData.append('Logo', uploadedLogoId);
            }
            formData.append('Name', data.name);
            formData.append('PostelAddress', data.postalAddress);
            formData.append('Phone', data.phone);
            formData.append('Email', data.email);
            formData.append('Website', data.website);
            formData.append('CoFounderName', data.coFounderName);
            formData.append('FounderName', data.founderName);
            formData.append('Description', data.description);
            formData.append('FieldOfExpertise', data.fieldOfExpertise);
            formData.append('Category', data.categoriesList);


            const session = await getSession();

            // Make API call
            const response = await fetch('/api/addData', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${session?.user?.token}`,
                },
                body: formData,
            });

            if (response.ok) {
                setData(initialState);
                setFile(null);
                setIsLoading(false);
                toast.success("Successfully submitted.");
                queryClient.invalidateQueries({
                    queryKey: [`my-companies`],
                });;
            } else {
                const error = await response.json();
                setIsLoading(false);
                console.error('Error submitting data:', error);
            }
        } catch (error) {
            setIsLoading(false);
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
            <Form className="basic-form row" onSubmit={(e: any) => e.preventDefault()} layout="horizontal">
                <Form.Group controlId="name" className='col-lg-6'>
                    <Form.ControlLabel>Name*</Form.ControlLabel>
                    <Form.Control name="name" value={data.name} onChange={(value) => handleChange({ name: value })} />
                    {formError.name && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.name}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="postalAddress" className='col-lg-6'>
                    <Form.ControlLabel>Postal Address*</Form.ControlLabel>
                    <Form.Control
                        name="postalAddress"
                        accepter={Textarea}
                        value={data.postalAddress}
                        onChange={(value) => handleChange({ postalAddress: value })}
                    />
                    {formError.postalAddress && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.postalAddress}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="phone" className='col-lg-6'>
                    <Form.ControlLabel>Phone*</Form.ControlLabel>
                    <Form.Control name="phone" value={data.phone} onChange={(value) => handleChange({ phone: value })} />
                    {formError.phone && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.phone}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="email" className='col-lg-6'>
                    <Form.ControlLabel>Email*</Form.ControlLabel>
                    <Form.Control name="email" value={data.email} onChange={(value) => handleChange({ email: value })} />
                    {formError.email && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.email}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="website" className='col-lg-6'>
                    <Form.ControlLabel>Website</Form.ControlLabel>
                    <Form.Control name="website" value={data.website} onChange={(value) => handleChange({ website: value })} />
                    {formError.website && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.website}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="founderName" className='col-lg-6'>
                    <Form.ControlLabel>Founder Name*</Form.ControlLabel>
                    <Form.Control name="founderName" value={data.founderName} onChange={(value) => handleChange({ founderName: value })} />
                    {formError.founderName && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.founderName}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="categories" className='col-lg-6'>
                    <Form.ControlLabel>Categories*</Form.ControlLabel>
                    <Form.Control
                        name="categories"
                        accepter={SelectPicker}
                        data={catsList || []}
                        loading={catLoading}
                        onChange={(value) => handleChange({ categoriesList: value })}
                    />
                    {formError.categoriesList && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.categoriesList}</Form.HelpText>}

                </Form.Group>

                <Form.Group controlId="description" className='col-lg-6'>
                    <Form.ControlLabel>Description*</Form.ControlLabel>
                    <Form.Control
                        name="description"
                        accepter={Textarea}
                        rows={3}
                        value={data.description}
                        onChange={(value) => handleChange({ description: value })}
                    />
                    {formError.description && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.description}</Form.HelpText>}
                </Form.Group>

                <Form.Group controlId="socials" className='col-lg-6'>
                    <Stack justifyContent='flex-start' alignItems='center' spacing={8}>
                        <Text weight='bold'>Socials</Text>
                        <IconButton disabled icon={<PlusIcon />} appearance="primary" onClick={handleAddSocial} />
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
                                {formError[`socials.${index}.name`] && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError[`socials.${index}.name`]}</Form.HelpText>}
                            </Form.Group>
                            <Form.Group controlId={`socials-link-${index}`}>
                                <Form.ControlLabel>Link</Form.ControlLabel>
                                <Form.Control
                                    name={`socials-${index}-link`}
                                    value={social.link}
                                    onChange={(value) => handleSocialChange(index, 'link', value)}
                                />
                                {formError[`socials.${index}.link`] && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError[`socials.${index}.link`]}</Form.HelpText>}
                            </Form.Group>
                            <IconButton icon={<TrashIcon />} appearance="ghost" color="red" onClick={() => handleDeleteSocial(index)} />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group controlId="logo" className='col-lg-6'>
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
                                setFile(file) // Save file name or the file object
                            } else {
                                // Clear the logo field and any error if no file is selected
                                setFormError((prev) => ({ ...prev, logo: '' }));
                                handleChange({ logo: '' });
                            }
                        }}
                    />
                    {formError.logo && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.logo}</Form.HelpText>}
                </Form.Group>

                <Form.Group>
                    <ButtonToolbar>
                        <Button loading={isLoading} appearance="primary" block onClick={handleSubmit}>Submit</Button>
                        {/* <Button appearance="default">Cancel</Button> */}
                    </ButtonToolbar>
                </Form.Group>
            </Form>
        </div>
    );
};

export default AddCompany;
