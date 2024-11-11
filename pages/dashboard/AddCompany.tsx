import { useCategories } from '@/app/hooks/useAPIs';
import InfoOutlineIcon from '@rsuite/icons/InfoOutline';
import PlusIcon from '@rsuite/icons/Plus';
import TrashIcon from '@rsuite/icons/Trash';
import Link from 'next/link';
import React, { useState } from 'react';
import {
    Button,
    ButtonToolbar,
    Divider,
    Form,
    IconButton,
    Input,
    Message,
    Popover,
    SelectPicker,
    Stack,
    Text,
    Whisper
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
    categoriesList: string[];
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
    categoriesList: [],
    description: '',
    fieldOfExpertise: '',
};

const AddCompany = () => {
    const [data, setData] = useState<IState>(initialState);
    const [formError, setFormError] = useState<{ [key: string]: string }>({});
    const { data: catList, isLoading: catLoading } = useCategories()
    const triggerRef = React.useRef<any>();
    const handleChange = (value: Partial<IState>) => {
        setData({ ...data, ...value });
    };

    const validate = () => {
        const errors: { [key: string]: string } = {};

        if (!data.name) {
            errors.name = 'Name is required';
        }
        if (!data.postalAddress) {
            errors.postalAddress = 'Postal Address is required';
        }
        if (!data.description) {
            errors.description = 'Description is required';
        }
        if (!data.phone) {
            errors.phone = 'Phone is required';
        }
        if (!data.founderName) {
            errors.phone = 'Founder Name is required';
        }
        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Invalid email format';
        }
        // if (!data.website) {
        //     errors.website = 'Website is required';
        // } else if (!/^https?:\/\/\S+\.\S+$/.test(data.website)) {
        //     errors.website = 'Invalid website URL';
        // }

        setFormError(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = () => {
        if (!validate()) {
            console.log('Validation failed:', JSON.stringify(formError));
            return;
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
    const speaker = (<Popover title="Social Icons">
        <span>
            <Link href={'https://lucide.dev/icons/'} target='_blank'>Click here</Link>&nbsp; to download the icons.
        </span>

    </Popover>)
    const catsList = catList?.map(item => ({ label: item.Name, value: item.Name }))

    return (
        <div className='profile-box generictab-box'>
            <Message>
                Please fill out the form below to add company details. Fields marked as required must be completed. You can add multiple social links by clicking &quot;Add Social&quot; and remove any entry with the delete icon.
            </Message>
            <Divider />
            <Form className="basic-form" layout="horizontal">
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
                <Form.Group controlId="selectPicker">
                    <Form.ControlLabel>Category</Form.ControlLabel>
                    <Form.Control name="selectPicker" loading={catLoading} accepter={SelectPicker} data={catsList || []} />
                </Form.Group>
                <Form.Group controlId="uploader">
                    <Form.ControlLabel>Logo</Form.ControlLabel>
                    {/* <Uploader action="#" onUpload={(file) => handleChange({ logo: file.blobFile as string })} /> */}
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.ControlLabel>Description*</Form.ControlLabel>
                    <Form.Control name="description" accepter={Textarea} rows={3} value={data.description} onChange={(value) => handleChange({ description: value })} />
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
                            </Form.Group>
                            <Form.Group controlId={`socials-icon-${index}`}>
                                <Form.HelpText style={{ position: 'relative' }}>
                                    <Form.ControlLabel>
                                        Icon
                                        <Whisper ref={triggerRef} placement="top" trigger="hover" controlId="control-id-hover" speaker={speaker}>
                                            <IconButton
                                                icon={<InfoOutlineIcon />}
                                                style={{
                                                    position: 'absolute',
                                                    top: '-6px',
                                                    left: '12.2%',
                                                    zIndex: 99
                                                }}
                                                appearance="default"
                                                size="xs"
                                            />
                                        </Whisper>
                                    </Form.ControlLabel>
                                </Form.HelpText>
                                {/* <Uploader action="#" onUpload={(file) => handleSocialChange(index, 'icon', file.blobFile as string)} /> */}
                            </Form.Group>
                            <Form.Group controlId={`socials-link-${index}`}>
                                <Form.ControlLabel>Link</Form.ControlLabel>
                                <Form.Control
                                    name={`socials-${index}-link`}
                                    value={social.link}
                                    onChange={(value) => handleSocialChange(index, 'link', value)}
                                />
                            </Form.Group>
                            <IconButton icon={<TrashIcon />} appearance="ghost" color="red" onClick={() => handleDeleteSocial(index)} />
                        </div>
                    ))}
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
