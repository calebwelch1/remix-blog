import React, { useState, useEffect } from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient, useQuery, gql } from '@apollo/client';

// Create the Apollo Client instance
const client = new ApolloClient({
  uri: 'https://your-shopify-url/admin/api/2021-07/graphql.json',  // Shopify's GraphQL endpoint
  headers: {
    'Authorization': `Bearer YOUR_ACCESS_TOKEN`,  // Include the Shopify access token
  },
  cache: new InMemoryCache(),
});

// Define your GraphQL query
const GET_CUSTOMER = gql`
  query GetCustomer($customerId: ID!) {
    customer(id: $customerId) {
      id
      firstName
      lastName
      email
      orders(first: 5) {
        edges {
          node {
            id
            name
            totalPrice
          }
        }
      }
    }
  }
`;

// React component to fetch and display customer data
const CustomerDetails = ({ customerId }) => {
  const { loading, error, data } = useQuery(GET_CUSTOMER, {
    variables: { customerId },  // Dynamically pass the customer ID here
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.customer.firstName} {data.customer.lastName}</h1>
      <p>Email: {data.customer.email}</p>
      <h2>Orders</h2>
      <ul>
        {data.customer.orders.edges.map(({ node }) => (
          <li key={node.id}>
            {node.name}: ${node.totalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Wrapping your app with ApolloProvider
const App = () => {
  const customerId = "gid://shopify/Customer/123456";  // Example dynamic ID

  return (
    <ApolloProvider client={client}>
      <CustomerDetails customerId={customerId} />
    </ApolloProvider>
  );
};

export default App;


 +++++++++++
try {
  await axios.put(`https://patrol-test.myshopify.com/admin/products/${productId}.json`, {
    product: {
      title: newTitle
    }
  });
  return redirect(`/product/${productId}`);
} catch (error) {
  console.error("Error updating product:", error);
  return new Response("Failed to update product", { status: 500 });
}
++++++++++
import axios from 'axios';
import { redirect } from '@remix-run/node';

export let loader = async ({ params, request }) => {
  const formData = await request.formData();
  const newTitle = formData.get("newTitle");  // Get new title from form data
  const productId = params.productid;         // Get the product ID from route params

  // GraphQL mutation to update the product's title
  const mutation = `
    mutation UpdateProductTitle($id: ID!, $newTitle: String!) {
      productUpdate(input: {id: $id, title: $newTitle}) {
        product {
          id
          title
        }
      }
    }
  `;

  // Variables for the mutation
  const variables = {
    id: `gid://shopify/Product/${productId}`, // Format the product ID as Shopify expects (Global ID format)
    newTitle: newTitle
  };

  // Send the mutation to Shopify's GraphQL endpoint
  const response = await axios.post(
    'https://patrol-test.myshopify.com/admin/api/2023-01/graphql.json', // Your Shopify API endpoint
    {
      query: mutation,
      variables: variables,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Add your Shopify access token here
      },
    }
  );

  const data = response.data;
  
  // Check if the mutation was successful
  if (data.errors) {
    console.error('Error updating product:', data.errors);
    return new Response("Failed to update product", { status: 500 });
  }

  // Optionally, you can redirect the user after the update
  return redirect(`/product/${productId}`);
};
