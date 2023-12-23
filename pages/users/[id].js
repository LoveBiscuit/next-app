import { useRouter } from "next/router";

import styles from "../../styles/User.module.scss";
import MainContainer from "../../components/MainCointainer";

export default function User({ user }) {
    const { query } = useRouter();

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>Пользователь с ID {query.id}</h1>
                <p>Имя пользователя: {user.name}</p>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: { user }
    }
}