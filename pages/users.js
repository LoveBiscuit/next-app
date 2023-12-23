import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "../components/MainCointainer";

export default function Users({users}) {
    return (
        <MainContainer keywords={"users, list"}>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user => (
                    <Link href={`/users/${user.id}`} key={user.id}>
                        <li>{user.name}</li>
                    </Link>
                ))}
            </ul>
        </MainContainer>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return {
        props: {users}
    }
}