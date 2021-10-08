import { useState, useEffect } from 'react';

interface IStateData {
    person: Person,
    personCollection: PersonCollection,
    assetCollection: AssetCollection
}

type IStateErrors = Errors[]

type Person = {
    name: string,
    title: string
}

type PersonCollection = {
    items: PersonInfo[]
}

type PersonInfo = {
    age: number,
    company: string,
    email: string,
    image: Image,
    name: string,
    phone: string,
    title: string
}

type Image = {
    contentType: string,
    description: null | string,
    fileName: string,
    height: number,
    size: number,
    title: string,
    url: string,
    width: number
}

type AssetCollection = {
    items: Sys[]
}

type Sys = {
    sys: {
        id: string
    }
}

type Errors = {
    message: string,
    location: Location[]
}

type Location = {
    line: number,
    column: number
}

const {REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN} = process.env;

function UseContentful(query: string) {
    const [data, setData] = useState<IStateData | null>(null);
    const [errors, setErrors] = useState<IStateErrors | null>(null);

    useEffect(() => {
        fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`
            },
            body: JSON.stringify({ query })
        })
            .then(res => res.json())
            .then(({ data, errors }) => {
                if (errors) setErrors(errors);
                if (data) setData(data)
            })
            .catch((error) => setErrors([error]))
    }, [query])

    return { data, errors }

}

export default UseContentful;