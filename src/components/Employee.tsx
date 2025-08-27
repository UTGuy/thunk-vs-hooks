interface Props {
    picture: string;
    name: string;
    email: string;
    phone: string;
}

export default function Employee({ picture, name, email, phone }: Props) {
    return (
        <li>
            <img src={picture} alt={name} />
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </li>
    )
};