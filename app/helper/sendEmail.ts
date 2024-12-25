
import { MailtrapClient } from "mailtrap";
const TOKEN = "4e371afa0775afe45771e89243ea3e07";

const client = new MailtrapClient({
    token: TOKEN,
});

const sender = {
    email: "hello@demomailtrap.com",
    name: "New Company/Prfessional",
};
const recipients = [
    {
        email: "contact.betainos@gmail.com",
    }
];

export const sendEmail = (templateVariables: { company_info_name: string; email: string; company_info_phone: string }) => {
    return client
        .send({
            from: sender,
            to: recipients,
            template_uuid: "243fe1f2-1149-4321-9ce7-409166a4eb1f",
            template_variables: templateVariables,
        })
        .then((response: any) => {
            console.log("Email sent successfully:", response);
        })
        .catch((error: any) => {
            console.error("Error sending email:", error.message);
        });
};
