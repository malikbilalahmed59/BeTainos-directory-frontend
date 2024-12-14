import { API_URL, socialPlatforms } from '@/app/constants/constants';
import { useCategories } from '@/app/hooks/useAPIs';
import { addProfSchema } from '@/app/validation/registrationSchema';
import PlusIcon from '@rsuite/icons/Plus';
import TrashIcon from '@rsuite/icons/Trash';
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
    Socials: {
        Link: string;
        Name: string;
    }[];
    categoriesList: string;
    description: string;
    ServicesOffered: string;
    officeHours: string;
}

const initialState: IState = {
    logo: '',
    name: '',
    postalAddress: '',
    phone: '',
    email: '',
    website: '',
    Socials: [],
    categoriesList: '',
    description: '',
    ServicesOffered: '',
    officeHours: ''
};

const AddProfessional = () => {
    const [file, setFile] = useState<null | File>(null)
    const [data, setData] = useState<IState>(initialState);
    const [formError, setFormError] = useState<{ [key: string]: string }>({});
    const { data: catList, isLoading: catLoading } = useCategories();
    const [isLoading, setIsLoading] = useState(false)
    const handleChange = (value: Partial<IState>) => {
        setData({ ...data, ...value });
    };
    const userSession = useSession()

    const validate = () => {
        const { error } = addProfSchema.validate(data, { abortEarly: false });

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
            return;
        }

        try {
            setIsLoading(true);
            let uploadedLogoId = null;

            // Upload the logo file if it exists
            if (file) {
                const logoData = new FormData();
                logoData.append('files', file);

                const uploadResponse = await axios.post(API_URL + "upload", logoData, {
                    headers: {
                        'Authorization': `Bearer ${userSession?.data?.user.token}`,
                    },
                });

                uploadedLogoId = uploadResponse.data?.[0]?.id;
            }

            // Prepare the JSON object for the company details
            const payload = {
                Logo: uploadedLogoId, // Pass the uploaded logo ID
                Name: data.name,
                PostelAddress: data.postalAddress,
                Phone: data.phone,
                Email: data.email,
                Website: data.website,
                Description: data.description,
                ServicesOffered: data.ServicesOffered,
                officeHours: data.officeHours,
                Socials: data.Socials,
                Category: data.categoriesList, // Pass the categories
            };

            const session = await getSession(); // Retrieve the session from NextAuth.js

            // Send the payload as JSON
            const response = await fetch('/api/addProf', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${session?.user?.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setData(initialState);
                setIsLoading(false);
                toast.success("Successfully submitted.");
                setData(initialState)
                setFile(null)
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
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
            Socials: [...prevData.Socials, { Link: '', Name: '' }]
        }));
    };

    const handleDeleteSocial = (index: number) => {
        setData(prevData => ({
            ...prevData,
            socials: prevData.Socials.filter((_, i) => i !== index)
        }));
    };

    const handleSocialChange = (index: number, field: keyof IState["Socials"][0], value: string) => {
        const updatedSocials = [...data.Socials];
        updatedSocials[index] = { ...updatedSocials[index], [field]: value };
        setData({ ...data, Socials: updatedSocials });
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
                <Form.Group controlId="servicesOffered" className='col-lg-6'>
                    <Form.ControlLabel>ServicesOffered*</Form.ControlLabel>
                    <Form.Control
                        name="ServicesOffered"
                        accepter={Textarea}
                        rows={3}
                        value={data.ServicesOffered}
                        onChange={(value) => handleChange({ ServicesOffered: value })}
                    />
                    {formError.ServicesOffered && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.ServicesOffered}</Form.HelpText>}
                </Form.Group>
                <Form.Group controlId="officeHours" className='col-lg-6'>
                    <Form.ControlLabel>officeHours*</Form.ControlLabel>
                    <Form.Control
                        name="officeHours"
                        accepter={Textarea}
                        rows={3}
                        value={data.officeHours}
                        onChange={(value) => handleChange({ officeHours: value })}
                    />
                    {formError.officeHours && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.officeHours}</Form.HelpText>}
                </Form.Group>
                <Form.Group controlId="logo" className='col-lg-6'>
                    <Form.ControlLabel>Logo</Form.ControlLabel>
                    <input
                        className='form-control'
                        type="file"
                        accept="image/*"
                        name="logo"
                        onChange={(event) => {
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
                                setFile(file)
                            } else {
                                // Clear the logo field and any error if no file is selected
                                setFormError((prev) => ({ ...prev, logo: '' }));
                                handleChange({ logo: '' });
                            }
                        }}
                    />
                    {formError.logo && <Form.HelpText style={{ color: 'red', marginLeft: "0px" }}>{formError.logo}</Form.HelpText>}
                </Form.Group>
                <Form.Group controlId="socials" className="col-lg-6">
                    <Stack justifyContent="flex-start" alignItems="center" spacing={8}>
                        <Text weight="bold">Socials</Text>
                        <IconButton icon={<PlusIcon />} appearance="primary" onClick={handleAddSocial} />
                    </Stack>
                    {data.Socials.map((social, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <Form.Group controlId={`socials-name-${index}`}>
                                <Form.ControlLabel>Name</Form.ControlLabel>
                                <Form.Control
                                    name="Socials"
                                    accepter={SelectPicker}
                                    data={socialPlatforms || []}
                                    value={social.Name} // Bind value to the specific field
                                    onChange={(value) => handleSocialChange(index, 'Name', value)}
                                />
                                {formError[`socials.${index}.name`] && (
                                    <Form.HelpText style={{ color: 'red', marginLeft: '0px' }}>
                                        {formError[`socials.${index}.name`]}
                                    </Form.HelpText>
                                )}
                            </Form.Group>
                            <Form.Group controlId={`socials-link-${index}`}>
                                <Form.ControlLabel>Link</Form.ControlLabel>
                                <Form.Control
                                    name={`socials-${index}-link`}
                                    value={social.Link} // Bind value to the specific field
                                    onChange={(value) => handleSocialChange(index, 'Link', value)}
                                />
                                {formError[`socials.${index}.link`] && (
                                    <Form.HelpText style={{ color: 'red', marginLeft: '0px' }}>
                                        {formError[`socials.${index}.link`]}
                                    </Form.HelpText>
                                )}
                            </Form.Group>
                            <IconButton
                                icon={<TrashIcon />}
                                appearance="ghost"
                                color="red"
                                onClick={() => handleDeleteSocial(index)}
                            />
                        </div>
                    ))}
                </Form.Group>



                <Form.Group>
                    <ButtonToolbar>
                        <Button loading={isLoading} appearance="primary" block onClick={handleSubmit}>Submit</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
        </div>
    );
};

export default AddProfessional;
