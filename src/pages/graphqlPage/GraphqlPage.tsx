import React from 'react';
import { Link } from 'react-router-dom';
import UseContentful from '../../hooks/useContentful/UseContentful';
import { ROUTES } from '../../router/router';

const query = `
query {
  person(id: "en3mmA6J7mYVjDVKGhY9x") {
    name,
    title
  }
  personCollection(where: {
    AND: [
      {name_contains: "Magda"},
      {age_gte: 44}
    ]
  }) {
    items {
      name,
      age
      title,
      company,
      email,
      phone,
      image {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }
  }
  assetCollection {
    items {
      sys {
        id
      }
    }
  }
}
`

function GraphqlPage() {
    const { HOME } = ROUTES;
    let { data, errors } = UseContentful(query);

    if (errors?.length) return <p style={{color: 'red'}}>{errors.map(error => error.message).join('')}</p>

    if (!data) return <p>No GraphQl data</p>

    return (
        <div>
            <Link to={HOME}>Home</Link>
            <h2>GraphQL Page</h2>
            <p>{data.person.name}</p>
            <p>{data.person.title}</p>
            <h2>Person Collection</h2>
            {data.personCollection.items.map(({ age, company, email, image, name, phone, title}, index) => {
                return (
                    <div key={`${name}-${index}`}>
                        <p>{age}</p>
                        <p>{company}</p>
                        <p>{email}</p>
                        <p>{name}</p>
                        <p>{phone}</p>
                        <p>{title}</p>
                        <div>
                            <p>Title: {image.title}</p>
                            <p>Description: {image.description}</p>
                            <p>URL: {image.url}</p>
                            <p>Size: {image.size}</p>
                            <p>Height: {image.height}</p>
                            <p>Width: {image.width}</p>
                            <p>ContentType: {image.contentType}</p>
                            <p>Image: {image.fileName}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GraphqlPage;